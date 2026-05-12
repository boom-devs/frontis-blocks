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
        backToTopPresetType,
        backToTopPosition,
        backToTopEntranceAnimation,
        backToTopContentType,
        backToTopIcon,
        backToTopIconType,
        backToTopImage,
        backToTopImageAlt,
        backToTopText,
        backToTopContentDirection,
        backToTopImageID,
        backToTopBorder,
        backToTopBorderColor,
        backToTopBorderHoverColor,
        backToTopBorderColorSwitcher,
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


        backToTopGlobalTypoOption,
        backToTopFontFamily,
        backToTopFontSize,
        backToTopFontSizeUnits,
        backToTopFontWeight,
        backToTopFontStyle,
        backToTopTextTransform,
        backToTopTextDecoration,
        backToTopLetterSpacing,
        backToTopLetterSpacingUnits,
        backToTopLineHeight,
        backToTopLineHeightUnits,
        backToTopGlobalTypoSwitcher,
        backToTopGlobalTypoType,
        backToTopGlobalTypographyData,

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

    } = attributes;

    const deviceType = useDeviceType();

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

                <SelectControl
                    label={__('Position', 'frontis-blocks')}
                    value={backToTopPosition}
                    options={[
                        { label: __('Bottom Left', 'frontis-blocks'), value: 'bottom-left' },
                        { label: __('Bottom Right', 'frontis-blocks'), value: 'bottom-right' },
                        { label: __('Top Left', 'frontis-blocks'), value: 'top-left' },
                        { label: __('Top Right', 'frontis-blocks'), value: 'top-right' },
                    ]}
                    onChange={(value) => setAttributes({ backToTopPosition: value })}
                />

                <SelectControl

                    label={__('Entrance Animation', 'frontis-blocks')}
                    value={backToTopEntranceAnimation}
                    options={[
                        { label: __('Fade', 'frontis-blocks'), value: 'fade' },
                        { label: __('Slide Up', 'frontis-blocks'), value: 'slide-up' },
                        { label: __('Zoom In', 'frontis-blocks'), value: 'zoom-in' },
                        { label: __('Bounce In', 'frontis-blocks'), value: 'bounce-in' },

                    ]}
                    onChange={(value) => setAttributes({ backToTopEntranceAnimation: value })}
                />

            </PanelBody>

            <PanelBody
                title={__("Content", "frontis-blocks")}
                initialOpen={false}
            >

                <SelectControl

                    label={__('Content Type', 'frontis-blocks')}
                    value={backToTopContentType}
                    options={[
                        { label: __('Icon', 'frontis-blocks'), value: 'icon' },
                        { label: __('Text', 'frontis-blocks'), value: 'text' },
                        { label: __('Text & Icon', 'frontis-blocks'), value: 'text-icon' },

                    ]}
                    onChange={(value) => setAttributes({ backToTopContentType: value })}
                />

                {backToTopContentType !== 'text' && (
                    <SelectControl
                        label={__('Icon Type', 'frontis-blocks')}
                        value={backToTopIconType}
                        options={[
                            { label: __('Icon', 'frontis-blocks'), value: 'icon' },
                            { label: __('Image', 'frontis-blocks'), value: 'image' },
                        ]}
                        onChange={(value) => setAttributes({ backToTopIconType: value })}
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

                {backToTopContentType === 'text-icon' && (<SelectControl
                    label={__('Content Direction', 'frontis-blocks')}
                    value={backToTopContentDirection}
                    options={[
                        { label: __('Row', 'frontis-blocks'), value: 'row' },
                        { label: __('Column', 'frontis-blocks'), value: 'column' },
                    ]}
                    onChange={(value) => setAttributes({ backToTopContentDirection: value })}
                />
                )}

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


            </PanelBody>

            <PanelBody
                title={__("Icon / Image", "frontis-blocks")}
                initialOpen={false}
            >


            </PanelBody>
        </>
    );

    /**
     * Inspector Advanced Controls
     */
    const advancedControls = (
        <>

        </>
    );


    return (
        <>

            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
            // advancedControls={advancedControls}
            />

        </>
    );

}

export default Inspector;