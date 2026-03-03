/**
 * Fluent Form Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateFluentFormStyle = (attributes) => {
    const {
        blockID,
        // deviceType,
        fluentFormGlobalZIndex,
        fluentFormOverflow,
        formId,
        showLabels,
        showPlaceholder,
        showErrorMessage,

        fluentFormLabelColorSwitcher,
        fluentFormLabelColor,
        fluentFormLabelHoverColor,
        fluentFormLabelGlobalTypoSwitcher,
        fluentFormLabelGlobalTypographyData,
        fluentFormLabelGlobalTypoType,
        fluentFormLabelGlobalTypoOption,
        fluentFormLabelFontFamily,
        fluentFormLabelFontSize,
        fluentFormLabelFontSizeUnits,
        fluentFormLabelFontWeight,
        fluentFormLabelFontStyle,
        fluentFormLabelTextTransform,
        fluentFormLabelTextDecoration,
        fluentFormLabelLetterSpacing,
        fluentFormLabelLineHeight,
        fluentFormLabelLetterSpacingUnits,
        fluentFormLabelLineHeightUnits,

        fluntFromLabelMarginUnits,
        fluntFromLabelMarginDesktop,
        fluntFromLabelMarginTablet,
        fluntFromLabelMarginMobile,
        fluntFromLabelMarginLink,

        fluentFormInputBgColor,
        fluentFormInputColor,
        fluentFormInputFocusColor,
        fluentFormInputGlobalTypoSwitcher,
        fluentFormInputGlobalTypographyData,
        fluentFormInputGlobalTypoType,
        fluentFormInputGlobalTypoOption,
        fluentFormInputFontFamily,
        fluentFormInputFontSize,
        fluentFormInputFontSizeUnits,
        fluentFormInputFontWeight,
        fluentFormInputFontStyle,
        fluentFormInputTextTransform,
        fluentFormInputTextDecoration,
        fluentFormInputLetterSpacing,
        fluentFormInputLineHeight,
        fluentFormInputLetterSpacingUnits,
        fluentFormInputLineHeightUnits,

        fluentFormTextIndentSize,
        fluentFormTextIndentSizeUnits,
        fluentFormInputWidthSize,
        fluentFormInputWidthSizeUnits,
        fluentFormInputHeightSize,
        fluentFormInputHeightSizeUnits,
        fluentFormTextareaWidthSize,
        fluentFormTextareaWidthSizeUnits,
        fluentFormTextareaHeightSize,
        fluentFormTextareaHeightSizeUnits,
        fluentFormSpacingSize,
        fluentFormSpacingUnits,

        fluentFormPaddingUnits,
        fluentFormPaddingDesktop,
        fluentFormPaddingTablet,
        fluentFormPaddingMobile,
        fluentFormPaddingLink,

        fluentFormBorder,
        fluentFormBorderColor,
        fluentFormBorderUnits,
        fluentFormBorderDesktop,
        fluentFormBorderTablet,
        fluentFormBorderMobile,
        fluentFormBorderLink,
        fluentFormBorderRadiusUnits,
        fluentFormBorderRadiusDesktop,
        fluentFormBorderRadiusTablet,
        fluentFormBorderRadiusMobile,
        fluentFormBorderRadiusLink,

        fluentFormFocusBorder,
        fluentFormFocusBorderUnits,
        fluentFormFocusBorderDesktop,
        fluentFormFocusBorderTablet,
        fluentFormFocusBorderMobile,
        fluentFormFocusBorderLink,
        fluentFormFocusBorderRadiusUnits,
        fluentFormFocusBorderRadiusDesktop,
        fluentFormFocusBorderRadiusTablet,
        fluentFormFocusBorderRadiusMobile,
        fluentFormFocusBorderRadiusLink,

        fluentFormPlaceholderColor,

        fluentFormRadioFontSize,
        fluentFormRadioFontSizeUnits,
        fluentFormRadioColor,
        fluentFormRadioCheckedColor,
        fluentFormRadioBorderWidth,
        fluentFormRadioBorderWidthUnits,
        fluentFormRadioBorderColor,
        fluentFormRadioBorderRadiusUnits,
        fluentFormRadioBorderRadiusDesktop,
        fluentFormRadioBorderRadiusTablet,
        fluentFormRadioBorderRadiusMobile,
        fluentFormRadioBorderRadiusLink,
        fluentFormCheckBoxBorderRadiusUnits,
        fluentFormCheckBoxBorderRadiusDesktop,
        fluentFormCheckBoxBorderRadiusTablet,
        fluentFormCheckBoxBorderRadiusMobile,
        fluentFormCheckBoxBorderRadiusLink,
        fluentFormRadioCheckBoxItemSpacing,
        fluentFormRadioCheckBoxItemSpacingUnits,

        fluentFormSectionBreakAlignment,
        fluentFormSectionBreakTitleColorSwitcher,
        fluentFormSectionBreakTitleColor,
        fluentFormSectionBreakTitleHoverColor,
        fluentFormSectionBreakTitleGlobalTypoSwitcher,
        fluentFormSectionBreakTitleGlobalTypographyData,
        fluentFormSectionBreakTitleGlobalTypoType,
        fluentFormSectionBreakTitleGlobalTypoOption,
        fluentFormSectionBreakTitleFontFamily,
        fluentFormSectionBreakTitleFontSize,
        fluentFormSectionBreakTitleFontSizeUnits,
        fluentFormSectionBreakTitleFontWeight,
        fluentFormSectionBreakTitleFontStyle,
        fluentFormSectionBreakTitleTextTransform,
        fluentFormSectionBreakTitleTextDecoration,
        fluentFormSectionBreakTitleLetterSpacing,
        fluentFormSectionBreakTitleLetterSpacingUnits,
        fluentFormSectionBreakTitleLineHeight,
        fluentFormSectionBreakTitleLineHeightUnits,
        fluentFormSectionBreakTitlePaddingUnits,
        fluentFormSectionBreakTitlePaddingDesktop,
        fluentFormSectionBreakTitlePaddingTablet,
        fluentFormSectionBreakTitlePaddingMobile,
        fluentFormSectionBreakTitlePaddingLink,
        fluentFormSectionBreakTitleMarginUnits,
        fluentFormSectionBreakTitleMarginDesktop,
        fluentFormSectionBreakTitleMarginTablet,
        fluentFormSectionBreakTitleMarginMobile,
        fluentFormSectionBreakTitleMarginLink,

        fluentFormSectionBreakDescColorSwitcher,
        fluentFormSectionBreakDescColor,
        fluentFormSectionBreakDescHoverColor,
        fluentFormSectionBreakDescGlobalTypoSwitcher,
        fluentFormSectionBreakDescGlobalTypographyData,
        fluentFormSectionBreakDescGlobalTypoType,
        fluentFormSectionBreakDescGlobalTypoOption,
        fluentFormSectionBreakDescFontFamily,
        fluentFormSectionBreakDescFontSize,
        fluentFormSectionBreakDescFontSizeUnits,
        fluentFormSectionBreakDescFontWeight,
        fluentFormSectionBreakDescFontStyle,
        fluentFormSectionBreakDescTextTransform,
        fluentFormSectionBreakDescTextDecoration,
        fluentFormSectionBreakDescLetterSpacing,
        fluentFormSectionBreakDescLetterSpacingUnits,
        fluentFormSectionBreakDescLineHeight,
        fluentFormSectionBreakDescLineHeightUnits,
        fluentFormSectionBreakDescPaddingUnits,
        fluentFormSectionBreakDescPaddingDesktop,
        fluentFormSectionBreakDescPaddingTablet,
        fluentFormSectionBreakDescPaddingMobile,
        fluentFormSectionBreakDescPaddingLink,
        fluentFormSectionBreakDescMarginUnits,
        fluentFormSectionBreakDescMarginDesktop,
        fluentFormSectionBreakDescMarginTablet,
        fluentFormSectionBreakDescMarginMobile,
        fluentFormSectionBreakDescMarginLink,

        fluentFormHtmlAlignment,
        fluentFormHtmlColorSwitcher,
        fluentFormHtmlColor,
        fluentFormHtmlHoverColor,
        fluentFormHtmlGlobalTypoSwitcher,
        fluentFormHtmlGlobalTypographyData,
        fluentFormHtmlGlobalTypoType,
        fluentFormHtmlGlobalTypoOption,
        fluentFormHtmlFontFamily,
        fluentFormHtmlFontSize,
        fluentFormHtmlFontSizeUnits,
        fluentFormHtmlFontWeight,
        fluentFormHtmlFontStyle,
        fluentFormHtmlTextTransform,
        fluentFormHtmlTextDecoration,
        fluentFormHtmlLetterSpacing,
        fluentFormHtmlLetterSpacingUnits,
        fluentFormHtmlLineHeight,
        fluentFormHtmlLineHeightUnits,
        fluentFormHtmlPaddingUnits,
        fluentFormHtmlPaddingDesktop,
        fluentFormHtmlPaddingTablet,
        fluentFormHtmlPaddingMobile,
        fluentFormHtmlPaddingLink,
        fluentFormHtmlMarginUnits,
        fluentFormHtmlMarginDesktop,
        fluentFormHtmlMarginTablet,
        fluentFormHtmlMarginMobile,
        fluentFormHtmlMarginLink,

        fluentFormSubmitAlignment,
        fluentFormSubmitHeight,
        fluentFormSubmitHeightUnits,
        fluentFormSubmitWidthSelect,
        fluentFormSubmitWidth,
        fluentFormSubmitWidthUnits,
        fluentFormSubmitColorSwitcher,
        fluentFormSubmitColor,
        fluentFormSubmitHoverColor,
        fluentFormSubmitBgColorSwitcher,
        fluentFormSubmitBgColor,
        fluentFormSubmitBgHoverColor,
        fluentFormSubmitGlobalTypoSwitcher,
        fluentFormSubmitGlobalTypographyData,
        fluentFormSubmitGlobalTypoType,
        fluentFormSubmitGlobalTypoOption,
        fluentFormSubmitFontFamily,
        fluentFormSubmitFontSize,
        fluentFormSubmitFontSizeUnits,
        fluentFormSubmitFontWeight,
        fluentFormSubmitFontStyle,
        fluentFormSubmitTextTransform,
        fluentFormSubmitTextDecoration,
        fluentFormSubmitLetterSpacing,
        fluentFormSubmitLetterSpacingUnits,
        fluentFormSubmitLineHeight,
        fluentFormSubmitLineHeightUnits,
        fluentFormSubmitPaddingUnits,
        fluentFormSubmitPaddingDesktop,
        fluentFormSubmitPaddingTablet,
        fluentFormSubmitPaddingMobile,
        fluentFormSubmitPaddingLink,
        fluentFormSubmitMarginUnits,
        fluentFormSubmitMarginDesktop,
        fluentFormSubmitMarginTablet,
        fluentFormSubmitMarginMobile,
        fluentFormSubmitMarginLink,
        fluentFormSubmitBorder,
        fluentFormSubmitBorderColorSwitcher,
        fluentFormSubmitBorderColor,
        fluentFormSubmitBorderHoverColor,
        fluentFormSubmitBorderUnits,
        fluentFormSubmitBorderDesktop,
        fluentFormSubmitBorderTablet,
        fluentFormSubmitBorderMobile,
        fluentFormSubmitBorderLink,
        fluentFormSubmitBorderRadiusUnits,
        fluentFormSubmitBorderRadiusDesktop,
        fluentFormSubmitBorderRadiusTablet,
        fluentFormSubmitBorderRadiusMobile,
        fluentFormSubmitBorderRadiusLink,

        fluentFormSuccessColor,
        fluentFormSuccessBgColor,
        fluentFormSuccessGlobalTypoSwitcher,
        fluentFormSuccessGlobalTypographyData,
        fluentFormSuccessGlobalTypoType,
        fluentFormSuccessGlobalTypoOption,
        fluentFormSuccessFontFamily,
        fluentFormSuccessFontSize,
        fluentFormSuccessFontSizeUnits,
        fluentFormSuccessFontWeight,
        fluentFormSuccessFontStyle,
        fluentFormSuccessTextTransform,
        fluentFormSuccessTextDecoration,
        fluentFormSuccessLetterSpacing,
        fluentFormSuccessLetterSpacingUnits,
        fluentFormSuccessLineHeight,
        fluentFormSuccessLineHeightUnits,
        fluentFormSuccessBorder,
        fluentFormSuccessBorderColorSwitcher,
        fluentFormSuccessBorderColor,
        fluentFormSuccessBorderHoverColor,
        fluentFormSuccessBorderUnits,
        fluentFormSuccessBorderDesktop,
        fluentFormSuccessBorderTablet,
        fluentFormSuccessBorderMobile,
        fluentFormSuccessBorderLink,
        fluentFormSuccessBorderRadiusUnits,
        fluentFormSuccessBorderRadiusDesktop,
        fluentFormSuccessBorderRadiusTablet,
        fluentFormSuccessBorderRadiusMobile,
        fluentFormSuccessBorderRadiusLink,

        fluentFormErrorColor,
        fluentFormErrorGlobalTypoSwitcher,
        fluentFormErrorGlobalTypographyData,
        fluentFormErrorGlobalTypoType,
        fluentFormErrorGlobalTypoOption,
        fluentFormErrorFontFamily,
        fluentFormErrorFontSize,
        fluentFormErrorFontSizeUnits,
        fluentFormErrorFontWeight,
        fluentFormErrorFontStyle,
        fluentFormErrorTextTransform,
        fluentFormErrorTextDecoration,
        fluentFormErrorLetterSpacing,
        fluentFormErrorLetterSpacingUnits,
        fluentFormErrorLineHeight,
        fluentFormErrorLineHeightUnits,
        fluentFormErrorPaddingUnits,
        fluentFormErrorPaddingDesktop,
        fluentFormErrorPaddingTablet,
        fluentFormErrorPaddingMobile,
        fluentFormErrorPaddingLink,
        fluentFormErrorMarginUnits,
        fluentFormErrorMarginDesktop,
        fluentFormErrorMarginTablet,
        fluentFormErrorMarginMobile,
        fluentFormErrorMarginLink,

        fluentFormGlobalPaddingUnits,
        fluentFormGlobalPaddingDesktop,
        fluentFormGlobalPaddingTablet,
        fluentFormGlobalPaddingMobile,
        fluentFormGlobalPaddingLink,
        fluentFormGlobalMarginUnits,
        fluentFormGlobalMarginDesktop,
        fluentFormGlobalMarginTablet,
        fluentFormGlobalMarginMobile,
        fluentFormGlobalMarginLink,
        fluentFormGlobalBgColorSwitcher,
        fluentFormGlobalBgColor,
        fluentFormGlobalBgHoverColor,
        fluentFormGlobalBorder,
        fluentFormGlobalBorderColorSwitcher,
        fluentFormGlobalBorderColor,
        fluentFormGlobalBorderHoverColor,
        fluentFormGlobalBorderUnits,
        fluentFormGlobalBorderDesktop,
        fluentFormGlobalBorderTablet,
        fluentFormGlobalBorderMobile,
        fluentFormGlobalBorderLink,
        fluentFormGlobalBorderRadiusUnits,
        fluentFormGlobalBorderRadiusDesktop,
        fluentFormGlobalBorderRadiusTablet,
        fluentFormGlobalBorderRadiusMobile,
        fluentFormGlobalBorderRadiusLink,

        fluentFormGlobalBoxShadowSwitcher,
        fluentFormGlobalBoxShadowValues,
        fluentFormGlobalBoxShadowCssValue,
        fluentFormGlobalBoxShadowHoverValues,
        fluentFormGlobalBoxShadowHoverCssValue,

        fluentFormDesktopSwitcher,
		fluentFormTabletSwitcher,
		fluentFormMobileSwitcher,

        fluentFormGlobalWraperCustomCSS,
        fluentFormGlobalWraperID,
        fluentFormGlobalWraperClass,

        // Position
        fluentFormPositionType,
        fluentFormHZOrientationType,
        fluentFormVROrientationType,
        fluentFormHZLeftOffset,
        fluentFormHZLeftOffsetUnits,
        fluentFormHZRightOffset,
        fluentFormHZRightOffsetUnits,
        fluentFormVRTopOffset,
        fluentFormVRTopOffsetUnits,
        fluentFormVRBottomOffset,
        fluentFormVRBottomOffsetUnits,
    } = attributes;

    /** Default Label Margin for desktop (using desktop_margin) */  
    const fluntFromLabelMarginDesktopWidth    = `${fluntFromLabelMarginDesktop?.top}${fluntFromLabelMarginUnits?.Desktop} ${fluntFromLabelMarginDesktop?.right}${fluntFromLabelMarginUnits?.Desktop} ${fluntFromLabelMarginDesktop?.bottom}${fluntFromLabelMarginUnits?.Desktop} ${fluntFromLabelMarginDesktop?.left}${fluntFromLabelMarginUnits?.Desktop}`;
    const fluntFromLabelMarginTabletWidth     = `${fluntFromLabelMarginTablet?.top}${fluntFromLabelMarginUnits?.Tablet} ${fluntFromLabelMarginTablet?.right}${fluntFromLabelMarginUnits?.Tablet} ${fluntFromLabelMarginTablet?.bottom}${fluntFromLabelMarginUnits?.Tablet} ${fluntFromLabelMarginTablet?.left}${fluntFromLabelMarginUnits?.Tablet}`;
    const fluntFromLabelMarginMobileWidth     = `${fluntFromLabelMarginMobile?.top}${fluntFromLabelMarginUnits?.Mobile} ${fluntFromLabelMarginMobile?.right}${fluntFromLabelMarginUnits?.Mobile} ${fluntFromLabelMarginMobile?.bottom}${fluntFromLabelMarginUnits?.Mobile} ${fluntFromLabelMarginMobile?.left}${fluntFromLabelMarginUnits?.Mobile}`;

     /** Default padding for desktop (using desktop_padding) */
    const fluentFormDesktopPadding    = `${fluentFormPaddingDesktop?.top}${fluentFormPaddingUnits?.Desktop} ${fluentFormPaddingDesktop?.right}${fluentFormPaddingUnits?.Desktop} ${fluentFormPaddingDesktop?.bottom}${fluentFormPaddingUnits?.Desktop} ${fluentFormPaddingDesktop?.left}${fluentFormPaddingUnits?.Desktop}`;
    const fluentFormTabletPadding     = `${fluentFormPaddingTablet?.top}${fluentFormPaddingUnits?.Tablet} ${fluentFormPaddingTablet?.right}${fluentFormPaddingUnits?.Tablet} ${fluentFormPaddingTablet?.bottom}${fluentFormPaddingUnits?.Tablet} ${fluentFormPaddingTablet?.left}${fluentFormPaddingUnits?.Tablet}`;
    const fluentFormMobilePadding     = `${fluentFormPaddingMobile?.top}${fluentFormPaddingUnits?.Mobile} ${fluentFormPaddingMobile?.right}${fluentFormPaddingUnits?.Mobile} ${fluentFormPaddingMobile?.bottom}${fluentFormPaddingUnits?.Mobile} ${fluentFormPaddingMobile?.left}${fluentFormPaddingUnits?.Mobile}`;

    const fluentFormBorderDesktopWidth = `${fluentFormBorderDesktop?.top}${fluentFormBorderUnits?.Desktop} ${fluentFormBorderDesktop?.right}${fluentFormBorderUnits?.Desktop} ${fluentFormBorderDesktop?.bottom}${fluentFormBorderUnits?.Desktop} ${fluentFormBorderDesktop?.left}${fluentFormBorderUnits?.Desktop}`;
    const fluentFormBorderTabletWidth = `${fluentFormBorderTablet?.top}${fluentFormBorderUnits?.Tablet} ${fluentFormBorderTablet?.right}${fluentFormBorderUnits?.Tablet} ${fluentFormBorderTablet?.bottom}${fluentFormBorderUnits?.Tablet} ${fluentFormBorderTablet?.left}${fluentFormBorderUnits?.Tablet}`;
    const fluentFormBorderMobileWidth = `${fluentFormBorderMobile?.top}${fluentFormBorderUnits?.Mobile} ${fluentFormBorderMobile?.right}${fluentFormBorderUnits?.Mobile} ${fluentFormBorderMobile?.bottom}${fluentFormBorderUnits?.Mobile} ${fluentFormBorderMobile?.left}${fluentFormBorderUnits?.Mobile}`;

    const fluentFormBorderRadiusDesktopWidth = `${fluentFormBorderRadiusDesktop?.top}${fluentFormBorderRadiusUnits?.Desktop} ${fluentFormBorderRadiusDesktop?.right}${fluentFormBorderRadiusUnits?.Desktop} ${fluentFormBorderRadiusDesktop?.bottom}${fluentFormBorderRadiusUnits?.Desktop} ${fluentFormBorderRadiusDesktop?.left}${fluentFormBorderRadiusUnits?.Desktop}`;
    const fluentFormBorderRadiusTabletWidth = `${fluentFormBorderRadiusTablet?.top}${fluentFormBorderRadiusUnits?.Tablet} ${fluentFormBorderRadiusTablet?.right}${fluentFormBorderRadiusUnits?.Tablet} ${fluentFormBorderRadiusTablet?.bottom}${fluentFormBorderRadiusUnits?.Tablet} ${fluentFormBorderRadiusTablet?.left}${fluentFormBorderRadiusUnits?.Tablet}`;
    const fluentFormBorderRadiusMobileWidth = `${fluentFormBorderRadiusMobile?.top}${fluentFormBorderRadiusUnits?.Mobile} ${fluentFormBorderRadiusMobile?.right}${fluentFormBorderRadiusUnits?.Mobile} ${fluentFormBorderRadiusMobile?.bottom}${fluentFormBorderRadiusUnits?.Mobile} ${fluentFormBorderRadiusMobile?.left}${fluentFormBorderRadiusUnits?.Mobile}`;

    const fluentFormFocusBorderDesktopWidth = `${fluentFormFocusBorderDesktop?.top}${fluentFormFocusBorderUnits?.Desktop} ${fluentFormFocusBorderDesktop?.right}${fluentFormFocusBorderUnits?.Desktop} ${fluentFormFocusBorderDesktop?.bottom}${fluentFormFocusBorderUnits?.Desktop} ${fluentFormFocusBorderDesktop?.left}${fluentFormFocusBorderUnits?.Desktop}`;
    const fluentFormFocusBorderTabletWidth = `${fluentFormFocusBorderTablet?.top}${fluentFormFocusBorderUnits?.Tablet} ${fluentFormFocusBorderTablet?.right}${fluentFormFocusBorderUnits?.Tablet} ${fluentFormFocusBorderTablet?.bottom}${fluentFormFocusBorderUnits?.Tablet} ${fluentFormFocusBorderTablet?.left}${fluentFormFocusBorderUnits?.Tablet}`;
    const fluentFormFocusBorderMobileWidth = `${fluentFormFocusBorderMobile?.top}${fluentFormFocusBorderUnits?.Mobile} ${fluentFormFocusBorderMobile?.right}${fluentFormFocusBorderUnits?.Mobile} ${fluentFormFocusBorderMobile?.bottom}${fluentFormFocusBorderUnits?.Mobile} ${fluentFormFocusBorderMobile?.left}${fluentFormFocusBorderUnits?.Mobile}`;

    const fluentFormFocusBorderRadiusDesktopWidth = `${fluentFormFocusBorderRadiusDesktop?.top}${fluentFormFocusBorderRadiusUnits?.Desktop} ${fluentFormFocusBorderRadiusDesktop?.right}${fluentFormFocusBorderRadiusUnits?.Desktop} ${fluentFormFocusBorderRadiusDesktop?.bottom}${fluentFormFocusBorderRadiusUnits?.Desktop} ${fluentFormFocusBorderRadiusDesktop?.left}${fluentFormFocusBorderRadiusUnits?.Desktop}`;
    const fluentFormFocusBorderRadiusTabletWidth = `${fluentFormFocusBorderRadiusTablet?.top}${fluentFormFocusBorderRadiusUnits?.Tablet} ${fluentFormFocusBorderRadiusTablet?.right}${fluentFormFocusBorderRadiusUnits?.Tablet} ${fluentFormFocusBorderRadiusTablet?.bottom}${fluentFormFocusBorderRadiusUnits?.Tablet} ${fluentFormFocusBorderRadiusTablet?.left}${fluentFormFocusBorderRadiusUnits?.Tablet}`;
    const fluentFormFocusBorderRadiusMobileWidth = `${fluentFormFocusBorderRadiusMobile?.top}${fluentFormFocusBorderRadiusUnits?.Mobile} ${fluentFormFocusBorderRadiusMobile?.right}${fluentFormFocusBorderRadiusUnits?.Mobile} ${fluentFormFocusBorderRadiusMobile?.bottom}${fluentFormFocusBorderRadiusUnits?.Mobile} ${fluentFormFocusBorderRadiusMobile?.left}${fluentFormFocusBorderRadiusUnits?.Mobile}`;

    const fluentFormRadioBorderRadiusDesktopWidth = `${fluentFormRadioBorderRadiusDesktop?.top}${fluentFormRadioBorderRadiusUnits?.Desktop} ${fluentFormRadioBorderRadiusDesktop?.right}${fluentFormRadioBorderRadiusUnits?.Desktop} ${fluentFormRadioBorderRadiusDesktop?.bottom}${fluentFormRadioBorderRadiusUnits?.Desktop} ${fluentFormRadioBorderRadiusDesktop?.left}${fluentFormRadioBorderRadiusUnits?.Desktop}`;
    const fluentFormRadioBorderRadiusTabletWidth = `${fluentFormRadioBorderRadiusTablet?.top}${fluentFormRadioBorderRadiusUnits?.Tablet} ${fluentFormRadioBorderRadiusTablet?.right}${fluentFormRadioBorderRadiusUnits?.Tablet} ${fluentFormRadioBorderRadiusTablet?.bottom}${fluentFormRadioBorderRadiusUnits?.Tablet} ${fluentFormRadioBorderRadiusTablet?.left}${fluentFormRadioBorderRadiusUnits?.Tablet}`;
    const fluentFormRadioBorderRadiusMobileWidth = `${fluentFormRadioBorderRadiusMobile?.top}${fluentFormRadioBorderRadiusUnits?.Mobile} ${fluentFormRadioBorderRadiusMobile?.right}${fluentFormRadioBorderRadiusUnits?.Mobile} ${fluentFormRadioBorderRadiusMobile?.bottom}${fluentFormRadioBorderRadiusUnits?.Mobile} ${fluentFormRadioBorderRadiusMobile?.left}${fluentFormRadioBorderRadiusUnits?.Mobile}`;

     const fluentFormCheckBoxBorderRadiusDesktopWidth = `${fluentFormCheckBoxBorderRadiusDesktop?.top}${fluentFormCheckBoxBorderRadiusUnits?.Desktop} ${fluentFormCheckBoxBorderRadiusDesktop?.right}${fluentFormCheckBoxBorderRadiusUnits?.Desktop} ${fluentFormCheckBoxBorderRadiusDesktop?.bottom}${fluentFormCheckBoxBorderRadiusUnits?.Desktop} ${fluentFormCheckBoxBorderRadiusDesktop?.left}${fluentFormCheckBoxBorderRadiusUnits?.Desktop}`;
    const fluentFormCheckBoxBorderRadiusTabletWidth = `${fluentFormCheckBoxBorderRadiusTablet?.top}${fluentFormCheckBoxBorderRadiusUnits?.Tablet} ${fluentFormCheckBoxBorderRadiusTablet?.right}${fluentFormCheckBoxBorderRadiusUnits?.Tablet} ${fluentFormCheckBoxBorderRadiusTablet?.bottom}${fluentFormCheckBoxBorderRadiusUnits?.Tablet} ${fluentFormCheckBoxBorderRadiusTablet?.left}${fluentFormCheckBoxBorderRadiusUnits?.Tablet}`;
    const fluentFormCheckBoxBorderRadiusMobileWidth = `${fluentFormCheckBoxBorderRadiusMobile?.top}${fluentFormCheckBoxBorderRadiusUnits?.Mobile} ${fluentFormCheckBoxBorderRadiusMobile?.right}${fluentFormCheckBoxBorderRadiusUnits?.Mobile} ${fluentFormCheckBoxBorderRadiusMobile?.bottom}${fluentFormCheckBoxBorderRadiusUnits?.Mobile} ${fluentFormCheckBoxBorderRadiusMobile?.left}${fluentFormCheckBoxBorderRadiusUnits?.Mobile}`;

    /** Default padding for Section Break Title */
    const fluentFormSectionBreakTitleDesktopPadding = `${fluentFormSectionBreakTitlePaddingDesktop?.top}${fluentFormSectionBreakTitlePaddingUnits?.Desktop} ${fluentFormSectionBreakTitlePaddingDesktop?.right}${fluentFormSectionBreakTitlePaddingUnits?.Desktop} ${fluentFormSectionBreakTitlePaddingDesktop?.bottom}${fluentFormSectionBreakTitlePaddingUnits?.Desktop} ${fluentFormSectionBreakTitlePaddingDesktop?.left}${fluentFormSectionBreakTitlePaddingUnits?.Desktop}`;
    const fluentFormSectionBreakTitleTabletPadding = `${fluentFormSectionBreakTitlePaddingTablet?.top}${fluentFormSectionBreakTitlePaddingUnits?.Tablet} ${fluentFormSectionBreakTitlePaddingTablet?.right}${fluentFormSectionBreakTitlePaddingUnits?.Tablet} ${fluentFormSectionBreakTitlePaddingTablet?.bottom}${fluentFormSectionBreakTitlePaddingUnits?.Tablet} ${fluentFormSectionBreakTitlePaddingTablet?.left}${fluentFormSectionBreakTitlePaddingUnits?.Tablet}`;
    const fluentFormSectionBreakTitleMobilePadding = `${fluentFormSectionBreakTitlePaddingMobile?.top}${fluentFormSectionBreakTitlePaddingUnits?.Mobile} ${fluentFormSectionBreakTitlePaddingMobile?.right}${fluentFormSectionBreakTitlePaddingUnits?.Mobile} ${fluentFormSectionBreakTitlePaddingMobile?.bottom}${fluentFormSectionBreakTitlePaddingUnits?.Mobile} ${fluentFormSectionBreakTitlePaddingMobile?.left}${fluentFormSectionBreakTitlePaddingUnits?.Mobile}`;

    const fluentFormSectionBreakTitleDesktopMargin = `${fluentFormSectionBreakTitleMarginDesktop?.top}${fluentFormSectionBreakTitleMarginUnits?.Desktop} ${fluentFormSectionBreakTitleMarginDesktop?.right}${fluentFormSectionBreakTitleMarginUnits?.Desktop} ${fluentFormSectionBreakTitleMarginDesktop?.bottom}${fluentFormSectionBreakTitleMarginUnits?.Desktop} ${fluentFormSectionBreakTitleMarginDesktop?.left}${fluentFormSectionBreakTitleMarginUnits?.Desktop}`;
    const fluentFormSectionBreakTitleTabletMargin = `${fluentFormSectionBreakTitleMarginTablet?.top}${fluentFormSectionBreakTitleMarginUnits?.Tablet} ${fluentFormSectionBreakTitleMarginTablet?.right}${fluentFormSectionBreakTitleMarginUnits?.Tablet} ${fluentFormSectionBreakTitleMarginTablet?.bottom}${fluentFormSectionBreakTitleMarginUnits?.Tablet} ${fluentFormSectionBreakTitleMarginTablet?.left}${fluentFormSectionBreakTitleMarginUnits?.Tablet}`;
    const fluentFormSectionBreakTitleMobileMargin = `${fluentFormSectionBreakTitleMarginMobile?.top}${fluentFormSectionBreakTitleMarginUnits?.Mobile} ${fluentFormSectionBreakTitleMarginMobile?.right}${fluentFormSectionBreakTitleMarginUnits?.Mobile} ${fluentFormSectionBreakTitleMarginMobile?.bottom}${fluentFormSectionBreakTitleMarginUnits?.Mobile} ${fluentFormSectionBreakTitleMarginMobile?.left}${fluentFormSectionBreakTitleMarginUnits?.Mobile}`;

    /** Default padding for Section Break Description */
    const fluentFormSectionBreakDescDesktopPadding = `${fluentFormSectionBreakDescPaddingDesktop?.top}${fluentFormSectionBreakDescPaddingUnits?.Desktop} ${fluentFormSectionBreakDescPaddingDesktop?.right}${fluentFormSectionBreakDescPaddingUnits?.Desktop} ${fluentFormSectionBreakDescPaddingDesktop?.bottom}${fluentFormSectionBreakDescPaddingUnits?.Desktop} ${fluentFormSectionBreakDescPaddingDesktop?.left}${fluentFormSectionBreakDescPaddingUnits?.Desktop}`;
    const fluentFormSectionBreakDescTabletPadding = `${fluentFormSectionBreakDescPaddingTablet?.top}${fluentFormSectionBreakDescPaddingUnits?.Tablet} ${fluentFormSectionBreakDescPaddingTablet?.right}${fluentFormSectionBreakDescPaddingUnits?.Tablet} ${fluentFormSectionBreakDescPaddingTablet?.bottom}${fluentFormSectionBreakDescPaddingUnits?.Tablet} ${fluentFormSectionBreakDescPaddingTablet?.left}${fluentFormSectionBreakDescPaddingUnits?.Tablet}`;
    const fluentFormSectionBreakDescMobilePadding = `${fluentFormSectionBreakDescPaddingMobile?.top}${fluentFormSectionBreakDescPaddingUnits?.Mobile} ${fluentFormSectionBreakDescPaddingMobile?.right}${fluentFormSectionBreakDescPaddingUnits?.Mobile} ${fluentFormSectionBreakDescPaddingMobile?.bottom}${fluentFormSectionBreakDescPaddingUnits?.Mobile} ${fluentFormSectionBreakDescPaddingMobile?.left}${fluentFormSectionBreakDescPaddingUnits?.Mobile}`;

    const fluentFormSectionBreakDescDesktopMargin = `${fluentFormSectionBreakDescMarginDesktop?.top}${fluentFormSectionBreakDescMarginUnits?.Desktop} ${fluentFormSectionBreakDescMarginDesktop?.right}${fluentFormSectionBreakDescMarginUnits?.Desktop} ${fluentFormSectionBreakDescMarginDesktop?.bottom}${fluentFormSectionBreakDescMarginUnits?.Desktop} ${fluentFormSectionBreakDescMarginDesktop?.left}${fluentFormSectionBreakDescMarginUnits?.Desktop}`;
    const fluentFormSectionBreakDescTabletMargin = `${fluentFormSectionBreakDescMarginTablet?.top}${fluentFormSectionBreakDescMarginUnits?.Tablet} ${fluentFormSectionBreakDescMarginTablet?.right}${fluentFormSectionBreakDescMarginUnits?.Tablet} ${fluentFormSectionBreakDescMarginTablet?.bottom}${fluentFormSectionBreakDescMarginUnits?.Tablet} ${fluentFormSectionBreakDescMarginTablet?.left}${fluentFormSectionBreakDescMarginUnits?.Tablet}`;
    const fluentFormSectionBreakDescMobileMargin = `${fluentFormSectionBreakDescMarginMobile?.top}${fluentFormSectionBreakDescMarginUnits?.Mobile} ${fluentFormSectionBreakDescMarginMobile?.right}${fluentFormSectionBreakDescMarginUnits?.Mobile} ${fluentFormSectionBreakDescMarginMobile?.bottom}${fluentFormSectionBreakDescMarginUnits?.Mobile} ${fluentFormSectionBreakDescMarginMobile?.left}${fluentFormSectionBreakDescMarginUnits?.Mobile}`;

    /** Default padding for HTML */
    const fluentFormHtmlDesktopPadding = `${fluentFormHtmlPaddingDesktop?.top}${fluentFormHtmlPaddingUnits?.Desktop} ${fluentFormHtmlPaddingDesktop?.right}${fluentFormHtmlPaddingUnits?.Desktop} ${fluentFormHtmlPaddingDesktop?.bottom}${fluentFormHtmlPaddingUnits?.Desktop} ${fluentFormHtmlPaddingDesktop?.left}${fluentFormHtmlPaddingUnits?.Desktop}`;
    const fluentFormHtmlTabletPadding = `${fluentFormHtmlPaddingTablet?.top}${fluentFormHtmlPaddingUnits?.Tablet} ${fluentFormHtmlPaddingTablet?.right}${fluentFormHtmlPaddingUnits?.Tablet} ${fluentFormHtmlPaddingTablet?.bottom}${fluentFormHtmlPaddingUnits?.Tablet} ${fluentFormHtmlPaddingTablet?.left}${fluentFormHtmlPaddingUnits?.Tablet}`;
    const fluentFormHtmlMobilePadding = `${fluentFormHtmlPaddingMobile?.top}${fluentFormHtmlPaddingUnits?.Mobile} ${fluentFormHtmlPaddingMobile?.right}${fluentFormHtmlPaddingUnits?.Mobile} ${fluentFormHtmlPaddingMobile?.bottom}${fluentFormHtmlPaddingUnits?.Mobile} ${fluentFormHtmlPaddingMobile?.left}${fluentFormHtmlPaddingUnits?.Mobile}`;

    const fluentFormHtmlDesktopMargin = `${fluentFormHtmlMarginDesktop?.top}${fluentFormHtmlMarginUnits?.Desktop} ${fluentFormHtmlMarginDesktop?.right}${fluentFormHtmlMarginUnits?.Desktop} ${fluentFormHtmlMarginDesktop?.bottom}${fluentFormHtmlMarginUnits?.Desktop} ${fluentFormHtmlMarginDesktop?.left}${fluentFormHtmlMarginUnits?.Desktop}`;
    const fluentFormHtmlTabletMargin = `${fluentFormHtmlMarginTablet?.top}${fluentFormHtmlMarginUnits?.Tablet} ${fluentFormHtmlMarginTablet?.right}${fluentFormHtmlMarginUnits?.Tablet} ${fluentFormHtmlMarginTablet?.bottom}${fluentFormHtmlMarginUnits?.Tablet} ${fluentFormHtmlMarginTablet?.left}${fluentFormHtmlMarginUnits?.Tablet}`;
    const fluentFormHtmlMobileMargin = `${fluentFormHtmlMarginMobile?.top}${fluentFormHtmlMarginUnits?.Mobile} ${fluentFormHtmlMarginMobile?.right}${fluentFormHtmlMarginUnits?.Mobile} ${fluentFormHtmlMarginMobile?.bottom}${fluentFormHtmlMarginUnits?.Mobile} ${fluentFormHtmlMarginMobile?.left}${fluentFormHtmlMarginUnits?.Mobile}`;

    /** Default padding for Submit */
    const fluentFormSubmitDesktopPadding = `${fluentFormSubmitPaddingDesktop?.top}${fluentFormSubmitPaddingUnits?.Desktop} ${fluentFormSubmitPaddingDesktop?.right}${fluentFormSubmitPaddingUnits?.Desktop} ${fluentFormSubmitPaddingDesktop?.bottom}${fluentFormSubmitPaddingUnits?.Desktop} ${fluentFormSubmitPaddingDesktop?.left}${fluentFormSubmitPaddingUnits?.Desktop}`;
    const fluentFormSubmitTabletPadding = `${fluentFormSubmitPaddingTablet?.top}${fluentFormSubmitPaddingUnits?.Tablet} ${fluentFormSubmitPaddingTablet?.right}${fluentFormSubmitPaddingUnits?.Tablet} ${fluentFormSubmitPaddingTablet?.bottom}${fluentFormSubmitPaddingUnits?.Tablet} ${fluentFormSubmitPaddingTablet?.left}${fluentFormSubmitPaddingUnits?.Tablet}`;
    const fluentFormSubmitMobilePadding = `${fluentFormSubmitPaddingMobile?.top}${fluentFormSubmitPaddingUnits?.Mobile} ${fluentFormSubmitPaddingMobile?.right}${fluentFormSubmitPaddingUnits?.Mobile} ${fluentFormSubmitPaddingMobile?.bottom}${fluentFormSubmitPaddingUnits?.Mobile} ${fluentFormSubmitPaddingMobile?.left}${fluentFormSubmitPaddingUnits?.Mobile}`;

    const fluentFormSubmitDesktopMargin = `${fluentFormSubmitMarginDesktop?.top}${fluentFormSubmitMarginUnits?.Desktop} ${fluentFormSubmitMarginDesktop?.right}${fluentFormSubmitMarginUnits?.Desktop} ${fluentFormSubmitMarginDesktop?.bottom}${fluentFormSubmitMarginUnits?.Desktop} ${fluentFormSubmitMarginDesktop?.left}${fluentFormSubmitMarginUnits?.Desktop}`;
    const fluentFormSubmitTabletMargin = `${fluentFormSubmitMarginTablet?.top}${fluentFormSubmitMarginUnits?.Tablet} ${fluentFormSubmitMarginTablet?.right}${fluentFormSubmitMarginUnits?.Tablet} ${fluentFormSubmitMarginTablet?.bottom}${fluentFormSubmitMarginUnits?.Tablet} ${fluentFormSubmitMarginTablet?.left}${fluentFormSubmitMarginUnits?.Tablet}`;
    const fluentFormSubmitMobileMargin = `${fluentFormSubmitMarginMobile?.top}${fluentFormSubmitMarginUnits?.Mobile} ${fluentFormSubmitMarginMobile?.right}${fluentFormSubmitMarginUnits?.Mobile} ${fluentFormSubmitMarginMobile?.bottom}${fluentFormSubmitMarginUnits?.Mobile} ${fluentFormSubmitMarginMobile?.left}${fluentFormSubmitMarginUnits?.Mobile}`;

    /** Default border for Submit */
    const fluentFormSubmitDesktopBorderWidth = `${fluentFormSubmitBorderDesktop?.top}${fluentFormSubmitBorderUnits?.Desktop} ${fluentFormSubmitBorderDesktop?.right}${fluentFormSubmitBorderUnits?.Desktop} ${fluentFormSubmitBorderDesktop?.bottom}${fluentFormSubmitBorderUnits?.Desktop} ${fluentFormSubmitBorderDesktop?.left}${fluentFormSubmitBorderUnits?.Desktop}`;
    const fluentFormSubmitTabletBorderWidth = `${fluentFormSubmitBorderTablet?.top}${fluentFormSubmitBorderUnits?.Tablet} ${fluentFormSubmitBorderTablet?.right}${fluentFormSubmitBorderUnits?.Tablet} ${fluentFormSubmitBorderTablet?.bottom}${fluentFormSubmitBorderUnits?.Tablet} ${fluentFormSubmitBorderTablet?.left}${fluentFormSubmitBorderUnits?.Tablet}`;
    const fluentFormSubmitMobileBorderWidth = `${fluentFormSubmitBorderMobile?.top}${fluentFormSubmitBorderUnits?.Mobile} ${fluentFormSubmitBorderMobile?.right}${fluentFormSubmitBorderUnits?.Mobile} ${fluentFormSubmitBorderMobile?.bottom}${fluentFormSubmitBorderUnits?.Mobile} ${fluentFormSubmitBorderMobile?.left}${fluentFormSubmitBorderUnits?.Mobile}`;

    /** Default border radius for Submit */
    const fluentFormSubmitDesktopBorderRadiusWidth = `${fluentFormSubmitBorderRadiusDesktop?.top}${fluentFormSubmitBorderRadiusUnits?.Desktop} ${fluentFormSubmitBorderRadiusDesktop?.right}${fluentFormSubmitBorderRadiusUnits?.Desktop} ${fluentFormSubmitBorderRadiusDesktop?.bottom}${fluentFormSubmitBorderRadiusUnits?.Desktop} ${fluentFormSubmitBorderRadiusDesktop?.left}${fluentFormSubmitBorderRadiusUnits?.Desktop}`;
    const fluentFormSubmitTabletBorderRadiusWidth = `${fluentFormSubmitBorderRadiusTablet?.top}${fluentFormSubmitBorderRadiusUnits?.Tablet} ${fluentFormSubmitBorderRadiusTablet?.right}${fluentFormSubmitBorderRadiusUnits?.Tablet} ${fluentFormSubmitBorderRadiusTablet?.bottom}${fluentFormSubmitBorderRadiusUnits?.Tablet} ${fluentFormSubmitBorderRadiusTablet?.left}${fluentFormSubmitBorderRadiusUnits?.Tablet}`;
    const fluentFormSubmitMobileBorderRadiusWidth = `${fluentFormSubmitBorderRadiusMobile?.top}${fluentFormSubmitBorderRadiusUnits?.Mobile} ${fluentFormSubmitBorderRadiusUnits?.Mobile} ${fluentFormSubmitBorderRadiusDesktop?.bottom}${fluentFormSubmitBorderRadiusUnits?.Mobile} ${fluentFormSubmitBorderRadiusDesktop?.left}${fluentFormSubmitBorderRadiusUnits?.Mobile}`;

    /** Default border for Success */
    const fluentFormSuccessDesktopBorderWidth = `${fluentFormSuccessBorderDesktop?.top}${fluentFormSuccessBorderUnits?.Desktop} ${fluentFormSuccessBorderDesktop?.right}${fluentFormSuccessBorderUnits?.Desktop} ${fluentFormSuccessBorderDesktop?.bottom}${fluentFormSuccessBorderUnits?.Desktop} ${fluentFormSuccessBorderDesktop?.left}${fluentFormSuccessBorderUnits?.Desktop}`;
    const fluentFormSuccessTabletBorderWidth = `${fluentFormSuccessBorderTablet?.top}${fluentFormSuccessBorderUnits?.Tablet} ${fluentFormSuccessBorderTablet?.right}${fluentFormSuccessBorderUnits?.Tablet} ${fluentFormSuccessBorderTablet?.bottom}${fluentFormSuccessBorderUnits?.Tablet} ${fluentFormSuccessBorderTablet?.left}${fluentFormSuccessBorderUnits?.Tablet}`;
    const fluentFormSuccessMobileBorderWidth = `${fluentFormSuccessBorderMobile?.top}${fluentFormSuccessBorderUnits?.Mobile} ${fluentFormSuccessBorderMobile?.right}${fluentFormSuccessBorderUnits?.Mobile} ${fluentFormSuccessBorderMobile?.bottom}${fluentFormSuccessBorderUnits?.Mobile} ${fluentFormSuccessBorderMobile?.left}${fluentFormSuccessBorderUnits?.Mobile}`;

    /** Default border radius for Success */
    const fluentFormSuccessDesktopBorderRadiusWidth = `${fluentFormSuccessBorderRadiusDesktop?.top}${fluentFormSuccessBorderRadiusUnits?.Desktop} ${fluentFormSuccessBorderRadiusDesktop?.right}${fluentFormSuccessBorderRadiusUnits?.Desktop} ${fluentFormSuccessBorderRadiusDesktop?.bottom}${fluentFormSuccessBorderRadiusUnits?.Desktop} ${fluentFormSuccessBorderRadiusDesktop?.left}${fluentFormSuccessBorderRadiusUnits?.Desktop}`;
    const fluentFormSuccessTabletBorderRadiusWidth = `${fluentFormSuccessBorderRadiusTablet?.top}${fluentFormSuccessBorderRadiusUnits?.Tablet} ${fluentFormSuccessBorderRadiusTablet?.right}${fluentFormSuccessBorderRadiusUnits?.Tablet} ${fluentFormSuccessBorderRadiusTablet?.bottom}${fluentFormSuccessBorderRadiusUnits?.Tablet} ${fluentFormSuccessBorderRadiusTablet?.left}${fluentFormSuccessBorderRadiusUnits?.Tablet}`;
    const fluentFormSuccessMobileBorderRadiusWidth = `${fluentFormSuccessBorderRadiusMobile?.top}${fluentFormSuccessBorderRadiusUnits?.Mobile} ${fluentFormSuccessBorderRadiusUnits?.Mobile} ${fluentFormSuccessBorderRadiusDesktop?.bottom}${fluentFormSuccessBorderRadiusUnits?.Mobile} ${fluentFormSuccessBorderRadiusDesktop?.left}${fluentFormSuccessBorderRadiusUnits?.Mobile}`;

    /** Default padding for Error */
    const fluentFormErrorDesktopPadding = `${fluentFormErrorPaddingDesktop?.top}${fluentFormErrorPaddingUnits?.Desktop} ${fluentFormErrorPaddingDesktop?.right}${fluentFormErrorPaddingUnits?.Desktop} ${fluentFormErrorPaddingDesktop?.bottom}${fluentFormErrorPaddingUnits?.Desktop} ${fluentFormErrorPaddingDesktop?.left}${fluentFormErrorPaddingUnits?.Desktop}`;
    const fluentFormErrorTabletPadding = `${fluentFormErrorPaddingTablet?.top}${fluentFormErrorPaddingUnits?.Tablet} ${fluentFormErrorPaddingTablet?.right}${fluentFormErrorPaddingUnits?.Tablet} ${fluentFormErrorPaddingTablet?.bottom}${fluentFormErrorPaddingUnits?.Tablet} ${fluentFormErrorPaddingTablet?.left}${fluentFormErrorPaddingUnits?.Tablet}`;
    const fluentFormErrorMobilePadding = `${fluentFormErrorPaddingMobile?.top}${fluentFormErrorPaddingUnits?.Mobile} ${fluentFormErrorPaddingMobile?.right}${fluentFormErrorPaddingUnits?.Mobile} ${fluentFormErrorPaddingMobile?.bottom}${fluentFormErrorPaddingUnits?.Mobile} ${fluentFormErrorPaddingMobile?.left}${fluentFormErrorPaddingUnits?.Mobile}`;

    /** Default margin for Error */
    const fluentFormErrorDesktopMargin = `${fluentFormErrorMarginDesktop?.top}${fluentFormErrorMarginUnits?.Desktop} ${fluentFormErrorMarginDesktop?.right}${fluentFormErrorMarginUnits?.Desktop} ${fluentFormErrorMarginDesktop?.bottom}${fluentFormErrorMarginUnits?.Desktop} ${fluentFormErrorMarginDesktop?.left}${fluentFormErrorMarginUnits?.Desktop}`;
    const fluentFormErrorTabletMargin = `${fluentFormErrorMarginTablet?.top}${fluentFormErrorMarginUnits?.Tablet} ${fluentFormErrorMarginTablet?.right}${fluentFormErrorMarginUnits?.Tablet} ${fluentFormErrorMarginTablet?.bottom}${fluentFormErrorMarginUnits?.Tablet} ${fluentFormErrorMarginTablet?.left}${fluentFormErrorMarginUnits?.Tablet}`;
    const fluentFormErrorMobileMargin = `${fluentFormErrorMarginMobile?.top}${fluentFormErrorMarginUnits?.Mobile} ${fluentFormErrorMarginMobile?.right}${fluentFormErrorMarginUnits?.Mobile} ${fluentFormErrorMarginMobile?.bottom}${fluentFormErrorMarginUnits?.Mobile} ${fluentFormErrorMarginMobile?.left}${fluentFormErrorMarginUnits?.Mobile}`;

    /** Default padding for desktop (using desktop_padding) */
    const DesktopPadding    = `${fluentFormGlobalPaddingDesktop?.top}${fluentFormGlobalPaddingUnits?.Desktop} ${fluentFormGlobalPaddingDesktop?.right}${fluentFormGlobalPaddingUnits?.Desktop} ${fluentFormGlobalPaddingDesktop?.bottom}${fluentFormGlobalPaddingUnits?.Desktop} ${fluentFormGlobalPaddingDesktop?.left}${fluentFormGlobalPaddingUnits?.Desktop}`;
    const TabletPadding     = `${fluentFormGlobalPaddingTablet?.top}${fluentFormGlobalPaddingUnits?.Tablet} ${fluentFormGlobalPaddingTablet?.right}${fluentFormGlobalPaddingUnits?.Tablet} ${fluentFormGlobalPaddingTablet?.bottom}${fluentFormGlobalPaddingUnits?.Tablet} ${fluentFormGlobalPaddingTablet?.left}${fluentFormGlobalPaddingUnits?.Tablet}`;
    const MobilePadding     = `${fluentFormGlobalPaddingMobile?.top}${fluentFormGlobalPaddingUnits?.Mobile} ${fluentFormGlobalPaddingMobile?.right}${fluentFormGlobalPaddingUnits?.Mobile} ${fluentFormGlobalPaddingMobile?.bottom}${fluentFormGlobalPaddingUnits?.Mobile} ${fluentFormGlobalPaddingMobile?.left}${fluentFormGlobalPaddingUnits?.Mobile}`;

    const DesktopMargin = `${fluentFormGlobalMarginDesktop?.top}${fluentFormGlobalMarginUnits?.Desktop} ${fluentFormGlobalMarginDesktop?.right}${fluentFormGlobalMarginUnits?.Desktop} ${fluentFormGlobalMarginDesktop?.bottom}${fluentFormGlobalMarginUnits?.Desktop} ${fluentFormGlobalMarginDesktop?.left}${fluentFormGlobalMarginUnits?.Desktop}`;
    const TabletMargin = `${fluentFormGlobalMarginTablet?.top}${fluentFormGlobalMarginUnits?.Tablet} ${fluentFormGlobalMarginTablet?.right}${fluentFormGlobalMarginUnits?.Tablet} ${fluentFormGlobalMarginTablet?.bottom}${fluentFormGlobalMarginUnits?.Tablet} ${fluentFormGlobalMarginTablet?.left}${fluentFormGlobalMarginUnits?.Tablet}`;
    const MobileMargin = `${fluentFormGlobalMarginMobile?.top}${fluentFormGlobalMarginUnits?.Mobile} ${fluentFormGlobalMarginMobile?.right}${fluentFormGlobalMarginUnits?.Mobile} ${fluentFormGlobalMarginMobile?.bottom}${fluentFormGlobalMarginUnits?.Mobile} ${fluentFormGlobalMarginMobile?.left}${fluentFormGlobalMarginUnits?.Mobile}`;

    const BorderDesktopWidth = `${fluentFormGlobalBorderDesktop?.top}${fluentFormGlobalBorderUnits?.Desktop} ${fluentFormGlobalBorderDesktop?.right}${fluentFormGlobalBorderUnits?.Desktop} ${fluentFormGlobalBorderDesktop?.bottom}${fluentFormGlobalBorderUnits?.Desktop} ${fluentFormGlobalBorderDesktop?.left}${fluentFormGlobalBorderUnits?.Desktop}`;
    const BorderTabletWidth = `${fluentFormGlobalBorderTablet?.top}${fluentFormGlobalBorderUnits?.Tablet} ${fluentFormGlobalBorderTablet?.right}${fluentFormGlobalBorderUnits?.Tablet} ${fluentFormGlobalBorderTablet?.bottom}${fluentFormGlobalBorderUnits?.Tablet} ${fluentFormGlobalBorderTablet?.left}${fluentFormGlobalBorderUnits?.Tablet}`;
    const BorderMobileWidth = `${fluentFormGlobalBorderMobile?.top}${fluentFormGlobalBorderUnits?.Mobile} ${fluentFormGlobalBorderMobile?.right}${fluentFormGlobalBorderUnits?.Mobile} ${fluentFormGlobalBorderMobile?.bottom}${fluentFormGlobalBorderUnits?.Mobile} ${fluentFormGlobalBorderMobile?.left}${fluentFormGlobalBorderUnits?.Mobile}`;

    const BorderRadiusDesktopWidth = `${fluentFormGlobalBorderRadiusDesktop?.top}${fluentFormGlobalBorderRadiusUnits?.Desktop} ${fluentFormGlobalBorderRadiusDesktop?.right}${fluentFormGlobalBorderRadiusUnits?.Desktop} ${fluentFormGlobalBorderRadiusDesktop?.bottom}${fluentFormGlobalBorderRadiusUnits?.Desktop} ${fluentFormGlobalBorderRadiusDesktop?.left}${fluentFormGlobalBorderRadiusUnits?.Desktop}`;
    const BorderRadiusTabletWidth = `${fluentFormGlobalBorderRadiusTablet?.top}${fluentFormGlobalBorderRadiusUnits?.Tablet} ${fluentFormGlobalBorderRadiusTablet?.right}${fluentFormGlobalBorderRadiusUnits?.Tablet} ${fluentFormGlobalBorderRadiusTablet?.bottom}${fluentFormGlobalBorderRadiusUnits?.Tablet} ${fluentFormGlobalBorderRadiusTablet?.left}${fluentFormGlobalBorderRadiusUnits?.Tablet}`;
    const BorderRadiusMobileWidth = `${fluentFormGlobalBorderRadiusMobile?.top}${fluentFormGlobalBorderRadiusUnits?.Mobile} ${fluentFormGlobalBorderRadiusMobile?.right}${fluentFormGlobalBorderRadiusUnits?.Mobile} ${fluentFormGlobalBorderRadiusMobile?.bottom}${fluentFormGlobalBorderRadiusUnits?.Mobile} ${fluentFormGlobalBorderRadiusMobile?.left}${fluentFormGlobalBorderRadiusUnits?.Mobile}`;

    const fluentFormBlockStyle = `

        .${blockID}.fb-fluent-form-wrapper {
            ${fluentFormGlobalBgColor !== undefined ? `background-color: ${fluentFormGlobalBgColor};` : ''}
            ${DesktopPadding && fluentFormGlobalPaddingDesktop?.top ? `padding: ${DesktopPadding};` : ''}
            ${DesktopMargin && fluentFormGlobalMarginDesktop?.top ? `margin: ${DesktopMargin};` : ''} 
            ${fluentFormGlobalBorder ? `border: ${fluentFormGlobalBorder};` : ''}
            ${BorderDesktopWidth && fluentFormGlobalBorderDesktop?.top ? `border-width: ${BorderDesktopWidth};` : ''}
            ${BorderRadiusDesktopWidth && fluentFormGlobalBorderRadiusDesktop?.top ? `border-radius: ${BorderRadiusDesktopWidth} !important;` : ''}
            ${fluentFormGlobalBorderColor !== undefined ? `border-color: ${fluentFormGlobalBorderColor};` : ''}
            ${fluentFormPositionType === 'default' ? `position: relative;` : ''}
            ${fluentFormPositionType !== 'default' && fluentFormPositionType !== 'relative' ? `width: 100%;` : ''}
            ${fluentFormPositionType !== 'default' ? `position: ${fluentFormPositionType};` : ''}
            ${fluentFormPositionType !== 'default' && fluentFormPositionType !== 'relative' && fluentFormHZOrientationType === 'left' && fluentFormHZLeftOffset?.Desktop !== undefined ? `left: ${fluentFormHZLeftOffset?.Desktop}${fluentFormHZLeftOffsetUnits?.Desktop};` : ''}
            ${fluentFormPositionType !== 'default' && fluentFormPositionType !== 'relative' && fluentFormHZOrientationType === 'right' && fluentFormHZRightOffset?.Desktop !== undefined ? `right: ${fluentFormHZRightOffset?.Desktop}${fluentFormHZRightOffsetUnits?.Desktop};` : ''}
            ${fluentFormPositionType !== 'default' && fluentFormPositionType !== 'relative' && fluentFormVROrientationType === 'top' && fluentFormVRTopOffset?.Desktop !== undefined ? `top: ${fluentFormVRTopOffset?.Desktop}${fluentFormVRTopOffsetUnits?.Desktop};` : ''}
            ${fluentFormPositionType !== 'default' && fluentFormPositionType !== 'relative' && fluentFormVROrientationType === 'bottom' && fluentFormVRBottomOffset?.Desktop !== undefined ? `bottom: ${fluentFormVRBottomOffset?.Desktop}${fluentFormVRBottomOffsetUnits?.Desktop};` : ''}
            ${fluentFormGlobalZIndex?.Desktop ? `z-index: ${fluentFormGlobalZIndex?.Desktop};` : ''}
            ${fluentFormOverflow !== 'default' ? `overflow: ${fluentFormOverflow};` : ''}
            ${fluentFormGlobalBoxShadowCssValue ? `box-shadow: ${fluentFormGlobalBoxShadowCssValue};` : ''} 
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-fluent-form-wrapper:hover {
            ${fluentFormGlobalBgHoverColor !== undefined ? `background-color: ${fluentFormGlobalBgHoverColor};` : ''}
            ${fluentFormGlobalBorderHoverColor !== undefined ? `border-color: ${fluentFormGlobalBorderHoverColor};` : ''}
            ${fluentFormGlobalBoxShadowHoverCssValue ? `box-shadow: ${fluentFormGlobalBoxShadowHoverCssValue};` : ''} 
        }

        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-label .fb-fluent-form-rendered .ff-el-group label:not(.ff-el-form-check-label),
        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-label .fb-fluent-form-rendered .ff-el-group .ff-el-input--label{
            display: none;
        }

        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-error-message .error.text-danger {
            display: none;
        }

        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-webkit-input-placeholder,
        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-webkit-input-placeholder {
            opacity: 0;
            visibility: hidden;
        }

        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input::-moz-placeholder,
        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea::-moz-placeholder {
            opacity: 0;
            visibility: hidden;
        }

        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-ms-input-placeholder,
        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-ms-input-placeholder {
            opacity: 0;
            visibility: hidden;
        }

        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder input:-moz-placeholder,
        .${blockID}.fb-fluent-form-wrapper.fb-fluent-form-hide-placeholder textarea:-moz-placeholder {
            opacity: 0;
            visibility: hidden;
        }

        .${blockID}.fb-fluent-form-wrapper .ff-el-group {
            ${fluentFormSpacingSize ? `margin-bottom: ${fluentFormSpacingSize?.Desktop}${fluentFormSpacingUnits?.Desktop};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-group label {
            ${fluentFormLabelColor ? `color: ${fluentFormLabelColor};` : ""}

            ${fluentFormLabelGlobalTypoSwitcher?.fontFamily === true && fluentFormLabelGlobalTypographyData?.fontFamily ? `font-family: ${fluentFormLabelGlobalTypographyData?.fontFamily};` : ''}
            ${fluentFormLabelGlobalTypoSwitcher?.fontSize === true && fluentFormLabelGlobalTypographyData?.fontSize ? `font-size: ${fluentFormLabelGlobalTypographyData?.fontSize};` : ''}
            ${fluentFormLabelGlobalTypoSwitcher?.fontWeight === true && fluentFormLabelGlobalTypographyData?.fontWeight ? `font-weight: ${fluentFormLabelGlobalTypographyData?.fontWeight};` : ''}
            ${fluentFormLabelGlobalTypoSwitcher?.fontStyle === true && fluentFormLabelGlobalTypographyData?.fontStyle ? `font-style: ${fluentFormLabelGlobalTypographyData?.fontStyle};` : ''}
            ${fluentFormLabelGlobalTypoSwitcher?.textTransform === true && fluentFormLabelGlobalTypographyData?.textTransform ? `text-transform: ${fluentFormLabelGlobalTypographyData?.textTransform};` : ''}
            ${fluentFormLabelGlobalTypoSwitcher?.textDecoration === true && fluentFormLabelGlobalTypographyData?.textDecoration ? `text-decoration: ${fluentFormLabelGlobalTypographyData?.textDecoration};` : ''}
            ${fluentFormLabelGlobalTypoSwitcher?.letterSpacing === true && fluentFormLabelGlobalTypographyData?.letterSpacing ? `letter-spacing: ${fluentFormLabelGlobalTypographyData?.letterSpacing};` : ''}
            ${fluentFormLabelGlobalTypoSwitcher?.lineHeight === true && fluentFormLabelGlobalTypographyData?.lineHeight ? `line-height: ${fluentFormLabelGlobalTypographyData?.lineHeight};` : ''}

            ${fluentFormLabelGlobalTypoSwitcher?.fontFamily === false && fluentFormLabelFontFamily && fluentFormLabelFontFamily !== 'Default' ? `font-family: ${fluentFormLabelFontFamily};` : ""}
            ${fluentFormLabelGlobalTypoSwitcher?.fontSize === false && fluentFormLabelFontSize?.Desktop && fluentFormLabelFontSizeUnits?.Desktop ? `font-size: ${fluentFormLabelFontSize?.Desktop}${fluentFormLabelFontSizeUnits?.Desktop};` : ''}
            ${fluentFormLabelGlobalTypoSwitcher?.fontWeight === false && fluentFormLabelFontWeight ? `font-weight: ${fluentFormLabelFontWeight};` : ""}
            ${fluentFormLabelGlobalTypoSwitcher?.fontStyle === false && fluentFormLabelFontStyle ? `font-style: ${fluentFormLabelFontStyle};` : ""}
            ${fluentFormLabelGlobalTypoSwitcher?.textTransform === false && fluentFormLabelTextTransform ? `text-transform: ${fluentFormLabelTextTransform};` : ""}
            ${fluentFormLabelGlobalTypoSwitcher?.textDecoration === false && fluentFormLabelTextDecoration ? `text-decoration: ${fluentFormLabelTextDecoration};` : ""}
            ${fluentFormLabelGlobalTypoSwitcher?.letterSpacing === false && fluentFormLabelLetterSpacing?.Desktop && fluentFormLabelLetterSpacingUnits?.Desktop ? `letter-spacing: ${fluentFormLabelLetterSpacing?.Desktop}${fluentFormLabelLetterSpacingUnits?.Desktop};` : ''}
            ${fluentFormLabelGlobalTypoSwitcher?.lineHeight === false && fluentFormLabelLineHeight?.Desktop && fluentFormLabelLineHeightUnits?.Desktop ? `line-height: ${fluentFormLabelLineHeight?.Desktop}${fluentFormLabelLineHeightUnits?.Desktop};` : ''}
            ${fluntFromLabelMarginDesktopWidth && fluntFromLabelMarginDesktop?.top? `margin: ${fluntFromLabelMarginDesktopWidth};` : ""}
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-group label:hover {
            ${fluentFormLabelHoverColor ? `color: ${fluentFormLabelHoverColor};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
        .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea, 
        .${blockID}.fb-fluent-form-wrapper .ff-el-group select {
            ${fluentFormInputBgColor ? `background-color: ${fluentFormInputBgColor};` : ""}
            ${fluentFormInputColor ? `color: ${fluentFormInputColor};` : ""}

            ${fluentFormInputGlobalTypoSwitcher?.fontFamily === true && fluentFormInputGlobalTypographyData?.fontFamily ? `font-family: ${fluentFormInputGlobalTypographyData?.fontFamily};` : ''}
            ${fluentFormInputGlobalTypoSwitcher?.fontSize === true && fluentFormInputGlobalTypographyData?.fontSize ? `font-size: ${fluentFormInputGlobalTypographyData?.fontSize};` : ''}
            ${fluentFormInputGlobalTypoSwitcher?.fontWeight === true && fluentFormInputGlobalTypographyData?.fontWeight ? `font-weight: ${fluentFormInputGlobalTypographyData?.fontWeight};` : ''}
            ${fluentFormInputGlobalTypoSwitcher?.fontStyle === true && fluentFormInputGlobalTypographyData?.fontStyle ? `font-style: ${fluentFormInputGlobalTypographyData?.fontStyle};` : ''}
            ${fluentFormInputGlobalTypoSwitcher?.textTransform === true && fluentFormInputGlobalTypographyData?.textTransform ? `text-transform: ${fluentFormInputGlobalTypographyData?.textTransform};` : ''}
            ${fluentFormInputGlobalTypoSwitcher?.textDecoration === true && fluentFormInputGlobalTypographyData?.textDecoration ? `text-decoration: ${fluentFormInputGlobalTypographyData?.textDecoration};` : ''}
            ${fluentFormInputGlobalTypoSwitcher?.letterSpacing === true && fluentFormInputGlobalTypographyData?.letterSpacing ? `letter-spacing: ${fluentFormInputGlobalTypographyData?.letterSpacing};` : ''}
            ${fluentFormInputGlobalTypoSwitcher?.lineHeight === true && fluentFormInputGlobalTypographyData?.lineHeight ? `line-height: ${fluentFormInputGlobalTypographyData?.lineHeight};` : ''}

            ${fluentFormInputGlobalTypoSwitcher?.fontFamily === false && fluentFormInputFontFamily && fluentFormInputFontFamily !== 'Default' ? `font-family: ${fluentFormInputFontFamily};` : ""}
            ${fluentFormInputGlobalTypoSwitcher?.fontSize === false && fluentFormInputFontSize?.Desktop && fluentFormInputFontSizeUnits?.Desktop ? `font-size: ${fluentFormInputFontSize?.Desktop}${fluentFormInputFontSizeUnits?.Desktop};` : ''}
            ${fluentFormInputGlobalTypoSwitcher?.fontWeight === false && fluentFormInputFontWeight ? `font-weight: ${fluentFormInputFontWeight};` : ""}
            ${fluentFormInputGlobalTypoSwitcher?.fontStyle === false && fluentFormInputFontStyle ? `font-style: ${fluentFormInputFontStyle};` : ""}
            ${fluentFormInputGlobalTypoSwitcher?.textTransform === false && fluentFormInputTextTransform ? `text-transform: ${fluentFormInputTextTransform};` : ""}
            ${fluentFormInputGlobalTypoSwitcher?.textDecoration === false && fluentFormInputTextDecoration ? `text-decoration: ${fluentFormInputTextDecoration};` : ""}
            ${fluentFormInputGlobalTypoSwitcher?.letterSpacing === false && fluentFormInputLetterSpacing?.Desktop && fluentFormInputLetterSpacingUnits?.Desktop ? `letter-spacing: ${fluentFormInputLetterSpacing?.Desktop}${fluentFormInputLetterSpacingUnits?.Desktop};` : ''}
            ${fluentFormInputGlobalTypoSwitcher?.lineHeight === false && fluentFormInputLineHeight?.Desktop && fluentFormInputLineHeightUnits?.Desktop ? `line-height: ${fluentFormInputLineHeight?.Desktop}${fluentFormInputLineHeightUnits?.Desktop};` : ''}
            ${fluentFormTextIndentSize ? `text-indent: ${fluentFormTextIndentSize?.Desktop}${fluentFormTextIndentSizeUnits?.Desktop};` : ""}
            ${fluentFormInputWidthSize ? `width: ${fluentFormInputWidthSize?.Desktop}${fluentFormInputWidthSizeUnits?.Desktop};` : ""}
            ${fluentFormInputHeightSize ? `height: ${fluentFormInputHeightSize?.Desktop}${fluentFormInputHeightSizeUnits?.Desktop};` : ""}
            ${fluentFormDesktopPadding && fluentFormPaddingDesktop?.top? `padding: ${fluentFormDesktopPadding};` : ""}
            ${fluentFormBorder ? `border: ${fluentFormBorder};` : ""}
            ${fluentFormBorderDesktopWidth && fluentFormBorderDesktop?.top ? `border-width: ${fluentFormBorderDesktopWidth};` : ""}
            ${fluentFormBorderColor ? `border-color: ${fluentFormBorderColor};` : ""}
            ${fluentFormBorderRadiusDesktopWidth && fluentFormBorderRadiusDesktop?.top ? `border-radius: ${fluentFormBorderRadiusDesktopWidth};` : ""}
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-fluent-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
        .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea:focus, 
        .${blockID}.fb-fluent-form-wrapper .ff-el-group select:focus {
            ${fluentFormFocusBorder ? `border: ${fluentFormFocusBorder};` : ""}
            ${fluentFormFocusBorderDesktopWidth && fluentFormFocusBorderDesktop?.top ? `border-width: ${fluentFormFocusBorderDesktopWidth};` : ""}
            ${fluentFormFocusBorderRadiusDesktopWidth && fluentFormFocusBorderRadiusDesktop?.top ? `border-radius: ${fluentFormFocusBorderRadiusDesktopWidth};` : ""}
            ${fluentFormInputFocusColor ? `border-color: ${fluentFormInputFocusColor};` : ""}
            box-shadow: none;
        }   
        .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea {
            ${fluentFormTextareaWidthSize ? `width: ${fluentFormTextareaWidthSize?.Desktop}${fluentFormTextareaWidthSizeUnits?.Desktop};` : ""}
            ${fluentFormTextareaHeightSize ? `height: ${fluentFormTextareaHeightSize?.Desktop}${fluentFormTextareaHeightSizeUnits?.Desktop};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper input::-webkit-input-placeholder,
        .${blockID}.fb-fluent-form-wrapper textarea::-webkit-input-placeholder {
            ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper input::-moz-placeholder,
        .${blockID}.fb-fluent-form-wrapper textarea::-moz-placeholder {
            ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper input:-ms-input-placeholder,
        .${blockID}.fb-fluent-form-wrapper textarea:-ms-input-placeholder {
            ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper input:-moz-placeholder,
        .${blockID}.fb-fluent-form-wrapper textarea:-moz-placeholder {
            ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper .ff-el-input--content input[type="checkbox"]{
            ${fluentFormRadioFontSize?.Desktop && fluentFormRadioFontSizeUnits?.Desktop ? `width: ${fluentFormRadioFontSize?.Desktop}${fluentFormRadioFontSizeUnits?.Desktop};` : ''}
            ${fluentFormRadioFontSize?.Desktop && fluentFormRadioFontSizeUnits?.Desktop ? `height: ${fluentFormRadioFontSize?.Desktop}${fluentFormRadioFontSizeUnits?.Desktop};` : ''}
            ${fluentFormRadioColor ? `background: ${fluentFormRadioColor};` : ""}
            ${fluentFormRadioBorderColor ? `border-color: ${fluentFormRadioBorderColor};` : ""}
            ${fluentFormRadioBorderWidth ? `border-width: ${fluentFormRadioBorderWidth?.Desktop}${fluentFormRadioBorderWidthUnits?.Desktop};` : ""}
            ${fluentFormCheckBoxBorderRadiusDesktopWidth && fluentFormCheckBoxBorderRadiusDesktop?.top? `border-radius: ${fluentFormCheckBoxBorderRadiusDesktopWidth};` : ""}
            position: relative;
            transition: all .3s ease-in-out;   
        } 
        .${blockID}.fb-fluent-form-wrapper .ff-el-input--content input[type="radio"] {
            ${fluentFormRadioFontSize?.Desktop && fluentFormRadioFontSizeUnits?.Desktop ? `width: ${fluentFormRadioFontSize?.Desktop}${fluentFormRadioFontSizeUnits?.Desktop};` : ''}
            ${fluentFormRadioFontSize?.Desktop && fluentFormRadioFontSizeUnits?.Desktop ? `height: ${fluentFormRadioFontSize?.Desktop}${fluentFormRadioFontSizeUnits?.Desktop};` : ''}
            ${fluentFormRadioColor ? `background: ${fluentFormRadioColor};` : ""}
            ${fluentFormRadioBorderColor ? `border-color: ${fluentFormRadioBorderColor};` : ""}
            ${fluentFormRadioBorderWidth ? `border-width: ${fluentFormRadioBorderWidth?.Desktop}${fluentFormRadioBorderWidthUnits?.Desktop};` : ""}
            ${fluentFormRadioBorderRadiusDesktopWidth && fluentFormRadioBorderRadiusDesktop?.top ? `border-radius: ${fluentFormRadioBorderRadiusDesktopWidth};` : ""}
            position: relative;
            transition: all .3s ease-in-out;   
        }
        .${blockID}.fb-fluent-form-wrapper input[type="checkbox"]:checked:before,
        .${blockID}.fb-fluent-form-wrapper input[type="radio"]:checked:before {
            ${fluentFormRadioCheckedColor ? `background: ${fluentFormRadioCheckedColor};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-form-check:not(:last-child) {
            ${fluentFormRadioCheckBoxItemSpacing ? `margin-bottom: ${fluentFormRadioCheckBoxItemSpacing?.Desktop}${fluentFormRadioCheckBoxItemSpacingUnits?.Desktop};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-section-break,
        .${blockID}.fb-fluent-form-wrapper .ff-el-section-break hr {
            text-align: ${fluentFormSectionBreakAlignment};
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title {
            ${fluentFormSectionBreakTitleColor ? `color: ${fluentFormSectionBreakTitleColor};` : ""}

            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.fontFamily === true && fluentFormSectionBreakTitleGlobalTypographyData?.fontFamily ? `font-family: ${fluentFormSectionBreakTitleGlobalTypographyData?.fontFamily};` : ''}
            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.fontSize === true && fluentFormSectionBreakTitleGlobalTypographyData?.fontSize ? `font-size: ${fluentFormSectionBreakTitleGlobalTypographyData?.fontSize};` : ''}
            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.fontWeight === true && fluentFormSectionBreakTitleGlobalTypographyData?.fontWeight ? `font-weight: ${fluentFormSectionBreakTitleGlobalTypographyData?.fontWeight};` : ''}
            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.fontStyle === true && fluentFormSectionBreakTitleGlobalTypographyData?.fontStyle ? `font-style: ${fluentFormSectionBreakTitleGlobalTypographyData?.fontStyle};` : ''}
            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.textTransform === true && fluentFormSectionBreakTitleGlobalTypographyData?.textTransform ? `text-transform: ${fluentFormSectionBreakTitleGlobalTypographyData?.textTransform};` : ''}
            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.textDecoration === true && fluentFormSectionBreakTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${fluentFormSectionBreakTitleGlobalTypographyData?.textDecoration};` : ''}
            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.letterSpacing === true && fluentFormSectionBreakTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${fluentFormSectionBreakTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.lineHeight === true && fluentFormSectionBreakTitleGlobalTypographyData?.lineHeight ? `line-height: ${fluentFormSectionBreakTitleGlobalTypographyData?.lineHeight};` : ''}

            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.fontFamily === false && fluentFormSectionBreakTitleFontFamily && fluentFormSectionBreakTitleFontFamily !== 'Default' ? `font-family: ${fluentFormSectionBreakTitleFontFamily};` : ""}
            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.fontSize === false && fluentFormSectionBreakTitleFontSize?.Desktop && fluentFormSectionBreakTitleFontSizeUnits?.Desktop ? `font-size: ${fluentFormSectionBreakTitleFontSize?.Desktop}${fluentFormSectionBreakTitleFontSizeUnits?.Desktop};` : ''}
            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.fontWeight === false && fluentFormSectionBreakTitleFontWeight ? `font-weight: ${fluentFormSectionBreakTitleFontWeight};` : ""}
            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.fontStyle === false && fluentFormSectionBreakTitleFontStyle ? `font-style: ${fluentFormSectionBreakTitleFontStyle};` : ""}
            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.textTransform === false && fluentFormSectionBreakTitleTextTransform ? `text-transform: ${fluentFormSectionBreakTitleTextTransform};` : ""}
            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.textDecoration === false && fluentFormSectionBreakTitleTextDecoration ? `text-decoration: ${fluentFormSectionBreakTitleTextDecoration};` : ""}
            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.letterSpacing === false && fluentFormSectionBreakTitleLetterSpacing?.Desktop && fluentFormSectionBreakTitleLetterSpacingUnits?.Desktop ? `letter-spacing: ${fluentFormSectionBreakTitleLetterSpacing?.Desktop}${fluentFormSectionBreakTitleLetterSpacingUnits?.Desktop};` : ''}
            ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.lineHeight === false && fluentFormSectionBreakTitleLineHeight?.Desktop && fluentFormSectionBreakTitleLineHeightUnits?.Desktop ? `line-height: ${fluentFormSectionBreakTitleLineHeight?.Desktop}${fluentFormSectionBreakTitleLineHeightUnits?.Desktop};` : ''}
            ${fluentFormSectionBreakTitleDesktopPadding && fluentFormSectionBreakTitlePaddingDesktop?.top? `padding: ${fluentFormSectionBreakTitleDesktopPadding};` : ""}
            ${fluentFormSectionBreakTitleDesktopMargin && fluentFormSectionBreakTitleMarginDesktop?.top? `margin: ${fluentFormSectionBreakTitleDesktopMargin};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title:hover {
            ${fluentFormSectionBreakTitleHoverColor ? `color: ${fluentFormSectionBreakTitleHoverColor};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk {
            ${fluentFormSectionBreakDescColor ? `color: ${fluentFormSectionBreakDescColor};` : ""}

            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.fontFamily === true && fluentFormSectionBreakDescGlobalTypographyData?.fontFamily ? `font-family: ${fluentFormSectionBreakDescGlobalTypographyData?.fontFamily};` : ''}
            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.fontSize === true && fluentFormSectionBreakDescGlobalTypographyData?.fontSize ? `font-size: ${fluentFormSectionBreakDescGlobalTypographyData?.fontSize};` : ''}
            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.fontWeight === true && fluentFormSectionBreakDescGlobalTypographyData?.fontWeight ? `font-weight: ${fluentFormSectionBreakDescGlobalTypographyData?.fontWeight};` : ''}
            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.fontStyle === true && fluentFormSectionBreakDescGlobalTypographyData?.fontStyle ? `font-style: ${fluentFormSectionBreakDescGlobalTypographyData?.fontStyle};` : ''}
            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.textTransform === true && fluentFormSectionBreakDescGlobalTypographyData?.textTransform ? `text-transform: ${fluentFormSectionBreakDescGlobalTypographyData?.textTransform};` : ''}
            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.textDecoration === true && fluentFormSectionBreakDescGlobalTypographyData?.textDecoration ? `text-decoration: ${fluentFormSectionBreakDescGlobalTypographyData?.textDecoration};` : ''}
            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.letterSpacing === true && fluentFormSectionBreakDescGlobalTypographyData?.letterSpacing ? `letter-spacing: ${fluentFormSectionBreakDescGlobalTypographyData?.letterSpacing};` : ''}
            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.lineHeight === true && fluentFormSectionBreakDescGlobalTypographyData?.lineHeight ? `line-height: ${fluentFormSectionBreakDescGlobalTypographyData?.lineHeight};` : ''}

            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.fontFamily === false && fluentFormSectionBreakDescFontFamily && fluentFormSectionBreakDescFontFamily !== 'Default' ? `font-family: ${fluentFormSectionBreakDescFontFamily};` : ""}
            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.fontSize === false && fluentFormSectionBreakDescFontSize?.Desktop && fluentFormSectionBreakDescFontSizeUnits?.Desktop ? `font-size: ${fluentFormSectionBreakDescFontSize?.Desktop}${fluentFormSectionBreakDescFontSizeUnits?.Desktop};` : ''} 
            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.fontWeight === false && fluentFormSectionBreakDescFontWeight ? `font-weight: ${fluentFormSectionBreakDescFontWeight};` : ""}
            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.fontStyle === false && fluentFormSectionBreakDescFontStyle ? `font-style: ${fluentFormSectionBreakDescFontStyle};` : ""}
            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.textTransform === false && fluentFormSectionBreakDescTextTransform ? `text-transform: ${fluentFormSectionBreakDescTextTransform};` : ""}
            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.textDecoration === false && fluentFormSectionBreakDescTextDecoration ? `text-decoration: ${fluentFormSectionBreakDescTextDecoration};` : ""}
            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.letterSpacing === false && fluentFormSectionBreakDescLetterSpacing?.Desktop && fluentFormSectionBreakDescLetterSpacingUnits?.Desktop ? `letter-spacing: ${fluentFormSectionBreakDescLetterSpacing?.Desktop}${fluentFormSectionBreakDescLetterSpacingUnits?.Desktop};` : ''}
            ${fluentFormSectionBreakDescGlobalTypoSwitcher?.lineHeight === false && fluentFormSectionBreakDescLineHeight?.Desktop && fluentFormSectionBreakDescLineHeightUnits?.Desktop ? `line-height: ${fluentFormSectionBreakDescLineHeight?.Desktop}${fluentFormSectionBreakDescLineHeightUnits?.Desktop};` : ''}
            ${fluentFormSectionBreakDescDesktopPadding && fluentFormSectionBreakDescPaddingDesktop?.top? `padding: ${fluentFormSectionBreakDescDesktopPadding};` : ""}
            ${fluentFormSectionBreakDescDesktopMargin && fluentFormSectionBreakDescMarginDesktop?.top? `margin: ${fluentFormSectionBreakDescDesktopMargin};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk:hover {
            ${fluentFormSectionBreakDescHoverColor ? `color: ${fluentFormSectionBreakDescHoverColor};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper .ff-custom_html > * {
            ${fluentFormHtmlAlignment ? `text-align: ${fluentFormHtmlAlignment};` : ""}
            ${fluentFormHtmlColor ? `color: ${fluentFormHtmlColor};` : ""}

            ${fluentFormHtmlGlobalTypoSwitcher?.fontFamily === true && fluentFormHtmlGlobalTypographyData?.fontFamily ? `font-family: ${fluentFormHtmlGlobalTypographyData?.fontFamily};` : ''}
            ${fluentFormHtmlGlobalTypoSwitcher?.fontSize === true && fluentFormHtmlGlobalTypographyData?.fontSize ? `font-size: ${fluentFormHtmlGlobalTypographyData?.fontSize};` : ''}
            ${fluentFormHtmlGlobalTypoSwitcher?.fontWeight === true && fluentFormHtmlGlobalTypographyData?.fontWeight ? `font-weight: ${fluentFormHtmlGlobalTypographyData?.fontWeight};` : ''}
            ${fluentFormHtmlGlobalTypoSwitcher?.fontStyle === true && fluentFormHtmlGlobalTypographyData?.fontStyle ? `font-style: ${fluentFormHtmlGlobalTypographyData?.fontStyle};` : ''}
            ${fluentFormHtmlGlobalTypoSwitcher?.textTransform === true && fluentFormHtmlGlobalTypographyData?.textTransform ? `text-transform: ${fluentFormHtmlGlobalTypographyData?.textTransform};` : ''}
            ${fluentFormHtmlGlobalTypoSwitcher?.textDecoration === true && fluentFormHtmlGlobalTypographyData?.textDecoration ? `text-decoration: ${fluentFormHtmlGlobalTypographyData?.textDecoration};` : ''}
            ${fluentFormHtmlGlobalTypoSwitcher?.letterSpacing === true && fluentFormHtmlGlobalTypographyData?.letterSpacing ? `letter-spacing: ${fluentFormHtmlGlobalTypographyData?.letterSpacing};` : ''}
            ${fluentFormHtmlGlobalTypoSwitcher?.lineHeight === true && fluentFormHtmlGlobalTypographyData?.lineHeight ? `line-height: ${fluentFormHtmlGlobalTypographyData?.lineHeight};` : ''}

            ${fluentFormHtmlGlobalTypoSwitcher?.fontFamily === false && fluentFormHtmlFontFamily && fluentFormHtmlFontFamily !== 'Default' ? `font-family: ${fluentFormHtmlFontFamily};` : ""}
            ${fluentFormHtmlGlobalTypoSwitcher?.fontSize === false && fluentFormHtmlFontSize?.Desktop && fluentFormHtmlFontSizeUnits?.Desktop ? `font-size: ${fluentFormHtmlFontSize?.Desktop}${fluentFormHtmlFontSizeUnits?.Desktop};` : ''} 
            ${fluentFormHtmlGlobalTypoSwitcher?.fontWeight === false && fluentFormHtmlFontWeight ? `font-weight: ${fluentFormHtmlFontWeight};` : ""}
            ${fluentFormHtmlGlobalTypoSwitcher?.fontStyle === false && fluentFormHtmlFontStyle ? `font-style: ${fluentFormHtmlFontStyle};` : ""}
            ${fluentFormHtmlGlobalTypoSwitcher?.textTransform === false && fluentFormHtmlTextTransform ? `text-transform: ${fluentFormHtmlTextTransform};` : ""}
            ${fluentFormHtmlGlobalTypoSwitcher?.textDecoration === false && fluentFormHtmlTextDecoration ? `text-decoration: ${fluentFormHtmlTextDecoration};` : ""}
            ${fluentFormHtmlGlobalTypoSwitcher?.letterSpacing === false && fluentFormHtmlLetterSpacing?.Desktop && fluentFormHtmlLetterSpacingUnits?.Desktop ? `letter-spacing: ${fluentFormHtmlLetterSpacing?.Desktop}${fluentFormHtmlLetterSpacingUnits?.Desktop};` : ''}
            ${fluentFormHtmlGlobalTypoSwitcher?.lineHeight === false && fluentFormHtmlLineHeight?.Desktop && fluentFormHtmlLineHeightUnits?.Desktop ? `line-height: ${fluentFormHtmlLineHeight?.Desktop}${fluentFormHtmlLineHeightUnits?.Desktop};` : ''} 
            ${fluentFormHtmlDesktopPadding && fluentFormHtmlPaddingDesktop?.top? `padding: ${fluentFormHtmlDesktopPadding};` : ""}
            ${fluentFormHtmlDesktopMargin && fluentFormHtmlMarginDesktop?.top? `margin: ${fluentFormHtmlDesktopMargin};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-custom_html > *:hover {
            ${fluentFormHtmlHoverColor ? `color: ${fluentFormHtmlHoverColor};` : ""}
        }
        
        .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper {
            ${fluentFormSubmitAlignment ? `text-align: ${fluentFormSubmitAlignment};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
            ${fluentFormSubmitHeight?.Desktop ? `height: ${fluentFormSubmitHeight?.Desktop}${fluentFormSubmitHeightUnits?.Desktop};` : ""}
            ${fluentFormSubmitColor ? `color: ${fluentFormSubmitColor};` : ""}
            ${fluentFormSubmitBgColor ? `background: ${fluentFormSubmitBgColor};` : ""}

            ${fluentFormSubmitGlobalTypoSwitcher?.fontFamily === true && fluentFormSubmitGlobalTypographyData?.fontFamily ? `font-family: ${fluentFormSubmitGlobalTypographyData?.fontFamily};` : ''}
            ${fluentFormSubmitGlobalTypoSwitcher?.fontSize === true && fluentFormSubmitGlobalTypographyData?.fontSize ? `font-size: ${fluentFormSubmitGlobalTypographyData?.fontSize};` : ''}
            ${fluentFormSubmitGlobalTypoSwitcher?.fontWeight === true && fluentFormSubmitGlobalTypographyData?.fontWeight ? `font-weight: ${fluentFormSubmitGlobalTypographyData?.fontWeight};` : ''}
            ${fluentFormSubmitGlobalTypoSwitcher?.fontStyle === true && fluentFormSubmitGlobalTypographyData?.fontStyle ? `font-style: ${fluentFormSubmitGlobalTypographyData?.fontStyle};` : ''}
            ${fluentFormSubmitGlobalTypoSwitcher?.textTransform === true && fluentFormSubmitGlobalTypographyData?.textTransform ? `text-transform: ${fluentFormSubmitGlobalTypographyData?.textTransform};` : ''}
            ${fluentFormSubmitGlobalTypoSwitcher?.textDecoration === true && fluentFormSubmitGlobalTypographyData?.textDecoration ? `text-decoration: ${fluentFormSubmitGlobalTypographyData?.textDecoration};` : ''}
            ${fluentFormSubmitGlobalTypoSwitcher?.letterSpacing === true && fluentFormSubmitGlobalTypographyData?.letterSpacing ? `letter-spacing: ${fluentFormSubmitGlobalTypographyData?.letterSpacing};` : ''}
            ${fluentFormSubmitGlobalTypoSwitcher?.lineHeight === true && fluentFormSubmitGlobalTypographyData?.lineHeight ? `line-height: ${fluentFormSubmitGlobalTypographyData?.lineHeight};` : ''}

            ${fluentFormSubmitGlobalTypoSwitcher?.fontFamily === false && fluentFormSubmitFontFamily && fluentFormSubmitFontFamily !== 'Default' ? `font-family: ${fluentFormSubmitFontFamily};` : ""}
            ${fluentFormSubmitGlobalTypoSwitcher?.fontSize === false && fluentFormSubmitFontSize?.Desktop && fluentFormSubmitFontSizeUnits?.Desktop ? `font-size: ${fluentFormSubmitFontSize?.Desktop}${fluentFormSubmitFontSizeUnits?.Desktop};` : ''} 
            ${fluentFormSubmitGlobalTypoSwitcher?.fontWeight === false && fluentFormSubmitFontWeight ? `font-weight: ${fluentFormSubmitFontWeight};` : ""}
            ${fluentFormSubmitGlobalTypoSwitcher?.fontStyle === false && fluentFormSubmitFontStyle ? `font-style: ${fluentFormSubmitFontStyle};` : ""}
            ${fluentFormSubmitGlobalTypoSwitcher?.textTransform === false && fluentFormSubmitTextTransform ? `text-transform: ${fluentFormSubmitTextTransform};` : ""}
            ${fluentFormSubmitGlobalTypoSwitcher?.textDecoration === false && fluentFormSubmitTextDecoration ? `text-decoration: ${fluentFormSubmitTextDecoration};` : ""}
            ${fluentFormSubmitGlobalTypoSwitcher?.letterSpacing === false && fluentFormSubmitLetterSpacing?.Desktop && fluentFormSubmitLetterSpacingUnits?.Desktop ? `letter-spacing: ${fluentFormSubmitLetterSpacing?.Desktop}${fluentFormSubmitLetterSpacingUnits?.Desktop};` : ''}
            ${fluentFormSubmitGlobalTypoSwitcher?.lineHeight === false && fluentFormSubmitLineHeight?.Desktop && fluentFormSubmitLineHeightUnits?.Desktop ? `line-height: ${fluentFormSubmitLineHeight?.Desktop}${fluentFormSubmitLineHeightUnits?.Desktop};` : ''} 
            ${fluentFormSubmitDesktopPadding && fluentFormSubmitPaddingDesktop?.top? `padding: ${fluentFormSubmitDesktopPadding};` : ""}
            ${fluentFormSubmitDesktopMargin && fluentFormSubmitMarginDesktop?.top? `margin: ${fluentFormSubmitDesktopMargin};` : ""}

            ${fluentFormSubmitBorder ? `border: ${fluentFormSubmitBorder};` : ""}
            ${fluentFormSubmitDesktopBorderWidth && fluentFormSubmitBorderDesktop?.top? `border-width: ${fluentFormSubmitDesktopBorderWidth};` : ""}
            ${fluentFormSubmitBorderColor ? `border-color: ${fluentFormSubmitBorderColor};` : ""}
            ${fluentFormSubmitDesktopBorderRadiusWidth && fluentFormSubmitBorderRadiusDesktop?.top? `border-radius: ${fluentFormSubmitDesktopBorderRadiusWidth};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit:hover {
            ${fluentFormSubmitHoverColor ? `color: ${fluentFormSubmitHoverColor};` : ""}
            ${fluentFormSubmitBgHoverColor ? `background: ${fluentFormSubmitBgHoverColor};` : ""}
            ${fluentFormSubmitBorderHoverColor ? `border-color: ${fluentFormSubmitBorderHoverColor};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
            ${fluentFormSubmitWidthSelect === 'full-width' ? 'width: 100%;' : ''}
            ${fluentFormSubmitWidthSelect === 'custom' && fluentFormSubmitWidth?.Desktop 
            ? `width: ${fluentFormSubmitWidth.Desktop}${fluentFormSubmitWidthUnits?.Desktop};` 
            : ''}
        }

        .${blockID}.fb-fluent-form-wrapper .ff-message-success {
            ${fluentFormSuccessColor ? `color: ${fluentFormSuccessColor};` : ""}
            ${fluentFormSuccessBgColor ? `background: ${fluentFormSuccessBgColor};` : ""}

            ${fluentFormSuccessGlobalTypoSwitcher?.fontFamily === true && fluentFormSuccessGlobalTypographyData?.fontFamily ? `font-family: ${fluentFormSuccessGlobalTypographyData?.fontFamily};` : ''}
            ${fluentFormSuccessGlobalTypoSwitcher?.fontSize === true && fluentFormSuccessGlobalTypographyData?.fontSize ? `font-size: ${fluentFormSuccessGlobalTypographyData?.fontSize};` : ''}
            ${fluentFormSuccessGlobalTypoSwitcher?.fontWeight === true && fluentFormSuccessGlobalTypographyData?.fontWeight ? `font-weight: ${fluentFormSuccessGlobalTypographyData?.fontWeight};` : ''}
            ${fluentFormSuccessGlobalTypoSwitcher?.fontStyle === true && fluentFormSuccessGlobalTypographyData?.fontStyle ? `font-style: ${fluentFormSuccessGlobalTypographyData?.fontStyle};` : ''} 
            ${fluentFormSuccessGlobalTypoSwitcher?.textTransform === true && fluentFormSuccessGlobalTypographyData?.textTransform ? `text-transform: ${fluentFormSuccessGlobalTypographyData?.textTransform};` : ''}
            ${fluentFormSuccessGlobalTypoSwitcher?.textDecoration === true && fluentFormSuccessGlobalTypographyData?.textDecoration ? `text-decoration: ${fluentFormSuccessGlobalTypographyData?.textDecoration};` : ''}
            ${fluentFormSuccessGlobalTypoSwitcher?.letterSpacing === true && fluentFormSuccessGlobalTypographyData?.letterSpacing ? `letter-spacing: ${fluentFormSuccessGlobalTypographyData?.letterSpacing};` : ''}
            ${fluentFormSuccessGlobalTypoSwitcher?.lineHeight === true && fluentFormSuccessGlobalTypographyData?.lineHeight ? `line-height: ${fluentFormSuccessGlobalTypographyData?.lineHeight};` : ''}

            ${fluentFormSuccessGlobalTypoSwitcher?.fontFamily === false && fluentFormSuccessFontFamily && fluentFormSuccessFontFamily !== 'Default' ? `font-family: ${fluentFormSuccessFontFamily};` : ""}
            ${fluentFormSuccessGlobalTypoSwitcher?.fontSize === false && fluentFormSuccessFontSize?.Desktop && fluentFormSuccessFontSizeUnits?.Desktop ? `font-size: ${fluentFormSuccessFontSize?.Desktop}${fluentFormSuccessFontSizeUnits?.Desktop};` : ''} 
            ${fluentFormSuccessGlobalTypoSwitcher?.fontWeight === false && fluentFormSuccessFontWeight ? `font-weight: ${fluentFormSuccessFontWeight};` : ""}
            ${fluentFormSuccessGlobalTypoSwitcher?.fontStyle === false && fluentFormSuccessFontStyle ? `font-style: ${fluentFormSuccessFontStyle};` : ""}
            ${fluentFormSuccessGlobalTypoSwitcher?.textTransform === false && fluentFormSuccessTextTransform ? `text-transform: ${fluentFormSuccessTextTransform};` : ""}
            ${fluentFormSuccessGlobalTypoSwitcher?.textDecoration === false && fluentFormSuccessTextDecoration ? `text-decoration: ${fluentFormSuccessTextDecoration};` : ""}
            ${fluentFormSuccessGlobalTypoSwitcher?.letterSpacing === false && fluentFormSuccessLetterSpacing?.Desktop && fluentFormSuccessLetterSpacingUnits?.Desktop ? `letter-spacing: ${fluentFormSuccessLetterSpacing?.Desktop}${fluentFormSuccessLetterSpacingUnits?.Desktop};` : ''}
            ${fluentFormSuccessGlobalTypoSwitcher?.lineHeight === false && fluentFormSuccessLineHeight?.Desktop && fluentFormSuccessLineHeightUnits?.Desktop ? `line-height: ${fluentFormSuccessLineHeight?.Desktop}${fluentFormSuccessLineHeightUnits?.Desktop};` : ''}
            ${fluentFormSuccessBorder ? `border: ${fluentFormSuccessBorder};` : ""} 
            ${fluentFormSuccessDesktopBorderWidth && fluentFormSuccessBorderDesktop?.top? `border-width: ${fluentFormSuccessDesktopBorderWidth};` : ""}
            ${fluentFormSuccessBorderColor ? `border-color: ${fluentFormSuccessBorderColor};` : ""}
            ${fluentFormSuccessDesktopBorderRadiusWidth && fluentFormSuccessBorderRadiusDesktop?.top? `border-radius: ${fluentFormSuccessDesktopBorderRadiusWidth};` : ""}
        }
        .${blockID}.fb-fluent-form-wrapper .ff-message-success:hover {
            ${fluentFormSuccessBorderHoverColor ? `border-color: ${fluentFormSuccessBorderHoverColor};` : ""}
        }

        .${blockID}.fb-fluent-form-wrapper .error.text-danger {
            ${fluentFormErrorColor ? `color: ${fluentFormErrorColor};` : ""}

            ${fluentFormErrorGlobalTypoSwitcher?.fontFamily === true && fluentFormErrorGlobalTypographyData?.fontFamily ? `font-family: ${fluentFormErrorGlobalTypographyData?.fontFamily};` : ''}
            ${fluentFormErrorGlobalTypoSwitcher?.fontSize === true && fluentFormErrorGlobalTypographyData?.fontSize ? `font-size: ${fluentFormErrorGlobalTypographyData?.fontSize};` : ''}
            ${fluentFormErrorGlobalTypoSwitcher?.fontWeight === true && fluentFormErrorGlobalTypographyData?.fontWeight ? `font-weight: ${fluentFormErrorGlobalTypographyData?.fontWeight};` : ''}
            ${fluentFormErrorGlobalTypoSwitcher?.fontStyle === true && fluentFormErrorGlobalTypographyData?.fontStyle ? `font-style: ${fluentFormErrorGlobalTypographyData?.fontStyle};` : ''}
            ${fluentFormErrorGlobalTypoSwitcher?.textTransform === true && fluentFormErrorGlobalTypographyData?.textTransform ? `text-transform: ${fluentFormErrorGlobalTypographyData?.textTransform};` : ''}
            ${fluentFormErrorGlobalTypoSwitcher?.textDecoration === true && fluentFormErrorGlobalTypographyData?.textDecoration ? `text-decoration: ${fluentFormErrorGlobalTypographyData?.textDecoration};` : ''}
            ${fluentFormErrorGlobalTypoSwitcher?.letterSpacing === true && fluentFormErrorGlobalTypographyData?.letterSpacing ? `letter-spacing: ${fluentFormErrorGlobalTypographyData?.letterSpacing};` : ''}
            ${fluentFormErrorGlobalTypoSwitcher?.lineHeight === true && fluentFormErrorGlobalTypographyData?.lineHeight ? `line-height: ${fluentFormErrorGlobalTypographyData?.lineHeight};` : ''}

            ${fluentFormErrorGlobalTypoSwitcher?.fontFamily === false && fluentFormErrorFontFamily && fluentFormErrorFontFamily !== 'Default' ? `font-family: ${fluentFormErrorFontFamily};` : ""}
            ${fluentFormErrorGlobalTypoSwitcher?.fontSize === false && fluentFormErrorFontSize?.Desktop && fluentFormErrorFontSizeUnits?.Desktop ? `font-size: ${fluentFormErrorFontSize?.Desktop}${fluentFormErrorFontSizeUnits?.Desktop};` : ''} 
            ${fluentFormErrorGlobalTypoSwitcher?.fontWeight === false && fluentFormErrorFontWeight ? `font-weight: ${fluentFormErrorFontWeight};` : ""}
            ${fluentFormErrorGlobalTypoSwitcher?.fontStyle === false && fluentFormErrorFontStyle ? `font-style: ${fluentFormErrorFontStyle};` : ""}
            ${fluentFormErrorGlobalTypoSwitcher?.textTransform === false && fluentFormErrorTextTransform ? `text-transform: ${fluentFormErrorTextTransform};` : ""}
            ${fluentFormErrorGlobalTypoSwitcher?.textDecoration === false && fluentFormErrorTextDecoration ? `text-decoration: ${fluentFormErrorTextDecoration};` : ""}
            ${fluentFormErrorGlobalTypoSwitcher?.letterSpacing === false && fluentFormErrorLetterSpacing?.Desktop && fluentFormErrorLetterSpacingUnits?.Desktop ? `letter-spacing: ${fluentFormErrorLetterSpacing?.Desktop}${fluentFormErrorLetterSpacingUnits?.Desktop};` : ''}
            ${fluentFormErrorGlobalTypoSwitcher?.lineHeight === false && fluentFormErrorLineHeight?.Desktop && fluentFormErrorLineHeightUnits?.Desktop ? `line-height: ${fluentFormErrorLineHeight?.Desktop}${fluentFormErrorLineHeightUnits?.Desktop};` : ''} 
            ${fluentFormErrorDesktopPadding && fluentFormErrorPaddingDesktop?.top? `padding: ${fluentFormErrorDesktopPadding};` : ""}
            ${fluentFormErrorDesktopMargin && fluentFormErrorMarginDesktop?.top? `margin: ${fluentFormErrorDesktopMargin};` : ""} 
        }     

        @media only screen and (max-width: 1024px) {

            .${blockID}.fb-fluent-form-wrapper {
                ${fluentFormGlobalBgColor !== undefined ? `background-color: ${fluentFormGlobalBgColor};` : ''}
                ${TabletPadding && fluentFormGlobalPaddingTablet?.top ? `padding: ${TabletPadding};` : ''}
                ${TabletMargin && fluentFormGlobalMarginTablet?.top ? `margin: ${TabletMargin};` : ''}
                border: ${fluentFormGlobalBorder};
                ${BorderTabletWidth && fluentFormGlobalBorderTablet?.top ? `border-width: ${BorderTabletWidth};` : ''}
                ${BorderRadiusTabletWidth && fluentFormGlobalBorderRadiusTablet?.top ? `border-radius: ${BorderRadiusTabletWidth} !important;` : ''}
                ${fluentFormGlobalBorderColor !== undefined ? `border-color: ${fluentFormGlobalBorderColor};` : ''}
                ${fluentFormPositionType !== 'default' ? `position: ${fluentFormPositionType};` : ''}
                ${fluentFormPositionType !== 'default' && fluentFormPositionType !== 'relative' && fluentFormHZOrientationType === 'left' && fluentFormHZLeftOffset?.Tablet !== undefined ? `left: ${fluentFormHZLeftOffset?.Tablet}${fluentFormHZLeftOffsetUnits?.Tablet};` : ''}
                ${fluentFormPositionType !== 'default' && fluentFormPositionType !== 'relative' && fluentFormHZOrientationType === 'right' && fluentFormHZRightOffset?.Tablet !== undefined ? `right: ${fluentFormHZRightOffset?.Tablet}${fluentFormHZRightOffsetUnits?.Tablet};` : ''}
                ${fluentFormPositionType !== 'default' && fluentFormPositionType !== 'relative' && fluentFormVROrientationType === 'top' && fluentFormVRTopOffset?.Tablet !== undefined ? `top: ${fluentFormVRTopOffset?.Tablet}${fluentFormVRTopOffsetUnits?.Tablet};` : ''}
                ${fluentFormPositionType !== 'default' && fluentFormPositionType !== 'relative' && fluentFormVROrientationType === 'bottom' && fluentFormVRBottomOffset?.Tablet !== undefined ? `bottom: ${fluentFormVRBottomOffset?.Tablet}${fluentFormVRBottomOffsetUnits?.Tablet};` : ''}
                ${fluentFormGlobalZIndex?.Tablet ? `z-index: ${fluentFormGlobalZIndex?.Tablet};` : ''}
                position: relative;
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-fluent-form-wrapper:hover {
                ${fluentFormGlobalBgHoverColor !== undefined ? `background-color: ${fluentFormGlobalBgHoverColor};` : ''}
                ${fluentFormGlobalBorderHoverColor !== undefined ? `border-color: ${fluentFormGlobalBorderHoverColor};` : ''}
            }

            .${blockID}.fb-fluent-form-wrapper .ff-el-group {
                ${fluentFormSpacingSize ? `margin-bottom: ${fluentFormSpacingSize?.Tablet}${fluentFormSpacingUnits?.Tablet};` : ""} 
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-group label {
                ${fluentFormLabelGlobalTypoSwitcher?.fontSize === false && fluentFormLabelFontSize?.Tablet && fluentFormLabelFontSizeUnits?.Tablet ? `font-size: ${fluentFormLabelFontSize?.Tablet}${fluentFormLabelFontSizeUnits?.Tablet};` : ''}
                ${fluentFormLabelGlobalTypoSwitcher?.letterSpacing === false && fluentFormLabelLetterSpacing?.Tablet && fluentFormLabelLetterSpacingUnits?.Tablet ? `letter-spacing: ${fluentFormLabelLetterSpacing?.Tablet}${fluentFormLabelLetterSpacingUnits?.Tablet};` : ''}
                ${fluentFormLabelGlobalTypoSwitcher?.lineHeight === false && fluentFormLabelLineHeight?.Tablet && fluentFormLabelLineHeightUnits?.Tablet ? `line-height: ${fluentFormLabelLineHeight?.Tablet}${fluentFormLabelLineHeightUnits?.Tablet};` : ''}
                ${fluntFromLabelMarginTabletWidth && fluntFromLabelMarginTablet?.top? `margin: ${fluntFromLabelMarginTabletWidth};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea, 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group select {
                ${fluentFormInputGlobalTypoSwitcher?.fontSize === false && fluentFormInputFontSize?.Tablet && fluentFormInputFontSizeUnits?.Tablet ? `font-size: ${fluentFormInputFontSize?.Tablet}${fluentFormInputFontSizeUnits?.Tablet};` : ''}
                ${fluentFormInputGlobalTypoSwitcher?.letterSpacing === false && fluentFormInputLetterSpacing?.Tablet && fluentFormInputLetterSpacingUnits?.Tablet ? `letter-spacing: ${fluentFormInputLetterSpacing?.Tablet}${fluentFormInputLetterSpacingUnits?.Tablet};` : ''}
                ${fluentFormInputGlobalTypoSwitcher?.lineHeight === false && fluentFormInputLineHeight?.Tablet && fluentFormInputLineHeightUnits?.Tablet ? `line-height: ${fluentFormInputLineHeight?.Tablet}${fluentFormInputLineHeightUnits?.Tablet};` : ''}
                ${fluentFormTextIndentSize ? `text-indent: ${fluentFormTextIndentSize?.Tablet}${fluentFormTextIndentSizeUnits?.Tablet};` : ""}
                ${fluentFormInputWidthSize ? `width: ${fluentFormInputWidthSize?.Tablet}${fluentFormInputWidthSizeUnits?.Tablet};` : ""}
                ${fluentFormInputHeightSize ? `height: ${fluentFormInputHeightSize?.Tablet}${fluentFormInputHeightSizeUnits?.Tablet};` : ""}
                ${fluentFormTabletPadding && fluentFormPaddingTablet?.top? `padding: ${fluentFormTabletPadding};` : ""}
                ${fluentFormBorder ? `border: ${fluentFormBorder};` : ""}
                ${fluentFormBorderTabletWidth && fluentFormBorderTablet?.top? `border-width: ${fluentFormBorderTabletWidth};` : ""}
                ${fluentFormBorderColor ? `border-color: ${fluentFormBorderColor};` : ""}
                ${fluentFormBorderRadiusTabletWidth && fluentFormBorderRadiusTablet?.top ? `border-radius: ${fluentFormBorderRadiusTabletWidth};` : ""}
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-fluent-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea:focus, 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group select:focus {
                ${fluentFormFocusBorder ? `border: ${fluentFormFocusBorder};` : ""}
                ${fluentFormFocusBorderTabletWidth && fluentFormFocusBorderTablet?.top ? `border-width: ${fluentFormFocusBorderTabletWidth};` : ""}
                ${fluentFormFocusBorderRadiusTabletWidth && fluentFormFocusBorderRadiusTablet?.top ? `border-radius: ${fluentFormFocusBorderRadiusTabletWidth};` : ""}
                ${fluentFormInputFocusColor ? `border-color: ${fluentFormInputFocusColor};` : ""}
                box-shadow: none;
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea {
                ${fluentFormTextareaWidthSize ? `width: ${fluentFormTextareaWidthSize?.Tablet}${fluentFormTextareaWidthSizeUnits?.Tablet};` : ""}
                ${fluentFormTextareaHeightSize ? `height: ${fluentFormTextareaHeightSize?.Tablet}${fluentFormTextareaHeightSizeUnits?.Tablet};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input::-webkit-input-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea::-webkit-input-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input::-moz-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea::-moz-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input:-ms-input-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea:-ms-input-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input:-moz-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea:-moz-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper .ff-el-input--content input[type="checkbox"]{
                width: ${fluentFormRadioFontSize?.Tablet}${fluentFormRadioFontSizeUnits?.Tablet}; 
                height: ${fluentFormRadioFontSize?.Tablet}${fluentFormRadioFontSizeUnits?.Tablet};
                ${fluentFormRadioColor ? `background: ${fluentFormRadioColor};` : ""}
                ${fluentFormRadioBorderColor ? `border-color: ${fluentFormRadioBorderColor};` : ""}
                ${fluentFormRadioBorderWidth ? `border-width: ${fluentFormRadioBorderWidth?.Tablet}${fluentFormRadioBorderWidthUnits?.Tablet};` : ""}
                ${fluentFormCheckBoxBorderRadiusTabletWidth && fluentFormCheckBoxBorderRadiusTablet?.top? `border-radius: ${fluentFormCheckBoxBorderRadiusTabletWidth};` : ""}
                position: relative;
                transition: all .3s ease-in-out;   
            } 
            .${blockID}.fb-fluent-form-wrapper .ff-el-input--content input[type="radio"] {
                width: ${fluentFormRadioFontSize?.Tablet}${fluentFormRadioFontSizeUnits?.Tablet};
                height: ${fluentFormRadioFontSize?.Tablet}${fluentFormRadioFontSizeUnits?.Tablet};
                ${fluentFormRadioColor ? `background: ${fluentFormRadioColor};` : ""}
                ${fluentFormRadioBorderColor ? `border-color: ${fluentFormRadioBorderColor};` : ""}
                ${fluentFormRadioBorderWidth ? `border-width: ${fluentFormRadioBorderWidth?.Tablet}${fluentFormRadioBorderWidthUnits?.Tablet};` : ""}
                ${fluentFormRadioBorderRadiusTabletWidth && fluentFormRadioBorderRadiusTablet?.top? `border-radius: ${fluentFormRadioBorderRadiusTabletWidth};` : ""}
                position: relative;
                transition: all .3s ease-in-out;   
            }
            .${blockID}.fb-fluent-form-wrapper input[type="checkbox"]:checked:before,
            .${blockID}.fb-fluent-form-wrapper input[type="radio"]:checked:before {
                ${fluentFormRadioCheckedColor ? `background: ${fluentFormRadioCheckedColor};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-form-check:not(:last-child) {
                ${fluentFormRadioCheckBoxItemSpacing ? `margin-bottom: ${fluentFormRadioCheckBoxItemSpacing?.Tablet}${fluentFormRadioCheckBoxItemSpacingUnits?.Tablet};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break,
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break hr {
                text-align: ${fluentFormSectionBreakAlignment};
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title {
                ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.fontSize === false && fluentFormSectionBreakTitleFontSize?.Tablet && fluentFormSectionBreakTitleFontSizeUnits?.Tablet ? `font-size: ${fluentFormSectionBreakTitleFontSize?.Tablet}${fluentFormSectionBreakTitleFontSizeUnits?.Tablet};` : ''}
                ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.letterSpacing === false && fluentFormSectionBreakTitleLetterSpacing?.Tablet && fluentFormSectionBreakTitleLetterSpacingUnits?.Tablet ? `letter-spacing: ${fluentFormSectionBreakTitleLetterSpacing?.Tablet}${fluentFormSectionBreakTitleLetterSpacingUnits?.Tablet};` : ''}
                ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.lineHeight === false && fluentFormSectionBreakTitleLineHeight?.Tablet && fluentFormSectionBreakTitleLineHeightUnits?.Tablet ? `line-height: ${fluentFormSectionBreakTitleLineHeight?.Tablet}${fluentFormSectionBreakTitleLineHeightUnits?.Tablet};` : ''}
                ${fluentFormSectionBreakTitleTabletPadding && fluentFormSectionBreakTitlePaddingTablet?.top? `padding: ${fluentFormSectionBreakTitleTabletPadding};` : ""}
                ${fluentFormSectionBreakTitleTabletMargin && fluentFormSectionBreakTitleMarginTablet?.top? `margin: ${fluentFormSectionBreakTitleTabletMargin};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title:hover {
                ${fluentFormSectionBreakTitleHoverColor ? `color: ${fluentFormSectionBreakTitleHoverColor};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk {
                ${fluentFormSectionBreakDescGlobalTypoSwitcher?.fontSize === false && fluentFormSectionBreakDescFontSize?.Tablet && fluentFormSectionBreakDescFontSizeUnits?.Tablet ? `font-size: ${fluentFormSectionBreakDescFontSize?.Tablet}${fluentFormSectionBreakDescFontSizeUnits?.Tablet};` : ''} 
                ${fluentFormSectionBreakDescGlobalTypoSwitcher?.letterSpacing === false && fluentFormSectionBreakDescLetterSpacing?.Tablet && fluentFormSectionBreakDescLetterSpacingUnits?.Tablet ? `letter-spacing: ${fluentFormSectionBreakDescLetterSpacing?.Tablet}${fluentFormSectionBreakDescLetterSpacingUnits?.Tablet};` : ''}
                ${fluentFormSectionBreakDescGlobalTypoSwitcher?.lineHeight === false && fluentFormSectionBreakDescLineHeight?.Tablet && fluentFormSectionBreakDescLineHeightUnits?.Tablet ? `line-height: ${fluentFormSectionBreakDescLineHeight?.Tablet}${fluentFormSectionBreakDescLineHeightUnits?.Tablet};` : ''}
                ${fluentFormSectionBreakDescTabletPadding && fluentFormSectionBreakDescPaddingTablet?.top? `padding: ${fluentFormSectionBreakDescTabletPadding};` : ""}
                ${fluentFormSectionBreakDescTabletMargin && fluentFormSectionBreakDescMarginTablet?.top? `margin: ${fluentFormSectionBreakDescTabletMargin};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper .ff-custom_html > * {
                ${fluentFormHtmlGlobalTypoSwitcher?.fontSize === false && fluentFormHtmlFontSize?.Tablet && fluentFormHtmlFontSizeUnits?.Tablet ? `font-size: ${fluentFormHtmlFontSize?.Tablet}${fluentFormHtmlFontSizeUnits?.Tablet};` : ''} 
                ${fluentFormHtmlGlobalTypoSwitcher?.letterSpacing === false && fluentFormHtmlLetterSpacing?.Tablet && fluentFormHtmlLetterSpacingUnits?.Tablet ? `letter-spacing: ${fluentFormHtmlLetterSpacing?.Tablet}${fluentFormHtmlLetterSpacingUnits?.Tablet};` : ''}
                ${fluentFormHtmlGlobalTypoSwitcher?.lineHeight === false && fluentFormHtmlLineHeight?.Tablet && fluentFormHtmlLineHeightUnits?.Tablet ? `line-height: ${fluentFormHtmlLineHeight?.Tablet}${fluentFormHtmlLineHeightUnits?.Tablet};` : ''} 
                ${fluentFormHtmlTabletPadding && fluentFormHtmlPaddingTablet?.top? `padding: ${fluentFormHtmlTabletPadding};` : ""}
                ${fluentFormHtmlTabletMargin && fluentFormHtmlMarginTablet?.top? `margin: ${fluentFormHtmlTabletMargin};` : ""}
            }
            
            .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper {
                ${fluentFormSubmitAlignment ? `text-align: ${fluentFormSubmitAlignment};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
                ${fluentFormSubmitHeight?.Tablet ? `height: ${fluentFormSubmitHeight?.Tablet}${fluentFormSubmitHeightUnits?.Tablet};` : ""}
                ${fluentFormSubmitGlobalTypoSwitcher?.fontSize === false && fluentFormSubmitFontSize?.Tablet && fluentFormSubmitFontSizeUnits?.Tablet ? `font-size: ${fluentFormSubmitFontSize?.Tablet}${fluentFormSubmitFontSizeUnits?.Tablet};` : ''} 
                ${fluentFormSubmitGlobalTypoSwitcher?.letterSpacing === false && fluentFormSubmitLetterSpacing?.Tablet && fluentFormSubmitLetterSpacingUnits?.Tablet ? `letter-spacing: ${fluentFormSubmitLetterSpacing?.Tablet}${fluentFormSubmitLetterSpacingUnits?.Tablet};` : ''}
                ${fluentFormSubmitGlobalTypoSwitcher?.lineHeight === false && fluentFormSubmitLineHeight?.Tablet && fluentFormSubmitLineHeightUnits?.Tablet ? `line-height: ${fluentFormSubmitLineHeight?.Tablet}${fluentFormSubmitLineHeightUnits?.Tablet};` : ''} 
                ${fluentFormSubmitTabletPadding && fluentFormSubmitPaddingTablet?.top? `padding: ${fluentFormSubmitTabletPadding};` : ""}
                ${fluentFormSubmitTabletMargin && fluentFormSubmitMarginTablet?.top? `margin: ${fluentFormSubmitTabletMargin};` : ""}

                ${fluentFormSubmitTabletBorderWidth && fluentFormSubmitBorderTablet?.top? `border-width: ${fluentFormSubmitTabletBorderWidth};` : ""}
                ${fluentFormSubmitTabletBorderRadiusWidth && fluentFormSubmitBorderRadiusTablet?.top? `border-radius: ${fluentFormSubmitTabletBorderRadiusWidth};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
                ${fluentFormSubmitWidthSelect === 'full-width' ? 'width: 100%;' : ''}
                ${fluentFormSubmitWidthSelect === 'custom' && fluentFormSubmitWidth?.Tablet 
                ? `width: ${fluentFormSubmitWidth?.Tablet}${fluentFormSubmitWidthUnits?.Tablet};` 
                : ''}
            }

            .${blockID}.fb-fluent-form-wrapper .ff-message-success {
                ${fluentFormSuccessGlobalTypoSwitcher?.fontSize === false && fluentFormSuccessFontSize?.Tablet && fluentFormSuccessFontSizeUnits?.Tablet ? `font-size: ${fluentFormSuccessFontSize?.Tablet}${fluentFormSuccessFontSizeUnits?.Tablet};` : ''} 
                ${fluentFormSuccessGlobalTypoSwitcher?.letterSpacing === false && fluentFormSuccessLetterSpacing?.Tablet && fluentFormSuccessLetterSpacingUnits?.Tablet ? `letter-spacing: ${fluentFormSuccessLetterSpacing?.Tablet}${fluentFormSuccessLetterSpacingUnits?.Tablet};` : ''}
                ${fluentFormSuccessGlobalTypoSwitcher?.lineHeight === false && fluentFormSuccessLineHeight?.Tablet && fluentFormSuccessLineHeightUnits?.Tablet ? `line-height: ${fluentFormSuccessLineHeight?.Tablet}${fluentFormSuccessLineHeightUnits?.Tablet};` : ''}
                ${fluentFormSuccessTabletBorderWidth && fluentFormSuccessBorderTablet?.top? `border-width: ${fluentFormSuccessTabletBorderWidth};` : ""}
                ${fluentFormSuccessTabletBorderRadiusWidth && fluentFormSuccessBorderRadiusTablet?.top? `border-radius: ${fluentFormSuccessTabletBorderRadiusWidth};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper .error.text-danger {
                ${fluentFormErrorGlobalTypoSwitcher?.fontSize === false && fluentFormErrorFontSize?.Tablet && fluentFormErrorFontSizeUnits?.Tablet ? `font-size: ${fluentFormErrorFontSize?.Tablet}${fluentFormErrorFontSizeUnits?.Tablet};` : ''} 
                ${fluentFormErrorGlobalTypoSwitcher?.letterSpacing === false && fluentFormErrorLetterSpacing?.Tablet && fluentFormErrorLetterSpacingUnits?.Tablet ? `letter-spacing: ${fluentFormErrorLetterSpacing?.Tablet}${fluentFormErrorLetterSpacingUnits?.Tablet};` : ''}
                ${fluentFormErrorGlobalTypoSwitcher?.lineHeight === false && fluentFormErrorLineHeight?.Tablet && fluentFormErrorLineHeightUnits?.Tablet ? `line-height: ${fluentFormErrorLineHeight?.Tablet}${fluentFormErrorLineHeightUnits?.Tablet};` : ''} 
                ${fluentFormErrorTabletPadding && fluentFormErrorPaddingTablet?.top? `padding: ${fluentFormErrorTabletPadding};` : ""}
                ${fluentFormErrorTabletMargin && fluentFormErrorMarginTablet?.top? `margin: ${fluentFormErrorTabletMargin};` : ""} 
            }

            .fluentform * {
                box-sizing: border-box;
            }

            .frm-fluent-form .ff-t-container {
                display: flex;
                gap: 15px;
                width: 100%;
            }

            .frm-fluent-form .ff-t-cell {
                display: flex;
                flex-direction: column;
                vertical-align: inherit;
                width: 100%;
            }

            .fluentform .ff-el-input--label {
                display: inline-block;
                margin-bottom: 5px;
                position: relative;
            }

            .ff-default .ff-el-input--label label {
                display: inline-block;
                font-weight: 500;
                line-height: inherit;
                margin-bottom: 0;
            }
            .ff-el-form-control {
                display: block;
                width: 100%;
            }

            .ff-default .ff-el-form-control {
                background-clip: padding-box;
                background-image: none;
                border-radius: 7px;
                line-height: 1;
                margin-bottom: 0;
                max-width: 100%;
                padding: 11px 15px;
                transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
            }

            .fluentform .ff-el-group {
                margin-bottom: 20px;
            }

            .ff-default .ff_btn_style {
                border-radius: 7px;
                cursor: pointer;
                display: inline-block;
                font-size: 16px;
                font-weight: 500;
                line-height: 1.5;
                padding: 8px 20px;
                position: relative;
                text-align: center;
                transition: background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
                -webkit-user-select: none;
                -moz-user-select: none;
                user-select: none;
                vertical-align: middle;
                white-space: nowrap;
            }
        }
            
        @media only screen and (max-width: 767px) {

            .${blockID}.fb-fluent-form-wrapper {
                ${fluentFormGlobalBgColor !== undefined ? `background-color: ${fluentFormGlobalBgColor};` : ''}
                ${MobilePadding && fluentFormGlobalPaddingMobile?.top ? `padding: ${MobilePadding};` : ''}
                ${MobileMargin && fluentFormGlobalMarginMobile?.top ? `margin: ${MobileMargin};` : ''}
                border: ${fluentFormGlobalBorder};
                ${BorderMobileWidth && fluentFormGlobalBorderMobile?.top ? `border-width: ${BorderMobileWidth};` : ''}
                ${BorderRadiusMobileWidth && fluentFormGlobalBorderRadiusMobile?.top ? `border-radius: ${BorderRadiusMobileWidth} !important;` : ''}
                ${fluentFormGlobalBorderColor !== undefined ? `border-color: ${fluentFormGlobalBorderColor};` : ''}
                ${fluentFormPositionType !== 'default' ? `position: ${fluentFormPositionType};` : ''}
                ${fluentFormPositionType !== 'default' && fluentFormPositionType !== 'relative' && fluentFormHZOrientationType === 'left' && fluentFormHZLeftOffset?.Mobile !== undefined ? `left: ${fluentFormHZLeftOffset?.Mobile}${fluentFormHZLeftOffsetUnits?.Mobile};` : ''}
                ${fluentFormPositionType !== 'default' && fluentFormPositionType !== 'relative' && fluentFormHZOrientationType === 'right' && fluentFormHZRightOffset?.Mobile !== undefined ? `right: ${fluentFormHZRightOffset?.Mobile}${fluentFormHZRightOffsetUnits?.Mobile};` : ''}
                ${fluentFormPositionType !== 'default' && fluentFormPositionType !== 'relative' && fluentFormVROrientationType === 'top' && fluentFormVRTopOffset?.Mobile !== undefined ? `top: ${fluentFormVRTopOffset?.Mobile}${fluentFormVRTopOffsetUnits?.Mobile};` : ''}
                ${fluentFormPositionType !== 'default' && fluentFormPositionType !== 'relative' && fluentFormVROrientationType === 'bottom' && fluentFormVRBottomOffset?.Mobile !== undefined ? `bottom: ${fluentFormVRBottomOffset?.Mobile}${fluentFormVRBottomOffsetUnits?.Mobile};` : ''}                
                ${fluentFormGlobalZIndex?.Mobile ? `z-index: ${fluentFormGlobalZIndex?.Mobile};` : ''}
                position: relative; 
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-fluent-form-wrapper:hover {
                ${fluentFormGlobalBgHoverColor !== undefined ? `background-color: ${fluentFormGlobalBgHoverColor};` : ''}
                ${fluentFormGlobalBorderHoverColor !== undefined ? `border-color: ${fluentFormGlobalBorderHoverColor};` : ''}
            }

            .${blockID}.fb-fluent-form-wrapper .ff-el-group {
                ${fluentFormSpacingSize ? `margin-bottom: ${fluentFormSpacingSize?.Mobile}${fluentFormSpacingUnits?.Mobile};` : ""}  
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-group label {
                ${fluentFormLabelGlobalTypoSwitcher?.fontSize === false && fluentFormLabelFontSize?.Mobile && fluentFormLabelFontSizeUnits?.Mobile ? `font-size: ${fluentFormLabelFontSize?.Mobile}${fluentFormLabelFontSizeUnits?.Mobile};` : ''}
                ${fluentFormLabelGlobalTypoSwitcher?.letterSpacing === false && fluentFormLabelLetterSpacing?.Mobile && fluentFormLabelLetterSpacingUnits?.Mobile ? `letter-spacing: ${fluentFormLabelLetterSpacing?.Mobile}${fluentFormLabelLetterSpacingUnits?.Mobile};` : ''}
                ${fluentFormLabelGlobalTypoSwitcher?.lineHeight === false && fluentFormLabelLineHeight?.Mobile && fluentFormLabelLineHeightUnits?.Mobile ? `line-height: ${fluentFormLabelLineHeight?.Mobile}${fluentFormLabelLineHeightUnits?.Mobile};` : ''}
                ${fluntFromLabelMarginMobileWidth && fluntFromLabelMarginMobile?.top? `margin: ${fluntFromLabelMarginMobileWidth};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea, 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group select {
                ${fluentFormInputGlobalTypoSwitcher?.fontSize === false && fluentFormInputFontSize?.Mobile && fluentFormInputFontSizeUnits?.Mobile ? `font-size: ${fluentFormInputFontSize?.Mobile}${fluentFormInputFontSizeUnits?.Mobile};` : ''}
                ${fluentFormInputGlobalTypoSwitcher?.letterSpacing === false && fluentFormInputLetterSpacing?.Mobile && fluentFormInputLetterSpacingUnits?.Mobile ? `letter-spacing: ${fluentFormInputLetterSpacing?.Mobile}${fluentFormInputLetterSpacingUnits?.Mobile};` : ''}
                ${fluentFormInputGlobalTypoSwitcher?.lineHeight === false && fluentFormInputLineHeight?.Mobile && fluentFormInputLineHeightUnits?.Mobile ? `line-height: ${fluentFormInputLineHeight?.Mobile}${fluentFormInputLineHeightUnits?.Mobile};` : ''}
                ${fluentFormTextIndentSize ? `text-indent: ${fluentFormTextIndentSize?.Mobile}${fluentFormTextIndentSizeUnits?.Mobile};` : ""}
                ${fluentFormInputWidthSize ? `width: ${fluentFormInputWidthSize?.Mobile}${fluentFormInputWidthSizeUnits?.Mobile};` : ""}
                ${fluentFormInputHeightSize ? `height: ${fluentFormInputHeightSize?.Mobile}${fluentFormInputHeightSizeUnits?.Mobile};` : ""}
                ${fluentFormMobilePadding && fluentFormPaddingMobile?.top? `padding: ${fluentFormMobilePadding};` : ""} 
                ${fluentFormBorder ? `border: ${fluentFormBorder};` : ""}
                ${fluentFormBorderMobileWidth && fluentFormBorderMobile?.top? `border-width: ${fluentFormBorderMobileWidth};` : ""}
                ${fluentFormBorderColor ? `border-color: ${fluentFormBorderColor};` : ""}
                ${fluentFormBorderRadiusMobileWidth && fluentFormBorderRadiusMobile?.top ? `border-radius: ${fluentFormBorderRadiusMobileWidth};` : ""}
                transition: all .3s ease-in-out;
            }
            .${blockID}.fb-fluent-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea:focus, 
            .${blockID}.fb-fluent-form-wrapper .ff-el-group select:focus {
                ${fluentFormFocusBorder ? `border: ${fluentFormFocusBorder};` : ""}
                ${fluentFormFocusBorderMobileWidth && fluentFormFocusBorderMobile?.top ? `border-width: ${fluentFormFocusBorderMobileWidth};` : ""}
                ${fluentFormInputFocusColor ? `border-color: ${fluentFormInputFocusColor};` : ""}
                ${fluentFormFocusBorderRadiusMobileWidth && fluentFormFocusBorderRadiusMobile?.top ? `border-radius: ${fluentFormFocusBorderRadiusMobileWidth};` : ""}
                box-shadow: none;
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-group textarea {
                ${fluentFormTextareaWidthSize ? `width: ${fluentFormTextareaWidthSize?.Mobile}${fluentFormTextareaWidthSizeUnits?.Mobile};` : ""}
                ${fluentFormTextareaHeightSize ? `height: ${fluentFormTextareaHeightSize?.Mobile}${fluentFormTextareaHeightSizeUnits?.Mobile};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input::-webkit-input-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea::-webkit-input-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input::-moz-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea::-moz-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input:-ms-input-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea:-ms-input-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper input:-moz-placeholder,
            .${blockID}.fb-fluent-form-wrapper textarea:-moz-placeholder {
                ${fluentFormPlaceholderColor ? `color: ${fluentFormPlaceholderColor};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper .ff-el-input--content input[type="checkbox"]{
                width: ${fluentFormRadioFontSize?.Mobile}${fluentFormRadioFontSizeUnits?.Mobile}; 
                height: ${fluentFormRadioFontSize?.Mobile}${fluentFormRadioFontSizeUnits?.Mobile};
                ${fluentFormRadioColor ? `background: ${fluentFormRadioColor};` : ""}
                ${fluentFormRadioBorderColor ? `border-color: ${fluentFormRadioBorderColor};` : ""}
                ${fluentFormRadioBorderWidth ? `border-width: ${fluentFormRadioBorderWidth?.Mobile}${fluentFormRadioBorderWidthUnits?.Mobile};` : ""}
                ${fluentFormCheckBoxBorderRadiusMobileWidth && fluentFormCheckBoxBorderRadiusMobile?.top? `border-radius: ${fluentFormCheckBoxBorderRadiusMobileWidth};` : ""}
                position: relative;
                transition: all .3s ease-in-out;   
            } 
            .${blockID}.fb-fluent-form-wrapper .ff-el-input--content input[type="radio"] {
                width: ${fluentFormRadioFontSize?.Mobile}${fluentFormRadioFontSizeUnits?.Mobile};
                height: ${fluentFormRadioFontSize?.Mobile}${fluentFormRadioFontSizeUnits?.Mobile};
                ${fluentFormRadioColor ? `background: ${fluentFormRadioColor};` : ""}
                ${fluentFormRadioBorderColor ? `border-color: ${fluentFormRadioBorderColor};` : ""}
                ${fluentFormRadioBorderWidth ? `border-width: ${fluentFormRadioBorderWidth?.Mobile}${fluentFormRadioBorderWidthUnits?.Mobile};` : ""}
                ${fluentFormRadioBorderRadiusMobileWidth && fluentFormRadioBorderRadiusMobile?.top? `border-radius: ${fluentFormRadioBorderRadiusMobileWidth};` : ""}
                position: relative;
                transition: all .3s ease-in-out;   
            }
            .${blockID}.fb-fluent-form-wrapper input[type="checkbox"]:checked:before,
            .${blockID}.fb-fluent-form-wrapper input[type="radio"]:checked:before {
                ${fluentFormRadioCheckedColor ? `background: ${fluentFormRadioCheckedColor};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-form-check:not(:last-child) {
                ${fluentFormRadioCheckBoxItemSpacing ? `margin-bottom: ${fluentFormRadioCheckBoxItemSpacing?.Mobile}${fluentFormRadioCheckBoxItemSpacingUnits?.Mobile};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break,
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break hr {
                ${fluentFormSectionBreakAlignment ? `text-align: ${fluentFormSectionBreakAlignment};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title {
                ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.fontSize === false && fluentFormSectionBreakTitleFontSize?.Mobile && fluentFormSectionBreakTitleFontSizeUnits?.Mobile ? `font-size: ${fluentFormSectionBreakTitleFontSize?.Mobile}${fluentFormSectionBreakTitleFontSizeUnits?.Mobile};` : ''}
                ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.letterSpacing === false && fluentFormSectionBreakTitleLetterSpacing?.Mobile && fluentFormSectionBreakTitleLetterSpacingUnits?.Mobile ? `letter-spacing: ${fluentFormSectionBreakTitleLetterSpacing?.Mobile}${fluentFormSectionBreakTitleLetterSpacingUnits?.Mobile};` : ''}
                ${fluentFormSectionBreakTitleGlobalTypoSwitcher?.lineHeight === false && fluentFormSectionBreakTitleLineHeight?.Mobile && fluentFormSectionBreakTitleLineHeightUnits?.Mobile ? `line-height: ${fluentFormSectionBreakTitleLineHeight?.Mobile}${fluentFormSectionBreakTitleLineHeightUnits?.Mobile};` : ''}
                ${fluentFormSectionBreakTitleMobilePadding && fluentFormSectionBreakTitlePaddingMobile?.top? `padding: ${fluentFormSectionBreakTitleMobilePadding};` : ""}
                ${fluentFormSectionBreakTitleMobileMargin && fluentFormSectionBreakTitleMarginMobile?.top? `margin: ${fluentFormSectionBreakTitleMobileMargin};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-el-section-title:hover {
                ${fluentFormSectionBreakTitleHoverColor ? `color: ${fluentFormSectionBreakTitleHoverColor};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff-el-section-break .ff-section_break_desk {
                ${fluentFormSectionBreakDescGlobalTypoSwitcher?.fontSize === false && fluentFormSectionBreakDescFontSize?.Mobile && fluentFormSectionBreakDescFontSizeUnits?.Mobile ? `font-size: ${fluentFormSectionBreakDescFontSize?.Mobile}${fluentFormSectionBreakDescFontSizeUnits?.Mobile};` : ''} 
                ${fluentFormSectionBreakDescGlobalTypoSwitcher?.letterSpacing === false && fluentFormSectionBreakDescLetterSpacing?.Mobile && fluentFormSectionBreakDescLetterSpacingUnits?.Mobile ? `letter-spacing: ${fluentFormSectionBreakDescLetterSpacing?.Mobile}${fluentFormSectionBreakDescLetterSpacingUnits?.Mobile};` : ''}
                ${fluentFormSectionBreakDescGlobalTypoSwitcher?.lineHeight === false && fluentFormSectionBreakDescLineHeight?.Mobile && fluentFormSectionBreakDescLineHeightUnits?.Mobile ? `line-height: ${fluentFormSectionBreakDescLineHeight?.Mobile}${fluentFormSectionBreakDescLineHeightUnits?.Mobile};` : ''}
                ${fluentFormSectionBreakDescMobilePadding && fluentFormSectionBreakDescPaddingMobile?.top? `padding: ${fluentFormSectionBreakDescMobilePadding};` : ""}
                ${fluentFormSectionBreakDescMobileMargin && fluentFormSectionBreakDescMarginMobile?.top? `margin: ${fluentFormSectionBreakDescMobileMargin};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper .ff-custom_html > * {
                ${fluentFormHtmlGlobalTypoSwitcher?.fontSize === false && fluentFormHtmlFontSize?.Mobile && fluentFormHtmlFontSizeUnits?.Mobile ? `font-size: ${fluentFormHtmlFontSize?.Mobile}${fluentFormHtmlFontSizeUnits?.Mobile};` : ''} 
                ${fluentFormHtmlGlobalTypoSwitcher?.letterSpacing === false && fluentFormHtmlLetterSpacing?.Mobile && fluentFormHtmlLetterSpacingUnits?.Mobile ? `letter-spacing: ${fluentFormHtmlLetterSpacing?.Mobile}${fluentFormHtmlLetterSpacingUnits?.Mobile};` : ''}
                ${fluentFormHtmlGlobalTypoSwitcher?.lineHeight === false && fluentFormHtmlLineHeight?.Mobile && fluentFormHtmlLineHeightUnits?.Mobile ? `line-height: ${fluentFormHtmlLineHeight?.Mobile}${fluentFormHtmlLineHeightUnits?.Mobile};` : ''} 
                ${fluentFormHtmlMobilePadding && fluentFormHtmlPaddingMobile?.top? `padding: ${fluentFormHtmlMobilePadding};` : ""}
                ${fluentFormHtmlMobileMargin && fluentFormHtmlMarginMobile?.top? `margin: ${fluentFormHtmlMobileMargin};` : ""}
            }
            
            .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper {
                ${fluentFormSubmitAlignment ? `text-align: ${fluentFormSubmitAlignment};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
                ${fluentFormSubmitHeight?.Mobile ? `height: ${fluentFormSubmitHeight?.Mobile}${fluentFormSubmitHeightUnits?.Mobile};` : ""}
                ${fluentFormSubmitGlobalTypoSwitcher?.fontSize === false && fluentFormSubmitFontSize?.Mobile && fluentFormSubmitFontSizeUnits?.Mobile ? `font-size: ${fluentFormSubmitFontSize?.Mobile}${fluentFormSubmitFontSizeUnits?.Mobile};` : ''} 
                ${fluentFormSubmitGlobalTypoSwitcher?.letterSpacing === false && fluentFormSubmitLetterSpacing?.Mobile && fluentFormSubmitLetterSpacingUnits?.Mobile ? `letter-spacing: ${fluentFormSubmitLetterSpacing?.Mobile}${fluentFormSubmitLetterSpacingUnits?.Mobile};` : ''}
                ${fluentFormSubmitGlobalTypoSwitcher?.lineHeight === false && fluentFormSubmitLineHeight?.Mobile && fluentFormSubmitLineHeightUnits?.Mobile ? `line-height: ${fluentFormSubmitLineHeight?.Mobile}${fluentFormSubmitLineHeightUnits?.Mobile};` : ''} 
                ${fluentFormSubmitMobilePadding && fluentFormSubmitPaddingMobile?.top? `padding: ${fluentFormSubmitMobilePadding};` : ""}
                ${fluentFormSubmitMobileMargin && fluentFormSubmitMarginMobile?.top? `margin: ${fluentFormSubmitMobileMargin};` : ""}

                ${fluentFormSubmitMobileBorderWidth && fluentFormSubmitBorderMobile?.top? `border-width: ${fluentFormSubmitMobileBorderWidth};` : ""}
                ${fluentFormSubmitMobileBorderRadiusWidth && fluentFormSubmitBorderRadiusMobile?.top? `border-radius: ${fluentFormSubmitMobileBorderRadiusWidth};` : ""}
            }
            .${blockID}.fb-fluent-form-wrapper .ff_submit_btn_wrapper .ff-btn-submit {
                ${fluentFormSubmitWidthSelect === 'full-width' ? 'width: 100%;' : ''}
                ${fluentFormSubmitWidthSelect === 'custom' && fluentFormSubmitWidth?.Mobile 
                ? `width: ${fluentFormSubmitWidth?.Mobile}${fluentFormSubmitWidthUnits?.Mobile};` 
                : ''}
            }

            .${blockID}.fb-fluent-form-wrapper .ff-message-success {
                ${fluentFormSuccessGlobalTypoSwitcher?.fontSize === false && fluentFormSuccessFontSize?.Mobile && fluentFormSuccessFontSizeUnits?.Mobile ? `font-size: ${fluentFormSuccessFontSize?.Mobile}${fluentFormSuccessFontSizeUnits?.Mobile};` : ''} 
                ${fluentFormSuccessGlobalTypoSwitcher?.letterSpacing === false && fluentFormSuccessLetterSpacing?.Mobile && fluentFormSuccessLetterSpacingUnits?.Mobile ? `letter-spacing: ${fluentFormSuccessLetterSpacing?.Mobile}${fluentFormSuccessLetterSpacingUnits?.Mobile};` : ''}
                ${fluentFormSuccessGlobalTypoSwitcher?.lineHeight === false && fluentFormSuccessLineHeight?.Mobile && fluentFormSuccessLineHeightUnits?.Mobile ? `line-height: ${fluentFormSuccessLineHeight?.Mobile}${fluentFormSuccessLineHeightUnits?.Mobile};` : ''}
                ${fluentFormSuccessMobileBorderWidth && fluentFormSuccessBorderMobile?.top? `border-width: ${fluentFormSuccessMobileBorderWidth};` : ""}
                ${fluentFormSuccessMobileBorderRadiusWidth && fluentFormSuccessBorderRadiusMobile?.top? `border-radius: ${fluentFormSuccessMobileBorderRadiusWidth};` : ""}
            }

            .${blockID}.fb-fluent-form-wrapper .error.text-danger {
                ${fluentFormErrorGlobalTypoSwitcher?.fontSize === false && fluentFormErrorFontSize?.Mobile && fluentFormErrorFontSizeUnits?.Mobile ? `font-size: ${fluentFormErrorFontSize?.Mobile}${fluentFormErrorFontSizeUnits?.Mobile};` : ''} 
                ${fluentFormErrorGlobalTypoSwitcher?.letterSpacing === false && fluentFormErrorLetterSpacing?.Mobile && fluentFormErrorLetterSpacingUnits?.Mobile ? `letter-spacing: ${fluentFormErrorLetterSpacing?.Mobile}${fluentFormErrorLetterSpacingUnits?.Mobile};` : ''}
                ${fluentFormErrorGlobalTypoSwitcher?.lineHeight === false && fluentFormErrorLineHeight?.Mobile && fluentFormErrorLineHeightUnits?.Mobile ? `line-height: ${fluentFormErrorLineHeight?.Mobile}${fluentFormErrorLineHeightUnits?.Mobile};` : ''} 
                ${fluentFormErrorMobilePadding && fluentFormErrorPaddingMobile?.top? `padding: ${fluentFormErrorMobilePadding};` : ""}
                ${fluentFormErrorMobileMargin && fluentFormErrorMarginMobile?.top? `margin: ${fluentFormErrorMobileMargin};` : ""} 
            } 
            .frm-fluent-form .ff-t-container {
                display: block;
                width: 100%;
            }
        }


    `;

    const customCss = getCustomCss(fluentFormGlobalWraperCustomCSS, `.${blockID}`);
    return `${fluentFormBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateFluentFormStyle;