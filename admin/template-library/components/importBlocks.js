import { parse } from "@wordpress/blocks";
import { dispatch, select } from "@wordpress/data";

/**
 * Allowed attributes (optional strict mode)
 */
const allowedAttributes = {
    "frontis-blocks/advanced-image": ["url", "alt", "caption"],
    "frontis-blocks/advanced-button": ["text", "url", "style"],
    // baki block gula ekhane add korte paren
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

        // jodi attributes na thake → skip
        const blockAttrs = block.attributes || {};

        // allowedAttributes e define thakle → shei list use korbo
        // otherwise sob keys allow hobe
        const allowList = allowedAttributes[block.name] || Object.keys(blockAttrs);

        const safeAttrs = {};

        allowList.forEach((key) => {
            if (blockAttrs[key] !== undefined) {
                safeAttrs[key] = blockAttrs[key];
            }
        });

        // ✅ Special case: text/content preserve
        if (block.originalContent) {
            safeAttrs.originalContent = block.originalContent;
        }
        if (blockAttrs.content) {
            safeAttrs.content = blockAttrs.content;
        }

        // Recursive clean innerBlocks
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
        // Parse
        const parsedBlocks = parse(patternData.content);

        // Clean
        const safeBlocks = cleanBlockAttributes(parsedBlocks);

        // Gutenberg dispatcher
        const { insertBlocks, replaceBlocks } = dispatch("core/block-editor");
        const { getSelectedBlock, getBlocks, getBlockIndex } = select("core/block-editor");

        const selectedBlock = getSelectedBlock();

        if (selectedBlock) {
            const hasContent =
                selectedBlock.innerBlocks?.length > 0 ||
                (selectedBlock.attributes?.content &&
                    selectedBlock.attributes.content.trim() !== "");

            if (!hasContent) {
                replaceBlocks(selectedBlock.clientId, safeBlocks);
            } else {
                const selectedBlockIndex = getBlockIndex(selectedBlock.clientId);
                insertBlocks(safeBlocks, selectedBlockIndex + 1);
            }
        } else {
            const currentBlocks = getBlocks();
            insertBlocks(safeBlocks, currentBlocks.length);
        }

        return { success: true };
    } catch (error) {
        console.error("Block import failed:", error);
        return { success: false, error };
    }
};
