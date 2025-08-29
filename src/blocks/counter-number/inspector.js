import { __ } from '@wordpress/i18n';
import {
    MediaUpload,
    MediaUploadCheck,
    useBlockProps,
    InspectorControls,
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
    ResponsiveWrapper, __experimentalHStack as HStack,
} from '@wordpress/components';

import {
    PRESETS
} from "./constants/constants";

import { useEffect, useRef, useState, useMemo } from '@wordpress/element';
import './editor.scss';
import { mediaType, BORDER_STYLES, UNIT_TYPES, OVERFLOW_OP, separatorType, CARD_WRAP_HZ_ALIGNMENT, CARD_WRAP_VR_ALIGNMENT, ICON_POSITION, TITLE_POSITION } from "./constants/constants";
import FBIconPicker from "../../components/icon-picker";
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_BoxShadowControl from "@Components/box-shadow";
import FB_TypographyControl from '@Components/typography-control';
import { useDeviceType } from "@Config/displayType";
import FB_ImageControl from '@Components/image-control';
import FB_PositionControl from '@Components/position-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_BackgroundImageControl from '../../components/background-image-control';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import FB_InspectorControls from '@Components/InspectorControls';


export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        counterAlignment,
        // deviceType,
        counterNumberStart,
        counterNumberEnd,
        counterDuration,
        counterPrefix,
        counterPrefixSwitch,
        counterSuffix,
        counterSuffixSwitch,
        counterTitle,
        counterTitleSwitch,
        counterTitleTag,
        showThousandsSeparator,
        showThousandsSeparatorType,
        icon,
        iconPosition,
        titlePosition,
        counterCardAlignment,
        mediaSwitcher,
        counterMediaId,
        counterMediaUrl,
        counterMediaAlt,
        counterMediaImagedisplay,

        counterItemSize,
        counterItemSizeUnits,
        counterItemRatio,
        counterItemHeight,
        counterItemHeightUnits,

        // Item Border Type
        counterItemBorder,
        counterItemBorderColorSwitcher,
        counterItemBorderColor,
        counterItemBorderHoverColor,

        counterItemBorderTypeUnits,
        counterItemBorderTypeDesktop,
        counterItemBorderTypeTablet,
        counterItemBorderTypeMobile,
        counterItemBorderTypeLink,

        // Item Border Radius
        counterItemBorderRadiusUnits,
        counterItemBorderRadiusDesktop,
        counterItemBorderRadiusTablet,
        counterItemBorderRadiusMobile,
        counterItemBorderRadiusLink,

        // Item Background attributes
        counterItemBgColorSwitcher,
        counterItemBgColor,
        counterItemBgHoverColor,

        // Item Padding
        counterItemPaddingUnits,
        counterItemPaddingDesktop,
        counterItemPaddingTablet,
        counterItemPaddingMobile,
        counterItemPaddingLink,

        // Item Margin
        counterItemMarginUnits,
        counterItemMarginDesktop,
        counterItemMarginTablet,
        counterItemMarginMobile,
        counterItemMarginLink,

        //Counter Icon attributes
        counterIconMarginUnits,
        counterIconMarginDesktop,
        counterIconMarginTablet,
        counterIconMarginMobile,
        counterIconMarginLink,
        counterIconColorSwitcher,
        counterIconColor,
        counterIconHoverColor,
        counterIconSize,
        counterIconSizeUnits,
        counterIconSizeRatio,

        // Gap between icon and content
        counterItemGap,
        counterItemGapUnits,

        //Counter Number attributes
        counterNumberFontColorSwitcher,
        counterNumberFontColor,
        counterNumberFontHoverColor,
        counterNumberGlobalTypoSwitcher,
        counterNumberGlobalTypographyData,
        counterNumberGlobalTypoType,
        counterNumberGlobalTypoOption,
        counterNumberFontFamily,
        counterNumberFontSize,
        counterNumberFontSizeUnits,
        counterNumberFontWeight,
        counterNumberFontStyle,
        counterNumberTextTransform,
        counterNumberTextDecoration,
        counterNumberLetterSpacing,
        counterNumberLetterSpacingUnits,
        counterNumberLineHeight,
        counterNumberLineHeightUnits,

        counterNumberMarginUnits,
        counterNumberMarginDesktop,
        counterNumberMarginTablet,
        counterNumberMarginMobile,
        counterNumberMarginLink,

        //Counter Number Title attributes
        counterNumberTitleGlobalTypoSwitcher,
        counterNumberTitleGlobalTypographyData,
        counterNumberTitleGlobalTypoType,
        counterNumberTitleGlobalTypoOption,
        counterNumberTitleFontFamily,
        counterNumberTitleFontSize,
        counterNumberTitleFontSizeUnits,
        counterNumberTitleFontWeight,
        counterNumberTitleFontStyle,
        counterNumberTitleTextTransform,
        counterNumberTitleTextDecoration,
        counterNumberTitleLetterSpacing,
        counterNumberTitleLetterSpacingUnits,
        counterNumberTitleLineHeight,
        counterNumberTitleLineHeightUnits,
        counterNumberTitleFontColorSwitcher,
        counterNumberTitleFontColor,
        counterNumberTitleFontHoverColor,

        counterNumberTitleMarginUnits,
        counterNumberTitleMarginDesktop,
        counterNumberTitleMarginTablet,
        counterNumberTitleMarginMobile,
        counterNumberTitleMarginLink,

        //Global attributes
        counterGlobalZIndex,
        counterOverflow,
        counterGlobalPaddingUnits,
        counterGlobalPaddingDesktop,
        counterGlobalPaddingTablet,
        counterGlobalPaddingMobile,
        counterGlobalPaddingLink,
        counterGlobalMarginUnits,
        counterGlobalMarginDesktop,
        counterGlobalMarginTablet,
        counterGlobalMarginMobile,
        counterGlobalMarginLink,
        counterGlobalBgColorSwitcher,
        counterGlobalBgColor,
        counterGlobalBgHoverColor,
        counterGlobalBorder,
        counterGlobalBorderColorSwitcher,
        counterGlobalBorderColor,
        counterGlobalBorderHoverColor,
        counterGlobalBorderUnits,
        counterGlobalBorderDesktop,
        counterGlobalBorderTablet,
        counterGlobalBorderMobile,
        counterGlobalBorderLink,
        counterGlobalBorderRadiusUnits,
        counterGlobalBorderRadiusDesktop,
        counterGlobalBorderRadiusTablet,
        counterGlobalBorderRadiusMobile,
        counterGlobalBorderRadiusLink,
        counterGlobalBoxShadowValues,
        counterGlobalBoxShadowCssValue,

        counterDesktopSwitcher,
        counterTabletSwitcher,
        counterMobileSwitcher,

        // Position
        counterPositionType,
        counterHZOrientationType,
        counterVROrientationType,
        counterHZLeftOffset,
        counterHZLeftOffsetUnits,
        counterHZRightOffset,
        counterHZRightOffsetUnits,
        counterVRTopOffset,
        counterVRTopOffsetUnits,
        counterVRBottomOffset,
        counterVRBottomOffsetUnits,

        counterGlobalWraperCustomCSS,
        counterGlobalWraperID,
        counterGlobalWraperClass,
        counterPresetStyle
    } = attributes;

    console.log(attributes);
    const counterRef = useRef(null);
    const observerRef = useRef(null);

    const deviceType = useDeviceType();

    let defaultImageUrl = '';
    if (typeof FrontisBlocksData !== 'undefined') {
        defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/users-group.svg';
    }

    // Set default value for counterMediaUrl
    useEffect(() => {
        if (!counterMediaUrl) {
            setAttributes({ counterMediaUrl: defaultImageUrl });
        }
    }, []);

    /** Start Preset Style */
    const changeCounterPreset = (selectedPreset) => {
        const presetConfigurations = {
            "preset-1": {
                counterItemBgColor: '#FFFBF5',
                iconPosition: 'left',
                counterNumberEnd: 250,
                counterSuffixSwitch: true,
                counterPrefixSwitch: true,
                counterSuffix: "M",
                mediaSwitcher: 'image',
                counterItemBorder: "none",
                counterItemBorder: "none",
                counterItemBorderRadiusMobile: {
                    top: '24', bottom: '24', left: '24', right: '24'
                },
                counterItemBorderRadiusTablet: {
                    top: '24', bottom: '24', left: '24', right: '24'
                },
                counterItemBorderRadiusUnits: {
                    Desktop: 'px', Tablet: 'px', Mobile: 'px'
                },
                counterItemPaddingDesktop: { top: '42', right: '32', bottom: '42', left: '32' },
                counterItemPaddingMobile: { top: '32', bottom: '32', left: '32', right: '32' },
                counterItemPaddingTablet: { top: '24', bottom: '24', left: '24', right: '24' },
                counterItemSize: {
                    Desktop: '410',
                    Tablet: '306',
                    Mobile: '250'
                },
                counterItemHeight: {
                    Desktop: '',
                    Tablet: '',
                    Mobile: ''
                },
            },
            "preset-2": {
                counterItemBgColor: '#F7F7F7',
                iconPosition: 'top',
                counterNumberEnd: 250,
                counterSuffixSwitch: true,
                counterPrefixSwitch: true,
                mediaSwitcher: 'image',
                counterItemBorder: "none",
                counterItemBorderRadiusMobile: {
                    top: '24', bottom: '24', left: '24', right: '24'
                },
                counterItemBorderRadiusTablet: {
                    top: '24', bottom: '24', left: '24', right: '24'
                },
                counterItemBorderRadiusUnits: {
                    Desktop: 'px', Tablet: 'px', Mobile: 'px'
                },
                counterItemPaddingDesktop: { top: '42', right: '32', bottom: '42', left: '32' },
                counterItemPaddingMobile: { top: '32', bottom: '32', left: '32', right: '32' },
                counterItemPaddingTablet: { top: '24', bottom: '24', left: '24', right: '24' },
                counterItemSize: {
                    Desktop: '410',
                    Tablet: '306',
                    Mobile: '250'
                },
                counterItemHeight: {
                    Desktop: '',
                    Tablet: '',
                    Mobile: ''
                },
            },
            "preset-3": {
                counterItemBgColor: '#EBF5FF',
                counterAlignment: {
                    Desktop: 'left',
                    Tablet: 'left',
                    Mobile: 'left'
                },
                counterCardAlignment: {
                    Desktop: 'center',
                    Tablet: 'center',
                    Mobile: 'center'
                },
                counterNumberEnd: 32,
                counterSuffixSwitch: false,
                counterPrefixSwitch: false,
                mediaSwitcher: 'icon',
                icon: 'bolt',
                counterItemBorder: "none",
                counterItemBorderRadiusDesktop: {
                    top: '24',
                    right: '24',
                    bottom: '24',
                    left: '24'
                },
                counterItemBorderRadiusMobile: {
                    top: '24', bottom: '24', left: '24', right: '24'
                },
                counterItemBorderRadiusTablet: {
                    top: '24', bottom: '24', left: '24', right: '24'
                },
                counterItemBorderRadiusUnits: {
                    Desktop: 'px', Tablet: 'px', Mobile: 'px'
                },
                counterItemPaddingDesktop: { top: '42', right: '32', bottom: '42', left: '32' },
                counterItemPaddingMobile: { top: '32', bottom: '32', left: '32', right: '32' },
                counterItemPaddingTablet: { top: '24', bottom: '24', left: '24', right: '24' },
                counterItemSize: {
                    Desktop: '410',
                    Tablet: '306',
                    Mobile: '250'
                },
                counterItemHeight: {
                    Desktop: '',
                    Tablet: '',
                    Mobile: ''
                },
            },
            "preset-4": {
                counterItemBgColor: 'EBF5FF00',
                counterAlignment: {
                    Desktop: 'left',
                    Tablet: 'left',
                    Mobile: 'left'
                },
                counterCardAlignment: {
                    Desktop: 'center',
                    Tablet: 'center',
                    Mobile: 'center'
                },
                counterNumberEnd: 80,
                counterSuffixSwitch: true,
                counterPrefixSwitch: false,
                counterSuffix: "%",
                mediaSwitcher: 'icon',
                icon: 'trophy',
                counterItemBorder: "solid",
                counterItemBorderColor: "#399cff",
                counterItemBorderRadiusDesktop: {
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50'
                },
                counterItemBorderRadiusMobile: {
                    top: '50', bottom: '50', left: '50', right: '50'
                },
                counterItemBorderRadiusTablet: {
                    top: '50', bottom: '50', left: '50', right: '50'
                },
                counterItemBorder: "solid",
                counterItemBorderRadiusUnits: {
                    Desktop: '%', Tablet: '%', Mobile: '%'
                },
                counterItemPaddingDesktop: { top: '0', right: '0', bottom: '0', left: '0' },
                counterItemPaddingMobile: { top: '0', bottom: '0', left: '0', right: '0' },
                counterItemPaddingTablet: { top: '0', bottom: '0', left: '0', right: '0' },
                counterItemSize: {
                    Desktop: '306',
                    Tablet: '306',
                    Mobile: '306'
                },
                counterItemHeight: {
                    Desktop: '306',
                    Tablet: '306',
                    Mobile: '306'
                },
            },
        };

        const selectedPresetConfig = presetConfigurations[selectedPreset];

        if (selectedPresetConfig) {
            setAttributes({
                counterPresetStyle: selectedPreset,
                ...selectedPresetConfig,
            });
        } else {
            console.warn(`Counter: Preset "${selectedPreset}" not found.`);
        }
    };

    // Generate unique block ID if not set
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "counter-number-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    // Icon media remove handler
    const removeCounterMedia = () => {
        setAttributes({
            counterMediaId: '',
            counterMediaUrl: ''
        });
    }
    const iconHandler = (iconName) => {
        setAttributes({ icon: iconName || 'star' })
    }

    const counterItemSizeHandler = (value) => {
        setAttributes({ counterItemSize: value });
    };

    const counterItemSizeUnitsHandler = (value) => {
        setAttributes({ counterItemSizeUnits: value });
    };

    const blockProps = useBlockProps();

    /** Counter Item Border **/
    const handleCounterItemBorderUnitHandler = (event, position) => {
        const value = event.target.value;
        if (counterItemBorderTypeLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterItemBorderTypeDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterItemBorderTypeTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterItemBorderTypeMobile: {
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
                    setAttributes({ counterItemBorderTypeDesktop: { ...counterItemBorderTypeDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterItemBorderTypeTablet: { ...counterItemBorderTypeTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterItemBorderTypeMobile: { ...counterItemBorderTypeMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }
    const counterItemBorderCombineBtnHandler = () => {
        setAttributes({ counterItemBorderTypeLink: !counterItemBorderTypeLink });
    }

    const counterItemBorderTypeUnitsHandler = (unit) => {
        setAttributes({
            counterItemBorderTypeUnits: {
                ...counterItemBorderTypeUnits,
                [deviceType]: unit
            }
        })
    }

    const counterItemDesktopBorder = `${counterItemBorderTypeDesktop.top}${counterItemBorderTypeUnits.Desktop} ${counterItemBorderTypeDesktop.right}${counterItemBorderTypeUnits.Desktop} ${counterItemBorderTypeDesktop.bottom}${counterItemBorderTypeUnits.Desktop} ${counterItemBorderTypeDesktop.left}${counterItemBorderTypeUnits.Desktop}`;
    const counterItemTabletBorder = `${counterItemBorderTypeTablet.top}${counterItemBorderTypeUnits.Tablet} ${counterItemBorderTypeTablet.right}${counterItemBorderTypeUnits.Tablet} ${counterItemBorderTypeTablet.bottom}${counterItemBorderTypeUnits.Tablet} ${counterItemBorderTypeTablet.left}${counterItemBorderTypeUnits.Tablet}`;
    const counterItemMobileBorder = `${counterItemBorderTypeMobile.top}${counterItemBorderTypeUnits.Mobile} ${counterItemBorderTypeMobile.right}${counterItemBorderTypeUnits.Mobile} ${counterItemBorderTypeMobile.bottom}${counterItemBorderTypeUnits.Mobile} ${counterItemBorderTypeMobile.left}${counterItemBorderTypeUnits.Mobile}`;

    /** Counter Item Border Radius **/
    const handleItemBorderRadiusUnitHandler = (event, position) => {
        const value = event.target.value;
        if (counterItemBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterItemBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterItemBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterItemBorderRadiusMobile: {
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
                    setAttributes({ counterItemBorderRadiusDesktop: { ...counterItemBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterItemBorderRadiusTablet: { ...counterItemBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterItemBorderRadiusMobile: { ...counterItemBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const counterItemBorderRadiusCombineBtnHandler = () => {
        setAttributes({ counterItemBorderRadiusLink: !counterItemBorderRadiusLink });
    }

    const counterItemBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            counterItemBorderRadiusUnits: {
                ...counterItemBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    const counterItemDesktopBorderRadius = `${counterItemBorderRadiusDesktop.top}${counterItemBorderRadiusUnits.Desktop} ${counterItemBorderRadiusDesktop.right}${counterItemBorderRadiusUnits.Desktop} ${counterItemBorderRadiusDesktop.bottom}${counterItemBorderRadiusUnits.Desktop} ${counterItemBorderRadiusDesktop.left}${counterItemBorderRadiusUnits.Desktop}`;
    const counterItemTabletBorderRadius = `${counterItemBorderRadiusTablet.top}${counterItemBorderRadiusUnits.Tablet} ${counterItemBorderRadiusTablet.right}${counterItemBorderRadiusUnits.Tablet} ${counterItemBorderRadiusTablet.bottom}${counterItemBorderRadiusUnits.Tablet} ${counterItemBorderRadiusTablet.left}${counterItemBorderRadiusUnits.Tablet}`;
    const counterItemMobileBorderRadius = `${counterItemBorderRadiusMobile.top}${counterItemBorderRadiusUnits.Mobile} ${counterItemBorderRadiusMobile.right}${counterItemBorderRadiusUnits.Mobile} ${counterItemBorderRadiusMobile.bottom}${counterItemBorderRadiusUnits.Mobile} ${counterItemBorderRadiusMobile.left}${counterItemBorderRadiusUnits.Mobile}`;

    /** Counter Item Padding **/
    const handleCounterItemPaddingUnitHandler = (event, position) => {
        const value = event.target.value;
        if (counterItemPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterItemPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterItemPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterItemPaddingMobile: {
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
                    setAttributes({ counterItemPaddingDesktop: { ...counterItemPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterItemPaddingTablet: { ...counterItemPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterItemPaddingMobile: { ...counterItemPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const counterItemPaddingCombineBtnHandler = () => {
        setAttributes({ counterItemPaddingLink: !counterItemPaddingLink });
    };

    const counterItemPaddingUnitsHandler = (unit) => {
        setAttributes({
            counterItemPaddingUnits: {
                ...counterItemPaddingUnits,
                [deviceType]: unit
            }
        });
    };

    const counterItemDesktopPadding = `${counterItemPaddingDesktop.top}${counterItemPaddingUnits.Desktop} ${counterItemPaddingDesktop.right}${counterItemPaddingUnits.Desktop} ${counterItemPaddingDesktop.bottom}${counterItemPaddingUnits.Desktop} ${counterItemPaddingDesktop.left}${counterItemPaddingUnits.Desktop}`;
    const counterItemTabletPadding = `${counterItemPaddingTablet.top}${counterItemPaddingUnits.Tablet} ${counterItemPaddingTablet.right}${counterItemPaddingUnits.Tablet} ${counterItemPaddingTablet.bottom}${counterItemPaddingUnits.Tablet} ${counterItemPaddingTablet.left}${counterItemPaddingUnits.Tablet}`;
    const counterItemMobilePadding = `${counterItemPaddingMobile.top}${counterItemPaddingUnits.Mobile} ${counterItemPaddingMobile.right}${counterItemPaddingUnits.Mobile} ${counterItemPaddingMobile.bottom}${counterItemPaddingUnits.Mobile} ${counterItemPaddingMobile.left}${counterItemPaddingUnits.Mobile}`;

    /** Counter Item Margin **/
    const handleCounterItemMarginUnitHandler = (event, position) => {
        const value = event.target.value;
        if (counterItemMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterItemMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterItemMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterItemMarginMobile: {
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
                    setAttributes({ counterItemMarginDesktop: { ...counterItemMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterItemMarginTablet: { ...counterItemMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterItemMarginMobile: { ...counterItemMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const counterItemMarginCombineBtnHandler = () => {
        setAttributes({ counterItemMarginLink: !counterItemMarginLink });
    };

    const counterItemMarginUnitsHandler = (unit) => {
        setAttributes({
            counterItemMarginUnits: {
                ...counterItemMarginUnits,
                [deviceType]: unit
            }
        });
    };

    const counterItemDesktopMargin = `${counterItemMarginDesktop.top}${counterItemMarginUnits.Desktop} ${counterItemMarginDesktop.right}${counterItemMarginUnits.Desktop} ${counterItemMarginDesktop.bottom}${counterItemMarginUnits.Desktop} ${counterItemMarginDesktop.left}${counterItemMarginUnits.Desktop}`;
    const counterItemTabletMargin = `${counterItemMarginTablet.top}${counterItemMarginUnits.Tablet} ${counterItemMarginTablet.right}${counterItemMarginUnits.Tablet} ${counterItemMarginTablet.bottom}${counterItemMarginUnits.Tablet} ${counterItemMarginTablet.left}${counterItemMarginUnits.Tablet}`;
    const counterItemMobileMargin = `${counterItemMarginMobile.top}${counterItemMarginUnits.Mobile} ${counterItemMarginMobile.right}${counterItemMarginUnits.Mobile} ${counterItemMarginMobile.bottom}${counterItemMarginUnits.Mobile} ${counterItemMarginMobile.left}${counterItemMarginUnits.Mobile}`;

    /** Counter Icon Margin **/
    const handleCounterIconMarginUnitHandler = (event, position) => {
        const value = event.target.value;
        if (counterIconMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterIconMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterIconMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterIconMarginMobile: {
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
                    setAttributes({ counterIconMarginDesktop: { ...counterIconMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterIconMarginTablet: { ...counterIconMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterIconMarginMobile: { ...counterIconMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const counterIconMarginCombineBtnHandler = () => {
        setAttributes({ counterIconMarginLink: !counterIconMarginLink });
    }

    const counterIconMarginUnitsHandler = (unit) => {
        setAttributes({
            counterIconMarginUnits: {
                ...counterIconMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const counterIconDesktopMargin = `${counterIconMarginDesktop.top}${counterIconMarginUnits.Desktop} ${counterIconMarginDesktop.right}${counterIconMarginUnits.Desktop} ${counterIconMarginDesktop.bottom}${counterIconMarginUnits.Desktop} ${counterIconMarginDesktop.left}${counterIconMarginUnits.Desktop}`;
    const counterIconTabletMargin = `${counterIconMarginTablet.top}${counterIconMarginUnits.Tablet} ${counterIconMarginTablet.right}${counterIconMarginUnits.Tablet} ${counterIconMarginTablet.bottom}${counterIconMarginUnits.Tablet} ${counterIconMarginTablet.left}${counterIconMarginUnits.Tablet}`;
    const counterIconMobileMargin = `${counterIconMarginMobile.top}${counterIconMarginUnits.Mobile} ${counterIconMarginMobile.right}${counterIconMarginUnits.Mobile} ${counterIconMarginMobile.bottom}${counterIconMarginUnits.Mobile} ${counterIconMarginMobile.left}${counterIconMarginUnits.Mobile}`;

    /** Counter Number Margin**/
    const handleCounterNumberMarginUnitHandler = (event, position) => {
        const value = event.target.value;
        if (counterNumberMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterNumberMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterNumberMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterNumberMarginMobile: {
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
                    setAttributes({ counterNumberMarginDesktop: { ...counterNumberMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterNumberMarginTablet: { ...counterNumberMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterNumberMarginMobile: { ...counterNumberMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }
    const counterNumberMarginCombineBtnHandler = () => {
        setAttributes({ counterNumberMarginLink: !counterNumberMarginLink });
    }

    const counterNumberMarginUnitsHandler = (unit) => {
        setAttributes({
            counterNumberMarginUnits: {
                ...counterNumberMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const counterNumberDesktopMargin = `${counterNumberMarginDesktop.top}${counterNumberMarginUnits.Desktop} ${counterNumberMarginDesktop.right}${counterNumberMarginUnits.Desktop} ${counterNumberMarginDesktop.bottom}${counterNumberMarginUnits.Desktop} ${counterNumberMarginDesktop.left}${counterNumberMarginUnits.Desktop}`;
    const counterNumberTabletMargin = `${counterNumberMarginTablet.top}${counterNumberMarginUnits.Tablet} ${counterNumberMarginTablet.right}${counterNumberMarginUnits.Tablet} ${counterNumberMarginTablet.bottom}${counterNumberMarginUnits.Tablet} ${counterNumberMarginTablet.left}${counterNumberMarginUnits.Tablet}`;
    const counterNumberMobileMargin = `${counterNumberMarginMobile.top}${counterNumberMarginUnits.Mobile} ${counterNumberMarginMobile.right}${counterNumberMarginUnits.Mobile} ${counterNumberMarginMobile.bottom}${counterNumberMarginUnits.Mobile} ${counterNumberMarginMobile.left}${counterNumberMarginUnits.Mobile}`;

    const handleCounterNumberTitleMarginUnitHandler = (event, position) => {
        const value = event.target.value;
        if (counterNumberTitleMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterNumberTitleMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterNumberTitleMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterNumberTitleMarginMobile: {
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
                    setAttributes({ counterNumberTitleMarginDesktop: { ...counterNumberTitleMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterNumberTitleMarginTablet: { ...counterNumberTitleMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterNumberTitleMarginMobile: { ...counterNumberTitleMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }
    const counterNumberTitleMarginCombineBtnHandler = () => {
        setAttributes({ counterNumberTitleMarginLink: !counterNumberTitleMarginLink });
    }

    const counterNumberTitleMarginUnitsHandler = (unit) => {
        setAttributes({
            counterNumberTitleMarginUnits: {
                ...counterNumberTitleMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const counterNumberTitleDesktopMargin = `${counterNumberTitleMarginDesktop.top}${counterNumberTitleMarginUnits.Desktop} ${counterNumberTitleMarginDesktop.right}${counterNumberTitleMarginUnits.Desktop} ${counterNumberTitleMarginDesktop.bottom}${counterNumberTitleMarginUnits.Desktop} ${counterNumberTitleMarginDesktop.left}${counterNumberTitleMarginUnits.Desktop}`;
    const counterNumberTitleTabletMargin = `${counterNumberTitleMarginTablet.top}${counterNumberTitleMarginUnits.Tablet} ${counterNumberTitleMarginTablet.right}${counterNumberTitleMarginUnits.Tablet} ${counterNumberTitleMarginTablet.bottom}${counterNumberTitleMarginUnits.Tablet} ${counterNumberTitleMarginTablet.left}${counterNumberTitleMarginUnits.Tablet}`;
    const counterNumberTitleMobileMargin = `${counterNumberTitleMarginMobile.top}${counterNumberTitleMarginUnits.Mobile} ${counterNumberTitleMarginMobile.right}${counterNumberTitleMarginUnits.Mobile} ${counterNumberTitleMarginMobile.bottom}${counterNumberTitleMarginUnits.Mobile} ${counterNumberTitleMarginMobile.left}${counterNumberTitleMarginUnits.Mobile}`;

    /** Start Global padding */
    const handleGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (counterGlobalPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalPaddingMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterGlobalPaddingDesktop: {
                            ...counterGlobalPaddingDesktop,
                            [position]: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalPaddingTablet: {
                            ...counterGlobalPaddingTablet,
                            [position]: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalPaddingMobile: {
                            ...counterGlobalPaddingMobile,
                            [position]: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        }
    };

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes({ counterGlobalPaddingLink: !counterGlobalPaddingLink });
    };

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            counterGlobalPaddingUnits: {
                ...counterGlobalPaddingUnits,
                [deviceType]: unit,
            },
        });
    };

    const globalDesktopPadding = `${counterGlobalPaddingDesktop.top}${counterGlobalPaddingUnits.Desktop} ${counterGlobalPaddingDesktop.right}${counterGlobalPaddingUnits.Desktop} ${counterGlobalPaddingDesktop.bottom}${counterGlobalPaddingUnits.Desktop} ${counterGlobalPaddingDesktop.left}${counterGlobalPaddingUnits.Desktop}`;
    const globalTabletPadding = `${counterGlobalPaddingTablet.top}${counterGlobalPaddingUnits.Tablet} ${counterGlobalPaddingTablet.right}${counterGlobalPaddingUnits.Tablet} ${counterGlobalPaddingTablet.bottom}${counterGlobalPaddingUnits.Tablet} ${counterGlobalPaddingTablet.left}${counterGlobalPaddingUnits.Tablet}`;
    const globalMobilePadding = `${counterGlobalPaddingMobile.top}${counterGlobalPaddingUnits.Mobile} ${counterGlobalPaddingMobile.right}${counterGlobalPaddingUnits.Mobile} ${counterGlobalPaddingMobile.bottom}${counterGlobalPaddingUnits.Mobile} ${counterGlobalPaddingMobile.left}${counterGlobalPaddingUnits.Mobile}`;
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (counterGlobalMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalMarginMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterGlobalMarginDesktop: {
                            ...counterGlobalMarginDesktop,
                            [position]: value,
                        },
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalMarginTablet: {
                            ...counterGlobalMarginTablet,
                            [position]: value,
                        },
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalMarginMobile: {
                            ...counterGlobalMarginMobile,
                            [position]: value,
                        },
                    });
                    break;
                default:
                    break;
            }
        }
    };

    const handleGlobalMarginCombineBtn = () => {
        setAttributes({ counterGlobalMarginLink: !counterGlobalMarginLink });
    };

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            counterGlobalMarginUnits: {
                ...counterGlobalMarginUnits,
                [deviceType]: unit,
            },
        });
    };

    const globalDesktopMargin = `${counterGlobalMarginDesktop.top}${counterGlobalMarginUnits.Desktop} ${counterGlobalMarginDesktop.right}${counterGlobalMarginUnits.Desktop} ${counterGlobalMarginDesktop.bottom}${counterGlobalMarginUnits.Desktop} ${counterGlobalMarginDesktop.left}${counterGlobalMarginUnits.Desktop}`;
    const globalTabletMargin = `${counterGlobalMarginTablet.top}${counterGlobalMarginUnits.Tablet} ${counterGlobalMarginTablet.right}${counterGlobalMarginUnits.Tablet} ${counterGlobalMarginTablet.bottom}${counterGlobalMarginUnits.Tablet} ${counterGlobalMarginTablet.left}${counterGlobalMarginUnits.Tablet}`;
    const globalMobileMargin = `${counterGlobalMarginMobile.top}${counterGlobalMarginUnits.Mobile} ${counterGlobalMarginMobile.right}${counterGlobalMarginUnits.Mobile} ${counterGlobalMarginMobile.bottom}${counterGlobalMarginUnits.Mobile} ${counterGlobalMarginMobile.left}${counterGlobalMarginUnits.Mobile}`;
    /** End Global Margin */

    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (counterGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalBorderMobile: {
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
                    setAttributes({ counterGlobalBorderDesktop: { ...counterGlobalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterGlobalBorderTablet: { ...counterGlobalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterGlobalBorderMobile: { ...counterGlobalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ counterGlobalBorderLink: !counterGlobalBorderLink });
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            counterGlobalBorderUnits: {
                ...counterGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }

    const globalDesktopBorderWidth = `${counterGlobalBorderDesktop.top}${counterGlobalBorderUnits.Desktop} ${counterGlobalBorderDesktop.right}${counterGlobalBorderUnits.Desktop} ${counterGlobalBorderDesktop.bottom}${counterGlobalBorderUnits.Desktop} ${counterGlobalBorderDesktop.left}${counterGlobalBorderUnits.Desktop}`;
    const globalTabletBorderWidth = `${counterGlobalBorderTablet.top}${counterGlobalBorderUnits.Tablet} ${counterGlobalBorderTablet.right}${counterGlobalBorderUnits.Tablet} ${counterGlobalBorderTablet.bottom}${counterGlobalBorderUnits.Tablet} ${counterGlobalBorderTablet.left}${counterGlobalBorderUnits.Tablet}`;
    const globalMobileBorderWidth = `${counterGlobalBorderMobile.top}${counterGlobalBorderUnits.Mobile} ${counterGlobalBorderMobile.right}${counterGlobalBorderUnits.Mobile} ${counterGlobalBorderMobile.bottom}${counterGlobalBorderUnits.Mobile} ${counterGlobalBorderMobile.left}${counterGlobalBorderUnits.Mobile}`;
    /** End Border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (counterGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        counterGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        counterGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        counterGlobalBorderRadiusMobile: {
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
                    setAttributes({ counterGlobalBorderRadiusDesktop: { ...counterGlobalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ counterGlobalBorderRadiusTablet: { ...counterGlobalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ counterGlobalBorderRadiusMobile: { ...counterGlobalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ counterGlobalBorderRadiusLink: !counterGlobalBorderRadiusLink });
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            counterGlobalBorderRadiusUnits: {
                ...counterGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    const globalDesktopBorderRadiusWidth = `${counterGlobalBorderRadiusDesktop.top}${counterGlobalBorderRadiusUnits.Desktop} ${counterGlobalBorderRadiusDesktop.right}${counterGlobalBorderRadiusUnits.Desktop} ${counterGlobalBorderRadiusDesktop.bottom}${counterGlobalBorderRadiusUnits.Desktop} ${counterGlobalBorderRadiusDesktop.left}${counterGlobalBorderRadiusUnits.Desktop}`;
    const globalTabletBorderRadiusWidth = `${counterGlobalBorderRadiusTablet.top}${counterGlobalBorderRadiusUnits.Tablet} ${counterGlobalBorderRadiusTablet.right}${counterGlobalBorderRadiusUnits.Tablet} ${counterGlobalBorderRadiusTablet.bottom}${counterGlobalBorderRadiusUnits.Tablet} ${counterGlobalBorderRadiusTablet.left}${counterGlobalBorderRadiusUnits.Tablet}`;
    const globalMobileBorderRadiusWidth = `${counterGlobalBorderRadiusMobile.top}${counterGlobalBorderRadiusUnits.Mobile} ${counterGlobalBorderRadiusMobile.right}${counterGlobalBorderRadiusUnits.Mobile} ${counterGlobalBorderRadiusMobile.bottom}${counterGlobalBorderRadiusUnits.Mobile} ${counterGlobalBorderRadiusMobile.left}${counterGlobalBorderRadiusUnits.Mobile}`;
    /** End Border Radius */

    const counterBlockStyle = useMemo(() => `
    .fb-counter-main-wrapper.${blockID}{
        ${counterPositionType === 'default' ? `position: relative;` : ''}
        ${counterPositionType !== 'default' && counterPositionType !== 'relative' ? `width: 100%;` : ''}
        ${counterPositionType !== 'default' ? `position: ${counterPositionType};` : ''}
        ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'left' && counterHZLeftOffset.Desktop ? `left: ${counterHZLeftOffset.Desktop}${counterHZLeftOffsetUnits.Desktop};` : ''}
        ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'right' && counterHZRightOffset.Desktop ? `right: ${counterHZRightOffset.Desktop}${counterHZRightOffsetUnits.Desktop};` : ''}
        ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'top' && counterVRTopOffset.Desktop ? `top: ${counterVRTopOffset.Desktop}${counterVRTopOffsetUnits.Desktop};` : ''}
        ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'bottom' && counterVRBottomOffset.Desktop ? `bottom: ${counterVRBottomOffset.Desktop}${counterVRBottomOffsetUnits.Desktop};` : ''}
        ${counterGlobalZIndex.Desktop ? `z-index: ${counterGlobalZIndex.Desktop};` : ''}
        ${counterOverflow !== 'default' ? `overflow: ${counterOverflow};` : ''}
    }
    .fb-counter-wrapper.${blockID}{
        ${counterGlobalBgColor ? `background: ${counterGlobalBgColor};` : ''}
        ${globalDesktopPadding && counterGlobalPaddingDesktop.top ? `padding: ${globalDesktopPadding};` : ""}
        ${globalDesktopMargin && counterGlobalMarginDesktop.top ? `margin: ${globalDesktopMargin};` : ""}
        ${counterGlobalBorder ? `border-style: ${counterGlobalBorder};` : ""}
        ${counterGlobalBorderColor ? `border-color: ${counterGlobalBorderColor};` : ""} 
        ${globalDesktopBorderWidth && counterGlobalBorderDesktop.top ? `border-width: ${globalDesktopBorderWidth};` : ""}
        ${globalDesktopBorderRadiusWidth && counterGlobalBorderRadiusDesktop.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ""}
        ${counterGlobalBoxShadowCssValue ? `box-shadow: ${counterGlobalBoxShadowCssValue};` : ""}

        ${counterAlignment.Desktop === 'left' ? `justify-content: flex-start;` : ''}
        ${counterAlignment.Desktop === 'center' ? `justify-content: center;` : ''}
        ${counterAlignment.Desktop === 'right' ? `justify-content: flex-end;` : ''}
    }
    .fb-counter-wrapper.${blockID}:hover{
        ${counterGlobalBgHoverColor ? `background: ${counterGlobalBgHoverColor};` : ''}
        ${counterGlobalBorderHoverColor ? `border-color: ${counterGlobalBorderHoverColor};` : ""}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item {
        display: flex;
        ${iconPosition === 'top' ? `flex-direction: column;` : ''}
        ${iconPosition === 'right' ? `flex-direction: row-reverse; align-items: center;` : ''}
        ${iconPosition === 'bottom' ? `flex-direction: column-reverse;` : ''}
        ${iconPosition === 'left' ? `flex-direction: row; align-items: center;` : ''}

        ${iconPosition !== 'top' && iconPosition !== 'bottom' && counterAlignment.Desktop ? `justify-content: ${counterAlignment.Desktop};` : ''}
        ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment.Desktop === 'left' ? `align-items: flex-start;` : ''}
        ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment.Desktop === 'center' ? `align-items: center;` : ''}
        ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment.Desktop === 'right' ? `align-items: flex-end;` : ''}

        ${counterItemBgColor ? `background: ${counterItemBgColor};` : ''}
        ${counterItemSize.Desktop ? `width: ${counterItemSize.Desktop}${counterItemSizeUnits.Desktop};` : ''}
        ${counterItemHeight && counterItemHeight.Desktop ? `height: ${counterItemHeight.Desktop}${counterItemHeightUnits.Desktop};` : ''}
        ${counterItemRatio ? `aspect-ratio: 1 / 1;` : ''}
        ${counterItemBorder ? `border: ${counterItemBorder};` : ''}
        ${counterItemDesktopBorder && counterItemBorderTypeDesktop.top ? `border-width: ${counterItemDesktopBorder};` : ''}
        ${counterItemBorderColor ? `border-color: ${counterItemBorderColor};` : ''}
        ${counterItemDesktopBorderRadius && counterItemBorderRadiusDesktop.top ? `border-radius: ${counterItemDesktopBorderRadius};` : ''}
        ${counterItemDesktopPadding && counterItemPaddingDesktop.top ? `padding: ${counterItemDesktopPadding};` : ''}
        ${counterItemDesktopMargin && counterItemMarginDesktop.top ? `margin: ${counterItemDesktopMargin};` : ''}
        ${counterItemGap.Desktop ? `gap: ${counterItemGap.Desktop}${counterItemGapUnits.Desktop};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item:hover{
        ${counterItemBgHoverColor ? `background: ${counterItemBgHoverColor};` : ''}
        ${counterItemBorderHoverColor ? `border-color: ${counterItemBorderHoverColor};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper {
        display: flex;
        ${counterIconDesktopMargin && counterIconMarginDesktop.top ? `margin: ${counterIconDesktopMargin};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper img {
        ${counterIconSize.Desktop ? `width: ${counterIconSize.Desktop}${counterIconSizeUnits.Desktop};` : ''}
        ${counterIconSizeRatio ? `aspect-ratio: 1 / 1;` : ''}
        ${counterMediaImagedisplay && counterMediaImagedisplay !== 'none' ? `object-fit: ${counterMediaImagedisplay};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper .fb-counter-icon {
        display: flex;
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper .fb-counter-icon svg {
        ${counterIconSize.Desktop ? `width: ${counterIconSize.Desktop}${counterIconSizeUnits.Desktop};` : ''}
        ${counterIconSizeRatio ? `aspect-ratio: 1 / 1;` : ''}
        ${counterIconColor ? `fill: ${counterIconColor};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item:hover svg{
        ${counterIconHoverColor ? `fill: ${counterIconHoverColor};` : ''}
    }

    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-content-wrapper {
        display: flex;
        ${titlePosition === 'top' ? `flex-direction: column-reverse;` : ''}
        ${titlePosition === 'right' ? `flex-direction: row; align-items: center;` : ''}
        ${titlePosition === 'bottom' ? `flex-direction: column;` : ''}
        ${titlePosition === 'left' ? `flex-direction: row-reverse; align-items: center;` : ''}

        ${iconPosition !== 'top' && iconPosition !== 'bottom' ? `text-align: left;` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-wrapper {
        ${counterNumberDesktopMargin && counterNumberMarginDesktop.top ? `margin: ${counterNumberDesktopMargin};` : ''}
        ${counterCardAlignment.Desktop === 'left' ? `justify-content: flex-start;` : ''}
        ${counterCardAlignment.Desktop === 'center' ? `justify-content: center;` : ''}
        ${counterCardAlignment.Desktop === 'right' ? `justify-content: flex-end;` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number,
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-prefix,
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-suffix {
        ${counterNumberFontColor ? `color: ${counterNumberFontColor};` : ''}

        ${counterNumberGlobalTypoSwitcher.fontFamily === true && counterNumberGlobalTypographyData.fontFamily ? `font-family: ${counterNumberGlobalTypographyData.fontFamily};` : ''}
        ${counterNumberGlobalTypoSwitcher.fontSize === true && counterNumberGlobalTypographyData.fontSize ? `font-size: ${counterNumberGlobalTypographyData.fontSize};` : ''}
        ${counterNumberGlobalTypoSwitcher.fontWeight === true && counterNumberGlobalTypographyData.fontWeight ? `font-weight: ${counterNumberGlobalTypographyData.fontWeight};` : ''}
        ${counterNumberGlobalTypoSwitcher.fontStyle === true && counterNumberGlobalTypographyData.fontStyle ? `font-style: ${counterNumberGlobalTypographyData.fontStyle};` : ''}
        ${counterNumberGlobalTypoSwitcher.textTransform === true && counterNumberGlobalTypographyData.textTransform ? `text-transform: ${counterNumberGlobalTypographyData.textTransform};` : ''}
        ${counterNumberGlobalTypoSwitcher.textDecoration === true && counterNumberGlobalTypographyData.textDecoration ? `text-decoration: ${counterNumberGlobalTypographyData.textDecoration};` : ''}
        ${counterNumberGlobalTypoSwitcher.letterSpacing === true && counterNumberGlobalTypographyData.letterSpacing ? `letter-spacing: ${counterNumberGlobalTypographyData.letterSpacing};` : ''}
        ${counterNumberGlobalTypoSwitcher.lineHeight === true && counterNumberGlobalTypographyData.lineHeight ? `line-height: ${counterNumberGlobalTypographyData.lineHeight};` : ''}

        ${counterNumberGlobalTypoSwitcher.fontFamily === false && counterNumberFontFamily && counterNumberFontFamily !== 'Default' ? `font-family: ${counterNumberFontFamily};` : ''}
        ${counterNumberGlobalTypoSwitcher.fontSize === false && counterNumberFontSize.Desktop ? `font-size: ${counterNumberFontSize.Desktop}${counterNumberFontSizeUnits.Desktop};` : ''}
        ${counterNumberGlobalTypoSwitcher.fontWeight === false && counterNumberFontWeight ? `font-weight: ${counterNumberFontWeight};` : ''}
        ${counterNumberGlobalTypoSwitcher.fontStyle === false && counterNumberFontStyle ? `font-style: ${counterNumberFontStyle};` : ''}
        ${counterNumberGlobalTypoSwitcher.textTransform === false && counterNumberTextTransform ? `text-transform: ${counterNumberTextTransform};` : ''}
        ${counterNumberGlobalTypoSwitcher.textDecoration === false && counterNumberTextDecoration ? `text-decoration: ${counterNumberTextDecoration};` : ''}
        ${counterNumberGlobalTypoSwitcher.letterSpacing === false && counterNumberLetterSpacing.Desktop ? `letter-spacing: ${counterNumberLetterSpacing.Desktop}${counterNumberLetterSpacingUnits.Desktop};` : ''}
        ${counterNumberGlobalTypoSwitcher.lineHeight === false && counterNumberLineHeight.Desktop ? `line-height: ${counterNumberLineHeight.Desktop}${counterNumberLineHeightUnits.Desktop};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item:hover .fb-counter-number,
    .fb-counter-wrapper.${blockID} .fb-counter-item:hover .fb-counter-number-prefix,
    .fb-counter-wrapper.${blockID} .fb-counter-item:hover .fb-counter-number-suffix{
        ${counterNumberFontHoverColor ? `color: ${counterNumberFontHoverColor};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-title {
        ${counterNumberTitleFontColor ? `color: ${counterNumberTitleFontColor};` : ''}

        ${counterNumberTitleGlobalTypoSwitcher.fontFamily === true && counterNumberTitleGlobalTypographyData.fontFamily ? `font-family: ${counterNumberTitleGlobalTypographyData.fontFamily};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher.fontSize === true && counterNumberTitleGlobalTypographyData.fontSize ? `font-size: ${counterNumberTitleGlobalTypographyData.fontSize};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher.fontWeight === true && counterNumberTitleGlobalTypographyData.fontWeight ? `font-weight: ${counterNumberTitleGlobalTypographyData.fontWeight};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher.fontStyle === true && counterNumberTitleGlobalTypographyData.fontStyle ? `font-style: ${counterNumberTitleGlobalTypographyData.fontStyle};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher.textTransform === true && counterNumberTitleGlobalTypographyData.textTransform ? `text-transform: ${counterNumberTitleGlobalTypographyData.textTransform};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher.textDecoration === true && counterNumberTitleGlobalTypographyData.textDecoration ? `text-decoration: ${counterNumberTitleGlobalTypographyData.textDecoration};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher.letterSpacing === true && counterNumberTitleGlobalTypographyData.letterSpacing ? `letter-spacing: ${counterNumberTitleGlobalTypographyData.letterSpacing};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher.lineHeight === true && counterNumberTitleGlobalTypographyData.lineHeight ? `line-height: ${counterNumberTitleGlobalTypographyData.lineHeight};` : ''}

        ${counterNumberTitleGlobalTypoSwitcher.fontFamily === false && counterNumberTitleFontFamily && counterNumberTitleFontFamily !== 'Default' ? `font-family: ${counterNumberTitleFontFamily};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher.fontSize === false && counterNumberTitleFontSize.Desktop ? `font-size: ${counterNumberTitleFontSize.Desktop}${counterNumberTitleFontSizeUnits.Desktop};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher.fontWeight === false && counterNumberTitleFontWeight ? `font-weight: ${counterNumberTitleFontWeight};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher.fontStyle === false && counterNumberTitleFontStyle ? `font-style: ${counterNumberTitleFontStyle};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher.textTransform === false && counterNumberTitleTextTransform ? `text-transform: ${counterNumberTitleTextTransform};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher.textDecoration === false && counterNumberTitleTextDecoration ? `text-decoration: ${counterNumberTitleTextDecoration};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher.letterSpacing === false && counterNumberTitleLetterSpacing.Desktop ? `letter-spacing: ${counterNumberTitleLetterSpacing.Desktop}${counterNumberTitleLetterSpacingUnits.Desktop};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher.lineHeight === false && counterNumberTitleLineHeight.Desktop ? `line-height: ${counterNumberTitleLineHeight.Desktop}${counterNumberTitleLineHeightUnits.Desktop};` : ''}
        ${counterNumberTitleDesktopMargin && counterNumberTitleMarginDesktop.top ? `margin: ${counterNumberTitleDesktopMargin};` : ''}
        
        ${counterCardAlignment.Desktop ? `text-align: ${counterCardAlignment.Desktop};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item:hover .fb-counter-title{
        ${counterNumberTitleFontHoverColor ? `color: ${counterNumberTitleFontHoverColor};` : ''}
    }
    @media only screen and (max-width: 1024px) {
        .fb-counter-main-wrapper.${blockID}{
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'left' && counterHZLeftOffset.Tablet ? `left: ${counterHZLeftOffset.Tablet}${counterHZLeftOffsetUnits.Tablet};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'right' && counterHZRightOffset.Tablet ? `right: ${counterHZRightOffset.Tablet}${counterHZRightOffsetUnits.Tablet};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'top' && counterVRTopOffset.Tablet ? `top: ${counterVRTopOffset.Tablet}${counterVRTopOffsetUnits.Tablet};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'bottom' && counterVRBottomOffset.Tablet ? `bottom: ${counterVRBottomOffset.Tablet}${counterVRBottomOffsetUnits.Tablet};` : ''}
            ${counterGlobalZIndex.Tablet ? `z-index: ${counterGlobalZIndex.Tablet};` : ''}        
        }
        .fb-counter-wrapper.${blockID}{
            ${globalTabletPadding && counterGlobalPaddingTablet.top ? `padding: ${globalTabletPadding};` : ""}
            ${globalTabletMargin && counterGlobalMarginTablet.top ? `margin: ${globalTabletMargin};` : ""}
            ${globalTabletBorderWidth && counterGlobalBorderTablet.top ? `border-width: ${globalTabletBorderWidth};` : ""}
            ${globalTabletBorderRadiusWidth && counterGlobalBorderRadiusTablet.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ""}
            ${counterAlignment.Tablet === 'left' ? `justify-content: flex-start;` : ''}
            ${counterAlignment.Tablet === 'center' ? `justify-content: center;` : ''}
            ${counterAlignment.Tablet === 'right' ? `justify-content: flex-end;` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item {
            ${counterItemTabletBorder && counterItemBorderTypeTablet.top ? `border-width: ${counterItemTabletBorder};` : ''}
            ${counterItemTabletBorderRadius && counterItemBorderRadiusTablet.top ? `border-radius: ${counterItemTabletBorderRadius};` : ''}
            ${counterItemTabletPadding && counterItemPaddingTablet.top ? `padding: ${counterItemTabletPadding};` : ''}
            ${counterItemTabletMargin && counterItemMarginTablet.top ? `margin: ${counterItemTabletMargin};` : ''}
            ${counterItemHeight && counterItemHeight.Tablet ? `height: ${counterItemHeight.Tablet}${counterItemHeightUnits.Tablet};` : ''}
            ${iconPosition !== 'top' && iconPosition !== 'bottom' && counterAlignment.Tablet ? `justify-content: ${counterAlignment.Tablet};` : ''}
            ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment.Tablet === 'left' ? `align-items: flex-start;` : ''}
            ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment.Tablet === 'center' ? `align-items: center;` : ''}
            ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment.Tablet === 'right' ? `align-items: flex-end;` : ''}
            ${counterItemGap.Tablet ? `gap: ${counterItemGap.Tablet}${counterItemGapUnits.Tablet};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper {
            ${counterIconTabletMargin && counterIconMarginTablet.top ? `margin: ${counterIconTabletMargin};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper img {
            ${counterIconSize.Tablet ? `width: ${counterIconSize.Tablet}${counterIconSizeUnits.Tablet};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper .fb-counter-icon svg {
            ${counterIconSize.Tablet ? `width: ${counterIconSize.Tablet}${counterIconSizeUnits.Tablet};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-wrapper {
            ${counterNumberTabletMargin && counterNumberMarginTablet.top ? `margin: ${counterNumberTabletMargin};` : ''}
            ${counterCardAlignment.Tablet === 'left' ? `justify-content: flex-start;` : ''}
            ${counterCardAlignment.Tablet === 'center' ? `justify-content: center;` : ''}
            ${counterCardAlignment.Tablet === 'right' ? `justify-content: flex-end;` : ''}
        }

        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number,
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-prefix,
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-suffix {
            ${counterNumberGlobalTypoSwitcher.fontSize === false && counterNumberFontSize.Tablet ? `font-size: ${counterNumberFontSize.Tablet}${counterNumberFontSizeUnits.Tablet};` : ''}
            ${counterNumberGlobalTypoSwitcher.letterSpacing === false && counterNumberLetterSpacing.Tablet ? `letter-spacing: ${counterNumberLetterSpacing.Tablet}${counterNumberLetterSpacingUnits.Tablet};` : ''}
            ${counterNumberGlobalTypoSwitcher.lineHeight === false && counterNumberLineHeight.Tablet ? `line-height: ${counterNumberLineHeight.Tablet}${counterNumberLineHeightUnits.Tablet};` : ''}
        }

        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-title {
            ${counterNumberTitleGlobalTypoSwitcher.fontSize === false && counterNumberTitleFontSize.Tablet ? `font-size: ${counterNumberTitleFontSize.Tablet}${counterNumberTitleFontSizeUnits.Tablet};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher.letterSpacing === false && counterNumberTitleLetterSpacing.Tablet ? `letter-spacing: ${counterNumberTitleLetterSpacing.Tablet}${counterNumberTitleLetterSpacingUnits.Tablet};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher.lineHeight === false && counterNumberTitleLineHeight.Tablet ? `line-height: ${counterNumberTitleLineHeight.Tablet}${counterNumberTitleLineHeightUnits.Tablet};` : ''}
            ${counterNumberTitleTabletMargin && counterNumberTitleMarginTablet.top ? `margin: ${counterNumberTitleTabletMargin};` : ''}
            ${counterCardAlignment.Tablet ? `text-align: ${counterCardAlignment.Tablet};` : ''}
        }
    }
    @media only screen and (max-width: 767px) {
        .fb-counter-main-wrapper.${blockID}{
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'left' && counterHZLeftOffset.Mobile ? `left: ${counterHZLeftOffset.Mobile}${counterHZLeftOffsetUnits.Mobile};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'right' && counterHZRightOffset.Mobile ? `right: ${counterHZRightOffset.Mobile}${counterHZRightOffsetUnits.Mobile};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'top' && counterVRTopOffset.Mobile ? `top: ${counterVRTopOffset.Mobile}${counterVRTopOffsetUnits.Mobile};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'bottom' && counterVRBottomOffset.Mobile ? `bottom: ${counterVRBottomOffset.Mobile}${counterVRBottomOffsetUnits.Mobile};` : ''} 
            ${counterGlobalZIndex.Mobile ? `z-index: ${counterGlobalZIndex.Mobile};` : ''}
        }
        .fb-counter-wrapper.${blockID}{
            ${globalMobilePadding && counterGlobalPaddingMobile.top ? `padding: ${globalMobilePadding};` : ""}
            ${globalMobileMargin && counterGlobalMarginMobile.top ? `margin: ${globalMobileMargin};` : ""}
            ${globalMobileBorderWidth && counterGlobalBorderMobile.top ? `border-width: ${globalMobileBorderWidth};` : ""}
            ${globalMobileBorderRadiusWidth && counterGlobalBorderRadiusMobile.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ""}
            ${counterAlignment.Mobile === 'left' ? `justify-content: flex-start;` : ''}
            ${counterAlignment.Mobile === 'center' ? `justify-content: center;` : ''}
            ${counterAlignment.Mobile === 'right' ? `justify-content: flex-end;` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item {
            ${counterItemMobileBorder && counterItemBorderTypeMobile.top ? `border-width: ${counterItemMobileBorder};` : ''}
            ${counterItemMobileBorderRadius && counterItemBorderRadiusMobile.top ? `border-radius: ${counterItemMobileBorderRadius};` : ''}
            ${counterItemMobilePadding && counterItemPaddingMobile.top ? `padding: ${counterItemMobilePadding};` : ''}
            ${counterItemMobileMargin && counterItemMarginMobile.top ? `margin: ${counterItemMobileMargin};` : ''}
            ${counterItemHeight && counterItemHeight.Mobile ? `height: ${counterItemHeight.Mobile}${counterItemHeightUnits.Mobile};` : ''}
            ${iconPosition !== 'top' && iconPosition !== 'bottom' && counterAlignment.Mobile ? `justify-content: ${counterAlignment.Mobile};` : ''}
            ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment.Mobile === 'left' ? `align-items: flex-start;` : ''}
            ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment.Mobile === 'center' ? `align-items: center;` : ''}
            ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment.Mobile === 'right' ? `align-items: flex-end;` : ''}
            ${counterItemGap.Mobile ? `gap: ${counterItemGap.Mobile}${counterItemGapUnits.Mobile};` : ''}
        }

        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper {
            ${counterIconMobileMargin && counterIconMarginMobile.top ? `margin: ${counterIconMobileMargin};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper img {
            ${counterIconSize.Mobile ? `width: ${counterIconSize.Mobile}${counterIconSizeUnits.Mobile};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper .fb-counter-icon svg {
            ${counterIconSize.Mobile ? `width: ${counterIconSize.Mobile}${counterIconSizeUnits.Mobile};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-wrapper {
            ${counterNumberMobileMargin && counterNumberMarginMobile.top ? `margin: ${counterNumberMobileMargin};` : ''}
            ${counterCardAlignment.Mobile === 'left' ? `justify-content: flex-start;` : ''}
            ${counterCardAlignment.Mobile === 'center' ? `justify-content: center;` : ''}
            ${counterCardAlignment.Mobile === 'right' ? `justify-content: flex-end;` : ''}
        }

        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number,
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-prefix,
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-suffix {
            ${counterNumberGlobalTypoSwitcher.fontSize === false && counterNumberFontSize.Mobile ? `font-size: ${counterNumberFontSize.Mobile}${counterNumberFontSizeUnits.Mobile};` : ''}
            ${counterNumberGlobalTypoSwitcher.letterSpacing === false && counterNumberLetterSpacing.Mobile ? `letter-spacing: ${counterNumberLetterSpacing.Mobile}${counterNumberLetterSpacingUnits.Mobile};` : ''}
            ${counterNumberGlobalTypoSwitcher.lineHeight === false && counterNumberLineHeight.Mobile ? `line-height: ${counterNumberLineHeight.Mobile}${counterNumberLineHeightUnits.Mobile};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-title {
            ${counterNumberTitleGlobalTypoSwitcher.fontSize === false && counterNumberTitleFontSize.Mobile ? `font-size: ${counterNumberTitleFontSize.Mobile}${counterNumberTitleFontSizeUnits.Mobile};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher.letterSpacing === false && counterNumberTitleLetterSpacing.Mobile ? `letter-spacing: ${counterNumberTitleLetterSpacing.Mobile}${counterNumberTitleLetterSpacingUnits.Mobile};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher.lineHeight === false && counterNumberTitleLineHeight.Mobile ? `line-height: ${counterNumberTitleLineHeight.Mobile}${counterNumberTitleLineHeightUnits.Mobile};` : ''}
            ${counterNumberTitleMobileMargin && counterNumberTitleMarginMobile.top ? `margin: ${counterNumberTitleMobileMargin};` : ''}
            ${counterCardAlignment.Mobile ? `text-align: ${counterCardAlignment.Mobile};` : ''}
        }
    }
    `, [
        blockID,
        counterAlignment,
        deviceType,

        iconPosition,
        titlePosition,
        counterCardAlignment,
        counterMediaImagedisplay,

        counterItemSize,
        counterItemRatio,

        // Item Border Type
        counterItemBorder,
        counterItemBorderColor,
        counterItemBorderHoverColor,

        counterItemBorderTypeUnits,
        counterItemBorderTypeDesktop,
        counterItemBorderTypeTablet,
        counterItemBorderTypeMobile,

        // Item Border Radius
        counterItemBorderRadiusUnits,
        counterItemBorderRadiusDesktop,
        counterItemBorderRadiusTablet,
        counterItemBorderRadiusMobile,

        // Item Background attributes
        counterItemBgColor,
        counterItemBgHoverColor,

        //Counter Icon attributes
        counterIconMarginUnits,
        counterIconMarginDesktop,
        counterIconMarginTablet,
        counterIconMarginMobile,
        counterIconColor,
        counterIconHoverColor,
        counterIconSize,
        counterIconSizeUnits,
        counterIconSizeRatio,

        //Counter Number attributes
        counterNumberFontColor,
        counterNumberFontHoverColor,
        counterNumberGlobalTypoSwitcher,
        counterNumberGlobalTypographyData,
        counterNumberGlobalTypoType,
        counterNumberGlobalTypoOption,
        counterNumberFontFamily,
        counterNumberFontSize,
        counterNumberFontSizeUnits,
        counterNumberFontWeight,
        counterNumberFontStyle,
        counterNumberTextTransform,
        counterNumberTextDecoration,
        counterNumberLetterSpacing,
        counterNumberLetterSpacingUnits,
        counterNumberLineHeight,
        counterNumberLineHeightUnits,

        counterNumberMarginUnits,
        counterNumberMarginDesktop,
        counterNumberMarginTablet,
        counterNumberMarginMobile,

        //Counter Number Title attributes
        counterNumberTitleGlobalTypoSwitcher,
        counterNumberTitleGlobalTypographyData,
        counterNumberTitleGlobalTypoType,
        counterNumberTitleGlobalTypoOption,
        counterNumberTitleFontFamily,
        counterNumberTitleFontSize,
        counterNumberTitleFontSizeUnits,
        counterNumberTitleFontWeight,
        counterNumberTitleFontStyle,
        counterNumberTitleTextTransform,
        counterNumberTitleTextDecoration,
        counterNumberTitleLetterSpacing,
        counterNumberTitleLetterSpacingUnits,
        counterNumberTitleLineHeight,
        counterNumberTitleLineHeightUnits,
        counterNumberTitleFontColor,
        counterNumberTitleFontHoverColor,

        counterNumberTitleMarginUnits,
        counterNumberTitleMarginDesktop,
        counterNumberTitleMarginTablet,
        counterNumberTitleMarginMobile,

        //Global attributes
        counterGlobalZIndex,
        counterOverflow,
        counterGlobalPaddingUnits,
        counterGlobalPaddingDesktop,
        counterGlobalPaddingTablet,
        counterGlobalPaddingMobile,
        counterGlobalMarginUnits,
        counterGlobalMarginDesktop,
        counterGlobalMarginTablet,
        counterGlobalMarginMobile,
        counterGlobalBgColor,
        counterGlobalBgHoverColor,
        counterGlobalBorder,
        counterGlobalBorderColor,
        counterGlobalBorderHoverColor,
        counterGlobalBorderUnits,
        counterGlobalBorderDesktop,
        counterGlobalBorderTablet,
        counterGlobalBorderMobile,
        counterGlobalBorderRadiusUnits,
        counterGlobalBorderRadiusDesktop,
        counterGlobalBorderRadiusTablet,
        counterGlobalBorderRadiusMobile,
        counterGlobalBoxShadowValues,
        counterGlobalBoxShadowCssValue,

        counterDesktopSwitcher,
        counterTabletSwitcher,
        counterMobileSwitcher,

        // Position
        counterPositionType,
        counterHZOrientationType,
        counterVROrientationType,
        counterHZLeftOffset,
        counterHZLeftOffsetUnits,
        counterHZRightOffset,
        counterHZRightOffsetUnits,
        counterVRTopOffset,
        counterVRTopOffsetUnits,
        counterVRBottomOffset,
        counterVRBottomOffsetUnits,

        counterGlobalWraperCustomCSS,
        counterGlobalWraperID,
        counterGlobalWraperClass,
        changeCounterPreset
    ]);

    const customCss = getCustomCss(counterGlobalWraperCustomCSS, `.${blockID}`);

    useEffect(() => {
        setAttributes({ blockStyle: `${counterBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim() });
    }, [counterBlockStyle, customCss]);


    const editorStyle = `${counterBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody title={__("Counter Settings", "frontis-blocks")} initialOpen={true}>
                <SelectControl
                    label={__("Preset Style", "frontis-blocks")}
                    value={counterPresetStyle}
                    options={PRESETS}
                    onChange={(selected) => changeCounterPreset(selected)}
                />

                <FB_ResponsiveAlignmentControl
                    label={__("Alignment", "frontis-blocks")}
                    globalAlignment={counterAlignment}
                    setGlobalAlignment={(value) => setAttributes({ counterAlignment: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
                <RangeControl
                    label={__('Starting Number', 'frontis-blocks')}
                    value={counterNumberStart}
                    onChange={(value) => setAttributes({ counterNumberStart: value })}
                    min={0}
                    max={100000}
                />

                <RangeControl
                    label={__('End Number', 'frontis-blocks')}
                    value={counterNumberEnd}
                    onChange={(value) => setAttributes({ counterNumberEnd: value })}
                    min={0}
                    step={0.1}
                    max={100000}
                />

                <RangeControl
                    label={__('Duration', 'frontis-blocks')}
                    value={counterDuration}
                    onChange={(value) => setAttributes({ counterDuration: value })}
                    min={0}
                    max={10000}
                />

                <ToggleControl
                    label={__('Counter Prefix', 'frontis-blocks')}
                    checked={counterPrefixSwitch}
                    onChange={(value) => setAttributes({ counterPrefixSwitch: value })}
                />
                {counterPrefixSwitch === true && <TextControl
                    value={counterPrefix}
                    onChange={(value) => setAttributes({ counterPrefix: value })}
                />}

                <ToggleControl
                    label={__('Counter Suffix', 'frontis-blocks')}
                    checked={counterSuffixSwitch}
                    onChange={(value) => setAttributes({ counterSuffixSwitch: value })}
                />
                {counterSuffixSwitch === true && <TextControl
                    value={counterSuffix}
                    onChange={(value) => setAttributes({ counterSuffix: value })}
                />}

                <ToggleControl
                    label={__('Show Thousands Separator', 'frontis-blocks')}
                    checked={showThousandsSeparator}
                    onChange={(value) => setAttributes({ showThousandsSeparator: value })}
                />
                {showThousandsSeparator === true && <SelectControl
                    label={__('Separator Type', 'frontis-blocks')}
                    options={separatorType}
                    value={showThousandsSeparatorType}
                    onChange={(value) => setAttributes({ showThousandsSeparatorType: value })}
                />}
            </PanelBody>
            <PanelBody title={__("Icon", "frontis-blocks")} initialOpen={false}>
                <BaseControl className="fb-sub-heading-position">
                    <SelectControl
                        label={__("Counter Icon", "frontis-block")}
                        value={mediaSwitcher}
                        options={mediaType}
                        onChange={(value) => setAttributes({ mediaSwitcher: value })}
                    />
                </BaseControl>

                {mediaSwitcher === 'image' && (<FB_ImageControl
                    globalImageUrl={counterMediaUrl}
                    setglobalImageUrl={(value) => setAttributes({ counterMediaUrl: value })}
                    globalImageAlt={counterMediaAlt}
                    setglobalImageAlt={(value) => setAttributes({ counterMediaAlt: value })}
                    globalImageID={counterMediaId}
                    setglobalImageID={(value) => setAttributes({ counterMediaId: value })}
                    globalImageSize={counterMediaImagedisplay}
                    setglobalImageSize={(value) => setAttributes({ counterMediaImagedisplay: value })}
                />)}

                {mediaSwitcher === 'icon' && (
                    <BaseControl>
                        <FBIconPicker value={icon} setIconHandler={iconHandler} />
                    </BaseControl>
                )}
            </PanelBody>

            <PanelBody title={__("Title", "frontis-blocks")} initialOpen={false}>
                <ToggleControl
                    label={__('Counter Title', 'frontis-blocks')}
                    checked={counterTitleSwitch}
                    onChange={(value) => setAttributes({ counterTitleSwitch: value })}
                />
                {counterTitleSwitch === true && <TextControl
                    label={__("Title Text", "frontis-blocks")}
                    value={counterTitle}
                    onChange={(value) => setAttributes({ counterTitle: value })}
                />}

                {counterTitleSwitch === true && (<FB_HtmlTagControl
                    label={__("Title Tag", "frontis-blocks")}
                    globalHtmlTag={counterTitleTag}
                    setGlobalHtmlTag={(value) => setAttributes({ counterTitleTag: value })}
                />)}
            </PanelBody>
        </>
    );

    /**
     * Inspector Style Controls
     */
    const styleControls = (
        <>
            <PanelBody
                title={__("Item", "frontis-blocks")}
                initialOpen={false}
            >
                <SelectControl
                    label={__("Icon Position", "frontis-blocks")}
                    value={iconPosition}
                    options={ICON_POSITION}
                    onChange={(value) => setAttributes({ iconPosition: value })}
                />

                <FB_ResponsiveAlignmentControl
                    label={__("Card Alignment", "frontis-blocks")}
                    globalAlignment={counterCardAlignment}
                    setGlobalAlignment={(value) => setAttributes({ counterCardAlignment: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_Range
                    min={1}
                    max={counterItemSizeUnits.Desktop === '%' ? 100 : 800}
                    label={__("Width", "frontis-blocks")}
                    rangeValue={counterItemSize}
                    onChangeHandler={counterItemSizeHandler}
                    rangeUnitHandler={counterItemSizeUnitsHandler}
                    deviceType={deviceType}
                    units={counterItemSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />

                <FB_Range
                    min={0}
                    max={counterItemHeightUnits.Desktop === '%' ? 100 : 800}
                    label={__("Height", "frontis-blocks")}
                    rangeValue={counterItemHeight}
                    onChangeHandler={(value) => setAttributes({ counterItemHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ counterItemHeightUnits: value })}
                    deviceType={deviceType}
                    units={counterItemHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />

                <ToggleControl
                    label={__('Square Ratio', 'frontis-blocks')}
                    checked={counterItemRatio}
                    onChange={(value) => setAttributes({ counterItemRatio: value })}
                />

                <FB_SwitcherControl
                    label={__("Background Color", "frontis-blocks")}
                    globalSwitcher={counterItemBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ counterItemBgColorSwitcher: value })}
                />

                {counterItemBgColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={counterItemBgColor}
                        setGlobalColor={(value) => setAttributes({ counterItemBgColor: value === undefined ? '' : value })}
                    />
                )}

                {counterItemBgColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={counterItemBgHoverColor}
                        setGlobalColor={(value) => setAttributes({ counterItemBgHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={counterItemBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ counterItemBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={counterItemBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ counterItemBorderColorSwitcher: value })}
                />

                {counterItemBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={counterItemBorderColor}
                        setGlobalColor={(value) => setAttributes({ counterItemBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {counterItemBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={counterItemBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ counterItemBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={'Border'}
                    deviceType={deviceType}
                    spacingUnitsHandler={counterItemBorderTypeUnitsHandler}
                    spacingUnits={counterItemBorderTypeUnits}
                    spacingDesktop={counterItemBorderTypeDesktop}
                    spacingTablet={counterItemBorderTypeTablet}
                    spacingMobile={counterItemBorderTypeMobile}
                    handleSpacingUnitHandler={handleCounterItemBorderUnitHandler}
                    spacingCombineBtn={counterItemBorderTypeLink}
                    spacingCombineBtnHandler={counterItemBorderCombineBtnHandler}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={'Border Radius'}
                    deviceType={deviceType}
                    spacingUnitsHandler={counterItemBorderRadiusUnitsHandler}
                    spacingUnits={counterItemBorderRadiusUnits}
                    spacingDesktop={counterItemBorderRadiusDesktop}
                    spacingTablet={counterItemBorderRadiusTablet}
                    spacingMobile={counterItemBorderRadiusMobile}
                    handleSpacingUnitHandler={handleItemBorderRadiusUnitHandler}
                    spacingCombineBtn={counterItemBorderRadiusLink}
                    spacingCombineBtnHandler={counterItemBorderRadiusCombineBtnHandler}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={'Padding'}
                    deviceType={deviceType}
                    spacingUnitsHandler={counterItemPaddingUnitsHandler}
                    spacingUnits={counterItemPaddingUnits}
                    spacingDesktop={counterItemPaddingDesktop}
                    spacingTablet={counterItemPaddingTablet}
                    spacingMobile={counterItemPaddingMobile}
                    handleSpacingUnitHandler={handleCounterItemPaddingUnitHandler}
                    spacingCombineBtn={counterItemPaddingLink}
                    spacingCombineBtnHandler={counterItemPaddingCombineBtnHandler}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={'Margin'}
                    deviceType={deviceType}
                    spacingUnitsHandler={counterItemMarginUnitsHandler}
                    spacingUnits={counterItemMarginUnits}
                    spacingDesktop={counterItemMarginDesktop}
                    spacingTablet={counterItemMarginTablet}
                    spacingMobile={counterItemMarginMobile}
                    handleSpacingUnitHandler={handleCounterItemMarginUnitHandler}
                    spacingCombineBtn={counterItemMarginLink}
                    spacingCombineBtnHandler={counterItemMarginCombineBtnHandler}
                    setAttributes={setAttributes}
                />

            </PanelBody>

            {mediaSwitcher !== 'none' && <PanelBody
                title={__("Icon", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={counterIconColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ counterIconColorSwitcher: value })}
                />

                {counterIconColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={counterIconColor}
                        setGlobalColor={(value) => setAttributes({ counterIconColor: value === undefined ? '' : value })}
                    />
                )}

                {counterIconColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={counterIconHoverColor}
                        setGlobalColor={(value) => setAttributes({ counterIconHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Range
                    min={0}
                    max={100}
                    label={__("Icon Size", "frontis-blocks")}
                    rangeValue={counterIconSize}
                    onChangeHandler={(value) => setAttributes({ counterIconSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ counterIconSizeUnits: value })}
                    deviceType={deviceType}
                    units={counterIconSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"25"}
                />

                <FB_Range
                    min={0}
                    max={100}
                    label={__("Gap", "frontis-blocks")}
                    rangeValue={counterItemGap}
                    onChangeHandler={(value) => setAttributes({ counterItemGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ counterItemGapUnits: value })}
                    deviceType={deviceType}
                    units={counterItemGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={"10"}
                />

                <ToggleControl
                    label={__("Icon Square Ratio", "frontis-blocks")}
                    checked={counterIconSizeRatio}
                    onChange={(value) => setAttributes({ counterIconSizeRatio: value })}
                />

                <FB_Spacing
                    label={'Margin'}
                    deviceType={deviceType}
                    spacingUnitsHandler={counterIconMarginUnitsHandler}
                    spacingUnits={counterIconMarginUnits}
                    spacingDesktop={counterIconMarginDesktop}
                    spacingTablet={counterIconMarginTablet}
                    spacingMobile={counterIconMarginMobile}
                    handleSpacingUnitHandler={handleCounterIconMarginUnitHandler}
                    spacingCombineBtn={counterIconMarginLink}
                    spacingCombineBtnHandler={counterIconMarginCombineBtnHandler}
                    setAttributes={setAttributes}
                />
            </PanelBody>}

            <PanelBody
                title={__("Counter Number", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={counterNumberFontColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ counterNumberFontColorSwitcher: value })}
                />

                {counterNumberFontColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={counterNumberFontColor}
                        setGlobalColor={(value) => setAttributes({ counterNumberFontColor: value === undefined ? '' : value })}
                    />
                )}

                {counterNumberFontColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={counterNumberFontHoverColor}
                        setGlobalColor={(value) => setAttributes({ counterNumberFontHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={counterNumberGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ counterNumberGlobalTypographyData: value })}

                    globalTypoType={counterNumberGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            counterNumberGlobalTypoType: value,
                            counterNumberGlobalTypoSwitcher: value === 'default' ? { ...counterNumberGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...counterNumberGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                        })
                    }}

                    globalTypoOption={counterNumberGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ counterNumberGlobalTypoOption: value })}

                    fontFamily={counterNumberFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ counterNumberFontFamily: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, fontFamily: value && false } })}

                    fontSize={counterNumberFontSize}
                    onChangeFontSize={(value) => setAttributes({ counterNumberFontSize: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, fontSize: value && false } })}

                    fontSizeUnits={counterNumberFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ counterNumberFontSizeUnits: value })}

                    fontWeight={counterNumberFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ counterNumberFontWeight: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, fontWeight: value && false } })}

                    fontStyle={counterNumberFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ counterNumberFontStyle: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, fontStyle: value && false } })}

                    textTransform={counterNumberTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ counterNumberTextTransform: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, textTransform: value && false } })}

                    textDecoration={counterNumberTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ counterNumberTextDecoration: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, textDecoration: value && false } })}

                    letterSpacing={counterNumberLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ counterNumberLetterSpacing: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, letterSpacing: value && false } })}

                    letterSpacingUnits={counterNumberLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ counterNumberLetterSpacingUnits: value })}

                    lineHeight={counterNumberLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ counterNumberLineHeight: value, counterNumberGlobalTypoSwitcher: { ...counterNumberGlobalTypoSwitcher, lineHeight: value && false } })}

                    lineHeightUnits={counterNumberLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ counterNumberLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={'Margin'}
                    deviceType={deviceType}
                    spacingUnitsHandler={counterNumberMarginUnitsHandler}
                    spacingUnits={counterNumberMarginUnits}
                    spacingDesktop={counterNumberMarginDesktop}
                    spacingTablet={counterNumberMarginTablet}
                    spacingMobile={counterNumberMarginMobile}
                    handleSpacingUnitHandler={handleCounterNumberMarginUnitHandler}
                    spacingCombineBtn={counterNumberMarginLink}
                    spacingCombineBtnHandler={counterNumberMarginCombineBtnHandler}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            {counterTitleSwitch && <PanelBody
                title={__("Counter Title", "frontis-blocks")}
                initialOpen={false}
            >
                <SelectControl
                    label={__("Title Position", "frontis-blocks")}
                    value={titlePosition}
                    options={TITLE_POSITION}
                    onChange={(value) => setAttributes({ titlePosition: value })}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={counterNumberTitleFontColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ counterNumberTitleFontColorSwitcher: value })}
                />

                {counterNumberTitleFontColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={counterNumberTitleFontColor}
                        setGlobalColor={(value) => setAttributes({ counterNumberTitleFontColor: value === undefined ? '' : value })}
                    />
                )}

                {counterNumberTitleFontColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={counterNumberTitleFontHoverColor}
                        setGlobalColor={(value) => setAttributes({ counterNumberTitleFontHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={counterNumberTitleGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ counterNumberTitleGlobalTypographyData: value })}

                    globalTypoType={counterNumberTitleGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            counterNumberTitleGlobalTypoType: value,
                            counterNumberTitleGlobalTypoSwitcher: value === 'default' ? { ...counterNumberTitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...counterNumberTitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                        })
                    }}

                    globalTypoOption={counterNumberTitleGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ counterNumberTitleGlobalTypoOption: value })}

                    fontFamily={counterNumberTitleFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ counterNumberTitleFontFamily: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, fontFamily: value && false } })}

                    fontSize={counterNumberTitleFontSize}
                    onChangeFontSize={(value) => setAttributes({ counterNumberTitleFontSize: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, fontSize: value && false } })}

                    fontSizeUnits={counterNumberTitleFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ counterNumberTitleFontSizeUnits: value })}

                    fontWeight={counterNumberTitleFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ counterNumberTitleFontWeight: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, fontWeight: value && false } })}

                    fontStyle={counterNumberTitleFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ counterNumberTitleFontStyle: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, fontStyle: value && false } })}

                    textTransform={counterNumberTitleTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ counterNumberTitleTextTransform: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, textTransform: value && false } })}

                    textDecoration={counterNumberTitleTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ counterNumberTitleTextDecoration: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, textDecoration: value && false } })}

                    letterSpacing={counterNumberTitleLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ counterNumberTitleLetterSpacing: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, letterSpacing: value && false } })}

                    letterSpacingUnits={counterNumberTitleLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ counterNumberTitleLetterSpacingUnits: value })}

                    lineHeight={counterNumberTitleLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ counterNumberTitleLineHeight: value, counterNumberTitleGlobalTypoSwitcher: { ...counterNumberTitleGlobalTypoSwitcher, lineHeight: value && false } })}

                    lineHeightUnits={counterNumberTitleLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ counterNumberTitleLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={'Margin'}
                    deviceType={deviceType}
                    spacingUnitsHandler={counterNumberTitleMarginUnitsHandler}
                    spacingUnits={counterNumberTitleMarginUnits}
                    spacingDesktop={counterNumberTitleMarginDesktop}
                    spacingTablet={counterNumberTitleMarginTablet}
                    spacingMobile={counterNumberTitleMarginMobile}
                    handleSpacingUnitHandler={handleCounterNumberTitleMarginUnitHandler}
                    spacingCombineBtn={counterNumberTitleMarginLink}
                    spacingCombineBtnHandler={counterNumberTitleMarginCombineBtnHandler}
                    setAttributes={setAttributes}
                />
            </PanelBody>}
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
                            rangeValue={counterGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ counterGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}
                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={counterOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ counterOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={counterPositionType}
                            setPositionType={(value) => setAttributes({ counterPositionType: value })}

                            HZOrientationType={counterHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ counterHZOrientationType: value })
                            }
                            VROrientationType={counterVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ counterVROrientationType: value })
                            }

                            HZLeftOffset={counterHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ counterHZLeftOffset: value })}
                            HZLeftOffsetUnits={counterHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ counterHZLeftOffsetUnits: value })}
                            HZRightOffset={counterHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ counterHZRightOffset: value })}
                            HZRightOffsetUnits={counterHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ counterHZRightOffsetUnits: value })}

                            VRTopOffset={counterVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ counterVRTopOffset: value })}
                            VRTopOffsetUnits={counterVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ counterVRTopOffsetUnits: value })}
                            VRBottomOffset={counterVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ counterVRBottomOffset: value })}
                            VRBottomOffsetUnits={counterVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ counterVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={counterGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ counterGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={counterGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ counterGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />
                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={counterGlobalPaddingUnits}
                            spacingDesktop={counterGlobalPaddingDesktop}
                            spacingTablet={counterGlobalPaddingTablet}
                            spacingMobile={counterGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={counterGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={counterGlobalMarginUnits}
                            spacingDesktop={counterGlobalMarginDesktop}
                            spacingTablet={counterGlobalMarginTablet}
                            spacingMobile={counterGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={counterGlobalMarginLink}
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
                            globalSwitcher={counterGlobalBgColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ counterGlobalBgColorSwitcher: value })}
                        />

                        {counterGlobalBgColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={counterGlobalBgColor}
                                setGlobalColor={(value) => setAttributes({ counterGlobalBgColor: value === undefined ? '' : value })}
                            />
                        )}

                        {counterGlobalBgColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={counterGlobalBgHoverColor}
                                setGlobalColor={(value) => setAttributes({ counterGlobalBgHoverColor: value === undefined ? '' : value })}
                            />
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Border and Shadow", "frontis-blocks")}
                        initialOpen={false}
                    >

                        <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={counterGlobalBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ counterGlobalBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={counterGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ counterGlobalBorderColorSwitcher: value })}
                        />

                        {counterGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={counterGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ counterGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {counterGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={counterGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ counterGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={counterGlobalBorderUnits}
                            spacingDesktop={counterGlobalBorderDesktop}
                            spacingTablet={counterGlobalBorderTablet}
                            spacingMobile={counterGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={counterGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={counterGlobalBorderRadiusUnits}
                            spacingDesktop={counterGlobalBorderRadiusDesktop}
                            spacingTablet={counterGlobalBorderRadiusTablet}
                            spacingMobile={counterGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={counterGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_BoxShadowControl
                            onBoxShadowChange={(value) => setAttributes({ counterGlobalBoxShadowValues: value })}
                            initialShadowValue={counterGlobalBoxShadowValues}
                            onBoxShadowStyleChange={(value) => setAttributes({ counterGlobalBoxShadowCssValue: value })}
                        />

                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={counterDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ counterDesktopSwitcher: value })}

                            tabletValue={counterTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ counterTabletSwitcher: value })}

                            mobileValue={counterMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ counterMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={counterGlobalWraperCustomCSS}
                            onChangeValue={(value) => setAttributes({ counterGlobalWraperCustomCSS: value })}
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