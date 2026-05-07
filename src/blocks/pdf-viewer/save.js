import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { blockID, pdfUrl, height, showToolbar, themeColor } = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-pdf-viewer-main-wrapper ${blockID}`,
	});

	return (
		<>
			<div
				{...blockProps}
				data-pdf-url={pdfUrl}
				data-pdf-height={height}
				data-show-toolbar={showToolbar ? "true" : "false"}
				data-theme-color={themeColor}
			>
				{/* A placeholder div that will be replaced by the iframe on the frontend by view.js */}
				<div
					className={`fb-pdf-viewer-placeholder ${blockID}`}
					style={{
						height: `${height}px`,
						background: "#eee",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "#555",
					}}
				>
					{__("PDF Viewer (Loading...)", "frontis-blocks")}
				</div>
			</div>
		</>
	);
}
