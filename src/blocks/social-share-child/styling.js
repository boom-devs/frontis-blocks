/**
 * Social Share Child Block Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes-Block attributes
 * @returns {string} CSS string
 */
const generateSocialShareChildStyle = (attributes) => {
     const {
        blockID,
        socialMediaType,
        icon,
        displayStyle,
        socialItemColorSwitcher,
        socialItemColor,
        socialItemHoverColor,
        socialItemBgColorSwitcher,
        socialItemBgColor,
        socialItemBgColorHover,
        socialShareGlobalTypographyData,
        socialShareGlobalTypoSwitcher,
        socialShareGlobalTypoType,
        socialShareGlobalTypoOption,
        socialShareFontFamily,
        socialShareFontSize,
        socialShareFontSizeUnits,
        socialShareFontWeight,
        socialShareFontStyle,
        socialShareTextTransform,
        socialShareTextDecoration,
        socialShareLetterSpacing,
        socialShareLetterSpacingUnits,
        socialShareLineHeight,
        socialShareLineHeightUnits,
        socialShareLabelColorSwitcher,
        socialShareLabelColor,
        socialShareLabelHoverColor,
        socialShareLabelBgColorSwitcher,
        socialShareLabelBgColor,
        socialShareLabelHoverBgColor,
        socialShareLabelSpacing,
        socialShareLabelSpacingUnits,

        socialShareChildCustomCSS,
        socialShareChildDesktopSwitcher,
        socialShareChildTabletSwitcher,
        socialShareChildMobileSwitcher,
        socialShareChildGlobalZIndex,
        socialShareChildOverflow,
        socialShareChildGlobalWraperID,
        socialShareChildGlobalWraperClass,

        /** Padding */
        socialShareChildGlobalPaddingUnits,
        socialShareChildGlobalPaddingDesktop,
        socialShareChildGlobalPaddingTablet,
        socialShareChildGlobalPaddingMobile,
        socialShareChildGlobalPaddingLink,

        /** Margin */
        socialShareChildGlobalMarginUnits,
        socialShareChildGlobalMarginDesktop,
        socialShareChildGlobalMarginTablet,
        socialShareChildGlobalMarginMobile,
        socialShareChildGlobalMarginLink,

        /** Background Normal */
        socialShareChildGlobalBgColor,
        socialShareChildGlobalBgHoverColor,
        socialShareChildGlobalBgColorSwitcher,
        socialShareChildGlobalBgNormalBackgroundType,
        socialShareChildGlobalBgNormalClassicColor,
        socialShareChildGlobalBgNormalGradientColor,
        socialShareChildGlobalBgNormalCustomGradientSwitcher,
        socialShareChildGlobalBgNormalCustomGradientInputValue,
        socialShareChildGlobalBgNormalBackgroundImageUrl,
        socialShareChildGlobalBgNormalBackgroundImagePosition,
        socialShareChildGlobalBgNormalBackgroundImageAttachment,
        socialShareChildGlobalBgNormalBackgroundImageRepeat,
        socialShareChildGlobalBgNormalBackgroundImageSize,

        /** Background Hover */
        socialShareChildGlobalBgHoverBackgroundType,
        socialShareChildGlobalBgHoverClassicColor,
        socialShareChildGlobalBgHoverGradientColor,
        socialShareChildGlobalBgHoverCustomGradientSwitcher,
        socialShareChildGlobalBgHoverCustomGradientInputValue,
        socialShareChildGlobalBgHoverBackgroundImageUrl,
        socialShareChildGlobalBgHoverBackgroundImagePosition,
        socialShareChildGlobalBgHoverBackgroundImageAttachment,
        socialShareChildGlobalBgHoverBackgroundImageRepeat,
        socialShareChildGlobalBgHoverBackgroundImageSize,

        /** Border */
        socialShareChildGlobalBorder,
        socialShareChildGlobalBorderColorSwitcher,
        socialShareChildGlobalBorderColor,
        socialShareChildGlobalBorderHoverColor,
        socialShareChildGlobalBorderUnits,
        socialShareChildGlobalBorderDesktop,
        socialShareChildGlobalBorderTablet,
        socialShareChildGlobalBorderMobile,
        socialShareChildGlobalBorderLink,

        /** Border Radius */
        socialShareChildGlobalBorderRadiusUnits,
        socialShareChildGlobalBorderRadiusDesktop,
        socialShareChildGlobalBorderRadiusTablet,
        socialShareChildGlobalBorderRadiusMobile,
        socialShareChildGlobalBorderRadiusLink,

        /** Box Shadow */
        socialShareChildGlobalBoxShadowSwitcher,
        socialShareChildGlobalBoxShadowValues,
        socialShareChildGlobalBoxShadowCssValue,
        socialShareChildGlobalBoxShadowHoverValues,
        socialShareChildGlobalBoxShadowHoverCssValue,
        socialShareChildPositionType,
        socialShareChildHZOrientationType,
        socialShareChildVROrientationType,
        socialShareChildHZLeftOffset,
        socialShareChildHZLeftOffsetUnits,
        socialShareChildHZRightOffset,
        socialShareChildHZRightOffsetUnits,
        socialShareChildVRTopOffset,
        socialShareChildVRTopOffsetUnits,
        socialShareChildVRBottomOffset,
        socialShareChildVRBottomOffsetUnits,
    } = attributes;

    const globalDesktopPadding = `${socialShareChildGlobalPaddingDesktop?.top}${socialShareChildGlobalPaddingUnits?.Desktop} ${socialShareChildGlobalPaddingDesktop?.right}${socialShareChildGlobalPaddingUnits?.Desktop} ${socialShareChildGlobalPaddingDesktop?.bottom}${socialShareChildGlobalPaddingUnits?.Desktop} ${socialShareChildGlobalPaddingDesktop?.left}${socialShareChildGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${socialShareChildGlobalPaddingTablet?.top}${socialShareChildGlobalPaddingUnits?.Tablet} ${socialShareChildGlobalPaddingTablet?.right}${socialShareChildGlobalPaddingUnits?.Tablet} ${socialShareChildGlobalPaddingTablet?.bottom}${socialShareChildGlobalPaddingUnits?.Tablet} ${socialShareChildGlobalPaddingTablet?.left}${socialShareChildGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${socialShareChildGlobalPaddingMobile?.top}${socialShareChildGlobalPaddingUnits?.Mobile} ${socialShareChildGlobalPaddingMobile?.right}${socialShareChildGlobalPaddingUnits?.Mobile} ${socialShareChildGlobalPaddingMobile?.bottom}${socialShareChildGlobalPaddingUnits?.Mobile} ${socialShareChildGlobalPaddingMobile?.left}${socialShareChildGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${socialShareChildGlobalMarginDesktop?.top}${socialShareChildGlobalMarginUnits?.Desktop} ${socialShareChildGlobalMarginDesktop?.right}${socialShareChildGlobalMarginUnits?.Desktop} ${socialShareChildGlobalMarginDesktop?.bottom}${socialShareChildGlobalMarginUnits?.Desktop} ${socialShareChildGlobalMarginDesktop?.left}${socialShareChildGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${socialShareChildGlobalMarginTablet?.top}${socialShareChildGlobalMarginUnits?.Tablet} ${socialShareChildGlobalMarginTablet?.right}${socialShareChildGlobalMarginUnits?.Tablet} ${socialShareChildGlobalMarginTablet?.bottom}${socialShareChildGlobalMarginUnits?.Tablet} ${socialShareChildGlobalMarginTablet?.left}${socialShareChildGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${socialShareChildGlobalMarginMobile?.top}${socialShareChildGlobalMarginUnits?.Mobile} ${socialShareChildGlobalMarginMobile?.right}${socialShareChildGlobalMarginUnits?.Mobile} ${socialShareChildGlobalMarginMobile?.bottom}${socialShareChildGlobalMarginUnits?.Mobile} ${socialShareChildGlobalMarginMobile?.left}${socialShareChildGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${socialShareChildGlobalBorderDesktop?.top}${socialShareChildGlobalBorderUnits?.Desktop} ${socialShareChildGlobalBorderDesktop?.right}${socialShareChildGlobalBorderUnits?.Desktop} ${socialShareChildGlobalBorderDesktop?.bottom}${socialShareChildGlobalBorderUnits?.Desktop} ${socialShareChildGlobalBorderDesktop?.left}${socialShareChildGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${socialShareChildGlobalBorderTablet?.top}${socialShareChildGlobalBorderUnits?.Tablet} ${socialShareChildGlobalBorderTablet?.right}${socialShareChildGlobalBorderUnits?.Tablet} ${socialShareChildGlobalBorderTablet?.bottom}${socialShareChildGlobalBorderUnits?.Tablet} ${socialShareChildGlobalBorderTablet?.left}${socialShareChildGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${socialShareChildGlobalBorderMobile?.top}${socialShareChildGlobalBorderUnits?.Mobile} ${socialShareChildGlobalBorderMobile?.right}${socialShareChildGlobalBorderUnits?.Mobile} ${socialShareChildGlobalBorderMobile?.bottom}${socialShareChildGlobalBorderUnits?.Mobile} ${socialShareChildGlobalBorderMobile?.left}${socialShareChildGlobalBorderUnits?.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${socialShareChildGlobalBorderRadiusDesktop?.top}${socialShareChildGlobalBorderRadiusUnits?.Desktop} ${socialShareChildGlobalBorderRadiusDesktop?.right}${socialShareChildGlobalBorderRadiusUnits?.Desktop} ${socialShareChildGlobalBorderRadiusDesktop?.bottom}${socialShareChildGlobalBorderRadiusUnits?.Desktop} ${socialShareChildGlobalBorderRadiusDesktop?.left}${socialShareChildGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${socialShareChildGlobalBorderRadiusTablet?.top}${socialShareChildGlobalBorderRadiusUnits?.Tablet} ${socialShareChildGlobalBorderRadiusTablet?.right}${socialShareChildGlobalBorderRadiusUnits?.Tablet} ${socialShareChildGlobalBorderRadiusTablet?.bottom}${socialShareChildGlobalBorderRadiusUnits?.Tablet} ${socialShareChildGlobalBorderRadiusTablet?.left}${socialShareChildGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${socialShareChildGlobalBorderRadiusMobile?.top}${socialShareChildGlobalBorderRadiusUnits?.Mobile} ${socialShareChildGlobalBorderRadiusMobile?.right}${socialShareChildGlobalBorderRadiusUnits?.Mobile} ${socialShareChildGlobalBorderRadiusMobile?.bottom}${socialShareChildGlobalBorderRadiusUnits?.Mobile} ${socialShareChildGlobalBorderRadiusMobile?.left}${socialShareChildGlobalBorderRadiusUnits?.Mobile}`;

    /**
     * Get background normal styles
     */
    const getBackgroundNormalStyles = (device) => {
        const bgType = socialShareChildGlobalBgNormalBackgroundType;
        const bgColor = socialShareChildGlobalBgNormalClassicColor;
        const bgGradient = socialShareChildGlobalBgNormalGradientColor;
        const customGradient = socialShareChildGlobalBgNormalCustomGradientInputValue;
        const customGradientEnabled = socialShareChildGlobalBgNormalCustomGradientSwitcher;

        const bgImageUrl = socialShareChildGlobalBgNormalBackgroundImageUrl?.[device];
        const bgImagePosition = socialShareChildGlobalBgNormalBackgroundImagePosition?.[device];
        const bgAttachment = socialShareChildGlobalBgNormalBackgroundImageAttachment?.[device];
        const bgRepeat = socialShareChildGlobalBgNormalBackgroundImageRepeat?.[device];
        const bgSize = socialShareChildGlobalBgNormalBackgroundImageSize?.[device];

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
        const bgType = socialShareChildGlobalBgHoverBackgroundType;
        const bgColor = socialShareChildGlobalBgHoverClassicColor;
        const bgGradient = socialShareChildGlobalBgHoverGradientColor;
        const customGradient = socialShareChildGlobalBgHoverCustomGradientInputValue;
        const customGradientEnabled = socialShareChildGlobalBgHoverCustomGradientSwitcher;

        const bgImageUrl = socialShareChildGlobalBgHoverBackgroundImageUrl?.[device];
        const bgImagePosition = socialShareChildGlobalBgHoverBackgroundImagePosition?.[device];
        const bgAttachment = socialShareChildGlobalBgHoverBackgroundImageAttachment?.[device];
        const bgRepeat = socialShareChildGlobalBgHoverBackgroundImageRepeat?.[device];
        const bgSize = socialShareChildGlobalBgHoverBackgroundImageSize?.[device];

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

    const fbSocialShareStyle = `
        .${blockID}.fb-social-share-child {
            ${socialShareChildPositionType === 'default' ? `position: relative !important;` : ''}
            ${socialShareChildPositionType !== 'default' && socialShareChildPositionType !== 'relative' ? `width: 100%;` : ''}
            ${socialShareChildPositionType !== 'default' ? `position: ${socialShareChildPositionType} !important;` : ''}
            ${socialShareChildPositionType !== 'default' && socialShareChildPositionType !== 'relative' && socialShareChildHZOrientationType === 'left' && socialShareChildHZLeftOffset?.Desktop ? `left: ${socialShareChildHZLeftOffset?.Desktop}${socialShareChildHZLeftOffsetUnits?.Desktop};` : ''} 
            ${socialShareChildPositionType !== 'default' && socialShareChildPositionType !== 'relative' && socialShareChildHZOrientationType === 'right' && socialShareChildHZRightOffset?.Desktop ? `right: ${socialShareChildHZRightOffset?.Desktop}${socialShareChildHZRightOffsetUnits?.Desktop};` : ''}
            ${socialShareChildPositionType !== 'default' && socialShareChildPositionType !== 'relative' && socialShareChildVROrientationType === 'top' && socialShareChildVRTopOffset?.Desktop ? `top: ${socialShareChildVRTopOffset?.Desktop}${socialShareChildVRTopOffsetUnits?.Desktop};` : ''}
            ${socialShareChildPositionType !== 'default' && socialShareChildPositionType !== 'relative' && socialShareChildVROrientationType === 'bottom' && socialShareChildVRBottomOffset?.Desktop ? `bottom: ${socialShareChildVRBottomOffset?.Desktop}${socialShareChildVRBottomOffsetUnits?.Desktop};` : ''}
            ${socialShareChildGlobalZIndex?.Desktop ? `z-index: ${socialShareChildGlobalZIndex?.Desktop};` : ''}
            ${socialShareChildOverflow !== 'default' ? `overflow: ${socialShareChildOverflow};` : ''}
        }
        .${blockID} .social-share-child-container {
            ${desktopBackgroundNormalStyles}
            ${globalDesktopPadding && socialShareChildGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && socialShareChildGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''}
            ${socialShareChildGlobalBorder ? `border: ${socialShareChildGlobalBorder};` : ''}
            ${globalDesktopBorderWidth && socialShareChildGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && socialShareChildGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${socialShareChildGlobalBorderColor ? `border-color: ${socialShareChildGlobalBorderColor};` : ''}
            ${socialShareChildGlobalBoxShadowCssValue ? `box-shadow: ${socialShareChildGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID} .social-share-child-container:hover{
            ${desktopBackgroundHoverStyles}
            ${socialShareChildGlobalBorderHoverColor ? `border-color: ${socialShareChildGlobalBorderHoverColor};` : ''}
            ${socialShareChildGlobalBoxShadowHoverCssValue ? `box-shadow: ${socialShareChildGlobalBoxShadowHoverCssValue};` : ''}
        }
        .${blockID} .social-share-child-container .social-share-icon .custom-icon {
            ${socialItemBgColor ? `background-color: ${socialItemBgColor};` : ''}
        }
        .${blockID} .social-share-child-container .social-share-icon .custom-icon:hover {
            ${socialItemBgColorHover ? `background-color: ${socialItemBgColorHover};` : ''}
        }
        .${blockID} .social-share-child-container .social-share-icon .custom-icon svg path{
            ${socialItemColor ? `fill: ${socialItemColor};` : ''}
        }
        .${blockID} .social-share-child-container .social-share-icon .custom-icon:hover svg path{
            ${socialItemHoverColor ? `fill: ${socialItemHoverColor};` : ''}
        }
        
        .${blockID} .social-share-child-container .social-share-button{
            ${socialShareLabelSpacing.Desktop ? `gap: ${socialShareLabelSpacing.Desktop}${socialShareLabelSpacingUnits.Desktop};` : ''}
        }
        
        .${blockID} .social-share-child-container .social-share-label{
            ${socialShareGlobalTypoSwitcher?.fontFamily === true && socialShareGlobalTypographyData?.fontFamily ? `font-family: ${socialShareGlobalTypographyData?.fontFamily};` : ''}
            ${socialShareGlobalTypoSwitcher?.fontSize === true && socialShareGlobalTypographyData?.fontSize ? `font-size: ${socialShareGlobalTypographyData?.fontSize};` : ''}
            ${socialShareGlobalTypoSwitcher?.fontWeight === true && socialShareGlobalTypographyData?.fontWeight ? `font-weight: ${socialShareGlobalTypographyData?.fontWeight};` : ''}
            ${socialShareGlobalTypoSwitcher?.fontStyle === true && socialShareGlobalTypographyData?.fontStyle ? `font-style: ${socialShareGlobalTypographyData?.fontStyle};` : ''}
            ${socialShareGlobalTypoSwitcher?.textTransform === true && socialShareGlobalTypographyData?.textTransform ? `text-transform: ${socialShareGlobalTypographyData?.textTransform};` : ''}
            ${socialShareGlobalTypoSwitcher?.textDecoration === true && socialShareGlobalTypographyData?.textDecoration ? `text-decoration: ${socialShareGlobalTypographyData?.textDecoration};` : ''}
            ${socialShareGlobalTypoSwitcher?.letterSpacing === true && socialShareGlobalTypographyData?.letterSpacing ? `letter-spacing: ${socialShareGlobalTypographyData?.letterSpacing};` : ''}
            ${socialShareGlobalTypoSwitcher?.lineHeight === true && socialShareGlobalTypographyData?.lineHeight ? `line-height: ${socialShareGlobalTypographyData?.lineHeight};` : ''}

            ${socialShareGlobalTypoSwitcher?.fontFamily === false && socialShareFontFamily && socialShareFontFamily !== 'Default' ? `font-family: ${socialShareFontFamily};` : ''}
            ${socialShareGlobalTypoSwitcher?.fontSize === false && socialShareFontSize?.Desktop && socialShareFontSizeUnits?.Desktop ? `font-size: ${socialShareFontSize?.Desktop}${socialShareFontSizeUnits?.Desktop};` : ''}
            ${socialShareGlobalTypoSwitcher?.fontWeight === false && socialShareFontWeight ? `font-weight: ${socialShareFontWeight};` : ''}
            ${socialShareGlobalTypoSwitcher?.fontStyle === false && socialShareFontStyle ? `font-style: ${socialShareFontStyle};` : ''}
            ${socialShareGlobalTypoSwitcher?.textTransform === false && socialShareTextTransform ? `text-transform: ${socialShareTextTransform};` : ''}
            ${socialShareGlobalTypoSwitcher?.textDecoration === false && socialShareTextDecoration ? `text-decoration: ${socialShareTextDecoration};` : ''}
            ${socialShareGlobalTypoSwitcher?.letterSpacing === false && socialShareLetterSpacing?.Desktop && socialShareLetterSpacingUnits?.Desktop ? `letter-spacing: ${socialShareLetterSpacing?.Desktop}${socialShareLetterSpacingUnits?.Desktop};` : ''}
            ${socialShareGlobalTypoSwitcher?.lineHeight === false && socialShareLineHeight?.Desktop && socialShareLineHeightUnits?.Desktop ? `line-height: ${socialShareLineHeight?.Desktop}${socialShareLineHeightUnits?.Desktop};` : ''}
            ${socialShareLabelColor ? `color: ${socialShareLabelColor};` : ''}
            ${socialShareLabelBgColor ? `background: ${socialShareLabelBgColor};` : ''}
        }
        .${blockID} .social-share-child-container .social-share-label:hover{
            ${socialShareLabelHoverColor ? `color: ${socialShareLabelHoverColor};` : ''}
            ${socialShareLabelHoverBgColor ? `background: ${socialShareLabelHoverBgColor};` : ''}
        }
        @media all and (max-width: 1024px){
            .${blockID} .social-share-child-container{
                ${tabletBackgroundNormalStyles}
                ${globalTabletPadding && socialShareChildGlobalPaddingDesktop?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && socialShareChildGlobalMarginDesktop?.top ? `margin: ${globalTabletMargin};` : ''}
                ${globalTabletBorderWidth && socialShareChildGlobalBorderDesktop?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && socialShareChildGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }
            .${blockID} .social-share-child-container:hover{
                ${tabletBackgroundHoverStyles}
            }
            .${blockID} .social-share-child-container .social-share-label{
                ${socialShareGlobalTypoSwitcher?.fontSize === false && socialShareFontSize?.Tablet && socialShareFontSizeUnits?.Tablet ? `font-size: ${socialShareFontSize?.Tablet}${socialShareFontSizeUnits?.Tablet};` : ''}
                ${socialShareGlobalTypoSwitcher?.letterSpacing === false && socialShareLetterSpacing?.Tablet && socialShareLetterSpacingUnits?.Tablet ? `letter-spacing: ${socialShareLetterSpacing?.Tablet}${socialShareLetterSpacingUnits?.Tablet};` : ''}
                ${socialShareGlobalTypoSwitcher?.lineHeight === false && socialShareLineHeight?.Tablet && socialShareLineHeightUnits?.Tablet ? `line-height: ${socialShareLineHeight?.Tablet}${socialShareLineHeightUnits?.Tablet};` : ''}
            }
            .${blockID} .social-share-child-container .social-share-button{
                ${socialShareLabelSpacing.Tablet ? `gap: ${socialShareLabelSpacing.Tablet}${socialShareLabelSpacingUnits.Tablet};` : ''}
            }
        }
        @media all and (max-width: 767px){
            .${blockID} .social-share-child-container{
                ${mobileBackgroundNormalStyles}
                ${globalMobilePadding && socialShareChildGlobalPaddingDesktop?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && socialShareChildGlobalMarginDesktop?.top ? `margin: ${globalMobileMargin};` : ''}
                ${globalMobileBorderWidth && socialShareChildGlobalBorderDesktop?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && socialShareChildGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }
            .${blockID} .social-share-child-container:hover{
                ${mobileBackgroundHoverStyles}
            }
            .${blockID} .social-share-child-container .social-share-label{
                ${socialShareGlobalTypoSwitcher?.fontSize === false && socialShareFontSize?.Mobile && socialShareFontSizeUnits?.Mobile ? `font-size: ${socialShareFontSize?.Mobile}${socialShareFontSizeUnits?.Mobile};` : ''}
                ${socialShareGlobalTypoSwitcher?.letterSpacing === false && socialShareLetterSpacing?.Mobile && socialShareLetterSpacingUnits?.Mobile ? `letter-spacing: ${socialShareLetterSpacing?.Mobile}${socialShareLetterSpacingUnits?.Mobile};` : ''}
                ${socialShareGlobalTypoSwitcher?.lineHeight === false && socialShareLineHeight?.Mobile && socialShareLineHeightUnits?.Mobile ? `line-height: ${socialShareLineHeight?.Mobile}${socialShareLineHeightUnits?.Mobile};` : ''}
            }
            .${blockID} .social-share-child-container .social-share-button{
                ${socialShareLabelSpacing.Mobile ? `gap: ${socialShareLabelSpacing.Mobile}${socialShareLabelSpacingUnits.Mobile};` : ''}
            }
        }
    `;
    
    const customCss = getCustomCss(socialShareChildCustomCSS, `.${blockID} `);
    return `${fbSocialShareStyle} ${customCss} `.replace(/\s+/g, ' ').trim();
}
export default generateSocialShareChildStyle;