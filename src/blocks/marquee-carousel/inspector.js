import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect, useMemo } from '@wordpress/element';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import { 
    PanelBody, 
    TabPanel, 
    BaseControl, 
    Button, 
    ButtonGroup,
    SelectControl,
    RangeControl,
    ToggleControl
} from '@wordpress/components';
import SortableItem from './sortableItem';
import { BORDER_STYLES } from "./constants/constants";
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
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId, handleDragEnd, handleAddItem, handleChangeItem, handleDeleteItem, handleDuplicateItem }) {
    const { 
        blockId,
        sliderItems,
        blockStyle,
        
        autoplayDirection,
        speed,
        reverseDirection,
        showNavigation,
        showPagination,


        slideWidth,
        slideWidthUnits,

        slidePaddingUnits,
        slideDesktopPadding,
        slideTabletPadding,
        slideMobilePadding,
        slidePaddingLink,

        slideMarginUnits,
        slideDesktopMargin,
        slideTabletMargin,
        slideMobileMargin,
        slideMarginLink,

        slideTextColorSwitcher,
        slideTextColor,
        slideTextHoverColor,
        slideTextGlobalTypoSwitcher,
        slideTextGlobalTypographyData,
        slideTextGlobalTypoType,
        slideTextGlobalTypoOption,
        slideTextFontFamily,
        slideTextFontSize,
        slideTextFontSizeUnits,
        slideTextFontWeight,
        slideTextFontStyle,
        slideTextTransform,
        slideTextDecoration,
        slideTextLetterSpacing,
        slideTextLetterSpacingUnits,
        slideTextLineHeight,
        slideTextLineHeightUnits,

        slideImageDesktopMargin,
        slideImageTabletMargin,
        slideImageMobileMargin,
        slideImageMarginLink,
        slideImageMarginUnits,
        
        /** Global Settings */
        sliderGlobalZIndex,
        sliderGlobalPaddingUnits,
        sliderGlobalPaddingDesktop,
        sliderGlobalPaddingTablet,
        sliderGlobalPaddingMobile,
        sliderGlobalPaddingLink,

        sliderGlobalMarginUnits,
        sliderGlobalMarginDesktop,
        sliderGlobalMarginTablet,
        sliderGlobalMarginMobile,
        sliderGlobalMarginLink,

        sliderGlobalBgColorSwitcher,
        sliderGlobalBgColor,
        sliderGlobalBgHoverColor,
        
        sliderGlobalBorder,
        sliderGlobalBorderColorSwitcher,
        sliderGlobalBorderColor,
        sliderGlobalBorderHoverColor,
        sliderGlobalBorderUnits,
        sliderGlobalBorderDesktop,
        sliderGlobalBorderTablet,
        sliderGlobalBorderMobile,
        sliderGlobalBorderLink,

        sliderGlobalBorderRadiusUnits,
        sliderGlobalBorderRadiusDesktop,
        sliderGlobalBorderRadiusTablet,
        sliderGlobalBorderRadiusMobile,
        sliderGlobalBorderRadiusLink,

        sliderGlobalBoxShadowSwitcher,
        sliderGlobalBoxShadowValues,
        sliderGlobalBoxShadowCssValue,
        sliderGlobalBoxShadowHoverValues,
        sliderGlobalBoxShadowHoverCssValue,

        sliderOverlaySwitcher,
        sliderOverlayStartColor,
        sliderOverlayEndColor,
        sliderOverlayWidth,
        sliderOverlayWidthUnits,

        marqueeCarouselCustomCSS,
        
    } = attributes;

    useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockId: "marquee-carousel-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

    const deviceType = useDeviceType();

    	/** Start Slide Padding */
	const handleSlidePaddingUnitChange = (event, position) => {
		const value = event.target.value;
		if (slidePaddingLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						slideDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						slideTabletPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						slideMobilePadding: {
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
					setAttributes({ slideDesktopPadding: { ...slideDesktopPadding, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ slideTabletPadding: { ...slideTabletPadding, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ slideMobilePadding: { ...slideMobilePadding, [position]: value } });
					break;
				default:
					break;
			}
		}
	}

	const handleSlidePaddingCombineBtn = () => { 
		setAttributes({ slidePaddingLink: !slidePaddingLink });
	}

	const handleSlidePaddingUnitsHandler = (unit) => {
		setAttributes({
			slidePaddingUnits: {
				...slidePaddingUnits,
				[deviceType]: unit
			}
		});
	}

	/** Default Slide Padding for each device */
	const slideDesktopPaddingWidth = `${slideDesktopPadding.top}${slidePaddingUnits.Desktop} ${slideDesktopPadding.right}${slidePaddingUnits.Desktop} ${slideDesktopPadding.bottom}${slidePaddingUnits.Desktop} ${slideDesktopPadding.left}${slidePaddingUnits.Desktop}`;
	const slideTabletPaddingWidth = `${slideTabletPadding.top}${slidePaddingUnits.Tablet} ${slideTabletPadding.right}${slidePaddingUnits.Tablet} ${slideTabletPadding.bottom}${slidePaddingUnits.Tablet} ${slideTabletPadding.left}${slidePaddingUnits.Tablet}`;
	const slideMobilePaddingWidth = `${slideMobilePadding.top}${slidePaddingUnits.Mobile} ${slideMobilePadding.right}${slidePaddingUnits.Mobile} ${slideMobilePadding.bottom}${slidePaddingUnits.Mobile} ${slideMobilePadding.left}${slidePaddingUnits.Mobile}`;
	/** End Slide Padding */


	/** Start Slide Margin */
	const handleSlideMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (slideMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						slideDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						slideTabletMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						slideMobileMargin: {
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
					setAttributes({ slideDesktopMargin: { ...slideDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ slideTabletMargin: { ...slideTabletMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ slideMobileMargin: { ...slideMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	}

	const handleSlideMarginCombineBtn = () => { 
		setAttributes({ slideMarginLink: !slideMarginLink });
	}

	const handleSlideMarginUnitsHandler = (unit) => {
		setAttributes({
			slideMarginUnits: {
				...slideMarginUnits,
				[deviceType]: unit
			}
		});
	}

	/** Default Slide Margin for each device */
	const slideDesktopMarginWidth = `${slideDesktopMargin.top}${slideMarginUnits.Desktop} ${slideDesktopMargin.right}${slideMarginUnits.Desktop} ${slideDesktopMargin.bottom}${slideMarginUnits.Desktop} ${slideDesktopMargin.left}${slideMarginUnits.Desktop}`;
	const slideTabletMarginWidth = `${slideTabletMargin.top}${slideMarginUnits.Tablet} ${slideTabletMargin.right}${slideMarginUnits.Tablet} ${slideTabletMargin.bottom}${slideMarginUnits.Tablet} ${slideTabletMargin.left}${slideMarginUnits.Tablet}`;
	const slideMobileMarginWidth = `${slideMobileMargin.top}${slideMarginUnits.Mobile} ${slideMobileMargin.right}${slideMarginUnits.Mobile} ${slideMobileMargin.bottom}${slideMarginUnits.Mobile} ${slideMobileMargin.left}${slideMarginUnits.Mobile}`;
	/** End Slide Margin */


	/** Start Slide Image Margin */
	const handleSlideImageMarginUnitChange = (event, position) => {
		const value = event.target.value;
		if (slideImageMarginLink) {
			switch (deviceType) {
				case 'Desktop':
					setAttributes({
						slideImageDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Tablet':
					setAttributes({
						slideImageTabletMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					});
					break;
				case 'Mobile':
					setAttributes({
						slideImageMobileMargin: {
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
					setAttributes({ slideImageDesktopMargin: { ...slideImageDesktopMargin, [position]: value } });
					break;
				case 'Tablet':
					setAttributes({ slideImageTabletMargin: { ...slideImageTabletMargin, [position]: value } });
					break;
				case 'Mobile':
					setAttributes({ slideImageMobileMargin: { ...slideImageMobileMargin, [position]: value } });
					break;
				default:
					break;
			}
		}
	}

	const handleSlideImageMarginCombineBtn = () => { 
		setAttributes({ slideImageMarginLink: !slideImageMarginLink });
	}

	const handleSlideImageMarginUnitsHandler = (unit) => {
		setAttributes({
			slideImageMarginUnits: {
				...slideImageMarginUnits,
				[deviceType]: unit
			}
		});
	}

	/** Default Slide Image Margin for each device */
	const slideImageDesktopMarginWidth = `${slideImageDesktopMargin.top}${slideImageMarginUnits.Desktop} ${slideImageDesktopMargin.right}${slideImageMarginUnits.Desktop} ${slideImageDesktopMargin.bottom}${slideImageMarginUnits.Desktop} ${slideImageDesktopMargin.left}${slideImageMarginUnits.Desktop}`;
	const slideImageTabletMarginWidth = `${slideImageTabletMargin.top}${slideImageMarginUnits.Tablet} ${slideImageTabletMargin.right}${slideImageMarginUnits.Tablet} ${slideImageTabletMargin.bottom}${slideImageMarginUnits.Tablet} ${slideImageTabletMargin.left}${slideImageMarginUnits.Tablet}`;
	const slideImageMobileMarginWidth = `${slideImageMobileMargin.top}${slideImageMarginUnits.Mobile} ${slideImageMobileMargin.right}${slideImageMarginUnits.Mobile} ${slideImageMobileMargin.bottom}${slideImageMarginUnits.Mobile} ${slideImageMobileMargin.left}${slideImageMarginUnits.Mobile}`;
	/** End Slide Image Margin */

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( sliderGlobalPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						sliderGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						sliderGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						sliderGlobalPaddingMobile: {
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
					setAttributes( {sliderGlobalPaddingDesktop: {...sliderGlobalPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {sliderGlobalPaddingTablet: {...sliderGlobalPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {sliderGlobalPaddingMobile: {...sliderGlobalPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes( {sliderGlobalPaddingLink: !sliderGlobalPaddingLink} );
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes( {
			sliderGlobalPaddingUnits: {
				...sliderGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopPaddingWidth    = `${sliderGlobalPaddingDesktop.top}${sliderGlobalPaddingUnits.Desktop} ${sliderGlobalPaddingDesktop.right}${sliderGlobalPaddingUnits.Desktop} ${sliderGlobalPaddingDesktop.bottom}${sliderGlobalPaddingUnits.Desktop} ${sliderGlobalPaddingDesktop.left}${sliderGlobalPaddingUnits.Desktop}`;
	const globalTabletPaddingWidth     = `${sliderGlobalPaddingTablet.top}${sliderGlobalPaddingUnits.Tablet} ${sliderGlobalPaddingTablet.right}${sliderGlobalPaddingUnits.Tablet} ${sliderGlobalPaddingTablet.bottom}${sliderGlobalPaddingUnits.Tablet} ${sliderGlobalPaddingTablet.left}${sliderGlobalPaddingUnits.Tablet}`;
	const globalMobilePaddingWidth     = `${sliderGlobalPaddingMobile.top}${sliderGlobalPaddingUnits.Mobile} ${sliderGlobalPaddingMobile.right}${sliderGlobalPaddingUnits.Mobile} ${sliderGlobalPaddingMobile.bottom}${sliderGlobalPaddingUnits.Mobile} ${sliderGlobalPaddingMobile.left}${sliderGlobalPaddingUnits.Mobile}`;
	/** End Global Padding */

	/** Start Global Margin */
	const handleGlobalMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( sliderGlobalMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						sliderGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						sliderGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						sliderGlobalMarginMobile: {
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
					setAttributes( {sliderGlobalMarginDesktop: {...sliderGlobalMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {sliderGlobalMarginTablet: {...sliderGlobalMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {sliderGlobalMarginMobile: {...sliderGlobalMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes( {sliderGlobalMarginLink: !sliderGlobalMarginLink} );
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes( {
			sliderGlobalMarginUnits: {
				...sliderGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const globalDesktopMarginWidth = `${sliderGlobalMarginDesktop.top}${sliderGlobalMarginUnits.Desktop} ${sliderGlobalMarginDesktop.right}${sliderGlobalMarginUnits.Desktop} ${sliderGlobalMarginDesktop.bottom}${sliderGlobalMarginUnits.Desktop} ${sliderGlobalMarginDesktop.left}${sliderGlobalMarginUnits.Desktop}`;
	const globalTabletMarginWidth = `${sliderGlobalMarginTablet.top}${sliderGlobalMarginUnits.Tablet} ${sliderGlobalMarginTablet.right}${sliderGlobalMarginUnits.Tablet} ${sliderGlobalMarginTablet.bottom}${sliderGlobalMarginUnits.Tablet} ${sliderGlobalMarginTablet.left}${sliderGlobalMarginUnits.Tablet}`;
	const globalMobileMarginWidth = `${sliderGlobalMarginMobile.top}${sliderGlobalMarginUnits.Mobile} ${sliderGlobalMarginMobile.right}${sliderGlobalMarginUnits.Mobile} ${sliderGlobalMarginMobile.bottom}${sliderGlobalMarginUnits.Mobile} ${sliderGlobalMarginMobile.left}${sliderGlobalMarginUnits.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( sliderGlobalBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						sliderGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						sliderGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						sliderGlobalBorderMobile: {
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
					setAttributes( {sliderGlobalBorderDesktop: {...sliderGlobalBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {sliderGlobalBorderTablet: {...sliderGlobalBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {sliderGlobalBorderMobile: {...sliderGlobalBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes( {sliderGlobalBorderLink: !sliderGlobalBorderLink} );
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes( {
			sliderGlobalBorderUnits: {
				...sliderGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopBorderWidth = `${sliderGlobalBorderDesktop.top}${sliderGlobalBorderUnits.Desktop} ${sliderGlobalBorderDesktop.right}${sliderGlobalBorderUnits.Desktop} ${sliderGlobalBorderDesktop.bottom}${sliderGlobalBorderUnits.Desktop} ${sliderGlobalBorderDesktop.left}${sliderGlobalBorderUnits.Desktop}`;
	const globalTabletBorderWidth = `${sliderGlobalBorderTablet.top}${sliderGlobalBorderUnits.Tablet} ${sliderGlobalBorderTablet.right}${sliderGlobalBorderUnits.Tablet} ${sliderGlobalBorderTablet.bottom}${sliderGlobalBorderUnits.Tablet} ${sliderGlobalBorderTablet.left}${sliderGlobalBorderUnits.Tablet}`;
	const globalMobileBorderWidth = `${sliderGlobalBorderMobile.top}${sliderGlobalBorderUnits.Mobile} ${sliderGlobalBorderMobile.right}${sliderGlobalBorderUnits.Mobile} ${sliderGlobalBorderMobile.bottom}${sliderGlobalBorderUnits.Mobile} ${sliderGlobalBorderMobile.left}${sliderGlobalBorderUnits.Mobile}`;
	/** End Border */

	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( sliderGlobalBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						sliderGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						sliderGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						sliderGlobalBorderRadiusMobile: {
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
					setAttributes( {sliderGlobalBorderRadiusDesktop: {...sliderGlobalBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {sliderGlobalBorderRadiusTablet: {...sliderGlobalBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {sliderGlobalBorderRadiusMobile: {...sliderGlobalBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes( {sliderGlobalBorderRadiusLink: !sliderGlobalBorderRadiusLink} );
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			sliderGlobalBorderRadiusUnits: {
				...sliderGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** End Global border */

	/** Start Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${sliderGlobalBorderRadiusDesktop.top}${sliderGlobalBorderRadiusUnits.Desktop} ${sliderGlobalBorderRadiusDesktop.right}${sliderGlobalBorderRadiusUnits.Desktop} ${sliderGlobalBorderRadiusDesktop.bottom}${sliderGlobalBorderRadiusUnits.Desktop} ${sliderGlobalBorderRadiusDesktop.left}${sliderGlobalBorderRadiusUnits.Desktop}`;
	const globalTabletBorderRadiusWidth = `${sliderGlobalBorderRadiusTablet.top}${sliderGlobalBorderRadiusUnits.Tablet} ${sliderGlobalBorderRadiusTablet.right}${sliderGlobalBorderRadiusUnits.Tablet} ${sliderGlobalBorderRadiusTablet.bottom}${sliderGlobalBorderRadiusUnits.Tablet} ${sliderGlobalBorderRadiusTablet.left}${sliderGlobalBorderRadiusUnits.Tablet}`;
	const globalMobileBorderRadiusWidth = `${sliderGlobalBorderRadiusMobile.top}${sliderGlobalBorderRadiusUnits.Mobile} ${sliderGlobalBorderRadiusMobile.right}${sliderGlobalBorderRadiusUnits.Mobile} ${sliderGlobalBorderRadiusMobile.bottom}${sliderGlobalBorderRadiusUnits.Mobile} ${sliderGlobalBorderRadiusMobile.left}${sliderGlobalBorderRadiusUnits.Mobile}`;
	/** End Border Radius */


    /** Start All Block Style */
    const allBlockStyle = useMemo(() => `

        .${blockId}.fb-marquee-carousel-container {
            ${sliderGlobalBgColor ? `background-color: ${sliderGlobalBgColor};` : ''}
            ${globalDesktopPaddingWidth && sliderGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPaddingWidth};` : ''}
            ${globalDesktopMarginWidth && sliderGlobalMarginDesktop?.top ? `margin: ${globalDesktopMarginWidth};` : ''}
            ${sliderGlobalBorder ? `border: ${sliderGlobalBorder};` : ''}
            ${globalDesktopBorderWidth && sliderGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && sliderGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${sliderGlobalBorderColor ? `border-color: ${sliderGlobalBorderColor};` : ''}
            ${sliderGlobalBoxShadowCssValue ? `box-shadow: ${sliderGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
            position: relative;
        }

        .${blockId}.fb-marquee-carousel-container:hover {
            ${sliderGlobalBgHoverColor ? `background-color: ${sliderGlobalBgHoverColor};` : ''}
            ${sliderGlobalBorderHoverColor ? `border-color: ${sliderGlobalBorderHoverColor};` : ''}
            ${sliderGlobalBoxShadowHoverCssValue ? `box-shadow: ${sliderGlobalBoxShadowHoverCssValue};` : ''}
        }

        ${sliderOverlaySwitcher ? `
        .${blockId}.fb-marquee-carousel-container .swiper-container::before {
            left: 0;
            background: linear-gradient(to right, ${sliderOverlayStartColor} 0%, ${sliderOverlayEndColor} 100%) !important;
            width: ${sliderOverlayWidth.Desktop}${sliderOverlayWidthUnits.Desktop} !important;
        }

        .${blockId}.fb-marquee-carousel-container .swiper-container::after {
            right: 0;
            background: linear-gradient(to left, ${sliderOverlayStartColor} 0%, ${sliderOverlayEndColor} 100%) !important;
            width: ${sliderOverlayWidth.Desktop}${sliderOverlayWidthUnits.Desktop} !important;
        }
        ` : ''}

        .${blockId} .swiper-wrapper { 
            -webkit-transition-timing-function:linear!important;    transition-timing-function:linear!important; 
            position: relative;
            user-select: none;
        }

        .${blockId} .swiper-slide {
            box-sizing: border-box;
            transition-timing-function: cubic-bezier(.76,.09,.215,1);
            display: flex !important;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            ${slideDesktopPaddingWidth && slideDesktopPadding.top ? `padding: ${slideDesktopPaddingWidth};` : ''}
            ${slideDesktopMarginWidth && slideDesktopMargin.top ? `margin: ${slideDesktopMarginWidth};` : ''} 
        }

        .${blockId} .fb-marquee-carousel-text,
        .${blockId} .fb-marquee-carousel-hover-text {
                ${slideTextGlobalTypoSwitcher.fontFamily === true && slideTextGlobalTypographyData.fontFamily ? `font-family: ${slideTextGlobalTypographyData.fontFamily};` : ''}
                ${slideTextGlobalTypoSwitcher.fontSize === true && slideTextGlobalTypographyData.fontSize ? `font-size: ${slideTextGlobalTypographyData.fontSize};` : ''}
                ${slideTextGlobalTypoSwitcher.fontWeight === true && slideTextGlobalTypographyData.fontWeight ? `font-weight: ${slideTextGlobalTypographyData.fontWeight};` : ''}
                ${slideTextGlobalTypoSwitcher.fontStyle === true && slideTextGlobalTypographyData.fontStyle ? `font-style: ${slideTextGlobalTypographyData.fontStyle};` : ''}
                ${slideTextGlobalTypoSwitcher.textTransform === true && slideTextGlobalTypographyData.textTransform ? `text-transform: ${slideTextGlobalTypographyData.textTransform};` : ''}
                ${slideTextGlobalTypoSwitcher.textDecoration === true && slideTextGlobalTypographyData.textDecoration ? `text-decoration: ${slideTextGlobalTypographyData.textDecoration};` : ''}
                ${slideTextGlobalTypoSwitcher.letterSpacing === true && slideTextGlobalTypographyData.letterSpacing ? `letter-spacing: ${slideTextGlobalTypographyData.letterSpacing};` : ''}
                ${slideTextGlobalTypoSwitcher.lineHeight === true && slideTextGlobalTypographyData.lineHeight ? `line-height: ${slideTextGlobalTypographyData.lineHeight};` : ''}
                    
                ${slideTextGlobalTypoSwitcher.fontFamily === false && slideTextFontFamily && slideTextFontFamily !== 'Default' ? `font-family: ${slideTextFontFamily};` : ''}
                ${slideTextGlobalTypoSwitcher.fontSize === false && slideTextFontSize.Desktop && slideTextFontSizeUnits.Desktop ? `font-size: ${slideTextFontSize.Desktop}${slideTextFontSizeUnits.Desktop};` : ''}
                ${slideTextGlobalTypoSwitcher.fontWeight === false && slideTextFontWeight ? `font-weight: ${slideTextFontWeight};` : ''}
                ${slideTextGlobalTypoSwitcher.fontStyle === false && slideTextFontStyle ? `font-style: ${slideTextFontStyle};` : ''}
                ${slideTextGlobalTypoSwitcher.textTransform === false && slideTextTransform ? `text-transform: ${slideTextTransform};` : ''}
                ${slideTextGlobalTypoSwitcher.textDecoration === false && slideTextDecoration ? `text-decoration: ${slideTextDecoration};` : ''}
                ${slideTextGlobalTypoSwitcher.letterSpacing === false && slideTextLetterSpacing.Desktop && slideTextLetterSpacingUnits.Desktop ? `letter-spacing: ${slideTextLetterSpacing.Desktop}${slideTextLetterSpacingUnits.Desktop};` : ''}
                ${slideTextGlobalTypoSwitcher.lineHeight === false && slideTextLineHeight.Desktop && slideTextLineHeightUnits.Desktop ? `line-height: ${slideTextLineHeight.Desktop}${slideTextLineHeightUnits.Desktop};` : ''}
        }

        .${blockId} .fb-marquee-carousel-image-wrapper {
            ${slideImageDesktopMarginWidth && slideImageDesktopMargin.top ? `margin: ${slideImageDesktopMarginWidth};` : ''}
        }

        .${blockId} .fb-marquee-carousel-text {
            ${slideTextColor ? `color: ${slideTextColor};` : ''}
        }
        .${blockId} .fb-marquee-carousel-hover-text {
            ${slideTextHoverColor ? `color: ${slideTextHoverColor};` : ''}
        }


        @media only screen and (max-width: 1024px) {

            .${blockId}.fb-marquee-carousel-container {
                ${globalTabletPaddingWidth && sliderGlobalPaddingTablet?.top ? `padding: ${globalTabletPaddingWidth};` : ''}
                ${globalTabletMarginWidth && sliderGlobalMarginTablet?.top ? `margin: ${globalTabletMarginWidth};` : ''}
                ${globalTabletBorderWidth && sliderGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && sliderGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }

            ${sliderOverlaySwitcher ? `
            .${blockId}.fb-marquee-carousel-container::before {
                width: ${sliderOverlayWidth.Tablet}${sliderOverlayWidthUnits.Tablet};
            }

            .${blockId}.fb-marquee-carousel-container::after {
                width: ${sliderOverlayWidth.Tablet}${sliderOverlayWidthUnits.Tablet};
            }
            ` : ''}


            .${blockId} .swiper-slide {
                ${slideTabletPaddingWidth && slideTabletPadding.top ? `padding: ${slideTabletPaddingWidth};` : ''}
                ${slideTabletMarginWidth && slideTabletMargin.top ? `margin: ${slideTabletMarginWidth};` : ''} 
            }

            .${blockId} .fb-marquee-carousel-image-wrapper {
                ${slideImageTabletMarginWidth && slideImageTabletMargin.top ? `margin: ${slideImageTabletMarginWidth};` : ''}
            }

            .${blockId} .fb-marquee-carousel-text,
            .${blockId} .fb-marquee-carousel-hover-text {
                ${slideTextFontSize.Tablet && slideTextFontSizeUnits.Tablet ? `font-size: ${slideTextFontSize.Tablet}${slideTextFontSizeUnits.Tablet};` : ''}
                ${slideTextLetterSpacing.Tablet && slideTextLetterSpacingUnits.Tablet ? `letter-spacing: ${slideTextLetterSpacing.Tablet}${slideTextLetterSpacingUnits.Tablet};` : ''}
                ${slideTextLineHeight.Tablet && slideTextLineHeightUnits.Tablet ? `line-height: ${slideTextLineHeight.Tablet}${slideTextLineHeightUnits.Tablet};` : ''}
            }
        }
        @media only screen and (max-width: 767px) {

            .${blockId}.fb-marquee-carousel-container {
                ${globalMobilePaddingWidth && sliderGlobalPaddingMobile?.top ? `padding: ${globalMobilePaddingWidth};` : ''}
                ${globalMobileMarginWidth && sliderGlobalMarginMobile?.top ? `margin: ${globalMobileMarginWidth};` : ''}
                ${globalMobileBorderWidth && sliderGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && sliderGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }

            ${sliderOverlaySwitcher ? `
            .${blockId}.fb-marquee-carousel-container::before {
                width: ${sliderOverlayWidth.Mobile}${sliderOverlayWidthUnits.Mobile};
            }

            .${blockId}.fb-marquee-carousel-container::after {
                width: ${sliderOverlayWidth.Mobile}${sliderOverlayWidthUnits.Mobile};
            }
            ` : ''}

            .${blockId} .swiper-slide {
                ${slideMobilePaddingWidth && slideMobilePadding.top ? `padding: ${slideMobilePaddingWidth};` : ''}
                ${slideMobileMarginWidth && slideMobileMargin.top ? `margin: ${slideMobileMarginWidth};` : ''} 
            }
            .${blockId} .fb-marquee-carousel-image-wrapper {
                ${slideImageMobileMarginWidth && slideImageMobileMargin.top ? `margin: ${slideImageMobileMarginWidth};` : ''}
            }
            .${blockId} .fb-marquee-carousel-text,
            .${blockId} .fb-marquee-carousel-hover-text {
                ${slideTextFontSize.Mobile && slideTextFontSizeUnits.Mobile ? `font-size: ${slideTextFontSize.Mobile}${slideTextFontSizeUnits.Mobile};` : ''}
                ${slideTextLetterSpacing.Mobile && slideTextLetterSpacingUnits.Mobile ? `letter-spacing: ${slideTextLetterSpacing.Mobile}${slideTextLetterSpacingUnits.Mobile};` : ''}
                ${slideTextLineHeight.Mobile && slideTextLineHeightUnits.Mobile ? `line-height: ${slideTextLineHeight.Mobile}${slideTextLineHeightUnits.Mobile};` : ''}
            }
        }
    `, [
        blockId,
        blockStyle,
        slideWidth,
        slideWidthUnits,

        slidePaddingUnits,
        slideDesktopPadding,
        slideTabletPadding,
        slideMobilePadding,
        slidePaddingLink,
        slideDesktopPaddingWidth,
        slideTabletPaddingWidth,
        slideMobilePaddingWidth,

        slideMarginUnits,
        slideDesktopMargin,
        slideTabletMargin,
        slideMobileMargin,
        slideMarginLink,
        slideDesktopMarginWidth,
        slideTabletMarginWidth,
        slideMobileMarginWidth,

        slideTextColorSwitcher,
        slideTextColor,
        slideTextHoverColor,
        slideTextFontFamily,
        slideTextFontSize,
        slideTextFontSizeUnits,
        slideTextFontWeight,
        slideTextFontStyle,
        slideTextTransform,
        slideTextDecoration,
        slideTextLetterSpacing,
        slideTextLetterSpacingUnits,
        slideTextLineHeight,
        slideTextLineHeightUnits,

        slideImageDesktopMargin,
        slideImageTabletMargin,
        slideImageMobileMargin,
        slideImageMarginLink,
        slideImageMarginUnits,
        slideImageDesktopMarginWidth,
        slideImageTabletMarginWidth,
        slideImageMobileMarginWidth,

        /** Global Settings */
        sliderGlobalZIndex,

        sliderGlobalPaddingUnits,
        sliderGlobalPaddingDesktop,
        sliderGlobalPaddingTablet,
        sliderGlobalPaddingMobile,
        sliderGlobalPaddingLink,
        globalDesktopPaddingWidth,
        globalTabletPaddingWidth,
        globalMobilePaddingWidth,

        sliderGlobalMarginUnits,
        sliderGlobalMarginDesktop,
        sliderGlobalMarginTablet,
        sliderGlobalMarginMobile,
        sliderGlobalMarginLink,
        globalDesktopMarginWidth,
        globalTabletMarginWidth,
        globalMobileMarginWidth,


        sliderGlobalBgColorSwitcher,
        sliderGlobalBgColor,
        sliderGlobalBgHoverColor,
        
        sliderGlobalBorder,
        sliderGlobalBorderColorSwitcher,
        sliderGlobalBorderColor,
        sliderGlobalBorderHoverColor,
        sliderGlobalBorderUnits,
        sliderGlobalBorderDesktop,
        sliderGlobalBorderTablet,
        sliderGlobalBorderMobile,
        sliderGlobalBorderLink,
        globalDesktopBorderWidth,
        globalTabletBorderWidth,
        globalMobileBorderWidth,

        sliderGlobalBorderRadiusUnits,
        sliderGlobalBorderRadiusDesktop,
        sliderGlobalBorderRadiusTablet,
        sliderGlobalBorderRadiusMobile,
        sliderGlobalBorderRadiusLink,
        globalDesktopBorderRadiusWidth,
        globalTabletBorderRadiusWidth,
        globalMobileBorderRadiusWidth,

        sliderGlobalBoxShadowSwitcher,
        sliderGlobalBoxShadowValues,
        sliderGlobalBoxShadowCssValue,
        sliderGlobalBoxShadowHoverValues,
        sliderGlobalBoxShadowHoverCssValue,

        sliderOverlaySwitcher,
        sliderOverlayStartColor,
        sliderOverlayEndColor,
        sliderOverlayWidth,
        sliderOverlayWidthUnits,


    ]);

    const customCss = getCustomCss(marqueeCarouselCustomCSS, `.${blockId}`);
    
    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim()});  
    }, [allBlockStyle, customCss]);

    const editorStyle = `${allBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <PanelBody title={__("Slider Items", "frontis-blocks")} initialOpen={true}>
                <div className="fb-marquee-carousel-wrapper">
                    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                        <SortableContext items={sliderItems.map((item) => item.id)}>
                            <ul className="dnd-items-wrapper">
                                {sliderItems.map((item, index) => (
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
                    </DndContext>
                    <Button isPrimary onClick={handleAddItem}>
                        {__("Add Slide", "frontis-blocks")}
                    </Button>
                </div>
            </PanelBody>
            <PanelBody 
                title={__("General Settings", "frontis-blocks")} 
                initialOpen={false}
            >
                <RangeControl
                    label={__("Transition Speed (ms)", "frontis-blocks")}
                    value={speed}
                    onChange={(value) => setAttributes({ speed: value })}
                    min={100}
                    max={20000}
                    step={100}
                />
                <ToggleControl
                    label={__("Reverse Direction", "frontis-blocks")}
                    checked={reverseDirection}
                    onChange={(value) => setAttributes({ reverseDirection: value })}
                />
                

            </PanelBody>
        </>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
        <>
            <PanelBody title="Slide" initialOpen={true}>
                <FB_Range
                    min={1}
                    max={slideWidthUnits[deviceType] === "%" ? 100 : 1000}
                    label={__("Width", "frontis-blocks")}
                    rangeValue={slideWidth}
                    onChangeHandler={(value) => setAttributes({ slideWidth: value })}
                    rangeUnitHandler={(value) => setAttributes({ slideWidthUnits: value })}
                    deviceType={deviceType}
                    units={slideWidthUnits}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                />
                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleSlidePaddingUnitsHandler}
                    spacingUnits={slidePaddingUnits}
                    spacingDesktop={slideDesktopPadding}
                    spacingTablet={slideTabletPadding}
                    spacingMobile={slideMobilePadding}
                    handleSpacingUnitHandler={handleSlidePaddingUnitChange}
                    spacingCombineBtn={slidePaddingLink}
                    spacingCombineBtnHandler={handleSlidePaddingCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleSlideMarginUnitsHandler}
                    spacingUnits={slideMarginUnits}
                    spacingDesktop={slideDesktopMargin}
                    spacingTablet={slideTabletMargin}
                    spacingMobile={slideMobileMargin}
                    handleSpacingUnitHandler={handleSlideMarginUnitChange}
                    spacingCombineBtn={slideMarginLink}
                    spacingCombineBtnHandler={handleSlideMarginCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody title="Content" initialOpen={false}>

                <FB_Spacing
                    label={__("Image Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleSlideImageMarginUnitsHandler}
                    spacingUnits={slideImageMarginUnits}
                    spacingDesktop={slideImageDesktopMargin}
                    spacingTablet={slideImageTabletMargin}
                    spacingMobile={slideImageMobileMargin}
                    handleSpacingUnitHandler={handleSlideImageMarginUnitChange}
                    spacingCombineBtn={slideImageMarginLink}
                    spacingCombineBtnHandler={handleSlideImageMarginCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_TypographyControl
                    globalTypoControlActive={true}
                    globalTypoSwitcher={slideTextGlobalTypoSwitcher}
                    storeGlobalTypographyData={(value) => setAttributes({ slideTextGlobalTypographyData: value })}

                    globalTypoType={slideTextGlobalTypoType}
                    onChangeGlobalTypoType={(value) => {
                        setAttributes({ 
                            slideTextGlobalTypoType: value, 
                            slideTextGlobalTypoSwitcher: value === 'default' ? {...slideTextGlobalTypoSwitcher, fontFamily: false, fontSize: false, fontWeight: false, fontStyle: false, textTransform: false, textDecoration: false, letterSpacing: false, lineHeight: false,} : {...slideTextGlobalTypoSwitcher, fontFamily: true, fontSize: true, fontWeight: true, fontStyle: true, textTransform: true, textDecoration: true, letterSpacing: true, lineHeight: true,}
                        })
                    }}

                    globalTypoOption={slideTextGlobalTypoOption}
                    onChangeGlobalTypoOption={(value) => setAttributes({ slideTextGlobalTypoOption: value })}

                    fontFamily={slideTextFontFamily}
                    onChangeFontFamily={(value) => setAttributes({ slideTextFontFamily: value, slideTextGlobalTypoSwitcher: {...slideTextGlobalTypoSwitcher, fontFamily: value && false} })}

                    fontSize={slideTextFontSize}
                    onChangeFontSize={(value) => setAttributes({ slideTextFontSize: value, slideTextGlobalTypoSwitcher: {...slideTextGlobalTypoSwitcher, fontSize: value && false} })}

                    fontSizeUnits={slideTextFontSizeUnits}
                    onChangeFontSizeUnit={(value) => setAttributes({ slideTextFontSizeUnits: value })}

                    fontWeight={slideTextFontWeight}
                    onChangeFontWeight={(value) => setAttributes({ slideTextFontWeight: value, slideTextGlobalTypoSwitcher: {...slideTextGlobalTypoSwitcher, fontWeight: value && false} })}

                    fontStyle={slideTextFontStyle}
                    onChangeFontStyle={(value) => setAttributes({ slideTextFontStyle: value, slideTextGlobalTypoSwitcher: {...slideTextGlobalTypoSwitcher, fontStyle: value && false} })}

                    textTransform={slideTextTransform}
                    onChangeTextTransform={(value) => setAttributes({ slideTextTransform: value, slideTextGlobalTypoSwitcher: {...slideTextGlobalTypoSwitcher, textTransform: value && false} })}

                    textDecoration={slideTextDecoration}
                    onChangeTextDecoration={(value) => setAttributes({ slideTextDecoration: value, slideTextGlobalTypoSwitcher: {...slideTextGlobalTypoSwitcher, textDecoration: value && false} })}

                    letterSpacing={slideTextLetterSpacing}
                    onChangeLetterSpacing={(value) => setAttributes({ slideTextLetterSpacing: value, slideTextGlobalTypoSwitcher: {...slideTextGlobalTypoSwitcher, letterSpacing: value && false} })}

                    letterSpacingUnits={slideTextLetterSpacingUnits}
                    onChangeLetterSpacingUnit={(value) => setAttributes({ slideTextLetterSpacingUnits: value })}

                    lineHeight={slideTextLineHeight}
                    onChangeLineHeight={(value) => setAttributes({ slideTextLineHeight: value, slideTextGlobalTypoSwitcher: {...slideTextGlobalTypoSwitcher, lineHeight: value && false} })}

                    lineHeightUnits={slideTextLineHeightUnits}
                    onChangeLineHeightUnit={(value) => setAttributes({ slideTextLineHeightUnits: value })}

                    deviceType={deviceType}
                    setAttributes={setAttributes}
                />
                <FB_SwitcherControl
                    label={__("Color", "frontis-blocks")}
                    globalSwitcher={slideTextColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ slideTextColorSwitcher: value })}
                />

                {slideTextColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={slideTextColor}
                        setGlobalColor={(value) => setAttributes({ slideTextColor: value })}
                    />
                )}

                {slideTextColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={slideTextHoverColor}
                        setGlobalColor={(value) => setAttributes({ slideTextHoverColor: value })}
                    />
                )}

            </PanelBody>

            <PanelBody title="Overlay" initialOpen={false}>
                <ToggleControl
                    label={__("Overlay", "frontis-blocks")}
                    checked={sliderOverlaySwitcher}
                    onChange={(value) => setAttributes({ sliderOverlaySwitcher: value })}
                />
                {sliderOverlaySwitcher && (
                    <>
                        <FB_ColorControl
                            label={__("Start Color", "frontis-blocks")}
                            globalColor={sliderOverlayStartColor}
                            setGlobalColor={(value) => setAttributes({ sliderOverlayStartColor: value })}
                        />
                        <FB_ColorControl 
                            label={__("End Color", "frontis-blocks")}
                            globalColor={sliderOverlayEndColor}
                            setGlobalColor={(value) => setAttributes({ sliderOverlayEndColor: value })}
                        />
                        <FB_Range
                            min={1}
                            max={sliderOverlayWidthUnits[deviceType] === "%" ? 100 : 1000}
                            label={__("Width", "frontis-blocks")}
                            rangeValue={sliderOverlayWidth}
                            onChangeHandler={(value) => setAttributes({ sliderOverlayWidth: value })}
                            rangeUnitHandler={(value) => setAttributes({ sliderOverlayWidthUnits: value })}
                            deviceType={deviceType}
                            units={sliderOverlayWidthUnits}
                            setAttributes={setAttributes}
                            rangeStep={1}
                            resetFallbackValue={"100"}
                        />
                    </>
                )}
            </PanelBody>
        </>
	);
		
	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
        <>
            <PanelBody title={__("Layout", "frontis-blocks")} initialOpen={true}>
                <FB_Range
                    min={0}
                    max={10000000}
                    label={__("Z Index", "frontis-blocks")}
                    rangeValue={sliderGlobalZIndex} 
                    onChangeHandler={(value) => setAttributes({ sliderGlobalZIndex: value === 0 ? undefined : value })}
                    deviceType={deviceType}
                    setAttributes={setAttributes}
                    rangeStep={1}
                    resetFallbackValue={""}
                    isRangeUnit={false}

                />
            </PanelBody>

            <PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
                <FB_Spacing
                    label={__("Padding", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
                    spacingUnits={sliderGlobalPaddingUnits}
                    spacingDesktop={sliderGlobalPaddingDesktop}
                    spacingTablet={sliderGlobalPaddingTablet}
                    spacingMobile={sliderGlobalPaddingMobile}
                    handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
                    spacingCombineBtn={sliderGlobalPaddingLink}
                    spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
                    setAttributes={setAttributes}
                />
                <FB_Spacing
                    label={__("Margin", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalMarginUnitsHandler}
                    spacingUnits={sliderGlobalMarginUnits}
                    spacingDesktop={sliderGlobalMarginDesktop}
                    spacingTablet={sliderGlobalMarginTablet}
                    spacingMobile={sliderGlobalMarginMobile}
                    handleSpacingUnitHandler={handleGlobalMarginUnitChange}
                    spacingCombineBtn={sliderGlobalMarginLink}
                    spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
                    setAttributes={setAttributes}
                />
            </PanelBody>

            <PanelBody
                title={__("Background Color", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_SwitcherControl
                    label={__("Background Color", "frontis-blocks")}
                    globalSwitcher={sliderGlobalBgColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ sliderGlobalBgColorSwitcher: value })}
                />

                {sliderGlobalBgColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={sliderGlobalBgColor}
                        setGlobalColor={(value) => setAttributes({ sliderGlobalBgColor: value })}
                    />
                )}

                {sliderGlobalBgColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={sliderGlobalBgHoverColor}
                        setGlobalColor={(value) => setAttributes({ sliderGlobalBgHoverColor: value })}
                    />
                )}
            </PanelBody>
            <PanelBody
                title={__("Border and Shadow", "frontis-blocks")}
                initialOpen={false}
            >

                <SelectControl
                        label={__("Border Style", "frontis-blocks")}
                        value={sliderGlobalBorder}
                        options={BORDER_STYLES}
                        onChange={(value) => setAttributes({ sliderGlobalBorder: value })}
                />


                <FB_SwitcherControl
                    label={__("Border Color", "frontis-blocks")}
                    globalSwitcher={sliderGlobalBorderColorSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ sliderGlobalBorderColorSwitcher: value })}
                />

                {sliderGlobalBorderColorSwitcher === 'normal' && (
                    <FB_ColorControl
                        label={__("Normal Color", "frontis-blocks")}
                        globalColor={sliderGlobalBorderColor}
                        setGlobalColor={(value) => setAttributes({ sliderGlobalBorderColor: value })}
                    />
                )}

                {sliderGlobalBorderColorSwitcher === 'hover' && (
                    <FB_ColorControl
                        label={__("Hover Color", "frontis-blocks")}
                        globalColor={sliderGlobalBorderHoverColor}
                        setGlobalColor={(value) => setAttributes({ sliderGlobalBorderHoverColor: value })}
                    />
                )}

                <FB_Spacing
                    label={__("Border", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalBorderUnitsHandler}
                    spacingUnits={sliderGlobalBorderUnits}
                    spacingDesktop={sliderGlobalBorderDesktop}
                    spacingTablet={sliderGlobalBorderTablet}
                    spacingMobile={sliderGlobalBorderMobile}
                    handleSpacingUnitHandler={handleGlobalBorderUnitChange}
                    spacingCombineBtn={sliderGlobalBorderLink}
                    spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_Spacing
                    label={__("Border Radius", "frontis-blocks")}
                    deviceType={deviceType}
                    spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
                    spacingUnits={sliderGlobalBorderRadiusUnits}
                    spacingDesktop={sliderGlobalBorderRadiusDesktop}
                    spacingTablet={sliderGlobalBorderRadiusTablet}
                    spacingMobile={sliderGlobalBorderRadiusMobile}
                    handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
                    spacingCombineBtn={sliderGlobalBorderRadiusLink}
                    spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
                    setAttributes={setAttributes}
                />

                <FB_SwitcherControl
                    label={__("Box Shadow", "frontis-blocks")}
                    globalSwitcher={sliderGlobalBoxShadowSwitcher}
                    setGlobalSwitcher={(value) => setAttributes({ sliderGlobalBoxShadowSwitcher: value })}
                />

                {sliderGlobalBoxShadowSwitcher === 'normal' && (
                    <FB_BoxShadowControl
                        label={__("Normal Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ sliderGlobalBoxShadowValues: value })}
                        initialShadowValue={sliderGlobalBoxShadowValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ sliderGlobalBoxShadowCssValue: value })}
                    />
                )}

                {sliderGlobalBoxShadowSwitcher === 'hover' && (
                    <FB_BoxShadowControl
                        label={__("Hover Shadow", "frontis-blocks")}
                        onBoxShadowChange={(value) => setAttributes({ sliderGlobalBoxShadowHoverValues: value })}
                        initialShadowValue={sliderGlobalBoxShadowHoverValues}
                        onBoxShadowStyleChange={(value) => setAttributes({ sliderGlobalBoxShadowHoverCssValue: value })}
                    />
                )}
            </PanelBody>

            <PanelBody
                title={__("Custom CSS", "frontis-blocks")}
                initialOpen={false}
            >
                <FB_CustomCSSEditor  
                    value={marqueeCarouselCustomCSS}
                    onChangeValue={(value) => setAttributes({ marqueeCarouselCustomCSS: value })}
                />
            </PanelBody>
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
