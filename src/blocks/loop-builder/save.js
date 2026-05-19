import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
export default function save({ attributes }) {
    const {
        tagName: TagName = 'div',
        blockId,
        query,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `${blockId || ''} fb-loop-builder fb-query-content-container`.trim(),
        ...(blockId ? { 'data-fb-block-id': blockId } : {}),
    });

    const innerBlocksProps = useInnerBlocksProps.save(blockProps);

    return <TagName {...innerBlocksProps} />;
}
