import { __ } from '@wordpress/i18n';

import {
    InspectorControls,
} from '@wordpress/block-editor';

import {
    SelectControl,
    PanelBody,
    TabPanel,
    BaseControl,
    Button,
    ButtonGroup,
    ToggleControl,
    TextControl,
    __experimentalInputControl as InputControl,
    TextareaControl,
    Dropdown,
    Dashicon,
    RangeControl,
    ColorPicker,
    ColorPalette,
    MediaUpload,
    MediaUploadCheck,
    Placeholder,
    PanelRow,
    Popover,
    MenuGroup,
    MenuItem
} from '@wordpress/components';
import { useEntityProp, store as coreStore } from '@wordpress/core-data';

import { 
    ADVANCED_HEADING_PRESETS,
    DYNAMIC_DATA_SOURCE_OPTIONS,
    DYNAMIC_DATA_SOURCE_FIELD_OPTIONS,
    DYNAMIC_FEATURED_IMAGE_OPTIONS,
    DYNAMIC_DATE_TIME_TYPE_OPTIONS,
    DYNAMIC_TAXONOMY_OPTIONS,
    getDynamicDateFormatOptions,
    getDynamicTimeFormatOptions,
    DYNAMIC_LINK_SOURCE_OPTIONS,
    SEPARATOR_POSITION,
    SUBHEADING_POSITION,
    BORDER_STYLES,
    BACKGROUND_TYPES,
    OVERFLOW_OP,
    ICON_ALIGN,
    SEPARATOR_STYLE_OPTIONS,

} from '@Constants/fbConstants';

import Select2 from "react-select";
import { useState, useEffect, useMemo } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_Range from '@Components/range';
import FBIconPicker from "../../components/icon-picker";
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_BackgroundColorControl from '@Components/background-color-control';
import generateSvgIcon from '@Utils/generateSvgIcon';

import './editor.scss';

export default function Inspector ({ attributes, setAttributes,  clientId}) {
    const {
        blockId,
        // deviceType,
        headingText,
        headingTag,
        headingAlignment,

        /** Start Heading Style */
        headingGlobalTypoSwitcher,
        headingGlobalTypographyData,
        headingGlobalTypoType,
        headingGlobalTypoOption,
        headingFontFamily,
        headingFontSize,
        headingFontSizeUnits,
        headingFontWeight,
        headingFontStyle,
        headingTextTransform,
        headingTextDecoration,
        headingLetterSpacing,
        headingLineHeight,
        headingLetterSpacingUnits,
        headingLineHeightUnits,


        headingTextShadowValues,
        headingTextShadowCssValue,
        headingTextStroke,
        headingTextStrokeColorSwitcher,
        headingTextStrokeColor,
        headingTextStrokeHoverColor,

        headingTextColorTypeSwitcher,
        headingTextColorType,
        headingTextHoverColorType,
        headingColor,
        headingHoverColor,
        headingTextGradientColor,
        headingTextHoverGradientColor,
        headingTextCustomGradientColorSwitcher,
        headingTextCustomGradientColor,
        headingTextHoverCustomGradientColorSwitcher,
        headingTextHoverCustomGradientColor,

        headingHighlightColorSwitcher,
        headingHighlightColor,
        headingHighlightHoverColor,

        headingBgColorTypeSwitcher,
        headingBgColorType,
        headingBgHoverColorType,
        headingBgColor,
        headingBgHoverColor,
        headingBgGradientColor,
        headingBgHoverGradientColor,
        headingBgCustomGradientColorSwitcher,
        headingBgCustomGradientColor,
        headingBgHoverCustomGradientColorSwitcher,
        headingBgHoverCustomGradientColor,

        headingBorder,
        headingBorderColor,
        headingBorderHoverColor,
        headingBorderColorSwitcher,

        headingBorderUnits,
        headingDesktopBorder,
        headingTabletBorder,
        headingMobileBorder,
        headingBorderLink,

        headingBorderRadiusUnits,
        headingDesktopBorderRadius,
        headingTabBorderRadius,
        headingMobileBorderRadius,
        headingBorderRadiusLink,
        headingBoxShadowValues,
        headingBoxShadowCssValue,

        headingPaddingUnits,
        headingDesktopPadding,
        headingTabPadding,
        headingMobilePadding,
        headingPaddingLink,
        headingMarginUnits,
        headingDesktopMargin,
        headingTabMargin,
        headingMobileMargin,
        headingMarginLink,
        /** End Heading */

        /**Start Sub Heading */
        subHeadingSwitcher,
        subHeadingText,
        subHeadingTag,
        subHeadingPosition,

        subHeadingGlobalTypoSwitcher,
        subHeadingGlobalTypographyData,
        subHeadingGlobalTypoType,
        subHeadingGlobalTypoOption,
        subHeadingFontFamily,
        subHeadingFontSize,
        subHeadingFontSizeUnits,
        subHeadingFontWeight,
        subHeadingFontStyle,
        subHeadingTextTransform,
        subHeadingTextDecoration,
        subHeadingLetterSpacing,
        subHeadingLetterSpacingUnits,
        subHeadingLineHeight,
        subHeadingLineHeightUnits,

        subHeadingTextShadowValues,
        subHeadingTextShadowCssValue,
        subHeadingTextStroke,
        subHeadingTextStrokeColorSwitcher,
        subHeadingTextStrokeColor,
        subHeadingTextStrokeHoverColor,

        subHeadingTextColorTypeSwitcher,
        subHeadingTextColorType,
        subHeadingTextHoverColorType,
        subHeadingColor,
        subHeadingHoverColor,
        subHeadingTextGradientColor,
        subHeadingTextHoverGradientColor,
        subHeadingTextCustomGradientColorSwitcher,
        subHeadingTextCustomGradientColor,
        subHeadingTextHoverCustomGradientColorSwitcher,
        subHeadingTextHoverCustomGradientColor,

        subHeadingBgColorTypeSwitcher,
        subHeadingBgColorType,
        subHeadingBgHoverColorType,
        subHeadingBgColor,
        subHeadingBgHoverColor,
        subHeadingBgGradientColor,
        subHeadingBgHoverGradientColor,
        subHeadingBgCustomGradientColorSwitcher,
        subHeadingBgCustomGradientColor,
        subHeadingBgHoverCustomGradientColorSwitcher,
        subHeadingBgHoverCustomGradientColor,

        subHeadingBorder,
        subHeadingBorderColorSwitcher,
        subHeadingBorderColor,
        subHeadingBorderHoverColor,
        subHeadingBorderUnits,
        subHeadingDesktopBorder,
        subHeadingTabBorder,
        subHeadingMobileBorder,
        subHeadingBorderLink,
        subHeadingBorderRadiusUnits,
        subHeadingDesktopBorderRadius,
        subHeadingTabBorderRadius,
        subHeadingMobileBorderRadius,
        subHeadingBorderRadiusLink,
        subHeadingBoxShadowValues,
        subHeadingBoxShadowCssValue,

        subHeadingPaddingUnits,
        subHeadingDesktopPadding,
        subHeadingTabPadding,
        subHeadingMobilePadding,
        subHeadingPaddingLink,
        subHeadingMarginUnits,
        subHeadingDesktopMargin,
        subHeadingTabMargin,
        subHeadingMobileMargin,
        subHeadingMarginLink,
        /** End Sub Heading */

        /** Start Separator */
        separator,
        showSeparatorSwitcher,
        separatorPosition,
        separatorColorSwitcher,
        separatorColor,
        separatorHoverColor,
        separatorWidth,
        separatorWidthUnits,
        separatorHeight,
        separatorHeightUnits,
        separatorSpacing,
        separatorSpacingUnits,

        /** Start Icon */
        headingIconSwitcher,
        headingIconAlign,
        headingIcon,
        headingIconFrontend,
        headingIconSize,
        headingIconSizeUnits,
        headingIconBgSize,
        headingIconBgSizeUnits,
        headingIconColorSwitcher,
        headingIconColor,
        headingIconHoverColor,
        headingIconBgColorSwitcher,
        headingIconBgColor,
        headingIconBgHoverColor,
        headingIconBorder,
        headingIconBorderColorSwitcher,
        headingIconBorderColor,
        headingIconBorderHoverColor,
        headingIconBorderUnits,
        headingIconBorderDesktop,
        headingIconBorderTablet,
        headingIconBorderMobile,
        headingIconBorderLink,
        headingIconBorderRadiusUnits,
        headingIconBorderRadiusDesktop,
        headingIconBorderRadiusTablet,
        headingIconBorderRadiusMobile,
        headingIconBorderRadiusLink,
        headingIconPaddingUnits,
        headingIconDesktopPadding,
        headingIconTabletPadding,
        headingIconMobilePadding,
        headingIconPaddingLink,
        /** End Icon */

        /** Start Global Setting */
        headingGlobalZIndex,
        advancedHeadingOverflow,
        headingGlobalWraperID,
        headingGlobalWraperClass,

        headingGlobalPaddingUnits,
        headingGlobalPaddingDesktop,
        headingGlobalPaddingTablet,
        headingGlobalPaddingMobile,
        headingGlobalPaddingLink,
        headingGlobalMarginUnits,

        headingGlobalMarginDesktop,
        headingGlobalMarginTablet,
        headingGlobalMarginMobile,
        headingGlobalMarginLink,

        /** Start Background */
        headingGlobalBgColorSwitcher,
        headingGlobalBgNormalBackgroundType,
        headingGlobalBgNormalClassicColor,
        headingGlobalBgNormalGradientColor,
        headingGlobalBgNormalCustomGradientSwitcher,
        headingGlobalBgNormalCustomGradientInputValue,
        headingGlobalBgNormalBackgroundImageUrl,
        headingGlobalBgNormalBackgroundImagePosition,
        headingGlobalBgNormalBackgroundImageAttachment,
        headingGlobalBgNormalBackgroundImageRepeat,
        headingGlobalBgNormalBackgroundImageSize,

        headingGlobalBgHoverBackgroundType,
        headingGlobalBgHoverClassicColor,
        headingGlobalBgHoverGradientColor,
        headingGlobalBgHoverCustomGradientSwitcher,
        headingGlobalBgHoverCustomGradientInputValue,
        headingGlobalBgHoverBackgroundImageUrl,
        headingGlobalBgHoverBackgroundImagePosition,
        headingGlobalBgHoverBackgroundImageAttachment,
        headingGlobalBgHoverBackgroundImageRepeat,
        headingGlobalBgHoverBackgroundImageSize,

        headingGlobalBorder,
        headingGlobalBorderColorSwitcher,
        headingGlobalBorderColor,
        headingGlobalBorderHoverColor,
        headingGlobalBorderUnits,
        headingGlobalBorderDesktop,
        headingGlobalBorderTablet,
        headingGlobalBorderMobile,
        headingGlobalBorderLink,

        headingGlobalBorderRadiusUnits,
        headingGlobalBorderRadiusDesktop,
        headingGlobalBorderRadiusTablet,
        headingGlobalBorderRadiusMobile,
        headingGlobalBorderRadiusLink,

        headingGlobalBoxShadowSwitcher,
        headingGlobalBoxShadowValues,
        headingGlobalBoxShadowCssValue,
        headingGlobalBoxShadowHoverValues,
        headingGlobalBoxShadowHoverCssValue,

        /** End Global Style */

        /** Start Background Image */
        headingBackgroundImageEnabled,
        headingBackgroundImageUrl,
        headingBackgroundImageAlt,
        headingBackgroundImageID,
        /** End Background Image */

        headingPresetStyle,
        activeLineSwitcher,
        activeLineAfterWidth,
        activeLineAfterWidthUnits,
        activeLineAfterHeight,
        activeLineAfterHeightUnits,
        activeLineAfterColor,
        activeLineBeforeWidth,
        activeLineBeforeWidthUnits,
        activeLineBeforeHeight,
        activeLineBeforeHeightUnits,
        activeLineBeforeColor,

        advancedHeadingDesktopSwitcher,
		advancedHeadingTabletSwitcher,
		advancedHeadingMobileSwitcher,

        blockStyle,
        advancedHeadingCustomCSS,

        // Position
        advancedHeadingPositionType,
        advancedHeadingHZOrientationType,
        advancedHeadingVROrientationType,
        advancedHeadingHZLeftOffset,
        advancedHeadingHZLeftOffsetUnits,
        advancedHeadingHZRightOffset,
        advancedHeadingHZRightOffsetUnits,
        advancedHeadingVRTopOffset,
        advancedHeadingVRTopOffsetUnits,
        advancedHeadingVRBottomOffset,
        advancedHeadingVRBottomOffsetUnits,

        /** Start Before After */
        headingBeforeAfterSwitcher,
        headingBeforeAfterWidth,
        headingBeforeAfterWidthUnits,
        headingBeforeAfterHeight,
        headingBeforeAfterHeightUnits,

        headingBeforeAfterGap,
        headingBeforeAfterGapUnits,

        headingBeforeAfterBorder,
        headingBeforeAfterBorderColor,
        headingBeforeAfterBorderUnits,
        headingBeforeAfterDesktopBorder,
        headingBeforeAfterTabletBorder,
        headingBeforeAfterMobileBorder,
        headingBeforeAfterBorderLink,
        headingBeforeAfterBorderRadiusUnits,
        headingBeforeAfterDesktopBorderRadius,
        headingBeforeAfterTabletBorderRadius,
        headingBeforeAfterMobileBorderRadius,
        headingBeforeAfterBorderRadiusLink,
        /** End Before After */

        dynamicEnabled,
        dynamicSource,
        dynamicPostId,
        dynamicPostType,
        dynamicPostLabel,
        dynamicField,
        dynamicEnableLink,
        dynamicFeaturedImageField,
        dynamicDateType,
        dynamicDateFormat,
        dynamicTimeType,
        dynamicTimeFormat,

        dynamicCommentsZeroText,
        dynamicCommentsOneText,
        dynamicCommentsManyText,
        dynamicTermsTaxonomy,
        dynamicTermsSeparator,
        dynamicLinkSource,



    } = attributes;

    const deviceType= useDeviceType();



    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-advanced-headings-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const headingIconHandler = (IconName) => {
		setAttributes({headingIcon: IconName})

	}
    let defaultImageUrl = '';
    if (typeof FrontisBlocksData !== 'undefined') {
        defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/preset-bg.jpg';
    }

    // Set default value for headingBackgroundImageUrl
    useEffect(() => {
        if (!headingBackgroundImageUrl) {
            setAttributes({ headingBackgroundImageUrl: defaultImageUrl });
        }
    }, []);


    /**
     * Generate SVG Icons for Icon
     */
    useEffect(() => {
        setAttributes({
            headingIconFrontend: generateSvgIcon(headingIcon),
        })
    }, [headingIcon]);


    /** Start Preset Style */
    const changeAdvancedHeadingPreset = (selectedPreset) => {
        const presetConfigurations = {
            "preset-0": {
                headingIconSwitcher: false,
                subHeadingSwitcher: false,
                showSeparatorSwitcher: false,
                activeLineSwitcher: false,
                separator: "solid",
                separatorColor: "#399CFF",
                headingBackgroundImageEnabled: false,
                subHeadingSwitcher: false,
                showSeparatorSwitcher: false,
                headingBackgroundImageEnabled: false,
                headingIconSwitcher: false,
                headingTextShadowCssValue: "none",
                headingColor: "",
                headingTextStroke: {
                    Desktop: "",
                    Tablet: "",
                    Mobile: "",
                },
                headingTextStrokeColor: "",
                headingTextStrokeHoverColor: "",
                headingAlignment: {
                    Desktop: "left"
                },
                headingDesktopPadding: {
                    bottom: '24',
                },
                headingDesktopPadding: {
                    top: '',
                    bottom: '',
                    left: '',
                    right: '',
                },
            },
            "preset-1": {
                headingIconSwitcher: false,
                subHeadingSwitcher: true,
                showSeparatorSwitcher: false,
                activeLineSwitcher: false,
                separator: "solid",
                separatorColor: "#399CFF",
                headingBackgroundImageEnabled: false,
                headingTextShadowCssValue: "",
                headingColor: "#000000",
                headingTextStroke: "",
                headingDesktopPadding: ""
            },
            "preset-2": {
                subHeadingSwitcher: true,
                showSeparatorSwitcher: false,
                headingBackgroundImageEnabled: false,
                headingIconSwitcher: false,
                headingTextShadowCssValue: "0px 18px 0px #399cff1a;",
                headingColor: "transparent",
                headingTextStroke: {
                    Desktop: "2",
                    Tablet: "2",
                    Mobile: "2",
                },
                headingTextStrokeColor: "#399CFF",
                headingTextStrokeHoverColor: "#399CFF",
                headingAlignment: {
                    Desktop: "left"
                },
                headingDesktopPadding: {
                    top: '0',
                    bottom: '24',
                    left: '0',
                    right: '0',
                },
            },
            "preset-3": {
                subHeadingSwitcher: true,
                subHeadingPosition: "bottom",
                showSeparatorSwitcher: false,
                separator: "solid",
                separatorColor: "#399CFF",
                separatorPosition: "bottom",
                headingBackgroundImageEnabled: true,
                headingIconSwitcher: false,
                headingTextShadowCssValue: "none",
                headingColor: "",
                headingTextStroke: {
                    Desktop: "",
                    Tablet: "",
                    Mobile: "",
                },
                headingTextStrokeColor: "",
                headingTextStrokeHoverColor: "",
                headingAlignment: {
                    Desktop: "left"
                },
                headingDesktopPadding: {
                    top: '0',
                    bottom: '24',
                    left: '0',
                    right: '0',
                },
            },
            "preset-4": {
                headingIconSwitcher: false,
                subHeadingSwitcher: false,
                subHeadingPosition: "bottom",
                activeLineSwitcher: false,
                showSeparatorSwitcher: true,
                separator: "dashed",
                separatorWidth: {
                    Desktop: '270',
                },
                separatorColor: "#F89B2E",
                separatorPosition: "bottom",
                headingBackgroundImageEnabled: false,
                headingTextShadowCssValue: "none",
                headingColor: "#F89B2E",
                headingTextStroke: {
                    Desktop: "",
                    Tablet: "",
                    Mobile: "",
                },
                headingTextStrokeColor: "",
                headingTextStrokeHoverColor: "",
                headingAlignment: {
                    Desktop: "left"
                },
                headingDesktopPadding: {
                    top: '0',
                    bottom: '24',
                    left: '0',
                    right: '0',
                },
            },
            "preset-5": {
                headingIconSwitcher: false,
                subHeadingSwitcher: false,
                subHeadingPosition: "bottom",
                activeLineSwitcher: false,
                showSeparatorSwitcher: true,
                separator: "solid",
                separatorWidth: {
                    Desktop: '270',
                },
                separatorColor: "#4CAF50",
                separatorPosition: "bottom",
                headingBackgroundImageEnabled: false,
                headingTextShadowCssValue: "none",
                headingColor: "#4CAF50",
                headingTextStroke: {
                    Desktop: "",
                    Tablet: "",
                    Mobile: "",
                },
                headingTextStrokeColor: "",
                headingTextStrokeHoverColor: "",
                headingAlignment: {
                    Desktop: "left"
                },
                headingDesktopPadding: {
                    top: '0',
                    bottom: '24',
                    left: '0',
                    right: '0',
                },
            },
            "preset-6": {
                headingIconSwitcher: false,
                subHeadingSwitcher: false,
                subHeadingPosition: "bottom",
                activeLineSwitcher: true,
                activeLineBeforeWidth: {
                    Desktop: '23',
                },
                activeLineAfterWidth: {
                    Desktop: '100',
                },
                activeLineBeforeColor: "#399CFF",
                activeLineAfterColor: "#B0D7FF",
                showSeparatorSwitcher: false,
                separator: "",
                separatorColor: "",
                separatorPosition: "bottom",
                headingBackgroundImageEnabled: false,
                headingTextShadowCssValue: "none",
                headingColor: "#399CFF",
                headingTextStroke: {
                    Desktop: "",
                    Tablet: "",
                    Mobile: "",
                },
                headingTextStrokeColor: "",
                headingTextStrokeHoverColor: "",
                headingAlignment: {
                    Desktop: "left"
                },
                headingDesktopPadding: {
                    top: '0',
                    bottom: '24',
                    left: '0',
                    right: '0',
                },
            },
            "preset-7": {
                headingIconSwitcher: false,
                subHeadingSwitcher: false,
                subHeadingPosition: "bottom",
                activeLineSwitcher: true,
                activeLineBeforeWidth: {
                    Desktop: '23',
                },
                activeLineAfterWidth: {
                    Desktop: '100',
                },
                activeLineBeforeColor: "#F89B2E",
                activeLineAfterColor: "#FCD7AB",
                showSeparatorSwitcher: false,
                separator: "",
                separatorColor: "",
                separatorPosition: "bottom",
                headingBackgroundImageEnabled: false,
                headingTextShadowCssValue: "none",
                headingColor: "#F89B2E",
                headingTextStroke: {
                    Desktop: "",
                    Tablet: "",
                    Mobile: "",
                },
                headingTextStrokeColor: "",
                headingTextStrokeHoverColor: "",
                headingAlignment: {
                    Desktop: "center"
                },
                headingDesktopPadding: {
                    top: '0',
                    bottom: '24',
                    left: '0',
                    right: '0',
                },
            },
            "preset-8": {
                headingIconSwitcher: true,
                subHeadingSwitcher: false,
                subHeadingPosition: "bottom",
                activeLineSwitcher: false,
                activeLineBeforeWidth: {
                    Desktop: '23',
                },
                activeLineAfterWidth: {
                    Desktop: '100',
                },
                activeLineBeforeColor: "#E95B68",
                activeLineAfterColor: "#e7adadff",
                showSeparatorSwitcher: true,
                separator: "solid",
                separatorWidth: {
                    Desktop: '150',
                },
                separatorColor: "#E95B68",
                separatorPosition: "top",
                headingBackgroundImageEnabled: false,
                headingTextShadowCssValue: "none",
                headingColor: "#E95B68",
                headingTextStroke: {
                    Desktop: "",
                    Tablet: "",
                    Mobile: "",
                },
                headingTextStrokeColor: "",
                headingTextStrokeHoverColor: "",
                headingAlignment: {
                    Desktop: "left"
                },
                headingDesktopPadding: {
                    top: '24',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                headingIconColor: "#E95B68",
                headingIconDesktopPadding: {
                    top: '0',
                    bottom: '24',
                    left: '0',
                    right: '0',
                }
            },
            "preset-9": {
                headingIconSwitcher: true,
                subHeadingSwitcher: false,
                subHeadingPosition: "bottom",
                activeLineSwitcher: false,
                activeLineBeforeWidth: {
                    Desktop: '23',
                },
                activeLineAfterWidth: {
                    Desktop: '100',
                },
                activeLineBeforeColor: "#4CAF50",
                activeLineAfterColor: "#9cb39cff",
                showSeparatorSwitcher: true,
                separator: "zigzag",
                separatorWidth: {
                    Desktop: '150',
                },
                separatorColor: "#4CAF50",
                separatorPosition: "top",
                headingBackgroundImageEnabled: false,
                headingTextShadowCssValue: "none",
                headingColor: "#4CAF50",
                headingTextStroke: {
                    Desktop: "",
                    Tablet: "",
                    Mobile: "",
                },
                headingTextStrokeColor: "",
                headingTextStrokeHoverColor: "",
                headingAlignment: {
                    Desktop: "left"
                },
                headingDesktopPadding: {
                    top: '24',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                headingIconColor: "#4CAF50",
                headingIconDesktopPadding: {
                    top: '0',
                    bottom: '24',
                    left: '0',
                    right: '0',
                }
            },
        };

        const selectedPresetConfig = presetConfigurations[selectedPreset];

        if (selectedPresetConfig) {
            setAttributes({
                headingPresetStyle: selectedPreset,
                ...selectedPresetConfig,
            });
        } else {
            console.warn(`Advanced Heading: Preset "${selectedPreset}" not found.`);
        }
    };

    /**
     * selected preset option
     */
    const selectedPresetOption = useMemo(
        () => ADVANCED_HEADING_PRESETS.find(o => o.value === headingPresetStyle) || null,
        [headingPresetStyle]
    );
    /** End Preset Style */

    /** Start Heading Padding */
    const headingPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (headingPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        headingDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        headingTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        headingMobilePadding: {
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
                    setAttributes({ headingDesktopPadding: { ...headingDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ headingTabPadding: { ...headingTabPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ headingMobilePadding: { ...headingMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const headingPaddingLinkBtn = () => {
        setAttributes({
            headingPaddingLink: !headingPaddingLink
        });
    };

    const headingPaddingUnitsHandler = (unit) => {
        setAttributes({
            headingPaddingUnits: {
                ...headingPaddingUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default padding for Heading */
    const headingDesktopPaddingWidth = `${headingDesktopPadding.top}${headingPaddingUnits.Desktop} ${headingDesktopPadding.right}${headingPaddingUnits.Desktop} ${headingDesktopPadding.bottom}${headingPaddingUnits.Desktop} ${headingDesktopPadding.left}${headingPaddingUnits.Desktop}`;
    const headingTabletPaddingWidth = `${headingTabPadding.top}${headingPaddingUnits.Tablet} ${headingTabPadding.right}${headingPaddingUnits.Tablet} ${headingTabPadding.bottom}${headingPaddingUnits.Tablet} ${headingTabPadding.left}${headingPaddingUnits.Tablet}`;
    const headingMobilePaddingWidth = `${headingMobilePadding.top}${headingPaddingUnits.Mobile} ${headingMobilePadding.right}${headingPaddingUnits.Mobile} ${headingMobilePadding.bottom}${headingPaddingUnits.Mobile} ${headingMobilePadding.left}${headingPaddingUnits.Mobile}`;
    /** End Heading Padding */

    /** Start Heading Margin */
    const headingMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (headingMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        headingDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        headingTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        headingMobileMargin: {
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
                    setAttributes({ headingDesktopMargin: { ...headingDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ headingTabMargin: { ...headingTabMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ headingMobileMargin: { ...headingMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const headingMarginLinkBtn = () => {
        setAttributes({
            headingMarginLink: !headingMarginLink
        });
    };

    const headingMarginUnitsHandler = (unit) => {
        setAttributes({
            headingMarginUnits: {
                ...headingMarginUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default margin for Heading */
    const headingDesktopMarginWidth = `${headingDesktopMargin.top}${headingMarginUnits.Desktop} ${headingDesktopMargin.right}${headingMarginUnits.Desktop} ${headingDesktopMargin.bottom}${headingMarginUnits.Desktop} ${headingDesktopMargin.left}${headingMarginUnits.Desktop}`;
    const headingTabletMarginWidth = `${headingTabMargin.top}${headingMarginUnits.Tablet} ${headingTabMargin.right}${headingMarginUnits.Tablet} ${headingTabMargin.bottom}${headingMarginUnits.Tablet} ${headingTabMargin.left}${headingMarginUnits.Tablet}`;
    const headingMobileMarginWidth = `${headingMobileMargin.top}${headingMarginUnits.Mobile} ${headingMobileMargin.right}${headingMarginUnits.Mobile} ${headingMobileMargin.bottom}${headingMarginUnits.Mobile} ${headingMobileMargin.left}${headingMarginUnits.Mobile}`;
    /** End Heading Margin */

    /** Start Heading Border Radius */
    const headingBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (headingBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        headingDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        headingTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        headingMobileBorder: {
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
                    setAttributes({ headingDesktopBorder: { ...headingDesktopBorder, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ headingTabletBorder: { ...headingTabletBorder, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ headingMobileBorder: { ...headingMobileBorder, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const headingBorderLinkBtn = () => {
        setAttributes({
            headingBorderLink: !headingBorderLink
        });
    };

    const headingBorderUnitsHandler = (unit) => {
        setAttributes({
            headingBorderUnits: {
                ...headingBorderUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border radius for Heading */
    const headingDesktopBorderWidth = `${headingDesktopBorder.top}${headingBorderUnits.Desktop} ${headingDesktopBorder.right}${headingBorderUnits.Desktop} ${headingDesktopBorder.bottom}${headingBorderUnits.Desktop} ${headingDesktopBorder.left}${headingBorderUnits.Desktop}`;
    const headingTabletBorderWidth = `${headingTabletBorder.top}${headingBorderUnits.Tablet} ${headingTabletBorder.right}${headingBorderUnits.Tablet} ${headingTabletBorder.bottom}${headingBorderUnits.Tablet} ${headingTabletBorder.left}${headingBorderUnits.Tablet}`;
    const headingMobileBorderWidth = `${headingMobileBorder.top}${headingBorderUnits.Mobile} ${headingMobileBorder.right}${headingBorderUnits.Mobile} ${headingMobileBorder.bottom}${headingBorderUnits.Mobile} ${headingMobileBorder.left}${headingBorderUnits.Mobile}`;
    /** End Heading Border */

    /** Start Heading Border Radius */
    const headingBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (headingBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        headingDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        headingTabBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        headingMobileBorderRadius: {
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
                    setAttributes({ headingDesktopBorderRadius: { ...headingDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ headingTabBorderRadius: { ...headingTabBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ headingMobileBorderRadius: { ...headingMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const headingBorderRadiusLinkBtn = () => {
        setAttributes({
            headingBorderRadiusLink: !headingBorderRadiusLink
        });
    };

    const headingBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            headingBorderRadiusUnits: {
                ...headingBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border radius for Heading */
    const headingDesktopBorderRadiusWidth = `${headingDesktopBorderRadius.top}${headingBorderRadiusUnits.Desktop} ${headingDesktopBorderRadius.right}${headingBorderRadiusUnits.Desktop} ${headingDesktopBorderRadius.bottom}${headingBorderRadiusUnits.Desktop} ${headingDesktopBorderRadius.left}${headingBorderRadiusUnits.Desktop}`;
    const headingTabletBorderRadiusWidth = `${headingTabBorderRadius.top}${headingBorderRadiusUnits.Tablet} ${headingTabBorderRadius.right}${headingBorderRadiusUnits.Tablet} ${headingTabBorderRadius.bottom}${headingBorderRadiusUnits.Tablet} ${headingTabBorderRadius.left}${headingBorderRadiusUnits.Tablet}`;
    const headingMobileBorderRadiusWidth = `${headingMobileBorderRadius.top}${headingBorderRadiusUnits.Mobile} ${headingMobileBorderRadius.right}${headingBorderRadiusUnits.Mobile} ${headingMobileBorderRadius.bottom}${headingBorderRadiusUnits.Mobile} ${headingMobileBorderRadius.left}${headingBorderRadiusUnits.Mobile}`;
    /** End Heading Border Radius */

    /** Start Heading Border Radius */
    const headingBeforeAfterBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (headingBeforeAfterBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        headingBeforeAfterDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        headingBeforeAfterTabletBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        headingBeforeAfterMobileBorder: {
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
                    setAttributes({ headingBeforeAfterDesktopBorder: { ...headingBeforeAfterDesktopBorder, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ headingBeforeAfterTabletBorder: { ...headingBeforeAfterTabletBorder, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ headingBeforeAfterMobileBorder: { ...headingBeforeAfterMobileBorder, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const headingBeforeAfterBorderLinkBtn = () => {
        setAttributes({
            headingBeforeAfterBorderLink: !headingBeforeAfterBorderLink
        });
    };

    const headingBeforeAfterBorderUnitsHandler = (unit) => {
        setAttributes({
            headingBeforeAfterBorderUnits: {
                ...headingBeforeAfterBorderUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border for Heading */
    const headingBeforeAfterDesktopBorderWidth = `${headingBeforeAfterDesktopBorder.top}${headingBeforeAfterBorderUnits.Desktop} ${headingBeforeAfterDesktopBorder.right}${headingBeforeAfterBorderUnits.Desktop} ${headingBeforeAfterDesktopBorder.bottom}${headingBeforeAfterBorderUnits.Desktop} ${headingBeforeAfterDesktopBorder.left}${headingBeforeAfterBorderUnits.Desktop}`;
    const headingBeforeAfterTabletBorderWidth = `${headingBeforeAfterTabletBorder.top}${headingBeforeAfterBorderUnits.Tablet} ${headingBeforeAfterTabletBorder.right}${headingBeforeAfterBorderUnits.Tablet} ${headingBeforeAfterTabletBorder.bottom}${headingBeforeAfterBorderUnits.Tablet} ${headingBeforeAfterTabletBorder.left}${headingBeforeAfterBorderUnits.Tablet}`;
    const headingBeforeAfterMobileBorderWidth = `${headingBeforeAfterMobileBorder.top}${headingBeforeAfterBorderUnits.Mobile} ${headingBeforeAfterMobileBorder.right}${headingBeforeAfterBorderUnits.Mobile} ${headingBeforeAfterMobileBorder.bottom}${headingBeforeAfterBorderUnits.Mobile} ${headingBeforeAfterMobileBorder.left}${headingBeforeAfterBorderUnits.Mobile}`;
    /** End Heading Border */

    /** Start Heading Border Radius */
    const headingBeforeAfterBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (headingBeforeAfterBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        headingBeforeAfterDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        headingBeforeAfterTabletBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        headingBeforeAfterMobileBorderRadius: {
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
                    setAttributes({ headingBeforeAfterDesktopBorderRadius: { ...headingBeforeAfterDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ headingBeforeAfterTabletBorderRadius: { ...headingBeforeAfterTabletBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ headingBeforeAfterMobileBorderRadius: { ...headingBeforeAfterMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const headingBeforeAfterBorderRadiusLinkBtn = () => {
        setAttributes({
            headingBeforeAfterBorderRadiusLink: !headingBeforeAfterBorderRadiusLink
        });
    };

    const headingBeforeAfterBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            headingBeforeAfterBorderRadiusUnits: {
                ...headingBeforeAfterBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border radius for Heading */
    const headingBeforeAfterDesktopBorderRadiusWidth = `${headingBeforeAfterDesktopBorderRadius.top}${headingBeforeAfterBorderRadiusUnits.Desktop} ${headingBeforeAfterDesktopBorderRadius.right}${headingBeforeAfterBorderRadiusUnits.Desktop} ${headingBeforeAfterDesktopBorderRadius.bottom}${headingBeforeAfterBorderRadiusUnits.Desktop} ${headingBeforeAfterDesktopBorderRadius.left}${headingBeforeAfterBorderRadiusUnits.Desktop}`;
    const headingBeforeAfterTabletBorderRadiusWidth = `${headingBeforeAfterTabletBorderRadius.top}${headingBeforeAfterBorderRadiusUnits.Tablet} ${headingBeforeAfterTabletBorderRadius.right}${headingBeforeAfterBorderRadiusUnits.Tablet} ${headingBeforeAfterTabletBorderRadius.bottom}${headingBeforeAfterBorderRadiusUnits.Tablet} ${headingBeforeAfterTabletBorderRadius.left}${headingBeforeAfterBorderRadiusUnits.Tablet}`;
    const headingBeforeAfterMobileBorderRadiusWidth = `${headingBeforeAfterMobileBorderRadius.top}${headingBeforeAfterBorderRadiusUnits.Mobile} ${headingBeforeAfterMobileBorderRadius.right}${headingBeforeAfterBorderRadiusUnits.Mobile} ${headingBeforeAfterMobileBorderRadius.bottom}${headingBeforeAfterBorderRadiusUnits.Mobile} ${headingBeforeAfterMobileBorderRadius.left}${headingBeforeAfterBorderRadiusUnits.Mobile}`;
    /** End Heading Border Radius */

    /** Start Sub Heading Padding */
    const subHeadingPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (subHeadingPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        subHeadingDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        subHeadingTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        subHeadingMobilePadding: {
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
                    setAttributes({ subHeadingDesktopPadding: { ...subHeadingDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ subHeadingTabPadding: { ...subHeadingTabPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ subHeadingMobilePadding: { ...subHeadingMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const subHeadingPaddingLinkBtn = () => {
        setAttributes({
            subHeadingPaddingLink: !subHeadingPaddingLink
        });
    };

    const subHeadingPaddingUnitsHandler = (unit) => {
        setAttributes({
            subHeadingPaddingUnits: {
                ...subHeadingPaddingUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default padding for Sub Heading */
    const subHeadingDesktopPaddingWidth = `${subHeadingDesktopPadding.top}${subHeadingPaddingUnits.Desktop} ${subHeadingDesktopPadding.right}${subHeadingPaddingUnits.Desktop} ${subHeadingDesktopPadding.bottom}${subHeadingPaddingUnits.Desktop} ${subHeadingDesktopPadding.left}${subHeadingPaddingUnits.Desktop}`;
    const subHeadingTabletPaddingWidth = `${subHeadingTabPadding.top}${subHeadingPaddingUnits.Tablet} ${subHeadingTabPadding.right}${subHeadingPaddingUnits.Tablet} ${subHeadingTabPadding.bottom}${subHeadingPaddingUnits.Tablet} ${subHeadingTabPadding.left}${subHeadingPaddingUnits.Tablet}`;
    const subHeadingMobilePaddingWidth = `${subHeadingMobilePadding.top}${subHeadingPaddingUnits.Mobile} ${subHeadingMobilePadding.right}${subHeadingPaddingUnits.Mobile} ${subHeadingMobilePadding.bottom}${subHeadingPaddingUnits.Mobile} ${subHeadingMobilePadding.left}${subHeadingPaddingUnits.Mobile}`;
    /** End Sub Heading Padding */

    /** Start Sub Heading Margin */
    const subHeadingMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (subHeadingMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        subHeadingDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        subHeadingTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        subHeadingMobileMargin: {
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
                    setAttributes({ subHeadingDesktopMargin: { ...subHeadingDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ subHeadingTabMargin: { ...subHeadingTabMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ subHeadingMobileMargin: { ...subHeadingMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const subHeadingMarginLinkBtn = () => {
        setAttributes({
            subHeadingMarginLink: !subHeadingMarginLink
        });
    };

    const subHeadingMarginUnitsHandler = (unit) => {
        setAttributes({
            subHeadingMarginUnits: {
                ...subHeadingMarginUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default margin for Sub Heading */
    const subHeadingDesktopMarginWidth = `${subHeadingDesktopMargin.top}${subHeadingMarginUnits.Desktop} ${subHeadingDesktopMargin.right}${subHeadingMarginUnits.Desktop} ${subHeadingDesktopMargin.bottom}${subHeadingMarginUnits.Desktop} ${subHeadingDesktopMargin.left}${subHeadingMarginUnits.Desktop}`;
    const subHeadingTabletMarginWidth = `${subHeadingTabMargin.top}${subHeadingMarginUnits.Tablet} ${subHeadingTabMargin.right}${subHeadingMarginUnits.Tablet} ${subHeadingTabMargin.bottom}${subHeadingMarginUnits.Tablet} ${subHeadingTabMargin.left}${subHeadingMarginUnits.Tablet}`;
    const subHeadingMobileMarginWidth = `${subHeadingMobileMargin.top}${subHeadingMarginUnits.Mobile} ${subHeadingMobileMargin.right}${subHeadingMarginUnits.Mobile} ${subHeadingMobileMargin.bottom}${subHeadingMarginUnits.Mobile} ${subHeadingMobileMargin.left}${subHeadingMarginUnits.Mobile}`;
    /** End Sub Heading Margin */

    /** Start Sub Heading Border */
    const subHeadingBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (subHeadingBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        subHeadingDesktopBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        subHeadingTabBorder: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        subHeadingMobileBorder: {
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
                    setAttributes({ subHeadingDesktopBorder: { ...subHeadingDesktopBorder, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ subHeadingTabBorder: { ...subHeadingTabBorder, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ subHeadingMobileBorder: { ...subHeadingMobileBorder, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const subHeadingBorderLinkBtn = () => {
        setAttributes({
            subHeadingBorderLink: !subHeadingBorderLink
        });
    };

    const subHeadingBorderUnitsHandler = (unit) => {
        setAttributes({
            subHeadingBorderUnits: {
                ...subHeadingBorderUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border for Sub Heading */
    const subHeadingDesktopBorderWidth = `${subHeadingDesktopBorder.top}${subHeadingBorderUnits.Desktop} ${subHeadingDesktopBorder.right}${subHeadingBorderUnits.Desktop} ${subHeadingDesktopBorder.bottom}${subHeadingBorderUnits.Desktop} ${subHeadingDesktopBorder.left}${subHeadingBorderUnits.Desktop}`;
    const subHeadingTabletBorderWidth = `${subHeadingTabBorder.top}${subHeadingBorderUnits.Tablet} ${subHeadingTabBorder.right}${subHeadingBorderUnits.Tablet} ${subHeadingTabBorder.bottom}${subHeadingBorderUnits.Tablet} ${subHeadingTabBorder.left}${subHeadingBorderUnits.Tablet}`;
    const subHeadingMobileBorderWidth = `${subHeadingMobileBorder.top}${subHeadingBorderUnits.Mobile} ${subHeadingMobileBorder.right}${subHeadingBorderUnits.Mobile} ${subHeadingMobileBorder.bottom}${subHeadingBorderUnits.Mobile} ${subHeadingMobileBorder.left}${subHeadingBorderUnits.Mobile}`;
    /** End Sub Heading Border */

    /** Start Sub Heading Border Radius */
    const subHeadingBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (subHeadingBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        subHeadingDesktopBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        subHeadingTabBorderRadius: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        subHeadingMobileBorderRadius: {
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
                    setAttributes({ subHeadingDesktopBorderRadius: { ...subHeadingDesktopBorderRadius, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ subHeadingTabBorderRadius: { ...subHeadingTabBorderRadius, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ subHeadingMobileBorderRadius: { ...subHeadingMobileBorderRadius, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const subHeadingBorderRadiusLinkBtn = () => {
        setAttributes({
            subHeadingBorderRadiusLink: !subHeadingBorderRadiusLink
        });
    };

    const subHeadingBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            subHeadingBorderRadiusUnits: {
                ...subHeadingBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border radius for Sub Heading */
    const subHeadingDesktopBorderRadiusWidth = `${subHeadingDesktopBorderRadius.top}${subHeadingBorderRadiusUnits.Desktop} ${subHeadingDesktopBorderRadius.right}${subHeadingBorderRadiusUnits.Desktop} ${subHeadingDesktopBorderRadius.bottom}${subHeadingBorderRadiusUnits.Desktop} ${subHeadingDesktopBorderRadius.left}${subHeadingBorderRadiusUnits.Desktop}`;
    const subHeadingTabletBorderRadiusWidth = `${subHeadingTabBorderRadius.top}${subHeadingBorderRadiusUnits.Tablet} ${subHeadingTabBorderRadius.right}${subHeadingBorderRadiusUnits.Tablet} ${subHeadingTabBorderRadius.bottom}${subHeadingBorderRadiusUnits.Tablet} ${subHeadingTabBorderRadius.left}${subHeadingBorderRadiusUnits.Tablet}`;
    const subHeadingMobileBorderRadiusWidth = `${subHeadingMobileBorderRadius.top}${subHeadingBorderRadiusUnits.Mobile} ${subHeadingMobileBorderRadius.right}${subHeadingBorderRadiusUnits.Mobile} ${subHeadingMobileBorderRadius.bottom}${subHeadingBorderRadiusUnits.Mobile} ${subHeadingMobileBorderRadius.left}${subHeadingBorderRadiusUnits.Mobile}`;
    /** End Sub Heading Border Radius */

    /** Start Icon Border */
	const handleHeadingIconBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( headingIconBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						headingIconBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						headingIconBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						headingIconBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {headingIconBorderDesktop: {...headingIconBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {headingIconBorderTablet: {...headingIconBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {headingIconBorderMobile: {...headingIconBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handleHeadingIconBorderCombineBtn = () => {
		setAttributes( {headingIconBorderLink: !headingIconBorderLink} );
	}

	const handleHeadingIconBorderUnitsHandler = (unit) => {
		setAttributes( {
			headingIconBorderUnits: {
				...headingIconBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const headingIconDesktopBorderWidthValue = `${headingIconBorderDesktop.top}${headingIconBorderUnits.Desktop} ${headingIconBorderDesktop.right}${headingIconBorderUnits.Desktop} ${headingIconBorderDesktop.bottom}${headingIconBorderUnits.Desktop} ${headingIconBorderDesktop.left}${headingIconBorderUnits.Desktop}`;
	const headingIconTabletBorderWidthValue = `${headingIconBorderTablet.top}${headingIconBorderUnits.Tablet} ${headingIconBorderTablet.right}${headingIconBorderUnits.Tablet} ${headingIconBorderTablet.bottom}${headingIconBorderUnits.Tablet} ${headingIconBorderTablet.left}${headingIconBorderUnits.Tablet}`;
	const headingIconMobileBorderWidthValue = `${headingIconBorderMobile.top}${headingIconBorderUnits.Mobile} ${headingIconBorderMobile.right}${headingIconBorderUnits.Mobile} ${headingIconBorderMobile.bottom}${headingIconBorderUnits.Mobile} ${headingIconBorderMobile.left}${headingIconBorderUnits.Mobile}`;
	/** End Icon Border */

	/** Start Icon Border Radius */
	const handleHeadingIconBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( headingIconBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						headingIconBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						headingIconBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						headingIconBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {headingIconBorderRadiusDesktop: {...headingIconBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {headingIconBorderRadiusTablet: {...headingIconBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {headingIconBorderRadiusMobile: {...headingIconBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handleHeadingIconBorderRadiusCombineBtn = () => {
		setAttributes( {headingIconBorderRadiusLink: !headingIconBorderRadiusLink} );
	}

	const handleHeadingIconBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			headingIconBorderRadiusUnits: {
				...headingIconBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	const headingIconDesktopBorderRadiusWidthValue = `${headingIconBorderRadiusDesktop.top}${headingIconBorderRadiusUnits.Desktop} ${headingIconBorderRadiusDesktop.right}${headingIconBorderRadiusUnits.Desktop} ${headingIconBorderRadiusDesktop.bottom}${headingIconBorderRadiusUnits.Desktop} ${headingIconBorderRadiusDesktop.left}${headingIconBorderRadiusUnits.Desktop}`;
	const headingIconTabletBorderRadiusWidthValue = `${headingIconBorderRadiusTablet.top}${headingIconBorderRadiusUnits.Tablet} ${headingIconBorderRadiusTablet.right}${headingIconBorderRadiusUnits.Tablet} ${headingIconBorderRadiusTablet.bottom}${headingIconBorderRadiusUnits.Tablet} ${headingIconBorderRadiusTablet.left}${headingIconBorderRadiusUnits.Tablet}`;
	const headingIconMobileBorderRadiusWidthValue = `${headingIconBorderRadiusMobile.top}${headingIconBorderRadiusUnits.Mobile} ${headingIconBorderRadiusMobile.right}${headingIconBorderRadiusUnits.Mobile} ${headingIconBorderRadiusMobile.bottom}${headingIconBorderRadiusUnits.Mobile} ${headingIconBorderRadiusMobile.left}${headingIconBorderRadiusUnits.Mobile}`;
	/** End Icon Border Radius */

     /** Start Icon Padding */
    const headingIconPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (headingIconPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        headingIconDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        headingIconTabletPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        headingIconMobilePadding: {
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
                    setAttributes({ headingIconDesktopPadding: { ...headingIconDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ headingIconTabletPadding: { ...headingIconTabletPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ headingIconMobilePadding: { ...headingIconMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const headingIconPaddingLinkBtn = () => {
        setAttributes({
            headingPaddingLink: !headingPaddingLink
        });
    };

    const headingIconPaddingUnitsHandler = (unit) => {
        setAttributes({
            headingIconPaddingUnits: {
                ...headingIconPaddingUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default padding for Heading */
    const headingIconDesktopPaddingWidth = `${headingIconDesktopPadding.top}${headingIconPaddingUnits.Desktop} ${headingIconDesktopPadding.right}${headingIconPaddingUnits.Desktop} ${headingIconDesktopPadding.bottom}${headingIconPaddingUnits.Desktop} ${headingIconDesktopPadding.left}${headingIconPaddingUnits.Desktop}`;
    const headingIconTabletPaddingWidth = `${headingIconTabletPadding.top}${headingIconPaddingUnits.Tablet} ${headingIconTabletPadding.right}${headingIconPaddingUnits.Tablet} ${headingIconTabletPadding.bottom}${headingIconPaddingUnits.Tablet} ${headingIconTabletPadding.left}${headingIconPaddingUnits.Tablet}`;
    const headingIconMobilePaddingWidth = `${headingIconMobilePadding.top}${headingIconPaddingUnits.Mobile} ${headingIconMobilePadding.right}${headingIconPaddingUnits.Mobile} ${headingIconMobilePadding.bottom}${headingIconPaddingUnits.Mobile} ${headingIconMobilePadding.left}${headingIconPaddingUnits.Mobile}`;
    /** End Heading Padding */

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( headingGlobalPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						headingGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						headingGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						headingGlobalPaddingMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {headingGlobalPaddingDesktop: {...headingGlobalPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {headingGlobalPaddingTablet: {...headingGlobalPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {headingGlobalPaddingMobile: {...headingGlobalPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes( {headingGlobalPaddingLink: !headingGlobalPaddingLink} );
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes( {
			headingGlobalPaddingUnits: {
				...headingGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopPadding    = `${headingGlobalPaddingDesktop.top}${headingGlobalPaddingUnits.Desktop} ${headingGlobalPaddingDesktop.right}${headingGlobalPaddingUnits.Desktop} ${headingGlobalPaddingDesktop.bottom}${headingGlobalPaddingUnits.Desktop} ${headingGlobalPaddingDesktop.left}${headingGlobalPaddingUnits.Desktop}`;
	const globalTabletPadding     = `${headingGlobalPaddingTablet.top}${headingGlobalPaddingUnits.Tablet} ${headingGlobalPaddingTablet.right}${headingGlobalPaddingUnits.Tablet} ${headingGlobalPaddingTablet.bottom}${headingGlobalPaddingUnits.Tablet} ${headingGlobalPaddingTablet.left}${headingGlobalPaddingUnits.Tablet}`;
	const globalMobilePadding     = `${headingGlobalPaddingMobile.top}${headingGlobalPaddingUnits.Mobile} ${headingGlobalPaddingMobile.right}${headingGlobalPaddingUnits.Mobile} ${headingGlobalPaddingMobile.bottom}${headingGlobalPaddingUnits.Mobile} ${headingGlobalPaddingMobile.left}${headingGlobalPaddingUnits.Mobile}`;
	/** End Global Padding */

	/** Start Global Margin */
	const handleGlobalMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( headingGlobalMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						headingGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						headingGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						headingGlobalMarginMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {headingGlobalMarginDesktop: {...headingGlobalMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {headingGlobalMarginTablet: {...headingGlobalMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {headingGlobalMarginMobile: {...headingGlobalMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes( {headingGlobalMarginLink: !headingGlobalMarginLink} );
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes( {
			headingGlobalMarginUnits: {
				...headingGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const globalDesktopMargin = `${headingGlobalMarginDesktop.top}${headingGlobalMarginUnits.Desktop} ${headingGlobalMarginDesktop.right}${headingGlobalMarginUnits.Desktop} ${headingGlobalMarginDesktop.bottom}${headingGlobalMarginUnits.Desktop} ${headingGlobalMarginDesktop.left}${headingGlobalMarginUnits.Desktop}`;
	const globalTabletMargin = `${headingGlobalMarginTablet.top}${headingGlobalMarginUnits.Tablet} ${headingGlobalMarginTablet.right}${headingGlobalMarginUnits.Tablet} ${headingGlobalMarginTablet.bottom}${headingGlobalMarginUnits.Tablet} ${headingGlobalMarginTablet.left}${headingGlobalMarginUnits.Tablet}`;
	const globalMobileMargin = `${headingGlobalMarginMobile.top}${headingGlobalMarginUnits.Mobile} ${headingGlobalMarginMobile.right}${headingGlobalMarginUnits.Mobile} ${headingGlobalMarginMobile.bottom}${headingGlobalMarginUnits.Mobile} ${headingGlobalMarginMobile.left}${headingGlobalMarginUnits.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( headingGlobalBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						headingGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						headingGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						headingGlobalBorderMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {headingGlobalBorderDesktop: {...headingGlobalBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {headingGlobalBorderTablet: {...headingGlobalBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {headingGlobalBorderMobile: {...headingGlobalBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes( {headingGlobalBorderLink: !headingGlobalBorderLink} );
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes( {
			headingGlobalBorderUnits: {
				...headingGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopBorderWidth = `${headingGlobalBorderDesktop.top}${headingGlobalBorderUnits.Desktop} ${headingGlobalBorderDesktop.right}${headingGlobalBorderUnits.Desktop} ${headingGlobalBorderDesktop.bottom}${headingGlobalBorderUnits.Desktop} ${headingGlobalBorderDesktop.left}${headingGlobalBorderUnits.Desktop}`;
	const globalTabletBorderWidth = `${headingGlobalBorderTablet.top}${headingGlobalBorderUnits.Tablet} ${headingGlobalBorderTablet.right}${headingGlobalBorderUnits.Tablet} ${headingGlobalBorderTablet.bottom}${headingGlobalBorderUnits.Tablet} ${headingGlobalBorderTablet.left}${headingGlobalBorderUnits.Tablet}`;
	const globalMobileBorderWidth = `${headingGlobalBorderMobile.top}${headingGlobalBorderUnits.Mobile} ${headingGlobalBorderMobile.right}${headingGlobalBorderUnits.Mobile} ${headingGlobalBorderMobile.bottom}${headingGlobalBorderUnits.Mobile} ${headingGlobalBorderMobile.left}${headingGlobalBorderUnits.Mobile}`;
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( headingGlobalBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						headingGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						headingGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						headingGlobalBorderRadiusMobile: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				default:
					break;
			}
		} else {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {headingGlobalBorderRadiusDesktop: {...headingGlobalBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {headingGlobalBorderRadiusTablet: {...headingGlobalBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {headingGlobalBorderRadiusMobile: {...headingGlobalBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes( {headingGlobalBorderRadiusLink: !headingGlobalBorderRadiusLink} );
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			headingGlobalBorderRadiusUnits: {
				...headingGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */

	/** End Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${headingGlobalBorderRadiusDesktop.top}${headingGlobalBorderRadiusUnits.Desktop} ${headingGlobalBorderRadiusDesktop.right}${headingGlobalBorderRadiusUnits.Desktop} ${headingGlobalBorderRadiusDesktop.bottom}${headingGlobalBorderRadiusUnits.Desktop} ${headingGlobalBorderRadiusDesktop.left}${headingGlobalBorderRadiusUnits.Desktop}`;
	const globalTabletBorderRadiusWidth = `${headingGlobalBorderRadiusTablet.top}${headingGlobalBorderRadiusUnits.Tablet} ${headingGlobalBorderRadiusTablet.right}${headingGlobalBorderRadiusUnits.Tablet} ${headingGlobalBorderRadiusTablet.bottom}${headingGlobalBorderRadiusUnits.Tablet} ${headingGlobalBorderRadiusTablet.left}${headingGlobalBorderRadiusUnits.Tablet}`;
	const globalMobileBorderRadiusWidth = `${headingGlobalBorderRadiusMobile.top}${headingGlobalBorderRadiusUnits.Mobile} ${headingGlobalBorderRadiusMobile.right}${headingGlobalBorderRadiusUnits.Mobile} ${headingGlobalBorderRadiusMobile.bottom}${headingGlobalBorderRadiusUnits.Mobile} ${headingGlobalBorderRadiusMobile.left}${headingGlobalBorderRadiusUnits.Mobile}`;
	/** End Border Radius */

	useEffect(() => {
        if (headingFontFamily !== 'Default') {
            loadGoogleFont(headingFontFamily);
        }
        if (subHeadingFontFamily !== 'Default') {
            loadGoogleFont(subHeadingFontFamily);
        }
    }, [headingFontFamily, subHeadingFontFamily]);

    /**
     * Get background normal styles
     */
	const getBackgroundNormalStyles = (device) => {
		const bgType = headingGlobalBgNormalBackgroundType;
		const bgColor = headingGlobalBgNormalClassicColor;
		const bgGradient = headingGlobalBgNormalGradientColor;
		const customGradient = headingGlobalBgNormalCustomGradientInputValue;
		const customGradientEnabled = headingGlobalBgNormalCustomGradientSwitcher;

		const bgImageUrl = headingGlobalBgNormalBackgroundImageUrl?.[device];
		const bgImagePosition = headingGlobalBgNormalBackgroundImagePosition?.[device];
		const bgAttachment = headingGlobalBgNormalBackgroundImageAttachment?.[device];
		const bgRepeat = headingGlobalBgNormalBackgroundImageRepeat?.[device];
		const bgSize = headingGlobalBgNormalBackgroundImageSize?.[device];

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
		const bgType = headingGlobalBgHoverBackgroundType;
		const bgColor = headingGlobalBgHoverClassicColor;
		const bgGradient = headingGlobalBgHoverGradientColor;
		const customGradient = headingGlobalBgHoverCustomGradientInputValue;
		const customGradientEnabled = headingGlobalBgHoverCustomGradientSwitcher;

		const bgImageUrl = headingGlobalBgHoverBackgroundImageUrl?.[device];
		const bgImagePosition = headingGlobalBgHoverBackgroundImagePosition?.[device];
		const bgAttachment = headingGlobalBgHoverBackgroundImageAttachment?.[device];
		const bgRepeat = headingGlobalBgHoverBackgroundImageRepeat?.[device];
		const bgSize = headingGlobalBgHoverBackgroundImageSize?.[device];

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

    const allBlockStyle = useMemo(() => `
        .${blockId}.fb-advanced-heading-main-wrapper {
            ${advancedHeadingPositionType === 'default' ? `position: relative !important;` : ''}
            ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' ? `width: 100%;` : ''}
            ${advancedHeadingPositionType !== 'default' ? `position: ${advancedHeadingPositionType} !important;` : ''}
            ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingHZOrientationType === 'left' && advancedHeadingHZLeftOffset.Desktop ? `left: ${advancedHeadingHZLeftOffset.Desktop}${advancedHeadingHZLeftOffsetUnits.Desktop};` : ''}
            ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingHZOrientationType === 'right' && advancedHeadingHZRightOffset.Desktop ? `right: ${advancedHeadingHZRightOffset.Desktop}${advancedHeadingHZRightOffsetUnits.Desktop};` : ''}
            ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingVROrientationType === 'top' && advancedHeadingVRTopOffset.Desktop ? `top: ${advancedHeadingVRTopOffset.Desktop}${advancedHeadingVRTopOffsetUnits.Desktop};` : ''}
            ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingVROrientationType === 'bottom' && advancedHeadingVRBottomOffset.Desktop ? `bottom: ${advancedHeadingVRBottomOffset.Desktop}${advancedHeadingVRBottomOffsetUnits.Desktop};` : ''}
            ${headingGlobalZIndex.Desktop ? `z-index: ${headingGlobalZIndex.Desktop};` : ''}
            ${advancedHeadingOverflow !== 'default' ? `overflow: ${advancedHeadingOverflow};` : ''}
        }

        .${blockId} .fb-advanced-wrapper {
            ${desktopBackgroundNormalStyles}
            ${globalDesktopPadding && headingGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && headingGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''}
            ${headingGlobalBorder ? `border: ${headingGlobalBorder};` : ''}
            ${globalDesktopBorderWidth && headingGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && headingGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${headingGlobalBorderColor ? `border-color: ${headingGlobalBorderColor};` : ''}
            ${headingGlobalBoxShadowCssValue ? `box-shadow: ${headingGlobalBoxShadowCssValue};` : ''}

            ${headingAlignment.Desktop ? `text-align: ${headingAlignment.Desktop};` : ''}
            transition: all .3s ease-in-out;
            position: relative;
            display: flex;
            flex-direction: column;
        }
        .${blockId} .fb-advanced-wrapper:hover {
            ${desktopBackgroundHoverStyles}
            ${headingGlobalBorderHoverColor ? `border-color: ${headingGlobalBorderHoverColor};` : ''}
            ${headingGlobalBoxShadowHoverCssValue ? `box-shadow: ${headingGlobalBoxShadowHoverCssValue};` : ''}
        }

        .${blockId} .fb-advanced-wrapper .fb-advanced-heading-wrapper {
            ${
                headingBgColorType === "gradient"
                  ? `background: ${
                      headingBgCustomGradientColorSwitcher && headingBgCustomGradientColor
                        ? headingBgCustomGradientColor
                        : headingBgGradientColor
                    };`
                  : headingBgColor ? `background: ${headingBgColor};` : ''
            }
            transition: all .3s ease-in-out;
        }
        .${blockId} .fb-advanced-wrapper .fb-advanced-heading-wrapper:hover {
            ${
                headingBgHoverColorType === "gradient"
                  ? `background: ${
                      headingBgHoverCustomGradientColorSwitcher && headingBgHoverCustomGradientColor
                        ? headingBgHoverCustomGradientColor
                        : headingBgHoverGradientColor
                    };`
                  : headingBgHoverColor ? `background: ${headingBgHoverColor};` : ''
            }
            transition: all .3s ease-in-out;
        }
        .${blockId} .fb-advanced-wrapper .fb-advanced-heading,
        .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link {
            ${headingGlobalTypoSwitcher.fontFamily === true && headingGlobalTypographyData.fontFamily ? `font-family: ${headingGlobalTypographyData.fontFamily};` : ''}
            ${headingGlobalTypoSwitcher.fontSize === true && headingGlobalTypographyData.fontSize ? `font-size: ${headingGlobalTypographyData.fontSize};` : ''}
            ${headingGlobalTypoSwitcher.fontWeight === true && headingGlobalTypographyData.fontWeight ? `font-weight: ${headingGlobalTypographyData.fontWeight};` : ''}
            ${headingGlobalTypoSwitcher.fontStyle === true && headingGlobalTypographyData.fontStyle ? `font-style: ${headingGlobalTypographyData.fontStyle};` : ''}
            ${headingGlobalTypoSwitcher.textTransform === true && headingGlobalTypographyData.textTransform ? `text-transform: ${headingGlobalTypographyData.textTransform};` : ''}
            ${headingGlobalTypoSwitcher.textDecoration === true && headingGlobalTypographyData.textDecoration ? `text-decoration: ${headingGlobalTypographyData.textDecoration};` : ''}
            ${headingGlobalTypoSwitcher.letterSpacing === true && headingGlobalTypographyData.letterSpacing ? `letter-spacing: ${headingGlobalTypographyData.letterSpacing};` : ''}
            ${headingGlobalTypoSwitcher.lineHeight === true && headingGlobalTypographyData.lineHeight ? `line-height: ${headingGlobalTypographyData.lineHeight};` : ''}

            ${headingGlobalTypoSwitcher.fontFamily === false && headingFontFamily && headingFontFamily !== 'Default' ? `font-family: ${headingFontFamily};` : ''}
            ${headingGlobalTypoSwitcher.fontSize === false && headingFontSize.Desktop && headingFontSizeUnits.Desktop ? `font-size: ${headingFontSize.Desktop}${headingFontSizeUnits.Desktop};` : ''}
            ${headingGlobalTypoSwitcher.fontWeight === false && headingFontWeight ? `font-weight: ${headingFontWeight};` : ''}
            ${headingGlobalTypoSwitcher.fontStyle === false && headingFontStyle ? `font-style: ${headingFontStyle};` : ''}
            ${headingGlobalTypoSwitcher.textTransform === false && headingTextTransform ? `text-transform: ${headingTextTransform};` : ''}
            ${headingGlobalTypoSwitcher.textDecoration === false && headingTextDecoration ? `text-decoration: ${headingTextDecoration};` : ''}
            ${headingGlobalTypoSwitcher.letterSpacing === false && headingLetterSpacing.Desktop && headingLetterSpacingUnits.Desktop ? `letter-spacing: ${headingLetterSpacing.Desktop}${headingLetterSpacingUnits.Desktop};` : ''}
            ${headingGlobalTypoSwitcher.lineHeight === false && headingLineHeight.Desktop && headingLineHeightUnits.Desktop ? `line-height: ${headingLineHeight.Desktop}${headingLineHeightUnits.Desktop};` : ''}

            ${headingDesktopPaddingWidth && headingDesktopPadding?.top ? `padding: ${headingDesktopPaddingWidth};` : ''}
            ${headingDesktopMarginWidth && headingDesktopMargin?.top ? `margin: ${headingDesktopMarginWidth};` : ''}
            ${headingBorder ? `border: ${headingBorder};` : ''}
            ${headingDesktopBorderWidth && headingDesktopBorder?.top ? `border-width: ${headingDesktopBorderWidth};` : ''}
            ${headingDesktopBorderRadiusWidth && headingDesktopBorderRadius?.top ? `border-radius: ${headingDesktopBorderRadiusWidth};` : ''}
            ${headingBorderColor ? `border-color: ${headingBorderColor};` : ''}

            ${headingTextShadowCssValue ? `text-shadow: ${headingTextShadowCssValue};` : ''}

            ${headingColor ? `color: ${headingColor};` : ''}
            ${headingTextStroke ? `
                ${headingTextStroke.Desktop ? `-webkit-text-stroke: ${headingTextStroke.Desktop}px ${headingTextStrokeColor};` : ''}
                ${headingTextStroke.Desktop ? `text-stroke: ${headingTextStroke.Desktop}px ${headingTextStrokeColor};` : ''}
            ` : ''}
            ${headingBoxShadowCssValue ? `box-shadow: ${headingBoxShadowCssValue};` : ''}

            ${headingTextColorType === 'gradient' ? `
                background: ${headingTextCustomGradientColorSwitcher && headingTextCustomGradientColor ? headingTextCustomGradientColor : headingTextGradientColor};
                ${headingTextCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${headingTextGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}

            ${headingBackgroundImageEnabled && headingBackgroundImageUrl && headingBackgroundImageUrl !== 'null' ? `
                background-image: url(${headingBackgroundImageUrl});
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-position: center;
                background-size: contain;
            ` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockId} .fb-advanced-wrapper .fb-advanced-heading:hover,
        .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link:hover {
            ${headingHoverColor ? `color: ${headingHoverColor};` : ''}
            ${headingTextStrokeHoverColor ? `
                ${headingTextStroke.Desktop ? `-webkit-text-stroke: ${headingTextStroke.Desktop}px ${headingTextStrokeHoverColor};` : ''}
                ${headingTextStroke.Desktop ? `text-stroke: ${headingTextStroke.Desktop}px ${headingTextStrokeHoverColor};` : ''}
            ` : ''}

            ${headingTextHoverColorType === 'gradient' ? `
                background: ${headingTextHoverCustomGradientColorSwitcher && headingTextHoverCustomGradientColor ? headingTextHoverCustomGradientColor : headingTextHoverGradientColor};
                ${headingTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${headingTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}

            ${headingBorderHoverColor ? `border-color: ${headingBorderHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }

        ${headingBeforeAfterSwitcher ? `
        .${blockId} .fb-advanced-wrapper .fb-advanced-heading,
        .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link{
            display: flex;
            align-items: center;
            justify-content: center;
            ${headingBeforeAfterGap.Desktop ? `gap: ${headingBeforeAfterGap.Desktop}${headingBeforeAfterGapUnits.Desktop};` : ''}
        }
        .${blockId} .fb-advanced-wrapper .fb-advanced-heading::before,
        .${blockId} .fb-advanced-wrapper .fb-advanced-heading::after,
        .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link::before,
        .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link::after {
            content: '';
            ${headingBeforeAfterWidth.Desktop ? `width: ${headingBeforeAfterWidth.Desktop}${headingBeforeAfterWidthUnits.Desktop};` : 'flex-grow: 1;'}
            ${headingBeforeAfterHeight.Desktop ? `height: ${headingBeforeAfterHeight.Desktop}${headingBeforeAfterHeightUnits.Desktop};` : ''}
            ${headingBeforeAfterBorder ? `border: ${headingBeforeAfterBorder};` : ''}
            ${headingBeforeAfterDesktopBorderWidth && headingBeforeAfterDesktopBorder.top ? `border-width: ${headingBeforeAfterDesktopBorderWidth};` : ''}
            ${headingBeforeAfterDesktopBorderRadiusWidth && headingBeforeAfterDesktopBorderRadius.top ? `border-radius: ${headingBeforeAfterDesktopBorderRadiusWidth};` : ''}
            ${headingBeforeAfterBorderColor ? `border-color: ${headingBeforeAfterBorderColor};` : ''}
        }
        ` : ''}

        .${blockId} .fb-advanced-wrapper .fb-advanced-sub-heading-wrapper {
            ${
                subHeadingBgColorType === "gradient"
                  ? `background: ${
                      subHeadingBgCustomGradientColorSwitcher && subHeadingBgCustomGradientColor
                        ? subHeadingBgCustomGradientColor
                        : subHeadingBgGradientColor
                    };`
                  : subHeadingBgColor ? `background: ${subHeadingBgColor};` : ''
            }
            transition: all .3s ease-in-out;
        }
        .${blockId} .fb-advanced-wrapper .fb-advanced-sub-heading-wrapper:hover {
            ${
                subHeadingBgHoverColorType === "gradient"
                  ? `background: ${
                      subHeadingBgHoverCustomGradientColorSwitcher && subHeadingBgHoverCustomGradientColor
                        ? subHeadingBgHoverCustomGradientColor
                        : subHeadingBgHoverGradientColor
                    };`
                  : subHeadingBgHoverColor ? `background: ${subHeadingBgHoverColor};` : ''
            }
            transition: all .3s ease-in-out;
        }
        .${blockId} .fb-advanced-wrapper .fb-advanced-sub-heading {
            ${subHeadingColor ? `color: ${subHeadingColor};` : ''}
            ${subHeadingTextColorType === 'gradient' ? `
                background: ${subHeadingTextCustomGradientColorSwitcher && subHeadingTextCustomGradientColor ? subHeadingTextCustomGradientColor : subHeadingTextGradientColor};
                ${subHeadingTextCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${subHeadingTextGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}

            ${subHeadingGlobalTypoSwitcher.fontFamily === true && subHeadingGlobalTypographyData.fontFamily ? `font-family: ${subHeadingGlobalTypographyData.fontFamily};` : ''}
            ${subHeadingGlobalTypoSwitcher.fontSize === true && subHeadingGlobalTypographyData.fontSize ? `font-size: ${subHeadingGlobalTypographyData.fontSize};` : ''}
            ${subHeadingGlobalTypoSwitcher.fontWeight === true && subHeadingGlobalTypographyData.fontWeight ? `font-weight: ${subHeadingGlobalTypographyData.fontWeight};` : ''}
            ${subHeadingGlobalTypoSwitcher.fontStyle === true && subHeadingGlobalTypographyData.fontStyle ? `font-style: ${subHeadingGlobalTypographyData.fontStyle};` : ''}
            ${subHeadingGlobalTypoSwitcher.textTransform === true && subHeadingGlobalTypographyData.textTransform ? `text-transform: ${subHeadingGlobalTypographyData.textTransform};` : ''}
            ${subHeadingGlobalTypoSwitcher.textDecoration === true && subHeadingGlobalTypographyData.textDecoration ? `text-decoration: ${subHeadingGlobalTypographyData.textDecoration};` : ''}
            ${subHeadingGlobalTypoSwitcher.letterSpacing === true && subHeadingGlobalTypographyData.letterSpacing ? `letter-spacing: ${subHeadingGlobalTypographyData.letterSpacing};` : ''}
            ${subHeadingGlobalTypoSwitcher.lineHeight === true && subHeadingGlobalTypographyData.lineHeight ? `line-height: ${subHeadingGlobalTypographyData.lineHeight};` : ''}

            ${subHeadingGlobalTypoSwitcher.fontFamily === false && subHeadingFontFamily && subHeadingFontFamily !== 'Default' ? `font-family: ${subHeadingFontFamily};` : ''}
            ${subHeadingGlobalTypoSwitcher.fontSize === false && subHeadingFontSize.Desktop && subHeadingFontSizeUnits.Desktop ? `font-size: ${subHeadingFontSize.Desktop}${subHeadingFontSizeUnits.Desktop};` : ''}
            ${subHeadingGlobalTypoSwitcher.fontWeight === false && subHeadingFontWeight ? `font-weight: ${subHeadingFontWeight};` : ''}
            ${subHeadingGlobalTypoSwitcher.fontStyle === false && subHeadingFontStyle ? `font-style: ${subHeadingFontStyle};` : ''}
            ${subHeadingGlobalTypoSwitcher.textTransform === false && subHeadingTextTransform ? `text-transform: ${subHeadingTextTransform};` : ''}
            ${subHeadingGlobalTypoSwitcher.textDecoration === false && subHeadingTextDecoration ? `text-decoration: ${subHeadingTextDecoration};` : ''}
            ${subHeadingGlobalTypoSwitcher.letterSpacing === false && subHeadingLetterSpacing.Desktop && subHeadingLetterSpacingUnits.Desktop ? `letter-spacing: ${subHeadingLetterSpacing.Desktop}${subHeadingLetterSpacingUnits.Desktop};` : ''}
            ${subHeadingGlobalTypoSwitcher.lineHeight === false && subHeadingLineHeight.Desktop && subHeadingLineHeightUnits.Desktop ? `line-height: ${subHeadingLineHeight.Desktop}${subHeadingLineHeightUnits.Desktop};` : ''}

            ${subHeadingDesktopPaddingWidth && subHeadingDesktopPadding.top ? `padding: ${subHeadingDesktopPaddingWidth};` : ''}
            ${subHeadingDesktopMarginWidth && subHeadingDesktopMargin.top ? `margin: ${subHeadingDesktopMarginWidth};` : ''}
            ${subHeadingBorder ? `border: ${subHeadingBorder};` : ''}
            ${subHeadingDesktopBorderWidth && subHeadingDesktopBorder.top ? `border-width: ${subHeadingDesktopBorderWidth};` : ''}
            ${subHeadingDesktopBorderRadiusWidth && subHeadingDesktopBorderRadius.top ? `border-radius: ${subHeadingDesktopBorderRadiusWidth};` : ''}
            ${subHeadingBorderColor ? `border-color: ${subHeadingBorderColor};` : ''}
            ${subHeadingTextShadowCssValue ? `text-shadow: ${subHeadingTextShadowCssValue};` : ''}
            ${subHeadingTextStroke ? `
                ${subHeadingTextStroke.Desktop ? `-webkit-text-stroke: ${subHeadingTextStroke.Desktop}px ${subHeadingTextStrokeColor};` : ''}
                ${subHeadingTextStroke.Desktop ? `text-stroke: ${subHeadingTextStroke.Desktop}px ${subHeadingTextStrokeColor};` : ''}
            ` : ''}
            ${subHeadingBoxShadowCssValue ? `box-shadow: ${subHeadingBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockId} .fb-advanced-wrapper .fb-advanced-sub-heading:hover {
            ${subHeadingHoverColor ? `color: ${subHeadingHoverColor};` : ''}
            ${subHeadingTextHoverColorType === 'gradient' ? `
                background: ${subHeadingTextHoverCustomGradientColorSwitcher && subHeadingTextHoverCustomGradientColor ? subHeadingTextHoverCustomGradientColor : subHeadingTextHoverGradientColor};
                ${subHeadingTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${subHeadingTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}
            ${subHeadingBorderHoverColor ? `border-color: ${subHeadingBorderHoverColor};` : ''}
            ${subHeadingTextStroke ? `
                ${subHeadingTextStroke.Desktop ? `-webkit-text-stroke: ${subHeadingTextStroke.Desktop}px ${subHeadingTextStrokeHoverColor};` : ''}
                ${subHeadingTextStroke.Desktop ? `text-stroke: ${subHeadingTextStroke.Desktop}px ${subHeadingTextStrokeHoverColor};` : ''}
            ` : ''}
        }

        .${blockId} .fb-advanced-icon-wrapper {
            ${headingAlignment.Desktop ? `justify-content: ${headingAlignment.Desktop};` : ''}
            ${headingIconDesktopPaddingWidth && headingIconDesktopPadding.top ? `padding: ${headingIconDesktopPaddingWidth};` : ''}
            width: auto;
        }

        .${blockId} .fb-advanced-icon {
            ${headingIconBgSize.Desktop ? `width: ${headingIconBgSize.Desktop}${headingIconBgSizeUnits.Desktop};` : ''}
            ${headingIconBgSize.Desktop ? `height: ${headingIconBgSize.Desktop}${headingIconBgSizeUnits.Desktop};` : ''}
            ${headingIconBgColor ? `background-color: ${headingIconBgColor};` : ''}
            ${headingIconBorder ? `border: ${headingIconBorder};` : ''}
            ${headingIconDesktopBorderWidthValue && headingIconBorderDesktop?.top ? `border-width: ${headingIconDesktopBorderWidthValue};` : ''}
            ${headingIconBorderColor ? `border-color: ${headingIconBorderColor};` : ''}
            ${headingIconDesktopBorderRadiusWidthValue && headingIconBorderRadiusDesktop?.top ? `border-radius: ${headingIconDesktopBorderRadiusWidthValue};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockId} .fb-advanced-icon svg {
            ${headingIconSize.Desktop ? `width: ${headingIconSize.Desktop}${headingIconSizeUnits.Desktop};` : ''}
            ${headingIconSize.Desktop ? `height: ${headingIconSize.Desktop}${headingIconSizeUnits.Desktop};` : ''}
            ${headingIconColor ? `fill: ${headingIconColor};` : ''}
        }
        .${blockId} .fb-advanced-icon:hover {
            ${headingIconHoverColor ? `color: ${headingIconHoverColor};` : ''}
            ${headingIconBgHoverColor ? `background-color: ${headingIconBgHoverColor};` : ''}
            ${headingIconBorderHoverColor ? `border-color: ${headingIconBorderHoverColor};` : ''}
        }
        .${blockId} .fb-advanced-icon:hover svg {
            ${headingIconHoverColor ? `fill: ${headingIconHoverColor};` : ''}
        }

        .${blockId} .fb-advanced-wrapper .fb-advanced-title-separator {
            display: inline-block;
            ${separator  && separatorWidth.Desktop && separatorWidthUnits.Desktop ? `width: ${separatorWidth.Desktop}${separatorWidthUnits.Desktop};` : ''}
            ${separator !== 'zigzag' && separatorHeight.Desktop && separatorHeightUnits.Desktop ? `border-top-width: ${separatorHeight.Desktop}${separatorHeightUnits.Desktop};` : ''}
            ${separator !== 'zigzag' ? `border-top-style: ${separator};` : ''}
            ${separator !== 'zigzag' && separatorColor ? `border-top-color: ${separatorColor};` : ''}
            ${separatorPosition === 'bottom' ?
                `${separatorSpacing.Desktop && separatorSpacingUnits.Desktop ?
                    `margin-top: ${separatorSpacing.Desktop}${separatorSpacingUnits.Desktop};`
                    : ''}`
                : separatorPosition === 'top' ?
                `${separatorSpacing.Desktop && separatorSpacingUnits.Desktop ?
                    `margin-bottom: ${separatorSpacing.Desktop}${separatorSpacingUnits.Desktop};`
                    : ''}`
                : ''}
        }
        .${blockId} .fb-advanced-wrapper .fb-advanced-title-separator-zigzag {
           display: flex;
        }        
        .${blockId} .fb-advanced-wrapper .fb-advanced-title-separator:hover {
            ${separatorHoverColor ? `border-top-color: ${separatorHoverColor};` : ''}
        }
        .${blockId} .fb-advanced-wrapper .fb-advanced-heading.active-line::after,
        .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link.active-line::after {
            ${activeLineAfterWidth.Desktop && activeLineAfterWidthUnits.Desktop ? `width: ${activeLineAfterWidth.Desktop}${activeLineAfterWidthUnits.Desktop};` : ''}
            ${activeLineAfterHeight.Desktop && activeLineAfterHeightUnits.Desktop ? `height: ${activeLineAfterHeight.Desktop}${activeLineAfterHeightUnits.Desktop};` : ''}
            ${activeLineAfterColor ? `background-color: ${activeLineAfterColor};` : ''}
        }

        .${blockId} .fb-advanced-wrapper .fb-advanced-heading.active-line::before,
        .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link.active-line::before {
            ${activeLineBeforeWidth.Desktop && activeLineBeforeWidthUnits.Desktop ? `width: ${activeLineBeforeWidth.Desktop}${activeLineBeforeWidthUnits.Desktop};` : ''}
            ${activeLineBeforeHeight.Desktop && activeLineBeforeHeightUnits.Desktop ? `height: ${activeLineBeforeHeight.Desktop}${activeLineBeforeHeightUnits.Desktop};` : ''}
            ${activeLineBeforeColor ? `background-color: ${activeLineBeforeColor};` : ''}
        }

        @media only screen and (max-width: 1024px) {


            .${blockId}.fb-advanced-heading-main-wrapper {
                ${advancedHeadingPositionType !== 'default' ? `position: ${advancedHeadingPositionType};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingHZOrientationType === 'left' && advancedHeadingHZLeftOffset.Tablet ? `left: ${advancedHeadingHZLeftOffset.Tablet}${advancedHeadingHZLeftOffsetUnits.Tablet};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingHZOrientationType === 'right' && advancedHeadingHZRightOffset.Tablet ? `right: ${advancedHeadingHZRightOffset.Tablet}${advancedHeadingHZRightOffsetUnits.Tablet};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingVROrientationType === 'top' && advancedHeadingVRTopOffset.Tablet ? `top: ${advancedHeadingVRTopOffset.Tablet}${advancedHeadingVRTopOffsetUnits.Tablet};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingVROrientationType === 'bottom' && advancedHeadingVRBottomOffset.Tablet ? `bottom: ${advancedHeadingVRBottomOffset.Tablet}${advancedHeadingVRBottomOffsetUnits.Tablet};` : ''}
                ${headingGlobalZIndex.Tablet ? `z-index: ${headingGlobalZIndex.Tablet};` : ''}
            }

            .${blockId} .fb-advanced-wrapper {
                ${tabletBackgroundNormalStyles}
                ${globalTabletPadding && headingGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && headingGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
                ${globalTabletBorderWidth && headingGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && headingGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
                ${headingAlignment.Tablet ? `text-align: ${headingAlignment.Tablet};` : ''}
            }

            .${blockId} .fb-advanced-wrapper:hover {
                ${tabletBackgroundHoverStyles}
            }

            .${blockId} .fb-advanced-wrapper .fb-advanced-heading,
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link {
                ${headingGlobalTypoSwitcher.fontSize === false && headingFontSize.Tablet && headingFontSizeUnits.Tablet ? `font-size: ${headingFontSize.Tablet}${headingFontSizeUnits.Tablet};` : ''}
                ${headingGlobalTypoSwitcher.letterSpacing === false && headingLetterSpacing.Tablet && headingLetterSpacingUnits.Tablet ? `letter-spacing: ${headingLetterSpacing.Tablet}${headingLetterSpacingUnits.Tablet};` : ''}
                ${headingGlobalTypoSwitcher.lineHeight === false && headingLineHeight.Tablet && headingLineHeightUnits.Tablet ? `line-height: ${headingLineHeight.Tablet}${headingLineHeightUnits.Tablet};` : ''}
                ${headingTabletPaddingWidth && headingTabPadding.top ? `padding: ${headingTabletPaddingWidth};` : ''}
                ${headingTabletMarginWidth && headingTabMargin.top ? `margin: ${headingTabletMarginWidth};` : ''}
                ${headingTabletBorderWidth && headingTabletBorder.top? `border-width: ${headingTabletBorderWidth};` : ''}
                ${headingTabletBorderRadiusWidth && headingTabBorderRadius.top ? `border-radius: ${headingTabletBorderRadiusWidth};` : ''}

                ${headingTextStroke ? `
                    ${headingTextStroke.Tablet ? `-webkit-text-stroke: ${headingTextStroke.Tablet}px ${headingTextStrokeColor};` : ''}
                    ${headingTextStroke.Tablet ? `text-stroke: ${headingTextStroke.Tablet}px ${headingTextStrokeColor};` : ''}
                ` : ''}
            }

            .${blockId} .fb-advanced-wrapper .fb-advanced-heading:hover,
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link:hover {
                ${headingTextStrokeHoverColor ? `
                    ${headingTextStroke.Tablet ? `-webkit-text-stroke: ${headingTextStroke.Tablet}px ${headingTextStrokeHoverColor};` : ''}
                    ${headingTextStroke.Tablet ? `text-stroke: ${headingTextStroke.Tablet}px ${headingTextStrokeHoverColor};` : ''}
                ` : ''}
            }

            ${headingBeforeAfterSwitcher ? `
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading,
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link{
                ${headingBeforeAfterGap.Tablet ? `gap: ${headingBeforeAfterGap.Tablet}${headingBeforeAfterGapUnits.Tablet};` : ''}
            }
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading::before,
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading::after,
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link::before,
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link::after {
                ${headingBeforeAfterWidth.Tablet ? `width: ${headingBeforeAfterWidth.Tablet}${headingBeforeAfterWidthUnits.Tablet};` : 'flex-grow: 1;'}
                ${headingBeforeAfterHeight.Tablet ? `height: ${headingBeforeAfterHeight.Tablet}${headingBeforeAfterHeightUnits.Tablet};` : ''}
                ${headingBeforeAfterTabletBorderWidth && headingBeforeAfterTabletBorder.top ? `border-width: ${headingBeforeAfterTabletBorderWidth};` : ''}
                ${headingBeforeAfterTabletBorderRadiusWidth && headingBeforeAfterTabletBorderRadius.top ? `border-radius: ${headingBeforeAfterTabletBorderRadiusWidth};` : ''}
            }
            ` : ''}

            .${blockId} .fb-advanced-wrapper .fb-advanced-sub-heading {
                ${subHeadingGlobalTypoSwitcher.fontSize === false && subHeadingFontSize.Tablet && subHeadingFontSizeUnits.Tablet ? `font-size: ${subHeadingFontSize.Tablet}${subHeadingFontSizeUnits.Tablet};` : ''}
                ${subHeadingGlobalTypoSwitcher.letterSpacing === false && subHeadingLetterSpacing.Tablet && subHeadingLetterSpacingUnits.Tablet ? `letter-spacing: ${subHeadingLetterSpacing.Tablet}${subHeadingLetterSpacingUnits.Tablet};` : ''}
                ${subHeadingGlobalTypoSwitcher.lineHeight === false && subHeadingLineHeight.Tablet && subHeadingLineHeightUnits.Tablet ? `line-height: ${subHeadingLineHeight.Tablet}${subHeadingLineHeightUnits.Tablet};` : ''}
                ${subHeadingTabletPaddingWidth && subHeadingTabPadding.top ? `padding: ${subHeadingTabletPaddingWidth};` : ''}
                ${subHeadingTabletMarginWidth && subHeadingTabMargin.top ? `margin: ${subHeadingTabletMarginWidth};` : ''}
                ${subHeadingTabletBorderWidth && subHeadingTabBorder.top ? `border-width: ${subHeadingTabletBorderWidth};` : ''}
                ${subHeadingTabletBorderRadiusWidth && subHeadingTabBorderRadius.top ? `border-radius: ${subHeadingTabletBorderRadiusWidth};` : ''}
                ${subHeadingTextStroke ? `
                    ${subHeadingTextStroke.Tablet ? `-webkit-text-stroke: ${subHeadingTextStroke.Tablet}px ${subHeadingTextStrokeColor};` : ''}
                    ${subHeadingTextStroke.Tablet ? `text-stroke: ${subHeadingTextStroke.Tablet}px ${subHeadingTextStrokeColor};` : ''}
                ` : ''}
            }

            .${blockId} .fb-advanced-wrapper .fb-advanced-sub-heading:hover {
                ${subHeadingTextStroke ? `
                    ${subHeadingTextStroke.Tablet ? `-webkit-text-stroke: ${subHeadingTextStroke.Tablet}px ${subHeadingTextStrokeHoverColor};` : ''}
                    ${subHeadingTextStroke.Tablet ? `text-stroke: ${subHeadingTextStroke.Tablet}px ${subHeadingTextStrokeHoverColor};` : ''}
                ` : ''}
            }

            .${blockId} .fb-advanced-icon-wrapper {
                ${headingAlignment.Tablet ? `justify-content: ${headingAlignment.Tablet};` : ''}

                ${headingIconTabletPaddingWidth && headingIconTabletPadding.top ? `padding: ${headingIconTabletPaddingWidth};` : ''}
                width: auto;
            }

            .${blockId} .fb-advanced-icon {
                ${headingIconBgSize.Tablet ? `width: ${headingIconBgSize.Tablet}${headingIconBgSizeUnits.Tablet};` : ''}
                ${headingIconBgSize.Tablet ? `height: ${headingIconBgSize.Tablet}${headingIconBgSizeUnits.Tablet};` : ''}
                ${headingIconTabletBorderWidthValue && headingIconBorderTablet?.top ? `border-width: ${headingIconTabletBorderWidthValue};` : ''}
                ${headingIconTabletBorderRadiusWidthValue && headingIconBorderRadiusTablet?.top ? `border-radius: ${headingIconTabletBorderRadiusWidthValue};` : ''}
            }
            .${blockId} .fb-advanced-icon svg {
                ${headingIconSize.Tablet ? `width: ${headingIconSize.Tablet}${headingIconSizeUnits.Tablet};` : ''}
                ${headingIconSize.Tablet ? `height: ${headingIconSize.Tablet}${headingIconSizeUnits.Tablet};` : ''}
            }
            .${blockId} .fb-advanced-wrapper .fb-advanced-title-separator {
                ${separatorWidth.Tablet && separatorWidthUnits.Tablet ? `width: ${separatorWidth.Tablet}${separatorWidthUnits.Tablet};` : ''}
                ${separatorHeight.Tablet && separatorHeightUnits.Tablet ? `border-top-width: ${separatorHeight.Tablet}${separatorHeightUnits.Tablet};` : ''}
                ${separatorPosition === 'bottom' ?
                    `${separatorSpacing.Tablet && separatorSpacingUnits.Tablet ?
                        `margin-top: ${separatorSpacing.Tablet}${separatorSpacingUnits.Tablet};`
                        : ''}`
                    : separatorPosition === 'top' ?
                    `${separatorSpacing.Tablet && separatorSpacingUnits.Tablet ?
                        `margin-bottom: ${separatorSpacing.Tablet}${separatorSpacingUnits.Tablet};`
                        : ''}`
                    : ''}
            }
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading.active-line::after,
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link.active-line::after {
                ${activeLineAfterWidth.Tablet && activeLineAfterWidthUnits.Tablet ? `width: ${activeLineAfterWidth.Tablet}${activeLineAfterWidthUnits.Tablet};` : ''}
                ${activeLineAfterHeight.Tablet && activeLineAfterHeightUnits.Tablet ? `height: ${activeLineAfterHeight.Tablet}${activeLineAfterHeightUnits.Tablet};` : ''}
            }
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading.active-line::before,
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link.active-line::before {
                ${activeLineBeforeWidth.Tablet && activeLineBeforeWidthUnits.Tablet ? `width: ${activeLineBeforeWidth.Tablet}${activeLineBeforeWidthUnits.Tablet};` : ''}
                ${activeLineBeforeHeight.Tablet && activeLineBeforeHeightUnits.Tablet ? `height: ${activeLineBeforeHeight.Tablet}${activeLineBeforeHeightUnits.Tablet};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading,
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link {
                ${headingGlobalTypoSwitcher.fontSize === false && headingFontSize.Mobile && headingFontSizeUnits.Mobile ? `font-size: ${headingFontSize.Mobile}${headingFontSizeUnits.Mobile};` : ''}
                ${headingGlobalTypoSwitcher.letterSpacing === false && headingLetterSpacing.Mobile && headingLetterSpacingUnits.Mobile ? `letter-spacing: ${headingLetterSpacing.Mobile}${headingLetterSpacingUnits.Mobile};` : ''}
                ${headingGlobalTypoSwitcher.lineHeight === false && headingLineHeight.Mobile && headingLineHeightUnits.Mobile ? `line-height: ${headingLineHeight.Mobile}${headingLineHeightUnits.Mobile};` : ''}
                ${headingMobilePaddingWidth && headingMobilePadding.top ? `padding: ${headingMobilePaddingWidth};` : ''}
                ${headingMobileMarginWidth && headingMobileMargin.top ? `margin: ${headingMobileMarginWidth};` : ''}
                ${headingMobileBorderWidth && headingMobileBorder.top ? `border-width: ${headingMobileBorderWidth};` : ''}
                ${headingMobileBorderRadiusWidth && headingMobileBorderRadius.top? `border-radius: ${headingMobileBorderRadiusWidth};` : ''}
                ${headingTextStroke ? `
                    ${headingTextStroke.Mobile ? `-webkit-text-stroke: ${headingTextStroke.Mobile}px ${headingTextStrokeColor};` : ''}
                    ${headingTextStroke.Mobile ? `text-stroke: ${headingTextStroke.Mobile}px ${headingTextStrokeColor};` : ''}
                ` : ''}
            }

            .${blockId} .fb-advanced-wrapper .fb-advanced-heading:hover,
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link:hover {
                ${headingTextStrokeHoverColor ? `
                    ${headingTextStroke.Mobile ? `-webkit-text-stroke: ${headingTextStroke.Mobile}px ${headingTextStrokeHoverColor};` : ''}
                    ${headingTextStroke.Mobile ? `text-stroke: ${headingTextStroke.Mobile}px ${headingTextStrokeHoverColor};` : ''}
                ` : ''}
            }

            .${blockId} .fb-advanced-wrapper .fb-advanced-sub-heading {
                ${subHeadingGlobalTypoSwitcher.fontSize === false && subHeadingFontSize.Mobile && subHeadingFontSizeUnits.Mobile ? `font-size: ${subHeadingFontSize.Mobile}${subHeadingFontSizeUnits.Mobile};` : ''}
                ${subHeadingGlobalTypoSwitcher.letterSpacing === false && subHeadingLetterSpacing.Mobile && subHeadingLetterSpacingUnits.Mobile ? `letter-spacing: ${subHeadingLetterSpacing.Mobile}${subHeadingLetterSpacingUnits.Mobile};` : ''}
                ${subHeadingGlobalTypoSwitcher.lineHeight === false && subHeadingLineHeight.Mobile && subHeadingLineHeightUnits.Mobile ? `line-height: ${subHeadingLineHeight.Mobile}${subHeadingLineHeightUnits.Mobile};` : ''}
                ${subHeadingMobilePaddingWidth && subHeadingMobilePadding.top ? `padding: ${subHeadingMobilePaddingWidth};` : ''}
                ${subHeadingMobileMarginWidth && subHeadingMobileMargin.top ? `margin: ${subHeadingMobileMarginWidth};` : ''}
                ${subHeadingMobileBorderWidth && subHeadingMobileBorder.top ? `border-width: ${subHeadingMobileBorderWidth};` : ''}
                ${subHeadingMobileBorderRadiusWidth && subHeadingMobileBorderRadius.top ? `border-radius: ${subHeadingMobileBorderRadiusWidth};` : ''}
                ${subHeadingTextStroke ? `
                    ${subHeadingTextStroke.Mobile ? `-webkit-text-stroke: ${subHeadingTextStroke.Mobile}px ${subHeadingTextStrokeColor};` : ''}
                    ${subHeadingTextStroke.Mobile ? `text-stroke: ${subHeadingTextStroke.Mobile}px ${subHeadingTextStrokeColor};` : ''}
                ` : ''}
            }
            .${blockId} .fb-advanced-wrapper .fb-advanced-sub-heading:hover {
                ${subHeadingTextStroke ? `
                    ${subHeadingTextStroke.Mobile ? `-webkit-text-stroke: ${subHeadingTextStroke.Mobile}px ${subHeadingTextStrokeHoverColor};` : ''}
                    ${subHeadingTextStroke.Mobile ? `text-stroke: ${subHeadingTextStroke.Mobile}px ${subHeadingTextStrokeHoverColor};` : ''}
                ` : ''}
            }

            ${headingBeforeAfterSwitcher ? `
                .${blockId} .fb-advanced-wrapper .fb-advanced-heading,
                .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link{
                    ${headingBeforeAfterGap.Mobile ? `gap: ${headingBeforeAfterGap.Mobile}${headingBeforeAfterGapUnits.Mobile};` : ''}
                }
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading::before,
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading::after,
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link::before,
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link::after {
                ${headingBeforeAfterWidth.Mobile ? `width: ${headingBeforeAfterWidth.Mobile}${headingBeforeAfterWidthUnits.Mobile};` : 'flex-grow: 1;'}
                ${headingBeforeAfterHeight.Mobile ? `height: ${headingBeforeAfterHeight.Mobile}${headingBeforeAfterHeightUnits.Mobile};` : ''}
                ${headingBeforeAfterMobileBorderWidth && headingBeforeAfterMobileBorder.top ? `border-width: ${headingBeforeAfterMobileBorderWidth};` : ''}
                ${headingBeforeAfterMobileBorderRadiusWidth && headingBeforeAfterMobileBorderRadius.top ? `border-radius: ${headingBeforeAfterMobileBorderRadiusWidth};` : ''}
            }
            ` : ''}

            .${blockId} .fb-advanced-icon-wrapper {
                ${headingAlignment.Mobile ? `justify-content: ${headingAlignment.Mobile};` : ''}
                ${headingIconMobilePaddingWidth && headingIconMobilePadding.top ? `padding: ${headingIconMobilePaddingWidth};` : ''}
                width: auto;
            }

            .${blockId} .fb-advanced-icon {
                ${headingIconBgSize.Mobile ? `width: ${headingIconBgSize.Mobile}${headingIconBgSizeUnits.Mobile};` : ''}
                ${headingIconBgSize.Mobile ? `height: ${headingIconBgSize.Mobile}${headingIconBgSizeUnits.Mobile};` : ''}
                ${headingIconMobileBorderWidthValue && headingIconBorderMobile?.top ? `border-width: ${headingIconMobileBorderWidthValue};` : ''}
                ${headingIconMobileBorderRadiusWidthValue && headingIconBorderRadiusMobile?.top ? `border-radius: ${headingIconMobileBorderRadiusWidthValue};` : ''}
            }
            .${blockId} .fb-advanced-icon svg {
                ${headingIconSize.Mobile ? `width: ${headingIconSize.Mobile}${headingIconSizeUnits.Mobile};` : ''}
                ${headingIconSize.Mobile ? `height: ${headingIconSize.Mobile}${headingIconSizeUnits.Mobile};` : ''}
            }
            .${blockId} .fb-advanced-wrapper .fb-advanced-title-separator {
                ${separatorWidth.Mobile && separatorWidthUnits.Mobile ? `width: ${separatorWidth.Mobile}${separatorWidthUnits.Mobile};` : ''}
                ${separatorHeight.Mobile && separatorHeightUnits.Mobile ? `border-top-width: ${separatorHeight.Mobile}${separatorHeightUnits.Mobile};` : ''}
                ${separatorPosition === 'bottom' ?
                    `${separatorSpacing.Mobile && separatorSpacingUnits.Mobile ?
                        `margin-top: ${separatorSpacing.Mobile}${separatorSpacingUnits.Mobile};`
                        : ''}`
                    : separatorPosition === 'top' ?
                    `${separatorSpacing.Mobile && separatorSpacingUnits.Mobile ?
                        `margin-bottom: ${separatorSpacing.Mobile}${separatorSpacingUnits.Mobile};`
                        : ''}`
                    : ''}
            }

            .${blockId}.fb-advanced-heading-main-wrapper {
                ${advancedHeadingPositionType !== 'default' ? `position: ${advancedHeadingPositionType};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingHZOrientationType === 'left' && advancedHeadingHZLeftOffset.Mobile ? `left: ${advancedHeadingHZLeftOffset.Mobile}${advancedHeadingHZLeftOffsetUnits.Mobile};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingHZOrientationType === 'right' && advancedHeadingHZRightOffset.Mobile ? `right: ${advancedHeadingHZRightOffset.Mobile}${advancedHeadingHZRightOffsetUnits.Mobile};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingVROrientationType === 'top' && advancedHeadingVRTopOffset.Mobile ? `top: ${advancedHeadingVRTopOffset.Mobile}${advancedHeadingVRTopOffsetUnits.Mobile};` : ''}
                ${advancedHeadingPositionType !== 'default' && advancedHeadingPositionType !== 'relative' && advancedHeadingVROrientationType === 'bottom' && advancedHeadingVRBottomOffset.Mobile ? `bottom: ${advancedHeadingVRBottomOffset.Mobile}${advancedHeadingVRBottomOffsetUnits.Mobile};` : ''}
                ${headingGlobalZIndex.Mobile ? `z-index: ${headingGlobalZIndex.Mobile};` : ''}
            }
            .${blockId} .fb-advanced-wrapper {
                ${mobileBackgroundNormalStyles}
                ${globalMobilePadding && headingGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && headingGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
                ${globalMobileBorderWidth && headingGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && headingGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
                ${headingAlignment.Mobile ? `text-align: ${headingAlignment.Mobile};` : ''}
            }

            .${blockId} .fb-advanced-wrapper:hover {
                ${mobileBackgroundHoverStyles}
            }

            .${blockId} .fb-advanced-wrapper .fb-advanced-heading.active-line::after,
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link.active-line::after {
                ${activeLineAfterWidth.Mobile && activeLineAfterWidthUnits.Mobile ? `width: ${activeLineAfterWidth.Mobile}${activeLineAfterWidthUnits.Mobile};` : ''}
                ${activeLineAfterHeight.Mobile && activeLineAfterHeightUnits.Mobile ? `height: ${activeLineAfterHeight.Mobile}${activeLineAfterHeightUnits.Mobile};` : ''}
            }
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading.active-line::before,
            .${blockId} .fb-advanced-wrapper .fb-advanced-heading .fb-dynamic-link.active-line::before {
                ${activeLineBeforeWidth.Mobile && activeLineBeforeWidthUnits.Mobile ? `width: ${activeLineBeforeWidth.Mobile}${activeLineBeforeWidthUnits.Mobile};` : ''}
                ${activeLineBeforeHeight.Mobile && activeLineBeforeHeightUnits.Mobile ? `height: ${activeLineBeforeHeight.Mobile}${activeLineBeforeHeightUnits.Mobile};` : ''}
            }
        }
    `, [
    blockId,
    deviceType,
    headingText,
    headingTag,
    headingAlignment,

    headingTextColorTypeSwitcher,
    headingTextColorType,
    headingTextHoverColorType,
    headingColor,
    headingHoverColor,
    headingTextGradientColor,
    headingTextHoverGradientColor,
    headingTextCustomGradientColorSwitcher,
    headingTextCustomGradientColor,
    headingTextHoverCustomGradientColorSwitcher,
    headingTextHoverCustomGradientColor,

    headingBgColorTypeSwitcher,
    headingBgColorType,
    headingBgHoverColorType,
    headingBgColor,
    headingBgHoverColor,
    headingBgGradientColor,
    headingBgHoverGradientColor,
    headingBgCustomGradientColorSwitcher,
    headingBgCustomGradientColor,
    headingBgHoverCustomGradientColorSwitcher,
    headingBgHoverCustomGradientColor,

    headingGlobalTypoSwitcher,
    headingGlobalTypographyData,
    headingGlobalTypoType,
    headingFontFamily,
    headingFontSize,
    headingFontSizeUnits,
    headingFontWeight,
    headingFontStyle,
    headingTextTransform,
    headingTextDecoration,
    headingLetterSpacing,
    headingLetterSpacingUnits,
    headingLineHeight,
    headingLineHeightUnits,
    headingDesktopPaddingWidth,
    headingTabletPaddingWidth,
    headingMobilePaddingWidth,
    headingDesktopMarginWidth,
    headingTabletMarginWidth,
    headingMobileMarginWidth,
    headingBorder,
    headingDesktopBorderWidth,
    headingTabletBorderWidth,
    headingMobileBorderWidth,
    headingDesktopBorderRadiusWidth,
    headingTabletBorderRadiusWidth,
    headingMobileBorderRadiusWidth,
    headingBorderColor,
    headingTextShadowCssValue,
    headingTextColorTypeSwitcher,
    headingTextColorType,
    headingTextHoverColorType,
    headingTextStroke,
    headingTextStrokeColor,
    headingBoxShadowCssValue,
    headingBackgroundImageEnabled,
    headingBackgroundImageUrl,
    headingHoverColor,
    headingBorderHoverColor,
    headingTextStrokeHoverColor,
    headingTextGradientColor,
    headingTextHoverGradientColor,
    headingTextCustomGradientColor,
    headingTextHoverCustomGradientColor,

    subHeadingTextColorTypeSwitcher,
    subHeadingTextColorType,
    subHeadingTextHoverColorType,
    subHeadingColor,
    subHeadingHoverColor,
    subHeadingTextGradientColor,
    subHeadingTextHoverGradientColor,
    subHeadingTextCustomGradientColorSwitcher,
    subHeadingTextCustomGradientColor,
    subHeadingTextHoverCustomGradientColorSwitcher,
    subHeadingTextHoverCustomGradientColor,

    subHeadingBgColorTypeSwitcher,
    subHeadingBgColorType,
    subHeadingBgHoverColorType,
    subHeadingBgHoverColor,
    subHeadingBgGradientColor,
    subHeadingBgHoverGradientColor,
    subHeadingBgCustomGradientColorSwitcher,
    subHeadingBgCustomGradientColor,
    subHeadingBgHoverCustomGradientColorSwitcher,
    subHeadingBgHoverCustomGradientColor,

    subHeadingGlobalTypoSwitcher,
    subHeadingGlobalTypographyData,
    subHeadingGlobalTypoType,
    subHeadingFontFamily,
    subHeadingFontSize,
    subHeadingFontSizeUnits,
    subHeadingFontWeight,
    subHeadingFontStyle,
    subHeadingTextTransform,
    subHeadingTextDecoration,
    subHeadingLetterSpacing,
    subHeadingLetterSpacingUnits,
    subHeadingLineHeight,
    subHeadingLineHeightUnits,
    subHeadingDesktopPaddingWidth,
    subHeadingTabletPaddingWidth,
    subHeadingMobilePaddingWidth,
    subHeadingDesktopMarginWidth,
    subHeadingTabletMarginWidth,
    subHeadingMobileMarginWidth,
    subHeadingBorder,
    subHeadingDesktopBorderWidth,
    subHeadingTabletBorderWidth,
    subHeadingMobileBorderWidth,
    subHeadingDesktopBorderRadiusWidth,
    subHeadingTabletBorderRadiusWidth,
    subHeadingMobileBorderRadiusWidth,
    subHeadingBorderColor,
    subHeadingTextShadowCssValue,
    subHeadingTextStroke,
    subHeadingTextStrokeColorSwitcher,
    subHeadingTextStrokeColor,
    subHeadingTextStrokeHoverColor,
    subHeadingBoxShadowCssValue,
    subHeadingHoverColor,
    subHeadingBorderHoverColor,
    headingIconBgSize,
    headingIconBgSizeUnits,
    headingIconBgColor,
    headingIconBorder,
    headingIconDesktopBorderWidthValue,
    headingIconBorderColor,
    headingIconDesktopBorderRadiusWidthValue,
    headingIconSize,
    headingIconSizeUnits,
    headingIconColor,
    headingIconHoverColor,
    headingIconBgHoverColor,
    headingIconBorderHoverColor,
    headingIconDesktopPadding,
    headingIconTabletPadding,
    headingIconMobilePadding,
    separator,
    separatorWidth,
    separatorWidthUnits,
    separatorHeight,
    separatorHeightUnits,
    separatorColor,
    separatorHoverColor,
    separatorPosition,
    separatorSpacing,
    separatorSpacingUnits,
    headingGlobalZIndex,
    advancedHeadingOverflow,
    headingGlobalWraperID,
    headingGlobalWraperClass,
    globalDesktopPadding,
    globalDesktopMargin,
    headingGlobalBorder,
    globalDesktopBorderWidth,
    globalDesktopBorderRadiusWidth,


    headingGlobalBgColorSwitcher,
    headingGlobalBgNormalBackgroundType,
    headingGlobalBgNormalClassicColor,
    headingGlobalBgNormalGradientColor,
    headingGlobalBgNormalCustomGradientSwitcher,
    headingGlobalBgNormalCustomGradientInputValue,
    headingGlobalBgNormalBackgroundImageUrl,
    headingGlobalBgNormalBackgroundImagePosition,
    headingGlobalBgNormalBackgroundImageAttachment,
    headingGlobalBgNormalBackgroundImageRepeat,
    headingGlobalBgNormalBackgroundImageSize,

    headingGlobalBgHoverBackgroundType,
    headingGlobalBgHoverClassicColor,
    headingGlobalBgHoverGradientColor,
    headingGlobalBgHoverCustomGradientSwitcher,
    headingGlobalBgHoverCustomGradientInputValue,
    headingGlobalBgHoverBackgroundImageUrl,
    headingGlobalBgHoverBackgroundImagePosition,
    headingGlobalBgHoverBackgroundImageAttachment,
    headingGlobalBgHoverBackgroundImageRepeat,
    headingGlobalBgHoverBackgroundImageSize,

    headingGlobalBorderColor,
    headingGlobalBoxShadowSwitcher,
    headingGlobalBoxShadowValues,
    headingGlobalBoxShadowCssValue,
    headingGlobalBoxShadowHoverValues,
    headingGlobalBoxShadowHoverCssValue,
    headingGlobalBorderHoverColor,
    activeLineAfterWidth,
    activeLineAfterWidthUnits,
    activeLineAfterHeight,
    activeLineAfterHeightUnits,
    activeLineAfterColor,
    activeLineBeforeWidth,
    activeLineBeforeWidthUnits,
    activeLineBeforeHeight,
    activeLineBeforeHeightUnits,
    activeLineBeforeColor,
    globalTabletPadding,
    globalTabletMargin,
    globalTabletBorderWidth,
    globalTabletBorderRadiusWidth,
    globalMobilePadding,
    globalMobileMargin,
    globalMobileBorderWidth,
    globalMobileBorderRadiusWidth,
    headingIconTabletBorderWidthValue,
    headingIconTabletBorderRadiusWidthValue,
    headingIconMobileBorderWidthValue,
    headingIconMobileBorderRadiusWidthValue,

    // Position
    advancedHeadingPositionType,
    advancedHeadingHZOrientationType,
    advancedHeadingVROrientationType,
    advancedHeadingHZLeftOffset,
    advancedHeadingHZLeftOffsetUnits,
    advancedHeadingHZRightOffset,
    advancedHeadingHZRightOffsetUnits,
    advancedHeadingVRTopOffset,
    advancedHeadingVRTopOffsetUnits,
    advancedHeadingVRBottomOffset,
    advancedHeadingVRBottomOffsetUnits,

    /** Start Before After */
    headingBeforeAfterSwitcher,
    headingBeforeAfterWidth,
    headingBeforeAfterWidthUnits,
    headingBeforeAfterHeight,
    headingBeforeAfterHeightUnits,

    headingBeforeAfterGap,
    headingBeforeAfterGapUnits,

    headingBeforeAfterBorder,
    headingBeforeAfterBorderColor,

    headingBeforeAfterBorderUnits,
    headingBeforeAfterDesktopBorder,
    headingBeforeAfterTabletBorder,
    headingBeforeAfterMobileBorder,
    headingBeforeAfterBorderLink,
    headingBeforeAfterDesktopBorderWidth,
    headingBeforeAfterTabletBorderWidth,
    headingBeforeAfterMobileBorderWidth,

    headingBeforeAfterBorderRadiusUnits,
    headingBeforeAfterDesktopBorderRadius,
    headingBeforeAfterTabletBorderRadius,
    headingBeforeAfterMobileBorderRadius,
    headingBeforeAfterBorderRadiusLink,
    headingBeforeAfterDesktopBorderRadiusWidth,
    headingBeforeAfterTabletBorderRadiusWidth,
    headingBeforeAfterMobileBorderRadiusWidth,
    /** End Before After */

    dynamicEnabled,
    dynamicSource,
    dynamicPostId,
    dynamicPostType,
    dynamicPostLabel,
    dynamicField,
    dynamicEnableLink,
    dynamicFeaturedImageField,
    ]);

    const customCss = getCustomCss(advancedHeadingCustomCSS, `.${blockId}`);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle, customCss] );

    const editorStyle = `${allBlockStyle}${customCss}`.replace(/\s+/g, ' ').trim();

    /**
     * Date and Time Format Options
     */
    const dateFormatOptions = getDynamicDateFormatOptions(new Date());
    const timeFormatOptions = getDynamicTimeFormatOptions(new Date());

    /**
     * Exclude Post Types
     */
    const EXCLUDE_POST_TYPES = [
        'attachment','revision','nav_menu_item','custom_css','customize_changeset',
        'oembed_cache','user_request','wp_block','wp_navigation',
        'wp_template','wp_template_part','wp_global_styles',
        'wp_font_family','wp_font_face','wp_font_collection'
    ];

    /**
     * Post Types
     */
    const postTypes = useSelect((select) => {
        const all = select(coreStore).getPostTypes({ per_page: -1 }) || [];
        return all.filter(
        (pt) => pt.viewable && pt.supports?.title && !EXCLUDE_POST_TYPES.includes(pt.slug)
        );
    }, []);
    
    /**
     * Post Options
     */
    const postOptions = useSelect((select) => {
        const types = (postTypes || []).map((t) => t.slug);
        if (!types.length) return [];
      
        const items = [];
        types.forEach((t) => {
          const recs = select(coreStore).getEntityRecords('postType', t, {
            status: 'publish',
            per_page: 20,
            orderby: 'date',
            order: 'desc',
            _fields: ['id', 'title', 'type'],
          }) || [];
          recs.forEach((r) => items.push(r));
        });
      
        return items.map((r) => ({
          value: r.id,
          label: r.title?.rendered
            ? r.title.rendered.replace(/<[^>]+>/g, '')
            : '(no title)',
          meta: r.type,
        }));
    }, [postTypes]);

    const isPostBasedSource = dynamicEnabled && (dynamicSource === 'current_post' || dynamicSource === 'post_type');

    /**  
     * Featured Image Field
     */
    const [featuredField, setFeaturedField] = useState(dynamicFeaturedImageField || "title");

    useEffect(() => {
        setFeaturedField(dynamicFeaturedImageField || "title");
    }, [dynamicFeaturedImageField]);

    const selectedFeaturedField = useMemo(() => {
        const v = featuredField || "title";
        return (
        DYNAMIC_FEATURED_IMAGE_OPTIONS.find((o) => o.value === v) ||
        DYNAMIC_FEATURED_IMAGE_OPTIONS[0]
        );
    }, [featuredField]);

    const handleFeaturedFieldChange = (opt) => {
        const val = opt && typeof opt.value === "string" ? opt.value : "title";
        setFeaturedField(val);
        setAttributes({ dynamicFeaturedImageField: val });
    };

    /**
     * dynamicTermsTaxonomy
     */

    const [termsTaxonomy, setTermsTaxonomy] = useState(dynamicTermsTaxonomy || "category");

    useEffect(() => {
        setTermsTaxonomy(dynamicTermsTaxonomy || "category");
    }, [dynamicTermsTaxonomy]);

    const selectedTermsTaxonomy = useMemo(() => {
        const v = termsTaxonomy || "category";
        return (
        DYNAMIC_TAXONOMY_OPTIONS.find((o) => o.value === v) ||
        DYNAMIC_TAXONOMY_OPTIONS[0]
        );
    }, [termsTaxonomy]);

    const handleTermsTaxonomyChange = (opt) => {
        const val = opt && typeof opt.value === "string" ? opt.value : "category";
        setTermsTaxonomy(val);
        setAttributes({ dynamicTermsTaxonomy: val });
    };

    /**
     * dynamic link source
     */
    const [linkSource, setLinkSource] = useState(dynamicLinkSource || "post_permalink");

    useEffect(() => {
        setLinkSource(dynamicLinkSource || "post_permalink");
    }, [dynamicLinkSource]);

    const selectedLinkSource = useMemo(() => {
        const v = linkSource || "post_permalink";
        return (
        DYNAMIC_LINK_SOURCE_OPTIONS.find((o) => o.value === v) ||
        DYNAMIC_LINK_SOURCE_OPTIONS[0]
        );
    }, [linkSource]);

    const handleLinkSourceChange = (opt) => {
        const val = opt && typeof opt.value === "string" ? opt.value : "post_permalink";
        setLinkSource(val);
        setAttributes({ dynamicLinkSource: val });
    };

    /**
     * subHeadingPosition
     */
    const [subPos, setSubPos] = useState(subHeadingPosition || 'bottom');

    useEffect(() => {
        setSubPos(subHeadingPosition || 'bottom');
    }, [subHeadingPosition]);

    const selectedSubPosOption = useMemo(() => {
        const v = subPos || 'bottom';
        return (
            SUBHEADING_POSITION.find(o => o.value === v) ||
            SUBHEADING_POSITION[1]
        );
    }, [subPos]);

    const handleSubHeadingPositionChange = (opt) => {
        const val = (opt && typeof opt.value === 'string') ? opt.value : 'bottom';
        setSubPos(val);
        setAttributes({ subHeadingPosition: val });
    };

    /**
     * separator position
     */
    const [headingSeparatorPosition, setHeadingSeparatorPosition] = useState(separatorPosition || "top"); 

    useEffect(() => {
        setHeadingSeparatorPosition(separatorPosition || "top");
    }, [separatorPosition]);

    const selectedSeparatorPosition = useMemo(() => {
        const v = headingSeparatorPosition || "top";
        return (
        SEPARATOR_POSITION.find((o) => o.value === v) ||
        SEPARATOR_POSITION[1]
        );
    }, [headingSeparatorPosition]);

    const handleSeparatorPositionChange = (opt) => {
        const val = opt && typeof opt.value === "string" ? opt.value : "top";
        setHeadingSeparatorPosition(val);
        setAttributes({ separatorPosition: val });
    };

    /**
     * separator style
     */
    const [sep, setSep] = useState(separator || 'solid');

    useEffect(() => {
        setSep(separator || 'solid');
    }, [separator]);

    const selectedSeparator = useMemo(() => {
        const v = sep || 'solid';
        return (
            SEPARATOR_STYLE_OPTIONS.find(o => o.value === v) ||
            SEPARATOR_STYLE_OPTIONS[0]
        );
    }, [sep]);

    const handleSeparatorChange = (opt) => {
        const val = (opt && typeof opt.value === 'string') ? opt.value : 'solid';
        setSep(val);
        setAttributes({ separator: val });
    };

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <div className="fb-advanced-wrapper">
                <PanelBody
                    title={__("General", "frontis-blocks")}
                    initialOpen={true}
                >


                    <ToggleControl
                        label={__("Enable Dynamic Content", "frontis-blocks")}
                        checked={dynamicEnabled}
                        onChange={(value) => setAttributes({ dynamicEnabled: value })}
                    />

                    {dynamicEnabled && (
                        <>
                            <BaseControl
                                label={__("Data Source", "frontis-blocks")}
                                >
                                    <Select2 
                                        options={DYNAMIC_DATA_SOURCE_OPTIONS}
                                        value={DYNAMIC_DATA_SOURCE_OPTIONS.find(o => o.value === dynamicSource) || null }                                                     // option object
                                        onChange={(opt) => setAttributes({ dynamicSource: opt?.value ?? '' })}
                                        className="fb-select2-control"
                                    />
                            </BaseControl>

                            {dynamicSource === 'post_type' && (
                                <>
                                    <BaseControl label={__("Search Posts","frontis-blocks")}>
                                        <Select2
                                            options={postOptions}
                                            value={ postOptions.find(o => o.value === dynamicPostId) || null }
                                            onChange={(opt)=> setAttributes({
                                            dynamicPostId: opt?.value ?? 0,
                                            dynamicPostType: opt?.meta ?? '',
                                            dynamicPostLabel: opt?.label ?? ''
                                            })}
                                            className="fb-select2-control"
                                        />
                                    </BaseControl>
                                </>
                            )}

                            {isPostBasedSource && (
                                <>
                                <BaseControl
                                    label={__("Source Field", "frontis-blocks")}
                                    >
                                        <Select2 
                                            options={DYNAMIC_DATA_SOURCE_FIELD_OPTIONS}
                                            value={DYNAMIC_DATA_SOURCE_FIELD_OPTIONS.find(o => o.value === dynamicField) || null }                                                     // option object
                                            onChange={(opt) => setAttributes({ dynamicField: opt?.value ?? '' })}
                                            className="fb-select2-control"
                                        />
                                </BaseControl>

                                {dynamicField === 'post_thumbnail' && (
                                    <BaseControl
                                        label={__("Featured Image", "frontis-blocks")}
                                        >
                                            <Select2 
                                                options={DYNAMIC_FEATURED_IMAGE_OPTIONS} 
                                                value={selectedFeaturedField}
                                                onChange={handleFeaturedFieldChange}
                                                className="fb-select2-control"
                                            />
                                    </BaseControl>
                                )}

                                {dynamicField === 'post_date' && (
                                    <>
                                        <BaseControl
                                            label={__("Date Type", "frontis-blocks")}
                                            >
                                                <Select2 
                                                    options={DYNAMIC_DATE_TIME_TYPE_OPTIONS} 
                                                    value={DYNAMIC_DATE_TIME_TYPE_OPTIONS.find(o => o.value === dynamicDateType) || null }                                                     // option object
                                                    onChange={(opt) => setAttributes({ dynamicDateType: opt?.value ?? '' })}
                                                    className="fb-select2-control"
                                                />
                                        </BaseControl>
                                        <BaseControl
                                            label={__("Date Format", "frontis-blocks")}
                                            >
                                                <Select2 
                                                    options={dateFormatOptions} 
                                                    value={dateFormatOptions.find(o => o.value === dynamicDateFormat) || null }                                                     // option object
                                                    onChange={(opt) => setAttributes({ dynamicDateFormat: opt?.value ?? '' })}
                                                    className="fb-select2-control"
                                                />
                                        </BaseControl>
                                    </>
                                )}

                                {dynamicField === 'post_time' && (
                                    <>
                                        <BaseControl
                                            label={__("Date Type", "frontis-blocks")}
                                            >
                                                <Select2 
                                                    options={DYNAMIC_DATE_TIME_TYPE_OPTIONS} 
                                                    value={DYNAMIC_DATE_TIME_TYPE_OPTIONS.find(o => o.value === dynamicTimeType) || null }                                                     // option object
                                                    onChange={(opt) => setAttributes({ dynamicTimeType: opt?.value ?? '' })}
                                                    className="fb-select2-control"
                                                />
                                        </BaseControl>
                                        <BaseControl
                                            label={__("Time Format", "frontis-blocks")}
                                            >
                                                <Select2 
                                                    options={timeFormatOptions}  
                                                    value={timeFormatOptions.find(o => o.value === dynamicTimeFormat) || null }                                                     // option object
                                                    onChange={(opt) => setAttributes({ dynamicTimeFormat: opt?.value ?? '' })}
                                                    className="fb-select2-control"
                                                />
                                        </BaseControl>
                                    </>
                                )}

                                {dynamicField === 'comments_number' && (
                                    <>
                                        <TextControl
                                            label={__('No Comments Format', 'frontis-blocks')}
                                            value={dynamicCommentsZeroText}
                                            onChange={(value) => setAttributes({ dynamicCommentsZeroText: value })}
                                            help={__('Shown when there are 0 comments', 'frontis-blocks')}
                                        />
                                        <TextControl
                                            label={__('One Comment Format', 'frontis-blocks')}
                                            value={dynamicCommentsOneText}
                                            onChange={(value) => setAttributes({ dynamicCommentsOneText: value })}
                                            help={__('Shown when there is exactly 1 comment', 'frontis-blocks')}
                                        />
                                        <TextControl
                                            label={__('Many Comment Format', 'frontis-blocks')}
                                            value={dynamicCommentsManyText}
                                            onChange={(value) => setAttributes({ dynamicCommentsManyText: value })}
                                            help={__('Use {num} to insert the number', 'frontis-blocks')}
                                        />
                                    </>
                                )}

                                {dynamicField === 'post_terms' && (
                                    <>
                                        <BaseControl
                                            label={__("Taxonomy", "frontis-blocks")}
                                            >
                                                <Select2 
                                                    options={DYNAMIC_TAXONOMY_OPTIONS} 
                                                    value={selectedTermsTaxonomy}
                                                    onChange={handleTermsTaxonomyChange}
                                                    className="fb-select2-control"
                                                />
                                        </BaseControl>

                                        <TextControl
                                            label={__("Separator", "frontis-blocks")}
                                            value={dynamicTermsSeparator}
                                            onChange={(value) => setAttributes({ dynamicTermsSeparator: value })}
                                        />
                                    </>
                                )}
                                </>
                            )}

                            <ToggleControl
                            label={__("Enable Link", "frontis-blocks")}
                            checked={dynamicEnableLink}
                            onChange={(value) => setAttributes({ dynamicEnableLink: value })}
                            />

                            {dynamicEnableLink && (
                                <BaseControl
                                    label={__("Link Source", "frontis-blocks")}
                                >
                                    <Select2 
                                        options={DYNAMIC_LINK_SOURCE_OPTIONS}
                                        value={selectedLinkSource}
                                        onChange={handleLinkSourceChange}
                                        className="fb-select2-control"
                                    />
                                </BaseControl>
                            )}
                        </>
                    )}

                    <BaseControl label={__("Preset Style", "frontis-blocks")}>
                    <Select2
                        options={ADVANCED_HEADING_PRESETS}
                        value={selectedPresetOption}
                        onChange={(opt) => changeAdvancedHeadingPreset(opt?.value ?? '')}
                        isClearable={false}
                        className="fb-select2-control"
                    />
                    </BaseControl>

                    <BaseControl
                        label={__("Element Visibility", "frontis-blocks")}
                        className="fb-setting-show-hide-elements"
                    >
                        <ToggleControl
                            label={__("Show Sub Heading", "frontis-blocks")}
                            checked={subHeadingSwitcher}
                            onChange={(value) => setAttributes({ subHeadingSwitcher: value })}
                        />
                        <ToggleControl
                            label={__("Show Separator", "frontis-blocks")}
                            checked={showSeparatorSwitcher}
                            onChange={(value) => setAttributes({ showSeparatorSwitcher: value })}
                        />
                        <ToggleControl
                            label={__("Show Icon", "frontis-blocks")}
                            checked={headingIconSwitcher}
                            onChange={(value) => setAttributes({ headingIconSwitcher: value })}
                        />
                    </BaseControl>

                    <FB_ResponsiveAlignmentControl
                        label={__("Alignment", "frontis-blocks")}
                        globalAlignment={headingAlignment}
                        setGlobalAlignment={(value) => setAttributes({ headingAlignment: value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />
                </PanelBody>
                <PanelBody
                    title={__("Heading", "frontis-blocks")}
                    initialOpen={false}
                >
                    <FB_HtmlTagControl
                        label={__("Heading Tag", "frontis-blocks")}
                        globalHtmlTag={headingTag}
                        setGlobalHtmlTag={(value) => setAttributes({ headingTag: value })}
                    />

                    <div className="advanced-heading-block">
                        <div className="heading-input-wrapper">
                            <TextareaControl
                                label={__("Heading Text", "frontis-blocks")}
                                value={headingText}
                                onChange={(value) => setAttributes({ headingText: value })}
                                className="fb-advanced-text"
                            />
                        </div>
                    </div>
                </PanelBody>
            </div>
            {subHeadingSwitcher && (
                <PanelBody
                    title={__("Sub Heading", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-advanced-sub-heading-wrapper"
                >
                    <>
                        <BaseControl
                            label={__("Sub Heading Position", "frontis-blocks")}
                        >
                            <Select2 
                                options={SUBHEADING_POSITION} 
                                value={selectedSubPosOption} 
                                onChange={handleSubHeadingPositionChange}
                                className="fb-select2-control"
                            />
                        </BaseControl>

                        <FB_HtmlTagControl
                            label={__("Sub Heading Tag", "frontis-blocks")}
                            globalHtmlTag={subHeadingTag}
                            setGlobalHtmlTag={(value) => setAttributes({ subHeadingTag: value })}
                        />

                        <TextareaControl
                            label={__("Sub Heading Text", "frontis-blocks")}
                            value={subHeadingText}
                            onChange={(value) => setAttributes({ subHeadingText: value })}
                            className="fb-advanced-sub-heading-text"
                        />
                    </>

                </PanelBody>
            )}
            { showSeparatorSwitcher && (
                <PanelBody
                    title={__("Separator", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-advanced-separator-wrapper"
                >
                    <>
                        <BaseControl
                            label={__("Separator Position", "frontis-blocks")}
                        >
                            <Select2 
                                options={SEPARATOR_POSITION}
                                value={selectedSeparatorPosition} 
                                onChange={handleSeparatorPositionChange}
                                className="fb-select2-control"
                            />
                        </BaseControl>

                        <BaseControl label={__("Separator Style", "frontis-blocks")}>
                            <Select2
                                options={SEPARATOR_STYLE_OPTIONS}
                                value={selectedSeparator}
                                onChange={handleSeparatorChange}
                                className="fb-select2-control"
                            />
                        </BaseControl>
                    </>
                </PanelBody>
            )}
            {headingIconSwitcher && (
                <PanelBody
                    title={__("Icon", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-advanced-heading-icon"
                >
                <div className='fb-advanced-heading-icon-wrapper'>
                    <BaseControl
                        label={__("Icon", "frontis-blocks")}
                            id="fb-setting-text-alignment"
                            className="fb-setting-text-alignment"
                    >
                        <ButtonGroup
                            className="fb-setting-text-alignment-group-btn"
                        >
                            {ICON_ALIGN.map((item, key) => (
                                <Button
                                    key={key}
                                    onClick={() => setAttributes({ headingIconAlign: item.value })}
                                    className={`fb-setting-text-alignment-single-btn ${headingIconAlign === item.value ? 'active' : ''}`}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </ButtonGroup>
                        {headingIconAlign === 'icon' && (
                            <FBIconPicker value={headingIcon} setIconHandler={headingIconHandler} />
                        )}
                    </BaseControl>
                </div>
                </PanelBody>
            )}
        </>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
        <>
            <PanelBody
                title={__("Heading", "frontis-blocks")}
                initialOpen={true}
            >
                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={headingGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ headingGlobalTypographyData: value })}

                    globalTypoType={headingGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            headingGlobalTypoType: value,
                            headingGlobalTypoSwitcher: value === 'default' ? {...headingGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...headingGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={headingGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ headingGlobalTypoOption: value })}

                    fontFamily={headingFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ headingFontFamily: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={headingFontSize}
                    onChangeFontSize={(value) => setAttributes({ headingFontSize: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={headingFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ headingFontSizeUnits: value })}

                    fontWeight={headingFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ headingFontWeight: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={headingFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ headingFontStyle: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={headingTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ headingTextTransform: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={headingTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ headingTextDecoration: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={headingLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ headingLetterSpacing: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={headingLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ headingLetterSpacingUnits: value })}

                    lineHeight={headingLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ headingLineHeight: value, headingGlobalTypoSwitcher: {...headingGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={headingLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ headingLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_BackgroundColorControl
					label={__("Text Color", "frontis-blocks")}
					bgColorSwitcher={headingTextColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ headingTextColorTypeSwitcher: value })}

                    normalLabel={__("Text Color Type", "frontis-blocks")}
					normalBackgroundType={headingTextColorType}
					setNormalBackgroundType={(value) => setAttributes({ headingTextColorType: value })}
					normalClassicColor={headingColor}
					setNormalClassicColor={(value) => setAttributes({ headingColor: value === undefined ? '' : value })}
					normalGradientColor={headingTextGradientColor}
					setNormalGradientColor={(value) => setAttributes({ headingTextGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={headingTextCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ headingTextCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={headingTextCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ headingTextCustomGradientColor: value === undefined ? null : value })}

                    hoverLabel={__("Text Color Type", "frontis-blocks")}
					hoverBackgroundType={headingTextHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ headingTextHoverColorType: value })}
					hoverClassicColor={headingHoverColor}
					setHoverClassicColor={(value) => setAttributes({ headingHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={headingTextHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ headingTextHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={headingTextHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ headingTextHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={headingTextHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ headingTextHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}

				/>

                <FB_SwitcherControl
                    label={__("Highlight Color", "frontis-blocks")}
                    globalSwitcher={headingHighlightColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ headingHighlightColorSwitcher: value })}
                />

                {headingHighlightColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={headingHighlightColor}
                        setGlobalColor={(value) => setAttributes({ headingHighlightColor: value === undefined ? '' : value })}
                    />
                )}

                {headingHighlightColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={headingHighlightHoverColor}
                        setGlobalColor={(value) => setAttributes({ headingHighlightHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_BackgroundColorControl
					label={__("Background Color", "frontis-blocks")}
					bgColorSwitcher={headingBgColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ headingBgColorTypeSwitcher: value })}

					normalBackgroundType={headingBgColorType}
					setNormalBackgroundType={(value) => setAttributes({ headingBgColorType: value })}
					normalClassicColor={headingBgColor}
					setNormalClassicColor={(value) => setAttributes({ headingBgColor: value === undefined ? '' : value })}
					normalGradientColor={headingBgGradientColor}
					setNormalGradientColor={(value) => setAttributes({ headingBgGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={headingBgCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ headingBgCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={headingBgCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ headingBgCustomGradientColor: value === undefined ? null : value })}

					hoverBackgroundType={headingBgHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ headingBgHoverColorType: value })}
					hoverClassicColor={headingBgHoverColor}
					setHoverClassicColor={(value) => setAttributes({ headingBgHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={headingBgHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ headingBgHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={headingBgHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ headingBgHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={headingBgHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ headingBgHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}

				/>

                <ToggleControl
                    label={__("Enable Background Image", "frontis-blocks")}
                    checked={headingBackgroundImageEnabled}
                    onChange={(value) => setAttributes({ headingBackgroundImageEnabled: value })}
                />

                {headingBackgroundImageEnabled && (
                <BaseControl
                    label={__("Background Image", "frontis-blocks")}
                    className="fb-advanced-heading-bg-image"
                >
                    {headingBackgroundImageUrl ? (
                        <div className="fb-image-avatar-control" style={{backgroundImage: `url(${headingBackgroundImageUrl})`}}>
                            <button
                                className='fb-image-avatar-delete'
                                onClick={() => {
                                    setAttributes({
                                        headingBackgroundImageUrl: null,
                                        headingBackgroundImageAlt: null,
                                        headingBackgroundImageID: null,
                                    });
                                }}
                            >
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9431 22C18.466 22 22.9431 17.5228 22.9431 12C22.9431 6.47715 18.466 2 12.9431 2C7.42027 2 2.94312 6.47715 2.94312 12C2.94312 17.5228 7.42027 22 12.9431 22Z" stroke="#1C274C" strokeWidth="1.5"/>
                                    <path d="M15.4431 9.50002L10.4431 14.5M10.4431 9.5L15.4431 14.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>

                            </button>
                            <button
                                className='fb-image-replace-btn'
                                onClick={() => {
                                    const mediaUploader = wp.media({
                                        title: __('Select or Upload Background Image', 'frontis-blocks'),
                                        button: {
                                            text: __('Use this image', 'frontis-blocks'),
                                        },
                                        multiple: false
                                    });

                                    mediaUploader.on('select', function() {
                                        const attachment = mediaUploader.state().get('selection').first().toJSON();
                                        setAttributes({
                                            headingBackgroundImageUrl: attachment.url,
                                            headingBackgroundImageAlt: attachment.alt,
                                            headingBackgroundImageID: attachment.id,
                                        });
                                    });

                                    mediaUploader.open();
                                }}
                            >
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.4431 19.75C10.8573 19.75 11.1931 19.4142 11.1931 19C11.1931 18.5858 10.8573 18.25 10.4431 18.25V19.75ZM11.9431 5V5.75C12.2464 5.75 12.5199 5.56727 12.636 5.28701C12.7521 5.00676 12.6879 4.68417 12.4734 4.46967L11.9431 5ZM10.4734 2.46967C10.1806 2.17678 9.70568 2.17678 9.41279 2.46967C9.1199 2.76256 9.1199 3.23744 9.41279 3.53033L10.4734 2.46967ZM10.4431 18.25H9.9434V19.75H10.4431V18.25ZM9.94312 5.75H11.9431V4.25H9.94312V5.75ZM12.4734 4.46967L10.4734 2.46967L9.41279 3.53033L11.4128 5.53033L12.4734 4.46967ZM2.19312 12C2.19312 16.2802 5.66323 19.75 9.9434 19.75V18.25C6.49158 18.25 3.69312 15.4517 3.69312 12H2.19312ZM3.69312 12C3.69312 8.54822 6.49134 5.75 9.94312 5.75V4.25C5.66291 4.25 2.19312 7.71979 2.19312 12H3.69312Z" fill="#1C274C"/>
                                    <path d="M13.9431 19V18.25C13.6398 18.25 13.3663 18.4327 13.2502 18.713C13.1341 18.9932 13.1983 19.3158 13.4128 19.5303L13.9431 19ZM15.4128 21.5303C15.7057 21.8232 16.1805 21.8232 16.4734 21.5303C16.7663 21.2374 16.7663 20.7626 16.4734 20.4697L15.4128 21.5303ZM15.4431 4.25C15.0289 4.25 14.6931 4.58579 14.6931 5C14.6931 5.41421 15.0289 5.75 15.4431 5.75V4.25ZM15.9431 18.25H13.9431V19.75H15.9431V18.25ZM13.4128 19.5303L15.4128 21.5303L16.4734 20.4697L14.4734 18.4697L13.4128 19.5303ZM15.4431 5.75H15.9431V4.25H15.4431V5.75ZM22.1931 12C22.1931 15.4518 19.3949 18.25 15.9431 18.25V19.75C20.2233 19.75 23.6931 16.2802 23.6931 12H22.1931ZM23.6931 12C23.6931 7.71979 20.2233 4.25 15.9431 4.25V5.75C19.3949 5.75 22.1931 8.54822 22.1931 12H23.6931Z" fill="#1C274C"/>
                                </svg>
                                Replace
                            </button>
                        </div>
                    ) : (
                        <button
                            className='fb-image-upload-btn'
                            onClick={() => {
                                const mediaUploader = wp.media({
                                    title: __('Select or Upload Background Image', 'frontis-blocks'),
                                    button: {
                                        text: __('Use this image', 'frontis-blocks'),
                                    },
                                    multiple: false
                                });

                                mediaUploader.on('select', function() {
                                    const attachment = mediaUploader.state().get('selection').first().toJSON();
                                    setAttributes({
                                        headingBackgroundImageUrl: attachment.url,
                                        headingBackgroundImageAlt: attachment.alt,
                                        headingBackgroundImageID: attachment.id,
                                    });
                                });

                                mediaUploader.open();
                            }}
                        >
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M11.492 10.172l-2.5 3.064-.737-.677 3.737-4.559 3.753 4.585-.753.665-2.5-3.076v7.826h-1v-7.828zm7.008 9.828h-13c-2.481 0-4.5-2.018-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.789c.185-3.448 3.031-6.147 6.48-6.147 3.449 0 6.295 2.699 6.478 6.147l.044.789.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.482-2.019 4.5-4.5 4.5m.978-9.908c-.212-3.951-3.472-7.092-7.478-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.522-5.408"></path></svg>
                            Upload
                        </button>
                    )}
                </BaseControl>
                )}

                <FB_BoxShadowControl
                    label={__("Text Shadow", "frontis-blocks")}
                    onBoxShadowChange={(value) => setAttributes({ headingTextShadowValues: value })}
                    initialShadowValue={headingTextShadowValues}
                    onBoxShadowStyleChange={(value) => setAttributes({ headingTextShadowCssValue: value })}
                    isBoxShadow={false}
                />

                <FB_Range
                    min={0}
                    max={10}
                    label={__("Text Stroke", "frontis-blocks")}
                    rangeValue={headingTextStroke}
                    onChangeHandler={(value) => setAttributes({ headingTextStroke: value === 0 ? undefined : value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}

                />

                <FB_SwitcherControl
                    label={__("Text Stroke Color", "frontis-blocks")}
                    globalSwitcher={headingTextStrokeColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ headingTextStrokeColorSwitcher: value })}
                />

                {headingTextStrokeColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={headingTextStrokeColor}
                        setGlobalColor={(value) => setAttributes({ headingTextStrokeColor: value === undefined ? '' : value })}
                    />
                )}

                {headingTextStrokeColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={headingTextStrokeHoverColor}
                        setGlobalColor={(value) => setAttributes({ headingTextStrokeHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <ToggleControl
                    label={__("Active Line", "frontis-blocks")}
                    checked={activeLineSwitcher}
                    onChange={(value) => setAttributes({ activeLineSwitcher: value })}
                />

                {activeLineSwitcher && (
                    <>

                        <FB_ColorControl
                            label={__("Before Line Color", "frontis-blocks")}
                            globalColor={activeLineBeforeColor}
                            setGlobalColor={(value) => setAttributes({ activeLineBeforeColor: value === undefined ? '' : value })}
                        />
                        <FB_Range
                            min={0}
                            max={100}
                            label={__("Line Width", "frontis-blocks")}
                            rangeValue={activeLineBeforeWidth}
                            onChangeHandler={(value) => setAttributes({ activeLineBeforeWidth: value })}
                            rangeUnitHandler={(value) => setAttributes({ activeLineBeforeWidthUnits: value })}
                            deviceType={deviceType}
                            units={activeLineBeforeWidthUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                        />

                        <FB_Range
                            min={1}
                            max={20}
                            label={__("Line Height", "frontis-blocks")}
                            rangeValue={activeLineBeforeHeight}
                            onChangeHandler={(value) => setAttributes({ activeLineBeforeHeight: value })}
                            rangeUnitHandler={(value) => setAttributes({ activeLineBeforeHeightUnits: value })}
                            deviceType={deviceType}
                            units={activeLineBeforeHeightUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                        />

                        <FB_ColorControl
                            label={__("After Line Color", "frontis-blocks")}
                            globalColor={activeLineAfterColor}
                            setGlobalColor={(value) => setAttributes({ activeLineAfterColor: value === undefined ? '' : value })}
                        />
                        <FB_Range
                            min={0}
                            max={100}
                            label={__("Line Width", "frontis-blocks")}
                            rangeValue={activeLineAfterWidth}
                            onChangeHandler={(value) => setAttributes({ activeLineAfterWidth: value })}
                            rangeUnitHandler={(value) => setAttributes({ activeLineAfterWidthUnits: value })}
                            deviceType={deviceType}
                            units={activeLineAfterWidthUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                        />
                        <FB_Range
                            min={1}
                            max={20}
                            label={__("Line Height", "frontis-blocks")}
                            rangeValue={activeLineAfterHeight}
                            onChangeHandler={(value) => setAttributes({ activeLineAfterHeight: value })}
                            rangeUnitHandler={(value) => setAttributes({ activeLineAfterHeightUnits: value })}
                            deviceType={deviceType}
                            units={activeLineAfterHeightUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                        />
                    </>
                )}

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={headingBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ headingBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={headingBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ headingBorderColorSwitcher: value })}
                />

                {headingBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={headingBorderColor}
                        setGlobalColor={(value) => setAttributes({ headingBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {headingBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={headingBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ headingBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={headingBorderUnitsHandler}
                    spacingUnits={headingBorderUnits}
                    spacingDesktop={headingDesktopBorder}
                    spacingTablet={headingTabletBorder}
                    spacingMobile={headingMobileBorder}
                    handleSpacingUnitHandler={headingBorderUnitsChange}
                    spacingCombineBtn={headingBorderLink}
                    spacingCombineBtnHandler={headingBorderLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={headingBorderRadiusUnitsHandler}
                    spacingUnits={headingBorderRadiusUnits}
                    spacingDesktop={headingDesktopBorderRadius}
                    spacingTablet={headingTabBorderRadius}
                    spacingMobile={headingMobileBorderRadius}
                    handleSpacingUnitHandler={headingBorderRadiusUnitsChange}
                    spacingCombineBtn={headingBorderRadiusLink}
                    spacingCombineBtnHandler={headingBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_BoxShadowControl
                    label={__("Box Shadow", "frontis-blocks")}
                    onBoxShadowChange={(value) => setAttributes({ headingBoxShadowValues: value })}
                    initialShadowValue={headingBoxShadowValues}
                    onBoxShadowStyleChange={(value) => setAttributes({ headingBoxShadowCssValue: value })}
                />

                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={headingPaddingUnitsHandler}
                    spacingUnits={headingPaddingUnits}
                    spacingDesktop={headingDesktopPadding}
                    spacingTablet={headingTabPadding}
                    spacingMobile={headingMobilePadding}
                    handleSpacingUnitHandler={headingPaddingUnitsChange}
                    spacingCombineBtn={headingPaddingLink}
                    spacingCombineBtnHandler={headingPaddingLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={headingMarginUnitsHandler}
                    spacingUnits={headingMarginUnits}
                    spacingDesktop={headingDesktopMargin}
                    spacingTablet={headingTabMargin}
                    spacingMobile={headingMobileMargin}
                    handleSpacingUnitHandler={headingMarginUnitsChange}
                    spacingCombineBtn={headingMarginLink}
                    spacingCombineBtnHandler={headingMarginLinkBtn}
                    setAttributes={setAttributes}
                />

                <ToggleControl
                    label={__("Before After Switcher", "frontis-blocks")}
                    checked={headingBeforeAfterSwitcher}
                    onChange={(value) => setAttributes({ headingBeforeAfterSwitcher: value })}
                />

                {headingBeforeAfterSwitcher && (
                    <>
                        <FB_Range
                            min={1}
                            max={100}
                            label={__("Width", "frontis-blocks")}
                            rangeValue={headingBeforeAfterWidth}
                            onChangeHandler={(value) => setAttributes({ headingBeforeAfterWidth: value })}
                            rangeUnitHandler={(value) => setAttributes({ headingBeforeAfterWidthUnits: value })}
                            deviceType={deviceType}
                            units={headingBeforeAfterWidthUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                        />

                        <FB_Range
                            min={1}
                            max={100}
                            label={__("Height", "frontis-blocks")}
                            rangeValue={headingBeforeAfterHeight}
                            onChangeHandler={(value) => setAttributes({ headingBeforeAfterHeight: value })}
                            rangeUnitHandler={(value) => setAttributes({ headingBeforeAfterHeightUnits: value })}
                            deviceType={deviceType}
                            units={headingBeforeAfterHeightUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                        />

                        <FB_Range
                            min={1}
                            max={100}
                            label={__("Gap", "frontis-blocks")}
                            rangeValue={headingBeforeAfterGap}
                            onChangeHandler={(value) => setAttributes({ headingBeforeAfterGap: value })}
                            rangeUnitHandler={(value) => setAttributes({ headingBeforeAfterGapUnits: value })}
                            deviceType={deviceType}
                            units={headingBeforeAfterGapUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                        />

                        <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={headingBeforeAfterBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ headingBeforeAfterBorder: value })}
                        />

                        <FB_ColorControl
                            label={__("Border Color", "frontis-blocks")}
                            globalColor={headingBeforeAfterBorderColor}
                            setGlobalColor={(value) => setAttributes({ headingBeforeAfterBorderColor: value === undefined ? '' : value })}
                        />

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={headingBeforeAfterBorderUnitsHandler}
                            spacingUnits={headingBeforeAfterBorderUnits}
                            spacingDesktop={headingBeforeAfterDesktopBorder}
                            spacingTablet={headingBeforeAfterTabletBorder}
                            spacingMobile={headingBeforeAfterMobileBorder}
                            handleSpacingUnitHandler={headingBeforeAfterBorderUnitsChange}
                            spacingCombineBtn={headingBeforeAfterBorderLink}
                            spacingCombineBtnHandler={headingBeforeAfterBorderLinkBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={headingBeforeAfterBorderRadiusUnitsHandler}
                            spacingUnits={headingBeforeAfterBorderRadiusUnits}
                            spacingDesktop={headingBeforeAfterDesktopBorderRadius}
                            spacingTablet={headingBeforeAfterTabletBorderRadius}
                            spacingMobile={headingBeforeAfterMobileBorderRadius}
                            handleSpacingUnitHandler={headingBeforeAfterBorderRadiusUnitsChange}
                            spacingCombineBtn={headingBeforeAfterBorderRadiusLink}
                            spacingCombineBtnHandler={headingBeforeAfterBorderRadiusLinkBtn}
                            setAttributes={setAttributes}
                        />
                    </>
                )}
            </PanelBody>

            {subHeadingSwitcher && (
                <PanelBody
                    title={__("Sub Heading", "frontis-blocks")}
                    initialOpen={false}
                >
                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={subHeadingGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ subHeadingGlobalTypographyData: value })}

                        globalTypoType={subHeadingGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({
                                subHeadingGlobalTypoType: value,
                                subHeadingGlobalTypoSwitcher: value === 'default' ? {...subHeadingGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...subHeadingGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={subHeadingGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ subHeadingGlobalTypoOption: value })}

                        fontFamily={subHeadingFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ subHeadingFontFamily: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={subHeadingFontSize}
                        onChangeFontSize={(value) => setAttributes({ subHeadingFontSize: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={subHeadingFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ subHeadingFontSizeUnits: value })}

                        fontWeight={subHeadingFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ subHeadingFontWeight: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={subHeadingFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ subHeadingFontStyle: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={subHeadingTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ subHeadingTextTransform: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={subHeadingTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ subHeadingTextDecoration: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={subHeadingLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ subHeadingLetterSpacing: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={subHeadingLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ subHeadingLetterSpacingUnits: value })}

                        lineHeight={subHeadingLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ subHeadingLineHeight: value, subHeadingGlobalTypoSwitcher: {...subHeadingGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={subHeadingLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ subHeadingLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />
                    <FB_BoxShadowControl
                        label={__("Text Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ subHeadingTextShadowValues: value })}
                        initialShadowValue={subHeadingTextShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ subHeadingTextShadowCssValue: value })}
                        isBoxShadow={false}
                    />

                    <FB_Range
                        min={0}
                        max={10}
                        label={__("Text Stroke", "frontis-blocks")}
                        rangeValue={subHeadingTextStroke}
                        onChangeHandler={(value) => setAttributes({ subHeadingTextStroke: value === 0 ? undefined : value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}

                    />

                <FB_SwitcherControl
                    label={__("Text Stroke Color", "frontis-blocks")}
                    globalSwitcher={subHeadingTextStrokeColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ subHeadingTextStrokeColorSwitcher: value })}
                />

                {subHeadingTextStrokeColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={subHeadingTextStrokeColor}
                        setGlobalColor={(value) => setAttributes({ subHeadingTextStrokeColor: value === undefined ? '' : value })}
                    />
                )}

                {subHeadingTextStrokeColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={subHeadingTextStrokeHoverColor}
                        setGlobalColor={(value) => setAttributes({ subHeadingTextStrokeHoverColor: value === undefined ? '' : value })}
                    />
                )}


                    <FB_BackgroundColorControl
                        label={__("Text Color", "frontis-blocks")}
                        bgColorSwitcher={subHeadingTextColorTypeSwitcher}
                        setBgColorSwitcher={(value) => setAttributes({ subHeadingTextColorTypeSwitcher: value })}

                        normalLabel={__("Text Color Type", "frontis-blocks")}
                        normalBackgroundType={subHeadingTextColorType}
                        setNormalBackgroundType={(value) => setAttributes({ subHeadingTextColorType: value })}
                        normalClassicColor={subHeadingColor}
                        setNormalClassicColor={(value) => setAttributes({ subHeadingColor: value === undefined ? '' : value })}
                        normalGradientColor={subHeadingTextGradientColor}
                        setNormalGradientColor={(value) => setAttributes({ subHeadingTextGradientColor: value === undefined ? null : value })}
                        normalCustomGradientSwitcher={subHeadingTextCustomGradientColorSwitcher}
                        setNormalCustomGradientSwitcher={(value) => setAttributes({ subHeadingTextCustomGradientColorSwitcher: value })}
                        normalCustomGradientInputValue={subHeadingTextCustomGradientColor}
                        setNormalCustomGradientInputValue={(value) => setAttributes({ subHeadingTextCustomGradientColor: value === undefined ? null : value })}

                        hoverLabel={__("Text Color Type", "frontis-blocks")}
                        hoverBackgroundType={subHeadingTextHoverColorType}
                        setHoverBackgroundType={(value) => setAttributes({ subHeadingTextHoverColorType: value })}
                        hoverClassicColor={subHeadingHoverColor}
                        setHoverClassicColor={(value) => setAttributes({ subHeadingHoverColor: value === undefined ? '' : value })}
                        hoverGradientColor={subHeadingTextHoverGradientColor}
                        setHoverGradientColor={(value) => setAttributes({ subHeadingTextHoverGradientColor: value === undefined ? null : value })}
                        hoverCustomGradientSwitcher={subHeadingTextHoverCustomGradientColorSwitcher}
                        setHoverCustomGradientSwitcher={(value) => setAttributes({ subHeadingTextHoverCustomGradientColorSwitcher: value })}
                        hoverCustomGradientInputValue={subHeadingTextHoverCustomGradientColor}
                        setHoverCustomGradientInputValue={(value) => setAttributes({ subHeadingTextHoverCustomGradientColor: value === undefined ? null : value })}

                        isBackgroundImage={false}

                    />

                    <FB_BackgroundColorControl
                        label={__("Background Color", "frontis-blocks")}
                        bgColorSwitcher={subHeadingBgColorTypeSwitcher}
                        setBgColorSwitcher={(value) => setAttributes({ subHeadingBgColorTypeSwitcher: value })}

                        normalBackgroundType={subHeadingBgColorType}
                        setNormalBackgroundType={(value) => setAttributes({ subHeadingBgColorType: value })}
                        normalClassicColor={subHeadingBgColor}
                        setNormalClassicColor={(value) => setAttributes({ subHeadingBgColor: value === undefined ? '' : value })}
                        normalGradientColor={subHeadingBgGradientColor}
                        setNormalGradientColor={(value) => setAttributes({ subHeadingBgGradientColor: value === undefined ? null : value })}
                        normalCustomGradientSwitcher={subHeadingBgCustomGradientColorSwitcher}
                        setNormalCustomGradientSwitcher={(value) => setAttributes({ subHeadingBgCustomGradientColorSwitcher: value })}
                        normalCustomGradientInputValue={subHeadingBgCustomGradientColor}
                        setNormalCustomGradientInputValue={(value) => setAttributes({ subHeadingBgCustomGradientColor: value === undefined ? null : value })}

                        hoverBackgroundType={subHeadingBgHoverColorType}
                        setHoverBackgroundType={(value) => setAttributes({ subHeadingBgHoverColorType: value })}
                        hoverClassicColor={subHeadingBgHoverColor}
                        setHoverClassicColor={(value) => setAttributes({ subHeadingBgHoverColor: value === undefined ? '' : value })}
                        hoverGradientColor={subHeadingBgHoverGradientColor}
                        setHoverGradientColor={(value) => setAttributes({ subHeadingBgHoverGradientColor: value === undefined ? null : value })}
                        hoverCustomGradientSwitcher={subHeadingBgHoverCustomGradientColorSwitcher}
                        setHoverCustomGradientSwitcher={(value) => setAttributes({ subHeadingBgHoverCustomGradientColorSwitcher: value })}
                        hoverCustomGradientInputValue={subHeadingBgHoverCustomGradientColor}
                        setHoverCustomGradientInputValue={(value) => setAttributes({ subHeadingBgHoverCustomGradientColor: value === undefined ? null : value })}

                        isBackgroundImage={false}

                    />


                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={subHeadingBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ subHeadingBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={subHeadingBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ subHeadingBorderColorSwitcher: value })}
                    />

                    {subHeadingBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={subHeadingBorderColor}
                            setGlobalColor={(value) => setAttributes({ subHeadingBorderColor: value === undefined ? '' : value })}
                        />
                    )}

                    {subHeadingBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={subHeadingBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ subHeadingBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={subHeadingBorderUnitsHandler}
                        spacingUnits={subHeadingBorderUnits}
                        spacingDesktop={subHeadingDesktopBorder}
                        spacingTablet={subHeadingTabBorder}
                        spacingMobile={subHeadingMobileBorder}
                        handleSpacingUnitHandler={subHeadingBorderUnitsChange}
                        spacingCombineBtn={subHeadingBorderLink}
                        spacingCombineBtnHandler={subHeadingBorderLinkBtn}
                        setAttributes={setAttributes}
                    />
                    <FB_Spacing
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={subHeadingBorderRadiusUnitsHandler}
                        spacingUnits={subHeadingBorderRadiusUnits}
                        spacingDesktop={subHeadingDesktopBorderRadius}
                        spacingTablet={subHeadingTabBorderRadius}
                        spacingMobile={subHeadingMobileBorderRadius}
                        handleSpacingUnitHandler={subHeadingBorderRadiusUnitsChange}
                        spacingCombineBtn={subHeadingBorderRadiusLink}
                        spacingCombineBtnHandler={subHeadingBorderRadiusLinkBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_BoxShadowControl
                        label={__("Box Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ subHeadingBoxShadowValues: value })}
                        initialShadowValue={subHeadingBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ subHeadingBoxShadowCssValue: value })}
                    />

                    <FB_Spacing
                        label={__("Padding", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={subHeadingPaddingUnitsHandler}
                        spacingUnits={subHeadingPaddingUnits}
                        spacingDesktop={subHeadingDesktopPadding}
                        spacingTablet={subHeadingTabPadding}
                        spacingMobile={subHeadingMobilePadding}
                        handleSpacingUnitHandler={subHeadingPaddingUnitsChange}
                        spacingCombineBtn={subHeadingPaddingLink}
                        spacingCombineBtnHandler={subHeadingPaddingLinkBtn}
                        setAttributes={setAttributes}
                    />
                    <FB_Spacing
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={subHeadingMarginUnitsHandler}
                        spacingUnits={subHeadingMarginUnits}
                        spacingDesktop={subHeadingDesktopMargin}
                        spacingTablet={subHeadingTabMargin}
                        spacingMobile={subHeadingMobileMargin}
                        handleSpacingUnitHandler={subHeadingMarginUnitsChange}
                        spacingCombineBtn={subHeadingMarginLink}
                        spacingCombineBtnHandler={subHeadingMarginLinkBtn}
                        setAttributes={setAttributes}
                    />
                </PanelBody>
            )}

            {showSeparatorSwitcher && (
                <PanelBody
                    title={__("Separator", "frontis-blocks")}
                    initialOpen={false}
                >
                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={separatorColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ separatorColorSwitcher: value })}
                    />

                    {separatorColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={separatorColor}
                            setGlobalColor={(value) => setAttributes({ separatorColor: value === undefined ? '' : value })}
                        />
                    )}

                    {separatorColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={separatorHoverColor}
                            setGlobalColor={(value) => setAttributes({ separatorHoverColor: value === undefined ? '' : value })}
                        />
                    )}
                    <FB_Range
                        min={1}
                        max={1500}
                        label={__("Width", "frontis-blocks")}
                        rangeValue={separatorWidth}
                        onChangeHandler={(value) => setAttributes({ separatorWidth: value })}
                        rangeUnitHandler={(value) => setAttributes({ separatorWidthUnits: value })}
                        deviceType={deviceType}
                        units={separatorWidthUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={"100"}
                    />
                    {separator !== 'zigzag' && (
                        <FB_Range
                            min={1}
                            max={100}
                            label={__("Height", "frontis-blocks")}
                            rangeValue={separatorHeight}
                            onChangeHandler={(value) => setAttributes({ separatorHeight: value })}
                            rangeUnitHandler={(value) => setAttributes({ separatorHeightUnits: value })}
                            deviceType={deviceType}
                            units={separatorHeightUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                        />
                        
                    )}
                    <FB_Range
                        min={1}
                        max={100}
                        label={__("Spacing", "frontis-blocks")}
                        rangeValue={separatorSpacing}
                        onChangeHandler={(value) => setAttributes({ separatorSpacing: value })}
                        rangeUnitHandler={(value) => setAttributes({ separatorSpacingUnits: value })}
                        deviceType={deviceType}
                        units={separatorSpacingUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                    />

                </PanelBody>
            ) }

            {headingIconAlign !== "none" && headingIconSwitcher && (

                <PanelBody
                    title={__("Icon", "frontis-blocks")}
                    initialOpen={false}
                >
                <FB_Range
                    min={1}
                    max={200}
                    label={__("Icon Size", "frontis-blocks")}
                    rangeValue={headingIconSize}
                    onChangeHandler={(value) => setAttributes({ headingIconSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ headingIconSizeUnits: value })}
                    deviceType={deviceType}
                    units={headingIconSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"100"}
                />

                <FB_Range
                    min={0}
                    max={200}
                    label={__("Background Size", "frontis-blocks")}
                    rangeValue={headingIconBgSize}
                    onChangeHandler={(value) => setAttributes({ headingIconBgSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ headingIconBgSizeUnits: value })}
                    deviceType={deviceType}
                    units={headingIconBgSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={headingIconColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ headingIconColorSwitcher: value })}
                />

                {headingIconColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={headingIconColor}
                        setGlobalColor={(value) => setAttributes({ headingIconColor: value === undefined ? '' : value })}
                    />
                )}

                {headingIconColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={headingIconHoverColor}
                        setGlobalColor={(value) => setAttributes({ headingIconHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_SwitcherControl
                    label={__("Background Color", "frontis-blocks")}
                    globalSwitcher={headingIconBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ headingIconBgColorSwitcher: value })}
                />

                {headingIconBgColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={headingIconBgColor}
                        setGlobalColor={(value) => setAttributes({ headingIconBgColor: value === undefined ? '' : value })}
                    />
                )}

                {headingIconBgColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={headingIconBgHoverColor}
                        setGlobalColor={(value) => setAttributes({ headingIconBgHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={headingIconBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ headingIconBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={headingIconBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ headingIconBorderColorSwitcher: value })}
                />

                {headingIconBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={headingIconBorderColor}
                        setGlobalColor={(value) => setAttributes({ headingIconBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {headingIconBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={headingIconBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ headingIconBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleHeadingIconBorderUnitsHandler}
                    spacingUnits={headingIconBorderUnits}
                    spacingDesktop={headingIconBorderDesktop}
                    spacingTablet={headingIconBorderTablet}
                    spacingMobile={headingIconBorderMobile}
                    handleSpacingUnitHandler={handleHeadingIconBorderUnitChange}
                    spacingCombineBtn={headingIconBorderLink}
                    spacingCombineBtnHandler={handleHeadingIconBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleHeadingIconBorderRadiusUnitsHandler}
                    spacingUnits={headingIconBorderRadiusUnits}
                    spacingDesktop={headingIconBorderRadiusDesktop}
                    spacingTablet={headingIconBorderRadiusTablet}
                    spacingMobile={headingIconBorderRadiusMobile}
                    handleSpacingUnitHandler={handleHeadingIconBorderRadiusUnitChange}
                    spacingCombineBtn={headingIconBorderRadiusLink}
                    spacingCombineBtnHandler={handleHeadingIconBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={headingIconPaddingUnitsHandler}
                    spacingUnits={headingIconPaddingUnits}
                    spacingDesktop={headingIconDesktopPadding}
                    spacingTablet={headingIconTabletPadding}
                    spacingMobile={headingIconMobilePadding}
                    handleSpacingUnitHandler={headingIconPaddingUnitsChange}
                    spacingCombineBtn={headingIconPaddingLink}
                    spacingCombineBtnHandler={headingIconPaddingLinkBtn}
                    setAttributes={setAttributes}
                />

                </PanelBody>

            )}

        </>
	);

	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
		<>
            <div className="fb-setting-advanced-tab-wrapper">
                <div className="fb-setting-inner-wrapper">
                    <PanelBody
                        title={__("Layout", "frontis-blocks")}
                        initialOpen={true}
                        className='fb-setting-layout-header'
                    >
                        <FB_Range
                            min={0}
                            max={10000000}
                            label={__("Z Index", "frontis-blocks")}
                            rangeValue={headingGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ headingGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={advancedHeadingOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ advancedHeadingOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={advancedHeadingPositionType}
                            setPositionType={(value) => setAttributes({ advancedHeadingPositionType: value })}

                            HZOrientationType={advancedHeadingHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ advancedHeadingHZOrientationType: value })
                            }
                            VROrientationType={advancedHeadingVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ advancedHeadingVROrientationType: value })
                            }

                            HZLeftOffset={advancedHeadingHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ advancedHeadingHZLeftOffset: value })}
                            HZLeftOffsetUnits={advancedHeadingHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ advancedHeadingHZLeftOffsetUnits: value })}
                            HZRightOffset={advancedHeadingHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ advancedHeadingHZRightOffset: value })}
                            HZRightOffsetUnits={advancedHeadingHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ advancedHeadingHZRightOffsetUnits: value })}

                            VRTopOffset={advancedHeadingVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ advancedHeadingVRTopOffset: value })}
                            VRTopOffsetUnits={advancedHeadingVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ advancedHeadingVRTopOffsetUnits: value })}
                            VRBottomOffset={advancedHeadingVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ advancedHeadingVRBottomOffset: value })}
                            VRBottomOffsetUnits={advancedHeadingVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ advancedHeadingVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={headingGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ headingGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={headingGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ headingGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />

                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={headingGlobalPaddingUnits}
                            spacingDesktop={headingGlobalPaddingDesktop}
                            spacingTablet={headingGlobalPaddingTablet}
                            spacingMobile={headingGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={headingGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={headingGlobalMarginUnits}
                            spacingDesktop={headingGlobalMarginDesktop}
                            spacingTablet={headingGlobalMarginTablet}
                            spacingMobile={headingGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={headingGlobalMarginLink}
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
                            globalSwitcher={headingGlobalBgColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ headingGlobalBgColorSwitcher: value })}
                        />

                        {headingGlobalBgColorSwitcher === 'normal' && (
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
                                                <path d="M2.66699 14.666H13.3337" stroke="#1C274C"/>
                                                <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C"/>
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
                                                            onClick={() => setAttributes({ headingGlobalBgNormalBackgroundType: item.value })}
                                                            className={`fb-setting-background-color-panel-btn-switcher ${headingGlobalBgNormalBackgroundType === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {headingGlobalBgNormalBackgroundType === 'classic' && (

                                                <>
                                                    <FB_ColorControl
                                                        label={__("Color", "frontis-blocks")}
                                                        globalColor={headingGlobalBgNormalClassicColor}
                                                        setGlobalColor={(value) => setAttributes({ headingGlobalBgNormalClassicColor: value === undefined ? '' : value })}
                                                    />

                                                    <FB_ResponsiveBackgroundImageControl
                                                        deviceType={deviceType}
                                                        globalBackgroundImageUrl={headingGlobalBgNormalBackgroundImageUrl}
                                                        setGlobalBackgroundImageUrl={(value) => setAttributes({ headingGlobalBgNormalBackgroundImageUrl: value })}
                                                        globalBackgroundImagePosition={headingGlobalBgNormalBackgroundImagePosition}
                                                        setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ headingGlobalBgNormalBackgroundImagePosition: newPosition })}
                                                        globalBackgroundImageAttachment={headingGlobalBgNormalBackgroundImageAttachment}
                                                        setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ headingGlobalBgNormalBackgroundImageAttachment: newAttachment })}
                                                        globalBackgroundImageRepeat={headingGlobalBgNormalBackgroundImageRepeat}
                                                        setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ headingGlobalBgNormalBackgroundImageRepeat: newRepeat })}
                                                        globalBackgroundImageSize={headingGlobalBgNormalBackgroundImageSize}
                                                        setGlobalBackgroundImageSize={(newSize) => setAttributes({ headingGlobalBgNormalBackgroundImageSize: newSize })}
                                                        setAttributes={setAttributes}
                                                    />

                                                </>
                                            )}

                                            {headingGlobalBgNormalBackgroundType === 'gradient' && (
                                                <FB_GradientColorControl
                                                    globalCustomGradientSwitcher={headingGlobalBgNormalCustomGradientSwitcher}
                                                    setGlobalCustomGradientSwitcher={(value) => setAttributes({ headingGlobalBgNormalCustomGradientSwitcher: value })}
                                                    globalCustomGradientInputValue={headingGlobalBgNormalCustomGradientInputValue}
                                                    setGlobalCustomGradientInputValue={(value) => setAttributes({ headingGlobalBgNormalCustomGradientInputValue: value })}
                                                    globalGradientColor={headingGlobalBgNormalGradientColor}
                                                    setGlobalGradientColor={(value) => setAttributes({ headingGlobalBgNormalGradientColor: value === undefined ? null : value })}
                                                />
                                            )}
                                        </div>
                                    )}
                                />
                            </BaseControl>

                        )}

                        {headingGlobalBgColorSwitcher === 'hover' && (
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
                                                <path d="M2.66699 14.666H13.3337" stroke="#1C274C"/>
                                                <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C"/>
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
                                                            onClick={() => setAttributes({ headingGlobalBgHoverBackgroundType: item.value })}
                                                            className={`fb-setting-background-color-panel-btn-switcher ${headingGlobalBgHoverBackgroundType === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {headingGlobalBgHoverBackgroundType === 'classic' && (

                                                <>
                                                    <FB_ColorControl
                                                        label={__("Color", "frontis-blocks")}
                                                        globalColor={headingGlobalBgHoverClassicColor}
                                                        setGlobalColor={(value) => setAttributes({ headingGlobalBgHoverClassicColor: value === undefined ? '' : value })}
                                                    />

                                                    <FB_ResponsiveBackgroundImageControl
                                                        deviceType={deviceType}
                                                        globalBackgroundImageUrl={headingGlobalBgHoverBackgroundImageUrl}
                                                        setGlobalBackgroundImageUrl={(value) => setAttributes({ headingGlobalBgHoverBackgroundImageUrl: value })}
                                                        globalBackgroundImagePosition={headingGlobalBgHoverBackgroundImagePosition}
                                                        setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ headingGlobalBgHoverBackgroundImagePosition: newPosition })}
                                                        globalBackgroundImageAttachment={headingGlobalBgHoverBackgroundImageAttachment}
                                                        setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ headingGlobalBgHoverBackgroundImageAttachment: newAttachment })}
                                                        globalBackgroundImageRepeat={headingGlobalBgHoverBackgroundImageRepeat}
                                                        setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ headingGlobalBgHoverBackgroundImageRepeat: newRepeat })}
                                                        globalBackgroundImageSize={headingGlobalBgHoverBackgroundImageSize}
                                                        setGlobalBackgroundImageSize={(newSize) => setAttributes({ headingGlobalBgHoverBackgroundImageSize: newSize })}
                                                        setAttributes={setAttributes}
                                                    />

                                                </>
                                            )}

                                            {headingGlobalBgHoverBackgroundType === 'gradient' && (
                                                <FB_GradientColorControl
                                                    globalCustomGradientSwitcher={headingGlobalBgHoverCustomGradientSwitcher}
                                                    setGlobalCustomGradientSwitcher={(value) => setAttributes({ headingGlobalBgHoverCustomGradientSwitcher: value })}
                                                    globalCustomGradientInputValue={headingGlobalBgHoverCustomGradientInputValue}
                                                    setGlobalCustomGradientInputValue={(value) => setAttributes({ headingGlobalBgHoverCustomGradientInputValue: value })}
                                                    globalGradientColor={headingGlobalBgHoverGradientColor}
                                                    setGlobalGradientColor={(value) => setAttributes({ headingGlobalBgHoverGradientColor: value === undefined ? null : value })}
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
                                value={headingGlobalBorder}
                                options={BORDER_STYLES}
                                onChange={(value) => setAttributes({ headingGlobalBorder: value })}
                        />


                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={headingGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ headingGlobalBorderColorSwitcher: value })}
                        />

                        {headingGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={headingGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ headingGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {headingGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={headingGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ headingGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={headingGlobalBorderUnits}
                            spacingDesktop={headingGlobalBorderDesktop}
                            spacingTablet={headingGlobalBorderTablet}
                            spacingMobile={headingGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={headingGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={headingGlobalBorderRadiusUnits}
                            spacingDesktop={headingGlobalBorderRadiusDesktop}
                            spacingTablet={headingGlobalBorderRadiusTablet}
                            spacingMobile={headingGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={headingGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={headingGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ headingGlobalBoxShadowSwitcher: value })}
                        />

                        {headingGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ headingGlobalBoxShadowValues: value })}
                                initialShadowValue={headingGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ headingGlobalBoxShadowCssValue: value })}
                            />
                        )}

                        {headingGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ headingGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={headingGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ headingGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={advancedHeadingDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ advancedHeadingDesktopSwitcher: value })}

                            tabletValue={advancedHeadingTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ advancedHeadingTabletSwitcher: value })}

                            mobileValue={advancedHeadingMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ advancedHeadingMobileSwitcher: value })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={advancedHeadingCustomCSS}
                            onChangeValue={(value) => setAttributes({ advancedHeadingCustomCSS: value })}
                        />
                    </PanelBody>
                </div>
            </div>
		</>
	);

    return (
        <>
            <style>
                {editorStyle}
            </style>

            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />

        </>
    );
}
