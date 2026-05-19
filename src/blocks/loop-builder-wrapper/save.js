import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
export default function save({ attributes }) {
    const {
        blockId,
        loopBuilderWrapperClass,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `${blockId || ''} fb-loop-builder-wrapper-main-container ${loopBuilderWrapperClass || ''}`,
    });

    const innerBlocksProps = useInnerBlocksProps.save(blockProps);

    return <div {...innerBlocksProps} />;
}
