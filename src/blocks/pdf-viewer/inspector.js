import { __ } from "@wordpress/i18n";
import {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	RangeControl,
	ToggleControl,
	Button,
	TextControl,
} from "@wordpress/components";
import { useDeviceType } from "@Config/displayType";
import FB_InspectorControls from "@Components/InspectorControls";
import FB_ColorControl from "@Components/color-control";

const Inspector = ({ attributes, setAttributes }) => {
	const { pdfUrl, pdfId, height, showToolbar, themeColor } = attributes;

	const deviceType = useDeviceType();

	const onSelectPdf = (media) => {
		if (!media || !media.url) {
			setAttributes({ pdfUrl: "", pdfId: 0 });
			return;
		}
		setAttributes({ pdfUrl: media.url, pdfId: media.id });
	};

	const generalControls = (
		<>
			<PanelBody
				title={__("PDF Settings", "frontis-blocks")}
				initialOpen={true}
			>
				<MediaUploadCheck>
					<MediaUpload
						onSelect={onSelectPdf}
						allowedTypes={["application/pdf"]}
						value={pdfId}
						render={({ open }) => (
							<div style={{ marginBottom: "15px" }}>
								<Button isSecondary onClick={open}>
									{pdfUrl
										? __("Change PDF", "frontis-blocks")
										: __("Select PDF", "frontis-blocks")}
								</Button>
								{pdfUrl && (
									<Button
										isLink
										isDestructive
										onClick={() => setAttributes({ pdfUrl: "", pdfId: 0 })}
										style={{ marginLeft: "10px" }}
									>
										{__("Remove PDF", "frontis-blocks")}
									</Button>
								)}
								{pdfUrl && (
									<TextControl
										label={__("PDF URL", "frontis-blocks")}
										value={pdfUrl}
										onChange={(value) => setAttributes({ pdfUrl: value })}
										readOnly
									/>
								)}
							</div>
						)}
					/>
				</MediaUploadCheck>

				<RangeControl
					label={__("Viewer Height (px)", "frontis-blocks")}
					value={height}
					onChange={(value) => setAttributes({ height: value })}
					min={100}
					max={2000}
					step={10}
				/>

				<ToggleControl
					label={__("Show Toolbar", "frontis-blocks")}
					checked={showToolbar}
					onChange={(value) => setAttributes({ showToolbar: value })}
				/>

				<FB_ColorControl
					label={__("Theme Color", "frontis-blocks")}
					globalColor={themeColor}
					setGlobalColor={(value) =>
						setAttributes({ themeColor: value === undefined ? "" : value })
					}
				/>
			</PanelBody>
		</>
	);

	const styleControls = <></>;
	const advancedControls = <></>;

	return (
		<FB_InspectorControls
			generalControls={generalControls}
			styleControls={styleControls}
			advancedControls={advancedControls}
		/>
	);
};

export default Inspector;
