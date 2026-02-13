/**
 * Advanced Button Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateAdvancedButtonStyle = (attributes) => {
    const {
		blockID,
		buttonAlignment,
		buttonWidth,
		buttonWidthUnits,

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

		buttonColor,
		buttonHoverColor,

		buttonTextColorType,
		buttonTextCustomGradientColorSwitcher,
		buttonTextCustomGradientColor,
		buttonTextGradientColor,
		buttonTextHoverColorType,
		buttonTextHoverGradientColor,
		buttonTextHoverCustomGradientColorSwitcher,
		buttonTextHoverCustomGradientColor,

		/** Start Background */
		buttonNormalBackgroundType,
		buttonBgColor,
		buttonNormalGradientColor,
		buttonNormalCustomGradientSwitcher,
		buttonNormalCustomGradientInputValue,
		buttonHoverBackgroundType,
		buttonBgHoverColor,
		buttonHoverGradientColor,
		buttonHoverCustomGradientSwitcher,
		buttonHoverCustomGradientInputValue,
		/** End Background */

		buttonBorder,
		buttonBorderColor,
		buttonBorderHoverColor,

		buttonBorderUnits,
		buttonDesktopBorderWidth,
		buttonTabBorderWidth,
		buttonMobileBorderWidth,

		buttonBorderRadiusUnits,
		buttonDesktopBorderRadiusWidth,
		buttonTabBorderRadiusWidth,
		buttonMobileBorderRadiusWidth,
		buttonBoxShadowCssValue,
		buttonBoxShadowHoverCssValue,

		buttonPaddingUnits,
		buttonDesktopPadding,
		buttonTabPadding,
		buttonMobilePadding,

		buttonMarginUnits,
		buttonDesktopMargin,
		buttonTabMargin,
		buttonMobileMargin,

		buttonIconSize,
		buttonIconSizeUnits,
		buttonIconColor,
		buttonIconHoverColor,

		/** Start Background */
		buttonIconNormalBackgroundType,
		buttonIconBgColor,
		buttonIconNormalGradientColor,
		buttonIconNormalCustomGradientSwitcher,
		buttonIconNormalCustomGradientInputValue,
		buttonIconHoverBackgroundType,
		buttonIconBgHoverColor,
		buttonIconHoverGradientColor,
		buttonIconHoverCustomGradientSwitcher,
		buttonIconHoverCustomGradientInputValue,
		/** End Background */

		buttonIconBorder,
		buttonIconBorderColor,
		buttonIconBorderHoverColor,
		buttonIconBorderUnits,
		buttonIconBorderDesktop,
		buttonIconBorderTablet,
		buttonIconBorderMobile,
		buttonIconBorderRadiusUnits,
		buttonIconBorderRadiusDesktop,
		buttonIconBorderRadiusTablet,
		buttonIconBorderRadiusMobile,

		/** Start Icon Padding */
		buttonIconPaddingUnits,
		buttonIconPaddingDesktop,
		buttonIconPaddingTablet,
		buttonIconPaddingMobile,
		/** End Icon Padding */

		/** Start Icon margin */
		buttonIconMarginUnits,
		buttonIconMarginDesktop,
		buttonIconMarginTablet,
		buttonIconMarginMobile,
		/** End Icon Margin */


		buttonIconGapSize,
		buttonIconGapUnits,
		buttonIconRotate,
		buttonIconRotateHover,
		buttonImageRotate,
		buttonImageRotateHover,


		/** Start Global Setting */
		buttonGlobalZIndex,
		advancedBtnOverflow,
		buttonGlobalPaddingUnits,
		buttonGlobalPaddingDesktop,
		buttonGlobalPaddingTablet,
		buttonGlobalPaddingMobile,

		buttonGlobalMarginUnits,
		buttonGlobalMarginDesktop,
		buttonGlobalMarginTablet,
		buttonGlobalMarginMobile,

		/** Start Background */
		buttonGlobalNormalBackgroundType,
		buttonGlobalNormalClassicColor,
		buttonGlobalNormalGradientColor,
		buttonGlobalNormalCustomGradientSwitcher,
		buttonGlobalNormalCustomGradientInputValue,

		buttonGlobalHoverBackgroundType,
		buttonGlobalHoverClassicColor,
		buttonGlobalHoverGradientColor,
		buttonGlobalHoverCustomGradientSwitcher,
		buttonGlobalHoverCustomGradientInputValue,
		/** End Background */

		buttonGlobalBorder,
		buttonGlobalBorderColor,
		buttonGlobalBorderHoverColor,

		buttonGlobalBorderUnits,
		buttonGlobalBorderDesktop,
		buttonGlobalBorderTablet,
		buttonGlobalBorderMobile,

		buttonGlobalBorderRadiusUnits,
		buttonGlobalBorderRadiusDesktop,
		buttonGlobalBorderRadiusTablet,
		buttonGlobalBorderRadiusMobile,

		buttonGlobalBoxShadowCssValue,
		buttonGlobalBoxShadowHoverCssValue,
		/** End Global Setting */

		/** Start button Icon Image */
		buttonIconImageWidth,
		buttonIconImageWidthUnits,
		buttonIconImageHeight,
		buttonIconImageHeightUnits,
		buttonIconImagedisplay,
		/** end Icon Button Image*/

		buttonCustomCSS,
		/** End Global Setting */

		// Position
		advancedBtnPositionType,
		advancedBtnHZOrientationType,
		advancedBtnVROrientationType,
		advancedBtnHZLeftOffset,
		advancedBtnHZLeftOffsetUnits,
		advancedBtnHZRightOffset,
		advancedBtnHZRightOffsetUnits,
		advancedBtnVRTopOffset,
		advancedBtnVRTopOffsetUnits,
		advancedBtnVRBottomOffset,
		advancedBtnVRBottomOffsetUnits,

		//Transform
		buttonTransformNormalProportions,
		buttonTransformNormalScale,
		buttonTransformNormalScaleX,
		buttonTransformNormalScaleY,

		buttonTransformHoverProportions,
		buttonTransformHoverScale,
		buttonTransformHoverScaleX,
		buttonTransformHoverScaleY,

	} = attributes;

    //Button Icon Border Width
    const buttonIconBorderDesktopWidth = `${buttonIconBorderDesktop?.top}${buttonIconBorderUnits?.Desktop} ${buttonIconBorderDesktop?.right}${buttonIconBorderUnits?.Desktop} ${buttonIconBorderDesktop?.bottom}${buttonIconBorderUnits?.Desktop} ${buttonIconBorderDesktop?.left}${buttonIconBorderUnits?.Desktop}`;
	const buttonIconBorderTabletWidth = `${buttonIconBorderTablet?.top}${buttonIconBorderUnits?.Tablet} ${buttonIconBorderTablet?.right}${buttonIconBorderUnits?.Tablet} ${buttonIconBorderTablet?.bottom}${buttonIconBorderUnits?.Tablet} ${buttonIconBorderTablet?.left}${buttonIconBorderUnits?.Tablet}`;
	const buttonIconBorderMobileWidth = `${buttonIconBorderMobile?.top}${buttonIconBorderUnits?.Mobile} ${buttonIconBorderMobile?.right}${buttonIconBorderUnits?.Mobile} ${buttonIconBorderMobile?.bottom}${buttonIconBorderUnits?.Mobile} ${buttonIconBorderMobile?.left}${buttonIconBorderUnits?.Mobile}`;

    //Button Icon Border Radius
    const buttonIconBorderRadiusDesktopWidth = `${buttonIconBorderRadiusDesktop?.top}${buttonIconBorderRadiusUnits?.Desktop} ${buttonIconBorderRadiusDesktop?.right}${buttonIconBorderRadiusUnits?.Desktop} ${buttonIconBorderRadiusDesktop?.bottom}${buttonIconBorderRadiusUnits?.Desktop} ${buttonIconBorderRadiusDesktop?.left}${buttonIconBorderRadiusUnits?.Desktop}`;
	const buttonIconBorderRadiusTabletWidth = `${buttonIconBorderRadiusTablet?.top}${buttonIconBorderRadiusUnits?.Tablet} ${buttonIconBorderRadiusTablet?.right}${buttonIconBorderRadiusUnits?.Tablet} ${buttonIconBorderRadiusTablet?.bottom}${buttonIconBorderRadiusUnits?.Tablet} ${buttonIconBorderRadiusTablet?.left}${buttonIconBorderRadiusUnits?.Tablet}`;
	const buttonIconBorderRadiusMobileWidth = `${buttonIconBorderRadiusMobile?.top}${buttonIconBorderRadiusUnits?.Mobile} ${buttonIconBorderRadiusMobile?.right}${buttonIconBorderRadiusUnits?.Mobile} ${buttonIconBorderRadiusMobile?.bottom}${buttonIconBorderRadiusUnits?.Mobile} ${buttonIconBorderRadiusMobile?.left}${buttonIconBorderRadiusUnits?.Mobile}`;

    //Button Icon Padding
    const buttonIconPaddingDesktopWidth = `${buttonIconPaddingDesktop?.top}${buttonIconPaddingUnits?.Desktop} ${buttonIconPaddingDesktop?.right}${buttonIconPaddingUnits?.Desktop} ${buttonIconPaddingDesktop?.bottom}${buttonIconPaddingUnits?.Desktop} ${buttonIconPaddingDesktop?.left}${buttonIconPaddingUnits?.Desktop}`;
	const buttonIconPaddingTabletWidth = `${buttonIconPaddingTablet?.top}${buttonIconPaddingUnits?.Tablet} ${buttonIconPaddingTablet?.right}${buttonIconPaddingUnits?.Tablet} ${buttonIconPaddingTablet?.bottom}${buttonIconPaddingUnits?.Tablet} ${buttonIconPaddingTablet?.left}${buttonIconPaddingUnits?.Tablet}`;
	const buttonIconPaddingMobileWidth = `${buttonIconPaddingMobile?.top}${buttonIconPaddingUnits?.Mobile} ${buttonIconPaddingMobile?.right}${buttonIconPaddingUnits?.Mobile} ${buttonIconPaddingMobile?.bottom}${buttonIconPaddingUnits?.Mobile} ${buttonIconPaddingMobile?.left}${buttonIconPaddingUnits?.Mobile}`;

    //Button Icon Margin
    const buttonIconMarginDesktopWidth = `${buttonIconMarginDesktop.top}${buttonIconMarginUnits.Desktop} ${buttonIconMarginDesktop.right}${buttonIconMarginUnits.Desktop} ${buttonIconMarginDesktop.bottom}${buttonIconMarginUnits.Desktop} ${buttonIconMarginDesktop.left}${buttonIconMarginUnits.Desktop}`;
	const buttonIconMarginTabletWidth = `${buttonIconMarginTablet.top}${buttonIconMarginUnits.Tablet} ${buttonIconMarginTablet.right}${buttonIconMarginUnits.Tablet} ${buttonIconPaddingTablet.bottom}${buttonIconMarginUnits.Tablet} ${buttonIconMarginTablet.left}${buttonIconMarginUnits.Tablet}`;
	const buttonIconMarginMobileWidth = `${buttonIconMarginMobile.top}${buttonIconMarginUnits.Mobile} ${buttonIconMarginMobile.right}${buttonIconMarginUnits.Mobile} ${buttonIconMarginMobile.bottom}${buttonIconMarginUnits.Mobile} ${buttonIconPaddingMobile.left}${buttonIconMarginUnits.Mobile}`;

    //Button Padding Margin Border
    const buttonDesktopPaddingStr = `${buttonDesktopPadding?.top}${buttonPaddingUnits?.Desktop} ${buttonDesktopPadding?.right}${buttonPaddingUnits?.Desktop} ${buttonDesktopPadding?.bottom}${buttonPaddingUnits?.Desktop} ${buttonDesktopPadding?.left}${buttonPaddingUnits?.Desktop}`;
	const buttonTabletPaddingStr = `${buttonTabPadding?.top}${buttonPaddingUnits?.Tablet} ${buttonTabPadding?.right}${buttonPaddingUnits?.Tablet} ${buttonTabPadding?.bottom}${buttonPaddingUnits?.Tablet} ${buttonTabPadding?.left}${buttonPaddingUnits?.Tablet}`;
	const buttonMobilePaddingStr = `${buttonMobilePadding?.top}${buttonPaddingUnits?.Mobile} ${buttonMobilePadding?.right}${buttonPaddingUnits?.Mobile} ${buttonMobilePadding?.bottom}${buttonPaddingUnits?.Mobile} ${buttonMobilePadding?.left}${buttonPaddingUnits?.Mobile}`;

    //Button Margin
    const buttonDesktopMarginStr = `${buttonDesktopMargin?.top}${buttonMarginUnits?.Desktop} ${buttonDesktopMargin?.right}${buttonMarginUnits?.Desktop} ${buttonDesktopMargin?.bottom}${buttonMarginUnits?.Desktop} ${buttonDesktopMargin?.left}${buttonMarginUnits?.Desktop}`;
	const buttonTabletMarginStr = `${buttonTabMargin?.top}${buttonMarginUnits?.Tablet} ${buttonTabMargin?.right}${buttonMarginUnits?.Tablet} ${buttonTabMargin?.bottom}${buttonMarginUnits?.Tablet} ${buttonTabMargin?.left}${buttonMarginUnits?.Tablet}`;
	const buttonMobileMarginStr = `${buttonMobileMargin?.top}${buttonMarginUnits?.Mobile} ${buttonMobileMargin?.right}${buttonMarginUnits?.Mobile} ${buttonMobileMargin?.bottom}${buttonMarginUnits?.Mobile} ${buttonMobileMargin?.left}${buttonMarginUnits?.Mobile}`;

    //Button Border Width
    const buttonDesktopBorderWidthStr = `${buttonDesktopBorderWidth?.top}${buttonBorderUnits?.Desktop} ${buttonDesktopBorderWidth?.right}${buttonBorderUnits?.Desktop} ${buttonDesktopBorderWidth?.bottom}${buttonBorderUnits?.Desktop} ${buttonDesktopBorderWidth?.left}${buttonBorderUnits?.Desktop}`;
	const buttonTabletBorderWidthStr = `${buttonTabBorderWidth?.top}${buttonBorderUnits?.Tablet} ${buttonTabBorderWidth?.right}${buttonBorderUnits?.Tablet} ${buttonTabBorderWidth?.bottom}${buttonBorderUnits?.Tablet} ${buttonTabBorderWidth?.left}${buttonBorderUnits?.Tablet}`;
	const buttonMobileBorderWidthStr = `${buttonMobileBorderWidth?.top}${buttonBorderUnits?.Mobile} ${buttonMobileBorderWidth?.right}${buttonBorderUnits?.Mobile} ${buttonMobileBorderWidth?.bottom}${buttonBorderUnits?.Mobile} ${buttonMobileBorderWidth?.left}${buttonBorderUnits?.Mobile}`;

    //Button Border Radius Width
    const buttonDesktopBorderRadiusStr = `${buttonDesktopBorderRadiusWidth?.top}${buttonBorderRadiusUnits?.Desktop} ${buttonDesktopBorderRadiusWidth?.right}${buttonBorderRadiusUnits?.Desktop} ${buttonDesktopBorderRadiusWidth?.bottom}${buttonBorderRadiusUnits?.Desktop} ${buttonDesktopBorderRadiusWidth?.left}${buttonBorderRadiusUnits?.Desktop}`;
	const buttonTabletBorderRadiusStr = `${buttonTabBorderRadiusWidth?.top}${buttonBorderRadiusUnits?.Tablet} ${buttonTabBorderRadiusWidth?.right}${buttonBorderRadiusUnits?.Tablet} ${buttonTabBorderRadiusWidth?.bottom}${buttonBorderRadiusUnits?.Tablet} ${buttonTabBorderRadiusWidth?.left}${buttonBorderRadiusUnits?.Tablet}`;
	const buttonMobileBorderRadiusStr = `${buttonMobileBorderRadiusWidth?.top}${buttonBorderRadiusUnits?.Mobile} ${buttonMobileBorderRadiusWidth?.right}${buttonBorderRadiusUnits?.Mobile} ${buttonMobileBorderRadiusWidth?.bottom}${buttonBorderRadiusUnits?.Mobile} ${buttonMobileBorderRadiusWidth?.left}${buttonBorderRadiusUnits?.Mobile}`;

    //Global Padding
    const globalDesktopPadding = `${buttonGlobalPaddingDesktop?.top}${buttonGlobalPaddingUnits?.Desktop} ${buttonGlobalPaddingDesktop?.right}${buttonGlobalPaddingUnits?.Desktop} ${buttonGlobalPaddingDesktop?.bottom}${buttonGlobalPaddingUnits?.Desktop} ${buttonGlobalPaddingDesktop?.left}${buttonGlobalPaddingUnits?.Desktop}`;
	const globalTabletPadding = `${buttonGlobalPaddingTablet?.top}${buttonGlobalPaddingUnits?.Tablet} ${buttonGlobalPaddingTablet?.right}${buttonGlobalPaddingUnits?.Tablet} ${buttonGlobalPaddingTablet?.bottom}${buttonGlobalPaddingUnits?.Tablet} ${buttonGlobalPaddingTablet?.left}${buttonGlobalPaddingUnits?.Tablet}`;
	const globalMobilePadding = `${buttonGlobalPaddingMobile?.top}${buttonGlobalPaddingUnits?.Mobile} ${buttonGlobalPaddingMobile?.right}${buttonGlobalPaddingUnits?.Mobile} ${buttonGlobalPaddingMobile?.bottom}${buttonGlobalPaddingUnits?.Mobile} ${buttonGlobalPaddingMobile?.left}${buttonGlobalPaddingUnits?.Mobile}`;

    //Global Margin
    const globalDesktopMargin = `${buttonGlobalMarginDesktop?.top}${buttonGlobalMarginUnits?.Desktop} ${buttonGlobalMarginDesktop?.right}${buttonGlobalMarginUnits?.Desktop} ${buttonGlobalMarginDesktop?.bottom}${buttonGlobalMarginUnits?.Desktop} ${buttonGlobalMarginDesktop?.left}${buttonGlobalMarginUnits?.Desktop}`;
	const globalTabletMargin = `${buttonGlobalMarginTablet?.top}${buttonGlobalMarginUnits?.Tablet} ${buttonGlobalMarginTablet?.right}${buttonGlobalMarginUnits?.Tablet} ${buttonGlobalMarginTablet?.bottom}${buttonGlobalMarginUnits?.Tablet} ${buttonGlobalMarginTablet?.left}${buttonGlobalMarginUnits?.Tablet}`;
	const globalMobileMargin = `${buttonGlobalMarginMobile?.top}${buttonGlobalMarginUnits?.Mobile} ${buttonGlobalMarginMobile?.right}${buttonGlobalMarginUnits?.Mobile} ${buttonGlobalMarginMobile?.bottom}${buttonGlobalMarginUnits?.Mobile} ${buttonGlobalMarginMobile?.left}${buttonGlobalMarginUnits?.Mobile}`;

    //Global Border Width
    const globalDesktopBorderWidth = `${buttonGlobalBorderDesktop?.top}${buttonGlobalBorderUnits?.Desktop} ${buttonGlobalBorderDesktop?.right}${buttonGlobalBorderUnits?.Desktop} ${buttonGlobalBorderDesktop?.bottom}${buttonGlobalBorderUnits?.Desktop} ${buttonGlobalBorderDesktop?.left}${buttonGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${buttonGlobalBorderTablet?.top}${buttonGlobalBorderUnits?.Tablet} ${buttonGlobalBorderTablet?.right}${buttonGlobalBorderUnits?.Tablet} ${buttonGlobalBorderTablet?.bottom}${buttonGlobalBorderUnits?.Tablet} ${buttonGlobalBorderTablet?.left}${buttonGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${buttonGlobalBorderMobile?.top}${buttonGlobalBorderUnits?.Mobile} ${buttonGlobalBorderMobile?.right}${buttonGlobalBorderUnits?.Mobile} ${buttonGlobalBorderMobile?.bottom}${buttonGlobalBorderUnits?.Mobile} ${buttonGlobalBorderMobile?.left}${buttonGlobalBorderUnits?.Mobile}`;

    //Global Border Radius Width
    const globalDesktopBorderRadiusWidth = `${buttonGlobalBorderRadiusDesktop?.top}${buttonGlobalBorderRadiusUnits?.Desktop} ${buttonGlobalBorderRadiusDesktop?.right}${buttonGlobalBorderRadiusUnits?.Desktop} ${buttonGlobalBorderRadiusDesktop?.bottom}${buttonGlobalBorderRadiusUnits?.Desktop} ${buttonGlobalBorderRadiusDesktop?.left}${buttonGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${buttonGlobalBorderRadiusTablet?.top}${buttonGlobalBorderRadiusUnits?.Tablet} ${buttonGlobalBorderRadiusTablet?.right}${buttonGlobalBorderRadiusUnits?.Tablet} ${buttonGlobalBorderRadiusTablet?.bottom}${buttonGlobalBorderRadiusUnits?.Tablet} ${buttonGlobalBorderRadiusTablet?.left}${buttonGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${buttonGlobalBorderRadiusMobile?.top}${buttonGlobalBorderRadiusUnits?.Mobile} ${buttonGlobalBorderRadiusMobile?.right}${buttonGlobalBorderRadiusUnits?.Mobile} ${buttonGlobalBorderRadiusMobile?.bottom}${buttonGlobalBorderRadiusUnits?.Mobile} ${buttonGlobalBorderRadiusMobile?.left}${buttonGlobalBorderRadiusUnits?.Mobile}`;

    // Generate Style
    const advancedButtonBlockStyle = `
        .${blockID}.fb-advanced-button-main-wrapper {
            ${advancedBtnPositionType === 'default' ? `position: relative;` : ''}
            ${advancedBtnPositionType !== 'default' ? `position: ${advancedBtnPositionType} !important;` : ''}
            ${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnHZOrientationType === 'left' && advancedBtnHZLeftOffset?.Desktop ? `left: ${advancedBtnHZLeftOffset?.Desktop}${advancedBtnHZLeftOffsetUnits?.Desktop};` : ''}
            ${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnHZOrientationType === 'right' && advancedBtnHZRightOffset?.Desktop ? `right: ${advancedBtnHZRightOffset?.Desktop}${advancedBtnHZRightOffsetUnits?.Desktop};` : ''}
            ${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnVROrientationType === 'top' && advancedBtnVRTopOffset?.Desktop ? `top: ${advancedBtnVRTopOffset?.Desktop}${advancedBtnVRTopOffsetUnits?.Desktop};` : ''}
            ${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnVROrientationType === 'bottom' && advancedBtnVRBottomOffset?.Desktop ? `bottom: ${advancedBtnVRBottomOffset?.Desktop}${advancedBtnVRBottomOffsetUnits?.Desktop};` : ''}
            ${buttonGlobalZIndex?.Desktop ? `z-index: ${buttonGlobalZIndex?.Desktop};` : ''}
            ${advancedBtnOverflow !== 'default' ? `overflow: ${advancedBtnOverflow};` : ''}
        }
        .${blockID} .fb-advanced-button-wrapper {
            ${buttonGlobalNormalBackgroundType === 'gradient' ? `  
                ${buttonGlobalNormalCustomGradientSwitcher && buttonGlobalNormalCustomGradientInputValue ? `background: ${buttonGlobalNormalCustomGradientInputValue};` : `background: ${buttonGlobalNormalGradientColor};`}
            `: `
                ${buttonGlobalNormalClassicColor ? `background: ${buttonGlobalNormalClassicColor};` : ''}
            `}
            ${globalDesktopPadding && buttonGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && buttonGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''} 
            ${buttonGlobalBorder ? `border: ${buttonGlobalBorder};` : ''} 
            ${globalDesktopBorderWidth && buttonGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && buttonGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${buttonGlobalBorderColor ? `border-color: ${buttonGlobalBorderColor};` : ''}
            ${buttonGlobalBoxShadowCssValue ? `box-shadow: ${buttonGlobalBoxShadowCssValue};` : ''}

            ${buttonTransformNormalProportions
            ? (buttonTransformNormalScale?.Desktop
                ? `transform: scale(${buttonTransformNormalScale?.Desktop});`
                : ''
            )
            : (
                (buttonTransformNormalScaleX?.Desktop || buttonTransformNormalScaleY?.Desktop)
                    ? `transform: ${buttonTransformNormalScaleX?.Desktop ? `scaleX(${buttonTransformNormalScaleX?.Desktop}) ` : ''}${buttonTransformNormalScaleY?.Desktop ? `scaleY(${buttonTransformNormalScaleY?.Desktop})` : ''};`
                    : ''
            )
        }			
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockID} .fb-advanced-button-wrapper:hover {
            ${buttonGlobalHoverBackgroundType === 'gradient' ? `   	
                ${buttonGlobalHoverCustomGradientSwitcher && buttonGlobalHoverCustomGradientInputValue ? `background: ${buttonGlobalHoverCustomGradientInputValue};` : `background: ${buttonGlobalHoverGradientColor};`}
            `: `
                ${buttonGlobalHoverClassicColor ? `background: ${buttonGlobalHoverClassicColor};` : ''}
            `}
            ${buttonGlobalBorderHoverColor ? `border-color: ${buttonGlobalBorderHoverColor};` : ''}
            ${buttonGlobalBoxShadowHoverCssValue ? `box-shadow: ${buttonGlobalBoxShadowHoverCssValue};` : ''}

            ${buttonTransformHoverProportions
            ? (buttonTransformHoverScale?.Desktop
                ? `transform: scale(${buttonTransformHoverScale?.Desktop});`
                : ''
            )
            : (
                (buttonTransformHoverScaleX?.Desktop || buttonTransformHoverScaleY?.Desktop)
                    ? `transform: ${buttonTransformHoverScaleX?.Desktop ? `scaleX(${buttonTransformHoverScaleX?.Desktop}) ` : ''}${buttonTransformHoverScaleY?.Desktop ? `scaleY(${buttonTransformHoverScaleY?.Desktop})` : ''};`
                    : ''
            )
        }
        }
        .${blockID} .fb-advanced-button-wrapper .fb-advanced-button {
            ${buttonIconGapSize?.Desktop ? `gap: ${buttonIconGapSize?.Desktop}${buttonIconGapUnits?.Desktop};` : ''}
            
            ${buttonGlobalTypoSwitcher?.fontFamily === true && buttonGlobalTypographyData?.fontFamily ? `font-family: ${buttonGlobalTypographyData?.fontFamily};` : ''}
            ${buttonGlobalTypoSwitcher?.fontSize === true && buttonGlobalTypographyData?.fontSize ? `font-size: ${buttonGlobalTypographyData?.fontSize};` : ''}
            ${buttonGlobalTypoSwitcher?.fontWeight === true && buttonGlobalTypographyData?.fontWeight ? `font-weight: ${buttonGlobalTypographyData?.fontWeight};` : ''}
            ${buttonGlobalTypoSwitcher?.fontStyle === true && buttonGlobalTypographyData?.fontStyle ? `font-style: ${buttonGlobalTypographyData?.fontStyle};` : ''}
            ${buttonGlobalTypoSwitcher?.textTransform === true && buttonGlobalTypographyData?.textTransform ? `text-transform: ${buttonGlobalTypographyData?.textTransform};` : ''}
            ${buttonGlobalTypoSwitcher?.textDecoration === true && buttonGlobalTypographyData?.textDecoration ? `text-decoration: ${buttonGlobalTypographyData?.textDecoration};` : ''}
            ${buttonGlobalTypoSwitcher?.letterSpacing === true && buttonGlobalTypographyData?.letterSpacing ? `letter-spacing: ${buttonGlobalTypographyData?.letterSpacing};` : ''}
            ${buttonGlobalTypoSwitcher?.lineHeight === true && buttonGlobalTypographyData?.lineHeight ? `line-height: ${buttonGlobalTypographyData?.lineHeight};` : ''}
            
            ${buttonGlobalTypoSwitcher?.fontFamily === false && buttonFontFamily && buttonFontFamily !== 'Default' ? `font-family: ${buttonFontFamily};` : ''}
            ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Desktop && buttonFontSizeUnits?.Desktop ? `font-size: ${buttonFontSize?.Desktop}${buttonFontSizeUnits?.Desktop};` : ''}
            ${buttonGlobalTypoSwitcher?.fontWeight === false && buttonFontWeight ? `font-weight: ${buttonFontWeight};` : ''}
            ${buttonGlobalTypoSwitcher?.fontStyle === false && buttonFontStyle ? `font-style: ${buttonFontStyle};` : ''}
            ${buttonGlobalTypoSwitcher?.textTransform === false && buttonTextTransform ? `text-transform: ${buttonTextTransform};` : ''}
            ${buttonGlobalTypoSwitcher?.textDecoration === false && buttonTextDecoration ? `text-decoration: ${buttonTextDecoration};` : ''}
            ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Desktop && buttonLetterSpacingUnits?.Desktop ? `letter-spacing: ${buttonLetterSpacing?.Desktop}${buttonLetterSpacingUnits?.Desktop};` : ''}
            ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Desktop && buttonLineHeightUnits?.Desktop ? `line-height: ${buttonLineHeight?.Desktop}${buttonLineHeightUnits?.Desktop};` : ''}
            
            ${buttonNormalBackgroundType === 'gradient' ? `   	
                ${buttonNormalCustomGradientSwitcher && buttonNormalCustomGradientInputValue ? `background: ${buttonNormalCustomGradientInputValue};` : `background: ${buttonNormalGradientColor};`}
            `: `
                ${buttonBgColor ? `background: ${buttonBgColor};` : ''}
            `}
            ${buttonDesktopPaddingStr && buttonDesktopPadding?.top ? `padding: ${buttonDesktopPaddingStr};` : ''}
            ${buttonDesktopMarginStr && buttonDesktopMargin?.top ? `margin: ${buttonDesktopMarginStr};` : ''}
            ${buttonBorder ? `border: ${buttonBorder};` : ''}
            ${buttonDesktopBorderWidthStr && buttonDesktopBorderWidth?.top ? `border-width: ${buttonDesktopBorderWidthStr};` : ''}
            ${buttonDesktopBorderRadiusStr && buttonDesktopBorderRadiusWidth?.top ? `border-radius: ${buttonDesktopBorderRadiusStr};` : ''}
            ${buttonBorderColor ? `border-color: ${buttonBorderColor};` : ''}
            ${buttonBoxShadowCssValue ? `box-shadow: ${buttonBoxShadowCssValue};` : ''} 
            ${buttonWidth?.Desktop && buttonWidthUnits?.Desktop ? `width: ${buttonWidth.Desktop}${buttonWidthUnits.Desktop};` : ''}
            display: ${buttonAlignment === 'justify' ? 'flex' : 'inline-flex'};
            transition: all 0.3s ease;
        }

        .${blockID} .fb-advanced-button-wrapper .fb-advanced-button:hover {
            ${buttonBorderHoverColor ? `border-color: ${buttonBorderHoverColor};` : ''}
            ${buttonHoverBackgroundType === 'gradient' ? `   	
                ${buttonHoverCustomGradientSwitcher && buttonHoverCustomGradientInputValue ? `background: ${buttonHoverCustomGradientInputValue};` : `background: ${buttonHoverGradientColor};`}
            `: `
                ${buttonBgHoverColor ? `background: ${buttonBgHoverColor};` : ''}
            `}
            ${buttonBoxShadowHoverCssValue ? `box-shadow: ${buttonBoxShadowHoverCssValue};` : ''} 
        }

        .${blockID} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-text {
            ${buttonTextColorType === 'gradient' ? `
                background: ${buttonTextCustomGradientColorSwitcher && buttonTextCustomGradientColor ? buttonTextCustomGradientColor : buttonTextGradientColor};
                ${buttonTextCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${buttonTextGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
        ` : `${buttonColor ? `color: ${buttonColor};` : ''}`}
        }

        .${blockID} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-text {
            ${buttonTextHoverColorType === 'gradient' ? `
                background: ${buttonTextHoverCustomGradientColorSwitcher && buttonTextHoverCustomGradientColor ? buttonTextHoverCustomGradientColor : buttonTextHoverGradientColor};
                ${buttonTextHoverCustomGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
                ${buttonTextHoverGradientColor && '-webkit-background-clip: text; -webkit-text-fill-color: transparent;'}
            ` : `${buttonHoverColor ? `color: ${buttonHoverColor};` : ''}`}
        }
        
        .${blockID} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper {
            ${buttonIconNormalBackgroundType === 'gradient' ? `   	
                ${buttonIconNormalCustomGradientSwitcher && buttonIconNormalCustomGradientInputValue ? `background: ${buttonIconNormalCustomGradientInputValue};` : `background: ${buttonIconNormalGradientColor};`}
            `: `
                ${buttonIconBgColor ? `background: ${buttonIconBgColor};` : ''}
            `}
            ${buttonIconPaddingDesktopWidth && buttonIconPaddingDesktop?.top ? `padding: ${buttonIconPaddingDesktopWidth};` : ''}
            ${buttonIconMarginDesktopWidth && buttonIconPaddingDesktop?.top ? `margin: ${buttonIconMarginDesktopWidth};` : ''}

            ${buttonIconBorder ? `border: ${buttonIconBorder};` : ''}
            ${buttonIconBorderColor ? `border-color: ${buttonIconBorderColor};` : ''}
            ${buttonIconBorderDesktopWidth !== 'px px px px' ? `border-width: ${buttonIconBorderDesktopWidth};` : ''}
            ${buttonIconBorderRadiusDesktopWidth !== 'px px px px' ? `border-radius: ${buttonIconBorderRadiusDesktopWidth};` : ''}
        }
        .${blockID} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-icon-wrapper {
            ${buttonIconHoverBackgroundType === 'gradient' ? `   	
                ${buttonIconHoverCustomGradientSwitcher && buttonIconHoverCustomGradientInputValue ? `background: ${buttonIconHoverCustomGradientInputValue};` : `background: ${buttonIconHoverGradientColor};`}
            `: `
                ${buttonIconBgHoverColor ? `background: ${buttonIconBgHoverColor};` : ''}
            `}
            ${buttonIconBorderHoverColor ? `border-color: ${buttonIconBorderHoverColor};` : ''}
        }
        .${blockID} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper svg {
            ${buttonIconSize?.Desktop && buttonIconSizeUnits?.Desktop ? `width: ${buttonIconSize?.Desktop}${buttonIconSizeUnits?.Desktop};` : ''}
            ${buttonIconSize?.Desktop && buttonIconSizeUnits?.Desktop ? `height: ${buttonIconSize?.Desktop}${buttonIconSizeUnits?.Desktop};` : ''}
            ${buttonIconColor ? `fill: ${buttonIconColor};` : ''}
            ${buttonIconRotate?.Desktop ? `transform: rotate(${buttonIconRotate?.Desktop}deg);` : ''}
            transition: all .3s ease-in-out;
            
        }
        .${blockID} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-icon-wrapper svg {
            ${buttonIconHoverColor ? `fill: ${buttonIconHoverColor};` : ''}
            ${buttonIconRotateHover?.Desktop ? `transform: rotate(${buttonIconRotateHover?.Desktop}deg);` : ''}
        }

        .${blockID} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper .fb-advanced-button-icon-image {
            ${buttonIconImageWidth ? `width: ${buttonIconImageWidth?.Desktop}${buttonIconImageWidthUnits?.Desktop};` : ''}
            ${buttonIconImageHeight ? `height: ${buttonIconImageHeight?.Desktop}${buttonIconImageHeightUnits?.Desktop};` : ''}
            ${buttonIconImagedisplay ? `object-fit: ${buttonIconImagedisplay};` : ''}
            ${buttonImageRotate?.Desktop ? `transform: rotate(${buttonImageRotate?.Desktop}deg);` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-icon-wrapper .fb-advanced-button-icon-image {
            ${buttonImageRotateHover?.Desktop ? `transform: rotate(${buttonImageRotateHover?.Desktop}deg);` : ''}
        }

        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-advanced-button-main-wrapper {
                ${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnHZOrientationType === 'left' && advancedBtnHZLeftOffset?.Tablet ? `left: ${advancedBtnHZLeftOffset?.Tablet}${advancedBtnHZLeftOffsetUnits?.Tablet};` : ''}
                ${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnHZOrientationType === 'right' && advancedBtnHZRightOffset?.Tablet ? `right: ${advancedBtnHZRightOffset?.Tablet}${advancedBtnHZRightOffsetUnits?.Tablet};` : ''}
                ${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnVROrientationType === 'top' && advancedBtnVRTopOffset?.Tablet ? `top: ${advancedBtnVRTopOffset?.Tablet}${advancedBtnVRTopOffsetUnits?.Tablet};` : ''}
                ${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnVROrientationType === 'bottom' && advancedBtnVRBottomOffset?.Tablet ? `bottom: ${advancedBtnVRBottomOffset?.Tablet}${advancedBtnVRBottomOffsetUnits?.Tablet};` : ''}
                ${buttonGlobalZIndex?.Tablet ? `z-index: ${buttonGlobalZIndex?.Tablet};` : ''}
            }
            .${blockID} .fb-advanced-button-wrapper {
                ${globalTabletPadding && buttonGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && buttonGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
                ${globalTabletBorderWidth && buttonGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && buttonGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}

                ${buttonTransformNormalProportions
            ? (buttonTransformNormalScale?.Tablet
                ? `transform: scale(${buttonTransformNormalScale?.Tablet});`
                : ''
            )
            : (
                (buttonTransformNormalScaleX?.Tablet || buttonTransformNormalScaleY?.Tablet)
                    ? `transform: ${buttonTransformNormalScaleX?.Tablet ? `scaleX(${buttonTransformNormalScaleX?.Tablet}) ` : ''}${buttonTransformNormalScaleY?.Tablet ? `scaleY(${buttonTransformNormalScaleY?.Tablet})` : ''};`
                    : ''
            )
        }
            }
            .${blockID} .fb-advanced-button-wrapper .fb-advanced-button {
                ${buttonIconGapSize?.Tablet ? `gap: ${buttonIconGapSize?.Tablet}${buttonIconGapUnits?.Tablet};` : ''}
                ${buttonTabletPaddingStr && buttonTabPadding?.top ? `padding: ${buttonTabletPaddingStr};` : ''}
                ${buttonTabletMarginStr && buttonTabMargin?.top ? `margin: ${buttonTabletMarginStr};` : ''}
                ${buttonTabletBorderWidthStr && buttonTabBorderWidth?.top ? `border-width: ${buttonTabletBorderWidthStr};` : ''}
                ${buttonTabletBorderRadiusStr && buttonTabBorderRadiusWidth?.top ? `border-radius: ${buttonTabletBorderRadiusStr};` : ''}
                ${buttonWidth?.Tablet && buttonWidthUnits?.Tablet ? `width: ${buttonWidth?.Tablet}${buttonWidthUnits?.Tablet};` : ''}
                ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Tablet && buttonFontSizeUnits?.Tablet ? `font-size: ${buttonFontSize?.Tablet}${buttonFontSizeUnits?.Tablet};` : ''}
                ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Tablet && buttonLetterSpacingUnits?.Tablet ? `letter-spacing: ${buttonLetterSpacing?.Tablet}${buttonLetterSpacingUnits?.Tablet};` : ''}
                ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Tablet && buttonLineHeightUnits?.Tablet ? `line-height: ${buttonLineHeight?.Tablet}${buttonLineHeightUnits?.Tablet};` : ''}
            }

            .${blockID} .fb-advanced-button-wrapper:hover {

                ${buttonTransformHoverProportions
            ? (buttonTransformHoverScale?.Tablet
                ? `transform: scale(${buttonTransformHoverScale?.Tablet});`
                : ''
            )
            : (
                (buttonTransformHoverScaleX?.Tablet || buttonTransformHoverScaleY?.Tablet)
                    ? `transform: ${buttonTransformHoverScaleX?.Tablet ? `scaleX(${buttonTransformHoverScaleX?.Tablet}) ` : ''}${buttonTransformHoverScaleY?.Tablet ? `scaleY(${buttonTransformHoverScaleY?.Tablet})` : ''};`
                    : ''
            )
        }
            }

            .${blockID} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper {
                ${buttonIconPaddingTabletWidth && buttonIconPaddingTablet?.top ? `padding: ${buttonIconPaddingTabletWidth};` : ''}
                ${buttonIconBorderTabletWidth !== 'px px px px' ? `border-width: ${buttonIconBorderTabletWidth};` : ''}
                ${buttonIconBorderRadiusTabletWidth !== 'px px px px' ? `border-radius: ${buttonIconBorderRadiusTabletWidth};` : ''}
            }
            .${blockID} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper svg {
                ${buttonIconSize?.Tablet && buttonIconSizeUnits?.Tablet ? `width: ${buttonIconSize?.Tablet}${buttonIconSizeUnits?.Tablet};` : ''}
                ${buttonIconSize?.Tablet && buttonIconSizeUnits?.Tablet ? `height: ${buttonIconSize?.Tablet}${buttonIconSizeUnits?.Tablet};` : ''}
                ${buttonIconRotate?.Tablet ? `transform: rotate(${buttonIconRotate?.Tablet}deg);` : ''}
            }

            .${blockID} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-icon-wrapper svg {
                ${buttonIconRotateHover?.Tablet ? `transform: rotate(${buttonIconRotateHover?.Tablet}deg);` : ''}
            }

            .${blockID} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper .fb-advanced-button-icon-image {
                ${buttonIconImageWidth ? `width: ${buttonIconImageWidth?.Tablet}${buttonIconImageWidthUnits?.Tablet};` : ''}
                ${buttonIconImageHeight ? `height: ${buttonIconImageHeight?.Tablet}${buttonIconImageHeightUnits?.Tablet};` : ''}
                ${buttonImageRotate?.Tablet ? `transform: rotate(${buttonImageRotate?.Tablet}deg);` : ''}
            }
            .${blockID} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-icon-wrapper .fb-advanced-button-icon-image {
                ${buttonImageRotateHover?.Tablet ? `transform: rotate(${buttonImageRotateHover?.Tablet}deg);` : ''}		
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockID}.fb-advanced-button-main-wrapper {
                ${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnHZOrientationType === 'left' && advancedBtnHZLeftOffset?.Mobile ? `left: ${advancedBtnHZLeftOffset?.Mobile}${advancedBtnHZLeftOffsetUnits?.Mobile};` : ''}
                ${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnHZOrientationType === 'right' && advancedBtnHZRightOffset?.Mobile ? `right: ${advancedBtnHZRightOffset?.Mobile}${advancedBtnHZRightOffsetUnits?.Mobile};` : ''}
                ${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnVROrientationType === 'top' && advancedBtnVRTopOffset?.Mobile ? `top: ${advancedBtnVRTopOffset?.Mobile}${advancedBtnVRTopOffsetUnits?.Mobile};` : ''}
                ${advancedBtnPositionType !== 'default' && advancedBtnPositionType !== 'relative' && advancedBtnVROrientationType === 'bottom' && advancedBtnVRBottomOffset?.Mobile ? `bottom: ${advancedBtnVRBottomOffset?.Mobile}${advancedBtnVRBottomOffsetUnits?.Mobile};` : ''}
                ${buttonGlobalZIndex?.Mobile ? `z-index: ${buttonGlobalZIndex?.Mobile};` : ''}
            }
            .${blockID} .fb-advanced-button-wrapper {
                ${globalMobilePadding && buttonGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && buttonGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
                ${globalMobileBorderWidth && buttonGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && buttonGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}

                ${buttonTransformNormalProportions
            ? (buttonTransformNormalScale?.Mobile
                ? `transform: scale(${buttonTransformNormalScale?.Mobile});`
                : ''
            )
            : (
                (buttonTransformNormalScaleX?.Mobile || buttonTransformNormalScaleY?.Mobile)
                    ? `transform: ${buttonTransformNormalScaleX?.Mobile ? `scaleX(${buttonTransformNormalScaleX?.Mobile}) ` : ''}${buttonTransformNormalScaleY?.Mobile ? `scaleY(${buttonTransformNormalScaleY?.Mobile})` : ''};`
                    : ''
            )
        }
            }

            .${blockID} .fb-advanced-button-wrapper:hover {
                ${buttonTransformHoverProportions
            ? (buttonTransformHoverScale?.Mobile
                ? `transform: scale(${buttonTransformHoverScale?.Mobile});`
                : ''
            )
            : (
                (buttonTransformHoverScaleX?.Mobile || buttonTransformHoverScaleY?.Mobile)
                    ? `transform: ${buttonTransformHoverScaleX?.Mobile ? `scaleX(${buttonTransformHoverScaleX?.Mobile}) ` : ''}${buttonTransformHoverScaleY?.Mobile ? `scaleY(${buttonTransformHoverScaleY?.Mobile})` : ''};`
                    : ''
            )
        }
            }
            .${blockID} .fb-advanced-button-wrapper .fb-advanced-button {
                ${buttonIconGapSize?.Mobile ? `gap: ${buttonIconGapSize?.Mobile}${buttonIconGapUnits?.Mobile};` : ''}
                ${buttonMobilePaddingStr && buttonMobilePadding?.top ? `padding: ${buttonMobilePaddingStr};` : ''}
                ${buttonMobileMarginStr && buttonMobileMargin?.top ? `margin: ${buttonMobileMarginStr};` : ''}
                ${buttonMobileBorderWidthStr && buttonMobileBorderWidth?.top ? `border-width: ${buttonMobileBorderWidthStr};` : ''}
                ${buttonMobileBorderRadiusStr && buttonMobileBorderRadiusWidth?.top ? `border-radius: ${buttonMobileBorderRadiusStr};` : ''}
                ${buttonWidth?.Mobile && buttonWidthUnits?.Mobile ? `width: ${buttonWidth?.Mobile}${buttonWidthUnits?.Mobile};` : ''}
                ${buttonGlobalTypoSwitcher?.fontSize === false && buttonFontSize?.Mobile && buttonFontSizeUnits?.Mobile ? `font-size: ${buttonFontSize?.Mobile}${buttonFontSizeUnits?.Mobile};` : ''}
                ${buttonGlobalTypoSwitcher?.letterSpacing === false && buttonLetterSpacing?.Mobile && buttonLetterSpacingUnits?.Mobile ? `letter-spacing: ${buttonLetterSpacing?.Mobile}${buttonLetterSpacingUnits?.Mobile};` : ''}
                ${buttonGlobalTypoSwitcher?.lineHeight === false && buttonLineHeight?.Mobile && buttonLineHeightUnits?.Mobile ? `line-height: ${buttonLineHeight?.Mobile}${buttonLineHeightUnits?.Mobile};` : ''}
            }
            .${blockID} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper {
                ${buttonIconPaddingMobileWidth && buttonIconPaddingMobile?.top ? `padding: ${buttonIconPaddingMobileWidth};` : ''}
                ${buttonIconBorderMobileWidth !== 'px px px px' ? `border-width: ${buttonIconBorderMobileWidth};` : ''}
                ${buttonIconBorderRadiusMobileWidth !== 'px px px px' ? `border-radius: ${buttonIconBorderRadiusMobileWidth};` : ''}
            }
            .${blockID} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper svg {
                ${buttonIconSize?.Mobile && buttonIconSizeUnits?.Mobile ? `width: ${buttonIconSize?.Mobile}${buttonIconSizeUnits?.Mobile};` : ''}
                ${buttonIconSize?.Mobile && buttonIconSizeUnits?.Mobile ? `height: ${buttonIconSize?.Mobile}${buttonIconSizeUnits?.Mobile};` : ''}
                ${buttonIconRotate?.Mobile ? `transform: rotate(${buttonIconRotate?.Mobile}deg);` : ''}
            }
            .${blockID} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-icon-wrapper svg {
                ${buttonIconRotateHover?.Mobile ? `transform: rotate(${buttonIconRotateHover?.Mobile}deg);` : ''}
            }
            .${blockID} .fb-advanced-button-wrapper .fb-advanced-button .fb-advanced-button-icon-wrapper .fb-advanced-button-icon-image {
                ${buttonIconImageWidth?.Mobile ? `width: ${buttonIconImageWidth?.Mobile}${buttonIconImageWidthUnits?.Mobile};` : ''}
                ${buttonIconImageHeight?.Mobile ? `height: ${buttonIconImageHeight?.Mobile}${buttonIconImageHeightUnits?.Mobile};` : ''}
                ${buttonImageRotate?.Mobile ? `transform: rotate(${buttonImageRotate?.Mobile}deg);` : ''}
            }
            .${blockID} .fb-advanced-button-wrapper .fb-advanced-button:hover .fb-advanced-button-icon-wrapper .fb-advanced-button-icon-image {
                ${buttonImageRotateHover?.Mobile ? `transform: rotate(${buttonImageRotateHover?.Mobile}deg);` : ''}
            }
        }
    `;

    const customCss = getCustomCss(buttonCustomCSS, `.${blockID}`);
    return `${advancedButtonBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();

}
export default generateAdvancedButtonStyle;