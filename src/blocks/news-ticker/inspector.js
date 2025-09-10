import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect, useMemo } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_Range from '@Components/range';
import FB_ColorControl from '@Components/color-control';
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_UrlControl from '@Components/url-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_ResponsiveControl from '@Components/responsive-control';
import FBIconPicker from "../../components/icon-picker";


import {
    SelectControl,
    PanelBody,
    BaseControl,
    Button,
    ButtonGroup,
    TextControl
} from '@wordpress/components';

import {
    ICON_VERTICAL_ALIGN,
    TEXT_ALIGN,
    BORDER_STYLES,
    OVERFLOW_OP,
    LIST_DIRECTION_ICON,
    LIST_WRAP_ICON,
    CONTENT_TYPE
} from "./constants/constants";

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        // deviceType,
        blockStyle,
        FeatureAlignment,
        FeatureIconAlignment,
        FeatureTitleFontFamily,
        FeatureDescFontFamily,

        /** Global Style */
        FeatureGlobalZIndex,
        featuresListOverflow,
        FeatureGlobalPaddingUnits,
        FeatureGlobalPaddingDesktop,
        FeatureGlobalPaddingTablet,
        FeatureGlobalPaddingMobile,
        FeatureGlobalPaddingLink,

        FeatureGlobalMarginUnits,
        FeatureGlobalMarginDesktop,
        FeatureGlobalMarginTablet,
        FeatureGlobalMarginMobile,
        FeatureGlobalMarginLink,

        /** Start Global Background Color */
        FeatureGlobalBgColorSwitcher,

        FeatureGlobalNormalBackgroundType,
        FeatureGlobalNormalClassicColor,
        FeatureGlobalNormalGradientColor,
        FeatureGlobalNormalCustomGradientSwitcher,
        FeatureGlobalNormalCustomGradientInputValue,

        FeatureGlobalNormalBackgroundImageUrl,
        FeatureGlobalNormalBackgroundImageAlt,
        FeatureGlobalNormalBackgroundImageID,
        FeatureGlobalNormalBackgroundImagePosition,
        FeatureGlobalNormalBackgroundImageAttachment,
        FeatureGlobalNormalBackgroundImageRepeat,
        FeatureGlobalNormalBackgroundImageSize,

        FeatureGlobalHoverBackgroundType,
        FeatureGlobalHoverClassicColor,
        FeatureGlobalHoverGradientColor,
        FeatureGlobalHoverCustomGradientSwitcher,
        FeatureGlobalHoverCustomGradientInputValue,

        FeatureGlobalHoverBackgroundImageUrl,
        FeatureGlobalHoverBackgroundImageAlt,
        FeatureGlobalHoverBackgroundImageID,
        FeatureGlobalHoverBackgroundImagePosition,
        FeatureGlobalHoverBackgroundImageAttachment,
        FeatureGlobalHoverBackgroundImageRepeat,
        FeatureGlobalHoverBackgroundImageSize,
        /** End Global Background Color */

        FeatureGlobalBorder,
        FeatureGlobalBorderColorSwitcher,
        FeatureGlobalBorderColor,
        FeatureGlobalBorderHoverColor,

        FeatureGlobalBorderUnits,
        FeatureGlobalBorderDesktop,
        FeatureGlobalBorderTablet,
        FeatureGlobalBorderMobile,
        FeatureGlobalBorderLink,

        FeatureGlobalBorderRadiusUnits,
        FeatureGlobalBorderRadiusDesktop,
        FeatureGlobalBorderRadiusTablet,
        FeatureGlobalBorderRadiusMobile,
        FeatureGlobalBorderRadiusLink,

        FeatureGlobalBoxShadowSwitcher,
        FeatureGlobalBoxShadowValues,
        FeatureGlobalBoxShadowCssValue,
        FeatureGlobalBoxShadowHoverValues,
        FeatureGlobalBoxShadowHoverCssValue,
        /** End Global Style */

        featuresListDesktopSwitcher,
        featuresListTabletSwitcher,
        featuresListMobileSwitcher,

        featuresListGlobalWraperCustomCSS,
        featuresListGlobalWraperID,
        featuresListGlobalWraperClass,

        // Position
        featuresListPositionType,
        featuresListHZOrientationType,
        featuresListVROrientationType,
        featuresListHZLeftOffset,
        featuresListHZLeftOffsetUnits,
        featuresListHZRightOffset,
        featuresListHZRightOffsetUnits,
        featuresListVRTopOffset,
        featuresListVRTopOffsetUnits,
        featuresListVRBottomOffset,
        featuresListVRBottomOffsetUnits,
        contentType,
        tickerLabel,
        tickerLabelIcon,
        iconSize,
        iconSizeUnits
    } = attributes;

    const deviceType = useDeviceType();

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-news-ticker-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const iconHandler = (iconName) => {
        setAttributes({ tickerLabelIcon: iconName });
    };

    /** Start Global padding */
    const handleGlobalPaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (FeatureGlobalPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        FeatureGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        FeatureGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        FeatureGlobalPaddingMobile: {
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
                    setAttributes({ FeatureGlobalPaddingDesktop: { ...FeatureGlobalPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ FeatureGlobalPaddingTablet: { ...FeatureGlobalPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ FeatureGlobalPaddingMobile: { ...FeatureGlobalPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes({ FeatureGlobalPaddingLink: !FeatureGlobalPaddingLink });
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes({
            FeatureGlobalPaddingUnits: {
                ...FeatureGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }
    const globalDesktopPadding = `${FeatureGlobalPaddingDesktop.top}${FeatureGlobalPaddingUnits.Desktop} ${FeatureGlobalPaddingDesktop.right}${FeatureGlobalPaddingUnits.Desktop} ${FeatureGlobalPaddingDesktop.bottom}${FeatureGlobalPaddingUnits.Desktop} ${FeatureGlobalPaddingDesktop.left}${FeatureGlobalPaddingUnits.Desktop}`;
    const globalTabletPadding = `${FeatureGlobalPaddingTablet.top}${FeatureGlobalPaddingUnits.Tablet} ${FeatureGlobalPaddingTablet.right}${FeatureGlobalPaddingUnits.Tablet} ${FeatureGlobalPaddingTablet.bottom}${FeatureGlobalPaddingUnits.Tablet} ${FeatureGlobalPaddingTablet.left}${FeatureGlobalPaddingUnits.Tablet}`;
    const globalMobilePadding = `${FeatureGlobalPaddingMobile.top}${FeatureGlobalPaddingUnits.Mobile} ${FeatureGlobalPaddingMobile.right}${FeatureGlobalPaddingUnits.Mobile} ${FeatureGlobalPaddingMobile.bottom}${FeatureGlobalPaddingUnits.Mobile} ${FeatureGlobalPaddingMobile.left}${FeatureGlobalPaddingUnits.Mobile}`;
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (FeatureGlobalMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        FeatureGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        FeatureGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        FeatureGlobalMarginMobile: {
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
                    setAttributes({ FeatureGlobalMarginDesktop: { ...FeatureGlobalMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ FeatureGlobalMarginTablet: { ...FeatureGlobalMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ FeatureGlobalMarginMobile: { ...FeatureGlobalMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes({ FeatureGlobalMarginLink: !FeatureGlobalMarginLink });
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes({
            FeatureGlobalMarginUnits: {
                ...FeatureGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const globalDesktopMargin = `${FeatureGlobalMarginDesktop.top}${FeatureGlobalMarginUnits.Desktop} ${FeatureGlobalMarginDesktop.right}${FeatureGlobalMarginUnits.Desktop} ${FeatureGlobalMarginDesktop.bottom}${FeatureGlobalMarginUnits.Desktop} ${FeatureGlobalMarginDesktop.left}${FeatureGlobalMarginUnits.Desktop}`;
    const globalTabletMargin = `${FeatureGlobalMarginTablet.top}${FeatureGlobalMarginUnits.Tablet} ${FeatureGlobalMarginTablet.right}${FeatureGlobalMarginUnits.Tablet} ${FeatureGlobalMarginTablet.bottom}${FeatureGlobalMarginUnits.Tablet} ${FeatureGlobalMarginTablet.left}${FeatureGlobalMarginUnits.Tablet}`;
    const globalMobileMargin = `${FeatureGlobalMarginMobile.top}${FeatureGlobalMarginUnits.Mobile} ${FeatureGlobalMarginMobile.right}${FeatureGlobalMarginUnits.Mobile} ${FeatureGlobalMarginMobile.bottom}${FeatureGlobalMarginUnits.Mobile} ${FeatureGlobalMarginMobile.left}${FeatureGlobalMarginUnits.Mobile}`;
    /** End Global Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (FeatureGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        FeatureGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        FeatureGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        FeatureGlobalBorderMobile: {
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
                    setAttributes({ FeatureGlobalBorderDesktop: { ...FeatureGlobalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ FeatureGlobalBorderTablet: { ...FeatureGlobalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ FeatureGlobalBorderMobile: { ...FeatureGlobalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ FeatureGlobalBorderLink: !FeatureGlobalBorderLink });
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            FeatureGlobalBorderUnits: {
                ...FeatureGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    const globalDesktopBorderWidth = `${FeatureGlobalBorderDesktop.top}${FeatureGlobalBorderUnits.Desktop} ${FeatureGlobalBorderDesktop.right}${FeatureGlobalBorderUnits.Desktop} ${FeatureGlobalBorderDesktop.bottom}${FeatureGlobalBorderUnits.Desktop} ${FeatureGlobalBorderDesktop.left}${FeatureGlobalBorderUnits.Desktop}`;
    const globalTabletBorderWidth = `${FeatureGlobalBorderTablet.top}${FeatureGlobalBorderUnits.Tablet} ${FeatureGlobalBorderTablet.right}${FeatureGlobalBorderUnits.Tablet} ${FeatureGlobalBorderTablet.bottom}${FeatureGlobalBorderUnits.Tablet} ${FeatureGlobalBorderTablet.left}${FeatureGlobalBorderUnits.Tablet}`;
    const globalMobileBorderWidth = `${FeatureGlobalBorderMobile.top}${FeatureGlobalBorderUnits.Mobile} ${FeatureGlobalBorderMobile.right}${FeatureGlobalBorderUnits.Mobile} ${FeatureGlobalBorderMobile.bottom}${FeatureGlobalBorderUnits.Mobile} ${FeatureGlobalBorderMobile.left}${FeatureGlobalBorderUnits.Mobile}`;
    /** End Border */


    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (FeatureGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        FeatureGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        FeatureGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        FeatureGlobalBorderRadiusMobile: {
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
                    setAttributes({ FeatureGlobalBorderRadiusDesktop: { ...FeatureGlobalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ FeatureGlobalBorderRadiusTablet: { ...FeatureGlobalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ FeatureGlobalBorderRadiusMobile: { ...FeatureGlobalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ FeatureGlobalBorderRadiusLink: !FeatureGlobalBorderRadiusLink });
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            FeatureGlobalBorderRadiusUnits: {
                ...FeatureGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */

    /** End Global Border Radius */
    const globalDesktopBorderRadiusWidth = `${FeatureGlobalBorderRadiusDesktop.top}${FeatureGlobalBorderRadiusUnits.Desktop} ${FeatureGlobalBorderRadiusDesktop.right}${FeatureGlobalBorderRadiusUnits.Desktop} ${FeatureGlobalBorderRadiusDesktop.bottom}${FeatureGlobalBorderRadiusUnits.Desktop} ${FeatureGlobalBorderRadiusDesktop.left}${FeatureGlobalBorderRadiusUnits.Desktop}`;
    const globalTabletBorderRadiusWidth = `${FeatureGlobalBorderRadiusTablet.top}${FeatureGlobalBorderRadiusUnits.Tablet} ${FeatureGlobalBorderRadiusTablet.right}${FeatureGlobalBorderRadiusUnits.Tablet} ${FeatureGlobalBorderRadiusTablet.bottom}${FeatureGlobalBorderRadiusUnits.Tablet} ${FeatureGlobalBorderRadiusTablet.left}${FeatureGlobalBorderRadiusUnits.Tablet}`;
    const globalMobileBorderRadiusWidth = `${FeatureGlobalBorderRadiusMobile.top}${FeatureGlobalBorderRadiusUnits.Mobile} ${FeatureGlobalBorderRadiusMobile.right}${FeatureGlobalBorderRadiusUnits.Mobile} ${FeatureGlobalBorderRadiusMobile.bottom}${FeatureGlobalBorderRadiusUnits.Mobile} ${FeatureGlobalBorderRadiusMobile.left}${FeatureGlobalBorderRadiusUnits.Mobile}`;
    /** End Border Radius */

    /* Start Load Google Fonts */
    useEffect(() => {
        loadGoogleFont(FeatureTitleFontFamily);
        loadGoogleFont(FeatureDescFontFamily);
    }, [FeatureTitleFontFamily, FeatureDescFontFamily]);

    /* End Load Google Fonts */


    const allBlockStyle = useMemo(() => {
        let style = `
            .fb-news-ticker-wrapper.${blockID} {
                ${FeatureGlobalNormalBackgroundType === 'gradient' ? `
                    background: ${FeatureGlobalNormalCustomGradientSwitcher && FeatureGlobalNormalCustomGradientInputValue ? FeatureGlobalNormalCustomGradientInputValue : FeatureGlobalNormalGradientColor};
                ` : FeatureGlobalNormalBackgroundImageUrl && FeatureGlobalNormalBackgroundImageUrl !== 'null' ? `
                    ${FeatureGlobalNormalBackgroundImageUrl ? `background-image: url(${FeatureGlobalNormalBackgroundImageUrl});` : ''}
                    ${FeatureGlobalNormalBackgroundImagePosition ? `background-position: ${FeatureGlobalNormalBackgroundImagePosition};` : ''}
                    ${FeatureGlobalNormalBackgroundImageAttachment ? `background-attachment: ${FeatureGlobalNormalBackgroundImageAttachment};` : ''}
                    ${FeatureGlobalNormalBackgroundImageRepeat ? `background-repeat: ${FeatureGlobalNormalBackgroundImageRepeat};` : ''}
                    ${FeatureGlobalNormalBackgroundImageSize ? `background-size: ${FeatureGlobalNormalBackgroundImageSize};` : ''}
                ` : `
                    ${FeatureGlobalNormalClassicColor ? `background: ${FeatureGlobalNormalClassicColor};` : ''}
                `}
                ${globalDesktopPadding && FeatureGlobalPaddingDesktop.top ? `padding: ${globalDesktopPadding};` : ''}
                ${globalDesktopMargin && FeatureGlobalMarginDesktop.top ? `margin: ${globalDesktopMargin};` : ''} 
                ${FeatureGlobalBorder ? `border: ${FeatureGlobalBorder};` : ''} 
                ${globalDesktopBorderWidth && FeatureGlobalBorderDesktop.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
                ${globalDesktopBorderRadiusWidth && FeatureGlobalBorderRadiusDesktop.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
                ${FeatureGlobalBorderColor ? `border-color: ${FeatureGlobalBorderColor};` : ''}
                ${FeatureGlobalBoxShadowCssValue ? `box-shadow: ${FeatureGlobalBoxShadowCssValue};` : ''}
                ${featuresListPositionType === 'default' ? `position: relative;` : ''}
                ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' ? `width: 100%;` : ''}
                ${featuresListPositionType !== 'default' ? `position: ${featuresListPositionType};` : ''}
                ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListHZOrientationType === 'left' && featuresListHZLeftOffset.Desktop !== undefined ? `left: ${featuresListHZLeftOffset.Desktop}${featuresListHZLeftOffsetUnits.Desktop};` : ''}
                ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListHZOrientationType === 'right' && featuresListHZRightOffset.Desktop !== undefined ? `right: ${featuresListHZRightOffset.Desktop}${featuresListHZRightOffsetUnits.Desktop};` : ''}
                ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListVROrientationType === 'top' && featuresListVRTopOffset.Desktop !== undefined ? `top: ${featuresListVRTopOffset.Desktop}${featuresListVRTopOffsetUnits.Desktop};` : ''}
                ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListVROrientationType === 'bottom' && featuresListVRBottomOffset.Desktop !== undefined ? `bottom: ${featuresListVRBottomOffset.Desktop}${featuresListVRBottomOffsetUnits.Desktop};` : ''}
                ${FeatureGlobalZIndex.Desktop ? `z-index: ${FeatureGlobalZIndex.Desktop};` : ''}
                ${featuresListOverflow !== 'default' ? `overflow: ${featuresListOverflow};` : ''}
                transition: all .3s ease-in-out;
            }

            .fb-feature-main-wrapper.${blockID}:hover {
                ${FeatureGlobalHoverBackgroundType === 'gradient' ? `
                    background: ${FeatureGlobalHoverCustomGradientSwitcher && FeatureGlobalHoverCustomGradientInputValue ? FeatureGlobalHoverCustomGradientInputValue : FeatureGlobalHoverGradientColor};
                ` : FeatureGlobalHoverBackgroundImageUrl && FeatureGlobalHoverBackgroundImageUrl !== 'null' ? `
                    ${FeatureGlobalHoverBackgroundImageUrl ? `background-image: url(${FeatureGlobalHoverBackgroundImageUrl});` : ''}
                    ${FeatureGlobalHoverBackgroundImagePosition ? `background-position: ${FeatureGlobalHoverBackgroundImagePosition};` : ''}
                    ${FeatureGlobalHoverBackgroundImageAttachment ? `background-attachment: ${FeatureGlobalHoverBackgroundImageAttachment};` : ''}
                    ${FeatureGlobalHoverBackgroundImageRepeat ? `background-repeat: ${FeatureGlobalHoverBackgroundImageRepeat};` : ''}
                    ${FeatureGlobalHoverBackgroundImageSize ? `background-size: ${FeatureGlobalHoverBackgroundImageSize};` : ''}
                ` : `
                    ${FeatureGlobalHoverClassicColor ? `background: ${FeatureGlobalHoverClassicColor};` : ''}
                `}
                ${FeatureGlobalBorderHoverColor ? `border-color: ${FeatureGlobalBorderHoverColor};` : ''}
                ${FeatureGlobalBoxShadowHoverCssValue ? `box-shadow: ${FeatureGlobalBoxShadowHoverCssValue};` : ''}
            }
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container{
                
            }
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper svg{
                ${iconSize.Desktop ? `width: ${iconSize.Desktop}${iconSizeUnits.Desktop};` : ''}
			    ${iconSize.Desktop ? `height: ${iconSize.Desktop}${iconSizeUnits.Desktop};` : ''}
            }
            @media only screen and (max-width: 1024px) {
                .fb-feature-main-wrapper.${blockID} {
                    ${featuresListPositionType !== 'default' ? `position: ${featuresListPositionType};` : ''}
                    ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListHZOrientationType === 'left' && featuresListHZLeftOffset.Tablet !== undefined ? `left: ${featuresListHZLeftOffset.Tablet}${featuresListHZLeftOffsetUnits.Tablet};` : ''}
                    ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListHZOrientationType === 'right' && featuresListHZRightOffset.Tablet !== undefined ? `right: ${featuresListHZRightOffset.Tablet}${featuresListHZRightOffsetUnits.Tablet};` : ''}
                    ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListVROrientationType === 'top' && featuresListVRTopOffset.Tablet !== undefined ? `top: ${featuresListVRTopOffset.Tablet}${featuresListVRTopOffsetUnits.Tablet};` : ''}
                    ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListVROrientationType === 'bottom' && featuresListVRBottomOffset.Tablet !== undefined ? `bottom: ${featuresListVRBottomOffset.Tablet}${featuresListVRBottomOffsetUnits.Tablet};` : ''}
                    ${FeatureGlobalZIndex.Tablet ? `z-index: ${FeatureGlobalZIndex.Tablet};` : ''}
                    ${globalTabletPadding && FeatureGlobalPaddingTablet.top ? `padding: ${globalTabletPadding};` : ''}
                    ${globalTabletMargin && FeatureGlobalMarginTablet.top ? `margin: ${globalTabletMargin};` : ''} 
                    ${globalTabletBorderWidth && FeatureGlobalBorderTablet.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                    ${globalTabletBorderRadiusWidth && FeatureGlobalBorderRadiusTablet.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
                }
            }

            @media only screen and (max-width: 767px) {
                .fb-feature-main-wrapper.${blockID} {
                    ${featuresListPositionType !== 'default' ? `position: ${featuresListPositionType};` : ''}
                    ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListHZOrientationType === 'left' && featuresListHZLeftOffset.Mobile !== undefined ? `left: ${featuresListHZLeftOffset.Mobile}${featuresListHZLeftOffsetUnits.Mobile};` : ''}
                    ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListHZOrientationType === 'right' && featuresListHZRightOffset.Mobile !== undefined ? `right: ${featuresListHZRightOffset.Mobile}${featuresListHZRightOffsetUnits.Mobile};` : ''}
                    ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListVROrientationType === 'top' && featuresListVRTopOffset.Mobile !== undefined ? `top: ${featuresListVRTopOffset.Mobile}${featuresListVRTopOffsetUnits.Mobile};` : ''}
                    ${featuresListPositionType !== 'default' && featuresListPositionType !== 'relative' && featuresListVROrientationType === 'bottom' && featuresListVRBottomOffset.Mobile !== undefined ? `bottom: ${featuresListVRBottomOffset.Mobile}${featuresListVRBottomOffsetUnits.Mobile};` : ''}
                    ${FeatureGlobalZIndex.Mobile ? `z-index: ${FeatureGlobalZIndex.Mobile};` : ''}
                    ${globalMobilePadding && FeatureGlobalPaddingMobile.top ? `padding: ${globalMobilePadding};` : ''}
                    ${globalMobileMargin && FeatureGlobalMarginMobile.top ? `margin: ${globalMobileMargin};` : ''} 
                    ${globalMobileBorderWidth && FeatureGlobalBorderMobile.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                    ${globalMobileBorderRadiusWidth && FeatureGlobalBorderRadiusMobile.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
                }
            }
        `;
        return style;
    }, [
        attributes
    ]);

    const customCss = getCustomCss(featuresListGlobalWraperCustomCSS, `.${blockID}`);

    useEffect(() => {
        setAttributes({ blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim() });
    }, [allBlockStyle, customCss]);

    const editorStyle = `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody
                title={__("Feature", "frontis-blocks")}
                initialOpen={true}
            >
                <SelectControl
                    label={__("Content Type", "frontis-block")}
                    value={contentType}
                    options={CONTENT_TYPE}
                    onChange={(value) =>
                        setAttributes({ contentType: value })
                    }
                />

                <TextControl
                    label={__("Label", "frontis-block")}
                    value={tickerLabel}
                    onChange={(value) =>
                        setAttributes({ tickerLabel: value })
                    }
                    className="fb-setting-text"
                />

                <FBIconPicker
                    value={tickerLabelIcon}
                    setIconHandler={iconHandler}
                />

                <BaseControl
                    label={__("Icon Position", "frontis-blocks")}
                    id="fb-setting-text-alignment"
                    className="fb-setting-text-alignment"
                >
                    <ButtonGroup
                        className="fb-setting-text-alignment-group-btn"
                    >
                        {TEXT_ALIGN.map((item, key) => (
                            <Button
                                key={key}
                                onClick={() => setAttributes({ FeatureIconAlignment: item.value })}
                                className={`fb-setting-text-alignment-single-btn ${FeatureIconAlignment === item.value ? 'active' : ''}`}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </ButtonGroup>
                </BaseControl>
                {FeatureIconAlignment !== 'center' && (
                    <BaseControl
                        label={__("Icon Alignment", "frontis-blocks")}
                        id="fb-setting-text-alignment"
                        className="fb-setting-text-alignment"
                    >
                        <ButtonGroup
                            className="fb-setting-text-alignment-group-btn"
                        >
                            {ICON_VERTICAL_ALIGN.map((item, key) => (
                                <Button
                                    key={key}
                                    onClick={() => setAttributes({ FeatureAlignment: item.value })}
                                    className={`fb-setting-text-alignment-single-btn ${FeatureAlignment === item.value ? 'active' : ''}`}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </ButtonGroup>
                    </BaseControl>
                )}
            </PanelBody>

        </>
    );

    /**
     * Inspector Style Controls
     */
    const styleControls = (
        <>
            <PanelBody
                title={__("Label", "frontis-blocks")}
                initialOpen={true}
                className='fb-setting-layout-header'
            >
                <FB_Range
					min={0}
					max={iconSizeUnits === '%' ? 100 : 1000}
					label={__("Icon Size", "frontis-blocks")}
					rangeValue={iconSize}
					onChangeHandler={(value) =>
						setAttributes({ iconSize: value })
					}
					rangeUnitHandler={(value) =>
						setAttributes({ iconSizeUnits: value })
					}
					deviceType={deviceType}
					units={iconSizeUnits}
					setAttributes={setAttributes}
					rangeStep={1}
					resetFallbackValue={""}
				/>
            </PanelBody>
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
                            rangeValue={FeatureGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ FeatureGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={featuresListOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ featuresListOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={featuresListPositionType}
                            setPositionType={(value) => setAttributes({ featuresListPositionType: value })}

                            HZOrientationType={featuresListHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ featuresListHZOrientationType: value })
                            }
                            VROrientationType={featuresListVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ featuresListVROrientationType: value })
                            }

                            HZLeftOffset={featuresListHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ featuresListHZLeftOffset: value })}
                            HZLeftOffsetUnits={featuresListHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ featuresListHZLeftOffsetUnits: value })}
                            HZRightOffset={featuresListHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ featuresListHZRightOffset: value })}
                            HZRightOffsetUnits={featuresListHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ featuresListHZRightOffsetUnits: value })}

                            VRTopOffset={featuresListVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ featuresListVRTopOffset: value })}
                            VRTopOffsetUnits={featuresListVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ featuresListVRTopOffsetUnits: value })}
                            VRBottomOffset={featuresListVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ featuresListVRBottomOffset: value })}
                            VRBottomOffsetUnits={featuresListVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ featuresListVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={featuresListGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ featuresListGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={featuresListGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ featuresListGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />

                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                            spacingUnits={FeatureGlobalPaddingUnits}
                            spacingDesktop={FeatureGlobalPaddingDesktop}
                            spacingTablet={FeatureGlobalPaddingTablet}
                            spacingMobile={FeatureGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={FeatureGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={FeatureGlobalMarginUnits}
                            spacingDesktop={FeatureGlobalMarginDesktop}
                            spacingTablet={FeatureGlobalMarginTablet}
                            spacingMobile={FeatureGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={FeatureGlobalMarginLink}
                            spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Background Color", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_BackgroundColorControl
                            bgColorSwitcher={FeatureGlobalBgColorSwitcher}
                            setBgColorSwitcher={(value) => setAttributes({ FeatureGlobalBgColorSwitcher: value })}

                            normalBackgroundType={FeatureGlobalNormalBackgroundType}
                            setNormalBackgroundType={(value) => setAttributes({ FeatureGlobalNormalBackgroundType: value })}
                            normalClassicColor={FeatureGlobalNormalClassicColor}
                            setNormalClassicColor={(value) => setAttributes({ FeatureGlobalNormalClassicColor: value === undefined ? '' : value })}
                            normalGradientColor={FeatureGlobalNormalGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ FeatureGlobalNormalGradientColor: value === undefined ? null : value })}
                            normalCustomGradientSwitcher={FeatureGlobalNormalCustomGradientSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ FeatureGlobalNormalCustomGradientSwitcher: value })}
                            normalCustomGradientInputValue={FeatureGlobalNormalCustomGradientInputValue}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ FeatureGlobalNormalCustomGradientInputValue: value })}
                            normalBackgroundImageUrl={FeatureGlobalNormalBackgroundImageUrl}
                            setNormalBackgroundImageUrl={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageUrl: value })}
                            normalBackgroundImageAlt={FeatureGlobalNormalBackgroundImageAlt}
                            setNormalBackgroundImageAlt={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageAlt: value })}
                            normalBackgroundImageID={FeatureGlobalNormalBackgroundImageID}
                            setNormalBackgroundImageID={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageID: value })}
                            normalBackgroundImagePosition={FeatureGlobalNormalBackgroundImagePosition}
                            setNormalBackgroundImagePosition={(value) => setAttributes({ FeatureGlobalNormalBackgroundImagePosition: value })}
                            normalBackgroundImageAttachment={FeatureGlobalNormalBackgroundImageAttachment}
                            setNormalBackgroundImageAttachment={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageAttachment: value })}
                            normalBackgroundImageRepeat={FeatureGlobalNormalBackgroundImageRepeat}
                            setNormalBackgroundImageRepeat={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageRepeat: value })}
                            normalBackgroundImageSize={FeatureGlobalNormalBackgroundImageSize}
                            setNormalBackgroundImageSize={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageSize: value })}

                            hoverBackgroundType={FeatureGlobalHoverBackgroundType}
                            setHoverBackgroundType={(value) => setAttributes({ FeatureGlobalHoverBackgroundType: value })}
                            hoverClassicColor={FeatureGlobalHoverClassicColor}
                            setHoverClassicColor={(value) => setAttributes({ FeatureGlobalHoverClassicColor: value === undefined ? '' : value })}
                            hoverGradientColor={FeatureGlobalHoverGradientColor}
                            setHoverGradientColor={(value) => setAttributes({ FeatureGlobalHoverGradientColor: value === undefined ? null : value })}
                            hoverCustomGradientSwitcher={FeatureGlobalHoverCustomGradientSwitcher}
                            setHoverCustomGradientSwitcher={(value) => setAttributes({ FeatureGlobalHoverCustomGradientSwitcher: value })}
                            hoverCustomGradientInputValue={FeatureGlobalHoverCustomGradientInputValue}
                            setHoverCustomGradientInputValue={(value) => setAttributes({ FeatureGlobalHoverCustomGradientInputValue: value })}
                            hoverBackgroundImageUrl={FeatureGlobalHoverBackgroundImageUrl}
                            setHoverBackgroundImageUrl={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageUrl: value })}
                            hoverBackgroundImageAlt={FeatureGlobalHoverBackgroundImageAlt}
                            setHoverBackgroundImageAlt={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageAlt: value })}
                            hoverBackgroundImageID={FeatureGlobalHoverBackgroundImageID}
                            setHoverBackgroundImageID={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageID: value })}
                            hoverBackgroundImagePosition={FeatureGlobalHoverBackgroundImagePosition}
                            setHoverBackgroundImagePosition={(value) => setAttributes({ FeatureGlobalHoverBackgroundImagePosition: value })}
                            hoverBackgroundImageAttachment={FeatureGlobalHoverBackgroundImageAttachment}
                            setHoverBackgroundImageAttachment={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageAttachment: value })}
                            hoverBackgroundImageRepeat={FeatureGlobalHoverBackgroundImageRepeat}
                            setHoverBackgroundImageRepeat={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageRepeat: value })}
                            hoverBackgroundImageSize={FeatureGlobalHoverBackgroundImageSize}
                            setHoverBackgroundImageSize={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageSize: value })}
                        />
                    </PanelBody>
                    <PanelBody title={__("Border and Shadow", "frontis-blocks")} initialOpen={false}>

                        <SelectControl
                            label={__("Border Style", "frontis-blocks")}
                            value={FeatureGlobalBorder}
                            options={BORDER_STYLES}
                            onChange={(value) => setAttributes({ FeatureGlobalBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")}
                            globalSwitcher={FeatureGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ FeatureGlobalBorderColorSwitcher: value })}
                        />

                        {FeatureGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Color", "frontis-blocks")}
                                globalColor={FeatureGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ FeatureGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {FeatureGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={FeatureGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ FeatureGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={FeatureGlobalBorderUnits}
                            spacingDesktop={FeatureGlobalBorderDesktop}
                            spacingTablet={FeatureGlobalBorderTablet}
                            spacingMobile={FeatureGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={FeatureGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={FeatureGlobalBorderRadiusUnits}
                            spacingDesktop={FeatureGlobalBorderRadiusDesktop}
                            spacingTablet={FeatureGlobalBorderRadiusTablet}
                            spacingMobile={FeatureGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={FeatureGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={FeatureGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ FeatureGlobalBoxShadowSwitcher: value })}
                        />

                        {FeatureGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ FeatureGlobalBoxShadowValues: value })}
                                initialShadowValue={FeatureGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ FeatureGlobalBoxShadowCssValue: value })}
                            />
                        )}

                        {FeatureGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ FeatureGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={FeatureGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ FeatureGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}
                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={featuresListDesktopSwitcher}
                            setDesktopValue={(value) => setAttributes({ featuresListDesktopSwitcher: value })}

                            tabletValue={featuresListTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ featuresListTabletSwitcher: value })}

                            mobileValue={featuresListMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ featuresListMobileSwitcher: value })}
                        />
                    </PanelBody>
                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor
                            value={featuresListGlobalWraperCustomCSS}
                            onChangeValue={(value) => setAttributes({ featuresListGlobalWraperCustomCSS: value })}
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
