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
            <PanelBody>
                style controls
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