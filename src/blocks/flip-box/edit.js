import { __ } from '@wordpress/i18n';
import {
	MediaUpload,
	MediaUploadCheck,
	useBlockProps,
	InspectorControls, RichText,
} from '@wordpress/block-editor';
import {
	TabPanel,
	PanelBody,
	TextControl,
	ColorPicker,
	BaseControl,
	RangeControl,
	ToggleControl,
	DateTimePicker,
	Dropdown,
	Button,
	Dashicon,
	SelectControl,
	ButtonGroup,
	ColorPalette,
	ResponsiveWrapper, __experimentalHStack as HStack, TextareaControl,
} from '@wordpress/components';
import {useEffect, useRef, useState} from '@wordpress/element';
import './editor.scss';
import {mediaType, BORDER_STYLES, FONT_FAMILYS, UNIT_TYPES, SELECT_TYPE, iconType} from "./constants/constants";
import FBIconPicker from "../../components/icon-picker";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import ResponsiveControl from "../../components/responsivecontrol";
import {HEADING} from "../info-box/constants/constants";
import FlipBoxItemFrontControl from "@Blocks/flip-box/style-control/flip-box-item-front-control";
import FlipBoxItemBackControl from "@Blocks/flip-box/style-control/flip-box-item-back-control";
import FlipBoxFrontTitleControl from "@Blocks/flip-box/style-control/flip-box-front-title-control";
import FlipBoxFrontContentControl from "@Blocks/flip-box/style-control/flip-box-front-content-control";
import FlipBoxBackTitleControl from "@Blocks/flip-box/style-control/flip-box-back-title-control";
import FlipBoxBackContentControl from "@Blocks/flip-box/style-control/flip-box-back-content-control";
import {ICON_ALIGN, TEXT_ALIGN} from "@Blocks/dual-button/constants/constants";
import FlipBoxFrontButtonControl from "@Blocks/flip-box/style-control/flip-box-front-button-control";


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		flipBoxTypeSwitcher,
		flipBoxFrontIcon,
		mediaSwitcher,
		flipBoxFrontIconMediaUrl,
		deviceType,
		flipBoxFrontTitle,
		flipBoxFrontTitleHeadingTag,
		flipBoxBackTitle,
		flipBoxBackTitleHeadingTag,


		/** Start Flip Box Front Button Attribute */
		flipBoxFrontButtonText,
		flipBoxFrontButtonUrl,
		flipBoxFrontButtonTargetUrl,

		flipBoxFrontButtonFontColorSwitcher,
		flipBoxFrontButtonFontColor,
		flipBoxFrontButtonFontHoverColor,

		flipBoxFrontButtonMarginUnits,
		flipBoxFrontButtonMarginDesktop,
		flipBoxFrontButtonMarginTablet,
		flipBoxFrontButtonMarginMobile,
		flipBoxFrontButtonMarginLink,

		flipBoxFrontButtonFontFamily,
		flipBoxFrontButtonFontSize,
		flipBoxFrontButtonFontSizeUnits,
		flipBoxFrontButtonFontWeight,
		flipBoxFrontButtonFontStyle,
		flipBoxFrontButtonTextTransform,
		flipBoxFrontButtonTextDecoration,
		flipBoxFrontButtonLetterSpacing,
		flipBoxFrontButtonLetterSpacingUnits,
		flipBoxFrontButtonLineHeight,
		flipBoxFrontButtonLineHeightUnits,
		/** End Flip Box Front Button Attribute */

		/** Start Flip Box Back Button Attribute */
		flipBoxBackButtonText,
		flipBoxBackButtonUrl,
		flipBoxBackButtonTargetUrl,
		/** End Flip Box Back Button Attribute */

		/** Start Flip Box Item Front Attribute */
		flipBoxItemFrontSize,
		flipBoxItemFrontSizeUnits,
		flipBoxItemFrontBorderTypeUnits,
		flipBoxItemFrontBorderTypeDesktop,
		flipBoxItemFrontBorderTypeTablet,
		flipBoxItemFrontBorderTypeMobile,
		flipBoxItemFrontBorderTypeLink,
		flipBoxItemFrontBorder,
		flipBoxItemFrontBorderColorSwitcher,
		flipBoxItemFrontBorderColor,
		flipBoxItemFrontBorderHoverColor,
		flipBoxItemFrontBorderRadiusUnits,
		flipBoxItemFrontBorderRadiusDesktop,
		flipBoxItemFrontBorderRadiusTablet,
		flipBoxItemFrontBorderRadiusMobile,
		flipBoxItemFrontBorderRadiusLink,
		/** End Flip Box Item Front Attribute */


		/** Start Flip Box Item Back Attribute */
		flipBoxItemBackSize,
		flipBoxItemBackSizeUnits,
		flipBoxItemBackBorderTypeUnits,
		flipBoxItemBackBorderTypeDesktop,
		flipBoxItemBackBorderTypeTablet,
		flipBoxItemBackBorderTypeMobile,
		flipBoxItemBackBorderTypeLink,
		flipBoxItemBackBorder,
		flipBoxItemBackBorderColorSwitcher,
		flipBoxItemBackBorderColor,
		flipBoxItemBackBorderHoverColor,
		flipBoxItemBackBorderRadiusUnits,
		flipBoxItemBackBorderRadiusDesktop,
		flipBoxItemBackBorderRadiusTablet,
		flipBoxItemBackBorderRadiusMobile,
		flipBoxItemBackBorderRadiusLink,
		/** End Flip Box Item Back Attribute */

		/** Start Flip Box Front Title Attribute */
		flipBoxFrontTitleFontColorSwitcher,
		flipBoxFrontTitleFontColor,
		flipBoxFrontTitleFontHoverColor,

		flipBoxFrontTitleMarginUnits,
		flipBoxFrontTitleMarginDesktop,
		flipBoxFrontTitleMarginTablet,
		flipBoxFrontTitleMarginMobile,
		flipBoxFrontTitleMarginLink,

		flipBoxFrontTitleFontFamily,
		flipBoxFrontTitleFontSize,
		flipBoxFrontTitleFontSizeUnits,
		flipBoxFrontTitleFontWeight,
		flipBoxFrontTitleFontStyle,
		flipBoxFrontTitleTextTransform,
		flipBoxFrontTitleTextDecoration,
		flipBoxFrontTitleLetterSpacing,
		flipBoxFrontTitleLetterSpacingUnits,
		flipBoxFrontTitleLineHeight,
		flipBoxFrontTitleLineHeightUnits,
		/** End Flip Box Front Title Attribute */

		/** Start Flip Box Back Title Attribute */
		flipBoxBackTitleFontColorSwitcher,
		flipBoxBackTitleFontColor,
		flipBoxBackTitleFontHoverColor,

		flipBoxBackTitleMarginUnits,
		flipBoxBackTitleMarginDesktop,
		flipBoxBackTitleMarginTablet,
		flipBoxBackTitleMarginMobile,
		flipBoxBackTitleMarginLink,

		flipBoxBackTitleFontFamily,
		flipBoxBackTitleFontSize,
		flipBoxBackTitleFontSizeUnits,
		flipBoxBackTitleFontWeight,
		flipBoxBackTitleFontStyle,
		flipBoxBackTitleTextTransform,
		flipBoxBackTitleTextDecoration,
		flipBoxBackTitleLetterSpacing,
		flipBoxBackTitleLetterSpacingUnits,
		flipBoxBackTitleLineHeight,
		flipBoxBackTitleLineHeightUnits,
		/** End Flip Box Back Title Attribute */


		/** Start Flip Box Front Content Attribute */
		flipBoxFrontContent,
		flipBoxFrontContentFontColorSwitcher,
		flipBoxFrontContentFontColor,
		flipBoxFrontContentFontHoverColor,

		flipBoxFrontContentMarginUnits,
		flipBoxFrontContentMarginDesktop,
		flipBoxFrontContentMarginTablet,
		flipBoxFrontContentMarginMobile,
		flipBoxFrontContentMarginLink,

		flipBoxFrontContentFontFamily,
		flipBoxFrontContentFontSize,
		flipBoxFrontContentFontSizeUnits,
		flipBoxFrontContentFontWeight,
		flipBoxFrontContentFontStyle,
		flipBoxFrontContentTextTransform,
		flipBoxFrontContentTextDecoration,
		flipBoxFrontContentLetterSpacing,
		flipBoxFrontContentLetterSpacingUnits,
		flipBoxFrontContentLineHeight,
		flipBoxFrontContentLineHeightUnits,
		/** End Flip Box Front Content Attribute */


		/** Start Flip Box Back Content Attribute */
		flipBoxBackContent,
		flipBoxBackContentFontColorSwitcher,
		flipBoxBackContentFontColor,
		flipBoxBackContentFontHoverColor,

		flipBoxBackContentMarginUnits,
		flipBoxBackContentMarginDesktop,
		flipBoxBackContentMarginTablet,
		flipBoxBackContentMarginMobile,
		flipBoxBackContentMarginLink,

		flipBoxBackContentFontFamily,
		flipBoxBackContentFontSize,
		flipBoxBackContentFontSizeUnits,
		flipBoxBackContentFontWeight,
		flipBoxBackContentFontStyle,
		flipBoxBackContentTextTransform,
		flipBoxBackContentTextDecoration,
		flipBoxBackContentLetterSpacing,
		flipBoxBackContentLetterSpacingUnits,
		flipBoxBackContentLineHeight,
		flipBoxBackContentLineHeightUnits,
		/** End Flip Box Back Content Attribute */

		flipBoxBackMediaSwitcher,
		flipBoxBackIconMediaUrl,
		flipBoxBackIcon,
		flipBoxBackIconColor,

	} = attributes;

	// Prevent link navigation in the editor and focus on text
	const handleButtonClick = (event) => {
		event.preventDefault();
	};


	// Icon media remove handler
	const removeFlipBoxFrontIconMedia = () => {
		setAttributes({
			flipBoxFrontIconMediaID: '',
			flipBoxFrontIconMediaUrl: ''
		});
	}
	const removeFlipBoxBackIconMedia = () => {
		setAttributes({
			flipBoxBackIconMediaID: '',
			flipBoxBackIconMediaUrl: ''
		});
	}
	const flipBoxFrontIconHandler = (iconName) => {
		setAttributes({flipBoxFrontIcon: iconName})
	}
	const flipBoxBackIconHandler = (iconName) => {
		setAttributes({flipBoxBackIcon: iconName})
	}

	useEffect(() => {
		if (!blockID) {
			setAttributes({
				blockID: "flip-box" + clientId.slice(0, 8),
			});
		}
	}, [blockID, clientId, setAttributes]);

	const blockProps = useBlockProps();


	{/* Inspector Controls */}
	/** Start Flip Box Item Front Control */
	const flipBoxItemFrontBorderTypeGetDesktop = `${flipBoxItemFrontBorderTypeDesktop.top}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeDesktop.right}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeDesktop.bottom}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeDesktop.left}${flipBoxItemFrontBorderTypeUnits[deviceType]}`;
	const flipBoxItemFrontBorderTypeGetTablet = `${flipBoxItemFrontBorderTypeTablet.top}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeTablet.right}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeTablet.bottom}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeTablet.left}${flipBoxItemFrontBorderTypeUnits[deviceType]}`;
	const flipBoxItemFrontBorderTypeGetMobile = `${flipBoxItemFrontBorderTypeMobile.top}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeMobile.right}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeMobile.bottom}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeMobile.left}${flipBoxItemFrontBorderTypeUnits[deviceType]}`;

	const flipBoxItemFrontBorderRadiusGetDesktop = `${flipBoxItemFrontBorderRadiusDesktop.top}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusDesktop.right}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusDesktop.bottom}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusDesktop.left}${flipBoxItemFrontBorderRadiusUnits[deviceType]}`;
	const flipBoxItemFrontBorderRadiusGetTablet = `${flipBoxItemFrontBorderRadiusTablet.top}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusTablet.right}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusTablet.bottom}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusTablet.left}${flipBoxItemFrontBorderRadiusUnits[deviceType]}`;
	const flipBoxItemFrontBorderRadiusGetMobile = `${flipBoxItemFrontBorderRadiusMobile.top}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusMobile.right}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusMobile.bottom}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusMobile.left}${flipBoxItemFrontBorderRadiusUnits[deviceType]}`;
	/** End Flip Box Item Front Control */

	/** Start Flip Box Item Back Control */
	const flipBoxItemBackBorderTypeGetDesktop = `${flipBoxItemBackBorderTypeDesktop.top}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeDesktop.right}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeDesktop.bottom}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeDesktop.left}${flipBoxItemBackBorderTypeUnits[deviceType]}`;
	const flipBoxItemBackBorderTypeGetTablet = `${flipBoxItemBackBorderTypeTablet.top}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeTablet.right}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeTablet.bottom}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeTablet.left}${flipBoxItemBackBorderTypeUnits[deviceType]}`;
	const flipBoxItemBackBorderTypeGetMobile = `${flipBoxItemBackBorderTypeMobile.top}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeMobile.right}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeMobile.bottom}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeMobile.left}${flipBoxItemBackBorderTypeUnits[deviceType]}`;


	const flipBoxItemBackBorderRadiusGetDesktop = `${flipBoxItemBackBorderRadiusDesktop.top}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusDesktop.right}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusDesktop.bottom}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusDesktop.left}${flipBoxItemBackBorderRadiusUnits[deviceType]}`;
	const flipBoxItemBackBorderRadiusGetTablet = `${flipBoxItemBackBorderRadiusTablet.top}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusTablet.right}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusTablet.bottom}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusTablet.left}${flipBoxItemBackBorderRadiusUnits[deviceType]}`;
	const flipBoxItemBackBorderRadiusGetMobile = `${flipBoxItemBackBorderRadiusMobile.top}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusMobile.right}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusMobile.bottom}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusMobile.left}${flipBoxItemBackBorderRadiusUnits[deviceType]}`;
	/** End Flip Box Item Back Control */

	/** Start Flip Box Front Button Control */
	const flipBoxFrontButtonMarginGetDesktop = `${flipBoxFrontButtonMarginDesktop.top}${flipBoxFrontButtonMarginUnits[deviceType]} ${flipBoxFrontButtonMarginDesktop.right}${flipBoxFrontButtonMarginUnits[deviceType]} ${flipBoxFrontButtonMarginDesktop.bottom}${flipBoxFrontButtonMarginUnits[deviceType]} ${flipBoxFrontButtonMarginDesktop.left}${flipBoxFrontButtonMarginUnits[deviceType]}`;
	const flipBoxFrontButtonMarginGetTablet = `${flipBoxFrontButtonMarginTablet.top}${flipBoxFrontButtonMarginUnits[deviceType]} ${flipBoxFrontButtonMarginTablet.right}${flipBoxFrontButtonMarginUnits[deviceType]} ${flipBoxFrontButtonMarginTablet.bottom}${flipBoxFrontButtonMarginUnits[deviceType]} ${flipBoxFrontButtonMarginTablet.left}${flipBoxFrontButtonMarginUnits[deviceType]}`;
	const flipBoxFrontButtonMarginGetMobile = `${flipBoxFrontButtonMarginMobile.top}${flipBoxFrontButtonMarginUnits[deviceType]} ${flipBoxFrontButtonMarginMobile.right}${flipBoxFrontButtonMarginUnits[deviceType]} ${flipBoxFrontButtonMarginMobile.bottom}${flipBoxFrontButtonMarginUnits[deviceType]} ${flipBoxFrontButtonMarginMobile.left}${flipBoxFrontButtonMarginUnits[deviceType]}`;
	/** End Flip Box Front Button Control */

	return (
		<>
			<style>
				{`
				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front {
					${flipBoxItemFrontSize.Desktop ? `min-height: ${flipBoxItemFrontSize.Desktop}${flipBoxItemFrontSizeUnits.Desktop};` : ''}
					${flipBoxItemFrontBorder ? `border: ${flipBoxItemFrontBorder};` : ''}
					${flipBoxItemFrontBorderTypeGetDesktop ? `border-width: ${flipBoxItemFrontBorderTypeGetDesktop};` : ''}
					${flipBoxItemFrontBorderRadiusGetDesktop ? `border-radius: ${flipBoxItemFrontBorderRadiusGetDesktop};` : ''}
					${flipBoxItemFrontBorderColor ? `border-color: ${flipBoxItemFrontBorderColor};` : ''}
				}
				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-title {
				  ${flipBoxFrontTitleFontColor ? `color: ${flipBoxFrontTitleFontColor};` : ''}
				  ${flipBoxFrontTitleFontFamily ? `font-family: ${flipBoxFrontTitleFontFamily};` : ''}
				  ${flipBoxFrontTitleFontSize.Desktop ? `font-size: ${flipBoxFrontTitleFontSize.Desktop}${flipBoxFrontTitleFontSizeUnits.Desktop};` : ''}
				  ${flipBoxFrontTitleFontWeight ? `font-weight: ${flipBoxFrontTitleFontWeight};` : ''}
				  ${flipBoxFrontTitleFontStyle ? `font-style: ${flipBoxFrontTitleFontStyle};` : ''}
				  ${flipBoxFrontTitleTextTransform ? `text-transform: ${flipBoxFrontTitleTextTransform};` : ''}
				  ${flipBoxFrontTitleTextDecoration ? `text-decoration: ${flipBoxFrontTitleTextDecoration};` : ''}
				  ${flipBoxFrontTitleLetterSpacing.Desktop ? `letter-spacing: ${flipBoxFrontTitleLetterSpacing.Desktop}${flipBoxFrontTitleLetterSpacingUnits.Desktop};` : ''}
				  ${flipBoxFrontTitleLineHeight.Desktop ? `line-height: ${flipBoxFrontTitleLineHeight.Desktop}${flipBoxFrontTitleLineHeightUnits.Desktop};` : ''}
				}
				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-content {
				  ${flipBoxFrontContentFontColor ? `color: ${flipBoxFrontContentFontColor};` : ''}
				  ${flipBoxFrontContentFontFamily ? `font-family: ${flipBoxFrontContentFontFamily};` : ''}
				  ${flipBoxFrontContentFontSize.Desktop ? `font-size: ${flipBoxFrontContentFontSize.Desktop}${flipBoxFrontContentFontSizeUnits.Desktop};` : ''}
				  ${flipBoxFrontContentFontWeight ? `font-weight: ${flipBoxFrontContentFontWeight};` : ''}
				  ${flipBoxFrontContentFontStyle ? `font-style: ${flipBoxFrontContentFontStyle};` : ''}
				  ${flipBoxFrontContentTextTransform ? `text-transform: ${flipBoxFrontContentTextTransform};` : ''}
				  ${flipBoxFrontContentTextDecoration ? `text-decoration: ${flipBoxFrontContentTextDecoration};` : ''}
				  ${flipBoxFrontContentLetterSpacing.Desktop ? `letter-spacing: ${flipBoxFrontContentLetterSpacing.Desktop}${flipBoxFrontContentLetterSpacingUnits.Desktop};` : ''}
				  ${flipBoxFrontContentLineHeight.Desktop ? `line-height: ${flipBoxFrontContentLineHeight.Desktop}${flipBoxFrontContentLineHeightUnits.Desktop};` : ''}
				}
				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-front-button {
				  ${flipBoxFrontButtonFontColor ? `color: ${flipBoxFrontButtonFontColor};` : ''}
				  ${flipBoxFrontButtonFontFamily ? `font-family: ${flipBoxFrontButtonFontFamily};` : ''}
				  ${flipBoxFrontButtonFontSize.Desktop ? `font-size: ${flipBoxFrontButtonFontSize.Desktop}${flipBoxFrontButtonFontSizeUnits.Desktop};` : ''}
				  ${flipBoxFrontButtonFontWeight ? `font-weight: ${flipBoxFrontButtonFontWeight};` : ''}
				  ${flipBoxFrontButtonFontStyle ? `font-style: ${flipBoxFrontButtonFontStyle};` : ''}
				  ${flipBoxFrontButtonTextTransform ? `text-transform: ${flipBoxFrontButtonTextTransform};` : ''}
				  ${flipBoxFrontButtonTextDecoration ? `text-decoration: ${flipBoxFrontButtonTextDecoration};` : ''}
				  ${flipBoxFrontButtonLetterSpacing.Desktop ? `letter-spacing: ${flipBoxFrontButtonLetterSpacing.Desktop}${flipBoxFrontButtonLetterSpacingUnits.Desktop};` : ''}
				  ${flipBoxFrontButtonLineHeight.Desktop ? `line-height: ${flipBoxFrontButtonLineHeight.Desktop}${flipBoxFrontButtonLineHeightUnits.Desktop};` : ''}
				  ${flipBoxFrontButtonMarginGetDesktop ? `margin: ${flipBoxFrontButtonMarginGetDesktop};` : ''}
				  display: inline-block;
    			  width: 100%;
				}
				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-title {
				  ${flipBoxBackTitleFontColor ? `color: ${flipBoxBackTitleFontColor};` : ''}
				  ${flipBoxBackTitleFontFamily ? `font-family: ${flipBoxBackTitleFontFamily};` : ''}
				  ${flipBoxBackTitleFontSize.Desktop ? `font-size: ${flipBoxBackTitleFontSize.Desktop}${flipBoxBackTitleFontSizeUnits.Desktop};` : ''}
				  ${flipBoxBackTitleFontWeight ? `font-weight: ${flipBoxBackTitleFontWeight};` : ''}
				  ${flipBoxBackTitleFontStyle ? `font-style: ${flipBoxBackTitleFontStyle};` : ''}
				  ${flipBoxBackTitleTextTransform ? `text-transform: ${flipBoxBackTitleTextTransform};` : ''}
				  ${flipBoxBackTitleTextDecoration ? `text-decoration: ${flipBoxBackTitleTextDecoration};` : ''}
				  ${flipBoxBackTitleLetterSpacing.Desktop ? `letter-spacing: ${flipBoxBackTitleLetterSpacing.Desktop}${flipBoxBackTitleLetterSpacingUnits.Desktop};` : ''}
				  ${flipBoxBackTitleLineHeight.Desktop ? `line-height: ${flipBoxBackTitleLineHeight.Desktop}${flipBoxBackTitleLineHeightUnits.Desktop};` : ''}
				}
				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-content {
				  ${flipBoxBackContentFontColor ? `color: ${flipBoxBackContentFontColor};` : ''}
				  ${flipBoxBackContentFontFamily ? `font-family: ${flipBoxBackContentFontFamily};` : ''}
				  ${flipBoxBackContentFontSize.Desktop ? `font-size: ${flipBoxBackContentFontSize.Desktop}${flipBoxBackContentFontSizeUnits.Desktop};` : ''}
				  ${flipBoxBackContentFontWeight ? `font-weight: ${flipBoxBackContentFontWeight};` : ''}
				  ${flipBoxBackContentFontStyle ? `font-style: ${flipBoxBackContentFontStyle};` : ''}
				  ${flipBoxBackContentTextTransform ? `text-transform: ${flipBoxBackContentTextTransform};` : ''}
				  ${flipBoxBackContentTextDecoration ? `text-decoration: ${flipBoxBackContentTextDecoration};` : ''}
				  ${flipBoxBackContentLetterSpacing.Desktop ? `letter-spacing: ${flipBoxBackContentLetterSpacing.Desktop}${flipBoxBackContentLetterSpacingUnits.Desktop};` : ''}
				  ${flipBoxBackContentLineHeight.Desktop ? `line-height: ${flipBoxBackContentLineHeight.Desktop}${flipBoxBackContentLineHeightUnits.Desktop};` : ''}
				}
				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back {
					${flipBoxItemBackSize.Desktop ? `min-height: ${flipBoxItemBackSize.Desktop}${flipBoxItemBackSizeUnits.Desktop};` : ''}
					${flipBoxItemBackBorder ? `border: ${flipBoxItemBackBorder};` : ''}
					${flipBoxItemBackBorderTypeGetDesktop ? `border-width: ${flipBoxItemBackBorderTypeGetDesktop};` : ''}
					${flipBoxItemBackBorderRadiusGetDesktop ? `border-radius: ${flipBoxItemBackBorderRadiusGetDesktop};` : ''}
					${flipBoxItemBackBorderColor ? `border-color: ${flipBoxItemBackBorderColor};` : ''}
				}


				@media only screen and (max-width: 1024px) {
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front {
						${flipBoxItemFrontSize.Tablet ? `min-height: ${flipBoxItemFrontSize.Tablet}${flipBoxItemFrontSizeUnits.Tablet};` : ''}
						${flipBoxItemFrontBorderTypeGetTablet ? `border-width: ${flipBoxItemFrontBorderTypeGetTablet};` : ''}
						${flipBoxItemFrontBorderRadiusGetTablet ? `border-radius: ${flipBoxItemFrontBorderRadiusGetTablet};` : ''}
					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back {
						${flipBoxItemBackSize.Tablet ? `min-height: ${flipBoxItemBackSize.Tablet}${flipBoxItemBackSizeUnits.Tablet};` : ''}
						${flipBoxItemBackBorderTypeGetTablet ? `border-width: ${flipBoxItemBackBorderTypeGetTablet};` : ''}
						${flipBoxItemBackBorderRadiusGetTablet ? `border-radius: ${flipBoxItemBackBorderRadiusGetTablet};` : ''}
					}

				}

				@media only screen and (max-width: 767px) {
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front{
						${flipBoxItemFrontSize.Mobile ? `min-height: ${flipBoxItemFrontSize.Mobile}${flipBoxItemFrontSizeUnits.Mobile};` : ''}
						${flipBoxItemFrontBorderTypeGetMobile ? `border-width: ${flipBoxItemFrontBorderTypeGetMobile};` : ''}
						${flipBoxItemFrontBorderRadiusGetMobile ? `border-radius: ${flipBoxItemFrontBorderRadiusGetMobile};` : ''}
					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back{
						${flipBoxItemBackSize.Mobile ? `min-height: ${flipBoxItemBackSize.Mobile}${flipBoxItemBackSizeUnits.Mobile};` : ''}
						${flipBoxItemBackBorderTypeGetMobile ? `border-width: ${flipBoxItemBackBorderTypeGetMobile};` : ''}
						${flipBoxItemBackBorderRadiusGetMobile ? `border-radius: ${flipBoxItemBackBorderRadiusGetMobile};` : ''}
					}

				}

            `}
			</style>

			<InspectorControls key="controls">
				<div className="fb-inspector-control">
					<TabPanel
						className="fb-parent-tab-panel"
						activeClass="active-tab"
						tabs={[
							{
								name: "general",
								title: "General",
								className: "fb-tab general",
							},
							{
								name:
									"styles",
								title: "Style",
								className: "fb-tab styles",
							},
							{
								name: "advanced",
								title: "Advanced",
								className: "fb-tab advance",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === 'general' && (
									<>
									<PanelBody title={__("Flipbox Content", "frontis-blocks")} initialOpen={true}>

										<BaseControl
											label={__("Select Type", "frontis-block")}
											className="fb-setting-color-panel-wrapper"
										>
											<ButtonGroup className="fb-setting-color-panel-btn">
												{SELECT_TYPE.map((item, key) => (
													<Button
														key={key}
														onClick={() => setAttributes({flipBoxTypeSwitcher: item.value})}
														className={`fb-setting-color-panel-btn-switchr ${flipBoxTypeSwitcher === item.value ? 'active' : ''}`}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl>

										{flipBoxTypeSwitcher === 'front' && (
											<>
												<TextControl
													tagName={flipBoxFrontTitleHeadingTag}
													label={__('Title', 'frontis-blocks')}
													value={flipBoxFrontTitle}
													onChange={(value) => setAttributes({ flipBoxFrontTitle: value })}
													placeholder={__('Flip Box Front Title', 'frontis-block')}
												/>
												<BaseControl
													label={__("Heading Tag", "frontis-block")}
													className="fb-setting-tag-wrapper"
												>
													<ButtonGroup
														className="fb-setting-tag-inner-wrapper"
													>
														{HEADING.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({flipBoxFrontTitleHeadingTag: item.value})}
																className={`fb-setting-tag-single-btn ${flipBoxFrontTitleHeadingTag === item.value ? 'active' : ''}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>
												<TextareaControl
													label={__('Description', 'frontis-blocks')}
													value={flipBoxFrontContent}
													onChange={(value) => setAttributes({ flipBoxFrontContent: value })}
												/>
												<BaseControl className="fb-sub-heading-position">
													<SelectControl
														label={__("Front Icon: Media Type", "frontis-block")}
														value={mediaSwitcher}
														options={mediaType}
														onChange={(value) => setAttributes({mediaSwitcher: value})}
													/>
												</BaseControl>
												<div className='fb-image-upload-field-wrapper'>
													{mediaSwitcher === 'image' && attributes.flipBoxFrontIconMediaUrl && (
														<BaseControl>
															<MediaUploadCheck>
																<MediaUpload
																	onSelect={(media) => {
																		setAttributes({
																			flipBoxFrontIconMediaID: media['id'],
																			flipBoxFrontIconMediaUrl: media['url'],
																			flipBoxFrontIconMediaWidth: media['width'],
																			flipBoxFrontIconMediaHeight: media['height']
																		});
																	}}
																	type="image"
																	value={attributes.flipBoxFrontIconMediaID}
																	render={({open}) => {
																		return (
																			<Button
																				className={attributes.flipBoxFrontIconMediaID == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
																				onClick={open}
																			>
																				{attributes.flipBoxFrontIconMediaID == 0 && __('Select Icon Image', 'frontis-blocks')}
																				{attributes.flipBoxFrontIconMediaID != 0 &&
																					<ResponsiveWrapper
																						naturalWidth={attributes.flipBoxFrontIconMediaWidth}
																						naturalHeight={attributes.flipBoxFrontIconMediaHeight}>
																						<img
																							src={attributes.flipBoxFrontIconMediaUrl}/>
																					</ResponsiveWrapper>
																				}
																			</Button>
																		);
																	}}
																/>
															</MediaUploadCheck>
															{attributes.flipBoxFrontIconMediaID != 0 &&
																<HStack className='editor-post-featured-image__actions'>
																	<Button
																		className='editor-post-featured-image__action'
																		onClick={() => removeFlipBoxFrontIconMedia()}>{__('Remove', 'frontis-block')}</Button>
																	<MediaUploadCheck>
																		<MediaUpload
																			title={__('Replace image', 'frontis-block')}
																			value={attributes.flipBoxFrontIconMediaID}
																			onSelect={(media) => {
																				setAttributes({
																					flipBoxFrontIconMediaID: media['id'],
																					flipBoxFrontIconMediaUrl: media['url'],
																					flipBoxFrontIconMediaWidth: media['width'],
																					flipBoxFrontIconMediaHeight: media['height']
																				});
																			}}
																			type="image"
																			render={({open}) => (
																				<Button
																					className='editor-post-featured-image__action'
																					onClick={open}>{__('Replace', 'frontis-block')}</Button>
																			)}
																		/>
																	</MediaUploadCheck>
																</HStack>
															}
														</BaseControl>
													)}

													{mediaSwitcher === 'icon' && (
														<BaseControl>
															<FBIconPicker value={flipBoxFrontIcon} setIconHandler={flipBoxFrontIconHandler}/>
														</BaseControl>
													)}
												</div>

												<TextControl
													label={__("Button Text", "frontis-blocks")}
													value={flipBoxFrontButtonText}
													onChange={(value) => setAttributes({flipBoxFrontButtonText: value})}
													className="fb-advanced-button-text"
												/>
												<div className="fb-link-control-wrapper">
													<BaseControl
														label={__("Button URL", "frontis-blocks")}
													>
														<div className="fb-link-control-inner-wrapper">
															<TextControl
																value={flipBoxFrontButtonUrl}
																onChange={(value) => setAttributes({flipBoxFrontButtonUrl: value})}
																className="fb-advanced-button-url"
																placeholder={__('https://', 'frontis-blocks')}
															/>
															<Dropdown
																className="fb-advanced-button-icon-dropdown"
																contentClassName="fb-advanced-button-icon-dropdown-content"
																popoverProps={{placement: 'bottom-start'}}
																renderToggle={({isOpen, onToggle}) => (
																	<Button
																		variant="primary"
																		onClick={onToggle}
																		aria-expanded={isOpen}
																		aria-label={__("Toggle Typography Settings", "frontis-blocks")}
																		className="fb-advanced-button-icon-btn"
																	>
																		<Dashicon icon="color-picker"
																				  className="fb-advanced-button-icon"/>
																	</Button>
																)}
																renderContent={() => (
																	<div className="fb-advanced-button-icon-popup">
																		<BaseControl
																			className="fb-advanced-button-icon-popup-inner">
																			<ToggleControl
																				label={__("Open in new tab", "frontis-blocks")}
																				checked={flipBoxFrontButtonTargetUrl}
																				onChange={(value) => setAttributes({flipBoxFrontButtonTargetUrl: value})}
																			/>
																		</BaseControl>
																	</div>
																)}
															/>
														</div>
													</BaseControl>
												</div>
											</>
										)}
										{flipBoxTypeSwitcher === 'back' && (
											<>
												<TextControl
													tagName={flipBoxBackTitleHeadingTag}
													label={__('Title', 'frontis-blocks')}
													value={flipBoxBackTitle}
													onChange={(value) => setAttributes({ flipBoxBackTitle: value })}
													placeholder={__('Flip Box Back Title', 'frontis-block')}
												/>
												<BaseControl
													label={__("Heading Tag", "frontis-block")}
													className="fb-setting-tag-wrapper"
												>
													<ButtonGroup
														className="fb-setting-tag-inner-wrapper"
													>
														{HEADING.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({flipBoxBackTitleHeadingTag: item.value})}
																className={`fb-setting-tag-single-btn ${flipBoxBackTitleHeadingTag === item.value ? 'active' : ''}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
												</BaseControl>
												<TextareaControl
													label={__('Description', 'frontis-blocks')}
													value={flipBoxBackContent}
													onChange={(value) => setAttributes({ flipBoxBackContent: value })}
												/>
												<BaseControl className="fb-sub-heading-position">
													<SelectControl
														label={__("Back Icon: Media Type", "frontis-block")}
														value={flipBoxBackMediaSwitcher}
														options={mediaType}
														onChange={(value) => setAttributes({flipBoxBackMediaSwitcher: value})}
													/>
												</BaseControl>

												<div className='fb-image-upload-field-wrapper'>
													{flipBoxBackMediaSwitcher === 'image' && attributes.flipBoxBackIconMediaUrl && (
														<BaseControl>
															<MediaUploadCheck>
																<MediaUpload
																	onSelect={(media) => {
																		setAttributes({
																			flipBoxBackIconMediaID: media['id'],
																			flipBoxBackIconMediaUrl: media['url'],
																			flipBoxBackIconMediaWidth: media['width'],
																			flipBoxBackIconMediaHeight: media['height']
																		});
																	}}
																	type="image"
																	value={attributes.flipBoxBackIconMediaID}
																	render={({open}) => {
																		return (
																			<Button
																				className={attributes.flipBoxBackIconMediaID == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
																				onClick={open}
																			>
																				{attributes.flipBoxBackIconMediaID == 0 && __('Select Icon Image', 'frontis-blocks')}
																				{attributes.flipBoxBackIconMediaID != 0 &&
																					<ResponsiveWrapper
																						naturalWidth={attributes.flipBoxBackIconMediaWidth}
																						naturalHeight={attributes.flipBoxBackIconMediaHeight}>
																						<img
																							src={attributes.flipBoxBackIconMediaUrl}/>
																					</ResponsiveWrapper>
																				}
																			</Button>
																		);
																	}}
																/>
															</MediaUploadCheck>
															{attributes.flipBoxBackIconMediaID != 0 &&
																<HStack className='editor-post-featured-image__actions'>
																	<Button
																		className='editor-post-featured-image__action'
																		onClick={() => removeFlipBoxBackIconMedia()}>{__('Remove', 'frontis-block')}</Button>
																	<MediaUploadCheck>
																		<MediaUpload
																			title={__('Replace image', 'frontis-block')}
																			value={attributes.flipBoxBackIconMediaID}
																			onSelect={(media) => {
																				setAttributes({
																					flipBoxBackIconMediaID: media['id'],
																					flipBoxBackIconMediaUrl: media['url'],
																					flipBoxBackIconMediaWidth: media['width'],
																					flipBoxBackIconMediaHeight: media['height']
																				});
																			}}
																			type="image"
																			render={({open}) => (
																				<Button
																					className='editor-post-featured-image__action'
																					onClick={open}>{__('Replace', 'frontis-block')}</Button>
																			)}
																		/>
																	</MediaUploadCheck>
																</HStack>
															}
														</BaseControl>
													)}

													{flipBoxBackMediaSwitcher === 'icon' && (
														<BaseControl>
															<FBIconPicker value={flipBoxBackIcon} setIconHandler={flipBoxBackIconHandler}/>
														</BaseControl>
													)}
												</div>

												<TextControl
													label={__("Button Text", "frontis-blocks")}
													value={flipBoxBackButtonText}
													onChange={(value) => setAttributes({flipBoxBackButtonText: value})}
													className="fb-advanced-button-text"
												/>
												<div className="fb-link-control-wrapper">
													<BaseControl
														label={__("Button URL", "frontis-blocks")}
													>
														<div className="fb-link-control-inner-wrapper">
															<TextControl
																value={flipBoxBackButtonUrl}
																onChange={(value) => setAttributes({flipBoxBackButtonUrl: value})}
																className="fb-advanced-button-url"
																placeholder={__('https://', 'frontis-blocks')}
															/>
															<Dropdown
																className="fb-advanced-button-icon-dropdown"
																contentClassName="fb-advanced-button-icon-dropdown-content"
																popoverProps={{placement: 'bottom-start'}}
																renderToggle={({isOpen, onToggle}) => (
																	<Button
																		variant="primary"
																		onClick={onToggle}
																		aria-expanded={isOpen}
																		aria-label={__("Toggle Typography Settings", "frontis-blocks")}
																		className="fb-advanced-button-icon-btn"
																	>
																		<Dashicon icon="color-picker"
																				  className="fb-advanced-button-icon"/>
																	</Button>
																)}
																renderContent={() => (
																	<div className="fb-advanced-button-icon-popup">
																		<BaseControl
																			className="fb-advanced-button-icon-popup-inner">
																			<ToggleControl
																				label={__("Open in new tab", "frontis-blocks")}
																				checked={flipBoxBackButtonTargetUrl}
																				onChange={(value) => setAttributes({flipBoxBackButtonTargetUrl: value})}
																			/>
																		</BaseControl>
																	</div>
																)}
															/>
														</div>
													</BaseControl>
												</div>
											</>
										)}

									</PanelBody>
									</>
								)}

								{tab.name === "styles" && (
									<>
										<PanelBody
											title={__("Item", "frontis-blocks")}
											initialOpen={true}
										>
											<BaseControl
												label={__("Select Type", "frontis-block")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{SELECT_TYPE.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({flipBoxTypeSwitcher: item.value})}
															className={`fb-setting-color-panel-btn-switchr ${flipBoxTypeSwitcher === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>
											{flipBoxTypeSwitcher === 'front' && (
												<>
													<FlipBoxItemFrontControl
														attributes={attributes}
														setAttributes={setAttributes}
														clientId ={clientId}
													/>
												</>
											)}

											{flipBoxTypeSwitcher === 'back' && (
												<>
													<FlipBoxItemBackControl
														attributes={attributes}
														setAttributes={setAttributes}
														clientId ={clientId}
													/>
												</>
											)}
										</PanelBody>

										<PanelBody
											title={__("Title", "frontis-blocks")}
											initialOpen={true}
										>
											<BaseControl
												label={__("Select Type", "frontis-block")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{SELECT_TYPE.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({flipBoxTypeSwitcher: item.value})}
															className={`fb-setting-color-panel-btn-switchr ${flipBoxTypeSwitcher === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>
											{flipBoxTypeSwitcher === 'front' && (
												<>

													<FlipBoxFrontTitleControl
														attributes={attributes}
														setAttributes={setAttributes}
														clientId ={clientId}
													/>
												</>
											)}

											{flipBoxTypeSwitcher === 'back' && (
												<>
													<FlipBoxBackTitleControl
														attributes={attributes}
														setAttributes={setAttributes}
														clientId ={clientId}
													/>
												</>
											)}
										</PanelBody>

										<PanelBody
											title={__("Content", "frontis-blocks")}
											initialOpen={true}
										>
											<BaseControl
												label={__("Select Type", "frontis-block")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{SELECT_TYPE.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({flipBoxTypeSwitcher: item.value})}
															className={`fb-setting-color-panel-btn-switchr ${flipBoxTypeSwitcher === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>
											{flipBoxTypeSwitcher === 'front' && (
												<>
													<FlipBoxFrontContentControl
														attributes={attributes}
														setAttributes={setAttributes}
														clientId ={clientId}
													/>
												</>
											)}

											{flipBoxTypeSwitcher === 'back' && (
												<>
													<FlipBoxBackContentControl
														attributes={attributes}
														setAttributes={setAttributes}
														clientId ={clientId}
													/>
												</>
											)}
										</PanelBody>
										<PanelBody
											title={__("Button", "frontis-blocks")}
											initialOpen={true}
										>
											<BaseControl
												label={__("Select Type", "frontis-block")}
												className="fb-setting-color-panel-wrapper"
											>
												<ButtonGroup className="fb-setting-color-panel-btn">
													{SELECT_TYPE.map((item, key) => (
														<Button
															key={key}
															onClick={() => setAttributes({flipBoxTypeSwitcher: item.value})}
															className={`fb-setting-color-panel-btn-switchr ${flipBoxTypeSwitcher === item.value ? 'active' : ''}`}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>
											{flipBoxTypeSwitcher === 'front' && (
												<>
													<FlipBoxFrontButtonControl
														attributes={attributes}
														setAttributes={setAttributes}
														clientId ={clientId}
													/>
												</>
											)}

											{flipBoxTypeSwitcher === 'back' && (
												<>
													{/*<FlipBoxBackContentControl*/}
													{/*	attributes={attributes}*/}
													{/*	setAttributes={setAttributes}*/}
													{/*	clientId ={clientId}*/}
													{/*/>*/}
												</>
											)}
										</PanelBody>
									</>
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>

			<div {...blockProps} id={blockID}>
				<div className={`fb-flip-box-wrapper ${blockID}`}>
					<div className={`fb-flip-box-item ${flipBoxTypeSwitcher === 'back' ? 'active' : ''}`}>
						<div className="fb-flip-box-front">
							<div className="fb-flip-box-content">
								<div className="fb-flip-box-content-inner">
									<div className={`fb-flip-box-icon-wrapper`}>
										{mediaSwitcher === 'image' && attributes.flipBoxFrontIconMediaUrl && (
											<img src={attributes.flipBoxFrontIconMediaUrl}/>
										)}
										{mediaSwitcher === 'icon' && (
											<div className="fb-flip-box-icon">{renderSVG(flipBoxFrontIcon)}</div>
										)}
									</div>
									<RichText
										tagName={flipBoxFrontTitleHeadingTag}
										value={flipBoxFrontTitle}
										onChange={(value) => setAttributes({flipBoxFrontTitle: value})}
										placeholder={__('Flip Box Front Title', 'frontis-block')}
										className="fb-flip-box-title"
									/>
									<RichText
										tagName={'p'}
										value={flipBoxFrontContent}
										onChange={(value) => setAttributes({flipBoxFrontContent: value})}
										className="fb-flip-box-front-content"
									/>
									<a
										className="fb-flip-box-front-button"
										href={flipBoxFrontButtonUrl}
										target={flipBoxFrontButtonTargetUrl ? '_blank' : undefined}
										rel={flipBoxFrontButtonTargetUrl ? 'noopener noreferrer' : undefined}
										onClick={handleButtonClick}
									>
										<RichText
											tagName="span"
											value={flipBoxFrontButtonText}
											onChange={(value) => setAttributes({flipBoxFrontButtonText: value})}
											placeholder={__('Enter button text...', 'frontis-blocks')}
											className="fb-flip-box-front-button-text"
										/>
									</a>
								</div>
							</div>
						</div>
						<div className="fb-flip-box-back">
							<div className="fb-flip-box-content">
								<div className="fb-flip-box-content-inner">
									<div className={`fb-flip-box-icon-wrapper`}>
										{flipBoxBackMediaSwitcher === 'image' && attributes.flipBoxBackIconMediaUrl && (
											<img src={attributes.flipBoxBackIconMediaUrl}/>
										)}
										{flipBoxBackMediaSwitcher === 'icon' && (
											<div className="fb-flip-box-icon">{renderSVG(flipBoxBackIcon)}</div>
										)}
									</div>
									<RichText
										tagName={flipBoxBackTitleHeadingTag}
										value={flipBoxBackTitle}
										onChange={(value) => setAttributes({flipBoxBackTitle: value})}
										placeholder={__('Flip Box Back Title', 'frontis-block')}
										className="fb-flip-box-title"
									/>
									<RichText
										tagName={'p'}
										value={flipBoxBackContent}
										onChange={(value) => setAttributes({flipBoxBackContent: value})}
										className="fb-flip-box-back-content"
									/>
									<a
										className="fb-flip-box-back-button"
										href={flipBoxBackButtonUrl}
										target={flipBoxBackButtonTargetUrl ? '_blank' : undefined}
										rel={flipBoxBackButtonTargetUrl ? 'noopener noreferrer' : undefined}
										onClick={handleButtonClick}
									>
										<RichText
											tagName="span"
											value={flipBoxBackButtonText}
											onChange={(value) => setAttributes({flipBoxBackButtonText: value})}
											placeholder={__('Enter button text...', 'frontis-blocks')}
											className="fb-flip-box-back-button-text"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
