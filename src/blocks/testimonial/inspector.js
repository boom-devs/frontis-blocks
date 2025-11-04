import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect, useMemo } from '@wordpress/element';

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
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_ImageControl from '@Components/image-control';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import getProToggleControls from '@Utils/getProToggleControls';
import DynamicDataSourceControl from '@Components/dynamic-data-source-control';
import DynamicDataLinkControl from '@Components/dynamic-data-link-control';
import generateSvgIcon from '@Utils/generateSvgIcon';
import getProActive from '@Utils/getProActive';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const { 
        blockID,
        // deviceType,
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

    const deviceType= useDeviceType();

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-testimonial-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);


    /** Start load font */
    useEffect(() => {
        loadGoogleFont(TestimonialTitleFontFamily);
        loadGoogleFont(TestimonialDescFontFamily);
        loadGoogleFont(TestimonialAuthorFontFamily);
        loadGoogleFont(TestimonialDesignationFontFamily);
    }, [TestimonialTitleFontFamily, 
        TestimonialDescFontFamily, 
        TestimonialAuthorFontFamily, 
        TestimonialDesignationFontFamily
    ]);
    /** End load font */


    const quoteIconHandler = (IconName) => {
		setAttributes({TestimonialQuoteIcon: IconName})

	}
    const ratingIconHandler = (IconName) => {
		setAttributes({TestimonialRatingicon: IconName})
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
                TestimonialImageTabletRadiusWidth :{
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialImageMobileRadiusWidth :{
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialAuthorMarginDesktop : {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialDesignationMarginDesktop : {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialGlobalBgNormalClassicColor : '#fefaf3',
                TestimonialDescColor : '',
                TestimonialAuthorColor : '',

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
                TestimonialImageTabletRadiusWidth :{
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialImageMobileRadiusWidth :{
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialAuthorMarginDesktop : {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialDesignationMarginDesktop : {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialGlobalBgNormalClassicColor : '#f7f7f7',
                TestimonialDescColor : '',
                TestimonialAuthorColor : '',

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
                TestimonialImageTabletRadiusWidth :{
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialImageMobileRadiusWidth :{
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialAuthorMarginDesktop : {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialDesignationMarginDesktop : {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialGlobalBgNormalClassicColor : '#f7f7f7',
                TestimonialDescColor : '',
                TestimonialAuthorColor : '',
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
                TestimonialImageTabletRadiusWidth :{
                    top: '10',
                    right: '10',
                    bottom: '10',
                    left: '10',
                },
                TestimonialImageMobileRadiusWidth :{
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
                TestimonialAuthorMarginDesktop : {
                    top: '0',
                    bottom: '0',
                    left: '100',
                    right: '0',
                },
                TestimonialDesignationMarginDesktop : {
                    top: '0',
                    bottom: '0',
                    left: '100',
                    right: '0',
                },
                TestimonialGlobalBgNormalClassicColor : '#f7f7f7',
                TestimonialDescColor : '',
                TestimonialAuthorColor : '',
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
                TestimonialImageTabletRadiusWidth :{
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialImageMobileRadiusWidth :{
                    top: '50',
                    right: '50',
                    bottom: '50',
                    left: '50',
                },
                TestimonialAuthorMarginDesktop : {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialDesignationMarginDesktop : {
                    top: '0',
                    bottom: '0',
                    left: '0',
                    right: '0',
                },
                TestimonialGlobalBgNormalClassicColor : '#404655',
                TestimonialDescColor : '#ffffff',
                TestimonialAuthorColor : '#ffffff',
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
	const handleGlobalPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( TestimonialGlobalPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						TestimonialGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						TestimonialGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						TestimonialGlobalPaddingMobile: {
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
					setAttributes( {TestimonialGlobalPaddingDesktop: {...TestimonialGlobalPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {TestimonialGlobalPaddingTablet: {...TestimonialGlobalPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {TestimonialGlobalPaddingMobile: {...TestimonialGlobalPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes( {TestimonialGlobalPaddingLink: !TestimonialGlobalPaddingLink} );
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes( {
			TestimonialGlobalPaddingUnits: {
				...TestimonialGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopPadding    = `${TestimonialGlobalPaddingDesktop?.top}${TestimonialGlobalPaddingUnits?.Desktop} ${TestimonialGlobalPaddingDesktop?.right}${TestimonialGlobalPaddingUnits?.Desktop} ${TestimonialGlobalPaddingDesktop?.bottom}${TestimonialGlobalPaddingUnits?.Desktop} ${TestimonialGlobalPaddingDesktop?.left}${TestimonialGlobalPaddingUnits?.Desktop}`;
	const globalTabletPadding     = `${TestimonialGlobalPaddingTablet?.top}${TestimonialGlobalPaddingUnits?.Tablet} ${TestimonialGlobalPaddingTablet?.right}${TestimonialGlobalPaddingUnits?.Tablet} ${TestimonialGlobalPaddingTablet?.bottom}${TestimonialGlobalPaddingUnits?.Tablet} ${TestimonialGlobalPaddingTablet?.left}${TestimonialGlobalPaddingUnits?.Tablet}`;
	const globalMobilePadding     = `${TestimonialGlobalPaddingMobile?.top}${TestimonialGlobalPaddingUnits?.Mobile} ${TestimonialGlobalPaddingMobile?.right}${TestimonialGlobalPaddingUnits?.Mobile} ${TestimonialGlobalPaddingMobile?.bottom}${TestimonialGlobalPaddingUnits?.Mobile} ${TestimonialGlobalPaddingMobile?.left}${TestimonialGlobalPaddingUnits?.Mobile}`;
	/** End Global Padding */
	
	/** Start Global Margin */
	const handleGlobalMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( TestimonialGlobalMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						TestimonialGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						TestimonialGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						TestimonialGlobalMarginMobile: {
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
					setAttributes( {TestimonialGlobalMarginDesktop: {...TestimonialGlobalMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {TestimonialGlobalMarginTablet: {...TestimonialGlobalMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {TestimonialGlobalMarginMobile: {...TestimonialGlobalMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes( {TestimonialGlobalMarginLink: !TestimonialGlobalMarginLink} );
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes( {
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
	const handleGlobalBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( TestimonialGlobalBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						TestimonialGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						TestimonialGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						TestimonialGlobalBorderMobile: {
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
					setAttributes( {TestimonialGlobalBorderDesktop: {...TestimonialGlobalBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {TestimonialGlobalBorderTablet: {...TestimonialGlobalBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {TestimonialGlobalBorderMobile: {...TestimonialGlobalBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes( {TestimonialGlobalBorderLink: !TestimonialGlobalBorderLink} );
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes( {
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
	const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( TestimonialGlobalBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						TestimonialGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						TestimonialGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						TestimonialGlobalBorderRadiusMobile: {
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
					setAttributes( {TestimonialGlobalBorderRadiusDesktop: {...TestimonialGlobalBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {TestimonialGlobalBorderRadiusTablet: {...TestimonialGlobalBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {TestimonialGlobalBorderRadiusMobile: {...TestimonialGlobalBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes( {TestimonialGlobalBorderRadiusLink: !TestimonialGlobalBorderRadiusLink} );
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
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
                background: ${
                    TestimonialGlobalBgNormalCustomGradientSwitcher && TestimonialGlobalBgNormalCustomGradientInputValue 
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
                background: ${
                    TestimonialGlobalBgHoverCustomGradientSwitcher && TestimonialGlobalBgHoverCustomGradientInputValue 
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
            ${testimonialQuoteIconDesktopMargin && TestimonialQuoteIconMarginDesktop?.top? `margin: ${testimonialQuoteIconDesktopMargin};` : ''}
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
        setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle, customCss]);


    const editorStyle = `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

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
		isProActive : getProActiveState
	});

	const dynamicDescriptionContentToggleControls = getProToggleControls({
		hook: 'frontisblocks-testimonial-dynamic-description-toggle-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicDescriptionEnabled',
		label: __('Dynamic Description', 'frontis-blocks'),
		keyPrefix: 'testimonial-dynamic-description-content',
		isProActive : getProActiveState
	});

    const dynamicAuthorNameContentToggleControls = getProToggleControls({
		hook: 'frontisblocks-testimonial-dynamic-author-name-toggle-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicAuthorNameEnabled',
		label: __('Dynamic Author Name', 'frontis-blocks'),
		keyPrefix: 'testimonial-dynamic-author-name-content',
		isProActive : getProActiveState
	});

	const dynamicAuthorDesignationContentToggleControls = getProToggleControls({
		hook: 'frontisblocks-testimonial-dynamic-author-designation-toggle-controls',
		attributes,
		setAttributes,
		dynamicAttr: 'dynamicAuthorDesignationEnabled',
		label: __('Dynamic Author Designation', 'frontis-blocks'),
		keyPrefix: 'testimonial-dynamic-author-designation-content',
		isProActive : getProActiveState
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
                    <SelectControl
                        label={__("Preset Style", "frontis-blocks")}
                        value={TestimonialPresetStyle}
                        options={PRESETS}
                        onChange={(selected) => changeTestimonialPreset(selected)}
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
						setCommentsOneText={(value) =>setAttributes({ dynamicTitleCommentsOneText: value })}
						commentsManyText={dynamicTitleCommentsManyText}
						setCommentsManyText={(value) =>setAttributes({ dynamicTitleCommentsManyText: value })}

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
                        setCommentsOneText={(value) =>setAttributes({ dynamicDescriptionCommentsOneText: value })}
                        commentsManyText={dynamicDescriptionCommentsManyText}
                        setCommentsManyText={(value) =>setAttributes({ dynamicDescriptionCommentsManyText: value })}

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
                            <div className="fb-testimonial-image-control" style={{backgroundImage: `url(${TestimonialImageUrl})`}}>
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
                                        <path d="M12.9431 22C18.466 22 22.9431 17.5228 22.9431 12C22.9431 6.47715 18.466 2 12.9431 2C7.42027 2 2.94312 6.47715 2.94312 12C2.94312 17.5228 7.42027 22 12.9431 22Z" stroke="#1C274C"/>
                                        <path d="M15.4431 9.50002L10.4431 14.5M10.4431 9.5L15.4431 14.5" stroke="#1C274C"/>
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

                                        mediaUploader.on('select', function() {
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
                                        <path d="M10.4431 19.75C10.8573 19.75 11.1931 19.4142 11.1931 19C11.1931 18.5858 10.8573 18.25 10.4431 18.25V19.75ZM11.9431 5V5.75C12.2464 5.75 12.5199 5.56727 12.636 5.28701C12.7521 5.00676 12.6879 4.68417 12.4734 4.46967L11.9431 5ZM10.4734 2.46967C10.1806 2.17678 9.70568 2.17678 9.41279 2.46967C9.1199 2.76256 9.1199 3.23744 9.41279 3.53033L10.4734 2.46967ZM10.4431 18.25H9.9434V19.75H10.4431V18.25ZM9.94312 5.75H11.9431V4.25H9.94312V5.75ZM12.4734 4.46967L10.4734 2.46967L9.41279 3.53033L11.4128 5.53033L12.4734 4.46967ZM2.19312 12C2.19312 16.2802 5.66323 19.75 9.9434 19.75V18.25C6.49158 18.25 3.69312 15.4517 3.69312 12H2.19312ZM3.69312 12C3.69312 8.54822 6.49134 5.75 9.94312 5.75V4.25C5.66291 4.25 2.19312 7.71979 2.19312 12H3.69312Z" fill="#1C274C"/>
                                        <path d="M13.9431 19V18.25C13.6398 18.25 13.3663 18.4327 13.2502 18.713C13.1341 18.9932 13.1983 19.3158 13.4128 19.5303L13.9431 19ZM15.4128 21.5303C15.7057 21.8232 16.1805 21.8232 16.4734 21.5303C16.7663 21.2374 16.7663 20.7626 16.4734 20.4697L15.4128 21.5303ZM15.4431 4.25C15.0289 4.25 14.6931 4.58579 14.6931 5C14.6931 5.41421 15.0289 5.75 15.4431 5.75V4.25ZM15.9431 18.25H13.9431V19.75H15.9431V18.25ZM13.4128 19.5303L15.4128 21.5303L16.4734 20.4697L14.4734 18.4697L13.4128 19.5303ZM15.4431 5.75H15.9431V4.25H15.4431V5.75ZM22.1931 12C22.1931 15.4518 19.3949 18.25 15.9431 18.25V19.75C20.2233 19.75 23.6931 16.2802 23.6931 12H22.1931ZM23.6931 12C23.6931 7.71979 20.2233 4.25 15.9431 4.25V5.75C19.3949 5.75 22.1931 8.54822 22.1931 12H23.6931Z" fill="#1C274C"/>
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

                                    mediaUploader.on('select', function() {
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
                        setCommentsOneText={(value) =>setAttributes({ dynamicAuthorNameCommentsOneText: value })}
                        commentsManyText={dynamicAuthorNameCommentsManyText}
                        setCommentsManyText={(value) =>setAttributes({ dynamicAuthorNameCommentsManyText: value })}

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
                        setCommentsOneText={(value) =>setAttributes({ dynamicAuthorDesignationCommentsOneText: value })}
                        commentsManyText={dynamicAuthorDesignationCommentsManyText}
                        setCommentsManyText={(value) =>setAttributes({ dynamicAuthorDesignationCommentsManyText: value })}

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
                            TestimonialTitleGlobalTypoSwitcher: value === 'default' ? {...TestimonialTitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...TestimonialTitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={TestimonialTitleGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ TestimonialTitleGlobalTypoOption: value })}

                    fontFamily={TestimonialTitleFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ TestimonialTitleFontFamily: value, TestimonialTitleGlobalTypoSwitcher: {...TestimonialTitleGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={TestimonialTitleFontSize}
                    onChangeFontSize={(value) => setAttributes({ TestimonialTitleFontSize: value, TestimonialTitleGlobalTypoSwitcher: {...TestimonialTitleGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={TestimonialTitleFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ TestimonialTitleFontSizeUnits: value })}

                    fontWeight={TestimonialTitleFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ TestimonialTitleFontWeight: value, TestimonialTitleGlobalTypoSwitcher: {...TestimonialTitleGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={TestimonialTitleFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ TestimonialTitleFontStyle: value, TestimonialTitleGlobalTypoSwitcher: {...TestimonialTitleGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={TestimonialTitleTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ TestimonialTitleTextTransform: value, TestimonialTitleGlobalTypoSwitcher: {...TestimonialTitleGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={TestimonialTitleTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ TestimonialTitleTextDecoration: value, TestimonialTitleGlobalTypoSwitcher: {...TestimonialTitleGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={TestimonialTitleLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ TestimonialTitleLetterSpacing: value, TestimonialTitleGlobalTypoSwitcher: {...TestimonialTitleGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={TestimonialTitleLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ TestimonialTitleLetterSpacingUnits: value })}

                    lineHeight={TestimonialTitleLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ TestimonialTitleLineHeight: value, TestimonialTitleGlobalTypoSwitcher: {...TestimonialTitleGlobalTypoSwitcher, lineHeight: value && false} })}

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
                        TestimonialDescGlobalTypoSwitcher: value === 'default' ? {...TestimonialDescGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...TestimonialDescGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                    })
                }}

                globalTypoOption={TestimonialDescGlobalTypoOption}
                onChangeGlobalTypoOption={(value) => setAttributes({ TestimonialDescGlobalTypoOption: value })}

                fontFamily={TestimonialDescFontFamily}
                onChangeFontFamily={(value) => setAttributes({ TestimonialDescFontFamily: value, TestimonialDescGlobalTypoSwitcher: {...TestimonialDescGlobalTypoSwitcher, fontFamily: value && false} })}

                fontSize={TestimonialDescFontSize}
                onChangeFontSize={(value) => setAttributes({ TestimonialDescFontSize: value, TestimonialDescGlobalTypoSwitcher: {...TestimonialDescGlobalTypoSwitcher, fontSize: value && false} })}

                fontSizeUnits={TestimonialDescFontSizeUnits}
                onChangeFontSizeUnit={(value) => setAttributes({ TestimonialDescFontSizeUnits: value })}

                fontWeight={TestimonialDescFontWeight}
                onChangeFontWeight={(value) => setAttributes({ TestimonialDescFontWeight: value, TestimonialDescGlobalTypoSwitcher: {...TestimonialDescGlobalTypoSwitcher, fontWeight: value && false} })}

                fontStyle={TestimonialDescFontStyle}
                onChangeFontStyle={(value) => setAttributes({ TestimonialDescFontStyle: value, TestimonialDescGlobalTypoSwitcher: {...TestimonialDescGlobalTypoSwitcher, fontStyle: value && false} })}

                textTransform={TestimonialDescTextTransform}
                onChangeTextTransform={(value) => setAttributes({ TestimonialDescTextTransform: value, TestimonialDescGlobalTypoSwitcher: {...TestimonialDescGlobalTypoSwitcher, textTransform: value && false} })}

                textDecoration={TestimonialDescTextDecoration}
                onChangeTextDecoration={(value) => setAttributes({ TestimonialDescTextDecoration: value, TestimonialDescGlobalTypoSwitcher: {...TestimonialDescGlobalTypoSwitcher, textDecoration: value && false} })}

                letterSpacing={TestimonialDescLetterSpacing}
                onChangeLetterSpacing={(value) => setAttributes({ TestimonialDescLetterSpacing: value, TestimonialDescGlobalTypoSwitcher: {...TestimonialDescGlobalTypoSwitcher, letterSpacing: value && false} })}

                letterSpacingUnits={TestimonialDescLetterSpacingUnits}
                onChangeLetterSpacingUnit={(value) => setAttributes({ TestimonialDescLetterSpacingUnits: value })}

                lineHeight={TestimonialDescLineHeight}
                onChangeLineHeight={(value) => setAttributes({ TestimonialDescLineHeight: value, TestimonialDescGlobalTypoSwitcher: {...TestimonialDescGlobalTypoSwitcher, lineHeight: value && false} })}

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
                            TestimonialAuthorGlobalTypoSwitcher: value === 'default' ? {...TestimonialAuthorGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...TestimonialAuthorGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={TestimonialAuthorGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ TestimonialAuthorGlobalTypoOption: value })}

                    fontFamily={TestimonialAuthorFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ TestimonialAuthorFontFamily: value, TestimonialAuthorGlobalTypoSwitcher: {...TestimonialAuthorGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={TestimonialAuthorFontSize}
                    onChangeFontSize={(value) => setAttributes({ TestimonialAuthorFontSize: value, TestimonialAuthorGlobalTypoSwitcher: {...TestimonialAuthorGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={TestimonialAuthorFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ TestimonialAuthorFontSizeUnits: value })}

                    fontWeight={TestimonialAuthorFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ TestimonialAuthorFontWeight: value, TestimonialAuthorGlobalTypoSwitcher: {...TestimonialAuthorGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={TestimonialAuthorFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ TestimonialAuthorFontStyle: value, TestimonialAuthorGlobalTypoSwitcher: {...TestimonialAuthorGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={TestimonialAuthorTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ TestimonialAuthorTextTransform: value, TestimonialAuthorGlobalTypoSwitcher: {...TestimonialAuthorGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={TestimonialAuthorTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ TestimonialAuthorTextDecoration: value, TestimonialAuthorGlobalTypoSwitcher: {...TestimonialAuthorGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={TestimonialAuthorLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ TestimonialAuthorLetterSpacing: value, TestimonialAuthorGlobalTypoSwitcher: {...TestimonialAuthorGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={TestimonialAuthorLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ TestimonialAuthorLetterSpacingUnits: value })}

                    lineHeight={TestimonialAuthorLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ TestimonialAuthorLineHeight: value, TestimonialAuthorGlobalTypoSwitcher: {...TestimonialAuthorGlobalTypoSwitcher, lineHeight: value && false} })}

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
                            TestimonialDesignationGlobalTypoSwitcher: value === 'default' ? {...TestimonialDesignationGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...TestimonialDesignationGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={TestimonialDesignationGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ TestimonialDesignationGlobalTypoOption: value })}

                    fontFamily={TestimonialDesignationFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ TestimonialDesignationFontFamily: value, TestimonialDesignationGlobalTypoSwitcher: {...TestimonialDesignationGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={TestimonialDesignationFontSize}
                    onChangeFontSize={(value) => setAttributes({ TestimonialDesignationFontSize: value, TestimonialDesignationGlobalTypoSwitcher: {...TestimonialDesignationGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={TestimonialDesignationFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ TestimonialDesignationFontSizeUnits: value })}

                    fontWeight={TestimonialDesignationFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ TestimonialDesignationFontWeight: value, TestimonialDesignationGlobalTypoSwitcher: {...TestimonialDesignationGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={TestimonialDesignationFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ TestimonialDesignationFontStyle: value, TestimonialDesignationGlobalTypoSwitcher: {...TestimonialDesignationGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={TestimonialDesignationTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ TestimonialDesignationTextTransform: value, TestimonialDesignationGlobalTypoSwitcher: {...TestimonialDesignationGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={TestimonialDesignationTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ TestimonialDesignationTextDecoration: value, TestimonialDesignationGlobalTypoSwitcher: {...TestimonialDesignationGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={TestimonialDesignationLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ TestimonialDesignationLetterSpacing: value, TestimonialDesignationGlobalTypoSwitcher: {...TestimonialDesignationGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={TestimonialDesignationLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ TestimonialDesignationLetterSpacingUnits: value })}

                    lineHeight={TestimonialDesignationLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ TestimonialDesignationLineHeight: value, TestimonialDesignationGlobalTypoSwitcher: {...TestimonialDesignationGlobalTypoSwitcher, lineHeight: value && false} })}

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