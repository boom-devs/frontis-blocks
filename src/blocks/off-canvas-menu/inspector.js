import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	SelectControl,
	BaseControl,
	Button,
	ButtonGroup,
	ToggleControl,
	TextControl,
	TextareaControl,
	Dropdown
} from '@wordpress/components';
import Select2 from "react-select";
import { useEffect, useState, useMemo, memo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import { store as editorStore } from '@wordpress/editor';
import {
	ANIMATION,
	MENU_TYPE,
	BORDER_STYLES,
	BACKGROUND_TYPES,
	OVERFLOW_OP,
} from "@Constants/fbConstants";
import FBIconPicker from "../../components/icon-picker";
import "./editor.scss";
import FB_Range from "@Components/range";
import FB_Spacing from "@Components/spacing";
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import getProActive from '@Utils/getProActive';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import './editor.scss';

const Inspector = ({ attributes, setAttributes, clientId }) => {
	const {
		blockID,
		blockStyle,
		selectedTemplate,
		menuPosition,
		offCanvasPanelWidth,
		offCanvasPanelWidthUnits,
		offCanvasPanelHeight,
		offCanvasPanelHeightUnits,
		offCanvasCustomCSS,
		menuType,
		hamburgerIcon,
		hamburgerText,
		closeMenuType,
		closeMenuIcon,
		closeMenuText,
		offCanvasPanelPaddingUnits,
		offCanvasPanelDesktopPadding,
		offCanvasPanelTabPadding,
		offCanvasPanelMobilePadding,
		offCanvasPanelPaddingLink,
		offCanvasPanelMarginUnits,
		offCanvasPanelDesktopMargin,
		offCanvasPanelTabMargin,
		offCanvasPanelMobileMargin,
		offCanvasPanelMarginLink,
		offCanvasPanelBorder,
		offCanvasPanelBorderColorSwitcher,
		offCanvasPanelBorderColor,
		offCanvasPanelBorderHoverColor,
		offCanvasPanelBorderUnits,
		offCanvasPanelDesktopBorderWidth,
		offCanvasPanelTabBorderWidth,
		offCanvasPanelMobileBorderWidth,
		offCanvasPanelBorderLink,
		offCanvasPanelBorderRadiusUnits,
		offCanvasPanelDesktopBorderRadiusWidth,
		offCanvasPanelTabBorderRadiusWidth,
		offCanvasPanelMobileBorderRadiusWidth,
		offCanvasPanelBorderRadiusLink,
		offCanvasPanelBoxShadowSwitcher,
		offCanvasPanelBoxShadowValues,
		offCanvasPanelBoxShadowCssValue,
		offCanvasPanelBoxShadowHoverValues,
		offCanvasPanelBoxShadowHoverCssValue,
		offCanvasPanelBgColorSwitcher,
		offCanvasPanelBgNormalBackgroundType,
		offCanvasPanelBgNormalClassicColor,
		offCanvasPanelBgNormalGradientColor,
		offCanvasPanelBgNormalCustomGradientSwitcher,
		offCanvasPanelBgNormalCustomGradientInputValue,
		offCanvasPanelBgNormalBackgroundImageUrl,
		offCanvasPanelBgNormalBackgroundImagePosition,
		offCanvasPanelBgNormalBackgroundImageAttachment,
		offCanvasPanelBgNormalBackgroundImageRepeat,
		offCanvasPanelBgNormalBackgroundImageSize,

		offCanvasPanelBgHoverBackgroundType,
		offCanvasPanelBgHoverClassicColor,
		offCanvasPanelBgHoverGradientColor,
		offCanvasPanelBgHoverCustomGradientSwitcher,
		offCanvasPanelBgHoverCustomGradientInputValue,
		offCanvasPanelBgHoverBackgroundImageUrl,
		offCanvasPanelBgHoverBackgroundImagePosition,
		offCanvasPanelBgHoverBackgroundImageAttachment,
		offCanvasPanelBgHoverBackgroundImageRepeat,
		offCanvasPanelBgHoverBackgroundImageSize,

		//Icon
		menuIconTypeSwitcher,
		offCanvasHamburgerIconWidth,
		offCanvasHamburgerIconWidthUnits,
		offCanvasHamburgerIconBgWidth,
		offCanvasHamburgerIconBgWidthUnits,
		offCanvashamburgerIconColorSwitcher,
		offCanvashamburgerIconColor,
		offCanvashamburgerIconHoverColor,
		offCanvashamburgerIconBgColorSwitcher,
		offCanvashamburgerIconBgColor,
		offCanvashamburgerIconBgHoverColor,
		offCanvashamburgerIconBorder,
		offCanvashamburgerIconBorderColorSwitcher,
		offCanvashamburgerIconBorderColor,
		offCanvashamburgerIconBorderHoverColor,
		offCanvashamburgerIconBorderUnits,
		offCanvashamburgerIconDesktopBorderWidth,
		offCanvashamburgerIconTabBorderWidth,
		offCanvashamburgerIconMobileBorderWidth,
		offCanvashamburgerIconBorderLink,
		offCanvashamburgerIconBorderRadiusUnits,
		offCanvashamburgerIconDesktopBorderRadiusWidth,
		offCanvashamburgerIconTabBorderRadiusWidth,
		offCanvashamburgerIconMobileBorderRadiusWidth,
		offCanvashamburgerIconBorderRadiusLink,
		offCanvasHamburgerIconPaddingUnits,
		offCanvasHamburgerIconDesktopPadding,
		offCanvasHamburgerIconTabletPadding,
		offCanvasHamburgerIconMobilePadding,
		offCanvasHamburgerIconPaddingLink,

		offCanvasHamburgerIconMarginUnits,
		offCanvasHamburgerIconDesktopMargin,
		offCanvasHamburgerIconTabletMargin,
		offCanvasHamburgerIconMobileMargin,
		offCanvasHamburgerIconMarginLink,
		offCanvasCloseIconWidth,
		offCanvasCloseIconWidthUnits,
		offCanvasCloseIconBgWidth,
		offCanvasCloseIconBgWidthUnits,
		offCanvasCloseIconColorSwitcher,
		offCanvasCloseIconColor,
		offCanvasCloseIconHoverColor,
		offCanvasCloseIconBgColorSwitcher,
		offCanvasCloseIconBgColor,
		offCanvasCloseIconBgHoverColor,
		offCanvasCloseIconBorder,
		offCanvasCloseIconBorderColorSwitcher,
		offCanvasCloseIconBorderColor,
		offCanvasCloseIconBorderHoverColor,
		offCanvasCloseIconBorderUnits,
		offCanvasCloseIconDesktopBorderWidth,
		offCanvasCloseIconTabBorderWidth,
		offCanvasCloseIconMobileBorderWidth,
		offCanvasCloseIconBorderLink,
		offCanvasCloseIconBorderRadiusUnits,
		offCanvasCloseIconDesktopBorderRadiusWidth,
		offCanvasCloseIconTabBorderRadiusWidth,
		offCanvasCloseIconMobileBorderRadiusWidth,
		offCanvasCloseIconBorderRadiusLink,
		offCanvasCloseIconPaddingUnits,
		offCanvasCloseIconDesktopPadding,
		offCanvasCloseIconTabletPadding,
		offCanvasCloseIconMobilePadding,
		offCanvasCloseIconPaddingLink,

		offCanvasCloseIconMarginUnits,
		offCanvasCloseIconDesktopMargin,
		offCanvasCloseIconTabletMargin,
		offCanvasCloseIconMobileMargin,
		offCanvasCloseIconMarginLink,
		offCanvasGlobalZIndex,
		offCanvasOverflow,
		offCanvasPositionType,
		offCanvasHZOrientationType,
		offCanvasVROrientationType,
		offCanvasHZLeftOffset,
		offCanvasHZLeftOffsetUnits,
		offCanvasHZRightOffset,
		offCanvasHZRightOffsetUnits,
		offCanvasVRTopOffset,
		offCanvasVRTopOffsetUnits,
		offCanvasVRBottomOffset,
		offCanvasVRBottomOffsetUnits,

		offCanvasGlobalWraperID,
		offCanvasGlobalWraperClass,

		offCanvasGlobalPaddingUnits,
		offCanvasGlobalPaddingDesktop,
		offCanvasGlobalPaddingTablet,
		offCanvasGlobalPaddingMobile,
		offCanvasGlobalPaddingLink,

		offCanvasGlobalMarginUnits,
		offCanvasGlobalMarginDesktop,
		offCanvasGlobalMarginTablet,
		offCanvasGlobalMarginMobile,
		offCanvasGlobalMarginLink,

		offCanvasGlobalBgColorSwitcher,
		offCanvasGlobalBgNormalBackgroundType,
		offCanvasGlobalBgNormalClassicColor,
		offCanvasGlobalBgNormalGradientColor,
		offCanvasGlobalBgNormalCustomGradientSwitcher,
		offCanvasGlobalBgNormalCustomGradientInputValue,

		offCanvasGlobalBgNormalBackgroundImageUrl,
		offCanvasGlobalBgNormalBackgroundImageAlt,
		offCanvasGlobalBgNormalBackgroundImageID,
		offCanvasGlobalBgNormalBackgroundImagePosition,
		offCanvasGlobalBgNormalBackgroundImageAttachment,
		offCanvasGlobalBgNormalBackgroundImageRepeat,
		offCanvasGlobalBgNormalBackgroundImageSize,

		offCanvasGlobalBgHoverBackgroundType,
		offCanvasGlobalBgHoverClassicColor,
		offCanvasGlobalBgHoverGradientColor,
		offCanvasGlobalBgHoverCustomGradientSwitcher,
		offCanvasGlobalBgHoverCustomGradientInputValue,

		offCanvasGlobalBgHoverBackgroundImageUrl,
		offCanvasGlobalBgHoverBackgroundImagePosition,
		offCanvasGlobalBgHoverBackgroundImageAttachment,
		offCanvasGlobalBgHoverBackgroundImageRepeat,
		offCanvasGlobalBgHoverBackgroundImageSize,

		offCanvasGlobalBorder,
		offCanvasGlobalBorderColorSwitcher,
		offCanvasGlobalBorderColor,
		offCanvasGlobalBorderHoverColor,
		offCanvasGlobalBorderUnits,
		offCanvasGlobalBorderDesktop,
		offCanvasGlobalBorderTablet,
		offCanvasGlobalBorderMobile,
		offCanvasGlobalBorderLink,

		offCanvasGlobalBorderRadiusUnits,
		offCanvasGlobalBorderRadiusDesktop,
		offCanvasGlobalBorderRadiusTablet,
		offCanvasGlobalBorderRadiusMobile,
		offCanvasGlobalBorderRadiusLink,

		offCanvasGlobalBoxShadowSwitcher,
		offCanvasGlobalBoxShadowValues,
		offCanvasGlobalBoxShadowCssValue,
		offCanvasGlobalBoxShadowHoverValues,
		offCanvasGlobalBoxShadowHoverCssValue,

		offCanvasDesktopSwitcher,
		offCanvasTabletSwitcher,
		offCanvasMobileSwitcher,
		menuTextTypeSwitcher,
		menuOpenerTextGlobalTypographyData,
		menuOpenerTextGlobalTypoSwitcher,
		menuOpenerTextGlobalTypoType,
		menuOpenerTextGlobalTypoOption,
		menuOpenerTextFontFamily,
		menuOpenerTextFontSize,
		menuOpenerTextFontSizeUnits,
		menuOpenerTextFontWeight,
		menuOpenerTextFontStyle,
		menuOpenerTextTextTransform,
		menuOpenerTextTextDecoration,
		menuOpenerTextLetterSpacing,
		menuOpenerTextLetterSpacingUnits,
		menuOpenerTextLineHeight,
		menuOpenerTextLineHeightUnits,
		menuOpenerTextColorSwitcher,
		menuOpenerTextColor,
		menuOpenerTextHoverColor,
		menuOpenerTextBgColorSwitcher,
		menuOpenerTextBgColor,
		menuOpenerTextBgHoverColor,
		menuOpenerTextGap,
		menuOpenerTextGapUnits,
		menuOpenerTextBorder,
		menuOpenerTextBorderColorSwitcher,
		menuOpenerTextBorderColor,
		menuOpenerTextBorderHoverColor,
		menuOpenerTextBorderUnits,
		menuOpenerTextDesktopBorder,
		menuOpenerTextTabletBorder,
		menuOpenerTextMobileBorder,
		menuOpenerTextBorderLink,
		menuOpenerTextBorderRadiusUnits,
		menuOpenerTextDesktopBorderRadius,
		menuOpenerTextTabBorderRadius,
		menuOpenerTextMobileBorderRadius,
		menuOpenerTextBorderRadiusLink,
		menuOpenerTextBoxShadowSwitcher,
		menuOpenerTextBoxShadowValues,
		menuOpenerTextBoxShadowCssValue,
		menuOpenerTextBoxShadowHoverValues,
		menuOpenerTextBoxShadowHoverCssValue,
		menuOpenerTextPaddingUnits,
		menuOpenerTextDesktopPadding,
		menuOpenerTextTabPadding,
		menuOpenerTextMobilePadding,
		menuOpenerTextPaddingLink,
		menuOpenerTextMarginUnits,
		menuOpenerTextDesktopMargin,
		menuOpenerTextTabMargin,
		menuOpenerTextMobileMargin,
		menuOpenerTextMarginLink,
		menuCloserTextGlobalTypographyData,
		menuCloserTextGlobalTypoSwitcher,
		menuCloserTextGlobalTypoType,
		menuCloserTextGlobalTypoOption,
		menuCloserTextFontFamily,
		menuCloserTextFontSize,
		menuCloserTextFontSizeUnits,
		menuCloserTextFontWeight,
		menuCloserTextFontStyle,
		menuCloserTextTextTransform,
		menuCloserTextTextDecoration,
		menuCloserTextLetterSpacing,
		menuCloserTextLetterSpacingUnits,
		menuCloserTextLineHeight,
		menuCloserTextLineHeightUnits,
		menuCloserTextColorSwitcher,
		menuCloserTextColor,
		menuCloserTextHoverColor,
		menuCloserTextBgColorSwitcher,
		menuCloserTextBgColor,
		menuCloserTextBgHoverColor,
		menuCloserTextGap,
		menuCloserTextGapUnits,
		menuCloserTextBorder,
		menuCloserTextBorderColorSwitcher,
		menuCloserTextBorderColor,
		menuCloserTextBorderHoverColor,
		menuCloserTextBorderUnits,
		menuCloserTextDesktopBorder,
		menuCloserTextTabletBorder,
		menuCloserTextMobileBorder,
		menuCloserTextBorderLink,
		menuCloserTextBorderRadiusUnits,
		menuCloserTextDesktopBorderRadius,
		menuCloserTextTabBorderRadius,
		menuCloserTextMobileBorderRadius,
		menuCloserTextBorderRadiusLink,
		menuCloserTextBoxShadowSwitcher,
		menuCloserTextBoxShadowValues,
		menuCloserTextBoxShadowCssValue,
		menuCloserTextBoxShadowHoverValues,
		menuCloserTextBoxShadowHoverCssValue,
		menuCloserTextPaddingUnits,
		menuCloserTextDesktopPadding,
		menuCloserTextTabPadding,
		menuCloserTextMobilePadding,
		menuCloserTextPaddingLink,
		menuCloserTextMarginUnits,
		menuCloserTextDesktopMargin,
		menuCloserTextTabMargin,
		menuCloserTextMobileMargin,
		menuCloserTextMarginLink,
		offCanvasOverlayBackgroundColorSwitcher,
		offCanvasOverlayBackgroundColor,
		offCanvasOverlayBackgroundHoverColor,
		offCanvasOverlayBackgroundGradientColor,
		offCanvasOverlayBackgroundHoverGradientColor,
		offCanvasOverlayBackgroundCustomGradientColorSwitcher,
		offCanvasOverlayBackgroundCustomGradientColor,
		offCanvasOverlayBackgroundHoverCustomGradientColorSwitcher,
		offCanvasOverlayBackgroundHoverCustomGradientColor,
		offCanvasOverlayBgColorType,
		offCanvasOverlayBgHoverColorType,
		offCanvasOverlayColorType,
		offCanvasOverlayHoverColorType,
		offCanvasOverlayHoverColor,
		offCanvasOverlayGradientColor,
		offCanvasOverlayHoverGradientColor,
		offCanvasOverlayCustomGradientColorSwitcher,
		offCanvasOverlayCustomGradientColor,
		offCanvasOverlayHoverCustomGradientColorSwitcher,
		offCanvasOverlayHoverCustomGradientColor,
		offCanvasOverlayOpacity,
		offCanvasOverlayOpacityUnits
	} = attributes;

	const deviceType = useDeviceType();

	const [patterns, setPatterns] = useState([]);

	const patternData = useSelect(select => {
		const allPatterns = select(coreStore) ? select(coreStore).getBlockPatterns() || [] : [];

		let userPatterns = [];
		try {
			if (select('core')) {
				userPatterns = select('core').getEntityRecords('postType', 'wp_block') || [];
			}
		} catch (error) {
			console.log('Error getting user patterns:', error);
		}

		return { allPatterns, userPatterns };
	}, []);

	useEffect(() => {
		const patternOptions = [
			{ value: '', label: __('Select a pattern', 'frontis-blocks') }
		];
	
		if (patternData.allPatterns && patternData.allPatterns.length > 0) {
			patternOptions.push(
				{ value: 'core-separator', label: __('--- Theme Patterns ---', 'frontis-blocks'), isDisabled: true },
				...patternData.allPatterns.map(pattern => ({
					value: pattern.name,
					label: pattern.title
				}))
			);
		}
	
		if (patternData.userPatterns && patternData.userPatterns.length > 0) {
			patternOptions.push(
				{ value: 'user-separator', label: __('--- User Patterns ---', 'frontis-blocks'), isDisabled: true },
				...patternData.userPatterns.map(pattern => ({
					value: 'user-' + pattern.id,
					label: pattern.title && pattern.title.raw ? pattern.title.raw : `Pattern ${pattern.id}`
				}))
			);
		}
	
		setPatterns(patternOptions);
	}, [patternData]);

	const handlePatternChange = (selectedOption) => {
		const value = selectedOption?.value || '';
	
		// separator / empty select handle
		if (!value || value === 'core-separator' || value === 'user-separator') {
			setAttributes({
				selectedTemplate: '',
				patternContent: ''
			});
			return;
		}
	
		const content = getSelectedPatternContent(value);
	
		setAttributes({
			selectedTemplate: value,
			patternContent: content
		});
	};

	// Handle pattern selection
	const getSelectedPatternContent = (patternId) => {
		if (!patternId) return '';

		try {
			// Check if it's a user pattern
			if (patternId.startsWith('user-')) {
				const id = parseInt(patternId.replace('user-', ''), 10);
				const userPattern = patternData.userPatterns.find(p => p.id === id);
				if (!userPattern) {
					console.warn(`User pattern with ID ${id} not found`);
					return '';
				}
				return userPattern?.content?.raw || '';
			} else {
				// Core pattern
				const corePattern = patternData.allPatterns.find(p => p.name === patternId);
				if (!corePattern) {
					console.warn(`Core pattern with name ${patternId} not found`);
					return '';
				}
				return corePattern?.content || '';
			}
		} catch (error) {
			console.error('Error retrieving pattern content:', error);
			return '';
		}
	};
	// Generate unique block ID if not set
	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockID: "off-canvas-menu-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const hamburgerIconHandler = (IconName) => {
		setAttributes({ hamburgerIcon: IconName })
	}
	const closeMenuIconHandler = (IconName) => {
		setAttributes({ closeMenuIcon: IconName })
	}

	/** Start padding */
	const handleoffCanvasPanelPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasPanelPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasPanelDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasPanelTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasPanelMobilePadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ offCanvasPanelDesktopPadding: { ...offCanvasPanelDesktopPadding, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ offCanvasPanelTabPadding: { ...offCanvasPanelTabPadding, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ offCanvasPanelMobilePadding: { ...offCanvasPanelMobilePadding, [position]: value } });
					break;
				default:
					break;
			}
		}
	}

	const handleoffCanvasPanelPaddingCombineBtn = () => {
		setAttributes({ offCanvasPanelPaddingLink: !offCanvasPanelPaddingLink });
	}

	const handleoffCanvasPanelPaddingUnitsHandler = (unit) => {
		setAttributes({
			offCanvasPanelPaddingUnits: {
				...offCanvasPanelPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	/** end padding */

	/** Default padding for each device */
	const offCanvasPanelDesktopPaddingStr = `${offCanvasPanelDesktopPadding?.top}${offCanvasPanelPaddingUnits?.Desktop} ${offCanvasPanelDesktopPadding?.right}${offCanvasPanelPaddingUnits?.Desktop} ${offCanvasPanelDesktopPadding?.bottom}${offCanvasPanelPaddingUnits?.Desktop} ${offCanvasPanelDesktopPadding?.left}${offCanvasPanelPaddingUnits?.Desktop}`;
	const offCanvasPanelTabletPaddingStr = `${offCanvasPanelTabPadding?.top}${offCanvasPanelPaddingUnits?.Tablet} ${offCanvasPanelTabPadding?.right}${offCanvasPanelPaddingUnits?.Tablet} ${offCanvasPanelTabPadding?.bottom}${offCanvasPanelPaddingUnits?.Tablet} ${offCanvasPanelTabPadding?.left}${offCanvasPanelPaddingUnits?.Tablet}`;
	const offCanvasPanelMobilePaddingStr = `${offCanvasPanelMobilePadding?.top}${offCanvasPanelPaddingUnits?.Mobile} ${offCanvasPanelMobilePadding?.right}${offCanvasPanelPaddingUnits?.Mobile} ${offCanvasPanelMobilePadding?.bottom}${offCanvasPanelPaddingUnits?.Mobile} ${offCanvasPanelMobilePadding?.left}${offCanvasPanelPaddingUnits?.Mobile}`;
	/** End Padding */

	/** Start Margin */
	const handleoffCanvasPanelMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasPanelMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasPanelDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasPanelTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasPanelMobileMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ offCanvasPanelDesktopMargin: { ...offCanvasPanelDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ offCanvasPanelTabMargin: { ...offCanvasPanelTabMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ offCanvasPanelMobileMargin: { ...offCanvasPanelMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	}

	const handleoffCanvasPanelMarginCombineBtn = () => {
		setAttributes({ offCanvasPanelMarginLink: !offCanvasPanelMarginLink });
	}

	const handleoffCanvasPanelMarginUnitsHandler = (unit) => {
		setAttributes({
			offCanvasPanelMarginUnits: {
				...offCanvasPanelMarginUnits,
				[deviceType]: unit
			}
		});
	}

	/** Default margin for each device */
	const offCanvasPanelDesktopMarginStr = `${offCanvasPanelDesktopMargin?.top}${offCanvasPanelMarginUnits?.Desktop} ${offCanvasPanelDesktopMargin?.right}${offCanvasPanelMarginUnits?.Desktop} ${offCanvasPanelDesktopMargin?.bottom}${offCanvasPanelMarginUnits?.Desktop} ${offCanvasPanelDesktopMargin?.left}${offCanvasPanelMarginUnits?.Desktop}`;
	const offCanvasPanelTabletMarginStr = `${offCanvasPanelTabMargin?.top}${offCanvasPanelMarginUnits?.Tablet} ${offCanvasPanelTabMargin?.right}${offCanvasPanelMarginUnits?.Tablet} ${offCanvasPanelTabMargin?.bottom}${offCanvasPanelMarginUnits?.Tablet} ${offCanvasPanelTabMargin?.left}${offCanvasPanelMarginUnits?.Tablet}`;
	const offCanvasPanelMobileMarginStr = `${offCanvasPanelMobileMargin?.top}${offCanvasPanelMarginUnits?.Mobile} ${offCanvasPanelMobileMargin?.right}${offCanvasPanelMarginUnits?.Mobile} ${offCanvasPanelMobileMargin?.bottom}${offCanvasPanelMarginUnits?.Mobile} ${offCanvasPanelMobileMargin?.left}${offCanvasPanelMarginUnits?.Mobile}`;
	/** End margin */

	/** Start border width */
	const handleoffCanvasPanelBorderWidthChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasPanelBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasPanelDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasPanelTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasPanelMobileBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasPanelDesktopBorderWidth: {
							...offCanvasPanelDesktopBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasPanelTabBorderWidth: {
							...offCanvasPanelTabBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasPanelMobileBorderWidth: {
							...offCanvasPanelMobileBorderWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleoffCanvasPanelBorderLinkToggle = () => {
		setAttributes({ offCanvasPanelBorderLink: !offCanvasPanelBorderLink });
	};

	const handleoffCanvasPanelBorderUnitsChange = (unit) => {
		setAttributes({
			offCanvasPanelBorderUnits: {
				...offCanvasPanelBorderUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border width */

	/** Default border width for different devices */
	const offCanvasPanelDesktopBorderWidthStr = `${offCanvasPanelDesktopBorderWidth?.top}${offCanvasPanelBorderUnits?.Desktop} ${offCanvasPanelDesktopBorderWidth?.right}${offCanvasPanelBorderUnits?.Desktop} ${offCanvasPanelDesktopBorderWidth?.bottom}${offCanvasPanelBorderUnits?.Desktop} ${offCanvasPanelDesktopBorderWidth?.left}${offCanvasPanelBorderUnits?.Desktop}`;
	const offCanvasPanelTabletBorderWidthStr = `${offCanvasPanelTabBorderWidth?.top}${offCanvasPanelBorderUnits?.Tablet} ${offCanvasPanelTabBorderWidth?.right}${offCanvasPanelBorderUnits?.Tablet} ${offCanvasPanelTabBorderWidth?.bottom}${offCanvasPanelBorderUnits?.Tablet} ${offCanvasPanelTabBorderWidth?.left}${offCanvasPanelBorderUnits?.Tablet}`;
	const offCanvasPanelMobileBorderWidthStr = `${offCanvasPanelMobileBorderWidth?.top}${offCanvasPanelBorderUnits?.Mobile} ${offCanvasPanelMobileBorderWidth?.right}${offCanvasPanelBorderUnits?.Mobile} ${offCanvasPanelMobileBorderWidth?.bottom}${offCanvasPanelBorderUnits?.Mobile} ${offCanvasPanelMobileBorderWidth?.left}${offCanvasPanelBorderUnits?.Mobile}`;
	/** End border width */

	/** Start border radius */
	const handleoffCanvasPanelBorderRadiusChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasPanelBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasPanelDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasPanelTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasPanelMobileBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasPanelDesktopBorderRadiusWidth: {
							...offCanvasPanelDesktopBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasPanelTabBorderRadiusWidth: {
							...offCanvasPanelTabBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasPanelMobileBorderRadiusWidth: {
							...offCanvasPanelMobileBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleoffCanvasPanelBorderRadiusLinkToggle = () => {
		setAttributes({ offCanvasPanelBorderRadiusLink: !offCanvasPanelBorderRadiusLink });
	};

	const handleoffCanvasPanelBorderRadiusUnitsChange = (unit) => {
		setAttributes({
			offCanvasPanelBorderRadiusUnits: {
				...offCanvasPanelBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border radius */

	/** Default border radius for different devices */
	const offCanvasPanelDesktopBorderRadiusStr = `${offCanvasPanelDesktopBorderRadiusWidth?.top}${offCanvasPanelBorderRadiusUnits?.Desktop} ${offCanvasPanelDesktopBorderRadiusWidth?.right}${offCanvasPanelBorderRadiusUnits?.Desktop} ${offCanvasPanelDesktopBorderRadiusWidth?.bottom}${offCanvasPanelBorderRadiusUnits?.Desktop} ${offCanvasPanelDesktopBorderRadiusWidth?.left}${offCanvasPanelBorderRadiusUnits?.Desktop}`;
	const offCanvasPanelTabletBorderRadiusStr = `${offCanvasPanelTabBorderRadiusWidth?.top}${offCanvasPanelBorderRadiusUnits?.Tablet} ${offCanvasPanelTabBorderRadiusWidth?.right}${offCanvasPanelBorderRadiusUnits?.Tablet} ${offCanvasPanelTabBorderRadiusWidth?.bottom}${offCanvasPanelBorderRadiusUnits?.Tablet} ${offCanvasPanelTabBorderRadiusWidth?.left}${offCanvasPanelBorderRadiusUnits?.Tablet}`;
	const offCanvasPanelMobileBorderRadiusStr = `${offCanvasPanelMobileBorderRadiusWidth?.top}${offCanvasPanelBorderRadiusUnits?.Mobile} ${offCanvasPanelMobileBorderRadiusWidth?.right}${offCanvasPanelBorderRadiusUnits?.Mobile} ${offCanvasPanelMobileBorderRadiusWidth?.bottom}${offCanvasPanelBorderRadiusUnits?.Mobile} ${offCanvasPanelMobileBorderRadiusWidth?.left}${offCanvasPanelBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */

	/** Hamburger icon border */
	/** Start border width */
	const handleoffCanvashamburgerIconBorderWidthChange = (event, position) => {
		const value = event.target.value;
		if (offCanvashamburgerIconBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvashamburgerIconDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvashamburgerIconTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvashamburgerIconMobileBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvashamburgerIconDesktopBorderWidth: {
							...offCanvashamburgerIconDesktopBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvashamburgerIconTabBorderWidth: {
							...offCanvashamburgerIconTabBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvashamburgerIconMobileBorderWidth: {
							...offCanvashamburgerIconMobileBorderWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleoffCanvashamburgerIconBorderLinkToggle = () => {
		setAttributes({ offCanvashamburgerIconBorderLink: !offCanvashamburgerIconBorderLink });
	};

	const handleoffCanvashamburgerIconBorderUnitsChange = (unit) => {
		setAttributes({
			offCanvashamburgerIconBorderUnits: {
				...offCanvashamburgerIconBorderUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border width */

	/** Default border width for different devices */
	const offCanvashamburgerIconDesktopBorderWidthStr = `${offCanvashamburgerIconDesktopBorderWidth?.top}${offCanvashamburgerIconBorderUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderWidth?.right}${offCanvashamburgerIconBorderUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderWidth?.bottom}${offCanvashamburgerIconBorderUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderWidth?.left}${offCanvashamburgerIconBorderUnits?.Desktop}`;
	const offCanvashamburgerIconTabletBorderWidthStr = `${offCanvashamburgerIconTabBorderWidth?.top}${offCanvashamburgerIconBorderUnits?.Tablet} ${offCanvashamburgerIconTabBorderWidth?.right}${offCanvashamburgerIconBorderUnits?.Tablet} ${offCanvashamburgerIconTabBorderWidth?.bottom}${offCanvashamburgerIconBorderUnits?.Tablet} ${offCanvashamburgerIconTabBorderWidth?.left}${offCanvashamburgerIconBorderUnits?.Tablet}`;
	const offCanvashamburgerIconMobileBorderWidthStr = `${offCanvashamburgerIconMobileBorderWidth?.top}${offCanvashamburgerIconBorderUnits?.Mobile} ${offCanvashamburgerIconMobileBorderWidth?.right}${offCanvashamburgerIconBorderUnits?.Mobile} ${offCanvashamburgerIconMobileBorderWidth?.bottom}${offCanvashamburgerIconBorderUnits?.Mobile} ${offCanvashamburgerIconMobileBorderWidth?.left}${offCanvashamburgerIconBorderUnits?.Mobile}`;
	/** End border width */

	/** Start border radius */
	const handleoffCanvashamburgerIconBorderRadiusChange = (event, position) => {
		const value = event.target.value;
		if (offCanvashamburgerIconBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvashamburgerIconDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvashamburgerIconTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvashamburgerIconMobileBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvashamburgerIconDesktopBorderRadiusWidth: {
							...offCanvashamburgerIconDesktopBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvashamburgerIconTabBorderRadiusWidth: {
							...offCanvashamburgerIconTabBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvashamburgerIconMobileBorderRadiusWidth: {
							...offCanvashamburgerIconMobileBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleoffCanvashamburgerIconBorderRadiusLinkToggle = () => {
		setAttributes({ offCanvashamburgerIconBorderRadiusLink: !offCanvashamburgerIconBorderRadiusLink });
	};

	const handleoffCanvashamburgerIconBorderRadiusUnitsChange = (unit) => {
		setAttributes({
			offCanvashamburgerIconBorderRadiusUnits: {
				...offCanvashamburgerIconBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border radius */

	/** Default border radius for different devices */
	const offCanvashamburgerIconDesktopBorderRadiusStr = `${offCanvashamburgerIconDesktopBorderRadiusWidth?.top}${offCanvashamburgerIconBorderRadiusUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderRadiusWidth?.right}${offCanvashamburgerIconBorderRadiusUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderRadiusWidth?.bottom}${offCanvashamburgerIconBorderRadiusUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderRadiusWidth?.left}${offCanvashamburgerIconBorderRadiusUnits?.Desktop}`;
	const offCanvashamburgerIconTabletBorderRadiusStr = `${offCanvashamburgerIconTabBorderRadiusWidth?.top}${offCanvashamburgerIconBorderRadiusUnits?.Tablet} ${offCanvashamburgerIconTabBorderRadiusWidth?.right}${offCanvashamburgerIconBorderRadiusUnits?.Tablet} ${offCanvashamburgerIconTabBorderRadiusWidth?.bottom}${offCanvashamburgerIconBorderRadiusUnits?.Tablet} ${offCanvashamburgerIconTabBorderRadiusWidth?.left}${offCanvashamburgerIconBorderRadiusUnits?.Tablet}`;
	const offCanvashamburgerIconMobileBorderRadiusStr = `${offCanvashamburgerIconMobileBorderRadiusWidth?.top}${offCanvashamburgerIconBorderRadiusUnits?.Mobile} ${offCanvashamburgerIconMobileBorderRadiusWidth?.right}${offCanvashamburgerIconBorderRadiusUnits?.Mobile} ${offCanvashamburgerIconMobileBorderRadiusWidth?.bottom}${offCanvashamburgerIconBorderRadiusUnits?.Mobile} ${offCanvashamburgerIconMobileBorderRadiusWidth?.left}${offCanvashamburgerIconBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */

	/** Start Close Icon Padding */
	const offCanvasHamburgerIconPaddingUnitsChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasHamburgerIconPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasHamburgerIconDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasHamburgerIconTabletPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasHamburgerIconMobilePadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ offCanvasHamburgerIconDesktopPadding: { ...offCanvasHamburgerIconDesktopPadding, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ offCanvasHamburgerIconTabletPadding: { ...offCanvasHamburgerIconTabletPadding, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ offCanvasHamburgerIconMobilePadding: { ...offCanvasHamburgerIconMobilePadding, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const offCanvasHamburgerIconPaddingLinkBtn = () => {
		setAttributes({
			offCanvasHamburgerIconPaddingLink: !offCanvasHamburgerIconPaddingLink
		});
	};

	const offCanvasHamburgerIconPaddingUnitsHandler = (unit) => {
		setAttributes({
			offCanvasHamburgerIconPaddingUnits: {
				...offCanvasHamburgerIconPaddingUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default padding for offCanvasHamburgerIcon */
	const offCanvasHamburgerIconDesktopPaddingWidth = `${offCanvasHamburgerIconDesktopPadding?.top}${offCanvasHamburgerIconPaddingUnits?.Desktop} ${offCanvasHamburgerIconDesktopPadding?.right}${offCanvasHamburgerIconPaddingUnits?.Desktop} ${offCanvasHamburgerIconDesktopPadding?.bottom}${offCanvasHamburgerIconPaddingUnits?.Desktop} ${offCanvasHamburgerIconDesktopPadding?.left}${offCanvasHamburgerIconPaddingUnits?.Desktop}`;
	const offCanvasHamburgerIconTabletPaddingWidth = `${offCanvasHamburgerIconTabletPadding?.top}${offCanvasHamburgerIconPaddingUnits?.Tablet} ${offCanvasHamburgerIconTabletPadding?.right}${offCanvasHamburgerIconPaddingUnits?.Tablet} ${offCanvasHamburgerIconTabletPadding?.bottom}${offCanvasHamburgerIconPaddingUnits?.Tablet} ${offCanvasHamburgerIconTabletPadding?.left}${offCanvasHamburgerIconPaddingUnits?.Tablet}`;
	const offCanvasHamburgerIconMobilePaddingWidth = `${offCanvasHamburgerIconMobilePadding?.top}${offCanvasHamburgerIconPaddingUnits?.Mobile} ${offCanvasHamburgerIconMobilePadding?.right}${offCanvasHamburgerIconPaddingUnits?.Mobile} ${offCanvasHamburgerIconMobilePadding?.bottom}${offCanvasHamburgerIconPaddingUnits?.Mobile} ${offCanvasHamburgerIconMobilePadding?.left}${offCanvasHamburgerIconPaddingUnits?.Mobile}`;
	/** End offCanvasHamburgerIcon Padding */

	/** Start offCanvasHamburgerIcon Margin */
	const offCanvasHamburgerIconMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasHamburgerIconMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasHamburgerIconDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasHamburgerIconTabletMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasHamburgerIconMobileMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ offCanvasHamburgerIconDesktopMargin: { ...offCanvasHamburgerIconDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ offCanvasHamburgerIconTabletMargin: { ...offCanvasHamburgerIconTabletMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ offCanvasHamburgerIconMobileMargin: { ...offCanvasHamburgerIconMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const offCanvasHamburgerIconMarginLinkBtn = () => {
		setAttributes({
			offCanvasHamburgerIconMarginLink: !offCanvasHamburgerIconMarginLink
		});
	};

	const offCanvasHamburgerIconMarginUnitsHandler = (unit) => {
		setAttributes({
			offCanvasHamburgerIconMarginUnits: {
				...offCanvasHamburgerIconMarginUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default margin for offCanvasHamburgerIcon */
	const offCanvasHamburgerIconDesktopMarginWidth = `${offCanvasHamburgerIconDesktopMargin?.top}${offCanvasHamburgerIconMarginUnits?.Desktop} ${offCanvasHamburgerIconDesktopMargin?.right}${offCanvasHamburgerIconMarginUnits?.Desktop} ${offCanvasHamburgerIconDesktopMargin?.bottom}${offCanvasHamburgerIconMarginUnits?.Desktop} ${offCanvasHamburgerIconDesktopMargin?.left}${offCanvasHamburgerIconMarginUnits?.Desktop}`;
	const offCanvasHamburgerIconTabletMarginWidth = `${offCanvasHamburgerIconTabletMargin?.top}${offCanvasHamburgerIconMarginUnits?.Tablet} ${offCanvasHamburgerIconTabletMargin?.right}${offCanvasHamburgerIconMarginUnits?.Tablet} ${offCanvasHamburgerIconTabletMargin?.bottom}${offCanvasHamburgerIconMarginUnits?.Tablet} ${offCanvasHamburgerIconTabletMargin?.left}${offCanvasHamburgerIconMarginUnits?.Tablet}`;
	const offCanvasHamburgerIconMobileMarginWidth = `${offCanvasHamburgerIconMobileMargin?.top}${offCanvasHamburgerIconMarginUnits?.Mobile} ${offCanvasHamburgerIconMobileMargin?.right}${offCanvasHamburgerIconMarginUnits?.Mobile} ${offCanvasHamburgerIconMobileMargin?.bottom}${offCanvasHamburgerIconMarginUnits?.Mobile} ${offCanvasHamburgerIconMobileMargin?.left}${offCanvasHamburgerIconMarginUnits?.Mobile}`;
	/** End offCanvasHamburgerIcon Margin */

	/** Start border width */
	const handleoffCanvasCloseIconBorderWidthChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasCloseIconBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasCloseIconDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasCloseIconTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasCloseIconMobileBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasCloseIconDesktopBorderWidth: {
							...offCanvasCloseIconDesktopBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasCloseIconTabBorderWidth: {
							...offCanvasCloseIconTabBorderWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasCloseIconMobileBorderWidth: {
							...offCanvasCloseIconMobileBorderWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleoffCanvasCloseIconBorderLinkToggle = () => {
		setAttributes({ offCanvasCloseIconBorderLink: !offCanvasCloseIconBorderLink });
	};

	const handleoffCanvasCloseIconBorderUnitsChange = (unit) => {
		setAttributes({
			offCanvasCloseIconBorderUnits: {
				...offCanvasCloseIconBorderUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border width */

	/** Default border width for different devices */
	const offCanvasCloseIconDesktopBorderWidthStr = `${offCanvasCloseIconDesktopBorderWidth?.top}${offCanvasCloseIconBorderUnits?.Desktop} ${offCanvasCloseIconDesktopBorderWidth?.right}${offCanvasCloseIconBorderUnits?.Desktop} ${offCanvasCloseIconDesktopBorderWidth?.bottom}${offCanvasCloseIconBorderUnits?.Desktop} ${offCanvasCloseIconDesktopBorderWidth?.left}${offCanvasCloseIconBorderUnits?.Desktop}`;
	const offCanvasCloseIconTabletBorderWidthStr = `${offCanvasCloseIconTabBorderWidth?.top}${offCanvasCloseIconBorderUnits?.Tablet} ${offCanvasCloseIconTabBorderWidth?.right}${offCanvasCloseIconBorderUnits?.Tablet} ${offCanvasCloseIconTabBorderWidth?.bottom}${offCanvasCloseIconBorderUnits?.Tablet} ${offCanvasCloseIconTabBorderWidth?.left}${offCanvasCloseIconBorderUnits?.Tablet}`;
	const offCanvasCloseIconMobileBorderWidthStr = `${offCanvasCloseIconMobileBorderWidth?.top}${offCanvasCloseIconBorderUnits?.Mobile} ${offCanvasCloseIconMobileBorderWidth?.right}${offCanvasCloseIconBorderUnits?.Mobile} ${offCanvasCloseIconMobileBorderWidth?.bottom}${offCanvasCloseIconBorderUnits?.Mobile} ${offCanvasCloseIconMobileBorderWidth?.left}${offCanvasCloseIconBorderUnits?.Mobile}`;
	/** End border width */

	/** Start border radius */
	const handleoffCanvasCloseIconBorderRadiusChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasCloseIconBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasCloseIconDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasCloseIconTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasCloseIconMobileBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasCloseIconDesktopBorderRadiusWidth: {
							...offCanvasCloseIconDesktopBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasCloseIconTabBorderRadiusWidth: {
							...offCanvasCloseIconTabBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasCloseIconMobileBorderRadiusWidth: {
							...offCanvasCloseIconMobileBorderRadiusWidth,
							[position]: value
						}
					});
					break;
				default:
					break;
			}
		}
	};

	const handleoffCanvasCloseIconBorderRadiusLinkToggle = () => {
		setAttributes({ offCanvasCloseIconBorderRadiusLink: !offCanvasCloseIconBorderRadiusLink });
	};

	const handleoffCanvasCloseIconBorderRadiusUnitsChange = (unit) => {
		setAttributes({
			offCanvasCloseIconBorderRadiusUnits: {
				...offCanvasCloseIconBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};
	/** End border radius */

	/** Default border radius for different devices */
	const offCanvasCloseIconDesktopBorderRadiusStr = `${offCanvasCloseIconDesktopBorderRadiusWidth?.top}${offCanvasCloseIconBorderRadiusUnits?.Desktop} ${offCanvasCloseIconDesktopBorderRadiusWidth?.right}${offCanvasCloseIconBorderRadiusUnits?.Desktop} ${offCanvasCloseIconDesktopBorderRadiusWidth?.bottom}${offCanvasCloseIconBorderRadiusUnits?.Desktop} ${offCanvasCloseIconDesktopBorderRadiusWidth?.left}${offCanvasCloseIconBorderRadiusUnits?.Desktop}`;
	const offCanvasCloseIconTabletBorderRadiusStr = `${offCanvasCloseIconTabBorderRadiusWidth?.top}${offCanvasCloseIconBorderRadiusUnits?.Tablet} ${offCanvasCloseIconTabBorderRadiusWidth?.right}${offCanvasCloseIconBorderRadiusUnits?.Tablet} ${offCanvasCloseIconTabBorderRadiusWidth?.bottom}${offCanvasCloseIconBorderRadiusUnits?.Tablet} ${offCanvasCloseIconTabBorderRadiusWidth?.left}${offCanvasCloseIconBorderRadiusUnits?.Tablet}`;
	const offCanvasCloseIconMobileBorderRadiusStr = `${offCanvasCloseIconMobileBorderRadiusWidth?.top}${offCanvasCloseIconBorderRadiusUnits?.Mobile} ${offCanvasCloseIconMobileBorderRadiusWidth?.right}${offCanvasCloseIconBorderRadiusUnits?.Mobile} ${offCanvasCloseIconMobileBorderRadiusWidth?.bottom}${offCanvasCloseIconBorderRadiusUnits?.Mobile} ${offCanvasCloseIconMobileBorderRadiusWidth?.left}${offCanvasCloseIconBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */

	/** Start offCanvasCloseIcon Padding */
	const offCanvasCloseIconPaddingUnitsChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasCloseIconPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasCloseIconDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasCloseIconTabletPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasCloseIconMobilePadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ offCanvasCloseIconDesktopPadding: { ...offCanvasCloseIconDesktopPadding, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ offCanvasCloseIconTabletPadding: { ...offCanvasCloseIconTabletPadding, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ offCanvasCloseIconMobilePadding: { ...offCanvasCloseIconMobilePadding, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const offCanvasCloseIconPaddingLinkBtn = () => {
		setAttributes({
			offCanvasCloseIconPaddingLink: !offCanvasCloseIconPaddingLink
		});
	};

	const offCanvasCloseIconPaddingUnitsHandler = (unit) => {
		setAttributes({
			offCanvasCloseIconPaddingUnits: {
				...offCanvasCloseIconPaddingUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default padding for offCanvasCloseIcon */
	const offCanvasCloseIconDesktopPaddingWidth = `${offCanvasCloseIconDesktopPadding?.top}${offCanvasCloseIconPaddingUnits?.Desktop} ${offCanvasCloseIconDesktopPadding?.right}${offCanvasCloseIconPaddingUnits?.Desktop} ${offCanvasCloseIconDesktopPadding?.bottom}${offCanvasCloseIconPaddingUnits?.Desktop} ${offCanvasCloseIconDesktopPadding?.left}${offCanvasCloseIconPaddingUnits?.Desktop}`;
	const offCanvasCloseIconTabletPaddingWidth = `${offCanvasCloseIconTabletPadding?.top}${offCanvasCloseIconPaddingUnits?.Tablet} ${offCanvasCloseIconTabletPadding?.right}${offCanvasCloseIconPaddingUnits?.Tablet} ${offCanvasCloseIconTabletPadding?.bottom}${offCanvasCloseIconPaddingUnits?.Tablet} ${offCanvasCloseIconTabletPadding?.left}${offCanvasCloseIconPaddingUnits?.Tablet}`;
	const offCanvasCloseIconMobilePaddingWidth = `${offCanvasCloseIconMobilePadding?.top}${offCanvasCloseIconPaddingUnits?.Mobile} ${offCanvasCloseIconMobilePadding?.right}${offCanvasCloseIconPaddingUnits?.Mobile} ${offCanvasCloseIconMobilePadding?.bottom}${offCanvasCloseIconPaddingUnits?.Mobile} ${offCanvasCloseIconMobilePadding?.left}${offCanvasCloseIconPaddingUnits?.Mobile}`;
	/** End offCanvasCloseIcon Padding */

	/** Start offCanvasCloseIcon Margin */
	const offCanvasCloseIconMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasCloseIconMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasCloseIconDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasCloseIconTabletMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasCloseIconMobileMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ offCanvasCloseIconDesktopMargin: { ...offCanvasCloseIconDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ offCanvasCloseIconTabletMargin: { ...offCanvasCloseIconTabletMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ offCanvasCloseIconMobileMargin: { ...offCanvasCloseIconMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const offCanvasCloseIconMarginLinkBtn = () => {
		setAttributes({
			offCanvasCloseIconMarginLink: !offCanvasCloseIconMarginLink
		});
	};

	const offCanvasCloseIconMarginUnitsHandler = (unit) => {
		setAttributes({
			offCanvasCloseIconMarginUnits: {
				...offCanvasCloseIconMarginUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default margin for offCanvasCloseIcon */
	const offCanvasCloseIconDesktopMarginWidth = `${offCanvasCloseIconDesktopMargin?.top}${offCanvasCloseIconMarginUnits?.Desktop} ${offCanvasCloseIconDesktopMargin?.right}${offCanvasCloseIconMarginUnits?.Desktop} ${offCanvasCloseIconDesktopMargin?.bottom}${offCanvasCloseIconMarginUnits?.Desktop} ${offCanvasCloseIconDesktopMargin?.left}${offCanvasCloseIconMarginUnits?.Desktop}`;
	const offCanvasCloseIconTabletMarginWidth = `${offCanvasCloseIconTabletMargin?.top}${offCanvasCloseIconMarginUnits?.Tablet} ${offCanvasCloseIconTabletMargin?.right}${offCanvasCloseIconMarginUnits?.Tablet} ${offCanvasCloseIconTabletMargin?.bottom}${offCanvasCloseIconMarginUnits?.Tablet} ${offCanvasCloseIconTabletMargin?.left}${offCanvasCloseIconMarginUnits?.Tablet}`;
	const offCanvasCloseIconMobileMarginWidth = `${offCanvasCloseIconMobileMargin?.top}${offCanvasCloseIconMarginUnits?.Mobile} ${offCanvasCloseIconMobileMargin?.right}${offCanvasCloseIconMarginUnits?.Mobile} ${offCanvasCloseIconMobileMargin?.bottom}${offCanvasCloseIconMarginUnits?.Mobile} ${offCanvasCloseIconMobileMargin?.left}${offCanvasCloseIconMarginUnits?.Mobile}`;
	/** End offCanvasCloseIcon Margin */

	/** Start menuOpenerText Padding */
	const menuOpenerTextPaddingUnitsChange = (event, position) => {
		const value = event.target.value;
		if (menuOpenerTextPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						menuOpenerTextDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						menuOpenerTextTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						menuOpenerTextMobilePadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ menuOpenerTextDesktopPadding: { ...menuOpenerTextDesktopPadding, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ menuOpenerTextTabPadding: { ...menuOpenerTextTabPadding, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ menuOpenerTextMobilePadding: { ...menuOpenerTextMobilePadding, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const menuOpenerTextPaddingLinkBtn = () => {
		setAttributes({
			menuOpenerTextPaddingLink: !menuOpenerTextPaddingLink
		});
	};

	const menuOpenerTextPaddingUnitsHandler = (unit) => {
		setAttributes({
			menuOpenerTextPaddingUnits: {
				...menuOpenerTextPaddingUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default padding for menuOpenerText */
	const menuOpenerTextDesktopPaddingWidth = `${menuOpenerTextDesktopPadding?.top}${menuOpenerTextPaddingUnits?.Desktop} ${menuOpenerTextDesktopPadding?.right}${menuOpenerTextPaddingUnits?.Desktop} ${menuOpenerTextDesktopPadding?.bottom}${menuOpenerTextPaddingUnits?.Desktop} ${menuOpenerTextDesktopPadding?.left}${menuOpenerTextPaddingUnits?.Desktop}`;
	const menuOpenerTextTabletPaddingWidth = `${menuOpenerTextTabPadding?.top}${menuOpenerTextPaddingUnits?.Tablet} ${menuOpenerTextTabPadding?.right}${menuOpenerTextPaddingUnits?.Tablet} ${menuOpenerTextTabPadding?.bottom}${menuOpenerTextPaddingUnits?.Tablet} ${menuOpenerTextTabPadding?.left}${menuOpenerTextPaddingUnits?.Tablet}`;
	const menuOpenerTextMobilePaddingWidth = `${menuOpenerTextMobilePadding?.top}${menuOpenerTextPaddingUnits?.Mobile} ${menuOpenerTextMobilePadding?.right}${menuOpenerTextPaddingUnits?.Mobile} ${menuOpenerTextMobilePadding?.bottom}${menuOpenerTextPaddingUnits?.Mobile} ${menuOpenerTextMobilePadding?.left}${menuOpenerTextPaddingUnits?.Mobile}`;
	/** End menuOpenerText Padding */

	/** Start menuOpenerText Margin */
	const menuOpenerTextMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (menuOpenerTextMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						menuOpenerTextDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						menuOpenerTextTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						menuOpenerTextMobileMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ menuOpenerTextDesktopMargin: { ...menuOpenerTextDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ menuOpenerTextTabMargin: { ...menuOpenerTextTabMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ menuOpenerTextMobileMargin: { ...menuOpenerTextMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const menuOpenerTextMarginLinkBtn = () => {
		setAttributes({
			menuOpenerTextMarginLink: !menuOpenerTextMarginLink
		});
	};

	const menuOpenerTextMarginUnitsHandler = (unit) => {
		setAttributes({
			menuOpenerTextMarginUnits: {
				...menuOpenerTextMarginUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default margin for menuOpenerText */
	const menuOpenerTextDesktopMarginWidth = `${menuOpenerTextDesktopMargin?.top}${menuOpenerTextMarginUnits?.Desktop} ${menuOpenerTextDesktopMargin?.right}${menuOpenerTextMarginUnits?.Desktop} ${menuOpenerTextDesktopMargin?.bottom}${menuOpenerTextMarginUnits?.Desktop} ${menuOpenerTextDesktopMargin?.left}${menuOpenerTextMarginUnits?.Desktop}`;
	const menuOpenerTextTabletMarginWidth = `${menuOpenerTextTabMargin?.top}${menuOpenerTextMarginUnits?.Tablet} ${menuOpenerTextTabMargin?.right}${menuOpenerTextMarginUnits?.Tablet} ${menuOpenerTextTabMargin?.bottom}${menuOpenerTextMarginUnits?.Tablet} ${menuOpenerTextTabMargin?.left}${menuOpenerTextMarginUnits?.Tablet}`;
	const menuOpenerTextMobileMarginWidth = `${menuOpenerTextMobileMargin?.top}${menuOpenerTextMarginUnits?.Mobile} ${menuOpenerTextMobileMargin?.right}${menuOpenerTextMarginUnits?.Mobile} ${menuOpenerTextMobileMargin?.bottom}${menuOpenerTextMarginUnits?.Mobile} ${menuOpenerTextMobileMargin?.left}${menuOpenerTextMarginUnits?.Mobile}`;
	/** End menuOpenerText Margin */

	/** Start menuOpenerText Border Radius */
	const menuOpenerTextBorderUnitsChange = (event, position) => {
		const value = event.target.value;
		if (menuOpenerTextBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						menuOpenerTextDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						menuOpenerTextTabletBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						menuOpenerTextMobileBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ menuOpenerTextDesktopBorder: { ...menuOpenerTextDesktopBorder, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ menuOpenerTextTabletBorder: { ...menuOpenerTextTabletBorder, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ menuOpenerTextMobileBorder: { ...menuOpenerTextMobileBorder, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const menuOpenerTextBorderLinkBtn = () => {
		setAttributes({
			menuOpenerTextBorderLink: !menuOpenerTextBorderLink
		});
	};

	const menuOpenerTextBorderUnitsHandler = (unit) => {
		setAttributes({
			menuOpenerTextBorderUnits: {
				...menuOpenerTextBorderUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default border radius for menuOpenerText */
	const menuOpenerTextDesktopBorderWidth = `${menuOpenerTextDesktopBorder?.top}${menuOpenerTextBorderUnits?.Desktop} ${menuOpenerTextDesktopBorder?.right}${menuOpenerTextBorderUnits?.Desktop} ${menuOpenerTextDesktopBorder?.bottom}${menuOpenerTextBorderUnits?.Desktop} ${menuOpenerTextDesktopBorder?.left}${menuOpenerTextBorderUnits?.Desktop}`;
	const menuOpenerTextTabletBorderWidth = `${menuOpenerTextTabletBorder?.top}${menuOpenerTextBorderUnits?.Tablet} ${menuOpenerTextTabletBorder?.right}${menuOpenerTextBorderUnits?.Tablet} ${menuOpenerTextTabletBorder?.bottom}${menuOpenerTextBorderUnits?.Tablet} ${menuOpenerTextTabletBorder?.left}${menuOpenerTextBorderUnits?.Tablet}`;
	const menuOpenerTextMobileBorderWidth = `${menuOpenerTextMobileBorder?.top}${menuOpenerTextBorderUnits?.Mobile} ${menuOpenerTextMobileBorder?.right}${menuOpenerTextBorderUnits?.Mobile} ${menuOpenerTextMobileBorder?.bottom}${menuOpenerTextBorderUnits?.Mobile} ${menuOpenerTextMobileBorder?.left}${menuOpenerTextBorderUnits?.Mobile}`;
	/** End menuOpenerText Border */

	/** Start menuOpenerText Border Radius */
	const menuOpenerTextBorderRadiusUnitsChange = (event, position) => {
		const value = event.target.value;
		if (menuOpenerTextBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						menuOpenerTextDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						menuOpenerTextTabBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						menuOpenerTextMobileBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ menuOpenerTextDesktopBorderRadius: { ...menuOpenerTextDesktopBorderRadius, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ menuOpenerTextTabBorderRadius: { ...menuOpenerTextTabBorderRadius, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ menuOpenerTextMobileBorderRadius: { ...menuOpenerTextMobileBorderRadius, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const menuOpenerTextBorderRadiusLinkBtn = () => {
		setAttributes({
			menuOpenerTextBorderRadiusLink: !menuOpenerTextBorderRadiusLink
		});
	};

	const menuOpenerTextBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			menuOpenerTextBorderRadiusUnits: {
				...menuOpenerTextBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default border radius for menuOpenerText */
	const menuOpenerTextDesktopBorderRadiusWidth = `${menuOpenerTextDesktopBorderRadius?.top}${menuOpenerTextBorderRadiusUnits?.Desktop} ${menuOpenerTextDesktopBorderRadius?.right}${menuOpenerTextBorderRadiusUnits?.Desktop} ${menuOpenerTextDesktopBorderRadius?.bottom}${menuOpenerTextBorderRadiusUnits?.Desktop} ${menuOpenerTextDesktopBorderRadius?.left}${menuOpenerTextBorderRadiusUnits?.Desktop}`;
	const menuOpenerTextTabletBorderRadiusWidth = `${menuOpenerTextTabBorderRadius?.top}${menuOpenerTextBorderRadiusUnits?.Tablet} ${menuOpenerTextTabBorderRadius?.right}${menuOpenerTextBorderRadiusUnits?.Tablet} ${menuOpenerTextTabBorderRadius?.bottom}${menuOpenerTextBorderRadiusUnits?.Tablet} ${menuOpenerTextTabBorderRadius?.left}${menuOpenerTextBorderRadiusUnits?.Tablet}`;
	const menuOpenerTextMobileBorderRadiusWidth = `${menuOpenerTextMobileBorderRadius?.top}${menuOpenerTextBorderRadiusUnits?.Mobile} ${menuOpenerTextMobileBorderRadius?.right}${menuOpenerTextBorderRadiusUnits?.Mobile} ${menuOpenerTextMobileBorderRadius?.bottom}${menuOpenerTextBorderRadiusUnits?.Mobile} ${menuOpenerTextMobileBorderRadius?.left}${menuOpenerTextBorderRadiusUnits?.Mobile}`;
	/** End menuOpenerText Border Radius */

	/** Start menuCloserText Padding */
	const menuCloserTextPaddingUnitsChange = (event, position) => {
		const value = event.target.value;
		if (menuCloserTextPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						menuCloserTextDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						menuCloserTextTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						menuCloserTextMobilePadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ menuCloserTextDesktopPadding: { ...menuCloserTextDesktopPadding, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ menuCloserTextTabPadding: { ...menuCloserTextTabPadding, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ menuCloserTextMobilePadding: { ...menuCloserTextMobilePadding, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const menuCloserTextPaddingLinkBtn = () => {
		setAttributes({
			menuCloserTextPaddingLink: !menuCloserTextPaddingLink
		});
	};

	const menuCloserTextPaddingUnitsHandler = (unit) => {
		setAttributes({
			menuCloserTextPaddingUnits: {
				...menuCloserTextPaddingUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default padding for menuCloserText */
	const menuCloserTextDesktopPaddingWidth = `${menuCloserTextDesktopPadding?.top}${menuCloserTextPaddingUnits?.Desktop} ${menuCloserTextDesktopPadding?.right}${menuCloserTextPaddingUnits?.Desktop} ${menuCloserTextDesktopPadding?.bottom}${menuCloserTextPaddingUnits?.Desktop} ${menuCloserTextDesktopPadding?.left}${menuCloserTextPaddingUnits?.Desktop}`;
	const menuCloserTextTabletPaddingWidth = `${menuCloserTextTabPadding?.top}${menuCloserTextPaddingUnits?.Tablet} ${menuCloserTextTabPadding?.right}${menuCloserTextPaddingUnits?.Tablet} ${menuCloserTextTabPadding?.bottom}${menuCloserTextPaddingUnits?.Tablet} ${menuCloserTextTabPadding?.left}${menuCloserTextPaddingUnits?.Tablet}`;
	const menuCloserTextMobilePaddingWidth = `${menuCloserTextMobilePadding?.top}${menuCloserTextPaddingUnits?.Mobile} ${menuCloserTextMobilePadding?.right}${menuCloserTextPaddingUnits?.Mobile} ${menuCloserTextMobilePadding?.bottom}${menuCloserTextPaddingUnits?.Mobile} ${menuCloserTextMobilePadding?.left}${menuCloserTextPaddingUnits?.Mobile}`;
	/** End menuCloserText Padding */

	/** Start menuCloserText Margin */
	const menuCloserTextMarginUnitsChange = (event, position) => {
		const value = event.target.value;
		if (menuCloserTextMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						menuCloserTextDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						menuCloserTextTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						menuCloserTextMobileMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ menuCloserTextDesktopMargin: { ...menuCloserTextDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ menuCloserTextTabMargin: { ...menuCloserTextTabMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ menuCloserTextMobileMargin: { ...menuCloserTextMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const menuCloserTextMarginLinkBtn = () => {
		setAttributes({
			menuCloserTextMarginLink: !menuCloserTextMarginLink
		});
	};

	const menuCloserTextMarginUnitsHandler = (unit) => {
		setAttributes({
			menuCloserTextMarginUnits: {
				...menuCloserTextMarginUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default margin for menuCloserText */
	const menuCloserTextDesktopMarginWidth = `${menuCloserTextDesktopMargin?.top}${menuCloserTextMarginUnits?.Desktop} ${menuCloserTextDesktopMargin?.right}${menuCloserTextMarginUnits?.Desktop} ${menuCloserTextDesktopMargin?.bottom}${menuCloserTextMarginUnits?.Desktop} ${menuCloserTextDesktopMargin?.left}${menuCloserTextMarginUnits?.Desktop}`;
	const menuCloserTextTabletMarginWidth = `${menuCloserTextTabMargin?.top}${menuCloserTextMarginUnits?.Tablet} ${menuCloserTextTabMargin?.right}${menuCloserTextMarginUnits?.Tablet} ${menuCloserTextTabMargin?.bottom}${menuCloserTextMarginUnits?.Tablet} ${menuCloserTextTabMargin?.left}${menuCloserTextMarginUnits?.Tablet}`;
	const menuCloserTextMobileMarginWidth = `${menuCloserTextMobileMargin?.top}${menuCloserTextMarginUnits?.Mobile} ${menuCloserTextMobileMargin?.right}${menuCloserTextMarginUnits?.Mobile} ${menuCloserTextMobileMargin?.bottom}${menuCloserTextMarginUnits?.Mobile} ${menuCloserTextMobileMargin?.left}${menuCloserTextMarginUnits?.Mobile}`;
	/** End menuCloserText Margin */

	/** Start menuCloserText Border Radius */
	const menuCloserTextBorderUnitsChange = (event, position) => {
		const value = event.target.value;
		if (menuCloserTextBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						menuCloserTextDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						menuCloserTextTabletBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						menuCloserTextMobileBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ menuCloserTextDesktopBorder: { ...menuCloserTextDesktopBorder, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ menuCloserTextTabletBorder: { ...menuCloserTextTabletBorder, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ menuCloserTextMobileBorder: { ...menuCloserTextMobileBorder, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const menuCloserTextBorderLinkBtn = () => {
		setAttributes({
			menuCloserTextBorderLink: !menuCloserTextBorderLink
		});
	};

	const menuCloserTextBorderUnitsHandler = (unit) => {
		setAttributes({
			menuCloserTextBorderUnits: {
				...menuCloserTextBorderUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default border radius for menuCloserText */
	const menuCloserTextDesktopBorderWidth = `${menuCloserTextDesktopBorder?.top}${menuCloserTextBorderUnits?.Desktop} ${menuCloserTextDesktopBorder?.right}${menuCloserTextBorderUnits?.Desktop} ${menuCloserTextDesktopBorder?.bottom}${menuCloserTextBorderUnits?.Desktop} ${menuCloserTextDesktopBorder?.left}${menuCloserTextBorderUnits?.Desktop}`;
	const menuCloserTextTabletBorderWidth = `${menuCloserTextTabletBorder?.top}${menuCloserTextBorderUnits?.Tablet} ${menuCloserTextTabletBorder?.right}${menuCloserTextBorderUnits?.Tablet} ${menuCloserTextTabletBorder?.bottom}${menuCloserTextBorderUnits?.Tablet} ${menuCloserTextTabletBorder?.left}${menuCloserTextBorderUnits?.Tablet}`;
	const menuCloserTextMobileBorderWidth = `${menuCloserTextMobileBorder?.top}${menuCloserTextBorderUnits?.Mobile} ${menuCloserTextMobileBorder?.right}${menuCloserTextBorderUnits?.Mobile} ${menuCloserTextMobileBorder?.bottom}${menuCloserTextBorderUnits?.Mobile} ${menuCloserTextMobileBorder?.left}${menuCloserTextBorderUnits?.Mobile}`;
	/** End menuCloserText Border */

	/** Start menuCloserText Border Radius */
	const menuCloserTextBorderRadiusUnitsChange = (event, position) => {
		const value = event.target.value;
		if (menuCloserTextBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						menuCloserTextDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						menuCloserTextTabBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						menuCloserTextMobileBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ menuCloserTextDesktopBorderRadius: { ...menuCloserTextDesktopBorderRadius, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ menuCloserTextTabBorderRadius: { ...menuCloserTextTabBorderRadius, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ menuCloserTextMobileBorderRadius: { ...menuCloserTextMobileBorderRadius, [position]: value } });
					break;
				default:
					break;
			}
		}
	};

	const menuCloserTextBorderRadiusLinkBtn = () => {
		setAttributes({
			menuCloserTextBorderRadiusLink: !menuCloserTextBorderRadiusLink
		});
	};

	const menuCloserTextBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			menuCloserTextBorderRadiusUnits: {
				...menuCloserTextBorderRadiusUnits,
				[deviceType]: unit
			}
		});
	};

	/** Default border radius for menuCloserText */
	const menuCloserTextDesktopBorderRadiusWidth = `${menuCloserTextDesktopBorderRadius?.top}${menuCloserTextBorderRadiusUnits?.Desktop} ${menuCloserTextDesktopBorderRadius?.right}${menuCloserTextBorderRadiusUnits?.Desktop} ${menuCloserTextDesktopBorderRadius?.bottom}${menuCloserTextBorderRadiusUnits?.Desktop} ${menuCloserTextDesktopBorderRadius?.left}${menuCloserTextBorderRadiusUnits?.Desktop}`;
	const menuCloserTextTabletBorderRadiusWidth = `${menuCloserTextTabBorderRadius?.top}${menuCloserTextBorderRadiusUnits?.Tablet} ${menuCloserTextTabBorderRadius?.right}${menuCloserTextBorderRadiusUnits?.Tablet} ${menuCloserTextTabBorderRadius?.bottom}${menuCloserTextBorderRadiusUnits?.Tablet} ${menuCloserTextTabBorderRadius?.left}${menuCloserTextBorderRadiusUnits?.Tablet}`;
	const menuCloserTextMobileBorderRadiusWidth = `${menuCloserTextMobileBorderRadius?.top}${menuCloserTextBorderRadiusUnits?.Mobile} ${menuCloserTextMobileBorderRadius?.right}${menuCloserTextBorderRadiusUnits?.Mobile} ${menuCloserTextMobileBorderRadius?.bottom}${menuCloserTextBorderRadiusUnits?.Mobile} ${menuCloserTextMobileBorderRadius?.left}${menuCloserTextBorderRadiusUnits?.Mobile}`;
	/** End menuCloserText Border Radius */
	/** Start Global padding */
	const handleGlobalPaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasGlobalPaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasGlobalPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ offCanvasGlobalPaddingDesktop: { ...offCanvasGlobalPaddingDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ offCanvasGlobalPaddingTablet: { ...offCanvasGlobalPaddingTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ offCanvasGlobalPaddingMobile: { ...offCanvasGlobalPaddingMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes({ offCanvasGlobalPaddingLink: !offCanvasGlobalPaddingLink });
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes({
			offCanvasGlobalPaddingUnits: {
				...offCanvasGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopPadding = `${offCanvasGlobalPaddingDesktop?.top}${offCanvasGlobalPaddingUnits?.Desktop} ${offCanvasGlobalPaddingDesktop?.right}${offCanvasGlobalPaddingUnits?.Desktop} ${offCanvasGlobalPaddingDesktop?.bottom}${offCanvasGlobalPaddingUnits?.Desktop} ${offCanvasGlobalPaddingDesktop?.left}${offCanvasGlobalPaddingUnits?.Desktop}`;
	const globalTabletPadding = `${offCanvasGlobalPaddingTablet?.top}${offCanvasGlobalPaddingUnits?.Tablet} ${offCanvasGlobalPaddingTablet?.right}${offCanvasGlobalPaddingUnits?.Tablet} ${offCanvasGlobalPaddingTablet?.bottom}${offCanvasGlobalPaddingUnits?.Tablet} ${offCanvasGlobalPaddingTablet?.left}${offCanvasGlobalPaddingUnits?.Tablet}`;
	const globalMobilePadding = `${offCanvasGlobalPaddingMobile?.top}${offCanvasGlobalPaddingUnits?.Mobile} ${offCanvasGlobalPaddingMobile?.right}${offCanvasGlobalPaddingUnits?.Mobile} ${offCanvasGlobalPaddingMobile?.bottom}${offCanvasGlobalPaddingUnits?.Mobile} ${offCanvasGlobalPaddingMobile?.left}${offCanvasGlobalPaddingUnits?.Mobile}`;
	/** End Global Padding */

	/** Start Global Margin */
	const handleGlobalMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasGlobalMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasGlobalMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ offCanvasGlobalMarginDesktop: { ...offCanvasGlobalMarginDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ offCanvasGlobalMarginTablet: { ...offCanvasGlobalMarginTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ offCanvasGlobalMarginMobile: { ...offCanvasGlobalMarginMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes({ offCanvasGlobalMarginLink: !offCanvasGlobalMarginLink });
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes({
			offCanvasGlobalMarginUnits: {
				...offCanvasGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const globalDesktopMargin = `${offCanvasGlobalMarginDesktop?.top}${offCanvasGlobalMarginUnits?.Desktop} ${offCanvasGlobalMarginDesktop?.right}${offCanvasGlobalMarginUnits?.Desktop} ${offCanvasGlobalMarginDesktop?.bottom}${offCanvasGlobalMarginUnits?.Desktop} ${offCanvasGlobalMarginDesktop?.left}${offCanvasGlobalMarginUnits?.Desktop}`;
	const globalTabletMargin = `${offCanvasGlobalMarginTablet?.top}${offCanvasGlobalMarginUnits?.Tablet} ${offCanvasGlobalMarginTablet?.right}${offCanvasGlobalMarginUnits?.Tablet} ${offCanvasGlobalMarginTablet?.bottom}${offCanvasGlobalMarginUnits?.Tablet} ${offCanvasGlobalMarginTablet?.left}${offCanvasGlobalMarginUnits?.Tablet}`;
	const globalMobileMargin = `${offCanvasGlobalMarginMobile?.top}${offCanvasGlobalMarginUnits?.Mobile} ${offCanvasGlobalMarginMobile?.right}${offCanvasGlobalMarginUnits?.Mobile} ${offCanvasGlobalMarginMobile?.bottom}${offCanvasGlobalMarginUnits?.Mobile} ${offCanvasGlobalMarginMobile?.left}${offCanvasGlobalMarginUnits?.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasGlobalBorderLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasGlobalBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ offCanvasGlobalBorderDesktop: { ...offCanvasGlobalBorderDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ offCanvasGlobalBorderTablet: { ...offCanvasGlobalBorderTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ offCanvasGlobalBorderMobile: { ...offCanvasGlobalBorderMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes({ offCanvasGlobalBorderLink: !offCanvasGlobalBorderLink });
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes({
			offCanvasGlobalBorderUnits: {
				...offCanvasGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopBorderWidth = `${offCanvasGlobalBorderDesktop?.top}${offCanvasGlobalBorderUnits?.Desktop} ${offCanvasGlobalBorderDesktop?.right}${offCanvasGlobalBorderUnits?.Desktop} ${offCanvasGlobalBorderDesktop?.bottom}${offCanvasGlobalBorderUnits?.Desktop} ${offCanvasGlobalBorderDesktop?.left}${offCanvasGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${offCanvasGlobalBorderTablet?.top}${offCanvasGlobalBorderUnits?.Tablet} ${offCanvasGlobalBorderTablet?.right}${offCanvasGlobalBorderUnits?.Tablet} ${offCanvasGlobalBorderTablet?.bottom}${offCanvasGlobalBorderUnits?.Tablet} ${offCanvasGlobalBorderTablet?.left}${offCanvasGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${offCanvasGlobalBorderMobile?.top}${offCanvasGlobalBorderUnits?.Mobile} ${offCanvasGlobalBorderMobile?.right}${offCanvasGlobalBorderUnits?.Mobile} ${offCanvasGlobalBorderMobile?.bottom}${offCanvasGlobalBorderUnits?.Mobile} ${offCanvasGlobalBorderMobile?.left}${offCanvasGlobalBorderUnits?.Mobile}`;
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = (event, position) => {
		const value = event.target.value;
		if (offCanvasGlobalBorderRadiusLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						offCanvasGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						offCanvasGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						offCanvasGlobalBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				default:
					break;
			}
		} else {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({ offCanvasGlobalBorderRadiusDesktop: { ...offCanvasGlobalBorderRadiusDesktop, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ offCanvasGlobalBorderRadiusTablet: { ...offCanvasGlobalBorderRadiusTablet, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ offCanvasGlobalBorderRadiusMobile: { ...offCanvasGlobalBorderRadiusMobile, [position]: value } });
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes({ offCanvasGlobalBorderRadiusLink: !offCanvasGlobalBorderRadiusLink });
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes({
			offCanvasGlobalBorderRadiusUnits: {
				...offCanvasGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */

	/** End Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${offCanvasGlobalBorderRadiusDesktop?.top}${offCanvasGlobalBorderRadiusUnits?.Desktop} ${offCanvasGlobalBorderRadiusDesktop?.right}${offCanvasGlobalBorderRadiusUnits?.Desktop} ${offCanvasGlobalBorderRadiusDesktop?.bottom}${offCanvasGlobalBorderRadiusUnits?.Desktop} ${offCanvasGlobalBorderRadiusDesktop?.left}${offCanvasGlobalBorderRadiusUnits?.Desktop}`;
	const globalTabletBorderRadiusWidth = `${offCanvasGlobalBorderRadiusTablet?.top}${offCanvasGlobalBorderRadiusUnits?.Tablet} ${offCanvasGlobalBorderRadiusTablet?.right}${offCanvasGlobalBorderRadiusUnits?.Tablet} ${offCanvasGlobalBorderRadiusTablet?.bottom}${offCanvasGlobalBorderRadiusUnits?.Tablet} ${offCanvasGlobalBorderRadiusTablet?.left}${offCanvasGlobalBorderRadiusUnits?.Tablet}`;
	const globalMobileBorderRadiusWidth = `${offCanvasGlobalBorderRadiusMobile?.top}${offCanvasGlobalBorderRadiusUnits?.Mobile} ${offCanvasGlobalBorderRadiusMobile?.right}${offCanvasGlobalBorderRadiusUnits?.Mobile} ${offCanvasGlobalBorderRadiusMobile?.bottom}${offCanvasGlobalBorderRadiusUnits?.Mobile} ${offCanvasGlobalBorderRadiusMobile?.left}${offCanvasGlobalBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */

	const getBackgroundNormalStyles = (device) => {
		const bgType = offCanvasPanelBgNormalBackgroundType;
		const bgColor = offCanvasPanelBgNormalClassicColor;
		const bgGradient = offCanvasPanelBgNormalGradientColor;
		const customGradient = offCanvasPanelBgNormalCustomGradientInputValue;
		const customGradientEnabled = offCanvasPanelBgNormalCustomGradientSwitcher;

		const bgImageUrl = offCanvasPanelBgNormalBackgroundImageUrl?.[device];
		const bgImagePosition = offCanvasPanelBgNormalBackgroundImagePosition?.[device];
		const bgAttachment = offCanvasPanelBgNormalBackgroundImageAttachment?.[device];
		const bgRepeat = offCanvasPanelBgNormalBackgroundImageRepeat?.[device];
		const bgSize = offCanvasPanelBgNormalBackgroundImageSize?.[device];

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};

	/**
	 * Get background hover styles
	 */
	const getBackgroundHoverStyles = (device) => {
		const bgType = offCanvasPanelBgHoverBackgroundType;
		const bgColor = offCanvasPanelBgHoverClassicColor;
		const bgGradient = offCanvasPanelBgHoverGradientColor;
		const customGradient = offCanvasPanelBgHoverCustomGradientInputValue;
		const customGradientEnabled = offCanvasPanelBgHoverCustomGradientSwitcher;

		const bgImageUrl = offCanvasPanelBgHoverBackgroundImageUrl?.[device];
		const bgImagePosition = offCanvasPanelBgHoverBackgroundImagePosition?.[device];
		const bgAttachment = offCanvasPanelBgHoverBackgroundImageAttachment?.[device];
		const bgRepeat = offCanvasPanelBgHoverBackgroundImageRepeat?.[device];
		const bgSize = offCanvasPanelBgHoverBackgroundImageSize?.[device];

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};

	/**
	 * Convert object to string
	 */
	const backgroundStyleObjectToString = (styleObj) =>
		Object.entries(styleObj)
			.map(([key, value]) => `${key}: ${value};`)
			.join(' ');


	const desktopBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Desktop'));
	const desktopBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Desktop'));
	const tabletBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Tablet'));
	const tabletBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Tablet'));
	const mobileBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Mobile'));
	const mobileBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Mobile'));

	/**
	 * Get background normal styles
	 */
	const getGlobalBackgroundNormalStyles = (device) => {
		const bgType = offCanvasGlobalBgNormalBackgroundType;
		const bgColor = offCanvasGlobalBgNormalClassicColor;
		const bgGradient = offCanvasGlobalBgNormalGradientColor;
		const customGradient = offCanvasGlobalBgNormalCustomGradientInputValue;
		const customGradientEnabled = offCanvasGlobalBgNormalCustomGradientSwitcher;

		const bgImageUrl = offCanvasGlobalBgNormalBackgroundImageUrl?.[device];
		const bgImagePosition = offCanvasGlobalBgNormalBackgroundImagePosition?.[device];
		const bgAttachment = offCanvasGlobalBgNormalBackgroundImageAttachment?.[device];
		const bgRepeat = offCanvasGlobalBgNormalBackgroundImageRepeat?.[device];
		const bgSize = offCanvasGlobalBgNormalBackgroundImageSize?.[device];

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};

	/**
	 * Get background hover styles
	 */
	const getGlobalBackgroundHoverStyles = (device) => {
		const bgType = offCanvasGlobalBgHoverBackgroundType;
		const bgColor = offCanvasGlobalBgHoverClassicColor;
		const bgGradient = offCanvasGlobalBgHoverGradientColor;
		const customGradient = offCanvasGlobalBgHoverCustomGradientInputValue;
		const customGradientEnabled = offCanvasGlobalBgHoverCustomGradientSwitcher;

		const bgImageUrl = offCanvasGlobalBgHoverBackgroundImageUrl?.[device];
		const bgImagePosition = offCanvasGlobalBgHoverBackgroundImagePosition?.[device];
		const bgAttachment = offCanvasGlobalBgHoverBackgroundImageAttachment?.[device];
		const bgRepeat = offCanvasGlobalBgHoverBackgroundImageRepeat?.[device];
		const bgSize = offCanvasGlobalBgHoverBackgroundImageSize?.[device];

		if (bgType === 'gradient') {
			return {
				background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
			};
		}

		let styles = { background: bgColor };

		if (bgType !== 'gradient' && bgImageUrl) {
			styles = {
				...styles,
				'background-image': `url(${bgImageUrl})`,
				'background-position': bgImagePosition
					? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
					: "50% 50%",
				'background-attachment': bgAttachment || undefined,
				'background-repeat': bgRepeat || undefined,
				'background-size': bgSize || undefined,
			};
		}

		return styles;
	};

	/**
	* Convert object to string
	*/
	const backgroundGlobalStyleObjectToString = (styleObj) => Object.entries(styleObj).map(([key, value]) => `${key}: ${value};`).join(' ');

	const desktopGlobalBackgroundNormalStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundNormalStyles('Desktop'));
	const desktopGlobalBackgroundHoverStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundHoverStyles('Desktop'));
	const tabletGlobalBackgroundNormalStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundNormalStyles('Tablet'));
	const tabletGlobalBackgroundHoverStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundHoverStyles('Tablet'));
	const mobileGlobalBackgroundNormalStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundNormalStyles('Mobile'));
	const mobileGlobalBackgroundHoverStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundHoverStyles('Mobile'));

	const offCanvasStyle = useMemo(
		() => `
				.${blockID}.fb-off-canvas-menu-block{
					${offCanvasPositionType === 'default' ? `position: relative !important;` : ''}
					${offCanvasPositionType !== 'default' && offCanvasPositionType !== 'relative' ? `width: 100%;` : ''}
					${offCanvasPositionType !== 'default' ? `position: ${offCanvasPositionType} !important;` : ''}
					${offCanvasPositionType !== 'default' && offCanvasPositionType !== 'relative' && offCanvasHZOrientationType === 'left' && offCanvasHZLeftOffset?.Desktop ? `left: ${offCanvasHZLeftOffset?.Desktop}${offCanvasHZLeftOffsetUnits?.Desktop};` : ''} 
					${offCanvasPositionType !== 'default' && offCanvasPositionType !== 'relative' && offCanvasHZOrientationType === 'right' && offCanvasHZRightOffset?.Desktop ? `right: ${offCanvasHZRightOffset?.Desktop}${offCanvasHZRightOffsetUnits?.Desktop};` : ''}
					${offCanvasPositionType !== 'default' && offCanvasPositionType !== 'relative' && offCanvasVROrientationType === 'top' && offCanvasVRTopOffset?.Desktop ? `top: ${offCanvasVRTopOffset?.Desktop}${offCanvasVRTopOffsetUnits?.Desktop};` : ''}
					${offCanvasPositionType !== 'default' && offCanvasPositionType !== 'relative' && offCanvasVROrientationType === 'bottom' && offCanvasVRBottomOffset?.Desktop ? `bottom: ${offCanvasVRBottomOffset?.Desktop}${offCanvasVRBottomOffsetUnits?.Desktop};` : ''}
					${offCanvasGlobalZIndex?.Desktop ? `z-index: ${offCanvasGlobalZIndex?.Desktop};` : ''}
					${offCanvasOverflow !== 'default' ? `overflow: ${offCanvasOverflow};` : ''}
					transition: all .3s ease-in-out;
				}
				.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu-container{
					${desktopGlobalBackgroundNormalStyles}
					${globalDesktopPadding && offCanvasGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
					${globalDesktopMargin && offCanvasGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''}
					${offCanvasGlobalBorder ? `border: ${offCanvasGlobalBorder};` : ''}
					${globalDesktopBorderWidth && offCanvasGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
					${globalDesktopBorderRadiusWidth && offCanvasGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
					${offCanvasGlobalBorderColor ? `border-color: ${offCanvasGlobalBorderColor};` : ''}
					${offCanvasGlobalBoxShadowCssValue ? `box-shadow: ${offCanvasGlobalBoxShadowCssValue};` : ''}
					transition: all .3s ease-in-out;
				}
				.${blockID}.fb-off-canvas-menu-block:hover .fb-off-canvas-menu-container{
					${desktopGlobalBackgroundHoverStyles}
					${offCanvasGlobalBorderHoverColor ? `border-color: ${offCanvasGlobalBorderHoverColor};` : ''}
					${offCanvasGlobalBoxShadowHoverCssValue ? `box-shadow: ${offCanvasGlobalBoxShadowHoverCssValue};` : ''}
				}
				.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu{
					${offCanvasPanelWidth?.Desktop ? `width: ${offCanvasPanelWidth?.Desktop}${offCanvasPanelWidthUnits?.Desktop};` : ''}
					${offCanvasPanelHeight?.Desktop ? `height: ${offCanvasPanelHeight?.Desktop}${offCanvasPanelHeightUnits?.Desktop};` : ''}
					${offCanvasPanelDesktopPaddingStr && offCanvasPanelDesktopPadding?.top ? `padding: ${offCanvasPanelDesktopPaddingStr};` : ''}
					${offCanvasPanelDesktopMarginStr && offCanvasPanelDesktopMargin?.top ? `margin: ${offCanvasPanelDesktopMarginStr};` : ''}
					${offCanvasPanelBorder ? `border: ${offCanvasPanelBorder};` : ''}
					${offCanvasPanelBorderColor ? `border-color: ${offCanvasPanelBorderColor};` : ''}
					${offCanvasPanelDesktopBorderWidthStr && offCanvasPanelDesktopBorderWidth?.top ? `border-width: ${offCanvasPanelDesktopBorderWidthStr};` : ''}
					${offCanvasPanelDesktopBorderRadiusStr && offCanvasPanelDesktopBorderRadiusWidth?.top ? `border-radius: ${offCanvasPanelDesktopBorderRadiusStr};` : ''}
					${offCanvasPanelBoxShadowCssValue ? `box-shadow: ${offCanvasPanelBoxShadowCssValue};` : ''} 
					${desktopBackgroundNormalStyles}
				}

				.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu:hover{
					${offCanvasPanelBoxShadowHoverCssValue ? `box-shadow: ${offCanvasPanelBoxShadowHoverCssValue};` : ''}
					${offCanvasPanelBorderHoverColor ? `border-color: ${offCanvasPanelBorderHoverColor};` : ''}
					${desktopBackgroundHoverStyles}
				}

				.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon{
					${offCanvasHamburgerIconBgWidth?.Desktop ? `width: ${offCanvasHamburgerIconBgWidth?.Desktop}${offCanvasHamburgerIconBgWidthUnits?.Desktop};` : ''}
					${offCanvasHamburgerIconBgWidth?.Desktop ? `height: ${offCanvasHamburgerIconBgWidth?.Desktop}${offCanvasHamburgerIconBgWidthUnits?.Desktop};` : ''}
					${offCanvashamburgerIconBgColor ? `background: ${offCanvashamburgerIconBgColor};` : ''}
					${offCanvashamburgerIconBorder ? `border: ${offCanvashamburgerIconBorder};` : ''}
					${offCanvashamburgerIconBorderColor ? `border-color: ${offCanvashamburgerIconBorderColor};` : ''}
					${offCanvashamburgerIconDesktopBorderWidthStr && offCanvashamburgerIconDesktopBorderWidth?.top ? `border-width: ${offCanvashamburgerIconDesktopBorderWidthStr};` : ''}
					${offCanvashamburgerIconDesktopBorderRadiusStr && offCanvashamburgerIconDesktopBorderRadiusWidth?.top ? `border-radius: ${offCanvashamburgerIconDesktopBorderRadiusStr};` : ''}
					${offCanvasHamburgerIconDesktopMarginWidth && offCanvasHamburgerIconDesktopMargin?.top ? `margin: ${offCanvasHamburgerIconDesktopMarginWidth};` : ''}
					${offCanvasHamburgerIconDesktopPaddingWidth && offCanvasHamburgerIconDesktopPadding?.top ? `padding: ${offCanvasHamburgerIconDesktopPaddingWidth};` : ''}
					transition: 0.3s all ease;
				}

				.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon:hover{
					${offCanvashamburgerIconBgHoverColor ? `background: ${offCanvashamburgerIconBgHoverColor};` : ''}
					${offCanvashamburgerIconBorderHoverColor ? `border-color: ${offCanvashamburgerIconBorderHoverColor};` : ''}
				}

				.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon svg{
					${offCanvasHamburgerIconWidth?.Desktop ? `width: ${offCanvasHamburgerIconWidth?.Desktop}${offCanvasHamburgerIconWidthUnits?.Desktop};` : ''}
					${offCanvasHamburgerIconWidth?.Desktop ? `height: ${offCanvasHamburgerIconWidth?.Desktop}${offCanvasHamburgerIconWidthUnits?.Desktop};` : ''}
					${offCanvashamburgerIconColor ? `fill: ${offCanvashamburgerIconColor};` : ''}
					transition: 0.3s all ease;
				}
				.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon:hover svg{
					${offCanvashamburgerIconHoverColor ? `fill: ${offCanvashamburgerIconHoverColor};` : ''}
				}
				.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-text{
					${menuOpenerTextGlobalTypoSwitcher?.fontFamily === true && menuOpenerTextGlobalTypographyData?.fontFamily ? `font-family: ${menuOpenerTextGlobalTypographyData?.fontFamily};` : ''}
					${menuOpenerTextGlobalTypoSwitcher?.fontSize === true && menuOpenerTextGlobalTypographyData?.fontSize ? `font-size: ${menuOpenerTextGlobalTypographyData?.fontSize};` : ''}
					${menuOpenerTextGlobalTypoSwitcher?.fontWeight === true && menuOpenerTextGlobalTypographyData?.fontWeight ? `font-weight: ${menuOpenerTextGlobalTypographyData?.fontWeight};` : ''}
					${menuOpenerTextGlobalTypoSwitcher?.fontStyle === true && menuOpenerTextGlobalTypographyData?.fontStyle ? `font-style: ${menuOpenerTextGlobalTypographyData?.fontStyle};` : ''}
					${menuOpenerTextGlobalTypoSwitcher?.textTransform === true && menuOpenerTextGlobalTypographyData?.textTransform ? `text-transform: ${menuOpenerTextGlobalTypographyData?.textTransform};` : ''}
					${menuOpenerTextGlobalTypoSwitcher?.textDecoration === true && menuOpenerTextGlobalTypographyData?.textDecoration ? `text-decoration: ${menuOpenerTextGlobalTypographyData?.textDecoration};` : ''}
					${menuOpenerTextGlobalTypoSwitcher?.letterSpacing === true && menuOpenerTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${menuOpenerTextGlobalTypographyData?.letterSpacing};` : ''}
					${menuOpenerTextGlobalTypoSwitcher?.lineHeight === true && menuOpenerTextGlobalTypographyData?.lineHeight ? `line-height: ${menuOpenerTextGlobalTypographyData?.lineHeight};` : ''}
					
					${menuOpenerTextGlobalTypoSwitcher?.fontFamily === false && menuOpenerTextFontFamily && menuOpenerTextFontFamily !== 'Default' ? `font-family: ${menuOpenerTextFontFamily};` : ''}
					${menuOpenerTextGlobalTypoSwitcher?.fontSize === false && menuOpenerTextFontSize?.Desktop && menuOpenerTextFontSizeUnits?.Desktop ? `font-size: ${menuOpenerTextFontSize?.Desktop}${menuOpenerTextFontSizeUnits?.Desktop};` : ''}
					${menuOpenerTextGlobalTypoSwitcher?.fontWeight === false && menuOpenerTextFontWeight ? `font-weight: ${menuOpenerTextFontWeight};` : ''}
					${menuOpenerTextGlobalTypoSwitcher?.fontStyle === false && menuOpenerTextFontStyle ? `font-style: ${menuOpenerTextFontStyle};` : ''}
					${menuOpenerTextGlobalTypoSwitcher?.textTransform === false && menuOpenerTextTextTransform ? `text-transform: ${menuOpenerTextTextTransform};` : ''}
					${menuOpenerTextGlobalTypoSwitcher?.textDecoration === false && menuOpenerTextTextDecoration ? `text-decoration: ${menuOpenerTextTextDecoration};` : ''}
					${menuOpenerTextGlobalTypoSwitcher?.letterSpacing === false && menuOpenerTextLetterSpacing?.Desktop && menuOpenerTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${menuOpenerTextLetterSpacing?.Desktop}${menuOpenerTextLetterSpacingUnits?.Desktop};` : ''}
					${menuOpenerTextGlobalTypoSwitcher?.lineHeight === false && menuOpenerTextLineHeight?.Desktop && menuOpenerTextLineHeightUnits?.Desktop ? `line-height: ${menuOpenerTextLineHeight?.Desktop}${menuOpenerTextLineHeightUnits?.Desktop};` : ''}
					${menuOpenerTextDesktopPaddingWidth && menuOpenerTextDesktopPadding?.top ? `padding: ${menuOpenerTextDesktopPaddingWidth};` : ''}
					${menuOpenerTextDesktopMarginWidth && menuOpenerTextDesktopMargin?.top ? `margin: ${menuOpenerTextDesktopMarginWidth};` : ''}
					${menuOpenerTextBorder ? `border: ${menuOpenerTextBorder};` : ''}
					${menuOpenerTextDesktopBorderWidth && menuOpenerTextDesktopBorder?.top ? `border-width: ${menuOpenerTextDesktopBorderWidth};` : ''}
					${menuOpenerTextDesktopBorderRadiusWidth && menuOpenerTextDesktopBorderRadius?.top ? `border-radius: ${menuOpenerTextDesktopBorderRadiusWidth};` : ''}
					${menuOpenerTextBorderColor ? `border-color: ${menuOpenerTextBorderColor};` : ''}
					${menuOpenerTextBoxShadowCssValue ? `box-shadow: ${menuOpenerTextBoxShadowCssValue};` : ''}
					${menuOpenerTextColor ? `color: ${menuOpenerTextColor};` : ''}
					${menuOpenerTextBgColor ? `background-color: ${menuOpenerTextBgColor};` : ''}
				}
				.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-text:hover{
					${menuOpenerTextHoverColor ? `color: ${menuOpenerTextHoverColor};` : ''}
					${menuOpenerTextBgHoverColor ? `background-color: ${menuOpenerTextBgHoverColor};` : ''}
					${menuOpenerTextBorderHoverColor ? `border-color: ${menuOpenerTextBorderHoverColor};` : ''}
					${menuOpenerTextBoxShadowHoverCssValue ? `box-shadow: ${menuOpenerTextBoxShadowHoverCssValue};` : ''}
				}
				.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.icon{
					${offCanvasCloseIconBgWidth?.Desktop ? `width: ${offCanvasCloseIconBgWidth?.Desktop}${offCanvasCloseIconBgWidthUnits?.Desktop};` : ''}
					${offCanvasCloseIconBgWidth?.Desktop ? `height: ${offCanvasCloseIconBgWidth?.Desktop}${offCanvasCloseIconBgWidthUnits?.Desktop};` : ''}
					${offCanvasCloseIconBgColor ? `background: ${offCanvasCloseIconBgColor};` : ''}
					${offCanvasCloseIconBorder ? `border: ${offCanvasCloseIconBorder};` : ''}
					${offCanvasCloseIconBorderColor ? `border-color: ${offCanvasCloseIconBorderColor};` : ''}
					${offCanvasCloseIconDesktopPaddingWidth && offCanvasCloseIconDesktopPadding?.top ? `padding: ${offCanvasCloseIconDesktopPaddingWidth};` : ''}
					${offCanvasCloseIconDesktopMarginWidth && offCanvasCloseIconDesktopMargin?.top ? `margin: ${offCanvasCloseIconDesktopMarginWidth};` : ''}
					${offCanvasCloseIconDesktopBorderWidthStr && offCanvasCloseIconDesktopBorderWidth?.top ? `border-width: ${offCanvasCloseIconDesktopBorderWidthStr};` : ''}
					${offCanvasCloseIconDesktopBorderRadiusStr && offCanvasCloseIconDesktopBorderRadiusWidth?.top ? `border-radius: ${offCanvasCloseIconDesktopBorderRadiusStr};` : ''}
					transition: 0.3s all ease;
				}
				.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.icon:hover{
					${offCanvasCloseIconBgHoverColor ? `background: ${offCanvasCloseIconBgHoverColor};` : ''}
					${offCanvasCloseIconBorderHoverColor ? `border-color: ${offCanvasCloseIconBorderHoverColor};` : ''}
				}
				.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.icon svg{
					${offCanvasCloseIconWidth?.Desktop ? `width: ${offCanvasCloseIconWidth?.Desktop}${offCanvasCloseIconWidthUnits?.Desktop};` : ''}
					${offCanvasCloseIconWidth?.Desktop ? `height: ${offCanvasCloseIconWidth?.Desktop}${offCanvasCloseIconWidthUnits?.Desktop};` : ''}
					${offCanvasCloseIconColor ? `fill: ${offCanvasCloseIconColor};` : ''}
					transition: 0.3s all ease;
				}
				.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.icon:hover svg{
					${offCanvasCloseIconHoverColor ? `fill: ${offCanvasCloseIconHoverColor};` : ''}
				}
				.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.text{
					${menuCloserTextGlobalTypoSwitcher?.fontFamily === true && menuCloserTextGlobalTypographyData?.fontFamily ? `font-family: ${menuCloserTextGlobalTypographyData?.fontFamily};` : ''}
					${menuCloserTextGlobalTypoSwitcher?.fontSize === true && menuCloserTextGlobalTypographyData?.fontSize ? `font-size: ${menuCloserTextGlobalTypographyData?.fontSize};` : ''}
					${menuCloserTextGlobalTypoSwitcher?.fontWeight === true && menuCloserTextGlobalTypographyData?.fontWeight ? `font-weight: ${menuCloserTextGlobalTypographyData?.fontWeight};` : ''}
					${menuCloserTextGlobalTypoSwitcher?.fontStyle === true && menuCloserTextGlobalTypographyData?.fontStyle ? `font-style: ${menuCloserTextGlobalTypographyData?.fontStyle};` : ''}
					${menuCloserTextGlobalTypoSwitcher?.textTransform === true && menuCloserTextGlobalTypographyData?.textTransform ? `text-transform: ${menuCloserTextGlobalTypographyData?.textTransform};` : ''}
					${menuCloserTextGlobalTypoSwitcher?.textDecoration === true && menuCloserTextGlobalTypographyData?.textDecoration ? `text-decoration: ${menuCloserTextGlobalTypographyData?.textDecoration};` : ''}
					${menuCloserTextGlobalTypoSwitcher?.letterSpacing === true && menuCloserTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${menuCloserTextGlobalTypographyData?.letterSpacing};` : ''}
					${menuCloserTextGlobalTypoSwitcher?.lineHeight === true && menuCloserTextGlobalTypographyData?.lineHeight ? `line-height: ${menuCloserTextGlobalTypographyData?.lineHeight};` : ''}
					
					${menuCloserTextGlobalTypoSwitcher?.fontFamily === false && menuCloserTextFontFamily && menuCloserTextFontFamily !== 'Default' ? `font-family: ${menuCloserTextFontFamily};` : ''}
					${menuCloserTextGlobalTypoSwitcher?.fontSize === false && menuCloserTextFontSize?.Desktop && menuCloserTextFontSizeUnits?.Desktop ? `font-size: ${menuCloserTextFontSize?.Desktop}${menuCloserTextFontSizeUnits?.Desktop};` : ''}
					${menuCloserTextGlobalTypoSwitcher?.fontWeight === false && menuCloserTextFontWeight ? `font-weight: ${menuCloserTextFontWeight};` : ''}
					${menuCloserTextGlobalTypoSwitcher?.fontStyle === false && menuCloserTextFontStyle ? `font-style: ${menuCloserTextFontStyle};` : ''}
					${menuCloserTextGlobalTypoSwitcher?.textTransform === false && menuCloserTextTextTransform ? `text-transform: ${menuCloserTextTextTransform};` : ''}
					${menuCloserTextGlobalTypoSwitcher?.textDecoration === false && menuCloserTextTextDecoration ? `text-decoration: ${menuCloserTextTextDecoration};` : ''}
					${menuCloserTextGlobalTypoSwitcher?.letterSpacing === false && menuCloserTextLetterSpacing?.Desktop && menuCloserTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${menuCloserTextLetterSpacing?.Desktop}${menuCloserTextLetterSpacingUnits?.Desktop};` : ''}
					${menuCloserTextGlobalTypoSwitcher?.lineHeight === false && menuCloserTextLineHeight?.Desktop && menuCloserTextLineHeightUnits?.Desktop ? `line-height: ${menuCloserTextLineHeight?.Desktop}${menuCloserTextLineHeightUnits?.Desktop};` : ''}
					
					${menuCloserTextBorder ? `border: ${menuCloserTextBorder};` : ''}
					${menuCloserTextBorderColor ? `border-color: ${menuCloserTextBorderColor};` : ''}
					${menuCloserTextDesktopPaddingWidth && menuCloserTextDesktopPadding?.top ? `padding: ${menuCloserTextDesktopPaddingWidth};` : ''}
					${menuCloserTextDesktopMarginWidth && menuCloserTextDesktopMargin?.top ? `margin: ${menuCloserTextDesktopMarginWidth};` : ''}
					${menuCloserTextDesktopBorderWidth && menuCloserTextDesktopBorder?.top ? `border-width: ${menuCloserTextDesktopBorderWidth};` : ''}
					${menuCloserTextDesktopBorderRadiusWidth && menuCloserTextDesktopBorderRadius?.top ? `border-radius: ${menuCloserTextDesktopBorderRadiusWidth};` : ''}
					${menuCloserTextBoxShadowCssValue ? `box-shadow: ${menuCloserTextBoxShadowCssValue};` : ''}
					${menuCloserTextColor ? `color: ${menuCloserTextColor};` : ''}
					${menuCloserTextBgColor ? `background-color: ${menuCloserTextBgColor};` : ''}
				}
				.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.text:hover{
					${menuCloserTextHoverColor ? `color: ${menuCloserTextHoverColor};` : ''}
					${menuCloserTextBgHoverColor ? `background-color: ${menuCloserTextBgHoverColor};` : ''}
					${menuCloserTextBorderHoverColor ? `border-color: ${menuCloserTextBorderHoverColor};` : ''}
					${menuCloserTextBoxShadowHoverCssValue ? `box-shadow: ${menuCloserTextBoxShadowHoverCssValue};` : ''}
				}	
				.${blockID}.fb-off-canvas-menu-block .fb-menu-overlay{
					${offCanvasOverlayColorType === 'gradient' ? `
						background: ${offCanvasOverlayCustomGradientColorSwitcher && offCanvasOverlayCustomGradientColor ? offCanvasOverlayCustomGradientColor : offCanvasOverlayGradientColor};
						${offCanvasOverlayCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
						${offCanvasOverlayGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
					` : ''}
						${offCanvasOverlayBgColorType === "gradient"
					? `background: ${offCanvasOverlayBackgroundCustomGradientColorSwitcher && offCanvasOverlayBackgroundCustomGradientColor
						? offCanvasOverlayBackgroundCustomGradientColor
						: offCanvasOverlayBackgroundGradientColor
					};`
					: offCanvasOverlayBackgroundColor ? `background: ${offCanvasOverlayBackgroundColor};` : ''
					}
				}
				.${blockID}.fb-off-canvas-menu-block .fb-menu-overlay.active{
					${offCanvasOverlayOpacity?.Desktop ? `opacity: ${offCanvasOverlayOpacity?.Desktop}${offCanvasOverlayOpacityUnits?.Desktop};` : ''}
				}
				.${blockID}.fb-off-canvas-menu-block .fb-menu-overlay:hover{
					${offCanvasOverlayHoverColorType === 'gradient' ? `
						background: ${offCanvasOverlayHoverCustomGradientColorSwitcher && offCanvasOverlayHoverCustomGradientColor ? offCanvasOverlayHoverCustomGradientColor : offCanvasOverlayHoverGradientColor};
						${offCanvasOverlayHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
						${offCanvasOverlayHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
					` : ''}
						${offCanvasOverlayHoverColorType === "gradient"
					? `background: ${offCanvasOverlayHoverCustomGradientColorSwitcher && offCanvasOverlayHoverCustomGradientColor
						? offCanvasOverlayHoverCustomGradientColor
						: offCanvasOverlayHoverGradientColor
					};`
					: offCanvasOverlayBackgroundHoverColor ? `background: ${offCanvasOverlayBackgroundHoverColor};` : ''
					}
				}
				@media only screen and (max-width: 1024px) {
					.${blockID}.fb-off-canvas-menu-block{
						${offCanvasGlobalZIndex?.Tablet ? `z-index: ${offCanvasGlobalZIndex?.Tablet};` : ''}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu{
						${offCanvasPanelWidth?.Tablet ? `width: ${offCanvasPanelWidth?.Tablet}${offCanvasPanelWidthUnits?.Tablet};` : ''}
						${offCanvasPanelHeight?.Tablet ? `height: ${offCanvasPanelHeight?.Tablet}${offCanvasPanelHeightUnits?.Tablet};` : ''}
						${offCanvasPanelTabletPaddingStr && offCanvasPanelTabPadding?.top ? `padding: ${offCanvasPanelTabletPaddingStr};` : ''}
						${offCanvasPanelTabletMarginStr && offCanvasPanelTabMargin?.top ? `margin: ${offCanvasPanelTabletMarginStr};` : ''}
						${offCanvasPanelTabletBorderWidthStr && offCanvasPanelTabBorderWidth?.top ? `border-width: ${offCanvasPanelTabletBorderWidthStr};` : ''}
						${offCanvasPanelTabletBorderRadiusStr && offCanvasPanelTabBorderRadiusWidth?.top ? `border-radius: ${offCanvasPanelTabletBorderRadiusStr};` : ''}
						${tabletBackgroundNormalStyles}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu:hover{
						${tabletBackgroundHoverStyles}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu-container{
						${tabletGlobalBackgroundNormalStyles}
						${globalTabletPadding && offCanvasGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
						${globalTabletMargin && offCanvasGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
						${offCanvasGlobalBorder ? `border: ${offCanvasGlobalBorder};` : ''}
						${globalTabletBorderWidth && offCanvasGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
						${globalTabletBorderRadiusWidth && offCanvasGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
					}
					.${blockID}.fb-off-canvas-menu-block:hover .fb-off-canvas-menu-container{
						${tabletGlobalBackgroundHoverStyles}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon{
						${offCanvasHamburgerIconBgWidth?.Tablet ? `width: ${offCanvasHamburgerIconBgWidth?.Tablet}${offCanvasHamburgerIconBgWidthUnits?.Tablet};` : ''}
						${offCanvasHamburgerIconBgWidth?.Tablet ? `height: ${offCanvasHamburgerIconBgWidth?.Tablet}${offCanvasHamburgerIconBgWidthUnits?.Tablet};` : ''}
						${offCanvashamburgerIconTabletBorderWidthStr && offCanvashamburgerIconTabBorderWidth?.top ? `border-width: ${offCanvashamburgerIconTabletBorderWidthStr};` : ''}
						${offCanvashamburgerIconTabletBorderRadiusStr && offCanvashamburgerIconTabBorderRadiusWidth?.top ? `border-radius: ${offCanvashamburgerIconTabletBorderRadiusStr};` : ''}
						${offCanvasHamburgerIconTabletMarginWidth && offCanvasHamburgerIconTabletMargin?.top ? `margin: ${offCanvasHamburgerIconTabletMarginWidth};` : ''}
						${offCanvasHamburgerIconTabletPaddingWidth && offCanvasHamburgerIconTabletPadding?.top ? `padding: ${offCanvasHamburgerIconTabletPaddingWidth};` : ''}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon svg{
						${offCanvasHamburgerIconWidth?.Tablet ? `width: ${offCanvasHamburgerIconWidth?.Tablet}${offCanvasHamburgerIconWidthUnits?.Tablet};` : ''}
						${offCanvasHamburgerIconWidth?.Tablet ? `height: ${offCanvasHamburgerIconWidth?.Tablet}${offCanvasHamburgerIconWidthUnits?.Tablet};` : ''}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-text{
						${menuOpenerTextTabletPaddingWidth && menuOpenerTextTabPadding?.top ? `padding: ${menuOpenerTextTabletPaddingWidth};` : ''}
						${menuOpenerTextTabletMarginWidth && menuOpenerTextTabMargin?.top ? `margin: ${menuOpenerTextTabletMarginWidth};` : ''}
						${menuOpenerTextTabletBorderWidth && menuOpenerTextTabletBorder?.top ? `border-width: ${menuOpenerTextTabletBorderWidth};` : ''}
						${menuOpenerTextTabletBorderRadiusWidth && menuOpenerTextTabBorderRadius?.top ? `border-radius: ${menuOpenerTextTabletBorderRadiusWidth};` : ''}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.icon{
						${offCanvasCloseIconBgWidth?.Tablet ? `width: ${offCanvasCloseIconBgWidth?.Tablet}${offCanvasCloseIconBgWidthUnits?.Tablet};` : ''}
						${offCanvasCloseIconBgWidth?.Tablet ? `height: ${offCanvasCloseIconBgWidth?.Tablet}${offCanvasCloseIconBgWidthUnits?.Tablet};` : ''}
						${offCanvasCloseIconTabletPaddingWidth && offCanvasCloseIconTabletPadding?.top ? `padding: ${offCanvasCloseIconTabletPaddingWidth};` : ''}
						${offCanvasCloseIconTabletMarginWidth && offCanvasCloseIconTabletMargin?.top ? `margin: ${offCanvasCloseIconTabletMarginWidth};` : ''}
						${offCanvasCloseIconTabletBorderWidthStr && offCanvasCloseIconTabBorderWidth?.top ? `border-width: ${offCanvasCloseIconTabletBorderWidthStr};` : ''}
						${offCanvasCloseIconTabletBorderRadiusStr && offCanvasCloseIconTabBorderRadiusWidth?.top ? `border-radius: ${offCanvasCloseIconTabletBorderRadiusStr};` : ''}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.text{
						${menuCloserTextTabletPaddingWidth && menuCloserTextTabPadding?.top ? `padding: ${menuCloserTextTabletPaddingWidth};` : ''}
						${menuCloserTextTabletMarginWidth && menuCloserTextTabMargin?.top ? `margin: ${menuCloserTextTabletMarginWidth};` : ''}
						${menuCloserTextTabletBorderWidth && menuCloserTextTabletBorder?.top ? `border-width: ${menuCloserTextTabletBorderWidth};` : ''}
						${menuCloserTextTabletBorderRadiusWidth && menuCloserTextTabBorderRadius?.top ? `border-radius: ${menuCloserTextTabletBorderRadiusWidth};` : ''}
					}
				}
	
				@media only screen and (max-width: 768px) {
					.${blockID}.fb-off-canvas-menu-block{
						${offCanvasGlobalZIndex?.Mobile ? `z-index: ${offCanvasGlobalZIndex?.Mobile};` : ''}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu{
						${offCanvasPanelWidth?.Mobile ? `width: ${offCanvasPanelWidth?.Mobile}${offCanvasPanelWidthUnits?.Mobile};` : ''}
						${offCanvasPanelHeight?.Mobile ? `height: ${offCanvasPanelHeight?.Mobile}${offCanvasPanelHeightUnits?.Mobile};` : ''}
						${offCanvasPanelMobilePaddingStr && offCanvasPanelMobilePadding?.top ? `padding: ${offCanvasPanelMobilePaddingStr};` : ''}
						${offCanvasPanelMobileMarginStr && offCanvasPanelMobileMargin?.top ? `margin: ${offCanvasPanelMobileMarginStr};` : ''}
						${offCanvasPanelMobileBorderWidthStr && offCanvasPanelMobileBorderWidth?.top ? `border-width: ${offCanvasPanelMobileBorderWidthStr};` : ''}
						${offCanvasPanelMobileBorderRadiusStr && offCanvasPanelMobileBorderRadiusWidth?.top ? `border-radius: ${offCanvasPanelMobileBorderRadiusStr};` : ''}
						${mobileBackgroundNormalStyles}

					}
					.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu:hover{
						${mobileBackgroundHoverStyles}
					}

					.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu-container{
						${mobileGlobalBackgroundNormalStyles}
						${globalMobilePadding && offCanvasGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
						${globalMobileMargin && offCanvasGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
						${offCanvasGlobalBorder ? `border: ${offCanvasGlobalBorder};` : ''}
						${globalMobileBorderWidth && offCanvasGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
						${globalMobileBorderRadiusWidth && offCanvasGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
					}
					.${blockID}.fb-off-canvas-menu-block:hover .fb-off-canvas-menu-container{
						${mobileGlobalBackgroundHoverStyles}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon{
						${offCanvasHamburgerIconBgWidth?.Mobile ? `width: ${offCanvasHamburgerIconBgWidth?.Mobile}${offCanvasHamburgerIconBgWidthUnits?.Mobile};` : ''}
						${offCanvasHamburgerIconBgWidth?.Mobile ? `height: ${offCanvasHamburgerIconBgWidth?.Mobile}${offCanvasHamburgerIconBgWidthUnits?.Mobile};` : ''}
						${offCanvashamburgerIconMobileBorderWidthStr && offCanvashamburgerIconMobileBorderWidth?.top ? `border-width: ${offCanvashamburgerIconMobileBorderWidthStr};` : ''}
						${offCanvashamburgerIconMobileBorderRadiusStr && offCanvashamburgerIconMobileBorderRadiusWidth?.top ? `border-radius: ${offCanvashamburgerIconMobileBorderRadiusStr};` : ''}
						${offCanvasHamburgerIconMobileMarginWidth && offCanvasHamburgerIconMobileMargin?.top ? `margin: ${offCanvasHamburgerIconMobileMarginWidth};` : ''}
						${offCanvasHamburgerIconMobilePaddingWidth && offCanvasHamburgerIconMobilePadding?.top ? `padding: ${offCanvasHamburgerIconMobilePaddingWidth};` : ''}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon svg{
						${offCanvasHamburgerIconWidth?.Mobile ? `width: ${offCanvasHamburgerIconWidth?.Mobile}${offCanvasHamburgerIconWidthUnits?.Mobile};` : ''}
						${offCanvasHamburgerIconWidth?.Mobile ? `height: ${offCanvasHamburgerIconWidth?.Mobile}${offCanvasHamburgerIconWidthUnits?.Mobile};` : ''}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-text{
						${menuOpenerTextMobilePaddingWidth && menuOpenerTextMobilePadding?.top ? `padding: ${menuOpenerTextMobilePaddingWidth};` : ''}
						${menuOpenerTextMobileMarginWidth && menuOpenerTextMobileMargin?.top ? `margin: ${menuOpenerTextMobileMarginWidth};` : ''}
						${menuOpenerTextMobileBorderWidth && menuOpenerTextMobileBorder?.top ? `border-width: ${menuOpenerTextMobileBorderWidth};` : ''}
						${menuOpenerTextMobileBorderRadiusWidth && menuOpenerTextMobileBorderRadius?.top ? `border-radius: ${menuOpenerTextMobileBorderRadiusWidth};` : ''}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.icon{
						${offCanvasCloseIconBgWidth?.Mobile ? `width: ${offCanvasCloseIconBgWidth?.Mobile}${offCanvasCloseIconBgWidthUnits?.Mobile};` : ''}
						${offCanvasCloseIconBgWidth?.Mobile ? `height: ${offCanvasCloseIconBgWidth?.Mobile}${offCanvasCloseIconBgWidthUnits?.Mobile};` : ''}
						${offCanvasCloseIconMobilePaddingWidth && offCanvasCloseIconMobilePadding?.top ? `padding: ${offCanvasCloseIconMobilePaddingWidth};` : ''}
						${offCanvasCloseIconMobileMarginWidth && offCanvasCloseIconMobileMargin?.top ? `margin: ${offCanvasCloseIconMobileMarginWidth};` : ''}
						${offCanvasCloseIconMobileBorderWidthStr && offCanvasCloseIconTabBorderWidth?.top ? `border-width: ${offCanvasCloseIconMobileBorderWidthStr};` : ''}
						${offCanvasCloseIconMobileBorderRadiusStr && offCanvasCloseIconTabBorderRadiusWidth?.top ? `border-radius: ${offCanvasCloseIconMobileBorderRadiusStr};` : ''}
					}
					.${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.text{
						${menuCloserTextMobilePaddingWidth && menuCloserTextMobilePadding?.top ? `padding: ${menuCloserTextMobilePaddingWidth};` : ''}
						${menuCloserTextMobileMarginWidth && menuCloserTextMobileMargin?.top ? `margin: ${menuCloserTextMobileMarginWidth};` : ''}
						${menuCloserTextMobileBorderWidth && menuCloserTextMobileBorder?.top ? `border-width: ${menuCloserTextMobileBorderWidth};` : ''}
						${menuCloserTextMobileBorderRadiusWidth && menuCloserTextMobileBorderRadius?.top ? `border-radius: ${menuCloserTextMobileBorderRadiusWidth};` : ''}
					}
				}
			`,
		[
			attributes
		],
	);

	const customCss = getCustomCss(offCanvasCustomCSS, `.${blockID}`);

	useEffect(() => {
		setAttributes({
			blockStyle: `${offCanvasStyle} ${customCss}`.replace(/\s+/g, " ").trim(),
		});
	}, [offCanvasStyle, customCss]);

	const generalControls = (
		<>
			<PanelBody title={__("Menu Opener", "frontis-blocks")} initialOpen={true}>

				<FB_SwitcherControl
					label={__("Menu Type", "frontis-blocks")}
					options={MENU_TYPE}
					globalSwitcher={menuType}
					setGlobalSwitcher={(value) => setAttributes({ menuType: value })}
				/>
				
				{(menuType === 'icon' || menuType === 'icon-text') && (
					<BaseControl>
						<FBIconPicker
							value={hamburgerIcon}
							setIconHandler={hamburgerIconHandler}
						/>
					</BaseControl>
				)}
				{(menuType === 'text' || menuType === 'icon-text') && (
					<BaseControl>
						<TextControl
							label={__("Text", "frontis-blocks")}
							value={hamburgerText}
							onChange={(value) => setAttributes({ hamburgerText: value })}
						/>
					</BaseControl>
				)}
				<BaseControl
					label={__("Select Pattern", "frontis-blocks")}
					help={__("Choose a block pattern to use as the content of your off-canvas menu", "frontis-blocks")}
				>
					<Select2
						className="fb-select2-control"
						options={patterns}
						value={patterns.find(option => option.value === selectedTemplate) || null}
						onChange={handlePatternChange}
						isOptionDisabled={(option) => option.isDisabled}
						placeholder={__("Select a pattern", "frontis-blocks")}
						styles={{
							menu: (base) => ({
								...base,
								zIndex: 9999,
							}),
						}}
					/>
				</BaseControl>
				<BaseControl
					label={__("Animation", "frontis-blocks")}
				>
					<Select2
						className="fb-select2-control"
						options={ANIMATION}
						value={ANIMATION.find(opt => opt.value === menuPosition) || null}
						onChange={(opt) => setAttributes({ menuPosition: opt?.value || '' })}
						styles={{
							menu: (base) => ({
								...base,
								zIndex: 9999,
							}),
						}}
					/>
				</BaseControl>
			</PanelBody>
			<PanelBody title={__("Closed Menu", "frontis-blocks")} initialOpen={false}>

				<FB_SwitcherControl
					label={__("Menu Type", "frontis-blocks")}
					options={MENU_TYPE}
					globalSwitcher={closeMenuType}
					setGlobalSwitcher={(value) => setAttributes({ closeMenuType: value })}
				/>

				{(closeMenuType === 'icon' || closeMenuType === 'icon-text') && (

					<BaseControl>
						<FBIconPicker
							value={closeMenuIcon}
							setIconHandler={closeMenuIconHandler}
						/>
					</BaseControl>

				)}
				{(closeMenuType === 'text' || closeMenuType === 'icon-text') && (

				<BaseControl>
					<TextControl
						label={__("Text", "frontis-blocks")}
						value={closeMenuText}
						onChange={(value) => setAttributes({ closeMenuText: value })}
					/>
				</BaseControl>
				)}
			</PanelBody>
		</>
	);

	const styleControls = (
		<>
			<PanelBody title={__("Off Canvas", "frontis-blocks")} initialOpen={true}>
				<FB_Range
					min={1}
					max={offCanvasPanelWidthUnits === '%' ? 100 : 2000}
					label={__("Panel Width", "frontis-blocks")}
					rangeValue={offCanvasPanelWidth}
					onChangeHandler={(value) => setAttributes({ offCanvasPanelWidth: value })}
					rangeUnitHandler={(value) => setAttributes({ offCanvasPanelWidthUnits: value })}
					deviceType={deviceType}
					units={offCanvasPanelWidthUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
				<FB_Range
					min={1}
					max={offCanvasPanelHeightUnits === '%' ? 100 : 2000}
					label={__("Panel Height", "frontis-blocks")}
					rangeValue={offCanvasPanelHeight}
					onChangeHandler={(value) => setAttributes({ offCanvasPanelHeight: value })}
					rangeUnitHandler={(value) => setAttributes({ offCanvasPanelHeightUnits: value })}
					deviceType={deviceType}
					units={offCanvasPanelHeightUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>

				<FB_SwitcherControl
					label={__("Background Type", "frontis-blocks")}
					globalSwitcher={offCanvasPanelBgColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ offCanvasPanelBgColorSwitcher: value })}
				/>

				{offCanvasPanelBgColorSwitcher === 'normal' && (
					<BaseControl
						className="fb-setting-background-color-setting-wrapper"
						label={__("Normal Background Type", "frontis-blocks")}
					>
						<Dropdown
							className="fb-setting-background-color-setting-icon-dropdown"
							contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
							popoverProps={{ placement: 'bottom-start' }}
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									variant="primary"
									onClick={onToggle}
									aria-expanded={isOpen}
									className="fb-setting-background-color-setting-icon-btn"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
										<path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
									</svg>
								</Button>
							)}
							renderContent={() => (
								<div className="fb-setting-background-color-popup-wrapper">
									<BaseControl
										className="fb-setting-background-color-popup-inner-wrapper"
									>
										<ButtonGroup className="fb-setting-background-color-panel-btn">
											{BACKGROUND_TYPES.map((item) => (
												<Button
													key={item.value}
													onClick={() => setAttributes({ offCanvasPanelBgNormalBackgroundType: item.value })}
													className={`fb-setting-background-color-panel-btn-switcher ${offCanvasPanelBgNormalBackgroundType === item.value ? 'active' : ''}`}
												>
													{item.label}
												</Button>
											))}
										</ButtonGroup>
									</BaseControl>

									{offCanvasPanelBgNormalBackgroundType === 'classic' && (

										<>
											<FB_ColorControl
												label={__("Color", "frontis-blocks")}
												globalColor={offCanvasPanelBgNormalClassicColor}
												setGlobalColor={(value) => setAttributes({ offCanvasPanelBgNormalClassicColor: value === undefined ? '' : value })}
											/>

											<FB_ResponsiveBackgroundImageControl
												deviceType={deviceType}
												globalBackgroundImageUrl={offCanvasPanelBgNormalBackgroundImageUrl}
												setGlobalBackgroundImageUrl={(value) => setAttributes({ offCanvasPanelBgNormalBackgroundImageUrl: value })}
												globalBackgroundImagePosition={offCanvasPanelBgNormalBackgroundImagePosition}
												setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ offCanvasPanelBgNormalBackgroundImagePosition: newPosition })}
												globalBackgroundImageAttachment={offCanvasPanelBgNormalBackgroundImageAttachment}
												setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ offCanvasPanelBgNormalBackgroundImageAttachment: newAttachment })}
												globalBackgroundImageRepeat={offCanvasPanelBgNormalBackgroundImageRepeat}
												setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ offCanvasPanelBgNormalBackgroundImageRepeat: newRepeat })}
												globalBackgroundImageSize={offCanvasPanelBgNormalBackgroundImageSize}
												setGlobalBackgroundImageSize={(newSize) => setAttributes({ offCanvasPanelBgNormalBackgroundImageSize: newSize })}
												setAttributes={setAttributes}
											/>

										</>
									)}

									{offCanvasPanelBgNormalBackgroundType === 'gradient' && (
										<FB_GradientColorControl
											globalCustomGradientSwitcher={offCanvasPanelBgNormalCustomGradientSwitcher}
											setGlobalCustomGradientSwitcher={(value) => setAttributes({ offCanvasPanelBgNormalCustomGradientSwitcher: value })}
											globalCustomGradientInputValue={offCanvasPanelBgNormalCustomGradientInputValue}
											setGlobalCustomGradientInputValue={(value) => setAttributes({ offCanvasPanelBgNormalCustomGradientInputValue: value })}
											globalGradientColor={offCanvasPanelBgNormalGradientColor}
											setGlobalGradientColor={(value) => setAttributes({ offCanvasPanelBgNormalGradientColor: value === undefined ? null : value })}
										/>
									)}
								</div>
							)}
						/>
					</BaseControl>

				)}

				{offCanvasPanelBgColorSwitcher === 'hover' && (
					<BaseControl
						className="fb-setting-background-color-setting-wrapper"
						label={__("Hover Background Type", "frontis-blocks")}
					>
						<Dropdown
							className="fb-setting-background-color-setting-icon-dropdown"
							contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
							popoverProps={{ placement: 'bottom-start' }}
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									variant="primary"
									onClick={onToggle}
									aria-expanded={isOpen}
									className="fb-setting-background-color-setting-icon-btn"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
										<path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
									</svg>
								</Button>
							)}
							renderContent={() => (
								<div className="fb-setting-background-color-popup-wrapper">
									<BaseControl
										className="fb-setting-background-color-popup-inner-wrapper"
									>
										<ButtonGroup className="fb-setting-background-color-panel-btn">
											{BACKGROUND_TYPES.map((item) => (
												<Button
													key={item.value}
													onClick={() => setAttributes({ offCanvasPanelBgHoverBackgroundType: item.value })}
													className={`fb-setting-background-color-panel-btn-switcher ${offCanvasPanelBgHoverBackgroundType === item.value ? 'active' : ''}`}
												>
													{item.label}
												</Button>
											))}
										</ButtonGroup>
									</BaseControl>

									{offCanvasPanelBgHoverBackgroundType === 'classic' && (

										<>
											<FB_ColorControl
												label={__("Color", "frontis-blocks")}
												globalColor={offCanvasPanelBgHoverClassicColor}
												setGlobalColor={(value) => setAttributes({ offCanvasPanelBgHoverClassicColor: value === undefined ? '' : value })}
											/>

											<FB_ResponsiveBackgroundImageControl
												deviceType={deviceType}
												globalBackgroundImageUrl={offCanvasPanelBgHoverBackgroundImageUrl}
												setGlobalBackgroundImageUrl={(value) => setAttributes({ offCanvasPanelBgHoverBackgroundImageUrl: value })}
												globalBackgroundImagePosition={offCanvasPanelBgHoverBackgroundImagePosition}
												setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ offCanvasPanelBgHoverBackgroundImagePosition: newPosition })}
												globalBackgroundImageAttachment={offCanvasPanelBgHoverBackgroundImageAttachment}
												setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ offCanvasPanelBgHoverBackgroundImageAttachment: newAttachment })}
												globalBackgroundImageRepeat={offCanvasPanelBgHoverBackgroundImageRepeat}
												setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ offCanvasPanelBgHoverBackgroundImageRepeat: newRepeat })}
												globalBackgroundImageSize={offCanvasPanelBgHoverBackgroundImageSize}
												setGlobalBackgroundImageSize={(newSize) => setAttributes({ offCanvasPanelBgHoverBackgroundImageSize: newSize })}
												setAttributes={setAttributes}
											/>

										</>
									)}

									{offCanvasPanelBgHoverBackgroundType === 'gradient' && (
										<FB_GradientColorControl
											globalCustomGradientSwitcher={offCanvasPanelBgHoverCustomGradientSwitcher}
											setGlobalCustomGradientSwitcher={(value) => setAttributes({ offCanvasPanelBgHoverCustomGradientSwitcher: value })}
											globalCustomGradientInputValue={offCanvasPanelBgHoverCustomGradientInputValue}
											setGlobalCustomGradientInputValue={(value) => setAttributes({ offCanvasPanelBgHoverCustomGradientInputValue: value })}
											globalGradientColor={offCanvasPanelBgHoverGradientColor}
											setGlobalGradientColor={(value) => setAttributes({ offCanvasPanelBgHoverGradientColor: value === undefined ? null : value })}
										/>
									)}
								</div>
							)}
						/>
					</BaseControl>
				)}
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleoffCanvasPanelPaddingUnitsHandler}
					spacingUnits={offCanvasPanelPaddingUnits}
					spacingDesktop={offCanvasPanelDesktopPadding}
					spacingTablet={offCanvasPanelTabPadding}
					spacingMobile={offCanvasPanelMobilePadding}
					handleSpacingUnitHandler={handleoffCanvasPanelPaddingUnitChange}
					spacingCombineBtn={offCanvasPanelPaddingLink}
					spacingCombineBtnHandler={handleoffCanvasPanelPaddingCombineBtn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleoffCanvasPanelMarginUnitsHandler}
					spacingUnits={offCanvasPanelMarginUnits}
					spacingDesktop={offCanvasPanelDesktopMargin}
					spacingTablet={offCanvasPanelTabMargin}
					spacingMobile={offCanvasPanelMobileMargin}
					handleSpacingUnitHandler={handleoffCanvasPanelMarginUnitChange}
					spacingCombineBtn={offCanvasPanelMarginLink}
					spacingCombineBtnHandler={handleoffCanvasPanelMarginCombineBtn}
					setAttributes={setAttributes}
				/>
				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={offCanvasPanelBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ offCanvasPanelBorder: value })}
				/>


				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={offCanvasPanelBorderColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ offCanvasPanelBorderColorSwitcher: value })}
				/>

				{offCanvasPanelBorderColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={offCanvasPanelBorderColor}
						setGlobalColor={(value) => setAttributes({ offCanvasPanelBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{offCanvasPanelBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={offCanvasPanelBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ offCanvasPanelBorderHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleoffCanvasPanelBorderUnitsChange}
					spacingUnits={offCanvasPanelBorderUnits}
					spacingDesktop={offCanvasPanelDesktopBorderWidth}
					spacingTablet={offCanvasPanelTabBorderWidth}
					spacingMobile={offCanvasPanelMobileBorderWidth}
					handleSpacingUnitHandler={handleoffCanvasPanelBorderWidthChange}
					spacingCombineBtn={offCanvasPanelBorderLink}
					spacingCombineBtnHandler={handleoffCanvasPanelBorderLinkToggle}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleoffCanvasPanelBorderRadiusUnitsChange}
					spacingUnits={offCanvasPanelBorderRadiusUnits}
					spacingDesktop={offCanvasPanelDesktopBorderRadiusWidth}
					spacingTablet={offCanvasPanelTabBorderRadiusWidth}
					spacingMobile={offCanvasPanelMobileBorderRadiusWidth}
					handleSpacingUnitHandler={handleoffCanvasPanelBorderRadiusChange}
					spacingCombineBtn={offCanvasPanelBorderRadiusLink}
					spacingCombineBtnHandler={handleoffCanvasPanelBorderRadiusLinkToggle}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Box Shadow", "frontis-blocks")}
					globalSwitcher={offCanvasPanelBoxShadowSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ offCanvasPanelBoxShadowSwitcher: value })}
				/>

				{offCanvasPanelBoxShadowSwitcher === 'normal' && (
					<FB_BoxShadowControl
						label={__("Normal Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) => setAttributes({ offCanvasPanelBoxShadowValues: value })}
						initialShadowValue={offCanvasPanelBoxShadowValues}
						onBoxShadowStyleChange={(value) => setAttributes({ offCanvasPanelBoxShadowCssValue: value })}
					/>
				)}

				{offCanvasPanelBoxShadowSwitcher === 'hover' && (
					<FB_BoxShadowControl
						label={__("Hover Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) => setAttributes({ offCanvasPanelBoxShadowHoverValues: value })}
						initialShadowValue={offCanvasPanelBoxShadowHoverValues}
						onBoxShadowStyleChange={(value) => setAttributes({ offCanvasPanelBoxShadowHoverCssValue: value })}
					/>
				)}
			</PanelBody>

			{(menuType === 'icon' || menuType === 'icon-text') && (
				<PanelBody title={__("Icon", "frontis-blocks")} initialOpen={false}>
					<FB_SwitcherControl
						label={__("Icon Type", "frontis-blocks")}
						globalSwitcher={menuIconTypeSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ menuIconTypeSwitcher: value })}
						options={[
							{ label: __('Opener', 'frontis-blocks'), value: 'opener' },
							{ label: __('Closer', 'frontis-blocks'), value: 'closer' },
						]
						}
					/>

					{menuIconTypeSwitcher === 'opener' && (
						<>
							<FB_Range
								min={1}
								max={offCanvasHamburgerIconWidthUnits === '%' ? 100 : 500}
								label={__("Icon Size", "frontis-blocks")}
								rangeValue={offCanvasHamburgerIconWidth}
								onChangeHandler={(value) => setAttributes({ offCanvasHamburgerIconWidth: value })}
								rangeUnitHandler={(value) => setAttributes({ offCanvasHamburgerIconWidthUnits: value })}
								deviceType={deviceType}
								units={offCanvasHamburgerIconWidthUnits}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
							/>

							<FB_Range
								min={1}
								max={offCanvasHamburgerIconBgWidthUnits === '%' ? 100 : 500}
								label={__("Background Size", "frontis-blocks")}
								rangeValue={offCanvasHamburgerIconBgWidth}
								onChangeHandler={(value) => setAttributes({ offCanvasHamburgerIconBgWidth: value })}
								rangeUnitHandler={(value) => setAttributes({ offCanvasHamburgerIconBgWidthUnits: value })}
								deviceType={deviceType}
								units={offCanvasHamburgerIconBgWidthUnits}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
							/>

							<FB_SwitcherControl
								label={__("Icon Color", "frontis-blocks")}
								globalSwitcher={offCanvashamburgerIconColorSwitcher}
								setGlobalSwitcher={(value) => setAttributes({ offCanvashamburgerIconColorSwitcher: value })}
							/>

							{offCanvashamburgerIconColorSwitcher === 'normal' && (
								<FB_ColorControl
									label={__("Normal Color", "frontis-blocks")}
									globalColor={offCanvashamburgerIconColor}
									setGlobalColor={(value) => setAttributes({ offCanvashamburgerIconColor: value === undefined ? '' : value })}
								/>
							)}

							{offCanvashamburgerIconColorSwitcher === 'hover' && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={offCanvashamburgerIconHoverColor}
									setGlobalColor={(value) => setAttributes({ offCanvashamburgerIconHoverColor: value === undefined ? '' : value })}
								/>
							)}

							<FB_SwitcherControl
								label={__("Background Color", "frontis-blocks")}
								globalSwitcher={offCanvashamburgerIconBgColorSwitcher}
								setGlobalSwitcher={(value) => setAttributes({ offCanvashamburgerIconBgColorSwitcher: value })}
							/>

							{offCanvashamburgerIconBgColorSwitcher === 'normal' && (
								<FB_ColorControl
									label={__("Normal Color", "frontis-blocks")}
									globalColor={offCanvashamburgerIconBgColor}
									setGlobalColor={(value) => setAttributes({ offCanvashamburgerIconBgColor: value === undefined ? '' : value })}
								/>
							)}

							{offCanvashamburgerIconBgColorSwitcher === 'hover' && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={offCanvashamburgerIconBgHoverColor}
									setGlobalColor={(value) => setAttributes({ offCanvashamburgerIconBgHoverColor: value === undefined ? '' : value })}
								/>
							)}

							<FB_Spacing
								label={__("Padding", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={offCanvasHamburgerIconPaddingUnitsHandler}
								spacingUnits={offCanvasHamburgerIconPaddingUnits}
								spacingDesktop={offCanvasHamburgerIconDesktopPadding}
								spacingTablet={offCanvasHamburgerIconTabletPadding}
								spacingMobile={offCanvasHamburgerIconMobilePadding}
								handleSpacingUnitHandler={offCanvasHamburgerIconPaddingUnitsChange}
								spacingCombineBtn={offCanvasHamburgerIconPaddingLink}
								spacingCombineBtnHandler={offCanvasHamburgerIconPaddingLinkBtn}
								setAttributes={setAttributes}
							/>
							<FB_Spacing
								label={__("Margin", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={offCanvasHamburgerIconMarginUnitsHandler}
								spacingUnits={offCanvasHamburgerIconMarginUnits}
								spacingDesktop={offCanvasHamburgerIconDesktopMargin}
								spacingTablet={offCanvasHamburgerIconTabletMargin}
								spacingMobile={offCanvasHamburgerIconMobileMargin}
								handleSpacingUnitHandler={offCanvasHamburgerIconMarginUnitsChange}
								spacingCombineBtn={offCanvasHamburgerIconMarginLink}
								spacingCombineBtnHandler={offCanvasHamburgerIconMarginLinkBtn}
								setAttributes={setAttributes}
							/>
							<SelectControl
								label={__("Border Style", "frontis-blocks")}
								value={offCanvashamburgerIconBorder}
								options={BORDER_STYLES}
								onChange={(value) => setAttributes({ offCanvashamburgerIconBorder: value })}
							/>

							<FB_SwitcherControl
								label={__("Border Color", "frontis-blocks")}
								globalSwitcher={offCanvashamburgerIconBorderColorSwitcher}
								setGlobalSwitcher={(value) => setAttributes({ offCanvashamburgerIconBorderColorSwitcher: value })}
							/>

							{offCanvashamburgerIconBorderColorSwitcher === 'normal' && (
								<FB_ColorControl
									label={__("Normal Color", "frontis-blocks")}
									globalColor={offCanvashamburgerIconBorderColor}
									setGlobalColor={(value) => setAttributes({ offCanvashamburgerIconBorderColor: value === undefined ? '' : value })}
								/>
							)}

							{offCanvashamburgerIconBorderColorSwitcher === 'hover' && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={offCanvashamburgerIconBorderHoverColor}
									setGlobalColor={(value) => setAttributes({ offCanvashamburgerIconBorderHoverColor: value === undefined ? '' : value })}
								/>
							)}

							<FB_Spacing
								label={__("Border", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={handleoffCanvashamburgerIconBorderUnitsChange}
								spacingUnits={offCanvashamburgerIconBorderUnits}
								spacingDesktop={offCanvashamburgerIconDesktopBorderWidth}
								spacingTablet={offCanvashamburgerIconTabBorderWidth}
								spacingMobile={offCanvashamburgerIconMobileBorderWidth}
								handleSpacingUnitHandler={handleoffCanvashamburgerIconBorderWidthChange}
								spacingCombineBtn={offCanvashamburgerIconBorderLink}
								spacingCombineBtnHandler={handleoffCanvashamburgerIconBorderLinkToggle}
								setAttributes={setAttributes}
							/>
							<FB_Spacing
								label={__("Border Radius", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={handleoffCanvashamburgerIconBorderRadiusUnitsChange}
								spacingUnits={offCanvashamburgerIconBorderRadiusUnits}
								spacingDesktop={offCanvashamburgerIconDesktopBorderRadiusWidth}
								spacingTablet={offCanvashamburgerIconTabBorderRadiusWidth}
								spacingMobile={offCanvashamburgerIconMobileBorderRadiusWidth}
								handleSpacingUnitHandler={handleoffCanvashamburgerIconBorderRadiusChange}
								spacingCombineBtn={offCanvashamburgerIconBorderRadiusLink}
								spacingCombineBtnHandler={handleoffCanvashamburgerIconBorderRadiusLinkToggle}
								setAttributes={setAttributes}
							/>
						</>
					)}

					{menuIconTypeSwitcher === 'closer' && (
						<>
							<FB_Range
								min={1}
								max={offCanvasCloseIconWidthUnits === '%' ? 100 : 500}
								label={__("Icon Size", "frontis-blocks")}
								rangeValue={offCanvasCloseIconWidth}
								onChangeHandler={(value) => setAttributes({ offCanvasCloseIconWidth: value })}
								rangeUnitHandler={(value) => setAttributes({ offCanvasCloseIconWidthUnits: value })}
								deviceType={deviceType}
								units={offCanvasCloseIconWidthUnits}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
							/>

							<FB_Range
								min={1}
								max={offCanvasCloseIconBgWidthUnits === '%' ? 100 : 500}
								label={__("Background Size", "frontis-blocks")}
								rangeValue={offCanvasCloseIconBgWidth}
								onChangeHandler={(value) => setAttributes({ offCanvasCloseIconBgWidth: value })}
								rangeUnitHandler={(value) => setAttributes({ offCanvasCloseIconBgWidthUnits: value })}
								deviceType={deviceType}
								units={offCanvasCloseIconBgWidthUnits}
								setAttributes={setAttributes}
								rangeStep={1}
								resetFallbackValue={""}
							/>

							<FB_SwitcherControl
								label={__("Icon Color", "frontis-blocks")}
								globalSwitcher={offCanvasCloseIconColorSwitcher}
								setGlobalSwitcher={(value) => setAttributes({ offCanvasCloseIconColorSwitcher: value })}
							/>

							{offCanvasCloseIconColorSwitcher === 'normal' && (
								<FB_ColorControl
									label={__("Normal Color", "frontis-blocks")}
									globalColor={offCanvasCloseIconColor}
									setGlobalColor={(value) => setAttributes({ offCanvasCloseIconColor: value === undefined ? '' : value })}
								/>
							)}

							{offCanvasCloseIconColorSwitcher === 'hover' && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={offCanvasCloseIconHoverColor}
									setGlobalColor={(value) => setAttributes({ offCanvasCloseIconHoverColor: value === undefined ? '' : value })}
								/>
							)}

							<FB_SwitcherControl
								label={__("Background Color", "frontis-blocks")}
								globalSwitcher={offCanvasCloseIconBgColorSwitcher}
								setGlobalSwitcher={(value) => setAttributes({ offCanvasCloseIconBgColorSwitcher: value })}
							/>

							{offCanvasCloseIconBgColorSwitcher === 'normal' && (
								<FB_ColorControl
									label={__("Normal Color", "frontis-blocks")}
									globalColor={offCanvasCloseIconBgColor}
									setGlobalColor={(value) => setAttributes({ offCanvasCloseIconBgColor: value === undefined ? '' : value })}
								/>
							)}

							{offCanvasCloseIconBgColorSwitcher === 'hover' && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={offCanvasCloseIconBgHoverColor}
									setGlobalColor={(value) => setAttributes({ offCanvasCloseIconBgHoverColor: value === undefined ? '' : value })}
								/>
							)}

							<FB_Spacing
								label={__("Padding", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={offCanvasCloseIconPaddingUnitsHandler}
								spacingUnits={offCanvasCloseIconPaddingUnits}
								spacingDesktop={offCanvasCloseIconDesktopPadding}
								spacingTablet={offCanvasCloseIconTabletPadding}
								spacingMobile={offCanvasCloseIconMobilePadding}
								handleSpacingUnitHandler={offCanvasCloseIconPaddingUnitsChange}
								spacingCombineBtn={offCanvasCloseIconPaddingLink}
								spacingCombineBtnHandler={offCanvasCloseIconPaddingLinkBtn}
								setAttributes={setAttributes}
							/>
							<FB_Spacing
								label={__("Margin", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={offCanvasCloseIconMarginUnitsHandler}
								spacingUnits={offCanvasCloseIconMarginUnits}
								spacingDesktop={offCanvasCloseIconDesktopMargin}
								spacingTablet={offCanvasCloseIconTabletMargin}
								spacingMobile={offCanvasCloseIconMobileMargin}
								handleSpacingUnitHandler={offCanvasCloseIconMarginUnitsChange}
								spacingCombineBtn={offCanvasCloseIconMarginLink}
								spacingCombineBtnHandler={offCanvasCloseIconMarginLinkBtn}
								setAttributes={setAttributes}
							/>
							<SelectControl
								label={__("Border Style", "frontis-blocks")}
								value={offCanvasCloseIconBorder}
								options={BORDER_STYLES}
								onChange={(value) => setAttributes({ offCanvasCloseIconBorder: value })}
							/>

							<FB_SwitcherControl
								label={__("Border Color", "frontis-blocks")}
								globalSwitcher={offCanvasCloseIconBorderColorSwitcher}
								setGlobalSwitcher={(value) => setAttributes({ offCanvasCloseIconBorderColorSwitcher: value })}
							/>

							{offCanvasCloseIconBorderColorSwitcher === 'normal' && (
								<FB_ColorControl
									label={__("Normal Color", "frontis-blocks")}
									globalColor={offCanvasCloseIconBorderColor}
									setGlobalColor={(value) => setAttributes({ offCanvasCloseIconBorderColor: value === undefined ? '' : value })}
								/>
							)}

							{offCanvasCloseIconBorderColorSwitcher === 'hover' && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={offCanvasCloseIconBorderHoverColor}
									setGlobalColor={(value) => setAttributes({ offCanvasCloseIconBorderHoverColor: value === undefined ? '' : value })}
								/>
							)}

							<FB_Spacing
								label={__("Border", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={handleoffCanvasCloseIconBorderUnitsChange}
								spacingUnits={offCanvasCloseIconBorderUnits}
								spacingDesktop={offCanvasCloseIconDesktopBorderWidth}
								spacingTablet={offCanvasCloseIconTabBorderWidth}
								spacingMobile={offCanvasCloseIconMobileBorderWidth}
								handleSpacingUnitHandler={handleoffCanvasCloseIconBorderWidthChange}
								spacingCombineBtn={offCanvasCloseIconBorderLink}
								spacingCombineBtnHandler={handleoffCanvasCloseIconBorderLinkToggle}
								setAttributes={setAttributes}
							/>
							<FB_Spacing
								label={__("Border Radius", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={handleoffCanvasCloseIconBorderRadiusUnitsChange}
								spacingUnits={offCanvasCloseIconBorderRadiusUnits}
								spacingDesktop={offCanvasCloseIconDesktopBorderRadiusWidth}
								spacingTablet={offCanvasCloseIconTabBorderRadiusWidth}
								spacingMobile={offCanvasCloseIconMobileBorderRadiusWidth}
								handleSpacingUnitHandler={handleoffCanvasCloseIconBorderRadiusChange}
								spacingCombineBtn={offCanvasCloseIconBorderRadiusLink}
								spacingCombineBtnHandler={handleoffCanvasCloseIconBorderRadiusLinkToggle}
								setAttributes={setAttributes}
							/>
						</>
					)}
				</PanelBody>
			)}

			{(menuType === 'text' || menuType === 'icon-text') && (
				<PanelBody title={__("Text", "frontis-blocks")} initialOpen={false}>
					<FB_SwitcherControl
						label={__("Text Type", "frontis-blocks")}
						globalSwitcher={menuTextTypeSwitcher}
						setGlobalSwitcher={(value) => setAttributes({ menuTextTypeSwitcher: value })}
						options={[
							{ label: __('Opener', 'frontis-blocks'), value: 'opener' },
							{ label: __('Closer', 'frontis-blocks'), value: 'closer' },
						]
						}
					/>

					{menuTextTypeSwitcher === 'opener' && (
						<>
							<FB_TypographyControl
								globalTypoControlActive={true}
								globalTypoSwitcher={menuOpenerTextGlobalTypoSwitcher}
								storeGlobalTypographyData={(value) => setAttributes({ menuOpenerTextGlobalTypographyData: value })}

								globalTypoType={menuOpenerTextGlobalTypoType}
								onChangeGlobalTypoType={(value) => {
									setAttributes({
										menuOpenerTextGlobalTypoType: value,
										menuOpenerTextGlobalTypoSwitcher: value === 'default' ? { ...menuOpenerTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...menuOpenerTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
									})
								}}

								globalTypoOption={menuOpenerTextGlobalTypoOption}
								onChangeGlobalTypoOption={(value) => setAttributes({ menuOpenerTextGlobalTypoOption: value })}

								fontFamily={menuOpenerTextFontFamily}
								onChangeFontFamily={(value) => setAttributes({ menuOpenerTextFontFamily: value, menuOpenerTextGlobalTypoSwitcher: { ...menuOpenerTextGlobalTypoSwitcher, fontFamily: value && false } })}

								fontSize={menuOpenerTextFontSize}
								onChangeFontSize={(value) => setAttributes({ menuOpenerTextFontSize: value, menuOpenerTextGlobalTypoSwitcher: { ...menuOpenerTextGlobalTypoSwitcher, fontSize: value && false } })}

								fontSizeUnits={menuOpenerTextFontSizeUnits}
								onChangeFontSizeUnit={(value) => setAttributes({ menuOpenerTextFontSizeUnits: value })}

								fontWeight={menuOpenerTextFontWeight}
								onChangeFontWeight={(value) => setAttributes({ menuOpenerTextFontWeight: value, menuOpenerTextGlobalTypoSwitcher: { ...menuOpenerTextGlobalTypoSwitcher, fontWeight: value && false } })}

								fontStyle={menuOpenerTextFontStyle}
								onChangeFontStyle={(value) => setAttributes({ menuOpenerTextFontStyle: value, menuOpenerTextGlobalTypoSwitcher: { ...menuOpenerTextGlobalTypoSwitcher, fontStyle: value && false } })}

								textTransform={menuOpenerTextTextTransform}
								onChangeTextTransform={(value) => setAttributes({ menuOpenerTextTextTransform: value, menuOpenerTextGlobalTypoSwitcher: { ...menuOpenerTextGlobalTypoSwitcher, textTransform: value && false } })}

								textDecoration={menuOpenerTextTextDecoration}
								onChangeTextDecoration={(value) => setAttributes({ menuOpenerTextTextDecoration: value, menuOpenerTextGlobalTypoSwitcher: { ...menuOpenerTextGlobalTypoSwitcher, textDecoration: value && false } })}

								letterSpacing={menuOpenerTextLetterSpacing}
								onChangeLetterSpacing={(value) => setAttributes({ menuOpenerTextLetterSpacing: value, menuOpenerTextGlobalTypoSwitcher: { ...menuOpenerTextGlobalTypoSwitcher, letterSpacing: value && false } })}

								letterSpacingUnits={menuOpenerTextLetterSpacingUnits}
								onChangeLetterSpacingUnit={(value) => setAttributes({ menuOpenerTextLetterSpacingUnits: value })}

								lineHeight={menuOpenerTextLineHeight}
								onChangeLineHeight={(value) => setAttributes({ menuOpenerTextLineHeight: value, menuOpenerTextGlobalTypoSwitcher: { ...menuOpenerTextGlobalTypoSwitcher, lineHeight: value && false } })}

								lineHeightUnits={menuOpenerTextLineHeightUnits}
								onChangeLineHeightUnit={(value) => setAttributes({ menuOpenerTextLineHeightUnits: value })}

								deviceType={deviceType}
								setAttributes={setAttributes}
							/>

							<FB_SwitcherControl
								label={__("Color", "frontis-blocks")}
								globalSwitcher={menuOpenerTextColorSwitcher}
								setGlobalSwitcher={(value) => setAttributes({ menuOpenerTextColorSwitcher: value })}
							/>

							{menuOpenerTextColorSwitcher === 'normal' && (
								<FB_ColorControl
									label={__("Normal Color", "frontis-blocks")}
									globalColor={menuOpenerTextColor}
									setGlobalColor={(value) => setAttributes({ menuOpenerTextColor: value === undefined ? '' : value })}
								/>
							)}

							{menuOpenerTextColorSwitcher === 'hover' && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={menuOpenerTextHoverColor}
									setGlobalColor={(value) => setAttributes({ menuOpenerTextHoverColor: value === undefined ? '' : value })}
								/>
							)}
							<FB_SwitcherControl
								label={__("Background Color", "frontis-blocks")}
								globalSwitcher={menuOpenerTextBgColorSwitcher}
								setGlobalSwitcher={(value) => setAttributes({ menuOpenerTextBgColorSwitcher: value })}
							/>

							{menuOpenerTextBgColorSwitcher === 'normal' && (
								<FB_ColorControl
									label={__("Normal Color", "frontis-blocks")}
									globalColor={menuOpenerTextBgColor}
									setGlobalColor={(value) => setAttributes({ menuOpenerTextBgColor: value === undefined ? '' : value })}
								/>
							)}

							{menuOpenerTextBgColorSwitcher === 'hover' && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={menuOpenerTextBgHoverColor}
									setGlobalColor={(value) => setAttributes({ menuOpenerTextBgHoverColor: value === undefined ? '' : value })}
								/>
							)}

							<SelectControl
								label={__("Border Style", "frontis-blocks")}
								value={menuOpenerTextBorder}
								options={BORDER_STYLES}
								onChange={(value) => setAttributes({ menuOpenerTextBorder: value })}
							/>

							<FB_SwitcherControl
								label={__("Color", "frontis-blocks")}
								globalSwitcher={menuOpenerTextBorderColorSwitcher}
								setGlobalSwitcher={(value) => setAttributes({ menuOpenerTextBorderColorSwitcher: value })}
							/>

							{menuOpenerTextBorderColorSwitcher === 'normal' && (
								<FB_ColorControl
									label={__("Normal Color", "frontis-blocks")}
									globalColor={menuOpenerTextBorderColor}
									setGlobalColor={(value) => setAttributes({ menuOpenerTextBorderColor: value === undefined ? '' : value })}
								/>
							)}

							{menuOpenerTextBorderColorSwitcher === 'hover' && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={menuOpenerTextBorderHoverColor}
									setGlobalColor={(value) => setAttributes({ menuOpenerTextBorderHoverColor: value === undefined ? '' : value })}
								/>
							)}

							<FB_Spacing
								label={__("Border", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={menuOpenerTextBorderUnitsHandler}
								spacingUnits={menuOpenerTextBorderUnits}
								spacingDesktop={menuOpenerTextDesktopBorder}
								spacingTablet={menuOpenerTextTabletBorder}
								spacingMobile={menuOpenerTextMobileBorder}
								handleSpacingUnitHandler={menuOpenerTextBorderUnitsChange}
								spacingCombineBtn={menuOpenerTextBorderLink}
								spacingCombineBtnHandler={menuOpenerTextBorderLinkBtn}
								setAttributes={setAttributes}
							/>
							<FB_Spacing
								label={__("Border Radius", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={menuOpenerTextBorderRadiusUnitsHandler}
								spacingUnits={menuOpenerTextBorderRadiusUnits}
								spacingDesktop={menuOpenerTextDesktopBorderRadius}
								spacingTablet={menuOpenerTextTabBorderRadius}
								spacingMobile={menuOpenerTextMobileBorderRadius}
								handleSpacingUnitHandler={menuOpenerTextBorderRadiusUnitsChange}
								spacingCombineBtn={menuOpenerTextBorderRadiusLink}
								spacingCombineBtnHandler={menuOpenerTextBorderRadiusLinkBtn}
								setAttributes={setAttributes}
							/>



							<FB_SwitcherControl
								label={__("Box Shadow ", "frontis-blocks")}
								globalSwitcher={menuOpenerTextBoxShadowSwitcher}
								setGlobalSwitcher={(value) => setAttributes({ menuOpenerTextBoxShadowSwitcher: value })}
							/>

							{menuOpenerTextBoxShadowSwitcher === 'normal' && (
								<FB_BoxShadowControl
									label={__("Normal Shadow", "frontis-blocks")}
									onBoxShadowChange={(value) => setAttributes({ menuOpenerTextBoxShadowValues: value })}
									initialShadowValue={menuOpenerTextBoxShadowValues}
									onBoxShadowStyleChange={(value) => setAttributes({ menuOpenerTextBoxShadowCssValue: value })}
								/>
							)}

							{menuOpenerTextBoxShadowSwitcher === 'hover' && (
								<FB_BoxShadowControl
									label={__("Hover Shadow", "frontis-blocks")}
									onBoxShadowChange={(value) => setAttributes({ menuOpenerTextBoxShadowHoverValues: value })}
									initialShadowValue={menuOpenerTextBoxShadowHoverValues}
									onBoxShadowStyleChange={(value) => setAttributes({ menuOpenerTextBoxShadowHoverCssValue: value })}
								/>
							)}


							<FB_Spacing
								label={__("Padding", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={menuOpenerTextPaddingUnitsHandler}
								spacingUnits={menuOpenerTextPaddingUnits}
								spacingDesktop={menuOpenerTextDesktopPadding}
								spacingTablet={menuOpenerTextTabPadding}
								spacingMobile={menuOpenerTextMobilePadding}
								handleSpacingUnitHandler={menuOpenerTextPaddingUnitsChange}
								spacingCombineBtn={menuOpenerTextPaddingLink}
								spacingCombineBtnHandler={menuOpenerTextPaddingLinkBtn}
								setAttributes={setAttributes}
							/>
							<FB_Spacing
								label={__("Margin", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={menuOpenerTextMarginUnitsHandler}
								spacingUnits={menuOpenerTextMarginUnits}
								spacingDesktop={menuOpenerTextDesktopMargin}
								spacingTablet={menuOpenerTextTabMargin}
								spacingMobile={menuOpenerTextMobileMargin}
								handleSpacingUnitHandler={menuOpenerTextMarginUnitsChange}
								spacingCombineBtn={menuOpenerTextMarginLink}
								spacingCombineBtnHandler={menuOpenerTextMarginLinkBtn}
								setAttributes={setAttributes}
							/>
						</>
					)}

					{menuTextTypeSwitcher === 'closer' && (
						<>
							<FB_TypographyControl
								globalTypoControlActive={true}
								globalTypoSwitcher={menuCloserTextGlobalTypoSwitcher}
								storeGlobalTypographyData={(value) => setAttributes({ menuCloserTextGlobalTypographyData: value })}

								globalTypoType={menuCloserTextGlobalTypoType}
								onChangeGlobalTypoType={(value) => {
									setAttributes({
										menuCloserTextGlobalTypoType: value,
										menuCloserTextGlobalTypoSwitcher: value === 'default' ? { ...menuCloserTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...menuCloserTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
									})
								}}

								globalTypoOption={menuCloserTextGlobalTypoOption}
								onChangeGlobalTypoOption={(value) => setAttributes({ menuCloserTextGlobalTypoOption: value })}

								fontFamily={menuCloserTextFontFamily}
								onChangeFontFamily={(value) => setAttributes({ menuCloserTextFontFamily: value, menuCloserTextGlobalTypoSwitcher: { ...menuCloserTextGlobalTypoSwitcher, fontFamily: value && false } })}

								fontSize={menuCloserTextFontSize}
								onChangeFontSize={(value) => setAttributes({ menuCloserTextFontSize: value, menuCloserTextGlobalTypoSwitcher: { ...menuCloserTextGlobalTypoSwitcher, fontSize: value && false } })}

								fontSizeUnits={menuCloserTextFontSizeUnits}
								onChangeFontSizeUnit={(value) => setAttributes({ menuCloserTextFontSizeUnits: value })}

								fontWeight={menuCloserTextFontWeight}
								onChangeFontWeight={(value) => setAttributes({ menuCloserTextFontWeight: value, menuCloserTextGlobalTypoSwitcher: { ...menuCloserTextGlobalTypoSwitcher, fontWeight: value && false } })}

								fontStyle={menuCloserTextFontStyle}
								onChangeFontStyle={(value) => setAttributes({ menuCloserTextFontStyle: value, menuCloserTextGlobalTypoSwitcher: { ...menuCloserTextGlobalTypoSwitcher, fontStyle: value && false } })}

								textTransform={menuCloserTextTextTransform}
								onChangeTextTransform={(value) => setAttributes({ menuCloserTextTextTransform: value, menuCloserTextGlobalTypoSwitcher: { ...menuCloserTextGlobalTypoSwitcher, textTransform: value && false } })}

								textDecoration={menuCloserTextTextDecoration}
								onChangeTextDecoration={(value) => setAttributes({ menuCloserTextTextDecoration: value, menuCloserTextGlobalTypoSwitcher: { ...menuCloserTextGlobalTypoSwitcher, textDecoration: value && false } })}

								letterSpacing={menuCloserTextLetterSpacing}
								onChangeLetterSpacing={(value) => setAttributes({ menuCloserTextLetterSpacing: value, menuCloserTextGlobalTypoSwitcher: { ...menuCloserTextGlobalTypoSwitcher, letterSpacing: value && false } })}

								letterSpacingUnits={menuCloserTextLetterSpacingUnits}
								onChangeLetterSpacingUnit={(value) => setAttributes({ menuCloserTextLetterSpacingUnits: value })}

								lineHeight={menuCloserTextLineHeight}
								onChangeLineHeight={(value) => setAttributes({ menuCloserTextLineHeight: value, menuCloserTextGlobalTypoSwitcher: { ...menuCloserTextGlobalTypoSwitcher, lineHeight: value && false } })}

								lineHeightUnits={menuCloserTextLineHeightUnits}
								onChangeLineHeightUnit={(value) => setAttributes({ menuCloserTextLineHeightUnits: value })}

								deviceType={deviceType}
								setAttributes={setAttributes}
							/>

							<FB_SwitcherControl
								label={__("Color", "frontis-blocks")}
								globalSwitcher={menuCloserTextColorSwitcher}
								setGlobalSwitcher={(value) => setAttributes({ menuCloserTextColorSwitcher: value })}
							/>

							{menuCloserTextColorSwitcher === 'normal' && (
								<FB_ColorControl
									label={__("Normal Color", "frontis-blocks")}
									globalColor={menuCloserTextColor}
									setGlobalColor={(value) => setAttributes({ menuCloserTextColor: value === undefined ? '' : value })}
								/>
							)}

							{menuCloserTextColorSwitcher === 'hover' && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={menuCloserTextHoverColor}
									setGlobalColor={(value) => setAttributes({ menuCloserTextHoverColor: value === undefined ? '' : value })}
								/>
							)}
							<FB_SwitcherControl
								label={__("Background Color", "frontis-blocks")}
								globalSwitcher={menuCloserTextBgColorSwitcher}
								setGlobalSwitcher={(value) => setAttributes({ menuCloserTextBgColorSwitcher: value })}
							/>

							{menuCloserTextBgColorSwitcher === 'normal' && (
								<FB_ColorControl
									label={__("Normal Color", "frontis-blocks")}
									globalColor={menuCloserTextBgColor}
									setGlobalColor={(value) => setAttributes({ menuCloserTextBgColor: value === undefined ? '' : value })}
								/>
							)}

							{menuCloserTextBgColorSwitcher === 'hover' && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={menuCloserTextBgHoverColor}
									setGlobalColor={(value) => setAttributes({ menuCloserTextBgHoverColor: value === undefined ? '' : value })}
								/>
							)}

							<SelectControl
								label={__("Border Style", "frontis-blocks")}
								value={menuCloserTextBorder}
								options={BORDER_STYLES}
								onChange={(value) => setAttributes({ menuCloserTextBorder: value })}
							/>


							<FB_SwitcherControl
								label={__("Color", "frontis-blocks")}
								globalSwitcher={menuCloserTextBorderColorSwitcher}
								setGlobalSwitcher={(value) => setAttributes({ menuCloserTextBorderColorSwitcher: value })}
							/>

							{menuCloserTextBorderColorSwitcher === 'normal' && (
								<FB_ColorControl
									label={__("Normal Color", "frontis-blocks")}
									globalColor={menuCloserTextBorderColor}
									setGlobalColor={(value) => setAttributes({ menuCloserTextBorderColor: value === undefined ? '' : value })}
								/>
							)}

							{menuCloserTextBorderColorSwitcher === 'hover' && (
								<FB_ColorControl
									label={__("Hover Color", "frontis-blocks")}
									globalColor={menuCloserTextBorderHoverColor}
									setGlobalColor={(value) => setAttributes({ menuCloserTextBorderHoverColor: value === undefined ? '' : value })}
								/>
							)}

							<FB_Spacing
								label={__("Border", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={menuCloserTextBorderUnitsHandler}
								spacingUnits={menuCloserTextBorderUnits}
								spacingDesktop={menuCloserTextDesktopBorder}
								spacingTablet={menuCloserTextTabletBorder}
								spacingMobile={menuCloserTextMobileBorder}
								handleSpacingUnitHandler={menuCloserTextBorderUnitsChange}
								spacingCombineBtn={menuCloserTextBorderLink}
								spacingCombineBtnHandler={menuCloserTextBorderLinkBtn}
								setAttributes={setAttributes}
							/>
							<FB_Spacing
								label={__("Border Radius", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={menuCloserTextBorderRadiusUnitsHandler}
								spacingUnits={menuCloserTextBorderRadiusUnits}
								spacingDesktop={menuCloserTextDesktopBorderRadius}
								spacingTablet={menuCloserTextTabBorderRadius}
								spacingMobile={menuCloserTextMobileBorderRadius}
								handleSpacingUnitHandler={menuCloserTextBorderRadiusUnitsChange}
								spacingCombineBtn={menuCloserTextBorderRadiusLink}
								spacingCombineBtnHandler={menuCloserTextBorderRadiusLinkBtn}
								setAttributes={setAttributes}
							/>

							<FB_Spacing
								label={__("Padding", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={menuCloserTextPaddingUnitsHandler}
								spacingUnits={menuCloserTextPaddingUnits}
								spacingDesktop={menuCloserTextDesktopPadding}
								spacingTablet={menuCloserTextTabPadding}
								spacingMobile={menuCloserTextMobilePadding}
								handleSpacingUnitHandler={menuCloserTextPaddingUnitsChange}
								spacingCombineBtn={menuCloserTextPaddingLink}
								spacingCombineBtnHandler={menuCloserTextPaddingLinkBtn}
								setAttributes={setAttributes}
							/>
							<FB_Spacing
								label={__("Margin", "frontis-blocks")}
								deviceType={deviceType}
								spacingUnitsHandler={menuCloserTextMarginUnitsHandler}
								spacingUnits={menuCloserTextMarginUnits}
								spacingDesktop={menuCloserTextDesktopMargin}
								spacingTablet={menuCloserTextTabMargin}
								spacingMobile={menuCloserTextMobileMargin}
								handleSpacingUnitHandler={menuCloserTextMarginUnitsChange}
								spacingCombineBtn={menuCloserTextMarginLink}
								spacingCombineBtnHandler={menuCloserTextMarginLinkBtn}
								setAttributes={setAttributes}
							/>

							<FB_SwitcherControl
								label={__("Box Shadow ", "frontis-blocks")}
								globalSwitcher={menuCloserTextBoxShadowSwitcher}
								setGlobalSwitcher={(value) => setAttributes({ menuCloserTextBoxShadowSwitcher: value })}
							/>

							{menuCloserTextBoxShadowSwitcher === 'normal' && (
								<FB_BoxShadowControl
									label={__("Normal Shadow", "frontis-blocks")}
									onBoxShadowChange={(value) => setAttributes({ menuCloserTextBoxShadowValues: value })}
									initialShadowValue={menuCloserTextBoxShadowValues}
									onBoxShadowStyleChange={(value) => setAttributes({ menuCloserTextBoxShadowCssValue: value })}
								/>
							)}

							{menuCloserTextBoxShadowSwitcher === 'hover' && (
								<FB_BoxShadowControl
									label={__("Hover Shadow", "frontis-blocks")}
									onBoxShadowChange={(value) => setAttributes({ menuCloserTextBoxShadowHoverValues: value })}
									initialShadowValue={menuCloserTextBoxShadowHoverValues}
									onBoxShadowStyleChange={(value) => setAttributes({ menuCloserTextBoxShadowHoverCssValue: value })}
								/>
							)}
						</>
					)}
				</PanelBody>
			)}

			<PanelBody title={__("Overlay", "frontis-blocks")} initialOpen={false}>
				<FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={offCanvasOverlayBackgroundColorSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ offCanvasOverlayBackgroundColorSwitcher: value })}

                    normalLabel={__("Background Color Type", "frontis-blocks")}
                    normalBackgroundType={offCanvasOverlayBgColorType}
                    setNormalBackgroundType={(value) => setAttributes({ offCanvasOverlayBgColorType: value })}
                    normalClassicColor={offCanvasOverlayBackgroundColor}
                    setNormalClassicColor={(value) => setAttributes({ offCanvasOverlayBackgroundColor: value === undefined ? '' : value })}
                    normalGradientColor={offCanvasOverlayBackgroundGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ offCanvasOverlayBackgroundGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={offCanvasOverlayBackgroundCustomGradientColorSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ offCanvasOverlayBackgroundCustomGradientColorSwitcher: value })}
                    normalCustomGradientInputValue={offCanvasOverlayBackgroundCustomGradientColor}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ offCanvasOverlayBackgroundCustomGradientColor: value === undefined ? null : value })}

                    hoverLabel={__("Background Color Type", "frontis-blocks")}
                    hoverBackgroundType={offCanvasOverlayBgHoverColorType}
                    setHoverBackgroundType={(value) => setAttributes({ offCanvasOverlayBgHoverColorType: value })}
                    hoverClassicColor={offCanvasOverlayBackgroundHoverColor}
                    setHoverClassicColor={(value) => setAttributes({ offCanvasOverlayBackgroundHoverColor: value === undefined ? '' : value })}
                    hoverGradientColor={offCanvasOverlayBackgroundHoverGradientColor}
                    setHoverGradientColor={(value) => setAttributes({ offCanvasOverlayBackgroundHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={offCanvasOverlayBackgroundHoverCustomGradientColorSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ offCanvasOverlayBackgroundHoverCustomGradientColorSwitcher: value })}
                    hoverCustomGradientInputValue={offCanvasOverlayBackgroundHoverCustomGradientColor}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ offCanvasOverlayBackgroundHoverCustomGradientColor: value === undefined ? null : value })}

                    isBackgroundImage={false}
                />
				<FB_Range
					min={1}
					max={offCanvasOverlayOpacityUnits === '%' ? 100 : 100}
					label={__("Opacity", "frontis-blocks")}
					rangeValue={offCanvasOverlayOpacity}
					onChangeHandler={(value) => setAttributes({ offCanvasOverlayOpacity: value })}
					rangeUnitHandler={(value) => setAttributes({ offCanvasOverlayOpacityUnits: value })}
					deviceType={deviceType}
					units={offCanvasOverlayOpacityUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
			</PanelBody>
		</>
	);
	const advancedControls = (
		<>
			<PanelBody
				title={__("Layout", "frontis-blocks")}
				initialOpen={true}
				className='fb-setting-layout-header'
			>
				<FB_Range
					min={0}
					max={10000000}
					label={__("Z Index", "frontis-blocks")}
					rangeValue={offCanvasGlobalZIndex}
					onChangeHandler={(value) => setAttributes({ offCanvasGlobalZIndex: value === 0 ? undefined : value })}
					deviceType={deviceType}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
					isRangeUnit={false}
				/>

				<SelectControl
					label={__("Overflow", "frontis-blocks")}
					value={offCanvasOverflow}
					options={OVERFLOW_OP}
					onChange={(value) => setAttributes({ offCanvasOverflow: value })}
				/>

				<FB_PositionControl
					deviceType={deviceType}
					positionType={offCanvasPositionType}
					setPositionType={(value) => setAttributes({ offCanvasPositionType: value })}

					HZOrientationType={offCanvasHZOrientationType}
					setHZOrientationType={(value) =>
						setAttributes({ offCanvasHZOrientationType: value })
					}
					VROrientationType={offCanvasVROrientationType}
					setVROrientationType={(value) =>
						setAttributes({ offCanvasVROrientationType: value })
					}

					HZLeftOffset={offCanvasHZLeftOffset}
					setHZLeftOffset={(value) => setAttributes({ offCanvasHZLeftOffset: value })}
					HZLeftOffsetUnits={offCanvasHZLeftOffsetUnits}
					setHZLeftOffsetUnits={(value) => setAttributes({ offCanvasHZLeftOffsetUnits: value })}
					HZRightOffset={offCanvasHZRightOffset}
					setHZRightOffset={(value) => setAttributes({ offCanvasHZRightOffset: value })}
					HZRightOffsetUnits={offCanvasHZRightOffsetUnits}
					setHZRightOffsetUnits={(value) => setAttributes({ offCanvasHZRightOffsetUnits: value })}

					VRTopOffset={offCanvasVRTopOffset}
					setVRTopOffset={(value) => setAttributes({ offCanvasVRTopOffset: value })}
					VRTopOffsetUnits={offCanvasVRTopOffsetUnits}
					setVRTopOffsetUnits={(value) => setAttributes({ offCanvasVRTopOffsetUnits: value })}
					VRBottomOffset={offCanvasVRBottomOffset}
					setVRBottomOffset={(value) => setAttributes({ offCanvasVRBottomOffset: value })}
					VRBottomOffsetUnits={offCanvasVRBottomOffsetUnits}
					setVRBottomOffsetUnits={(value) => setAttributes({ offCanvasVRBottomOffsetUnits: value })}

					setAttributes={setAttributes}
				/>

				<FB_InputControl
					label={__("CSS ID", "frontis-blocks")}
					value={offCanvasGlobalWraperID}
					onChangeValue={(value) => setAttributes({ offCanvasGlobalWraperID: value })}
					helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
				/>

				<FB_InputControl
					label={__("CSS Class", "frontis-blocks")}
					value={offCanvasGlobalWraperClass}
					onChangeValue={(value) => setAttributes({ offCanvasGlobalWraperClass: value })}
					helpText={__("Separate with spaces key.", "frontis-blocks")}
				/>

			</PanelBody>

			<PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
				<FB_Spacing
					label={__("Padding", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
					spacingUnits={offCanvasGlobalPaddingUnits}
					spacingDesktop={offCanvasGlobalPaddingDesktop}
					spacingTablet={offCanvasGlobalPaddingTablet}
					spacingMobile={offCanvasGlobalPaddingMobile}
					handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
					spacingCombineBtn={offCanvasGlobalPaddingLink}
					spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
					setAttributes={setAttributes}
				/>
				<FB_Spacing
					label={__("Margin", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalMarginUnitsHandler}
					spacingUnits={offCanvasGlobalMarginUnits}
					spacingDesktop={offCanvasGlobalMarginDesktop}
					spacingTablet={offCanvasGlobalMarginTablet}
					spacingMobile={offCanvasGlobalMarginMobile}
					handleSpacingUnitHandler={handleGlobalMarginUnitChange}
					spacingCombineBtn={offCanvasGlobalMarginLink}
					spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
					setAttributes={setAttributes}
				/>
			</PanelBody>

			<PanelBody
				title={__("Background", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_SwitcherControl
					label={__("Background Type", "frontis-blocks")}
					globalSwitcher={offCanvasGlobalBgColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ offCanvasGlobalBgColorSwitcher: value })}
				/>

				{offCanvasGlobalBgColorSwitcher === 'normal' && (
					<BaseControl
						className="fb-setting-background-color-setting-wrapper"
						label={__("Normal Background Type", "frontis-blocks")}
					>
						<Dropdown
							className="fb-setting-background-color-setting-icon-dropdown"
							contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
							popoverProps={{ placement: 'bottom-start' }}
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									variant="primary"
									onClick={onToggle}
									aria-expanded={isOpen}
									className="fb-setting-background-color-setting-icon-btn"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
										<path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
									</svg>
								</Button>
							)}
							renderContent={() => (
								<div className="fb-setting-background-color-popup-wrapper">
									<BaseControl
										className="fb-setting-background-color-popup-inner-wrapper"
									>
										<ButtonGroup className="fb-setting-background-color-panel-btn">
											{BACKGROUND_TYPES.map((item) => (
												<Button
													key={item.value}
													onClick={() => setAttributes({ offCanvasGlobalBgNormalBackgroundType: item.value })}
													className={`fb-setting-background-color-panel-btn-switcher ${offCanvasGlobalBgNormalBackgroundType === item.value ? 'active' : ''}`}
												>
													{item.label}
												</Button>
											))}
										</ButtonGroup>
									</BaseControl>

									{offCanvasGlobalBgNormalBackgroundType === 'classic' && (

										<>
											<FB_ColorControl
												label={__("Color", "frontis-blocks")}
												globalColor={offCanvasGlobalBgNormalClassicColor}
												setGlobalColor={(value) => setAttributes({ offCanvasGlobalBgNormalClassicColor: value === undefined ? '' : value })}
											/>

											<FB_ResponsiveBackgroundImageControl
												deviceType={deviceType}
												globalBackgroundImageUrl={offCanvasGlobalBgNormalBackgroundImageUrl}
												setGlobalBackgroundImageUrl={(value) => setAttributes({ offCanvasGlobalBgNormalBackgroundImageUrl: value })}
												globalBackgroundImageAlt={offCanvasGlobalBgNormalBackgroundImageAlt}
												setGlobalBackgroundImageAlt={(value) => setAttributes({ offCanvasGlobalBgNormalBackgroundImageAlt: value })}
												globalBackgroundImageID={offCanvasGlobalBgNormalBackgroundImageID}
												setGlobalBackgroundImageID={(value) => setAttributes({ offCanvasGlobalBgNormalBackgroundImageID: value })}
												globalBackgroundImagePosition={offCanvasGlobalBgNormalBackgroundImagePosition}
												setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ offCanvasGlobalBgNormalBackgroundImagePosition: newPosition })}
												globalBackgroundImageAttachment={offCanvasGlobalBgNormalBackgroundImageAttachment}
												setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ offCanvasGlobalBgNormalBackgroundImageAttachment: newAttachment })}
												globalBackgroundImageRepeat={offCanvasGlobalBgNormalBackgroundImageRepeat}
												setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ offCanvasGlobalBgNormalBackgroundImageRepeat: newRepeat })}
												globalBackgroundImageSize={offCanvasGlobalBgNormalBackgroundImageSize}
												setGlobalBackgroundImageSize={(newSize) => setAttributes({ offCanvasGlobalBgNormalBackgroundImageSize: newSize })}
												setAttributes={setAttributes}
											/>

										</>
									)}

									{offCanvasGlobalBgNormalBackgroundType === 'gradient' && (
										<FB_GradientColorControl
											globalCustomGradientSwitcher={offCanvasGlobalBgNormalCustomGradientSwitcher}
											setGlobalCustomGradientSwitcher={(value) => setAttributes({ offCanvasGlobalBgNormalCustomGradientSwitcher: value })}
											globalCustomGradientInputValue={offCanvasGlobalBgNormalCustomGradientInputValue}
											setGlobalCustomGradientInputValue={(value) => setAttributes({ offCanvasGlobalBgNormalCustomGradientInputValue: value })}
											globalGradientColor={offCanvasGlobalBgNormalGradientColor}
											setGlobalGradientColor={(value) => setAttributes({ offCanvasGlobalBgNormalGradientColor: value === undefined ? null : value })}
										/>
									)}
								</div>
							)}
						/>
					</BaseControl>

				)}

				{offCanvasGlobalBgColorSwitcher === 'hover' && (
					<BaseControl
						className="fb-setting-background-color-setting-wrapper"
						label={__("Hover Background Type", "frontis-blocks")}
					>
						<Dropdown
							className="fb-setting-background-color-setting-icon-dropdown"
							contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
							popoverProps={{ placement: 'bottom-start' }}
							renderToggle={({ isOpen, onToggle }) => (
								<Button
									variant="primary"
									onClick={onToggle}
									aria-expanded={isOpen}
									className="fb-setting-background-color-setting-icon-btn"
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
										<path d="M2.66699 14.666H13.3337" stroke="#1C274C" />
										<path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C" />
									</svg>
								</Button>
							)}
							renderContent={() => (
								<div className="fb-setting-background-color-popup-wrapper">
									<BaseControl
										className="fb-setting-background-color-popup-inner-wrapper"
									>
										<ButtonGroup className="fb-setting-background-color-panel-btn">
											{BACKGROUND_TYPES.map((item) => (
												<Button
													key={item.value}
													onClick={() => setAttributes({ offCanvasGlobalBgHoverBackgroundType: item.value })}
													className={`fb-setting-background-color-panel-btn-switcher ${offCanvasGlobalBgHoverBackgroundType === item.value ? 'active' : ''}`}
												>
													{item.label}
												</Button>
											))}
										</ButtonGroup>
									</BaseControl>

									{offCanvasGlobalBgHoverBackgroundType === 'classic' && (

										<>
											<FB_ColorControl
												label={__("Color", "frontis-blocks")}
												globalColor={offCanvasGlobalBgHoverClassicColor}
												setGlobalColor={(value) => setAttributes({ offCanvasGlobalBgHoverClassicColor: value === undefined ? '' : value })}
											/>

											<FB_ResponsiveBackgroundImageControl
												deviceType={deviceType}
												globalBackgroundImageUrl={offCanvasGlobalBgHoverBackgroundImageUrl}
												setGlobalBackgroundImageUrl={(value) => setAttributes({ offCanvasGlobalBgHoverBackgroundImageUrl: value })}
												globalBackgroundImageAlt={offCanvasGlobalBgNormalBackgroundImageAlt}
												setGlobalBackgroundImageAlt={(value) => setAttributes({ offCanvasGlobalBgNormalBackgroundImageAlt: value })}
												globalBackgroundImageID={offCanvasGlobalBgNormalBackgroundImageID}
												setGlobalBackgroundImageID={(value) => setAttributes({ offCanvasGlobalBgNormalBackgroundImageID: value })}
												globalBackgroundImagePosition={offCanvasGlobalBgHoverBackgroundImagePosition}
												setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ offCanvasGlobalBgHoverBackgroundImagePosition: newPosition })}
												globalBackgroundImageAttachment={offCanvasGlobalBgHoverBackgroundImageAttachment}
												setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ offCanvasGlobalBgHoverBackgroundImageAttachment: newAttachment })}
												globalBackgroundImageRepeat={offCanvasGlobalBgHoverBackgroundImageRepeat}
												setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ offCanvasGlobalBgHoverBackgroundImageRepeat: newRepeat })}
												globalBackgroundImageSize={offCanvasGlobalBgHoverBackgroundImageSize}
												setGlobalBackgroundImageSize={(newSize) => setAttributes({ offCanvasGlobalBgHoverBackgroundImageSize: newSize })}
												setAttributes={setAttributes}
											/>

										</>
									)}

									{offCanvasGlobalBgHoverBackgroundType === 'gradient' && (
										<FB_GradientColorControl
											globalCustomGradientSwitcher={offCanvasGlobalBgHoverCustomGradientSwitcher}
											setGlobalCustomGradientSwitcher={(value) => setAttributes({ offCanvasGlobalBgHoverCustomGradientSwitcher: value })}
											globalCustomGradientInputValue={offCanvasGlobalBgHoverCustomGradientInputValue}
											setGlobalCustomGradientInputValue={(value) => setAttributes({ offCanvasGlobalBgHoverCustomGradientInputValue: value })}
											globalGradientColor={offCanvasGlobalBgHoverGradientColor}
											setGlobalGradientColor={(value) => setAttributes({ offCanvasGlobalBgHoverGradientColor: value === undefined ? null : value })}
										/>
									)}
								</div>
							)}
						/>
					</BaseControl>
				)}
			</PanelBody>

			<PanelBody
				title={__("Border and Shadow", "frontis-blocks")}
				initialOpen={false}
			>

				<SelectControl
					label={__("Border Style", "frontis-blocks")}
					value={offCanvasGlobalBorder}
					options={BORDER_STYLES}
					onChange={(value) => setAttributes({ offCanvasGlobalBorder: value })}
				/>


				<FB_SwitcherControl
					label={__("Border Color", "frontis-blocks")}
					globalSwitcher={offCanvasGlobalBorderColorSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ offCanvasGlobalBorderColorSwitcher: value })}
				/>

				{offCanvasGlobalBorderColorSwitcher === 'normal' && (
					<FB_ColorControl
						label={__("Normal Color", "frontis-blocks")}
						globalColor={offCanvasGlobalBorderColor}
						setGlobalColor={(value) => setAttributes({ offCanvasGlobalBorderColor: value === undefined ? '' : value })}
					/>
				)}

				{offCanvasGlobalBorderColorSwitcher === 'hover' && (
					<FB_ColorControl
						label={__("Hover Color", "frontis-blocks")}
						globalColor={offCanvasGlobalBorderHoverColor}
						setGlobalColor={(value) => setAttributes({ offCanvasGlobalBorderHoverColor: value === undefined ? '' : value })}
					/>
				)}

				<FB_Spacing
					label={__("Border", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalBorderUnitsHandler}
					spacingUnits={offCanvasGlobalBorderUnits}
					spacingDesktop={offCanvasGlobalBorderDesktop}
					spacingTablet={offCanvasGlobalBorderTablet}
					spacingMobile={offCanvasGlobalBorderMobile}
					handleSpacingUnitHandler={handleGlobalBorderUnitChange}
					spacingCombineBtn={offCanvasGlobalBorderLink}
					spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_Spacing
					label={__("Border Radius", "frontis-blocks")}
					deviceType={deviceType}
					spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
					spacingUnits={offCanvasGlobalBorderRadiusUnits}
					spacingDesktop={offCanvasGlobalBorderRadiusDesktop}
					spacingTablet={offCanvasGlobalBorderRadiusTablet}
					spacingMobile={offCanvasGlobalBorderRadiusMobile}
					handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
					spacingCombineBtn={offCanvasGlobalBorderRadiusLink}
					spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
					setAttributes={setAttributes}
				/>

				<FB_SwitcherControl
					label={__("Box Shadow", "frontis-blocks")}
					globalSwitcher={offCanvasGlobalBoxShadowSwitcher}
					setGlobalSwitcher={(value) => setAttributes({ offCanvasGlobalBoxShadowSwitcher: value })}
				/>

				{offCanvasGlobalBoxShadowSwitcher === 'normal' && (
					<FB_BoxShadowControl
						label={__("Normal Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) => setAttributes({ offCanvasGlobalBoxShadowValues: value })}
						initialShadowValue={offCanvasGlobalBoxShadowValues}
						onBoxShadowStyleChange={(value) => setAttributes({ offCanvasGlobalBoxShadowCssValue: value })}
					/>
				)}

				{offCanvasGlobalBoxShadowSwitcher === 'hover' && (
					<FB_BoxShadowControl
						label={__("Hover Shadow", "frontis-blocks")}
						onBoxShadowChange={(value) => setAttributes({ offCanvasGlobalBoxShadowHoverValues: value })}
						initialShadowValue={offCanvasGlobalBoxShadowHoverValues}
						onBoxShadowStyleChange={(value) => setAttributes({ offCanvasGlobalBoxShadowHoverCssValue: value })}
					/>
				)}
			</PanelBody>

			<PanelBody
				title={__("Responsive Control", "frontis-blocks")}
				initialOpen={false}
				className="fb-setting-responsive-control-wrapper"
			>
				<FB_VisibilityControl
					desktopValue={offCanvasDesktopSwitcher}
					setDesktopValue={(value) => setAttributes({ offCanvasDesktopSwitcher: value })}

					tabletValue={offCanvasTabletSwitcher}
					setTabletValue={(value) => setAttributes({ offCanvasTabletSwitcher: value })}

					mobileValue={offCanvasMobileSwitcher}
					setMobileValue={(value) => setAttributes({ offCanvasMobileSwitcher: value })}
				/>
			</PanelBody>
			<PanelBody
				title={__("Custom CSS", "frontis-blocks")}
				initialOpen={false}
			>
				<FB_CustomCSSEditor
					value={offCanvasCustomCSS}
					onChangeValue={(value) => setAttributes({ offCanvasCustomCSS: value })}
				/>
			</PanelBody>
		</>
	);

	return (
		<>
			<FB_InspectorControls
				generalControls={generalControls}
				styleControls={styleControls}
				advancedControls={advancedControls}
			/>
		</>
	);
}
export default memo(Inspector);