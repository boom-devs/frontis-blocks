import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";
export default function save({ attributes }) {
	const {
		blockID,
		flipBoxGlobalWraperClass,
		flipBoxGlobalWraperID,
		flipMediaUrl,
		mediaSwitcher,
		icon,
		Heading_Text,
		headingTag,
		descSwitcher,
		Sub_Heading_Tag,
		Sub_Heading_Text,
		flip_Button_Switcher,
		flip_Button_Text,
		flipButtonLink,
		flipbtnTargetUrl,
		buttonIconSwitcher,
		btnIcon,
		flipBackMediaUrl,
		mediaSwitcherBack,
		iconBack,
		headingTextBack,
		headingTagBack,
		descSwitcherBack,
		flipBackContent,
		flipBackContentTag,
		flipBack_Button_Switcher,
		flipBack_Button_Text,
		flipBackButtonLink,
		flipBackbtnTargetUrl,
		flipAnimationType,
		flipBoxDesktopSwitcher,
		flipBoxTabletSwitcher,
		flipBoxMobileSwitcher
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-flip-box-main-wrapper ${blockID} ${flipBoxDesktopSwitcher && 'fb-desktop-responsive'} ${flipBoxTabletSwitcher && 'fb-tablet-responsive'} ${flipBoxMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	return (
		<>
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-flip-box-wrapper ${blockID} ${flipBoxGlobalWraperClass}`} id={flipBoxGlobalWraperID}>
					<div className={`fb-flipper-wrapper ${flipAnimationType}`}>
						{/* Front Side */}
						<div className="fb-flipbox-front">
							<div className="fb-flipbox-content-wrapper">
								<div className="fb-flip-media-container">
									<div className="fb-flip-media-wrapper">
										{mediaSwitcher === "image" && <img src={flipMediaUrl} alt="Front media" />}
										{mediaSwitcher === "icon" && <div className="fb-icon-wrapper" dangerouslySetInnerHTML={{ __html: icon }} />}
									</div>
								</div>
								<div className="fb-flip-box-content-wrapper">
									{Heading_Text && (
										<RichText.Content tagName={headingTag} value={Heading_Text} className="fb-heading" />
									)}
									{descSwitcher && Sub_Heading_Text && (
										<RichText.Content tagName={Sub_Heading_Tag} value={Sub_Heading_Text} className="fb-description" />
									)}
									{flip_Button_Switcher && flip_Button_Text && (
										<div className="fb-flip-button">
											<div className="fb-flip-btn-container">
												<a
													className="fb-flip-btn-wrapper"
													href={flipButtonLink || '#'}
													target={flipbtnTargetUrl ? '_blank' : undefined}
													rel={flipbtnTargetUrl ? 'noopener noreferrer' : undefined}
												>
													<RichText.Content tagName="span" value={flip_Button_Text} />
													{buttonIconSwitcher && btnIcon && (
														<div className="fb-btn-icon-wrapper" dangerouslySetInnerHTML={{ __html: btnIcon }} />
													)}
												</a>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>

						{/* Back Side */}
						<div className="fb-flipbox-back">
							<div className="fb-flipbox-content-wrapper">
								<div className="fb-flip-back-media-container">
									<div className="fb-flip-back-media-wrapper">
										{mediaSwitcherBack === "image" && <img src={flipBackMediaUrl} alt="Back media" />}
										{mediaSwitcherBack === "icon" && <div className="fb-icon-wrapper" dangerouslySetInnerHTML={{ __html: iconBack }} />}
									</div>
								</div>
								<div className="fb-flip-back-box-content-wrapper">
									{headingTextBack && (
										<RichText.Content tagName={headingTagBack} value={headingTextBack} className="fb-heading" />
									)}
									{descSwitcherBack && flipBackContent && (
										<RichText.Content tagName={flipBackContentTag} value={flipBackContent} className="fb-description" />
									)}
									{flipBack_Button_Switcher && flipBack_Button_Text && (
										<div className="fb-flip-back-button">
											<div className="fb-flip-back-btn-container">
												<a
													className="fb-flip-back-btn-wrapper"
													href={flipBackButtonLink || '#'}
													target={flipBackbtnTargetUrl ? '_blank' : undefined}
													rel={flipBackbtnTargetUrl ? 'noopener noreferrer' : undefined}
												>
													<RichText.Content tagName="span" value={flipBack_Button_Text} />
													{buttonIconSwitcher && btnIcon && (
														<div className="fb-btn-icon-wrapper" dangerouslySetInnerHTML={{ __html: btnIcon }} />
													)}
												</a>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
