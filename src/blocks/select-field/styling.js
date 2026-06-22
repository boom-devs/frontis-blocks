/**
 * Form Builder Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateTextFieldStyle = (attributes) => {
    const {
        blockID,

        formColumnGap,
        formColumnGapUnits,
        inputFieldMaxWidth,
        inputFieldMaxWidthUnits,
        inputFieldHeight,
        inputFieldHeightUnits,

        labelGlobalTypoSwitcher,
        labelGlobalTypographyData,
        labelGlobalTypoType,
        labelGlobalTypoOption,
        labelFontFamily,
        labelFontSize,
        labelFontSizeUnits,
        labelFontWeight,
        labelFontStyle,
        labelTextTransform,
        labelTextDecoration,
        labelLetterSpacing,
        labelLetterSpacingUnits,
        labelLineHeight,
        labelLineHeightUnits,
        
        inputFieldGlobalTypoSwitcher,
        inputFieldGlobalTypographyData,
        inputFieldGlobalTypoType,
        inputFieldGlobalTypoOption,
        inputFieldFontFamily,
        inputFieldFontSize,
        inputFieldFontSizeUnits,
        inputFieldFontWeight,
        inputFieldFontStyle,
        inputFieldTextTransform,
        inputFieldTextDecoration,
        inputFieldLetterSpacing,
        inputFieldLetterSpacingUnits,
        inputFieldLineHeight,
        inputFieldLineHeightUnits,

        labelColor,
        labelRequiredColor,

        inputFieldColor,
        inputFieldFocusColor,
        inputFieldPlaceholderColor,
        inputFieldPlaceholderFocusColor,

        inputFieldIconColor,
        inputFieldIconFocusColor,

        labelMarginUnits,
        labelMarginDesktop,
        labelMarginTablet,
        labelMarginMobile,

        inputFieldMarginUnits,
        inputFieldMarginDesktop,
        inputFieldMarginTablet,
        inputFieldMarginMobile,

        inputFieldPaddingUnits,
        inputFieldPaddingDesktop,
        inputFieldPaddingTablet,
        inputFieldPaddingMobile,

        inputFieldBgColorSwitcher,
        inputFieldBgType,
        inputFieldBgClassicColor,
        inputFieldBgGradientColor,
        inputFieldBgCustomGradientSwitcher,
        inputFieldBgCustomGradientInputValue,
        inputFieldBgImageUrl,
        inputFieldBgImageAlt,
        inputFieldBgImageID,
        inputFieldBgImagePosition,
        inputFieldBgImageAttachment,
        inputFieldBgImageRepeat,
        inputFieldBgImageSize,
        inputFieldBgHoverType,
        inputFieldBgHoverClassicColor,
        inputFieldBgHoverGradientColor,
        inputFieldBgHoverCustomGradientSwitcher,
        inputFieldBgHoverCustomGradientInputValue,
        inputFieldBgHoverImageUrl,
        inputFieldBgHoverImageAlt,
        inputFieldBgHoverImageID,
        inputFieldBgHoverImagePosition,
        inputFieldBgHoverImageAttachment,
        inputFieldBgHoverImageRepeat,
        inputFieldBgHoverImageSize,

        inputFieldBorder,
        inputFieldBorderColor,
        inputFieldBorderFocusColor,
        inputFieldBorderColorSwitcher,
        inputFieldBorderUnits,
        inputFieldBorderDesktop,
        inputFieldBorderTablet,
        inputFieldBorderMobile,
        inputFieldBorderRadiusUnits,
        inputFieldBorderRadiusDesktop,
        inputFieldBorderRadiusTablet,
        inputFieldBorderRadiusMobile,

        inputFieldBoxShadowSwitcher,
        inputFieldBoxShadowValues,
        inputFieldBoxShadowCssValue,
        inputFieldBoxShadowFocusValues,
        inputFieldBoxShadowFocusCssValue,
        
        inputFieldIconSize,
        inputFieldIconSizeUnits,
        inputFieldIconGap,
        inputFieldIconGapUnits,

        selectFieldIconSize,
        selectFieldIconSizeUnits,

        fieldCustomCSS,
        fieldGlobalWraperID,
        fieldGlobalWraperClass,

        // form Advance
        fieldZIndex,
        fieldOverflow,
        fieldPaddingUnits,
        fieldPaddingDesktop,
        fieldPaddingTablet,
        fieldPaddingMobile,

        fieldMarginUnits,
        fieldMarginDesktop,
        fieldMarginTablet,
        fieldMarginMobile,

        fieldBorder,
        fieldBorderColor,
        fieldBorderHoverColor,
        fieldBorderColorSwitcher,
        fieldBorderUnits,
        fieldBorderDesktop,
        fieldBorderTablet,
        fieldBorderMobile,

        fieldBorderRadiusUnits,
        fieldBorderRadiusDesktop,
        fieldBorderRadiusTablet,
        fieldBorderRadiusMobile,

        fieldBgColorSwitcher,
        fieldBgType,
        fieldBgClassicColor,
        fieldBgGradientColor,
        fieldBgCustomGradientSwitcher,
        fieldBgCustomGradientInputValue,
        fieldBgImageUrl,
        fieldBgImageAlt,
        fieldBgImageID,
        fieldBgImagePosition,
        fieldBgImageAttachment,
        fieldBgImageRepeat,
        fieldBgImageSize,
        fieldBgHoverType,
        fieldBgHoverClassicColor,
        fieldBgHoverGradientColor,
        fieldBgHoverCustomGradientSwitcher,
        fieldBgHoverCustomGradientInputValue,
        fieldBgHoverImageUrl,
        fieldBgHoverImageAlt,
        fieldBgHoverImageID,
        fieldBgHoverImagePosition,
        fieldBgHoverImageAttachment,
        fieldBgHoverImageRepeat,
        fieldBgHoverImageSize,

        fieldGlobalBoxShadowSwitcher,
        fieldGlobalBoxShadowValues,
        fieldGlobalHoverBoxShadowValues,
    } = attributes;

    const labelMarginDesktopWidth = `${labelMarginDesktop?.top}${labelMarginUnits?.Desktop} ${labelMarginDesktop?.right}${labelMarginUnits?.Desktop} ${labelMarginDesktop?.bottom}${labelMarginUnits?.Desktop} ${labelMarginDesktop?.left}${labelMarginUnits?.Desktop}`;
    const labelMarginTabletWidth = `${labelMarginTablet?.top}${labelMarginUnits?.Tablet} ${labelMarginTablet?.right}${labelMarginUnits?.Tablet} ${labelMarginTablet?.bottom}${labelMarginUnits?.Tablet} ${labelMarginTablet?.left}${labelMarginUnits?.Tablet}`;
    const labelMarginMobileWidth = `${labelMarginMobile?.top}${labelMarginUnits?.Mobile} ${labelMarginMobile?.right}${labelMarginUnits?.Mobile} ${labelMarginMobile?.bottom}${labelMarginUnits?.Mobile} ${labelMarginMobile?.left}${labelMarginUnits?.Mobile}`;

    const inputFieldMarginDesktopWidth = `${inputFieldMarginDesktop?.top}${inputFieldMarginUnits?.Desktop} ${inputFieldMarginDesktop?.right}${inputFieldMarginUnits?.Desktop} ${inputFieldMarginDesktop?.bottom}${inputFieldMarginUnits?.Desktop} ${inputFieldMarginDesktop?.left}${inputFieldMarginUnits?.Desktop}`;
    const inputFieldMarginTabletWidth = `${inputFieldMarginTablet?.top}${inputFieldMarginUnits?.Tablet} ${inputFieldMarginTablet?.right}${inputFieldMarginUnits?.Tablet} ${inputFieldMarginTablet?.bottom}${inputFieldMarginUnits?.Tablet} ${inputFieldMarginTablet?.left}${inputFieldMarginUnits?.Tablet}`;
    const inputFieldMarginMobileWidth = `${inputFieldMarginMobile?.top}${inputFieldMarginUnits?.Mobile} ${inputFieldMarginMobile?.right}${inputFieldMarginUnits?.Mobile} ${inputFieldMarginMobile?.bottom}${inputFieldMarginUnits?.Mobile} ${inputFieldMarginMobile?.left}${inputFieldMarginUnits?.Mobile}`;

    const inputFieldPaddingDesktopWidth = `${inputFieldPaddingDesktop?.top}${inputFieldPaddingUnits?.Desktop} ${inputFieldPaddingDesktop?.right}${inputFieldPaddingUnits?.Desktop} ${inputFieldPaddingDesktop?.bottom}${inputFieldPaddingUnits?.Desktop} ${inputFieldPaddingDesktop?.left}${inputFieldPaddingUnits?.Desktop}`;
    const inputFieldPaddingTabletWidth = `${inputFieldPaddingTablet?.top}${inputFieldPaddingUnits?.Tablet} ${inputFieldPaddingTablet?.right}${inputFieldPaddingUnits?.Tablet} ${inputFieldPaddingTablet?.bottom}${inputFieldPaddingUnits?.Tablet} ${inputFieldPaddingTablet?.left}${inputFieldPaddingUnits?.Tablet}`;
    const inputFieldPaddingMobileWidth = `${inputFieldPaddingMobile?.top}${inputFieldPaddingUnits?.Mobile} ${inputFieldPaddingMobile?.right}${inputFieldPaddingUnits?.Mobile} ${inputFieldPaddingMobile?.bottom}${inputFieldPaddingUnits?.Mobile} ${inputFieldPaddingMobile?.left}${inputFieldPaddingUnits?.Mobile}`;

    const inputFieldBorderDesktopWidth = `${inputFieldBorderDesktop?.top}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.right}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.bottom}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.left}${inputFieldBorderUnits?.Desktop}`;
    const inputFieldBorderTabletWidth = `${inputFieldBorderTablet?.top}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.right}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.bottom}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.left}${inputFieldBorderUnits?.Tablet}`;
    const inputFieldBorderMobileWidth = `${inputFieldBorderMobile?.top}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.right}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.bottom}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.left}${inputFieldBorderUnits?.Mobile}`;

    const inputFieldBorderRadiusDesktopWidth = `${inputFieldBorderRadiusDesktop?.top}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.right}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.bottom}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.left}${inputFieldBorderRadiusUnits?.Desktop}`;
    const inputFieldBorderRadiusTabletWidth = `${inputFieldBorderRadiusTablet?.top}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.right}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.bottom}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.left}${inputFieldBorderRadiusUnits?.Tablet}`;
    const inputFieldBorderRadiusMobileWidth = `${inputFieldBorderRadiusMobile?.top}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.right}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.bottom}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.left}${inputFieldBorderRadiusUnits?.Mobile}`;

    const fieldMarginDesktopWidth = `${fieldMarginDesktop?.top}${fieldMarginUnits?.Desktop} ${fieldMarginDesktop?.right}${fieldMarginUnits?.Desktop} ${fieldMarginDesktop?.bottom}${fieldMarginUnits?.Desktop} ${fieldMarginDesktop?.left}${fieldMarginUnits?.Desktop}`;
    const fieldMarginTabletWidth = `${fieldMarginTablet?.top}${fieldMarginUnits?.Tablet} ${fieldMarginTablet?.right}${fieldMarginUnits?.Tablet} ${fieldMarginTablet?.bottom}${fieldMarginUnits?.Tablet} ${fieldMarginTablet?.left}${fieldMarginUnits?.Tablet}`;
    const fieldMarginMobileWidth = `${fieldMarginMobile?.top}${fieldMarginUnits?.Mobile} ${fieldMarginMobile?.right}${fieldMarginUnits?.Mobile} ${fieldMarginMobile?.bottom}${fieldMarginUnits?.Mobile} ${fieldMarginMobile?.left}${fieldMarginUnits?.Mobile}`;

    const fieldPaddingDesktopWidth = `${fieldPaddingDesktop?.top}${fieldPaddingUnits?.Desktop} ${fieldPaddingDesktop?.right}${fieldPaddingUnits?.Desktop} ${fieldPaddingDesktop?.bottom}${fieldPaddingUnits?.Desktop} ${fieldPaddingDesktop?.left}${fieldPaddingUnits?.Desktop}`;
    const fieldPaddingTabletWidth = `${fieldPaddingTablet?.top}${fieldPaddingUnits?.Tablet} ${fieldPaddingTablet?.right}${fieldPaddingUnits?.Tablet} ${fieldPaddingTablet?.bottom}${fieldPaddingUnits?.Tablet} ${fieldPaddingTablet?.left}${fieldPaddingUnits?.Tablet}`;
    const fieldPaddingMobileWidth = `${fieldPaddingMobile?.top}${fieldPaddingUnits?.Mobile} ${fieldPaddingMobile?.right}${fieldPaddingUnits?.Mobile} ${fieldPaddingMobile?.bottom}${fieldPaddingUnits?.Mobile} ${fieldPaddingMobile?.left}${fieldPaddingUnits?.Mobile}`;

    const fieldBorderDesktopWidth = `${fieldBorderDesktop?.top}${fieldBorderUnits?.Desktop} ${fieldBorderDesktop?.right}${fieldBorderUnits?.Desktop} ${fieldBorderDesktop?.bottom}${fieldBorderUnits?.Desktop} ${fieldBorderDesktop?.left}${fieldBorderUnits?.Desktop}`;
    const fieldBorderTabletWidth = `${fieldBorderTablet?.top}${fieldBorderUnits?.Tablet} ${fieldBorderTablet?.right}${fieldBorderUnits?.Tablet} ${fieldBorderTablet?.bottom}${fieldBorderUnits?.Tablet} ${fieldBorderTablet?.left}${fieldBorderUnits?.Tablet}`;
    const fieldBorderMobileWidth = `${fieldBorderMobile?.top}${fieldBorderUnits?.Mobile} ${fieldBorderMobile?.right}${fieldBorderUnits?.Mobile} ${fieldBorderMobile?.bottom}${fieldBorderUnits?.Mobile} ${fieldBorderMobile?.left}${fieldBorderUnits?.Mobile}`;

    const fieldBorderRadiusDesktopWidth = `${fieldBorderRadiusDesktop?.top}${fieldBorderRadiusUnits?.Desktop} ${fieldBorderRadiusDesktop?.right}${fieldBorderRadiusUnits?.Desktop} ${fieldBorderRadiusDesktop?.bottom}${fieldBorderRadiusUnits?.Desktop} ${fieldBorderRadiusDesktop?.left}${fieldBorderRadiusUnits?.Desktop}`;
    const fieldBorderRadiusTabletWidth = `${fieldBorderRadiusTablet?.top}${fieldBorderRadiusUnits?.Tablet} ${fieldBorderRadiusTablet?.right}${fieldBorderRadiusUnits?.Tablet} ${fieldBorderRadiusTablet?.bottom}${fieldBorderRadiusUnits?.Tablet} ${fieldBorderRadiusTablet?.left}${fieldBorderRadiusUnits?.Tablet}`;
    const fieldBorderRadiusMobileWidth = `${fieldBorderRadiusMobile?.top}${fieldBorderRadiusUnits?.Mobile} ${fieldBorderRadiusMobile?.right}${fieldBorderRadiusUnits?.Mobile} ${fieldBorderRadiusMobile?.bottom}${fieldBorderRadiusUnits?.Mobile} ${fieldBorderRadiusMobile?.left}${fieldBorderRadiusUnits?.Mobile}`;


    let styles = `
        .fb-text-field-wrapper.${blockID} {
            position: relative;
            width: 100%;
            ${inputFieldMaxWidthUnits?.Desktop === '%' && inputFieldMaxWidth?.Desktop < 100 ? (
                `max-width: calc(${inputFieldMaxWidth?.Desktop}${inputFieldMaxWidthUnits?.Desktop} - (${formColumnGap?.Desktop}${formColumnGapUnits?.Desktop} / 2));` 
            ) : (
                inputFieldMaxWidth?.Desktop ? `max-width: ${inputFieldMaxWidth?.Desktop}${inputFieldMaxWidthUnits?.Desktop};` : ''
            )}
            ${fieldZIndex?.Desktop ? `z-index: ${fieldZIndex?.Desktop};` : ''}
            ${fieldOverflow !== 'default' ? `overflow: ${fieldOverflow};` : ''}
        }
        
        .fb-text-field-wrapper.${blockID} .fb-field-group-wrapper {
            position: relative;
            ${
                fieldBgType === "gradient"
                    ? `background: ${
                        fieldBgCustomGradientSwitcher && fieldBgCustomGradientInputValue
                        ? fieldBgCustomGradientInputValue
                        : fieldBgGradientColor
                    };`
                    : fieldBgImageUrl && fieldBgImageUrl !== null && fieldBgImageUrl !== ""
                    ? `
                    ${fieldBgImageUrl ? `background-image: url(${fieldBgImageUrl});` : ''}
                    ${fieldBgImagePosition ? `background-position: ${fieldBgImagePosition};` : ''}
                    ${fieldBgImageAttachment ? `background-attachment: ${fieldBgImageAttachment};` : ''}
                    ${fieldBgImageRepeat ? `background-repeat: ${fieldBgImageRepeat};` : ''}
                    ${fieldBgImageSize ? `background-size: ${fieldBgImageSize};` : ''}
                    `
                    : fieldBgClassicColor ? `background: ${fieldBgClassicColor};` : ''
            }
            ${fieldPaddingDesktopWidth && fieldPaddingDesktop?.top ? `padding: ${fieldPaddingDesktopWidth};` : ''}
            ${fieldMarginDesktopWidth && fieldMarginDesktop?.top ? `margin: ${fieldMarginDesktopWidth};` : ''}
            ${fieldBorder ? `border-style: ${fieldBorder};` : ''}
            ${fieldBorderDesktopWidth && fieldBorderDesktop?.top ? `border-width: ${fieldBorderDesktopWidth};` : ''}
            ${fieldBorderColor ? `border-color: ${fieldBorderColor};` : ''}
            ${fieldBorderRadiusDesktopWidth && fieldBorderRadiusDesktop?.top ? `border-radius: ${fieldBorderRadiusDesktopWidth};` : ''}
            transition: all 0.3s ease-in-out;
        }
    
        .fb-text-field-wrapper.${blockID} .fb-field-label-wrapper {
            display: flex;
            align-items: start;
            gap: 5px;
            ${labelMarginDesktopWidth && labelMarginDesktop?.top ? `margin: ${labelMarginDesktopWidth};` : ''}
            
            ${labelGlobalTypoSwitcher?.fontFamily === true && labelGlobalTypographyData?.fontFamily ? `font-family: ${labelGlobalTypographyData?.fontFamily};` : ''}
            ${labelGlobalTypoSwitcher?.fontSize === true && labelGlobalTypographyData?.fontSize ? `font-size: ${labelGlobalTypographyData?.fontSize};` : ''}
            ${labelGlobalTypoSwitcher?.fontWeight === true && labelGlobalTypographyData?.fontWeight ? `font-weight: ${labelGlobalTypographyData?.fontWeight};` : ''}
            ${labelGlobalTypoSwitcher?.fontStyle === true && labelGlobalTypographyData?.fontStyle ? `font-style: ${labelGlobalTypographyData?.fontStyle};` : ''}
            ${labelGlobalTypoSwitcher?.textTransform === true && labelGlobalTypographyData?.textTransform ? `text-transform: ${labelGlobalTypographyData?.textTransform};` : ''}
            ${labelGlobalTypoSwitcher?.textDecoration === true && labelGlobalTypographyData?.textDecoration ? `text-decoration: ${labelGlobalTypographyData?.textDecoration};` : ''}
            ${labelGlobalTypoSwitcher?.letterSpacing === true && labelGlobalTypographyData?.letterSpacing ? `letter-spacing: ${labelGlobalTypographyData?.letterSpacing};` : ''}
            ${labelGlobalTypoSwitcher?.lineHeight === true && labelGlobalTypographyData?.lineHeight ? `line-height: ${labelGlobalTypographyData?.lineHeight};` : ''}
            
            ${labelGlobalTypoSwitcher?.fontFamily === false && labelFontFamily && labelFontFamily !== 'Default' ? `font-family: ${labelFontFamily};` : ''}
            ${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Desktop ? `font-size: ${labelFontSize?.Desktop}${labelFontSizeUnits?.Desktop};` : ''}
            ${labelGlobalTypoSwitcher?.fontWeight === false && labelFontWeight ? `font-weight: ${labelFontWeight};` : ''}
            ${labelGlobalTypoSwitcher?.fontStyle === false && labelFontStyle ? `font-style: ${labelFontStyle};` : ''}
            ${labelGlobalTypoSwitcher?.textTransform === false && labelTextTransform ? `text-transform: ${labelTextTransform};` : ''}
            ${labelGlobalTypoSwitcher?.textDecoration === false && labelTextDecoration ? `text-decoration: ${labelTextDecoration};` : ''}
            ${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Desktop ? `letter-spacing: ${labelLetterSpacing?.Desktop}${labelLetterSpacingUnits?.Desktop};` : ''}
            ${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Desktop ? `line-height: ${labelLineHeight?.Desktop}${labelLineHeightUnits?.Desktop};` : ''}
            
        }
        .fb-text-field-wrapper.${blockID} .fb-field-label-wrapper .fb-form-label {
            ${labelColor ? `color: ${labelColor};` : ''}
        }
        .fb-text-field-wrapper.${blockID} .fb-field-label-wrapper .fb-required-symbol {
            ${labelRequiredColor ? `color: ${labelRequiredColor};` : ''}
        }
    
        .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper {
        }
        .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input {
            position: relative;
            display: flex;
            ${inputFieldIconGap?.Desktop ? `gap: ${inputFieldIconGap?.Desktop}${inputFieldIconGapUnits?.Desktop};` : ''}
            ${inputFieldMarginDesktopWidth && inputFieldMarginDesktop?.top ? `margin: ${inputFieldMarginDesktopWidth};` : ''}
        }
        .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select::placeholder {
            ${inputFieldPlaceholderColor ? `color: ${inputFieldPlaceholderColor};` : ''}
        }
        .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select:focus {
            box-shadow: none;
            outline: none;
            ${inputFieldFocusColor ? `color: ${inputFieldFocusColor};` : ''}
            ${
                inputFieldBgHoverType === "gradient"
                ? `background: ${
                    inputFieldBgHoverCustomGradientSwitcher && inputFieldBgHoverCustomGradientInputValue
                        ? inputFieldBgHoverCustomGradientInputValue
                        : inputFieldBgHoverGradientColor
                    };`
                : inputFieldBgHoverImageUrl && inputFieldBgHoverImageUrl !== null && inputFieldBgHoverImageUrl !== ""
                ? `
                    ${inputFieldBgHoverImageUrl ? `background-image: url(${inputFieldBgHoverImageUrl});` : ''}
                    ${inputFieldBgHoverImagePosition ? `background-position: ${inputFieldBgHoverImagePosition};` : ''}
                    ${inputFieldBgHoverImageAttachment ? `background-attachment: ${inputFieldBgHoverImageAttachment};` : ''}
                    ${inputFieldBgHoverImageRepeat ? `background-repeat: ${inputFieldBgHoverImageRepeat};` : ''}
                    ${inputFieldBgHoverImageSize ? `background-size: ${inputFieldBgHoverImageSize};` : ''}
                `
                : inputFieldBgHoverClassicColor ? `background: ${inputFieldBgHoverClassicColor};` : ''
            }
            ${inputFieldBorderFocusColor ? `border-color: ${inputFieldBorderFocusColor};` : ''}
            ${inputFieldBoxShadowFocusCssValue ? `box-shadow: ${inputFieldBoxShadowFocusCssValue};` : ""}
            transition: all 0.3s ease-in-out;
        }
        .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select:focus::placeholder {
            ${inputFieldPlaceholderFocusColor ? `color: ${inputFieldPlaceholderFocusColor};` : ''}
        }
        .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
        }
        .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select {
            box-sizing: border-box;
            width: 100%;
            ${inputFieldHeight?.Desktop ? `height: ${inputFieldHeight?.Desktop}${inputFieldHeightUnits?.Desktop};` : ''}
            
            ${inputFieldGlobalTypoSwitcher?.fontFamily === true && inputFieldGlobalTypographyData?.fontFamily ? `font-family: ${inputFieldGlobalTypographyData?.fontFamily};` : ''}
            ${inputFieldGlobalTypoSwitcher?.fontSize === true && inputFieldGlobalTypographyData?.fontSize ? `font-size: ${inputFieldGlobalTypographyData?.fontSize};` : ''}
            ${inputFieldGlobalTypoSwitcher?.fontWeight === true && inputFieldGlobalTypographyData?.fontWeight ? `font-weight: ${inputFieldGlobalTypographyData?.fontWeight};` : ''}
            ${inputFieldGlobalTypoSwitcher?.fontStyle === true && inputFieldGlobalTypographyData?.fontStyle ? `font-style: ${inputFieldGlobalTypographyData?.fontStyle};` : ''}
            ${inputFieldGlobalTypoSwitcher?.textTransform === true && inputFieldGlobalTypographyData?.textTransform ? `text-transform: ${inputFieldGlobalTypographyData?.textTransform};` : ''}
            ${inputFieldGlobalTypoSwitcher?.textDecoration === true && inputFieldGlobalTypographyData?.textDecoration ? `text-decoration: ${inputFieldGlobalTypographyData?.textDecoration};` : ''}
            ${inputFieldGlobalTypoSwitcher?.letterSpacing === true && inputFieldGlobalTypographyData?.letterSpacing ? `letter-spacing: ${inputFieldGlobalTypographyData?.letterSpacing};` : ''}
            ${inputFieldGlobalTypoSwitcher?.lineHeight === true && inputFieldGlobalTypographyData?.lineHeight ? `line-height: ${inputFieldGlobalTypographyData?.lineHeight};` : ''}
            
            ${inputFieldGlobalTypoSwitcher?.fontFamily === false && inputFieldFontFamily && inputFieldFontFamily !== 'Default' ? `font-family: ${inputFieldFontFamily};` : ''}
            ${inputFieldGlobalTypoSwitcher?.fontSize === false && inputFieldFontSize?.Desktop ? `font-size: ${inputFieldFontSize?.Desktop}${inputFieldFontSizeUnits?.Desktop};` : ''}
            ${inputFieldGlobalTypoSwitcher?.fontWeight === false && inputFieldFontWeight ? `font-weight: ${inputFieldFontWeight};` : ''}
            ${inputFieldGlobalTypoSwitcher?.fontStyle === false && inputFieldFontStyle ? `font-style: ${inputFieldFontStyle};` : ''}
            ${inputFieldGlobalTypoSwitcher?.textTransform === false && inputFieldTextTransform ? `text-transform: ${inputFieldTextTransform};` : ''}
            ${inputFieldGlobalTypoSwitcher?.textDecoration === false && inputFieldTextDecoration ? `text-decoration: ${inputFieldTextDecoration};` : ''}
            ${inputFieldGlobalTypoSwitcher?.letterSpacing === false && inputFieldLetterSpacing?.Desktop ? `letter-spacing: ${inputFieldLetterSpacing?.Desktop}${inputFieldLetterSpacingUnits?.Desktop};` : ''}
            ${inputFieldGlobalTypoSwitcher?.lineHeight === false && inputFieldLineHeight?.Desktop ? `line-height: ${inputFieldLineHeight?.Desktop}${inputFieldLineHeightUnits?.Desktop};` : ''}
            
            ${inputFieldColor ? `color: ${inputFieldColor};` : ''}
            ${
                inputFieldBgType === "gradient"
                    ? `background: ${
                        inputFieldBgCustomGradientSwitcher && inputFieldBgCustomGradientInputValue
                        ? inputFieldBgCustomGradientInputValue
                        : inputFieldBgGradientColor
                    };`
                    : inputFieldBgImageUrl && inputFieldBgImageUrl !== null && inputFieldBgImageUrl !== ""
                    ? `
                    ${inputFieldBgImageUrl ? `background-image: url(${inputFieldBgImageUrl});` : ''}
                    ${inputFieldBgImagePosition ? `background-position: ${inputFieldBgImagePosition};` : ''}
                    ${inputFieldBgImageAttachment ? `background-attachment: ${inputFieldBgImageAttachment};` : ''}
                    ${inputFieldBgImageRepeat ? `background-repeat: ${inputFieldBgImageRepeat};` : ''}
                    ${inputFieldBgImageSize ? `background-size: ${inputFieldBgImageSize};` : ''}
                    `
                    : inputFieldBgClassicColor ? `background: ${inputFieldBgClassicColor};` : ''
            }

            ${inputFieldBorder ? `border-style: ${inputFieldBorder};` : ''}
            ${inputFieldBorderDesktopWidth && inputFieldBorderDesktop?.top ? `border-width: ${inputFieldBorderDesktopWidth};` : ''}
            ${inputFieldBorderColor ? `border-color: ${inputFieldBorderColor};` : ''}
            ${inputFieldBorderRadiusDesktopWidth && inputFieldBorderRadiusDesktop?.top ? `border-radius: ${inputFieldBorderRadiusDesktopWidth};` : ''}
            ${inputFieldBoxShadowCssValue ? `box-shadow: ${inputFieldBoxShadowCssValue};` : ""}

            ${inputFieldPaddingDesktopWidth && inputFieldPaddingDesktop?.top ? `padding: ${inputFieldPaddingDesktopWidth};` : ''}

            transition: all 0.3s ease-in-out;
        }

        .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-field-required-text {
            ${labelRequiredColor ? `color: ${labelRequiredColor};` : ''}

            ${inputFieldGlobalTypoSwitcher?.fontFamily === true && inputFieldGlobalTypographyData?.fontFamily ? `font-family: ${inputFieldGlobalTypographyData?.fontFamily};` : ''}
            ${inputFieldGlobalTypoSwitcher?.fontSize === true && inputFieldGlobalTypographyData?.fontSize ? `font-size: ${inputFieldGlobalTypographyData?.fontSize};` : ''}
            ${inputFieldGlobalTypoSwitcher?.fontWeight === true && inputFieldGlobalTypographyData?.fontWeight ? `font-weight: ${inputFieldGlobalTypographyData?.fontWeight};` : ''}
            ${inputFieldGlobalTypoSwitcher?.fontStyle === true && inputFieldGlobalTypographyData?.fontStyle ? `font-style: ${inputFieldGlobalTypographyData?.fontStyle};` : ''}
            ${inputFieldGlobalTypoSwitcher?.textTransform === true && inputFieldGlobalTypographyData?.textTransform ? `text-transform: ${inputFieldGlobalTypographyData?.textTransform};` : ''}
            ${inputFieldGlobalTypoSwitcher?.textDecoration === true && inputFieldGlobalTypographyData?.textDecoration ? `text-decoration: ${inputFieldGlobalTypographyData?.textDecoration};` : ''}
            ${inputFieldGlobalTypoSwitcher?.letterSpacing === true && inputFieldGlobalTypographyData?.letterSpacing ? `letter-spacing: ${inputFieldGlobalTypographyData?.letterSpacing};` : ''}
            ${inputFieldGlobalTypoSwitcher?.lineHeight === true && inputFieldGlobalTypographyData?.lineHeight ? `line-height: ${inputFieldGlobalTypographyData?.lineHeight};` : ''}
            
            ${inputFieldGlobalTypoSwitcher?.fontFamily === false && inputFieldFontFamily && inputFieldFontFamily !== 'Default' ? `font-family: ${inputFieldFontFamily};` : ''}
            ${inputFieldGlobalTypoSwitcher?.fontSize === false && inputFieldFontSize?.Desktop ? `font-size: ${inputFieldFontSize?.Desktop}${inputFieldFontSizeUnits?.Desktop};` : ''}
            ${inputFieldGlobalTypoSwitcher?.fontWeight === false && inputFieldFontWeight ? `font-weight: ${inputFieldFontWeight};` : ''}
            ${inputFieldGlobalTypoSwitcher?.fontStyle === false && inputFieldFontStyle ? `font-style: ${inputFieldFontStyle};` : ''}
            ${inputFieldGlobalTypoSwitcher?.textTransform === false && inputFieldTextTransform ? `text-transform: ${inputFieldTextTransform};` : ''}
            ${inputFieldGlobalTypoSwitcher?.textDecoration === false && inputFieldTextDecoration ? `text-decoration: ${inputFieldTextDecoration};` : ''}
            ${inputFieldGlobalTypoSwitcher?.letterSpacing === false && inputFieldLetterSpacing?.Desktop ? `letter-spacing: ${inputFieldLetterSpacing?.Desktop}${inputFieldLetterSpacingUnits?.Desktop};` : ''}
            ${inputFieldGlobalTypoSwitcher?.lineHeight === false && inputFieldLineHeight?.Desktop ? `line-height: ${inputFieldLineHeight?.Desktop}${inputFieldLineHeightUnits?.Desktop};` : ''}

        }

        .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input .fb-field-icon {
            display: flex;
            ${inputFieldIconSize?.Desktop ? `width: ${inputFieldIconSize?.Desktop}${inputFieldIconSizeUnits?.Desktop};` : ''}
        }
        .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input .fb-select-field-arrow {
            display: flex;
            ${selectFieldIconSize?.Desktop ? `width: ${selectFieldIconSize?.Desktop}${selectFieldIconSizeUnits?.Desktop};` : ''}
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
        }
        .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input .fb-select-field-arrow svg {
            width: 100%;
            ${inputFieldIconColor ? `fill: ${inputFieldIconColor};` : ''}
        }
        .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select:focus ~ .fb-select-field-arrow svg {
            ${inputFieldIconFocusColor ? `fill: ${inputFieldIconFocusColor};` : ''}
        }
    
        @media only screen and (max-width: 1024px) {
            .fb-text-field-wrapper.${blockID} {
                position: relative;
                ${fieldZIndex?.Tablet ? `z-index: ${fieldZIndex?.Tablet};` : ''}
                ${inputFieldMaxWidthUnits?.Tablet === '%' && inputFieldMaxWidth?.Tablet < 100 ? (
                    `max-width: calc(${inputFieldMaxWidth?.Tablet}${inputFieldMaxWidthUnits?.Tablet} - (${formColumnGap?.Tablet}${formColumnGapUnits?.Tablet} / 2));` 
                ) : (
                    inputFieldMaxWidth?.Tablet ? `max-width: ${inputFieldMaxWidth?.Tablet}${inputFieldMaxWidthUnits?.Tablet};` : ''
                )}
            }
            
            .fb-text-field-wrapper.${blockID} .fb-field-group-wrapper {
                ${fieldPaddingTabletWidth && fieldPaddingTablet?.top ? `padding: ${fieldPaddingTabletWidth};` : ''}
                ${fieldMarginTabletWidth && fieldMarginTablet?.top ? `margin: ${fieldMarginTabletWidth};` : ''}
                ${fieldBorderTabletWidth && fieldBorderTablet?.top ? `border-width: ${fieldBorderTabletWidth};` : ''}
                ${fieldBorderRadiusTabletWidth && fieldBorderRadiusTablet?.top ? `border-radius: ${fieldBorderRadiusTabletWidth};` : ''}
            }
        
            .fb-text-field-wrapper.${blockID} .fb-field-label-wrapper {
                ${labelMarginTabletWidth && labelMarginTablet?.top ? `margin: ${labelMarginTabletWidth};` : ''}

                ${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Tablet ? `font-size: ${labelFontSize?.Tablet}${labelFontSizeUnits?.Tablet};` : ''}
                ${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Tablet ? `letter-spacing: ${labelLetterSpacing?.Tablet}${labelLetterSpacingUnits?.Tablet};` : ''}
                ${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Tablet ? `line-height: ${labelLineHeight?.Tablet}${labelLineHeightUnits?.Tablet};` : ''}
                
            }
            .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input {
                ${inputFieldIconGap?.Tablet ? `gap: ${inputFieldIconGap?.Tablet}${inputFieldIconGapUnits?.Tablet};` : ''}
                ${inputFieldMarginTabletWidth && inputFieldMarginTablet?.top ? `margin: ${inputFieldMarginTabletWidth};` : ''}
            }

            .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input .fb-field-icon {
                ${inputFieldIconSize?.Tablet ? `width: ${inputFieldIconSize?.Tablet}${inputFieldIconSizeUnits?.Tablet};` : ''}
            }

            .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select,
            .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-field-required-text {
                ${inputFieldGlobalTypoSwitcher?.fontSize === false && inputFieldFontSize?.Tablet ? `font-size: ${inputFieldFontSize?.Tablet}${inputFieldFontSizeUnits?.Tablet};` : ''}
                ${inputFieldGlobalTypoSwitcher?.letterSpacing === false && inputFieldLetterSpacing?.Tablet ? `letter-spacing: ${inputFieldLetterSpacing?.Tablet}${inputFieldLetterSpacingUnits?.Tablet};` : ''}
                ${inputFieldGlobalTypoSwitcher?.lineHeight === false && inputFieldLineHeight?.Tablet ? `line-height: ${inputFieldLineHeight?.Tablet}${inputFieldLineHeightUnits?.Tablet};` : ''}
            }

            .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select {
                ${inputFieldHeight?.Tablet ? `height: ${inputFieldHeight?.Tablet}${inputFieldHeightUnits?.Tablet};` : ''}
                
                ${inputFieldBorderTabletWidth && inputFieldBorderTablet?.top ? `border-width: ${inputFieldBorderTabletWidth};` : ''}
                ${inputFieldBorderRadiusTabletWidth && inputFieldBorderRadiusTablet?.top ? `border-radius: ${inputFieldBorderRadiusTabletWidth};` : ''}

                ${inputFieldPaddingTabletWidth && inputFieldPaddingTablet?.top ? `padding: ${inputFieldPaddingTabletWidth};` : ''}
            }
            .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input .fb-select-field-arrow {
                ${selectFieldIconSize?.Tablet ? `width: ${selectFieldIconSize?.Tablet}${selectFieldIconSizeUnits?.Tablet};` : ''}
            }
        }
    
        @media only screen and (max-width: 767px) {
            .fb-text-field-wrapper.${blockID} {
                position: relative;
                ${fieldZIndex?.Mobile ? `z-index: ${fieldZIndex?.Mobile};` : ''}
                ${inputFieldMaxWidthUnits?.Mobile === '%' && inputFieldMaxWidth?.Mobile < 100 ? (
                    `max-width: calc(${inputFieldMaxWidth?.Mobile}${inputFieldMaxWidthUnits?.Mobile} - (${formColumnGap?.Mobile}${formColumnGapUnits?.Mobile} / 2));` 
                ) : (
                    inputFieldMaxWidth?.Mobile ? `max-width: ${inputFieldMaxWidth?.Mobile}${inputFieldMaxWidthUnits?.Mobile};` : ''
                )}
            }
            
            .fb-text-field-wrapper.${blockID} .fb-field-group-wrapper {
                ${fieldPaddingMobileWidth && fieldPaddingMobile?.top ? `padding: ${fieldPaddingMobileWidth};` : ''}
                ${fieldMarginMobileWidth && fieldMarginMobile?.top ? `margin: ${fieldMarginMobileWidth};` : ''}
                ${fieldBorderMobileWidth && fieldBorderMobile?.top ? `border-width: ${fieldBorderMobileWidth};` : ''}
                ${fieldBorderRadiusMobileWidth && fieldBorderRadiusMobile?.top ? `border-radius: ${fieldBorderRadiusMobileWidth};` : ''}
            }
        
            .fb-text-field-wrapper.${blockID} .fb-field-label-wrapper {
                ${labelMarginMobileWidth && labelMarginMobile?.top ? `margin: ${labelMarginMobileWidth};` : ''}

                ${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Mobile ? `font-size: ${labelFontSize?.Mobile}${labelFontSizeUnits?.Mobile};` : ''}
                ${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Mobile ? `letter-spacing: ${labelLetterSpacing?.Mobile}${labelLetterSpacingUnits?.Mobile};` : ''}
                ${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Mobile ? `line-height: ${labelLineHeight?.Mobile}${labelLineHeightUnits?.Mobile};` : ''}
                
            }
            .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input {
                ${inputFieldIconGap?.Mobile ? `gap: ${inputFieldIconGap?.Mobile}${inputFieldIconGapUnits?.Mobile};` : ''}
                ${inputFieldMarginMobileWidth && inputFieldMarginMobile?.top ? `margin: ${inputFieldMarginMobileWidth};` : ''}
            }

            .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input .fb-field-icon {
                ${inputFieldIconSize?.Mobile ? `width: ${inputFieldIconSize?.Mobile}${inputFieldIconSizeUnits?.Mobile};` : ''}
            }

            .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select,
            .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-field-required-text {
                ${inputFieldGlobalTypoSwitcher?.fontSize === false && inputFieldFontSize?.Mobile ? `font-size: ${inputFieldFontSize?.Mobile}${inputFieldFontSizeUnits?.Mobile};` : ''}
                ${inputFieldGlobalTypoSwitcher?.letterSpacing === false && inputFieldLetterSpacing?.Mobile ? `letter-spacing: ${inputFieldLetterSpacing?.Mobile}${inputFieldLetterSpacingUnits?.Mobile};` : ''}
                ${inputFieldGlobalTypoSwitcher?.lineHeight === false && inputFieldLineHeight?.Mobile ? `line-height: ${inputFieldLineHeight?.Mobile}${inputFieldLineHeightUnits?.Mobile};` : ''}
            }

            .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select {
                ${inputFieldHeight?.Mobile ? `height: ${inputFieldHeight?.Mobile}${inputFieldHeightUnits?.Mobile};` : ''}
                
                ${inputFieldBorderMobileWidth && inputFieldBorderMobile?.top ? `border-width: ${inputFieldBorderMobileWidth};` : ''}
                ${inputFieldBorderRadiusMobileWidth && inputFieldBorderRadiusMobile?.top ? `border-radius: ${inputFieldBorderRadiusMobileWidth};` : ''}

                ${inputFieldPaddingMobileWidth && inputFieldPaddingMobile?.top ? `padding: ${inputFieldPaddingMobileWidth};` : ''}
            }
            .fb-text-field-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input .fb-select-field-arrow {
                ${selectFieldIconSize?.Mobile ? `width: ${selectFieldIconSize?.Mobile}${selectFieldIconSizeUnits?.Mobile};` : ''}
            }
        }
    `;

    return `${styles}`.replace(/\s+/g, ' ').trim();

};

export default generateTextFieldStyle;
