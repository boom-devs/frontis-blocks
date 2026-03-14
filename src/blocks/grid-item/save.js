import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { 
        blockID,
        blockStyle,
        gridColumnStart,
        gridRowStart,
        gridColumnSpan,
        gridRowSpan,
        
    } = attributes;

    const style = {
        gridArea: `${(gridRowStart || 0) + 1} / ${(gridColumnStart || 0) + 1} / ${(gridRowStart || 0) + (gridRowSpan || 4) + 1} / ${(gridColumnStart || 0) + (gridColumnSpan || 4) + 1}`,
    };

    return (
        <div {...useBlockProps.save({ 
            className: blockID,
            style 
        })}>
            <InnerBlocks.Content />
        </div>
    );
}
