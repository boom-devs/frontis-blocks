import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes }) {
    const { x, y, w, h } = attributes;

    const style = {
        gridArea: `${(y || 0) + 1} / ${(x || 0) + 1} / ${(y || 0) + (h || 4) + 1} / ${(x || 0) + (w || 4) + 1}`,
    };

    const blockProps = useBlockProps({
        className: 'grid-item-rendered',
        style,
    });

    return (
        <div {...blockProps}>
            <InnerBlocks />
        </div>
    );
}
