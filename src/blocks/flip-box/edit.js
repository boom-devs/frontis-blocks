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
import FlipBoxBackButtonControl from "@Blocks/flip-box/style-control/flip-box-back-button-control";
import FlipBoxFrontIconControl from "@Blocks/flip-box/style-control/flip-box-front-icon-control";
import FlipBoxBackIconControl from "@Blocks/flip-box/style-control/flip-box-back-icon-control";


export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		flipBoxTypeSwitcher,

		deviceType,
		flipBoxFrontTitle,
		flipBoxFrontTitleHeadingTag,
		flipBoxBackTitle,
		flipBoxBackTitleHeadingTag,



		/** Start Flip Box Front Icon Attribute */
		flipBoxFrontIconMediaSwitcher,
		flipBoxFrontIconMediaUrl,
		flipBoxFrontIcon,
		flipBoxFrontIconFontColor,

		flipBoxFrontIconSize,
		flipBoxFrontIconSizeUnits,
		flipBoxFrontIconFontColorSwitcher,

		flipBoxFrontIconFontHoverColor,
		flipBoxFrontIconBgFontColorSwitcher,
		flipBoxFrontIconBgFontColor,
		flipBoxFrontIconBgFontHoverColor,

		flipBoxFrontIconMarginUnits,
		flipBoxFrontIconMarginDesktop,
		flipBoxFrontIconMarginTablet,
		flipBoxFrontIconMarginMobile,
		flipBoxFrontIconMarginLink,

		flipBoxFrontIconPaddingUnits,
		flipBoxFrontIconPaddingDesktop,
		flipBoxFrontIconPaddingTablet,
		flipBoxFrontIconPaddingMobile,
		flipBoxFrontIconPaddingLink,


		flipBoxFrontIconBorderTypeUnits,
		flipBoxFrontIconBorderTypeDesktop,
		flipBoxFrontIconBorderTypeTablet,
		flipBoxFrontIconBorderTypeMobile,
		flipBoxFrontIconBorderTypeLink,
		flipBoxFrontIconBorder,
		flipBoxFrontIconBorderColorSwitcher,
		flipBoxFrontIconBorderColor,
		flipBoxFrontIconBorderHoverColor,
		flipBoxFrontIconBorderRadiusUnits,
		flipBoxFrontIconBorderRadiusDesktop,
		flipBoxFrontIconBorderRadiusTablet,
		flipBoxFrontIconBorderRadiusMobile,
		flipBoxFrontIconBorderRadiusLink,
		/** End Flip Box Front Icon Attribute */

		/** Start Flip Box Back Icon Attribute */
		flipBoxBackIconMediaSwitcher,
		flipBoxBackIconMediaUrl,
		flipBoxBackIcon,

		flipBoxBackIconSize,
		flipBoxBackIconSizeUnits,
		flipBoxBackIconFontColorSwitcher,
		flipBoxBackIconFontColor,
		flipBoxBackIconFontHoverColor,
		flipBoxBackIconBgFontColorSwitcher,
		flipBoxBackIconBgFontColor,
		flipBoxBackIconBgFontHoverColor,

		flipBoxBackIconMarginUnits,
		flipBoxBackIconMarginDesktop,
		flipBoxBackIconMarginTablet,
		flipBoxBackIconMarginMobile,
		flipBoxBackIconMarginLink,

		flipBoxBackIconPaddingUnits,
		flipBoxBackIconPaddingDesktop,
		flipBoxBackIconPaddingTablet,
		flipBoxBackIconPaddingMobile,
		flipBoxBackIconPaddingLink,


		flipBoxBackIconBorderTypeUnits,
		flipBoxBackIconBorderTypeDesktop,
		flipBoxBackIconBorderTypeTablet,
		flipBoxBackIconBorderTypeMobile,
		flipBoxBackIconBorderTypeLink,
		flipBoxBackIconBorder,
		flipBoxBackIconBorderColorSwitcher,
		flipBoxBackIconBorderColor,
		flipBoxBackIconBorderHoverColor,
		flipBoxBackIconBorderRadiusUnits,
		flipBoxBackIconBorderRadiusDesktop,
		flipBoxBackIconBorderRadiusTablet,
		flipBoxBackIconBorderRadiusMobile,
		flipBoxBackIconBorderRadiusLink,
		/** End Flip Box Back Icon Attribute */

		/** Start Flip Box Back Button Attribute */
		flipBoxBackButtonText,
		flipBoxBackButtonUrl,
		flipBoxBackButtonTargetUrl,

		flipBoxBackButtonFontColorSwitcher,
		flipBoxBackButtonFontColor,
		flipBoxBackButtonFontHoverColor,

		flipBoxBackButtonBgFontColorSwitcher,
		flipBoxBackButtonBgFontColor,
		flipBoxBackButtonBgFontHoverColor,

		flipBoxBackButtonMarginUnits,
		flipBoxBackButtonMarginDesktop,
		flipBoxBackButtonMarginTablet,
		flipBoxBackButtonMarginMobile,
		flipBoxBackButtonMarginLink,

		flipBoxBackButtonPaddingUnits,
		flipBoxBackButtonPaddingDesktop,
		flipBoxBackButtonPaddingTablet,
		flipBoxBackButtonPaddingMobile,
		flipBoxBackButtonPaddingLink,

		flipBoxBackButtonFontFamily,
		flipBoxBackButtonFontSize,
		flipBoxBackButtonFontSizeUnits,
		flipBoxBackButtonFontWeight,
		flipBoxBackButtonFontStyle,
		flipBoxBackButtonTextTransform,
		flipBoxBackButtonTextDecoration,
		flipBoxBackButtonLetterSpacing,
		flipBoxBackButtonLetterSpacingUnits,
		flipBoxBackButtonLineHeight,
		flipBoxBackButtonLineHeightUnits,

		flipBoxBackButtonBorderTypeUnits,
		flipBoxBackButtonBorderTypeDesktop,
		flipBoxBackButtonBorderTypeTablet,
		flipBoxBackButtonBorderTypeMobile,
		flipBoxBackButtonBorderTypeLink,
		flipBoxBackButtonBorder,
		flipBoxBackButtonBorderColorSwitcher,
		flipBoxBackButtonBorderColor,
		flipBoxBackButtonBorderHoverColor,
		flipBoxBackButtonBorderRadiusUnits,
		flipBoxBackButtonBorderRadiusDesktop,
		flipBoxBackButtonBorderRadiusTablet,
		flipBoxBackButtonBorderRadiusMobile,
		flipBoxBackButtonBorderRadiusLink,
		/** End Flip Box Back Button Attribute */


		/** Start Flip Box Item Front Attribute */
		flipBoxItemFrontBgFontColorSwitcher,
		flipBoxItemFrontBgFontColor,
		flipBoxItemFrontBgFontHoverColor,

		flipBoxItemFrontAlignment,

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

		flipBoxItemFrontPaddingUnits,
		flipBoxItemFrontPaddingDesktop,
		flipBoxItemFrontPaddingTablet,
		flipBoxItemFrontPaddingMobile,
		flipBoxItemFrontPaddingLink,
		/** End Flip Box Item Front Attribute */


		/** Start Flip Box Item Back Attribute */
		flipBoxItemBackBgFontColorSwitcher,
		flipBoxItemBackBgFontColor,
		flipBoxItemBackBgFontHoverColor,

		flipBoxItemBackAlignment,

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

		flipBoxItemBackPaddingUnits,
		flipBoxItemBackPaddingDesktop,
		flipBoxItemBackPaddingTablet,
		flipBoxItemBackPaddingMobile,
		flipBoxItemBackPaddingLink,
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

	} = attributes;

	// Prevent link navigation in the editor and focus on text
	const handleButtonClick = (event) => {
		event.preventDefault();
	};

	// Icon media remove handler
	const removeFlipBoxFrontIconMedia = () => {
		setAttributes({
			flipBoxFrontIconMediaId: '',
			flipBoxFrontIconMediaUrl: ''
		});
	}
	const removeFlipBoxBackIconMedia = () => {
		setAttributes({
			flipBoxBackIconMediaId: '',
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
		if (clientId && typeof clientId === 'string') {
			setAttributes({
				blockID: "flip-box-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const blockProps = useBlockProps();


	{/* Inspector Controls */}
	/** Start Flip Box Front Control */
	const flipBoxItemFrontBorderTypeGetDesktop = `${flipBoxItemFrontBorderTypeDesktop.top}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeDesktop.right}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeDesktop.bottom}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeDesktop.left}${flipBoxItemFrontBorderTypeUnits[deviceType]}`;
	const flipBoxItemFrontBorderTypeGetTablet = `${flipBoxItemFrontBorderTypeTablet.top}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeTablet.right}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeTablet.bottom}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeTablet.left}${flipBoxItemFrontBorderTypeUnits[deviceType]}`;
	const flipBoxItemFrontBorderTypeGetMobile = `${flipBoxItemFrontBorderTypeMobile.top}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeMobile.right}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeMobile.bottom}${flipBoxItemFrontBorderTypeUnits[deviceType]} ${flipBoxItemFrontBorderTypeMobile.left}${flipBoxItemFrontBorderTypeUnits[deviceType]}`;

	const flipBoxItemFrontBorderRadiusGetDesktop = `${flipBoxItemFrontBorderRadiusDesktop.top}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusDesktop.right}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusDesktop.bottom}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusDesktop.left}${flipBoxItemFrontBorderRadiusUnits[deviceType]}`;
	const flipBoxItemFrontBorderRadiusGetTablet = `${flipBoxItemFrontBorderRadiusTablet.top}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusTablet.right}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusTablet.bottom}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusTablet.left}${flipBoxItemFrontBorderRadiusUnits[deviceType]}`;
	const flipBoxItemFrontBorderRadiusGetMobile = `${flipBoxItemFrontBorderRadiusMobile.top}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusMobile.right}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusMobile.bottom}${flipBoxItemFrontBorderRadiusUnits[deviceType]} ${flipBoxItemFrontBorderRadiusMobile.left}${flipBoxItemFrontBorderRadiusUnits[deviceType]}`;

	const flipBoxItemFrontPaddingGetDesktop = `${flipBoxItemFrontPaddingDesktop.top}${flipBoxItemFrontPaddingUnits[deviceType]} ${flipBoxItemFrontPaddingDesktop.right}${flipBoxItemFrontPaddingUnits[deviceType]} ${flipBoxItemFrontPaddingDesktop.bottom}${flipBoxItemFrontPaddingUnits[deviceType]} ${flipBoxItemFrontPaddingDesktop.left}${flipBoxItemFrontPaddingUnits[deviceType]}`;
	const flipBoxItemFrontPaddingGetTablet = `${flipBoxItemFrontPaddingTablet.top}${flipBoxItemFrontPaddingUnits[deviceType]} ${flipBoxItemFrontPaddingTablet.right}${flipBoxItemFrontPaddingUnits[deviceType]} ${flipBoxItemFrontPaddingTablet.bottom}${flipBoxItemFrontPaddingUnits[deviceType]} ${flipBoxItemFrontPaddingTablet.left}${flipBoxItemFrontPaddingUnits[deviceType]}`;
	const flipBoxItemFrontPaddingGetMobile = `${flipBoxItemFrontPaddingMobile.top}${flipBoxItemFrontPaddingUnits[deviceType]} ${flipBoxItemFrontPaddingMobile.right}${flipBoxItemFrontPaddingUnits[deviceType]} ${flipBoxItemFrontPaddingMobile.bottom}${flipBoxItemFrontPaddingUnits[deviceType]} ${flipBoxItemFrontPaddingMobile.left}${flipBoxItemFrontPaddingUnits[deviceType]}`;

	/** Icon */
	const flipBoxFrontIconBorderTypeGetDesktop = `${flipBoxFrontIconBorderTypeDesktop.top}${flipBoxFrontIconBorderTypeUnits[deviceType]} ${flipBoxFrontIconBorderTypeDesktop.right}${flipBoxFrontIconBorderTypeUnits[deviceType]} ${flipBoxFrontIconBorderTypeDesktop.bottom}${flipBoxFrontIconBorderTypeUnits[deviceType]} ${flipBoxFrontIconBorderTypeDesktop.left}${flipBoxFrontIconBorderTypeUnits[deviceType]}`;
	const flipBoxFrontIconBorderTypeGetTablet = `${flipBoxFrontIconBorderTypeTablet.top}${flipBoxFrontIconBorderTypeUnits[deviceType]} ${flipBoxFrontIconBorderTypeTablet.right}${flipBoxFrontIconBorderTypeUnits[deviceType]} ${flipBoxFrontIconBorderTypeTablet.bottom}${flipBoxFrontIconBorderTypeUnits[deviceType]} ${flipBoxFrontIconBorderTypeTablet.left}${flipBoxFrontIconBorderTypeUnits[deviceType]}`;
	const flipBoxFrontIconBorderTypeGetMobile = `${flipBoxFrontIconBorderTypeMobile.top}${flipBoxFrontIconBorderTypeUnits[deviceType]} ${flipBoxFrontIconBorderTypeMobile.right}${flipBoxFrontIconBorderTypeUnits[deviceType]} ${flipBoxFrontIconBorderTypeMobile.bottom}${flipBoxFrontIconBorderTypeUnits[deviceType]} ${flipBoxFrontIconBorderTypeMobile.left}${flipBoxFrontIconBorderTypeUnits[deviceType]}`;

	const flipBoxFrontIconBorderRadiusGetDesktop = `${flipBoxFrontIconBorderRadiusDesktop.top}${flipBoxFrontIconBorderRadiusUnits[deviceType]} ${flipBoxFrontIconBorderRadiusDesktop.right}${flipBoxFrontIconBorderRadiusUnits[deviceType]} ${flipBoxFrontIconBorderRadiusDesktop.bottom}${flipBoxFrontIconBorderRadiusUnits[deviceType]} ${flipBoxFrontIconBorderRadiusDesktop.left}${flipBoxFrontIconBorderRadiusUnits[deviceType]}`;
	const flipBoxFrontIconBorderRadiusGetTablet = `${flipBoxFrontIconBorderRadiusTablet.top}${flipBoxFrontIconBorderRadiusUnits[deviceType]} ${flipBoxFrontIconBorderRadiusTablet.right}${flipBoxFrontIconBorderRadiusUnits[deviceType]} ${flipBoxFrontIconBorderRadiusTablet.bottom}${flipBoxFrontIconBorderRadiusUnits[deviceType]} ${flipBoxFrontIconBorderRadiusTablet.left}${flipBoxFrontIconBorderRadiusUnits[deviceType]}`;
	const flipBoxFrontIconBorderRadiusGetMobile = `${flipBoxFrontIconBorderRadiusMobile.top}${flipBoxFrontIconBorderRadiusUnits[deviceType]} ${flipBoxFrontIconBorderRadiusMobile.right}${flipBoxFrontIconBorderRadiusUnits[deviceType]} ${flipBoxFrontIconBorderRadiusMobile.bottom}${flipBoxFrontIconBorderRadiusUnits[deviceType]} ${flipBoxFrontIconBorderRadiusMobile.left}${flipBoxFrontIconBorderRadiusUnits[deviceType]}`;


	const flipBoxFrontIconPaddingGetDesktop = `${flipBoxFrontIconPaddingDesktop.top}${flipBoxFrontIconPaddingUnits[deviceType]} ${flipBoxFrontIconPaddingDesktop.right}${flipBoxFrontIconPaddingUnits[deviceType]} ${flipBoxFrontIconPaddingDesktop.bottom}${flipBoxFrontIconPaddingUnits[deviceType]} ${flipBoxFrontIconPaddingDesktop.left}${flipBoxFrontIconPaddingUnits[deviceType]}`;
	const flipBoxFrontIconPaddingGetTablet = `${flipBoxFrontIconPaddingTablet.top}${flipBoxFrontIconPaddingUnits[deviceType]} ${flipBoxFrontIconPaddingTablet.right}${flipBoxFrontIconPaddingUnits[deviceType]} ${flipBoxFrontIconPaddingTablet.bottom}${flipBoxFrontIconPaddingUnits[deviceType]} ${flipBoxFrontIconPaddingTablet.left}${flipBoxFrontIconPaddingUnits[deviceType]}`;
	const flipBoxFrontIconPaddingGetMobile = `${flipBoxFrontIconPaddingMobile.top}${flipBoxFrontIconPaddingUnits[deviceType]} ${flipBoxFrontIconPaddingMobile.right}${flipBoxFrontIconPaddingUnits[deviceType]} ${flipBoxFrontIconPaddingMobile.bottom}${flipBoxFrontIconPaddingUnits[deviceType]} ${flipBoxFrontIconPaddingMobile.left}${flipBoxFrontIconPaddingUnits[deviceType]}`;


	const flipBoxFrontIconMarginGetDesktop = `${flipBoxFrontIconMarginDesktop.top}${flipBoxFrontIconMarginUnits[deviceType]} ${flipBoxFrontIconMarginDesktop.right}${flipBoxFrontIconMarginUnits[deviceType]} ${flipBoxFrontIconMarginDesktop.bottom}${flipBoxFrontIconMarginUnits[deviceType]} ${flipBoxFrontIconMarginDesktop.left}${flipBoxFrontIconMarginUnits[deviceType]}`;
	const flipBoxFrontIconMarginGetTablet = `${flipBoxFrontIconMarginTablet.top}${flipBoxFrontIconMarginUnits[deviceType]} ${flipBoxFrontIconMarginTablet.right}${flipBoxFrontIconMarginUnits[deviceType]} ${flipBoxFrontIconMarginTablet.bottom}${flipBoxFrontIconMarginUnits[deviceType]} ${flipBoxFrontIconMarginTablet.left}${flipBoxFrontIconMarginUnits[deviceType]}`;
	const flipBoxFrontIconMarginGetMobile = `${flipBoxFrontIconMarginMobile.top}${flipBoxFrontIconMarginUnits[deviceType]} ${flipBoxFrontIconMarginMobile.right}${flipBoxFrontIconMarginUnits[deviceType]} ${flipBoxFrontIconMarginMobile.bottom}${flipBoxFrontIconMarginUnits[deviceType]} ${flipBoxFrontIconMarginMobile.left}${flipBoxFrontIconMarginUnits[deviceType]}`;

	/** Title */
	const flipBoxFrontTitleMarginGetDesktop = `${flipBoxFrontTitleMarginDesktop.top}${flipBoxFrontTitleMarginUnits[deviceType]} ${flipBoxFrontTitleMarginDesktop.right}${flipBoxFrontTitleMarginUnits[deviceType]} ${flipBoxFrontTitleMarginDesktop.bottom}${flipBoxFrontTitleMarginUnits[deviceType]} ${flipBoxFrontTitleMarginDesktop.left}${flipBoxFrontTitleMarginUnits[deviceType]}`;
	const flipBoxFrontTitleMarginGetTablet = `${flipBoxFrontTitleMarginTablet.top}${flipBoxFrontTitleMarginUnits[deviceType]} ${flipBoxFrontTitleMarginTablet.right}${flipBoxFrontTitleMarginUnits[deviceType]} ${flipBoxFrontTitleMarginTablet.bottom}${flipBoxFrontTitleMarginUnits[deviceType]} ${flipBoxFrontTitleMarginTablet.left}${flipBoxFrontTitleMarginUnits[deviceType]}`;
	const flipBoxFrontTitleMarginGetMobile = `${flipBoxFrontTitleMarginMobile.top}${flipBoxFrontTitleMarginUnits[deviceType]} ${flipBoxFrontTitleMarginMobile.right}${flipBoxFrontTitleMarginUnits[deviceType]} ${flipBoxFrontTitleMarginMobile.bottom}${flipBoxFrontTitleMarginUnits[deviceType]} ${flipBoxFrontTitleMarginMobile.left}${flipBoxFrontTitleMarginUnits[deviceType]}`;

	/** Content */
	const flipBoxFrontContentMarginGetDesktop = `${flipBoxFrontContentMarginDesktop.top}${flipBoxFrontContentMarginUnits[deviceType]} ${flipBoxFrontContentMarginDesktop.right}${flipBoxFrontContentMarginUnits[deviceType]} ${flipBoxFrontContentMarginDesktop.bottom}${flipBoxFrontContentMarginUnits[deviceType]} ${flipBoxFrontContentMarginDesktop.left}${flipBoxFrontContentMarginUnits[deviceType]}`;
	const flipBoxFrontContentMarginGetTablet = `${flipBoxFrontContentMarginTablet.top}${flipBoxFrontContentMarginUnits[deviceType]} ${flipBoxFrontContentMarginTablet.right}${flipBoxFrontContentMarginUnits[deviceType]} ${flipBoxFrontContentMarginTablet.bottom}${flipBoxFrontContentMarginUnits[deviceType]} ${flipBoxFrontContentMarginTablet.left}${flipBoxFrontContentMarginUnits[deviceType]}`;
	const flipBoxFrontContentMarginGetMobile = `${flipBoxFrontContentMarginMobile.top}${flipBoxFrontContentMarginUnits[deviceType]} ${flipBoxFrontContentMarginMobile.right}${flipBoxFrontContentMarginUnits[deviceType]} ${flipBoxFrontContentMarginMobile.bottom}${flipBoxFrontContentMarginUnits[deviceType]} ${flipBoxFrontContentMarginMobile.left}${flipBoxFrontContentMarginUnits[deviceType]}`;

	/** End Flip Box Front Control */

	/** Start Flip Box Back Control */
	const flipBoxItemBackBorderTypeGetDesktop = `${flipBoxItemBackBorderTypeDesktop.top}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeDesktop.right}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeDesktop.bottom}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeDesktop.left}${flipBoxItemBackBorderTypeUnits[deviceType]}`;
	const flipBoxItemBackBorderTypeGetTablet = `${flipBoxItemBackBorderTypeTablet.top}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeTablet.right}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeTablet.bottom}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeTablet.left}${flipBoxItemBackBorderTypeUnits[deviceType]}`;
	const flipBoxItemBackBorderTypeGetMobile = `${flipBoxItemBackBorderTypeMobile.top}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeMobile.right}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeMobile.bottom}${flipBoxItemBackBorderTypeUnits[deviceType]} ${flipBoxItemBackBorderTypeMobile.left}${flipBoxItemBackBorderTypeUnits[deviceType]}`;

	const flipBoxItemBackBorderRadiusGetDesktop = `${flipBoxItemBackBorderRadiusDesktop.top}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusDesktop.right}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusDesktop.bottom}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusDesktop.left}${flipBoxItemBackBorderRadiusUnits[deviceType]}`;
	const flipBoxItemBackBorderRadiusGetTablet = `${flipBoxItemBackBorderRadiusTablet.top}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusTablet.right}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusTablet.bottom}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusTablet.left}${flipBoxItemBackBorderRadiusUnits[deviceType]}`;
	const flipBoxItemBackBorderRadiusGetMobile = `${flipBoxItemBackBorderRadiusMobile.top}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusMobile.right}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusMobile.bottom}${flipBoxItemBackBorderRadiusUnits[deviceType]} ${flipBoxItemBackBorderRadiusMobile.left}${flipBoxItemBackBorderRadiusUnits[deviceType]}`;

	const flipBoxItemBackPaddingGetDesktop = `${flipBoxItemBackPaddingDesktop.top}${flipBoxItemBackPaddingUnits[deviceType]} ${flipBoxItemBackPaddingDesktop.right}${flipBoxItemBackPaddingUnits[deviceType]} ${flipBoxItemBackPaddingDesktop.bottom}${flipBoxItemBackPaddingUnits[deviceType]} ${flipBoxItemBackPaddingDesktop.left}${flipBoxItemBackPaddingUnits[deviceType]}`;
	const flipBoxItemBackPaddingGetTablet = `${flipBoxItemBackPaddingTablet.top}${flipBoxItemBackPaddingUnits[deviceType]} ${flipBoxItemBackPaddingTablet.right}${flipBoxItemBackPaddingUnits[deviceType]} ${flipBoxItemBackPaddingTablet.bottom}${flipBoxItemBackPaddingUnits[deviceType]} ${flipBoxItemBackPaddingTablet.left}${flipBoxItemBackPaddingUnits[deviceType]}`;
	const flipBoxItemBackPaddingGetMobile = `${flipBoxItemBackPaddingMobile.top}${flipBoxItemBackPaddingUnits[deviceType]} ${flipBoxItemBackPaddingMobile.right}${flipBoxItemBackPaddingUnits[deviceType]} ${flipBoxItemBackPaddingMobile.bottom}${flipBoxItemBackPaddingUnits[deviceType]} ${flipBoxItemBackPaddingMobile.left}${flipBoxItemBackPaddingUnits[deviceType]}`;


	/** Icon */
	const flipBoxBackIconBorderTypeGetDesktop = `${flipBoxBackIconBorderTypeDesktop.top}${flipBoxBackIconBorderTypeUnits[deviceType]} ${flipBoxBackIconBorderTypeDesktop.right}${flipBoxBackIconBorderTypeUnits[deviceType]} ${flipBoxBackIconBorderTypeDesktop.bottom}${flipBoxBackIconBorderTypeUnits[deviceType]} ${flipBoxBackIconBorderTypeDesktop.left}${flipBoxBackIconBorderTypeUnits[deviceType]}`;
	const flipBoxBackIconBorderTypeGetTablet = `${flipBoxBackIconBorderTypeTablet.top}${flipBoxBackIconBorderTypeUnits[deviceType]} ${flipBoxBackIconBorderTypeTablet.right}${flipBoxBackIconBorderTypeUnits[deviceType]} ${flipBoxBackIconBorderTypeTablet.bottom}${flipBoxBackIconBorderTypeUnits[deviceType]} ${flipBoxBackIconBorderTypeTablet.left}${flipBoxBackIconBorderTypeUnits[deviceType]}`;
	const flipBoxBackIconBorderTypeGetMobile = `${flipBoxBackIconBorderTypeMobile.top}${flipBoxBackIconBorderTypeUnits[deviceType]} ${flipBoxBackIconBorderTypeMobile.right}${flipBoxBackIconBorderTypeUnits[deviceType]} ${flipBoxBackIconBorderTypeMobile.bottom}${flipBoxBackIconBorderTypeUnits[deviceType]} ${flipBoxBackIconBorderTypeMobile.left}${flipBoxBackIconBorderTypeUnits[deviceType]}`;

	const flipBoxBackIconBorderRadiusGetDesktop = `${flipBoxBackIconBorderRadiusDesktop.top}${flipBoxBackIconBorderRadiusUnits[deviceType]} ${flipBoxBackIconBorderRadiusDesktop.right}${flipBoxBackIconBorderRadiusUnits[deviceType]} ${flipBoxBackIconBorderRadiusDesktop.bottom}${flipBoxBackIconBorderRadiusUnits[deviceType]} ${flipBoxBackIconBorderRadiusDesktop.left}${flipBoxBackIconBorderRadiusUnits[deviceType]}`;
	const flipBoxBackIconBorderRadiusGetTablet = `${flipBoxBackIconBorderRadiusTablet.top}${flipBoxBackIconBorderRadiusUnits[deviceType]} ${flipBoxBackIconBorderRadiusTablet.right}${flipBoxBackIconBorderRadiusUnits[deviceType]} ${flipBoxBackIconBorderRadiusTablet.bottom}${flipBoxBackIconBorderRadiusUnits[deviceType]} ${flipBoxBackIconBorderRadiusTablet.left}${flipBoxBackIconBorderRadiusUnits[deviceType]}`;
	const flipBoxBackIconBorderRadiusGetMobile = `${flipBoxBackIconBorderRadiusMobile.top}${flipBoxBackIconBorderRadiusUnits[deviceType]} ${flipBoxBackIconBorderRadiusMobile.right}${flipBoxBackIconBorderRadiusUnits[deviceType]} ${flipBoxBackIconBorderRadiusMobile.bottom}${flipBoxBackIconBorderRadiusUnits[deviceType]} ${flipBoxBackIconBorderRadiusMobile.left}${flipBoxBackIconBorderRadiusUnits[deviceType]}`;


	const flipBoxBackIconPaddingGetDesktop = `${flipBoxBackIconPaddingDesktop.top}${flipBoxBackIconPaddingUnits[deviceType]} ${flipBoxBackIconPaddingDesktop.right}${flipBoxBackIconPaddingUnits[deviceType]} ${flipBoxBackIconPaddingDesktop.bottom}${flipBoxBackIconPaddingUnits[deviceType]} ${flipBoxBackIconPaddingDesktop.left}${flipBoxBackIconPaddingUnits[deviceType]}`;
	const flipBoxBackIconPaddingGetTablet = `${flipBoxBackIconPaddingTablet.top}${flipBoxBackIconPaddingUnits[deviceType]} ${flipBoxBackIconPaddingTablet.right}${flipBoxBackIconPaddingUnits[deviceType]} ${flipBoxBackIconPaddingTablet.bottom}${flipBoxBackIconPaddingUnits[deviceType]} ${flipBoxBackIconPaddingTablet.left}${flipBoxBackIconPaddingUnits[deviceType]}`;
	const flipBoxBackIconPaddingGetMobile = `${flipBoxBackIconPaddingMobile.top}${flipBoxBackIconPaddingUnits[deviceType]} ${flipBoxBackIconPaddingMobile.right}${flipBoxBackIconPaddingUnits[deviceType]} ${flipBoxBackIconPaddingMobile.bottom}${flipBoxBackIconPaddingUnits[deviceType]} ${flipBoxBackIconPaddingMobile.left}${flipBoxBackIconPaddingUnits[deviceType]}`;


	const flipBoxBackIconMarginGetDesktop = `${flipBoxBackIconMarginDesktop.top}${flipBoxBackIconMarginUnits[deviceType]} ${flipBoxBackIconMarginDesktop.right}${flipBoxBackIconMarginUnits[deviceType]} ${flipBoxBackIconMarginDesktop.bottom}${flipBoxBackIconMarginUnits[deviceType]} ${flipBoxBackIconMarginDesktop.left}${flipBoxBackIconMarginUnits[deviceType]}`;
	const flipBoxBackIconMarginGetTablet = `${flipBoxBackIconMarginTablet.top}${flipBoxBackIconMarginUnits[deviceType]} ${flipBoxBackIconMarginTablet.right}${flipBoxBackIconMarginUnits[deviceType]} ${flipBoxBackIconMarginTablet.bottom}${flipBoxBackIconMarginUnits[deviceType]} ${flipBoxBackIconMarginTablet.left}${flipBoxBackIconMarginUnits[deviceType]}`;
	const flipBoxBackIconMarginGetMobile = `${flipBoxBackIconMarginMobile.top}${flipBoxBackIconMarginUnits[deviceType]} ${flipBoxBackIconMarginMobile.right}${flipBoxBackIconMarginUnits[deviceType]} ${flipBoxBackIconMarginMobile.bottom}${flipBoxBackIconMarginUnits[deviceType]} ${flipBoxBackIconMarginMobile.left}${flipBoxBackIconMarginUnits[deviceType]}`;



	/** Title */
	const flipBoxBackTitleMarginGetDesktop = `${flipBoxBackTitleMarginDesktop.top}${flipBoxBackTitleMarginUnits[deviceType]} ${flipBoxBackTitleMarginDesktop.right}${flipBoxBackTitleMarginUnits[deviceType]} ${flipBoxBackTitleMarginDesktop.bottom}${flipBoxBackTitleMarginUnits[deviceType]} ${flipBoxBackTitleMarginDesktop.left}${flipBoxBackTitleMarginUnits[deviceType]}`;
	const flipBoxBackTitleMarginGetTablet = `${flipBoxBackTitleMarginTablet.top}${flipBoxBackTitleMarginUnits[deviceType]} ${flipBoxBackTitleMarginTablet.right}${flipBoxBackTitleMarginUnits[deviceType]} ${flipBoxBackTitleMarginTablet.bottom}${flipBoxBackTitleMarginUnits[deviceType]} ${flipBoxBackTitleMarginTablet.left}${flipBoxBackTitleMarginUnits[deviceType]}`;
	const flipBoxBackTitleMarginGetMobile = `${flipBoxBackTitleMarginMobile.top}${flipBoxBackTitleMarginUnits[deviceType]} ${flipBoxBackTitleMarginMobile.right}${flipBoxBackTitleMarginUnits[deviceType]} ${flipBoxBackTitleMarginMobile.bottom}${flipBoxBackTitleMarginUnits[deviceType]} ${flipBoxBackTitleMarginMobile.left}${flipBoxBackTitleMarginUnits[deviceType]}`;

	/** Content */
	const flipBoxBackContentMarginGetDesktop = `${flipBoxBackContentMarginDesktop.top}${flipBoxBackContentMarginUnits[deviceType]} ${flipBoxBackContentMarginDesktop.right}${flipBoxBackContentMarginUnits[deviceType]} ${flipBoxBackContentMarginDesktop.bottom}${flipBoxBackContentMarginUnits[deviceType]} ${flipBoxBackContentMarginDesktop.left}${flipBoxBackContentMarginUnits[deviceType]}`;
	const flipBoxBackContentMarginGetTablet = `${flipBoxBackContentMarginTablet.top}${flipBoxBackContentMarginUnits[deviceType]} ${flipBoxBackContentMarginTablet.right}${flipBoxBackContentMarginUnits[deviceType]} ${flipBoxBackContentMarginTablet.bottom}${flipBoxBackContentMarginUnits[deviceType]} ${flipBoxBackContentMarginTablet.left}${flipBoxBackContentMarginUnits[deviceType]}`;
	const flipBoxBackContentMarginGetMobile = `${flipBoxBackContentMarginMobile.top}${flipBoxBackContentMarginUnits[deviceType]} ${flipBoxBackContentMarginMobile.right}${flipBoxBackContentMarginUnits[deviceType]} ${flipBoxBackContentMarginMobile.bottom}${flipBoxBackContentMarginUnits[deviceType]} ${flipBoxBackContentMarginMobile.left}${flipBoxBackContentMarginUnits[deviceType]}`;

	/** Button */
	const flipBoxBackButtonBorderTypeGetDesktop = `${flipBoxBackButtonBorderTypeDesktop.top}${flipBoxBackButtonBorderTypeUnits[deviceType]} ${flipBoxBackButtonBorderTypeDesktop.right}${flipBoxBackButtonBorderTypeUnits[deviceType]} ${flipBoxBackButtonBorderTypeDesktop.bottom}${flipBoxBackButtonBorderTypeUnits[deviceType]} ${flipBoxBackButtonBorderTypeDesktop.left}${flipBoxBackButtonBorderTypeUnits[deviceType]}`;
	const flipBoxBackButtonBorderTypeGetTablet = `${flipBoxBackButtonBorderTypeTablet.top}${flipBoxBackButtonBorderTypeUnits[deviceType]} ${flipBoxBackButtonBorderTypeTablet.right}${flipBoxBackButtonBorderTypeUnits[deviceType]} ${flipBoxBackButtonBorderTypeTablet.bottom}${flipBoxBackButtonBorderTypeUnits[deviceType]} ${flipBoxBackButtonBorderTypeTablet.left}${flipBoxBackButtonBorderTypeUnits[deviceType]}`;
	const flipBoxBackButtonBorderTypeGetMobile = `${flipBoxBackButtonBorderTypeMobile.top}${flipBoxBackButtonBorderTypeUnits[deviceType]} ${flipBoxBackButtonBorderTypeMobile.right}${flipBoxBackButtonBorderTypeUnits[deviceType]} ${flipBoxBackButtonBorderTypeMobile.bottom}${flipBoxBackButtonBorderTypeUnits[deviceType]} ${flipBoxBackButtonBorderTypeMobile.left}${flipBoxBackButtonBorderTypeUnits[deviceType]}`;

	const flipBoxBackButtonBorderRadiusGetDesktop = `${flipBoxBackButtonBorderRadiusDesktop.top}${flipBoxBackButtonBorderRadiusUnits[deviceType]} ${flipBoxBackButtonBorderRadiusDesktop.right}${flipBoxBackButtonBorderRadiusUnits[deviceType]} ${flipBoxBackButtonBorderRadiusDesktop.bottom}${flipBoxBackButtonBorderRadiusUnits[deviceType]} ${flipBoxBackButtonBorderRadiusDesktop.left}${flipBoxBackButtonBorderRadiusUnits[deviceType]}`;
	const flipBoxBackButtonBorderRadiusGetTablet = `${flipBoxBackButtonBorderRadiusTablet.top}${flipBoxBackButtonBorderRadiusUnits[deviceType]} ${flipBoxBackButtonBorderRadiusTablet.right}${flipBoxBackButtonBorderRadiusUnits[deviceType]} ${flipBoxBackButtonBorderRadiusTablet.bottom}${flipBoxBackButtonBorderRadiusUnits[deviceType]} ${flipBoxBackButtonBorderRadiusTablet.left}${flipBoxBackButtonBorderRadiusUnits[deviceType]}`;
	const flipBoxBackButtonBorderRadiusGetMobile = `${flipBoxBackButtonBorderRadiusMobile.top}${flipBoxBackButtonBorderRadiusUnits[deviceType]} ${flipBoxBackButtonBorderRadiusMobile.right}${flipBoxBackButtonBorderRadiusUnits[deviceType]} ${flipBoxBackButtonBorderRadiusMobile.bottom}${flipBoxBackButtonBorderRadiusUnits[deviceType]} ${flipBoxBackButtonBorderRadiusMobile.left}${flipBoxBackButtonBorderRadiusUnits[deviceType]}`;


	const flipBoxBackButtonPaddingGetDesktop = `${flipBoxBackButtonPaddingDesktop.top}${flipBoxBackButtonPaddingUnits[deviceType]} ${flipBoxBackButtonPaddingDesktop.right}${flipBoxBackButtonPaddingUnits[deviceType]} ${flipBoxBackButtonPaddingDesktop.bottom}${flipBoxBackButtonPaddingUnits[deviceType]} ${flipBoxBackButtonPaddingDesktop.left}${flipBoxBackButtonPaddingUnits[deviceType]}`;
	const flipBoxBackButtonPaddingGetTablet = `${flipBoxBackButtonPaddingTablet.top}${flipBoxBackButtonPaddingUnits[deviceType]} ${flipBoxBackButtonPaddingTablet.right}${flipBoxBackButtonPaddingUnits[deviceType]} ${flipBoxBackButtonPaddingTablet.bottom}${flipBoxBackButtonPaddingUnits[deviceType]} ${flipBoxBackButtonPaddingTablet.left}${flipBoxBackButtonPaddingUnits[deviceType]}`;
	const flipBoxBackButtonPaddingGetMobile = `${flipBoxBackButtonPaddingMobile.top}${flipBoxBackButtonPaddingUnits[deviceType]} ${flipBoxBackButtonPaddingMobile.right}${flipBoxBackButtonPaddingUnits[deviceType]} ${flipBoxBackButtonPaddingMobile.bottom}${flipBoxBackButtonPaddingUnits[deviceType]} ${flipBoxBackButtonPaddingMobile.left}${flipBoxBackButtonPaddingUnits[deviceType]}`;

	const flipBoxBackButtonMarginGetDesktop = `${flipBoxBackButtonMarginDesktop.top}${flipBoxBackButtonMarginUnits[deviceType]} ${flipBoxBackButtonMarginDesktop.right}${flipBoxBackButtonMarginUnits[deviceType]} ${flipBoxBackButtonMarginDesktop.bottom}${flipBoxBackButtonMarginUnits[deviceType]} ${flipBoxBackButtonMarginDesktop.left}${flipBoxBackButtonMarginUnits[deviceType]}`;
	const flipBoxBackButtonMarginGetTablet = `${flipBoxBackButtonMarginTablet.top}${flipBoxBackButtonMarginUnits[deviceType]} ${flipBoxBackButtonMarginTablet.right}${flipBoxBackButtonMarginUnits[deviceType]} ${flipBoxBackButtonMarginTablet.bottom}${flipBoxBackButtonMarginUnits[deviceType]} ${flipBoxBackButtonMarginTablet.left}${flipBoxBackButtonMarginUnits[deviceType]}`;
	const flipBoxBackButtonMarginGetMobile = `${flipBoxBackButtonMarginMobile.top}${flipBoxBackButtonMarginUnits[deviceType]} ${flipBoxBackButtonMarginMobile.right}${flipBoxBackButtonMarginUnits[deviceType]} ${flipBoxBackButtonMarginMobile.bottom}${flipBoxBackButtonMarginUnits[deviceType]} ${flipBoxBackButtonMarginMobile.left}${flipBoxBackButtonMarginUnits[deviceType]}`;

	/** End Flip Box Back Control */


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
					${flipBoxItemFrontBgFontColor ? `background: ${flipBoxItemFrontBgFontColor};` : ''}
				}
				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-content-inner {
					${flipBoxItemFrontPaddingGetDesktop ? `padding: ${flipBoxItemFrontPaddingGetDesktop};` : ''}
				}
				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-content-inner {
					${flipBoxItemBackPaddingGetDesktop ? `padding: ${flipBoxItemBackPaddingGetDesktop};` : ''}
				}
				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-icon svg,
				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-icon-img {
					display: inline-block;
				  	${flipBoxFrontIconSize.Desktop ? `width: ${flipBoxFrontIconSize.Desktop}${flipBoxFrontIconSizeUnits.Desktop};` : ''}
				  	${flipBoxFrontIconSize.Desktop ? `height: ${flipBoxFrontIconSize.Desktop}${flipBoxFrontIconSizeUnits.Desktop};` : ''}
				  	${flipBoxFrontIconBorder ? `border: ${flipBoxFrontIconBorder};` : ''}
					${flipBoxFrontIconBorderTypeGetDesktop ? `border-width: ${flipBoxFrontIconBorderTypeGetDesktop};` : ''}
					${flipBoxFrontIconBorderRadiusGetDesktop ? `border-radius: ${flipBoxFrontIconBorderRadiusGetDesktop};` : ''}
					${flipBoxFrontIconBorderColor ? `border-color: ${flipBoxFrontIconBorderColor};` : ''}
				  	${flipBoxFrontIconFontColor ? `fill: ${flipBoxFrontIconFontColor};` : ''}
				  	${flipBoxFrontIconBgFontColor ? `background: ${flipBoxFrontIconBgFontColor};` : ''}
				  	${flipBoxFrontIconPaddingGetDesktop ? `padding: ${flipBoxFrontIconPaddingGetDesktop};` : ''}
				  	${flipBoxFrontIconMarginGetDesktop ? `margin: ${flipBoxFrontIconMarginGetDesktop};` : ''}
				}

				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-icon svg,
				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-icon-img {
				  	${flipBoxBackIconSize.Desktop ? `width: ${flipBoxBackIconSize.Desktop}${flipBoxBackIconSizeUnits.Desktop};` : ''}
				  	${flipBoxBackIconSize.Desktop ? `height: ${flipBoxBackIconSize.Desktop}${flipBoxBackIconSizeUnits.Desktop};` : ''}
				  	${flipBoxBackIconBorder ? `border: ${flipBoxBackIconBorder};` : ''}
					${flipBoxBackIconBorderTypeGetDesktop ? `border-width: ${flipBoxBackIconBorderTypeGetDesktop};` : ''}
					${flipBoxBackIconBorderRadiusGetDesktop ? `border-radius: ${flipBoxBackIconBorderRadiusGetDesktop};` : ''}
					${flipBoxBackIconBorderColor ? `border-color: ${flipBoxBackIconBorderColor};` : ''}
				  	${flipBoxBackIconFontColor ? `fill: ${flipBoxBackIconFontColor};` : ''}
				  	${flipBoxBackIconBgFontColor ? `background: ${flipBoxBackIconBgFontColor};` : ''}
				  	${flipBoxBackIconPaddingGetDesktop ? `padding: ${flipBoxBackIconPaddingGetDesktop};` : ''}
				  	${flipBoxBackIconMarginGetDesktop ? `margin: ${flipBoxBackIconMarginGetDesktop};` : ''}
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
				  ${flipBoxFrontTitleMarginGetDesktop ? `margin: ${flipBoxFrontTitleMarginGetDesktop};` : ''}
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
				  ${flipBoxFrontContentMarginGetDesktop ? `margin: ${flipBoxFrontContentMarginGetDesktop};` : ''}
				}
				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-back-button {
				  display: inline-block;
				  ${flipBoxBackButtonFontColor ? `color: ${flipBoxBackButtonFontColor};` : ''}
				  ${flipBoxBackButtonBgFontColor ? `background: ${flipBoxBackButtonBgFontColor};` : ''}
				  ${flipBoxBackButtonFontFamily ? `font-family: ${flipBoxBackButtonFontFamily};` : ''}
				  ${flipBoxBackButtonFontWeight ? `font-weight: ${flipBoxBackButtonFontWeight};` : ''}
				  ${flipBoxBackButtonFontStyle ? `font-style: ${flipBoxBackButtonFontStyle};` : ''}
				  ${flipBoxBackButtonTextTransform ? `text-transform: ${flipBoxBackButtonTextTransform};` : ''}
				  ${flipBoxBackButtonTextDecoration ? `text-decoration: ${flipBoxBackButtonTextDecoration};` : ''}
				  ${flipBoxBackButtonFontSize.Desktop ? `font-size: ${flipBoxBackButtonFontSize.Desktop}${flipBoxBackButtonFontSizeUnits.Desktop};` : ''}
				  ${flipBoxBackButtonLetterSpacing.Desktop ? `letter-spacing: ${flipBoxBackButtonLetterSpacing.Desktop}${flipBoxBackButtonLetterSpacingUnits.Desktop};` : ''}
				  ${flipBoxBackButtonLineHeight.Desktop ? `line-height: ${flipBoxBackButtonLineHeight.Desktop}${flipBoxBackButtonLineHeightUnits.Desktop};` : ''}
				  ${flipBoxBackButtonBorder ? `border: ${flipBoxBackButtonBorder};` : ''}
				  ${flipBoxBackButtonBorderTypeGetDesktop ? `border-width: ${flipBoxBackButtonBorderTypeGetDesktop};` : ''}
				  ${flipBoxBackButtonBorderRadiusGetDesktop ? `border-radius: ${flipBoxBackButtonBorderRadiusGetDesktop};` : ''}
				  ${flipBoxBackButtonBorderColor ? `border-color: ${flipBoxBackButtonBorderColor};` : ''}
				  ${flipBoxBackButtonPaddingGetDesktop ? `padding: ${flipBoxBackButtonPaddingGetDesktop};` : ''}
				  ${flipBoxBackButtonMarginGetDesktop ? `margin: ${flipBoxBackButtonMarginGetDesktop};` : ''}

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
				  ${flipBoxBackTitleMarginGetDesktop ? `margin: ${flipBoxBackTitleMarginGetDesktop};` : ''}
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
				  ${flipBoxBackContentMarginGetDesktop ? `margin: ${flipBoxBackContentMarginGetDesktop};` : ''}
				}
				.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back {
					${flipBoxItemBackSize.Desktop ? `min-height: ${flipBoxItemBackSize.Desktop}${flipBoxItemBackSizeUnits.Desktop};` : ''}
					${flipBoxItemBackBorder ? `border: ${flipBoxItemBackBorder};` : ''}
					${flipBoxItemBackBorderTypeGetDesktop ? `border-width: ${flipBoxItemBackBorderTypeGetDesktop};` : ''}
					${flipBoxItemBackBorderRadiusGetDesktop ? `border-radius: ${flipBoxItemBackBorderRadiusGetDesktop};` : ''}
					${flipBoxItemBackBorderColor ? `border-color: ${flipBoxItemBackBorderColor};` : ''}
					${flipBoxItemBackBgFontColor ? `background: ${flipBoxItemBackBgFontColor};` : ''}
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
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-content-inner {
						${flipBoxItemFrontPaddingGetTablet ? `padding: ${flipBoxItemFrontPaddingGetTablet};` : ''}
					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-content-inner {
						${flipBoxItemBackPaddingGetTablet ? `padding: ${flipBoxItemBackPaddingGetTablet};` : ''}
					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-icon svg,
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-icon-img {
						${flipBoxFrontIconSize.Tablet ? `width: ${flipBoxFrontIconSize.Tablet}${flipBoxFrontIconSizeUnits.Tablet};` : ''}
						${flipBoxFrontIconSize.Tablet ? `height: ${flipBoxFrontIconSize.Tablet}${flipBoxFrontIconSizeUnits.Tablet};` : ''}
						${flipBoxFrontIconBorderTypeGetTablet ? `border-width: ${flipBoxFrontIconBorderTypeGetTablet};` : ''}
						${flipBoxFrontIconBorderRadiusGetTablet ? `border-radius: ${flipBoxFrontIconBorderRadiusGetTablet};` : ''}
						${flipBoxFrontIconPaddingGetTablet ? `padding: ${flipBoxFrontIconPaddingGetTablet};` : ''}
						${flipBoxFrontIconMarginGetTablet ? `margin: ${flipBoxFrontIconMarginGetTablet};` : ''}
					}

					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-icon svg,
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-icon-img {
						${flipBoxBackIconSize.Tablet ? `width: ${flipBoxBackIconSize.Tablet}${flipBoxBackIconSizeUnits.Tablet};` : ''}
						${flipBoxBackIconSize.Tablet ? `height: ${flipBoxBackIconSize.Tablet}${flipBoxBackIconSizeUnits.Tablet};` : ''}
						${flipBoxBackIconBorderTypeGetTablet ? `border-width: ${flipBoxBackIconBorderTypeGetTablet};` : ''}
						${flipBoxBackIconBorderRadiusGetTablet ? `border-radius: ${flipBoxBackIconBorderRadiusGetTablet};` : ''}
						${flipBoxBackIconPaddingGetTablet ? `padding: ${flipBoxBackIconPaddingGetTablet};` : ''}
						${flipBoxBackIconMarginGetTablet ? `margin: ${flipBoxBackIconMarginGetTablet};` : ''}
					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-title {
					  ${flipBoxFrontTitleFontSize.Tablet ? `font-size: ${flipBoxFrontTitleFontSize.Tablet}${flipBoxFrontTitleFontSizeUnits.Tablet};` : ''}
					  ${flipBoxFrontTitleLetterSpacing.Tablet ? `letter-spacing: ${flipBoxFrontTitleLetterSpacing.Tablet}${flipBoxFrontTitleLetterSpacingUnits.Tablet};` : ''}
					  ${flipBoxFrontTitleLineHeight.Tablet ? `line-height: ${flipBoxFrontTitleLineHeight.Tablet}${flipBoxFrontTitleLineHeightUnits.Tablet};` : ''}
					  ${flipBoxFrontTitleMarginGetTablet ? `margin: ${flipBoxFrontTitleMarginGetTablet};` : ''}
					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-content {
					  ${flipBoxFrontContentFontSize.Tablet ? `font-size: ${flipBoxFrontContentFontSize.Tablet}${flipBoxFrontContentFontSizeUnits.Tablet};` : ''}
					  ${flipBoxFrontContentLetterSpacing.Tablet ? `letter-spacing: ${flipBoxFrontContentLetterSpacing.Tablet}${flipBoxFrontContentLetterSpacingUnits.Tablet};` : ''}
					  ${flipBoxFrontContentLineHeight.Tablet ? `line-height: ${flipBoxFrontContentLineHeight.Tablet}${flipBoxFrontContentLineHeightUnits.Tablet};` : ''}
					  ${flipBoxFrontContentMarginGetTablet ? `margin: ${flipBoxFrontContentMarginGetTablet};` : ''}
					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-back-button {
					  ${flipBoxBackButtonFontSize.Tablet ? `font-size: ${flipBoxBackButtonFontSize.Tablet}${flipBoxBackButtonFontSizeUnits.Tablet};` : ''}
					  ${flipBoxBackButtonLetterSpacing.Tablet ? `letter-spacing: ${flipBoxBackButtonLetterSpacing.Tablet}${flipBoxBackButtonLetterSpacingUnits.Tablet};` : ''}
					  ${flipBoxBackButtonLineHeight.Tablet ? `line-height: ${flipBoxBackButtonLineHeight.Tablet}${flipBoxBackButtonLineHeightUnits.Tablet};` : ''}
					  ${flipBoxBackButtonBorderTypeGetTablet ? `border-width: ${flipBoxBackButtonBorderTypeGetTablet};` : ''}
					  ${flipBoxBackButtonBorderRadiusGetTablet ? `border-radius: ${flipBoxBackButtonBorderRadiusGetTablet};` : ''}
					  ${flipBoxBackButtonPaddingGetTablet ? `padding: ${flipBoxBackButtonPaddingGetTablet};` : ''}
					  ${flipBoxBackButtonMarginGetTablet ? `margin: ${flipBoxBackButtonMarginGetTablet};` : ''}

					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-title {
					  ${flipBoxBackTitleFontSize.Tablet ? `font-size: ${flipBoxBackTitleFontSize.Tablet}${flipBoxBackTitleFontSizeUnits.Tablet};` : ''}
					  ${flipBoxBackTitleLetterSpacing.Tablet ? `letter-spacing: ${flipBoxBackTitleLetterSpacing.Tablet}${flipBoxBackTitleLetterSpacingUnits.Tablet};` : ''}
					  ${flipBoxBackTitleLineHeight.Tablet ? `line-height: ${flipBoxBackTitleLineHeight.Tablet}${flipBoxBackTitleLineHeightUnits.Tablet};` : ''}
					  ${flipBoxBackTitleMarginGetTablet ? `margin: ${flipBoxBackTitleMarginGetTablet};` : ''}
					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-content {
					  ${flipBoxBackContentFontSize.Tablet ? `font-size: ${flipBoxBackContentFontSize.Tablet}${flipBoxBackContentFontSizeUnits.Tablet};` : ''}
					  ${flipBoxBackContentLetterSpacing.Tablet ? `letter-spacing: ${flipBoxBackContentLetterSpacing.Tablet}${flipBoxBackContentLetterSpacingUnits.Tablet};` : ''}
					  ${flipBoxBackContentLineHeight.Tablet ? `line-height: ${flipBoxBackContentLineHeight.Tablet}${flipBoxBackContentLineHeightUnits.Tablet};` : ''}
					  ${flipBoxBackContentMarginGetTablet ? `margin: ${flipBoxBackContentMarginGetTablet};` : ''}
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
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-content-inner {
						${flipBoxItemFrontPaddingGetMobile ? `padding: ${flipBoxItemFrontPaddingGetMobile};` : ''}
					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-content-inner {
						${flipBoxItemBackPaddingGetMobile ? `padding: ${flipBoxItemBackPaddingGetMobile};` : ''}
					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-icon svg,
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-icon-img {
						${flipBoxFrontIconSize.Mobile ? `width: ${flipBoxFrontIconSize.Mobile}${flipBoxFrontIconSizeUnits.Mobile};` : ''}
						${flipBoxFrontIconSize.Mobile ? `height: ${flipBoxFrontIconSize.Mobile}${flipBoxFrontIconSizeUnits.Mobile};` : ''}
						${flipBoxFrontIconBorderTypeGetMobile ? `border-width: ${flipBoxFrontIconBorderTypeGetMobile};` : ''}
						${flipBoxFrontIconBorderRadiusGetMobile ? `border-radius: ${flipBoxFrontIconBorderRadiusGetMobile};` : ''}
						${flipBoxFrontIconPaddingGetMobile ? `padding: ${flipBoxFrontIconPaddingGetMobile};` : ''}
						${flipBoxFrontIconMarginGetMobile ? `margin: ${flipBoxFrontIconMarginGetMobile};` : ''}
					}

					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-icon svg,
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-icon-img {
						${flipBoxBackIconSize.Mobile ? `width: ${flipBoxBackIconSize.Mobile}${flipBoxBackIconSizeUnits.Mobile};` : ''}
						${flipBoxBackIconSize.Mobile ? `height: ${flipBoxBackIconSize.Mobile}${flipBoxBackIconSizeUnits.Mobile};` : ''}
						${flipBoxBackIconBorderTypeGetMobile ? `border-width: ${flipBoxBackIconBorderTypeGetMobile};` : ''}
						${flipBoxBackIconBorderRadiusGetMobile ? `border-radius: ${flipBoxBackIconBorderRadiusGetMobile};` : ''}
						${flipBoxBackIconPaddingGetMobile ? `padding: ${flipBoxBackIconPaddingGetMobile};` : ''}
						${flipBoxBackIconMarginGetMobile ? `margin: ${flipBoxBackIconMarginGetMobile};` : ''}
					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-title {
					  ${flipBoxFrontTitleFontSize.Mobile ? `font-size: ${flipBoxFrontTitleFontSize.Mobile}${flipBoxFrontTitleFontSizeUnits.Mobile};` : ''}
					  ${flipBoxFrontTitleLetterSpacing.Mobile ? `letter-spacing: ${flipBoxFrontTitleLetterSpacing.Mobile}${flipBoxFrontTitleLetterSpacingUnits.Mobile};` : ''}
					  ${flipBoxFrontTitleLineHeight.Mobile ? `line-height: ${flipBoxFrontTitleLineHeight.Mobile}${flipBoxFrontTitleLineHeightUnits.Mobile};` : ''}
					  ${flipBoxFrontTitleMarginGetMobile ? `margin: ${flipBoxFrontTitleMarginGetMobile};` : ''}
					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-front .fb-flip-box-content {
					  ${flipBoxFrontContentFontSize.Mobile ? `font-size: ${flipBoxFrontContentFontSize.Mobile}${flipBoxFrontContentFontSizeUnits.Mobile};` : ''}
					  ${flipBoxFrontContentLetterSpacing.Mobile ? `letter-spacing: ${flipBoxFrontContentLetterSpacing.Mobile}${flipBoxFrontContentLetterSpacingUnits.Mobile};` : ''}
					  ${flipBoxFrontContentLineHeight.Mobile ? `line-height: ${flipBoxFrontContentLineHeight.Mobile}${flipBoxFrontContentLineHeightUnits.Mobile};` : ''}
					  ${flipBoxFrontContentMarginGetMobile ? `margin: ${flipBoxFrontContentMarginGetMobile};` : ''}
					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-back-button {
					  ${flipBoxBackButtonFontSize.Mobile ? `font-size: ${flipBoxBackButtonFontSize.Mobile}${flipBoxBackButtonFontSizeUnits.Mobile};` : ''}
					  ${flipBoxBackButtonLetterSpacing.Mobile ? `letter-spacing: ${flipBoxBackButtonLetterSpacing.Mobile}${flipBoxBackButtonLetterSpacingUnits.Mobile};` : ''}
					  ${flipBoxBackButtonLineHeight.Mobile ? `line-height: ${flipBoxBackButtonLineHeight.Mobile}${flipBoxBackButtonLineHeightUnits.Mobile};` : ''}
					  ${flipBoxBackButtonBorderTypeGetMobile ? `border-width: ${flipBoxBackButtonBorderTypeGetMobile};` : ''}
					  ${flipBoxBackButtonBorderRadiusGetMobile ? `border-radius: ${flipBoxBackButtonBorderRadiusGetMobile};` : ''}
					  ${flipBoxBackButtonPaddingGetMobile ? `padding: ${flipBoxBackButtonPaddingGetMobile};` : ''}
					  ${flipBoxBackButtonMarginGetMobile ? `margin: ${flipBoxBackButtonMarginGetMobile};` : ''}
					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-title {
					  ${flipBoxBackTitleFontSize.Mobile ? `font-size: ${flipBoxBackTitleFontSize.Mobile}${flipBoxBackTitleFontSizeUnits.Mobile};` : ''}
					  ${flipBoxBackTitleLetterSpacing.Mobile ? `letter-spacing: ${flipBoxBackTitleLetterSpacing.Mobile}${flipBoxBackTitleLetterSpacingUnits.Mobile};` : ''}
					  ${flipBoxBackTitleLineHeight.Mobile ? `line-height: ${flipBoxBackTitleLineHeight.Mobile}${flipBoxBackTitleLineHeightUnits.Mobile};` : ''}
					  ${flipBoxBackTitleMarginGetMobile ? `margin: ${flipBoxBackTitleMarginGetMobile};` : ''}
					}
					.fb-flip-box-wrapper.${blockID} .fb-flip-box-item .fb-flip-box-back .fb-flip-box-content {
					  ${flipBoxBackContentFontSize.Mobile ? `font-size: ${flipBoxBackContentFontSize.Mobile}${flipBoxBackContentFontSizeUnits.Mobile};` : ''}
					  ${flipBoxBackContentLetterSpacing.Mobile ? `letter-spacing: ${flipBoxBackContentLetterSpacing.Mobile}${flipBoxBackContentLetterSpacingUnits.Mobile};` : ''}
					  ${flipBoxBackContentLineHeight.Mobile ? `line-height: ${flipBoxBackContentLineHeight.Mobile}${flipBoxBackContentLineHeightUnits.Mobile};` : ''}
					  ${flipBoxBackContentMarginGetMobile ? `margin: ${flipBoxBackContentMarginGetMobile};` : ''}
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
												<BaseControl className="fb-sub-heading-position">
													<SelectControl
														label={__("Media Type", "frontis-block")}
														value={flipBoxFrontIconMediaSwitcher}
														options={mediaType}
														onChange={(value) => setAttributes({flipBoxFrontIconMediaSwitcher: value})}
													/>
												</BaseControl>
												<div className='fb-image-upload-field-wrapper'>
													{flipBoxFrontIconMediaSwitcher === 'image' && (
														<BaseControl>
															<MediaUploadCheck>
																<MediaUpload
																	onSelect={(media) => {
																		setAttributes({
																			flipBoxFrontIconMediaId: media['id'],
																			flipBoxFrontIconMediaUrl: media['url'],
																			flipBoxFrontIconMediaWidth: media['width'],
																			flipBoxFrontIconMediaHeight: media['height']
																		});
																	}}
																	type="image"
																	value={attributes.flipBoxFrontIconMediaId}
																	render={({open}) => {
																		return (
																			<Button
																				className={attributes.flipBoxFrontIconMediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
																				onClick={open}
																			>
																				{attributes.flipBoxFrontIconMediaId == 0 && __('Select Icon Image', 'ultimate-addons-for-gutenberg-blocks')}
																				{attributes.flipBoxFrontIconMediaId != 0 &&
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
															{attributes.flipBoxFrontIconMediaId != 0 &&
																<HStack className='editor-post-featured-image__actions'>
																	<Button
																		className='editor-post-featured-image__action'
																		onClick={() => removeFlipBoxFrontIconMedia()}>{__('Remove', 'frontis-block')}</Button>
																	<MediaUploadCheck>
																		<MediaUpload
																			title={__('Replace image', 'frontis-block')}
																			value={attributes.flipBoxFrontIconMediaId}
																			onSelect={(media) => {
																				setAttributes({
																					flipBoxFrontIconMediaId: media['id'],
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

													{flipBoxFrontIconMediaSwitcher === 'icon' && (
														<BaseControl>
															<FBIconPicker value={flipBoxFrontIcon} setIconHandler={flipBoxFrontIconHandler}/>
														</BaseControl>
													)}
												</div>

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

											</>
										)}
										{flipBoxTypeSwitcher === 'back' && (
											<>
												<BaseControl className="fb-sub-heading-position">
													<SelectControl
														label={__("Back Icon: Media Type", "frontis-block")}
														value={flipBoxBackIconMediaSwitcher}
														options={mediaType}
														onChange={(value) => setAttributes({flipBoxBackIconMediaSwitcher: value})}
													/>
												</BaseControl>
												<div className='fb-image-upload-field-wrapper'>
													{flipBoxBackIconMediaSwitcher === 'image' && (
														<BaseControl>
															<MediaUploadCheck>
																<MediaUpload
																	onSelect={(media) => {
																		setAttributes({
																			flipBoxBackIconMediaId: media['id'],
																			flipBoxBackIconMediaUrl: media['url'],
																			flipBoxBackIconMediaWidth: media['width'],
																			flipBoxBackIconMediaHeight: media['height']
																		});
																	}}
																	type="image"
																	value={attributes.flipBoxBackIconMediaId}
																	render={({open}) => {
																		return (
																			<Button
																				className={attributes.flipBoxBackIconMediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
																				onClick={open}
																			>
																				{attributes.flipBoxBackIconMediaId == 0 && __('Select Icon Image', 'ultimate-addons-for-gutenberg-blocks')}
																				{attributes.flipBoxBackIconMediaId != 0 &&
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
															{attributes.flipBoxBackIconMediaId != 0 &&
																<HStack className='editor-post-featured-image__actions'>
																	<Button
																		className='editor-post-featured-image__action'
																		onClick={() => removeFlipBoxFrontIconMedia()}>{__('Remove', 'frontis-block')}</Button>
																	<MediaUploadCheck>
																		<MediaUpload
																			title={__('Replace image', 'frontis-block')}
																			value={attributes.flipBoxBackIconMediaId}
																			onSelect={(media) => {
																				setAttributes({
																					flipBoxBackIconMediaId: media['id'],
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

													{flipBoxBackIconMediaSwitcher === 'icon' && (
														<BaseControl>
															<FBIconPicker value={flipBoxBackIcon} setIconHandler={flipBoxBackIconHandler}/>
														</BaseControl>
													)}
												</div>

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
											title={__("Icon", "frontis-blocks")}
											initialOpen={false}
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
													<FlipBoxFrontIconControl
														attributes={attributes}
														setAttributes={setAttributes}
														clientId ={clientId}
													/>
												</>
											)}

											{flipBoxTypeSwitcher === 'back' && (
												<>
													<FlipBoxBackIconControl
														attributes={attributes}
														setAttributes={setAttributes}
														clientId ={clientId}
													/>
												</>
											)}
										</PanelBody>

										<PanelBody
											title={__("Title", "frontis-blocks")}
											initialOpen={false}
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
											initialOpen={false}
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

										{flipBoxTypeSwitcher === 'back' && (
											<>
												<PanelBody
													title={__("Button", "frontis-blocks")}
													initialOpen={false}
												>
													<FlipBoxBackButtonControl
														attributes={attributes}
														setAttributes={setAttributes}
														clientId ={clientId}
													/>

												</PanelBody>
											</>
										)}

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
							<div className="fb-flip-box-content" style={{textAlign: flipBoxItemFrontAlignment}}>
								<div className="fb-flip-box-content-inner">
									<div className={`fb-flip-box-icon-wrapper`}>
										{flipBoxFrontIconMediaSwitcher === 'image' && attributes.flipBoxFrontIconMediaUrl && (
											<div className="fb-flip-box-icon-img"><img src={attributes.flipBoxFrontIconMediaUrl}/></div>
										)}
										{flipBoxFrontIconMediaSwitcher === 'icon' && (
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
								</div>
							</div>
						</div>
						<div className="fb-flip-box-back">
							<div className="fb-flip-box-content" style={{textAlign: flipBoxItemBackAlignment}}>
								<div className="fb-flip-box-content-inner">
									<div className={`fb-flip-box-icon-wrapper`}>
										{flipBoxBackIconMediaSwitcher === 'image' && attributes.flipBoxBackIconMediaUrl && (
											<div className="fb-flip-box-icon-img"><img src={attributes.flipBoxBackIconMediaUrl}/></div>
										)}
										{flipBoxBackIconMediaSwitcher === 'icon' && (
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
