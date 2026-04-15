import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import {
	getGridItemContentStyles,
	getGridItemWrapperStyles,
} from "./style-utils";

export default function save({ attributes }) {
	const { blockID, id, isStatic } = attributes;
	const wrapperStyles = getGridItemWrapperStyles(attributes);
	const contentStyles = getGridItemContentStyles(attributes);

	return (
		<div
			{...useBlockProps.save({
				className: `grid-item-rendered ${blockID} ${isStatic ? "is-static" : ""}`,
				style: wrapperStyles,
			})}
			data-grid-id={id || blockID}
		>
			<div className="grid-item-content" style={contentStyles}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
