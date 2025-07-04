import { __ } from '@wordpress/i18n';
import { useEffect, useMemo } from '@wordpress/element';
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
import loadGoogleFont from '@Utils/loadGoogleFont';
import FB_InputControl from '@Components/input-control';
import FB_CustomCSSEditor from '@Components/custom-css-editor';
import getCustomCss from '@Utils/getCustomCss';
import {useDeviceType} from "@Config/displayType";
import FB_PositionControl from '@Components/position-control';
import FB_VisibilityControl from '@Components/visibility-control';

export default function Inspector ({ attributes, setAttributes,  clientId}) {
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

        /** Start Navigation Typography */
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

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-advanced-navigation-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

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
	const navigationDesktopPaddingWidth    = `${navigationDesktopPadding.top}${navigationPaddingUnits.Desktop} ${navigationDesktopPadding.right}${navigationPaddingUnits.Desktop} ${navigationDesktopPadding.bottom}${navigationPaddingUnits.Desktop} ${navigationDesktopPadding.left}${navigationPaddingUnits.Desktop}`;
	const navigationTabletPaddingWidth     = `${navigationTabletPadding.top}${navigationPaddingUnits.Tablet} ${navigationTabletPadding.right}${navigationPaddingUnits.Tablet} ${navigationTabletPadding.bottom}${navigationPaddingUnits.Tablet} ${navigationTabletPadding.left}${navigationPaddingUnits.Tablet}`;
	const navigationMobilePaddingWidth     = `${navigationMobilePadding.top}${navigationPaddingUnits.Mobile} ${navigationMobilePadding.right}${navigationPaddingUnits.Mobile} ${navigationMobilePadding.bottom}${navigationPaddingUnits.Mobile} ${navigationMobilePadding.left}${navigationPaddingUnits.Mobile}`;
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

	const navigationDesktopMarginWidth = `${navigationDesktopMargin.top}${navigationMarginUnits.Desktop} ${navigationDesktopMargin.right}${navigationMarginUnits.Desktop} ${navigationDesktopMargin.bottom}${navigationMarginUnits.Desktop} ${navigationDesktopMargin.left}${navigationMarginUnits.Desktop}`;
	const navigationTabletMarginWidth = `${navigationTabletMargin.top}${navigationMarginUnits.Tablet} ${navigationTabletMargin.right}${navigationMarginUnits.Tablet} ${navigationTabletMargin.bottom}${navigationMarginUnits.Tablet} ${navigationTabletMargin.left}${navigationMarginUnits.Tablet}`;
	const navigationMobileMarginWidth = `${navigationMobileMargin.top}${navigationMarginUnits.Mobile} ${navigationMobileMargin.right}${navigationMarginUnits.Mobile} ${navigationMobileMargin.bottom}${navigationMarginUnits.Mobile} ${navigationMobileMargin.left}${navigationMarginUnits.Mobile}`;
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
	const navigationDesktopBorderWidth = `${navigationDesktopBorder.top}${navigationBorderUnits.Desktop} ${navigationDesktopBorder.right}${navigationBorderUnits.Desktop} ${navigationDesktopBorder.bottom}${navigationBorderUnits.Desktop} ${navigationDesktopBorder.left}${navigationBorderUnits.Desktop}`;
	const navigationTabletBorderWidth = `${navigationTabletBorder.top}${navigationBorderUnits.Tablet} ${navigationTabletBorder.right}${navigationBorderUnits.Tablet} ${navigationTabletBorder.bottom}${navigationBorderUnits.Tablet} ${navigationTabletBorder.left}${navigationBorderUnits.Tablet}`;
	const navigationMobileBorderWidth = `${navigationMobileBorder.top}${navigationBorderUnits.Mobile} ${navigationMobileBorder.right}${navigationBorderUnits.Mobile} ${navigationMobileBorder.bottom}${navigationBorderUnits.Mobile} ${navigationMobileBorder.left}${navigationBorderUnits.Mobile}`;
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
	const navigationDesktopBorderRadiusWidth = `${navigationDesktopBorderRadius.top}${navigationBorderRadiusUnits.Desktop} ${navigationDesktopBorderRadius.right}${navigationBorderRadiusUnits.Desktop} ${navigationDesktopBorderRadius.bottom}${navigationBorderRadiusUnits.Desktop} ${navigationDesktopBorderRadius.left}${navigationBorderRadiusUnits.Desktop}`;
	const navigationTabletBorderRadiusWidth = `${navigationTabletBorderRadius.top}${navigationBorderRadiusUnits.Tablet} ${navigationTabletBorderRadius.right}${navigationBorderRadiusUnits.Tablet} ${navigationTabletBorderRadius.bottom}${navigationBorderRadiusUnits.Tablet} ${navigationTabletBorderRadius.left}${navigationBorderRadiusUnits.Tablet}`;
	const navigationMobileBorderRadiusWidth = `${navigationMobileBorderRadius.top}${navigationBorderRadiusUnits.Mobile} ${navigationMobileBorderRadius.right}${navigationBorderRadiusUnits.Mobile} ${navigationMobileBorderRadius.bottom}${navigationBorderRadiusUnits.Mobile} ${navigationMobileBorderRadius.left}${navigationBorderRadiusUnits.Mobile}`;
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
	const dropDownDesktopPaddingWidth    = `${dropDownDesktopPadding.top}${dropDownPaddingUnits.Desktop} ${dropDownDesktopPadding.right}${dropDownPaddingUnits.Desktop} ${dropDownDesktopPadding.bottom}${dropDownPaddingUnits.Desktop} ${dropDownDesktopPadding.left}${dropDownPaddingUnits.Desktop}`;
	const dropDownTabletPaddingWidth     = `${dropDownTabletPadding.top}${dropDownPaddingUnits.Tablet} ${dropDownTabletPadding.right}${dropDownPaddingUnits.Tablet} ${dropDownTabletPadding.bottom}${dropDownPaddingUnits.Tablet} ${dropDownTabletPadding.left}${dropDownPaddingUnits.Tablet}`;
	const dropDownMobilePaddingWidth     = `${dropDownMobilePadding.top}${dropDownPaddingUnits.Mobile} ${dropDownMobilePadding.right}${dropDownPaddingUnits.Mobile} ${dropDownMobilePadding.bottom}${dropDownPaddingUnits.Mobile} ${dropDownMobilePadding.left}${dropDownPaddingUnits.Mobile}`;
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

	const dropDownDesktopMarginWidth = `${dropDownDesktopMargin.top}${dropDownMarginUnits.Desktop} ${dropDownDesktopMargin.right}${dropDownMarginUnits.Desktop} ${dropDownDesktopMargin.bottom}${dropDownMarginUnits.Desktop} ${dropDownDesktopMargin.left}${dropDownMarginUnits.Desktop}`;
	const dropDownTabletMarginWidth = `${dropDownTabletMargin.top}${dropDownMarginUnits.Tablet} ${dropDownTabletMargin.right}${dropDownMarginUnits.Tablet} ${dropDownTabletMargin.bottom}${dropDownMarginUnits.Tablet} ${dropDownTabletMargin.left}${dropDownMarginUnits.Tablet}`;
	const dropDownMobileMarginWidth = `${dropDownMobileMargin.top}${dropDownMarginUnits.Mobile} ${dropDownMobileMargin.right}${dropDownMarginUnits.Mobile} ${dropDownMobileMargin.bottom}${dropDownMarginUnits.Mobile} ${dropDownMobileMargin.left}${dropDownMarginUnits.Mobile}`;
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
	const dropDownDesktopBorderWidth = `${dropDownDesktopBorder.top}${dropDownBorderUnits.Desktop} ${dropDownDesktopBorder.right}${dropDownBorderUnits.Desktop} ${dropDownDesktopBorder.bottom}${dropDownBorderUnits.Desktop} ${dropDownDesktopBorder.left}${dropDownBorderUnits.Desktop}`;
	const dropDownTabletBorderWidth = `${dropDownTabletBorder.top}${dropDownBorderUnits.Tablet} ${dropDownTabletBorder.right}${dropDownBorderUnits.Tablet} ${dropDownTabletBorder.bottom}${dropDownBorderUnits.Tablet} ${dropDownTabletBorder.left}${dropDownBorderUnits.Tablet}`;
	const dropDownMobileBorderWidth = `${dropDownMobileBorder.top}${dropDownBorderUnits.Mobile} ${dropDownMobileBorder.right}${dropDownBorderUnits.Mobile} ${dropDownMobileBorder.bottom}${dropDownBorderUnits.Mobile} ${dropDownMobileBorder.left}${dropDownBorderUnits.Mobile}`;
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
	const dropDownDesktopBorderRadiusWidth = `${dropDownDesktopBorderRadius.top}${dropDownBorderRadiusUnits.Desktop} ${dropDownDesktopBorderRadius.right}${dropDownBorderRadiusUnits.Desktop} ${dropDownDesktopBorderRadius.bottom}${dropDownBorderRadiusUnits.Desktop} ${dropDownDesktopBorderRadius.left}${dropDownBorderRadiusUnits.Desktop}`;
	const dropDownTabletBorderRadiusWidth = `${dropDownTabletBorderRadius.top}${dropDownBorderRadiusUnits.Tablet} ${dropDownTabletBorderRadius.right}${dropDownBorderRadiusUnits.Tablet} ${dropDownTabletBorderRadius.bottom}${dropDownBorderRadiusUnits.Tablet} ${dropDownTabletBorderRadius.left}${dropDownBorderRadiusUnits.Tablet}`;
	const dropDownMobileBorderRadiusWidth = `${dropDownMobileBorderRadius.top}${dropDownBorderRadiusUnits.Mobile} ${dropDownMobileBorderRadius.right}${dropDownBorderRadiusUnits.Mobile} ${dropDownMobileBorderRadius.bottom}${dropDownBorderRadiusUnits.Mobile} ${dropDownMobileBorderRadius.left}${dropDownBorderRadiusUnits.Mobile}`;
	/** End Dropdown Menu Border Radius */  

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
	const navigationGlobalDesktopPaddingWidth    = `${navigationGlobalPaddingDesktop.top}${navigationGlobalPaddingUnits.Desktop} ${navigationGlobalPaddingDesktop.right}${navigationGlobalPaddingUnits.Desktop} ${navigationGlobalPaddingDesktop.bottom}${navigationGlobalPaddingUnits.Desktop} ${navigationGlobalPaddingDesktop.left}${navigationGlobalPaddingUnits.Desktop}`;
	const navigationGlobalTabletPaddingWidth     = `${navigationGlobalPaddingTablet.top}${navigationGlobalPaddingUnits.Tablet} ${navigationGlobalPaddingTablet.right}${navigationGlobalPaddingUnits.Tablet} ${navigationGlobalPaddingTablet.bottom}${navigationGlobalPaddingUnits.Tablet} ${navigationGlobalPaddingTablet.left}${navigationGlobalPaddingUnits.Tablet}`;
	const navigationGlobalMobilePaddingWidth     = `${navigationGlobalPaddingMobile.top}${navigationGlobalPaddingUnits.Mobile} ${navigationGlobalPaddingMobile.right}${navigationGlobalPaddingUnits.Mobile} ${navigationGlobalPaddingMobile.bottom}${navigationGlobalPaddingUnits.Mobile} ${navigationGlobalPaddingMobile.left}${navigationGlobalPaddingUnits.Mobile}`;
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

	const navigationGlobalDesktopMarginWidth = `${navigationGlobalMarginDesktop.top}${navigationGlobalMarginUnits.Desktop} ${navigationGlobalMarginDesktop.right}${navigationGlobalMarginUnits.Desktop} ${navigationGlobalMarginDesktop.bottom}${navigationGlobalMarginUnits.Desktop} ${navigationGlobalMarginDesktop.left}${navigationGlobalMarginUnits.Desktop}`;
	const navigationGlobalTabletMarginWidth = `${navigationGlobalMarginTablet.top}${navigationGlobalMarginUnits.Tablet} ${navigationGlobalMarginTablet.right}${navigationGlobalMarginUnits.Tablet} ${navigationGlobalMarginTablet.bottom}${navigationGlobalMarginUnits.Tablet} ${navigationGlobalMarginTablet.left}${navigationGlobalMarginUnits.Tablet}`;
	const navigationGlobalMobileMarginWidth = `${navigationGlobalMarginMobile.top}${navigationGlobalMarginUnits.Mobile} ${navigationGlobalMarginMobile.right}${navigationGlobalMarginUnits.Mobile} ${navigationGlobalMarginMobile.bottom}${navigationGlobalMarginUnits.Mobile} ${navigationGlobalMarginMobile.left}${navigationGlobalMarginUnits.Mobile}`;
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
	const navigationGlobalDesktopBorderWidth = `${navigationGlobalBorderDesktop.top}${navigationGlobalBorderUnits.Desktop} ${navigationGlobalBorderDesktop.right}${navigationGlobalBorderUnits.Desktop} ${navigationGlobalBorderDesktop.bottom}${navigationGlobalBorderUnits.Desktop} ${navigationGlobalBorderDesktop.left}${navigationGlobalBorderUnits.Desktop}`;
	const navigationGlobalTabletBorderWidth = `${navigationGlobalBorderTablet.top}${navigationGlobalBorderUnits.Tablet} ${navigationGlobalBorderTablet.right}${navigationGlobalBorderUnits.Tablet} ${navigationGlobalBorderTablet.bottom}${navigationGlobalBorderUnits.Tablet} ${navigationGlobalBorderTablet.left}${navigationGlobalBorderUnits.Tablet}`;
	const navigationGlobalMobileBorderWidth = `${navigationGlobalBorderMobile.top}${navigationGlobalBorderUnits.Mobile} ${navigationGlobalBorderMobile.right}${navigationGlobalBorderUnits.Mobile} ${navigationGlobalBorderMobile.bottom}${navigationGlobalBorderUnits.Mobile} ${navigationGlobalBorderMobile.left}${navigationGlobalBorderUnits.Mobile}`;
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
	const navigationGlobalDesktopBorderRadiusWidth = `${navigationGlobalBorderRadiusDesktop.top}${navigationGlobalBorderRadiusUnits.Desktop} ${navigationGlobalBorderRadiusDesktop.right}${navigationGlobalBorderRadiusUnits.Desktop} ${navigationGlobalBorderRadiusDesktop.bottom}${navigationGlobalBorderRadiusUnits.Desktop} ${navigationGlobalBorderRadiusDesktop.left}${navigationGlobalBorderRadiusUnits.Desktop}`;
	const navigationGlobalTabletBorderRadiusWidth = `${navigationGlobalBorderRadiusTablet.top}${navigationGlobalBorderRadiusUnits.Tablet} ${navigationGlobalBorderRadiusTablet.right}${navigationGlobalBorderRadiusUnits.Tablet} ${navigationGlobalBorderRadiusTablet.bottom}${navigationGlobalBorderRadiusUnits.Tablet} ${navigationGlobalBorderRadiusTablet.left}${navigationGlobalBorderRadiusUnits.Tablet}`;
	const navigationGlobalMobileBorderRadiusWidth = `${navigationGlobalBorderRadiusMobile.top}${navigationGlobalBorderRadiusUnits.Mobile} ${navigationGlobalBorderRadiusMobile.right}${navigationGlobalBorderRadiusUnits.Mobile} ${navigationGlobalBorderRadiusMobile.bottom}${navigationGlobalBorderRadiusUnits.Mobile} ${navigationGlobalBorderRadiusMobile.left}${navigationGlobalBorderRadiusUnits.Mobile}`;
	/** End Border Radius */  





    const allBlockStyle = useMemo(() => `

        .${blockId}.fb-advanced-navigation-main-wrapper {
            ${navigationPositionType === 'default' ? `position: relative;` : ''}  
            ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' ? `width: 100%;` : ''}
            ${navigationPositionType !== 'default' ? `position: ${navigationPositionType};` : ''}
            ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationHZOrientationType === 'left' && navigationHZLeftOffset.Desktop !== undefined ? `left: ${navigationHZLeftOffset.Desktop}${navigationHZLeftOffsetUnits.Desktop};` : ''}
            ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'top' && navigationVRTopOffset.Desktop !== undefined ? `top: ${navigationVRTopOffset.Desktop}${navigationVRTopOffsetUnits.Desktop};` : ''}
            ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'bottom' && navigationVRBottomOffset.Desktop !== undefined ? `bottom: ${navigationVRBottomOffset.Desktop}${navigationVRBottomOffsetUnits.Desktop};` : ''}
            ${navigationGlobalZIndex.Desktop ? `z-index: ${navigationGlobalZIndex.Desktop};` : ''}
            ${navigationOverflow !== 'default' ? `overflow: ${navigationOverflow};` : ''}
        }
        .${blockId} .advanced-navigation-wrapper {
            ${navigationGlobalDesktopPaddingWidth && navigationGlobalPaddingDesktop.top? `padding: ${navigationGlobalDesktopPaddingWidth};` : ''}
            ${navigationGlobalDesktopMarginWidth && navigationGlobalMarginDesktop.top? `margin: ${navigationGlobalDesktopMarginWidth};` : ''} 
            ${navigationGlobalBorder ? `border: ${navigationGlobalBorder};` : ''} 
            ${navigationGlobalDesktopBorderWidth && navigationGlobalBorderDesktop.top? `border-width: ${navigationGlobalDesktopBorderWidth};` : ''}
            ${navigationGlobalDesktopBorderRadiusWidth && navigationGlobalBorderRadiusDesktop.top? `border-radius: ${navigationGlobalDesktopBorderRadiusWidth};` : ''}
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
            ${navigationDesktopPaddingWidth && navigationDesktopPadding.top? `padding: ${navigationDesktopPaddingWidth};` : ''}
            ${navigationDesktopMarginWidth && navigationDesktopMargin.top? `margin: ${navigationDesktopMarginWidth};` : ''} 
            ${navigationBorder ? `border: ${navigationBorder};` : ''} 
            ${navigationBorderColor ? `border-color: ${navigationBorderColor};` : ''}
            ${navigationDesktopBorderWidth && navigationDesktopBorder.top? `border-width: ${navigationDesktopBorderWidth};` : ''}
            ${navigationDesktopBorderRadiusWidth && navigationDesktopBorderRadius.top? `border-radius: ${navigationDesktopBorderRadiusWidth};` : ''}
            ${navigationBoxShadowCssValue ? `box-shadow: ${navigationBoxShadowCssValue};` : ''}

            ${navigationNormalBackgroundType === 'gradient' ? `  
                ${navigationNormalCustomGradientSwitcher && navigationNormalCustomGradientInputValue ? `background: ${navigationNormalCustomGradientInputValue};` : `background: ${navigationNormalGradientColor};`}
            `: `
                ${navigationNormalClassicColor ? `background: ${navigationNormalClassicColor};` : ''}
            `}
        }

        .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item:hover {
            ${navigationBoxShadowHoverCssValue ? `box-shadow: ${navigationBoxShadowHoverCssValue};` : ''}
            ${navigationHoverBackgroundType === 'gradient' ? `  
                ${navigationHoverCustomGradientSwitcher && navigationHoverCustomGradientInputValue ? `background: ${navigationHoverCustomGradientInputValue};` : `background: ${navigationHoverGradientColor};`}
            `: `
                ${navigationHoverClassicColor ? `background: ${navigationHoverClassicColor};` : ''}
            `}
        }
        .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item .wp-block-navigation-item__content {
            outline: none !important;
            box-shadow: none !important;
        }
        .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item .wp-block-navigation-item__content:hover {
            text-decoration: none !important;
        }
        .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item .wp-block-navigation-item__content .wp-block-navigation-item__label {
            ${navigationGlobalTypoSwitcher.fontFamily === true && navigationGlobalTypographyData.fontFamily ? `font-family: ${navigationGlobalTypographyData.fontFamily};` : ''}
            ${navigationGlobalTypoSwitcher.fontSize === true && navigationGlobalTypographyData.fontSize ? `font-size: ${navigationGlobalTypographyData.fontSize};` : ''}
            ${navigationGlobalTypoSwitcher.fontWeight === true && navigationGlobalTypographyData.fontWeight ? `font-weight: ${navigationGlobalTypographyData.fontWeight};` : ''}
            ${navigationGlobalTypoSwitcher.fontStyle === true && navigationGlobalTypographyData.fontStyle ? `font-style: ${navigationGlobalTypographyData.fontStyle};` : ''}
            ${navigationGlobalTypoSwitcher.textTransform === true && navigationGlobalTypographyData.textTransform ? `text-transform: ${navigationGlobalTypographyData.textTransform};` : ''}
            ${navigationGlobalTypoSwitcher.textDecoration === true && navigationGlobalTypographyData.textDecoration ? `text-decoration: ${navigationGlobalTypographyData.textDecoration};` : ''}
            ${navigationGlobalTypoSwitcher.letterSpacing === true && navigationGlobalTypographyData.letterSpacing ? `letter-spacing: ${navigationGlobalTypographyData.letterSpacing};` : ''}
            ${navigationGlobalTypoSwitcher.lineHeight === true && navigationGlobalTypographyData.lineHeight ? `line-height: ${navigationGlobalTypographyData.lineHeight};` : ''}
                
            ${navigationGlobalTypoSwitcher.fontFamily === false && navigationFontFamily && navigationFontFamily !== 'Default' ? `font-family: ${navigationFontFamily};` : ''}
            ${navigationGlobalTypoSwitcher.fontSize === false && navigationFontSize.Desktop && navigationFontSizeUnits.Desktop ? `font-size: ${navigationFontSize.Desktop}${navigationFontSizeUnits.Desktop};` : ''}
            ${navigationGlobalTypoSwitcher.fontWeight === false && navigationFontWeight ? `font-weight: ${navigationFontWeight};` : ''}
            ${navigationGlobalTypoSwitcher.fontStyle === false && navigationFontStyle ? `font-style: ${navigationFontStyle};` : ''}
            ${navigationGlobalTypoSwitcher.textTransform === false && navigationTextTransform ? `text-transform: ${navigationTextTransform};` : ''}
            ${navigationGlobalTypoSwitcher.textDecoration === false && navigationTextDecoration ? `text-decoration: ${navigationTextDecoration};` : ''}
            ${navigationGlobalTypoSwitcher.letterSpacing === false && navigationLetterSpacing.Desktop && navigationLetterSpacingUnits.Desktop ? `letter-spacing: ${navigationLetterSpacing.Desktop}${navigationLetterSpacingUnits.Desktop};` : ''}
            ${navigationGlobalTypoSwitcher.lineHeight === false && navigationLineHeight.Desktop && navigationLineHeightUnits.Desktop ? `line-height: ${navigationLineHeight.Desktop}${navigationLineHeightUnits.Desktop};` : ''}
            
            ${navigationColor ? `color: ${navigationColor};` : ''}
            outline: none !important;
            box-shadow: none !important;
            transition: all .3s ease-in-out;
        }
        .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item .wp-block-navigation-item__content .wp-block-navigation-item__label:hover {
            ${navigationHoverColor ? `color: ${navigationHoverColor};` : ''}
        }

        .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item.current-menu-item .wp-block-navigation-item__content .wp-block-navigation-item__label {
            ${navigationActiveColor ? `color: ${navigationActiveColor};` : ''}
        }

        .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item.current-menu-item .wp-block-navigation-item__content .wp-block-navigation-item__label:hover {
            ${navigationActiveHoverColor ? `color: ${navigationActiveHoverColor};` : ''}
        }

        .${blockId} .advanced-navigation-wrapper .has-child .wp-block-navigation__submenu-container {
            ${dropDownWrapperMinWidth.Desktop ? `min-width: ${dropDownWrapperMinWidth.Desktop}${dropDownWrapperMinWidthUnits.Desktop} !important;` : ''}

            ${dropDownDesktopPaddingWidth && dropDownDesktopPadding.top? `padding: ${dropDownDesktopPaddingWidth};` : ''}
            ${dropDownDesktopMarginWidth && dropDownDesktopMargin.top? `margin: ${dropDownDesktopMarginWidth};` : ''} 
            ${dropDownBorder ? `border: ${dropDownBorder};` : ''} 
            ${dropDownBorderColor ? `border-color: ${dropDownBorderColor};` : ''}
            ${dropDownDesktopBorderWidth && dropDownDesktopBorder.top? `border-width: ${dropDownDesktopBorderWidth};` : ''}
            ${dropDownDesktopBorderRadiusWidth && dropDownDesktopBorderRadius.top? `border-radius: ${dropDownDesktopBorderRadiusWidth};` : ''}
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


        @media only screen and (max-width: 1024px) {

            .${blockId}.fb-advanced-navigation-main-wrapper {
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationHZOrientationType === 'left' && navigationHZLeftOffset.Tablet !== undefined ? `left: ${navigationHZLeftOffset.Tablet}${navigationHZLeftOffsetUnits.Tablet};` : ''}
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'top' && navigationVRTopOffset.Tablet !== undefined ? `top: ${navigationVRTopOffset.Tablet}${navigationVRTopOffsetUnits.Tablet};` : ''}
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'bottom' && navigationVRBottomOffset.Tablet !== undefined ? `bottom: ${navigationVRBottomOffset.Tablet}${navigationVRBottomOffsetUnits.Tablet};` : ''}
                ${navigationGlobalZIndex.Tablet ? `z-index: ${navigationGlobalZIndex.Tablet};` : ''}
            }
            .${blockId} .advanced-navigation-wrapper {
                ${navigationGlobalTabletPaddingWidth && navigationGlobalPaddingTablet.top? `padding: ${navigationGlobalTabletPaddingWidth};` : ''}
                ${navigationGlobalTabletMarginWidth && navigationGlobalMarginTablet.top? `margin: ${navigationGlobalTabletMarginWidth};` : ''} 
                ${navigationGlobalTabletBorderWidth && navigationGlobalBorderTablet.top? `border-width: ${navigationGlobalTabletBorderWidth};` : ''}
                ${navigationGlobalTabletBorderRadiusWidth && navigationGlobalBorderRadiusTablet.top? `border-radius: ${navigationGlobalTabletBorderRadiusWidth};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item {
                ${navigationTabletPaddingWidth && navigationTabletPadding.top? `padding: ${navigationTabletPaddingWidth};` : ''}
                ${navigationTabletMarginWidth && navigationTabletMargin.top? `margin: ${navigationTabletMarginWidth};` : ''} 
                ${navigationTabletBorderWidth && navigationTabletBorder.top? `border-width: ${navigationTabletBorderWidth};` : ''}
                ${navigationTabletBorderRadiusWidth && navigationTabletBorderRadius.top? `border-radius: ${navigationTabletBorderRadiusWidth};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item .wp-block-navigation-item__content .wp-block-navigation-item__label {
                ${navigationGlobalTypoSwitcher.fontSize === false && navigationFontSize.Tablet && navigationFontSizeUnits.Tablet ? `font-size: ${navigationFontSize.Tablet}${navigationFontSizeUnits.Tablet};` : ''}
                ${navigationGlobalTypoSwitcher.letterSpacing === false && navigationLetterSpacing.Tablet && navigationLetterSpacingUnits.Tablet ? `letter-spacing: ${navigationLetterSpacing.Tablet}${navigationLetterSpacingUnits.Tablet};` : ''}
                ${navigationGlobalTypoSwitcher.lineHeight === false && navigationLineHeight.Tablet && navigationLineHeightUnits.Tablet ? `line-height: ${navigationLineHeight.Tablet}${navigationLineHeightUnits.Tablet};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockId}.fb-advanced-navigation-main-wrapper {
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationHZOrientationType === 'left' && navigationHZLeftOffset.Mobile !== undefined ? `left: ${navigationHZLeftOffset.Mobile}${navigationHZLeftOffsetUnits.Mobile};` : ''}
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'top' && navigationVRTopOffset.Mobile !== undefined ? `top: ${navigationVRTopOffset.Mobile}${navigationVRTopOffsetUnits.Mobile};` : ''}
                ${navigationPositionType !== 'default' && navigationPositionType !== 'relative' && navigationVROrientationType === 'bottom' && navigationVRBottomOffset.Mobile !== undefined ? `bottom: ${navigationVRBottomOffset.Mobile}${navigationVRBottomOffsetUnits.Mobile};` : ''}
                ${navigationGlobalZIndex.Mobile ? `z-index: ${navigationGlobalZIndex.Mobile};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper {
                ${navigationGlobalMobilePaddingWidth && navigationGlobalPaddingMobile.top? `padding: ${navigationGlobalMobilePaddingWidth};` : ''} 
                ${navigationGlobalMobileMarginWidth && navigationGlobalMarginMobile.top? `margin: ${navigationGlobalMobileMarginWidth};` : ''} 
                ${navigationGlobalMobileBorderWidth && navigationGlobalBorderMobile.top? `border-width: ${navigationGlobalMobileBorderWidth};` : ''}
                ${navigationGlobalMobileBorderRadiusWidth && navigationGlobalBorderRadiusMobile.top? `border-radius: ${navigationGlobalMobileBorderRadiusWidth};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item {
                ${navigationMobilePaddingWidth && navigationMobilePadding.top? `padding: ${navigationMobilePaddingWidth};` : ''}
                ${navigationMobileMarginWidth && navigationMobileMargin.top? `margin: ${navigationMobileMarginWidth};` : ''} 
                ${navigationMobileBorderWidth && navigationMobileBorder.top? `border-width: ${navigationMobileBorderWidth};` : ''}
                ${navigationMobileBorderRadiusWidth && navigationMobileBorderRadius.top? `border-radius: ${navigationMobileBorderRadiusWidth};` : ''}
            }

            .${blockId} .advanced-navigation-wrapper .advanced-navigation-contents .wp-block-navigation-item .wp-block-navigation-item__content .wp-block-navigation-item__label {
                ${navigationGlobalTypoSwitcher.fontSize === false && navigationFontSize.Mobile && navigationFontSizeUnits.Mobile ? `font-size: ${navigationFontSize.Mobile}${navigationFontSizeUnits.Mobile};` : ''}
                ${navigationGlobalTypoSwitcher.letterSpacing === false && navigationLetterSpacing.Mobile && navigationLetterSpacingUnits.Mobile ? `letter-spacing: ${navigationLetterSpacing.Mobile}${navigationLetterSpacingUnits.Mobile};` : ''}
                ${navigationGlobalTypoSwitcher.lineHeight === false && navigationLineHeight.Mobile && navigationLineHeightUnits.Mobile ? `line-height: ${navigationLineHeight.Mobile}${navigationLineHeightUnits.Mobile};` : ''}
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


        /** Start Navigation Typography */
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

    const editorStyle = `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
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
                        setGlobalColor={(value) => setAttributes({ navigationColor: value })}
                    />
                )}

                {navigationColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={navigationHoverColor}
                        setGlobalColor={(value) => setAttributes({ navigationHoverColor: value })}
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
                        setGlobalColor={(value) => setAttributes({ navigationActiveColor: value })}
                    />
                )}

                {navigationActiveColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={navigationActiveHoverColor}
                        setGlobalColor={(value) => setAttributes({ navigationActiveHoverColor: value })}
                    />
                )}

                <FB_BackgroundColorControl
                    label={__("Background Color", "frontis-blocks")}
                    bgColorSwitcher={navigationBgColorSwitcher}  
                    setBgColorSwitcher={(value) => setAttributes({ navigationBgColorSwitcher: value })}
                    
                    normalBackgroundType={navigationNormalBackgroundType} 
                    setNormalBackgroundType={(value) => setAttributes({ navigationNormalBackgroundType: value })}
                    normalClassicColor={navigationNormalClassicColor}
                    setNormalClassicColor={(value) => setAttributes({ navigationNormalClassicColor: value })}
                    normalGradientColor={navigationNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ navigationNormalGradientColor: value })}
                    normalCustomGradientSwitcher={navigationNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ navigationNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={navigationNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ navigationNormalCustomGradientInputValue: value })}
                    
                    hoverBackgroundType={navigationHoverBackgroundType} 
                    setHoverBackgroundType={(value) => setAttributes({ navigationHoverBackgroundType: value })}
                    hoverClassicColor={navigationHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ navigationHoverClassicColor: value })}
                    hoverGradientColor={navigationHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ navigationHoverGradientColor: value })}
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
                        setGlobalColor={(value) => setAttributes({ navigationBorderColor: value })}
                    />
                )}

                {navigationBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={navigationBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ navigationBorderHoverColor: value })}
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
            <PanelBody title={__("Dropdown Menu", "frontis-blocks")} initialOpen={false}>
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
                    setNormalClassicColor={(value) => setAttributes({ dropDownNormalClassicColor: value })}
                    normalGradientColor={dropDownNormalGradientColor}
                    setNormalGradientColor={(value) => setAttributes({ dropDownNormalGradientColor: value })}
                    normalCustomGradientSwitcher={dropDownNormalCustomGradientSwitcher}
                    setNormalCustomGradientSwitcher={(value) => setAttributes({ dropDownNormalCustomGradientSwitcher: value })}
                    normalCustomGradientInputValue={dropDownNormalCustomGradientInputValue}
                    setNormalCustomGradientInputValue={(value) => setAttributes({ dropDownNormalCustomGradientInputValue: value })}
                    
                    hoverBackgroundType={dropDownHoverBackgroundType} 
                    setHoverBackgroundType={(value) => setAttributes({ dropDownHoverBackgroundType: value })}
                    hoverClassicColor={dropDownHoverClassicColor}
                    setHoverClassicColor={(value) => setAttributes({ dropDownHoverClassicColor: value })}
                    hoverGradientColor={dropDownHoverGradientColor} 
                    setHoverGradientColor={(value) => setAttributes({ dropDownHoverGradientColor: value })}
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
                        setGlobalColor={(value) => setAttributes({ dropDownBorderColor: value })}
                    />
                )}

                {dropDownBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={dropDownBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ dropDownBorderHoverColor: value })}
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
                            setNormalClassicColor={(value) => setAttributes({ navigationGlobalNormalClassicColor: value })}
                            normalGradientColor={navigationGlobalNormalGradientColor}
                            setNormalGradientColor={(value) => setAttributes({ navigationGlobalNormalGradientColor: value })}
                            normalCustomGradientSwitcher={navigationGlobalNormalCustomGradientSwitcher}
                            setNormalCustomGradientSwitcher={(value) => setAttributes({ navigationGlobalNormalCustomGradientSwitcher: value })}
                            normalCustomGradientInputValue={navigationGlobalNormalCustomGradientInputValue}
                            setNormalCustomGradientInputValue={(value) => setAttributes({ navigationGlobalNormalCustomGradientInputValue: value })}
                            
                            hoverBackgroundType={navigationGlobalHoverBackgroundType} 
                            setHoverBackgroundType={(value) => setAttributes({ navigationGlobalHoverBackgroundType: value })}
                            hoverClassicColor={navigationGlobalHoverClassicColor}
                            setHoverClassicColor={(value) => setAttributes({ navigationGlobalHoverClassicColor: value })}
                            hoverGradientColor={navigationGlobalHoverGradientColor} 
                            setHoverGradientColor={(value) => setAttributes({ navigationGlobalHoverGradientColor: value })}
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
                                setGlobalColor={(value) => setAttributes({ navigationGlobalBorderColor: value })}
                            />
                        )}

                        {navigationGlobalBorderColorSwitcher === 'hover' && (
                            <FB_ColorControl
                                label={__("Hover Color", "frontis-blocks")}
                                globalColor={navigationGlobalBorderHoverColor}
                                setGlobalColor={(value) => setAttributes({ navigationGlobalBorderHoverColor: value })}
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