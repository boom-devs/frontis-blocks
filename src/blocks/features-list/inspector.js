import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_Range from '@Components/range';
import FB_ColorControl from '@Components/color-control';
import FB_Spacing from '@Components/spacing';
import FB_Color from '@Components/color';
import FB_TypographyControl from '@Components/typography-control';
import FB_UrlControl from '@Components/url-control';


import { 
    SelectControl,
    PanelBody,
    TabPanel,
    BaseControl,
    Button,
    ButtonGroup,
    ToggleControl,
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
    HEADING,
    FONT_FAMILYS,
    BORDER_STYLES,
} from "./constants/constants";

import SortableItem from './sortableItem';
import FB_ResponsiveControl from '@Components/responsive-control';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const { 
        blockID,
        deviceType,
        FeatureItems,
        FeatureTag,
        FeatureAlignment,
        FeatureIconAlignment,
        FeatureIconShape,

        FeatureListGap,
        FeatureListGapUnits,

        /** Icon Style */
        FeatureIconColorSwitcher,
        FeatureIconColor,
        FeatureIconHoverColor,

        FeatureIconBgColorSwitcher,
        FeatureIconBgColor,
        FeatureIconBgHoverColor,

        FeatureIconSize,
        FeatureIconSizeUnits,
        FeatureIconBgSize,
        FeatureIconBgSizeUnits,
        FeatureIconSpacing,
        FeatureIconSpacingUnits,
        /** End Icon Style */

        /** Title Style */

        FeatureTitleFontFamily,
        FeatureTitleFontSize,
        FeatureTitleFontSizeUnits,
        FeatureTitleFontWeight,
        FeatureTitleFontStyle,
        FeatureTitleTextTransform,
        FeatureTitleTextDecoration,
        FeatureTitleLetterSpacing,
        FeatureTitleLetterSpacingUnits,
        FeatureTitleLineHeight,
        FeatureTitleLineHeightUnits,

        FeatureTitleColorSwitcher,
        FeatureTitleColor,
        FeatureTitleHoverColor,
        /** End Title Style */

        /** Description Style */
        FeatureDescFontFamily,
        FeatureDescFontSize,
        FeatureDescFontSizeUnits,
        FeatureDescFontWeight,
        FeatureDescFontStyle,
        FeatureDescTextTransform,
        FeatureDescTextDecoration,
        FeatureDescLetterSpacing,
        FeatureDescLetterSpacingUnits,
        FeatureDescLineHeight,
        FeatureDescLineHeightUnits,

        FeatureDescColorSwitcher,
        FeatureDescColor,
        FeatureDescHoverColor,
        /** End Description Style */

        /** Global Style */
        FeatureZIndex,
        FeaturePaddingUnits,
        FeatureDesktopPadding,
        FeatureTabPadding,
        FeatureMobilePadding,
        FeaturePaddingLink,
        FeatureMarginUnits,
        FeatureDesktopMargin,
        FeatureTabMargin,
        FeatureMobileMargin,
        FeatureMarginLink,

        FeatureBgColorSwitcher,
        FeatureBgColor,
        FeatureBgHoverColor,

        FeatureBorder,
        FeatureBorderColor,
        FeatureBorderHoverColor,
        FeatureBorderColorSwitcher,
        FeatureBorderUnits,
        FeatureDesktopBorderWidth,
        FeatureTabBorderWidth,
        FeatureMobileBorderWidth,
        FeatureBorderLink,
        FeatureBorderRadiusUnits,
        FeatureDesktopBorderRadiusWidth,
        FeatureTabBorderRadiusWidth,
        FeatureMobileBorderRadiusWidth,
        FeatureBorderRadiusLink,

        FeatureboxShadowValues,
        FeatureboxShadowCssValue,
        /** End Global Style */

    } = attributes;
    

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockID: "fb-feature-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = FeatureItems.findIndex(item => item.id === active.id);
            const newIndex = FeatureItems.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(FeatureItems, oldIndex, newIndex);
            setAttributes({ FeatureItems: updatedItems });
        }
    };

    const handleAddItem = () => {
        const newItem = { id: `item-${FeatureItems.length + 1}`, Title: `Feature Item ${FeatureItems.length + 1}`, Description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna', FeatureIcon: 'check' };
        setAttributes({ FeatureItems: [...FeatureItems, newItem] });
    };

    const handleChangeItem = (id, key, value) => {
        const updatedItems = FeatureItems.map(item => 
            item.id === id ? { ...item, [key]: value } : item
        );
        setAttributes({ FeatureItems: updatedItems });
    };

    const handleDeleteItem = (id) => {
        const updatedItems = FeatureItems.filter(item => item.id !== id);
        setAttributes({ FeatureItems: updatedItems });
    };
    
    /** Start Padding */
    const [previousPadding, setPreviousPadding] = useState(FeatureDesktopPadding);
    /** Function to update all padding values */
    const updateAllPadding = (value, device) => {
        switch(device) {
            case 'Desktop':
                setAttributes({
                    FeatureDesktopPadding: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Tablet':
                setAttributes({
                    FeatureTabPadding: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Mobile':
                setAttributes({
                    FeatureMobilePadding: {
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
    };

    /** Function to handle input change */
    const handlePaddingInputChange = (e, direction) => {
        const value = e.target.value;
        switch(deviceType) {
            case 'Desktop':
                setAttributes({ FeatureDesktopPadding: { ...FeatureDesktopPadding, [direction]: value } });
                break;
            case 'Tablet':
                setAttributes({ FeatureTabPadding: { ...FeatureTabPadding, [direction]: value } });
                break;
            case 'Mobile':
                setAttributes({ FeatureMobilePadding: { ...FeatureMobilePadding, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all padding values if FeaturePaddingLink is true */
        if (FeaturePaddingLink) {
            updateAllPadding(value, deviceType);
        }
    };

    /** Function to handle FeaturePaddingLink toggle */
    const handleFeaturePaddingLinkToggle = () => {
        if (!FeaturePaddingLink) {
            setAttributes({ FeatureDesktopPadding: previousPadding });
        }
        /** setFeaturePaddingLink(!FeaturePaddingLink) */
        setAttributes({FeaturePaddingLink: !FeaturePaddingLink})
    };

    /** Update previousPadding state when padding changes */
    useEffect(() => {
        setPreviousPadding(FeatureDesktopPadding);
    }, [FeatureDesktopPadding]);

    /** Default padding for desktop (using desktop_padding) */
    const DesktopPadding    = `${FeatureDesktopPadding.top}${FeaturePaddingUnits} ${FeatureDesktopPadding.right}${FeaturePaddingUnits} ${FeatureDesktopPadding.bottom}${FeaturePaddingUnits} ${FeatureDesktopPadding.left}${FeaturePaddingUnits}`;
    const TabPadding        = `${FeatureTabPadding.top}${FeaturePaddingUnits} ${FeatureTabPadding.right}${FeaturePaddingUnits} ${FeatureTabPadding.bottom}${FeaturePaddingUnits} ${FeatureTabPadding.left}${FeaturePaddingUnits}`;
    const MobilePadding     = `${FeatureMobilePadding.top}${FeaturePaddingUnits} ${FeatureMobilePadding.right}${FeaturePaddingUnits} ${FeatureMobilePadding.bottom}${FeaturePaddingUnits} ${FeatureMobilePadding.left}${FeaturePaddingUnits}`;
    /** End Padding */

    /** Start Margin */
    const [previousMargin, setPreviousMargin] = useState(FeatureDesktopMargin);
    /** Function to update all margin values */
    const updateAllMargin = (value, device) => {
        switch(device) {
            case 'Desktop':
                setAttributes({
                    FeatureDesktopMargin: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Tablet':
                setAttributes({
                    FeatureTabMargin: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Mobile':
                setAttributes({
                    FeatureMobileMargin: {
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
    };

    /** Function to handle input change */
    const handleMarginInputChange = (e, direction) => {
        const value = e.target.value;
        switch(deviceType) {
            case 'Desktop':
                setAttributes({ FeatureDesktopMargin: { ...FeatureDesktopMargin, [direction]: value } });
                break;
            case 'Tablet':
                setAttributes({ FeatureTabMargin: { ...FeatureTabMargin, [direction]: value } });
                break;
            case 'Mobile':
                setAttributes({ FeatureMobileMargin: { ...FeatureMobileMargin, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all margin values if marginLink is true */
        if (FeatureMarginLink) {
            updateAllMargin(value, deviceType);
        }
    };

    /** Function to handle marginLink toggle */
    const handleMarginLinkToggle = () => {
        if (!FeatureMarginLink) {
            setAttributes({ FeatureDesktopMargin: previousMargin });
        }
        /** setmarginLink(!marginLink) */
        setAttributes({FeatureMarginLink: !FeatureMarginLink})
    };

    /** Update previousMargin state when margin changes */
    useEffect(() => {
        setPreviousMargin(FeatureDesktopMargin);
    }, [FeatureDesktopMargin]);

    /** Default margin for desktop (using desktop_margin) */
    const DesktopMargin     = `${FeatureDesktopMargin.top}${FeatureMarginUnits} ${FeatureDesktopMargin.right}${FeatureMarginUnits} ${FeatureDesktopMargin.bottom}${FeatureMarginUnits} ${FeatureDesktopMargin.left}${FeatureMarginUnits}`;
    const TabMargin         = `${FeatureTabMargin.top}${FeatureMarginUnits} ${FeatureTabMargin.right}${FeatureMarginUnits} ${FeatureTabMargin.bottom}${FeatureMarginUnits} ${FeatureTabMargin.left}${FeatureMarginUnits}`;
    const MobileMargin      = `${FeatureMobileMargin.top}${FeatureMarginUnits} ${FeatureMobileMargin.right}${FeatureMarginUnits} ${FeatureMobileMargin.bottom}${FeatureMarginUnits} ${FeatureMobileMargin.left}${FeatureMarginUnits}`;
    /** End Margin */


    /** Start Border Width */
    const [previousBorderWidth, setPreviousBorderWidth] = useState(FeatureDesktopBorderWidth);
    /** Function to update all Border Width values */
    const updateAllBorderWidth = (value, device) => {
        switch(device) {
            case 'Desktop':
                setAttributes({
                    FeatureDesktopBorderWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Tablet':
                setAttributes({
                    FeatureTabBorderWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Mobile':
                setAttributes({
                    FeatureMobileBorderWidth: {
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
    };

    /** Function to handle input change */
    const handleBorderWidthInputChange = (e, direction) => {
        const value = e.target.value;
        switch(deviceType) {
            case 'Desktop':
                setAttributes({ FeatureDesktopBorderWidth: { ...FeatureDesktopBorderWidth, [direction]: value } });
                break;
            case 'Tablet':
                setAttributes({ FeatureTabBorderWidth: { ...FeatureTabBorderWidth, [direction]: value } });
                break;
            case 'Mobile':
                setAttributes({ FeatureMobileBorderWidth: { ...FeatureMobileBorderWidth, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all padding values if FeatureBorderLink is true */
        if (FeatureBorderLink) {
            updateAllBorderWidth(value, deviceType);
        }
    };

    /** Function to handle FeatureBorderLink toggle */
    const handleBorderWidthLinkToggle = () => {
        if (!FeatureBorderLink) {
            setAttributes({ FeatureDesktopBorderWidth: previousBorderWidth });
        }
        /** setFeatureBorderLinkLink(!FeatureBorderLink) */
        setAttributes({FeatureBorderLink: !FeatureBorderLink})
    };

    /** Update previousborderWidth state when Border Width changes */
    useEffect(() => {
        setPreviousBorderWidth(FeatureDesktopBorderWidth);
    }, [FeatureDesktopBorderWidth]);

    /** Default Border Width for desktop (using FeatureDesktopBorderWidth) */
    const DesktopBorderWidth    = `${FeatureDesktopBorderWidth.top}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.right}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.bottom}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.left}${FeatureBorderUnits}`;
    const TabBorderWidth        = `${FeatureTabBorderWidth.top}${FeatureBorderUnits} ${FeatureTabBorderWidth.right}${FeatureBorderUnits} ${FeatureTabBorderWidth.bottom}${FeatureBorderUnits} ${FeatureTabBorderWidth.left}${FeatureBorderUnits}`;
    const MobileBorderWidth     = `${FeatureMobileBorderWidth.top}${FeatureBorderUnits} ${FeatureMobileBorderWidth.right}${FeatureBorderUnits} ${FeatureMobileBorderWidth.bottom}${FeatureBorderUnits} ${FeatureMobileBorderWidth.left}${FeatureBorderUnits}`;
    /** End Border Width */

    /** Start Border Radius Width */
    const [previousBorderRadiusWidth, setPreviousBorderRadiusWidth] = useState(FeatureDesktopBorderRadiusWidth);
    /** Function to update all Border Width values */
    const updateAllBorderRadiusWidth = (value, device) => {
        switch(device) {
            case 'Desktop':
                setAttributes({
                    FeatureDesktopBorderRadiusWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Tablet':
                setAttributes({
                    FeatureTabBorderRadiusWidth: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Mobile':
                setAttributes({
                    FeatureMobileBorderRadiusWidth: {
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
    };

    /** Function to handle input change */
    const handleBorderRadiusWidthInputChange = (e, direction) => {
        const value = e.target.value;
        switch(deviceType) {
            case 'Desktop':
                setAttributes({ FeatureDesktopBorderRadiusWidth: { ...FeatureDesktopBorderRadiusWidth, [direction]: value } });
                break;
            case 'Tablet':
                setAttributes({ FeatureTabBorderRadiusWidth: { ...FeatureTabBorderRadiusWidth, [direction]: value } });
                break;
            case 'Mobile':
                setAttributes({ FeatureMobileBorderRadiusWidth: { ...FeatureMobileBorderRadiusWidth, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all padding values if FeatureBorderRadiusLink is true */
        if (FeatureBorderRadiusLink) {
            updateAllBorderRadiusWidth(value, deviceType);
        }
    };

    /** Function to handle FeatureBorderRadiusLink toggle */
    const handleBorderRadiusWidthLinkToggle = () => {
        if (!FeatureBorderRadiusLink) {
            setAttributes({ FeatureDesktopBorderRadiusWidth: previousBorderRadiusWidth });
        }
        /** setFeatureBorderRadiusLinkLink(!FeatureBorderRadiusLink) */
        setAttributes({FeatureBorderRadiusLink: !FeatureBorderRadiusLink})
    };

    /** Update previousBorderRadiusWidth state when Border Width changes */
    useEffect(() => {
        setPreviousBorderRadiusWidth(FeatureDesktopBorderRadiusWidth);
    }, [FeatureDesktopBorderRadiusWidth]);

    /** Default Border Width for desktop (using FeatureDesktopBorderWidth) */
    const DesktopBorderRadiusWidth = `${FeatureDesktopBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
    const TabBorderRadiusWidth = `${FeatureTabBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureTabBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureTabBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureTabBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
    const MobileBorderRadiusWidth = `${FeatureMobileBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureMobileBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureMobileBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureMobileBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
    /** End Border Radius Width */ 

    console.log(FeatureIconShape);
    

    return (
        <>
            <style>
            {`
                .fb-feature-main-wrapper.${blockID} {
                    z-index: ${FeatureZIndex !== undefined ? FeatureZIndex : ''};
                    position: relative;
                }
                .fb-feature-main-wrapper.${blockID} {
                    ${FeatureBgColor !== undefined ? `background-color: ${FeatureBgColor};` : ''};
                    padding: ${DesktopPadding};
                    margin: ${DesktopMargin};
                    border: ${FeatureBorder};
                    border-width: ${DesktopBorderWidth};
                    border-radius: ${DesktopBorderRadiusWidth} !important;
                    ${FeatureBorderColor !== undefined ? `border-color: ${FeatureBorderColor};` : ''};
                    box-shadow: ${FeatureboxShadowCssValue};
                    transition: all .3s ease-in-out;
                }
                .fb-feature-main-wrapper.${blockID}:hover {
                    ${FeatureBgHoverColor !== undefined ? `background-color: ${FeatureBgHoverColor};` : ''};
                    ${FeatureBorderHoverColor !== undefined ? `border-color: ${FeatureBorderHoverColor};` : ''};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:last-child) {
                    padding-bottom: calc(${FeatureListGap.Desktop}${FeatureListGapUnits.Desktop} / 2);
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:first-child) {
                    padding-top: calc(${FeatureListGap.Desktop}${FeatureListGapUnits.Desktop} / 2);  
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon svg {
                    fill: ${FeatureIconColor};
                    height: ${FeatureIconSize.Desktop}${FeatureIconSizeUnits.Desktop};
                    width: ${FeatureIconSize.Desktop}${FeatureIconSizeUnits.Desktop};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon:hover svg {
                    fill: ${FeatureIconHoverColor};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box {
                    margin-right: ${FeatureIconSpacing.Desktop}${FeatureIconSpacingUnits.Desktop}!important; 
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner {
                    background-color: ${FeatureIconBgColor};
                    border-color: ${FeatureIconBgColor};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner:hover {
                    background-color: ${FeatureIconBgHoverColor};
                    border-color: ${FeatureIconBgHoverColor};
                }

                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon {
                    width: ${FeatureIconBgSize.Desktop}${FeatureIconBgSizeUnits.Desktop};
                    height: ${FeatureIconBgSize.Desktop}${FeatureIconBgSizeUnits.Desktop};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-content ${FeatureTag} {
                    ${FeatureTitleFontFamily ? `font-family: ${FeatureTitleFontFamily};` : ''}
                    ${FeatureTitleFontSize.Desktop && FeatureTitleFontSizeUnits.Desktop ? `font-size: ${FeatureTitleFontSize.Desktop}${FeatureTitleFontSizeUnits.Desktop};` : ''}
                    ${FeatureTitleFontWeight ? `font-weight: ${FeatureTitleFontWeight};` : ''}
                    ${FeatureTitleFontStyle ? `font-style: ${FeatureTitleFontStyle};` : ''}
                    ${FeatureTitleTextTransform ? `text-transform: ${FeatureTitleTextTransform};` : ''}
                    ${FeatureTitleTextDecoration ? `text-decoration: ${FeatureTitleTextDecoration};` : ''}
                    ${FeatureTitleLetterSpacing.Desktop && FeatureTitleLetterSpacingUnits.Desktop ? `letter-spacing: ${FeatureTitleLetterSpacing.Desktop}${FeatureTitleLetterSpacingUnits.Desktop};` : ''}
                    ${FeatureTitleLineHeight.Desktop && FeatureTitleLineHeightUnits.Desktop ? `line-height: ${FeatureTitleLineHeight.Desktop}${FeatureTitleLineHeightUnits.Desktop};` : ''}
                    ${FeatureTitleColor ? `color: ${FeatureTitleColor};` : ''}
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-title:hover {
                    ${FeatureTitleHoverColor ? `color: ${FeatureTitleHoverColor};` : ''}
                }

                .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-text {
                    ${FeatureDescFontFamily ? `font-family: ${FeatureDescFontFamily};` : ''}
                    ${FeatureDescFontSize.Desktop && FeatureDescFontSizeUnits.Desktop ? `font-size: ${FeatureDescFontSize.Desktop}${FeatureDescFontSizeUnits.Desktop};` : ''}
                    ${FeatureDescFontWeight ? `font-weight: ${FeatureDescFontWeight};` : ''}
                    ${FeatureDescFontStyle ? `font-style: ${FeatureDescFontStyle};` : ''}
                    ${FeatureDescTextTransform ? `text-transform: ${FeatureDescTextTransform};` : ''}
                    ${FeatureDescTextDecoration ? `text-decoration: ${FeatureDescTextDecoration};` : ''}
                    ${FeatureDescLetterSpacing.Desktop && FeatureDescLetterSpacingUnits.Desktop ? `letter-spacing: ${FeatureDescLetterSpacing.Desktop}${FeatureDescLetterSpacingUnits.Desktop};` : ''}
                    ${FeatureDescLineHeight.Desktop && FeatureDescLineHeightUnits.Desktop ? `line-height: ${FeatureDescLineHeight.Desktop}${FeatureDescLineHeightUnits.Desktop};` : ''}
                    ${FeatureDescColor ? `color: ${FeatureDescColor};` : ''}
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-text:hover {
                    ${FeatureDescHoverColor ? `color: ${FeatureDescHoverColor};` : ''}
                }

                @media only screen and (max-width: 1024px) {

                    .fb-feature-main-wrapper.${blockID} {
                        padding: ${TabPadding};
                        margin: ${TabMargin};
                        border-width: ${TabBorderWidth};
                        border-radius: ${TabBorderRadiusWidth} !important;
                    }

                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:last-child) {
                        padding-bottom: calc(${FeatureListGap.Tablet}${FeatureListGapUnits.Tablet} / 2); 
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:first-child) {
                        padding-top: calc(${FeatureListGap.Tablet}${FeatureListGapUnits.Tablet} / 2);
                    }

                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon svg {
                        height: ${FeatureIconSize.Tablet}${FeatureIconSizeUnits.Tablet};
                        width: ${FeatureIconSize.Tablet}${FeatureIconSizeUnits.Tablet};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon {
                        width: ${FeatureIconBgSize.Tablet}${FeatureIconBgSizeUnits.Tablet};
                        height: ${FeatureIconBgSize.Tablet}${FeatureIconBgSizeUnits.Tablet};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box {
                        margin-right: ${FeatureIconSpacing.Tablet}${FeatureIconSpacingUnits.Tablet}!important;
                    }

                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-content ${FeatureTag} {
                        ${FeatureTitleFontSize.Tablet && FeatureTitleFontSizeUnits.Tablet ? `font-size: ${FeatureTitleFontSize.Tablet}${FeatureTitleFontSizeUnits.Tablet};` : ''}
                        ${FeatureTitleLetterSpacing.Tablet && FeatureTitleLetterSpacingUnits.Tablet ? `letter-spacing: ${FeatureTitleLetterSpacing.Tablet}${FeatureTitleLetterSpacingUnits.Tablet};` : ''}
                        ${FeatureTitleLineHeight.Tablet && FeatureTitleLineHeightUnits.Tablet ? `line-height: ${FeatureTitleLineHeight.Tablet}${FeatureTitleLineHeightUnits.Tablet};` : ''}
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-text {
                        ${FeatureDescFontSize.Tablet && FeatureDescFontSizeUnits.Tablet ? `font-size: ${FeatureDescFontSize.Tablet}${FeatureDescFontSizeUnits.Tablet};` : ''}
                        ${FeatureDescLetterSpacing.Tablet && FeatureDescLetterSpacingUnits.Tablet ? `letter-spacing: ${FeatureDescLetterSpacing.Tablet}${FeatureDescLetterSpacingUnits.Tablet};` : ''}
                        ${FeatureDescLineHeight.Tablet && FeatureDescLineHeightUnits.Tablet ? `line-height: ${FeatureDescLineHeight.Tablet}${FeatureDescLineHeightUnits.Tablet};` : ''}
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-feature-main-wrapper.${blockID} {
                        padding: ${MobilePadding};
                        margin: ${MobileMargin};
                        border-width: ${MobileBorderWidth};
                        border-radius: ${MobileBorderRadiusWidth} !important;
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:last-child) {
                        padding-bottom: calc(${FeatureListGap.Mobile}${FeatureListGapUnits.Mobile} / 2); 
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:first-child) {
                        padding-top: calc(${FeatureListGap.Mobile}${FeatureListGapUnits.Mobile} / 2);
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon svg {
                        height: ${FeatureIconSize.Mobile}${FeatureIconSizeUnits.Mobile}; 
                        width: ${FeatureIconSize.Mobile}${FeatureIconSizeUnits.Mobile};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon {
                        width: ${FeatureIconBgSize.Mobile}${FeatureIconBgSizeUnits.Mobile};
                        height: ${FeatureIconBgSize.Mobile}${FeatureIconBgSizeUnits.Mobile};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box {
                        margin-right: ${FeatureIconSpacing.Mobile}${FeatureIconSpacingUnits.Mobile}!important;
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-content ${FeatureTag} {
                        ${FeatureTitleFontSize.Mobile && FeatureTitleFontSizeUnits.Mobile ? `font-size: ${FeatureTitleFontSize.Mobile}${FeatureTitleFontSizeUnits.Mobile};` : ''}
                        ${FeatureTitleLetterSpacing.Mobile && FeatureTitleLetterSpacingUnits.Mobile ? `letter-spacing: ${FeatureTitleLetterSpacing.Mobile}${FeatureTitleLetterSpacingUnits.Mobile};` : ''}
                        ${FeatureTitleLineHeight.Mobile && FeatureTitleLineHeightUnits.Mobile ? `line-height: ${FeatureTitleLineHeight.Mobile}${FeatureTitleLineHeightUnits.Mobile};` : ''}
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-text {
                        ${FeatureDescFontSize.Mobile && FeatureDescFontSizeUnits.Mobile ? `font-size: ${FeatureDescFontSize.Mobile}${FeatureDescFontSizeUnits.Mobile};` : ''} 
                        ${FeatureDescLetterSpacing.Mobile && FeatureDescLetterSpacingUnits.Mobile ? `letter-spacing: ${FeatureDescLetterSpacing.Mobile}${FeatureDescLetterSpacingUnits.Mobile};` : ''}
                        ${FeatureDescLineHeight.Mobile && FeatureDescLineHeightUnits.Mobile ? `line-height: ${FeatureDescLineHeight.Mobile}${FeatureDescLineHeightUnits.Mobile};` : ''}
                    }
                }

            `}
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
                                            title={__("Feature", "frontis-blocks")}
                                            initialOpen={true}
                                        >
                                            <div className="fb-feature-wrapper">
                                                <DndContext
                                                    collisionDetection={closestCenter}
                                                    onDragEnd={handleDragEnd}
                                                >
                                                    <SortableContext items={FeatureItems.map(item => item.id)}>
                                                        <ul className='dnd-items-wrapper'>
                                                            {FeatureItems.map((item) => (
                                                                <SortableItem
                                                                    key={item.id}
                                                                    id={item.id}
                                                                    item={item}
                                                                    handleChangeItem={handleChangeItem}
                                                                    handleDeleteItem={handleDeleteItem}
                                                                />
                                                            ))}
                                                        </ul>
                                                    </SortableContext>
                                                    <Button isPrimary onClick={handleAddItem}>
                                                        {__("Add Feature", "frontis-blocks")}
                                                    </Button>
                                                </DndContext>
                                            </div>

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
                                                            onClick={() => setAttributes({ FeatureTag: item.value })}
                                                            className={`fb-setting-text-alignment-single-btn ${ FeatureTag === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>
                                            <BaseControl
                                                label={__("Icon Shape", "frontis-blocks")}
                                                className="fb-setting-icon-shape-wrapper"
                                            >
                                                <SelectControl
                                                    value={attributes.FeatureIconShape}
                                                    options={[
                                                        { label: __("None", "frontis-blocks"), value: "none" },
                                                        { label: __("Circle", "frontis-blocks"), value: "circle" },
                                                        { label: __("Square", "frontis-blocks"), value: "square" },
                                                        { label: __("Rhombus", "frontis-blocks"), value: "rhombus" },
                                                    ]}
                                                    onChange={(value) => setAttributes({ FeatureIconShape: value })}
                                                />
                                            </BaseControl>
                                            <BaseControl
                                                label={__("Feature Item Alignment", "frontis-blocks")}
                                                id="fb-setting-text-alignment"
                                                className="fb-setting-text-alignment"
                                            >
                                                <ButtonGroup
                                                    className="fb-setting-text-alignment-group-btn"
                                                >
                                                    {TEXT_ALIGN.map((item, key) => (
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
                                        </PanelBody>

                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody
                                            title={__("Feature List", "frontis-blocks")}
                                            initialOpen={true}
                                            className="fb-setting-feature-list-wrapper"
                                        >
                                            <FB_Range
												min={1}
												max={100}
												label={__("List Gap", "frontis-blocks")}
												rangeValue={FeatureListGap}
												onChangeHandler={(value) => setAttributes({ FeatureListGap: value })}
												rangeUnitHandler={(value) => setAttributes({ FeatureListGapUnits: value })}
												deviceType={deviceType}
												units={FeatureListGapUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={"20"}
											/>
                                        </PanelBody>

                                        <PanelBody
                                            title={__("Icon", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-feature-icon-wrapper"
                                        >

                                            <FB_SwitcherControl
                                                label={__("Icon Color", "frontis-blocks")}
                                                globalSwitcher={FeatureIconColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ FeatureIconColorSwitcher: value })}
                                            />

                                            {FeatureIconColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Color", "frontis-blocks")}
                                                    globalColor={FeatureIconColor}
                                                    setGlobalColor={(value) => setAttributes({ FeatureIconColor: value })}
                                                />
                                            )}

                                            {FeatureIconColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={FeatureIconHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ FeatureIconHoverColor: value })}
                                                />
                                            )}

                                            <FB_Range
												min={1}
												max={150}
												label={__("Icon Size", "frontis-blocks")}
												rangeValue={FeatureIconSize}
												onChangeHandler={(value) => setAttributes({ FeatureIconSize: value })}
												rangeUnitHandler={(value) => setAttributes({ FeatureIconSizeUnits: value })}
												deviceType={deviceType}
												units={FeatureIconSizeUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={"25"}
											/>

                                            <FB_SwitcherControl
                                                label={__("Background Color", "frontis-blocks")}
                                                globalSwitcher={FeatureIconBgColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ FeatureIconBgColorSwitcher: value })}
                                            />

                                            {FeatureIconBgColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Color", "frontis-blocks")}
                                                    globalColor={FeatureIconBgColor}
                                                    setGlobalColor={(value) => setAttributes({ FeatureIconBgColor: value })}
                                                />
                                            )}

                                            {FeatureIconBgColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={FeatureIconBgHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ FeatureIconBgHoverColor: value })}
                                                />
                                            )}

                                            <FB_Range
												min={1}
												max={150}
												label={__("Background Size", "frontis-blocks")}
												rangeValue={FeatureIconBgSize}
												onChangeHandler={(value) => setAttributes({ FeatureIconBgSize: value })}
												rangeUnitHandler={(value) => setAttributes({ FeatureIconBgSizeUnits: value })}
												deviceType={deviceType}
												units={FeatureIconBgSizeUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={"60"}
											/>

                                            <FB_Range
												min={1}
												max={150}
												label={__("Spacing", "frontis-blocks")}
												rangeValue={FeatureIconSpacing}
												onChangeHandler={(value) => setAttributes({ FeatureIconSpacing: value })}
												rangeUnitHandler={(value) => setAttributes({ FeatureIconSpacingUnits: value })}
												deviceType={deviceType}
												units={FeatureIconSpacingUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={"20"}
											/>

                                        </PanelBody>
                                        <PanelBody
                                            title={__("Title", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-feature-title-wrapper"
                                        >
											<FB_TypographyControl
												fontFamily={FeatureTitleFontFamily}
												onChangeFontFamily={(value) => setAttributes({ FeatureTitleFontFamily: value })}

												fontSize={FeatureTitleFontSize}
												onChangeFontSize={(value) => setAttributes({ FeatureTitleFontSize: value })}

												fontSizeUnits={FeatureTitleFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ FeatureTitleFontSizeUnits: value })}

												fontWeight={FeatureTitleFontWeight}
												onChangeFontWeight={(value) => setAttributes({ FeatureTitleFontWeight: value })}

												fontStyle={FeatureTitleFontStyle}
												onChangeFontStyle={(value) => setAttributes({ FeatureTitleFontStyle: value })}

												textTransform={FeatureTitleTextTransform}
												onChangeTextTransform={(value) => setAttributes({ FeatureTitleTextTransform: value })}

												textDecoration={FeatureTitleTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ FeatureTitleTextDecoration: value })}

												letterSpacing={FeatureTitleLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ FeatureTitleLetterSpacing: value })}

												letterSpacingUnits={FeatureTitleLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ FeatureTitleLetterSpacingUnits: value })}

												lineHeight={FeatureTitleLineHeight}
												onChangeLineHeight={(value) => setAttributes({ FeatureTitleLineHeight: value })}

												lineHeightUnits={FeatureTitleLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ FeatureTitleLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

                                            <FB_SwitcherControl
                                                label={__("Color", "frontis-blocks")}
                                                globalSwitcher={FeatureTitleColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ FeatureTitleColorSwitcher: value })}
                                            />

                                            {FeatureTitleColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Color", "frontis-blocks")}
                                                    globalColor={FeatureTitleColor}
                                                    setGlobalColor={(value) => setAttributes({ FeatureTitleColor: value })}
                                                />
                                            )}

                                            {FeatureTitleColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={FeatureTitleHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ FeatureTitleHoverColor: value })}
                                                />
                                            )}
                                        </PanelBody>
                                        <PanelBody
                                            title={__("Description", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-feature-description-wrapper"
                                        >

                                            <FB_TypographyControl
												fontFamily={FeatureDescFontFamily}
												onChangeFontFamily={(value) => setAttributes({ FeatureDescFontFamily: value })}

												fontSize={FeatureDescFontSize}
												onChangeFontSize={(value) => setAttributes({ FeatureDescFontSize: value })}

												fontSizeUnits={FeatureDescFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ FeatureDescFontSizeUnits: value })}

												fontWeight={FeatureDescFontWeight}
												onChangeFontWeight={(value) => setAttributes({ FeatureDescFontWeight: value })}

												fontStyle={FeatureDescFontStyle}
												onChangeFontStyle={(value) => setAttributes({ FeatureDescFontStyle: value })}

												textTransform={FeatureDescTextTransform}
												onChangeTextTransform={(value) => setAttributes({ FeatureDescTextTransform: value })}

												textDecoration={FeatureDescTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ FeatureDescTextDecoration: value })}

												letterSpacing={FeatureDescLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ FeatureDescLetterSpacing: value })}

												letterSpacingUnits={FeatureDescLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ FeatureDescLetterSpacingUnits: value })}

												lineHeight={FeatureDescLineHeight}
												onChangeLineHeight={(value) => setAttributes({ FeatureDescLineHeight: value })}

												lineHeightUnits={FeatureDescLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ FeatureDescLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

                                            <FB_SwitcherControl
                                                label={__("Color", "frontis-blocks")}
                                                globalSwitcher={FeatureDescColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ FeatureDescColorSwitcher: value })}
                                            />

                                            {FeatureDescColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Color", "frontis-blocks")}
                                                    globalColor={FeatureDescColor}
                                                    setGlobalColor={(value) => setAttributes({ FeatureDescColor: value })}
                                                />
                                            )}

                                            {FeatureDescColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={FeatureDescHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ FeatureDescHoverColor: value })}
                                                />
                                            )}

                                        </PanelBody>

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
                                                    value={FeatureZIndex}
                                                    onChange={(value) => setAttributes({ FeatureZIndex: value === 0 ? undefined : value })}
                                                    min={1}
                                                    max={10000000}
                                                    step={1}
                                                    allowReset
                                                    resetFallbackValue={undefined}
                                                />
                                            </PanelBody>
                                            <PanelBody
                                             title={__("Padding & Margin", "frontis-blocks")}
                                             initialOpen={false}
                                             >
                                                <div className="fb-setting-spacing-container">
                                                    <div className="fb-setting-spacing-inner-container">
                                                        {/* Padding */}
                                                        <div className="fb-setting-spacing-label-container">
                                                            <FB_ResponsiveControl
                                                                labelText={__('Padding', 'frontis-block')}
                                                                device={deviceType}
                                                                deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
                                                            />
                                                            <div className="fb-setting-units-type">
                                                                <ButtonGroup className="fb-setting-units-type-wrap">
                                                                    {UNIT_TYPES.map((item, key) => (
                                                                        <Button
                                                                            key={key}
                                                                            onClick={() => setAttributes({ FeaturePaddingUnits: item.value })}
                                                                            className={`fb-setting-units-type-switcher ${ FeaturePaddingUnits === item.value ? 'active' : ''}`}
                                                                        >
                                                                            {item.label}
                                                                        </Button>
                                                                    ))}
                                                                </ButtonGroup>
                                                            </div>
                                                        </div>
                                                        <div className="fb-setting-spacing-input-container">
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Top", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="top"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopPadding.top : deviceType === 'Tablet' ? FeatureTabPadding.top : FeatureMobilePadding.top}
                                                                    onChange={(e) => handlePaddingInputChange(e, 'top')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="right"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopPadding.right : deviceType === 'Tablet' ? FeatureTabPadding.right : FeatureMobilePadding.right}
                                                                    onChange={(e) => handlePaddingInputChange(e, 'right')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="bottom"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopPadding.bottom : deviceType === 'Tablet' ? FeatureTabPadding.bottom : FeatureMobilePadding.bottom}
                                                                    onChange={(e) => handlePaddingInputChange(e, 'bottom')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="left"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopPadding.left : deviceType === 'Tablet' ? FeatureTabPadding.left : FeatureMobilePadding.left}
                                                                    onChange={(e) => handlePaddingInputChange(e, 'left')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label"></label>
                                                                <span
                                                                    className={`dashicons ${FeaturePaddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${FeaturePaddingLink ? 'is-checked' : ''}`}
                                                                    onClick={handleFeaturePaddingLinkToggle}
                                                                >
                                                                </span>
                                                            </div>
                                                        </div>                          
                                                    </div>
                                                </div>
                                                <div className="fb-setting-spacing-container">
                                                    <div className="fb-setting-spacing-inner-container">
                                                        {/* Margin */}
                                                        <div className="fb-setting-spacing-label-container">
                                                            <FB_ResponsiveControl
                                                                labelText={__('Margin', 'frontis-block')}
                                                                device={deviceType}
                                                                deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
                                                            />
                                                            <div className="fb-setting-units-type">
                                                                <ButtonGroup className="fb-setting-units-type-wrap">
                                                                    {UNIT_TYPES.map((item, key) => (
                                                                        <Button
                                                                            key={key}
                                                                            onClick={() => setAttributes({ FeatureMarginUnits: item.value })}
                                                                            className={`fb-setting-units-type-switcher ${ FeatureMarginUnits === item.value ? 'active' : ''}`}
                                                                        >
                                                                            {item.label}
                                                                        </Button>
                                                                    ))}
                                                                </ButtonGroup>
                                                            </div>
                                                        </div>
                                                        <div className="fb-setting-spacing-input-container">
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Top", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="top"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopMargin.top : deviceType === 'Tablet' ? FeatureTabMargin.top : FeatureMobileMargin.top}
                                                                    onChange={(e) => handleMarginInputChange(e, 'top')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="right"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopMargin.right : deviceType === 'Tablet' ? FeatureTabMargin.right : FeatureMobileMargin.right}
                                                                    onChange={(e) => handleMarginInputChange(e, 'right')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="bottom"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopMargin.bottom : deviceType === 'Tablet' ? FeatureTabMargin.bottom : FeatureMobileMargin.bottom}
                                                                    onChange={(e) => handleMarginInputChange(e, 'bottom')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="left"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopMargin.left : deviceType === 'Tablet' ? FeatureTabMargin.left : FeatureMobileMargin.left}
                                                                    onChange={(e) => handleMarginInputChange(e, 'left')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label"></label>
                                                                <span
                                                                    className={`dashicons ${FeatureMarginLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${FeatureMarginLink ? 'is-checked' : ''}`}
                                                                    onClick={handleMarginLinkToggle}
                                                                >
                                                                </span>
                                                            </div>
                                                        </div>                          
                                                    </div>
                                                </div>                                       
                                            </PanelBody>
                                            <PanelBody title="Background Color" initialOpen={false} >
                                                <BaseControl
                                                    className="fb-setting-color-panel-wrapper"
                                                >
                                                    <ButtonGroup className="fb-setting-color-panel-btn">
                                                        {NORMAL_HOVER.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ FeatureBgColorSwitcher: item.value })}
                                                                className={`fb-setting-color-panel-btn-switchr ${FeatureBgColorSwitcher === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                {FeatureBgColorSwitcher === 'normal' && (
                                                    <BaseControl 
                                                        label={__("Nomal Color", "frontis-blocks")}
                                                        className="fb-setting-color-setting-wrapper"
                                                    >
                                                        <Dropdown
                                                            className="fb-setting-color-setting-icon-dropdown"
                                                            contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                            popoverProps={{ placement: 'bottom-start' }}
                                                            renderToggle={({ isOpen, onToggle }) => (
                                                                <Button
                                                                    variant="primary"
                                                                    onClick={onToggle}
                                                                    aria-expanded={isOpen}
                                                                    className="fb-setting-color-setting-icon-btn"
                                                                >
                                                                    <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                                </Button>
                                                            )}
                                                            renderContent={() => (
                                                                <div className="fb-setting-color-setting-icon-popup">
                                                                    <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                        <div className="fb-setting-normal-color">
                                                                            <ColorPicker
                                                                                color={FeatureBgColor}
                                                                                onChange={(value) => setAttributes({ FeatureBgColor: value })}
                                                                                enableAlpha={true}
                                                                            />
                                                                            <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                            <ColorPalette
                                                                                colors={[
                                                                                    { color: '#F72585' },
                                                                                    { color: '#7209B7' },
                                                                                    { color: '#3A0CA3' },
                                                                                    { color: '#4361EE' },
                                                                                    { color: '#4CC9F0' },
                                                                                ]}
                                                                                disableCustomColors={true}
                                                                                value={FeatureBgColor}
                                                                                onChange={(value) => setAttributes({ FeatureBgColor: value })}
                                                                            />
                                                                        </div>
                                                                    </BaseControl>
                                                                </div>
                                                            )}
                                                        />
                                                    </BaseControl>
                                                )}

                                                {FeatureBgColorSwitcher === 'hover' && (
                                                    <BaseControl 
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        className="fb-setting-color-setting-wrapper"
                                                    >
                                                        <Dropdown
                                                            className="fb-setting-color-setting-icon-dropdown"
                                                            contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                            popoverProps={{ placement: 'bottom-start' }}
                                                            renderToggle={({ isOpen, onToggle }) => (
                                                                <Button
                                                                    variant="primary"
                                                                    onClick={onToggle}
                                                                    aria-expanded={isOpen}
                                                                    className="fb-setting-color-setting-icon-btn"
                                                                >
                                                                    <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                                </Button>
                                                            )}
                                                            renderContent={() => (
                                                                <div className="fb-setting-color-setting-icon-popup">
                                                                    <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                        <div className="fb-setting-hover-color">
                                                                            <ColorPicker
                                                                                color={FeatureBgHoverColor}
                                                                                onChange={(value) => setAttributes({ FeatureBgHoverColor: value })}
                                                                                enableAlpha={true}
                                                                            />
                                                                            <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                            <ColorPalette
                                                                                colors={[
                                                                                    { color: '#F72585' },
                                                                                    { color: '#7209B7' },
                                                                                    { color: '#3A0CA3' },
                                                                                    { color: '#4361EE' },
                                                                                    { color: '#4CC9F0' },
                                                                                ]}
                                                                                disableCustomColors={true}
                                                                                value={FeatureBgHoverColor}
                                                                                onChange={(value) => setAttributes({ FeatureBgHoverColor: value })}
                                                                            />
                                                                        </div>
                                                                    </BaseControl>
                                                                </div>
                                                            )}
                                                        />
                                                    </BaseControl>
                                                )}
                                            </PanelBody>

                                            <PanelBody
                                                title={__("Border & Border radius", "frontis-blocks")}
                                                initialOpen={false}
                                                className="fb-setting-border-setting-wrapper"
                                                >
                                                    <SelectControl
                                                        label={__("Border Style", "frontis-blocks")}
                                                        value={FeatureBorder}
                                                        options={BORDER_STYLES}
                                                        onChange={(value) => setAttributes({ FeatureBorder: value })}
                                                    />

                                                <BaseControl
                                                    label={__("Border Color", "frontis-blocks")}
                                                    className="fb-setting-color-panel-wrapper"
                                                >
                                                    <ButtonGroup className="fb-setting-color-panel-btn">
                                                        {NORMAL_HOVER.map((item, key) => (
                                                            <Button
                                                                key={key}
                                                                onClick={() => setAttributes({ FeatureBorderColorSwitcher: item.value })}
                                                                className={`fb-setting-color-panel-btn-switchr ${FeatureBorderColorSwitcher === item.value ? 'active' : ''}`}
                                                            >
                                                                {item.label}
                                                            </Button>
                                                        ))}
                                                    </ButtonGroup>
                                                </BaseControl>

                                                {FeatureBorderColorSwitcher === 'normal' && (
                                                    <BaseControl 
                                                        label={__("Nomal Color", "frontis-blocks")}
                                                        className="fb-setting-color-setting-wrapper"
                                                    >
                                                        <Dropdown
                                                            className="fb-setting-color-setting-icon-dropdown"
                                                            contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                            popoverProps={{ placement: 'bottom-start' }}
                                                            renderToggle={({ isOpen, onToggle }) => (
                                                                <Button
                                                                    variant="primary"
                                                                    onClick={onToggle}
                                                                    aria-expanded={isOpen}
                                                                    aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                    className="fb-setting-color-setting-icon-btn"
                                                                >
                                                                    <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                                </Button>
                                                            )}
                                                            renderContent={() => (
                                                                <div className="fb-setting-color-setting-icon-popup">
                                                                    <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                        <div className="fb-setting-normal-color">
                                                                            <ColorPicker
                                                                                color={FeatureBorderColor}
                                                                                onChange={(value) => setAttributes({ FeatureBorderColor: value })}
                                                                                enableAlpha={true}
                                                                            />
                                                                            <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                            <ColorPalette
                                                                                colors={[
                                                                                    { color: '#F72585' },
                                                                                    { color: '#7209B7' },
                                                                                    { color: '#3A0CA3' },
                                                                                    { color: '#4361EE' },
                                                                                    { color: '#4CC9F0' },
                                                                                ]}
                                                                                disableCustomColors={true}
                                                                                value={FeatureBorderColor}
                                                                                onChange={(value) => setAttributes({ FeatureBorderColor: value })}
                                                                            />
                                                                        </div>
                                                                    </BaseControl>
                                                                </div>
                                                            )}
                                                        />
                                                    </BaseControl>
                                                )}

                                                {FeatureBorderColorSwitcher === 'hover' && (
                                                    <BaseControl 
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        className="fb-setting-color-setting-wrapper"
                                                    >
                                                        <Dropdown
                                                            className="fb-setting-color-setting-icon-dropdown"
                                                            contentClassName="fb-setting-color-setting-icon-dropdown-content"
                                                            popoverProps={{ placement: 'bottom-start' }}
                                                            renderToggle={({ isOpen, onToggle }) => (
                                                                <Button
                                                                    variant="primary"
                                                                    onClick={onToggle}
                                                                    aria-expanded={isOpen}
                                                                    aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                                    className="fb-setting-color-setting-icon-btn"
                                                                >
                                                                    <Dashicon icon="color-picker" className="fb-setting-color-setting-icon" />
                                                                </Button>
                                                            )}
                                                            renderContent={() => (
                                                                <div className="fb-setting-color-setting-icon-popup">
                                                                    <BaseControl className="fb-setting-color-setting-icon-popup-inner">
                                                                        <div className="fb-setting-hover-color">
                                                                            <ColorPicker
                                                                                color={FeatureBorderHoverColor}
                                                                                onChange={(value) => setAttributes({ FeatureBorderHoverColor: value })}
                                                                                enableAlpha={true}
                                                                            />
                                                                            <div className="fb-setting-hover-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                                            <ColorPalette
                                                                                colors={[
                                                                                    { color: '#F72585' },
                                                                                    { color: '#7209B7' },
                                                                                    { color: '#3A0CA3' },
                                                                                    { color: '#4361EE' },
                                                                                    { color: '#4CC9F0' },
                                                                                ]}
                                                                                disableCustomColors={true}
                                                                                value={FeatureBorderHoverColor}
                                                                                onChange={(value) => setAttributes({ FeatureBorderHoverColor: value })}
                                                                            />
                                                                        </div>
                                                                    </BaseControl>
                                                                </div>
                                                            )}
                                                        />
                                                    </BaseControl>
                                                )}

                                                <div className="fb-setting-spacing-container">
                                                    <div className="fb-setting-spacing-inner-container">
                                                        {/* Border Width */}
                                                        <div className="fb-setting-spacing-label-container">
                                                            <FB_ResponsiveControl
                                                                labelText={__('Border', 'frontis-block')}
                                                                device={deviceType}
                                                                deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
                                                            />
                                                            <div className="fb-setting-units-type">
                                                                <ButtonGroup className="fb-setting-units-type-wrap">
                                                                    {UNIT_TYPES.map((item, key) => (
                                                                        <Button
                                                                            key={key}
                                                                            onClick={() => setAttributes({ FeatureBorderUnits: item.value })}
                                                                            className={`fb-setting-units-type-switcher ${ FeatureBorderUnits === item.value ? 'active' : ''}`}
                                                                        >
                                                                            {item.label}
                                                                        </Button>
                                                                    ))}
                                                                </ButtonGroup>
                                                            </div>

                                                        </div>
                                                        <div className="fb-setting-spacing-input-container">
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Top", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="top"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopBorderWidth.top : deviceType === 'Tablet' ? FeatureTabBorderWidth.top : FeatureMobileBorderWidth.top}
                                                                    onChange={(e) => handleBorderWidthInputChange(e, 'top')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="right"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopBorderWidth.right : deviceType === 'Tablet' ? FeatureTabBorderWidth.right : FeatureMobileBorderWidth.right}
                                                                    onChange={(e) => handleBorderWidthInputChange(e, 'right')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="bottom"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopBorderWidth.bottom : deviceType === 'Tablet' ? FeatureTabBorderWidth.bottom : FeatureMobileBorderWidth.bottom}
                                                                    onChange={(e) => handleBorderWidthInputChange(e, 'bottom')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="left"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopBorderWidth.left : deviceType === 'Tablet' ? FeatureTabBorderWidth.left : FeatureMobileBorderWidth.left}
                                                                    onChange={(e) => handleBorderWidthInputChange(e, 'left')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label"></label>
                                                                <span
                                                                    className={`dashicons ${FeatureBorderLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${FeatureBorderLink ? 'is-checked' : ''}`}
                                                                    onClick={handleBorderWidthLinkToggle}
                                                                >
                                                                </span>
                                                            </div>
                                                        </div>                          
                                                    </div>
                                                </div>
                                                <div className="fb-setting-spacing-container">
                                                    <div className="fb-setting-spacing-inner-container">
                                                        {/* Border radius Width */}
                                                        <div className="fb-setting-spacing-label-container">
                                                            <FB_ResponsiveControl
                                                                labelText={__('Border Radius', 'frontis-block')}
                                                                device={deviceType}
                                                                deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
                                                            />
                                                            <div className="fb-setting-units-type">
                                                                <ButtonGroup className="fb-setting-units-type-wrap">
                                                                    {UNIT_TYPES.map((item, key) => (
                                                                        <Button
                                                                            key={key}
                                                                            onClick={() => setAttributes({ FeatureBorderRadiusUnits: item.value })}
                                                                            className={`fb-setting-units-type-switcher ${ FeatureBorderRadiusUnits === item.value ? 'active' : ''}`}
                                                                        >
                                                                            {item.label}
                                                                        </Button>
                                                                    ))}
                                                                </ButtonGroup>
                                                            </div>
                                                        </div>
                                                        <div className="fb-setting-spacing-input-container">
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Top", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="top"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopBorderRadiusWidth.top : deviceType === 'Tablet' ? FeatureTabBorderRadiusWidth.top : FeatureMobileBorderRadiusWidth.top}
                                                                    onChange={(e) => handleBorderRadiusWidthInputChange(e, 'top')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="right"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopBorderRadiusWidth.right : deviceType === 'Tablet' ? FeatureTabBorderRadiusWidth.right : FeatureMobileBorderRadiusWidth.right}
                                                                    onChange={(e) => handleBorderRadiusWidthInputChange(e, 'right')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="bottom"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopBorderRadiusWidth.bottom : deviceType === 'Tablet' ? FeatureTabBorderRadiusWidth.bottom : FeatureMobileBorderRadiusWidth.bottom}
                                                                    onChange={(e) => handleBorderRadiusWidthInputChange(e, 'bottom')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="left"
                                                                    value={deviceType === 'Desktop' ? FeatureDesktopBorderRadiusWidth.left : deviceType === 'Tablet' ? FeatureTabBorderRadiusWidth.left : FeatureMobileBorderRadiusWidth.left}
                                                                    onChange={(e) => handleBorderRadiusWidthInputChange(e, 'left')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label"></label>
                                                                <span
                                                                    className={`dashicons ${FeatureBorderRadiusLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${FeatureBorderRadiusLink ? 'is-checked' : ''}`}
                                                                    onClick={handleBorderRadiusWidthLinkToggle}
                                                                >
                                                                </span>
                                                            </div>
                                                        </div>                          
                                                    </div>
                                                </div>
                                                <FB_BoxShadowControl
                                                    onBoxShadowChange={(value) => setAttributes({ FeatureboxShadowValues: value })}
                                                    initialShadowValue={FeatureboxShadowValues}
                                                    onBoxShadowStyleChange={(value) => setAttributes({ FeatureboxShadowCssValue: value })}
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
