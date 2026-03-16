import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { 
        blockID,
        blockStyle,
        id,
    } = attributes;

    // No inline gridArea — parent block handles ALL positioning via <style> tag
    // This avoids specificity conflicts with responsive media queries

    return (
        <div {...useBlockProps.save({ 
            className: blockID,
        })} data-grid-id={id}>
            <InnerBlocks.Content />
        </div>
    );
}
