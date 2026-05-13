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

import { useState, useEffect, useMemo, memo } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_Range from '@Components/range';
import FBIconPicker from '@Components/icon-picker';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_ImageControl from '@Components/image-control';

import './editor.scss';

const Inspector = ({ attributes, setAttributes }) => {

    const {
        blockID,

        backToTopPresetType,
        backToTopContentType,
        backToTopIcon,
        backToTopIconType,
        backToTopImage,
        backToTopImageAlt,
        backToTopImageID,
        backToTopText,

        backToTopPaddingUnits,
        backToTopPaddingDesktop,
        backToTopPaddingTablet,
        backToTopPaddingMobile,
        backToTopPaddingLink,

        backToTopBorder,
        backToTopBorderColorSwitcher,
        backToTopBorderColor,
        backToTopBorderHoverColor,

        backToTopBorderUnits,
        backToTopBorderDesktop,
        backToTopBorderTablet,
        backToTopBorderMobile,
        backToTopBorderLink,

        backToTopBorderRadiusUnits,
        backToTopBorderRadiusDesktop,
        backToTopBorderRadiusTablet,
        backToTopBorderRadiusMobile,
        backToTopBorderRadiusLink,

        backToTopBoxShadowSwitcher,
        backToTopBoxShadowValues,
        backToTopBoxShadowCssValue,
        backToTopBoxShadowHoverValues,
        backToTopBoxShadowHoverCssValue,
        backToTopGlobalZIndex,

        backToTopBgColorSwitcher,
        backToTopNormalBackgroundType,
        backToTopNormalClassicColor,
        backToTopNormalGradientColor,
        backToTopNormalCustomGradientSwitcher,
        backToTopNormalCustomGradientInputValue,
        backToTopHoverBackgroundType,
        backToTopHoverClassicColor,
        backToTopHoverGradientColor,
        backToTopHoverCustomGradientSwitcher,
        backToTopHoverCustomGradientInputValue,

        backToTopGlobalTypoSwitcher,
        backToTopGlobalTypographyData,
        backToTopGlobalTypoType,
        backToTopGlobalTypoOption,
        backToTopFontFamily,
        backToTopFontSize,
        backToTopFontSizeUnits,
        backToTopFontWeight,
        backToTopFontStyle,
        backToTopTextTransform,
        backToTopTextDecoration,
        backToTopLetterSpacing,
        backToTopLineHeight,
        backToTopLetterSpacingUnits,
        backToTopLineHeightUnits,

        backToTopPosition,
        backToTopEntranceAnimation,
        backToTopContentDirection,

        backToTopCustomCSS,
        backToTopWraperID,
        backToTopWraperClass,

        backToTopHoverZoomEffect,
        backToTopClickScaleEffect,

        backToTopIconImageSize,
        backToTopIconImageSizeUnits,
        backToTopTextIconSpacing,
        backToTopTextIconSpacingUnits,
        backToTopIconImagePosition,

        backToTopIconColorTypeSwitcher,
        backToTopIconColorType,
        backToTopIconHoverColorType,
        backToTopIconColor,
        backToTopIconHoverColor,
        backToTopIconGradientColor,
        backToTopIconHoverGradientColor,
        backToTopIconCustomGradientColorSwitcher,
        backToTopIconCustomGradientColor,
        backToTopIconHoverCustomGradientColorSwitcher,
        backToTopIconHoverCustomGradientColor,

    } = attributes;

    const deviceType = useDeviceType();


    /** Start Google Map Padding */
    const backToTopPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (backToTopPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        backToTopPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        backToTopPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        backToTopPaddingMobile: {
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
                    setAttributes({ backToTopPaddingDesktop: { ...backToTopPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ backToTopPaddingTablet: { ...backToTopPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ backToTopPaddingMobile: { ...backToTopPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const backToTopPaddingLinkBtn = () => {
        setAttributes({
            backToTopPaddingLink: !backToTopPaddingLink
        });
    };

    const backToTopPaddingUnitsHandler = (unit) => {
        setAttributes({
            backToTopPaddingUnits: {
                ...backToTopPaddingUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Google Map Padding */


    /** Start Border Controls */
    const backToTopBorderUnitsChange = (event, position) => {
        const value = event.target.value;
        if (backToTopBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ backToTopBorderDesktop: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Tablet':
                    setAttributes({ backToTopBorderTablet: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Mobile':
                    setAttributes({ backToTopBorderMobile: { top: value, right: value, bottom: value, left: value } });
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ backToTopBorderDesktop: { ...backToTopBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ backToTopBorderTablet: { ...backToTopBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ backToTopBorderMobile: { ...backToTopBorderMobile, [position]: value } });
                    break;
            }
        }
    };

    const backToTopBorderLinkBtn = () => {
        setAttributes({ backToTopBorderLink: !backToTopBorderLink });
    };

    const backToTopBorderUnitsHandler = (unit) => {
        setAttributes({
            backToTopBorderUnits: {
                ...backToTopBorderUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Border Controls */

    /** Start Border Radius Controls */
    const backToTopBorderRadiusUnitsChange = (event, position) => {
        const value = event.target.value;
        if (backToTopBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ backToTopBorderRadiusDesktop: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Tablet':
                    setAttributes({ backToTopBorderRadiusTablet: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Mobile':
                    setAttributes({ backToTopBorderRadiusMobile: { top: value, right: value, bottom: value, left: value } });
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ backToTopBorderRadiusDesktop: { ...backToTopBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ backToTopBorderRadiusTablet: { ...backToTopBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ backToTopBorderRadiusMobile: { ...backToTopBorderRadiusMobile, [position]: value } });
                    break;
            }
        }
    };

    const backToTopBorderRadiusLinkBtn = () => {
        setAttributes({ backToTopBorderRadiusLink: !backToTopBorderRadiusLink });
    };

    const backToTopBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            backToTopBorderRadiusUnits: {
                ...backToTopBorderRadiusUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Border Radius Controls */

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody
                title={__("General", "frontis-blocks")}
                initialOpen={true}
            >

                {/* <SelectControl
                    label={__('Preset', 'frontis-blocks')}
                    value={backToTopPresetType}
                    options={[
                        { label: __('Default', 'frontis-blocks'), value: '0' },
                        { label: __('Preset 1', 'frontis-blocks'), value: '1' },
                        { label: __('Preset 2', 'frontis-blocks'), value: '2' },
                        { label: __('Preset 3', 'frontis-blocks'), value: '3' },
                        { label: __('Preset 4', 'frontis-blocks'), value: '4' },
                        { label: __('Preset 5', 'frontis-blocks'), value: '5' },
                    ]}
                    onChange={(value) => setAttributes({ backToTopPresetType: value })}
                /> */}

                {/* <SelectControl
                    label={__('Position', 'frontis-blocks')}
                    value={backToTopPosition}
                    options={[
                        { label: __('Bottom Left', 'frontis-blocks'), value: 'bottom-left' },
                        { label: __('Bottom Right', 'frontis-blocks'), value: 'bottom-right' },
                        { label: __('Top Left', 'frontis-blocks'), value: 'top-left' },
                        { label: __('Top Right', 'frontis-blocks'), value: 'top-right' },
                    ]}
                    onChange={(value) => setAttributes({ backToTopPosition: value })}
                /> */}

                <FB_SwitcherControl
                    label={__('Position', 'frontis-blocks')}
                    options={[
                        { label: __('Bottom Left', 'frontis-blocks'), value: 'bottom-left' },
                        { label: __('Bottom Right', 'frontis-blocks'), value: 'bottom-right' },
                        { label: __('Top Left', 'frontis-blocks'), value: 'top-left' },
                        { label: __('Top Right', 'frontis-blocks'), value: 'top-right' },
                    ]}
                    globalSwitcher={backToTopPosition}
                    setGlobalSwitcher={(value) =>
                        setAttributes({ backToTopPosition: value })
                    }
                />

                {/* <SelectControl

                    label={__('Entrance Animation', 'frontis-blocks')}
                    value={backToTopEntranceAnimation}
                    options={[
                        { label: __('Fade', 'frontis-blocks'), value: 'fade' },
                        { label: __('Slide Up', 'frontis-blocks'), value: 'slide-up' },
                        { label: __('Zoom In', 'frontis-blocks'), value: 'zoom-in' },
                        { label: __('Bounce In', 'frontis-blocks'), value: 'bounce-in' },

                    ]}
                    onChange={(value) => setAttributes({ backToTopEntranceAnimation: value })}
                /> */}


                <FB_SwitcherControl
                    label={__('Entrance Animation', 'frontis-blocks')}
                    options={[
                        { label: __('Fade', 'frontis-blocks'), value: 'fade' },
                        { label: __('Slide Up', 'frontis-blocks'), value: 'slide-up' },
                        { label: __('Zoom In', 'frontis-blocks'), value: 'zoom-in' },
                        { label: __('Bounce In', 'frontis-blocks'), value: 'bounce-in' },
                    ]}
                    globalSwitcher={backToTopEntranceAnimation}
                    setGlobalSwitcher={(value) =>
                        setAttributes({ backToTopEntranceAnimation: value })
                    }
                />


            </PanelBody>

            <PanelBody
                title={__("Content", "frontis-blocks")}
                initialOpen={false}
            >

                {/* <SelectControl

                    label={__('Content Type', 'frontis-blocks')}
                    value={backToTopContentType}
                    options={[
                        { label: __('Icon', 'frontis-blocks'), value: 'icon' },
                        { label: __('Text', 'frontis-blocks'), value: 'text' },
                        { label: __('Text & Icon', 'frontis-blocks'), value: 'text-icon' },

                    ]}
                    onChange={(value) => setAttributes({ backToTopContentType: value })}
                /> */}

                <FB_SwitcherControl
                    label={__('Content Type', 'frontis-blocks')}
                    options={[
                        { label: __('Icon', 'frontis-blocks'), value: 'icon' },
                        { label: __('Text', 'frontis-blocks'), value: 'text' },
                        { label: __('Text & Icon', 'frontis-blocks'), value: 'text-icon' },
                    ]}
                    globalSwitcher={backToTopContentType}
                    setGlobalSwitcher={(value) =>
                        setAttributes({ backToTopContentType: value })
                    }
                />

                {/* {backToTopContentType !== 'text' && (
                    <SelectControl
                        label={__('Icon Type', 'frontis-blocks')}
                        value={backToTopIconType}
                        options={[
                            { label: __('Icon', 'frontis-blocks'), value: 'icon' },
                            { label: __('Image', 'frontis-blocks'), value: 'image' },
                        ]}
                        onChange={(value) => setAttributes({ backToTopIconType: value })}
                    />
                )} */}

                {backToTopContentType !== 'text' && (
                    <FB_SwitcherControl
                        label={__('Icon Type', 'frontis-blocks')}
                        options={[
                            { label: __('Icon', 'frontis-blocks'), value: 'icon' },
                            { label: __('Image', 'frontis-blocks'), value: 'image' },
                        ]}
                        globalSwitcher={backToTopIconType}
                        setGlobalSwitcher={(value) =>
                            setAttributes({ backToTopIconType: value })
                        }
                    />
                )}

                {backToTopContentType !== 'text' && backToTopIconType === 'icon' && (
                    <FBIconPicker
                        value={backToTopIcon}
                        setIconHandler={(value) => setAttributes({ backToTopIcon: value })}
                    />
                )}


                {backToTopContentType !== 'text' && backToTopIconType === 'image' && (
                    <FB_ImageControl
                        label={__("Select Image", "frontis-blocks")}
                        globalImageUrl={backToTopImage}
                        setglobalImageUrl={(value) => setAttributes({ backToTopImage: value })}
                        globalImageAlt={backToTopImageAlt}
                        setglobalImageAlt={(value) => setAttributes({ backToTopImageAlt: value })}
                        globalImageID={backToTopImageID}
                        setglobalImageID={(value) => setAttributes({ backToTopImageID: value })}
                        isImageSize={false}
                    />
                )}

                {backToTopContentType !== 'icon' && (
                    <TextControl
                        label={__("Text", "frontis-blocks")}
                        value={backToTopText}
                        onChange={(value) => setAttributes({ backToTopText: value })}
                        className="fb-back-to-top-text-control"
                        help={__('Enter the back to top button text ', 'frontis-blocks')}
                    />
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
                title={__("Back To Top Button", "frontis-blocks")}
                initialOpen={true}
            >

                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={backToTopPaddingUnitsHandler}
                    spacingUnits={backToTopPaddingUnits}
                    spacingDesktop={backToTopPaddingDesktop}
                    spacingTablet={backToTopPaddingTablet}
                    spacingMobile={backToTopPaddingMobile}
                    handleSpacingUnitHandler={backToTopPaddingUnitsChange}
                    spacingCombineBtn={backToTopPaddingLink}
                    spacingCombineBtnHandler={backToTopPaddingLinkBtn}
                    setAttributes={setAttributes}
                />

                {backToTopContentType === 'text-icon' && (
                    // <SelectControl
                    //     label={__('Content Direction', 'frontis-blocks')}
                    //     value={backToTopContentDirection}
                    //     options={[
                    //         { label: __('Row', 'frontis-blocks'), value: 'row' },
                    //         { label: __('Column', 'frontis-blocks'), value: 'column' },
                    //     ]}
                    //     onChange={(value) => setAttributes({ backToTopContentDirection: value })}
                    // />

                    <FB_SwitcherControl
                        label={__('Content Direction', 'frontis-blocks')}
                        options={[
                            { label: __('Row', 'frontis-blocks'), value: 'row' },
                            { label: __('Column', 'frontis-blocks'), value: 'column' },
                        ]}
                        globalSwitcher={backToTopContentDirection}
                        setGlobalSwitcher={(value) =>
                            setAttributes({ backToTopContentDirection: value })
                        }
                    />
                )}

                {backToTopContentType !== 'icon' && (
                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={backToTopGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) =>
                            setAttributes({
                                backToTopGlobalTypographyData: value,
                            })
                        }
                        globalTypoType={backToTopGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({
                                backToTopGlobalTypoType: value,
                                backToTopGlobalTypoSwitcher:
                                    value === "default"
                                        ? {
                                            ...backToTopGlobalTypoSwitcher,
                                            fontFamily: false,
                                            fontSize: false,
                                            fontWeight: false,
                                            fontStyle: false,
                                            textTransform: false,
                                            textDecoration: false,
                                            letterSpacing: false,
                                            lineHeight: false,
                                        }
                                        : {
                                            ...backToTopGlobalTypoSwitcher,
                                            fontFamily: true,
                                            fontSize: true,
                                            fontWeight: true,
                                            fontStyle: true,
                                            textTransform: true,
                                            textDecoration: true,
                                            letterSpacing: true,
                                            lineHeight: true,
                                        },
                            });
                        }}
                        globalTypoOption={backToTopGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) =>
                            setAttributes({ backToTopGlobalTypoOption: value })
                        }
                        fontFamily={backToTopFontFamily}
                        onChangeFontFamily={(value) =>
                            setAttributes({
                                backToTopFontFamily: value,
                                backToTopGlobalTypoSwitcher: {
                                    ...backToTopGlobalTypoSwitcher,
                                    fontFamily: value && false,
                                },
                            })
                        }
                        fontSize={backToTopFontSize}
                        onChangeFontSize={(value) =>
                            setAttributes({
                                backToTopFontSize: value,
                                backToTopGlobalTypoSwitcher: {
                                    ...backToTopGlobalTypoSwitcher,
                                    fontSize: value && false,
                                },
                            })
                        }
                        fontSizeUnits={backToTopFontSizeUnits}
                        onChangeFontSizeUnit={(value) =>
                            setAttributes({ backToTopFontSizeUnits: value })
                        }
                        fontWeight={backToTopFontWeight}
                        onChangeFontWeight={(value) =>
                            setAttributes({
                                backToTopFontWeight: value,
                                backToTopGlobalTypoSwitcher: {
                                    ...backToTopGlobalTypoSwitcher,
                                    fontWeight: value && false,
                                },
                            })
                        }
                        fontStyle={backToTopFontStyle}
                        onChangeFontStyle={(value) =>
                            setAttributes({
                                backToTopFontStyle: value,
                                backToTopGlobalTypoSwitcher: {
                                    ...backToTopGlobalTypoSwitcher,
                                    fontStyle: value && false,
                                },
                            })
                        }
                        textTransform={backToTopTextTransform}
                        onChangeTextTransform={(value) =>
                            setAttributes({
                                backToTopTextTransform: value,
                                backToTopGlobalTypoSwitcher: {
                                    ...backToTopGlobalTypoSwitcher,
                                    textTransform: value && false,
                                },
                            })
                        }
                        textDecoration={backToTopTextDecoration}
                        onChangeTextDecoration={(value) =>
                            setAttributes({
                                backToTopTextDecoration: value,
                                backToTopGlobalTypoSwitcher: {
                                    ...backToTopGlobalTypoSwitcher,
                                    textDecoration: value && false,
                                },
                            })
                        }
                        letterSpacing={backToTopLetterSpacing}
                        onChangeLetterSpacing={(value) =>
                            setAttributes({
                                backToTopLetterSpacing: value,
                                backToTopGlobalTypoSwitcher: {
                                    ...backToTopGlobalTypoSwitcher,
                                    letterSpacing: value && false,
                                },
                            })
                        }
                        letterSpacingUnits={backToTopLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) =>
                            setAttributes({ backToTopLetterSpacingUnits: value })
                        }
                        lineHeight={backToTopLineHeight}
                        onChangeLineHeight={(value) =>
                            setAttributes({
                                backToTopLineHeight: value,
                                backToTopGlobalTypoSwitcher: {
                                    ...backToTopGlobalTypoSwitcher,
                                    lineHeight: value && false,
                                },
                            })
                        }
                        lineHeightUnits={backToTopLineHeightUnits}
                        onChangeLineHeightUnit={(value) =>
                            setAttributes({ backToTopLineHeightUnits: value })
                        }
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />
                )}

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={backToTopBgColorSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ backToTopBgColorSwitcher: value })}

                    normalBackgroundType={backToTopNormalBackgroundType}
                    setNormalBackgroundType={(value) => setAttributes({ backToTopNormalBackgroundType: value })}
                    normalClassicColor={backToTopNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ backToTopNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={backToTopNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ backToTopNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={backToTopNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ backToTopNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={backToTopNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ backToTopNormalCustomGradientInputValue: value })}

                    hoverBackgroundType={backToTopHoverBackgroundType}
                    setHoverBackgroundType={(value) => setAttributes({ backToTopHoverBackgroundType: value })}
                    hoverClassicColor={backToTopHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ backToTopHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={backToTopHoverGradientColor}
                    setHoverGradientColor={(value) => setAttributes({ backToTopHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={backToTopHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ backToTopHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={backToTopHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ backToTopHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}

                />


                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={backToTopBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ backToTopBorder: value })}
                />


                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    options={[
                        { label: __('Normal', 'frontis-blocks'), value: 'normal' },
                        { label: __('Hover', 'frontis-blocks'), value: 'hover' },
                    ]}
                    globalSwitcher={backToTopBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ backToTopBorderColorSwitcher: value })}
                />

                {backToTopBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={backToTopBorderColor}
                        setGlobalColor={(value) => setAttributes({ backToTopBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {backToTopBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={backToTopBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ backToTopBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}


                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={backToTopBorderUnitsHandler}
                    spacingUnits={backToTopBorderUnits}
                    spacingDesktop={backToTopBorderDesktop}
                    spacingTablet={backToTopBorderTablet}
                    spacingMobile={backToTopBorderMobile}
                    handleSpacingUnitHandler={backToTopBorderUnitsChange}
                    spacingCombineBtn={backToTopBorderLink}
                    spacingCombineBtnHandler={backToTopBorderLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={backToTopBorderRadiusUnitsHandler}
                    spacingUnits={backToTopBorderRadiusUnits}
                    spacingDesktop={backToTopBorderRadiusDesktop}
                    spacingTablet={backToTopBorderRadiusTablet}
                    spacingMobile={backToTopBorderRadiusMobile}
                    handleSpacingUnitHandler={backToTopBorderRadiusUnitsChange}
                    spacingCombineBtn={backToTopBorderRadiusLink}
                    spacingCombineBtnHandler={backToTopBorderRadiusLinkBtn}
                    setAttributes={setAttributes}
                />


                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={backToTopBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ backToTopBoxShadowSwitcher: value })}
                />

                {backToTopBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ backToTopBoxShadowValues: value })}
                        initialShadowValue={backToTopBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ backToTopBoxShadowCssValue: value })}
                    />
                )}

                {backToTopBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ backToTopBoxShadowHoverValues: value })}
                        initialShadowValue={backToTopBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ backToTopBoxShadowHoverCssValue: value })}
                    />
                )}

                <FB_Range
                    min={0}
                    max={2}
                    label={__("Hover Zoom Effect", "frontis-blocks")}
                    rangeValue={backToTopHoverZoomEffect}
                    onChangeHandler={(value) => setAttributes({ backToTopHoverZoomEffect: value === 0 ? undefined : value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={0.01}
                    resetFallbackValue={""}
                    isRangeUnit={false}
                />

                <FB_Range
                    min={0}
                    max={1}
                    label={__("Click Scale Effect", "frontis-blocks")}
                    rangeValue={backToTopClickScaleEffect}
                    onChangeHandler={(value) => setAttributes({ backToTopClickScaleEffect: value === 0 ? undefined : value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={0.01}
                    resetFallbackValue={""}
                    isRangeUnit={false}
                />


            </PanelBody>

            {backToTopContentType !== 'text' && (
                <PanelBody
                    title={__("Icon / Image", "frontis-blocks")}
                    initialOpen={false}
                >
                    <FB_Range
                        min={0}
                        max={100}
                        label={__("Icon / Image Size", "frontis-blocks")}
                        rangeValue={backToTopIconImageSize}
                        onChangeHandler={(value) => setAttributes({ backToTopIconImageSize: { ...backToTopIconImageSize, [deviceType]: value === 0 ? undefined : value } })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}
                    />

                    {backToTopContentType == 'text-icon' && (
                        <FB_Range
                            min={0}
                            max={100}
                            label={__("Spacing", "frontis-blocks")}
                            rangeValue={backToTopTextIconSpacing}
                            onChangeHandler={(value) => setAttributes({ backToTopTextIconSpacing: { ...backToTopTextIconSpacing, [deviceType]: value === 0 ? undefined : value } })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}
                        />
                    )}

                    {backToTopContentType == 'text-icon' && (
                        <FB_SwitcherControl
                            label={__('Icon / Image Position', 'frontis-blocks')}
                            options={[
                                { label: __('Left', 'frontis-blocks'), value: 'left' },
                                { label: __('Right', 'frontis-blocks'), value: 'right' },
                            ]}
                            globalSwitcher={backToTopIconImagePosition}
                            setGlobalSwitcher={(value) => setAttributes({ backToTopIconImagePosition: value })}
                        />
                    )}

                    {backToTopIconType == 'icon' && (
                        <FB_BackgroundColorControl
                            label={__("Icon Color", "frontis-blocks")}
                            bgColorSwitcher={backToTopIconColorTypeSwitcher}
                            setBgColorSwitcher={(value) => setAttributes({ backToTopIconColorTypeSwitcher: value })}

                            normalLabel={__("Icon Color Type", "frontis-blocks")}
                            normalBackgroundType={backToTopIconColorType}
                            setNormalBackgroundType={(value) => setAttributes({ backToTopIconColorType: value })}
                            normalClassicColor={backToTopIconColor}
                            setNormalClassicColor={(value) => setAttributes({ backToTopIconColor: value === undefined ? '' : value })}
                            normalGradientColor={backToTopIconGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ backToTopIconGradientColor: value === undefined ? null : value })}
                            normalCustomGradientSwitcher={backToTopIconCustomGradientColorSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ backToTopIconCustomGradientColorSwitcher: value })}
                            normalCustomGradientInputValue={backToTopIconCustomGradientColor}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ backToTopIconCustomGradientColor: value === undefined ? null : value })}

                            hoverLabel={__("Icon Hover Color Type", "frontis-blocks")}
                            hoverBackgroundType={backToTopIconHoverColorType}
                            setHoverBackgroundType={(value) => setAttributes({ backToTopIconHoverColorType: value })}
                            hoverClassicColor={backToTopIconHoverColor}
                            setHoverClassicColor={(value) => setAttributes({ backToTopIconHoverColor: value === undefined ? '' : value })}
                            hoverGradientColor={backToTopIconHoverGradientColor}
                            setHoverGradientColor={(value) => setAttributes({ backToTopIconHoverGradientColor: value === undefined ? null : value })}
                            hoverCustomGradientSwitcher={backToTopIconHoverCustomGradientColorSwitcher}
                            setHoverCustomGradientSwitcher={(value) => setAttributes({ backToTopIconHoverCustomGradientColorSwitcher: value })}
                            hoverCustomGradientInputValue={backToTopIconHoverCustomGradientColor}
                            setHoverCustomGradientInputValue={(value) => setAttributes({ backToTopIconHoverCustomGradientColor: value === undefined ? null : value })}

                            isBackgroundImage={false}

                        />
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

            <PanelBody
                title={__("Layout", "frontis-blocks")}
                initialOpen={true}
            >
                <FB_Range
                    min={0}
                    max={10000000}
                    label={__("Z Index", "frontis-blocks")}
                    rangeValue={backToTopGlobalZIndex}
                    onChangeHandler={(value) => setAttributes({ backToTopGlobalZIndex: value === 0 ? undefined : value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}
                />

                <FB_InputControl
                    label={__("CSS ID", "frontis-blocks")}
                    value={backToTopWraperID}
                    onChangeValue={(value) => setAttributes({ backToTopWraperID: value })}
                    helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                />

                <FB_InputControl
                    label={__("CSS Class", "frontis-blocks")}
                    value={backToTopWraperClass}
                    onChangeValue={(value) => setAttributes({ backToTopWraperClass: value })}
                    helpText={__("Separate with spaces key.", "frontis-blocks")}
                />
            </PanelBody>

            <PanelBody
                title={__("Custom CSS", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_CustomCSSEditor
                    value={backToTopCustomCSS}
                    onChangeValue={(value) => setAttributes({ backToTopCustomCSS: value })}
                />
            </PanelBody>


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

export default Inspector;