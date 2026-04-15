import {
	InnerBlocks,
	useBlockProps,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { useEffect } from "@wordpress/element";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import "./editor.scss";

export default function Edit({
	attributes,
	setAttributes,
	clientId,
	isSelected,
}) {
	const { blockID, id } = attributes;
	const expectedItemId = `grid-item-${clientId.slice(0, 8)}`;
	const expectedBlockId = `fb-grid-item-${clientId.slice(0, 8)}`;
	const hasInnerBlocks = useSelect(
		(select) => select("core/block-editor").getBlocks(clientId).length > 0,
		[clientId],
	);

	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: "fb-grid-item",
		isSelected,
		attributes,
		setAttributes,
	});

	useEffect(() => {
		if (
			!id ||
			(blockID && blockID !== expectedBlockId && id !== expectedItemId)
		) {
			setAttributes({ id: expectedItemId });
		}
	}, [blockID, expectedBlockId, expectedItemId, id, setAttributes]);

	const blockProps = useBlockProps({
		className: `grid-item-rendered ${blockID} ${
			hasInnerBlocks ? "has-inner-blocks" : "is-empty"
		}`,
		"data-grid-id": id || expectedItemId,
	});
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "grid-item-content",
		},
		{
			renderAppender: hasInnerBlocks
				? undefined
				: InnerBlocks.ButtonBlockAppender,
		},
	);

	return (
		<div {...blockProps}>
			<div {...innerBlocksProps} />
		</div>
	);
}
