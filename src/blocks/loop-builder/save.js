/**
 * WordPress dependencies
 */
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save({
								 attributes: {
									 tagName: TagName = 'div',
									 blockId,
									 query
								 }
							 }) {
	const blockProps = useBlockProps.save({
		className: `${blockId || ''} fb-query-content-container`,
	});

	const innerBlocksProps = useInnerBlocksProps.save(blockProps);

	return <TagName {...innerBlocksProps} />;
}
