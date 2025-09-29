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

        // Upload


        const parsedBlocks = parse(patternData.content);
        const imageUrls = extractImageUrls(parsedBlocks);

        if(imageUrls.length > 0) {
            imageUrls.forEach(async (url) => {
                console.log(url)
                
                const newuploadedSrcs = await uploadImagesToMedia(url);
                console.log(newuploadedSrcs.source_url);
                patternData.content = patternData.content.replaceAll(url, newuploadedSrcs.source_url); // Replace each old URL with new URL
            });
        }

        console.log(patternData.content);

        // const newuploadedSrcs = await uploadImagesToMedia(imageUrls);

        // console.log(newuploadedSrcs);

        // // Step 4: Replace old URLs with new URLs in the blocks
        // // const updatedBlocks = replaceImageUrls(parsedBlocks, urlMap);

        // const safeBlocks = cleanBlockAttributes(parsedBlocks);
        // const { insertBlocks, replaceBlocks } = dispatch("core/block-editor");
        // const { getSelectedBlock, getBlocks, getBlockIndex } = select("core/block-editor");
        // const selectedBlock = getSelectedBlock();

        // if (selectedBlock) {
        //     const hasContent =
        //         selectedBlock.innerBlocks?.length > 0 ||
        //         (selectedBlock.attributes?.content &&
        //             selectedBlock.attributes.content.trim() !== "");

        //     if (!hasContent) {
        //         replaceBlocks(selectedBlock.clientId, safeBlocks);
        //     } else {
        //         const selectedBlockIndex = getBlockIndex(selectedBlock.clientId);
        //         insertBlocks(safeBlocks, selectedBlockIndex + 1);
        //     }
        // } else {
        //     const currentBlocks = getBlocks();
        //     insertBlocks(safeBlocks, currentBlocks.length);
        // }
        
        // dispatch('core/editor').savePost();
        // autoAttemptRecovery();
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
    return [...new Set(imageUrls)]; // Remove duplicates
};

/**
 * Replace old image URLs with new URLs in blocks
 */
// const replaceImageUrls = (blocks, urlMap) => {
//     const updatedBlocks = JSON.parse(JSON.stringify(blocks)); // Deep copy to avoid mutating original
//     const traverseBlocks = (block) => {
//         const attributes = block.attributes || {};
//         // Special handling for frontis-blocks/advanced-block
//         if (block.name === "frontis-blocks/advanced-image" && attributes.advancedImageUrl) {
//             const originalUrl = attributes.advancedImageUrl;

//             console.log(urlMap[originalUrl])
//             console.log(urlMap)
//             console.log(originalUrl)
//             if (urlMap[originalUrl]) {
//                 block.attributes.advancedImageUrl = urlMap[originalUrl].source_url;
//                 block.attributes.advancedImageId = urlMap[originalUrl].id;
//                 block.attributes.advancedImageAlt = urlMap[originalUrl].slug;
//             }
//         } else {
//             // Existing logic for other blocks
//             for (const key in attributes) {
//                 if (
//                     typeof attributes[key] === "string" &&
//                     urlMap[attributes[key]]?.source_url
//                 ) {
//                     block.attributes[key] = urlMap[attributes[key]].source_url;
//                 } else if (key === "containerBgNormalBackgroundImageUrl") {
//                     // Handle Desktop, Tablet, and Mobile URLs
//                     if (attributes[key]?.Desktop && urlMap[attributes[key].Desktop]?.source_url) {
//                         block.attributes[key].Desktop = urlMap[attributes[key].Desktop].source_url;
//                     }
//                     if (attributes[key]?.Tablet && urlMap[attributes[key].Tablet]?.source_url) {
//                         block.attributes[key].Tablet = urlMap[attributes[key].Tablet].source_url;
//                     }
//                     if (attributes[key]?.Mobile && urlMap[attributes[key].Mobile]?.source_url) {
//                         block.attributes[key].Mobile = urlMap[attributes[key].Mobile].source_url;
//                     }
//                 }
//             }
//         }

//         // Recursively update inner blocks
//         if (block.innerBlocks && block.innerBlocks.length > 0) {
//             block.innerBlocks.forEach(traverseBlocks);
//         }
//     };

//     updatedBlocks.forEach(traverseBlocks);
//     return updatedBlocks;
// };

/**
 * Upload images to WordPress media library
 */
const uploadImagesToMedia = async (url) => {
    let urlMap = {};

    try {
        // Use the proxy endpoint to fetch the image
        const proxyUrl = `/wp-json/custom/v1/proxy-image?url=${encodeURIComponent(url)}`;
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error(`Failed to fetch image via proxy: ${url}`);
        const blob = await response.blob();

        // Create FormData for WordPress media upload
        const formData = new FormData();
        formData.append('file', blob, url.split('/').pop());

        // Upload to WordPress media library
        const uploadResponse = await fetch('/wp-json/wp/v2/media', {
            method: 'POST',
            headers: {
                'X-WP-Nonce': wpApiSettings.nonce, // Ensure nonce is available
            },
            body: formData,
        });

        if (!uploadResponse.ok) throw new Error(`Failed to upload image: ${url}`);
        const mediaData = await uploadResponse.json();

        // Map the original URL to an object with source_url, id, and slug
        urlMap = {
            source_url: mediaData.source_url,
            id: mediaData.id,
            slug: mediaData.slug,
        };
    } catch (error) {
        console.error(`Error uploading image ${url}:`, error);
        urlMap[url] = { source_url: url, id: null, slug: null }; // Fallback to original URL with null id and slug
    }

    return urlMap;
};