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
		separator,
		Sub_Heading_Switcher,
		Show_Separator_Switcher,
		Sub_Heading_Text,
		Sub_Heading_Tag,
		info_Button_Switcher,
		subHeadingSwitcher,
		subTitleAlignment,
		subTitleTag,
		subTitleText,
		descriptionSwitcher,
		info_Button_Text,
		info_Button_Link,
		wrapperAlignment,
		infoBoxBg,
		descAlignment,
		buttonAlignment,
		icon,
		mediaSwitcher,
		contentAlignment,
		mediaSize,
		btnIcon,
		buttonIconSwitcher,
		btnIconPosition,
        infoIconPosition,
		btnTwoSwitcher,
		btnTwoIconPosition,
		btnTwoIcon,
		buttonTwoIconSwitcher,
		btnTwoText,
		btnTwoLink,
		btnOneTargetUrl,
		btnTwoTargetUrl,
		FeatureItems,
		imageSwitcher
	} = attributes;

	const blockProps = useBlockProps();

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
				<div className={`fb-parent-wrapper fb-cta-content-wrapper ${blockID}`} ref={panelRef}>
					<div className={`fb-cta-content-wrapper-inner ${blockID}`}>

						<div className="fb-cta-content-wrapper">
							{imageSwitcher && (
								
								<div className="fb-cta-image-wrapper">
								{FeatureItems.map(item => (
									
									<div key={item.id} className={`fb-feature-list-item single-item-${item.id}`}>
										{item.teamMemberImageUrl && (
											<img 
											src={item.teamMemberImageUrl} 
											alt={item.teamMemberImageAlt || "Preview Image"} 
											width="200"  
											height="200"
										/>
										)}
									</div>
								))}
								</div>
								
								
							)}
							{subHeadingSwitcher && (
								<RichText
									tagName={subTitleTag}
									value={subTitleText}
									onChange={(value) =>
										setAttributes({ subTitleText: value })
									}
									placeholder={__("CTA Sub Heading", "frontis-block")}
									className="fb-cta-sub-heading"
									style={{ textAlign: subTitleAlignment }}
								/>
							)}
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
								{info_Button_Switcher && (
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
