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
		

		info_Button_Switcher,
		info_Button_Text,
		descAlignment,
		buttonAlignment,
		
		icon,
		mediaSwitcher,

		
		Sub_Heading_Tag,
		btnIconPosition,
		buttonIconSwitcher,
		btnIcon,
		infoIconPosition,
		infobtnTargetUrl,
		infoButtonLink
	} = attributes;

	const blockProps = useBlockProps.save({
		id: blockID,
	});

	return (
		<>
			<div {...blockProps} id={blockID}>
				<div className={`fb-parent-wrapper fb-info-box-content-wrapper ${blockID}`}>
					<div
						className={`fb-info-box-content-wrapper-inner ${blockID}`}
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
						<div
							className="fb-info-media-container"
							style={{ justifyContent: wrapperAlignment }}
						>
							<div
								className="fb-info-media-wrapper"
								style={{ textAlign: wrapperAlignment }}
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
						<div className="fb-info-box-content-wrapper">
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

							{info_Button_Switcher && (
								<a className="fb-info-button"
								href={infoButtonLink} 
								target={infobtnTargetUrl ? '_blank' : undefined}
								rel={infobtnTargetUrl ? 'noopener noreferrer' : undefined}
								>
								<div
									className="fb-info-btn-container"
									style={{ textAlign: buttonAlignment }}
								>
									<div
										className="fb-info-btn-wrapper"
										style={{
											flexDirection:
												btnIconPosition === "left" ? "row-reverse" : "row",
										}}
									>
										


											<RichText.Content
												value={info_Button_Text}
												tagName={"span"}
												className="fb-info-button"
											/>
										
										{buttonIconSwitcher && (
											<div className="fb-btn-icon-wrapper">
												{renderSVG(btnIcon)}
											</div>
										)}
									</div>
								</div>
								</a>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
