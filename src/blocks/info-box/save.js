import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";
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
		btnImageUrl,
		btnImageAlt,
		btnImageID,
		buttonIconType,
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
		infoBoxPresetStyle
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-info-box-main-wrapper ${blockID} ${infoBoxDesktopSwitcher && 'fb-desktop-responsive'} ${infoBoxTabletSwitcher && 'fb-tablet-responsive'} ${infoBoxMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	return (
		<>
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-info-box-wrapper ${blockID} ${infoBoxGlobalWraperClass} ${infoBoxPresetStyle}`} id={infoBoxGlobalWraperID}>
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
												{buttonIconType === 'icon' && renderSVG(btnIcon)}
												{buttonIconType === 'image' && <img src={btnImageUrl} alt={btnImageAlt} />}
											</div>
										)}
									</a>
								</div>
								</div>
							)}
							{infoBoxPresetStyle === 'preset-6' && (
								<div class="shape">
									<svg width="111" height="111" viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M0 0C19.33 0 35 15.67 35 35V41C35 60.33 50.67 76 70 76H76C95.33 76 111 91.67 111 111V0H0Z" fill="white"></path>
									</svg>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
