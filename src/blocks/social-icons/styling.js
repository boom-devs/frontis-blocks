/**
 * Social Icons Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateSocialStyle = (attributes) => {
    
    const {
        blockID,
        // deviceType,
        socialAlignment,
        socialItems,

        /** Icon Styles */
        socialIconSize,
        socialIconSizeUnits,
        socialIconGlobalColorSwitcher,
        socialIconGlobalColor,
        socialIconGlobalHoverColor,

        socialIconBgGlobalColorSwitcher,
        socialIconBgGlobalColor,
        socialIconBgGlobalHoverColor,

        socialIconBorder,
        socialIconBorderColorSwitcher,
        socialIconBorderColor,
        socialIconBorderHoverColor,

        socialIconBorderUnits,
        socialIconBorderDesktop,
        socialIconBorderTablet,
        socialIconBorderMobile,
        socialIconBorderLink,

        socialIconBorderRadiusUnits,
        socialIconBorderRadiusDesktop,
        socialIconBorderRadiusTablet,
        socialIconBorderRadiusMobile,
        socialIconBorderRadiusLink,

        socialIconPaddingUnits,
        socialIconPaddingDesktop,
        socialIconPaddingTablet,
        socialIconPaddingMobile,
        socialIconPaddingLink,
		/** End Icon Padding */

		/** Title Styles */
		socialTitleSwitcher,
		socialTitleGlobalTypoSwitcher,
		socialTitleGlobalTypographyData,
		socialTitleGlobalTypoType,
		socialTitleGlobalTypoOption,
        socialTitleFontFamily,
        socialTitleFontSize,
        socialTitleFontSizeUnits,
        socialTitleFontWeight,
        socialTitleFontStyle,
        socialTitleTextTransform,
        socialTitleTextDecoration,
        socialTitleLetterSpacing,
        socialTitleLetterSpacingUnits,
        socialTitleLineHeight,
        socialTitleLineHeightUnits,
		socialTitleColorSwitcher,
        socialTitleColor,
        socialTitleHoverColor,

		socialTitlePaddingUnits,
		socialTitlePaddingDesktop,
		socialTitlePaddingTablet,
		socialTitlePaddingMobile,
		socialTitlePaddingLink,
		
		/** End Title Styles */

        /** Social Padding */

        socialGapSize,
        socialGapUnits,

        socialPaddingUnits,
        socialPaddingDesktop,
        socialPaddingTablet,
        socialPaddingMobile,
        socialPaddingLink,

        socialMarginUnits,
        socialMarginDesktop,
        socialMarginTablet,
        socialMarginMobile,
        socialMarginLink,

        socialBgColorSwitcher,
        socialBgColor,
        socialBgHoverColor,

        socialBorder,
        socialBorderColorSwitcher,
        socialBorderColor,
        socialBorderHoverColor,

        socialBorderUnits,
        socialBorderDesktop,
        socialBorderTablet,
        socialBorderMobile,
        socialBorderLink,

        socialBorderRadiusUnits,
        socialBorderRadiusDesktop,
        socialBorderRadiusTablet,
        socialBorderRadiusMobile,
        socialBorderRadiusLink,


        /** Global Styles */
        socialGlobalZIndex,
		socialIconsOverflow,

        socialGlobalPaddingLink,
        socialGlobalPaddingUnits,
        socialGlobalPaddingDesktop,
        socialGlobalPaddingTablet,
        socialGlobalPaddingMobile,

        socialGlobalMarginUnits,
        socialGlobalMarginDesktop,
        socialGlobalMarginTablet,
        socialGlobalMarginMobile,
        socialGlobalMarginLink,

        socialGlobalBgColorSwitcher,
        socialGlobalBgColor,
        socialGlobalBgHoverColor,
        
        socialGlobalBorder,
        socialGlobalBorderColorSwitcher,
        socialGlobalBorderColor,
        socialGlobalBorderHoverColor,
        socialGlobalBorderUnits,
        socialGlobalBorderDesktop,
        socialGlobalBorderTablet,
        socialGlobalBorderMobile,
        socialGlobalBorderLink,
        
        socialGlobalBorderRadiusUnits,
        socialGlobalBorderRadiusDesktop,
        socialGlobalBorderRadiusTablet,
        socialGlobalBorderRadiusMobile,
        socialGlobalBorderRadiusLink,

		socialGlobalBoxShadowSwitcher,
        socialGlobalBoxShadowValues,
        socialGlobalBoxShadowCssValue,
		socialGlobalBoxShadowHoverValues,
		socialGlobalBoxShadowHoverCssValue,


		socialIconsPresetStyle,
		// singleItemColorStyle,
		blockStyle,

		socialIconsDesktopSwitcher,
		socialIconsTabletSwitcher,
		socialIconsMobileSwitcher,

		socialGlobalCustomCSS,
		socialGlobalWraperID,
		socialGlobalWraperClass,

		// Position
        socialIconsPositionType,
        socialIconsHZOrientationType,
        socialIconsVROrientationType,
        socialIconsHZLeftOffset,
        socialIconsHZLeftOffsetUnits,
        socialIconsHZRightOffset,
        socialIconsHZRightOffsetUnits,
        socialIconsVRTopOffset,
        socialIconsVRTopOffsetUnits,
        socialIconsVRBottomOffset,
        socialIconsVRBottomOffsetUnits,
    } = attributes;

    const IconBorderDesktopWidth = `${socialIconBorderDesktop?.top}${socialIconBorderUnits?.Desktop} ${socialIconBorderDesktop?.right}${socialIconBorderUnits?.Desktop} ${socialIconBorderDesktop?.bottom}${socialIconBorderUnits?.Desktop} ${socialIconBorderDesktop?.left}${socialIconBorderUnits?.Desktop}`;
    const IconBorderTabletWidth = `${socialIconBorderTablet?.top}${socialIconBorderUnits?.Tablet} ${socialIconBorderTablet?.right}${socialIconBorderUnits?.Tablet} ${socialIconBorderTablet?.bottom}${socialIconBorderUnits?.Tablet} ${socialIconBorderTablet?.left}${socialIconBorderUnits?.Tablet}`;
    const IconBorderMobileWidth = `${socialIconBorderMobile?.top}${socialIconBorderUnits?.Mobile} ${socialIconBorderMobile?.right}${socialIconBorderUnits?.Mobile} ${socialIconBorderMobile?.bottom}${socialIconBorderUnits?.Mobile} ${socialIconBorderMobile?.left}${socialIconBorderUnits?.Mobile}`;
	
    const IconBorderRadiusDesktopWidth = `${socialIconBorderRadiusDesktop?.top}${socialIconBorderRadiusUnits?.Desktop} ${socialIconBorderRadiusDesktop?.right}${socialIconBorderRadiusUnits?.Desktop} ${socialIconBorderRadiusDesktop?.bottom}${socialIconBorderRadiusUnits?.Desktop} ${socialIconBorderRadiusDesktop?.left}${socialIconBorderRadiusUnits?.Desktop}`;
    const IconBorderRadiusTabletWidth = `${socialIconBorderRadiusTablet?.top}${socialIconBorderRadiusUnits?.Tablet} ${socialIconBorderRadiusTablet?.right}${socialIconBorderRadiusUnits?.Tablet} ${socialIconBorderRadiusTablet?.bottom}${socialIconBorderRadiusUnits?.Tablet} ${socialIconBorderRadiusTablet?.left}${socialIconBorderRadiusUnits?.Tablet}`;
    const IconBorderRadiusMobileWidth = `${socialIconBorderRadiusMobile?.top}${socialIconBorderRadiusUnits?.Mobile} ${socialIconBorderRadiusMobile?.right}${socialIconBorderRadiusUnits?.Mobile} ${socialIconBorderRadiusMobile?.bottom}${socialIconBorderRadiusUnits?.Mobile} ${socialIconBorderRadiusMobile?.left}${socialIconBorderRadiusUnits?.Mobile}`;

    const IconPaddingDesktop = `${socialIconPaddingDesktop?.top}${socialIconPaddingUnits?.Desktop} ${socialIconPaddingDesktop?.right}${socialIconPaddingUnits?.Desktop} ${socialIconPaddingDesktop?.bottom}${socialIconPaddingUnits?.Desktop} ${socialIconPaddingDesktop?.left}${socialIconPaddingUnits?.Desktop}`;
    const IconPaddingTablet = `${socialIconPaddingTablet?.top}${socialIconPaddingUnits?.Tablet} ${socialIconPaddingTablet?.right}${socialIconPaddingUnits?.Tablet} ${socialIconPaddingTablet?.bottom}${socialIconPaddingUnits?.Tablet} ${socialIconPaddingTablet?.left}${socialIconPaddingUnits?.Tablet}`;
    const IconPaddingMobile = `${socialIconPaddingMobile?.top}${socialIconPaddingUnits?.Mobile} ${socialIconPaddingMobile?.right}${socialIconPaddingUnits?.Mobile} ${socialIconPaddingMobile?.bottom}${socialIconPaddingUnits?.Mobile} ${socialIconPaddingMobile?.left}${socialIconPaddingUnits?.Mobile}`;

    const SocialTitlePaddingDesktopWidth = `${socialTitlePaddingDesktop?.top}${socialTitlePaddingUnits?.Desktop} ${socialTitlePaddingDesktop?.right}${socialTitlePaddingUnits?.Desktop} ${socialTitlePaddingDesktop?.bottom}${socialTitlePaddingUnits?.Desktop} ${socialTitlePaddingDesktop?.left}${socialTitlePaddingUnits?.Desktop}`;
	const SocialTitlePaddingTabletWidth = `${socialTitlePaddingTablet?.top}${socialTitlePaddingUnits?.Tablet} ${socialTitlePaddingTablet?.right}${socialTitlePaddingUnits?.Tablet} ${socialTitlePaddingTablet?.bottom}${socialTitlePaddingUnits?.Tablet} ${socialTitlePaddingTablet?.left}${socialTitlePaddingUnits?.Tablet}`;
	const SocialTitlePaddingMobileWidth = `${socialTitlePaddingMobile?.top}${socialTitlePaddingUnits?.Mobile} ${socialTitlePaddingMobile?.right}${socialTitlePaddingUnits?.Mobile} ${socialTitlePaddingMobile?.bottom}${socialTitlePaddingUnits?.Mobile} ${socialTitlePaddingMobile?.left}${socialTitlePaddingUnits?.Mobile}`;

    const socialDesktopPadding    = `${socialPaddingDesktop?.top}${socialPaddingUnits?.Desktop} ${socialPaddingDesktop?.right}${socialPaddingUnits?.Desktop} ${socialPaddingDesktop?.bottom}${socialPaddingUnits?.Desktop} ${socialPaddingDesktop?.left}${socialPaddingUnits?.Desktop}`;
	const socialTabletPadding     = `${socialPaddingTablet?.top}${socialPaddingUnits?.Tablet} ${socialPaddingTablet?.right}${socialPaddingUnits?.Tablet} ${socialPaddingTablet?.bottom}${socialPaddingUnits?.Tablet} ${socialPaddingTablet?.left}${socialPaddingUnits?.Tablet}`;
	const socialMobilePadding     = `${socialPaddingMobile?.top}${socialPaddingUnits?.Mobile} ${socialPaddingMobile?.right}${socialPaddingUnits?.Mobile} ${socialPaddingMobile?.bottom}${socialPaddingUnits?.Mobile} ${socialPaddingMobile?.left}${socialPaddingUnits?.Mobile}`;

    const socialDesktopMargin    = `${socialMarginDesktop?.top}${socialMarginUnits?.Desktop} ${socialMarginDesktop?.right}${socialMarginUnits?.Desktop} ${socialMarginDesktop?.bottom}${socialMarginUnits?.Desktop} ${socialMarginDesktop?.left}${socialMarginUnits?.Desktop}`;
	const socialTabletMargin     = `${socialMarginTablet?.top}${socialMarginUnits?.Tablet} ${socialMarginTablet?.right}${socialMarginUnits?.Tablet} ${socialMarginTablet?.bottom}${socialMarginUnits?.Tablet} ${socialMarginTablet?.left}${socialMarginUnits?.Tablet}`;
	const socialMobileMargin     = `${socialMarginMobile?.top}${socialMarginUnits?.Mobile} ${socialMarginMobile?.right}${socialMarginUnits?.Mobile} ${socialMarginMobile?.bottom}${socialMarginUnits?.Mobile} ${socialMarginMobile?.left}${socialMarginUnits?.Mobile}`;

    const socialDesktopBorderWidth = `${socialBorderDesktop?.top}${socialBorderUnits?.Desktop} ${socialBorderDesktop?.right}${socialBorderUnits?.Desktop} ${socialBorderDesktop?.bottom}${socialBorderUnits?.Desktop} ${socialBorderDesktop?.left}${socialBorderUnits?.Desktop}`;
	const socialTabletBorderWidth = `${socialBorderTablet?.top}${socialBorderUnits?.Tablet} ${socialBorderTablet?.right}${socialBorderUnits?.Tablet} ${socialBorderTablet?.bottom}${socialBorderUnits?.Tablet} ${socialBorderTablet?.left}${socialBorderUnits?.Tablet}`;
	const socialMobileBorderWidth = `${socialBorderMobile?.top}${socialBorderUnits?.Mobile} ${socialBorderMobile?.right}${socialBorderUnits?.Mobile} ${socialBorderMobile?.bottom}${socialBorderUnits?.Mobile} ${socialBorderMobile?.left}${socialBorderUnits?.Mobile}`;

    const socialDesktopBorderRadiusWidth = `${socialBorderRadiusDesktop?.top}${socialBorderRadiusUnits?.Desktop} ${socialBorderRadiusDesktop?.right}${socialBorderRadiusUnits?.Desktop} ${socialBorderRadiusDesktop?.bottom}${socialBorderRadiusUnits?.Desktop} ${socialBorderRadiusDesktop?.left}${socialBorderRadiusUnits?.Desktop}`;
	const socialTabletBorderRadiusWidth = `${socialBorderRadiusTablet?.top}${socialBorderRadiusUnits?.Tablet} ${socialBorderRadiusTablet?.right}${socialBorderRadiusUnits?.Tablet} ${socialBorderRadiusTablet?.bottom}${socialBorderRadiusUnits?.Tablet} ${socialBorderRadiusTablet?.left}${socialBorderRadiusUnits?.Tablet}`;
	const socialMobileBorderRadiusWidth = `${socialBorderRadiusMobile?.top}${socialBorderRadiusUnits?.Mobile} ${socialBorderRadiusMobile?.right}${socialBorderRadiusUnits?.Mobile} ${socialBorderRadiusMobile?.bottom}${socialBorderRadiusUnits?.Mobile} ${socialBorderRadiusMobile?.left}${socialBorderRadiusUnits?.Mobile}`;

    const globalDesktopPadding    = `${socialGlobalPaddingDesktop?.top}${socialGlobalPaddingUnits?.Desktop} ${socialGlobalPaddingDesktop?.right}${socialGlobalPaddingUnits?.Desktop} ${socialGlobalPaddingDesktop?.bottom}${socialGlobalPaddingUnits?.Desktop} ${socialGlobalPaddingDesktop?.left}${socialGlobalPaddingUnits?.Desktop}`;
	const globalTabletPadding     = `${socialGlobalPaddingTablet?.top}${socialGlobalPaddingUnits?.Tablet} ${socialGlobalPaddingTablet?.right}${socialGlobalPaddingUnits?.Tablet} ${socialGlobalPaddingTablet?.bottom}${socialGlobalPaddingUnits?.Tablet} ${socialGlobalPaddingTablet?.left}${socialGlobalPaddingUnits?.Tablet}`;
	const globalMobilePadding     = `${socialGlobalPaddingMobile?.top}${socialGlobalPaddingUnits?.Mobile} ${socialGlobalPaddingMobile?.right}${socialGlobalPaddingUnits?.Mobile} ${socialGlobalPaddingMobile?.bottom}${socialGlobalPaddingUnits?.Mobile} ${socialGlobalPaddingMobile?.left}${socialGlobalPaddingUnits?.Mobile}`;

    const globalDesktopMargin = `${socialGlobalMarginDesktop?.top}${socialGlobalMarginUnits?.Desktop} ${socialGlobalMarginDesktop?.right}${socialGlobalMarginUnits?.Desktop} ${socialGlobalMarginDesktop?.bottom}${socialGlobalMarginUnits?.Desktop} ${socialGlobalMarginDesktop?.left}${socialGlobalMarginUnits?.Desktop}`;
	const globalTabletMargin = `${socialGlobalMarginTablet?.top}${socialGlobalMarginUnits?.Tablet} ${socialGlobalMarginTablet?.right}${socialGlobalMarginUnits?.Tablet} ${socialGlobalMarginTablet?.bottom}${socialGlobalMarginUnits?.Tablet} ${socialGlobalMarginTablet?.left}${socialGlobalMarginUnits?.Tablet}`;
	const globalMobileMargin = `${socialGlobalMarginMobile?.top}${socialGlobalMarginUnits?.Mobile} ${socialGlobalMarginMobile?.right}${socialGlobalMarginUnits?.Mobile} ${socialGlobalMarginMobile?.bottom}${socialGlobalMarginUnits?.Mobile} ${socialGlobalMarginMobile?.left}${socialGlobalMarginUnits?.Mobile}`;

    const globalDesktopBorderWidth = `${socialGlobalBorderDesktop?.top}${socialGlobalBorderUnits?.Desktop} ${socialGlobalBorderDesktop?.right}${socialGlobalBorderUnits?.Desktop} ${socialGlobalBorderDesktop?.bottom}${socialGlobalBorderUnits?.Desktop} ${socialGlobalBorderDesktop?.left}${socialGlobalBorderUnits?.Desktop}`;
	const globalTabletBorderWidth = `${socialGlobalBorderTablet?.top}${socialGlobalBorderUnits?.Tablet} ${socialGlobalBorderTablet?.right}${socialGlobalBorderUnits?.Tablet} ${socialGlobalBorderTablet?.bottom}${socialGlobalBorderUnits?.Tablet} ${socialGlobalBorderTablet?.left}${socialGlobalBorderUnits?.Tablet}`;
	const globalMobileBorderWidth = `${socialGlobalBorderMobile?.top}${socialGlobalBorderUnits?.Mobile} ${socialGlobalBorderMobile?.right}${socialGlobalBorderUnits?.Mobile} ${socialGlobalBorderMobile?.bottom}${socialGlobalBorderUnits?.Mobile} ${socialGlobalBorderMobile?.left}${socialGlobalBorderUnits?.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${socialGlobalBorderRadiusDesktop?.top}${socialGlobalBorderRadiusUnits?.Desktop} ${socialGlobalBorderRadiusDesktop?.right}${socialGlobalBorderRadiusUnits?.Desktop} ${socialGlobalBorderRadiusDesktop?.bottom}${socialGlobalBorderRadiusUnits?.Desktop} ${socialGlobalBorderRadiusDesktop?.left}${socialGlobalBorderRadiusUnits?.Desktop}`;
    const globalTabletBorderRadiusWidth = `${socialGlobalBorderRadiusTablet?.top}${socialGlobalBorderRadiusUnits?.Tablet} ${socialGlobalBorderRadiusTablet?.right}${socialGlobalBorderRadiusUnits?.Tablet} ${socialGlobalBorderRadiusTablet?.bottom}${socialGlobalBorderRadiusUnits?.Tablet} ${socialGlobalBorderRadiusTablet?.left}${socialGlobalBorderRadiusUnits?.Tablet}`;
    const globalMobileBorderRadiusWidth = `${socialGlobalBorderRadiusMobile?.top}${socialGlobalBorderRadiusUnits?.Mobile} ${socialGlobalBorderRadiusMobile?.right}${socialGlobalBorderRadiusUnits?.Mobile} ${socialGlobalBorderRadiusMobile?.bottom}${socialGlobalBorderRadiusUnits?.Mobile} ${socialGlobalBorderRadiusMobile?.left}${socialGlobalBorderRadiusUnits?.Mobile}`;
    
    let socialItemColorStyle = '';
    if (socialItems && Array.isArray(socialItems)) {
        socialItems.forEach(item => {
            const itemSelector = `.${blockID} .fb-social-list-item.single-item-${item.id}`;

            if (item.socialIconColor) {
                socialItemColorStyle += `${itemSelector} .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon svg { fill: ${item.socialIconColor}; }`;
            }
            if (item.socialIconHoverColor) {
                socialItemColorStyle += `${itemSelector} .fb-social-icon-link:hover .fb-social-icon-wrapper .fb-social-icon svg { fill: ${item.socialIconHoverColor}; }`;
            }

            if (item.socialIconBgColor) {
                socialItemColorStyle += `${itemSelector} .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon { background-color: ${item.socialIconBgColor}; }`;
            }
            if (item.socialIconHoverBgColor) {
                socialItemColorStyle += `${itemSelector} .fb-social-icon-link:hover .fb-social-icon-wrapper .fb-social-icon { background-color: ${item.socialIconHoverBgColor}; }`;
            }

            if (socialIconsPresetStyle === 'preset-4' && item.socialIconBgColor) {
                socialItemColorStyle += `${itemSelector} .fb-social-icon-link { border-color: ${item.socialIconBgColor}; }`;
            }

            if (item.normalItemBackgroundType === 'gradient') {
                socialItemColorStyle += `${itemSelector} .fb-social-icon-link { background: ${item.normalItemCustomGradientSwitcher && item.normalItemCustomGradientInputValue ? item.normalItemCustomGradientInputValue : item.normalItemGradientColor}; }`;
            } else if (item.normalItemClassicColor) {
                socialItemColorStyle += `${itemSelector} .fb-social-icon-link { background-color: ${item.normalItemClassicColor}; }`;
            }

            if (item.hoverItemBackgroundType === 'gradient') {
                socialItemColorStyle += `${itemSelector} .fb-social-icon-link:hover { background: ${item.hoverItemCustomGradientSwitcher && item.hoverItemCustomGradientInputValue ? item.hoverItemCustomGradientInputValue : item.hoverItemGradientColor}; }`;
            } else if (item.hoverItemClassicColor) {
                socialItemColorStyle += `${itemSelector} .fb-social-icon-link:hover { background-color: ${item.hoverItemClassicColor}; }`;
            }
        });
    }

    const socialShareBlockStyle = `
        .${blockID}.fb-social-main-wrapper {
            ${socialIconsPositionType === 'default' ? `position: relative;` : ''}
            ${socialIconsPositionType !== 'default' ? `position: ${socialIconsPositionType} !important;` : ''}
            ${socialIconsPositionType !== 'default' && socialIconsPositionType !== 'relative' && socialIconsHZOrientationType === 'left' && socialIconsHZLeftOffset?.Desktop !== undefined ? `left: ${socialIconsHZLeftOffset?.Desktop}${socialIconsHZLeftOffsetUnits?.Desktop};` : ''}
            ${socialIconsPositionType !== 'default' && socialIconsPositionType !== 'relative' && socialIconsHZOrientationType === 'right' && socialIconsHZRightOffset?.Desktop !== undefined ? `right: ${socialIconsHZRightOffset?.Desktop}${socialIconsHZRightOffsetUnits?.Desktop};` : ''}
            ${socialIconsPositionType !== 'default' && socialIconsPositionType !== 'relative' && socialIconsVROrientationType === 'top' && socialIconsVRTopOffset?.Desktop !== undefined ? `top: ${socialIconsVRTopOffset?.Desktop}${socialIconsVRTopOffsetUnits?.Desktop};` : ''}
            ${socialIconsPositionType !== 'default' && socialIconsPositionType !== 'relative' && socialIconsVROrientationType === 'bottom' && socialIconsVRBottomOffset?.Desktop !== undefined ? `bottom: ${socialIconsVRBottomOffset?.Desktop}${socialIconsVRBottomOffsetUnits?.Desktop};` : ''}
            ${socialGlobalZIndex?.Desktop ? `z-index: ${socialGlobalZIndex?.Desktop};` : ''}
            ${socialIconsOverflow !== 'default' ? `overflow: ${socialIconsOverflow};` : ''}
        }
        .${blockID} .fb-social-wrapper {
            ${socialGlobalBgColor ? `background-color: ${socialGlobalBgColor};` : ''} 
            ${globalDesktopPadding && socialGlobalPaddingDesktop?.top ? `padding: ${globalDesktopPadding};` : ''}
            ${globalDesktopMargin && socialGlobalMarginDesktop?.top ? `margin: ${globalDesktopMargin};` : ''} 
            ${socialGlobalBorder ? `border: ${socialGlobalBorder};` : ''} 
            ${globalDesktopBorderWidth && socialGlobalBorderDesktop?.top ? `border-width: ${globalDesktopBorderWidth};` : ''}
            ${globalDesktopBorderRadiusWidth && socialGlobalBorderRadiusDesktop?.top ? `border-radius: ${globalDesktopBorderRadiusWidth};` : ''}
            ${socialGlobalBorderColor ? `border-color: ${socialGlobalBorderColor};` : ''}
            ${socialGlobalBoxShadowCssValue ? `box-shadow: ${socialGlobalBoxShadowCssValue};` : ''}
            transition: all .3s ease-in-out;
            position: relative;
        }
        .${blockID} .fb-social-wrapper:hover {
            ${socialGlobalBgHoverColor ? `background-color: ${socialGlobalBgHoverColor};` : ''}
            ${socialGlobalBorderHoverColor ? `border-color: ${socialGlobalBorderHoverColor};` : ''}
            ${socialGlobalBoxShadowHoverCssValue  ? `box-shadow: ${socialGlobalBoxShadowHoverCssValue};` : ''}
        }
        .${blockID} .fb-socials {
            grid-gap: ${socialGapSize?.Desktop}${socialGapUnits?.Desktop};
            justify-content: ${socialAlignment};
        }
        .${blockID} .fb-social-list-item .fb-social-icon-link{
            ${socialBgColor ? `background-color: ${socialBgColor};` : ''} 
            ${socialDesktopPadding && socialPaddingDesktop?.top ? `padding: ${socialDesktopPadding};` : ''}
            ${socialDesktopMargin && socialMarginDesktop?.top ? `margin: ${socialDesktopMargin};` : ''}
            ${socialBorder ? `border: ${socialBorder};` : ''}  
            ${socialDesktopBorderWidth && socialBorderDesktop?.top ? `border-width: ${socialDesktopBorderWidth};` : ''}
            ${socialDesktopBorderRadiusWidth && socialBorderRadiusDesktop?.top ? `border-radius: ${socialDesktopBorderRadiusWidth};` : ''}
            ${socialBorderColor ? `border-color: ${socialBorderColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-social-list-item .fb-social-icon-link:hover {
            ${socialBgHoverColor ? `background-color: ${socialBgHoverColor};` : ''}
            ${socialBorderHoverColor ? `border-color: ${socialBorderHoverColor};` : ''}
        }
        .${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon {
            ${socialIconBgGlobalColor ? `background-color: ${socialIconBgGlobalColor};` : ''} 
            ${IconPaddingDesktop && socialIconPaddingDesktop?.top ? `padding: ${IconPaddingDesktop};` : ''}
            ${socialIconBorder ? `border: ${socialIconBorder};` : ''} 
            ${IconBorderDesktopWidth && socialIconBorderDesktop?.top ? `border-width: ${IconBorderDesktopWidth};` : ''}
            ${IconBorderRadiusDesktopWidth && socialIconBorderRadiusDesktop?.top ? `border-radius: ${IconBorderRadiusDesktopWidth};` : ''}
            ${socialIconBorderColor ? `border-color: ${socialIconBorderColor};` : ''}
        }
        .${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon:hover {
            ${socialIconBgGlobalHoverColor ? `background-color: ${socialIconBgGlobalHoverColor};` : ''}
            ${socialIconBorderHoverColor ? `border-color: ${socialIconBorderHoverColor};` : ''}
        }
        .${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon svg{
            width: ${socialIconSize?.Desktop}${socialIconSizeUnits?.Desktop};
            height: ${socialIconSize?.Desktop}${socialIconSizeUnits?.Desktop};
        }
        .${blockID} .fb-social-list-item .fb-social-icon-link svg{
            fill: ${socialIconGlobalColor};
        }
        .${blockID} .fb-social-list-item .fb-social-icon-link:hover svg{
            fill: ${socialIconGlobalHoverColor};
        }
        .${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-title {
            ${socialTitleGlobalTypoSwitcher?.fontFamily === true && socialTitleGlobalTypographyData?.fontFamily ? `font-family: ${socialTitleGlobalTypographyData?.fontFamily};` : ''}
            ${socialTitleGlobalTypoSwitcher?.fontSize === true && socialTitleGlobalTypographyData?.fontSize ? `font-size: ${socialTitleGlobalTypographyData?.fontSize};` : ''}
            ${socialTitleGlobalTypoSwitcher?.fontWeight === true && socialTitleGlobalTypographyData?.fontWeight ? `font-weight: ${socialTitleGlobalTypographyData?.fontWeight};` : ''}
            ${socialTitleGlobalTypoSwitcher?.fontStyle === true && socialTitleGlobalTypographyData?.fontStyle ? `font-style: ${socialTitleGlobalTypographyData?.fontStyle};` : ''}
            ${socialTitleGlobalTypoSwitcher?.textTransform === true && socialTitleGlobalTypographyData?.textTransform ? `text-transform: ${socialTitleGlobalTypographyData?.textTransform};` : ''}
            ${socialTitleGlobalTypoSwitcher?.textDecoration === true && socialTitleGlobalTypographyData?.textDecoration ? `text-decoration: ${socialTitleGlobalTypographyData?.textDecoration};` : ''}
            ${socialTitleGlobalTypoSwitcher?.letterSpacing === true && socialTitleGlobalTypographyData?.letterSpacing ? `letter-spacing: ${socialTitleGlobalTypographyData?.letterSpacing};` : ''}
            ${socialTitleGlobalTypoSwitcher?.lineHeight === true && socialTitleGlobalTypographyData?.lineHeight ? `line-height: ${socialTitleGlobalTypographyData?.lineHeight};` : ''}
            
            ${socialTitleGlobalTypoSwitcher?.fontFamily === false && socialTitleFontFamily && socialTitleFontFamily !== 'default' ? `font-family: ${socialTitleFontFamily};` : ''}
            ${socialTitleGlobalTypoSwitcher?.fontSize === false && socialTitleFontSize?.Desktop && socialTitleFontSizeUnits?.Desktop ? `font-size: ${socialTitleFontSize?.Desktop}${socialTitleFontSizeUnits?.Desktop};` : ''}
            ${socialTitleGlobalTypoSwitcher?.fontWeight === false && socialTitleFontWeight ? `font-weight: ${socialTitleFontWeight};` : ''}
            ${socialTitleGlobalTypoSwitcher?.fontStyle === false && socialTitleFontStyle ? `font-style: ${socialTitleFontStyle};` : ''}
            ${socialTitleGlobalTypoSwitcher?.textTransform === false && socialTitleTextTransform ? `text-transform: ${socialTitleTextTransform};` : ''}
            ${socialTitleGlobalTypoSwitcher?.textDecoration === false && socialTitleTextDecoration ? `text-decoration: ${socialTitleTextDecoration};` : ''}
            ${socialTitleGlobalTypoSwitcher?.letterSpacing === false && socialTitleLetterSpacing?.Desktop && socialTitleLetterSpacingUnits?.Desktop ? `letter-spacing: ${socialTitleLetterSpacing?.Desktop}${socialTitleLetterSpacingUnits?.Desktop};` : ''}
            ${socialTitleGlobalTypoSwitcher?.lineHeight === false && socialTitleLineHeight?.Desktop && socialTitleLineHeightUnits?.Desktop ? `line-height: ${socialTitleLineHeight?.Desktop}${socialTitleLineHeightUnits?.Desktop};` : ''}
            ${socialTitleColor ? `color: ${socialTitleColor};` : ''}
            ${SocialTitlePaddingDesktopWidth && socialTitlePaddingDesktop?.top ? `padding: ${SocialTitlePaddingDesktopWidth};` : ''}
        }
        .${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-title:hover {
            ${socialTitleHoverColor ? `color: ${socialTitleHoverColor};` : ''}
        }
        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-social-main-wrapper {
                ${socialIconsPositionType !== 'default' && socialIconsPositionType !== 'relative' && socialIconsHZOrientationType === 'left' && socialIconsHZLeftOffset?.Tablet !== undefined ? `left: ${socialIconsHZLeftOffset?.Tablet}${socialIconsHZLeftOffsetUnits?.Tablet};` : ''}
                ${socialIconsPositionType !== 'default' && socialIconsPositionType !== 'relative' && socialIconsHZOrientationType === 'right' && socialIconsHZRightOffset?.Tablet !== undefined ? `right: ${socialIconsHZRightOffset?.Tablet}${socialIconsHZRightOffsetUnits?.Tablet};` : ''}
                ${socialIconsPositionType !== 'default' && socialIconsPositionType !== 'relative' && socialIconsVROrientationType === 'top' && socialIconsVRTopOffset?.Tablet !== undefined ? `top: ${socialIconsVRTopOffset?.Tablet}${socialIconsVRTopOffsetUnits?.Tablet};` : ''}
                ${socialIconsPositionType !== 'default' && socialIconsPositionType !== 'relative' && socialIconsVROrientationType === 'bottom' && socialIconsVRBottomOffset?.Tablet !== undefined ? `bottom: ${socialIconsVRBottomOffset?.Tablet}${socialIconsVRBottomOffsetUnits?.Tablet};` : ''}
                ${socialGlobalZIndex?.Tablet ? `z-index: ${socialGlobalZIndex?.Tablet};` : ''}
            }
            .${blockID} .fb-social-wrapper {
                ${globalTabletPadding && socialGlobalPaddingTablet?.top ? `padding: ${globalTabletPadding};` : ''}
                ${globalTabletMargin && socialGlobalMarginTablet?.top ? `margin: ${globalTabletMargin};` : ''} 
                ${globalTabletBorderWidth && socialGlobalBorderTablet?.top ? `border-width: ${globalTabletBorderWidth};` : ''}
                ${globalTabletBorderRadiusWidth && socialGlobalBorderRadiusTablet?.top ? `border-radius: ${globalTabletBorderRadiusWidth};` : ''}
            }
            .${blockID} .fb-socials {
                grid-gap: ${socialGapSize?.Tablet}${socialGapUnits?.Tablet}; 
            }

            .${blockID} .fb-social-list-item .fb-social-icon-link{
                ${socialTabletPadding && socialPaddingTablet?.top ? `padding: ${socialTabletPadding};` : ''}
                ${socialTabletMargin && socialMarginTablet?.top ? `margin: ${socialTabletMargin};` : ''}
                ${socialTabletBorderWidth && socialBorderTablet?.top ? `border-width: ${socialTabletBorderWidth};` : ''}
                ${socialTabletBorderRadiusWidth && socialBorderRadiusTablet?.top ? `border-radius: ${socialTabletBorderRadiusWidth};` : ''}
            }

            .${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon {
                ${IconPaddingTablet && socialIconPaddingTablet?.top ? `padding: ${IconPaddingTablet};` : ''}
                ${IconBorderTabletWidth && socialIconBorderTablet?.top ? `border-width: ${IconBorderTabletWidth};` : ''}
                ${IconBorderRadiusTabletWidth && socialIconBorderRadiusTablet?.top ? `border-radius: ${IconBorderRadiusTabletWidth};` : ''}
            }

            .${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon svg{
                width: ${socialIconSize?.Tablet}${socialIconSizeUnits?.Tablet}; 
                height: ${socialIconSize?.Tablet}${socialIconSizeUnits?.Tablet};
            }

            .${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-title {
                ${socialTitleGlobalTypoSwitcher?.fontSize === false && socialTitleFontSize?.Tablet && socialTitleFontSizeUnits?.Tablet ? `font-size: ${socialTitleFontSize?.Tablet}${socialTitleFontSizeUnits?.Tablet};` : ''}
                ${socialTitleGlobalTypoSwitcher?.letterSpacing === false && socialTitleLetterSpacing?.Tablet && socialTitleLetterSpacingUnits?.Tablet ? `letter-spacing: ${socialTitleLetterSpacing?.Tablet}${socialTitleLetterSpacingUnits?.Tablet};` : ''}
                ${socialTitleGlobalTypoSwitcher?.lineHeight === false && socialTitleLineHeight?.Tablet && socialTitleLineHeightUnits?.Tablet ? `line-height: ${socialTitleLineHeight?.Tablet}${socialTitleLineHeightUnits?.Tablet};` : ''}
                ${SocialTitlePaddingTabletWidth && socialTitlePaddingTablet?.top ? `padding: ${SocialTitlePaddingTabletWidth};` : ''}
            }	
        }
        @media only screen and (max-width: 767px) {
            .${blockID}.fb-social-main-wrapper {
                ${socialIconsPositionType !== 'default' && socialIconsPositionType !== 'relative' && socialIconsHZOrientationType === 'left' && socialIconsHZLeftOffset?.Mobile !== undefined ? `left: ${socialIconsHZLeftOffset?.Mobile}${socialIconsHZLeftOffsetUnits?.Mobile};` : ''}
                ${socialIconsPositionType !== 'default' && socialIconsPositionType !== 'relative' && socialIconsHZOrientationType === 'right' && socialIconsHZRightOffset?.Mobile !== undefined ? `right: ${socialIconsHZRightOffset?.Mobile}${socialIconsHZRightOffsetUnits?.Mobile};` : ''}
                ${socialIconsPositionType !== 'default' && socialIconsPositionType !== 'relative' && socialIconsVROrientationType === 'top' && socialIconsVRTopOffset?.Mobile !== undefined ? `top: ${socialIconsVRTopOffset?.Mobile}${socialIconsVRTopOffsetUnits?.Mobile};` : ''}
                ${socialIconsPositionType !== 'default' && socialIconsPositionType !== 'relative' && socialIconsVROrientationType === 'bottom' && socialIconsVRBottomOffset?.Mobile !== undefined ? `bottom: ${socialIconsVRBottomOffset?.Mobile}${socialIconsVRBottomOffsetUnits?.Mobile};` : ''} 
                ${socialGlobalZIndex?.Mobile ? `z-index: ${socialGlobalZIndex?.Mobile};` : ''}
            }
            .${blockID} .fb-social-wrapper {
                ${globalMobilePadding && socialGlobalPaddingMobile?.top ? `padding: ${globalMobilePadding};` : ''}
                ${globalMobileMargin && socialGlobalMarginMobile?.top ? `margin: ${globalMobileMargin};` : ''} 
                ${globalMobileBorderWidth && socialGlobalBorderMobile?.top ? `border-width: ${globalMobileBorderWidth};` : ''}
                ${globalMobileBorderRadiusWidth && socialGlobalBorderRadiusMobile?.top ? `border-radius: ${globalMobileBorderRadiusWidth};` : ''}
            }
            .${blockID} .fb-socials {
                grid-gap: ${socialGapSize?.Mobile}${socialGapUnits?.Mobile};
            }
            .${blockID} .fb-social-list-item .fb-social-icon-link{
                ${socialMobilePadding && socialPaddingMobile?.top? `padding: ${socialMobilePadding};` : ''}
                ${socialMobileMargin && socialMarginMobile?.top ? `margin: ${socialMobileMargin};` : ''}
                ${socialMobileBorderWidth && socialBorderMobile?.top ? `border-width: ${socialMobileBorderWidth};` : ''}
                ${socialMobileBorderRadiusWidth && socialBorderRadiusMobile?.top ? `border-radius: ${socialMobileBorderRadiusWidth};` : ''}
            }
            .${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon {
                ${IconPaddingMobile && socialIconPaddingMobile?.top ? `padding: ${IconPaddingMobile};` : ''}
                ${IconBorderMobileWidth && socialIconBorderMobile?.top ? `border-width: ${IconBorderMobileWidth};` : ''}
                ${IconBorderRadiusMobileWidth && socialIconBorderRadiusMobile?.top ? `border-radius: ${IconBorderRadiusMobileWidth};` : ''}
            }
            .${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-wrapper .fb-social-icon svg{
                width: ${socialIconSize?.Mobile}${socialIconSizeUnits?.Mobile}; 
                height: ${socialIconSize?.Mobile}${socialIconSizeUnits?.Mobile};
            }
            .${blockID} .fb-social-list-item .fb-social-icon-link .fb-social-icon-title {
                ${socialTitleGlobalTypoSwitcher?.fontSize === false && socialTitleFontSize?.Mobile && socialTitleFontSizeUnits?.Mobile ? `font-size: ${socialTitleFontSize?.Mobile}${socialTitleFontSizeUnits?.Mobile};` : ''}
                ${socialTitleGlobalTypoSwitcher?.letterSpacing === false && socialTitleLetterSpacing?.Mobile && socialTitleLetterSpacingUnits?.Mobile ? `letter-spacing: ${socialTitleLetterSpacing?.Mobile}${socialTitleLetterSpacingUnits?.Mobile};` : ''}
                ${socialTitleGlobalTypoSwitcher?.lineHeight === false && socialTitleLineHeight?.Mobile && socialTitleLineHeightUnits?.Mobile ? `line-height: ${socialTitleLineHeight?.Mobile}${socialTitleLineHeightUnits?.Mobile};` : ''}
                ${SocialTitlePaddingMobileWidth && socialTitlePaddingMobile?.top ? `padding: ${SocialTitlePaddingMobileWidth};` : ''}
            }
        }
    `;

    const customCss = getCustomCss(socialGlobalCustomCSS, `.${blockID}`);
    return `${socialItemColorStyle}${socialShareBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default generateSocialStyle;