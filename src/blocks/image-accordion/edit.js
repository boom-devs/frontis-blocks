/**
 * edit.js
 * Gutenberg editor component for the Image Accordion block.
 * Shows a live preview inside the editor using the same markup as the front end.
 */

import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { Placeholder, Spinner } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import Inspector from "./inspector";
import { renderAccordion } from "./render";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generateImageAccordionStyle from "./styling";

const Edit = ({ attributes, setAttributes }) => {
	const {
		blockID,
		blockStyle,
		presetStyle,
		triggerOn,
		accordionItems,
		containerHeight,
		itemsGap,
	} = attributes;

	// Generate unique block ID
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: "fb-image-accordion",
		isSelected,
		attributes,
		setAttributes,
	});

	// Generate dynamic styles
	useEffect(() => {
		if (blockID) {
			const css = generateImageAccordionStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);

	const blockProps = useBlockProps({
		className: `image-accordion-block-editor-wrap ${blockID}`,
	});

	const { containerStyle, items } = renderAccordion(attributes, true);

	return (
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes} />

			<div {...blockProps}>
				{/* Editor notice banner */}
				<div
					style={{
						background: "#1e1e1e",
						color: "#aaa",
						fontSize: 11,
						padding: "5px 10px",
						borderRadius: "6px 6px 0 0",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<span>
						🎞 <strong style={{ color: "#fff" }}>Image Accordion</strong> —{" "}
						{presetStyle} / trigger: {triggerOn}
					</span>
					<span style={{ opacity: 0.6 }}>{accordionItems.length} items</span>
				</div>

				{accordionItems.length === 0 ? (
					<Placeholder
						icon="images-alt2"
						label={__("Image Accordion", "image-accordion")}
						instructions={__(
							"Add items in the sidebar to get started.",
							"image-accordion",
						)}
					/>
				) : (
					<div
						className={`pea-image-accordion-wrapper ${presetStyle} ${blockID} pea-editor-preview`}
						data-trigger={triggerOn}
					>
						<div
							className="pea-image-accordion-container"
							style={containerStyle}
						>
							{items}
						</div>
					</div>
				)}

				{/* Hover interaction note */}
				<p
					style={{
						fontSize: 11,
						color: "#999",
						textAlign: "center",
						marginTop: 4,
						padding: 0,
					}}
				>
					{__(
						"Hover/click interactions are active on the front end.",
						"image-accordion",
					)}
				</p>
			</div>
			{blockStyle && <style>{blockStyle}</style>}
		</>
	);
};

export default Edit;
