/**
 * Post Title Block-Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes-Block attributes
 * @returns {string} CSS string
 */
const generatePostTitleStyle = (attributes) => {

    const {
        blockID,
        isLink,
        rel,
        linkTarget,

        /** General */
        postTitleTag,
        titleAlignment,
        titleExcerptLength,

        /** Style Attributes */
        postTitleGlobalTypoSwitcher,
        postTitleGlobalTypographyData,
        postTitleGlobalTypoType,
        postTitleGlobalTypoOption,
        postTitleFontFamily,
        postTitleFontSize,
        postTitleFontSizeUnits,
        postTitleFontWeight,
        postTitleFontStyle,
        postTitleTextTransform,
        postTitleTextDecoration,
        postTitleLetterSpacing,
        postTitleLetterSpacingUnits,
        postTitleLineHeight,
        postTitleLineHeightUnits,

        postTitleColorSwitcher,
        postTitleColor,
        postTitleHoverColor,

        titleTextShadowValues,
        titleTextShadowCssValue,
        titleTextStroke,
        titleTextStrokeColorSwitcher,
        titleTextStrokeColor,
        titleTextStrokeHoverColor,

        /** Start Global Setting */
        postTitleGlobalZIndex,
        postTitleOverflow,

        postTitleDesktopSwitcher,
        postTitleTabletSwitcher,
        postTitleMobileSwitcher,

        wrapperId,
        wrapperClass,
        postTitleGlobalCustomCSS,

        /** Position */
        postTitlePositionType,
        postTitleHZOrientationType,
        postTitleVROrientationType,
        postTitleHZLeftOffset,
        postTitleHZLeftOffsetUnits,
        postTitleHZRightOffset,
        postTitleHZRightOffsetUnits,
        postTitleVRTopOffset,
        postTitleVRTopOffsetUnits,
        postTitleVRBottomOffset,
        postTitleVRBottomOffsetUnits,

        postGlobalPaddingUnits,
        postGlobalPaddingDesktop,
        postGlobalPaddingTablet,
        postGlobalPaddingMobile,
        postGlobalPaddingLink,

        postGlobalMarginUnits,
        postGlobalMarginDesktop,
        postGlobalMarginTablet,
        postGlobalMarginMobile,
        postGlobalMarginLink,

        postGlobalBgColorSwitcher,
        postGlobalNormalBackgroundType,
        postGlobalNormalClassicColor,
        postGlobalNormalGradientColor,
        postGlobalNormalCustomGradientSwitcher,
        postGlobalNormalCustomGradientInputValue,

        postGlobalHoverBackgroundType,
        postGlobalHoverClassicColor,
        postGlobalHoverGradientColor,
        postGlobalHoverCustomGradientSwitcher,
        postGlobalHoverCustomGradientInputValue,

        postGlobalBorder,
        postGlobalBorderColorSwitcher,
        postGlobalBorderColor,
        postGlobalBorderHoverColor,

        postGlobalBorderUnits,
        postGlobalBorderDesktop,
        postGlobalBorderTablet,
        postGlobalBorderMobile,
        postGlobalBorderLink,

        postGlobalBorderRadiusUnits,
        postGlobalBorderRadiusDesktop,
        postGlobalBorderRadiusTablet,
        postGlobalBorderRadiusMobile,
        postGlobalBorderRadiusLink,

        postGlobalBoxShadowSwitcher,
        postGlobalBoxShadowValues,
        postGlobalBoxShadowCssValue,
        postGlobalBoxShadowHoverValues,
        postGlobalBoxShadowHoverCssValue,

        /** End Global Setting */
    } = attributes;

    const postGlobalDesktopPaddingWidth = `${postGlobalPaddingDesktop.top}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.right}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.bottom}${postGlobalPaddingUnits.Desktop} ${postGlobalPaddingDesktop.left}${postGlobalPaddingUnits.Desktop}`;
    const postGlobalTabletPaddingWidth = `${postGlobalPaddingTablet.top}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.right}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.bottom}${postGlobalPaddingUnits.Tablet} ${postGlobalPaddingTablet.left}${postGlobalPaddingUnits.Tablet}`;
    const postGlobalMobilePaddingWidth = `${postGlobalPaddingMobile.top}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.right}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.bottom}${postGlobalPaddingUnits.Mobile} ${postGlobalPaddingMobile.left}${postGlobalPaddingUnits.Mobile}`;

    const postGlobalDesktopMarginWidth = `${postGlobalMarginDesktop.top}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.right}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.bottom}${postGlobalMarginUnits.Desktop} ${postGlobalMarginDesktop.left}${postGlobalMarginUnits.Desktop}`;
    const postGlobalTabletMarginWidth = `${postGlobalMarginTablet.top}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.right}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.bottom}${postGlobalMarginUnits.Tablet} ${postGlobalMarginTablet.left}${postGlobalMarginUnits.Tabelet}`;
    const postGlobalMobileMarginWidth = `${postGlobalMarginMobile.top}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.right}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.bottom}${postGlobalMarginUnits.Mobile} ${postGlobalMarginMobile.left}${postGlobalMarginUnits.Mobile}`;

    const postGlobalDesktopBorderWidth = `${postGlobalBorderDesktop.top}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.right}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.bottom}${postGlobalBorderUnits.Desktop} ${postGlobalBorderDesktop.left}${postGlobalBorderUnits.Desktop}`;
    const postGlobalTabletBorderWidth = `${postGlobalBorderTablet.top}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.right}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.bottom}${postGlobalBorderUnits.Tablet} ${postGlobalBorderTablet.left}${postGlobalBorderUnits.Tablet}`;
    const postGlobalMobileBorderWidth = `${postGlobalBorderMobile.top}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.right}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.bottom}${postGlobalBorderUnits.Mobile} ${postGlobalBorderMobile.left}${postGlobalBorderUnits.Mobile}`;

     const postGlobalDesktopBorderRadiusWidth = `${postGlobalBorderRadiusDesktop.top}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.right}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.bottom}${postGlobalBorderRadiusUnits.Desktop} ${postGlobalBorderRadiusDesktop.left}${postGlobalBorderRadiusUnits.Desktop}`;
    const postGlobalTabletBorderRadiusWidth = `${postGlobalBorderRadiusTablet.top}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.right}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.bottom}${postGlobalBorderRadiusUnits.Tablet} ${postGlobalBorderRadiusTablet.left}${postGlobalBorderRadiusUnits.Tablet}`;
    const postGlobalMobileBorderRadiusWidth = `${postGlobalBorderRadiusMobile.top}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.right}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.bottom}${postGlobalBorderRadiusUnits.Mobile} ${postGlobalBorderRadiusMobile.left}${postGlobalBorderRadiusUnits.Mobile}`;

    // Post Title Block Style
    const postTitleBlockStyle = `
        .${blockID}.fb-post-title-block{
            display: flex;
            ${titleAlignment.Desktop
                ? `justify-content: ${titleAlignment.Desktop};`
                : ""
            }
        }

        .${blockID} .fb-post-title {
            margin-block-start: 0;
            margin-block-end: 0;
        }

        ${isLink ?
                `.${blockID} .fb-post-title .fb-post-title-link:focus{
                color: inherit;
                box-shadow: none;
                outline: inherit;
            }`
                : ""
            }

        .${blockID} .fb-post-title,
        .${blockID} .fb-post-title .fb-post-title-link{
            ${postTitleColor ? `color: ${postTitleColor};` : ""}
            ${postTitleGlobalTypoSwitcher.fontFamily === true &&
                postTitleGlobalTypographyData.fontFamily
                ? `font-family: ${postTitleGlobalTypographyData.fontFamily};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.fontSize === true &&
                postTitleGlobalTypographyData.fontSize
                ? `font-size: ${postTitleGlobalTypographyData.fontSize};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.fontWeight === true &&
                postTitleGlobalTypographyData.fontWeight
                ? `font-weight: ${postTitleGlobalTypographyData.fontWeight};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.fontStyle === true &&
                postTitleGlobalTypographyData.fontStyle
                ? `font-style: ${postTitleGlobalTypographyData.fontStyle};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.textTransform === true &&
                postTitleGlobalTypographyData.textTransform
                ? `text-transform: ${postTitleGlobalTypographyData.textTransform};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.textDecoration === true &&
                postTitleGlobalTypographyData.textDecoration
                ? `text-decoration: ${postTitleGlobalTypographyData.textDecoration};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.letterSpacing === true &&
                postTitleGlobalTypographyData.letterSpacing
                ? `letter-spacing: ${postTitleGlobalTypographyData.letterSpacing};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.lineHeight === true &&
                postTitleGlobalTypographyData.lineHeight
                ? `line-height: ${postTitleGlobalTypographyData.lineHeight};`
                : ""
            }

            ${postTitleGlobalTypoSwitcher.fontFamily === false &&
                postTitleFontFamily
                ? `font-family: ${postTitleFontFamily};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.fontSize === false &&
                postTitleFontSize.Desktop
                ? `font-size: ${postTitleFontSize.Desktop}${postTitleFontSizeUnits.Desktop};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.fontWeight === false &&
                postTitleFontWeight
                ? `font-weight: ${postTitleFontWeight};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.fontStyle === false &&
                postTitleFontStyle
                ? `font-style: ${postTitleFontStyle};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.textTransform === false &&
                postTitleTextTransform
                ? `text-transform: ${postTitleTextTransform};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.textDecoration === false &&
                postTitleTextDecoration
                ? `text-decoration: ${postTitleTextDecoration};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.letterSpacing === false &&
                postTitleLetterSpacing.Desktop
                ? `letter-spacing: ${postTitleLetterSpacing.Desktop}${postTitleLetterSpacingUnits.Desktop};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.lineHeight === false &&
                postTitleLineHeight.Desktop
                ? `line-height: ${postTitleLineHeight.Desktop}${postTitleLineHeightUnits.Desktop};`
                : ""
            }
            ${titleTextShadowCssValue
                ? `text-shadow: ${titleTextShadowCssValue};`
                : ""
            }
            ${titleTextStroke
                ? `
                ${titleTextStroke.Desktop
                    ? `-webkit-text-stroke: ${titleTextStroke.Desktop}px ${titleTextStrokeColor};`
                    : ""
                }
                ${titleTextStroke.Desktop
                    ? `text-stroke: ${titleTextStroke.Desktop}px ${titleTextStrokeColor};` : ""
                } 
                ` : ""
            }
            transition: all .3s ease;
        }

        .${blockID} .fb-post-title:hover,
        .${blockID} .fb-post-title .fb-post-title-link:hover{
            ${postTitleHoverColor
                ? `color: ${postTitleHoverColor};`
                : "color: inherit;"
            }

            ${titleTextStrokeHoverColor
                ? `
                ${titleTextStroke.Desktop
                    ? `-webkit-text-stroke: ${titleTextStroke.Desktop}px ${titleTextStrokeHoverColor};`
                    : ""
                }
                ${titleTextStroke.Desktop
                    ? `text-stroke: ${titleTextStroke.Desktop}px ${titleTextStrokeHoverColor};`
                    : ""
                }
                ` : ""
            }
        }

        /** Advance Control Global Style - Desktop */
        .${blockID}.fb-post-title-block{
            margin-block-start: 0;

            ${postTitlePositionType === "default"
                ? `position: relative;`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative"
                ? `width: 100%;`
                : ""
            }
            ${postTitlePositionType !== "default"
                ? `position: ${postTitlePositionType};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleHZOrientationType === "left" &&
                postTitleHZLeftOffset.Desktop !== undefined
                ? `left: ${postTitleHZLeftOffset.Desktop}${postTitleHZLeftOffsetUnits.Desktop};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleHZOrientationType === "right" &&
                postTitleHZRightOffset.Desktop !== undefined
                ? `right: ${postTitleHZRightOffset.Desktop}${postTitleHZRightOffsetUnits.Desktop};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleVROrientationType === "top" &&
                postTitleVRTopOffset.Desktop !== undefined
                ? `top: ${postTitleVRTopOffset.Desktop}${postTitleVRTopOffsetUnits.Desktop};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleVROrientationType === "bottom" &&
                postTitleVRBottomOffset.Desktop !== undefined
                ? `bottom: ${postTitleVRBottomOffset.Desktop}${postTitleVRBottomOffsetUnits.Desktop};`
                : ""
            }
            ${postTitleGlobalZIndex.Desktop
                ? `z-index: ${postTitleGlobalZIndex.Desktop};`
                : ""
            }
            ${postTitleOverflow !== "default"
                ? `overflow: ${postTitleOverflow};`
                : ""
            }
            transition: all 0.3s ease;
        }

        .${blockID}.fb-post-title-block{
            ${postGlobalDesktopPaddingWidth && postGlobalPaddingDesktop.top
                ? `padding: ${postGlobalDesktopPaddingWidth};`
                : ""
            }
            ${postGlobalDesktopMarginWidth && postGlobalMarginDesktop.top
                ? `margin: ${postGlobalDesktopMarginWidth};`
                : ""
            }

                ${postGlobalBorder ? `border: ${postGlobalBorder};` : ""} 
            ${postGlobalDesktopBorderWidth && postGlobalBorderDesktop.top
                ? `border-width: ${postGlobalDesktopBorderWidth};`
                : ""
            }
            ${postGlobalDesktopBorderRadiusWidth &&
                postGlobalBorderRadiusDesktop.top
                ? `border-radius: ${postGlobalDesktopBorderRadiusWidth}!important;`
                : ""
            }
            ${postGlobalBorderColor
                ? `border-color: ${postGlobalBorderColor};`
                : ""
            }
            ${postGlobalBoxShadowCssValue
                ? `box-shadow: ${postGlobalBoxShadowCssValue} !important;`
                : ""
            }
            ${postGlobalNormalBackgroundType === "gradient"
                ?
                `${postGlobalNormalCustomGradientSwitcher &&
                    postGlobalNormalCustomGradientInputValue
                    ? `background: ${postGlobalNormalCustomGradientInputValue};`
                    : `background: ${postGlobalNormalGradientColor};`
                }`
                :
                `${postGlobalNormalClassicColor
                    ? `background: ${postGlobalNormalClassicColor};`
                    : ""
                }`
            }
        }

        .${blockID}.fb-post-title-block:hover {
            ${postGlobalHoverBackgroundType === "gradient"
                ?
                `${postGlobalHoverCustomGradientSwitcher &&
                    postGlobalHoverCustomGradientInputValue
                    ? `background: ${postGlobalHoverCustomGradientInputValue};`
                    : `background: ${postGlobalHoverGradientColor};`
                }`
                :
                `${postGlobalHoverClassicColor
                    ? `background: ${postGlobalHoverClassicColor};`
                    : ""
                }
                ${postGlobalBorderHoverColor
                    ? `border-color: ${postGlobalBorderHoverColor};`
                    : ""
                }
                ${postGlobalBoxShadowHoverCssValue
                    ? `box-shadow: ${postGlobalBoxShadowHoverCssValue}!important;`
                    : ""
                }`
            }
        }

    /* Responsive styles for tablet ====================================== */
    @media only screen and (max-width: 1024px) {
        .${blockID}.fb-post-title-block {
            ${titleAlignment.Tablet
                ? `justify-content: ${titleAlignment.Tablet};`
                : ""
            }
        }

        .${blockID} .fb-post-title {
            ${postTitleGlobalTypoSwitcher.fontSize ===
                false &&
                postTitleFontSize.Tablet
                ? `font-size: ${postTitleFontSize.Tablet}${postTitleFontSizeUnits.Tablet};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.letterSpacing === false &&
                postTitleLetterSpacing.Tablet
                ? `letter-spacing: ${postTitleLetterSpacing.Tablet}${postTitleLetterSpacingUnits.Tablet};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.lineHeight === false &&
                postTitleLineHeight.Tablet
                ? `line-height: ${postTitleLineHeight.Tablet}${postTitleLineHeightUnits.Tablet};`
                : ""
            }
            ${titleTextStroke
                ?
                `${titleTextStroke.Tablet
                    ? `-webkit-text-stroke: ${titleTextStroke.Tablet}px ${titleTextStrokeColor};`
                    : ""
                }
                ${titleTextStroke.Tablet
                    ? `text-stroke: ${titleTextStroke.Tablet}px ${titleTextStrokeColor};`
                    : ""
                }`
                : ""
            }
        }

        .${blockID} .fb-post-title:hover{
            ${titleTextStrokeHoverColor
                ?
                `${titleTextStroke.Tablet
                    ? `-webkit-text-stroke: ${titleTextStroke.Tablet}px ${titleTextStrokeHoverColor};`
                    : ""
                }
                ${titleTextStroke.Tablet
                    ? `text-stroke: ${titleTextStroke.Tablet}px ${titleTextStrokeHoverColor};`
                    : ""
                }`
                : ""
            }
        }

        /** Advance Control Global Style - Tablet */
        .${blockID}.fb-post-title-block{
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleHZOrientationType === "left" &&
                postTitleHZLeftOffset.Tablet !== undefined
                ? `left: ${postTitleHZLeftOffset.Tablet}${postTitleHZLeftOffsetUnits.Tablet};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleHZOrientationType === "right" &&
                postTitleHZRightOffset.Tablet !== undefined
                ? `right: ${postTitleHZRightOffset.Tablet}${postTitleHZRightOffsetUnits.Tablet};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleVROrientationType === "top" &&
                postTitleVRTopOffset.Tablet !== undefined
                ? `top: ${postTitleVRTopOffset.Tablet}${postTitleVRTopOffsetUnits.Tablet};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleVROrientationType === "bottom" &&
                postTitleVRBottomOffset.Tablet !== undefined
                ? `bottom: ${postTitleVRBottomOffset.Tablet}${postTitleVRBottomOffsetUnits.Tablet};`
                : ""
            }
            ${postTitleGlobalZIndex.Tablet
                ? `z-index: ${postTitleGlobalZIndex.Tablet};`
                : ""
            }

        }

        .${blockID}.fb-post-title-block {
            ${postGlobalTabletPaddingWidth && postGlobalPaddingTablet.top
                ? `padding: ${postGlobalTabletPaddingWidth};`
                : ""
            }
            ${postGlobalTabletMarginWidth && postGlobalMarginTablet.top
                ? `margin: ${postGlobalTabletMarginWidth};`
                : ""
            }
            ${postGlobalTabletBorderWidth && postGlobalBorderTablet.top
                ? `border-width: ${postGlobalTabletBorderWidth};`
                : ""
            }
            ${postGlobalTabletBorderRadiusWidth &&
                postGlobalBorderRadiusTablet.top
                ? `border-radius: ${postGlobalTabletBorderRadiusWidth}!important;`
                : ""
            }
        }

    } /* End Responsive Style For Tablet */

    /* Responsive styles for mobile ====================================== */
    @media (max-width: 767px) {
        .${blockID}.fb-post-title-block{
            ${titleAlignment.Mobile
                ? `justify-content: ${titleAlignment.Mobile};`
                : ""
            }            
        }

        .${blockID} .fb-post-title,
        .${blockID} .fb-post-title .fb-post-title-link {
            ${postTitleGlobalTypoSwitcher.fontSize ===
                false && postTitleFontSize.Mobile
                ? `font-size: ${postTitleFontSize.Mobile}${postTitleFontSizeUnits.Mobile};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.letterSpacing === false &&
                postTitleLetterSpacing.Mobile
                ? `letter-spacing: ${postTitleLetterSpacing.Mobile}${postTitleLetterSpacingUnits.Mobile};`
                : ""
            }
            ${postTitleGlobalTypoSwitcher.lineHeight === false &&
                postTitleLineHeight.Mobile
                ? `line-height: ${postTitleLineHeight.Mobile}${postTitleLineHeightUnits.Mobile};`
                : ""
            }
            ${titleTextStroke
                ?
                `${titleTextStroke.Mobile
                    ? `-webkit-text-stroke: ${titleTextStroke.Mobile}px ${titleTextStrokeColor};`
                    : ""
                }
                ${titleTextStroke.Mobile
                    ? `text-stroke: ${titleTextStroke.Mobile}px ${titleTextStrokeColor};`
                    : ""
                }`
                : ""
            }
        }

        .${blockID} .fb-post-title:hover,
        .${blockID} .fb-post-title .fb-post-title-link:hover{
            ${titleTextStrokeHoverColor
                ?
                `${titleTextStroke.Mobile
                    ? `-webkit-text-stroke: ${titleTextStroke.Mobile}px ${titleTextStrokeHoverColor};`
                    : ""
                }
                ${titleTextStroke.Mobile
                    ? `text-stroke: ${titleTextStroke.Mobile}px ${titleTextStrokeHoverColor};`
                    : ""
                }`
                : ""
            }
        }

        /** Advance Control Global Style - Mobile */
        .${blockID}.fb-post-title-block{
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleHZOrientationType === "left" &&
                postTitleHZLeftOffset.Mobile !== undefined
                ? `left: ${postTitleHZLeftOffset.Mobile}${postTitleHZLeftOffsetUnits.Mobile};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleHZOrientationType === "right" &&
                postTitleHZRightOffset.Mobile !== undefined
                ? `right: ${postTitleHZRightOffset.Mobile}${postTitleHZRightOffsetUnits.Mobile};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleVROrientationType === "top" &&
                postTitleVRTopOffset.Mobile !== undefined
                ? `top: ${postTitleVRTopOffset.Mobile}${postTitleVRTopOffsetUnits.Mobile};`
                : ""
            }
            ${postTitlePositionType !== "default" &&
                postTitlePositionType !== "relative" &&
                postTitleVROrientationType === "bottom" &&
                postTitleVRBottomOffset.Mobile !== undefined
                ? `bottom: ${postTitleVRBottomOffset.Mobile}${postTitleVRBottomOffsetUnits.Mobile};`
                : ""
            } 
            ${postTitleGlobalZIndex.Mobile
                ? `z-index: ${postTitleGlobalZIndex.Mobile};`
                : ""
            }

        }

        .${blockID}.fb-post-title-block {    
            ${postGlobalMobilePaddingWidth && postGlobalPaddingMobile.top
                ? `padding: ${postGlobalMobilePaddingWidth}`
                : ""
            }
            ${postGlobalMobileMarginWidth && postGlobalMarginMobile.top
                ? `margin: ${postGlobalMobileMarginWidth}`
                : ""
            }
            ${postGlobalMobileBorderWidth && postGlobalBorderMobile.top
                ? `border-width: ${postGlobalMobileBorderWidth};`
                : ""
            }
            ${postGlobalMobileBorderRadiusWidth &&
                postGlobalBorderRadiusMobile.top
                ? `border-radius: ${postGlobalMobileBorderRadiusWidth}!important;`
                : ""
            }
        }
        } /* End Responsive Style For Mobile */
    `;

    const customCss = getCustomCss(postTitleGlobalCustomCSS, `.${blockID} `);
    return `${postTitleBlockStyle} ${customCss} `.replace(/\s+/g, ' ').trim();
}
export default generatePostTitleStyle;