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

/**
 * Internal depencencies
 */
import { 
    BORDER_STYLES,
} from '@Constants/fbConstants';

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

import './editor.scss';

export default function Inspector ({ attributes, setAttributes,  clientId}) {
    const {
        blockId,
        blockStyle,
        googleMapLocation,
        googleMapZoomLevel,
        googleMapMapType,
        googleMapWidth,
        googleMapWidthUnits,
        googleMapHeight,
        googleMapHeightUnits,

        googleMapPaddingUnits,
        googleMapPaddingDesktop,
        googleMapPaddingTablet,
        googleMapPaddingMobile,
        googleMapPaddingLink,

        googleMapMarginUnits,
        googleMapMarginDesktop,
        googleMapMarginTablet,
        googleMapMarginMobile,
        googleMapMarginLink,

        googleMapBgColorSwitcher,
        googleMapNormalBackgroundType,
        googleMapNormalClassicColor,
        googleMapNormalGradientColor,
        googleMapNormalCustomGradientSwitcher,
        googleMapNormalCustomGradientInputValue,
        googleMapHoverBackgroundType,
        googleMapHoverClassicColor,
        googleMapHoverGradientColor,
        googleMapHoverCustomGradientSwitcher,
        googleMapHoverCustomGradientInputValue,

        googleMapBorder,
        googleMapBorderColorSwitcher,
        googleMapBorderColor,
        googleMapBorderHoverColor,

        googleMapBorderUnits,
        googleMapBorderDesktop,
        googleMapBorderTablet,
        googleMapBorderMobile,
        googleMapBorderLink,

        googleMapBorderRadiusUnits,
        googleMapBorderRadiusDesktop,
        googleMapBorderRadiusTablet,
        googleMapBorderRadiusMobile,
        googleMapBorderRadiusLink,

        googleMapBoxShadowSwitcher,
        googleMapBoxShadowValues,
        googleMapBoxShadowCssValue,
        googleMapBoxShadowHoverValues,
        googleMapBoxShadowHoverCssValue,
        googleMapGlobalZIndex,

        googleMapCustomCSS,
        googleMapWraperID,
        googleMapWraperClass,

    } = attributes;

    const deviceType= useDeviceType();



    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-google-map-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    /** Start Google Map Padding */
    const googleMapPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (googleMapPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        googleMapPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        googleMapPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        googleMapPaddingMobile: {
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
                    setAttributes({ googleMapPaddingDesktop: { ...googleMapPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ googleMapPaddingTablet: { ...googleMapPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ googleMapPaddingMobile: { ...googleMapPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const googleMapPaddingLinkBtn = () => {
        setAttributes({
            googleMapPaddingLink: !googleMapPaddingLink
        });
    };

    const googleMapPaddingUnitsHandler = (unit) => {
        setAttributes({
            googleMapPaddingUnits: {
                ...googleMapPaddingUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default padding for Google Map */
    const googleMapPaddingDesktopWidth = `${googleMapPaddingDesktop.top}${googleMapPaddingUnits.Desktop} ${googleMapPaddingDesktop.right}${googleMapPaddingUnits.Desktop} ${googleMapPaddingDesktop.bottom}${googleMapPaddingUnits.Desktop} ${googleMapPaddingDesktop.left}${googleMapPaddingUnits.Desktop}`; 
    const googleMapPaddingTabletWidth = `${googleMapPaddingTablet.top}${googleMapPaddingUnits.Tablet} ${googleMapPaddingTablet.right}${googleMapPaddingUnits.Tablet} ${googleMapPaddingTablet.bottom}${googleMapPaddingUnits.Tablet} ${googleMapPaddingTablet.left}${googleMapPaddingUnits.Tablet}`;
    const googleMapPaddingMobileWidth = `${googleMapPaddingMobile.top}${googleMapPaddingUnits.Mobile} ${googleMapPaddingMobile.right}${googleMapPaddingUnits.Mobile} ${googleMapPaddingMobile.bottom}${googleMapPaddingUnits.Mobile} ${googleMapPaddingMobile.left}${googleMapPaddingUnits.Mobile}`;
    /** End Google Map Padding */

    /** Start Google Map Margin */
    const googleMapMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (googleMapMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        googleMapMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        googleMapMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        googleMapMarginMobile: {
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
                    setAttributes({ googleMapMarginDesktop: { ...googleMapMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ googleMapMarginTablet: { ...googleMapMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ googleMapMarginMobile: { ...googleMapMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const googleMapMarginLinkBtn = () => {
        setAttributes({
            googleMapMarginLink: !googleMapMarginLink
        });
    };

    const googleMapMarginUnitsHandler = (unit) => {
        setAttributes({
            googleMapMarginUnits: {
                ...googleMapMarginUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default margin for Google Map */
    const googleMapMarginDesktopWidth = `${googleMapMarginDesktop.top}${googleMapMarginUnits.Desktop} ${googleMapMarginDesktop.right}${googleMapMarginUnits.Desktop} ${googleMapMarginDesktop.bottom}${googleMapMarginUnits.Desktop} ${googleMapMarginDesktop.left}${googleMapMarginUnits.Desktop}`;
    const googleMapMarginTabletWidth = `${googleMapMarginTablet.top}${googleMapMarginUnits.Tablet} ${googleMapMarginTablet.right}${googleMapMarginUnits.Tablet} ${googleMapMarginTablet.bottom}${googleMapMarginUnits.Tablet} ${googleMapMarginTablet.left}${googleMapMarginUnits.Tablet}`;
    const googleMapMarginMobileWidth = `${googleMapMarginMobile.top}${googleMapMarginUnits.Mobile} ${googleMapMarginMobile.right}${googleMapMarginUnits.Mobile} ${googleMapMarginMobile.bottom}${googleMapMarginUnits.Mobile} ${googleMapMarginMobile.left}${googleMapMarginUnits.Mobile}`;
    /** End Google Map Margin */

    /** Start Google Map Border Radius */
    const googleMapBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (googleMapBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({    
                        googleMapBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        googleMapBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        googleMapBorderMobile: {
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
                    setAttributes({ googleMapBorderDesktop: { ...googleMapBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ googleMapBorderTablet: { ...googleMapBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ googleMapBorderMobile: { ...googleMapBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const googleMapBorderLinkBtn = () => {
        setAttributes({
            googleMapBorderLink: !googleMapBorderLink
        });
    };

    const googleMapBorderUnitsHandler = (unit) => {
        setAttributes({
            googleMapBorderUnits: {
                ...googleMapBorderUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border radius for Google Map */ 
    const googleMapBorderDesktopWidth = `${googleMapBorderDesktop.top}${googleMapBorderUnits.Desktop} ${googleMapBorderDesktop.right}${googleMapBorderUnits.Desktop} ${googleMapBorderDesktop.bottom}${googleMapBorderUnits.Desktop} ${googleMapBorderDesktop.left}${googleMapBorderUnits.Desktop}`;
    const googleMapBorderTabletWidth = `${googleMapBorderTablet.top}${googleMapBorderUnits.Tablet} ${googleMapBorderTablet.right}${googleMapBorderUnits.Tablet} ${googleMapBorderTablet.bottom}${googleMapBorderUnits.Tablet} ${googleMapBorderTablet.left}${googleMapBorderUnits.Tablet}`;
    const googleMapBorderMobileWidth = `${googleMapBorderMobile.top}${googleMapBorderUnits.Mobile} ${googleMapBorderMobile.right}${googleMapBorderUnits.Mobile} ${googleMapBorderMobile.bottom}${googleMapBorderUnits.Mobile} ${googleMapBorderMobile.left}${googleMapBorderUnits.Mobile}`;
    /** End Google Map Border */

    /** Start Google Map Border Radius */
    const googleMapBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (googleMapBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        googleMapBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        googleMapBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        googleMapBorderRadiusMobile: {
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
                    setAttributes({ googleMapBorderRadiusDesktop: { ...googleMapBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ googleMapBorderRadiusTablet: { ...googleMapBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ googleMapBorderRadiusMobile: { ...googleMapBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const googleMapBorderRadiusLinkBtn = () => {
        setAttributes({
            googleMapBorderRadiusLink: !googleMapBorderRadiusLink
        });
    };

    const googleMapBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            googleMapBorderRadiusUnits: {
                ...googleMapBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };

    /** Default border radius for Google Map */
    const googleMapBorderRadiusDesktopWidth = `${googleMapBorderRadiusDesktop.top}${googleMapBorderRadiusUnits.Desktop} ${googleMapBorderRadiusDesktop.right}${googleMapBorderRadiusUnits.Desktop} ${googleMapBorderRadiusDesktop.bottom}${googleMapBorderRadiusUnits.Desktop} ${googleMapBorderRadiusDesktop.left}${googleMapBorderRadiusUnits.Desktop}`;
    const googleMapBorderRadiusTabletWidth = `${googleMapBorderRadiusTablet.top}${googleMapBorderRadiusUnits.Tablet} ${googleMapBorderRadiusTablet.right}${googleMapBorderRadiusUnits.Tablet} ${googleMapBorderRadiusTablet.bottom}${googleMapBorderRadiusUnits.Tablet} ${googleMapBorderRadiusTablet.left}${googleMapBorderRadiusUnits.Tablet}`;
    const googleMapBorderRadiusMobileWidth = `${googleMapBorderRadiusMobile.top}${googleMapBorderRadiusUnits.Mobile} ${googleMapBorderRadiusMobile.right}${googleMapBorderRadiusUnits.Mobile} ${googleMapBorderRadiusMobile.bottom}${googleMapBorderRadiusUnits.Mobile} ${googleMapBorderRadiusMobile.left}${googleMapBorderRadiusUnits.Mobile}`;
    /** End Google Map Border Radius */

    const allBlockStyle = useMemo(() => `

        .${blockId} .fb-google-map-wrapper iframe {
            ${googleMapGlobalZIndex.Desktop ? `z-index: ${googleMapGlobalZIndex.Desktop};` : ''} 
            ${googleMapWidth.Desktop ? `width: ${googleMapWidth.Desktop}${googleMapWidthUnits.Desktop};` : ''} 
            ${googleMapHeight.Desktop ? `height: ${googleMapHeight.Desktop}${googleMapHeightUnits.Desktop};` : ''} 
            ${googleMapPaddingDesktopWidth && googleMapPaddingDesktop.top? `padding: ${googleMapPaddingDesktopWidth};` : ''}
            ${googleMapMarginDesktopWidth && googleMapMarginDesktop.top? `margin: ${googleMapMarginDesktopWidth};` : ''} 
            ${googleMapBorder ? `border: ${googleMapBorder};` : ''} 
            ${googleMapBorderDesktopWidth && googleMapBorderDesktop.top? `border-width: ${googleMapBorderDesktopWidth};` : ''}
            ${googleMapBorderRadiusDesktopWidth && googleMapBorderRadiusDesktop.top? `border-radius: ${googleMapBorderRadiusDesktopWidth};` : ''}
            ${googleMapBorderColor ? `border-color: ${googleMapBorderColor};` : ''}
            ${googleMapBoxShadowCssValue ? `box-shadow: ${googleMapBoxShadowCssValue};` : ''}

            ${googleMapNormalBackgroundType === 'gradient' ? `  
                ${googleMapNormalCustomGradientSwitcher && googleMapNormalCustomGradientInputValue ? `background: ${googleMapNormalCustomGradientInputValue};` : `background: ${googleMapNormalGradientColor};`}
            `: `
                ${googleMapNormalClassicColor ? `background: ${googleMapNormalClassicColor};` : ''}
            `}
            box-sizing: border-box;
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockId} .fb-google-map-wrapper iframe:hover {
            ${googleMapBorderHoverColor ? `border-color: ${googleMapBorderHoverColor};` : ''}
            ${googleMapBoxShadowHoverCssValue ? `box-shadow: ${googleMapBoxShadowHoverCssValue};` : ''}
            ${googleMapHoverBackgroundType === 'gradient' ? `
                ${googleMapHoverCustomGradientSwitcher && googleMapHoverCustomGradientInputValue ? `background: ${googleMapHoverCustomGradientInputValue};` : `background: ${googleMapHoverGradientColor};`}
            `: `
                ${googleMapHoverClassicColor ? `background: ${googleMapHoverClassicColor};` : ''}
            `}
        }

        @media only screen and (max-width: 1024px) {
            .${blockId} .fb-google-map-wrapper iframe {
                ${googleMapGlobalZIndex.Tablet ? `z-index: ${googleMapGlobalZIndex.Tablet};` : ''} 
                ${googleMapWidth.Tablet ? `width: ${googleMapWidth.Tablet}${googleMapWidthUnits.Tablet};` : ''} 
                ${googleMapHeight.Tablet ? `height: ${googleMapHeight.Tablet}${googleMapHeightUnits.Tablet};` : ''} 
                ${googleMapPaddingTabletWidth && googleMapPaddingTablet.top? `padding: ${googleMapPaddingTabletWidth};` : ''}
                ${googleMapMarginTabletWidth && googleMapMarginTablet.top? `margin: ${googleMapMarginTabletWidth};` : ''} 
                ${googleMapBorderTabletWidth && googleMapBorderTablet.top? `border-width: ${googleMapBorderTabletWidth};` : ''}
                ${googleMapBorderRadiusTabletWidth && googleMapBorderRadiusTablet.top? `border-radius: ${googleMapBorderRadiusTabletWidth};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockId} .fb-google-map-wrapper iframe {
                ${googleMapGlobalZIndex.Mobile ? `z-index: ${googleMapGlobalZIndex.Mobile};` : ''}  
                ${googleMapWidth.Mobile ? `width: ${googleMapWidth.Mobile}${googleMapWidthUnits.Mobile};` : ''} 
                ${googleMapHeight.Mobile ? `height: ${googleMapHeight.Mobile}${googleMapHeightUnits.Mobile};` : ''} 
                ${googleMapPaddingMobileWidth && googleMapPaddingMobile.top? `padding: ${googleMapPaddingMobileWidth};` : ''}
                ${googleMapMarginMobileWidth && googleMapMarginMobile.top? `margin: ${googleMapMarginMobileWidth};` : ''} 
                ${googleMapBorderMobileWidth && googleMapBorderMobile.top? `border-width: ${googleMapBorderMobileWidth};` : ''}
                ${googleMapBorderRadiusMobileWidth && googleMapBorderRadiusMobile.top? `border-radius: ${googleMapBorderRadiusMobileWidth};` : ''}
            }
        }
    `, [
        blockId,
        blockStyle,
        googleMapLocation,
        googleMapZoomLevel,
        googleMapMapType,
        googleMapWidth,
        googleMapWidthUnits,
        googleMapHeight,
        googleMapHeightUnits,

        googleMapPaddingUnits,
        googleMapPaddingDesktop,
        googleMapPaddingTablet,
        googleMapPaddingMobile,
        googleMapPaddingLink,
        googleMapPaddingDesktopWidth,
        googleMapPaddingTabletWidth,
        googleMapPaddingMobileWidth,

        googleMapMarginUnits,
        googleMapMarginDesktop,
        googleMapMarginTablet,
        googleMapMarginMobile,
        googleMapMarginLink,
        googleMapMarginDesktopWidth,
        googleMapMarginTabletWidth,
        googleMapMarginMobileWidth,

        googleMapBgColorSwitcher,
        googleMapNormalBackgroundType,
        googleMapNormalClassicColor,
        googleMapNormalGradientColor,
        googleMapNormalCustomGradientSwitcher,
        googleMapNormalCustomGradientInputValue,
        googleMapHoverBackgroundType,
        googleMapHoverClassicColor,
        googleMapHoverGradientColor,
        googleMapHoverCustomGradientSwitcher,
        googleMapHoverCustomGradientInputValue,

        googleMapBorder,
        googleMapBorderColorSwitcher,
        googleMapBorderColor,
        googleMapBorderHoverColor,

        googleMapBorderUnits,
        googleMapBorderDesktop,
        googleMapBorderTablet,
        googleMapBorderMobile,
        googleMapBorderLink,
        googleMapBorderDesktopWidth,
        googleMapBorderTabletWidth,
        googleMapBorderMobileWidth,

        googleMapBorderRadiusUnits,
        googleMapBorderRadiusDesktop,
        googleMapBorderRadiusTablet,
        googleMapBorderRadiusMobile,
        googleMapBorderRadiusLink,
        googleMapBorderRadiusDesktopWidth,
        googleMapBorderRadiusTabletWidth,
        googleMapBorderRadiusMobileWidth,

        googleMapBoxShadowSwitcher,
        googleMapBoxShadowValues,
        googleMapBoxShadowCssValue,
        googleMapBoxShadowHoverValues,
        googleMapBoxShadowHoverCssValue,
        googleMapGlobalZIndex,

        googleMapCustomCSS,
        googleMapWraperID,
        googleMapWraperClass,

    ]);

    const customCss = getCustomCss(googleMapCustomCSS, `.${blockId}`);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle, customCss]);

    const editorStyle = `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();


    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>

            <PanelBody
                title={__("General", "frontis-blocks")}
                initialOpen={true}
            >
                <TextControl
                    label={__("Address", "frontis-blocks")}
                    value={googleMapLocation}
                    onChange={(value) => setAttributes({ googleMapLocation: value })}
                    className="fb-google-map-address-control"
                    help={__('Enter the address or location for the map', 'frontis-blocks')}
                />
                <FB_Range
                    min={0}
                    max={googleMapWidthUnits[deviceType] === '%' ? 100 : 1000}
                    label={__("Width", "frontis-blocks")}
                    rangeValue={googleMapWidth}
                    onChangeHandler={(value) => setAttributes({ googleMapWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ googleMapWidthUnits: value })}
                    deviceType={deviceType}
                    units={googleMapWidthUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                <FB_Range
                    min={0}
                    max={googleMapHeightUnits[deviceType] === '%' ? 100 : 1000}
                    label={__("Height", "frontis-blocks")}
                    rangeValue={googleMapHeight}
                    onChangeHandler={(value) => setAttributes({ googleMapHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ googleMapHeightUnits: value })}
                    deviceType={deviceType}
                    units={googleMapHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                <RangeControl
                    label={__('Zoom Level', 'frontis-blocks')}
                    value={googleMapZoomLevel}
                    onChange={(value) => setAttributes({ googleMapZoomLevel: value })}
                    min={1}
                    max={20}
                    className='geomap-block-default-range-control'
                />
                <SelectControl
                    label={__('Map Type', 'frontis-blocks')}
                    value={googleMapMapType}
                    options={[
                        { label: __('Roadmap', 'frontis-blocks'), value: 'm' },
                        { label: __('Satellite', 'frontis-blocks'), value: 'k' },
                        { label: __('Hybrid', 'frontis-blocks'), value: 'h' },
                        { label: __('Terrain', 'frontis-blocks'), value: 'p' },
                    ]}
                    onChange={(value) => setAttributes({ googleMapMapType: value })}
                />
            </PanelBody>


        </>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
        <>

            <PanelBody
                title={__("Style", "frontis-blocks")}
                initialOpen={true}
            >

                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={googleMapPaddingUnitsHandler}
                    spacingUnits={googleMapPaddingUnits}
                    spacingDesktop={googleMapPaddingDesktop}
                    spacingTablet={googleMapPaddingTablet}
                    spacingMobile={googleMapPaddingMobile}
                    handleSpacingUnitHandler={googleMapPaddingUnitsChange}
                    spacingCombineBtn={googleMapPaddingLink}
                    spacingCombineBtnHandler={googleMapPaddingLinkBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={googleMapMarginUnitsHandler}
                    spacingUnits={googleMapMarginUnits}
                    spacingDesktop={googleMapMarginDesktop}
                    spacingTablet={googleMapMarginTablet}
                    spacingMobile={googleMapMarginMobile}
                    handleSpacingUnitHandler={googleMapMarginUnitsChange}
                    spacingCombineBtn={googleMapMarginLink}
                    spacingCombineBtnHandler={googleMapMarginLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={googleMapBgColorSwitcher}  
                    setBgColorSwitcher={(value) => setAttributes({ googleMapBgColorSwitcher: value })}
                    
                    normalBackgroundType={googleMapNormalBackgroundType} 
                    setNormalBackgroundType={(value) => setAttributes({ googleMapNormalBackgroundType: value })}
                    normalClassicColor={googleMapNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ googleMapNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={googleMapNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ googleMapNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={googleMapNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ googleMapNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={googleMapNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ googleMapNormalCustomGradientInputValue: value })}
                    
                    hoverBackgroundType={googleMapHoverBackgroundType}
                    setHoverBackgroundType={(value) => setAttributes({ googleMapHoverBackgroundType: value })}
                    hoverClassicColor={googleMapHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ googleMapHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={googleMapHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ googleMapHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={googleMapHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ googleMapHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={googleMapHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ googleMapHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}

                />

                <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={googleMapBorder} 
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ googleMapBorder: value })}
                />


                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={googleMapBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ googleMapBorderColorSwitcher: value })}
                />

                {googleMapBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={googleMapBorderColor}
                        setGlobalColor={(value) => setAttributes({ googleMapBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {googleMapBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={googleMapBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ googleMapBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={googleMapBorderUnitsHandler}
                    spacingUnits={googleMapBorderUnits}
                    spacingDesktop={googleMapBorderDesktop}
                    spacingTablet={googleMapBorderTablet}
                    spacingMobile={googleMapBorderMobile}
                    handleSpacingUnitHandler={googleMapBorderUnitsChange}
                    spacingCombineBtn={googleMapBorderLink}
                    spacingCombineBtnHandler={googleMapBorderLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={googleMapBorderRadiusUnitsHandler}
                    spacingUnits={googleMapBorderRadiusUnits}
                    spacingDesktop={googleMapBorderRadiusDesktop}
                    spacingTablet={googleMapBorderRadiusTablet}
                    spacingMobile={googleMapBorderRadiusMobile}
                    handleSpacingUnitHandler={googleMapBorderRadiusUnitsChange}
                    spacingCombineBtn={googleMapBorderRadiusLink}
                    spacingCombineBtnHandler={googleMapBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={googleMapBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ googleMapBoxShadowSwitcher: value })}
                />

                {googleMapBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ googleMapBoxShadowValues: value })}
                        initialShadowValue={googleMapBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ googleMapBoxShadowCssValue: value })}
                    />
                )}

                {googleMapBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ googleMapBoxShadowHoverValues: value })}
                        initialShadowValue={googleMapBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ googleMapBoxShadowHoverCssValue: value })}
                    />
                )}

        </PanelBody>

        </>
	);
		
	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
		<>

            <PanelBody
                title={__("Layout", "frontis-blocks")}
                initialOpen={true}
            >
                <FB_Range
                    min={0}
                    max={10000000}
                    label={__("Z Index", "frontis-blocks")}
                    rangeValue={googleMapGlobalZIndex}
                    onChangeHandler={(value) => setAttributes({ googleMapGlobalZIndex: value === 0 ? undefined : value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}
                />

                <FB_InputControl
                    label={__("CSS ID", "frontis-blocks")}
                    value={googleMapWraperID}
                    onChangeValue={(value) => setAttributes({ googleMapWraperID: value })}
                    helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                />

                <FB_InputControl
                    label={__("CSS Class", "frontis-blocks")}
                    value={googleMapWraperClass}
                    onChangeValue={(value) => setAttributes({ googleMapWraperClass: value })}
                    helpText={__("Separate with spaces key.", "frontis-blocks")}
                />
            </PanelBody>

            <PanelBody
                title={__("Custom CSS", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_CustomCSSEditor  
                    value={googleMapCustomCSS} 
                    onChangeValue={(value) => setAttributes({ googleMapCustomCSS: value })}
                />
            </PanelBody>

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