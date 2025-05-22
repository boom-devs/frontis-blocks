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
		

		flip_Button_Switcher,
		flip_Button_Text,
		descAlignment,
		buttonAlignment,
		
		icon,
		mediaSwitcher,

		
		Sub_Heading_Tag,
		btnIconPosition,
		buttonIconSwitcher,
		btnIcon,
		flipIconPosition,
		flipbtnTargetUrl,
		flipButtonLink,
		flipIconVerticalPosition,
		flipCardAlignment,

		flipBoxGlobalWraperID,
		flipBoxGlobalWraperClass,

		flipBoxDesktopSwitcher,
		flipBoxTabletSwitcher,
		flipBoxMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-flip-box-main-wrapper ${blockID} ${flipBoxDesktopSwitcher && 'fb-desktop-responsive'} ${flipBoxTabletSwitcher && 'fb-tablet-responsive'} ${flipBoxMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	return (
		<>
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-flip-box-wrapper ${blockID} ${flipBoxGlobalWraperClass}`} id={flipBoxGlobalWraperID}>
					<div className={`fb-flip-box-wrapper-inner ${blockID}`}>
						<div className="fb-flip-media-container">
							<div className="fb-flip-media-wrapper">
								{mediaSwitcher === "image" && (
									<img
										src={attributes.flipMediaUrl}
										alt={attributes.flipMediaAlt || ""}
									/>
								)}
								{mediaSwitcher === "icon" && (
									<div className="fb-icon-wrapper">{renderSVG(icon)}</div>
								)}
							</div>
						</div>
						<div className="fb-flip-box-content-wrapper">
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

							{flip_Button_Switcher && (
								<div className="fb-flip-button">
								<div className="fb-flip-btn-container">
									<a
										href={flipButtonLink} 
										target={flipbtnTargetUrl ? '_blank' : undefined}
										rel={flipbtnTargetUrl ? 'noopener noreferrer' : undefined}
										className="fb-flip-btn-wrapper"
									>
										<RichText.Content
											value={flip_Button_Text}
											tagName={"span"}
											className="fb-flip-button"
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
