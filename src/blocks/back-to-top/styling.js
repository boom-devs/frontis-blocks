import getCustomCss from '@Utils/getCustomCss';

const backToTopStyle = (attributes) => {
    const {
        blockID,

        backToTopPaddingUnits,
        backToTopPaddingDesktop,
        backToTopPaddingTablet,
        backToTopPaddingMobile,

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
        backToTopGlobalZIndex,

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

        backToTopContentDirection,
        backToTopCustomCSS,

        backToTopHoverZoomEffect,
        backToTopClickScaleEffect,

        backToTopIconImagePosition,
        backToTopIconImageSize,
        backToTopIconImageSizeUnits,
        backToTopTextIconSpacing,
        backToTopTextIconSpacingUnits,

        backToTopIconColor,
        backToTopIconHoverColor,

        backToTopBtnTextColor,
        backToTopBtnTextHoverColor,
        backToTopPosition,
        backToTopOffsetX,
        backToTopOffsetY,
        backToTopOffsetXUnits,
        backToTopOffsetYUnits,

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
             transition: transform 0.3s ease;

             ${backToTopPosition === 'bottom-right' ? `bottom: ${backToTopOffsetY?.Desktop || 20}${backToTopOffsetYUnits?.Desktop || 'px'}; right: ${backToTopOffsetX?.Desktop || 20}${backToTopOffsetXUnits?.Desktop || 'px'};` : ''}
             ${backToTopPosition === 'bottom-left' ? `bottom: ${backToTopOffsetY?.Desktop || 20}${backToTopOffsetYUnits?.Desktop || 'px'}; left: ${backToTopOffsetX?.Desktop || 20}${backToTopOffsetXUnits?.Desktop || 'px'};` : ''}
             ${backToTopPosition === 'top-right' ? `top: ${backToTopOffsetY?.Desktop || 20}${backToTopOffsetYUnits?.Desktop || 'px'}; right: ${backToTopOffsetX?.Desktop || 20}${backToTopOffsetXUnits?.Desktop || 'px'};` : ''}
             ${backToTopPosition === 'top-left' ? `top: ${backToTopOffsetY?.Desktop || 20}${backToTopOffsetYUnits?.Desktop || 'px'}; left: ${backToTopOffsetX?.Desktop || 20}${backToTopOffsetXUnits?.Desktop || 'px'};` : ''}
        }

        .${blockID} .fb-back-to-top-wrapper:hover {
           ${backToTopBoxShadowHoverCssValue ? `box-shadow: ${backToTopBoxShadowHoverCssValue};` : ''}
           ${backToTopBorderHoverColor ? `border-color: ${backToTopBorderHoverColor};` : ''}
            ${backToTopHoverZoomEffect?.Desktop !== '' && backToTopHoverZoomEffect?.Desktop !== undefined && backToTopHoverZoomEffect?.Desktop !== null
            ? `transform: scale(${backToTopHoverZoomEffect.Desktop}) !important;`
            : ''}
            ${backToTopHoverBackgroundType === 'gradient' ? `
                ${backToTopHoverCustomGradientSwitcher && backToTopHoverCustomGradientInputValue ? `background: ${backToTopHoverCustomGradientInputValue};` : `background: ${backToTopHoverGradientColor};`}
            `: `
                ${backToTopHoverClassicColor ? `background: ${backToTopHoverClassicColor};` : ''}
            `}
        }

        .${blockID} .fb-back-to-top-wrapper:active {
            ${backToTopClickScaleEffect?.Desktop ? `transform: scale(${backToTopClickScaleEffect.Desktop}) !important;` : ''}
            transition: transform 0.1s ease;
        }

        .${blockID} .fb-back-to-top-content-wrapper span {
            ${backToTopBtnTextColor ? `color: ${backToTopBtnTextColor};` : ""}
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

        .${blockID} .fb-back-to-top-wrapper:hover .fb-back-to-top-content-wrapper span {
            ${backToTopBtnTextHoverColor ? `color: ${backToTopBtnTextHoverColor};` : ""}   
        }

        .${blockID} .fb-back-to-top-content-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            ${backToTopContentDirection === 'column' ? 'flex-direction: column;' : (backToTopIconImagePosition === 'right' ? 'flex-direction: row-reverse;' : 'flex-direction: row;')}
            ${backToTopTextIconSpacing?.Desktop ? `gap: ${backToTopTextIconSpacing?.Desktop}${backToTopTextIconSpacingUnits?.Desktop || 'px'};` : ''}
        }

        .${blockID} .fb-back-to-top-wrapper .fb-back-to-top-image-wrapper i,
        .${blockID} .fb-back-to-top-wrapper .fb-back-to-top-image-wrapper svg,
        .${blockID} .fb-back-to-top-wrapper .fb-back-to-top-image-wrapper img {
            ${backToTopIconImageSize?.Desktop ? `font-size: ${backToTopIconImageSize?.Desktop}${backToTopIconImageSizeUnits?.Desktop || 'px'};` : ''}
            ${backToTopIconImageSize?.Desktop ? `width: ${backToTopIconImageSize?.Desktop}${backToTopIconImageSizeUnits?.Desktop || 'px'};` : ''}
            ${backToTopIconImageSize?.Desktop ? `height: ${backToTopIconImageSize?.Desktop}${backToTopIconImageSizeUnits?.Desktop || 'px'};` : ''}
            ${backToTopIconColor ? `color: ${backToTopIconColor};` : ""}
            ${backToTopIconColor ? `fill: ${backToTopIconColor};` : ""}
            ${backToTopIconColor ? `stroke: ${backToTopIconColor};` : ""}
        }

        .${blockID} .fb-back-to-top-wrapper:hover .fb-back-to-top-image-wrapper i,
        .${blockID} .fb-back-to-top-wrapper:hover .fb-back-to-top-image-wrapper svg {
            ${backToTopIconHoverColor ? `fill: ${backToTopIconHoverColor};` : ""} 
            ${backToTopIconHoverColor ? `color: ${backToTopIconHoverColor};` : ""}
            ${backToTopIconHoverColor ? `stroke: ${backToTopIconHoverColor};` : ""}
        }

        @media (max-width: 1024px) {
            .${blockID} .fb-back-to-top-wrapper {
               ${backToTopPaddingTabletWidth && backToTopPaddingTablet?.top ? `padding: ${backToTopPaddingTabletWidth};` : ''}
               ${backToTopBorderTabletWidth && backToTopBorderTablet?.top ? `border-width: ${backToTopBorderTabletWidth};` : ''}
               ${backToTopBorderRadiusTabletWidth && backToTopBorderRadiusTablet?.top ? `border-radius: ${backToTopBorderRadiusTabletWidth};` : ''}

                ${backToTopPosition === 'bottom-right' ? `bottom: ${backToTopOffsetY?.Tablet || backToTopOffsetY?.Desktop || 20}${backToTopOffsetYUnits?.Tablet || backToTopOffsetYUnits?.Desktop || 'px'}; right: ${backToTopOffsetX?.Tablet || backToTopOffsetX?.Desktop || 20}${backToTopOffsetXUnits?.Tablet || backToTopOffsetXUnits?.Desktop || 'px'};` : ''}
                ${backToTopPosition === 'bottom-left' ? `bottom: ${backToTopOffsetY?.Tablet || backToTopOffsetY?.Desktop || 20}${backToTopOffsetYUnits?.Tablet || backToTopOffsetYUnits?.Desktop || 'px'}; left: ${backToTopOffsetX?.Tablet || backToTopOffsetX?.Desktop || 20}${backToTopOffsetXUnits?.Tablet || backToTopOffsetXUnits?.Desktop || 'px'};` : ''}
                ${backToTopPosition === 'top-right' ? `top: ${backToTopOffsetY?.Tablet || backToTopOffsetY?.Desktop || 20}${backToTopOffsetYUnits?.Tablet || backToTopOffsetYUnits?.Desktop || 'px'}; right: ${backToTopOffsetX?.Tablet || backToTopOffsetX?.Desktop || 20}${backToTopOffsetXUnits?.Tablet || backToTopOffsetXUnits?.Desktop || 'px'};` : ''}
                ${backToTopPosition === 'top-left' ? `top: ${backToTopOffsetY?.Tablet || backToTopOffsetY?.Desktop || 20}${backToTopOffsetYUnits?.Tablet || backToTopOffsetYUnits?.Desktop || 'px'}; left: ${backToTopOffsetX?.Tablet || backToTopOffsetX?.Desktop || 20}${backToTopOffsetXUnits?.Tablet || backToTopOffsetXUnits?.Desktop || 'px'};` : ''}
            }
            .${blockID} .fb-back-to-top-wrapper:hover {
                ${backToTopHoverZoomEffect?.Tablet ? `transform: scale(${backToTopHoverZoomEffect.Tablet}) !important;` : ''}
            }
            .${blockID} .fb-back-to-top-wrapper:active {
                ${backToTopClickScaleEffect?.Tablet ? `transform: scale(${backToTopClickScaleEffect.Tablet}) !important;` : ''}
            }
            .${blockID} .fb-back-to-top-content-wrapper {
                ${backToTopTextIconSpacing?.Tablet ? `gap: ${backToTopTextIconSpacing?.Tablet}${backToTopTextIconSpacingUnits?.Tablet || 'px'};` : ''}
            }
            .${blockID} .fb-back-to-top-content-wrapper .fb-back-to-top-image-wrapper i,
            .${blockID} .fb-back-to-top-content-wrapper .fb-back-to-top-image-wrapper svg,
            .${blockID} .fb-back-to-top-content-wrapper .fb-back-to-top-image-wrapper img {
                ${backToTopIconImageSize?.Tablet ? `font-size: ${backToTopIconImageSize?.Tablet}${backToTopIconImageSizeUnits?.Tablet || 'px'};` : ''}
                ${backToTopIconImageSize?.Tablet ? `width: ${backToTopIconImageSize?.Tablet}${backToTopIconImageSizeUnits?.Tablet || 'px'};` : ''}
                ${backToTopIconImageSize?.Tablet ? `height: ${backToTopIconImageSize?.Tablet}${backToTopIconImageSizeUnits?.Tablet || 'px'};` : ''}
            }
        }

        @media (max-width: 767px) {
            .${blockID} .fb-back-to-top-wrapper {
               ${backToTopPaddingMobileWidth && backToTopPaddingMobile?.top ? `padding: ${backToTopPaddingMobileWidth};` : ''}
               ${backToTopBorderMobileWidth && backToTopBorderMobile?.top ? `border-width: ${backToTopBorderMobileWidth};` : ''}
               ${backToTopBorderRadiusMobileWidth && backToTopBorderRadiusMobile?.top ? `border-radius: ${backToTopBorderRadiusMobileWidth};` : ''}

                ${backToTopPosition === 'bottom-right' ? `bottom: ${backToTopOffsetY?.Mobile || backToTopOffsetY?.Tablet || backToTopOffsetY?.Desktop || 20}${backToTopOffsetYUnits?.Mobile || backToTopOffsetYUnits?.Tablet || backToTopOffsetYUnits?.Desktop || 'px'}; right: ${backToTopOffsetX?.Mobile || backToTopOffsetX?.Tablet || backToTopOffsetX?.Desktop || 20}${backToTopOffsetXUnits?.Mobile || backToTopOffsetXUnits?.Tablet || backToTopOffsetXUnits?.Desktop || 'px'};` : ''}
                ${backToTopPosition === 'bottom-left' ? `bottom: ${backToTopOffsetY?.Mobile || backToTopOffsetY?.Tablet || backToTopOffsetY?.Desktop || 20}${backToTopOffsetYUnits?.Mobile || backToTopOffsetYUnits?.Tablet || backToTopOffsetYUnits?.Desktop || 'px'}; left: ${backToTopOffsetX?.Mobile || backToTopOffsetX?.Tablet || backToTopOffsetX?.Desktop || 20}${backToTopOffsetXUnits?.Mobile || backToTopOffsetXUnits?.Tablet || backToTopOffsetXUnits?.Desktop || 'px'};` : ''}
                ${backToTopPosition === 'top-right' ? `top: ${backToTopOffsetY?.Mobile || backToTopOffsetY?.Tablet || backToTopOffsetY?.Desktop || 20}${backToTopOffsetYUnits?.Mobile || backToTopOffsetYUnits?.Tablet || backToTopOffsetYUnits?.Desktop || 'px'}; right: ${backToTopOffsetX?.Mobile || backToTopOffsetX?.Tablet || backToTopOffsetX?.Desktop || 20}${backToTopOffsetXUnits?.Mobile || backToTopOffsetXUnits?.Tablet || backToTopOffsetXUnits?.Desktop || 'px'};` : ''}
                ${backToTopPosition === 'top-left' ? `top: ${backToTopOffsetY?.Mobile || backToTopOffsetY?.Tablet || backToTopOffsetY?.Desktop || 20}${backToTopOffsetYUnits?.Mobile || backToTopOffsetYUnits?.Tablet || backToTopOffsetYUnits?.Desktop || 'px'}; left: ${backToTopOffsetX?.Mobile || backToTopOffsetX?.Tablet || backToTopOffsetX?.Desktop || 20}${backToTopOffsetXUnits?.Mobile || backToTopOffsetXUnits?.Tablet || backToTopOffsetXUnits?.Desktop || 'px'};` : ''}
            }
            .${blockID} .fb-back-to-top-wrapper:hover {
                ${backToTopHoverZoomEffect?.Mobile ? `transform: scale(${backToTopHoverZoomEffect.Mobile}) !important;` : ''}
            }
            .${blockID} .fb-back-to-top-wrapper:active {
                ${backToTopClickScaleEffect?.Mobile ? `transform: scale(${backToTopClickScaleEffect.Mobile}) !important;` : ''}
            }
            .${blockID} .fb-back-to-top-content-wrapper {
                ${backToTopTextIconSpacing?.Mobile ? `gap: ${backToTopTextIconSpacing?.Mobile}${backToTopTextIconSpacingUnits?.Mobile || 'px'};` : ''}
            }
            .${blockID} .fb-back-to-top-content-wrapper .fb-back-to-top-image-wrapper i,
            .${blockID} .fb-back-to-top-content-wrapper .fb-back-to-top-image-wrapper svg,
            .${blockID} .fb-back-to-top-content-wrapper .fb-back-to-top-image-wrapper img {
                ${backToTopIconImageSize?.Mobile ? `font-size: ${backToTopIconImageSize?.Mobile}${backToTopIconImageSizeUnits?.Mobile || 'px'};` : ''}
                ${backToTopIconImageSize?.Mobile ? `width: ${backToTopIconImageSize?.Mobile}${backToTopIconImageSizeUnits?.Mobile || 'px'};` : ''}
                ${backToTopIconImageSize?.Mobile ? `height: ${backToTopIconImageSize?.Mobile}${backToTopIconImageSizeUnits?.Mobile || 'px'};` : ''}
            }
        }
    `;

    const customCss = getCustomCss(backToTopCustomCSS, `.${blockID}`);
    return `${backToTopBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default backToTopStyle;
