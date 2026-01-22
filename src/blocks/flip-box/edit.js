import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from "@wordpress/block-editor";

import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import { useRef } from "@wordpress/element";
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import DynamicTextValue from '@Components/dynamic-text-value';

import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes, clientId, context }) {
	const {
		blockID,
		blockStyle,
		Heading_Text,
		headingTag,
		Alignment,
		separator,
		descSwitcher,
		titleSwitcher,
		Show_Separator_Switcher,
		Sub_Heading_Text,
		Sub_Heading_Tag,
		Seperator_Position,
		Sub_Heading_Position,
		flip_Button_Switcher,
		flip_Button_Text,
		flip_Button_Link,
		wrapperAlignment,
		flipBoxBg,
		descAlignment,
		buttonAlignment,
		icon,
		mediaSwitcher,
		contentAlignment,
		mediaSize,
		btnIcon,
		buttonIconSwitcher,
		btnIconPosition,
		flipIconPosition,
		flipButtonLink,
		flipbtnTargetUrl,
		flipIconVerticalPosition,
		flipCardAlignment,
		flipMediaUrl,
		flipBackMediaUrl,
		flipBoxGlobalWraperID,
		flipBoxGlobalWraperClass,

		flipBoxDesktopSwitcher,
		flipBoxTabletSwitcher,
		flipBoxMobileSwitcher,

		flipBack_Button_Switcher,
		flipBack_Button_Text,
		flipBack_Button_Link,
		flipBackBoxBg,
		flipBackIconPosition,
		flipBackButtonLink,
		flipBackbtnTargetUrl,
		flipBackIconVerticalPosition,
		flipBackCardAlignment,

		flipBackBoxGlobalWraperID,
		flipBackBoxGlobalWraperClass,

		flipBackBoxDesktopSwitcher,
		flipBackBoxTabletSwitcher,
		flipBackBoxMobileSwitcher,
		headingTagBack,
		headingTextBack,
		flipBackContent,
		flipBackContentTag,
		descSwitcherBack,
		titleSwitcherBack,
		descAlignmentBack,
		mediaSwitcherBack,
		iconBack,
		flipSelectedSide,
		flipAnimationType,
		buttonIconSwitcherBack,
		btnIconBack,
		isHover,

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
		dynamicBtnEnabled,
		dynamicBtnSource,
		dynamicBtnPostId,
		dynamicBtnPostType,
		dynamicBtnPostLabel,
		dynamicBtnField,
		dynamicBtnFeaturedImageField,

		dynamicBtnDateType,
		dynamicBtnDateFormat,

		dynamicBtnTimeType,
		dynamicBtnTimeFormat,

		dynamicBtnCommentsZeroText,
		dynamicBtnCommentsOneText,
		dynamicBtnCommentsManyText,

		dynamicBtnTermsTaxonomy,
		dynamicBtnTermsSeparator,
		dynamicBtnEnableLink,
		dynamicBtnLinkSource,
		/** End Dynamic Btn Text */

		/** Start Dynamic Back Title Text */
		dynamicBackTitleEnabled,
		dynamicBackTitleSource,
		dynamicBackTitlePostId,
		dynamicBackTitlePostType,
		dynamicBackTitlePostLabel,
		dynamicBackTitleField,
		dynamicBackTitleFeaturedImageField,

		dynamicBackTitleDateType,
		dynamicBackTitleDateFormat,

		dynamicBackTitleTimeType,
		dynamicBackTitleTimeFormat,

		dynamicBackTitleCommentsZeroText,
		dynamicBackTitleCommentsOneText,
		dynamicBackTitleCommentsManyText,

		dynamicBackTitleTermsTaxonomy,
		dynamicBackTitleTermsSeparator,
		dynamicBackTitleEnableLink,
		dynamicBackTitleLinkSource,
		/** End Dynamic Back Title Text */

		/** Start Dynamic Back Description Text */
		dynamicBackDescriptionEnabled,
		dynamicBackDescriptionSource,
		dynamicBackDescriptionPostId,
		dynamicBackDescriptionPostType,
		dynamicBackDescriptionPostLabel,
		dynamicBackDescriptionField,
		dynamicBackDescriptionFeaturedImageField,

		dynamicBackDescriptionDateType,
		dynamicBackDescriptionDateFormat,

		dynamicBackDescriptionTimeType,
		dynamicBackDescriptionTimeFormat,

		dynamicBackDescriptionCommentsZeroText,
		dynamicBackDescriptionCommentsOneText,
		dynamicBackDescriptionCommentsManyText,

		dynamicBackDescriptionTermsTaxonomy,
		dynamicBackDescriptionTermsSeparator,
		dynamicBackDescriptionEnableLink,
		dynamicBackDescriptionLinkSource,
		/** End Dynamic Back Description Text */

		/** Start Dynamic Back btn Text */
		dynamicBackBtnEnabled,
		dynamicBackBtnSource,
		dynamicBackBtnPostId,
		dynamicBackBtnPostType,
		dynamicBackBtnPostLabel,
		dynamicBackBtnField,
		dynamicBackBtnFeaturedImageField,

		dynamicBackBtnDateType,
		dynamicBackBtnDateFormat,

		dynamicBackBtnTimeType,
		dynamicBackBtnTimeFormat,

		dynamicBackBtnCommentsZeroText,
		dynamicBackBtnCommentsOneText,
		dynamicBackBtnCommentsManyText,

		dynamicBackBtnTermsTaxonomy,
		dynamicBackBtnTermsSeparator,
		dynamicBackBtnEnableLink,
		dynamicBackBtnLinkSource,
		/** End Dynamic Back btn Text */
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-flip-box-main-wrapper ${blockID} ${flipBoxDesktopSwitcher && 'fb-desktop-responsive'} ${flipBoxTabletSwitcher && 'fb-tablet-responsive'} ${flipBoxMobileSwitcher && 'fb-mobile-responsive'}`,
	});


	const handleButtonClick = (event) => {
		event.preventDefault();
	};


	const panelRef = useRef(null);
	SwitchToBlockSettings(panelRef);

	/**
	 * Dynamic Text Value for Title
	 */
	const { dynamicDisplayValue: dynamicTitleValue, dynamicDisplayLink: dynamicTitleLink } = DynamicTextValue({
		textEnabled: dynamicTitleEnabled,
		textSource: dynamicTitleSource,
		textField: dynamicTitleField,

		textPostId: dynamicTitlePostId,
		textPostType: dynamicTitlePostType,
		textPostLabel: dynamicTitlePostLabel,

		textFeaturedImageField: dynamicTitleFeaturedImageField,

		textDateType: dynamicTitleDateType,
		textDateFormat: dynamicTitleDateFormat,
		textTimeType: dynamicTitleTimeType,
		textTimeFormat: dynamicTitleTimeFormat,

		textCommentsZeroText: dynamicTitleCommentsZeroText,
		textCommentsOneText: dynamicTitleCommentsOneText,
		textCommentsManyText: dynamicTitleCommentsManyText,

		textTermsTaxonomy: dynamicTitleTermsTaxonomy,
		textTermsSeparator: dynamicTitleTermsSeparator,

		textLinkEnabled: dynamicTitleEnableLink,
		textLinkSource: dynamicTitleLinkSource,

		context,
	});

	/**
	 * Dynamic Text Value for Description
	 */
	const { dynamicDisplayValue: dynamicDescriptionValue, dynamicDisplayLink: dynamicDescriptionLink } = DynamicTextValue({
		textEnabled: dynamicDescriptionEnabled,
		textSource: dynamicDescriptionSource,
		textField: dynamicDescriptionField,

		textPostId: dynamicDescriptionPostId,
		textPostType: dynamicDescriptionPostType,
		textPostLabel: dynamicDescriptionPostLabel,

		textFeaturedImageField: dynamicDescriptionFeaturedImageField,

		textDateType: dynamicDescriptionDateType,
		textDateFormat: dynamicDescriptionDateFormat,
		textTimeType: dynamicDescriptionTimeType,
		textTimeFormat: dynamicDescriptionTimeFormat,

		textCommentsZeroText: dynamicDescriptionCommentsZeroText,
		textCommentsOneText: dynamicDescriptionCommentsOneText,
		textCommentsManyText: dynamicDescriptionCommentsManyText,

		textTermsTaxonomy: dynamicDescriptionTermsTaxonomy,
		textTermsSeparator: dynamicDescriptionTermsSeparator,

		textLinkEnabled: dynamicDescriptionEnableLink,
		textLinkSource: dynamicDescriptionLinkSource,

		context,
	});

	/**
	 * Dynamic Text Value for Button Text
	 */
	const { dynamicDisplayValue: dynamicBtnValue, dynamicDisplayLink: dynamicBtnLink } = DynamicTextValue({
		textEnabled: dynamicBtnEnabled,
		textSource: dynamicBtnSource,
		textField: dynamicBtnField,

		textPostId: dynamicBtnPostId,
		textPostType: dynamicBtnPostType,
		textPostLabel: dynamicBtnPostLabel,

		textFeaturedImageField: dynamicBtnFeaturedImageField,

		textDateType: dynamicBtnDateType,
		textDateFormat: dynamicBtnDateFormat,
		textTimeType: dynamicBtnTimeType,
		textTimeFormat: dynamicBtnTimeFormat,

		textCommentsZeroText: dynamicBtnCommentsZeroText,
		textCommentsOneText: dynamicBtnCommentsOneText,
		textCommentsManyText: dynamicBtnCommentsManyText,

		textTermsTaxonomy: dynamicBtnTermsTaxonomy,
		textTermsSeparator: dynamicBtnTermsSeparator,

		textLinkEnabled: dynamicBtnEnableLink,
		textLinkSource: dynamicBtnLinkSource,

		context,
	});


	/**
	 * Dynamic Text Value for Back Title Text
	 */
	const { dynamicDisplayValue: dynamicBackTitleValue, dynamicDisplayLink: dynamicBackTitleLink } = DynamicTextValue({
		textEnabled: dynamicBackTitleEnabled,
		textSource: dynamicBackTitleSource,
		textField: dynamicBackTitleField,

		textPostId: dynamicBackTitlePostId,
		textPostType: dynamicBackTitlePostType,
		textPostLabel: dynamicBackTitlePostLabel,

		textFeaturedImageField: dynamicBackTitleFeaturedImageField,

		textDateType: dynamicBackTitleDateType,
		textDateFormat: dynamicBackTitleDateFormat,
		textTimeType: dynamicBackTitleTimeType,
		textTimeFormat: dynamicBackTitleTimeFormat,

		textCommentsZeroText: dynamicBackTitleCommentsZeroText,
		textCommentsOneText: dynamicBackTitleCommentsOneText,
		textCommentsManyText: dynamicBackTitleCommentsManyText,

		textTermsTaxonomy: dynamicBackTitleTermsTaxonomy,
		textTermsSeparator: dynamicBackTitleTermsSeparator,

		textLinkEnabled: dynamicBackTitleEnableLink,
		textLinkSource: dynamicBackTitleLinkSource,

		context,
	});

	/**
	 * Dynamic Text Value for Back Description Text
	 */
	const { dynamicDisplayValue: dynamicBackDescriptionValue, dynamicDisplayLink: dynamicBackDescriptionLink } = DynamicTextValue({
		textEnabled: dynamicBackDescriptionEnabled,
		textSource: dynamicBackDescriptionSource,
		textField: dynamicBackDescriptionField,

		textPostId: dynamicBackDescriptionPostId,
		textPostType: dynamicBackDescriptionPostType,
		textPostLabel: dynamicBackDescriptionPostLabel,

		textFeaturedImageField: dynamicBackDescriptionFeaturedImageField,

		textDateType: dynamicBackDescriptionDateType,
		textDateFormat: dynamicBackDescriptionDateFormat,
		textTimeType: dynamicBackDescriptionTimeType,
		textTimeFormat: dynamicBackDescriptionTimeFormat,

		textCommentsZeroText: dynamicBackDescriptionCommentsZeroText,
		textCommentsOneText: dynamicBackDescriptionCommentsOneText,
		textCommentsManyText: dynamicBackDescriptionCommentsManyText,

		textTermsTaxonomy: dynamicBackDescriptionTermsTaxonomy,
		textTermsSeparator: dynamicBackDescriptionTermsSeparator,

		textLinkEnabled: dynamicBackDescriptionEnableLink,
		textLinkSource: dynamicBackDescriptionLinkSource,

		context,
	});

	/**
	 * Dynamic Text Value for Back Button Text
	 */
	const { dynamicDisplayValue: dynamicBackBtnValue, dynamicDisplayLink: dynamicBackBtnLink } = DynamicTextValue({
		textEnabled: dynamicBackBtnEnabled,
		textSource: dynamicBackBtnSource,
		textField: dynamicBackBtnField,

		textPostId: dynamicBackBtnPostId,
		textPostType: dynamicBackBtnPostType,
		textPostLabel: dynamicBackBtnPostLabel,

		textFeaturedImageField: dynamicBackBtnFeaturedImageField,

		textDateType: dynamicBackBtnDateType,
		textDateFormat: dynamicBackBtnDateFormat,
		textTimeType: dynamicBackBtnTimeType,
		textTimeFormat: dynamicBackBtnTimeFormat,

		textCommentsZeroText: dynamicBackBtnCommentsZeroText,
		textCommentsOneText: dynamicBackBtnCommentsOneText,
		textCommentsManyText: dynamicBackBtnCommentsManyText,

		textTermsTaxonomy: dynamicBackBtnTermsTaxonomy,
		textTermsSeparator: dynamicBackBtnTermsSeparator,

		textLinkEnabled: dynamicBackBtnEnableLink,
		textLinkSource: dynamicBackBtnLinkSource,

		context,
	});


	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>

			<div {...blockProps}>
				<div
					className={`fb-parent-wrapper fb-flip-box-wrapper ${blockID} ${flipBoxGlobalWraperClass}`}
					id={flipBoxGlobalWraperID}
					onMouseEnter={() => setAttributes({ isHover: true })}
					onMouseLeave={() => setAttributes({ isHover: false })}
				>
					<div className={`fb-flipper-wrapper fb-editor-mode${isHover || flipSelectedSide === "back"
						? " fb-show-back"
						: ""
						}`}>
						<div className={`fb-flipbox-front ${flipSelectedSide === 'front' ? 'fb-active-side' : 'fb-inactive-side'}`}>
							<div className="fb-flipbox-content-wrapper">

								{(mediaSwitcher === "image" && flipMediaUrl) ||
									(mediaSwitcher === "icon" && icon) ? (
									<div className="fb-flip-media-container">
										<div className="fb-flip-media-wrapper">
											{mediaSwitcher === "image" && flipMediaUrl && (
												<img src={flipMediaUrl} alt="Front media" />
											)}
											{mediaSwitcher === "icon" && icon && (
												<div className="fb-icon-wrapper">{renderSVG(icon)}</div>
											)}
										</div>
									</div>
								) : null}

								{(titleSwitcher || descSwitcher || flip_Button_Switcher) && (
									<div className="fb-flip-box-content-wrapper">
										{titleSwitcher && (
											<RichText
												tagName={headingTag}
												value={dynamicTitleEnabled ? dynamicTitleValue : Heading_Text}
												onChange={(value) => {
													if (!dynamicTitleEnabled) setAttributes({ Heading_Text: value });
												}}
												placeholder={__("Flip Heading", "frontis-block")}
												className="fb-heading"
											/>
										)}

										{descSwitcher && (
											<RichText
												tagName={Sub_Heading_Tag}
												value={dynamicDescriptionEnabled ? dynamicDescriptionValue : Sub_Heading_Text}
												onChange={(value) => {
													if (!dynamicDescriptionEnabled) setAttributes({ Sub_Heading_Text: value });
												}}
												placeholder={__("flip description", "frontis-block")}
												className="fb-description"
											/>
										)}
										{flip_Button_Switcher && (
											<div className="fb-flip-button">
												<div className="fb-flip-btn-container">
													<a
														className="fb-flip-btn-wrapper"
														href={flipButtonLink}
														target={flipbtnTargetUrl ? '_blank' : undefined}
														rel={flipbtnTargetUrl ? 'noopener noreferrer' : undefined}
														onClick={handleButtonClick}
													>
														<RichText
															tagName={"span"}
															value={dynamicBtnEnabled ? dynamicBtnValue : flip_Button_Text}
															onChange={(value) => {
																if (!dynamicBtnEnabled) setAttributes({ flip_Button_Text: value });
															}}
															placeholder={__("flip Button", "frontis-block")}
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
								)}

							</div>
						</div>
						<div className={`fb-flipbox-back ${flipSelectedSide === 'back' ? 'fb-active-side' : 'fb-inactive-side'}`}>
							<div className="fb-flipbox-content-wrapper">

								{(mediaSwitcherBack === "image" && flipMediaUrl) ||
									(mediaSwitcherBack === "icon" && iconBack) ? (
									<div className="fb-flip-back-media-container">
										<div className="fb-flip-back-media-wrapper">
											{mediaSwitcherBack === "image" && flipBackMediaUrl && (
												<img src={flipBackMediaUrl} alt="Back media" />
											)}
											{mediaSwitcherBack === "icon" && iconBack && (
												<div className="fb-icon-wrapper">{renderSVG(iconBack)}</div>
											)}
										</div>
									</div>
								) : null}

								{(titleSwitcherBack || descSwitcherBack || flipBack_Button_Switcher) && (
									<div className="fb-flip-back-box-content-wrapper">
										{titleSwitcherBack && (
											<RichText
												tagName={headingTagBack}
												value={dynamicBackTitleEnabled ? dynamicBackTitleValue : headingTextBack}
												onChange={(value) => {
													if (!dynamicBackTitleEnabled) setAttributes({ headingTextBack: value });
												}}
												placeholder={__("Back Title", "frontis-block")}
												className="fb-heading"
											/>
										)}

										{descSwitcherBack && (
											<RichText
												tagName={flipBackContentTag}
												value={dynamicBackDescriptionEnabled ? dynamicBackDescriptionValue : flipBackContent}
												onChange={(value) => {
													if (!dynamicBackDescriptionEnabled) setAttributes({ flipBackContent: value });
												}}
												placeholder={__("Back description", "frontis-block")}
												className="fb-description"
											/>
										)}
										{flipBack_Button_Switcher && (
											<div className="fb-flip-back-button">
												<div className="fb-flip-back-btn-container">
													<a
														className="fb-flip-back-btn-wrapper"
														href={flipBackButtonLink}
														target={flipBackbtnTargetUrl ? '_blank' : undefined}
														rel={flipBackbtnTargetUrl ? 'noopener noreferrer' : undefined}
														onClick={handleButtonClick}
													>
														<RichText
															tagName={"span"}
															value={dynamicBackBtnEnabled ? dynamicBackBtnValue : flipBack_Button_Text}
															onChange={(value) => {
																if (!dynamicBackBtnEnabled) setAttributes({ flipBack_Button_Text: value });
															}}
															placeholder={__("Flip Back Button", "frontis-block")}
														/>
														{buttonIconSwitcherBack && (
															<div className="fb-btn-icon-wrapper">
																{renderSVG(btnIconBack)}
															</div>
														)}
													</a>
												</div>
											</div>
										)}
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
