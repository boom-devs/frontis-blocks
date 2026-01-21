import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect, useMemo, memo } from '@wordpress/element';
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
    MULTI_ICON_POSITION,
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
import FB_ResponsiveAlignmentControl from '@Components/responsive-alignment-control';
import getCustomCss from '@Utils/getCustomCss';
import FB_InspectorControls from '@Components/InspectorControls';
import FB_InputControl from '@Components/input-control';
import FB_VisibilityControl from '@Components/visibility-control';
import FB_ResponsiveBackgroundImageControl from '@Components/responsive-background-image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_HtmlTagControl from '@Components/html-tag-control';
import SortableItem from './sortableItem';

import './editor.scss';

const Inspector = ({ attributes, setAttributes, clientId, handleDragEnd, handleAddItem, handleChangeItem, handleDeleteItem, handleDuplicateItem, tabsItemList }) => {
    
    const { 
        blockId,
        blockStyle,
        tabLayoutSwitcher,
        tabsItems,
        tabTitleTag,
        tabDescriptionTag,

        showIcon,
        showTitle,
        showDescription,
        fillTitlesWrapper,

        /** Tab Wrapper */
        tabWrapperBgColorTypeSwitcher,
        tabWrapperBgColorType,
        tabWrapperBgHoverColorType,
        tabWrapperBgColor, 
        tabWrapperBgHoverColor,
        tabWrapperBgGradientColor,
        tabWrapperBgHoverGradientColor,
        tabWrapperBgCustomGradientColorSwitcher,
        tabWrapperBgCustomGradientColor,
        tabWrapperBgHoverCustomGradientColorSwitcher,
        tabWrapperBgHoverCustomGradientColor,

        tabWrapperPaddingUnits,
        tabWrapperPaddingDesktop,
        tabWrapperPaddingTablet,
        tabWrapperPaddingMobile,
        tabWrapperPaddingLink,

        tabWrapperMarginUnits,
        tabWrapperMarginDesktop,
        tabWrapperMarginTablet,
        tabWrapperMarginMobile,
        tabWrapperMarginLink,

        tabWrapperBorder,
        tabWrapperBorderColorSwitcher,
        tabWrapperBorderColor,
        tabWrapperBorderHoverColor,

        tabWrapperBorderUnits, 
        tabWrapperBorderDesktop,
        tabWrapperBorderTablet,
        tabWrapperBorderMobile,
        tabWrapperBorderLink,

        tabWrapperBorderRadiusUnits,
        tabWrapperBorderRadiusDesktop,
        tabWrapperBorderRadiusTablet,
        tabWrapperBorderRadiusMobile,
        tabWrapperBorderRadiusLink,
        /** End Tab Wrapper */

        /** Tab List */
        tabListMinWidth,
        tabListMinWidthUnits,
        tabListItemGap,
        tabListItemGapUnits,
        tabWrapperGap,
        tabWrapperGapUnits,

        tabListBgColorTypeSwitcher,
        tabListBgColorType,
        tabListBgHoverColorType,
        tabListBgColor, 
        tabListBgHoverColor,
        tabListBgGradientColor,
        tabListBgHoverGradientColor,
        tabListBgCustomGradientColorSwitcher,
        tabListBgCustomGradientColor,
        tabListBgHoverCustomGradientColorSwitcher,
        tabListBgHoverCustomGradientColor,

        tabListActiveBgColorTypeSwitcher,
        tabListActiveBgColorType,
        tabListActiveBgHoverColorType,
        tabListActiveBgColor, 
        tabListActiveBgHoverColor,
        tabListActiveBgGradientColor,
        tabListActiveBgHoverGradientColor,
        tabListActiveBgCustomGradientColorSwitcher,
        tabListActiveBgCustomGradientColor,
        tabListActiveBgHoverCustomGradientColorSwitcher,
        tabListActiveBgHoverCustomGradientColor,

        tabListPaddingUnits,
        tabListPaddingDesktop,
        tabListPaddingTablet,
        tabListPaddingMobile,
        tabListPaddingLink,

        tabListMarginUnits,
        tabListMarginDesktop,
        tabListMarginTablet,
        tabListMarginMobile,
        tabListMarginLink,

        tabListBorder,
        tabListBorderColorSwitcher,
        tabListBorderColor,
        tabListActiveBorderColor,
        tabListBorderHoverColor,

        tabListBorderUnits,
        tabListBorderDesktop,
        tabListBorderTablet,
        tabListBorderMobile,
        tabListBorderLink,

        tabListBorderRadiusUnits,
        tabListBorderRadiusDesktop,
        tabListBorderRadiusTablet,
        tabListBorderRadiusMobile,
        tabListBorderRadiusLink,
        /** End Tab list Wrapper */

        /** Tab Title Styles */
        tabTitleGlobalTypographyData,
        tabTitleGlobalTypoSwitcher,
        tabTitleGlobalTypoType,
        tabTitleGlobalTypoOption,
        tabTitleFontFamily,
        tabTitleFontSize,
        tabTitleFontSizeUnits,
        tabTitleFontWeight,
        tabTitleFontStyle,
        tabTitleTextTransform,
        tabTitleTextDecoration,
        tabTitleLetterSpacing,
        tabTitleLetterSpacingUnits,
        tabTitleLineHeight,
        tabTitleLineHeightUnits,

        tabTitleColorSwitcher,
        tabTitleColor,
        tabTitleActiveColor,
        tabTitleHoverColor,

        tabTitlePaddingUnits,
        tabTitlePaddingDesktop,
        tabTitlePaddingTablet,
        tabTitlePaddingMobile,
        tabTitlePaddingLink,

        tabTitleMarginUnits,
        tabTitleMarginDesktop,
        tabTitleMarginTablet,
        tabTitleMarginMobile,
        tabTitleMarginLink,

        tabTitleBorder,
        tabTitleBorderColorSwitcher,
        tabTitleBorderColor,
        tabTitleBorderHoverColor,

        tabTitleBorderUnits,
        tabTitleBorderDesktop,
        tabTitleBorderTablet,
        tabTitleBorderMobile,
        tabTitleBorderLink,

        tabTitleBorderRadiusUnits,
        tabTitleBorderRadiusDesktop,
        tabTitleBorderRadiusTablet,
        tabTitleBorderRadiusMobile,
        tabTitleBorderRadiusLink,
        /** End Title Style */

        /** Tab Description Styles */
        tabDescriptionGlobalTypographyData,
        tabDescriptionGlobalTypoSwitcher,
        tabDescriptionGlobalTypoType,
        tabDescriptionGlobalTypoOption,
        tabDescriptionFontFamily,
        tabDescriptionFontSize,
        tabDescriptionFontSizeUnits,
        tabDescriptionFontWeight,
        tabDescriptionFontStyle,
        tabDescriptionTextTransform,
        tabDescriptionTextDecoration,
        tabDescriptionLetterSpacing,
        tabDescriptionLetterSpacingUnits,
        tabDescriptionLineHeight,
        tabDescriptionLineHeightUnits,

        tabDescriptionColorSwitcher,
        tabDescriptionColor,
        tabDescriptionActiveColor,
        tabDescriptionHoverColor,

        tabDescriptionPaddingUnits,
        tabDescriptionPaddingDesktop,
        tabDescriptionPaddingTablet,
        tabDescriptionPaddingMobile,
        tabDescriptionPaddingLink,

        tabDescriptionMarginUnits,
        tabDescriptionMarginDesktop,
        tabDescriptionMarginTablet,
        tabDescriptionMarginMobile,
        tabDescriptionMarginLink,

        tabDescriptionBorder,
        tabDescriptionBorderColorSwitcher,
        tabDescriptionBorderColor,
        tabDescriptionBorderHoverColor,

        tabDescriptionBorderUnits,
        tabDescriptionBorderDesktop,
        tabDescriptionBorderTablet,
        tabDescriptionBorderMobile,
        tabDescriptionBorderLink,

        tabDescriptionBorderRadiusUnits,
        tabDescriptionBorderRadiusDesktop,
        tabDescriptionBorderRadiusTablet,
        tabDescriptionBorderRadiusMobile,
        tabDescriptionBorderRadiusLink,
        /** End Description Style */

        /** Tab Icon Styles */
        tabIconPosition,
        tabIconSize,
        tabIconSizeUnits,
        tabIconColorSwitcher,
        tabIconColor,
        tabIconActiveColor,
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
        
        //Active BG
        tabIconBgActiveColorSwitcher,
        tabIconActiveNormalBackgroundType,
        tabIconBgActiveColor,
        tabIconActiveNormalGradientColor,
        tabIconActiveNormalCustomGradientSwitcher,
        tabIconActiveNormalCustomGradientInputValue,

        tabIconActiveHoverBackgroundType,
        tabIconBgActiveHoverColor,
        tabIconActiveHoverGradientColor,
        tabIconActiveHoverCustomGradientSwitcher,
        tabIconActiveHoverCustomGradientInputValue,
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

        /** Tab Content Styles */
        tabContentBgColorTypeSwitcher,
        tabContentBgColorType,
        tabContentBgHoverColorType,
        tabContentBgColor, 
        tabContentBgHoverColor,
        tabContentBgGradientColor,
        tabContentBgHoverGradientColor,
        tabContentBgCustomGradientColorSwitcher,
        tabContentBgCustomGradientColor,
        tabContentBgHoverCustomGradientColorSwitcher,
        tabContentBgHoverCustomGradientColor,

        tabContentPaddingUnits,
        tabContentPaddingDesktop,
        tabContentPaddingTablet,
        tabContentPaddingMobile,
        tabContentPaddingLink,

        tabContentMarginUnits,
        tabContentMarginDesktop,
        tabContentMarginTablet,
        tabContentMarginMobile,
        tabContentMarginLink,

        tabContentBorder,
        tabContentBorderColorSwitcher,
        tabContentBorderColor,
        tabContentBorderHoverColor,

        tabContentBorderUnits, 
        tabContentBorderDesktop,
        tabContentBorderTablet,
        tabContentBorderMobile,
        tabContentBorderLink,

        tabContentBorderRadiusUnits,
        tabContentBorderRadiusDesktop,
        tabContentBorderRadiusTablet,
        tabContentBorderRadiusMobile,
        tabContentBorderRadiusLink,
        /** End Tab Content */

        tabGlobalZIndex,
        tabGlobalWraperID,
        tabGlobalWraperClass,
    
        /** Padding */
        tabGlobalPaddingUnits,
        tabGlobalPaddingDesktop,
        tabGlobalPaddingTablet,
        tabGlobalPaddingMobile,
        tabGlobalPaddingLink,
    
        /** Margin */
        tabGlobalMarginUnits,
        tabGlobalMarginDesktop,
        tabGlobalMarginTablet,
        tabGlobalMarginMobile,
        tabGlobalMarginLink,
    
        /** Background */
        tabGlobalBgColorTypeSwitcher,
        tabGlobalBgColorType,
        tabGlobalBgHoverColorType,
        tabGlobalBgColor,
        tabGlobalBgHoverColor,
        tabGlobalBgGradientColor,
        tabGlobalBgHoverGradientColor,
        tabGlobalBgCustomGradientColorSwitcher,
        tabGlobalBgCustomGradientColor,
        tabGlobalBgHoverCustomGradientColorSwitcher,
        tabGlobalBgHoverCustomGradientColor,
    
        /** Border */
        tabGlobalBorder,
        tabGlobalBorderColorSwitcher,
        tabGlobalBorderColor,
        tabGlobalBorderHoverColor,
        tabGlobalBorderUnits,
        tabGlobalBorderDesktop,
        tabGlobalBorderTablet,
        tabGlobalBorderMobile,
        tabGlobalBorderLink,
    
        /** Border Radius */
        tabGlobalBorderRadiusUnits,
        tabGlobalBorderRadiusDesktop,
        tabGlobalBorderRadiusTablet,
        tabGlobalBorderRadiusMobile,
        tabGlobalBorderRadiusLink,
    
        /** Box Shadow */
        tabGlobalBoxShadowSwitcher,
        tabGlobalBoxShadowValues,
        tabGlobalBoxShadowCssValue,
        tabGlobalBoxShadowHoverValues,
        tabGlobalBoxShadowHoverCssValue,
    
        /** Custom CSS */
        tabGlobalCustomCSS,

        tabTitlesAlignment

    } = attributes;

    useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockId: "fb-tabs-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

    const deviceType = useDeviceType();

    // Mapping for tab title alignment
    const tabTitlesAlignmentMap = {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end'
    };

    /** Start Wrapper Padding */
    const handleTabWrapperPaddingUnitChange = ( event, position ) => {  
        const value = event.target.value;
        if ( tabWrapperPaddingLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabWrapperPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabWrapperPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabWrapperPaddingMobile: {
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
                    setAttributes( {tabWrapperPaddingDesktop: {...tabWrapperPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabWrapperPaddingTablet: {...tabWrapperPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabWrapperPaddingMobile: {...tabWrapperPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTabWrapperPaddingCombineBtn = () => {
        setAttributes( {tabWrapperPaddingLink: !tabWrapperPaddingLink} );
    }

    const handleTabWrapperPaddingUnitsHandler = (unit) => {
        setAttributes( {
            tabWrapperPaddingUnits: {
                ...tabWrapperPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    const tabWrapperPaddingDesktopWidth = `${tabWrapperPaddingDesktop?.top}${tabWrapperPaddingUnits?.Desktop} ${tabWrapperPaddingDesktop?.right}${tabWrapperPaddingUnits?.Desktop} ${tabWrapperPaddingDesktop?.bottom}${tabWrapperPaddingUnits?.Desktop} ${tabWrapperPaddingDesktop?.left}${tabWrapperPaddingUnits?.Desktop}`;
    const tabWrapperPaddingTabletWidth = `${tabWrapperPaddingTablet?.top}${tabWrapperPaddingUnits?.Tablet} ${tabWrapperPaddingTablet?.right}${tabWrapperPaddingUnits?.Tablet} ${tabWrapperPaddingTablet?.bottom}${tabWrapperPaddingUnits?.Tablet} ${tabWrapperPaddingTablet?.left}${tabWrapperPaddingUnits?.Tablet}`;
    const tabWrapperPaddingMobileWidth = `${tabWrapperPaddingMobile?.top}${tabWrapperPaddingUnits?.Mobile} ${tabWrapperPaddingMobile?.right}${tabWrapperPaddingUnits?.Mobile} ${tabWrapperPaddingMobile?.bottom}${tabWrapperPaddingUnits?.Mobile} ${tabWrapperPaddingMobile?.left}${tabWrapperPaddingUnits?.Mobile}`;
    /** End Wrapper Padding */

    /** Start Wrapper Margin */
    const handleTabWrapperMarginUnitChange = ( event, position ) => { 
        const value = event.target.value;
        if ( tabWrapperMarginLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabWrapperMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabWrapperMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabWrapperMarginMobile: {
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
                    setAttributes( {tabWrapperMarginDesktop: {...tabWrapperMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabWrapperMarginTablet: {...tabWrapperMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabWrapperMarginMobile: {...tabWrapperMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTabWrapperMarginCombineBtn = () => {
        setAttributes( {tabWrapperMarginLink: !tabWrapperMarginLink} );
    }

    const handleTabWrapperMarginUnitsHandler = (unit) => {
        setAttributes( {
            tabWrapperMarginUnits: {
                ...tabWrapperMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const tabWrapperMarginDesktopWidth = `${tabWrapperMarginDesktop?.top}${tabWrapperMarginUnits?.Desktop} ${tabWrapperMarginDesktop?.right}${tabWrapperMarginUnits?.Desktop} ${tabWrapperMarginDesktop?.bottom}${tabWrapperMarginUnits?.Desktop} ${tabWrapperMarginDesktop?.left}${tabWrapperMarginUnits?.Desktop}`;
    const tabWrapperMarginTabletWidth = `${tabWrapperMarginTablet?.top}${tabWrapperMarginUnits?.Tablet} ${tabWrapperMarginTablet?.right}${tabWrapperMarginUnits?.Tablet} ${tabWrapperMarginTablet?.bottom}${tabWrapperMarginUnits?.Tablet} ${tabWrapperMarginTablet?.left}${tabWrapperMarginUnits?.Tablet}`;
    const tabWrapperMarginMobileWidth = `${tabWrapperMarginMobile?.top}${tabWrapperMarginUnits?.Mobile} ${tabWrapperMarginMobile?.right}${tabWrapperMarginUnits?.Mobile} ${tabWrapperMarginMobile?.bottom}${tabWrapperMarginUnits?.Mobile} ${tabWrapperMarginMobile?.left}${tabWrapperMarginUnits?.Mobile}`;
    /** End Wrapper Margin */

    /** Start Wrapper Border */
    const handleTabWrapperBorderUnitChange = ( event, position ) => {  
        const value = event.target.value;
        if ( tabWrapperBorderLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabWrapperBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabWrapperBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabWrapperBorderMobile: {
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
                    setAttributes( {tabWrapperBorderDesktop: {...tabWrapperBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabWrapperBorderTablet: {...tabWrapperBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabWrapperBorderMobile: {...tabWrapperBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTabWrapperBorderCombineBtn = () => {
        setAttributes( {tabWrapperBorderLink: !tabWrapperBorderLink} );
    }

    const handleTabWrapperBorderUnitsHandler = (unit) => {
        setAttributes( {
            tabWrapperBorderUnits: {
                ...tabWrapperBorderUnits,
                [deviceType]: unit
            }
        })
    }

    const tabWrapperBorderDesktopWidth = `${tabWrapperBorderDesktop?.top}${tabWrapperBorderUnits?.Desktop} ${tabWrapperBorderDesktop?.right}${tabWrapperBorderUnits?.Desktop} ${tabWrapperBorderDesktop?.bottom}${tabWrapperBorderUnits?.Desktop} ${tabWrapperBorderDesktop?.left}${tabWrapperBorderUnits?.Desktop}`;
    const tabWrapperBorderTabletWidth = `${tabWrapperBorderTablet?.top}${tabWrapperBorderUnits?.Tablet} ${tabWrapperBorderTablet?.right}${tabWrapperBorderUnits?.Tablet} ${tabWrapperBorderTablet?.bottom}${tabWrapperBorderUnits?.Tablet} ${tabWrapperBorderTablet?.left}${tabWrapperBorderUnits?.Tablet}`;
    const tabWrapperBorderMobileWidth = `${tabWrapperBorderMobile?.top}${tabWrapperBorderUnits?.Mobile} ${tabWrapperBorderMobile?.right}${tabWrapperBorderUnits?.Mobile} ${tabWrapperBorderMobile?.bottom}${tabWrapperBorderUnits?.Mobile} ${tabWrapperBorderMobile?.left}${tabWrapperBorderUnits?.Mobile}`;
    /** End Wrapper Border */

    /** Start Wrapper Border Radius */
    const handleTabWrapperBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( tabWrapperBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabWrapperBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabWrapperBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabWrapperBorderRadiusMobile: {
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
                    setAttributes( {tabWrapperBorderRadiusDesktop: {...tabWrapperBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabWrapperBorderRadiusTablet: {...tabWrapperBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabWrapperBorderRadiusMobile: {...tabWrapperBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTabWrapperBorderRadiusCombineBtn = () => {
        setAttributes( {tabWrapperBorderRadiusLink: !tabWrapperBorderRadiusLink} );
    }

    const handleTabWrapperBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            tabWrapperBorderRadiusUnits: {
                ...tabWrapperBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    const tabWrapperBorderRadiusDesktopWidth = `${tabWrapperBorderRadiusDesktop?.top}${tabWrapperBorderRadiusUnits?.Desktop} ${tabWrapperBorderRadiusDesktop?.right}${tabWrapperBorderRadiusUnits?.Desktop} ${tabWrapperBorderRadiusDesktop?.bottom}${tabWrapperBorderRadiusUnits?.Desktop} ${tabWrapperBorderRadiusDesktop?.left}${tabWrapperBorderRadiusUnits?.Desktop}`;
    const tabWrapperBorderRadiusTabletWidth = `${tabWrapperBorderRadiusTablet?.top}${tabWrapperBorderRadiusUnits?.Tablet} ${tabWrapperBorderRadiusTablet?.right}${tabWrapperBorderRadiusUnits?.Tablet} ${tabWrapperBorderRadiusTablet?.bottom}${tabWrapperBorderRadiusUnits?.Tablet} ${tabWrapperBorderRadiusTablet?.left}${tabWrapperBorderRadiusUnits?.Tablet}`;
    const tabWrapperBorderRadiusMobileWidth = `${tabWrapperBorderRadiusMobile?.top}${tabWrapperBorderRadiusUnits?.Mobile} ${tabWrapperBorderRadiusMobile?.right}${tabWrapperBorderRadiusUnits?.Mobile} ${tabWrapperBorderRadiusMobile?.bottom}${tabWrapperBorderRadiusUnits?.Mobile} ${tabWrapperBorderRadiusMobile?.left}${tabWrapperBorderRadiusUnits?.Mobile}`;
    /** End Wrapper Border Radius */

    /** Start List Padding */
    const handleTabListPaddingUnitChange = ( event, position ) => { 
        const value = event.target.value;
        if ( tabListPaddingLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabListPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabListPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabListPaddingMobile: {
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
                    setAttributes( {tabListPaddingDesktop: {...tabListPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabListPaddingTablet: {...tabListPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabListPaddingMobile: {...tabListPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTabListPaddingCombineBtn = () => {
        setAttributes( {tabListPaddingLink: !tabListPaddingLink} );
    }

    const handleTabListPaddingUnitsHandler = (unit) => {
        setAttributes( {
            tabListPaddingUnits: {
                ...tabListPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    const tabListPaddingDesktopWidth = `${tabListPaddingDesktop?.top}${tabListPaddingUnits?.Desktop} ${tabListPaddingDesktop?.right}${tabListPaddingUnits?.Desktop} ${tabListPaddingDesktop?.bottom}${tabListPaddingUnits?.Desktop} ${tabListPaddingDesktop?.left}${tabListPaddingUnits?.Desktop}`;
    const tabListPaddingTabletWidth = `${tabListPaddingTablet?.top}${tabListPaddingUnits?.Tablet} ${tabListPaddingTablet?.right}${tabListPaddingUnits?.Tablet} ${tabListPaddingTablet?.bottom}${tabListPaddingUnits?.Tablet} ${tabListPaddingTablet?.left}${tabListPaddingUnits?.Tablet}`;
    const tabListPaddingMobileWidth = `${tabListPaddingMobile?.top}${tabListPaddingUnits?.Mobile} ${tabListPaddingMobile?.right}${tabListPaddingUnits?.Mobile} ${tabListPaddingMobile?.bottom}${tabListPaddingUnits?.Mobile} ${tabListPaddingMobile?.left}${tabListPaddingUnits?.Mobile}`;
    /** End List Padding */

    /** Start List Margin */
    const handleTabListMarginUnitChange = ( event, position ) => { 
        const value = event.target.value;
        if ( tabListMarginLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabListMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabListMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabListMarginMobile: {
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
                    setAttributes( {tabListMarginDesktop: {...tabListMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabListMarginTablet: {...tabListMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabListMarginMobile: {...tabListMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTabListMarginCombineBtn = () => {
        setAttributes( {tabListMarginLink: !tabListMarginLink} );
    }

    const handleTabListMarginUnitsHandler = (unit) => {
        setAttributes( {
            tabListMarginUnits: {
                ...tabListMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const tabListMarginDesktopWidth = `${tabListMarginDesktop?.top}${tabListMarginUnits?.Desktop} ${tabListMarginDesktop?.right}${tabListMarginUnits?.Desktop} ${tabListMarginDesktop?.bottom}${tabListMarginUnits?.Desktop} ${tabListMarginDesktop?.left}${tabListMarginUnits?.Desktop}`;
    const tabListMarginTabletWidth = `${tabListMarginTablet?.top}${tabListMarginUnits?.Tablet} ${tabListMarginTablet?.right}${tabListMarginUnits?.Tablet} ${tabListMarginTablet?.bottom}${tabListMarginUnits?.Tablet} ${tabListMarginTablet?.left}${tabListMarginUnits?.Tablet}`;
    const tabListMarginMobileWidth = `${tabListMarginMobile?.top}${tabListMarginUnits?.Mobile} ${tabListMarginMobile?.right}${tabListMarginUnits?.Mobile} ${tabListMarginMobile?.bottom}${tabListMarginUnits?.Mobile} ${tabListMarginMobile?.left}${tabListMarginUnits?.Mobile}`;
    /** End List Margin */

    /** Start List Border */
    const handleTabListBorderUnitChange = ( event, position ) => {  
        const value = event.target.value;
        if ( tabListBorderLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabListBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabListBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabListBorderMobile: {
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
                    setAttributes( {tabListBorderDesktop: {...tabListBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabListBorderTablet: {...tabListBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabListBorderMobile: {...tabListBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTabListBorderCombineBtn = () => {
        setAttributes( {tabListBorderLink: !tabListBorderLink} );
    }

    const handleTabListBorderUnitsHandler = (unit) => {
        setAttributes( {
            tabListBorderUnits: {
                ...tabListBorderUnits,
                [deviceType]: unit
            }
        })
    }

    const tabListBorderDesktopWidth = `${tabListBorderDesktop?.top}${tabListBorderUnits?.Desktop} ${tabListBorderDesktop?.right}${tabListBorderUnits?.Desktop} ${tabListBorderDesktop?.bottom}${tabListBorderUnits?.Desktop} ${tabListBorderDesktop?.left}${tabListBorderUnits?.Desktop}`;
    const tabListBorderTabletWidth = `${tabListBorderTablet?.top}${tabListBorderUnits?.Tablet} ${tabListBorderTablet?.right}${tabListBorderUnits?.Tablet} ${tabListBorderTablet?.bottom}${tabListBorderUnits?.Tablet} ${tabListBorderTablet?.left}${tabListBorderUnits?.Tablet}`;
    const tabListBorderMobileWidth = `${tabListBorderMobile?.top}${tabListBorderUnits?.Mobile} ${tabListBorderMobile?.right}${tabListBorderUnits?.Mobile} ${tabListBorderMobile?.bottom}${tabListBorderUnits?.Mobile} ${tabListBorderMobile?.left}${tabListBorderUnits?.Mobile}`;
    /** End List Border */

    /** Start List Border Radius */
    const handleTabListBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( tabListBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabListBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabListBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabListBorderRadiusMobile: {
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
                    setAttributes( {tabListBorderRadiusDesktop: {...tabListBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabListBorderRadiusTablet: {...tabListBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabListBorderRadiusMobile: {...tabListBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTabListBorderRadiusCombineBtn = () => {
        setAttributes( {tabListBorderRadiusLink: !tabListBorderRadiusLink} );
    }

    const handleTabListBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            tabListBorderRadiusUnits: {
                ...tabListBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    const tabListBorderRadiusDesktopWidth = `${tabListBorderRadiusDesktop?.top}${tabListBorderRadiusUnits?.Desktop} ${tabListBorderRadiusDesktop?.right}${tabListBorderRadiusUnits?.Desktop} ${tabListBorderRadiusDesktop?.bottom}${tabListBorderRadiusUnits?.Desktop} ${tabListBorderRadiusDesktop?.left}${tabListBorderRadiusUnits?.Desktop}`;
    const tabListBorderRadiusTabletWidth = `${tabListBorderRadiusTablet?.top}${tabListBorderRadiusUnits?.Tablet} ${tabListBorderRadiusTablet?.right}${tabListBorderRadiusUnits?.Tablet} ${tabListBorderRadiusTablet?.bottom}${tabListBorderRadiusUnits?.Tablet} ${tabListBorderRadiusTablet?.left}${tabListBorderRadiusUnits?.Tablet}`;
    const tabListBorderRadiusMobileWidth = `${tabListBorderRadiusMobile?.top}${tabListBorderRadiusUnits?.Mobile} ${tabListBorderRadiusMobile?.right}${tabListBorderRadiusUnits?.Mobile} ${tabListBorderRadiusMobile?.bottom}${tabListBorderRadiusUnits?.Mobile} ${tabListBorderRadiusMobile?.left}${tabListBorderRadiusUnits?.Mobile}`;
    /** End List Border Radius */

    /** Start Title Padding */
    const handleTitlePaddingUnitChange = ( event, position ) => { 
        const value = event.target.value;
        if ( tabTitlePaddingLink ) {    
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabTitlePaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabTitlePaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabTitlePaddingMobile: {
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
                    setAttributes( {tabTitlePaddingDesktop: {...tabTitlePaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabTitlePaddingTablet: {...tabTitlePaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabTitlePaddingMobile: {...tabTitlePaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTitlePaddingCombineBtn = () => {
        setAttributes( {tabTitlePaddingLink: !tabTitlePaddingLink} );
    }

    const handleTitlePaddingUnitsHandler = (unit) => {
        setAttributes( {
            tabTitlePaddingUnits: {
                ...tabTitlePaddingUnits,
                [deviceType]: unit
            }
        })
    }

    const tabTitlePaddingDesktopWidth = `${tabTitlePaddingDesktop?.top}${tabTitlePaddingUnits?.Desktop} ${tabTitlePaddingDesktop?.right}${tabTitlePaddingUnits?.Desktop} ${tabTitlePaddingDesktop?.bottom}${tabTitlePaddingUnits?.Desktop} ${tabTitlePaddingDesktop?.left}${tabTitlePaddingUnits?.Desktop}`;
    const tabTitlePaddingTabletWidth = `${tabTitlePaddingTablet?.top}${tabTitlePaddingUnits?.Tablet} ${tabTitlePaddingTablet?.right}${tabTitlePaddingUnits?.Tablet} ${tabTitlePaddingTablet?.bottom}${tabTitlePaddingUnits?.Tablet} ${tabTitlePaddingTablet?.left}${tabTitlePaddingUnits?.Tablet}`;
    const tabTitlePaddingMobileWidth = `${tabTitlePaddingMobile?.top}${tabTitlePaddingUnits?.Mobile} ${tabTitlePaddingMobile?.right}${tabTitlePaddingUnits?.Mobile} ${tabTitlePaddingMobile?.bottom}${tabTitlePaddingUnits?.Mobile} ${tabTitlePaddingMobile?.left}${tabTitlePaddingUnits?.Mobile}`;
    /** End Title Padding */

    /** Start Title Margin */
    const handleTitleMarginUnitChange = ( event, position ) => { 
        const value = event.target.value;
        if ( tabTitleMarginLink ) {     
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabTitleMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabTitleMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabTitleMarginMobile: {
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
                    setAttributes( {tabTitleMarginDesktop: {...tabTitleMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabTitleMarginTablet: {...tabTitleMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabTitleMarginMobile: {...tabTitleMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTitleMarginCombineBtn = () => {
        setAttributes( {tabTitleMarginLink: !tabTitleMarginLink} );
    }

    const handleTitleMarginUnitsHandler = (unit) => {
        setAttributes( {
            tabTitleMarginUnits: {
                ...tabTitleMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const tabTitleMarginDesktopWidth = `${tabTitleMarginDesktop?.top}${tabTitleMarginUnits?.Desktop} ${tabTitleMarginDesktop?.right}${tabTitleMarginUnits?.Desktop} ${tabTitleMarginDesktop?.bottom}${tabTitleMarginUnits?.Desktop} ${tabTitleMarginDesktop?.left}${tabTitleMarginUnits?.Desktop}`;
    const tabTitleMarginTabletWidth = `${tabTitleMarginTablet?.top}${tabTitleMarginUnits?.Tablet} ${tabTitleMarginTablet?.right}${tabTitleMarginUnits?.Tablet} ${tabTitleMarginTablet?.bottom}${tabTitleMarginUnits?.Tablet} ${tabTitleMarginTablet?.left}${tabTitleMarginUnits?.Tablet}`;
    const tabTitleMarginMobileWidth = `${tabTitleMarginMobile?.top}${tabTitleMarginUnits?.Mobile} ${tabTitleMarginMobile?.right}${tabTitleMarginUnits?.Mobile} ${tabTitleMarginMobile?.bottom}${tabTitleMarginUnits?.Mobile} ${tabTitleMarginMobile?.left}${tabTitleMarginUnits?.Mobile}`;
    /** End Title Margin */

    /** Start Title Border */
    const handleTitleBorderUnitChange = ( event, position ) => {     
        const value = event.target.value;
        if ( tabTitleBorderLink ) {     
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabTitleBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabTitleBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabTitleBorderMobile: {
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
                    setAttributes( {tabTitleBorderDesktop: {...tabTitleBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabTitleBorderTablet: {...tabTitleBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabTitleBorderMobile: {...tabTitleBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTitleBorderCombineBtn = () => {
        setAttributes( {tabTitleBorderLink: !tabTitleBorderLink} );
    }

    const handleTitleBorderUnitsHandler = (unit) => {
        setAttributes( {
            tabTitleBorderUnits: {
                ...tabTitleBorderUnits,
                [deviceType]: unit
            }
        })
    }

    const tabTitleBorderDesktopWidth = `${tabTitleBorderDesktop?.top}${tabTitleBorderUnits?.Desktop} ${tabTitleBorderDesktop?.right}${tabTitleBorderUnits?.Desktop} ${tabTitleBorderDesktop?.bottom}${tabTitleBorderUnits?.Desktop} ${tabTitleBorderDesktop?.left}${tabTitleBorderUnits?.Desktop}`;
    const tabTitleBorderTabletWidth = `${tabTitleBorderTablet?.top}${tabTitleBorderUnits?.Tablet} ${tabTitleBorderTablet?.right}${tabTitleBorderUnits?.Tablet} ${tabTitleBorderTablet?.bottom}${tabTitleBorderUnits?.Tablet} ${tabTitleBorderTablet?.left}${tabTitleBorderUnits?.Tablet}`;
    const tabTitleBorderMobileWidth = `${tabTitleBorderMobile?.top}${tabTitleBorderUnits?.Mobile} ${tabTitleBorderMobile?.right}${tabTitleBorderUnits?.Mobile} ${tabTitleBorderMobile?.bottom}${tabTitleBorderUnits?.Mobile} ${tabTitleBorderMobile?.left}${tabTitleBorderUnits?.Mobile}`;
    /** End Title Border */

    /** Start Title Border Radius */
    const handleTitleBorderRadiusUnitChange = ( event, position ) => {     
        const value = event.target.value;
        if ( tabTitleBorderRadiusLink ) {     
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabTitleBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabTitleBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabTitleBorderRadiusMobile: {
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
                    setAttributes( {tabTitleBorderRadiusDesktop: {...tabTitleBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabTitleBorderRadiusTablet: {...tabTitleBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabTitleBorderRadiusMobile: {...tabTitleBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTitleBorderRadiusCombineBtn = () => {
        setAttributes( {tabTitleBorderRadiusLink: !tabTitleBorderRadiusLink} );
    }

    const handleTitleBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            tabTitleBorderRadiusUnits: {
                ...tabTitleBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    const tabTitleBorderRadiusDesktopWidth = `${tabTitleBorderRadiusDesktop?.top}${tabTitleBorderRadiusUnits?.Desktop} ${tabTitleBorderRadiusDesktop?.right}${tabTitleBorderRadiusUnits?.Desktop} ${tabTitleBorderRadiusDesktop?.bottom}${tabTitleBorderRadiusUnits?.Desktop} ${tabTitleBorderRadiusDesktop?.left}${tabTitleBorderRadiusUnits?.Desktop}`;
    const tabTitleBorderRadiusTabletWidth = `${tabTitleBorderRadiusTablet?.top}${tabTitleBorderRadiusUnits?.Tablet} ${tabTitleBorderRadiusTablet?.right}${tabTitleBorderRadiusUnits?.Tablet} ${tabTitleBorderRadiusTablet?.bottom}${tabTitleBorderRadiusUnits?.Tablet} ${tabTitleBorderRadiusTablet?.left}${tabTitleBorderRadiusUnits?.Tablet}`;
    const tabTitleBorderRadiusMobileWidth = `${tabTitleBorderRadiusMobile?.top}${tabTitleBorderRadiusUnits?.Mobile} ${tabTitleBorderRadiusMobile?.right}${tabTitleBorderRadiusUnits?.Mobile} ${tabTitleBorderRadiusMobile?.bottom}${tabTitleBorderRadiusUnits?.Mobile} ${tabTitleBorderRadiusMobile?.left}${tabTitleBorderRadiusUnits?.Mobile}`;
    /** End Title Border Radius */

    /** Start Description Padding */
    const handleDescriptionPaddingUnitChange = ( event, position ) => { 
        const value = event.target.value;
        if ( tabDescriptionPaddingLink ) {    
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabDescriptionPaddingDesktop: { 
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabDescriptionPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabDescriptionPaddingMobile: {
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
                    setAttributes( {tabDescriptionPaddingDesktop: {...tabDescriptionPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabDescriptionPaddingTablet: {...tabDescriptionPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabDescriptionPaddingMobile: {...tabDescriptionPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleDescriptionPaddingCombineBtn = () => {
        setAttributes( {tabDescriptionPaddingLink: !tabDescriptionPaddingLink} );
    }

    const handleDescriptionPaddingUnitsHandler = (unit) => {
        setAttributes( {
            tabDescriptionPaddingUnits: {
                ...tabDescriptionPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    const tabDescriptionPaddingDesktopWidth = `${tabDescriptionPaddingDesktop?.top}${tabDescriptionPaddingUnits?.Desktop} ${tabDescriptionPaddingDesktop?.right}${tabDescriptionPaddingUnits?.Desktop} ${tabDescriptionPaddingDesktop?.bottom}${tabDescriptionPaddingUnits?.Desktop} ${tabDescriptionPaddingDesktop?.left}${tabDescriptionPaddingUnits?.Desktop}`;
    const tabDescriptionPaddingTabletWidth = `${tabDescriptionPaddingTablet?.top}${tabDescriptionPaddingUnits?.Tablet} ${tabDescriptionPaddingTablet?.right}${tabDescriptionPaddingUnits?.Tablet} ${tabDescriptionPaddingTablet?.bottom}${tabDescriptionPaddingUnits?.Tablet} ${tabDescriptionPaddingTablet?.left}${tabDescriptionPaddingUnits?.Tablet}`;
    const tabDescriptionPaddingMobileWidth = `${tabDescriptionPaddingMobile?.top}${tabDescriptionPaddingUnits?.Mobile} ${tabDescriptionPaddingMobile?.right}${tabDescriptionPaddingUnits?.Mobile} ${tabDescriptionPaddingMobile?.bottom}${tabDescriptionPaddingUnits?.Mobile} ${tabDescriptionPaddingMobile?.left}${tabDescriptionPaddingUnits?.Mobile}`;
    /** End Description Padding */

    /** Start Description Margin */
    const handleDescriptionMarginUnitChange = ( event, position ) => { 
        const value = event.target.value;
        if ( tabDescriptionMarginLink ) {     
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabDescriptionMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabDescriptionMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabDescriptionMarginMobile: { 
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
                    setAttributes( {tabDescriptionMarginDesktop: {...tabDescriptionMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabDescriptionMarginTablet: {...tabDescriptionMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabDescriptionMarginMobile: {...tabDescriptionMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleDescriptionMarginCombineBtn = () => {
        setAttributes( {tabDescriptionMarginLink: !tabDescriptionMarginLink} );
    }

    const handleDescriptionMarginUnitsHandler = (unit) => {
        setAttributes( {
            tabDescriptionMarginUnits: {
                ...tabDescriptionMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const tabDescriptionMarginDesktopWidth = `${tabDescriptionMarginDesktop?.top}${tabDescriptionMarginUnits?.Desktop} ${tabDescriptionMarginDesktop?.right}${tabDescriptionMarginUnits?.Desktop} ${tabDescriptionMarginDesktop?.bottom}${tabDescriptionMarginUnits?.Desktop} ${tabDescriptionMarginDesktop?.left}${tabDescriptionMarginUnits?.Desktop}`;
    const tabDescriptionMarginTabletWidth = `${tabDescriptionMarginTablet?.top}${tabDescriptionMarginUnits?.Tablet} ${tabDescriptionMarginTablet?.right}${tabDescriptionMarginUnits?.Tablet} ${tabDescriptionMarginTablet?.bottom}${tabDescriptionMarginUnits?.Tablet} ${tabDescriptionMarginTablet?.left}${tabDescriptionMarginUnits?.Tablet}`;
    const tabDescriptionMarginMobileWidth = `${tabDescriptionMarginMobile?.top}${tabDescriptionMarginUnits?.Mobile} ${tabDescriptionMarginMobile?.right}${tabDescriptionMarginUnits?.Mobile} ${tabDescriptionMarginMobile?.bottom}${tabDescriptionMarginUnits?.Mobile} ${tabDescriptionMarginMobile?.left}${tabDescriptionMarginUnits?.Mobile}`;
    /** End Description Margin */

    /** Start Description Border */
    const handleDescriptionBorderUnitChange = ( event, position ) => {     
        const value = event.target.value;
        if ( tabDescriptionBorderLink ) {     
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabDescriptionBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabDescriptionBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabDescriptionBorderMobile: {
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
                    setAttributes( {tabDescriptionBorderDesktop: {...tabDescriptionBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabDescriptionBorderTablet: {...tabDescriptionBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabDescriptionBorderMobile: {...tabDescriptionBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleDescriptionBorderCombineBtn = () => {
        setAttributes( {tabDescriptionBorderLink: !tabDescriptionBorderLink} );
    }

    const handleDescriptionBorderUnitsHandler = (unit) => {
        setAttributes( {
            tabDescriptionBorderUnits: {
                ...tabDescriptionBorderUnits,
                [deviceType]: unit
            }
        })
    }

    const tabDescriptionBorderDesktopWidth = `${tabDescriptionBorderDesktop?.top}${tabDescriptionBorderUnits?.Desktop} ${tabDescriptionBorderDesktop?.right}${tabDescriptionBorderUnits?.Desktop} ${tabDescriptionBorderDesktop?.bottom}${tabDescriptionBorderUnits?.Desktop} ${tabDescriptionBorderDesktop?.left}${tabDescriptionBorderUnits?.Desktop}`;
    const tabDescriptionBorderTabletWidth = `${tabDescriptionBorderTablet?.top}${tabDescriptionBorderUnits?.Tablet} ${tabDescriptionBorderTablet?.right}${tabDescriptionBorderUnits?.Tablet} ${tabDescriptionBorderTablet?.bottom}${tabDescriptionBorderUnits?.Tablet} ${tabDescriptionBorderTablet?.left}${tabDescriptionBorderUnits?.Tablet}`;
    const tabDescriptionBorderMobileWidth = `${tabDescriptionBorderMobile?.top}${tabDescriptionBorderUnits?.Mobile} ${tabDescriptionBorderMobile?.right}${tabDescriptionBorderUnits?.Mobile} ${tabDescriptionBorderMobile?.bottom}${tabDescriptionBorderUnits?.Mobile} ${tabDescriptionBorderMobile?.left}${tabDescriptionBorderUnits?.Mobile}`;
    /** End Description Border */

    /** Start Description Border Radius */
    const handleDescriptionBorderRadiusUnitChange = ( event, position ) => {     
        const value = event.target.value;
        if ( tabDescriptionBorderRadiusLink ) {     
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabDescriptionBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabDescriptionBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabDescriptionBorderRadiusMobile: {
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
                    setAttributes( {tabDescriptionBorderRadiusDesktop: {...tabDescriptionBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabDescriptionBorderRadiusTablet: {...tabDescriptionBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabDescriptionBorderRadiusMobile: {...tabDescriptionBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleDescriptionBorderRadiusCombineBtn = () => {
        setAttributes( {tabDescriptionBorderRadiusLink: !tabDescriptionBorderRadiusLink} );
    }

    const handleDescriptionBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            tabDescriptionBorderRadiusUnits: {
                ...tabDescriptionBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    const tabDescriptionBorderRadiusDesktopWidth = `${tabDescriptionBorderRadiusDesktop?.top}${tabDescriptionBorderRadiusUnits?.Desktop} ${tabDescriptionBorderRadiusDesktop?.right}${tabDescriptionBorderRadiusUnits?.Desktop} ${tabDescriptionBorderRadiusDesktop?.bottom}${tabDescriptionBorderRadiusUnits?.Desktop} ${tabDescriptionBorderRadiusDesktop?.left}${tabDescriptionBorderRadiusUnits?.Desktop}`;
    const tabDescriptionBorderRadiusTabletWidth = `${tabDescriptionBorderRadiusTablet?.top}${tabDescriptionBorderRadiusUnits?.Tablet} ${tabDescriptionBorderRadiusTablet?.right}${tabDescriptionBorderRadiusUnits?.Tablet} ${tabDescriptionBorderRadiusTablet?.bottom}${tabDescriptionBorderRadiusUnits?.Tablet} ${tabDescriptionBorderRadiusTablet?.left}${tabDescriptionBorderRadiusUnits?.Tablet}`;
    const tabDescriptionBorderRadiusMobileWidth = `${tabDescriptionBorderRadiusMobile?.top}${tabDescriptionBorderRadiusUnits?.Mobile} ${tabDescriptionBorderRadiusMobile?.right}${tabDescriptionBorderRadiusUnits?.Mobile} ${tabDescriptionBorderRadiusMobile?.bottom}${tabDescriptionBorderRadiusUnits?.Mobile} ${tabDescriptionBorderRadiusMobile?.left}${tabDescriptionBorderRadiusUnits?.Mobile}`;
    /** End Description Border Radius */

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

    const tabIconBorderDesktopWidth = `${tabIconBorderDesktop?.top}${tabIconBorderUnits?.Desktop} ${tabIconBorderDesktop?.right}${tabIconBorderUnits?.Desktop} ${tabIconBorderDesktop?.bottom}${tabIconBorderUnits?.Desktop} ${tabIconBorderDesktop?.left}${tabIconBorderUnits?.Desktop}`;
    const tabIconBorderTabletWidth = `${tabIconBorderTablet?.top}${tabIconBorderUnits?.Tablet} ${tabIconBorderTablet?.right}${tabIconBorderUnits?.Tablet} ${tabIconBorderTablet?.bottom}${tabIconBorderUnits?.Tablet} ${tabIconBorderTablet?.left}${tabIconBorderUnits?.Tablet}`;
    const tabIconBorderMobileWidth = `${tabIconBorderMobile?.top}${tabIconBorderUnits?.Mobile} ${tabIconBorderMobile?.right}${tabIconBorderUnits?.Mobile} ${tabIconBorderMobile?.bottom}${tabIconBorderUnits?.Mobile} ${tabIconBorderMobile?.left}${tabIconBorderUnits?.Mobile}`;
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

    const tabIconBorderRadiusDesktopWidth = `${tabIconBorderRadiusDesktop?.top}${tabIconBorderRadiusUnits?.Desktop} ${tabIconBorderRadiusDesktop?.right}${tabIconBorderRadiusUnits?.Desktop} ${tabIconBorderRadiusDesktop?.bottom}${tabIconBorderRadiusUnits?.Desktop} ${tabIconBorderRadiusDesktop?.left}${tabIconBorderRadiusUnits?.Desktop}`;
    const tabIconBorderRadiusTabletWidth = `${tabIconBorderRadiusTablet?.top}${tabIconBorderRadiusUnits?.Tablet} ${tabIconBorderRadiusTablet?.right}${tabIconBorderRadiusUnits?.Tablet} ${tabIconBorderRadiusTablet?.bottom}${tabIconBorderRadiusUnits?.Tablet} ${tabIconBorderRadiusTablet?.left}${tabIconBorderRadiusUnits?.Tablet}`;
    const tabIconBorderRadiusMobileWidth = `${tabIconBorderRadiusMobile?.top}${tabIconBorderRadiusUnits?.Mobile} ${tabIconBorderRadiusMobile?.right}${tabIconBorderRadiusUnits?.Mobile} ${tabIconBorderRadiusMobile?.bottom}${tabIconBorderRadiusUnits?.Mobile} ${tabIconBorderRadiusMobile?.left}${tabIconBorderRadiusUnits?.Mobile}`;
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

    const tabIconPaddingDesktopWidth = `${tabIconPaddingDesktop?.top}${tabIconPaddingUnits?.Desktop} ${tabIconPaddingDesktop?.right}${tabIconPaddingUnits?.Desktop} ${tabIconPaddingDesktop?.bottom}${tabIconPaddingUnits?.Desktop} ${tabIconPaddingDesktop?.left}${tabIconPaddingUnits?.Desktop}`;
    const tabIconPaddingTabletWidth = `${tabIconPaddingTablet?.top}${tabIconPaddingUnits?.Tablet} ${tabIconPaddingTablet?.right}${tabIconPaddingUnits?.Tablet} ${tabIconPaddingTablet?.bottom}${tabIconPaddingUnits?.Tablet} ${tabIconPaddingTablet?.left}${tabIconPaddingUnits?.Tablet}`;
    const tabIconPaddingMobileWidth = `${tabIconPaddingMobile?.top}${tabIconPaddingUnits?.Mobile} ${tabIconPaddingMobile?.right}${tabIconPaddingUnits?.Mobile} ${tabIconPaddingMobile?.bottom}${tabIconPaddingUnits?.Mobile} ${tabIconPaddingMobile?.left}${tabIconPaddingUnits?.Mobile}`;
    /** End Padding */

    /** Start Tab Content Padding */
    const handleTabContentPaddingUnitChange = ( event, position ) => {  
        const value = event.target.value;
        if ( tabContentPaddingLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabContentPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabContentPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabContentPaddingMobile: {
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
                    setAttributes( {tabContentPaddingDesktop: {...tabContentPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabContentPaddingTablet: {...tabContentPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabContentPaddingMobile: {...tabContentPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTabContentPaddingCombineBtn = () => {
        setAttributes( {tabContentPaddingLink: !tabContentPaddingLink} );
    }

    const handleTabContentPaddingUnitsHandler = (unit) => {
        setAttributes( {
            tabContentPaddingUnits: {
                ...tabContentPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    const tabContentPaddingDesktopWidth = `${tabContentPaddingDesktop?.top}${tabContentPaddingUnits?.Desktop} ${tabContentPaddingDesktop?.right}${tabContentPaddingUnits?.Desktop} ${tabContentPaddingDesktop?.bottom}${tabContentPaddingUnits?.Desktop} ${tabContentPaddingDesktop?.left}${tabContentPaddingUnits?.Desktop}`;
    const tabContentPaddingTabletWidth = `${tabContentPaddingTablet?.top}${tabContentPaddingUnits?.Tablet} ${tabContentPaddingTablet?.right}${tabContentPaddingUnits?.Tablet} ${tabContentPaddingTablet?.bottom}${tabContentPaddingUnits?.Tablet} ${tabContentPaddingTablet?.left}${tabContentPaddingUnits?.Tablet}`;
    const tabContentPaddingMobileWidth = `${tabContentPaddingMobile?.top}${tabContentPaddingUnits?.Mobile} ${tabContentPaddingMobile?.right}${tabContentPaddingUnits?.Mobile} ${tabContentPaddingMobile?.bottom}${tabContentPaddingUnits?.Mobile} ${tabContentPaddingMobile?.left}${tabContentPaddingUnits?.Mobile}`;
    /** End Tab Content Padding */

    /** Start Tab Content Margin */
    const handleTabContentMarginUnitChange = ( event, position ) => { 
        const value = event.target.value;
        if ( tabContentMarginLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabContentMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabContentMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabContentMarginMobile: {
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
                    setAttributes( {tabContentMarginDesktop: {...tabContentMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabContentMarginTablet: {...tabContentMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabContentMarginMobile: {...tabContentMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTabContentMarginCombineBtn = () => {
        setAttributes( {tabContentMarginLink: !tabContentMarginLink} );
    }

    const handleTabContentMarginUnitsHandler = (unit) => {
        setAttributes( {
            tabContentMarginUnits: {
                ...tabContentMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const tabContentMarginDesktopWidth = `${tabContentMarginDesktop?.top}${tabContentMarginUnits?.Desktop} ${tabContentMarginDesktop?.right}${tabContentMarginUnits?.Desktop} ${tabContentMarginDesktop?.bottom}${tabContentMarginUnits?.Desktop} ${tabContentMarginDesktop?.left}${tabContentMarginUnits?.Desktop}`;
    const tabContentMarginTabletWidth = `${tabContentMarginTablet?.top}${tabContentMarginUnits?.Tablet} ${tabContentMarginTablet?.right}${tabContentMarginUnits?.Tablet} ${tabContentMarginTablet?.bottom}${tabContentMarginUnits?.Tablet} ${tabContentMarginTablet?.left}${tabContentMarginUnits?.Tablet}`;
    const tabContentMarginMobileWidth = `${tabContentMarginMobile?.top}${tabContentMarginUnits?.Mobile} ${tabContentMarginMobile?.right}${tabContentMarginUnits?.Mobile} ${tabContentMarginMobile?.bottom}${tabContentMarginUnits?.Mobile} ${tabContentMarginMobile?.left}${tabContentMarginUnits?.Mobile}`;
    /** End Tab Content Margin */

    /** Start Tab Content Border */
    const handleTabContentBorderUnitChange = ( event, position ) => {  
        const value = event.target.value;
        if ( tabContentBorderLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabContentBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabContentBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabContentBorderMobile: {
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
                    setAttributes( {tabContentBorderDesktop: {...tabContentBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabContentBorderTablet: {...tabContentBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabContentBorderMobile: {...tabContentBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTabContentBorderCombineBtn = () => {
        setAttributes( {tabContentBorderLink: !tabContentBorderLink} );
    }

    const handleTabContentBorderUnitsHandler = (unit) => {
        setAttributes( {
            tabContentBorderUnits: {
                ...tabContentBorderUnits,
                [deviceType]: unit
            }
        })
    }

    const tabContentBorderDesktopWidth = `${tabContentBorderDesktop?.top}${tabContentBorderUnits?.Desktop} ${tabContentBorderDesktop?.right}${tabContentBorderUnits?.Desktop} ${tabContentBorderDesktop?.bottom}${tabContentBorderUnits?.Desktop} ${tabContentBorderDesktop?.left}${tabContentBorderUnits?.Desktop}`;
    const tabContentBorderTabletWidth = `${tabContentBorderTablet?.top}${tabContentBorderUnits?.Tablet} ${tabContentBorderTablet?.right}${tabContentBorderUnits?.Tablet} ${tabContentBorderTablet?.bottom}${tabContentBorderUnits?.Tablet} ${tabContentBorderTablet?.left}${tabContentBorderUnits?.Tablet}`;
    const tabContentBorderMobileWidth = `${tabContentBorderMobile?.top}${tabContentBorderUnits?.Mobile} ${tabContentBorderMobile?.right}${tabContentBorderUnits?.Mobile} ${tabContentBorderMobile?.bottom}${tabContentBorderUnits?.Mobile} ${tabContentBorderMobile?.left}${tabContentBorderUnits?.Mobile}`;
    /** End Tab Content Border */

    /** Start Tab Content Border Radius */
    const handleTabContentBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( tabContentBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabContentBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabContentBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabContentBorderRadiusMobile: {
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
                    setAttributes( {tabContentBorderRadiusDesktop: {...tabContentBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabContentBorderRadiusTablet: {...tabContentBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabContentBorderRadiusMobile: {...tabContentBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleTabContentBorderRadiusCombineBtn = () => {
        setAttributes( {tabContentBorderRadiusLink: !tabContentBorderRadiusLink} );
    }

    const handleTabContentBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            tabContentBorderRadiusUnits: {
                ...tabContentBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    const tabContentBorderRadiusDesktopWidth = `${tabContentBorderRadiusDesktop?.top}${tabContentBorderRadiusUnits?.Desktop} ${tabContentBorderRadiusDesktop?.right}${tabContentBorderRadiusUnits?.Desktop} ${tabContentBorderRadiusDesktop?.bottom}${tabContentBorderRadiusUnits?.Desktop} ${tabContentBorderRadiusDesktop?.left}${tabContentBorderRadiusUnits?.Desktop}`;
    const tabContentBorderRadiusTabletWidth = `${tabContentBorderRadiusTablet?.top}${tabContentBorderRadiusUnits?.Tablet} ${tabContentBorderRadiusTablet?.right}${tabContentBorderRadiusUnits?.Tablet} ${tabContentBorderRadiusTablet?.bottom}${tabContentBorderRadiusUnits?.Tablet} ${tabContentBorderRadiusTablet?.left}${tabContentBorderRadiusUnits?.Tablet}`;
    const tabContentBorderRadiusMobileWidth = `${tabContentBorderRadiusMobile?.top}${tabContentBorderRadiusUnits?.Mobile} ${tabContentBorderRadiusMobile?.right}${tabContentBorderRadiusUnits?.Mobile} ${tabContentBorderRadiusMobile?.bottom}${tabContentBorderRadiusUnits?.Mobile} ${tabContentBorderRadiusMobile?.left}${tabContentBorderRadiusUnits?.Mobile}`;
    /** End Tab Content Border Radius */

    /** Start Global Padding */
    const handleGlobalPaddingUnitChange = ( event, position ) => {  
        const value = event.target.value;
        if ( tabGlobalPaddingLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabGlobalPaddingDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabGlobalPaddingTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabGlobalPaddingMobile: {
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
                    setAttributes( {tabGlobalPaddingDesktop: {...tabGlobalPaddingDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabGlobalPaddingTablet: {...tabGlobalPaddingTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabGlobalPaddingMobile: {...tabGlobalPaddingMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalPaddingCombineBtn = () => {
        setAttributes( {tabGlobalPaddingLink: !tabGlobalPaddingLink} );
    }

    const handleGlobalPaddingUnitsHandler = (unit) => {
        setAttributes( {
            tabGlobalPaddingUnits: {
                ...tabGlobalPaddingUnits,
                [deviceType]: unit
            }
        })
    }

    const tabGlobalPaddingDesktopWidth = `${tabGlobalPaddingDesktop?.top}${tabGlobalPaddingUnits?.Desktop} ${tabGlobalPaddingDesktop?.right}${tabGlobalPaddingUnits?.Desktop} ${tabGlobalPaddingDesktop?.bottom}${tabGlobalPaddingUnits?.Desktop} ${tabGlobalPaddingDesktop?.left}${tabGlobalPaddingUnits?.Desktop}`;
    const tabGlobalPaddingTabletWidth = `${tabGlobalPaddingTablet?.top}${tabGlobalPaddingUnits?.Tablet} ${tabGlobalPaddingTablet?.right}${tabGlobalPaddingUnits?.Tablet} ${tabGlobalPaddingTablet?.bottom}${tabGlobalPaddingUnits?.Tablet} ${tabGlobalPaddingTablet?.left}${tabGlobalPaddingUnits?.Tablet}`;
    const tabGlobalPaddingMobileWidth = `${tabGlobalPaddingMobile?.top}${tabGlobalPaddingUnits?.Mobile} ${tabGlobalPaddingMobile?.right}${tabGlobalPaddingUnits?.Mobile} ${tabGlobalPaddingMobile?.bottom}${tabGlobalPaddingUnits?.Mobile} ${tabGlobalPaddingMobile?.left}${tabGlobalPaddingUnits?.Mobile}`;
    /** End Global Padding */

    /** Start Global Margin */
    const handleGlobalMarginUnitChange = ( event, position ) => { 
        const value = event.target.value;
        if ( tabGlobalMarginLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabGlobalMarginDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabGlobalMarginTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabGlobalMarginMobile: {
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
                    setAttributes( {tabGlobalMarginDesktop: {...tabGlobalMarginDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabGlobalMarginTablet: {...tabGlobalMarginTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabGlobalMarginMobile: {...tabGlobalMarginMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalMarginCombineBtn = () => {
        setAttributes( {tabGlobalMarginLink: !tabGlobalMarginLink} );
    }

    const handleGlobalMarginUnitsHandler = (unit) => {
        setAttributes( {
            tabGlobalMarginUnits: {
                ...tabGlobalMarginUnits,
                [deviceType]: unit
            }
        })
    }

    const tabGlobalMarginDesktopWidth = `${tabGlobalMarginDesktop?.top}${tabGlobalMarginUnits?.Desktop} ${tabGlobalMarginDesktop?.right}${tabGlobalMarginUnits?.Desktop} ${tabGlobalMarginDesktop?.bottom}${tabGlobalMarginUnits?.Desktop} ${tabGlobalMarginDesktop?.left}${tabGlobalMarginUnits?.Desktop}`;
    const tabGlobalMarginTabletWidth = `${tabGlobalMarginTablet?.top}${tabGlobalMarginUnits?.Tablet} ${tabGlobalMarginTablet?.right}${tabGlobalMarginUnits?.Tablet} ${tabGlobalMarginTablet?.bottom}${tabGlobalMarginUnits?.Tablet} ${tabGlobalMarginTablet?.left}${tabGlobalMarginUnits?.Tablet}`;
    const tabGlobalMarginMobileWidth = `${tabGlobalMarginMobile?.top}${tabGlobalMarginUnits?.Mobile} ${tabGlobalMarginMobile?.right}${tabGlobalMarginUnits?.Mobile} ${tabGlobalMarginMobile?.bottom}${tabGlobalMarginUnits?.Mobile} ${tabGlobalMarginMobile?.left}${tabGlobalMarginUnits?.Mobile}`;
    /** End Global Margin */

    /** Start Global Border */
    const handleGlobalBorderUnitChange = ( event, position ) => {  
        const value = event.target.value;
        if ( tabGlobalBorderLink ) { 
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabGlobalBorderDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabGlobalBorderTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabGlobalBorderMobile: {
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
                    setAttributes( {tabGlobalBorderDesktop: {...tabGlobalBorderDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabGlobalBorderTablet: {...tabGlobalBorderTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabGlobalBorderMobile: {...tabGlobalBorderMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderCombineBtn = () => {
        setAttributes( {tabGlobalBorderLink: !tabGlobalBorderLink} );
    }

    const handleGlobalBorderUnitsHandler = (unit) => {
        setAttributes( {
            tabGlobalBorderUnits: {
                ...tabGlobalBorderUnits,
                [deviceType]: unit
            }
        })
    }

    const tabGlobalBorderDesktopWidth = `${tabGlobalBorderDesktop?.top}${tabGlobalBorderUnits?.Desktop} ${tabGlobalBorderDesktop?.right}${tabGlobalBorderUnits?.Desktop} ${tabGlobalBorderDesktop?.bottom}${tabGlobalBorderUnits?.Desktop} ${tabGlobalBorderDesktop?.left}${tabGlobalBorderUnits?.Desktop}`;
    const tabGlobalBorderTabletWidth = `${tabGlobalBorderTablet?.top}${tabGlobalBorderUnits?.Tablet} ${tabGlobalBorderTablet?.right}${tabGlobalBorderUnits?.Tablet} ${tabGlobalBorderTablet?.bottom}${tabGlobalBorderUnits?.Tablet} ${tabGlobalBorderTablet?.left}${tabGlobalBorderUnits?.Tablet}`;
    const tabGlobalBorderMobileWidth = `${tabGlobalBorderMobile?.top}${tabGlobalBorderUnits?.Mobile} ${tabGlobalBorderMobile?.right}${tabGlobalBorderUnits?.Mobile} ${tabGlobalBorderMobile?.bottom}${tabGlobalBorderUnits?.Mobile} ${tabGlobalBorderMobile?.left}${tabGlobalBorderUnits?.Mobile}`;
    /** End Global Border */

    /** Start Global Border Radius */
    const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
        const value = event.target.value;
        if ( tabGlobalBorderRadiusLink ) {
            switch ( deviceType ) {
                case 'Desktop':
                    setAttributes( {
                        tabGlobalBorderRadiusDesktop: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Tablet':
                    setAttributes( {
                        tabGlobalBorderRadiusTablet: {
                            top: value,
                            right: value,
                            bottom: value,
                            left: value
                        }
                    } );
                    break;
                case 'Mobile':
                    setAttributes( {
                        tabGlobalBorderRadiusMobile: {
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
                    setAttributes( {tabGlobalBorderRadiusDesktop: {...tabGlobalBorderRadiusDesktop, [position]: value}} );
                    break;
                case 'Tablet':
                    setAttributes( {tabGlobalBorderRadiusTablet: {...tabGlobalBorderRadiusTablet, [position]: value}} );
                    break;
                case 'Mobile':
                    setAttributes( {tabGlobalBorderRadiusMobile: {...tabGlobalBorderRadiusMobile, [position]: value}} );
                    break;
                default:
                    break;
            }
        }

    }

    const handleGlobalBorderRadiusCombineBtn = () => {
        setAttributes( {tabGlobalBorderRadiusLink: !tabGlobalBorderRadiusLink} );
    }

    const handleGlobalBorderRadiusUnitsHandler = (unit) => {
        setAttributes( {
            tabGlobalBorderRadiusUnits: {
                ...tabGlobalBorderRadiusUnits,
                [deviceType]: unit
            }
        })
    }

    const tabGlobalBorderRadiusDesktopWidth = `${tabGlobalBorderRadiusDesktop?.top}${tabGlobalBorderRadiusUnits?.Desktop} ${tabGlobalBorderRadiusDesktop?.right}${tabGlobalBorderRadiusUnits?.Desktop} ${tabGlobalBorderRadiusDesktop?.bottom}${tabGlobalBorderRadiusUnits?.Desktop} ${tabGlobalBorderRadiusDesktop?.left}${tabGlobalBorderRadiusUnits?.Desktop}`;
    const tabGlobalBorderRadiusTabletWidth = `${tabGlobalBorderRadiusTablet?.top}${tabGlobalBorderRadiusUnits?.Tablet} ${tabGlobalBorderRadiusTablet?.right}${tabGlobalBorderRadiusUnits?.Tablet} ${tabGlobalBorderRadiusTablet?.bottom}${tabGlobalBorderRadiusUnits?.Tablet} ${tabGlobalBorderRadiusTablet?.left}${tabGlobalBorderRadiusUnits?.Tablet}`;
    const tabGlobalBorderRadiusMobileWidth = `${tabGlobalBorderRadiusMobile?.top}${tabGlobalBorderRadiusUnits?.Mobile} ${tabGlobalBorderRadiusMobile?.right}${tabGlobalBorderRadiusUnits?.Mobile} ${tabGlobalBorderRadiusMobile?.bottom}${tabGlobalBorderRadiusUnits?.Mobile} ${tabGlobalBorderRadiusMobile?.left}${tabGlobalBorderRadiusUnits?.Mobile}`;
    /** End Global Border Radius */

    const allBlockStyle = useMemo(() => `

        .${blockId}.fb-tabs-wrapper {
            ${tabGlobalPaddingDesktopWidth && tabGlobalPaddingDesktop?.top ? `padding: ${tabGlobalPaddingDesktopWidth};` : ''}  
            ${tabGlobalMarginDesktopWidth && tabGlobalMarginDesktop?.top ? `margin: ${tabGlobalMarginDesktopWidth};` : ''}
            ${tabGlobalBorder ? `border: ${tabGlobalBorder};` : ''}
			${tabGlobalBorderColor ? `border-color: ${tabGlobalBorderColor};` : ''}
			${tabGlobalBorderDesktopWidth && tabGlobalBorderDesktop?.top ? `border-width: ${tabGlobalBorderDesktopWidth};` : ''}
			${tabGlobalBorderRadiusDesktopWidth && tabGlobalBorderRadiusDesktop?.top ? `border-radius: ${tabGlobalBorderRadiusDesktopWidth};` : ''} 
            ${tabGlobalBoxShadowCssValue ? `box-shadow: ${tabGlobalBoxShadowCssValue};` : ''}
            ${tabGlobalZIndex?.Desktop ? `z-index: ${tabGlobalZIndex?.Desktop};` : ''}
            ${tabGlobalBgColorType === "gradient"
                  ? `background: ${
                      tabGlobalBgCustomGradientColorSwitcher && tabGlobalBgCustomGradientColor
                        ? tabGlobalBgCustomGradientColor
                        : tabGlobalBgGradientColor
                    };`
                  : tabGlobalBgColor ? `background: ${tabGlobalBgColor};` : ''
            }
            transition: all .3s ease-in-out;
        }
        .${blockId}.fb-tabs-wrapper:hover {
            ${tabGlobalBorderHoverColor ? `border-color: ${tabGlobalBorderHoverColor};` : ''}
            ${tabGlobalBoxShadowHoverCssValue ? `box-shadow: ${tabGlobalBoxShadowHoverCssValue};` : ''}
            ${tabGlobalBgHoverColorType === "gradient"
                ? `background: ${
                    tabGlobalBgHoverCustomGradientColorSwitcher && tabGlobalBgHoverCustomGradientColor
                        ? tabGlobalBgHoverCustomGradientColor
                        : tabGlobalBgHoverGradientColor
                    };`
                : tabGlobalBgHoverColor ? `background: ${tabGlobalBgHoverColor};` : ''
            }
        }

        .${blockId} .fb-tabs-wrap {
            display: flex;
            flex-direction: ${tabLayoutSwitcher === 'horizontal' ? 'column' : 'row'};
            max-width: 100%;
        }
        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel {
            ${tabTitlesAlignment?.Desktop ? `justify-content: ${tabTitlesAlignmentMap[tabTitlesAlignment?.Desktop] || 'flex-start'};` : ''}
            ${tabWrapperPaddingDesktopWidth && tabWrapperPaddingDesktop?.top ? `padding: ${tabWrapperPaddingDesktopWidth};` : ''} 
            ${tabWrapperMarginDesktopWidth && tabWrapperMarginDesktop?.top ? `margin: ${tabWrapperMarginDesktopWidth};` : ''}
            ${tabWrapperGap?.Desktop && tabWrapperGapUnits?.Desktop ? `gap: ${tabWrapperGap?.Desktop}${tabWrapperGapUnits?.Desktop};` : ''}
            ${tabWrapperBorder ? `border: ${tabWrapperBorder};` : ''}
			${tabWrapperBorderColor ? `border-color: ${tabWrapperBorderColor};` : ''}
			${tabWrapperBorderDesktopWidth && tabWrapperBorderDesktop?.top ? `border-width: ${tabWrapperBorderDesktopWidth};` : ''}
			${tabWrapperBorderRadiusDesktopWidth && tabWrapperBorderRadiusDesktop?.top ? `border-radius: ${tabWrapperBorderRadiusDesktopWidth};` : ''} 

            ${tabWrapperBgColorType === "gradient"
                  ? `background: ${
                      tabWrapperBgCustomGradientColorSwitcher && tabWrapperBgCustomGradientColor
                        ? tabWrapperBgCustomGradientColor
                        : tabWrapperBgGradientColor
                    };`
                  : tabWrapperBgColor ? `background: ${tabWrapperBgColor};` : ''
            }
            transition: all .3s ease-in-out;
        }
        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel:hover {
            ${tabWrapperBorderHoverColor ? `border-color: ${tabWrapperBorderHoverColor};` : ''}
            ${tabWrapperBgHoverColorType === "gradient"
                  ? `background: ${
                      tabWrapperBgHoverCustomGradientColorSwitcher && tabWrapperBgHoverCustomGradientColor
                        ? tabWrapperBgHoverCustomGradientColor
                        : tabWrapperBgHoverGradientColor
                    };`
                  : tabWrapperBgHoverColor ? `background: ${tabWrapperBgHoverColor};` : ''
            }
        }
        .${blockId} .fb-tabs-wrap.horizontal ul.fb-tabs-panel {
            flex-direction: row;
        }

        .${blockId} .fb-tabs-wrap.vertical ul.fb-tabs-panel {
            flex-direction: column;
        }

        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li {
            ${tabListPaddingDesktopWidth && tabListPaddingDesktop?.top ? `padding: ${tabListPaddingDesktopWidth} !important;` : ''}
            ${tabListMarginDesktopWidth && tabListMarginDesktop?.top ? `margin: ${tabListMarginDesktopWidth};` : ''}
            ${tabListMinWidth?.Desktop && tabListMinWidthUnits?.Desktop ? `min-width: ${tabListMinWidth?.Desktop}${tabListMinWidthUnits?.Desktop};` : ''}
            ${tabLayoutSwitcher === 'vertical' ? 'width: 100px;' : ''}
            ${tabListItemGap?.Desktop && tabListItemGapUnits?.Desktop ? `gap: ${tabListItemGap?.Desktop}${tabListItemGapUnits?.Desktop};` : ''}
            ${tabListBorder ? `border: ${tabListBorder};` : ''}
			${tabListBorderColor ? `border-color: ${tabListBorderColor};` : ''}
			${tabListBorderDesktopWidth && tabListBorderDesktop?.top ? `border-width: ${tabListBorderDesktopWidth};` : ''}
			${tabListBorderRadiusDesktopWidth && tabListBorderRadiusDesktop?.top ? `border-radius: ${tabListBorderRadiusDesktopWidth};` : ''} 

            ${tabListBgColorType === "gradient"
                  ? `background: ${
                      tabListBgCustomGradientColorSwitcher && tabListBgCustomGradientColor
                        ? tabListBgCustomGradientColor
                        : tabListBgGradientColor
                    };`
                  : tabListBgColor ? `background: ${tabListBgColor};` : ''
            }
            transition: all .3s ease-in-out;
        }
        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li:hover {
        	${tabListBorderHoverColor ? `border-color: ${tabListBorderHoverColor};` : ''}
            ${tabListBgHoverColorType === "gradient"
                  ? `background: ${
                      tabListBgHoverCustomGradientColorSwitcher && tabListBgHoverCustomGradientColor
                        ? tabListBgHoverCustomGradientColor
                        : tabListBgHoverGradientColor
                    };`
                  : tabListBgHoverColor ? `background: ${tabListBgHoverColor};` : ''
            }
        }

        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li.left ,
        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li.right {
            flex-direction: row;
        }

        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li.top ,
        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li.bottom {
            flex-direction: column;
        }

        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li.fb-tabs-active {
            ${tabListActiveBgColorType === "gradient"
                ? `background: ${
                    tabListActiveBgCustomGradientColorSwitcher && tabListActiveBgCustomGradientColor
                    ? tabListActiveBgCustomGradientColor
                    : tabListActiveBgGradientColor
                };`
                : tabListActiveBgColor ? `background: ${tabListActiveBgColor};` : ''
            }

            ${tabListActiveBorderColor ? `border-color: ${tabListActiveBorderColor};` : ''}
        }

        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li.fb-tabs-active .fb-tab-icon svg{
            ${tabIconActiveColor ? `fill: ${tabIconActiveColor};` : ''}
        }
        
        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li.fb-tabs-active .fb-tab-icon {
			${tabIconActiveNormalBackgroundType === 'gradient' ? `   	
                ${tabIconActiveNormalCustomGradientSwitcher && tabIconActiveNormalCustomGradientInputValue ? `background: ${tabIconActiveNormalCustomGradientInputValue};` : `background: ${tabIconActiveNormalGradientColor};`}
            `: `
                ${tabIconBgActiveColor ? `background: ${tabIconBgActiveColor};` : ''}
            `}
        }
        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li.fb-tabs-active .fb-tab-title{
            ${tabTitleActiveColor ? `color: ${tabTitleActiveColor};` : ''}
        }
        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li.fb-tabs-active .fb-tab-description{
            ${tabDescriptionActiveColor ? `color: ${tabDescriptionActiveColor};` : ''}
        }
            
        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li .fb-tab-title {
            ${tabTitleGlobalTypoSwitcher?.fontFamily === true && tabTitleGlobalTypographyData?.fontFamily ? `font-family: ${tabTitleGlobalTypographyData?.fontFamily};` : ''}
            ${tabTitleGlobalTypoSwitcher?.fontSize === true && tabTitleGlobalTypographyData?.fontSize ? `font-size: ${tabTitleGlobalTypographyData?.fontSize};` : ''}
            ${tabTitleGlobalTypoSwitcher?.fontWeight === true && tabTitleGlobalTypographyData?.fontWeight ? `font-weight: ${tabTitleGlobalTypographyData?.fontWeight};` : ''}
            ${tabTitleGlobalTypoSwitcher?.fontStyle === true && tabTitleGlobalTypographyData?.fontStyle ? `font-style: ${tabTitleGlobalTypographyData?.fontStyle};` : ''}
            ${tabTitleGlobalTypoSwitcher?.textTransform === true && tabTitleGlobalTypographyData?.textTransform ? `text-transform: ${tabTitleGlobalTypographyData?.textTransform};` : ''}
            ${tabTitleGlobalTypoSwitcher?.textDecoration === true && tabTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${tabTitleGlobalTypographyData?.textDecoration};` : ''}
            ${tabTitleGlobalTypoSwitcher?.letterSpacing === true && tabTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${tabTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${tabTitleGlobalTypoSwitcher?.lineHeight === true && tabTitleGlobalTypographyData?.lineHeight ? `line-height: ${tabTitleGlobalTypographyData?.lineHeight};` : ''}

            ${tabTitleGlobalTypoSwitcher?.fontFamily === false && tabTitleFontFamily && tabTitleFontFamily !== 'Default' ? `font-family: ${tabTitleFontFamily};` : ''}
            ${tabTitleGlobalTypoSwitcher?.fontSize === false && tabTitleFontSize?.Desktop && tabTitleFontSizeUnits?.Desktop ? `font-size: ${tabTitleFontSize?.Desktop}${tabTitleFontSizeUnits?.Desktop};` : ''}
            ${tabTitleGlobalTypoSwitcher?.fontWeight === false && tabTitleFontWeight ? `font-weight: ${tabTitleFontWeight};` : ''}
            ${tabTitleGlobalTypoSwitcher?.fontStyle === false && tabTitleFontStyle ? `font-style: ${tabTitleFontStyle};` : ''}
            ${tabTitleGlobalTypoSwitcher?.textTransform === false && tabTitleTextTransform ? `text-transform: ${tabTitleTextTransform};` : ''}
            ${tabTitleGlobalTypoSwitcher?.textDecoration === false && tabTitleTextDecoration ? `text-decoration: ${tabTitleTextDecoration};` : ''}
            ${tabTitleGlobalTypoSwitcher?.letterSpacing === false && tabTitleLetterSpacing?.Desktop && tabTitleLetterSpacingUnits?.Desktop ? `letter-spacing: ${tabTitleLetterSpacing?.Desktop}${tabTitleLetterSpacingUnits?.Desktop};` : ''}
            ${tabTitleGlobalTypoSwitcher?.lineHeight === false && tabTitleLineHeight?.Desktop && tabTitleLineHeightUnits?.Desktop ? `line-height: ${tabTitleLineHeight?.Desktop}${tabTitleLineHeightUnits?.Desktop};` : ''}
            
            ${tabTitleColor ? `color: ${tabTitleColor};` : ''}
            ${tabTitlePaddingDesktopWidth && tabTitlePaddingDesktop?.top ? `padding: ${tabTitlePaddingDesktopWidth};` : ''}     
            ${tabTitleMarginDesktopWidth && tabTitleMarginDesktop?.top ? `margin: ${tabTitleMarginDesktopWidth};` : ''}
            ${tabTitleBorder ? `border: ${tabTitleBorder};` : ''} 
			${tabTitleBorderColor ? `border-color: ${tabTitleBorderColor};` : ''}
			${tabTitleBorderDesktopWidth && tabTitleBorderDesktop?.top ? `border-width: ${tabTitleBorderDesktopWidth};` : ''}
			${tabTitleBorderRadiusDesktopWidth && tabTitleBorderRadiusDesktop?.top ? `border-radius: ${tabTitleBorderRadiusDesktopWidth};` : ''} 

            transition: all .3s ease-in-out;
        }

        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li .fb-tab-description {
            ${tabDescriptionGlobalTypoSwitcher?.fontFamily === true && tabDescriptionGlobalTypographyData?.fontFamily ? `font-family: ${tabDescriptionGlobalTypographyData?.fontFamily};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.fontSize === true && tabDescriptionGlobalTypographyData?.fontSize ? `font-size: ${tabDescriptionGlobalTypographyData?.fontSize};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.fontWeight === true && tabDescriptionGlobalTypographyData?.fontWeight ? `font-weight: ${tabDescriptionGlobalTypographyData?.fontWeight};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.fontStyle === true && tabDescriptionGlobalTypographyData?.fontStyle ? `font-style: ${tabDescriptionGlobalTypographyData?.fontStyle};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.textTransform === true && tabDescriptionGlobalTypographyData?.textTransform ? `text-transform: ${tabDescriptionGlobalTypographyData?.textTransform};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.textDecoration === true && tabDescriptionGlobalTypographyData?.textDecoration ? `text-decoration: ${tabDescriptionGlobalTypographyData?.textDecoration};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.letterSpacing === true && tabDescriptionGlobalTypographyData?.letterSpacing ? `letter-spacing: ${tabDescriptionGlobalTypographyData?.letterSpacing};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.lineHeight === true && tabDescriptionGlobalTypographyData?.lineHeight ? `line-height: ${tabDescriptionGlobalTypographyData?.lineHeight};` : ''}

            ${tabDescriptionGlobalTypoSwitcher?.fontFamily === false && tabDescriptionFontFamily && tabDescriptionFontFamily !== 'Default' ? `font-family: ${tabDescriptionFontFamily};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.fontSize === false && tabDescriptionFontSize?.Desktop && tabDescriptionFontSizeUnits?.Desktop ? `font-size: ${tabDescriptionFontSize?.Desktop}${tabDescriptionFontSizeUnits?.Desktop};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.fontWeight === false && tabDescriptionFontWeight ? `font-weight: ${tabDescriptionFontWeight};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.fontStyle === false && tabDescriptionFontStyle ? `font-style: ${tabDescriptionFontStyle};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.textTransform === false && tabDescriptionTextTransform ? `text-transform: ${tabDescriptionTextTransform};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.textDecoration === false && tabDescriptionTextDecoration ? `text-decoration: ${tabDescriptionTextDecoration};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.letterSpacing === false && tabDescriptionLetterSpacing?.Desktop && tabDescriptionLetterSpacingUnits?.Desktop ? `letter-spacing: ${tabDescriptionLetterSpacing?.Desktop}${tabDescriptionLetterSpacingUnits?.Desktop};` : ''}
            ${tabDescriptionGlobalTypoSwitcher?.lineHeight === false && tabDescriptionLineHeight?.Desktop && tabDescriptionLineHeightUnits?.Desktop ? `line-height: ${tabDescriptionLineHeight?.Desktop}${tabDescriptionLineHeightUnits?.Desktop};` : ''}
            
            ${tabDescriptionColor ? `color: ${tabDescriptionColor};` : ''}
            ${tabDescriptionPaddingDesktopWidth && tabDescriptionPaddingDesktop?.top ? `padding: ${tabDescriptionPaddingDesktopWidth};` : ''}     
            ${tabDescriptionMarginDesktopWidth && tabDescriptionMarginDesktop?.top ? `margin: ${tabDescriptionMarginDesktopWidth};` : ''}
            ${tabDescriptionBorder ? `border: ${tabDescriptionBorder};` : ''} 
			${tabDescriptionBorderColor ? `border-color: ${tabDescriptionBorderColor};` : ''}
			${tabDescriptionBorderDesktopWidth && tabDescriptionBorderDesktop?.top ? `border-width: ${tabDescriptionBorderDesktopWidth};` : ''}
			${tabDescriptionBorderRadiusDesktopWidth && tabDescriptionBorderRadiusDesktop?.top ? `border-radius: ${tabDescriptionBorderRadiusDesktopWidth};` : ''} 

            transition: all .3s ease-in-out;
        }

        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li:hover .fb-tab-title {
            ${tabTitleHoverColor ? `color: ${tabTitleHoverColor};` : ''}
            ${tabTitleBorderHoverColor ? `border-color: ${tabTitleBorderHoverColor};` : ''} 
        }

        .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li:hover .fb-tab-description {
            ${tabDescriptionHoverColor ? `color: ${tabDescriptionHoverColor};` : ''}
            ${tabDescriptionBorderHoverColor ? `border-color: ${tabDescriptionBorderHoverColor};` : ''} 
        }

        .${blockId} .fb-tab-icon-image-box .fb-tab-icon {
			${tabIconNormalBackgroundType === 'gradient' ? `   	
                ${tabIconNormalCustomGradientSwitcher && tabIconNormalCustomGradientInputValue ? `background: ${tabIconNormalCustomGradientInputValue};` : `background: ${tabIconNormalGradientColor};`}
            `: `
                ${tabIconBgColor ? `background: ${tabIconBgColor};` : ''}
            `}
			${tabIconPaddingDesktopWidth && tabIconPaddingDesktop?.top ? `padding: ${tabIconPaddingDesktopWidth};` : ''}

			${tabIconBorder ? `border: ${tabIconBorder};` : ''}
			${tabIconBorderColor ? `border-color: ${tabIconBorderColor};` : ''}
			${tabIconBorderDesktopWidth && tabIconBorderDesktop?.top ? `border-width: ${tabIconBorderDesktopWidth};` : ''}
			${tabIconBorderRadiusDesktopWidth && tabIconBorderRadiusDesktop?.top ? `border-radius: ${tabIconBorderRadiusDesktopWidth};` : ''} 
		}
        .${blockId} .fb-tab-icon-image-box .fb-tab-icon:hover {
            ${tabIconHoverBackgroundType === 'gradient' ? `   	
                ${tabIconHoverCustomGradientSwitcher && tabIconHoverCustomGradientInputValue ? `background: ${tabIconHoverCustomGradientInputValue};` : `background: ${tabIconHoverGradientColor};`}
            `: `
                ${ tabIconBgHoverColor ? `background: ${ tabIconBgHoverColor};` : ''}
            `}

			${tabIconBorderHoverColor ? `border-color: ${tabIconBorderHoverColor};` : ''}
        }

		.${blockId} .fb-tab-icon-image-box .fb-tab-icon svg {
			${tabIconSize?.Desktop && tabIconSizeUnits?.Desktop ? `width: ${tabIconSize?.Desktop}${tabIconSizeUnits?.Desktop};` : ''}
			${tabIconSize?.Desktop && tabIconSizeUnits?.Desktop ? `height: ${tabIconSize?.Desktop}${tabIconSizeUnits?.Desktop};` : ''}
			${tabIconColor ? `fill: ${tabIconColor};` : ''}
			transform: rotate(${tabIconRotate?.Desktop}deg);
			transition: all .3s ease-in-out;
			
		}

		.${blockId} .fb-tab-icon-image-box .fb-tab-icon:hover svg {
			${tabIconHoverColor ? `fill: ${tabIconHoverColor};` : ''}
			transform: rotate(${tabIconRotateHover?.Desktop}deg); 
		}

		.${blockId} .fb-tab-icon-image-box .fb-tab-icon-image {
			${tabIconImageWidth ? `width: ${tabIconImageWidth?.Desktop}${tabIconImageWidthUnits?.Desktop};` : ''}
			${tabIconImageHeight ? `height: ${tabIconImageHeight?.Desktop}${tabIconImageHeightUnits?.Desktop};` : ''}
			transform: rotate(${tabIconImageRotate?.Desktop}deg);
			transition: all .3s ease-in-out;
		}

		.${blockId} .fb-tab-icon-image-box:hover .fb-tab-icon-image {
			transform: rotate(${tabIconImageRotateHover?.Desktop}deg);
		}


        .${blockId} .fb-tabs-wrap .fb-tabs-body-wrap {
            padding: 10px 15px;
            border: 1px solid #EEEDF0;
        }
        .${blockId} .fb-tabs-wrap .fb-tabs-body-wrap {
            ${tabContentPaddingDesktopWidth && tabContentPaddingDesktop?.top ? `padding: ${tabContentPaddingDesktopWidth};` : ''} 
            ${tabContentMarginDesktopWidth && tabContentMarginDesktop?.top ? `margin: ${tabContentMarginDesktopWidth};` : ''}
            ${tabContentBorder ? `border: ${tabContentBorder};` : ''}
			${tabContentBorderColor ? `border-color: ${tabContentBorderColor};` : ''}
			${tabContentBorderDesktopWidth && tabContentBorderDesktop?.top ? `border-width: ${tabContentBorderDesktopWidth};` : ''}
			${tabContentBorderRadiusDesktopWidth && tabContentBorderRadiusDesktop?.top ? `border-radius: ${tabContentBorderRadiusDesktopWidth};` : ''} 

            ${tabContentBgColorType === "gradient"
                  ? `background: ${
                      tabContentBgCustomGradientColorSwitcher && tabContentBgCustomGradientColor
                        ? tabContentBgCustomGradientColor
                        : tabContentBgGradientColor
                    };`
                  : tabContentBgColor ? `background: ${tabContentBgColor};` : ''
            }
            transition: all .3s ease-in-out;
        }
        .${blockId} .fb-tabs-wrap .fb-tabs-body-wrap:hover {
            ${tabContentBorderHoverColor ? `border-color: ${tabContentBorderHoverColor};` : ''} 
            ${tabContentBgHoverColorType === "gradient"
                  ? `background: ${
                      tabContentBgHoverCustomGradientColorSwitcher && tabContentBgHoverCustomGradientColor
                        ? tabContentBgHoverCustomGradientColor
                        : tabContentBgHoverGradientColor
                    };`
                  : tabContentBgHoverColor ? `background: ${tabContentBgHoverColor};` : ''
            }
        }

        ${fillTitlesWrapper && tabLayoutSwitcher === 'horizontal' && `
            .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li {
                flex: 1;
            }
        `}

        @media only screen and (max-width: 1024px) {
            .${blockId}.fb-tabs-wrapper {
                ${tabGlobalPaddingTabletWidth && tabGlobalPaddingTablet?.top ? `padding: ${tabGlobalPaddingTabletWidth};` : ''}   
                ${tabGlobalMarginTabletWidth && tabGlobalMarginTablet?.top ? `margin: ${tabGlobalMarginTabletWidth};` : ''}
                ${tabGlobalBorderTabletWidth && tabGlobalBorderTablet?.top ? `border-width: ${tabGlobalBorderTabletWidth};` : ''}
                ${tabGlobalBorderRadiusTabletWidth && tabGlobalBorderRadiusTablet?.top ? `border-radius: ${tabGlobalBorderRadiusTabletWidth};` : ''} 
                ${tabGlobalZIndex?.Tablet ? `z-index: ${tabGlobalZIndex?.Tablet};` : ''}
            }

            .${blockId} .fb-tabs-wrap ul.fb-tabs-panel {
                ${tabTitlesAlignment?.Tablet ? `justify-content: ${tabTitlesAlignmentMap[tabTitlesAlignment?.Tablet]};` : ''}
                ${tabWrapperPaddingTabletWidth && tabWrapperPaddingTablet?.top ? `padding: ${tabWrapperPaddingTabletWidth};` : ''} 
                ${tabWrapperMarginTabletWidth && tabWrapperMarginTablet?.top ? `margin: ${tabWrapperMarginTabletWidth};` : ''}
                ${tabWrapperGap?.Tablet && tabWrapperGapUnits?.Tablet ? `gap: ${tabWrapperGap?.Tablet}${tabWrapperGapUnits?.Tablet};` : ''}
                ${tabWrapperBorderTabletWidth && tabWrapperBorderTablet?.top ? `border-width: ${tabWrapperBorderTabletWidth};` : ''}
                ${tabWrapperBorderRadiusTabletWidth && tabWrapperBorderRadiusTablet?.top ? `border-radius: ${tabWrapperBorderRadiusTabletWidth};` : ''} 
            }

            .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li {
                ${tabListPaddingTabletWidth && tabListPaddingTablet?.top ? `padding: ${tabListPaddingTabletWidth};` : ''}
                ${tabListMarginTabletWidth && tabListMarginTablet?.top ? `margin: ${tabListMarginTabletWidth};` : ''}
                ${tabListMinWidth?.Tablet && tabListMinWidthUnits?.Tablet ? `min-width: ${tabListMinWidth?.Tablet}${tabListMinWidthUnits?.Tablet};` : ''}
                ${tabListItemGap?.Tablet && tabListItemGapUnits?.Tablet ? `gap: ${tabListItemGap?.Tablet}${tabListItemGapUnits?.Tablet};` : ''}
                ${tabListBorderTabletWidth && tabListBorderTablet?.top ? `border-width: ${tabListBorderTabletWidth};` : ''}
                ${tabListBorderRadiusTabletWidth && tabListBorderRadiusTablet?.top ? `border-radius: ${tabListBorderRadiusTabletWidth};` : ''} 
            }

            .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li .fb-tab-title {
                ${tabTitleGlobalTypoSwitcher?.fontSize === false && tabTitleFontSize?.Tablet && tabTitleFontSizeUnits?.Tablet ? `font-size: ${tabTitleFontSize?.Tablet}${tabTitleFontSizeUnits?.Tablet};` : ''}
                ${tabTitleGlobalTypoSwitcher?.letterSpacing === false && tabTitleLetterSpacing?.Tablet && tabTitleLetterSpacingUnits?.Tablet ? `letter-spacing: ${tabTitleLetterSpacing?.Tablet}${tabTitleLetterSpacingUnits?.Tablet};` : ''}
                ${tabTitleGlobalTypoSwitcher?.lineHeight === false && tabTitleLineHeight?.Tablet && tabTitleLineHeightUnits?.Tablet ? `line-height: ${tabTitleLineHeight?.Tablet}${tabTitleLineHeightUnits?.Tablet};` : ''}
                
                ${tabTitlePaddingTabletWidth && tabTitlePaddingTablet?.top ? `padding: ${tabTitlePaddingTabletWidth};` : ''}      
                ${tabTitleMarginTabletWidth && tabTitleMarginTablet?.top ? `margin: ${tabTitleMarginTabletWidth};` : ''}
                ${tabTitleBorderTabletWidth && tabTitleBorderTablet?.top ? `border-width: ${tabTitleBorderTabletWidth};` : ''}
                ${tabTitleBorderRadiusTabletWidth && tabTitleBorderRadiusTablet?.top ? `border-radius: ${tabTitleBorderRadiusTabletWidth};` : ''} 
            }

            .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li .fb-tab-description {
                ${tabDescriptionGlobalTypoSwitcher?.fontSize === false && tabDescriptionFontSize?.Tablet && tabDescriptionFontSizeUnits?.Tablet ? `font-size: ${tabDescriptionFontSize?.Tablet}${tabDescriptionFontSizeUnits?.Tablet};` : ''}
                ${tabDescriptionGlobalTypoSwitcher?.letterSpacing === false && tabDescriptionLetterSpacing?.Tablet && tabDescriptionLetterSpacingUnits?.Tablet ? `letter-spacing: ${tabDescriptionLetterSpacing?.Tablet}${tabDescriptionLetterSpacingUnits?.Tablet};` : ''}
                ${tabDescriptionGlobalTypoSwitcher?.lineHeight === false && tabDescriptionLineHeight?.Tablet && tabDescriptionLineHeightUnits?.Tablet ? `line-height: ${tabDescriptionLineHeight?.Tablet}${tabDescriptionLineHeightUnits?.Tablet};` : ''}
                
                ${tabDescriptionPaddingTabletWidth && tabDescriptionPaddingTablet?.top ? `padding: ${tabDescriptionPaddingTabletWidth};` : ''}     
                ${tabDescriptionMarginTabletWidth && tabDescriptionMarginTablet?.top ? `margin: ${tabDescriptionMarginTabletWidth};` : ''}
                ${tabDescriptionBorderTabletWidth && tabDescriptionBorderTablet?.top ? `border-width: ${tabDescriptionBorderTabletWidth};` : ''}
                ${tabDescriptionBorderRadiusTabletWidth && tabDescriptionBorderRadiusTablet?.top ? `border-radius: ${tabDescriptionBorderRadiusTabletWidth};` : ''} 
            }

            .${blockId} .fb-tab-icon-image-box .fb-tab-icon {
                ${tabIconBorderTabletWidth && tabIconBorderTablet?.top ? `border-width: ${tabIconBorderTabletWidth};` : ''}
                ${tabIconBorderRadiusTabletWidth && tabIconBorderRadiusTablet?.top ? `border-radius: ${tabIconBorderRadiusTabletWidth};` : ''} 
            }
            .${blockId} .fb-tab-icon-image-box .fb-tab-icon svg {
                ${tabIconSize?.Tablet && tabIconSizeUnits?.Tablet ? `width: ${tabIconSize?.Tablet}${tabIconSizeUnits?.Tablet};` : ''}
                ${tabIconSize?.Tablet && tabIconSizeUnits?.Tablet ? `height: ${tabIconSize?.Tablet}${tabIconSizeUnits?.Tablet};` : ''}
                transform: rotate(${tabIconRotate?.Tablet}deg);
            }

            .${blockId} .fb-tab-icon-image-box .fb-tab-icon:hover svg {
                transform: rotate(${tabIconRotateHover?.Tablet}deg); 
            }

            .${blockId} .fb-tab-icon-image-box .fb-tab-icon-image {
                ${tabIconImageWidth ? `width: ${tabIconImageWidth?.Tablet}${tabIconImageWidthUnits?.Tablet};` : ''}
                ${tabIconImageHeight ? `height: ${tabIconImageHeight?.Tablet}${tabIconImageHeightUnits?.Tablet};` : ''}
                transform: rotate(${tabIconImageRotate?.Tablet}deg);
            }

            .${blockId} .fb-tab-icon-image-box:hover .fb-tab-icon-image {
                transform: rotate(${tabIconImageRotateHover?.Tablet}deg);
            }

            .${blockId} .fb-tabs-wrap .fb-tabs-body-wrap {
                ${tabContentPaddingTabletWidth && tabContentPaddingTablet?.top ? `padding: ${tabContentPaddingTabletWidth};` : ''} 
                ${tabContentMarginTabletWidth && tabContentMarginTablet?.top ? `margin: ${tabContentMarginTabletWidth};` : ''}
                ${tabContentBorderTabletWidth && tabContentBorderTablet?.top ? `border-width: ${tabContentBorderTabletWidth};` : ''}
                ${tabContentBorderRadiusTabletWidth && tabContentBorderRadiusTablet?.top ? `border-radius: ${tabContentBorderRadiusTabletWidth};` : ''} 
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockId}.fb-tabs-wrapper {
                ${tabGlobalPaddingMobileWidth && tabGlobalPaddingMobile?.top ? `padding: ${tabGlobalPaddingMobileWidth};` : ''}   
                ${tabGlobalMarginMobileWidth && tabGlobalMarginMobile?.top ? `margin: ${tabGlobalMarginMobileWidth};` : ''}
                ${tabGlobalBorderMobileWidth && tabGlobalBorderMobile?.top ? `border-width: ${tabGlobalBorderMobileWidth};` : ''}
                ${tabGlobalBorderRadiusMobileWidth && tabGlobalBorderRadiusMobile?.top ? `border-radius: ${tabGlobalBorderRadiusMobileWidth};` : ''} 
                ${tabGlobalZIndex?.Mobile ? `z-index: ${tabGlobalZIndex?.Mobile};` : ''}
            }

            .${blockId} .fb-tabs-wrap ul.fb-tabs-panel {
                ${tabTitlesAlignment?.Mobile ? `justify-content: ${tabTitlesAlignmentMap[tabTitlesAlignment?.Mobile]};` : ''}
                ${tabWrapperPaddingMobileWidth && tabWrapperPaddingMobile?.top ? `padding: ${tabWrapperPaddingMobileWidth};` : ''} 
                ${tabWrapperMarginMobileWidth && tabWrapperMarginMobile?.top ? `margin: ${tabWrapperMarginMobileWidth};` : ''}
                ${tabWrapperGap?.Mobile && tabWrapperGapUnits?.Mobile ? `gap: ${tabWrapperGap?.Mobile}${tabWrapperGapUnits?.Mobile};` : ''}
                ${tabWrapperBorderMobileWidth && tabWrapperBorderMobile?.top ? `border-width: ${tabWrapperBorderMobileWidth};` : ''}
                ${tabWrapperBorderRadiusMobileWidth && tabWrapperBorderRadiusMobile?.top ? `border-radius: ${tabWrapperBorderRadiusMobileWidth};` : ''} 
            }

            .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li {
                ${tabListPaddingMobileWidth && tabListPaddingMobile?.top ? `padding: ${tabListPaddingMobileWidth};` : ''}
                ${tabListMarginMobileWidth && tabListMarginMobile?.top ? `margin: ${tabListMarginMobileWidth};` : ''}
                ${tabListMinWidth?.Mobile && tabListMinWidthUnits?.Mobile ? `min-width: ${tabListMinWidth?.Mobile}${tabListMinWidthUnits?.Mobile};` : ''}
                ${tabListItemGap?.Mobile && tabListItemGapUnits?.Mobile ? `gap: ${tabListItemGap?.Mobile}${tabListItemGapUnits?.Mobile};` : ''}
                ${tabListBorderMobileWidth && tabListBorderMobile?.top ? `border-width: ${tabListBorderMobileWidth};` : ''}
                ${tabListBorderRadiusMobileWidth && tabListBorderRadiusMobile?.top ? `border-radius: ${tabListBorderRadiusMobileWidth};` : ''} 
            }

            .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li .fb-tab-title {
                ${tabTitleGlobalTypoSwitcher?.fontSize === false && tabTitleFontSize?.Mobile && tabTitleFontSizeUnits?.Mobile ? `font-size: ${tabTitleFontSize?.Mobile}${tabTitleFontSizeUnits?.Mobile};` : ''}
                ${tabTitleGlobalTypoSwitcher?.letterSpacing === false && tabTitleLetterSpacing?.Mobile && tabTitleLetterSpacingUnits?.Mobile ? `letter-spacing: ${tabTitleLetterSpacing?.Mobile}${tabTitleLetterSpacingUnits?.Mobile};` : ''}
                ${tabTitleGlobalTypoSwitcher?.lineHeight === false && tabTitleLineHeight?.Mobile && tabTitleLineHeightUnits?.Mobile ? `line-height: ${tabTitleLineHeight?.Mobile}${tabTitleLineHeightUnits?.Mobile};` : ''}
                
                ${tabTitlePaddingMobileWidth && tabTitlePaddingMobile?.top ? `padding: ${tabTitlePaddingMobileWidth};` : ''}      
                ${tabTitleMarginMobileWidth && tabTitleMarginMobile?.top ? `margin: ${tabTitleMarginMobileWidth};` : ''}
                ${tabTitleBorderMobileWidth && tabTitleBorderMobile?.top ? `border-width: ${tabTitleBorderMobileWidth};` : ''}
                ${tabTitleBorderRadiusMobileWidth && tabTitleBorderRadiusMobile?.top ? `border-radius: ${tabTitleBorderRadiusMobileWidth};` : ''} 
            }

            .${blockId} .fb-tabs-wrap ul.fb-tabs-panel li .fb-tab-description {
                ${tabDescriptionGlobalTypoSwitcher?.fontSize === false && tabDescriptionFontSize?.Mobile && tabDescriptionFontSizeUnits?.Mobile ? `font-size: ${tabDescriptionFontSize?.Mobile}${tabDescriptionFontSizeUnits?.Mobile};` : ''} 
                ${tabDescriptionGlobalTypoSwitcher?.letterSpacing === false && tabDescriptionLetterSpacing?.Mobile && tabDescriptionLetterSpacingUnits?.Mobile ? `letter-spacing: ${tabDescriptionLetterSpacing?.Mobile}${tabDescriptionLetterSpacingUnits?.Mobile};` : ''}
                ${tabDescriptionGlobalTypoSwitcher?.lineHeight === false && tabDescriptionLineHeight?.Mobile && tabDescriptionLineHeightUnits?.Mobile ? `line-height: ${tabDescriptionLineHeight?.Mobile}${tabDescriptionLineHeightUnits?.Mobile};` : ''}
                
                ${tabDescriptionPaddingMobileWidth && tabDescriptionPaddingMobile?.top ? `padding: ${tabDescriptionPaddingMobileWidth};` : ''}     
                ${tabDescriptionMarginMobileWidth && tabDescriptionMarginMobile?.top ? `margin: ${tabDescriptionMarginMobileWidth};` : ''}
                ${tabDescriptionBorderMobileWidth && tabDescriptionBorderMobile?.top ? `border-width: ${tabDescriptionBorderMobileWidth};` : ''}
                ${tabDescriptionBorderRadiusMobileWidth && tabDescriptionBorderRadiusMobile?.top ? `border-radius: ${tabDescriptionBorderRadiusMobileWidth};` : ''} 
            }

            .${blockId} .fb-tab-icon-image-box .fb-tab-icon {
                ${tabIconBorderMobileWidth && tabIconBorderMobile?.top ? `border-width: ${tabIconBorderMobileWidth};` : ''}
                ${tabIconBorderRadiusMobileWidth && tabIconBorderRadiusMobile?.top ? `border-radius: ${tabIconBorderRadiusMobileWidth};` : ''} 
            }
            .${blockId} .fb-tab-icon-image-box .fb-tab-icon svg {
                ${tabIconSize?.Mobile && tabIconSizeUnits?.Mobile ? `width: ${tabIconSize?.Mobile}${tabIconSizeUnits?.Mobile};` : ''}
                ${tabIconSize?.Mobile && tabIconSizeUnits?.Mobile ? `height: ${tabIconSize?.Mobile}${tabIconSizeUnits?.Mobile};` : ''}
                transform: rotate(${tabIconRotate?.Mobile}deg);
            }

            .${blockId} .fb-tab-icon-image-box .fb-tab-icon:hover svg {
                transform: rotate(${tabIconRotateHover?.Mobile}deg); 
            }

            .${blockId} .fb-tab-icon-image-box .fb-tab-icon-image {
                ${tabIconImageWidth ? `width: ${tabIconImageWidth?.Mobile}${tabIconImageWidthUnits?.Mobile};` : ''}
                ${tabIconImageHeight ? `height: ${tabIconImageHeight?.Mobile}${tabIconImageHeightUnits?.Mobile};` : ''}
                transform: rotate(${tabIconImageRotate?.Mobile}deg);
            }

            .${blockId} .fb-tab-icon-image-box:hover .fb-tab-icon-image {
                transform: rotate(${tabIconImageRotateHover?.Mobile}deg);
            }

            .${blockId} .fb-tabs-wrap .fb-tabs-body-wrap {
                ${tabContentPaddingMobileWidth && tabContentPaddingMobile?.top ? `padding: ${tabContentPaddingMobileWidth};` : ''} 
                ${tabContentMarginMobileWidth && tabContentMarginMobile?.top ? `margin: ${tabContentMarginMobileWidth};` : ''}
                ${tabContentBorderMobileWidth && tabContentBorderMobile?.top ? `border-width: ${tabContentBorderMobileWidth};` : ''}
                ${tabContentBorderRadiusMobileWidth && tabContentBorderRadiusMobile?.top ? `border-radius: ${tabContentBorderRadiusMobileWidth};` : ''} 
            }
        }
    `, [
        blockId,
        blockStyle,
        tabLayoutSwitcher,
        tabsItems,
        
        showIcon,
        showTitle,
        showDescription,
        fillTitlesWrapper,

        /** Tab Wrapper */
        tabWrapperBgColorTypeSwitcher,
        tabWrapperBgColorType,
        tabWrapperBgHoverColorType,
        tabWrapperBgColor, 
        tabWrapperBgHoverColor,
        tabWrapperBgGradientColor,
        tabWrapperBgHoverGradientColor,
        tabWrapperBgCustomGradientColorSwitcher,
        tabWrapperBgCustomGradientColor,
        tabWrapperBgHoverCustomGradientColorSwitcher,
        tabWrapperBgHoverCustomGradientColor,

        tabWrapperPaddingUnits,
        tabWrapperPaddingDesktop,
        tabWrapperPaddingTablet,
        tabWrapperPaddingMobile,
        tabWrapperPaddingLink,
        tabWrapperPaddingDesktopWidth,
        tabWrapperPaddingTabletWidth,
        tabWrapperPaddingMobileWidth,

        tabWrapperMarginUnits,
        tabWrapperMarginDesktop,
        tabWrapperMarginTablet,
        tabWrapperMarginMobile,
        tabWrapperMarginLink,
        tabWrapperMarginDesktopWidth,
        tabWrapperMarginTabletWidth,
        tabWrapperMarginMobileWidth,

        tabWrapperBorder,
        tabWrapperBorderColorSwitcher,
        tabWrapperBorderColor,
        tabWrapperBorderHoverColor,

        tabWrapperBorderUnits, 
        tabWrapperBorderDesktop,
        tabWrapperBorderTablet,
        tabWrapperBorderMobile,
        tabWrapperBorderLink,
        tabWrapperBorderDesktopWidth,
        tabWrapperBorderTabletWidth,
        tabWrapperBorderMobileWidth,

        tabWrapperBorderRadiusUnits,
        tabWrapperBorderRadiusDesktop,
        tabWrapperBorderRadiusTablet,
        tabWrapperBorderRadiusMobile,
        tabWrapperBorderRadiusLink,
        tabWrapperBorderRadiusDesktopWidth,
        tabWrapperBorderRadiusTabletWidth,
        tabWrapperBorderRadiusMobileWidth,
        /** End Tab Wrapper */

        /** Start Tab List Wrapper */
        tabListMinWidth,
        tabListMinWidthUnits,
        tabListItemGap,
        tabListItemGapUnits,
        tabWrapperGap,
        tabWrapperGapUnits,

        tabListBgColorTypeSwitcher,
        tabListBgColorType,
        tabListBgHoverColorType,
        tabListBgColor, 
        tabListBgHoverColor,
        tabListBgGradientColor,
        tabListBgHoverGradientColor,
        tabListBgCustomGradientColorSwitcher,
        tabListBgCustomGradientColor,
        tabListBgHoverCustomGradientColorSwitcher,
        tabListBgHoverCustomGradientColor,

        tabListActiveBgColorTypeSwitcher,
        tabListActiveBgColorType,
        tabListActiveBgHoverColorType,
        tabListActiveBgColor, 
        tabListActiveBgHoverColor,
        tabListActiveBgGradientColor,
        tabListActiveBgHoverGradientColor,
        tabListActiveBgCustomGradientColorSwitcher,
        tabListActiveBgCustomGradientColor,
        tabListActiveBgHoverCustomGradientColorSwitcher,
        tabListActiveBgHoverCustomGradientColor,

        tabListPaddingUnits,
        tabListPaddingDesktop,
        tabListPaddingTablet,
        tabListPaddingMobile,
        tabListPaddingLink,
        tabListPaddingDesktopWidth,
        tabListPaddingTabletWidth,
        tabListPaddingMobileWidth,

        tabListMarginUnits, 
        tabListMarginDesktop,
        tabListMarginTablet,
        tabListMarginMobile,
        tabListMarginLink,
        tabListMarginDesktopWidth,
        tabListMarginTabletWidth,
        tabListMarginMobileWidth,

        tabListBorder,
        tabListBorderColorSwitcher,
        tabListBorderColor,
        tabListBorderHoverColor,

        tabListBorderUnits,
        tabListBorderDesktop,
        tabListBorderTablet,
        tabListBorderMobile,
        tabListBorderLink,
        tabListBorderDesktopWidth,
        tabListBorderTabletWidth,
        tabListBorderMobileWidth,
        
        tabListBorderRadiusUnits,
        tabListBorderRadiusDesktop,
        tabListBorderRadiusTablet,
        tabListBorderRadiusMobile,
        tabListBorderRadiusLink,
        tabListBorderRadiusDesktopWidth,
        tabListBorderRadiusTabletWidth,
        tabListBorderRadiusMobileWidth,
        /** End Tab List Wrapper */

        /** Start Title Style */
        tabTitleGlobalTypographyData,
        tabTitleGlobalTypoSwitcher,
        tabTitleGlobalTypoType,
        tabTitleGlobalTypoOption,
        tabTitleFontFamily,
        tabTitleFontSize,
        tabTitleFontSizeUnits,
        tabTitleFontWeight,
        tabTitleFontStyle,
        tabTitleTextTransform,
        tabTitleTextDecoration,
        tabTitleLetterSpacing,
        tabTitleLetterSpacingUnits,
        tabTitleLineHeight,
        tabTitleLineHeightUnits,

        tabTitleColorSwitcher,
        tabTitleColor,
        tabTitleActiveColor,
        tabTitleHoverColor,

        tabTitlePaddingUnits,
        tabTitlePaddingDesktop,
        tabTitlePaddingTablet,
        tabTitlePaddingMobile,
        tabTitlePaddingLink,
        tabTitlePaddingDesktopWidth,
        tabTitlePaddingTabletWidth,
        tabTitlePaddingMobileWidth,

        tabTitleMarginUnits,
        tabTitleMarginDesktop,
        tabTitleMarginTablet,
        tabTitleMarginMobile,
        tabTitleMarginLink,
        tabTitleMarginDesktopWidth,
        tabTitleMarginTabletWidth,
        tabTitleMarginMobileWidth,

        tabTitleBorder,
        tabTitleBorderColorSwitcher,
        tabTitleBorderColor,
        tabTitleBorderHoverColor,

        tabTitleBorderUnits,
        tabTitleBorderDesktop,
        tabTitleBorderTablet,
        tabTitleBorderMobile,
        tabTitleBorderLink,
        tabTitleBorderDesktopWidth,
        tabTitleBorderTabletWidth,
        tabTitleBorderMobileWidth,

        tabTitleBorderRadiusUnits,
        tabTitleBorderRadiusDesktop,
        tabTitleBorderRadiusTablet,
        tabTitleBorderRadiusMobile,
        tabTitleBorderRadiusLink,
        tabTitleBorderRadiusDesktopWidth,
        tabTitleBorderRadiusTabletWidth,
        tabTitleBorderRadiusMobileWidth,
        /** End Title Style */

        /** Start Title Style */
        tabDescriptionGlobalTypographyData,
        tabDescriptionGlobalTypoSwitcher,
        tabDescriptionGlobalTypoType,
        tabDescriptionGlobalTypoOption,
        tabDescriptionFontFamily,
        tabDescriptionFontSize,
        tabDescriptionFontSizeUnits,
        tabDescriptionFontWeight,
        tabDescriptionFontStyle,
        tabDescriptionTextTransform,
        tabDescriptionTextDecoration,
        tabDescriptionLetterSpacing,
        tabDescriptionLetterSpacingUnits,
        tabDescriptionLineHeight,
        tabDescriptionLineHeightUnits,

        tabDescriptionColorSwitcher,
        tabDescriptionColor,
        tabDescriptionActiveColor,
        tabDescriptionHoverColor,

        tabDescriptionPaddingUnits,
        tabDescriptionPaddingDesktop,
        tabDescriptionPaddingTablet,
        tabDescriptionPaddingMobile,
        tabDescriptionPaddingLink,
        tabDescriptionPaddingDesktopWidth,
        tabDescriptionPaddingTabletWidth,
        tabDescriptionPaddingMobileWidth,

        tabDescriptionMarginUnits,
        tabDescriptionMarginDesktop,
        tabDescriptionMarginTablet,
        tabDescriptionMarginMobile,
        tabDescriptionMarginLink,
        tabDescriptionMarginDesktopWidth,
        tabDescriptionMarginTabletWidth,
        tabDescriptionMarginMobileWidth,

        tabDescriptionBorder, 
        tabDescriptionBorderColorSwitcher,
        tabDescriptionBorderColor,
        tabDescriptionBorderHoverColor,

        tabDescriptionBorderUnits,
        tabDescriptionBorderDesktop,
        tabDescriptionBorderTablet,
        tabDescriptionBorderMobile,
        tabDescriptionBorderLink,
        tabDescriptionBorderDesktopWidth,
        tabDescriptionBorderTabletWidth,
        tabDescriptionBorderMobileWidth,

        tabDescriptionBorderRadiusUnits,
        tabDescriptionBorderRadiusDesktop,
        tabDescriptionBorderRadiusTablet,
        tabDescriptionBorderRadiusMobile,
        tabDescriptionBorderRadiusLink,
        tabDescriptionBorderRadiusDesktopWidth,
        tabDescriptionBorderRadiusTabletWidth,
        tabDescriptionBorderRadiusMobileWidth,
        /** End Description Style */

        /** Tab Icon Styles */
        tabIconPosition,
        tabIconSize,
        tabIconSizeUnits,
        tabIconColorSwitcher,
        tabIconColor,
        tabIconActiveColor,
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

        //Active BG
        tabIconBgActiveColorSwitcher,
        tabIconActiveNormalBackgroundType,
        tabIconBgActiveColor,
        tabIconActiveNormalGradientColor,
        tabIconActiveNormalCustomGradientSwitcher,
        tabIconActiveNormalCustomGradientInputValue,

        tabIconActiveHoverBackgroundType,
        tabIconBgActiveHoverColor,
        tabIconActiveHoverGradientColor,
        tabIconActiveHoverCustomGradientSwitcher,
        tabIconActiveHoverCustomGradientInputValue,
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
        tabIconBorderDesktopWidth,
        tabIconBorderTabletWidth,
        tabIconBorderMobileWidth,

        tabIconBorderRadiusUnits,
        tabIconBorderRadiusDesktop,
        tabIconBorderRadiusTablet,
        tabIconBorderRadiusMobile,
        tabIconBorderRadiusLink,
        tabIconBorderRadiusDesktopWidth,
        tabIconBorderRadiusTabletWidth,
        tabIconBorderRadiusMobileWidth,

        /** Start Icon Padding */
        tabIconPaddingUnits,
        tabIconPaddingDesktop,
        tabIconPaddingTablet,
        tabIconPaddingMobile,
        tabIconPaddingLink,
        tabIconPaddingDesktopWidth,
        tabIconPaddingTabletWidth,
        tabIconPaddingMobileWidth,
        /** End Icon Padding */

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

        /** Tab Content Styles */
        tabContentBgColorTypeSwitcher,
        tabContentBgColorType,
        tabContentBgHoverColorType,
        tabContentBgColor, 
        tabContentBgHoverColor,
        tabContentBgGradientColor,
        tabContentBgHoverGradientColor,
        tabContentBgCustomGradientColorSwitcher,
        tabContentBgCustomGradientColor,
        tabContentBgHoverCustomGradientColorSwitcher,
        tabContentBgHoverCustomGradientColor,

        tabContentPaddingUnits,
        tabContentPaddingDesktop,
        tabContentPaddingTablet,
        tabContentPaddingMobile,
        tabContentPaddingLink,
        tabContentPaddingDesktopWidth,
        tabContentPaddingTabletWidth,
        tabContentPaddingMobileWidth,

        tabContentMarginUnits,
        tabContentMarginDesktop,
        tabContentMarginTablet,
        tabContentMarginMobile,
        tabContentMarginLink,
        tabContentMarginDesktopWidth,
        tabContentMarginTabletWidth,
        tabContentMarginMobileWidth,

        tabContentBorder,
        tabContentBorderColorSwitcher,
        tabContentBorderColor,
        tabContentBorderHoverColor,

        tabContentBorderUnits, 
        tabContentBorderDesktop,
        tabContentBorderTablet,
        tabContentBorderMobile,
        tabContentBorderLink,
        tabContentBorderDesktopWidth,
        tabContentBorderTabletWidth,
        tabContentBorderMobileWidth,

        tabContentBorderRadiusUnits,
        tabContentBorderRadiusDesktop,
        tabContentBorderRadiusTablet,
        tabContentBorderRadiusMobile,
        tabContentBorderRadiusLink,
        tabContentBorderRadiusDesktopWidth,
        tabContentBorderRadiusTabletWidth,
        tabContentBorderRadiusMobileWidth,
        /** End Tab Content */

        tabGlobalZIndex,
        tabGlobalWraperID,
        tabGlobalWraperClass,
    
        /** Padding */
        tabGlobalPaddingUnits,
        tabGlobalPaddingDesktop,
        tabGlobalPaddingTablet,
        tabGlobalPaddingMobile,
        tabGlobalPaddingLink,
        tabGlobalPaddingDesktopWidth,
        tabGlobalPaddingTabletWidth,
        tabGlobalPaddingMobileWidth,
    
        /** Margin */
        tabGlobalMarginUnits,
        tabGlobalMarginDesktop,
        tabGlobalMarginTablet,
        tabGlobalMarginMobile,
        tabGlobalMarginLink,
        tabGlobalMarginDesktopWidth,
        tabGlobalMarginTabletWidth,
        tabGlobalMarginMobileWidth,
    
        /** Background */
        tabGlobalBgColorTypeSwitcher,
        tabGlobalBgColorType,
        tabGlobalBgHoverColorType,
        tabGlobalBgColor,
        tabGlobalBgHoverColor,
        tabGlobalBgGradientColor,
        tabGlobalBgHoverGradientColor,
        tabGlobalBgCustomGradientColorSwitcher,
        tabGlobalBgCustomGradientColor,
        tabGlobalBgHoverCustomGradientColorSwitcher,
        tabGlobalBgHoverCustomGradientColor,
    
        /** Border */
        tabGlobalBorder,
        tabGlobalBorderColorSwitcher,
        tabGlobalBorderColor,
        tabGlobalBorderHoverColor,

        tabGlobalBorderUnits,
        tabGlobalBorderDesktop,
        tabGlobalBorderTablet,
        tabGlobalBorderMobile,
        tabGlobalBorderLink,
        tabGlobalBorderDesktopWidth,
        tabGlobalBorderTabletWidth,
        tabGlobalBorderMobileWidth,
    
        /** Border Radius */
        tabGlobalBorderRadiusUnits,
        tabGlobalBorderRadiusDesktop,
        tabGlobalBorderRadiusTablet,
        tabGlobalBorderRadiusMobile,
        tabGlobalBorderRadiusLink,
        tabGlobalBorderRadiusDesktopWidth,
        tabGlobalBorderRadiusTabletWidth,
        tabGlobalBorderRadiusMobileWidth,
    
        /** Box Shadow */
        tabGlobalBoxShadowSwitcher,
        tabGlobalBoxShadowValues,
        tabGlobalBoxShadowCssValue,
        tabGlobalBoxShadowHoverValues,
        tabGlobalBoxShadowHoverCssValue,
    
        /** Custom CSS */
        tabGlobalCustomCSS,
        tabTitlesAlignment,
    ]);

    const customCss = getCustomCss(tabGlobalCustomCSS, `.${blockId}`);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle, customCss]);

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <PanelBody 
                title={__("Tabs Settings", "frontis-blocks")} 
                initialOpen={true}
            >
                <ToggleControl
                    label={ __( 'Show Icon or Image', 'frontis-blocks' ) }
                    checked={ showIcon }  
                    onChange={(value) => setAttributes({ showIcon: value })}
                />

                <ToggleControl
                    label={ __( 'Show Title', 'frontis-blocks' ) }
                    checked={ showTitle }
                    onChange={(value) => setAttributes({ showTitle: value })}
                />
                <ToggleControl
                    label={ __( 'Show Description', 'frontis-blocks' ) }
                    checked={ showDescription }
                    onChange={(value) => setAttributes({ showDescription: value })}
                />

                {tabLayoutSwitcher === 'horizontal' && (
                    <ToggleControl
                        label={ __( 'Fill Titles Wrapper', 'frontis-blocks' ) }
                        checked={ fillTitlesWrapper }
                        onChange={(value) => setAttributes({ fillTitlesWrapper: value })}
                    />
                )}

                {!fillTitlesWrapper && (
                     <FB_ResponsiveAlignmentControl
                        label={__("Title Alignment", "frontis-blocks")}
                        globalAlignment={tabTitlesAlignment}
                        setGlobalAlignment={(value) => setAttributes({ tabTitlesAlignment: value })}
                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />
                )}

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
                                        showIcon={showIcon}
                                        showTitle={showTitle}
                                        showDescription={showDescription}
                                    />
                                ))}
                            </ul>
                        </SortableContext>
                        <Button isPrimary onClick={handleAddItem}>
                            {__("Add Tab", "frontis-blocks")}
                        </Button>
                    </DndContext>
                </div>

                {showIcon && (
                    <FB_SwitcherControl
                        label={__("Icon Position", "frontis-blocks")}
                        options={MULTI_ICON_POSITION}
                        globalSwitcher={tabIconPosition}
                        setGlobalSwitcher={(value) => setAttributes({ tabIconPosition: value })}
                    />
                )}

                <FB_HtmlTagControl
                    label={__("Title Tag", "frontis-blocks")}
                    globalHtmlTag={tabTitleTag}
                    setGlobalHtmlTag={(value) => setAttributes({ tabTitleTag: value })}
                />
                <FB_HtmlTagControl
                    label={__("Description Tag", "frontis-blocks")}
                    globalHtmlTag={tabDescriptionTag}
                    setGlobalHtmlTag={(value) => setAttributes({ tabDescriptionTag: value })}
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
                title={__("Tab Wrapper", "frontis-blocks")} 
                initialOpen={true}
            >
                <FB_Range
                    min={0}
                    max={100} 
                    label={__("Wrapper Item Gap", "frontis-blocks")}
                    rangeValue={tabWrapperGap}
                    onChangeHandler={(value) => setAttributes({ tabWrapperGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ tabWrapperGapUnits: value })} 
                    deviceType={deviceType}
                    units={tabWrapperGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />
                <FB_BackgroundColorControl
					label={__("Background Color", "frontis-blocks")}
					bgColorSwitcher={tabWrapperBgColorTypeSwitcher}     
					setBgColorSwitcher={(value) => setAttributes({ tabWrapperBgColorTypeSwitcher: value })}

					normalBackgroundType={tabWrapperBgColorType}
					setNormalBackgroundType={(value) => setAttributes({ tabWrapperBgColorType: value })}
					normalClassicColor={tabWrapperBgColor}
					setNormalClassicColor={(value) => setAttributes({ tabWrapperBgColor: value === undefined ? '' : value })}
					normalGradientColor={tabWrapperBgGradientColor}
					setNormalGradientColor={(value) => setAttributes({ tabWrapperBgGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={tabWrapperBgCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ tabWrapperBgCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={tabWrapperBgCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ tabWrapperBgCustomGradientColor: value === undefined ? null : value })}

					hoverBackgroundType={tabWrapperBgHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ tabWrapperBgHoverColorType: value })}
					hoverClassicColor={tabWrapperBgHoverColor}
					setHoverClassicColor={(value) => setAttributes({ tabWrapperBgHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={tabWrapperBgHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ tabWrapperBgHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={tabWrapperBgHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ tabWrapperBgHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={tabWrapperBgHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ tabWrapperBgHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}

				/>
                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")} 
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTabWrapperPaddingUnitsHandler}
                    spacingUnits={tabWrapperPaddingUnits}
                    spacingDesktop={tabWrapperPaddingDesktop}
                    spacingTablet={tabWrapperPaddingTablet}
                    spacingMobile={tabWrapperPaddingMobile}
                    handleSpacingUnitHandler={handleTabWrapperPaddingUnitChange}
                    spacingCombineBtn={tabWrapperPaddingLink}
                    spacingCombineBtnHandler={handleTabWrapperPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")} 
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTabWrapperMarginUnitsHandler}
                    spacingUnits={tabWrapperMarginUnits}
                    spacingDesktop={tabWrapperMarginDesktop}
                    spacingTablet={tabWrapperMarginTablet}
                    spacingMobile={tabWrapperMarginMobile}
                    handleSpacingUnitHandler={handleTabWrapperMarginUnitChange}
                    spacingCombineBtn={tabWrapperMarginLink}
                    spacingCombineBtnHandler={handleTabWrapperMarginCombineBtn}
                    setAttributes={setAttributes}
                />


                <SelectControl
                    label={__("Border Style", "frontis-blocks")} 
                    value={tabWrapperBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ tabWrapperBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={tabWrapperBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ tabWrapperBorderColorSwitcher: value })}
                />

                {tabWrapperBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={tabWrapperBorderColor}
                        setGlobalColor={(value) => setAttributes({ tabWrapperBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {tabWrapperBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={tabWrapperBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ tabWrapperBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTabWrapperBorderUnitsHandler}
                    spacingUnits={tabWrapperBorderUnits}
                    spacingDesktop={tabWrapperBorderDesktop}
                    spacingTablet={tabWrapperBorderTablet}
                    spacingMobile={tabWrapperBorderMobile}
                    handleSpacingUnitHandler={handleTabWrapperBorderUnitChange}
                    spacingCombineBtn={tabWrapperBorderLink}
                    spacingCombineBtnHandler={handleTabWrapperBorderCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTabWrapperBorderRadiusUnitsHandler}
                    spacingUnits={tabWrapperBorderRadiusUnits}
                    spacingDesktop={tabWrapperBorderRadiusDesktop}
                    spacingTablet={tabWrapperBorderRadiusTablet}
                    spacingMobile={tabWrapperBorderRadiusMobile}
                    handleSpacingUnitHandler={handleTabWrapperBorderRadiusUnitChange}
                    spacingCombineBtn={tabWrapperBorderRadiusLink}
                    spacingCombineBtnHandler={handleTabWrapperBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

            </PanelBody>
            <PanelBody 
                title={__("Tab List", "frontis-blocks")} 
                initialOpen={false}
            >
                <FB_Range
                    min={0}
                    max={tabListMinWidthUnits[deviceType] === '%' ? 100 : 1000} 
                    label={__("List Min Width", "frontis-blocks")}
                    rangeValue={tabListMinWidth}
                    onChangeHandler={(value) => setAttributes({ tabListMinWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ tabListMinWidthUnits: value })} 
                    deviceType={deviceType}
                    units={tabListMinWidthUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />
                <FB_Range
                    min={0}
                    max={100} 
                    label={__("List Item Gap", "frontis-blocks")}
                    rangeValue={tabListItemGap}
                    onChangeHandler={(value) => setAttributes({ tabListItemGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ tabListItemGapUnits: value })} 
                    deviceType={deviceType}
                    units={tabListItemGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={''}
                />
                <FB_BackgroundColorControl
					label={__("Background Color", "frontis-blocks")}
					bgColorSwitcher={tabListBgColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ tabListBgColorTypeSwitcher: value })}

					normalBackgroundType={tabListBgColorType}
					setNormalBackgroundType={(value) => setAttributes({ tabListBgColorType: value })}
					normalClassicColor={tabListBgColor}
					setNormalClassicColor={(value) => setAttributes({ tabListBgColor: value === undefined ? '' : value })}
					normalGradientColor={tabListBgGradientColor}
					setNormalGradientColor={(value) => setAttributes({ tabListBgGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={tabListBgCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ tabListBgCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={tabListBgCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ tabListBgCustomGradientColor: value === undefined ? null : value })}

					hoverBackgroundType={tabListBgHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ tabListBgHoverColorType: value })}
					hoverClassicColor={tabListBgHoverColor}
					setHoverClassicColor={(value) => setAttributes({ tabListBgHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={tabListBgHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ tabListBgHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={tabListBgHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ tabListBgHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={tabListBgHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ tabListBgHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}
				/>
                <FB_BackgroundColorControl
					label={__("Active BG Color", "frontis-blocks")}
					bgColorSwitcher={tabListActiveBgColorTypeSwitcher}
					setBgColorSwitcher={(value) => setAttributes({ tabListActiveBgColorTypeSwitcher: value })}

					normalBackgroundType={tabListActiveBgColorType}
					setNormalBackgroundType={(value) => setAttributes({ tabListActiveBgColorType: value })}
					normalClassicColor={tabListActiveBgColor}
					setNormalClassicColor={(value) => setAttributes({ tabListActiveBgColor: value === undefined ? '' : value })}
					normalGradientColor={tabListActiveBgGradientColor}
					setNormalGradientColor={(value) => setAttributes({ tabListActiveBgGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={tabListActiveBgCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ tabListActiveBgCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={tabListActiveBgCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ tabListActiveBgCustomGradientColor: value === undefined ? null : value })}

					hoverBackgroundType={tabListActiveBgHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ tabListActiveBgHoverColorType: value })}
					hoverClassicColor={tabListActiveBgHoverColor}
					setHoverClassicColor={(value) => setAttributes({ tabListActiveBgHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={tabListActiveBgHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ tabListActiveBgHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={tabListActiveBgHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ tabListActiveBgHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={tabListActiveBgHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ tabListActiveBgHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}
				/>
                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")} 
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTabListPaddingUnitsHandler}
                    spacingUnits={tabListPaddingUnits}
                    spacingDesktop={tabListPaddingDesktop}
                    spacingTablet={tabListPaddingTablet}
                    spacingMobile={tabListPaddingMobile}
                    handleSpacingUnitHandler={handleTabListPaddingUnitChange}
                    spacingCombineBtn={tabListPaddingLink}
                    spacingCombineBtnHandler={handleTabListPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")} 
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTabListMarginUnitsHandler}
                    spacingUnits={tabListMarginUnits}
                    spacingDesktop={tabListMarginDesktop}
                    spacingTablet={tabListMarginTablet}
                    spacingMobile={tabListMarginMobile}
                    handleSpacingUnitHandler={handleTabListMarginUnitChange}
                    spacingCombineBtn={tabListMarginLink}
                    spacingCombineBtnHandler={handleTabListMarginCombineBtn}
                    setAttributes={setAttributes}
                />


                <SelectControl
                    label={__("Border Style", "frontis-blocks")}
                    value={tabListBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ tabListBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={tabListBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ tabListBorderColorSwitcher: value })}
                />

                {tabListBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={tabListBorderColor}
                        setGlobalColor={(value) => setAttributes({ tabListBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {tabListBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={tabListBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ tabListBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_ColorControl
                    label={__("Active Border Color", "frontis-blocks")}
                    globalColor={tabListActiveBorderColor}
                    setGlobalColor={(value) => setAttributes({ tabListActiveBorderColor: value === undefined ? '' : value })}
                />

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTabListBorderUnitsHandler}
                    spacingUnits={tabListBorderUnits}
                    spacingDesktop={tabListBorderDesktop}
                    spacingTablet={tabListBorderTablet}
                    spacingMobile={tabListBorderMobile}
                    handleSpacingUnitHandler={handleTabListBorderUnitChange}
                    spacingCombineBtn={tabListBorderLink}
                    spacingCombineBtnHandler={handleTabListBorderCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTabListBorderRadiusUnitsHandler}
                    spacingUnits={tabListBorderRadiusUnits}
                    spacingDesktop={tabListBorderRadiusDesktop}
                    spacingTablet={tabListBorderRadiusTablet}
                    spacingMobile={tabListBorderRadiusMobile}
                    handleSpacingUnitHandler={handleTabListBorderRadiusUnitChange}
                    spacingCombineBtn={tabListBorderRadiusLink}
                    spacingCombineBtnHandler={handleTabListBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

            </PanelBody>

            {showTitle && (
               <PanelBody 
                    title={__("Title", "frontis-blocks")} 
                    initialOpen={false}
                >

                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={tabTitleGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ tabTitleGlobalTypographyData: value })}

                        globalTypoType={tabTitleGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({
                                tabTitleGlobalTypoType: value,
                                tabTitleGlobalTypoSwitcher: value === 'default' ? {...tabTitleGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...tabTitleGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={tabTitleGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ tabTitleGlobalTypoOption: value })}

                        fontFamily={tabTitleFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ tabTitleFontFamily: value, tabTitleGlobalTypoSwitcher: {...tabTitleGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={tabTitleFontSize}
                        onChangeFontSize={(value) => setAttributes({ tabTitleFontSize: value, tabTitleGlobalTypoSwitcher: {...tabTitleGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={tabTitleFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ tabTitleFontSizeUnits: value })}

                        fontWeight={tabTitleFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ tabTitleFontWeight: value, tabTitleGlobalTypoSwitcher: {...tabTitleGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={tabTitleFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ tabTitleFontStyle: value, tabTitleGlobalTypoSwitcher: {...tabTitleGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={tabTitleTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ tabTitleTextTransform: value, tabTitleGlobalTypoSwitcher: {...tabTitleGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={tabTitleTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ tabTitleTextDecoration: value, tabTitleGlobalTypoSwitcher: {...tabTitleGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={tabTitleLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ tabTitleLetterSpacing: value, tabTitleGlobalTypoSwitcher: {...tabTitleGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={tabTitleLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ tabTitleLetterSpacingUnits: value })}

                        lineHeight={tabTitleLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ tabTitleLineHeight: value, tabTitleGlobalTypoSwitcher: {...tabTitleGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={tabTitleLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ tabTitleLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={tabTitleColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ tabTitleColorSwitcher: value })}
                    />

                    {tabTitleColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={tabTitleColor}
                            setGlobalColor={(value) => setAttributes({ tabTitleColor: value === undefined ? '' : value })}
                        />
                    )}

                    {tabTitleColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={tabTitleHoverColor}
                            setGlobalColor={(value) => setAttributes({ tabTitleHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_ColorControl
                        label={__("Active Color", "frontis-blocks")}
                        globalColor={tabTitleActiveColor}
                        setGlobalColor={(value) => setAttributes({ tabTitleActiveColor: value === undefined ? '' : value })}
                    />

                    <FB_Spacing 
                        label={__("Padding", "frontis-blocks")} 
                        deviceType={deviceType}
                        spacingUnitsHandler={handleTitlePaddingUnitsHandler} 
                        spacingUnits={tabTitlePaddingUnits}
                        spacingDesktop={tabTitlePaddingDesktop}
                        spacingTablet={tabTitlePaddingTablet}
                        spacingMobile={tabTitlePaddingMobile}
                        handleSpacingUnitHandler={handleTitlePaddingUnitChange}
                        spacingCombineBtn={tabTitlePaddingLink}
                        spacingCombineBtnHandler={handleTitlePaddingCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Margin", "frontis-blocks")} 
                        deviceType={deviceType}
                        spacingUnitsHandler={handleTitleMarginUnitsHandler}
                        spacingUnits={tabTitleMarginUnits}
                        spacingDesktop={tabTitleMarginDesktop}
                        spacingTablet={tabTitleMarginTablet}
                        spacingMobile={tabTitleMarginMobile}
                        handleSpacingUnitHandler={handleTitleMarginUnitChange}
                        spacingCombineBtn={tabTitleMarginLink}
                        spacingCombineBtnHandler={handleTitleMarginCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={tabTitleBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ tabTitleBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={tabTitleBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ tabTitleBorderColorSwitcher: value })}
                    />

                    {tabTitleBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={tabTitleBorderColor}
                            setGlobalColor={(value) => setAttributes({ tabTitleBorderColor: value === undefined ? '' : value })}
                        />
                    )}

                    {tabTitleBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={tabTitleBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ tabTitleBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleTitleBorderUnitsHandler}
                        spacingUnits={tabTitleBorderUnits} 
                        spacingDesktop={tabTitleBorderDesktop}
                        spacingTablet={tabTitleBorderTablet}
                        spacingMobile={tabTitleBorderMobile}
                        handleSpacingUnitHandler={handleTitleBorderUnitChange}      
                        spacingCombineBtn={tabTitleBorderLink}
                        spacingCombineBtnHandler={handleTitleBorderCombineBtn}
                        setAttributes={setAttributes}
                    />
                    <FB_Spacing 
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleTitleBorderRadiusUnitsHandler}
                        spacingUnits={tabTitleBorderRadiusUnits}
                        spacingDesktop={tabTitleBorderRadiusDesktop}
                        spacingTablet={tabTitleBorderRadiusTablet}
                        spacingMobile={tabTitleBorderRadiusMobile}
                        handleSpacingUnitHandler={handleTitleBorderRadiusUnitChange}  
                        spacingCombineBtn={tabTitleBorderRadiusLink}
                        spacingCombineBtnHandler={handleTitleBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />
                    
                </PanelBody> 
            )}
            
            {showDescription && (
                <PanelBody 
                    title={__("Description", "frontis-blocks")} 
                    initialOpen={false}
                >

                    <FB_TypographyControl
                        globalTypoControlActive={true}
                        globalTypoSwitcher={tabDescriptionGlobalTypoSwitcher}
                        storeGlobalTypographyData={(value) => setAttributes({ tabDescriptionGlobalTypographyData: value })}

                        globalTypoType={tabDescriptionGlobalTypoType}
                        onChangeGlobalTypoType={(value) => {
                            setAttributes({
                                tabDescriptionGlobalTypoType: value,
                                tabDescriptionGlobalTypoSwitcher: value === 'default' ? {...tabDescriptionGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...tabDescriptionGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                            })
                        }}

                        globalTypoOption={tabDescriptionGlobalTypoOption}
                        onChangeGlobalTypoOption={(value) => setAttributes({ tabDescriptionGlobalTypoOption: value })}

                        fontFamily={tabDescriptionFontFamily}
                        onChangeFontFamily={(value) => setAttributes({ tabDescriptionFontFamily: value, tabDescriptionGlobalTypoSwitcher: {...tabDescriptionGlobalTypoSwitcher, fontFamily: value && false} })}

                        fontSize={tabDescriptionFontSize}
                        onChangeFontSize={(value) => setAttributes({ tabDescriptionFontSize: value, tabDescriptionGlobalTypoSwitcher: {...tabDescriptionGlobalTypoSwitcher, fontSize: value && false} })}

                        fontSizeUnits={tabDescriptionFontSizeUnits}
                        onChangeFontSizeUnit={(value) => setAttributes({ tabDescriptionFontSizeUnits: value })}

                        fontWeight={tabDescriptionFontWeight}
                        onChangeFontWeight={(value) => setAttributes({ tabDescriptionFontWeight: value, tabDescriptionGlobalTypoSwitcher: {...tabDescriptionGlobalTypoSwitcher, fontWeight: value && false} })}

                        fontStyle={tabDescriptionFontStyle}
                        onChangeFontStyle={(value) => setAttributes({ tabDescriptionFontStyle: value, tabDescriptionGlobalTypoSwitcher: {...tabDescriptionGlobalTypoSwitcher, fontStyle: value && false} })}

                        textTransform={tabDescriptionTextTransform}
                        onChangeTextTransform={(value) => setAttributes({ tabDescriptionTextTransform: value, tabDescriptionGlobalTypoSwitcher: {...tabDescriptionGlobalTypoSwitcher, textTransform: value && false} })}

                        textDecoration={tabDescriptionTextDecoration}
                        onChangeTextDecoration={(value) => setAttributes({ tabDescriptionTextDecoration: value, tabDescriptionGlobalTypoSwitcher: {...tabDescriptionGlobalTypoSwitcher, textDecoration: value && false} })}

                        letterSpacing={tabDescriptionLetterSpacing}
                        onChangeLetterSpacing={(value) => setAttributes({ tabDescriptionLetterSpacing: value, tabDescriptionGlobalTypoSwitcher: {...tabDescriptionGlobalTypoSwitcher, letterSpacing: value && false} })}

                        letterSpacingUnits={tabDescriptionLetterSpacingUnits}
                        onChangeLetterSpacingUnit={(value) => setAttributes({ tabDescriptionLetterSpacingUnits: value })}

                        lineHeight={tabDescriptionLineHeight}
                        onChangeLineHeight={(value) => setAttributes({ tabDescriptionLineHeight: value, tabDescriptionGlobalTypoSwitcher: {...tabDescriptionGlobalTypoSwitcher, lineHeight: value && false} })}

                        lineHeightUnits={tabDescriptionLineHeightUnits}
                        onChangeLineHeightUnit={(value) => setAttributes({ tabDescriptionLineHeightUnits: value })}

                        deviceType={deviceType}
                        setAttributes={setAttributes}
                    />

                    <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        globalSwitcher={tabDescriptionColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ tabDescriptionColorSwitcher: value })}
                    />

                    {tabDescriptionColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={tabDescriptionColor}
                            setGlobalColor={(value) => setAttributes({ tabDescriptionColor: value === undefined ? '' : value })}
                        />
                    )}

                    {tabDescriptionColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={tabDescriptionHoverColor}
                            setGlobalColor={(value) => setAttributes({ tabDescriptionHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_ColorControl
                        label={__("Active Color", "frontis-blocks")}
                        globalColor={tabDescriptionActiveColor}
                        setGlobalColor={(value) => setAttributes({ tabDescriptionActiveColor: value === undefined ? '' : value })}
                    />

                    <FB_Spacing 
                        label={__("Padding", "frontis-blocks")} 
                        deviceType={deviceType}
                        spacingUnitsHandler={handleDescriptionPaddingUnitsHandler} 
                        spacingUnits={tabDescriptionPaddingUnits}
                        spacingDesktop={tabDescriptionPaddingDesktop}
                        spacingTablet={tabDescriptionPaddingTablet}
                        spacingMobile={tabDescriptionPaddingMobile}
                        handleSpacingUnitHandler={handleDescriptionPaddingUnitChange}
                        spacingCombineBtn={tabDescriptionPaddingLink}
                        spacingCombineBtnHandler={handleDescriptionPaddingCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <FB_Spacing 
                        label={__("Margin", "frontis-blocks")} 
                        deviceType={deviceType}
                        spacingUnitsHandler={handleDescriptionMarginUnitsHandler}     
                        spacingUnits={tabDescriptionMarginUnits}
                        spacingDesktop={tabDescriptionMarginDesktop}
                        spacingTablet={tabDescriptionMarginTablet}
                        spacingMobile={tabDescriptionMarginMobile}
                        handleSpacingUnitHandler={handleDescriptionMarginUnitChange}
                        spacingCombineBtn={tabDescriptionMarginLink}
                        spacingCombineBtnHandler={handleDescriptionMarginCombineBtn}
                        setAttributes={setAttributes}
                    />

                    <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={tabDescriptionBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ tabDescriptionBorder: value })}
                    />

                    <FB_SwitcherControl
                        label={__("Border Color", "frontis-blocks")}
                        globalSwitcher={tabDescriptionBorderColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ tabDescriptionBorderColorSwitcher: value })}
                    />

                    {tabDescriptionBorderColorSwitcher === 'normal' && (
                        <FB_ColorControl
                            label={__("Normal Color", "frontis-blocks")}
                            globalColor={tabDescriptionBorderColor}
                            setGlobalColor={(value) => setAttributes({ tabDescriptionBorderColor: value === undefined ? '' : value })}
                        />
                    )}

                    {tabDescriptionBorderColorSwitcher === 'hover' && (
                        <FB_ColorControl
                            label={__("Hover Color", "frontis-blocks")}
                            globalColor={tabDescriptionBorderHoverColor}
                            setGlobalColor={(value) => setAttributes({ tabDescriptionBorderHoverColor: value === undefined ? '' : value })}
                        />
                    )}

                    <FB_Spacing 
                        label={__("Border", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleDescriptionBorderUnitsHandler}
                        spacingUnits={tabDescriptionBorderUnits} 
                        spacingDesktop={tabDescriptionBorderDesktop}
                        spacingTablet={tabDescriptionBorderTablet}
                        spacingMobile={tabDescriptionBorderMobile}
                        handleSpacingUnitHandler={handleDescriptionBorderUnitChange}      
                        spacingCombineBtn={tabDescriptionBorderLink}
                        spacingCombineBtnHandler={handleDescriptionBorderCombineBtn}
                        setAttributes={setAttributes}
                    />
                    <FB_Spacing 
                        label={__("Border Radius", "frontis-blocks")}
                        deviceType={deviceType}
                        spacingUnitsHandler={handleDescriptionBorderRadiusUnitsHandler}
                        spacingUnits={tabDescriptionBorderRadiusUnits}
                        spacingDesktop={tabDescriptionBorderRadiusDesktop}
                        spacingTablet={tabDescriptionBorderRadiusTablet}
                        spacingMobile={tabDescriptionBorderRadiusMobile}
                        handleSpacingUnitHandler={handleDescriptionBorderRadiusUnitChange}  
                        spacingCombineBtn={tabDescriptionBorderRadiusLink}
                        spacingCombineBtnHandler={handleDescriptionBorderRadiusCombineBtn}
                        setAttributes={setAttributes}
                    />
                    
                </PanelBody>
            )}

            {showIcon && (
                <>
                    <PanelBody
                        title={__("Icon", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_SwitcherControl
                            label={__("Position", "frontis-blocks")}
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
                                setGlobalColor={(value) => setAttributes({ tabIconColor: value === undefined ? '' : value })}
                            />
                        )}

                        {tabIconColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={tabIconHoverColor}
                                setGlobalColor={(value) => setAttributes({ tabIconHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_ColorControl
                            label={__("Icon Active Color", "frontis-blocks")}
                            globalColor={tabIconActiveColor}
                            setGlobalColor={(value) => setAttributes({ tabIconActiveColor: value === undefined ? '' : value })}
                        />

                        <FB_BackgroundColorControl
                            label={__("Background Color", "frontis-blocks")}
                            bgColorSwitcher={tabIconBgColorSwitcher}  
                            setBgColorSwitcher={(value) => setAttributes({ tabIconBgColorSwitcher: value })}
                            
                            normalBackgroundType={tabIconNormalBackgroundType} 
                            setNormalBackgroundType={(value) => setAttributes({ tabIconNormalBackgroundType: value })}
                            normalClassicColor={tabIconBgColor}
                            setNormalClassicColor={(value) => setAttributes({ tabIconBgColor: value === undefined ? '' : value })}
                            normalGradientColor={tabIconNormalGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ tabIconNormalGradientColor: value === undefined ? null : value })}
                            normalCustomGradientSwitcher={tabIconNormalCustomGradientSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ tabIconNormalCustomGradientSwitcher: value })}
                            normalCustomGradientInputValue={tabIconNormalCustomGradientInputValue}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ tabIconNormalCustomGradientInputValue: value })}
                            
                            hoverBackgroundType={tabIconHoverBackgroundType} 
                            setHoverBackgroundType={(value) => setAttributes({ tabIconHoverBackgroundType: value })}
                            hoverClassicColor={ tabIconBgHoverColor}
                            setHoverClassicColor={(value) => setAttributes({  tabIconBgHoverColor: value === undefined ? '' : value })}
                            hoverGradientColor={tabIconHoverGradientColor} 
                            setHoverGradientColor={(value) => setAttributes({ tabIconHoverGradientColor: value === undefined ? null : value })}
                            hoverCustomGradientSwitcher={tabIconHoverCustomGradientSwitcher}
                            setHoverCustomGradientSwitcher={(value) => setAttributes({ tabIconHoverCustomGradientSwitcher: value })}
                            hoverCustomGradientInputValue={tabIconHoverCustomGradientInputValue}
                            setHoverCustomGradientInputValue={(value) => setAttributes({ tabIconHoverCustomGradientInputValue: value })}

                            isBackgroundImage={false}

                        />

                        <FB_BackgroundColorControl
                            label={__("BG Active Color", "frontis-blocks")}
                            bgColorSwitcher={tabIconBgActiveColorSwitcher}  
                            setBgColorSwitcher={(value) => setAttributes({ tabIconBgActiveColorSwitcher: value })}
                            
                            normalBackgroundType={tabIconActiveNormalBackgroundType} 
                            setNormalBackgroundType={(value) => setAttributes({ tabIconActiveNormalBackgroundType: value })}
                            normalClassicColor={tabIconBgActiveColor}
                            setNormalClassicColor={(value) => setAttributes({ tabIconBgActiveColor: value === undefined ? '' : value })}
                            normalGradientColor={tabIconActiveNormalGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ tabIconActiveNormalGradientColor: value === undefined ? null : value })}
                            normalCustomGradientSwitcher={tabIconActiveNormalCustomGradientSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ tabIconActiveNormalCustomGradientSwitcher: value })}
                            normalCustomGradientInputValue={tabIconActiveNormalCustomGradientInputValue}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ tabIconActiveNormalCustomGradientInputValue: value })}
                            
                            hoverBackgroundType={tabIconActiveHoverBackgroundType} 
                            setHoverBackgroundType={(value) => setAttributes({ tabIconActiveHoverBackgroundType: value })}
                            hoverClassicColor={ tabIconBgActiveHoverColor}
                            setHoverClassicColor={(value) => setAttributes({  tabIconBgActiveHoverColor: value === undefined ? '' : value })}
                            hoverGradientColor={tabIconActiveHoverGradientColor} 
                            setHoverGradientColor={(value) => setAttributes({ tabIconActiveHoverGradientColor: value === undefined ? null : value })}
                            hoverCustomGradientSwitcher={tabIconActiveHoverCustomGradientSwitcher}
                            setHoverCustomGradientSwitcher={(value) => setAttributes({ tabIconActiveHoverCustomGradientSwitcher: value })}
                            hoverCustomGradientInputValue={tabIconActiveHoverCustomGradientInputValue}
                            setHoverCustomGradientInputValue={(value) => setAttributes({ tabIconActiveHoverCustomGradientInputValue: value })}

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
                                setGlobalColor={(value) => setAttributes({ tabIconBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {tabIconBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={tabIconBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ tabIconBorderHoverColor: value === undefined ? '' : value })}
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
                        title={__("Image", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_SwitcherControl
                            label={__("Position", "frontis-blocks")}
                            options={ICON_POSITION}
                            globalSwitcher={tabIconPosition}
                            setGlobalSwitcher={(value) => setAttributes({ tabIconPosition: value })}
                        />
                        <FB_Range
                            min={1}
                            max={tabIconImageWidthUnits === '%' ? 100 : 1000}
                            label={__("Width", "frontis-blocks")}
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
                            max={tabIconImageHeightUnits === '%' ? 100 : 1000}
                            label={__("Height", "frontis-blocks")}
                            rangeValue={tabIconImageHeight}
                            onChangeHandler={(value) => setAttributes({ tabIconImageHeight: value })}
                            rangeUnitHandler={(value) => setAttributes({ tabIconImageHeightUnits: value })}
                            deviceType={deviceType}
                            units={tabIconImageHeightUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={20}
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
            )}
            
            
            <PanelBody 
                title={__("Tab Content", "frontis-blocks")} 
                initialOpen={false}
            >
                <FB_BackgroundColorControl
					label={__("Background Color", "frontis-blocks")}
					bgColorSwitcher={tabContentBgColorTypeSwitcher}  
					setBgColorSwitcher={(value) => setAttributes({ tabContentBgColorTypeSwitcher: value })}

					normalBackgroundType={tabContentBgColorType}
					setNormalBackgroundType={(value) => setAttributes({ tabContentBgColorType: value })}
					normalClassicColor={tabContentBgColor}
					setNormalClassicColor={(value) => setAttributes({ tabContentBgColor: value === undefined ? '' : value })}
					normalGradientColor={tabContentBgGradientColor}
					setNormalGradientColor={(value) => setAttributes({ tabContentBgGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={tabContentBgCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ tabContentBgCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={tabContentBgCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ tabContentBgCustomGradientColor: value === undefined ? null : value })}

					hoverBackgroundType={tabContentBgHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ tabContentBgHoverColorType: value })}
					hoverClassicColor={tabContentBgHoverColor}
					setHoverClassicColor={(value) => setAttributes({ tabContentBgHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={tabContentBgHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ tabContentBgHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={tabContentBgHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ tabContentBgHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={tabContentBgHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ tabContentBgHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}

				/>
                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")} 
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTabContentPaddingUnitsHandler}
                    spacingUnits={tabContentPaddingUnits}
                    spacingDesktop={tabContentPaddingDesktop}
                    spacingTablet={tabContentPaddingTablet}
                    spacingMobile={tabContentPaddingMobile}
                    handleSpacingUnitHandler={handleTabContentPaddingUnitChange}
                    spacingCombineBtn={tabContentPaddingLink}
                    spacingCombineBtnHandler={handleTabContentPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")} 
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTabContentMarginUnitsHandler}
                    spacingUnits={tabContentMarginUnits}
                    spacingDesktop={tabContentMarginDesktop}
                    spacingTablet={tabContentMarginTablet}
                    spacingMobile={tabContentMarginMobile}
                    handleSpacingUnitHandler={handleTabContentMarginUnitChange}
                    spacingCombineBtn={tabContentMarginLink}
                    spacingCombineBtnHandler={handleTabContentMarginCombineBtn}
                    setAttributes={setAttributes}
                />


                <SelectControl
                    label={__("Border Style", "frontis-blocks")} 
                    value={tabContentBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ tabContentBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={tabContentBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ tabContentBorderColorSwitcher: value })}
                />

                {tabContentBorderColorSwitcher === 'normal' && ( 
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={tabContentBorderColor}
                        setGlobalColor={(value) => setAttributes({ tabContentBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {tabContentBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={tabContentBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ tabContentBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTabContentBorderUnitsHandler}
                    spacingUnits={tabContentBorderUnits}
                    spacingDesktop={tabContentBorderDesktop}
                    spacingTablet={tabContentBorderTablet}
                    spacingMobile={tabContentBorderMobile}
                    handleSpacingUnitHandler={handleTabContentBorderUnitChange}
                    spacingCombineBtn={tabContentBorderLink}
                    spacingCombineBtnHandler={handleTabContentBorderCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleTabContentBorderRadiusUnitsHandler}
                    spacingUnits={tabContentBorderRadiusUnits}
                    spacingDesktop={tabContentBorderRadiusDesktop}
                    spacingTablet={tabContentBorderRadiusTablet}
                    spacingMobile={tabContentBorderRadiusMobile}
                    handleSpacingUnitHandler={handleTabContentBorderRadiusUnitChange}
                    spacingCombineBtn={tabContentBorderRadiusLink}
                    spacingCombineBtnHandler={handleTabContentBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

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
                className='fb-setting-layout-header'
            >
                <FB_Range
                    min={0}
                    max={10000000}
                    label={__("Z Index", "frontis-blocks")}
                    rangeValue={tabGlobalZIndex} 
                    onChangeHandler={(value) => setAttributes({ tabGlobalZIndex: value === 0 ? undefined : value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}

                />

                <FB_InputControl
                    label={__("CSS ID", "frontis-blocks")}
                    value={tabGlobalWraperID}
                    onChangeValue={(value) => setAttributes({ tabGlobalWraperID: value })}
                    helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                />

                <FB_InputControl
                    label={__("CSS Class", "frontis-blocks")}
                    value={tabGlobalWraperClass}
                    onChangeValue={(value) => setAttributes({ tabGlobalWraperClass: value })}
                    helpText={__("Separate with spaces key.", "frontis-blocks")}
                />

            </PanelBody>
            <PanelBody 
                title={__("Padding and Margin", "frontis-blocks")} 
                initialOpen={false}
            >
                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")} 
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                    spacingUnits={tabGlobalPaddingUnits}
                    spacingDesktop={tabGlobalPaddingDesktop}
                    spacingTablet={tabGlobalPaddingTablet}
                    spacingMobile={tabGlobalPaddingMobile}
                    handleSpacingUnitHandler={handleGlobalPaddingUnitChange} 
                    spacingCombineBtn={tabGlobalPaddingLink}
                    spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")} 
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                    spacingUnits={tabGlobalMarginUnits}
                    spacingDesktop={tabGlobalMarginDesktop}
                    spacingTablet={tabGlobalMarginTablet}
                    spacingMobile={tabGlobalMarginMobile}
                    handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                    spacingCombineBtn={tabGlobalMarginLink}
                    spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>
            <PanelBody 
                title={__("Background", "frontis-blocks")} 
                initialOpen={false}
            >
                <FB_BackgroundColorControl
					label={__("Background Color", "frontis-blocks")}
					bgColorSwitcher={tabGlobalBgColorTypeSwitcher}  
					setBgColorSwitcher={(value) => setAttributes({ tabGlobalBgColorTypeSwitcher: value })}

					normalBackgroundType={tabGlobalBgColorType}
					setNormalBackgroundType={(value) => setAttributes({ tabGlobalBgColorType: value })}
					normalClassicColor={tabGlobalBgColor}
					setNormalClassicColor={(value) => setAttributes({ tabGlobalBgColor: value === undefined ? '' : value })}
					normalGradientColor={tabGlobalBgGradientColor}
					setNormalGradientColor={(value) => setAttributes({ tabGlobalBgGradientColor: value === undefined ? null : value })}
					normalCustomGradientSwitcher={tabGlobalBgCustomGradientColorSwitcher}
					setNormalCustomGradientSwitcher={(value) => setAttributes({ tabGlobalBgCustomGradientColorSwitcher: value })}
					normalCustomGradientInputValue={tabGlobalBgCustomGradientColor}
					setNormalCustomGradientInputValue={(value) => setAttributes({ tabGlobalBgCustomGradientColor: value === undefined ? null : value })}

					hoverBackgroundType={tabGlobalBgHoverColorType}
					setHoverBackgroundType={(value) => setAttributes({ tabGlobalBgHoverColorType: value })}
					hoverClassicColor={tabGlobalBgHoverColor}
					setHoverClassicColor={(value) => setAttributes({ tabGlobalBgHoverColor: value === undefined ? '' : value })}
					hoverGradientColor={tabGlobalBgHoverGradientColor}
					setHoverGradientColor={(value) => setAttributes({ tabGlobalBgHoverGradientColor: value === undefined ? null : value })}
					hoverCustomGradientSwitcher={tabGlobalBgHoverCustomGradientColorSwitcher}
					setHoverCustomGradientSwitcher={(value) => setAttributes({ tabGlobalBgHoverCustomGradientColorSwitcher: value })}
					hoverCustomGradientInputValue={tabGlobalBgHoverCustomGradientColor}
					setHoverCustomGradientInputValue={(value) => setAttributes({ tabGlobalBgHoverCustomGradientColor: value === undefined ? null : value })}

					isBackgroundImage={false}

				/>
            </PanelBody>
            <PanelBody 
                title={__("Border and Shadow", "frontis-blocks")} 
                initialOpen={false}
            >
                <SelectControl
                    label={__("Border Style", "frontis-blocks")} 
                    value={tabGlobalBorder}
                    options={BORDER_STYLES}
                    onChange={(value) => setAttributes({ tabGlobalBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={tabGlobalBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ tabGlobalBorderColorSwitcher: value })}
                />

                {tabGlobalBorderColorSwitcher === 'normal' && ( 
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={tabGlobalBorderColor}
                        setGlobalColor={(value) => setAttributes({ tabGlobalBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {tabGlobalBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={tabGlobalBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ tabGlobalBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                    spacingUnits={tabGlobalBorderUnits}
                    spacingDesktop={tabGlobalBorderDesktop}
                    spacingTablet={tabGlobalBorderTablet}
                    spacingMobile={tabGlobalBorderMobile}
                    handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                    spacingCombineBtn={tabGlobalBorderLink}
                    spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                    spacingUnits={tabGlobalBorderRadiusUnits}
                    spacingDesktop={tabGlobalBorderRadiusDesktop}
                    spacingTablet={tabGlobalBorderRadiusTablet}
                    spacingMobile={tabGlobalBorderRadiusMobile}
                    handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                    spacingCombineBtn={tabGlobalBorderRadiusLink}
                    spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={tabGlobalBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ tabGlobalBoxShadowSwitcher: value })}
                />

                {tabGlobalBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ tabGlobalBoxShadowValues: value })}
                        initialShadowValue={tabGlobalBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ tabGlobalBoxShadowCssValue: value })}
                    />
                )}

                {tabGlobalBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ tabGlobalBoxShadowHoverValues: value })}
                        initialShadowValue={tabGlobalBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ tabGlobalBoxShadowHoverCssValue: value })}
                    />
                )}
            </PanelBody>
            <PanelBody
                title={__("Custom CSS", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_CustomCSSEditor
                    value={tabGlobalCustomCSS}
                    onChangeValue={(value) => setAttributes({ tabGlobalCustomCSS: value })}
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
export default memo(Inspector);
