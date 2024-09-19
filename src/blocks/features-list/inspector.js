import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';


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
import ResponsiveControl from '../../components/responsivecontrol';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const { 
        blockID,
        DeviceType,
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

        FeatureIconPaddingUnits,
        FeatureIconDesktopPadding,
        FeatureIconTabPadding,
        FeatureIconMobilePadding,
        FeatureIconPaddingLink,

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



    /** Start Icon Padding */
    const [previousIconPadding, setPreviousIconPadding] = useState(FeatureIconDesktopPadding);
    /** Function to update all icon padding values */
    const updateAllIconPadding = (value, device) => {
        switch(device) {
            case 'Desktop':
                setAttributes({
                    FeatureIconDesktopPadding: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Tablet':
                setAttributes({
                    FeatureIconTabPadding: {
                        top: value,
                        right: value,
                        bottom: value,
                        left: value
                    }
                });
                break;
            case 'Mobile':
                setAttributes({
                    FeatureIconMobilePadding: {
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

    /** Function to handle icon input change */
    const handleIconPaddingInputChange = (e, direction) => {
        const value = e.target.value;
        switch(DeviceType) {
            case 'Desktop':
                setAttributes({ FeatureIconDesktopPadding: { ...FeatureIconDesktopPadding, [direction]: value } });
                break;
            case 'Tablet':
                setAttributes({ FeatureIconTabPadding: { ...FeatureIconTabPadding, [direction]: value } });
                break;
            case 'Mobile':
                setAttributes({ FeatureIconMobilePadding: { ...FeatureIconMobilePadding, [direction]: value } });
                break;
            default:
                break;
        }
        /** Update all icon padding values if FeatureIconPaddingLink is true */
        if (FeatureIconPaddingLink) {
            updateAllIconPadding(value, DeviceType);
        }
    };

    /** Function to handle FeatureIconPaddingLink toggle */
    const handleFeatureIconPaddingLinkToggle = () => {
        if (!FeatureIconPaddingLink) {
            setAttributes({ FeatureIconDesktopPadding: previousIconPadding });
        }
        /** setFeaturePaddingLink(!FeatureIconPaddingLink) */
        setAttributes({FeatureIconPaddingLink: !FeatureIconPaddingLink})
    };

    /** Update previousIconPadding state when padding changes */
    useEffect(() => {
        setPreviousIconPadding(FeatureIconDesktopPadding);
    }, [FeatureIconDesktopPadding]);

    /** Default icon padding for desktop (using desktop_padding) */
    const IconPadding = `${FeatureIconDesktopPadding.top}${FeatureIconPaddingUnits} ${FeatureIconDesktopPadding.right}${FeatureIconPaddingUnits} ${FeatureIconDesktopPadding.bottom}${FeatureIconPaddingUnits} ${FeatureIconDesktopPadding.left}${FeatureIconPaddingUnits}`;
    /** End Icon Padding */
    



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
        switch(DeviceType) {
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
            updateAllPadding(value, DeviceType);
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
    const padding = `${FeatureDesktopPadding.top}${FeaturePaddingUnits} ${FeatureDesktopPadding.right}${FeaturePaddingUnits} ${FeatureDesktopPadding.bottom}${FeaturePaddingUnits} ${FeatureDesktopPadding.left}${FeaturePaddingUnits}`;
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
        switch(DeviceType) {
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
            updateAllMargin(value, DeviceType);
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
    const margin = `${FeatureDesktopMargin.top}${FeaturePaddingUnits} ${FeatureDesktopMargin.right}${FeaturePaddingUnits} ${FeatureDesktopMargin.bottom}${FeaturePaddingUnits} ${FeatureDesktopMargin.left}${FeaturePaddingUnits}`;
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
        switch(DeviceType) {
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
            updateAllBorderWidth(value, DeviceType);
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
    const borderWidth = `${FeatureDesktopBorderWidth.top}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.right}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.bottom}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.left}${FeatureBorderUnits}`;
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
        switch(DeviceType) {
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
            updateAllBorderRadiusWidth(value, DeviceType);
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
    const borderRadiusWidth = `${FeatureDesktopBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
    /** End Border Radius Width */ 


    console.log(FeatureIconColor);
    

    return (
        <>
            <style>
            {`
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
                    height: ${FeatureIconSizeDesktop}${FeatureIconSizeUnits};
                    width: ${FeatureIconSizeDesktop}${FeatureIconSizeUnits};
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
                    padding: ${IconPadding};
                }


                @media only screen and (max-width: 1024px) {
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:last-child) {
                        padding-bottom: calc(${FeatureListGapTablet}${FeatureListGapUnits} / 2);
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:first-child) {
                        padding-top: calc(${FeatureListGapTablet}${FeatureListGapUnits} / 2);
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:last-child) {
                        padding-bottom: calc(${FeatureListGapMobile}${FeatureListGapUnits} / 2);
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:first-child) {
                        padding-top: calc(${FeatureListGapMobile}${FeatureListGapUnits} / 2);
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
                                                    <ResponsiveControl
                                                        labelText={__("List Gap", "frontis-blocks")}
                                                        device={DeviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
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
                                                        value={DeviceType === "Desktop" ? FeatureListGapDesktop : DeviceType === "Tablet" ? FeatureListGapTablet : FeatureListGapMobile}
                                                        onChange={(value) => {
                                                            if (DeviceType === "Desktop") {
                                                                setAttributes({ FeatureListGapDesktop: value });
                                                            } else if (DeviceType === "Tablet") {
                                                                setAttributes({ FeatureListGapTablet: value });
                                                            } else if (DeviceType === "Mobile") {
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
                                                    <ResponsiveControl
                                                        labelText={__("Icon Size", "frontis-blocks")}
                                                        device={DeviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
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
                                                        value={DeviceType === "Desktop" ? FeatureIconSizeDesktop : DeviceType === "Tablet" ? FeatureIconSizeTablet : FeatureIconSizeMobile}
                                                        onChange={(value) => {
                                                            if (DeviceType === "Desktop") {
                                                                setAttributes({ FeatureIconSizeDesktop: value });
                                                            } else if (DeviceType === "Tablet") {
                                                                setAttributes({ FeatureIconSizeTablet: value });
                                                            } else if (DeviceType === "Mobile") {
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
                                                    <ResponsiveControl
                                                        labelText={__("Background Size", "frontis-blocks")}
                                                        device={DeviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
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
                                                        value={DeviceType === "Desktop" ? FeatureIconBgSizeDesktop : DeviceType === "Tablet" ? FeatureIconBgSizeTablet : FeatureIconBgSizeMobile}
                                                        onChange={(value) => {
                                                            if (DeviceType === "Desktop") {
                                                                setAttributes({ FeatureIconBgSizeDesktop: value });
                                                            } else if (DeviceType === "Tablet") {
                                                                setAttributes({ FeatureIconBgSizeTablet: value });
                                                            } else if (DeviceType === "Mobile") {
                                                                setAttributes({ FeatureIconBgSizeMobile: value });
                                                            }
                                                        }}
                                                        min={1}
                                                        max={100}
                                                        allowReset
                                                        resetFallbackValue={20}
                                                    />
                                                </div>
                                            </div>

                                            <div className="fb-setting-spacing-container">
                                                <div className="fb-setting-spacing-inner-container">
                                                    {/* Icon Padding */}
                                                    <div className="fb-setting-spacing-label-container">
                                                        <ResponsiveControl
                                                            labelText={__('Padding', 'frontis-block')}
                                                            device={DeviceType}
                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
                                                        />
                                                        <div className="fb-setting-units-type">
                                                            <ButtonGroup className="fb-setting-units-type-wrap">
                                                                {UNIT_TYPES.map((item, key) => (
                                                                    <Button
                                                                        key={key}
                                                                        onClick={() => setAttributes({ FeatureIconPaddingUnits: item.value })}
                                                                        className={`fb-setting-units-type-switcher ${ FeatureIconPaddingUnits === item.value ? 'active' : ''}`}
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
                                                                value={DeviceType === 'Desktop' ? FeatureIconDesktopPadding.top : DeviceType === 'Tablet' ? FeatureIconTabPadding.top : FeatureIconMobilePadding.top}
                                                                onChange={(e) => handleIconPaddingInputChange(e, 'top')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="right"
                                                                value={DeviceType === 'Desktop' ? FeatureIconDesktopPadding.right : DeviceType === 'Tablet' ? FeatureIconTabPadding.right : FeatureIconMobilePadding.right}
                                                                onChange={(e) => handleIconPaddingInputChange(e, 'right')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="bottom"
                                                                value={DeviceType === 'Desktop' ? FeatureIconDesktopPadding.bottom : DeviceType === 'Tablet' ? FeatureIconTabPadding.bottom : FeatureIconMobilePadding.bottom}
                                                                onChange={(e) => handleIconPaddingInputChange(e, 'bottom')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                            <input
                                                                type="number"
                                                                name="left"
                                                                value={DeviceType === 'Desktop' ? FeatureIconDesktopPadding.left : DeviceType === 'Tablet' ? FeatureIconTabPadding.left : FeatureIconMobilePadding.left}
                                                                onChange={(e) => handleIconPaddingInputChange(e, 'left')}
                                                            />
                                                        </div>
                                                        <div className="fb-setting-spacing-input-wrapper">
                                                            <label className="fb-setting-spacing-input-label"></label>
                                                            <span
                                                                className={`dashicons ${FeatureIconPaddingLink ? 'dashicons-admin-links' : 'dashicons-editor-unlink'} ${FeatureIconPaddingLink ? 'is-checked' : ''}`}
                                                                onClick={handleFeatureIconPaddingLinkToggle}
                                                            >
                                                            </span>
                                                        </div>
                                                    </div>                          
                                                </div>
                                            </div>

                                            <div className="fb-setting-fontsize-wrapper">
                                                <div className="fb-setting-fontsize-header">
                                                    <ResponsiveControl
                                                        labelText={__("Spacing", "frontis-blocks")}
                                                        device={DeviceType}
                                                        deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
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
                                                        value={DeviceType === "Desktop" ? FeatureIconSpacingDesktop : DeviceType === "Tablet" ? FeatureIconSpacingTablet : FeatureIconSpacingMobile}
                                                        onChange={(value) => {
                                                            if (DeviceType === "Desktop") {
                                                                setAttributes({ FeatureIconSpacingDesktop: value });
                                                            } else if (DeviceType === "Tablet") {
                                                                setAttributes({ FeatureIconSpacingTablet: value });
                                                            } else if (DeviceType === "Mobile") {
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
                                                                        <ResponsiveControl
                                                                            labelText={__("Font Size", "frontis-blocks")}
                                                                            device={DeviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
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
                                                                            value={DeviceType === "Desktop" ? FeatureTitleFontSizeDesktop : DeviceType === "Tablet" ? FeatureTitleFontSizeTablet : FeatureTitleFontSizeMobile}
                                                                            onChange={(value) => {
                                                                                if (DeviceType === "Desktop") {
                                                                                    setAttributes({ FeatureTitleFontSizeDesktop: value });
                                                                                } else if (DeviceType === "Tablet") {
                                                                                    setAttributes({ FeatureTitleFontSizeTablet: value });
                                                                                } else if (DeviceType === "Mobile") {
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
                                                                        <ResponsiveControl
                                                                            labelText={__("Letter Spacing", "frontis-blocks")}
                                                                            device={DeviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
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
                                                                        value={DeviceType === "Desktop" ? FeatureTitleLetterSpacingDesktop : DeviceType === "Tablet" ? FeatureTitleLetterSpacingTablet : FeatureTitleLetterSpacingMobile}
                                                                        onChange={(value) => {
                                                                            if (DeviceType === "Desktop") {
                                                                                setAttributes({ FeatureTitleLetterSpacingDesktop: value });
                                                                            } else if (DeviceType === "Tablet") {
                                                                                setAttributes({ FeatureTitleLetterSpacingTablet: value });
                                                                            } else if (DeviceType === "Mobile") {
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
                                                                        <ResponsiveControl
                                                                            labelText={__("Line Height", "frontis-blocks")}
                                                                            device={DeviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
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
                                                                        value={DeviceType === "Desktop" ? FeatureTitleLineHeightDesktop : DeviceType === "Tablet" ? FeatureTitleLineHeightTablet : FeatureTitleLineHeightMobile}
                                                                        onChange={(value) => {
                                                                            if (DeviceType === "Desktop") {
                                                                                setAttributes({ FeatureTitleLineHeightDesktop: value });
                                                                            } else if (DeviceType === "Tablet") {
                                                                                setAttributes({ FeatureTitleLineHeightTablet: value });
                                                                            } else if (DeviceType === "Mobile") {
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
                                                                        <ResponsiveControl
                                                                            labelText={__("Font Size", "frontis-blocks")}
                                                                            device={DeviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
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
                                                                            value={DeviceType === "Desktop" ? FeatureDescFontSizeDesktop : DeviceType === "Tablet" ? FeatureDescFontSizeTablet : FeatureDescFontSizeMobile}
                                                                            onChange={(value) => {
                                                                                if (DeviceType === "Desktop") {
                                                                                    setAttributes({ FeatureDescFontSizeDesktop: value });
                                                                                } else if (DeviceType === "Tablet") {
                                                                                    setAttributes({ FeatureDescFontSizeTablet: value });
                                                                                } else if (DeviceType === "Mobile") {
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
                                                                        <ResponsiveControl
                                                                            labelText={__("Letter Spacing", "frontis-blocks")}
                                                                            device={DeviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
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
                                                                        value={DeviceType === "Desktop" ? FeatureDescLetterSpacingDesktop : DeviceType === "Tablet" ? FeatureDescLetterSpacingTablet : FeatureDescLetterSpacingMobile}
                                                                        onChange={(value) => {
                                                                            if (DeviceType === "Desktop") {
                                                                                setAttributes({ FeatureDescLetterSpacingDesktop: value });
                                                                            } else if (DeviceType === "Tablet") {
                                                                                setAttributes({ FeatureDescLetterSpacingTablet: value });
                                                                            } else if (DeviceType === "Mobile") {
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
                                                                        <ResponsiveControl
                                                                            labelText={__("Line Height", "frontis-blocks")}
                                                                            device={DeviceType}
                                                                            deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
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
                                                                        value={DeviceType === "Desktop" ? FeatureDescLineHeightDesktop : DeviceType === "Tablet" ? FeatureDescLineHeightTablet : FeatureDescLineHeightMobile}
                                                                        onChange={(value) => {
                                                                            if (DeviceType === "Desktop") {
                                                                                setAttributes({ FeatureDescLineHeightDesktop: value });
                                                                            } else if (DeviceType === "Tablet") {
                                                                                setAttributes({ FeatureDescLineHeightTablet: value });
                                                                            } else if (DeviceType === "Mobile") {
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
                                                            <ResponsiveControl
                                                                labelText={__('Padding', 'frontis-block')}
                                                                device={DeviceType}
                                                                deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
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
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopPadding.top : DeviceType === 'Tablet' ? FeatureTabPadding.top : FeatureMobilePadding.top}
                                                                    onChange={(e) => handlePaddingInputChange(e, 'top')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="right"
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopPadding.right : DeviceType === 'Tablet' ? FeatureTabPadding.right : FeatureMobilePadding.right}
                                                                    onChange={(e) => handlePaddingInputChange(e, 'right')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="bottom"
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopPadding.bottom : DeviceType === 'Tablet' ? FeatureTabPadding.bottom : FeatureMobilePadding.bottom}
                                                                    onChange={(e) => handlePaddingInputChange(e, 'bottom')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="left"
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopPadding.left : DeviceType === 'Tablet' ? FeatureTabPadding.left : FeatureMobilePadding.left}
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
                                                            <ResponsiveControl
                                                                labelText={__('Margin', 'frontis-block')}
                                                                device={DeviceType}
                                                                deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
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
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopMargin.top : DeviceType === 'Tablet' ? FeatureTabMargin.top : FeatureMobileMargin.top}
                                                                    onChange={(e) => handleMarginInputChange(e, 'top')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="right"
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopMargin.right : DeviceType === 'Tablet' ? FeatureTabMargin.right : FeatureMobileMargin.right}
                                                                    onChange={(e) => handleMarginInputChange(e, 'right')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="bottom"
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopMargin.bottom : DeviceType === 'Tablet' ? FeatureTabMargin.bottom : FeatureMobileMargin.bottom}
                                                                    onChange={(e) => handleMarginInputChange(e, 'bottom')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="left"
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopMargin.left : DeviceType === 'Tablet' ? FeatureTabMargin.left : FeatureMobileMargin.left}
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
                                                            <ResponsiveControl
                                                                labelText={__('Border', 'frontis-block')}
                                                                device={DeviceType}
                                                                deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
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
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopBorderWidth.top : DeviceType === 'Tablet' ? FeatureTabBorderWidth.top : FeatureMobileBorderWidth.top}
                                                                    onChange={(e) => handleBorderWidthInputChange(e, 'top')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="right"
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopBorderWidth.right : DeviceType === 'Tablet' ? FeatureTabBorderWidth.right : FeatureMobileBorderWidth.right}
                                                                    onChange={(e) => handleBorderWidthInputChange(e, 'right')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="bottom"
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopBorderWidth.bottom : DeviceType === 'Tablet' ? FeatureTabBorderWidth.bottom : FeatureMobileBorderWidth.bottom}
                                                                    onChange={(e) => handleBorderWidthInputChange(e, 'bottom')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="left"
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopBorderWidth.left : DeviceType === 'Tablet' ? FeatureTabBorderWidth.left : FeatureMobileBorderWidth.left}
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
                                                            <ResponsiveControl
                                                                labelText={__('Border Radius', 'frontis-block')}
                                                                device={DeviceType}
                                                                deviceHandler={(newDevice) => setAttributes({ DeviceType: newDevice })}
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
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopBorderRadiusWidth.top : DeviceType === 'Tablet' ? FeatureTabBorderRadiusWidth.top : FeatureMobileBorderRadiusWidth.top}
                                                                    onChange={(e) => handleBorderRadiusWidthInputChange(e, 'top')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Right", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="right"
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopBorderRadiusWidth.right : DeviceType === 'Tablet' ? FeatureTabBorderRadiusWidth.right : FeatureMobileBorderRadiusWidth.right}
                                                                    onChange={(e) => handleBorderRadiusWidthInputChange(e, 'right')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Bottom", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="bottom"
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopBorderRadiusWidth.bottom : DeviceType === 'Tablet' ? FeatureTabBorderRadiusWidth.bottom : FeatureMobileBorderRadiusWidth.bottom}
                                                                    onChange={(e) => handleBorderRadiusWidthInputChange(e, 'bottom')}
                                                                />
                                                            </div>
                                                            <div className="fb-setting-spacing-input-wrapper">
                                                                <label className="fb-setting-spacing-input-label">{__("Left", "frontis-blocks")}</label>
                                                                <input
                                                                    type="number"
                                                                    name="left"
                                                                    value={DeviceType === 'Desktop' ? FeatureDesktopBorderRadiusWidth.left : DeviceType === 'Tablet' ? FeatureTabBorderRadiusWidth.left : FeatureMobileBorderRadiusWidth.left}
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
