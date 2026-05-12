import getCustomCss from '@Utils/getCustomCss';

const backToTopStyle = (attributes) => {
    const {
        blockID,

        backToTopPaddingUnits,
        backToTopPaddingDesktop,
        backToTopPaddingTablet,
        backToTopPaddingMobile,
        backToTopPaddingLink,

        backToTopBorder,
        backToTopBorderColorSwitcher,
        backToTopBorderColor,
        backToTopBorderHoverColor,

        backToTopBorderUnits,
        backToTopBorderDesktop,
        backToTopBorderTablet,
        backToTopBorderMobile,
        backToTopBorderLink,

        backToTopBorderRadiusUnits,
        backToTopBorderRadiusDesktop,
        backToTopBorderRadiusTablet,
        backToTopBorderRadiusMobile,
        backToTopBorderRadiusLink,

        backToTopBoxShadowSwitcher,
        backToTopBoxShadowValues,
        backToTopBoxShadowCssValue,
        backToTopBoxShadowHoverValues,
        backToTopBoxShadowHoverCssValue,
        backToTopGlobalZIndex,

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

        backToTopGlobalTypoSwitcher,
        backToTopGlobalTypographyData,
        backToTopGlobalTypoType,
        backToTopGlobalTypoOption,
        backToTopFontFamily,
        backToTopFontSize,
        backToTopFontSizeUnits,
        backToTopFontWeight,
        backToTopFontStyle,
        backToTopTextTransform,
        backToTopTextDecoration,
        backToTopLetterSpacing,
        backToTopLineHeight,
        backToTopLetterSpacingUnits,
        backToTopLineHeightUnits,

        backToTopPosition,
        backToTopEntranceAnimation,
        backToTopContentDirection,
        backToTopCustomCSS,
        backToTopWraperID,
        backToTopWraperClass,

    } = attributes;

    /** Default padding for Back To Top */
    const backToTopPaddingDesktopWidth = `${backToTopPaddingDesktop?.top}${backToTopPaddingUnits?.Desktop} ${backToTopPaddingDesktop?.right}${backToTopPaddingUnits?.Desktop} ${backToTopPaddingDesktop?.bottom}${backToTopPaddingUnits?.Desktop} ${backToTopPaddingDesktop?.left}${backToTopPaddingUnits?.Desktop}`;
    const backToTopPaddingTabletWidth = `${backToTopPaddingTablet?.top}${backToTopPaddingUnits?.Tablet} ${backToTopPaddingTablet?.right}${backToTopPaddingUnits?.Tablet} ${backToTopPaddingTablet?.bottom}${backToTopPaddingUnits?.Tablet} ${backToTopPaddingTablet?.left}${backToTopPaddingUnits?.Tablet}`;
    const backToTopPaddingMobileWidth = `${backToTopPaddingMobile?.top}${backToTopPaddingUnits?.Mobile} ${backToTopPaddingMobile?.right}${backToTopPaddingUnits?.Mobile} ${backToTopPaddingMobile?.bottom}${backToTopPaddingUnits?.Mobile} ${backToTopPaddingMobile?.left}${backToTopPaddingUnits?.Mobile}`;

    /** Default border for Back To Top */
    const backToTopBorderDesktopWidth = `${backToTopBorderDesktop?.top}${backToTopBorderUnits?.Desktop} ${backToTopBorderDesktop?.right}${backToTopBorderUnits?.Desktop} ${backToTopBorderDesktop?.bottom}${backToTopBorderUnits?.Desktop} ${backToTopBorderDesktop?.left}${backToTopBorderUnits?.Desktop}`;
    const backToTopBorderTabletWidth = `${backToTopBorderTablet?.top}${backToTopBorderUnits?.Tablet} ${backToTopBorderTablet?.right}${backToTopBorderUnits?.Tablet} ${backToTopBorderTablet?.bottom}${backToTopBorderUnits?.Tablet} ${backToTopBorderTablet?.left}${backToTopBorderUnits?.Tablet}`;
    const backToTopBorderMobileWidth = `${backToTopBorderMobile?.top}${backToTopBorderUnits?.Mobile} ${backToTopBorderMobile?.right}${backToTopBorderUnits?.Mobile} ${backToTopBorderMobile?.bottom}${backToTopBorderUnits?.Mobile} ${backToTopBorderMobile?.left}${backToTopBorderUnits?.Mobile}`;

    /** Default border radius for Back To Top */
    const backToTopBorderRadiusDesktopWidth = `${backToTopBorderRadiusDesktop?.top}${backToTopBorderRadiusUnits?.Desktop} ${backToTopBorderRadiusDesktop?.right}${backToTopBorderRadiusUnits?.Desktop} ${backToTopBorderRadiusDesktop?.bottom}${backToTopBorderRadiusUnits?.Desktop} ${backToTopBorderRadiusDesktop?.left}${backToTopBorderRadiusUnits?.Desktop}`;
    const backToTopBorderRadiusTabletWidth = `${backToTopBorderRadiusTablet?.top}${backToTopBorderRadiusUnits?.Tablet} ${backToTopBorderRadiusTablet?.right}${backToTopBorderRadiusUnits?.Tablet} ${backToTopBorderRadiusTablet?.bottom}${backToTopBorderRadiusUnits?.Tablet} ${backToTopBorderRadiusTablet?.left}${backToTopBorderRadiusUnits?.Tablet}`;
    const backToTopBorderRadiusMobileWidth = `${backToTopBorderRadiusMobile?.top}${backToTopBorderRadiusUnits?.Mobile} ${backToTopBorderRadiusMobile?.right}${backToTopBorderRadiusUnits?.Mobile} ${backToTopBorderRadiusMobile?.bottom}${backToTopBorderRadiusUnits?.Mobile} ${backToTopBorderRadiusMobile?.left}${backToTopBorderRadiusUnits?.Mobile}`;


    const backToTopBlockStyle = `
        .${blockID} .fb-back-to-top-wrapper {
            ${backToTopGlobalZIndex?.Desktop ? `z-index: ${backToTopGlobalZIndex?.Desktop};` : ''}
           ${backToTopPaddingDesktopWidth && backToTopPaddingDesktop?.top ? `padding: ${backToTopPaddingDesktopWidth};` : ''}
           ${backToTopBorder ? `border: ${backToTopBorder};` : ''}
           ${backToTopBorderDesktopWidth && backToTopBorderDesktop?.top ? `border-width: ${backToTopBorderDesktopWidth};` : ''}
           ${backToTopBorderColor ? `border-color: ${backToTopBorderColor};` : ''}
           ${backToTopBorderRadiusDesktopWidth && backToTopBorderRadiusDesktop?.top ? `border-radius: ${backToTopBorderRadiusDesktopWidth};` : ''}
           ${backToTopBoxShadowCssValue ? `box-shadow: ${backToTopBoxShadowCssValue};` : ''}

            ${backToTopNormalBackgroundType === 'gradient' ? `  
                ${backToTopNormalCustomGradientSwitcher && backToTopNormalCustomGradientInputValue ? `background: ${backToTopNormalCustomGradientInputValue};` : `background: ${backToTopNormalGradientColor};`}
            `: `
                ${backToTopNormalClassicColor ? `background: ${backToTopNormalClassicColor};` : ''}
            `}
        }

        .${blockID} .fb-back-to-top-wrapper:hover {
           ${backToTopBoxShadowHoverCssValue ? `box-shadow: ${backToTopBoxShadowHoverCssValue};` : ''}
            ${backToTopHoverBackgroundType === 'gradient' ? `
                ${backToTopHoverCustomGradientSwitcher && backToTopHoverCustomGradientInputValue ? `background: ${backToTopHoverCustomGradientInputValue};` : `background: ${backToTopHoverGradientColor};`}
            `: `
                ${backToTopHoverClassicColor ? `background: ${backToTopHoverClassicColor};` : ''}
            `}
        }

        .${blockID} .fb-back-to-top-content-wrapper span {
            ${backToTopGlobalTypoSwitcher.fontFamily === true &&
            backToTopGlobalTypographyData.fontFamily
            ? `font-family: ${backToTopGlobalTypographyData.fontFamily};`
            : ""
        }
            ${backToTopGlobalTypoSwitcher.fontSize === true &&
            backToTopGlobalTypographyData.fontSize
            ? `font-size: ${backToTopGlobalTypographyData.fontSize};`
            : ""
        }
            ${backToTopGlobalTypoSwitcher.fontWeight === true &&
            backToTopGlobalTypographyData.fontWeight
            ? `font-weight: ${backToTopGlobalTypographyData.fontWeight};`
            : ""
        }
            ${backToTopGlobalTypoSwitcher.fontStyle === true &&
            backToTopGlobalTypographyData.fontStyle
            ? `font-style: ${backToTopGlobalTypographyData.fontStyle};`
            : ""
        }
            ${backToTopGlobalTypoSwitcher.textTransform === true &&
            backToTopGlobalTypographyData.textTransform
            ? `text-transform: ${backToTopGlobalTypographyData.textTransform};`
            : ""
        }
            ${backToTopGlobalTypoSwitcher.textDecoration === true &&
            backToTopGlobalTypographyData.textDecoration
            ? `text-decoration: ${backToTopGlobalTypographyData.textDecoration};`
            : ""
        }
            ${backToTopGlobalTypoSwitcher.letterSpacing === true &&
            backToTopGlobalTypographyData.letterSpacing
            ? `letter-spacing: ${backToTopGlobalTypographyData.letterSpacing};`
            : ""
        }
            ${backToTopGlobalTypoSwitcher.lineHeight === true &&
            backToTopGlobalTypographyData.lineHeight
            ? `line-height: ${backToTopGlobalTypographyData.lineHeight};`
            : ""
        }

           ${backToTopGlobalTypoSwitcher.fontFamily === false &&
            backToTopFontFamily &&
            backToTopFontFamily !== "Default"
            ? `font-family: ${backToTopFontFamily};`
            : ""
        }
           ${backToTopGlobalTypoSwitcher.fontSize === false &&
            backToTopFontSize.Desktop &&
            backToTopFontSizeUnits.Desktop
            ? `font-size: ${backToTopFontSize.Desktop}${backToTopFontSizeUnits.Desktop};`
            : ""
        }
           ${backToTopGlobalTypoSwitcher.fontWeight === false &&
            backToTopFontWeight
            ? `font-weight: ${backToTopFontWeight};`
            : ""
        }
           ${backToTopGlobalTypoSwitcher.fontStyle === false &&
            backToTopFontStyle
            ? `font-style: ${backToTopFontStyle};`
            : ""
        }
           ${backToTopGlobalTypoSwitcher.textTransform === false &&
            backToTopTextTransform
            ? `text-transform: ${backToTopTextTransform};`
            : ""
        }
           ${backToTopGlobalTypoSwitcher.textDecoration === false &&
            backToTopTextDecoration
            ? `text-decoration: ${backToTopTextDecoration};`
            : ""
        }
           ${backToTopGlobalTypoSwitcher.letterSpacing === false &&
            backToTopLetterSpacing.Desktop &&
            backToTopLetterSpacingUnits.Desktop
            ? `letter-spacing: ${backToTopLetterSpacing.Desktop}${backToTopLetterSpacingUnits.Desktop};`
            : ""
        }
           ${backToTopGlobalTypoSwitcher.lineHeight === false &&
            backToTopLineHeight.Desktop &&
            backToTopLineHeightUnits.Desktop
            ? `line-height: ${backToTopLineHeight.Desktop}${backToTopLineHeightUnits.Desktop};`
            : ""
        }
       }

        @media (max-width: 1024px) {
            .${blockID} .fb-back-to-top-wrapper {
               ${backToTopPaddingTabletWidth && backToTopPaddingTablet?.top ? `padding: ${backToTopPaddingTabletWidth};` : ''}
               ${backToTopBorderTabletWidth && backToTopBorderTablet?.top ? `border-width: ${backToTopBorderTabletWidth};` : ''}
               ${backToTopBorderRadiusTabletWidth && backToTopBorderRadiusTablet?.top ? `border-radius: ${backToTopBorderRadiusTabletWidth};` : ''}
            }
            .${blockID} .fb-back-to-top-content-wrapper span {
            
            }
        }

        @media (max-width: 767px) {
            .${blockID} .fb-back-to-top-wrapper {
               ${backToTopPaddingMobileWidth && backToTopPaddingMobile?.top ? `padding: ${backToTopPaddingMobileWidth};` : ''}
               ${backToTopBorderMobileWidth && backToTopBorderMobile?.top ? `border-width: ${backToTopBorderMobileWidth};` : ''}
               ${backToTopBorderRadiusMobileWidth && backToTopBorderRadiusMobile?.top ? `border-radius: ${backToTopBorderRadiusMobileWidth};` : ''}
            }
            .${blockID} .fb-back-to-top-content-wrapper span {
               
            }
        }
    `;

    const customCss = getCustomCss(backToTopCustomCSS, `.${blockID}`);
    return `${backToTopBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default backToTopStyle;
