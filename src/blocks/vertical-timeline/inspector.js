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
import { useDeviceType } from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_BackgroundColorControl from '@Components/background-color-control';

import './editor.scss';;

const Inspector = ({ attributes, setAttributes }) => {

    const {
        showSectionLabelSwitcher,

        /** Start Progress Line */
        verticalTimelineItemlineColorSwitcher,
        verticalTimelineItemProgressLineColor,
        verticalTimelineItemBaseLineColor,
        /** End Progress Line */

        /** Start Base Line Size */
        verticalTimelineBaseLineWidth,
        verticalTimelineBaseLineWidthUnits,
        /** End Base Line Size */

        /** Start Progress Line Size */
        verticalTimelineProgressLineWidth,
        verticalTimelineProgressLineWidthUnits,
        /** End Progress Line Size */

        /** Start Responsive Controls */
        verticalTimelineDesktopSwitcher,
        verticalTimelineTabletSwitcher,
        verticalTimelineMobileSwitcher,
        /** End Responsive Controls */

        /** Start Box Shadow */
        verticalTimelineGlobalBoxShadowSwitcher,
        verticalTimelineGlobalBoxShadowValues,
        verticalTimelineGlobalBoxShadowCssValue,
        verticalTimelineGlobalHoverBoxShadowValues,
        verticalTimelineGlobalHoverBoxShadowCssValue,
        /** End Box Shadow */

        /** Start Border */
        verticalTimelineBorder,
        verticalTimelineBorderColor,
        verticalTimelineBorderHoverColor,
        verticalTimelineBorderColorSwitcher,
        verticalTimelineBorderUnits,
        verticalTimelineDesktopBorderWidth,
        verticalTimelineTabBorderWidth,
        verticalTimelineMobileBorderWidth,
        verticalTimelineBorderLink,
        verticalTimelineBorderRadiusUnits,
        verticalTimelineDesktopBorderRadiusWidth,
        verticalTimelineTabBorderRadiusWidth,
        verticalTimelineMobileBorderRadiusWidth,
        verticalTimelineBorderRadiusLink,
        /** End Border */

        /** Start Background */
        verticalTimelineBgColorSwitcher,
        verticalTimelineBgType,
        verticalTimelineBgClassicColor,
        verticalTimelineBgGradientColor,
        verticalTimelineBgCustomGradientSwitcher,
        verticalTimelineBgCustomGradientInputValue,
        verticalTimelineBgImageUrl,
        verticalTimelineBgImageAlt,
        verticalTimelineBgImageID,
        verticalTimelineBgImagePosition,
        verticalTimelineBgImageAttachment,
        verticalTimelineBgImageRepeat,
        verticalTimelineBgImageSize,
        verticalTimelineBgHoverType,
        verticalTimelineBgHoverClassicColor,
        verticalTimelineBgHoverGradientColor,
        verticalTimelineBgHoverCustomGradientSwitcher,
        verticalTimelineBgHoverCustomGradientInputValue,
        verticalTimelineBgHoverImageUrl,
        verticalTimelineBgHoverImageAlt,
        verticalTimelineBgHoverImageID,
        verticalTimelineBgHoverImagePosition,
        verticalTimelineBgHoverImageAttachment,
        verticalTimelineBgHoverImageRepeat,
        verticalTimelineBgHoverImageSize,
        /** End Background */

        /** Start Padding */
        verticalTimelinePaddingUnits,
        verticalTimelineDesktopPadding,
        verticalTimelineTabPadding,
        verticalTimelineMobilePadding,
        verticalTimelinePaddingLink,
        /** End Padding */

        /** Start Margin */
        verticalTimelineMarginUnits,
        verticalTimelineDesktopMargin,
        verticalTimelineTabMargin,
        verticalTimelineMobileMargin,
        verticalTimelineMarginLink,
        /** End Margin */

        /** Start Class & ID Setting */
        verticalTimelineGlobalZIndex,
        verticalTimelineCustomCSS,
        verticalTimelineWrapperID,
        verticalTimelineWrapperClass,
        /** End Class & ID Setting */
    } = attributes;

    // verticalTimeline BorderWidth Function
    const handleverticalTimelineBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (verticalTimelineBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        verticalTimelineDesktopBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        verticalTimelineTabBorderWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        verticalTimelineMobileBorderWidth: {
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
                    setAttributes({ verticalTimelineDesktopBorderWidth: { ...verticalTimelineDesktopBorderWidth, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ verticalTimelineTabBorderWidth: { ...verticalTimelineTabBorderWidth, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ verticalTimelineMobileBorderWidth: { ...verticalTimelineMobileBorderWidth, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleverticalTimelineBorderCombineBtn = () => {
        setAttributes({ verticalTimelineBorderLink: !verticalTimelineBorderLink });
    }

    const handleverticalTimelineBorderUnitsHandler = (unit) => {
        setAttributes({
            verticalTimelineBorderUnits: {
                ...verticalTimelineBorderUnits,
                [deviceType]: unit
            }
        })
    }

    // verticalTimeline BorderRadiusWidth Function
    const handleverticalTimelineBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (verticalTimelineBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        verticalTimelineDesktopBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        verticalTimelineTabBorderRadiusWidth: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        verticalTimelineMobileBorderRadiusWidth: {
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
                    setAttributes({ verticalTimelineDesktopBorderRadiusWidth: { ...verticalTimelineDesktopBorderRadiusWidth, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ verticalTimelineTabBorderRadiusWidth: { ...verticalTimelineTabBorderRadiusWidth, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ verticalTimelineMobileBorderRadiusWidth: { ...verticalTimelineMobileBorderRadiusWidth, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleverticalTimelineBorderRadiusCombineBtn = () => {
        setAttributes({ verticalTimelineBorderRadiusLink: !verticalTimelineBorderRadiusLink });
    }

    const handleverticalTimelineBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            verticalTimelineBorderRadiusUnits: {
                ...verticalTimelineBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    // verticalTimeline Padding Functionb
    const handleverticalTimelinePaddingUnitChange = (event, position) => {
        const value = event.target.value;
        if (verticalTimelinePaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        verticalTimelineDesktopPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        verticalTimelineTabPadding: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        verticalTimelineMobilePadding: {
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
                    setAttributes({ verticalTimelineDesktopPadding: { ...verticalTimelineDesktopPadding, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ verticalTimelineTabPadding: { ...verticalTimelineTabPadding, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ verticalTimelineMobilePadding: { ...verticalTimelineMobilePadding, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleverticalTimelinePaddingCombineBtn = () => {
        setAttributes({ verticalTimelinePaddingLink: !verticalTimelinePaddingLink });
    }

    const handleverticalTimelinePaddingUnitsHandler = (unit) => {
        setAttributes({
            verticalTimelinePaddingUnits: {
                ...verticalTimelinePaddingUnits,
                [deviceType]: unit
            }
        })
    }

    // verticalTimeline content margin
    const handleverticalTimelineMarginUnitChange = (event, position) => {
        const value = event.target.value;
        if (verticalTimelineMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        verticalTimelineDesktopMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        verticalTimelineTabMargin: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        verticalTimelineMobileMargin: {
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
                    setAttributes({ verticalTimelineDesktopMargin: { ...verticalTimelineDesktopMargin, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ verticalTimelineTabMargin: { ...verticalTimelineTabMargin, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ verticalTimelineMobileMargin: { ...verticalTimelineMobileMargin, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleverticalTimelineMarginCombineBtn = () => {
        setAttributes({ verticalTimelineMarginLink: !verticalTimelineMarginLink });
    }

    const handleverticalTimelineMarginUnitsHandler = (unit) => {
        setAttributes({
            verticalTimelineMarginUnits: {
                ...verticalTimelineMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const deviceType = useDeviceType();

    /**
     * Inspector General Controls
     */
    const generalControls = (
        <>
            <PanelBody
                title={__("General", "frontis-blocks")}
                initialOpen={true}
            >
                <ToggleControl
                    label={__("Show Section Label", "frontis-blocks")}
                    checked={showSectionLabelSwitcher}
                    onChange={(value) => setAttributes({ showSectionLabelSwitcher: value })}
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
                title={__("Progress Line", "frontis-blocks")}
                initialOpen={true}
            >

                <FB_SwitcherControl
                    label={__("Line color", "frontis-blocks")}
                    globalSwitcher={verticalTimelineItemlineColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ verticalTimelineItemlineColorSwitcher: value })}
                    options={[
                        { label: __("Progress line", "frontis-blocks"), value: "progress" },
                        { label: __("Base line", "frontis-blocks"), value: "base" },
                    ]}
                />

                {verticalTimelineItemlineColorSwitcher === "progress" && (
                    <>
                        <FB_ColorControl
                            label={__("Progress Line Color", "frontis-blocks")}
                            globalColor={verticalTimelineItemProgressLineColor}
                            setGlobalColor={(value) => setAttributes({ verticalTimelineItemProgressLineColor: value })}
                        />
                        <FB_Range
                            min={0}
                            max={100}
                            label={__("Thickness", "frontis-blocks")}
                            rangeValue={verticalTimelineProgressLineWidth}
                            onChangeHandler={(value) => setAttributes({ verticalTimelineProgressLineWidth: value })}
                            rangeUnitHandler={(value) => setAttributes({ verticalTimelineProgressLineWidthUnits: value })}
                            deviceType={deviceType}
                            units={verticalTimelineProgressLineWidthUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                        />
                    </>
                )}

                {verticalTimelineItemlineColorSwitcher === "base" && (
                    <>
                        <FB_ColorControl
                            label={__("Base Color", "frontis-blocks")}
                            globalColor={verticalTimelineItemBaseLineColor}
                            setGlobalColor={(value) => setAttributes({ verticalTimelineItemBaseLineColor: value })}
                        />
                        <FB_Range
                            min={0}
                            max={100}
                            label={__("Thickness", "frontis-blocks")}
                            rangeValue={verticalTimelineBaseLineWidth}
                            onChangeHandler={(value) => setAttributes({ verticalTimelineBaseLineWidth: value })}
                            rangeUnitHandler={(value) => setAttributes({ verticalTimelineBaseLineWidthUnits: value })}
                            deviceType={deviceType}
                            units={verticalTimelineBaseLineWidthUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                        />

                    </>

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
                    rangeValue={verticalTimelineGlobalZIndex}
                    onChangeHandler={(value) => setAttributes({ verticalTimelineGlobalZIndex: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}
                />

                <FB_InputControl
                    label={__("CSS ID", "frontis-blocks")}
                    value={verticalTimelineWrapperID}
                    onChangeValue={(value) => setAttributes({ verticalTimelineWrapperID: value })}
                    helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                />

                <FB_InputControl
                    label={__("CSS Class", "frontis-blocks")}
                    value={verticalTimelineWrapperClass}
                    onChangeValue={(value) => setAttributes({ verticalTimelineWrapperClass: value })}
                    helpText={__("Separate with spaces key.", "frontis-blocks")}
                />
            </PanelBody>

            <PanelBody
                title={__("Padding & Margin", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleverticalTimelineMarginUnitsHandler}
                    spacingUnits={verticalTimelineMarginUnits}
                    spacingDesktop={verticalTimelineDesktopMargin}
                    spacingTablet={verticalTimelineTabMargin}
                    spacingMobile={verticalTimelineMobileMargin}
                    handleSpacingUnitHandler={handleverticalTimelineMarginUnitChange}
                    spacingCombineBtn={verticalTimelineMarginLink}
                    spacingCombineBtnHandler={handleverticalTimelineMarginCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleverticalTimelinePaddingUnitsHandler}
                    spacingUnits={verticalTimelinePaddingUnits}
                    spacingDesktop={verticalTimelineDesktopPadding}
                    spacingTablet={verticalTimelineTabPadding}
                    spacingMobile={verticalTimelineMobilePadding}
                    handleSpacingUnitHandler={handleverticalTimelinePaddingUnitChange}
                    spacingCombineBtn={verticalTimelinePaddingLink}
                    spacingCombineBtnHandler={handleverticalTimelinePaddingCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody title="Background Color" initialOpen={false} >
                <FB_BackgroundColorControl
                    bgColorSwitcher={verticalTimelineBgColorSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ verticalTimelineBgColorSwitcher: value })}
                    normalBackgroundType={verticalTimelineBgType}
                    setNormalBackgroundType={(value) => setAttributes({ verticalTimelineBgType: value })}
                    normalClassicColor={verticalTimelineBgClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ verticalTimelineBgClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={verticalTimelineBgGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ verticalTimelineBgGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={verticalTimelineBgCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ verticalTimelineBgCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={verticalTimelineBgCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ verticalTimelineBgCustomGradientInputValue: value })}
                    normalBackgroundImageUrl={verticalTimelineBgImageUrl}
                    setNormalBackgroundImageUrl={(value) => setAttributes({ verticalTimelineBgImageUrl: value })}
                    normalBackgroundImageAlt={verticalTimelineBgImageAlt}
                    setNormalBackgroundImageAlt={(value) => setAttributes({ verticalTimelineBgImageAlt: value })}
                    normalBackgroundImageID={verticalTimelineBgImageID}
                    setNormalBackgroundImageID={(value) => setAttributes({ verticalTimelineBgImageID: value })}
                    normalBackgroundImagePosition={verticalTimelineBgImagePosition}
                    setNormalBackgroundImagePosition={(value) => setAttributes({ verticalTimelineBgImagePosition: value })}
                    normalBackgroundImageAttachment={verticalTimelineBgImageAttachment}
                    setNormalBackgroundImageAttachment={(value) => setAttributes({ verticalTimelineBgImageAttachment: value })}
                    normalBackgroundImageRepeat={verticalTimelineBgImageRepeat}
                    setNormalBackgroundImageRepeat={(value) => setAttributes({ verticalTimelineBgImageRepeat: value })}
                    normalBackgroundImageSize={verticalTimelineBgImageSize}
                    setNormalBackgroundImageSize={(value) => setAttributes({ verticalTimelineBgImageSize: value })}
                    hoverBackgroundType={verticalTimelineBgHoverType}
                    setHoverBackgroundType={(value) => setAttributes({ verticalTimelineBgHoverType: value })}
                    hoverClassicColor={verticalTimelineBgHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ verticalTimelineBgHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={verticalTimelineBgHoverGradientColor}
                    setHoverGradientColor={(value) => setAttributes({ verticalTimelineBgHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={verticalTimelineBgHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ verticalTimelineBgHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={verticalTimelineBgHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ verticalTimelineBgHoverCustomGradientInputValue: value })}
                    hoverBackgroundImageUrl={verticalTimelineBgHoverImageUrl}
                    setBgHoverImageUrl={(value) => setAttributes({ verticalTimelineBgHoverImageUrl: value })}
                    hoverBackgroundImageAlt={verticalTimelineBgHoverImageAlt}
                    setBgHoverImageAlt={(value) => setAttributes({ verticalTimelineBgHoverImageAlt: value })}
                    hoverBackgroundImageID={verticalTimelineBgHoverImageID}
                    setBgHoverImageID={(value) => setAttributes({ verticalTimelineBgHoverImageID: value })}
                    hoverBackgroundImagePosition={verticalTimelineBgHoverImagePosition}
                    setBgHoverImagePosition={(value) => setAttributes({ verticalTimelineBgHoverImagePosition: value })}
                    hoverBackgroundImageAttachment={verticalTimelineBgHoverImageAttachment}
                    setBgHoverImageAttachment={(value) => setAttributes({ verticalTimelineBgHoverImageAttachment: value })}
                    hoverBackgroundImageRepeat={verticalTimelineBgHoverImageRepeat}
                    setBgHoverImageRepeat={(value) => setAttributes({ verticalTimelineBgHoverImageRepeat: value })}
                    hoverBackgroundImageSize={verticalTimelineBgHoverImageSize}
                    setBgHoverImageSize={(value) => setAttributes({ verticalTimelineBgHoverImageSize: value })}
                />
            </PanelBody>

            <PanelBody
                title={__("Border & Border Radius", "frontis-blocks")}
                initialOpen={false}
                className="fb-setting-border-setting-wrapper"
            >
                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={verticalTimelineBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ verticalTimelineBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={verticalTimelineBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ verticalTimelineBorderColorSwitcher: value })}
                />

                {verticalTimelineBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={verticalTimelineBorderColor}
                        setGlobalColor={(value) => setAttributes({ verticalTimelineBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {verticalTimelineBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={verticalTimelineBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ verticalTimelineBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleverticalTimelineBorderUnitsHandler}
                    spacingUnits={verticalTimelineBorderUnits}
                    spacingDesktop={verticalTimelineDesktopBorderWidth}
                    spacingTablet={verticalTimelineTabBorderWidth}
                    spacingMobile={verticalTimelineMobileBorderWidth}
                    handleSpacingUnitHandler={handleverticalTimelineBorderUnitChange}
                    spacingCombineBtn={verticalTimelineBorderLink}
                    spacingCombineBtnHandler={handleverticalTimelineBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleverticalTimelineBorderRadiusUnitsHandler}
                    spacingUnits={verticalTimelineBorderRadiusUnits}
                    spacingDesktop={verticalTimelineDesktopBorderRadiusWidth}
                    spacingTablet={verticalTimelineTabBorderRadiusWidth}
                    spacingMobile={verticalTimelineMobileBorderRadiusWidth}
                    handleSpacingUnitHandler={handleverticalTimelineBorderRadiusUnitChange}
                    spacingCombineBtn={verticalTimelineBorderRadiusLink}
                    spacingCombineBtnHandler={handleverticalTimelineBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={verticalTimelineGlobalBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ verticalTimelineGlobalBoxShadowSwitcher: value })}
                />

                {verticalTimelineGlobalBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) =>
                            setAttributes({ verticalTimelineGlobalBoxShadowValues: value })
                        }
                        initialShadowValue={verticalTimelineGlobalBoxShadowValues}
                        onBoxShadowStyleChange={(value) =>
                            setAttributes({
                                verticalTimelineGlobalBoxShadowCssValue: value,
                            })
                        }
                    />
                )}

                {verticalTimelineGlobalBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) =>
                            setAttributes({ verticalTimelineGlobalHoverBoxShadowValues: value })
                        }
                        initialShadowValue={verticalTimelineGlobalHoverBoxShadowValues}
                        onBoxShadowStyleChange={(value) =>
                            setAttributes({
                                verticalTimelineGlobalHoverBoxShadowCssValue: value,
                            })
                        }
                    />
                )}
            </PanelBody>

            <PanelBody
                title={__("Responsive Control", "frontis-blocks")}
                initialOpen={false}
                className="fb-setting-responsive-control-wrapper"
            >
                <FB_VisibilityControl
                    desktopValue={verticalTimelineDesktopSwitcher}
                    setDesktopValue={(value) => setAttributes({ verticalTimelineDesktopSwitcher: value })}

                    tabletValue={verticalTimelineTabletSwitcher}
                    setTabletValue={(value) => setAttributes({ verticalTimelineTabletSwitcher: value })}

                    mobileValue={verticalTimelineMobileSwitcher}
                    setMobileValue={(value) => setAttributes({ verticalTimelineMobileSwitcher: value })}
                />
            </PanelBody>

            <PanelBody
                title={__("Custom CSS", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_CustomCSSEditor
                    value={verticalTimelineCustomCSS}
                    onChangeValue={(value) => setAttributes({ verticalTimelineCustomCSS: value })}
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
