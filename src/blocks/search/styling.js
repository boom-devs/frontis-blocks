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
        searchFieldColor,
        searchFieldColorHover,
        searchFieldBorder,
        searchFieldBorderColor,
        searchFieldBorderDesktop,
        searchFieldBorderRadiusDesktop,
        searchFieldPaddingDesktop,

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
        }

        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results{
            ${searchFieldColor ? `background: ${searchFieldColor};` : ''}
            ${searchFieldBorder ? `border: ${searchFieldBorder};` : ''}
            ${searchFieldBorderColor ? `border-color: ${searchFieldBorderColor};` : ''}
            ${searchFieldBorderDesktopWidth && searchFieldBorderDesktop?.top ? `border-width: ${searchFieldBorderDesktopWidth};` : ''}
            ${searchFieldBorderRadiusDesktopWidth && searchFieldBorderRadiusDesktop?.top ? `border-radius: ${searchFieldBorderRadiusDesktopWidth};` : ''}
            ${searchFieldPaddingDesktopWidth && searchFieldPaddingDesktop?.top ? `padding: ${searchFieldPaddingDesktopWidth};` : ''}
        }
        .${blockID} .fb-search-container .fb-search-block-wrapper-inner-input-field .fb-search-ajax-results:hover{
            ${searchFieldColorHover ? `background: ${searchFieldColorHover};` : ''}
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
        }
    `;

    const customCss = getCustomCss(searchCustomCSS, `.${blockID} `);
    return `${searchBlockStyle} ${customCss} `.replace(/\s+/g, ' ').trim();
}
export default generateSearchStyle;