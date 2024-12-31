import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { useState, useEffect, useMemo } from '@wordpress/element';
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
import FB_HtmlTagControl from '@Components/html-tag-control';
import loadGoogleFont from '@Utils/loadGoogleFont';
import {useDeviceType} from "@Config/displayType";

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
        // deviceType,
        blockStyle,
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

        FeatureIconPaddingUnits,
        FeatureIconPaddingDesktop,
        FeatureIconPaddingTablet,
        FeatureIconPaddingMobile,
        FeatureIconPaddingLink,

        FeatureIconMarginUnits,
        FeatureIconMarginDesktop,
        FeatureIconMarginTablet,
        FeatureIconMarginMobile,
        FeatureIconMarginLink,

        FeatureIconBorder,
        FeatureIconBorderColorSwitcher,
        FeatureIconBorderColor,
        FeatureIconBorderHoverColor,
        FeatureIconBorderUnits,
        FeatureIconBorderDesktop,
        FeatureIconBorderTablet,
        FeatureIconBorderMobile,
        FeatureIconBorderLink,

        FeatureIconBorderRadiusUnits,
        FeatureIconBorderRadiusDesktop,
        FeatureIconBorderRadiusTablet,
        FeatureIconBorderRadiusMobile,
        FeatureIconBorderRadiusLink,

        FeatureIconBoxShadowSwitcher,
        FeatureIconBoxShadowValues,
        FeatureIconBoxShadowCssValue,
        FeatureIconBoxShadowHoverValues,
        FeatureIconBoxShadowHoverCssValue,

        FeatureIconSize,
        FeatureIconSizeUnits,
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

        /** Single Item */
        FeatureSingleItemBgColorSwitcher,
        FeatureSingleItemNormalBackgroundType,
        FeatureSingleItemNormalClassicColor,
        FeatureSingleItemNormalGradientColor,
        FeatureSingleItemNormalCustomGradientSwitcher,
        FeatureSingleItemNormalCustomGradientInputValue,
        FeatureSingleItemHoverBackgroundType,
        FeatureSingleItemHoverClassicColor,
        FeatureSingleItemHoverGradientColor,
        FeatureSingleItemHoverCustomGradientSwitcher,
        FeatureSingleItemHoverCustomGradientInputValue, 

        FeatureSingleItemPaddingUnits,
        FeatureSingleItemPaddingDesktop,
        FeatureSingleItemPaddingTablet,
        FeatureSingleItemPaddingMobile,
        FeatureSingleItemPaddingLink,

        FeatureSingleItemBorder,
        FeatureSingleItemBorderColorSwitcher,
        FeatureSingleItemBorderColor,
        FeatureSingleItemBorderHoverColor,

        FeatureSingleItemBorderUnits,
        FeatureSingleItemBorderDesktop,
        FeatureSingleItemBorderTablet,
        FeatureSingleItemBorderMobile,
        FeatureSingleItemBorderLink,
        
        FeatureSingleItemBorderRadiusUnits,
        FeatureSingleItemBorderRadiusDesktop,
        FeatureSingleItemBorderRadiusTablet,
        FeatureSingleItemBorderRadiusMobile,
        FeatureSingleItemBorderRadiusLink,

        FeatureSingleItemBoxShadowSwitcher,
        FeatureSingleItemBoxShadowValues,
        FeatureSingleItemBoxShadowCssValue,
        FeatureSingleItemBoxShadowHoverValues,
        FeatureSingleItemBoxShadowHoverCssValue,
        /** End Single Item */

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

        FeatureGlobalBoxShadowSwitcher,
        FeatureGlobalBoxShadowValues,
        FeatureGlobalBoxShadowCssValue,
        FeatureGlobalBoxShadowHoverValues,
        FeatureGlobalBoxShadowHoverCssValue,
        /** End Global Style */

    } = attributes;
    
	const deviceType= useDeviceType();
    
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
        const newItem = {
            id: `item-${FeatureItems.length + 1}`, 
            Title: `Feature Item ${FeatureItems.length + 1}`, 
            Description: 'Corrupti maiores atque repellendus ratione omnis possimus. Eaque laudantium tenetur.', 
            FeatureIcon: 'check' ,

            FeatureSingleItemIconColorSwitcher: "normal",
            FeatureSingleItemIconColor: "",
            FeatureSingleItemIconHoverColor: "",

            FeatureSingleItemIconBgColorSwitcher: "normal", 
            FeatureSingleItemIconNormalBackgroundType: "classic",
            FeatureSingleItemIconNormalClassicColor: "",
            FeatureSingleItemIconNormalGradientColor: null,
            FeatureSingleItemIconNormalCustomGradientSwitcher: false,
            FeatureSingleItemIconNormalCustomGradientInputValue: "",

            FeatureSingleItemIconHoverBackgroundType: "classic",
            FeatureSingleItemIconHoverClassicColor: "",
            FeatureSingleItemIconHoverGradientColor: null,
            FeatureSingleItemIconHoverCustomGradientSwitcher: false,
            FeatureSingleItemIconHoverCustomGradientInputValue: "",

            FeatureSingleItemTextColorSwitcher: "normal",
            FeatureSingleItemTextColor: "",
            FeatureSingleItemTextHoverColor: "",

            /** Start Single Item Background Color */
            FeatureItemBgColorSwitcher: "normal",
            FeatureItemNormalBackgroundType: "classic",
            FeatureItemNormalClassicColor: "",
            FeatureItemNormalGradientColor: null,       
            FeatureItemNormalCustomGradientSwitcher: false,
            FeatureItemNormalCustomGradientInputValue: "",

            FeatureItemHoverBackgroundType: "classic",
            FeatureItemHoverClassicColor: "",
            FeatureItemHoverGradientColor: null,
            FeatureItemHoverCustomGradientSwitcher: false,
            FeatureItemHoverCustomGradientInputValue: "",
            /** End Single Item Background Color */
        };
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
	const handleFeatureIconPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureIconPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureIconPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureIconPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureIconPaddingMobile: {
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
					setAttributes( {FeatureIconPaddingDesktop: {...FeatureIconPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureIconPaddingTablet: {...FeatureIconPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureIconPaddingMobile: {...FeatureIconPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handleFeatureIconPaddingCombineBtn = () => {
		setAttributes( {FeatureIconPaddingLink: !FeatureIconPaddingLink} );
	}

	const handleFeatureIconPaddingUnitsHandler = (unit) => {
		setAttributes( {
			FeatureIconPaddingUnits: {
				...FeatureIconPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const featureIconDesktopPadding    = `${FeatureIconPaddingDesktop.top}${FeatureIconPaddingUnits.Desktop} ${FeatureIconPaddingDesktop.right}${FeatureIconPaddingUnits.Desktop} ${FeatureIconPaddingDesktop.bottom}${FeatureIconPaddingUnits.Desktop} ${FeatureIconPaddingDesktop.left}${FeatureIconPaddingUnits.Desktop}`;
	const featureIconTabletPadding     = `${FeatureIconPaddingTablet.top}${FeatureIconPaddingUnits.Tablet} ${FeatureIconPaddingTablet.right}${FeatureIconPaddingUnits.Tablet} ${FeatureIconPaddingTablet.bottom}${FeatureIconPaddingUnits.Tablet} ${FeatureIconPaddingTablet.left}${FeatureIconPaddingUnits.Tablet}`;
	const featureIconMobilePadding     = `${FeatureIconPaddingMobile.top}${FeatureIconPaddingUnits.Mobile} ${FeatureIconPaddingMobile.right}${FeatureIconPaddingUnits.Mobile} ${FeatureIconPaddingMobile.bottom}${FeatureIconPaddingUnits.Mobile} ${FeatureIconPaddingMobile.left}${FeatureIconPaddingUnits.Mobile}`;
	/** End Global Padding */
	
	/** Start Global Margin */
	const handleFeatureIconMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureIconMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureIconMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureIconMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureIconMarginMobile: {
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
					setAttributes( {FeatureIconMarginDesktop: {...FeatureIconMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureIconMarginTablet: {...FeatureIconMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureIconMarginMobile: {...FeatureIconMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handleFeatureIconMarginCombineBtn = () => {
		setAttributes( {FeatureIconMarginLink: !FeatureIconMarginLink} );
	}

	const handleFeatureIconMarginUnitsHandler = (unit) => {
		setAttributes( {
			FeatureIconMarginUnits: {
				...FeatureIconMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const featureIconDesktopMargin = `${FeatureIconMarginDesktop.top}${FeatureIconMarginUnits.Desktop} ${FeatureIconMarginDesktop.right}${FeatureIconMarginUnits.Desktop} ${FeatureIconMarginDesktop.bottom}${FeatureIconMarginUnits.Desktop} ${FeatureIconMarginDesktop.left}${FeatureIconMarginUnits.Desktop}`;
	const featureIconTabletMargin = `${FeatureIconMarginTablet.top}${FeatureIconMarginUnits.Tablet} ${FeatureIconMarginTablet.right}${FeatureIconMarginUnits.Tablet} ${FeatureIconMarginTablet.bottom}${FeatureIconMarginUnits.Tablet} ${FeatureIconMarginTablet.left}${FeatureIconMarginUnits.Tablet}`;
	const featureIconMobileMargin = `${FeatureIconMarginMobile.top}${FeatureIconMarginUnits.Mobile} ${FeatureIconMarginMobile.right}${FeatureIconMarginUnits.Mobile} ${FeatureIconMarginMobile.bottom}${FeatureIconMarginUnits.Mobile} ${FeatureIconMarginMobile.left}${FeatureIconMarginUnits.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleFeatureIconBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureIconBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureIconBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureIconBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureIconBorderMobile: {
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
					setAttributes( {FeatureIconBorderDesktop: {...FeatureIconBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureIconBorderTablet: {...FeatureIconBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureIconBorderMobile: {...FeatureIconBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleFeatureIconBorderCombineBtn = () => {
		setAttributes( {FeatureIconBorderLink: !FeatureIconBorderLink} );
	}

	const handleFeatureIconBorderUnitsHandler = (unit) => {
		setAttributes( {
			FeatureIconBorderUnits: {
				...FeatureIconBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const featureIconDesktopBorderWidth = `${FeatureIconBorderDesktop.top}${FeatureIconBorderUnits.Desktop} ${FeatureIconBorderDesktop.right}${FeatureIconBorderUnits.Desktop} ${FeatureIconBorderDesktop.bottom}${FeatureIconBorderUnits.Desktop} ${FeatureIconBorderDesktop.left}${FeatureIconBorderUnits.Desktop}`;
	const featureIconTabletBorderWidth = `${FeatureIconBorderTablet.top}${FeatureIconBorderUnits.Tablet} ${FeatureIconBorderTablet.right}${FeatureIconBorderUnits.Tablet} ${FeatureIconBorderTablet.bottom}${FeatureIconBorderUnits.Tablet} ${FeatureIconBorderTablet.left}${FeatureIconBorderUnits.Tablet}`;
	const featureIconMobileBorderWidth = `${FeatureIconBorderMobile.top}${FeatureIconBorderUnits.Mobile} ${FeatureIconBorderMobile.right}${FeatureIconBorderUnits.Mobile} ${FeatureIconBorderMobile.bottom}${FeatureIconBorderUnits.Mobile} ${FeatureIconBorderMobile.left}${FeatureIconBorderUnits.Mobile}`;
	/** End Border */


	/** Start Global border radius*/
	const handleFeatureIconBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureIconBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureIconBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureIconBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureIconBorderRadiusMobile: {
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
					setAttributes( {FeatureIconBorderRadiusDesktop: {...FeatureIconBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureIconBorderRadiusTablet: {...FeatureIconBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureIconBorderRadiusMobile: {...FeatureIconBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleFeatureIconBorderRadiusCombineBtn = () => {
		setAttributes( {FeatureIconBorderRadiusLink: !FeatureIconBorderRadiusLink} );
	}

	const handleFeatureIconBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			FeatureIconBorderRadiusUnits: {
				...FeatureIconBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */

	/** End Global Border Radius */
	const featureIconDesktopBorderRadiusWidth = `${FeatureIconBorderRadiusDesktop.top}${FeatureIconBorderRadiusUnits.Desktop} ${FeatureIconBorderRadiusDesktop.right}${FeatureIconBorderRadiusUnits.Desktop} ${FeatureIconBorderRadiusDesktop.bottom}${FeatureIconBorderRadiusUnits.Desktop} ${FeatureIconBorderRadiusDesktop.left}${FeatureIconBorderRadiusUnits.Desktop}`;
	const featureIconTabletBorderRadiusWidth = `${FeatureIconBorderRadiusTablet.top}${FeatureIconBorderRadiusUnits.Tablet} ${FeatureIconBorderRadiusTablet.right}${FeatureIconBorderRadiusUnits.Tablet} ${FeatureIconBorderRadiusTablet.bottom}${FeatureIconBorderRadiusUnits.Tablet} ${FeatureIconBorderRadiusTablet.left}${FeatureIconBorderRadiusUnits.Tablet}`;
	const featureIconMobileBorderRadiusWidth = `${FeatureIconBorderRadiusMobile.top}${FeatureIconBorderRadiusUnits.Mobile} ${FeatureIconBorderRadiusMobile.right}${FeatureIconBorderRadiusUnits.Mobile} ${FeatureIconBorderRadiusMobile.bottom}${FeatureIconBorderRadiusUnits.Mobile} ${FeatureIconBorderRadiusMobile.left}${FeatureIconBorderRadiusUnits.Mobile}`;
	/** End Border Radius */

    /** Start Single Item Padding */
	const handleSingleItemPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureSingleItemPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureSingleItemPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureSingleItemPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureSingleItemPaddingMobile: {
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
					setAttributes( {FeatureSingleItemPaddingDesktop: {...FeatureSingleItemPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureSingleItemPaddingTablet: {...FeatureSingleItemPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureSingleItemPaddingMobile: {...FeatureSingleItemPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handleSingleItemPaddingCombineBtn = () => {
		setAttributes( {FeatureSingleItemPaddingLink: !FeatureSingleItemPaddingLink} );
	}

	const handleSingleItemPaddingUnitsHandler = (unit) => {
		setAttributes( {
			FeatureSingleItemPaddingUnits: {
				...FeatureSingleItemPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const singleItemDesktopPadding    = `${FeatureSingleItemPaddingDesktop.top}${FeatureSingleItemPaddingUnits.Desktop} ${FeatureSingleItemPaddingDesktop.right}${FeatureSingleItemPaddingUnits.Desktop} ${FeatureSingleItemPaddingDesktop.bottom}${FeatureSingleItemPaddingUnits.Desktop} ${FeatureSingleItemPaddingDesktop.left}${FeatureSingleItemPaddingUnits.Desktop}`;
	const singleItemTabletPadding     = `${FeatureSingleItemPaddingTablet.top}${FeatureSingleItemPaddingUnits.Tablet} ${FeatureSingleItemPaddingTablet.right}${FeatureSingleItemPaddingUnits.Tablet} ${FeatureSingleItemPaddingTablet.bottom}${FeatureSingleItemPaddingUnits.Tablet} ${FeatureSingleItemPaddingTablet.left}${FeatureSingleItemPaddingUnits.Tablet}`;
	const singleItemMobilePadding     = `${FeatureSingleItemPaddingMobile.top}${FeatureSingleItemPaddingUnits.Mobile} ${FeatureSingleItemPaddingMobile.right}${FeatureSingleItemPaddingUnits.Mobile} ${FeatureSingleItemPaddingMobile.bottom}${FeatureSingleItemPaddingUnits.Mobile} ${FeatureSingleItemPaddingMobile.left}${FeatureSingleItemPaddingUnits.Mobile}`;
	/** End Single Item Padding */

	/** Start Single Item Border */
	const handleSingleItemBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureSingleItemBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureSingleItemBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureSingleItemBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureSingleItemBorderMobile: {
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
					setAttributes( {FeatureSingleItemBorderDesktop: {...FeatureSingleItemBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureSingleItemBorderTablet: {...FeatureSingleItemBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureSingleItemBorderMobile: {...FeatureSingleItemBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSingleItemBorderCombineBtn = () => {
		setAttributes( {FeatureSingleItemBorderLink: !FeatureSingleItemBorderLink} );
	}

	const handleSingleItemBorderUnitsHandler = (unit) => {
		setAttributes( {
			FeatureSingleItemBorderUnits: {
				...FeatureSingleItemBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const singleItemDesktopBorderWidth = `${FeatureSingleItemBorderDesktop.top}${FeatureSingleItemBorderUnits.Desktop} ${FeatureSingleItemBorderDesktop.right}${FeatureSingleItemBorderUnits.Desktop} ${FeatureSingleItemBorderDesktop.bottom}${FeatureSingleItemBorderUnits.Desktop} ${FeatureSingleItemBorderDesktop.left}${FeatureSingleItemBorderUnits.Desktop}`;
	const singleItemTabletBorderWidth = `${FeatureSingleItemBorderTablet.top}${FeatureSingleItemBorderUnits.Tablet} ${FeatureSingleItemBorderTablet.right}${FeatureSingleItemBorderUnits.Tablet} ${FeatureSingleItemBorderTablet.bottom}${FeatureSingleItemBorderUnits.Tablet} ${FeatureSingleItemBorderTablet.left}${FeatureSingleItemBorderUnits.Tablet}`;
	const singleItemMobileBorderWidth = `${FeatureSingleItemBorderMobile.top}${FeatureSingleItemBorderUnits.Mobile} ${FeatureSingleItemBorderMobile.right}${FeatureSingleItemBorderUnits.Mobile} ${FeatureSingleItemBorderMobile.bottom}${FeatureSingleItemBorderUnits.Mobile} ${FeatureSingleItemBorderMobile.left}${FeatureSingleItemBorderUnits.Mobile}`;
	/** End Border */

	/** Start Single Item Border Radius*/
	const handleSingleItemBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( FeatureSingleItemBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						FeatureSingleItemBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						FeatureSingleItemBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						FeatureSingleItemBorderRadiusMobile: {
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
					setAttributes( {FeatureSingleItemBorderRadiusDesktop: {...FeatureSingleItemBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {FeatureSingleItemBorderRadiusTablet: {...FeatureSingleItemBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {FeatureSingleItemBorderRadiusMobile: {...FeatureSingleItemBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleSingleItemBorderRadiusCombineBtn = () => {
		setAttributes( {FeatureSingleItemBorderRadiusLink: !FeatureSingleItemBorderRadiusLink} );
	}

	const handleSingleItemBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			FeatureSingleItemBorderRadiusUnits: {
				...FeatureSingleItemBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Single Item Border */

	/** End Global Border Radius */
	const singleItemDesktopBorderRadiusWidth = `${FeatureSingleItemBorderRadiusDesktop.top}${FeatureSingleItemBorderRadiusUnits.Desktop} ${FeatureSingleItemBorderRadiusDesktop.right}${FeatureSingleItemBorderRadiusUnits.Desktop} ${FeatureSingleItemBorderRadiusDesktop.bottom}${FeatureSingleItemBorderRadiusUnits.Desktop} ${FeatureSingleItemBorderRadiusDesktop.left}${FeatureSingleItemBorderRadiusUnits.Desktop}`;
	const singleItemTabletBorderRadiusWidth = `${FeatureSingleItemBorderRadiusTablet.top}${FeatureSingleItemBorderRadiusUnits.Tablet} ${FeatureSingleItemBorderRadiusTablet.right}${FeatureSingleItemBorderRadiusUnits.Tablet} ${FeatureSingleItemBorderRadiusTablet.bottom}${FeatureSingleItemBorderRadiusUnits.Tablet} ${FeatureSingleItemBorderRadiusTablet.left}${FeatureSingleItemBorderRadiusUnits.Tablet}`;
	const singleItemMobileBorderRadiusWidth = `${FeatureSingleItemBorderRadiusMobile.top}${FeatureSingleItemBorderRadiusUnits.Mobile} ${FeatureSingleItemBorderRadiusMobile.right}${FeatureSingleItemBorderRadiusUnits.Mobile} ${FeatureSingleItemBorderRadiusMobile.bottom}${FeatureSingleItemBorderRadiusUnits.Mobile} ${FeatureSingleItemBorderRadiusMobile.left}${FeatureSingleItemBorderRadiusUnits.Mobile}`;
	/** End Single Item Border Radius */ 



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

    /* Start Load Google Fonts */
	useEffect(() => {
		loadGoogleFont(FeatureTitleFontFamily);
        loadGoogleFont(FeatureDescFontFamily);
	}, [FeatureTitleFontFamily, FeatureDescFontFamily]);

    /* End Load Google Fonts */


    /** Start Feature Item Color Style */
	const featureSingleItemStyle = useMemo(() => {
        let style = '';
        FeatureItems.forEach(item => {

            /** Start Single Item Icon Color */
            const singleIconColorStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id} .fb-feature-list-icon svg {
                fill: ${item.FeatureSingleItemIconColor};
            }`;
            style += singleIconColorStyle;

            const singleIconHoverColorStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id} .fb-feature-list-icon:hover svg {
                fill: ${item.FeatureSingleItemIconHoverColor};
            }`;
            style += singleIconHoverColorStyle;
            /** End Single Item Icon Color */

            /** Start Single Item Icon Background Color */
            const singleIconNormalBackgroundType = item.FeatureSingleItemIconNormalBackgroundType;
			if (singleIconNormalBackgroundType === 'gradient') {
				const gradientStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id} .fb-feature-list-icon-inner {
					background: ${item.FeatureSingleItemIconNormalCustomGradientSwitcher ? item.FeatureSingleItemIconNormalCustomGradientInputValue : item.FeatureSingleItemIconNormalGradientColor};
				}`;
				style += gradientStyle;

			} else {
				const singleIconNormalClassicStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id} .fb-feature-list-icon-inner {
					background: ${item.FeatureSingleItemIconNormalClassicColor};
				}`;
				style += singleIconNormalClassicStyle;
			}

			const singleIconHoverBackgroundType = item.FeatureSingleItemIconHoverBackgroundType; 
			if (singleIconHoverBackgroundType === 'gradient') {
				const singleIconHoverGradientStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id}:hover .fb-feature-list-icon-inner {
					background: ${item.FeatureItemHoverCustomGradientSwitcher ? item.FeatureItemHoverCustomGradientInputValue : item.FeatureItemHoverGradientColor};
				}`;
				style += singleIconHoverGradientStyle;

			} else {
				const hoverClassicStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id}:hover {
					background: ${item.FeatureItemHoverClassicColor};
				}`;
				style += hoverClassicStyle;
			}
            /** End Single Item Icon Background Color */

            /** Start Single Item Title Color */
            const singleItemTitleColorStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id} .fb-feature-list-title, .${blockID} .fb-feature-list-item.single-item-${item.id} .fb-feature-list-text {
                color: ${item.FeatureSingleItemTextColor};
            }`;
            style += singleItemTitleColorStyle;

            const singleItemTitleHoverColorStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id} .fb-feature-list-title:hover, .${blockID} .fb-feature-list-item.single-item-${item.id} .fb-feature-list-text:hover {
                color: ${item.FeatureSingleItemTextHoverColor};
            }`;
            style += singleItemTitleHoverColorStyle;
            /** End Single Item Title Color */

            /** Start Single Item Background Color */
			const normalItemBackgroundType = item.FeatureItemNormalBackgroundType;
			if (normalItemBackgroundType === 'gradient') {
				const gradientStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id} {
					background: ${item.FeatureItemNormalCustomGradientSwitcher && item.FeatureItemNormalCustomGradientInputValue ? item.FeatureItemNormalCustomGradientInputValue : item.FeatureItemNormalGradientColor} !important;
				}`;
				style += gradientStyle;

			} else {
				const classicStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id} {
					background: ${item.FeatureItemNormalClassicColor} !important;
				}`;
				style += classicStyle;
			}

			const hoverItemBackgroundType = item.FeatureItemHoverBackgroundType;
			if (hoverItemBackgroundType === 'gradient') {
				const hoverGradientStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id}:hover {
					background: ${item.FeatureItemHoverCustomGradientSwitcher && item.FeatureItemHoverCustomGradientInputValue ? item.FeatureItemHoverCustomGradientInputValue : item.FeatureItemHoverGradientColor} !important;
				}`;
				style += hoverGradientStyle;

			} else {
				const hoverClassicStyle = `.${blockID} .fb-feature-list-item.single-item-${item.id}:hover {
					background: ${item.FeatureItemHoverClassicColor} !important;
				}`;
				style += hoverClassicStyle;
			}
            /** End Single Item Background Color */

        });
        return style;
    }, [FeatureItems, blockID]);




    const allBlockStyle = useMemo(() => {
        let style = `

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
                ${FeatureGlobalZIndex.Desktop ? `z-index: ${FeatureGlobalZIndex.Desktop};` : ''}
                position: relative;
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
                ${FeatureGlobalBoxShadowHoverCssValue ? `box-shadow: ${FeatureGlobalBoxShadowHoverCssValue};` : ''}
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-item {
                ${FeatureSingleItemNormalBackgroundType === 'gradient' ? `  
                    background: ${FeatureSingleItemNormalCustomGradientSwitcher && FeatureSingleItemNormalCustomGradientInputValue ? FeatureSingleItemNormalCustomGradientInputValue : FeatureSingleItemNormalGradientColor};
                `: `
                    background: ${FeatureSingleItemNormalClassicColor};
                `}
                ${singleItemDesktopPadding ? `padding: ${singleItemDesktopPadding};` : ''}
                ${FeatureSingleItemBorder ? `border: ${FeatureSingleItemBorder};` : ''} 
                ${singleItemDesktopBorderWidth ? `border-width: ${singleItemDesktopBorderWidth};` : ''}
                ${singleItemDesktopBorderRadiusWidth ? `border-radius: ${singleItemDesktopBorderRadiusWidth};` : ''}
                ${FeatureSingleItemBorderColor ? `border-color: ${FeatureSingleItemBorderColor};` : ''}
                ${FeatureSingleItemBoxShadowCssValue ? `box-shadow: ${FeatureSingleItemBoxShadowCssValue};` : ''}
                transition: all .3s ease-in-out;
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:hover {
                ${FeatureSingleItemHoverBackgroundType === 'gradient' ? `  
                    background: ${FeatureSingleItemHoverCustomGradientSwitcher && FeatureSingleItemHoverCustomGradientInputValue ? FeatureSingleItemHoverCustomGradientInputValue : FeatureSingleItemHoverGradientColor};
                `: `
                    background: ${FeatureSingleItemHoverClassicColor};
                `}
                ${FeatureSingleItemBorderHoverColor ? `border-color: ${FeatureSingleItemBorderHoverColor};` : ''}
                ${FeatureSingleItemBoxShadowHoverCssValue ? `box-shadow: ${FeatureSingleItemBoxShadowHoverCssValue};` : ''}
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:last-child) {
                margin-bottom: calc(${FeatureListGap.Desktop}${FeatureListGapUnits.Desktop} / 2);
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:first-child) {
                margin-top: calc(${FeatureListGap.Desktop}${FeatureListGapUnits.Desktop} / 2);  
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
                ${featureIconDesktopMargin ? `margin: ${featureIconDesktopMargin};` : ''}
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner {
                ${FeatureIconNormalBackgroundType === 'gradient' ? ` 
                    background: ${FeatureIconNormalCustomGradientSwitcher && FeatureIconNormalCustomGradientInputValue ? FeatureIconNormalCustomGradientInputValue : FeatureIconNormalGradientColor};
                `: `
                    background: ${FeatureIconNormalClassicColor};
                `}
                ${featureIconDesktopPadding ? `padding: ${featureIconDesktopPadding};` : ''} 
                ${FeatureIconBorder ? `border: ${FeatureIconBorder};` : ''} 
                ${featureIconDesktopBorderWidth ? `border-width: ${featureIconDesktopBorderWidth};` : ''}
                ${FeatureIconBorderColor ? `border-color: ${FeatureIconBorderColor};` : ''}
                ${FeatureIconBoxShadowCssValue ? `box-shadow: ${FeatureIconBoxShadowCssValue};` : ''}
                ${featureIconDesktopBorderRadiusWidth ? `border-radius: ${featureIconDesktopBorderRadiusWidth};` : ''}
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.circle {
                ${featureIconDesktopBorderRadiusWidth ? `border-radius: ${featureIconDesktopBorderRadiusWidth};` : '50%'} 
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.square {
                ${featureIconDesktopBorderRadiusWidth ? `border-radius: ${featureIconDesktopBorderRadiusWidth};` : '0'} 
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.rhombus {
                ${featureIconDesktopBorderRadiusWidth ? `border-radius: ${featureIconDesktopBorderRadiusWidth};` : '0'} 
            }
            .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner:hover {
                ${FeatureIconHoverBackgroundType === 'gradient' ? ` 
                    background: ${FeatureIconHoverCustomGradientSwitcher && FeatureIconHoverCustomGradientInputValue ? FeatureIconHoverCustomGradientInputValue : FeatureIconHoverGradientColor};
                `: `
                    background: ${FeatureIconHoverClassicColor};
                `}
                ${FeatureIconBorderHoverColor ? `border-color: ${FeatureIconBorderHoverColor};` : ''}
                ${FeatureIconBoxShadowHoverCssValue ? `box-shadow: ${FeatureIconBoxShadowHoverCssValue};` : ''}
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
                    ${FeatureGlobalZIndex.Tablet ? `z-index: ${FeatureGlobalZIndex.Tablet};` : ''}
                    ${globalTabletPadding ? `padding: ${globalTabletPadding};` : ''}
                    ${globalTabletMargin ? `margin: ${globalTabletMargin};` : ''} 
                    ${globalTabletBorderWidth ? `border-width: ${globalTabletBorderWidth};` : ''}
                    ${globalTabletBorderRadiusWidth ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
                }

                .fb-feature-main-wrapper.${blockID} .fb-feature-list-item {
                    ${singleItemTabletPadding ? `padding: ${singleItemTabletPadding};` : ''}
                    ${singleItemTabletBorderWidth ? `border-width: ${singleItemTabletBorderWidth};` : ''}
                    ${singleItemTabletBorderRadiusWidth ? `border-radius: ${singleItemTabletBorderRadiusWidth};` : ''}
                }

                .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:last-child) {
                    margin-bottom: calc(${FeatureListGap.Tablet}${FeatureListGapUnits.Tablet} / 2); 
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:first-child) {
                    margin-top: calc(${FeatureListGap.Tablet}${FeatureListGapUnits.Tablet} / 2);
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon svg {
                    height: ${FeatureIconSize.Tablet}${FeatureIconSizeUnits.Tablet};
                    width: ${FeatureIconSize.Tablet}${FeatureIconSizeUnits.Tablet};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner {
                    ${featureIconTabletPadding ? `padding: ${featureIconTabletPadding};` : ''} 
                    ${featureIconTabletBorderWidth ? `border-width: ${featureIconTabletBorderWidth};` : ''}
                    ${featureIconTabletBorderRadiusWidth ? `border-radius: ${featureIconTabletBorderRadiusWidth};` : ''}
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.circle {
                    ${featureIconTabletBorderRadiusWidth ? `border-radius: ${featureIconTabletBorderRadiusWidth};` : '50%'} 
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.square {
                    ${featureIconTabletBorderRadiusWidth ? `border-radius: ${featureIconTabletBorderRadiusWidth};` : '0'} 
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.rhombus {
                    ${featureIconTabletBorderRadiusWidth ? `border-radius: ${featureIconTabletBorderRadiusWidth};` : '0'} 
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box {
                    ${featureIconTabletMargin ? `margin: ${featureIconTabletMargin};` : ''} 
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
                    ${FeatureGlobalZIndex.Mobile ? `z-index: ${FeatureGlobalZIndex.Mobile};` : ''}
                    ${globalMobilePadding ? `padding: ${globalMobilePadding};` : ''}
                    ${globalMobileMargin ? `margin: ${globalMobileMargin};` : ''} 
                    ${globalMobileBorderWidth ? `border-width: ${globalMobileBorderWidth};` : ''}
                    ${globalMobileBorderRadiusWidth ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-item {
                    ${singleItemMobilePadding ? `padding: ${singleItemMobilePadding};` : ''}
                    ${singleItemMobileBorderWidth ? `border-width: ${singleItemMobileBorderWidth};` : ''}
                    ${singleItemMobileBorderRadiusWidth ? `border-radius: ${singleItemMobileBorderRadiusWidth};` : ''}
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:last-child) {
                    margin-bottom: calc(${FeatureListGap.Mobile}${FeatureListGapUnits.Mobile} / 2);  
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:first-child) {
                    margin-top: calc(${FeatureListGap.Mobile}${FeatureListGapUnits.Mobile} / 2);
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon svg {
                    height: ${FeatureIconSize.Mobile}${FeatureIconSizeUnits.Mobile}; 
                    width: ${FeatureIconSize.Mobile}${FeatureIconSizeUnits.Mobile};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner {
                    ${featureIconMobilePadding ? `padding: ${featureIconMobilePadding};` : ''} 
                    ${featureIconMobileBorderWidth ? `border-width: ${featureIconMobileBorderWidth};` : ''}
                    ${featureIconMobileBorderRadiusWidth ? `border-radius: ${featureIconMobileBorderRadiusWidth};` : ''}
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.circle {
                    ${featureIconMobileBorderRadiusWidth ? `border-radius: ${featureIconMobileBorderRadiusWidth};` : '50%'} 
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.square {
                    ${featureIconMobileBorderRadiusWidth ? `border-radius: ${featureIconMobileBorderRadiusWidth};` : '0'} 
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner.rhombus {
                    ${featureIconMobileBorderRadiusWidth ? `border-radius: ${featureIconMobileBorderRadiusWidth};` : '0'} 
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box {
                    ${featureIconMobileMargin ? `margin: ${featureIconMobileMargin};` : ''}
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
        `;
        return style;
    }, [
        blockID,
        deviceType,
        blockStyle,
        FeatureItems,
        FeatureTag,
        FeatureAlignment,
        FeatureIconAlignment,
        FeatureIconShape,
        FeatureListGap,
        FeatureListGapUnits,
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
        FeatureIconPaddingUnits,
        FeatureIconPaddingDesktop,
        FeatureIconPaddingTablet,
        FeatureIconPaddingMobile,
        FeatureIconPaddingLink,
        FeatureIconMarginUnits,
        FeatureIconMarginDesktop,
        FeatureIconMarginTablet,
        FeatureIconMarginMobile,
        FeatureIconMarginLink,
        FeatureIconBorder,
        FeatureIconBorderColorSwitcher,
        FeatureIconBorderColor,
        FeatureIconBorderHoverColor,
        FeatureIconBorderUnits,
        FeatureIconBorderDesktop,
        FeatureIconBorderTablet,
        FeatureIconBorderMobile,
        FeatureIconBorderLink,
        FeatureIconBorderRadiusUnits,
        FeatureIconBorderRadiusDesktop,
        FeatureIconBorderRadiusTablet,
        FeatureIconBorderRadiusMobile,
        FeatureIconBorderRadiusLink,
        FeatureIconBoxShadowValues,
        FeatureIconBoxShadowSwitcher,
        FeatureIconBoxShadowValues,
        FeatureIconBoxShadowCssValue,
        FeatureIconBoxShadowHoverValues,
        FeatureIconBoxShadowHoverCssValue,
        FeatureIconSize,
        FeatureIconSizeUnits,
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
        FeatureSingleItemBgColorSwitcher,
        FeatureSingleItemNormalBackgroundType,
        FeatureSingleItemNormalClassicColor,
        FeatureSingleItemNormalGradientColor,
        FeatureSingleItemNormalCustomGradientSwitcher,
        FeatureSingleItemNormalCustomGradientInputValue,
        FeatureSingleItemHoverBackgroundType,
        FeatureSingleItemHoverClassicColor,
        FeatureSingleItemHoverGradientColor,
        FeatureSingleItemHoverCustomGradientSwitcher,
        FeatureSingleItemHoverCustomGradientInputValue,
        FeatureSingleItemPaddingUnits,
        FeatureSingleItemPaddingDesktop,
        FeatureSingleItemPaddingTablet,
        FeatureSingleItemPaddingMobile,
        FeatureSingleItemPaddingLink,
        FeatureSingleItemBorder,
        FeatureSingleItemBorderColorSwitcher,
        FeatureSingleItemBorderColor,
        FeatureSingleItemBorderHoverColor,
        FeatureSingleItemBorderUnits,
        FeatureSingleItemBorderDesktop,
        FeatureSingleItemBorderTablet,
        FeatureSingleItemBorderMobile,
        FeatureSingleItemBorderLink,
        FeatureSingleItemBorderRadiusUnits,
        FeatureSingleItemBorderRadiusDesktop,
        FeatureSingleItemBorderRadiusTablet,
        FeatureSingleItemBorderRadiusMobile,
        FeatureSingleItemBorderRadiusLink,
        FeatureSingleItemBoxShadowSwitcher,
        FeatureSingleItemBoxShadowValues,
        FeatureSingleItemBoxShadowCssValue,
        FeatureSingleItemBoxShadowHoverValues,
        FeatureSingleItemBoxShadowHoverCssValue,
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
        FeatureGlobalBoxShadowSwitcher,
        FeatureGlobalBoxShadowValues,
        FeatureGlobalBoxShadowCssValue,
        FeatureGlobalBoxShadowHoverValues,
        FeatureGlobalBoxShadowHoverCssValue,
        globalDesktopPadding,
        globalDesktopMargin,
        globalDesktopBorderWidth,
        globalDesktopBorderRadiusWidth,
        globalTabletPadding,
        globalTabletMargin,
        globalTabletBorderWidth,
        globalTabletBorderRadiusWidth,
        globalMobilePadding,
        globalMobileMargin,
        globalMobileBorderWidth,
        globalMobileBorderRadiusWidth,
        singleItemDesktopPadding,
        singleItemDesktopBorderWidth,
        singleItemDesktopBorderRadiusWidth,
        featureIconDesktopMargin,
        featureIconDesktopPadding,
        featureIconDesktopBorderWidth,
        featureIconDesktopBorderRadiusWidth,
        featureIconTabletPadding,
        featureIconTabletBorderWidth,
        featureIconTabletBorderRadiusWidth,
        featureIconTabletMargin,
        featureIconMobilePadding,
        featureIconMobileBorderWidth,
        featureIconMobileBorderRadiusWidth,
        featureIconMobileMargin,
        FeatureTitleFontSize.Tablet,
        FeatureTitleFontSizeUnits.Tablet,
        FeatureTitleLetterSpacing.Tablet,
        FeatureTitleLetterSpacingUnits.Tablet,
        FeatureTitleLineHeight.Tablet,
        FeatureTitleLineHeightUnits.Tablet,
        FeatureDescFontSize.Tablet,
        FeatureDescFontSizeUnits.Tablet,
        FeatureDescLetterSpacing.Tablet,
        FeatureDescLetterSpacingUnits.Tablet,
        FeatureDescLineHeight.Tablet,
        FeatureDescLineHeightUnits.Tablet,
        FeatureTitleFontSize.Mobile,
        FeatureTitleFontSizeUnits.Mobile,
        FeatureTitleLetterSpacing.Mobile,
        FeatureTitleLetterSpacingUnits.Mobile,
        FeatureTitleLineHeight.Mobile,
        FeatureTitleLineHeightUnits.Mobile,
        FeatureDescFontSize.Mobile,
        FeatureDescFontSizeUnits.Mobile,
        FeatureDescLetterSpacing.Mobile,
        FeatureDescLetterSpacingUnits.Mobile,
        FeatureDescLineHeight.Mobile,
        FeatureDescLineHeightUnits.Mobile
    ]);

    useEffect(() => {
        setAttributes({blockStyle: `${featureSingleItemStyle}${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
    }, [featureSingleItemStyle, allBlockStyle]);



    const editorStyle = featureSingleItemStyle + allBlockStyle.replace(/\s+/g, ' ').trim();

    return (
        <>
            <style>
                {editorStyle}
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

                                            <FB_HtmlTagControl
                                                label={__("Title Tag", "frontis-blocks")}
                                                globalHtmlTag={FeatureTag}
                                                setGlobalHtmlTag={(value) => setAttributes({ FeatureTag: value })}
                                            />

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

                                            <FB_Spacing 
                                                label={__("Padding", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleFeatureIconPaddingUnitsHandler}
                                                spacingUnits={FeatureIconPaddingUnits}
                                                spacingDesktop={FeatureIconPaddingDesktop}
                                                spacingTablet={FeatureIconPaddingTablet}
                                                spacingMobile={FeatureIconPaddingMobile}
                                                handleSpacingUnitHandler={handleFeatureIconPaddingUnitChange}
                                                spacingCombineBtn={FeatureIconPaddingLink}
                                                spacingCombineBtnHandler={handleFeatureIconPaddingCombineBtn}
                                                setAttributes={setAttributes}
                                            />
                                            <FB_Spacing 
                                                label={__("Margin", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleFeatureIconMarginUnitsHandler}
                                                spacingUnits={FeatureIconMarginUnits}
                                                spacingDesktop={FeatureIconMarginDesktop}
                                                spacingTablet={FeatureIconMarginTablet}
                                                spacingMobile={FeatureIconMarginMobile}
                                                handleSpacingUnitHandler={handleFeatureIconMarginUnitChange}
                                                spacingCombineBtn={FeatureIconMarginLink}
                                                spacingCombineBtnHandler={handleFeatureIconMarginCombineBtn}
                                                setAttributes={setAttributes}
                                            />

                                            <SelectControl
                                                label={__("Border Style", "frontis-blocks")}
                                                value={FeatureIconBorder}
                                                options={BORDER_STYLES}
                                                onChange={(value) => setAttributes({ FeatureIconBorder: value })}
                                            />

                                            <FB_SwitcherControl
                                                label={__("Border Color", "frontis-blocks")}
                                                globalSwitcher={FeatureIconBorderColorSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ FeatureIconBorderColorSwitcher: value })}
                                            />

                                            {FeatureIconBorderColorSwitcher === 'normal' && (
                                                <FB_ColorControl
                                                    label={__("Color", "frontis-blocks")}
                                                    globalColor={FeatureIconBorderColor}
                                                    setGlobalColor={(value) => setAttributes({ FeatureIconBorderColor: value })}
                                                />
                                            )}

                                            {FeatureIconBorderColorSwitcher === 'hover' && (
                                                <FB_ColorControl
                                                    label={__("Hover Color", "frontis-blocks")}
                                                    globalColor={FeatureIconBorderHoverColor}
                                                    setGlobalColor={(value) => setAttributes({ FeatureIconBorderHoverColor: value })}
                                                />
                                            )}

                                            <FB_Spacing 
                                                label={__("Border", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleFeatureIconBorderUnitsHandler}
                                                spacingUnits={FeatureIconBorderUnits}
                                                spacingDesktop={FeatureIconBorderDesktop}
                                                spacingTablet={FeatureIconBorderTablet}
                                                spacingMobile={FeatureIconBorderMobile}
                                                handleSpacingUnitHandler={handleFeatureIconBorderUnitChange}
                                                spacingCombineBtn={FeatureIconBorderLink}
                                                spacingCombineBtnHandler={handleFeatureIconBorderCombineBtn}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_Spacing 
                                                label={__("Border Radius", "frontis-blocks")}
                                                deviceType={deviceType}
                                                spacingUnitsHandler={handleFeatureIconBorderRadiusUnitsHandler}
                                                spacingUnits={FeatureIconBorderRadiusUnits}
                                                spacingDesktop={FeatureIconBorderRadiusDesktop}
                                                spacingTablet={FeatureIconBorderRadiusTablet}
                                                spacingMobile={FeatureIconBorderRadiusMobile}
                                                handleSpacingUnitHandler={handleFeatureIconBorderRadiusUnitChange}
                                                spacingCombineBtn={FeatureIconBorderRadiusLink}
                                                spacingCombineBtnHandler={handleFeatureIconBorderRadiusCombineBtn}
                                                setAttributes={setAttributes}
                                            />

                                            <FB_SwitcherControl
                                                label={__("Box Shadow", "frontis-blocks")}
                                                globalSwitcher={FeatureIconBoxShadowSwitcher}
                                                setGlobalSwitcher={(value) => setAttributes({ FeatureIconBoxShadowSwitcher: value })}
                                            />

                                            {FeatureIconBoxShadowSwitcher === 'normal' && (
                                                <FB_BoxShadowControl
                                                    label={__("Normal Shadow", "frontis-blocks")}
                                                    onBoxShadowChange={(value) => setAttributes({ FeatureIconBoxShadowValues: value })}
                                                    initialShadowValue={FeatureIconBoxShadowValues}
                                                    onBoxShadowStyleChange={(value) => setAttributes({ FeatureIconBoxShadowCssValue: value })}
                                                />
                                            )}

                                            {FeatureIconBoxShadowSwitcher === 'hover' && (
                                                <FB_BoxShadowControl
                                                    label={__("Hover Shadow", "frontis-blocks")}
                                                    onBoxShadowChange={(value) => setAttributes({ FeatureIconBoxShadowHoverValues: value })}
                                                    initialShadowValue={FeatureIconBoxShadowHoverValues}
                                                    onBoxShadowStyleChange={(value) => setAttributes({ FeatureIconBoxShadowHoverCssValue: value })}
                                                />
                                            )}

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

                                        <PanelBody
                                            title={__("Background Color", "frontis-blocks")}
                                            initialOpen={false}
                                        >
                                            <FB_BackgroundColorControl
                                                label={__("BackgroundColor", "frontis-blocks")}
                                                bgColorSwitcher={FeatureSingleItemBgColorSwitcher}
                                                setBgColorSwitcher={(value) => setAttributes({ FeatureSingleItemBgColorSwitcher: value })}
                                                
                                                normalBackgroundType={FeatureSingleItemNormalBackgroundType}
                                                setNormalBackgroundType={(value) => setAttributes({ FeatureSingleItemNormalBackgroundType: value })}
                                                normalClassicColor={FeatureSingleItemNormalClassicColor}
                                                setNormalClassicColor={(value) => setAttributes({ FeatureSingleItemNormalClassicColor: value })}
                                                normalGradientColor={FeatureSingleItemNormalGradientColor}
                                                setNormalGradientColor={(value) => setAttributes({ FeatureSingleItemNormalGradientColor: value })}
                                                normalCustomGradientSwitcher={FeatureSingleItemNormalCustomGradientSwitcher}
                                                setNormalCustomGradientSwitcher={(value) => setAttributes({ FeatureSingleItemNormalCustomGradientSwitcher: value })}
                                                normalCustomGradientInputValue={FeatureSingleItemNormalCustomGradientInputValue}
                                                setNormalCustomGradientInputValue={(value) => setAttributes({ FeatureSingleItemNormalCustomGradientInputValue: value })}
                                                
                                                hoverBackgroundType={FeatureSingleItemHoverBackgroundType}
                                                setHoverBackgroundType={(value) => setAttributes({ FeatureSingleItemHoverBackgroundType: value })}
                                                hoverClassicColor={FeatureSingleItemHoverClassicColor}
                                                setHoverClassicColor={(value) => setAttributes({ FeatureSingleItemHoverClassicColor: value })}
                                                hoverGradientColor={FeatureSingleItemHoverGradientColor} 
                                                setHoverGradientColor={(value) => setAttributes({ FeatureSingleItemHoverGradientColor: value })}
                                                hoverCustomGradientSwitcher={FeatureSingleItemHoverCustomGradientSwitcher}
                                                setHoverCustomGradientSwitcher={(value) => setAttributes({ FeatureSingleItemHoverCustomGradientSwitcher: value })}
                                                hoverCustomGradientInputValue={FeatureSingleItemHoverCustomGradientInputValue}
                                                setHoverCustomGradientInputValue={(value) => setAttributes({ FeatureSingleItemHoverCustomGradientInputValue: value })}
                                                isBackgroundImage={false}

                                            />
                                        </PanelBody>
                                        <PanelBody
                                                title={__("Padding", "frontis-blocks")}
                                                initialOpen={false}
                                            >
                                                <FB_Spacing 
                                                    label={__("Padding", "frontis-blocks")}
                                                    deviceType={deviceType}
                                                    spacingUnitsHandler={handleSingleItemPaddingUnitsHandler}
                                                    spacingUnits={FeatureSingleItemPaddingUnits}
                                                    spacingDesktop={FeatureSingleItemPaddingDesktop}
                                                    spacingTablet={FeatureSingleItemPaddingTablet}
                                                    spacingMobile={FeatureSingleItemPaddingMobile}
                                                    handleSpacingUnitHandler={handleSingleItemPaddingUnitChange} 
                                                    spacingCombineBtn={FeatureSingleItemPaddingLink}
                                                    spacingCombineBtnHandler={handleSingleItemPaddingCombineBtn}
                                                    setAttributes={setAttributes}
                                                />
                                                
                                            </PanelBody>

                                            <PanelBody title={__("Border and Shadow", "frontis-blocks")} initialOpen={false}>

                                                <SelectControl
                                                        label={__("Border Style", "frontis-blocks")}
                                                        value={FeatureSingleItemBorder}
                                                        options={BORDER_STYLES}
                                                        onChange={(value) => setAttributes({ FeatureSingleItemBorder: value })}
                                                />

                                                <FB_SwitcherControl
                                                    label={__("Border Color", "frontis-blocks")}
                                                    globalSwitcher={FeatureSingleItemBorderColorSwitcher}
                                                    setGlobalSwitcher={(value) => setAttributes({ FeatureSingleItemBorderColorSwitcher: value })}
                                                />

                                                {FeatureSingleItemBorderColorSwitcher === 'normal' && (
                                                    <FB_ColorControl
                                                        label={__("Color", "frontis-blocks")}
                                                        globalColor={FeatureSingleItemBorderColor}
                                                        setGlobalColor={(value) => setAttributes({ FeatureSingleItemBorderColor: value })}
                                                    />
                                                )}

                                                {FeatureSingleItemBorderColorSwitcher === 'hover' && (
                                                    <FB_ColorControl
                                                        label={__("Hover Color", "frontis-blocks")}
                                                        globalColor={FeatureSingleItemBorderHoverColor}
                                                        setGlobalColor={(value) => setAttributes({ FeatureSingleItemBorderHoverColor: value })}
                                                    />
                                                )}

                                                <FB_Spacing 
                                                    label={__("Border", "frontis-blocks")}
                                                    deviceType={deviceType}
                                                    spacingUnitsHandler={handleSingleItemBorderUnitsHandler}
                                                    spacingUnits={FeatureSingleItemBorderUnits}
                                                    spacingDesktop={FeatureSingleItemBorderDesktop}
                                                    spacingTablet={FeatureSingleItemBorderTablet}
                                                    spacingMobile={FeatureSingleItemBorderMobile}
                                                    handleSpacingUnitHandler={handleSingleItemBorderUnitChange}
                                                    spacingCombineBtn={FeatureSingleItemBorderLink}
                                                    spacingCombineBtnHandler={handleSingleItemBorderCombineBtn}
                                                    setAttributes={setAttributes}
                                                />

                                                <FB_Spacing 
                                                    label={__("Border Radius", "frontis-blocks")}
                                                    deviceType={deviceType}
                                                    spacingUnitsHandler={handleSingleItemBorderRadiusUnitsHandler}
                                                    spacingUnits={FeatureSingleItemBorderRadiusUnits}
                                                    spacingDesktop={FeatureSingleItemBorderRadiusDesktop}
                                                    spacingTablet={FeatureSingleItemBorderRadiusTablet}
                                                    spacingMobile={FeatureSingleItemBorderRadiusMobile}
                                                    handleSpacingUnitHandler={handleSingleItemBorderRadiusUnitChange}
                                                    spacingCombineBtn={FeatureSingleItemBorderRadiusLink}
                                                    spacingCombineBtnHandler={handleSingleItemBorderRadiusCombineBtn}
                                                    setAttributes={setAttributes}
                                                />

                                                <FB_SwitcherControl
                                                    label={__("Box Shadow", "frontis-blocks")}
                                                    globalSwitcher={FeatureSingleItemBoxShadowSwitcher}
                                                    setGlobalSwitcher={(value) => setAttributes({ FeatureSingleItemBoxShadowSwitcher: value })}
                                                />

                                                {FeatureSingleItemBoxShadowSwitcher === 'normal' && (
                                                    <FB_BoxShadowControl
                                                        label={__("Normal Shadow", "frontis-blocks")}
                                                        onBoxShadowChange={(value) => setAttributes({ FeatureSingleItemBoxShadowValues: value })}
                                                        initialShadowValue={FeatureSingleItemBoxShadowValues}
                                                        onBoxShadowStyleChange={(value) => setAttributes({ FeatureSingleItemBoxShadowCssValue: value })}
                                                    />
                                                )}

                                                {FeatureSingleItemBoxShadowSwitcher === 'hover' && (
                                                    <FB_BoxShadowControl
                                                        label={__("Hover Shadow", "frontis-blocks")}
                                                        onBoxShadowChange={(value) => setAttributes({ FeatureSingleItemBoxShadowHoverValues: value })}
                                                        initialShadowValue={FeatureSingleItemBoxShadowHoverValues}
                                                        onBoxShadowStyleChange={(value) => setAttributes({ FeatureSingleItemBoxShadowHoverCssValue: value })}
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
													title={__("Advanced", "frontis-blocks")}
													initialOpen={true}
													className='fb-setting-z-index-header'
												>
													<FB_Range
                                                        min={0}
                                                        max={10000000}
                                                        label={__("Z Index", "frontis-blocks")}
                                                        rangeValue={FeatureGlobalZIndex}
                                                        onChangeHandler={(value) => setAttributes({ FeatureGlobalZIndex: value === 0 ? undefined : value })}
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

                                                    <FB_SwitcherControl
                                                        label={__("Box Shadow", "frontis-blocks")}
                                                        globalSwitcher={FeatureGlobalBoxShadowSwitcher}
                                                        setGlobalSwitcher={(value) => setAttributes({ FeatureGlobalBoxShadowSwitcher: value })}
                                                    />

                                                    {FeatureGlobalBoxShadowSwitcher === 'normal' && (
                                                        <FB_BoxShadowControl
                                                            label={__("Normal Shadow", "frontis-blocks")}
                                                            onBoxShadowChange={(value) => setAttributes({ FeatureGlobalBoxShadowValues: value })}
                                                            initialShadowValue={FeatureGlobalBoxShadowValues}
                                                            onBoxShadowStyleChange={(value) => setAttributes({ FeatureGlobalBoxShadowCssValue: value })}
                                                        />
                                                    )}

                                                    {FeatureGlobalBoxShadowSwitcher === 'hover' && (
                                                        <FB_BoxShadowControl
                                                            label={__("Hover Shadow", "frontis-blocks")}
                                                            onBoxShadowChange={(value) => setAttributes({ FeatureGlobalBoxShadowHoverValues: value })}
                                                            initialShadowValue={FeatureGlobalBoxShadowHoverValues}
                                                            onBoxShadowStyleChange={(value) => setAttributes({ FeatureGlobalBoxShadowHoverCssValue: value })}
                                                        />
                                                    )}
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
