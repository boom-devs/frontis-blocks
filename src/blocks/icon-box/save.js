import { useBlockProps, RichText } from "@wordpress/block-editor";
import { Card } from "@wordpress/components";
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";
import { __ } from "@wordpress/i18n";
export default function save({ attributes }) {
	const {
		blockID,
		wrapperAlignment,
		Heading_Text,
		Heading_Tag,
		Alignment,
		Sub_Heading_Switcher,
		Sub_Heading_Text,
		descAlignment,
		icon,
		mediaSwitcher,
		Sub_Heading_Tag,
		infoIconPosition,
	} = attributes;

	const blockProps = useBlockProps.save({
		id: blockID,
	});

	return (
		<>
			<div {...blockProps} id={blockID}>
				<div className={`fb-icon-box-content-wrapper ${blockID}`}>
					<div
						className={`fb-icon-box-content-wrapper-inner ${blockID}`}
						style={{
							display: "flex",
							flexDirection:
								infoIconPosition === "left"
									? "row"
									: infoIconPosition === "right"
									? "row-reverse"
									: infoIconPosition === "top"
									? "column"
									: "column-reverse",
						}}
					>
						<div className="fb-icon-media-container" style={{
								justifyContent: wrapperAlignment,
							}}>
						<div
							className="fb-icon-media-wrapper"
							style={{
								textAlign: wrapperAlignment,
							}}
						>
							{mediaSwitcher === "image" && (
								<img
									src={attributes.infoMediaUrl}
									alt={attributes.infoMediaAlt || ""}
								/>
							)}
							{mediaSwitcher === "icon" && (
								<div className="fb-icon-wrapper">{renderSVG(icon)}</div>
							)}
						</div>
						</div>
						<div className="fb-icon-box-content-wrapper">
							<RichText.Content
								tagName={Heading_Tag}
								value={Heading_Text}
								className="fb-heading"
								style={{ textAlign: Alignment }}
							/>

							{Sub_Heading_Switcher && (
								<RichText.Content
									tagName={Sub_Heading_Tag}
									value={Sub_Heading_Text}
									className="fb-description"
									style={{ textAlign: descAlignment }}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
