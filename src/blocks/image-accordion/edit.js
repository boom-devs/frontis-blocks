import { useEffect, useRef, useState } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import SwitchToBlockSettings from "@Utils/SwitchToBlockSettings";

import Inspector from "./inspector";
import { renderAccordion } from "./presets";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generateImageAccordionStyle from "./styling";
import { useDeviceType } from "@Config/displayType";

/* Empty state  */
const EmptyState = () => (
	<div>
		<svg width="52" height="52" viewBox="0 0 52 52" fill="none">
			<rect x="2" y="2" width="20" height="48" rx="10" fill="#d1d5db" />
			<rect
				x="26"
				y="8"
				width="10"
				height="42"
				rx="5"
				fill="#d1d5db"
				opacity="0.65"
			/>
			<rect
				x="40"
				y="8"
				width="7"
				height="42"
				rx="3.5"
				fill="#d1d5db"
				opacity="0.35"
			/>
		</svg>
		<p>{__("No items yet", "frontis-blocks")}</p>
		<p>
			{__(
				"Add items from the sidebar to see a live preview.",
				"frontis-blocks",
			)}
		</p>
	</div>
);

/*  Main Edit component */
const Edit = ({ attributes, setAttributes, clientId, isSelected }) => {
	const {
		blockID,
		blockStyle,
		presetStyle,
		triggerOn,
		accordionItems = [],
	} = attributes;

	const [activeIndex, setActiveIndex] = useState(0);

	const handleItemAction = (index, type) => {
		if (triggerOn === type) {
			setActiveIndex(index);
		}
	};

	const handleMouseLeave = () => {
		if (triggerOn === "hover") {
			setActiveIndex(0);
		}
	};

	/**
	 * Manages tab button settings and switches to block settings on click
	 */
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	const deviceType = useDeviceType();

	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: "fb-image-accordion",
		isSelected,
		attributes,
		setAttributes,
	});

	useEffect(() => {
		if (blockID) {
			const css = generateImageAccordionStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);

	const blockProps = useBlockProps({
		className: `image-accordion-block-editor-wrap ${blockID}`,
	});

	const { items, containerStyle } = renderAccordion(
		attributes,
		activeIndex,
		handleItemAction,
	);

	return (
		<>
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}

			<div {...blockProps}>
				{/* Preview area */}
				<div ref={panelRef}>
					{accordionItems.length === 0 ? (
						<EmptyState />
					) : (
						<div
							className={`pea-image-accordion-wrapper ${presetStyle} pea-editor-preview pea-trigger-${triggerOn} ${blockID}`}
							data-trigger={triggerOn}
							onMouseLeave={handleMouseLeave}
						>
							<div
								className="pea-image-accordion-container"
								style={containerStyle}
							>
								{items}
							</div>
						</div>
					)}
				</div>

				{/*  Hint bar */}
				<div>
					<svg width="11" height="11" viewBox="0 0 12 12" fill="none">
						<circle cx="6" cy="6" r="5" stroke="#ccc" strokeWidth="1.2" />
						<path
							d="M6 5v4M6 3.5v.5"
							stroke="#ccc"
							strokeWidth="1.2"
							strokeLinecap="round"
						/>
					</svg>
					{triggerOn === "hover"
						? __(
								"Hover over items to expand them in the editor.",
								"frontis-blocks",
						  )
						: __("Click items to expand them in the editor.", "frontis-blocks")}
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
};

export default Edit;
