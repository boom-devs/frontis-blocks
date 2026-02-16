/**
 * Contact Form Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateContactFormStyle = (attributes) => {
    const {
        blockID,
        // deviceType,
        contactFormGlobalZIndex,
        contactFormOverflow,
        formId,
        showPlaceholder,
        showErrorMessage,

        contactFormLabelColorSwitcher,
        contactFormLabelColor,
        contactFormLabelHoverColor,
        contactFormLabelGlobalTypoSwitcher,
        contactFormLabelGlobalTypographyData,
        contactFormLabelGlobalTypoType,
        contactFormLabelGlobalTypoOption,
        contactFormLabelFontFamily,
        contactFormLabelFontSize,
        contactFormLabelFontSizeUnits,
        contactFormLabelFontWeight,
        contactFormLabelFontStyle,
        contactFormLabelTextTransform,
        contactFormLabelTextDecoration,
        contactFormLabelLetterSpacing,
        contactFormLabelLineHeight,
        contactFormLabelLetterSpacingUnits,
        contactFormLabelLineHeightUnits,

        contactFormInputBgColor,
        contactFormInputColor,
        contactFormInputFocusColor,
        contactFormInputGlobalTypoSwitcher,
        contactFormInputGlobalTypographyData,
        contactFormInputGlobalTypoType,
        contactFormInputGlobalTypoOption,
        contactFormInputFontFamily,
        contactFormInputFontSize,
        contactFormInputFontSizeUnits,
        contactFormInputFontWeight,
        contactFormInputFontStyle,
        contactFormInputTextTransform,
        contactFormInputTextDecoration,
        contactFormInputLetterSpacing,
        contactFormInputLineHeight,
        contactFormInputLetterSpacingUnits,
        contactFormInputLineHeightUnits,

        contactFormTextIndentSize,
        contactFormTextIndentSizeUnits,
        contactFormInputWidthSize,
        contactFormInputWidthSizeUnits,
        contactFormInputHeightSize,
        contactFormInputHeightSizeUnits,
        contactFormTextareaWidthSize,
        contactFormTextareaWidthSizeUnits,
        contactFormTextareaHeightSize,
        contactFormTextareaHeightSizeUnits,
        contactFormSpacingSize,
        contactFormSpacingUnits,

        contactFormPaddingUnits,
        contactFormPaddingDesktop,
        contactFormPaddingTablet,
        contactFormPaddingMobile,
        contactFormPaddingLink,

        contactFormMarginUnits,
        contactFormMarginDesktop,
        contactFormMarginTablet,
        contactFormMarginMobile,
        contactFormMarginLink,

        contactFormBorder,
        contactFormBorderColorSwitcher,
        contactFormBorderColor,
        contactFormBorderHoverColor,
        contactFormBorderUnits,
        contactFormBorderDesktop,
        contactFormBorderTablet,
        contactFormBorderMobile,
        contactFormBorderLink,
        contactFormBorderRadiusUnits,
        contactFormBorderRadiusDesktop,
        contactFormBorderRadiusTablet,
        contactFormBorderRadiusMobile,
        contactFormBorderRadiusLink,

        contactFormFocusBorder,
        contactFormFocusBorderUnits,
        contactFormFocusBorderDesktop,
        contactFormFocusBorderTablet,
        contactFormFocusBorderMobile,
        contactFormFocusBorderLink,
        contactFormFocusBorderRadiusUnits,
        contactFormFocusBorderRadiusDesktop,
        contactFormFocusBorderRadiusTablet,
        contactFormFocusBorderRadiusMobile,
        contactFormFocusBorderRadiusLink,

        contactFormPlaceholderColor,

        contactFormSubmitAlignment,
        contactFormSubmitHeight,
        contactFormSubmitHeightUnits,
        contactFormSubmitWidthSelect,
        contactFormSubmitWidth,
        contactFormSubmitWidthUnits,
        contactFormSubmitColorSwitcher,
        contactFormSubmitColor,
        contactFormSubmitHoverColor,
        contactFormSubmitBgColorSwitcher,
        contactFormSubmitBgColor,
        contactFormSubmitBgHoverColor,
        contactFormSubmitGlobalTypoSwitcher,
        contactFormSubmitGlobalTypographyData,
        contactFormSubmitGlobalTypoType,
        contactFormSubmitGlobalTypoOption,
        contactFormSubmitFontFamily,
        contactFormSubmitFontSize,
        contactFormSubmitFontSizeUnits,
        contactFormSubmitFontWeight,
        contactFormSubmitFontStyle,
        contactFormSubmitTextTransform,
        contactFormSubmitTextDecoration,
        contactFormSubmitLetterSpacing,
        contactFormSubmitLetterSpacingUnits,
        contactFormSubmitLineHeight,
        contactFormSubmitLineHeightUnits,
        contactFormSubmitPaddingUnits,
        contactFormSubmitPaddingDesktop,
        contactFormSubmitPaddingTablet,
        contactFormSubmitPaddingMobile,
        contactFormSubmitPaddingLink,
        contactFormSubmitMarginUnits,
        contactFormSubmitMarginDesktop,
        contactFormSubmitMarginTablet,
        contactFormSubmitMarginMobile,
        contactFormSubmitMarginLink,
        contactFormSubmitBorder,
        contactFormSubmitBorderColorSwitcher,
        contactFormSubmitBorderColor,
        contactFormSubmitBorderHoverColor,
        contactFormSubmitBorderUnits,
        contactFormSubmitBorderDesktop,
        contactFormSubmitBorderTablet,
        contactFormSubmitBorderMobile,
        contactFormSubmitBorderLink,
        contactFormSubmitBorderRadiusUnits,
        contactFormSubmitBorderRadiusDesktop,
        contactFormSubmitBorderRadiusTablet,
        contactFormSubmitBorderRadiusMobile,
        contactFormSubmitBorderRadiusLink,

        contactFormSuccessColor,
        contactFormSuccessBgColor,
        contactFormSuccessGlobalTypoSwitcher,
        contactFormSuccessGlobalTypographyData,
        contactFormSuccessGlobalTypoType,
        contactFormSuccessGlobalTypoOption,
        contactFormSuccessFontFamily,
        contactFormSuccessFontSize,
        contactFormSuccessFontSizeUnits,
        contactFormSuccessFontWeight,
        contactFormSuccessFontStyle,
        contactFormSuccessTextTransform,
        contactFormSuccessTextDecoration,
        contactFormSuccessLetterSpacing,
        contactFormSuccessLetterSpacingUnits,
        contactFormSuccessLineHeight,
        contactFormSuccessLineHeightUnits,
        contactFormSuccessBorder,
        contactFormSuccessBorderColorSwitcher,
        contactFormSuccessBorderColor,
        contactFormSuccessBorderHoverColor,
        contactFormSuccessBorderUnits,
        contactFormSuccessBorderDesktop,
        contactFormSuccessBorderTablet,
        contactFormSuccessBorderMobile,
        contactFormSuccessBorderLink,
        contactFormSuccessBorderRadiusUnits,
        contactFormSuccessBorderRadiusDesktop,
        contactFormSuccessBorderRadiusTablet,
        contactFormSuccessBorderRadiusMobile,
        contactFormSuccessBorderRadiusLink,

        contactFormErrorColor,
        contactFormErrorGlobalTypoSwitcher,
        contactFormErrorGlobalTypographyData,
        contactFormErrorGlobalTypoType,
        contactFormErrorGlobalTypoOption,
        contactFormErrorFontFamily,
        contactFormErrorFontSize,
        contactFormErrorFontSizeUnits,
        contactFormErrorFontWeight,
        contactFormErrorFontStyle,
        contactFormErrorTextTransform,
        contactFormErrorTextDecoration,
        contactFormErrorLetterSpacing,
        contactFormErrorLetterSpacingUnits,
        contactFormErrorLineHeight,
        contactFormErrorLineHeightUnits,
        contactFormErrorPaddingUnits,
        contactFormErrorPaddingDesktop,
        contactFormErrorPaddingTablet,
        contactFormErrorPaddingMobile,
        contactFormErrorPaddingLink,
        contactFormErrorMarginUnits,
        contactFormErrorMarginDesktop,
        contactFormErrorMarginTablet,
        contactFormErrorMarginMobile,
        contactFormErrorMarginLink,

        contactFormGlobalPaddingUnits,
        contactFormGlobalPaddingDesktop,
        contactFormGlobalPaddingTablet,
        contactFormGlobalPaddingMobile,
        contactFormGlobalPaddingLink,
        contactFormGlobalMarginUnits,
        contactFormGlobalMarginDesktop,
        contactFormGlobalMarginTablet,
        contactFormGlobalMarginMobile,
        contactFormGlobalMarginLink,
        contactFormGlobalBgColorSwitcher,
        contactFormGlobalBgColor,
        contactFormGlobalBgHoverColor,
        contactFormGlobalBorder,
        contactFormGlobalBorderColorSwitcher,
        contactFormGlobalBorderColor,
        contactFormGlobalBorderHoverColor,
        contactFormGlobalBorderUnits,
        contactFormGlobalBorderDesktop,
        contactFormGlobalBorderTablet,
        contactFormGlobalBorderMobile,
        contactFormGlobalBorderLink,
        contactFormGlobalBorderRadiusUnits,
        contactFormGlobalBorderRadiusDesktop,
        contactFormGlobalBorderRadiusTablet,
        contactFormGlobalBorderRadiusMobile,
        contactFormGlobalBorderRadiusLink,

        contactFormGlobalBoxShadowSwitcher,
        contactFormGlobalBoxShadowValues,
        contactFormGlobalBoxShadowCssValue,
        contactFormGlobalBoxShadowHoverValues,
        contactFormGlobalBoxShadowHoverCssValue,
        blockStyle,

        contactFormDesktopSwitcher,
        contactFormTabletSwitcher,
        contactFormMobileSwitcher,

        contactFormCustomCSS,
        contactFormGlobalWraperID,
        contactFormGlobalWraperClass,

        // Position
        contactFormPositionType,
        contactFormHZOrientationType,
        contactFormVROrientationType,
        contactFormHZLeftOffset,
        contactFormHZLeftOffsetUnits,
        contactFormHZRightOffset,
        contactFormHZRightOffsetUnits,
        contactFormVRTopOffset,
        contactFormVRTopOffsetUnits,
        contactFormVRBottomOffset,
        contactFormVRBottomOffsetUnits,
    } = attributes;

    /** Default padding for desktop (using desktop_padding) */
	const contactFormDesktopPadding = `${contactFormPaddingDesktop?.top}${contactFormPaddingUnits?.Desktop} ${contactFormPaddingDesktop?.right}${contactFormPaddingUnits?.Desktop} ${contactFormPaddingDesktop?.bottom}${contactFormPaddingUnits?.Desktop} ${contactFormPaddingDesktop?.left}${contactFormPaddingUnits?.Desktop}`;
	const contactFormTabletPadding = `${contactFormPaddingTablet?.top}${contactFormPaddingUnits?.Tablet} ${contactFormPaddingTablet?.right}${contactFormPaddingUnits?.Tablet} ${contactFormPaddingTablet?.bottom}${contactFormPaddingUnits?.Tablet} ${contactFormPaddingTablet?.left}${contactFormPaddingUnits?.Tablet}`;
	const contactFormMobilePadding = `${contactFormPaddingMobile?.top}${contactFormPaddingUnits?.Mobile} ${contactFormPaddingMobile?.right}${contactFormPaddingUnits?.Mobile} ${contactFormPaddingMobile?.bottom}${contactFormPaddingUnits?.Mobile} ${contactFormPaddingMobile?.left}${contactFormPaddingUnits?.Mobile}`;

    /** Default margin for desktop (using desktop_margin) */
	const contactFormDesktopMargin = `${contactFormMarginDesktop?.top}${contactFormMarginUnits?.Desktop} ${contactFormMarginDesktop?.right}${contactFormMarginUnits?.Desktop} ${contactFormMarginDesktop?.bottom}${contactFormMarginUnits?.Desktop} ${contactFormMarginDesktop?.left}${contactFormMarginUnits?.Desktop}`;
	const contactFormTabletMargin = `${contactFormMarginTablet?.top}${contactFormMarginUnits?.Tablet} ${contactFormMarginTablet?.right}${contactFormMarginUnits?.Tablet} ${contactFormMarginTablet?.bottom}${contactFormMarginUnits?.Tablet} ${contactFormMarginTablet?.left}${contactFormMarginUnits?.Tablet}`;
	const contactFormMobileMargin = `${contactFormMarginMobile?.top}${contactFormMarginUnits?.Mobile} ${contactFormMarginMobile?.right}${contactFormMarginUnits?.Mobile} ${contactFormMarginMobile?.bottom}${contactFormMarginUnits?.Mobile} ${contactFormMarginMobile?.left}${contactFormMarginUnits?.Mobile}`;

    const contactFormBorderDesktopWidth = `${contactFormBorderDesktop?.top}${contactFormBorderUnits?.Desktop} ${contactFormBorderDesktop?.right}${contactFormBorderUnits?.Desktop} ${contactFormBorderDesktop?.bottom}${contactFormBorderUnits?.Desktop} ${contactFormBorderDesktop?.left}${contactFormBorderUnits?.Desktop}`;
	const contactFormBorderTabletWidth = `${contactFormBorderTablet?.top}${contactFormBorderUnits?.Tablet} ${contactFormBorderTablet?.right}${contactFormBorderUnits?.Tablet} ${contactFormBorderTablet?.bottom}${contactFormBorderUnits?.Tablet} ${contactFormBorderTablet?.left}${contactFormBorderUnits?.Tablet}`;
	const contactFormBorderMobileWidth = `${contactFormBorderMobile?.top}${contactFormBorderUnits?.Mobile} ${contactFormBorderMobile?.right}${contactFormBorderUnits?.Mobile} ${contactFormBorderMobile?.bottom}${contactFormBorderUnits?.Mobile} ${contactFormBorderMobile?.left}${contactFormBorderUnits?.Mobile}`;

    const contactFormBorderRadiusDesktopWidth = `${contactFormBorderRadiusDesktop?.top}${contactFormBorderRadiusUnits?.Desktop} ${contactFormBorderRadiusDesktop?.right}${contactFormBorderRadiusUnits?.Desktop} ${contactFormBorderRadiusDesktop?.bottom}${contactFormBorderRadiusUnits?.Desktop} ${contactFormBorderRadiusDesktop?.left}${contactFormBorderRadiusUnits?.Desktop}`;
	const contactFormBorderRadiusTabletWidth = `${contactFormBorderRadiusTablet?.top}${contactFormBorderRadiusUnits?.Tablet} ${contactFormBorderRadiusTablet?.right}${contactFormBorderRadiusUnits?.Tablet} ${contactFormBorderRadiusTablet?.bottom}${contactFormBorderRadiusUnits?.Tablet} ${contactFormBorderRadiusTablet?.left}${contactFormBorderRadiusUnits?.Tablet}`;
	const contactFormBorderRadiusMobileWidth = `${contactFormBorderRadiusMobile?.top}${contactFormBorderRadiusUnits?.Mobile} ${contactFormBorderRadiusMobile?.right}${contactFormBorderRadiusUnits?.Mobile} ${contactFormBorderRadiusMobile?.bottom}${contactFormBorderRadiusUnits?.Mobile} ${contactFormBorderRadiusMobile?.left}${contactFormBorderRadiusUnits?.Mobile}`;

    const contactFormFocusBorderDesktopWidth = `${contactFormFocusBorderDesktop?.top}${contactFormFocusBorderUnits?.Desktop} ${contactFormFocusBorderDesktop?.right}${contactFormFocusBorderUnits?.Desktop} ${contactFormFocusBorderDesktop?.bottom}${contactFormFocusBorderUnits?.Desktop} ${contactFormFocusBorderDesktop?.left}${contactFormFocusBorderUnits?.Desktop}`;
	const contactFormFocusBorderTabletWidth = `${contactFormFocusBorderTablet?.top}${contactFormFocusBorderUnits?.Tablet} ${contactFormFocusBorderTablet?.right}${contactFormFocusBorderUnits?.Tablet} ${contactFormFocusBorderTablet?.bottom}${contactFormFocusBorderUnits?.Tablet} ${contactFormFocusBorderTablet?.left}${contactFormFocusBorderUnits?.Tablet}`;
	const contactFormFocusBorderMobileWidth = `${contactFormFocusBorderMobile?.top}${contactFormFocusBorderUnits?.Mobile} ${contactFormFocusBorderMobile?.right}${contactFormFocusBorderUnits?.Mobile} ${contactFormFocusBorderMobile?.bottom}${contactFormFocusBorderUnits?.Mobile} ${contactFormFocusBorderMobile?.left}${contactFormFocusBorderUnits?.Mobile}`;

    const contactFormFocusBorderRadiusDesktopWidth = `${contactFormFocusBorderRadiusDesktop?.top}${contactFormFocusBorderRadiusUnits?.Desktop} ${contactFormFocusBorderRadiusDesktop?.right}${contactFormFocusBorderRadiusUnits?.Desktop} ${contactFormFocusBorderRadiusDesktop?.bottom}${contactFormFocusBorderRadiusUnits?.Desktop} ${contactFormFocusBorderRadiusDesktop?.left}${contactFormFocusBorderRadiusUnits?.Desktop}`;
	const contactFormFocusBorderRadiusTabletWidth = `${contactFormFocusBorderRadiusTablet?.top}${contactFormFocusBorderRadiusUnits?.Tablet} ${contactFormFocusBorderRadiusTablet?.right}${contactFormFocusBorderRadiusUnits?.Tablet} ${contactFormFocusBorderRadiusTablet?.bottom}${contactFormFocusBorderRadiusUnits?.Tablet} ${contactFormFocusBorderRadiusTablet?.left}${contactFormFocusBorderRadiusUnits?.Tablet}`;
	const contactFormFocusBorderRadiusMobileWidth = `${contactFormFocusBorderRadiusMobile?.top}${contactFormFocusBorderRadiusUnits?.Mobile} ${contactFormFocusBorderRadiusMobile?.right}${contactFormFocusBorderRadiusUnits?.Mobile} ${contactFormFocusBorderRadiusMobile?.bottom}${contactFormFocusBorderRadiusUnits?.Mobile} ${contactFormFocusBorderRadiusMobile?.left}${contactFormFocusBorderRadiusUnits?.Mobile}`;

    /** Default padding for Submit */
	const contactFormSubmitDesktopPadding = `${contactFormSubmitPaddingDesktop?.top}${contactFormSubmitPaddingUnits?.Desktop} ${contactFormSubmitPaddingDesktop?.right}${contactFormSubmitPaddingUnits?.Desktop} ${contactFormSubmitPaddingDesktop?.bottom}${contactFormSubmitPaddingUnits?.Desktop} ${contactFormSubmitPaddingDesktop?.left}${contactFormSubmitPaddingUnits?.Desktop}`;
	const contactFormSubmitTabletPadding = `${contactFormSubmitPaddingTablet?.top}${contactFormSubmitPaddingUnits?.Tablet} ${contactFormSubmitPaddingTablet?.right}${contactFormSubmitPaddingUnits?.Tablet} ${contactFormSubmitPaddingTablet?.bottom}${contactFormSubmitPaddingUnits?.Tablet} ${contactFormSubmitPaddingTablet?.left}${contactFormSubmitPaddingUnits?.Tablet}`;
	const contactFormSubmitMobilePadding = `${contactFormSubmitPaddingMobile?.top}${contactFormSubmitPaddingUnits?.Mobile} ${contactFormSubmitPaddingMobile?.right}${contactFormSubmitPaddingUnits?.Mobile} ${contactFormSubmitPaddingMobile?.bottom}${contactFormSubmitPaddingUnits?.Mobile} ${contactFormSubmitPaddingMobile?.left}${contactFormSubmitPaddingUnits?.Mobile}`;

    const contactFormSubmitDesktopMargin = `${contactFormSubmitMarginDesktop?.top}${contactFormSubmitMarginUnits?.Desktop} ${contactFormSubmitMarginDesktop?.right}${contactFormSubmitMarginUnits?.Desktop} ${contactFormSubmitMarginDesktop?.bottom}${contactFormSubmitMarginUnits?.Desktop} ${contactFormSubmitMarginDesktop?.left}${contactFormSubmitMarginUnits?.Desktop}`;
	const contactFormSubmitTabletMargin = `${contactFormSubmitMarginTablet?.top}${contactFormSubmitMarginUnits?.Tablet} ${contactFormSubmitMarginTablet?.right}${contactFormSubmitMarginUnits?.Tablet} ${contactFormSubmitMarginTablet?.bottom}${contactFormSubmitMarginUnits?.Tablet} ${contactFormSubmitMarginTablet?.left}${contactFormSubmitMarginUnits?.Tablet}`;
	const contactFormSubmitMobileMargin = `${contactFormSubmitMarginMobile?.top}${contactFormSubmitMarginUnits?.Mobile} ${contactFormSubmitMarginMobile?.right}${contactFormSubmitMarginUnits?.Mobile} ${contactFormSubmitMarginMobile?.bottom}${contactFormSubmitMarginUnits?.Mobile} ${contactFormSubmitMarginMobile?.left}${contactFormSubmitMarginUnits?.Mobile}`;

    /** Default border for Submit */
	const contactFormSubmitDesktopBorderWidth = `${contactFormSubmitBorderDesktop?.top}${contactFormSubmitBorderUnits?.Desktop} ${contactFormSubmitBorderDesktop?.right}${contactFormSubmitBorderUnits?.Desktop} ${contactFormSubmitBorderDesktop?.bottom}${contactFormSubmitBorderUnits?.Desktop} ${contactFormSubmitBorderDesktop?.left}${contactFormSubmitBorderUnits?.Desktop}`;
	const contactFormSubmitTabletBorderWidth = `${contactFormSubmitBorderTablet?.top}${contactFormSubmitBorderUnits?.Tablet} ${contactFormSubmitBorderTablet?.right}${contactFormSubmitBorderUnits?.Tablet} ${contactFormSubmitBorderTablet?.bottom}${contactFormSubmitBorderUnits?.Tablet} ${contactFormSubmitBorderTablet?.left}${contactFormSubmitBorderUnits?.Tablet}`;
	const contactFormSubmitMobileBorderWidth = `${contactFormSubmitBorderMobile?.top}${contactFormSubmitBorderUnits?.Mobile} ${contactFormSubmitBorderMobile?.right}${contactFormSubmitBorderUnits?.Mobile} ${contactFormSubmitBorderMobile?.bottom}${contactFormSubmitBorderUnits?.Mobile} ${contactFormSubmitBorderMobile?.left}${contactFormSubmitBorderUnits?.Mobile}`;

    /** Default border radius for Submit */
	const contactFormSubmitDesktopBorderRadiusWidth = `${contactFormSubmitBorderRadiusDesktop?.top}${contactFormSubmitBorderRadiusUnits?.Desktop} ${contactFormSubmitBorderRadiusDesktop?.right}${contactFormSubmitBorderRadiusUnits?.Desktop} ${contactFormSubmitBorderRadiusDesktop?.bottom}${contactFormSubmitBorderRadiusUnits?.Desktop} ${contactFormSubmitBorderRadiusDesktop?.left}${contactFormSubmitBorderRadiusUnits?.Desktop}`;
	const contactFormSubmitTabletBorderRadiusWidth = `${contactFormSubmitBorderRadiusTablet?.top}${contactFormSubmitBorderRadiusUnits?.Tablet} ${contactFormSubmitBorderRadiusTablet?.right}${contactFormSubmitBorderRadiusUnits?.Tablet} ${contactFormSubmitBorderRadiusTablet?.bottom}${contactFormSubmitBorderRadiusUnits?.Tablet} ${contactFormSubmitBorderRadiusTablet?.left}${contactFormSubmitBorderRadiusUnits?.Tablet}`;
	const contactFormSubmitMobileBorderRadiusWidth = `${contactFormSubmitBorderRadiusMobile?.top}${contactFormSubmitBorderRadiusUnits?.Mobile} ${contactFormSubmitBorderRadiusUnits?.Mobile} ${contactFormSubmitBorderRadiusDesktop?.bottom}${contactFormSubmitBorderRadiusUnits?.Mobile} ${contactFormSubmitBorderRadiusDesktop?.left}${contactFormSubmitBorderRadiusUnits?.Mobile}`;

    /** Default border for Success */
	const contactFormSuccessDesktopBorderWidth = `${contactFormSuccessBorderDesktop?.top}${contactFormSuccessBorderUnits?.Desktop} ${contactFormSuccessBorderDesktop?.right}${contactFormSuccessBorderUnits?.Desktop} ${contactFormSuccessBorderDesktop?.bottom}${contactFormSuccessBorderUnits?.Desktop} ${contactFormSuccessBorderDesktop?.left}${contactFormSuccessBorderUnits?.Desktop}`;
	const contactFormSuccessTabletBorderWidth = `${contactFormSuccessBorderTablet?.top}${contactFormSuccessBorderUnits?.Tablet} ${contactFormSuccessBorderTablet?.right}${contactFormSuccessBorderUnits?.Tablet} ${contactFormSuccessBorderTablet?.bottom}${contactFormSuccessBorderUnits?.Tablet} ${contactFormSuccessBorderTablet?.left}${contactFormSuccessBorderUnits?.Tablet}`;
	const contactFormSuccessMobileBorderWidth = `${contactFormSuccessBorderMobile?.top}${contactFormSuccessBorderUnits?.Mobile} ${contactFormSuccessBorderMobile?.right}${contactFormSuccessBorderUnits?.Mobile} ${contactFormSuccessBorderMobile?.bottom}${contactFormSuccessBorderUnits?.Mobile} ${contactFormSuccessBorderMobile?.left}${contactFormSuccessBorderUnits?.Mobile}`;

    /** Default border radius for Success */
	const contactFormSuccessDesktopBorderRadiusWidth = `${contactFormSuccessBorderRadiusDesktop?.top}${contactFormSuccessBorderRadiusUnits?.Desktop} ${contactFormSuccessBorderRadiusDesktop?.right}${contactFormSuccessBorderRadiusUnits?.Desktop} ${contactFormSuccessBorderRadiusDesktop?.bottom}${contactFormSuccessBorderRadiusUnits?.Desktop} ${contactFormSuccessBorderRadiusDesktop?.left}${contactFormSuccessBorderRadiusUnits?.Desktop}`;
	const contactFormSuccessTabletBorderRadiusWidth = `${contactFormSuccessBorderRadiusTablet?.top}${contactFormSuccessBorderRadiusUnits?.Tablet} ${contactFormSuccessBorderRadiusTablet?.right}${contactFormSuccessBorderRadiusUnits?.Tablet} ${contactFormSuccessBorderRadiusTablet?.bottom}${contactFormSuccessBorderRadiusUnits?.Tablet} ${contactFormSuccessBorderRadiusTablet?.left}${contactFormSuccessBorderRadiusUnits?.Tablet}`;
	const contactFormSuccessMobileBorderRadiusWidth = `${contactFormSuccessBorderRadiusMobile?.top}${contactFormSuccessBorderRadiusUnits?.Mobile} ${contactFormSuccessBorderRadiusUnits?.Mobile} ${contactFormSuccessBorderRadiusDesktop?.bottom}${contactFormSuccessBorderRadiusUnits?.Mobile} ${contactFormSuccessBorderRadiusDesktop?.left}${contactFormSuccessBorderRadiusUnits?.Mobile}`;

    /** Default padding for Error */
	const contactFormErrorDesktopPadding = `${contactFormErrorPaddingDesktop?.top}${contactFormErrorPaddingUnits?.Desktop} ${contactFormErrorPaddingDesktop?.right}${contactFormErrorPaddingUnits?.Desktop} ${contactFormErrorPaddingDesktop?.bottom}${contactFormErrorPaddingUnits?.Desktop} ${contactFormErrorPaddingDesktop?.left}${contactFormErrorPaddingUnits?.Desktop}`;
	const contactFormErrorTabletPadding = `${contactFormErrorPaddingTablet?.top}${contactFormErrorPaddingUnits?.Tablet} ${contactFormErrorPaddingTablet?.right}${contactFormErrorPaddingUnits?.Tablet} ${contactFormErrorPaddingTablet?.bottom}${contactFormErrorPaddingUnits?.Tablet} ${contactFormErrorPaddingTablet?.left}${contactFormErrorPaddingUnits?.Tablet}`;
	const contactFormErrorMobilePadding = `${contactFormErrorPaddingMobile?.top}${contactFormErrorPaddingUnits?.Mobile} ${contactFormErrorPaddingMobile?.right}${contactFormErrorPaddingUnits?.Mobile} ${contactFormErrorPaddingMobile?.bottom}${contactFormErrorPaddingUnits?.Mobile} ${contactFormErrorPaddingMobile?.left}${contactFormErrorPaddingUnits?.Mobile}`;

    /** Default margin for Error */
	const contactFormErrorDesktopMargin = `${contactFormErrorMarginDesktop?.top}${contactFormErrorMarginUnits?.Desktop} ${contactFormErrorMarginDesktop?.right}${contactFormErrorMarginUnits?.Desktop} ${contactFormErrorMarginDesktop?.bottom}${contactFormErrorMarginUnits?.Desktop} ${contactFormErrorMarginDesktop?.left}${contactFormErrorMarginUnits?.Desktop}`;
	const contactFormErrorTabletMargin = `${contactFormErrorMarginTablet?.top}${contactFormErrorMarginUnits?.Tablet} ${contactFormErrorMarginTablet?.right}${contactFormErrorMarginUnits?.Tablet} ${contactFormErrorMarginTablet?.bottom}${contactFormErrorMarginUnits?.Tablet} ${contactFormErrorMarginTablet?.left}${contactFormErrorMarginUnits?.Tablet}`;
	const contactFormErrorMobileMargin = `${contactFormErrorMarginMobile?.top}${contactFormErrorMarginUnits?.Mobile} ${contactFormErrorMarginMobile?.right}${contactFormErrorMarginUnits?.Mobile} ${contactFormErrorMarginMobile?.bottom}${contactFormErrorMarginUnits?.Mobile} ${contactFormErrorMarginMobile?.left}${contactFormErrorMarginUnits?.Mobile}`;

    /** Default padding for desktop (using desktop_padding) */
	const DesktopPadding = `${contactFormGlobalPaddingDesktop?.top}${contactFormGlobalPaddingUnits?.Desktop} ${contactFormGlobalPaddingDesktop?.right}${contactFormGlobalPaddingUnits?.Desktop} ${contactFormGlobalPaddingDesktop?.bottom}${contactFormGlobalPaddingUnits?.Desktop} ${contactFormGlobalPaddingDesktop?.left}${contactFormGlobalPaddingUnits?.Desktop}`;
	const TabletPadding = `${contactFormGlobalPaddingTablet?.top}${contactFormGlobalPaddingUnits?.Tablet} ${contactFormGlobalPaddingTablet?.right}${contactFormGlobalPaddingUnits?.Tablet} ${contactFormGlobalPaddingTablet?.bottom}${contactFormGlobalPaddingUnits?.Tablet} ${contactFormGlobalPaddingTablet?.left}${contactFormGlobalPaddingUnits?.Tablet}`;
	const MobilePadding = `${contactFormGlobalPaddingMobile?.top}${contactFormGlobalPaddingUnits?.Mobile} ${contactFormGlobalPaddingMobile?.right}${contactFormGlobalPaddingUnits?.Mobile} ${contactFormGlobalPaddingMobile?.bottom}${contactFormGlobalPaddingUnits?.Mobile} ${contactFormGlobalPaddingMobile?.left}${contactFormGlobalPaddingUnits?.Mobile}`;

    const DesktopMargin = `${contactFormGlobalMarginDesktop?.top}${contactFormGlobalMarginUnits?.Desktop} ${contactFormGlobalMarginDesktop?.right}${contactFormGlobalMarginUnits?.Desktop} ${contactFormGlobalMarginDesktop?.bottom}${contactFormGlobalMarginUnits?.Desktop} ${contactFormGlobalMarginDesktop?.left}${contactFormGlobalMarginUnits?.Desktop}`;
	const TabletMargin = `${contactFormGlobalMarginTablet?.top}${contactFormGlobalMarginUnits?.Tablet} ${contactFormGlobalMarginTablet?.right}${contactFormGlobalMarginUnits?.Tablet} ${contactFormGlobalMarginTablet?.bottom}${contactFormGlobalMarginUnits?.Tablet} ${contactFormGlobalMarginTablet?.left}${contactFormGlobalMarginUnits?.Tablet}`;
	const MobileMargin = `${contactFormGlobalMarginMobile?.top}${contactFormGlobalMarginUnits?.Mobile} ${contactFormGlobalMarginMobile?.right}${contactFormGlobalMarginUnits?.Mobile} ${contactFormGlobalMarginMobile?.bottom}${contactFormGlobalMarginUnits?.Mobile} ${contactFormGlobalMarginMobile?.left}${contactFormGlobalMarginUnits?.Mobile}`;

    const BorderDesktopWidth = `${contactFormGlobalBorderDesktop?.top}${contactFormGlobalBorderUnits?.Desktop} ${contactFormGlobalBorderDesktop?.right}${contactFormGlobalBorderUnits?.Desktop} ${contactFormGlobalBorderDesktop?.bottom}${contactFormGlobalBorderUnits?.Desktop} ${contactFormGlobalBorderDesktop?.left}${contactFormGlobalBorderUnits?.Desktop}`;
	const BorderTabletWidth = `${contactFormGlobalBorderTablet?.top}${contactFormGlobalBorderUnits?.Tablet} ${contactFormGlobalBorderTablet?.right}${contactFormGlobalBorderUnits?.Tablet} ${contactFormGlobalBorderTablet?.bottom}${contactFormGlobalBorderUnits?.Tablet} ${contactFormGlobalBorderTablet?.left}${contactFormGlobalBorderUnits?.Tablet}`;
	const BorderMobileWidth = `${contactFormGlobalBorderMobile?.top}${contactFormGlobalBorderUnits?.Mobile} ${contactFormGlobalBorderMobile?.right}${contactFormGlobalBorderUnits?.Mobile} ${contactFormGlobalBorderMobile?.bottom}${contactFormGlobalBorderUnits?.Mobile} ${contactFormGlobalBorderMobile?.left}${contactFormGlobalBorderUnits?.Mobile}`;

    const BorderRadiusDesktopWidth = `${contactFormGlobalBorderRadiusDesktop?.top}${contactFormGlobalBorderRadiusUnits?.Desktop} ${contactFormGlobalBorderRadiusDesktop?.right}${contactFormGlobalBorderRadiusUnits?.Desktop} ${contactFormGlobalBorderRadiusDesktop?.bottom}${contactFormGlobalBorderRadiusUnits?.Desktop} ${contactFormGlobalBorderRadiusDesktop?.left}${contactFormGlobalBorderRadiusUnits?.Desktop}`;
    const BorderRadiusTabletWidth = `${contactFormGlobalBorderRadiusTablet?.top}${contactFormGlobalBorderRadiusUnits?.Tablet} ${contactFormGlobalBorderRadiusTablet?.right}${contactFormGlobalBorderRadiusUnits?.Tablet} ${contactFormGlobalBorderRadiusTablet?.bottom}${contactFormGlobalBorderRadiusUnits?.Tablet} ${contactFormGlobalBorderRadiusTablet?.left}${contactFormGlobalBorderRadiusUnits?.Tablet}`;
    const BorderRadiusMobileWidth = `${contactFormGlobalBorderRadiusMobile?.top}${contactFormGlobalBorderRadiusUnits?.Mobile} ${contactFormGlobalBorderRadiusMobile?.right}${contactFormGlobalBorderRadiusUnits?.Mobile} ${contactFormGlobalBorderRadiusMobile?.bottom}${contactFormGlobalBorderRadiusUnits?.Mobile} ${contactFormGlobalBorderRadiusMobile?.left}${contactFormGlobalBorderRadiusUnits?.Mobile}`;

    const contactFormBlockStyle = `
    
        .${blockID}.fb-contact-form-wrapper {
            ${contactFormPositionType === 'default' ? `position: relative;` : ''}
            ${contactFormPositionType !== 'default' && contactFormPositionType !== 'relative' ? `width: 100%;` : ''}
            ${contactFormPositionType !== 'default' ? `position: ${contactFormPositionType};` : ''}
            ${contactFormPositionType !== 'default' && contactFormPositionType !== 'relative' && contactFormHZOrientationType === 'left' && contactFormHZLeftOffset?.Desktop ? `left: ${contactFormHZLeftOffset?.Desktop}${contactFormHZLeftOffsetUnits?.Desktop};` : ''}
            ${contactFormPositionType !== 'default' && contactFormPositionType !== 'relative' && contactFormHZOrientationType === 'right' && contactFormHZRightOffset?.Desktop ? `right: ${contactFormHZRightOffset?.Desktop}${contactFormHZRightOffsetUnits?.Desktop};` : ''}
            ${contactFormPositionType !== 'default' && contactFormPositionType !== 'relative' && contactFormVROrientationType === 'top' && contactFormVRTopOffset?.Desktop ? `top: ${contactFormVRTopOffset?.Desktop}${contactFormVRTopOffsetUnits?.Desktop};` : ''}
            ${contactFormPositionType !== 'default' && contactFormPositionType !== 'relative' && contactFormVROrientationType === 'bottom' && contactFormVRBottomOffset?.Desktop ? `bottom: ${contactFormVRBottomOffset?.Desktop}${contactFormVRBottomOffsetUnits?.Desktop};` : ''}
            ${contactFormGlobalBgColor ? `background-color: ${contactFormGlobalBgColor};` : ''};
            ${DesktopPadding && contactFormGlobalPaddingDesktop?.top ? `padding: ${DesktopPadding};` : ""}
            ${DesktopMargin && contactFormGlobalMarginDesktop?.top ? `margin: ${DesktopMargin};` : ""}
            ${contactFormGlobalBorder != "" ? `border: ${contactFormGlobalBorder};` : ""}
            ${BorderDesktopWidth && contactFormGlobalBorderDesktop?.top ? `border-width: ${BorderDesktopWidth};` : ""}
            ${BorderRadiusDesktopWidth && contactFormGlobalBorderRadiusDesktop?.top ? `border-radius: ${BorderRadiusDesktopWidth} !important;` : ""}
            ${contactFormGlobalBorderColor ? `border-color: ${contactFormGlobalBorderColor};` : ''};
            ${contactFormGlobalBoxShadowCssValue ? `box-shadow: ${contactFormGlobalBoxShadowCssValue};` : ''} 
            ${contactFormGlobalZIndex?.Desktop ? `z-index: ${contactFormGlobalZIndex?.Desktop};` : ''}
            ${contactFormOverflow !== 'default' ? `overflow: ${contactFormOverflow};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID}.fb-contact-form-wrapper:hover {
            ${contactFormGlobalBgHoverColor ? `background-color: ${contactFormGlobalBgHoverColor};` : ''}
            ${contactFormGlobalBorderHoverColor ? `border-color: ${contactFormGlobalBorderHoverColor};` : ''}
            ${contactFormGlobalBoxShadowHoverCssValue ? `box-shadow: ${contactFormGlobalBoxShadowHoverCssValue};` : ''} 
        }

        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-error-message .wpcf7-not-valid-tip {
            display: none;
        }

        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input::-webkit-input-placeholder,
        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea::-webkit-input-placeholder {
            opacity: 0;
            visibility: hidden;
        }

        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input::-moz-placeholder,
        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea::-moz-placeholder {
            opacity: 0;
            visibility: hidden;
        }

        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input:-ms-input-placeholder,
        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea:-ms-input-placeholder {
            opacity: 0;
            visibility: hidden;
        }

        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input:-moz-placeholder,
        .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea:-moz-placeholder {
            opacity: 0;
            visibility: hidden;
        }

        .${blockID}.fb-contact-form-wrapper .wpcf7-form label {
            ${contactFormLabelColor ? `color: ${contactFormLabelColor};` : ''}

            ${contactFormLabelGlobalTypoSwitcher?.fontFamily === true && contactFormLabelGlobalTypographyData?.fontFamily ? `font-family: ${contactFormLabelGlobalTypographyData?.fontFamily};` : ''}
            ${contactFormLabelGlobalTypoSwitcher?.fontSize === true && contactFormLabelGlobalTypographyData?.fontSize ? `font-size: ${contactFormLabelGlobalTypographyData?.fontSize};` : ''}
            ${contactFormLabelGlobalTypoSwitcher?.fontWeight === true && contactFormLabelGlobalTypographyData?.fontWeight ? `font-weight: ${contactFormLabelGlobalTypographyData?.fontWeight};` : ''}
            ${contactFormLabelGlobalTypoSwitcher?.fontStyle === true && contactFormLabelGlobalTypographyData?.fontStyle ? `font-style: ${contactFormLabelGlobalTypographyData?.fontStyle};` : ''}
            ${contactFormLabelGlobalTypoSwitcher?.textTransform === true && contactFormLabelGlobalTypographyData?.textTransform ? `text-transform: ${contactFormLabelGlobalTypographyData?.textTransform};` : ''}
            ${contactFormLabelGlobalTypoSwitcher?.textDecoration === true && contactFormLabelGlobalTypographyData?.textDecoration ? `text-decoration: ${contactFormLabelGlobalTypographyData?.textDecoration};` : ''}
            ${contactFormLabelGlobalTypoSwitcher?.letterSpacing === true && contactFormLabelGlobalTypographyData?.letterSpacing ? `letter-spacing: ${contactFormLabelGlobalTypographyData?.letterSpacing};` : ''}
            ${contactFormLabelGlobalTypoSwitcher?.lineHeight === true && contactFormLabelGlobalTypographyData?.lineHeight ? `line-height: ${contactFormLabelGlobalTypographyData?.lineHeight};` : ''}
                
            ${contactFormLabelGlobalTypoSwitcher?.fontFamily === false && contactFormLabelFontFamily && contactFormLabelFontFamily !== 'Default' ? `font-family: ${contactFormLabelFontFamily};` : ""}
            ${contactFormLabelGlobalTypoSwitcher?.fontSize === false && contactFormLabelFontSize?.Desktop != "" ? `font-size: ${contactFormLabelFontSize?.Desktop}${contactFormLabelFontSizeUnits?.Desktop};` : ''}
            ${contactFormLabelGlobalTypoSwitcher?.fontWeight === false && contactFormLabelFontWeight ? `font-weight: ${contactFormLabelFontWeight};` : ""}
            ${contactFormLabelGlobalTypoSwitcher?.fontStyle === false && contactFormLabelFontStyle ? `font-style: ${contactFormLabelFontStyle};` : ""}
            ${contactFormLabelGlobalTypoSwitcher?.textTransform === false && contactFormLabelTextTransform ? `text-transform: ${contactFormLabelTextTransform};` : ""}
            ${contactFormLabelGlobalTypoSwitcher?.textDecoration === false && contactFormLabelTextDecoration ? `text-decoration: ${contactFormLabelTextDecoration};` : ""}
            ${contactFormLabelGlobalTypoSwitcher?.letterSpacing === false && contactFormLabelLetterSpacing?.Desktop && contactFormLabelLetterSpacingUnits?.Desktop ? `letter-spacing: ${contactFormLabelLetterSpacing?.Desktop}${contactFormLabelLetterSpacingUnits?.Desktop};` : ''}
            ${contactFormLabelGlobalTypoSwitcher?.lineHeight === false && contactFormLabelLineHeight?.Desktop && contactFormLabelLineHeightUnits?.Desktop ? `line-height: ${contactFormLabelLineHeight?.Desktop}${contactFormLabelLineHeightUnits?.Desktop};` : ''}
        }
        .${blockID}.fb-contact-form-wrapper .wpcf7-form label:hover {
            ${contactFormLabelHoverColor ? `color: ${contactFormLabelHoverColor};` : ''}
        }


        .${blockID}.fb-contact-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
        .${blockID}.fb-contact-form-wrapper textarea, 
        .${blockID}.fb-contact-form-wrapper select {
            ${contactFormInputBgColor ? `background-color: ${contactFormInputBgColor};` : ""}
            ${contactFormInputColor ? `color: ${contactFormInputColor};` : ""}

            ${contactFormInputGlobalTypoSwitcher?.fontFamily === true && contactFormInputGlobalTypographyData?.fontFamily ? `font-family: ${contactFormInputGlobalTypographyData?.fontFamily};` : ''}
            ${contactFormInputGlobalTypoSwitcher?.fontSize === true && contactFormInputGlobalTypographyData?.fontSize ? `font-size: ${contactFormInputGlobalTypographyData?.fontSize};` : ''}
            ${contactFormInputGlobalTypoSwitcher?.fontWeight === true && contactFormInputGlobalTypographyData?.fontWeight ? `font-weight: ${contactFormInputGlobalTypographyData?.fontWeight};` : ''}
            ${contactFormInputGlobalTypoSwitcher?.fontStyle === true && contactFormInputGlobalTypographyData?.fontStyle ? `font-style: ${contactFormInputGlobalTypographyData?.fontStyle};` : ''}
            ${contactFormInputGlobalTypoSwitcher?.textTransform === true && contactFormInputGlobalTypographyData?.textTransform ? `text-transform: ${contactFormInputGlobalTypographyData?.textTransform};` : ''}
            ${contactFormInputGlobalTypoSwitcher?.textDecoration === true && contactFormInputGlobalTypographyData?.textDecoration ? `text-decoration: ${contactFormInputGlobalTypographyData?.textDecoration};` : ''}
            ${contactFormInputGlobalTypoSwitcher?.letterSpacing === true && contactFormInputGlobalTypographyData?.letterSpacing ? `letter-spacing: ${contactFormInputGlobalTypographyData?.letterSpacing};` : ''}
            ${contactFormInputGlobalTypoSwitcher?.lineHeight === true && contactFormInputGlobalTypographyData?.lineHeight ? `line-height: ${contactFormInputGlobalTypographyData?.lineHeight};` : ''}
                
            ${contactFormInputGlobalTypoSwitcher?.fontFamily === false && contactFormInputFontFamily && contactFormInputFontFamily !== 'Default' ? `font-family: ${contactFormInputFontFamily};` : ""}
            ${contactFormInputGlobalTypoSwitcher?.fontSize === false && contactFormInputFontSize?.Desktop != "" ? `font-size: ${contactFormInputFontSize?.Desktop}${contactFormInputFontSizeUnits?.Desktop};` : ''}
            ${contactFormInputGlobalTypoSwitcher?.fontWeight === false && contactFormInputFontWeight ? `font-weight: ${contactFormInputFontWeight};` : ""}
            ${contactFormInputGlobalTypoSwitcher?.fontStyle === false && contactFormInputFontStyle ? `font-style: ${contactFormInputFontStyle};` : ""}
            ${contactFormInputGlobalTypoSwitcher?.textTransform === false && contactFormInputTextTransform ? `text-transform: ${contactFormInputTextTransform};` : ""}
            ${contactFormInputGlobalTypoSwitcher?.textDecoration === false && contactFormInputTextDecoration ? `text-decoration: ${contactFormInputTextDecoration};` : ""}
            ${contactFormInputGlobalTypoSwitcher?.letterSpacing === false && contactFormInputLetterSpacing?.Desktop != "" ? `letter-spacing: ${contactFormInputLetterSpacing?.Desktop}${contactFormInputLetterSpacingUnits?.Desktop};` : ''}
            ${contactFormInputGlobalTypoSwitcher?.lineHeight === false && contactFormInputLineHeight?.Desktop != "" ? `line-height: ${contactFormInputLineHeight?.Desktop}${contactFormInputLineHeightUnits?.Desktop};` : ''}
            ${contactFormTextIndentSize?.Desktop != "" ? `text-indent: ${contactFormTextIndentSize?.Desktop}${contactFormTextIndentSizeUnits?.Desktop};` : ""}
            ${contactFormInputWidthSize?.Desktop != "" ? `width: ${contactFormInputWidthSize?.Desktop}${contactFormInputWidthSizeUnits?.Desktop};` : ""}
            ${contactFormInputHeightSize?.Desktop != "" ? `height: ${contactFormInputHeightSize?.Desktop}${contactFormInputHeightSizeUnits?.Desktop};` : ""}
            ${contactFormDesktopPadding && contactFormPaddingDesktop?.top ? `padding: ${contactFormDesktopPadding};` : ""}
            ${contactFormDesktopMargin && contactFormMarginDesktop?.top ? `margin: ${contactFormDesktopMargin};` : ""}
            ${contactFormBorder ? `border: ${contactFormBorder};` : ""}
            ${contactFormBorderDesktopWidth && contactFormBorderDesktop?.top ? `border-width: ${contactFormBorderDesktopWidth};` : ""}
            ${contactFormBorderColor ? `border-color: ${contactFormBorderColor};` : ""}
            ${contactFormBorderRadiusDesktopWidth && contactFormBorderRadiusDesktop?.top ? `border-radius: ${contactFormBorderRadiusDesktopWidth};` : ""}
            transition: all .3s ease-in-out;
        }

        .${blockID}.fb-contact-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
        .${blockID}.fb-contact-form-wrapper textarea:focus, 
        .${blockID}.fb-contact-form-wrapper select:focus {
            ${contactFormFocusBorder ? `border: ${contactFormFocusBorder};` : ""}
            ${contactFormFocusBorderDesktopWidth && contactFormFocusBorderDesktop?.top ? `border-width: ${contactFormFocusBorderDesktopWidth};` : ""}
            ${contactFormFocusBorderRadiusDesktopWidth && contactFormFocusBorderRadiusDesktop?.top ? `border-radius: ${contactFormFocusBorderRadiusDesktopWidth};` : ""}
            ${contactFormInputFocusColor ? `border-color: ${contactFormInputFocusColor};` : ""}
            box-shadow: none;
            outline: none;
        }

        .${blockID}.fb-contact-form-wrapper textarea {
            ${contactFormTextareaWidthSize?.Desktop != "" ? `width: ${contactFormTextareaWidthSize?.Desktop}${contactFormTextareaWidthSizeUnits?.Desktop};` : ""}
            ${contactFormTextareaHeightSize?.Desktop != "" ? `height: ${contactFormTextareaHeightSize?.Desktop}${contactFormTextareaHeightSizeUnits?.Desktop};` : ""}
        }

        .${blockID}.fb-contact-form-wrapper .wpcf7-form p {
            ${contactFormSpacingSize?.Desktop != "" ? `margin: ${contactFormSpacingSize?.Desktop}${contactFormSpacingUnits?.Desktop} 0;` : ""} 
        }

        .${blockID}.fb-contact-form-wrapper input::-webkit-input-placeholder,
        .${blockID}.fb-contact-form-wrapper textarea::-webkit-input-placeholder {
            ${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
            font-weight: 300;
        }

        .${blockID}.fb-contact-form-wrapper input::-moz-placeholder,
        .${blockID}.fb-contact-form-wrapper textarea::-moz-placeholder {
            ${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
            font-weight: 300;
        }

        .${blockID}.fb-contact-form-wrapper input:-ms-input-placeholder,
        .${blockID}.fb-contact-form-wrapper textarea:-ms-input-placeholder {
            ${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
            font-weight: 300;
        }

        .${blockID}.fb-contact-form-wrapper input:-moz-placeholder,
        .${blockID}.fb-contact-form-wrapper textarea:-moz-placeholder {
            ${contactFormPlaceholderColor ? `color: ${contactFormPlaceholderColor};` : ""}
            font-weight: 300;
        }

        .${blockID}.fb-contact-form-wrapper .wpcf7-form p:has(.wpcf7-submit) {
            display: flex;
            ${contactFormSubmitAlignment ? `justify-content: ${contactFormSubmitAlignment};` : ''}
        }

        .${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit { 
            ${contactFormSubmitHeight?.Desktop ? `height: ${contactFormSubmitHeight?.Desktop}${contactFormSubmitHeightUnits?.Desktop};` : ""}
            ${contactFormSubmitColor ? `color: ${contactFormSubmitColor};` : ""}
            ${contactFormSubmitBgColor ? `background: ${contactFormSubmitBgColor};` : ""}

            ${contactFormSubmitGlobalTypoSwitcher?.fontFamily === true && contactFormSubmitGlobalTypographyData?.fontFamily ? `font-family: ${contactFormSubmitGlobalTypographyData?.fontFamily};` : ''}
            ${contactFormSubmitGlobalTypoSwitcher?.fontSize === true && contactFormSubmitGlobalTypographyData?.fontSize ? `font-size: ${contactFormSubmitGlobalTypographyData?.fontSize};` : ''}
            ${contactFormSubmitGlobalTypoSwitcher?.fontWeight === true && contactFormSubmitGlobalTypographyData?.fontWeight ? `font-weight: ${contactFormSubmitGlobalTypographyData?.fontWeight};` : ''}
            ${contactFormSubmitGlobalTypoSwitcher?.fontStyle === true && contactFormSubmitGlobalTypographyData?.fontStyle ? `font-style: ${contactFormSubmitGlobalTypographyData?.fontStyle};` : ''}
            ${contactFormSubmitGlobalTypoSwitcher?.textTransform === true && contactFormSubmitGlobalTypographyData?.textTransform ? `text-transform: ${contactFormSubmitGlobalTypographyData?.textTransform};` : ''}
            ${contactFormSubmitGlobalTypoSwitcher?.textDecoration === true && contactFormSubmitGlobalTypographyData?.textDecoration ? `text-decoration: ${contactFormSubmitGlobalTypographyData?.textDecoration};` : ''}
            ${contactFormSubmitGlobalTypoSwitcher?.letterSpacing === true && contactFormSubmitGlobalTypographyData?.letterSpacing ? `letter-spacing: ${contactFormSubmitGlobalTypographyData?.letterSpacing};` : ''}
            ${contactFormSubmitGlobalTypoSwitcher?.lineHeight === true && contactFormSubmitGlobalTypographyData?.lineHeight ? `line-height: ${contactFormSubmitGlobalTypographyData?.lineHeight};` : ''}
                
            ${contactFormSubmitGlobalTypoSwitcher?.fontFamily === false && contactFormSubmitFontFamily && contactFormSubmitFontFamily !== 'Default' ? `font-family: ${contactFormSubmitFontFamily};` : ""}
            ${contactFormSubmitGlobalTypoSwitcher?.fontSize === false && contactFormSubmitFontSize?.Desktop && contactFormSubmitFontSizeUnits?.Desktop ? `font-size: ${contactFormSubmitFontSize?.Desktop}${contactFormSubmitFontSizeUnits?.Desktop};` : ''} 
            ${contactFormSubmitGlobalTypoSwitcher?.fontWeight === false && contactFormSubmitFontWeight ? `font-weight: ${contactFormSubmitFontWeight};` : ""}
            ${contactFormSubmitGlobalTypoSwitcher?.fontStyle === false && contactFormSubmitFontStyle ? `font-style: ${contactFormSubmitFontStyle};` : ""}
            ${contactFormSubmitGlobalTypoSwitcher?.textTransform === false && contactFormSubmitTextTransform ? `text-transform: ${contactFormSubmitTextTransform};` : ""}
            ${contactFormSubmitGlobalTypoSwitcher?.textDecoration === false && contactFormSubmitTextDecoration ? `text-decoration: ${contactFormSubmitTextDecoration};` : ""}
            ${contactFormSubmitGlobalTypoSwitcher?.letterSpacing === false && contactFormSubmitLetterSpacing?.Desktop && contactFormSubmitLetterSpacingUnits?.Desktop ? `letter-spacing: ${contactFormSubmitLetterSpacing?.Desktop}${contactFormSubmitLetterSpacingUnits?.Desktop};` : ''}
            ${contactFormSubmitGlobalTypoSwitcher?.lineHeight === false && contactFormSubmitLineHeight?.Desktop && contactFormSubmitLineHeightUnits?.Desktop ? `line-height: ${contactFormSubmitLineHeight?.Desktop}${contactFormSubmitLineHeightUnits?.Desktop};` : ''} 
            ${contactFormSubmitDesktopPadding && contactFormSubmitPaddingDesktop?.top ? `padding: ${contactFormSubmitDesktopPadding};` : ""}
            ${contactFormSubmitDesktopMargin && contactFormSubmitMarginDesktop?.top ? `margin: ${contactFormSubmitDesktopMargin};` : ""}

            ${contactFormSubmitBorder ? `border: ${contactFormSubmitBorder};` : ""}
            ${contactFormSubmitDesktopBorderWidth && contactFormSubmitBorderDesktop?.top ? `border-width: ${contactFormSubmitDesktopBorderWidth};` : ""}
            ${contactFormSubmitBorderColor ? `border-color: ${contactFormSubmitBorderColor};` : ""}
            ${contactFormSubmitDesktopBorderRadiusWidth && contactFormSubmitBorderRadiusDesktop?.top ? `border-radius: ${contactFormSubmitDesktopBorderRadiusWidth};` : ""}
            cursor: pointer;
        }
        .${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit:hover {
            ${contactFormSubmitHoverColor ? `color: ${contactFormSubmitHoverColor};` : ""}
            ${contactFormSubmitBgHoverColor ? `background: ${contactFormSubmitBgHoverColor};` : ""}
            ${contactFormSubmitBorderHoverColor ? `border-color: ${contactFormSubmitBorderHoverColor};` : ""}
            opacity: 0.8;
        }
        .${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit {
            ${contactFormSubmitWidthSelect === 'full-width' ? 'width: 100%;' : ''}
            ${contactFormSubmitWidthSelect === 'custom' && contactFormSubmitWidth?.Desktop
            ? `width: ${contactFormSubmitWidth?.Desktop}${contactFormSubmitWidthUnits?.Desktop};`
            : ''}
        }

        .${blockID}.fb-contact-form-wrapper .wpcf7-not-valid-tip {
            ${contactFormErrorColor ? `color: ${contactFormErrorColor};` : ""}

            ${contactFormErrorGlobalTypoSwitcher?.fontFamily === true && contactFormErrorGlobalTypographyData?.fontFamily ? `font-family: ${contactFormErrorGlobalTypographyData?.fontFamily};` : ''}
            ${contactFormErrorGlobalTypoSwitcher?.fontSize === true && contactFormErrorGlobalTypographyData?.fontSize ? `font-size: ${contactFormErrorGlobalTypographyData?.fontSize};` : ''}
            ${contactFormErrorGlobalTypoSwitcher?.fontWeight === true && contactFormErrorGlobalTypographyData?.fontWeight ? `font-weight: ${contactFormErrorGlobalTypographyData?.fontWeight};` : ''}
            ${contactFormErrorGlobalTypoSwitcher?.fontStyle === true && contactFormErrorGlobalTypographyData?.fontStyle ? `font-style: ${contactFormErrorGlobalTypographyData?.fontStyle};` : ''}
            ${contactFormErrorGlobalTypoSwitcher?.textTransform === true && contactFormErrorGlobalTypographyData?.textTransform ? `text-transform: ${contactFormErrorGlobalTypographyData?.textTransform};` : ''}
            ${contactFormErrorGlobalTypoSwitcher?.textDecoration === true && contactFormErrorGlobalTypographyData?.textDecoration ? `text-decoration: ${contactFormErrorGlobalTypographyData?.textDecoration};` : ''}
            ${contactFormErrorGlobalTypoSwitcher?.letterSpacing === true && contactFormErrorGlobalTypographyData?.letterSpacing ? `letter-spacing: ${contactFormErrorGlobalTypographyData?.letterSpacing};` : ''}
            ${contactFormErrorGlobalTypoSwitcher?.lineHeight === true && contactFormErrorGlobalTypographyData?.lineHeight ? `line-height: ${contactFormErrorGlobalTypographyData?.lineHeight};` : ''}
                
            ${contactFormErrorGlobalTypoSwitcher?.fontFamily === false && contactFormErrorFontFamily && contactFormErrorFontFamily !== 'Default' ? `font-family: ${contactFormErrorFontFamily};` : ""}
            ${contactFormErrorGlobalTypoSwitcher?.fontSize === false && contactFormErrorFontSize?.Desktop && contactFormErrorFontSizeUnits?.Desktop ? `font-size: ${contactFormErrorFontSize?.Desktop}${contactFormErrorFontSizeUnits?.Desktop};` : ''} 
            ${contactFormErrorGlobalTypoSwitcher?.fontWeight === false && contactFormErrorFontWeight ? `font-weight: ${contactFormErrorFontWeight};` : ""}
            ${contactFormErrorGlobalTypoSwitcher?.fontStyle === false && contactFormErrorFontStyle ? `font-style: ${contactFormErrorFontStyle};` : ""}
            ${contactFormErrorGlobalTypoSwitcher?.textTransform === false && contactFormErrorTextTransform ? `text-transform: ${contactFormErrorTextTransform};` : ""}
            ${contactFormErrorGlobalTypoSwitcher?.textDecoration === false && contactFormErrorTextDecoration ? `text-decoration: ${contactFormErrorTextDecoration};` : ""}
            ${contactFormErrorGlobalTypoSwitcher?.letterSpacing === false && contactFormErrorLetterSpacing?.Desktop && contactFormErrorLetterSpacingUnits?.Desktop ? `letter-spacing: ${contactFormErrorLetterSpacing?.Desktop}${contactFormErrorLetterSpacingUnits?.Desktop};` : ''}
            ${contactFormErrorGlobalTypoSwitcher?.lineHeight === false && contactFormErrorLineHeight?.Desktop && contactFormErrorLineHeightUnits?.Desktop ? `line-height: ${contactFormErrorLineHeight?.Desktop}${contactFormErrorLineHeightUnits?.Desktop};` : ''} 
            ${contactFormErrorDesktopPadding && contactFormErrorPaddingDesktop?.top ? `padding: ${contactFormErrorDesktopPadding};` : ""}
            ${contactFormErrorDesktopMargin && contactFormErrorMarginDesktop?.top ? `margin: ${contactFormErrorDesktopMargin};` : ""}
            margin-top: 4px;
        }
        .${blockID}.fb-contact-form-wrapper .wpcf7-response-output {
            ${contactFormSuccessColor ? `color: ${contactFormSuccessColor};` : ""}
            ${contactFormSuccessBgColor ? `background: ${contactFormSuccessBgColor};` : ""}

            ${contactFormSuccessGlobalTypoSwitcher?.fontFamily === true && contactFormSuccessGlobalTypographyData?.fontFamily ? `font-family: ${contactFormSuccessGlobalTypographyData?.fontFamily};` : ''}
            ${contactFormSuccessGlobalTypoSwitcher?.fontSize === true && contactFormSuccessGlobalTypographyData?.fontSize ? `font-size: ${contactFormSuccessGlobalTypographyData?.fontSize};` : ''}
            ${contactFormSuccessGlobalTypoSwitcher?.fontWeight === true && contactFormSuccessGlobalTypographyData?.fontWeight ? `font-weight: ${contactFormSuccessGlobalTypographyData?.fontWeight};` : ''}
            ${contactFormSuccessGlobalTypoSwitcher?.fontStyle === true && contactFormSuccessGlobalTypographyData?.fontStyle ? `font-style: ${contactFormSuccessGlobalTypographyData?.fontStyle};` : ''}
            ${contactFormSuccessGlobalTypoSwitcher?.textTransform === true && contactFormSuccessGlobalTypographyData?.textTransform ? `text-transform: ${contactFormSuccessGlobalTypographyData?.textTransform};` : ''}
            ${contactFormSuccessGlobalTypoSwitcher?.textDecoration === true && contactFormSuccessGlobalTypographyData?.textDecoration ? `text-decoration: ${contactFormSuccessGlobalTypographyData?.textDecoration};` : ''}
            ${contactFormSuccessGlobalTypoSwitcher?.letterSpacing === true && contactFormSuccessGlobalTypographyData?.letterSpacing ? `letter-spacing: ${contactFormSuccessGlobalTypographyData?.letterSpacing};` : ''}
            ${contactFormSuccessGlobalTypoSwitcher?.lineHeight === true && contactFormSuccessGlobalTypographyData?.lineHeight ? `line-height: ${contactFormSuccessGlobalTypographyData?.lineHeight};` : ''}
                
            ${contactFormSuccessGlobalTypoSwitcher?.fontFamily === false && contactFormSuccessFontFamily && contactFormSuccessFontFamily !== 'Default' ? `font-family: ${contactFormSuccessFontFamily};` : ""}
            ${contactFormSuccessGlobalTypoSwitcher?.fontSize === false && contactFormSuccessFontSize?.Desktop && contactFormSuccessFontSizeUnits?.Desktop ? `font-size: ${contactFormSuccessFontSize?.Desktop}${contactFormSuccessFontSizeUnits?.Desktop};` : ''} 
            ${contactFormSuccessGlobalTypoSwitcher?.fontWeight === false && contactFormSuccessFontWeight ? `font-weight: ${contactFormSuccessFontWeight};` : ""}
            ${contactFormSuccessGlobalTypoSwitcher?.fontStyle === false && contactFormSuccessFontStyle ? `font-style: ${contactFormSuccessFontStyle};` : ""}
            ${contactFormSuccessGlobalTypoSwitcher?.textTransform === false && contactFormSuccessTextTransform ? `text-transform: ${contactFormSuccessTextTransform};` : ""}
            ${contactFormSuccessGlobalTypoSwitcher?.textDecoration === false && contactFormSuccessTextDecoration ? `text-decoration: ${contactFormSuccessTextDecoration};` : ""}
            ${contactFormSuccessGlobalTypoSwitcher?.letterSpacing === false && contactFormSuccessLetterSpacing?.Desktop && contactFormSuccessLetterSpacingUnits?.Desktop ? `letter-spacing: ${contactFormSuccessLetterSpacing?.Desktop}${contactFormSuccessLetterSpacingUnits?.Desktop};` : ''}
            ${contactFormSuccessGlobalTypoSwitcher?.lineHeight === false && contactFormSuccessLineHeight?.Desktop && contactFormSuccessLineHeightUnits?.Desktop ? `line-height: ${contactFormSuccessLineHeight?.Desktop}${contactFormSuccessLineHeightUnits?.Desktop};` : ''}
            ${contactFormSuccessBorder ? `border: ${contactFormSuccessBorder};` : ""}
            ${contactFormSuccessDesktopBorderWidth && contactFormSuccessBorderDesktop?.top ? `border-width: ${contactFormSuccessDesktopBorderWidth};` : ""}
            ${contactFormSuccessBorderColor ? `border-color: ${contactFormSuccessBorderColor};` : ""}
            ${contactFormSuccessDesktopBorderRadiusWidth && contactFormSuccessBorderRadiusDesktop?.top ? `border-radius: ${contactFormSuccessDesktopBorderRadiusWidth};` : ""}
            padding: 10px 15px;
        }
        .${blockID}.fb-contact-form-wrapper .wpcf7-response-output:hover {
            ${contactFormSuccessBorderHoverColor ? `border-color: ${contactFormSuccessBorderHoverColor};` : ""}
        }
            
        .${blockID}.fb-contact-form-wrapper fieldset.hidden-fields-container {
            display: none;
        }

        @media only screen and (max-width: 1024px) {

            .${blockID}.fb-contact-form-wrapper {
                ${contactFormGlobalZIndex?.Tablet ? `z-index: ${contactFormGlobalZIndex?.Tablet};` : ''}
                ${contactFormPositionType !== 'default' && contactFormPositionType !== 'relative' && contactFormHZOrientationType === 'left' && contactFormHZLeftOffset?.Tablet ? `left: ${contactFormHZLeftOffset?.Tablet}${contactFormHZLeftOffsetUnits?.Tablet};` : ''}
                ${contactFormPositionType !== 'default' && contactFormPositionType !== 'relative' && contactFormHZOrientationType === 'right' && contactFormHZRightOffset?.Tablet ? `right: ${contactFormHZRightOffset?.Tablet}${contactFormHZRightOffsetUnits?.Tablet};` : ''}
                ${contactFormPositionType !== 'default' && contactFormPositionType !== 'relative' && contactFormVROrientationType === 'top' && contactFormVRTopOffset?.Tablet ? `top: ${contactFormVRTopOffset?.Tablet}${contactFormVRTopOffsetUnits?.Tablet};` : ''}
                ${contactFormPositionType !== 'default' && contactFormPositionType !== 'relative' && contactFormVROrientationType === 'bottom' && contactFormVRBottomOffset?.Tablet ? `bottom: ${contactFormVRBottomOffset?.Tablet}${contactFormVRBottomOffsetUnits?.Tablet};` : ''}
            }

            .${blockID}.fb-contact-form-wrapper {
                ${TabletPadding && contactFormGlobalPaddingTablet?.top ? `padding: ${TabletPadding};` : ""}
                ${TabletMargin && contactFormGlobalMarginTablet?.top ? `margin: ${TabletMargin};` : ""}
                ${BorderTabletWidth && contactFormGlobalBorderTablet?.top ? `border-width: ${BorderTabletWidth};` : ""}
                ${BorderRadiusTabletWidth && contactFormGlobalBorderRadiusTablet?.top ? `border-radius: ${BorderRadiusTabletWidth} !important;` : ""}
                transition: all .3s ease-in-out;
            }

            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-error-message .wpcf7-not-valid-tip {
                display: none;
            }

            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input::-webkit-input-placeholder,
            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea::-webkit-input-placeholder {
                opacity: 0;
                visibility: hidden;
            }

            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input::-moz-placeholder,
            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea::-moz-placeholder {
                opacity: 0;
                visibility: hidden;
            }

            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input:-ms-input-placeholder,
            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea:-ms-input-placeholder {
                opacity: 0;
                visibility: hidden;
            }

            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input:-moz-placeholder,
            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea:-moz-placeholder {
                opacity: 0;
                visibility: hidden;
            }

            .${blockID}.fb-contact-form-wrapper .wpcf7-form label {
                ${contactFormLabelGlobalTypoSwitcher?.fontSize === false && contactFormLabelFontSize?.Tablet != "" ? `font-size: ${contactFormLabelFontSize?.Tablet}${contactFormLabelFontSizeUnits?.Tablet};` : ''}
                ${contactFormLabelGlobalTypoSwitcher?.letterSpacing === false && contactFormLabelLetterSpacing?.Tablet && contactFormLabelLetterSpacingUnits?.Tablet ? `letter-spacing: ${contactFormLabelLetterSpacing?.Tablet}${contactFormLabelLetterSpacingUnits?.Tablet};` : ''}
                ${contactFormLabelGlobalTypoSwitcher?.lineHeight === false && contactFormLabelLineHeight?.Tablet && contactFormLabelLineHeightUnits?.Tablet ? `line-height: ${contactFormLabelLineHeight?.Tablet}${contactFormLabelLineHeightUnits?.Tablet};` : ''}
            }


            .${blockID}.fb-contact-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
            .${blockID}.fb-contact-form-wrapper textarea, 
            .${blockID}.fb-contact-form-wrapper select {
                ${contactFormInputGlobalTypoSwitcher?.fontSize === false && contactFormInputFontSize?.Tablet != "" ? `font-size: ${contactFormInputFontSize?.Tablet}${contactFormInputFontSizeUnits?.Tablet};` : ''}
                ${contactFormInputGlobalTypoSwitcher?.letterSpacing === false && contactFormInputLetterSpacing?.Tablet != "" ? `letter-spacing: ${contactFormInputLetterSpacing?.Tablet}${contactFormInputLetterSpacingUnits?.Tablet};` : ''}
                ${contactFormInputGlobalTypoSwitcher?.lineHeight === false && contactFormInputLineHeight?.Tablet != "" ? `line-height: ${contactFormInputLineHeight?.Tablet}${contactFormInputLineHeightUnits?.Tablet};` : ''}
                ${contactFormTextIndentSize?.Tablet != "" ? `text-indent: ${contactFormTextIndentSize?.Tablet}${contactFormTextIndentSizeUnits?.Tablet};` : ""}
                ${contactFormInputWidthSize?.Tablet != "" ? `width: ${contactFormInputWidthSize?.Tablet}${contactFormInputWidthSizeUnits?.Tablet};` : ""}
                ${contactFormInputHeightSize?.Tablet != "" ? `height: ${contactFormInputHeightSize?.Tablet}${contactFormInputHeightSizeUnits?.Tablet};` : ""}
                ${contactFormTabletPadding && contactFormPaddingTablet?.top ? `padding: ${contactFormTabletPadding};` : ""}
                ${contactFormTabletMargin && contactFormMarginTablet?.top ? `margin: ${contactFormTabletMargin};` : ""}
                ${contactFormBorderTabletWidth && contactFormBorderTablet?.top ? `border-width: ${contactFormBorderTabletWidth};` : ""}
                ${contactFormBorderRadiusTabletWidth && contactFormBorderRadiusTablet?.top ? `border-radius: ${contactFormBorderRadiusTabletWidth};` : ""}
                transition: all .3s ease-in-out;
            }

            .${blockID}.fb-contact-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
            .${blockID}.fb-contact-form-wrapper textarea:focus, 
            .${blockID}.fb-contact-form-wrapper select:focus {
                ${contactFormFocusBorderTabletWidth?.Tablet != "" ? `border-width: ${contactFormFocusBorderTabletWidth};` : ""}
                ${contactFormFocusBorderRadiusTabletWidth != "" ? `border-radius: ${contactFormFocusBorderRadiusTabletWidth};` : ""}
            }

            .${blockID}.fb-contact-form-wrapper textarea {
                ${contactFormTextareaWidthSize?.Tablet != "" ? `width: ${contactFormTextareaWidthSize?.Tablet}${contactFormTextareaWidthSizeUnits?.Tablet};` : ""}
                ${contactFormTextareaHeightSize?.Tablet != "" ? `height: ${contactFormTextareaHeightSize?.Tablet}${contactFormTextareaHeightSizeUnits?.Tablet};` : ""}
            }

            .${blockID}.fb-contact-form-wrapper .wpcf7-form p {
                ${contactFormSpacingSize?.Tablet != "" ? `margin: ${contactFormSpacingSize?.Tablet}${contactFormSpacingUnits?.Tablet} 0;` : ""} 
            }
            .${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit {
                ${contactFormSubmitAlignment === 'center' ? 'margin: 0 auto; display: block;' : ''}
                ${contactFormSubmitAlignment === 'right' ? 'margin-left: auto; display: block;' : ''}
                ${contactFormSubmitAlignment === 'left' ? 'margin-right: auto; display: block;' : ''}
            }

            .${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit { 
                ${contactFormSubmitHeight?.Tablet ? `height: ${contactFormSubmitHeight?.Tablet}${contactFormSubmitHeightUnits?.Tablet};` : ""}
                ${contactFormSubmitGlobalTypoSwitcher?.fontSize === false && contactFormSubmitFontSize?.Tablet && contactFormSubmitFontSizeUnits?.Tablet ? `font-size: ${contactFormSubmitFontSize?.Tablet}${contactFormSubmitFontSizeUnits?.Tablet};` : ''} 
                ${contactFormSubmitGlobalTypoSwitcher?.letterSpacing === false && contactFormSubmitLetterSpacing?.Tablet && contactFormSubmitLetterSpacingUnits?.Tablet ? `letter-spacing: ${contactFormSubmitLetterSpacing?.Tablet}${contactFormSubmitLetterSpacingUnits?.Tablet};` : ''}
                ${contactFormSubmitGlobalTypoSwitcher?.lineHeight === false && contactFormSubmitLineHeight?.Tablet && contactFormSubmitLineHeightUnits?.Tablet ? `line-height: ${contactFormSubmitLineHeight?.Tablet}${contactFormSubmitLineHeightUnits?.Tablet};` : ''} 
                ${contactFormSubmitTabletPadding && contactFormSubmitPaddingTablet?.top ? `padding: ${contactFormSubmitTabletPadding};` : ""}
                ${contactFormSubmitTabletMargin && contactFormSubmitMarginTablet?.top ? `margin: ${contactFormSubmitTabletMargin};` : ""}

                ${contactFormSubmitBorder ? `border: ${contactFormSubmitBorder};` : ""}
                ${contactFormSubmitTabletBorderWidth && contactFormSubmitBorderTablet?.top ? `border-width: ${contactFormSubmitTabletBorderWidth};` : ""}
                ${contactFormSubmitTabletBorderRadiusWidth && contactFormSubmitBorderRadiusTablet?.top ? `border-radius: ${contactFormSubmitTabletBorderRadiusWidth};` : ""}
                cursor: pointer;
            }
            .${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit {
                ${contactFormSubmitWidthSelect === 'full-width' ? 'width: 100%;' : ''}
                ${contactFormSubmitWidthSelect === 'custom' && contactFormSubmitWidth?.Tablet
            ? `width: ${contactFormSubmitWidth?.Tablet}${contactFormSubmitWidthUnits?.Tablet};`
            : ''}
            }

            .${blockID}.fb-contact-form-wrapper .wpcf7-not-valid-tip {
                ${contactFormErrorGlobalTypoSwitcher?.fontSize === false && contactFormErrorFontSize?.Tablet && contactFormErrorFontSizeUnits?.Tablet ? `font-size: ${contactFormErrorFontSize?.Tablet}${contactFormErrorFontSizeUnits?.Tablet};` : ''} 
                ${contactFormErrorGlobalTypoSwitcher?.letterSpacing === false && contactFormErrorLetterSpacing?.Tablet && contactFormErrorLetterSpacingUnits?.Tablet ? `letter-spacing: ${contactFormErrorLetterSpacing?.Tablet}${contactFormErrorLetterSpacingUnits?.Tablet};` : ''}
                ${contactFormErrorGlobalTypoSwitcher?.lineHeight === false && contactFormErrorLineHeight?.Tablet && contactFormErrorLineHeightUnits?.Tablet ? `line-height: ${contactFormErrorLineHeight?.Tablet}${contactFormErrorLineHeightUnits?.Tablet};` : ''} 
                ${contactFormErrorTabletPadding && contactFormErrorPaddingTablet?.top ? `padding: ${contactFormErrorTabletPadding};` : ""}
                ${contactFormErrorTabletMargin && contactFormErrorMarginTablet?.top ? `margin: ${contactFormErrorTabletMargin};` : ""}
                margin-top: 4px;
            }
            .${blockID}.fb-contact-form-wrapper .wpcf7-response-output {
                ${contactFormSuccessGlobalTypoSwitcher?.fontSize === false && contactFormSuccessFontSize?.Tablet && contactFormSuccessFontSizeUnits?.Tablet ? `font-size: ${contactFormSuccessFontSize?.Tablet}${contactFormSuccessFontSizeUnits?.Tablet};` : ''} 
                ${contactFormSuccessGlobalTypoSwitcher?.letterSpacing === false && contactFormSuccessLetterSpacing?.Tablet && contactFormSuccessLetterSpacingUnits?.Tablet ? `letter-spacing: ${contactFormSuccessLetterSpacing?.Tablet}${contactFormSuccessLetterSpacingUnits?.Tablet};` : ''}
                ${contactFormSuccessGlobalTypoSwitcher?.lineHeight === false && contactFormSuccessLineHeight?.Tablet && contactFormSuccessLineHeightUnits?.Tablet ? `line-height: ${contactFormSuccessLineHeight?.Tablet}${contactFormSuccessLineHeightUnits?.Tablet};` : ''}
                ${contactFormSuccessBorder ? `border: ${contactFormSuccessBorder};` : ""}
                ${contactFormSuccessTabletBorderWidth && contactFormSuccessBorderTablet?.top ? `border-width: ${contactFormSuccessTabletBorderWidth};` : ""}
                ${contactFormSuccessTabletBorderRadiusWidth && contactFormSuccessBorderRadiusTablet?.top ? `border-radius: ${contactFormSuccessTabletBorderRadiusWidth};` : ""}
                box-shadow: 0 1px 5px rgba(0, 0, 0, .1);
                padding: 10px 15px;
            }
            
        }

        @media only screen and (max-width: 767px) {
            .${blockID}.fb-contact-form-wrapper {
                ${contactFormGlobalZIndex?.Tablet ? `z-index: ${contactFormGlobalZIndex?.Tablet};` : ''}
                ${contactFormPositionType !== 'default' ? `position: ${contactFormPositionType};` : ''}
                ${contactFormPositionType !== 'default' && contactFormPositionType !== 'relative' && contactFormHZOrientationType === 'left' && contactFormHZLeftOffset?.Mobile ? `left: ${contactFormHZLeftOffset?.Mobile}${contactFormHZLeftOffsetUnits?.Mobile};` : ''}
                ${contactFormPositionType !== 'default' && contactFormPositionType !== 'relative' && contactFormHZOrientationType === 'right' && contactFormHZRightOffset?.Mobile ? `right: ${contactFormHZRightOffset?.Mobile}${contactFormHZRightOffsetUnits?.Mobile};` : ''}
                ${contactFormPositionType !== 'default' && contactFormPositionType !== 'relative' && contactFormVROrientationType === 'top' && contactFormVRTopOffset?.Mobile ? `top: ${contactFormVRTopOffset?.Mobile}${contactFormVRTopOffsetUnits?.Mobile};` : ''}
                ${contactFormPositionType !== 'default' && contactFormPositionType !== 'relative' && contactFormVROrientationType === 'bottom' && contactFormVRBottomOffset?.Mobile ? `bottom: ${contactFormVRBottomOffset?.Mobile}${contactFormVRBottomOffsetUnits?.Mobile};` : ''}
            }

            .${blockID}.fb-contact-form-wrapper {
                ${MobilePadding && contactFormGlobalPaddingMobile?.top ? `padding: ${MobilePadding};` : ""} 
                ${MobileMargin && contactFormGlobalMarginMobile?.top ? `margin: ${MobileMargin};` : ""}
                ${contactFormGlobalBorder ? `border: ${contactFormGlobalBorder};` : ""}
                ${BorderMobileWidth && contactFormGlobalBorderMobile?.top ? `border-width: ${BorderMobileWidth};` : ""}
                ${BorderRadiusMobileWidth && contactFormGlobalBorderRadiusMobile?.top ? `border-radius: ${BorderRadiusMobileWidth} !important;` : ""}
                transition: all .3s ease-in-out;
            }

            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-error-message .wpcf7-not-valid-tip {
                display: none;
            }

            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input::-webkit-input-placeholder,
            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea::-webkit-input-placeholder {
                opacity: 0;
                visibility: hidden;
            }

            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input::-moz-placeholder,
            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea::-moz-placeholder {
                opacity: 0;
                visibility: hidden;
            }

            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input:-ms-input-placeholder,
            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea:-ms-input-placeholder {
                opacity: 0;
                visibility: hidden;
            }

            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder input:-moz-placeholder,
            .${blockID}.fb-contact-form-wrapper.fb-contact-form-hide-placeholder textarea:-moz-placeholder {
                opacity: 0;
                visibility: hidden;
            }

            .${blockID}.fb-contact-form-wrapper .wpcf7-form label {
                ${contactFormLabelGlobalTypoSwitcher?.fontSize === false && contactFormLabelFontSize?.Mobile != "" ? `font-size: ${contactFormLabelFontSize?.Mobile}${contactFormLabelFontSizeUnits?.Mobile};` : ''}
                ${contactFormLabelGlobalTypoSwitcher?.letterSpacing === false && contactFormLabelLetterSpacing?.Mobile && contactFormLabelLetterSpacingUnits?.Mobile ? `letter-spacing: ${contactFormLabelLetterSpacing?.Mobile}${contactFormLabelLetterSpacingUnits?.Mobile};` : ''}
                ${contactFormLabelGlobalTypoSwitcher?.lineHeight === false && contactFormLabelLineHeight?.Mobile && contactFormLabelLineHeightUnits?.Mobile ? `line-height: ${contactFormLabelLineHeight?.Mobile}${contactFormLabelLineHeightUnits?.Mobile};` : ''}
            }


            .${blockID}.fb-contact-form-wrapper input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
            .${blockID}.fb-contact-form-wrapper textarea, 
            .${blockID}.fb-contact-form-wrapper select {
                ${contactFormInputGlobalTypoSwitcher?.fontSize === false && contactFormInputFontSize?.Mobile != "" ? `font-size: ${contactFormInputFontSize?.Mobile}${contactFormInputFontSizeUnits?.Mobile};` : ''}
                ${contactFormInputGlobalTypoSwitcher?.letterSpacing === false && contactFormInputLetterSpacing?.Mobile != "" ? `letter-spacing: ${contactFormInputLetterSpacing?.Mobile}${contactFormInputLetterSpacingUnits?.Mobile};` : ''}
                ${contactFormInputGlobalTypoSwitcher?.lineHeight === false && contactFormInputLineHeight?.Mobile != "" ? `line-height: ${contactFormInputLineHeight?.Mobile}${contactFormInputLineHeightUnits?.Mobile};` : ''} 
                ${contactFormTextIndentSize?.Mobile != "" ? `text-indent: ${contactFormTextIndentSize?.Mobile}${contactFormTextIndentSizeUnits?.Mobile};` : ""}
                ${contactFormInputWidthSize?.Mobile != "" ? `width: ${contactFormInputWidthSize?.Mobile}${contactFormInputWidthSizeUnits?.Mobile};` : ""} 
                ${contactFormInputHeightSize?.Mobile != "" ? `height: ${contactFormInputHeightSize?.Mobile}${contactFormInputHeightSizeUnits?.Mobile};` : ""}
                ${contactFormMobilePadding && contactFormPaddingMobile?.top ? `padding: ${contactFormMobilePadding};` : ""}
                ${contactFormMobileMargin && contactFormMarginMobile?.top ? `margin: ${contactFormMobileMargin};` : ""}
                ${contactFormBorderMobileWidth && contactFormBorderMobile?.top ? `border-width: ${contactFormBorderMobileWidth};` : ""}
                ${contactFormBorderRadiusMobileWidth && contactFormBorderRadiusMobile?.top ? `border-radius: ${contactFormBorderRadiusMobileWidth};` : ""}
                transition: all .3s ease-in-out;
            }

            .${blockID}.fb-contact-form-wrapper input:focus:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]), 
            .${blockID}.fb-contact-form-wrapper textarea:focus, 
            .${blockID}.fb-contact-form-wrapper select:focus {
                ${contactFormFocusBorderMobileWidth && contactFormFocusBorderMobile?.top ? `border-width: ${contactFormFocusBorderMobileWidth};` : ""}
                ${contactFormFocusBorderRadiusMobileWidth && contactFormFocusBorderRadiusMobile?.top ? `border-radius: ${contactFormFocusBorderRadiusMobileWidth};` : ""}
                box-shadow: none;
                outline: none;
            }

            .${blockID}.fb-contact-form-wrapper textarea {
                ${contactFormTextareaWidthSize?.Mobile != "" ? `width: ${contactFormTextareaWidthSize?.Mobile}${contactFormTextareaWidthSizeUnits?.Mobile};` : ""}
                ${contactFormTextareaHeightSize?.Mobile != "" ? `height: ${contactFormTextareaHeightSize?.Mobile}${contactFormTextareaHeightSizeUnits?.Mobile};` : ""}
            }

            .${blockID}.fb-contact-form-wrapper .wpcf7-form p {
                ${contactFormSpacingSize?.Tablet != "" ? `margin: ${contactFormSpacingSize?.Tablet}${contactFormSpacingUnits?.Tablet} 0;` : ""} 
            }

            .${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit {
                ${contactFormSubmitAlignment === 'center' ? 'margin: 0 auto; display: block;' : ''}
                ${contactFormSubmitAlignment === 'right' ? 'margin-left: auto; display: block;' : ''}
                ${contactFormSubmitAlignment === 'left' ? 'margin-right: auto; display: block;' : ''}
            }

            .${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit { 
                ${contactFormSubmitHeight?.Mobile ? `height: ${contactFormSubmitHeight?.Mobile}${contactFormSubmitHeightUnits?.Mobile};` : ""}
                ${contactFormSubmitGlobalTypoSwitcher?.fontSize === false && contactFormSubmitFontSize?.Mobile && contactFormSubmitFontSizeUnits?.Mobile ? `font-size: ${contactFormSubmitFontSize?.Mobile}${contactFormSubmitFontSizeUnits?.Mobile};` : ''} 
                ${contactFormSubmitGlobalTypoSwitcher?.letterSpacing === false && contactFormSubmitLetterSpacing?.Mobile && contactFormSubmitLetterSpacingUnits?.Mobile ? `letter-spacing: ${contactFormSubmitLetterSpacing?.Mobile}${contactFormSubmitLetterSpacingUnits?.Mobile};` : ''}
                ${contactFormSubmitGlobalTypoSwitcher?.lineHeight === false && contactFormSubmitLineHeight?.Mobile && contactFormSubmitLineHeightUnits?.Mobile ? `line-height: ${contactFormSubmitLineHeight?.Mobile}${contactFormSubmitLineHeightUnits?.Mobile};` : ''} 
                ${contactFormSubmitMobilePadding && contactFormSubmitPaddingMobile?.top ? `padding: ${contactFormSubmitMobilePadding};` : ""}
                ${contactFormSubmitMobileMargin && contactFormSubmitMarginMobile?.top ? `margin: ${contactFormSubmitMobileMargin};` : ""}

                ${contactFormSubmitMobileBorderWidth && contactFormSubmitBorderMobile?.top ? `border-width: ${contactFormSubmitMobileBorderWidth};` : ""}
                ${contactFormSubmitMobileBorderRadiusWidth && contactFormSubmitBorderRadiusMobile?.top ? `border-radius: ${contactFormSubmitMobileBorderRadiusWidth};` : ""}
                cursor: pointer;
            }
            .${blockID}.fb-contact-form-wrapper .wpcf7-form .wpcf7-submit {
                ${contactFormSubmitWidthSelect === 'full-width' ? 'width: 100%;' : ''}
                ${contactFormSubmitWidthSelect === 'custom' && contactFormSubmitWidth?.Mobile
            ? `width: ${contactFormSubmitWidth?.Mobile}${contactFormSubmitWidthUnits?.Mobile};`
            : ''}
            }

            .${blockID}.fb-contact-form-wrapper .wpcf7-not-valid-tip {
                ${contactFormErrorGlobalTypoSwitcher?.fontSize === false && contactFormErrorFontSize?.Mobile && contactFormErrorFontSizeUnits?.Mobile ? `font-size: ${contactFormErrorFontSize?.Mobile}${contactFormErrorFontSizeUnits?.Mobile};` : ''} 
                ${contactFormErrorGlobalTypoSwitcher?.letterSpacing === false && contactFormErrorLetterSpacing?.Mobile && contactFormErrorLetterSpacingUnits?.Mobile ? `letter-spacing: ${contactFormErrorLetterSpacing?.Mobile}${contactFormErrorLetterSpacingUnits?.Mobile};` : ''}
                ${contactFormErrorGlobalTypoSwitcher?.lineHeight === false && contactFormErrorLineHeight?.Mobile && contactFormErrorLineHeightUnits?.Mobile ? `line-height: ${contactFormErrorLineHeight?.Mobile}${contactFormErrorLineHeightUnits?.Mobile};` : ''} 
                ${contactFormErrorMobilePadding && contactFormErrorPaddingMobile?.top ? `padding: ${contactFormErrorMobilePadding};` : ""}
                ${contactFormErrorMobileMargin && contactFormErrorMarginMobile?.top ? `margin: ${contactFormErrorMobileMargin};` : ""}
                margin-top: 4px;
            }
            .${blockID}.fb-contact-form-wrapper .wpcf7-response-output {
                ${contactFormSuccessGlobalTypoSwitcher?.fontSize === false && contactFormSuccessFontSize?.Mobile && contactFormSuccessFontSizeUnits?.Mobile ? `font-size: ${contactFormSuccessFontSize?.Mobile}${contactFormSuccessFontSizeUnits?.Mobile};` : ''} 
                ${contactFormSuccessGlobalTypoSwitcher?.letterSpacing === false && contactFormSuccessLetterSpacing?.Mobile && contactFormSuccessLetterSpacingUnits?.Mobile ? `letter-spacing: ${contactFormSuccessLetterSpacing?.Mobile}${contactFormSuccessLetterSpacingUnits?.Mobile};` : ''}
                ${contactFormSuccessGlobalTypoSwitcher?.lineHeight === false && contactFormSuccessLineHeight?.Mobile && contactFormSuccessLineHeightUnits?.Mobile ? `line-height: ${contactFormSuccessLineHeight?.Mobile}${contactFormSuccessLineHeightUnits?.Mobile};` : ''}
                ${contactFormSuccessMobileBorderWidth && contactFormSuccessBorderMobile?.top ? `border-width: ${contactFormSuccessMobileBorderWidth};` : ""}
                ${contactFormSuccessMobileBorderRadiusWidth && contactFormSuccessBorderRadiusMobile?.top ? `border-radius: ${contactFormSuccessMobileBorderRadiusWidth};` : ""}
                box-shadow: 0 1px 5px rgba(0, 0, 0, .1);
                padding: 10px 15px;
            }
        }

    `;

    const customCss = getCustomCss(contactFormCustomCSS, `.${blockID}`);
    return `${contactFormBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateContactFormStyle;
