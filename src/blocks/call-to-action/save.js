import { useBlockProps, RichText } from "@wordpress/block-editor";
import { Card } from "@wordpress/components";
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";
import { __ } from "@wordpress/i18n";
export default function save({ attributes }) {
	const {
		blockID,
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

		Sub_Heading_Tag,
		subHeadingSwitcher,
		subTitleAlignment,
		subTitleTag,
		subTitleText,
		btnIconPosition,
		buttonIconSwitcher,
		btnIcon,
		btnTwoSwitcher,
		btnTwoIconPosition,
		btnTwoIcon,
		buttonTwoIconSwitcher,
		btnTwoText,
		btnOneTargetUrl,
		btnTwoTargetUrl,
		info_Button_Link,
		btnTwoLink,

		ctaGlobalWraperID,
		ctaGlobalWraperClass,

		ctaDesktopSwitcher,
        ctaTabletSwitcher,
        ctaMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-cta-main-wrapper ${blockID} ${ctaDesktopSwitcher && 'fb-desktop-responsive'} ${ctaTabletSwitcher && 'fb-tablet-responsive'} ${ctaMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	return (
		<>
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-cta-content-wrapper ${blockID} ${ctaGlobalWraperClass}`} id={ctaGlobalWraperID}>
					<div className={`fb-cta-content-wrapper-inner ${blockID}`}>
						<div className="fb-cta-content-wrapper">
							{subHeadingSwitcher && (
								<RichText.Content
									tagName={subTitleTag}
									value={subTitleText}
									placeholder={__("CTA Sub Heading", "frontis-block")}
									className="fb-cta-sub-heading"
									style={{ textAlign: subTitleAlignment }}
								/>
							)}
							<RichText.Content
								tagName={headingTag}
								value={Heading_Text}
								placeholder={__("CTA Title", "frontis-block")}
								className="fb-heading"
								style={{ textAlign: Alignment }}
							/>
							{Sub_Heading_Switcher && (
								<RichText.Content
									tagName={Sub_Heading_Tag}
									value={Sub_Heading_Text}
									placeholder={__("CTA Description", "frontis-block")}
									className="fb-description"
									style={{ textAlign: descAlignment }}
								/>
							)}
							<div
								className="fb-cta-buttons-wrapper"
								style={{ justifyContent: buttonAlignment }}
							>
								{info_Button_Switcher && (
									<div className="fb-cta-btn-one-wrapper">
										<div
											className="fb-cta-btn-wrapper"
											style={{
												flexDirection:
													btnIconPosition === "left" ? "row-reverse" : "row",
											}}
										>
											<a
												className="fb-cta-button"
												href={info_Button_Link}
												target={btnOneTargetUrl ? "_blank" : undefined}
												rel={btnOneTargetUrl ? "noopener noreferrer" : undefined}
											>
												<RichText.Content
													tagName="span"
													value={info_Button_Text}
													placeholder={__("CTA Button", "frontis-block")}
												/>
											</a>
											{buttonIconSwitcher && (
												<div className="fb-btn-icon-wrapper">
													{renderSVG(btnIcon)}
												</div>
											)}
										</div>
									</div>
								)}
								{btnTwoSwitcher && (
									<div className="fb-cta-btn-two-wrapper">
										<div
											className="fb-cta-btn-wrapper"
											style={{
												flexDirection:
													btnTwoIconPosition === "left" ? "row-reverse" : "row",
											}}
										>
											<a
												className="fb-cta-button"
												href={btnTwoLink}
												target={btnTwoTargetUrl ? "_blank" : undefined}
												rel={btnTwoTargetUrl ? "noopener noreferrer" : undefined}
											>
												<RichText.Content
													tagName="span"
													value={btnTwoText}
													placeholder={__("CTA Button", "frontis-block")}
												/>
											</a>
											{buttonTwoIconSwitcher && (
												<div className="fb-btn-icon-wrapper">
													{renderSVG(btnTwoIcon)}
												</div>
											)}
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>

		</>
	);
}
