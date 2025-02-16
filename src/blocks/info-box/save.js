import { useBlockProps, RichText } from "@wordpress/block-editor";
import { Card } from "@wordpress/components";
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";
import { __ } from "@wordpress/i18n";
export default function save({ attributes }) {
	const {
		blockID,
		wrapperAlignment,
		Heading_Text,
		headingTag,
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
		infoButtonLink,
		infoIconVerticalPosition,
		infoCardAlignment,

		infoBoxGlobalWraperID,
		infoBoxGlobalWraperClass,

		infoBoxDesktopSwitcher,
		infoBoxTabletSwitcher,
		infoBoxMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-info-box-main-wrapper ${blockID} ${infoBoxDesktopSwitcher && 'fb-desktop-responsive'} ${infoBoxTabletSwitcher && 'fb-tablet-responsive'} ${infoBoxMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	return (
		<>
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-info-box-wrapper ${blockID} ${infoBoxGlobalWraperClass}`} id={infoBoxGlobalWraperID}>
					<div className={`fb-info-box-wrapper-inner ${blockID}`}>
						<div className="fb-info-media-container">
							<div className="fb-info-media-wrapper">
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
								tagName={headingTag}
								value={Heading_Text}
								className="fb-heading"
							/>

							{Sub_Heading_Switcher && (
								<RichText.Content
									tagName={Sub_Heading_Tag}
									value={Sub_Heading_Text}
									className="fb-description"
								/>
							)}

							{info_Button_Switcher && (
								<div className="fb-info-button">
								<div className="fb-info-btn-container">
									<a
										href={infoButtonLink} 
										target={infobtnTargetUrl ? '_blank' : undefined}
										rel={infobtnTargetUrl ? 'noopener noreferrer' : undefined}
										className="fb-info-btn-wrapper"
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
									</a>
								</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
