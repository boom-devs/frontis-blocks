import { __ } from '@wordpress/i18n';
import { InspectorControls, URLInput } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import {
    PanelBody,
    BaseControl,
    TabPanel,
    Button,
    ButtonGroup,
    RangeControl,
    SelectControl,
    TextareaControl,
    TextControl,
    ToggleControl,
} from '@wordpress/components';

import {
    PROGRESS_TEXT_OPTIONS,
	HEADING,
    TEXT_ALIGN,
	ICON_ALIGN,
	CURRENCY_POSITION,
	ICON_POSITION,
	RIBBON_POSITION,
	BORDER_STYLES,
} from "./constants/constants";

import FBIconPicker from "../../components/icon-picker";

import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove } from '@dnd-kit/sortable';
import SortableItem from './sortableItem.js';
import FB_UrlControl from '@Components/url-control';
import FB_BoxShadowControl from '@Components/box-shadow';
import FB_Spacing from '@Components/spacing';
import FB_Range from '@Components/range';
import FB_Color from '@Components/color';
import FB_TypographyControl from '@Components/typography-control';
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockId,
		deviceType,
		/** Start Header */
		pricingTitle,
		pricingSubTitleSwitcher,
		pricingSubTitle,
		pricingIconAlign,
		pricingIcon,
		/** End Header */

		/** Start Pricing */
		normalPrice,
		salePriceSwitcher,
		salePrice,
		priceCurrency,
		priceCurrencyPosition,
		pricePeriod,
		pricePeriodSeparator,
		/** End Pricing */

		/** Start Feature */
		priceHideFeaturesSwitcher,
		priceFeatureShowLineSwitcher,
		priceFeatureIconSwitcher,
		priceFeatureItems,
		
		/** End Feature */

		/** Start Button */
		priceButtonSwitcher,
		priceButtonText,
		priceButtonUrl,
		priceButtonTargetUrl,
		priceButtonIconAlign,
		priceButtonIcon,
		priceButtonIconPosition,
		priceButtonIconSpacing,
		/** End Button */	

		/** Start Ribbon */
		priceRibbonSwitcher,
		priceRibbonText,
		priceRibbonPosition,
		/** End Ribbon */

		/** Start Icon Style */
		pricingIconAlignment,
		priceIconColorSwitcher,
		priceIconColor,
		priceIconHoverColor,
		priceIconBgColorSwitcher,
		priceIconBgColor,
		priceIconBgHoverColor,
		priceIconSize,
		priceIconSizeUnits,
		priceIconBgSize,
		priceIconBgSizeUnits,

		/** Start Icon Border */
		priceIconBorder,
		priceIconBorderColorSwitcher,
		priceIconBorderColor,
		priceIconBorderHoverColor,
		priceIconBorderUnits,
		priceIconBorderDesktop,
		priceIconBorderTablet,
		priceIconBorderMobile,
		priceIconBorderLink,
		/** End Icon Border */

		/** Start Icon Border Radius */
		priceIconBorderRadiusUnits,
		priceIconBorderRadiusDesktop,
		priceIconBorderRadiusTablet,
		priceIconBorderRadiusMobile,
		priceIconBorderRadiusLink,
		/** End Icon Border Radius */
		/** End Icon Style */


		/** Start Pricing Style */
		pricingAlignment,
		normalPricingFontFamily,
		normalPricingFontSize,
		normalPricingFontSizeUnits,
		normalPricingFontWeight,
		normalPricingFontStyle,
		normalPricingTextTransform,
		normalPricingTextDecoration,
		normalPricingLetterSpacing,
		normalPricingLetterSpacingUnits,
		normalPricingLineHeight,
		normalPricingLineHeightUnits,
		normalPricingColorSwitcher,
		normalPricingColor,
		normalPricingHoverColor,

		salePricingFontFamily,
		salePricingFontSize,
		salePricingFontSizeUnits,
		salePricingFontWeight,
		salePricingFontStyle,
		salePricingTextTransform,
		salePricingTextDecoration,
		salePricingLetterSpacing,
		salePricingLetterSpacingUnits,
		salePricingLineHeight,
		salePricingLineHeightUnits,
		salePricingColorSwitcher,
		salePricingColor,
		salePricingHoverColor,

		priceCurrencyFontFamily,
		priceCurrencyFontSize,
		priceCurrencyFontSizeUnits,
		priceCurrencyFontWeight,
		priceCurrencyFontStyle,
		priceCurrencyTextTransform,
		priceCurrencyTextDecoration,
		priceCurrencyLetterSpacing,
		priceCurrencyLetterSpacingUnits,
		priceCurrencyLineHeight,
		priceCurrencyLineHeightUnits,
		priceCurrencyColorSwitcher,
		priceCurrencyColor,
		priceCurrencyHoverColor,

		pricePeriodFontFamily,
		pricePeriodFontSize,
		pricePeriodFontSizeUnits,
		pricePeriodFontWeight,
		pricePeriodFontStyle,
		pricePeriodTextTransform,
		pricePeriodTextDecoration,
		pricePeriodLetterSpacing,
		pricePeriodLetterSpacingUnits,
		pricePeriodLineHeight,
		pricePeriodLineHeightUnits,
		pricePeriodColorSwitcher,
		pricePeriodColor,
		pricePeriodHoverColor,
		/** End Pricing Style */

		/**Start Title and Subtitle Style */
		pricingTitleAlignment,
		pricingTitleColorSwitcher,
		pricingTitleColor,
		pricingTitleHoverColor,
		pricingTitleFontFamily,
		pricingTitleFontSize,
		pricingTitleFontSizeUnits,
		pricingTitleFontWeight,
		pricingTitleFontStyle,
		pricingTitleTextTransform,
		pricingTitleTextDecoration,
		pricingTitleLetterSpacing,
		pricingTitleLetterSpacingUnits,
		pricingTitleLineHeight,
		pricingTitleLineHeightUnits,

		pricingSubtitleColorSwitcher,
		pricingSubtitleColor,
		pricingSubtitleHoverColor,
		pricingSubtitleFontFamily,
		pricingSubtitleFontSize,
		pricingSubtitleFontSizeUnits,
		pricingSubtitleFontWeight,
		pricingSubtitleFontStyle,
		pricingSubtitleTextTransform,
		pricingSubtitleTextDecoration,
		pricingSubtitleLetterSpacing,
		pricingSubtitleLetterSpacingUnits,
		pricingSubtitleLineHeight,
		pricingSubtitleLineHeightUnits,
		/**end Title and Subtitle Style */

		/** Start Feature Icon */
		priceFeatureAlignment,
		priceFeatureIconColorSwitcher,
		priceFeatureIconColor,
		priceFeatureIconHoverColor,
		priceFeatureIconSize,
		priceFeatureIconSizeUnits,
		/** End Feature Icon */

		/** Start Feature Title */
		pricingfeatureTitleColorSwitcher,
		pricingfeatureTitleColor,
		pricingfeatureTitleHoverColor,
		pricingfeatureTitleFontFamily,
		pricingfeatureTitleFontSize,
		pricingfeatureTitleFontSizeUnits,
		pricingfeatureTitleFontWeight,
		pricingfeatureTitleFontStyle,
		pricingfeatureTitleTextTransform,
		pricingfeatureTitleTextDecoration,
		pricingfeatureTitleLetterSpacing,
		pricingfeatureTitleLetterSpacingUnits,
		pricingfeatureTitleLineHeight,
		pricingfeatureTitleLineHeightUnits,
		/** End Feature Title */


		/** Start price Button */
		priceButtonAlignment,
		priceButtonWidth,
		priceButtonWidthUnits,

		priceButtonFontFamily,
		priceButtonFontSize,
		priceButtonFontSizeUnits,
		priceButtonFontWeight,
		priceButtonFontStyle,
		priceButtonTextTransform,
		priceButtonTextDecoration,
		priceButtonLetterSpacing,
		priceButtonLetterSpacingUnits,
		priceButtonLineHeight,
		priceButtonLineHeightUnits,

		priceButtonColorSwitcher,
		priceButtonColor,
		priceButtonHoverColor,
		priceButtonBgColorSwitcher,
		priceButtonBgColor,
		priceButtonBgHoverColor,

		priceButtonPaddingUnits,
		priceButtonDesktopPadding,
		priceButtonTabPadding,
		priceButtonMobilePadding,
		priceButtonPaddingLink,

		priceButtonMarginUnits,
		priceButtonDesktopMargin,
		priceButtonTabMargin,
		priceButtonMobileMargin,
		priceButtonMarginLink,

		priceButtonBorder,
		priceButtonBorderColorSwitcher,
		priceButtonBorderColor,
		priceButtonBorderHoverColor,

		priceButtonBorderUnits,
		priceButtonDesktopBorderWidth,
		priceButtonTabBorderWidth,
		priceButtonMobileBorderWidth,
		priceButtonBorderLink,

		priceButtonBorderRadiusUnits,
		priceButtonDesktopBorderRadiusWidth,
		priceButtonTabBorderRadiusWidth,
		priceButtonMobileBorderRadiusWidth,
		priceButtonBorderRadiusLink,

		priceButtonIconColorSwitcher,
		priceButtonIconColor,
		priceButtonIconHoverColor,
		priceButtonIconSize,
		priceButtonIconSizeUnits,
		/** End price Button */

		/** Start Global Settings */
		priceGlobalZIndex,
		priceGlobalPaddingUnits,
        priceGlobalPaddingDesktop,
        priceGlobalPaddingTablet,
        priceGlobalPaddingMobile,
        priceGlobalPaddingLink,
        priceGlobalMarginUnits,
        priceGlobalMarginDesktop,
        priceGlobalMarginTablet,
        priceGlobalMarginMobile,
        priceGlobalMarginLink,
        priceGlobalBgColorSwitcher,
        priceGlobalBgColor,
        priceGlobalBgHoverColor,
        priceGlobalBorder,
        priceGlobalBorderColorSwitcher,
        priceGlobalBorderColor,
        priceGlobalBorderHoverColor,
        priceGlobalBorderUnits,
        priceGlobalBorderDesktop,
        priceGlobalBorderTablet,
        priceGlobalBorderMobile,
        priceGlobalBorderLink,
        priceGlobalBorderRadiusUnits,
        priceGlobalBorderRadiusDesktop,
        priceGlobalBorderRadiusTablet,
        priceGlobalBorderRadiusMobile,
        priceGlobalBorderRadiusLink,
		priceGlobalBoxShadowValues,
		priceGlobalBoxShadowCssValue,
		/** End Global Settings */

    } = attributes;


	useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-feature-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active && over && active.id !== over.id) {
            const oldIndex = priceFeatureItems.findIndex(item => item.id === active.id);
            const newIndex = priceFeatureItems.findIndex(item => item.id === over.id);
            const updatedItems = arrayMove(priceFeatureItems, oldIndex, newIndex);
            setAttributes({ priceFeatureItems: updatedItems });
        }
    };

    const handleAddItem = () => {
        const newItem = { id: `item-${priceFeatureItems.length + 1}`, Title: `Feature Item ${priceFeatureItems.length + 1}`, FeatureIcon: 'check' };
        setAttributes({ priceFeatureItems: [...priceFeatureItems, newItem] });
    };

    const handleChangeItem = (id, key, value) => {
        const updatedItems = priceFeatureItems.map(item => 
            item.id === id ? { ...item, [key]: value } : item
        );
        setAttributes({ priceFeatureItems: updatedItems });
    };

    const handleDeleteItem = (id) => {
        const updatedItems = priceFeatureItems.filter(item => item.id !== id);
        setAttributes({ priceFeatureItems: updatedItems });
    };

	const priceIconHandler = (IconName) => {
		setAttributes({pricingIcon: IconName})
	}
	const priceButtonIconHandler = (IconName) => {
		setAttributes({priceButtonIcon: IconName})
	}


	/** Start Icon Border */
	const handlePriceIconBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( priceIconBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						priceIconBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						priceIconBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						priceIconBorderMobile: {
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
					setAttributes( {priceIconBorderDesktop: {...priceIconBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {priceIconBorderTablet: {...priceIconBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {priceIconBorderMobile: {...priceIconBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handlePriceIconBorderCombineBtn = () => {
		setAttributes( {priceIconBorderLink: !priceIconBorderLink} );
	}

	const handlePriceIconBorderUnitsHandler = (unit) => {
		setAttributes( {
			priceIconBorderUnits: {
				...priceIconBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const priceIconDesktopBorderWidthValue = `${priceIconBorderDesktop.top}${priceIconBorderUnits.Desktop} ${priceIconBorderDesktop.right}${priceIconBorderUnits.Desktop} ${priceIconBorderDesktop.bottom}${priceIconBorderUnits.Desktop} ${priceIconBorderDesktop.left}${priceIconBorderUnits.Desktop}`;
	const priceIconTabletBorderWidthValue = `${priceIconBorderTablet.top}${priceIconBorderUnits.Tablet} ${priceIconBorderTablet.right}${priceIconBorderUnits.Tablet} ${priceIconBorderTablet.bottom}${priceIconBorderUnits.Tablet} ${priceIconBorderTablet.left}${priceIconBorderUnits.Tablet}`;
	const priceIconMobileBorderWidthValue = `${priceIconBorderMobile.top}${priceIconBorderUnits.Mobile} ${priceIconBorderMobile.right}${priceIconBorderUnits.Mobile} ${priceIconBorderMobile.bottom}${priceIconBorderUnits.Mobile} ${priceIconBorderMobile.left}${priceIconBorderUnits.Mobile}`;
	/** End Icon Border */

	/** Start Icon Border Radius */
	const handlePriceIconBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( priceIconBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						priceIconBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						priceIconBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						priceIconBorderRadiusMobile: {
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
					setAttributes( {priceIconBorderRadiusDesktop: {...priceIconBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {priceIconBorderRadiusTablet: {...priceIconBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {priceIconBorderRadiusMobile: {...priceIconBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handlePriceIconBorderRadiusCombineBtn = () => {
		setAttributes( {priceIconBorderRadiusLink: !priceIconBorderRadiusLink} );
	}

	const handlePriceIconBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			priceIconBorderRadiusUnits: {
				...priceIconBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	const priceIconDesktopBorderRadiusWidthValue = `${priceIconBorderRadiusDesktop.top}${priceIconBorderRadiusUnits.Desktop} ${priceIconBorderRadiusDesktop.right}${priceIconBorderRadiusUnits.Desktop} ${priceIconBorderRadiusDesktop.bottom}${priceIconBorderRadiusUnits.Desktop} ${priceIconBorderRadiusDesktop.left}${priceIconBorderRadiusUnits.Desktop}`;
	const priceIconTabletBorderRadiusWidthValue = `${priceIconBorderRadiusTablet.top}${priceIconBorderRadiusUnits.Tablet} ${priceIconBorderRadiusTablet.right}${priceIconBorderRadiusUnits.Tablet} ${priceIconBorderRadiusTablet.bottom}${priceIconBorderRadiusUnits.Tablet} ${priceIconBorderRadiusTablet.left}${priceIconBorderRadiusUnits.Tablet}`;
	const priceIconMobileBorderRadiusWidthValue = `${priceIconBorderRadiusMobile.top}${priceIconBorderRadiusUnits.Mobile} ${priceIconBorderRadiusMobile.right}${priceIconBorderRadiusUnits.Mobile} ${priceIconBorderRadiusMobile.bottom}${priceIconBorderRadiusUnits.Mobile} ${priceIconBorderRadiusMobile.left}${priceIconBorderRadiusUnits.Mobile}`;
	/** End Icon Border Radius */


	/** Start Pricing Button padding */
	const handlePriceButtonPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( priceButtonPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						priceButtonDesktopPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						priceButtonTabPadding: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						priceButtonMobilePadding: {
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
					setAttributes( {priceButtonDesktopPadding: {...priceButtonDesktopPadding, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {priceButtonTabPadding: {...priceButtonTabPadding, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {priceButtonMobilePadding: {...priceButtonMobilePadding, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handlePriceButtonPaddingCombineBtn = () => {
		setAttributes( {priceButtonPaddingLink: !priceButtonPaddingLink} );
	}

	const handlePriceButtonPaddingUnitsHandler = (unit) => {
		setAttributes( {
			priceButtonPaddingUnits: {
				...priceButtonPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const priceButtonDesktopPaddingValue = `${priceButtonDesktopPadding.top}${priceButtonPaddingUnits.Desktop} ${priceButtonDesktopPadding.right}${priceButtonPaddingUnits.Desktop} ${priceButtonDesktopPadding.bottom}${priceButtonPaddingUnits.Desktop} ${priceButtonDesktopPadding.left}${priceButtonPaddingUnits.Desktop}`;
	const priceButtonTabletPaddingValue = `${priceButtonTabPadding.top}${priceButtonPaddingUnits.Tablet} ${priceButtonTabPadding.right}${priceButtonPaddingUnits.Tablet} ${priceButtonTabPadding.bottom}${priceButtonPaddingUnits.Tablet} ${priceButtonTabPadding.left}${priceButtonPaddingUnits.Tablet}`;
	const priceButtonMobilePaddingValue = `${priceButtonMobilePadding.top}${priceButtonPaddingUnits.Mobile} ${priceButtonMobilePadding.right}${priceButtonPaddingUnits.Mobile} ${priceButtonMobilePadding.bottom}${priceButtonPaddingUnits.Mobile} ${priceButtonMobilePadding.left}${priceButtonPaddingUnits.Mobile}`;
	/** End Pricing Button Padding */
	
	/** Start Pricing Button Margin */
	const handlePriceButtonMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( priceButtonMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						priceButtonDesktopMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						priceButtonTabMargin: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						priceButtonMobileMargin: {
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
					setAttributes( {priceButtonDesktopMargin: {...priceButtonDesktopMargin, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {priceButtonTabMargin: {...priceButtonTabMargin, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {priceButtonMobileMargin: {...priceButtonMobileMargin, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handlePriceButtonMarginCombineBtn = () => {
		setAttributes( {priceButtonMarginLink: !priceButtonMarginLink} );
	}

	const handlePriceButtonMarginUnitsHandler = (unit) => {
		setAttributes( {
			priceButtonMarginUnits: {
				...priceButtonMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const priceButtonDesktopMarginValue = `${priceButtonDesktopMargin.top}${priceButtonMarginUnits.Desktop} ${priceButtonDesktopMargin.right}${priceButtonMarginUnits.Desktop} ${priceButtonDesktopMargin.bottom}${priceButtonMarginUnits.Desktop} ${priceButtonDesktopMargin.left}${priceButtonMarginUnits.Desktop}`;
	const priceButtonTabletMarginValue = `${priceButtonTabMargin.top}${priceButtonMarginUnits.Tablet} ${priceButtonTabMargin.right}${priceButtonMarginUnits.Tablet} ${priceButtonTabMargin.bottom}${priceButtonMarginUnits.Tablet} ${priceButtonTabMargin.left}${priceButtonMarginUnits.Tablet}`;
	const priceButtonMobileMarginValue = `${priceButtonMobileMargin.top}${priceButtonMarginUnits.Mobile} ${priceButtonMobileMargin.right}${priceButtonMarginUnits.Mobile} ${priceButtonMobileMargin.bottom}${priceButtonMarginUnits.Mobile} ${priceButtonMobileMargin.left}${priceButtonMarginUnits.Mobile}`;
	/** End Pricing Button Margin */

	/** Start Pricing Button border */
	const handlePriceButtonBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( priceButtonBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						priceButtonDesktopBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						priceButtonTabBorderWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						priceButtonMobileBorderWidth: {
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
					setAttributes( {priceButtonDesktopBorderWidth: {...priceButtonDesktopBorderWidth, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {priceButtonTabBorderWidth: {...priceButtonTabBorderWidth, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {priceButtonMobileBorderWidth: {...priceButtonMobileBorderWidth, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handlePriceButtonBorderCombineBtn = () => {
		setAttributes( {priceButtonBorderLink: !priceButtonBorderLink} );
	}

	const handlePriceButtonBorderUnitsHandler = (unit) => {
		setAttributes( {
			priceButtonBorderUnits: {
				...priceButtonBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const priceButtonDesktopBorderWidthValue = `${priceButtonDesktopBorderWidth.top}${priceButtonBorderUnits.Desktop} ${priceButtonDesktopBorderWidth.right}${priceButtonBorderUnits.Desktop} ${priceButtonDesktopBorderWidth.bottom}${priceButtonBorderUnits.Desktop} ${priceButtonDesktopBorderWidth.left}${priceButtonBorderUnits.Desktop}`;
	const priceButtonTabletBorderWidthValue = `${priceButtonTabBorderWidth.top}${priceButtonBorderUnits.Tablet} ${priceButtonTabBorderWidth.right}${priceButtonBorderUnits.Tablet} ${priceButtonTabBorderWidth.bottom}${priceButtonBorderUnits.Tablet} ${priceButtonTabBorderWidth.left}${priceButtonBorderUnits.Tablet}`;
	const priceButtonMobileBorderWidthValue = `${priceButtonMobileBorderWidth.top}${priceButtonBorderUnits.Mobile} ${priceButtonMobileBorderWidth.right}${priceButtonBorderUnits.Mobile} ${priceButtonMobileBorderWidth.bottom}${priceButtonBorderUnits.Mobile} ${priceButtonMobileBorderWidth.left}${priceButtonBorderUnits.Mobile}`;
	/** End Pricing Button Border */


	/** Start Pricing Button border radius*/
	const handlePriceButtonBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( priceButtonBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						priceButtonDesktopBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						priceButtonTabBorderRadiusWidth: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						priceButtonMobileBorderRadiusWidth: {
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
					setAttributes( {priceButtonDesktopBorderRadiusWidth: {...priceButtonDesktopBorderRadiusWidth, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {priceButtonTabBorderRadiusWidth: {...priceButtonTabBorderRadiusWidth, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {priceButtonMobileBorderRadiusWidth: {...priceButtonMobileBorderRadiusWidth, [position]: value}} );
					break;
				default:
					break;
			}
		}
	}

	const handlePriceButtonBorderRadiusCombineBtn = () => {
		setAttributes( {priceButtonBorderRadiusLink: !priceButtonBorderRadiusLink} );
	}

	const handlePriceButtonBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			priceButtonBorderRadiusUnits: {
				...priceButtonBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Pricing Button border */

	/** End Pricing Button Border Radius */
	const priceButtonDesktopBorderRadiusWidthValue = `${priceButtonDesktopBorderRadiusWidth.top}${priceButtonBorderRadiusUnits.Desktop} ${priceButtonDesktopBorderRadiusWidth.right}${priceButtonBorderRadiusUnits.Desktop} ${priceButtonDesktopBorderRadiusWidth.bottom}${priceButtonBorderRadiusUnits.Desktop} ${priceButtonDesktopBorderRadiusWidth.left}${priceButtonBorderRadiusUnits.Desktop}`;
	const priceButtonTabletBorderRadiusWidthValue = `${priceButtonTabBorderRadiusWidth.top}${priceButtonBorderRadiusUnits.Tablet} ${priceButtonTabBorderRadiusWidth.right}${priceButtonBorderRadiusUnits.Tablet} ${priceButtonTabBorderRadiusWidth.bottom}${priceButtonBorderRadiusUnits.Tablet} ${priceButtonTabBorderRadiusWidth.left}${priceButtonBorderRadiusUnits.Tablet}`;
	const priceButtonMobileBorderRadiusWidthValue = `${priceButtonMobileBorderRadiusWidth.top}${priceButtonBorderRadiusUnits.Mobile} ${priceButtonMobileBorderRadiusWidth.right}${priceButtonBorderRadiusUnits.Mobile} ${priceButtonMobileBorderRadiusWidth.bottom}${priceButtonBorderRadiusUnits.Mobile} ${priceButtonMobileBorderRadiusWidth.left}${priceButtonBorderRadiusUnits.Mobile}`;
	/** End Pricing Button Border Radius */

	/** Start Global padding */
	const handleGlobalPaddingUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( priceGlobalPaddingLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						priceGlobalPaddingDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						priceGlobalPaddingTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						priceGlobalPaddingMobile: {
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
					setAttributes( {priceGlobalPaddingDesktop: {...priceGlobalPaddingDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {priceGlobalPaddingTablet: {...priceGlobalPaddingTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {priceGlobalPaddingMobile: {...priceGlobalPaddingMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalPaddingCombineBtn = () => {
		setAttributes( {priceGlobalPaddingLink: !priceGlobalPaddingLink} );
	}

	const handleGlobalPaddingUnitsHandler = (unit) => {
		setAttributes( {
			priceGlobalPaddingUnits: {
				...priceGlobalPaddingUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopPadding    = `${priceGlobalPaddingDesktop.top}${priceGlobalPaddingUnits.Desktop} ${priceGlobalPaddingDesktop.right}${priceGlobalPaddingUnits.Desktop} ${priceGlobalPaddingDesktop.bottom}${priceGlobalPaddingUnits.Desktop} ${priceGlobalPaddingDesktop.left}${priceGlobalPaddingUnits.Desktop}`;
	const globalTabletPadding     = `${priceGlobalPaddingTablet.top}${priceGlobalPaddingUnits.Tablet} ${priceGlobalPaddingTablet.right}${priceGlobalPaddingUnits.Tablet} ${priceGlobalPaddingTablet.bottom}${priceGlobalPaddingUnits.Tablet} ${priceGlobalPaddingTablet.left}${priceGlobalPaddingUnits.Tablet}`;
	const globalMobilePadding     = `${priceGlobalPaddingMobile.top}${priceGlobalPaddingUnits.Mobile} ${priceGlobalPaddingMobile.right}${priceGlobalPaddingUnits.Mobile} ${priceGlobalPaddingMobile.bottom}${priceGlobalPaddingUnits.Mobile} ${priceGlobalPaddingMobile.left}${priceGlobalPaddingUnits.Mobile}`;
	/** End Global Padding */
	
	/** Start Global Margin */
	const handleGlobalMarginUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( priceGlobalMarginLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						priceGlobalMarginDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						priceGlobalMarginTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						priceGlobalMarginMobile: {
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
					setAttributes( {priceGlobalMarginDesktop: {...priceGlobalMarginDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {priceGlobalMarginTablet: {...priceGlobalMarginTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {priceGlobalMarginMobile: {...priceGlobalMarginMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalMarginCombineBtn = () => {
		setAttributes( {priceGlobalMarginLink: !priceGlobalMarginLink} );
	}

	const handleGlobalMarginUnitsHandler = (unit) => {
		setAttributes( {
			priceGlobalMarginUnits: {
				...priceGlobalMarginUnits,
				[deviceType]: unit
			}
		})
	}

	const globalDesktopMargin = `${priceGlobalMarginDesktop.top}${priceGlobalMarginUnits.Desktop} ${priceGlobalMarginDesktop.right}${priceGlobalMarginUnits.Desktop} ${priceGlobalMarginDesktop.bottom}${priceGlobalMarginUnits.Desktop} ${priceGlobalMarginDesktop.left}${priceGlobalMarginUnits.Desktop}`;
	const globalTabletMargin = `${priceGlobalMarginTablet.top}${priceGlobalMarginUnits.Tablet} ${priceGlobalMarginTablet.right}${priceGlobalMarginUnits.Tablet} ${priceGlobalMarginTablet.bottom}${priceGlobalMarginUnits.Tablet} ${priceGlobalMarginTablet.left}${priceGlobalMarginUnits.Tablet}`;
	const globalMobileMargin = `${priceGlobalMarginMobile.top}${priceGlobalMarginUnits.Mobile} ${priceGlobalMarginMobile.right}${priceGlobalMarginUnits.Mobile} ${priceGlobalMarginMobile.bottom}${priceGlobalMarginUnits.Mobile} ${priceGlobalMarginMobile.left}${priceGlobalMarginUnits.Mobile}`;
	/** End Global Margin */

	/** Start Global border */
	const handleGlobalBorderUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( priceGlobalBorderLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						priceGlobalBorderDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						priceGlobalBorderTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						priceGlobalBorderMobile: {
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
					setAttributes( {priceGlobalBorderDesktop: {...priceGlobalBorderDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {priceGlobalBorderTablet: {...priceGlobalBorderTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {priceGlobalBorderMobile: {...priceGlobalBorderMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderCombineBtn = () => {
		setAttributes( {priceGlobalBorderLink: !priceGlobalBorderLink} );
	}

	const handleGlobalBorderUnitsHandler = (unit) => {
		setAttributes( {
			priceGlobalBorderUnits: {
				...priceGlobalBorderUnits,
				[deviceType]: unit
			}
		})
	}
	const globalDesktopBorderWidth = `${priceGlobalBorderDesktop.top}${priceGlobalBorderUnits.Desktop} ${priceGlobalBorderDesktop.right}${priceGlobalBorderUnits.Desktop} ${priceGlobalBorderDesktop.bottom}${priceGlobalBorderUnits.Desktop} ${priceGlobalBorderDesktop.left}${priceGlobalBorderUnits.Desktop}`;
	const globalTabletBorderWidth = `${priceGlobalBorderTablet.top}${priceGlobalBorderUnits.Tablet} ${priceGlobalBorderTablet.right}${priceGlobalBorderUnits.Tablet} ${priceGlobalBorderTablet.bottom}${priceGlobalBorderUnits.Tablet} ${priceGlobalBorderTablet.left}${priceGlobalBorderUnits.Tablet}`;
	const globalMobileBorderWidth = `${priceGlobalBorderMobile.top}${priceGlobalBorderUnits.Mobile} ${priceGlobalBorderMobile.right}${priceGlobalBorderUnits.Mobile} ${priceGlobalBorderMobile.bottom}${priceGlobalBorderUnits.Mobile} ${priceGlobalBorderMobile.left}${priceGlobalBorderUnits.Mobile}`;
	/** End Border */


	/** Start Global border radius*/
	const handleGlobalBorderRadiusUnitChange = ( event, position ) => {
		const value = event.target.value;
		if ( priceGlobalBorderRadiusLink ) {
			switch ( deviceType ) {
				case 'Desktop':
					setAttributes( {
						priceGlobalBorderRadiusDesktop: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Tablet':
					setAttributes( {
						priceGlobalBorderRadiusTablet: {
							top: value,
							right: value,
							bottom: value,
							left: value
						}
					} );
					break;
				case 'Mobile':
					setAttributes( {
						priceGlobalBorderRadiusMobile: {
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
					setAttributes( {priceGlobalBorderRadiusDesktop: {...priceGlobalBorderRadiusDesktop, [position]: value}} );
					break;
				case 'Tablet':
					setAttributes( {priceGlobalBorderRadiusTablet: {...priceGlobalBorderRadiusTablet, [position]: value}} );
					break;
				case 'Mobile':
					setAttributes( {priceGlobalBorderRadiusMobile: {...priceGlobalBorderRadiusMobile, [position]: value}} );
					break;
				default:
					break;
			}
		}

	}

	const handleGlobalBorderRadiusCombineBtn = () => {
		setAttributes( {priceGlobalBorderRadiusLink: !priceGlobalBorderRadiusLink} );
	}

	const handleGlobalBorderRadiusUnitsHandler = (unit) => {
		setAttributes( {
			priceGlobalBorderRadiusUnits: {
				...priceGlobalBorderRadiusUnits,
				[deviceType]: unit
			}
		})
	}
	/** end Global border */

	/** End Global Border Radius */
	const globalDesktopBorderRadiusWidth = `${priceGlobalBorderRadiusDesktop.top}${priceGlobalBorderRadiusUnits.Desktop} ${priceGlobalBorderRadiusDesktop.right}${priceGlobalBorderRadiusUnits.Desktop} ${priceGlobalBorderRadiusDesktop.bottom}${priceGlobalBorderRadiusUnits.Desktop} ${priceGlobalBorderRadiusDesktop.left}${priceGlobalBorderRadiusUnits.Desktop}`;
	const globalTabletBorderRadiusWidth = `${priceGlobalBorderRadiusTablet.top}${priceGlobalBorderRadiusUnits.Tablet} ${priceGlobalBorderRadiusTablet.right}${priceGlobalBorderRadiusUnits.Tablet} ${priceGlobalBorderRadiusTablet.bottom}${priceGlobalBorderRadiusUnits.Tablet} ${priceGlobalBorderRadiusTablet.left}${priceGlobalBorderRadiusUnits.Tablet}`;
	const globalMobileBorderRadiusWidth = `${priceGlobalBorderRadiusMobile.top}${priceGlobalBorderRadiusUnits.Mobile} ${priceGlobalBorderRadiusMobile.right}${priceGlobalBorderRadiusUnits.Mobile} ${priceGlobalBorderRadiusMobile.bottom}${priceGlobalBorderRadiusUnits.Mobile} ${priceGlobalBorderRadiusMobile.left}${priceGlobalBorderRadiusUnits.Mobile}`;
	/** End Border Radius */


    return (
        <>

		<style>
		{`
			.fb-pricing-wrapper.${blockId} {
				${priceGlobalBgColor ? `background-color: ${priceGlobalBgColor};` : ''}
				${globalDesktopPadding ? `padding: ${globalDesktopPadding};` : ''}
				${globalDesktopMargin ? `margin: ${globalDesktopMargin};` : ''}
				${priceGlobalBorder ? `border: ${priceGlobalBorder};` : ''}
				${globalDesktopBorderWidth ? `border-width: ${globalDesktopBorderWidth};` : ''}
				${globalDesktopBorderRadiusWidth ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
				${priceGlobalBorderColor ? `border-color: ${priceGlobalBorderColor};` : ''}
				${priceGlobalZIndex ? `z-index: ${priceGlobalZIndex};` : ''}
			}
			.fb-pricing-wrapper.${blockId}:hover {
				${priceGlobalBoxShadowCssValue ? `box-shadow: ${priceGlobalBoxShadowCssValue};` : ''}
				${priceGlobalBorderHoverColor ? `border-color: ${priceGlobalBorderHoverColor};` : ''}
				${priceGlobalBgHoverColor ? `background-color: ${priceGlobalBgHoverColor};` : ''}
			}
			.fb-pricing-wrapper.${blockId} .fb-pricing-header {

			}
			.fb-pricing-wrapper.${blockId} .fb-pricing-icon-wrapper {
				justify-content: ${pricingIconAlignment === 'left' ? 'flex-start' : pricingIconAlignment === 'center' ? 'center' : pricingIconAlignment === 'right' ? 'flex-end' : 'center'};
			}
			.fb-pricing-wrapper.${blockId} .fb-pricing-icon {
				width: ${priceIconBgSize.Desktop}${priceIconBgSizeUnits.Desktop};
				height: auto;
				background-color: ${priceIconBgColor};
				${priceIconBorder ? `border-style: ${priceIconBorder};` : ''}
				${priceIconDesktopBorderWidthValue ? `border-width: ${priceIconDesktopBorderWidthValue};` : ''}
				${priceIconDesktopBorderRadiusWidthValue ? `border-radius: ${priceIconDesktopBorderRadiusWidthValue};` : ''}
				${priceIconBorderColor ? `border-color: ${priceIconBorderColor};` : ''}
				transition: background-color 0.3s ease;
			}
			.fb-pricing-wrapper.${blockId} .fb-pricing-icon:hover {
				background-color: ${priceIconBgHoverColor};
			}
			.fb-pricing-wrapper.${blockId} .fb-pricing-icon svg {
				width: ${priceIconSize.Desktop}${priceIconSizeUnits.Desktop};
				height: ${priceIconSize.Desktop}${priceIconSizeUnits.Desktop};
				fill: ${priceIconColor};
				transition: fill 0.3s ease;
			}
			.fb-pricing-wrapper.${blockId} .fb-pricing-icon svg:hover {
				fill: ${priceIconHoverColor};
			}

			@media only screen and (max-width: 1024px) {
				${globalTabletPadding ? `padding: ${globalTabletPadding};` : ''}
				${globalTabletMargin ? `margin: ${globalTabletMargin};` : ''}
				${globalTabletBorderWidth ? `border-width: ${globalTabletBorderWidth};` : ''}
				${globalTabletBorderRadiusWidth ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
			}

			@media only screen and (max-width: 767px) {
				${globalMobilePadding ? `padding: ${globalMobilePadding};` : ''}
				${globalMobileMargin ? `margin: ${globalMobileMargin};` : ''}
				${globalMobileBorderWidth ? `border-width: ${globalMobileBorderWidth};` : ''}
				${globalMobileBorderRadiusWidth ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
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
								name:
									"styles",
								title: "Style",
								className: "fb-tab styles",
							},
							{
								name: "advanced",
								title: "Advanced",
								className: "fb-tab advance",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls" + tab.name}>
								{tab.name === 'general' && (
									<>
										{/** Start Header */}
										<PanelBody title={__("General", "frontis-blocks")} initialOpen={true}>
											<TextControl
												label={__("Title", "frontis-blocks")}
												value={pricingTitle}
												onChange={(value) => setAttributes({ pricingTitle: value })}
												placeholder={__('Startup', 'frontis-block')}
											/>
											<ToggleControl
												label={__("Show Sub Title", "frontis-blocks")}
												checked={pricingSubTitleSwitcher}
												onChange={(value) => setAttributes({pricingSubTitleSwitcher: value})}
											/>
											{pricingSubTitleSwitcher && (
												<TextareaControl
													label={__("Sub Title", "frontis-blocks")}
													value={pricingSubTitle}
													onChange={(value) => setAttributes({ pricingSubTitle: value })}
													placeholder={__('sub title', 'frontis-block')}
												/>
											)}
											<BaseControl
												label={__("Icon", "frontis-blocks")}
												id="fb-setting-text-alignment"
												className="fb-setting-text-alignment"
											>
													<ButtonGroup
														className="fb-setting-text-alignment-group-btn"
													>
														{ICON_ALIGN.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({ pricingIconAlign: item.value })}
																className={`fb-setting-text-alignment-single-btn ${pricingIconAlign === item.value ? 'active' : ''}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
													{pricingIconAlign === 'icon' && (
														<FBIconPicker value={pricingIcon} setIconHandler={priceIconHandler} /> 
													)}
											</BaseControl>
										</PanelBody>
										{/** End Header */}

										{/** Start Price */}
										<PanelBody title={__("Price", "frontis-blocks")} initialOpen={false}>
											<TextControl
												label={__("Price", "frontis-blocks")}
												value={normalPrice}
												onChange={(value) => setAttributes({ normalPrice: value })}
											/>
											<ToggleControl
												label={__("On Sale", "frontis-blocks")}
												checked={salePriceSwitcher}
												onChange={(value) => setAttributes({salePriceSwitcher: value})}
											/>
											{salePriceSwitcher && (
												<TextControl
													label={__("Sale Price", "frontis-blocks")}
													value={salePrice}
													onChange={(value) => setAttributes({ salePrice: value })}
												/>
											)}
											<TextControl
												label={__("Currency", "frontis-blocks")}
												value={priceCurrency}
												onChange={(value) => setAttributes({ priceCurrency: value })}
											/>
											<SelectControl 
												label={__("Currency Position", "frontis-blocks")}
												value={priceCurrencyPosition}
												onChange={(value) => setAttributes({ priceCurrencyPosition: value })}
												options={CURRENCY_POSITION}
											/>
											<TextControl
												label={__("Separator", "frontis-blocks")}
												value={pricePeriodSeparator}
												onChange={(value) => setAttributes({ pricePeriodSeparator: value })}
											/>
											<TextControl
												label={__("Period", "frontis-blocks")}
												value={pricePeriod}
												onChange={(value) => setAttributes({ pricePeriod: value })}
											/>			
										</PanelBody>
										{/** End Price */}

										{/** Start Feature */}
										<PanelBody title={__("Features", "frontis-blocks")} initialOpen={false}>
											<ToggleControl
												label={__("Hide Features", "frontis-blocks")}
												checked={priceHideFeaturesSwitcher}
												onChange={(value) => setAttributes({priceHideFeaturesSwitcher: value})}
											/>
											<ToggleControl
												label={__("Show Line", "frontis-blocks")}
												checked={priceFeatureShowLineSwitcher}
												onChange={(value) => setAttributes({priceFeatureShowLineSwitcher: value})}
											/>
											<ToggleControl
												label={__("Show Icon", "frontis-blocks")}
												checked={priceFeatureIconSwitcher}
												onChange={(value) => setAttributes({priceFeatureIconSwitcher: value})}
											/>
											<div className="fb-feature-wrapper">
                                                <DndContext
                                                    collisionDetection={closestCenter}
                                                    onDragEnd={handleDragEnd}
                                                >
													<SortableContext items={priceFeatureItems.map(item => item.id)}>
                                                        <ul className='dnd-items-wrapper'>
                                                            {priceFeatureItems.map((item) => (
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
										</PanelBody>
										{/** End Feature */}


										{/** Start Button */}
										<PanelBody title={__("Button", "frontis-blocks")} initialOpen={false}>
											<ToggleControl
												label={__("Enable Button", "frontis-blocks")}
												checked={priceButtonSwitcher}
												onChange={(value) => setAttributes({ priceButtonSwitcher: value })}
											/>
											{priceButtonSwitcher && (
												<>
													<TextControl
														label={__("Button Text", "frontis-blocks")}
														value={priceButtonText}
														onChange={(value) => setAttributes({ priceButtonText: value })}
													/>
													<FB_UrlControl
														url={priceButtonUrl}
														onChangeUrl={(value) => setAttributes({ priceButtonUrl: value })}
														openInNewTab={priceButtonTargetUrl}
														onChangeOpenInNewTab={(value) => setAttributes({ priceButtonTargetUrl: value })}
													/>
													<BaseControl
														label={__("Icon", "frontis-blocks")}
														id="fb-setting-text-alignment"
														className="fb-setting-text-alignment"
													>
														<ButtonGroup
															className="fb-setting-text-alignment-group-btn"
														>
															{ICON_ALIGN.map((item, key) => (
																	<Button
																		key={key}
																		onClick={() => setAttributes({ priceButtonIconAlign: item.value })}
																		className={`fb-setting-text-alignment-single-btn ${priceButtonIconAlign === item.value ? 'active' : ''}`}
																	>
																		{item.label}
																	</Button>
																))}
															</ButtonGroup>
															{priceButtonIconAlign === 'icon' && (
																<>
																	<FBIconPicker value={priceButtonIcon} setIconHandler={priceButtonIconHandler} />
																	<SelectControl
																		label={__("Icon Position", "frontis-blocks")}
																		value={priceButtonIconPosition}
																		options={ICON_POSITION}
																		onChange={(value) => setAttributes({ priceButtonIconPosition: value })}
																	/>
																	<RangeControl
																		label={__("Icon Spacing", "frontis-blocks")}
																		value={priceButtonIconSpacing}
																		onChange={(value) => setAttributes({ priceButtonIconSpacing: value })}
																		min={0}
																		max={50}
																		step={1}
																	/>
																</>
															)}
													</BaseControl>
												</>
											)}
										</PanelBody>
										{/** End Button */}

										{/** Start Ribbon */}
										<PanelBody title={__("Ribbon", "frontis-blocks")} initialOpen={false}>
											<ToggleControl
												label={__("Enable Ribbon", "frontis-blocks")}
												checked={priceRibbonSwitcher}
												onChange={(value) => setAttributes({priceRibbonSwitcher: value})}
											/>
											{priceRibbonSwitcher && (	
												<>
													<TextControl
														label={__("Ribbon Text", "frontis-blocks")}
														value={priceRibbonText}
														onChange={(value) => setAttributes({ priceRibbonText: value })}
													/>
													<SelectControl
														label={__("Ribbon Position", "frontis-blocks")}
														value={priceRibbonPosition}
														options={RIBBON_POSITION}
														onChange={(value) => setAttributes({ priceRibbonPosition: value })}
													/>	

												</>
											)}
										</PanelBody>
										{/** End Ribbon */}
										
									</>
								)}

								{tab.name === "styles" && (
									<>
										<PanelBody
											title={__("Icon", "frontis-blocks")}
											initialOpen={true}
										>

											<BaseControl
												label={__("Alignment", "frontis-blocks")}
												id="fb-setting-text-alignment"
												className="fb-setting-text-alignment"
											>
													<ButtonGroup
														className="fb-setting-text-alignment-group-btn"
													>
														{TEXT_ALIGN.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({ pricingIconAlignment: item.value })}
																className={`fb-setting-text-alignment-single-btn ${pricingIconAlignment === item.value ? 'active' : ''}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
											</BaseControl>

											<FB_Range
												min={1}
                                                max={200}
												label={__("Icon Size", "frontis-blocks")}
                                                rangeValue={priceIconSize}
                                                onChangeHandler={(value) => setAttributes({ priceIconSize: value })}
                                                rangeUnitHandler={(value) => setAttributes({ priceIconSizeUnits: value })}
                                                deviceType={deviceType}
                                                units={priceIconSizeUnits}
                                                setAttributes={setAttributes}
                                                rangeStep={1}
                                                resetFallbackValue={"100"}
											/>

											<FB_Range
												min={0}
												max={200}
												label={__("Background Size", "frontis-blocks")}
												rangeValue={priceIconBgSize}
												onChangeHandler={(value) => setAttributes({ priceIconBgSize: value })}
												rangeUnitHandler={(value) => setAttributes({ priceIconBgSizeUnits: value })}
												deviceType={deviceType}
												units={priceIconBgSizeUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={""}
											/>

											<FB_Color
												label={__("Color", "frontis-blocks")}
												globalColorSwitcher={priceIconColorSwitcher}
												globalColor={priceIconColor}
												globalHoverColor={priceIconHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ priceIconColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ priceIconColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ priceIconHoverColor: value })}
											/>

											<FB_Color
												label={__("Background Color", "frontis-blocks")}
												globalColorSwitcher={priceIconBgColorSwitcher}
												globalColor={priceIconBgColor}
												globalHoverColor={priceIconBgHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ priceIconBgColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ priceIconBgColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ priceIconBgHoverColor: value })}
											/>

											<SelectControl
													label={__("Border Style", "frontis-blocks")}
													value={priceIconBorder}
													options={BORDER_STYLES}
													onChange={(value) => setAttributes({ priceIconBorder: value })}
											/>

											<FB_Color
												label={__("Border Color", "frontis-blocks")}
												globalColorSwitcher={priceIconBorderColorSwitcher}
												globalColor={priceIconBorderColor}
												globalHoverColor={priceIconBorderHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ priceIconBorderColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ priceIconBorderColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ priceIconBorderHoverColor: value })}
											/>

											<FB_Spacing 
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlePriceIconBorderUnitsHandler}
												spacingUnits={priceIconBorderUnits}
												spacingDesktop={priceIconBorderDesktop}
												spacingTablet={priceIconBorderTablet}
												spacingMobile={priceIconBorderMobile}
												handleSpacingUnitHandler={handlePriceIconBorderUnitChange}
												spacingCombineBtn={priceIconBorderLink}
												spacingCombineBtnHandler={handlePriceIconBorderCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing 
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlePriceIconBorderRadiusUnitsHandler}
												spacingUnits={priceIconBorderRadiusUnits}
												spacingDesktop={priceIconBorderRadiusDesktop}
												spacingTablet={priceIconBorderRadiusTablet}
												spacingMobile={priceIconBorderRadiusMobile}
												handleSpacingUnitHandler={handlePriceIconBorderRadiusUnitChange}
												spacingCombineBtn={priceIconBorderRadiusLink}
												spacingCombineBtnHandler={handlePriceIconBorderRadiusCombineBtn}
												setAttributes={setAttributes}
											/>

										</PanelBody>
										<PanelBody
											title={__("Price", "frontis-blocks")}
											initialOpen={false}
										>
											<BaseControl
												label={__("Alignment", "frontis-blocks")}
												id="fb-setting-text-alignment"
												className="fb-setting-text-alignment"
											>
													<ButtonGroup
														className="fb-setting-text-alignment-group-btn"
													>
														{TEXT_ALIGN.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({ pricingAlignment: item.value })}
																className={`fb-setting-text-alignment-single-btn ${pricingAlignment === item.value ? 'active' : ''}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
											</BaseControl>

											<FB_Color
												label={__("Price Color", "frontis-blocks")}
												globalColorSwitcher={normalPricingColorSwitcher}
												globalColor={normalPricingColor}
												globalHoverColor={normalPricingHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ normalPricingColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ normalPricingColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ normalPricingHoverColor: value })}
											/>
											<FB_TypographyControl
												fontFamily={normalPricingFontFamily}
												onChangeFontFamily={(value) => setAttributes({ normalPricingFontFamily: value })}

												fontSize={normalPricingFontSize}
												onChangeFontSize={(value) => setAttributes({ normalPricingFontSize: value })}

												fontSizeUnits={normalPricingFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ normalPricingFontSizeUnits: value })}

												fontWeight={normalPricingFontWeight}
												onChangeFontWeight={(value) => setAttributes({ normalPricingFontWeight: value })}

												fontStyle={normalPricingFontStyle}
												onChangeFontStyle={(value) => setAttributes({ normalPricingFontStyle: value })}

												textTransform={normalPricingTextTransform}
												onChangeTextTransform={(value) => setAttributes({ normalPricingTextTransform: value })}

												textDecoration={normalPricingTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ normalPricingTextDecoration: value })}

												letterSpacing={normalPricingLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ normalPricingLetterSpacing: value })}

												letterSpacingUnits={normalPricingLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ normalPricingLetterSpacingUnits: value })}

												lineHeight={normalPricingLineHeight}
												onChangeLineHeight={(value) => setAttributes({ normalPricingLineHeight: value })}

												lineHeightUnits={normalPricingLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ normalPricingLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											<FB_Color
												label={__("Sale Price Color", "frontis-blocks")}
												globalColorSwitcher={salePricingColorSwitcher}
												globalColor={salePricingColor}
												globalHoverColor={salePricingHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ salePricingColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ salePricingColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ salePricingHoverColor: value })}
											/>

											<FB_TypographyControl
												fontFamily={salePricingFontFamily}
												onChangeFontFamily={(value) => setAttributes({ salePricingFontFamily: value })}

												fontSize={salePricingFontSize}
												onChangeFontSize={(value) => setAttributes({ salePricingFontSize: value })}

												fontSizeUnits={salePricingFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ salePricingFontSizeUnits: value })}

												fontWeight={salePricingFontWeight}
												onChangeFontWeight={(value) => setAttributes({ salePricingFontWeight: value })}

												fontStyle={salePricingFontStyle}
												onChangeFontStyle={(value) => setAttributes({ salePricingFontStyle: value })}

												textTransform={salePricingTextTransform}
												onChangeTextTransform={(value) => setAttributes({ salePricingTextTransform: value })}

												textDecoration={salePricingTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ salePricingTextDecoration: value })}

												letterSpacing={salePricingLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ salePricingLetterSpacing: value })}

												letterSpacingUnits={salePricingLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ salePricingLetterSpacingUnits: value })}

												lineHeight={salePricingLineHeight}
												onChangeLineHeight={(value) => setAttributes({ salePricingLineHeight: value })}

												lineHeightUnits={salePricingLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ salePricingLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											<FB_Color
												label={__("Currency Color", "frontis-blocks")}
												globalColorSwitcher={priceCurrencyColorSwitcher}
												globalColor={priceCurrencyColor}
												globalHoverColor={priceCurrencyHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ priceCurrencyColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ priceCurrencyColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ priceCurrencyHoverColor: value })}
											/>

											<FB_TypographyControl
												fontFamily={priceCurrencyFontFamily}
												onChangeFontFamily={(value) => setAttributes({ priceCurrencyFontFamily: value })}

												fontSize={priceCurrencyFontSize}
												onChangeFontSize={(value) => setAttributes({ priceCurrencyFontSize: value })}

												fontSizeUnits={priceCurrencyFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ priceCurrencyFontSizeUnits: value })}

												fontWeight={priceCurrencyFontWeight}
												onChangeFontWeight={(value) => setAttributes({ priceCurrencyFontWeight: value })}

												fontStyle={priceCurrencyFontStyle}
												onChangeFontStyle={(value) => setAttributes({ priceCurrencyFontStyle: value })}

												textTransform={priceCurrencyTextTransform}
												onChangeTextTransform={(value) => setAttributes({ priceCurrencyTextTransform: value })}

												textDecoration={priceCurrencyTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ priceCurrencyTextDecoration: value })}

												letterSpacing={priceCurrencyLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ priceCurrencyLetterSpacing: value })}

												letterSpacingUnits={priceCurrencyLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ priceCurrencyLetterSpacingUnits: value })}

												lineHeight={priceCurrencyLineHeight}
												onChangeLineHeight={(value) => setAttributes({ priceCurrencyLineHeight: value })}

												lineHeightUnits={priceCurrencyLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ priceCurrencyLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											<FB_Color
												label={__("Period Color", "frontis-blocks")}
												globalColorSwitcher={pricePeriodColorSwitcher}
												globalColor={pricePeriodColor}
												globalHoverColor={pricePeriodHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ pricePeriodColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ pricePeriodColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ pricePeriodHoverColor: value })}
											/>

											<FB_TypographyControl
												fontFamily={pricePeriodFontFamily}
												onChangeFontFamily={(value) => setAttributes({ pricePeriodFontFamily: value })}

												fontSize={pricePeriodFontSize}
												onChangeFontSize={(value) => setAttributes({ pricePeriodFontSize: value })}

												fontSizeUnits={pricePeriodFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ pricePeriodFontSizeUnits: value })}

												fontWeight={pricePeriodFontWeight}
												onChangeFontWeight={(value) => setAttributes({ pricePeriodFontWeight: value })}

												fontStyle={pricePeriodFontStyle}
												onChangeFontStyle={(value) => setAttributes({ pricePeriodFontStyle: value })}

												textTransform={pricePeriodTextTransform}
												onChangeTextTransform={(value) => setAttributes({ pricePeriodTextTransform: value })}

												textDecoration={pricePeriodTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ pricePeriodTextDecoration: value })}

												letterSpacing={pricePeriodLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ pricePeriodLetterSpacing: value })}

												letterSpacingUnits={pricePeriodLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ pricePeriodLetterSpacingUnits: value })}

												lineHeight={pricePeriodLineHeight}
												onChangeLineHeight={(value) => setAttributes({ pricePeriodLineHeight: value })}

												lineHeightUnits={pricePeriodLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ pricePeriodLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>
										</PanelBody>
										<PanelBody
											title={__("Title and Subtitle", "frontis-blocks")}
											initialOpen={false}
										>
											<BaseControl
												label={__("Alignment", "frontis-blocks")}
												id="fb-setting-text-alignment"
												className="fb-setting-text-alignment"
											>
													<ButtonGroup
														className="fb-setting-text-alignment-group-btn"
													>
														{TEXT_ALIGN.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({ pricingTitleAlignment: item.value })}
																className={`fb-setting-text-alignment-single-btn ${pricingTitleAlignment === item.value ? 'active' : ''}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
											</BaseControl>

											<FB_Color
												label={__("Title Color", "frontis-blocks")}
												globalColorSwitcher={pricingTitleColorSwitcher}
												globalColor={pricingTitleColor}
												globalHoverColor={pricingTitleHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ pricingTitleColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ pricingTitleColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ pricingTitleHoverColor: value })}
											/>

											<FB_TypographyControl
												fontFamily={pricingTitleFontFamily}
												onChangeFontFamily={(value) => setAttributes({ pricingTitleFontFamily: value })}

												fontSize={pricingTitleFontSize}
												onChangeFontSize={(value) => setAttributes({ pricingTitleFontSize: value })}

												fontSizeUnits={pricingTitleFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ pricingTitleFontSizeUnits: value })}

												fontWeight={pricingTitleFontWeight}
												onChangeFontWeight={(value) => setAttributes({ pricingTitleFontWeight: value })}

												fontStyle={pricingTitleFontStyle}
												onChangeFontStyle={(value) => setAttributes({ pricingTitleFontStyle: value })}

												textTransform={pricingTitleTextTransform}
												onChangeTextTransform={(value) => setAttributes({ pricingTitleTextTransform: value })}

												textDecoration={pricingTitleTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ pricingTitleTextDecoration: value })}

												letterSpacing={pricingTitleLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ pricingTitleLetterSpacing: value })}

												letterSpacingUnits={pricingTitleLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ pricingTitleLetterSpacingUnits: value })}

												lineHeight={pricingTitleLineHeight}
												onChangeLineHeight={(value) => setAttributes({ pricingTitleLineHeight: value })}

												lineHeightUnits={pricingTitleLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ pricingTitleLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											<FB_Color
												label={__("Subtitle Color", "frontis-blocks")}
												globalColorSwitcher={pricingSubtitleColorSwitcher}
												globalColor={pricingSubtitleColor}
												globalHoverColor={pricingSubtitleHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ pricingSubtitleColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ pricingSubtitleColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ pricingSubtitleHoverColor: value })}
											/>

											<FB_TypographyControl
												fontFamily={pricingSubtitleFontFamily}
												onChangeFontFamily={(value) => setAttributes({ pricingSubtitleFontFamily: value })}

												fontSize={pricingSubtitleFontSize}
												onChangeFontSize={(value) => setAttributes({ pricingSubtitleFontSize: value })}

												fontSizeUnits={pricingSubtitleFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ pricingSubtitleFontSizeUnits: value })}

												fontWeight={pricingSubtitleFontWeight}
												onChangeFontWeight={(value) => setAttributes({ pricingSubtitleFontWeight: value })}

												fontStyle={pricingSubtitleFontStyle}
												onChangeFontStyle={(value) => setAttributes({ pricingSubtitleFontStyle: value })}

												textTransform={pricingSubtitleTextTransform}
												onChangeTextTransform={(value) => setAttributes({ pricingSubtitleTextTransform: value })}

												textDecoration={pricingSubtitleTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ pricingSubtitleTextDecoration: value })}

												letterSpacing={pricingSubtitleLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ pricingSubtitleLetterSpacing: value })}

												letterSpacingUnits={pricingSubtitleLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ pricingSubtitleLetterSpacingUnits: value })}

												lineHeight={pricingSubtitleLineHeight}
												onChangeLineHeight={(value) => setAttributes({ pricingSubtitleLineHeight: value })}

												lineHeightUnits={pricingSubtitleLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ pricingSubtitleLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>
										</PanelBody>
										<PanelBody
											title={__("Feature", "frontis-blocks")}
											initialOpen={false}
										>
											<BaseControl
												label={__("Alignment", "frontis-blocks")}
												id="fb-setting-text-alignment"
												className="fb-setting-text-alignment"
											>
													<ButtonGroup
														className="fb-setting-text-alignment-group-btn"
													>
														{TEXT_ALIGN.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({ priceFeatureAlignment: item.value })}
																className={`fb-setting-text-alignment-single-btn ${priceFeatureAlignment === item.value ? 'active' : ''}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
											</BaseControl>

											<FB_Color
												label={__("Feature Icon Color", "frontis-blocks")}
												globalColorSwitcher={priceFeatureIconColorSwitcher}
												globalColor={priceFeatureIconColor}
												globalHoverColor={priceFeatureIconHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ priceFeatureIconColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ priceFeatureIconColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ priceFeatureIconHoverColor: value })}
											/>

											<FB_Range
												min={0}
												max={200}
												label={__("Feature Icon Size", "frontis-blocks")}
												rangeValue={priceFeatureIconSize}
												onChangeHandler={(value) => setAttributes({ priceFeatureIconSize: value })}
												rangeUnitHandler={(value) => setAttributes({ priceFeatureIconSizeUnits: value })}
												deviceType={deviceType}
												units={priceFeatureIconSizeUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={""}
											/>

											<FB_Color
												label={__("Feature Title Color", "frontis-blocks")}
												globalColorSwitcher={pricingfeatureTitleColorSwitcher}
												globalColor={pricingfeatureTitleColor}
												globalHoverColor={pricingfeatureTitleHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ pricingfeatureTitleColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ pricingfeatureTitleColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ pricingfeatureTitleHoverColor: value })}
											/>

											<FB_TypographyControl
												fontFamily={pricingfeatureTitleFontFamily}
												onChangeFontFamily={(value) => setAttributes({ pricingfeatureTitleFontFamily: value })}

												fontSize={pricingfeatureTitleFontSize}
												onChangeFontSize={(value) => setAttributes({ pricingfeatureTitleFontSize: value })}

												fontSizeUnits={pricingfeatureTitleFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ pricingfeatureTitleFontSizeUnits: value })}

												fontWeight={pricingfeatureTitleFontWeight}
												onChangeFontWeight={(value) => setAttributes({ pricingfeatureTitleFontWeight: value })}

												fontStyle={pricingfeatureTitleFontStyle}
												onChangeFontStyle={(value) => setAttributes({ pricingfeatureTitleFontStyle: value })}

												textTransform={pricingfeatureTitleTextTransform}
												onChangeTextTransform={(value) => setAttributes({ pricingfeatureTitleTextTransform: value })}

												textDecoration={pricingfeatureTitleTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ pricingfeatureTitleTextDecoration: value })}

												letterSpacing={pricingfeatureTitleLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ pricingfeatureTitleLetterSpacing: value })}

												letterSpacingUnits={pricingfeatureTitleLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ pricingfeatureTitleLetterSpacingUnits: value })}

												lineHeight={pricingfeatureTitleLineHeight}
												onChangeLineHeight={(value) => setAttributes({ pricingfeatureTitleLineHeight: value })}

												lineHeightUnits={pricingfeatureTitleLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ pricingfeatureTitleLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>
										</PanelBody>

										<PanelBody
											title={__("Button", "frontis-blocks")}
											initialOpen={false}
										>
											<BaseControl
												label={__("Alignment", "frontis-blocks")}
												id="fb-setting-text-alignment"
												className="fb-setting-text-alignment"
											>
													<ButtonGroup
														className="fb-setting-text-alignment-group-btn"
													>
														{TEXT_ALIGN.map((item, key) => (
															<Button
																key={key}
																onClick={() => setAttributes({ priceButtonAlignment: item.value })}
																className={`fb-setting-text-alignment-single-btn ${priceButtonAlignment === item.value ? 'active' : ''}`}
															>
																{item.label}
															</Button>
														))}
													</ButtonGroup>
											</BaseControl>

											<FB_Range
												min={0}
												max={100}
												label={__("Button Width", "frontis-blocks")}
												rangeValue={priceButtonWidth}
												onChangeHandler={(value) => setAttributes({ priceButtonWidth: value })}
												rangeUnitHandler={(value) => setAttributes({ priceButtonWidthUnits: value })}
												deviceType={deviceType}
												units={priceButtonWidthUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={""}
											/>

											<FB_TypographyControl
												fontFamily={priceButtonFontFamily}
												onChangeFontFamily={(value) => setAttributes({ priceButtonFontFamily: value })}

												fontSize={priceButtonFontSize}
												onChangeFontSize={(value) => setAttributes({ priceButtonFontSize: value })}

												fontSizeUnits={priceButtonFontSizeUnits}
												onChangeFontSizeUnit={(value) => setAttributes({ priceButtonFontSizeUnits: value })}

												fontWeight={priceButtonFontWeight}
												onChangeFontWeight={(value) => setAttributes({ priceButtonFontWeight: value })}

												fontStyle={priceButtonFontStyle}
												onChangeFontStyle={(value) => setAttributes({ priceButtonFontStyle: value })}

												textTransform={priceButtonTextTransform}
												onChangeTextTransform={(value) => setAttributes({ priceButtonTextTransform: value })}

												textDecoration={priceButtonTextDecoration}
												onChangeTextDecoration={(value) => setAttributes({ priceButtonTextDecoration: value })}

												letterSpacing={priceButtonLetterSpacing}
												onChangeLetterSpacing={(value) => setAttributes({ priceButtonLetterSpacing: value })}

												letterSpacingUnits={priceButtonLetterSpacingUnits}
												onChangeLetterSpacingUnit={(value) => setAttributes({ priceButtonLetterSpacingUnits: value })}

												lineHeight={priceButtonLineHeight}
												onChangeLineHeight={(value) => setAttributes({ priceButtonLineHeight: value })}

												lineHeightUnits={priceButtonLineHeightUnits}
												onChangeLineHeightUnit={(value) => setAttributes({ priceButtonLineHeightUnits: value })}

												deviceType={deviceType}
												setAttributes={setAttributes}
											/>

											<FB_Color
												label={__("Text Color", "frontis-blocks")}
												colorSwitcher={priceButtonColorSwitcher}
												globalColor={priceButtonColor}
												globalHoverColor={priceButtonHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ priceButtonColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ priceButtonColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ priceButtonHoverColor: value })}
											/>

											<FB_Color
												label={__("Background Color", "frontis-blocks")}
												colorSwitcher={priceButtonBgColorSwitcher}
												globalColor={priceButtonBgColor}
												globalHoverColor={priceButtonBgHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ priceButtonBgColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ priceButtonBgColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ priceButtonBgHoverColor: value })}
											/>

											<FB_Spacing 
												label={__("Padding", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlePriceButtonPaddingUnitsHandler}
												spacingUnits={priceButtonPaddingUnits}
												spacingDesktop={priceButtonDesktopPadding}
												spacingTablet={priceButtonTabPadding}
												spacingMobile={priceButtonMobilePadding}
												handleSpacingUnitHandler={handlePriceButtonPaddingUnitChange}
												spacingCombineBtn={priceButtonPaddingLink}
												spacingCombineBtnHandler={handlePriceButtonPaddingCombineBtn}
												setAttributes={setAttributes}
											/>
											<FB_Spacing 
												label={__("Margin", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlePriceButtonMarginUnitsHandler}
												spacingUnits={priceButtonMarginUnits}
												spacingDesktop={priceButtonDesktopMargin}
												spacingTablet={priceButtonTabMargin}
												spacingMobile={priceButtonMobileMargin}
												handleSpacingUnitHandler={handlePriceButtonMarginUnitChange}
												spacingCombineBtn={priceButtonMarginLink}
												spacingCombineBtnHandler={handlePriceButtonMarginCombineBtn}
												setAttributes={setAttributes}
											/>

											<SelectControl
													label={__("Border Style", "frontis-blocks")}
													value={priceButtonBorder}
													options={BORDER_STYLES}
													onChange={(value) => setAttributes({ priceButtonBorder: value })}
											/>

											<FB_Color
												label={__("Border Color", "frontis-blocks")}
												colorSwitcher={priceButtonBorderColorSwitcher}
												globalColor={priceButtonBorderColor}
												globalHoverColor={priceButtonBorderHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ priceButtonBorderColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ priceButtonBorderColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ priceButtonBorderHoverColor: value })}
											/>

											<FB_Spacing 
												label={__("Border", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlePriceButtonBorderUnitsHandler}
												spacingUnits={priceButtonBorderUnits}
												spacingDesktop={priceButtonDesktopBorderWidth}
												spacingTablet={priceButtonTabBorderWidth}
												spacingMobile={priceButtonMobileBorderWidth}
												handleSpacingUnitHandler={handlePriceButtonBorderUnitChange}
												spacingCombineBtn={priceButtonBorderLink}
												spacingCombineBtnHandler={handlePriceButtonBorderCombineBtn}
												setAttributes={setAttributes}
											/>

											<FB_Spacing 
												label={__("Border Radius", "frontis-blocks")}
												deviceType={deviceType}
												spacingUnitsHandler={handlePriceButtonBorderRadiusUnitsHandler}
												spacingUnits={priceButtonBorderRadiusUnits}
												spacingDesktop={priceButtonDesktopBorderRadiusWidth}
												spacingTablet={priceButtonTabBorderRadiusWidth}
												spacingMobile={priceButtonMobileBorderRadiusWidth}
												handleSpacingUnitHandler={handlePriceButtonBorderRadiusUnitChange}
												spacingCombineBtn={priceButtonBorderRadiusLink}
												spacingCombineBtnHandler={handlePriceButtonBorderRadiusCombineBtn}
												setAttributes={setAttributes}
											/>
											<FB_Color
												label={__("Icon Color", "frontis-blocks")}
												colorSwitcher={priceButtonIconColorSwitcher}
												globalColor={priceButtonIconColor}
												globalHoverColor={priceButtonIconHoverColor}
												handleColorSwitcherChange={(value) => setAttributes({ priceButtonIconColorSwitcher: value })}
												handleGlobalColorChange={(value) => setAttributes({ priceButtonIconColor: value })}
												handleGlobalHoverColorChange={(value) => setAttributes({ priceButtonIconHoverColor: value })}
											/>

											<FB_Range
												min={0}
												max={100}
												label={__("Icon Size", "frontis-blocks")}
												rangeValue={priceButtonIconSize}
												onChangeHandler={(value) => setAttributes({ priceButtonIconSize: value })}
												rangeUnitHandler={(value) => setAttributes({ priceButtonIconSizeUnits: value })}
												deviceType={deviceType}
												units={priceButtonIconSizeUnits}
												setAttributes={setAttributes}
												rangeStep={1}
												resetFallbackValue={""}
											/>
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
														value={priceGlobalZIndex}
														onChange={(value) => setAttributes({ priceGlobalZIndex: value === 0 ? undefined : value })}
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
														spacingUnits={priceGlobalPaddingUnits}
														spacingDesktop={priceGlobalPaddingDesktop}
														spacingTablet={priceGlobalPaddingTablet}
														spacingMobile={priceGlobalPaddingMobile}
														handleSpacingUnitHandler={handleGlobalPaddingUnitChange}
														spacingCombineBtn={priceGlobalPaddingLink}
														spacingCombineBtnHandler={handleGlobalPaddingCombineBtn}
														setAttributes={setAttributes}
													/>
													<FB_Spacing 
														label={__("Margin", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalMarginUnitsHandler}
														spacingUnits={priceGlobalMarginUnits}
														spacingDesktop={priceGlobalMarginDesktop}
														spacingTablet={priceGlobalMarginTablet}
														spacingMobile={priceGlobalMarginMobile}
														handleSpacingUnitHandler={handleGlobalMarginUnitChange}
														spacingCombineBtn={priceGlobalMarginLink}
														spacingCombineBtnHandler={handleGlobalMarginCombineBtn}
														setAttributes={setAttributes}
													/>
												</PanelBody>

												<PanelBody title="Background Color" initialOpen={false} >
													<FB_Color
														label={__("Background Color", "frontis-blocks")}
														globalColorSwitcher={priceGlobalBgColorSwitcher}
														globalColor={priceGlobalBgColor}
														globalHoverColor={priceGlobalBgHoverColor}
														handleColorSwitcherChange={(value) => setAttributes({ priceGlobalBgColorSwitcher: value })}
														handleGlobalColorChange={(value) => setAttributes({ priceGlobalBgColor: value })}
														handleGlobalHoverColorChange={(value) => setAttributes({ priceGlobalBgHoverColor: value })}
													/>
												</PanelBody>
												<PanelBody title={__("Border and Shadow", "frontis-blocks")} initialOpen={false}>

													<SelectControl
															label={__("Border Style", "frontis-blocks")}
															value={priceGlobalBorder}
															options={BORDER_STYLES}
															onChange={(value) => setAttributes({ priceGlobalBorder: value })}
													/>

													<FB_Color
														label={__("Border Color", "frontis-blocks")}
														globalColorSwitcher={priceGlobalBorderColorSwitcher}
														globalColor={priceGlobalBorderColor}
														globalHoverColor={priceGlobalBorderHoverColor}
														handleColorSwitcherChange={(value) => setAttributes({ priceGlobalBorderColorSwitcher: value })}
														handleGlobalColorChange={(value) => setAttributes({ priceGlobalBorderColor: value })}
														handleGlobalHoverColorChange={(value) => setAttributes({ priceGlobalBorderHoverColor: value })}
													/>

													<FB_Spacing 
														label={__("Border", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalBorderUnitsHandler}
														spacingUnits={priceGlobalBorderUnits}
														spacingDesktop={priceGlobalBorderDesktop}
														spacingTablet={priceGlobalBorderTablet}
														spacingMobile={priceGlobalBorderMobile}
														handleSpacingUnitHandler={handleGlobalBorderUnitChange}
														spacingCombineBtn={priceGlobalBorderLink}
														spacingCombineBtnHandler={handleGlobalBorderCombineBtn}
														setAttributes={setAttributes}
													/>

													<FB_Spacing 
														label={__("Border Radius", "frontis-blocks")}
														deviceType={deviceType}
														spacingUnitsHandler={handleGlobalBorderRadiusUnitsHandler}
														spacingUnits={priceGlobalBorderRadiusUnits}
														spacingDesktop={priceGlobalBorderRadiusDesktop}
														spacingTablet={priceGlobalBorderRadiusTablet}
														spacingMobile={priceGlobalBorderRadiusMobile}
														handleSpacingUnitHandler={handleGlobalBorderRadiusUnitChange}
														spacingCombineBtn={priceGlobalBorderRadiusLink}
														spacingCombineBtnHandler={handleGlobalBorderRadiusCombineBtn}
														setAttributes={setAttributes}
													/>
													<FB_BoxShadowControl
														onBoxShadowChange={(value) => setAttributes({ priceGlobalBoxShadowValues: value })}
														initialShadowValue={priceGlobalBoxShadowValues}
														onBoxShadowStyleChange={(value) => setAttributes({ priceGlobalBoxShadowCssValue: value })}
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