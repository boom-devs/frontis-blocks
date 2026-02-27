/**
 * Search Block-Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes-Block attributes
 * @returns {string} CSS string
 */
const generateSearchStyle = (attributes) => {
    const {
        blockID,
        searchButtonWidth,
        searchButtonWidthUnits,
        searchButtonInputFieldWidth,
        searchButtonInputFieldWidthUnits,
        searchIconGap,
        searchIconGapUnits,

        buttonTextGlobalTypographyData,
        buttonTextGlobalTypoSwitcher,
        buttonTextGlobalTypoType,
        buttonTextGlobalTypoOption,
        buttonTextFontFamily,
        buttonTextFontSize,
        buttonTextFontSizeUnits,
        buttonTextFontWeight,
        buttonTextFontStyle,
        buttonTextTransform,
        buttonTextDecoration,
        buttonTextLetterSpacing,
        buttonTextLetterSpacingUnits,
        buttonTextLineHeight,
        buttonTextLineHeightUnits,

        buttonTextColorSwitcher,
        buttonTextColor,
        buttonTextColorHover,

        buttonBorder,
        buttonBorderColorSwitcher,
        buttonBorderColor,
        buttonBorderColorHover,

        buttonBorderUnits,
        buttonBorderDesktop,
        buttonBorderTablet,
        buttonBorderMobile,
        buttonBorderLink,

        buttonBorderRadiusUnits,
        buttonBorderRadiusDesktop,
        buttonBorderRadiusTablet,
        buttonBorderRadiusMobile,
        buttonBorderRadiusLink,

        buttonPaddingUnits,
        buttonPaddingDesktop,
        buttonPaddingTablet,
        buttonPaddingMobile,
        buttonPaddingLink,

        searchIconAlign,
        searchIcon,
        searchIconImageUrl,
        searchIconImageAlt,
        searchIconImageID,
        searchIconImageWidth,
        searchIconImageWidthUnits,
        searchIconImageHeight,
        searchIconImageHeightUnits,
        searchIconImageDisplay,

        /** Start Icon Styles */
        searchIconSize,
        searchIconSizeUnits,
        searchIconColorSwitcher,
        searchIconColor,
        searchIconHoverColor,

        searchIconRotateSwitcher,
        searchIconRotate,
        searchIconRotateHover,
        searchIconImageRotateSwitcher,
        searchIconImageRotate,
        searchIconImageRotateHover,
        /** End Icon Styles */

        /** Start Input Field Typography */
        inputFieldTextGlobalTypographyData,
        inputFieldTextGlobalTypoSwitcher,
        inputFieldTextGlobalTypoType,
        inputFieldTextGlobalTypoOption,
        inputFieldTextFontFamily,
        inputFieldTextFontSize,
        inputFieldTextFontSizeUnits,
        inputFieldTextFontWeight,
        inputFieldTextFontStyle,
        inputFieldTextTransform,
        inputFieldTextDecoration,
        inputFieldTextLetterSpacing,
        inputFieldTextLetterSpacingUnits,
        inputFieldTextLineHeight,
        inputFieldTextLineHeightUnits,

        inputFieldTextColorSwitcher,
        inputFieldTextColor,
        inputFieldTextColorHover,

        inputFieldBorder,
        inputFieldBorderColorSwitcher,
        inputFieldBorderColor,
        inputFieldBorderColorHover,

        inputFieldBorderUnits,
        inputFieldBorderDesktop,
        inputFieldBorderTablet,
        inputFieldBorderMobile,
        inputFieldBorderLink,

        inputFieldBorderRadiusUnits,
        inputFieldBorderRadiusDesktop,
        inputFieldBorderRadiusTablet,
        inputFieldBorderRadiusMobile,
        inputFieldBorderRadiusLink,

        inputFieldPaddingUnits,
        inputFieldPaddingDesktop,
        inputFieldPaddingTablet,
        inputFieldPaddingMobile,
        inputFieldPaddingLink,

        searchFieldTextGlobalTypographyData,
        searchFieldTextGlobalTypoSwitcher,
        searchFieldTextGlobalTypoType,
        searchFieldTextGlobalTypoOption,
        searchFieldTextFontFamily,
        searchFieldTextFontSize,
        searchFieldTextFontSizeUnits,
        searchFieldTextFontWeight,
        searchFieldTextFontStyle,
        searchFieldTextTransform,
        searchFieldTextDecoration,
        searchFieldTextLetterSpacing,
        searchFieldTextLetterSpacingUnits,
        searchFieldTextLineHeight,
        searchFieldTextLineHeightUnits,

        searchFieldBgColorSwitcher,
        searchFieldBgColor,
        searchFieldBgColorHover,
        searchFieldTextColorSwitcher,
        searchFieldTextColor,
        searchFieldTextColorHover,

        searchFieldBorderColorSwitcher,
        searchFieldBorderColorHover,
        searchFieldBorderUnits,
        searchFieldBorderTablet,
        searchFieldBorderMobile,
        searchFieldBorderLink,

        searchFieldBorderRadiusUnits,
        searchFieldBorderRadiusTablet,
        searchFieldBorderRadiusMobile,
        searchFieldBorderRadiusLink,

        searchFieldPaddingUnits,
        searchFieldPaddingTablet,
        searchFieldPaddingMobile,
        searchFieldPaddingLink,
        searchFieldBorder,
        searchFieldBorderColor,
        searchFieldBorderDesktop,
        searchFieldBorderRadiusDesktop,
        searchFieldPaddingDesktop,

        searchFieldItemBorder,
        searchFieldItemBorderColor,
        searchFieldItemBorderDesktop,
        searchFieldItemBorderTablet,
        searchFieldItemBorderMobile,
        searchFieldItemBorderUnits,
        searchFieldItemBorderRadiusDesktop,
        searchFieldItemBorderRadiusTablet,
        searchFieldItemBorderRadiusMobile,
        searchFieldItemBorderRadiusUnits,

        searchFieldItemPaddingUnits,
        searchFieldItemPaddingDesktop,
        searchFieldItemPaddingTablet,
        searchFieldItemPaddingMobile,
        searchFieldItemColor,
        searchFieldItemColorHover,
        searchFieldItemBorderColorHover,

        searchFieldItemTitleGlobalTypographyData,
        searchFieldItemTitleGlobalTypoSwitcher,
        searchFieldItemTitleGlobalTypoType,
        searchFieldItemTitleGlobalTypoOption,

        searchFieldItemTitleFontFamily,
        searchFieldItemTitleFontSize,
        searchFieldItemTitleFontSizeUnits,
        searchFieldItemTitleFontWeight,
        searchFieldItemTitleFontStyle,
        searchFieldItemTitleTransform,
        searchFieldItemTitleDecoration,

        searchFieldItemTitleLetterSpacing,
        searchFieldItemTitleLetterSpacingUnits,

        searchFieldItemTitleLineHeight,
        searchFieldItemTitleLineHeightUnits,

        searchFieldItemTitleColorSwitcher,
        searchFieldItemTitleColor,
        searchFieldItemTitleColorHover,

        searchFieldItemTitleBorder,
        searchFieldItemTitleBorderColor,
        searchFieldItemTitleBorderColorHover,
        searchFieldItemTitleBorderUnits,
        searchFieldItemTitleBorderDesktop,
        searchFieldItemTitleBorderTablet,
        searchFieldItemTitleBorderMobile,

        searchFieldItemTitleBorderRadiusUnits,
        searchFieldItemTitleBorderRadiusDesktop,
        searchFieldItemTitleBorderRadiusTablet,
        searchFieldItemTitleBorderRadiusMobile,

        searchFieldItemTitlePaddingUnits,
        searchFieldItemTitlePaddingDesktop,
        searchFieldItemTitlePaddingTablet,
        searchFieldItemTitlePaddingMobile,

        searchFieldItemMetaGlobalTypographyData,
        searchFieldItemMetaGlobalTypoSwitcher,
        searchFieldItemMetaGlobalTypoType,
        searchFieldItemMetaGlobalTypoOption,

        searchFieldItemMetaFontFamily,
        searchFieldItemMetaFontSize,
        searchFieldItemMetaFontSizeUnits,
        searchFieldItemMetaFontWeight,
        searchFieldItemMetaFontStyle,
        searchFieldItemMetaTransform,
        searchFieldItemMetaDecoration,

        searchFieldItemMetaLetterSpacing,
        searchFieldItemMetaLetterSpacingUnits,

        searchFieldItemMetaLineHeight,
        searchFieldItemMetaLineHeightUnits,

        // Color
        searchFieldItemMetaColorSwitcher,
        searchFieldItemMetaColor,
        searchFieldItemMetaColorHover,

        searchFieldItemMetaBorderColor,
        searchFieldItemMetaBorderColorHover,
        // Border
        searchFieldItemMetaBorder,
        searchFieldItemMetaBorderUnits,
        searchFieldItemMetaBorderDesktop,
        searchFieldItemMetaBorderTablet,
        searchFieldItemMetaBorderMobile,
        searchFieldItemMetaBorderLink,

        // Border Radius
        searchFieldItemMetaBorderRadiusUnits,
        searchFieldItemMetaBorderRadiusDesktop,
        searchFieldItemMetaBorderRadiusTablet,
        searchFieldItemMetaBorderRadiusMobile,
        searchFieldItemMetaBorderRadiusLink,

        // Padding
        searchFieldItemMetaPaddingUnits,
        searchFieldItemMetaPaddingDesktop,
        searchFieldItemMetaPaddingTablet,
        searchFieldItemMetaPaddingMobile,
        searchFieldItemMetaPaddingLink,

        resultMetaGap,
        resultMetaGapUnits,
        metaDividerSize,
        metaDividerSizeUnits,
        metaDividerColor,
        metaDividerColorHover,

        // Typography
        SearchViewAllResultsGlobalTypographyData,
        SearchViewAllResultsGlobalTypoSwitcher,
        SearchViewAllResultsGlobalTypoType,
        SearchViewAllResultsGlobalTypoOption,

        SearchViewAllResultsFontFamily,
        SearchViewAllResultsFontSize,
        SearchViewAllResultsFontSizeUnits,
        SearchViewAllResultsFontWeight,
        SearchViewAllResultsFontStyle,
        SearchViewAllResultsTransform,
        SearchViewAllResultsDecoration,

        SearchViewAllResultsLetterSpacing,
        SearchViewAllResultsLetterSpacingUnits,

        SearchViewAllResultsLineHeight,
        SearchViewAllResultsLineHeightUnits,

        // Color
        SearchViewAllResultsColor,
        SearchViewAllResultsColorHover,
        SearchViewAllResultsBgColor,
        SearchViewAllResultsBgColorHover,

        // Border
        SearchViewAllResultsBorder,
        SearchViewAllResultsBorderColorSwitcher,
        SearchViewAllResultsBorderColor,
        SearchViewAllResultsBorderColorHover,
        SearchViewAllResultsBorderUnits,
        SearchViewAllResultsBorderDesktop,
        SearchViewAllResultsBorderTablet,
        SearchViewAllResultsBorderMobile,
        SearchViewAllResultsBorderLink,

        // Border Radius
        SearchViewAllResultsBorderRadiusUnits,
        SearchViewAllResultsBorderRadiusDesktop,
        SearchViewAllResultsBorderRadiusTablet,
        SearchViewAllResultsBorderRadiusMobile,
        SearchViewAllResultsBorderRadiusLink,

        // Padding
        SearchViewAllResultsPaddingUnits,
        SearchViewAllResultsPaddingDesktop,
        SearchViewAllResultsPaddingTablet,
        SearchViewAllResultsPaddingMobile,
        SearchViewAllResultsPaddingLink,

        searchIconZIndex,
        searchGlobalWraperID,
        searchGlobalWraperClass,
        searchCustomCSS,
    } = attributes;

    const buttonBorderDesktopWidth = `${buttonBorderDesktop.top}${buttonBorderUnits.Desktop} ${buttonBorderDesktop.right}${buttonBorderUnits.Desktop} ${buttonBorderDesktop.bottom}${buttonBorderUnits.Desktop} ${buttonBorderDesktop.left}${buttonBorderUnits.Desktop}`;
    const buttonBorderTabletWidth = `${buttonBorderTablet.top}${buttonBorderUnits.Tablet} ${buttonBorderTablet.right}${buttonBorderUnits.Tablet} ${buttonBorderTablet.bottom}${buttonBorderUnits.Tablet} ${buttonBorderTablet.left}${buttonBorderUnits.Tablet}`;
    const buttonBorderMobileWidth = `${buttonBorderMobile.top}${buttonBorderUnits.Mobile} ${buttonBorderMobile.right}${buttonBorderUnits.Mobile} ${buttonBorderMobile.bottom}${buttonBorderUnits.Mobile} ${buttonBorderMobile.left}${buttonBorderUnits.Mobile}`;

    /** Start Button Border Radius */
    const buttonBorderRadiusDesktopWidth = `${buttonBorderRadiusDesktop.top}${buttonBorderRadiusUnits.Desktop} ${buttonBorderRadiusDesktop.right}${buttonBorderRadiusUnits.Desktop} ${buttonBorderRadiusDesktop.bottom}${buttonBorderRadiusUnits.Desktop} ${buttonBorderRadiusDesktop.left}${buttonBorderRadiusUnits.Desktop}`;
    const buttonBorderRadiusTabletWidth = `${buttonBorderRadiusTablet.top}${buttonBorderRadiusUnits.Tablet} ${buttonBorderRadiusTablet.right}${buttonBorderRadiusUnits.Tablet} ${buttonBorderRadiusTablet.bottom}${buttonBorderRadiusUnits.Tablet} ${buttonBorderRadiusTablet.left}${buttonBorderRadiusUnits.Tablet}`;
    const buttonBorderRadiusMobileWidth = `${buttonBorderRadiusMobile.top}${buttonBorderRadiusUnits.Mobile} ${buttonBorderRadiusMobile.right}${buttonBorderRadiusUnits.Mobile} ${buttonBorderRadiusMobile.bottom}${buttonBorderRadiusUnits.Mobile} ${buttonBorderRadiusMobile.left}${buttonBorderRadiusUnits.Mobile}`;
    /** End Button Border Radius */

    /** Start Button Padding */
    const buttonPaddingDesktopWidth = `${buttonPaddingDesktop.top}${buttonPaddingUnits.Desktop} ${buttonPaddingDesktop.right}${buttonPaddingUnits.Desktop} ${buttonPaddingDesktop.bottom}${buttonPaddingUnits.Desktop} ${buttonPaddingDesktop.left}${buttonPaddingUnits.Desktop}`;
    const buttonPaddingTabletWidth = `${buttonPaddingTablet.top}${buttonPaddingUnits.Tablet} ${buttonPaddingTablet.right}${buttonPaddingUnits.Tablet} ${buttonPaddingTablet.bottom}${buttonPaddingUnits.Tablet} ${buttonPaddingTablet.left}${buttonPaddingUnits.Tablet}`;
    const buttonPaddingMobileWidth = `${buttonPaddingMobile.top}${buttonPaddingUnits.Mobile} ${buttonPaddingMobile.right}${buttonPaddingUnits.Mobile} ${buttonPaddingMobile.bottom}${buttonPaddingUnits.Mobile} ${buttonPaddingMobile.left}${buttonPaddingUnits.Mobile}`;
    /** End Button Padding */

    /** Start Input Field Border */
    const inputFieldBorderDesktopWidth = `${inputFieldBorderDesktop.top}${inputFieldBorderUnits.Desktop} ${inputFieldBorderDesktop.right}${inputFieldBorderUnits.Desktop} ${inputFieldBorderDesktop.bottom}${inputFieldBorderUnits.Desktop} ${inputFieldBorderDesktop.left}${inputFieldBorderUnits.Desktop}`;
    const inputFieldBorderTabletWidth = `${inputFieldBorderTablet.top}${inputFieldBorderUnits.Tablet} ${inputFieldBorderTablet.right}${inputFieldBorderUnits.Tablet} ${inputFieldBorderTablet.bottom}${inputFieldBorderUnits.Tablet} ${inputFieldBorderTablet.left}${inputFieldBorderUnits.Tablet}`;
    const inputFieldBorderMobileWidth = `${inputFieldBorderMobile.top}${inputFieldBorderUnits.Mobile} ${inputFieldBorderMobile.right}${inputFieldBorderUnits.Mobile} ${inputFieldBorderMobile.bottom}${inputFieldBorderUnits.Mobile} ${inputFieldBorderMobile.left}${inputFieldBorderUnits.Mobile}`;
    /** End Input Field Border */

    /** Start Input Field Border Radius */
    const inputFieldBorderRadiusDesktopWidth = `${inputFieldBorderRadiusDesktop.top}${inputFieldBorderRadiusUnits.Desktop} ${inputFieldBorderRadiusDesktop.right}${inputFieldBorderRadiusUnits.Desktop} ${inputFieldBorderRadiusDesktop.bottom}${inputFieldBorderRadiusUnits.Desktop} ${inputFieldBorderRadiusDesktop.left}${inputFieldBorderRadiusUnits.Desktop}`;
    const inputFieldBorderRadiusTabletWidth = `${inputFieldBorderRadiusTablet.top}${inputFieldBorderRadiusUnits.Tablet} ${inputFieldBorderRadiusTablet.right}${inputFieldBorderRadiusUnits.Tablet} ${inputFieldBorderRadiusTablet.bottom}${inputFieldBorderRadiusUnits.Tablet} ${inputFieldBorderRadiusTablet.left}${inputFieldBorderRadiusUnits.Tablet}`;
    const inputFieldBorderRadiusMobileWidth = `${inputFieldBorderRadiusMobile.top}${inputFieldBorderRadiusUnits.Mobile} ${inputFieldBorderRadiusMobile.right}${inputFieldBorderRadiusUnits.Mobile} ${inputFieldBorderRadiusMobile.bottom}${inputFieldBorderRadiusUnits.Mobile} ${inputFieldBorderRadiusMobile.left}${inputFieldBorderRadiusUnits.Mobile}`;
    /** End Input Field Border Radius */

    /** Start Input Field Padding */
    const inputFieldPaddingDesktopWidth = `${inputFieldPaddingDesktop.top}${inputFieldPaddingUnits.Desktop} ${inputFieldPaddingDesktop.right}${inputFieldPaddingUnits.Desktop} ${inputFieldPaddingDesktop.bottom}${inputFieldPaddingUnits.Desktop} ${inputFieldPaddingDesktop.left}${inputFieldPaddingUnits.Desktop}`;
    const inputFieldPaddingTabletWidth = `${inputFieldPaddingTablet.top}${inputFieldPaddingUnits.Tablet} ${inputFieldPaddingTablet.right}${inputFieldPaddingUnits.Tablet} ${inputFieldPaddingTablet.bottom}${inputFieldPaddingUnits.Tablet} ${inputFieldPaddingTablet.left}${inputFieldPaddingUnits.Tablet}`;
    const inputFieldPaddingMobileWidth = `${inputFieldPaddingMobile.top}${inputFieldPaddingUnits.Mobile} ${inputFieldPaddingMobile.right}${inputFieldPaddingUnits.Mobile} ${inputFieldPaddingMobile.bottom}${inputFieldPaddingUnits.Mobile} ${inputFieldPaddingMobile.left}${inputFieldPaddingUnits.Mobile}`;
    /** End Input Field Padding */

    /** Start Input Field Border */
    const searchFieldBorderDesktopWidth = `${searchFieldBorderDesktop.top}${searchFieldBorderUnits.Desktop} ${searchFieldBorderDesktop.right}${searchFieldBorderUnits.Desktop} ${searchFieldBorderDesktop.bottom}${searchFieldBorderUnits.Desktop} ${searchFieldBorderDesktop.left}${searchFieldBorderUnits.Desktop}`;
    const searchFieldBorderTabletWidth = `${searchFieldBorderTablet.top}${searchFieldBorderUnits.Tablet} ${searchFieldBorderTablet.right}${searchFieldBorderUnits.Tablet} ${searchFieldBorderTablet.bottom}${searchFieldBorderUnits.Tablet} ${searchFieldBorderTablet.left}${searchFieldBorderUnits.Tablet}`;
    const searchFieldBorderMobileWidth = `${searchFieldBorderMobile.top}${searchFieldBorderUnits.Mobile} ${searchFieldBorderMobile.right}${searchFieldBorderUnits.Mobile} ${searchFieldBorderMobile.bottom}${searchFieldBorderUnits.Mobile} ${searchFieldBorderMobile.left}${searchFieldBorderUnits.Mobile}`;
    /** End Input Field Border */

    /** Start Input Field Border Radius */
    const searchFieldBorderRadiusDesktopWidth = `${searchFieldBorderRadiusDesktop.top}${searchFieldBorderRadiusUnits.Desktop} ${searchFieldBorderRadiusDesktop.right}${searchFieldBorderRadiusUnits.Desktop} ${searchFieldBorderRadiusDesktop.bottom}${searchFieldBorderRadiusUnits.Desktop} ${searchFieldBorderRadiusDesktop.left}${searchFieldBorderRadiusUnits.Desktop}`;
    const searchFieldBorderRadiusTabletWidth = `${searchFieldBorderRadiusTablet.top}${searchFieldBorderRadiusUnits.Tablet} ${searchFieldBorderRadiusTablet.right}${searchFieldBorderRadiusUnits.Tablet} ${searchFieldBorderRadiusTablet.bottom}${searchFieldBorderRadiusUnits.Tablet} ${searchFieldBorderRadiusTablet.left}${searchFieldBorderRadiusUnits.Tablet}`;
    const searchFieldBorderRadiusMobileWidth = `${searchFieldBorderRadiusMobile.top}${searchFieldBorderRadiusUnits.Mobile} ${searchFieldBorderRadiusMobile.right}${searchFieldBorderRadiusUnits.Mobile} ${searchFieldBorderRadiusMobile.bottom}${searchFieldBorderRadiusUnits.Mobile} ${searchFieldBorderRadiusMobile.left}${searchFieldBorderRadiusUnits.Mobile}`;
    /** End Input Field Border Radius */

    /** Start Input Field Padding */
    const searchFieldPaddingDesktopWidth = `${searchFieldPaddingDesktop.top}${searchFieldPaddingUnits.Desktop} ${searchFieldPaddingDesktop.right}${searchFieldPaddingUnits.Desktop} ${searchFieldPaddingDesktop.bottom}${searchFieldPaddingUnits.Desktop} ${searchFieldPaddingDesktop.left}${searchFieldPaddingUnits.Desktop}`;
    const searchFieldPaddingTabletWidth = `${searchFieldPaddingTablet.top}${searchFieldPaddingUnits.Tablet} ${searchFieldPaddingTablet.right}${searchFieldPaddingUnits.Tablet} ${searchFieldPaddingTablet.bottom}${searchFieldPaddingUnits.Tablet} ${searchFieldPaddingTablet.left}${searchFieldPaddingUnits.Tablet}`;
    const searchFieldPaddingMobileWidth = `${searchFieldPaddingMobile.top}${searchFieldPaddingUnits.Mobile} ${searchFieldPaddingMobile.right}${searchFieldPaddingUnits.Mobile} ${searchFieldPaddingMobile.bottom}${searchFieldPaddingUnits.Mobile} ${searchFieldPaddingMobile.left}${searchFieldPaddingUnits.Mobile}`;
    /** End Input Field Padding */

    /** Start Input Field Padding */
    const searchFieldItemPaddingDesktopWidth = `${searchFieldItemPaddingDesktop.top}${searchFieldItemPaddingUnits.Desktop} ${searchFieldItemPaddingDesktop.right}${searchFieldItemPaddingUnits.Desktop} ${searchFieldItemPaddingDesktop.bottom}${searchFieldItemPaddingUnits.Desktop} ${searchFieldItemPaddingDesktop.left}${searchFieldItemPaddingUnits.Desktop}`;
    const searchFieldItemPaddingTabletWidth = `${searchFieldItemPaddingTablet.top}${searchFieldItemPaddingUnits.Tablet} ${searchFieldItemPaddingTablet.right}${searchFieldItemPaddingUnits.Tablet} ${searchFieldItemPaddingTablet.bottom}${searchFieldItemPaddingUnits.Tablet} ${searchFieldItemPaddingTablet.left}${searchFieldItemPaddingUnits.Tablet}`;
    const searchFieldItemPaddingMobileWidth = `${searchFieldItemPaddingMobile.top}${searchFieldItemPaddingUnits.Mobile} ${searchFieldItemPaddingMobile.right}${searchFieldItemPaddingUnits.Mobile} ${searchFieldItemPaddingMobile.bottom}${searchFieldItemPaddingUnits.Mobile} ${searchFieldItemPaddingMobile.left}${searchFieldItemPaddingUnits.Mobile}`;
    /** End Input Field Padding */

    /** Start Input Field Border */
    const searchFieldItemBorderDesktopWidth = `${searchFieldItemBorderDesktop.top}${searchFieldItemBorderUnits.Desktop} ${searchFieldItemBorderDesktop.right}${searchFieldItemBorderUnits.Desktop} ${searchFieldItemBorderDesktop.bottom}${searchFieldItemBorderUnits.Desktop} ${searchFieldItemBorderDesktop.left}${searchFieldItemBorderUnits.Desktop}`;
    const searchFieldItemBorderTabletWidth = `${searchFieldItemBorderTablet.top}${searchFieldItemBorderUnits.Tablet} ${searchFieldItemBorderTablet.right}${searchFieldItemBorderUnits.Tablet} ${searchFieldItemBorderTablet.bottom}${searchFieldItemBorderUnits.Tablet} ${searchFieldItemBorderTablet.left}${searchFieldItemBorderUnits.Tablet}`;
    const searchFieldItemBorderMobileWidth = `${searchFieldItemBorderMobile.top}${searchFieldItemBorderUnits.Mobile} ${searchFieldItemBorderMobile.right}${searchFieldItemBorderUnits.Mobile} ${searchFieldItemBorderMobile.bottom}${searchFieldItemBorderUnits.Mobile} ${searchFieldItemBorderMobile.left}${searchFieldItemBorderUnits.Mobile}`;
    /** End Input Field Border */

    /** Start Input Field Border Radius */
    const searchFieldItemBorderRadiusDesktopWidth = `${searchFieldItemBorderRadiusDesktop.top}${searchFieldItemBorderRadiusUnits.Desktop} ${searchFieldItemBorderRadiusDesktop.right}${searchFieldItemBorderRadiusUnits.Desktop} ${searchFieldItemBorderRadiusDesktop.bottom}${searchFieldItemBorderRadiusUnits.Desktop} ${searchFieldItemBorderRadiusDesktop.left}${searchFieldItemBorderRadiusUnits.Desktop}`;
    const searchFieldItemBorderRadiusTabletWidth = `${searchFieldItemBorderRadiusTablet.top}${searchFieldItemBorderRadiusUnits.Tablet} ${searchFieldItemBorderRadiusTablet.right}${searchFieldItemBorderRadiusUnits.Tablet} ${searchFieldItemBorderRadiusTablet.bottom}${searchFieldItemBorderRadiusUnits.Tablet} ${searchFieldItemBorderRadiusTablet.left}${searchFieldItemBorderRadiusUnits.Tablet}`;
    const searchFieldItemBorderRadiusMobileWidth = `${searchFieldItemBorderRadiusMobile.top}${searchFieldItemBorderRadiusUnits.Mobile} ${searchFieldItemBorderRadiusMobile.right}${searchFieldItemBorderRadiusUnits.Mobile} ${searchFieldItemBorderRadiusMobile.bottom}${searchFieldItemBorderRadiusUnits.Mobile} ${searchFieldItemBorderRadiusMobile.left}${searchFieldItemBorderRadiusUnits.Mobile}`;
    /** End Input Field Border Radius */

    /** Start Input Field Padding */
    const searchFieldItemTitlePaddingDesktopWidth = `${searchFieldItemTitlePaddingDesktop.top}${searchFieldItemTitlePaddingUnits.Desktop} ${searchFieldItemTitlePaddingDesktop.right}${searchFieldItemTitlePaddingUnits.Desktop} ${searchFieldItemTitlePaddingDesktop.bottom}${searchFieldItemTitlePaddingUnits.Desktop} ${searchFieldItemTitlePaddingDesktop.left}${searchFieldItemTitlePaddingUnits.Desktop}`;
    const searchFieldItemTitlePaddingTabletWidth = `${searchFieldItemTitlePaddingTablet.top}${searchFieldItemTitlePaddingUnits.Tablet} ${searchFieldItemTitlePaddingTablet.right}${searchFieldItemTitlePaddingUnits.Tablet} ${searchFieldItemTitlePaddingTablet.bottom}${searchFieldItemTitlePaddingUnits.Tablet} ${searchFieldItemTitlePaddingTablet.left}${searchFieldItemTitlePaddingUnits.Tablet}`;
    const searchFieldItemTitlePaddingMobileWidth = `${searchFieldItemTitlePaddingMobile.top}${searchFieldItemTitlePaddingUnits.Mobile} ${searchFieldItemTitlePaddingMobile.right}${searchFieldItemTitlePaddingUnits.Mobile} ${searchFieldItemTitlePaddingMobile.bottom}${searchFieldItemTitlePaddingUnits.Mobile} ${searchFieldItemTitlePaddingMobile.left}${searchFieldItemTitlePaddingUnits.Mobile}`;
    /** End Input Field Padding */

    /** Start Input Field Border */
    const searchFieldItemTitleBorderDesktopWidth = `${searchFieldItemTitleBorderDesktop.top}${searchFieldItemTitleBorderUnits.Desktop} ${searchFieldItemTitleBorderDesktop.right}${searchFieldItemTitleBorderUnits.Desktop} ${searchFieldItemTitleBorderDesktop.bottom}${searchFieldItemTitleBorderUnits.Desktop} ${searchFieldItemTitleBorderDesktop.left}${searchFieldItemTitleBorderUnits.Desktop}`;
    const searchFieldItemTitleBorderTabletWidth = `${searchFieldItemTitleBorderTablet.top}${searchFieldItemTitleBorderUnits.Tablet} ${searchFieldItemTitleBorderTablet.right}${searchFieldItemTitleBorderUnits.Tablet} ${searchFieldItemTitleBorderTablet.bottom}${searchFieldItemTitleBorderUnits.Tablet} ${searchFieldItemTitleBorderTablet.left}${searchFieldItemTitleBorderUnits.Tablet}`;
    const searchFieldItemTitleBorderMobileWidth = `${searchFieldItemTitleBorderMobile.top}${searchFieldItemTitleBorderUnits.Mobile} ${searchFieldItemTitleBorderMobile.right}${searchFieldItemTitleBorderUnits.Mobile} ${searchFieldItemTitleBorderMobile.bottom}${searchFieldItemTitleBorderUnits.Mobile} ${searchFieldItemTitleBorderMobile.left}${searchFieldItemTitleBorderUnits.Mobile}`;
    /** End Input Field Border */

    /** Start Input Field Border Radius */
    const searchFieldItemTitleBorderRadiusDesktopWidth = `${searchFieldItemTitleBorderRadiusDesktop.top}${searchFieldItemTitleBorderRadiusUnits.Desktop} ${searchFieldItemTitleBorderRadiusDesktop.right}${searchFieldItemTitleBorderRadiusUnits.Desktop} ${searchFieldItemTitleBorderRadiusDesktop.bottom}${searchFieldItemTitleBorderRadiusUnits.Desktop} ${searchFieldItemTitleBorderRadiusDesktop.left}${searchFieldItemTitleBorderRadiusUnits.Desktop}`;
    const searchFieldItemTitleBorderRadiusTabletWidth = `${searchFieldItemTitleBorderRadiusTablet.top}${searchFieldItemTitleBorderRadiusUnits.Tablet} ${searchFieldItemTitleBorderRadiusTablet.right}${searchFieldItemTitleBorderRadiusUnits.Tablet} ${searchFieldItemTitleBorderRadiusTablet.bottom}${searchFieldItemTitleBorderRadiusUnits.Tablet} ${searchFieldItemTitleBorderRadiusTablet.left}${searchFieldItemTitleBorderRadiusUnits.Tablet}`;
    const searchFieldItemTitleBorderRadiusMobileWidth = `${searchFieldItemTitleBorderRadiusMobile.top}${searchFieldItemTitleBorderRadiusUnits.Mobile} ${searchFieldItemTitleBorderRadiusMobile.right}${searchFieldItemTitleBorderRadiusUnits.Mobile} ${searchFieldItemTitleBorderRadiusMobile.bottom}${searchFieldItemTitleBorderRadiusUnits.Mobile} ${searchFieldItemTitleBorderRadiusMobile.left}${searchFieldItemTitleBorderRadiusUnits.Mobile}`;
    /** End Input Field Border Radius */

    /** Start Input Field Padding */
    const searchFieldItemMetaPaddingDesktopWidth = `${searchFieldItemMetaPaddingDesktop.top}${searchFieldItemMetaPaddingUnits.Desktop} ${searchFieldItemMetaPaddingDesktop.right}${searchFieldItemMetaPaddingUnits.Desktop} ${searchFieldItemMetaPaddingDesktop.bottom}${searchFieldItemMetaPaddingUnits.Desktop} ${searchFieldItemMetaPaddingDesktop.left}${searchFieldItemMetaPaddingUnits.Desktop}`;
    const searchFieldItemMetaPaddingTabletWidth = `${searchFieldItemMetaPaddingTablet.top}${searchFieldItemMetaPaddingUnits.Tablet} ${searchFieldItemMetaPaddingTablet.right}${searchFieldItemMetaPaddingUnits.Tablet} ${searchFieldItemMetaPaddingTablet.bottom}${searchFieldItemMetaPaddingUnits.Tablet} ${searchFieldItemMetaPaddingTablet.left}${searchFieldItemMetaPaddingUnits.Tablet}`;
    const searchFieldItemMetaPaddingMobileWidth = `${searchFieldItemMetaPaddingMobile.top}${searchFieldItemMetaPaddingUnits.Mobile} ${searchFieldItemMetaPaddingMobile.right}${searchFieldItemMetaPaddingUnits.Mobile} ${searchFieldItemMetaPaddingMobile.bottom}${searchFieldItemMetaPaddingUnits.Mobile} ${searchFieldItemMetaPaddingMobile.left}${searchFieldItemMetaPaddingUnits.Mobile}`;
    /** End Input Field Padding */

    /** Start Input Field Border */
    const searchFieldItemMetaBorderDesktopWidth = `${searchFieldItemMetaBorderDesktop.top}${searchFieldItemMetaBorderUnits.Desktop} ${searchFieldItemMetaBorderDesktop.right}${searchFieldItemMetaBorderUnits.Desktop} ${searchFieldItemMetaBorderDesktop.bottom}${searchFieldItemMetaBorderUnits.Desktop} ${searchFieldItemMetaBorderDesktop.left}${searchFieldItemMetaBorderUnits.Desktop}`;
    const searchFieldItemMetaBorderTabletWidth = `${searchFieldItemMetaBorderTablet.top}${searchFieldItemMetaBorderUnits.Tablet} ${searchFieldItemMetaBorderTablet.right}${searchFieldItemMetaBorderUnits.Tablet} ${searchFieldItemMetaBorderTablet.bottom}${searchFieldItemMetaBorderUnits.Tablet} ${searchFieldItemMetaBorderTablet.left}${searchFieldItemMetaBorderUnits.Tablet}`;
    const searchFieldItemMetaBorderMobileWidth = `${searchFieldItemMetaBorderMobile.top}${searchFieldItemMetaBorderUnits.Mobile} ${searchFieldItemMetaBorderMobile.right}${searchFieldItemMetaBorderUnits.Mobile} ${searchFieldItemMetaBorderMobile.bottom}${searchFieldItemMetaBorderUnits.Mobile} ${searchFieldItemMetaBorderMobile.left}${searchFieldItemMetaBorderUnits.Mobile}`;
    /** End Input Field Border */

    /** Start Input Field Border Radius */
    const searchFieldItemMetaBorderRadiusDesktopWidth = `${searchFieldItemMetaBorderRadiusDesktop.top}${searchFieldItemMetaBorderRadiusUnits.Desktop} ${searchFieldItemMetaBorderRadiusDesktop.right}${searchFieldItemMetaBorderRadiusUnits.Desktop} ${searchFieldItemMetaBorderRadiusDesktop.bottom}${searchFieldItemMetaBorderRadiusUnits.Desktop} ${searchFieldItemMetaBorderRadiusDesktop.left}${searchFieldItemMetaBorderRadiusUnits.Desktop}`;
    const searchFieldItemMetaBorderRadiusTabletWidth = `${searchFieldItemMetaBorderRadiusTablet.top}${searchFieldItemMetaBorderRadiusUnits.Tablet} ${searchFieldItemMetaBorderRadiusTablet.right}${searchFieldItemMetaBorderRadiusUnits.Tablet} ${searchFieldItemMetaBorderRadiusTablet.bottom}${searchFieldItemMetaBorderRadiusUnits.Tablet} ${searchFieldItemMetaBorderRadiusTablet.left}${searchFieldItemMetaBorderRadiusUnits.Tablet}`;
    const searchFieldItemMetaBorderRadiusMobileWidth = `${searchFieldItemMetaBorderRadiusMobile.top}${searchFieldItemMetaBorderRadiusUnits.Mobile} ${searchFieldItemMetaBorderRadiusMobile.right}${searchFieldItemMetaBorderRadiusUnits.Mobile} ${searchFieldItemMetaBorderRadiusMobile.bottom}${searchFieldItemMetaBorderRadiusUnits.Mobile} ${searchFieldItemMetaBorderRadiusMobile.left}${searchFieldItemMetaBorderRadiusUnits.Mobile}`;
    /** End Input Field Border Radius */

    /** Start Input Field Padding */
    const SearchViewAllResultsPaddingDesktopWidth = `${SearchViewAllResultsPaddingDesktop.top}${SearchViewAllResultsPaddingUnits.Desktop} ${SearchViewAllResultsPaddingDesktop.right}${SearchViewAllResultsPaddingUnits.Desktop} ${SearchViewAllResultsPaddingDesktop.bottom}${SearchViewAllResultsPaddingUnits.Desktop} ${SearchViewAllResultsPaddingDesktop.left}${SearchViewAllResultsPaddingUnits.Desktop}`;
    const SearchViewAllResultsPaddingTabletWidth = `${SearchViewAllResultsPaddingTablet.top}${SearchViewAllResultsPaddingUnits.Tablet} ${SearchViewAllResultsPaddingTablet.right}${SearchViewAllResultsPaddingUnits.Tablet} ${SearchViewAllResultsPaddingTablet.bottom}${SearchViewAllResultsPaddingUnits.Tablet} ${SearchViewAllResultsPaddingTablet.left}${SearchViewAllResultsPaddingUnits.Tablet}`;
    const SearchViewAllResultsPaddingMobileWidth = `${SearchViewAllResultsPaddingMobile.top}${SearchViewAllResultsPaddingUnits.Mobile} ${SearchViewAllResultsPaddingMobile.right}${SearchViewAllResultsPaddingUnits.Mobile} ${SearchViewAllResultsPaddingMobile.bottom}${SearchViewAllResultsPaddingUnits.Mobile} ${SearchViewAllResultsPaddingMobile.left}${SearchViewAllResultsPaddingUnits.Mobile}`;
    /** End Input Field Padding */

    /** Start Input Field Border */
    const SearchViewAllResultsBorderDesktopWidth = `${SearchViewAllResultsBorderDesktop.top}${SearchViewAllResultsBorderUnits.Desktop} ${SearchViewAllResultsBorderDesktop.right}${SearchViewAllResultsBorderUnits.Desktop} ${SearchViewAllResultsBorderDesktop.bottom}${SearchViewAllResultsBorderUnits.Desktop} ${SearchViewAllResultsBorderDesktop.left}${SearchViewAllResultsBorderUnits.Desktop}`;
    const SearchViewAllResultsBorderTabletWidth = `${SearchViewAllResultsBorderTablet.top}${SearchViewAllResultsBorderUnits.Tablet} ${SearchViewAllResultsBorderTablet.right}${SearchViewAllResultsBorderUnits.Tablet} ${SearchViewAllResultsBorderTablet.bottom}${SearchViewAllResultsBorderUnits.Tablet} ${SearchViewAllResultsBorderTablet.left}${SearchViewAllResultsBorderUnits.Tablet}`;
    const SearchViewAllResultsBorderMobileWidth = `${SearchViewAllResultsBorderMobile.top}${SearchViewAllResultsBorderUnits.Mobile} ${SearchViewAllResultsBorderMobile.right}${SearchViewAllResultsBorderUnits.Mobile} ${SearchViewAllResultsBorderMobile.bottom}${SearchViewAllResultsBorderUnits.Mobile} ${SearchViewAllResultsBorderMobile.left}${SearchViewAllResultsBorderUnits.Mobile}`;
    /** End Input Field Border */

    /** Start Input Field Border Radius */
    const SearchViewAllResultsBorderRadiusDesktopWidth = `${SearchViewAllResultsBorderRadiusDesktop.top}${SearchViewAllResultsBorderRadiusUnits.Desktop} ${SearchViewAllResultsBorderRadiusDesktop.right}${SearchViewAllResultsBorderRadiusUnits.Desktop} ${SearchViewAllResultsBorderRadiusDesktop.bottom}${SearchViewAllResultsBorderRadiusUnits.Desktop} ${SearchViewAllResultsBorderRadiusDesktop.left}${SearchViewAllResultsBorderRadiusUnits.Desktop}`;
    const SearchViewAllResultsBorderRadiusTabletWidth = `${SearchViewAllResultsBorderRadiusTablet.top}${SearchViewAllResultsBorderRadiusUnits.Tablet} ${SearchViewAllResultsBorderRadiusTablet.right}${SearchViewAllResultsBorderRadiusUnits.Tablet} ${SearchViewAllResultsBorderRadiusTablet.bottom}${SearchViewAllResultsBorderRadiusUnits.Tablet} ${SearchViewAllResultsBorderRadiusTablet.left}${SearchViewAllResultsBorderRadiusUnits.Tablet}`;
    const SearchViewAllResultsBorderRadiusMobileWidth = `${SearchViewAllResultsBorderRadiusMobile.top}${SearchViewAllResultsBorderRadiusUnits.Mobile} ${SearchViewAllResultsBorderRadiusMobile.right}${SearchViewAllResultsBorderRadiusUnits.Mobile} ${SearchViewAllResultsBorderRadiusMobile.bottom}${SearchViewAllResultsBorderRadiusUnits.Mobile} ${SearchViewAllResultsBorderRadiusMobile.left}${SearchViewAllResultsBorderRadiusUnits.Mobile}`;
    /** End Input Field Border Radius */

    const searchBlockStyle = `
        .${blockID}.fb-search-block{
            ${searchIconZIndex.Desktop ? `z-index: ${searchIconZIndex.Desktop};` : ''}
        }
        .${blockID} .fb-search-container .fb-search-button-wrapper {
            ${searchButtonWidth.Desktop && searchButtonWidthUnits.Desktop ? `width: ${searchButtonWidth.Desktop}${searchButtonWidthUnits.Desktop};` : ''}
            ${searchIconGap.Desktop && searchIconGapUnits.Desktop ? `gap: ${searchIconGap.Desktop}${searchIconGapUnits.Desktop};` : ''}
            ${buttonBorder ? `border: ${buttonBorder};` : ''}
            ${buttonBorderColor ? `border-color: ${buttonBorderColor};` : ''}
            ${buttonBorderDesktopWidth && buttonBorderDesktop?.top ? `border-width: ${buttonBorderDesktopWidth};` : ''}
            ${buttonBorderRadiusDesktopWidth && buttonBorderRadiusDesktop?.top ? `border-radius: ${buttonBorderRadiusDesktopWidth};` : ''}
            ${buttonPaddingDesktopWidth && buttonPaddingDesktop?.top ? `padding: ${buttonPaddingDesktopWidth};` : ''}
            transition: ease-in-out 0.3s;
        }
        .${blockID} .fb-search-container .fb-search-button-wrapper:hover {
            ${buttonBorderColorHover ? `border-color: ${buttonBorderColorHover};` : ''}
        }

        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field {
            ${searchButtonInputFieldWidth.Desktop && searchButtonInputFieldWidthUnits.Desktop ? `width: ${searchButtonInputFieldWidth.Desktop}${searchButtonInputFieldWidthUnits.Desktop};` : ''}
        }

        .${blockID} .fb-search-container .fb-search-button-wrapper span {
            ${buttonTextGlobalTypoSwitcher.fontFamily === true && buttonTextGlobalTypographyData.fontFamily ? `font-family: ${buttonTextGlobalTypographyData.fontFamily};` : ''}
            ${buttonTextGlobalTypoSwitcher.fontSize === true && buttonTextGlobalTypographyData.fontSize ? `font-size: ${buttonTextGlobalTypographyData.fontSize};` : ''}
            ${buttonTextGlobalTypoSwitcher.fontWeight === true && buttonTextGlobalTypographyData.fontWeight ? `font-weight: ${buttonTextGlobalTypographyData.fontWeight};` : ''}
            ${buttonTextGlobalTypoSwitcher.fontStyle === true && buttonTextGlobalTypographyData.fontStyle ? `font-style: ${buttonTextGlobalTypographyData.fontStyle};` : ''}
            ${buttonTextGlobalTypoSwitcher.textTransform === true && buttonTextGlobalTypographyData.textTransform ? `text-transform: ${buttonTextGlobalTypographyData.textTransform};` : ''}
            ${buttonTextGlobalTypoSwitcher.textDecoration === true && buttonTextGlobalTypographyData.textDecoration ? `text-decoration: ${buttonTextGlobalTypographyData.textDecoration};` : ''}
            ${buttonTextGlobalTypoSwitcher.letterSpacing === true && buttonTextGlobalTypographyData.letterSpacing ? `letter-spacing: ${buttonTextGlobalTypographyData.letterSpacing};` : ''}
            ${buttonTextGlobalTypoSwitcher.lineHeight === true && buttonTextGlobalTypographyData.lineHeight ? `line-height: ${buttonTextGlobalTypographyData.lineHeight};` : ''}
                
            ${buttonTextGlobalTypoSwitcher.fontFamily === false && buttonTextFontFamily && buttonTextFontFamily !== 'Default' ? `font-family: ${buttonTextFontFamily};` : ''}
            ${buttonTextGlobalTypoSwitcher.fontSize === false && buttonTextFontSize.Desktop && buttonTextFontSizeUnits.Desktop ? `font-size: ${buttonTextFontSize.Desktop}${buttonTextFontSizeUnits.Desktop};` : ''}
            ${buttonTextGlobalTypoSwitcher.fontWeight === false && buttonTextFontWeight ? `font-weight: ${buttonTextFontWeight};` : ''}
            ${buttonTextGlobalTypoSwitcher.fontStyle === false && buttonTextFontStyle ? `font-style: ${buttonTextFontStyle};` : ''}
            ${buttonTextGlobalTypoSwitcher.textTransform === false && buttonTextTransform ? `text-transform: ${buttonTextTransform};` : ''}
            ${buttonTextGlobalTypoSwitcher.textDecoration === false && buttonTextDecoration ? `text-decoration: ${buttonTextDecoration};` : ''}
            ${buttonTextGlobalTypoSwitcher.letterSpacing === false && buttonTextLetterSpacing.Desktop && buttonTextLetterSpacingUnits.Desktop ? `letter-spacing: ${buttonTextLetterSpacing.Desktop}${buttonTextLetterSpacingUnits.Desktop};` : ''}
            ${buttonTextGlobalTypoSwitcher.lineHeight === false && buttonTextLineHeight.Desktop && buttonTextLineHeightUnits.Desktop ? `line-height: ${buttonTextLineHeight.Desktop}${buttonTextLineHeightUnits.Desktop};` : ''}

            ${buttonTextColor ? `color: ${buttonTextColor};` : ''}
        }
        .${blockID} .fb-search-container .fb-search-button-wrapper:hover span {
            ${buttonTextColorHover ? `color: ${buttonTextColorHover};` : ''}
        }

        .${blockID} .fb-search-container .fb-search-button-wrapper .fb-search-icon-wrapper svg {
            ${searchIconSize.Desktop && searchIconSizeUnits.Desktop ? `width: ${searchIconSize.Desktop}${searchIconSizeUnits.Desktop};` : ''} 
            ${searchIconSize.Desktop && searchIconSizeUnits.Desktop ? `height: ${searchIconSize.Desktop}${searchIconSizeUnits.Desktop};` : ''}
            ${searchIconColor ? `fill: ${searchIconColor};` : ''}
            transform: rotate(${searchIconRotate.Desktop}deg);
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-search-container .fb-search-button-wrapper:hover .fb-search-icon-wrapper svg {
            ${searchIconHoverColor ? `fill: ${searchIconHoverColor};` : ''}
            transform: rotate(${searchIconRotateHover.Desktop}deg);
        }

        .${blockID} .fb-search-container .fb-search-button-wrapper .fb-search-icon-image {
            ${searchIconImageWidth ? `width: ${searchIconImageWidth.Desktop}${searchIconImageWidthUnits.Desktop};` : ''}
            ${searchIconImageHeight ? `height: ${searchIconImageHeight.Desktop}${searchIconImageHeightUnits.Desktop};` : ''}
            ${searchIconImageDisplay ? `object-fit: ${searchIconImageDisplay};` : ''}
            transform: rotate(${searchIconImageRotate.Desktop}deg);
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-search-container .fb-search-button-wrapper:hover .fb-search-icon-image {
            transform: rotate(${searchIconImageRotateHover.Desktop}deg);
        }

        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field input {
            ${inputFieldTextGlobalTypoSwitcher.fontFamily === true && inputFieldTextGlobalTypographyData.fontFamily ? `font-family: ${inputFieldTextGlobalTypographyData.fontFamily};` : ''}
            ${inputFieldTextGlobalTypoSwitcher.fontSize === true && inputFieldTextGlobalTypographyData.fontSize ? `font-size: ${inputFieldTextGlobalTypographyData.fontSize};` : ''}
            ${inputFieldTextGlobalTypoSwitcher.fontWeight === true && inputFieldTextGlobalTypographyData.fontWeight ? `font-weight: ${inputFieldTextGlobalTypographyData.fontWeight};` : ''}
            ${inputFieldTextGlobalTypoSwitcher.fontStyle === true && inputFieldTextGlobalTypographyData.fontStyle ? `font-style: ${inputFieldTextGlobalTypographyData.fontStyle};` : ''}
            ${inputFieldTextGlobalTypoSwitcher.textTransform === true && inputFieldTextGlobalTypographyData.textTransform ? `text-transform: ${inputFieldTextGlobalTypographyData.textTransform};` : ''}
            ${inputFieldTextGlobalTypoSwitcher.textDecoration === true && inputFieldTextGlobalTypographyData.textDecoration ? `text-decoration: ${inputFieldTextGlobalTypographyData.textDecoration};` : ''}
            ${inputFieldTextGlobalTypoSwitcher.letterSpacing === true && inputFieldTextGlobalTypographyData.letterSpacing ? `letter-spacing: ${inputFieldTextGlobalTypographyData.letterSpacing};` : ''}
            ${inputFieldTextGlobalTypoSwitcher.lineHeight === true && inputFieldTextGlobalTypographyData.lineHeight ? `line-height: ${inputFieldTextGlobalTypographyData.lineHeight};` : ''}
                
            ${inputFieldTextGlobalTypoSwitcher.fontFamily === false && inputFieldTextFontFamily && inputFieldTextFontFamily !== 'Default' ? `font-family: ${inputFieldTextFontFamily};` : ''}
            ${inputFieldTextGlobalTypoSwitcher.fontSize === false && inputFieldTextFontSize.Desktop && inputFieldTextFontSizeUnits.Desktop ? `font-size: ${inputFieldTextFontSize.Desktop}${inputFieldTextFontSizeUnits.Desktop};` : ''}
            ${inputFieldTextGlobalTypoSwitcher.fontWeight === false && inputFieldTextFontWeight ? `font-weight: ${inputFieldTextFontWeight};` : ''}
            ${inputFieldTextGlobalTypoSwitcher.fontStyle === false && inputFieldTextFontStyle ? `font-style: ${inputFieldTextFontStyle};` : ''}
            ${inputFieldTextGlobalTypoSwitcher.textTransform === false && inputFieldTextTransform ? `text-transform: ${inputFieldTextTransform};` : ''}
            ${inputFieldTextGlobalTypoSwitcher.textDecoration === false && inputFieldTextDecoration ? `text-decoration: ${inputFieldTextDecoration};` : ''}
            ${inputFieldTextGlobalTypoSwitcher.letterSpacing === false && inputFieldTextLetterSpacing.Desktop && inputFieldTextLetterSpacingUnits.Desktop ? `letter-spacing: ${inputFieldTextLetterSpacing.Desktop}${inputFieldTextLetterSpacingUnits.Desktop};` : ''}
            ${inputFieldTextGlobalTypoSwitcher.lineHeight === false && inputFieldTextLineHeight.Desktop && inputFieldTextLineHeightUnits.Desktop ? `line-height: ${inputFieldTextLineHeight.Desktop}${inputFieldTextLineHeightUnits.Desktop};` : ''}
            ${inputFieldTextColor ? `color: ${inputFieldTextColor};` : ''}

            ${inputFieldBorder ? `border: ${inputFieldBorder};` : ''}
            ${inputFieldBorderColor ? `border-color: ${inputFieldBorderColor};` : ''}
            ${inputFieldBorderDesktopWidth && inputFieldBorderDesktop?.top ? `border-width: ${inputFieldBorderDesktopWidth};` : ''}
            ${inputFieldBorderRadiusDesktopWidth && inputFieldBorderRadiusDesktop?.top ? `border-radius: ${inputFieldBorderRadiusDesktopWidth};` : ''}
            ${inputFieldPaddingDesktopWidth && inputFieldPaddingDesktop?.top ? `padding: ${inputFieldPaddingDesktopWidth};` : ''}
        }

        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field:hover input {
            ${inputFieldTextColorHover ? `color: ${inputFieldTextColorHover};` : ''}
            ${inputFieldBorderColorHover ? `border-color: ${inputFieldBorderColorHover};` : ''}
        }

        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results{
            ${searchFieldBgColor ? `background: ${searchFieldBgColor};` : ''}
            ${searchFieldBorder ? `border: ${searchFieldBorder};` : ''}
            ${searchFieldBorderColor ? `border-color: ${searchFieldBorderColor};` : ''}
            ${searchFieldBorderDesktopWidth && searchFieldBorderDesktop?.top ? `border-width: ${searchFieldBorderDesktopWidth};` : ''}
            ${searchFieldBorderRadiusDesktopWidth && searchFieldBorderRadiusDesktop?.top ? `border-radius: ${searchFieldBorderRadiusDesktopWidth};` : ''}
            ${searchFieldPaddingDesktopWidth && searchFieldPaddingDesktop?.top ? `padding: ${searchFieldPaddingDesktopWidth};` : ''}
        }

        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results:hover{
            ${searchFieldBgColorHover ? `background: ${searchFieldBgColorHover};` : ''}
            ${searchFieldBorderColorHover ? `border-color: ${searchFieldBorderColorHover};` : ''}
        }

        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-item{
            ${searchFieldItemColor ? `background: ${searchFieldItemColor};` : ''}
            ${searchFieldItemBorder ? `border: ${searchFieldItemBorder};` : ''}
            ${searchFieldItemBorderColor ? `border-color: ${searchFieldItemBorderColor};` : ''}
            ${searchFieldItemBorderDesktopWidth && searchFieldItemBorderDesktop?.top ? `border-width: ${searchFieldItemBorderDesktopWidth};` : ''}
            ${searchFieldItemBorderRadiusDesktopWidth && searchFieldItemBorderRadiusDesktop?.top ? `border-radius: ${searchFieldItemBorderRadiusDesktopWidth};` : ''}
            ${searchFieldItemPaddingDesktopWidth && searchFieldItemPaddingDesktop?.top ? `padding: ${searchFieldItemPaddingDesktopWidth};` : ''}
        }

        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-item:hover{
            ${searchFieldItemColorHover ? `background: ${searchFieldItemColorHover};` : ''}
            ${searchFieldItemBorderColorHover ? `border-color: ${searchFieldItemBorderColorHover};` : ''}
        }

        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-item .fb-search-result-title{
            ${searchFieldItemTitleGlobalTypoSwitcher.fontFamily === true && searchFieldItemTitleGlobalTypographyData.fontFamily ? `font-family: ${searchFieldItemTitleGlobalTypographyData.fontFamily};` : ''}
            ${searchFieldItemTitleGlobalTypoSwitcher.fontSize === true && searchFieldItemTitleGlobalTypographyData.fontSize ? `font-size: ${searchFieldItemTitleGlobalTypographyData.fontSize};` : ''}
            ${searchFieldItemTitleGlobalTypoSwitcher.fontWeight === true && searchFieldItemTitleGlobalTypographyData.fontWeight ? `font-weight: ${searchFieldItemTitleGlobalTypographyData.fontWeight};` : ''}
            ${searchFieldItemTitleGlobalTypoSwitcher.fontStyle === true && searchFieldItemTitleGlobalTypographyData.fontStyle ? `font-style: ${searchFieldItemTitleGlobalTypographyData.fontStyle};` : ''}
            ${searchFieldItemTitleGlobalTypoSwitcher.textTransform === true && searchFieldItemTitleGlobalTypographyData.textTransform ? `text-transform: ${searchFieldItemTitleGlobalTypographyData.textTransform};` : ''}
            ${searchFieldItemTitleGlobalTypoSwitcher.textDecoration === true && searchFieldItemTitleGlobalTypographyData.textDecoration ? `text-decoration: ${searchFieldItemTitleGlobalTypographyData.textDecoration};` : ''}
            ${searchFieldItemTitleGlobalTypoSwitcher.letterSpacing === true && searchFieldItemTitleGlobalTypographyData.letterSpacing ? `letter-spacing: ${searchFieldItemTitleGlobalTypographyData.letterSpacing};` : ''}
            ${searchFieldItemTitleGlobalTypoSwitcher.lineHeight === true && searchFieldItemTitleGlobalTypographyData.lineHeight ? `line-height: ${searchFieldItemTitleGlobalTypographyData.lineHeight};` : ''}
                
            ${searchFieldItemTitleGlobalTypoSwitcher.fontFamily === false && searchFieldItemTitleFontFamily && searchFieldItemTitleFontFamily !== 'Default' ? `font-family: ${searchFieldItemTitleFontFamily};` : ''}
            ${searchFieldItemTitleGlobalTypoSwitcher.fontSize === false && searchFieldItemTitleFontSize.Desktop && searchFieldItemTitleFontSizeUnits.Desktop ? `font-size: ${searchFieldItemTitleFontSize.Desktop}${searchFieldItemTitleFontSizeUnits.Desktop};` : ''}
            ${searchFieldItemTitleGlobalTypoSwitcher.fontWeight === false && searchFieldItemTitleFontWeight ? `font-weight: ${searchFieldItemTitleFontWeight};` : ''}
            ${searchFieldItemTitleGlobalTypoSwitcher.fontStyle === false && searchFieldItemTitleFontStyle ? `font-style: ${searchFieldItemTitleFontStyle};` : ''}
            ${searchFieldItemTitleGlobalTypoSwitcher.textTransform === false && searchFieldItemTitleTransform ? `text-transform: ${searchFieldItemTitleTransform};` : ''}
            ${searchFieldItemTitleGlobalTypoSwitcher.textDecoration === false && searchFieldItemTitleDecoration ? `text-decoration: ${searchFieldItemTitleDecoration};` : ''}
            ${searchFieldItemTitleGlobalTypoSwitcher.letterSpacing === false && searchFieldItemTitleLetterSpacing.Desktop && searchFieldItemTitleLetterSpacingUnits.Desktop ? `letter-spacing: ${searchFieldItemTitleLetterSpacing.Desktop}${searchFieldItemTitleLetterSpacingUnits.Desktop};` : ''}
            ${searchFieldItemTitleGlobalTypoSwitcher.lineHeight === false && searchFieldItemTitleLineHeight.Desktop && searchFieldItemTitleLineHeightUnits.Desktop ? `line-height: ${searchFieldItemTitleLineHeight.Desktop}${searchFieldItemTitleLineHeightUnits.Desktop};` : ''}
            ${searchFieldItemTitleColor ? `color: ${searchFieldItemTitleColor};` : ''}
            ${searchFieldItemTitleBorder ? `border: ${searchFieldItemTitleBorder};` : ''}
            ${searchFieldItemTitleBorderColor ? `border-color: ${searchFieldItemTitleBorderColor};` : ''}
            ${searchFieldItemTitleBorderDesktopWidth && searchFieldItemTitleBorderDesktop?.top ? `border-width: ${searchFieldItemTitleBorderDesktopWidth};` : ''}
            ${searchFieldItemTitleBorderRadiusDesktopWidth && searchFieldItemTitleBorderRadiusDesktop?.top ? `border-radius: ${searchFieldItemTitleBorderRadiusDesktopWidth};` : ''}
            ${searchFieldItemTitlePaddingDesktopWidth && searchFieldItemTitlePaddingDesktop?.top ? `padding: ${searchFieldItemTitlePaddingDesktopWidth};` : ''}
        }
        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-item:hover .fb-search-result-title{
            ${searchFieldItemTitleColorHover ? `color: ${searchFieldItemTitleColorHover};` : ''}
            ${searchFieldItemTitleBorderColorHover ? `border-color: ${searchFieldItemTitleBorderColorHover};` : ''}
        }

        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-item .fb-search-result-meta{
            ${searchFieldItemMetaGlobalTypoSwitcher.fontFamily === true && searchFieldItemMetaGlobalTypographyData.fontFamily ? `font-family: ${searchFieldItemMetaGlobalTypographyData.fontFamily};` : ''}
            ${searchFieldItemMetaGlobalTypoSwitcher.fontSize === true && searchFieldItemMetaGlobalTypographyData.fontSize ? `font-size: ${searchFieldItemMetaGlobalTypographyData.fontSize};` : ''}
            ${searchFieldItemMetaGlobalTypoSwitcher.fontWeight === true && searchFieldItemMetaGlobalTypographyData.fontWeight ? `font-weight: ${searchFieldItemMetaGlobalTypographyData.fontWeight};` : ''}
            ${searchFieldItemMetaGlobalTypoSwitcher.fontStyle === true && searchFieldItemMetaGlobalTypographyData.fontStyle ? `font-style: ${searchFieldItemMetaGlobalTypographyData.fontStyle};` : ''}
            ${searchFieldItemMetaGlobalTypoSwitcher.textTransform === true && searchFieldItemMetaGlobalTypographyData.textTransform ? `text-transform: ${searchFieldItemMetaGlobalTypographyData.textTransform};` : ''}
            ${searchFieldItemMetaGlobalTypoSwitcher.textDecoration === true && searchFieldItemMetaGlobalTypographyData.textDecoration ? `text-decoration: ${searchFieldItemMetaGlobalTypographyData.textDecoration};` : ''}
            ${searchFieldItemMetaGlobalTypoSwitcher.letterSpacing === true && searchFieldItemMetaGlobalTypographyData.letterSpacing ? `letter-spacing: ${searchFieldItemMetaGlobalTypographyData.letterSpacing};` : ''}
            ${searchFieldItemMetaGlobalTypoSwitcher.lineHeight === true && searchFieldItemMetaGlobalTypographyData.lineHeight ? `line-height: ${searchFieldItemMetaGlobalTypographyData.lineHeight};` : ''}
                
            ${searchFieldItemMetaGlobalTypoSwitcher.fontFamily === false && searchFieldItemMetaFontFamily && searchFieldItemMetaFontFamily !== 'Default' ? `font-family: ${searchFieldItemMetaFontFamily};` : ''}
            ${searchFieldItemMetaGlobalTypoSwitcher.fontSize === false && searchFieldItemMetaFontSize.Desktop && searchFieldItemMetaFontSizeUnits.Desktop ? `font-size: ${searchFieldItemMetaFontSize.Desktop}${searchFieldItemMetaFontSizeUnits.Desktop};` : ''}
            ${searchFieldItemMetaGlobalTypoSwitcher.fontWeight === false && searchFieldItemMetaFontWeight ? `font-weight: ${searchFieldItemMetaFontWeight};` : ''}
            ${searchFieldItemMetaGlobalTypoSwitcher.fontStyle === false && searchFieldItemMetaFontStyle ? `font-style: ${searchFieldItemMetaFontStyle};` : ''}
            ${searchFieldItemMetaGlobalTypoSwitcher.textTransform === false && searchFieldItemMetaTransform ? `text-transform: ${searchFieldItemMetaTransform};` : ''}
            ${searchFieldItemMetaGlobalTypoSwitcher.textDecoration === false && searchFieldItemMetaDecoration ? `text-decoration: ${searchFieldItemMetaDecoration};` : ''}
            ${searchFieldItemMetaGlobalTypoSwitcher.letterSpacing === false && searchFieldItemMetaLetterSpacing.Desktop && searchFieldItemMetaLetterSpacingUnits.Desktop ? `letter-spacing: ${searchFieldItemMetaLetterSpacing.Desktop}${searchFieldItemMetaLetterSpacingUnits.Desktop};` : ''}
            ${searchFieldItemMetaGlobalTypoSwitcher.lineHeight === false && searchFieldItemMetaLineHeight.Desktop && searchFieldItemMetaLineHeightUnits.Desktop ? `line-height: ${searchFieldItemMetaLineHeight.Desktop}${searchFieldItemMetaLineHeightUnits.Desktop};` : ''}
            ${searchFieldItemMetaColor ? `color: ${searchFieldItemMetaColor};` : ''}
            ${searchFieldItemMetaBorder ? `border: ${searchFieldItemMetaBorder};` : ''}
            ${searchFieldItemMetaBorderColor ? `border-color: ${searchFieldItemMetaBorderColor};` : ''}
            ${searchFieldItemMetaBorderDesktopWidth && searchFieldItemMetaBorderDesktop?.top ? `border-width: ${searchFieldItemMetaBorderDesktopWidth};` : ''}
            ${searchFieldItemMetaBorderRadiusDesktopWidth && searchFieldItemMetaBorderRadiusDesktop?.top ? `border-radius: ${searchFieldItemMetaBorderRadiusDesktopWidth};` : ''}
            ${searchFieldItemMetaPaddingDesktopWidth && searchFieldItemMetaPaddingDesktop?.top ? `padding: ${searchFieldItemMetaPaddingDesktopWidth};` : ''}
            ${resultMetaGap?.Desktop ? `gap: ${resultMetaGap?.Desktop}${resultMetaGapUnits?.Desktop};` : ''}
        }
        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-item:hover .fb-search-result-meta{
            ${searchFieldItemMetaColorHover ? `color: ${searchFieldItemMetaColorHover};` : ''}
            ${searchFieldItemMetaBorderColorHover ? `border-color: ${searchFieldItemMetaBorderColorHover};` : ''}
        }
        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-results-footer{
            ${SearchViewAllResultsBgColor ? `background: ${SearchViewAllResultsBgColor};` : ''}
            ${SearchViewAllResultsBorder ? `border: ${SearchViewAllResultsBorder};` : ''}
            ${SearchViewAllResultsBorderColor ? `border-color: ${SearchViewAllResultsBorderColor};` : ''}
            ${SearchViewAllResultsBorderDesktopWidth && SearchViewAllResultsBorderDesktop?.top ? `border-width: ${SearchViewAllResultsBorderDesktopWidth};` : ''}
            ${SearchViewAllResultsBorderRadiusDesktopWidth && SearchViewAllResultsBorderRadiusDesktop?.top ? `border-radius: ${SearchViewAllResultsBorderRadiusDesktopWidth};` : ''}
            ${SearchViewAllResultsPaddingDesktopWidth && SearchViewAllResultsPaddingDesktop?.top ? `padding: ${SearchViewAllResultsPaddingDesktopWidth};` : ''}
        }
        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-results-footer:hover{
            ${SearchViewAllResultsBgColorHover ? `background: ${SearchViewAllResultsBgColorHover};` : ''}
            ${SearchViewAllResultsBorderColorHover ? `border-color: ${SearchViewAllResultsBorderColorHover};` : ''}
        }
        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-results-footer .fb-search-view-all{
            ${SearchViewAllResultsGlobalTypoSwitcher.fontFamily === true && SearchViewAllResultsGlobalTypographyData.fontFamily ? `font-family: ${SearchViewAllResultsGlobalTypographyData.fontFamily};` : ''}
            ${SearchViewAllResultsGlobalTypoSwitcher.fontSize === true && SearchViewAllResultsGlobalTypographyData.fontSize ? `font-size: ${SearchViewAllResultsGlobalTypographyData.fontSize};` : ''}
            ${SearchViewAllResultsGlobalTypoSwitcher.fontWeight === true && SearchViewAllResultsGlobalTypographyData.fontWeight ? `font-weight: ${SearchViewAllResultsGlobalTypographyData.fontWeight};` : ''}
            ${SearchViewAllResultsGlobalTypoSwitcher.fontStyle === true && SearchViewAllResultsGlobalTypographyData.fontStyle ? `font-style: ${SearchViewAllResultsGlobalTypographyData.fontStyle};` : ''}
            ${SearchViewAllResultsGlobalTypoSwitcher.textTransform === true && SearchViewAllResultsGlobalTypographyData.textTransform ? `text-transform: ${SearchViewAllResultsGlobalTypographyData.textTransform};` : ''}
            ${SearchViewAllResultsGlobalTypoSwitcher.textDecoration === true && SearchViewAllResultsGlobalTypographyData.textDecoration ? `text-decoration: ${SearchViewAllResultsGlobalTypographyData.textDecoration};` : ''}
            ${SearchViewAllResultsGlobalTypoSwitcher.letterSpacing === true && SearchViewAllResultsGlobalTypographyData.letterSpacing ? `letter-spacing: ${SearchViewAllResultsGlobalTypographyData.letterSpacing};` : ''}
            ${SearchViewAllResultsGlobalTypoSwitcher.lineHeight === true && SearchViewAllResultsGlobalTypographyData.lineHeight ? `line-height: ${SearchViewAllResultsGlobalTypographyData.lineHeight};` : ''}
                
            ${SearchViewAllResultsGlobalTypoSwitcher.fontFamily === false && SearchViewAllResultsFontFamily && SearchViewAllResultsFontFamily !== 'Default' ? `font-family: ${SearchViewAllResultsFontFamily};` : ''}
            ${SearchViewAllResultsGlobalTypoSwitcher.fontSize === false && SearchViewAllResultsFontSize.Desktop && SearchViewAllResultsFontSizeUnits.Desktop ? `font-size: ${SearchViewAllResultsFontSize.Desktop}${SearchViewAllResultsFontSizeUnits.Desktop};` : ''}
            ${SearchViewAllResultsGlobalTypoSwitcher.fontWeight === false && SearchViewAllResultsFontWeight ? `font-weight: ${SearchViewAllResultsFontWeight};` : ''}
            ${SearchViewAllResultsGlobalTypoSwitcher.fontStyle === false && SearchViewAllResultsFontStyle ? `font-style: ${SearchViewAllResultsFontStyle};` : ''}
            ${SearchViewAllResultsGlobalTypoSwitcher.textTransform === false && SearchViewAllResultsTransform ? `text-transform: ${SearchViewAllResultsTransform};` : ''}
            ${SearchViewAllResultsGlobalTypoSwitcher.textDecoration === false && SearchViewAllResultsDecoration ? `text-decoration: ${SearchViewAllResultsDecoration};` : ''}
            ${SearchViewAllResultsGlobalTypoSwitcher.letterSpacing === false && SearchViewAllResultsLetterSpacing.Desktop && SearchViewAllResultsLetterSpacingUnits.Desktop ? `letter-spacing: ${SearchViewAllResultsLetterSpacing.Desktop}${SearchViewAllResultsLetterSpacingUnits.Desktop};` : ''}
            ${SearchViewAllResultsGlobalTypoSwitcher.lineHeight === false && SearchViewAllResultsLineHeight.Desktop && SearchViewAllResultsLineHeightUnits.Desktop ? `line-height: ${SearchViewAllResultsLineHeight.Desktop}${SearchViewAllResultsLineHeightUnits.Desktop};` : ''}
            ${SearchViewAllResultsColor ? `color: ${SearchViewAllResultsColor};` : ''}
        }
        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-results-footer:hover .fb-search-view-all{
            ${SearchViewAllResultsColorHover ? `color: ${SearchViewAllResultsColorHover};` : ''}
        }
        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-meta .meta-divider:before{
            ${metaDividerSize?.Desktop ? `width: ${metaDividerSize?.Desktop}${metaDividerSizeUnits?.Desktop};` : ''}
            ${metaDividerSize?.Desktop ? `height: ${metaDividerSize?.Desktop}${metaDividerSizeUnits?.Desktop};` : ''}
            ${metaDividerColor ? `background: ${metaDividerColor};` : ''}
        }
        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-meta .meta-divider:before:hover{
            ${metaDividerColorHover ? `background: ${metaDividerColorHover};` : ''}
        }
        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-search-block{
                ${searchIconZIndex.Tablet ? `z-index: ${searchIconZIndex.Tablet};` : ''}
            }

            .${blockID} .fb-search-container .fb-search-button-wrapper {
                ${searchButtonWidth.Tablet && searchButtonWidthUnits.Tablet ? `width: ${searchButtonWidth.Tablet}${searchButtonWidthUnits.Tablet};` : ''}
                ${searchIconGap.Tablet && searchIconGapUnits.Tablet ? `gap: ${searchIconGap.Tablet}${searchIconGapUnits.Tablet};` : ''}
                ${buttonBorderTabletWidth && buttonBorderTablet?.top ? `border-width: ${buttonBorderTabletWidth};` : ''}
                ${buttonBorderRadiusTabletWidth && buttonBorderRadiusTablet?.top ? `border-radius: ${buttonBorderRadiusTabletWidth};` : ''}
                ${buttonPaddingTabletWidth && buttonPaddingTablet?.top ? `padding: ${buttonPaddingTabletWidth};` : ''}
            }

            .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field {
                ${searchButtonInputFieldWidth.Tablet && searchButtonInputFieldWidthUnits.Tablet ? `width: ${searchButtonInputFieldWidth.Tablet}${searchButtonInputFieldWidthUnits.Tablet};` : ''}
            }

            .${blockID} .fb-search-container .fb-search-button-wrapper span {
                ${buttonTextGlobalTypoSwitcher.fontSize === false && buttonTextFontSize.Tablet && buttonTextFontSizeUnits.Tablet ? `font-size: ${buttonTextFontSize.Tablet}${buttonTextFontSizeUnits.Tablet};` : ''}
                ${buttonTextGlobalTypoSwitcher.letterSpacing === false && buttonTextLetterSpacing.Tablet && buttonTextLetterSpacingUnits.Tablet ? `letter-spacing: ${buttonTextLetterSpacing.Tablet}${buttonTextLetterSpacingUnits.Tablet};` : ''}
                ${buttonTextGlobalTypoSwitcher.lineHeight === false && buttonTextLineHeight.Tablet && buttonTextLineHeightUnits.Tablet ? `line-height: ${buttonTextLineHeight.Tablet}${buttonTextLineHeightUnits.Tablet};` : ''}
            }

            .${blockID} .fb-search-container .fb-search-button-wrapper .fb-search-icon-wrapper svg {
                ${searchIconSize.Tablet && searchIconSizeUnits.Tablet ? `width: ${searchIconSize.Tablet}${searchIconSizeUnits.Tablet};` : ''} 
                ${searchIconSize.Tablet && searchIconSizeUnits.Tablet ? `height: ${searchIconSize.Tablet}${searchIconSizeUnits.Tablet};` : ''}
                transform: rotate(${searchIconRotate.Tablet}deg);
            }

            .${blockID} .fb-search-container .fb-search-button-wrapper .fb-search-icon-image {
                ${searchIconImageWidth ? `width: ${searchIconImageWidth.Tablet}${searchIconImageWidthUnits.Tablet};` : ''}
                ${searchIconImageHeight ? `height: ${searchIconImageHeight.Tablet}${searchIconImageHeightUnits.Tablet};` : ''}
                ${searchIconImageDisplay ? `object-fit: ${searchIconImageDisplay};` : ''}
                transform: rotate(${searchIconImageRotate.Tablet}deg);
            }
            .${blockID} .fb-search-container .fb-search-button-wrapper:hover .fb-search-icon-image {
                transform: rotate(${searchIconImageRotateHover.Tablet}deg);
            }

            .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field input {
                ${inputFieldTextGlobalTypoSwitcher.fontSize === false && inputFieldTextFontSize.Tablet && inputFieldTextFontSizeUnits.Tablet ? `font-size: ${inputFieldTextFontSize.Tablet}${inputFieldTextFontSizeUnits.Tablet};` : ''}
                ${inputFieldTextGlobalTypoSwitcher.letterSpacing === false && inputFieldTextLetterSpacing.Tablet && inputFieldTextLetterSpacingUnits.Tablet ? `letter-spacing: ${inputFieldTextLetterSpacing.Tablet}${inputFieldTextLetterSpacingUnits.Tablet};` : ''}
                ${inputFieldTextGlobalTypoSwitcher.lineHeight === false && inputFieldTextLineHeight.Tablet && inputFieldTextLineHeightUnits.Tablet ? `line-height: ${inputFieldTextLineHeight.Tablet}${inputFieldTextLineHeightUnits.Tablet};` : ''}
                ${inputFieldBorderTabletWidth && inputFieldBorderTablet?.top ? `border-width: ${inputFieldBorderTabletWidth};` : ''}
                ${inputFieldBorderRadiusTabletWidth && inputFieldBorderRadiusTablet?.top ? `border-radius: ${inputFieldBorderRadiusTabletWidth};` : ''}
                ${inputFieldPaddingTabletWidth && inputFieldPaddingTablet?.top ? `padding: ${inputFieldPaddingTabletWidth};` : ''}
            }
            .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results{
                ${searchFieldBorderTabletWidth && searchFieldBorderTablet?.top ? `border-width: ${searchFieldBorderTabletWidth};` : ''}
                ${searchFieldBorderRadiusTabletWidth && searchFieldBorderRadiusTablet?.top ? `border-radius: ${searchFieldBorderRadiusTabletWidth};` : ''}
                ${searchFieldPaddingTabletWidth && searchFieldPaddingTablet?.top ? `padding: ${searchFieldPaddingTabletWidth};` : ''}
            }
            .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-item{
                ${searchFieldItemBorderTabletWidth && searchFieldItemBorderTablet?.top ? `border-width: ${searchFieldItemBorderTabletWidth};` : ''}
                ${searchFieldItemBorderRadiusTabletWidth && searchFieldItemBorderRadiusTablet?.top ? `border-radius: ${searchFieldItemBorderRadiusTabletWidth};` : ''}
                ${searchFieldItemPaddingTabletWidth && searchFieldItemPaddingTablet?.top ? `padding: ${searchFieldItemPaddingTabletWidth};` : ''}
            }
            .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-item .fb-search-result-title{
                ${searchFieldItemTitleGlobalTypoSwitcher.fontSize === false && searchFieldItemTitleFontSize.Tablet && searchFieldItemTitleFontSizeUnits.Tablet ? `font-size: ${searchFieldItemTitleFontSize.Tablet}${searchFieldItemTitleFontSizeUnits.Tablet};` : ''}
                ${searchFieldItemTitleGlobalTypoSwitcher.letterSpacing === false && searchFieldItemTitleLetterSpacing.Tablet && searchFieldItemTitleLetterSpacingUnits.Tablet ? `letter-spacing: ${searchFieldItemTitleLetterSpacing.Tablet}${searchFieldItemTitleLetterSpacingUnits.Tablet};` : ''}
                ${searchFieldItemTitleGlobalTypoSwitcher.lineHeight === false && searchFieldItemTitleLineHeight.Tablet && searchFieldItemTitleLineHeightUnits.Tablet ? `line-height: ${searchFieldItemTitleLineHeight.Tablet}${searchFieldItemTitleLineHeightUnits.Tablet};` : ''}
            }

            .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-item .fb-search-result-meta{
                ${searchFieldItemMetaGlobalTypoSwitcher.fontSize === false && searchFieldItemMetaFontSize.Tablet && searchFieldItemMetaFontSizeUnits.Tablet ? `font-size: ${searchFieldItemMetaFontSize.Tablet}${searchFieldItemMetaFontSizeUnits.Tablet};` : ''}
                ${searchFieldItemMetaGlobalTypoSwitcher.letterSpacing === false && searchFieldItemMetaLetterSpacing.Tablet && searchFieldItemMetaLetterSpacingUnits.Tablet ? `letter-spacing: ${searchFieldItemMetaLetterSpacing.Tablet}${searchFieldItemMetaLetterSpacingUnits.Tablet};` : ''}
                ${searchFieldItemMetaGlobalTypoSwitcher.lineHeight === false && searchFieldItemMetaLineHeight.Tablet && searchFieldItemMetaLineHeightUnits.Tablet ? `line-height: ${searchFieldItemMetaLineHeight.Tablet}${searchFieldItemMetaLineHeightUnits.Tablet};` : ''}
                ${resultMetaGap?.Tablet ? `gap: ${resultMetaGap?.Tablet}${resultMetaGapUnits?.Tablet};` : ''}
            }
            .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-meta .meta-divider:before{
                ${metaDividerSize?.Tablet ? `width: ${metaDividerSize?.Tablet}${metaDividerSizeUnits?.Tablet};` : ''}
                ${metaDividerSize?.Tablet ? `height: ${metaDividerSize?.Tablet}${metaDividerSizeUnits?.Tablet};` : ''}
            }
        }
            
        @media only screen and (max-width: 767px) {
            .${blockID}.fb-search-block{
                ${searchIconZIndex.Mobile ? `z-index: ${searchIconZIndex.Mobile};` : ''}
            }
            .${blockID} .fb-search-container .fb-search-button-wrapper {
                ${searchButtonWidth.Mobile && searchButtonWidthUnits.Mobile ? `width: ${searchButtonWidth.Mobile}${searchButtonWidthUnits.Mobile};` : ''}
                ${searchIconGap.Mobile && searchIconGapUnits.Mobile ? `gap: ${searchIconGap.Mobile}${searchIconGapUnits.Mobile};` : ''}
                ${buttonBorderMobileWidth && buttonBorderMobile?.top ? `border-width: ${buttonBorderMobileWidth};` : ''}
                ${buttonBorderRadiusMobileWidth && buttonBorderRadiusMobile?.top ? `border-radius: ${buttonBorderRadiusMobileWidth};` : ''}
                ${buttonPaddingMobileWidth && buttonPaddingMobile?.top ? `padding: ${buttonPaddingMobileWidth};` : ''}
            }

            .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field {
                ${searchButtonInputFieldWidth.Mobile && searchButtonInputFieldWidthUnits.Mobile ? `width: ${searchButtonInputFieldWidth.Mobile}${searchButtonInputFieldWidthUnits.Mobile};` : ''}
            }

            .${blockID} .fb-search-container .fb-search-button-wrapper span {
                ${buttonTextGlobalTypoSwitcher.fontSize === false && buttonTextFontSize.Mobile && buttonTextFontSizeUnits.Mobile ? `font-size: ${buttonTextFontSize.Mobile}${buttonTextFontSizeUnits.Mobile};` : ''}
                ${buttonTextGlobalTypoSwitcher.letterSpacing === false && buttonTextLetterSpacing.Mobile && buttonTextLetterSpacingUnits.Mobile ? `letter-spacing: ${buttonTextLetterSpacing.Mobile}${buttonTextLetterSpacingUnits.Mobile};` : ''}
                ${buttonTextGlobalTypoSwitcher.lineHeight === false && buttonTextLineHeight.Mobile && buttonTextLineHeightUnits.Mobile ? `line-height: ${buttonTextLineHeight.Mobile}${buttonTextLineHeightUnits.Mobile};` : ''}
            }

            .${blockID} .fb-search-container .fb-search-button-wrapper .fb-search-icon-wrapper svg {
                ${searchIconSize.Mobile && searchIconSizeUnits.Mobile ? `width: ${searchIconSize.Mobile}${searchIconSizeUnits.Mobile};` : ''} 
                ${searchIconSize.Mobile && searchIconSizeUnits.Mobile ? `height: ${searchIconSize.Mobile}${searchIconSizeUnits.Mobile};` : ''}
                transform: rotate(${searchIconRotate.Mobile}deg);
            }

            .${blockID} .fb-search-container .fb-search-button-wrapper .fb-search-icon-image {
                ${searchIconImageWidth ? `width: ${searchIconImageWidth.Mobile}${searchIconImageWidthUnits.Mobile};` : ''}
                ${searchIconImageHeight ? `height: ${searchIconImageHeight.Mobile}${searchIconImageHeightUnits.Mobile};` : ''}
                ${searchIconImageDisplay ? `object-fit: ${searchIconImageDisplay};` : ''}
                transform: rotate(${searchIconImageRotate.Mobile}deg);
            }
            .${blockID} .fb-search-container .fb-search-button-wrapper:hover .fb-search-icon-image {
                transform: rotate(${searchIconImageRotateHover.Mobile}deg);
            }

            .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field input {
                ${inputFieldTextGlobalTypoSwitcher.fontSize === false && inputFieldTextFontSize.Mobile && inputFieldTextFontSizeUnits.Mobile ? `font-size: ${inputFieldTextFontSize.Mobile}${inputFieldTextFontSizeUnits.Mobile};` : ''}
                ${inputFieldTextGlobalTypoSwitcher.letterSpacing === false && inputFieldTextLetterSpacing.Mobile && inputFieldTextLetterSpacingUnits.Mobile ? `letter-spacing: ${inputFieldTextLetterSpacing.Mobile}${inputFieldTextLetterSpacingUnits.Mobile};` : ''}
                ${inputFieldTextGlobalTypoSwitcher.lineHeight === false && inputFieldTextLineHeight.Mobile && inputFieldTextLineHeightUnits.Mobile ? `line-height: ${inputFieldTextLineHeight.Mobile}${inputFieldTextLineHeightUnits.Mobile};` : ''}
                ${inputFieldBorderMobileWidth && inputFieldBorderMobile?.top ? `border-width: ${inputFieldBorderMobileWidth};` : ''}
                ${inputFieldBorderRadiusMobileWidth && inputFieldBorderRadiusMobile?.top ? `border-radius: ${inputFieldBorderRadiusMobileWidth};` : ''}
                ${inputFieldPaddingMobileWidth && inputFieldPaddingMobile?.top ? `padding: ${inputFieldPaddingMobileWidth};` : ''}
            }
            .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results{
                ${searchFieldBorderMobileWidth && searchFieldBorderMobile?.top ? `border-width: ${searchFieldBorderMobileWidth};` : ''}
                ${searchFieldBorderRadiusMobileWidth && searchFieldBorderRadiusMobile?.top ? `border-radius: ${searchFieldBorderRadiusMobileWidth};` : ''}
                ${searchFieldPaddingMobileWidth && searchFieldPaddingMobile?.top ? `padding: ${searchFieldPaddingMobileWidth};` : ''}
            }
            .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-item{
                ${searchFieldItemBorderMobileWidth && searchFieldItemBorderMobile?.top ? `border-width: ${searchFieldItemBorderMobileWidth};` : ''}
                ${searchFieldItemBorderRadiusMobileWidth && searchFieldItemBorderRadiusMobile?.top ? `border-radius: ${searchFieldItemBorderRadiusMobileWidth};` : ''}
                ${searchFieldItemPaddingMobileWidth && searchFieldItemPaddingMobile?.top ? `padding: ${searchFieldItemPaddingMobileWidth};` : ''}
            }
            .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-item .fb-search-result-title{
                ${searchFieldItemTitleGlobalTypoSwitcher.fontSize === false && searchFieldItemTitleFontSize.Mobile && searchFieldItemTitleFontSizeUnits.Mobile ? `font-size: ${searchFieldItemTitleFontSize.Mobile}${searchFieldItemTitleFontSizeUnits.Mobile};` : ''}
                ${searchFieldItemTitleGlobalTypoSwitcher.letterSpacing === false && searchFieldItemTitleLetterSpacing.Mobile && searchFieldItemTitleLetterSpacingUnits.Mobile ? `letter-spacing: ${searchFieldItemTitleLetterSpacing.Mobile}${searchFieldItemTitleLetterSpacingUnits.Mobile};` : ''}
                ${searchFieldItemTitleGlobalTypoSwitcher.lineHeight === false && searchFieldItemTitleLineHeight.Mobile && searchFieldItemTitleLineHeightUnits.Mobile ? `line-height: ${searchFieldItemTitleLineHeight.Mobile}${searchFieldItemTitleLineHeightUnits.Mobile};` : ''}
            }

            .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-item .fb-search-result-meta{
                ${searchFieldItemMetaGlobalTypoSwitcher.fontSize === false && searchFieldItemMetaFontSize.Mobile && searchFieldItemMetaFontSizeUnits.Mobile ? `font-size: ${searchFieldItemMetaFontSize.Mobile}${searchFieldItemMetaFontSizeUnits.Mobile};` : ''}
                ${searchFieldItemMetaGlobalTypoSwitcher.letterSpacing === false && searchFieldItemMetaLetterSpacing.Mobile && searchFieldItemMetaLetterSpacingUnits.Mobile ? `letter-spacing: ${searchFieldItemMetaLetterSpacing.Mobile}${searchFieldItemMetaLetterSpacingUnits.Mobile};` : ''}
                ${searchFieldItemMetaGlobalTypoSwitcher.lineHeight === false && searchFieldItemMetaLineHeight.Mobile && searchFieldItemMetaLineHeightUnits.Mobile ? `line-height: ${searchFieldItemMetaLineHeight.Mobile}${searchFieldItemMetaLineHeightUnits.Mobile};` : ''}
                ${resultMetaGap?.Mobile ? `gap: ${resultMetaGap?.Mobile}${resultMetaGapUnits?.Mobile};` : ''}
            }
            .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results .fb-search-result-meta .meta-divider:before{
                ${metaDividerSize?.Mobile ? `width: ${metaDividerSize?.Mobile}${metaDividerSizeUnits?.Mobile};` : ''}
                ${metaDividerSize?.Mobile ? `height: ${metaDividerSize?.Mobile}${metaDividerSizeUnits?.Mobile};` : ''}
            }
        }
    `;

    const customCss = getCustomCss(searchCustomCSS, `.${blockID} `);
    return `${searchBlockStyle} ${customCss} `.replace(/\s+/g, ' ').trim();
}
export default generateSearchStyle;