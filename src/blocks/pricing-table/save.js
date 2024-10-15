import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
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

		/** Start Style Settings */
		pricingHeaderBgColor,
		pricingHeaderBgHoverColor,
		/** Start Padding */
		pricingHeaderPaddingUnits,
		pricingHeaderDesktopPadding,
		pricingHeaderTabletPadding,
		pricingHeaderMobilePadding,
		/** End Padding */
		/** Start Border */
		pricingHeaderBorder,
		pricingHeaderBorderColor,
		pricingHeaderBorderHoverColor,
		pricingHeaderBorderUnits,
		pricingHeaderBorderDesktop,
		pricingHeaderBorderTablet,
		pricingHeaderBorderMobile,
		/** End Border */

		/** Start Border Radius */
		pricingHeaderBorderRadiusUnits,
		pricingHeaderBorderRadiusDesktop,
		pricingHeaderBorderRadiusTablet,
		pricingHeaderBorderRadiusMobile,
		/**End Header */

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

		priceingPriceGap,
		priceingPriceGapUnits,
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


		/** Start Ribbon Color Settings */
		priceRibbonColorSwitcher,
		priceRibbonColor,
		priceRibbonHoverColor,
		priceRibbonBgColorSwitcher,
		priceRibbonBgColor,
		priceRibbonBgHoverColor,

		priceRibbonTop,
		priceRibbonTopUnits,
		priceRibbonLeft,
		priceRibbonLeftUnits,
		priceRibbonRight,
		priceRibbonRightUnits,
		priceRibbonWidth,
		priceRibbonWidthUnits,
		priceRibbonFontSize,
		priceRibbonFontSizeUnits,
		priceRibbonpadding,
		priceRibbonpaddingUnits,
		/** End Ribbon Color Settings */

		/** Start Global Settings */
		priceGlobalZIndex,
		priceGlobalPaddingUnits,
        priceGlobalPaddingDesktop,
        priceGlobalPaddingTablet,
        priceGlobalPaddingMobile,
        priceGlobalMarginUnits,
        priceGlobalMarginDesktop,
        priceGlobalMarginTablet,
        priceGlobalMarginMobile,
        priceGlobalBgColor,
        priceGlobalBgHoverColor,
        priceGlobalBorder,
        priceGlobalBorderColor,
        priceGlobalBorderHoverColor,
        priceGlobalBorderUnits,
        priceGlobalBorderDesktop,
        priceGlobalBorderTablet,
        priceGlobalBorderMobile,
        priceGlobalBorderRadiusUnits,
        priceGlobalBorderRadiusDesktop,
        priceGlobalBorderRadiusTablet,
        priceGlobalBorderRadiusMobile,
		priceGlobalBoxShadowCssValue,
		/** End Global Settings */

    } = attributes;

    const blockProps = useBlockProps.save({
        className: `${blockId}`,
    });

	const headerDesktopPadding = `${pricingHeaderDesktopPadding.top}${pricingHeaderPaddingUnits.Desktop} ${pricingHeaderDesktopPadding.right}${pricingHeaderPaddingUnits.Desktop} ${pricingHeaderDesktopPadding.bottom}${pricingHeaderPaddingUnits.Desktop} ${pricingHeaderDesktopPadding.left}${pricingHeaderPaddingUnits.Desktop}`;
	const headerTabletPadding = `${pricingHeaderTabletPadding.top}${pricingHeaderPaddingUnits.Tablet} ${pricingHeaderTabletPadding.right}${pricingHeaderPaddingUnits.Tablet} ${pricingHeaderTabletPadding.bottom}${pricingHeaderPaddingUnits.Tablet} ${pricingHeaderTabletPadding.left}${pricingHeaderPaddingUnits.Tablet}`;
	const headerMobilePadding = `${pricingHeaderMobilePadding.top}${pricingHeaderPaddingUnits.Mobile} ${pricingHeaderMobilePadding.right}${pricingHeaderPaddingUnits.Mobile} ${pricingHeaderMobilePadding.bottom}${pricingHeaderPaddingUnits.Mobile} ${pricingHeaderMobilePadding.left}${pricingHeaderPaddingUnits.Mobile}`;
	/** End Header Padding */

	const headerDesktopBorderWidth = `${pricingHeaderBorderDesktop.top}${pricingHeaderBorderUnits.Desktop} ${pricingHeaderBorderDesktop.right}${pricingHeaderBorderUnits.Desktop} ${pricingHeaderBorderDesktop.bottom}${pricingHeaderBorderUnits.Desktop} ${pricingHeaderBorderDesktop.left}${pricingHeaderBorderUnits.Desktop}`;
	const headerTabletBorderWidth = `${pricingHeaderBorderTablet.top}${pricingHeaderBorderUnits.Tablet} ${pricingHeaderBorderTablet.right}${pricingHeaderBorderUnits.Tablet} ${pricingHeaderBorderTablet.bottom}${pricingHeaderBorderUnits.Tablet} ${pricingHeaderBorderTablet.left}${pricingHeaderBorderUnits.Tablet}`;
	const headerMobileBorderWidth = `${pricingHeaderBorderMobile.top}${pricingHeaderBorderUnits.Mobile} ${pricingHeaderBorderMobile.right}${pricingHeaderBorderUnits.Mobile} ${pricingHeaderBorderMobile.bottom}${pricingHeaderBorderUnits.Mobile} ${pricingHeaderBorderMobile.left}${pricingHeaderBorderUnits.Mobile}`;
	/** End Header Border */

    const headerDesktopBorderRadiusWidth = `${pricingHeaderBorderRadiusDesktop.top}${pricingHeaderBorderRadiusUnits.Desktop} ${pricingHeaderBorderRadiusDesktop.right}${pricingHeaderBorderRadiusUnits.Desktop} ${pricingHeaderBorderRadiusDesktop.bottom}${pricingHeaderBorderRadiusUnits.Desktop} ${pricingHeaderBorderRadiusDesktop.left}${pricingHeaderBorderRadiusUnits.Desktop}`;
	const headerTabletBorderRadiusWidth = `${pricingHeaderBorderRadiusTablet.top}${pricingHeaderBorderRadiusUnits.Tablet} ${pricingHeaderBorderRadiusTablet.right}${pricingHeaderBorderRadiusUnits.Tablet} ${pricingHeaderBorderRadiusTablet.bottom}${pricingHeaderBorderRadiusUnits.Tablet} ${pricingHeaderBorderRadiusTablet.left}${pricingHeaderBorderRadiusUnits.Tablet}`;
	const headerMobileBorderRadiusWidth = `${pricingHeaderBorderRadiusMobile.top}${pricingHeaderBorderRadiusUnits.Mobile} ${pricingHeaderBorderRadiusMobile.right}${pricingHeaderBorderRadiusUnits.Mobile} ${pricingHeaderBorderRadiusMobile.bottom}${pricingHeaderBorderRadiusUnits.Mobile} ${pricingHeaderBorderRadiusMobile.left}${pricingHeaderBorderRadiusUnits.Mobile}`;
	/** End Header Border Radius */

	const priceIconDesktopBorderWidthValue = `${priceIconBorderDesktop.top}${priceIconBorderUnits.Desktop} ${priceIconBorderDesktop.right}${priceIconBorderUnits.Desktop} ${priceIconBorderDesktop.bottom}${priceIconBorderUnits.Desktop} ${priceIconBorderDesktop.left}${priceIconBorderUnits.Desktop}`;
	const priceIconTabletBorderWidthValue = `${priceIconBorderTablet.top}${priceIconBorderUnits.Tablet} ${priceIconBorderTablet.right}${priceIconBorderUnits.Tablet} ${priceIconBorderTablet.bottom}${priceIconBorderUnits.Tablet} ${priceIconBorderTablet.left}${priceIconBorderUnits.Tablet}`;
	const priceIconMobileBorderWidthValue = `${priceIconBorderMobile.top}${priceIconBorderUnits.Mobile} ${priceIconBorderMobile.right}${priceIconBorderUnits.Mobile} ${priceIconBorderMobile.bottom}${priceIconBorderUnits.Mobile} ${priceIconBorderMobile.left}${priceIconBorderUnits.Mobile}`;
	/** End Icon Border */

	const priceIconDesktopBorderRadiusWidthValue = `${priceIconBorderRadiusDesktop.top}${priceIconBorderRadiusUnits.Desktop} ${priceIconBorderRadiusDesktop.right}${priceIconBorderRadiusUnits.Desktop} ${priceIconBorderRadiusDesktop.bottom}${priceIconBorderRadiusUnits.Desktop} ${priceIconBorderRadiusDesktop.left}${priceIconBorderRadiusUnits.Desktop}`;
	const priceIconTabletBorderRadiusWidthValue = `${priceIconBorderRadiusTablet.top}${priceIconBorderRadiusUnits.Tablet} ${priceIconBorderRadiusTablet.right}${priceIconBorderRadiusUnits.Tablet} ${priceIconBorderRadiusTablet.bottom}${priceIconBorderRadiusUnits.Tablet} ${priceIconBorderRadiusTablet.left}${priceIconBorderRadiusUnits.Tablet}`;
	const priceIconMobileBorderRadiusWidthValue = `${priceIconBorderRadiusMobile.top}${priceIconBorderRadiusUnits.Mobile} ${priceIconBorderRadiusMobile.right}${priceIconBorderRadiusUnits.Mobile} ${priceIconBorderRadiusMobile.bottom}${priceIconBorderRadiusUnits.Mobile} ${priceIconBorderRadiusMobile.left}${priceIconBorderRadiusUnits.Mobile}`;
	/** End Icon Border Radius */

	const priceButtonDesktopPaddingValue = `${priceButtonDesktopPadding.top}${priceButtonPaddingUnits.Desktop} ${priceButtonDesktopPadding.right}${priceButtonPaddingUnits.Desktop} ${priceButtonDesktopPadding.bottom}${priceButtonPaddingUnits.Desktop} ${priceButtonDesktopPadding.left}${priceButtonPaddingUnits.Desktop}`;
	const priceButtonTabletPaddingValue = `${priceButtonTabPadding.top}${priceButtonPaddingUnits.Tablet} ${priceButtonTabPadding.right}${priceButtonPaddingUnits.Tablet} ${priceButtonTabPadding.bottom}${priceButtonPaddingUnits.Tablet} ${priceButtonTabPadding.left}${priceButtonPaddingUnits.Tablet}`;
	const priceButtonMobilePaddingValue = `${priceButtonMobilePadding.top}${priceButtonPaddingUnits.Mobile} ${priceButtonMobilePadding.right}${priceButtonPaddingUnits.Mobile} ${priceButtonMobilePadding.bottom}${priceButtonPaddingUnits.Mobile} ${priceButtonMobilePadding.left}${priceButtonPaddingUnits.Mobile}`;
	/** End Pricing Button Padding */

    const priceButtonDesktopMarginValue = `${priceButtonDesktopMargin.top}${priceButtonMarginUnits.Desktop} ${priceButtonDesktopMargin.right}${priceButtonMarginUnits.Desktop} ${priceButtonDesktopMargin.bottom}${priceButtonMarginUnits.Desktop} ${priceButtonDesktopMargin.left}${priceButtonMarginUnits.Desktop}`;
	const priceButtonTabletMarginValue = `${priceButtonTabMargin.top}${priceButtonMarginUnits.Tablet} ${priceButtonTabMargin.right}${priceButtonMarginUnits.Tablet} ${priceButtonTabMargin.bottom}${priceButtonMarginUnits.Tablet} ${priceButtonTabMargin.left}${priceButtonMarginUnits.Tablet}`;
	const priceButtonMobileMarginValue = `${priceButtonMobileMargin.top}${priceButtonMarginUnits.Mobile} ${priceButtonMobileMargin.right}${priceButtonMarginUnits.Mobile} ${priceButtonMobileMargin.bottom}${priceButtonMarginUnits.Mobile} ${priceButtonMobileMargin.left}${priceButtonMarginUnits.Mobile}`;
	/** End Pricing Button Margin */

    const priceButtonDesktopBorderWidthValue = `${priceButtonDesktopBorderWidth.top}${priceButtonBorderUnits.Desktop} ${priceButtonDesktopBorderWidth.right}${priceButtonBorderUnits.Desktop} ${priceButtonDesktopBorderWidth.bottom}${priceButtonBorderUnits.Desktop} ${priceButtonDesktopBorderWidth.left}${priceButtonBorderUnits.Desktop}`;
	const priceButtonTabletBorderWidthValue = `${priceButtonTabBorderWidth.top}${priceButtonBorderUnits.Tablet} ${priceButtonTabBorderWidth.right}${priceButtonBorderUnits.Tablet} ${priceButtonTabBorderWidth.bottom}${priceButtonBorderUnits.Tablet} ${priceButtonTabBorderWidth.left}${priceButtonBorderUnits.Tablet}`;
	const priceButtonMobileBorderWidthValue = `${priceButtonMobileBorderWidth.top}${priceButtonBorderUnits.Mobile} ${priceButtonMobileBorderWidth.right}${priceButtonBorderUnits.Mobile} ${priceButtonMobileBorderWidth.bottom}${priceButtonBorderUnits.Mobile} ${priceButtonMobileBorderWidth.left}${priceButtonBorderUnits.Mobile}`;
	/** End Pricing Button Border */

    const priceButtonDesktopBorderRadiusWidthValue = `${priceButtonDesktopBorderRadiusWidth.top}${priceButtonBorderRadiusUnits.Desktop} ${priceButtonDesktopBorderRadiusWidth.right}${priceButtonBorderRadiusUnits.Desktop} ${priceButtonDesktopBorderRadiusWidth.bottom}${priceButtonBorderRadiusUnits.Desktop} ${priceButtonDesktopBorderRadiusWidth.left}${priceButtonBorderRadiusUnits.Desktop}`;
	const priceButtonTabletBorderRadiusWidthValue = `${priceButtonTabBorderRadiusWidth.top}${priceButtonBorderRadiusUnits.Tablet} ${priceButtonTabBorderRadiusWidth.right}${priceButtonBorderRadiusUnits.Tablet} ${priceButtonTabBorderRadiusWidth.bottom}${priceButtonBorderRadiusUnits.Tablet} ${priceButtonTabBorderRadiusWidth.left}${priceButtonBorderRadiusUnits.Tablet}`;
	const priceButtonMobileBorderRadiusWidthValue = `${priceButtonMobileBorderRadiusWidth.top}${priceButtonBorderRadiusUnits.Mobile} ${priceButtonMobileBorderRadiusWidth.right}${priceButtonBorderRadiusUnits.Mobile} ${priceButtonMobileBorderRadiusWidth.bottom}${priceButtonBorderRadiusUnits.Mobile} ${priceButtonMobileBorderRadiusWidth.left}${priceButtonBorderRadiusUnits.Mobile}`;
	/** End Pricing Button Border Radius */


    return (
        <>

            <style>
			{`
				.fb-pricing-wrapper.${blockId} .fb-pricing-header {
					${headerDesktopPadding ? `padding: ${headerDesktopPadding};` : ''}
					${pricingHeaderBorder ? `border: ${pricingHeaderBorder};` : ''}
					${headerDesktopBorderWidth ? `border-width: ${headerDesktopBorderWidth};` : ''}
					${headerDesktopBorderRadiusWidth ? `border-radius: ${headerDesktopBorderRadiusWidth};` : ''}
					${pricingHeaderBorderColor ? `border-color: ${pricingHeaderBorderColor};` : ''}
					transition: background-color 0.3s ease, border-color 0.3s ease;
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-header:hover {
					${pricingHeaderBgHoverColor ? `background-color: ${pricingHeaderBgHoverColor};` : ''}
					${pricingHeaderBorderHoverColor ? `border-color: ${pricingHeaderBorderHoverColor};` : ''}
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-icon-wrapper {
					justify-content: ${pricingIconAlignment === 'left' ? 'flex-start' : pricingIconAlignment === 'center' ? 'center' : pricingIconAlignment === 'right' ? 'flex-end' : 'center'};
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-icon {
					width: ${priceIconBgSize.Desktop}${priceIconBgSizeUnits.Desktop};
					height: ${priceIconBgSize.Desktop}${priceIconBgSizeUnits.Desktop};
					${priceIconBgColor ? `background-color: ${priceIconBgColor};` : ''}
					${priceIconBorder ? `border: ${priceIconBorder};` : ''}
					${priceIconDesktopBorderWidthValue ? `border-width: ${priceIconDesktopBorderWidthValue};` : ''}
					${priceIconDesktopBorderRadiusWidthValue ? `border-radius: ${priceIconDesktopBorderRadiusWidthValue};` : ''}
					${priceIconBorderColor ? `border-color: ${priceIconBorderColor};` : ''}
					transition: background-color 0.3s ease, border-color 0.3s ease;
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-icon:hover {
					background-color: ${priceIconBgHoverColor};
					${priceIconBorderHoverColor ? `border-color: ${priceIconBorderHoverColor};` : ''}
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-icon svg {
					width: ${priceIconSize.Desktop}${priceIconSizeUnits.Desktop};
					height: ${priceIconSize.Desktop}${priceIconSizeUnits.Desktop};
					fill: ${priceIconColor};
					transition: fill 0.3s ease;
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-icon:hover svg {
					fill: ${priceIconHoverColor};
				}

				.fb-pricing-wrapper.${blockId}	.fb-pricing-price-wrapper {
					justify-content: ${pricingAlignment === 'left' ? 'flex-start' : pricingAlignment === 'center' ? 'center' : pricingAlignment === 'right' ? 'flex-end' : 'center'};
				}

				.fb-pricing-wrapper.${blockId} .fb-pricing-price-wrapper {
					margin: ${priceingPriceGap.Desktop ? `${priceingPriceGap.Desktop}${priceingPriceGapUnits.Desktop}` : '0'} 0;
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-price-wrapper .fb-pricing-normal-price {
					${normalPricingColor ? `color: ${normalPricingColor};` : ''}
					${normalPricingFontFamily ? `font-family: ${normalPricingFontFamily};` : ""}
					${normalPricingFontSize.Desktop ? `font-size: ${normalPricingFontSize.Desktop}${normalPricingFontSizeUnits.Desktop};` : ""}
					${normalPricingFontWeight ? `font-weight: ${normalPricingFontWeight};` : ""}
					${normalPricingFontStyle ? `font-style: ${normalPricingFontStyle};` : ""}
					${normalPricingTextTransform ? `text-transform: ${normalPricingTextTransform};` : ""}
					${normalPricingTextDecoration ? `text-decoration: ${normalPricingTextDecoration};` : ""}
					${normalPricingLetterSpacing.Desktop ? `letter-spacing: ${normalPricingLetterSpacing.Desktop}${normalPricingLetterSpacingUnits.Desktop};` : ""}
					${normalPricingLineHeight.Desktop ? `line-height: ${normalPricingLineHeight.Desktop}${normalPricingLineHeightUnits.Desktop};` : ""}
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-price-wrapper .fb-pricing-normal-price:hover {
					${normalPricingHoverColor ? `color: ${normalPricingHoverColor};` : ''}
				}

				.fb-pricing-wrapper.${blockId} .fb-pricing-price-wrapper .fb-pricing-sale-price {
					${salePricingColor ? `color: ${salePricingColor};` : ''}
					${salePricingFontFamily ? `font-family: ${salePricingFontFamily};` : ""}
					${salePricingFontSize.Desktop ? `font-size: ${salePricingFontSize.Desktop}${salePricingFontSizeUnits.Desktop};` : ""}
					${salePricingFontWeight ? `font-weight: ${salePricingFontWeight};` : ""}
					${salePricingFontStyle ? `font-style: ${salePricingFontStyle};` : ""}
					${salePricingTextTransform ? `text-transform: ${salePricingTextTransform};` : ""}
					${salePricingTextDecoration ? `text-decoration: ${salePricingTextDecoration};` : ""}
					${salePricingLetterSpacing.Desktop ? `letter-spacing: ${salePricingLetterSpacing.Desktop}${salePricingLetterSpacingUnits.Desktop};` : ""}
					${salePricingLineHeight.Desktop ? `line-height: ${salePricingLineHeight.Desktop}${salePricingLineHeightUnits.Desktop};` : ""}
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-price-wrapper .fb-pricing-sale-price:hover {
					${salePricingHoverColor ? `color: ${salePricingHoverColor};` : ''}
				}

				.fb-pricing-wrapper.${blockId} .fb-pricing-price-wrapper .price-currency {
					${priceCurrencyColor ? `color: ${priceCurrencyColor};` : ''}
					${priceCurrencyFontFamily ? `font-family: ${priceCurrencyFontFamily};` : ""}
					${priceCurrencyFontSize.Desktop ? `font-size: ${priceCurrencyFontSize.Desktop}${priceCurrencyFontSizeUnits.Desktop};` : ""}
					${priceCurrencyFontWeight ? `font-weight: ${priceCurrencyFontWeight};` : ""}
					${priceCurrencyFontStyle ? `font-style: ${priceCurrencyFontStyle};` : ""}
					${priceCurrencyTextTransform ? `text-transform: ${priceCurrencyTextTransform};` : ""}
					${priceCurrencyTextDecoration ? `text-decoration: ${priceCurrencyTextDecoration};` : ""}
					${priceCurrencyLetterSpacing.Desktop ? `letter-spacing: ${priceCurrencyLetterSpacing.Desktop}${priceCurrencyLetterSpacingUnits.Desktop};` : ""}
					${priceCurrencyLineHeight.Desktop ? `line-height: ${priceCurrencyLineHeight.Desktop}${priceCurrencyLineHeightUnits.Desktop};` : ""}
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-price-wrapper .price-currency:hover {
					${priceCurrencyHoverColor ? `color: ${priceCurrencyHoverColor};` : ''}
				}

				.fb-pricing-wrapper.${blockId} .fb-pricing-price-wrapper .price-period {
					${pricePeriodColor ? `color: ${pricePeriodColor};` : ''}
					${pricePeriodFontFamily ? `font-family: ${pricePeriodFontFamily};` : ""}
					${pricePeriodFontSize.Desktop ? `font-size: ${pricePeriodFontSize.Desktop}${pricePeriodFontSizeUnits.Desktop};` : ""}
					${pricePeriodFontWeight ? `font-weight: ${pricePeriodFontWeight};` : ""}
					${pricePeriodFontStyle ? `font-style: ${pricePeriodFontStyle};` : ""}
					${pricePeriodTextTransform ? `text-transform: ${pricePeriodTextTransform};` : ""}
					${pricePeriodTextDecoration ? `text-decoration: ${pricePeriodTextDecoration};` : ""}
					${pricePeriodLetterSpacing.Desktop ? `letter-spacing: ${pricePeriodLetterSpacing.Desktop}${pricePeriodLetterSpacingUnits.Desktop};` : ""}
					${pricePeriodLineHeight.Desktop ? `line-height: ${pricePeriodLineHeight.Desktop}${pricePeriodLineHeightUnits.Desktop};` : ""}
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-price-wrapper .price-period:hover {
					${pricePeriodHoverColor ? `color: ${pricePeriodHoverColor};` : ''}
				}

				.fb-pricing-wrapper.${blockId} .fb-pricing-title {
					${pricingTitleColor ? `color: ${pricingTitleColor};` : ''}
					${pricingTitleFontFamily ? `font-family: ${pricingTitleFontFamily};` : ''}
					${pricingTitleFontSize.Desktop ? `font-size: ${pricingTitleFontSize.Desktop}${pricingTitleFontSizeUnits.Desktop};` : ''}
					${pricingTitleFontWeight ? `font-weight: ${pricingTitleFontWeight};` : ''}
					${pricingTitleFontStyle ? `font-style: ${pricingTitleFontStyle};` : ''}
					${pricingTitleTextTransform ? `text-transform: ${pricingTitleTextTransform};` : ''}
					${pricingTitleTextDecoration ? `text-decoration: ${pricingTitleTextDecoration};` : ''}
					${pricingTitleLetterSpacing.Desktop ? `letter-spacing: ${pricingTitleLetterSpacing.Desktop}${pricingTitleLetterSpacingUnits.Desktop};` : ''}
					${pricingTitleLineHeight.Desktop ? `line-height: ${pricingTitleLineHeight.Desktop}${pricingTitleLineHeightUnits.Desktop};` : ''}
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-title:hover {
					${pricingTitleHoverColor ? `color: ${pricingTitleHoverColor};` : ''}
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-subtitle {
					${pricingSubtitleColor ? `color: ${pricingSubtitleColor};` : ''}
					${pricingSubtitleFontFamily ? `font-family: ${pricingSubtitleFontFamily};` : ''}
					${pricingSubtitleFontSize.Desktop ? `font-size: ${pricingSubtitleFontSize.Desktop}${pricingSubtitleFontSizeUnits.Desktop};` : ''}
					${pricingSubtitleFontWeight ? `font-weight: ${pricingSubtitleFontWeight};` : ''}
					${pricingSubtitleFontStyle ? `font-style: ${pricingSubtitleFontStyle};` : ''}
					${pricingSubtitleTextTransform ? `text-transform: ${pricingSubtitleTextTransform};` : ''}
					${pricingSubtitleTextDecoration ? `text-decoration: ${pricingSubtitleTextDecoration};` : ''}
					${pricingSubtitleLetterSpacing.Desktop ? `letter-spacing: ${pricingSubtitleLetterSpacing.Desktop}${pricingSubtitleLetterSpacingUnits.Desktop};` : ''}
					${pricingSubtitleLineHeight.Desktop ? `line-height: ${pricingSubtitleLineHeight.Desktop}${pricingSubtitleLineHeightUnits.Desktop};` : ''}
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-subtitle:hover {
					${pricingSubtitleHoverColor ? `color: ${pricingSubtitleHoverColor};` : ''}
				}

				.fb-pricing-wrapper.${blockId} .fb-pricing-feature-item {
					justify-content: ${priceFeatureAlignment === 'left' ? 'flex-start' : priceFeatureAlignment === 'center' ? 'center' : priceFeatureAlignment === 'right' ? 'flex-end' : 'center'};
				}

				.fb-pricing-wrapper.${blockId} .fb-pricing-feature-icon-inner svg {
					width: ${priceFeatureIconSize.Desktop}${priceFeatureIconSizeUnits.Desktop};
					height: ${priceFeatureIconSize.Desktop}${priceFeatureIconSizeUnits.Desktop};
					fill: ${priceFeatureIconColor};
					transition: fill 0.3s ease;
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-feature-icon-inner:hover svg {
					fill: ${priceFeatureIconHoverColor};
				}

				.fb-pricing-wrapper.${blockId} .fb-pricing-feature-text {
					${pricingfeatureTitleColor ? `color: ${pricingfeatureTitleColor};` : ''}
					${pricingfeatureTitleFontFamily ? `font-family: ${pricingfeatureTitleFontFamily};` : ''}
					${pricingfeatureTitleFontSize.Desktop ? `font-size: ${pricingfeatureTitleFontSize.Desktop}${pricingfeatureTitleFontSizeUnits.Desktop};` : ''}
					${pricingfeatureTitleFontWeight ? `font-weight: ${pricingfeatureTitleFontWeight};` : ''}
					${pricingfeatureTitleFontStyle ? `font-style: ${pricingfeatureTitleFontStyle};` : ''}
					${pricingfeatureTitleTextTransform ? `text-transform: ${pricingfeatureTitleTextTransform};` : ''}
					${pricingfeatureTitleTextDecoration ? `text-decoration: ${pricingfeatureTitleTextDecoration};` : ''}
					${pricingfeatureTitleLetterSpacing.Desktop ? `letter-spacing: ${pricingfeatureTitleLetterSpacing.Desktop}${pricingfeatureTitleLetterSpacingUnits.Desktop};` : ''}
					${pricingfeatureTitleLineHeight.Desktop ? `line-height: ${pricingfeatureTitleLineHeight.Desktop}${pricingfeatureTitleLineHeightUnits.Desktop};` : ''}
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-feature-text:hover {
					${pricingfeatureTitleHoverColor ? `color: ${pricingfeatureTitleHoverColor};` : ''}
				}


				.fb-pricing-wrapper.${blockId} .fb-pricing-footer-wrapper {
					justify-content: ${priceButtonAlignment === 'left' ? 'flex-start' : priceButtonAlignment === 'center' ? 'center' : priceButtonAlignment === 'right' ? 'flex-end' : 'center'};
				}

				.fb-pricing-wrapper.${blockId} .fb-pricing-button {
					width: ${priceButtonWidth.Desktop ? `${priceButtonWidth.Desktop}${priceButtonWidthUnits.Desktop}` : 'auto'};
					${priceButtonFontFamily ? `font-family: ${priceButtonFontFamily};` : ''}
					${priceButtonFontSize.Desktop ? `font-size: ${priceButtonFontSize.Desktop}${priceButtonFontSizeUnits.Desktop};` : ''}
					${priceButtonFontWeight ? `font-weight: ${priceButtonFontWeight};` : ''}
					${priceButtonFontStyle ? `font-style: ${priceButtonFontStyle};` : ''}
					${priceButtonTextTransform ? `text-transform: ${priceButtonTextTransform};` : ''}
					${priceButtonTextDecoration ? `text-decoration: ${priceButtonTextDecoration};` : ''}
					${priceButtonLetterSpacing.Desktop ? `letter-spacing: ${priceButtonLetterSpacing.Desktop}${priceButtonLetterSpacingUnits.Desktop};` : ''}
					${priceButtonLineHeight.Desktop ? `line-height: ${priceButtonLineHeight.Desktop}${priceButtonLineHeightUnits.Desktop};` : ''}
					${priceButtonColor ? `color: ${priceButtonColor};` : ''}
					${priceButtonBgColor ? `background-color: ${priceButtonBgColor};` : ''}
					${priceButtonDesktopPaddingValue ? `padding: ${priceButtonDesktopPaddingValue};` : ''}
					${priceButtonDesktopMarginValue ? `margin: ${priceButtonDesktopMarginValue};` : ''}
					${priceButtonBorder ? `border: ${priceButtonBorder};` : ''}
					${priceButtonBorderColor ? `border-color: ${priceButtonBorderColor};` : ''}
					${priceButtonDesktopBorderWidthValue ? `border-width: ${priceButtonDesktopBorderWidthValue};` : ''}
					${priceButtonDesktopBorderRadiusWidthValue ? `border-radius: ${priceButtonDesktopBorderRadiusWidthValue};` : ''}
					transition: color 0.3s ease, background-color 0.3s ease;
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-button:hover {
					${priceButtonHoverColor ? `color: ${priceButtonHoverColor};` : ''}
					${priceButtonBgHoverColor ? `background-color: ${priceButtonBgHoverColor};` : ''}
					${priceButtonBorderHoverColor ? `border-color: ${priceButtonBorderHoverColor};` : ''}
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-button-icon svg {
					width: ${priceButtonIconSize.Desktop}${priceButtonIconSizeUnits.Desktop};
					height: ${priceButtonIconSize.Desktop}${priceButtonIconSizeUnits.Desktop};
					fill: ${priceButtonIconColor};
					transition: fill 0.3s ease;
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-button-icon:hover svg {
					fill: ${priceButtonIconHoverColor};
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-ribbon {
					${priceRibbonBgColor ? `background-color: ${priceRibbonBgColor};` : ''}
					${priceRibbonColor ? `color: ${priceRibbonColor};` : ''}
					font-size: ${priceRibbonFontSize.Desktop ? `${priceRibbonFontSize.Desktop}${priceRibbonFontSizeUnits.Desktop}` : ''};
					top: ${priceRibbonTop.Desktop ? `${priceRibbonTop.Desktop}${priceRibbonTopUnits.Desktop}` : ''};
					width: ${priceRibbonWidth.Desktop ? `${priceRibbonWidth.Desktop}${priceRibbonWidthUnits.Desktop}` : ''};
					padding: ${priceRibbonpadding.Desktop ? `${priceRibbonpadding.Desktop}${priceRibbonpaddingUnits.Desktop}` : ''};
					transition: background-color 0.3s ease, color 0.3s ease;
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-ribbon:hover {
					${priceRibbonBgHoverColor ? `background-color: ${priceRibbonBgHoverColor};` : ''}
					${priceRibbonHoverColor ? `color: ${priceRibbonHoverColor};` : ''}
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-ribbon-left {
					left: ${priceRibbonLeft.Desktop ? `${priceRibbonLeft.Desktop}${priceRibbonLeftUnits.Desktop}` : ''};
				}
				.fb-pricing-wrapper.${blockId} .fb-pricing-ribbon-right {
					right: ${priceRibbonRight.Desktop ? `${priceRibbonRight.Desktop}${priceRibbonRightUnits.Desktop}` : ''};
				}

				@media only screen and (max-width: 1024px) {
					.fb-pricing-wrapper.${blockId} .fb-pricing-header {
						${headerTabletPadding ? `padding: ${headerTabletPadding};` : ''}
						${headerTabletBorderWidth ? `border-width: ${headerTabletBorderWidth};` : ''}
						${headerTabletBorderRadiusWidth ? `border-radius: ${headerTabletBorderRadiusWidth};` : ''}
					}
					.fb-pricing-wrapper.${blockId} .fb-pricing-icon {
						width: ${priceIconBgSize.Tablet}${priceIconBgSizeUnits.Tablet};
						height: ${priceIconBgSize.Tablet}${priceIconBgSizeUnits.Tablet};
						${priceIconTabletBorderWidthValue ? `border-width: ${priceIconTabletBorderWidthValue};` : ''}
						${priceIconTabletBorderRadiusWidthValue ? `border-radius: ${priceIconTabletBorderRadiusWidthValue};` : ''}
					}
					.fb-pricing-wrapper.${blockId} .fb-pricing-icon svg {
						width: ${priceIconSize.Tablet}${priceIconSizeUnits.Tablet};
						height: ${priceIconSize.Tablet}${priceIconSizeUnits.Tablet};
					}
					.fb-pricing-wrapper.${blockId} .fb-pricing-button {
						${priceButtonTabletPaddingValue ? `padding: ${priceButtonTabletPaddingValue};` : ''}
						${priceButtonTabletMarginValue ? `margin: ${priceButtonTabletMarginValue};` : ''}
						${priceButtonTabletBorderWidthValue ? `border-width: ${priceButtonTabletBorderWidthValue};` : ''}
						${priceButtonTabletBorderRadiusWidthValue ? `border-radius: ${priceButtonTabletBorderRadiusWidthValue};` : ''}
					}
					.fb-pricing-wrapper.${blockId} .fb-pricing-button-icon svg {
						width: ${priceButtonIconSize.Tablet}${priceButtonIconSizeUnits.Tablet};
						height: ${priceButtonIconSize.Tablet}${priceButtonIconSizeUnits.Tablet};
					}
					.fb-pricing-wrapper.${blockId} .fb-pricing-ribbon {
						font-size: ${priceRibbonFontSize.Tablet ? `${priceRibbonFontSize.Tablet}${priceRibbonFontSizeUnits.Tablet}` : ''};
						top: ${priceRibbonTop.Tablet ? `${priceRibbonTop.Tablet}${priceRibbonTopUnits.Tablet}` : ''};
						width: ${priceRibbonWidth.Tablet ? `${priceRibbonWidth.Tablet}${priceRibbonWidthUnits.Tablet}` : ''};
						padding: ${priceRibbonpadding.Tablet ? `${priceRibbonpadding.Tablet}${priceRibbonpaddingUnits.Tablet}` : ''};
					}
					.fb-pricing-wrapper.${blockId} .fb-pricing-ribbon-left {
						left: ${priceRibbonLeft.Tablet ? `${priceRibbonLeft.Tablet}${priceRibbonLeftUnits.Tablet}` : ''};
					}
					.fb-pricing-wrapper.${blockId} .fb-pricing-ribbon-right {
						right: ${priceRibbonRight.Tablet ? `${priceRibbonRight.Tablet}${priceRibbonRightUnits.Tablet}` : ''};
					}
				}

				@media only screen and (max-width: 767px) {
					.fb-pricing-wrapper.${blockId} .fb-pricing-header {
						${headerMobilePadding ? `padding: ${headerMobilePadding};` : ''}
						${headerMobileBorderWidth ? `border-width: ${headerMobileBorderWidth};` : ''}
						${headerMobileBorderRadiusWidth ? `border-radius: ${headerMobileBorderRadiusWidth};` : ''}
					}
					.fb-pricing-wrapper.${blockId} .fb-pricing-icon {
						width: ${priceIconBgSize.Mobile}${priceIconBgSizeUnits.Mobile};
						height: ${priceIconBgSize.Mobile}${priceIconBgSizeUnits.Mobile};
						${priceIconMobileBorderWidthValue ? `border-width: ${priceIconMobileBorderWidthValue};` : ''}
						${priceIconMobileBorderRadiusWidthValue ? `border-radius: ${priceIconMobileBorderRadiusWidthValue};` : ''}
					}
					.fb-pricing-wrapper.${blockId} .fb-pricing-icon svg {
						width: ${priceIconSize.Mobile}${priceIconSizeUnits.Mobile};
						height: ${priceIconSize.Mobile}${priceIconSizeUnits.Mobile};
					}
					.fb-pricing-wrapper.${blockId} .fb-pricing-button {
						${priceButtonMobilePaddingValue ? `padding: ${priceButtonMobilePaddingValue};` : ''}
						${priceButtonMobileMarginValue ? `margin: ${priceButtonMobileMarginValue};` : ''}
						${priceButtonMobileBorderWidthValue ? `border-width: ${priceButtonMobileBorderWidthValue};` : ''}
						${priceButtonMobileBorderRadiusWidthValue ? `border-radius: ${priceButtonMobileBorderRadiusWidthValue};` : ''}
					}
					.fb-pricing-wrapper.${blockId} .fb-pricing-button-icon svg {
						width: ${priceButtonIconSize.Mobile}${priceButtonIconSizeUnits.Mobile};
						height: ${priceButtonIconSize.Mobile}${priceButtonIconSizeUnits.Mobile};
					}
					.fb-pricing-wrapper.${blockId} .fb-pricing-ribbon {
						font-size: ${priceRibbonFontSize.Mobile ? `${priceRibbonFontSize.Mobile}${priceRibbonFontSizeUnits.Mobile}` : ''};
						top: ${priceRibbonTop.Mobile ? `${priceRibbonTop.Mobile}${priceRibbonTopUnits.Mobile}` : ''};
						width: ${priceRibbonWidth.Mobile ? `${priceRibbonWidth.Mobile}${priceRibbonWidthUnits.Mobile}` : ''};
						padding: ${priceRibbonpadding.Mobile ? `${priceRibbonpadding.Mobile}${priceRibbonpaddingUnits.Mobile}` : ''};
					}
					.fb-pricing-wrapper.${blockId} .fb-pricing-ribbon-left {
						left: ${priceRibbonLeft.Mobile ? `${priceRibbonLeft.Mobile}${priceRibbonLeftUnits.Mobile}` : ''};
					}
					.fb-pricing-wrapper.${blockId} .fb-pricing-ribbon-right {
						right: ${priceRibbonRight.Mobile ? `${priceRibbonRight.Mobile}${priceRibbonRightUnits.Mobile}` : ''};
					}
				}
			`}
			</style>
        <div {...blockProps} id={blockId}>
            <div className={`fb-pricing-wrapper ${blockId}`}>
                <div className="fb-pricing-ribbon-wrapper">
                    {priceRibbonSwitcher && (
                        <div className={`fb-pricing-ribbon fb-pricing-ribbon-${priceRibbonPosition}`}>
                            <span>{priceRibbonText}</span>
                        </div>
                    )}
                </div>
                <div className="fb-pricing-header">
                    <div className="fb-pricing-icon-wrapper">
                        {pricingIconAlign === 'icon' && (
                            <div className="fb-pricing-icon">{renderSVG(pricingIcon)}</div>
                        )}
                    </div>
                    <div className="fb-pricing-price-wrapper">
                        <span className={`fb-pricing-normal-price ${salePriceSwitcher ? 'line-through' : ''}`}>
                            <span className="price-currency">{priceCurrencyPosition === 'left' ? priceCurrency : ''}</span>
                            {normalPrice}
                            <span className="price-currency">{priceCurrencyPosition === 'right' ? priceCurrency : ''}</span>
                            
                            {!salePriceSwitcher && (
                                <span className="price-period">{pricePeriodSeparator}{pricePeriod}</span>
                            )}
                        </span>
                        {salePriceSwitcher && (
                            <span className="fb-pricing-sale-price">
                                <span className="price-currency">{priceCurrencyPosition === 'left' ? priceCurrency : ''}</span>
                                {salePrice}
                                <span className="price-currency">{priceCurrencyPosition === 'right' ? priceCurrency : ''}</span>
                                <span className="price-period">{pricePeriodSeparator}{pricePeriod}</span>
                            </span>
                        )}
                    </div>
                    <div className="fb-pricing-title-wrapper">
                        <RichText.Content
                            tagName="h2"
                            className="fb-pricing-title"
                            value={pricingTitle}
                        />
                        {pricingSubTitleSwitcher && (
                            <RichText.Content
                                tagName="span"
                                className="fb-pricing-subtitle"
                                value={pricingSubTitle}
                            />
                        )}
                    </div>
                </div>
                <div className="fb-pricing-content">
                    <div className="fb-pricing-features-wrapper">
                        {!priceHideFeaturesSwitcher && (
                            <ul className="fb-pricing-features-list">
                                {priceFeatureItems.map((item, key) => (
                                    <li className="fb-pricing-feature-item" key={key}>
                                        {priceFeatureIconSwitcher && item.FeatureIconAlign !== 'none' && (
                                            <div className="fb-pricing-feature-icon">
                                                <span className="fb-pricing-feature-icon-inner">
                                                    {item.FeatureIcon ? renderSVG(item.FeatureIcon) : ''}
                                                </span>
                                            </div>
                                        )}
                                        <RichText.Content
                                            tagName="span"
                                            className="fb-pricing-feature-text"
                                            value={item.Title}
                                        />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
                <div className="fb-pricing-footer-wrapper">
                    <div className="fb-pricing-button-wrapper">
                        {priceButtonSwitcher && (
                        <a
                            className={`fb-pricing-button fb-button-icon-${priceButtonIconPosition}`}
                            href={priceButtonUrl}
                            target={priceButtonTargetUrl ? "_blank" : undefined}
                            rel={priceButtonTargetUrl ? "noopener noreferrer" : undefined}
                        >
                            {priceButtonIconPosition === 'left' && priceButtonIconAlign === 'icon' && (
                            <div className="fb-pricing-button-icon">
                                {renderSVG(priceButtonIcon)}
                            </div>
                            )}
                            <RichText.Content
                            tagName="span"
                            value={priceButtonText}
                            className="fb-button-text"
                            />
                            {priceButtonIconPosition === 'right' && priceButtonIconAlign === 'icon' && (
                            <div className="fb-pricing-button-icon">
                                {renderSVG(priceButtonIcon)}
                            </div>
                            )}
                        </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
