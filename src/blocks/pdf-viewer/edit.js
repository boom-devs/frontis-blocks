import { __ } from "@wordpress/i18n";
import { useBlockProps, MediaUpload } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import { Placeholder, Spinner, Button } from "@wordpress/components";
import Inspector from "./inspector";
import useBlockIdGenerator from "@Utils/useBlockIdGenerator"; // Assuming this path from context
import generatePdfViewerStyle from "./styling"; // Assuming a styling file will exist, similar to advanced-countdown

export default function Edit({
	attributes,
	setAttributes,
	clientId,
	isSelected,
}) {
	const { blockID, blockStyle, pdfUrl, height, showToolbar, themeColor } =
		attributes;

	// Handle block ID generation (handles duplication and initial ID)
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: "fb-pdf-viewer",
		isSelected,
		attributes,
		setAttributes,
	});

	// Generate block styles dynamically
	useEffect(() => {
		if (blockID) {
			const css = generatePdfViewerStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);

	const blockProps = useBlockProps({
		className: `fb-pdf-viewer-main-wrapper ${blockID}`,
	});

	// Construct the iframe URL for Google Docs Viewer
	// The toolbar parameter for Google Docs Viewer is not directly controllable via URL for 'embedded=true'.
	// Theme color is also not directly applicable to Google Docs Viewer.
	// For direct PDF, showToolbar might hide/show a custom toolbar wrapper if we were building one.
	const viewerUrl = pdfUrl
		? `https://docs.google.com/gview?url=${encodeURIComponent(
				pdfUrl,
		  )}&embedded=true`
		: "";

	return (
		<>
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}

			<div {...blockProps}>
				<div className={`fb-pdf-viewer-wrapper ${blockID}`}>
					{!pdfUrl ? (
						<Placeholder
							icon="media-document"
							label={__("PDF Viewer Block", "frontis-blocks")}
							instructions={__(
								"Select a PDF file to display.",
								"frontis-blocks",
							)}
						>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({ pdfUrl: media.url, pdfId: media.id })
								}
								allowedTypes={["application/pdf"]}
								render={({ open }) => (
									<Button isPrimary onClick={open}>
										{__("Select PDF", "frontis-blocks")}
									</Button>
								)}
							/>
						</Placeholder>
					) : (
						<iframe
							className={`fb-pdf-viewer-iframe ${blockID}`}
							src={viewerUrl}
							width="100%"
							height={height}
							style={{ border: "none" }}
							title={__("PDF Viewer", "frontis-blocks")}
							loading="lazy"
						></iframe>
					)}
				</div>
			</div>
			{blockStyle && <style>{blockStyle}</style>}
		</>
	);
}
