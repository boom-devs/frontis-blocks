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
} from '@wordpress/components';

/**
 * Internal depencencies
 */
import {
    SEPARATOR_POSITION,
    SUBHEADING_POSITION,
    NORMAL_HOVER,
    UNIT_TYPES,
    TEXT_ALIGN,
    HEADING,
    SEPERATOR_STYLES,
    PRESETS,
    BORDER_STYLES,
    ICON_ALIGN,
} from "./constants/constants";

import { useState, useEffect, useMemo } from "@wordpress/element";
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_Range from '@Components/range';
import FBIconPicker from "../../components/icon-picker";
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import './editor.scss';

export default function Inspector ({ attributes, setAttributes,  clientId}) {
    const {
        blockId,
        deviceType,
        headingText,
        headingTag,
        headingAlignment,

        /** Start Heading Style */
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


        headingColorSwitcher,
        headingColor,
        headingHoverColor,
        headingBgColorSwitcher,
        headingBgColor,
        headingBgColorHover,

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

        subHeadingColorSwitcher,
        subHeadingColor,
        subHeadingHoverColor,
        subHeadingBgColorSwitcher,
        subHeadingBgColor,
        subHeadingBgColorHover,

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
        /** End Icon */

        /** Start Global Setting */
        headingGlobalZIndex,
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

        headingGlobalBgColorSwitcher,
        headingGlobalBgColor,
        headingGlobalBgHoverColor,

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

        headingGlobalBoxShadowValues,
        headingGlobalBoxShadowCssValue,
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

        blockStyle,
    } = attributes;



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



    /** Start Preset Style */
    const changeAdvancedHeadingPreset = (selectedPreset) => {
        const presetConfigurations = {
            "preset-0": {
                subHeadingSwitcher: false,
                showSeparatorSwitcher: false,
                headingBackgroundImageEnabled: false,
                headingIconSwitcher: false,
                headingTextShadowCssValue: "none",
                headingColor: "",
                headingTextStroke: "",
                headingTextStrokeColor: "",
                headingTextStrokeHoverColor: "",
            },
            "preset-1": {
                subHeadingSwitcher: true,
                showSeparatorSwitcher: false,
                headingBackgroundImageEnabled: false,
                headingIconSwitcher: false,
                headingTextShadowCssValue: "0px 18px 0px #399cff1a;",
                headingColor: "transparent",
                headingTextStroke: "2",
                headingTextStrokeColor: "#399CFF",
                headingTextStrokeHoverColor: "#399CFF",
            },
            "preset-2": {
                subHeadingSwitcher: true,
                subHeadingPosition: "bottom",
                showSeparatorSwitcher: true,
                separatorPosition: "bottom",
                headingBackgroundImageEnabled: true,
                headingIconSwitcher: false,
                headingTextShadowCssValue: "none",
                headingColor: "",
                headingTextStroke: "",
                headingTextStrokeColor: "",
                headingTextStrokeHoverColor: "",
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


    /* set default values for the style attributes */
    useEffect(() => {
        if (headingFontFamily) {
            const fontUrl = `https://fonts.googleapis.com/css?family=${headingFontFamily.replace(' ', '+')}`;
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = fontUrl;
            document.head.appendChild(linkElement);
        }
    }, [headingFontFamily]);

    useEffect(() => {
        if (subHeadingFontFamily) {
            const fontUrl = `https://fonts.googleapis.com/css?family=${subHeadingFontFamily.replace(' ', '+')}`;
            const linkElement = document.createElement('link');
            linkElement.rel = 'stylesheet';
            linkElement.href = fontUrl;
            document.head.appendChild(linkElement);
        }
    }, [subHeadingFontFamily]);

    const allBlockStyle = useMemo(() => `
        .${blockId}.fb-advanced-wrapper .fb-advanced-heading {
            ${headingColor ? `color: ${headingColor};` : ''}
            ${headingBgColor ? `background-color: ${headingBgColor};` : ''}
            ${headingFontFamily ? `font-family: ${headingFontFamily};` : ''}
            ${headingFontSize.Desktop && headingFontSizeUnits.Desktop ? `font-size: ${headingFontSize.Desktop}${headingFontSizeUnits.Desktop};` : ''}
            ${headingFontWeight ? `font-weight: ${headingFontWeight};` : ''}
            ${headingFontStyle ? `font-style: ${headingFontStyle};` : ''}
            ${headingTextTransform ? `text-transform: ${headingTextTransform};` : ''}
            ${headingTextDecoration ? `text-decoration: ${headingTextDecoration};` : ''}
            ${headingLetterSpacing.Desktop && headingLetterSpacingUnits.Desktop ? `letter-spacing: ${headingLetterSpacing.Desktop}${headingLetterSpacingUnits.Desktop};` : ''}
            ${headingLineHeight.Desktop && headingLineHeightUnits.Desktop ? `line-height: ${headingLineHeight.Desktop}${headingLineHeightUnits.Desktop};` : ''}
            ${headingDesktopPaddingWidth ? `padding: ${headingDesktopPaddingWidth};` : ''}
            ${headingDesktopMarginWidth ? `margin: ${headingDesktopMarginWidth};` : ''}
            ${headingBorder ? `border: ${headingBorder};` : ''}
            ${headingDesktopBorderWidth ? `border-width: ${headingDesktopBorderWidth};` : ''}
            ${headingDesktopBorderRadiusWidth ? `border-radius: ${headingDesktopBorderRadiusWidth};` : ''}
            ${headingBorderColor ? `border-color: ${headingBorderColor};` : ''}

            ${headingTextShadowCssValue ? `text-shadow: ${headingTextShadowCssValue};` : ''}
            ${headingTextStroke ? `
                -webkit-text-stroke: ${headingTextStroke}px ${headingTextStrokeColor};
                -moz-text-stroke: ${headingTextStroke}px ${headingTextStrokeColor};
                -ms-text-stroke: ${headingTextStroke}px ${headingTextStrokeColor};
                text-stroke: ${headingTextStroke}px ${headingTextStrokeColor};
            ` : ''}
            ${headingBoxShadowCssValue ? `box-shadow: ${headingBoxShadowCssValue};` : ''}

            ${headingBackgroundImageEnabled && headingBackgroundImageUrl && headingBackgroundImageUrl !== 'null' ? `
                background-image: url(${headingBackgroundImageUrl});
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-position: center;
                background-size: contain;
            ` : ''}
            transition: all .3s ease-in-out;
        }


        .${blockId}.fb-advanced-wrapper .fb-advanced-heading:hover {
            ${headingHoverColor ? `color: ${headingHoverColor};` : ''}
            ${headingBorderHoverColor ? `border-color: ${headingBorderHoverColor};` : ''}
            ${headingBgColorHover ? `background-color: ${headingBgColorHover};` : ''}
            ${headingTextStrokeHoverColor ? `
                -webkit-text-stroke: ${headingTextStroke}px ${headingTextStrokeHoverColor};
                -moz-text-stroke: ${headingTextStroke}px ${headingTextStrokeHoverColor};
                -ms-text-stroke: ${headingTextStroke}px ${headingTextStrokeHoverColor};
                text-stroke: ${headingTextStroke}px ${headingTextStrokeHoverColor};
            ` : ''}
        }

        .${blockId}.fb-advanced-wrapper .fb-advanced-sub-heading {
            ${subHeadingColor ? `color: ${subHeadingColor};` : ''}
            ${subHeadingBgColor ? `background-color: ${subHeadingBgColor};` : ''}
            ${subHeadingFontFamily ? `font-family: ${subHeadingFontFamily};` : ''}
            ${subHeadingFontSize.Desktop && subHeadingFontSizeUnits.Desktop ? `font-size: ${subHeadingFontSize.Desktop}${subHeadingFontSizeUnits.Desktop};` : ''}
            ${subHeadingFontWeight ? `font-weight: ${subHeadingFontWeight};` : ''}
            ${subHeadingFontStyle ? `font-style: ${subHeadingFontStyle};` : ''}
            ${subHeadingTextTransform ? `text-transform: ${subHeadingTextTransform};` : ''}
            ${subHeadingTextDecoration ? `text-decoration: ${subHeadingTextDecoration};` : ''}
            ${subHeadingLetterSpacing.Desktop && subHeadingLetterSpacingUnits.Desktop ? `letter-spacing: ${subHeadingLetterSpacing.Desktop}${subHeadingLetterSpacingUnits.Desktop};` : ''}
            ${subHeadingLineHeight.Desktop && subHeadingLineHeightUnits.Desktop ? `line-height: ${subHeadingLineHeight.Desktop}${subHeadingLineHeightUnits.Desktop};` : ''}
            ${subHeadingDesktopPaddingWidth ? `padding: ${subHeadingDesktopPaddingWidth};` : ''}
            ${subHeadingDesktopMarginWidth ? `margin: ${subHeadingDesktopMarginWidth};` : ''}
            ${subHeadingBorder ? `border: ${subHeadingBorder};` : ''}
            ${subHeadingDesktopBorderWidth ? `border-width: ${subHeadingDesktopBorderWidth};` : ''}
            ${subHeadingDesktopBorderRadiusWidth ? `border-radius: ${subHeadingDesktopBorderRadiusWidth};` : ''}
            ${subHeadingBorderColor ? `border-color: ${subHeadingBorderColor};` : ''}
            ${subHeadingTextShadowCssValue ? `text-shadow: ${subHeadingTextShadowCssValue};` : ''}
            ${subHeadingTextStroke ? `
                -webkit-text-stroke: ${subHeadingTextStroke}px;
                -moz-text-stroke: ${subHeadingTextStroke}px;
                -ms-text-stroke: ${subHeadingTextStroke}px;
                text-stroke: ${subHeadingTextStroke}px;
            ` : ''}
            ${subHeadingBoxShadowCssValue ? `box-shadow: ${subHeadingBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }

        .${blockId}.fb-advanced-wrapper .fb-advanced-sub-heading:hover {
            ${subHeadingHoverColor ? `color: ${subHeadingHoverColor};` : ''}
            ${subHeadingBgColorHover ? `background-color: ${subHeadingBgColorHover};` : ''}
            ${subHeadingBorderHoverColor ? `border-color: ${subHeadingBorderHoverColor};` : ''}
        }

        .${blockId} .fb-advanced-icon {
            ${headingIconBgSize.Desktop ? `width: ${headingIconBgSize.Desktop}${headingIconBgSizeUnits.Desktop};` : ''}
            ${headingIconBgSize.Desktop ? `height: ${headingIconBgSize.Desktop}${headingIconBgSizeUnits.Desktop};` : ''}
            ${headingIconBgColor ? `background-color: ${headingIconBgColor};` : ''}
            ${headingIconBorder ? `border: ${headingIconBorder};` : ''}
            ${headingIconDesktopBorderWidthValue ? `border-width: ${headingIconDesktopBorderWidthValue};` : ''}
            ${headingIconBorderColor ? `border-color: ${headingIconBorderColor};` : ''}
            ${headingIconDesktopBorderRadiusWidthValue ? `border-radius: ${headingIconDesktopBorderRadiusWidthValue};` : ''}
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

        .${blockId}.fb-advanced-wrapper .fb-advanced-title-separator {
            display: inline-block;
            ${separator !== 'zigzag' && separatorWidth.Desktop && separatorWidthUnits.Desktop ? `width: ${separatorWidth.Desktop}${separatorWidthUnits.Desktop};` : ''}
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
        .${blockId}.fb-advanced-wrapper {
            ${headingGlobalZIndex.Desktop ? `z-index: ${headingGlobalZIndex.Desktop};` : ''}
            ${headingGlobalBgColor ? `background-color: ${headingGlobalBgColor};` : ''}
            ${globalDesktopPadding ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin ? `margin: ${globalDesktopMargin};` : ''}
            ${headingGlobalBorder ? `border: ${headingGlobalBorder};` : ''}
            ${globalDesktopBorderWidth ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${headingGlobalBorderColor ? `border-color: ${headingGlobalBorderColor};` : ''}
            ${headingGlobalBoxShadowCssValue ? `box-shadow: ${headingGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockId}.fb-advanced-wrapper:hover {
            ${headingGlobalBgHoverColor ? `background-color: ${headingGlobalBgHoverColor};` : ''}
            ${headingGlobalBorderHoverColor ? `border-color: ${headingGlobalBorderHoverColor};` : ''}
        }

        .${blockId}.fb-advanced-wrapper .fb-advanced-heading.active-line::after {
            ${activeLineAfterWidth.Desktop && activeLineAfterWidthUnits.Desktop ? `width: ${activeLineAfterWidth.Desktop}${activeLineAfterWidthUnits.Desktop};` : ''}
            ${activeLineAfterHeight.Desktop && activeLineAfterHeightUnits.Desktop ? `height: ${activeLineAfterHeight.Desktop}${activeLineAfterHeightUnits.Desktop};` : ''}
            ${activeLineAfterColor ? `background-color: ${activeLineAfterColor};` : ''}
        }

        .${blockId}.fb-advanced-wrapper .fb-advanced-heading.active-line::before {
            ${activeLineBeforeWidth.Desktop && activeLineBeforeWidthUnits.Desktop ? `width: ${activeLineBeforeWidth.Desktop}${activeLineBeforeWidthUnits.Desktop};` : ''}
            ${activeLineBeforeHeight.Desktop && activeLineBeforeHeightUnits.Desktop ? `height: ${activeLineBeforeHeight.Desktop}${activeLineBeforeHeightUnits.Desktop};` : ''}
            ${activeLineBeforeColor ? `background-color: ${activeLineBeforeColor};` : ''}
        }

        @media only screen and (max-width: 1024px) {
            .${blockId}.fb-advanced-wrapper .fb-advanced-heading {
                ${headingFontSize.Tablet && headingFontSizeUnits.Tablet ? `font-size: ${headingFontSize.Tablet}${headingFontSizeUnits.Tablet};` : ''}
                ${headingLetterSpacing.Tablet && headingLetterSpacingUnits.Tablet ? `letter-spacing: ${headingLetterSpacing.Tablet}${headingLetterSpacingUnits.Tablet};` : ''}
                ${headingLineHeight.Tablet && headingLineHeightUnits.Tablet ? `line-height: ${headingLineHeight.Tablet}${headingLineHeightUnits.Tablet};` : ''}
                ${headingTabletPaddingWidth ? `padding: ${headingTabletPaddingWidth};` : ''}
                ${headingTabletMarginWidth ? `margin: ${headingTabletMarginWidth};` : ''}
                ${headingTabletBorderWidth ? `border-width: ${headingTabletBorderWidth};` : ''}
                ${headingTabletBorderRadiusWidth ? `border-radius: ${headingTabletBorderRadiusWidth};` : ''}
            }
            .${blockId}.fb-advanced-wrapper .fb-advanced-sub-heading {
                ${subHeadingFontSize.Tablet && subHeadingFontSizeUnits.Tablet ? `font-size: ${subHeadingFontSize.Tablet}${subHeadingFontSizeUnits.Tablet};` : ''}
                ${subHeadingLetterSpacing.Tablet && subHeadingLetterSpacingUnits.Tablet ? `letter-spacing: ${subHeadingLetterSpacing.Tablet}${subHeadingLetterSpacingUnits.Tablet};` : ''}
                ${subHeadingLineHeight.Tablet && subHeadingLineHeightUnits.Tablet ? `line-height: ${subHeadingLineHeight.Tablet}${subHeadingLineHeightUnits.Tablet};` : ''}
                ${subHeadingTabletPaddingWidth ? `padding: ${subHeadingTabletPaddingWidth};` : ''}
                ${subHeadingTabletMarginWidth ? `margin: ${subHeadingTabletMarginWidth};` : ''}
                ${subHeadingTabletBorderWidth ? `border-width: ${subHeadingTabletBorderWidth};` : ''}
                ${subHeadingTabletBorderRadiusWidth ? `border-radius: ${subHeadingTabletBorderRadiusWidth};` : ''}
            }
            .${blockId} .fb-advanced-icon {
                ${headingIconBgSize.Tablet ? `width: ${headingIconBgSize.Tablet}${headingIconBgSizeUnits.Tablet};` : ''}
                ${headingIconBgSize.Tablet ? `height: ${headingIconBgSize.Tablet}${headingIconBgSizeUnits.Tablet};` : ''}
                ${headingIconTabletBorderWidthValue ? `border-width: ${headingIconTabletBorderWidthValue};` : ''}
                ${headingIconTabletBorderRadiusWidthValue ? `border-radius: ${headingIconTabletBorderRadiusWidthValue};` : ''}
            }
            .${blockId} .fb-advanced-icon svg {
                ${headingIconSize.Tablet ? `width: ${headingIconSize.Tablet}${headingIconSizeUnits.Tablet};` : ''}
                ${headingIconSize.Tablet ? `height: ${headingIconSize.Tablet}${headingIconSizeUnits.Tablet};` : ''}
            }
            .fb-advanced-wrapper.${blockId} .fb-advanced-title-separator {
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
            .${blockId}.fb-advanced-wrapper {
                ${headingGlobalZIndex.Tablet ? `z-index: ${headingGlobalZIndex.Tablet};` : ''}
                ${globalTabletPadding ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin ? `margin: ${globalTabletMargin};` : ''}
                ${globalTabletBorderWidth ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }
            .${blockId}.fb-advanced-wrapper .fb-advanced-heading.active-line::after {
                ${activeLineAfterWidth.Tablet && activeLineAfterWidthUnits.Tablet ? `width: ${activeLineAfterWidth.Tablet}${activeLineAfterWidthUnits.Tablet};` : ''}
                ${activeLineAfterHeight.Tablet && activeLineAfterHeightUnits.Tablet ? `height: ${activeLineAfterHeight.Tablet}${activeLineAfterHeightUnits.Tablet};` : ''}
            }
            .${blockId}.fb-advanced-wrapper .fb-advanced-heading.active-line::before {
                ${activeLineBeforeWidth.Tablet && activeLineBeforeWidthUnits.Tablet ? `width: ${activeLineBeforeWidth.Tablet}${activeLineBeforeWidthUnits.Tablet};` : ''}
                ${activeLineBeforeHeight.Tablet && activeLineBeforeHeightUnits.Tablet ? `height: ${activeLineBeforeHeight.Tablet}${activeLineBeforeHeightUnits.Tablet};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockId}.fb-advanced-wrapper .fb-advanced-heading {
                ${headingFontSize.Mobile && headingFontSizeUnits.Mobile ? `font-size: ${headingFontSize.Mobile}${headingFontSizeUnits.Mobile};` : ''}
                ${headingLetterSpacing.Mobile && headingLetterSpacingUnits.Mobile ? `letter-spacing: ${headingLetterSpacing.Mobile}${headingLetterSpacingUnits.Mobile};` : ''}
                ${headingLineHeight.Mobile && headingLineHeightUnits.Mobile ? `line-height: ${headingLineHeight.Mobile}${headingLineHeightUnits.Mobile};` : ''}
                ${headingMobilePaddingWidth ? `padding: ${headingMobilePaddingWidth};` : ''}
                ${headingMobileMarginWidth ? `margin: ${headingMobileMarginWidth};` : ''}
                ${headingMobileBorderWidth ? `border-width: ${headingMobileBorderWidth};` : ''}
                ${headingMobileBorderRadiusWidth ? `border-radius: ${headingMobileBorderRadiusWidth};` : ''}
            }
            .${blockId}.fb-advanced-wrapper .fb-advanced-sub-heading {
                ${subHeadingFontSize.Mobile && subHeadingFontSizeUnits.Mobile ? `font-size: ${subHeadingFontSize.Mobile}${subHeadingFontSizeUnits.Mobile};` : ''}
                ${subHeadingLetterSpacing.Mobile && subHeadingLetterSpacingUnits.Mobile ? `letter-spacing: ${subHeadingLetterSpacing.Mobile}${subHeadingLetterSpacingUnits.Mobile};` : ''}
                ${subHeadingLineHeight.Mobile && subHeadingLineHeightUnits.Mobile ? `line-height: ${subHeadingLineHeight.Mobile}${subHeadingLineHeightUnits.Mobile};` : ''}
                ${subHeadingMobilePaddingWidth ? `padding: ${subHeadingMobilePaddingWidth};` : ''}
                ${subHeadingMobileMarginWidth ? `margin: ${subHeadingMobileMarginWidth};` : ''}
                ${subHeadingMobileBorderWidth ? `border-width: ${subHeadingMobileBorderWidth};` : ''}
                ${subHeadingMobileBorderRadiusWidth ? `border-radius: ${subHeadingMobileBorderRadiusWidth};` : ''}
            }
            .${blockId} .fb-advanced-icon {
                ${headingIconBgSize.Mobile ? `width: ${headingIconBgSize.Mobile}${headingIconBgSizeUnits.Mobile};` : ''}
                ${headingIconBgSize.Mobile ? `height: ${headingIconBgSize.Mobile}${headingIconBgSizeUnits.Mobile};` : ''}
                ${headingIconMobileBorderWidthValue ? `border-width: ${headingIconMobileBorderWidthValue};` : ''}
                ${headingIconMobileBorderRadiusWidthValue ? `border-radius: ${headingIconMobileBorderRadiusWidthValue};` : ''}
            }
            .${blockId} .fb-advanced-icon svg {
                ${headingIconSize.Mobile ? `width: ${headingIconSize.Mobile}${headingIconSizeUnits.Mobile};` : ''}
                ${headingIconSize.Mobile ? `height: ${headingIconSize.Mobile}${headingIconSizeUnits.Mobile};` : ''}
            }
            .fb-advanced-wrapper.${blockId} .fb-advanced-title-separator {
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
            .${blockId}.fb-advanced-wrapper {
                ${headingGlobalZIndex.Mobile ? `z-index: ${headingGlobalZIndex.Mobile};` : ''}
                ${globalMobilePadding ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin ? `margin: ${globalMobileMargin};` : ''}
                ${globalMobileBorderWidth ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }
            .${blockId}.fb-advanced-wrapper .fb-advanced-heading.active-line::after {
                ${activeLineAfterWidth.Mobile && activeLineAfterWidthUnits.Mobile ? `width: ${activeLineAfterWidth.Mobile}${activeLineAfterWidthUnits.Mobile};` : ''}
                ${activeLineAfterHeight.Mobile && activeLineAfterHeightUnits.Mobile ? `height: ${activeLineAfterHeight.Mobile}${activeLineAfterHeightUnits.Mobile};` : ''}
            }
            .${blockId}.fb-advanced-wrapper .fb-advanced-heading.active-line::before {
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
    headingColor,
    headingBgColor,
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
    headingDesktopMarginWidth,
    headingBorder,
    headingDesktopBorderWidth,
    headingTabletBorderWidth,
    headingMobileBorderWidth,
    headingDesktopBorderRadiusWidth,
    headingTabletBorderRadiusWidth,
    headingMobileBorderRadiusWidth,
    headingBorderColor,
    headingTextShadowCssValue,
    headingTextStroke,
    headingTextStrokeColor,
    headingBoxShadowCssValue,
    headingBackgroundImageEnabled,
    headingBackgroundImageUrl,
    headingHoverColor,
    headingBorderHoverColor,
    headingBgColorHover,
    headingTextStrokeHoverColor,
    subHeadingColor,
    subHeadingBgColor,
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
    subHeadingDesktopMarginWidth,
    subHeadingBorder,
    subHeadingDesktopBorderWidth,
    subHeadingDesktopBorderRadiusWidth,
    subHeadingBorderColor,
    subHeadingTextShadowCssValue,
    subHeadingTextStroke,
    subHeadingBoxShadowCssValue,
    subHeadingHoverColor,
    subHeadingBgColorHover,
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
    separator,
    separatorWidth,
    separatorWidthUnits,
    separatorHeight,
    separatorHeightUnits,
    separatorColor,
    separatorPosition,
    separatorSpacing,
    separatorSpacingUnits,
    headingGlobalZIndex,
    headingGlobalBgColor,
    globalDesktopPadding,
    globalDesktopMargin,
    headingGlobalBorder,
    globalDesktopBorderWidth,
    globalDesktopBorderRadiusWidth,
    headingGlobalBorderColor,
    headingGlobalBoxShadowCssValue,
    headingGlobalBgHoverColor,
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
    headingIconMobileBorderRadiusWidthValue
    ]);

    useEffect(() => {
    setAttributes({blockStyle: `${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle]);


    const editorStyle = allBlockStyle.replace(/\s+/g, ' ').trim();

    return (
        <>

            <style>
                {editorStyle}
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
                                name: "styles",
                                title: "Style",
                                className: "fb-tab styles",
                            },
                            {
                                name: "advanced",
                                title: "Advanced",
                                className: "fb-tab advanced",
                            },
                        ]}
                    >
                        {(tab) => (
                            <div className={"fb-tab-controls" + tab.name}>
                                {tab.name === 'general' && (
                                    <>
                                        <div className="fb-advanced-wrapper">
                                            <PanelBody
                                                title={__("General", "frontis-blocks")}
                                                initialOpen={true}
                                            >
                                                <SelectControl
                                                    label={__("Preset Style", "frontis-blocks")}
                                                    value={headingPresetStyle}
                                                    options={PRESETS}
                                                    onChange={(selected) => changeAdvancedHeadingPreset(selected)}
                                                />
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

                                                <FB_AlignmentControl
                                                    label={__("Alignment", "frontis-blocks")}
                                                    globalAlignment={headingAlignment}
                                                    setGlobalAlignment={(value) => setAttributes({ headingAlignment: value })}
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

                                                <TextareaControl
                                                    label={__("Heading Text", "frontis-blocks")}
                                                    value={headingText}
                                                    onChange={(value) => setAttributes({ headingText: value })}
                                                    className="fb-advanced-text"
                                                />
                                            </PanelBody>
                                        </div>
                                        {subHeadingSwitcher && (
                                            <PanelBody
                                                title={__("Sub Heading", "frontis-blocks")}
                                                initialOpen={false}
                                                className="fb-advanced-sub-heading-wrapper"
                                            >
                                                <>
                                                    <BaseControl className="fb-advanced-sub-heading-position" >
                                                        <SelectControl
                                                            label={__("Sub Heading Position", "frontis-blocks")}
                                                            value={subHeadingPosition}
                                                            options={SUBHEADING_POSITION}
                                                            onChange={(value) => setAttributes({ subHeadingPosition: value})}
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
                                                    <BaseControl className="fb-advanced-separator-position" >
                                                        <SelectControl
                                                            label={__("Separator Position", "frontis-blocks")}
                                                            value={separatorPosition}
                                                            options={SEPARATOR_POSITION}
                                                            onChange={(value) => setAttributes({ separatorPosition: value})}
                                                        />
                                                    </BaseControl>

                                                    <BaseControl className="fb-advanced-separator-style" >
                                                        <SelectControl
                                                            label={__("Separator Style", "frontis-blocks")}
                                                            value={separator}
                                                            options={[
                                                                { label: __('Solid', 'frontis-blocks'), value: 'solid' },
                                                                { label: __('Dashed', 'frontis-blocks'), value: 'dashed' },
                                                                { label: __('Dotted', 'frontis-blocks'), value: 'dotted' },
                                                                { label: __('Double', 'frontis-blocks'), value: 'double' },
                                                                { label: __('Zigzag', 'frontis-blocks'), value: 'zigzag' }
                                                            ]}
                                                            onChange={(value) => setAttributes({ separator: value })}
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
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody
                                            title={__("Heading", "frontis-blocks")}
                                            initialOpen={true}
                                        >
                                            <FB_TypographyControl
                                                fontFamily={headingFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ headingFontFamily: value })}

                                                fontSize={headingFontSize}
                                                onChangeFontSize={(value) => setAttributes({ headingFontSize: value })}

                                                fontSizeUnits={headingFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ headingFontSizeUnits: value })}

                                                fontWeight={headingFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ headingFontWeight: value })}

                                                fontStyle={headingFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ headingFontStyle: value })}

                                                textTransform={headingTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ headingTextTransform: value })}

                                                textDecoration={headingTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ headingTextDecoration: value })}

                                                letterSpacing={headingLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ headingLetterSpacing: value })}

                                                letterSpacingUnits={headingLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ headingLetterSpacingUnits: value })}

                                                lineHeight={headingLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ headingLineHeight: value })}

                                                lineHeightUnits={headingLineHeightUnits}
                                                onChangeLineHeightUnit={(value) => setAttributes({ headingLineHeightUnits: value })}

                                                deviceType={deviceType}
                                                setAttributes={setAttributes}
                                            />
                                            <FB_BoxShadowControl
                                                label={__("Text Shadow", "frontis-blocks")}
                                                onBoxShadowChange={(value) => setAttributes({ headingTextShadowValues: value })}
                                                initialShadowValue={headingTextShadowValues}
                                                onBoxShadowStyleChange={(value) => setAttributes({ headingTextShadowCssValue: value })}
                                                isBoxShadow={false}
                                            />
                                            <RangeControl
                                                label={__("Text Stroke", "frontis-blocks")}
                                                value={headingTextStroke}
                                                onChange={(value) => setAttributes({ headingTextStroke: value })}
                                                min={0}
                                                max={10}
                                                step={1}
                                                resetFallbackValue={''}

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
                                                    setGlobalColor={(value) => setAttributes({ headingTextStrokeColor: value })}
                                                />
                                            )}

                                            {headingTextStrokeColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={headingTextStrokeHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ headingTextStrokeHoverColor: value })}
                                                />
                                            )}

                                            <FB_SwitcherControl
                                                label={__("Text Color", "frontis-blocks")}
                                                globalSwitcher={headingColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ headingColorSwitcher: value })}
                                            />

                                            {headingColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={headingColor}
                                                    setGlobalColor={(value) => setAttributes({ headingColor: value })}
                                                />
                                            )}

                                            {headingColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={headingHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ headingHoverColor: value })}
                                                />
                                            )}

                                            
                                            <FB_SwitcherControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalSwitcher={headingBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ headingBgColorSwitcher: value })}
                                            />

                                            {headingBgColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Normal Color", "frontis-blocks")}
                                                    globalColor={headingBgColor}
                                                    setGlobalColor={(value) => setAttributes({ headingBgColor: value })}
                                                />
                                            )}

                                            {headingBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={headingBgColorHover}
                                                    setGlobalColor={(value) => setAttributes({ headingBgColorHover: value })}
                                                />
                                            )}

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
                                                                <path d="M12.9431 22C18.466 22 22.9431 17.5228 22.9431 12C22.9431 6.47715 18.466 2 12.9431 2C7.42027 2 2.94312 6.47715 2.94312 12C2.94312 17.5228 7.42027 22 12.9431 22Z" stroke="#1C274C" stroke-width="1.5"/>
                                                                <path d="M15.4431 9.50002L10.4431 14.5M10.4431 9.5L15.4431 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
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
                                                        setGlobalColor={(value) => setAttributes({ activeLineBeforeColor: value })}
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
                                                        setGlobalColor={(value) => setAttributes({ activeLineAfterColor: value })}
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
                                                    setGlobalColor={(value) => setAttributes({ headingBorderColor: value })}
                                                />
                                            )}

                                            {headingBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={headingBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ headingBorderHoverColor: value })}
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
                                        </PanelBody>

                                        {subHeadingSwitcher && (
                                            <PanelBody
                                                title={__("Sub Heading", "frontis-blocks")}
                                                initialOpen={false}
                                            >
                                                <FB_TypographyControl
                                                    fontFamily={subHeadingFontFamily}
                                                    onChangeFontFamily={(value) => setAttributes({ subHeadingFontFamily: value })}

                                                    fontSize={subHeadingFontSize}
                                                    onChangeFontSize={(value) => setAttributes({ subHeadingFontSize: value })}

                                                    fontSizeUnits={subHeadingFontSizeUnits}
                                                    onChangeFontSizeUnit={(value) => setAttributes({ subHeadingFontSizeUnits: value })}

                                                    fontWeight={subHeadingFontWeight}
                                                    onChangeFontWeight={(value) => setAttributes({ subHeadingFontWeight: value })}

                                                    fontStyle={subHeadingFontStyle}
                                                    onChangeFontStyle={(value) => setAttributes({ subHeadingFontStyle: value })}

                                                    textTransform={subHeadingTextTransform}
                                                    onChangeTextTransform={(value) => setAttributes({ subHeadingTextTransform: value })}

                                                    textDecoration={subHeadingTextDecoration}
                                                    onChangeTextDecoration={(value) => setAttributes({ subHeadingTextDecoration: value })}

                                                    letterSpacing={subHeadingLetterSpacing}
                                                    onChangeLetterSpacing={(value) => setAttributes({ subHeadingLetterSpacing: value })}

                                                    letterSpacingUnits={subHeadingLetterSpacingUnits}
                                                    onChangeLetterSpacingUnit={(value) => setAttributes({ subHeadingLetterSpacingUnits: value })}

                                                    lineHeight={subHeadingLineHeight}
                                                    onChangeLineHeight={(value) => setAttributes({ subHeadingLineHeight: value })}

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
                                                <RangeControl
                                                    label={__("Text Stroke", "frontis-blocks")}
                                                    value={subHeadingTextStroke}
                                                    onChange={(value) => setAttributes({ subHeadingTextStroke: value })}
                                                    min={1}
                                                    max={10}
                                                    step={1}
                                                    allowReset={true}
                                                    resetFallbackValue={''}
                                                />

                                                <FB_SwitcherControl
                                                    label={__("Text Color", "frontis-blocks")}
                                                    globalSwitcher={subHeadingColorSwitcher}
                                                    setGlobalSwitcher={(value) => setAttributes({ subHeadingColorSwitcher: value })}
                                                />

                                                {subHeadingColorSwitcher === 'normal' && (
                                                    <FB_ColorControl
                                                        label={__("Normal Color", "frontis-blocks")}
                                                        globalColor={subHeadingColor}
                                                        setGlobalColor={(value) => setAttributes({ subHeadingColor: value })}
                                                    />
                                                )}

                                                {subHeadingColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={subHeadingHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ subHeadingHoverColor: value })}
                                                    />
                                                )}

                                                <FB_SwitcherControl
                                                    label={__("Background Color", "frontis-blocks")}
                                                    globalSwitcher={subHeadingBgColorSwitcher}
                                                    setGlobalSwitcher={(value) => setAttributes({ subHeadingBgColorSwitcher: value })}
                                                />

                                                {subHeadingBgColorSwitcher === 'normal' && (
                                                    <FB_ColorControl
                                                        label={__("Normal Color", "frontis-blocks")}
                                                        globalColor={subHeadingBgColor}
                                                        setGlobalColor={(value) => setAttributes({ subHeadingBgColor: value })}
                                                    />
                                                )}

                                                {subHeadingBgColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={subHeadingBgColorHover}
                                                        setGlobalColor={(value) => setAttributes({ subHeadingBgColorHover: value })}
                                                    />
                                                )}

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
                                                        setGlobalColor={(value) => setAttributes({ subHeadingBorderColor: value })}
                                                    />
                                                )}

                                                {subHeadingBorderColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={subHeadingBorderHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ subHeadingBorderHoverColor: value })}
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
                                                        setGlobalColor={(value) => setAttributes({ separatorColor: value })}
                                                    />
                                                )}

                                                {separatorColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={separatorHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ separatorHoverColor: value })}
                                                    />
                                                )}

                                                {separator !== 'zigzag' && (
                                                    <>
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
                                                    </>
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
                                                    setGlobalColor={(value) => setAttributes({ headingIconColor: value })}
                                                />
                                            )}

                                            {headingIconColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={headingIconHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ headingIconHoverColor: value })}
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
                                                    setGlobalColor={(value) => setAttributes({ headingIconBgColor: value })}
                                                />
                                            )}

                                            {headingIconBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={headingIconBgHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ headingIconBgHoverColor: value })}
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
                                                    setGlobalColor={(value) => setAttributes({ headingIconBorderColor: value })}
                                                />
                                            )}

                                            {headingIconBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={headingIconBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ headingIconBorderHoverColor: value })}
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
                                            </PanelBody>

                                        )}

                                    </>
                                )}
                            {tab.name === "advanced" && (
                                    <>
										<div className="fb-setting-advanced-tab-wrapper">
											<div className="fb-setting-inner-wrapper">
												<PanelBody
													title={__("Advanced", "frontis-blocks")}
													initialOpen={true}
													className='fb-setting-z-index-header'
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
                                                    title={__("Background Color", "frontis-blocks")}
                                                    initialOpen={false} 
                                                >
                                                    <FB_SwitcherControl
                                                        label={__("Background Color", "frontis-blocks")}
                                                        globalSwitcher={headingGlobalBgColorSwitcher}
                                                        setGlobalSwitcher={(value) => setAttributes({ headingGlobalBgColorSwitcher: value })}
                                                    />

                                                    {headingGlobalBgColorSwitcher === 'normal' && (
                                                        <FB_ColorControl
                                                            label={__("Normal Color", "frontis-blocks")}
                                                            globalColor={headingGlobalBgColor}
                                                            setGlobalColor={(value) => setAttributes({ headingGlobalBgColor: value })}
                                                        />
                                                    )}

                                                    {headingGlobalBgColorSwitcher === 'hover' && (
                                                        <FB_ColorControl
                                                            label={__("Hover Color", "frontis-blocks")}
                                                            globalColor={headingGlobalBgHoverColor}
                                                            setGlobalColor={(value) => setAttributes({ headingGlobalBgHoverColor: value })}
                                                        />
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
                                                            setGlobalColor={(value) => setAttributes({ headingGlobalBorderColor: value })}
                                                        />
                                                    )}

                                                    {headingGlobalBorderColorSwitcher === 'hover' && (
                                                        <FB_ColorControl
                                                            label={__("Hover Color", "frontis-blocks")}
                                                            globalColor={headingGlobalBorderHoverColor}
                                                            setGlobalColor={(value) => setAttributes({ headingGlobalBorderHoverColor: value })}
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
													<FB_BoxShadowControl
														onBoxShadowChange={(value) => setAttributes({ headingGlobalBoxShadowValues: value })}
														initialShadowValue={headingGlobalBoxShadowValues}
														onBoxShadowStyleChange={(value) => setAttributes({ headingGlobalBoxShadowCssValue: value })}
													/>
												</PanelBody>
											</div>
										</div>
                                    </>
                                )}
                            </div>
                        )}
                    </TabPanel>
                </div>
            </InspectorControls>
            </>
    );
}
