import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { x, y, w, h } = attributes;

    const style = {
        gridArea: `${(y || 0) + 1} / ${(x || 0) + 1} / ${(y || 0) + (h || 4) + 1} / ${(x || 0) + (w || 4) + 1}`,
    };

    return (
        <div {...useBlockProps.save({ style })}>
            <InnerBlocks.Content />
        </div>
    );
}
