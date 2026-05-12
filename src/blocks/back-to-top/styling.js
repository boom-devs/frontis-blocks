import getCustomCss from '@Utils/getCustomCss';

const backToTopStyle = (attributes) => {
    const {
        blockID,
        backToTopPosition,
        backToTopEntranceAnimation,
        backToTopContentDirection,
        backToTopBgColorSwitcher,
        backToTopNormalBackgroundType,
        backToTopNormalClassicColor,
        backToTopNormalGradientColor,
        backToTopNormalCustomGradientSwitcher,
        backToTopNormalCustomGradientInputValue,
        backToTopHoverBackgroundType,
        backToTopHoverClassicColor,
        backToTopHoverGradientColor,
        backToTopHoverCustomGradientSwitcher,
        backToTopHoverCustomGradientInputValue,
        backToTopBorder,
        backToTopBorderColor,
        backToTopBorderHoverColor,
        backToTopBorderUnits,
        backToTopBorderDesktop,
        backToTopBorderTablet,
        backToTopBorderMobile,
        backToTopBorderRadiusUnits,
        backToTopBorderRadiusDesktop,
        backToTopBorderRadiusTablet,
        backToTopBorderRadiusMobile,
        backToTopBoxShadowCssValue,
        backToTopBoxShadowHoverCssValue,
        backToTopFontFamily,
        backToTopFontSize,
        backToTopFontSizeUnits,
        backToTopFontWeight,
        backToTopFontStyle,
        backToTopTextTransform,
        backToTopTextDecoration,
        backToTopLetterSpacing,
        backToTopLetterSpacingUnits,
        backToTopLineHeight,
        backToTopLineHeightUnits,
    } = attributes;

    const desktopBorder = `${backToTopBorderDesktop?.top}${backToTopBorderUnits?.Desktop} ${backToTopBorderDesktop?.right}${backToTopBorderUnits?.Desktop} ${backToTopBorderDesktop?.bottom}${backToTopBorderUnits?.Desktop} ${backToTopBorderDesktop?.left}${backToTopBorderUnits?.Desktop}`;
    const tabletBorder = `${backToTopBorderTablet?.top}${backToTopBorderUnits?.Tablet} ${backToTopBorderTablet?.right}${backToTopBorderUnits?.Tablet} ${backToTopBorderTablet?.bottom}${backToTopBorderUnits?.Tablet} ${backToTopBorderTablet?.left}${backToTopBorderUnits?.Tablet}`;
    const mobileBorder = `${backToTopBorderMobile?.top}${backToTopBorderUnits?.Mobile} ${backToTopBorderMobile?.right}${backToTopBorderUnits?.Mobile} ${backToTopBorderMobile?.bottom}${backToTopBorderUnits?.Mobile} ${backToTopBorderMobile?.left}${backToTopBorderUnits?.Mobile}`;

    const desktopBorderRadius = `${backToTopBorderRadiusDesktop?.top}${backToTopBorderRadiusUnits?.Desktop} ${backToTopBorderRadiusDesktop?.right}${backToTopBorderRadiusUnits?.Desktop} ${backToTopBorderRadiusDesktop?.bottom}${backToTopBorderRadiusUnits?.Desktop} ${backToTopBorderRadiusDesktop?.left}${backToTopBorderRadiusUnits?.Desktop}`;
    const tabletBorderRadius = `${backToTopBorderRadiusTablet?.top}${backToTopBorderRadiusUnits?.Tablet} ${backToTopBorderRadiusTablet?.right}${backToTopBorderRadiusUnits?.Tablet} ${backToTopBorderRadiusTablet?.bottom}${backToTopBorderRadiusUnits?.Tablet} ${backToTopBorderRadiusTablet?.left}${backToTopBorderRadiusUnits?.Tablet}`;
    const mobileBorderRadius = `${backToTopBorderRadiusMobile?.top}${backToTopBorderRadiusUnits?.Mobile} ${backToTopBorderRadiusMobile?.right}${backToTopBorderRadiusUnits?.Mobile} ${backToTopBorderRadiusMobile?.bottom}${backToTopBorderRadiusUnits?.Mobile} ${backToTopBorderRadiusMobile?.left}${backToTopBorderRadiusUnits?.Mobile}`;

    return `
        .${blockID} .fb-back-to-top-inner-wrapper {
            ${backToTopContentDirection ? `flex-direction: ${backToTopContentDirection};` : ''}
            ${backToTopNormalBackgroundType === 'gradient' ? `
                ${backToTopNormalCustomGradientSwitcher && backToTopNormalCustomGradientInputValue ? `background: ${backToTopNormalCustomGradientInputValue};` : `background: ${backToTopNormalGradientColor};`}
            ` : `
                ${backToTopNormalClassicColor ? `background: ${backToTopNormalClassicColor};` : ''}
            `}
            ${backToTopBorder ? `border-style: ${backToTopBorder};` : ''}
            ${desktopBorder ? `border-width: ${desktopBorder};` : ''}
            ${backToTopBorderColor ? `border-color: ${backToTopBorderColor};` : ''}
            ${desktopBorderRadius ? `border-radius: ${desktopBorderRadius};` : ''}
            ${backToTopBoxShadowCssValue ? `box-shadow: ${backToTopBoxShadowCssValue};` : ''}
            transition: all 0.3s ease;
        }

        .${blockID} .fb-back-to-top-inner-wrapper:hover {
            ${backToTopHoverBackgroundType === 'gradient' ? `
                ${backToTopHoverCustomGradientSwitcher && backToTopHoverCustomGradientInputValue ? `background: ${backToTopHoverCustomGradientInputValue};` : `background: ${backToTopHoverGradientColor};`}
            ` : `
                ${backToTopHoverClassicColor ? `background: ${backToTopHoverClassicColor};` : ''}
            `}
            ${backToTopBorderHoverColor ? `border-color: ${backToTopBorderHoverColor};` : ''}
            ${backToTopBoxShadowHoverCssValue ? `box-shadow: ${backToTopBoxShadowHoverCssValue};` : ''}
        }

        .${blockID} .fb-back-to-top-content-wrapper span {
            ${backToTopFontFamily ? `font-family: ${backToTopFontFamily};` : ''}
            ${backToTopFontSize?.Desktop ? `font-size: ${backToTopFontSize?.Desktop}${backToTopFontSizeUnits?.Desktop};` : ''}
            ${backToTopFontWeight ? `font-weight: ${backToTopFontWeight};` : ''}
            ${backToTopFontStyle ? `font-style: ${backToTopFontStyle};` : ''}
            ${backToTopTextTransform ? `text-transform: ${backToTopTextTransform};` : ''}
            ${backToTopTextDecoration ? `text-decoration: ${backToTopTextDecoration};` : ''}
            ${backToTopLetterSpacing?.Desktop ? `letter-spacing: ${backToTopLetterSpacing?.Desktop}${backToTopLetterSpacingUnits?.Desktop};` : ''}
            ${backToTopLineHeight?.Desktop ? `line-height: ${backToTopLineHeight?.Desktop}${backToTopLineHeightUnits?.Desktop};` : ''}
        }

        @media (max-width: 1024px) {
            .${blockID} .fb-back-to-top-inner-wrapper {
                ${tabletBorder ? `border-width: ${tabletBorder};` : ''}
                ${tabletBorderRadius ? `border-radius: ${tabletBorderRadius};` : ''}
            }
            .${blockID} .fb-back-to-top-content-wrapper span {
                ${backToTopFontSize?.Tablet ? `font-size: ${backToTopFontSize?.Tablet}${backToTopFontSizeUnits?.Tablet};` : ''}
                ${backToTopLetterSpacing?.Tablet ? `letter-spacing: ${backToTopLetterSpacing?.Tablet}${backToTopLetterSpacingUnits?.Tablet};` : ''}
                ${backToTopLineHeight?.Tablet ? `line-height: ${backToTopLineHeight?.Tablet}${backToTopLineHeightUnits?.Tablet};` : ''}
            }
        }

        @media (max-width: 767px) {
            .${blockID} .fb-back-to-top-inner-wrapper {
                ${mobileBorder ? `border-width: ${mobileBorder};` : ''}
                ${mobileBorderRadius ? `border-radius: ${mobileBorderRadius};` : ''}
            }
            .${blockID} .fb-back-to-top-content-wrapper span {
                ${backToTopFontSize?.Mobile ? `font-size: ${backToTopFontSize?.Mobile}${backToTopFontSizeUnits?.Mobile};` : ''}
                ${backToTopLetterSpacing?.Mobile ? `letter-spacing: ${backToTopLetterSpacing?.Mobile}${backToTopLetterSpacingUnits?.Mobile};` : ''}
                ${backToTopLineHeight?.Mobile ? `line-height: ${backToTopLineHeight?.Mobile}${backToTopLineHeightUnits?.Mobile};` : ''}
            }
        }
    `.replace(/\s+/g, ' ').trim();
}

export default backToTopStyle;
