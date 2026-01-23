import { __ } from '@wordpress/i18n';
import { useEffect, useMemo, memo } from '@wordpress/element';
import { 
    PanelBody, 
    SelectControl, 
    ToggleControl,
    TabPanel,
    BaseControl,
} from '@wordpress/components';

import { 
    NORMAL_HOVER,
    OVERFLOW_OP,
    BORDER_STYLES,
    NAVIGATION_LAYOUT,
    HORIZONTAL_NAVIGATION_ALIGN,
    VERTICAL_NAVIGATION_ALIGN,
    HAMBURGER_MENU_ICON_TYPE,
    HAMBURGER_MENU_SCREEN,
} from '@Constants/fbConstants';

import FB_InspectorControls from '@Components/InspectorControls';
import FB_AlignmentControl from '@Components/alignment-control';
import FB_Spacing from '@Components/spacing';
import FB_ColorControl from '@Components/color-control';
import FB_TypographyControl from '@Components/typography-control';
import FB_SwitcherControl from '@Components/switcher-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_Range from '@Components/range';
import FB_BackgroundColorControl from '@Components/background-color-control';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';

import "./editor.scss";

const Inspector = ({ attributes, setAttributes,  clientId}) => {
    const {
        blockId,
        blockStyle,
        // deviceType,
        navigationLayout,
        navigationHorizontalAlign, 
        dropdownOpenOnClick,
        showDropdownIcon,
        navigationFlexWrapSwitcher,
        navigationVerticalAlign, 
        hamburgerMenuIconType,
        hamburgerMenuSwitcher,

        /** Start Navigation Typography */
        navigationGap,
        navigationGapUnits,
        navigationGlobalTypographyData,
        navigationGlobalTypoSwitcher,
        navigationGlobalTypoType,
        navigationGlobalTypoOption,
        navigationFontFamily,
        navigationFontSize,
        navigationFontSizeUnits,
        navigationFontWeight,
        navigationFontStyle,
        navigationTextTransform,
        navigationTextDecoration,
        navigationLetterSpacing,
        navigationLetterSpacingUnits,
        navigationLineHeight,
        navigationLineHeightUnits,
        /** End Navigation Typography */

        /** Start Navigation Color and active color */
        navigationColorSwitcher,
        navigationColor,
        navigationHoverColor,
        navigationActiveColorSwitcher,
        navigationActiveColor,
        navigationActiveHoverColor,
        /** End Navigation Color and active color */

        /** Start Navigation Background */
        navigationBgColorSwitcher,
        navigationNormalBackgroundType,
        navigationNormalClassicColor,
        navigationNormalGradientColor,
        navigationNormalCustomGradientSwitcher,
        navigationNormalCustomGradientInputValue,

        navigationHoverBackgroundType,
        navigationHoverClassicColor,
        navigationHoverGradientColor,
        navigationHoverCustomGradientSwitcher,
        navigationHoverCustomGradientInputValue,
        /** End Navigation Background */

        /** Start Navigation Padding and Margin */
        navigationPaddingUnits,
        navigationDesktopPadding,
        navigationTabletPadding,
        navigationMobilePadding,
        navigationPaddingLink,

        navigationMarginUnits,
        navigationDesktopMargin,
        navigationTabletMargin,
        navigationMobileMargin,
        navigationMarginLink,
        /** End Navigation Padding and Margin */

        /** Start Navigation Border and Border Radius */
        navigationBorder,
        navigationBorderColorSwitcher,
        navigationBorderColor,
        navigationBorderHoverColor,

        navigationBorderUnits,
        navigationDesktopBorder,
        navigationTabletBorder,
        navigationMobileBorder,
        navigationBorderLink,

        navigationBorderRadiusUnits,
        navigationDesktopBorderRadius,
        navigationTabletBorderRadius,
        navigationMobileBorderRadius,
        navigationBorderRadiusLink,
        /** End Navigation Border and Border Radius */

        /** Start Navigation Box Shadow */
        navigationBoxShadowSwitcher,
        navigationBoxShadowValues,
        navigationBoxShadowCssValue,
        navigationBoxShadowHoverValues,
        navigationBoxShadowHoverCssValue,
        /** End Navigation Box Shadow */

        /** Start Dropdown Menu */
        dropDownWrapperMinWidth,
        dropDownWrapperMinWidthUnits,
        /** End Dropdown Menu */

        /** Start Dropdown Menu Background */
        dropDownBgColorSwitcher,
        dropDownNormalBackgroundType,
        dropDownNormalClassicColor,
        dropDownNormalGradientColor,
        dropDownNormalCustomGradientSwitcher,
        dropDownNormalCustomGradientInputValue,

        dropDownHoverBackgroundType,
        dropDownHoverClassicColor,
        dropDownHoverGradientColor,
        dropDownHoverCustomGradientSwitcher,
        dropDownHoverCustomGradientInputValue,
        /** End Dropdown Menu Background */

        /** Start Dropdown Menu Padding and Margin */
        dropDownPaddingUnits, 
        dropDownDesktopPadding,
        dropDownTabletPadding,
        dropDownMobilePadding,
        dropDownPaddingLink,

        dropDownMarginUnits,
        dropDownDesktopMargin,
        dropDownTabletMargin,
        dropDownMobileMargin,
        dropDownMarginLink,
        /** End Dropdown Menu Padding and Margin */

        /** Start Dropdown Menu Border and Border Radius */
        dropDownBorder,
        dropDownBorderColorSwitcher,
        dropDownBorderColor,
        dropDownBorderHoverColor,

        dropDownBorderUnits,
        dropDownDesktopBorder,
        dropDownTabletBorder,
        dropDownMobileBorder,
        dropDownBorderLink,

        dropDownBorderRadiusUnits,  
        dropDownDesktopBorderRadius,
        dropDownTabletBorderRadius,
        dropDownMobileBorderRadius,
        dropDownBorderRadiusLink,
        /** End Dropdown Menu Border and Border Radius */

        /** Start Dropdown Menu Box Shadow */
        dropDownBoxShadowSwitcher,
        dropDownBoxShadowValues,
        dropDownBoxShadowCssValue,
        dropDownBoxShadowHoverValues,
        dropDownBoxShadowHoverCssValue,
        /** End Dropdown Menu Box Shadow */

        /** Start Dropdown Menu Typography */
        dropDownItemTypographyData,
        dropDownItemTypoSwitcher,
        dropDownItemTypoType,
        dropDownItemTypoOption,
        dropDownItemFontFamily,
        dropDownItemFontSize,
        dropDownItemFontSizeUnits,
        dropDownItemFontWeight,
        dropDownItemFontStyle,
        dropDownItemTextTransform,
        dropDownItemTextDecoration,
        dropDownItemLetterSpacing,
        dropDownItemLetterSpacingUnits,
        dropDownItemLineHeight,
        dropDownItemLineHeightUnits,
        /** End Dropdown Menu Item Typography */ 

        /** Start Dropdown Menu Color and active color */
        dropDownItemColorSwitcher,
        dropDownItemColor,
        dropDownItemHoverColor,

        dropDownItemActiveColorSwitcher,
        dropDownItemActiveColor,
        dropDownItemActiveHoverColor,
        /** End Dropdown Menu Color and active color */

        /** Start Dropdown Menu Item Padding */
        dropDownItemPaddingUnits,
        dropDownItemDesktopPadding,
        dropDownItemTabletPadding,
        dropDownItemMobilePadding,
        dropDownItemPaddingLink,
        /** End Dropdown Menu Item Padding */

        /** Start Dropdown Menu Item Margin */
        dropDownItemMarginUnits,
        dropDownItemDesktopMargin,
        dropDownItemTabletMargin,
        dropDownItemMobileMargin,
        dropDownItemMarginLink,
        /** End Dropdown Menu Item Margin */

        /** Start Dropdown Menu Item Border */
        dropDownItemBorder,
        dropDownItemBorderColorSwitcher,
        dropDownItemBorderColor,
        dropDownItemBorderHoverColor,

        dropDownItemBorderUnits,
        dropDownItemDesktopBorder,
        dropDownItemTabletBorder,
        dropDownItemMobileBorder,
        dropDownItemBorderLink,

        dropDownItemBorderRadiusUnits,
        dropDownItemDesktopBorderRadius,
        dropDownItemTabletBorderRadius,
        dropDownItemMobileBorderRadius,
        dropDownItemBorderRadiusLink,
        /** End Dropdown Menu Item Border */

        /** Start Dropdown Menu Icon */
        dropDownIconSize,
        dropDownIconSizeUnits,
        dropDownIconColorSwitcher,
        dropDownIconColor,
        dropDownIconHoverColor,

        dropDownIconMarginUnits,
        dropDownIconDesktopMargin,
        dropDownIconTabletMargin,
        dropDownIconMobileMargin,
        dropDownIconMarginLink,
        /** End Dropdown Menu Icon */

        /** Start Hamburger Menu */
        hamburgerMenuIconSize,
        hamburgerMenuIconSizeUnits,
        hamburgerMenuIconColorSwitcher,
        hamburgerMenuIconColor,
        hamburgerMenuIconHoverColor,

        hamburgerMenuIconPaddingUnits,
        hamburgerMenuIconDesktopPadding,
        hamburgerMenuIconTabletPadding,
        hamburgerMenuIconMobilePadding,
        hamburgerMenuIconPaddingLink,
        /** End Hamburger Menu */

        /** Start Hamburger Menu Background */
        hamburgerMenuPopupBgColorSwitcher,
        hamburgerMenuPopupNormalBackgroundType,
        hamburgerMenuPopupNormalClassicColor,
        hamburgerMenuPopupNormalGradientColor,
        hamburgerMenuPopupNormalCustomGradientSwitcher,
        hamburgerMenuPopupNormalCustomGradientInputValue,

        hamburgerMenuPopupHoverBackgroundType,
        hamburgerMenuPopupHoverClassicColor,
        hamburgerMenuPopupHoverGradientColor,
        hamburgerMenuPopupHoverCustomGradientSwitcher,
        hamburgerMenuPopupHoverCustomGradientInputValue,

        /** End Hamburger Menu Background */

        /** Start Hamburger Menu Padding */
        hamburgerMenuPopupPaddingUnits,
        hamburgerMenuPopupDesktopPadding,
        hamburgerMenuPopupTabletPadding,
        hamburgerMenuPopupMobilePadding,
        hamburgerMenuPopupPaddingLink,
        /** End Hamburger Menu Padding */

        /** Start Hamburger Menu Typography */
        hamburgerMenuPopupGlobalTypographyData,
        hamburgerMenuPopupGlobalTypoSwitcher,
        hamburgerMenuPopupGlobalTypoType,
        hamburgerMenuPopupGlobalTypoOption,
        hamburgerMenuPopupFontFamily,
        hamburgerMenuPopupFontSize,
        hamburgerMenuPopupFontSizeUnits,
        hamburgerMenuPopupFontWeight,
        hamburgerMenuPopupFontStyle,
        hamburgerMenuPopupTextTransform,
        hamburgerMenuPopupTextDecoration,
        hamburgerMenuPopupLetterSpacing,
        hamburgerMenuPopupLetterSpacingUnits,
        hamburgerMenuPopupLineHeight,
        hamburgerMenuPopupLineHeightUnits,
        /** End Hamburger Menu Typography */
        
        /** Start Hamburger Menu Color */
        hamburgerMenuPopupColorSwitcher,
        hamburgerMenuPopupColor,
        hamburgerMenuPopupHoverColor,
        /** End Hamburger Menu Color */

        /** Start Hamburger Menu close icon color */
        hamburgerMenuCloseIconSize,
        hamburgerMenuCloseIconSizeUnits,
        hamburgerMenuCloseIconColorSwitcher,
        hamburgerMenuCloseIconColor,
        hamburgerMenuCloseIconHoverColor,
        /** End Hamburger Menu close icon color */

        /** Start Global Setting */
        navigationGlobalZIndex,

        navigationOverflow,
        navigationPositionType,
        navigationHZOrientationType,
        navigationVROrientationType,
        navigationHZLeftOffset,
        navigationHZLeftOffsetUnits,
        navigationHZRightOffset,
        navigationHZRightOffsetUnits,
        navigationVRTopOffset,
        navigationVRTopOffsetUnits,
        navigationVRBottomOffset,
        navigationVRBottomOffsetUnits,

        navigationGlobalPaddingUnits,
        navigationGlobalPaddingDesktop,
        navigationGlobalPaddingTablet,
        navigationGlobalPaddingMobile,
        navigationGlobalPaddingLink,

        navigationGlobalMarginUnits,
        navigationGlobalMarginDesktop,
        navigationGlobalMarginTablet,
        navigationGlobalMarginMobile,
        navigationGlobalMarginLink,

        navigationGlobalBgColorSwitcher, 
        navigationGlobalNormalBackgroundType,
        navigationGlobalNormalClassicColor,
        navigationGlobalNormalGradientColor,
        navigationGlobalNormalCustomGradientSwitcher,
        navigationGlobalNormalCustomGradientInputValue,

        navigationGlobalHoverBackgroundType,
        navigationGlobalHoverClassicColor,
        navigationGlobalHoverGradientColor,
        navigationGlobalHoverCustomGradientSwitcher,
        navigationGlobalHoverCustomGradientInputValue,
        
        navigationGlobalBorder, 
        navigationGlobalBorderColorSwitcher,
        navigationGlobalBorderColor,
        navigationGlobalBorderHoverColor,

        navigationGlobalBorderUnits,
        navigationGlobalBorderDesktop,
        navigationGlobalBorderTablet,
        navigationGlobalBorderMobile,
        navigationGlobalBorderLink,

        navigationGlobalBorderRadiusUnits,
        navigationGlobalBorderRadiusDesktop,
        navigationGlobalBorderRadiusTablet,
        navigationGlobalBorderRadiusMobile,
        navigationGlobalBorderRadiusLink,

        navigationGlobalBoxShadowSwitcher,
        navigationGlobalBoxShadowValues,
        navigationGlobalBoxShadowCssValue,
        navigationGlobalBoxShadowHoverValues,
        navigationGlobalBoxShadowHoverCssValue,

        navigationDesktopSwitcher,
        navigationTabletSwitcher,
        navigationMobileSwitcher,

        navigationGlobalCustomCSS,
        navigationGlobalWraperID,
        navigationGlobalWraperClass,


        
        /** End Global Setting */
    } = attributes;

    const deviceType= useDeviceType();

    /** Start Navigation padding */
	const handleNavigationPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( navigationPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						navigationDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						navigationTabletPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						navigationMobilePadding: {
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
					setAttributes( {navigationDesktopPadding: {...navigationDesktopPadding, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {navigationTabletPadding: {...navigationTabletPadding, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {navigationMobilePadding: {...navigationMobilePadding, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleNavigationPaddingCombineBtn = () => {
		setAttributes( {navigationPaddingLink: !navigationPaddingLink} );
	}

	const handleNavigationPaddingUnitsHandler = (unit) => {
		setAttributes( {
			navigationPaddingUnits: {
				...navigationPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const navigationDesktopPaddingWidth    = `${navigationDesktopPadding?.top}${navigationPaddingUnits?.Desktop} ${navigationDesktopPadding?.right}${navigationPaddingUnits?.Desktop} ${navigationDesktopPadding?.bottom}${navigationPaddingUnits?.Desktop} ${navigationDesktopPadding?.left}${navigationPaddingUnits?.Desktop}`;
	const navigationTabletPaddingWidth     = `${navigationTabletPadding?.top}${navigationPaddingUnits?.Tablet} ${navigationTabletPadding?.right}${navigationPaddingUnits?.Tablet} ${navigationTabletPadding?.bottom}${navigationPaddingUnits?.Tablet} ${navigationTabletPadding?.left}${navigationPaddingUnits?.Tablet}`;
	const navigationMobilePaddingWidth     = `${navigationMobilePadding?.top}${navigationPaddingUnits?.Mobile} ${navigationMobilePadding?.right}${navigationPaddingUnits?.Mobile} ${navigationMobilePadding?.bottom}${navigationPaddingUnits?.Mobile} ${navigationMobilePadding?.left}${navigationPaddingUnits?.Mobile}`;
	/** End Navigation Padding */
	
	/** Start Navigation Margin */
	const handleNavigationMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( navigationMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						navigationDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						navigationTabletMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						navigationMobileMargin: {
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
					setAttributes( {navigationDesktopMargin: {...navigationDesktopMargin, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {navigationTabletMargin: {...navigationTabletMargin, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {navigationMobileMargin: {...navigationMobileMargin, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleNavigationMarginCombineBtn = () => {
		setAttributes( {navigationMarginLink: !navigationMarginLink} );
	}

	const handleNavigationMarginUnitsHandler = (unit) => {
		setAttributes( {
			navigationMarginUnits: {
				...navigationMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const navigationDesktopMarginWidth = `${navigationDesktopMargin?.top}${navigationMarginUnits?.Desktop} ${navigationDesktopMargin?.right}${navigationMarginUnits?.Desktop} ${navigationDesktopMargin?.bottom}${navigationMarginUnits?.Desktop} ${navigationDesktopMargin?.left}${navigationMarginUnits?.Desktop}`;
	const navigationTabletMarginWidth = `${navigationTabletMargin?.top}${navigationMarginUnits?.Tablet} ${navigationTabletMargin?.right}${navigationMarginUnits?.Tablet} ${navigationTabletMargin?.bottom}${navigationMarginUnits?.Tablet} ${navigationTabletMargin?.left}${navigationMarginUnits?.Tablet}`;
	const navigationMobileMarginWidth = `${navigationMobileMargin?.top}${navigationMarginUnits?.Mobile} ${navigationMobileMargin?.right}${navigationMarginUnits?.Mobile} ${navigationMobileMargin?.bottom}${navigationMarginUnits?.Mobile} ${navigationMobileMargin?.left}${navigationMarginUnits?.Mobile}`;
	/** End Navigation Margin */

	/** Start Navigation border */
	const handleNavigationBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( navigationBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {

						navigationDesktopBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						navigationTabletBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						navigationMobileBorder: {
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
					setAttributes( {navigationDesktopBorder: {...navigationDesktopBorder, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {navigationTabletBorder: {...navigationTabletBorder, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {navigationMobileBorder: {...navigationMobileBorder, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleNavigationBorderCombineBtn = () => {
		setAttributes( {navigationBorderLink: !navigationBorderLink} );
	}

	const handleNavigationBorderUnitsHandler = (unit) => {
		setAttributes( {
			navigationBorderUnits: {
				...navigationBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const navigationDesktopBorderWidth = `${navigationDesktopBorder?.top}${navigationBorderUnits?.Desktop} ${navigationDesktopBorder?.right}${navigationBorderUnits?.Desktop} ${navigationDesktopBorder?.bottom}${navigationBorderUnits?.Desktop} ${navigationDesktopBorder?.left}${navigationBorderUnits?.Desktop}`;
	const navigationTabletBorderWidth = `${navigationTabletBorder?.top}${navigationBorderUnits?.Tablet} ${navigationTabletBorder?.right}${navigationBorderUnits?.Tablet} ${navigationTabletBorder?.bottom}${navigationBorderUnits?.Tablet} ${navigationTabletBorder?.left}${navigationBorderUnits?.Tablet}`;
	const navigationMobileBorderWidth = `${navigationMobileBorder?.top}${navigationBorderUnits?.Mobile} ${navigationMobileBorder?.right}${navigationBorderUnits?.Mobile} ${navigationMobileBorder?.bottom}${navigationBorderUnits?.Mobile} ${navigationMobileBorder?.left}${navigationBorderUnits?.Mobile}`;
	/** End Navigation Border */


	/** Start Navigation border radius*/
	const handleNavigationBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( navigationBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( { 
						navigationDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						navigationTabletBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						navigationMobileBorderRadius: {
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
					setAttributes( {navigationDesktopBorderRadius: {...navigationDesktopBorderRadius, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {navigationTabletBorderRadius: {...navigationTabletBorderRadius, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {navigationMobileBorderRadius: {...navigationMobileBorderRadius, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleNavigationBorderRadiusCombineBtn = () => {
		setAttributes( {navigationBorderRadiusLink: !navigationBorderRadiusLink} );
	}

	const handleNavigationBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			navigationBorderRadiusUnits: {
				...navigationBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Navigation border */ 

	/** End Navigation Border Radius */
	const navigationDesktopBorderRadiusWidth = `${navigationDesktopBorderRadius?.top}${navigationBorderRadiusUnits?.Desktop} ${navigationDesktopBorderRadius?.right}${navigationBorderRadiusUnits?.Desktop} ${navigationDesktopBorderRadius?.bottom}${navigationBorderRadiusUnits?.Desktop} ${navigationDesktopBorderRadius?.left}${navigationBorderRadiusUnits?.Desktop}`;
	const navigationTabletBorderRadiusWidth = `${navigationTabletBorderRadius?.top}${navigationBorderRadiusUnits?.Tablet} ${navigationTabletBorderRadius?.right}${navigationBorderRadiusUnits?.Tablet} ${navigationTabletBorderRadius?.bottom}${navigationBorderRadiusUnits?.Tablet} ${navigationTabletBorderRadius?.left}${navigationBorderRadiusUnits?.Tablet}`;
	const navigationMobileBorderRadiusWidth = `${navigationMobileBorderRadius?.top}${navigationBorderRadiusUnits?.Mobile} ${navigationMobileBorderRadius?.right}${navigationBorderRadiusUnits?.Mobile} ${navigationMobileBorderRadius?.bottom}${navigationBorderRadiusUnits?.Mobile} ${navigationMobileBorderRadius?.left}${navigationBorderRadiusUnits?.Mobile}`;
	/** End Navigation Border Radius */  

    /** Start Dropdown Menu padding */
	const handleDropDownPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( dropDownPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						dropDownDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						dropDownTabletPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						dropDownMobilePadding: {
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
					setAttributes( {dropDownDesktopPadding: {...dropDownDesktopPadding, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {dropDownTabletPadding: {...dropDownTabletPadding, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {dropDownMobilePadding: {...dropDownMobilePadding, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleDropDownPaddingCombineBtn = () => {
		setAttributes( {dropDownPaddingLink: !dropDownPaddingLink} );
	}

	const handleDropDownPaddingUnitsHandler = (unit) => {
		setAttributes( {
			dropDownPaddingUnits: {
				...dropDownPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const dropDownDesktopPaddingWidth    = `${dropDownDesktopPadding?.top}${dropDownPaddingUnits?.Desktop} ${dropDownDesktopPadding?.right}${dropDownPaddingUnits?.Desktop} ${dropDownDesktopPadding?.bottom}${dropDownPaddingUnits?.Desktop} ${dropDownDesktopPadding?.left}${dropDownPaddingUnits?.Desktop}`;
	const dropDownTabletPaddingWidth     = `${dropDownTabletPadding?.top}${dropDownPaddingUnits?.Tablet} ${dropDownTabletPadding?.right}${dropDownPaddingUnits?.Tablet} ${dropDownTabletPadding?.bottom}${dropDownPaddingUnits?.Tablet} ${dropDownTabletPadding?.left}${dropDownPaddingUnits?.Tablet}`;
	const dropDownMobilePaddingWidth     = `${dropDownMobilePadding?.top}${dropDownPaddingUnits?.Mobile} ${dropDownMobilePadding?.right}${dropDownPaddingUnits?.Mobile} ${dropDownMobilePadding?.bottom}${dropDownPaddingUnits?.Mobile} ${dropDownMobilePadding?.left}${dropDownPaddingUnits?.Mobile}`;
	/** End Dropdown Menu Padding */
	
	/** Start Dropdown Menu Margin */
	const handleDropDownMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( dropDownMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						dropDownDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						dropDownTabletMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						dropDownMobileMargin: {
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
					setAttributes( {dropDownDesktopMargin: {...dropDownDesktopMargin, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {dropDownTabletMargin: {...dropDownTabletMargin, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {dropDownMobileMargin: {...dropDownMobileMargin, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleDropDownMarginCombineBtn = () => {
		setAttributes( {dropDownMarginLink: !dropDownMarginLink} );
	}

	const handleDropDownMarginUnitsHandler = (unit) => {
		setAttributes( {
			dropDownMarginUnits: {
				...dropDownMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const dropDownDesktopMarginWidth = `${dropDownDesktopMargin?.top}${dropDownMarginUnits?.Desktop} ${dropDownDesktopMargin?.right}${dropDownMarginUnits?.Desktop} ${dropDownDesktopMargin?.bottom}${dropDownMarginUnits?.Desktop} ${dropDownDesktopMargin?.left}${dropDownMarginUnits?.Desktop}`;
	const dropDownTabletMarginWidth = `${dropDownTabletMargin?.top}${dropDownMarginUnits?.Tablet} ${dropDownTabletMargin?.right}${dropDownMarginUnits?.Tablet} ${dropDownTabletMargin?.bottom}${dropDownMarginUnits?.Tablet} ${dropDownTabletMargin?.left}${dropDownMarginUnits?.Tablet}`;
	const dropDownMobileMarginWidth = `${dropDownMobileMargin?.top}${dropDownMarginUnits?.Mobile} ${dropDownMobileMargin?.right}${dropDownMarginUnits?.Mobile} ${dropDownMobileMargin?.bottom}${dropDownMarginUnits?.Mobile} ${dropDownMobileMargin?.left}${dropDownMarginUnits?.Mobile}`;
	/** End Dropdown Menu Margin */

	/** Start Dropdown Menu border */
	const handleDropDownBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( dropDownBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {

						dropDownDesktopBorder: { 
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						dropDownTabletBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						dropDownMobileBorder: {
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
					setAttributes( {dropDownDesktopBorder: {...dropDownDesktopBorder, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {dropDownTabletBorder: {...dropDownTabletBorder, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {dropDownMobileBorder: {...dropDownMobileBorder, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleDropDownBorderCombineBtn = () => {
		setAttributes( {dropDownBorderLink: !dropDownBorderLink} );
	}

	const handleDropDownBorderUnitsHandler = (unit) => {
		setAttributes( {
			dropDownBorderUnits: {
				...dropDownBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const dropDownDesktopBorderWidth = `${dropDownDesktopBorder?.top}${dropDownBorderUnits?.Desktop} ${dropDownDesktopBorder?.right}${dropDownBorderUnits?.Desktop} ${dropDownDesktopBorder?.bottom}${dropDownBorderUnits?.Desktop} ${dropDownDesktopBorder?.left}${dropDownBorderUnits?.Desktop}`;
	const dropDownTabletBorderWidth = `${dropDownTabletBorder?.top}${dropDownBorderUnits?.Tablet} ${dropDownTabletBorder?.right}${dropDownBorderUnits?.Tablet} ${dropDownTabletBorder?.bottom}${dropDownBorderUnits?.Tablet} ${dropDownTabletBorder?.left}${dropDownBorderUnits?.Tablet}`;
	const dropDownMobileBorderWidth = `${dropDownMobileBorder?.top}${dropDownBorderUnits?.Mobile} ${dropDownMobileBorder?.right}${dropDownBorderUnits?.Mobile} ${dropDownMobileBorder?.bottom}${dropDownBorderUnits?.Mobile} ${dropDownMobileBorder?.left}${dropDownBorderUnits?.Mobile}`;
	/** End Dropdown Menu Border */


	/** Start Dropdown Menu border radius*/
	const handleDropDownBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( dropDownBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( { 
						dropDownDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						dropDownTabletBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						dropDownMobileBorderRadius: {
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
					setAttributes( {dropDownDesktopBorderRadius: {...dropDownDesktopBorderRadius, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {dropDownTabletBorderRadius: {...dropDownTabletBorderRadius, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {dropDownMobileBorderRadius: {...dropDownMobileBorderRadius, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleDropDownBorderRadiusCombineBtn = () => {
		setAttributes( {dropDownBorderRadiusLink: !dropDownBorderRadiusLink} );
	}

	const handleDropDownBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			dropDownBorderRadiusUnits: {
				...dropDownBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Navigation border */ 

	/** End Navigation Border Radius */
	const dropDownDesktopBorderRadiusWidth = `${dropDownDesktopBorderRadius?.top}${dropDownBorderRadiusUnits?.Desktop} ${dropDownDesktopBorderRadius?.right}${dropDownBorderRadiusUnits?.Desktop} ${dropDownDesktopBorderRadius?.bottom}${dropDownBorderRadiusUnits?.Desktop} ${dropDownDesktopBorderRadius?.left}${dropDownBorderRadiusUnits?.Desktop}`;
	const dropDownTabletBorderRadiusWidth = `${dropDownTabletBorderRadius?.top}${dropDownBorderRadiusUnits?.Tablet} ${dropDownTabletBorderRadius?.right}${dropDownBorderRadiusUnits?.Tablet} ${dropDownTabletBorderRadius?.bottom}${dropDownBorderRadiusUnits?.Tablet} ${dropDownTabletBorderRadius?.left}${dropDownBorderRadiusUnits?.Tablet}`;
	const dropDownMobileBorderRadiusWidth = `${dropDownMobileBorderRadius?.top}${dropDownBorderRadiusUnits?.Mobile} ${dropDownMobileBorderRadius?.right}${dropDownBorderRadiusUnits?.Mobile} ${dropDownMobileBorderRadius?.bottom}${dropDownBorderRadiusUnits?.Mobile} ${dropDownMobileBorderRadius?.left}${dropDownBorderRadiusUnits?.Mobile}`;
	/** End Dropdown Menu Border Radius */  


    /** Start Dropdown Menu Item Padding */
	const handleDropDownItemPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( dropDownItemPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						dropDownItemDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						dropDownItemTabletPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						dropDownItemMobilePadding: {
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
					setAttributes( {dropDownItemDesktopPadding: {...dropDownItemDesktopPadding, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {dropDownItemTabletPadding: {...dropDownItemTabletPadding, [position]: value}} );
					break;
                    case 'Mobile':
                        setAttributes( {dropDownItemMobilePadding: {...dropDownItemMobilePadding, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleDropDownItemPaddingCombineBtn = () => {
		setAttributes( {dropDownItemPaddingLink: !dropDownItemPaddingLink} );
	}

	const handleDropDownItemPaddingUnitsHandler = (unit) => {
		setAttributes( {
			dropDownItemPaddingUnits: {
				...dropDownItemPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const dropDownItemDesktopPaddingWidth    = `${dropDownItemDesktopPadding?.top}${dropDownItemPaddingUnits?.Desktop} ${dropDownItemDesktopPadding?.right}${dropDownItemPaddingUnits?.Desktop} ${dropDownItemDesktopPadding?.bottom}${dropDownItemPaddingUnits?.Desktop} ${dropDownItemDesktopPadding?.left}${dropDownItemPaddingUnits?.Desktop}`;
	const dropDownItemTabletPaddingWidth     = `${dropDownItemTabletPadding?.top}${dropDownItemPaddingUnits?.Tablet} ${dropDownItemTabletPadding?.right}${dropDownItemPaddingUnits?.Tablet} ${dropDownItemTabletPadding?.bottom}${dropDownItemPaddingUnits?.Tablet} ${dropDownItemTabletPadding?.left}${dropDownItemPaddingUnits?.Tablet}`;
	const dropDownItemMobilePaddingWidth     = `${dropDownItemMobilePadding?.top}${dropDownItemPaddingUnits?.Mobile} ${dropDownItemMobilePadding?.right}${dropDownItemPaddingUnits?.Mobile} ${dropDownItemMobilePadding?.bottom}${dropDownItemPaddingUnits?.Mobile} ${dropDownItemMobilePadding?.left}${dropDownItemPaddingUnits?.Mobile}`;
	/** End Dropdown Menu Item Padding */

    /** Start Dropdown Menu Item Margin */
	const handleDropDownItemMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( dropDownItemMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						dropDownItemDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						dropDownItemTabletMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						dropDownItemMobileMargin: {
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
					setAttributes( {dropDownItemDesktopMargin: {...dropDownItemDesktopMargin, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {dropDownItemTabletMargin: {...dropDownItemTabletMargin, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {dropDownItemMobileMargin: {...dropDownItemMobileMargin, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleDropDownItemMarginCombineBtn = () => {
		setAttributes( {dropDownItemMarginLink: !dropDownItemMarginLink} );
	}

	const handleDropDownItemMarginUnitsHandler = (unit) => {
		setAttributes( {
			dropDownItemMarginUnits: {
				...dropDownItemMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const dropDownItemDesktopMarginWidth = `${dropDownItemDesktopMargin?.top}${dropDownItemMarginUnits?.Desktop} ${dropDownItemDesktopMargin?.right}${dropDownItemMarginUnits?.Desktop} ${dropDownItemDesktopMargin?.bottom}${dropDownItemMarginUnits?.Desktop} ${dropDownItemDesktopMargin?.left}${dropDownItemMarginUnits?.Desktop}`;
	const dropDownItemTabletMarginWidth = `${dropDownItemTabletMargin?.top}${dropDownItemMarginUnits?.Tablet} ${dropDownItemTabletMargin?.right}${dropDownItemMarginUnits?.Tablet} ${dropDownItemTabletMargin?.bottom}${dropDownItemMarginUnits?.Tablet} ${dropDownItemTabletMargin?.left}${dropDownItemMarginUnits?.Tablet}`;
	const dropDownItemMobileMarginWidth = `${dropDownItemMobileMargin?.top}${dropDownItemMarginUnits?.Mobile} ${dropDownItemMobileMargin?.right}${dropDownItemMarginUnits?.Mobile} ${dropDownItemMobileMargin?.bottom}${dropDownItemMarginUnits?.Mobile} ${dropDownItemMobileMargin?.left}${dropDownItemMarginUnits?.Mobile}`;
	/** End Dropdown Menu Item Margin */

	/** Start Dropdown Menu Item Border */
	const handleDropDownItemBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( dropDownItemBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {

						dropDownItemDesktopBorder: { 
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						dropDownItemTabletBorder: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						dropDownItemMobileBorder: {
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
					setAttributes( {dropDownItemDesktopBorder: {...dropDownItemDesktopBorder, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {dropDownItemTabletBorder: {...dropDownItemTabletBorder, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {dropDownItemMobileBorder: {...dropDownItemMobileBorder, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleDropDownItemBorderCombineBtn = () => {
		setAttributes( {dropDownItemBorderLink: !dropDownItemBorderLink} );
	}

	const handleDropDownItemBorderUnitsHandler = (unit) => {
		setAttributes( {
			dropDownItemBorderUnits: {
				...dropDownItemBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const dropDownItemDesktopBorderWidth = `${dropDownItemDesktopBorder?.top}${dropDownItemBorderUnits?.Desktop} ${dropDownItemDesktopBorder?.right}${dropDownItemBorderUnits?.Desktop} ${dropDownItemDesktopBorder?.bottom}${dropDownItemBorderUnits?.Desktop} ${dropDownItemDesktopBorder?.left}${dropDownItemBorderUnits?.Desktop}`;
	const dropDownItemTabletBorderWidth = `${dropDownItemTabletBorder?.top}${dropDownItemBorderUnits?.Tablet} ${dropDownItemTabletBorder?.right}${dropDownItemBorderUnits?.Tablet} ${dropDownItemTabletBorder?.bottom}${dropDownItemBorderUnits?.Tablet} ${dropDownItemTabletBorder?.left}${dropDownItemBorderUnits?.Tablet}`;
	const dropDownItemMobileBorderWidth = `${dropDownItemMobileBorder?.top}${dropDownItemBorderUnits?.Mobile} ${dropDownItemMobileBorder?.right}${dropDownItemBorderUnits?.Mobile} ${dropDownItemMobileBorder?.bottom}${dropDownItemBorderUnits?.Mobile} ${dropDownItemMobileBorder?.left}${dropDownItemBorderUnits?.Mobile}`;
	/** End Dropdown Menu Item Border */


	/** Start Dropdown Menu Item Border Radius*/
	const handleDropDownItemBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( dropDownItemBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( { 
						dropDownItemDesktopBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						dropDownItemTabletBorderRadius: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						dropDownItemMobileBorderRadius: {
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
					setAttributes( {dropDownItemDesktopBorderRadius: {...dropDownItemDesktopBorderRadius, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {dropDownItemTabletBorderRadius: {...dropDownItemTabletBorderRadius, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {dropDownItemMobileBorderRadius: {...dropDownItemMobileBorderRadius, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleDropDownItemBorderRadiusCombineBtn = () => {
		setAttributes( {dropDownItemBorderRadiusLink: !dropDownItemBorderRadiusLink} );
	}

	const handleDropDownItemBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			dropDownItemBorderRadiusUnits: {
				...dropDownItemBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Navigation border */ 

	/** End Navigation Border Radius */
	const dropDownItemDesktopBorderRadiusWidth = `${dropDownItemDesktopBorderRadius?.top}${dropDownItemBorderRadiusUnits?.Desktop} ${dropDownItemDesktopBorderRadius?.right}${dropDownItemBorderRadiusUnits?.Desktop} ${dropDownItemDesktopBorderRadius?.bottom}${dropDownItemBorderRadiusUnits?.Desktop} ${dropDownItemDesktopBorderRadius?.left}${dropDownItemBorderRadiusUnits?.Desktop}`;
	const dropDownItemTabletBorderRadiusWidth = `${dropDownItemTabletBorderRadius?.top}${dropDownItemBorderRadiusUnits?.Tablet} ${dropDownItemTabletBorderRadius?.right}${dropDownItemBorderRadiusUnits?.Tablet} ${dropDownItemTabletBorderRadius?.bottom}${dropDownItemBorderRadiusUnits?.Tablet} ${dropDownItemTabletBorderRadius?.left}${dropDownItemBorderRadiusUnits?.Tablet}`;
	const dropDownItemMobileBorderRadiusWidth = `${dropDownItemMobileBorderRadius?.top}${dropDownItemBorderRadiusUnits?.Mobile} ${dropDownItemMobileBorderRadius?.right}${dropDownItemBorderRadiusUnits?.Mobile} ${dropDownItemMobileBorderRadius?.bottom}${dropDownItemBorderRadiusUnits?.Mobile} ${dropDownItemMobileBorderRadius?.left}${dropDownItemBorderRadiusUnits?.Mobile}`;
	/** End Dropdown Menu Border Radius */

    /** Start Dropdown Menu Icon */
	const handleDropDownIconMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( dropDownIconMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						dropDownIconDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						dropDownIconTabletMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						dropDownIconMobileMargin: {
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
					setAttributes( {dropDownIconDesktopMargin: {...dropDownIconDesktopMargin, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {dropDownIconTabletMargin: {...dropDownIconTabletMargin, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {dropDownIconMobileMargin: {...dropDownIconMobileMargin, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleDropDownIconMarginCombineBtn = () => {
		setAttributes( {dropDownIconMarginLink: !dropDownIconMarginLink} );
	}

	const handleDropDownIconMarginUnitsHandler = (unit) => {
		setAttributes( {
			dropDownIconMarginUnits: {
				...dropDownIconMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const dropDownIconDesktopMarginWidth = `${dropDownIconDesktopMargin?.top}${dropDownIconMarginUnits?.Desktop} ${dropDownIconDesktopMargin?.right}${dropDownIconMarginUnits?.Desktop} ${dropDownIconDesktopMargin?.bottom}${dropDownIconMarginUnits?.Desktop} ${dropDownIconDesktopMargin?.left}${dropDownIconMarginUnits?.Desktop}`;
	const dropDownIconTabletMarginWidth = `${dropDownIconTabletMargin?.top}${dropDownIconMarginUnits?.Tablet} ${dropDownIconTabletMargin?.right}${dropDownIconMarginUnits?.Tablet} ${dropDownIconTabletMargin?.bottom}${dropDownIconMarginUnits?.Tablet} ${dropDownIconTabletMargin?.left}${dropDownIconMarginUnits?.Tablet}`;
	const dropDownIconMobileMarginWidth = `${dropDownIconMobileMargin?.top}${dropDownIconMarginUnits?.Mobile} ${dropDownIconMobileMargin?.right}${dropDownIconMarginUnits?.Mobile} ${dropDownIconMobileMargin?.bottom}${dropDownIconMarginUnits?.Mobile} ${dropDownIconMobileMargin?.left}${dropDownIconMarginUnits?.Mobile}`;
	/** End Dropdown Menu Icon */

        /** Start Hamburger Menu Icon Padding */
	const handleHamburgerMenuIconPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( hamburgerMenuIconPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						hamburgerMenuIconDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						hamburgerMenuIconTabletPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						hamburgerMenuIconMobilePadding: {
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
					setAttributes( {hamburgerMenuIconDesktopPadding: {...hamburgerMenuIconDesktopPadding, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {hamburgerMenuIconTabletPadding: {...hamburgerMenuIconTabletPadding, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {hamburgerMenuIconMobilePadding: {...hamburgerMenuIconMobilePadding, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleHamburgerMenuIconPaddingCombineBtn = () => {
		setAttributes( {hamburgerMenuIconPaddingLink: !hamburgerMenuIconPaddingLink} );
	}

	const handleHamburgerMenuIconPaddingUnitsHandler = (unit) => {
		setAttributes( {
			hamburgerMenuIconPaddingUnits: {
				...hamburgerMenuIconPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const hamburgerMenuIconDesktopPaddingWidth    = `${hamburgerMenuIconDesktopPadding?.top}${hamburgerMenuIconPaddingUnits?.Desktop} ${hamburgerMenuIconDesktopPadding?.right}${hamburgerMenuIconPaddingUnits?.Desktop} ${hamburgerMenuIconDesktopPadding?.bottom}${hamburgerMenuIconPaddingUnits?.Desktop} ${hamburgerMenuIconDesktopPadding?.left}${hamburgerMenuIconPaddingUnits?.Desktop}`;
	const hamburgerMenuIconTabletPaddingWidth     = `${hamburgerMenuIconTabletPadding?.top}${hamburgerMenuIconPaddingUnits?.Tablet} ${hamburgerMenuIconTabletPadding?.right}${hamburgerMenuIconPaddingUnits?.Tablet} ${hamburgerMenuIconTabletPadding?.bottom}${hamburgerMenuIconPaddingUnits?.Tablet} ${hamburgerMenuIconTabletPadding?.left}${hamburgerMenuIconPaddingUnits?.Tablet}`;
	const hamburgerMenuIconMobilePaddingWidth     = `${hamburgerMenuIconMobilePadding?.top}${hamburgerMenuIconPaddingUnits?.Mobile} ${hamburgerMenuIconMobilePadding?.right}${hamburgerMenuIconPaddingUnits?.Mobile} ${hamburgerMenuIconMobilePadding?.bottom}${hamburgerMenuIconPaddingUnits?.Mobile} ${hamburgerMenuIconMobilePadding?.left}${hamburgerMenuIconPaddingUnits?.Mobile}`;
	/** End Hamburger Menu Icon Padding */





    /** Start Hamburger Menu Popup Padding */
	const handleHamburgerMenuPopupPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( hamburgerMenuPopupPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						hamburgerMenuPopupDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						hamburgerMenuPopupTabletPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						hamburgerMenuPopupMobilePadding: {
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
					setAttributes( {hamburgerMenuPopupDesktopPadding: {...hamburgerMenuPopupDesktopPadding, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {hamburgerMenuPopupTabletPadding: {...hamburgerMenuPopupTabletPadding, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {hamburgerMenuPopupMobilePadding: {...hamburgerMenuPopupMobilePadding, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleHamburgerMenuPopupPaddingCombineBtn = () => {
		setAttributes( {hamburgerMenuPopupPaddingLink: !hamburgerMenuPopupPaddingLink} );
	}

	const handleHamburgerMenuPopupPaddingUnitsHandler = (unit) => {
		setAttributes( {
			hamburgerMenuPopupPaddingUnits: {
				...hamburgerMenuPopupPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const hamburgerMenuPopupDesktopPaddingWidth    = `${hamburgerMenuPopupDesktopPadding?.top}${hamburgerMenuPopupPaddingUnits?.Desktop} ${hamburgerMenuPopupDesktopPadding?.right}${hamburgerMenuPopupPaddingUnits?.Desktop} ${hamburgerMenuPopupDesktopPadding?.bottom}${hamburgerMenuPopupPaddingUnits?.Desktop} ${hamburgerMenuPopupDesktopPadding?.left}${hamburgerMenuPopupPaddingUnits?.Desktop}`;
	const hamburgerMenuPopupTabletPaddingWidth     = `${hamburgerMenuPopupTabletPadding?.top}${hamburgerMenuPopupPaddingUnits?.Tablet} ${hamburgerMenuPopupTabletPadding?.right}${hamburgerMenuPopupPaddingUnits?.Tablet} ${hamburgerMenuPopupTabletPadding?.bottom}${hamburgerMenuPopupPaddingUnits?.Tablet} ${hamburgerMenuPopupTabletPadding?.left}${hamburgerMenuPopupPaddingUnits?.Tablet}`;
	const hamburgerMenuPopupMobilePaddingWidth     = `${hamburgerMenuPopupMobilePadding?.top}${hamburgerMenuPopupPaddingUnits?.Mobile} ${hamburgerMenuPopupMobilePadding?.right}${hamburgerMenuPopupPaddingUnits?.Mobile} ${hamburgerMenuPopupMobilePadding?.bottom}${hamburgerMenuPopupPaddingUnits?.Mobile} ${hamburgerMenuPopupMobilePadding?.left}${hamburgerMenuPopupPaddingUnits?.Mobile}`;
	/** End Hamburger Menu Popup Padding */

    /** Start Global padding */
	const handleGlobalPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( navigationGlobalPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						navigationGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						navigationGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						navigationGlobalPaddingMobile: {
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
					setAttributes( {navigationGlobalPaddingDesktop: {...navigationGlobalPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {navigationGlobalPaddingTablet: {...navigationGlobalPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {navigationGlobalPaddingMobile: {...navigationGlobalPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes( {navigationGlobalPaddingLink: !navigationGlobalPaddingLink} );
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes( {
			navigationGlobalPaddingUnits: {
				...navigationGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const navigationGlobalDesktopPaddingWidth    = `${navigationGlobalPaddingDesktop?.top}${navigationGlobalPaddingUnits?.Desktop} ${navigationGlobalPaddingDesktop?.right}${navigationGlobalPaddingUnits?.Desktop} ${navigationGlobalPaddingDesktop?.bottom}${navigationGlobalPaddingUnits?.Desktop} ${navigationGlobalPaddingDesktop?.left}${navigationGlobalPaddingUnits?.Desktop}`;
	const navigationGlobalTabletPaddingWidth     = `${navigationGlobalPaddingTablet?.top}${navigationGlobalPaddingUnits?.Tablet} ${navigationGlobalPaddingTablet?.right}${navigationGlobalPaddingUnits?.Tablet} ${navigationGlobalPaddingTablet?.bottom}${navigationGlobalPaddingUnits?.Tablet} ${navigationGlobalPaddingTablet?.left}${navigationGlobalPaddingUnits?.Tablet}`;
	const navigationGlobalMobilePaddingWidth     = `${navigationGlobalPaddingMobile?.top}${navigationGlobalPaddingUnits?.Mobile} ${navigationGlobalPaddingMobile?.right}${navigationGlobalPaddingUnits?.Mobile} ${navigationGlobalPaddingMobile?.bottom}${navigationGlobalPaddingUnits?.Mobile} ${navigationGlobalPaddingMobile?.left}${navigationGlobalPaddingUnits?.Mobile}`;
	/** End Global Padding */
	
	/** Start Global Margin */
	const handleGlobalMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( navigationGlobalMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						navigationGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						navigationGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						navigationGlobalMarginMobile: {
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
					setAttributes( {navigationGlobalMarginDesktop: {...navigationGlobalMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {navigationGlobalMarginTablet: {...navigationGlobalMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {navigationGlobalMarginMobile: {...navigationGlobalMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes( {navigationGlobalMarginLink: !navigationGlobalMarginLink} );
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes( {
			navigationGlobalMarginUnits: {
				...navigationGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const navigationGlobalDesktopMarginWidth = `${navigationGlobalMarginDesktop?.top}${navigationGlobalMarginUnits?.Desktop} ${navigationGlobalMarginDesktop?.right}${navigationGlobalMarginUnits?.Desktop} ${navigationGlobalMarginDesktop?.bottom}${navigationGlobalMarginUnits?.Desktop} ${navigationGlobalMarginDesktop?.left}${navigationGlobalMarginUnits?.Desktop}`;
	const navigationGlobalTabletMarginWidth = `${navigationGlobalMarginTablet?.top}${navigationGlobalMarginUnits?.Tablet} ${navigationGlobalMarginTablet?.right}${navigationGlobalMarginUnits?.Tablet} ${navigationGlobalMarginTablet?.bottom}${navigationGlobalMarginUnits?.Tablet} ${navigationGlobalMarginTablet?.left}${navigationGlobalMarginUnits?.Tablet}`;
	const navigationGlobalMobileMarginWidth = `${navigationGlobalMarginMobile?.top}${navigationGlobalMarginUnits?.Mobile} ${navigationGlobalMarginMobile?.right}${navigationGlobalMarginUnits?.Mobile} ${navigationGlobalMarginMobile?.bottom}${navigationGlobalMarginUnits?.Mobile} ${navigationGlobalMarginMobile?.left}${navigationGlobalMarginUnits?.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( navigationGlobalBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {

						navigationGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						navigationGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						navigationGlobalBorderMobile: {
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
					setAttributes( {navigationGlobalBorderDesktop: {...navigationGlobalBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {navigationGlobalBorderTablet: {...navigationGlobalBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {navigationGlobalBorderMobile: {...navigationGlobalBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes( {navigationGlobalBorderLink: !navigationGlobalBorderLink} );
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes( {
			navigationGlobalBorderUnits: {
				...navigationGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const navigationGlobalDesktopBorderWidth = `${navigationGlobalBorderDesktop?.top}${navigationGlobalBorderUnits?.Desktop} ${navigationGlobalBorderDesktop?.right}${navigationGlobalBorderUnits?.Desktop} ${navigationGlobalBorderDesktop?.bottom}${navigationGlobalBorderUnits?.Desktop} ${navigationGlobalBorderDesktop?.left}${navigationGlobalBorderUnits?.Desktop}`;
	const navigationGlobalTabletBorderWidth = `${navigationGlobalBorderTablet?.top}${navigationGlobalBorderUnits?.Tablet} ${navigationGlobalBorderTablet?.right}${navigationGlobalBorderUnits?.Tablet} ${navigationGlobalBorderTablet?.bottom}${navigationGlobalBorderUnits?.Tablet} ${navigationGlobalBorderTablet?.left}${navigationGlobalBorderUnits?.Tablet}`;
	const navigationGlobalMobileBorderWidth = `${navigationGlobalBorderMobile?.top}${navigationGlobalBorderUnits?.Mobile} ${navigationGlobalBorderMobile?.right}${navigationGlobalBorderUnits?.Mobile} ${navigationGlobalBorderMobile?.bottom}${navigationGlobalBorderUnits?.Mobile} ${navigationGlobalBorderMobile?.left}${navigationGlobalBorderUnits?.Mobile}`;
	/** End Border */


	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( navigationGlobalBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( { 
						navigationGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						navigationGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						navigationGlobalBorderRadiusMobile: {
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
					setAttributes( {navigationGlobalBorderRadiusDesktop: {...navigationGlobalBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {navigationGlobalBorderRadiusTablet: {...navigationGlobalBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {navigationGlobalBorderRadiusMobile: {...navigationGlobalBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes( {navigationGlobalBorderRadiusLink: !navigationGlobalBorderRadiusLink} );
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			navigationGlobalBorderRadiusUnits: {
				...navigationGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */ 

	/** End Global Border Radius */
	const navigationGlobalDesktopBorderRadiusWidth = `${navigationGlobalBorderRadiusDesktop?.top}${navigationGlobalBorderRadiusUnits?.Desktop} ${navigationGlobalBorderRadiusDesktop?.right}${navigationGlobalBorderRadiusUnits?.Desktop} ${navigationGlobalBorderRadiusDesktop?.bottom}${navigationGlobalBorderRadiusUnits?.Desktop} ${navigationGlobalBorderRadiusDesktop?.left}${navigationGlobalBorderRadiusUnits?.Desktop}`;
	const navigationGlobalTabletBorderRadiusWidth = `${navigationGlobalBorderRadiusTablet?.top}${navigationGlobalBorderRadiusUnits?.Tablet} ${navigationGlobalBorderRadiusTablet?.right}${navigationGlobalBorderRadiusUnits?.Tablet} ${navigationGlobalBorderRadiusTablet?.bottom}${navigationGlobalBorderRadiusUnits?.Tablet} ${navigationGlobalBorderRadiusTablet?.left}${navigationGlobalBorderRadiusUnits?.Tablet}`;
	const navigationGlobalMobileBorderRadiusWidth = `${navigationGlobalBorderRadiusMobile?.top}${navigationGlobalBorderRadiusUnits?.Mobile} ${navigationGlobalBorderRadiusMobile?.right}${navigationGlobalBorderRadiusUnits?.Mobile} ${navigationGlobalBorderRadiusMobile?.bottom}${navigationGlobalBorderRadiusUnits?.Mobile} ${navigationGlobalBorderRadiusMobile?.left}${navigationGlobalBorderRadiusUnits?.Mobile}`;
	/** End Border Radius */  


    const allBlockStyle = useMemo(() => `

        .${blockId}.fb-advanced-navigation-main-wrapper {
            ${navigationPositionType === 'default' ? `position: relative;` : ''}  
            ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' ? `width: 100%;` : ''}
            ${navigationPositionType !== 'default' ? `position: ${navigationPositionType};` : ''}
            ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationHZOrientationType === 'left' && navigationHZLeftOffset?.Desktop !== undefined ? `left: ${navigationHZLeftOffset?.Desktop}${navigationHZLeftOffsetUnits?.Desktop};` : ''}
            ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'top' && navigationVRTopOffset?.Desktop !== undefined ? `top: ${navigationVRTopOffset?.Desktop}${navigationVRTopOffsetUnits?.Desktop};` : ''}
            ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'bottom' && navigationVRBottomOffset?.Desktop !== undefined ? `bottom: ${navigationVRBottomOffset?.Desktop}${navigationVRBottomOffsetUnits?.Desktop};` : ''}
            ${navigationGlobalZIndex.Desktop ? `z-index: ${navigationGlobalZIndex.Desktop};` : ''}
            ${navigationOverflow !== 'default' ? `overflow: ${navigationOverflow};` : ''}
        }
        .${blockId} .advanced-navigation-wrapper {
            ${navigationGlobalDesktopPaddingWidth && navigationGlobalPaddingDesktop?.top? `padding: ${navigationGlobalDesktopPaddingWidth};` : ''}
            ${navigationGlobalDesktopMarginWidth && navigationGlobalMarginDesktop?.top? `margin: ${navigationGlobalDesktopMarginWidth};` : ''} 
            ${navigationGlobalBorder ? `border: ${navigationGlobalBorder};` : ''} 
            ${navigationGlobalDesktopBorderWidth && navigationGlobalBorderDesktop?.top? `border-width: ${navigationGlobalDesktopBorderWidth};` : ''}
            ${navigationGlobalDesktopBorderRadiusWidth && navigationGlobalBorderRadiusDesktop?.top? `border-radius: ${navigationGlobalDesktopBorderRadiusWidth};` : ''}
            ${navigationGlobalBorderColor ? `border-color: ${navigationGlobalBorderColor};` : ''}
            ${navigationGlobalBoxShadowCssValue ? `box-shadow: ${navigationGlobalBoxShadowCssValue};` : ''}
            ${navigationGlobalNormalBackgroundType === 'gradient' ? `  
                ${navigationGlobalNormalCustomGradientSwitcher && navigationGlobalNormalCustomGradientInputValue ? `background: ${navigationGlobalNormalCustomGradientInputValue};` : `background: ${navigationGlobalNormalGradientColor};`}
            `: `
                ${navigationGlobalNormalClassicColor ? `background: ${navigationGlobalNormalClassicColor};` : ''}
            `}
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockId} .advanced-navigation-wrapper:hover {
            ${navigationGlobalHoverBackgroundType === 'gradient' ? `  
                ${navigationGlobalHoverCustomGradientSwitcher && navigationGlobalHoverCustomGradientInputValue ? `background: ${navigationGlobalHoverCustomGradientInputValue};` : `background: ${navigationGlobalHoverGradientColor};`}
            `: `
                ${navigationGlobalHoverClassicColor ? `background: ${navigationGlobalHoverClassicColor};` : ''}
            `}
            ${navigationGlobalBorderHoverColor ? `border-color: ${navigationGlobalBorderHoverColor};` : ''}
            ${navigationGlobalBoxShadowHoverCssValue ? `box-shadow: ${navigationGlobalBoxShadowHoverCssValue};` : ''}
        }

        .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item {
            ${navigationDesktopPaddingWidth && navigationDesktopPadding?.top? `padding: ${navigationDesktopPaddingWidth};` : ''} 
            ${navigationDesktopMarginWidth && navigationDesktopMargin?.top? `margin: ${navigationDesktopMarginWidth};` : ''} 
            ${navigationBorder ? `border: ${navigationBorder};` : ''} 
            ${navigationBorderColor ? `border-color: ${navigationBorderColor};` : ''}
            ${navigationDesktopBorderWidth && navigationDesktopBorder?.top? `border-width: ${navigationDesktopBorderWidth};` : ''}
            ${navigationDesktopBorderRadiusWidth && navigationDesktopBorderRadius?.top? `border-radius: ${navigationDesktopBorderRadiusWidth};` : ''}
            ${navigationBoxShadowCssValue ? `box-shadow: ${navigationBoxShadowCssValue};` : ''}

            ${navigationNormalBackgroundType === 'gradient' ? `  
                ${navigationNormalCustomGradientSwitcher && navigationNormalCustomGradientInputValue ? `background: ${navigationNormalCustomGradientInputValue};` : `background: ${navigationNormalGradientColor};`}
            `: `
                ${navigationNormalClassicColor ? `background: ${navigationNormalClassicColor};` : ''}
            `}
        }

        .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item:hover {
            ${navigationBorderHoverColor ? `border-color: ${navigationBorderHoverColor};` : ''}
            ${navigationBoxShadowHoverCssValue ? `box-shadow: ${navigationBoxShadowHoverCssValue};` : ''}
            ${navigationHoverBackgroundType === 'gradient' ? `  
                ${navigationHoverCustomGradientSwitcher && navigationHoverCustomGradientInputValue ? `background: ${navigationHoverCustomGradientInputValue};` : `background: ${navigationHoverGradientColor};`}
            `: `
                ${navigationHoverClassicColor ? `background: ${navigationHoverClassicColor};` : ''}
            `}
        }

        .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation__container {
            ${navigationGap?.Desktop ? `gap: ${navigationGap?.Desktop}${navigationGapUnits?.Desktop};` : ''}	
        }
        .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item .wp-block-navigation-item__content {
            ${navigationGlobalTypoSwitcher?.fontFamily === true && navigationGlobalTypographyData?.fontFamily ? `font-family: ${navigationGlobalTypographyData?.fontFamily};` : ''}
            ${navigationGlobalTypoSwitcher?.fontSize === true && navigationGlobalTypographyData?.fontSize ? `font-size: ${navigationGlobalTypographyData?.fontSize};` : ''}
            ${navigationGlobalTypoSwitcher?.fontWeight === true && navigationGlobalTypographyData?.fontWeight ? `font-weight: ${navigationGlobalTypographyData?.fontWeight};` : ''}
            ${navigationGlobalTypoSwitcher?.fontStyle === true && navigationGlobalTypographyData?.fontStyle ? `font-style: ${navigationGlobalTypographyData?.fontStyle};` : ''}
            ${navigationGlobalTypoSwitcher?.textTransform === true && navigationGlobalTypographyData?.textTransform ? `text-transform: ${navigationGlobalTypographyData?.textTransform};` : ''}
            ${navigationGlobalTypoSwitcher?.textDecoration === true && navigationGlobalTypographyData?.textDecoration ? `text-decoration: ${navigationGlobalTypographyData?.textDecoration};` : ''}
            ${navigationGlobalTypoSwitcher?.letterSpacing === true && navigationGlobalTypographyData?.letterSpacing ? `letter-spacing: ${navigationGlobalTypographyData?.letterSpacing};` : ''}
            ${navigationGlobalTypoSwitcher?.lineHeight === true && navigationGlobalTypographyData?.lineHeight ? `line-height: ${navigationGlobalTypographyData?.lineHeight};` : ''}
                
            ${navigationGlobalTypoSwitcher?.fontFamily === false && navigationFontFamily && navigationFontFamily !== 'Default' ? `font-family: ${navigationFontFamily};` : ''}
            ${navigationGlobalTypoSwitcher?.fontSize === false && navigationFontSize?.Desktop && navigationFontSizeUnits?.Desktop ? `font-size: ${navigationFontSize?.Desktop}${navigationFontSizeUnits?.Desktop};` : ''}
            ${navigationGlobalTypoSwitcher?.fontWeight === false && navigationFontWeight ? `font-weight: ${navigationFontWeight};` : ''}
            ${navigationGlobalTypoSwitcher?.fontStyle === false && navigationFontStyle ? `font-style: ${navigationFontStyle};` : ''}
            ${navigationGlobalTypoSwitcher?.textTransform === false && navigationTextTransform ? `text-transform: ${navigationTextTransform};` : ''}
            ${navigationGlobalTypoSwitcher?.textDecoration === false && navigationTextDecoration ? `text-decoration: ${navigationTextDecoration};` : ''}
            ${navigationGlobalTypoSwitcher?.letterSpacing === false && navigationLetterSpacing?.Desktop && navigationLetterSpacingUnits?.Desktop ? `letter-spacing: ${navigationLetterSpacing?.Desktop}${navigationLetterSpacingUnits?.Desktop};` : ''}
            ${navigationGlobalTypoSwitcher?.lineHeight === false && navigationLineHeight?.Desktop && navigationLineHeightUnits?.Desktop ? `line-height: ${navigationLineHeight?.Desktop}${navigationLineHeightUnits?.Desktop};` : ''}
            
            ${navigationColor ? `color: ${navigationColor};` : ''}
            outline: none !important;
            box-shadow: none !important;
            transition: all .3s ease-in-out;
        }
        .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item .wp-block-navigation-item__content:hover {
            ${navigationHoverColor ? `color: ${navigationHoverColor};` : ''}
            text-decoration: none !important;
        }

        .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item.current-menu-item .wp-block-navigation-item__content {
            ${navigationActiveColor ? `color: ${navigationActiveColor};` : ''}
        }

        .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item.current-menu-item .wp-block-navigation-item__content:hover {
            ${navigationActiveHoverColor ? `color: ${navigationActiveHoverColor};` : ''}
        }

        .${blockId} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container {
            ${dropDownWrapperMinWidth?.Desktop ? `min-width: ${dropDownWrapperMinWidth?.Desktop}${dropDownWrapperMinWidthUnits?.Desktop} !important;` : ''}

            ${dropDownDesktopPaddingWidth && dropDownDesktopPadding?.top? `padding: ${dropDownDesktopPaddingWidth};` : ''}
            ${dropDownDesktopMarginWidth && dropDownDesktopMargin?.top? `margin: ${dropDownDesktopMarginWidth};` : ''} 
            ${dropDownBorder ? `border: ${dropDownBorder};` : ''} 
            ${dropDownBorderColor ? `border-color: ${dropDownBorderColor};` : ''}
            ${dropDownDesktopBorderWidth && dropDownDesktopBorder?.top? `border-width: ${dropDownDesktopBorderWidth};` : ''}
            ${dropDownDesktopBorderRadiusWidth && dropDownDesktopBorderRadius?.top? `border-radius: ${dropDownDesktopBorderRadiusWidth};` : ''}
            ${dropDownBoxShadowCssValue ? `box-shadow: ${dropDownBoxShadowCssValue};` : ''}

            ${dropDownNormalBackgroundType === 'gradient' ? `  
                ${dropDownNormalCustomGradientSwitcher && dropDownNormalCustomGradientInputValue ? `background: ${dropDownNormalCustomGradientInputValue};` : `background: ${dropDownNormalGradientColor};`}
            `: `
                ${dropDownNormalClassicColor ? `background: ${dropDownNormalClassicColor};` : ''}
            `}
        }

        .${blockId} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container:hover {
            ${dropDownBoxShadowHoverCssValue ? `box-shadow: ${dropDownBoxShadowHoverCssValue};` : ''}
            ${dropDownHoverBackgroundType === 'gradient' ? `  
                ${dropDownHoverCustomGradientSwitcher && dropDownHoverCustomGradientInputValue ? `background: ${dropDownHoverCustomGradientInputValue};` : `background: ${dropDownHoverGradientColor};`}
            `: `
                ${dropDownHoverClassicColor ? `background: ${dropDownHoverClassicColor};` : ''}
            `}
        }

        .${blockId} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
            ${dropDownItemTypoSwitcher?.fontFamily === true && dropDownItemTypographyData?.fontFamily ? `font-family: ${dropDownItemTypographyData?.fontFamily};` : ''}
            ${dropDownItemTypoSwitcher?.fontSize === true && dropDownItemTypographyData?.fontSize ? `font-size: ${dropDownItemTypographyData?.fontSize};` : ''}
            ${dropDownItemTypoSwitcher?.fontWeight === true && dropDownItemTypographyData?.fontWeight ? `font-weight: ${dropDownItemTypographyData?.fontWeight};` : ''}
            ${dropDownItemTypoSwitcher?.fontStyle === true && dropDownItemTypographyData?.fontStyle ? `font-style: ${dropDownItemTypographyData?.fontStyle};` : ''}
            ${dropDownItemTypoSwitcher?.textTransform === true && dropDownItemTypographyData?.textTransform ? `text-transform: ${dropDownItemTypographyData?.textTransform};` : ''}
            ${dropDownItemTypoSwitcher?.textDecoration === true && dropDownItemTypographyData?.textDecoration ? `text-decoration: ${dropDownItemTypographyData?.textDecoration};` : ''}
            ${dropDownItemTypoSwitcher?.letterSpacing === true && dropDownItemTypographyData?.letterSpacing ? `letter-spacing: ${dropDownItemTypographyData?.letterSpacing};` : ''}
            ${dropDownItemTypoSwitcher?.lineHeight === true && dropDownItemTypographyData?.lineHeight ? `line-height: ${dropDownItemTypographyData?.lineHeight};` : ''}
                
            ${dropDownItemTypoSwitcher?.fontFamily === false && dropDownItemFontFamily && dropDownItemFontFamily !== 'Default' ? `font-family: ${dropDownItemFontFamily};` : ''}
            ${dropDownItemTypoSwitcher?.fontSize === false && dropDownItemFontSize?.Desktop && dropDownItemFontSizeUnits?.Desktop ? `font-size: ${dropDownItemFontSize?.Desktop}${dropDownItemFontSizeUnits?.Desktop};` : ''}
            ${dropDownItemTypoSwitcher?.fontWeight === false && dropDownItemFontWeight ? `font-weight: ${dropDownItemFontWeight};` : ''}
            ${dropDownItemTypoSwitcher?.fontStyle === false && dropDownItemFontStyle ? `font-style: ${dropDownItemFontStyle};` : ''}
            ${dropDownItemTypoSwitcher?.textTransform === false && dropDownItemTextTransform ? `text-transform: ${dropDownItemTextTransform};` : ''}
            ${dropDownItemTypoSwitcher?.textDecoration === false && dropDownItemTextDecoration ? `text-decoration: ${dropDownItemTextDecoration};` : ''}
            ${dropDownItemTypoSwitcher?.letterSpacing === false && dropDownItemLetterSpacing.Desktop && dropDownItemLetterSpacingUnits.Desktop ? `letter-spacing: ${dropDownItemLetterSpacing.Desktop}${dropDownItemLetterSpacingUnits.Desktop};` : ''}
            ${dropDownItemTypoSwitcher?.lineHeight === false && dropDownItemLineHeight.Desktop && dropDownItemLineHeightUnits.Desktop ? `line-height: ${dropDownItemLineHeight.Desktop}${dropDownItemLineHeightUnits.Desktop};` : ''}
            
            ${dropDownItemColor ? `color: ${dropDownItemColor};` : ''}
            ${dropDownItemDesktopPaddingWidth && dropDownItemDesktopPadding?.top? `padding: ${dropDownItemDesktopPaddingWidth};` : ''}
            ${dropDownItemDesktopMarginWidth && dropDownItemDesktopMargin?.top? `margin: ${dropDownItemDesktopMarginWidth};` : ''} 
            ${dropDownItemBorder ? `border: ${dropDownItemBorder};` : ''} 
            ${dropDownItemBorderColor ? `border-color: ${dropDownItemBorderColor};` : ''}
            ${dropDownItemDesktopBorderWidth && dropDownItemDesktopBorder?.top? `border-width: ${dropDownItemDesktopBorderWidth};` : ''}
            ${dropDownItemDesktopBorderRadiusWidth && dropDownItemDesktopBorderRadius?.top? `border-radius: ${dropDownItemDesktopBorderRadiusWidth};` : ''}
            outline: none !important;
            box-shadow: none !important;
            transition: all .3s ease-in-out;
        }
        .${blockId} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container .wp-block-navigation-item__content:hover {
            ${dropDownItemHoverColor ? `color: ${dropDownItemHoverColor};` : ''}
        }

        .${blockId} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container .wp-block-navigation-item.current-menu-item .wp-block-navigation-item__content {
            ${dropDownItemActiveColor ? `color: ${dropDownItemActiveColor};` : ''}
        }

        .${blockId} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container .wp-block-navigation-item.current-menu-item .wp-block-navigation-item__content:hover {
            ${dropDownItemActiveHoverColor ? `color: ${dropDownItemActiveHoverColor};` : ''}
        }


        .${blockId} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-icon {
            ${dropDownIconSize?.Desktop ? `width: ${dropDownIconSize?.Desktop}${dropDownIconSizeUnits?.Desktop};` : ''}
            ${dropDownIconSize?.Desktop ? `height: ${dropDownIconSize?.Desktop}${dropDownIconSizeUnits?.Desktop};` : ''}
            ${dropDownIconColor ? `color: ${dropDownIconColor};` : ''}
            ${dropDownIconDesktopMarginWidth && dropDownIconDesktopMargin?.top? `margin: ${dropDownIconDesktopMarginWidth};` : ''}
        }

        .${blockId} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-icon:hover {
            ${dropDownIconHoverColor ? `color: ${dropDownIconHoverColor};` : ''}
        }

        .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container-open {
            ${hamburgerMenuIconColor ? `color: ${hamburgerMenuIconColor};` : ''}
            ${hamburgerMenuIconDesktopPaddingWidth && hamburgerMenuIconDesktopPadding?.top? `padding: ${hamburgerMenuIconDesktopPaddingWidth};` : ''}
        }
        .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container-open svg {
            ${hamburgerMenuIconSize?.Desktop ? `width: ${hamburgerMenuIconSize?.Desktop}${hamburgerMenuIconSizeUnits?.Desktop};` : ''}
            ${hamburgerMenuIconSize?.Desktop ? `height: ${hamburgerMenuIconSize?.Desktop}${hamburgerMenuIconSizeUnits?.Desktop};` : ''}
        }

        .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container-open:hover {
            ${hamburgerMenuIconHoverColor ? `color: ${hamburgerMenuIconHoverColor};` : ''}
        }

        .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open {
            ${hamburgerMenuPopupNormalBackgroundType === 'gradient' ? `  
                ${hamburgerMenuPopupNormalCustomGradientSwitcher && hamburgerMenuPopupNormalCustomGradientInputValue ? `background: ${hamburgerMenuPopupNormalCustomGradientInputValue};` : `background: ${hamburgerMenuPopupNormalGradientColor};`}
            `: `
                ${hamburgerMenuPopupNormalClassicColor ? `background: ${hamburgerMenuPopupNormalClassicColor};` : ''}
            `}
            ${hamburgerMenuPopupDesktopPaddingWidth && hamburgerMenuPopupDesktopPadding?.top? `padding: ${hamburgerMenuPopupDesktopPaddingWidth};` : ''}
        }

        .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open:hover {
            ${hamburgerMenuPopupHoverBackgroundType === 'gradient' ? `  
                ${hamburgerMenuPopupHoverCustomGradientSwitcher && hamburgerMenuPopupHoverCustomGradientInputValue ? `background: ${hamburgerMenuPopupHoverCustomGradientInputValue};` : `background: ${hamburgerMenuPopupHoverGradientColor};`}
            `: `
                ${hamburgerMenuPopupHoverClassicColor ? `background: ${hamburgerMenuPopupHoverClassicColor};` : ''}
            `}
        }

         .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item__content {
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontFamily === true && hamburgerMenuPopupGlobalTypographyData?.fontFamily ? `font-family: ${hamburgerMenuPopupGlobalTypographyData?.fontFamily};` : ''} 
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontSize === true && hamburgerMenuPopupGlobalTypographyData?.fontSize ? `font-size: ${hamburgerMenuPopupGlobalTypographyData?.fontSize};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontWeight === true && hamburgerMenuPopupGlobalTypographyData?.fontWeight ? `font-weight: ${hamburgerMenuPopupGlobalTypographyData?.fontWeight};` : ''} 
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontStyle === true && hamburgerMenuPopupGlobalTypographyData?.fontStyle ? `font-style: ${hamburgerMenuPopupGlobalTypographyData?.fontStyle};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.textTransform === true && hamburgerMenuPopupGlobalTypographyData?.textTransform ? `text-transform: ${hamburgerMenuPopupGlobalTypographyData?.textTransform};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.textDecoration === true && hamburgerMenuPopupGlobalTypographyData?.textDecoration ? `text-decoration: ${hamburgerMenuPopupGlobalTypographyData?.textDecoration};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.letterSpacing === true && hamburgerMenuPopupGlobalTypographyData?.letterSpacing ? `letter-spacing: ${hamburgerMenuPopupGlobalTypographyData?.letterSpacing};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.lineHeight === true && hamburgerMenuPopupGlobalTypographyData?.lineHeight ? `line-height: ${hamburgerMenuPopupGlobalTypographyData?.lineHeight};` : ''}
                
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontFamily === false && hamburgerMenuPopupFontFamily && hamburgerMenuPopupFontFamily !== 'Default' ? `font-family: ${hamburgerMenuPopupFontFamily};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontSize === false && hamburgerMenuPopupFontSize?.Desktop && hamburgerMenuPopupFontSizeUnits?.Desktop ? `font-size: ${hamburgerMenuPopupFontSize?.Desktop}${hamburgerMenuPopupFontSizeUnits?.Desktop};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontWeight === false && hamburgerMenuPopupFontWeight ? `font-weight: ${hamburgerMenuPopupFontWeight};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.fontStyle === false && hamburgerMenuPopupFontStyle ? `font-style: ${hamburgerMenuPopupFontStyle};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.textTransform === false && hamburgerMenuPopupTextTransform ? `text-transform: ${hamburgerMenuPopupTextTransform};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.textDecoration === false && hamburgerMenuPopupTextDecoration ? `text-decoration: ${hamburgerMenuPopupTextDecoration};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.letterSpacing === false && hamburgerMenuPopupLetterSpacing?.Desktop && hamburgerMenuPopupLetterSpacingUnits?.Desktop ? `letter-spacing: ${hamburgerMenuPopupLetterSpacing?.Desktop}${hamburgerMenuPopupLetterSpacingUnits?.Desktop};` : ''}
            ${hamburgerMenuPopupGlobalTypoSwitcher?.lineHeight === false && hamburgerMenuPopupLineHeight?.Desktop && hamburgerMenuPopupLineHeightUnits?.Desktop ? `line-height: ${hamburgerMenuPopupLineHeight?.Desktop}${hamburgerMenuPopupLineHeightUnits?.Desktop};` : ''}
            
            ${hamburgerMenuPopupColor ? `color: ${hamburgerMenuPopupColor};` : ''}
         
         }

        .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item__content:hover {
            ${hamburgerMenuPopupHoverColor ? `color: ${hamburgerMenuPopupHoverColor};` : ''}
        }

        .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-close svg {
            ${hamburgerMenuCloseIconColor ? `fill: ${hamburgerMenuCloseIconColor};` : ''}
            ${hamburgerMenuCloseIconSize?.Desktop ? `width: ${hamburgerMenuCloseIconSize?.Desktop}${hamburgerMenuCloseIconSizeUnits?.Desktop};` : ''} 
            ${hamburgerMenuCloseIconSize?.Desktop ? `height: ${hamburgerMenuCloseIconSize?.Desktop}${hamburgerMenuCloseIconSizeUnits?.Desktop};` : ''}
        }

        .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-close svg:hover {
            ${hamburgerMenuCloseIconHoverColor ? `fill: ${hamburgerMenuCloseIconHoverColor};` : ''}
        }

        @media only screen and (max-width: 1024px) {

            .${blockId}.fb-advanced-navigation-main-wrapper {
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationHZOrientationType === 'left' && navigationHZLeftOffset?.Tablet !== undefined ? `left: ${navigationHZLeftOffset?.Tablet}${navigationHZLeftOffsetUnits?.Tablet};` : ''}
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'top' && navigationVRTopOffset?.Tablet !== undefined ? `top: ${navigationVRTopOffset?.Tablet}${navigationVRTopOffsetUnits?.Tablet};` : ''}
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'bottom' && navigationVRBottomOffset?.Tablet !== undefined ? `bottom: ${navigationVRBottomOffset?.Tablet}${navigationVRBottomOffsetUnits?.Tablet};` : ''}
                ${navigationGlobalZIndex?.Tablet ? `z-index: ${navigationGlobalZIndex?.Tablet};` : ''}
            }
            .${blockId} .advanced-navigation-wrapper {
                ${navigationGlobalTabletPaddingWidth && navigationGlobalPaddingTablet?.top? `padding: ${navigationGlobalTabletPaddingWidth};` : ''}
                ${navigationGlobalTabletMarginWidth && navigationGlobalMarginTablet?.top? `margin: ${navigationGlobalTabletMarginWidth};` : ''} 
                ${navigationGlobalTabletBorderWidth && navigationGlobalBorderTablet?.top? `border-width: ${navigationGlobalTabletBorderWidth};` : ''}
                ${navigationGlobalTabletBorderRadiusWidth && navigationGlobalBorderRadiusTablet?.top? `border-radius: ${navigationGlobalTabletBorderRadiusWidth};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item {
                ${navigationTabletPaddingWidth && navigationTabletPadding?.top? `padding: ${navigationTabletPaddingWidth};` : ''}
                ${navigationTabletMarginWidth && navigationTabletMargin?.top? `margin: ${navigationTabletMarginWidth};` : ''} 
                ${navigationTabletBorderWidth && navigationTabletBorder?.top? `border-width: ${navigationTabletBorderWidth};` : ''}
                ${navigationTabletBorderRadiusWidth && navigationTabletBorderRadius?.top? `border-radius: ${navigationTabletBorderRadiusWidth};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation__container {
                ${navigationGap?.Tablet ? `gap: ${navigationGap?.Tablet}${navigationGapUnits?.Tablet};` : ''}	
            }
            .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item .wp-block-navigation-item__content {
                ${navigationGlobalTypoSwitcher?.fontSize === false && navigationFontSize?.Tablet && navigationFontSizeUnits?.Tablet ? `font-size: ${navigationFontSize?.Tablet}${navigationFontSizeUnits?.Tablet};` : ''}
                ${navigationGlobalTypoSwitcher?.letterSpacing === false && navigationLetterSpacing?.Tablet && navigationLetterSpacingUnits?.Tablet ? `letter-spacing: ${navigationLetterSpacing?.Tablet}${navigationLetterSpacingUnits?.Tablet};` : ''}
                ${navigationGlobalTypoSwitcher?.lineHeight === false && navigationLineHeight?.Tablet && navigationLineHeightUnits?.Tablet ? `line-height: ${navigationLineHeight?.Tablet}${navigationLineHeightUnits?.Tablet};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container {
                ${dropDownWrapperMinWidth?.Tablet ? `min-width: ${dropDownWrapperMinWidth?.Tablet}${dropDownWrapperMinWidthUnits?.Tablet} !important;` : ''}

                ${dropDownTabletPaddingWidth && dropDownTabletPadding?.top? `padding: ${dropDownTabletPaddingWidth};` : ''}
                ${dropDownTabletMarginWidth && dropDownTabletMargin?.top? `margin: ${dropDownTabletMarginWidth};` : ''} 
                ${dropDownTabletBorderWidth && dropDownTabletBorder?.top? `border-width: ${dropDownTabletBorderWidth};` : ''}
                ${dropDownTabletBorderRadiusWidth && dropDownTabletBorderRadius?.top? `border-radius: ${dropDownTabletBorderRadiusWidth};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
                ${dropDownItemTypoSwitcher?.fontSize === false && dropDownItemFontSize?.Tablet && dropDownItemFontSizeUnits?.Tablet ? `font-size: ${dropDownItemFontSize?.Tablet}${dropDownItemFontSizeUnits?.Tablet};` : ''}
                ${dropDownItemTypoSwitcher?.letterSpacing === false && dropDownItemLetterSpacing?.Tablet && dropDownItemLetterSpacingUnits?.Tablet ? `letter-spacing: ${dropDownItemLetterSpacing?.Tablet}${dropDownItemLetterSpacingUnits?.Tablet};` : ''}
                ${dropDownItemTypoSwitcher?.lineHeight === false && dropDownItemLineHeight?.Tablet && dropDownItemLineHeightUnits?.Tablet ? `line-height: ${dropDownItemLineHeight?.Tablet}${dropDownItemLineHeightUnits?.Tablet};` : ''}
                
                ${dropDownItemTabletPaddingWidth && dropDownItemTabletPadding?.top? `padding: ${dropDownItemTabletPaddingWidth};` : ''}
                ${dropDownItemTabletMarginWidth && dropDownItemTabletMargin?.top? `margin: ${dropDownItemTabletMarginWidth};` : ''} 
                ${dropDownItemTabletBorderWidth && dropDownItemTabletBorder?.top? `border-width: ${dropDownItemTabletBorderWidth};` : ''}
                ${dropDownItemTabletBorderRadiusWidth && dropDownItemTabletBorderRadius?.top? `border-radius: ${dropDownItemTabletBorderRadiusWidth};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-icon {
                ${dropDownIconSize?.Tablet ? `width: ${dropDownIconSize?.Tablet}${dropDownIconSizeUnits?.Tablet};` : ''}
                ${dropDownIconSize?.Tablet ? `height: ${dropDownIconSize?.Tablet}${dropDownIconSizeUnits?.Tablet};` : ''}
                ${dropDownIconTabletMarginWidth && dropDownIconTabletMargin?.top? `margin: ${dropDownIconTabletMarginWidth};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container-open {
                ${hamburgerMenuIconTabletPaddingWidth && hamburgerMenuIconTabletPadding?.top? `padding: ${hamburgerMenuIconTabletPaddingWidth};` : ''}
            }
            .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container-open svg {
                ${hamburgerMenuIconSize?.Tablet ? `width: ${hamburgerMenuIconSize?.Tablet}${hamburgerMenuIconSizeUnits?.Tablet};` : ''}
                ${hamburgerMenuIconSize?.Tablet ? `height: ${hamburgerMenuIconSize?.Tablet}${hamburgerMenuIconSizeUnits?.Tablet};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open {
                ${hamburgerMenuPopupTabletPaddingWidth && hamburgerMenuPopupTabletPadding?.top? `padding: ${hamburgerMenuPopupTabletPaddingWidth};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item__content {
                ${hamburgerMenuPopupGlobalTypoSwitcher?.fontSize === false && hamburgerMenuPopupFontSize?.Tablet && hamburgerMenuPopupFontSizeUnits?.Tablet ? `font-size: ${hamburgerMenuPopupFontSize?.Tablet}${hamburgerMenuPopupFontSizeUnits?.Tablet};` : ''}
                ${hamburgerMenuPopupGlobalTypoSwitcher?.letterSpacing === false && hamburgerMenuPopupLetterSpacing?.Tablet && hamburgerMenuPopupLetterSpacingUnits?.Tablet ? `letter-spacing: ${hamburgerMenuPopupLetterSpacing?.Tablet}${hamburgerMenuPopupLetterSpacingUnits?.Tablet};` : ''}
                ${hamburgerMenuPopupGlobalTypoSwitcher?.lineHeight === false && hamburgerMenuPopupLineHeight?.Tablet && hamburgerMenuPopupLineHeightUnits?.Tablet ? `line-height: ${hamburgerMenuPopupLineHeight?.Tablet}${hamburgerMenuPopupLineHeightUnits?.Tablet};` : ''}
            }
            .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-close svg {
                ${hamburgerMenuCloseIconSize?.Tablet ? `width: ${hamburgerMenuCloseIconSize?.Tablet}${hamburgerMenuCloseIconSizeUnits?.Tablet};` : ''}
                ${hamburgerMenuCloseIconSize?.Tablet ? `height: ${hamburgerMenuCloseIconSize?.Tablet}${hamburgerMenuCloseIconSizeUnits?.Tablet};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockId}.fb-advanced-navigation-main-wrapper {
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationHZOrientationType === 'left' && navigationHZLeftOffset?.Mobile !== undefined ? `left: ${navigationHZLeftOffset?.Mobile}${navigationHZLeftOffsetUnits?.Mobile};` : ''}
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'top' && navigationVRTopOffset?.Mobile !== undefined ? `top: ${navigationVRTopOffset?.Mobile}${navigationVRTopOffsetUnits?.Mobile};` : ''}
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'bottom' && navigationVRBottomOffset?.Mobile !== undefined ? `bottom: ${navigationVRBottomOffset?.Mobile}${navigationVRBottomOffsetUnits?.Mobile};` : ''}
                ${navigationGlobalZIndex.Mobile ? `z-index: ${navigationGlobalZIndex.Mobile};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper {
                ${navigationGlobalMobilePaddingWidth && navigationGlobalPaddingMobile?.top? `padding: ${navigationGlobalMobilePaddingWidth};` : ''} 
                ${navigationGlobalMobileMarginWidth && navigationGlobalMarginMobile?.top? `margin: ${navigationGlobalMobileMarginWidth};` : ''} 
                ${navigationGlobalMobileBorderWidth && navigationGlobalBorderMobile?.top? `border-width: ${navigationGlobalMobileBorderWidth};` : ''}
                ${navigationGlobalMobileBorderRadiusWidth && navigationGlobalBorderRadiusMobile?.top? `border-radius: ${navigationGlobalMobileBorderRadiusWidth};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item {
                ${navigationMobilePaddingWidth && navigationMobilePadding?.top? `padding: ${navigationMobilePaddingWidth};` : ''}
                ${navigationMobileMarginWidth && navigationMobileMargin?.top? `margin: ${navigationMobileMarginWidth};` : ''} 
                ${navigationMobileBorderWidth && navigationMobileBorder?.top? `border-width: ${navigationMobileBorderWidth};` : ''}
                ${navigationMobileBorderRadiusWidth && navigationMobileBorderRadius?.top? `border-radius: ${navigationMobileBorderRadiusWidth};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation__container {
                ${navigationGap?.Mobile ? `gap: ${navigationGap?.Mobile}${navigationGapUnits?.Mobile};` : ''}	
            }
            .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item .wp-block-navigation-item__content {
                ${navigationGlobalTypoSwitcher?.fontSize === false && navigationFontSize?.Mobile && navigationFontSizeUnits?.Mobile ? `font-size: ${navigationFontSize?.Mobile}${navigationFontSizeUnits?.Mobile};` : ''}
                ${navigationGlobalTypoSwitcher?.letterSpacing === false && navigationLetterSpacing?.Mobile && navigationLetterSpacingUnits?.Mobile ? `letter-spacing: ${navigationLetterSpacing?.Mobile}${navigationLetterSpacingUnits?.Mobile};` : ''}
                ${navigationGlobalTypoSwitcher?.lineHeight === false && navigationLineHeight?.Mobile && navigationLineHeightUnits?.Mobile ? `line-height: ${navigationLineHeight?.Mobile}${navigationLineHeightUnits?.Mobile};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container {
                ${dropDownWrapperMinWidth?.Mobile ? `min-width: ${dropDownWrapperMinWidth?.Mobile}${dropDownWrapperMinWidthUnits?.Mobile} !important;` : ''}

                ${dropDownMobilePaddingWidth && dropDownMobilePadding?.top? `padding: ${dropDownMobilePaddingWidth};` : ''}
                ${dropDownMobileMarginWidth && dropDownMobileMargin?.top? `margin: ${dropDownMobileMarginWidth};` : ''} 
                ${dropDownMobileBorderWidth && dropDownMobileBorder?.top? `border-width: ${dropDownMobileBorderWidth};` : ''}
                ${dropDownMobileBorderRadiusWidth && dropDownMobileBorderRadius?.top? `border-radius: ${dropDownMobileBorderRadiusWidth};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
                ${dropDownItemTypoSwitcher?.fontSize === false && dropDownItemFontSize?.Mobile && dropDownItemFontSizeUnits?.Mobile ? `font-size: ${dropDownItemFontSize?.Mobile}${dropDownItemFontSizeUnits?.Mobile};` : ''}
                ${dropDownItemTypoSwitcher?.letterSpacing === false && dropDownItemLetterSpacing?.Mobile && dropDownItemLetterSpacingUnits?.Mobile ? `letter-spacing: ${dropDownItemLetterSpacing?.Mobile}${dropDownItemLetterSpacingUnits?.Mobile};` : ''}
                ${dropDownItemTypoSwitcher?.lineHeight === false && dropDownItemLineHeight?.Mobile && dropDownItemLineHeightUnits?.Mobile ? `line-height: ${dropDownItemLineHeight?.Mobile}${dropDownItemLineHeightUnits?.Mobile};` : ''}
                
                ${dropDownItemMobilePaddingWidth && dropDownItemMobilePadding?.top? `padding: ${dropDownItemMobilePaddingWidth};` : ''}
                ${dropDownItemMobileMarginWidth && dropDownItemMobileMargin?.top? `margin: ${dropDownItemMobileMarginWidth};` : ''} 
                ${dropDownItemMobileBorderWidth && dropDownItemMobileBorder?.top? `border-width: ${dropDownItemMobileBorderWidth};` : ''}
                ${dropDownItemMobileBorderRadiusWidth && dropDownItemMobileBorderRadius?.top? `border-radius: ${dropDownItemMobileBorderRadiusWidth};` : ''}
            }
            .${blockId} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-icon {
                ${dropDownIconSize?.Mobile ? `width: ${dropDownIconSize?.Mobile}${dropDownIconSizeUnits?.Mobile};` : ''}
                ${dropDownIconSize?.Mobile ? `height: ${dropDownIconSize?.Mobile}${dropDownIconSizeUnits?.Mobile};` : ''}
                ${dropDownIconMobileMarginWidth && dropDownIconMobileMargin?.top? `margin: ${dropDownIconMobileMarginWidth};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container-open {
                ${hamburgerMenuIconMobilePaddingWidth && hamburgerMenuIconMobilePadding?.top? `padding: ${hamburgerMenuIconMobilePaddingWidth};` : ''}
            }
            .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container-open svg {
                ${hamburgerMenuIconSize?.Mobile ? `width: ${hamburgerMenuIconSize?.Mobile}${hamburgerMenuIconSizeUnits?.Mobile};` : ''}
                ${hamburgerMenuIconSize?.Mobile ? `height: ${hamburgerMenuIconSize?.Mobile}${hamburgerMenuIconSizeUnits?.Mobile};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open {
                ${hamburgerMenuPopupMobilePaddingWidth && hamburgerMenuPopupMobilePadding?.top? `padding: ${hamburgerMenuPopupMobilePaddingWidth};` : ''}
            }
            .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation-item__content {
                ${hamburgerMenuPopupGlobalTypoSwitcher?.fontSize === false && hamburgerMenuPopupFontSize?.Mobile && hamburgerMenuPopupFontSizeUnits?.Mobile ? `font-size: ${hamburgerMenuPopupFontSize?.Mobile}${hamburgerMenuPopupFontSizeUnits?.Mobile};` : ''}
                ${hamburgerMenuPopupGlobalTypoSwitcher?.letterSpacing === false && hamburgerMenuPopupLetterSpacing?.Mobile && hamburgerMenuPopupLetterSpacingUnits?.Mobile ? `letter-spacing: ${hamburgerMenuPopupLetterSpacing?.Mobile}${hamburgerMenuPopupLetterSpacingUnits?.Mobile};` : ''}
                ${hamburgerMenuPopupGlobalTypoSwitcher?.lineHeight === false && hamburgerMenuPopupLineHeight?.Mobile && hamburgerMenuPopupLineHeightUnits?.Mobile ? `line-height: ${hamburgerMenuPopupLineHeight?.Mobile}${hamburgerMenuPopupLineHeightUnits?.Mobile};` : ''}
            }
            .${blockId} .advanced-navigation-wrapper .wp-block-navigation__responsive-container.is-menu-open .wp-block-navigation__responsive-container-close svg {
                ${hamburgerMenuCloseIconSize?.Mobile ? `width: ${hamburgerMenuCloseIconSize?.Mobile}${hamburgerMenuCloseIconSizeUnits?.Mobile};` : ''}
                ${hamburgerMenuCloseIconSize?.Mobile ? `height: ${hamburgerMenuCloseIconSize?.Mobile}${hamburgerMenuCloseIconSizeUnits?.Mobile};` : ''}
            }

        }

    `, [
        blockId,
        blockStyle,
        deviceType,
        navigationLayout,
        navigationHorizontalAlign, 
        dropdownOpenOnClick,
        showDropdownIcon,
        navigationFlexWrapSwitcher,
        navigationVerticalAlign, 
        hamburgerMenuIconType,
        hamburgerMenuSwitcher,

        /** Start Navigation Typography */
        navigationGap,
        navigationGapUnits,
        navigationGlobalTypographyData,
        navigationGlobalTypoSwitcher,
        navigationGlobalTypoType,
        navigationGlobalTypoOption,
        navigationFontFamily,
        navigationFontSize,
        navigationFontSizeUnits,
        navigationFontWeight,
        navigationFontStyle,
        navigationTextTransform,
        navigationTextDecoration,
        navigationLetterSpacing,
        navigationLetterSpacingUnits,
        navigationLineHeight,
        navigationLineHeightUnits,
        /** End Navigation Typography */

        /** Start Navigation Color and active color */
        navigationColorSwitcher,
        navigationColor,
        navigationHoverColor,
        navigationActiveColorSwitcher,
        navigationActiveColor,
        navigationActiveHoverColor,
        /** End Navigation Color and active color */

        /** Start Navigation Background */
        navigationBgColorSwitcher,
        navigationNormalBackgroundType,
        navigationNormalClassicColor,
        navigationNormalGradientColor,
        navigationNormalCustomGradientSwitcher,
        navigationNormalCustomGradientInputValue,

        navigationHoverBackgroundType,
        navigationHoverClassicColor,
        navigationHoverGradientColor,
        navigationHoverCustomGradientSwitcher,
        navigationHoverCustomGradientInputValue,
        /** End Navigation Background */

        /** Start Navigation Padding and Margin */
        navigationPaddingUnits,
        navigationDesktopPadding,
        navigationTabletPadding,
        navigationMobilePadding,
        navigationPaddingLink,
        navigationDesktopPaddingWidth,
        navigationTabletPaddingWidth,
        navigationMobilePaddingWidth,
        navigationMarginUnits,
        navigationDesktopMargin,
        navigationTabletMargin,
        navigationMobileMargin,
        navigationMarginLink,
        navigationDesktopMarginWidth,
        navigationTabletMarginWidth,
        navigationMobileMarginWidth,
        /** End Navigation Padding and Margin */

        /** Start Navigation Border and Border Radius */
        navigationBorder,
        navigationBorderColorSwitcher,
        navigationBorderColor,
        navigationBorderHoverColor,

        navigationBorderUnits,
        navigationDesktopBorder,
        navigationTabletBorder,
        navigationMobileBorder,
        navigationBorderLink,
        navigationDesktopBorderWidth,
        navigationTabletBorderWidth,
        navigationMobileBorderWidth,

        navigationBorderRadiusUnits,
        navigationDesktopBorderRadius,
        navigationTabletBorderRadius,
        navigationMobileBorderRadius,
        navigationBorderRadiusLink,
        navigationDesktopBorderRadiusWidth,
        navigationTabletBorderRadiusWidth,
        navigationMobileBorderRadiusWidth,
        /** End Navigation Border and Border Radius */

        /** Start Navigation Box Shadow */
        navigationBoxShadowSwitcher,
        navigationBoxShadowValues,
        navigationBoxShadowCssValue,
        navigationBoxShadowHoverValues,
        navigationBoxShadowHoverCssValue,
        /** End Navigation Box Shadow */

        /** Start Dropdown Menu */
        dropDownWrapperMinWidth,
        dropDownWrapperMinWidthUnits,
        /** End Dropdown Menu */

        /** Start Dropdown Menu Background */
        dropDownBgColorSwitcher,
        dropDownNormalBackgroundType,
        dropDownNormalClassicColor,
        dropDownNormalGradientColor,
        dropDownNormalCustomGradientSwitcher,
        dropDownNormalCustomGradientInputValue,

        dropDownHoverBackgroundType,
        dropDownHoverClassicColor,
        dropDownHoverGradientColor,
        dropDownHoverCustomGradientSwitcher,
        dropDownHoverCustomGradientInputValue,
        /** End Dropdown Menu Background */

        /** Start Dropdown Menu Padding and Margin */
        dropDownPaddingUnits, 
        dropDownDesktopPadding,
        dropDownTabletPadding,
        dropDownMobilePadding,
        dropDownPaddingLink,
        dropDownDesktopPaddingWidth,
        dropDownTabletPaddingWidth,
        dropDownMobilePaddingWidth, 
        dropDownMarginUnits,
        dropDownDesktopMargin,
        dropDownTabletMargin,
        dropDownMobileMargin,
        dropDownMarginLink,
        dropDownDesktopMarginWidth,
        dropDownTabletMarginWidth,
        dropDownMobileMarginWidth,
        /** End Dropdown Menu Padding and Margin */

        /** Start Dropdown Menu Border and Border Radius */
        dropDownBorder,
        dropDownBorderColorSwitcher,
        dropDownBorderColor,
        dropDownBorderHoverColor,

        dropDownBorderUnits,
        dropDownDesktopBorder,
        dropDownTabletBorder,
        dropDownMobileBorder,
        dropDownBorderLink,
        dropDownDesktopBorderWidth,
        dropDownTabletBorderWidth,
        dropDownMobileBorderWidth,

        dropDownBorderRadiusUnits,  
        dropDownDesktopBorderRadius,
        dropDownTabletBorderRadius,
        dropDownMobileBorderRadius,
        dropDownBorderRadiusLink,
        dropDownDesktopBorderRadiusWidth,
        dropDownTabletBorderRadiusWidth,
        dropDownMobileBorderRadiusWidth,
        /** End Dropdown Menu Border and Border Radius */

        /** Start Dropdown Menu Box Shadow */
        dropDownBoxShadowSwitcher,
        dropDownBoxShadowValues,
        dropDownBoxShadowCssValue,
        dropDownBoxShadowHoverValues,
        dropDownBoxShadowHoverCssValue,
        /** End Dropdown Menu Box Shadow */

        /** Start Dropdown Menu Typography */
        dropDownItemTypographyData,
        dropDownItemTypoSwitcher,
        dropDownItemTypoType,
        dropDownItemTypoOption,
        dropDownItemFontFamily,
        dropDownItemFontSize,
        dropDownItemFontSizeUnits,
        dropDownItemFontWeight,
        dropDownItemFontStyle,
        dropDownItemTextTransform,
        dropDownItemTextDecoration,
        dropDownItemLetterSpacing,
        dropDownItemLetterSpacingUnits,
        dropDownItemLineHeight,
        dropDownItemLineHeightUnits,
        /** End Dropdown Menu Item Typography */ 

        /** Start Dropdown Menu Color and active color */
        dropDownItemColorSwitcher,
        dropDownItemColor,
        dropDownItemHoverColor,

        dropDownItemActiveColorSwitcher,
        dropDownItemActiveColor,
        dropDownItemActiveHoverColor,
        /** End Dropdown Menu Color and active color */

        /** Start Dropdown Menu Item Padding */
        dropDownItemPaddingUnits,
        dropDownItemDesktopPadding,
        dropDownItemTabletPadding,
        dropDownItemMobilePadding,
        dropDownItemPaddingLink,
        dropDownItemDesktopPaddingWidth,
        dropDownItemTabletPaddingWidth,
        dropDownItemMobilePaddingWidth,
        /** End Dropdown Menu Item Padding */

        /** Start Dropdown Menu Item Margin */
        dropDownItemMarginUnits,
        dropDownItemDesktopMargin,
        dropDownItemTabletMargin,
        dropDownItemMobileMargin,
        dropDownItemMarginLink,
        dropDownItemDesktopMarginWidth,
        dropDownItemTabletMarginWidth,
        dropDownItemMobileMarginWidth,
        /** End Dropdown Menu Item Margin */

        /** Start Dropdown Menu Item Border */
        dropDownItemBorder,
        dropDownItemBorderColorSwitcher,
        dropDownItemBorderColor,
        dropDownItemBorderHoverColor,

        dropDownItemBorderUnits,
        dropDownItemDesktopBorder,
        dropDownItemTabletBorder,
        dropDownItemMobileBorder,
        dropDownItemBorderLink,
        dropDownItemDesktopBorderWidth,
        dropDownItemTabletBorderWidth,
        dropDownItemMobileBorderWidth,

        dropDownItemBorderRadiusUnits,
        dropDownItemDesktopBorderRadius,
        dropDownItemTabletBorderRadius,
        dropDownItemMobileBorderRadius,
        dropDownItemBorderRadiusLink,
        dropDownItemDesktopBorderRadiusWidth,
        dropDownItemTabletBorderRadiusWidth,
        dropDownItemMobileBorderRadiusWidth,
        /** End Dropdown Menu Item Border */

        /** Start Dropdown Menu Icon */
        dropDownIconSize,
        dropDownIconSizeUnits,
        dropDownIconColorSwitcher,
        dropDownIconColor,
        dropDownIconHoverColor,

        dropDownIconMarginUnits,
        dropDownIconDesktopMargin,
        dropDownIconTabletMargin,
        dropDownIconMobileMargin,
        dropDownIconMarginLink,
        dropDownIconDesktopMarginWidth,
        dropDownIconTabletMarginWidth,
        dropDownIconMobileMarginWidth,
        /** End Dropdown Menu Icon */

        /** Start Hamburger Menu */
        hamburgerMenuIconSize,
        hamburgerMenuIconSizeUnits,
        hamburgerMenuIconColorSwitcher,
        hamburgerMenuIconColor,
        hamburgerMenuIconHoverColor,

        hamburgerMenuIconPaddingUnits,
        hamburgerMenuIconDesktopPadding,
        hamburgerMenuIconTabletPadding,
        hamburgerMenuIconMobilePadding,
        hamburgerMenuIconPaddingLink,
        hamburgerMenuIconDesktopPaddingWidth,
        hamburgerMenuIconTabletPaddingWidth,
        hamburgerMenuIconMobilePaddingWidth,
        /** End Hamburger Menu */

        /** Start Hamburger Menu Background */
        hamburgerMenuPopupBgColorSwitcher,
        hamburgerMenuPopupNormalBackgroundType,
        hamburgerMenuPopupNormalClassicColor,
        hamburgerMenuPopupNormalGradientColor,
        hamburgerMenuPopupNormalCustomGradientSwitcher,
        hamburgerMenuPopupNormalCustomGradientInputValue,

        hamburgerMenuPopupHoverBackgroundType,
        hamburgerMenuPopupHoverClassicColor,
        hamburgerMenuPopupHoverGradientColor,
        hamburgerMenuPopupHoverCustomGradientSwitcher,
        hamburgerMenuPopupHoverCustomGradientInputValue,

        /** End Hamburger Menu Background */

        /** Start Hamburger Menu Padding */
        hamburgerMenuPopupPaddingUnits,
        hamburgerMenuPopupDesktopPadding,
        hamburgerMenuPopupTabletPadding,
        hamburgerMenuPopupMobilePadding,
        hamburgerMenuPopupPaddingLink,
        hamburgerMenuPopupDesktopPaddingWidth,
        hamburgerMenuPopupTabletPaddingWidth,
        hamburgerMenuPopupMobilePaddingWidth,
        /** End Hamburger Menu Padding */

        /** Start Hamburger Menu Typography */
        hamburgerMenuPopupGlobalTypographyData,
        hamburgerMenuPopupGlobalTypoSwitcher,
        hamburgerMenuPopupGlobalTypoType,
        hamburgerMenuPopupGlobalTypoOption,
        hamburgerMenuPopupFontFamily,
        hamburgerMenuPopupFontSize,
        hamburgerMenuPopupFontSizeUnits,
        hamburgerMenuPopupFontWeight,
        hamburgerMenuPopupFontStyle,
        hamburgerMenuPopupTextTransform,
        hamburgerMenuPopupTextDecoration,
        hamburgerMenuPopupLetterSpacing,
        hamburgerMenuPopupLetterSpacingUnits,
        hamburgerMenuPopupLineHeight,
        hamburgerMenuPopupLineHeightUnits,
        /** End Hamburger Menu Typography */
        
        /** Start Hamburger Menu Color */
        hamburgerMenuPopupColorSwitcher,
        hamburgerMenuPopupColor,
        hamburgerMenuPopupHoverColor,
        /** End Hamburger Menu Color */

        /** Start Hamburger Menu close icon color */
        hamburgerMenuCloseIconSize,
        hamburgerMenuCloseIconSizeUnits,
        hamburgerMenuCloseIconColorSwitcher,
        hamburgerMenuCloseIconColor,
        hamburgerMenuCloseIconHoverColor,
        /** End Hamburger Menu close icon color */


        /** Start Global Setting */
        navigationGlobalZIndex,

        navigationOverflow,
        navigationPositionType,
        navigationHZOrientationType,
        navigationVROrientationType,
        navigationHZLeftOffset,
        navigationHZLeftOffsetUnits,
        navigationHZRightOffset,
        navigationHZRightOffsetUnits,
        navigationVRTopOffset,
        navigationVRTopOffsetUnits,
        navigationVRBottomOffset,
        navigationVRBottomOffsetUnits,

        navigationGlobalPaddingUnits,
        navigationGlobalPaddingDesktop,
        navigationGlobalPaddingTablet,
        navigationGlobalPaddingMobile,
        navigationGlobalPaddingLink,
        navigationGlobalDesktopPaddingWidth,
        navigationGlobalTabletPaddingWidth,
        navigationGlobalMobilePaddingWidth,
         

        navigationGlobalMarginUnits,
        navigationGlobalMarginDesktop,
        navigationGlobalMarginTablet,
        navigationGlobalMarginMobile,
        navigationGlobalMarginLink,
        navigationGlobalDesktopMarginWidth,
        navigationGlobalTabletMarginWidth,
        navigationGlobalMobileMarginWidth,

        navigationGlobalBgColorSwitcher, 
        navigationGlobalNormalBackgroundType,
        navigationGlobalNormalClassicColor,
        navigationGlobalNormalGradientColor,
        navigationGlobalNormalCustomGradientSwitcher,
        navigationGlobalNormalCustomGradientInputValue,

        navigationGlobalHoverBackgroundType,
        navigationGlobalHoverClassicColor,
        navigationGlobalHoverGradientColor,
        navigationGlobalHoverCustomGradientSwitcher,
        navigationGlobalHoverCustomGradientInputValue,
        
        navigationGlobalBorder, 
        navigationGlobalBorderColorSwitcher,
        navigationGlobalBorderColor,
        navigationGlobalBorderHoverColor,

        navigationGlobalBorderUnits,
        navigationGlobalBorderDesktop,
        navigationGlobalBorderTablet,
        navigationGlobalBorderMobile,
        navigationGlobalBorderLink,
        navigationGlobalDesktopBorderWidth,
        navigationGlobalTabletBorderWidth,
        navigationGlobalMobileBorderWidth,

        navigationGlobalBorderRadiusUnits,
        navigationGlobalBorderRadiusDesktop,
        navigationGlobalBorderRadiusTablet,
        navigationGlobalBorderRadiusMobile,
        navigationGlobalBorderRadiusLink,
        navigationGlobalDesktopBorderRadiusWidth,
        navigationGlobalTabletBorderRadiusWidth,
        navigationGlobalMobileBorderRadiusWidth,

        navigationGlobalBoxShadowSwitcher,
        navigationGlobalBoxShadowValues,
        navigationGlobalBoxShadowCssValue,
        navigationGlobalBoxShadowHoverValues,
        navigationGlobalBoxShadowHoverCssValue,

        navigationDesktopSwitcher,
        navigationTabletSwitcher,
        navigationMobileSwitcher,

        navigationGlobalCustomCSS,
        navigationGlobalWraperID,
        navigationGlobalWraperClass,
    ]);

    const customCss = getCustomCss(navigationGlobalCustomCSS, `.${blockId}`);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle, customCss]);

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
                <FB_SwitcherControl
                        label={__("Layout", "frontis-blocks")}
                        options={NAVIGATION_LAYOUT}
                        globalSwitcher={navigationLayout}
                        setGlobalSwitcher={(value) => setAttributes({ navigationLayout: value })}
                />
                {navigationLayout === 'is-horizontal' && (
                    <ToggleControl
                        label={__('Display all items in one line.', 'frontis-blocks')}
                        checked={navigationFlexWrapSwitcher}
                        onChange={(value) => setAttributes({ navigationFlexWrapSwitcher: value })}
                    />
                )}
                <FB_AlignmentControl
                    label={__("Alignment", "frontis-blocks")}
                    options={navigationLayout === 'is-horizontal' ? HORIZONTAL_NAVIGATION_ALIGN : VERTICAL_NAVIGATION_ALIGN}
                    globalAlignment={navigationLayout === 'is-horizontal' ? navigationHorizontalAlign : navigationVerticalAlign} 
                    setGlobalAlignment={(value) => setAttributes({ [navigationLayout === 'is-horizontal' ? 'navigationHorizontalAlign' : 'navigationVerticalAlign']: value })}
                />
                {/* <BaseControl
                    label={__("Dropdown Menus", "frontis-blocks")}
                    className="fb-setting-show-hide-elements"
                >
                    <ToggleControl
                        label={__('Open dropdown on click', 'frontis-blocks')}
                        checked={dropdownOpenOnClick}
                        onChange={(value) => setAttributes({ dropdownOpenOnClick: value })}
                    />
                    <ToggleControl
                        label={__('Show dropdown menu icon', 'frontis-blocks')}
                        checked={showDropdownIcon}
                        onChange={(value) => setAttributes({ showDropdownIcon: value })}
                    />
                </BaseControl> */}

                <BaseControl
                    label={__("Dropdown Menus", "frontis-blocks")}
                    className="fb-setting-show-hide-elements"
                >
                    <ToggleControl
                        label={__('Open dropdown on click', 'frontis-blocks')}
                        checked={dropdownOpenOnClick}
                        onChange={(value) => {
                            setAttributes({ dropdownOpenOnClick: value });

                            // Automatically set showDropdownIcon to true if dropdownOpenOnClick is turned on
                            if (value) {
                                setAttributes({ showDropdownIcon: true });
                            }
                        }}
                    />
                    <ToggleControl
                        label={__('Show dropdown menu icon', 'frontis-blocks')}
                        checked={showDropdownIcon}
                        onChange={(value) => setAttributes({ showDropdownIcon: value })}
                        disabled={dropdownOpenOnClick} 
                    />
                </BaseControl>
            </PanelBody>
            <PanelBody title={__("Hamburger Menu", "frontis-blocks")} initialOpen={false}>
                <FB_SwitcherControl
                    label={__("Button Type", "frontis-blocks")}
                    options={HAMBURGER_MENU_ICON_TYPE}
                    globalSwitcher={hamburgerMenuIconType}
                    setGlobalSwitcher={(value) => setAttributes({ hamburgerMenuIconType: value })}
                />
                <FB_SwitcherControl
                    label={__("Display Hamburger Menu", "frontis-blocks")}
                    options={HAMBURGER_MENU_SCREEN}
                    globalSwitcher={hamburgerMenuSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ hamburgerMenuSwitcher: value })}
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
                title={__("Navigation", "frontis-blocks")}
                initialOpen={true}
            >
                <FB_Range
                    min={1}
                    max={200}
                    label={__("Gap", "frontis-blocks")}
                    rangeValue={navigationGap}
                    onChangeHandler={(value) => setAttributes({ navigationGap: value })}
                    rangeUnitHandler={(value) => setAttributes({ navigationGapUnits: value })}
                    deviceType={deviceType}
                    units={navigationGapUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={navigationGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ navigationGlobalTypographyData: value })}

                    globalTypoType={navigationGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            navigationGlobalTypoType: value, 
                            navigationGlobalTypoSwitcher: value === 'default' ? {...navigationGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...navigationGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={navigationGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ navigationGlobalTypoOption: value })}

                    fontFamily={navigationFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ navigationFontFamily: value, navigationGlobalTypoSwitcher: {...navigationGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={navigationFontSize}
                    onChangeFontSize={(value) => setAttributes({ navigationFontSize: value, navigationGlobalTypoSwitcher: {...navigationGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={navigationFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ navigationFontSizeUnits: value })}

                    fontWeight={navigationFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ navigationFontWeight: value, navigationGlobalTypoSwitcher: {...navigationGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={navigationFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ navigationFontStyle: value, navigationGlobalTypoSwitcher: {...navigationGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={navigationTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ navigationTextTransform: value, navigationGlobalTypoSwitcher: {...navigationGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={navigationTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ navigationTextDecoration: value, navigationGlobalTypoSwitcher: {...navigationGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={navigationLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ navigationLetterSpacing: value, navigationGlobalTypoSwitcher: {...navigationGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={navigationLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ navigationLetterSpacingUnits: value })}

                    lineHeight={navigationLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ navigationLineHeight: value, navigationGlobalTypoSwitcher: {...navigationGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={navigationLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ navigationLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
                <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        options={NORMAL_HOVER}
                        globalSwitcher={navigationColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ navigationColorSwitcher: value })}
                />
                {navigationColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={navigationColor}
                        setGlobalColor={(value) => setAttributes({ navigationColor: value === undefined ? '' : value })}
                    />
                )}

                {navigationColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={navigationHoverColor}
                        setGlobalColor={(value) => setAttributes({ navigationHoverColor: value === undefined ? '' : value })}
                    />
                )}
                <FB_SwitcherControl
                        label={__("Active Color", "frontis-blocks")}
                        options={NORMAL_HOVER}
                        globalSwitcher={navigationActiveColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ navigationActiveColorSwitcher: value })}
                />

                {navigationActiveColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Color", "frontis-blocks")}
                        globalColor={navigationActiveColor}
                        setGlobalColor={(value) => setAttributes({ navigationActiveColor: value === undefined ? '' : value })}
                    />
                )}

                {navigationActiveColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={navigationActiveHoverColor}
                        setGlobalColor={(value) => setAttributes({ navigationActiveHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={navigationBgColorSwitcher}  
                    setBgColorSwitcher={(value) => setAttributes({ navigationBgColorSwitcher: value })}
                    
                    normalBackgroundType={navigationNormalBackgroundType} 
                    setNormalBackgroundType={(value) => setAttributes({ navigationNormalBackgroundType: value })}
                    normalClassicColor={navigationNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ navigationNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={navigationNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ navigationNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={navigationNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ navigationNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={navigationNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ navigationNormalCustomGradientInputValue: value })}
                    
                    hoverBackgroundType={navigationHoverBackgroundType} 
                    setHoverBackgroundType={(value) => setAttributes({ navigationHoverBackgroundType: value })}
                    hoverClassicColor={navigationHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ navigationHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={navigationHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ navigationHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={navigationHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ navigationHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={navigationHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ navigationHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}

                />

                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleNavigationPaddingUnitsHandler}  
                    spacingUnits={navigationPaddingUnits}
                    spacingDesktop={navigationDesktopPadding}
                    spacingTablet={navigationTabletPadding}
                    spacingMobile={navigationMobilePadding}
                    handleSpacingUnitHandler={handleNavigationPaddingUnitChange}
                    spacingCombineBtn={navigationPaddingLink}
                    spacingCombineBtnHandler={handleNavigationPaddingCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleNavigationMarginUnitsHandler}
                    spacingUnits={navigationMarginUnits} 
                    spacingDesktop={navigationDesktopMargin}
                    spacingTablet={navigationTabletMargin}
                    spacingMobile={navigationMobileMargin}
                    handleSpacingUnitHandler={handleNavigationMarginUnitChange}
                    spacingCombineBtn={navigationMarginLink}
                    spacingCombineBtnHandler={handleNavigationMarginCombineBtn}
                    setAttributes={setAttributes}
                />

                <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={navigationBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ navigationBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")} 
                    globalSwitcher={navigationBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ navigationBorderColorSwitcher: value })}
                />

                {navigationBorderColorSwitcher === 'normal' && ( 
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={navigationBorderColor}
                        setGlobalColor={(value) => setAttributes({ navigationBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {navigationBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={navigationBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ navigationBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleNavigationBorderUnitsHandler}
                    spacingUnits={navigationBorderUnits}
                    spacingDesktop={navigationDesktopBorder}
                    spacingTablet={navigationTabletBorder}
                    spacingMobile={navigationMobileBorder}
                    handleSpacingUnitHandler={handleNavigationBorderUnitChange}
                    spacingCombineBtn={navigationBorderLink}
                    spacingCombineBtnHandler={handleNavigationBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleNavigationBorderRadiusUnitsHandler}
                    spacingUnits={navigationBorderRadiusUnits}
                    spacingDesktop={navigationDesktopBorderRadius}
                    spacingTablet={navigationTabletBorderRadius} 
                    spacingMobile={navigationMobileBorderRadius}
                    handleSpacingUnitHandler={handleNavigationBorderRadiusUnitChange}
                    spacingCombineBtn={navigationBorderRadiusLink}
                    spacingCombineBtnHandler={handleNavigationBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={navigationBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ navigationBoxShadowSwitcher: value })}
                />

                {navigationBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ navigationBoxShadowValues: value })}
                        initialShadowValue={navigationBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ navigationBoxShadowCssValue: value })}
                    />
                )}

                {navigationBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ navigationBoxShadowHoverValues: value })}
                        initialShadowValue={navigationBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ navigationBoxShadowHoverCssValue: value })}
                    />
                )}
            </PanelBody>
            <PanelBody 
                title={__("Dropdown Menu Wrapper", "frontis-blocks")} 
                initialOpen={false}
            >
                <FB_Range
                    min={1}
                    max={dropDownWrapperMinWidthUnits[deviceType] === "%" ? 100 : 1000}
                    label={__("Width", "frontis-blocks")}
                    rangeValue={dropDownWrapperMinWidth}
                    onChangeHandler={(value) => setAttributes({ dropDownWrapperMinWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ dropDownWrapperMinWidthUnits: value })}
                    deviceType={deviceType}
                    units={dropDownWrapperMinWidthUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={dropDownBgColorSwitcher}  
                    setBgColorSwitcher={(value) => setAttributes({ dropDownBgColorSwitcher: value })}
                    
                    normalBackgroundType={dropDownNormalBackgroundType} 
                    setNormalBackgroundType={(value) => setAttributes({ dropDownNormalBackgroundType: value })}
                    normalClassicColor={dropDownNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ dropDownNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={dropDownNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ dropDownNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={dropDownNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ dropDownNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={dropDownNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ dropDownNormalCustomGradientInputValue: value })}
                    
                    hoverBackgroundType={dropDownHoverBackgroundType} 
                    setHoverBackgroundType={(value) => setAttributes({ dropDownHoverBackgroundType: value })}
                    hoverClassicColor={dropDownHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ dropDownHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={dropDownHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ dropDownHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={dropDownHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ dropDownHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={dropDownHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ dropDownHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}

                />

                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleDropDownPaddingUnitsHandler}  
                    spacingUnits={dropDownPaddingUnits}
                    spacingDesktop={dropDownDesktopPadding}
                    spacingTablet={dropDownTabletPadding}
                    spacingMobile={dropDownMobilePadding}
                    handleSpacingUnitHandler={handleDropDownPaddingUnitChange}
                    spacingCombineBtn={dropDownPaddingLink}
                    spacingCombineBtnHandler={handleDropDownPaddingCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleDropDownMarginUnitsHandler}
                    spacingUnits={dropDownMarginUnits} 
                    spacingDesktop={dropDownDesktopMargin}
                    spacingTablet={dropDownTabletMargin}
                    spacingMobile={dropDownMobileMargin}
                    handleSpacingUnitHandler={handleDropDownMarginUnitChange}
                    spacingCombineBtn={dropDownMarginLink}
                    spacingCombineBtnHandler={handleDropDownMarginCombineBtn}
                    setAttributes={setAttributes}
                />

                <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={dropDownBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ dropDownBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")} 
                    globalSwitcher={dropDownBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ dropDownBorderColorSwitcher: value })}
                />

                {dropDownBorderColorSwitcher === 'normal' && ( 
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={dropDownBorderColor}
                        setGlobalColor={(value) => setAttributes({ dropDownBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {dropDownBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={dropDownBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ dropDownBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleDropDownBorderUnitsHandler}
                    spacingUnits={dropDownBorderUnits}
                    spacingDesktop={dropDownDesktopBorder}
                    spacingTablet={dropDownTabletBorder}
                    spacingMobile={dropDownMobileBorder}
                    handleSpacingUnitHandler={handleDropDownBorderUnitChange}
                    spacingCombineBtn={dropDownBorderLink}
                    spacingCombineBtnHandler={handleDropDownBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleDropDownBorderRadiusUnitsHandler} 
                    spacingUnits={dropDownBorderRadiusUnits}
                    spacingDesktop={dropDownDesktopBorderRadius}
                    spacingTablet={dropDownTabletBorderRadius} 
                    spacingMobile={dropDownMobileBorderRadius}
                    handleSpacingUnitHandler={handleDropDownBorderRadiusUnitChange}
                    spacingCombineBtn={dropDownBorderRadiusLink}
                    spacingCombineBtnHandler={handleDropDownBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={dropDownBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ dropDownBoxShadowSwitcher: value })}
                />

                {dropDownBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ dropDownBoxShadowValues: value })}
                        initialShadowValue={dropDownBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ dropDownBoxShadowCssValue: value })}
                    />
                )}

                {dropDownBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ dropDownBoxShadowHoverValues: value })}
                        initialShadowValue={dropDownBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ dropDownBoxShadowHoverCssValue: value })}
                    />
                )}
            </PanelBody>
            <PanelBody 
                title={__("Dropdown Menu Item", "frontis-blocks")} 
                initialOpen={false}
            >
                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={dropDownItemTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ dropDownItemTypographyData: value })}

                    globalTypoType={dropDownItemTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            dropDownItemTypoType: value, 
                            dropDownItemTypoSwitcher: value === 'default' ? {...dropDownItemTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...dropDownItemTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={dropDownItemTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ dropDownItemTypoOption: value })}

                    fontFamily={dropDownItemFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ dropDownItemFontFamily: value, dropDownItemTypoSwitcher: {...dropDownItemTypoSwitcher, fontFamily: value && false} })}

                    fontSize={dropDownItemFontSize}
                    onChangeFontSize={(value) => setAttributes({ dropDownItemFontSize: value, dropDownItemTypoSwitcher: {...dropDownItemTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={dropDownItemFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ dropDownItemFontSizeUnits: value })}

                    fontWeight={dropDownItemFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ dropDownItemFontWeight: value, dropDownItemTypoSwitcher: {...dropDownItemTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={dropDownItemFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ dropDownItemFontStyle: value, dropDownItemTypoSwitcher: {...dropDownItemTypoSwitcher, fontStyle: value && false} })}

                    textTransform={dropDownItemTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ dropDownItemTextTransform: value, dropDownItemTypoSwitcher: {...dropDownItemTypoSwitcher, textTransform: value && false} })}

                    textDecoration={dropDownItemTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ dropDownItemTextDecoration: value, dropDownItemTypoSwitcher: {...dropDownItemTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={dropDownItemLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ dropDownItemLetterSpacing: value, dropDownItemTypoSwitcher: {...dropDownItemTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={dropDownItemLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ dropDownItemLetterSpacingUnits: value })}

                    lineHeight={dropDownItemLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ dropDownItemLineHeight: value, dropDownItemTypoSwitcher: {...dropDownItemTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={dropDownItemLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ dropDownItemLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
                <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        options={NORMAL_HOVER}
                        globalSwitcher={dropDownItemColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ dropDownItemColorSwitcher: value })}
                />
                {dropDownItemColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={dropDownItemColor}
                        setGlobalColor={(value) => setAttributes({ dropDownItemColor: value === undefined ? '' : value })}
                    />
                )}

                {dropDownItemColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={dropDownItemHoverColor}
                        setGlobalColor={(value) => setAttributes({ dropDownItemHoverColor: value === undefined ? '' : value })}
                    />
                )}
                <FB_SwitcherControl
                        label={__("Active Color", "frontis-blocks")}
                        options={NORMAL_HOVER}
                        globalSwitcher={dropDownItemActiveColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ dropDownItemActiveColorSwitcher: value })}
                />

                {dropDownItemActiveColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Color", "frontis-blocks")}
                        globalColor={dropDownItemActiveColor}
                        setGlobalColor={(value) => setAttributes({ dropDownItemActiveColor: value === undefined ? '' : value })}
                    />
                )}

                {dropDownItemActiveColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={dropDownItemActiveHoverColor}
                        setGlobalColor={(value) => setAttributes({ dropDownItemActiveHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleDropDownItemPaddingUnitsHandler}  
                    spacingUnits={dropDownItemPaddingUnits}
                    spacingDesktop={dropDownItemDesktopPadding}
                    spacingTablet={dropDownItemTabletPadding}
                    spacingMobile={dropDownItemMobilePadding}
                    handleSpacingUnitHandler={handleDropDownItemPaddingUnitChange}
                    spacingCombineBtn={dropDownItemPaddingLink}
                    spacingCombineBtnHandler={handleDropDownItemPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleDropDownItemMarginUnitsHandler}
                    spacingUnits={dropDownItemMarginUnits} 
                    spacingDesktop={dropDownItemDesktopMargin}
                    spacingTablet={dropDownItemTabletMargin}
                    spacingMobile={dropDownItemMobileMargin}
                    handleSpacingUnitHandler={handleDropDownItemMarginUnitChange}
                    spacingCombineBtn={dropDownItemMarginLink}
                    spacingCombineBtnHandler={handleDropDownItemMarginCombineBtn}
                    setAttributes={setAttributes}
                />

                <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={dropDownItemBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ dropDownItemBorder: value })}
                />

                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")} 
                    globalSwitcher={dropDownItemBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ dropDownItemBorderColorSwitcher: value })}
                />

                {dropDownItemBorderColorSwitcher === 'normal' && ( 
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={dropDownItemBorderColor}
                        setGlobalColor={(value) => setAttributes({ dropDownItemBorderColor: value === undefined ? '' : value })}
                    />
                )}

                {dropDownItemBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={dropDownItemBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ dropDownItemBorderHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleDropDownItemBorderUnitsHandler}
                    spacingUnits={dropDownItemBorderUnits}
                    spacingDesktop={dropDownItemDesktopBorder}
                    spacingTablet={dropDownItemTabletBorder}
                    spacingMobile={dropDownItemMobileBorder}
                    handleSpacingUnitHandler={handleDropDownItemBorderUnitChange}
                    spacingCombineBtn={dropDownItemBorderLink}
                    spacingCombineBtnHandler={handleDropDownItemBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing 
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleDropDownItemBorderRadiusUnitsHandler} 
                    spacingUnits={dropDownItemBorderRadiusUnits}
                    spacingDesktop={dropDownItemDesktopBorderRadius}
                    spacingTablet={dropDownItemTabletBorderRadius} 
                    spacingMobile={dropDownItemMobileBorderRadius}
                    handleSpacingUnitHandler={handleDropDownItemBorderRadiusUnitChange}
                    spacingCombineBtn={dropDownItemBorderRadiusLink}
                    spacingCombineBtnHandler={handleDropDownItemBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody
                title={__("Dropdown Icon", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_Range
                    min={1}
                    max={dropDownIconSizeUnits[deviceType] === "%" ? 100 : 100}
                    label={__("Size", "frontis-blocks")}
                    rangeValue={dropDownIconSize}
                    onChangeHandler={(value) => setAttributes({ dropDownIconSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ dropDownIconSizeUnits: value })}
                    deviceType={deviceType}
                    units={dropDownIconSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        options={NORMAL_HOVER}
                        globalSwitcher={dropDownIconColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ dropDownIconColorSwitcher: value })}
                />
                {dropDownIconColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={dropDownIconColor}
                        setGlobalColor={(value) => setAttributes({ dropDownIconColor: value === undefined ? '' : value })}
                    />
                )}

                {dropDownIconColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={dropDownIconHoverColor}
                        setGlobalColor={(value) => setAttributes({ dropDownIconHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleDropDownIconMarginUnitsHandler}
                    spacingUnits={dropDownIconMarginUnits} 
                    spacingDesktop={dropDownIconDesktopMargin}
                    spacingTablet={dropDownIconTabletMargin}
                    spacingMobile={dropDownIconMobileMargin}
                    handleSpacingUnitHandler={handleDropDownIconMarginUnitChange}
                    spacingCombineBtn={dropDownIconMarginLink}
                    spacingCombineBtnHandler={handleDropDownIconMarginCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody
                title={__("Hamburger Menu", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_Range
                    min={1}
                    max={hamburgerMenuIconSizeUnits[deviceType] === "%" ? 100 : 100}
                    label={__("Icon Size", "frontis-blocks")}
                    rangeValue={hamburgerMenuIconSize}
                    onChangeHandler={(value) => setAttributes({ hamburgerMenuIconSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ hamburgerMenuIconSizeUnits: value })}
                    deviceType={deviceType}
                    units={hamburgerMenuIconSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_SwitcherControl
                    label={__("Icon Color", "frontis-blocks")}
                    globalSwitcher={hamburgerMenuIconColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ hamburgerMenuIconColorSwitcher: value })}
                />

                {hamburgerMenuIconColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={hamburgerMenuIconColor}
                        setGlobalColor={(value) => setAttributes({ hamburgerMenuIconColor: value === undefined ? '' : value })}
                    />
                )}

                {hamburgerMenuIconColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={hamburgerMenuIconHoverColor}
                        setGlobalColor={(value) => setAttributes({ hamburgerMenuIconHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Spacing 
                    label={__("Icon Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleHamburgerMenuIconPaddingUnitsHandler}  
                    spacingUnits={hamburgerMenuIconPaddingUnits}
                    spacingDesktop={hamburgerMenuIconDesktopPadding}
                    spacingTablet={hamburgerMenuIconTabletPadding}
                    spacingMobile={hamburgerMenuIconMobilePadding}
                    handleSpacingUnitHandler={handleHamburgerMenuIconPaddingUnitChange}
                    spacingCombineBtn={hamburgerMenuIconPaddingLink}
                    spacingCombineBtnHandler={handleHamburgerMenuIconPaddingCombineBtn}
                    setAttributes={setAttributes}
                />

            </PanelBody>
            <PanelBody
                title={__("Hamburger Menu Popup", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={hamburgerMenuPopupBgColorSwitcher}  
                    setBgColorSwitcher={(value) => setAttributes({ hamburgerMenuPopupBgColorSwitcher: value })}
                    
                    normalBackgroundType={hamburgerMenuPopupNormalBackgroundType} 
                    setNormalBackgroundType={(value) => setAttributes({ hamburgerMenuPopupNormalBackgroundType: value })}
                    normalClassicColor={hamburgerMenuPopupNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ hamburgerMenuPopupNormalClassicColor: value === undefined ? '' : value })}
                    normalGradientColor={hamburgerMenuPopupNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ hamburgerMenuPopupNormalGradientColor: value === undefined ? null : value })}
                    normalCustomGradientSwitcher={hamburgerMenuPopupNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ hamburgerMenuPopupNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={hamburgerMenuPopupNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ hamburgerMenuPopupNormalCustomGradientInputValue: value })}
                    
                    hoverBackgroundType={hamburgerMenuPopupHoverBackgroundType} 
                    setHoverBackgroundType={(value) => setAttributes({ hamburgerMenuPopupHoverBackgroundType: value })}
                    hoverClassicColor={hamburgerMenuPopupHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ hamburgerMenuPopupHoverClassicColor: value === undefined ? '' : value })}
                    hoverGradientColor={hamburgerMenuPopupHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ hamburgerMenuPopupHoverGradientColor: value === undefined ? null : value })}
                    hoverCustomGradientSwitcher={hamburgerMenuPopupHoverCustomGradientSwitcher}
                    setHoverCustomGradientSwitcher={(value) => setAttributes({ hamburgerMenuPopupHoverCustomGradientSwitcher: value })}
                    hoverCustomGradientInputValue={hamburgerMenuPopupHoverCustomGradientInputValue}
                    setHoverCustomGradientInputValue={(value) => setAttributes({ hamburgerMenuPopupHoverCustomGradientInputValue: value })}

                    isBackgroundImage={false}

                />

                <FB_Spacing 
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleHamburgerMenuPopupPaddingUnitsHandler}  
                    spacingUnits={hamburgerMenuPopupPaddingUnits}
                    spacingDesktop={hamburgerMenuPopupDesktopPadding}
                    spacingTablet={hamburgerMenuPopupTabletPadding}
                    spacingMobile={hamburgerMenuPopupMobilePadding}
                    handleSpacingUnitHandler={handleHamburgerMenuPopupPaddingUnitChange}
                    spacingCombineBtn={hamburgerMenuPopupPaddingLink}
                    spacingCombineBtnHandler={handleHamburgerMenuPopupPaddingCombineBtn}
                    setAttributes={setAttributes}
                />


                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={hamburgerMenuPopupGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ hamburgerMenuPopupGlobalTypographyData: value })}

                    globalTypoType={hamburgerMenuPopupGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            hamburgerMenuPopupGlobalTypoType: value, 
                            hamburgerMenuPopupGlobalTypoSwitcher: value === 'default' ? {...hamburgerMenuPopupGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...hamburgerMenuPopupGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={hamburgerMenuPopupGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ hamburgerMenuPopupGlobalTypoOption: value })}

                    fontFamily={hamburgerMenuPopupFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ hamburgerMenuPopupFontFamily: value, hamburgerMenuPopupGlobalTypoSwitcher: {...hamburgerMenuPopupGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={hamburgerMenuPopupFontSize}
                    onChangeFontSize={(value) => setAttributes({ hamburgerMenuPopupFontSize: value, hamburgerMenuPopupGlobalTypoSwitcher: {...hamburgerMenuPopupGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={hamburgerMenuPopupFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ hamburgerMenuPopupFontSizeUnits: value })}

                    fontWeight={hamburgerMenuPopupFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ hamburgerMenuPopupFontWeight: value, hamburgerMenuPopupGlobalTypoSwitcher: {...hamburgerMenuPopupGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={hamburgerMenuPopupFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ hamburgerMenuPopupFontStyle: value, hamburgerMenuPopupGlobalTypoSwitcher: {...hamburgerMenuPopupGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={hamburgerMenuPopupTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ hamburgerMenuPopupTextTransform: value, hamburgerMenuPopupGlobalTypoSwitcher: {...hamburgerMenuPopupGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={hamburgerMenuPopupTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ hamburgerMenuPopupTextDecoration: value, hamburgerMenuPopupGlobalTypoSwitcher: {...hamburgerMenuPopupGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={hamburgerMenuPopupLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ hamburgerMenuPopupLetterSpacing: value, hamburgerMenuPopupGlobalTypoSwitcher: {...hamburgerMenuPopupGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={hamburgerMenuPopupLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ hamburgerMenuPopupLetterSpacingUnits: value })}

                    lineHeight={hamburgerMenuPopupLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ hamburgerMenuPopupLineHeight: value, hamburgerMenuPopupGlobalTypoSwitcher: {...hamburgerMenuPopupGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={hamburgerMenuPopupLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ hamburgerMenuPopupLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
                <FB_SwitcherControl
                        label={__("Color", "frontis-blocks")}
                        options={NORMAL_HOVER}
                        globalSwitcher={hamburgerMenuPopupColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ hamburgerMenuPopupColorSwitcher: value })}
                />
                {hamburgerMenuPopupColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={hamburgerMenuPopupColor}
                        setGlobalColor={(value) => setAttributes({ hamburgerMenuPopupColor: value === undefined ? '' : value })}
                    />
                )}

                {hamburgerMenuPopupColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={hamburgerMenuPopupHoverColor}
                        setGlobalColor={(value) => setAttributes({ hamburgerMenuPopupHoverColor: value === undefined ? '' : value })}
                    />
                )}

                <FB_Range
                    min={1}
                    max={hamburgerMenuCloseIconSizeUnits[deviceType] === "%" ? 100 : 100}
                    label={__("Close Icon Size", "frontis-blocks")}
                    rangeValue={hamburgerMenuCloseIconSize}
                    onChangeHandler={(value) => setAttributes({ hamburgerMenuCloseIconSize: value })}
                    rangeUnitHandler={(value) => setAttributes({ hamburgerMenuCloseIconSizeUnits: value })}
                    deviceType={deviceType}
                    units={hamburgerMenuCloseIconSizeUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />

                <FB_SwitcherControl
                        label={__("Close Icon Color", "frontis-blocks")}
                        options={NORMAL_HOVER}
                        globalSwitcher={hamburgerMenuCloseIconColorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({ hamburgerMenuCloseIconColorSwitcher: value })}
                />
                {hamburgerMenuCloseIconColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={hamburgerMenuCloseIconColor}
                        setGlobalColor={(value) => setAttributes({ hamburgerMenuCloseIconColor: value === undefined ? '' : value })}
                    />
                )}
                {hamburgerMenuCloseIconColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={hamburgerMenuCloseIconHoverColor}
                        setGlobalColor={(value) => setAttributes({ hamburgerMenuCloseIconHoverColor: value === undefined ? '' : value })}
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
            <div className="fb-setting-advanced-tab-wrapper">
                <div className="fb-setting-inner-wrapper">
                    <PanelBody
                        title={__("Layout", "frontis-blocks")}
                        initialOpen={true}
                        className='fb-setting-layout-header' 
                    >
                        <FB_Range
                            min={0}
                            max={10000000}
                            label={__("Z Index", "frontis-blocks")}
                            rangeValue={navigationGlobalZIndex}
                            onChangeHandler={(value) => setAttributes({ navigationGlobalZIndex: value === 0 ? undefined : value })}
                            deviceType={deviceType}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={""}
                            isRangeUnit={false}

                        />

                        <SelectControl
                            label={__("Overflow", "frontis-blocks")}
                            value={navigationOverflow}
                            options={OVERFLOW_OP}
                            onChange={(value) => setAttributes({ navigationOverflow: value })}
                        />

                        <FB_PositionControl
                            deviceType={deviceType}
                            positionType={navigationPositionType}
                            setPositionType={(value) => setAttributes({ navigationPositionType: value })}
                                                                            
                            HZOrientationType={navigationHZOrientationType}
                            setHZOrientationType={(value) =>
                                setAttributes({ navigationHZOrientationType: value })
                            }
                            VROrientationType={navigationVROrientationType}
                            setVROrientationType={(value) =>
                                setAttributes({ navigationVROrientationType: value })
                            }
                                                                                
                            HZLeftOffset={navigationHZLeftOffset}
                            setHZLeftOffset={(value) => setAttributes({ navigationHZLeftOffset: value })}
                            HZLeftOffsetUnits={navigationHZLeftOffsetUnits}
                            setHZLeftOffsetUnits={(value) => setAttributes({ navigationHZLeftOffsetUnits: value })}
                            HZRightOffset={navigationHZRightOffset}
                            setHZRightOffset={(value) => setAttributes({ navigationHZRightOffset: value })}
                            HZRightOffsetUnits={navigationHZRightOffsetUnits}
                            setHZRightOffsetUnits={(value) => setAttributes({ navigationHZRightOffsetUnits: value })}
                                                                            
                            VRTopOffset={navigationVRTopOffset}
                            setVRTopOffset={(value) => setAttributes({ navigationVRTopOffset: value })}
                            VRTopOffsetUnits={navigationVRTopOffsetUnits}
                            setVRTopOffsetUnits={(value) => setAttributes({ navigationVRTopOffsetUnits: value })}
                            VRBottomOffset={navigationVRBottomOffset}
                            setVRBottomOffset={(value) => setAttributes({ navigationVRBottomOffset: value })}
                            VRBottomOffsetUnits={navigationVRBottomOffsetUnits}
                            setVRBottomOffsetUnits={(value) => setAttributes({ navigationVRBottomOffsetUnits: value })}

                            setAttributes={setAttributes}
                        />

                        <FB_InputControl
                            label={__("CSS ID", "frontis-blocks")}
                            value={navigationGlobalWraperID}
                            onChangeValue={(value) => setAttributes({ navigationGlobalWraperID: value })}
                            helpText={__("Add an ID to the block wrapper.", "frontis-blocks")}
                        />

                        <FB_InputControl
                            label={__("CSS Class", "frontis-blocks")}
                            value={navigationGlobalWraperClass}
                            onChangeValue={(value) => setAttributes({ navigationGlobalWraperClass: value })}
                            helpText={__("Separate with spaces key.", "frontis-blocks")}
                        />
                        
                    </PanelBody>

                    <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                        <FB_Spacing 
                            label={__("Padding", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalPaddingUnitsHandler}  
                            spacingUnits={navigationGlobalPaddingUnits}
                            spacingDesktop={navigationGlobalPaddingDesktop}
                            spacingTablet={navigationGlobalPaddingTablet}
                            spacingMobile={navigationGlobalPaddingMobile}
                            handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                            spacingCombineBtn={navigationGlobalPaddingLink}
                            spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                            setAttributes={setAttributes}
                        />
                        <FB_Spacing 
                            label={__("Margin", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                            spacingUnits={navigationGlobalMarginUnits} 
                            spacingDesktop={navigationGlobalMarginDesktop}
                            spacingTablet={navigationGlobalMarginTablet}
                            spacingMobile={navigationGlobalMarginMobile}
                            handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                            spacingCombineBtn={navigationGlobalMarginLink}
                            spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                            setAttributes={setAttributes}
                        />
                    </PanelBody>

                    <PanelBody title="Background Color" initialOpen={false} >

                        <FB_BackgroundColorControl
                            label={__("Background Color", "frontis-blocks")}
                            bgColorSwitcher={navigationGlobalBgColorSwitcher}  
                            setBgColorSwitcher={(value) => setAttributes({ navigationGlobalBgColorSwitcher: value })}
                            
                            normalBackgroundType={navigationGlobalNormalBackgroundType} 
                            setNormalBackgroundType={(value) => setAttributes({ navigationGlobalNormalBackgroundType: value })}
                            normalClassicColor={navigationGlobalNormalClassicColor}
                            setNormalClassicColor={(value) => setAttributes({ navigationGlobalNormalClassicColor: value === undefined ? '' : value })}
                            normalGradientColor={navigationGlobalNormalGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ navigationGlobalNormalGradientColor: value === undefined ? null : value })}
                            normalCustomGradientSwitcher={navigationGlobalNormalCustomGradientSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ navigationGlobalNormalCustomGradientSwitcher: value })}
                            normalCustomGradientInputValue={navigationGlobalNormalCustomGradientInputValue}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ navigationGlobalNormalCustomGradientInputValue: value })}
                            
                            hoverBackgroundType={navigationGlobalHoverBackgroundType} 
                            setHoverBackgroundType={(value) => setAttributes({ navigationGlobalHoverBackgroundType: value })}
                            hoverClassicColor={navigationGlobalHoverClassicColor}
                            setHoverClassicColor={(value) => setAttributes({ navigationGlobalHoverClassicColor: value === undefined ? '' : value })}
                            hoverGradientColor={navigationGlobalHoverGradientColor} 
                            setHoverGradientColor={(value) => setAttributes({ navigationGlobalHoverGradientColor: value === undefined ? null : value })}
                            hoverCustomGradientSwitcher={navigationGlobalHoverCustomGradientSwitcher}
                            setHoverCustomGradientSwitcher={(value) => setAttributes({ navigationGlobalHoverCustomGradientSwitcher: value })}
                            hoverCustomGradientInputValue={navigationGlobalHoverCustomGradientInputValue}
                            setHoverCustomGradientInputValue={(value) => setAttributes({ navigationGlobalHoverCustomGradientInputValue: value })}

                            isBackgroundImage={false}

                        />
                    </PanelBody>
                    <PanelBody title={__("Border and Shadow", "frontis-blocks")} initialOpen={false}>

                        <SelectControl
                                label={__("Border Style", "frontis-blocks")}
                                value={navigationGlobalBorder}
                                options={BORDER_STYLES}
                                onChange={(value) => setAttributes({ navigationGlobalBorder: value })}
                        />

                        <FB_SwitcherControl
                            label={__("Border Color", "frontis-blocks")} 
                            globalSwitcher={navigationGlobalBorderColorSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ navigationGlobalBorderColorSwitcher: value })}
                        />

                        {navigationGlobalBorderColorSwitcher === 'normal' && (
                            <FB_ColorControl
                                label={__("Normal Color", "frontis-blocks")}
                                globalColor={navigationGlobalBorderColor}
                                setGlobalColor={(value) => setAttributes({ navigationGlobalBorderColor: value === undefined ? '' : value })}
                            />
                        )}

                        {navigationGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={navigationGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ navigationGlobalBorderHoverColor: value === undefined ? '' : value })}
                            />
                        )}

                        <FB_Spacing 
                            label={__("Border", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                            spacingUnits={navigationGlobalBorderUnits}
                            spacingDesktop={navigationGlobalBorderDesktop}
                            spacingTablet={navigationGlobalBorderTablet}
                            spacingMobile={navigationGlobalBorderMobile}
                            handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                            spacingCombineBtn={navigationGlobalBorderLink}
                            spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_Spacing 
                            label={__("Border Radius", "frontis-blocks")}
                            deviceType={deviceType}
                            spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                            spacingUnits={navigationGlobalBorderRadiusUnits}
                            spacingDesktop={navigationGlobalBorderRadiusDesktop}
                            spacingTablet={navigationGlobalBorderRadiusTablet}
                            spacingMobile={navigationGlobalBorderRadiusMobile}
                            handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                            spacingCombineBtn={navigationGlobalBorderRadiusLink}
                            spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                            setAttributes={setAttributes}
                        />

                        <FB_SwitcherControl
                            label={__("Box Shadow", "frontis-blocks")}
                            globalSwitcher={navigationGlobalBoxShadowSwitcher}
                            setGlobalSwitcher={(value) => setAttributes({ navigationGlobalBoxShadowSwitcher: value })}
                        />

                        {navigationGlobalBoxShadowSwitcher === 'normal' && (
                            <FB_BoxShadowControl
                                label={__("Normal Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ navigationGlobalBoxShadowValues: value })}
                                initialShadowValue={navigationGlobalBoxShadowValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ navigationGlobalBoxShadowCssValue: value })}
                            />
                        )}

                        {navigationGlobalBoxShadowSwitcher === 'hover' && (
                            <FB_BoxShadowControl
                                label={__("Hover Shadow", "frontis-blocks")}
                                onBoxShadowChange={(value) => setAttributes({ navigationGlobalBoxShadowHoverValues: value })}
                                initialShadowValue={navigationGlobalBoxShadowHoverValues}
                                onBoxShadowStyleChange={(value) => setAttributes({ navigationGlobalBoxShadowHoverCssValue: value })}
                            />
                        )}

                    </PanelBody>

                    <PanelBody
                        title={__("Responsive Control", "frontis-blocks")}
                        initialOpen={false}
                        className="fb-setting-responsive-control-wrapper"
                    >
                        <FB_VisibilityControl
                            desktopValue={navigationDesktopSwitcher}  
                            setDesktopValue={(value) => setAttributes({ navigationDesktopSwitcher: value })}

                            tabletValue={navigationTabletSwitcher}
                            setTabletValue={(value) => setAttributes({ navigationTabletSwitcher: value })}

                            mobileValue={navigationMobileSwitcher}
                            setMobileValue={(value) => setAttributes({ navigationMobileSwitcher: value })}
                        />
                    </PanelBody>

                    <PanelBody
                        title={__("Custom CSS", "frontis-blocks")}
                        initialOpen={false}
                    >
                        <FB_CustomCSSEditor  
                            value={navigationGlobalCustomCSS} 
                            onChangeValue={(value) => setAttributes({ navigationGlobalCustomCSS: value })}
                        />
                    </PanelBody>
                </div>
            </div>
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