import { __ } from '@wordpress/i18n';

import {
    InspectorControls,
} from '@wordpress/block-editor';

import {
    SelectControl,
    PanelBody,
    TabPanel,
    BaseControl,
    vertcalTimelineContentBox,
    vertcalTimelineContentBoxGroup,
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

    const deviceType = useDeviceType();
    const {

        /** Start General Settings */
        showSectionLabelSwitcher,
        verticalTimelineItemSectionLabel,
        showPhaseTitleSwitcher,
        verticalTimelineItemPhaseTitle,
        verticalTimelineItemIcon,
        /** End General Settings */

        /** Start Content Box Background */
        vertcalTimelineContentBoxGlobalBgColorSwitcher,
        vertcalTimelineContentBoxGlobalNormalBackgroundType,
        vertcalTimelineContentBoxGlobalNormalClassicColor,
        vertcalTimelineContentBoxGlobalNormalGradientColor,
        vertcalTimelineContentBoxGlobalNormalCustomGradientSwitcher,
        vertcalTimelineContentBoxGlobalNormalCustomGradientInputValue,

        vertcalTimelineContentBoxGlobalHoverBackgroundType,
        vertcalTimelineContentBoxGlobalHoverClassicColor,
        vertcalTimelineContentBoxGlobalHoverGradientColor,
        vertcalTimelineContentBoxGlobalHoverCustomGradientSwitcher,
        vertcalTimelineContentBoxGlobalHoverCustomGradientInputValue,
        /** End Content Box  Background */

        vertcalTimelineContentBoxGlobalBorder,
        vertcalTimelineContentBoxGlobalBorderColorSwitcher,
        vertcalTimelineContentBoxGlobalBorderColor,
        vertcalTimelineContentBoxGlobalBorderHoverColor,
        vertcalTimelineContentBoxGlobalBorderUnits,
        vertcalTimelineContentBoxGlobalBorderDesktop,
        vertcalTimelineContentBoxGlobalBorderTablet,
        vertcalTimelineContentBoxGlobalBorderMobile,
        vertcalTimelineContentBoxGlobalBorderLink,

        vertcalTimelineContentBoxGlobalBorderRadiusUnits,
        vertcalTimelineContentBoxGlobalBorderRadiusDesktop,
        vertcalTimelineContentBoxGlobalBorderRadiusTablet,
        vertcalTimelineContentBoxGlobalBorderRadiusMobile,
        vertcalTimelineContentBoxGlobalBorderRadiusLink,

        /** Start Content Box Padding */
        vertcalTimelineContentBoxPaddingUnits,
        vertcalTimelineContentBoxPaddingDesktop,
        vertcalTimelineContentBoxPaddingTablet,
        vertcalTimelineContentBoxPaddingMobile,
        vertcalTimelineContentBoxPaddingLink,
        /** End Content Box Padding */

        /** Start Content Box Margin */
        vertcalTimelineContentBoxMarginUnits,
        vertcalTimelineContentBoxMarginDesktop,
        vertcalTimelineContentBoxMarginTablet,
        vertcalTimelineContentBoxMarginMobile,
        vertcalTimelineContentBoxMarginLink,
        /** End Content Box Margin */

        vertcalTimelineContentBoxBoxShadowSwitcher,
        vertcalTimelineContentBoxBoxShadowValues,
        vertcalTimelineContentBoxBoxShadowHoverValues,

        /** Start Class & ID Setting */
        verticalTimelineItemGlobalZIndex,
        verticalTimelineItemCustomCSS,
        verticalTimelineItemWraperID,
        verticalTimelineItemWraperClass,
        /** End Class & ID Setting */
    } = attributes;

    /** Start Content Box Padding */
    const vertcalTimelineContentBoxPaddingUnitsChange = (event, position) => {
        const value = event.target.value;
        if (vertcalTimelineContentBoxPaddingLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ vertcalTimelineContentBoxPaddingDesktop: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Tablet':
                    setAttributes({ vertcalTimelineContentBoxPaddingTablet: { top: value, right: value, bottom: value, left: value } });
                    break;
                case 'Mobile':
                    setAttributes({ vertcalTimelineContentBoxPaddingMobile: { top: value, right: value, bottom: value, left: value } });
                    break;
                default:
                    break;
            }
        } else {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({ vertcalTimelineContentBoxPaddingDesktop: { ...vertcalTimelineContentBoxPaddingDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ vertcalTimelineContentBoxPaddingTablet: { ...vertcalTimelineContentBoxPaddingTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ vertcalTimelineContentBoxPaddingMobile: { ...vertcalTimelineContentBoxPaddingMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const vertcalTimelineContentBoxPaddingLinkBtn = () => {
        setAttributes({
            vertcalTimelineContentBoxPaddingLink: !vertcalTimelineContentBoxPaddingLink
        });
    };

    const vertcalTimelineContentBoxPaddingUnitsHandler = (unit) => {
        setAttributes({
            vertcalTimelineContentBoxPaddingUnits: {
                ...vertcalTimelineContentBoxPaddingUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Content Box Padding */

    /** Start Google Map Margin */
    const vertcalTimelineContentBoxMarginUnitsChange = (event, position) => {
        const value = event.target.value;
        if (vertcalTimelineContentBoxMarginLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        vertcalTimelineContentBoxMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        vertcalTimelineContentBoxMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        vertcalTimelineContentBoxMarginMobile: {
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
                    setAttributes({ vertcalTimelineContentBoxMarginDesktop: { ...vertcalTimelineContentBoxMarginDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ vertcalTimelineContentBoxMarginTablet: { ...vertcalTimelineContentBoxMarginTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ vertcalTimelineContentBoxMarginMobile: { ...vertcalTimelineContentBoxMarginMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }
    };

    const vertcalTimelineContentBoxMarginLinkBtn = () => {
        setAttributes({
            vertcalTimelineContentBoxMarginLink: !vertcalTimelineContentBoxMarginLink
        });
    };

    const vertcalTimelineContentBoxMarginUnitsHandler = (unit) => {
        setAttributes({
            vertcalTimelineContentBoxMarginUnits: {
                ...vertcalTimelineContentBoxMarginUnits,
                [deviceType]: unit
            }
        });
    };
    /** End Google Map Margin */

    /** Start Global border */
    const handleGlobalBorderUnitChange = (event, position) => {
        const value = event.target.value;
        if (vertcalTimelineContentBoxGlobalBorderLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        vertcalTimelineContentBoxGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        vertcalTimelineContentBoxGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        vertcalTimelineContentBoxGlobalBorderMobile: {
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
                    setAttributes({ vertcalTimelineContentBoxGlobalBorderDesktop: { ...vertcalTimelineContentBoxGlobalBorderDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ vertcalTimelineContentBoxGlobalBorderTablet: { ...vertcalTimelineContentBoxGlobalBorderTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ vertcalTimelineContentBoxGlobalBorderMobile: { ...vertcalTimelineContentBoxGlobalBorderMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes({ vertcalTimelineContentBoxGlobalBorderLink: !vertcalTimelineContentBoxGlobalBorderLink });
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes({
            vertcalTimelineContentBoxGlobalBorderUnits: {
                ...vertcalTimelineContentBoxGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }
    /** End Border */

    /** Start Global border radius*/
    const handleGlobalBorderRadiusUnitChange = (event, position) => {
        const value = event.target.value;
        if (vertcalTimelineContentBoxGlobalBorderRadiusLink) {
            switch (deviceType) {
                case 'Desktop':
                    setAttributes({
                        vertcalTimelineContentBoxGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Tablet':
                    setAttributes({
                        vertcalTimelineContentBoxGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    });
                    break;
                case 'Mobile':
                    setAttributes({
                        vertcalTimelineContentBoxGlobalBorderRadiusMobile: {
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
                    setAttributes({ vertcalTimelineContentBoxGlobalBorderRadiusDesktop: { ...vertcalTimelineContentBoxGlobalBorderRadiusDesktop, [position]: value } });
                    break;
                case 'Tablet':
                    setAttributes({ vertcalTimelineContentBoxGlobalBorderRadiusTablet: { ...vertcalTimelineContentBoxGlobalBorderRadiusTablet, [position]: value } });
                    break;
                case 'Mobile':
                    setAttributes({ vertcalTimelineContentBoxGlobalBorderRadiusMobile: { ...vertcalTimelineContentBoxGlobalBorderRadiusMobile, [position]: value } });
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes({ vertcalTimelineContentBoxGlobalBorderRadiusLink: !vertcalTimelineContentBoxGlobalBorderRadiusLink });
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes({
            vertcalTimelineContentBoxGlobalBorderRadiusUnits: {
                ...vertcalTimelineContentBoxGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }
    /** end Global border */
    /** End Global Border Radius */
    /** End Border Radius */

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

                {showSectionLabelSwitcher && (
                    <FB_InputControl
                        label={__("Section Label", "frontis-blocks")}
                        value={verticalTimelineItemSectionLabel}
                        onChangeValue={(value) => setAttributes({ verticalTimelineItemSectionLabel: value })}
                    />
                )}

                <ToggleControl
                    label={__("Show Phase Title", "frontis-blocks")}
                    checked={showPhaseTitleSwitcher}
                    onChange={(value) => setAttributes({ showPhaseTitleSwitcher: value })}
                />

                {showPhaseTitleSwitcher && (
                    <FB_InputControl
                        label={__("Phase Title", "frontis-blocks")}
                        value={verticalTimelineItemPhaseTitle}
                        onChangeValue={(value) => setAttributes({ verticalTimelineItemPhaseTitle: value })}
                    />
                )}

                <FBIconPicker
                    value={verticalTimelineItemIcon}
                    setIconHandler={(value) => setAttributes({ verticalTimelineItemIcon: value })}
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
                title={__("Content Box", "frontis-blocks")}
                initialOpen={true}
            >
                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={vertcalTimelineContentBoxPaddingUnitsHandler}
                    spacingUnits={vertcalTimelineContentBoxPaddingUnits}
                    spacingDesktop={vertcalTimelineContentBoxPaddingDesktop}
                    spacingTablet={vertcalTimelineContentBoxPaddingTablet}
                    spacingMobile={vertcalTimelineContentBoxPaddingMobile}
                    handleSpacingUnitHandler={vertcalTimelineContentBoxPaddingUnitsChange}
                    spacingCombineBtn={vertcalTimelineContentBoxPaddingLink}
                    spacingCombineBtnHandler={vertcalTimelineContentBoxPaddingLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={vertcalTimelineContentBoxMarginUnitsHandler}
                    spacingUnits={vertcalTimelineContentBoxMarginUnits}
                    spacingDesktop={vertcalTimelineContentBoxMarginDesktop}
                    spacingTablet={vertcalTimelineContentBoxMarginTablet}
                    spacingMobile={vertcalTimelineContentBoxMarginMobile}
                    handleSpacingUnitHandler={vertcalTimelineContentBoxMarginUnitsChange}
                    spacingCombineBtn={vertcalTimelineContentBoxMarginLink}
                    spacingCombineBtnHandler={vertcalTimelineContentBoxMarginLinkBtn}
                    setAttributes={setAttributes}
                />

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={vertcalTimelineContentBoxGlobalBgColorSwitcher}
                    setBgColorSwitcher={(value) => setAttributes({ vertcalTimelineContentBoxGlobalBgColorSwitcher: value })}

                    normalBackgroundType={vertcalTimelineContentBoxGlobalNormalBackgroundType}
                    setNormalBackgroundType={(value) => setAttributes({ vertcalTimelineContentBoxGlobalNormalBackgroundType: value })}
                    normalClassicColor={vertcalTimelineContentBoxGlobalNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ vertcalTimelineContentBoxGlobalNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={vertcalTimelineContentBoxGlobalNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ vertcalTimelineContentBoxGlobalNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={vertcalTimelineContentBoxGlobalNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ vertcalTimelineContentBoxGlobalNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={vertcalTimelineContentBoxGlobalNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ vertcalTimelineContentBoxGlobalNormalCustomGradientInputValue: value })}

                    hoverBackgroundType={vertcalTimelineContentBoxGlobalHoverBackgroundType}
                    setHoverBackgroundType={(value) => setAttributes({ vertcalTimelineContentBoxGlobalHoverBackgroundType: value })}
                    hoverClassicColor={vertcalTimelineContentBoxGlobalHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ vertcalTimelineContentBoxGlobalHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={vertcalTimelineContentBoxGlobalHoverGradientColor}
                    setHoverGradientColor={(value) => setAttributes({ vertcalTimelineContentBoxGlobalHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={vertcalTimelineContentBoxGlobalHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ vertcalTimelineContentBoxGlobalHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={vertcalTimelineContentBoxGlobalHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ vertcalTimelineContentBoxGlobalHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}

                />

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={vertcalTimelineContentBoxGlobalBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ vertcalTimelineContentBoxGlobalBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={vertcalTimelineContentBoxGlobalBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ vertcalTimelineContentBoxGlobalBorderColorSwitcher: value })}
                />

                {vertcalTimelineContentBoxGlobalBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={vertcalTimelineContentBoxGlobalBorderColor}
                        setGlobalColor={(value) => setAttributes({ vertcalTimelineContentBoxGlobalBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {vertcalTimelineContentBoxGlobalBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={vertcalTimelineContentBoxGlobalBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ vertcalTimelineContentBoxGlobalBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                    spacingUnits={vertcalTimelineContentBoxGlobalBorderUnits}
                    spacingDesktop={vertcalTimelineContentBoxGlobalBorderDesktop}
                    spacingTablet={vertcalTimelineContentBoxGlobalBorderTablet}
                    spacingMobile={vertcalTimelineContentBoxGlobalBorderMobile}
                    handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                    spacingCombineBtn={vertcalTimelineContentBoxGlobalBorderLink}
                    spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                    spacingUnits={vertcalTimelineContentBoxGlobalBorderRadiusUnits}
                    spacingDesktop={vertcalTimelineContentBoxGlobalBorderRadiusDesktop}
                    spacingTablet={vertcalTimelineContentBoxGlobalBorderRadiusTablet}
                    spacingMobile={vertcalTimelineContentBoxGlobalBorderRadiusMobile}
                    handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                    spacingCombineBtn={vertcalTimelineContentBoxGlobalBorderRadiusLink}
                    spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={vertcalTimelineContentBoxBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ vertcalTimelineContentBoxBoxShadowSwitcher: value })}
                />

                {vertcalTimelineContentBoxBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ vertcalTimelineContentBoxBoxShadowValues: value })}
                        initialShadowValue={vertcalTimelineContentBoxBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ vertcalTimelineContentBoxBoxShadowCssValue: value })}
                    />
                )}

                {vertcalTimelineContentBoxBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ vertcalTimelineContentBoxBoxShadowHoverValues: value })}
                        initialShadowValue={vertcalTimelineContentBoxBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ vertcalTimelineContentBoxBoxShadowHoverCssValue: value })}
                    />
                )}

            </PanelBody>

            <PanelBody
                title={__("Section Label", "frontis-blocks")}
                initialOpen={false}
            >

            </PanelBody>

            <PanelBody
                title={__("Phase Title", "frontis-blocks")}
                initialOpen={false}
            >

            </PanelBody>

            <PanelBody
                title={__("Icon", "frontis-blocks")}
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
            <PanelBody
                title={__("Layout", "frontis-blocks")}
                initialOpen={true}
            >
                <FB_Range
                    min={0}
                    max={10000000}
                    label={__("Z Index", "frontis-blocks")}
                    rangeValue={verticalTimelineItemGlobalZIndex}
                    onChangeHandler={(value) => setAttributes({ verticalTimelineItemGlobalZIndex: value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}
                />

                <FB_InputControl
                    label={__("CSS ID", "frontis-blocks")}
                    value={verticalTimelineItemWraperID}
                    onChangeValue={(value) => setAttributes({ verticalTimelineItemWraperID: value })}
                    helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                />

                <FB_InputControl
                    label={__("CSS Class", "frontis-blocks")}
                    value={verticalTimelineItemWraperClass}
                    onChangeValue={(value) => setAttributes({ verticalTimelineItemWraperClass: value })}
                    helpText={__("Separate with spaces key.", "frontis-blocks")}
                />
            </PanelBody>

            <PanelBody
                title={__("Custom CSS", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_CustomCSSEditor
                    value={verticalTimelineItemCustomCSS}
                    onChangeValue={(value) => setAttributes({ verticalTimelineItemCustomCSS: value })}
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
