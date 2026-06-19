import { parse } from "@wordpress/blocks";
import { dispatch, select } from "@wordpress/data";
import { autoAttemptRecovery } from '../../block-recovery/attempt-recovery';

/**
 * Allowed attributes (optional strict mode)
 */
const allowedAttributes = {
    "frontis-blocks/advanced-image": ["url", "alt", "caption"],
    "frontis-blocks/advanced-button": ["text", "url", "style"],
};

/**
 * Clean unexpected/mismatched attributes
 * - AllowedAttributes e jodi kono block define thake → shei keys filter hobe
 * - Otherwise sob attributes default vabe allow hobe
 * - InnerHTML / text content preserve hobe
 */
const cleanBlockAttributes = (blocks) => {
    return blocks.map((block) => {
        if (!block) return block;
        const blockAttrs = block.attributes || {};
        const allowList = allowedAttributes[block.name] || Object.keys(blockAttrs);
        const safeAttrs = {};
        allowList.forEach((key) => {
            if (blockAttrs[key] !== undefined) {
                safeAttrs[key] = blockAttrs[key];
            }
        });

        if (block.originalContent) {
            safeAttrs.originalContent = block.originalContent;
        }
        if (blockAttrs.content) {
            safeAttrs.content = blockAttrs.content;
        }

        const cleanedInnerBlocks = cleanBlockAttributes(block.innerBlocks || []);

        return {
            ...block,
            attributes: safeAttrs,
            innerBlocks: cleanedInnerBlocks,
        };
    });
};


/**
 * Import blocks into Gutenberg editor
 */
export const importBlocksFromApi = async (patternData) => {
    try {
        const pluginUrl = window.frontisBlocksAdmin?.pluginUrl || '';
        if (pluginUrl) {
            // Replace any remote domain plugin asset URL with local plugin asset URL
            patternData.content = patternData.content.replace(
                /https?:\/\/[^\/]+\/wp-content\/plugins\/frontis-blocks\/assets\//g,
                pluginUrl + 'assets/'
            );
        }

        let parsedBlocks = parse(patternData.content);
        const imageUrls = extractImageUrls(parsedBlocks);

        // Process image uploads in parallel
        if (imageUrls.length > 0) {
            // Map URLs to their new media library URLs
            const uploadPromises = imageUrls.map(url => uploadImagesToMedia(url));
            const uploadedResults = await Promise.all(uploadPromises);

            // Create a map of old URLs to new URLs for replacement
            const urlReplacementMap = uploadedResults.reduce((acc, result, index) => {
                acc[imageUrls[index]] = result.source_url;
                return acc;
            }, {});

            // Perform all replacements in a single pass
            let content = patternData.content;
            for (const [oldUrl, newUrl] of Object.entries(urlReplacementMap)) {
                content = content.replaceAll(oldUrl, newUrl);
            }
            patternData.content = content;
        }

        const { insertBlocks, replaceBlocks } = dispatch("core/block-editor");
        const { getSelectedBlock, getBlocks, getBlockIndex } = select("core/block-editor");
        const selectedBlock = getSelectedBlock();
        parsedBlocks = parse(patternData.content);
        
        if (selectedBlock) {
            const hasContent =
                selectedBlock.innerBlocks?.length > 0 ||
                (selectedBlock.attributes?.content &&
                    selectedBlock.attributes.content.trim() !== "");

            if (!hasContent) {
                replaceBlocks(selectedBlock.clientId, parsedBlocks);
            } else {
                const selectedBlockIndex = getBlockIndex(selectedBlock.clientId);
                insertBlocks(parsedBlocks, selectedBlockIndex + 1);
            }
        } else {
            const currentBlocks = getBlocks();
            insertBlocks(parsedBlocks, currentBlocks.length);
        }

        return { success: true };
    } catch (error) {
        console.error("Block import failed:", error);
        return { success: false, error };
    }
};

/**
 * Extract image URLs from parsed blocks
 */
const extractImageUrls = (blocks) => {
    const imageUrls = [];

    const traverseBlocks = (block) => {
        // Check for image URLs in block attributes
        const attributes = block.attributes || {};
        for (const key in attributes) {
            if (
                typeof attributes[key] === "string" &&
                attributes[key].match(/\.(png|jpg|jpeg|svg|gif)$/i)
            ) {
                // Add URLs that end with common image extensions
                imageUrls.push(attributes[key]);
            } else if (key === "containerBgNormalBackgroundImageUrl" && attributes[key]?.Desktop) {
                // Handle nested background image URLs
                imageUrls.push(attributes[key].Desktop);
            }
        }

        // Recursively check inner blocks
        if (block.innerBlocks && block.innerBlocks.length > 0) {
            block.innerBlocks.forEach(traverseBlocks);
        }
    };

    blocks.forEach(traverseBlocks);
    return [...new Set(imageUrls)].filter(url => !url.includes('/wp-content/plugins/frontis-blocks/assets/')); // Remove duplicates and exclude local plugin assets
};

/**
 * Upload images to WordPress media library
 */
const uploadImagesToMedia = async (url) => {
    try {
        // Use the proxy endpoint to fetch the image
        const proxyUrl = `/wp-json/custom/v1/proxy-image?url=${encodeURIComponent(url)}`;
        const headers = {};
        if (typeof wpApiSettings !== 'undefined' && wpApiSettings.nonce) {
            headers['X-WP-Nonce'] = wpApiSettings.nonce;
        }
        const response = await fetch(proxyUrl, {
            method: 'GET',
            headers
        });
        if (!response.ok) throw new Error(`Failed to fetch image via proxy: ${url}`);
        const blob = await response.blob();

        // Create FormData for WordPress media upload
        const formData = new FormData();
        formData.append('file', blob, url.split('/').pop());

        // Upload to WordPress media library
        const uploadResponse = await fetch('/wp-json/wp/v2/media', {
            method: 'POST',
            headers: {
                'X-WP-Nonce': wpApiSettings.nonce,
            },
            body: formData,
        });

        if (!uploadResponse.ok) throw new Error(`Failed to upload image: ${url}`);
        const mediaData = await uploadResponse.json();

        return {
            source_url: mediaData.source_url,
            id: mediaData.id,
            slug: mediaData.slug,
        };
    } catch (error) {
        console.error(`Error uploading image ${url}:`, error);
        return { source_url: url, id: null, slug: null }; // Fallback to original URL
    }
};