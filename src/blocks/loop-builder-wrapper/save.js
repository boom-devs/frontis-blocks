/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save({
								 attributes: {
									 blockId,
									 loopBuilderWrapperClass
								 }
							 }) {
	const blockProps = useBlockProps.save({
		className: `${blockId || ''} fb-loop-builder-wrapper-main-container ${loopBuilderWrapperClass || ''}`,
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return <div {...innerBlocksProps} />;
}
