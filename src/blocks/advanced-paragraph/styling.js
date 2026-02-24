/**
 * Advanced Advanced Paragraph Block - Style Generation
 * Returns Dynamic Generated CSS
 */
import getCustomCss from '@Utils/getCustomCss';
import hasLinkInRichText from "@Utils/hasLinkInRichText";



/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateAdvancedParagraphStyle = (attributes) => {
    const {
        blockID,
        paragraphText,
        paragraphAlignment,
        dropCap,
        paragraphColumnCount,
        paragraphColumnGap,
        paragraphColumnGapUnits,

        /** Start Paragraph Style */
        paragraphGlobalTypoSwitcher,
        paragraphGlobalTypographyData,
        paragraphGlobalTypoType,
        paragraphGlobalTypoOption,
        paragraphFontFamily,
        paragraphFontSize,
        paragraphFontSizeUnits,
        paragraphFontWeight,
        paragraphFontStyle,
        paragraphTextTransform,
        paragraphTextDecoration,
        paragraphLetterSpacing,
        paragraphLineHeight,
        paragraphLetterSpacingUnits,
        paragraphLineHeightUnits,

        paragraphTextShadowValues,
        paragraphTextShadowCssValue,
        paragraphTextStroke,
        paragraphTextStrokeColorSwitcher,
        paragraphTextStrokeColor,
        paragraphTextStrokeHoverColor,

        // start link styling
        linkGlobalTypoSwitcher,
        linkGlobalTypographyData,
        linkGlobalTypoType,
        linkGlobalTypoOption,

        linkFontFamily,
        linkFontSize,
        linkFontSizeUnits,
        linkFontWeight,
        linkFontStyle,
        linkTextTransform,
        linkTextDecoration,
        linkLetterSpacing,
        linkLineHeight,
        linkLetterSpacingUnits,
        linkLineHeightUnits,

        linkColorSwitcher,
        linkColor,
        linkHoverColor,

        linkBgColorSwitcher,
        linkBgColor,
        linkBgColorHover,

        linkPaddingUnits,
        linkDesktopPadding,
        linkTabPadding,
        linkMobilePadding,
        linkPaddingLink,

        linkBorder,
        linkBorderColorSwitcher,
        linkBorderColor,
        linkBorderHoverColor,

        linkBorderUnits,
        linkDesktopBorder,
        linkTabletBorder,
        linkMobileBorder,
        linkBorderLink,

        linkBorderRadiusUnits,
        linkDesktopBorderRadius,
        linkTabBorderRadius,
        linkMobileBorderRadius,
        linkBorderRadiusLink,

        linkBoxShadowValues,
        linkBoxShadowCssValue,

        // start dropcap styling
        dropCapGlobalTypoSwitcher,
        dropCapGlobalTypographyData,
        dropCapGlobalTypoType,
        dropCapGlobalTypoOption,

        dropCapFontFamily,
        dropCapFontSize,
        dropCapFontSizeUnits,
        dropCapFontWeight,
        dropCapFontStyle,
        dropCapTextTransform,
        dropCapTextDecoration,
        dropCapLetterSpacing,
        dropCapLineHeight,
        dropCapLetterSpacingUnits,
        dropCapLineHeightUnits,

        dropCapTextShadowValues,
        dropCapTextShadowCssValue,

        dropCapColorSwitcher,
        dropCapColor,
        dropCapHoverColor,

        dropCapBgColorSwitcher,
        dropCapBgColor,
        dropCapBgColorHover,

        dropCapPaddingUnits,
        dropCapDesktopPadding,
        dropCapTabPadding,
        dropCapMobilePadding,
        dropCapPaddingLink,

        dropCapMarginUnits,
        dropCapDesktopMargin,
        dropCapTabMargin,
        dropCapMobileMargin,
        dropCapMarginLink,

        dropCapBorder,
        dropCapBorderColorSwitcher,
        dropCapBorderColor,
        dropCapBorderHoverColor,

        dropCapBorderUnits,
        dropCapDesktopBorder,
        dropCapTabletBorder,
        dropCapMobileBorder,
        dropCapBorderLink,

        dropCapBorderRadiusUnits,
        dropCapDesktopBorderRadius,
        dropCapTabBorderRadius,
        dropCapMobileBorderRadius,
        dropCapBorderRadiusLink,

        // end dropcap style

        paragraphColorSwitcher,
        paragraphColor,
        paragraphHoverColor,

        /** Start Global Setting */
        paragraphGlobalZIndex,
        advancedParagraphOverflow,
        paragraphGlobalWraperID,
        paragraphGlobalWraperClass,

        paragraphGlobalPaddingUnits,
        paragraphGlobalPaddingDesktop,
        paragraphGlobalPaddingTablet,
        paragraphGlobalPaddingMobile,
        paragraphGlobalPaddingLink,
        paragraphGlobalMarginUnits,

        paragraphGlobalMarginDesktop,
        paragraphGlobalMarginTablet,
        paragraphGlobalMarginMobile,
        paragraphGlobalMarginLink,

        paragraphGlobalBgColorSwitcher,
        paragraphGlobalBgColor,
        paragraphGlobalBgHoverColor,

        paragraphGlobalBorder,
        paragraphGlobalBorderColorSwitcher,
        paragraphGlobalBorderColor,
        paragraphGlobalBorderHoverColor,
        paragraphGlobalBorderUnits,
        paragraphGlobalBorderDesktop,
        paragraphGlobalBorderTablet,
        paragraphGlobalBorderMobile,
        paragraphGlobalBorderLink,

        paragraphGlobalBorderRadiusUnits,
        paragraphGlobalBorderRadiusDesktop,
        paragraphGlobalBorderRadiusTablet,
        paragraphGlobalBorderRadiusMobile,
        paragraphGlobalBorderRadiusLink,

        paragraphGlobalBoxShadowSwitcher,
        paragraphGlobalBoxShadowValues,
        paragraphGlobalBoxShadowCssValue,
        paragraphGlobalBoxShadowHoverValues,
        paragraphGlobalBoxShadowHoverCssValue,

        /** End Global Style */

        advancedParagraphDesktopSwitcher,
        advancedParagraphTabletSwitcher,
        advancedParagraphMobileSwitcher,

        blockStyle,
        advancedParagraphCustomCSS,

        // Position
        advancedParagraphPositionType,
        advancedParagraphHZOrientationType,
        advancedParagraphVROrientationType,
        advancedParagraphHZLeftOffset,
        advancedParagraphHZLeftOffsetUnits,
        advancedParagraphHZRightOffset,
        advancedParagraphHZRightOffsetUnits,
        advancedParagraphVRTopOffset,
        advancedParagraphVRTopOffsetUnits,
        advancedParagraphVRBottomOffset,
        advancedParagraphVRBottomOffsetUnits,
    } = attributes;

    const dropCapDesktopPaddingWidth = `${dropCapDesktopPadding.top}${dropCapPaddingUnits.Desktop} ${dropCapDesktopPadding.right}${dropCapPaddingUnits.Desktop} ${dropCapDesktopPadding.bottom}${dropCapPaddingUnits.Desktop} ${dropCapDesktopPadding.left}${dropCapPaddingUnits.Desktop}`;
    const dropCapTabletPaddingWidth = `${dropCapTabPadding.top}${dropCapPaddingUnits.Tablet} ${dropCapTabPadding.right}${dropCapPaddingUnits.Tablet} ${dropCapTabPadding.bottom}${dropCapPaddingUnits.Tablet} ${dropCapTabPadding.left}${dropCapPaddingUnits.Tablet}`;
    const dropCapMobilePaddingWidth = `${dropCapMobilePadding.top}${dropCapPaddingUnits.Mobile} ${dropCapMobilePadding.right}${dropCapPaddingUnits.Mobile} ${dropCapMobilePadding.bottom}${dropCapPaddingUnits.Mobile} ${dropCapMobilePadding.left}${dropCapPaddingUnits.Mobile}`;

    // default margin for dropcap
    const dropCapDesktopMarginWidth = `${dropCapDesktopMargin.top}${dropCapMarginUnits.Desktop} ${dropCapDesktopMargin.right}${dropCapMarginUnits.Desktop} ${dropCapDesktopMargin.bottom}${dropCapMarginUnits.Desktop} ${dropCapDesktopMargin.left}${dropCapMarginUnits.Desktop}`;
    const dropCapTabletMarginWidth = `${dropCapTabMargin.top}${dropCapMarginUnits.Tablet} ${dropCapTabMargin.right}${dropCapMarginUnits.Tablet} ${dropCapTabMargin.bottom}${dropCapMarginUnits.Tablet} ${dropCapTabMargin.left}${dropCapMarginUnits.Tablet}`;
    const dropCapMobileMarginWidth = `${dropCapMobileMargin.top}${dropCapMarginUnits.Mobile}${dropCapMobileMargin.right}${dropCapMarginUnits.Mobile}${dropCapMobileMargin.bottom}${dropCapMarginUnits.Mobile}${dropCapMobileMargin.left}${dropCapMarginUnits.Mobile}`;

    // default borer for dropcap
    const dropCapDesktopBorderWidth = `${dropCapDesktopBorder.top}${dropCapBorderUnits.Desktop} ${dropCapDesktopBorder.right}${dropCapBorderUnits.Desktop} ${dropCapDesktopBorder.bottom}${dropCapBorderUnits.Desktop} ${dropCapDesktopBorder.left}${dropCapBorderUnits.Desktop}`;
    const dropCapTabletBorderWidth = `${dropCapTabletBorder.top}${dropCapBorderUnits.Tablet} ${dropCapTabletBorder.right}${dropCapBorderUnits.Tablet} ${dropCapTabletBorder.bottom}${dropCapBorderUnits.Tablet} ${dropCapTabletBorder.left}${dropCapBorderUnits.Tablet}`;
    const dropCapMobileBorderWidth = `${dropCapMobileBorder.top}${dropCapBorderUnits.Mobile} ${dropCapMobileBorder.right}${dropCapBorderUnits.Mobile} ${dropCapMobileBorder.bottom}${dropCapBorderUnits.Mobile} ${dropCapMobileBorder.left}${dropCapBorderUnits.Mobile}`;

    // default border radius for drop cap
    const dropCapDesktopBorderRadiusWidth = `${dropCapDesktopBorderRadius.top}${dropCapBorderRadiusUnits.Desktop} ${dropCapDesktopBorderRadius.right}${dropCapBorderRadiusUnits.Desktop} ${dropCapDesktopBorderRadius.bottom}${dropCapBorderRadiusUnits.Desktop} ${dropCapDesktopBorderRadius.left}${dropCapBorderRadiusUnits.Desktop}`;
    const dropCapTabletBorderRadiusWidth = `${dropCapTabBorderRadius.top}${dropCapBorderRadiusUnits.Tablet} ${dropCapTabBorderRadius.right}${dropCapBorderRadiusUnits.Tablet} ${dropCapTabBorderRadius.bottom}${dropCapBorderRadiusUnits.Tablet} ${dropCapTabBorderRadius.left}${dropCapBorderRadiusUnits.Tablet}`;
    const dropCapMobileBorderRadiusWidth = `${dropCapMobileBorderRadius.top}${dropCapBorderRadiusUnits.Mobile} ${dropCapMobileBorderRadius.right}${dropCapBorderRadiusUnits.Mobile} ${dropCapMobileBorderRadius.bottom}${dropCapBorderRadiusUnits.Mobile} ${dropCapMobileBorderRadius.left}${dropCapBorderRadiusUnits.Mobile}`;

    // default padding for link
    const linkDesktopPaddingWidth = `${linkDesktopPadding.top}${linkPaddingUnits.Desktop} ${linkDesktopPadding.right}${linkPaddingUnits.Desktop} ${linkDesktopPadding.bottom}${linkPaddingUnits.Desktop} ${linkDesktopPadding.left}${linkPaddingUnits.Desktop}`;
    const linkTabletPaddingWidth = `${linkTabPadding.top}${linkPaddingUnits.Tablet} ${linkTabPadding.right}${linkPaddingUnits.Tablet} ${linkTabPadding.bottom}${linkPaddingUnits.Tablet} ${linkTabPadding.left}${linkPaddingUnits.Tablet}`;
    const linkMobilePaddingWidth = `${linkMobilePadding.top}${linkPaddingUnits.Mobile} ${linkMobilePadding.right}${linkPaddingUnits.Mobile} ${linkMobilePadding.bottom}${linkPaddingUnits.Mobile} ${linkMobilePadding.left}${linkPaddingUnits.Mobile}`;

    // default Border for desktop
    const linkDesktopBorderWidth = `${linkDesktopBorder.top}${linkBorderUnits.Desktop} ${linkDesktopBorder.right}${linkBorderUnits.Desktop} ${linkDesktopBorder.bottom}${linkBorderUnits.Desktop} ${linkDesktopBorder.left}${linkBorderUnits.Desktop}`;
    const linkTabletBorderWidth = `${linkTabletBorder.top}${linkBorderUnits.Tablet} ${linkTabletBorder.right}${linkBorderUnits.Tablet} ${linkTabletBorder.bottom}${linkBorderUnits.Tablet} ${linkTabletBorder.left}${linkBorderUnits.Tablet}`;
    const linkMobileBorderWidth = `${linkMobileBorder.top}${linkBorderUnits.Mobile} ${linkMobileBorder.right}${linkBorderUnits.Mobile} ${linkMobileBorder.bottom}${linkBorderUnits.Mobile} ${linkMobileBorder.left}${linkBorderUnits.Mobile}`;

    // default border radius for link
    const linkDesktopBorderRadiusWidth = `${linkDesktopBorderRadius.top}${linkBorderRadiusUnits.Desktop} ${linkDesktopBorderRadius.right}${linkBorderRadiusUnits.Desktop} ${linkDesktopBorderRadius.bottom}${linkBorderRadiusUnits.Desktop} ${linkDesktopBorderRadius.left}${linkBorderRadiusUnits.Desktop}`;
    const linkTabletBorderRadiusWidth = `${linkTabBorderRadius.top}${linkBorderRadiusUnits.Tablet} ${linkTabBorderRadius.right}${linkBorderRadiusUnits.Tablet} ${linkTabBorderRadius.bottom}${linkBorderRadiusUnits.Tablet} ${linkTabBorderRadius.left}${linkBorderRadiusUnits.Tablet}`;
    const linkMobileBorderRadiusWidth = `${linkMobileBorderRadius.top}${linkBorderRadiusUnits.Mobile} ${linkMobileBorderRadius.right}${linkBorderRadiusUnits.Mobile} ${linkMobileBorderRadius.bottom}${linkBorderRadiusUnits.Mobile} ${linkMobileBorderRadius.left}${linkBorderRadiusUnits.Mobile}`;

    const globalDesktopPadding = `${paragraphGlobalPaddingDesktop.top}${paragraphGlobalPaddingUnits.Desktop} ${paragraphGlobalPaddingDesktop.right}${paragraphGlobalPaddingUnits.Desktop} ${paragraphGlobalPaddingDesktop.bottom}${paragraphGlobalPaddingUnits.Desktop} ${paragraphGlobalPaddingDesktop.left}${paragraphGlobalPaddingUnits.Desktop}`;
    const globalTabletPadding = `${paragraphGlobalPaddingTablet.top}${paragraphGlobalPaddingUnits.Tablet} ${paragraphGlobalPaddingTablet.right}${paragraphGlobalPaddingUnits.Tablet} ${paragraphGlobalPaddingTablet.bottom}${paragraphGlobalPaddingUnits.Tablet} ${paragraphGlobalPaddingTablet.left}${paragraphGlobalPaddingUnits.Tablet}`;
    const globalMobilePadding = `${paragraphGlobalPaddingMobile.top}${paragraphGlobalPaddingUnits.Mobile} ${paragraphGlobalPaddingMobile.right}${paragraphGlobalPaddingUnits.Mobile} ${paragraphGlobalPaddingMobile.bottom}${paragraphGlobalPaddingUnits.Mobile} ${paragraphGlobalPaddingMobile.left}${paragraphGlobalPaddingUnits.Mobile}`;

    const globalDesktopMargin = `${paragraphGlobalMarginDesktop.top}${paragraphGlobalMarginUnits.Desktop} ${paragraphGlobalMarginDesktop.right}${paragraphGlobalMarginUnits.Desktop} ${paragraphGlobalMarginDesktop.bottom}${paragraphGlobalMarginUnits.Desktop} ${paragraphGlobalMarginDesktop.left}${paragraphGlobalMarginUnits.Desktop}`;
    const globalTabletMargin = `${paragraphGlobalMarginTablet.top}${paragraphGlobalMarginUnits.Tablet} ${paragraphGlobalMarginTablet.right}${paragraphGlobalMarginUnits.Tablet} ${paragraphGlobalMarginTablet.bottom}${paragraphGlobalMarginUnits.Tablet} ${paragraphGlobalMarginTablet.left}${paragraphGlobalMarginUnits.Tablet}`;
    const globalMobileMargin = `${paragraphGlobalMarginMobile.top}${paragraphGlobalMarginUnits.Mobile} ${paragraphGlobalMarginMobile.right}${paragraphGlobalMarginUnits.Mobile} ${paragraphGlobalMarginMobile.bottom}${paragraphGlobalMarginUnits.Mobile} ${paragraphGlobalMarginMobile.left}${paragraphGlobalMarginUnits.Mobile}`;

    const globalDesktopBorderWidth = `${paragraphGlobalBorderDesktop.top}${paragraphGlobalBorderUnits.Desktop} ${paragraphGlobalBorderDesktop.right}${paragraphGlobalBorderUnits.Desktop} ${paragraphGlobalBorderDesktop.bottom}${paragraphGlobalBorderUnits.Desktop} ${paragraphGlobalBorderDesktop.left}${paragraphGlobalBorderUnits.Desktop}`;
    const globalTabletBorderWidth = `${paragraphGlobalBorderTablet.top}${paragraphGlobalBorderUnits.Tablet} ${paragraphGlobalBorderTablet.right}${paragraphGlobalBorderUnits.Tablet} ${paragraphGlobalBorderTablet.bottom}${paragraphGlobalBorderUnits.Tablet} ${paragraphGlobalBorderTablet.left}${paragraphGlobalBorderUnits.Tablet}`;
    const globalMobileBorderWidth = `${paragraphGlobalBorderMobile.top}${paragraphGlobalBorderUnits.Mobile} ${paragraphGlobalBorderMobile.right}${paragraphGlobalBorderUnits.Mobile} ${paragraphGlobalBorderMobile.bottom}${paragraphGlobalBorderUnits.Mobile} ${paragraphGlobalBorderMobile.left}${paragraphGlobalBorderUnits.Mobile}`;

    const globalDesktopBorderRadiusWidth = `${paragraphGlobalBorderRadiusDesktop.top}${paragraphGlobalBorderRadiusUnits.Desktop} ${paragraphGlobalBorderRadiusDesktop.right}${paragraphGlobalBorderRadiusUnits.Desktop} ${paragraphGlobalBorderRadiusDesktop.bottom}${paragraphGlobalBorderRadiusUnits.Desktop} ${paragraphGlobalBorderRadiusDesktop.left}${paragraphGlobalBorderRadiusUnits.Desktop}`;
    const globalTabletBorderRadiusWidth = `${paragraphGlobalBorderRadiusTablet.top}${paragraphGlobalBorderRadiusUnits.Tablet} ${paragraphGlobalBorderRadiusTablet.right}${paragraphGlobalBorderRadiusUnits.Tablet} ${paragraphGlobalBorderRadiusTablet.bottom}${paragraphGlobalBorderRadiusUnits.Tablet} ${paragraphGlobalBorderRadiusTablet.left}${paragraphGlobalBorderRadiusUnits.Tablet}`;
    const globalMobileBorderRadiusWidth = `${paragraphGlobalBorderRadiusMobile.top}${paragraphGlobalBorderRadiusUnits.Mobile} ${paragraphGlobalBorderRadiusMobile.right}${paragraphGlobalBorderRadiusUnits.Mobile} ${paragraphGlobalBorderRadiusMobile.bottom}${paragraphGlobalBorderRadiusUnits.Mobile} ${paragraphGlobalBorderRadiusMobile.left}${paragraphGlobalBorderRadiusUnits.Mobile}`;

    // detect <a> tags inside the RichText
    const hasLinkInParagraph = hasLinkInRichText(paragraphText);


    const advanxedParagraphBlockStyle = `
        .${blockID}.fb-advanced-paragraph-main-wrapper {
            ${advancedParagraphPositionType === "default"
            ? `position: relative !important;`
            : ""
        }
            ${advancedParagraphPositionType !== "default" &&
            advancedParagraphPositionType !== "relative"
            ? `width: 100%;`
            : ""
        }
            ${advancedParagraphPositionType !== "default"
            ? `position: ${advancedParagraphPositionType} !important;`
            : ""
        }
            ${advancedParagraphPositionType !== "default" &&
            advancedParagraphPositionType !== "relative" &&
            advancedParagraphHZOrientationType === "left" &&
            advancedParagraphHZLeftOffset.Desktop
            ? `left: ${advancedParagraphHZLeftOffset.Desktop}${advancedParagraphHZLeftOffsetUnits.Desktop};`
            : ""
        }
            ${advancedParagraphPositionType !== "default" &&
            advancedParagraphPositionType !== "relative" &&
            advancedParagraphHZOrientationType === "right" &&
            advancedParagraphHZRightOffset.Desktop
            ? `right: ${advancedParagraphHZRightOffset.Desktop}${advancedParagraphHZRightOffsetUnits.Desktop};`
            : ""
        }
            ${advancedParagraphPositionType !== "default" &&
            advancedParagraphPositionType !== "relative" &&
            advancedParagraphVROrientationType === "top" &&
            advancedParagraphVRTopOffset.Desktop
            ? `top: ${advancedParagraphVRTopOffset.Desktop}${advancedParagraphVRTopOffsetUnits.Desktop};`
            : ""
        }
            ${advancedParagraphPositionType !== "default" &&
            advancedParagraphPositionType !== "relative" &&
            advancedParagraphVROrientationType === "bottom" &&
            advancedParagraphVRBottomOffset.Desktop
            ? `bottom: ${advancedParagraphVRBottomOffset.Desktop}${advancedParagraphVRBottomOffsetUnits.Desktop};`
            : ""
        }
            ${paragraphGlobalZIndex.Desktop
            ? `z-index: ${paragraphGlobalZIndex.Desktop};`
            : ""
        }
            ${advancedParagraphOverflow !== "default"
            ? `overflow: ${advancedParagraphOverflow};`
            : ""
        }
        }


        .${blockID} .fb-advanced-wrapper {
            ${paragraphGlobalBgColor
            ? `background-color: ${paragraphGlobalBgColor};`
            : ""
        }
            ${globalDesktopPadding && paragraphGlobalPaddingDesktop?.top
            ? `padding: ${globalDesktopPadding};`
            : ""
        }
            ${globalDesktopMargin && paragraphGlobalMarginDesktop?.top
            ? `margin: ${globalDesktopMargin};`
            : ""
        }
            ${paragraphGlobalBorder ? `border: ${paragraphGlobalBorder};` : ""}
            ${globalDesktopBorderWidth && paragraphGlobalBorderDesktop?.top
            ? `border-width: ${globalDesktopBorderWidth};`
            : ""
        }
            ${globalDesktopBorderRadiusWidth &&
            paragraphGlobalBorderRadiusDesktop?.top
            ? `border-radius: ${globalDesktopBorderRadiusWidth};`
            : ""
        }
            ${paragraphGlobalBorderColor
            ? `border-color: ${paragraphGlobalBorderColor};`
            : ""
        }
            ${paragraphGlobalBoxShadowCssValue
            ? `box-shadow: ${paragraphGlobalBoxShadowCssValue};`
            : ""
        }

            ${paragraphAlignment.Desktop
            ? `text-align: ${paragraphAlignment.Desktop};`
            : ""
        }
            transition: all .1s ease-in-out;
            position: relative;
        }

        .${blockID} .fb-advanced-wrapper:hover {
            ${paragraphGlobalBgHoverColor
            ? `background-color: ${paragraphGlobalBgHoverColor};`
            : ""
        }
            ${paragraphGlobalBorderHoverColor
            ? `border-color: ${paragraphGlobalBorderHoverColor};`
            : ""
        }
            ${paragraphGlobalBoxShadowHoverCssValue
            ? `box-shadow: ${paragraphGlobalBoxShadowHoverCssValue};`
            : ""
        }
        }


        .${blockID} .fb-advanced-wrapper .fb-advanced-paragraph {
                        margin-block-start: 0;
                        margin-block-end: 0;

            ${paragraphColor ? `color: ${paragraphColor};` : ""}

                        ${paragraphColumnCount.Desktop
            ? `column-count: ${paragraphColumnCount.Desktop};`
            : ""
        }
                        ${paragraphColumnGap.Desktop
            ? `column-gap: ${paragraphColumnGap.Desktop}${paragraphColumnGapUnits.Desktop};`
            : ""
        }
                        

            ${paragraphGlobalTypoSwitcher.fontFamily === true &&
            paragraphGlobalTypographyData.fontFamily
            ? `font-family: ${paragraphGlobalTypographyData.fontFamily};`
            : ""
        }
            ${paragraphGlobalTypoSwitcher.fontSize === true &&
            paragraphGlobalTypographyData.fontSize
            ? `font-size: ${paragraphGlobalTypographyData.fontSize};`
            : ""
        }
            ${paragraphGlobalTypoSwitcher.fontWeight === true &&
            paragraphGlobalTypographyData.fontWeight
            ? `font-weight: ${paragraphGlobalTypographyData.fontWeight};`
            : ""
        }
            ${paragraphGlobalTypoSwitcher.fontStyle === true &&
            paragraphGlobalTypographyData.fontStyle
            ? `font-style: ${paragraphGlobalTypographyData.fontStyle};`
            : ""
        }
            ${paragraphGlobalTypoSwitcher.textTransform === true &&
            paragraphGlobalTypographyData.textTransform
            ? `text-transform: ${paragraphGlobalTypographyData.textTransform};`
            : ""
        }
            ${paragraphGlobalTypoSwitcher.textDecoration === true &&
            paragraphGlobalTypographyData.textDecoration
            ? `text-decoration: ${paragraphGlobalTypographyData.textDecoration};`
            : ""
        }
            ${paragraphGlobalTypoSwitcher.letterSpacing === true &&
            paragraphGlobalTypographyData.letterSpacing
            ? `letter-spacing: ${paragraphGlobalTypographyData.letterSpacing};`
            : ""
        }
            ${paragraphGlobalTypoSwitcher.lineHeight === true &&
            paragraphGlobalTypographyData.lineHeight
            ? `line-height: ${paragraphGlobalTypographyData.lineHeight};`
            : ""
        }
                
            ${paragraphGlobalTypoSwitcher.fontFamily === false &&
            paragraphFontFamily &&
            paragraphFontFamily !== "Default"
            ? `font-family: ${paragraphFontFamily};`
            : ""
        }
            ${paragraphGlobalTypoSwitcher.fontSize === false &&
            paragraphFontSize.Desktop &&
            paragraphFontSizeUnits.Desktop
            ? `font-size: ${paragraphFontSize.Desktop}${paragraphFontSizeUnits.Desktop};`
            : ""
        }
            ${paragraphGlobalTypoSwitcher.fontWeight === false &&
            paragraphFontWeight
            ? `font-weight: ${paragraphFontWeight};`
            : ""
        }
            ${paragraphGlobalTypoSwitcher.fontStyle === false &&
            paragraphFontStyle
            ? `font-style: ${paragraphFontStyle};`
            : ""
        }
            ${paragraphGlobalTypoSwitcher.textTransform === false &&
            paragraphTextTransform
            ? `text-transform: ${paragraphTextTransform};`
            : ""
        }
            ${paragraphGlobalTypoSwitcher.textDecoration === false &&
            paragraphTextDecoration
            ? `text-decoration: ${paragraphTextDecoration};`
            : ""
        }
            ${paragraphGlobalTypoSwitcher.letterSpacing === false &&
            paragraphLetterSpacing.Desktop &&
            paragraphLetterSpacingUnits.Desktop
            ? `letter-spacing: ${paragraphLetterSpacing.Desktop}${paragraphLetterSpacingUnits.Desktop};`
            : ""
        }
            ${paragraphGlobalTypoSwitcher.lineHeight === false &&
            paragraphLineHeight.Desktop &&
            paragraphLineHeightUnits.Desktop
            ? `line-height: ${paragraphLineHeight.Desktop}${paragraphLineHeightUnits.Desktop};`
            : ""
        }
            

            ${paragraphTextShadowCssValue
            ? `text-shadow: ${paragraphTextShadowCssValue};`
            : ""
        }

            ${paragraphTextStroke
            ? `
                ${paragraphTextStroke.Desktop
                ? `-webkit-text-stroke: ${paragraphTextStroke.Desktop}px ${paragraphTextStrokeColor};`
                : ""
            }
                ${paragraphTextStroke.Desktop
                ? `text-stroke: ${paragraphTextStroke.Desktop}px ${paragraphTextStrokeColor};`
                : ""
            }
            `
            : ""
        }


            transition: all .3s ease-in-out;
        }



        .${blockID} .fb-advanced-wrapper .fb-advanced-paragraph:hover {
            ${paragraphHoverColor ? `color: ${paragraphHoverColor};` : ""}

            ${paragraphTextStrokeHoverColor
            ? `
                ${paragraphTextStroke.Desktop
                ? `-webkit-text-stroke: ${paragraphTextStroke.Desktop}px ${paragraphTextStrokeHoverColor};`
                : ""
            }
                ${paragraphTextStroke.Desktop
                ? `text-stroke: ${paragraphTextStroke.Desktop}px ${paragraphTextStrokeHoverColor};`
                : ""
            }
            `
            : ""
        }

                        transition: all .3s ease-in-out;
        }


                ${hasLinkInParagraph
            ? `
                    .${blockID} .fb-advanced-paragraph-wrapper p a:hover{
                        text-decoration: none;
                        ${linkHoverColor ? `color: ${linkHoverColor};` : ""}

                        ${linkBgColorHover ? `background-color: ${linkBgColorHover};` : ""}

                    }

                .${blockID} .fb-advanced-paragraph-wrapper p a{
                        text-decoration: underline;

                        ${linkColor ? `color: ${linkColor};` : ""}

                        ${linkBgColor ? `background-color: ${linkBgColor};` : ""}
                        

                        ${linkGlobalTypoSwitcher.fontFamily === true &&
                linkGlobalTypographyData.fontFamily
                ? `font-family: ${linkGlobalTypographyData.fontFamily};`
                : ""
            }

                        ${linkGlobalTypoSwitcher.fontSize === true &&
                linkGlobalTypographyData.fontSize
                ? `font-size: ${linkGlobalTypographyData.fontSize};`
                : ""
            }

                        ${linkGlobalTypoSwitcher.fontWeight === true &&
                linkGlobalTypographyData.fontStyle
                ? `font-style: ${linkGlobalTypographyData.fontStyle};`
                : ""
            }

                        ${linkGlobalTypoSwitcher.textTransform === true &&
                linkGlobalTypoSwitcher.textTransform
                ? `text-transform: ${linkGlobalTypographyData.textTransform};`
                : ""
            }

                        ${linkGlobalTypoSwitcher.textDecoration === true &&
                linkGlobalTypoSwitcher.textDecoration
                ? `text-decoration: ${linkGlobalTypographyData.textDecoration};`
                : ""
            }

                        ${linkGlobalTypoSwitcher.letterSpacing === true &&
                linkGlobalTypoSwitcher.letterSpacing
                ? `letter-spacing: ${linkGlobalTypographyData.letterSpacing};`
                : ""
            }

                        ${linkGlobalTypoSwitcher.lineHeight === true &&
                linkGlobalTypoSwitcher.lineHeight
                ? `line-height: ${linkGlobalTypographyData.lineHeight};`
                : ""
            }

                        ${linkGlobalTypoSwitcher.fontFamily === false &&
                linkFontFamily &&
                linkFontFamily !== "Default"
                ? `font-family: ${linkFontFamily};`
                : ""
            }

                        ${linkGlobalTypoSwitcher.fontSize === false &&
                linkFontSize.Desktop &&
                linkFontSizeUnits.Desktop
                ? `font-size: ${linkFontSize.Desktop}${linkFontSizeUnits.Desktop};`
                : ""
            }

                        ${linkGlobalTypoSwitcher.fontWeight === false && linkFontWeight
                ? `font-weight: ${linkFontWeight};`
                : ""
            }

                        ${linkGlobalTypoSwitcher.fontStyle === false && linkFontStyle
                ? `font-style: ${linkFontStyle}`
                : ""
            }

                        ${linkGlobalTypoSwitcher.textTransform === false &&
                linkTextTransform
                ? `text-transform: ${linkTextTransform};`
                : ""
            }

                        ${linkGlobalTypoSwitcher.textDecoration === false &&
                linkTextDecoration
                ? `text-decoration: ${linkTextDecoration};`
                : ""
            }

                        ${linkGlobalTypoSwitcher.letterSpacing === false &&
                linkLetterSpacing.Desktop &&
                linkLetterSpacingUnits.Desktop
                ? `letter-spacing: ${linkLetterSpacing.Desktop}${linkLetterSpacingUnits.Desktop};`
                : ""
            }

                        ${linkGlobalTypoSwitcher.lineHeight === false &&
                linkLineHeight.Desktop &&
                linkLineHeightUnits.Desktop
                ? `line-height: ${linkLineHeight.Desktop}${linkLineHeightUnits.Desktop}`
                : ""
            }

                        ${linkDesktopPaddingWidth && linkDesktopPadding?.top
                ? `padding: ${linkDesktopPaddingWidth};`
                : ""
            }


                        ${linkBorder ? `border: ${linkBorder};` : ""}


                        ${linkDesktopBorderWidth && linkDesktopBorder?.top
                ? `border-width: ${linkDesktopBorderWidth};`
                : ""
            }

                        ${linkBorderColor ? `border-color: ${linkBorderColor};` : ""}

                                ${linkDesktopBorderRadiusWidth && linkDesktopBorderRadius?.top
                ? `border-radius: ${linkDesktopBorderRadiusWidth};`
                : ""
            }


                                    ${linkBoxShadowCssValue ? `box-shadow: ${linkBoxShadowCssValue};` : ""}

transition: all .3s ease-in-out;
                }
                        `
            : ""
        }
            
                

                ${dropCap
            ? ` 
                .${blockID} .fb-advanced-paragraph-wrapper .fb-advanced-paragraph::first-letter {
                        vertical-align: top;
                        font-size: 2em;
            line-height: 1;
                        margin-right: 0.1em;
                        font-weight: bold;
                        float: left;

                        ${dropCapColor ? `color: ${dropCapColor};` : ""}
                        ${dropCapBgColor ? `background-color: ${dropCapBgColor};` : ""}


                        ${dropCapGlobalTypoSwitcher.fontFamily === true &&
                dropCapGlobalTypographyData.fontFamily
                ? `font-family: ${dropCapGlobalTypographyData.fontFamily}; `
                : ""
            }


                        ${dropCapGlobalTypoSwitcher.fontSize === true &&
                dropCapGlobalTypographyData.fontSize
                ? `font-size: ${dropCapGlobalTypographyData.fontSize}; `
                : ""
            }

                        ${dropCapGlobalTypoSwitcher.fontWeight === true &&
                dropCapGlobalTypographyData.fontStyle
                ? `font-style: ${dropCapGlobalTypographyData.fontStyle};`
                : ""
            }

                        ${dropCapGlobalTypoSwitcher.textTransform === true &&
                dropCapGlobalTypoSwitcher.textTransform
                ? `text-transform: ${dropCapGlobalTypographyData.textTransform};`
                : ""
            }

                        ${dropCapGlobalTypoSwitcher.textDecoration === true &&
                dropCapGlobalTypoSwitcher.textDecoration
                ? `text-decoration: ${dropCapGlobalTypographyData.textDecoration};`
                : ""
            }


                        ${dropCapGlobalTypoSwitcher.letterSpacing === true &&
                dropCapGlobalTypoSwitcher.letterSpacing
                ? `letter-spacing: ${dropCapGlobalTypographyData.letterSpacing};`
                : ""
            }

                        ${dropCapGlobalTypoSwitcher.lineHeight === true &&
                dropCapGlobalTypoSwitcher.lineHeight
                ? `line-height: ${dropCapGlobalTypographyData.lineHeight};`
                : ""
            }

                        ${dropCapGlobalTypoSwitcher.fontFamily === false &&
                dropCapFontFamily &&
                dropCapFontFamily !== "Default"
                ? `font-family: ${dropCapFontFamily};`
                : ""
            }

                        ${dropCapGlobalTypoSwitcher.fontSize === false &&
                dropCapFontSize.Desktop &&
                dropCapFontSizeUnits.Desktop
                ? `font-size: ${dropCapFontSize.Desktop}${dropCapFontSizeUnits.Desktop};`
                : ""
            }

                        ${dropCapGlobalTypoSwitcher.fontWeight === false &&
                dropCapFontWeight
                ? `font-weight: ${dropCapFontWeight};`
                : ""
            }

                        ${dropCapGlobalTypoSwitcher.fontStyle === false && dropCapFontStyle
                ? `font-style: ${dropCapFontStyle}`
                : ""
            }

                        ${dropCapGlobalTypoSwitcher.textTransform === false &&
                dropCapTextTransform
                ? `text-transform: ${dropCapTextTransform};`
                : ""
            }


                        ${dropCapGlobalTypoSwitcher.textDecoration === false &&
                dropCapTextDecoration
                ? `text-decoration : ${dropCapTextDecoration};`
                : ""
            }

                        ${dropCapGlobalTypoSwitcher.letterSpacing === false &&
                dropCapLetterSpacing.Desktop &&
                dropCapLetterSpacingUnits.Desktop
                ? `letter-spacing: ${dropCapLetterSpacing.Desktop}${dropCapLetterSpacingUnits.Desktop};`
                : ""
            }

                        ${dropCapGlobalTypoSwitcher.lineHeight === false &&
                dropCapLineHeight.Desktop &&
                dropCapLineHeightUnits.Desktop
                ? `line-height: ${dropCapLineHeight.Desktop}${dropCapLineHeightUnits.Desktop}`
                : ""
            }

            ${dropCapTextShadowCssValue ? `text-shadow: ${dropCapTextShadowCssValue};` : ""}


            ${dropCapDesktopPaddingWidth && dropCapDesktopPadding?.top
                ? `padding: ${dropCapDesktopPaddingWidth};`
                : ""
            }

            ${dropCapDesktopMarginWidth && dropCapDesktopMargin?.top
                ? `margin: ${dropCapDesktopMarginWidth};`
                : ""
            }

            ${dropCapBorder ? `border: ${dropCapBorder};` : ""}

            ${dropCapDesktopBorderWidth && dropCapDesktopBorder?.top
                ? `border-width: ${dropCapDesktopBorderWidth};`
                : ""
            }

            ${dropCapBorderColor ? `border-color: ${dropCapBorderColor};` : ""}

            ${dropCapDesktopBorderRadiusWidth && dropCapDesktopBorderRadius?.top
                ? `border-radius: ${dropCapDesktopBorderRadiusWidth};`
                : ""
            }

                transition: all .3s ease-in-out;

                }

            `
            : ""
        }


@media only screen and (min-width: 768px) and (max-width: 1024px) {

                ${dropCap
            ? `
                    .${blockID} .fb-advanced-paragraph-wrapper .fb-advanced-paragraph::first-letter{
                    

                                                ${dropCapTabletPaddingWidth && dropCapTabPadding.top
                ? `padding: ${dropCapTabletPaddingWidth};`
                : ""
            }

                                                ${dropCapTabletMarginWidth && dropCapTabMargin.top
                ? `margin: ${dropCapTabletMarginWidth};`
                : ""
            }

                                                ${dropCapTabletBorderWidth && dropCapTabletBorder.top
                ? `border-width: ${dropCapTabletBorderWidth};`
                : ""
            }

                                                ${dropCapTabletBorderRadiusWidth &&
                dropCapTabBorderRadius.top
                ? `border-radius: ${dropCapTabletBorderRadiusWidth};`
                : ""
            }

                    }
                    `
            : ""
        }



            .${blockID}.fb-advanced-paragraph-main-wrapper {
                ${advancedParagraphPositionType !== "default"
            ? `position: ${advancedParagraphPositionType};`
            : ""
        }
                ${advancedParagraphPositionType !== "default" &&
            advancedParagraphPositionType !== "relative" &&
            advancedParagraphHZOrientationType === "left" &&
            advancedParagraphHZLeftOffset.Tablet
            ? `left: ${advancedParagraphHZLeftOffset.Tablet}${advancedParagraphHZLeftOffsetUnits.Tablet};`
            : ""
        }
                ${advancedParagraphPositionType !== "default" &&
            advancedParagraphPositionType !== "relative" &&
            advancedParagraphHZOrientationType === "right" &&
            advancedParagraphHZRightOffset.Tablet
            ? `right: ${advancedParagraphHZRightOffset.Tablet}${advancedParagraphHZRightOffsetUnits.Tablet};`
            : ""
        }
                ${advancedParagraphPositionType !== "default" &&
            advancedParagraphPositionType !== "relative" &&
            advancedParagraphVROrientationType === "top" &&
            advancedParagraphVRTopOffset.Tablet
            ? `top: ${advancedParagraphVRTopOffset.Tablet}${advancedParagraphVRTopOffsetUnits.Tablet};`
            : ""
        }
                ${advancedParagraphPositionType !== "default" &&
            advancedParagraphPositionType !== "relative" &&
            advancedParagraphVROrientationType === "bottom" &&
            advancedParagraphVRBottomOffset.Tablet
            ? `bottom: ${advancedParagraphVRBottomOffset.Tablet}${advancedParagraphVRBottomOffsetUnits.Tablet};`
            : ""
        }
                ${paragraphGlobalZIndex.Tablet
            ? `z-index: ${paragraphGlobalZIndex.Tablet};`
            : ""
        }
            }

            .${blockID} .fb-advanced-wrapper {
                ${globalTabletPadding && paragraphGlobalPaddingTablet?.top
            ? `padding: ${globalTabletPadding};`
            : ""
        }
                ${globalTabletMargin && paragraphGlobalMarginTablet?.top
            ? `margin: ${globalTabletMargin};`
            : ""
        }
                ${globalTabletBorderWidth && paragraphGlobalBorderTablet?.top
            ? `border-width: ${globalTabletBorderWidth};`
            : ""
        }
                ${globalTabletBorderRadiusWidth &&
            paragraphGlobalBorderRadiusTablet?.top
            ? `border-radius: ${globalTabletBorderRadiusWidth};`
            : ""
        }
                ${paragraphAlignment.Tablet
            ? `text-align: ${paragraphAlignment.Tablet};`
            : ""
        }
            }

                        
            .${blockID} .fb-advanced-wrapper .fb-advanced-paragraph {

                                ${paragraphColumnCount.Tablet
            ? `column-count: ${paragraphColumnCount.Tablet};`
            : ""
        }
                                ${paragraphColumnGap.Tablet
            ? `column-gap: ${paragraphColumnGap.Tablet}${paragraphColumnGapUnits.Tablet};`
            : ""
        }


                ${paragraphGlobalTypoSwitcher.fontSize === false &&
            paragraphFontSize.Tablet &&
            paragraphFontSizeUnits.Tablet
            ? `font-size: ${paragraphFontSize.Tablet}${paragraphFontSizeUnits.Tablet};`
            : ""
        }
                ${paragraphGlobalTypoSwitcher.letterSpacing === false &&
            paragraphLetterSpacing.Tablet &&
            paragraphLetterSpacingUnits.Tablet
            ? `letter-spacing: ${paragraphLetterSpacing.Tablet}${paragraphLetterSpacingUnits.Tablet};`
            : ""
        }
                ${paragraphGlobalTypoSwitcher.lineHeight === false &&
            paragraphLineHeight.Tablet &&
            paragraphLineHeightUnits.Tablet
            ? `line-height: ${paragraphLineHeight.Tablet}${paragraphLineHeightUnits.Tablet};`
            : ""
        }
                ${paragraphTextStroke
            ? `
                    ${paragraphTextStroke.Tablet
                ? `-webkit-text-stroke: ${paragraphTextStroke.Tablet}px ${paragraphTextStrokeColor};`
                : ""
            }
                    ${paragraphTextStroke.Tablet
                ? `text-stroke: ${paragraphTextStroke.Tablet}px ${paragraphTextStrokeColor};`
                : ""
            }
                `
            : ""
        }
            }

            .${blockID} .fb-advanced-wrapper .fb-advanced-paragraph:hover {
                ${paragraphTextStrokeHoverColor
            ? `
                    ${paragraphTextStroke.Tablet
                ? `-webkit-text-stroke: ${paragraphTextStroke.Tablet}px ${paragraphTextStrokeHoverColor};`
                : ""
            }
                    ${paragraphTextStroke.Tablet
                ? `text-stroke: ${paragraphTextStroke.Tablet}px ${paragraphTextStrokeHoverColor};`
                : ""
            }
                `
            : ""
        }
            }

                            .${blockID} .fb-advanced-paragraph-wrapper .fb-advanced-paragraph a{

                                ${linkGlobalTypoSwitcher.fontSize === false &&
            linkFontSize.Tablet &&
            linkFontSizeUnits.Tablet
            ? `font-size: ${linkFontSize.Tablet}${linkFontSizeUnits.Tablet};`
            : ""
        }

                                ${linkGlobalTypoSwitcher.letterSpacing === false &&
            linkLetterSpacing.Tablet &&
            linkLetterSpacingUnits.Tablet
            ? `letter-spacing: ${linkLetterSpacing.Tablet}${linkLetterSpacingUnits.Tablet};`
            : ""
        }

                                ${linkGlobalTypoSwitcher.lineHeight === false &&
            linkLineHeight.Tablet &&
            linkLineHeightUnits.Tablet
            ? `line-height: ${linkLineHeight.Tablet}${linkLineHeightUnits.Tablet};`
            : ""
        }
                            
                            }


                                            ${hasLinkInParagraph
            ? `
                    
                            .${blockID} .fb-advanced-paragraph-wrapper .fb-advanced-paragraph a{

                                ${linkTabletPaddingWidth && linkTabPadding.top
                ? `padding: ${linkTabletPaddingWidth};`
                : ""
            }

                                ${linkTabletBorderWidth && linkTabletBorder.top
                ? `border-width: ${linkTabletBorderWidth};`
                : ""
            }

                                                    ${linkTabletBorderRadiusWidth &&
                linkTabBorderRadius?.top
                ? `border-radius: ${linkTabletBorderRadiusWidth};`
                : ""
            }

                            }

                    `
            : ""
        }


        }

        @media only screen and (max-width: 767px) {


                                        ${hasLinkInParagraph
            ? `
                                .${blockID} .fb-advanced-paragraph-wrapper .fb-advanced-paragraph a{
                                    ${linkMobilePaddingWidth && linkMobilePadding.top
                ? `padding: ${linkMobilePaddingWidth};`
                : ""
            }

                                    ${linkMobileBorderWidth && linkMobileBorder.top
                ? `border-width: ${linkMobileBorderWidth};`
                : ""
            }

                                    ${linkMobileBorderRadiusWidth && linkMobileBorderRadius.top
                ? `border-radius: ${linkMobileBorderRadiusWidth};`
                : ""
            }

                                }
                    `
            : ""
        }


                ${dropCap
            ? `
                    
                        .${blockID} .fb-advanced-paragraph-wrapper .fb-advanced-paragraph::first-letter{
                            ${dropCapMobilePaddingWidth && dropCapMobilePadding.top
                ? `padding: ${dropCapMobilePaddingWidth};`
                : ""
            }

                            ${dropCapMobileMarginWidth && dropCapMobileMargin.top
                ? `margin: ${dropCapMobileMarginWidth};`
                : ""
            }

                            ${dropCapMobileBorderWidth && dropCapMobileBorder.top
                ? `border-width: ${dropCapMobileBorderWidth};`
                : ""
            }

                            ${dropCapMobileBorderRadiusWidth && dropCapMobileBorderRadius.top
                ? `border-radius: ${dropCapMobileBorderRadiusWidth};`
                : ""
            }
                        
                        }
                    
                `
            : ""
        }



            .${blockID} .fb-advanced-wrapper .fb-advanced-paragraph {

                            ${paragraphColumnCount.Mobile
            ? `column-count: ${paragraphColumnCount.Mobile};`
            : ""
        }
                            ${paragraphColumnGap.Mobile
            ? `column-gap: ${paragraphColumnGap.Mobile}${paragraphColumnGapUnits.Mobile};`
            : ""
        }


                ${paragraphGlobalTypoSwitcher.fontSize === false &&
            paragraphFontSize.Mobile &&
            paragraphFontSizeUnits.Mobile
            ? `font-size: ${paragraphFontSize.Mobile}${paragraphFontSizeUnits.Mobile};`
            : ""
        }
                ${paragraphGlobalTypoSwitcher.letterSpacing === false &&
            paragraphLetterSpacing.Mobile &&
            paragraphLetterSpacingUnits.Mobile
            ? `letter-spacing: ${paragraphLetterSpacing.Mobile}${paragraphLetterSpacingUnits.Mobile};`
            : ""
        }
                ${paragraphGlobalTypoSwitcher.lineHeight === false &&
            paragraphLineHeight.Mobile &&
            paragraphLineHeightUnits.Mobile
            ? `line-height: ${paragraphLineHeight.Mobile}${paragraphLineHeightUnits.Mobile};`
            : ""
        }

                ${paragraphTextStroke
            ? `
                    ${paragraphTextStroke.Mobile
                ? `-webkit-text-stroke: ${paragraphTextStroke.Mobile}px ${paragraphTextStrokeColor};`
                : ""
            }
                    ${paragraphTextStroke.Mobile
                ? `text-stroke: ${paragraphTextStroke.Mobile}px ${paragraphTextStrokeColor};`
                : ""
            }
                `
            : ""
        }
            }

            .${blockID} .fb-advanced-wrapper .fb-advanced-paragraph:hover {
                ${paragraphTextStrokeHoverColor
            ? `
                    ${paragraphTextStroke.Mobile
                ? `-webkit-text-stroke: ${paragraphTextStroke.Mobile}px ${paragraphTextStrokeHoverColor};`
                : ""
            }
                    ${paragraphTextStroke.Mobile
                ? `text-stroke: ${paragraphTextStroke.Mobile}px ${paragraphTextStrokeHoverColor};`
                : ""
            }
                `
            : ""
        }
            }

            

            .${blockID}.fb-advanced-paragraph-main-wrapper {
                ${advancedParagraphPositionType !== "default"
            ? `position: ${advancedParagraphPositionType};`
            : ""
        }
                ${advancedParagraphPositionType !== "default" &&
            advancedParagraphPositionType !== "relative" &&
            advancedParagraphHZOrientationType === "left" &&
            advancedParagraphHZLeftOffset.Mobile
            ? `left: ${advancedParagraphHZLeftOffset.Mobile}${advancedParagraphHZLeftOffsetUnits.Mobile};`
            : ""
        }
                ${advancedParagraphPositionType !== "default" &&
            advancedParagraphPositionType !== "relative" &&
            advancedParagraphHZOrientationType === "right" &&
            advancedParagraphHZRightOffset.Mobile
            ? `right: ${advancedParagraphHZRightOffset.Mobile}${advancedParagraphHZRightOffsetUnits.Mobile};`
            : ""
        }
                ${advancedParagraphPositionType !== "default" &&
            advancedParagraphPositionType !== "relative" &&
            advancedParagraphVROrientationType === "top" &&
            advancedParagraphVRTopOffset.Mobile
            ? `top: ${advancedParagraphVRTopOffset.Mobile}${advancedParagraphVRTopOffsetUnits.Mobile};`
            : ""
        }
                ${advancedParagraphPositionType !== "default" &&
            advancedParagraphPositionType !== "relative" &&
            advancedParagraphVROrientationType === "bottom" &&
            advancedParagraphVRBottomOffset.Mobile
            ? `bottom: ${advancedParagraphVRBottomOffset.Mobile}${advancedParagraphVRBottomOffsetUnits.Mobile};`
            : ""
        }
                ${paragraphGlobalZIndex.Mobile
            ? `z-index: ${paragraphGlobalZIndex.Mobile};`
            : ""
        }
            }
            .${blockID} .fb-advanced-wrapper {
                ${globalMobilePadding && paragraphGlobalPaddingMobile?.top
            ? `padding: ${globalMobilePadding};`
            : ""
        }
                ${globalMobileMargin && paragraphGlobalMarginMobile?.top
            ? `margin: ${globalMobileMargin};`
            : ""
        }
                ${globalMobileBorderWidth && paragraphGlobalBorderMobile?.top
            ? `border-width: ${globalMobileBorderWidth};`
            : ""
        }
                ${globalMobileBorderRadiusWidth &&
            paragraphGlobalBorderRadiusMobile?.top
            ? `border-radius: ${globalMobileBorderRadiusWidth};`
            : ""
        }
                ${paragraphAlignment.Mobile
            ? `text-align: ${paragraphAlignment.Mobile};`
            : ""
        }
            }

                        

        }
    `;

    const customCss = getCustomCss(advancedParagraphCustomCSS, `.${blockID}`);
    return `${advanxedParagraphBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateAdvancedParagraphStyle;