import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect, useMemo } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { 
    PanelBody, 
    TabPanel, 
    Dashicon,
    BaseControl, 
    Button, 
    ButtonGroup,
    SelectControl,
    RangeControl,
    ToggleControl,
    Dropdown,
} from '@wordpress/components';
/**
 * Internal depencencies
 */

import { 
    TABS_LAYOUT,
    ICON_POSITION,
    BORDER_STYLES,
} from '@Constants/fbConstants';

import FB_Range from '@Components/range';
import FB_Spacing from '@Components/spacing';
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_ColorControl from '@Components/color-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import {useDeviceType} from "@Config/displayType";
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_InputControl from '@Components/input-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import SortableItem from './sortableItem';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId, handleDragEnd, handleAddItem, handleChangeItem, handleDeleteItem, handleDuplicateItem, tabsItemList }) {
    
    const { 
        blockId,
        blockStyle,
        tabLayoutSwitcher,
        tabsItems,

        /** Tab Icon Styles */
        tabIconPosition,
        tabIconSize,
        tabIconSizeUnits,
        tabIconColorSwitcher,
        tabIconColor,
        tabIconHoverColor,

        /** Start Background */
        tabIconBgColorSwitcher,
        tabIconNormalBackgroundType,
        tabIconBgColor,
        tabIconNormalGradientColor,
        tabIconNormalCustomGradientSwitcher,
        tabIconNormalCustomGradientInputValue,

        tabIconHoverBackgroundType,
        tabIconBgHoverColor,
        tabIconHoverGradientColor,
        tabIconHoverCustomGradientSwitcher,
        tabIconHoverCustomGradientInputValue,
        /** End Background */

        tabIconBorder,
        tabIconBorderColorSwitcher,
        tabIconBorderColor,
        tabIconBorderHoverColor,
        tabIconBorderUnits,
        tabIconBorderDesktop,
        tabIconBorderTablet,
        tabIconBorderMobile,
        tabIconBorderLink,
        tabIconBorderRadiusUnits,
        tabIconBorderRadiusDesktop,
        tabIconBorderRadiusTablet,
        tabIconBorderRadiusMobile,
        tabIconBorderRadiusLink,

        /** Start Icon Padding */
        tabIconPaddingUnits,
        tabIconPaddingDesktop,
        tabIconPaddingTablet,
        tabIconPaddingMobile,
        tabIconPaddingLink,
        /** End Icon Padding */

        tabIconGapSize,
        tabIconGapUnits,
        tabIconRotateSwitcher,
        tabIconRotate,
        tabIconRotateHover,

        tabIconImageWidth,
        tabIconImageWidthUnits,
        tabIconImageHeight,
        tabIconImageHeightUnits,
        tabIconImageRotateSwitcher,
        tabIconImageRotate,
        tabIconImageRotateHover,
        /** End Icon Styles */
    } = attributes;

    useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockId: "fb-tabs-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

    const deviceType = useDeviceType();

    /** Start Icon border */
    const handleTabIconBorderUnitChange = ( event, position ) => { 
        const value = event.target.value;
        if ( tabIconBorderLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabIconBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabIconBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabIconBorderMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {tabIconBorderDesktop: {...tabIconBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabIconBorderTablet: {...tabIconBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabIconBorderMobile: {...tabIconBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTabIconBorderCombineBtn = () => {
        setAttributes( {tabIconBorderLink: !tabIconBorderLink} );
    }

    const handleTabIconBorderUnitsHandler = (unit) => {
        setAttributes( {
            tabIconBorderUnits: {
                ...tabIconBorderUnits,
                [deviceType]: unit
            }
        })
    }

    const tabIconBorderDesktopWidth = `${tabIconBorderDesktop.top}${tabIconBorderUnits.Desktop} ${tabIconBorderDesktop.right}${tabIconBorderUnits.Desktop} ${tabIconBorderDesktop.bottom}${tabIconBorderUnits.Desktop} ${tabIconBorderDesktop.left}${tabIconBorderUnits.Desktop}`;
    const tabIconBorderTabletWidth = `${tabIconBorderTablet.top}${tabIconBorderUnits.Tablet} ${tabIconBorderTablet.right}${tabIconBorderUnits.Tablet} ${tabIconBorderTablet.bottom}${tabIconBorderUnits.Tablet} ${tabIconBorderTablet.left}${tabIconBorderUnits.Tablet}`;
    const tabIconBorderMobileWidth = `${tabIconBorderMobile.top}${tabIconBorderUnits.Mobile} ${tabIconBorderMobile.right}${tabIconBorderUnits.Mobile} ${tabIconBorderMobile.bottom}${tabIconBorderUnits.Mobile} ${tabIconBorderMobile.left}${tabIconBorderUnits.Mobile}`;
    /** End Border */

    /** Start Icon border radius*/
    const handleTabIconBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( tabIconBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabIconBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabIconBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabIconBorderRadiusMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {tabIconBorderRadiusDesktop: {...tabIconBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabIconBorderRadiusTablet: {...tabIconBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabIconBorderRadiusMobile: {...tabIconBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTabIconBorderRadiusCombineBtn = () => {
        setAttributes( {tabIconBorderRadiusLink: !tabIconBorderRadiusLink} );
    }

    const handleTabIconBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            tabIconBorderRadiusUnits: {
                ...tabIconBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    const tabIconBorderRadiusDesktopWidth = `${tabIconBorderRadiusDesktop.top}${tabIconBorderRadiusUnits.Desktop} ${tabIconBorderRadiusDesktop.right}${tabIconBorderRadiusUnits.Desktop} ${tabIconBorderRadiusDesktop.bottom}${tabIconBorderRadiusUnits.Desktop} ${tabIconBorderRadiusDesktop.left}${tabIconBorderRadiusUnits.Desktop}`;
    const tabIconBorderRadiusTabletWidth = `${tabIconBorderRadiusTablet.top}${tabIconBorderRadiusUnits.Tablet} ${tabIconBorderRadiusTablet.right}${tabIconBorderRadiusUnits.Tablet} ${tabIconBorderRadiusTablet.bottom}${tabIconBorderRadiusUnits.Tablet} ${tabIconBorderRadiusTablet.left}${tabIconBorderRadiusUnits.Tablet}`;
    const tabIconBorderRadiusMobileWidth = `${tabIconBorderRadiusMobile.top}${tabIconBorderRadiusUnits.Mobile} ${tabIconBorderRadiusMobile.right}${tabIconBorderRadiusUnits.Mobile} ${tabIconBorderRadiusMobile.bottom}${tabIconBorderRadiusUnits.Mobile} ${tabIconBorderRadiusMobile.left}${tabIconBorderRadiusUnits.Mobile}`;
    /** End Border Radius */

    /** Start Icon padding*/
    const handleTabIconPaddingUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( tabIconPaddingLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabIconPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabIconPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabIconPaddingMobile: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                default:
                    break;
            }
        } else {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {tabIconPaddingDesktop: {...tabIconPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabIconPaddingTablet: {...tabIconPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabIconPaddingMobile: {...tabIconPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTabIconPaddingCombineBtn = () => {
        setAttributes( {tabIconPaddingLink: !tabIconPaddingLink} );
    }

    const handleTabIconPaddingUnitsHandler = (unit) => {
        setAttributes( {
            tabIconPaddingUnits: {
                ...tabIconPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    const tabIconPaddingDesktopWidth = `${tabIconPaddingDesktop.top}${tabIconPaddingUnits.Desktop} ${tabIconPaddingDesktop.right}${tabIconPaddingUnits.Desktop} ${tabIconPaddingDesktop.bottom}${tabIconPaddingUnits.Desktop} ${tabIconPaddingDesktop.left}${tabIconPaddingUnits.Desktop}`;
    const tabIconPaddingTabletWidth = `${tabIconPaddingTablet.top}${tabIconPaddingUnits.Tablet} ${tabIconPaddingTablet.right}${tabIconPaddingUnits.Tablet} ${tabIconPaddingTablet.bottom}${tabIconPaddingUnits.Tablet} ${tabIconPaddingTablet.left}${tabIconPaddingUnits.Tablet}`;
    const tabIconPaddingMobileWidth = `${tabIconPaddingMobile.top}${tabIconPaddingUnits.Mobile} ${tabIconPaddingMobile.right}${tabIconPaddingUnits.Mobile} ${tabIconPaddingMobile.bottom}${tabIconPaddingUnits.Mobile} ${tabIconPaddingMobile.left}${tabIconPaddingUnits.Mobile}`;
    /** End Padding */



    const allBlockStyle = useMemo(() => `

        .${blockId} .fb-tabs-wrap {
            display: flex;
            flex-direction: ${tabLayoutSwitcher === 'horizontal' ? 'column' : 'row'};
        }
        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel {
            display: flex;
            list-style-type: none;
            flex-wrap: wrap;
            margin: 0;
            padding: 0;
            flex-direction: row;
        }
        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li {
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            text-align: center;
            position: relative;
            flex: 1;
            flex-direction: row;
            padding: 10px;
            gap: 10px;
        }
        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li.fb-tabs-active {
            background-color: #f0f0f0;
        }

        .${blockId} .fb-tab-icon-image-box {
			${tabIconPosition === 'left' && tabIconGapSize.Desktop ? `margin-right: ${tabIconGapSize.Desktop}${tabIconGapUnits.Desktop};` : ''}
			${tabIconPosition === 'right' && tabIconGapSize.Desktop ? `margin-left: ${tabIconGapSize.Desktop}${tabIconGapUnits.Desktop};` : ''}
			${tabIconNormalBackgroundType === 'gradient' ? `   	
                ${tabIconNormalCustomGradientSwitcher && tabIconNormalCustomGradientInputValue ? `background: ${tabIconNormalCustomGradientInputValue};` : `background: ${tabIconNormalGradientColor};`}
            `: `
                ${tabIconBgColor ? `background: ${tabIconBgColor};` : ''}
            `}
			${tabIconPaddingDesktopWidth && tabIconPaddingDesktop?.top ? `padding: ${tabIconPaddingDesktopWidth};` : ''}

			${tabIconBorder ? `border: ${tabIconBorder};` : ''}
			${tabIconBorderColor ? `border-color: ${tabIconBorderColor};` : ''}
			${tabIconBorderDesktopWidth !== 'px px px px' ? `border-width: ${tabIconBorderDesktopWidth};` : ''}
			${tabIconBorderRadiusDesktopWidth !== 'px px px px' ? `border-radius: ${tabIconBorderRadiusDesktopWidth};` : ''}
		}

		.${blockId} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-icon-wrapper {
			${tabIconHoverBackgroundType === 'gradient' ? `   	
                ${tabIconHoverCustomGradientSwitcher && tabIconHoverCustomGradientInputValue ? `background: ${tabIconHoverCustomGradientInputValue};` : `background: ${tabIconHoverGradientColor};`}
            `: `
                ${ tabIconBgHoverColor ? `background: ${ tabIconBgHoverColor};` : ''}
            `}
			${tabIconBorderHoverColor ? `border-color: ${tabIconBorderHoverColor};` : ''}
		}

		.${blockId} .fb-tab-icon-image-box svg {
			${tabIconSize.Desktop && tabIconSizeUnits.Desktop ? `width: ${tabIconSize.Desktop}${tabIconSizeUnits.Desktop};` : ''}
			${tabIconSize.Desktop && tabIconSizeUnits.Desktop ? `height: ${tabIconSize.Desktop}${tabIconSizeUnits.Desktop};` : ''}
			${tabIconColor ? `fill: ${tabIconColor};` : ''}
			transform: rotate(${tabIconRotate.Desktop}deg);
			transition: all .3s ease-in-out;
			
		}

		.${blockId} .fb-tab-icon-image-box:hover svg {
			${tabIconHoverColor ? `fill: ${tabIconHoverColor};` : ''}
			transform: rotate(${tabIconRotateHover.Desktop}deg); 
		}

		.${blockId} .fb-tab-icon-image-box .fb-tab-icon-image {
			${tabIconImageWidth ? `width: ${tabIconImageWidth.Desktop}${tabIconImageWidthUnits.Desktop};` : ''}
			${tabIconImageHeight ? `height: ${tabIconImageHeight.Desktop}${tabIconImageHeightUnits.Desktop};` : ''}
			transform: rotate(${tabIconImageRotate.Desktop}deg);
			transition: all .3s ease-in-out;
		}

		.${blockId} .fb-tab-icon-image-box:hover .fb-tab-icon-image {
			transform: rotate(${tabIconImageRotateHover.Desktop}deg);
		}

        @media only screen and (max-width: 1024px) {

        }

        @media only screen and (max-width: 767px) {

        }
    `, [
        blockId,
        blockStyle,
        tabLayoutSwitcher,
        tabsItems,

        /** Tab Icon Styles */
        tabIconPosition,
        tabIconSize,
        tabIconSizeUnits,
        tabIconColorSwitcher,
        tabIconColor,
        tabIconHoverColor,

        /** Start Background */
        tabIconBgColorSwitcher,
        tabIconNormalBackgroundType,
        tabIconBgColor,
        tabIconNormalGradientColor,
        tabIconNormalCustomGradientSwitcher,
        tabIconNormalCustomGradientInputValue,

        tabIconHoverBackgroundType,
        tabIconBgHoverColor,
        tabIconHoverGradientColor,
        tabIconHoverCustomGradientSwitcher,
        tabIconHoverCustomGradientInputValue,
        /** End Background */

        tabIconBorder,
        tabIconBorderColorSwitcher,
        tabIconBorderColor,
        tabIconBorderHoverColor,
        tabIconBorderUnits,
        tabIconBorderDesktop,
        tabIconBorderTablet,
        tabIconBorderMobile,
        tabIconBorderLink,
        tabIconBorderRadiusUnits,
        tabIconBorderRadiusDesktop,
        tabIconBorderRadiusTablet,
        tabIconBorderRadiusMobile,
        tabIconBorderRadiusLink,

        /** Start Icon Padding */
        tabIconPaddingUnits,
        tabIconPaddingDesktop,
        tabIconPaddingTablet,
        tabIconPaddingMobile,
        tabIconPaddingLink,
        /** End Icon Padding */

        tabIconGapSize,
        tabIconGapUnits,
        tabIconRotateSwitcher,
        tabIconRotate,
        tabIconRotateHover,

        tabIconImageWidth,
        tabIconImageWidthUnits,
        tabIconImageHeight,
        tabIconImageHeightUnits,
        tabIconImageRotateSwitcher,
        tabIconImageRotate,
        tabIconImageRotateHover,
        /** End Icon Styles */
    ]);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle] );

    const editorStyle = `${allBlockStyle}`.replace(/\s+/g, ' ').trim();

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <PanelBody 
                title={__("General Settings", "frontis-blocks")} 
                initialOpen={true}
            >
                <FB_SwitcherControl
                    label={__("Layout", "frontis-blocks")}
                    options={TABS_LAYOUT}
                    globalSwitcher={tabLayoutSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ tabLayoutSwitcher: value })}
                />
                
                <div className="fb-tabs-wrapper">
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={handleDragEnd}
                    >
                        <SortableContext items={tabsItemList.map(item => item.id)}>
                            <ul className='dnd-items-wrapper'>
                                {tabsItemList.map((item, index) => (
                                    <SortableItem
                                        key={item.id}
                                        id={item.id}
                                        item={item}
                                        handleChangeItem={handleChangeItem}
                                        handleDeleteItem={handleDeleteItem}
                                        handleDuplicateItem={handleDuplicateItem}
                                        index={index}
                                    />
                                ))}
                            </ul>
                        </SortableContext>
                        <Button isPrimary onClick={handleAddItem}>
                            {__("Add Tab", "frontis-blocks")}
                        </Button>
                    </DndContext>
                </div>

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
                style controls
            </PanelBody>
            <PanelBody
                title={__("Icon Styles", "frontis-blocks")}
                initialOpen={false}
            >

                <FB_SwitcherControl
                    label={__("Icon Position", "frontis-blocks")}
                    options={ICON_POSITION}
                    globalSwitcher={tabIconPosition}
                    setGlobalSwitcher={(value) => setAttributes({ tabIconPosition: value })}
                />
                <FB_Range
                    min={1}
                    max={100}
                    label={__("Icon Size", "frontis-blocks")}
                    rangeValue={tabIconSize}
                    onChangeHandler={(value) => setAttributes({ tabIconSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ tabIconSizeUnits: value })}
                    deviceType={deviceType}
                    units={tabIconSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={25}
                />

                <FB_SwitcherControl
                    label={__("Icon Color", "frontis-blocks")}
                    globalSwitcher={tabIconColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ tabIconColorSwitcher: value })}
                />

                {tabIconColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={tabIconColor}
                        setGlobalColor={(value) => setAttributes({ tabIconColor: value })}
                    />
                )}

                {tabIconColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={tabIconHoverColor}
                        setGlobalColor={(value) => setAttributes({ tabIconHoverColor: value })}
                    />
                )}


                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={tabIconBgColorSwitcher}  
                    setBgColorSwitcher={(value) => setAttributes({ tabIconBgColorSwitcher: value })}
                    
                    normalBackgroundType={tabIconNormalBackgroundType} 
                    setNormalBackgroundType={(value) => setAttributes({ tabIconNormalBackgroundType: value })}
                    normalClassicColor={tabIconBgColor}
                    setNormalClassicColor={(value) => setAttributes({ tabIconBgColor: value })}
                    normalGradientColor={tabIconNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ tabIconNormalGradientColor: value })}
                    normalCustomGradientSwitcher={tabIconNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ tabIconNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={tabIconNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ tabIconNormalCustomGradientInputValue: value })}
                    
                    hoverBackgroundType={tabIconHoverBackgroundType} 
                    setHoverBackgroundType={(value) => setAttributes({ tabIconHoverBackgroundType: value })}
                    hoverClassicColor={ tabIconBgHoverColor}
                    setHoverClassicColor={(value) => setAttributes({  tabIconBgHoverColor: value })}
                    hoverGradientColor={tabIconHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ tabIconHoverGradientColor: value })}
                    hoverCustomGradientSwitcher={tabIconHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ tabIconHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={tabIconHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ tabIconHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}

                />

                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={tabIconBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ tabIconBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={tabIconBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ tabIconBorderColorSwitcher: value })}
                />

                {tabIconBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={tabIconBorderColor}
                        setGlobalColor={(value) => setAttributes({ tabIconBorderColor: value })}
                    />
                )}

                {tabIconBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={tabIconBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ tabIconBorderHoverColor: value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTabIconBorderUnitsHandler}
                    spacingUnits={tabIconBorderUnits}
                    spacingDesktop={tabIconBorderDesktop}
                    spacingTablet={tabIconBorderTablet}
                    spacingMobile={tabIconBorderMobile}
                    handleSpacingUnitHandler={handleTabIconBorderUnitChange}
                    spacingCombineBtn={tabIconBorderLink}
                    spacingCombineBtnHandler={handleTabIconBorderCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTabIconBorderRadiusUnitsHandler}
                    spacingUnits={tabIconBorderRadiusUnits}
                    spacingDesktop={tabIconBorderRadiusDesktop}
                    spacingTablet={tabIconBorderRadiusTablet}
                    spacingMobile={tabIconBorderRadiusMobile}
                    handleSpacingUnitHandler={handleTabIconBorderRadiusUnitChange}
                    spacingCombineBtn={tabIconBorderRadiusLink}
                    spacingCombineBtnHandler={handleTabIconBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTabIconPaddingUnitsHandler}
                    spacingUnits={tabIconPaddingUnits}
                    spacingDesktop={tabIconPaddingDesktop}
                    spacingTablet={tabIconPaddingTablet}
                    spacingMobile={tabIconPaddingMobile}
                    handleSpacingUnitHandler={handleTabIconPaddingUnitChange}
                    spacingCombineBtn={tabIconPaddingLink}
                    spacingCombineBtnHandler={handleTabIconPaddingCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Range
                    min={0}
                    max={100}
                    label={__("Icon Gap", "frontis-blocks")}
                    rangeValue={tabIconGapSize}
                    onChangeHandler={(value) => setAttributes({ tabIconGapSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ tabIconGapUnits: value })}
                    deviceType={deviceType}
                    units={tabIconGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />

                <FB_SwitcherControl
                    label={__("Icon Rotation", "frontis-blocks")}
                    globalSwitcher={tabIconRotateSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ tabIconRotateSwitcher: value })}
                />

                {tabIconRotateSwitcher === 'normal' && (
                    <FB_Range 
                        min={-360}
                        max={360}
                        label={__("Icon Rotation", "frontis-blocks")}
                        rangeValue={tabIconRotate}
                        onChangeHandler={(value) => setAttributes({ tabIconRotate: value === 0 ? undefined : value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}

                    />
                )}

                {tabIconRotateSwitcher === 'hover' && (
                    <FB_Range
                        min={-360}
                        max={360}
                        label={__("Icon Rotation", "frontis-blocks")}
                        rangeValue={tabIconRotateHover}
                        onChangeHandler={(value) => setAttributes({ tabIconRotateHover: value === 0 ? undefined : value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}
                    />
                )}

            </PanelBody>
            <PanelBody
                title={__("Image Styles", "frontis-blocks")}
                initialOpen={false}
            >
                <SelectControl
                    label={__("Image Position", "frontis-blocks")}
                    value={tabIconPosition} 
                    options={ICON_POSITION}
                    onChange={(value) => setAttributes({ tabIconPosition: value })}
                />
                <FB_Range
                    min={1}
                    max={100}
                    label={__("Image Width", "frontis-blocks")}
                    rangeValue={tabIconImageWidth}
                    onChangeHandler={(value) => setAttributes({ tabIconImageWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ tabIconImageWidthUnits: value })}
                    deviceType={deviceType}
                    units={tabIconImageWidthUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={20}
                />

                <FB_Range
                    min={1}
                    max={100}
                    label={__("Image Height", "frontis-blocks")}
                    rangeValue={tabIconImageHeight}
                    onChangeHandler={(value) => setAttributes({ tabIconImageHeight: value })}
                    rangeUnitHandler={(value) => setAttributes({ tabIconImageHeightUnits: value })}
                    deviceType={deviceType}
                    units={tabIconImageHeightUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={20}
                />
                
                <FB_Range
                    min={0}
                    max={100}
                    label={__("Image Gap", "frontis-blocks")}
                    rangeValue={tabIconGapSize}
                    onChangeHandler={(value) => setAttributes({ tabIconGapSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ tabIconGapUnits: value })}
                    deviceType={deviceType}
                    units={tabIconGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />


                <FB_SwitcherControl
                    label={__("Image Rotation", "frontis-blocks")}
                    globalSwitcher={tabIconImageRotateSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ tabIconImageRotateSwitcher: value })}
                />

                {tabIconImageRotateSwitcher === 'normal' && ( 
                    <FB_Range 
                        min={-360}
                        max={360}
                        label={__("Image Rotation", "frontis-blocks")}
                        rangeValue={tabIconImageRotate}
                        onChangeHandler={(value) => setAttributes({ tabIconImageRotate: value === 0 ? undefined : value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}

                    />
                )}

                {tabIconImageRotateSwitcher === 'hover' && (
                    <FB_Range
                        min={-360}
                        max={360}
                        label={__("Image Rotation", "frontis-blocks")}
                        rangeValue={tabIconImageRotateHover}
                        onChangeHandler={(value) => setAttributes({ tabIconImageRotateHover: value === 0 ? undefined : value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                        rangeStep={1}
                        resetFallbackValue={""}
                        isRangeUnit={false}
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
            advanced controls
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
