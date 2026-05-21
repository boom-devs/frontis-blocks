import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
export default function save({ attributes }) {
    const {
        blockID,
        postSwitcher,
    } = attributes;

    const layoutClass = postSwitcher === 'list' ? 'list-layout' : 'grid-layout';

    const blockProps = useBlockProps.save({
        className: `${blockID || ''} fb-loop-builder-item-main-container ${layoutClass}`,
    });

    const innerBlocksProps = useInnerBlocksProps.save(blockProps);

    return <div {...innerBlocksProps} />;
}
