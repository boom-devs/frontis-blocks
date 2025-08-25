import { __ } from "@wordpress/i18n";
import { useRef } from "@wordpress/element";

import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
/**
 * Internal depencencies
 */
import Inspector from "./inspector";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		Heading_Text,
		headingTag,
		Alignment,
		Sub_Heading_Text,
		Sub_Heading_Tag,
		ctaBtnOneSwitcher,
		descriptionSwitcher,
		info_Button_Text,
		info_Button_Link,
		descAlignment,
		buttonAlignment,
		contentAlignment,
		btnIcon,
		buttonIconSwitcher,
		btnIconPosition,
		btnTwoSwitcher,
		btnTwoIconPosition,
		btnTwoIcon,
		buttonTwoIconSwitcher,
		btnTwoText,
		btnTwoLink,
		btnOneTargetUrl,
		btnTwoTargetUrl,
		ctaGlobalWraperID,
		ctaGlobalWraperClass,

		ctaDesktopSwitcher,
        ctaTabletSwitcher,
        ctaMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-cta-main-wrapper ${blockID} ${ctaDesktopSwitcher && 'fb-desktop-responsive'} ${ctaTabletSwitcher && 'fb-tablet-responsive'} ${ctaMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	/**
	* Manages tab button settings and switches to block settings on click
	*/
	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	const handleBtnClick = (e) =>{
		e.preventDefault();
	}

	const handleBtnTwoClick = (e) =>{
		e.preventDefault();
	}

	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>
			<BlockControls>
				<AlignmentToolbar
					value={contentAlignment}
					onChange={(value) => setAttributes({ contentAlignment: value })}
					controls={["left", "center", "right", "justify"]}
				/>
			</BlockControls>

			<div {...blockProps} id={blockID}>
				<div className={`fb-parent-wrapper fb-cta-content-wrapper ${blockID} ${ctaGlobalWraperClass}`} id={ctaGlobalWraperID} ref={panelRef}>
					<div className={`fb-cta-content-wrapper-inner ${blockID}`}>

						<div className="fb-cta-content-wrapper">
							<RichText
								tagName={headingTag}
								value={Heading_Text}
								onChange={(value) => setAttributes({ Heading_Text: value })}
								placeholder={__("CTA Title", "frontis-block")}
								className="fb-heading"
								style={{ textAlign: Alignment }}
							/>

							{descriptionSwitcher && (
								<RichText
									tagName={Sub_Heading_Tag}
									value={Sub_Heading_Text}
									onChange={(value) =>
										setAttributes({ Sub_Heading_Text: value })
									}
									placeholder={__("CTA Description", "frontis-block")}
									className="fb-description"
									style={{ textAlign: descAlignment }}
								/>
							)}

							<div className="fb-cta-buttons-wrapper" style={{ justifyContent: buttonAlignment }}>
								{ctaBtnOneSwitcher && (
									<div className="fb-cta-btn-one-wrapper" style={{

									}}>

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
											onClick={handleBtnClick}
											target={btnOneTargetUrl ? "_blank" : undefined}
											rel={btnOneTargetUrl ? "noopener noreferrer" : undefined}
											>
											<RichText
												value={info_Button_Text}
												tagName="span"
												onChange={(value) =>
													setAttributes({info_Button_Text: value})
												}
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
									<div className="fb-cta-btn-two-wrapper" style={{
									}}>
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
											onClick={handleBtnTwoClick}
											target={btnTwoTargetUrl ? "_blank" : undefined}
											rel={btnTwoTargetUrl ? "noopener noreferrer" : undefined}
											>
											<RichText
												value={btnTwoText}
												tagName="span"
												onChange={(value) =>
													setAttributes({btnTwoText: value})
												}
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
