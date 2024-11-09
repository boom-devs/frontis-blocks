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
import FB_TypographyControl from '@Components/typography-control';
import FB_BackgroundColorControl from '@Components/background-color-control';
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

        FeatureIconNormalBackgroundType,
        FeatureIconNormalClassicColor,
        FeatureIconNormalGradientColor,
        FeatureIconNormalCustomGradientSwitcher,
        FeatureIconNormalCustomGradientInputValue,

        FeatureIconHoverBackgroundType,
        FeatureIconHoverClassicColor,
        FeatureIconHoverGradientColor,
        FeatureIconHoverCustomGradientSwitcher,
        FeatureIconHoverCustomGradientInputValue,

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
        FeatureGlobalZIndex,
        FeatureGlobalPaddingUnits,
        FeatureGlobalPaddingDesktop,
        FeatureGlobalPaddingTablet,
        FeatureGlobalPaddingMobile,
        FeatureGlobalPaddingLink,

        FeatureGlobalMarginUnits,
        FeatureGlobalMarginDesktop,
        FeatureGlobalMarginTablet,
        FeatureGlobalMarginMobile,
        FeatureGlobalMarginLink,

        /** Start Global Background Color */
        FeatureGlobalBgColorSwitcher,

        FeatureGlobalNormalBackgroundType,
        FeatureGlobalNormalClassicColor,
        FeatureGlobalNormalGradientColor,
        FeatureGlobalNormalCustomGradientSwitcher,
        FeatureGlobalNormalCustomGradientInputValue,

        FeatureGlobalNormalBackgroundImageUrl,
        FeatureGlobalNormalBackgroundImageAlt,
        FeatureGlobalNormalBackgroundImageID,
        FeatureGlobalNormalBackgroundImagePosition,
        FeatureGlobalNormalBackgroundImageAttachment,
        FeatureGlobalNormalBackgroundImageRepeat,
        FeatureGlobalNormalBackgroundImageSize,

        FeatureGlobalHoverBackgroundType,
        FeatureGlobalHoverClassicColor,
        FeatureGlobalHoverGradientColor,
        FeatureGlobalHoverCustomGradientSwitcher,
        FeatureGlobalHoverCustomGradientInputValue,

        FeatureGlobalHoverBackgroundImageUrl,
        FeatureGlobalHoverBackgroundImageAlt,
        FeatureGlobalHoverBackgroundImageID,
        FeatureGlobalHoverBackgroundImagePosition,
        FeatureGlobalHoverBackgroundImageAttachment,
        FeatureGlobalHoverBackgroundImageRepeat,
        FeatureGlobalHoverBackgroundImageSize,
        /** End Global Background Color */

        FeatureGlobalBorder,
        FeatureGlobalBorderColorSwitcher,
        FeatureGlobalBorderColor,
        FeatureGlobalBorderHoverColor,

        FeatureGlobalBorderUnits,
        FeatureGlobalBorderDesktop,
        FeatureGlobalBorderTablet,
        FeatureGlobalBorderMobile,
        FeatureGlobalBorderLink,

        FeatureGlobalBorderRadiusUnits,
        FeatureGlobalBorderRadiusDesktop,
        FeatureGlobalBorderRadiusTablet,
        FeatureGlobalBorderRadiusMobile,
        FeatureGlobalBorderRadiusLink,

        FeatureGlobalBoxShadowValues,
        FeatureGlobalBoxShadowCssValue,
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
    



	/** Start Global padding */
	const handleGlobalPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureGlobalPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureGlobalPaddingMobile: {
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
					setAttributes( {FeatureGlobalPaddingDesktop: {...FeatureGlobalPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureGlobalPaddingTablet: {...FeatureGlobalPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureGlobalPaddingMobile: {...FeatureGlobalPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes( {FeatureGlobalPaddingLink: !FeatureGlobalPaddingLink} );
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes( {
			FeatureGlobalPaddingUnits: {
				...FeatureGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopPadding    = `${FeatureGlobalPaddingDesktop.top}${FeatureGlobalPaddingUnits.Desktop} ${FeatureGlobalPaddingDesktop.right}${FeatureGlobalPaddingUnits.Desktop} ${FeatureGlobalPaddingDesktop.bottom}${FeatureGlobalPaddingUnits.Desktop} ${FeatureGlobalPaddingDesktop.left}${FeatureGlobalPaddingUnits.Desktop}`;
	const globalTabletPadding     = `${FeatureGlobalPaddingTablet.top}${FeatureGlobalPaddingUnits.Tablet} ${FeatureGlobalPaddingTablet.right}${FeatureGlobalPaddingUnits.Tablet} ${FeatureGlobalPaddingTablet.bottom}${FeatureGlobalPaddingUnits.Tablet} ${FeatureGlobalPaddingTablet.left}${FeatureGlobalPaddingUnits.Tablet}`;
	const globalMobilePadding     = `${FeatureGlobalPaddingMobile.top}${FeatureGlobalPaddingUnits.Mobile} ${FeatureGlobalPaddingMobile.right}${FeatureGlobalPaddingUnits.Mobile} ${FeatureGlobalPaddingMobile.bottom}${FeatureGlobalPaddingUnits.Mobile} ${FeatureGlobalPaddingMobile.left}${FeatureGlobalPaddingUnits.Mobile}`;
	/** End Global Padding */
	
	/** Start Global Margin */
	const handleGlobalMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureGlobalMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureGlobalMarginMobile: {
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
					setAttributes( {FeatureGlobalMarginDesktop: {...FeatureGlobalMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureGlobalMarginTablet: {...FeatureGlobalMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureGlobalMarginMobile: {...FeatureGlobalMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes( {FeatureGlobalMarginLink: !FeatureGlobalMarginLink} );
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes( {
			FeatureGlobalMarginUnits: {
				...FeatureGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const globalDesktopMargin = `${FeatureGlobalMarginDesktop.top}${FeatureGlobalMarginUnits.Desktop} ${FeatureGlobalMarginDesktop.right}${FeatureGlobalMarginUnits.Desktop} ${FeatureGlobalMarginDesktop.bottom}${FeatureGlobalMarginUnits.Desktop} ${FeatureGlobalMarginDesktop.left}${FeatureGlobalMarginUnits.Desktop}`;
	const globalTabletMargin = `${FeatureGlobalMarginTablet.top}${FeatureGlobalMarginUnits.Tablet} ${FeatureGlobalMarginTablet.right}${FeatureGlobalMarginUnits.Tablet} ${FeatureGlobalMarginTablet.bottom}${FeatureGlobalMarginUnits.Tablet} ${FeatureGlobalMarginTablet.left}${FeatureGlobalMarginUnits.Tablet}`;
	const globalMobileMargin = `${FeatureGlobalMarginMobile.top}${FeatureGlobalMarginUnits.Mobile} ${FeatureGlobalMarginMobile.right}${FeatureGlobalMarginUnits.Mobile} ${FeatureGlobalMarginMobile.bottom}${FeatureGlobalMarginUnits.Mobile} ${FeatureGlobalMarginMobile.left}${FeatureGlobalMarginUnits.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureGlobalBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureGlobalBorderMobile: {
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
					setAttributes( {FeatureGlobalBorderDesktop: {...FeatureGlobalBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureGlobalBorderTablet: {...FeatureGlobalBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureGlobalBorderMobile: {...FeatureGlobalBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes( {FeatureGlobalBorderLink: !FeatureGlobalBorderLink} );
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes( {
			FeatureGlobalBorderUnits: {
				...FeatureGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopBorderWidth = `${FeatureGlobalBorderDesktop.top}${FeatureGlobalBorderUnits.Desktop} ${FeatureGlobalBorderDesktop.right}${FeatureGlobalBorderUnits.Desktop} ${FeatureGlobalBorderDesktop.bottom}${FeatureGlobalBorderUnits.Desktop} ${FeatureGlobalBorderDesktop.left}${FeatureGlobalBorderUnits.Desktop}`;
	const globalTabletBorderWidth = `${FeatureGlobalBorderTablet.top}${FeatureGlobalBorderUnits.Tablet} ${FeatureGlobalBorderTablet.right}${FeatureGlobalBorderUnits.Tablet} ${FeatureGlobalBorderTablet.bottom}${FeatureGlobalBorderUnits.Tablet} ${FeatureGlobalBorderTablet.left}${FeatureGlobalBorderUnits.Tablet}`;
	const globalMobileBorderWidth = `${FeatureGlobalBorderMobile.top}${FeatureGlobalBorderUnits.Mobile} ${FeatureGlobalBorderMobile.right}${FeatureGlobalBorderUnits.Mobile} ${FeatureGlobalBorderMobile.bottom}${FeatureGlobalBorderUnits.Mobile} ${FeatureGlobalBorderMobile.left}${FeatureGlobalBorderUnits.Mobile}`;
	/** End Border */


	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureGlobalBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureGlobalBorderRadiusMobile: {
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
					setAttributes( {FeatureGlobalBorderRadiusDesktop: {...FeatureGlobalBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureGlobalBorderRadiusTablet: {...FeatureGlobalBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureGlobalBorderRadiusMobile: {...FeatureGlobalBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes( {FeatureGlobalBorderRadiusLink: !FeatureGlobalBorderRadiusLink} );
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			FeatureGlobalBorderRadiusUnits: {
				...FeatureGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */

	/** End Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${FeatureGlobalBorderRadiusDesktop.top}${FeatureGlobalBorderRadiusUnits.Desktop} ${FeatureGlobalBorderRadiusDesktop.right}${FeatureGlobalBorderRadiusUnits.Desktop} ${FeatureGlobalBorderRadiusDesktop.bottom}${FeatureGlobalBorderRadiusUnits.Desktop} ${FeatureGlobalBorderRadiusDesktop.left}${FeatureGlobalBorderRadiusUnits.Desktop}`;
	const globalTabletBorderRadiusWidth = `${FeatureGlobalBorderRadiusTablet.top}${FeatureGlobalBorderRadiusUnits.Tablet} ${FeatureGlobalBorderRadiusTablet.right}${FeatureGlobalBorderRadiusUnits.Tablet} ${FeatureGlobalBorderRadiusTablet.bottom}${FeatureGlobalBorderRadiusUnits.Tablet} ${FeatureGlobalBorderRadiusTablet.left}${FeatureGlobalBorderRadiusUnits.Tablet}`;
	const globalMobileBorderRadiusWidth = `${FeatureGlobalBorderRadiusMobile.top}${FeatureGlobalBorderRadiusUnits.Mobile} ${FeatureGlobalBorderRadiusMobile.right}${FeatureGlobalBorderRadiusUnits.Mobile} ${FeatureGlobalBorderRadiusMobile.bottom}${FeatureGlobalBorderRadiusUnits.Mobile} ${FeatureGlobalBorderRadiusMobile.left}${FeatureGlobalBorderRadiusUnits.Mobile}`;
	/** End Border Radius */   

    /* set default values for the style attributes */
	useEffect(() => {
		if (FeatureTitleFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${FeatureTitleFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [FeatureTitleFontFamily]);

    /* set default values for the style attributes */
	useEffect(() => {
		if (FeatureDescFontFamily) {
			const fontUrl = `https://fonts.googleapis.com/css?family=${FeatureDescFontFamily.replace(' ', '+')}`;
			const linkElement = document.createElement('link');
			linkElement.rel = 'stylesheet';
			linkElement.href = fontUrl;
			document.head.appendChild(linkElement);
		}
	}, [FeatureDescFontFamily]);

    return (
        <>
            <style>
            {`
                .fb-feature-main-wrapper.${blockID} {
                    z-index: ${FeatureGlobalZIndex !== undefined ? FeatureGlobalZIndex : ''};
                    position: relative;
                }
                .fb-feature-main-wrapper.${blockID} {

                    ${FeatureGlobalNormalBackgroundType === 'gradient' ? `
                        background: ${FeatureGlobalNormalCustomGradientSwitcher && FeatureGlobalNormalCustomGradientInputValue ? FeatureGlobalNormalCustomGradientInputValue : FeatureGlobalNormalGradientColor};
                    ` : FeatureGlobalNormalBackgroundImageUrl && FeatureGlobalNormalBackgroundImageUrl !== 'null' ? `
                        ${FeatureGlobalNormalBackgroundImageUrl ? `background-image: url(${FeatureGlobalNormalBackgroundImageUrl});` : ''}
                        ${FeatureGlobalNormalBackgroundImagePosition ? `background-position: ${FeatureGlobalNormalBackgroundImagePosition};` : ''}
                        ${FeatureGlobalNormalBackgroundImageAttachment ? `background-attachment: ${FeatureGlobalNormalBackgroundImageAttachment};` : ''}
                        ${FeatureGlobalNormalBackgroundImageRepeat ? `background-repeat: ${FeatureGlobalNormalBackgroundImageRepeat};` : ''}
                        ${FeatureGlobalNormalBackgroundImageSize ? `background-size: ${FeatureGlobalNormalBackgroundImageSize};` : ''}
                    ` : `
                        background: ${FeatureGlobalNormalClassicColor};
                    `}


                    ${globalDesktopPadding ? `padding: ${globalDesktopPadding};` : ''}
                    ${globalDesktopMargin ? `margin: ${globalDesktopMargin};` : ''} 
                    ${FeatureGlobalBorder ? `border: ${FeatureGlobalBorder};` : ''} 
                    ${globalDesktopBorderWidth ? `border-width: ${globalDesktopBorderWidth};` : ''}
                    ${globalDesktopBorderRadiusWidth ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
                    ${FeatureGlobalBorderColor ? `border-color: ${FeatureGlobalBorderColor};` : ''}
                    ${FeatureGlobalBoxShadowCssValue ? `box-shadow: ${FeatureGlobalBoxShadowCssValue};` : ''}
                    transition: all .3s ease-in-out;
                }
                .fb-feature-main-wrapper.${blockID}:hover {
                
                    ${FeatureGlobalHoverBackgroundType === 'gradient' ? `
                        background: ${FeatureGlobalHoverCustomGradientSwitcher && FeatureGlobalHoverCustomGradientInputValue ? FeatureGlobalHoverCustomGradientInputValue : FeatureGlobalHoverGradientColor};
                    ` : FeatureGlobalHoverBackgroundImageUrl && FeatureGlobalHoverBackgroundImageUrl !== 'null' ? `
                        ${FeatureGlobalHoverBackgroundImageUrl ? `background-image: url(${FeatureGlobalHoverBackgroundImageUrl});` : ''}
                        ${FeatureGlobalHoverBackgroundImagePosition ? `background-position: ${FeatureGlobalHoverBackgroundImagePosition};` : ''}
                        ${FeatureGlobalHoverBackgroundImageAttachment ? `background-attachment: ${FeatureGlobalHoverBackgroundImageAttachment};` : ''}
                        ${FeatureGlobalHoverBackgroundImageRepeat ? `background-repeat: ${FeatureGlobalHoverBackgroundImageRepeat};` : ''}
                        ${FeatureGlobalHoverBackgroundImageSize ? `background-size: ${FeatureGlobalHoverBackgroundImageSize};` : ''}
                    ` : `
                        background: ${FeatureGlobalHoverClassicColor};
                    `}

                    ${FeatureGlobalBorderHoverColor ? `border-color: ${FeatureGlobalBorderHoverColor};` : ''}

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
                    ${FeatureIconNormalBackgroundType === 'gradient' ? ` 
                        background: ${FeatureIconNormalCustomGradientSwitcher && FeatureIconNormalCustomGradientInputValue ? FeatureIconNormalCustomGradientInputValue : FeatureIconNormalGradientColor};
                    `: `
                        background: ${FeatureIconNormalClassicColor};
                    `}
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner:hover {

                    ${FeatureIconHoverBackgroundType === 'gradient' ? ` 
                        background: ${FeatureIconHoverCustomGradientSwitcher && FeatureIconHoverCustomGradientInputValue ? FeatureIconHoverCustomGradientInputValue : FeatureIconHoverGradientColor};
                    `: `
                        background: ${FeatureIconHoverClassicColor};
                    `}
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
                        ${globalTabletPadding ? `padding: ${globalTabletPadding};` : ''}
                        ${globalTabletMargin ? `margin: ${globalTabletMargin};` : ''} 
                        ${globalTabletBorderWidth ? `border-width: ${globalTabletBorderWidth};` : ''}
                        ${globalTabletBorderRadiusWidth ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
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
                        ${globalMobilePadding ? `padding: ${globalMobilePadding};` : ''}
                        ${globalMobileMargin ? `margin: ${globalMobileMargin};` : ''} 
                        ${globalMobileBorderWidth ? `border-width: ${globalMobileBorderWidth};` : ''}
                        ${globalMobileBorderRadiusWidth ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
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

                                            <FB_BackgroundColorControl
                                                label={__("Background Color", "frontis-blocks")}
                                                bgColorSwitcher={FeatureIconBgColorSwitcher}
                                                setBgColorSwitcher={(value) => setAttributes({ FeatureIconBgColorSwitcher: value })}
                                                
                                                normalBackgroundType={FeatureIconNormalBackgroundType}
                                                setNormalBackgroundType={(value) => setAttributes({ FeatureIconNormalBackgroundType: value })}
                                                normalClassicColor={FeatureIconNormalClassicColor}
                                                setNormalClassicColor={(value) => setAttributes({ FeatureIconNormalClassicColor: value })}
                                                normalGradientColor={FeatureIconNormalGradientColor}
                                                setNormalGradientColor={(value) => setAttributes({ FeatureIconNormalGradientColor: value })}
                                                normalCustomGradientSwitcher={FeatureIconNormalCustomGradientSwitcher}
                                                setNormalCustomGradientSwitcher={(value) => setAttributes({ FeatureIconNormalCustomGradientSwitcher: value })}
                                                normalCustomGradientInputValue={FeatureIconNormalCustomGradientInputValue}
                                                setNormalCustomGradientInputValue={(value) => setAttributes({ FeatureGlobalNormalCustomGradientInputValue: value })}
                                                
                                                hoverBackgroundType={FeatureIconHoverBackgroundType}
                                                setHoverBackgroundType={(value) => setAttributes({ FeatureIconHoverBackgroundType: value })}
                                                hoverClassicColor={FeatureIconHoverClassicColor}
                                                setHoverClassicColor={(value) => setAttributes({ FeatureIconHoverClassicColor: value })}
                                                hoverGradientColor={FeatureIconHoverGradientColor} 
                                                setHoverGradientColor={(value) => setAttributes({ FeatureIconHoverGradientColor: value })}
                                                hoverCustomGradientSwitcher={FeatureIconHoverCustomGradientSwitcher}
                                                setHoverCustomGradientSwitcher={(value) => setAttributes({ FeatureGlobalHoverCustomGradientSwitcher: value })}
                                                hoverCustomGradientInputValue={FeatureIconHoverCustomGradientInputValue}
                                                setHoverCustomGradientInputValue={(value) => setAttributes({ FeatureIconHoverCustomGradientInputValue: value })}

                                                isBackgroundImage={false}

                                            />

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
														value={FeatureGlobalZIndex}
														onChange={(value) => setAttributes({ FeatureGlobalZIndex: value === 0 ? undefined : value })}
														min={0}
														max={10000000}
														step={1}
														allowReset
														resetFallbackValue={''}
													/>
												</PanelBody>

												<PanelBody title={__("Padding and Margin", "frontis-blocks")} initialOpen={false}>
													<FB_Spacing 
														label={__("Padding", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalPaddingUnitsHandler}
														spacingUnits={FeatureGlobalPaddingUnits}
														spacingDesktop={FeatureGlobalPaddingDesktop}
														spacingTablet={FeatureGlobalPaddingTablet}
														spacingMobile={FeatureGlobalPaddingMobile}
														handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
														spacingCombineBtn={FeatureGlobalPaddingLink}
														spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
														setAttributes={setAttributes}
													/>
													<FB_Spacing 
														label={__("Margin", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalMarginUnitsHandler}
														spacingUnits={FeatureGlobalMarginUnits}
														spacingDesktop={FeatureGlobalMarginDesktop}
														spacingTablet={FeatureGlobalMarginTablet}
														spacingMobile={FeatureGlobalMarginMobile}
														handleSpacingUnitHandler={handleGlobalMarginUnitChange}
														spacingCombineBtn={FeatureGlobalMarginLink}
														spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
														setAttributes={setAttributes}
													/>
												</PanelBody>

                                                <PanelBody
                                                    title={__("Background Color", "frontis-blocks")}
                                                    initialOpen={false}
                                                >
                                                    <FB_BackgroundColorControl
                                                        bgColorSwitcher={FeatureGlobalBgColorSwitcher}
                                                        setBgColorSwitcher={(value) => setAttributes({ FeatureGlobalBgColorSwitcher: value })}
                                                        
                                                        normalBackgroundType={FeatureGlobalNormalBackgroundType}
                                                        setNormalBackgroundType={(value) => setAttributes({ FeatureGlobalNormalBackgroundType: value })}
                                                        normalClassicColor={FeatureGlobalNormalClassicColor}
                                                        setNormalClassicColor={(value) => setAttributes({ FeatureGlobalNormalClassicColor: value })}
                                                        normalGradientColor={FeatureGlobalNormalGradientColor}
                                                        setNormalGradientColor={(value) => setAttributes({ FeatureGlobalNormalGradientColor: value })}
                                                        normalCustomGradientSwitcher={FeatureGlobalNormalCustomGradientSwitcher}
                                                        setNormalCustomGradientSwitcher={(value) => setAttributes({ FeatureGlobalNormalCustomGradientSwitcher: value })}
                                                        normalCustomGradientInputValue={FeatureGlobalNormalCustomGradientInputValue}
                                                        setNormalCustomGradientInputValue={(value) => setAttributes({ FeatureGlobalNormalCustomGradientInputValue: value })}
                                                        normalBackgroundImageUrl={FeatureGlobalNormalBackgroundImageUrl}
                                                        setNormalBackgroundImageUrl={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageUrl: value })}
                                                        normalBackgroundImageAlt={FeatureGlobalNormalBackgroundImageAlt}
                                                        setNormalBackgroundImageAlt={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageAlt: value })}
                                                        normalBackgroundImageID={FeatureGlobalNormalBackgroundImageID}
                                                        setNormalBackgroundImageID={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageID: value })}
                                                        normalBackgroundImagePosition={FeatureGlobalNormalBackgroundImagePosition}
                                                        setNormalBackgroundImagePosition={(value) => setAttributes({ FeatureGlobalNormalBackgroundImagePosition: value })}
                                                        normalBackgroundImageAttachment={FeatureGlobalNormalBackgroundImageAttachment}
                                                        setNormalBackgroundImageAttachment={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageAttachment: value })}
                                                        normalBackgroundImageRepeat={FeatureGlobalNormalBackgroundImageRepeat}
                                                        setNormalBackgroundImageRepeat={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageRepeat: value })}
                                                        normalBackgroundImageSize={FeatureGlobalNormalBackgroundImageSize}
                                                        setNormalBackgroundImageSize={(value) => setAttributes({ FeatureGlobalNormalBackgroundImageSize: value })}
                                                        
                                                        hoverBackgroundType={FeatureGlobalHoverBackgroundType}
                                                        setHoverBackgroundType={(value) => setAttributes({ FeatureGlobalHoverBackgroundType: value })}
                                                        hoverClassicColor={FeatureGlobalHoverClassicColor}
                                                        setHoverClassicColor={(value) => setAttributes({ FeatureGlobalHoverClassicColor: value })}
                                                        hoverGradientColor={FeatureGlobalHoverGradientColor} 
                                                        setHoverGradientColor={(value) => setAttributes({ FeatureGlobalHoverGradientColor: value })}
                                                        hoverCustomGradientSwitcher={FeatureGlobalHoverCustomGradientSwitcher}
                                                        setHoverCustomGradientSwitcher={(value) => setAttributes({ FeatureGlobalHoverCustomGradientSwitcher: value })}
                                                        hoverCustomGradientInputValue={FeatureGlobalHoverCustomGradientInputValue}
                                                        setHoverCustomGradientInputValue={(value) => setAttributes({ FeatureGlobalHoverCustomGradientInputValue: value })}
                                                        hoverBackgroundImageUrl={FeatureGlobalHoverBackgroundImageUrl}
                                                        setHoverBackgroundImageUrl={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageUrl: value })}
                                                        hoverBackgroundImageAlt={FeatureGlobalHoverBackgroundImageAlt}
                                                        setHoverBackgroundImageAlt={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageAlt: value })}
                                                        hoverBackgroundImageID={FeatureGlobalHoverBackgroundImageID}
                                                        setHoverBackgroundImageID={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageID: value })}
                                                        hoverBackgroundImagePosition={FeatureGlobalHoverBackgroundImagePosition}
                                                        setHoverBackgroundImagePosition={(value) => setAttributes({ FeatureGlobalHoverBackgroundImagePosition: value })}
                                                        hoverBackgroundImageAttachment={FeatureGlobalHoverBackgroundImageAttachment}
                                                        setHoverBackgroundImageAttachment={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageAttachment: value })}
                                                        hoverBackgroundImageRepeat={FeatureGlobalHoverBackgroundImageRepeat}
                                                        setHoverBackgroundImageRepeat={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageRepeat: value })}
                                                        hoverBackgroundImageSize={FeatureGlobalHoverBackgroundImageSize}
                                                        setHoverBackgroundImageSize={(value) => setAttributes({ FeatureGlobalHoverBackgroundImageSize: value })}
                                                    />
                                                </PanelBody>  
												<PanelBody title={__("Border and Shadow", "frontis-blocks")} initialOpen={false}>

													<SelectControl
															label={__("Border Style", "frontis-blocks")}
															value={FeatureGlobalBorder}
															options={BORDER_STYLES}
															onChange={(value) => setAttributes({ FeatureGlobalBorder: value })}
													/>

                                                    <FB_SwitcherControl
                                                        label={__("Border Color", "frontis-blocks")}
                                                        globalSwitcher={FeatureGlobalBorderColorSwitcher}
                                                        setGlobalSwitcher={(value) => setAttributes({ FeatureGlobalBorderColorSwitcher: value })}
                                                    />

                                                    {FeatureGlobalBorderColorSwitcher === 'normal' && (
                                                        <FB_ColorControl
                                                            label={__("Color", "frontis-blocks")}
                                                            globalColor={FeatureGlobalBorderColor}
                                                            setGlobalColor={(value) => setAttributes({ FeatureGlobalBorderColor: value })}
                                                        />
                                                    )}

                                                    {FeatureGlobalBorderColorSwitcher === 'hover' && (
                                                        <FB_ColorControl
                                                            label={__("Hover Color", "frontis-blocks")}
                                                            globalColor={FeatureGlobalBorderHoverColor}
                                                            setGlobalColor={(value) => setAttributes({ FeatureGlobalBorderHoverColor: value })}
                                                        />
                                                    )}

													<FB_Spacing 
														label={__("Border", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalBorderUnitsHandler}
														spacingUnits={FeatureGlobalBorderUnits}
														spacingDesktop={FeatureGlobalBorderDesktop}
														spacingTablet={FeatureGlobalBorderTablet}
														spacingMobile={FeatureGlobalBorderMobile}
														handleSpacingUnitHandler={handleGlobalBorderUnitChange}
														spacingCombineBtn={FeatureGlobalBorderLink}
														spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
														setAttributes={setAttributes}
													/>

													<FB_Spacing 
														label={__("Border Radius", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
														spacingUnits={FeatureGlobalBorderRadiusUnits}
														spacingDesktop={FeatureGlobalBorderRadiusDesktop}
														spacingTablet={FeatureGlobalBorderRadiusTablet}
														spacingMobile={FeatureGlobalBorderRadiusMobile}
														handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
														spacingCombineBtn={FeatureGlobalBorderRadiusLink}
														spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
														setAttributes={setAttributes}
													/>
													<FB_BoxShadowControl
														onBoxShadowChange={(value) => setAttributes({ FeatureGlobalBoxShadowValues: value })}
														initialShadowValue={FeatureGlobalBoxShadowValues}
														onBoxShadowStyleChange={(value) => setAttributes({ FeatureGlobalBoxShadowCssValue: value })}
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
