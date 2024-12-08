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
    Testimonial,
    FONT_FAMILYS,
    BORDER_STYLES,
    HEADING,
    PRESETS,
} from "./constants/constants";

import FBIconPicker from "../../components/icon-picker";
import FB_TypographyControl from '@Components/typography-control';
import FB_Range from '@Components/range';
import FB_Spacing from '@Components/spacing';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const { 
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
        TestimonialGlobalBgColor,
        TestimonialGlobalBgHoverColor,

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

        TestimonialGlobalBoxShadowValues,
        TestimonialGlobalBoxShadowCssValue,

        blockStyle,

    } = attributes;

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-testimonial-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);


    useEffect(() => {
		if (TestimonialTitleFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${TestimonialTitleFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [TestimonialTitleFontFamily]);

    useEffect(() => {
		if (TestimonialDescFontFamily) { 
			const fontUrl = `https://fonts.googleapis.com/css?family=${TestimonialDescFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [TestimonialDescFontFamily]);

    useEffect(() => {
		if (TestimonialAuthorFontFamily) { 
			const fontUrl = `https://fonts.googleapis.com/css?family=${TestimonialAuthorFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [TestimonialAuthorFontFamily]);


    useEffect(() => {
		if (TestimonialDesignationFontFamily) { 
			const fontUrl = `https://fonts.googleapis.com/css?family=${TestimonialDesignationFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [TestimonialDesignationFontFamily]);



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
                TestimonialGlobalBgColor : '#fefaf3',
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
                TestimonialGlobalBgColor : '#f7f7f7',
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
                TestimonialGlobalBgColor : '#f7f7f7',
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
                TestimonialGlobalBgColor : '#f7f7f7',
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
                TestimonialGlobalBgColor : '#404655',
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
    const testimonialRatingIconDesktopMargin = `${TestimonialRatingIconMarginDesktop.top}${TestimonialRatingIconMarginUnits.Desktop} ${TestimonialRatingIconMarginDesktop.right}${TestimonialRatingIconMarginUnits.Desktop} ${TestimonialRatingIconMarginDesktop.bottom}${TestimonialRatingIconMarginUnits.Desktop} ${TestimonialRatingIconMarginDesktop.left}${TestimonialRatingIconMarginUnits.Desktop}`;
    const testimonialRatingIconTabletMargin = `${TestimonialRatingIconMarginTablet.top}${TestimonialRatingIconMarginUnits.Tablet} ${TestimonialRatingIconMarginTablet.right}${TestimonialRatingIconMarginUnits.Tablet} ${TestimonialRatingIconMarginTablet.bottom}${TestimonialRatingIconMarginUnits.Tablet} ${TestimonialRatingIconMarginTablet.left}${TestimonialRatingIconMarginUnits.Tablet}`;
    const testimonialRatingIconMobileMargin = `${TestimonialRatingIconMarginMobile.top}${TestimonialRatingIconMarginUnits.Mobile} ${TestimonialRatingIconMarginMobile.right}${TestimonialRatingIconMarginUnits.Mobile} ${TestimonialRatingIconMarginMobile.bottom}${TestimonialRatingIconMarginUnits.Mobile} ${TestimonialRatingIconMarginMobile.left}${TestimonialRatingIconMarginUnits.Mobile}`;
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

    const testimonialTitleDesktopMargin = `${TestimonialTitleMarginDesktop.top}${TestimonialTitleMarginUnits.Desktop} ${TestimonialTitleMarginDesktop.right}${TestimonialTitleMarginUnits.Desktop} ${TestimonialTitleMarginDesktop.bottom}${TestimonialTitleMarginUnits.Desktop} ${TestimonialTitleMarginDesktop.left}${TestimonialTitleMarginUnits.Desktop}`;
    const testimonialTitleTabletMargin = `${TestimonialTitleMarginTablet.top}${TestimonialTitleMarginUnits.Tablet} ${TestimonialTitleMarginTablet.right}${TestimonialTitleMarginUnits.Tablet} ${TestimonialTitleMarginTablet.bottom}${TestimonialTitleMarginUnits.Tablet} ${TestimonialTitleMarginTablet.left}${TestimonialTitleMarginUnits.Tablet}`;
    const testimonialTitleMobileMargin = `${TestimonialTitleMarginMobile.top}${TestimonialTitleMarginUnits.Mobile} ${TestimonialTitleMarginMobile.right}${TestimonialTitleMarginUnits.Mobile} ${TestimonialTitleMarginMobile.bottom}${TestimonialTitleMarginUnits.Mobile} ${TestimonialTitleMarginMobile.left}${TestimonialTitleMarginUnits.Mobile}`;
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

    const testimonialDescDesktopMargin = `${TestimonialDescMarginDesktop.top}${TestimonialDescMarginUnits.Desktop} ${TestimonialDescMarginDesktop.right}${TestimonialDescMarginUnits.Desktop} ${TestimonialDescMarginDesktop.bottom}${TestimonialDescMarginUnits.Desktop} ${TestimonialDescMarginDesktop.left}${TestimonialDescMarginUnits.Desktop}`;
    const testimonialDescTabletMargin = `${TestimonialDescMarginTablet.top}${TestimonialDescMarginUnits.Tablet} ${TestimonialDescMarginTablet.right}${TestimonialDescMarginUnits.Tablet} ${TestimonialDescMarginTablet.bottom}${TestimonialDescMarginUnits.Tablet} ${TestimonialDescMarginTablet.left}${TestimonialDescMarginUnits.Tablet}`;
    const testimonialDescMobileMargin = `${TestimonialDescMarginMobile.top}${TestimonialDescMarginUnits.Mobile} ${TestimonialDescMarginMobile.right}${TestimonialDescMarginUnits.Mobile} ${TestimonialDescMarginMobile.bottom}${TestimonialDescMarginUnits.Mobile} ${TestimonialDescMarginMobile.left}${TestimonialDescMarginUnits.Mobile}`;
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

    const testimonialImageDesktopMargin = `${TestimonialImageMarginDesktop.top}${TestimonialImageMarginUnits.Desktop} ${TestimonialImageMarginDesktop.right}${TestimonialImageMarginUnits.Desktop} ${TestimonialImageMarginDesktop.bottom}${TestimonialImageMarginUnits.Desktop} ${TestimonialImageMarginDesktop.left}${TestimonialImageMarginUnits.Desktop}`;
    const testimonialImageTabletMargin = `${TestimonialImageMarginTablet.top}${TestimonialImageMarginUnits.Tablet} ${TestimonialImageMarginTablet.right}${TestimonialImageMarginUnits.Tablet} ${TestimonialImageMarginTablet.bottom}${TestimonialImageMarginUnits.Tablet} ${TestimonialImageMarginTablet.left}${TestimonialImageMarginUnits.Tablet}`;
    const testimonialImageMobileMargin = `${TestimonialImageMarginMobile.top}${TestimonialImageMarginUnits.Mobile} ${TestimonialImageMarginMobile.right}${TestimonialImageMarginUnits.Mobile} ${TestimonialImageMarginMobile.bottom}${TestimonialImageMarginUnits.Mobile} ${TestimonialImageMarginMobile.left}${TestimonialImageMarginUnits.Mobile}`;
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

    const testimonialAuthorDesktopMargin = `${TestimonialAuthorMarginDesktop.top}${TestimonialAuthorMarginUnits.Desktop} ${TestimonialAuthorMarginDesktop.right}${TestimonialAuthorMarginUnits.Desktop} ${TestimonialAuthorMarginDesktop.bottom}${TestimonialAuthorMarginUnits.Desktop} ${TestimonialAuthorMarginDesktop.left}${TestimonialAuthorMarginUnits.Desktop}`;
    const testimonialAuthorTabletMargin = `${TestimonialAuthorMarginTablet.top}${TestimonialAuthorMarginUnits.Tablet} ${TestimonialAuthorMarginTablet.right}${TestimonialAuthorMarginUnits.Tablet} ${TestimonialAuthorMarginTablet.bottom}${TestimonialAuthorMarginUnits.Tablet} ${TestimonialAuthorMarginTablet.left}${TestimonialAuthorMarginUnits.Tablet}`;
    const testimonialAuthorMobileMargin = `${TestimonialAuthorMarginMobile.top}${TestimonialAuthorMarginUnits.Mobile} ${TestimonialAuthorMarginMobile.right}${TestimonialAuthorMarginUnits.Mobile} ${TestimonialAuthorMarginMobile.bottom}${TestimonialAuthorMarginUnits.Mobile} ${TestimonialAuthorMarginMobile.left}${TestimonialAuthorMarginUnits.Mobile}`;
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

    const testimonialDesignationDesktopMargin = `${TestimonialDesignationMarginDesktop.top}${TestimonialDesignationMarginUnits.Desktop} ${TestimonialDesignationMarginDesktop.right}${TestimonialDesignationMarginUnits.Desktop} ${TestimonialDesignationMarginDesktop.bottom}${TestimonialDesignationMarginUnits.Desktop} ${TestimonialDesignationMarginDesktop.left}${TestimonialDesignationMarginUnits.Desktop}`;
    const testimonialDesignationTabletMargin = `${TestimonialDesignationMarginTablet.top}${TestimonialDesignationMarginUnits.Tablet} ${TestimonialDesignationMarginTablet.right}${TestimonialDesignationMarginUnits.Tablet} ${TestimonialDesignationMarginTablet.bottom}${TestimonialDesignationMarginUnits.Tablet} ${TestimonialDesignationMarginTablet.left}${TestimonialDesignationMarginUnits.Tablet}`;
    const testimonialDesignationMobileMargin = `${TestimonialDesignationMarginMobile.top}${TestimonialDesignationMarginUnits.Mobile} ${TestimonialDesignationMarginMobile.right}${TestimonialDesignationMarginUnits.Mobile} ${TestimonialDesignationMarginMobile.bottom}${TestimonialDesignationMarginUnits.Mobile} ${TestimonialDesignationMarginMobile.left}${TestimonialDesignationMarginUnits.Mobile}`;
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

    const testimonialQuoteIconDesktopMargin = `${TestimonialQuoteIconMarginDesktop.top}${TestimonialQuoteIconMarginUnits.Desktop} ${TestimonialQuoteIconMarginDesktop.right}${TestimonialQuoteIconMarginUnits.Desktop} ${TestimonialQuoteIconMarginDesktop.bottom}${TestimonialQuoteIconMarginUnits.Desktop} ${TestimonialQuoteIconMarginDesktop.left}${TestimonialQuoteIconMarginUnits.Desktop}`;
    const testimonialQuoteIconTabletMargin = `${TestimonialQuoteIconMarginTablet.top}${TestimonialQuoteIconMarginUnits.Tablet} ${TestimonialQuoteIconMarginTablet.right}${TestimonialQuoteIconMarginUnits.Tablet} ${TestimonialQuoteIconMarginTablet.bottom}${TestimonialQuoteIconMarginUnits.Tablet} ${TestimonialQuoteIconMarginTablet.left}${TestimonialQuoteIconMarginUnits.Tablet}`;
    const testimonialQuoteIconMobileMargin = `${TestimonialQuoteIconMarginMobile.top}${TestimonialQuoteIconMarginUnits.Mobile} ${TestimonialQuoteIconMarginMobile.right}${TestimonialQuoteIconMarginUnits.Mobile} ${TestimonialQuoteIconMarginMobile.bottom}${TestimonialQuoteIconMarginUnits.Mobile} ${TestimonialQuoteIconMarginMobile.left}${TestimonialQuoteIconMarginUnits.Mobile}`;
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
    const testimonialImageDesktopBorderRadiusWidth = `${TestimonialImageDesktopRadiusWidth.top}${TestimonialImageRadiusUnits.Desktop} ${TestimonialImageDesktopRadiusWidth.right}${TestimonialImageRadiusUnits.Desktop} ${TestimonialImageDesktopRadiusWidth.bottom}${TestimonialImageRadiusUnits.Desktop} ${TestimonialImageDesktopRadiusWidth.left}${TestimonialImageRadiusUnits.Desktop}`;
    const testimonialImageTabletBorderRadiusWidth = `${TestimonialImageTabRadiusWidth.top}${TestimonialImageRadiusUnits.Tablet} ${TestimonialImageTabRadiusWidth.right}${TestimonialImageRadiusUnits.Tablet} ${TestimonialImageTabRadiusWidth.bottom}${TestimonialImageRadiusUnits.Tablet} ${TestimonialImageTabRadiusWidth.left}${TestimonialImageRadiusUnits.Tablet}`;
    const testimonialImageMobileBorderRadiusWidth = `${TestimonialImageMobileRadiusWidth.top}${TestimonialImageRadiusUnits.Mobile} ${TestimonialImageMobileRadiusWidth.right}${TestimonialImageRadiusUnits.Mobile} ${TestimonialImageMobileRadiusWidth.bottom}${TestimonialImageRadiusUnits.Mobile} ${TestimonialImageMobileRadiusWidth.left}${TestimonialImageRadiusUnits.Mobile}`;
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
	const globalDesktopPadding    = `${TestimonialGlobalPaddingDesktop.top}${TestimonialGlobalPaddingUnits.Desktop} ${TestimonialGlobalPaddingDesktop.right}${TestimonialGlobalPaddingUnits.Desktop} ${TestimonialGlobalPaddingDesktop.bottom}${TestimonialGlobalPaddingUnits.Desktop} ${TestimonialGlobalPaddingDesktop.left}${TestimonialGlobalPaddingUnits.Desktop}`;
	const globalTabletPadding     = `${TestimonialGlobalPaddingTablet.top}${TestimonialGlobalPaddingUnits.Tablet} ${TestimonialGlobalPaddingTablet.right}${TestimonialGlobalPaddingUnits.Tablet} ${TestimonialGlobalPaddingTablet.bottom}${TestimonialGlobalPaddingUnits.Tablet} ${TestimonialGlobalPaddingTablet.left}${TestimonialGlobalPaddingUnits.Tablet}`;
	const globalMobilePadding     = `${TestimonialGlobalPaddingMobile.top}${TestimonialGlobalPaddingUnits.Mobile} ${TestimonialGlobalPaddingMobile.right}${TestimonialGlobalPaddingUnits.Mobile} ${TestimonialGlobalPaddingMobile.bottom}${TestimonialGlobalPaddingUnits.Mobile} ${TestimonialGlobalPaddingMobile.left}${TestimonialGlobalPaddingUnits.Mobile}`;
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

	const globalDesktopMargin = `${TestimonialGlobalMarginDesktop.top}${TestimonialGlobalMarginUnits.Desktop} ${TestimonialGlobalMarginDesktop.right}${TestimonialGlobalMarginUnits.Desktop} ${TestimonialGlobalMarginDesktop.bottom}${TestimonialGlobalMarginUnits.Desktop} ${TestimonialGlobalMarginDesktop.left}${TestimonialGlobalMarginUnits.Desktop}`;
	const globalTabletMargin = `${TestimonialGlobalMarginTablet.top}${TestimonialGlobalMarginUnits.Tablet} ${TestimonialGlobalMarginTablet.right}${TestimonialGlobalMarginUnits.Tablet} ${TestimonialGlobalMarginTablet.bottom}${TestimonialGlobalMarginUnits.Tablet} ${TestimonialGlobalMarginTablet.left}${TestimonialGlobalMarginUnits.Tablet}`;
	const globalMobileMargin = `${TestimonialGlobalMarginMobile.top}${TestimonialGlobalMarginUnits.Mobile} ${TestimonialGlobalMarginMobile.right}${TestimonialGlobalMarginUnits.Mobile} ${TestimonialGlobalMarginMobile.bottom}${TestimonialGlobalMarginUnits.Mobile} ${TestimonialGlobalMarginMobile.left}${TestimonialGlobalMarginUnits.Mobile}`;
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
	const globalDesktopBorderWidth = `${TestimonialGlobalBorderDesktop.top}${TestimonialGlobalBorderUnits.Desktop} ${TestimonialGlobalBorderDesktop.right}${TestimonialGlobalBorderUnits.Desktop} ${TestimonialGlobalBorderDesktop.bottom}${TestimonialGlobalBorderUnits.Desktop} ${TestimonialGlobalBorderDesktop.left}${TestimonialGlobalBorderUnits.Desktop}`;
	const globalTabletBorderWidth = `${TestimonialGlobalBorderTablet.top}${TestimonialGlobalBorderUnits.Tablet} ${TestimonialGlobalBorderTablet.right}${TestimonialGlobalBorderUnits.Tablet} ${TestimonialGlobalBorderTablet.bottom}${TestimonialGlobalBorderUnits.Tablet} ${TestimonialGlobalBorderTablet.left}${TestimonialGlobalBorderUnits.Tablet}`;
	const globalMobileBorderWidth = `${TestimonialGlobalBorderMobile.top}${TestimonialGlobalBorderUnits.Mobile} ${TestimonialGlobalBorderMobile.right}${TestimonialGlobalBorderUnits.Mobile} ${TestimonialGlobalBorderMobile.bottom}${TestimonialGlobalBorderUnits.Mobile} ${TestimonialGlobalBorderMobile.left}${TestimonialGlobalBorderUnits.Mobile}`;
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
	const globalDesktopBorderRadiusWidth = `${TestimonialGlobalBorderRadiusDesktop.top}${TestimonialGlobalBorderRadiusUnits.Desktop} ${TestimonialGlobalBorderRadiusDesktop.right}${TestimonialGlobalBorderRadiusUnits.Desktop} ${TestimonialGlobalBorderRadiusDesktop.bottom}${TestimonialGlobalBorderRadiusUnits.Desktop} ${TestimonialGlobalBorderRadiusDesktop.left}${TestimonialGlobalBorderRadiusUnits.Desktop}`;
	const globalTabletBorderRadiusWidth = `${TestimonialGlobalBorderRadiusTablet.top}${TestimonialGlobalBorderRadiusUnits.Tablet} ${TestimonialGlobalBorderRadiusTablet.right}${TestimonialGlobalBorderRadiusUnits.Tablet} ${TestimonialGlobalBorderRadiusTablet.bottom}${TestimonialGlobalBorderRadiusUnits.Tablet} ${TestimonialGlobalBorderRadiusTablet.left}${TestimonialGlobalBorderRadiusUnits.Tablet}`;
	const globalMobileBorderRadiusWidth = `${TestimonialGlobalBorderRadiusMobile.top}${TestimonialGlobalBorderRadiusUnits.Mobile} ${TestimonialGlobalBorderRadiusMobile.right}${TestimonialGlobalBorderRadiusUnits.Mobile} ${TestimonialGlobalBorderRadiusMobile.bottom}${TestimonialGlobalBorderRadiusUnits.Mobile} ${TestimonialGlobalBorderRadiusMobile.left}${TestimonialGlobalBorderRadiusUnits.Mobile}`;
	/** End Border Radius */




    const allBlockStyle = useMemo(() => `

        .${blockID}.fb-testimonial-main-wrapper {
            z-index: ${TestimonialGlobalZIndex !== undefined ? TestimonialGlobalZIndex : ''} !important;
            position: relative;
        }
        .${blockID}.fb-testimonial-main-wrapper .fb-testimonial-section {
            ${TestimonialGlobalBgColor ? `background-color: ${TestimonialGlobalBgColor};` : ''} 
            ${globalDesktopPadding ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin ? `margin: ${globalDesktopMargin};` : ''} 
            ${TestimonialGlobalBorder ? `border: ${TestimonialGlobalBorder};` : ''} 
            ${globalDesktopBorderWidth ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${TestimonialGlobalBorderColor ? `border-color: ${TestimonialGlobalBorderColor};` : ''}
            ${TestimonialGlobalBoxShadowCssValue ? `box-shadow: ${TestimonialGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockID}.fb-testimonial-main-wrapper .fb-testimonial-section:hover {
            ${TestimonialGlobalBgHoverColor ? `background-color: ${TestimonialGlobalBgHoverColor};` : ''} 
            ${TestimonialGlobalBorderHoverColor ? `border-color: ${TestimonialGlobalBorderHoverColor};` : ''}
        }

        .${blockID} .fb-testimonial-image img {
            ${TestimonialImageWidth.Desktop && TestimonialImageWidthUnits.Desktop ? `width: ${TestimonialImageWidth.Desktop}${TestimonialImageWidthUnits.Desktop};` : ''}
            ${TestimonialImageWidth.Desktop && TestimonialImageWidthUnits.Desktop ? `height: ${TestimonialImageWidth.Desktop}${TestimonialImageWidthUnits.Desktop};` : ''}
            border-radius: ${testimonialImageDesktopBorderRadiusWidth};
            ${testimonialImageDesktopMargin ? `margin: ${testimonialImageDesktopMargin};` : ''}
            ${TestimonialImagePositionSwitcher ? 'position: absolute;' : ''}
            ${TestimonialImagePositionSwitcher ? `top: ${TestimonialImageTopPosition.Desktop && TestimonialImageTopPositionUnits.Desktop ? `${TestimonialImageTopPosition.Desktop}${TestimonialImageTopPositionUnits.Desktop}` : '0'};` : ''}
            ${TestimonialImagePositionSwitcher ? `left: ${TestimonialImageLeftPosition.Desktop && TestimonialImageLeftPositionUnits.Desktop ? `${TestimonialImageLeftPosition.Desktop}${TestimonialImageLeftPositionUnits.Desktop}` : '0'};` : ''}
        }
        .${blockID} .fb-testimonial-quote-icon {
            ${TestimonialQuoteIconPositionSwitcher ? 'position: absolute;' : ''}
            ${TestimonialQuoteIconPositionSwitcher ? `top: ${TestimonialQuoteIconTopPosition.Desktop && TestimonialQuoteIconTopPositionUnits.Desktop ? `${TestimonialQuoteIconTopPosition.Desktop}${TestimonialQuoteIconTopPositionUnits.Desktop}` : '0'};` : ''}
            ${TestimonialQuoteIconPositionSwitcher ? `left: ${TestimonialQuoteIconLeftPosition.Desktop && TestimonialQuoteIconLeftPositionUnits.Desktop ? `${TestimonialQuoteIconLeftPosition.Desktop}${TestimonialQuoteIconLeftPositionUnits.Desktop}` : '0'};` : ''}
            ${testimonialQuoteIconDesktopMargin ? `margin: ${testimonialQuoteIconDesktopMargin};` : ''}
        }
        .${blockID} .fb-testimonial-quote-icon svg {
            ${TestimonialQuoteIconSize.Desktop && TestimonialQuoteIconSizeUnits.Desktop ? `width: ${TestimonialQuoteIconSize.Desktop}${TestimonialQuoteIconSizeUnits.Desktop};` : ''}
            ${TestimonialQuoteIconSize.Desktop && TestimonialQuoteIconSizeUnits.Desktop ? `height: ${TestimonialQuoteIconSize.Desktop}${TestimonialQuoteIconSizeUnits.Desktop};` : ''}
            fill: ${TestimonialQuoteIconColor};
        }
        .${blockID} .fb-testimonial-quote-icon:hover svg {
            fill: ${TestimonialQuoteIconHoverColor};
        }
        .${blockID} .fb-testimonial-title-container .fb-testimonial-title {
            ${TestimonialTitleFontFamily ? `font-family: ${TestimonialTitleFontFamily};` : ''}
            ${TestimonialTitleFontSize.Desktop && TestimonialTitleFontSizeUnits.Desktop ? `font-size: ${TestimonialTitleFontSize.Desktop}${TestimonialTitleFontSizeUnits.Desktop};` : '24px'}
            ${TestimonialTitleFontWeight ? `font-weight: ${TestimonialTitleFontWeight};` : ''}
            ${TestimonialTitleFontStyle ? `font-style: ${TestimonialTitleFontStyle};` : ''}
            ${TestimonialTitleTextTransform ? `text-transform: ${TestimonialTitleTextTransform};` : ''}
            ${TestimonialTitleTextDecoration ? `text-decoration: ${TestimonialTitleTextDecoration};` : ''}
            ${TestimonialTitleLetterSpacing.Desktop && TestimonialTitleLetterSpacingUnits.Desktop ? `letter-spacing: ${TestimonialTitleLetterSpacing.Desktop}${TestimonialTitleLetterSpacingUnits.Desktop};` : ''}
            ${TestimonialTitleLineHeight.Desktop && TestimonialTitleLineHeightUnits.Desktop ? `line-height: ${TestimonialTitleLineHeight.Desktop}${TestimonialTitleLineHeightUnits.Desktop};` : ''}
            ${TestimonialTitleColor ? `color: ${TestimonialTitleColor};` : ''}
            ${testimonialTitleDesktopMargin ? `margin: ${testimonialTitleDesktopMargin};` : ''}
            
        }
        .${blockID} .fb-testimonial-title-container .fb-testimonial-title:hover {
            ${TestimonialTitleHoverColor ? `color: ${TestimonialTitleHoverColor};` : ''}
        }
        .${blockID} .fb-testimonial-userdesc-container .fb-user-desc {
            ${TestimonialDescFontFamily ? `font-family: ${TestimonialDescFontFamily};` : ''}
            ${TestimonialDescFontSize.Desktop && TestimonialDescFontSizeUnits.Desktop ? `font-size: ${TestimonialDescFontSize.Desktop}${TestimonialDescFontSizeUnits.Desktop};` : ''}
            ${TestimonialDescFontWeight ? `font-weight: ${TestimonialDescFontWeight};` : ''}
            ${TestimonialDescFontStyle ? `font-style: ${TestimonialDescFontStyle};` : ''}
            ${TestimonialDescTextTransform ? `text-transform: ${TestimonialDescTextTransform};` : ''}
            ${TestimonialDescTextDecoration ? `text-decoration: ${TestimonialDescTextDecoration};` : ''}
            ${TestimonialDescLetterSpacing.Desktop && TestimonialDescLetterSpacingUnits.Desktop ? `letter-spacing: ${TestimonialDescLetterSpacing.Desktop}${TestimonialDescLetterSpacingUnits.Desktop};` : ''}
            ${TestimonialDescLineHeight.Desktop && TestimonialDescLineHeightUnits.Desktop ? `line-height: ${TestimonialDescLineHeight.Desktop}${TestimonialDescLineHeightUnits.Desktop};` : ''}
            ${TestimonialDescColor ? `color: ${TestimonialDescColor};` : ''}
            ${testimonialDescDesktopMargin ? `margin: ${testimonialDescDesktopMargin};` : ''}
        }
        .${blockID} .fb-testimonial-userdesc-container .fb-user-desc:hover {
            ${TestimonialDescHoverColor ? `color: ${TestimonialDescHoverColor};` : ''}
        }

        .${blockID} .fb-testimonial-userinfo-container .fb-user {
            font-family: ${TestimonialAuthorFontFamily};
            font-size: ${TestimonialAuthorFontSize.Desktop}${TestimonialAuthorFontSizeUnits.Desktop};
            font-weight: ${TestimonialAuthorFontWeight};
            font-style: ${TestimonialAuthorFontStyle};
            text-transform: ${TestimonialAuthorTextTransform};
            text-decoration: ${TestimonialAuthorTextDecoration};
            letter-spacing: ${TestimonialAuthorLetterSpacing.Desktop}${TestimonialAuthorLetterSpacingUnits.Desktop};
            line-height: ${TestimonialAuthorLineHeight.Desktop}${TestimonialAuthorLineHeightUnits.Desktop};
            color: ${TestimonialAuthorColor};
            ${testimonialAuthorDesktopMargin ? `margin: ${testimonialAuthorDesktopMargin};` : ''}
        }
        .${blockID} .fb-testimonial-userinfo-container .fb-user:hover {
            ${TestimonialAuthorHoverColor ? `color: ${TestimonialAuthorHoverColor};` : ''}
        }

        .${blockID} .fb-testimonial-userinfo-container .fb-user-designation {
            font-family: ${TestimonialDesignationFontFamily};
            font-size: ${TestimonialDesignationFontSize.Desktop}${TestimonialDesignationFontSizeUnits.Desktop};
            font-weight: ${TestimonialDesignationFontWeight};
            font-style: ${TestimonialDesignationFontStyle};
            text-transform: ${TestimonialDesignationTextTransform};
            text-decoration: ${TestimonialDesignationTextDecoration};
            letter-spacing: ${TestimonialDesignationLetterSpacing.Desktop}${TestimonialDesignationLetterSpacingUnits.Desktop};
            line-height: ${TestimonialDesignationLineHeight.Desktop}${TestimonialDesignationLineHeightUnits.Desktop};
            color: ${TestimonialDesignationColor};
            ${testimonialDesignationDesktopMargin ? `margin: ${testimonialDesignationDesktopMargin};` : ''}
        }
        .${blockID} .fb-testimonial-userinfo-container .fb-user-designation:hover {
            ${TestimonialDesignationHoverColor ? `color: ${TestimonialDesignationHoverColor};` : ''}
        }

        .${blockID} .fb-testimonial-rating {
            ${testimonialRatingIconDesktopMargin ? `margin: ${testimonialRatingIconDesktopMargin};` : ''}
            
        }

        .${blockID} .fb-testimonial-rating-icon svg {
            width: ${TestimonialRatingIconSize.Desktop}${TestimonialRatingIconSizeUnits.Desktop};
            height: ${TestimonialRatingIconSize.Desktop}${TestimonialRatingIconSizeUnits.Desktop};
            fill: ${TestimonialRatingIconColor};
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
            .fb-testimonial-main-wrapper.${blockID} .fb-testimonial-section {
                ${globalTabletPadding ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin ? `margin: ${globalTabletMargin};` : ''}
                ${globalTabletBorderWidth ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }
            .${blockID} .fb-testimonial-quote-icon {
                ${TestimonialQuoteIconPositionSwitcher ? 'position: absolute;' : ''}
                ${TestimonialQuoteIconPositionSwitcher ? `top: ${TestimonialQuoteIconTopPosition.Tablet && TestimonialQuoteIconTopPositionUnits.Tablet ? `${TestimonialQuoteIconTopPosition.Tablet}${TestimonialQuoteIconTopPositionUnits.Tablet}` : '0'};` : ''}
                ${TestimonialQuoteIconPositionSwitcher ? `left: ${TestimonialQuoteIconLeftPosition.Tablet && TestimonialQuoteIconLeftPositionUnits.Tablet ? `${TestimonialQuoteIconLeftPosition.Tablet}${TestimonialQuoteIconLeftPositionUnits.Tablet}` : '0'};` : ''}
                ${testimonialQuoteIconTabletMargin ? `margin: ${testimonialQuoteIconTabletMargin};` : ''}
            }

            .${blockID} .fb-testimonial-rating {
                ${testimonialRatingIconTabletMargin ? `margin: ${testimonialRatingIconTabletMargin};` : ''}
            }
            .${blockID} .fb-testimonial-image img {
                ${TestimonialImageWidth.Tablet && TestimonialImageWidthUnits.Tablet ? `width: ${TestimonialImageWidth.Tablet}${TestimonialImageWidthUnits.Tablet};` : ''}
                ${TestimonialImageWidth.Tablet && TestimonialImageWidthUnits.Tablet ? `height: ${TestimonialImageWidth.Tablet}${TestimonialImageWidthUnits.Tablet};` : ''}
                border-radius: ${testimonialImageTabletBorderRadiusWidth};
                ${testimonialImageTabletMargin ? `margin: ${testimonialImageTabletMargin};` : ''}
                ${TestimonialImagePositionSwitcher ? 'position: absolute;' : ''}
                ${TestimonialImagePositionSwitcher ? `top: ${TestimonialImageTopPosition.Tablet && TestimonialImageTopPositionUnits.Tablet ? `${TestimonialImageTopPosition.Tablet}${TestimonialImageTopPositionUnits.Tablet}` : '0'};` : ''}
                ${TestimonialImagePositionSwitcher ? `left: ${TestimonialImageLeftPosition.Tablet && TestimonialImageLeftPositionUnits.Tablet ? `${TestimonialImageLeftPosition.Tablet}${TestimonialImageLeftPositionUnits.Tablet}` : '0'};` : ''}
            }
            .${blockID} .fb-testimonial-title-container .fb-testimonial-title {
                ${TestimonialTitleFontSize.Tablet && TestimonialTitleFontSizeUnits.Tablet ? `font-size: ${TestimonialTitleFontSize.Tablet}${TestimonialTitleFontSizeUnits.Tablet};` : ''}
                ${TestimonialTitleLetterSpacing.Tablet && TestimonialTitleLetterSpacingUnits.Tablet ? `letter-spacing: ${TestimonialTitleLetterSpacing.Tablet}${TestimonialTitleLetterSpacingUnits.Tablet};` : ''}
                ${TestimonialTitleLineHeight.Tablet && TestimonialTitleLineHeightUnits.Tablet ? `line-height: ${TestimonialTitleLineHeight.Tablet}${TestimonialTitleLineHeightUnits.Tablet};` : ''}
                ${testimonialTitleTabletMargin ? `margin: ${testimonialTitleTabletMargin};` : ''}
            }
            .${blockID} .fb-testimonial-userdesc-container .fb-user-desc {
                ${TestimonialDescFontSize.Tablet && TestimonialDescFontSizeUnits.Tablet ? `font-size: ${TestimonialDescFontSize.Tablet}${TestimonialDescFontSizeUnits.Tablet};` : ''}
                ${TestimonialDescLetterSpacing.Tablet && TestimonialDescLetterSpacingUnits.Tablet ? `letter-spacing: ${TestimonialDescLetterSpacing.Tablet}${TestimonialDescLetterSpacingUnits.Tablet};` : ''}
                ${TestimonialDescLineHeight.Tablet && TestimonialDescLineHeightUnits.Tablet ? `line-height: ${TestimonialDescLineHeight.Tablet}${TestimonialDescLineHeightUnits.Tablet};` : ''}
                ${testimonialDescTabletMargin ? `margin: ${testimonialDescTabletMargin};` : ''}
            }
            .${blockID} .fb-testimonial-userinfo-container .fb-user {
                font-size: ${TestimonialAuthorFontSize.Tablet}${TestimonialAuthorFontSizeUnits.Tablet};
                letter-spacing: ${TestimonialAuthorLetterSpacing.Tablet}${TestimonialAuthorLetterSpacingUnits.Tablet};
                line-height: ${TestimonialAuthorLineHeight.Tablet}${TestimonialAuthorLineHeightUnits.Tablet};
                ${testimonialAuthorTabletMargin ? `margin: ${testimonialAuthorTabletMargin};` : ''}
            }
            .${blockID} .fb-testimonial-userinfo-container .fb-user-designation {
                font-size: ${TestimonialDesignationFontSize.Tablet}${TestimonialDesignationFontSizeUnits.Tablet};
                letter-spacing: ${TestimonialDesignationLetterSpacing.Tablet}${TestimonialDesignationLetterSpacingUnits.Tablet};
                line-height: ${TestimonialDesignationLineHeight.Tablet}${TestimonialDesignationLineHeightUnits.Tablet};
                ${testimonialDesignationTabletMargin ? `margin: ${testimonialDesignationTabletMargin};` : ''}
            }
        }
        @media only screen and (max-width: 767px) {
            .fb-testimonial-main-wrapper.${blockID} .fb-testimonial-section {
                ${globalMobilePadding ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin ? `margin: ${globalMobileMargin};` : ''}
                ${globalMobileBorderWidth ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }
            .${blockID} .fb-testimonial-rating {
                ${testimonialRatingIconMobileMargin ? `margin: ${testimonialRatingIconMobileMargin};` : ''}
            }
            .${blockID} .fb-testimonial-quote-icon {
                ${TestimonialQuoteIconPositionSwitcher ? 'position: absolute;' : ''}
                ${TestimonialQuoteIconPositionSwitcher ? `top: ${TestimonialQuoteIconTopPosition.Mobile && TestimonialQuoteIconTopPositionUnits.Mobile ? `${TestimonialQuoteIconTopPosition.Mobile}${TestimonialQuoteIconTopPositionUnits.Mobile}` : '0'};` : ''}
                ${TestimonialQuoteIconPositionSwitcher ? `left: ${TestimonialQuoteIconLeftPosition.Mobile && TestimonialQuoteIconLeftPositionUnits.Mobile ? `${TestimonialQuoteIconLeftPosition.Mobile}${TestimonialQuoteIconLeftPositionUnits.Mobile}` : '0'};` : ''}
                ${testimonialQuoteIconMobileMargin ? `margin: ${testimonialQuoteIconMobileMargin};` : ''}
            }

            .${blockID} .fb-testimonial-image img {
                ${TestimonialImageWidth.Mobile && TestimonialImageWidthUnits.Mobile ? `width: ${TestimonialImageWidth.Mobile}${TestimonialImageWidthUnits.Mobile};` : ''}
                ${TestimonialImageWidth.Mobile && TestimonialImageWidthUnits.Mobile ? `height: ${TestimonialImageWidth.Mobile}${TestimonialImageWidthUnits.Mobile};` : ''}
                border-radius: ${testimonialImageMobileBorderRadiusWidth};
                ${testimonialImageMobileMargin ? `margin: ${testimonialImageMobileMargin};` : ''}
                ${TestimonialImagePositionSwitcher ? 'position: absolute;' : ''}
                ${TestimonialImagePositionSwitcher ? `top: ${TestimonialImageTopPosition.Mobile && TestimonialImageTopPositionUnits.Mobile ? `${TestimonialImageTopPosition.Mobile}${TestimonialImageTopPositionUnits.Mobile}` : '0'};` : ''}
                ${TestimonialImagePositionSwitcher ? `left: ${TestimonialImageLeftPosition.Mobile && TestimonialImageLeftPositionUnits.Mobile ? `${TestimonialImageLeftPosition.Mobile}${TestimonialImageLeftPositionUnits.Mobile}` : '0'};` : ''}
            }
            .${blockID} .fb-testimonial-title-container .fb-testimonial-title {
                ${TestimonialTitleFontSize.Mobile && TestimonialTitleFontSizeUnits.Mobile ? `font-size: ${TestimonialTitleFontSize.Mobile}${TestimonialTitleFontSizeUnits.Mobile};` : ''}
                ${TestimonialTitleLetterSpacing.Mobile && TestimonialTitleLetterSpacingUnits.Mobile ? `letter-spacing: ${TestimonialTitleLetterSpacing.Mobile}${TestimonialTitleLetterSpacingUnits.Mobile};` : ''}
                ${TestimonialTitleLineHeight.Mobile && TestimonialTitleLineHeightUnits.Mobile ? `line-height: ${TestimonialTitleLineHeight.Mobile}${TestimonialTitleLineHeightUnits.Mobile};` : ''}
                ${testimonialTitleMobileMargin ? `margin: ${testimonialTitleMobileMargin};` : ''}

            }
            .${blockID} .fb-testimonial-userdesc-container .fb-user-desc {
                ${TestimonialDescFontSize.Mobile && TestimonialDescFontSizeUnits.Mobile ? `font-size: ${TestimonialDescFontSize.Mobile}${TestimonialDescFontSizeUnits.Mobile};` : ''}
                ${TestimonialDescLetterSpacing.Mobile && TestimonialDescLetterSpacingUnits.Mobile ? `letter-spacing: ${TestimonialDescLetterSpacing.Mobile}${TestimonialDescLetterSpacingUnits.Mobile};` : ''}
                ${TestimonialDescLineHeight.Mobile && TestimonialDescLineHeightUnits.Mobile ? `line-height: ${TestimonialDescLineHeight.Mobile}${TestimonialDescLineHeightUnits.Mobile};` : ''}
                ${testimonialDescMobileMargin ? `margin: ${testimonialDescMobileMargin};` : ''}
            }
            .${blockID} .fb-testimonial-userinfo-container .fb-user {
                font-size: ${TestimonialAuthorFontSize.Mobile}${TestimonialAuthorFontSizeUnits.Mobile};
                letter-spacing: ${TestimonialAuthorLetterSpacing.Mobile}${TestimonialAuthorLetterSpacingUnits.Mobile};
                line-height: ${TestimonialAuthorLineHeight.Mobile}${TestimonialAuthorLineHeightUnits.Mobile};
                ${testimonialAuthorMobileMargin ? `margin: ${testimonialAuthorMobileMargin};` : ''} 
            }
            .${blockID} .fb-testimonial-userinfo-container .fb-user-designation {
                font-size: ${TestimonialDesignationFontSize.Mobile}${TestimonialDesignationFontSizeUnits.Mobile};
                letter-spacing: ${TestimonialDesignationLetterSpacing.Mobile}${TestimonialDesignationLetterSpacingUnits.Mobile};
                line-height: ${TestimonialDesignationLineHeight.Mobile}${TestimonialDesignationLineHeightUnits.Mobile};
                ${testimonialDesignationMobileMargin ? `margin: ${testimonialDesignationMobileMargin};` : ''}
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
        TestimonialGlobalBgColor,
        TestimonialGlobalBgHoverColor,

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

        TestimonialGlobalBoxShadowValues,
        TestimonialGlobalBoxShadowCssValue,


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

                                                {RatingSwitcher && (
                                                    <div className='fb-setting-icon-wrapper'>
                                                        <BaseControl
                                                            label={__("Rating Icon", "frontis-blocks")}
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
                                                        </BaseControl>
                                                    </div>
                                                )}
                                                {RatingSwitcher && TestimonialRatinIconAlign === 'icon' && (
                                                    <div className="fb-setting-rating-rangecontrol">
                                                        <RangeControl
                                                            label={__("Rating Number", "frontis-blocks")}
                                                            value={TestimonialRatingNumber}
                                                            onChange={(value) => setAttributes({ TestimonialRatingNumber: value })}
                                                            min={1}
                                                            max={5}
                                                            allowReset
                                                            resetFallbackValue={5}
                                                        />
                                                    </div>
                                                )}

                                                {TitleSwitcher && (
                                                <TextareaControl
                                                    label={__("Title", "frontis-blocks")}
                                                    value={TestimonialTitle}
                                                    onChange={(value) => setAttributes({ TestimonialTitle: value })}
                                                    className="fb-testimonial-title-control"
                                                />
                                                )}
                                                {DescSwitcher && (
                                                <TextareaControl
                                                    label={__("Description", "frontis-blocks")}
                                                    value={TestimonialDesc}
                                                    onChange={(value) => setAttributes({ TestimonialDesc: value })}
                                                    className="fb-testimonial-desc-control"
                                                />
                                                )}

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
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 9L9 15" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 9L15 15" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
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
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.827 16.379C9.77912 16.9085 8.60041 17.1235 7.43311 16.9979C6.2658 16.8722 5.15981 16.4115 4.24861 15.6711C3.33741 14.9308 2.65996 13.9426 2.29804 12.8257C1.93611 11.7088 1.90518 10.5111 2.20897 9.37703L7.62097 10.827C7.09144 9.77918 6.87652 8.60047 7.00213 7.43317C7.12774 6.26586 7.58853 5.15987 8.32886 4.24867C9.06919 3.33747 10.0574 2.66003 11.1743 2.2981C12.2912 1.93617 13.4889 1.90524 14.623 2.20903L13.173 7.62103C14.2208 7.0915 15.3995 6.87658 16.5668 7.00219C17.7341 7.1278 18.8401 7.58859 19.7513 8.32892C20.6625 9.06926 21.34 10.0575 21.7019 11.1744C22.0638 12.2912 22.0948 13.489 21.791 14.623L16.379 13.173C16.9085 14.2209 17.1234 15.3996 16.9978 16.5669C16.8722 17.7342 16.4114 18.8402 15.6711 19.7514C14.9307 20.6626 13.9425 21.34 12.8256 21.702C11.7088 22.0639 10.511 22.0948 9.37697 21.791L10.827 16.379Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 12V12.01" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
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
                                                {AuthorSwitcher && (
                                                <TextareaControl
                                                    label={__("Author", "frontis-blocks")}
                                                    value={TestimonialAuthor}
                                                    onChange={(value) => setAttributes({ TestimonialAuthor: value })}
                                                    className="fb-testimonial-author-control"
                                                />
                                                )}
                                                {DesignationSwitcher && (
                                                <TextareaControl
                                                    label={__("Designation", "frontis-blocks")}
                                                    value={TestimonialDesignation}
                                                    onChange={(value) => setAttributes({ TestimonialDesignation: value })}
                                                    className="fb-testimonial-designation-control"
                                                />
                                                )}

                                                {QuoteIconSwitcher && (
                                                    <div className='fb-setting-icon-wrapper'>
                                                    <BaseControl
                                                        label={__("Quote Icon", "frontis-blocks")}
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
                                                    </BaseControl>
                                                </div>
                                                )}

                                        </PanelBody>

                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                    
                                        {RatingSwitcher && (
                                            <PanelBody
                                                title={__("Rating Icon", "frontis-blocks")}
                                                initialOpen={false}
                                                className="fb-setting-feature-icon-wrapper"
                                            >
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

                                                <FB_SwitcherControl
                                                        label={__("Rating Color", "frontis-blocks")}
                                                        globalSwitcher={TestimonialRatingIconColorSwitcher}
                                                        setGlobalSwitcher={(value) => setAttributes({ TestimonialRatingIconColorSwitcher: value })}
                                                />

                                                {TestimonialRatingIconColorSwitcher === 'normal' && (
                                                    <FB_ColorControl
                                                        label={__("Normal Color", "frontis-blocks")}
                                                        globalColor={TestimonialRatingIconColor}
                                                        setGlobalColor={(value) => setAttributes({ TestimonialRatingIconColor: value })}
                                                    />
                                                )}

                                                {TestimonialRatingIconColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={TestimonialRatingIconHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ TestimonialRatingIconHoverColor: value })}
                                                    />
                                                )}

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

                                                <BaseControl
                                                    label={__("Title Tag", "frontis-blocks")}
                                                        id="fb-setting-text-alignment"
                                                        className="fb-setting-text-alignment"
                                                >
                                                    <ButtonGroup
                                                        className="fb-setting-text-alignment-group-btn"
                                                     >
                                                        {HEADING.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ TestimonialTitleTag: item.value })}
                                                                className={`fb-setting-text-alignment-single-btn ${ TestimonialTitleTag === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>
                                                <FB_TypographyControl
                                                    fontFamily={TestimonialTitleFontFamily}
                                                    onChangeFontFamily={(value) => setAttributes({ TestimonialTitleFontFamily: value })}

                                                    fontSize={TestimonialTitleFontSize}
                                                    onChangeFontSize={(value) => setAttributes({ TestimonialTitleFontSize: value })}

                                                    fontSizeUnits={TestimonialTitleFontSizeUnits}
                                                    onChangeFontSizeUnit={(value) => setAttributes({ TestimonialTitleFontSizeUnits: value })}

                                                    fontWeight={TestimonialTitleFontWeight}
                                                    onChangeFontWeight={(value) => setAttributes({ TestimonialTitleFontWeight: value })}

                                                    fontStyle={TestimonialTitleFontStyle}
                                                    onChangeFontStyle={(value) => setAttributes({ TestimonialTitleFontStyle: value })}

                                                    textTransform={TestimonialTitleTextTransform}
                                                    onChangeTextTransform={(value) => setAttributes({ TestimonialTitleTextTransform: value })}

                                                    textDecoration={TestimonialTitleTextDecoration}
                                                    onChangeTextDecoration={(value) => setAttributes({ TestimonialTitleTextDecoration: value })}

                                                    letterSpacing={TestimonialTitleLetterSpacing}
                                                    onChangeLetterSpacing={(value) => setAttributes({ TestimonialTitleLetterSpacing: value })}

                                                    letterSpacingUnits={TestimonialTitleLetterSpacingUnits}
                                                    onChangeLetterSpacingUnit={(value) => setAttributes({ TestimonialTitleLetterSpacingUnits: value })}

                                                    lineHeight={TestimonialTitleLineHeight}
                                                    onChangeLineHeight={(value) => setAttributes({ TestimonialTitleLineHeight: value })}

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
                                                        setGlobalColor={(value) => setAttributes({ TestimonialTitleColor: value })}
                                                    />
                                                )}

                                                {TestimonialTitleColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={TestimonialTitleHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ TestimonialTitleHoverColor: value })}
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
                                                fontFamily={TestimonialDescFontFamily}
                                                onChangeFontFamily={(value) => setAttributes({ TestimonialDescFontFamily: value })}

                                                fontSize={TestimonialDescFontSize}
                                                onChangeFontSize={(value) => setAttributes({ TestimonialDescFontSize: value })}

                                                fontSizeUnits={TestimonialDescFontSizeUnits}
                                                onChangeFontSizeUnit={(value) => setAttributes({ TestimonialDescFontSizeUnits: value })}

                                                fontWeight={TestimonialDescFontWeight}
                                                onChangeFontWeight={(value) => setAttributes({ TestimonialDescFontWeight: value })}

                                                fontStyle={TestimonialDescFontStyle}
                                                onChangeFontStyle={(value) => setAttributes({ TestimonialDescFontStyle: value })}

                                                textTransform={TestimonialDescTextTransform}
                                                onChangeTextTransform={(value) => setAttributes({ TestimonialDescTextTransform: value })}

                                                textDecoration={TestimonialDescTextDecoration}
                                                onChangeTextDecoration={(value) => setAttributes({ TestimonialDescTextDecoration: value })}

                                                letterSpacing={TestimonialDescLetterSpacing}
                                                onChangeLetterSpacing={(value) => setAttributes({ TestimonialDescLetterSpacing: value })}

                                                letterSpacingUnits={TestimonialDescLetterSpacingUnits}
                                                onChangeLetterSpacingUnit={(value) => setAttributes({ TestimonialDescLetterSpacingUnits: value })}

                                                lineHeight={TestimonialDescLineHeight}
                                                onChangeLineHeight={(value) => setAttributes({ TestimonialDescLineHeight: value })}

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
                                                    setGlobalColor={(value) => setAttributes({ TestimonialDescColor: value })}
                                                />
                                            )}

                                            {TestimonialDescColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={TestimonialDescHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ TestimonialDescHoverColor: value })}
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
                                                    fontFamily={TestimonialAuthorFontFamily}
                                                    onChangeFontFamily={(value) => setAttributes({ TestimonialAuthorFontFamily: value })}

                                                    fontSize={TestimonialAuthorFontSize}
                                                    onChangeFontSize={(value) => setAttributes({ TestimonialAuthorFontSize: value })}

                                                    fontSizeUnits={TestimonialAuthorFontSizeUnits}
                                                    onChangeFontSizeUnit={(value) => setAttributes({ TestimonialAuthorFontSizeUnits: value })}

                                                    fontWeight={TestimonialAuthorFontWeight}
                                                    onChangeFontWeight={(value) => setAttributes({ TestimonialAuthorFontWeight: value })}

                                                    fontStyle={TestimonialAuthorFontStyle}
                                                    onChangeFontStyle={(value) => setAttributes({ TestimonialAuthorFontStyle: value })}

                                                    textTransform={TestimonialAuthorTextTransform}
                                                    onChangeTextTransform={(value) => setAttributes({ TestimonialAuthorTextTransform: value })}

                                                    textDecoration={TestimonialAuthorTextDecoration}
                                                    onChangeTextDecoration={(value) => setAttributes({ TestimonialAuthorTextDecoration: value })}

                                                    letterSpacing={TestimonialAuthorLetterSpacing}
                                                    onChangeLetterSpacing={(value) => setAttributes({ TestimonialAuthorLetterSpacing: value })}

                                                    letterSpacingUnits={TestimonialAuthorLetterSpacingUnits}
                                                    onChangeLetterSpacingUnit={(value) => setAttributes({ TestimonialAuthorLetterSpacingUnits: value })}

                                                    lineHeight={TestimonialAuthorLineHeight}
                                                    onChangeLineHeight={(value) => setAttributes({ TestimonialAuthorLineHeight: value })}

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

                                                {TestimonialDescColorSwitcher === 'normal' && (
                                                    <FB_ColorControl
                                                        label={__("Normal Color", "frontis-blocks")}
                                                        globalColor={TestimonialAuthorColor}
                                                        setGlobalColor={(value) => setAttributes({ TestimonialAuthorColor: value })}
                                                    />
                                                )}

                                                {TestimonialDescColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={TestimonialAuthorHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ TestimonialAuthorHoverColor: value })}
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
                                                    fontFamily={TestimonialDesignationFontFamily}
                                                    onChangeFontFamily={(value) => setAttributes({ TestimonialDesignationFontFamily: value })}

                                                    fontSize={TestimonialDesignationFontSize}
                                                    onChangeFontSize={(value) => setAttributes({ TestimonialDesignationFontSize: value })}

                                                    fontSizeUnits={TestimonialDesignationFontSizeUnits}
                                                    onChangeFontSizeUnit={(value) => setAttributes({ TestimonialDesignationFontSizeUnits: value })}

                                                    fontWeight={TestimonialDesignationFontWeight}
                                                    onChangeFontWeight={(value) => setAttributes({ TestimonialDesignationFontWeight: value })}

                                                    fontStyle={TestimonialDesignationFontStyle}
                                                    onChangeFontStyle={(value) => setAttributes({ TestimonialDesignationFontStyle: value })}

                                                    textTransform={TestimonialDesignationTextTransform}
                                                    onChangeTextTransform={(value) => setAttributes({ TestimonialDesignationTextTransform: value })}

                                                    textDecoration={TestimonialDesignationTextDecoration}
                                                    onChangeTextDecoration={(value) => setAttributes({ TestimonialDesignationTextDecoration: value })}

                                                    letterSpacing={TestimonialDesignationLetterSpacing}
                                                    onChangeLetterSpacing={(value) => setAttributes({ TestimonialDesignationLetterSpacing: value })}

                                                    letterSpacingUnits={TestimonialDesignationLetterSpacingUnits}
                                                    onChangeLetterSpacingUnit={(value) => setAttributes({ TestimonialDesignationLetterSpacingUnits: value })}

                                                    lineHeight={TestimonialDesignationLineHeight}
                                                    onChangeLineHeight={(value) => setAttributes({ TestimonialDesignationLineHeight: value })}

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
                                                        setGlobalColor={(value) => setAttributes({ TestimonialDesignationColor: value })}
                                                    />
                                                )}

                                                {TestimonialDesignationColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={TestimonialDesignationHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ TestimonialDesignationHoverColor: value })}
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

                                                <FB_SwitcherControl
                                                        label={__("Icon Color", "frontis-blocks")}
                                                        globalSwitcher={TestimonialQuoteIconColorSwitcher}
                                                        setGlobalSwitcher={(value) => setAttributes({ TestimonialQuoteIconColorSwitcher: value })}
                                                />

                                                {TestimonialQuoteIconColorSwitcher === 'normal' && (
                                                    <FB_ColorControl
                                                        label={__("Normal Color", "frontis-blocks")}
                                                        globalColor={TestimonialQuoteIconColor}
                                                        setGlobalColor={(value) => setAttributes({ TestimonialQuoteIconColor: value })}
                                                    />
                                                )}

                                                {TestimonialQuoteIconColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={TestimonialQuoteIconHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ TestimonialQuoteIconHoverColor: value })}
                                                    />
                                                )}

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
                                )}
                            {tab.name === "advanced" && (
                                <>
                                    <div className="fb-setting-advanced-tab-wrapper">
                                        <div className="fb-setting-inner-wrapper">
                                            <PanelBody
                                                title={__("Z Index", "frontis-blocks")}
                                                initialOpen={true}
                                                className='fb-setting-z-index-header'
                                            >
                                                <RangeControl
                                                    value={TestimonialGlobalZIndex}
                                                    onChange={(value) => setAttributes({ TestimonialGlobalZIndex: value === 0 ? undefined : value })}
                                                    min={0}
                                                    max={10000000}
                                                    step={1}
                                                    allowReset
                                                    resetFallbackValue={''}
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
                                                title={__("Background Color", "frontis-blocks")}
                                                initialOpen={false} 
                                            >
                                                <FB_SwitcherControl
                                                        label={__("Background Color", "frontis-blocks")}
                                                        globalSwitcher={TestimonialGlobalBgColorSwitcher}
                                                        setGlobalSwitcher={(value) => setAttributes({ TestimonialGlobalBgColorSwitcher: value })}
                                                />

                                                {TestimonialGlobalBgColorSwitcher === 'normal' && (
                                                    <FB_ColorControl
                                                        label={__("Normal Color", "frontis-blocks")}
                                                        globalColor={TestimonialGlobalBgColor}
                                                        setGlobalColor={(value) => setAttributes({ TestimonialGlobalBgColor: value })}
                                                    />
                                                )}

                                                {TestimonialGlobalBgColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={TestimonialGlobalBgHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ TestimonialGlobalBgHoverColor: value })}
                                                    />
                                                )}
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
                                                        setGlobalColor={(value) => setAttributes({ TestimonialGlobalBorderColor: value })}
                                                    />
                                                )}

                                                {TestimonialGlobalBorderColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={TestimonialGlobalBorderHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ TestimonialGlobalBorderHoverColor: value })}
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
                                                <FB_BoxShadowControl
                                                    onBoxShadowChange={(value) => setAttributes({ TestimonialGlobalBoxShadowValues: value })}
                                                    initialShadowValue={TestimonialGlobalBoxShadowValues}
                                                    onBoxShadowStyleChange={(value) => setAttributes({ TestimonialGlobalBoxShadowCssValue: value })}
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