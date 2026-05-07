import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { Placeholder } from "@wordpress/components";

import Inspector from "./inspector";

const Edit = ({ attributes, setAttributes }) => {
	const { presetStyle, triggerOn, accordionItems = [] } = attributes;

	const blockProps = useBlockProps({
		className: "image-accordion-block-editor-wrap",
	});

	// Render preview using shared render function
	// const { containerStyle, items } = renderAccordion(attributes, true);

	return (
		<>
			<Inspector attributes={attributes} setAttributes={setAttributes} />

			<div {...blockProps}>
				{/* Editor notice banner */}
				<div
					style={{
						background: "#1e1e1e",
						color: "#aaa",
						fontSize: "11px",
						padding: "6px 12px",
						borderRadius: "6px 6px 0 0",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<span>
						<strong style={{ color: "#fff" }}>Image Accordion</strong> —{" "}
						{presetStyle} / trigger: {triggerOn}
					</span>
					<span style={{ opacity: 0.7 }}>{accordionItems.length} items</span>
				</div>

				{accordionItems.length === 0 ? (
					<Placeholder
						icon="images-alt2"
						label={__("Image Accordion", "frontis-blocks")}
						instructions={__(
							"Add items from the sidebar to get started.",
							"frontis-blocks",
						)}
					/>
				) : (
					<div
						className={`pea-image-accordion-wrapper ${presetStyle} pea-editor-preview`}
						data-trigger={triggerOn}
					>
						<div
							className="pea-image-accordion-container"
							// style={containerStyle}
						>
							{/* {items} */}
						</div>
					</div>
				)}

				{/* Info note */}
				<p
					style={{
						fontSize: "11px",
						color: "#999",
						textAlign: "center",
						marginTop: "8px",
					}}
				>
					Hover/click interactions work on the frontend only.
				</p>
			</div>
		</>
	);
};

export default Edit;
