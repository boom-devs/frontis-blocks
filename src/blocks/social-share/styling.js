/**
 * Social Share Block Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes-Block attributes
 * @returns {string} CSS string
 */
const generateSocialShareStyle = (attributes) => {
    const {
        blockID,
        layoutType,
        iconSpacing,
        iconSpacingUnits,
        iconFontSize,
        iconFontSizeUnits,
        iconAlignment,
        socialShareCustomCSS,
        socialShareDesktopSwitcher,
        socialShareTabletSwitcher,
        socialShareMobileSwitcher,
        socialShareGlobalZIndex,
        socialShareOverflow,
        socialShareGlobalWraperID,
        socialShareGlobalWraperClass,

        /** Padding */
        socialShareGlobalPaddingUnits,
        socialShareGlobalPaddingDesktop,
        socialShareGlobalPaddingTablet,
        socialShareGlobalPaddingMobile,
        socialShareGlobalPaddingLink,

        /** Margin */
        socialShareGlobalMarginUnits,
        socialShareGlobalMarginDesktop,
        socialShareGlobalMarginTablet,
        socialShareGlobalMarginMobile,
        socialShareGlobalMarginLink,

        /** Background Normal */
        socialShareGlobalBgColor,
        socialShareGlobalBgHoverColor,
        socialShareGlobalBgColorSwitcher,
        socialShareGlobalBgNormalBackgroundType,
        socialShareGlobalBgNormalClassicColor,
        socialShareGlobalBgNormalGradientColor,
        socialShareGlobalBgNormalCustomGradientSwitcher,
        socialShareGlobalBgNormalCustomGradientInputValue,
        socialShareGlobalBgNormalBackgroundImageUrl,
        socialShareGlobalBgNormalBackgroundImagePosition,
        socialShareGlobalBgNormalBackgroundImageAttachment,
        socialShareGlobalBgNormalBackgroundImageRepeat,
        socialShareGlobalBgNormalBackgroundImageSize,

        /** Background Hover */
        socialShareGlobalBgHoverBackgroundType,
        socialShareGlobalBgHoverClassicColor,
        socialShareGlobalBgHoverGradientColor,
        socialShareGlobalBgHoverCustomGradientSwitcher,
        socialShareGlobalBgHoverCustomGradientInputValue,
        socialShareGlobalBgHoverBackgroundImageUrl,
        socialShareGlobalBgHoverBackgroundImagePosition,
        socialShareGlobalBgHoverBackgroundImageAttachment,
        socialShareGlobalBgHoverBackgroundImageRepeat,
        socialShareGlobalBgHoverBackgroundImageSize,

        /** Border */
        socialShareGlobalBorder,
        socialShareGlobalBorderColorSwitcher,
        socialShareGlobalBorderColor,
        socialShareGlobalBorderHoverColor,
        socialShareGlobalBorderUnits,
        socialShareGlobalBorderDesktop,
        socialShareGlobalBorderTablet,
        socialShareGlobalBorderMobile,
        socialShareGlobalBorderLink,

        /** Border Radius */
        socialShareGlobalBorderRadiusUnits,
        socialShareGlobalBorderRadiusDesktop,
        socialShareGlobalBorderRadiusTablet,
        socialShareGlobalBorderRadiusMobile,
        socialShareGlobalBorderRadiusLink,

        /** Box Shadow */
        socialShareGlobalBoxShadowSwitcher,
        socialShareGlobalBoxShadowValues,
        socialShareGlobalBoxShadowCssValue,
        socialShareGlobalBoxShadowHoverValues,
        socialShareGlobalBoxShadowHoverCssValue,
        socialSharePositionType,
        socialShareHZOrientationType,
        socialShareVROrientationType,
        socialShareHZLeftOffset,
        socialShareHZLeftOffsetUnits,
        socialShareHZRightOffset,
        socialShareHZRightOffsetUnits,
        socialShareVRTopOffset,
        socialShareVRTopOffsetUnits,
        socialShareVRBottomOffset,
        socialShareVRBottomOffsetUnits,
    } = attributes;

    const globalDesktopPadding = `${socialShareGlobalPaddingDesktop?.top}${socialShareGlobalPaddingUnits?.Desktop} ${socialShareGlobalPaddingDesktop?.right}${socialShareGlobalPaddingUnits?.Desktop} ${socialShareGlobalPaddingDesktop?.bottom}${socialShareGlobalPaddingUnits?.Desktop} ${socialShareGlobalPaddingDesktop?.left}${socialShareGlobalPaddingUnits?.Desktop}`;
    const globalTabletPadding = `${socialShareGlobalPaddingTablet?.top}${socialShareGlobalPaddingUnits?.Tablet} ${socialShareGlobalPaddingTablet?.right}${socialShareGlobalPaddingUnits?.Tablet} ${socialShareGlobalPaddingTablet?.bottom}${socialShareGlobalPaddingUnits?.Tablet} ${socialShareGlobalPaddingTablet?.left}${socialShareGlobalPaddingUnits?.Tablet}`;
    const globalMobilePadding = `${socialShareGlobalPaddingMobile?.top}${socialShareGlobalPaddingUnits?.Mobile} ${socialShareGlobalPaddingMobile?.right}${socialShareGlobalPaddingUnits?.Mobile} ${socialShareGlobalPaddingMobile?.bottom}${socialShareGlobalPaddingUnits?.Mobile} ${socialShareGlobalPaddingMobile?.left}${socialShareGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${socialShareGlobalMarginDesktop?.top}${socialShareGlobalMarginUnits?.Desktop} ${socialShareGlobalMarginDesktop?.right}${socialShareGlobalMarginUnits?.Desktop} ${socialShareGlobalMarginDesktop?.bottom}${socialShareGlobalMarginUnits?.Desktop} ${socialShareGlobalMarginDesktop?.left}${socialShareGlobalMarginUnits?.Desktop}`;
    const globalTabletMargin = `${socialShareGlobalMarginTablet?.top}${socialShareGlobalMarginUnits?.Tablet} ${socialShareGlobalMarginTablet?.right}${socialShareGlobalMarginUnits?.Tablet} ${socialShareGlobalMarginTablet?.bottom}${socialShareGlobalMarginUnits?.Tablet} ${socialShareGlobalMarginTablet?.left}${socialShareGlobalMarginUnits?.Tablet}`;
    const globalMobileMargin = `${socialShareGlobalMarginMobile?.top}${socialShareGlobalMarginUnits?.Mobile} ${socialShareGlobalMarginMobile?.right}${socialShareGlobalMarginUnits?.Mobile} ${socialShareGlobalMarginMobile?.bottom}${socialShareGlobalMarginUnits?.Mobile} ${socialShareGlobalMarginMobile?.left}${socialShareGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${socialShareGlobalBorderDesktop?.top}${socialShareGlobalBorderUnits?.Desktop} ${socialShareGlobalBorderDesktop?.right}${socialShareGlobalBorderUnits?.Desktop} ${socialShareGlobalBorderDesktop?.bottom}${socialShareGlobalBorderUnits?.Desktop} ${socialShareGlobalBorderDesktop?.left}${socialShareGlobalBorderUnits?.Desktop}`;
    const globalTabletBorderWidth = `${socialShareGlobalBorderTablet?.top}${socialShareGlobalBorderUnits?.Tablet} ${socialShareGlobalBorderTablet?.right}${socialShareGlobalBorderUnits?.Tablet} ${socialShareGlobalBorderTablet?.bottom}${socialShareGlobalBorderUnits?.Tablet} ${socialShareGlobalBorderTablet?.left}${socialShareGlobalBorderUnits?.Tablet}`;
    const globalMobileBorderWidth = `${socialShareGlobalBorderMobile?.top}${socialShareGlobalBorderUnits?.Mobile} ${socialShareGlobalBorderMobile?.right}${socialShareGlobalBorderUnits?.Mobile} ${socialShareGlobalBorderMobile?.bottom}${socialShareGlobalBorderUnits?.Mobile} ${socialShareGlobalBorderMobile?.left}${socialShareGlobalBorderUnits?.Mobile}`;
    
     const globalDesktopBorderRadiusWidth = `${socialShareGlobalBorderRadiusDesktop?.top}${socialShareGlobalBorderRadiusUnits?.Desktop} ${socialShareGlobalBorderRadiusDesktop?.right}${socialShareGlobalBorderRadiusUnits?.Desktop} ${socialShareGlobalBorderRadiusDesktop?.bottom}${socialShareGlobalBorderRadiusUnits?.Desktop} ${socialShareGlobalBorderRadiusDesktop?.left}${socialShareGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${socialShareGlobalBorderRadiusTablet?.top}${socialShareGlobalBorderRadiusUnits?.Tablet} ${socialShareGlobalBorderRadiusTablet?.right}${socialShareGlobalBorderRadiusUnits?.Tablet} ${socialShareGlobalBorderRadiusTablet?.bottom}${socialShareGlobalBorderRadiusUnits?.Tablet} ${socialShareGlobalBorderRadiusTablet?.left}${socialShareGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${socialShareGlobalBorderRadiusMobile?.top}${socialShareGlobalBorderRadiusUnits?.Mobile} ${socialShareGlobalBorderRadiusMobile?.right}${socialShareGlobalBorderRadiusUnits?.Mobile} ${socialShareGlobalBorderRadiusMobile?.bottom}${socialShareGlobalBorderRadiusUnits?.Mobile} ${socialShareGlobalBorderRadiusMobile?.left}${socialShareGlobalBorderRadiusUnits?.Mobile}`;

    /**
     * Get background normal styles
     */
    const getBackgroundNormalStyles = (device) => {
        const bgType = socialShareGlobalBgNormalBackgroundType;
        const bgColor = socialShareGlobalBgNormalClassicColor;
        const bgGradient = socialShareGlobalBgNormalGradientColor;
        const customGradient = socialShareGlobalBgNormalCustomGradientInputValue;
        const customGradientEnabled = socialShareGlobalBgNormalCustomGradientSwitcher;

        const bgImageUrl = socialShareGlobalBgNormalBackgroundImageUrl?.[device];
        const bgImagePosition = socialShareGlobalBgNormalBackgroundImagePosition?.[device];
        const bgAttachment = socialShareGlobalBgNormalBackgroundImageAttachment?.[device];
        const bgRepeat = socialShareGlobalBgNormalBackgroundImageRepeat?.[device];
        const bgSize = socialShareGlobalBgNormalBackgroundImageSize?.[device];

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
        const bgType = socialShareGlobalBgHoverBackgroundType;
        const bgColor = socialShareGlobalBgHoverClassicColor;
        const bgGradient = socialShareGlobalBgHoverGradientColor;
        const customGradient = socialShareGlobalBgHoverCustomGradientInputValue;
        const customGradientEnabled = socialShareGlobalBgHoverCustomGradientSwitcher;

        const bgImageUrl = socialShareGlobalBgHoverBackgroundImageUrl?.[device];
        const bgImagePosition = socialShareGlobalBgHoverBackgroundImagePosition?.[device];
        const bgAttachment = socialShareGlobalBgHoverBackgroundImageAttachment?.[device];
        const bgRepeat = socialShareGlobalBgHoverBackgroundImageRepeat?.[device];
        const bgSize = socialShareGlobalBgHoverBackgroundImageSize?.[device];

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
        .${blockID}.fb-social-share {
            ${socialSharePositionType === 'default' ? `position: relative !important;` : ''}
            ${socialSharePositionType !== 'default' && socialSharePositionType !== 'relative' ? `width: 100%;` : ''}
            ${socialSharePositionType !== 'default' ? `position: ${socialSharePositionType} !important;` : ''}
            ${socialSharePositionType !== 'default' && socialSharePositionType !== 'relative' && socialShareHZOrientationType === 'left' && socialShareHZLeftOffset?.Desktop ? `left: ${socialShareHZLeftOffset?.Desktop}${socialShareHZLeftOffsetUnits?.Desktop};` : ''} 
            ${socialSharePositionType !== 'default' && socialSharePositionType !== 'relative' && socialShareHZOrientationType === 'right' && socialShareHZRightOffset?.Desktop ? `right: ${socialShareHZRightOffset?.Desktop}${socialShareHZRightOffsetUnits?.Desktop};` : ''}
            ${socialSharePositionType !== 'default' && socialSharePositionType !== 'relative' && socialShareVROrientationType === 'top' && socialShareVRTopOffset?.Desktop ? `top: ${socialShareVRTopOffset?.Desktop}${socialShareVRTopOffsetUnits?.Desktop};` : ''}
            ${socialSharePositionType !== 'default' && socialSharePositionType !== 'relative' && socialShareVROrientationType === 'bottom' && socialShareVRBottomOffset?.Desktop ? `bottom: ${socialShareVRBottomOffset?.Desktop}${socialShareVRBottomOffsetUnits?.Desktop};` : ''}
            ${socialShareGlobalZIndex?.Desktop ? `z-index: ${socialShareGlobalZIndex?.Desktop};` : ''}
            ${socialShareOverflow !== 'default' ? `overflow: ${socialShareOverflow};` : ''}
        }
        .${blockID} .social-share-parent-container {
            ${desktopBackgroundNormalStyles}
            ${globalDesktopPadding && socialShareGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && socialShareGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''}
            ${socialShareGlobalBorder ? `border: ${socialShareGlobalBorder};` : ''}
            ${globalDesktopBorderWidth && socialShareGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && socialShareGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${socialShareGlobalBorderColor ? `border-color: ${socialShareGlobalBorderColor};` : ''}
            ${socialShareGlobalBoxShadowCssValue ? `box-shadow: ${socialShareGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
            position: relative;
            display: flex;
            ${layoutType === 'vertical' ? 'flex-direction: row;' : ''}
            ${layoutType === 'horizontal' ? 'flex-direction: column;' : ''}
            ${iconAlignment.Desktop ? `justify-content: ${iconAlignment.Desktop};` : ''}
            ${iconSpacing.Desktop ? `gap: ${iconSpacing.Desktop}${iconSpacingUnits.Desktop};` : ''}
        }
        .${blockID} .social-share-parent-container .block-editor-inner-blocks .block-editor-block-list__layout{
            ${layoutType === 'vertical' ? 'flex-direction: row;' : ''}
            ${layoutType === 'horizontal' ? 'flex-direction: column;' : ''}
        }
        .${blockID} .social-share-parent-container:hover{
            ${desktopBackgroundHoverStyles}
            ${socialShareGlobalBorderHoverColor ? `border-color: ${socialShareGlobalBorderHoverColor};` : ''}
            ${socialShareGlobalBoxShadowHoverCssValue ? `box-shadow: ${socialShareGlobalBoxShadowHoverCssValue};` : ''}
        }
        .${blockID} .social-share-parent-container .block-editor-block-list__layout {
            ${iconSpacing.Desktop ? `gap: ${iconSpacing.Desktop}${iconSpacingUnits.Desktop};` : ''}
        }
        .${blockID} .social-share-parent-container .social-share-child-container .social-share-icon svg {
            ${iconFontSize.Desktop ? `width: ${iconFontSize.Desktop}${iconFontSizeUnits.Desktop};` : ''}
            ${iconFontSize.Desktop ? `height: ${iconFontSize.Desktop}${iconFontSizeUnits.Desktop};` : ''}
        }
        
        @media all and (max-width: 1024px){
            .${blockID} .social-share-parent-container{
                ${iconAlignment.Tablet ? `justify-content: ${iconAlignment.Tablet};` : ''}
                ${tabletBackgroundNormalStyles}
                ${globalTabletPadding && socialShareGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && socialShareGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''}
                ${globalTabletBorderWidth && socialShareGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && socialShareGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }
            .${blockID} .social-share-parent-container:hover{
                ${tabletBackgroundHoverStyles}
            }
            .${blockID} .social-share-parent-container .block-editor-block-list__layout {
                ${iconSpacing.Tablet ? `gap: ${iconSpacing.Tablet}${iconSpacingUnits.Tablet};` : ''}
            }
            .${blockID} .social-share-parent-container .social-share-child-container .social-share-icon svg {
                ${iconFontSize.Tablet ? `width: ${iconFontSize.Tablet}${iconFontSizeUnits.Tablet};` : ''}
                ${iconFontSize.Tablet ? `height: ${iconFontSize.Tablet}${iconFontSizeUnits.Tablet};` : ''}
            }
            
        }
        @media all and (max-width: 767px){
            .${blockID} .social-share-parent-container{
                ${iconAlignment.Mobile ? `justify-content: ${iconAlignment.Mobile};` : ''}
                ${mobileBackgroundNormalStyles}
                ${globalMobilePadding && socialShareGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && socialShareGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''}
                ${socialShareGlobalBorder ? `border: ${socialShareGlobalBorder};` : ''}
                ${globalMobileBorderWidth && socialShareGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && socialShareGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }
            .${blockID} .social-share-parent-container:hover{
                ${mobileBackgroundHoverStyles}
            }
            .${blockID} .social-share-parent-container .block-editor-block-list__layout {
                ${iconSpacing.Mobile ? `gap: ${iconSpacing.Mobile}${iconSpacingUnits.Mobile};` : ''}
            }
            .${blockID} .social-share-parent-container .social-share-child-container .social-share-icon svg {
                ${iconFontSize.Mobile ? `width: ${iconFontSize.Mobile}${iconFontSizeUnits.Mobile};` : ''}
                ${iconFontSize.Mobile ? `height: ${iconFontSize.Mobile}${iconFontSizeUnits.Mobile};` : ''}
            }
            
        }
    `;

    const customCss = getCustomCss(socialShareCustomCSS, `.${blockID} `);
    return `${fbSocialShareStyle} ${customCss} `.replace(/\s+/g, ' ').trim();
}
export default generateSocialShareStyle;