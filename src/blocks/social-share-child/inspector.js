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
    Dropdown,
} from '@wordpress/components';
import {
    BORDER_STYLES,
    BACKGROUND_TYPES,
    OVERFLOW_OP
} from '@Constants/fbConstants';
import { useEffect, useState, useMemo, memo } from '@wordpress/element';
import { useDeviceType } from "@Config/displayType";
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_Spacing from '@Components/spacing';
import FBIconPicker from "../../components/icon-picker";
import FB_TypographyControl from '@Components/typography-control';
import FB_Range from '@Components/range';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_InspectorControls from '@Components/InspectorControls';

import './editor.scss';

const Inspector = ({ attributes, setAttributes, clientId }) => {
    const {
        blockID,
        socialMediaType,
        icon,
        displayStyle,
        socialItemColorSwitcher,
        socialItemColor,
        socialItemHoverColor,
        socialItemBgColorSwitcher,
        socialItemBgColor,
        socialItemBgColorHover,
        socialShareGlobalTypographyData,
        socialShareGlobalTypoSwitcher,
        socialShareGlobalTypoType,
        socialShareGlobalTypoOption,
        socialShareFontFamily,
        socialShareFontSize,
        socialShareFontSizeUnits,
        socialShareFontWeight,
        socialShareFontStyle,
        socialShareTextTransform,
        socialShareTextDecoration,
        socialShareLetterSpacing,
        socialShareLetterSpacingUnits,
        socialShareLineHeight,
        socialShareLineHeightUnits,
        socialShareLabelColorSwitcher,
        socialShareLabelColor,
        socialShareLabelHoverColor,
        socialShareLabelBgColorSwitcher,
        socialShareLabelBgColor,
        socialShareLabelHoverBgColor,
        socialShareLabelSpacing,
        socialShareLabelSpacingUnits,

        socialShareChildCustomCSS,
        socialShareChildDesktopSwitcher,
        socialShareChildTabletSwitcher,
        socialShareChildMobileSwitcher,
        socialShareChildGlobalZIndex,
        socialShareChildOverflow,
        socialShareChildGlobalWraperID,
        socialShareChildGlobalWraperClass,

        /** Padding */
        socialShareChildGlobalPaddingUnits,
        socialShareChildGlobalPaddingDesktop,
        socialShareChildGlobalPaddingTablet,
        socialShareChildGlobalPaddingMobile,
        socialShareChildGlobalPaddingLink,

        /** Margin */
        socialShareChildGlobalMarginUnits,
        socialShareChildGlobalMarginDesktop,
        socialShareChildGlobalMarginTablet,
        socialShareChildGlobalMarginMobile,
        socialShareChildGlobalMarginLink,

        /** Background Normal */
        socialShareChildGlobalBgColor,
        socialShareChildGlobalBgHoverColor,
        socialShareChildGlobalBgColorSwitcher,
        socialShareChildGlobalBgNormalBackgroundType,
        socialShareChildGlobalBgNormalClassicColor,
        socialShareChildGlobalBgNormalGradientColor,
        socialShareChildGlobalBgNormalCustomGradientSwitcher,
        socialShareChildGlobalBgNormalCustomGradientInputValue,
        socialShareChildGlobalBgNormalBackgroundImageUrl,
        socialShareChildGlobalBgNormalBackgroundImagePosition,
        socialShareChildGlobalBgNormalBackgroundImageAttachment,
        socialShareChildGlobalBgNormalBackgroundImageRepeat,
        socialShareChildGlobalBgNormalBackgroundImageSize,

        /** Background Hover */
        socialShareChildGlobalBgHoverBackgroundType,
        socialShareChildGlobalBgHoverClassicColor,
        socialShareChildGlobalBgHoverGradientColor,
        socialShareChildGlobalBgHoverCustomGradientSwitcher,
        socialShareChildGlobalBgHoverCustomGradientInputValue,
        socialShareChildGlobalBgHoverBackgroundImageUrl,
        socialShareChildGlobalBgHoverBackgroundImagePosition,
        socialShareChildGlobalBgHoverBackgroundImageAttachment,
        socialShareChildGlobalBgHoverBackgroundImageRepeat,
        socialShareChildGlobalBgHoverBackgroundImageSize,

        /** Border */
        socialShareChildGlobalBorder,
        socialShareChildGlobalBorderColorSwitcher,
        socialShareChildGlobalBorderColor,
        socialShareChildGlobalBorderHoverColor,
        socialShareChildGlobalBorderUnits,
        socialShareChildGlobalBorderDesktop,
        socialShareChildGlobalBorderTablet,
        socialShareChildGlobalBorderMobile,
        socialShareChildGlobalBorderLink,

        /** Border Radius */
        socialShareChildGlobalBorderRadiusUnits,
        socialShareChildGlobalBorderRadiusDesktop,
        socialShareChildGlobalBorderRadiusTablet,
        socialShareChildGlobalBorderRadiusMobile,
        socialShareChildGlobalBorderRadiusLink,

        /** Box Shadow */
        socialShareChildGlobalBoxShadowSwitcher,
        socialShareChildGlobalBoxShadowValues,
        socialShareChildGlobalBoxShadowCssValue,
        socialShareChildGlobalBoxShadowHoverValues,
        socialShareChildGlobalBoxShadowHoverCssValue,
        socialShareChildPositionType,
        socialShareChildHZOrientationType,
        socialShareChildVROrientationType,
        socialShareChildHZLeftOffset,
        socialShareChildHZLeftOffsetUnits,
        socialShareChildHZRightOffset,
        socialShareChildHZRightOffsetUnits,
        socialShareChildVRTopOffset,
        socialShareChildVRTopOffsetUnits,
        socialShareChildVRBottomOffset,
        socialShareChildVRBottomOffsetUnits,
    } = attributes;

    const deviceType = useDeviceType();

    // Generate unique block ID
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-social-share-child-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    // Available social media types
    const socialMediaTypes = [
        { value: 'facebook', label: 'Facebook' },
        { value: 'twitter', label: 'Twitter' },
        { value: 'linkedin', label: 'LinkedIn' },
        { value: 'pinterest', label: 'Pinterest' },
        { value: 'reddit', label: 'Reddit' },
        { value: 'whatsapp', label: 'WhatsApp' }
    ];

    /** Start Global padding */
    const handleGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (socialShareChildGlobalPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialShareChildGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialShareChildGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialShareChildGlobalPaddingMobile: {
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
                    setAttributes({ socialShareChildGlobalPaddingDesktop: { ...socialShareChildGlobalPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialShareChildGlobalPaddingTablet: { ...socialShareChildGlobalPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialShareChildGlobalPaddingMobile: { ...socialShareChildGlobalPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes({ socialShareChildGlobalPaddingLink: !socialShareChildGlobalPaddingLink });
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            socialShareChildGlobalPaddingUnits: {
                ...socialShareChildGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    const globalDesktopPadding = `${socialShareChildGlobalPaddingDesktop?.top}${socialShareChildGlobalPaddingUnits?.Desktop} ${socialShareChildGlobalPaddingDesktop?.right}${socialShareChildGlobalPaddingUnits?.Desktop} ${socialShareChildGlobalPaddingDesktop?.bottom}${socialShareChildGlobalPaddingUnits?.Desktop} ${socialShareChildGlobalPaddingDesktop?.left}${socialShareChildGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${socialShareChildGlobalPaddingTablet?.top}${socialShareChildGlobalPaddingUnits?.Tablet} ${socialShareChildGlobalPaddingTablet?.right}${socialShareChildGlobalPaddingUnits?.Tablet} ${socialShareChildGlobalPaddingTablet?.bottom}${socialShareChildGlobalPaddingUnits?.Tablet} ${socialShareChildGlobalPaddingTablet?.left}${socialShareChildGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${socialShareChildGlobalPaddingMobile?.top}${socialShareChildGlobalPaddingUnits?.Mobile} ${socialShareChildGlobalPaddingMobile?.right}${socialShareChildGlobalPaddingUnits?.Mobile} ${socialShareChildGlobalPaddingMobile?.bottom}${socialShareChildGlobalPaddingUnits?.Mobile} ${socialShareChildGlobalPaddingMobile?.left}${socialShareChildGlobalPaddingUnits?.Mobile}`;
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (socialShareChildGlobalMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialShareChildGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialShareChildGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialShareChildGlobalMarginMobile: {
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
                    setAttributes({ socialShareChildGlobalMarginDesktop: { ...socialShareChildGlobalMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialShareChildGlobalMarginTablet: { ...socialShareChildGlobalMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialShareChildGlobalMarginMobile: { ...socialShareChildGlobalMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes({ socialShareChildGlobalMarginLink: !socialShareChildGlobalMarginLink });
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            socialShareChildGlobalMarginUnits: {
                ...socialShareChildGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const globalDesktopMargin = `${socialShareChildGlobalMarginDesktop?.top}${socialShareChildGlobalMarginUnits?.Desktop} ${socialShareChildGlobalMarginDesktop?.right}${socialShareChildGlobalMarginUnits?.Desktop} ${socialShareChildGlobalMarginDesktop?.bottom}${socialShareChildGlobalMarginUnits?.Desktop} ${socialShareChildGlobalMarginDesktop?.left}${socialShareChildGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${socialShareChildGlobalMarginTablet?.top}${socialShareChildGlobalMarginUnits?.Tablet} ${socialShareChildGlobalMarginTablet?.right}${socialShareChildGlobalMarginUnits?.Tablet} ${socialShareChildGlobalMarginTablet?.bottom}${socialShareChildGlobalMarginUnits?.Tablet} ${socialShareChildGlobalMarginTablet?.left}${socialShareChildGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${socialShareChildGlobalMarginMobile?.top}${socialShareChildGlobalMarginUnits?.Mobile} ${socialShareChildGlobalMarginMobile?.right}${socialShareChildGlobalMarginUnits?.Mobile} ${socialShareChildGlobalMarginMobile?.bottom}${socialShareChildGlobalMarginUnits?.Mobile} ${socialShareChildGlobalMarginMobile?.left}${socialShareChildGlobalMarginUnits?.Mobile}`;
    /** End Global Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (socialShareChildGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialShareChildGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialShareChildGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialShareChildGlobalBorderMobile: {
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
                    setAttributes({ socialShareChildGlobalBorderDesktop: { ...socialShareChildGlobalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialShareChildGlobalBorderTablet: { ...socialShareChildGlobalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialShareChildGlobalBorderMobile: { ...socialShareChildGlobalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ socialShareChildGlobalBorderLink: !socialShareChildGlobalBorderLink });
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            socialShareChildGlobalBorderUnits: {
                ...socialShareChildGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    const globalDesktopBorderWidth = `${socialShareChildGlobalBorderDesktop?.top}${socialShareChildGlobalBorderUnits?.Desktop} ${socialShareChildGlobalBorderDesktop?.right}${socialShareChildGlobalBorderUnits?.Desktop} ${socialShareChildGlobalBorderDesktop?.bottom}${socialShareChildGlobalBorderUnits?.Desktop} ${socialShareChildGlobalBorderDesktop?.left}${socialShareChildGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${socialShareChildGlobalBorderTablet?.top}${socialShareChildGlobalBorderUnits?.Tablet} ${socialShareChildGlobalBorderTablet?.right}${socialShareChildGlobalBorderUnits?.Tablet} ${socialShareChildGlobalBorderTablet?.bottom}${socialShareChildGlobalBorderUnits?.Tablet} ${socialShareChildGlobalBorderTablet?.left}${socialShareChildGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${socialShareChildGlobalBorderMobile?.top}${socialShareChildGlobalBorderUnits?.Mobile} ${socialShareChildGlobalBorderMobile?.right}${socialShareChildGlobalBorderUnits?.Mobile} ${socialShareChildGlobalBorderMobile?.bottom}${socialShareChildGlobalBorderUnits?.Mobile} ${socialShareChildGlobalBorderMobile?.left}${socialShareChildGlobalBorderUnits?.Mobile}`;
    /** End Border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (socialShareChildGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialShareChildGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialShareChildGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialShareChildGlobalBorderRadiusMobile: {
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
                    setAttributes({ socialShareChildGlobalBorderRadiusDesktop: { ...socialShareChildGlobalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialShareChildGlobalBorderRadiusTablet: { ...socialShareChildGlobalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialShareChildGlobalBorderRadiusMobile: { ...socialShareChildGlobalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ socialShareChildGlobalBorderRadiusLink: !socialShareChildGlobalBorderRadiusLink });
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            socialShareChildGlobalBorderRadiusUnits: {
                ...socialShareChildGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

    /** End Global Border Radius */
    const globalDesktopBorderRadiusWidth = `${socialShareChildGlobalBorderRadiusDesktop?.top}${socialShareChildGlobalBorderRadiusUnits?.Desktop} ${socialShareChildGlobalBorderRadiusDesktop?.right}${socialShareChildGlobalBorderRadiusUnits?.Desktop} ${socialShareChildGlobalBorderRadiusDesktop?.bottom}${socialShareChildGlobalBorderRadiusUnits?.Desktop} ${socialShareChildGlobalBorderRadiusDesktop?.left}${socialShareChildGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${socialShareChildGlobalBorderRadiusTablet?.top}${socialShareChildGlobalBorderRadiusUnits?.Tablet} ${socialShareChildGlobalBorderRadiusTablet?.right}${socialShareChildGlobalBorderRadiusUnits?.Tablet} ${socialShareChildGlobalBorderRadiusTablet?.bottom}${socialShareChildGlobalBorderRadiusUnits?.Tablet} ${socialShareChildGlobalBorderRadiusTablet?.left}${socialShareChildGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${socialShareChildGlobalBorderRadiusMobile?.top}${socialShareChildGlobalBorderRadiusUnits?.Mobile} ${socialShareChildGlobalBorderRadiusMobile?.right}${socialShareChildGlobalBorderRadiusUnits?.Mobile} ${socialShareChildGlobalBorderRadiusMobile?.bottom}${socialShareChildGlobalBorderRadiusUnits?.Mobile} ${socialShareChildGlobalBorderRadiusMobile?.left}${socialShareChildGlobalBorderRadiusUnits?.Mobile}`;
    /** End Border Radius */

    /**
     * Get background normal styles
     */
    const getBackgroundNormalStyles = (device) => {
        const bgType = socialShareChildGlobalBgNormalBackgroundType;
        const bgColor = socialShareChildGlobalBgNormalClassicColor;
        const bgGradient = socialShareChildGlobalBgNormalGradientColor;
        const customGradient = socialShareChildGlobalBgNormalCustomGradientInputValue;
        const customGradientEnabled = socialShareChildGlobalBgNormalCustomGradientSwitcher;

        const bgImageUrl = socialShareChildGlobalBgNormalBackgroundImageUrl?.[device];
        const bgImagePosition = socialShareChildGlobalBgNormalBackgroundImagePosition?.[device];
        const bgAttachment = socialShareChildGlobalBgNormalBackgroundImageAttachment?.[device];
        const bgRepeat = socialShareChildGlobalBgNormalBackgroundImageRepeat?.[device];
        const bgSize = socialShareChildGlobalBgNormalBackgroundImageSize?.[device];

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
        const bgType = socialShareChildGlobalBgHoverBackgroundType;
        const bgColor = socialShareChildGlobalBgHoverClassicColor;
        const bgGradient = socialShareChildGlobalBgHoverGradientColor;
        const customGradient = socialShareChildGlobalBgHoverCustomGradientInputValue;
        const customGradientEnabled = socialShareChildGlobalBgHoverCustomGradientSwitcher;

        const bgImageUrl = socialShareChildGlobalBgHoverBackgroundImageUrl?.[device];
        const bgImagePosition = socialShareChildGlobalBgHoverBackgroundImagePosition?.[device];
        const bgAttachment = socialShareChildGlobalBgHoverBackgroundImageAttachment?.[device];
        const bgRepeat = socialShareChildGlobalBgHoverBackgroundImageRepeat?.[device];
        const bgSize = socialShareChildGlobalBgHoverBackgroundImageSize?.[device];

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
    // Handle displayStyle change
    const handleDisplayStyleChange = (value) => {
        setAttributes({ displayStyle: value });
    };

    const iconHandler = (iconName) => {
        setAttributes({ icon: iconName });
    };

    const fbSocialShareStyle = useMemo(
        () => `
        .${blockID}.fb-social-share-child {
            ${socialShareChildPositionType === 'default' ? `position: relative !important;` : ''}
            ${socialShareChildPositionType !== 'default' && socialShareChildPositionType !== 'relative' ? `width: 100%;` : ''}
            ${socialShareChildPositionType !== 'default' ? `position: ${socialShareChildPositionType} !important;` : ''}
            ${socialShareChildPositionType !== 'default' && socialShareChildPositionType !== 'relative' && socialShareChildHZOrientationType === 'left' && socialShareChildHZLeftOffset?.Desktop ? `left: ${socialShareChildHZLeftOffset?.Desktop}${socialShareChildHZLeftOffsetUnits?.Desktop};` : ''} 
            ${socialShareChildPositionType !== 'default' && socialShareChildPositionType !== 'relative' && socialShareChildHZOrientationType === 'right' && socialShareChildHZRightOffset?.Desktop ? `right: ${socialShareChildHZRightOffset?.Desktop}${socialShareChildHZRightOffsetUnits?.Desktop};` : ''}
            ${socialShareChildPositionType !== 'default' && socialShareChildPositionType !== 'relative' && socialShareChildVROrientationType === 'top' && socialShareChildVRTopOffset?.Desktop ? `top: ${socialShareChildVRTopOffset?.Desktop}${socialShareChildVRTopOffsetUnits?.Desktop};` : ''}
            ${socialShareChildPositionType !== 'default' && socialShareChildPositionType !== 'relative' && socialShareChildVROrientationType === 'bottom' && socialShareChildVRBottomOffset?.Desktop ? `bottom: ${socialShareChildVRBottomOffset?.Desktop}${socialShareChildVRBottomOffsetUnits?.Desktop};` : ''}
            ${socialShareChildGlobalZIndex?.Desktop ? `z-index: ${socialShareChildGlobalZIndex?.Desktop};` : ''}
            ${socialShareChildOverflow !== 'default' ? `overflow: ${socialShareChildOverflow};` : ''}
        }
        .${blockID} .social-share-child-container {
            ${desktopBackgroundNormalStyles}
            ${globalDesktopPadding && socialShareChildGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && socialShareChildGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''}
            ${socialShareChildGlobalBorder ? `border: ${socialShareChildGlobalBorder};` : ''}
            ${globalDesktopBorderWidth && socialShareChildGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && socialShareChildGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${socialShareChildGlobalBorderColor ? `border-color: ${socialShareChildGlobalBorderColor};` : ''}
            ${socialShareChildGlobalBoxShadowCssValue ? `box-shadow: ${socialShareChildGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID} .social-share-child-container:hover{
            ${desktopBackgroundHoverStyles}
            ${socialShareChildGlobalBorderHoverColor ? `border-color: ${socialShareChildGlobalBorderHoverColor};` : ''}
            ${socialShareChildGlobalBoxShadowHoverCssValue ? `box-shadow: ${socialShareChildGlobalBoxShadowHoverCssValue};` : ''}
        }
        .${blockID} .social-share-child-container .social-share-icon .custom-icon {
            ${socialItemBgColor ? `background-color: ${socialItemBgColor};` : ''}
        }
        .${blockID} .social-share-child-container .social-share-icon .custom-icon:hover {
            ${socialItemBgColorHover ? `background-color: ${socialItemBgColorHover};` : ''}
        }
        .${blockID} .social-share-child-container .social-share-icon .custom-icon svg path{
            ${socialItemColor ? `fill: ${socialItemColor};` : ''}
        }
        .${blockID} .social-share-child-container .social-share-icon .custom-icon:hover svg path{
            ${socialItemHoverColor ? `fill: ${socialItemHoverColor};` : ''}
        }
        
        .${blockID} .social-share-child-container .social-share-button{
            ${socialShareLabelSpacing.Desktop ? `gap: ${socialShareLabelSpacing.Desktop}${socialShareLabelSpacingUnits.Desktop};` : ''}
        }
        
        .${blockID} .social-share-child-container .social-share-label{
            ${socialShareGlobalTypoSwitcher?.fontFamily === true && socialShareGlobalTypographyData?.fontFamily ? `font-family: ${socialShareGlobalTypographyData?.fontFamily};` : ''}
            ${socialShareGlobalTypoSwitcher?.fontSize === true && socialShareGlobalTypographyData?.fontSize ? `font-size: ${socialShareGlobalTypographyData?.fontSize};` : ''}
            ${socialShareGlobalTypoSwitcher?.fontWeight === true && socialShareGlobalTypographyData?.fontWeight ? `font-weight: ${socialShareGlobalTypographyData?.fontWeight};` : ''}
            ${socialShareGlobalTypoSwitcher?.fontStyle === true && socialShareGlobalTypographyData?.fontStyle ? `font-style: ${socialShareGlobalTypographyData?.fontStyle};` : ''}
            ${socialShareGlobalTypoSwitcher?.textTransform === true && socialShareGlobalTypographyData?.textTransform ? `text-transform: ${socialShareGlobalTypographyData?.textTransform};` : ''}
            ${socialShareGlobalTypoSwitcher?.textDecoration === true && socialShareGlobalTypographyData?.textDecoration ? `text-decoration: ${socialShareGlobalTypographyData?.textDecoration};` : ''}
            ${socialShareGlobalTypoSwitcher?.letterSpacing === true && socialShareGlobalTypographyData?.letterSpacing ? `letter-spacing: ${socialShareGlobalTypographyData?.letterSpacing};` : ''}
            ${socialShareGlobalTypoSwitcher?.lineHeight === true && socialShareGlobalTypographyData?.lineHeight ? `line-height: ${socialShareGlobalTypographyData?.lineHeight};` : ''}

            ${socialShareGlobalTypoSwitcher?.fontFamily === false && socialShareFontFamily && socialShareFontFamily !== 'Default' ? `font-family: ${socialShareFontFamily};` : ''}
            ${socialShareGlobalTypoSwitcher?.fontSize === false && socialShareFontSize?.Desktop && socialShareFontSizeUnits?.Desktop ? `font-size: ${socialShareFontSize?.Desktop}${socialShareFontSizeUnits?.Desktop};` : ''}
            ${socialShareGlobalTypoSwitcher?.fontWeight === false && socialShareFontWeight ? `font-weight: ${socialShareFontWeight};` : ''}
            ${socialShareGlobalTypoSwitcher?.fontStyle === false && socialShareFontStyle ? `font-style: ${socialShareFontStyle};` : ''}
            ${socialShareGlobalTypoSwitcher?.textTransform === false && socialShareTextTransform ? `text-transform: ${socialShareTextTransform};` : ''}
            ${socialShareGlobalTypoSwitcher?.textDecoration === false && socialShareTextDecoration ? `text-decoration: ${socialShareTextDecoration};` : ''}
            ${socialShareGlobalTypoSwitcher?.letterSpacing === false && socialShareLetterSpacing?.Desktop && socialShareLetterSpacingUnits?.Desktop ? `letter-spacing: ${socialShareLetterSpacing?.Desktop}${socialShareLetterSpacingUnits?.Desktop};` : ''}
            ${socialShareGlobalTypoSwitcher?.lineHeight === false && socialShareLineHeight?.Desktop && socialShareLineHeightUnits?.Desktop ? `line-height: ${socialShareLineHeight?.Desktop}${socialShareLineHeightUnits?.Desktop};` : ''}
            ${socialShareLabelColor ? `color: ${socialShareLabelColor};` : ''}
            ${socialShareLabelBgColor ? `background: ${socialShareLabelBgColor};` : ''}
        }
        .${blockID} .social-share-child-container .social-share-label:hover{
            ${socialShareLabelHoverColor ? `color: ${socialShareLabelHoverColor};` : ''}
            ${socialShareLabelHoverBgColor ? `background: ${socialShareLabelHoverBgColor};` : ''}
        }
        @media all and (max-width: 1024px){
            .${blockID} .social-share-child-container{
                ${tabletBackgroundNormalStyles}
                ${globalTabletPadding && socialShareChildGlobalPaddingDesktop?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && socialShareChildGlobalMarginDesktop?.top ? `margin: ${globalTabletMargin};` : ''}
                ${globalTabletBorderWidth && socialShareChildGlobalBorderDesktop?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && socialShareChildGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }
            .${blockID} .social-share-child-container:hover{
                ${tabletBackgroundHoverStyles}
            }
            .${blockID} .social-share-child-container .social-share-label{
                ${socialShareGlobalTypoSwitcher?.fontSize === false && socialShareFontSize?.Tablet && socialShareFontSizeUnits?.Tablet ? `font-size: ${socialShareFontSize?.Tablet}${socialShareFontSizeUnits?.Tablet};` : ''}
                ${socialShareGlobalTypoSwitcher?.letterSpacing === false && socialShareLetterSpacing?.Tablet && socialShareLetterSpacingUnits?.Tablet ? `letter-spacing: ${socialShareLetterSpacing?.Tablet}${socialShareLetterSpacingUnits?.Tablet};` : ''}
                ${socialShareGlobalTypoSwitcher?.lineHeight === false && socialShareLineHeight?.Tablet && socialShareLineHeightUnits?.Tablet ? `line-height: ${socialShareLineHeight?.Tablet}${socialShareLineHeightUnits?.Tablet};` : ''}
            }
            .${blockID} .social-share-child-container .social-share-button{
                ${socialShareLabelSpacing.Tablet ? `gap: ${socialShareLabelSpacing.Tablet}${socialShareLabelSpacingUnits.Tablet};` : ''}
            }
        }
        @media all and (max-width: 767px){
            .${blockID} .social-share-child-container{
                ${mobileBackgroundNormalStyles}
                ${globalMobilePadding && socialShareChildGlobalPaddingDesktop?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && socialShareChildGlobalMarginDesktop?.top ? `margin: ${globalMobileMargin};` : ''}
                ${globalMobileBorderWidth && socialShareChildGlobalBorderDesktop?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && socialShareChildGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }
            .${blockID} .social-share-child-container:hover{
                ${mobileBackgroundHoverStyles}
            }
            .${blockID} .social-share-child-container .social-share-label{
                ${socialShareGlobalTypoSwitcher?.fontSize === false && socialShareFontSize?.Mobile && socialShareFontSizeUnits?.Mobile ? `font-size: ${socialShareFontSize?.Mobile}${socialShareFontSizeUnits?.Mobile};` : ''}
                ${socialShareGlobalTypoSwitcher?.letterSpacing === false && socialShareLetterSpacing?.Mobile && socialShareLetterSpacingUnits?.Mobile ? `letter-spacing: ${socialShareLetterSpacing?.Mobile}${socialShareLetterSpacingUnits?.Mobile};` : ''}
                ${socialShareGlobalTypoSwitcher?.lineHeight === false && socialShareLineHeight?.Mobile && socialShareLineHeightUnits?.Mobile ? `line-height: ${socialShareLineHeight?.Mobile}${socialShareLineHeightUnits?.Mobile};` : ''}
            }
            .${blockID} .social-share-child-container .social-share-button{
                ${socialShareLabelSpacing.Mobile ? `gap: ${socialShareLabelSpacing.Mobile}${socialShareLabelSpacingUnits.Mobile};` : ''}
            }
        }
        `,
        [
            attributes
        ],
    );

    useEffect(() => {
        setAttributes({
            blockStyle: `${fbSocialShareStyle}`.replace(/\s+/g, ' ').trim(),
        });
    }, [fbSocialShareStyle, setAttributes]);

    const generalControls = (
        <>
            <PanelBody title={__("Icon", "frontis-blocks")} initialOpen={true}>
                <SelectControl
                    label={__("Social Media Type", "frontis-blocks")}
                    value={socialMediaType}
                    options={[
                        { value: '', label: __("Select a type", "frontis-blocks") },
                        ...socialMediaTypes
                    ]}
                    onChange={(value) => setAttributes({ socialMediaType: value })}
                />

                <SelectControl
                    label={__("Display Style", "frontis-blocks")}
                    value={displayStyle}
                    options={[
                        { value: 'icon', label: __("Icon Only", "frontis-blocks") },
                        { value: 'text', label: __("Text Only", "frontis-blocks") },
                        { value: 'icon-text', label: __("Icon & Text", "frontis-blocks") },
                    ]}
                    onChange={handleDisplayStyleChange}
                />

                <FBIconPicker
                    value={icon}
                    setIconHandler={iconHandler}
                />
            </PanelBody>
        </>
    );

    const styleControls = (
        <>
            <PanelBody title={__("Icon", "frontis-blocks")} initialOpen={false}>
                <FB_SwitcherControl
                    label={__("Icon Color", "frontis-blocks")}
                    globalSwitcher={socialItemColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ socialItemColorSwitcher: value })}
                />

                {socialItemColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={socialItemColor}
                        setGlobalColor={(value) => setAttributes({ socialItemColor: value === undefined ? '' : value })}
                    />
                )}

                {socialItemColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={socialItemHoverColor}
                        setGlobalColor={(value) => setAttributes({ socialItemHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_SwitcherControl
                    label={__("Background Color", "frontis-blocks")}
                    globalSwitcher={socialItemBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ socialItemBgColorSwitcher: value })}
                />

                {socialItemBgColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={socialItemBgColor}
                        setGlobalColor={(value) => setAttributes({ socialItemBgColor: value === undefined ? '' : value })}
                    />
                )}

                {socialItemBgColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={socialItemBgColorHover}
                        setGlobalColor={(value) => setAttributes({ socialItemBgColorHover: value })}
                    />
                )}
            </PanelBody>
            <PanelBody title={__("Label", "frontis-blocks")} initialOpen={false}>
                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={socialShareGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ socialShareGlobalTypographyData: value })}

                    globalTypoType={socialShareGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({
                            socialShareGlobalTypoType: value,
                            socialShareGlobalTypoSwitcher: value === 'default' ? { ...socialShareGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false, } : { ...socialShareGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true, }
                        })
                    }}

                    globalTypoOption={socialShareGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ socialShareGlobalTypoOption: value })}

                    fontFamily={socialShareFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ socialShareFontFamily: value, socialShareGlobalTypoSwitcher: { ...socialShareGlobalTypoSwitcher, fontFamily: value && false } })}

                    fontSize={socialShareFontSize}
                    onChangeFontSize={(value) => setAttributes({ socialShareFontSize: value, socialShareGlobalTypoSwitcher: { ...socialShareGlobalTypoSwitcher, fontSize: value && false } })}

                    fontSizeUnits={socialShareFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ socialShareFontSizeUnits: value })}

                    fontWeight={socialShareFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ socialShareFontWeight: value, socialShareGlobalTypoSwitcher: { ...socialShareGlobalTypoSwitcher, fontWeight: value && false } })}

                    fontStyle={socialShareFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ socialShareFontStyle: value, socialShareGlobalTypoSwitcher: { ...socialShareGlobalTypoSwitcher, fontStyle: value && false } })}

                    textTransform={socialShareTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ socialShareTextTransform: value, socialShareGlobalTypoSwitcher: { ...socialShareGlobalTypoSwitcher, textTransform: value && false } })}

                    textDecoration={socialShareTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ socialShareTextDecoration: value, socialShareGlobalTypoSwitcher: { ...socialShareGlobalTypoSwitcher, textDecoration: value && false } })}

                    letterSpacing={socialShareLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ socialShareLetterSpacing: value, socialShareGlobalTypoSwitcher: { ...socialShareGlobalTypoSwitcher, letterSpacing: value && false } })}

                    letterSpacingUnits={socialShareLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ socialShareLetterSpacingUnits: value })}

                    lineHeight={socialShareLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ socialShareLineHeight: value, socialShareGlobalTypoSwitcher: { ...socialShareGlobalTypoSwitcher, lineHeight: value && false } })}

                    lineHeightUnits={socialShareLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ socialShareLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={socialShareLabelColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ socialShareLabelColorSwitcher: value })}
                />

                {socialShareLabelColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={socialShareLabelColor}
                        setGlobalColor={(value) => setAttributes({ socialShareLabelColor: value === undefined ? '' : value })}
                    />
                )}

                {socialShareLabelColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={socialShareLabelHoverColor}
                        setGlobalColor={(value) => setAttributes({ socialShareLabelHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_SwitcherControl
                    label={__("Background Color", "frontis-blocks")}
                    globalSwitcher={socialShareLabelBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ socialShareLabelBgColorSwitcher: value })}
                />

                {socialShareLabelBgColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={socialShareLabelBgColor}
                        setGlobalColor={(value) => setAttributes({ socialShareLabelBgColor: value === undefined ? '' : value })}
                    />
                )}

                {socialShareLabelBgColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={socialShareLabelHoverBgColor}
                        setGlobalColor={(value) => setAttributes({ socialShareLabelHoverBgColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Range
                    min={1}
                    max={100}
                    label={__("Label Spacing", "frontis-blocks")}
                    rangeValue={socialShareLabelSpacing}
                    onChangeHandler={(value) => setAttributes({ socialShareLabelSpacing: value })}
                    rangeUnitHandler={(value) => setAttributes({ socialShareLabelSpacingUnits: value })}
                    deviceType={deviceType}
                    units={socialShareLabelSpacingUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
            </PanelBody>
        </>
    );

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
                            rangeValue={socialShareChildGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ socialShareChildGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={socialShareChildOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ socialShareChildOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={socialShareChildPositionType}
                            setPositionType={(value) => setAttributes({ socialShareChildPositionType: value })}

                            HZOrientationType={socialShareChildHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ socialShareChildHZOrientationType: value })
                            }
                            VROrientationType={socialShareChildVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ socialShareChildVROrientationType: value })
                            }

                            HZLeftOffset={socialShareChildHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ socialShareChildHZLeftOffset: value })}
                            HZLeftOffsetUnits={socialShareChildHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ socialShareChildHZLeftOffsetUnits: value })}
                            HZRightOffset={socialShareChildHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ socialShareChildHZRightOffset: value })}
                            HZRightOffsetUnits={socialShareChildHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ socialShareChildHZRightOffsetUnits: value })}

                            VRTopOffset={socialShareChildVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ socialShareChildVRTopOffset: value })}
                            VRTopOffsetUnits={socialShareChildVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ socialShareChildVRTopOffsetUnits: value })}
                            VRBottomOffset={socialShareChildVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ socialShareChildVRBottomOffset: value })}
                            VRBottomOffsetUnits={socialShareChildVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ socialShareChildVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={socialShareChildGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ socialShareChildGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={socialShareChildGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ socialShareChildGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />

                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={socialShareChildGlobalPaddingUnits}
                            spacingDesktop={socialShareChildGlobalPaddingDesktop}
                            spacingTablet={socialShareChildGlobalPaddingTablet}
                            spacingMobile={socialShareChildGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={socialShareChildGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={socialShareChildGlobalMarginUnits}
                            spacingDesktop={socialShareChildGlobalMarginDesktop}
                            spacingTablet={socialShareChildGlobalMarginTablet}
                            spacingMobile={socialShareChildGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={socialShareChildGlobalMarginLink}
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
                            globalSwitcher={socialShareChildGlobalBgColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ socialShareChildGlobalBgColorSwitcher: value })}
                        />

                        {socialShareChildGlobalBgColorSwitcher === 'normal' && (
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
                                                            onClick={() => setAttributes({ socialShareChildGlobalBgNormalBackgroundType: item.value })}
                                                            className={`fb-setting-background-color-panel-btn-switcher ${socialShareChildGlobalBgNormalBackgroundType === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {socialShareChildGlobalBgNormalBackgroundType === 'classic' && (

                                                <>
                                                    <FB_ColorControl
                                                        label={__("Color", "frontis-blocks")}
                                                        globalColor={socialShareChildGlobalBgNormalClassicColor}
                                                        setGlobalColor={(value) => setAttributes({ socialShareChildGlobalBgNormalClassicColor: value === undefined ? '' : value })}
                                                    />

                                                    <FB_ResponsiveBackgroundImageControl
                                                        deviceType={deviceType}
                                                        globalBackgroundImageUrl={socialShareChildGlobalBgNormalBackgroundImageUrl}
                                                        setGlobalBackgroundImageUrl={(value) => setAttributes({ socialShareChildGlobalBgNormalBackgroundImageUrl: value })}
                                                        globalBackgroundImagePosition={socialShareChildGlobalBgNormalBackgroundImagePosition}
                                                        setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ socialShareChildGlobalBgNormalBackgroundImagePosition: newPosition })}
                                                        globalBackgroundImageAttachment={socialShareChildGlobalBgNormalBackgroundImageAttachment}
                                                        setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ socialShareChildGlobalBgNormalBackgroundImageAttachment: newAttachment })}
                                                        globalBackgroundImageRepeat={socialShareChildGlobalBgNormalBackgroundImageRepeat}
                                                        setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ socialShareChildGlobalBgNormalBackgroundImageRepeat: newRepeat })}
                                                        globalBackgroundImageSize={socialShareChildGlobalBgNormalBackgroundImageSize}
                                                        setGlobalBackgroundImageSize={(newSize) => setAttributes({ socialShareChildGlobalBgNormalBackgroundImageSize: newSize })}
                                                        setAttributes={setAttributes}
                                                    />

                                                </>
                                            )}

                                            {socialShareChildGlobalBgNormalBackgroundType === 'gradient' && (
                                                <FB_GradientColorControl
                                                    globalCustomGradientSwitcher={socialShareChildGlobalBgNormalCustomGradientSwitcher}
                                                    setGlobalCustomGradientSwitcher={(value) => setAttributes({ socialShareChildGlobalBgNormalCustomGradientSwitcher: value })}
                                                    globalCustomGradientInputValue={socialShareChildGlobalBgNormalCustomGradientInputValue}
                                                    setGlobalCustomGradientInputValue={(value) => setAttributes({ socialShareChildGlobalBgNormalCustomGradientInputValue: value })}
                                                    globalGradientColor={socialShareChildGlobalBgNormalGradientColor}
                                                    setGlobalGradientColor={(value) => setAttributes({ socialShareChildGlobalBgNormalGradientColor: value === undefined ? null : value })}
                                                />
                                            )}
                                        </div>
                                    )}
                                />
                            </BaseControl>

                        )}

                        {socialShareChildGlobalBgColorSwitcher === 'hover' && (
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
                                                            onClick={() => setAttributes({ socialShareChildGlobalBgHoverBackgroundType: item.value })}
                                                            className={`fb-setting-background-color-panel-btn-switcher ${socialShareChildGlobalBgHoverBackgroundType === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {socialShareChildGlobalBgHoverBackgroundType === 'classic' && (

                                                <>
                                                    <FB_ColorControl
                                                        label={__("Color", "frontis-blocks")}
                                                        globalColor={socialShareChildGlobalBgHoverClassicColor}
                                                        setGlobalColor={(value) => setAttributes({ socialShareChildGlobalBgHoverClassicColor: value === undefined ? '' : value })}
                                                    />

                                                    <FB_ResponsiveBackgroundImageControl
                                                        deviceType={deviceType}
                                                        globalBackgroundImageUrl={socialShareChildGlobalBgHoverBackgroundImageUrl}
                                                        setGlobalBackgroundImageUrl={(value) => setAttributes({ socialShareChildGlobalBgHoverBackgroundImageUrl: value })}
                                                        globalBackgroundImagePosition={socialShareChildGlobalBgHoverBackgroundImagePosition}
                                                        setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ socialShareChildGlobalBgHoverBackgroundImagePosition: newPosition })}
                                                        globalBackgroundImageAttachment={socialShareChildGlobalBgHoverBackgroundImageAttachment}
                                                        setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ socialShareChildGlobalBgHoverBackgroundImageAttachment: newAttachment })}
                                                        globalBackgroundImageRepeat={socialShareChildGlobalBgHoverBackgroundImageRepeat}
                                                        setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ socialShareChildGlobalBgHoverBackgroundImageRepeat: newRepeat })}
                                                        globalBackgroundImageSize={socialShareChildGlobalBgHoverBackgroundImageSize}
                                                        setGlobalBackgroundImageSize={(newSize) => setAttributes({ socialShareChildGlobalBgHoverBackgroundImageSize: newSize })}
                                                        setAttributes={setAttributes}
                                                    />

                                                </>
                                            )}

                                            {socialShareChildGlobalBgHoverBackgroundType === 'gradient' && (
                                                <FB_GradientColorControl
                                                    globalCustomGradientSwitcher={socialShareChildGlobalBgHoverCustomGradientSwitcher}
                                                    setGlobalCustomGradientSwitcher={(value) => setAttributes({ socialShareChildGlobalBgHoverCustomGradientSwitcher: value })}
                                                    globalCustomGradientInputValue={socialShareChildGlobalBgHoverCustomGradientInputValue}
                                                    setGlobalCustomGradientInputValue={(value) => setAttributes({ socialShareChildGlobalBgHoverCustomGradientInputValue: value })}
                                                    globalGradientColor={socialShareChildGlobalBgHoverGradientColor}
                                                    setGlobalGradientColor={(value) => setAttributes({ socialShareChildGlobalBgHoverGradientColor: value === undefined ? null : value })}
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
                            value={socialShareChildGlobalBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ socialShareChildGlobalBorder: value })}
                        />


                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={socialShareChildGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ socialShareChildGlobalBorderColorSwitcher: value })}
                        />

                        {socialShareChildGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={socialShareChildGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ socialShareChildGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {socialShareChildGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={socialShareChildGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ socialShareChildGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={socialShareChildGlobalBorderUnits}
                            spacingDesktop={socialShareChildGlobalBorderDesktop}
                            spacingTablet={socialShareChildGlobalBorderTablet}
                            spacingMobile={socialShareChildGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={socialShareChildGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={socialShareChildGlobalBorderRadiusUnits}
                            spacingDesktop={socialShareChildGlobalBorderRadiusDesktop}
                            spacingTablet={socialShareChildGlobalBorderRadiusTablet}
                            spacingMobile={socialShareChildGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={socialShareChildGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={socialShareChildGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ socialShareChildGlobalBoxShadowSwitcher: value })}
                        />

                        {socialShareChildGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ socialShareChildGlobalBoxShadowValues: value })}
                                initialShadowValue={socialShareChildGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ socialShareChildGlobalBoxShadowCssValue: value })}
                            />
                        )}

                        {socialShareChildGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ socialShareChildGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={socialShareChildGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ socialShareChildGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={socialShareChildDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ socialShareChildDesktopSwitcher: value })}

                            tabletValue={socialShareChildTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ socialShareChildTabletSwitcher: value })}

                            mobileValue={socialShareChildMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ socialShareChildMobileSwitcher: value })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={socialShareChildCustomCSS}
                            onChangeValue={(value) => setAttributes({ socialShareChildCustomCSS: value })}
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