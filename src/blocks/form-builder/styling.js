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
const generateFormBuilderStyle = (attributes) => {
    const {
        blockID,
        fieldColumnGap,
        fieldColumnGapUnits,
        fieldRowGap,
        fieldRowGapUnits,

        labelGlobalTypoSwitcher,
        labelGlobalTypographyData,
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

        inputFieldBgType,
        inputFieldBgClassicColor,
        inputFieldBgGradientColor,
        inputFieldBgCustomGradientSwitcher,
        inputFieldBgCustomGradientInputValue,
        inputFieldBgImageUrl,
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
        inputFieldBgHoverImagePosition,
        inputFieldBgHoverImageAttachment,
        inputFieldBgHoverImageRepeat,
        inputFieldBgHoverImageSize,

        inputFieldBorder,
        inputFieldBorderColor,
        inputFieldBorderFocusColor,
        inputFieldBorderUnits,
        inputFieldBorderDesktop,
        inputFieldBorderTablet,
        inputFieldBorderMobile,
        inputFieldBorderRadiusUnits,
        inputFieldBorderRadiusDesktop,
        inputFieldBorderRadiusTablet,
        inputFieldBorderRadiusMobile,

        inputFieldBoxShadowCssValue,
        inputFieldBoxShadowFocusCssValue,

        inputFieldIconSize,
        inputFieldIconSizeUnits,

        submitBtnAlignment,
        submitBtnIconPosition,
        submitBtnIconGap,
        submitBtnIconGapUnits,

        submitBtnGlobalTypoSwitcher,
        submitBtnGlobalTypographyData,
        submitBtnFontFamily,
        submitBtnFontSize,
        submitBtnFontSizeUnits,
        submitBtnFontWeight,
        submitBtnFontStyle,
        submitBtnTextTransform,
        submitBtnTextDecoration,
        submitBtnLetterSpacing,
        submitBtnLetterSpacingUnits,
        submitBtnLineHeight,
        submitBtnLineHeightUnits,

        submitBtnColor,
        submitBtnHoverColor,

        submitBtnBgType,
        submitBtnBgClassicColor,
        submitBtnBgGradientColor,
        submitBtnBgCustomGradientSwitcher,
        submitBtnBgCustomGradientInputValue,
        submitBtnBgImageUrl,
        submitBtnBgImagePosition,
        submitBtnBgImageAttachment,
        submitBtnBgImageRepeat,
        submitBtnBgImageSize,
        submitBtnBgHoverType,
        submitBtnBgHoverClassicColor,
        submitBtnBgHoverGradientColor,
        submitBtnBgHoverCustomGradientSwitcher,
        submitBtnBgHoverCustomGradientInputValue,
        submitBtnBgHoverImageUrl,
        submitBtnBgHoverImagePosition,
        submitBtnBgHoverImageAttachment,
        submitBtnBgHoverImageRepeat,
        submitBtnBgHoverImageSize,

        submitBtnPaddingUnits,
        submitBtnPaddingDesktop,
        submitBtnPaddingTablet,
        submitBtnPaddingMobile,

        submitBtnMarginUnits,
        submitBtnMarginDesktop,
        submitBtnMarginTablet,
        submitBtnMarginMobile,

        submitBtnBorder,
        submitBtnBorderColor,
        submitBtnBorderHoverColor,
        submitBtnBorderUnits,
        submitBtnBorderDesktop,
        submitBtnBorderTablet,
        submitBtnBorderMobile,
        submitBtnBorderRadiusUnits,
        submitBtnBorderRadiusDesktop,
        submitBtnBorderRadiusTablet,
        submitBtnBorderRadiusMobile,

        submitBtnBoxShadowCssValue,
        submitBtnBoxShadowHoverCssValue,

        submitBtnIconColor,
        submitBtnIconHoverColor,
        submitBtnIconSize,
        submitBtnIconSizeUnits,

        submitBtnPosition,
        submitBtnWidth,
        submitBtnWidthUnits,
        submitBtnHeight,
        submitBtnHeightUnits,

        submitBtnPositionType,
        submitBtnHZOrientationType,
        submitBtnVROrientationType,
        submitBtnHZLeftOffset,
        submitBtnHZLeftOffsetUnits,
        submitBtnHZRightOffset,
        submitBtnHZRightOffsetUnits,
        submitBtnVRTopOffset,
        submitBtnVRTopOffsetUnits,
        submitBtnVRBottomOffset,
        submitBtnVRBottomOffsetUnits,

        successMessageGlobalTypoSwitcher,
        successMessageGlobalTypographyData,
        successMessageFontFamily,
        successMessageFontSize,
        successMessageFontSizeUnits,
        successMessageFontWeight,
        successMessageFontStyle,
        successMessageTextTransform,
        successMessageTextDecoration,
        successMessageLetterSpacing,
        successMessageLetterSpacingUnits,
        successMessageLineHeight,
        successMessageLineHeightUnits,

        successMessageColor,
        successMessageBgType,
        successMessageBgClassicColor,
        successMessageBgGradientColor,
        successMessageBgCustomGradientSwitcher,
        successMessageBgCustomGradientInputValue,
        successMessageBgImageUrl,
        successMessageBgImagePosition,
        successMessageBgImageAttachment,
        successMessageBgImageRepeat,
        successMessageBgImageSize,

        successMessagePaddingUnits,
        successMessagePaddingDesktop,
        successMessagePaddingTablet,
        successMessagePaddingMobile,

        successMessageMarginUnits,
        successMessageMarginDesktop,
        successMessageMarginTablet,
        successMessageMarginMobile,

        successMessageBorder,
        successMessageBorderColor,
        successMessageBorderUnits,
        successMessageBorderDesktop,
        successMessageBorderTablet,
        successMessageBorderMobile,
        successMessageBorderRadiusUnits,
        successMessageBorderRadiusDesktop,
        successMessageBorderRadiusTablet,
        successMessageBorderRadiusMobile,

        errorMessageGlobalTypoSwitcher,
        errorMessageGlobalTypographyData,
        errorMessageFontFamily,
        errorMessageFontSize,
        errorMessageFontSizeUnits,
        errorMessageFontWeight,
        errorMessageFontStyle,
        errorMessageTextTransform,
        errorMessageTextDecoration,
        errorMessageLetterSpacing,
        errorMessageLetterSpacingUnits,
        errorMessageLineHeight,
        errorMessageLineHeightUnits,

        errorMessageColor,
        errorMessageBgType,
        errorMessageBgClassicColor,
        errorMessageBgGradientColor,
        errorMessageBgCustomGradientSwitcher,
        errorMessageBgCustomGradientInputValue,
        errorMessageBgImageUrl,
        errorMessageBgImagePosition,
        errorMessageBgImageAttachment,
        errorMessageBgImageRepeat,
        errorMessageBgImageSize,

        errorMessagePaddingUnits,
        errorMessagePaddingDesktop,
        errorMessagePaddingTablet,
        errorMessagePaddingMobile,

        errorMessageMarginUnits,
        errorMessageMarginDesktop,
        errorMessageMarginTablet,
        errorMessageMarginMobile,

        errorMessageBorder,
        errorMessageBorderColor,
        errorMessageBorderUnits,
        errorMessageBorderDesktop,
        errorMessageBorderTablet,
        errorMessageBorderMobile,
        errorMessageBorderRadiusUnits,
        errorMessageBorderRadiusDesktop,
        errorMessageBorderRadiusTablet,
        errorMessageBorderRadiusMobile,

        formCustomCSS,
        formPositionType,
        formHZOrientationType,
        formVROrientationType,
        formHZLeftOffset,
        formHZLeftOffsetUnits,
        formHZRightOffset,
        formHZRightOffsetUnits,
        formVRTopOffset,
        formVRTopOffsetUnits,
        formVRBottomOffset,
        formVRBottomOffsetUnits,

        formZIndex,
        formOverflow,
        formPaddingUnits,
        formPaddingDesktop,
        formPaddingTablet,
        formPaddingMobile,

        formMarginUnits,
        formMarginDesktop,
        formMarginTablet,
        formMarginMobile,

        formBorder,
        formBorderColor,
        formBorderHoverColor,
        formBorderUnits,
        formBorderDesktop,
        formBorderTablet,
        formBorderMobile,

        formBorderRadiusUnits,
        formBorderRadiusDesktop,
        formBorderRadiusTablet,
        formBorderRadiusMobile,

        formBgType,
        formBgClassicColor,
        formBgGradientColor,
        formBgCustomGradientSwitcher,
        formBgCustomGradientInputValue,
        formBgImageUrl,
        formBgImagePosition,
        formBgImageAttachment,
        formBgImageRepeat,
        formBgImageSize,
        formBgHoverType,
        formBgHoverClassicColor,
        formBgHoverGradientColor,
        formBgHoverCustomGradientSwitcher,
        formBgHoverCustomGradientInputValue,
        formBgHoverImageUrl,
        formBgHoverImagePosition,
        formBgHoverImageAttachment,
        formBgHoverImageRepeat,
        formBgHoverImageSize,

        formGlobalBoxShadowCssValue,
        formGlobalHoverBoxShadowCssValue,
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

    const submitBtnMarginDesktopWidth = `${submitBtnMarginDesktop?.top}${submitBtnMarginUnits?.Desktop} ${submitBtnMarginDesktop?.right}${submitBtnMarginUnits?.Desktop} ${submitBtnMarginDesktop?.bottom}${submitBtnMarginUnits?.Desktop} ${submitBtnMarginDesktop?.left}${submitBtnMarginUnits?.Desktop}`;
    const submitBtnMarginTabletWidth = `${submitBtnMarginTablet?.top}${submitBtnMarginUnits?.Tablet} ${submitBtnMarginTablet?.right}${submitBtnMarginUnits?.Tablet} ${submitBtnMarginTablet?.bottom}${submitBtnMarginUnits?.Tablet} ${submitBtnMarginTablet?.left}${submitBtnMarginUnits?.Tablet}`;
    const submitBtnMarginMobileWidth = `${submitBtnMarginMobile?.top}${submitBtnMarginUnits?.Mobile} ${submitBtnMarginMobile?.right}${submitBtnMarginUnits?.Mobile} ${submitBtnMarginMobile?.bottom}${submitBtnMarginUnits?.Mobile} ${submitBtnMarginMobile?.left}${submitBtnMarginUnits?.Mobile}`;

    const submitBtnPaddingDesktopWidth = `${submitBtnPaddingDesktop?.top}${submitBtnPaddingUnits?.Desktop} ${submitBtnPaddingDesktop?.right}${submitBtnPaddingUnits?.Desktop} ${submitBtnPaddingDesktop?.bottom}${submitBtnPaddingUnits?.Desktop} ${submitBtnPaddingDesktop?.left}${submitBtnPaddingUnits?.Desktop}`;
    const submitBtnPaddingTabletWidth = `${submitBtnPaddingTablet?.top}${submitBtnPaddingUnits?.Tablet} ${submitBtnPaddingTablet?.right}${submitBtnPaddingUnits?.Tablet} ${submitBtnPaddingTablet?.bottom}${submitBtnPaddingUnits?.Tablet} ${submitBtnPaddingTablet?.left}${submitBtnPaddingUnits?.Tablet}`;
    const submitBtnPaddingMobileWidth = `${submitBtnPaddingMobile?.top}${submitBtnPaddingUnits?.Mobile} ${submitBtnPaddingMobile?.right}${submitBtnPaddingUnits?.Mobile} ${submitBtnPaddingMobile?.bottom}${submitBtnPaddingUnits?.Mobile} ${submitBtnPaddingMobile?.left}${submitBtnPaddingUnits?.Mobile}`;

    const submitBtnBorderDesktopWidth = `${submitBtnBorderDesktop?.top}${submitBtnBorderUnits?.Desktop} ${submitBtnBorderDesktop?.right}${submitBtnBorderUnits?.Desktop} ${submitBtnBorderDesktop?.bottom}${submitBtnBorderUnits?.Desktop} ${submitBtnBorderDesktop?.left}${submitBtnBorderUnits?.Desktop}`;
    const submitBtnBorderTabletWidth = `${submitBtnBorderTablet?.top}${submitBtnBorderUnits?.Tablet} ${submitBtnBorderTablet?.right}${submitBtnBorderUnits?.Tablet} ${submitBtnBorderTablet?.bottom}${submitBtnBorderUnits?.Tablet} ${submitBtnBorderTablet?.left}${submitBtnBorderUnits?.Tablet}`;
    const submitBtnBorderMobileWidth = `${submitBtnBorderMobile?.top}${submitBtnBorderUnits?.Mobile} ${submitBtnBorderMobile?.right}${submitBtnBorderUnits?.Mobile} ${submitBtnBorderMobile?.bottom}${submitBtnBorderUnits?.Mobile} ${submitBtnBorderMobile?.left}${submitBtnBorderUnits?.Mobile}`;

    const submitBtnBorderRadiusDesktopWidth = `${submitBtnBorderRadiusDesktop?.top}${submitBtnBorderRadiusUnits?.Desktop} ${submitBtnBorderRadiusDesktop?.right}${submitBtnBorderRadiusUnits?.Desktop} ${submitBtnBorderRadiusDesktop?.bottom}${submitBtnBorderRadiusUnits?.Desktop} ${submitBtnBorderRadiusDesktop?.left}${submitBtnBorderRadiusUnits?.Desktop}`;
    const submitBtnBorderRadiusTabletWidth = `${submitBtnBorderRadiusTablet?.top}${submitBtnBorderRadiusUnits?.Tablet} ${submitBtnBorderRadiusTablet?.right}${submitBtnBorderRadiusUnits?.Tablet} ${submitBtnBorderRadiusTablet?.bottom}${submitBtnBorderRadiusUnits?.Tablet} ${submitBtnBorderRadiusTablet?.left}${submitBtnBorderRadiusUnits?.Tablet}`;
    const submitBtnBorderRadiusMobileWidth = `${submitBtnBorderRadiusMobile?.top}${submitBtnBorderRadiusUnits?.Mobile} ${submitBtnBorderRadiusMobile?.right}${submitBtnBorderRadiusUnits?.Mobile} ${submitBtnBorderRadiusMobile?.bottom}${submitBtnBorderRadiusUnits?.Mobile} ${submitBtnBorderRadiusMobile?.left}${submitBtnBorderRadiusUnits?.Mobile}`;
      
    const successMessageMarginDesktopWidth = `${successMessageMarginDesktop?.top}${successMessageMarginUnits?.Desktop} ${successMessageMarginDesktop?.right}${successMessageMarginUnits?.Desktop} ${successMessageMarginDesktop?.bottom}${successMessageMarginUnits?.Desktop} ${successMessageMarginDesktop?.left}${successMessageMarginUnits?.Desktop}`;
    const successMessageMarginTabletWidth = `${successMessageMarginTablet?.top}${successMessageMarginUnits?.Tablet} ${successMessageMarginTablet?.right}${successMessageMarginUnits?.Tablet} ${successMessageMarginTablet?.bottom}${successMessageMarginUnits?.Tablet} ${successMessageMarginTablet?.left}${successMessageMarginUnits?.Tablet}`;
    const successMessageMarginMobileWidth = `${successMessageMarginMobile?.top}${successMessageMarginUnits?.Mobile} ${successMessageMarginMobile?.right}${successMessageMarginUnits?.Mobile} ${successMessageMarginMobile?.bottom}${successMessageMarginUnits?.Mobile} ${successMessageMarginMobile?.left}${successMessageMarginUnits?.Mobile}`;

    const successMessagePaddingDesktopWidth = `${successMessagePaddingDesktop?.top}${successMessagePaddingUnits?.Desktop} ${successMessagePaddingDesktop?.right}${successMessagePaddingUnits?.Desktop} ${successMessagePaddingDesktop?.bottom}${successMessagePaddingUnits?.Desktop} ${successMessagePaddingDesktop?.left}${successMessagePaddingUnits?.Desktop}`;
    const successMessagePaddingTabletWidth = `${successMessagePaddingTablet?.top}${successMessagePaddingUnits?.Tablet} ${successMessagePaddingTablet?.right}${successMessagePaddingUnits?.Tablet} ${successMessagePaddingTablet?.bottom}${successMessagePaddingUnits?.Tablet} ${successMessagePaddingTablet?.left}${successMessagePaddingUnits?.Tablet}`;
    const successMessagePaddingMobileWidth = `${successMessagePaddingMobile?.top}${successMessagePaddingUnits?.Mobile} ${successMessagePaddingMobile?.right}${successMessagePaddingUnits?.Mobile} ${successMessagePaddingMobile?.bottom}${successMessagePaddingUnits?.Mobile} ${successMessagePaddingMobile?.left}${successMessagePaddingUnits?.Mobile}`;

    const successMessageBorderDesktopWidth = `${successMessageBorderDesktop?.top}${successMessageBorderUnits?.Desktop} ${successMessageBorderDesktop?.right}${successMessageBorderUnits?.Desktop} ${successMessageBorderDesktop?.bottom}${successMessageBorderUnits?.Desktop} ${successMessageBorderDesktop?.left}${successMessageBorderUnits?.Desktop}`;
    const successMessageBorderTabletWidth = `${successMessageBorderTablet?.top}${successMessageBorderUnits?.Tablet} ${successMessageBorderTablet?.right}${successMessageBorderUnits?.Tablet} ${successMessageBorderTablet?.bottom}${successMessageBorderUnits?.Tablet} ${successMessageBorderTablet?.left}${successMessageBorderUnits?.Tablet}`;
    const successMessageBorderMobileWidth = `${successMessageBorderMobile?.top}${successMessageBorderUnits?.Mobile} ${successMessageBorderMobile?.right}${successMessageBorderUnits?.Mobile} ${successMessageBorderMobile?.bottom}${successMessageBorderUnits?.Mobile} ${successMessageBorderMobile?.left}${successMessageBorderUnits?.Mobile}`;

    const successMessageBorderRadiusDesktopWidth = `${successMessageBorderRadiusDesktop?.top}${successMessageBorderRadiusUnits?.Desktop} ${successMessageBorderRadiusDesktop?.right}${successMessageBorderRadiusUnits?.Desktop} ${successMessageBorderRadiusDesktop?.bottom}${successMessageBorderRadiusUnits?.Desktop} ${successMessageBorderRadiusDesktop?.left}${successMessageBorderRadiusUnits?.Desktop}`;
    const successMessageBorderRadiusTabletWidth = `${successMessageBorderRadiusTablet?.top}${successMessageBorderRadiusUnits?.Tablet} ${successMessageBorderRadiusTablet?.right}${successMessageBorderRadiusUnits?.Tablet} ${successMessageBorderRadiusTablet?.bottom}${successMessageBorderRadiusUnits?.Tablet} ${successMessageBorderRadiusTablet?.left}${successMessageBorderRadiusUnits?.Tablet}`;
    const successMessageBorderRadiusMobileWidth = `${successMessageBorderRadiusMobile?.top}${successMessageBorderRadiusUnits?.Mobile} ${successMessageBorderRadiusMobile?.right}${successMessageBorderRadiusUnits?.Mobile} ${successMessageBorderRadiusMobile?.bottom}${successMessageBorderRadiusUnits?.Mobile} ${successMessageBorderRadiusMobile?.left}${successMessageBorderRadiusUnits?.Mobile}`;
      
    const errorMessageMarginDesktopWidth = `${errorMessageMarginDesktop?.top}${errorMessageMarginUnits?.Desktop} ${errorMessageMarginDesktop?.right}${errorMessageMarginUnits?.Desktop} ${errorMessageMarginDesktop?.bottom}${errorMessageMarginUnits?.Desktop} ${errorMessageMarginDesktop?.left}${errorMessageMarginUnits?.Desktop}`;
    const errorMessageMarginTabletWidth = `${errorMessageMarginTablet?.top}${errorMessageMarginUnits?.Tablet} ${errorMessageMarginTablet?.right}${errorMessageMarginUnits?.Tablet} ${errorMessageMarginTablet?.bottom}${errorMessageMarginUnits?.Tablet} ${errorMessageMarginTablet?.left}${errorMessageMarginUnits?.Tablet}`;
    const errorMessageMarginMobileWidth = `${errorMessageMarginMobile?.top}${errorMessageMarginUnits?.Mobile} ${errorMessageMarginMobile?.right}${errorMessageMarginUnits?.Mobile} ${errorMessageMarginMobile?.bottom}${errorMessageMarginUnits?.Mobile} ${errorMessageMarginMobile?.left}${errorMessageMarginUnits?.Mobile}`;

    const errorMessagePaddingDesktopWidth = `${errorMessagePaddingDesktop?.top}${errorMessagePaddingUnits?.Desktop} ${errorMessagePaddingDesktop?.right}${errorMessagePaddingUnits?.Desktop} ${errorMessagePaddingDesktop?.bottom}${errorMessagePaddingUnits?.Desktop} ${errorMessagePaddingDesktop?.left}${errorMessagePaddingUnits?.Desktop}`;
    const errorMessagePaddingTabletWidth = `${errorMessagePaddingTablet?.top}${errorMessagePaddingUnits?.Tablet} ${errorMessagePaddingTablet?.right}${errorMessagePaddingUnits?.Tablet} ${errorMessagePaddingTablet?.bottom}${errorMessagePaddingUnits?.Tablet} ${errorMessagePaddingTablet?.left}${errorMessagePaddingUnits?.Tablet}`;
    const errorMessagePaddingMobileWidth = `${errorMessagePaddingMobile?.top}${errorMessagePaddingUnits?.Mobile} ${errorMessagePaddingMobile?.right}${errorMessagePaddingUnits?.Mobile} ${errorMessagePaddingMobile?.bottom}${errorMessagePaddingUnits?.Mobile} ${errorMessagePaddingMobile?.left}${errorMessagePaddingUnits?.Mobile}`;

    const errorMessageBorderDesktopWidth = `${errorMessageBorderDesktop?.top}${errorMessageBorderUnits?.Desktop} ${errorMessageBorderDesktop?.right}${errorMessageBorderUnits?.Desktop} ${errorMessageBorderDesktop?.bottom}${errorMessageBorderUnits?.Desktop} ${errorMessageBorderDesktop?.left}${errorMessageBorderUnits?.Desktop}`;
    const errorMessageBorderTabletWidth = `${errorMessageBorderTablet?.top}${errorMessageBorderUnits?.Tablet} ${errorMessageBorderTablet?.right}${errorMessageBorderUnits?.Tablet} ${errorMessageBorderTablet?.bottom}${errorMessageBorderUnits?.Tablet} ${errorMessageBorderTablet?.left}${errorMessageBorderUnits?.Tablet}`;
    const errorMessageBorderMobileWidth = `${errorMessageBorderMobile?.top}${errorMessageBorderUnits?.Mobile} ${errorMessageBorderMobile?.right}${errorMessageBorderUnits?.Mobile} ${errorMessageBorderMobile?.bottom}${errorMessageBorderUnits?.Mobile} ${errorMessageBorderMobile?.left}${errorMessageBorderUnits?.Mobile}`;

    const errorMessageBorderRadiusDesktopWidth = `${errorMessageBorderRadiusDesktop?.top}${errorMessageBorderRadiusUnits?.Desktop} ${errorMessageBorderRadiusDesktop?.right}${errorMessageBorderRadiusUnits?.Desktop} ${errorMessageBorderRadiusDesktop?.bottom}${errorMessageBorderRadiusUnits?.Desktop} ${errorMessageBorderRadiusDesktop?.left}${errorMessageBorderRadiusUnits?.Desktop}`;
    const errorMessageBorderRadiusTabletWidth = `${errorMessageBorderRadiusTablet?.top}${errorMessageBorderRadiusUnits?.Tablet} ${errorMessageBorderRadiusTablet?.right}${errorMessageBorderRadiusUnits?.Tablet} ${errorMessageBorderRadiusTablet?.bottom}${errorMessageBorderRadiusUnits?.Tablet} ${errorMessageBorderRadiusTablet?.left}${errorMessageBorderRadiusUnits?.Tablet}`;
    const errorMessageBorderRadiusMobileWidth = `${errorMessageBorderRadiusMobile?.top}${errorMessageBorderRadiusUnits?.Mobile} ${errorMessageBorderRadiusMobile?.right}${errorMessageBorderRadiusUnits?.Mobile} ${errorMessageBorderRadiusMobile?.bottom}${errorMessageBorderRadiusUnits?.Mobile} ${errorMessageBorderRadiusMobile?.left}${errorMessageBorderRadiusUnits?.Mobile}`;
      
    const formMarginDesktopWidth = `${formMarginDesktop?.top}${formMarginUnits?.Desktop} ${formMarginDesktop?.right}${formMarginUnits?.Desktop} ${formMarginDesktop?.bottom}${formMarginUnits?.Desktop} ${formMarginDesktop?.left}${formMarginUnits?.Desktop}`;
    const formMarginTabletWidth = `${formMarginTablet?.top}${formMarginUnits?.Tablet} ${formMarginTablet?.right}${formMarginUnits?.Tablet} ${formMarginTablet?.bottom}${formMarginUnits?.Tablet} ${formMarginTablet?.left}${formMarginUnits?.Tablet}`;
    const formMarginMobileWidth = `${formMarginMobile?.top}${formMarginUnits?.Mobile} ${formMarginMobile?.right}${formMarginUnits?.Mobile} ${formMarginMobile?.bottom}${formMarginUnits?.Mobile} ${formMarginMobile?.left}${formMarginUnits?.Mobile}`;

    const formPaddingDesktopWidth = `${formPaddingDesktop?.top}${formPaddingUnits?.Desktop} ${formPaddingDesktop?.right}${formPaddingUnits?.Desktop} ${formPaddingDesktop?.bottom}${formPaddingUnits?.Desktop} ${formPaddingDesktop?.left}${formPaddingUnits?.Desktop}`;
    const formPaddingTabletWidth = `${formPaddingTablet?.top}${formPaddingUnits?.Tablet} ${formPaddingTablet?.right}${formPaddingUnits?.Tablet} ${formPaddingTablet?.bottom}${formPaddingUnits?.Tablet} ${formPaddingTablet?.left}${formPaddingUnits?.Tablet}`;
    const formPaddingMobileWidth = `${formPaddingMobile?.top}${formPaddingUnits?.Mobile} ${formPaddingMobile?.right}${formPaddingUnits?.Mobile} ${formPaddingMobile?.bottom}${formPaddingUnits?.Mobile} ${formPaddingMobile?.left}${formPaddingUnits?.Mobile}`;

    const formBorderDesktopWidth = `${formBorderDesktop?.top}${formBorderUnits?.Desktop} ${formBorderDesktop?.right}${formBorderUnits?.Desktop} ${formBorderDesktop?.bottom}${formBorderUnits?.Desktop} ${formBorderDesktop?.left}${formBorderUnits?.Desktop}`;
    const formBorderTabletWidth = `${formBorderTablet?.top}${formBorderUnits?.Tablet} ${formBorderTablet?.right}${formBorderUnits?.Tablet} ${formBorderTablet?.bottom}${formBorderUnits?.Tablet} ${formBorderTablet?.left}${formBorderUnits?.Tablet}`;
    const formBorderMobileWidth = `${formBorderMobile?.top}${formBorderUnits?.Mobile} ${formBorderMobile?.right}${formBorderUnits?.Mobile} ${formBorderMobile?.bottom}${formBorderUnits?.Mobile} ${formBorderMobile?.left}${formBorderUnits?.Mobile}`;

    const formBorderRadiusDesktopWidth = `${formBorderRadiusDesktop?.top}${formBorderRadiusUnits?.Desktop} ${formBorderRadiusDesktop?.right}${formBorderRadiusUnits?.Desktop} ${formBorderRadiusDesktop?.bottom}${formBorderRadiusUnits?.Desktop} ${formBorderRadiusDesktop?.left}${formBorderRadiusUnits?.Desktop}`;
    const formBorderRadiusTabletWidth = `${formBorderRadiusTablet?.top}${formBorderRadiusUnits?.Tablet} ${formBorderRadiusTablet?.right}${formBorderRadiusUnits?.Tablet} ${formBorderRadiusTablet?.bottom}${formBorderRadiusUnits?.Tablet} ${formBorderRadiusTablet?.left}${formBorderRadiusUnits?.Tablet}`;
    const formBorderRadiusMobileWidth = `${formBorderRadiusMobile?.top}${formBorderRadiusUnits?.Mobile} ${formBorderRadiusMobile?.right}${formBorderRadiusUnits?.Mobile} ${formBorderRadiusMobile?.bottom}${formBorderRadiusUnits?.Mobile} ${formBorderRadiusMobile?.left}${formBorderRadiusUnits?.Mobile}`;

    const inputFieldBorderDesktopWidth = `${inputFieldBorderDesktop?.top}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.right}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.bottom}${inputFieldBorderUnits?.Desktop} ${inputFieldBorderDesktop?.left}${inputFieldBorderUnits?.Desktop}`;
    const inputFieldBorderTabletWidth = `${inputFieldBorderTablet?.top}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.right}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.bottom}${inputFieldBorderUnits?.Tablet} ${inputFieldBorderTablet?.left}${inputFieldBorderUnits?.Tablet}`;
    const inputFieldBorderMobileWidth = `${inputFieldBorderMobile?.top}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.right}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.bottom}${inputFieldBorderUnits?.Mobile} ${inputFieldBorderMobile?.left}${inputFieldBorderUnits?.Mobile}`;

    const inputFieldBorderRadiusDesktopWidth = `${inputFieldBorderRadiusDesktop?.top}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.right}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.bottom}${inputFieldBorderRadiusUnits?.Desktop} ${inputFieldBorderRadiusDesktop?.left}${inputFieldBorderRadiusUnits?.Desktop}`;
    const inputFieldBorderRadiusTabletWidth = `${inputFieldBorderRadiusTablet?.top}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.right}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.bottom}${inputFieldBorderRadiusUnits?.Tablet} ${inputFieldBorderRadiusTablet?.left}${inputFieldBorderRadiusUnits?.Tablet}`;
    const inputFieldBorderRadiusMobileWidth = `${inputFieldBorderRadiusMobile?.top}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.right}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.bottom}${inputFieldBorderRadiusUnits?.Mobile} ${inputFieldBorderRadiusMobile?.left}${inputFieldBorderRadiusUnits?.Mobile}`;

    let styles = `
        .fb-form-builder-main-wrapper.${blockID} .fb-hide {
            display: none;
        }
        .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-form {
            width: 100%;
        }
        .fb-form-builder-main-wrapper.${blockID} {
            ${formPositionType === 'default' ? `position: relative;` : ''}
            width: 100%;
            ${formPositionType !== 'default' ? `position: ${formPositionType};` : ''}
            ${formPositionType !== 'default' && formPositionType !== 'relative' && formHZOrientationType === 'left' && formHZLeftOffset?.Desktop ? `left: ${formHZLeftOffset?.Desktop}${formHZLeftOffsetUnits?.Desktop};` : ''}
            ${formPositionType !== 'default' && formPositionType !== 'relative' && formHZOrientationType === 'right' && formHZRightOffset?.Desktop ? `right: ${formHZRightOffset?.Desktop}${formHZRightOffsetUnits?.Desktop};` : ''}
            ${formPositionType !== 'default' && formPositionType !== 'relative' && formVROrientationType === 'top' && formVRTopOffset?.Desktop ? `top: ${formVRTopOffset?.Desktop}${formVRTopOffsetUnits?.Desktop};` : ''}
            ${formPositionType !== 'default' && formPositionType !== 'relative' && formVROrientationType === 'bottom' && formVRBottomOffset?.Desktop ? `bottom: ${formVRBottomOffset?.Desktop}${formVRBottomOffsetUnits?.Desktop};` : ''}
            ${formZIndex?.Desktop ? `z-index: ${formZIndex?.Desktop};` : ''}
            ${formOverflow !== 'default' ? `overflow: ${formOverflow};` : ''}
        }
        .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-wrapper {
            position: relative;
            ${formPaddingDesktopWidth && formPaddingDesktop?.top ? `padding: ${formPaddingDesktopWidth};` : ''}
            ${formMarginDesktopWidth && formMarginDesktop?.top ? `margin: ${formMarginDesktopWidth};` : ''}
            ${formBorder !== 'none' ? `border-style: ${formBorder};` : ''}
            ${formBorderDesktopWidth && formBorderDesktop?.top ? `border-width: ${formBorderDesktopWidth};` : ''}
            ${formBorderColor ? `border-color: ${formBorderColor};` : ''}
            ${formBorderRadiusDesktopWidth && formBorderRadiusDesktop?.top ? `border-radius: ${formBorderRadiusDesktopWidth};` : ''}
            ${
                formBgType === "gradient"
                ? `background: ${
                    formBgCustomGradientSwitcher && formBgCustomGradientInputValue
                        ? formBgCustomGradientInputValue
                        : formBgGradientColor
                    };`
                : formBgImageUrl !== undefined && formBgImageUrl !== null && formBgImageUrl !== ""
                ? `
                    ${formBgImageUrl !== undefined ? `background-image: url(${formBgImageUrl});` : ''}
                    ${formBgImagePosition !== undefined ? `background-position: ${formBgImagePosition};` : ''}
                    ${formBgImageAttachment !== undefined ? `background-attachment: ${formBgImageAttachment};` : ''}
                    ${formBgImageRepeat !== undefined ? `background-repeat: ${formBgImageRepeat};` : ''}
                    ${formBgImageSize !== undefined ? `background-size: ${formBgImageSize};` : ''}
                `
                : formBgClassicColor ? `background: ${formBgClassicColor};` : ''
            }
            ${formGlobalBoxShadowCssValue ? `box-shadow: ${formGlobalBoxShadowCssValue};` : ''}
            overflow: hidden;
            transition: all .3s ease-in-out;
        }
    
        .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-wrapper:hover {
            ${
                formBgHoverType === "gradient"
                ? `background: ${
                    formBgHoverCustomGradientSwitcher && formBgHoverCustomGradientInputValue
                        ? formBgHoverCustomGradientInputValue
                        : formBgHoverGradientColor
                    };`
                : formBgHoverImageUrl !== undefined && formBgHoverImageUrl !== null && formBgHoverImageUrl !== ""
                ? `
                    ${formBgHoverImageUrl !== undefined ? `background-image: url(${formBgHoverImageUrl});` : ''}
                    ${formBgHoverImagePosition !== undefined ? `background-position: ${formBgHoverImagePosition};` : ''}
                    ${formBgHoverImageAttachment !== undefined ? `background-attachment: ${formBgHoverImageAttachment};` : ''}
                    ${formBgHoverImageRepeat !== undefined ? `background-repeat: ${formBgHoverImageRepeat};` : ''}
                    ${formBgHoverImageSize !== undefined ? `background-size: ${formBgHoverImageSize};` : ''}
                `
                : formBgHoverClassicColor ? `background: ${formBgHoverClassicColor};` : ''
            }
            ${formBorderHoverColor ? `border-color: ${formBorderHoverColor};` : ''}
            ${formGlobalHoverBoxShadowCssValue ? `box-shadow: ${formGlobalHoverBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }

        .fb-form-builder-main-wrapper.${blockID} .wp-block-fb-container.child {
            box-sizing: border-box;
        }
        .fb-form-builder-main-wrapper.${blockID} .block-editor-block-list__layout,
        .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-wrapper {
            display: flex;
            flex-wrap: wrap;
            ${fieldColumnGap?.Desktop ? `column-gap: ${fieldColumnGap?.Desktop}${fieldColumnGapUnits?.Desktop};` : ''}
            ${fieldRowGap?.Desktop ? `row-gap: ${fieldRowGap?.Desktop}${fieldRowGapUnits?.Desktop};` : ''}
        }
        .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-wrapper {
            ${submitBtnPosition === 'bottom' ? `flex-direction: column;` : ''}
            ${submitBtnPosition === 'top' ? `flex-direction: column-reverse;` : ''}
            ${submitBtnPosition === 'right' ? `flex-direction: row; flex-wrap: nowrap;` : ''}
            ${submitBtnPosition === 'left' ? `flex-direction: row-reverse; flex-wrap: nowrap;` : ''}
        }
        .fb-form-builder-main-wrapper.${blockID} .block-editor-inner-blocks {
            width: 100%;
        }

        .fb-form-builder-main-wrapper.${blockID} .fb-field-label-wrapper {
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
        .fb-form-builder-main-wrapper.${blockID} .fb-field-label-wrapper .fb-form-label {
            ${labelColor ? `color: ${labelColor};` : ''}
        }
        .fb-form-builder-main-wrapper.${blockID} .fb-field-label-wrapper .fb-required-symbol {
            ${labelRequiredColor ? `color: ${labelRequiredColor};` : ''}
        }
    
        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input {
            position: relative;
            display: flex;
            flex-direction: column;
            padding: 0;
            margin: 0;
            ${inputFieldMarginDesktopWidth && inputFieldMarginDesktop?.top ? `margin: ${inputFieldMarginDesktopWidth};` : ''}
        }
        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input textarea::placeholder,
        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input input::placeholder,
        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select::placeholder {
            ${inputFieldPlaceholderColor ? `color: ${inputFieldPlaceholderColor};` : ''}
        }
        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input textarea:focus::placeholder,
        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select:focus::placeholder,
        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input input:focus::placeholder {
            ${inputFieldPlaceholderFocusColor ? `color: ${inputFieldPlaceholderFocusColor};` : ''}
        }
        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input textarea,
        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select,
        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input input {
            width: 100%;
            
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
        }
        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input textarea:focus,
        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select:focus,
        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input input:focus {
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
        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-field-required-text {
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

        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input .fb-field-icon {
            display: flex;
            ${inputFieldIconSize?.Desktop ? `width: ${inputFieldIconSize?.Desktop}${inputFieldIconSizeUnits?.Desktop};` : ''}
        }
        .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input .fb-field-icon svg {
            width: 100%;
            height: auto;
        }

        .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-submit-wrapper {
            display: flex;
            flex-shrink: 0;
            z-index: 1;
            ${submitBtnPosition !== 'right' && submitBtnPosition !== 'left' ? 'width: 100%;' : ''}
            ${submitBtnAlignment?.Desktop === 'left' ? 'justify-content: start;' : ''}
            ${submitBtnAlignment?.Desktop === 'center' ? 'justify-content: center;' : ''}
            ${submitBtnAlignment?.Desktop === 'right' ? 'justify-content: end;' : ''}
            ${submitBtnAlignment?.Desktop === 'stretch' ? 'justify-content: stretch;' : ''}

            ${submitBtnPositionType === 'default' ? `position: relative;` : ''}
            ${submitBtnPositionType !== 'default' ? `position: ${submitBtnPositionType}; width: unset;` : ''}
            ${submitBtnPositionType !== 'default' && submitBtnPositionType !== 'relative' && submitBtnHZOrientationType === 'left' && submitBtnHZLeftOffset?.Desktop ? `left: ${submitBtnHZLeftOffset?.Desktop}${submitBtnHZLeftOffsetUnits?.Desktop};` : ''}
            ${submitBtnPositionType !== 'default' && submitBtnPositionType !== 'relative' && submitBtnHZOrientationType === 'right' && submitBtnHZRightOffset?.Desktop ? `right: ${submitBtnHZRightOffset?.Desktop}${submitBtnHZRightOffsetUnits?.Desktop};` : ''}
            ${submitBtnPositionType !== 'default' && submitBtnPositionType !== 'relative' && submitBtnVROrientationType === 'top' && submitBtnVRTopOffset?.Desktop ? `top: ${submitBtnVRTopOffset?.Desktop}${submitBtnVRTopOffsetUnits?.Desktop};` : ''}
            ${submitBtnPositionType !== 'default' && submitBtnPositionType !== 'relative' && submitBtnVROrientationType === 'bottom' && submitBtnVRBottomOffset?.Desktop ? `bottom: ${submitBtnVRBottomOffset?.Desktop}${submitBtnVRBottomOffsetUnits?.Desktop};` : ''}
        }
        .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-submit-wrapper .fb-submit-button {
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            cursor: pointer;
            ${submitBtnWidth?.Desktop ? `width: ${submitBtnWidth?.Desktop}${submitBtnWidthUnits?.Desktop};` : ''}
            ${submitBtnHeight?.Desktop ? `height: ${submitBtnHeight?.Desktop}${submitBtnHeightUnits?.Desktop};` : ''}
            ${submitBtnIconPosition?.Desktop === 'left' ? 'flex-direction: row-reverse;' : ''}
            ${submitBtnAlignment?.Desktop === 'stretch' ? 'width: 100%;' : ''}
            ${submitBtnIconGap?.Desktop ? `gap: ${submitBtnIconGap?.Desktop}${submitBtnIconGapUnits?.Desktop};` : ''}

            ${submitBtnGlobalTypoSwitcher?.fontFamily === true && submitBtnGlobalTypographyData?.fontFamily ? `font-family: ${submitBtnGlobalTypographyData?.fontFamily};` : ''}
            ${submitBtnGlobalTypoSwitcher?.fontSize === true && submitBtnGlobalTypographyData?.fontSize ? `font-size: ${submitBtnGlobalTypographyData?.fontSize};` : ''}
            ${submitBtnGlobalTypoSwitcher?.fontWeight === true && submitBtnGlobalTypographyData?.fontWeight ? `font-weight: ${submitBtnGlobalTypographyData?.fontWeight};` : ''}
            ${submitBtnGlobalTypoSwitcher?.fontStyle === true && submitBtnGlobalTypographyData?.fontStyle ? `font-style: ${submitBtnGlobalTypographyData?.fontStyle};` : ''}
            ${submitBtnGlobalTypoSwitcher?.textTransform === true && submitBtnGlobalTypographyData?.textTransform ? `text-transform: ${submitBtnGlobalTypographyData?.textTransform};` : ''}
            ${submitBtnGlobalTypoSwitcher?.textDecoration === true && submitBtnGlobalTypographyData?.textDecoration ? `text-decoration: ${submitBtnGlobalTypographyData?.textDecoration};` : ''}
            ${submitBtnGlobalTypoSwitcher?.letterSpacing === true && submitBtnGlobalTypographyData?.letterSpacing ? `letter-spacing: ${submitBtnGlobalTypographyData?.letterSpacing};` : ''}
            ${submitBtnGlobalTypoSwitcher?.lineHeight === true && submitBtnGlobalTypographyData?.lineHeight ? `line-height: ${submitBtnGlobalTypographyData?.lineHeight};` : ''}
            
            ${submitBtnGlobalTypoSwitcher?.fontFamily === false && submitBtnFontFamily && submitBtnFontFamily !== 'Default' ? `font-family: ${submitBtnFontFamily};` : ''}
            ${submitBtnGlobalTypoSwitcher?.fontSize === false && submitBtnFontSize?.Desktop ? `font-size: ${submitBtnFontSize?.Desktop}${submitBtnFontSizeUnits?.Desktop};` : ''}
            ${submitBtnGlobalTypoSwitcher?.fontWeight === false && submitBtnFontWeight ? `font-weight: ${submitBtnFontWeight};` : ''}
            ${submitBtnGlobalTypoSwitcher?.fontStyle === false && submitBtnFontStyle ? `font-style: ${submitBtnFontStyle};` : ''}
            ${submitBtnGlobalTypoSwitcher?.textTransform === false && submitBtnTextTransform ? `text-transform: ${submitBtnTextTransform};` : ''}
            ${submitBtnGlobalTypoSwitcher?.textDecoration === false && submitBtnTextDecoration ? `text-decoration: ${submitBtnTextDecoration};` : ''}
            ${submitBtnGlobalTypoSwitcher?.letterSpacing === false && submitBtnLetterSpacing?.Desktop ? `letter-spacing: ${submitBtnLetterSpacing?.Desktop}${submitBtnLetterSpacingUnits?.Desktop};` : ''}
            ${submitBtnGlobalTypoSwitcher?.lineHeight === false && submitBtnLineHeight?.Desktop ? `line-height: ${submitBtnLineHeight?.Desktop}${submitBtnLineHeightUnits?.Desktop};` : ''}
            
            ${submitBtnColor ? `color: ${submitBtnColor};` : ''}
            ${
                submitBtnBgType === "gradient"
                ? `background: ${
                    submitBtnBgCustomGradientSwitcher && submitBtnBgCustomGradientInputValue
                        ? submitBtnBgCustomGradientInputValue
                        : submitBtnBgGradientColor
                    };`
                : submitBtnBgImageUrl && submitBtnBgImageUrl !== null && submitBtnBgImageUrl !== ""
                ? `
                    ${submitBtnBgImageUrl ? `background-image: url(${submitBtnBgImageUrl});` : ''}
                    ${submitBtnBgImagePosition ? `background-position: ${submitBtnBgImagePosition};` : ''}
                    ${submitBtnBgImageAttachment ? `background-attachment: ${submitBtnBgImageAttachment};` : ''}
                    ${submitBtnBgImageRepeat ? `background-repeat: ${submitBtnBgImageRepeat};` : ''}
                    ${submitBtnBgImageSize ? `background-size: ${submitBtnBgImageSize};` : ''}
                `
                : submitBtnBgClassicColor ? `background: ${submitBtnBgClassicColor};` : ''
            }

            ${submitBtnBorder ? `border-style: ${submitBtnBorder};` : ''}
            ${submitBtnBorderDesktopWidth && submitBtnBorderDesktop?.top ? `border-width: ${submitBtnBorderDesktopWidth};` : ''}
            ${submitBtnBorderColor ? `border-color: ${submitBtnBorderColor};` : ''}
            ${submitBtnBorderRadiusDesktopWidth && submitBtnBorderRadiusDesktop?.top ? `border-radius: ${submitBtnBorderRadiusDesktopWidth};` : ''}
            ${submitBtnBoxShadowCssValue ? `box-shadow: ${submitBtnBoxShadowCssValue};` : ""}

            ${submitBtnMarginDesktopWidth && submitBtnMarginDesktop?.top ? `margin: ${submitBtnMarginDesktopWidth};` : ''}
            ${submitBtnPaddingDesktopWidth && submitBtnPaddingDesktop?.top ? `padding: ${submitBtnPaddingDesktopWidth};` : ''}
            transition: all 0.3s ease-in-out;
        }
        .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-submit-wrapper .fb-submit-button span {
            ${submitBtnGlobalTypoSwitcher?.fontFamily === true && submitBtnGlobalTypographyData?.fontFamily ? `font-family: ${submitBtnGlobalTypographyData?.fontFamily};` : ''}
            ${submitBtnGlobalTypoSwitcher?.fontFamily === false && submitBtnFontFamily && submitBtnFontFamily !== 'Default' ? `font-family: ${submitBtnFontFamily};` : ''}
        }
        .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-submit-wrapper .fb-submit-button:hover {
            ${submitBtnHoverColor ? `color: ${submitBtnHoverColor};` : ''}
            ${
                submitBtnBgHoverType === "gradient"
                ? `background: ${
                    submitBtnBgHoverCustomGradientSwitcher && submitBtnBgHoverCustomGradientInputValue
                        ? submitBtnBgHoverCustomGradientInputValue
                        : submitBtnBgHoverGradientColor
                    };`
                : submitBtnBgHoverImageUrl && submitBtnBgHoverImageUrl !== null && submitBtnBgHoverImageUrl !== ""
                ? `
                    ${submitBtnBgHoverImageUrl ? `background-image: url(${submitBtnBgHoverImageUrl});` : ''}
                    ${submitBtnBgHoverImagePosition ? `background-position: ${submitBtnBgHoverImagePosition};` : ''}
                    ${submitBtnBgHoverImageAttachment ? `background-attachment: ${submitBtnBgHoverImageAttachment};` : ''}
                    ${submitBtnBgHoverImageRepeat ? `background-repeat: ${submitBtnBgHoverImageRepeat};` : ''}
                    ${submitBtnBgHoverImageSize ? `background-size: ${submitBtnBgHoverImageSize};` : ''}
                `
                : submitBtnBgHoverClassicColor ? `background: ${submitBtnBgHoverClassicColor};` : ''
            }

            ${submitBtnBorderHoverColor ? `border-color: ${submitBtnBorderHoverColor};` : ''}
            ${submitBtnBoxShadowHoverCssValue ? `box-shadow: ${submitBtnBoxShadowHoverCssValue};` : ""}
            transition: all 0.3s ease-in-out;
        }
        .fb-form-builder-main-wrapper.${blockID} .fb-submit-button .fb-submit-button-icon {
            display: flex;
            ${submitBtnIconSize?.Desktop ? `width: ${submitBtnIconSize?.Desktop}${submitBtnIconSizeUnits?.Desktop};` : ''}
        }
        .fb-form-builder-main-wrapper.${blockID} .fb-submit-button .fb-submit-button-icon svg {
            width: 100%;
            height: auto;
            ${submitBtnIconColor ? `fill: ${submitBtnIconColor};` : ''}
            transition: all 0.3s ease-in-out;
        }
        .fb-form-builder-main-wrapper.${blockID} .fb-submit-button:hover .fb-submit-button-icon svg {
            ${submitBtnIconHoverColor ? `fill: ${submitBtnIconHoverColor};` : ''}
            transition: all 0.3s ease-in-out;
        }

        .fb-form-builder-main-wrapper.${blockID} .fb-form-messages {
            width: 100%;
        }

        .fb-form-builder-main-wrapper.${blockID} .fb-success-message {
            ${successMessageMarginDesktopWidth ? `margin: ${successMessageMarginDesktopWidth};` : ''}
            ${successMessagePaddingDesktopWidth ? `padding: ${successMessagePaddingDesktopWidth};` : ''}
            ${successMessageColor ? `color: ${successMessageColor};` : ''}
            ${
                successMessageBgType === "gradient"
                ? `background: ${
                    successMessageBgCustomGradientSwitcher && successMessageBgCustomGradientInputValue
                        ? successMessageBgCustomGradientInputValue
                        : successMessageBgGradientColor
                    };`
                : successMessageBgImageUrl && successMessageBgImageUrl !== null && successMessageBgImageUrl !== ""
                ? `
                    ${successMessageBgImageUrl ? `background-image: url(${successMessageBgImageUrl});` : ''}
                    ${successMessageBgImagePosition ? `background-position: ${successMessageBgImagePosition};` : ''}
                    ${successMessageBgImageAttachment ? `background-attachment: ${successMessageBgImageAttachment};` : ''}
                    ${successMessageBgImageRepeat ? `background-repeat: ${successMessageBgImageRepeat};` : ''}
                    ${successMessageBgImageSize ? `background-size: ${successMessageBgImageSize};` : ''}
                `
                : successMessageBgClassicColor ? `background: ${successMessageBgClassicColor};` : ''
            }
            ${successMessageBorder ? `border-style: ${successMessageBorder};` : ''}
            ${successMessageBorderDesktopWidth && successMessageBorderDesktop?.top ? `border-width: ${successMessageBorderDesktopWidth};` : ''}
            ${successMessageBorderColor ? `border-color: ${successMessageBorderColor};` : ''}
            ${successMessageBorderRadiusDesktopWidth && successMessageBorderRadiusDesktop?.top ? `border-radius: ${successMessageBorderRadiusDesktopWidth};` : ''}
            
            ${successMessageGlobalTypoSwitcher?.fontFamily === true && successMessageGlobalTypographyData?.fontFamily ? `font-family: ${successMessageGlobalTypographyData?.fontFamily};` : ''}
            ${successMessageGlobalTypoSwitcher?.fontSize === true && successMessageGlobalTypographyData?.fontSize ? `font-size: ${successMessageGlobalTypographyData?.fontSize};` : ''}
            ${successMessageGlobalTypoSwitcher?.fontWeight === true && successMessageGlobalTypographyData?.fontWeight ? `font-weight: ${successMessageGlobalTypographyData?.fontWeight};` : ''}
            ${successMessageGlobalTypoSwitcher?.fontStyle === true && successMessageGlobalTypographyData?.fontStyle ? `font-style: ${successMessageGlobalTypographyData?.fontStyle};` : ''}
            ${successMessageGlobalTypoSwitcher?.textTransform === true && successMessageGlobalTypographyData?.textTransform ? `text-transform: ${successMessageGlobalTypographyData?.textTransform};` : ''}
            ${successMessageGlobalTypoSwitcher?.textDecoration === true && successMessageGlobalTypographyData?.textDecoration ? `text-decoration: ${successMessageGlobalTypographyData?.textDecoration};` : ''}
            ${successMessageGlobalTypoSwitcher?.letterSpacing === true && successMessageGlobalTypographyData?.letterSpacing ? `letter-spacing: ${successMessageGlobalTypographyData?.letterSpacing};` : ''}
            ${successMessageGlobalTypoSwitcher?.lineHeight === true && successMessageGlobalTypographyData?.lineHeight ? `line-height: ${successMessageGlobalTypographyData?.lineHeight};` : ''}
            
            ${successMessageGlobalTypoSwitcher?.fontFamily === false && successMessageFontFamily && successMessageFontFamily !== 'Default' ? `font-family: ${successMessageFontFamily};` : ''}
            ${successMessageGlobalTypoSwitcher?.fontSize === false && successMessageFontSize?.Desktop ? `font-size: ${successMessageFontSize?.Desktop}${successMessageFontSizeUnits?.Desktop};` : ''}
            ${successMessageGlobalTypoSwitcher?.fontWeight === false && successMessageFontWeight ? `font-weight: ${successMessageFontWeight};` : ''}
            ${successMessageGlobalTypoSwitcher?.fontStyle === false && successMessageFontStyle ? `font-style: ${successMessageFontStyle};` : ''}
            ${successMessageGlobalTypoSwitcher?.textTransform === false && successMessageTextTransform ? `text-transform: ${successMessageTextTransform};` : ''}
            ${successMessageGlobalTypoSwitcher?.textDecoration === false && successMessageTextDecoration ? `text-decoration: ${successMessageTextDecoration};` : ''}
            ${successMessageGlobalTypoSwitcher?.letterSpacing === false && successMessageLetterSpacing?.Desktop ? `letter-spacing: ${successMessageLetterSpacing?.Desktop}${labelLetterSpacingUnits?.Desktop};` : ''}
            ${successMessageGlobalTypoSwitcher?.lineHeight === false && successMessageLineHeight?.Desktop ? `line-height: ${successMessageLineHeight?.Desktop}${successMessageLineHeightUnits?.Desktop};` : ''}
            
            text-align: center;
        }

        .fb-form-builder-main-wrapper.${blockID} .fb-error-message,
        .fb-form-builder-main-wrapper.${blockID} .fb-validation-message {
            ${errorMessageMarginDesktopWidth ? `margin: ${errorMessageMarginDesktopWidth};` : ''}
            ${errorMessagePaddingDesktopWidth ? `padding: ${errorMessagePaddingDesktopWidth};` : ''}
            ${errorMessageColor ? `color: ${errorMessageColor};` : ''}
            ${
                errorMessageBgType === "gradient"
                ? `background: ${
                    errorMessageBgCustomGradientSwitcher && errorMessageBgCustomGradientInputValue
                        ? errorMessageBgCustomGradientInputValue
                        : errorMessageBgGradientColor
                    };`
                : errorMessageBgImageUrl && errorMessageBgImageUrl !== null && errorMessageBgImageUrl !== ""
                ? `
                    ${errorMessageBgImageUrl ? `background-image: url(${errorMessageBgImageUrl});` : ''}
                    ${errorMessageBgImagePosition ? `background-position: ${errorMessageBgImagePosition};` : ''}
                    ${errorMessageBgImageAttachment ? `background-attachment: ${errorMessageBgImageAttachment};` : ''}
                    ${errorMessageBgImageRepeat ? `background-repeat: ${errorMessageBgImageRepeat};` : ''}
                    ${errorMessageBgImageSize ? `background-size: ${errorMessageBgImageSize};` : ''}
                `
                : errorMessageBgClassicColor ? `background: ${errorMessageBgClassicColor};` : ''
            }
            ${errorMessageBorder ? `border-style: ${errorMessageBorder};` : ''}
            ${errorMessageBorderDesktopWidth && errorMessageBorderDesktop?.top ? `border-width: ${errorMessageBorderDesktopWidth};` : ''}
            ${errorMessageBorderColor ? `border-color: ${errorMessageBorderColor};` : ''}
            ${errorMessageBorderRadiusDesktopWidth && errorMessageBorderRadiusDesktop?.top ? `border-radius: ${errorMessageBorderRadiusDesktopWidth};` : ''}
            
            ${errorMessageGlobalTypoSwitcher?.fontFamily === true && errorMessageGlobalTypographyData?.fontFamily ? `font-family: ${errorMessageGlobalTypographyData?.fontFamily};` : ''}
            ${errorMessageGlobalTypoSwitcher?.fontSize === true && errorMessageGlobalTypographyData?.fontSize ? `font-size: ${errorMessageGlobalTypographyData?.fontSize};` : ''}
            ${errorMessageGlobalTypoSwitcher?.fontWeight === true && errorMessageGlobalTypographyData?.fontWeight ? `font-weight: ${errorMessageGlobalTypographyData?.fontWeight};` : ''}
            ${errorMessageGlobalTypoSwitcher?.fontStyle === true && errorMessageGlobalTypographyData?.fontStyle ? `font-style: ${errorMessageGlobalTypographyData?.fontStyle};` : ''}
            ${errorMessageGlobalTypoSwitcher?.textTransform === true && errorMessageGlobalTypographyData?.textTransform ? `text-transform: ${errorMessageGlobalTypographyData?.textTransform};` : ''}
            ${errorMessageGlobalTypoSwitcher?.textDecoration === true && errorMessageGlobalTypographyData?.textDecoration ? `text-decoration: ${errorMessageGlobalTypographyData?.textDecoration};` : ''}
            ${errorMessageGlobalTypoSwitcher?.letterSpacing === true && errorMessageGlobalTypographyData?.letterSpacing ? `letter-spacing: ${errorMessageGlobalTypographyData?.letterSpacing};` : ''}
            ${errorMessageGlobalTypoSwitcher?.lineHeight === true && errorMessageGlobalTypographyData?.lineHeight ? `line-height: ${errorMessageGlobalTypographyData?.lineHeight};` : ''}
            
            ${errorMessageGlobalTypoSwitcher?.fontFamily === false && errorMessageFontFamily && errorMessageFontFamily !== 'Default' ? `font-family: ${errorMessageFontFamily};` : ''}
            ${errorMessageGlobalTypoSwitcher?.fontSize === false && errorMessageFontSize?.Desktop ? `font-size: ${errorMessageFontSize?.Desktop}${errorMessageFontSizeUnits?.Desktop};` : ''}
            ${errorMessageGlobalTypoSwitcher?.fontWeight === false && errorMessageFontWeight ? `font-weight: ${errorMessageFontWeight};` : ''}
            ${errorMessageGlobalTypoSwitcher?.fontStyle === false && errorMessageFontStyle ? `font-style: ${errorMessageFontStyle};` : ''}
            ${errorMessageGlobalTypoSwitcher?.textTransform === false && errorMessageTextTransform ? `text-transform: ${errorMessageTextTransform};` : ''}
            ${errorMessageGlobalTypoSwitcher?.textDecoration === false && errorMessageTextDecoration ? `text-decoration: ${errorMessageTextDecoration};` : ''}
            ${errorMessageGlobalTypoSwitcher?.letterSpacing === false && errorMessageLetterSpacing?.Desktop ? `letter-spacing: ${errorMessageLetterSpacing?.Desktop}${errorMessageLetterSpacingUnits?.Desktop};` : ''}
            ${errorMessageGlobalTypoSwitcher?.lineHeight === false && errorMessageLineHeight?.Desktop ? `line-height: ${errorMessageLineHeight?.Desktop}${errorMessageLineHeightUnits?.Desktop};` : ''}
            
            text-align: center;
        }

        @media only screen and (max-width: 1024px) {
            .fb-form-builder-main-wrapper.${blockID} {
                ${formPositionType !== 'default' ? `position: ${formPositionType};` : ''}
                ${formPositionType !== 'default' && formPositionType !== 'relative' && formHZOrientationType === 'left' && formHZLeftOffset?.Tablet ? `left: ${formHZLeftOffset?.Tablet}${formHZLeftOffsetUnits?.Tablet};` : ''}
                ${formPositionType !== 'default' && formPositionType !== 'relative' && formHZOrientationType === 'right' && formHZRightOffset?.Tablet ? `right: ${formHZRightOffset?.Tablet}${formHZRightOffsetUnits?.Tablet};` : ''}
                ${formPositionType !== 'default' && formPositionType !== 'relative' && formVROrientationType === 'top' && formVRTopOffset?.Tablet ? `top: ${formVRTopOffset?.Tablet}${formVRTopOffsetUnits?.Tablet};` : ''}
                ${formPositionType !== 'default' && formPositionType !== 'relative' && formVROrientationType === 'bottom' && formVRBottomOffset?.Tablet ? `bottom: ${formVRBottomOffset?.Tablet}${formVRBottomOffsetUnits?.Tablet};` : ''}
                ${formZIndex?.Tablet ? `z-index: ${formZIndex?.Tablet};` : ''}
            }
            .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-wrapper {
                ${formPaddingTabletWidth && formPaddingTablet?.top ? `padding: ${formPaddingTabletWidth};` : ''}  
                ${formMarginTabletWidth && formMarginTablet?.top ? `margin: ${formMarginTabletWidth};` : ''}
                ${formBorderTabletWidth && formBorderTablet?.top ? `border-width: ${formBorderTabletWidth};` : ''}
                ${formBorderRadiusTabletWidth && formBorderRadiusTablet?.top ? `border-radius: ${formBorderRadiusTabletWidth};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .block-editor-block-list__layout,
            .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-wrapper {
                ${fieldColumnGap?.Tablet ? `column-gap: ${fieldColumnGap?.Tablet}${fieldColumnGapUnits?.Tablet};` : ''}
                ${fieldRowGap?.Tablet ? `row-gap: ${fieldRowGap?.Tablet}${fieldRowGapUnits?.Tablet};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-field-label-wrapper {
                ${labelMarginTabletWidth && labelMarginTablet?.top ? `margin: ${labelMarginTabletWidth};` : ''}

                ${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Tablet ? `font-size: ${labelFontSize?.Tablet}${labelFontSizeUnits?.Tablet};` : ''}
                ${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Tablet ? `letter-spacing: ${labelLetterSpacing?.Tablet}${labelLetterSpacingUnits?.Tablet};` : ''}
                ${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Tablet ? `line-height: ${labelLineHeight?.Tablet}${labelLineHeightUnits?.Tablet};` : ''}
                
            }
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input textarea,
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select,
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input input,
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-field-required-text {
                ${inputFieldGlobalTypoSwitcher?.fontSize === false && inputFieldFontSize?.Tablet ? `font-size: ${inputFieldFontSize?.Tablet}${inputFieldFontSizeUnits?.Tablet};` : ''}
                ${inputFieldGlobalTypoSwitcher?.letterSpacing === false && inputFieldLetterSpacing?.Tablet ? `letter-spacing: ${inputFieldLetterSpacing?.Tablet}${inputFieldLetterSpacingUnits?.Tablet};` : ''}
                ${inputFieldGlobalTypoSwitcher?.lineHeight === false && inputFieldLineHeight?.Tablet ? `line-height: ${inputFieldLineHeight?.Tablet}${inputFieldLineHeightUnits?.Tablet};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input {
                ${inputFieldMarginTabletWidth && inputFieldMarginTablet?.top ? `margin: ${inputFieldMarginTabletWidth};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input textarea,
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select,
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input input {
                ${inputFieldBorderTabletWidth && inputFieldBorderTablet?.top ? `border-width: ${inputFieldBorderTabletWidth};` : ''}
                ${inputFieldBorderRadiusTabletWidth && inputFieldBorderRadiusTablet?.top ? `border-radius: ${inputFieldBorderRadiusTabletWidth};` : ''}

                ${inputFieldPaddingTabletWidth && inputFieldPaddingTablet?.top ? `padding: ${inputFieldPaddingTabletWidth};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input .fb-field-icon {
                ${inputFieldIconSize?.Tablet ? `width: ${inputFieldIconSize?.Tablet}${inputFieldIconSizeUnits?.Tablet};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-submit-wrapper {
                ${submitBtnAlignment?.Tablet === 'left' ? 'justify-content: start;' : ''}
                ${submitBtnAlignment?.Tablet === 'center' ? 'justify-content: center;' : ''}
                ${submitBtnAlignment?.Tablet === 'right' ? 'justify-content: end;' : ''}
                ${submitBtnAlignment?.Tablet === 'stretch' ? 'justify-content: stretch;' : ''}

                ${submitBtnPositionType !== 'default' && submitBtnPositionType !== 'relative' && submitBtnHZOrientationType === 'left' && submitBtnHZLeftOffset?.Tablet ? `left: ${submitBtnHZLeftOffset?.Tablet}${submitBtnHZLeftOffsetUnits?.Tablet};` : ''}
                ${submitBtnPositionType !== 'default' && submitBtnPositionType !== 'relative' && submitBtnHZOrientationType === 'right' && submitBtnHZRightOffset?.Tablet ? `right: ${submitBtnHZRightOffset?.Tablet}${submitBtnHZRightOffsetUnits?.Tablet};` : ''}
                ${submitBtnPositionType !== 'default' && submitBtnPositionType !== 'relative' && submitBtnVROrientationType === 'top' && submitBtnVRTopOffset?.Tablet ? `top: ${submitBtnVRTopOffset?.Tablet}${submitBtnVRTopOffsetUnits?.Tablet};` : ''}
                ${submitBtnPositionType !== 'default' && submitBtnPositionType !== 'relative' && submitBtnVROrientationType === 'bottom' && submitBtnVRBottomOffset?.Tablet ? `bottom: ${submitBtnVRBottomOffset?.Tablet}${submitBtnVRBottomOffsetUnits?.Tablet};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-submit-wrapper .fb-submit-button {
                ${submitBtnWidth?.Tablet ? `width: ${submitBtnWidth?.Tablet}${submitBtnWidthUnits?.Tablet};` : ''}
                ${submitBtnHeight?.Tablet ? `height: ${submitBtnHeight?.Tablet}${submitBtnHeightUnits?.Tablet};` : ''}
                ${submitBtnIconPosition?.Tablet === 'left' ? 'flex-direction: row-reverse;' : ''}
                ${submitBtnAlignment?.Tablet === 'stretch' ? 'width: 100%;' : ''}
                ${submitBtnIconGap?.Tablet ? `gap: ${submitBtnIconGap?.Tablet}${submitBtnIconGapUnits?.Tablet};` : ''}

                ${submitBtnGlobalTypoSwitcher?.fontSize === false && submitBtnFontSize?.Tablet ? `font-size: ${submitBtnFontSize?.Tablet}${submitBtnFontSizeUnits?.Tablet};` : ''}
                ${submitBtnGlobalTypoSwitcher?.letterSpacing === false && submitBtnLetterSpacing?.Tablet ? `letter-spacing: ${submitBtnLetterSpacing?.Tablet}${submitBtnLetterSpacingUnits?.Tablet};` : ''}
                ${submitBtnGlobalTypoSwitcher?.lineHeight === false && submitBtnLineHeight?.Tablet ? `line-height: ${submitBtnLineHeight?.Tablet}${submitBtnLineHeightUnits?.Tablet};` : ''}

                ${submitBtnBorderTabletWidth && submitBtnBorderDesktop?.top ? `border-width: ${submitBtnBorderTabletWidth};` : ''}
                ${submitBtnBorderRadiusTabletWidth && submitBtnBorderRadiusDesktop?.top ? `border-radius: ${submitBtnBorderRadiusTabletWidth};` : ''}

                ${submitBtnMarginTabletWidth && submitBtnMarginDesktop?.top ? `margin: ${submitBtnMarginTabletWidth};` : ''}
                ${submitBtnPaddingTabletWidth && submitBtnPaddingDesktop?.top ? `padding: ${submitBtnPaddingTabletWidth};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-submit-button .fb-submit-button-icon {
                ${submitBtnIconSize?.Tablet ? `width: ${submitBtnIconSize?.Tablet}${submitBtnIconSizeUnits?.Tablet};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-success-message {
                ${successMessageMarginTabletWidth && successMessageMarginTablet?.top ? `margin: ${successMessageMarginTabletWidth};` : ''}
                ${successMessagePaddingTabletWidth && successMessagePaddingTablet?.top ? `padding: ${successMessagePaddingTabletWidth};` : ''}
                ${successMessageGlobalTypoSwitcher?.fontSize === false && successMessageFontSize?.Tablet ? `font-size: ${successMessageFontSize?.Tablet}${successMessageFontSizeUnits?.Tablet};` : ''}
                ${successMessageGlobalTypoSwitcher?.letterSpacing === false && successMessageLetterSpacing?.Tablet ? `letter-spacing: ${successMessageLetterSpacing?.Tablet}${successMessageLetterSpacingUnits?.Tablet};` : ''}
                ${successMessageGlobalTypoSwitcher?.lineHeight === false && successMessageLineHeight?.Tablet ? `line-height: ${successMessageLineHeight?.Tablet}${successMessageLineHeightUnits?.Tablet};` : ''}
                ${successMessageBorderTabletWidth && successMessageBorderTablet?.top ? `border-width: ${successMessageBorderTabletWidth};` : ''}
                ${successMessageBorderRadiusTabletWidth && successMessageBorderRadiusTablet?.top ? `border-radius: ${successMessageBorderRadiusTabletWidth};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-error-message,
            .fb-form-builder-main-wrapper.${blockID} .fb-validation-message {
                ${errorMessageMarginTabletWidth && errorMessageMarginTablet?.top ? `margin: ${errorMessageMarginTabletWidth};` : ''}
                ${errorMessagePaddingTabletWidth && errorMessagePaddingTablet?.top ? `padding: ${errorMessagePaddingTabletWidth};` : ''}
                ${errorMessageGlobalTypoSwitcher?.fontSize === false && errorMessageFontSize?.Tablet ? `font-size: ${errorMessageFontSize?.Tablet}${errorMessageFontSizeUnits?.Tablet};` : ''}
                ${errorMessageGlobalTypoSwitcher?.letterSpacing === false && errorMessageLetterSpacing?.Tablet ? `letter-spacing: ${errorMessageLetterSpacing?.Tablet}${errorMessageLetterSpacingUnits?.Tablet};` : ''}
                ${errorMessageGlobalTypoSwitcher?.lineHeight === false && errorMessageLineHeight?.Tablet ? `line-height: ${errorMessageLineHeight?.Tablet}${errorMessageLineHeightUnits?.Tablet};` : ''}
                ${errorMessageBorderTabletWidth && errorMessageBorderTablet?.top ? `border-width: ${errorMessageBorderTabletWidth};` : ''}
                ${errorMessageBorderRadiusTabletWidth && errorMessageBorderRadiusTablet?.top ? `border-radius: ${errorMessageBorderRadiusTabletWidth};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .fb-form-builder-main-wrapper.${blockID} {
                ${formPositionType !== 'default' ? `position: ${formPositionType};` : ''}
                ${formPositionType !== 'default' && formPositionType !== 'relative' && formHZOrientationType === 'left' && formHZLeftOffset?.Mobile ? `left: ${formHZLeftOffset?.Mobile}${formHZLeftOffsetUnits?.Mobile};` : ''}
                ${formPositionType !== 'default' && formPositionType !== 'relative' && formHZOrientationType === 'right' && formHZRightOffset?.Mobile ? `right: ${formHZRightOffset?.Mobile}${formHZRightOffsetUnits?.Mobile};` : ''}
                ${formPositionType !== 'default' && formPositionType !== 'relative' && formVROrientationType === 'top' && formVRTopOffset?.Mobile ? `top: ${formVRTopOffset?.Mobile}${formVRTopOffsetUnits?.Mobile};` : ''}
                ${formPositionType !== 'default' && formPositionType !== 'relative' && formVROrientationType === 'bottom' && formVRBottomOffset?.Mobile ? `bottom: ${formVRBottomOffset?.Mobile}${formVRBottomOffsetUnits?.Mobile};` : ''}
                ${formZIndex?.Mobile ? `z-index: ${formZIndex?.Mobile};` : ''}
            }
            .fb-form-builder-main-wrapper.${blockID} .fb-form-wrapper {
                ${formPaddingMobileWidth && formPaddingMobile?.top ? `padding: ${formPaddingMobileWidth};` : ''}
                ${formMarginMobileWidth && formMarginMobile?.top ? `margin: ${formMarginMobileWidth};` : ''}
                ${formBorderMobileWidth && formBorderMobile?.top ? `border-width: ${formBorderMobileWidth};` : ''}
                ${formBorderRadiusMobileWidth && formBorderRadiusMobile?.top ? `border-radius: ${formBorderRadiusMobileWidth};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .block-editor-block-list__layout,
            .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-wrapper {
                ${fieldColumnGap?.Mobile ? `column-gap: ${fieldColumnGap?.Mobile}${fieldColumnGapUnits?.Mobile};` : ''}
                ${fieldRowGap?.Mobile ? `row-gap: ${fieldRowGap?.Mobile}${fieldRowGapUnits?.Mobile};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-field-label-wrapper {
                ${labelMarginMobileWidth && labelMarginMobile?.top ? `margin: ${labelMarginMobileWidth};` : ''}

                ${labelGlobalTypoSwitcher?.fontSize === false && labelFontSize?.Mobile ? `font-size: ${labelFontSize?.Mobile}${labelFontSizeUnits?.Mobile};` : ''}
                ${labelGlobalTypoSwitcher?.letterSpacing === false && labelLetterSpacing?.Mobile ? `letter-spacing: ${labelLetterSpacing?.Mobile}${labelLetterSpacingUnits?.Mobile};` : ''}
                ${labelGlobalTypoSwitcher?.lineHeight === false && labelLineHeight?.Mobile ? `line-height: ${labelLineHeight?.Mobile}${labelLineHeightUnits?.Mobile};` : ''}
                
            }
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input {
                ${inputFieldMarginMobileWidth && inputFieldMarginMobile?.top ? `margin: ${inputFieldMarginMobileWidth};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input textarea,
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select,
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input input,
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-field-required-text {
                ${inputFieldGlobalTypoSwitcher?.fontSize === false && inputFieldFontSize?.Mobile ? `font-size: ${inputFieldFontSize?.Mobile}${inputFieldFontSizeUnits?.Mobile};` : ''}
                ${inputFieldGlobalTypoSwitcher?.letterSpacing === false && inputFieldLetterSpacing?.Mobile ? `letter-spacing: ${inputFieldLetterSpacing?.Mobile}${inputFieldLetterSpacingUnits?.Mobile};` : ''}
                ${inputFieldGlobalTypoSwitcher?.lineHeight === false && inputFieldLineHeight?.Mobile ? `line-height: ${inputFieldLineHeight?.Mobile}${inputFieldLineHeightUnits?.Mobile};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input textarea,
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input select,
            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input input {
                ${inputFieldBorderMobileWidth && inputFieldBorderMobile?.top ? `border-width: ${inputFieldBorderMobileWidth};` : ''}
                ${inputFieldBorderRadiusMobileWidth && inputFieldBorderRadiusMobile?.top ? `border-radius: ${inputFieldBorderRadiusMobileWidth};` : ''}

                ${inputFieldPaddingMobileWidth && inputFieldPaddingMobile?.top ? `padding: ${inputFieldPaddingMobileWidth};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-field-input-wrapper .fb-form-input .fb-field-icon {
                ${inputFieldIconSize?.Mobile ? `width: ${inputFieldIconSize?.Mobile}${inputFieldIconSizeUnits?.Mobile};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-submit-wrapper {
                ${submitBtnAlignment?.Mobile === 'left' ? 'justify-content: start;' : ''}
                ${submitBtnAlignment?.Mobile === 'center' ? 'justify-content: center;' : ''}
                ${submitBtnAlignment?.Mobile === 'right' ? 'justify-content: end;' : ''}
                ${submitBtnAlignment?.Mobile === 'stretch' ? 'justify-content: stretch;' : ''}

                ${submitBtnPositionType !== 'default' && submitBtnPositionType !== 'relative' && submitBtnHZOrientationType === 'left' && submitBtnHZLeftOffset?.Mobile ? `left: ${submitBtnHZLeftOffset?.Mobile}${submitBtnHZLeftOffsetUnits?.Mobile};` : ''}
                ${submitBtnPositionType !== 'default' && submitBtnPositionType !== 'relative' && submitBtnHZOrientationType === 'right' && submitBtnHZRightOffset?.Mobile ? `right: ${submitBtnHZRightOffset?.Mobile}${submitBtnHZRightOffsetUnits?.Mobile};` : ''}
                ${submitBtnPositionType !== 'default' && submitBtnPositionType !== 'relative' && submitBtnVROrientationType === 'top' && submitBtnVRTopOffset?.Mobile ? `top: ${submitBtnVRTopOffset?.Mobile}${submitBtnVRTopOffsetUnits?.Mobile};` : ''}
                ${submitBtnPositionType !== 'default' && submitBtnPositionType !== 'relative' && submitBtnVROrientationType === 'bottom' && submitBtnVRBottomOffset?.Mobile ? `bottom: ${submitBtnVRBottomOffset?.Mobile}${submitBtnVRBottomOffsetUnits?.Mobile};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-form-builder-submit-wrapper .fb-submit-button {
                ${submitBtnWidth?.Mobile ? `width: ${submitBtnWidth?.Mobile}${submitBtnWidthUnits?.Mobile};` : ''}
                ${submitBtnHeight?.Mobile ? `height: ${submitBtnHeight?.Mobile}${submitBtnHeightUnits?.Mobile};` : ''}
                ${submitBtnIconPosition?.Mobile === 'left' ? 'flex-direction: row-reverse;' : ''}
                ${submitBtnAlignment?.Mobile === 'stretch' ? 'width: 100%;' : ''}
                ${submitBtnIconGap?.Mobile ? `gap: ${submitBtnIconGap?.Mobile}${submitBtnIconGapUnits?.Mobile};` : ''}

                ${submitBtnGlobalTypoSwitcher?.fontSize === false && submitBtnFontSize?.Mobile ? `font-size: ${submitBtnFontSize?.Mobile}${submitBtnFontSizeUnits?.Mobile};` : ''}
                ${submitBtnGlobalTypoSwitcher?.letterSpacing === false && submitBtnLetterSpacing?.Mobile ? `letter-spacing: ${submitBtnLetterSpacing?.Mobile}${submitBtnLetterSpacingUnits?.Mobile};` : ''}
                ${submitBtnGlobalTypoSwitcher?.lineHeight === false && submitBtnLineHeight?.Mobile ? `line-height: ${submitBtnLineHeight?.Mobile}${submitBtnLineHeightUnits?.Mobile};` : ''}

                ${submitBtnBorderMobileWidth && submitBtnBorderDesktop?.top ? `border-width: ${submitBtnBorderMobileWidth};` : ''}
                ${submitBtnBorderRadiusMobileWidth && submitBtnBorderRadiusDesktop?.top ? `border-radius: ${submitBtnBorderRadiusMobileWidth};` : ''}

                ${submitBtnMarginMobileWidth && submitBtnMarginDesktop?.top ? `margin: ${submitBtnMarginMobileWidth};` : ''}
                ${submitBtnPaddingMobileWidth && submitBtnPaddingDesktop?.top ? `padding: ${submitBtnPaddingMobileWidth};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-submit-button .fb-submit-button-icon {
                ${submitBtnIconSize?.Mobile ? `width: ${submitBtnIconSize?.Mobile}${submitBtnIconSizeUnits?.Mobile};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-success-message {
                ${successMessageMarginMobileWidth && successMessageMarginMobile?.top ? `margin: ${successMessageMarginMobileWidth};` : ''}
                ${successMessagePaddingMobileWidth && successMessagePaddingMobile?.top ? `padding: ${successMessagePaddingMobileWidth};` : ''}
                ${successMessageGlobalTypoSwitcher?.fontSize === false && successMessageFontSize?.Mobile ? `font-size: ${successMessageFontSize?.Mobile}${successMessageFontSizeUnits?.Mobile};` : ''}
                ${successMessageGlobalTypoSwitcher?.letterSpacing === false && successMessageLetterSpacing?.Mobile ? `letter-spacing: ${successMessageLetterSpacing?.Mobile}${successMessageLetterSpacingUnits?.Mobile};` : ''}
                ${successMessageGlobalTypoSwitcher?.lineHeight === false && successMessageLineHeight?.Mobile ? `line-height: ${successMessageLineHeight?.Mobile}${successMessageLineHeightUnits?.Mobile};` : ''}
                ${successMessageBorderRadiusMobileWidth && successMessageBorderRadiusMobile?.top ? `border-radius: ${successMessageBorderRadiusMobileWidth};` : ''}
                ${successMessageBorderMobileWidth && successMessageBorderMobile?.top ? `border-width: ${successMessageBorderMobileWidth};` : ''}
            }

            .fb-form-builder-main-wrapper.${blockID} .fb-error-message,
            .fb-form-builder-main-wrapper.${blockID} .fb-validation-message {
                ${errorMessageMarginMobileWidth && errorMessageMarginMobile?.top ? `margin: ${errorMessageMarginMobileWidth};` : ''}
                ${errorMessagePaddingMobileWidth && errorMessagePaddingMobile?.top ? `padding: ${errorMessagePaddingMobileWidth};` : ''}
                ${errorMessageGlobalTypoSwitcher?.fontSize === false && errorMessageFontSize?.Mobile ? `font-size: ${errorMessageFontSize?.Mobile}${errorMessageFontSizeUnits?.Mobile};` : ''}
                ${errorMessageGlobalTypoSwitcher?.letterSpacing === false && errorMessageLetterSpacing?.Mobile ? `letter-spacing: ${errorMessageLetterSpacing?.Mobile}${errorMessageLetterSpacingUnits?.Mobile};` : ''}
                ${errorMessageGlobalTypoSwitcher?.lineHeight === false && errorMessageLineHeight?.Mobile ? `line-height: ${errorMessageLineHeight?.Mobile}${errorMessageLineHeightUnits?.Mobile};` : ''}
                ${errorMessageBorderMobileWidth && errorMessageBorderMobile?.top ? `border-width: ${errorMessageBorderMobileWidth};` : ''}
                ${errorMessageBorderRadiusMobileWidth && errorMessageBorderRadiusMobile?.top ? `border-radius: ${errorMessageBorderRadiusMobileWidth};` : ''}
            }
        }
    `;

    const customCss = getCustomCss(formCustomCSS, `.${blockID}`);
    return `${styles} ${customCss}`.replace(/\s+/g, ' ').trim();

};

export default generateFormBuilderStyle;
