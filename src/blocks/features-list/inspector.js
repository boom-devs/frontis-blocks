import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import FB_BoxShadowControl from '@Components/box-shadow';


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
// import ResponsiveControl from '../../components/responsivecontrol';
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

        FeatureListGapDesktop,
        FeatureListGapTablet,
        FeatureListGapMobile,
        FeatureListGapUnits,

        FeatureIconColorSwitcher,
        FeatureIconColor,
        FeatureIconHoverColor,

        FeatureIconBgColorSwitcher,
        FeatureIconBgColor,
        FeatureIconBgHoverColor,

        FeatureIconSizeDesktop,
        FeatureIconSizeTablet,
        FeatureIconSizeMobile,
        FeatureIconSizeUnits,

        FeatureIconBgSizeDesktop,
        FeatureIconBgSizeTablet,
        FeatureIconBgSizeMobile,
        FeatureIconBgSizeUnits,

        FeatureIconSpacingDesktop,
        FeatureIconSpacingTablet,
        FeatureIconSpacingMobile,
        FeatureIconSpacingUnits,



        FeatureTitleFontFamily,
        FeatureTitleFontSizeDesktop,
        FeatureTitleFontSizeTablet,
        FeatureTitleFontSizeMobile,
        FeatureTitleFontSizeUnits,
        FeatureTitleFontWeight,
        FeatureTitleFontStyle,
        FeatureTitleTextTransform,
        FeatureTitleTextDecoration,
        FeatureTitleLetterSpacingDesktop,
        FeatureTitleLetterSpacingTablet,
        FeatureTitleLetterSpacingMobile,
        FeatureTitleLetterSpacingUnits,
        FeatureTitleLineHeightDesktop,
        FeatureTitleLineHeightTablet,
        FeatureTitleLineHeightMobile,
        FeatureTitleLineHeightUnits,

        FeatureTitleColorSwitcher,
        FeatureTitleColor,
        FeatureTitleHoverColor,


        FeatureDescFontFamily,
        FeatureDescFontSizeDesktop,
        FeatureDescFontSizeTablet,
        FeatureDescFontSizeMobile,
        FeatureDescFontSizeUnits,
        FeatureDescFontWeight,
        FeatureDescFontStyle,
        FeatureDescTextTransform,
        FeatureDescTextDecoration,
        FeatureDescLetterSpacingDesktop,
        FeatureDescLetterSpacingTablet,
        FeatureDescLetterSpacingMobile,
        FeatureDescLetterSpacingUnits,
        FeatureDescLineHeightDesktop,
        FeatureDescLineHeightTablet,
        FeatureDescLineHeightMobile,
        FeatureDescLineHeightUnits,

        FeatureDescColorSwitcher,
        FeatureDescColor,
        FeatureDescHoverColor,


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

        FeatureDesktopSwitcher,
        FeatureTabletSwitcher,
        FeatureMobileSwitcher,

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

    

    return (
        <>
            <style>
            {`
                .fb-feature-main-wrapper.${blockID} {
                    z-index: ${FeatureZIndex !== undefined ? FeatureZIndex : ''};
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
                    padding-bottom: calc(${FeatureListGapDesktop}${FeatureListGapUnits} / 2);
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:first-child) {
                    padding-top: calc(${FeatureListGapDesktop}${FeatureListGapUnits} / 2);
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon svg {
                    fill: ${FeatureIconColor};
                    height: ${FeatureIconSizeDesktop}${FeatureIconSizeUnits};
                    width: ${FeatureIconSizeDesktop}${FeatureIconSizeUnits};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon:hover svg {
                    fill: ${FeatureIconHoverColor};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box {
                    margin-right: ${FeatureIconSpacingDesktop}${FeatureIconSpacingUnits}!important;
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
                    width: ${FeatureIconBgSizeDesktop}${FeatureIconBgSizeUnits};
                    height: ${FeatureIconBgSizeDesktop}${FeatureIconBgSizeUnits};
                }

                 .fb-feature-main-wrapper.${blockID} .fb-feature-list-content ${FeatureTag} {
                    font-family: ${FeatureTitleFontFamily};
                    font-size: ${FeatureTitleFontSizeDesktop}${FeatureTitleFontSizeUnits};
                    font-weight: ${FeatureTitleFontWeight};
                    font-style: ${FeatureTitleFontStyle};
                    text-transform: ${FeatureTitleTextTransform};
                    text-decoration: ${FeatureTitleTextDecoration};
                    letter-spacing: ${FeatureTitleLetterSpacingDesktop}${FeatureTitleLetterSpacingUnits};
                    line-height: ${FeatureTitleLineHeightDesktop}${FeatureTitleLineHeightUnits};
                    color: ${FeatureTitleColor};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-title:hover {
                    color: ${FeatureTitleHoverColor};
                }

                .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-text {
                    font-family: ${FeatureDescFontFamily};
                    font-size: ${FeatureDescFontSizeDesktop}${FeatureDescFontSizeUnits};
                    font-weight: ${FeatureDescFontWeight};
                    font-style: ${FeatureDescFontStyle};
                    text-transform: ${FeatureDescTextTransform};
                    text-decoration: ${FeatureDescTextDecoration};
                    letter-spacing: ${FeatureDescLetterSpacingDesktop}${FeatureDescLetterSpacingUnits};
                    line-height: ${FeatureDescLineHeightDesktop}${FeatureDescLineHeightUnits};
                    color: ${FeatureDescColor};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-text:hover {
                    color: ${FeatureDescHoverColor};
                }

                @media only screen and (max-width: 1024px) {

                    .fb-feature-main-wrapper.${blockID} {
                        padding: ${TabPadding};
                        margin: ${TabMargin};
                        border-width: ${TabBorderWidth};
                        border-radius: ${TabBorderRadiusWidth} !important;
                    }

                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:last-child) {
                        padding-bottom: calc(${FeatureListGapTablet}${FeatureListGapUnits} / 2);
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:first-child) {
                        padding-top: calc(${FeatureListGapTablet}${FeatureListGapUnits} / 2);
                    }

                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon svg {
                        height: ${FeatureIconSizeTablet}${FeatureIconSizeUnits};
                        width: ${FeatureIconSizeTablet}${FeatureIconSizeUnits};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon {
                        width: ${FeatureIconBgSizeTablet}${FeatureIconBgSizeUnits};
                        height: ${FeatureIconBgSizeTablet}${FeatureIconBgSizeUnits};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box {
                        margin-right: ${FeatureIconSpacingTablet}${FeatureIconSpacingUnits}!important;
                    }

                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-content ${FeatureTag} {
                        font-size: ${FeatureTitleFontSizeTablet}${FeatureTitleFontSizeUnits};
                        letter-spacing: ${FeatureTitleLetterSpacingTablet}${FeatureTitleLetterSpacingUnits};
                        line-height: ${FeatureTitleLineHeightTablet}${FeatureTitleLineHeightUnits};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-text {
                        font-size: ${FeatureDescFontSizeTablet}${FeatureDescFontSizeUnits};
                        letter-spacing: ${FeatureDescLetterSpacingTablet}${FeatureDescLetterSpacingUnits};
                        line-height: ${FeatureDescLineHeightTablet}${FeatureDescLineHeightUnits};
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
                        padding-bottom: calc(${FeatureListGapMobile}${FeatureListGapUnits} / 2);
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:first-child) {
                        padding-top: calc(${FeatureListGapMobile}${FeatureListGapUnits} / 2);
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon svg {
                        height: ${FeatureIconSizeMobile}${FeatureIconSizeUnits};
                        width: ${FeatureIconSizeMobile}${FeatureIconSizeUnits};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon {
                        width: ${FeatureIconBgSizeMobile}${FeatureIconBgSizeUnits};
                        height: ${FeatureIconBgSizeMobile}${FeatureIconBgSizeUnits};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box {
                        margin-right: ${FeatureIconSpacingMobile}${FeatureIconSpacingUnits}!important;
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-content ${FeatureTag} {
                        font-size: ${FeatureTitleFontSizeMobile}${FeatureTitleFontSizeUnits};
                        letter-spacing: ${FeatureTitleLetterSpacingMobile}${FeatureTitleLetterSpacingUnits};
                        line-height: ${FeatureTitleLineHeightMobile}${FeatureTitleLineHeightUnits};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-text {
                        font-size: ${FeatureDescFontSizeMobile}${FeatureDescFontSizeUnits};
                        letter-spacing: ${FeatureDescLetterSpacingMobile}${FeatureDescLetterSpacingUnits};
                        line-height: ${FeatureDescLineHeightMobile}${FeatureDescLineHeightUnits};
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
                                            <div className="fb-setting-fontsize-wrapper">
                                                <div className="fb-setting-fontsize-header">
                                                    <FB_ResponsiveControl
                                                        labelText={__("List Gap", "frontis-blocks")}
                                                        device={deviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
                                                    />
                                                    <div className="fb-setting-fontsize-units">
                                                        <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                            {UNIT_TYPES.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ FeatureListGapUnits: item.value })}
                                                                    className={`fb-setting-fontsize-units-switcher ${FeatureListGapUnits === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </div>
                                                </div>
                                                <div className="fb-setting-fontsize-rangecontrol">
                                                    <RangeControl
                                                        value={deviceType === "Desktop" ? FeatureListGapDesktop : deviceType === "Tablet" ? FeatureListGapTablet : FeatureListGapMobile}
                                                        onChange={(value) => {
                                                            if (deviceType === "Desktop") {
                                                                setAttributes({ FeatureListGapDesktop: value });
                                                            } else if (deviceType === "Tablet") {
                                                                setAttributes({ FeatureListGapTablet: value });
                                                            } else if (deviceType === "Mobile") {
                                                                setAttributes({ FeatureListGapMobile: value });
                                                            }
                                                        }}
                                                        min={1}
                                                        max={100}
                                                        allowReset
                                                        resetFallbackValue={20}
                                                    />
                                                </div>
                                            </div>
                                        </PanelBody>


                                        <PanelBody
                                            title={__("Icon", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-feature-icon-wrapper"
                                        >

                                            <BaseControl
                                                label={__("Icon Color", "frontis-blocks")}
                                                className="fb-setting-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ FeatureIconColorSwitcher: item.value })}
                                                            className={`fb-setting-color-panel-btn-switchr ${FeatureIconColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {FeatureIconColorSwitcher === 'normal' && (
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
                                                                            color={FeatureIconColor}
                                                                            onChange={(value) => setAttributes({ FeatureIconColor: value })}
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
                                                                            value={FeatureIconColor}
                                                                            onChange={(value) => setAttributes({ FeatureIconColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            {FeatureIconColorSwitcher === 'hover' && (
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
                                                                            color={FeatureIconHoverColor}
                                                                            onChange={(value) => setAttributes({ FeatureIconHoverColor: value })}
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
                                                                            value={FeatureIconHoverColor}
                                                                            onChange={(value) => setAttributes({ FeatureIconHoverColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            <div className="fb-setting-fontsize-wrapper">
                                                <div className="fb-setting-fontsize-header">
                                                    <FB_ResponsiveControl
                                                        labelText={__("Icon Size", "frontis-blocks")}
                                                        device={deviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
                                                    />
                                                    <div className="fb-setting-fontsize-units">
                                                        <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                            {UNIT_TYPES.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ FeatureIconSizeUnits: item.value })}
                                                                    className={`fb-setting-fontsize-units-switcher ${FeatureIconSizeUnits === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </div>
                                                </div>
                                                <div className="fb-setting-fontsize-rangecontrol">
                                                    <RangeControl
                                                        value={deviceType === "Desktop" ? FeatureIconSizeDesktop : deviceType === "Tablet" ? FeatureIconSizeTablet : FeatureIconSizeMobile}
                                                        onChange={(value) => {
                                                            if (deviceType === "Desktop") {
                                                                setAttributes({ FeatureIconSizeDesktop: value });
                                                            } else if (deviceType === "Tablet") {
                                                                setAttributes({ FeatureIconSizeTablet: value });
                                                            } else if (deviceType === "Mobile") {
                                                                setAttributes({ FeatureIconSizeMobile: value });
                                                            }
                                                        }}
                                                        min={1}
                                                        max={100}
                                                        allowReset
                                                        resetFallbackValue={20}
                                                    />
                                                </div>
                                            </div>



                                            <BaseControl
                                                label={__("Background Color", "frontis-blocks")}
                                                className="fb-setting-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ FeatureIconBgColorSwitcher: item.value })}
                                                            className={`fb-setting-color-panel-btn-switchr ${FeatureIconBgColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {FeatureIconBgColorSwitcher === 'normal' && (
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
                                                                            color={FeatureIconBgColor}
                                                                            onChange={(value) => setAttributes({ FeatureIconBgColor: value })}
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
                                                                            value={FeatureIconBgColor}
                                                                            onChange={(value) => setAttributes({ FeatureIconBgColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            {FeatureIconBgColorSwitcher === 'hover' && (
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
                                                                            color={FeatureIconBgHoverColor}
                                                                            onChange={(value) => setAttributes({ FeatureIconBgHoverColor: value })}
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
                                                                            value={FeatureIconBgHoverColor}
                                                                            onChange={(value) => setAttributes({ FeatureIconBgHoverColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            <div className="fb-setting-fontsize-wrapper">
                                                <div className="fb-setting-fontsize-header">
                                                    <FB_ResponsiveControl
                                                        labelText={__("Background Size", "frontis-blocks")}
                                                        device={deviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
                                                    />
                                                    <div className="fb-setting-fontsize-units">
                                                        <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                            {UNIT_TYPES.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ FeatureIconBgSizeUnits: item.value })}
                                                                    className={`fb-setting-fontsize-units-switcher ${FeatureIconBgSizeUnits === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </div>
                                                </div>
                                                <div className="fb-setting-fontsize-rangecontrol">
                                                    <RangeControl
                                                        value={deviceType === "Desktop" ? FeatureIconBgSizeDesktop : deviceType === "Tablet" ? FeatureIconBgSizeTablet : FeatureIconBgSizeMobile}
                                                        onChange={(value) => {
                                                            if (deviceType === "Desktop") {
                                                                setAttributes({ FeatureIconBgSizeDesktop: value });
                                                            } else if (deviceType === "Tablet") {
                                                                setAttributes({ FeatureIconBgSizeTablet: value });
                                                            } else if (deviceType === "Mobile") {
                                                                setAttributes({ FeatureIconBgSizeMobile: value });
                                                            }
                                                        }}
                                                        min={1}
                                                        max={200}
                                                        allowReset
                                                        resetFallbackValue={60}
                                                    />
                                                </div>
                                            </div>

                                            <div className="fb-setting-fontsize-wrapper">
                                                <div className="fb-setting-fontsize-header">
                                                    <FB_ResponsiveControl
                                                        labelText={__("Spacing", "frontis-blocks")}
                                                        device={deviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
                                                    />
                                                    <div className="fb-setting-fontsize-units">
                                                        <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                            {UNIT_TYPES.map((item, key) => (
                                                                <Button
                                                                    key={key}
                                                                    onClick={() => setAttributes({ FeatureIconSpacingUnits: item.value })}
                                                                    className={`fb-setting-fontsize-units-switcher ${FeatureIconSpacingUnits === item.value ? 'active' : ''}`}
                                                                >
                                                                    {item.label}
                                                                </Button>
                                                            ))}
                                                        </ButtonGroup>
                                                    </div>
                                                </div>
                                                <div className="fb-setting-fontsize-rangecontrol">
                                                    <RangeControl
                                                        value={deviceType === "Desktop" ? FeatureIconSpacingDesktop : deviceType === "Tablet" ? FeatureIconSpacingTablet : FeatureIconSpacingMobile}
                                                        onChange={(value) => {
                                                            if (deviceType === "Desktop") {
                                                                setAttributes({ FeatureIconSpacingDesktop: value });
                                                            } else if (deviceType === "Tablet") {
                                                                setAttributes({ FeatureIconSpacingTablet: value });
                                                            } else if (deviceType === "Mobile") {
                                                                setAttributes({ FeatureIconSpacingMobile: value });
                                                            }
                                                        }}
                                                        min={1}
                                                        max={100}
                                                        allowReset
                                                        resetFallbackValue={20}
                                                    />
                                                </div>
                                            </div>

                                        </PanelBody>
                                        <PanelBody
                                            title={__("Title", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-feature-title-wrapper"
                                        >
                                            <BaseControl 
                                                label={__("Typography", "frontis-blocks")}
                                                className="fb-setting-typography"
                                            >
                                                <Dropdown
                                                    className="fb-setting-dropdown-icon-wrapper"
                                                    contentClassName="fb-setting-dropdown-icon-content"
                                                    popoverProps={{ placement: 'bottom-start' }}
                                                    renderToggle={({ isOpen, onToggle }) => (
                                                        <Button
                                                            variant="primary"
                                                            onClick={onToggle}
                                                            aria-expanded={isOpen}
                                                            aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                            className="fb-setting-dropdown-icon-btn"
                                                        >
                                                            <Dashicon icon="edit" className="fb-setting-dropdown-icon" />
                                                        </Button>
                                                    )}
                                                    renderContent={() => (
                                                        <div className="fb-setting-typography-popup">
                                                            <BaseControl className="fb-setting-typography-popup-inner" >
                                                                <div className="fb-setting-fontfamily-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Family", "frontis-blocks")}
                                                                        options={FONT_FAMILYS}
                                                                        value={FeatureTitleFontFamily}
                                                                        onChange={(value) => setAttributes({ FeatureTitleFontFamily: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontsize-wrapper">
                                                                    <div className="fb-setting-fontsize-header">
                                                                        <FB_ResponsiveControl
                                                                            labelText={__("Font Size", "frontis-blocks")}
                                                                            device={deviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
                                                                        />
                                                                        <div className="fb-setting-fontsize-units">
                                                                            <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ FeatureTitleFontSizeUnits: item.value })}
                                                                                        className={`fb-setting-fontsize-units-switcher ${FeatureTitleFontSizeUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fb-setting-fontsize-rangecontrol">
                                                                        <RangeControl
                                                                            value={deviceType === "Desktop" ? FeatureTitleFontSizeDesktop : deviceType === "Tablet" ? FeatureTitleFontSizeTablet : FeatureTitleFontSizeMobile}
                                                                            onChange={(value) => {
                                                                                if (deviceType === "Desktop") {
                                                                                    setAttributes({ FeatureTitleFontSizeDesktop: value });
                                                                                } else if (deviceType === "Tablet") {
                                                                                    setAttributes({ FeatureTitleFontSizeTablet: value });
                                                                                } else if (deviceType === "Mobile") {
                                                                                    setAttributes({ FeatureTitleFontSizeMobile: value });
                                                                                }
                                                                            }}
                                                                            min={1}
                                                                            max={200}
                                                                            allowReset
                                                                            resetFallbackValue={18}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="fb-setting-fontweight-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Weight", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "700" },
                                                                            { label: __("100", "frontis-blocks"), value: "100" },
                                                                            { label: __("200", "frontis-blocks"), value: "200" },
                                                                            { label: __("300", "frontis-blocks"), value: "300" },
                                                                            { label: __("400", "frontis-blocks"), value: "400" },
                                                                            { label: __("500", "frontis-blocks"), value: "500" },
                                                                            { label: __("600", "frontis-blocks"), value: "600" },
                                                                            { label: __("700", "frontis-blocks"), value: "700" },
                                                                            { label: __("800", "frontis-blocks"), value: "800" },
                                                                            { label: __("900", "frontis-blocks"), value: "900" },
                                                                        ]}
                                                                        value={FeatureTitleFontWeight}
                                                                        onChange={(value) => setAttributes({ FeatureTitleFontWeight: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontstyle-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Style", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Normal", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Italic", "frontis-blocks"), value: "italic" },
                                                                            { label: __("Oblique", "frontis-blocks"), value: "oblique" },
                                                                        ]}
                                                                        value={FeatureTitleFontStyle}
                                                                        onChange={(value) => setAttributes({ FeatureTitleFontStyle: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-texttransform-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Transform", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Capitalize", "frontis-blocks"), value: "capitalize" },
                                                                            { label: __("Uppercase", "frontis-blocks"), value: "uppercase" },
                                                                            { label: __("Lowercase", "frontis-blocks"), value: "lowercase" },
                                                                        ]}
                                                                        value={FeatureTitleTextTransform}
                                                                        onChange={(value) => setAttributes({ FeatureTitleTextTransform: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-textdecoration-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Decoration", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Underline", "frontis-blocks"), value: "underline" },
                                                                            { label: __("Overline", "frontis-blocks"), value: "overline" },
                                                                            { label: __("Line Through", "frontis-blocks"), value: "line-through" },
                                                                        ]}
                                                                        value={FeatureTitleTextDecoration}
                                                                        onChange={(value) => setAttributes({ FeatureTitleTextDecoration: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-letterspacing-wrapper">
                                                                    <div className="fb-setting-letterspacing-header">
                                                                        <FB_ResponsiveControl
                                                                            labelText={__("Letter Spacing", "frontis-blocks")}
                                                                            device={deviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
                                                                        />
                                                                        <div className="fb-setting-letterspacing-units">
                                                                            <ButtonGroup className="fb-setting-letterspacing-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ FeatureTitleLetterSpacingUnits: item.value })}
                                                                                        className={`fb-setting-letterspacing-units-switcher ${FeatureTitleLetterSpacingUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={deviceType === "Desktop" ? FeatureTitleLetterSpacingDesktop : deviceType === "Tablet" ? FeatureTitleLetterSpacingTablet : FeatureTitleLetterSpacingMobile}
                                                                        onChange={(value) => {
                                                                            if (deviceType === "Desktop") {
                                                                                setAttributes({ FeatureTitleLetterSpacingDesktop: value });
                                                                            } else if (deviceType === "Tablet") {
                                                                                setAttributes({ FeatureTitleLetterSpacingTablet: value });
                                                                            } else if (deviceType === "Mobile") {
                                                                                setAttributes({ FeatureTitleLetterSpacingMobile: value });
                                                                            }
                                                                        }}
                                                                        min={-10}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={0}
                                                                    />
                                                                </div>

                                                                <div className="fb-setting-lineheight-wrapper">
                                                                    <div className="fb-setting-lineheight-header">
                                                                        <FB_ResponsiveControl
                                                                            labelText={__("Line Height", "frontis-blocks")}
                                                                            device={deviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
                                                                        />
                                                                        <div className="fb-setting-lineheight-units">
                                                                            <ButtonGroup className="fb-setting-lineheight-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ FeatureTitleLineHeightUnits: item.value })}
                                                                                        className={`fb-setting-lineheight-units-switcher ${FeatureTitleLineHeightUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={deviceType === "Desktop" ? FeatureTitleLineHeightDesktop : deviceType === "Tablet" ? FeatureTitleLineHeightTablet : FeatureTitleLineHeightMobile}
                                                                        onChange={(value) => {
                                                                            if (deviceType === "Desktop") {
                                                                                setAttributes({ FeatureTitleLineHeightDesktop: value });
                                                                            } else if (deviceType === "Tablet") {
                                                                                setAttributes({ FeatureTitleLineHeightTablet: value });
                                                                            } else if (deviceType === "Mobile") {
                                                                                setAttributes({ FeatureTitleLineHeightMobile: value });
                                                                            }
                                                                        }}
                                                                        min={1}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={undefined}
                                                                    />
                                                                </div>

                                                            </BaseControl>
                                                        </div>
                                                    )}
                                                />
                                            </BaseControl>
                                            <BaseControl
                                                label={__("Color", "frontis-blocks")}
                                                className="fb-setting-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ FeatureTitleColorSwitcher: item.value })}
                                                            className={`fb-setting-color-panel-btn-switchr ${FeatureTitleColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {FeatureTitleColorSwitcher === 'normal' && (
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
                                                                            color={FeatureTitleColor}
                                                                            onChange={(value) => setAttributes({ FeatureTitleColor: value })}
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
                                                                            value={FeatureTitleColor}
                                                                            onChange={(value) => setAttributes({ FeatureTitleColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            {FeatureTitleColorSwitcher === 'hover' && (
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
                                                                            color={FeatureTitleHoverColor}
                                                                            onChange={(value) => setAttributes({ FeatureTitleHoverColor: value })}
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
                                                                            value={FeatureTitleHoverColor}
                                                                            onChange={(value) => setAttributes({ FeatureTitleHoverColor: value })}
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
                                            title={__("Description", "frontis-blocks")}
                                            initialOpen={false}
                                            className="fb-setting-feature-description-wrapper"
                                        >

                                            <BaseControl 
                                                label={__("Typography", "frontis-blocks")}
                                                className="fb-setting-typography"
                                            >
                                                <Dropdown
                                                    className="fb-setting-dropdown-icon-wrapper"
                                                    contentClassName="fb-setting-dropdown-icon-content"
                                                    popoverProps={{ placement: 'bottom-start' }}
                                                    renderToggle={({ isOpen, onToggle }) => (
                                                        <Button
                                                            variant="primary"
                                                            onClick={onToggle}
                                                            aria-expanded={isOpen}
                                                            aria-label={__("Toggle Typography Settings", "frontis-blocks")}
                                                            className="fb-setting-dropdown-icon-btn"
                                                        >
                                                            <Dashicon icon="edit" className="fb-setting-dropdown-icon" />
                                                        </Button>
                                                    )}
                                                    renderContent={() => (
                                                        <div className="fb-setting-typography-popup">
                                                            <BaseControl className="fb-setting-typography-popup-inner" >
                                                                <div className="fb-setting-fontfamily-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Family", "frontis-blocks")}
                                                                        options={FONT_FAMILYS}
                                                                        value={FeatureDescFontFamily}
                                                                        onChange={(value) => setAttributes({ FeatureDescFontFamily: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontsize-wrapper">
                                                                    <div className="fb-setting-fontsize-header">
                                                                        <FB_ResponsiveControl
                                                                            labelText={__("Font Size", "frontis-blocks")}
                                                                            device={deviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
                                                                        />
                                                                        <div className="fb-setting-fontsize-units">
                                                                            <ButtonGroup className="fb-setting-fontsize-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ FeatureDescFontSizeUnits: item.value })}
                                                                                        className={`fb-setting-fontsize-units-switcher ${FeatureDescFontSizeUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <div className="fb-setting-fontsize-rangecontrol">
                                                                        <RangeControl
                                                                            value={deviceType === "Desktop" ? FeatureDescFontSizeDesktop : deviceType === "Tablet" ? FeatureDescFontSizeTablet : FeatureDescFontSizeMobile}
                                                                            onChange={(value) => {
                                                                                if (deviceType === "Desktop") {
                                                                                    setAttributes({ FeatureDescFontSizeDesktop: value });
                                                                                } else if (deviceType === "Tablet") {
                                                                                    setAttributes({ FeatureDescFontSizeTablet: value });
                                                                                } else if (deviceType === "Mobile") {
                                                                                    setAttributes({ FeatureDescFontSizeMobile: value });
                                                                                }
                                                                            }}
                                                                            min={1}
                                                                            max={200}
                                                                            allowReset
                                                                            resetFallbackValue={undefined}
                                                                        />
                                                                    </div>
                                                                </div>

                                                                <div className="fb-setting-fontweight-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Weight", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "700" },
                                                                            { label: __("100", "frontis-blocks"), value: "100" },
                                                                            { label: __("200", "frontis-blocks"), value: "200" },
                                                                            { label: __("300", "frontis-blocks"), value: "300" },
                                                                            { label: __("400", "frontis-blocks"), value: "400" },
                                                                            { label: __("500", "frontis-blocks"), value: "500" },
                                                                            { label: __("600", "frontis-blocks"), value: "600" },
                                                                            { label: __("700", "frontis-blocks"), value: "700" },
                                                                            { label: __("800", "frontis-blocks"), value: "800" },
                                                                            { label: __("900", "frontis-blocks"), value: "900" },
                                                                        ]}
                                                                        value={FeatureDescFontWeight}
                                                                        onChange={(value) => setAttributes({ FeatureDescFontWeight: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-fontstyle-wrapper">
                                                                    <SelectControl
                                                                        label={__("Font Style", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Normal", "frontis-blocks"), value: "normal" },
                                                                            { label: __("Italic", "frontis-blocks"), value: "italic" },
                                                                            { label: __("Oblique", "frontis-blocks"), value: "oblique" },
                                                                        ]}
                                                                        value={FeatureDescFontStyle}
                                                                        onChange={(value) => setAttributes({ FeatureDescFontStyle: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-texttransform-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Transform", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Capitalize", "frontis-blocks"), value: "capitalize" },
                                                                            { label: __("Uppercase", "frontis-blocks"), value: "uppercase" },
                                                                            { label: __("Lowercase", "frontis-blocks"), value: "lowercase" },
                                                                        ]}
                                                                        value={FeatureDescTextTransform}
                                                                        onChange={(value) => setAttributes({ FeatureDescTextTransform: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-textdecoration-wrapper">
                                                                    <SelectControl
                                                                        label={__("Text Decoration", "frontis-blocks")}
                                                                        options={[
                                                                            { label: __("Default", "frontis-blocks"), value: "none" },
                                                                            { label: __("None", "frontis-blocks"), value: "none" },
                                                                            { label: __("Underline", "frontis-blocks"), value: "underline" },
                                                                            { label: __("Overline", "frontis-blocks"), value: "overline" },
                                                                            { label: __("Line Through", "frontis-blocks"), value: "line-through" },
                                                                        ]}
                                                                        value={FeatureDescTextDecoration}
                                                                        onChange={(value) => setAttributes({ FeatureDescTextDecoration: value })}
                                                                    />
                                                                </div>
                                                                <div className="fb-setting-letterspacing-wrapper">
                                                                    <div className="fb-setting-letterspacing-header">
                                                                        <FB_ResponsiveControl
                                                                            labelText={__("Letter Spacing", "frontis-blocks")}
                                                                            device={deviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
                                                                        />
                                                                        <div className="fb-setting-letterspacing-units">
                                                                            <ButtonGroup className="fb-setting-letterspacing-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ FeatureDescLetterSpacingUnits: item.value })}
                                                                                        className={`fb-setting-letterspacing-units-switcher ${FeatureDescLetterSpacingUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={deviceType === "Desktop" ? FeatureDescLetterSpacingDesktop : deviceType === "Tablet" ? FeatureDescLetterSpacingTablet : FeatureDescLetterSpacingMobile}
                                                                        onChange={(value) => {
                                                                            if (deviceType === "Desktop") {
                                                                                setAttributes({ FeatureDescLetterSpacingDesktop: value });
                                                                            } else if (deviceType === "Tablet") {
                                                                                setAttributes({ FeatureDescLetterSpacingTablet: value });
                                                                            } else if (deviceType === "Mobile") {
                                                                                setAttributes({ FeatureDescLetterSpacingMobile: value });
                                                                            }
                                                                        }}
                                                                        min={1}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={0}
                                                                    />
                                                                </div>

                                                                <div className="fb-setting-lineheight-wrapper">
                                                                    <div className="fb-setting-lineheight-header">
                                                                        <FB_ResponsiveControl
                                                                            labelText={__("Line Height", "frontis-blocks")}
                                                                            device={deviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ deviceType: newDevice })}
                                                                        />
                                                                        <div className="fb-setting-lineheight-units">
                                                                            <ButtonGroup className="fb-setting-lineheight-units-wrap">
                                                                                {UNIT_TYPES.map((item, key) => (
                                                                                    <Button
                                                                                        key={key}
                                                                                        onClick={() => setAttributes({ FeatureDescLineHeightUnits: item.value })}
                                                                                        className={`fb-setting-lineheight-units-switcher ${FeatureDescLineHeightUnits === item.value ? 'active' : ''}`}
                                                                                    >
                                                                                        {item.label}
                                                                                    </Button>
                                                                                ))}
                                                                            </ButtonGroup>
                                                                        </div>
                                                                    </div>
                                                                    <RangeControl
                                                                        value={deviceType === "Desktop" ? FeatureDescLineHeightDesktop : deviceType === "Tablet" ? FeatureDescLineHeightTablet : FeatureDescLineHeightMobile}
                                                                        onChange={(value) => {
                                                                            if (deviceType === "Desktop") {
                                                                                setAttributes({ FeatureDescLineHeightDesktop: value });
                                                                            } else if (deviceType === "Tablet") {
                                                                                setAttributes({ FeatureDescLineHeightTablet: value });
                                                                            } else if (deviceType === "Mobile") {
                                                                                setAttributes({ FeatureDescLineHeightMobile: value });
                                                                            }
                                                                        }}
                                                                        min={1}
                                                                        max={100}
                                                                        step={1}
                                                                        allowReset
                                                                        resetFallbackValue={1}
                                                                    />
                                                                </div>

                                                            </BaseControl>
                                                        </div>
                                                    )}
                                                />
                                            </BaseControl>
                                            <BaseControl
                                                label={__("Color", "frontis-blocks")}
                                                className="fb-setting-color-panel-wrapper"
                                            >
                                                <ButtonGroup className="fb-setting-color-panel-btn">
                                                    {NORMAL_HOVER.map((item, key) => (
                                                        <Button
                                                            key={key}
                                                            onClick={() => setAttributes({ FeatureDescColorSwitcher: item.value })}
                                                            className={`fb-setting-color-panel-btn-switchr ${FeatureDescColorSwitcher === item.value ? 'active' : ''}`}
                                                        >
                                                            {item.label}
                                                        </Button>
                                                    ))}
                                                </ButtonGroup>
                                            </BaseControl>

                                            {FeatureDescColorSwitcher === 'normal' && (
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
                                                                            color={FeatureDescColor}
                                                                            onChange={(value) => setAttributes({ FeatureDescColor: value })}
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
                                                                            value={FeatureDescColor}
                                                                            onChange={(value) => setAttributes({ FeatureDescColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
                                            )}

                                            {FeatureDescColorSwitcher === 'hover' && (
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
                                                                            color={FeatureDescHoverColor}
                                                                            onChange={(value) => setAttributes({ FeatureDescHoverColor: value })}
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
                                                                            value={FeatureDescHoverColor}
                                                                            onChange={(value) => setAttributes({ FeatureDescHoverColor: value })}
                                                                        />
                                                                    </div>
                                                                </BaseControl>
                                                            </div>
                                                        )}
                                                    />
                                                </BaseControl>
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
                                                    max={100}
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

                                            <PanelBody
                                                title={__("Responsive Control", "frontis-blocks")}
                                                initialOpen={false}
                                                className="fb-setting-responsive-control-wrapper"
                                            >
                                                <ToggleControl
                                                    label={__("Hide on Desktop", "frontis-blocks")}
                                                    className="fb-setting-responsive-control"
                                                    checked={FeatureDesktopSwitcher}
                                                    onChange={(value) => setAttributes({ FeatureDesktopSwitcher: value })}
                                                />
                                                <ToggleControl
                                                    label={__("Hide on Tablet", "frontis-blocks")}
                                                    className="fb-setting-responsive-control"
                                                    checked={FeatureTabletSwitcher}
                                                    onChange={(value) => setAttributes({ FeatureTabletSwitcher: value })}
                                                />
                                                <ToggleControl
                                                    label={__("Hide on Mobile", "frontis-blocks")}
                                                    className="fb-setting-responsive-control"
                                                    checked={FeatureMobileSwitcher}
                                                    onChange={(value) => setAttributes({ FeatureMobileSwitcher: value })}
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
