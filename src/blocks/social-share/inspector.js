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

import { useEffect, useState, useMemo } from '@wordpress/element';
import FB_Range from '@Components/range';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import FB_Spacing from '@Components/spacing';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_InspectorControls from '@Components/InspectorControls';
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        layoutType,
        iconSpacing,
        iconSpacingUnits,
        iconFontSize,
        iconFontSizeUnits,
        iconAlignment,
        socialShareCustomCSS,
        socialShareDesktopSwitcher,
        socialShareTabletSwitcher,
        socialShareMobileSwitcher,
        socialShareGlobalZIndex,
        socialShareOverflow,
        socialShareGlobalWraperID,
        socialShareGlobalWraperClass,

        /** Padding */
        socialShareGlobalPaddingUnits,
        socialShareGlobalPaddingDesktop,
        socialShareGlobalPaddingTablet,
        socialShareGlobalPaddingMobile,
        socialShareGlobalPaddingLink,

        /** Margin */
        socialShareGlobalMarginUnits,
        socialShareGlobalMarginDesktop,
        socialShareGlobalMarginTablet,
        socialShareGlobalMarginMobile,
        socialShareGlobalMarginLink,

        /** Background Normal */
        socialShareGlobalBgColor,
        socialShareGlobalBgHoverColor,
        socialShareGlobalBgColorSwitcher,
        socialShareGlobalBgNormalBackgroundType,
        socialShareGlobalBgNormalClassicColor,
        socialShareGlobalBgNormalGradientColor,
        socialShareGlobalBgNormalCustomGradientSwitcher,
        socialShareGlobalBgNormalCustomGradientInputValue,
        socialShareGlobalBgNormalBackgroundImageUrl,
        socialShareGlobalBgNormalBackgroundImagePosition,
        socialShareGlobalBgNormalBackgroundImageAttachment,
        socialShareGlobalBgNormalBackgroundImageRepeat,
        socialShareGlobalBgNormalBackgroundImageSize,

        /** Background Hover */
        socialShareGlobalBgHoverBackgroundType,
        socialShareGlobalBgHoverClassicColor,
        socialShareGlobalBgHoverGradientColor,
        socialShareGlobalBgHoverCustomGradientSwitcher,
        socialShareGlobalBgHoverCustomGradientInputValue,
        socialShareGlobalBgHoverBackgroundImageUrl,
        socialShareGlobalBgHoverBackgroundImagePosition,
        socialShareGlobalBgHoverBackgroundImageAttachment,
        socialShareGlobalBgHoverBackgroundImageRepeat,
        socialShareGlobalBgHoverBackgroundImageSize,

        /** Border */
        socialShareGlobalBorder,
        socialShareGlobalBorderColorSwitcher,
        socialShareGlobalBorderColor,
        socialShareGlobalBorderHoverColor,
        socialShareGlobalBorderUnits,
        socialShareGlobalBorderDesktop,
        socialShareGlobalBorderTablet,
        socialShareGlobalBorderMobile,
        socialShareGlobalBorderLink,

        /** Border Radius */
        socialShareGlobalBorderRadiusUnits,
        socialShareGlobalBorderRadiusDesktop,
        socialShareGlobalBorderRadiusTablet,
        socialShareGlobalBorderRadiusMobile,
        socialShareGlobalBorderRadiusLink,

        /** Box Shadow */
        socialShareGlobalBoxShadowSwitcher,
        socialShareGlobalBoxShadowValues,
        socialShareGlobalBoxShadowCssValue,
        socialShareGlobalBoxShadowHoverValues,
        socialShareGlobalBoxShadowHoverCssValue,
        socialSharePositionType,
        socialShareHZOrientationType,
        socialShareVROrientationType,
        socialShareHZLeftOffset,
        socialShareHZLeftOffsetUnits,
        socialShareHZRightOffset,
        socialShareHZRightOffsetUnits,
        socialShareVRTopOffset,
        socialShareVRTopOffsetUnits,
        socialShareVRBottomOffset,
        socialShareVRBottomOffsetUnits,
    } = attributes;

    const deviceType = useDeviceType();

    // Generate unique block ID

    useEffect(() => {
        if (clientId && typeof clientId === "string") {
            setAttributes({
                blockID: "fb-social-share-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    /** Start Global padding */
    const handleGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (socialShareGlobalPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialShareGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialShareGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialShareGlobalPaddingMobile: {
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
                    setAttributes({ socialShareGlobalPaddingDesktop: { ...socialShareGlobalPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialShareGlobalPaddingTablet: { ...socialShareGlobalPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialShareGlobalPaddingMobile: { ...socialShareGlobalPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes({ socialShareGlobalPaddingLink: !socialShareGlobalPaddingLink });
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            socialShareGlobalPaddingUnits: {
                ...socialShareGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    const globalDesktopPadding = `${socialShareGlobalPaddingDesktop?.top}${socialShareGlobalPaddingUnits?.Desktop} ${socialShareGlobalPaddingDesktop?.right}${socialShareGlobalPaddingUnits?.Desktop} ${socialShareGlobalPaddingDesktop?.bottom}${socialShareGlobalPaddingUnits?.Desktop} ${socialShareGlobalPaddingDesktop?.left}${socialShareGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${socialShareGlobalPaddingTablet?.top}${socialShareGlobalPaddingUnits?.Tablet} ${socialShareGlobalPaddingTablet?.right}${socialShareGlobalPaddingUnits?.Tablet} ${socialShareGlobalPaddingTablet?.bottom}${socialShareGlobalPaddingUnits?.Tablet} ${socialShareGlobalPaddingTablet?.left}${socialShareGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${socialShareGlobalPaddingMobile?.top}${socialShareGlobalPaddingUnits?.Mobile} ${socialShareGlobalPaddingMobile?.right}${socialShareGlobalPaddingUnits?.Mobile} ${socialShareGlobalPaddingMobile?.bottom}${socialShareGlobalPaddingUnits?.Mobile} ${socialShareGlobalPaddingMobile?.left}${socialShareGlobalPaddingUnits?.Mobile}`;
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (socialShareGlobalMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialShareGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialShareGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialShareGlobalMarginMobile: {
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
                    setAttributes({ socialShareGlobalMarginDesktop: { ...socialShareGlobalMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialShareGlobalMarginTablet: { ...socialShareGlobalMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialShareGlobalMarginMobile: { ...socialShareGlobalMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes({ socialShareGlobalMarginLink: !socialShareGlobalMarginLink });
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            socialShareGlobalMarginUnits: {
                ...socialShareGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const globalDesktopMargin = `${socialShareGlobalMarginDesktop?.top}${socialShareGlobalMarginUnits?.Desktop} ${socialShareGlobalMarginDesktop?.right}${socialShareGlobalMarginUnits?.Desktop} ${socialShareGlobalMarginDesktop?.bottom}${socialShareGlobalMarginUnits?.Desktop} ${socialShareGlobalMarginDesktop?.left}${socialShareGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${socialShareGlobalMarginTablet?.top}${socialShareGlobalMarginUnits?.Tablet} ${socialShareGlobalMarginTablet?.right}${socialShareGlobalMarginUnits?.Tablet} ${socialShareGlobalMarginTablet?.bottom}${socialShareGlobalMarginUnits?.Tablet} ${socialShareGlobalMarginTablet?.left}${socialShareGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${socialShareGlobalMarginMobile?.top}${socialShareGlobalMarginUnits?.Mobile} ${socialShareGlobalMarginMobile?.right}${socialShareGlobalMarginUnits?.Mobile} ${socialShareGlobalMarginMobile?.bottom}${socialShareGlobalMarginUnits?.Mobile} ${socialShareGlobalMarginMobile?.left}${socialShareGlobalMarginUnits?.Mobile}`;
    /** End Global Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (socialShareGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialShareGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialShareGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialShareGlobalBorderMobile: {
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
                    setAttributes({ socialShareGlobalBorderDesktop: { ...socialShareGlobalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialShareGlobalBorderTablet: { ...socialShareGlobalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialShareGlobalBorderMobile: { ...socialShareGlobalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ socialShareGlobalBorderLink: !socialShareGlobalBorderLink });
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            socialShareGlobalBorderUnits: {
                ...socialShareGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    const globalDesktopBorderWidth = `${socialShareGlobalBorderDesktop?.top}${socialShareGlobalBorderUnits?.Desktop} ${socialShareGlobalBorderDesktop?.right}${socialShareGlobalBorderUnits?.Desktop} ${socialShareGlobalBorderDesktop?.bottom}${socialShareGlobalBorderUnits?.Desktop} ${socialShareGlobalBorderDesktop?.left}${socialShareGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${socialShareGlobalBorderTablet?.top}${socialShareGlobalBorderUnits?.Tablet} ${socialShareGlobalBorderTablet?.right}${socialShareGlobalBorderUnits?.Tablet} ${socialShareGlobalBorderTablet?.bottom}${socialShareGlobalBorderUnits?.Tablet} ${socialShareGlobalBorderTablet?.left}${socialShareGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${socialShareGlobalBorderMobile?.top}${socialShareGlobalBorderUnits?.Mobile} ${socialShareGlobalBorderMobile?.right}${socialShareGlobalBorderUnits?.Mobile} ${socialShareGlobalBorderMobile?.bottom}${socialShareGlobalBorderUnits?.Mobile} ${socialShareGlobalBorderMobile?.left}${socialShareGlobalBorderUnits?.Mobile}`;
    /** End Border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (socialShareGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        socialShareGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        socialShareGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        socialShareGlobalBorderRadiusMobile: {
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
                    setAttributes({ socialShareGlobalBorderRadiusDesktop: { ...socialShareGlobalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ socialShareGlobalBorderRadiusTablet: { ...socialShareGlobalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ socialShareGlobalBorderRadiusMobile: { ...socialShareGlobalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ socialShareGlobalBorderRadiusLink: !socialShareGlobalBorderRadiusLink });
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            socialShareGlobalBorderRadiusUnits: {
                ...socialShareGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

    /** End Global Border Radius */
    const globalDesktopBorderRadiusWidth = `${socialShareGlobalBorderRadiusDesktop?.top}${socialShareGlobalBorderRadiusUnits?.Desktop} ${socialShareGlobalBorderRadiusDesktop?.right}${socialShareGlobalBorderRadiusUnits?.Desktop} ${socialShareGlobalBorderRadiusDesktop?.bottom}${socialShareGlobalBorderRadiusUnits?.Desktop} ${socialShareGlobalBorderRadiusDesktop?.left}${socialShareGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${socialShareGlobalBorderRadiusTablet?.top}${socialShareGlobalBorderRadiusUnits?.Tablet} ${socialShareGlobalBorderRadiusTablet?.right}${socialShareGlobalBorderRadiusUnits?.Tablet} ${socialShareGlobalBorderRadiusTablet?.bottom}${socialShareGlobalBorderRadiusUnits?.Tablet} ${socialShareGlobalBorderRadiusTablet?.left}${socialShareGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${socialShareGlobalBorderRadiusMobile?.top}${socialShareGlobalBorderRadiusUnits?.Mobile} ${socialShareGlobalBorderRadiusMobile?.right}${socialShareGlobalBorderRadiusUnits?.Mobile} ${socialShareGlobalBorderRadiusMobile?.bottom}${socialShareGlobalBorderRadiusUnits?.Mobile} ${socialShareGlobalBorderRadiusMobile?.left}${socialShareGlobalBorderRadiusUnits?.Mobile}`;
    /** End Border Radius */

    /**
     * Get background normal styles
     */
    const getBackgroundNormalStyles = (device) => {
        const bgType = socialShareGlobalBgNormalBackgroundType;
        const bgColor = socialShareGlobalBgNormalClassicColor;
        const bgGradient = socialShareGlobalBgNormalGradientColor;
        const customGradient = socialShareGlobalBgNormalCustomGradientInputValue;
        const customGradientEnabled = socialShareGlobalBgNormalCustomGradientSwitcher;

        const bgImageUrl = socialShareGlobalBgNormalBackgroundImageUrl?.[device];
        const bgImagePosition = socialShareGlobalBgNormalBackgroundImagePosition?.[device];
        const bgAttachment = socialShareGlobalBgNormalBackgroundImageAttachment?.[device];
        const bgRepeat = socialShareGlobalBgNormalBackgroundImageRepeat?.[device];
        const bgSize = socialShareGlobalBgNormalBackgroundImageSize?.[device];

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
        const bgType = socialShareGlobalBgHoverBackgroundType;
        const bgColor = socialShareGlobalBgHoverClassicColor;
        const bgGradient = socialShareGlobalBgHoverGradientColor;
        const customGradient = socialShareGlobalBgHoverCustomGradientInputValue;
        const customGradientEnabled = socialShareGlobalBgHoverCustomGradientSwitcher;

        const bgImageUrl = socialShareGlobalBgHoverBackgroundImageUrl?.[device];
        const bgImagePosition = socialShareGlobalBgHoverBackgroundImagePosition?.[device];
        const bgAttachment = socialShareGlobalBgHoverBackgroundImageAttachment?.[device];
        const bgRepeat = socialShareGlobalBgHoverBackgroundImageRepeat?.[device];
        const bgSize = socialShareGlobalBgHoverBackgroundImageSize?.[device];

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

    const fbSocialShareStyle = useMemo(
        () => `
        .${blockID}.fb-social-share {
            ${socialSharePositionType === 'default' ? `position: relative !important;` : ''}
            ${socialSharePositionType !== 'default' && socialSharePositionType !== 'relative' ? `width: 100%;` : ''}
            ${socialSharePositionType !== 'default' ? `position: ${socialSharePositionType} !important;` : ''}
            ${socialSharePositionType !== 'default' && socialSharePositionType !== 'relative' && socialShareHZOrientationType === 'left' && socialShareHZLeftOffset?.Desktop ? `left: ${socialShareHZLeftOffset?.Desktop}${socialShareHZLeftOffsetUnits?.Desktop};` : ''} 
            ${socialSharePositionType !== 'default' && socialSharePositionType !== 'relative' && socialShareHZOrientationType === 'right' && socialShareHZRightOffset?.Desktop ? `right: ${socialShareHZRightOffset?.Desktop}${socialShareHZRightOffsetUnits?.Desktop};` : ''}
            ${socialSharePositionType !== 'default' && socialSharePositionType !== 'relative' && socialShareVROrientationType === 'top' && socialShareVRTopOffset?.Desktop ? `top: ${socialShareVRTopOffset?.Desktop}${socialShareVRTopOffsetUnits?.Desktop};` : ''}
            ${socialSharePositionType !== 'default' && socialSharePositionType !== 'relative' && socialShareVROrientationType === 'bottom' && socialShareVRBottomOffset?.Desktop ? `bottom: ${socialShareVRBottomOffset?.Desktop}${socialShareVRBottomOffsetUnits?.Desktop};` : ''}
            ${socialShareGlobalZIndex?.Desktop ? `z-index: ${socialShareGlobalZIndex?.Desktop};` : ''}
            ${socialShareOverflow !== 'default' ? `overflow: ${socialShareOverflow};` : ''}
        }
        .${blockID} .social-share-parent-container {
            ${desktopBackgroundNormalStyles}
            ${globalDesktopPadding && socialShareGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && socialShareGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''}
            ${socialShareGlobalBorder ? `border: ${socialShareGlobalBorder};` : ''}
            ${globalDesktopBorderWidth && socialShareGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && socialShareGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${socialShareGlobalBorderColor ? `border-color: ${socialShareGlobalBorderColor};` : ''}
            ${socialShareGlobalBoxShadowCssValue ? `box-shadow: ${socialShareGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
            position: relative;
            display: flex;
            ${layoutType === 'vertical' ? 'flex-direction: row;' : ''}
            ${layoutType === 'horizontal' ? 'flex-direction: column;' : ''}
            ${iconAlignment.Desktop ? `justify-content: ${iconAlignment.Desktop};` : ''}
            ${iconSpacing.Desktop ? `gap: ${iconSpacing.Desktop}${iconSpacingUnits.Desktop};` : ''}
        }
        .${blockID} .social-share-parent-container .block-editor-inner-blocks .block-editor-block-list__layout{
            ${layoutType === 'vertical' ? 'flex-direction: row;' : ''}
            ${layoutType === 'horizontal' ? 'flex-direction: column;' : ''}
        }
        .${blockID} .social-share-parent-container:hover{
            ${desktopBackgroundHoverStyles}
            ${socialShareGlobalBorderHoverColor ? `border-color: ${socialShareGlobalBorderHoverColor};` : ''}
            ${socialShareGlobalBoxShadowHoverCssValue ? `box-shadow: ${socialShareGlobalBoxShadowHoverCssValue};` : ''}
        }
        .${blockID} .social-share-parent-container .block-editor-block-list__layout {
            ${iconSpacing.Desktop ? `gap: ${iconSpacing.Desktop}${iconSpacingUnits.Desktop};` : ''}
        }
        .${blockID} .social-share-parent-container .social-share-child-container .social-share-icon svg {
            ${iconFontSize.Desktop ? `width: ${iconFontSize.Desktop}${iconFontSizeUnits.Desktop};` : ''}
            ${iconFontSize.Desktop ? `height: ${iconFontSize.Desktop}${iconFontSizeUnits.Desktop};` : ''}
        }
        
        @media all and (max-width: 1024px){
            .${blockID} .social-share-parent-container{
                ${iconAlignment.Tablet ? `justify-content: ${iconAlignment.Tablet};` : ''}
                ${tabletBackgroundNormalStyles}
                ${globalTabletPadding && socialShareGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && socialShareGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
                ${globalTabletBorderWidth && socialShareGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && socialShareGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }
            .${blockID} .social-share-parent-container:hover{
                ${tabletBackgroundHoverStyles}
            }
            .${blockID} .social-share-parent-container .block-editor-block-list__layout {
                ${iconSpacing.Tablet ? `gap: ${iconSpacing.Tablet}${iconSpacingUnits.Tablet};` : ''}
            }
            .${blockID} .social-share-parent-container .social-share-child-container .social-share-icon svg {
                ${iconFontSize.Tablet ? `width: ${iconFontSize.Tablet}${iconFontSizeUnits.Tablet};` : ''}
                ${iconFontSize.Tablet ? `height: ${iconFontSize.Tablet}${iconFontSizeUnits.Tablet};` : ''}
            }
            
        }
        @media all and (max-width: 767px){
            .${blockID} .social-share-parent-container{
                ${iconAlignment.Mobile ? `justify-content: ${iconAlignment.Mobile};` : ''}
                ${mobileBackgroundNormalStyles}
                ${globalMobilePadding && socialShareGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && socialShareGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
                ${socialShareGlobalBorder ? `border: ${socialShareGlobalBorder};` : ''}
                ${globalMobileBorderWidth && socialShareGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && socialShareGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }
            .${blockID} .social-share-parent-container:hover{
                ${mobileBackgroundHoverStyles}
            }
            .${blockID} .social-share-parent-container .block-editor-block-list__layout {
                ${iconSpacing.Mobile ? `gap: ${iconSpacing.Mobile}${iconSpacingUnits.Mobile};` : ''}
            }
            .${blockID} .social-share-parent-container .social-share-child-container .social-share-icon svg {
                ${iconFontSize.Mobile ? `width: ${iconFontSize.Mobile}${iconFontSizeUnits.Mobile};` : ''}
                ${iconFontSize.Mobile ? `height: ${iconFontSize.Mobile}${iconFontSizeUnits.Mobile};` : ''}
            }
            
        }
        `,
        [
            attributes,

        ],
    );
    useEffect(() => {
        setAttributes({
            blockStyle: `${fbSocialShareStyle}`.replace(/\s+/g, ' ').trim(),
        });
    }, [fbSocialShareStyle]);

    const generalControls = (
        <>
            <PanelBody title={__("Layout Settings", "frontis-blocks")} initialOpen={true}>
                <SelectControl
                    label={__("Layout Type")}
                    value={layoutType}
                    options={[
                        { label: 'Vertical', value: 'vertical' },
                        { label: 'Horizontal', value: 'horizontal' },
                    ]}
                    onChange={(value) => setAttributes({ layoutType: value })}
                />
                <FB_ResponsiveAlignmentControl
                    label={__("Alignment", "frontis-blocks")}
                    globalAlignment={iconAlignment}
                    setGlobalAlignment={(value) => setAttributes({ iconAlignment: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
            </PanelBody>

        </>
    );
    const styleControls = (
        <>
            <PanelBody title={__("Icon", "frontis-blocks")} initialOpen={true}>
                <FB_Range
                    min={1}
                    max={100}
                    label={__("Icon Size", "frontis-blocks")}
                    rangeValue={iconFontSize}
                    onChangeHandler={(value) => setAttributes({ iconFontSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ iconFontSizeUnits: value })}
                    deviceType={deviceType}
                    units={iconFontSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                <FB_Range
                    min={1}
                    max={100}
                    label={__("Icon Spacing", "frontis-blocks")}
                    rangeValue={iconSpacing}
                    onChangeHandler={(value) => setAttributes({ iconSpacing: value })}
                    rangeUnitHandler={(value) => setAttributes({ iconSpacingUnits: value })}
                    deviceType={deviceType}
                    units={iconSpacingUnits}
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
                            rangeValue={socialShareGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ socialShareGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={socialShareOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ socialShareOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={socialSharePositionType}
                            setPositionType={(value) => setAttributes({ socialSharePositionType: value })}

                            HZOrientationType={socialShareHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ socialShareHZOrientationType: value })
                            }
                            VROrientationType={socialShareVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ socialShareVROrientationType: value })
                            }

                            HZLeftOffset={socialShareHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ socialShareHZLeftOffset: value })}
                            HZLeftOffsetUnits={socialShareHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ socialShareHZLeftOffsetUnits: value })}
                            HZRightOffset={socialShareHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ socialShareHZRightOffset: value })}
                            HZRightOffsetUnits={socialShareHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ socialShareHZRightOffsetUnits: value })}

                            VRTopOffset={socialShareVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ socialShareVRTopOffset: value })}
                            VRTopOffsetUnits={socialShareVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ socialShareVRTopOffsetUnits: value })}
                            VRBottomOffset={socialShareVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ socialShareVRBottomOffset: value })}
                            VRBottomOffsetUnits={socialShareVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ socialShareVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={socialShareGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ socialShareGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={socialShareGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ socialShareGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />

                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={socialShareGlobalPaddingUnits}
                            spacingDesktop={socialShareGlobalPaddingDesktop}
                            spacingTablet={socialShareGlobalPaddingTablet}
                            spacingMobile={socialShareGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={socialShareGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={socialShareGlobalMarginUnits}
                            spacingDesktop={socialShareGlobalMarginDesktop}
                            spacingTablet={socialShareGlobalMarginTablet}
                            spacingMobile={socialShareGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={socialShareGlobalMarginLink}
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
                            globalSwitcher={socialShareGlobalBgColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ socialShareGlobalBgColorSwitcher: value })}
                        />

                        {socialShareGlobalBgColorSwitcher === 'normal' && (
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
                                                            onClick={() => setAttributes({ socialShareGlobalBgNormalBackgroundType: item.value })}
                                                            className={`fb-setting-background-color-panel-btn-switcher ${socialShareGlobalBgNormalBackgroundType === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {socialShareGlobalBgNormalBackgroundType === 'classic' && (

                                                <>
                                                    <FB_ColorControl
                                                        label={__("Color", "frontis-blocks")}
                                                        globalColor={socialShareGlobalBgNormalClassicColor}
                                                        setGlobalColor={(value) => setAttributes({ socialShareGlobalBgNormalClassicColor: value === undefined ? '' : value })}
                                                    />

                                                    <FB_ResponsiveBackgroundImageControl
                                                        deviceType={deviceType}
                                                        globalBackgroundImageUrl={socialShareGlobalBgNormalBackgroundImageUrl}
                                                        setGlobalBackgroundImageUrl={(value) => setAttributes({ socialShareGlobalBgNormalBackgroundImageUrl: value })}
                                                        globalBackgroundImagePosition={socialShareGlobalBgNormalBackgroundImagePosition}
                                                        setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ socialShareGlobalBgNormalBackgroundImagePosition: newPosition })}
                                                        globalBackgroundImageAttachment={socialShareGlobalBgNormalBackgroundImageAttachment}
                                                        setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ socialShareGlobalBgNormalBackgroundImageAttachment: newAttachment })}
                                                        globalBackgroundImageRepeat={socialShareGlobalBgNormalBackgroundImageRepeat}
                                                        setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ socialShareGlobalBgNormalBackgroundImageRepeat: newRepeat })}
                                                        globalBackgroundImageSize={socialShareGlobalBgNormalBackgroundImageSize}
                                                        setGlobalBackgroundImageSize={(newSize) => setAttributes({ socialShareGlobalBgNormalBackgroundImageSize: newSize })}
                                                        setAttributes={setAttributes}
                                                    />

                                                </>
                                            )}

                                            {socialShareGlobalBgNormalBackgroundType === 'gradient' && (
                                                <FB_GradientColorControl
                                                    globalCustomGradientSwitcher={socialShareGlobalBgNormalCustomGradientSwitcher}
                                                    setGlobalCustomGradientSwitcher={(value) => setAttributes({ socialShareGlobalBgNormalCustomGradientSwitcher: value })}
                                                    globalCustomGradientInputValue={socialShareGlobalBgNormalCustomGradientInputValue}
                                                    setGlobalCustomGradientInputValue={(value) => setAttributes({ socialShareGlobalBgNormalCustomGradientInputValue: value })}
                                                    globalGradientColor={socialShareGlobalBgNormalGradientColor}
                                                    setGlobalGradientColor={(value) => setAttributes({ socialShareGlobalBgNormalGradientColor: value === undefined ? null : value })}
                                                />
                                            )}
                                        </div>
                                    )}
                                />
                            </BaseControl>

                        )}

                        {socialShareGlobalBgColorSwitcher === 'hover' && (
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
                                                            onClick={() => setAttributes({ socialShareGlobalBgHoverBackgroundType: item.value })}
                                                            className={`fb-setting-background-color-panel-btn-switcher ${socialShareGlobalBgHoverBackgroundType === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {socialShareGlobalBgHoverBackgroundType === 'classic' && (

                                                <>
                                                    <FB_ColorControl
                                                        label={__("Color", "frontis-blocks")}
                                                        globalColor={socialShareGlobalBgHoverClassicColor}
                                                        setGlobalColor={(value) => setAttributes({ socialShareGlobalBgHoverClassicColor: value === undefined ? '' : value })}
                                                    />

                                                    <FB_ResponsiveBackgroundImageControl
                                                        deviceType={deviceType}
                                                        globalBackgroundImageUrl={socialShareGlobalBgHoverBackgroundImageUrl}
                                                        setGlobalBackgroundImageUrl={(value) => setAttributes({ socialShareGlobalBgHoverBackgroundImageUrl: value })}
                                                        globalBackgroundImagePosition={socialShareGlobalBgHoverBackgroundImagePosition}
                                                        setGlobalBackgroundImagePosition={(newPosition) => setAttributes({ socialShareGlobalBgHoverBackgroundImagePosition: newPosition })}
                                                        globalBackgroundImageAttachment={socialShareGlobalBgHoverBackgroundImageAttachment}
                                                        setGlobalBackgroundImageAttachment={(newAttachment) => setAttributes({ socialShareGlobalBgHoverBackgroundImageAttachment: newAttachment })}
                                                        globalBackgroundImageRepeat={socialShareGlobalBgHoverBackgroundImageRepeat}
                                                        setGlobalBackgroundImageRepeat={(newRepeat) => setAttributes({ socialShareGlobalBgHoverBackgroundImageRepeat: newRepeat })}
                                                        globalBackgroundImageSize={socialShareGlobalBgHoverBackgroundImageSize}
                                                        setGlobalBackgroundImageSize={(newSize) => setAttributes({ socialShareGlobalBgHoverBackgroundImageSize: newSize })}
                                                        setAttributes={setAttributes}
                                                    />

                                                </>
                                            )}

                                            {socialShareGlobalBgHoverBackgroundType === 'gradient' && (
                                                <FB_GradientColorControl
                                                    globalCustomGradientSwitcher={socialShareGlobalBgHoverCustomGradientSwitcher}
                                                    setGlobalCustomGradientSwitcher={(value) => setAttributes({ socialShareGlobalBgHoverCustomGradientSwitcher: value })}
                                                    globalCustomGradientInputValue={socialShareGlobalBgHoverCustomGradientInputValue}
                                                    setGlobalCustomGradientInputValue={(value) => setAttributes({ socialShareGlobalBgHoverCustomGradientInputValue: value })}
                                                    globalGradientColor={socialShareGlobalBgHoverGradientColor}
                                                    setGlobalGradientColor={(value) => setAttributes({ socialShareGlobalBgHoverGradientColor: value === undefined ? null : value })}
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
                            value={socialShareGlobalBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ socialShareGlobalBorder: value })}
                        />


                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={socialShareGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ socialShareGlobalBorderColorSwitcher: value })}
                        />

                        {socialShareGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={socialShareGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ socialShareGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {socialShareGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={socialShareGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ socialShareGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={socialShareGlobalBorderUnits}
                            spacingDesktop={socialShareGlobalBorderDesktop}
                            spacingTablet={socialShareGlobalBorderTablet}
                            spacingMobile={socialShareGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={socialShareGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={socialShareGlobalBorderRadiusUnits}
                            spacingDesktop={socialShareGlobalBorderRadiusDesktop}
                            spacingTablet={socialShareGlobalBorderRadiusTablet}
                            spacingMobile={socialShareGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={socialShareGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={socialShareGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ socialShareGlobalBoxShadowSwitcher: value })}
                        />

                        {socialShareGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ socialShareGlobalBoxShadowValues: value })}
                                initialShadowValue={socialShareGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ socialShareGlobalBoxShadowCssValue: value })}
                            />
                        )}

                        {socialShareGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ socialShareGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={socialShareGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ socialShareGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={socialShareDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ socialShareDesktopSwitcher: value })}

                            tabletValue={socialShareTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ socialShareTabletSwitcher: value })}

                            mobileValue={socialShareMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ socialShareMobileSwitcher: value })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={socialShareCustomCSS}
                            onChangeValue={(value) => setAttributes({ socialShareCustomCSS: value })}
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