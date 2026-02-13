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

const Inspector = ({ attributes, setAttributes, handleDragEnd, handleAddItem, handleChangeItem, handleDeleteItem, handleDuplicateItem, tabsItemList }) => {
    
    const { 
        blockID,
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

    const deviceType = useDeviceType();

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
    /** End Global Border Radius */

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