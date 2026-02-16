/**
 * News Ticker Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateNewsTickerStyle = (attributes) => {
    const {
		blockID,
		// deviceType,
		blockStyle,
		newsTickerIconAlignment,
		showArrows,
		showTime,
		/** Global Style */
		newsTickerGlobalZIndex,
		newsTickerOverflow,
		newsTickerGlobalPaddingUnits,
		newsTickerGlobalPaddingDesktop,
		newsTickerGlobalPaddingTablet,
		newsTickerGlobalPaddingMobile,
		newsTickerGlobalPaddingLink,

		newsTickerGlobalMarginUnits,
		newsTickerGlobalMarginDesktop,
		newsTickerGlobalMarginTablet,
		newsTickerGlobalMarginMobile,
		newsTickerGlobalMarginLink,

		/** Start Global Background Color */
		newsTickerGlobalBgColorSwitcher,

		newsTickerGlobalNormalBackgroundType,
		newsTickerGlobalNormalClassicColor,
		newsTickerGlobalNormalGradientColor,
		newsTickerGlobalNormalCustomGradientSwitcher,
		newsTickerGlobalNormalCustomGradientInputValue,

		newsTickerGlobalNormalBackgroundImageUrl,
		newsTickerGlobalNormalBackgroundImageAlt,
		newsTickerGlobalNormalBackgroundImageID,
		newsTickerGlobalNormalBackgroundImagePosition,
		newsTickerGlobalNormalBackgroundImageAttachment,
		newsTickerGlobalNormalBackgroundImageRepeat,
		newsTickerGlobalNormalBackgroundImageSize,

		newsTickerGlobalHoverBackgroundType,
		newsTickerGlobalHoverClassicColor,
		newsTickerGlobalHoverGradientColor,
		newsTickerGlobalHoverCustomGradientSwitcher,
		newsTickerGlobalHoverCustomGradientInputValue,

		newsTickerGlobalHoverBackgroundImageUrl,
		newsTickerGlobalHoverBackgroundImageAlt,
		newsTickerGlobalHoverBackgroundImageID,
		newsTickerGlobalHoverBackgroundImagePosition,
		newsTickerGlobalHoverBackgroundImageAttachment,
		newsTickerGlobalHoverBackgroundImageRepeat,
		newsTickerGlobalHoverBackgroundImageSize,
		/** End Global Background Color */

		newsTickerGlobalBorder,
		newsTickerGlobalBorderColorSwitcher,
		newsTickerGlobalBorderColor,
		newsTickerGlobalBorderHoverColor,

		newsTickerGlobalBorderUnits,
		newsTickerGlobalBorderDesktop,
		newsTickerGlobalBorderTablet,
		newsTickerGlobalBorderMobile,
		newsTickerGlobalBorderLink,

		newsTickerGlobalBorderRadiusUnits,
		newsTickerGlobalBorderRadiusDesktop,
		newsTickerGlobalBorderRadiusTablet,
		newsTickerGlobalBorderRadiusMobile,
		newsTickerGlobalBorderRadiusLink,

		newsTickerGlobalBoxShadowSwitcher,
		newsTickerGlobalBoxShadowValues,
		newsTickerGlobalBoxShadowCssValue,
		newsTickerGlobalBoxShadowHoverValues,
		newsTickerGlobalBoxShadowHoverCssValue,
		/** End Global Style */

		newsTickerDesktopSwitcher,
		newsTickerTabletSwitcher,
		newsTickerMobileSwitcher,

		newsTickerGlobalWraperCustomCSS,
		newsTickerGlobalWraperID,
		newsTickerGlobalWraperClass,

		// Position
		newsTickerPositionType,
		newsTickerHZOrientationType,
		newsTickerVROrientationType,
		newsTickerHZLeftOffset,
		newsTickerHZLeftOffsetUnits,
		newsTickerHZRightOffset,
		newsTickerHZRightOffsetUnits,
		newsTickerVRTopOffset,
		newsTickerVRTopOffsetUnits,
		newsTickerVRBottomOffset,
		newsTickerVRBottomOffsetUnits,
		contentType,
		tickerLabel,
		tickerLabelIcon,
		iconSize,
		iconSizeUnits,

		// Label Container Styling
		labelContainerPaddingUnits,
		labelContainerPaddingDesktop,
		labelContainerPaddingTablet,
		labelContainerPaddingMobile,
		labelContainerPaddingLink,

		labelContainerMarginUnits,
		labelContainerMarginDesktop,
		labelContainerMarginTablet,
		labelContainerMarginMobile,
		labelContainerMarginLink,

		labelContainerBorder,
		labelContainerBorderColorSwitcher,
		labelContainerBorderColor,
		labelContainerBorderHoverColor,

		labelContainerBorderUnits,
		labelContainerBorderDesktop,
		labelContainerBorderTablet,
		labelContainerBorderMobile,
		labelContainerBorderLink,

		labelContainerBorderRadiusUnits,
		labelContainerBorderRadiusDesktop,
		labelContainerBorderRadiusTablet,
		labelContainerBorderRadiusMobile,
		labelContainerBorderRadiusLink,

		labelContainerBgColorSwitcher,
		labelContainerNormalBackgroundType,
		labelContainerNormalClassicColor,
		labelContainerNormalGradientColor,
		labelContainerNormalCustomGradientSwitcher,
		labelContainerNormalCustomGradientInputValue,

		labelContainerNormalBackgroundImageUrl,
		labelContainerNormalBackgroundImageAlt,
		labelContainerNormalBackgroundImageID,
		labelContainerNormalBackgroundImagePosition,
		labelContainerNormalBackgroundImageAttachment,
		labelContainerNormalBackgroundImageRepeat,
		labelContainerNormalBackgroundImageSize,

		labelContainerHoverBackgroundType,
		labelContainerHoverClassicColor,
		labelContainerHoverGradientColor,
		labelContainerHoverCustomGradientSwitcher,
		labelContainerHoverCustomGradientInputValue,

		labelContainerHoverBackgroundImageUrl,
		labelContainerHoverBackgroundImageAlt,
		labelContainerHoverBackgroundImageID,
		labelContainerHoverBackgroundImagePosition,
		labelContainerHoverBackgroundImageAttachment,
		labelContainerHoverBackgroundImageRepeat,
		labelContainerHoverBackgroundImageSize,
		labelIconSwitcher,

        // Label Container Padding
        labelIconPaddingUnits,
        labelIconPaddingDesktop,
        labelIconPaddingTablet,
        labelIconPaddingMobile,
        labelIconPaddingLink,

        // Label Container Margin
        labelIconMarginUnits,
        labelIconMarginDesktop,
        labelIconMarginTablet,
        labelIconMarginMobile,
        labelIconMarginLink,

        // Label Container Border
        labelIconBorder,
        labelIconBorderColorSwitcher,
        labelIconBorderColor,
        labelIconBorderHoverColor,
        labelIconBorderUnits,
        labelIconBorderDesktop,
        labelIconBorderTablet,
        labelIconBorderMobile,
        labelIconBorderLink,

        // Label Container Border Radius
        labelIconBorderRadiusUnits,
        labelIconBorderRadiusDesktop,
        labelIconBorderRadiusTablet,
        labelIconBorderRadiusMobile,
        labelIconBorderRadiusLink,

        // Label Container Background Color
        labelIconBgColorSwitcher,
        labelIconNormalBackgroundType,
        labelIconNormalClassicColor,
        labelIconNormalGradientColor,
        labelIconNormalCustomGradientSwitcher,
        labelIconNormalCustomGradientInputValue,
        labelIconNormalBackgroundImageUrl,
        labelIconNormalBackgroundImageAlt,
        labelIconNormalBackgroundImageID,
        labelIconNormalBackgroundImagePosition,
        labelIconNormalBackgroundImageAttachment,
        labelIconNormalBackgroundImageRepeat,
        labelIconNormalBackgroundImageSize,

        labelIconHoverBackgroundType,
        labelIconHoverClassicColor,
        labelIconHoverGradientColor,
        labelIconHoverCustomGradientSwitcher,
        labelIconHoverCustomGradientInputValue,
        labelIconHoverBackgroundImageUrl,
        labelIconHoverBackgroundImageAlt,
        labelIconHoverBackgroundImageID,
        labelIconHoverBackgroundImagePosition,
        labelIconHoverBackgroundImageAttachment,
        labelIconHoverBackgroundImageRepeat,
        labelIconHoverBackgroundImageSize,
        labelIconColorSwitcher,
        labelIconColor,
        labelIconHoverColor,
        tickerLabelTypographyData,
        tickerLabelTypoSwitcher,
        tickerLabelTypoType,
        tickerLabelTypoOption,
        tickerLabelFontFamily,
        tickerLabelFontSize,
        tickerLabelFontSizeUnits,
        tickerLabelFontWeight,
        tickerLabelFontStyle,
        tickerLabelTextTransform,
        tickerLabelTextDecoration,
        tickerLabelLetterSpacing,
        tickerLabelLetterSpacingUnits,
        tickerLabelLineHeight,
        tickerLabelLineHeightUnits,
		// ticker timer
		timerPosition,
		tickerTimerTypographyData,
		tickerTimerTypoSwitcher,
		tickerTimerTypoType,
		tickerTimerTypoOption,
		tickerTimerFontFamily,
		tickerTimerFontSize,
		tickerTimerFontSizeUnits,
		tickerTimerFontWeight,
		tickerTimerFontStyle,
		tickerTimerTextTransform,
		tickerTimerTextDecoration,
		tickerTimerLetterSpacing,
		tickerTimerLetterSpacingUnits,
		tickerTimerLineHeight,
		tickerTimerLineHeightUnits,
		// Padding
		tickerTimerPaddingUnits,
		tickerTimerPaddingDesktop,
		tickerTimerPaddingTablet,
		tickerTimerPaddingMobile,
		tickerTimerPaddingLink,
	
		// Margin
		tickerTimerMarginUnits,
		tickerTimerMarginDesktop,
		tickerTimerMarginTablet,
		tickerTimerMarginMobile,
		tickerTimerMarginLink,
	
		// Border
		tickerTimerBorder,
		tickerTimerBorderColorSwitcher,
		tickerTimerBorderColor,
		tickerTimerBorderHoverColor,
		tickerTimerBorderUnits,
		tickerTimerBorderDesktop,
		tickerTimerBorderTablet,
		tickerTimerBorderMobile,
		tickerTimerBorderLink,
	
		// Border Radius
		tickerTimerBorderRadiusUnits,
		tickerTimerBorderRadiusDesktop,
		tickerTimerBorderRadiusTablet,
		tickerTimerBorderRadiusMobile,
		tickerTimerBorderRadiusLink,
	
		// Background
		tickerTimerBgColorSwitcher,
		tickerTimerNormalBackgroundType,
		tickerTimerNormalClassicColor,
		tickerTimerNormalGradientColor,
		tickerTimerNormalCustomGradientSwitcher,
		tickerTimerNormalCustomGradientInputValue,
		tickerTimerNormalBackgroundImageUrl,
		tickerTimerNormalBackgroundImageAlt,
		tickerTimerNormalBackgroundImageID,
		tickerTimerNormalBackgroundImagePosition,
		tickerTimerNormalBackgroundImageAttachment,
		tickerTimerNormalBackgroundImageRepeat,
		tickerTimerNormalBackgroundImageSize,
		tickerTimerHoverBackgroundType,
		tickerTimerHoverClassicColor,
		tickerTimerHoverGradientColor,
		tickerTimerHoverCustomGradientSwitcher,
		tickerTimerHoverCustomGradientInputValue,
		tickerTimerHoverBackgroundImageUrl,
		tickerTimerHoverBackgroundImageAlt,
		tickerTimerHoverBackgroundImageID,
		tickerTimerHoverBackgroundImagePosition,
		tickerTimerHoverBackgroundImageAttachment,
		tickerTimerHoverBackgroundImageRepeat,
		tickerTimerHoverBackgroundImageSize,
		tickerTimerColorSwitcher,
		tickerTimerColor,
		tickerTimerHoverColor,
		newsTickerPresetStyle,
		labelTextColorSwitcher,
		labelTextColor,
		labelTextHoverColor,
		navigationPosition,
		labelPosition,
		navigationIconColorSwitcher,
		navigationIconColor,
		navigationIconHoverColor,
		showAutoplayButton
	} = attributes;

    const globalDesktopPadding = `${newsTickerGlobalPaddingDesktop?.top}${newsTickerGlobalPaddingUnits?.Desktop} ${newsTickerGlobalPaddingDesktop?.right}${newsTickerGlobalPaddingUnits?.Desktop} ${newsTickerGlobalPaddingDesktop?.bottom}${newsTickerGlobalPaddingUnits?.Desktop} ${newsTickerGlobalPaddingDesktop?.left}${newsTickerGlobalPaddingUnits?.Desktop}`;
	const globalTabletPadding = `${newsTickerGlobalPaddingTablet?.top}${newsTickerGlobalPaddingUnits?.Tablet} ${newsTickerGlobalPaddingTablet?.right}${newsTickerGlobalPaddingUnits?.Tablet} ${newsTickerGlobalPaddingTablet?.bottom}${newsTickerGlobalPaddingUnits?.Tablet} ${newsTickerGlobalPaddingTablet?.left}${newsTickerGlobalPaddingUnits?.Tablet}`;
	const globalMobilePadding = `${newsTickerGlobalPaddingMobile?.top}${newsTickerGlobalPaddingUnits?.Mobile} ${newsTickerGlobalPaddingMobile?.right}${newsTickerGlobalPaddingUnits?.Mobile} ${newsTickerGlobalPaddingMobile?.bottom}${newsTickerGlobalPaddingUnits?.Mobile} ${newsTickerGlobalPaddingMobile?.left}${newsTickerGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${newsTickerGlobalMarginDesktop?.top}${newsTickerGlobalMarginUnits?.Desktop} ${newsTickerGlobalMarginDesktop?.right}${newsTickerGlobalMarginUnits?.Desktop} ${newsTickerGlobalMarginDesktop?.bottom}${newsTickerGlobalMarginUnits?.Desktop} ${newsTickerGlobalMarginDesktop?.left}${newsTickerGlobalMarginUnits?.Desktop}`;
	const globalTabletMargin = `${newsTickerGlobalMarginTablet?.top}${newsTickerGlobalMarginUnits?.Tablet} ${newsTickerGlobalMarginTablet?.right}${newsTickerGlobalMarginUnits?.Tablet} ${newsTickerGlobalMarginTablet?.bottom}${newsTickerGlobalMarginUnits?.Tablet} ${newsTickerGlobalMarginTablet?.left}${newsTickerGlobalMarginUnits?.Tablet}`;
	const globalMobileMargin = `${newsTickerGlobalMarginMobile?.top}${newsTickerGlobalMarginUnits?.Mobile} ${newsTickerGlobalMarginMobile?.right}${newsTickerGlobalMarginUnits?.Mobile} ${newsTickerGlobalMarginMobile?.bottom}${newsTickerGlobalMarginUnits?.Mobile} ${newsTickerGlobalMarginMobile?.left}${newsTickerGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${newsTickerGlobalBorderDesktop?.top}${newsTickerGlobalBorderUnits?.Desktop} ${newsTickerGlobalBorderDesktop?.right}${newsTickerGlobalBorderUnits?.Desktop} ${newsTickerGlobalBorderDesktop?.bottom}${newsTickerGlobalBorderUnits?.Desktop} ${newsTickerGlobalBorderDesktop?.left}${newsTickerGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${newsTickerGlobalBorderTablet?.top}${newsTickerGlobalBorderUnits?.Tablet} ${newsTickerGlobalBorderTablet?.right}${newsTickerGlobalBorderUnits?.Tablet} ${newsTickerGlobalBorderTablet?.bottom}${newsTickerGlobalBorderUnits?.Tablet} ${newsTickerGlobalBorderTablet?.left}${newsTickerGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${newsTickerGlobalBorderMobile?.top}${newsTickerGlobalBorderUnits?.Mobile} ${newsTickerGlobalBorderMobile?.right}${newsTickerGlobalBorderUnits?.Mobile} ${newsTickerGlobalBorderMobile?.bottom}${newsTickerGlobalBorderUnits?.Mobile} ${newsTickerGlobalBorderMobile?.left}${newsTickerGlobalBorderUnits?.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${newsTickerGlobalBorderRadiusDesktop?.top}${newsTickerGlobalBorderRadiusUnits?.Desktop} ${newsTickerGlobalBorderRadiusDesktop?.right}${newsTickerGlobalBorderRadiusUnits?.Desktop} ${newsTickerGlobalBorderRadiusDesktop?.bottom}${newsTickerGlobalBorderRadiusUnits?.Desktop} ${newsTickerGlobalBorderRadiusDesktop?.left}${newsTickerGlobalBorderRadiusUnits?.Desktop}`;
	const globalTabletBorderRadiusWidth = `${newsTickerGlobalBorderRadiusTablet?.top}${newsTickerGlobalBorderRadiusUnits?.Tablet} ${newsTickerGlobalBorderRadiusTablet?.right}${newsTickerGlobalBorderRadiusUnits?.Tablet} ${newsTickerGlobalBorderRadiusTablet?.bottom}${newsTickerGlobalBorderRadiusUnits?.Tablet} ${newsTickerGlobalBorderRadiusTablet?.left}${newsTickerGlobalBorderRadiusUnits?.Tablet}`;
	const globalMobileBorderRadiusWidth = `${newsTickerGlobalBorderRadiusMobile?.top}${newsTickerGlobalBorderRadiusUnits?.Mobile} ${newsTickerGlobalBorderRadiusMobile?.right}${newsTickerGlobalBorderRadiusUnits?.Mobile} ${newsTickerGlobalBorderRadiusMobile?.bottom}${newsTickerGlobalBorderRadiusUnits?.Mobile} ${newsTickerGlobalBorderRadiusMobile?.left}${newsTickerGlobalBorderRadiusUnits?.Mobile}`;

    const labelContainerDesktopPadding = `${labelContainerPaddingDesktop?.top}${labelContainerPaddingUnits?.Desktop} ${labelContainerPaddingDesktop?.right}${labelContainerPaddingUnits?.Desktop} ${labelContainerPaddingDesktop?.bottom}${labelContainerPaddingUnits?.Desktop} ${labelContainerPaddingDesktop?.left}${labelContainerPaddingUnits?.Desktop}`;
	const labelContainerTabletPadding = `${labelContainerPaddingTablet?.top}${labelContainerPaddingUnits?.Tablet} ${labelContainerPaddingTablet?.right}${labelContainerPaddingUnits?.Tablet} ${labelContainerPaddingTablet?.bottom}${labelContainerPaddingUnits?.Tablet} ${labelContainerPaddingTablet?.left}${labelContainerPaddingUnits?.Tablet}`;
	const labelContainerMobilePadding = `${labelContainerPaddingMobile?.top}${labelContainerPaddingUnits?.Mobile} ${labelContainerPaddingMobile?.right}${labelContainerPaddingUnits?.Mobile} ${labelContainerPaddingMobile?.bottom}${labelContainerPaddingUnits?.Mobile} ${labelContainerPaddingMobile?.left}${labelContainerPaddingUnits?.Mobile}`;

    const labelContainerDesktopMargin = `${labelContainerMarginDesktop?.top}${labelContainerMarginUnits?.Desktop} ${labelContainerMarginDesktop?.right}${labelContainerMarginUnits?.Desktop} ${labelContainerMarginDesktop?.bottom}${labelContainerMarginUnits?.Desktop} ${labelContainerMarginDesktop?.left}${labelContainerMarginUnits?.Desktop}`;
	const labelContainerTabletMargin = `${labelContainerMarginTablet?.top}${labelContainerMarginUnits?.Tablet} ${labelContainerMarginTablet?.right}${labelContainerMarginUnits?.Tablet} ${labelContainerMarginTablet?.bottom}${labelContainerMarginUnits?.Tablet} ${labelContainerMarginTablet?.left}${labelContainerMarginUnits?.Tablet}`;
	const labelContainerMobileMargin = `${labelContainerMarginMobile?.top}${labelContainerMarginUnits?.Mobile} ${labelContainerMarginMobile?.right}${labelContainerMarginUnits?.Mobile} ${labelContainerMarginMobile?.bottom}${labelContainerMarginUnits?.Mobile} ${labelContainerMarginMobile?.left}${labelContainerMarginUnits?.Mobile}`;

    const labelContainerDesktopBorderWidth = `${labelContainerBorderDesktop?.top}${labelContainerBorderUnits?.Desktop} ${labelContainerBorderDesktop?.right}${labelContainerBorderUnits?.Desktop} ${labelContainerBorderDesktop?.bottom}${labelContainerBorderUnits?.Desktop} ${labelContainerBorderDesktop?.left}${labelContainerBorderUnits?.Desktop}`;
	const labelContainerTabletBorderWidth = `${labelContainerBorderTablet?.top}${labelContainerBorderUnits?.Tablet} ${labelContainerBorderTablet?.right}${labelContainerBorderUnits?.Tablet} ${labelContainerBorderTablet?.bottom}${labelContainerBorderUnits?.Tablet} ${labelContainerBorderTablet?.left}${labelContainerBorderUnits?.Tablet}`;
	const labelContainerMobileBorderWidth = `${labelContainerBorderMobile?.top}${labelContainerBorderUnits?.Mobile} ${labelContainerBorderMobile?.right}${labelContainerBorderUnits?.Mobile} ${labelContainerBorderMobile?.bottom}${labelContainerBorderUnits?.Mobile} ${labelContainerBorderMobile?.left}${labelContainerBorderUnits?.Mobile}`;

    const labelContainerDesktopBorderRadiusWidth = `${labelContainerBorderRadiusDesktop?.top}${labelContainerBorderRadiusUnits?.Desktop} ${labelContainerBorderRadiusDesktop?.right}${labelContainerBorderRadiusUnits?.Desktop} ${labelContainerBorderRadiusDesktop?.bottom}${labelContainerBorderRadiusUnits?.Desktop} ${labelContainerBorderRadiusDesktop?.left}${labelContainerBorderRadiusUnits?.Desktop}`;
	const labelContainerTabletBorderRadiusWidth = `${labelContainerBorderRadiusTablet?.top}${labelContainerBorderRadiusUnits?.Tablet} ${labelContainerBorderRadiusTablet?.right}${labelContainerBorderRadiusUnits?.Tablet} ${labelContainerBorderRadiusTablet?.bottom}${labelContainerBorderRadiusUnits?.Tablet} ${labelContainerBorderRadiusTablet?.left}${labelContainerBorderRadiusUnits?.Tablet}`;
	const labelContainerMobileBorderRadiusWidth = `${labelContainerBorderRadiusMobile?.top}${labelContainerBorderRadiusUnits?.Mobile} ${labelContainerBorderRadiusMobile?.right}${labelContainerBorderRadiusUnits?.Mobile} ${labelContainerBorderRadiusMobile?.bottom}${labelContainerBorderRadiusUnits?.Mobile} ${labelContainerBorderRadiusMobile?.left}${labelContainerBorderRadiusUnits?.Mobile}`;

    const labelIconDesktopPadding = `${labelIconPaddingDesktop?.top}${labelIconPaddingUnits?.Desktop} ${labelIconPaddingDesktop?.right}${labelIconPaddingUnits?.Desktop} ${labelIconPaddingDesktop?.bottom}${labelIconPaddingUnits?.Desktop} ${labelIconPaddingDesktop?.left}${labelIconPaddingUnits?.Desktop}`;
	const labelIconTabletPadding = `${labelIconPaddingTablet?.top}${labelIconPaddingUnits?.Tablet} ${labelIconPaddingTablet?.right}${labelIconPaddingUnits?.Tablet} ${labelIconPaddingTablet?.bottom}${labelIconPaddingUnits?.Tablet} ${labelIconPaddingTablet?.left}${labelIconPaddingUnits?.Tablet}`;
	const labelIconMobilePadding = `${labelIconPaddingMobile?.top}${labelIconPaddingUnits?.Mobile} ${labelIconPaddingMobile?.right}${labelIconPaddingUnits?.Mobile} ${labelIconPaddingMobile?.bottom}${labelIconPaddingUnits?.Mobile} ${labelIconPaddingMobile?.left}${labelIconPaddingUnits?.Mobile}`;

    const labelIconDesktopMargin = `${labelIconMarginDesktop?.top}${labelIconMarginUnits?.Desktop} ${labelIconMarginDesktop?.right}${labelIconMarginUnits?.Desktop} ${labelIconMarginDesktop?.bottom}${labelIconMarginUnits?.Desktop} ${labelIconMarginDesktop?.left}${labelIconMarginUnits?.Desktop}`;
	const labelIconTabletMargin = `${labelIconMarginTablet?.top}${labelIconMarginUnits?.Tablet} ${labelIconMarginTablet?.right}${labelIconMarginUnits?.Tablet} ${labelIconMarginTablet?.bottom}${labelIconMarginUnits?.Tablet} ${labelIconMarginTablet?.left}${labelIconMarginUnits?.Tablet}`;
	const labelIconMobileMargin = `${labelIconMarginMobile?.top}${labelIconMarginUnits?.Mobile} ${labelIconMarginMobile?.right}${labelIconMarginUnits?.Mobile} ${labelIconMarginMobile?.bottom}${labelIconMarginUnits?.Mobile} ${labelIconMarginMobile?.left}${labelIconMarginUnits?.Mobile}`;

    const labelIconDesktopBorderWidth = `${labelIconBorderDesktop?.top}${labelIconBorderUnits?.Desktop} ${labelIconBorderDesktop?.right}${labelIconBorderUnits?.Desktop} ${labelIconBorderDesktop?.bottom}${labelIconBorderUnits?.Desktop} ${labelIconBorderDesktop?.left}${labelIconBorderUnits?.Desktop}`;
	const labelIconTabletBorderWidth = `${labelIconBorderTablet?.top}${labelIconBorderUnits?.Tablet} ${labelIconBorderTablet?.right}${labelIconBorderUnits?.Tablet} ${labelIconBorderTablet?.bottom}${labelIconBorderUnits?.Tablet} ${labelIconBorderTablet?.left}${labelIconBorderUnits?.Tablet}`;
	const labelIconMobileBorderWidth = `${labelIconBorderMobile?.top}${labelIconBorderUnits?.Mobile} ${labelIconBorderMobile?.right}${labelIconBorderUnits?.Mobile} ${labelIconBorderMobile?.bottom}${labelIconBorderUnits?.Mobile} ${labelIconBorderMobile?.left}${labelIconBorderUnits?.Mobile}`;

    const labelIconDesktopBorderRadiusWidth = `${labelIconBorderRadiusDesktop?.top}${labelIconBorderRadiusUnits?.Desktop} ${labelIconBorderRadiusDesktop?.right}${labelIconBorderRadiusUnits?.Desktop} ${labelIconBorderRadiusDesktop?.bottom}${labelIconBorderRadiusUnits?.Desktop} ${labelIconBorderRadiusDesktop?.left}${labelIconBorderRadiusUnits?.Desktop}`;
	const labelIconTabletBorderRadiusWidth = `${labelIconBorderRadiusTablet?.top}${labelIconBorderRadiusUnits?.Tablet} ${labelIconBorderRadiusTablet?.right}${labelIconBorderRadiusUnits?.Tablet} ${labelIconBorderRadiusTablet?.bottom}${labelIconBorderRadiusUnits?.Tablet} ${labelIconBorderRadiusTablet?.left}${labelIconBorderRadiusUnits?.Tablet}`;
	const labelIconMobileBorderRadiusWidth = `${labelIconBorderRadiusMobile?.top}${labelIconBorderRadiusUnits?.Mobile} ${labelIconBorderRadiusMobile?.right}${labelIconBorderRadiusUnits?.Mobile} ${labelIconBorderRadiusMobile?.bottom}${labelIconBorderRadiusUnits?.Mobile} ${labelIconBorderRadiusMobile?.left}${labelIconBorderRadiusUnits?.Mobile}`;

    const tickerTimerDesktopPadding = `${tickerTimerPaddingDesktop?.top}${tickerTimerPaddingUnits?.Desktop} ${tickerTimerPaddingDesktop?.right}${tickerTimerPaddingUnits?.Desktop} ${tickerTimerPaddingDesktop?.bottom}${tickerTimerPaddingUnits?.Desktop} ${tickerTimerPaddingDesktop?.left}${tickerTimerPaddingUnits?.Desktop}`;
	const tickerTimerTabletPadding = `${tickerTimerPaddingTablet?.top}${tickerTimerPaddingUnits?.Tablet} ${tickerTimerPaddingTablet?.right}${tickerTimerPaddingUnits?.Tablet} ${tickerTimerPaddingTablet?.bottom}${tickerTimerPaddingUnits?.Tablet} ${tickerTimerPaddingTablet?.left}${tickerTimerPaddingUnits?.Tablet}`;
	const tickerTimerMobilePadding = `${tickerTimerPaddingMobile?.top}${tickerTimerPaddingUnits?.Mobile} ${tickerTimerPaddingMobile?.right}${tickerTimerPaddingUnits?.Mobile} ${tickerTimerPaddingMobile?.bottom}${tickerTimerPaddingUnits?.Mobile} ${tickerTimerPaddingMobile?.left}${tickerTimerPaddingUnits?.Mobile}`;

    const tickerTimerDesktopMargin = `${tickerTimerMarginDesktop?.top}${tickerTimerMarginUnits?.Desktop} ${tickerTimerMarginDesktop?.right}${tickerTimerMarginUnits?.Desktop} ${tickerTimerMarginDesktop?.bottom}${tickerTimerMarginUnits?.Desktop} ${tickerTimerMarginDesktop?.left}${tickerTimerMarginUnits?.Desktop}`;
	const tickerTimerTabletMargin = `${tickerTimerMarginTablet?.top}${tickerTimerMarginUnits?.Tablet} ${tickerTimerMarginTablet?.right}${tickerTimerMarginUnits?.Tablet} ${tickerTimerMarginTablet?.bottom}${tickerTimerMarginUnits?.Tablet} ${tickerTimerMarginTablet?.left}${tickerTimerMarginUnits?.Tablet}`;
	const tickerTimerMobileMargin = `${tickerTimerMarginMobile?.top}${tickerTimerMarginUnits?.Mobile} ${tickerTimerMarginMobile?.right}${tickerTimerMarginUnits?.Mobile} ${tickerTimerMarginMobile?.bottom}${tickerTimerMarginUnits?.Mobile} ${tickerTimerMarginMobile?.left}${tickerTimerMarginUnits?.Mobile}`;

    const tickerTimerDesktopBorderWidth = `${tickerTimerBorderDesktop?.top}${tickerTimerBorderUnits?.Desktop} ${tickerTimerBorderDesktop?.right}${tickerTimerBorderUnits?.Desktop} ${tickerTimerBorderDesktop?.bottom}${tickerTimerBorderUnits?.Desktop} ${tickerTimerBorderDesktop?.left}${tickerTimerBorderUnits?.Desktop}`;
	const tickerTimerTabletBorderWidth = `${tickerTimerBorderTablet?.top}${tickerTimerBorderUnits?.Tablet} ${tickerTimerBorderTablet?.right}${tickerTimerBorderUnits?.Tablet} ${tickerTimerBorderTablet?.bottom}${tickerTimerBorderUnits?.Tablet} ${tickerTimerBorderTablet?.left}${tickerTimerBorderUnits?.Tablet}`;
	const tickerTimerMobileBorderWidth = `${tickerTimerBorderMobile?.top}${tickerTimerBorderUnits?.Mobile} ${tickerTimerBorderMobile?.right}${tickerTimerBorderUnits?.Mobile} ${tickerTimerBorderMobile?.bottom}${tickerTimerBorderUnits?.Mobile} ${tickerTimerBorderMobile?.left}${tickerTimerBorderUnits?.Mobile}`;

    const tickerTimerDesktopBorderRadiusWidth = `${tickerTimerBorderRadiusDesktop?.top}${tickerTimerBorderRadiusUnits?.Desktop} ${tickerTimerBorderRadiusDesktop?.right}${tickerTimerBorderRadiusUnits?.Desktop} ${tickerTimerBorderRadiusDesktop?.bottom}${tickerTimerBorderRadiusUnits?.Desktop} ${tickerTimerBorderRadiusDesktop?.left}${tickerTimerBorderRadiusUnits?.Desktop}`;
    const tickerTimerTabletBorderRadiusWidth = `${tickerTimerBorderRadiusTablet?.top}${tickerTimerBorderRadiusUnits?.Tablet} ${tickerTimerBorderRadiusTablet?.right}${tickerTimerBorderRadiusUnits?.Tablet} ${tickerTimerBorderRadiusTablet?.bottom}${tickerTimerBorderRadiusUnits?.Tablet} ${tickerTimerBorderRadiusTablet?.left}${tickerTimerBorderRadiusUnits?.Tablet}`;
    const tickerTimerMobileBorderRadiusWidth = `${tickerTimerBorderRadiusMobile?.top}${tickerTimerBorderRadiusUnits?.Mobile} ${tickerTimerBorderRadiusMobile?.right}${tickerTimerBorderRadiusUnits?.Mobile} ${tickerTimerBorderRadiusMobile?.bottom}${tickerTimerBorderRadiusUnits?.Mobile} ${tickerTimerBorderRadiusMobile?.left}${tickerTimerBorderRadiusUnits?.Mobile}`;

    const newsTickerBlockStyle = `
        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner{
            ${newsTickerGlobalNormalBackgroundType === "gradient"
                ? `background: ${
                    newsTickerGlobalNormalCustomGradientSwitcher && newsTickerGlobalNormalCustomGradientInputValue
                        ? newsTickerGlobalNormalCustomGradientInputValue
                        : newsTickerGlobalNormalGradientColor
                };`
                : newsTickerGlobalNormalBackgroundImageUrl && newsTickerGlobalNormalBackgroundImageUrl !== "null"
                ? `
                    ${newsTickerGlobalNormalBackgroundImageUrl ? `background-image: url(${newsTickerGlobalNormalBackgroundImageUrl});` : ""}
                    ${newsTickerGlobalNormalBackgroundImagePosition ? `background-position: ${newsTickerGlobalNormalBackgroundImagePosition};` : ""}
                    ${newsTickerGlobalNormalBackgroundImageAttachment ? `background-attachment: ${newsTickerGlobalNormalBackgroundImageAttachment};` : ""}
                    ${newsTickerGlobalNormalBackgroundImageRepeat ? `background-repeat: ${newsTickerGlobalNormalBackgroundImageRepeat};` : ""}
                    ${newsTickerGlobalNormalBackgroundImageSize ? `background-size: ${newsTickerGlobalNormalBackgroundImageSize};` : ""}
                `
                : `${newsTickerGlobalNormalClassicColor ? `background: ${newsTickerGlobalNormalClassicColor};` : ""}`
            }
            ${globalDesktopPadding && newsTickerGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ""}
            ${globalDesktopMargin && newsTickerGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ""}
            ${newsTickerGlobalBorder ? `border: ${newsTickerGlobalBorder};` : ""}
            ${globalDesktopBorderWidth && newsTickerGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ""}
            ${globalDesktopBorderRadiusWidth && newsTickerGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ""}
            ${newsTickerGlobalBorderColor ? `border-color: ${newsTickerGlobalBorderColor};` : ""}
            ${newsTickerGlobalBoxShadowCssValue ? `box-shadow: ${newsTickerGlobalBoxShadowCssValue};` : ""}
            ${newsTickerPositionType === "default" ? `position: relative;` : ""}
            ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" ? `width: 100%;` : ""}
            ${newsTickerPositionType !== "default" ? `position: ${newsTickerPositionType};` : ""}
            ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerHZOrientationType === "left" && newsTickerHZLeftOffset?.Desktop !== undefined ? `left: ${newsTickerHZLeftOffset?.Desktop}${newsTickerHZLeftOffsetUnits?.Desktop};` : ""}
            ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerHZOrientationType === "right" && newsTickerHZRightOffset?.Desktop !== undefined ? `right: ${newsTickerHZRightOffset?.Desktop}${newsTickerHZRightOffsetUnits?.Desktop};` : ""}
            ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerVROrientationType === "top" && newsTickerVRTopOffset?.Desktop !== undefined ? `top: ${newsTickerVRTopOffset?.Desktop}${newsTickerVRTopOffsetUnits?.Desktop};` : ""}
            ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerVROrientationType === "bottom" && newsTickerVRBottomOffset?.Desktop !== undefined ? `bottom: ${newsTickerVRBottomOffset?.Desktop}${newsTickerVRBottomOffsetUnits?.Desktop};` : ""}
            ${newsTickerGlobalZIndex?.Desktop ? `z-index: ${newsTickerGlobalZIndex?.Desktop};` : ""}
            ${newsTickerOverflow !== "default" ? `overflow: ${newsTickerOverflow};` : ""}
            ${labelPosition === "right" ? "flex-direction: row-reverse;" : "flex-direction: row;"}
            transition: all .3s ease-in-out;
        }

        .fb-news-ticker-wrapper.${blockID}:hover .fb-news-ticker-inner{
            ${newsTickerGlobalHoverBackgroundType === "gradient"
                ? `background: ${
                    newsTickerGlobalHoverCustomGradientSwitcher && newsTickerGlobalHoverCustomGradientInputValue
                        ? newsTickerGlobalHoverCustomGradientInputValue
                        : newsTickerGlobalHoverGradientColor
                };`
                : newsTickerGlobalHoverBackgroundImageUrl && newsTickerGlobalHoverBackgroundImageUrl !== "null"
                ? `
                    ${newsTickerGlobalHoverBackgroundImageUrl ? `background-image: url(${newsTickerGlobalHoverBackgroundImageUrl});` : ""}
                    ${newsTickerGlobalHoverBackgroundImagePosition ? `background-position: ${newsTickerGlobalHoverBackgroundImagePosition};` : ""}
                    ${newsTickerGlobalHoverBackgroundImageAttachment ? `background-attachment: ${newsTickerGlobalHoverBackgroundImageAttachment};` : ""}
                    ${newsTickerGlobalHoverBackgroundImageRepeat ? `background-repeat: ${newsTickerGlobalHoverBackgroundImageRepeat};` : ""}
                    ${newsTickerGlobalHoverBackgroundImageSize ? `background-size: ${newsTickerGlobalHoverBackgroundImageSize};` : ""}
                `
                : `${newsTickerGlobalHoverClassicColor ? `background: ${newsTickerGlobalHoverClassicColor};` : ""}`
            }
            ${newsTickerGlobalBorderHoverColor ? `border-color: ${newsTickerGlobalBorderHoverColor};` : ""}
            ${newsTickerGlobalBoxShadowHoverCssValue ? `box-shadow: ${newsTickerGlobalBoxShadowHoverCssValue};` : ""}
        }

        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container {
            ${labelContainerNormalBackgroundType === "gradient"
                ? `background: ${
                    labelContainerNormalCustomGradientSwitcher && labelContainerNormalCustomGradientInputValue
                        ? labelContainerNormalCustomGradientInputValue
                        : labelContainerNormalGradientColor
                };`
                : labelContainerNormalBackgroundImageUrl && labelContainerNormalBackgroundImageUrl !== "null"
                ? `
                    ${labelContainerNormalBackgroundImageUrl ? `background-image: url(${labelContainerNormalBackgroundImageUrl});` : ""}
                    ${labelContainerNormalBackgroundImagePosition ? `background-position: ${labelContainerNormalBackgroundImagePosition};` : ""}
                    ${labelContainerNormalBackgroundImageAttachment ? `background-attachment: ${labelContainerNormalBackgroundImageAttachment};` : ""}
                    ${labelContainerNormalBackgroundImageRepeat ? `background-repeat: ${labelContainerNormalBackgroundImageRepeat};` : ""}
                    ${labelContainerNormalBackgroundImageSize ? `background-size: ${labelContainerNormalBackgroundImageSize};` : ""}
                `
                : `${labelContainerNormalClassicColor ? `background: ${labelContainerNormalClassicColor};` : ""}`
            }
            ${labelContainerDesktopPadding && labelContainerPaddingDesktop?.top ? `padding: ${labelContainerDesktopPadding};` : ""}
            ${labelContainerDesktopMargin && labelContainerMarginDesktop?.top ? `margin: ${labelContainerDesktopMargin};` : ""}
            ${labelContainerBorder ? `border: ${labelContainerBorder};` : ""}
            ${labelContainerDesktopBorderWidth && labelContainerBorderDesktop?.top ? `border-width: ${labelContainerDesktopBorderWidth};` : ""}
            ${labelContainerDesktopBorderRadiusWidth && labelContainerBorderRadiusDesktop?.top ? `border-radius: ${labelContainerDesktopBorderRadiusWidth};` : ""}
            ${labelContainerBorderColor ? `border-color: ${labelContainerBorderColor};` : ""}
            transition: all .3s ease-in-out;
        }

        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container:hover {
            ${labelContainerHoverBackgroundType === "gradient"
                ? `background: ${
                    labelContainerHoverCustomGradientSwitcher && labelContainerHoverCustomGradientInputValue
                        ? labelContainerHoverCustomGradientInputValue
                        : labelContainerHoverGradientColor
                };`
                : labelContainerHoverBackgroundImageUrl && labelContainerHoverBackgroundImageUrl !== "null"
                ? `
                    ${labelContainerHoverBackgroundImageUrl ? `background-image: url(${labelContainerHoverBackgroundImageUrl});` : ""}
                    ${labelContainerHoverBackgroundImagePosition ? `background-position: ${labelContainerHoverBackgroundImagePosition};` : ""}
                    ${labelContainerHoverBackgroundImageAttachment ? `background-attachment: ${labelContainerHoverBackgroundImageAttachment};` : ""}
                    ${labelContainerHoverBackgroundImageRepeat ? `background-repeat: ${labelContainerHoverBackgroundImageRepeat};` : ""}
                    ${labelContainerHoverBackgroundImageSize ? `background-size: ${labelContainerHoverBackgroundImageSize};` : ""}
                `
                : `${labelContainerHoverClassicColor ? `background: ${labelContainerHoverClassicColor};` : ""}`
            }
            ${labelContainerBorderHoverColor ? `border-color: ${labelContainerBorderHoverColor};` : ""}
        }

        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper{
            ${labelIconNormalBackgroundType === "gradient"
            ? `background: ${
            labelIconNormalCustomGradientSwitcher && labelIconNormalCustomGradientInputValue
            ? labelIconNormalCustomGradientInputValue
            : labelIconNormalGradientColor
            };`
            : labelIconNormalBackgroundImageUrl && labelIconNormalBackgroundImageUrl !== "null"
            ? `
            ${labelIconNormalBackgroundImageUrl ? `background-image: url(${labelIconNormalBackgroundImageUrl});` : ""}
            ${labelIconNormalBackgroundImagePosition ? `background-position: ${labelIconNormalBackgroundImagePosition};` :
            ""}
            ${labelIconNormalBackgroundImageAttachment ? `background-attachment:
            ${labelIconNormalBackgroundImageAttachment};` : ""}
            ${labelIconNormalBackgroundImageRepeat ? `background-repeat: ${labelIconNormalBackgroundImageRepeat};` : ""}
            ${labelIconNormalBackgroundImageSize ? `background-size: ${labelIconNormalBackgroundImageSize};` : ""}
            `
            : `${labelIconNormalClassicColor ? `background: ${labelIconNormalClassicColor};` : ""}`
            }
            ${labelIconDesktopPadding && labelIconPaddingDesktop?.top ? `padding: ${labelIconDesktopPadding};` : ""}
            ${labelIconDesktopMargin && labelIconMarginDesktop?.top ? `margin: ${labelIconDesktopMargin};` : ""}
            ${labelIconBorder ? `border: ${labelIconBorder};` : ""}
            ${labelIconDesktopBorderWidth && labelIconBorderDesktop?.top ? `border-width:
            ${labelIconDesktopBorderWidth};` : ""}
            ${labelIconDesktopBorderRadiusWidth && labelIconBorderRadiusDesktop?.top ? `border-radius:
            ${labelIconDesktopBorderRadiusWidth};` : ""}
            ${labelIconBorderColor ? `border-color: ${labelIconBorderColor};` : ""}
            transition: all .3s ease-in-out;
        }

        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper:hover{
            ${labelIconHoverBackgroundType === "gradient"
                ? `background: ${
                    labelIconHoverCustomGradientSwitcher && labelIconHoverCustomGradientInputValue
                        ? labelIconHoverCustomGradientInputValue
                        : labelIconHoverGradientColor
                };`
                : labelIconHoverBackgroundImageUrl && labelIconHoverBackgroundImageUrl !== "null"
                ? `
                    ${labelIconHoverBackgroundImageUrl ? `background-image: url(${labelIconHoverBackgroundImageUrl});` : ""}
                    ${labelIconHoverBackgroundImagePosition ? `background-position: ${labelIconHoverBackgroundImagePosition};` : ""}
                    ${labelIconHoverBackgroundImageAttachment ? `background-attachment: ${labelIconHoverBackgroundImageAttachment};` : ""}
                    ${labelIconHoverBackgroundImageRepeat ? `background-repeat: ${labelIconHoverBackgroundImageRepeat};` : ""}
                    ${labelIconHoverBackgroundImageSize ? `background-size: ${labelIconHoverBackgroundImageSize};` : ""}
                `
                : `${labelIconHoverClassicColor ? `background: ${labelIconHoverClassicColor};` : ""}`
            }
            ${labelIconBorderHoverColor ? `border-color: ${labelIconBorderHoverColor};` : ""}
        }

        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label span{
            ${tickerLabelTypoSwitcher?.fontFamily === true && tickerLabelTypographyData?.fontFamily ? `font-family: ${tickerLabelTypographyData?.fontFamily};` : ''}
            ${tickerLabelTypoSwitcher?.fontSize === true && tickerLabelTypographyData?.fontSize ? `font-size: ${tickerLabelTypographyData?.fontSize};` : ''}
            ${tickerLabelTypoSwitcher?.fontWeight === true && tickerLabelTypographyData?.fontWeight ? `font-weight: ${tickerLabelTypographyData?.fontWeight};` : ''}
            ${tickerLabelTypoSwitcher?.fontStyle === true && tickerLabelTypographyData?.fontStyle ? `font-style: ${tickerLabelTypographyData?.fontStyle};` : ''}
            ${tickerLabelTypoSwitcher?.textTransform === true && tickerLabelTypographyData?.textTransform ? `text-transform: ${tickerLabelTypographyData?.textTransform};` : ''}
            ${tickerLabelTypoSwitcher?.textDecoration === true && tickerLabelTypographyData?.textDecoration ? `text-decoration: ${tickerLabelTypographyData?.textDecoration};` : ''}
            ${tickerLabelTypoSwitcher?.letterSpacing === true && tickerLabelTypographyData?.letterSpacing ? `letter-spacing: ${tickerLabelTypographyData?.letterSpacing};` : ''}
            ${tickerLabelTypoSwitcher?.lineHeight === true && tickerLabelTypographyData?.lineHeight ? `line-height: ${tickerLabelTypographyData?.lineHeight};` : ''}

            ${tickerLabelTypoSwitcher?.fontFamily === false && tickerLabelFontFamily && tickerLabelFontFamily !== "Default" ? `font-family: ${tickerLabelFontFamily};` : ''}
            ${tickerLabelTypoSwitcher?.fontSize === false && tickerLabelFontSize?.Desktop && tickerLabelFontSizeUnits?.Desktop ? `font-size: ${tickerLabelFontSize?.Desktop}${tickerLabelFontSizeUnits?.Desktop};` : ''}
            ${tickerLabelTypoSwitcher?.fontWeight === false && tickerLabelFontWeight ? `font-weight: ${tickerLabelFontWeight};` : ''}
            ${tickerLabelTypoSwitcher?.fontStyle === false && tickerLabelFontStyle ? `font-style: ${tickerLabelFontStyle};` : ''}
            ${tickerLabelTypoSwitcher?.textTransform === false && tickerLabelTextTransform ? `text-transform: ${tickerLabelTextTransform};` : ''}
            ${tickerLabelTypoSwitcher?.textDecoration === false && tickerLabelTextDecoration ? `text-decoration: ${tickerLabelTextDecoration};` : ''}
            ${tickerLabelTypoSwitcher?.letterSpacing === false && tickerLabelLetterSpacing?.Desktop && tickerLabelLetterSpacingUnits?.Desktop ? `letter-spacing: ${tickerLabelLetterSpacing?.Desktop}${tickerLabelLetterSpacingUnits?.Desktop};` : ''}
            ${tickerLabelTypoSwitcher?.lineHeight === false && tickerLabelLineHeight?.Desktop && tickerLabelLineHeightUnits?.Desktop ? `line-height: ${tickerLabelLineHeight?.Desktop}${tickerLabelLineHeightUnits?.Desktop};` : ''}
            ${labelTextColor ? `color: ${labelTextColor};` : ""}
        }
        
        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label:hover span{
            ${labelTextHoverColor ? `color: ${labelTextHoverColor};` : ""}
        }
        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper svg {
            ${iconSize?.Desktop ? `width: ${iconSize?.Desktop}${iconSizeUnits?.Desktop};` : ""}
            ${iconSize?.Desktop ? `height: ${iconSize?.Desktop}${iconSizeUnits?.Desktop};` : ""}
            ${labelIconColor ? `fill: ${labelIconColor};` : ""}
        }

        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper:hover svg{
            ${labelIconHoverColor ? `fill: ${labelIconHoverColor};` : ""}
        }
        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-time{
            ${tickerTimerNormalBackgroundType === "gradient"
                ? `background: ${
                    tickerTimerNormalCustomGradientSwitcher && tickerTimerNormalCustomGradientInputValue
                        ? tickerTimerNormalCustomGradientInputValue
                        : tickerTimerNormalGradientColor
                };`
                : tickerTimerNormalBackgroundImageUrl && tickerTimerNormalBackgroundImageUrl !== "null"
                ? `
                    ${tickerTimerNormalBackgroundImageUrl ? `background-image: url(${tickerTimerNormalBackgroundImageUrl});` : ""}
                    ${tickerTimerNormalBackgroundImagePosition ? `background-position: ${tickerTimerNormalBackgroundImagePosition};` : ""}
                    ${tickerTimerNormalBackgroundImageAttachment ? `background-attachment: ${tickerTimerNormalBackgroundImageAttachment};` : ""}
                    ${tickerTimerNormalBackgroundImageRepeat ? `background-repeat: ${tickerTimerNormalBackgroundImageRepeat};` : ""}
                    ${tickerTimerNormalBackgroundImageSize ? `background-size: ${tickerTimerNormalBackgroundImageSize};` : ""}
                `
                : `${tickerTimerNormalClassicColor ? `background: ${tickerTimerNormalClassicColor};` : ""}`
            }
            ${tickerTimerDesktopPadding && tickerTimerPaddingDesktop?.top ? `padding: ${tickerTimerDesktopPadding};` : ""}
            ${tickerTimerDesktopMargin && tickerTimerMarginDesktop?.top ? `margin: ${tickerTimerDesktopMargin};` : ""}
            ${tickerTimerBorder ? `border: ${tickerTimerBorder};` : ""}
            ${tickerTimerDesktopBorderWidth && tickerTimerBorderDesktop?.top ? `border-width: ${tickerTimerDesktopBorderWidth};` : ""}
            ${tickerTimerDesktopBorderRadiusWidth && tickerTimerBorderRadiusDesktop?.top ? `border-radius: ${tickerTimerDesktopBorderRadiusWidth};` : ""}
            ${tickerTimerBorderColor ? `border-color: ${tickerTimerBorderColor};` : ""}
            transition: all .3s ease-in-out;
        }
        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-time:hover{
            ${tickerTimerHoverBackgroundType === "gradient"
                ? `background: ${
                    tickerTimerHoverCustomGradientSwitcher && tickerTimerHoverCustomGradientInputValue
                        ? tickerTimerHoverCustomGradientInputValue
                        : tickerTimerHoverGradientColor
                };`
                : tickerTimerHoverBackgroundImageUrl && tickerTimerHoverBackgroundImageUrl !== "null"
                ? `
                    ${tickerTimerHoverBackgroundImageUrl ? `background-image: url(${tickerTimerHoverBackgroundImageUrl});` : ""}
                    ${tickerTimerHoverBackgroundImagePosition ? `background-position: ${tickerTimerHoverBackgroundImagePosition};` : ""}
                    ${tickerTimerHoverBackgroundImageAttachment ? `background-attachment: ${tickerTimerHoverBackgroundImageAttachment};` : ""}
                    ${tickerTimerHoverBackgroundImageRepeat ? `background-repeat: ${tickerTimerHoverBackgroundImageRepeat};` : ""}
                    ${tickerTimerHoverBackgroundImageSize ? `background-size: ${tickerTimerHoverBackgroundImageSize};` : ""}
                `
                : `${tickerTimerHoverClassicColor ? `background: ${tickerTimerHoverClassicColor};` : ""}`
            }
            ${tickerTimerBorderHoverColor ? `border-color: ${tickerTimerBorderHoverColor};` : ""}
        }
        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-time span{
            ${tickerTimerTypoSwitcher?.fontFamily === true && tickerTimerTypographyData?.fontFamily ? `font-family: ${tickerTimerTypographyData?.fontFamily};` : ''}
            ${tickerTimerTypoSwitcher?.fontSize === true && tickerTimerTypographyData?.fontSize ? `font-size: ${tickerTimerTypographyData?.fontSize};` : ''}
            ${tickerTimerTypoSwitcher?.fontWeight === true && tickerTimerTypographyData?.fontWeight ? `font-weight: ${tickerTimerTypographyData?.fontWeight};` : ''}
            ${tickerTimerTypoSwitcher?.fontStyle === true && tickerTimerTypographyData?.fontStyle ? `font-style: ${tickerTimerTypographyData?.fontStyle};` : ''}
            ${tickerTimerTypoSwitcher?.textTransform === true && tickerTimerTypographyData?.textTransform ? `text-transform: ${tickerTimerTypographyData?.textTransform};` : ''}
            ${tickerTimerTypoSwitcher?.textDecoration === true && tickerTimerTypographyData?.textDecoration ? `text-decoration: ${tickerTimerTypographyData?.textDecoration};` : ''}
            ${tickerTimerTypoSwitcher?.letterSpacing === true && tickerTimerTypographyData?.letterSpacing ? `letter-spacing: ${tickerTimerTypographyData?.letterSpacing};` : ''}
            ${tickerTimerTypoSwitcher?.lineHeight === true && tickerTimerTypographyData?.lineHeight ? `line-height: ${tickerTimerTypographyData?.lineHeight};` : ''}

            ${tickerTimerTypoSwitcher?.fontFamily === false && tickerTimerFontFamily && tickerTimerFontFamily !== "Default" ? `font-family: ${tickerTimerFontFamily};` : ''}
            ${tickerTimerTypoSwitcher?.fontSize === false && tickerTimerFontSize?.Desktop && tickerTimerFontSizeUnits?.Desktop ? `font-size: ${tickerTimerFontSize?.Desktop}${tickerTimerFontSizeUnits?.Desktop};` : ''}
            ${tickerTimerTypoSwitcher?.fontWeight === false && tickerTimerFontWeight ? `font-weight: ${tickerTimerFontWeight};` : ''}
            ${tickerTimerTypoSwitcher?.fontStyle === false && tickerTimerFontStyle ? `font-style: ${tickerTimerFontStyle};` : ''}
            ${tickerTimerTypoSwitcher?.textTransform === false && tickerTimerTextTransform ? `text-transform: ${tickerTimerTextTransform};` : ''}
            ${tickerTimerTypoSwitcher?.textDecoration === false && tickerTimerTextDecoration ? `text-decoration: ${tickerTimerTextDecoration};` : ''}
            ${tickerTimerTypoSwitcher?.letterSpacing === false && tickerTimerLetterSpacing?.Desktop && tickerTimerLetterSpacingUnits?.Desktop ? `letter-spacing: ${tickerTimerLetterSpacing?.Desktop}${tickerTimerLetterSpacingUnits?.Desktop};` : ''}
            ${tickerTimerTypoSwitcher?.lineHeight === false && tickerTimerLineHeight?.Desktop && tickerTimerLineHeightUnits?.Desktop ? `line-height: ${tickerTimerLineHeight?.Desktop}${tickerTimerLineHeightUnits?.Desktop};` : ''}
            ${tickerTimerColor ? `color: ${tickerTimerColor};` : ""}
        }
        
        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-time:hover span{
            ${tickerTimerHoverColor ? `color: ${tickerTimerHoverColor};` : ""}
        }

        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-arrows {
            ${navigationPosition === "right" ? "right: 20px;" : "left: 20px;"}
        }
        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-arrows svg path{
            ${navigationIconColor ? `stroke: ${navigationIconColor};` : ""}
        }
        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-arrows .fb-news-ticker-pause-btn svg path{
            ${navigationIconColor ? `fill: ${navigationIconColor};` : ""}
        }
        .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-arrows:hover svg path{
            ${navigationIconHoverColor ? `stroke: ${navigationIconHoverColor};` : ""}
        }
        @media only screen and (max-width: 1024px) {
            .fb-news-ticker-wrapper.${blockID} {
                ${newsTickerPositionType !== "default" ? `position: ${newsTickerPositionType};` : ""}
                ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerHZOrientationType === "left" && newsTickerHZLeftOffset?.Tablet !== undefined ? `left: ${newsTickerHZLeftOffset?.Tablet}${newsTickerHZLeftOffsetUnits?.Tablet};` : ""}
                ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerHZOrientationType === "right" && newsTickerHZRightOffset?.Tablet !== undefined ? `right: ${newsTickerHZRightOffset?.Tablet}${newsTickerHZRightOffsetUnits?.Tablet};` : ""}
                ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerVROrientationType === "top" && newsTickerVRTopOffset?.Tablet !== undefined ? `top: ${newsTickerVRTopOffset?.Tablet}${newsTickerVRTopOffsetUnits?.Tablet};` : ""}
                ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerVROrientationType === "bottom" && newsTickerVRBottomOffset?.Tablet !== undefined ? `bottom: ${newsTickerVRBottomOffset?.Tablet}${newsTickerVRBottomOffsetUnits?.Tablet};` : ""}
                ${newsTickerGlobalZIndex?.Tablet ? `z-index: ${newsTickerGlobalZIndex?.Tablet};` : ""}
                ${globalTabletPadding && newsTickerGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ""}
                ${globalTabletMargin && newsTickerGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ""}
                ${globalTabletBorderWidth && newsTickerGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ""}
                ${globalTabletBorderRadiusWidth && newsTickerGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ""}
            }
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper{
                ${labelIconTabletPadding && labelIconPaddingTablet?.top ? `padding: ${labelIconTabletPadding};` : ""}
                ${labelIconTabletMargin && labelIconMarginTablet?.top ? `margin: ${labelIconTabletMargin};` : ""}
                ${labelIconTabletBorderWidth && labelIconBorderTablet?.top ? `border-width:
                ${labelIconTabletBorderWidth};` : ""}
                ${labelIconTabletBorderRadiusWidth && labelIconBorderRadiusTablet?.top ? `border-radius:
                ${labelIconTabletBorderRadiusWidth};` : ""}
            }
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container {
                ${labelContainerTabletPadding && labelContainerPaddingTablet?.top ? `padding: ${labelContainerTabletPadding};` : ""}
                ${labelContainerTabletMargin && labelContainerMarginTablet?.top ? `margin: ${labelContainerTabletMargin};` : ""}
                ${labelContainerTabletBorderWidth && labelContainerBorderTablet?.top ? `border-width: ${labelContainerTabletBorderWidth};` : ""}
                ${labelContainerTabletBorderRadiusWidth && labelContainerBorderRadiusTablet?.top ? `border-radius: ${labelContainerTabletBorderRadiusWidth};` : ""}
            }
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper svg {
                ${iconSize?.Tablet ? `width: ${iconSize?.Tablet}${iconSizeUnits?.Tablet};` : ""}
                ${iconSize?.Tablet ? `height: ${iconSize?.Tablet}${iconSizeUnits?.Tablet};` : ""}
            }
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-time{
                ${tickerTimerTabletPadding && tickerTimerPaddingTablet?.top ? `padding: ${tickerTimerTabletPadding};` : ""}
                ${tickerTimerTabletMargin && tickerTimerMarginTablet?.top ? `margin: ${tickerTimerTabletMargin};` : ""}
                ${tickerTimerTabletBorderWidth && tickerTimerBorderTablet?.top ? `border-width: ${tickerTimerTabletBorderWidth};` : ""}
                ${tickerTimerTabletBorderRadiusWidth && tickerTimerBorderRadiusTablet?.top ? `border-radius: ${tickerTimerTabletBorderRadiusWidth};` : ""}
            }
        }

        @media only screen and (max-width: 767px) {
            .fb-news-ticker-wrapper.${blockID} {
                ${newsTickerPositionType !== "default" ? `position: ${newsTickerPositionType};` : ""}
                ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerHZOrientationType === "left" && newsTickerHZLeftOffset?.Mobile !== undefined ? `left: ${newsTickerHZLeftOffset?.Mobile}${newsTickerHZLeftOffsetUnits?.Mobile};` : ""}
                ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerHZOrientationType === "right" && newsTickerHZRightOffset?.Mobile !== undefined ? `right: ${newsTickerHZRightOffset?.Mobile}${newsTickerHZRightOffsetUnits?.Mobile};` : ""}
                ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerVROrientationType === "top" && newsTickerVRTopOffset?.Mobile !== undefined ? `top: ${newsTickerVRTopOffset?.Mobile}${newsTickerVRTopOffsetUnits?.Mobile};` : ""}
                ${newsTickerPositionType !== "default" && newsTickerPositionType !== "relative" && newsTickerVROrientationType === "bottom" && newsTickerVRBottomOffset?.Mobile !== undefined ? `bottom: ${newsTickerVRBottomOffset?.Mobile}${newsTickerVRBottomOffsetUnits?.Mobile};` : ""}
                ${newsTickerGlobalZIndex?.Mobile ? `z-index: ${newsTickerGlobalZIndex?.Mobile};` : ""}
                ${globalMobilePadding && newsTickerGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ""}
                ${globalMobileMargin && newsTickerGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ""}
                ${globalMobileBorderWidth && newsTickerGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ""}
                ${globalMobileBorderRadiusWidth && newsTickerGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ""}
            }
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container {
                ${labelContainerMobilePadding && labelContainerPaddingMobile?.top ? `padding: ${labelContainerMobilePadding};` : ""}
                ${labelContainerMobileMargin && labelContainerMarginMobile?.top ? `margin: ${labelContainerMobileMargin};` : ""}
                ${labelContainerMobileBorderWidth && labelContainerBorderMobile?.top ? `border-width: ${labelContainerMobileBorderWidth};` : ""}
                ${labelContainerMobileBorderRadiusWidth && labelContainerBorderRadiusMobile?.top ? `border-radius: ${labelContainerMobileBorderRadiusWidth};` : ""}
            }
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper{
                ${labelIconMobilePadding && labelIconPaddingMobile?.top ? `padding: ${labelIconMobilePadding};` : ""}
                ${labelIconMobileMargin && labelIconMarginMobile?.top ? `margin: ${labelIconMobileMargin};` : ""}
                ${labelIconMobileBorderWidth && labelIconBorderMobile?.top ? `border-width:
                ${labelIconMobileBorderWidth};` : ""}
                ${labelIconMobileBorderRadiusWidth && labelIconBorderRadiusMobile?.top ? `border-radius:
                ${labelIconMobileBorderRadiusWidth};` : ""}
            }
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-label-container .fb-news-ticker-label-icon .fb-icon-wrapper svg {
                ${iconSize?.Mobile ? `width: ${iconSize?.Mobile}${iconSizeUnits?.Mobile};` : ""}
                ${iconSize?.Mobile ? `height: ${iconSize?.Mobile}${iconSizeUnits?.Mobile};` : ""}
            }
            .fb-news-ticker-wrapper.${blockID} .fb-news-ticker-inner .fb-news-ticker-time{
                ${tickerTimerMobilePadding && tickerTimerPaddingMobile?.top ? `padding: ${tickerTimerMobilePadding};` : ""} 
                ${tickerTimerMobileMargin && tickerTimerMarginMobile?.top ? `margin: ${tickerTimerMobileMargin};` : ""}
                ${tickerTimerMobileBorderWidth && tickerTimerBorderMobile?.top ? `border-width: ${tickerTimerMobileBorderWidth};` : ""}
                ${tickerTimerMobileBorderRadiusWidth && tickerTimerBorderRadiusMobile?.top ? `border-radius: ${tickerTimerMobileBorderRadiusWidth};` : ""}
            }

        }
    `;

    const customCss = getCustomCss(newsTickerGlobalWraperCustomCSS, `.${blockID}`);
    
    return `${newsTickerBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateNewsTickerStyle;