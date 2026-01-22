import { __ } from "@wordpress/i18n";

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
		Sub_Heading_Switcher,
		Show_Separator_Switcher,
		Sub_Heading_Text,
		Sub_Heading_Tag,
		Seperator_Position,
		Sub_Heading_Position,
		icon_Box_Button_Switcher,
		icon_Box_Button_Text,
		icon_Box_Button_Link,
		wrapperAlignment,
		iconBoxBg,
		descAlignment,
		buttonAlignment,
		icon,
		mediaSwitcher,
		contentAlignment,
		mediaSize,
		btnIcon,
		buttonIconSwitcher,
		btnIconPosition,
		iconBoxIconPosition,
		iconBoxButtonLink,
		iconBoxbtnTargetUrl,
		iconBoxIconVerticalPosition,
		iconBoxCardAlignment,

		iconBoxGlobalWraperID,
		iconBoxGlobalWraperClass,

		iconBoxDesktopSwitcher,
		iconBoxTabletSwitcher,
		iconBoxMobileSwitcher,

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
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-icon-box-main-wrapper ${blockID} ${iconBoxDesktopSwitcher && 'fb-desktop-responsive'} ${iconBoxTabletSwitcher && 'fb-tablet-responsive'} ${iconBoxMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	// Prevent link navigation in the editor and focus on text
	const handleButtonClick = (event) => {
		event.preventDefault();
	};

	/**
	* Manages tab button settings and switches to block settings on click
	*/
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
	 * Dynamic Text Value for Button One Text
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

			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-icon-box-wrapper ${blockID} ${iconBoxGlobalWraperClass}`} id={iconBoxGlobalWraperID} ref={panelRef}>
					<div className={`fb-icon-box-wrapper-inner ${blockID}`}>
						<div className="fb-icon-media-container">
							<div
								className="fb-icon-media-wrapper"
							>
								{mediaSwitcher === "image" && (
									<img src={attributes.iconBoxMediaUrl} />
								)}
								{mediaSwitcher === "icon" && (
									<div className="fb-icon-wrapper">{renderSVG(icon)}</div>
								)}
							</div>
						</div>
						<div className="fb-icon-box-content-wrapper">
							<RichText
								tagName={headingTag}
								value={dynamicTitleEnabled ? dynamicTitleValue : Heading_Text}
								onChange={(value) => {
									if (!dynamicTitleEnabled) setAttributes({ Heading_Text: value });
								}}
								placeholder={__("Icon Heading", "frontis-block")}
								className="fb-heading"
							/>

							{Sub_Heading_Switcher && (
								<RichText
									tagName={Sub_Heading_Tag}
									value={dynamicDescriptionEnabled ? dynamicDescriptionValue : Sub_Heading_Text}
									onChange={(value) => {
										if (!dynamicDescriptionEnabled) setAttributes({ Sub_Heading_Text: value });
									}}
									placeholder={__("Icon description", "frontis-block")}
									className="fb-description"
								/>
							)}
							{icon_Box_Button_Switcher && (
								<div className="fb-icon-button">
									<div className="fb-icon-btn-container">
										<a
											className="fb-icon-btn-wrapper"
											href={iconBoxButtonLink}
											target={iconBoxbtnTargetUrl ? '_blank' : undefined}
											rel={iconBoxbtnTargetUrl ? 'noopener noreferrer' : undefined}
											onClick={handleButtonClick}
											aria-label={__("Icon Button", "frontis-blocks")}
										>
											<RichText
												value={dynamicBtnEnabled ? dynamicBtnValue : icon_Box_Button_Text}
												tagName={"span"}
												onChange={(value) => {
													if (!dynamicBtnEnabled) setAttributes({ icon_Box_Button_Text: value });
												}}
												placeholder={__("Icon Button", "frontis-block")}


											/>
											{buttonIconSwitcher && (
												<div className="fb-btn-icon-wrapper" aria-hidden="true">
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
			<style>{blockStyle}</style>
		</>
	);
}
