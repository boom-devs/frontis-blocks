/**
 * Call To Action Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateCallToActionStyle = (attributes) => {
    const {
		blockID,
		Heading_Background_Color,
		headingGlobalTypoSwitcher,
		headingGlobalTypographyData,
		headingFontFamily,
		headingFontSize,
		headingFontSizeUnits,
		headingFontWeight,
		headingFontStyle,
		headingTextTransform,
		headingTextDecoration,
		headingLetterSpacing,
		headingLetterSpacingUnits,
		headingLineHeight,
		headingLineHeightUnits,
		headingColor,
		headingHoverColor,
		Heading_Border,
		headingBorderColor,
		headingBorderHoverColor,
		headingPaddingUnits,
		headingDesktopPadding,
		headingTabPadding,
		headingMobilePadding,
		headingMarginUnits,
		headingDesktopMargin,
		headingTabMargin,
		headingMobileMargin,
		headingBorderUnits,
		headingDesktopBorder,
		headingTabBorder,
		headingMobileBorder,
		headingBorderRadiusUnits,
		headingDesktopBorderRadius,
		headingTabBorderRadius,
		headingMobileBorderRadius,

		descPaddingUnits,
		descDesktopPadding,
		descTabPadding,
		descMobilePadding,
		descMarginUnits,
		descDesktopMargin,
		descTabMargin,
		descMobileMargin,
		SubHeadingGlobalTypoSwitcher,
		SubHeadingGlobalTypographyData,
		SubHeadingTextDecoration,
		SubHeadingTextTransform,
		SubHeadingFontStyle,
		SubHeadingFontWeight,
		SubHeadingFontSizeUnits,
		SubHeadingFontSize,
		SubHeadingFontFamily,
		SubHeadingLetterSpacing,
		SubHeadingLetterSpacingUnits,
		SubHeadingLineHeight,
		SubHeadingLineHeightUnits,
		SubHeadingColor,
		SubHeadingHoverColor,

		buttonGlobalTypoSwitcher,
		buttonGlobalTypographyData,
		buttonFontFamily,
		buttonFontSize,
		buttonFontSizeUnits,
		buttonFontWeight,
		buttonFontStyle,
		buttonTextTransform,
		buttonTextDecoration,
		buttonLetterSpacing,
		buttonLetterSpacingUnits,
		buttonLineHeight,
		buttonLineHeightUnits,
		buttonTextColor,
		buttonTextHoverColor,
		buttonBgColor,
		buttonBgHoverColor,

		btnOnePaddingUnits,
		btnOneDesktopPadding,
		btnOneTabPadding,
		btnOneMobilePadding,
		btnOneMarginUnits,
		btnOneDesktopMargin,
		btnOneTabMargin,
		btnOneMobileMargin,
		btnIconRotate,

		infoButtonBorder,
		infoButtonBorderColor,
		infoButtonHoverBorderColor,

		btnOneBorderUnits,
		btnOneDesktopBorder,
		btnOneTabBorder,
		btnOneMobileBorder,
		btnOneBorderRadiusUnits,
		btnOneDesktopBorderRadius,
		btnOneTabBorderRadius,
		btnOneMobileBorderRadius,
		btnIconSize,
		btnIconSizeUnits,
		btnIconColor,
		btnIconHoverColor,
		btnTwoPaddingUnits,
		btnTwoDesktopPadding,
		btnTwoTabPadding,
		btnTwoMobilePadding,
		btnTwoMarginUnits,
		btnTwoDesktopMargin,
		btnTwoTabMargin,
		btnTwoMobileMargin,
		btnTwoBorder,
		btnTwoBorderColor,
		btnTwoHoverBorderColor,
		btnTwoBorderUnits,
		btnTwoDesktopBorder,
		btnTwoTabBorder,
		btnTwoMobileBorder,
		btnTwoBorderRadiusUnits,
		btnTwoDesktopBorderRadius,
		btnTwoTabBorderRadius,
		btnTwoMobileBorderRadius,
		btnTwoIconSize,
		btnTwoIconSizeUnits,
		btnTwoIconColor,
		btnTwoIconHoverColor,
		buttonTwoGlobalTypoSwitcher,
		buttonTwoGlobalTypographyData,
		buttonTwoFontFamily,
		buttonTwoFontSize,
		buttonTwoFontSizeUnits,
		buttonTwoFontWeight,
		buttonTwoFontStyle,
		buttonTwoTextTransform,
		buttonTwoTextDecoration,
		buttonTwoLetterSpacing,
		buttonTwoLetterSpacingUnits,
		buttonTwoLineHeight,
		buttonTwoLineHeightUnits,
		buttonTwoTextColor,
		buttonTwoTextHoverColor,
		buttonTwoBgColor,
		buttonTwoBgHoverColor,
		btnTwoIconRotate,
		ctaGlobalBackgroundType,
		ctaGlobalClassicColor,
		ctaGlobalGradientColor,
		ctaGlobalCustomGradientSwitcher,
		ctaGlobalCustomGradientInputValue,
		ctaGlobalBackgroundImageUrl,
		ctaGlobalBackgroundImagePosition,
		ctaGlobalBackgroundImageAttachment,
		ctaGlobalBackgroundImageSize,
		ctaGlobalBackgroundImageRepeat,
		hoverBackgroundType,
		hoverClassicColor,
		hoverGradientColor,
		hoverCustomGradientSwitcher,
		hoverCustomGradientInputValue,
		hoverBackgroundImageUrl,
		hoverBackgroundImagePosition,
		hoverBackgroundImageAttachment,
		hoverBackgroundImageSize,
		hoverBackgroundImageRepeat,
		globalBoxShadowCssValue,
		globalHoverBoxShadowCssValue,
		globalZIndex,
		ctaOverflow,
		globalPaddingUnits,
		globalPaddingDesktop,
		globalPaddingTablet,
		globalPaddingMobile,

		globalMarginUnits,
		globalMarginDesktop,
		globalMarginTablet,
		globalMarginMobile,

		globalBorder,
		globalBorderColor,
		globalBorderHoverColor,
		globalBorderUnits,
		globalBorderDesktop,
		globalBorderTablet,
		globalBorderMobile,

		globalBorderRadiusUnits,
		globalBorderRadiusDesktop,
		globalBorderRadiusTablet,
		globalBorderRadiusMobile,

		ctaCustomCSS,

		ctaPositionType,
		ctaHZOrientationType,
		ctaVROrientationType,
		ctaHZLeftOffset,
		ctaHZLeftOffsetUnits,
		ctaHZRightOffset,
		ctaHZRightOffsetUnits,
		ctaVRTopOffset,
		ctaVRTopOffsetUnits,
		ctaVRBottomOffset,
		ctaVRBottomOffsetUnits,

	} = attributes;

    /** Default padding for desktop **/
	const headingDesktopPaddingWidth = `${headingDesktopPadding?.top}${headingPaddingUnits?.Desktop} ${headingDesktopPadding?.right}${headingPaddingUnits?.Desktop} ${headingDesktopPadding?.bottom}${headingPaddingUnits?.Desktop} ${headingDesktopPadding?.left}${headingPaddingUnits?.Desktop}`;
	const headingTabletPaddingWidth = `${headingTabPadding?.top}${headingPaddingUnits?.Tablet} ${headingTabPadding?.right}${headingPaddingUnits?.Tablet} ${headingTabPadding?.bottom}${headingPaddingUnits?.Tablet} ${headingTabPadding?.left}${headingPaddingUnits?.Tablet}`;
	const headingMobilePaddingWidth = `${headingMobilePadding?.top}${headingPaddingUnits?.Mobile} ${headingMobilePadding?.right}${headingPaddingUnits?.Mobile} ${headingMobilePadding?.bottom}${headingPaddingUnits?.Mobile} ${headingMobilePadding?.left}${headingPaddingUnits?.Mobile}`;

    /** Default margin for desktop **/
	const headingDesktopMarginWidth = `${headingDesktopMargin?.top}${headingMarginUnits?.Desktop} ${headingDesktopMargin?.right}${headingMarginUnits?.Desktop} ${headingDesktopMargin?.bottom}${headingMarginUnits?.Desktop} ${headingDesktopMargin?.left}${headingMarginUnits?.Desktop}`;
	const headingTabletMarginWidth = `${headingTabMargin?.top}${headingMarginUnits?.Tablet} ${headingTabMargin?.right}${headingMarginUnits?.Tablet} ${headingTabMargin?.bottom}${headingMarginUnits?.Tablet} ${headingTabMargin?.left}${headingMarginUnits?.Tablet}`;
	const headingMobileMarginWidth = `${headingMobileMargin?.top}${headingMarginUnits?.Mobile} ${headingMobileMargin?.right}${headingMarginUnits?.Mobile} ${headingMobileMargin?.bottom}${headingMarginUnits?.Mobile} ${headingMobileMargin?.left}${headingMarginUnits?.Mobile}`;

    /** Default border for desktop **/
	const headingDesktopBorderWidth = `${headingDesktopBorder?.top}${headingBorderUnits?.Desktop} ${headingDesktopBorder?.right}${headingBorderUnits?.Desktop} ${headingDesktopBorder?.bottom}${headingBorderUnits?.Desktop} ${headingDesktopBorder?.left}${headingBorderUnits?.Desktop}`;
	const headingTabletBorderWidth = `${headingTabBorder?.top}${headingBorderUnits?.Tablet} ${headingTabBorder?.right}${headingBorderUnits?.Tablet} ${headingTabBorder?.bottom}${headingBorderUnits?.Tablet} ${headingTabBorder?.left}${headingBorderUnits?.Tablet}`;
	const headingMobileBorderWidth = `${headingMobileBorder?.top}${headingBorderUnits?.Mobile} ${headingMobileBorder?.right}${headingBorderUnits?.Mobile} ${headingMobileBorder?.bottom}${headingBorderUnits?.Mobile} ${headingMobileBorder?.left}${headingBorderUnits?.Mobile}`;

    /** Default border-radius for desktop **/
	const headingDesktopBorderRadiusWidth = `${headingDesktopBorderRadius?.top}${headingBorderRadiusUnits?.Desktop} ${headingDesktopBorderRadius?.right}${headingBorderRadiusUnits?.Desktop} ${headingDesktopBorderRadius?.bottom}${headingBorderRadiusUnits?.Desktop} ${headingDesktopBorderRadius?.left}${headingBorderRadiusUnits?.Desktop}`;
	const headingTabletBorderRadiusWidth = `${headingTabBorderRadius?.top}${headingBorderRadiusUnits?.Tablet} ${headingTabBorderRadius?.right}${headingBorderRadiusUnits?.Tablet} ${headingTabBorderRadius?.bottom}${headingBorderRadiusUnits?.Tablet} ${headingTabBorderRadius?.left}${headingBorderRadiusUnits?.Tablet}`;
	const headingMobileBorderRadiusWidth = `${headingMobileBorderRadius?.top}${headingBorderRadiusUnits?.Mobile} ${headingMobileBorderRadius?.right}${headingBorderRadiusUnits?.Mobile} ${headingMobileBorderRadius?.bottom}${headingBorderRadiusUnits?.Mobile} ${headingMobileBorderRadius?.left}${headingBorderRadiusUnits?.Mobile}`;

    /** Default padding for desktop **/
	const descDesktopPaddingWidth = `${descDesktopPadding?.top}${descPaddingUnits?.Desktop} ${descDesktopPadding?.right}${descPaddingUnits?.Desktop} ${descDesktopPadding?.bottom}${descPaddingUnits?.Desktop} ${descDesktopPadding?.left}${descPaddingUnits?.Desktop}`;
	const descTabletPaddingWidth = `${descTabPadding?.top}${descPaddingUnits?.Tablet} ${descTabPadding?.right}${descPaddingUnits?.Tablet} ${descTabPadding?.bottom}${descPaddingUnits?.Tablet} ${descTabPadding?.left}${descPaddingUnits?.Tablet}`;
	const descMobilePaddingWidth = `${descMobilePadding?.top}${descPaddingUnits?.Mobile} ${descMobilePadding?.right}${descPaddingUnits?.Mobile} ${descMobilePadding?.bottom}${descPaddingUnits?.Mobile} ${descMobilePadding?.left}${descPaddingUnits?.Mobile}`;

    /** Default margin for desktop **/
	const descDesktopMarginWidth = `${descDesktopMargin?.top}${descMarginUnits?.Desktop} ${descDesktopMargin?.right}${descMarginUnits?.Desktop} ${descDesktopMargin?.bottom}${descMarginUnits?.Desktop} ${descDesktopMargin?.left}${descMarginUnits?.Desktop}`;
	const descTabletMarginWidth = `${descTabMargin?.top}${descMarginUnits?.Tablet} ${descTabMargin?.right}${descMarginUnits?.Tablet} ${descTabMargin?.bottom}${descMarginUnits?.Tablet} ${descTabMargin?.left}${descMarginUnits?.Tablet}`;
	const descMobileMarginWidth = `${descMobileMargin?.top}${descMarginUnits?.Mobile} ${descMobileMargin?.right}${descMarginUnits?.Mobile} ${descMobileMargin?.bottom}${descMarginUnits?.Mobile} ${descMobileMargin?.left}${descMarginUnits?.Mobile}`;

    const buttonOneDesktopPadding = `${btnOneDesktopPadding?.top}${btnOnePaddingUnits?.Desktop} ${btnOneDesktopPadding?.right}${btnOnePaddingUnits?.Desktop} ${btnOneDesktopPadding?.bottom}${btnOnePaddingUnits?.Desktop} ${btnOneDesktopPadding?.left}${btnOnePaddingUnits?.Desktop}`;
	const buttonOneTabletPadding = `${btnOneTabPadding?.top}${btnOnePaddingUnits?.Tablet} ${btnOneTabPadding?.right}${btnOnePaddingUnits?.Tablet} ${btnOneTabPadding?.bottom}${btnOnePaddingUnits?.Tablet} ${btnOneTabPadding?.left}${btnOnePaddingUnits?.Tablet}`;
	const buttonOneMobilePadding = `${btnOneMobilePadding?.top}${btnOnePaddingUnits?.Mobile} ${btnOneMobilePadding?.right}${btnOnePaddingUnits?.Mobile} ${btnOneMobilePadding?.bottom}${btnOnePaddingUnits?.Mobile} ${btnOneMobilePadding?.left}${btnOnePaddingUnits?.Mobile}`;

    const btnOneDesktopMarginWidth = `${btnOneDesktopMargin?.top}${btnOneMarginUnits?.Desktop} ${btnOneDesktopMargin?.right}${btnOneMarginUnits?.Desktop} ${btnOneDesktopMargin?.bottom}${btnOneMarginUnits?.Desktop} ${btnOneDesktopMargin?.left}${btnOneMarginUnits?.Desktop}`;
	const btnOneTabletMarginWidth = `${btnOneTabMargin?.top}${btnOneMarginUnits?.Tablet} ${btnOneTabMargin?.right}${btnOneMarginUnits?.Tablet} ${btnOneTabMargin?.bottom}${btnOneMarginUnits?.Tablet} ${btnOneTabMargin?.left}${btnOneMarginUnits?.Tablet}`;
	const btnOneMobileMarginWidth = `${btnOneMobileMargin?.top}${btnOneMarginUnits?.Mobile} ${btnOneMobileMargin?.right}${btnOneMarginUnits?.Mobile} ${btnOneMobileMargin?.bottom}${btnOneMarginUnits?.Mobile} ${btnOneMobileMargin?.left}${btnOneMarginUnits?.Mobile}`;

    /** Default border for desktop **/
	const btnOneDesktopBorderWidth = `${btnOneDesktopBorder?.top}${btnOneBorderUnits?.Desktop} ${btnOneDesktopBorder?.right}${btnOneBorderUnits?.Desktop} ${btnOneDesktopBorder?.bottom}${btnOneBorderUnits?.Desktop} ${btnOneDesktopBorder?.left}${btnOneBorderUnits?.Desktop}`;
	const btnOneTabletBorderWidth = `${btnOneTabBorder?.top}${btnOneBorderUnits?.Tablet} ${btnOneTabBorder?.right}${btnOneBorderUnits?.Tablet} ${btnOneTabBorder?.bottom}${btnOneBorderUnits?.Tablet} ${btnOneTabBorder?.left}${btnOneBorderUnits?.Tablet}`;
	const btnOneMobileBorderWidth = `${btnOneMobileBorder?.top}${btnOneBorderUnits?.Mobile} ${btnOneMobileBorder?.right}${btnOneBorderUnits?.Mobile} ${btnOneMobileBorder?.bottom}${btnOneBorderUnits?.Mobile} ${btnOneMobileBorder?.left}${btnOneBorderUnits?.Mobile}`;

    /** Default border-radius for desktop **/
	const btnOneDesktopBorderRadiusWidth = `${btnOneDesktopBorderRadius?.top}${btnOneBorderRadiusUnits?.Desktop} ${btnOneDesktopBorderRadius?.right}${btnOneBorderRadiusUnits?.Desktop} ${btnOneDesktopBorderRadius?.bottom}${btnOneBorderRadiusUnits?.Desktop} ${btnOneDesktopBorderRadius?.left}${btnOneBorderRadiusUnits?.Desktop}`;
	const btnOneTabletBorderRadiusWidth = `${btnOneTabBorderRadius?.top}${btnOneBorderRadiusUnits?.Tablet} ${btnOneTabBorderRadius?.right}${btnOneBorderRadiusUnits?.Tablet} ${btnOneTabBorderRadius?.bottom}${btnOneBorderRadiusUnits?.Tablet} ${btnOneTabBorderRadius?.left}${btnOneBorderRadiusUnits?.Tablet}`;
	const btnOneMobileBorderRadiusWidth = `${btnOneMobileBorderRadius?.top}${btnOneBorderRadiusUnits?.Mobile} ${btnOneMobileBorderRadius?.right}${btnOneBorderRadiusUnits?.Mobile} ${btnOneMobileBorderRadius?.bottom}${btnOneBorderRadiusUnits?.Mobile} ${btnOneMobileBorderRadius?.left}${btnOneBorderRadiusUnits?.Mobile}`;

    /** Default padding for btnTwo */
    const buttonTwoDesktopPadding = `${btnTwoDesktopPadding?.top}${btnTwoPaddingUnits?.Desktop} ${btnTwoDesktopPadding?.right}${btnTwoPaddingUnits?.Desktop} ${btnTwoDesktopPadding?.bottom}${btnTwoPaddingUnits?.Desktop} ${btnTwoDesktopPadding?.left}${btnTwoPaddingUnits?.Desktop}`;
	const buttonTwoTabletPadding = `${btnTwoTabPadding?.top}${btnTwoPaddingUnits?.Tablet} ${btnTwoTabPadding?.right}${btnTwoPaddingUnits?.Tablet} ${btnTwoTabPadding?.bottom}${btnTwoPaddingUnits?.Tablet} ${btnTwoTabPadding?.left}${btnTwoPaddingUnits?.Tablet}`;
	const buttonTwoMobilePadding = `${btnTwoMobilePadding?.top}${btnTwoPaddingUnits?.Mobile} ${btnTwoMobilePadding?.right}${btnTwoPaddingUnits?.Mobile} ${btnTwoMobilePadding?.bottom}${btnTwoPaddingUnits?.Mobile} ${btnTwoMobilePadding?.left}${btnTwoPaddingUnits?.Mobile}`;

    /** Default margin for btnTwo */
    const btnTwoDesktopMarginWidth = `${btnTwoDesktopMargin?.top}${btnTwoMarginUnits?.Desktop} ${btnTwoDesktopMargin?.right}${btnTwoMarginUnits?.Desktop} ${btnTwoDesktopMargin?.bottom}${btnTwoMarginUnits?.Desktop} ${btnTwoDesktopMargin?.left}${btnTwoMarginUnits?.Desktop}`;
	const btnTwoTabletMarginWidth = `${btnTwoTabMargin?.top}${btnTwoMarginUnits?.Tablet} ${btnTwoTabMargin?.right}${btnTwoMarginUnits?.Tablet} ${btnTwoTabMargin?.bottom}${btnTwoMarginUnits?.Tablet} ${btnTwoTabMargin?.left}${btnTwoMarginUnits?.Tablet}`;
	const btnTwoMobileMarginWidth = `${btnTwoMobileMargin?.top}${btnTwoMarginUnits?.Mobile} ${btnTwoMobileMargin?.right}${btnTwoMarginUnits?.Mobile} ${btnTwoMobileMargin?.bottom}${btnTwoMarginUnits?.Mobile} ${btnTwoMobileMargin?.left}${btnTwoMarginUnits?.Mobile}`;

    /** Default border for btnTwo */
	const btnTwoDesktopBorderWidthStyle = `${btnTwoDesktopBorder?.top}${btnTwoBorderUnits?.Desktop} ${btnTwoDesktopBorder?.right}${btnTwoBorderUnits?.Desktop} ${btnTwoDesktopBorder?.bottom}${btnTwoBorderUnits?.Desktop} ${btnTwoDesktopBorder?.left}${btnTwoBorderUnits?.Desktop}`;
	const btnTwoTabletBorderWidthStyle = `${btnTwoTabBorder?.top}${btnTwoBorderUnits?.Tablet} ${btnTwoTabBorder?.right}${btnTwoBorderUnits?.Tablet} ${btnTwoTabBorder?.bottom}${btnTwoBorderUnits?.Tablet} ${btnTwoTabBorder?.left}${btnTwoBorderUnits?.Tablet}`;
	const btnTwoMobileBorderWidthStyle = `${btnTwoMobileBorder?.top}${btnTwoBorderUnits?.Mobile} ${btnTwoMobileBorder?.right}${btnTwoBorderUnits?.Mobile} ${btnTwoMobileBorder?.bottom}${btnTwoBorderUnits?.Mobile} ${btnTwoMobileBorder?.left}${btnTwoBorderUnits?.Mobile}`;

    /** Default border-radius for btnTwo */
    const btnTwoDesktopBorderRadiusWidthStyle = `${btnTwoDesktopBorderRadius?.top}${btnTwoBorderRadiusUnits?.Desktop} ${btnTwoDesktopBorderRadius?.right}${btnTwoBorderRadiusUnits?.Desktop} ${btnTwoDesktopBorderRadius?.bottom}${btnTwoBorderRadiusUnits?.Desktop} ${btnTwoDesktopBorderRadius?.left}${btnTwoBorderRadiusUnits?.Desktop}`;
	const btnTwoTabletBorderRadiusWidthStyle = `${btnTwoTabBorderRadius?.top}${btnTwoBorderRadiusUnits?.Tablet} ${btnTwoTabBorderRadius?.right}${btnTwoBorderRadiusUnits?.Tablet} ${btnTwoTabBorderRadius?.bottom}${btnTwoBorderRadiusUnits?.Tablet} ${btnTwoTabBorderRadius?.left}${btnTwoBorderRadiusUnits?.Tablet}`;
	const btnTwoMobileBorderRadiusWidthStyle = `${btnTwoMobileBorderRadius?.top}${btnTwoBorderRadiusUnits?.Mobile} ${btnTwoMobileBorderRadius?.right}${btnTwoBorderRadiusUnits?.Mobile} ${btnTwoMobileBorderRadius?.bottom}${btnTwoBorderRadiusUnits?.Mobile} ${btnTwoMobileBorderRadius?.left}${btnTwoBorderRadiusUnits?.Mobile}`;

    /** Global Padding, Margin, Border, Border Radius start **/
    const DesktopPadding = `${globalPaddingDesktop?.top}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.right}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.bottom}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.left}${globalPaddingUnits?.Desktop}`;
	const TabletPadding = `${globalPaddingTablet?.top}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.right}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.bottom}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.left}${globalPaddingUnits?.Tablet}`;
	const MobilePadding = `${globalPaddingMobile?.top}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.right}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.bottom}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.left}${globalPaddingUnits?.Mobile}`;

    const DesktopMargin = `${globalMarginDesktop?.top}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.right}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.bottom}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.left}${globalMarginUnits?.Desktop}`;
	const TabletMargin = `${globalMarginTablet?.top}${globalMarginUnits?.Tablet} ${globalMarginTablet?.right}${globalMarginUnits?.Tablet} ${globalMarginTablet?.bottom}${globalMarginUnits?.Tablet} ${globalMarginTablet?.left}${globalMarginUnits?.Tablet}`;
	const MobileMargin = `${globalMarginMobile?.top}${globalMarginUnits?.Mobile} ${globalMarginMobile?.right}${globalMarginUnits?.Mobile} ${globalMarginMobile?.bottom}${globalMarginUnits?.Mobile} ${globalMarginMobile?.left}${globalMarginUnits?.Mobile}`;

    const BorderDesktopWidth = `${globalBorderDesktop?.top}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.right}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.bottom}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.left}${globalBorderUnits?.Desktop}`;
	const BorderTabletWidth = `${globalBorderTablet?.top}${globalBorderUnits?.Tablet} ${globalBorderTablet?.right}${globalBorderUnits?.Tablet} ${globalBorderTablet?.bottom}${globalBorderUnits?.Tablet} ${globalBorderTablet?.left}${globalBorderUnits?.Tablet}`;
	const BorderMobileWidth = `${globalBorderMobile?.top}${globalBorderUnits?.Mobile} ${globalBorderMobile?.right}${globalBorderUnits?.Mobile} ${globalBorderMobile?.bottom}${globalBorderUnits?.Mobile} ${globalBorderMobile?.left}${globalBorderUnits?.Mobile}`;

    const BorderRadiusDesktopWidth = `${globalBorderRadiusDesktop?.top}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.right}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.bottom}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.left}${globalBorderRadiusUnits?.Desktop}`;
    const BorderRadiusTabletWidth = `${globalBorderRadiusTablet?.top}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.right}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.bottom}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.left}${globalBorderRadiusUnits?.Tablet}`;
    const BorderRadiusMobileWidth = `${globalBorderRadiusMobile?.top}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.right}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.bottom}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.left}${globalBorderRadiusUnits?.Mobile}`;
    /** Global Padding, Margin, Border, Border Radius end **/
    
    /** CTA generate Style **/
    const ctaContentStyle = `
        .fb-cta-main-wrapper.${blockID} {
            ${ctaPositionType === 'default' ? `position: relative;` : ''}
            ${ctaPositionType !== 'default' && ctaPositionType !== 'relative' ? `width: 100%;` : ''}
            ${ctaPositionType !== 'default' ? `position: ${ctaPositionType};` : ''}
            ${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaHZOrientationType === 'left' && ctaHZLeftOffset?.Desktop ? `left: ${ctaHZLeftOffset?.Desktop}${ctaHZLeftOffsetUnits?.Desktop};` : ''}
            ${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaHZOrientationType === 'right' && ctaHZRightOffset?.Desktop ? `right: ${ctaHZRightOffset?.Desktop}${ctaHZRightOffsetUnits?.Desktop};` : ''}
            ${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaVROrientationType === 'top' && ctaVRTopOffset?.Desktop ? `top: ${ctaVRTopOffset?.Desktop}${ctaVRTopOffsetUnits?.Desktop};` : ''}
            ${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaVROrientationType === 'bottom' && ctaVRBottomOffset?.Desktop ? `bottom: ${ctaVRBottomOffset?.Desktop}${ctaVRBottomOffsetUnits?.Desktop};` : ''}
            ${globalZIndex?.Desktop ? `z-index: ${globalZIndex?.Desktop};` : ''}
            ${ctaOverflow !== 'default' ? `overflow: ${ctaOverflow};` : ''}
        }
        .fb-cta-content-wrapper.${blockID} {
            ${DesktopPadding && globalPaddingDesktop?.top ? `padding: ${DesktopPadding};` : ""}
            ${DesktopMargin && globalMarginDesktop?.top ? `margin: ${DesktopMargin};` : ""}
            ${globalBorder ? `border: ${globalBorder};` : ""}
            ${BorderDesktopWidth && globalBorderDesktop?.top ? `border-width: ${BorderDesktopWidth};` : ""}
            ${BorderRadiusDesktopWidth && globalBorderRadiusDesktop?.top ? `border-radius: ${BorderRadiusDesktopWidth} !important;` : ""}
            ${globalBorderColor ? `border-color: ${globalBorderColor};` : ""}
            ${globalBoxShadowCssValue ? `box-shadow: ${globalBoxShadowCssValue};` : ""}
            ${ctaGlobalBackgroundType === "gradient"
            ? (ctaGlobalCustomGradientSwitcher && ctaGlobalCustomGradientInputValue
                ? `background: ${ctaGlobalCustomGradientInputValue};`
                : (ctaGlobalGradientColor
                    ? `background: ${ctaGlobalGradientColor};`
                    : `background: ${ctaGlobalClassicColor};`))
            : (ctaGlobalBackgroundImageUrl && ctaGlobalBackgroundImageUrl !== "null"
                ? `
                        ${ctaGlobalBackgroundImageUrl ? `background-image: url(${ctaGlobalBackgroundImageUrl});` : ""}
                        ${ctaGlobalBackgroundImagePosition ? `background-position: ${ctaGlobalBackgroundImagePosition};` : ""}
                        ${ctaGlobalBackgroundImageAttachment ? `background-attachment: ${ctaGlobalBackgroundImageAttachment};` : ""}
                        ${ctaGlobalBackgroundImageRepeat ? `background-repeat: ${ctaGlobalBackgroundImageRepeat};` : ""}
                        ${ctaGlobalBackgroundImageSize ? `background-size: ${ctaGlobalBackgroundImageSize};` : ""} 
                    `
                : ctaGlobalClassicColor ? `background: ${ctaGlobalClassicColor};` : '')
        }
            transition: all .3s ease-in-out;
        }

        .fb-cta-content-wrapper.${blockID}:hover {
            ${hoverBackgroundType === "gradient" ? `background: ${hoverCustomGradientSwitcher && hoverCustomGradientInputValue ? hoverCustomGradientInputValue : hoverGradientColor};` : hoverBackgroundImageUrl && hoverBackgroundImageUrl !== "null" ? `
            ${hoverBackgroundImageUrl ? `background-image: url(${hoverBackgroundImageUrl});` : ""}
            ${hoverBackgroundImagePosition ? `background-position: ${hoverBackgroundImagePosition};` : ""}
            ${hoverBackgroundImageAttachment ? `background-attachment: ${hoverBackgroundImageAttachment};` : ""}
            ${hoverBackgroundImageRepeat ? `background-repeat: ${hoverBackgroundImageRepeat};` : ""}
            ${hoverBackgroundImageSize ? `background-size: ${hoverBackgroundImageSize};` : ""} `
            : hoverClassicColor ? `background: ${hoverClassicColor};` : ''}
            ${globalHoverBoxShadowCssValue ? `box-shadow: ${globalHoverBoxShadowCssValue};` : ""}
            ${globalBorderHoverColor ? `border-color: ${globalBorderHoverColor};` : ""}
        }
        .fb-cta-content-wrapper.${blockID} .fb-heading,
        .fb-cta-content-wrapper.${blockID} .fb-title-dynamic-link {
            ${headingColor ? `color: ${headingColor};` : ""}
            ${Heading_Background_Color ? `background-color: ${Heading_Background_Color};` : ""}

            ${headingGlobalTypoSwitcher?.fontFamily === true && headingGlobalTypographyData?.fontFamily ? `font-family: ${headingGlobalTypographyData?.fontFamily};` : ''}
            ${headingGlobalTypoSwitcher?.fontSize === true && headingGlobalTypographyData?.fontSize ? `font-size: ${headingGlobalTypographyData?.fontSize};` : ''}
            ${headingGlobalTypoSwitcher?.fontWeight === true && headingGlobalTypographyData?.fontWeight ? `font-weight: ${headingGlobalTypographyData?.fontWeight};` : ''}
            ${headingGlobalTypoSwitcher?.fontStyle === true && headingGlobalTypographyData?.fontStyle ? `font-style: ${headingGlobalTypographyData?.fontStyle};` : ''}
            ${headingGlobalTypoSwitcher?.textTransform === true && headingGlobalTypographyData?.textTransform ? `text-transform: ${headingGlobalTypographyData?.textTransform};` : ''}
            ${headingGlobalTypoSwitcher?.textDecoration === true && headingGlobalTypographyData?.textDecoration ? `text-decoration: ${headingGlobalTypographyData?.textDecoration};` : ''}
            ${headingGlobalTypoSwitcher?.letterSpacing === true && headingGlobalTypographyData?.letterSpacing ? `letter-spacing: ${headingGlobalTypographyData?.letterSpacing};` : ''}
            ${headingGlobalTypoSwitcher?.lineHeight === true && headingGlobalTypographyData?.lineHeight ? `line-height: ${headingGlobalTypographyData?.lineHeight};` : ''}

            ${headingGlobalTypoSwitcher?.fontFamily === false && headingFontFamily && headingFontFamily !== "Default" ? `font-family: ${headingFontFamily};` : ''}
            ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Desktop && headingFontSizeUnits?.Desktop ? `font-size: ${headingFontSize?.Desktop}${headingFontSizeUnits?.Desktop};` : ''}
            ${headingGlobalTypoSwitcher?.fontWeight === false && headingFontWeight ? `font-weight: ${headingFontWeight};` : ''}
            ${headingGlobalTypoSwitcher?.fontStyle === false && headingFontStyle ? `font-style: ${headingFontStyle};` : ''}
            ${headingGlobalTypoSwitcher?.textTransform === false && headingTextTransform ? `text-transform: ${headingTextTransform};` : ''}
            ${headingGlobalTypoSwitcher?.textDecoration === false && headingTextDecoration ? `text-decoration: ${headingTextDecoration};` : ''}
            ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Desktop && headingLetterSpacingUnits?.Desktop ? `letter-spacing: ${headingLetterSpacing?.Desktop}${headingLetterSpacingUnits?.Desktop};` : ''}
            ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Desktop && headingLineHeightUnits?.Desktop ? `line-height: ${headingLineHeight?.Desktop}${headingLineHeightUnits?.Desktop};` : ''}
            
            ${headingDesktopPaddingWidth && headingDesktopPadding?.top ? `padding: ${headingDesktopPaddingWidth};` : ""}
            ${headingDesktopMarginWidth && headingDesktopMargin?.top ? `margin: ${headingDesktopMarginWidth};` : ""}
            ${Heading_Border ? `border: ${Heading_Border};` : ""}
            ${headingBorderColor ? `border-color: ${headingBorderColor};` : ""}
            ${headingDesktopBorderWidth && headingDesktopBorder?.top ? `border-width: ${headingDesktopBorderWidth};` : ""}
            ${headingDesktopBorderRadiusWidth && headingDesktopBorderRadius?.top ? `border-radius: ${headingDesktopBorderRadiusWidth};` : ""}
            transition: all .3s ease-in-out;
        }
        .fb-cta-content-wrapper.${blockID}:hover .fb-heading,
        .fb-cta-content-wrapper.${blockID}:hover .fb-title-dynamic-link {
            ${headingHoverColor ? `color: ${headingHoverColor};` : ""}
            ${headingBorderHoverColor ? `border-color: ${headingBorderHoverColor};` : ""}
        }
        
        .fb-cta-content-wrapper.${blockID} .fb-description,
        .fb-cta-content-wrapper.${blockID} .fb-description-dynamic-link {
            ${SubHeadingColor ? `color: ${SubHeadingColor};` : ""}
            ${descDesktopPaddingWidth && descDesktopPadding?.top ? `padding: ${descDesktopPaddingWidth};` : ""}
            ${descDesktopMarginWidth && descDesktopMargin?.top ? `margin: ${descDesktopMarginWidth};` : ""}

            ${SubHeadingGlobalTypoSwitcher?.fontFamily === true && SubHeadingGlobalTypographyData?.fontFamily ? `font-family: ${SubHeadingGlobalTypographyData?.fontFamily};` : ''}
            ${SubHeadingGlobalTypoSwitcher?.fontSize === true && SubHeadingGlobalTypographyData?.fontSize ? `font-size: ${SubHeadingGlobalTypographyData?.fontSize};` : ''}
            ${SubHeadingGlobalTypoSwitcher?.fontWeight === true && SubHeadingGlobalTypographyData?.fontWeight ? `font-weight: ${SubHeadingGlobalTypographyData?.fontWeight};` : ''}
            ${SubHeadingGlobalTypoSwitcher?.fontStyle === true && SubHeadingGlobalTypographyData?.fontStyle ? `font-style: ${SubHeadingGlobalTypographyData?.fontStyle};` : ''}
            ${SubHeadingGlobalTypoSwitcher?.textTransform === true && SubHeadingGlobalTypographyData?.textTransform ? `text-transform: ${SubHeadingGlobalTypographyData?.textTransform};` : ''}
            ${SubHeadingGlobalTypoSwitcher?.textDecoration === true && SubHeadingGlobalTypographyData?.textDecoration ? `text-decoration: ${SubHeadingGlobalTypographyData?.textDecoration};` : ''}
            ${SubHeadingGlobalTypoSwitcher?.letterSpacing === true && SubHeadingGlobalTypographyData?.letterSpacing ? `letter-spacing: ${SubHeadingGlobalTypographyData?.letterSpacing};` : ''}
            ${SubHeadingGlobalTypoSwitcher?.lineHeight === true && SubHeadingGlobalTypographyData?.lineHeight ? `line-height: ${SubHeadingGlobalTypographyData?.lineHeight};` : ''}
            
            ${SubHeadingGlobalTypoSwitcher?.fontFamily === false && SubHeadingFontFamily && SubHeadingFontFamily !== "Default" ? `font-family: ${SubHeadingFontFamily};` : ''}
            ${SubHeadingGlobalTypoSwitcher?.fontSize === false && SubHeadingFontSize?.Desktop && SubHeadingFontSizeUnits?.Desktop ? `font-size: ${SubHeadingFontSize?.Desktop}${SubHeadingFontSizeUnits?.Desktop};` : ''}
            ${SubHeadingGlobalTypoSwitcher?.fontWeight === false && SubHeadingFontWeight ? `font-weight: ${SubHeadingFontWeight};` : ''}
            ${SubHeadingGlobalTypoSwitcher?.fontStyle === false && SubHeadingFontStyle ? `font-style: ${SubHeadingFontStyle};` : ''}
            ${SubHeadingGlobalTypoSwitcher?.textTransform === false && SubHeadingTextTransform ? `text-transform: ${SubHeadingTextTransform};` : ''}
            ${SubHeadingGlobalTypoSwitcher?.textDecoration === false && SubHeadingTextDecoration ? `text-decoration: ${SubHeadingTextDecoration};` : ''}
            ${SubHeadingGlobalTypoSwitcher?.letterSpacing === false && SubHeadingLetterSpacing?.Desktop && SubHeadingLetterSpacingUnits?.Desktop ? `letter-spacing: ${SubHeadingLetterSpacing?.Desktop}${SubHeadingLetterSpacingUnits?.Desktop};` : ''}
            ${SubHeadingGlobalTypoSwitcher?.lineHeight === false && SubHeadingLineHeight?.Desktop && SubHeadingLineHeightUnits?.Desktop ? `line-height: ${SubHeadingLineHeight?.Desktop}${SubHeadingLineHeightUnits?.Desktop};` : ''}
        }
        .fb-cta-content-wrapper.${blockID}:hover .fb-description,
        .fb-cta-content-wrapper.${blockID}:hover .fb-description-dynamic-link {
            ${SubHeadingHoverColor ? `color: ${SubHeadingHoverColor};` : ""}
        }
        .fb-cta-content-wrapper.${blockID} .fb-cta-buttons-wrapper{
            align-items: center;
            display: flex;
            flex-wrap: wrap;
            gap: 10px
        }
        .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper {
             ${btnOneDesktopMarginWidth && btnOneDesktopMargin?.top ? `margin: ${btnOneDesktopMarginWidth};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper .fb-cta-button{
            ${buttonGlobalTypoSwitcher?.fontFamily === true && buttonGlobalTypographyData?.fontFamily ? `font-family: ${buttonGlobalTypographyData?.fontFamily};` : ''}
            ${buttonGlobalTypoSwitcher?.fontSize === true && buttonGlobalTypographyData?.fontSize ? `font-size: ${buttonGlobalTypographyData?.fontSize};` : ''}
            ${buttonGlobalTypoSwitcher?.fontWeight === true && buttonGlobalTypographyData?.fontWeight ? `font-weight: ${buttonGlobalTypographyData?.fontWeight};` : ''}
            ${buttonGlobalTypoSwitcher?.fontStyle === true && buttonGlobalTypographyData?.fontStyle ? `font-style: ${buttonGlobalTypographyData?.fontStyle};` : ''}
            ${buttonGlobalTypoSwitcher?.textTransform === true && buttonGlobalTypographyData?.textTransform ? `text-transform: ${buttonGlobalTypographyData?.textTransform};` : ''}
            ${buttonGlobalTypoSwitcher?.textDecoration === true && buttonGlobalTypographyData?.textDecoration ? `text-decoration: ${buttonGlobalTypographyData?.textDecoration};` : ''}
            ${buttonGlobalTypoSwitcher?.letterSpacing === true && buttonGlobalTypographyData?.letterSpacing ? `letter-spacing: ${buttonGlobalTypographyData?.letterSpacing};` : ''}
            ${buttonGlobalTypoSwitcher?.lineHeight === true && buttonGlobalTypographyData?.lineHeight ? `line-height: ${buttonGlobalTypographyData?.lineHeight};` : ''}
                
            ${buttonGlobalTypoSwitcher?.fontFamily === false && buttonFontFamily && buttonFontFamily !== "Default" ? `font-family: ${buttonFontFamily};` : ''}
            ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Desktop && buttonFontSizeUnits?.Desktop ? `font-size: ${buttonFontSize?.Desktop}${buttonFontSizeUnits?.Desktop};` : ''}
            ${buttonGlobalTypoSwitcher?.fontWeight === false && buttonFontWeight ? `font-weight: ${buttonFontWeight};` : ''}
            ${buttonGlobalTypoSwitcher?.fontStyle === false && buttonFontStyle ? `font-style: ${buttonFontStyle};` : ''}
            ${buttonGlobalTypoSwitcher?.textTransform === false && buttonTextTransform ? `text-transform: ${buttonTextTransform};` : ''}
            ${buttonGlobalTypoSwitcher?.textDecoration === false && buttonTextDecoration ? `text-decoration: ${buttonTextDecoration};` : ''}
            ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Desktop && buttonLetterSpacingUnits?.Desktop ? `letter-spacing: ${buttonLetterSpacing?.Desktop}${buttonLetterSpacingUnits?.Desktop};` : ''}
            ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Desktop && buttonLineHeightUnits?.Desktop ? `line-height: ${buttonLineHeight?.Desktop}${buttonLineHeightUnits?.Desktop};` : ''}
            
            ${buttonTextColor ? `color: ${buttonTextColor};` : ""}

            display: inline-flex;
            align-items: center;
            gap: 10px;
            ${buttonOneDesktopPadding && btnOneDesktopPadding?.top ? `padding: ${buttonOneDesktopPadding};` : ''}
            ${infoButtonBorder ? `border: ${infoButtonBorder};` : ""}
            ${infoButtonBorderColor ? `border-color: ${infoButtonBorderColor};` : ""}
            ${btnOneDesktopBorderWidth && btnOneDesktopBorder?.top ? `border-width: ${btnOneDesktopBorderWidth};` : ""}
            ${buttonBgColor ? `background-color: ${buttonBgColor};` : ""}
            ${btnOneDesktopBorderRadiusWidth && btnOneDesktopBorderRadius?.top ? `border-radius: ${btnOneDesktopBorderRadiusWidth};` : ""}
        }
        .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper:hover .fb-cta-button{
            ${buttonTextHoverColor ? `color: ${buttonTextHoverColor};` : ""}	
        }
        .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper:hover {
            ${buttonBgHoverColor ? `background-color: ${buttonBgHoverColor};` : ""}
            ${infoButtonHoverBorderColor ? `border-color: ${infoButtonHoverBorderColor};` : ""}
        }
        .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper {
            ${btnTwoDesktopMarginWidth && btnTwoDesktopMargin?.top ? `margin: ${btnTwoDesktopMarginWidth};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper .fb-cta-button {
            ${buttonTwoGlobalTypoSwitcher?.fontFamily === true && buttonTwoGlobalTypographyData?.fontFamily ? `font-family: ${buttonTwoGlobalTypographyData?.fontFamily};` : ''}
            ${buttonTwoGlobalTypoSwitcher?.fontSize === true && buttonTwoGlobalTypographyData?.fontSize ? `font-size: ${buttonTwoGlobalTypographyData?.fontSize};` : ''}
            ${buttonTwoGlobalTypoSwitcher?.fontWeight === true && buttonTwoGlobalTypographyData?.fontWeight ? `font-weight: ${buttonTwoGlobalTypographyData?.fontWeight};` : ''}
            ${buttonTwoGlobalTypoSwitcher?.fontStyle === true && buttonTwoGlobalTypographyData?.fontStyle ? `font-style: ${buttonTwoGlobalTypographyData?.fontStyle};` : ''}
            ${buttonTwoGlobalTypoSwitcher?.textTransform === true && buttonTwoGlobalTypographyData?.textTransform ? `text-transform: ${buttonTwoGlobalTypographyData?.textTransform};` : ''}
            ${buttonTwoGlobalTypoSwitcher?.textDecoration === true && buttonTwoGlobalTypographyData?.textDecoration ? `text-decoration: ${buttonTwoGlobalTypographyData?.textDecoration};` : ''}
            ${buttonTwoGlobalTypoSwitcher?.letterSpacing === true && buttonTwoGlobalTypographyData?.letterSpacing ? `letter-spacing: ${buttonTwoGlobalTypographyData?.letterSpacing};` : ''}
            ${buttonTwoGlobalTypoSwitcher?.lineHeight === true && buttonTwoGlobalTypographyData?.lineHeight ? `line-height: ${buttonTwoGlobalTypographyData?.lineHeight};` : ''}
            
            ${buttonTwoGlobalTypoSwitcher?.fontFamily === false && buttonTwoFontFamily && buttonTwoFontFamily !== "Default" ? `font-family: ${buttonTwoFontFamily};` : ""}
            ${buttonTwoGlobalTypoSwitcher?.fontSize === false && buttonTwoFontSize?.Desktop && buttonTwoFontSizeUnits?.Desktop ? `font-size: ${buttonTwoFontSize?.Desktop}${buttonTwoFontSizeUnits?.Desktop};` : ""}
            ${buttonTwoGlobalTypoSwitcher?.fontWeight === false && buttonTwoFontWeight ? `font-weight: ${buttonTwoFontWeight};` : ""}
            ${buttonTwoGlobalTypoSwitcher?.fontStyle === false && buttonTwoFontStyle ? `font-style: ${buttonTwoFontStyle};` : ""}
            ${buttonTwoGlobalTypoSwitcher?.textTransform === false && buttonTwoTextTransform ? `text-transform: ${buttonTwoTextTransform};` : ""}
            ${buttonTwoGlobalTypoSwitcher?.textDecoration === false && buttonTwoTextDecoration ? `text-decoration: ${buttonTwoTextDecoration};` : ""}
            ${buttonTwoGlobalTypoSwitcher?.letterSpacing === false && buttonTwoLetterSpacing?.Desktop && buttonTwoLetterSpacingUnits?.Desktop ? `letter-spacing: ${buttonTwoLetterSpacing?.Desktop}${buttonTwoLetterSpacingUnits?.Desktop};` : ""}
            ${buttonTwoGlobalTypoSwitcher?.lineHeight === false && buttonTwoLineHeight?.Desktop && buttonTwoLineHeightUnits?.Desktop ? `line-height: ${buttonTwoLineHeight?.Desktop}${buttonTwoLineHeightUnits?.Desktop};` : ""}
            
            ${buttonTwoTextColor ? `color: ${buttonTwoTextColor};` : ""}

            display: inline-flex;
            align-items: center;
            gap: 10px;
            ${buttonTwoDesktopPadding && btnTwoDesktopPadding?.top ? `padding: ${buttonTwoDesktopPadding};` : ''}
            ${btnTwoBorder ? `border: ${btnTwoBorder};` : ""}
            ${btnTwoBorderColor ? `border-color: ${btnTwoBorderColor};` : ""}
            ${btnTwoDesktopBorderWidthStyle && btnTwoDesktopBorder?.top ? `border-width: ${btnTwoDesktopBorderWidthStyle};` : ""}
            ${buttonTwoBgColor ? `background-color: ${buttonTwoBgColor};` : ""}
            ${btnTwoDesktopBorderRadiusWidthStyle && btnTwoDesktopBorderRadius?.top ? `border-radius: ${btnTwoDesktopBorderRadiusWidthStyle};` : ""}
        }
        .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper:hover .fb-cta-button{
            ${buttonTwoTextHoverColor ? `color: ${buttonTwoTextHoverColor};` : ""}
        }
        .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper:hover {
            ${buttonTwoBgHoverColor ? `background-color: ${buttonTwoBgHoverColor};` : ""}
            ${btnTwoHoverBorderColor ? `border-color: ${btnTwoHoverBorderColor};` : ""}
        }
        
        .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-btn-icon-wrapper svg {
            ${btnIconSize?.Desktop && btnIconSizeUnits?.Desktop ? `width: ${btnIconSize?.Desktop}${btnIconSizeUnits?.Desktop};` : ""}
            ${btnIconColor ? `fill: ${btnIconColor};` : ""}
            ${btnIconRotate?.Desktop ? `transform: rotate(${btnIconRotate?.Desktop}deg);` : ""}
        }
        .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper:hover .fb-btn-icon-wrapper svg {
            ${btnIconHoverColor ? `fill: ${btnIconHoverColor};` : ""}
        }
        .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-btn-icon-wrapper svg {
            ${btnTwoIconSize?.Desktop && btnTwoIconSizeUnits?.Desktop ? `width: ${btnTwoIconSize?.Desktop}${btnTwoIconSizeUnits?.Desktop};` : ""}
            ${btnTwoIconColor ? `fill: ${btnTwoIconColor};` : ""}
            ${btnTwoIconRotate?.Desktop ? `transform: rotate(${btnTwoIconRotate?.Desktop}deg);` : ""}
        }
        .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper:hover .fb-btn-icon-wrapper svg {
            ${btnTwoIconHoverColor ? `fill: ${btnTwoIconHoverColor};` : ""}
        }
        @media only screen and (max-width: 1024px) {
            .fb-cta-main-wrapper.${blockID} {
                ${ctaPositionType !== 'default' ? `position: ${ctaPositionType};` : ''}	
                ${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaHZOrientationType === 'left' && ctaHZLeftOffset?.Tablet ? `left: ${ctaHZLeftOffset?.Tablet}${ctaHZLeftOffsetUnits?.Tablet};` : ''}
                ${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaHZOrientationType === 'right' && ctaHZRightOffset?.Tablet ? `right: ${ctaHZRightOffset?.Tablet}${ctaHZRightOffsetUnits?.Tablet};` : ''}
                ${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaVROrientationType === 'top' && ctaVRTopOffset?.Tablet ? `top: ${ctaVRTopOffset?.Tablet}${ctaVRTopOffsetUnits?.Tablet};` : ''}
                ${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaVROrientationType === 'bottom' && ctaVRBottomOffset?.Tablet ? `bottom: ${ctaVRBottomOffset?.Tablet}${ctaVRBottomOffsetUnits?.Tablet};` : ''}
                ${globalZIndex?.Tablet ? `z-index: ${globalZIndex?.Tablet};` : ''}
            }
            .fb-cta-content-wrapper.${blockID} {
                ${TabletPadding && globalPaddingTablet?.top ? `padding: ${TabletPadding};` : ""}
                ${TabletMargin && globalMarginTablet?.top ? `margin: ${TabletMargin};` : ""}
                ${BorderTabletWidth && globalBorderTablet?.top ? `border-width: ${BorderTabletWidth};` : ""}
                ${BorderRadiusTabletWidth && globalBorderRadiusTablet?.top ? `border-radius: ${BorderRadiusTabletWidth} !important;` : ""}
            }
            .fb-cta-content-wrapper.${blockID} .fb-heading,
            .fb-cta-content-wrapper.${blockID} .fb-title-dynamic-link {
                ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Tablet && headingFontSizeUnits?.Tablet ? `font-size: ${headingFontSize?.Tablet}${headingFontSizeUnits?.Tablet};` : ''}
                ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Tablet && headingLetterSpacingUnits?.Tablet ? `letter-spacing: ${headingLetterSpacing?.Tablet}${headingLetterSpacingUnits?.Tablet};` : ''}
                ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Tablet && headingLineHeightUnits?.Tablet ? `line-height: ${headingLineHeight?.Tablet}${headingLineHeightUnits?.Tablet};` : ''}
                ${headingTabletPaddingWidth && headingTabPadding?.top ? `padding: ${headingTabletPaddingWidth};` : ""}
                ${headingTabletMarginWidth && headingTabMargin?.top ? `margin: ${headingTabletMarginWidth};` : ""}
                ${headingTabletBorderWidth && headingTabBorder?.top ? `border-width: ${headingTabletBorderWidth};` : ""}
                ${headingTabletBorderRadiusWidth && headingTabBorderRadius?.top ? `border-radius: ${headingTabletBorderRadiusWidth};` : ""}
            }
            .fb-cta-content-wrapper.${blockID} .fb-description,
            .fb-cta-content-wrapper.${blockID} .fb-description-dynamic-link {
                ${descTabletPaddingWidth && descTabPadding?.top ? `padding: ${descTabletPaddingWidth};` : ""}
                ${descTabletMarginWidth && descTabMargin?.top ? `margin: ${descTabletMarginWidth};` : ""}
                ${SubHeadingGlobalTypoSwitcher?.fontSize === false && SubHeadingFontSize?.Tablet && SubHeadingFontSizeUnits?.Tablet ? `font-size: ${SubHeadingFontSize?.Tablet}${SubHeadingFontSizeUnits?.Tablet};` : ''}
                ${SubHeadingGlobalTypoSwitcher?.letterSpacing === false && SubHeadingLetterSpacing?.Tablet && SubHeadingLetterSpacingUnits?.Tablet ? `letter-spacing: ${SubHeadingLetterSpacing?.Tablet}${SubHeadingLetterSpacingUnits?.Tablet};` : ''}
                ${SubHeadingGlobalTypoSwitcher?.lineHeight === false && SubHeadingLineHeight?.Tablet && SubHeadingLineHeightUnits?.Tablet ? `line-height: ${SubHeadingLineHeight?.Tablet}${SubHeadingLineHeightUnits?.Tablet};` : ''}
            }
            
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper .fb-cta-button {
                ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Tablet && buttonFontSizeUnits?.Tablet ? `font-size: ${buttonFontSize?.Tablet}${buttonFontSizeUnits?.Tablet};` : ""}
                ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Tablet && buttonLetterSpacingUnits?.Tablet ? `letter-spacing: ${buttonLetterSpacing?.Tablet}${buttonLetterSpacingUnits?.Tablet};` : ""}
                ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Tablet && buttonLineHeightUnits?.Tablet ? `line-height: ${buttonLineHeight?.Tablet}${buttonLineHeightUnits?.Tablet};` : ""}
                ${buttonOneTabletPadding && btnOneTabPadding?.top ? `padding: ${buttonOneTabletPadding};` : ''}
                ${btnOneTabletBorderWidth && btnOneTabBorder?.top ? `border-width: ${btnOneTabletBorderWidth};` : ""}
                ${btnOneTabletBorderRadiusWidth && btnOneTabBorderRadius?.top ? `border-radius: ${btnOneTabletBorderRadiusWidth};` : ""}
            }
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper {
                ${btnOneTabletMarginWidth && btnOneTabMargin?.top ? `margin: ${btnOneTabletMarginWidth};` : ''}
            }

            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper .fb-cta-button {
                ${buttonTwoGlobalTypoSwitcher?.fontSize === false && buttonTwoFontSize?.Tablet && buttonTwoFontSizeUnits?.Tablet ? `font-size: ${buttonTwoFontSize?.Tablet}${buttonTwoFontSizeUnits?.Tablet};` : ""}
                ${buttonTwoGlobalTypoSwitcher?.letterSpacing === false && buttonTwoLetterSpacing?.Tablet && buttonTwoLetterSpacingUnits?.Tablet ? `letter-spacing: ${buttonTwoLetterSpacing?.Tablet}${buttonTwoLetterSpacingUnits?.Tablet};` : ""}
                ${buttonTwoGlobalTypoSwitcher?.lineHeight === false && buttonTwoLineHeight?.Tablet && buttonTwoLineHeightUnits?.Tablet ? `line-height: ${buttonTwoLineHeight?.Tablet}${buttonTwoLineHeightUnits?.Tablet};` : ""}
                ${btnTwoTabletBorderWidthStyle && btnTwoTabBorder?.top ? `border-width: ${btnTwoTabletBorderWidthStyle};` : ""}
                ${btnTwoTabletBorderRadiusWidthStyle && btnTwoTabBorderRadius?.top ? `border-radius: ${btnTwoTabletBorderRadiusWidthStyle};` : ""}
                ${buttonTwoTabletPadding && btnTwoTabPadding?.top ? `padding: ${buttonTwoTabletPadding};` : ''}
            }
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper {
                ${btnTwoTabletMarginWidth && btnTwoTabMargin?.top ? `margin: ${btnTwoTabletMarginWidth};` : ''}
            }
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-btn-icon-wrapper svg {
                ${btnIconSize?.Tablet && btnIconSizeUnits?.Tablet ? `width: ${btnIconSize?.Tablet}${btnIconSizeUnits?.Tablet};` : ""}
                ${btnIconRotate?.Tablet ? `transform: rotate(${btnIconRotate?.Tablet}deg);` : ""}
            }
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-btn-icon-wrapper svg {
                ${btnTwoIconSize?.Tablet && btnTwoIconSizeUnits?.Tablet ? `width: ${btnTwoIconSize?.Tablet}${btnTwoIconSizeUnits?.Tablet};` : ""}
                ${btnTwoIconRotate?.Tablet ? `transform: rotate(${btnTwoIconRotate?.Tablet}deg);` : ""}
            }
        }
        @media only screen and (max-width: 767px) {
            .fb-cta-main-wrapper.${blockID} {
                ${ctaPositionType !== 'default' ? `position: ${ctaPositionType};` : ''}
                ${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaHZOrientationType === 'left' && ctaHZLeftOffset?.Mobile ? `left: ${ctaHZLeftOffset?.Mobile}${ctaHZLeftOffsetUnits?.Mobile};` : ''}
                ${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaHZOrientationType === 'right' && ctaHZRightOffset?.Mobile ? `right: ${ctaHZRightOffset?.Mobile}${ctaHZRightOffsetUnits?.Mobile};` : ''}
                ${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaVROrientationType === 'top' && ctaVRTopOffset?.Mobile ? `top: ${ctaVRTopOffset?.Mobile}${ctaVRTopOffsetUnits?.Mobile};` : ''}
                ${ctaPositionType !== 'default' && ctaPositionType !== 'relative' && ctaVROrientationType === 'bottom' && ctaVRBottomOffset?.Mobile ? `bottom: ${ctaVRBottomOffset?.Mobile}${ctaVRBottomOffsetUnits?.Mobile};` : ''}
                ${globalZIndex?.Mobile ? `z-index: ${globalZIndex?.Mobile};` : ''}
            }
            .fb-cta-content-wrapper.${blockID} {
                ${MobilePadding && globalPaddingMobile?.top ? `padding: ${MobilePadding};` : ""}
                ${MobileMargin && globalMarginMobile?.top ? `margin: ${MobileMargin};` : ""}
                ${BorderMobileWidth && globalBorderMobile?.top ? `border-width: ${BorderMobileWidth};` : ""}
                ${BorderRadiusMobileWidth && globalBorderRadiusMobile?.top ? `border-radius: ${BorderRadiusMobileWidth} !important;` : ""}
            }
            .fb-cta-content-wrapper.${blockID} .fb-heading,
            .fb-cta-content-wrapper.${blockID} .fb-title-dynamic-link {
                ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Mobile && headingFontSizeUnits?.Mobile ? `font-size: ${headingFontSize?.Mobile}${headingFontSizeUnits?.Mobile};` : ''}
                ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Mobile && headingLetterSpacingUnits?.Mobile ? `letter-spacing: ${headingLetterSpacing?.Mobile}${headingLetterSpacingUnits?.Mobile};` : ''}
                ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Mobile && headingLineHeightUnits?.Mobile ? `line-height: ${headingLineHeight?.Mobile}${headingLineHeightUnits?.Mobile};` : ''}
                ${headingMobilePaddingWidth && headingMobilePadding?.top ? `padding: ${headingMobilePaddingWidth};` : ""}
                ${headingMobileMarginWidth && headingMobileMargin?.top ? `margin: ${headingMobileMarginWidth};` : ""}
                ${headingMobileBorderWidth && headingMobileBorder?.top ? `border-width: ${headingMobileBorderWidth};` : ""}
                ${headingMobileBorderRadiusWidth && headingMobileBorderRadius?.top ? `border-radius: ${headingMobileBorderRadiusWidth};` : ""}
            }
            .fb-cta-content-wrapper.${blockID} .fb-description,
            .fb-cta-content-wrapper.${blockID} .fb-description-dynamic-link {
                ${descMobilePaddingWidth && descMobilePadding?.top ? `padding: ${descMobilePaddingWidth};` : ""}
                ${descMobileMarginWidth && descMobileMargin?.top ? `margin: ${descMobileMarginWidth};` : ""}
                ${SubHeadingGlobalTypoSwitcher?.fontSize === false && SubHeadingFontSize?.Mobile && SubHeadingFontSizeUnits?.Mobile ? `font-size: ${SubHeadingFontSize?.Mobile}${SubHeadingFontSizeUnits?.Mobile};` : ''}
                ${SubHeadingGlobalTypoSwitcher?.letterSpacing === false && SubHeadingLetterSpacing?.Mobile && SubHeadingLetterSpacingUnits?.Mobile ? `letter-spacing: ${SubHeadingLetterSpacing?.Mobile}${SubHeadingLetterSpacingUnits?.Mobile};` : ''}
                ${SubHeadingGlobalTypoSwitcher?.lineHeight === false && SubHeadingLineHeight?.Mobile && SubHeadingLineHeightUnits?.Mobile ? `line-height: ${SubHeadingLineHeight?.Mobile}${SubHeadingLineHeightUnits?.Mobile};` : ''}
            }
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper .fb-cta-button {
                ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Mobile && buttonFontSizeUnits?.Mobile ? `font-size: ${buttonFontSize?.Mobile}${buttonFontSizeUnits?.Mobile};` : ""}
                ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Mobile && buttonLetterSpacingUnits?.Mobile ? `letter-spacing: ${buttonLetterSpacing?.Mobile}${buttonLetterSpacingUnits?.Mobile};` : ""}
                ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Mobile && buttonLineHeightUnits?.Mobile ? `line-height: ${buttonLineHeight?.Mobile}${buttonLineHeightUnits?.Mobile};` : ""}
                ${btnOneMobileBorderWidth && btnOneMobileBorder?.top ? `border-width: ${btnOneMobileBorderWidth};` : ""}
                ${btnOneMobileBorderRadiusWidth && btnOneMobileBorderRadius?.top ? `border-radius: ${btnOneMobileBorderRadiusWidth};` : ""}
                ${buttonOneMobilePadding && btnOneMobilePadding?.top ? `padding: ${buttonOneMobilePadding};` : ''}
            }
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-cta-btn-wrapper {
                ${btnOneMobileMarginWidth && btnOneMobileMargin?.top ? `margin: ${btnOneMobileMarginWidth};` : ''}
            }
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper .fb-cta-button {
                ${buttonTwoGlobalTypoSwitcher?.fontSize === false && buttonTwoFontSize?.Mobile && buttonTwoFontSizeUnits?.Mobile ? `font-size: ${buttonTwoFontSize?.Mobile}${buttonTwoFontSizeUnits?.Mobile};` : ""}
                ${buttonTwoGlobalTypoSwitcher?.letterSpacing === false && buttonTwoLetterSpacing?.Mobile && buttonTwoLetterSpacingUnits?.Mobile ? `letter-spacing: ${buttonTwoLetterSpacing?.Mobile}${buttonTwoLetterSpacingUnits?.Mobile};` : ""}
                ${buttonTwoGlobalTypoSwitcher?.lineHeight === false && buttonTwoLineHeight?.Mobile && buttonTwoLineHeightUnits?.Mobile ? `line-height: ${buttonTwoLineHeight?.Mobile}${buttonTwoLineHeightUnits?.Mobile};` : ""}
                ${btnTwoMobileBorderWidthStyle && btnTwoMobileBorder?.top ? `border-width: ${btnTwoMobileBorderWidthStyle};` : ""}
                ${btnTwoMobileBorderRadiusWidthStyle && btnTwoMobileBorderRadius?.top ? `border-radius: ${btnTwoMobileBorderRadiusWidthStyle};` : ""}
                ${buttonTwoMobilePadding && btnTwoMobilePadding?.top ? `padding: ${buttonTwoMobilePadding};` : ''}
            }
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-cta-btn-wrapper {
                ${btnTwoMobileMarginWidth && btnTwoMobileMargin?.top ? `margin: ${btnTwoMobileMarginWidth};` : ''}
            }
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-one-wrapper .fb-btn-icon-wrapper svg {
                ${btnIconSize?.Mobile && btnIconSizeUnits?.Mobile ? `width: ${btnIconSize?.Mobile}${btnIconSizeUnits?.Mobile};` : ""}
                ${btnIconRotate?.Mobile ? `transform: rotate(${btnIconRotate?.Mobile}deg);` : ""}
            }
            .fb-cta-content-wrapper.${blockID} .fb-cta-btn-two-wrapper .fb-btn-icon-wrapper svg {
                ${btnTwoIconSize?.Mobile && btnTwoIconSizeUnits?.Mobile ? `width: ${btnTwoIconSize?.Mobile}${btnTwoIconSizeUnits?.Mobile};` : ""}
                ${btnTwoIconRotate?.Mobile ? `transform: rotate(${btnTwoIconRotate?.Mobile}deg);` : ""}
            }
        }
    `;

    const customCss = getCustomCss(ctaCustomCSS, `.${blockID}`);
    return `${ctaContentStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
};
export default generateCallToActionStyle;