import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
export default function save({ attributes }) {
    const {
        blockId,
        postSwitcher,
    } = attributes;

    const layoutClass = postSwitcher === 'list' ? 'list-layout' : 'grid-layout';

    const blockProps = useBlockProps.save({
        className: `${blockId || ''} fb-loop-builder-item-main-container ${layoutClass}`,
    });

    const innerBlocksProps = useInnerBlocksProps.save(blockProps);

    return <div {...innerBlocksProps} />;
}
