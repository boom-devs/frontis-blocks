import { __ } from "@wordpress/i18n";
import { useRef, lazy, Suspense } from "@wordpress/element";

import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";
/**
 * Internal dependencies
 */
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import DynamicTextValue from '@Components/dynamic-text-value';

const Inspector = lazy(() => import("./inspector"));

export default function Edit({ attributes, setAttributes, clientId, context }) {
	const {
		blockID,
		blockStyle,
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

		/** Start Dynamic Title Text */
		dynamicTitleEnabled,
		dynamicTitleSource,
		dynamicTitlePostId,
		dynamicTitlePostType,
		dynamicTitlePostLabel,
		dynamicTitleField,
		dynamicTitleFeaturedImageField,

		dynamicTitleDateType,
		dynamicTitleDateFormat,

		dynamicTitleTimeType,
		dynamicTitleTimeFormat,

		dynamicTitleCommentsZeroText,
		dynamicTitleCommentsOneText,
		dynamicTitleCommentsManyText,

		dynamicTitleTermsTaxonomy,
		dynamicTitleTermsSeparator,
		dynamicTitleEnableLink,
		dynamicTitleLinkSource,
		/** End Dynamic Title Text */

		/** Start Dynamic Description Text */
		dynamicDescriptionEnabled,
		dynamicDescriptionSource,
		dynamicDescriptionPostId,
		dynamicDescriptionPostType,
		dynamicDescriptionPostLabel,
		dynamicDescriptionField,
		dynamicDescriptionFeaturedImageField,

		dynamicDescriptionDateType,
		dynamicDescriptionDateFormat,

		dynamicDescriptionTimeType,
		dynamicDescriptionTimeFormat,

		dynamicDescriptionCommentsZeroText,
		dynamicDescriptionCommentsOneText,
		dynamicDescriptionCommentsManyText,

		dynamicDescriptionTermsTaxonomy,
		dynamicDescriptionTermsSeparator,
		dynamicDescriptionEnableLink,
		dynamicDescriptionLinkSource,
		/** End Dynamic Description Text */

		/** Start Dynamic Btn One Text */
		dynamicBtnOneEnabled,
		dynamicBtnOneSource,
		dynamicBtnOnePostId,
		dynamicBtnOnePostType,
		dynamicBtnOnePostLabel,
		dynamicBtnOneField,
		dynamicBtnOneFeaturedImageField,

		dynamicBtnOneDateType,
		dynamicBtnOneDateFormat,

		dynamicBtnOneTimeType,
		dynamicBtnOneTimeFormat,

		dynamicBtnOneCommentsZeroText,
		dynamicBtnOneCommentsOneText,
		dynamicBtnOneCommentsManyText,

		dynamicBtnOneTermsTaxonomy,
		dynamicBtnOneTermsSeparator,
		dynamicBtnOneEnableLink,
		dynamicBtnOneLinkSource,
		/** End Dynamic Btn One Text */

		/** Start Dynamic Btn Two Text */
		dynamicBtnTwoEnabled,
		dynamicBtnTwoSource,
		dynamicBtnTwoPostId,
		dynamicBtnTwoPostType,
		dynamicBtnTwoPostLabel,
		dynamicBtnTwoField,
		dynamicBtnTwoFeaturedImageField,

		dynamicBtnTwoDateType,
		dynamicBtnTwoDateFormat,

		dynamicBtnTwoTimeType,
		dynamicBtnTwoTimeFormat,

		dynamicBtnTwoCommentsZeroText,
		dynamicBtnTwoCommentsOneText,
		dynamicBtnTwoCommentsManyText,

		dynamicBtnTwoTermsTaxonomy,
		dynamicBtnTwoTermsSeparator,
		dynamicBtnTwoEnableLink,
		dynamicBtnTwoLinkSource,
		/** End Dynamic Btn Two Text */

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

	/**
	 * Dynamic Text Value for Title
	 */
	const { dynamicDisplayValue: dynamicTitleValue, dynamicDisplayLink: dynamicTitleLink } = DynamicTextValue({
		textEnabled:            dynamicTitleEnabled,
		textSource:             dynamicTitleSource,
		textField:              dynamicTitleField,

		textPostId:             dynamicTitlePostId,
		textPostType:           dynamicTitlePostType,
		textPostLabel:          dynamicTitlePostLabel,

		textFeaturedImageField: dynamicTitleFeaturedImageField,

		textDateType:           dynamicTitleDateType,
		textDateFormat:         dynamicTitleDateFormat,
		textTimeType:           dynamicTitleTimeType, 
		textTimeFormat:         dynamicTitleTimeFormat,

		textCommentsZeroText:   dynamicTitleCommentsZeroText,
		textCommentsOneText:    dynamicTitleCommentsOneText,
		textCommentsManyText:   dynamicTitleCommentsManyText,

		textTermsTaxonomy:      dynamicTitleTermsTaxonomy,
		textTermsSeparator:     dynamicTitleTermsSeparator,

		textLinkEnabled:        dynamicTitleEnableLink,
		textLinkSource:         dynamicTitleLinkSource,

		context,
	});

	/**
	 * Dynamic Text Value for Description
	 */
	const { dynamicDisplayValue: dynamicDescriptionValue, dynamicDisplayLink: dynamicDescriptionLink } = DynamicTextValue({
		textEnabled:            dynamicDescriptionEnabled,
		textSource:             dynamicDescriptionSource,
		textField:              dynamicDescriptionField,

		textPostId:             dynamicDescriptionPostId,
		textPostType:           dynamicDescriptionPostType,
		textPostLabel:          dynamicDescriptionPostLabel,

		textFeaturedImageField: dynamicDescriptionFeaturedImageField,

		textDateType:           dynamicDescriptionDateType,
		textDateFormat:         dynamicDescriptionDateFormat,
		textTimeType:           dynamicDescriptionTimeType, 
		textTimeFormat:         dynamicDescriptionTimeFormat,

		textCommentsZeroText:   dynamicDescriptionCommentsZeroText,
		textCommentsOneText:    dynamicDescriptionCommentsOneText,
		textCommentsManyText:   dynamicDescriptionCommentsManyText,

		textTermsTaxonomy:      dynamicDescriptionTermsTaxonomy,
		textTermsSeparator:     dynamicDescriptionTermsSeparator,

		textLinkEnabled:        dynamicDescriptionEnableLink,
		textLinkSource:         dynamicDescriptionLinkSource,

		context,
	});

	/**
	 * Dynamic Text Value for Button One Text
	 */
	const { dynamicDisplayValue: dynamicBtnOneValue, dynamicDisplayLink: dynamicBtnOneLink } = DynamicTextValue({
		textEnabled:            dynamicBtnOneEnabled,
		textSource:             dynamicBtnOneSource,
		textField:              dynamicBtnOneField,

		textPostId:             dynamicBtnOnePostId,
		textPostType:           dynamicBtnOnePostType,
		textPostLabel:          dynamicBtnOnePostLabel,

		textFeaturedImageField: dynamicBtnOneFeaturedImageField,

		textDateType:           dynamicBtnOneDateType,
		textDateFormat:         dynamicBtnOneDateFormat,
		textTimeType:           dynamicBtnOneTimeType,
		textTimeFormat:         dynamicBtnOneTimeFormat,

		textCommentsZeroText:   dynamicBtnOneCommentsZeroText,
		textCommentsOneText:    dynamicBtnOneCommentsOneText,
		textCommentsManyText:   dynamicBtnOneCommentsManyText,

		textTermsTaxonomy:      dynamicBtnOneTermsTaxonomy,
		textTermsSeparator:     dynamicBtnOneTermsSeparator,

		textLinkEnabled:        dynamicBtnOneEnableLink,
		textLinkSource:         dynamicBtnOneLinkSource,

		context,
	});

	/**
	 * Dynamic Text Value for Button Two Text
	 */
	const { dynamicDisplayValue: dynamicBtnTwoValue, dynamicDisplayLink: dynamicBtnTwoLink } = DynamicTextValue({
		textEnabled:            dynamicBtnTwoEnabled,
		textSource:             dynamicBtnTwoSource,
		textField:              dynamicBtnTwoField,

		textPostId:             dynamicBtnTwoPostId,
		textPostType:           dynamicBtnTwoPostType,
		textPostLabel:          dynamicBtnTwoPostLabel,

		textFeaturedImageField: dynamicBtnTwoFeaturedImageField,

		textDateType:           dynamicBtnTwoDateType,
		textDateFormat:         dynamicBtnTwoDateFormat,
		textTimeType:           dynamicBtnTwoTimeType,
		textTimeFormat:         dynamicBtnTwoTimeFormat,

		textCommentsZeroText:   dynamicBtnTwoCommentsZeroText,
		textCommentsOneText:    dynamicBtnTwoCommentsOneText,
		textCommentsManyText:   dynamicBtnTwoCommentsManyText,

		textTermsTaxonomy:      dynamicBtnTwoTermsTaxonomy,
		textTermsSeparator:     dynamicBtnTwoTermsSeparator,

		textLinkEnabled:        dynamicBtnTwoEnableLink,
		textLinkSource:         dynamicBtnTwoLinkSource,

		context,
	});

	return (
		<>
			<Suspense fallback={null}>
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
					clientId={clientId}
				/>
			</Suspense>
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
								value={dynamicTitleEnabled ? dynamicTitleValue : Heading_Text}
								onChange={(value) => {
									if (!dynamicTitleEnabled) setAttributes({ Heading_Text: value });
								}}
								placeholder={__("CTA Title", "frontis-block")}
								className="fb-heading"
								style={{ textAlign: Alignment }}
							/>

							{descriptionSwitcher && (
								<RichText
									tagName={Sub_Heading_Tag}
									value={dynamicDescriptionEnabled ? dynamicDescriptionValue : Sub_Heading_Text}
									onChange={(value) => {
										if (!dynamicDescriptionEnabled) setAttributes({ Sub_Heading_Text: value });
									}}
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
													value={dynamicBtnOneEnabled ? dynamicBtnOneValue : info_Button_Text}
													tagName="span"
													onChange={(value) => {
														if (!dynamicBtnOneEnabled) setAttributes({ info_Button_Text: value });
													}}
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
													value={dynamicBtnTwoEnabled ? dynamicBtnTwoValue : btnTwoText}
													tagName="span"
													onChange={(value) => {
														if (!dynamicBtnTwoEnabled) setAttributes({ btnTwoText: value });
													}}
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
			<style>{blockStyle}</style>
		</>
	);
}
