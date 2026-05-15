import { useEffect, useRef } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import SwitchToBlockSettings from "@Utils/SwitchToBlockSettings";

import Inspector from "./inspector";
import { renderAccordion } from "./presets";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator";
import generateImageAccordionStyle from "./styling";
import { useDeviceType } from "@Config/displayType";

/* Preset badge config  */
const PRESET_INFO = {
	"preset-1": { label: "Preset 1", color: "#7c3aed", bg: "#ede9fe" },
	"preset-2": { label: "Preset 2", color: "#0369a1", bg: "#e0f2fe" },
	"preset-3": { label: "Preset 3", color: "#065f46", bg: "#d1fae5" },
	"preset-4": { label: "Preset 4", color: "#92400e", bg: "#fef3c7" },
};
const TRIGGER_INFO = {
	hover: { label: "⟳ Hover", color: "#0875ff", bg: "#dbeafe" },
	click: { label: "↵ Click", color: "#b45309", bg: "#fef9c3" },
};

const Badge = ({ label, color, bg }) => (
	<span
		style={{
			display: "inline-flex",
			alignItems: "center",
			padding: "2px 9px",
			borderRadius: 20,
			fontSize: 11,
			fontWeight: 600,
			color,
			background: bg,
		}}
	>
		{label}
	</span>
);

/* Empty state  */
const EmptyState = () => (
	<div
		style={{
			minHeight: 220,
			background: "#f0f0f1",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			gap: 10,
			padding: "32px 24px",
		}}
	>
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
		<p style={{ margin: 0, color: "#6b7280", fontWeight: 600, fontSize: 14 }}>
			{__("No items yet", "frontis-blocks")}
		</p>
		<p
			style={{
				margin: 0,
				color: "#9ca3af",
				fontSize: 12,
				textAlign: "center",
				maxWidth: 220,
			}}
		>
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

	const { items } = renderAccordion(attributes);

	const preset = PRESET_INFO[presetStyle] || PRESET_INFO["preset-1"];
	const trigger = TRIGGER_INFO[triggerOn] || TRIGGER_INFO["hover"];

	return (
		<>
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}

			<div {...blockProps}>
				{/*  Editor info bar */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
						padding: "6px 12px",
						background: "#1e1e1e",
						borderRadius: "6px 6px 0 0",
						gap: 8,
						flexWrap: "wrap",
					}}
				>
					<div style={{ display: "flex", alignItems: "center", gap: 8 }}>
						<svg width="14" height="14" viewBox="0 0 16 16" fill="none">
							<rect
								x="1"
								y="1"
								width="6"
								height="14"
								rx="3"
								fill="#818cf8"
								opacity="0.95"
							/>
							<rect
								x="9"
								y="4"
								width="3"
								height="11"
								rx="1.5"
								fill="#818cf8"
								opacity="0.55"
							/>
							<rect
								x="13"
								y="4"
								width="2"
								height="11"
								rx="1"
								fill="#818cf8"
								opacity="0.3"
							/>
						</svg>
						<span style={{ color: "#fff", fontWeight: 600, fontSize: 11 }}>
							Image Accordion
						</span>
						<Badge {...preset} />
						<Badge {...trigger} />
					</div>
					<span style={{ color: "#777", fontSize: 11 }}>
						{accordionItems.length} items
					</span>
				</div>

				{/* Preview area */}
				<div
					style={{
						border: "1px solid #e2e2e2",
						borderTop: "none",
						borderBottom: "none",
						background: "#fff",
						overflow: "hidden",
					}}
					ref={panelRef}
				>
					{accordionItems.length === 0 ? (
						<EmptyState />
					) : (
						<div
							className={`pea-image-accordion-wrapper ${presetStyle} pea-editor-preview pea-trigger-${triggerOn} ${blockID}`}
							data-trigger={triggerOn}
						>
							<div className="pea-image-accordion-container">{items}</div>
						</div>
					)}
				</div>

				{/*  Hint bar */}
				<div
					style={{
						display: "flex",
						alignItems: "center",
						gap: 6,
						padding: "5px 12px",
						background: "#f8f8f8",
						borderTop: "1px solid #e8e8e8",
						borderRadius: "0 0 6px 6px",
						fontSize: 11,
						color: "#999",
					}}
				>
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
								"Hover interactions work on the frontend only.",
								"frontis-blocks",
						  )
						: __(
								"Click interactions work on the frontend only.",
								"frontis-blocks",
						  )}
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
};

export default Edit;
