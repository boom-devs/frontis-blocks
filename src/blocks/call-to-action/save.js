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
		btnTwoSwitcher,
		btnTwoIconPosition,
		btnTwoIcon,
		buttonTwoIconSwitcher,
		btnTwoText,
		btnOneTargetUrl,
		btnTwoTargetUrl,
		info_Button_Link,
		btnTwoLink
	} = attributes;

	const blockProps = useBlockProps.save({
		id: blockID,
	});

	return (
		<>
			<div {...blockProps}>
				<div className={`fb-cta-content-wrapper ${blockID}`}>
					<div className={`fb-cta-content-wrapper-inner ${blockID}`}>
						<div className="fb-cta-content-wrapper">
							<RichText.Content
								tagName={Heading_Tag}
								value={Heading_Text}
								placeholder={__("Info Heading", "frontis-block")}
								className="fb-heading"
								style={{ textAlign: Alignment }}
							/>
							{Sub_Heading_Switcher && (
								<RichText.Content
									tagName={Sub_Heading_Tag}
									value={Sub_Heading_Text}
									placeholder={__("Info description", "frontis-block")}
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
											<a className="fb-cta-button"
											href={info_Button_Link}
											target={btnOneTargetUrl ? "_blank" : undefined}
											rel={btnOneTargetUrl ? "noopener noreferrer" : undefined}
											>
												<RichText.Content
													value={info_Button_Text}
													placeholder={__("Info Button", "frontis-block")}
													style={{ textAlign: buttonAlignment }}
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
											<a className="fb-cta-button"
											href={btnTwoLink}
											target={btnTwoTargetUrl ? "_blank" : undefined}
											rel={btnTwoTargetUrl ? "noopener noreferrer" : undefined}
											>
												<RichText.Content
													value={btnTwoText}
													placeholder={__("Info Button", "frontis-block")}
													className="fb-cta-button"
													style={{ textAlign: buttonAlignment }}
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
