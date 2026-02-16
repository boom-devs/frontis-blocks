/**
 * Off Canvas Menu Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateOffCanvasStyle = (attributes) => {
    	const {
		blockID,
		blockStyle,
		selectedTemplate,
		menuPosition,
		offCanvasPanelWidth,
		offCanvasPanelWidthUnits,
		offCanvasPanelHeight,
		offCanvasPanelHeightUnits,
		offCanvasCustomCSS,
		menuType,
		hamburgerIcon,
		hamburgerText,
		closeMenuType,
		closeMenuIcon,
		closeMenuText,
		offCanvasPanelPaddingUnits,
		offCanvasPanelDesktopPadding,
		offCanvasPanelTabPadding,
		offCanvasPanelMobilePadding,
		offCanvasPanelPaddingLink,
		offCanvasPanelMarginUnits,
		offCanvasPanelDesktopMargin,
		offCanvasPanelTabMargin,
		offCanvasPanelMobileMargin,
		offCanvasPanelMarginLink,
		offCanvasPanelBorder,
		offCanvasPanelBorderColorSwitcher,
		offCanvasPanelBorderColor,
		offCanvasPanelBorderHoverColor,
		offCanvasPanelBorderUnits,
		offCanvasPanelDesktopBorderWidth,
		offCanvasPanelTabBorderWidth,
		offCanvasPanelMobileBorderWidth,
		offCanvasPanelBorderLink,
		offCanvasPanelBorderRadiusUnits,
		offCanvasPanelDesktopBorderRadiusWidth,
		offCanvasPanelTabBorderRadiusWidth,
		offCanvasPanelMobileBorderRadiusWidth,
		offCanvasPanelBorderRadiusLink,
		offCanvasPanelBoxShadowSwitcher,
		offCanvasPanelBoxShadowValues,
		offCanvasPanelBoxShadowCssValue,
		offCanvasPanelBoxShadowHoverValues,
		offCanvasPanelBoxShadowHoverCssValue,
		offCanvasPanelBgColorSwitcher,
		offCanvasPanelBgNormalBackgroundType,
		offCanvasPanelBgNormalClassicColor,
		offCanvasPanelBgNormalGradientColor,
		offCanvasPanelBgNormalCustomGradientSwitcher,
		offCanvasPanelBgNormalCustomGradientInputValue,
		offCanvasPanelBgNormalBackgroundImageUrl,
		offCanvasPanelBgNormalBackgroundImagePosition,
		offCanvasPanelBgNormalBackgroundImageAttachment,
		offCanvasPanelBgNormalBackgroundImageRepeat,
		offCanvasPanelBgNormalBackgroundImageSize,

		offCanvasPanelBgHoverBackgroundType,
		offCanvasPanelBgHoverClassicColor,
		offCanvasPanelBgHoverGradientColor,
		offCanvasPanelBgHoverCustomGradientSwitcher,
		offCanvasPanelBgHoverCustomGradientInputValue,
		offCanvasPanelBgHoverBackgroundImageUrl,
		offCanvasPanelBgHoverBackgroundImagePosition,
		offCanvasPanelBgHoverBackgroundImageAttachment,
		offCanvasPanelBgHoverBackgroundImageRepeat,
		offCanvasPanelBgHoverBackgroundImageSize,

		//Icon
		menuIconTypeSwitcher,
		offCanvasHamburgerIconWidth,
		offCanvasHamburgerIconWidthUnits,
		offCanvasHamburgerIconBgWidth,
		offCanvasHamburgerIconBgWidthUnits,
		offCanvashamburgerIconColorSwitcher,
		offCanvashamburgerIconColor,
		offCanvashamburgerIconHoverColor,
		offCanvashamburgerIconBgColorSwitcher,
		offCanvashamburgerIconBgColor,
		offCanvashamburgerIconBgHoverColor,
		offCanvashamburgerIconBorder,
		offCanvashamburgerIconBorderColorSwitcher,
		offCanvashamburgerIconBorderColor,
		offCanvashamburgerIconBorderHoverColor,
		offCanvashamburgerIconBorderUnits,
		offCanvashamburgerIconDesktopBorderWidth,
		offCanvashamburgerIconTabBorderWidth,
		offCanvashamburgerIconMobileBorderWidth,
		offCanvashamburgerIconBorderLink,
		offCanvashamburgerIconBorderRadiusUnits,
		offCanvashamburgerIconDesktopBorderRadiusWidth,
		offCanvashamburgerIconTabBorderRadiusWidth,
		offCanvashamburgerIconMobileBorderRadiusWidth,
		offCanvashamburgerIconBorderRadiusLink,
		offCanvasHamburgerIconPaddingUnits,
		offCanvasHamburgerIconDesktopPadding,
		offCanvasHamburgerIconTabletPadding,
		offCanvasHamburgerIconMobilePadding,
		offCanvasHamburgerIconPaddingLink,

		offCanvasHamburgerIconMarginUnits,
		offCanvasHamburgerIconDesktopMargin,
		offCanvasHamburgerIconTabletMargin,
		offCanvasHamburgerIconMobileMargin,
		offCanvasHamburgerIconMarginLink,
		offCanvasCloseIconWidth,
		offCanvasCloseIconWidthUnits,
		offCanvasCloseIconBgWidth,
		offCanvasCloseIconBgWidthUnits,
		offCanvasCloseIconColorSwitcher,
		offCanvasCloseIconColor,
		offCanvasCloseIconHoverColor,
		offCanvasCloseIconBgColorSwitcher,
		offCanvasCloseIconBgColor,
		offCanvasCloseIconBgHoverColor,
		offCanvasCloseIconBorder,
		offCanvasCloseIconBorderColorSwitcher,
		offCanvasCloseIconBorderColor,
		offCanvasCloseIconBorderHoverColor,
		offCanvasCloseIconBorderUnits,
		offCanvasCloseIconDesktopBorderWidth,
		offCanvasCloseIconTabBorderWidth,
		offCanvasCloseIconMobileBorderWidth,
		offCanvasCloseIconBorderLink,
		offCanvasCloseIconBorderRadiusUnits,
		offCanvasCloseIconDesktopBorderRadiusWidth,
		offCanvasCloseIconTabBorderRadiusWidth,
		offCanvasCloseIconMobileBorderRadiusWidth,
		offCanvasCloseIconBorderRadiusLink,
		offCanvasCloseIconPaddingUnits,
		offCanvasCloseIconDesktopPadding,
		offCanvasCloseIconTabletPadding,
		offCanvasCloseIconMobilePadding,
		offCanvasCloseIconPaddingLink,

		offCanvasCloseIconMarginUnits,
		offCanvasCloseIconDesktopMargin,
		offCanvasCloseIconTabletMargin,
		offCanvasCloseIconMobileMargin,
		offCanvasCloseIconMarginLink,
		offCanvasGlobalZIndex,
		offCanvasOverflow,
		offCanvasPositionType,
		offCanvasHZOrientationType,
		offCanvasVROrientationType,
		offCanvasHZLeftOffset,
		offCanvasHZLeftOffsetUnits,
		offCanvasHZRightOffset,
		offCanvasHZRightOffsetUnits,
		offCanvasVRTopOffset,
		offCanvasVRTopOffsetUnits,
		offCanvasVRBottomOffset,
		offCanvasVRBottomOffsetUnits,

		offCanvasGlobalWraperID,
		offCanvasGlobalWraperClass,

		offCanvasGlobalPaddingUnits,
		offCanvasGlobalPaddingDesktop,
		offCanvasGlobalPaddingTablet,
		offCanvasGlobalPaddingMobile,
		offCanvasGlobalPaddingLink,

		offCanvasGlobalMarginUnits,
		offCanvasGlobalMarginDesktop,
		offCanvasGlobalMarginTablet,
		offCanvasGlobalMarginMobile,
		offCanvasGlobalMarginLink,

		offCanvasGlobalBgColorSwitcher,
		offCanvasGlobalBgNormalBackgroundType,
		offCanvasGlobalBgNormalClassicColor,
		offCanvasGlobalBgNormalGradientColor,
		offCanvasGlobalBgNormalCustomGradientSwitcher,
		offCanvasGlobalBgNormalCustomGradientInputValue,

		offCanvasGlobalBgNormalBackgroundImageUrl,
		offCanvasGlobalBgNormalBackgroundImageAlt,
		offCanvasGlobalBgNormalBackgroundImageID,
		offCanvasGlobalBgNormalBackgroundImagePosition,
		offCanvasGlobalBgNormalBackgroundImageAttachment,
		offCanvasGlobalBgNormalBackgroundImageRepeat,
		offCanvasGlobalBgNormalBackgroundImageSize,

		offCanvasGlobalBgHoverBackgroundType,
		offCanvasGlobalBgHoverClassicColor,
		offCanvasGlobalBgHoverGradientColor,
		offCanvasGlobalBgHoverCustomGradientSwitcher,
		offCanvasGlobalBgHoverCustomGradientInputValue,

		offCanvasGlobalBgHoverBackgroundImageUrl,
		offCanvasGlobalBgHoverBackgroundImagePosition,
		offCanvasGlobalBgHoverBackgroundImageAttachment,
		offCanvasGlobalBgHoverBackgroundImageRepeat,
		offCanvasGlobalBgHoverBackgroundImageSize,

		offCanvasGlobalBorder,
		offCanvasGlobalBorderColorSwitcher,
		offCanvasGlobalBorderColor,
		offCanvasGlobalBorderHoverColor,
		offCanvasGlobalBorderUnits,
		offCanvasGlobalBorderDesktop,
		offCanvasGlobalBorderTablet,
		offCanvasGlobalBorderMobile,
		offCanvasGlobalBorderLink,

		offCanvasGlobalBorderRadiusUnits,
		offCanvasGlobalBorderRadiusDesktop,
		offCanvasGlobalBorderRadiusTablet,
		offCanvasGlobalBorderRadiusMobile,
		offCanvasGlobalBorderRadiusLink,

		offCanvasGlobalBoxShadowSwitcher,
		offCanvasGlobalBoxShadowValues,
		offCanvasGlobalBoxShadowCssValue,
		offCanvasGlobalBoxShadowHoverValues,
		offCanvasGlobalBoxShadowHoverCssValue,

		offCanvasDesktopSwitcher,
		offCanvasTabletSwitcher,
		offCanvasMobileSwitcher,
		menuTextTypeSwitcher,
		menuOpenerTextGlobalTypographyData,
		menuOpenerTextGlobalTypoSwitcher,
		menuOpenerTextGlobalTypoType,
		menuOpenerTextGlobalTypoOption,
		menuOpenerTextFontFamily,
		menuOpenerTextFontSize,
		menuOpenerTextFontSizeUnits,
		menuOpenerTextFontWeight,
		menuOpenerTextFontStyle,
		menuOpenerTextTextTransform,
		menuOpenerTextTextDecoration,
		menuOpenerTextLetterSpacing,
		menuOpenerTextLetterSpacingUnits,
		menuOpenerTextLineHeight,
		menuOpenerTextLineHeightUnits,
		menuOpenerTextColorSwitcher,
		menuOpenerTextColor,
		menuOpenerTextHoverColor,
		menuOpenerTextBgColorSwitcher,
		menuOpenerTextBgColor,
		menuOpenerTextBgHoverColor,
		menuOpenerTextGap,
		menuOpenerTextGapUnits,
		menuOpenerTextBorder,
		menuOpenerTextBorderColorSwitcher,
		menuOpenerTextBorderColor,
		menuOpenerTextBorderHoverColor,
		menuOpenerTextBorderUnits,
		menuOpenerTextDesktopBorder,
		menuOpenerTextTabletBorder,
		menuOpenerTextMobileBorder,
		menuOpenerTextBorderLink,
		menuOpenerTextBorderRadiusUnits,
		menuOpenerTextDesktopBorderRadius,
		menuOpenerTextTabBorderRadius,
		menuOpenerTextMobileBorderRadius,
		menuOpenerTextBorderRadiusLink,
		menuOpenerTextBoxShadowSwitcher,
		menuOpenerTextBoxShadowValues,
		menuOpenerTextBoxShadowCssValue,
		menuOpenerTextBoxShadowHoverValues,
		menuOpenerTextBoxShadowHoverCssValue,
		menuOpenerTextPaddingUnits,
		menuOpenerTextDesktopPadding,
		menuOpenerTextTabPadding,
		menuOpenerTextMobilePadding,
		menuOpenerTextPaddingLink,
		menuOpenerTextMarginUnits,
		menuOpenerTextDesktopMargin,
		menuOpenerTextTabMargin,
		menuOpenerTextMobileMargin,
		menuOpenerTextMarginLink,
		menuCloserTextGlobalTypographyData,
		menuCloserTextGlobalTypoSwitcher,
		menuCloserTextGlobalTypoType,
		menuCloserTextGlobalTypoOption,
		menuCloserTextFontFamily,
		menuCloserTextFontSize,
		menuCloserTextFontSizeUnits,
		menuCloserTextFontWeight,
		menuCloserTextFontStyle,
		menuCloserTextTextTransform,
		menuCloserTextTextDecoration,
		menuCloserTextLetterSpacing,
		menuCloserTextLetterSpacingUnits,
		menuCloserTextLineHeight,
		menuCloserTextLineHeightUnits,
		menuCloserTextColorSwitcher,
		menuCloserTextColor,
		menuCloserTextHoverColor,
		menuCloserTextBgColorSwitcher,
		menuCloserTextBgColor,
		menuCloserTextBgHoverColor,
		menuCloserTextGap,
		menuCloserTextGapUnits,
		menuCloserTextBorder,
		menuCloserTextBorderColorSwitcher,
		menuCloserTextBorderColor,
		menuCloserTextBorderHoverColor,
		menuCloserTextBorderUnits,
		menuCloserTextDesktopBorder,
		menuCloserTextTabletBorder,
		menuCloserTextMobileBorder,
		menuCloserTextBorderLink,
		menuCloserTextBorderRadiusUnits,
		menuCloserTextDesktopBorderRadius,
		menuCloserTextTabBorderRadius,
		menuCloserTextMobileBorderRadius,
		menuCloserTextBorderRadiusLink,
		menuCloserTextBoxShadowSwitcher,
		menuCloserTextBoxShadowValues,
		menuCloserTextBoxShadowCssValue,
		menuCloserTextBoxShadowHoverValues,
		menuCloserTextBoxShadowHoverCssValue,
		menuCloserTextPaddingUnits,
		menuCloserTextDesktopPadding,
		menuCloserTextTabPadding,
		menuCloserTextMobilePadding,
		menuCloserTextPaddingLink,
		menuCloserTextMarginUnits,
		menuCloserTextDesktopMargin,
		menuCloserTextTabMargin,
		menuCloserTextMobileMargin,
		menuCloserTextMarginLink,
		offCanvasOverlayBackgroundColorSwitcher,
		offCanvasOverlayBackgroundColor,
		offCanvasOverlayBackgroundHoverColor,
		offCanvasOverlayBackgroundGradientColor,
		offCanvasOverlayBackgroundHoverGradientColor,
		offCanvasOverlayBackgroundCustomGradientColorSwitcher,
		offCanvasOverlayBackgroundCustomGradientColor,
		offCanvasOverlayBackgroundHoverCustomGradientColorSwitcher,
		offCanvasOverlayBackgroundHoverCustomGradientColor,
		offCanvasOverlayBgColorType,
		offCanvasOverlayBgHoverColorType,
		offCanvasOverlayColorType,
		offCanvasOverlayHoverColorType,
		offCanvasOverlayHoverColor,
		offCanvasOverlayGradientColor,
		offCanvasOverlayHoverGradientColor,
		offCanvasOverlayCustomGradientColorSwitcher,
		offCanvasOverlayCustomGradientColor,
		offCanvasOverlayHoverCustomGradientColorSwitcher,
		offCanvasOverlayHoverCustomGradientColor,
		offCanvasOverlayOpacity,
		offCanvasOverlayOpacityUnits
	} = attributes;

    /** Default padding for each device */
	const offCanvasPanelDesktopPaddingStr = `${offCanvasPanelDesktopPadding?.top}${offCanvasPanelPaddingUnits?.Desktop} ${offCanvasPanelDesktopPadding?.right}${offCanvasPanelPaddingUnits?.Desktop} ${offCanvasPanelDesktopPadding?.bottom}${offCanvasPanelPaddingUnits?.Desktop} ${offCanvasPanelDesktopPadding?.left}${offCanvasPanelPaddingUnits?.Desktop}`;
	const offCanvasPanelTabletPaddingStr = `${offCanvasPanelTabPadding?.top}${offCanvasPanelPaddingUnits?.Tablet} ${offCanvasPanelTabPadding?.right}${offCanvasPanelPaddingUnits?.Tablet} ${offCanvasPanelTabPadding?.bottom}${offCanvasPanelPaddingUnits?.Tablet} ${offCanvasPanelTabPadding?.left}${offCanvasPanelPaddingUnits?.Tablet}`;
	const offCanvasPanelMobilePaddingStr = `${offCanvasPanelMobilePadding?.top}${offCanvasPanelPaddingUnits?.Mobile} ${offCanvasPanelMobilePadding?.right}${offCanvasPanelPaddingUnits?.Mobile} ${offCanvasPanelMobilePadding?.bottom}${offCanvasPanelPaddingUnits?.Mobile} ${offCanvasPanelMobilePadding?.left}${offCanvasPanelPaddingUnits?.Mobile}`;

    /** Default margin for each device */
	const offCanvasPanelDesktopMarginStr = `${offCanvasPanelDesktopMargin?.top}${offCanvasPanelMarginUnits?.Desktop} ${offCanvasPanelDesktopMargin?.right}${offCanvasPanelMarginUnits?.Desktop} ${offCanvasPanelDesktopMargin?.bottom}${offCanvasPanelMarginUnits?.Desktop} ${offCanvasPanelDesktopMargin?.left}${offCanvasPanelMarginUnits?.Desktop}`;
	const offCanvasPanelTabletMarginStr = `${offCanvasPanelTabMargin?.top}${offCanvasPanelMarginUnits?.Tablet} ${offCanvasPanelTabMargin?.right}${offCanvasPanelMarginUnits?.Tablet} ${offCanvasPanelTabMargin?.bottom}${offCanvasPanelMarginUnits?.Tablet} ${offCanvasPanelTabMargin?.left}${offCanvasPanelMarginUnits?.Tablet}`;
	const offCanvasPanelMobileMarginStr = `${offCanvasPanelMobileMargin?.top}${offCanvasPanelMarginUnits?.Mobile} ${offCanvasPanelMobileMargin?.right}${offCanvasPanelMarginUnits?.Mobile} ${offCanvasPanelMobileMargin?.bottom}${offCanvasPanelMarginUnits?.Mobile} ${offCanvasPanelMobileMargin?.left}${offCanvasPanelMarginUnits?.Mobile}`;

    /** Default border width for different devices */
	const offCanvasPanelDesktopBorderWidthStr = `${offCanvasPanelDesktopBorderWidth?.top}${offCanvasPanelBorderUnits?.Desktop} ${offCanvasPanelDesktopBorderWidth?.right}${offCanvasPanelBorderUnits?.Desktop} ${offCanvasPanelDesktopBorderWidth?.bottom}${offCanvasPanelBorderUnits?.Desktop} ${offCanvasPanelDesktopBorderWidth?.left}${offCanvasPanelBorderUnits?.Desktop}`;
	const offCanvasPanelTabletBorderWidthStr = `${offCanvasPanelTabBorderWidth?.top}${offCanvasPanelBorderUnits?.Tablet} ${offCanvasPanelTabBorderWidth?.right}${offCanvasPanelBorderUnits?.Tablet} ${offCanvasPanelTabBorderWidth?.bottom}${offCanvasPanelBorderUnits?.Tablet} ${offCanvasPanelTabBorderWidth?.left}${offCanvasPanelBorderUnits?.Tablet}`;
	const offCanvasPanelMobileBorderWidthStr = `${offCanvasPanelMobileBorderWidth?.top}${offCanvasPanelBorderUnits?.Mobile} ${offCanvasPanelMobileBorderWidth?.right}${offCanvasPanelBorderUnits?.Mobile} ${offCanvasPanelMobileBorderWidth?.bottom}${offCanvasPanelBorderUnits?.Mobile} ${offCanvasPanelMobileBorderWidth?.left}${offCanvasPanelBorderUnits?.Mobile}`;

    /** Default border radius for different devices */
	const offCanvasPanelDesktopBorderRadiusStr = `${offCanvasPanelDesktopBorderRadiusWidth?.top}${offCanvasPanelBorderRadiusUnits?.Desktop} ${offCanvasPanelDesktopBorderRadiusWidth?.right}${offCanvasPanelBorderRadiusUnits?.Desktop} ${offCanvasPanelDesktopBorderRadiusWidth?.bottom}${offCanvasPanelBorderRadiusUnits?.Desktop} ${offCanvasPanelDesktopBorderRadiusWidth?.left}${offCanvasPanelBorderRadiusUnits?.Desktop}`;
	const offCanvasPanelTabletBorderRadiusStr = `${offCanvasPanelTabBorderRadiusWidth?.top}${offCanvasPanelBorderRadiusUnits?.Tablet} ${offCanvasPanelTabBorderRadiusWidth?.right}${offCanvasPanelBorderRadiusUnits?.Tablet} ${offCanvasPanelTabBorderRadiusWidth?.bottom}${offCanvasPanelBorderRadiusUnits?.Tablet} ${offCanvasPanelTabBorderRadiusWidth?.left}${offCanvasPanelBorderRadiusUnits?.Tablet}`;
	const offCanvasPanelMobileBorderRadiusStr = `${offCanvasPanelMobileBorderRadiusWidth?.top}${offCanvasPanelBorderRadiusUnits?.Mobile} ${offCanvasPanelMobileBorderRadiusWidth?.right}${offCanvasPanelBorderRadiusUnits?.Mobile} ${offCanvasPanelMobileBorderRadiusWidth?.bottom}${offCanvasPanelBorderRadiusUnits?.Mobile} ${offCanvasPanelMobileBorderRadiusWidth?.left}${offCanvasPanelBorderRadiusUnits?.Mobile}`;

    /** Default border width for different devices */
	const offCanvashamburgerIconDesktopBorderWidthStr = `${offCanvashamburgerIconDesktopBorderWidth?.top}${offCanvashamburgerIconBorderUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderWidth?.right}${offCanvashamburgerIconBorderUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderWidth?.bottom}${offCanvashamburgerIconBorderUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderWidth?.left}${offCanvashamburgerIconBorderUnits?.Desktop}`;
	const offCanvashamburgerIconTabletBorderWidthStr = `${offCanvashamburgerIconTabBorderWidth?.top}${offCanvashamburgerIconBorderUnits?.Tablet} ${offCanvashamburgerIconTabBorderWidth?.right}${offCanvashamburgerIconBorderUnits?.Tablet} ${offCanvashamburgerIconTabBorderWidth?.bottom}${offCanvashamburgerIconBorderUnits?.Tablet} ${offCanvashamburgerIconTabBorderWidth?.left}${offCanvashamburgerIconBorderUnits?.Tablet}`;
	const offCanvashamburgerIconMobileBorderWidthStr = `${offCanvashamburgerIconMobileBorderWidth?.top}${offCanvashamburgerIconBorderUnits?.Mobile} ${offCanvashamburgerIconMobileBorderWidth?.right}${offCanvashamburgerIconBorderUnits?.Mobile} ${offCanvashamburgerIconMobileBorderWidth?.bottom}${offCanvashamburgerIconBorderUnits?.Mobile} ${offCanvashamburgerIconMobileBorderWidth?.left}${offCanvashamburgerIconBorderUnits?.Mobile}`;

    /** Default border radius for different devices */
	const offCanvashamburgerIconDesktopBorderRadiusStr = `${offCanvashamburgerIconDesktopBorderRadiusWidth?.top}${offCanvashamburgerIconBorderRadiusUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderRadiusWidth?.right}${offCanvashamburgerIconBorderRadiusUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderRadiusWidth?.bottom}${offCanvashamburgerIconBorderRadiusUnits?.Desktop} ${offCanvashamburgerIconDesktopBorderRadiusWidth?.left}${offCanvashamburgerIconBorderRadiusUnits?.Desktop}`;
	const offCanvashamburgerIconTabletBorderRadiusStr = `${offCanvashamburgerIconTabBorderRadiusWidth?.top}${offCanvashamburgerIconBorderRadiusUnits?.Tablet} ${offCanvashamburgerIconTabBorderRadiusWidth?.right}${offCanvashamburgerIconBorderRadiusUnits?.Tablet} ${offCanvashamburgerIconTabBorderRadiusWidth?.bottom}${offCanvashamburgerIconBorderRadiusUnits?.Tablet} ${offCanvashamburgerIconTabBorderRadiusWidth?.left}${offCanvashamburgerIconBorderRadiusUnits?.Tablet}`;
	const offCanvashamburgerIconMobileBorderRadiusStr = `${offCanvashamburgerIconMobileBorderRadiusWidth?.top}${offCanvashamburgerIconBorderRadiusUnits?.Mobile} ${offCanvashamburgerIconMobileBorderRadiusWidth?.right}${offCanvashamburgerIconBorderRadiusUnits?.Mobile} ${offCanvashamburgerIconMobileBorderRadiusWidth?.bottom}${offCanvashamburgerIconBorderRadiusUnits?.Mobile} ${offCanvashamburgerIconMobileBorderRadiusWidth?.left}${offCanvashamburgerIconBorderRadiusUnits?.Mobile}`;

    /** Default padding for offCanvasHamburgerIcon */
	const offCanvasHamburgerIconDesktopPaddingWidth = `${offCanvasHamburgerIconDesktopPadding?.top}${offCanvasHamburgerIconPaddingUnits?.Desktop} ${offCanvasHamburgerIconDesktopPadding?.right}${offCanvasHamburgerIconPaddingUnits?.Desktop} ${offCanvasHamburgerIconDesktopPadding?.bottom}${offCanvasHamburgerIconPaddingUnits?.Desktop} ${offCanvasHamburgerIconDesktopPadding?.left}${offCanvasHamburgerIconPaddingUnits?.Desktop}`;
	const offCanvasHamburgerIconTabletPaddingWidth = `${offCanvasHamburgerIconTabletPadding?.top}${offCanvasHamburgerIconPaddingUnits?.Tablet} ${offCanvasHamburgerIconTabletPadding?.right}${offCanvasHamburgerIconPaddingUnits?.Tablet} ${offCanvasHamburgerIconTabletPadding?.bottom}${offCanvasHamburgerIconPaddingUnits?.Tablet} ${offCanvasHamburgerIconTabletPadding?.left}${offCanvasHamburgerIconPaddingUnits?.Tablet}`;
	const offCanvasHamburgerIconMobilePaddingWidth = `${offCanvasHamburgerIconMobilePadding?.top}${offCanvasHamburgerIconPaddingUnits?.Mobile} ${offCanvasHamburgerIconMobilePadding?.right}${offCanvasHamburgerIconPaddingUnits?.Mobile} ${offCanvasHamburgerIconMobilePadding?.bottom}${offCanvasHamburgerIconPaddingUnits?.Mobile} ${offCanvasHamburgerIconMobilePadding?.left}${offCanvasHamburgerIconPaddingUnits?.Mobile}`;

    /** Default margin for offCanvasHamburgerIcon */
	const offCanvasHamburgerIconDesktopMarginWidth = `${offCanvasHamburgerIconDesktopMargin?.top}${offCanvasHamburgerIconMarginUnits?.Desktop} ${offCanvasHamburgerIconDesktopMargin?.right}${offCanvasHamburgerIconMarginUnits?.Desktop} ${offCanvasHamburgerIconDesktopMargin?.bottom}${offCanvasHamburgerIconMarginUnits?.Desktop} ${offCanvasHamburgerIconDesktopMargin?.left}${offCanvasHamburgerIconMarginUnits?.Desktop}`;
	const offCanvasHamburgerIconTabletMarginWidth = `${offCanvasHamburgerIconTabletMargin?.top}${offCanvasHamburgerIconMarginUnits?.Tablet} ${offCanvasHamburgerIconTabletMargin?.right}${offCanvasHamburgerIconMarginUnits?.Tablet} ${offCanvasHamburgerIconTabletMargin?.bottom}${offCanvasHamburgerIconMarginUnits?.Tablet} ${offCanvasHamburgerIconTabletMargin?.left}${offCanvasHamburgerIconMarginUnits?.Tablet}`;
	const offCanvasHamburgerIconMobileMarginWidth = `${offCanvasHamburgerIconMobileMargin?.top}${offCanvasHamburgerIconMarginUnits?.Mobile} ${offCanvasHamburgerIconMobileMargin?.right}${offCanvasHamburgerIconMarginUnits?.Mobile} ${offCanvasHamburgerIconMobileMargin?.bottom}${offCanvasHamburgerIconMarginUnits?.Mobile} ${offCanvasHamburgerIconMobileMargin?.left}${offCanvasHamburgerIconMarginUnits?.Mobile}`;

    /** Default border width for different devices */
	const offCanvasCloseIconDesktopBorderWidthStr = `${offCanvasCloseIconDesktopBorderWidth?.top}${offCanvasCloseIconBorderUnits?.Desktop} ${offCanvasCloseIconDesktopBorderWidth?.right}${offCanvasCloseIconBorderUnits?.Desktop} ${offCanvasCloseIconDesktopBorderWidth?.bottom}${offCanvasCloseIconBorderUnits?.Desktop} ${offCanvasCloseIconDesktopBorderWidth?.left}${offCanvasCloseIconBorderUnits?.Desktop}`;
	const offCanvasCloseIconTabletBorderWidthStr = `${offCanvasCloseIconTabBorderWidth?.top}${offCanvasCloseIconBorderUnits?.Tablet} ${offCanvasCloseIconTabBorderWidth?.right}${offCanvasCloseIconBorderUnits?.Tablet} ${offCanvasCloseIconTabBorderWidth?.bottom}${offCanvasCloseIconBorderUnits?.Tablet} ${offCanvasCloseIconTabBorderWidth?.left}${offCanvasCloseIconBorderUnits?.Tablet}`;
	const offCanvasCloseIconMobileBorderWidthStr = `${offCanvasCloseIconMobileBorderWidth?.top}${offCanvasCloseIconBorderUnits?.Mobile} ${offCanvasCloseIconMobileBorderWidth?.right}${offCanvasCloseIconBorderUnits?.Mobile} ${offCanvasCloseIconMobileBorderWidth?.bottom}${offCanvasCloseIconBorderUnits?.Mobile} ${offCanvasCloseIconMobileBorderWidth?.left}${offCanvasCloseIconBorderUnits?.Mobile}`;

    /** Default border radius for different devices */
	const offCanvasCloseIconDesktopBorderRadiusStr = `${offCanvasCloseIconDesktopBorderRadiusWidth?.top}${offCanvasCloseIconBorderRadiusUnits?.Desktop} ${offCanvasCloseIconDesktopBorderRadiusWidth?.right}${offCanvasCloseIconBorderRadiusUnits?.Desktop} ${offCanvasCloseIconDesktopBorderRadiusWidth?.bottom}${offCanvasCloseIconBorderRadiusUnits?.Desktop} ${offCanvasCloseIconDesktopBorderRadiusWidth?.left}${offCanvasCloseIconBorderRadiusUnits?.Desktop}`;
	const offCanvasCloseIconTabletBorderRadiusStr = `${offCanvasCloseIconTabBorderRadiusWidth?.top}${offCanvasCloseIconBorderRadiusUnits?.Tablet} ${offCanvasCloseIconTabBorderRadiusWidth?.right}${offCanvasCloseIconBorderRadiusUnits?.Tablet} ${offCanvasCloseIconTabBorderRadiusWidth?.bottom}${offCanvasCloseIconBorderRadiusUnits?.Tablet} ${offCanvasCloseIconTabBorderRadiusWidth?.left}${offCanvasCloseIconBorderRadiusUnits?.Tablet}`;
	const offCanvasCloseIconMobileBorderRadiusStr = `${offCanvasCloseIconMobileBorderRadiusWidth?.top}${offCanvasCloseIconBorderRadiusUnits?.Mobile} ${offCanvasCloseIconMobileBorderRadiusWidth?.right}${offCanvasCloseIconBorderRadiusUnits?.Mobile} ${offCanvasCloseIconMobileBorderRadiusWidth?.bottom}${offCanvasCloseIconBorderRadiusUnits?.Mobile} ${offCanvasCloseIconMobileBorderRadiusWidth?.left}${offCanvasCloseIconBorderRadiusUnits?.Mobile}`;

    /** Default padding for offCanvasCloseIcon */
	const offCanvasCloseIconDesktopPaddingWidth = `${offCanvasCloseIconDesktopPadding?.top}${offCanvasCloseIconPaddingUnits?.Desktop} ${offCanvasCloseIconDesktopPadding?.right}${offCanvasCloseIconPaddingUnits?.Desktop} ${offCanvasCloseIconDesktopPadding?.bottom}${offCanvasCloseIconPaddingUnits?.Desktop} ${offCanvasCloseIconDesktopPadding?.left}${offCanvasCloseIconPaddingUnits?.Desktop}`;
	const offCanvasCloseIconTabletPaddingWidth = `${offCanvasCloseIconTabletPadding?.top}${offCanvasCloseIconPaddingUnits?.Tablet} ${offCanvasCloseIconTabletPadding?.right}${offCanvasCloseIconPaddingUnits?.Tablet} ${offCanvasCloseIconTabletPadding?.bottom}${offCanvasCloseIconPaddingUnits?.Tablet} ${offCanvasCloseIconTabletPadding?.left}${offCanvasCloseIconPaddingUnits?.Tablet}`;
	const offCanvasCloseIconMobilePaddingWidth = `${offCanvasCloseIconMobilePadding?.top}${offCanvasCloseIconPaddingUnits?.Mobile} ${offCanvasCloseIconMobilePadding?.right}${offCanvasCloseIconPaddingUnits?.Mobile} ${offCanvasCloseIconMobilePadding?.bottom}${offCanvasCloseIconPaddingUnits?.Mobile} ${offCanvasCloseIconMobilePadding?.left}${offCanvasCloseIconPaddingUnits?.Mobile}`;

    /** Default margin for offCanvasCloseIcon */
	const offCanvasCloseIconDesktopMarginWidth = `${offCanvasCloseIconDesktopMargin?.top}${offCanvasCloseIconMarginUnits?.Desktop} ${offCanvasCloseIconDesktopMargin?.right}${offCanvasCloseIconMarginUnits?.Desktop} ${offCanvasCloseIconDesktopMargin?.bottom}${offCanvasCloseIconMarginUnits?.Desktop} ${offCanvasCloseIconDesktopMargin?.left}${offCanvasCloseIconMarginUnits?.Desktop}`;
	const offCanvasCloseIconTabletMarginWidth = `${offCanvasCloseIconTabletMargin?.top}${offCanvasCloseIconMarginUnits?.Tablet} ${offCanvasCloseIconTabletMargin?.right}${offCanvasCloseIconMarginUnits?.Tablet} ${offCanvasCloseIconTabletMargin?.bottom}${offCanvasCloseIconMarginUnits?.Tablet} ${offCanvasCloseIconTabletMargin?.left}${offCanvasCloseIconMarginUnits?.Tablet}`;
	const offCanvasCloseIconMobileMarginWidth = `${offCanvasCloseIconMobileMargin?.top}${offCanvasCloseIconMarginUnits?.Mobile} ${offCanvasCloseIconMobileMargin?.right}${offCanvasCloseIconMarginUnits?.Mobile} ${offCanvasCloseIconMobileMargin?.bottom}${offCanvasCloseIconMarginUnits?.Mobile} ${offCanvasCloseIconMobileMargin?.left}${offCanvasCloseIconMarginUnits?.Mobile}`;

    /** Default padding for menuOpenerText */
	const menuOpenerTextDesktopPaddingWidth = `${menuOpenerTextDesktopPadding?.top}${menuOpenerTextPaddingUnits?.Desktop} ${menuOpenerTextDesktopPadding?.right}${menuOpenerTextPaddingUnits?.Desktop} ${menuOpenerTextDesktopPadding?.bottom}${menuOpenerTextPaddingUnits?.Desktop} ${menuOpenerTextDesktopPadding?.left}${menuOpenerTextPaddingUnits?.Desktop}`;
	const menuOpenerTextTabletPaddingWidth = `${menuOpenerTextTabPadding?.top}${menuOpenerTextPaddingUnits?.Tablet} ${menuOpenerTextTabPadding?.right}${menuOpenerTextPaddingUnits?.Tablet} ${menuOpenerTextTabPadding?.bottom}${menuOpenerTextPaddingUnits?.Tablet} ${menuOpenerTextTabPadding?.left}${menuOpenerTextPaddingUnits?.Tablet}`;
	const menuOpenerTextMobilePaddingWidth = `${menuOpenerTextMobilePadding?.top}${menuOpenerTextPaddingUnits?.Mobile} ${menuOpenerTextMobilePadding?.right}${menuOpenerTextPaddingUnits?.Mobile} ${menuOpenerTextMobilePadding?.bottom}${menuOpenerTextPaddingUnits?.Mobile} ${menuOpenerTextMobilePadding?.left}${menuOpenerTextPaddingUnits?.Mobile}`;

    /** Default margin for menuOpenerText */
	const menuOpenerTextDesktopMarginWidth = `${menuOpenerTextDesktopMargin?.top}${menuOpenerTextMarginUnits?.Desktop} ${menuOpenerTextDesktopMargin?.right}${menuOpenerTextMarginUnits?.Desktop} ${menuOpenerTextDesktopMargin?.bottom}${menuOpenerTextMarginUnits?.Desktop} ${menuOpenerTextDesktopMargin?.left}${menuOpenerTextMarginUnits?.Desktop}`;
	const menuOpenerTextTabletMarginWidth = `${menuOpenerTextTabMargin?.top}${menuOpenerTextMarginUnits?.Tablet} ${menuOpenerTextTabMargin?.right}${menuOpenerTextMarginUnits?.Tablet} ${menuOpenerTextTabMargin?.bottom}${menuOpenerTextMarginUnits?.Tablet} ${menuOpenerTextTabMargin?.left}${menuOpenerTextMarginUnits?.Tablet}`;
	const menuOpenerTextMobileMarginWidth = `${menuOpenerTextMobileMargin?.top}${menuOpenerTextMarginUnits?.Mobile} ${menuOpenerTextMobileMargin?.right}${menuOpenerTextMarginUnits?.Mobile} ${menuOpenerTextMobileMargin?.bottom}${menuOpenerTextMarginUnits?.Mobile} ${menuOpenerTextMobileMargin?.left}${menuOpenerTextMarginUnits?.Mobile}`;

    /** Default border radius for menuOpenerText */
	const menuOpenerTextDesktopBorderWidth = `${menuOpenerTextDesktopBorder?.top}${menuOpenerTextBorderUnits?.Desktop} ${menuOpenerTextDesktopBorder?.right}${menuOpenerTextBorderUnits?.Desktop} ${menuOpenerTextDesktopBorder?.bottom}${menuOpenerTextBorderUnits?.Desktop} ${menuOpenerTextDesktopBorder?.left}${menuOpenerTextBorderUnits?.Desktop}`;
	const menuOpenerTextTabletBorderWidth = `${menuOpenerTextTabletBorder?.top}${menuOpenerTextBorderUnits?.Tablet} ${menuOpenerTextTabletBorder?.right}${menuOpenerTextBorderUnits?.Tablet} ${menuOpenerTextTabletBorder?.bottom}${menuOpenerTextBorderUnits?.Tablet} ${menuOpenerTextTabletBorder?.left}${menuOpenerTextBorderUnits?.Tablet}`;
	const menuOpenerTextMobileBorderWidth = `${menuOpenerTextMobileBorder?.top}${menuOpenerTextBorderUnits?.Mobile} ${menuOpenerTextMobileBorder?.right}${menuOpenerTextBorderUnits?.Mobile} ${menuOpenerTextMobileBorder?.bottom}${menuOpenerTextBorderUnits?.Mobile} ${menuOpenerTextMobileBorder?.left}${menuOpenerTextBorderUnits?.Mobile}`;

    /** Default border radius for menuOpenerText */
	const menuOpenerTextDesktopBorderRadiusWidth = `${menuOpenerTextDesktopBorderRadius?.top}${menuOpenerTextBorderRadiusUnits?.Desktop} ${menuOpenerTextDesktopBorderRadius?.right}${menuOpenerTextBorderRadiusUnits?.Desktop} ${menuOpenerTextDesktopBorderRadius?.bottom}${menuOpenerTextBorderRadiusUnits?.Desktop} ${menuOpenerTextDesktopBorderRadius?.left}${menuOpenerTextBorderRadiusUnits?.Desktop}`;
	const menuOpenerTextTabletBorderRadiusWidth = `${menuOpenerTextTabBorderRadius?.top}${menuOpenerTextBorderRadiusUnits?.Tablet} ${menuOpenerTextTabBorderRadius?.right}${menuOpenerTextBorderRadiusUnits?.Tablet} ${menuOpenerTextTabBorderRadius?.bottom}${menuOpenerTextBorderRadiusUnits?.Tablet} ${menuOpenerTextTabBorderRadius?.left}${menuOpenerTextBorderRadiusUnits?.Tablet}`;
	const menuOpenerTextMobileBorderRadiusWidth = `${menuOpenerTextMobileBorderRadius?.top}${menuOpenerTextBorderRadiusUnits?.Mobile} ${menuOpenerTextMobileBorderRadius?.right}${menuOpenerTextBorderRadiusUnits?.Mobile} ${menuOpenerTextMobileBorderRadius?.bottom}${menuOpenerTextBorderRadiusUnits?.Mobile} ${menuOpenerTextMobileBorderRadius?.left}${menuOpenerTextBorderRadiusUnits?.Mobile}`;

    /** Default padding for menuCloserText */
	const menuCloserTextDesktopPaddingWidth = `${menuCloserTextDesktopPadding?.top}${menuCloserTextPaddingUnits?.Desktop} ${menuCloserTextDesktopPadding?.right}${menuCloserTextPaddingUnits?.Desktop} ${menuCloserTextDesktopPadding?.bottom}${menuCloserTextPaddingUnits?.Desktop} ${menuCloserTextDesktopPadding?.left}${menuCloserTextPaddingUnits?.Desktop}`;
	const menuCloserTextTabletPaddingWidth = `${menuCloserTextTabPadding?.top}${menuCloserTextPaddingUnits?.Tablet} ${menuCloserTextTabPadding?.right}${menuCloserTextPaddingUnits?.Tablet} ${menuCloserTextTabPadding?.bottom}${menuCloserTextPaddingUnits?.Tablet} ${menuCloserTextTabPadding?.left}${menuCloserTextPaddingUnits?.Tablet}`;
	const menuCloserTextMobilePaddingWidth = `${menuCloserTextMobilePadding?.top}${menuCloserTextPaddingUnits?.Mobile} ${menuCloserTextMobilePadding?.right}${menuCloserTextPaddingUnits?.Mobile} ${menuCloserTextMobilePadding?.bottom}${menuCloserTextPaddingUnits?.Mobile} ${menuCloserTextMobilePadding?.left}${menuCloserTextPaddingUnits?.Mobile}`;

    /** Default margin for menuCloserText */
	const menuCloserTextDesktopMarginWidth = `${menuCloserTextDesktopMargin?.top}${menuCloserTextMarginUnits?.Desktop} ${menuCloserTextDesktopMargin?.right}${menuCloserTextMarginUnits?.Desktop} ${menuCloserTextDesktopMargin?.bottom}${menuCloserTextMarginUnits?.Desktop} ${menuCloserTextDesktopMargin?.left}${menuCloserTextMarginUnits?.Desktop}`;
	const menuCloserTextTabletMarginWidth = `${menuCloserTextTabMargin?.top}${menuCloserTextMarginUnits?.Tablet} ${menuCloserTextTabMargin?.right}${menuCloserTextMarginUnits?.Tablet} ${menuCloserTextTabMargin?.bottom}${menuCloserTextMarginUnits?.Tablet} ${menuCloserTextTabMargin?.left}${menuCloserTextMarginUnits?.Tablet}`;
	const menuCloserTextMobileMarginWidth = `${menuCloserTextMobileMargin?.top}${menuCloserTextMarginUnits?.Mobile} ${menuCloserTextMobileMargin?.right}${menuCloserTextMarginUnits?.Mobile} ${menuCloserTextMobileMargin?.bottom}${menuCloserTextMarginUnits?.Mobile} ${menuCloserTextMobileMargin?.left}${menuCloserTextMarginUnits?.Mobile}`;

    /** Default border radius for menuCloserText */
	const menuCloserTextDesktopBorderWidth = `${menuCloserTextDesktopBorder?.top}${menuCloserTextBorderUnits?.Desktop} ${menuCloserTextDesktopBorder?.right}${menuCloserTextBorderUnits?.Desktop} ${menuCloserTextDesktopBorder?.bottom}${menuCloserTextBorderUnits?.Desktop} ${menuCloserTextDesktopBorder?.left}${menuCloserTextBorderUnits?.Desktop}`;
	const menuCloserTextTabletBorderWidth = `${menuCloserTextTabletBorder?.top}${menuCloserTextBorderUnits?.Tablet} ${menuCloserTextTabletBorder?.right}${menuCloserTextBorderUnits?.Tablet} ${menuCloserTextTabletBorder?.bottom}${menuCloserTextBorderUnits?.Tablet} ${menuCloserTextTabletBorder?.left}${menuCloserTextBorderUnits?.Tablet}`;
	const menuCloserTextMobileBorderWidth = `${menuCloserTextMobileBorder?.top}${menuCloserTextBorderUnits?.Mobile} ${menuCloserTextMobileBorder?.right}${menuCloserTextBorderUnits?.Mobile} ${menuCloserTextMobileBorder?.bottom}${menuCloserTextBorderUnits?.Mobile} ${menuCloserTextMobileBorder?.left}${menuCloserTextBorderUnits?.Mobile}`;

    /** Default border radius for menuCloserText */
	const menuCloserTextDesktopBorderRadiusWidth = `${menuCloserTextDesktopBorderRadius?.top}${menuCloserTextBorderRadiusUnits?.Desktop} ${menuCloserTextDesktopBorderRadius?.right}${menuCloserTextBorderRadiusUnits?.Desktop} ${menuCloserTextDesktopBorderRadius?.bottom}${menuCloserTextBorderRadiusUnits?.Desktop} ${menuCloserTextDesktopBorderRadius?.left}${menuCloserTextBorderRadiusUnits?.Desktop}`;
	const menuCloserTextTabletBorderRadiusWidth = `${menuCloserTextTabBorderRadius?.top}${menuCloserTextBorderRadiusUnits?.Tablet} ${menuCloserTextTabBorderRadius?.right}${menuCloserTextBorderRadiusUnits?.Tablet} ${menuCloserTextTabBorderRadius?.bottom}${menuCloserTextBorderRadiusUnits?.Tablet} ${menuCloserTextTabBorderRadius?.left}${menuCloserTextBorderRadiusUnits?.Tablet}`;
	const menuCloserTextMobileBorderRadiusWidth = `${menuCloserTextMobileBorderRadius?.top}${menuCloserTextBorderRadiusUnits?.Mobile} ${menuCloserTextMobileBorderRadius?.right}${menuCloserTextBorderRadiusUnits?.Mobile} ${menuCloserTextMobileBorderRadius?.bottom}${menuCloserTextBorderRadiusUnits?.Mobile} ${menuCloserTextMobileBorderRadius?.left}${menuCloserTextBorderRadiusUnits?.Mobile}`;

    const globalDesktopPadding = `${offCanvasGlobalPaddingDesktop?.top}${offCanvasGlobalPaddingUnits?.Desktop} ${offCanvasGlobalPaddingDesktop?.right}${offCanvasGlobalPaddingUnits?.Desktop} ${offCanvasGlobalPaddingDesktop?.bottom}${offCanvasGlobalPaddingUnits?.Desktop} ${offCanvasGlobalPaddingDesktop?.left}${offCanvasGlobalPaddingUnits?.Desktop}`;
	const globalTabletPadding = `${offCanvasGlobalPaddingTablet?.top}${offCanvasGlobalPaddingUnits?.Tablet} ${offCanvasGlobalPaddingTablet?.right}${offCanvasGlobalPaddingUnits?.Tablet} ${offCanvasGlobalPaddingTablet?.bottom}${offCanvasGlobalPaddingUnits?.Tablet} ${offCanvasGlobalPaddingTablet?.left}${offCanvasGlobalPaddingUnits?.Tablet}`;
	const globalMobilePadding = `${offCanvasGlobalPaddingMobile?.top}${offCanvasGlobalPaddingUnits?.Mobile} ${offCanvasGlobalPaddingMobile?.right}${offCanvasGlobalPaddingUnits?.Mobile} ${offCanvasGlobalPaddingMobile?.bottom}${offCanvasGlobalPaddingUnits?.Mobile} ${offCanvasGlobalPaddingMobile?.left}${offCanvasGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${offCanvasGlobalMarginDesktop?.top}${offCanvasGlobalMarginUnits?.Desktop} ${offCanvasGlobalMarginDesktop?.right}${offCanvasGlobalMarginUnits?.Desktop} ${offCanvasGlobalMarginDesktop?.bottom}${offCanvasGlobalMarginUnits?.Desktop} ${offCanvasGlobalMarginDesktop?.left}${offCanvasGlobalMarginUnits?.Desktop}`;
	const globalTabletMargin = `${offCanvasGlobalMarginTablet?.top}${offCanvasGlobalMarginUnits?.Tablet} ${offCanvasGlobalMarginTablet?.right}${offCanvasGlobalMarginUnits?.Tablet} ${offCanvasGlobalMarginTablet?.bottom}${offCanvasGlobalMarginUnits?.Tablet} ${offCanvasGlobalMarginTablet?.left}${offCanvasGlobalMarginUnits?.Tablet}`;
	const globalMobileMargin = `${offCanvasGlobalMarginMobile?.top}${offCanvasGlobalMarginUnits?.Mobile} ${offCanvasGlobalMarginMobile?.right}${offCanvasGlobalMarginUnits?.Mobile} ${offCanvasGlobalMarginMobile?.bottom}${offCanvasGlobalMarginUnits?.Mobile} ${offCanvasGlobalMarginMobile?.left}${offCanvasGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${offCanvasGlobalBorderDesktop?.top}${offCanvasGlobalBorderUnits?.Desktop} ${offCanvasGlobalBorderDesktop?.right}${offCanvasGlobalBorderUnits?.Desktop} ${offCanvasGlobalBorderDesktop?.bottom}${offCanvasGlobalBorderUnits?.Desktop} ${offCanvasGlobalBorderDesktop?.left}${offCanvasGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${offCanvasGlobalBorderTablet?.top}${offCanvasGlobalBorderUnits?.Tablet} ${offCanvasGlobalBorderTablet?.right}${offCanvasGlobalBorderUnits?.Tablet} ${offCanvasGlobalBorderTablet?.bottom}${offCanvasGlobalBorderUnits?.Tablet} ${offCanvasGlobalBorderTablet?.left}${offCanvasGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${offCanvasGlobalBorderMobile?.top}${offCanvasGlobalBorderUnits?.Mobile} ${offCanvasGlobalBorderMobile?.right}${offCanvasGlobalBorderUnits?.Mobile} ${offCanvasGlobalBorderMobile?.bottom}${offCanvasGlobalBorderUnits?.Mobile} ${offCanvasGlobalBorderMobile?.left}${offCanvasGlobalBorderUnits?.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${offCanvasGlobalBorderRadiusDesktop?.top}${offCanvasGlobalBorderRadiusUnits?.Desktop} ${offCanvasGlobalBorderRadiusDesktop?.right}${offCanvasGlobalBorderRadiusUnits?.Desktop} ${offCanvasGlobalBorderRadiusDesktop?.bottom}${offCanvasGlobalBorderRadiusUnits?.Desktop} ${offCanvasGlobalBorderRadiusDesktop?.left}${offCanvasGlobalBorderRadiusUnits?.Desktop}`;
	const globalTabletBorderRadiusWidth = `${offCanvasGlobalBorderRadiusTablet?.top}${offCanvasGlobalBorderRadiusUnits?.Tablet} ${offCanvasGlobalBorderRadiusTablet?.right}${offCanvasGlobalBorderRadiusUnits?.Tablet} ${offCanvasGlobalBorderRadiusTablet?.bottom}${offCanvasGlobalBorderRadiusUnits?.Tablet} ${offCanvasGlobalBorderRadiusTablet?.left}${offCanvasGlobalBorderRadiusUnits?.Tablet}`;
	const globalMobileBorderRadiusWidth = `${offCanvasGlobalBorderRadiusMobile?.top}${offCanvasGlobalBorderRadiusUnits?.Mobile} ${offCanvasGlobalBorderRadiusMobile?.right}${offCanvasGlobalBorderRadiusUnits?.Mobile} ${offCanvasGlobalBorderRadiusMobile?.bottom}${offCanvasGlobalBorderRadiusUnits?.Mobile} ${offCanvasGlobalBorderRadiusMobile?.left}${offCanvasGlobalBorderRadiusUnits?.Mobile}`;

    const getBackgroundNormalStyles = (device) => {
        const bgType = offCanvasPanelBgNormalBackgroundType;
        const bgColor = offCanvasPanelBgNormalClassicColor;
        const bgGradient = offCanvasPanelBgNormalGradientColor;
        const customGradient = offCanvasPanelBgNormalCustomGradientInputValue;
        const customGradientEnabled = offCanvasPanelBgNormalCustomGradientSwitcher;

        const bgImageUrl = offCanvasPanelBgNormalBackgroundImageUrl?.[device];
        const bgImagePosition = offCanvasPanelBgNormalBackgroundImagePosition?.[device];
        const bgAttachment = offCanvasPanelBgNormalBackgroundImageAttachment?.[device];
        const bgRepeat = offCanvasPanelBgNormalBackgroundImageRepeat?.[device];
        const bgSize = offCanvasPanelBgNormalBackgroundImageSize?.[device];

        if (bgType === 'gradient') {
            return {
                background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
            };
        }

        let styles = { background: bgColor };

        if (bgType !== 'gradient' && bgImageUrl) {
            styles = {
                ...styles,
                'background-image': `url(${bgImageUrl})`,
                'background-position': bgImagePosition
                    ? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
                    : "50% 50%",
                'background-attachment': bgAttachment || undefined,
                'background-repeat': bgRepeat || undefined,
                'background-size': bgSize || undefined,
            };
        }

        return styles;
    };

    /**
     * Get background hover styles
     */
    const getBackgroundHoverStyles = (device) => {
        const bgType = offCanvasPanelBgHoverBackgroundType;
        const bgColor = offCanvasPanelBgHoverClassicColor;
        const bgGradient = offCanvasPanelBgHoverGradientColor;
        const customGradient = offCanvasPanelBgHoverCustomGradientInputValue;
        const customGradientEnabled = offCanvasPanelBgHoverCustomGradientSwitcher;

        const bgImageUrl = offCanvasPanelBgHoverBackgroundImageUrl?.[device];
        const bgImagePosition = offCanvasPanelBgHoverBackgroundImagePosition?.[device];
        const bgAttachment = offCanvasPanelBgHoverBackgroundImageAttachment?.[device];
        const bgRepeat = offCanvasPanelBgHoverBackgroundImageRepeat?.[device];
        const bgSize = offCanvasPanelBgHoverBackgroundImageSize?.[device];

        if (bgType === 'gradient') {
            return {
                background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
            };
        }

        let styles = { background: bgColor };

        if (bgType !== 'gradient' && bgImageUrl) {
            styles = {
                ...styles,
                'background-image': `url(${bgImageUrl})`,
                'background-position': bgImagePosition
                    ? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
                    : "50% 50%",
                'background-attachment': bgAttachment || undefined,
                'background-repeat': bgRepeat || undefined,
                'background-size': bgSize || undefined,
            };
        }

        return styles;
    };

    /**
     * Convert object to string
     */
    const backgroundStyleObjectToString = (styleObj) =>
        Object.entries(styleObj)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ');


    const desktopBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Desktop'));
    const desktopBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Desktop'));
    const tabletBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Tablet'));
    const tabletBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Tablet'));
    const mobileBackgroundNormalStyles = backgroundStyleObjectToString(getBackgroundNormalStyles('Mobile'));
    const mobileBackgroundHoverStyles = backgroundStyleObjectToString(getBackgroundHoverStyles('Mobile'));

    /**
     * Get background normal styles
     */
    const getGlobalBackgroundNormalStyles = (device) => {
        const bgType = offCanvasGlobalBgNormalBackgroundType;
        const bgColor = offCanvasGlobalBgNormalClassicColor;
        const bgGradient = offCanvasGlobalBgNormalGradientColor;
        const customGradient = offCanvasGlobalBgNormalCustomGradientInputValue;
        const customGradientEnabled = offCanvasGlobalBgNormalCustomGradientSwitcher;

        const bgImageUrl = offCanvasGlobalBgNormalBackgroundImageUrl?.[device];
        const bgImagePosition = offCanvasGlobalBgNormalBackgroundImagePosition?.[device];
        const bgAttachment = offCanvasGlobalBgNormalBackgroundImageAttachment?.[device];
        const bgRepeat = offCanvasGlobalBgNormalBackgroundImageRepeat?.[device];
        const bgSize = offCanvasGlobalBgNormalBackgroundImageSize?.[device];

        if (bgType === 'gradient') {
            return {
                background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
            };
        }

        let styles = { background: bgColor };

        if (bgType !== 'gradient' && bgImageUrl) {
            styles = {
                ...styles,
                'background-image': `url(${bgImageUrl})`,
                'background-position': bgImagePosition
                    ? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
                    : "50% 50%",
                'background-attachment': bgAttachment || undefined,
                'background-repeat': bgRepeat || undefined,
                'background-size': bgSize || undefined,
            };
        }

        return styles;
    };

    /**
     * Get background hover styles
     */
    const getGlobalBackgroundHoverStyles = (device) => {
        const bgType = offCanvasGlobalBgHoverBackgroundType;
        const bgColor = offCanvasGlobalBgHoverClassicColor;
        const bgGradient = offCanvasGlobalBgHoverGradientColor;
        const customGradient = offCanvasGlobalBgHoverCustomGradientInputValue;
        const customGradientEnabled = offCanvasGlobalBgHoverCustomGradientSwitcher;

        const bgImageUrl = offCanvasGlobalBgHoverBackgroundImageUrl?.[device];
        const bgImagePosition = offCanvasGlobalBgHoverBackgroundImagePosition?.[device];
        const bgAttachment = offCanvasGlobalBgHoverBackgroundImageAttachment?.[device];
        const bgRepeat = offCanvasGlobalBgHoverBackgroundImageRepeat?.[device];
        const bgSize = offCanvasGlobalBgHoverBackgroundImageSize?.[device];

        if (bgType === 'gradient') {
            return {
                background: customGradientEnabled && customGradient ? customGradient : bgGradient || bgColor
            };
        }

        let styles = { background: bgColor };

        if (bgType !== 'gradient' && bgImageUrl) {
            styles = {
                ...styles,
                'background-image': `url(${bgImageUrl})`,
                'background-position': bgImagePosition
                    ? `${bgImagePosition.x * 100}% ${bgImagePosition.y * 100}%`
                    : "50% 50%",
                'background-attachment': bgAttachment || undefined,
                'background-repeat': bgRepeat || undefined,
                'background-size': bgSize || undefined,
            };
        }

        return styles;
    };

    /**
    * Convert object to string
    */
    const backgroundGlobalStyleObjectToString = (styleObj) => Object.entries(styleObj).map(([key, value]) => `${key}: ${value};`).join(' ');

    const desktopGlobalBackgroundNormalStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundNormalStyles('Desktop'));
    const desktopGlobalBackgroundHoverStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundHoverStyles('Desktop'));
    const tabletGlobalBackgroundNormalStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundNormalStyles('Tablet'));
    const tabletGlobalBackgroundHoverStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundHoverStyles('Tablet'));
    const mobileGlobalBackgroundNormalStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundNormalStyles('Mobile'));
    const mobileGlobalBackgroundHoverStyles = backgroundGlobalStyleObjectToString(getGlobalBackgroundHoverStyles('Mobile'));

    const offCanvasStyle = `
        .${blockID}.fb-off-canvas-menu-block{
            ${offCanvasPositionType === 'default' ? `position: relative !important;` : ''}
            ${offCanvasPositionType !== 'default' && offCanvasPositionType !== 'relative' ? `width: 100%;` : ''}
            ${offCanvasPositionType !== 'default' ? `position: ${offCanvasPositionType} !important;` : ''}
            ${offCanvasPositionType !== 'default' && offCanvasPositionType !== 'relative' && offCanvasHZOrientationType === 'left' && offCanvasHZLeftOffset?.Desktop ? `left: ${offCanvasHZLeftOffset?.Desktop}${offCanvasHZLeftOffsetUnits?.Desktop};` : ''} 
            ${offCanvasPositionType !== 'default' && offCanvasPositionType !== 'relative' && offCanvasHZOrientationType === 'right' && offCanvasHZRightOffset?.Desktop ? `right: ${offCanvasHZRightOffset?.Desktop}${offCanvasHZRightOffsetUnits?.Desktop};` : ''}
            ${offCanvasPositionType !== 'default' && offCanvasPositionType !== 'relative' && offCanvasVROrientationType === 'top' && offCanvasVRTopOffset?.Desktop ? `top: ${offCanvasVRTopOffset?.Desktop}${offCanvasVRTopOffsetUnits?.Desktop};` : ''}
            ${offCanvasPositionType !== 'default' && offCanvasPositionType !== 'relative' && offCanvasVROrientationType === 'bottom' && offCanvasVRBottomOffset?.Desktop ? `bottom: ${offCanvasVRBottomOffset?.Desktop}${offCanvasVRBottomOffsetUnits?.Desktop};` : ''}
            ${offCanvasGlobalZIndex?.Desktop ? `z-index: ${offCanvasGlobalZIndex?.Desktop};` : ''}
            ${offCanvasOverflow !== 'default' ? `overflow: ${offCanvasOverflow};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu-container{
            ${desktopGlobalBackgroundNormalStyles}
            ${globalDesktopPadding && offCanvasGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && offCanvasGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''}
            ${offCanvasGlobalBorder ? `border: ${offCanvasGlobalBorder};` : ''}
            ${globalDesktopBorderWidth && offCanvasGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && offCanvasGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${offCanvasGlobalBorderColor ? `border-color: ${offCanvasGlobalBorderColor};` : ''}
            ${offCanvasGlobalBoxShadowCssValue ? `box-shadow: ${offCanvasGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-off-canvas-menu-block:hover .fb-off-canvas-menu-container{
            ${desktopGlobalBackgroundHoverStyles}
            ${offCanvasGlobalBorderHoverColor ? `border-color: ${offCanvasGlobalBorderHoverColor};` : ''}
            ${offCanvasGlobalBoxShadowHoverCssValue ? `box-shadow: ${offCanvasGlobalBoxShadowHoverCssValue};` : ''}
        }
        .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu{
            ${offCanvasPanelWidth?.Desktop ? `width: ${offCanvasPanelWidth?.Desktop}${offCanvasPanelWidthUnits?.Desktop};` : ''}
            ${offCanvasPanelHeight?.Desktop ? `height: ${offCanvasPanelHeight?.Desktop}${offCanvasPanelHeightUnits?.Desktop};` : ''}
            ${offCanvasPanelDesktopPaddingStr && offCanvasPanelDesktopPadding?.top ? `padding: ${offCanvasPanelDesktopPaddingStr};` : ''}
            ${offCanvasPanelDesktopMarginStr && offCanvasPanelDesktopMargin?.top ? `margin: ${offCanvasPanelDesktopMarginStr};` : ''}
            ${offCanvasPanelBorder ? `border: ${offCanvasPanelBorder};` : ''}
            ${offCanvasPanelBorderColor ? `border-color: ${offCanvasPanelBorderColor};` : ''}
            ${offCanvasPanelDesktopBorderWidthStr && offCanvasPanelDesktopBorderWidth?.top ? `border-width: ${offCanvasPanelDesktopBorderWidthStr};` : ''}
            ${offCanvasPanelDesktopBorderRadiusStr && offCanvasPanelDesktopBorderRadiusWidth?.top ? `border-radius: ${offCanvasPanelDesktopBorderRadiusStr};` : ''}
            ${offCanvasPanelBoxShadowCssValue ? `box-shadow: ${offCanvasPanelBoxShadowCssValue};` : ''} 
            ${desktopBackgroundNormalStyles}
        }

        .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu:hover{
            ${offCanvasPanelBoxShadowHoverCssValue ? `box-shadow: ${offCanvasPanelBoxShadowHoverCssValue};` : ''}
            ${offCanvasPanelBorderHoverColor ? `border-color: ${offCanvasPanelBorderHoverColor};` : ''}
            ${desktopBackgroundHoverStyles}
        }

        .${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon{
            ${offCanvasHamburgerIconBgWidth?.Desktop ? `width: ${offCanvasHamburgerIconBgWidth?.Desktop}${offCanvasHamburgerIconBgWidthUnits?.Desktop};` : ''}
            ${offCanvasHamburgerIconBgWidth?.Desktop ? `height: ${offCanvasHamburgerIconBgWidth?.Desktop}${offCanvasHamburgerIconBgWidthUnits?.Desktop};` : ''}
            ${offCanvashamburgerIconBgColor ? `background: ${offCanvashamburgerIconBgColor};` : ''}
            ${offCanvashamburgerIconBorder ? `border: ${offCanvashamburgerIconBorder};` : ''}
            ${offCanvashamburgerIconBorderColor ? `border-color: ${offCanvashamburgerIconBorderColor};` : ''}
            ${offCanvashamburgerIconDesktopBorderWidthStr && offCanvashamburgerIconDesktopBorderWidth?.top ? `border-width: ${offCanvashamburgerIconDesktopBorderWidthStr};` : ''}
            ${offCanvashamburgerIconDesktopBorderRadiusStr && offCanvashamburgerIconDesktopBorderRadiusWidth?.top ? `border-radius: ${offCanvashamburgerIconDesktopBorderRadiusStr};` : ''}
            ${offCanvasHamburgerIconDesktopMarginWidth && offCanvasHamburgerIconDesktopMargin?.top ? `margin: ${offCanvasHamburgerIconDesktopMarginWidth};` : ''}
            ${offCanvasHamburgerIconDesktopPaddingWidth && offCanvasHamburgerIconDesktopPadding?.top ? `padding: ${offCanvasHamburgerIconDesktopPaddingWidth};` : ''}
            transition: 0.3s all ease;
        }

        .${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon:hover{
            ${offCanvashamburgerIconBgHoverColor ? `background: ${offCanvashamburgerIconBgHoverColor};` : ''}
            ${offCanvashamburgerIconBorderHoverColor ? `border-color: ${offCanvashamburgerIconBorderHoverColor};` : ''}
        }

        .${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon svg{
            ${offCanvasHamburgerIconWidth?.Desktop ? `width: ${offCanvasHamburgerIconWidth?.Desktop}${offCanvasHamburgerIconWidthUnits?.Desktop};` : ''}
            ${offCanvasHamburgerIconWidth?.Desktop ? `height: ${offCanvasHamburgerIconWidth?.Desktop}${offCanvasHamburgerIconWidthUnits?.Desktop};` : ''}
            ${offCanvashamburgerIconColor ? `fill: ${offCanvashamburgerIconColor};` : ''}
            transition: 0.3s all ease;
        }
        .${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon:hover svg{
            ${offCanvashamburgerIconHoverColor ? `fill: ${offCanvashamburgerIconHoverColor};` : ''}
        }
        .${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-text{
            ${menuOpenerTextGlobalTypoSwitcher?.fontFamily === true && menuOpenerTextGlobalTypographyData?.fontFamily ? `font-family: ${menuOpenerTextGlobalTypographyData?.fontFamily};` : ''}
            ${menuOpenerTextGlobalTypoSwitcher?.fontSize === true && menuOpenerTextGlobalTypographyData?.fontSize ? `font-size: ${menuOpenerTextGlobalTypographyData?.fontSize};` : ''}
            ${menuOpenerTextGlobalTypoSwitcher?.fontWeight === true && menuOpenerTextGlobalTypographyData?.fontWeight ? `font-weight: ${menuOpenerTextGlobalTypographyData?.fontWeight};` : ''}
            ${menuOpenerTextGlobalTypoSwitcher?.fontStyle === true && menuOpenerTextGlobalTypographyData?.fontStyle ? `font-style: ${menuOpenerTextGlobalTypographyData?.fontStyle};` : ''}
            ${menuOpenerTextGlobalTypoSwitcher?.textTransform === true && menuOpenerTextGlobalTypographyData?.textTransform ? `text-transform: ${menuOpenerTextGlobalTypographyData?.textTransform};` : ''}
            ${menuOpenerTextGlobalTypoSwitcher?.textDecoration === true && menuOpenerTextGlobalTypographyData?.textDecoration ? `text-decoration: ${menuOpenerTextGlobalTypographyData?.textDecoration};` : ''}
            ${menuOpenerTextGlobalTypoSwitcher?.letterSpacing === true && menuOpenerTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${menuOpenerTextGlobalTypographyData?.letterSpacing};` : ''}
            ${menuOpenerTextGlobalTypoSwitcher?.lineHeight === true && menuOpenerTextGlobalTypographyData?.lineHeight ? `line-height: ${menuOpenerTextGlobalTypographyData?.lineHeight};` : ''}
            
            ${menuOpenerTextGlobalTypoSwitcher?.fontFamily === false && menuOpenerTextFontFamily && menuOpenerTextFontFamily !== 'Default' ? `font-family: ${menuOpenerTextFontFamily};` : ''}
            ${menuOpenerTextGlobalTypoSwitcher?.fontSize === false && menuOpenerTextFontSize?.Desktop && menuOpenerTextFontSizeUnits?.Desktop ? `font-size: ${menuOpenerTextFontSize?.Desktop}${menuOpenerTextFontSizeUnits?.Desktop};` : ''}
            ${menuOpenerTextGlobalTypoSwitcher?.fontWeight === false && menuOpenerTextFontWeight ? `font-weight: ${menuOpenerTextFontWeight};` : ''}
            ${menuOpenerTextGlobalTypoSwitcher?.fontStyle === false && menuOpenerTextFontStyle ? `font-style: ${menuOpenerTextFontStyle};` : ''}
            ${menuOpenerTextGlobalTypoSwitcher?.textTransform === false && menuOpenerTextTextTransform ? `text-transform: ${menuOpenerTextTextTransform};` : ''}
            ${menuOpenerTextGlobalTypoSwitcher?.textDecoration === false && menuOpenerTextTextDecoration ? `text-decoration: ${menuOpenerTextTextDecoration};` : ''}
            ${menuOpenerTextGlobalTypoSwitcher?.letterSpacing === false && menuOpenerTextLetterSpacing?.Desktop && menuOpenerTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${menuOpenerTextLetterSpacing?.Desktop}${menuOpenerTextLetterSpacingUnits?.Desktop};` : ''}
            ${menuOpenerTextGlobalTypoSwitcher?.lineHeight === false && menuOpenerTextLineHeight?.Desktop && menuOpenerTextLineHeightUnits?.Desktop ? `line-height: ${menuOpenerTextLineHeight?.Desktop}${menuOpenerTextLineHeightUnits?.Desktop};` : ''}
            ${menuOpenerTextDesktopPaddingWidth && menuOpenerTextDesktopPadding?.top ? `padding: ${menuOpenerTextDesktopPaddingWidth};` : ''}
            ${menuOpenerTextDesktopMarginWidth && menuOpenerTextDesktopMargin?.top ? `margin: ${menuOpenerTextDesktopMarginWidth};` : ''}
            ${menuOpenerTextBorder ? `border: ${menuOpenerTextBorder};` : ''}
            ${menuOpenerTextDesktopBorderWidth && menuOpenerTextDesktopBorder?.top ? `border-width: ${menuOpenerTextDesktopBorderWidth};` : ''}
            ${menuOpenerTextDesktopBorderRadiusWidth && menuOpenerTextDesktopBorderRadius?.top ? `border-radius: ${menuOpenerTextDesktopBorderRadiusWidth};` : ''}
            ${menuOpenerTextBorderColor ? `border-color: ${menuOpenerTextBorderColor};` : ''}
            ${menuOpenerTextBoxShadowCssValue ? `box-shadow: ${menuOpenerTextBoxShadowCssValue};` : ''}
            ${menuOpenerTextColor ? `color: ${menuOpenerTextColor};` : ''}
            ${menuOpenerTextBgColor ? `background-color: ${menuOpenerTextBgColor};` : ''}
        }
        .${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-text:hover{
            ${menuOpenerTextHoverColor ? `color: ${menuOpenerTextHoverColor};` : ''}
            ${menuOpenerTextBgHoverColor ? `background-color: ${menuOpenerTextBgHoverColor};` : ''}
            ${menuOpenerTextBorderHoverColor ? `border-color: ${menuOpenerTextBorderHoverColor};` : ''}
            ${menuOpenerTextBoxShadowHoverCssValue ? `box-shadow: ${menuOpenerTextBoxShadowHoverCssValue};` : ''}
        }
        .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.icon{
            ${offCanvasCloseIconBgWidth?.Desktop ? `width: ${offCanvasCloseIconBgWidth?.Desktop}${offCanvasCloseIconBgWidthUnits?.Desktop};` : ''}
            ${offCanvasCloseIconBgWidth?.Desktop ? `height: ${offCanvasCloseIconBgWidth?.Desktop}${offCanvasCloseIconBgWidthUnits?.Desktop};` : ''}
            ${offCanvasCloseIconBgColor ? `background: ${offCanvasCloseIconBgColor};` : ''}
            ${offCanvasCloseIconBorder ? `border: ${offCanvasCloseIconBorder};` : ''}
            ${offCanvasCloseIconBorderColor ? `border-color: ${offCanvasCloseIconBorderColor};` : ''}
            ${offCanvasCloseIconDesktopPaddingWidth && offCanvasCloseIconDesktopPadding?.top ? `padding: ${offCanvasCloseIconDesktopPaddingWidth};` : ''}
            ${offCanvasCloseIconDesktopMarginWidth && offCanvasCloseIconDesktopMargin?.top ? `margin: ${offCanvasCloseIconDesktopMarginWidth};` : ''}
            ${offCanvasCloseIconDesktopBorderWidthStr && offCanvasCloseIconDesktopBorderWidth?.top ? `border-width: ${offCanvasCloseIconDesktopBorderWidthStr};` : ''}
            ${offCanvasCloseIconDesktopBorderRadiusStr && offCanvasCloseIconDesktopBorderRadiusWidth?.top ? `border-radius: ${offCanvasCloseIconDesktopBorderRadiusStr};` : ''}
            transition: 0.3s all ease;
        }
        .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.icon:hover{
            ${offCanvasCloseIconBgHoverColor ? `background: ${offCanvasCloseIconBgHoverColor};` : ''}
            ${offCanvasCloseIconBorderHoverColor ? `border-color: ${offCanvasCloseIconBorderHoverColor};` : ''}
        }
        .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.icon svg{
            ${offCanvasCloseIconWidth?.Desktop ? `width: ${offCanvasCloseIconWidth?.Desktop}${offCanvasCloseIconWidthUnits?.Desktop};` : ''}
            ${offCanvasCloseIconWidth?.Desktop ? `height: ${offCanvasCloseIconWidth?.Desktop}${offCanvasCloseIconWidthUnits?.Desktop};` : ''}
            ${offCanvasCloseIconColor ? `fill: ${offCanvasCloseIconColor};` : ''}
            transition: 0.3s all ease;
        }
        .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.icon:hover svg{
            ${offCanvasCloseIconHoverColor ? `fill: ${offCanvasCloseIconHoverColor};` : ''}
        }
        .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.text{
            ${menuCloserTextGlobalTypoSwitcher?.fontFamily === true && menuCloserTextGlobalTypographyData?.fontFamily ? `font-family: ${menuCloserTextGlobalTypographyData?.fontFamily};` : ''}
            ${menuCloserTextGlobalTypoSwitcher?.fontSize === true && menuCloserTextGlobalTypographyData?.fontSize ? `font-size: ${menuCloserTextGlobalTypographyData?.fontSize};` : ''}
            ${menuCloserTextGlobalTypoSwitcher?.fontWeight === true && menuCloserTextGlobalTypographyData?.fontWeight ? `font-weight: ${menuCloserTextGlobalTypographyData?.fontWeight};` : ''}
            ${menuCloserTextGlobalTypoSwitcher?.fontStyle === true && menuCloserTextGlobalTypographyData?.fontStyle ? `font-style: ${menuCloserTextGlobalTypographyData?.fontStyle};` : ''}
            ${menuCloserTextGlobalTypoSwitcher?.textTransform === true && menuCloserTextGlobalTypographyData?.textTransform ? `text-transform: ${menuCloserTextGlobalTypographyData?.textTransform};` : ''}
            ${menuCloserTextGlobalTypoSwitcher?.textDecoration === true && menuCloserTextGlobalTypographyData?.textDecoration ? `text-decoration: ${menuCloserTextGlobalTypographyData?.textDecoration};` : ''}
            ${menuCloserTextGlobalTypoSwitcher?.letterSpacing === true && menuCloserTextGlobalTypographyData?.letterSpacing ? `letter-spacing: ${menuCloserTextGlobalTypographyData?.letterSpacing};` : ''}
            ${menuCloserTextGlobalTypoSwitcher?.lineHeight === true && menuCloserTextGlobalTypographyData?.lineHeight ? `line-height: ${menuCloserTextGlobalTypographyData?.lineHeight};` : ''}
            
            ${menuCloserTextGlobalTypoSwitcher?.fontFamily === false && menuCloserTextFontFamily && menuCloserTextFontFamily !== 'Default' ? `font-family: ${menuCloserTextFontFamily};` : ''}
            ${menuCloserTextGlobalTypoSwitcher?.fontSize === false && menuCloserTextFontSize?.Desktop && menuCloserTextFontSizeUnits?.Desktop ? `font-size: ${menuCloserTextFontSize?.Desktop}${menuCloserTextFontSizeUnits?.Desktop};` : ''}
            ${menuCloserTextGlobalTypoSwitcher?.fontWeight === false && menuCloserTextFontWeight ? `font-weight: ${menuCloserTextFontWeight};` : ''}
            ${menuCloserTextGlobalTypoSwitcher?.fontStyle === false && menuCloserTextFontStyle ? `font-style: ${menuCloserTextFontStyle};` : ''}
            ${menuCloserTextGlobalTypoSwitcher?.textTransform === false && menuCloserTextTextTransform ? `text-transform: ${menuCloserTextTextTransform};` : ''}
            ${menuCloserTextGlobalTypoSwitcher?.textDecoration === false && menuCloserTextTextDecoration ? `text-decoration: ${menuCloserTextTextDecoration};` : ''}
            ${menuCloserTextGlobalTypoSwitcher?.letterSpacing === false && menuCloserTextLetterSpacing?.Desktop && menuCloserTextLetterSpacingUnits?.Desktop ? `letter-spacing: ${menuCloserTextLetterSpacing?.Desktop}${menuCloserTextLetterSpacingUnits?.Desktop};` : ''}
            ${menuCloserTextGlobalTypoSwitcher?.lineHeight === false && menuCloserTextLineHeight?.Desktop && menuCloserTextLineHeightUnits?.Desktop ? `line-height: ${menuCloserTextLineHeight?.Desktop}${menuCloserTextLineHeightUnits?.Desktop};` : ''}
            
            ${menuCloserTextBorder ? `border: ${menuCloserTextBorder};` : ''}
            ${menuCloserTextBorderColor ? `border-color: ${menuCloserTextBorderColor};` : ''}
            ${menuCloserTextDesktopPaddingWidth && menuCloserTextDesktopPadding?.top ? `padding: ${menuCloserTextDesktopPaddingWidth};` : ''}
            ${menuCloserTextDesktopMarginWidth && menuCloserTextDesktopMargin?.top ? `margin: ${menuCloserTextDesktopMarginWidth};` : ''}
            ${menuCloserTextDesktopBorderWidth && menuCloserTextDesktopBorder?.top ? `border-width: ${menuCloserTextDesktopBorderWidth};` : ''}
            ${menuCloserTextDesktopBorderRadiusWidth && menuCloserTextDesktopBorderRadius?.top ? `border-radius: ${menuCloserTextDesktopBorderRadiusWidth};` : ''}
            ${menuCloserTextBoxShadowCssValue ? `box-shadow: ${menuCloserTextBoxShadowCssValue};` : ''}
            ${menuCloserTextColor ? `color: ${menuCloserTextColor};` : ''}
            ${menuCloserTextBgColor ? `background-color: ${menuCloserTextBgColor};` : ''}
        }
        .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.text:hover{
            ${menuCloserTextHoverColor ? `color: ${menuCloserTextHoverColor};` : ''}
            ${menuCloserTextBgHoverColor ? `background-color: ${menuCloserTextBgHoverColor};` : ''}
            ${menuCloserTextBorderHoverColor ? `border-color: ${menuCloserTextBorderHoverColor};` : ''}
            ${menuCloserTextBoxShadowHoverCssValue ? `box-shadow: ${menuCloserTextBoxShadowHoverCssValue};` : ''}
        }	
        .${blockID}.fb-off-canvas-menu-block .fb-menu-overlay{
            ${offCanvasOverlayColorType === 'gradient' ? `
                background: ${offCanvasOverlayCustomGradientColorSwitcher && offCanvasOverlayCustomGradientColor ? offCanvasOverlayCustomGradientColor : offCanvasOverlayGradientColor};
                ${offCanvasOverlayCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${offCanvasOverlayGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}
                ${offCanvasOverlayBgColorType === "gradient"
            ? `background: ${offCanvasOverlayBackgroundCustomGradientColorSwitcher && offCanvasOverlayBackgroundCustomGradientColor
                ? offCanvasOverlayBackgroundCustomGradientColor
                : offCanvasOverlayBackgroundGradientColor
            };`
            : offCanvasOverlayBackgroundColor ? `background: ${offCanvasOverlayBackgroundColor};` : ''
            }
        }
        .${blockID}.fb-off-canvas-menu-block .fb-menu-overlay.active{
            ${offCanvasOverlayOpacity?.Desktop ? `opacity: ${offCanvasOverlayOpacity?.Desktop}${offCanvasOverlayOpacityUnits?.Desktop};` : ''}
        }
        .${blockID}.fb-off-canvas-menu-block .fb-menu-overlay:hover{
            ${offCanvasOverlayHoverColorType === 'gradient' ? `
                background: ${offCanvasOverlayHoverCustomGradientColorSwitcher && offCanvasOverlayHoverCustomGradientColor ? offCanvasOverlayHoverCustomGradientColor : offCanvasOverlayHoverGradientColor};
                ${offCanvasOverlayHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${offCanvasOverlayHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : ''}
                ${offCanvasOverlayHoverColorType === "gradient"
            ? `background: ${offCanvasOverlayHoverCustomGradientColorSwitcher && offCanvasOverlayHoverCustomGradientColor
                ? offCanvasOverlayHoverCustomGradientColor
                : offCanvasOverlayHoverGradientColor
            };`
            : offCanvasOverlayBackgroundHoverColor ? `background: ${offCanvasOverlayBackgroundHoverColor};` : ''
            }
        }
        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-off-canvas-menu-block{
                ${offCanvasGlobalZIndex?.Tablet ? `z-index: ${offCanvasGlobalZIndex?.Tablet};` : ''}
            }
            .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu{
                ${offCanvasPanelWidth?.Tablet ? `width: ${offCanvasPanelWidth?.Tablet}${offCanvasPanelWidthUnits?.Tablet};` : ''}
                ${offCanvasPanelHeight?.Tablet ? `height: ${offCanvasPanelHeight?.Tablet}${offCanvasPanelHeightUnits?.Tablet};` : ''}
                ${offCanvasPanelTabletPaddingStr && offCanvasPanelTabPadding?.top ? `padding: ${offCanvasPanelTabletPaddingStr};` : ''}
                ${offCanvasPanelTabletMarginStr && offCanvasPanelTabMargin?.top ? `margin: ${offCanvasPanelTabletMarginStr};` : ''}
                ${offCanvasPanelTabletBorderWidthStr && offCanvasPanelTabBorderWidth?.top ? `border-width: ${offCanvasPanelTabletBorderWidthStr};` : ''}
                ${offCanvasPanelTabletBorderRadiusStr && offCanvasPanelTabBorderRadiusWidth?.top ? `border-radius: ${offCanvasPanelTabletBorderRadiusStr};` : ''}
                ${tabletBackgroundNormalStyles}
            }
            .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu:hover{
                ${tabletBackgroundHoverStyles}
            }
            .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu-container{
                ${tabletGlobalBackgroundNormalStyles}
                ${globalTabletPadding && offCanvasGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && offCanvasGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
                ${offCanvasGlobalBorder ? `border: ${offCanvasGlobalBorder};` : ''}
                ${globalTabletBorderWidth && offCanvasGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && offCanvasGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }
            .${blockID}.fb-off-canvas-menu-block:hover .fb-off-canvas-menu-container{
                ${tabletGlobalBackgroundHoverStyles}
            }
            .${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon{
                ${offCanvasHamburgerIconBgWidth?.Tablet ? `width: ${offCanvasHamburgerIconBgWidth?.Tablet}${offCanvasHamburgerIconBgWidthUnits?.Tablet};` : ''}
                ${offCanvasHamburgerIconBgWidth?.Tablet ? `height: ${offCanvasHamburgerIconBgWidth?.Tablet}${offCanvasHamburgerIconBgWidthUnits?.Tablet};` : ''}
                ${offCanvashamburgerIconTabletBorderWidthStr && offCanvashamburgerIconTabBorderWidth?.top ? `border-width: ${offCanvashamburgerIconTabletBorderWidthStr};` : ''}
                ${offCanvashamburgerIconTabletBorderRadiusStr && offCanvashamburgerIconTabBorderRadiusWidth?.top ? `border-radius: ${offCanvashamburgerIconTabletBorderRadiusStr};` : ''}
                ${offCanvasHamburgerIconTabletMarginWidth && offCanvasHamburgerIconTabletMargin?.top ? `margin: ${offCanvasHamburgerIconTabletMarginWidth};` : ''}
                ${offCanvasHamburgerIconTabletPaddingWidth && offCanvasHamburgerIconTabletPadding?.top ? `padding: ${offCanvasHamburgerIconTabletPaddingWidth};` : ''}
            }
            .${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon svg{
                ${offCanvasHamburgerIconWidth?.Tablet ? `width: ${offCanvasHamburgerIconWidth?.Tablet}${offCanvasHamburgerIconWidthUnits?.Tablet};` : ''}
                ${offCanvasHamburgerIconWidth?.Tablet ? `height: ${offCanvasHamburgerIconWidth?.Tablet}${offCanvasHamburgerIconWidthUnits?.Tablet};` : ''}
            }
            .${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-text{
                ${menuOpenerTextTabletPaddingWidth && menuOpenerTextTabPadding?.top ? `padding: ${menuOpenerTextTabletPaddingWidth};` : ''}
                ${menuOpenerTextTabletMarginWidth && menuOpenerTextTabMargin?.top ? `margin: ${menuOpenerTextTabletMarginWidth};` : ''}
                ${menuOpenerTextTabletBorderWidth && menuOpenerTextTabletBorder?.top ? `border-width: ${menuOpenerTextTabletBorderWidth};` : ''}
                ${menuOpenerTextTabletBorderRadiusWidth && menuOpenerTextTabBorderRadius?.top ? `border-radius: ${menuOpenerTextTabletBorderRadiusWidth};` : ''}
            }
            .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.icon{
                ${offCanvasCloseIconBgWidth?.Tablet ? `width: ${offCanvasCloseIconBgWidth?.Tablet}${offCanvasCloseIconBgWidthUnits?.Tablet};` : ''}
                ${offCanvasCloseIconBgWidth?.Tablet ? `height: ${offCanvasCloseIconBgWidth?.Tablet}${offCanvasCloseIconBgWidthUnits?.Tablet};` : ''}
                ${offCanvasCloseIconTabletPaddingWidth && offCanvasCloseIconTabletPadding?.top ? `padding: ${offCanvasCloseIconTabletPaddingWidth};` : ''}
                ${offCanvasCloseIconTabletMarginWidth && offCanvasCloseIconTabletMargin?.top ? `margin: ${offCanvasCloseIconTabletMarginWidth};` : ''}
                ${offCanvasCloseIconTabletBorderWidthStr && offCanvasCloseIconTabBorderWidth?.top ? `border-width: ${offCanvasCloseIconTabletBorderWidthStr};` : ''}
                ${offCanvasCloseIconTabletBorderRadiusStr && offCanvasCloseIconTabBorderRadiusWidth?.top ? `border-radius: ${offCanvasCloseIconTabletBorderRadiusStr};` : ''}
            }
            .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.text{
                ${menuCloserTextTabletPaddingWidth && menuCloserTextTabPadding?.top ? `padding: ${menuCloserTextTabletPaddingWidth};` : ''}
                ${menuCloserTextTabletMarginWidth && menuCloserTextTabMargin?.top ? `margin: ${menuCloserTextTabletMarginWidth};` : ''}
                ${menuCloserTextTabletBorderWidth && menuCloserTextTabletBorder?.top ? `border-width: ${menuCloserTextTabletBorderWidth};` : ''}
                ${menuCloserTextTabletBorderRadiusWidth && menuCloserTextTabBorderRadius?.top ? `border-radius: ${menuCloserTextTabletBorderRadiusWidth};` : ''}
            }
        }

        @media only screen and (max-width: 768px) {
            .${blockID}.fb-off-canvas-menu-block{
                ${offCanvasGlobalZIndex?.Mobile ? `z-index: ${offCanvasGlobalZIndex?.Mobile};` : ''}
            }
            .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu{
                ${offCanvasPanelWidth?.Mobile ? `width: ${offCanvasPanelWidth?.Mobile}${offCanvasPanelWidthUnits?.Mobile};` : ''}
                ${offCanvasPanelHeight?.Mobile ? `height: ${offCanvasPanelHeight?.Mobile}${offCanvasPanelHeightUnits?.Mobile};` : ''}
                ${offCanvasPanelMobilePaddingStr && offCanvasPanelMobilePadding?.top ? `padding: ${offCanvasPanelMobilePaddingStr};` : ''}
                ${offCanvasPanelMobileMarginStr && offCanvasPanelMobileMargin?.top ? `margin: ${offCanvasPanelMobileMarginStr};` : ''}
                ${offCanvasPanelMobileBorderWidthStr && offCanvasPanelMobileBorderWidth?.top ? `border-width: ${offCanvasPanelMobileBorderWidthStr};` : ''}
                ${offCanvasPanelMobileBorderRadiusStr && offCanvasPanelMobileBorderRadiusWidth?.top ? `border-radius: ${offCanvasPanelMobileBorderRadiusStr};` : ''}
                ${mobileBackgroundNormalStyles}

            }
            .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu:hover{
                ${mobileBackgroundHoverStyles}
            }

            .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu-container{
                ${mobileGlobalBackgroundNormalStyles}
                ${globalMobilePadding && offCanvasGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && offCanvasGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
                ${offCanvasGlobalBorder ? `border: ${offCanvasGlobalBorder};` : ''}
                ${globalMobileBorderWidth && offCanvasGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && offCanvasGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }
            .${blockID}.fb-off-canvas-menu-block:hover .fb-off-canvas-menu-container{
                ${mobileGlobalBackgroundHoverStyles}
            }
            .${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon{
                ${offCanvasHamburgerIconBgWidth?.Mobile ? `width: ${offCanvasHamburgerIconBgWidth?.Mobile}${offCanvasHamburgerIconBgWidthUnits?.Mobile};` : ''}
                ${offCanvasHamburgerIconBgWidth?.Mobile ? `height: ${offCanvasHamburgerIconBgWidth?.Mobile}${offCanvasHamburgerIconBgWidthUnits?.Mobile};` : ''}
                ${offCanvashamburgerIconMobileBorderWidthStr && offCanvashamburgerIconMobileBorderWidth?.top ? `border-width: ${offCanvashamburgerIconMobileBorderWidthStr};` : ''}
                ${offCanvashamburgerIconMobileBorderRadiusStr && offCanvashamburgerIconMobileBorderRadiusWidth?.top ? `border-radius: ${offCanvashamburgerIconMobileBorderRadiusStr};` : ''}
                ${offCanvasHamburgerIconMobileMarginWidth && offCanvasHamburgerIconMobileMargin?.top ? `margin: ${offCanvasHamburgerIconMobileMarginWidth};` : ''}
                ${offCanvasHamburgerIconMobilePaddingWidth && offCanvasHamburgerIconMobilePadding?.top ? `padding: ${offCanvasHamburgerIconMobilePaddingWidth};` : ''}
            }
            .${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-icon svg{
                ${offCanvasHamburgerIconWidth?.Mobile ? `width: ${offCanvasHamburgerIconWidth?.Mobile}${offCanvasHamburgerIconWidthUnits?.Mobile};` : ''}
                ${offCanvasHamburgerIconWidth?.Mobile ? `height: ${offCanvasHamburgerIconWidth?.Mobile}${offCanvasHamburgerIconWidthUnits?.Mobile};` : ''}
            }
            .${blockID}.fb-off-canvas-menu-block .fb-menu-toggle-btn .fb-menu-text{
                ${menuOpenerTextMobilePaddingWidth && menuOpenerTextMobilePadding?.top ? `padding: ${menuOpenerTextMobilePaddingWidth};` : ''}
                ${menuOpenerTextMobileMarginWidth && menuOpenerTextMobileMargin?.top ? `margin: ${menuOpenerTextMobileMarginWidth};` : ''}
                ${menuOpenerTextMobileBorderWidth && menuOpenerTextMobileBorder?.top ? `border-width: ${menuOpenerTextMobileBorderWidth};` : ''}
                ${menuOpenerTextMobileBorderRadiusWidth && menuOpenerTextMobileBorderRadius?.top ? `border-radius: ${menuOpenerTextMobileBorderRadiusWidth};` : ''}
            }
            .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.icon{
                ${offCanvasCloseIconBgWidth?.Mobile ? `width: ${offCanvasCloseIconBgWidth?.Mobile}${offCanvasCloseIconBgWidthUnits?.Mobile};` : ''}
                ${offCanvasCloseIconBgWidth?.Mobile ? `height: ${offCanvasCloseIconBgWidth?.Mobile}${offCanvasCloseIconBgWidthUnits?.Mobile};` : ''}
                ${offCanvasCloseIconMobilePaddingWidth && offCanvasCloseIconMobilePadding?.top ? `padding: ${offCanvasCloseIconMobilePaddingWidth};` : ''}
                ${offCanvasCloseIconMobileMarginWidth && offCanvasCloseIconMobileMargin?.top ? `margin: ${offCanvasCloseIconMobileMarginWidth};` : ''}
                ${offCanvasCloseIconMobileBorderWidthStr && offCanvasCloseIconTabBorderWidth?.top ? `border-width: ${offCanvasCloseIconMobileBorderWidthStr};` : ''}
                ${offCanvasCloseIconMobileBorderRadiusStr && offCanvasCloseIconTabBorderRadiusWidth?.top ? `border-radius: ${offCanvasCloseIconMobileBorderRadiusStr};` : ''}
            }
            .${blockID}.fb-off-canvas-menu-block .fb-off-canvas-menu .fb-close-menu.text{
                ${menuCloserTextMobilePaddingWidth && menuCloserTextMobilePadding?.top ? `padding: ${menuCloserTextMobilePaddingWidth};` : ''}
                ${menuCloserTextMobileMarginWidth && menuCloserTextMobileMargin?.top ? `margin: ${menuCloserTextMobileMarginWidth};` : ''}
                ${menuCloserTextMobileBorderWidth && menuCloserTextMobileBorder?.top ? `border-width: ${menuCloserTextMobileBorderWidth};` : ''}
                ${menuCloserTextMobileBorderRadiusWidth && menuCloserTextMobileBorderRadius?.top ? `border-radius: ${menuCloserTextMobileBorderRadiusWidth};` : ''}
            }
        }
    `;

    const customCss = getCustomCss(offCanvasCustomCSS, `.${blockID}`);
        
    return `${offCanvasStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateOffCanvasStyle;