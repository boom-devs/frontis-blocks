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
import FB_Presets from '@Components/presets';

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
                    Desktop: '',
                    Tablet: '',
                    Mobile: ''
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
                    Desktop: '',
                    Tablet: '',
                    Mobile: ''
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
                    Desktop: '',
                    Tablet: '',
                    Mobile: ''
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
                iconPosition: {
                    default: 'center'
                }
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

    /**
     * Preset Styles Data Object
     */
    const presetStyles = {
        "preset-1": {
            counterItemBgColor: '#FFFBF5',
            iconPosition: 'left',
            counterNumberEnd: 250,
            counterSuffixSwitch: true,
            counterPrefixSwitch: true,
            counterSuffix: "M",
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
                Desktop: '',
                Tablet: '',
                Mobile: ''
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
                Desktop: '',
                Tablet: '',
                Mobile: ''
            },
            counterItemHeight: {
                Desktop: '',
                Tablet: '',
                Mobile: ''
            },
        },
        "preset-3": {
            iconPosition: 'top',
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
                Desktop: '200',
                Tablet: '200',
                Mobile: '200'
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
                Desktop: 'center',
                Tablet: 'center',
                Mobile: 'center'
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
            iconPosition: {
                default: 'center'
            }
        },
    };
        
    const counterNumberPresets = [
        {
            value: 'preset-1',
            label: __('Preset 1', 'frontis-blocks'),
            attributes: Object.entries(presetStyles['preset-1']).map(([label, value]) => ({ label, value })),
            icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                        <g filter="url(#filter0_d_16980_14412)">
                        <rect x="64.75" y="92" width="218" height="92" rx="14" fill="white" shape-rendering="crispEdges"/>
                        <path d="M117.624 127.875C117.624 128.909 117.42 129.933 117.025 130.889C116.629 131.844 116.049 132.712 115.317 133.443C114.586 134.175 113.718 134.755 112.763 135.151C111.807 135.546 110.783 135.75 109.749 135.75C108.715 135.75 107.691 135.546 106.735 135.151C105.78 134.755 104.912 134.175 104.181 133.443C103.449 132.712 102.869 131.844 102.473 130.889C102.078 129.933 101.874 128.909 101.874 127.875C101.874 125.786 102.704 123.783 104.181 122.307C105.657 120.83 107.66 120 109.749 120C111.838 120 113.841 120.83 115.317 122.307C116.794 123.783 117.624 125.786 117.624 127.875Z" fill="#555E72"/>
                        <path opacity="0.4" d="M126.626 127.875C126.626 129.367 126.033 130.798 124.978 131.852C123.924 132.907 122.493 133.5 121.001 133.5C119.509 133.5 118.078 132.907 117.024 131.852C115.969 130.798 115.376 129.367 115.376 127.875C115.376 126.383 115.969 124.952 117.024 123.898C118.078 122.843 119.509 122.25 121.001 122.25C122.493 122.25 123.924 122.843 124.978 123.898C126.033 124.952 126.626 126.383 126.626 127.875ZM92.876 127.875C92.876 129.367 93.4686 130.798 94.5235 131.852C95.5784 132.907 97.0091 133.5 98.501 133.5C99.9928 133.5 101.424 132.907 102.478 131.852C103.533 130.798 104.126 129.367 104.126 127.875C104.126 126.383 103.533 124.952 102.478 123.898C101.424 122.843 99.9928 122.25 98.501 122.25C97.0091 122.25 95.5784 122.843 94.5235 123.898C93.4686 124.952 92.876 126.383 92.876 127.875Z" fill="#555E72"/>
                        <path d="M123.251 148.125C123.251 152.474 117.207 156 109.751 156C102.294 156 96.251 152.474 96.251 148.125C96.251 143.776 102.294 140.25 109.751 140.25C117.207 140.25 123.251 143.776 123.251 148.125Z" fill="#555E72"/>
                        <path opacity="0.4" d="M132.253 148.125C132.253 151.23 128.225 153.75 123.253 153.75C118.28 153.75 114.253 151.23 114.253 148.125C114.253 145.02 118.28 142.5 123.253 142.5C128.225 142.5 132.253 145.02 132.253 148.125ZM87.2529 148.125C87.2529 151.23 91.2804 153.75 96.2529 153.75C101.225 153.75 105.253 151.23 105.253 148.125C105.253 145.02 101.225 142.5 96.2529 142.5C91.2804 142.5 87.2529 145.02 87.2529 148.125Z" fill="#555E72"/>
                        <rect x="150.75" y="116" width="114" height="18" rx="9" fill="#E1E3E8"/>
                        <rect x="150.75" y="148" width="64" height="12" rx="6" fill="#E1E3E8"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_16980_14412" x="63.3487" y="92" width="220.803" height="96.2038" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2.80255"/>
                        <feGaussianBlur stdDeviation="0.700637"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14412"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14412" result="shape"/>
                        </filter>
                        </defs>
                    </svg>`,
        },
        {
            value: 'preset-2',
            label: __('Preset 2', 'frontis-blocks'),
            attributes: Object.entries(presetStyles['preset-2']).map(([label, value]) => ({ label, value })),
            icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                        <g filter="url(#filter0_d_16980_14853)">
                        <rect x="99" y="58" width="150" height="160" rx="14" fill="white" shape-rendering="crispEdges"/>
                        <path d="M181.873 98.7949C181.873 99.8291 181.669 100.853 181.274 101.809C180.878 102.764 180.298 103.632 179.567 104.363C178.835 105.095 177.967 105.675 177.012 106.07C176.056 106.466 175.032 106.67 173.998 106.67C172.964 106.67 171.94 106.466 170.984 106.07C170.029 105.675 169.161 105.095 168.43 104.363C167.698 103.632 167.118 102.764 166.722 101.809C166.327 100.853 166.123 99.8291 166.123 98.7949C166.123 96.7063 166.953 94.7033 168.43 93.2265C169.906 91.7496 171.909 90.9199 173.998 90.9199C176.087 90.9199 178.09 91.7496 179.567 93.2265C181.043 94.7033 181.873 96.7063 181.873 98.7949Z" fill="#555E72"/>
                        <path opacity="0.4" d="M190.875 98.7949C190.875 100.287 190.282 101.718 189.227 102.772C188.173 103.827 186.742 104.42 185.25 104.42C183.758 104.42 182.327 103.827 181.273 102.772C180.218 101.718 179.625 100.287 179.625 98.7949C179.625 97.3031 180.218 95.8723 181.273 94.8174C182.327 93.7626 183.758 93.1699 185.25 93.1699C186.742 93.1699 188.173 93.7626 189.227 94.8174C190.282 95.8723 190.875 97.3031 190.875 98.7949ZM157.125 98.7949C157.125 100.287 157.718 101.718 158.773 102.772C159.827 103.827 161.258 104.42 162.75 104.42C164.242 104.42 165.673 103.827 166.727 102.772C167.782 101.718 168.375 100.287 168.375 98.7949C168.375 97.3031 167.782 95.8723 166.727 94.8174C165.673 93.7626 164.242 93.1699 162.75 93.1699C161.258 93.1699 159.827 93.7626 158.773 94.8174C157.718 95.8723 157.125 97.3031 157.125 98.7949Z" fill="#555E72"/>
                        <path d="M187.5 119.045C187.5 123.394 181.456 126.92 174 126.92C166.544 126.92 160.5 123.394 160.5 119.045C160.5 114.696 166.544 111.17 174 111.17C181.456 111.17 187.5 114.696 187.5 119.045Z" fill="#555E72"/>
                        <path opacity="0.4" d="M196.502 119.045C196.502 122.15 192.474 124.67 187.502 124.67C182.529 124.67 178.502 122.15 178.502 119.045C178.502 115.94 182.529 113.42 187.502 113.42C192.474 113.42 196.502 115.94 196.502 119.045ZM151.502 119.045C151.502 122.15 155.529 124.67 160.502 124.67C165.474 124.67 169.502 122.15 169.502 119.045C169.502 115.94 165.474 113.42 160.502 113.42C155.529 113.42 151.502 115.94 151.502 119.045Z" fill="#555E72"/>
                        <rect x="116.655" y="149.92" width="114" height="18" rx="9" fill="#E1E3E8"/>
                        <rect x="116.655" y="182.08" width="65" height="12" rx="6" fill="#E1E3E8"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_16980_14853" x="97.5841" y="58" width="152.832" height="164.248" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2.83186"/>
                        <feGaussianBlur stdDeviation="0.707965"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14853"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14853" result="shape"/>
                        </filter>
                        </defs>
                    </svg>`,
        },
        {
            value: 'preset-3',
            label: __('Preset 3', 'frontis-blocks'),
            attributes: Object.entries(presetStyles['preset-3']).map(([label, value]) => ({ label, value })),
            icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                        <g filter="url(#filter0_d_16980_14863)">
                        <rect x="106" y="58" width="136" height="160" rx="14" fill="white" shape-rendering="crispEdges"/>
                        <path d="M179.059 80.0003C179.525 80.2167 179.748 80.4942 179.997 80.9378C180.033 81.1923 180.045 81.4003 180.037 81.6536C180.035 81.729 180.034 81.8044 180.033 81.8821C179.998 83.2037 179.866 84.5238 179.754 85.8405C179.719 86.2445 179.686 86.6484 179.652 87.0524C179.596 87.7288 179.539 88.4051 179.481 89.0813C179.415 89.8627 179.349 90.6441 179.284 91.4256C179.214 92.2607 179.144 93.0958 179.074 93.9308C179.054 94.1707 179.034 94.4105 179.014 94.6504C178.982 95.0263 178.95 95.4022 178.918 95.7781C178.907 95.916 178.895 96.0539 178.884 96.1917C178.868 96.3798 178.852 96.5678 178.836 96.7557C178.827 96.8609 178.818 96.9661 178.809 97.0745C178.783 97.2985 178.746 97.5029 178.684 97.7191C178.843 97.6802 178.843 97.6802 179.005 97.6406C179.711 97.4842 180.428 97.3908 181.143 97.2877C181.301 97.2648 181.458 97.242 181.616 97.2191C181.945 97.1714 182.274 97.1241 182.604 97.0768C183.022 97.0167 183.441 96.9555 183.859 96.894C184.184 96.8464 184.509 96.7996 184.835 96.7531C184.989 96.7309 185.143 96.7084 185.297 96.6856C187.685 96.3327 187.685 96.3327 188.399 96.6527C188.919 97.1728 189.04 97.5299 189.065 98.2541C188.901 98.9976 188.288 99.6043 187.807 100.174C187.691 100.314 187.574 100.454 187.458 100.594C187.401 100.663 187.344 100.731 187.285 100.802C187.052 101.085 186.826 101.373 186.6 101.662C186.233 102.134 185.859 102.6 185.481 103.063C185.102 103.528 184.726 103.996 184.356 104.469C183.936 105.007 183.507 105.538 183.075 106.066C182.748 106.468 182.425 106.873 182.106 107.282C181.686 107.82 181.257 108.35 180.825 108.879C180.498 109.281 180.175 109.686 179.856 110.094C179.436 110.632 179.007 111.163 178.575 111.691C178.248 112.093 177.925 112.498 177.606 112.907C177.186 113.445 176.757 113.975 176.325 114.504C175.998 114.906 175.675 115.311 175.356 115.719C174.936 116.257 174.507 116.788 174.075 117.316C173.748 117.718 173.425 118.123 173.106 118.532C172.68 119.078 172.246 119.617 171.807 120.153C171.518 120.507 171.235 120.865 170.956 121.227C170.615 121.646 170.357 121.962 169.794 122.035C169.344 122.054 169.018 122.039 168.606 121.848C168.252 121.512 168.02 121.229 167.951 120.736C167.951 120.607 167.953 120.477 167.957 120.347C167.958 120.272 167.959 120.196 167.961 120.119C167.996 118.797 168.127 117.477 168.24 116.16C168.274 115.756 168.308 115.352 168.341 114.948C168.398 114.272 168.455 113.596 168.512 112.919C168.579 112.138 168.644 111.357 168.71 110.575C168.779 109.74 168.849 108.905 168.92 108.07C168.94 107.83 168.96 107.59 168.98 107.35C169.011 106.974 169.043 106.598 169.075 106.223C169.087 106.085 169.099 105.947 169.11 105.809C169.126 105.621 169.142 105.433 169.158 105.245C169.167 105.14 169.176 105.035 169.185 104.926C169.21 104.702 169.247 104.498 169.309 104.282C169.201 104.31 169.092 104.339 168.98 104.368C168.598 104.464 168.214 104.53 167.824 104.585C167.72 104.6 167.72 104.6 167.614 104.616C167.387 104.648 167.16 104.681 166.933 104.713C166.773 104.736 166.613 104.759 166.453 104.782C166.119 104.829 165.785 104.877 165.451 104.924C165.026 104.984 164.601 105.045 164.176 105.107C163.846 105.154 163.516 105.201 163.186 105.248C163.03 105.27 162.873 105.292 162.717 105.315C160.304 105.666 160.304 105.666 159.594 105.348C159.074 104.828 158.954 104.471 158.929 103.747C159.093 103.003 159.705 102.396 160.186 101.826C160.303 101.687 160.419 101.547 160.536 101.407C160.621 101.304 160.621 101.304 160.709 101.199C160.942 100.916 161.168 100.628 161.393 100.338C161.761 99.8667 162.134 99.4009 162.512 98.9378C162.892 98.4726 163.268 98.0049 163.637 97.5316C164.058 96.9934 164.487 96.4631 164.918 95.9342C165.246 95.5324 165.569 95.1275 165.887 94.7191C166.308 94.1809 166.737 93.6506 167.168 93.1217C167.496 92.7199 167.819 92.315 168.137 91.9066C168.558 91.3684 168.987 90.8381 169.418 90.3092C169.746 89.9074 170.069 89.5025 170.387 89.0941C170.808 88.5559 171.237 88.0256 171.668 87.4967C171.996 87.0949 172.319 86.69 172.637 86.2816C173.058 85.7434 173.487 85.2131 173.918 84.6842C174.246 84.2824 174.569 83.8775 174.887 83.4691C175.314 82.9231 175.748 82.3839 176.187 81.8478C176.476 81.4938 176.759 81.1359 177.038 80.7738C177.629 80.0471 178.129 79.8751 179.059 80.0003Z" fill="#404655"/>
                        <rect x="152" y="157" width="44" height="18" rx="9" fill="#E1E3E8"/>
                        <rect x="123" y="187" width="102" height="12" rx="6" fill="#E1E3E8"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_16980_14863" x="104.75" y="58" width="138.5" height="163.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2.5"/>
                        <feGaussianBlur stdDeviation="0.625"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14863"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14863" result="shape"/>
                        </filter>
                        </defs>
                    </svg>`,
        },
        {
            value: 'preset-4',
            label: __('Preset 4', 'frontis-blocks'),
            attributes: Object.entries(presetStyles['preset-4']).map(([label, value]) => ({ label, value })),
            icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                        <rect x="94.5128" y="58.5128" width="158.974" height="158.974" rx="79.4872" stroke="#C3C8D2" stroke-width="1.02564"/>
                        <path d="M173.557 113.91C178.803 113.91 183.057 109.532 183.057 104.13V93.3262H164.057V104.13C164.057 109.532 168.31 113.91 173.557 113.91Z" fill="#404655" stroke="#404655" stroke-width="3.24786" stroke-linejoin="round"/>
                        <path d="M164.054 106.786V98.8691H157.721C157.721 104.147 160.887 106.786 164.054 106.786ZM183.054 106.786V98.8691H189.387C189.387 104.147 186.221 106.786 183.054 106.786Z" stroke="#404655" stroke-width="3.24786" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M173.557 115.494V118.661" stroke="#404655" stroke-width="3.24786" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M166.432 123.41L169.353 118.66H177.549L180.682 123.41H166.432Z" fill="#404655" stroke="#404655" stroke-width="3.24786" stroke-linejoin="round"/>
                        <g filter="url(#filter0_d_16980_14870)">
                        <rect x="153" y="146.486" width="42" height="18" rx="9" fill="white"/>
                        </g>
                        <g filter="url(#filter1_d_16980_14870)">
                        <rect x="132" y="174.742" width="84" height="12" rx="6" fill="white"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_16980_14870" x="151.974" y="146.486" width="44.0513" height="21.0769" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2.05128"/>
                        <feGaussianBlur stdDeviation="0.51282"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14870"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14870" result="shape"/>
                        </filter>
                        <filter id="filter1_d_16980_14870" x="130.974" y="174.742" width="86.0513" height="15.0769" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2.05128"/>
                        <feGaussianBlur stdDeviation="0.51282"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14870"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14870" result="shape"/>
                        </filter>
                        </defs>
                    </svg>`,
        },
    ];

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

    const counterItemDesktopBorder = `${counterItemBorderTypeDesktop?.top}${counterItemBorderTypeUnits?.Desktop} ${counterItemBorderTypeDesktop?.right}${counterItemBorderTypeUnits?.Desktop} ${counterItemBorderTypeDesktop?.bottom}${counterItemBorderTypeUnits?.Desktop} ${counterItemBorderTypeDesktop?.left}${counterItemBorderTypeUnits?.Desktop}`;
    const counterItemTabletBorder = `${counterItemBorderTypeTablet?.top}${counterItemBorderTypeUnits?.Tablet} ${counterItemBorderTypeTablet?.right}${counterItemBorderTypeUnits?.Tablet} ${counterItemBorderTypeTablet?.bottom}${counterItemBorderTypeUnits?.Tablet} ${counterItemBorderTypeTablet?.left}${counterItemBorderTypeUnits?.Tablet}`;
    const counterItemMobileBorder = `${counterItemBorderTypeMobile?.top}${counterItemBorderTypeUnits?.Mobile} ${counterItemBorderTypeMobile?.right}${counterItemBorderTypeUnits?.Mobile} ${counterItemBorderTypeMobile?.bottom}${counterItemBorderTypeUnits?.Mobile} ${counterItemBorderTypeMobile?.left}${counterItemBorderTypeUnits?.Mobile}`;

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

    const counterItemDesktopBorderRadius = `${counterItemBorderRadiusDesktop?.top}${counterItemBorderRadiusUnits?.Desktop} ${counterItemBorderRadiusDesktop?.right}${counterItemBorderRadiusUnits?.Desktop} ${counterItemBorderRadiusDesktop?.bottom}${counterItemBorderRadiusUnits?.Desktop} ${counterItemBorderRadiusDesktop?.left}${counterItemBorderRadiusUnits?.Desktop}`;
    const counterItemTabletBorderRadius = `${counterItemBorderRadiusTablet?.top}${counterItemBorderRadiusUnits?.Tablet} ${counterItemBorderRadiusTablet?.right}${counterItemBorderRadiusUnits?.Tablet} ${counterItemBorderRadiusTablet?.bottom}${counterItemBorderRadiusUnits?.Tablet} ${counterItemBorderRadiusTablet?.left}${counterItemBorderRadiusUnits?.Tablet}`;
    const counterItemMobileBorderRadius = `${counterItemBorderRadiusMobile?.top}${counterItemBorderRadiusUnits?.Mobile} ${counterItemBorderRadiusMobile?.right}${counterItemBorderRadiusUnits?.Mobile} ${counterItemBorderRadiusMobile?.bottom}${counterItemBorderRadiusUnits?.Mobile} ${counterItemBorderRadiusMobile?.left}${counterItemBorderRadiusUnits?.Mobile}`;

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

    const counterItemDesktopPadding = `${counterItemPaddingDesktop?.top}${counterItemPaddingUnits?.Desktop} ${counterItemPaddingDesktop?.right}${counterItemPaddingUnits?.Desktop} ${counterItemPaddingDesktop?.bottom}${counterItemPaddingUnits?.Desktop} ${counterItemPaddingDesktop?.left}${counterItemPaddingUnits?.Desktop}`;
    const counterItemTabletPadding = `${counterItemPaddingTablet?.top}${counterItemPaddingUnits?.Tablet} ${counterItemPaddingTablet?.right}${counterItemPaddingUnits?.Tablet} ${counterItemPaddingTablet?.bottom}${counterItemPaddingUnits?.Tablet} ${counterItemPaddingTablet?.left}${counterItemPaddingUnits?.Tablet}`;
    const counterItemMobilePadding = `${counterItemPaddingMobile?.top}${counterItemPaddingUnits?.Mobile} ${counterItemPaddingMobile?.right}${counterItemPaddingUnits?.Mobile} ${counterItemPaddingMobile?.bottom}${counterItemPaddingUnits?.Mobile} ${counterItemPaddingMobile?.left}${counterItemPaddingUnits?.Mobile}`;

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

    const counterItemDesktopMargin = `${counterItemMarginDesktop?.top}${counterItemMarginUnits?.Desktop} ${counterItemMarginDesktop?.right}${counterItemMarginUnits?.Desktop} ${counterItemMarginDesktop?.bottom}${counterItemMarginUnits?.Desktop} ${counterItemMarginDesktop?.left}${counterItemMarginUnits?.Desktop}`;
    const counterItemTabletMargin = `${counterItemMarginTablet?.top}${counterItemMarginUnits?.Tablet} ${counterItemMarginTablet?.right}${counterItemMarginUnits?.Tablet} ${counterItemMarginTablet?.bottom}${counterItemMarginUnits?.Tablet} ${counterItemMarginTablet?.left}${counterItemMarginUnits?.Tablet}`;
    const counterItemMobileMargin = `${counterItemMarginMobile?.top}${counterItemMarginUnits?.Mobile} ${counterItemMarginMobile?.right}${counterItemMarginUnits?.Mobile} ${counterItemMarginMobile?.bottom}${counterItemMarginUnits?.Mobile} ${counterItemMarginMobile?.left}${counterItemMarginUnits?.Mobile}`;

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

    const counterIconDesktopMargin = `${counterIconMarginDesktop?.top}${counterIconMarginUnits?.Desktop} ${counterIconMarginDesktop?.right}${counterIconMarginUnits?.Desktop} ${counterIconMarginDesktop?.bottom}${counterIconMarginUnits?.Desktop} ${counterIconMarginDesktop?.left}${counterIconMarginUnits?.Desktop}`;
    const counterIconTabletMargin = `${counterIconMarginTablet?.top}${counterIconMarginUnits?.Tablet} ${counterIconMarginTablet?.right}${counterIconMarginUnits?.Tablet} ${counterIconMarginTablet?.bottom}${counterIconMarginUnits?.Tablet} ${counterIconMarginTablet?.left}${counterIconMarginUnits?.Tablet}`;
    const counterIconMobileMargin = `${counterIconMarginMobile?.top}${counterIconMarginUnits?.Mobile} ${counterIconMarginMobile?.right}${counterIconMarginUnits?.Mobile} ${counterIconMarginMobile?.bottom}${counterIconMarginUnits?.Mobile} ${counterIconMarginMobile?.left}${counterIconMarginUnits?.Mobile}`;

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

    const counterNumberDesktopMargin = `${counterNumberMarginDesktop?.top}${counterNumberMarginUnits?.Desktop} ${counterNumberMarginDesktop?.right}${counterNumberMarginUnits?.Desktop} ${counterNumberMarginDesktop?.bottom}${counterNumberMarginUnits?.Desktop} ${counterNumberMarginDesktop?.left}${counterNumberMarginUnits?.Desktop}`;
    const counterNumberTabletMargin = `${counterNumberMarginTablet?.top}${counterNumberMarginUnits?.Tablet} ${counterNumberMarginTablet?.right}${counterNumberMarginUnits?.Tablet} ${counterNumberMarginTablet?.bottom}${counterNumberMarginUnits?.Tablet} ${counterNumberMarginTablet?.left}${counterNumberMarginUnits?.Tablet}`;
    const counterNumberMobileMargin = `${counterNumberMarginMobile?.top}${counterNumberMarginUnits?.Mobile} ${counterNumberMarginMobile?.right}${counterNumberMarginUnits?.Mobile} ${counterNumberMarginMobile?.bottom}${counterNumberMarginUnits?.Mobile} ${counterNumberMarginMobile?.left}${counterNumberMarginUnits?.Mobile}`;

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

    const counterNumberTitleDesktopMargin = `${counterNumberTitleMarginDesktop?.top}${counterNumberTitleMarginUnits?.Desktop} ${counterNumberTitleMarginDesktop?.right}${counterNumberTitleMarginUnits?.Desktop} ${counterNumberTitleMarginDesktop?.bottom}${counterNumberTitleMarginUnits?.Desktop} ${counterNumberTitleMarginDesktop?.left}${counterNumberTitleMarginUnits?.Desktop}`;
    const counterNumberTitleTabletMargin = `${counterNumberTitleMarginTablet?.top}${counterNumberTitleMarginUnits?.Tablet} ${counterNumberTitleMarginTablet?.right}${counterNumberTitleMarginUnits?.Tablet} ${counterNumberTitleMarginTablet?.bottom}${counterNumberTitleMarginUnits?.Tablet} ${counterNumberTitleMarginTablet?.left}${counterNumberTitleMarginUnits?.Tablet}`;
    const counterNumberTitleMobileMargin = `${counterNumberTitleMarginMobile?.top}${counterNumberTitleMarginUnits?.Mobile} ${counterNumberTitleMarginMobile?.right}${counterNumberTitleMarginUnits?.Mobile} ${counterNumberTitleMarginMobile?.bottom}${counterNumberTitleMarginUnits?.Mobile} ${counterNumberTitleMarginMobile?.left}${counterNumberTitleMarginUnits?.Mobile}`;

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

    const globalDesktopPadding = `${counterGlobalPaddingDesktop?.top}${counterGlobalPaddingUnits?.Desktop} ${counterGlobalPaddingDesktop?.right}${counterGlobalPaddingUnits?.Desktop} ${counterGlobalPaddingDesktop?.bottom}${counterGlobalPaddingUnits?.Desktop} ${counterGlobalPaddingDesktop?.left}${counterGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${counterGlobalPaddingTablet?.top}${counterGlobalPaddingUnits?.Tablet} ${counterGlobalPaddingTablet?.right}${counterGlobalPaddingUnits?.Tablet} ${counterGlobalPaddingTablet?.bottom}${counterGlobalPaddingUnits?.Tablet} ${counterGlobalPaddingTablet?.left}${counterGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${counterGlobalPaddingMobile?.top}${counterGlobalPaddingUnits?.Mobile} ${counterGlobalPaddingMobile?.right}${counterGlobalPaddingUnits?.Mobile} ${counterGlobalPaddingMobile?.bottom}${counterGlobalPaddingUnits?.Mobile} ${counterGlobalPaddingMobile?.left}${counterGlobalPaddingUnits?.Mobile}`;
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

    const globalDesktopMargin = `${counterGlobalMarginDesktop?.top}${counterGlobalMarginUnits?.Desktop} ${counterGlobalMarginDesktop?.right}${counterGlobalMarginUnits?.Desktop} ${counterGlobalMarginDesktop?.bottom}${counterGlobalMarginUnits?.Desktop} ${counterGlobalMarginDesktop?.left}${counterGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${counterGlobalMarginTablet?.top}${counterGlobalMarginUnits?.Tablet} ${counterGlobalMarginTablet?.right}${counterGlobalMarginUnits?.Tablet} ${counterGlobalMarginTablet?.bottom}${counterGlobalMarginUnits?.Tablet} ${counterGlobalMarginTablet?.left}${counterGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${counterGlobalMarginMobile?.top}${counterGlobalMarginUnits?.Mobile} ${counterGlobalMarginMobile?.right}${counterGlobalMarginUnits?.Mobile} ${counterGlobalMarginMobile?.bottom}${counterGlobalMarginUnits?.Mobile} ${counterGlobalMarginMobile?.left}${counterGlobalMarginUnits?.Mobile}`;
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

    const globalDesktopBorderWidth = `${counterGlobalBorderDesktop?.top}${counterGlobalBorderUnits?.Desktop} ${counterGlobalBorderDesktop?.right}${counterGlobalBorderUnits?.Desktop} ${counterGlobalBorderDesktop?.bottom}${counterGlobalBorderUnits?.Desktop} ${counterGlobalBorderDesktop?.left}${counterGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${counterGlobalBorderTablet?.top}${counterGlobalBorderUnits?.Tablet} ${counterGlobalBorderTablet?.right}${counterGlobalBorderUnits?.Tablet} ${counterGlobalBorderTablet?.bottom}${counterGlobalBorderUnits?.Tablet} ${counterGlobalBorderTablet?.left}${counterGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${counterGlobalBorderMobile?.top}${counterGlobalBorderUnits?.Mobile} ${counterGlobalBorderMobile?.right}${counterGlobalBorderUnits?.Mobile} ${counterGlobalBorderMobile?.bottom}${counterGlobalBorderUnits?.Mobile} ${counterGlobalBorderMobile?.left}${counterGlobalBorderUnits?.Mobile}`;
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

    const globalDesktopBorderRadiusWidth = `${counterGlobalBorderRadiusDesktop?.top}${counterGlobalBorderRadiusUnits?.Desktop} ${counterGlobalBorderRadiusDesktop?.right}${counterGlobalBorderRadiusUnits?.Desktop} ${counterGlobalBorderRadiusDesktop?.bottom}${counterGlobalBorderRadiusUnits?.Desktop} ${counterGlobalBorderRadiusDesktop?.left}${counterGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${counterGlobalBorderRadiusTablet?.top}${counterGlobalBorderRadiusUnits?.Tablet} ${counterGlobalBorderRadiusTablet?.right}${counterGlobalBorderRadiusUnits?.Tablet} ${counterGlobalBorderRadiusTablet?.bottom}${counterGlobalBorderRadiusUnits?.Tablet} ${counterGlobalBorderRadiusTablet?.left}${counterGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${counterGlobalBorderRadiusMobile?.top}${counterGlobalBorderRadiusUnits?.Mobile} ${counterGlobalBorderRadiusMobile?.right}${counterGlobalBorderRadiusUnits?.Mobile} ${counterGlobalBorderRadiusMobile?.bottom}${counterGlobalBorderRadiusUnits?.Mobile} ${counterGlobalBorderRadiusMobile?.left}${counterGlobalBorderRadiusUnits?.Mobile}`;
    /** End Border Radius */

    const counterBlockStyle = useMemo(() => `
    .fb-counter-main-wrapper.${blockID}{
        ${counterPositionType === 'default' ? `position: relative;` : ''}
        ${counterPositionType !== 'default' && counterPositionType !== 'relative' ? `width: 100%;` : ''}
        ${counterPositionType !== 'default' ? `position: ${counterPositionType};` : ''}
        ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'left' && counterHZLeftOffset?.Desktop ? `left: ${counterHZLeftOffset?.Desktop}${counterHZLeftOffsetUnits?.Desktop};` : ''}
        ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'right' && counterHZRightOffset?.Desktop ? `right: ${counterHZRightOffset?.Desktop}${counterHZRightOffsetUnits?.Desktop};` : ''}
        ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'top' && counterVRTopOffset?.Desktop ? `top: ${counterVRTopOffset?.Desktop}${counterVRTopOffsetUnits?.Desktop};` : ''}
        ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'bottom' && counterVRBottomOffset?.Desktop ? `bottom: ${counterVRBottomOffset?.Desktop}${counterVRBottomOffsetUnits?.Desktop};` : ''}
        ${counterGlobalZIndex?.Desktop ? `z-index: ${counterGlobalZIndex?.Desktop};` : ''}
        ${counterOverflow !== 'default' ? `overflow: ${counterOverflow};` : ''}
    }
    .fb-counter-wrapper.${blockID}{
        ${counterGlobalBgColor ? `background: ${counterGlobalBgColor};` : ''}
        ${globalDesktopPadding && counterGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ""}
        ${globalDesktopMargin && counterGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ""}
        ${counterGlobalBorder ? `border-style: ${counterGlobalBorder};` : ""}
        ${counterGlobalBorderColor ? `border-color: ${counterGlobalBorderColor};` : ""} 
        ${globalDesktopBorderWidth && counterGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ""}
        ${globalDesktopBorderRadiusWidth && counterGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ""}
        ${counterGlobalBoxShadowCssValue ? `box-shadow: ${counterGlobalBoxShadowCssValue};` : ""}

        ${counterAlignment?.Desktop === 'left' ? `justify-content: flex-start;` : ''}
        ${counterAlignment?.Desktop === 'center' ? `justify-content: center;` : ''}
        ${counterAlignment?.Desktop === 'right' ? `justify-content: flex-end;` : ''}
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

        ${iconPosition !== 'top' && iconPosition !== 'bottom' && counterAlignment?.Desktop ? `justify-content: ${counterAlignment?.Desktop};` : ''}
        ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Desktop === 'left' ? `align-items: flex-start;` : ''}
        ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Desktop === 'center' ? `align-items: center;` : ''}
        ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Desktop === 'right' ? `align-items: flex-end;` : ''}

        ${counterItemBgColor ? `background: ${counterItemBgColor};` : ''}
        ${counterItemSize?.Desktop ? `width: ${counterItemSize?.Desktop}${counterItemSizeUnits?.Desktop};` : ''}
        ${counterItemHeight && counterItemHeight?.Desktop ? `height: ${counterItemHeight?.Desktop}${counterItemHeightUnits?.Desktop};` : ''}
        ${counterItemRatio ? `aspect-ratio: 1 / 1;` : ''}
        ${counterItemBorder ? `border: ${counterItemBorder};` : ''}
        ${counterItemDesktopBorder && counterItemBorderTypeDesktop?.top ? `border-width: ${counterItemDesktopBorder};` : ''}
        ${counterItemBorderColor ? `border-color: ${counterItemBorderColor};` : ''}
        ${counterItemDesktopBorderRadius && counterItemBorderRadiusDesktop?.top ? `border-radius: ${counterItemDesktopBorderRadius};` : ''}
        ${counterItemDesktopPadding && counterItemPaddingDesktop?.top ? `padding: ${counterItemDesktopPadding};` : ''}
        ${counterItemDesktopMargin && counterItemMarginDesktop?.top ? `margin: ${counterItemDesktopMargin};` : ''}
        ${counterItemGap?.Desktop ? `gap: ${counterItemGap?.Desktop}${counterItemGapUnits?.Desktop};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item:hover{
        ${counterItemBgHoverColor ? `background: ${counterItemBgHoverColor};` : ''}
        ${counterItemBorderHoverColor ? `border-color: ${counterItemBorderHoverColor};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper {
        display: flex;
        ${counterIconDesktopMargin && counterIconMarginDesktop?.top ? `margin: ${counterIconDesktopMargin};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper img {
        ${counterIconSize?.Desktop ? `width: ${counterIconSize?.Desktop}${counterIconSizeUnits?.Desktop};` : ''}
        ${counterIconSizeRatio ? `aspect-ratio: 1 / 1;` : ''}
        ${counterMediaImagedisplay && counterMediaImagedisplay !== 'none' ? `object-fit: ${counterMediaImagedisplay};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper .fb-counter-icon {
        display: flex;
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper .fb-counter-icon svg {
        ${counterIconSize?.Desktop ? `width: ${counterIconSize?.Desktop}${counterIconSizeUnits?.Desktop};` : ''}
        ${counterIconSizeRatio ? `aspect-ratio: 1 / 1;` : ''}
        ${counterIconColor ? `fill: ${counterIconColor};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item:hover .fb-counter-icon-wrapper .fb-counter-icon svg {
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
        ${counterNumberDesktopMargin && counterNumberMarginDesktop?.top ? `margin: ${counterNumberDesktopMargin};` : ''}
        ${counterCardAlignment?.Desktop === 'left' ? `justify-content: flex-start;` : ''}
        ${counterCardAlignment?.Desktop === 'center' ? `justify-content: center;` : ''}
        ${counterCardAlignment?.Desktop === 'right' ? `justify-content: flex-end;` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number,
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-prefix,
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-suffix {
        ${counterNumberFontColor ? `color: ${counterNumberFontColor};` : ''}

        ${counterNumberGlobalTypoSwitcher?.fontFamily === true && counterNumberGlobalTypographyData?.fontFamily ? `font-family: ${counterNumberGlobalTypographyData?.fontFamily};` : ''}
        ${counterNumberGlobalTypoSwitcher?.fontSize === true && counterNumberGlobalTypographyData?.fontSize ? `font-size: ${counterNumberGlobalTypographyData?.fontSize};` : ''}
        ${counterNumberGlobalTypoSwitcher?.fontWeight === true && counterNumberGlobalTypographyData?.fontWeight ? `font-weight: ${counterNumberGlobalTypographyData?.fontWeight};` : ''}
        ${counterNumberGlobalTypoSwitcher?.fontStyle === true && counterNumberGlobalTypographyData?.fontStyle ? `font-style: ${counterNumberGlobalTypographyData?.fontStyle};` : ''}
        ${counterNumberGlobalTypoSwitcher?.textTransform === true && counterNumberGlobalTypographyData?.textTransform ? `text-transform: ${counterNumberGlobalTypographyData?.textTransform};` : ''}
        ${counterNumberGlobalTypoSwitcher?.textDecoration === true && counterNumberGlobalTypographyData?.textDecoration ? `text-decoration: ${counterNumberGlobalTypographyData?.textDecoration};` : ''}
        ${counterNumberGlobalTypoSwitcher?.letterSpacing === true && counterNumberGlobalTypographyData?.letterSpacing ? `letter-spacing: ${counterNumberGlobalTypographyData?.letterSpacing};` : ''}
        ${counterNumberGlobalTypoSwitcher?.lineHeight === true && counterNumberGlobalTypographyData?.lineHeight ? `line-height: ${counterNumberGlobalTypographyData?.lineHeight};` : ''}

        ${counterNumberGlobalTypoSwitcher?.fontFamily === false && counterNumberFontFamily && counterNumberFontFamily !== 'Default' ? `font-family: ${counterNumberFontFamily};` : ''}
        ${counterNumberGlobalTypoSwitcher?.fontSize === false && counterNumberFontSize?.Desktop ? `font-size: ${counterNumberFontSize?.Desktop}${counterNumberFontSizeUnits?.Desktop};` : ''}
        ${counterNumberGlobalTypoSwitcher?.fontWeight === false && counterNumberFontWeight ? `font-weight: ${counterNumberFontWeight};` : ''}
        ${counterNumberGlobalTypoSwitcher?.fontStyle === false && counterNumberFontStyle ? `font-style: ${counterNumberFontStyle};` : ''}
        ${counterNumberGlobalTypoSwitcher?.textTransform === false && counterNumberTextTransform ? `text-transform: ${counterNumberTextTransform};` : ''}
        ${counterNumberGlobalTypoSwitcher?.textDecoration === false && counterNumberTextDecoration ? `text-decoration: ${counterNumberTextDecoration};` : ''}
        ${counterNumberGlobalTypoSwitcher?.letterSpacing === false && counterNumberLetterSpacing?.Desktop ? `letter-spacing: ${counterNumberLetterSpacing?.Desktop}${counterNumberLetterSpacingUnits?.Desktop};` : ''}
        ${counterNumberGlobalTypoSwitcher?.lineHeight === false && counterNumberLineHeight?.Desktop ? `line-height: ${counterNumberLineHeight?.Desktop}${counterNumberLineHeightUnits?.Desktop};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item:hover .fb-counter-number,
    .fb-counter-wrapper.${blockID} .fb-counter-item:hover .fb-counter-number-prefix,
    .fb-counter-wrapper.${blockID} .fb-counter-item:hover .fb-counter-number-suffix{
        ${counterNumberFontHoverColor ? `color: ${counterNumberFontHoverColor};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-title {
        ${counterNumberTitleFontColor ? `color: ${counterNumberTitleFontColor};` : ''}

        ${counterNumberTitleGlobalTypoSwitcher?.fontFamily === true && counterNumberTitleGlobalTypographyData?.fontFamily ? `font-family: ${counterNumberTitleGlobalTypographyData?.fontFamily};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher?.fontSize === true && counterNumberTitleGlobalTypographyData?.fontSize ? `font-size: ${counterNumberTitleGlobalTypographyData?.fontSize};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher?.fontWeight === true && counterNumberTitleGlobalTypographyData?.fontWeight ? `font-weight: ${counterNumberTitleGlobalTypographyData?.fontWeight};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher?.fontStyle === true && counterNumberTitleGlobalTypographyData?.fontStyle ? `font-style: ${counterNumberTitleGlobalTypographyData?.fontStyle};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher?.textTransform === true && counterNumberTitleGlobalTypographyData?.textTransform ? `text-transform: ${counterNumberTitleGlobalTypographyData?.textTransform};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher?.textDecoration === true && counterNumberTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${counterNumberTitleGlobalTypographyData?.textDecoration};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher?.letterSpacing === true && counterNumberTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${counterNumberTitleGlobalTypographyData?.letterSpacing};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher?.lineHeight === true && counterNumberTitleGlobalTypographyData?.lineHeight ? `line-height: ${counterNumberTitleGlobalTypographyData?.lineHeight};` : ''}

        ${counterNumberTitleGlobalTypoSwitcher?.fontFamily === false && counterNumberTitleFontFamily && counterNumberTitleFontFamily !== 'Default' ? `font-family: ${counterNumberTitleFontFamily};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher?.fontSize === false && counterNumberTitleFontSize?.Desktop ? `font-size: ${counterNumberTitleFontSize?.Desktop}${counterNumberTitleFontSizeUnits?.Desktop};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher?.fontWeight === false && counterNumberTitleFontWeight ? `font-weight: ${counterNumberTitleFontWeight};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher?.fontStyle === false && counterNumberTitleFontStyle ? `font-style: ${counterNumberTitleFontStyle};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher?.textTransform === false && counterNumberTitleTextTransform ? `text-transform: ${counterNumberTitleTextTransform};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher?.textDecoration === false && counterNumberTitleTextDecoration ? `text-decoration: ${counterNumberTitleTextDecoration};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher?.letterSpacing === false && counterNumberTitleLetterSpacing?.Desktop ? `letter-spacing: ${counterNumberTitleLetterSpacing?.Desktop}${counterNumberTitleLetterSpacingUnits?.Desktop};` : ''}
        ${counterNumberTitleGlobalTypoSwitcher?.lineHeight === false && counterNumberTitleLineHeight?.Desktop ? `line-height: ${counterNumberTitleLineHeight?.Desktop}${counterNumberTitleLineHeightUnits?.Desktop};` : ''}
        ${counterNumberTitleDesktopMargin && counterNumberTitleMarginDesktop?.top ? `margin: ${counterNumberTitleDesktopMargin};` : ''}
        
        ${counterCardAlignment?.Desktop ? `text-align: ${counterCardAlignment?.Desktop};` : ''}
    }
    .fb-counter-wrapper.${blockID} .fb-counter-item:hover .fb-counter-title{
        ${counterNumberTitleFontHoverColor ? `color: ${counterNumberTitleFontHoverColor};` : ''}
    }
    @media only screen and (max-width: 1024px) {
        .fb-counter-main-wrapper.${blockID}{
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'left' && counterHZLeftOffset?.Tablet ? `left: ${counterHZLeftOffset?.Tablet}${counterHZLeftOffsetUnits?.Tablet};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'right' && counterHZRightOffset?.Tablet ? `right: ${counterHZRightOffset?.Tablet}${counterHZRightOffsetUnits?.Tablet};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'top' && counterVRTopOffset?.Tablet ? `top: ${counterVRTopOffset?.Tablet}${counterVRTopOffsetUnits?.Tablet};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'bottom' && counterVRBottomOffset?.Tablet ? `bottom: ${counterVRBottomOffset?.Tablet}${counterVRBottomOffsetUnits?.Tablet};` : ''}
            ${counterGlobalZIndex?.Tablet ? `z-index: ${counterGlobalZIndex?.Tablet};` : ''}        
        }
        .fb-counter-wrapper.${blockID}{
            ${globalTabletPadding && counterGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ""}
            ${globalTabletMargin && counterGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ""}
            ${globalTabletBorderWidth && counterGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ""}
            ${globalTabletBorderRadiusWidth && counterGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ""}
            ${counterAlignment?.Tablet === 'left' ? `justify-content: flex-start;` : ''}
            ${counterAlignment?.Tablet === 'center' ? `justify-content: center;` : ''}
            ${counterAlignment?.Tablet === 'right' ? `justify-content: flex-end;` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item {
            ${counterItemTabletBorder && counterItemBorderTypeTablet?.top ? `border-width: ${counterItemTabletBorder};` : ''}
            ${counterItemTabletBorderRadius && counterItemBorderRadiusTablet?.top ? `border-radius: ${counterItemTabletBorderRadius};` : ''}
            ${counterItemTabletPadding && counterItemPaddingTablet?.top ? `padding: ${counterItemTabletPadding};` : ''}
            ${counterItemTabletMargin && counterItemMarginTablet?.top ? `margin: ${counterItemTabletMargin};` : ''}
            ${counterItemHeight && counterItemHeight?.Tablet ? `height: ${counterItemHeight?.Tablet}${counterItemHeightUnits?.Tablet};` : ''}
            ${iconPosition !== 'top' && iconPosition !== 'bottom' && counterAlignment?.Tablet ? `justify-content: ${counterAlignment?.Tablet};` : ''}
            ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Tablet === 'left' ? `align-items: flex-start;` : ''}
            ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Tablet === 'center' ? `align-items: center;` : ''}
            ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Tablet === 'right' ? `align-items: flex-end;` : ''}
            ${counterItemGap?.Tablet ? `gap: ${counterItemGap?.Tablet}${counterItemGapUnits?.Tablet};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper {
            ${counterIconTabletMargin && counterIconMarginTablet?.top ? `margin: ${counterIconTabletMargin};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper img {
            ${counterIconSize?.Tablet ? `width: ${counterIconSize?.Tablet}${counterIconSizeUnits?.Tablet};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper .fb-counter-icon svg {
            ${counterIconSize?.Tablet ? `width: ${counterIconSize?.Tablet}${counterIconSizeUnits?.Tablet};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-wrapper {
            ${counterNumberTabletMargin && counterNumberMarginTablet?.top ? `margin: ${counterNumberTabletMargin};` : ''}
            ${counterCardAlignment?.Tablet === 'left' ? `justify-content: flex-start;` : ''}
            ${counterCardAlignment?.Tablet === 'center' ? `justify-content: center;` : ''}
            ${counterCardAlignment?.Tablet === 'right' ? `justify-content: flex-end;` : ''}
        }

        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number,
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-prefix,
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-suffix {
            ${counterNumberGlobalTypoSwitcher?.fontSize === false && counterNumberFontSize?.Tablet ? `font-size: ${counterNumberFontSize?.Tablet}${counterNumberFontSizeUnits?.Tablet};` : ''}
            ${counterNumberGlobalTypoSwitcher?.letterSpacing === false && counterNumberLetterSpacing?.Tablet ? `letter-spacing: ${counterNumberLetterSpacing?.Tablet}${counterNumberLetterSpacingUnits?.Tablet};` : ''}
            ${counterNumberGlobalTypoSwitcher?.lineHeight === false && counterNumberLineHeight?.Tablet ? `line-height: ${counterNumberLineHeight?.Tablet}${counterNumberLineHeightUnits?.Tablet};` : ''}
        }

        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-title {
            ${counterNumberTitleGlobalTypoSwitcher?.fontSize === false && counterNumberTitleFontSize?.Tablet ? `font-size: ${counterNumberTitleFontSize?.Tablet}${counterNumberTitleFontSizeUnits?.Tablet};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.letterSpacing === false && counterNumberTitleLetterSpacing?.Tablet ? `letter-spacing: ${counterNumberTitleLetterSpacing?.Tablet}${counterNumberTitleLetterSpacingUnits?.Tablet};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.lineHeight === false && counterNumberTitleLineHeight?.Tablet ? `line-height: ${counterNumberTitleLineHeight?.Tablet}${counterNumberTitleLineHeightUnits?.Tablet};` : ''}
            ${counterNumberTitleTabletMargin && counterNumberTitleMarginTablet?.top ? `margin: ${counterNumberTitleTabletMargin};` : ''}
            ${counterCardAlignment?.Tablet ? `text-align: ${counterCardAlignment?.Tablet};` : ''}
        }
    }
    @media only screen and (max-width: 767px) {
        .fb-counter-main-wrapper.${blockID}{
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'left' && counterHZLeftOffset?.Mobile ? `left: ${counterHZLeftOffset?.Mobile}${counterHZLeftOffsetUnits?.Mobile};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterHZOrientationType === 'right' && counterHZRightOffset?.Mobile ? `right: ${counterHZRightOffset?.Mobile}${counterHZRightOffsetUnits?.Mobile};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'top' && counterVRTopOffset?.Mobile ? `top: ${counterVRTopOffset?.Mobile}${counterVRTopOffsetUnits?.Mobile};` : ''}
            ${counterPositionType !== 'default' && counterPositionType !== 'relative' && counterVROrientationType === 'bottom' && counterVRBottomOffset?.Mobile ? `bottom: ${counterVRBottomOffset?.Mobile}${counterVRBottomOffsetUnits?.Mobile};` : ''} 
            ${counterGlobalZIndex?.Mobile ? `z-index: ${counterGlobalZIndex?.Mobile};` : ''}
        }
        .fb-counter-wrapper.${blockID}{
            ${globalMobilePadding && counterGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ""}
            ${globalMobileMargin && counterGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ""}
            ${globalMobileBorderWidth && counterGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ""}
            ${globalMobileBorderRadiusWidth && counterGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ""}
            ${counterAlignment?.Mobile === 'left' ? `justify-content: flex-start;` : ''}
            ${counterAlignment?.Mobile === 'center' ? `justify-content: center;` : ''}
            ${counterAlignment?.Mobile === 'right' ? `justify-content: flex-end;` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item {
            ${counterItemMobileBorder && counterItemBorderTypeMobile?.top ? `border-width: ${counterItemMobileBorder};` : ''}
            ${counterItemMobileBorderRadius && counterItemBorderRadiusMobile?.top ? `border-radius: ${counterItemMobileBorderRadius};` : ''}
            ${counterItemMobilePadding && counterItemPaddingMobile?.top ? `padding: ${counterItemMobilePadding};` : ''}
            ${counterItemMobileMargin && counterItemMarginMobile?.top ? `margin: ${counterItemMobileMargin};` : ''}
            ${counterItemHeight && counterItemHeight?.Mobile ? `height: ${counterItemHeight?.Mobile}${counterItemHeightUnits?.Mobile};` : ''}
            ${iconPosition !== 'top' && iconPosition !== 'bottom' && counterAlignment?.Mobile ? `justify-content: ${counterAlignment?.Mobile};` : ''}
            ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Mobile === 'left' ? `align-items: flex-start;` : ''}
            ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Mobile === 'center' ? `align-items: center;` : ''}
            ${iconPosition !== 'left' && iconPosition !== 'right' && counterCardAlignment?.Mobile === 'right' ? `align-items: flex-end;` : ''}
            ${counterItemGap?.Mobile ? `gap: ${counterItemGap?.Mobile}${counterItemGapUnits?.Mobile};` : ''}
        }

        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper {
            ${counterIconMobileMargin && counterIconMarginMobile?.top ? `margin: ${counterIconMobileMargin};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper img {
            ${counterIconSize?.Mobile ? `width: ${counterIconSize?.Mobile}${counterIconSizeUnits?.Mobile};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-icon-wrapper .fb-counter-icon svg {
            ${counterIconSize?.Mobile ? `width: ${counterIconSize?.Mobile}${counterIconSizeUnits?.Mobile};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-wrapper {
            ${counterNumberMobileMargin && counterNumberMarginMobile?.top ? `margin: ${counterNumberMobileMargin};` : ''}
            ${counterCardAlignment?.Mobile === 'left' ? `justify-content: flex-start;` : ''}
            ${counterCardAlignment?.Mobile === 'center' ? `justify-content: center;` : ''}
            ${counterCardAlignment?.Mobile === 'right' ? `justify-content: flex-end;` : ''}
        }

        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number,
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-prefix,
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-number-suffix {
            ${counterNumberGlobalTypoSwitcher?.fontSize === false && counterNumberFontSize?.Mobile ? `font-size: ${counterNumberFontSize?.Mobile}${counterNumberFontSizeUnits?.Mobile};` : ''}
            ${counterNumberGlobalTypoSwitcher?.letterSpacing === false && counterNumberLetterSpacing?.Mobile ? `letter-spacing: ${counterNumberLetterSpacing?.Mobile}${counterNumberLetterSpacingUnits?.Mobile};` : ''}
            ${counterNumberGlobalTypoSwitcher?.lineHeight === false && counterNumberLineHeight?.Mobile ? `line-height: ${counterNumberLineHeight?.Mobile}${counterNumberLineHeightUnits?.Mobile};` : ''}
        }
        .fb-counter-wrapper.${blockID} .fb-counter-item .fb-counter-title {
            ${counterNumberTitleGlobalTypoSwitcher?.fontSize === false && counterNumberTitleFontSize?.Mobile ? `font-size: ${counterNumberTitleFontSize?.Mobile}${counterNumberTitleFontSizeUnits?.Mobile};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.letterSpacing === false && counterNumberTitleLetterSpacing?.Mobile ? `letter-spacing: ${counterNumberTitleLetterSpacing?.Mobile}${counterNumberTitleLetterSpacingUnits?.Mobile};` : ''}
            ${counterNumberTitleGlobalTypoSwitcher?.lineHeight === false && counterNumberTitleLineHeight?.Mobile ? `line-height: ${counterNumberTitleLineHeight?.Mobile}${counterNumberTitleLineHeightUnits?.Mobile};` : ''}
            ${counterNumberTitleMobileMargin && counterNumberTitleMarginMobile?.top ? `margin: ${counterNumberTitleMobileMargin};` : ''}
            ${counterCardAlignment?.Mobile ? `text-align: ${counterCardAlignment?.Mobile};` : ''}
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
                {/* <SelectControl
                    label={__("Preset Style", "frontis-blocks")}
                    value={counterPresetStyle}
                    options={PRESETS}
                    onChange={(selected) => changeCounterPreset(selected)}
                /> */}
                <FB_Presets
                    className="fb-counter-number-presets"
                    label={__('Select Preset', 'frontis-blocks')}
                    presets={counterNumberPresets}
                    value = {counterPresetStyle}
                    onChangeValue = 'counterPresetStyle'
                    defaultPresetValue="preset-1"
                    setAttributes={setAttributes}
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