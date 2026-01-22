import { __ } from '@wordpress/i18n';
import { useState, useEffect, useMemo, memo } from '@wordpress/element';

import {
    SelectControl,
    PanelBody,
    TabPanel,
    BaseControl,
    Button,
    ButtonGroup,
    ToggleControl,
    TextControl,
    TextareaControl,
    Dropdown,
    Dashicon,
    RangeControl,
    ColorPicker,
    ColorPalette,
} from '@wordpress/components';

import {
    NORMAL_HOVER,
    UNIT_TYPES,
    TEXT_ALIGN,
    ICON_ALIGN,
    FLEX_ALIGN,
    Testimonial,
    BORDER_STYLES,
    HEADING,
    PRESETS,
    OVERFLOW_OP,
    IMAGE_OBJECT_FIT,
} from "./constants/constants";

import FBIconPicker from "../../components/icon-picker";
import FB_TypographyControl from '@Components/typography-control';
import FB_Range from '@Components/range';
import FB_Spacing from '@Components/spacing';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_HtmlTagControl from '@Components/html-tag-control';

import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_ImageControl from '@Components/image-control';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import getProActive from '@Utils/getProActive';
import FB_Presets from '@Components/presets';

import './editor.scss';


const Inspector = ({ attributes, setAttributes }) => {
    const {
        blockID,
        TestimonialPresetStyle,
        TestimonialAlignment,

        TestimonialImageSwitcher,
        TestimonialImageUrl,
        TestimonialImageAlt,
        TestimonialImageID,

        TitleSwitcher,
        TestimonialTitle,
        DescSwitcher,
        TestimonialDesc,
        AuthorSwitcher,
        TestimonialAuthor,
        DesignationSwitcher,
        TestimonialDesignation,
        RatingSwitcher,
        TestimonialRatingNumber,
        TestimonialRatingicon,
        FrontendTestimonialRatingicon,
        TestimonialRatingImageUrl,
        TestimonialRatingImageAlt,
        TestimonialRatingImageID,
        TestimonialRatinIconAlign,
        QuoteIconSwitcher,
        TestimonialQuoteIcon,
        TestimonialQuoteImageUrl,
        TestimonialQuoteImageAlt,
        TestimonialQuoteImageID,
        TestimonialQuoteIconAlign,

        TestimonialImageWidth,
        TestimonialImageWidthUnits,
        TestimonialImageObjectFit,

        TestimonialImageRadiusUnits,
        TestimonialImageDesktopRadiusWidth,
        TestimonialImageTabRadiusWidth,
        TestimonialImageMobileRadiusWidth,
        TestimonialImageRadiusLink,

        TestimonialImageMarginUnits,
        TestimonialImageMarginDesktop,
        TestimonialImageMarginTablet,
        TestimonialImageMarginMobile,
        TestimonialImageMarginLink,

        TestimonialImagePositionSwitcher,
        TestimonialImageTopPosition,
        TestimonialImageTopPositionUnits,
        TestimonialImageLeftPosition,
        TestimonialImageLeftPositionUnits,

        TestimonialQuoteIconSize,
        TestimonialQuoteIconSizeUnits,
        TestimonialQuoteIconColorSwitcher,
        TestimonialQuoteIconColor,
        TestimonialQuoteIconHoverColor,
        TestimonialQuoteIconPositionSwitcher,
        TestimonialQuoteIconTopPosition,
        TestimonialQuoteIconTopPositionUnits,
        TestimonialQuoteIconLeftPosition,
        TestimonialQuoteIconLeftPositionUnits,
        TestimonialQuoteIconMarginUnits,
        TestimonialQuoteIconMarginDesktop,
        TestimonialQuoteIconMarginTablet,
        TestimonialQuoteIconMarginMobile,
        TestimonialQuoteIconMarginLink,

        TestimonialTitleTag,
        TestimonialTitleGlobalTypoSwitcher,
        TestimonialTitleGlobalTypographyData,
        TestimonialTitleGlobalTypoType,
        TestimonialTitleGlobalTypoOption,
        TestimonialTitleFontFamily,
        TestimonialTitleFontSize,
        TestimonialTitleFontSizeUnits,
        TestimonialTitleFontWeight,
        TestimonialTitleFontStyle,
        TestimonialTitleTextTransform,
        TestimonialTitleTextDecoration,
        TestimonialTitleLetterSpacing,
        TestimonialTitleLetterSpacingUnits,
        TestimonialTitleLineHeight,
        TestimonialTitleLineHeightUnits,
        TestimonialTitleColorSwitcher,
        TestimonialTitleColor,
        TestimonialTitleHoverColor,
        TestimonialTitleMarginUnits,
        TestimonialTitleMarginDesktop,
        TestimonialTitleMarginTablet,
        TestimonialTitleMarginMobile,
        TestimonialTitleMarginLink,

        TestimonialDescGlobalTypoSwitcher,
        TestimonialDescGlobalTypographyData,
        TestimonialDescGlobalTypoType,
        TestimonialDescGlobalTypoOption,
        TestimonialDescFontFamily,
        TestimonialDescFontSize,
        TestimonialDescFontSizeUnits,
        TestimonialDescFontWeight,
        TestimonialDescFontStyle,
        TestimonialDescTextTransform,
        TestimonialDescTextDecoration,
        TestimonialDescLetterSpacing,
        TestimonialDescLetterSpacingUnits,
        TestimonialDescLineHeight,
        TestimonialDescLineHeightUnits,
        TestimonialDescColorSwitcher,
        TestimonialDescColor,
        TestimonialDescHoverColor,
        TestimonialDescMarginUnits,
        TestimonialDescMarginDesktop,
        TestimonialDescMarginTablet,
        TestimonialDescMarginMobile,
        TestimonialDescMarginLink,

        TestimonialAuthorGlobalTypoSwitcher,
        TestimonialAuthorGlobalTypographyData,
        TestimonialAuthorGlobalTypoType,
        TestimonialAuthorGlobalTypoOption,
        TestimonialAuthorFontFamily,
        TestimonialAuthorFontSize,
        TestimonialAuthorFontSizeUnits,
        TestimonialAuthorFontWeight,
        TestimonialAuthorFontStyle,
        TestimonialAuthorTextTransform,
        TestimonialAuthorTextDecoration,
        TestimonialAuthorLetterSpacing,
        TestimonialAuthorLetterSpacingUnits,
        TestimonialAuthorLineHeight,
        TestimonialAuthorLineHeightUnits,
        TestimonialAuthorColorSwitcher,
        TestimonialAuthorColor,
        TestimonialAuthorHoverColor,

        TestimonialAuthorMarginUnits,
        TestimonialAuthorMarginDesktop,
        TestimonialAuthorMarginTablet,
        TestimonialAuthorMarginMobile,
        TestimonialAuthorMarginLink,

        TestimonialDesignationGlobalTypoSwitcher,
        TestimonialDesignationGlobalTypographyData,
        TestimonialDesignationGlobalTypoType,
        TestimonialDesignationGlobalTypoOption,
        TestimonialDesignationFontFamily,
        TestimonialDesignationFontSize,
        TestimonialDesignationFontSizeUnits,
        TestimonialDesignationFontWeight,
        TestimonialDesignationFontStyle,
        TestimonialDesignationTextTransform,
        TestimonialDesignationTextDecoration,
        TestimonialDesignationLetterSpacing,
        TestimonialDesignationLetterSpacingUnits,
        TestimonialDesignationLineHeight,
        TestimonialDesignationLineHeightUnits,
        TestimonialDesignationColorSwitcher,
        TestimonialDesignationColor,
        TestimonialDesignationHoverColor,
        TestimonialDesignationMarginUnits,
        TestimonialDesignationMarginDesktop,
        TestimonialDesignationMarginTablet,
        TestimonialDesignationMarginMobile,
        TestimonialDesignationMarginLink,

        TestimonialRatingIconAlign,
        TestimonialRatingIconGap,
        TestimonialRatingIconGapUnits,

        TestimonialRatingIconSize,
        TestimonialRatingIconSizeUnits,
        TestimonialRatingIconColorSwitcher,
        TestimonialRatingIconColor,
        TestimonialRatingIconHoverColor,
        TestimonialRatingIconMarginUnits,
        TestimonialRatingIconMarginDesktop,
        TestimonialRatingIconMarginTablet,
        TestimonialRatingIconMarginMobile,
        TestimonialRatingIconMarginLink,

        TestimonialGlobalZIndex,
        TestimonialOverflow,
        TestimonialGlobalPaddingUnits,
        TestimonialGlobalPaddingDesktop,
        TestimonialGlobalPaddingTablet,
        TestimonialGlobalPaddingMobile,
        TestimonialGlobalPaddingLink,
        TestimonialGlobalMarginUnits,
        TestimonialGlobalMarginDesktop,
        TestimonialGlobalMarginTablet,
        TestimonialGlobalMarginMobile,
        TestimonialGlobalMarginLink,

        TestimonialGlobalBgColorSwitcher,
        TestimonialGlobalBgNormalBackgroundType,
        TestimonialGlobalBgNormalClassicColor,
        TestimonialGlobalBgNormalGradientColor,
        TestimonialGlobalBgNormalCustomGradientSwitcher,
        TestimonialGlobalBgNormalCustomGradientInputValue,
        TestimonialGlobalBgHoverBackgroundType,
        TestimonialGlobalBgHoverClassicColor,
        TestimonialGlobalBgHoverGradientColor,
        TestimonialGlobalBgHoverCustomGradientSwitcher,
        TestimonialGlobalBgHoverCustomGradientInputValue,

        TestimonialGlobalBorder,
        TestimonialGlobalBorderColor,
        TestimonialGlobalBorderHoverColor,
        TestimonialGlobalBorderColorSwitcher,

        TestimonialGlobalBorderUnits,
        TestimonialGlobalBorderDesktop,
        TestimonialGlobalBorderTablet,
        TestimonialGlobalBorderMobile,
        TestimonialGlobalBorderLink,

        TestimonialGlobalBorderRadiusUnits,
        TestimonialGlobalBorderRadiusDesktop,
        TestimonialGlobalBorderRadiusTablet,
        TestimonialGlobalBorderRadiusMobile,
        TestimonialGlobalBorderRadiusLink,

        TestimonialGlobalBoxShadowSwitcher,
        TestimonialGlobalBoxShadowValues,
        TestimonialGlobalBoxShadowCssValue,
        TestimonialGlobalBoxShadowHoverValues,
        TestimonialGlobalBoxShadowHoverCssValue,

        blockStyle,

        testimonialDesktopSwitcher,
        testimonialTabletSwitcher,
        testimonialMobileSwitcher,

        testimonialCustomCSS,
        testimonialGlobalWraperID,
        testimonialGlobalWraperClass,

        // Position
        testimonialPositionType,
        testimonialHZOrientationType,
        testimonialVROrientationType,
        testimonialHZLeftOffset,
        testimonialHZLeftOffsetUnits,
        testimonialHZRightOffset,
        testimonialHZRightOffsetUnits,
        testimonialVRTopOffset,
        testimonialVRTopOffsetUnits,
        testimonialVRBottomOffset,
        testimonialVRBottomOffsetUnits,

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

        /** Start Dynamic Author Name Text */
        dynamicAuthorNameEnabled,
        dynamicAuthorNameSource,
        dynamicAuthorNamePostId,
        dynamicAuthorNamePostType,
        dynamicAuthorNamePostLabel,
        dynamicAuthorNameField,
        dynamicAuthorNameFeaturedImageField,

        dynamicAuthorNameDateType,
        dynamicAuthorNameDateFormat,

        dynamicAuthorNameTimeType,
        dynamicAuthorNameTimeFormat,

        dynamicAuthorNameCommentsZeroText,
        dynamicAuthorNameCommentsOneText,
        dynamicAuthorNameCommentsManyText,

        dynamicAuthorNameTermsTaxonomy,
        dynamicAuthorNameTermsSeparator,
        dynamicAuthorNameEnableLink,
        dynamicAuthorNameLinkSource,
        /** End Dynamic Author Name Text */

        /** Start Dynamic Author Designation Text */
        dynamicAuthorDesignationEnabled,
        dynamicAuthorDesignationSource,
        dynamicAuthorDesignationPostId,
        dynamicAuthorDesignationPostType,
        dynamicAuthorDesignationPostLabel,
        dynamicAuthorDesignationField,
        dynamicAuthorDesignationFeaturedImageField,

        dynamicAuthorDesignationDateType,
        dynamicAuthorDesignationDateFormat,

        dynamicAuthorDesignationTimeType,
        dynamicAuthorDesignationTimeFormat,

        dynamicAuthorDesignationCommentsZeroText,
        dynamicAuthorDesignationCommentsOneText,
        dynamicAuthorDesignationCommentsManyText,

        dynamicAuthorDesignationTermsTaxonomy,
        dynamicAuthorDesignationTermsSeparator,
        dynamicAuthorDesignationEnableLink,
        dynamicAuthorDesignationLinkSource,
        /** End Dynamic Author Designation Text */
    } = attributes;

    const deviceType = useDeviceType();

    const quoteIconHandler = (IconName) => {
        setAttributes({ TestimonialQuoteIcon: IconName })

    }
    const ratingIconHandler = (IconName) => {
        setAttributes({ TestimonialRatingicon: IconName })
    }


    let defaultImageUrl = '';
    if (typeof FrontisBlocksData !== 'undefined') {
        defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/avatar.png';
    }

    // Set default value for TestimonialImageUrl
    useEffect(() => {
        if (!TestimonialImageUrl) {
            setAttributes({ TestimonialImageUrl: defaultImageUrl });
        }
    }, []);

    /** Start Preset Style */
    const changeTestimonialPreset = (selectedPreset) => {
        const presetConfigurations = {
            "preset-1": {
                RatingSwitcher: true,
                TitleSwitcher: true,
                DescSwitcher: true,
                TestimonialImageSwitcher: true,
                AuthorSwitcher: true,
                DesignationSwitcher: true,
                QuoteIconSwitcher: false,
                TestimonialQuoteIconPositionSwitcher: false,
                TestimonialDescMarginDesktop: {
                    top: '0',
                    bottom: '24',
                    left: '0',
                    right: '0',
                },
                TestimonialRatingIconMarginDesktop: {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialImagePositionSwitcher: false,
                TestimonialImageWidth: {
                    Desktop: '60',
                    Tablet: '60',
                    Mobile: '60',
                },
                TestimonialImageDesktopRadiusWidth: {
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialImageTabletRadiusWidth: {
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialImageMobileRadiusWidth: {
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialAuthorMarginDesktop: {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialDesignationMarginDesktop: {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialGlobalBgNormalClassicColor: '#fefaf3',
                TestimonialDescColor: '',
                TestimonialAuthorColor: '',

            },
            "preset-2": {
                RatingSwitcher: true,
                TitleSwitcher: false,
                DescSwitcher: true,
                TestimonialImageSwitcher: true,
                AuthorSwitcher: true,
                DesignationSwitcher: true,
                QuoteIconSwitcher: false,
                TestimonialQuoteIconPositionSwitcher: false,
                TestimonialDescMarginDesktop: {
                    top: '16',
                    bottom: '24',
                    left: '0',
                    right: '0',
                },
                TestimonialRatingIconMarginDesktop: {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialImagePositionSwitcher: false,
                TestimonialImageWidth: {
                    Desktop: '60',
                    Tablet: '60',
                    Mobile: '60',
                },
                TestimonialImageDesktopRadiusWidth: {
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialImageTabletRadiusWidth: {
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialImageMobileRadiusWidth: {
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialAuthorMarginDesktop: {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialDesignationMarginDesktop: {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialGlobalBgNormalClassicColor: '#f7f7f7',
                TestimonialDescColor: '',
                TestimonialAuthorColor: '',

            },
            "preset-3": {
                RatingSwitcher: true,
                TitleSwitcher: false,
                DescSwitcher: true,
                TestimonialImageSwitcher: true,
                AuthorSwitcher: true,
                DesignationSwitcher: true,
                QuoteIconSwitcher: true,
                TestimonialQuoteIconPositionSwitcher: true,
                TestimonialQuoteIconTopPosition: {
                    Desktop: "3",
                    Tablet: "3",
                    Mobile: "3",
                },
                TestimonialQuoteIconLeftPosition: {
                    Desktop: "85",
                    Tablet: "85",
                    Mobile: "85",
                },
                TestimonialDescMarginDesktop: {
                    top: '32',
                    bottom: '32',
                    left: '0',
                    right: '0',
                },
                TestimonialRatingIconMarginDesktop: {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialImagePositionSwitcher: false,
                TestimonialImageWidth: {
                    Desktop: '60',
                    Tablet: '60',
                    Mobile: '60',
                },
                TestimonialImageDesktopRadiusWidth: {
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialImageTabletRadiusWidth: {
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialImageMobileRadiusWidth: {
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialAuthorMarginDesktop: {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialDesignationMarginDesktop: {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialGlobalBgNormalClassicColor: '#f7f7f7',
                TestimonialDescColor: '',
                TestimonialAuthorColor: '',
            },
            "preset-4": {
                RatingSwitcher: true,
                TitleSwitcher: false,
                DescSwitcher: true,
                TestimonialImageSwitcher: true,
                AuthorSwitcher: true,
                DesignationSwitcher: true,
                QuoteIconSwitcher: true,
                TestimonialQuoteIconPositionSwitcher: true,
                TestimonialQuoteIconTopPosition: {
                    Desktop: "3",
                    Tablet: "3",
                    Mobile: "3",
                },
                TestimonialQuoteIconLeftPosition: {
                    Desktop: "85",
                    Tablet: "85",
                    Mobile: "85",
                },
                TestimonialDescMarginDesktop: {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialRatingIconMarginDesktop: {
                    top: '36',
                    bottom: '16',
                    left: '0',
                    right: '0',
                },
                TestimonialImagePositionSwitcher: true,
                TestimonialImageTopPosition: {
                    Desktop: '-5',
                    Tablet: '-5',
                    Mobile: '-5',
                },
                TestimonialImageLeftPosition: {
                    Desktop: '-2',
                    Tablet: '-2',
                    Mobile: '-2',
                },

                TestimonialImageDesktopRadiusWidth: {
                    top: '10',
                    right: '10',
                    bottom: '10',
                    left: '10',
                },
                TestimonialImageTabletRadiusWidth: {
                    top: '10',
                    right: '10',
                    bottom: '10',
                    left: '10',
                },
                TestimonialImageMobileRadiusWidth: {
                    top: '10',
                    right: '10',
                    bottom: '10',
                    left: '10',
                },

                TestimonialImageWidth: {
                    Desktop: '110',
                    Tablet: '110',
                    Mobile: '110',
                },
                TestimonialAuthorMarginDesktop: {
                    top: '0',
                    bottom: '0',
                    left: '100',
                    right: '0',
                },
                TestimonialDesignationMarginDesktop: {
                    top: '0',
                    bottom: '0',
                    left: '100',
                    right: '0',
                },
                TestimonialGlobalBgNormalClassicColor: '#f7f7f7',
                TestimonialDescColor: '',
                TestimonialAuthorColor: '',
            },
            "preset-5": {
                RatingSwitcher: true,
                TitleSwitcher: false,
                DescSwitcher: true,
                TestimonialImageSwitcher: true,
                AuthorSwitcher: true,
                DesignationSwitcher: false,
                QuoteIconSwitcher: true,
                TestimonialQuoteIconPositionSwitcher: true,
                TestimonialQuoteIconTopPosition: {
                    Desktop: "3",
                    Tablet: "3",
                    Mobile: "3",
                },
                TestimonialQuoteIconLeftPosition: {
                    Desktop: "5",
                    Tablet: "5",
                    Mobile: "5",
                },
                TestimonialDescMarginDesktop: {
                    top: '24',
                    bottom: '32',
                    left: '0',
                    right: '0',
                },
                TestimonialRatingIconMarginDesktop: {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialImagePositionSwitcher: false,
                TestimonialImageWidth: {
                    Desktop: '40',
                    Tablet: '40',
                    Mobile: '40',
                },
                TestimonialImageDesktopRadiusWidth: {
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialImageTabletRadiusWidth: {
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialImageMobileRadiusWidth: {
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialAuthorMarginDesktop: {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialDesignationMarginDesktop: {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialGlobalBgNormalClassicColor: '#404655',
                TestimonialDescColor: '#ffffff',
                TestimonialAuthorColor: '#ffffff',
            },
        };

        const selectedPresetConfig = presetConfigurations[selectedPreset];

        if (selectedPresetConfig) {
            setAttributes({
                TestimonialPresetStyle: selectedPreset,
                ...selectedPresetConfig,
            });
        } else {
            console.warn(`Testimonial: Preset "${selectedPreset}" not found.`);
        }
    };
    /** End Preset Style */
    /**
    * Preset Styles Data Object
    */
    const presetStyles = {
        "preset-1": {
            RatingSwitcher: true,
            TitleSwitcher: true,
            DescSwitcher: true,
            TestimonialImageSwitcher: true,
            AuthorSwitcher: true,
            DesignationSwitcher: true,
            QuoteIconSwitcher: false,
            TestimonialQuoteIconPositionSwitcher: false,
            TestimonialDescMarginDesktop: {
                top: '0',
                bottom: '24',
                left: '0',
                right: '0',
            },
            TestimonialRatingIconMarginDesktop: {
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            },
            TestimonialImagePositionSwitcher: false,
            TestimonialImageWidth: {
                Desktop: '60',
                Tablet: '60',
                Mobile: '60',
            },
            TestimonialImageDesktopRadiusWidth: {
                top: '50',
                right: '50',
                bottom: '50',
                left: '50',
            },
            TestimonialImageTabletRadiusWidth: {
                top: '50',
                right: '50',
                bottom: '50',
                left: '50',
            },
            TestimonialImageMobileRadiusWidth: {
                top: '50',
                right: '50',
                bottom: '50',
                left: '50',
            },
            TestimonialAuthorMarginDesktop: {
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            },
            TestimonialDesignationMarginDesktop: {
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            },
            TestimonialGlobalBgNormalClassicColor: '#fefaf3',
            TestimonialDescColor: '',
            TestimonialAuthorColor: '',

        },
        "preset-2": {
            RatingSwitcher: true,
            TitleSwitcher: false,
            DescSwitcher: true,
            TestimonialImageSwitcher: true,
            AuthorSwitcher: true,
            DesignationSwitcher: true,
            QuoteIconSwitcher: false,
            TestimonialQuoteIconPositionSwitcher: false,
            TestimonialDescMarginDesktop: {
                top: '16',
                bottom: '24',
                left: '0',
                right: '0',
            },
            TestimonialRatingIconMarginDesktop: {
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            },
            TestimonialImagePositionSwitcher: false,
            TestimonialImageWidth: {
                Desktop: '60',
                Tablet: '60',
                Mobile: '60',
            },
            TestimonialImageDesktopRadiusWidth: {
                top: '50',
                right: '50',
                bottom: '50',
                left: '50',
            },
            TestimonialImageTabletRadiusWidth: {
                top: '50',
                right: '50',
                bottom: '50',
                left: '50',
            },
            TestimonialImageMobileRadiusWidth: {
                top: '50',
                right: '50',
                bottom: '50',
                left: '50',
            },
            TestimonialAuthorMarginDesktop: {
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            },
            TestimonialDesignationMarginDesktop: {
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            },
            TestimonialGlobalBgNormalClassicColor: '#f7f7f7',
            TestimonialDescColor: '',
            TestimonialAuthorColor: '',

        },
        "preset-3": {
            RatingSwitcher: true,
            TitleSwitcher: false,
            DescSwitcher: true,
            TestimonialImageSwitcher: true,
            AuthorSwitcher: true,
            DesignationSwitcher: true,
            QuoteIconSwitcher: true,
            TestimonialQuoteIconPositionSwitcher: true,
            TestimonialQuoteIconTopPosition: {
                Desktop: "3",
                Tablet: "3",
                Mobile: "3",
            },
            TestimonialQuoteIconLeftPosition: {
                Desktop: "85",
                Tablet: "85",
                Mobile: "85",
            },
            TestimonialDescMarginDesktop: {
                top: '32',
                bottom: '32',
                left: '0',
                right: '0',
            },
            TestimonialRatingIconMarginDesktop: {
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            },
            TestimonialImagePositionSwitcher: false,
            TestimonialImageWidth: {
                Desktop: '60',
                Tablet: '60',
                Mobile: '60',
            },
            TestimonialImageDesktopRadiusWidth: {
                top: '50',
                right: '50',
                bottom: '50',
                left: '50',
            },
            TestimonialImageTabletRadiusWidth: {
                top: '50',
                right: '50',
                bottom: '50',
                left: '50',
            },
            TestimonialImageMobileRadiusWidth: {
                top: '50',
                right: '50',
                bottom: '50',
                left: '50',
            },
            TestimonialAuthorMarginDesktop: {
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            },
            TestimonialDesignationMarginDesktop: {
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            },
            TestimonialGlobalBgNormalClassicColor: '#f7f7f7',
            TestimonialDescColor: '',
            TestimonialAuthorColor: '',
        },
        "preset-4": {
            RatingSwitcher: true,
            TitleSwitcher: false,
            DescSwitcher: true,
            TestimonialImageSwitcher: true,
            AuthorSwitcher: true,
            DesignationSwitcher: true,
            QuoteIconSwitcher: true,
            TestimonialQuoteIconPositionSwitcher: true,
            TestimonialQuoteIconTopPosition: {
                Desktop: "3",
                Tablet: "3",
                Mobile: "3",
            },
            TestimonialQuoteIconLeftPosition: {
                Desktop: "85",
                Tablet: "85",
                Mobile: "85",
            },
            TestimonialDescMarginDesktop: {
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            },
            TestimonialRatingIconMarginDesktop: {
                top: '36',
                bottom: '16',
                left: '0',
                right: '0',
            },
            TestimonialImagePositionSwitcher: true,
            TestimonialImageTopPosition: {
                Desktop: '-5',
                Tablet: '-5',
                Mobile: '-5',
            },
            TestimonialImageLeftPosition: {
                Desktop: '-2',
                Tablet: '-2',
                Mobile: '-2',
            },

            TestimonialImageDesktopRadiusWidth: {
                top: '10',
                right: '10',
                bottom: '10',
                left: '10',
            },
            TestimonialImageTabletRadiusWidth: {
                top: '10',
                right: '10',
                bottom: '10',
                left: '10',
            },
            TestimonialImageMobileRadiusWidth: {
                top: '10',
                right: '10',
                bottom: '10',
                left: '10',
            },

            TestimonialImageWidth: {
                Desktop: '110',
                Tablet: '110',
                Mobile: '110',
            },
            TestimonialAuthorMarginDesktop: {
                top: '0',
                bottom: '0',
                left: '100',
                right: '0',
            },
            TestimonialDesignationMarginDesktop: {
                top: '0',
                bottom: '0',
                left: '100',
                right: '0',
            },
            TestimonialGlobalBgNormalClassicColor: '#f7f7f7',
            TestimonialDescColor: '',
            TestimonialAuthorColor: '',
        },
        "preset-5": {
            RatingSwitcher: true,
            TitleSwitcher: false,
            DescSwitcher: true,
            TestimonialImageSwitcher: true,
            AuthorSwitcher: true,
            DesignationSwitcher: false,
            QuoteIconSwitcher: true,
            TestimonialQuoteIconPositionSwitcher: true,
            TestimonialQuoteIconTopPosition: {
                Desktop: "3",
                Tablet: "3",
                Mobile: "3",
            },
            TestimonialQuoteIconLeftPosition: {
                Desktop: "5",
                Tablet: "5",
                Mobile: "5",
            },
            TestimonialDescMarginDesktop: {
                top: '24',
                bottom: '32',
                left: '0',
                right: '0',
            },
            TestimonialRatingIconMarginDesktop: {
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            },
            TestimonialImagePositionSwitcher: false,
            TestimonialImageWidth: {
                Desktop: '40',
                Tablet: '40',
                Mobile: '40',
            },
            TestimonialImageDesktopRadiusWidth: {
                top: '50',
                right: '50',
                bottom: '50',
                left: '50',
            },
            TestimonialImageTabletRadiusWidth: {
                top: '50',
                right: '50',
                bottom: '50',
                left: '50',
            },
            TestimonialImageMobileRadiusWidth: {
                top: '50',
                right: '50',
                bottom: '50',
                left: '50',
            },
            TestimonialAuthorMarginDesktop: {
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            },
            TestimonialDesignationMarginDesktop: {
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
            },
            TestimonialGlobalBgNormalClassicColor: '#404655',
            TestimonialDescColor: '#ffffff',
            TestimonialAuthorColor: '#ffffff',
        },
    };

    const testimonialPresets = [
        {
            value: 'preset-1',
            label: __('Preset 1', 'frontis-blocks'),
            attributes: Object.entries(presetStyles['preset-1']).map(([label, value]) => ({ label, value })),
            icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                        <rect x="24" y="37" width="300" height="202" rx="6" fill="white" fill-opacity="0.4"/>
                        <path d="M50.9988 67.9547L47.8863 69.8297C47.7488 69.9172 47.605 69.9547 47.455 69.9422C47.305 69.9297 47.1738 69.8797 47.0613 69.7922C46.9488 69.7047 46.8613 69.5954 46.7988 69.4644C46.7363 69.3334 46.7238 69.1864 46.7613 69.0234L47.5863 65.4797L44.83 63.0984C44.705 62.9859 44.627 62.8577 44.596 62.7137C44.565 62.5697 44.5743 62.4292 44.6238 62.2922C44.6733 62.1552 44.7483 62.0427 44.8488 61.9547C44.9493 61.8667 45.0868 61.8104 45.2613 61.7859L48.8988 61.4672L50.305 58.1297C50.3675 57.9797 50.4645 57.8672 50.596 57.7922C50.7275 57.7172 50.8618 57.6797 50.9988 57.6797C51.1358 57.6797 51.27 57.7172 51.4015 57.7922C51.533 57.8672 51.63 57.9797 51.6925 58.1297L53.0988 61.4672L56.7363 61.7859C56.9113 61.8109 57.0488 61.8672 57.1488 61.9547C57.2488 62.0422 57.3238 62.1547 57.3738 62.2922C57.4238 62.4297 57.4333 62.5704 57.4023 62.7144C57.3713 62.8584 57.293 62.9864 57.1675 63.0984L54.4113 65.4797L55.2363 69.0234C55.2738 69.1859 55.2613 69.3329 55.1988 69.4644C55.1363 69.5959 55.0488 69.7052 54.9363 69.7922C54.8238 69.8792 54.6925 69.9292 54.5425 69.9422C54.3925 69.9552 54.2488 69.9177 54.1113 69.8297L50.9988 67.9547Z" fill="#404655"/>
                        <path d="M72.9988 67.9547L69.8863 69.8297C69.7488 69.9172 69.605 69.9547 69.455 69.9422C69.305 69.9297 69.1738 69.8797 69.0613 69.7922C68.9488 69.7047 68.8613 69.5954 68.7988 69.4644C68.7363 69.3334 68.7238 69.1864 68.7613 69.0234L69.5863 65.4797L66.83 63.0984C66.705 62.9859 66.627 62.8577 66.596 62.7137C66.565 62.5697 66.5743 62.4292 66.6238 62.2922C66.6733 62.1552 66.7483 62.0427 66.8488 61.9547C66.9493 61.8667 67.0868 61.8104 67.2613 61.7859L70.8988 61.4672L72.305 58.1297C72.3675 57.9797 72.4645 57.8672 72.596 57.7922C72.7275 57.7172 72.8618 57.6797 72.9988 57.6797C73.1358 57.6797 73.27 57.7172 73.4015 57.7922C73.533 57.8672 73.63 57.9797 73.6925 58.1297L75.0988 61.4672L78.7363 61.7859C78.9113 61.8109 79.0488 61.8672 79.1488 61.9547C79.2488 62.0422 79.3238 62.1547 79.3738 62.2922C79.4238 62.4297 79.4333 62.5704 79.4023 62.7144C79.3713 62.8584 79.293 62.9864 79.1675 63.0984L76.4113 65.4797L77.2363 69.0234C77.2738 69.1859 77.2613 69.3329 77.1988 69.4644C77.1363 69.5959 77.0488 69.7052 76.9363 69.7922C76.8238 69.8792 76.6925 69.9292 76.5425 69.9422C76.3925 69.9552 76.2488 69.9177 76.1113 69.8297L72.9988 67.9547Z" fill="#404655"/>
                        <path d="M94.9988 67.9547L91.8863 69.8297C91.7488 69.9172 91.605 69.9547 91.455 69.9422C91.305 69.9297 91.1738 69.8797 91.0613 69.7922C90.9488 69.7047 90.8613 69.5954 90.7988 69.4644C90.7363 69.3334 90.7238 69.1864 90.7613 69.0234L91.5863 65.4797L88.83 63.0984C88.705 62.9859 88.627 62.8577 88.596 62.7137C88.565 62.5697 88.5743 62.4292 88.6238 62.2922C88.6733 62.1552 88.7483 62.0427 88.8488 61.9547C88.9493 61.8667 89.0868 61.8104 89.2613 61.7859L92.8988 61.4672L94.305 58.1297C94.3675 57.9797 94.4645 57.8672 94.596 57.7922C94.7275 57.7172 94.8618 57.6797 94.9988 57.6797C95.1358 57.6797 95.27 57.7172 95.4015 57.7922C95.533 57.8672 95.63 57.9797 95.6925 58.1297L97.0988 61.4672L100.736 61.7859C100.911 61.8109 101.049 61.8672 101.149 61.9547C101.249 62.0422 101.324 62.1547 101.374 62.2922C101.424 62.4297 101.433 62.5704 101.402 62.7144C101.371 62.8584 101.293 62.9864 101.168 63.0984L98.4113 65.4797L99.2363 69.0234C99.2738 69.1859 99.2613 69.3329 99.1988 69.4644C99.1363 69.5959 99.0488 69.7052 98.9363 69.7922C98.8238 69.8792 98.6925 69.9292 98.5425 69.9422C98.3925 69.9552 98.2488 69.9177 98.1113 69.8297L94.9988 67.9547Z" fill="#404655"/>
                        <path d="M116.999 67.9547L113.886 69.8297C113.749 69.9172 113.605 69.9547 113.455 69.9422C113.305 69.9297 113.174 69.8797 113.061 69.7922C112.949 69.7047 112.861 69.5954 112.799 69.4644C112.736 69.3334 112.724 69.1864 112.761 69.0234L113.586 65.4797L110.83 63.0984C110.705 62.9859 110.627 62.8577 110.596 62.7137C110.565 62.5697 110.574 62.4292 110.624 62.2922C110.673 62.1552 110.748 62.0427 110.849 61.9547C110.949 61.8667 111.087 61.8104 111.261 61.7859L114.899 61.4672L116.305 58.1297C116.368 57.9797 116.465 57.8672 116.596 57.7922C116.728 57.7172 116.862 57.6797 116.999 57.6797C117.136 57.6797 117.27 57.7172 117.402 57.7922C117.533 57.8672 117.63 57.9797 117.693 58.1297L119.099 61.4672L122.736 61.7859C122.911 61.8109 123.049 61.8672 123.149 61.9547C123.249 62.0422 123.324 62.1547 123.374 62.2922C123.424 62.4297 123.433 62.5704 123.402 62.7144C123.371 62.8584 123.293 62.9864 123.168 63.0984L120.411 65.4797L121.236 69.0234C121.274 69.1859 121.261 69.3329 121.199 69.4644C121.136 69.5959 121.049 69.7052 120.936 69.7922C120.824 69.8792 120.693 69.9292 120.543 69.9422C120.393 69.9552 120.249 69.9177 120.111 69.8297L116.999 67.9547Z" fill="#404655"/>
                        <path d="M138.999 67.9547L135.886 69.8297C135.749 69.9172 135.605 69.9547 135.455 69.9422C135.305 69.9297 135.174 69.8797 135.061 69.7922C134.949 69.7047 134.861 69.5954 134.799 69.4644C134.736 69.3334 134.724 69.1864 134.761 69.0234L135.586 65.4797L132.83 63.0984C132.705 62.9859 132.627 62.8577 132.596 62.7137C132.565 62.5697 132.574 62.4292 132.624 62.2922C132.673 62.1552 132.748 62.0427 132.849 61.9547C132.949 61.8667 133.087 61.8104 133.261 61.7859L136.899 61.4672L138.305 58.1297C138.368 57.9797 138.465 57.8672 138.596 57.7922C138.728 57.7172 138.862 57.6797 138.999 57.6797C139.136 57.6797 139.27 57.7172 139.402 57.7922C139.533 57.8672 139.63 57.9797 139.693 58.1297L141.099 61.4672L144.736 61.7859C144.911 61.8109 145.049 61.8672 145.149 61.9547C145.249 62.0422 145.324 62.1547 145.374 62.2922C145.424 62.4297 145.433 62.5704 145.402 62.7144C145.371 62.8584 145.293 62.9864 145.168 63.0984L142.411 65.4797L143.236 69.0234C143.274 69.1859 143.261 69.3329 143.199 69.4644C143.136 69.5959 143.049 69.7052 142.936 69.7922C142.824 69.8792 142.693 69.9292 142.543 69.9422C142.393 69.9552 142.249 69.9177 142.111 69.8297L138.999 67.9547Z" fill="#404655"/>
                        <g filter="url(#filter0_d_16980_14460)">
                        <path d="M42 100C42 95.0294 46.0294 91 51 91H195C199.971 91 204 95.0294 204 100C204 104.971 199.971 109 195 109H51C46.0294 109 42 104.971 42 100Z" fill="white"/>
                        </g>
                        <g filter="url(#filter1_d_16980_14460)">
                        <rect x="42" y="127" width="264" height="15" rx="7.5" fill="white"/>
                        </g>
                        <g filter="url(#filter2_d_16980_14460)">
                        <rect x="42" y="150" width="174" height="15" rx="7.5" fill="white"/>
                        </g>
                        <g filter="url(#filter3_d_16980_14460)">
                        <rect x="42" y="183" width="38" height="38" rx="19" fill="white" shape-rendering="crispEdges"/>
                        <path d="M60.9961 203.002C63.3921 203.002 65.5711 203.696 67.1741 204.673C67.9741 205.163 68.6581 205.738 69.1521 206.363C69.6381 206.979 69.9961 207.715 69.9961 208.502C69.9961 209.347 69.5851 210.013 68.9931 210.488C68.4331 210.938 67.6941 211.236 66.9091 211.444C65.3311 211.861 63.2251 212.002 60.9961 212.002C58.7671 212.002 56.6611 211.862 55.0831 211.444C54.2981 211.236 53.5591 210.938 52.9991 210.488C52.4061 210.012 51.9961 209.347 51.9961 208.502C51.9961 207.715 52.3541 206.979 52.8401 206.363C53.3341 205.738 54.0171 205.163 54.8181 204.673C56.4211 203.696 58.6011 203.002 60.9961 203.002Z" fill="#404655"/>
                        <path opacity="0.3" d="M60.9949 192.002C64.8439 192.002 67.2499 196.169 65.3249 199.502C64.886 200.262 64.2549 200.893 63.4948 201.332C62.7347 201.771 61.8725 202.002 60.9949 202.002C57.1459 202.002 54.7399 197.835 56.6649 194.502C57.1037 193.742 57.7349 193.111 58.4949 192.672C59.255 192.233 60.1172 192.002 60.9949 192.002Z" fill="#404655"/>
                        </g>
                        <g filter="url(#filter4_d_16980_14460)">
                        <path d="M92 193.5C92 190.186 94.6863 187.5 98 187.5H162C165.314 187.5 168 190.186 168 193.5C168 196.814 165.314 199.5 162 199.5H98C94.6863 199.5 92 196.814 92 193.5Z" fill="white"/>
                        </g>
                        <g filter="url(#filter5_d_16980_14460)">
                        <rect x="92" y="207.5" width="144" height="9" rx="4.5" fill="white"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_16980_14460" x="41" y="91" width="164" height="21" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14460"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14460" result="shape"/>
                        </filter>
                        <filter id="filter1_d_16980_14460" x="41" y="127" width="266" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14460"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14460" result="shape"/>
                        </filter>
                        <filter id="filter2_d_16980_14460" x="41" y="150" width="176" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14460"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14460" result="shape"/>
                        </filter>
                        <filter id="filter3_d_16980_14460" x="41.1739" y="183" width="39.6522" height="40.4783" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1.65217"/>
                        <feGaussianBlur stdDeviation="0.413043"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14460"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14460" result="shape"/>
                        </filter>
                        <filter id="filter4_d_16980_14460" x="91" y="187.5" width="78" height="15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14460"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14460" result="shape"/>
                        </filter>
                        <filter id="filter5_d_16980_14460" x="91" y="207.5" width="146" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14460"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14460" result="shape"/>
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
                        <rect x="24" y="55" width="300" height="166" rx="6" fill="white" fill-opacity="0.4"/>
                        <path d="M50.9988 85.9547L47.8863 87.8297C47.7488 87.9172 47.605 87.9547 47.455 87.9422C47.305 87.9297 47.1738 87.8797 47.0613 87.7922C46.9488 87.7047 46.8613 87.5954 46.7988 87.4644C46.7363 87.3334 46.7238 87.1864 46.7613 87.0234L47.5863 83.4797L44.83 81.0984C44.705 80.9859 44.627 80.8577 44.596 80.7137C44.565 80.5697 44.5743 80.4292 44.6238 80.2922C44.6733 80.1552 44.7483 80.0427 44.8488 79.9547C44.9493 79.8667 45.0868 79.8104 45.2613 79.7859L48.8988 79.4672L50.305 76.1297C50.3675 75.9797 50.4645 75.8672 50.596 75.7922C50.7275 75.7172 50.8618 75.6797 50.9988 75.6797C51.1358 75.6797 51.27 75.7172 51.4015 75.7922C51.533 75.8672 51.63 75.9797 51.6925 76.1297L53.0988 79.4672L56.7363 79.7859C56.9113 79.8109 57.0488 79.8672 57.1488 79.9547C57.2488 80.0422 57.3238 80.1547 57.3738 80.2922C57.4238 80.4297 57.4333 80.5704 57.4023 80.7144C57.3713 80.8584 57.293 80.9864 57.1675 81.0984L54.4113 83.4797L55.2363 87.0234C55.2738 87.1859 55.2613 87.3329 55.1988 87.4644C55.1363 87.5959 55.0488 87.7052 54.9363 87.7922C54.8238 87.8792 54.6925 87.9292 54.5425 87.9422C54.3925 87.9552 54.2488 87.9177 54.1113 87.8297L50.9988 85.9547Z" fill="#404655"/>
                        <path d="M72.9988 85.9547L69.8863 87.8297C69.7488 87.9172 69.605 87.9547 69.455 87.9422C69.305 87.9297 69.1738 87.8797 69.0613 87.7922C68.9488 87.7047 68.8613 87.5954 68.7988 87.4644C68.7363 87.3334 68.7238 87.1864 68.7613 87.0234L69.5863 83.4797L66.83 81.0984C66.705 80.9859 66.627 80.8577 66.596 80.7137C66.565 80.5697 66.5743 80.4292 66.6238 80.2922C66.6733 80.1552 66.7483 80.0427 66.8488 79.9547C66.9493 79.8667 67.0868 79.8104 67.2613 79.7859L70.8988 79.4672L72.305 76.1297C72.3675 75.9797 72.4645 75.8672 72.596 75.7922C72.7275 75.7172 72.8618 75.6797 72.9988 75.6797C73.1358 75.6797 73.27 75.7172 73.4015 75.7922C73.533 75.8672 73.63 75.9797 73.6925 76.1297L75.0988 79.4672L78.7363 79.7859C78.9113 79.8109 79.0488 79.8672 79.1488 79.9547C79.2488 80.0422 79.3238 80.1547 79.3738 80.2922C79.4238 80.4297 79.4333 80.5704 79.4023 80.7144C79.3713 80.8584 79.293 80.9864 79.1675 81.0984L76.4113 83.4797L77.2363 87.0234C77.2738 87.1859 77.2613 87.3329 77.1988 87.4644C77.1363 87.5959 77.0488 87.7052 76.9363 87.7922C76.8238 87.8792 76.6925 87.9292 76.5425 87.9422C76.3925 87.9552 76.2488 87.9177 76.1113 87.8297L72.9988 85.9547Z" fill="#404655"/>
                        <path d="M94.9988 85.9547L91.8863 87.8297C91.7488 87.9172 91.605 87.9547 91.455 87.9422C91.305 87.9297 91.1738 87.8797 91.0613 87.7922C90.9488 87.7047 90.8613 87.5954 90.7988 87.4644C90.7363 87.3334 90.7238 87.1864 90.7613 87.0234L91.5863 83.4797L88.83 81.0984C88.705 80.9859 88.627 80.8577 88.596 80.7137C88.565 80.5697 88.5743 80.4292 88.6238 80.2922C88.6733 80.1552 88.7483 80.0427 88.8488 79.9547C88.9493 79.8667 89.0868 79.8104 89.2613 79.7859L92.8988 79.4672L94.305 76.1297C94.3675 75.9797 94.4645 75.8672 94.596 75.7922C94.7275 75.7172 94.8618 75.6797 94.9988 75.6797C95.1358 75.6797 95.27 75.7172 95.4015 75.7922C95.533 75.8672 95.63 75.9797 95.6925 76.1297L97.0988 79.4672L100.736 79.7859C100.911 79.8109 101.049 79.8672 101.149 79.9547C101.249 80.0422 101.324 80.1547 101.374 80.2922C101.424 80.4297 101.433 80.5704 101.402 80.7144C101.371 80.8584 101.293 80.9864 101.168 81.0984L98.4113 83.4797L99.2363 87.0234C99.2738 87.1859 99.2613 87.3329 99.1988 87.4644C99.1363 87.5959 99.0488 87.7052 98.9363 87.7922C98.8238 87.8792 98.6925 87.9292 98.5425 87.9422C98.3925 87.9552 98.2488 87.9177 98.1113 87.8297L94.9988 85.9547Z" fill="#404655"/>
                        <path d="M116.999 85.9547L113.886 87.8297C113.749 87.9172 113.605 87.9547 113.455 87.9422C113.305 87.9297 113.174 87.8797 113.061 87.7922C112.949 87.7047 112.861 87.5954 112.799 87.4644C112.736 87.3334 112.724 87.1864 112.761 87.0234L113.586 83.4797L110.83 81.0984C110.705 80.9859 110.627 80.8577 110.596 80.7137C110.565 80.5697 110.574 80.4292 110.624 80.2922C110.673 80.1552 110.748 80.0427 110.849 79.9547C110.949 79.8667 111.087 79.8104 111.261 79.7859L114.899 79.4672L116.305 76.1297C116.368 75.9797 116.465 75.8672 116.596 75.7922C116.728 75.7172 116.862 75.6797 116.999 75.6797C117.136 75.6797 117.27 75.7172 117.402 75.7922C117.533 75.8672 117.63 75.9797 117.693 76.1297L119.099 79.4672L122.736 79.7859C122.911 79.8109 123.049 79.8672 123.149 79.9547C123.249 80.0422 123.324 80.1547 123.374 80.2922C123.424 80.4297 123.433 80.5704 123.402 80.7144C123.371 80.8584 123.293 80.9864 123.168 81.0984L120.411 83.4797L121.236 87.0234C121.274 87.1859 121.261 87.3329 121.199 87.4644C121.136 87.5959 121.049 87.7052 120.936 87.7922C120.824 87.8792 120.693 87.9292 120.543 87.9422C120.393 87.9552 120.249 87.9177 120.111 87.8297L116.999 85.9547Z" fill="#404655"/>
                        <path d="M138.999 85.9547L135.886 87.8297C135.749 87.9172 135.605 87.9547 135.455 87.9422C135.305 87.9297 135.174 87.8797 135.061 87.7922C134.949 87.7047 134.861 87.5954 134.799 87.4644C134.736 87.3334 134.724 87.1864 134.761 87.0234L135.586 83.4797L132.83 81.0984C132.705 80.9859 132.627 80.8577 132.596 80.7137C132.565 80.5697 132.574 80.4292 132.624 80.2922C132.673 80.1552 132.748 80.0427 132.849 79.9547C132.949 79.8667 133.087 79.8104 133.261 79.7859L136.899 79.4672L138.305 76.1297C138.368 75.9797 138.465 75.8672 138.596 75.7922C138.728 75.7172 138.862 75.6797 138.999 75.6797C139.136 75.6797 139.27 75.7172 139.402 75.7922C139.533 75.8672 139.63 75.9797 139.693 76.1297L141.099 79.4672L144.736 79.7859C144.911 79.8109 145.049 79.8672 145.149 79.9547C145.249 80.0422 145.324 80.1547 145.374 80.2922C145.424 80.4297 145.433 80.5704 145.402 80.7144C145.371 80.8584 145.293 80.9864 145.168 81.0984L142.411 83.4797L143.236 87.0234C143.274 87.1859 143.261 87.3329 143.199 87.4644C143.136 87.5959 143.049 87.7052 142.936 87.7922C142.824 87.8792 142.693 87.9292 142.543 87.9422C142.393 87.9552 142.249 87.9177 142.111 87.8297L138.999 85.9547Z" fill="#404655"/>
                        <g filter="url(#filter0_d_16980_14636)">
                        <rect x="42" y="109" width="264" height="15" rx="7.5" fill="white"/>
                        </g>
                        <g filter="url(#filter1_d_16980_14636)">
                        <rect x="42" y="132" width="174" height="15" rx="7.5" fill="white"/>
                        </g>
                        <g filter="url(#filter2_d_16980_14636)">
                        <rect x="42" y="165" width="38" height="38" rx="19" fill="white" shape-rendering="crispEdges"/>
                        <path d="M60.9961 185.002C63.3921 185.002 65.5711 185.696 67.1741 186.673C67.9741 187.163 68.6581 187.738 69.1521 188.363C69.6381 188.979 69.9961 189.715 69.9961 190.502C69.9961 191.347 69.5851 192.013 68.9931 192.488C68.4331 192.938 67.6941 193.236 66.9091 193.444C65.3311 193.861 63.2251 194.002 60.9961 194.002C58.7671 194.002 56.6611 193.862 55.0831 193.444C54.2981 193.236 53.5591 192.938 52.9991 192.488C52.4061 192.012 51.9961 191.347 51.9961 190.502C51.9961 189.715 52.3541 188.979 52.8401 188.363C53.3341 187.738 54.0171 187.163 54.8181 186.673C56.4211 185.696 58.6011 185.002 60.9961 185.002Z" fill="#404655"/>
                        <path opacity="0.3" d="M60.9949 174.002C64.8439 174.002 67.2499 178.169 65.3249 181.502C64.886 182.262 64.2549 182.893 63.4948 183.332C62.7347 183.771 61.8725 184.002 60.9949 184.002C57.1459 184.002 54.7399 179.835 56.6649 176.502C57.1037 175.742 57.7349 175.111 58.4949 174.672C59.255 174.233 60.1172 174.002 60.9949 174.002Z" fill="#404655"/>
                        </g>
                        <g filter="url(#filter3_d_16980_14636)">
                        <path d="M92 175.5C92 172.186 94.6863 169.5 98 169.5H162C165.314 169.5 168 172.186 168 175.5C168 178.814 165.314 181.5 162 181.5H98C94.6863 181.5 92 178.814 92 175.5Z" fill="white"/>
                        </g>
                        <g filter="url(#filter4_d_16980_14636)">
                        <rect x="92" y="189.5" width="144" height="9" rx="4.5" fill="white"/>
                        </g>
                        <defs>
                        <filter id="filter0_d_16980_14636" x="41" y="109" width="266" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14636"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14636" result="shape"/>
                        </filter>
                        <filter id="filter1_d_16980_14636" x="41" y="132" width="176" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14636"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14636" result="shape"/>
                        </filter>
                        <filter id="filter2_d_16980_14636" x="41.1739" y="165" width="39.6522" height="40.4783" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1.65217"/>
                        <feGaussianBlur stdDeviation="0.413043"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14636"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14636" result="shape"/>
                        </filter>
                        <filter id="filter3_d_16980_14636" x="91" y="169.5" width="78" height="15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14636"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14636" result="shape"/>
                        </filter>
                        <filter id="filter4_d_16980_14636" x="91" y="189.5" width="146" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14636"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14636" result="shape"/>
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
                        <rect x="24" y="55" width="300" height="166" rx="6" fill="white" fill-opacity="0.4"/>
                        <path d="M50.9988 85.9547L47.8863 87.8297C47.7488 87.9172 47.605 87.9547 47.455 87.9422C47.305 87.9297 47.1738 87.8797 47.0613 87.7922C46.9488 87.7047 46.8613 87.5954 46.7988 87.4644C46.7363 87.3334 46.7238 87.1864 46.7613 87.0234L47.5863 83.4797L44.83 81.0984C44.705 80.9859 44.627 80.8577 44.596 80.7137C44.565 80.5697 44.5743 80.4292 44.6238 80.2922C44.6733 80.1552 44.7483 80.0427 44.8488 79.9547C44.9493 79.8667 45.0868 79.8104 45.2613 79.7859L48.8988 79.4672L50.305 76.1297C50.3675 75.9797 50.4645 75.8672 50.596 75.7922C50.7275 75.7172 50.8618 75.6797 50.9988 75.6797C51.1358 75.6797 51.27 75.7172 51.4015 75.7922C51.533 75.8672 51.63 75.9797 51.6925 76.1297L53.0988 79.4672L56.7363 79.7859C56.9113 79.8109 57.0488 79.8672 57.1488 79.9547C57.2488 80.0422 57.3238 80.1547 57.3738 80.2922C57.4238 80.4297 57.4333 80.5704 57.4023 80.7144C57.3713 80.8584 57.293 80.9864 57.1675 81.0984L54.4113 83.4797L55.2363 87.0234C55.2738 87.1859 55.2613 87.3329 55.1988 87.4644C55.1363 87.5959 55.0488 87.7052 54.9363 87.7922C54.8238 87.8792 54.6925 87.9292 54.5425 87.9422C54.3925 87.9552 54.2488 87.9177 54.1113 87.8297L50.9988 85.9547Z" fill="#404655"/>
                        <path d="M72.9988 85.9547L69.8863 87.8297C69.7488 87.9172 69.605 87.9547 69.455 87.9422C69.305 87.9297 69.1738 87.8797 69.0613 87.7922C68.9488 87.7047 68.8613 87.5954 68.7988 87.4644C68.7363 87.3334 68.7238 87.1864 68.7613 87.0234L69.5863 83.4797L66.83 81.0984C66.705 80.9859 66.627 80.8577 66.596 80.7137C66.565 80.5697 66.5743 80.4292 66.6238 80.2922C66.6733 80.1552 66.7483 80.0427 66.8488 79.9547C66.9493 79.8667 67.0868 79.8104 67.2613 79.7859L70.8988 79.4672L72.305 76.1297C72.3675 75.9797 72.4645 75.8672 72.596 75.7922C72.7275 75.7172 72.8618 75.6797 72.9988 75.6797C73.1358 75.6797 73.27 75.7172 73.4015 75.7922C73.533 75.8672 73.63 75.9797 73.6925 76.1297L75.0988 79.4672L78.7363 79.7859C78.9113 79.8109 79.0488 79.8672 79.1488 79.9547C79.2488 80.0422 79.3238 80.1547 79.3738 80.2922C79.4238 80.4297 79.4333 80.5704 79.4023 80.7144C79.3713 80.8584 79.293 80.9864 79.1675 81.0984L76.4113 83.4797L77.2363 87.0234C77.2738 87.1859 77.2613 87.3329 77.1988 87.4644C77.1363 87.5959 77.0488 87.7052 76.9363 87.7922C76.8238 87.8792 76.6925 87.9292 76.5425 87.9422C76.3925 87.9552 76.2488 87.9177 76.1113 87.8297L72.9988 85.9547Z" fill="#404655"/>
                        <path d="M94.9988 85.9547L91.8863 87.8297C91.7488 87.9172 91.605 87.9547 91.455 87.9422C91.305 87.9297 91.1738 87.8797 91.0613 87.7922C90.9488 87.7047 90.8613 87.5954 90.7988 87.4644C90.7363 87.3334 90.7238 87.1864 90.7613 87.0234L91.5863 83.4797L88.83 81.0984C88.705 80.9859 88.627 80.8577 88.596 80.7137C88.565 80.5697 88.5743 80.4292 88.6238 80.2922C88.6733 80.1552 88.7483 80.0427 88.8488 79.9547C88.9493 79.8667 89.0868 79.8104 89.2613 79.7859L92.8988 79.4672L94.305 76.1297C94.3675 75.9797 94.4645 75.8672 94.596 75.7922C94.7275 75.7172 94.8618 75.6797 94.9988 75.6797C95.1358 75.6797 95.27 75.7172 95.4015 75.7922C95.533 75.8672 95.63 75.9797 95.6925 76.1297L97.0988 79.4672L100.736 79.7859C100.911 79.8109 101.049 79.8672 101.149 79.9547C101.249 80.0422 101.324 80.1547 101.374 80.2922C101.424 80.4297 101.433 80.5704 101.402 80.7144C101.371 80.8584 101.293 80.9864 101.168 81.0984L98.4113 83.4797L99.2363 87.0234C99.2738 87.1859 99.2613 87.3329 99.1988 87.4644C99.1363 87.5959 99.0488 87.7052 98.9363 87.7922C98.8238 87.8792 98.6925 87.9292 98.5425 87.9422C98.3925 87.9552 98.2488 87.9177 98.1113 87.8297L94.9988 85.9547Z" fill="#404655"/>
                        <path d="M116.999 85.9547L113.886 87.8297C113.749 87.9172 113.605 87.9547 113.455 87.9422C113.305 87.9297 113.174 87.8797 113.061 87.7922C112.949 87.7047 112.861 87.5954 112.799 87.4644C112.736 87.3334 112.724 87.1864 112.761 87.0234L113.586 83.4797L110.83 81.0984C110.705 80.9859 110.627 80.8577 110.596 80.7137C110.565 80.5697 110.574 80.4292 110.624 80.2922C110.673 80.1552 110.748 80.0427 110.849 79.9547C110.949 79.8667 111.087 79.8104 111.261 79.7859L114.899 79.4672L116.305 76.1297C116.368 75.9797 116.465 75.8672 116.596 75.7922C116.728 75.7172 116.862 75.6797 116.999 75.6797C117.136 75.6797 117.27 75.7172 117.402 75.7922C117.533 75.8672 117.63 75.9797 117.693 76.1297L119.099 79.4672L122.736 79.7859C122.911 79.8109 123.049 79.8672 123.149 79.9547C123.249 80.0422 123.324 80.1547 123.374 80.2922C123.424 80.4297 123.433 80.5704 123.402 80.7144C123.371 80.8584 123.293 80.9864 123.168 81.0984L120.411 83.4797L121.236 87.0234C121.274 87.1859 121.261 87.3329 121.199 87.4644C121.136 87.5959 121.049 87.7052 120.936 87.7922C120.824 87.8792 120.693 87.9292 120.543 87.9422C120.393 87.9552 120.249 87.9177 120.111 87.8297L116.999 85.9547Z" fill="#404655"/>
                        <path d="M138.999 85.9547L135.886 87.8297C135.749 87.9172 135.605 87.9547 135.455 87.9422C135.305 87.9297 135.174 87.8797 135.061 87.7922C134.949 87.7047 134.861 87.5954 134.799 87.4644C134.736 87.3334 134.724 87.1864 134.761 87.0234L135.586 83.4797L132.83 81.0984C132.705 80.9859 132.627 80.8577 132.596 80.7137C132.565 80.5697 132.574 80.4292 132.624 80.2922C132.673 80.1552 132.748 80.0427 132.849 79.9547C132.949 79.8667 133.087 79.8104 133.261 79.7859L136.899 79.4672L138.305 76.1297C138.368 75.9797 138.465 75.8672 138.596 75.7922C138.728 75.7172 138.862 75.6797 138.999 75.6797C139.136 75.6797 139.27 75.7172 139.402 75.7922C139.533 75.8672 139.63 75.9797 139.693 76.1297L141.099 79.4672L144.736 79.7859C144.911 79.8109 145.049 79.8672 145.149 79.9547C145.249 80.0422 145.324 80.1547 145.374 80.2922C145.424 80.4297 145.433 80.5704 145.402 80.7144C145.371 80.8584 145.293 80.9864 145.168 81.0984L142.411 83.4797L143.236 87.0234C143.274 87.1859 143.261 87.3329 143.199 87.4644C143.136 87.5959 143.049 87.7052 142.936 87.7922C142.824 87.8792 142.693 87.9292 142.543 87.9422C142.393 87.9552 142.249 87.9177 142.111 87.8297L138.999 85.9547Z" fill="#404655"/>
                        <g filter="url(#filter0_d_16980_14545)">
                        <rect x="42" y="109" width="264" height="15" rx="7.5" fill="white"/>
                        </g>
                        <g filter="url(#filter1_d_16980_14545)">
                        <rect x="42" y="132" width="174" height="15" rx="7.5" fill="white"/>
                        </g>
                        <g filter="url(#filter2_d_16980_14545)">
                        <rect x="42" y="165" width="38" height="38" rx="19" fill="white" shape-rendering="crispEdges"/>
                        <path d="M60.9961 185.002C63.3921 185.002 65.5711 185.696 67.1741 186.673C67.9741 187.163 68.6581 187.738 69.1521 188.363C69.6381 188.979 69.9961 189.715 69.9961 190.502C69.9961 191.347 69.5851 192.013 68.9931 192.488C68.4331 192.938 67.6941 193.236 66.9091 193.444C65.3311 193.861 63.2251 194.002 60.9961 194.002C58.7671 194.002 56.6611 193.862 55.0831 193.444C54.2981 193.236 53.5591 192.938 52.9991 192.488C52.4061 192.012 51.9961 191.347 51.9961 190.502C51.9961 189.715 52.3541 188.979 52.8401 188.363C53.3341 187.738 54.0171 187.163 54.8181 186.673C56.4211 185.696 58.6011 185.002 60.9961 185.002Z" fill="#404655"/>
                        <path opacity="0.3" d="M60.9949 174.002C64.8439 174.002 67.2499 178.169 65.3249 181.502C64.886 182.262 64.2549 182.893 63.4948 183.332C62.7347 183.771 61.8725 184.002 60.9949 184.002C57.1459 184.002 54.7399 179.835 56.6649 176.502C57.1037 175.742 57.7349 175.111 58.4949 174.672C59.255 174.233 60.1172 174.002 60.9949 174.002Z" fill="#404655"/>
                        </g>
                        <g filter="url(#filter3_d_16980_14545)">
                        <path d="M92 175.5C92 172.186 94.6863 169.5 98 169.5H162C165.314 169.5 168 172.186 168 175.5C168 178.814 165.314 181.5 162 181.5H98C94.6863 181.5 92 178.814 92 175.5Z" fill="white"/>
                        </g>
                        <g filter="url(#filter4_d_16980_14545)">
                        <rect x="92" y="189.5" width="144" height="9" rx="4.5" fill="white"/>
                        </g>
                        <path d="M298.392 81C296.995 81 295.914 80.5556 295.149 79.6667C294.383 78.7778 294 77.5614 294 76.0175C294 73.7719 294.631 71.7135 295.892 69.8421C297.153 67.9708 298.955 66.3567 301.297 65L302.851 67.9474C300.374 69.538 298.932 71.2222 298.527 73L299.068 72.9298C300.059 72.9298 300.892 73.3041 301.568 74.0526C302.243 74.7544 302.581 75.6199 302.581 76.6491C302.581 77.9591 302.198 79.0117 301.432 79.807C300.667 80.6023 299.653 81 298.392 81ZM309.541 81C308.144 81 307.063 80.5556 306.297 79.6667C305.532 78.7778 305.149 77.5614 305.149 76.0175C305.149 73.7719 305.779 71.7135 307.041 69.8421C308.302 67.9708 310.104 66.3567 312.446 65L314 67.9474C311.523 69.5848 310.081 71.269 309.676 73L310.216 72.9298C311.207 72.9298 312.041 73.3041 312.716 74.0526C313.392 74.7544 313.73 75.6199 313.73 76.6491C313.73 77.9591 313.347 79.0117 312.581 79.807C311.815 80.6023 310.802 81 309.541 81Z" fill="#404655"/>
                        <defs>
                        <filter id="filter0_d_16980_14545" x="41" y="109" width="266" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14545"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14545" result="shape"/>
                        </filter>
                        <filter id="filter1_d_16980_14545" x="41" y="132" width="176" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14545"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14545" result="shape"/>
                        </filter>
                        <filter id="filter2_d_16980_14545" x="41.1739" y="165" width="39.6522" height="40.4783" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1.65217"/>
                        <feGaussianBlur stdDeviation="0.413043"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14545"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14545" result="shape"/>
                        </filter>
                        <filter id="filter3_d_16980_14545" x="91" y="169.5" width="78" height="15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14545"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14545" result="shape"/>
                        </filter>
                        <filter id="filter4_d_16980_14545" x="91" y="189.5" width="146" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14545"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14545" result="shape"/>
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
                        <rect x="24" y="55" width="300" height="166" rx="6" fill="white" fill-opacity="0.4"/>
                        <g filter="url(#filter0_d_16980_14572)">
                        <rect x="42" y="73" width="38" height="38" rx="4" fill="white" shape-rendering="crispEdges"/>
                        <path d="M60.9961 93.002C63.3921 93.002 65.5711 93.696 67.1741 94.673C67.9741 95.163 68.6581 95.738 69.1521 96.363C69.6381 96.979 69.9961 97.715 69.9961 98.502C69.9961 99.347 69.5851 100.013 68.9931 100.488C68.4331 100.938 67.6941 101.236 66.9091 101.444C65.3311 101.861 63.2251 102.002 60.9961 102.002C58.7671 102.002 56.6611 101.862 55.0831 101.444C54.2981 101.236 53.5591 100.938 52.9991 100.488C52.4061 100.012 51.9961 99.347 51.9961 98.502C51.9961 97.715 52.3541 96.979 52.8401 96.363C53.3341 95.738 54.0171 95.163 54.8181 94.673C56.4211 93.696 58.6011 93.002 60.9961 93.002Z" fill="#404655"/>
                        <path opacity="0.3" d="M60.9949 82.002C64.8439 82.002 67.2499 86.169 65.3249 89.502C64.886 90.262 64.2549 90.8932 63.4948 91.332C62.7347 91.7709 61.8725 92.0019 60.9949 92.002C57.1459 92.002 54.7399 87.835 56.6649 84.502C57.1037 83.7419 57.7349 83.1107 58.4949 82.6719C59.255 82.233 60.1172 82.002 60.9949 82.002Z" fill="#404655"/>
                        </g>
                        <g filter="url(#filter1_d_16980_14572)">
                        <path d="M92 83.5C92 80.1863 94.6863 77.5 98 77.5H162C165.314 77.5 168 80.1863 168 83.5C168 86.8137 165.314 89.5 162 89.5H98C94.6863 89.5 92 86.8137 92 83.5Z" fill="white"/>
                        </g>
                        <g filter="url(#filter2_d_16980_14572)">
                        <rect x="92" y="97.5" width="144" height="9" rx="4.5" fill="white"/>
                        </g>
                        <path d="M50.9988 141.955L47.8863 143.83C47.7488 143.917 47.605 143.955 47.455 143.942C47.305 143.93 47.1738 143.88 47.0613 143.792C46.9488 143.705 46.8613 143.595 46.7988 143.464C46.7363 143.333 46.7238 143.186 46.7613 143.023L47.5863 139.48L44.83 137.098C44.705 136.986 44.627 136.858 44.596 136.714C44.565 136.57 44.5743 136.429 44.6238 136.292C44.6733 136.155 44.7483 136.043 44.8488 135.955C44.9493 135.867 45.0868 135.81 45.2613 135.786L48.8988 135.467L50.305 132.13C50.3675 131.98 50.4645 131.867 50.596 131.792C50.7275 131.717 50.8618 131.68 50.9988 131.68C51.1358 131.68 51.27 131.717 51.4015 131.792C51.533 131.867 51.63 131.98 51.6925 132.13L53.0988 135.467L56.7363 135.786C56.9113 135.811 57.0488 135.867 57.1488 135.955C57.2488 136.042 57.3238 136.155 57.3738 136.292C57.4238 136.43 57.4333 136.57 57.4023 136.714C57.3713 136.858 57.293 136.986 57.1675 137.098L54.4113 139.48L55.2363 143.023C55.2738 143.186 55.2613 143.333 55.1988 143.464C55.1363 143.596 55.0488 143.705 54.9363 143.792C54.8238 143.879 54.6925 143.929 54.5425 143.942C54.3925 143.955 54.2488 143.918 54.1113 143.83L50.9988 141.955Z" fill="#404655"/>
                        <path d="M72.9988 141.955L69.8863 143.83C69.7488 143.917 69.605 143.955 69.455 143.942C69.305 143.93 69.1738 143.88 69.0613 143.792C68.9488 143.705 68.8613 143.595 68.7988 143.464C68.7363 143.333 68.7238 143.186 68.7613 143.023L69.5863 139.48L66.83 137.098C66.705 136.986 66.627 136.858 66.596 136.714C66.565 136.57 66.5743 136.429 66.6238 136.292C66.6733 136.155 66.7483 136.043 66.8488 135.955C66.9493 135.867 67.0868 135.81 67.2613 135.786L70.8988 135.467L72.305 132.13C72.3675 131.98 72.4645 131.867 72.596 131.792C72.7275 131.717 72.8618 131.68 72.9988 131.68C73.1358 131.68 73.27 131.717 73.4015 131.792C73.533 131.867 73.63 131.98 73.6925 132.13L75.0988 135.467L78.7363 135.786C78.9113 135.811 79.0488 135.867 79.1488 135.955C79.2488 136.042 79.3238 136.155 79.3738 136.292C79.4238 136.43 79.4333 136.57 79.4023 136.714C79.3713 136.858 79.293 136.986 79.1675 137.098L76.4113 139.48L77.2363 143.023C77.2738 143.186 77.2613 143.333 77.1988 143.464C77.1363 143.596 77.0488 143.705 76.9363 143.792C76.8238 143.879 76.6925 143.929 76.5425 143.942C76.3925 143.955 76.2488 143.918 76.1113 143.83L72.9988 141.955Z" fill="#404655"/>
                        <path d="M94.9988 141.955L91.8863 143.83C91.7488 143.917 91.605 143.955 91.455 143.942C91.305 143.93 91.1738 143.88 91.0613 143.792C90.9488 143.705 90.8613 143.595 90.7988 143.464C90.7363 143.333 90.7238 143.186 90.7613 143.023L91.5863 139.48L88.83 137.098C88.705 136.986 88.627 136.858 88.596 136.714C88.565 136.57 88.5743 136.429 88.6238 136.292C88.6733 136.155 88.7483 136.043 88.8488 135.955C88.9493 135.867 89.0868 135.81 89.2613 135.786L92.8988 135.467L94.305 132.13C94.3675 131.98 94.4645 131.867 94.596 131.792C94.7275 131.717 94.8618 131.68 94.9988 131.68C95.1358 131.68 95.27 131.717 95.4015 131.792C95.533 131.867 95.63 131.98 95.6925 132.13L97.0988 135.467L100.736 135.786C100.911 135.811 101.049 135.867 101.149 135.955C101.249 136.042 101.324 136.155 101.374 136.292C101.424 136.43 101.433 136.57 101.402 136.714C101.371 136.858 101.293 136.986 101.168 137.098L98.4113 139.48L99.2363 143.023C99.2738 143.186 99.2613 143.333 99.1988 143.464C99.1363 143.596 99.0488 143.705 98.9363 143.792C98.8238 143.879 98.6925 143.929 98.5425 143.942C98.3925 143.955 98.2488 143.918 98.1113 143.83L94.9988 141.955Z" fill="#404655"/>
                        <path d="M116.999 141.955L113.886 143.83C113.749 143.917 113.605 143.955 113.455 143.942C113.305 143.93 113.174 143.88 113.061 143.792C112.949 143.705 112.861 143.595 112.799 143.464C112.736 143.333 112.724 143.186 112.761 143.023L113.586 139.48L110.83 137.098C110.705 136.986 110.627 136.858 110.596 136.714C110.565 136.57 110.574 136.429 110.624 136.292C110.673 136.155 110.748 136.043 110.849 135.955C110.949 135.867 111.087 135.81 111.261 135.786L114.899 135.467L116.305 132.13C116.368 131.98 116.465 131.867 116.596 131.792C116.728 131.717 116.862 131.68 116.999 131.68C117.136 131.68 117.27 131.717 117.402 131.792C117.533 131.867 117.63 131.98 117.693 132.13L119.099 135.467L122.736 135.786C122.911 135.811 123.049 135.867 123.149 135.955C123.249 136.042 123.324 136.155 123.374 136.292C123.424 136.43 123.433 136.57 123.402 136.714C123.371 136.858 123.293 136.986 123.168 137.098L120.411 139.48L121.236 143.023C121.274 143.186 121.261 143.333 121.199 143.464C121.136 143.596 121.049 143.705 120.936 143.792C120.824 143.879 120.693 143.929 120.543 143.942C120.393 143.955 120.249 143.918 120.111 143.83L116.999 141.955Z" fill="#404655"/>
                        <path d="M138.999 141.955L135.886 143.83C135.749 143.917 135.605 143.955 135.455 143.942C135.305 143.93 135.174 143.88 135.061 143.792C134.949 143.705 134.861 143.595 134.799 143.464C134.736 143.333 134.724 143.186 134.761 143.023L135.586 139.48L132.83 137.098C132.705 136.986 132.627 136.858 132.596 136.714C132.565 136.57 132.574 136.429 132.624 136.292C132.673 136.155 132.748 136.043 132.849 135.955C132.949 135.867 133.087 135.81 133.261 135.786L136.899 135.467L138.305 132.13C138.368 131.98 138.465 131.867 138.596 131.792C138.728 131.717 138.862 131.68 138.999 131.68C139.136 131.68 139.27 131.717 139.402 131.792C139.533 131.867 139.63 131.98 139.693 132.13L141.099 135.467L144.736 135.786C144.911 135.811 145.049 135.867 145.149 135.955C145.249 136.042 145.324 136.155 145.374 136.292C145.424 136.43 145.433 136.57 145.402 136.714C145.371 136.858 145.293 136.986 145.168 137.098L142.411 139.48L143.236 143.023C143.274 143.186 143.261 143.333 143.199 143.464C143.136 143.596 143.049 143.705 142.936 143.792C142.824 143.879 142.693 143.929 142.543 143.942C142.393 143.955 142.249 143.918 142.111 143.83L138.999 141.955Z" fill="#404655"/>
                        <g filter="url(#filter3_d_16980_14572)">
                        <rect x="42" y="165" width="264" height="15" rx="7.5" fill="white"/>
                        </g>
                        <g filter="url(#filter4_d_16980_14572)">
                        <rect x="42" y="188" width="174" height="15" rx="7.5" fill="white"/>
                        </g>
                        <path d="M298.392 81C296.995 81 295.914 80.5556 295.149 79.6667C294.383 78.7778 294 77.5614 294 76.0175C294 73.7719 294.631 71.7135 295.892 69.8421C297.153 67.9708 298.955 66.3567 301.297 65L302.851 67.9474C300.374 69.538 298.932 71.2222 298.527 73L299.068 72.9298C300.059 72.9298 300.892 73.3041 301.568 74.0526C302.243 74.7544 302.581 75.6199 302.581 76.6491C302.581 77.9591 302.198 79.0117 301.432 79.807C300.667 80.6023 299.653 81 298.392 81ZM309.541 81C308.144 81 307.063 80.5556 306.297 79.6667C305.532 78.7778 305.149 77.5614 305.149 76.0175C305.149 73.7719 305.779 71.7135 307.041 69.8421C308.302 67.9708 310.104 66.3567 312.446 65L314 67.9474C311.523 69.5848 310.081 71.269 309.676 73L310.216 72.9298C311.207 72.9298 312.041 73.3041 312.716 74.0526C313.392 74.7544 313.73 75.6199 313.73 76.6491C313.73 77.9591 313.347 79.0117 312.581 79.807C311.815 80.6023 310.802 81 309.541 81Z" fill="#404655"/>
                        <defs>
                        <filter id="filter0_d_16980_14572" x="41.1739" y="73" width="39.6522" height="40.4783" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1.65217"/>
                        <feGaussianBlur stdDeviation="0.413043"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14572"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14572" result="shape"/>
                        </filter>
                        <filter id="filter1_d_16980_14572" x="91" y="77.5" width="78" height="15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14572"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14572" result="shape"/>
                        </filter>
                        <filter id="filter2_d_16980_14572" x="91" y="97.5" width="146" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14572"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14572" result="shape"/>
                        </filter>
                        <filter id="filter3_d_16980_14572" x="41" y="165" width="266" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14572"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14572" result="shape"/>
                        </filter>
                        <filter id="filter4_d_16980_14572" x="41" y="188" width="176" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_16980_14572"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_16980_14572" result="shape"/>
                        </filter>
                        </defs>
                    </svg>`,
        },
        {
            value: 'preset-5',
            label: __('Preset 5', 'frontis-blocks'),
            attributes: Object.entries(presetStyles['preset-5']).map(([label, value]) => ({ label, value })),
            icon: `<svg width="348" height="276" viewBox="0 0 348 276" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0H336C342.627 0 348 5.37258 348 12V264C348 270.627 342.627 276 336 276H12C5.37259 276 0 270.627 0 264V12Z" fill="#EBEBEB"/>
                        <rect x="24" y="56" width="300" height="164" rx="6" fill="white"/>
                        <path d="M46.3919 90C44.9955 90 43.9144 89.5556 43.1486 88.6667C42.3829 87.7778 42 86.5614 42 85.0175C42 82.7719 42.6306 80.7135 43.8919 78.8421C45.1532 76.9708 46.955 75.3567 49.2973 74L50.8514 76.9474C48.3739 78.538 46.9324 80.2222 46.527 82L47.0676 81.9298C48.0586 81.9298 48.8919 82.3041 49.5676 83.0526C50.2432 83.7544 50.5811 84.6199 50.5811 85.6491C50.5811 86.9591 50.1982 88.0117 49.4324 88.807C48.6667 89.6023 47.6532 90 46.3919 90ZM57.5405 90C56.1441 90 55.0631 89.5556 54.2973 88.6667C53.5315 87.7778 53.1486 86.5614 53.1486 85.0175C53.1486 82.7719 53.7793 80.7135 55.0405 78.8421C56.3018 76.9708 58.1036 75.3567 60.4459 74L62 76.9474C59.5225 78.5848 58.0811 80.269 57.6757 82L58.2162 81.9298C59.2072 81.9298 60.0405 82.3041 60.7162 83.0526C61.3919 83.7544 61.7297 84.6199 61.7297 85.6491C61.7297 86.9591 61.3468 88.0117 60.5811 88.807C59.8153 89.6023 58.8018 90 57.5405 90Z" fill="#404655"/>
                        <g filter="url(#filter0_d_18024_5172)">
                        <rect x="42" y="108" width="264" height="15" rx="7.5" fill="#E1E3E8"/>
                        </g>
                        <g filter="url(#filter1_d_18024_5172)">
                        <rect x="42" y="131" width="174" height="15" rx="7.5" fill="#E1E3E8"/>
                        </g>
                        <g filter="url(#filter2_d_18024_5172)">
                        <rect x="42" y="164" width="38" height="38" rx="19" fill="#E1E3E8" shape-rendering="crispEdges"/>
                        <path d="M60.9961 184.002C63.3921 184.002 65.5711 184.696 67.1741 185.673C67.9741 186.163 68.6581 186.738 69.1521 187.363C69.6381 187.979 69.9961 188.715 69.9961 189.502C69.9961 190.347 69.5851 191.013 68.9931 191.488C68.4331 191.938 67.6941 192.236 66.9091 192.444C65.3311 192.861 63.2251 193.002 60.9961 193.002C58.7671 193.002 56.6611 192.862 55.0831 192.444C54.2981 192.236 53.5591 191.938 52.9991 191.488C52.4061 191.012 51.9961 190.347 51.9961 189.502C51.9961 188.715 52.3541 187.979 52.8401 187.363C53.3341 186.738 54.0171 186.163 54.8181 185.673C56.4211 184.696 58.6011 184.002 60.9961 184.002Z" fill="#404655"/>
                        <path opacity="0.3" d="M60.9949 173.002C64.8439 173.002 67.2499 177.169 65.3249 180.502C64.886 181.262 64.2549 181.893 63.4948 182.332C62.7347 182.771 61.8725 183.002 60.9949 183.002C57.1459 183.002 54.7399 178.835 56.6649 175.502C57.1037 174.742 57.7349 174.111 58.4949 173.672C59.255 173.233 60.1172 173.002 60.9949 173.002Z" fill="#404655"/>
                        </g>
                        <g filter="url(#filter3_d_18024_5172)">
                        <path d="M92 183C92 179.686 94.6863 177 98 177H140C143.314 177 146 179.686 146 183C146 186.314 143.314 189 140 189H98C94.6863 189 92 186.314 92 183Z" fill="#E1E3E8"/>
                        </g>
                        <path d="M208.999 186.955L205.886 188.83C205.749 188.917 205.605 188.955 205.455 188.942C205.305 188.93 205.174 188.88 205.061 188.792C204.949 188.705 204.861 188.595 204.799 188.464C204.736 188.333 204.724 188.186 204.761 188.023L205.586 184.48L202.83 182.098C202.705 181.986 202.627 181.858 202.596 181.714C202.565 181.57 202.574 181.429 202.624 181.292C202.673 181.155 202.748 181.043 202.849 180.955C202.949 180.867 203.087 180.81 203.261 180.786L206.899 180.467L208.305 177.13C208.368 176.98 208.465 176.867 208.596 176.792C208.728 176.717 208.862 176.68 208.999 176.68C209.136 176.68 209.27 176.717 209.402 176.792C209.533 176.867 209.63 176.98 209.693 177.13L211.099 180.467L214.736 180.786C214.911 180.811 215.049 180.867 215.149 180.955C215.249 181.042 215.324 181.155 215.374 181.292C215.424 181.43 215.433 181.57 215.402 181.714C215.371 181.858 215.293 181.986 215.168 182.098L212.411 184.48L213.236 188.023C213.274 188.186 213.261 188.333 213.199 188.464C213.136 188.596 213.049 188.705 212.936 188.792C212.824 188.879 212.693 188.929 212.543 188.942C212.393 188.955 212.249 188.918 212.111 188.83L208.999 186.955Z" fill="#404655"/>
                        <path d="M230.999 186.955L227.886 188.83C227.749 188.917 227.605 188.955 227.455 188.942C227.305 188.93 227.174 188.88 227.061 188.792C226.949 188.705 226.861 188.595 226.799 188.464C226.736 188.333 226.724 188.186 226.761 188.023L227.586 184.48L224.83 182.098C224.705 181.986 224.627 181.858 224.596 181.714C224.565 181.57 224.574 181.429 224.624 181.292C224.673 181.155 224.748 181.043 224.849 180.955C224.949 180.867 225.087 180.81 225.261 180.786L228.899 180.467L230.305 177.13C230.368 176.98 230.465 176.867 230.596 176.792C230.728 176.717 230.862 176.68 230.999 176.68C231.136 176.68 231.27 176.717 231.402 176.792C231.533 176.867 231.63 176.98 231.693 177.13L233.099 180.467L236.736 180.786C236.911 180.811 237.049 180.867 237.149 180.955C237.249 181.042 237.324 181.155 237.374 181.292C237.424 181.43 237.433 181.57 237.402 181.714C237.371 181.858 237.293 181.986 237.168 182.098L234.411 184.48L235.236 188.023C235.274 188.186 235.261 188.333 235.199 188.464C235.136 188.596 235.049 188.705 234.936 188.792C234.824 188.879 234.693 188.929 234.543 188.942C234.393 188.955 234.249 188.918 234.111 188.83L230.999 186.955Z" fill="#404655"/>
                        <path d="M252.999 186.955L249.886 188.83C249.749 188.917 249.605 188.955 249.455 188.942C249.305 188.93 249.174 188.88 249.061 188.792C248.949 188.705 248.861 188.595 248.799 188.464C248.736 188.333 248.724 188.186 248.761 188.023L249.586 184.48L246.83 182.098C246.705 181.986 246.627 181.858 246.596 181.714C246.565 181.57 246.574 181.429 246.624 181.292C246.673 181.155 246.748 181.043 246.849 180.955C246.949 180.867 247.087 180.81 247.261 180.786L250.899 180.467L252.305 177.13C252.368 176.98 252.465 176.867 252.596 176.792C252.728 176.717 252.862 176.68 252.999 176.68C253.136 176.68 253.27 176.717 253.402 176.792C253.533 176.867 253.63 176.98 253.693 177.13L255.099 180.467L258.736 180.786C258.911 180.811 259.049 180.867 259.149 180.955C259.249 181.042 259.324 181.155 259.374 181.292C259.424 181.43 259.433 181.57 259.402 181.714C259.371 181.858 259.293 181.986 259.168 182.098L256.411 184.48L257.236 188.023C257.274 188.186 257.261 188.333 257.199 188.464C257.136 188.596 257.049 188.705 256.936 188.792C256.824 188.879 256.693 188.929 256.543 188.942C256.393 188.955 256.249 188.918 256.111 188.83L252.999 186.955Z" fill="#404655"/>
                        <path d="M274.999 186.955L271.886 188.83C271.749 188.917 271.605 188.955 271.455 188.942C271.305 188.93 271.174 188.88 271.061 188.792C270.949 188.705 270.861 188.595 270.799 188.464C270.736 188.333 270.724 188.186 270.761 188.023L271.586 184.48L268.83 182.098C268.705 181.986 268.627 181.858 268.596 181.714C268.565 181.57 268.574 181.429 268.624 181.292C268.673 181.155 268.748 181.043 268.849 180.955C268.949 180.867 269.087 180.81 269.261 180.786L272.899 180.467L274.305 177.13C274.368 176.98 274.465 176.867 274.596 176.792C274.728 176.717 274.862 176.68 274.999 176.68C275.136 176.68 275.27 176.717 275.402 176.792C275.533 176.867 275.63 176.98 275.693 177.13L277.099 180.467L280.736 180.786C280.911 180.811 281.049 180.867 281.149 180.955C281.249 181.042 281.324 181.155 281.374 181.292C281.424 181.43 281.433 181.57 281.402 181.714C281.371 181.858 281.293 181.986 281.168 182.098L278.411 184.48L279.236 188.023C279.274 188.186 279.261 188.333 279.199 188.464C279.136 188.596 279.049 188.705 278.936 188.792C278.824 188.879 278.693 188.929 278.543 188.942C278.393 188.955 278.249 188.918 278.111 188.83L274.999 186.955Z" fill="#404655"/>
                        <path d="M296.999 186.955L293.886 188.83C293.749 188.917 293.605 188.955 293.455 188.942C293.305 188.93 293.174 188.88 293.061 188.792C292.949 188.705 292.861 188.595 292.799 188.464C292.736 188.333 292.724 188.186 292.761 188.023L293.586 184.48L290.83 182.098C290.705 181.986 290.627 181.858 290.596 181.714C290.565 181.57 290.574 181.429 290.624 181.292C290.673 181.155 290.748 181.043 290.849 180.955C290.949 180.867 291.087 180.81 291.261 180.786L294.899 180.467L296.305 177.13C296.368 176.98 296.465 176.867 296.596 176.792C296.728 176.717 296.862 176.68 296.999 176.68C297.136 176.68 297.27 176.717 297.402 176.792C297.533 176.867 297.63 176.98 297.693 177.13L299.099 180.467L302.736 180.786C302.911 180.811 303.049 180.867 303.149 180.955C303.249 181.042 303.324 181.155 303.374 181.292C303.424 181.43 303.433 181.57 303.402 181.714C303.371 181.858 303.293 181.986 303.168 182.098L300.411 184.48L301.236 188.023C301.274 188.186 301.261 188.333 301.199 188.464C301.136 188.596 301.049 188.705 300.936 188.792C300.824 188.879 300.693 188.929 300.543 188.942C300.393 188.955 300.249 188.918 300.111 188.83L296.999 186.955Z" fill="#404655"/>
                        <defs>
                        <filter id="filter0_d_18024_5172" x="41" y="108" width="266" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18024_5172"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18024_5172" result="shape"/>
                        </filter>
                        <filter id="filter1_d_18024_5172" x="41" y="131" width="176" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18024_5172"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18024_5172" result="shape"/>
                        </filter>
                        <filter id="filter2_d_18024_5172" x="41.1739" y="164" width="39.6522" height="40.4783" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="1.65217"/>
                        <feGaussianBlur stdDeviation="0.413043"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18024_5172"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18024_5172" result="shape"/>
                        </filter>
                        <filter id="filter3_d_18024_5172" x="91" y="177" width="56" height="15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="2"/>
                        <feGaussianBlur stdDeviation="0.5"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0 0.565993 0 0 0 0.05 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_18024_5172"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_18024_5172" result="shape"/>
                        </filter>
                        </defs>
                    </svg>`,
        },
    ];

    /** Start Testimonial Rating Icon Margin */
    const testimonialRatingIconMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (TestimonialRatingIconMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        TestimonialRatingIconMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        TestimonialRatingIconMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        TestimonialRatingIconMarginMobile: {
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
                    setAttributes({ TestimonialRatingIconMarginDesktop: { ...TestimonialRatingIconMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ TestimonialRatingIconMarginTablet: { ...TestimonialRatingIconMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ TestimonialRatingIconMarginMobile: { ...TestimonialRatingIconMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const testimonialRatingIconMarginLinkBtn = () => {
        setAttributes({
            TestimonialRatingIconMarginLink: !TestimonialRatingIconMarginLink
        });
    };

    const testimonialRatingIconMarginUnitsHandler = (unit) => {
        setAttributes({
            TestimonialRatingIconMarginUnits: {
                ...TestimonialRatingIconMarginUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default margin for Testimonial Rating Icon */
    const testimonialRatingIconDesktopMargin = `${TestimonialRatingIconMarginDesktop?.top}${TestimonialRatingIconMarginUnits?.Desktop} ${TestimonialRatingIconMarginDesktop?.right}${TestimonialRatingIconMarginUnits?.Desktop} ${TestimonialRatingIconMarginDesktop?.bottom}${TestimonialRatingIconMarginUnits?.Desktop} ${TestimonialRatingIconMarginDesktop?.left}${TestimonialRatingIconMarginUnits?.Desktop}`;
    const testimonialRatingIconTabletMargin = `${TestimonialRatingIconMarginTablet?.top}${TestimonialRatingIconMarginUnits?.Tablet} ${TestimonialRatingIconMarginTablet?.right}${TestimonialRatingIconMarginUnits?.Tablet} ${TestimonialRatingIconMarginTablet?.bottom}${TestimonialRatingIconMarginUnits?.Tablet} ${TestimonialRatingIconMarginTablet?.left}${TestimonialRatingIconMarginUnits?.Tablet}`;
    const testimonialRatingIconMobileMargin = `${TestimonialRatingIconMarginMobile?.top}${TestimonialRatingIconMarginUnits?.Mobile} ${TestimonialRatingIconMarginMobile?.right}${TestimonialRatingIconMarginUnits?.Mobile} ${TestimonialRatingIconMarginMobile?.bottom}${TestimonialRatingIconMarginUnits?.Mobile} ${TestimonialRatingIconMarginMobile?.left}${TestimonialRatingIconMarginUnits?.Mobile}`;
    /** End Testimonial Rating Icon Margin */


    /** Start Testimonial Title Margin */
    const testimonialTitleMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (TestimonialTitleMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        TestimonialTitleMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        TestimonialTitleMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        TestimonialTitleMarginMobile: {
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
                    setAttributes({ TestimonialTitleMarginDesktop: { ...TestimonialTitleMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ TestimonialTitleMarginTablet: { ...TestimonialTitleMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ TestimonialTitleMarginMobile: { ...TestimonialTitleMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const testimonialTitleMarginLinkBtn = () => {
        setAttributes({
            TestimonialTitleMarginLink: !TestimonialTitleMarginLink
        });
    };

    const testimonialTitleMarginUnitsHandler = (unit) => {
        setAttributes({
            TestimonialTitleMarginUnits: {
                ...TestimonialTitleMarginUnits,
                [deviceType]: unit
            }
        });
    };

    const testimonialTitleDesktopMargin = `${TestimonialTitleMarginDesktop?.top}${TestimonialTitleMarginUnits?.Desktop} ${TestimonialTitleMarginDesktop?.right}${TestimonialTitleMarginUnits?.Desktop} ${TestimonialTitleMarginDesktop?.bottom}${TestimonialTitleMarginUnits?.Desktop} ${TestimonialTitleMarginDesktop?.left}${TestimonialTitleMarginUnits?.Desktop}`;
    const testimonialTitleTabletMargin = `${TestimonialTitleMarginTablet?.top}${TestimonialTitleMarginUnits?.Tablet} ${TestimonialTitleMarginTablet?.right}${TestimonialTitleMarginUnits?.Tablet} ${TestimonialTitleMarginTablet?.bottom}${TestimonialTitleMarginUnits?.Tablet} ${TestimonialTitleMarginTablet?.left}${TestimonialTitleMarginUnits?.Tablet}`;
    const testimonialTitleMobileMargin = `${TestimonialTitleMarginMobile?.top}${TestimonialTitleMarginUnits?.Mobile} ${TestimonialTitleMarginMobile?.right}${TestimonialTitleMarginUnits?.Mobile} ${TestimonialTitleMarginMobile?.bottom}${TestimonialTitleMarginUnits?.Mobile} ${TestimonialTitleMarginMobile?.left}${TestimonialTitleMarginUnits?.Mobile}`;
    /** End Testimonial Title Margin */


    /** Start Testimonial Desc Margin */
    const testimonialDescMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (TestimonialDescMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        TestimonialDescMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        TestimonialDescMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        TestimonialDescMarginMobile: {
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
                    setAttributes({ TestimonialDescMarginDesktop: { ...TestimonialDescMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ TestimonialDescMarginTablet: { ...TestimonialDescMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ TestimonialDescMarginMobile: { ...TestimonialDescMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const testimonialDescMarginLinkBtn = () => {
        setAttributes({
            TestimonialDescMarginLink: !TestimonialDescMarginLink
        });
    };

    const testimonialDescMarginUnitsHandler = (unit) => {
        setAttributes({
            TestimonialDescMarginUnits: {
                ...TestimonialDescMarginUnits,
                [deviceType]: unit
            }
        });
    };

    const testimonialDescDesktopMargin = `${TestimonialDescMarginDesktop?.top}${TestimonialDescMarginUnits?.Desktop} ${TestimonialDescMarginDesktop?.right}${TestimonialDescMarginUnits?.Desktop} ${TestimonialDescMarginDesktop?.bottom}${TestimonialDescMarginUnits?.Desktop} ${TestimonialDescMarginDesktop?.left}${TestimonialDescMarginUnits?.Desktop}`;
    const testimonialDescTabletMargin = `${TestimonialDescMarginTablet?.top}${TestimonialDescMarginUnits?.Tablet} ${TestimonialDescMarginTablet?.right}${TestimonialDescMarginUnits?.Tablet} ${TestimonialDescMarginTablet?.bottom}${TestimonialDescMarginUnits?.Tablet} ${TestimonialDescMarginTablet?.left}${TestimonialDescMarginUnits?.Tablet}`;
    const testimonialDescMobileMargin = `${TestimonialDescMarginMobile?.top}${TestimonialDescMarginUnits?.Mobile} ${TestimonialDescMarginMobile?.right}${TestimonialDescMarginUnits?.Mobile} ${TestimonialDescMarginMobile?.bottom}${TestimonialDescMarginUnits?.Mobile} ${TestimonialDescMarginMobile?.left}${TestimonialDescMarginUnits?.Mobile}`;
    /** End Testimonial Desc Margin */


    /** Start Testimonial Image Margin */
    const testimonialImageMarginChange = (event, position) => {
        const value = event.target.value;
        if (TestimonialImageMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        TestimonialImageMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        TestimonialImageMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        TestimonialImageMarginMobile: {
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
                    setAttributes({ TestimonialImageMarginDesktop: { ...TestimonialImageMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ TestimonialImageMarginTablet: { ...TestimonialImageMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ TestimonialImageMarginMobile: { ...TestimonialImageMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const testimonialImageMarginToggle = () => {
        setAttributes({
            TestimonialImageMarginLink: !TestimonialImageMarginLink
        });
    };

    const testimonialImageMarginUnitChange = (unit) => {
        setAttributes({
            TestimonialImageMarginUnits: {
                ...TestimonialImageMarginUnits,
                [deviceType]: unit
            }
        });
    };

    const testimonialImageDesktopMargin = `${TestimonialImageMarginDesktop?.top}${TestimonialImageMarginUnits?.Desktop} ${TestimonialImageMarginDesktop?.right}${TestimonialImageMarginUnits?.Desktop} ${TestimonialImageMarginDesktop?.bottom}${TestimonialImageMarginUnits?.Desktop} ${TestimonialImageMarginDesktop?.left}${TestimonialImageMarginUnits?.Desktop}`;
    const testimonialImageTabletMargin = `${TestimonialImageMarginTablet?.top}${TestimonialImageMarginUnits?.Tablet} ${TestimonialImageMarginTablet?.right}${TestimonialImageMarginUnits?.Tablet} ${TestimonialImageMarginTablet?.bottom}${TestimonialImageMarginUnits?.Tablet} ${TestimonialImageMarginTablet?.left}${TestimonialImageMarginUnits?.Tablet}`;
    const testimonialImageMobileMargin = `${TestimonialImageMarginMobile?.top}${TestimonialImageMarginUnits?.Mobile} ${TestimonialImageMarginMobile?.right}${TestimonialImageMarginUnits?.Mobile} ${TestimonialImageMarginMobile?.bottom}${TestimonialImageMarginUnits?.Mobile} ${TestimonialImageMarginMobile?.left}${TestimonialImageMarginUnits?.Mobile}`;
    /** End Testimonial Image Margin */


    /** Start Testimonial Author Margin */
    const testimonialAuthorMarginChange = (event, position) => {
        const value = event.target.value;
        if (TestimonialAuthorMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        TestimonialAuthorMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        TestimonialAuthorMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        TestimonialAuthorMarginMobile: {
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
                    setAttributes({ TestimonialAuthorMarginDesktop: { ...TestimonialAuthorMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ TestimonialAuthorMarginTablet: { ...TestimonialAuthorMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ TestimonialAuthorMarginMobile: { ...TestimonialAuthorMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const testimonialAuthorMarginToggle = () => {
        setAttributes({
            TestimonialAuthorMarginLink: !TestimonialAuthorMarginLink
        });
    };

    const testimonialAuthorMarginUnitChange = (unit) => {
        setAttributes({
            TestimonialAuthorMarginUnits: {
                ...TestimonialAuthorMarginUnits,
                [deviceType]: unit
            }
        });
    };

    const testimonialAuthorDesktopMargin = `${TestimonialAuthorMarginDesktop?.top}${TestimonialAuthorMarginUnits?.Desktop} ${TestimonialAuthorMarginDesktop?.right}${TestimonialAuthorMarginUnits?.Desktop} ${TestimonialAuthorMarginDesktop?.bottom}${TestimonialAuthorMarginUnits?.Desktop} ${TestimonialAuthorMarginDesktop?.left}${TestimonialAuthorMarginUnits?.Desktop}`;
    const testimonialAuthorTabletMargin = `${TestimonialAuthorMarginTablet?.top}${TestimonialAuthorMarginUnits?.Tablet} ${TestimonialAuthorMarginTablet?.right}${TestimonialAuthorMarginUnits?.Tablet} ${TestimonialAuthorMarginTablet?.bottom}${TestimonialAuthorMarginUnits?.Tablet} ${TestimonialAuthorMarginTablet?.left}${TestimonialAuthorMarginUnits?.Tablet}`;
    const testimonialAuthorMobileMargin = `${TestimonialAuthorMarginMobile?.top}${TestimonialAuthorMarginUnits?.Mobile} ${TestimonialAuthorMarginMobile?.right}${TestimonialAuthorMarginUnits?.Mobile} ${TestimonialAuthorMarginMobile?.bottom}${TestimonialAuthorMarginUnits?.Mobile} ${TestimonialAuthorMarginMobile?.left}${TestimonialAuthorMarginUnits?.Mobile}`;
    /** End Testimonial Author Margin */


    /** Start Testimonial Designation Margin */
    const testimonialDesignationMarginChange = (event, position) => {
        const value = event.target.value;
        if (TestimonialDesignationMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        TestimonialDesignationMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        TestimonialDesignationMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        TestimonialDesignationMarginMobile: {
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
                    setAttributes({ TestimonialDesignationMarginDesktop: { ...TestimonialDesignationMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ TestimonialDesignationMarginTablet: { ...TestimonialDesignationMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ TestimonialDesignationMarginMobile: { ...TestimonialDesignationMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const testimonialDesignationMarginToggle = () => {
        setAttributes({
            TestimonialDesignationMarginLink: !TestimonialDesignationMarginLink
        });
    };

    const testimonialDesignationMarginUnitChange = (unit) => {
        setAttributes({
            TestimonialDesignationMarginUnits: {
                ...TestimonialDesignationMarginUnits,
                [deviceType]: unit
            }
        });
    };

    const testimonialDesignationDesktopMargin = `${TestimonialDesignationMarginDesktop?.top}${TestimonialDesignationMarginUnits?.Desktop} ${TestimonialDesignationMarginDesktop?.right}${TestimonialDesignationMarginUnits?.Desktop} ${TestimonialDesignationMarginDesktop?.bottom}${TestimonialDesignationMarginUnits?.Desktop} ${TestimonialDesignationMarginDesktop?.left}${TestimonialDesignationMarginUnits?.Desktop}`;
    const testimonialDesignationTabletMargin = `${TestimonialDesignationMarginTablet?.top}${TestimonialDesignationMarginUnits?.Tablet} ${TestimonialDesignationMarginTablet?.right}${TestimonialDesignationMarginUnits?.Tablet} ${TestimonialDesignationMarginTablet?.bottom}${TestimonialDesignationMarginUnits?.Tablet} ${TestimonialDesignationMarginTablet?.left}${TestimonialDesignationMarginUnits?.Tablet}`;
    const testimonialDesignationMobileMargin = `${TestimonialDesignationMarginMobile?.top}${TestimonialDesignationMarginUnits?.Mobile} ${TestimonialDesignationMarginMobile?.right}${TestimonialDesignationMarginUnits?.Mobile} ${TestimonialDesignationMarginMobile?.bottom}${TestimonialDesignationMarginUnits?.Mobile} ${TestimonialDesignationMarginMobile?.left}${TestimonialDesignationMarginUnits?.Mobile}`;
    /** End Testimonial Designation Margin */


    /** Start Testimonial Quote Icon Margin */
    const testimonialQuoteIconMarginChange = (event, position) => {
        const value = event.target.value;
        if (TestimonialQuoteIconMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        TestimonialQuoteIconMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        TestimonialQuoteIconMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        TestimonialQuoteIconMarginMobile: {
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
                    setAttributes({ TestimonialQuoteIconMarginDesktop: { ...TestimonialQuoteIconMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ TestimonialQuoteIconMarginTablet: { ...TestimonialQuoteIconMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ TestimonialQuoteIconMarginMobile: { ...TestimonialQuoteIconMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const testimonialQuoteIconMarginToggle = () => {
        setAttributes({
            TestimonialQuoteIconMarginLink: !TestimonialQuoteIconMarginLink
        });
    };

    const testimonialQuoteIconMarginUnitChange = (unit) => {
        setAttributes({
            TestimonialQuoteIconMarginUnits: {
                ...TestimonialQuoteIconMarginUnits,
                [deviceType]: unit
            }
        });
    };

    const testimonialQuoteIconDesktopMargin = `${TestimonialQuoteIconMarginDesktop?.top}${TestimonialQuoteIconMarginUnits?.Desktop} ${TestimonialQuoteIconMarginDesktop?.right}${TestimonialQuoteIconMarginUnits?.Desktop} ${TestimonialQuoteIconMarginDesktop?.bottom}${TestimonialQuoteIconMarginUnits?.Desktop} ${TestimonialQuoteIconMarginDesktop?.left}${TestimonialQuoteIconMarginUnits?.Desktop}`;
    const testimonialQuoteIconTabletMargin = `${TestimonialQuoteIconMarginTablet?.top}${TestimonialQuoteIconMarginUnits?.Tablet} ${TestimonialQuoteIconMarginTablet?.right}${TestimonialQuoteIconMarginUnits?.Tablet} ${TestimonialQuoteIconMarginTablet?.bottom}${TestimonialQuoteIconMarginUnits?.Tablet} ${TestimonialQuoteIconMarginTablet?.left}${TestimonialQuoteIconMarginUnits?.Tablet}`;
    const testimonialQuoteIconMobileMargin = `${TestimonialQuoteIconMarginMobile?.top}${TestimonialQuoteIconMarginUnits?.Mobile} ${TestimonialQuoteIconMarginMobile?.right}${TestimonialQuoteIconMarginUnits?.Mobile} ${TestimonialQuoteIconMarginMobile?.bottom}${TestimonialQuoteIconMarginUnits?.Mobile} ${TestimonialQuoteIconMarginMobile?.left}${TestimonialQuoteIconMarginUnits?.Mobile}`;
    /** End Testimonial Quote Icon Margin */


    /** Start Testimonial Image Border Radius */
    const testimonialImageBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (TestimonialImageRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        TestimonialImageDesktopRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        TestimonialImageTabRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        TestimonialImageMobileRadiusWidth: {
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
                    setAttributes({ TestimonialImageDesktopRadiusWidth: { ...TestimonialImageDesktopRadiusWidth, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ TestimonialImageTabRadiusWidth: { ...TestimonialImageTabRadiusWidth, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ TestimonialImageMobileRadiusWidth: { ...TestimonialImageMobileRadiusWidth, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const testimonialImageBorderRadiusLinkBtn = () => {
        setAttributes({
            TestimonialImageRadiusLink: !TestimonialImageRadiusLink
        });
    };

    const testimonialImageBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            TestimonialImageRadiusUnits: {
                ...TestimonialImageRadiusUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border radius for Testimonial Image */
    const testimonialImageDesktopBorderRadiusWidth = `${TestimonialImageDesktopRadiusWidth?.top}${TestimonialImageRadiusUnits?.Desktop} ${TestimonialImageDesktopRadiusWidth?.right}${TestimonialImageRadiusUnits?.Desktop} ${TestimonialImageDesktopRadiusWidth?.bottom}${TestimonialImageRadiusUnits?.Desktop} ${TestimonialImageDesktopRadiusWidth?.left}${TestimonialImageRadiusUnits?.Desktop}`;
    const testimonialImageTabletBorderRadiusWidth = `${TestimonialImageTabRadiusWidth?.top}${TestimonialImageRadiusUnits?.Tablet} ${TestimonialImageTabRadiusWidth?.right}${TestimonialImageRadiusUnits?.Tablet} ${TestimonialImageTabRadiusWidth?.bottom}${TestimonialImageRadiusUnits?.Tablet} ${TestimonialImageTabRadiusWidth?.left}${TestimonialImageRadiusUnits?.Tablet}`;
    const testimonialImageMobileBorderRadiusWidth = `${TestimonialImageMobileRadiusWidth?.top}${TestimonialImageRadiusUnits?.Mobile} ${TestimonialImageMobileRadiusWidth?.right}${TestimonialImageRadiusUnits?.Mobile} ${TestimonialImageMobileRadiusWidth?.bottom}${TestimonialImageRadiusUnits?.Mobile} ${TestimonialImageMobileRadiusWidth?.left}${TestimonialImageRadiusUnits?.Mobile}`;
    /** End Testimonial Image Border Radius */


    /** Start Global padding */
    const handleGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (TestimonialGlobalPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        TestimonialGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        TestimonialGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        TestimonialGlobalPaddingMobile: {
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
                    setAttributes({ TestimonialGlobalPaddingDesktop: { ...TestimonialGlobalPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ TestimonialGlobalPaddingTablet: { ...TestimonialGlobalPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ TestimonialGlobalPaddingMobile: { ...TestimonialGlobalPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes({ TestimonialGlobalPaddingLink: !TestimonialGlobalPaddingLink });
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            TestimonialGlobalPaddingUnits: {
                ...TestimonialGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    const globalDesktopPadding = `${TestimonialGlobalPaddingDesktop?.top}${TestimonialGlobalPaddingUnits?.Desktop} ${TestimonialGlobalPaddingDesktop?.right}${TestimonialGlobalPaddingUnits?.Desktop} ${TestimonialGlobalPaddingDesktop?.bottom}${TestimonialGlobalPaddingUnits?.Desktop} ${TestimonialGlobalPaddingDesktop?.left}${TestimonialGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${TestimonialGlobalPaddingTablet?.top}${TestimonialGlobalPaddingUnits?.Tablet} ${TestimonialGlobalPaddingTablet?.right}${TestimonialGlobalPaddingUnits?.Tablet} ${TestimonialGlobalPaddingTablet?.bottom}${TestimonialGlobalPaddingUnits?.Tablet} ${TestimonialGlobalPaddingTablet?.left}${TestimonialGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${TestimonialGlobalPaddingMobile?.top}${TestimonialGlobalPaddingUnits?.Mobile} ${TestimonialGlobalPaddingMobile?.right}${TestimonialGlobalPaddingUnits?.Mobile} ${TestimonialGlobalPaddingMobile?.bottom}${TestimonialGlobalPaddingUnits?.Mobile} ${TestimonialGlobalPaddingMobile?.left}${TestimonialGlobalPaddingUnits?.Mobile}`;
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (TestimonialGlobalMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        TestimonialGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        TestimonialGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        TestimonialGlobalMarginMobile: {
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
                    setAttributes({ TestimonialGlobalMarginDesktop: { ...TestimonialGlobalMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ TestimonialGlobalMarginTablet: { ...TestimonialGlobalMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ TestimonialGlobalMarginMobile: { ...TestimonialGlobalMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes({ TestimonialGlobalMarginLink: !TestimonialGlobalMarginLink });
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            TestimonialGlobalMarginUnits: {
                ...TestimonialGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const globalDesktopMargin = `${TestimonialGlobalMarginDesktop?.top}${TestimonialGlobalMarginUnits?.Desktop} ${TestimonialGlobalMarginDesktop?.right}${TestimonialGlobalMarginUnits?.Desktop} ${TestimonialGlobalMarginDesktop?.bottom}${TestimonialGlobalMarginUnits?.Desktop} ${TestimonialGlobalMarginDesktop?.left}${TestimonialGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${TestimonialGlobalMarginTablet?.top}${TestimonialGlobalMarginUnits?.Tablet} ${TestimonialGlobalMarginTablet?.right}${TestimonialGlobalMarginUnits?.Tablet} ${TestimonialGlobalMarginTablet?.bottom}${TestimonialGlobalMarginUnits?.Tablet} ${TestimonialGlobalMarginTablet?.left}${TestimonialGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${TestimonialGlobalMarginMobile?.top}${TestimonialGlobalMarginUnits?.Mobile} ${TestimonialGlobalMarginMobile?.right}${TestimonialGlobalMarginUnits?.Mobile} ${TestimonialGlobalMarginMobile?.bottom}${TestimonialGlobalMarginUnits?.Mobile} ${TestimonialGlobalMarginMobile?.left}${TestimonialGlobalMarginUnits?.Mobile}`;
    /** End Global Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (TestimonialGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        TestimonialGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        TestimonialGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        TestimonialGlobalBorderMobile: {
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
                    setAttributes({ TestimonialGlobalBorderDesktop: { ...TestimonialGlobalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ TestimonialGlobalBorderTablet: { ...TestimonialGlobalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ TestimonialGlobalBorderMobile: { ...TestimonialGlobalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ TestimonialGlobalBorderLink: !TestimonialGlobalBorderLink });
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            TestimonialGlobalBorderUnits: {
                ...TestimonialGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    const globalDesktopBorderWidth = `${TestimonialGlobalBorderDesktop?.top}${TestimonialGlobalBorderUnits?.Desktop} ${TestimonialGlobalBorderDesktop?.right}${TestimonialGlobalBorderUnits?.Desktop} ${TestimonialGlobalBorderDesktop?.bottom}${TestimonialGlobalBorderUnits?.Desktop} ${TestimonialGlobalBorderDesktop?.left}${TestimonialGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${TestimonialGlobalBorderTablet?.top}${TestimonialGlobalBorderUnits?.Tablet} ${TestimonialGlobalBorderTablet?.right}${TestimonialGlobalBorderUnits?.Tablet} ${TestimonialGlobalBorderTablet?.bottom}${TestimonialGlobalBorderUnits?.Tablet} ${TestimonialGlobalBorderTablet?.left}${TestimonialGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${TestimonialGlobalBorderMobile?.top}${TestimonialGlobalBorderUnits?.Mobile} ${TestimonialGlobalBorderMobile?.right}${TestimonialGlobalBorderUnits?.Mobile} ${TestimonialGlobalBorderMobile?.bottom}${TestimonialGlobalBorderUnits?.Mobile} ${TestimonialGlobalBorderMobile?.left}${TestimonialGlobalBorderUnits?.Mobile}`;
    /** End Border */


    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (TestimonialGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        TestimonialGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        TestimonialGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        TestimonialGlobalBorderRadiusMobile: {
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
                    setAttributes({ TestimonialGlobalBorderRadiusDesktop: { ...TestimonialGlobalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ TestimonialGlobalBorderRadiusTablet: { ...TestimonialGlobalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ TestimonialGlobalBorderRadiusMobile: { ...TestimonialGlobalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ TestimonialGlobalBorderRadiusLink: !TestimonialGlobalBorderRadiusLink });
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            TestimonialGlobalBorderRadiusUnits: {
                ...TestimonialGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

    /** End Global Border Radius */
    const globalDesktopBorderRadiusWidth = `${TestimonialGlobalBorderRadiusDesktop?.top}${TestimonialGlobalBorderRadiusUnits?.Desktop} ${TestimonialGlobalBorderRadiusDesktop?.right}${TestimonialGlobalBorderRadiusUnits?.Desktop} ${TestimonialGlobalBorderRadiusDesktop?.bottom}${TestimonialGlobalBorderRadiusUnits?.Desktop} ${TestimonialGlobalBorderRadiusDesktop?.left}${TestimonialGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${TestimonialGlobalBorderRadiusTablet?.top}${TestimonialGlobalBorderRadiusUnits?.Tablet} ${TestimonialGlobalBorderRadiusTablet?.right}${TestimonialGlobalBorderRadiusUnits?.Tablet} ${TestimonialGlobalBorderRadiusTablet?.bottom}${TestimonialGlobalBorderRadiusUnits?.Tablet} ${TestimonialGlobalBorderRadiusTablet?.left}${TestimonialGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${TestimonialGlobalBorderRadiusMobile?.top}${TestimonialGlobalBorderRadiusUnits?.Mobile} ${TestimonialGlobalBorderRadiusMobile?.right}${TestimonialGlobalBorderRadiusUnits?.Mobile} ${TestimonialGlobalBorderRadiusMobile?.bottom}${TestimonialGlobalBorderRadiusUnits?.Mobile} ${TestimonialGlobalBorderRadiusMobile?.left}${TestimonialGlobalBorderRadiusUnits?.Mobile}`;
    /** End Border Radius */




    const allBlockStyle = useMemo(() => `

        .${blockID}.fb-testimonial-main-wrapper {
            ${testimonialPositionType === 'default' ? `position: relative;` : ''}
            ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' ? `width: 100%;` : ''}
            ${testimonialPositionType !== 'default' ? `position: ${testimonialPositionType};` : ''}
            ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialHZOrientationType === 'left' && testimonialHZLeftOffset?.Desktop !== undefined ? `left: ${testimonialHZLeftOffset?.Desktop}${testimonialHZLeftOffsetUnits?.Desktop};` : ''}
            ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialHZOrientationType === 'right' && testimonialHZRightOffset?.Desktop !== undefined ? `right: ${testimonialHZRightOffset?.Desktop}${testimonialHZRightOffsetUnits?.Desktop};` : ''}
            ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialVROrientationType === 'top' && testimonialVRTopOffset?.Desktop !== undefined ? `top: ${testimonialVRTopOffset?.Desktop}${testimonialVRTopOffsetUnits?.Desktop};` : ''}
            ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialVROrientationType === 'bottom' && testimonialVRBottomOffset?.Desktop !== undefined ? `bottom: ${testimonialVRBottomOffset?.Desktop}${testimonialVRBottomOffsetUnits?.Desktop};` : ''}
            ${TestimonialGlobalZIndex?.Desktop ? `z-index: ${TestimonialGlobalZIndex?.Desktop};` : ''}
            ${TestimonialOverflow !== 'default' ? `overflow: ${TestimonialOverflow};` : ''}
        }
        .${blockID}.fb-testimonial-main-wrapper .fb-testimonial-section {
            ${globalDesktopPadding && TestimonialGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && TestimonialGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''} 
            ${TestimonialGlobalBorder ? `border: ${TestimonialGlobalBorder};` : ''} 
            ${globalDesktopBorderWidth && TestimonialGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && TestimonialGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${TestimonialGlobalBorderColor ? `border-color: ${TestimonialGlobalBorderColor};` : ''}
            ${TestimonialGlobalBoxShadowCssValue ? `box-shadow: ${TestimonialGlobalBoxShadowCssValue};` : ''}
            ${TestimonialGlobalBgNormalBackgroundType === 'gradient' ? `  
                background: ${TestimonialGlobalBgNormalCustomGradientSwitcher && TestimonialGlobalBgNormalCustomGradientInputValue
                ? TestimonialGlobalBgNormalCustomGradientInputValue
                : TestimonialGlobalBgNormalGradientColor || TestimonialGlobalBgNormalClassicColor
            };
            ` : `
                background: ${TestimonialGlobalBgNormalClassicColor};
            `}
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockID}.fb-testimonial-main-wrapper .fb-testimonial-section:hover {
            ${TestimonialGlobalBgHoverBackgroundType === 'gradient' ? `  
                background: ${TestimonialGlobalBgHoverCustomGradientSwitcher && TestimonialGlobalBgHoverCustomGradientInputValue
                ? TestimonialGlobalBgHoverCustomGradientInputValue
                : TestimonialGlobalBgHoverGradientColor || TestimonialGlobalBgHoverClassicColor
            };
            ` : `
                ${TestimonialGlobalBgHoverClassicColor ? `background: ${TestimonialGlobalBgHoverClassicColor};` : ''}
            `} 
            ${TestimonialGlobalBorderHoverColor ? `border-color: ${TestimonialGlobalBorderHoverColor};` : ''}
            ${TestimonialGlobalBoxShadowHoverCssValue ? `box-shadow: ${TestimonialGlobalBoxShadowHoverCssValue};` : ''}
        }

        .${blockID} .fb-testimonial-image img {
            ${TestimonialImageWidth?.Desktop && TestimonialImageWidthUnits?.Desktop ? `width: ${TestimonialImageWidth?.Desktop}${TestimonialImageWidthUnits?.Desktop};` : ''}
            ${TestimonialImageWidth?.Desktop && TestimonialImageWidthUnits?.Desktop ? `height: ${TestimonialImageWidth?.Desktop}${TestimonialImageWidthUnits?.Desktop};` : ''}
            ${TestimonialImageObjectFit !== 'default' ? `object-fit: ${TestimonialImageObjectFit};` : ''}
            ${testimonialImageDesktopBorderRadiusWidth && TestimonialImageDesktopRadiusWidth?.top ? `border-radius: ${testimonialImageDesktopBorderRadiusWidth};` : ''}
            ${testimonialImageDesktopMargin && TestimonialImageMarginDesktop?.top ? `margin: ${testimonialImageDesktopMargin};` : ''}
            ${TestimonialImagePositionSwitcher ? 'position: absolute;' : ''}
            ${TestimonialImagePositionSwitcher ? `top: ${TestimonialImageTopPosition?.Desktop && TestimonialImageTopPositionUnits?.Desktop ? `${TestimonialImageTopPosition?.Desktop}${TestimonialImageTopPositionUnits?.Desktop}` : '0'};` : ''}
            ${TestimonialImagePositionSwitcher ? `left: ${TestimonialImageLeftPosition?.Desktop && TestimonialImageLeftPositionUnits?.Desktop ? `${TestimonialImageLeftPosition?.Desktop}${TestimonialImageLeftPositionUnits?.Desktop}` : '0'};` : ''}
        }
        .${blockID} .fb-testimonial-quote-icon {
            ${TestimonialQuoteIconPositionSwitcher ? 'position: absolute;' : ''}
            ${TestimonialQuoteIconPositionSwitcher ? `top: ${TestimonialQuoteIconTopPosition?.Desktop && TestimonialQuoteIconTopPositionUnits?.Desktop ? `${TestimonialQuoteIconTopPosition?.Desktop}${TestimonialQuoteIconTopPositionUnits?.Desktop}` : '0'};` : ''}
            ${TestimonialQuoteIconPositionSwitcher ? `left: ${TestimonialQuoteIconLeftPosition?.Desktop && TestimonialQuoteIconLeftPositionUnits?.Desktop ? `${TestimonialQuoteIconLeftPosition?.Desktop}${TestimonialQuoteIconLeftPositionUnits?.Desktop}` : '0'};` : ''}
            ${testimonialQuoteIconDesktopMargin && TestimonialQuoteIconMarginDesktop?.top ? `margin: ${testimonialQuoteIconDesktopMargin};` : ''}
        }
        .${blockID} .fb-testimonial-quote-icon svg {
            ${TestimonialQuoteIconSize?.Desktop && TestimonialQuoteIconSizeUnits?.Desktop ? `width: ${TestimonialQuoteIconSize?.Desktop}${TestimonialQuoteIconSizeUnits?.Desktop};` : ''}
            ${TestimonialQuoteIconSize?.Desktop && TestimonialQuoteIconSizeUnits?.Desktop ? `height: ${TestimonialQuoteIconSize?.Desktop}${TestimonialQuoteIconSizeUnits?.Desktop};` : ''}
            fill: ${TestimonialQuoteIconColor};
        }
        .${blockID} .fb-testimonial-quote-icon img {
            ${TestimonialQuoteIconSize?.Desktop && TestimonialQuoteIconSizeUnits?.Desktop ? `width: ${TestimonialQuoteIconSize?.Desktop}${TestimonialQuoteIconSizeUnits?.Desktop};` : ''}
            ${TestimonialQuoteIconSize?.Desktop && TestimonialQuoteIconSizeUnits?.Desktop ? `height: ${TestimonialQuoteIconSize?.Desktop}${TestimonialQuoteIconSizeUnits?.Desktop};` : ''}
        }
        .${blockID} .fb-testimonial-quote-icon:hover svg {
            fill: ${TestimonialQuoteIconHoverColor};
        }
        .${blockID} .fb-testimonial-title-container .fb-testimonial-title,
        .${blockID} .fb-testimonial-title-container .fb-testimonial-title a {
            ${TestimonialTitleGlobalTypoSwitcher?.fontFamily === true && TestimonialTitleGlobalTypographyData?.fontFamily ? `font-family: ${TestimonialTitleGlobalTypographyData?.fontFamily};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.fontSize === true && TestimonialTitleGlobalTypographyData?.fontSize ? `font-size: ${TestimonialTitleGlobalTypographyData?.fontSize};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.fontWeight === true && TestimonialTitleGlobalTypographyData?.fontWeight ? `font-weight: ${TestimonialTitleGlobalTypographyData?.fontWeight};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.fontStyle === true && TestimonialTitleGlobalTypographyData?.fontStyle ? `font-style: ${TestimonialTitleGlobalTypographyData?.fontStyle};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.textTransform === true && TestimonialTitleGlobalTypographyData?.textTransform ? `text-transform: ${TestimonialTitleGlobalTypographyData?.textTransform};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.textDecoration === true && TestimonialTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${TestimonialTitleGlobalTypographyData?.textDecoration};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.letterSpacing === true && TestimonialTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${TestimonialTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.lineHeight === true && TestimonialTitleGlobalTypographyData?.lineHeight ? `line-height: ${TestimonialTitleGlobalTypographyData?.lineHeight};` : ''}
            
            ${TestimonialTitleGlobalTypoSwitcher?.fontFamily === false && TestimonialTitleFontFamily ? `font-family: ${TestimonialTitleFontFamily};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.fontSize === false && TestimonialTitleFontSize?.Desktop && TestimonialTitleFontSizeUnits?.Desktop ? `font-size: ${TestimonialTitleFontSize?.Desktop}${TestimonialTitleFontSizeUnits?.Desktop};` : '24px'}
            ${TestimonialTitleGlobalTypoSwitcher?.fontWeight === false && TestimonialTitleFontWeight ? `font-weight: ${TestimonialTitleFontWeight};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.fontStyle === false && TestimonialTitleFontStyle ? `font-style: ${TestimonialTitleFontStyle};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.textTransform === false && TestimonialTitleTextTransform ? `text-transform: ${TestimonialTitleTextTransform};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.textDecoration === false && TestimonialTitleTextDecoration ? `text-decoration: ${TestimonialTitleTextDecoration};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.letterSpacing === false && TestimonialTitleLetterSpacing?.Desktop && TestimonialTitleLetterSpacingUnits?.Desktop ? `letter-spacing: ${TestimonialTitleLetterSpacing?.Desktop}${TestimonialTitleLetterSpacingUnits?.Desktop};` : ''}
            ${TestimonialTitleGlobalTypoSwitcher?.lineHeight === false && TestimonialTitleLineHeight?.Desktop && TestimonialTitleLineHeightUnits?.Desktop ? `line-height: ${TestimonialTitleLineHeight?.Desktop}${TestimonialTitleLineHeightUnits?.Desktop};` : ''}
            ${TestimonialTitleColor ? `color: ${TestimonialTitleColor};` : ''}
            ${testimonialTitleDesktopMargin && TestimonialTitleMarginDesktop?.top ? `margin: ${testimonialTitleDesktopMargin};` : ''}
            
        }
        .${blockID} .fb-testimonial-title-container .fb-testimonial-title:hover,
        .${blockID} .fb-testimonial-title-container .fb-testimonial-title a:hover {
            ${TestimonialTitleHoverColor ? `color: ${TestimonialTitleHoverColor};` : ''}
        }
        .${blockID} .fb-testimonial-userdesc-container .fb-user-desc,
        .${blockID} .fb-testimonial-userdesc-container .fb-user-desc a {
            ${TestimonialDescGlobalTypoSwitcher?.fontFamily === true && TestimonialDescGlobalTypographyData?.fontFamily ? `font-family: ${TestimonialDescGlobalTypographyData?.fontFamily};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.fontSize === true && TestimonialDescGlobalTypographyData?.fontSize ? `font-size: ${TestimonialDescGlobalTypographyData?.fontSize};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.fontWeight === true && TestimonialDescGlobalTypographyData?.fontWeight ? `font-weight: ${TestimonialDescGlobalTypographyData?.fontWeight};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.fontStyle === true && TestimonialDescGlobalTypographyData?.fontStyle ? `font-style: ${TestimonialDescGlobalTypographyData?.fontStyle};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.textTransform === true && TestimonialDescGlobalTypographyData?.textTransform ? `text-transform: ${TestimonialDescGlobalTypographyData?.textTransform};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.textDecoration === true && TestimonialDescGlobalTypographyData?.textDecoration ? `text-decoration: ${TestimonialDescGlobalTypographyData?.textDecoration};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.letterSpacing === true && TestimonialDescGlobalTypographyData?.letterSpacing ? `letter-spacing: ${TestimonialDescGlobalTypographyData?.letterSpacing};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.lineHeight === true && TestimonialDescGlobalTypographyData?.lineHeight ? `line-height: ${TestimonialDescGlobalTypographyData?.lineHeight};` : ''}
            
            ${TestimonialDescGlobalTypoSwitcher?.fontFamily === false && TestimonialDescFontFamily ? `font-family: ${TestimonialDescFontFamily};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.fontSize === false && TestimonialDescFontSize?.Desktop && TestimonialDescFontSizeUnits?.Desktop ? `font-size: ${TestimonialDescFontSize?.Desktop}${TestimonialDescFontSizeUnits?.Desktop};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.fontWeight === false && TestimonialDescFontWeight ? `font-weight: ${TestimonialDescFontWeight};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.fontStyle === false && TestimonialDescFontStyle ? `font-style: ${TestimonialDescFontStyle};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.textTransform === false && TestimonialDescTextTransform ? `text-transform: ${TestimonialDescTextTransform};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.textDecoration === false && TestimonialDescTextDecoration ? `text-decoration: ${TestimonialDescTextDecoration};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.letterSpacing === false && TestimonialDescLetterSpacing?.Desktop && TestimonialDescLetterSpacingUnits?.Desktop ? `letter-spacing: ${TestimonialDescLetterSpacing?.Desktop}${TestimonialDescLetterSpacingUnits?.Desktop};` : ''}
            ${TestimonialDescGlobalTypoSwitcher?.lineHeight === false && TestimonialDescLineHeight?.Desktop && TestimonialDescLineHeightUnits?.Desktop ? `line-height: ${TestimonialDescLineHeight?.Desktop}${TestimonialDescLineHeightUnits?.Desktop};` : ''}
            ${TestimonialDescColor ? `color: ${TestimonialDescColor};` : ''}
            ${testimonialDescDesktopMargin && TestimonialDescMarginDesktop?.top ? `margin: ${testimonialDescDesktopMargin};` : ''}
        }
        .${blockID} .fb-testimonial-userdesc-container .fb-user-desc:hover,
        .${blockID} .fb-testimonial-userdesc-container .fb-user-desc a:hover {
            ${TestimonialDescHoverColor ? `color: ${TestimonialDescHoverColor};` : ''}
        }

        .${blockID} .fb-testimonial-userinfo-container .fb-user,
        .${blockID} .fb-testimonial-userinfo-container .fb-user a {
            ${TestimonialAuthorGlobalTypoSwitcher?.fontFamily === true && TestimonialAuthorGlobalTypographyData?.fontFamily ? `font-family: ${TestimonialAuthorGlobalTypographyData?.fontFamily};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.fontSize === true && TestimonialAuthorGlobalTypographyData?.fontSize ? `font-size: ${TestimonialAuthorGlobalTypographyData?.fontSize};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.fontWeight === true && TestimonialAuthorGlobalTypographyData?.fontWeight ? `font-weight: ${TestimonialAuthorGlobalTypographyData?.fontWeight};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.fontStyle === true && TestimonialAuthorGlobalTypographyData?.fontStyle ? `font-style: ${TestimonialAuthorGlobalTypographyData?.fontStyle};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.textTransform === true && TestimonialAuthorGlobalTypographyData?.textTransform ? `text-transform: ${TestimonialAuthorGlobalTypographyData?.textTransform};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.textDecoration === true && TestimonialAuthorGlobalTypographyData?.textDecoration ? `text-decoration: ${TestimonialAuthorGlobalTypographyData?.textDecoration};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.letterSpacing === true && TestimonialAuthorGlobalTypographyData?.letterSpacing ? `letter-spacing: ${TestimonialAuthorGlobalTypographyData?.letterSpacing};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.lineHeight === true && TestimonialAuthorGlobalTypographyData?.lineHeight ? `line-height: ${TestimonialAuthorGlobalTypographyData?.lineHeight};` : ''}
            
            ${TestimonialAuthorGlobalTypoSwitcher?.fontFamily === false && TestimonialAuthorFontFamily ? `font-family: ${TestimonialAuthorFontFamily};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.fontSize === false && TestimonialAuthorFontSize?.Desktop ? `font-size: ${TestimonialAuthorFontSize?.Desktop}${TestimonialAuthorFontSizeUnits?.Desktop};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.fontWeight === false && TestimonialAuthorFontWeight ? `font-weight: ${TestimonialAuthorFontWeight};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.fontStyle === false && TestimonialAuthorFontStyle ? `font-style: ${TestimonialAuthorFontStyle};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.textTransform === false && TestimonialAuthorTextTransform ? `text-transform: ${TestimonialAuthorTextTransform};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.textDecoration === false && TestimonialAuthorTextDecoration ? `text-decoration: ${TestimonialAuthorTextDecoration};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.letterSpacing === false && TestimonialAuthorLetterSpacing?.Desktop ? `letter-spacing: ${TestimonialAuthorLetterSpacing?.Desktop}${TestimonialAuthorLetterSpacingUnits?.Desktop};` : ''}
            ${TestimonialAuthorGlobalTypoSwitcher?.lineHeight === false && TestimonialAuthorLineHeight?.Desktop ? `line-height: ${TestimonialAuthorLineHeight?.Desktop}${TestimonialAuthorLineHeightUnits?.Desktop};` : ''}
            
            ${TestimonialAuthorColor ? `color: ${TestimonialAuthorColor};` : ''}
            ${testimonialAuthorDesktopMargin && TestimonialAuthorMarginDesktop?.top ? `margin: ${testimonialAuthorDesktopMargin};` : ''}
        }
        .${blockID} .fb-testimonial-userinfo-container .fb-user:hover,
        .${blockID} .fb-testimonial-userinfo-container .fb-user a:hover {
            ${TestimonialAuthorHoverColor ? `color: ${TestimonialAuthorHoverColor};` : ''}
        }

        .${blockID} .fb-testimonial-userinfo-container .fb-user-designation,
        .${blockID} .fb-testimonial-userinfo-container .fb-user-designation a {
            ${TestimonialDesignationGlobalTypoSwitcher?.fontFamily === true && TestimonialDesignationGlobalTypographyData?.fontFamily ? `font-family: ${TestimonialDesignationGlobalTypographyData?.fontFamily};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.fontSize === true && TestimonialDesignationGlobalTypographyData?.fontSize ? `font-size: ${TestimonialDesignationGlobalTypographyData?.fontSize};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.fontWeight === true && TestimonialDesignationGlobalTypographyData?.fontWeight ? `font-weight: ${TestimonialDesignationGlobalTypographyData?.fontWeight};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.fontStyle === true && TestimonialDesignationGlobalTypographyData?.fontStyle ? `font-style: ${TestimonialDesignationGlobalTypographyData?.fontStyle};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.textTransform === true && TestimonialDesignationGlobalTypographyData?.textTransform ? `text-transform: ${TestimonialDesignationGlobalTypographyData?.textTransform};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.textDecoration === true && TestimonialDesignationGlobalTypographyData?.textDecoration ? `text-decoration: ${TestimonialDesignationGlobalTypographyData?.textDecoration};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.letterSpacing === true && TestimonialDesignationGlobalTypographyData?.letterSpacing ? `letter-spacing: ${TestimonialDesignationGlobalTypographyData?.letterSpacing};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.lineHeight === true && TestimonialDesignationGlobalTypographyData?.lineHeight ? `line-height: ${TestimonialDesignationGlobalTypographyData?.lineHeight};` : ''}
            
            ${TestimonialDesignationGlobalTypoSwitcher?.fontFamily === false && TestimonialDesignationFontFamily ? `font-family: ${TestimonialDesignationFontFamily};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.fontSize === false && TestimonialDesignationFontSize?.Desktop ? `font-size: ${TestimonialDesignationFontSize?.Desktop}${TestimonialDesignationFontSizeUnits?.Desktop};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.fontWeight === false && TestimonialDesignationFontWeight ? `font-weight: ${TestimonialDesignationFontWeight};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.fontStyle === false && TestimonialDesignationFontStyle ? `font-style: ${TestimonialDesignationFontStyle};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.textTransform === false && TestimonialDesignationTextTransform ? `text-transform: ${TestimonialDesignationTextTransform};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.textDecoration === false && TestimonialDesignationTextDecoration ? `text-decoration: ${TestimonialDesignationTextDecoration};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.letterSpacing === false && TestimonialDesignationLetterSpacing?.Desktop ? `letter-spacing: ${TestimonialDesignationLetterSpacing?.Desktop}${TestimonialDesignationLetterSpacingUnits?.Desktop};` : ''}
            ${TestimonialDesignationGlobalTypoSwitcher?.lineHeight === false && TestimonialDesignationLineHeight?.Desktop ? `line-height: ${TestimonialDesignationLineHeight?.Desktop}${TestimonialDesignationLineHeightUnits?.Desktop};` : ''}
            
            ${TestimonialDesignationColor ? `color: ${TestimonialDesignationColor};` : ''}
            ${testimonialDesignationDesktopMargin && TestimonialDesignationMarginDesktop?.top ? `margin: ${testimonialDesignationDesktopMargin};` : ''}
        }
        .${blockID} .fb-testimonial-userinfo-container .fb-user-designation:hover {
            ${TestimonialDesignationHoverColor ? `color: ${TestimonialDesignationHoverColor};` : ''}
        }

        .${blockID} .fb-testimonial-rating {
            display: flex;
            align-items: center;
            justify-content: ${TestimonialRatingIconAlign};
            gap: ${TestimonialRatingIconGap?.Desktop}${TestimonialRatingIconGapUnits?.Desktop};
            ${testimonialRatingIconDesktopMargin && TestimonialRatingIconMarginDesktop?.top ? `margin: ${testimonialRatingIconDesktopMargin};` : ''}
        }

        .${blockID} .fb-testimonial-rating-icon svg {
            width: ${TestimonialRatingIconSize?.Desktop}${TestimonialRatingIconSizeUnits?.Desktop};
            height: ${TestimonialRatingIconSize?.Desktop}${TestimonialRatingIconSizeUnits?.Desktop};
            fill: ${TestimonialRatingIconColor};
        }
        .${blockID} .fb-testimonial-rating-icon img {
            width: ${TestimonialRatingIconSize?.Desktop}${TestimonialRatingIconSizeUnits?.Desktop};
            height: ${TestimonialRatingIconSize?.Desktop}${TestimonialRatingIconSizeUnits?.Desktop};
        }
        .${blockID} .fb-testimonial-rating-icon:hover svg {
            fill: ${TestimonialRatingIconHoverColor};
        }

        .${blockID} .fb-testimonial-author-container {
            ${TestimonialPresetStyle === "preset-5" ?
            `
                display: flex;
                align-items: center;
                justify-content: space-between !important;
                ` : ''}

        }
        .${blockID} .fb-user-desc {
                ${TestimonialPresetStyle === "preset-5" ?
            `
                padding-top: 24px;
                ` : ''}
        }

        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-testimonial-main-wrapper {
                ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialHZOrientationType === 'left' && testimonialHZLeftOffset?.Tablet !== undefined ? `left: ${testimonialHZLeftOffset?.Tablet}${testimonialHZLeftOffsetUnits?.Tablet};` : ''}
				${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialHZOrientationType === 'right' && testimonialHZRightOffset?.Tablet !== undefined ? `right: ${testimonialHZRightOffset?.Tablet}${testimonialHZRightOffsetUnits?.Tablet};` : ''}
				${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialVROrientationType === 'top' && testimonialVRTopOffset?.Tablet !== undefined ? `top: ${testimonialVRTopOffset?.Tablet}${testimonialVRTopOffsetUnits?.Tablet};` : ''}
				${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialVROrientationType === 'bottom' && testimonialVRBottomOffset?.Tablet !== undefined ? `bottom: ${testimonialVRBottomOffset?.Tablet}${testimonialVRBottomOffsetUnits?.Tablet};` : ''}
                ${TestimonialGlobalZIndex?.Tablet ? `z-index: ${TestimonialGlobalZIndex?.Tablet};` : ''}
            }
            .fb-testimonial-main-wrapper.${blockID} .fb-testimonial-section {
                ${globalTabletPadding && TestimonialGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && TestimonialGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
                ${globalTabletBorderWidth && TestimonialGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && TestimonialGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }
            .${blockID} .fb-testimonial-quote-icon {
                ${TestimonialQuoteIconPositionSwitcher ? 'position: absolute;' : ''}
                ${TestimonialQuoteIconPositionSwitcher ? `top: ${TestimonialQuoteIconTopPosition?.Tablet && TestimonialQuoteIconTopPositionUnits?.Tablet ? `${TestimonialQuoteIconTopPosition?.Tablet}${TestimonialQuoteIconTopPositionUnits?.Tablet}` : '0'};` : ''}
                ${TestimonialQuoteIconPositionSwitcher ? `left: ${TestimonialQuoteIconLeftPosition?.Tablet && TestimonialQuoteIconLeftPositionUnits?.Tablet ? `${TestimonialQuoteIconLeftPosition?.Tablet}${TestimonialQuoteIconLeftPositionUnits?.Tablet}` : '0'};` : ''}
                ${testimonialQuoteIconTabletMargin && TestimonialQuoteIconMarginTablet?.top ? `margin: ${testimonialQuoteIconTabletMargin};` : ''}
            }
            .${blockID} .fb-testimonial-quote-icon svg {
                ${TestimonialQuoteIconSize?.Tablet && TestimonialQuoteIconSizeUnits?.Tablet ? `width: ${TestimonialQuoteIconSize?.Tablet}${TestimonialQuoteIconSizeUnits?.Tablet};` : ''}
                ${TestimonialQuoteIconSize?.Tablet && TestimonialQuoteIconSizeUnits?.Tablet ? `height: ${TestimonialQuoteIconSize?.Tablet}${TestimonialQuoteIconSizeUnits?.Tablet};` : ''}
            }
            .${blockID} .fb-testimonial-quote-icon img {
                ${TestimonialQuoteIconSize?.Tablet && TestimonialQuoteIconSizeUnits?.Tablet ? `width: ${TestimonialQuoteIconSize?.Tablet}${TestimonialQuoteIconSizeUnits?.Tablet};` : ''}
                ${TestimonialQuoteIconSize?.Tablet && TestimonialQuoteIconSizeUnits?.Tablet ? `height: ${TestimonialQuoteIconSize?.Tablet}${TestimonialQuoteIconSizeUnits?.Tablet};` : ''}
            }

            .${blockID} .fb-testimonial-rating {
                gap: ${TestimonialRatingIconGap?.Tablet}${TestimonialRatingIconGapUnits?.Tablet};
                ${testimonialRatingIconTabletMargin && TestimonialRatingIconMarginTablet?.top ? `margin: ${testimonialRatingIconTabletMargin};` : ''}
            }
            .${blockID} .fb-testimonial-rating-icon svg {
                width: ${TestimonialRatingIconSize?.Tablet}${TestimonialRatingIconSizeUnits?.Tablet};
                height: ${TestimonialRatingIconSize?.Tablet}${TestimonialRatingIconSizeUnits?.Tablet};
            }
            .${blockID} .fb-testimonial-rating-icon img {
                width: ${TestimonialRatingIconSize?.Tablet}${TestimonialRatingIconSizeUnits?.Tablet};
                height: ${TestimonialRatingIconSize?.Tablet}${TestimonialRatingIconSizeUnits?.Tablet};
            }
            .${blockID} .fb-testimonial-image img {
                ${TestimonialImageWidth?.Tablet && TestimonialImageWidthUnits?.Tablet ? `width: ${TestimonialImageWidth?.Tablet}${TestimonialImageWidthUnits?.Tablet};` : ''}
                ${TestimonialImageWidth?.Tablet && TestimonialImageWidthUnits?.Tablet ? `height: ${TestimonialImageWidth?.Tablet}${TestimonialImageWidthUnits?.Tablet};` : ''}
                ${testimonialImageTabletBorderRadiusWidth && TestimonialImageTabRadiusWidth?.top ? `border-radius: ${testimonialImageTabletBorderRadiusWidth};` : ''}
                ${testimonialImageTabletMargin && TestimonialImageMarginTablet?.top ? `margin: ${testimonialImageTabletMargin};` : ''}
                ${TestimonialImagePositionSwitcher ? 'position: absolute;' : ''}
                ${TestimonialImagePositionSwitcher ? `top: ${TestimonialImageTopPosition?.Tablet && TestimonialImageTopPositionUnits?.Tablet ? `${TestimonialImageTopPosition?.Tablet}${TestimonialImageTopPositionUnits?.Tablet}` : '0'};` : ''}
                ${TestimonialImagePositionSwitcher ? `left: ${TestimonialImageLeftPosition?.Tablet && TestimonialImageLeftPositionUnits?.Tablet ? `${TestimonialImageLeftPosition?.Tablet}${TestimonialImageLeftPositionUnits?.Tablet}` : '0'};` : ''}
            }
            .${blockID} .fb-testimonial-title-container .fb-testimonial-title,
            .${blockID} .fb-testimonial-title-container .fb-testimonial-title a{
                ${TestimonialTitleGlobalTypoSwitcher?.fontSize === false && TestimonialTitleFontSize?.Tablet && TestimonialTitleFontSizeUnits?.Tablet ? `font-size: ${TestimonialTitleFontSize?.Tablet}${TestimonialTitleFontSizeUnits?.Tablet};` : ''}
                ${TestimonialTitleGlobalTypoSwitcher?.letterSpacing === false && TestimonialTitleLetterSpacing?.Tablet && TestimonialTitleLetterSpacingUnits?.Tablet ? `letter-spacing: ${TestimonialTitleLetterSpacing?.Tablet}${TestimonialTitleLetterSpacingUnits?.Tablet};` : ''}
                ${TestimonialTitleGlobalTypoSwitcher?.lineHeight === false && TestimonialTitleLineHeight?.Tablet && TestimonialTitleLineHeightUnits?.Tablet ? `line-height: ${TestimonialTitleLineHeight?.Tablet}${TestimonialTitleLineHeightUnits?.Tablet};` : ''}
                ${testimonialTitleTabletMargin && TestimonialTitleMarginTablet.top ? `margin: ${testimonialTitleTabletMargin};` : ''}
            }
            .${blockID} .fb-testimonial-userdesc-container .fb-user-desc,
            .${blockID} .fb-testimonial-userdesc-container .fb-user-desc a {
                ${TestimonialDescGlobalTypoSwitcher?.fontSize === false && TestimonialDescFontSize?.Tablet && TestimonialDescFontSizeUnits?.Tablet ? `font-size: ${TestimonialDescFontSize?.Tablet}${TestimonialDescFontSizeUnits?.Tablet};` : ''}
                ${TestimonialDescGlobalTypoSwitcher?.letterSpacing === false && TestimonialDescLetterSpacing?.Tablet && TestimonialDescLetterSpacingUnits?.Tablet ? `letter-spacing: ${TestimonialDescLetterSpacing?.Tablet}${TestimonialDescLetterSpacingUnits?.Tablet};` : ''}
                ${TestimonialDescGlobalTypoSwitcher?.lineHeight === false && TestimonialDescLineHeight?.Tablet && TestimonialDescLineHeightUnits?.Tablet ? `line-height: ${TestimonialDescLineHeight?.Tablet}${TestimonialDescLineHeightUnits?.Tablet};` : ''}
                ${testimonialDescTabletMargin && TestimonialDescMarginTablet?.top ? `margin: ${testimonialDescTabletMargin};` : ''}
            }
            .${blockID} .fb-testimonial-userinfo-container .fb-user,
            .${blockID} .fb-testimonial-userinfo-container .fb-user a {
                ${TestimonialAuthorGlobalTypoSwitcher?.fontSize === false && TestimonialAuthorFontSize?.Tablet ? `font-size: ${TestimonialAuthorFontSize?.Tablet}${TestimonialAuthorFontSizeUnits?.Tablet};` : ''}
                ${TestimonialAuthorGlobalTypoSwitcher?.letterSpacing === false && TestimonialAuthorLetterSpacing?.Tablet ? `letter-spacing: ${TestimonialAuthorLetterSpacing?.Tablet}${TestimonialAuthorLetterSpacingUnits?.Tablet};` : ''}
                ${TestimonialAuthorGlobalTypoSwitcher?.lineHeight === false && TestimonialAuthorLineHeight?.Tablet ? `line-height: ${TestimonialAuthorLineHeight?.Tablet}${TestimonialAuthorLineHeightUnits?.Tablet};` : ''}
                
                ${testimonialAuthorTabletMargin && TestimonialAuthorMarginTablet.top ? `margin: ${testimonialAuthorTabletMargin};` : ''}
            }
            .${blockID} .fb-testimonial-userinfo-container .fb-user-designation
            .${blockID} .fb-testimonial-userinfo-container .fb-user-designation a {
                ${TestimonialDesignationGlobalTypoSwitcher?.fontSize === false && TestimonialDesignationFontSize?.Tablet ? `font-size: ${TestimonialDesignationFontSize?.Tablet}${TestimonialDesignationFontSizeUnits?.Tablet};` : ''}
                ${TestimonialDesignationGlobalTypoSwitcher?.letterSpacing === false && TestimonialDesignationLetterSpacing?.Tablet ? `letter-spacing: ${TestimonialDesignationLetterSpacing?.Tablet}${TestimonialDesignationLetterSpacingUnits?.Tablet};` : ''}
                ${TestimonialDesignationGlobalTypoSwitcher?.lineHeight === false && TestimonialDesignationLineHeight?.Tablet ? `line-height: ${TestimonialDesignationLineHeight?.Tablet}${TestimonialDesignationLineHeightUnits?.Tablet};` : ''}
                
                ${testimonialDesignationTabletMargin && TestimonialDesignationMarginTablet?.top ? `margin: ${testimonialDesignationTabletMargin};` : ''}
            }
        }
        @media only screen and (max-width: 767px) {
            .${blockID}.fb-testimonial-main-wrapper {
                ${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialHZOrientationType === 'left' && testimonialHZLeftOffset?.Mobile !== undefined ? `left: ${testimonialHZLeftOffset?.Mobile}${testimonialHZLeftOffsetUnits?.Mobile};` : ''}
				${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialHZOrientationType === 'right' && testimonialHZRightOffset?.Mobile !== undefined ? `right: ${testimonialHZRightOffset?.Mobile}${testimonialHZRightOffsetUnits?.Mobile};` : ''}
				${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialVROrientationType === 'top' && testimonialVRTopOffset?.Mobile !== undefined ? `top: ${testimonialVRTopOffset?.Mobile}${testimonialVRTopOffsetUnits?.Mobile};` : ''}
				${testimonialPositionType !== 'default' && testimonialPositionType !== 'relative' && testimonialVROrientationType === 'bottom' && testimonialVRBottomOffset?.Mobile !== undefined ? `bottom: ${testimonialVRBottomOffset?.Mobile}${testimonialVRBottomOffsetUnits?.Mobile};` : ''} 
                ${TestimonialGlobalZIndex?.Mobile ? `z-index: ${TestimonialGlobalZIndex?.Mobile};` : ''} 
            }
            .fb-testimonial-main-wrapper.${blockID} .fb-testimonial-section {
                ${globalMobilePadding && TestimonialGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && TestimonialGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
                ${globalMobileBorderWidth && TestimonialGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && TestimonialGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }
            .${blockID} .fb-testimonial-rating {
                gap: ${TestimonialRatingIconGap?.Mobile}${TestimonialRatingIconGapUnits?.Mobile};
                ${testimonialRatingIconMobileMargin && TestimonialRatingIconMarginMobile?.top ? `margin: ${testimonialRatingIconMobileMargin};` : ''}
            }
            .${blockID} .fb-testimonial-rating-icon svg {
                width: ${TestimonialRatingIconSize?.Mobile}${TestimonialRatingIconSizeUnits?.Mobile};
                height: ${TestimonialRatingIconSize?.Mobile}${TestimonialRatingIconSizeUnits?.Mobile};
            }
            .${blockID} .fb-testimonial-rating-icon img {
                width: ${TestimonialRatingIconSize?.Mobile}${TestimonialRatingIconSizeUnits?.Mobile};
                height: ${TestimonialRatingIconSize?.Mobile}${TestimonialRatingIconSizeUnits?.Mobile};
            }
            .${blockID} .fb-testimonial-quote-icon {
                ${TestimonialQuoteIconPositionSwitcher ? 'position: absolute;' : ''}
                ${TestimonialQuoteIconPositionSwitcher ? `top: ${TestimonialQuoteIconTopPosition?.Mobile && TestimonialQuoteIconTopPositionUnits?.Mobile ? `${TestimonialQuoteIconTopPosition?.Mobile}${TestimonialQuoteIconTopPositionUnits?.Mobile}` : '0'};` : ''}
                ${TestimonialQuoteIconPositionSwitcher ? `left: ${TestimonialQuoteIconLeftPosition?.Mobile && TestimonialQuoteIconLeftPositionUnits?.Mobile ? `${TestimonialQuoteIconLeftPosition?.Mobile}${TestimonialQuoteIconLeftPositionUnits?.Mobile}` : '0'};` : ''}
                ${testimonialQuoteIconMobileMargin && TestimonialQuoteIconMarginMobile?.top ? `margin: ${testimonialQuoteIconMobileMargin};` : ''}
            }
            .${blockID} .fb-testimonial-quote-icon svg {
                ${TestimonialQuoteIconSize?.Mobile && TestimonialQuoteIconSizeUnits?.Mobile ? `width: ${TestimonialQuoteIconSize?.Mobile}${TestimonialQuoteIconSizeUnits?.Mobile};` : ''}
                ${TestimonialQuoteIconSize?.Mobile && TestimonialQuoteIconSizeUnits?.Mobile ? `height: ${TestimonialQuoteIconSize?.Mobile}${TestimonialQuoteIconSizeUnits?.Mobile};` : ''}
            }
            .${blockID} .fb-testimonial-quote-icon img {
                ${TestimonialQuoteIconSize?.Mobile && TestimonialQuoteIconSizeUnits?.Mobile ? `width: ${TestimonialQuoteIconSize?.Mobile}${TestimonialQuoteIconSizeUnits?.Mobile};` : ''}
                ${TestimonialQuoteIconSize?.Mobile && TestimonialQuoteIconSizeUnits?.Mobile ? `height: ${TestimonialQuoteIconSize?.Mobile}${TestimonialQuoteIconSizeUnits?.Mobile};` : ''}
            }

            .${blockID} .fb-testimonial-image img {
                ${TestimonialImageWidth?.Mobile && TestimonialImageWidthUnits?.Mobile ? `width: ${TestimonialImageWidth?.Mobile}${TestimonialImageWidthUnits?.Mobile};` : ''}
                ${TestimonialImageWidth?.Mobile && TestimonialImageWidthUnits?.Mobile ? `height: ${TestimonialImageWidth?.Mobile}${TestimonialImageWidthUnits?.Mobile};` : ''}
                ${testimonialImageMobileBorderRadiusWidth && TestimonialImageMobileRadiusWidth?.top ? `border-radius: ${testimonialImageMobileBorderRadiusWidth};` : ''}
                ${testimonialImageMobileMargin && TestimonialImageMarginMobile?.top ? `margin: ${testimonialImageMobileMargin};` : ''}
                ${TestimonialImagePositionSwitcher ? 'position: absolute;' : ''}
                ${TestimonialImagePositionSwitcher ? `top: ${TestimonialImageTopPosition?.Mobile && TestimonialImageTopPositionUnits?.Mobile ? `${TestimonialImageTopPosition?.Mobile}${TestimonialImageTopPositionUnits?.Mobile}` : '0'};` : ''}
                ${TestimonialImagePositionSwitcher ? `left: ${TestimonialImageLeftPosition?.Mobile && TestimonialImageLeftPositionUnits?.Mobile ? `${TestimonialImageLeftPosition?.Mobile}${TestimonialImageLeftPositionUnits?.Mobile}` : '0'};` : ''}
            }
            .${blockID} .fb-testimonial-title-container .fb-testimonial-title,
            .${blockID} .fb-testimonial-title-container .fb-testimonial-title a {
                ${TestimonialTitleGlobalTypoSwitcher?.fontSize === false && TestimonialTitleFontSize?.Mobile && TestimonialTitleFontSizeUnits?.Mobile ? `font-size: ${TestimonialTitleFontSize?.Mobile}${TestimonialTitleFontSizeUnits?.Mobile};` : ''}
                ${TestimonialTitleGlobalTypoSwitcher?.letterSpacing === false && TestimonialTitleLetterSpacing?.Mobile && TestimonialTitleLetterSpacingUnits?.Mobile ? `letter-spacing: ${TestimonialTitleLetterSpacing?.Mobile}${TestimonialTitleLetterSpacingUnits?.Mobile};` : ''}
                ${TestimonialTitleGlobalTypoSwitcher?.lineHeight === false && TestimonialTitleLineHeight?.Mobile && TestimonialTitleLineHeightUnits?.Mobile ? `line-height: ${TestimonialTitleLineHeight?.Mobile}${TestimonialTitleLineHeightUnits?.Mobile};` : ''}
                ${testimonialTitleMobileMargin && TestimonialTitleMarginMobile?.top ? `margin: ${testimonialTitleMobileMargin};` : ''}

            }
            .${blockID} .fb-testimonial-userdesc-container .fb-user-desc,
            .${blockID} .fb-testimonial-userdesc-container .fb-user-desc a {
                ${TestimonialDescGlobalTypoSwitcher?.fontSize === false && TestimonialDescFontSize?.Mobile && TestimonialDescFontSizeUnits?.Mobile ? `font-size: ${TestimonialDescFontSize?.Mobile}${TestimonialDescFontSizeUnits?.Mobile};` : ''}
                ${TestimonialDescGlobalTypoSwitcher?.letterSpacing === false && TestimonialDescLetterSpacing?.Mobile && TestimonialDescLetterSpacingUnits?.Mobile ? `letter-spacing: ${TestimonialDescLetterSpacing?.Mobile}${TestimonialDescLetterSpacingUnits?.Mobile};` : ''}
                ${TestimonialDescGlobalTypoSwitcher?.lineHeight === false && TestimonialDescLineHeight?.Mobile && TestimonialDescLineHeightUnits?.Mobile ? `line-height: ${TestimonialDescLineHeight?.Mobile}${TestimonialDescLineHeightUnits?.Mobile};` : ''}
                ${testimonialDescMobileMargin && TestimonialDescMarginMobile?.top ? `margin: ${testimonialDescMobileMargin};` : ''}
            }
            .${blockID} .fb-testimonial-userinfo-container .fb-user
            .${blockID} .fb-testimonial-userinfo-container .fb-user a {
                ${TestimonialAuthorGlobalTypoSwitcher?.fontSize === false && TestimonialAuthorFontSize?.Mobile ? `font-size: ${TestimonialAuthorFontSize?.Mobile}${TestimonialAuthorFontSizeUnits?.Mobile};` : ''}
                ${TestimonialAuthorGlobalTypoSwitcher?.letterSpacing === false && TestimonialAuthorLetterSpacing?.Mobile ? `letter-spacing: ${TestimonialAuthorLetterSpacing?.Mobile}${TestimonialAuthorLetterSpacingUnits?.Mobile};` : ''}
                ${TestimonialAuthorGlobalTypoSwitcher?.lineHeight === false && TestimonialAuthorLineHeight?.Mobile ? `line-height: ${TestimonialAuthorLineHeight?.Mobile}${TestimonialAuthorLineHeightUnits?.Mobile};` : ''}
                
                ${testimonialAuthorMobileMargin && TestimonialAuthorMarginMobile?.top ? `margin: ${testimonialAuthorMobileMargin};` : ''} 
            }
            .${blockID} .fb-testimonial-userinfo-container .fb-user-designation,
            .${blockID} .fb-testimonial-userinfo-container .fb-user-designation a {
                ${TestimonialDesignationGlobalTypoSwitcher?.fontSize === false && TestimonialDesignationFontSize?.Mobile ? `font-size: ${TestimonialDesignationFontSize?.Mobile}${TestimonialDesignationFontSizeUnits?.Mobile};` : ''}
                ${TestimonialDesignationGlobalTypoSwitcher?.letterSpacing === false && TestimonialDesignationLetterSpacing?.Mobile ? `letter-spacing: ${TestimonialDesignationLetterSpacing?.Mobile}${TestimonialDesignationLetterSpacingUnits?.Mobile};` : ''}
                ${TestimonialDesignationGlobalTypoSwitcher?.lineHeight === false && TestimonialDesignationLineHeight?.Mobile ? `line-height: ${TestimonialDesignationLineHeight?.Mobile}${TestimonialDesignationLineHeightUnits?.Mobile};` : ''}
                
                ${testimonialDesignationMobileMargin && TestimonialDesignationMarginMobile?.top ? `margin: ${testimonialDesignationMobileMargin};` : ''}
            }  
        }


    `, [
        blockID,
        deviceType,
        TestimonialPresetStyle,
        TestimonialAlignment,

        TestimonialImageSwitcher,
        TestimonialImageUrl,
        TestimonialImageAlt,
        TestimonialImageID,

        TitleSwitcher,
        TestimonialTitle,
        DescSwitcher,
        TestimonialDesc,
        AuthorSwitcher,
        TestimonialAuthor,
        DesignationSwitcher,
        TestimonialDesignation,
        RatingSwitcher,
        TestimonialRatingNumber,
        TestimonialRatingicon,
        TestimonialRatinIconAlign,
        QuoteIconSwitcher,
        TestimonialQuoteIcon,
        TestimonialQuoteIconAlign,

        TestimonialImageWidth,
        TestimonialImageWidthUnits,
        TestimonialImageObjectFit,

        TestimonialImageRadiusUnits,
        TestimonialImageDesktopRadiusWidth,
        TestimonialImageTabRadiusWidth,
        TestimonialImageMobileRadiusWidth,
        TestimonialImageRadiusLink,

        TestimonialImageMarginUnits,
        TestimonialImageMarginDesktop,
        TestimonialImageMarginTablet,
        TestimonialImageMarginMobile,
        TestimonialImageMarginLink,

        TestimonialImagePositionSwitcher,
        TestimonialImageTopPosition,
        TestimonialImageTopPositionUnits,
        TestimonialImageLeftPosition,
        TestimonialImageLeftPositionUnits,

        TestimonialQuoteIconSize,
        TestimonialQuoteIconSizeUnits,
        TestimonialQuoteIconColorSwitcher,
        TestimonialQuoteIconColor,
        TestimonialQuoteIconHoverColor,
        TestimonialQuoteIconPositionSwitcher,
        TestimonialQuoteIconTopPosition,
        TestimonialQuoteIconTopPositionUnits,
        TestimonialQuoteIconLeftPosition,
        TestimonialQuoteIconLeftPositionUnits,
        TestimonialQuoteIconMarginUnits,
        TestimonialQuoteIconMarginDesktop,
        TestimonialQuoteIconMarginTablet,
        TestimonialQuoteIconMarginMobile,
        TestimonialQuoteIconMarginLink,

        TestimonialTitleTag,
        TestimonialTitleGlobalTypoSwitcher,
        TestimonialTitleGlobalTypographyData,
        TestimonialTitleGlobalTypoType,
        TestimonialTitleFontFamily,
        TestimonialTitleFontSize,
        TestimonialTitleFontSizeUnits,
        TestimonialTitleFontWeight,
        TestimonialTitleFontStyle,
        TestimonialTitleTextTransform,
        TestimonialTitleTextDecoration,
        TestimonialTitleLetterSpacing,
        TestimonialTitleLetterSpacingUnits,
        TestimonialTitleLineHeight,
        TestimonialTitleLineHeightUnits,
        TestimonialTitleColorSwitcher,
        TestimonialTitleColor,
        TestimonialTitleHoverColor,
        TestimonialTitleMarginUnits,
        TestimonialTitleMarginDesktop,
        TestimonialTitleMarginTablet,
        TestimonialTitleMarginMobile,
        TestimonialTitleMarginLink,

        TestimonialDescGlobalTypoSwitcher,
        TestimonialDescGlobalTypographyData,
        TestimonialDescGlobalTypoType,
        TestimonialDescFontFamily,
        TestimonialDescFontSize,
        TestimonialDescFontSizeUnits,
        TestimonialDescFontWeight,
        TestimonialDescFontStyle,
        TestimonialDescTextTransform,
        TestimonialDescTextDecoration,
        TestimonialDescLetterSpacing,
        TestimonialDescLetterSpacingUnits,
        TestimonialDescLineHeight,
        TestimonialDescLineHeightUnits,
        TestimonialDescColorSwitcher,
        TestimonialDescColor,
        TestimonialDescHoverColor,
        TestimonialDescMarginUnits,
        TestimonialDescMarginDesktop,
        TestimonialDescMarginTablet,
        TestimonialDescMarginMobile,
        TestimonialDescMarginLink,

        TestimonialAuthorGlobalTypoSwitcher,
        TestimonialAuthorGlobalTypographyData,
        TestimonialAuthorGlobalTypoType,
        TestimonialAuthorFontFamily,
        TestimonialAuthorFontSize,
        TestimonialAuthorFontSizeUnits,
        TestimonialAuthorFontWeight,
        TestimonialAuthorFontStyle,
        TestimonialAuthorTextTransform,
        TestimonialAuthorTextDecoration,
        TestimonialAuthorLetterSpacing,
        TestimonialAuthorLetterSpacingUnits,
        TestimonialAuthorLineHeight,
        TestimonialAuthorLineHeightUnits,
        TestimonialAuthorColorSwitcher,
        TestimonialAuthorColor,
        TestimonialAuthorHoverColor,

        TestimonialAuthorMarginUnits,
        TestimonialAuthorMarginDesktop,
        TestimonialAuthorMarginTablet,
        TestimonialAuthorMarginMobile,
        TestimonialAuthorMarginLink,

        TestimonialDesignationGlobalTypoSwitcher,
        TestimonialDesignationGlobalTypographyData,
        TestimonialDesignationGlobalTypoType,
        TestimonialDesignationFontFamily,
        TestimonialDesignationFontSize,
        TestimonialDesignationFontSizeUnits,
        TestimonialDesignationFontWeight,
        TestimonialDesignationFontStyle,
        TestimonialDesignationTextTransform,
        TestimonialDesignationTextDecoration,
        TestimonialDesignationLetterSpacing,
        TestimonialDesignationLetterSpacingUnits,
        TestimonialDesignationLineHeight,
        TestimonialDesignationLineHeightUnits,
        TestimonialDesignationColorSwitcher,
        TestimonialDesignationColor,
        TestimonialDesignationHoverColor,
        TestimonialDesignationMarginUnits,
        TestimonialDesignationMarginDesktop,
        TestimonialDesignationMarginTablet,
        TestimonialDesignationMarginMobile,
        TestimonialDesignationMarginLink,

        TestimonialRatingIconAlign,
        TestimonialRatingIconGap,
        TestimonialRatingIconGapUnits,

        TestimonialRatingIconSize,
        TestimonialRatingIconSizeUnits,
        TestimonialRatingIconColorSwitcher,
        TestimonialRatingIconColor,
        TestimonialRatingIconHoverColor,
        TestimonialRatingIconMarginUnits,
        TestimonialRatingIconMarginDesktop,
        TestimonialRatingIconMarginTablet,
        TestimonialRatingIconMarginMobile,
        TestimonialRatingIconMarginLink,

        TestimonialGlobalZIndex,
        TestimonialOverflow,
        TestimonialGlobalPaddingUnits,
        TestimonialGlobalPaddingDesktop,
        TestimonialGlobalPaddingTablet,
        TestimonialGlobalPaddingMobile,
        TestimonialGlobalPaddingLink,
        TestimonialGlobalMarginUnits,
        TestimonialGlobalMarginDesktop,
        TestimonialGlobalMarginTablet,
        TestimonialGlobalMarginMobile,
        TestimonialGlobalMarginLink,

        TestimonialGlobalBgColorSwitcher,
        TestimonialGlobalBgNormalBackgroundType,
        TestimonialGlobalBgNormalClassicColor,
        TestimonialGlobalBgNormalGradientColor,
        TestimonialGlobalBgNormalCustomGradientSwitcher,
        TestimonialGlobalBgNormalCustomGradientInputValue,
        TestimonialGlobalBgHoverBackgroundType,
        TestimonialGlobalBgHoverClassicColor,
        TestimonialGlobalBgHoverGradientColor,
        TestimonialGlobalBgHoverCustomGradientSwitcher,
        TestimonialGlobalBgHoverCustomGradientInputValue,

        TestimonialGlobalBorder,
        TestimonialGlobalBorderColor,
        TestimonialGlobalBorderHoverColor,
        TestimonialGlobalBorderColorSwitcher,

        TestimonialGlobalBorderUnits,
        TestimonialGlobalBorderDesktop,
        TestimonialGlobalBorderTablet,
        TestimonialGlobalBorderMobile,
        TestimonialGlobalBorderLink,

        TestimonialGlobalBorderRadiusUnits,
        TestimonialGlobalBorderRadiusDesktop,
        TestimonialGlobalBorderRadiusTablet,
        TestimonialGlobalBorderRadiusMobile,
        TestimonialGlobalBorderRadiusLink,

        TestimonialGlobalBoxShadowSwitcher,
        TestimonialGlobalBoxShadowValues,
        TestimonialGlobalBoxShadowCssValue,
        TestimonialGlobalBoxShadowHoverValues,
        TestimonialGlobalBoxShadowHoverCssValue,


        testimonialRatingIconDesktopMargin,
        testimonialRatingIconTabletMargin,
        testimonialRatingIconMobileMargin,

        testimonialTitleDesktopMargin,
        testimonialTitleTabletMargin,
        testimonialTitleMobileMargin,

        testimonialDescDesktopMargin,
        testimonialDescTabletMargin,
        testimonialDescMobileMargin,

        testimonialImageDesktopMargin,
        testimonialImageTabletMargin,
        testimonialImageMobileMargin,

        testimonialAuthorDesktopMargin,
        testimonialAuthorTabletMargin,
        testimonialAuthorMobileMargin,

        testimonialDesignationDesktopMargin,
        testimonialDesignationTabletMargin,
        testimonialDesignationMobileMargin,

        testimonialQuoteIconDesktopMargin,
        testimonialQuoteIconTabletMargin,
        testimonialQuoteIconMobileMargin,

        testimonialImageDesktopBorderRadiusWidth,
        testimonialImageTabletBorderRadiusWidth,
        testimonialImageMobileBorderRadiusWidth,

        globalDesktopPadding,
        globalTabletPadding,
        globalMobilePadding,

        globalDesktopMargin,
        globalTabletMargin,
        globalMobileMargin,

        globalDesktopBorderWidth,
        globalTabletBorderWidth,
        globalMobileBorderWidth,

        globalDesktopBorderRadiusWidth,
        globalTabletBorderRadiusWidth,
        globalMobileBorderRadiusWidth,

        // Position
        testimonialPositionType,
        testimonialHZOrientationType,
        testimonialVROrientationType,
        testimonialHZLeftOffset,
        testimonialHZLeftOffsetUnits,
        testimonialHZRightOffset,
        testimonialHZRightOffsetUnits,
        testimonialVRTopOffset,
        testimonialVRTopOffsetUnits,
        testimonialVRBottomOffset,
        testimonialVRBottomOffsetUnits,
    ]);

    const customCss = getCustomCss(testimonialCustomCSS, `.${blockID}`);

    useEffect(() => {
        setAttributes({ blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim() });
    }, [allBlockStyle, customCss]);

    /**
     * Generate SVG Icons for Icon
     */
    useEffect(() => {
        setAttributes({
            FrontendTestimonialRatingicon: generateSvgIcon(TestimonialRatingicon),
            FrontendTestimonialQuoteIcon: generateSvgIcon(TestimonialQuoteIcon),
        })
    }, [TestimonialRatingicon, TestimonialQuoteIcon]);

    // Check if Pro is active
    const getProActiveState = getProActive();
    useEffect(() => {
        if (!getProActiveState) {
            setAttributes({
                dynamicTitleEnabled: false,
                dynamicTitleEnableLink: false,
                dynamicDescriptionEnabled: false,
                dynamicDescriptionEnableLink: false,
                dynamicAuthorNameEnabled: false,
                dynamicAuthorNameEnableLink: false,
                dynamicAuthorDesignationEnabled: false,
                dynamicAuthorDesignationEnableLink: false,
            });
        }
    }, [getProActiveState]);

    /**
     * Toggle Controls for Dynamic Content
     */
    const dynamicTitleContentToggleControls = getProToggleControls({
        hook: 'frontisblocks-testimonial-dynamic-title-toggle-controls',
        attributes,
        setAttributes,
        dynamicAttr: 'dynamicTitleEnabled',
        label: __('Dynamic Title', 'frontis-blocks'),
        keyPrefix: 'testimonial-dynamic-title-content',
        isProActive: getProActiveState
    });

    const dynamicDescriptionContentToggleControls = getProToggleControls({
        hook: 'frontisblocks-testimonial-dynamic-description-toggle-controls',
        attributes,
        setAttributes,
        dynamicAttr: 'dynamicDescriptionEnabled',
        label: __('Dynamic Description', 'frontis-blocks'),
        keyPrefix: 'testimonial-dynamic-description-content',
        isProActive: getProActiveState
    });

    const dynamicAuthorNameContentToggleControls = getProToggleControls({
        hook: 'frontisblocks-testimonial-dynamic-author-name-toggle-controls',
        attributes,
        setAttributes,
        dynamicAttr: 'dynamicAuthorNameEnabled',
        label: __('Dynamic Author Name', 'frontis-blocks'),
        keyPrefix: 'testimonial-dynamic-author-name-content',
        isProActive: getProActiveState
    });

    const dynamicAuthorDesignationContentToggleControls = getProToggleControls({
        hook: 'frontisblocks-testimonial-dynamic-author-designation-toggle-controls',
        attributes,
        setAttributes,
        dynamicAttr: 'dynamicAuthorDesignationEnabled',
        label: __('Dynamic Author Designation', 'frontis-blocks'),
        keyPrefix: 'testimonial-dynamic-author-designation-content',
        isProActive: getProActiveState
    });

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody
                title={__("Testimonial Info", "frontis-blocks")}
                initialOpen={true}
            >
                {/* <SelectControl
                        label={__("Preset Style", "frontis-blocks")}
                        value={TestimonialPresetStyle}
                        options={PRESETS}
                        onChange={(selected) => changeTestimonialPreset(selected)}
                    /> */}
                <FB_Presets
                    className="fb-testimonial-presets"
                    label={__('Select Preset', 'frontis-blocks')}
                    presets={testimonialPresets}
                    value={TestimonialPresetStyle}
                    onChangeValue='TestimonialPresetStyle'
                    defaultPresetValue="preset-1"
                    setAttributes={setAttributes}
                />
                <BaseControl
                    label={__("Element Visibility", "frontis-blocks")}
                    className="fb-setting-show-hide-elements"
                >
                    <ToggleControl
                        label={__("Show Rating", "frontis-blocks")}
                        checked={RatingSwitcher}
                        onChange={(value) => setAttributes({ RatingSwitcher: value })}
                    />
                    <ToggleControl
                        label={__("Show Title", "frontis-blocks")}
                        checked={TitleSwitcher}
                        onChange={(value) => setAttributes({ TitleSwitcher: value })}
                    />
                    <ToggleControl
                        label={__("Show Description", "frontis-blocks")}
                        checked={DescSwitcher}
                        onChange={(value) => setAttributes({ DescSwitcher: value })}
                    />
                    <ToggleControl
                        label={__("Show Avatar", "frontis-blocks")}
                        checked={TestimonialImageSwitcher}
                        onChange={(value) => setAttributes({ TestimonialImageSwitcher: value })}
                    />
                    <ToggleControl
                        label={__("Show Author", "frontis-blocks")}
                        checked={AuthorSwitcher}
                        onChange={(value) => setAttributes({ AuthorSwitcher: value })}
                    />
                    <ToggleControl
                        label={__("Show Designation", "frontis-blocks")}
                        checked={DesignationSwitcher}
                        onChange={(value) => setAttributes({ DesignationSwitcher: value })}
                    />
                    <ToggleControl
                        label={__("Show Quote Icon", "frontis-blocks")}
                        checked={QuoteIconSwitcher}
                        onChange={(value) => setAttributes({ QuoteIconSwitcher: value })}
                    />
                </BaseControl>

                <BaseControl
                    label={__("Alignment", "frontis-blocks")}
                    id="fb-setting-text-alignment"
                    className="fb-setting-text-alignment"
                >
                    <ButtonGroup
                        className="fb-setting-text-alignment-group-btn"
                    >
                        {TEXT_ALIGN.map((item, key) => (
                            <Button
                                key={key}
                                onClick={() => setAttributes({ TestimonialAlignment: item.value })}
                                className={`fb-setting-text-alignment-single-btn ${TestimonialAlignment === item.value ? 'active' : ''}`}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </ButtonGroup>
                </BaseControl>

                {dynamicTitleContentToggleControls.map((control, index) => (
                    <div key={control.key || index}>{control.comp}</div>
                ))}

                <DynamicDataSourceControl
                    enabled={dynamicTitleEnabled}

                    source={dynamicTitleSource}
                    setSource={(value) => setAttributes({ dynamicTitleSource: value })}
                    postId={dynamicTitlePostId}
                    setPostId={(value) => setAttributes({ dynamicTitlePostId: value })}
                    postType={dynamicTitlePostType}
                    setPostType={(value) => setAttributes({ dynamicTitlePostType: value })}
                    postLabel={dynamicTitlePostLabel}
                    setPostLabel={(value) => setAttributes({ dynamicTitlePostLabel: value })}

                    field={dynamicTitleField}
                    setField={(value) => setAttributes({ dynamicTitleField: value })}
                    featuredImageField={dynamicTitleFeaturedImageField}
                    setFeaturedImageField={(value) => setAttributes({ dynamicTitleFeaturedImageField: value })}

                    dateType={dynamicTitleDateType}
                    setDateType={(value) => setAttributes({ dynamicTitleDateType: value })}
                    dateFormat={dynamicTitleDateFormat}
                    setDateFormat={(value) => setAttributes({ dynamicTitleDateFormat: value })}
                    timeType={dynamicTitleTimeType}
                    setTimeType={(value) => setAttributes({ dynamicTitleTimeType: value })}
                    timeFormat={dynamicTitleTimeFormat}
                    setTimeFormat={(value) => setAttributes({ dynamicTitleTimeFormat: value })}

                    commentsZeroText={dynamicTitleCommentsZeroText}
                    setCommentsZeroText={(value) => setAttributes({ dynamicTitleCommentsZeroText: value })}
                    commentsOneText={dynamicTitleCommentsOneText}
                    setCommentsOneText={(value) => setAttributes({ dynamicTitleCommentsOneText: value })}
                    commentsManyText={dynamicTitleCommentsManyText}
                    setCommentsManyText={(value) => setAttributes({ dynamicTitleCommentsManyText: value })}

                    termsTaxonomy={dynamicTitleTermsTaxonomy}
                    setTermsTaxonomy={(value) => setAttributes({ dynamicTitleTermsTaxonomy: value })}
                    termsSeparator={dynamicTitleTermsSeparator}
                    setTermsSeparator={(value) => setAttributes({ dynamicTitleTermsSeparator: value })}
                />
                {dynamicTitleEnabled && (
                    <DynamicDataLinkControl
                        enableLink={dynamicTitleEnableLink}
                        setEnableLink={(value) => setAttributes({ dynamicTitleEnableLink: value })}
                        linkSource={dynamicTitleLinkSource}
                        setLinkSource={(value) => setAttributes({ dynamicTitleLinkSource: value })}
                    />
                )}
                {!dynamicTitleEnabled && TitleSwitcher && (
                    <TextareaControl
                        label={__("Title", "frontis-blocks")}
                        value={TestimonialTitle}
                        onChange={(value) => setAttributes({ TestimonialTitle: value })}
                        className="fb-testimonial-title-control"
                    />
                )}

                {dynamicDescriptionContentToggleControls.map((control, index) => (
                    <div key={control.key || index}>{control.comp}</div>
                ))}

                <DynamicDataSourceControl
                    enabled={dynamicDescriptionEnabled}

                    source={dynamicDescriptionSource}
                    setSource={(value) => setAttributes({ dynamicDescriptionSource: value })}
                    postId={dynamicDescriptionPostId}
                    setPostId={(value) => setAttributes({ dynamicDescriptionPostId: value })}
                    postType={dynamicDescriptionPostType}
                    setPostType={(value) => setAttributes({ dynamicDescriptionPostType: value })}
                    postLabel={dynamicDescriptionPostLabel}
                    setPostLabel={(value) => setAttributes({ dynamicDescriptionPostLabel: value })}

                    field={dynamicDescriptionField}
                    setField={(value) => setAttributes({ dynamicDescriptionField: value })}
                    featuredImageField={dynamicDescriptionFeaturedImageField}
                    setFeaturedImageField={(value) => setAttributes({ dynamicDescriptionFeaturedImageField: value })}

                    dateType={dynamicDescriptionDateType}
                    setDateType={(value) => setAttributes({ dynamicDescriptionDateType: value })}
                    dateFormat={dynamicDescriptionDateFormat}
                    setDateFormat={(value) => setAttributes({ dynamicDescriptionDateFormat: value })}
                    timeType={dynamicDescriptionTimeType}
                    setTimeType={(value) => setAttributes({ dynamicDescriptionTimeType: value })}
                    timeFormat={dynamicDescriptionTimeFormat}
                    setTimeFormat={(value) => setAttributes({ dynamicDescriptionTimeFormat: value })}

                    commentsZeroText={dynamicDescriptionCommentsZeroText}
                    setCommentsZeroText={(value) => setAttributes({ dynamicDescriptionCommentsZeroText: value })}
                    commentsOneText={dynamicDescriptionCommentsOneText}
                    setCommentsOneText={(value) => setAttributes({ dynamicDescriptionCommentsOneText: value })}
                    commentsManyText={dynamicDescriptionCommentsManyText}
                    setCommentsManyText={(value) => setAttributes({ dynamicDescriptionCommentsManyText: value })}

                    termsTaxonomy={dynamicDescriptionTermsTaxonomy}
                    setTermsTaxonomy={(value) => setAttributes({ dynamicDescriptionTermsTaxonomy: value })}
                    termsSeparator={dynamicDescriptionTermsSeparator}
                    setTermsSeparator={(value) => setAttributes({ dynamicDescriptionTermsSeparator: value })}
                />

                {dynamicDescriptionEnabled && (
                    <DynamicDataLinkControl
                        enableLink={dynamicDescriptionEnableLink}
                        setEnableLink={(value) => setAttributes({ dynamicDescriptionEnableLink: value })}
                        linkSource={dynamicDescriptionLinkSource}
                        setLinkSource={(value) => setAttributes({ dynamicDescriptionLinkSource: value })}
                    />
                )}
                {!dynamicDescriptionEnabled && DescSwitcher && (
                    <TextareaControl
                        label={__("Description", "frontis-blocks")}
                        value={TestimonialDesc}
                        onChange={(value) => setAttributes({ TestimonialDesc: value })}
                        className="fb-testimonial-desc-control"
                    />
                )}
            </PanelBody>

            <PanelBody
                title={__("Avatar Info", "frontis-blocks")}
                initialOpen={false}
                className="fb-setting-feature-icon-wrapper"
            >
                {TestimonialImageSwitcher && (
                    <BaseControl
                        className="fb-testimonial-image-control-wrapper"
                        label={__("Avatar", "frontis-blocks")}
                    >
                        {TestimonialImageUrl ? (
                            <div className="fb-testimonial-image-control" style={{ backgroundImage: `url(${TestimonialImageUrl})` }}>
                                <button
                                    className='fb-testimonial-image-delete'
                                    onClick={() => {
                                        setAttributes({
                                            TestimonialImageUrl: null,
                                            TestimonialImageAlt: null,
                                            TestimonialImageID: null,
                                        });
                                    }}
                                >
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.9431 22C18.466 22 22.9431 17.5228 22.9431 12C22.9431 6.47715 18.466 2 12.9431 2C7.42027 2 2.94312 6.47715 2.94312 12C2.94312 17.5228 7.42027 22 12.9431 22Z" stroke="#1C274C" />
                                        <path d="M15.4431 9.50002L10.4431 14.5M10.4431 9.5L15.4431 14.5" stroke="#1C274C" />
                                    </svg>
                                </button>
                                <button
                                    className='fb-testimonial-image-replace-btn'
                                    onClick={() => {
                                        const mediaUploader = wp.media({
                                            title: __('Select or Upload Testimonial Image', 'frontis-blocks'),
                                            button: {
                                                text: __('Use this image', 'frontis-blocks'),
                                            },
                                            multiple: false
                                        });

                                        mediaUploader.on('select', function () {
                                            const attachment = mediaUploader.state().get('selection').first().toJSON();
                                            setAttributes({
                                                TestimonialImageUrl: attachment.url,
                                                TestimonialImageAlt: attachment.alt,
                                                TestimonialImageID: attachment.id,
                                            });
                                        });

                                        mediaUploader.open();
                                    }}
                                >
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.4431 19.75C10.8573 19.75 11.1931 19.4142 11.1931 19C11.1931 18.5858 10.8573 18.25 10.4431 18.25V19.75ZM11.9431 5V5.75C12.2464 5.75 12.5199 5.56727 12.636 5.28701C12.7521 5.00676 12.6879 4.68417 12.4734 4.46967L11.9431 5ZM10.4734 2.46967C10.1806 2.17678 9.70568 2.17678 9.41279 2.46967C9.1199 2.76256 9.1199 3.23744 9.41279 3.53033L10.4734 2.46967ZM10.4431 18.25H9.9434V19.75H10.4431V18.25ZM9.94312 5.75H11.9431V4.25H9.94312V5.75ZM12.4734 4.46967L10.4734 2.46967L9.41279 3.53033L11.4128 5.53033L12.4734 4.46967ZM2.19312 12C2.19312 16.2802 5.66323 19.75 9.9434 19.75V18.25C6.49158 18.25 3.69312 15.4517 3.69312 12H2.19312ZM3.69312 12C3.69312 8.54822 6.49134 5.75 9.94312 5.75V4.25C5.66291 4.25 2.19312 7.71979 2.19312 12H3.69312Z" fill="#1C274C" />
                                        <path d="M13.9431 19V18.25C13.6398 18.25 13.3663 18.4327 13.2502 18.713C13.1341 18.9932 13.1983 19.3158 13.4128 19.5303L13.9431 19ZM15.4128 21.5303C15.7057 21.8232 16.1805 21.8232 16.4734 21.5303C16.7663 21.2374 16.7663 20.7626 16.4734 20.4697L15.4128 21.5303ZM15.4431 4.25C15.0289 4.25 14.6931 4.58579 14.6931 5C14.6931 5.41421 15.0289 5.75 15.4431 5.75V4.25ZM15.9431 18.25H13.9431V19.75H15.9431V18.25ZM13.4128 19.5303L15.4128 21.5303L16.4734 20.4697L14.4734 18.4697L13.4128 19.5303ZM15.4431 5.75H15.9431V4.25H15.4431V5.75ZM22.1931 12C22.1931 15.4518 19.3949 18.25 15.9431 18.25V19.75C20.2233 19.75 23.6931 16.2802 23.6931 12H22.1931ZM23.6931 12C23.6931 7.71979 20.2233 4.25 15.9431 4.25V5.75C19.3949 5.75 22.1931 8.54822 22.1931 12H23.6931Z" fill="#1C274C" />
                                    </svg>
                                    Replace
                                </button>
                            </div>
                        ) : (
                            <button
                                className='fb-testimonial-image-upload-btn'
                                onClick={() => {
                                    const mediaUploader = wp.media({
                                        title: __('Select or Upload Testimonial Image', 'frontis-blocks'),
                                        button: {
                                            text: __('Use this image', 'frontis-blocks'),
                                        },
                                        multiple: false
                                    });

                                    mediaUploader.on('select', function () {
                                        const attachment = mediaUploader.state().get('selection').first().toJSON();
                                        setAttributes({
                                            TestimonialImageUrl: attachment.url,
                                            TestimonialImageAlt: attachment.alt,
                                            TestimonialImageID: attachment.id,
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

                {dynamicAuthorNameContentToggleControls.map((control, index) => (
                    <div key={control.key || index}>{control.comp}</div>
                ))}

                <DynamicDataSourceControl
                    enabled={dynamicAuthorNameEnabled}

                    source={dynamicAuthorNameSource}
                    setSource={(value) => setAttributes({ dynamicAuthorNameSource: value })}
                    postId={dynamicAuthorNamePostId}
                    setPostId={(value) => setAttributes({ dynamicAuthorNamePostId: value })}
                    postType={dynamicAuthorNamePostType}
                    setPostType={(value) => setAttributes({ dynamicAuthorNamePostType: value })}
                    postLabel={dynamicAuthorNamePostLabel}
                    setPostLabel={(value) => setAttributes({ dynamicAuthorNamePostLabel: value })}

                    field={dynamicAuthorNameField}
                    setField={(value) => setAttributes({ dynamicAuthorNameField: value })}
                    featuredImageField={dynamicAuthorNameFeaturedImageField}
                    setFeaturedImageField={(value) => setAttributes({ dynamicAuthorNameFeaturedImageField: value })}

                    dateType={dynamicAuthorNameDateType}
                    setDateType={(value) => setAttributes({ dynamicAuthorNameDateType: value })}
                    dateFormat={dynamicAuthorNameDateFormat}
                    setDateFormat={(value) => setAttributes({ dynamicAuthorNameDateFormat: value })}
                    timeType={dynamicAuthorNameTimeType}
                    setTimeType={(value) => setAttributes({ dynamicAuthorNameTimeType: value })}
                    timeFormat={dynamicAuthorNameTimeFormat}
                    setTimeFormat={(value) => setAttributes({ dynamicAuthorNameTimeFormat: value })}

                    commentsZeroText={dynamicAuthorNameCommentsZeroText}
                    setCommentsZeroText={(value) => setAttributes({ dynamicAuthorNameCommentsZeroText: value })}
                    commentsOneText={dynamicAuthorNameCommentsOneText}
                    setCommentsOneText={(value) => setAttributes({ dynamicAuthorNameCommentsOneText: value })}
                    commentsManyText={dynamicAuthorNameCommentsManyText}
                    setCommentsManyText={(value) => setAttributes({ dynamicAuthorNameCommentsManyText: value })}

                    termsTaxonomy={dynamicAuthorNameTermsTaxonomy}
                    setTermsTaxonomy={(value) => setAttributes({ dynamicAuthorNameTermsTaxonomy: value })}
                    termsSeparator={dynamicAuthorNameTermsSeparator}
                    setTermsSeparator={(value) => setAttributes({ dynamicAuthorNameTermsSeparator: value })}
                />

                {dynamicAuthorNameEnabled && (
                    <DynamicDataLinkControl
                        enableLink={dynamicAuthorNameEnableLink}
                        setEnableLink={(value) => setAttributes({ dynamicAuthorNameEnableLink: value })}
                        linkSource={dynamicAuthorNameLinkSource}
                        setLinkSource={(value) => setAttributes({ dynamicAuthorNameLinkSource: value })}
                    />
                )}
                {!dynamicAuthorNameEnabled && AuthorSwitcher && (
                    <TextareaControl
                        label={__("Author", "frontis-blocks")}
                        value={TestimonialAuthor}
                        onChange={(value) => setAttributes({ TestimonialAuthor: value })}
                        className="fb-testimonial-author-control"
                    />
                )}

                {dynamicAuthorDesignationContentToggleControls.map((control, index) => (
                    <div key={control.key || index}>{control.comp}</div>
                ))}

                <DynamicDataSourceControl
                    enabled={dynamicAuthorDesignationEnabled}

                    source={dynamicAuthorDesignationSource}
                    setSource={(value) => setAttributes({ dynamicAuthorDesignationSource: value })}
                    postId={dynamicAuthorDesignationPostId}
                    setPostId={(value) => setAttributes({ dynamicAuthorDesignationPostId: value })}
                    postType={dynamicAuthorDesignationPostType}
                    setPostType={(value) => setAttributes({ dynamicAuthorDesignationPostType: value })}
                    postLabel={dynamicAuthorDesignationPostLabel}
                    setPostLabel={(value) => setAttributes({ dynamicAuthorDesignationPostLabel: value })}

                    field={dynamicAuthorDesignationField}
                    setField={(value) => setAttributes({ dynamicAuthorDesignationField: value })}
                    featuredImageField={dynamicAuthorDesignationFeaturedImageField}
                    setFeaturedImageField={(value) => setAttributes({ dynamicAuthorDesignationFeaturedImageField: value })}

                    dateType={dynamicAuthorDesignationDateType}
                    setDateType={(value) => setAttributes({ dynamicAuthorDesignationDateType: value })}
                    dateFormat={dynamicAuthorDesignationDateFormat}
                    setDateFormat={(value) => setAttributes({ dynamicAuthorDesignationDateFormat: value })}
                    timeType={dynamicAuthorDesignationTimeType}
                    setTimeType={(value) => setAttributes({ dynamicAuthorDesignationTimeType: value })}
                    timeFormat={dynamicAuthorDesignationTimeFormat}
                    setTimeFormat={(value) => setAttributes({ dynamicAuthorDesignationTimeFormat: value })}

                    commentsZeroText={dynamicAuthorDesignationCommentsZeroText}
                    setCommentsZeroText={(value) => setAttributes({ dynamicAuthorDesignationCommentsZeroText: value })}
                    commentsOneText={dynamicAuthorDesignationCommentsOneText}
                    setCommentsOneText={(value) => setAttributes({ dynamicAuthorDesignationCommentsOneText: value })}
                    commentsManyText={dynamicAuthorDesignationCommentsManyText}
                    setCommentsManyText={(value) => setAttributes({ dynamicAuthorDesignationCommentsManyText: value })}

                    termsTaxonomy={dynamicAuthorDesignationTermsTaxonomy}
                    setTermsTaxonomy={(value) => setAttributes({ dynamicAuthorDesignationTermsTaxonomy: value })}
                    termsSeparator={dynamicAuthorDesignationTermsSeparator}
                    setTermsSeparator={(value) => setAttributes({ dynamicAuthorDesignationTermsSeparator: value })}
                />

                {dynamicAuthorDesignationEnabled && (
                    <DynamicDataLinkControl
                        enableLink={dynamicAuthorDesignationEnableLink}
                        setEnableLink={(value) => setAttributes({ dynamicAuthorDesignationEnableLink: value })}
                        linkSource={dynamicAuthorDesignationLinkSource}
                        setLinkSource={(value) => setAttributes({ dynamicAuthorDesignationLinkSource: value })}
                    />
                )}
                {!dynamicAuthorDesignationEnabled && DesignationSwitcher && (
                    <TextareaControl
                        label={__("Designation", "frontis-blocks")}
                        value={TestimonialDesignation}
                        onChange={(value) => setAttributes({ TestimonialDesignation: value })}
                        className="fb-testimonial-designation-control"
                    />
                )}
            </PanelBody>

            {RatingSwitcher && (
                <PanelBody
                    title={__("Rating Icon", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-setting-feature-icon-wrapper"
                >
                    <div className='fb-setting-icon-wrapper'>
                        <BaseControl
                            id="fb-setting-text-alignment"
                            className="fb-setting-text-alignment"
                        >
                            <ButtonGroup
                                className="fb-setting-text-alignment-group-btn"
                            >
                                {ICON_ALIGN.map((item, key) => (
                                    <Button
                                        key={key}
                                        onClick={() => setAttributes({ TestimonialRatinIconAlign: item.value })}
                                        className={`fb-setting-text-alignment-single-btn ${TestimonialRatinIconAlign === item.value ? 'active' : ''}`}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                            {TestimonialRatinIconAlign === 'icon' && (
                                <FBIconPicker value={TestimonialRatingicon} setIconHandler={ratingIconHandler} />
                            )}
                            {TestimonialRatinIconAlign === 'image' && (
                                <FB_ImageControl
                                    globalImageUrl={TestimonialRatingImageUrl}
                                    setglobalImageUrl={(value) => setAttributes({ TestimonialRatingImageUrl: value })}
                                    globalImageAlt={TestimonialRatingImageAlt}
                                    setglobalImageAlt={(value) => setAttributes({ TestimonialRatingImageAlt: value })}
                                    globalImageID={TestimonialRatingImageID}
                                    setglobalImageID={(value) => setAttributes({ TestimonialRatingImageID: value })}
                                    isImageSize={false}
                                />
                            )}
                        </BaseControl>
                    </div>

                    {TestimonialRatinIconAlign !== 'none' && (
                        <div className="fb-setting-rating-rangecontrol">
                            <RangeControl
                                label={__("Rating Number", "frontis-blocks")}
                                value={TestimonialRatingNumber}
                                onChange={(value) => setAttributes({ TestimonialRatingNumber: value })}
                                min={1}
                                max={5}
                                resetFallbackValue={5}
                            />
                        </div>
                    )}
                </PanelBody>
            )}

            {QuoteIconSwitcher && (
                <PanelBody
                    title={__("Quote Icon", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-setting-feature-icon-wrapper"
                >
                    <div className='fb-setting-icon-wrapper'>
                        <BaseControl
                            id="fb-setting-text-alignment"
                            className="fb-setting-text-alignment"
                        >
                            <ButtonGroup
                                className="fb-setting-text-alignment-group-btn"
                            >
                                {ICON_ALIGN.map((item, key) => (
                                    <Button
                                        key={key}
                                        onClick={() => setAttributes({ TestimonialQuoteIconAlign: item.value })}
                                        className={`fb-setting-text-alignment-single-btn ${TestimonialQuoteIconAlign === item.value ? 'active' : ''}`}
                                    >
                                        {item.label}
                                    </Button>
                                ))}
                            </ButtonGroup>
                            {TestimonialQuoteIconAlign === 'icon' && (
                                <FBIconPicker value={TestimonialQuoteIcon} setIconHandler={quoteIconHandler} />
                            )}
                            {TestimonialQuoteIconAlign === 'image' && (
                                <FB_ImageControl
                                    globalImageUrl={TestimonialQuoteImageUrl}
                                    setglobalImageUrl={(value) => setAttributes({ TestimonialQuoteImageUrl: value })}
                                    globalImageAlt={TestimonialQuoteImageAlt}
                                    setglobalImageAlt={(value) => setAttributes({ TestimonialQuoteImageAlt: value })}
                                    globalImageID={TestimonialQuoteImageID}
                                    setglobalImageID={(value) => setAttributes({ TestimonialQuoteImageID: value })}
                                    isImageSize={false}
                                />
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
            {RatingSwitcher && (
                <PanelBody
                    title={__("Rating Icon", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-setting-feature-icon-wrapper"
                >

                    <BaseControl
                        label={__("Alignment", "frontis-blocks")}
                        id="fb-setting-text-alignment"
                        className="fb-setting-text-alignment"
                    >
                        <ButtonGroup
                            className="fb-setting-text-alignment-group-btn"
                        >
                            {FLEX_ALIGN.map((item, key) => (
                                <Button
                                    key={key}
                                    onClick={() => setAttributes({ TestimonialRatingIconAlign: item.value })}
                                    className={`fb-setting-text-alignment-single-btn ${TestimonialRatingIconAlign === item.value ? 'active' : ''}`}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </BaseControl>

                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Icon Gap", "frontis-blocks")}
                        rangeValue={TestimonialRatingIconGap}
                        onChangeHandler={(value) => setAttributes({ TestimonialRatingIconGap: value })}
                        rangeUnitHandler={(value) => setAttributes({ TestimonialRatingIconGapUnits: value })}
                        deviceType={deviceType}
                        units={TestimonialRatingIconGapUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                    />

                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Icon Size", "frontis-blocks")}
                        rangeValue={TestimonialRatingIconSize}
                        onChangeHandler={(value) => setAttributes({ TestimonialRatingIconSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ TestimonialRatingIconSizeUnits: value })}
                        deviceType={deviceType}
                        units={TestimonialRatingIconSizeUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                    />

                    {TestimonialRatinIconAlign === 'icon' && (<>
                        <FB_SwitcherControl
                            label={__("Rating Color", "frontis-blocks")}
                            globalSwitcher={TestimonialRatingIconColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ TestimonialRatingIconColorSwitcher: value })}
                        />

                        {TestimonialRatingIconColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={TestimonialRatingIconColor}
                                setGlobalColor={(value) => setAttributes({ TestimonialRatingIconColor: value === undefined ? '' : value })}
                            />
                        )}

                        {TestimonialRatingIconColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={TestimonialRatingIconHoverColor}
                                setGlobalColor={(value) => setAttributes({ TestimonialRatingIconHoverColor: value === undefined ? '' : value })}
                            />
                        )}
                    </>)}

                    <FB_Spacing
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={testimonialRatingIconMarginUnitsHandler}
                        spacingUnits={TestimonialRatingIconMarginUnits}
                        spacingDesktop={TestimonialRatingIconMarginDesktop}
                        spacingTablet={TestimonialRatingIconMarginTablet}
                        spacingMobile={TestimonialRatingIconMarginMobile}
                        handleSpacingUnitHandler={testimonialRatingIconMarginUnitsChange}
                        spacingCombineBtn={TestimonialRatingIconMarginLink}
                        spacingCombineBtnHandler={testimonialRatingIconMarginLinkBtn}
                        setAttributes={setAttributes}
                    />

                </PanelBody>
            )}
            {TitleSwitcher && (
                <PanelBody
                    title={__("Title", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-setting-testimonial-title-wrapper"
                >

                    <FB_HtmlTagControl
                        label={__("Title Tag", "frontis-blocks")}
                        globalHtmlTag={TestimonialTitleTag}
                        setGlobalHtmlTag={(value) => setAttributes({ TestimonialTitleTag: value })}
                    />

                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={TestimonialTitleGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ TestimonialTitleGlobalTypographyData: value })}

                        globalTypoType={TestimonialTitleGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({
                                TestimonialTitleGlobalTypoType: value,
                                TestimonialTitleGlobalTypoSwitcher: value === 'default' ? { ...TestimonialTitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...TestimonialTitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                            })
                        }}

                        globalTypoOption={TestimonialTitleGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ TestimonialTitleGlobalTypoOption: value })}

                        fontFamily={TestimonialTitleFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ TestimonialTitleFontFamily: value, TestimonialTitleGlobalTypoSwitcher: { ...TestimonialTitleGlobalTypoSwitcher, fontFamily: value && false } })}

                        fontSize={TestimonialTitleFontSize}
                        onChangeFontSize={(value) => setAttributes({ TestimonialTitleFontSize: value, TestimonialTitleGlobalTypoSwitcher: { ...TestimonialTitleGlobalTypoSwitcher, fontSize: value && false } })}

                        fontSizeUnits={TestimonialTitleFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ TestimonialTitleFontSizeUnits: value })}

                        fontWeight={TestimonialTitleFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ TestimonialTitleFontWeight: value, TestimonialTitleGlobalTypoSwitcher: { ...TestimonialTitleGlobalTypoSwitcher, fontWeight: value && false } })}

                        fontStyle={TestimonialTitleFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ TestimonialTitleFontStyle: value, TestimonialTitleGlobalTypoSwitcher: { ...TestimonialTitleGlobalTypoSwitcher, fontStyle: value && false } })}

                        textTransform={TestimonialTitleTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ TestimonialTitleTextTransform: value, TestimonialTitleGlobalTypoSwitcher: { ...TestimonialTitleGlobalTypoSwitcher, textTransform: value && false } })}

                        textDecoration={TestimonialTitleTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ TestimonialTitleTextDecoration: value, TestimonialTitleGlobalTypoSwitcher: { ...TestimonialTitleGlobalTypoSwitcher, textDecoration: value && false } })}

                        letterSpacing={TestimonialTitleLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ TestimonialTitleLetterSpacing: value, TestimonialTitleGlobalTypoSwitcher: { ...TestimonialTitleGlobalTypoSwitcher, letterSpacing: value && false } })}

                        letterSpacingUnits={TestimonialTitleLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ TestimonialTitleLetterSpacingUnits: value })}

                        lineHeight={TestimonialTitleLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ TestimonialTitleLineHeight: value, TestimonialTitleGlobalTypoSwitcher: { ...TestimonialTitleGlobalTypoSwitcher, lineHeight: value && false } })}

                        lineHeightUnits={TestimonialTitleLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ TestimonialTitleLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={TestimonialTitleColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ TestimonialTitleColorSwitcher: value })}
                    />

                    {TestimonialTitleColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={TestimonialTitleColor}
                            setGlobalColor={(value) => setAttributes({ TestimonialTitleColor: value === undefined ? '' : value })}
                        />
                    )}

                    {TestimonialTitleColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={TestimonialTitleHoverColor}
                            setGlobalColor={(value) => setAttributes({ TestimonialTitleHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={testimonialTitleMarginUnitsHandler}
                        spacingUnits={TestimonialTitleMarginUnits}
                        spacingDesktop={TestimonialTitleMarginDesktop}
                        spacingTablet={TestimonialTitleMarginTablet}
                        spacingMobile={TestimonialTitleMarginMobile}
                        handleSpacingUnitHandler={testimonialTitleMarginUnitsChange}
                        spacingCombineBtn={TestimonialTitleMarginLink}
                        spacingCombineBtnHandler={testimonialTitleMarginLinkBtn}
                        setAttributes={setAttributes}
                    />

                </PanelBody>
            )}

            {DescSwitcher && (
                <PanelBody
                    title={__("Description", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-setting-testimonial-description-wrapper"
                >
                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={TestimonialDescGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ TestimonialDescGlobalTypographyData: value })}

                        globalTypoType={TestimonialDescGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({
                                TestimonialDescGlobalTypoType: value,
                                TestimonialDescGlobalTypoSwitcher: value === 'default' ? { ...TestimonialDescGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...TestimonialDescGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                            })
                        }}

                        globalTypoOption={TestimonialDescGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ TestimonialDescGlobalTypoOption: value })}

                        fontFamily={TestimonialDescFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ TestimonialDescFontFamily: value, TestimonialDescGlobalTypoSwitcher: { ...TestimonialDescGlobalTypoSwitcher, fontFamily: value && false } })}

                        fontSize={TestimonialDescFontSize}
                        onChangeFontSize={(value) => setAttributes({ TestimonialDescFontSize: value, TestimonialDescGlobalTypoSwitcher: { ...TestimonialDescGlobalTypoSwitcher, fontSize: value && false } })}

                        fontSizeUnits={TestimonialDescFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ TestimonialDescFontSizeUnits: value })}

                        fontWeight={TestimonialDescFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ TestimonialDescFontWeight: value, TestimonialDescGlobalTypoSwitcher: { ...TestimonialDescGlobalTypoSwitcher, fontWeight: value && false } })}

                        fontStyle={TestimonialDescFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ TestimonialDescFontStyle: value, TestimonialDescGlobalTypoSwitcher: { ...TestimonialDescGlobalTypoSwitcher, fontStyle: value && false } })}

                        textTransform={TestimonialDescTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ TestimonialDescTextTransform: value, TestimonialDescGlobalTypoSwitcher: { ...TestimonialDescGlobalTypoSwitcher, textTransform: value && false } })}

                        textDecoration={TestimonialDescTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ TestimonialDescTextDecoration: value, TestimonialDescGlobalTypoSwitcher: { ...TestimonialDescGlobalTypoSwitcher, textDecoration: value && false } })}

                        letterSpacing={TestimonialDescLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ TestimonialDescLetterSpacing: value, TestimonialDescGlobalTypoSwitcher: { ...TestimonialDescGlobalTypoSwitcher, letterSpacing: value && false } })}

                        letterSpacingUnits={TestimonialDescLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ TestimonialDescLetterSpacingUnits: value })}

                        lineHeight={TestimonialDescLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ TestimonialDescLineHeight: value, TestimonialDescGlobalTypoSwitcher: { ...TestimonialDescGlobalTypoSwitcher, lineHeight: value && false } })}

                        lineHeightUnits={TestimonialDescLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ TestimonialDescLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={TestimonialDescColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ TestimonialDescColorSwitcher: value })}
                    />

                    {TestimonialDescColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={TestimonialDescColor}
                            setGlobalColor={(value) => setAttributes({ TestimonialDescColor: value === undefined ? '' : value })}
                        />
                    )}

                    {TestimonialDescColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={TestimonialDescHoverColor}
                            setGlobalColor={(value) => setAttributes({ TestimonialDescHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={testimonialDescMarginUnitsHandler}
                        spacingUnits={TestimonialDescMarginUnits}
                        spacingDesktop={TestimonialDescMarginDesktop}
                        spacingTablet={TestimonialDescMarginTablet}
                        spacingMobile={TestimonialDescMarginMobile}
                        handleSpacingUnitHandler={testimonialDescMarginUnitsChange}
                        spacingCombineBtn={TestimonialDescMarginLink}
                        spacingCombineBtnHandler={testimonialDescMarginLinkBtn}
                        setAttributes={setAttributes}
                    />

                </PanelBody>
            )}

            {TestimonialImageSwitcher && (
                <PanelBody
                    title={__("Avatar", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-setting-testimonial-image-wrapper"
                >
                    <FB_Range
                        min={0}
                        max={200}
                        label={__("Image Width", "frontis-blocks")}
                        rangeValue={TestimonialImageWidth}
                        onChangeHandler={(value) => setAttributes({ TestimonialImageWidth: value })}
                        rangeUnitHandler={(value) => setAttributes({ TestimonialImageWidthUnits: value })}
                        deviceType={deviceType}
                        units={TestimonialImageWidthUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                    />

                    <SelectControl
                        label={__("Image Object Fit", "frontis-blocks")}
                        value={TestimonialImageObjectFit}
                        options={IMAGE_OBJECT_FIT}
                        onChange={(value) =>
                            setAttributes({ TestimonialImageObjectFit: value })
                        }
                        __nextHasNoMarginBottom
                    />

                    <FB_Spacing
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={testimonialImageBorderRadiusUnitsHandler}
                        spacingUnits={TestimonialImageRadiusUnits}
                        spacingDesktop={TestimonialImageDesktopRadiusWidth}
                        spacingTablet={TestimonialImageTabRadiusWidth}
                        spacingMobile={TestimonialImageMobileRadiusWidth}
                        handleSpacingUnitHandler={testimonialImageBorderRadiusUnitsChange}
                        spacingCombineBtn={TestimonialImageRadiusLink}
                        spacingCombineBtnHandler={testimonialImageBorderRadiusLinkBtn}
                        setAttributes={setAttributes}
                    />
                    <FB_Spacing
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={testimonialImageMarginUnitChange}
                        spacingUnits={TestimonialImageMarginUnits}
                        spacingDesktop={TestimonialImageMarginDesktop}
                        spacingTablet={TestimonialImageMarginTablet}
                        spacingMobile={TestimonialImageMarginMobile}
                        handleSpacingUnitHandler={testimonialImageMarginChange}
                        spacingCombineBtn={TestimonialImageMarginLink}
                        spacingCombineBtnHandler={testimonialImageMarginToggle}
                        setAttributes={setAttributes}
                    />

                    <ToggleControl
                        label={__("Position", "frontis-blocks")}
                        checked={TestimonialImagePositionSwitcher}
                        onChange={(value) => setAttributes({ TestimonialImagePositionSwitcher: value })}
                    />

                    {TestimonialImagePositionSwitcher && (
                        <>
                            <FB_Range
                                min={-100}
                                max={100}
                                label={__("Top", "frontis-blocks")}
                                rangeValue={TestimonialImageTopPosition}
                                onChangeHandler={(value) => setAttributes({ TestimonialImageTopPosition: value })}
                                rangeUnitHandler={(value) => setAttributes({ TestimonialImageTopPositionUnits: value })}
                                deviceType={deviceType}
                                units={TestimonialImageTopPositionUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={""}
                            />
                            <FB_Range
                                min={-100}
                                max={100}
                                label={__("Left", "frontis-blocks")}
                                rangeValue={TestimonialImageLeftPosition}
                                onChangeHandler={(value) => setAttributes({ TestimonialImageLeftPosition: value })}
                                rangeUnitHandler={(value) => setAttributes({ TestimonialImageLeftPositionUnits: value })}
                                deviceType={deviceType}
                                units={TestimonialImageLeftPositionUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={""}
                            />
                        </>
                    )}
                </PanelBody>
            )}

            {AuthorSwitcher && (
                <PanelBody
                    title={__("Author Name", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-setting-testimonial-author-wrapper"
                >
                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={TestimonialAuthorGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ TestimonialAuthorGlobalTypographyData: value })}

                        globalTypoType={TestimonialAuthorGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({
                                TestimonialAuthorGlobalTypoType: value,
                                TestimonialAuthorGlobalTypoSwitcher: value === 'default' ? { ...TestimonialAuthorGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...TestimonialAuthorGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                            })
                        }}

                        globalTypoOption={TestimonialAuthorGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ TestimonialAuthorGlobalTypoOption: value })}

                        fontFamily={TestimonialAuthorFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ TestimonialAuthorFontFamily: value, TestimonialAuthorGlobalTypoSwitcher: { ...TestimonialAuthorGlobalTypoSwitcher, fontFamily: value && false } })}

                        fontSize={TestimonialAuthorFontSize}
                        onChangeFontSize={(value) => setAttributes({ TestimonialAuthorFontSize: value, TestimonialAuthorGlobalTypoSwitcher: { ...TestimonialAuthorGlobalTypoSwitcher, fontSize: value && false } })}

                        fontSizeUnits={TestimonialAuthorFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ TestimonialAuthorFontSizeUnits: value })}

                        fontWeight={TestimonialAuthorFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ TestimonialAuthorFontWeight: value, TestimonialAuthorGlobalTypoSwitcher: { ...TestimonialAuthorGlobalTypoSwitcher, fontWeight: value && false } })}

                        fontStyle={TestimonialAuthorFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ TestimonialAuthorFontStyle: value, TestimonialAuthorGlobalTypoSwitcher: { ...TestimonialAuthorGlobalTypoSwitcher, fontStyle: value && false } })}

                        textTransform={TestimonialAuthorTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ TestimonialAuthorTextTransform: value, TestimonialAuthorGlobalTypoSwitcher: { ...TestimonialAuthorGlobalTypoSwitcher, textTransform: value && false } })}

                        textDecoration={TestimonialAuthorTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ TestimonialAuthorTextDecoration: value, TestimonialAuthorGlobalTypoSwitcher: { ...TestimonialAuthorGlobalTypoSwitcher, textDecoration: value && false } })}

                        letterSpacing={TestimonialAuthorLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ TestimonialAuthorLetterSpacing: value, TestimonialAuthorGlobalTypoSwitcher: { ...TestimonialAuthorGlobalTypoSwitcher, letterSpacing: value && false } })}

                        letterSpacingUnits={TestimonialAuthorLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ TestimonialAuthorLetterSpacingUnits: value })}

                        lineHeight={TestimonialAuthorLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ TestimonialAuthorLineHeight: value, TestimonialAuthorGlobalTypoSwitcher: { ...TestimonialAuthorGlobalTypoSwitcher, lineHeight: value && false } })}

                        lineHeightUnits={TestimonialAuthorLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ TestimonialAuthorLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={TestimonialAuthorColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ TestimonialAuthorColorSwitcher: value })}
                    />

                    {TestimonialAuthorColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={TestimonialAuthorColor}
                            setGlobalColor={(value) => setAttributes({ TestimonialAuthorColor: value === undefined ? '' : value })}
                        />
                    )}

                    {TestimonialAuthorColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={TestimonialAuthorHoverColor}
                            setGlobalColor={(value) => setAttributes({ TestimonialAuthorHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={testimonialAuthorMarginUnitChange}
                        spacingUnits={TestimonialAuthorMarginUnits}
                        spacingDesktop={TestimonialAuthorMarginDesktop}
                        spacingTablet={TestimonialAuthorMarginTablet}
                        spacingMobile={TestimonialAuthorMarginMobile}
                        handleSpacingUnitHandler={testimonialAuthorMarginChange}
                        spacingCombineBtn={TestimonialAuthorMarginLink}
                        spacingCombineBtnHandler={testimonialAuthorMarginToggle}
                        setAttributes={setAttributes}
                    />

                </PanelBody>
            )}

            {DesignationSwitcher && (
                <PanelBody
                    title={__("Author Designation", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-setting-testimonial-designation-wrapper"
                >
                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={TestimonialDesignationGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ TestimonialDesignationGlobalTypographyData: value })}

                        globalTypoType={TestimonialDesignationGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({
                                TestimonialDesignationGlobalTypoType: value,
                                TestimonialDesignationGlobalTypoSwitcher: value === 'default' ? { ...TestimonialDesignationGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...TestimonialDesignationGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                            })
                        }}

                        globalTypoOption={TestimonialDesignationGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ TestimonialDesignationGlobalTypoOption: value })}

                        fontFamily={TestimonialDesignationFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ TestimonialDesignationFontFamily: value, TestimonialDesignationGlobalTypoSwitcher: { ...TestimonialDesignationGlobalTypoSwitcher, fontFamily: value && false } })}

                        fontSize={TestimonialDesignationFontSize}
                        onChangeFontSize={(value) => setAttributes({ TestimonialDesignationFontSize: value, TestimonialDesignationGlobalTypoSwitcher: { ...TestimonialDesignationGlobalTypoSwitcher, fontSize: value && false } })}

                        fontSizeUnits={TestimonialDesignationFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ TestimonialDesignationFontSizeUnits: value })}

                        fontWeight={TestimonialDesignationFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ TestimonialDesignationFontWeight: value, TestimonialDesignationGlobalTypoSwitcher: { ...TestimonialDesignationGlobalTypoSwitcher, fontWeight: value && false } })}

                        fontStyle={TestimonialDesignationFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ TestimonialDesignationFontStyle: value, TestimonialDesignationGlobalTypoSwitcher: { ...TestimonialDesignationGlobalTypoSwitcher, fontStyle: value && false } })}

                        textTransform={TestimonialDesignationTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ TestimonialDesignationTextTransform: value, TestimonialDesignationGlobalTypoSwitcher: { ...TestimonialDesignationGlobalTypoSwitcher, textTransform: value && false } })}

                        textDecoration={TestimonialDesignationTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ TestimonialDesignationTextDecoration: value, TestimonialDesignationGlobalTypoSwitcher: { ...TestimonialDesignationGlobalTypoSwitcher, textDecoration: value && false } })}

                        letterSpacing={TestimonialDesignationLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ TestimonialDesignationLetterSpacing: value, TestimonialDesignationGlobalTypoSwitcher: { ...TestimonialDesignationGlobalTypoSwitcher, letterSpacing: value && false } })}

                        letterSpacingUnits={TestimonialDesignationLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ TestimonialDesignationLetterSpacingUnits: value })}

                        lineHeight={TestimonialDesignationLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ TestimonialDesignationLineHeight: value, TestimonialDesignationGlobalTypoSwitcher: { ...TestimonialDesignationGlobalTypoSwitcher, lineHeight: value && false } })}

                        lineHeightUnits={TestimonialDesignationLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ TestimonialDesignationLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={TestimonialDesignationColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ TestimonialDesignationColorSwitcher: value })}
                    />

                    {TestimonialDesignationColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={TestimonialDesignationColor}
                            setGlobalColor={(value) => setAttributes({ TestimonialDesignationColor: value === undefined ? '' : value })}
                        />
                    )}

                    {TestimonialDesignationColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={TestimonialDesignationHoverColor}
                            setGlobalColor={(value) => setAttributes({ TestimonialDesignationHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={testimonialDesignationMarginUnitChange}
                        spacingUnits={TestimonialDesignationMarginUnits}
                        spacingDesktop={TestimonialDesignationMarginDesktop}
                        spacingTablet={TestimonialDesignationMarginTablet}
                        spacingMobile={TestimonialDesignationMarginMobile}
                        handleSpacingUnitHandler={testimonialDesignationMarginChange}
                        spacingCombineBtn={TestimonialDesignationMarginLink}
                        spacingCombineBtnHandler={testimonialDesignationMarginToggle}
                        setAttributes={setAttributes}
                    />

                </PanelBody>
            )}
            {QuoteIconSwitcher && (
                <PanelBody
                    title={__("Quote Icon", "frontis-blocks")}
                    initialOpen={false}
                    className="fb-setting-feature-icon-wrapper"
                >
                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Icon Size", "frontis-blocks")}
                        rangeValue={TestimonialQuoteIconSize}
                        onChangeHandler={(value) => setAttributes({ TestimonialQuoteIconSize: value })}
                        rangeUnitHandler={(value) => setAttributes({ TestimonialQuoteIconSizeUnits: value })}
                        deviceType={deviceType}
                        units={TestimonialQuoteIconSizeUnits}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                    />

                    {TestimonialQuoteIconAlign === 'icon' && (<>
                        <FB_SwitcherControl
                            label={__("Icon Color", "frontis-blocks")}
                            globalSwitcher={TestimonialQuoteIconColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ TestimonialQuoteIconColorSwitcher: value })}
                        />

                        {TestimonialQuoteIconColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={TestimonialQuoteIconColor}
                                setGlobalColor={(value) => setAttributes({ TestimonialQuoteIconColor: value === undefined ? '' : value })}
                            />
                        )}

                        {TestimonialQuoteIconColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={TestimonialQuoteIconHoverColor}
                                setGlobalColor={(value) => setAttributes({ TestimonialQuoteIconHoverColor: value === undefined ? '' : value })}
                            />
                        )}
                    </>)}

                    <FB_Spacing
                        label={__("Margin", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={testimonialQuoteIconMarginUnitChange}
                        spacingUnits={TestimonialQuoteIconMarginUnits}
                        spacingDesktop={TestimonialQuoteIconMarginDesktop}
                        spacingTablet={TestimonialQuoteIconMarginTablet}
                        spacingMobile={TestimonialQuoteIconMarginMobile}
                        handleSpacingUnitHandler={testimonialQuoteIconMarginChange}
                        spacingCombineBtn={TestimonialQuoteIconMarginLink}
                        spacingCombineBtnHandler={testimonialQuoteIconMarginToggle}
                        setAttributes={setAttributes}
                    />
                    <ToggleControl
                        label={__("Position", "frontis-blocks")}
                        checked={TestimonialQuoteIconPositionSwitcher}
                        onChange={(value) => setAttributes({ TestimonialQuoteIconPositionSwitcher: value })}
                    />

                    {TestimonialQuoteIconPositionSwitcher && (
                        <>
                            <FB_Range
                                min={0}
                                max={100}
                                label={__("Top", "frontis-blocks")}
                                rangeValue={TestimonialQuoteIconTopPosition}
                                onChangeHandler={(value) => setAttributes({ TestimonialQuoteIconTopPosition: value })}
                                rangeUnitHandler={(value) => setAttributes({ TestimonialQuoteIconTopPositionUnits: value })}
                                deviceType={deviceType}
                                units={TestimonialQuoteIconTopPositionUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={""}
                            />
                            <FB_Range
                                min={0}
                                max={100}
                                label={__("Left", "frontis-blocks")}
                                rangeValue={TestimonialQuoteIconLeftPosition}
                                onChangeHandler={(value) => setAttributes({ TestimonialQuoteIconLeftPosition: value })}
                                rangeUnitHandler={(value) => setAttributes({ TestimonialQuoteIconLeftPositionUnits: value })}
                                deviceType={deviceType}
                                units={TestimonialQuoteIconLeftPositionUnits}
                                setAttributes={setAttributes}
                                rangeStep={1}
                                resetFallbackValue={""}
                            />
                        </>
                    )}
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
                            rangeValue={TestimonialGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ TestimonialGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}
                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={TestimonialOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ TestimonialOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={testimonialPositionType}
                            setPositionType={(value) => setAttributes({ testimonialPositionType: value })}

                            HZOrientationType={testimonialHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ testimonialHZOrientationType: value })
                            }
                            VROrientationType={testimonialVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ testimonialVROrientationType: value })
                            }

                            HZLeftOffset={testimonialHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ testimonialHZLeftOffset: value })}
                            HZLeftOffsetUnits={testimonialHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ testimonialHZLeftOffsetUnits: value })}
                            HZRightOffset={testimonialHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ testimonialHZRightOffset: value })}
                            HZRightOffsetUnits={testimonialHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ testimonialHZRightOffsetUnits: value })}

                            VRTopOffset={testimonialVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ testimonialVRTopOffset: value })}
                            VRTopOffsetUnits={testimonialVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ testimonialVRTopOffsetUnits: value })}
                            VRBottomOffset={testimonialVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ testimonialVRBottomOffset: value })}
                            VRBottomOffsetUnits={testimonialVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ testimonialVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={testimonialGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ testimonialGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={testimonialGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ testimonialGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Background Color", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_BackgroundColorControl
                            label={__("Background Color", "frontis-blocks")}
                            bgColorSwitcher={TestimonialGlobalBgColorSwitcher}
                            setBgColorSwitcher={(value) => setAttributes({ TestimonialGlobalBgColorSwitcher: value })}

                            normalBackgroundType={TestimonialGlobalBgNormalBackgroundType}
                            setNormalBackgroundType={(value) => setAttributes({ TestimonialGlobalBgNormalBackgroundType: value })}
                            normalClassicColor={TestimonialGlobalBgNormalClassicColor}
                            setNormalClassicColor={(value) => setAttributes({ TestimonialGlobalBgNormalClassicColor: value === undefined ? '' : value })}
                            normalGradientColor={TestimonialGlobalBgNormalGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ TestimonialGlobalBgNormalGradientColor: value === undefined ? '' : value })}
                            normalCustomGradientSwitcher={TestimonialGlobalBgNormalCustomGradientSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ TestimonialGlobalBgNormalCustomGradientSwitcher: value })}
                            normalCustomGradientInputValue={TestimonialGlobalBgNormalCustomGradientInputValue}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ TestimonialGlobalBgNormalCustomGradientInputValue: value })}

                            hoverBackgroundType={TestimonialGlobalBgHoverBackgroundType}
                            setHoverBackgroundType={(value) => setAttributes({ TestimonialGlobalBgHoverBackgroundType: value })}
                            hoverClassicColor={TestimonialGlobalBgHoverClassicColor}
                            setHoverClassicColor={(value) => setAttributes({ TestimonialGlobalBgHoverClassicColor: value === undefined ? '' : value })}
                            hoverGradientColor={TestimonialGlobalBgHoverGradientColor}
                            setHoverGradientColor={(value) => setAttributes({ TestimonialGlobalBgHoverGradientColor: value === undefined ? '' : value })}
                            hoverCustomGradientSwitcher={TestimonialGlobalBgHoverCustomGradientSwitcher}
                            setHoverCustomGradientSwitcher={(value) => setAttributes({ TestimonialGlobalBgHoverCustomGradientSwitcher: value })}
                            hoverCustomGradientInputValue={TestimonialGlobalBgHoverCustomGradientInputValue}
                            setHoverCustomGradientInputValue={(value) => setAttributes({ TestimonialGlobalBgHoverCustomGradientInputValue: value })}

                            isBackgroundImage={false}
                        />
                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={TestimonialGlobalPaddingUnits}
                            spacingDesktop={TestimonialGlobalPaddingDesktop}
                            spacingTablet={TestimonialGlobalPaddingTablet}
                            spacingMobile={TestimonialGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={TestimonialGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={TestimonialGlobalMarginUnits}
                            spacingDesktop={TestimonialGlobalMarginDesktop}
                            spacingTablet={TestimonialGlobalMarginTablet}
                            spacingMobile={TestimonialGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={TestimonialGlobalMarginLink}
                            spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Border and Shadow", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={TestimonialGlobalBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ TestimonialGlobalBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={TestimonialGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ TestimonialGlobalBorderColorSwitcher: value })}
                        />

                        {TestimonialGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={TestimonialGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ TestimonialGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {TestimonialGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={TestimonialGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ TestimonialGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={TestimonialGlobalBorderUnits}
                            spacingDesktop={TestimonialGlobalBorderDesktop}
                            spacingTablet={TestimonialGlobalBorderTablet}
                            spacingMobile={TestimonialGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={TestimonialGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={TestimonialGlobalBorderRadiusUnits}
                            spacingDesktop={TestimonialGlobalBorderRadiusDesktop}
                            spacingTablet={TestimonialGlobalBorderRadiusTablet}
                            spacingMobile={TestimonialGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={TestimonialGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={TestimonialGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ TestimonialGlobalBoxShadowSwitcher: value })}
                        />

                        {TestimonialGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ TestimonialGlobalBoxShadowValues: value })}
                                initialShadowValue={TestimonialGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ TestimonialGlobalBoxShadowCssValue: value })}
                            />
                        )}

                        {TestimonialGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ TestimonialGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={TestimonialGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ TestimonialGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}

                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={testimonialDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ testimonialDesktopSwitcher: value })}

                            tabletValue={testimonialTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ testimonialTabletSwitcher: value })}

                            mobileValue={testimonialMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ testimonialMobileSwitcher: value })}
                        />

                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={testimonialCustomCSS}
                            onChangeValue={(value) => setAttributes({ testimonialCustomCSS: value })}
                        />
                    </PanelBody>
                </div>
            </div>
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