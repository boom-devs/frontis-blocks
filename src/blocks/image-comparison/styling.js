import getCustomCss from '@Utils/getCustomCss';

const imageComparisonStyle = (attributes) => {
    const {
        blockID,
        comparisonCustomCSS,

        /** Start Comparison Height */
        comparisonHeight,
        comparisonHeightUnits,
        /** End Comparison Height */

        /** Start Comparison Drag Direction */
        comparisonDragDirection,
        /** End Comparison Drag Direction */

        /** Start Comparison Margin */
        comparisonMarginUnits,
        comparisonMarginDesktop,
        comparisonMarginTablet,
        comparisonMarginMobile,
        comparisonMarginLink,
        /** End Comparison Margin */

        /** Start Comparison Padding */
        comparisonPaddingUnits,
        comparisonPaddingDesktop,
        comparisonPaddingTablet,
        comparisonPaddingMobile,
        comparisonPaddingLink,
        /** End Comparison Padding */

        /** Start Comparison Border */
        comparisonBorder,
        comparisonBorderColorSwitcher,
        comparisonBorderColor,
        comparisonBorderHoverColor,
        /** End Comparison Border */

        /** Start Comparison Border Units */
        comparisonBorderUnits,
        comparisonBorderDesktop,
        comparisonBorderTablet,
        comparisonBorderMobile,
        comparisonBorderLink,
        /** End Comparison Border Units */

        /** Start Comparison Border Radius */
        comparisonBorderRadiusUnits,
        comparisonBorderRadiusDesktop,
        comparisonBorderRadiusTablet,
        comparisonBorderRadiusMobile,
        comparisonBorderRadiusLink,
        /** End Comparison Border Radius */

        /** Start Comparison Box Shadow */
        comparisonBoxShadowSwitcher,
        comparisonBoxShadowValues,
        comparisonBoxShadowCssValue,
        comparisonBoxShadowHoverValues,
        comparisonBoxShadowHoverCssValue,
        /** End Comparison Box Shadow */

        /** Start Comparison Labels Padding */
        comparisonLabelsPaddingUnits,
        comparisonLabelsPaddingDesktop,
        comparisonLabelsPaddingTablet,
        comparisonLabelsPaddingMobile,
        comparisonLabelsPaddingLink,
        /** End Comparison Labels Padding */

        /** Start Comparison Labels Border Radius */
        comparisonLabelsBorderRadiusUnits,
        comparisonLabelsBorderRadiusDesktop,
        comparisonLabelsBorderRadiusTablet,
        comparisonLabelsBorderRadiusMobile,
        comparisonLabelsBorderRadiusLink,
        /** End Comparison Labels Border Radius */

        /** Start Comparison Labels Background Color */
        comparisonLabelsBgColorSwitcher,
        comparisonLabelsNormalBackgroundType,
        comparisonLabelsNormalClassicColor,
        comparisonLabelsNormalGradientColor,
        comparisonLabelsNormalCustomGradientSwitcher,
        comparisonLabelsNormalCustomGradientInputValue,
        comparisonLabelsHoverBackgroundType,
        comparisonLabelsHoverClassicColor,
        comparisonLabelsHoverGradientColor,
        comparisonLabelsHoverCustomGradientSwitcher,
        comparisonLabelsHoverCustomGradientInputValue,
        /** End Comparison Labels Background Color */

        /** Start Comparison Labels Typography */
        comparisonLabelsGlobalTypoSwitcher,
        comparisonLabelsGlobalTypoType,
        comparisonLabelsGlobalTypoOption,
        comparisonLabelsGlobalTypographyData,
        comparisonLabelsFontFamily,
        comparisonLabelsFontSize,
        comparisonLabelsFontSizeUnits,
        comparisonLabelsFontWeight,
        comparisonLabelsFontStyle,
        comparisonLabelsTextTransform,
        comparisonLabelsTextDecoration,
        comparisonLabelsLetterSpacing,
        comparisonLabelsLineHeight,
        comparisonLabelsLetterSpacingUnits,
        comparisonLabelsLineHeightUnits,
        /** End Comparison Labels Typography */

        /** Start Comparison Labels Text Color */
        comparisonLabelsBtnTextColorSwitcher,
        comparisonLabelsBtnTextColor,
        comparisonLabelsBtnTextHoverColor,
        /** End Comparison Labels Text Color */

        /** Start Comparison Handler Border Radius */
        comparisonHandlerBorderRadiusUnits,
        comparisonHandlerBorderRadiusDesktop,
        comparisonHandlerBorderRadiusTablet,
        comparisonHandlerBorderRadiusMobile,
        comparisonHandlerBorderRadiusLink,
        /** End Comparison Handler Border Radius */

        /**Start Handler Size */
        comparisonHandlerSize,
        comparisonHandlerSizeUnits,
        /**End Handler Size */

        /** Start Comparison Handler Color */
        comparisonHandlerColorSwitcher,
        comparisonHandlerColor,
        comparisonHandlerHoverColor,
        /** End Comparison Handler Color */

        /**Start Divider Width */
        comparisonDividerWidth,
        comparisonDividerWidthUnits,
        /** End Divider Width */

        /** Start Comparison Divider Color */
        comparisonDividerColorSwitcher,
        comparisonDividerColor,
        comparisonDividerHoverColor,
        /** End Comparison Divider Color */

        /** Start Comparison Arrow Color */
        comparisonArrowColorSwitcher,
        comparisonArrowColor,
        comparisonArrowHoverColor,
        /** End Comparison Arrow Color */

        /** Start Comparison Arrow Size */
        comparisonArrowSize,
        comparisonArrowSizeUnits,
        /** End Comparison Arrow Size */

        /** Start Comparison Overlay Color */
        compareOverlayBgColorSwitcher,
        compareOverlayNormalBackgroundType,
        compareOverlayNormalClassicColor,
        compareOverlayNormalGradientColor,
        compareOverlayNormalCustomGradientSwitcher,
        compareOverlayNormalCustomGradientInputValue,
        compareOverlayHoverBackgroundType,
        compareOverlayHoverClassicColor,
        compareOverlayHoverGradientColor,
        compareOverlayHoverCustomGradientSwitcher,
        compareOverlayHoverCustomGradientInputValue,
        /** End Comparison Overlay Color */

        /** Start Comparison Background */
        comparisonBgColorSwitcher,
        comparisonBgType,
        comparisonBgClassicColor,
        comparisonBgGradientColor,
        comparisonBgCustomGradientSwitcher,
        comparisonBgCustomGradientInputValue,
        comparisonBgImageUrl,
        comparisonBgImageAlt,
        comparisonBgImageID,
        comparisonBgImagePosition,
        comparisonBgImageAttachment,
        comparisonBgImageRepeat,
        comparisonBgImageSize,
        comparisonBgHoverType,
        comparisonBgHoverClassicColor,
        comparisonBgHoverGradientColor,
        comparisonBgHoverCustomGradientSwitcher,
        comparisonBgHoverCustomGradientInputValue,
        comparisonBgHoverImageUrl,
        comparisonBgHoverImageAlt,
        comparisonBgHoverImageID,
        comparisonBgHoverImagePosition,
        comparisonBgHoverImageAttachment,
        comparisonBgHoverImageRepeat,
        comparisonBgHoverImageSize,
        /** End Comparison Background */

        /** Start Wrapper ID */
        comparisonWraperID,
        /** End Wrapper ID */

        /** Start Wrapper Class */
        comparisonWraperClass,
        /** End Wrapper Class */

        comparisonGlobalZIndex,

    } = attributes;

    /** Default margin for Comparison */
    const comparisonMarginDesktopWidth = `${comparisonMarginDesktop?.top}${comparisonMarginUnits?.Desktop} ${comparisonMarginDesktop?.right}${comparisonMarginUnits?.Desktop} ${comparisonMarginDesktop?.bottom}${comparisonMarginUnits?.Desktop} ${comparisonMarginDesktop?.left}${comparisonMarginUnits?.Desktop}`;
    const comparisonMarginTabletWidth = `${comparisonMarginTablet?.top}${comparisonMarginUnits?.Tablet} ${comparisonMarginTablet?.right}${comparisonMarginUnits?.Tablet} ${comparisonMarginTablet?.bottom}${comparisonMarginUnits?.Tablet} ${comparisonMarginTablet?.left}${comparisonMarginUnits?.Tablet}`;
    const comparisonMarginMobileWidth = `${comparisonMarginMobile?.top}${comparisonMarginUnits?.Mobile} ${comparisonMarginMobile?.right}${comparisonMarginUnits?.Mobile} ${comparisonMarginMobile?.bottom}${comparisonMarginUnits?.Mobile} ${comparisonMarginMobile?.left}${comparisonMarginUnits?.Mobile}`;

    /** Default padding for Comparison */
    const comparisonPaddingDesktopWidth = `${comparisonPaddingDesktop?.top}${comparisonPaddingUnits?.Desktop} ${comparisonPaddingDesktop?.right}${comparisonPaddingUnits?.Desktop} ${comparisonPaddingDesktop?.bottom}${comparisonPaddingUnits?.Desktop} ${comparisonPaddingDesktop?.left}${comparisonPaddingUnits?.Desktop}`;
    const comparisonPaddingTabletWidth = `${comparisonPaddingTablet?.top}${comparisonPaddingUnits?.Tablet} ${comparisonPaddingTablet?.right}${comparisonPaddingUnits?.Tablet} ${comparisonPaddingTablet?.bottom}${comparisonPaddingUnits?.Tablet} ${comparisonPaddingTablet?.left}${comparisonPaddingUnits?.Tablet}`;
    const comparisonPaddingMobileWidth = `${comparisonPaddingMobile?.top}${comparisonPaddingUnits?.Mobile} ${comparisonPaddingMobile?.right}${comparisonPaddingUnits?.Mobile} ${comparisonPaddingMobile?.bottom}${comparisonPaddingUnits?.Mobile} ${comparisonPaddingMobile?.left}${comparisonPaddingUnits?.Mobile}`;

    /** Default border for Comparison */
    const comparisonBorderDesktopWidth = `${comparisonBorderDesktop?.top}${comparisonBorderUnits?.Desktop} ${comparisonBorderDesktop?.right}${comparisonBorderUnits?.Desktop} ${comparisonBorderDesktop?.bottom}${comparisonBorderUnits?.Desktop} ${comparisonBorderDesktop?.left}${comparisonBorderUnits?.Desktop}`;
    const comparisonBorderTabletWidth = `${comparisonBorderTablet?.top}${comparisonBorderUnits?.Tablet} ${comparisonBorderTablet?.right}${comparisonBorderUnits?.Tablet} ${comparisonBorderTablet?.bottom}${comparisonBorderUnits?.Tablet} ${comparisonBorderTablet?.left}${comparisonBorderUnits?.Tablet}`;
    const comparisonBorderMobileWidth = `${comparisonBorderMobile?.top}${comparisonBorderUnits?.Mobile} ${comparisonBorderMobile?.right}${comparisonBorderUnits?.Mobile} ${comparisonBorderMobile?.bottom}${comparisonBorderUnits?.Mobile} ${comparisonBorderMobile?.left}${comparisonBorderUnits?.Mobile}`;

    /** Default border radius for Comparison */
    const comparisonBorderRadiusDesktopWidth = `${comparisonBorderRadiusDesktop?.top}${comparisonBorderRadiusUnits?.Desktop} ${comparisonBorderRadiusDesktop?.right}${comparisonBorderRadiusUnits?.Desktop} ${comparisonBorderRadiusDesktop?.bottom}${comparisonBorderRadiusUnits?.Desktop} ${comparisonBorderRadiusDesktop?.left}${comparisonBorderRadiusUnits?.Desktop}`;
    const comparisonBorderRadiusTabletWidth = `${comparisonBorderRadiusTablet?.top}${comparisonBorderRadiusUnits?.Tablet} ${comparisonBorderRadiusTablet?.right}${comparisonBorderRadiusUnits?.Tablet} ${comparisonBorderRadiusTablet?.bottom}${comparisonBorderRadiusUnits?.Tablet} ${comparisonBorderRadiusTablet?.left}${comparisonBorderRadiusUnits?.Tablet}`;
    const comparisonBorderRadiusMobileWidth = `${comparisonBorderRadiusMobile?.top}${comparisonBorderRadiusUnits?.Mobile} ${comparisonBorderRadiusMobile?.right}${comparisonBorderRadiusUnits?.Mobile} ${comparisonBorderRadiusMobile?.bottom}${comparisonBorderRadiusUnits?.Mobile} ${comparisonBorderRadiusMobile?.left}${comparisonBorderRadiusUnits?.Mobile}`;

    /** Default border radius for Comparison Labels */
    const comparisonLabelsBorderRadiusDesktopWidth = `${comparisonLabelsBorderRadiusDesktop?.top}${comparisonLabelsBorderRadiusUnits?.Desktop} ${comparisonLabelsBorderRadiusDesktop?.right}${comparisonLabelsBorderRadiusUnits?.Desktop} ${comparisonLabelsBorderRadiusDesktop?.bottom}${comparisonLabelsBorderRadiusUnits?.Desktop} ${comparisonLabelsBorderRadiusDesktop?.left}${comparisonLabelsBorderRadiusUnits?.Desktop}`;
    const comparisonLabelsBorderRadiusTabletWidth = `${comparisonLabelsBorderRadiusTablet?.top}${comparisonLabelsBorderRadiusUnits?.Tablet} ${comparisonLabelsBorderRadiusTablet?.right}${comparisonLabelsBorderRadiusUnits?.Tablet} ${comparisonLabelsBorderRadiusTablet?.bottom}${comparisonLabelsBorderRadiusUnits?.Tablet} ${comparisonLabelsBorderRadiusTablet?.left}${comparisonLabelsBorderRadiusUnits?.Tablet}`;
    const comparisonLabelsBorderRadiusMobileWidth = `${comparisonLabelsBorderRadiusMobile?.top}${comparisonLabelsBorderRadiusUnits?.Mobile} ${comparisonLabelsBorderRadiusMobile?.right}${comparisonLabelsBorderRadiusUnits?.Mobile} ${comparisonLabelsBorderRadiusMobile?.bottom}${comparisonLabelsBorderRadiusUnits?.Mobile} ${comparisonLabelsBorderRadiusMobile?.left}${comparisonLabelsBorderRadiusUnits?.Mobile}`;

    /** Default padding for Comparison Labels */
    const comparisonLabelsPaddingDesktopWidth = `${comparisonLabelsPaddingDesktop?.top}${comparisonLabelsPaddingUnits?.Desktop} ${comparisonLabelsPaddingDesktop?.right}${comparisonLabelsPaddingUnits?.Desktop} ${comparisonLabelsPaddingDesktop?.bottom}${comparisonLabelsPaddingUnits?.Desktop} ${comparisonLabelsPaddingDesktop?.left}${comparisonLabelsPaddingUnits?.Desktop}`;
    const comparisonLabelsPaddingTabletWidth = `${comparisonLabelsPaddingTablet?.top}${comparisonLabelsPaddingUnits?.Tablet} ${comparisonLabelsPaddingTablet?.right}${comparisonLabelsPaddingUnits?.Tablet} ${comparisonLabelsPaddingTablet?.bottom}${comparisonLabelsPaddingUnits?.Tablet} ${comparisonLabelsPaddingTablet?.left}${comparisonLabelsPaddingUnits?.Tablet}`;
    const comparisonLabelsPaddingMobileWidth = `${comparisonLabelsPaddingMobile?.top}${comparisonLabelsPaddingUnits?.Mobile} ${comparisonLabelsPaddingMobile?.right}${comparisonLabelsPaddingUnits?.Mobile} ${comparisonLabelsPaddingMobile?.bottom}${comparisonLabelsPaddingUnits?.Mobile} ${comparisonLabelsPaddingMobile?.left}${comparisonLabelsPaddingUnits?.Mobile}`;

    /** Default border radius for Back To Top */
    const comparisonHandlerBorderRadiusDesktopWidth = `${comparisonHandlerBorderRadiusDesktop?.top}${comparisonHandlerBorderRadiusUnits?.Desktop} ${comparisonHandlerBorderRadiusDesktop?.right}${comparisonHandlerBorderRadiusUnits?.Desktop} ${comparisonHandlerBorderRadiusDesktop?.bottom}${comparisonHandlerBorderRadiusUnits?.Desktop} ${comparisonHandlerBorderRadiusDesktop?.left}${comparisonHandlerBorderRadiusUnits?.Desktop}`;
    const comparisonHandlerBorderRadiusTabletWidth = `${comparisonHandlerBorderRadiusTablet?.top}${comparisonHandlerBorderRadiusUnits?.Tablet} ${comparisonHandlerBorderRadiusTablet?.right}${comparisonHandlerBorderRadiusUnits?.Tablet} ${comparisonHandlerBorderRadiusTablet?.bottom}${comparisonHandlerBorderRadiusUnits?.Tablet} ${comparisonHandlerBorderRadiusTablet?.left}${comparisonHandlerBorderRadiusUnits?.Tablet}`;
    const comparisonHandlerBorderRadiusMobileWidth = `${comparisonHandlerBorderRadiusMobile?.top}${comparisonHandlerBorderRadiusUnits?.Mobile} ${comparisonHandlerBorderRadiusMobile?.right}${comparisonHandlerBorderRadiusUnits?.Mobile} ${comparisonHandlerBorderRadiusMobile?.bottom}${comparisonHandlerBorderRadiusUnits?.Mobile} ${comparisonHandlerBorderRadiusMobile?.left}${comparisonHandlerBorderRadiusUnits?.Mobile}`;

    const desktopArrowHalfSize = comparisonArrowSize?.Desktop ? parseFloat(comparisonArrowSize.Desktop) / 2 : '';
    const tabletArrowHalfSize = comparisonArrowSize?.Tablet ? parseFloat(comparisonArrowSize.Tablet) / 2 : '';
    const mobileArrowHalfSize = comparisonArrowSize?.Mobile ? parseFloat(comparisonArrowSize.Mobile) / 2 : '';

    const imageComparisonBlockStyle = `

        .${blockID} .fb-image-comparison-slider-wrapper {
            ${comparisonHeight?.Desktop ? `height: ${comparisonHeight.Desktop}${comparisonHeightUnits?.Desktop || 'px'};` : ''}
        }

        .${blockID} .fb-image-comparison-label {
            ${comparisonLabelsBorderRadiusDesktopWidth && comparisonLabelsBorderRadiusDesktop?.top ? `border-radius: ${comparisonLabelsBorderRadiusDesktopWidth};` : ''}
            ${comparisonLabelsPaddingDesktopWidth && comparisonLabelsPaddingDesktop?.top ? `padding: ${comparisonLabelsPaddingDesktopWidth};` : ''}
            ${comparisonLabelsBtnTextColor ? `color: ${comparisonLabelsBtnTextColor};` : ""}
            ${comparisonLabelsGlobalTypoSwitcher.fontFamily === true &&
            comparisonLabelsGlobalTypographyData.fontFamily
            ? `font-family: ${comparisonLabelsGlobalTypographyData.fontFamily};`
            : ""
        }
            ${comparisonLabelsGlobalTypoSwitcher.fontSize === true &&
            comparisonLabelsGlobalTypographyData.fontSize
            ? `font-size: ${comparisonLabelsGlobalTypographyData.fontSize};`
            : ""
        }
            ${comparisonLabelsGlobalTypoSwitcher.fontWeight === true &&
            comparisonLabelsGlobalTypographyData.fontWeight
            ? `font-weight: ${comparisonLabelsGlobalTypographyData.fontWeight};`
            : ""
        }
            ${comparisonLabelsGlobalTypoSwitcher.fontStyle === true &&
            comparisonLabelsGlobalTypographyData.fontStyle
            ? `font-style: ${comparisonLabelsGlobalTypographyData.fontStyle};`
            : ""
        }
            ${comparisonLabelsGlobalTypoSwitcher.textTransform === true &&
            comparisonLabelsGlobalTypographyData.textTransform
            ? `text-transform: ${comparisonLabelsGlobalTypographyData.textTransform};`
            : ""
        }
            ${comparisonLabelsGlobalTypoSwitcher.textDecoration === true &&
            comparisonLabelsGlobalTypographyData.textDecoration
            ? `text-decoration: ${comparisonLabelsGlobalTypographyData.textDecoration};`
            : ""
        }
            ${comparisonLabelsGlobalTypoSwitcher.letterSpacing === true &&
            comparisonLabelsGlobalTypographyData.letterSpacing
            ? `letter-spacing: ${comparisonLabelsGlobalTypographyData.letterSpacing};`
            : ""
        }
            ${comparisonLabelsGlobalTypoSwitcher.lineHeight === true &&
            comparisonLabelsGlobalTypographyData.lineHeight
            ? `line-height: ${comparisonLabelsGlobalTypographyData.lineHeight};`
            : ""
        }

           ${comparisonLabelsGlobalTypoSwitcher.fontFamily === false &&
            comparisonLabelsFontFamily &&
            comparisonLabelsFontFamily !== "Default"
            ? `font-family: ${comparisonLabelsFontFamily};`
            : ""
        }
           ${comparisonLabelsGlobalTypoSwitcher.fontSize === false &&
            comparisonLabelsFontSize.Desktop &&
            comparisonLabelsFontSizeUnits.Desktop
            ? `font-size: ${comparisonLabelsFontSize.Desktop}${comparisonLabelsFontSizeUnits.Desktop};`
            : ""
        }
           ${comparisonLabelsGlobalTypoSwitcher.fontWeight === false &&
            comparisonLabelsFontWeight
            ? `font-weight: ${comparisonLabelsFontWeight};`
            : ""
        }
           ${comparisonLabelsGlobalTypoSwitcher.fontStyle === false &&
            comparisonLabelsFontStyle
            ? `font-style: ${comparisonLabelsFontStyle};`
            : ""
        }
           ${comparisonLabelsGlobalTypoSwitcher.textTransform === false &&
            comparisonLabelsTextTransform
            ? `text-transform: ${comparisonLabelsTextTransform};`
            : ""
        }
           ${comparisonLabelsGlobalTypoSwitcher.textDecoration === false &&
            comparisonLabelsTextDecoration
            ? `text-decoration: ${comparisonLabelsTextDecoration};`
            : ""
        }
           ${comparisonLabelsGlobalTypoSwitcher.letterSpacing === false &&
            comparisonLabelsLetterSpacing.Desktop &&
            comparisonLabelsLetterSpacingUnits.Desktop
            ? `letter-spacing: ${comparisonLabelsLetterSpacing.Desktop}${comparisonLabelsLetterSpacingUnits.Desktop};`
            : ""
        }
           ${comparisonLabelsGlobalTypoSwitcher.lineHeight === false &&
            comparisonLabelsLineHeight.Desktop &&
            comparisonLabelsLineHeightUnits.Desktop
            ? `line-height: ${comparisonLabelsLineHeight.Desktop}${comparisonLabelsLineHeightUnits.Desktop};`
            : ""
        }

        ${comparisonLabelsNormalBackgroundType === 'gradient' ? `  
            ${comparisonLabelsNormalCustomGradientSwitcher && comparisonLabelsNormalCustomGradientInputValue ? `background: ${comparisonLabelsNormalCustomGradientInputValue};` : `background: ${comparisonLabelsNormalGradientColor};`}
        `: `
            ${comparisonLabelsNormalClassicColor ? `background: ${comparisonLabelsNormalClassicColor};` : ''}
        `}
        }

        .${blockID} .fb-image-comparison-label:hover {
            ${comparisonLabelsBtnTextHoverColor ? `color: ${comparisonLabelsBtnTextHoverColor};` : ""}
            ${comparisonLabelsHoverBackgroundType === 'gradient' ? `
                ${comparisonLabelsHoverCustomGradientSwitcher && comparisonLabelsHoverCustomGradientInputValue ? `background: ${comparisonLabelsHoverCustomGradientInputValue};` : `background: ${comparisonLabelsHoverGradientColor};`}
            `: `
                ${comparisonLabelsHoverClassicColor ? `background: ${comparisonLabelsHoverClassicColor};` : ''}
            `}
        }

        .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider {
            ${comparisonHandlerColor ? `border-color: ${comparisonHandlerColor};` : ''}    
            ${comparisonHandlerBorderRadiusDesktopWidth && comparisonHandlerBorderRadiusDesktop?.top ? `border-radius: ${comparisonHandlerBorderRadiusDesktopWidth};` : ''}    
            ${comparisonHandlerSize?.Desktop ? `width: ${comparisonHandlerSize.Desktop}${comparisonHandlerSizeUnits?.Desktop || 'px'};` : ''}
            ${comparisonHandlerSize?.Desktop ? `height: ${comparisonHandlerSize.Desktop}${comparisonHandlerSizeUnits?.Desktop || 'px'};` : ''}
        }

        .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider:hover {
            ${comparisonHandlerHoverColor ? `border-color: ${comparisonHandlerHoverColor};` : ''}
        }

        .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider::before {
             ${comparisonDragDirection === 'vertical'
            ? (comparisonDividerWidth?.Desktop ? `height: ${comparisonDividerWidth.Desktop}${comparisonDividerWidthUnits?.Desktop || 'px'}; width: auto;` : '')
            : (comparisonDividerWidth?.Desktop ? `width: ${comparisonDividerWidth.Desktop}${comparisonDividerWidthUnits?.Desktop || 'px'}; height: auto;` : '')
        }
             ${comparisonDividerColor ? `background: ${comparisonDividerColor};` : ''}    
        }

        .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider:hover::before {
             ${comparisonDividerHoverColor ? `background: ${comparisonDividerHoverColor};` : ''}
        }

        .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider .fb-arrow-left {
             ${desktopArrowHalfSize ? `border-top-width: ${desktopArrowHalfSize}${comparisonArrowSizeUnits?.Desktop || 'px'};` : ''}
             ${desktopArrowHalfSize ? `border-bottom-width: ${desktopArrowHalfSize}${comparisonArrowSizeUnits?.Desktop || 'px'};` : ''}
             ${comparisonArrowSize?.Desktop ? `border-right-width: ${comparisonArrowSize.Desktop}${comparisonArrowSizeUnits?.Desktop || 'px'};` : ''}
             ${comparisonArrowColor ? `border-right-color: ${comparisonArrowColor};` : ''}
        }

        .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider .fb-arrow-right {
             ${desktopArrowHalfSize ? `border-top-width: ${desktopArrowHalfSize}${comparisonArrowSizeUnits?.Desktop || 'px'};` : ''}
             ${desktopArrowHalfSize ? `border-bottom-width: ${desktopArrowHalfSize}${comparisonArrowSizeUnits?.Desktop || 'px'};` : ''}
             ${comparisonArrowSize?.Desktop ? `border-left-width: ${comparisonArrowSize.Desktop}${comparisonArrowSizeUnits?.Desktop || 'px'};` : ''}
             ${comparisonArrowColor ? `border-left-color: ${comparisonArrowColor};` : ''}
        }

        .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider:hover .fb-arrow-left {
             ${comparisonArrowHoverColor ? `border-right-color: ${comparisonArrowHoverColor};` : ''}
        }

        .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider:hover .fb-arrow-right {
             ${comparisonArrowHoverColor ? `border-left-color: ${comparisonArrowHoverColor};` : ''}
        }

        .${blockID} .fb-image-comparison-slider-wrapper::before{
            ${compareOverlayHoverBackgroundType === 'gradient' ? `
                ${compareOverlayHoverCustomGradientSwitcher && compareOverlayHoverCustomGradientInputValue ? `background: ${compareOverlayHoverCustomGradientInputValue};` : `background: ${compareOverlayHoverGradientColor};`}
            `: `
                ${compareOverlayHoverClassicColor ? `background: ${compareOverlayHoverClassicColor};` : ''}
            `}        
        } 

        .${blockID} .fb-image-comparison-slider-wrapper::after{
            ${compareOverlayNormalBackgroundType === 'gradient' ? `  
                ${compareOverlayNormalCustomGradientSwitcher && compareOverlayNormalCustomGradientInputValue ? `background: ${compareOverlayNormalCustomGradientInputValue};` : `background: ${compareOverlayNormalGradientColor};`}
            `: `
                ${compareOverlayNormalClassicColor ? `background: ${compareOverlayNormalClassicColor};` : ''}
            `}       
        } 

        .fb-image-comparison-main-wrapper.${blockID} {
            ${comparisonBgType === "gradient"
            ? `background: ${comparisonBgCustomGradientSwitcher && comparisonBgCustomGradientInputValue
                ? comparisonBgCustomGradientInputValue
                : comparisonBgGradientColor
            };`
            : comparisonBgImageUrl !== undefined && comparisonBgImageUrl !== null && comparisonBgImageUrl !== ""
                ? `
                    ${comparisonBgImageUrl !== undefined ? `background-image: url(${comparisonBgImageUrl});` : ''}
                    ${comparisonBgImagePosition !== undefined ? `background-position: ${comparisonBgImagePosition};` : ''}
                    ${comparisonBgImageAttachment !== undefined ? `background-attachment: ${comparisonBgImageAttachment};` : ''}
                    ${comparisonBgImageRepeat !== undefined ? `background-repeat: ${comparisonBgImageRepeat};` : ''}
                    ${comparisonBgImageSize !== undefined ? `background-size: ${comparisonBgImageSize};` : ''}
                    `
                : comparisonBgClassicColor ? `background: ${comparisonBgClassicColor};` : ''
        }
            ${comparisonMarginDesktopWidth && comparisonMarginDesktop?.top ? `margin: ${comparisonMarginDesktopWidth};` : ''} 
            ${comparisonPaddingDesktopWidth && comparisonPaddingDesktop?.top ? `padding: ${comparisonPaddingDesktopWidth};` : ''} 
            ${comparisonBorder ? `border: ${comparisonBorder};` : ''} 
            ${comparisonBorderDesktopWidth && comparisonBorderDesktop?.top ? `border-width: ${comparisonBorderDesktopWidth};` : ''}
            ${comparisonBorderRadiusDesktopWidth && comparisonBorderRadiusDesktop?.top ? `border-radius: ${comparisonBorderRadiusDesktopWidth};` : ''}
            ${comparisonBorderColor ? `border-color: ${comparisonBorderColor};` : ''}
            ${comparisonBoxShadowCssValue ? `box-shadow: ${comparisonBoxShadowCssValue};` : ''}
        }

        .fb-image-comparison-main-wrapper.${blockID}:hover{
            ${comparisonBgHoverType === "gradient"
            ? `background: ${comparisonBgHoverCustomGradientSwitcher && comparisonBgHoverCustomGradientInputValue
                ? comparisonBgHoverCustomGradientInputValue
                : comparisonBgHoverGradientColor
            };`
            : comparisonBgHoverImageUrl !== undefined && comparisonBgHoverImageUrl !== null && comparisonBgHoverImageUrl !== ""
                ? `
                    ${comparisonBgHoverImageUrl !== undefined ? `background-image: url(${comparisonBgHoverImageUrl});` : ''}
                    ${comparisonBgHoverImagePosition !== undefined ? `background-position: ${comparisonBgHoverImagePosition};` : ''}
                    ${comparisonBgHoverImageAttachment !== undefined ? `background-attachment: ${comparisonBgHoverImageAttachment};` : ''}
                    ${comparisonBgHoverImageRepeat !== undefined ? `background-repeat: ${comparisonBgHoverImageRepeat};` : ''}
                    ${comparisonBgHoverImageSize !== undefined ? `background-size: ${comparisonBgHoverImageSize};` : ''}
                    `
                : comparisonBgHoverClassicColor ? `background: ${comparisonBgHoverClassicColor};` : ''
            }
            ${comparisonBorderHoverColor ? `border-color: ${comparisonBorderHoverColor};` : ''}
            ${comparisonBoxShadowHoverCssValue ? `box-shadow: ${comparisonBoxShadowHoverCssValue};` : ''}
        }

        @media only screen and (max-width: 1024px) {
            .${blockID} .fb-image-comparison-slider-wrapper {
                ${comparisonHeight?.Tablet ? `height: ${comparisonHeight.Tablet}${comparisonHeightUnits?.Tablet || 'px'};` : ''}
            }
            
            .fb-image-comparison-main-wrapper.${blockID} {
                ${comparisonMarginTabletWidth && comparisonMarginTablet?.top ? `margin: ${comparisonMarginTabletWidth};` : ''} 
                ${comparisonPaddingTabletWidth && comparisonPaddingTablet?.top ? `padding: ${comparisonPaddingTabletWidth};` : ''} 
                ${comparisonBorderTabletWidth && comparisonBorderTablet?.top ? `border-width: ${comparisonBorderTabletWidth};` : ''}
                ${comparisonBorderRadiusTabletWidth && comparisonBorderRadiusTablet?.top ? `border-radius: ${comparisonBorderRadiusTabletWidth};` : ''}       
            }

            .${blockID} .fb-image-comparison-label {
                ${comparisonLabelsPaddingTabletWidth && comparisonLabelsPaddingTablet?.top ? `padding: ${comparisonLabelsPaddingTabletWidth};` : ''}
                ${comparisonLabelsBorderRadiusTabletWidth && comparisonLabelsBorderRadiusTablet?.top ? `border-radius: ${comparisonLabelsBorderRadiusTabletWidth};` : ''}
            }

            .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider {
                ${comparisonHandlerBorderRadiusTabletWidth && comparisonHandlerBorderRadiusTablet?.top ? `border-radius: ${comparisonHandlerBorderRadiusTabletWidth};` : ''}    
                ${comparisonHandlerSize?.Tablet ? `width: ${comparisonHandlerSize.Tablet}${comparisonHandlerSizeUnits?.Tablet || 'px'};` : ''}
                ${comparisonHandlerSize?.Tablet ? `height: ${comparisonHandlerSize.Tablet}${comparisonHandlerSizeUnits?.Tablet || 'px'};` : ''}
            }

            .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider::before {
                 ${comparisonDragDirection === 'vertical'
            ? (comparisonDividerWidth?.Tablet ? `height: ${comparisonDividerWidth.Tablet}${comparisonDividerWidthUnits?.Tablet || 'px'};` : '')
            : (comparisonDividerWidth?.Tablet ? `width: ${comparisonDividerWidth.Tablet}${comparisonDividerWidthUnits?.Tablet || 'px'};` : '')
        }
            }

            .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider .fb-arrow-left {
                 ${tabletArrowHalfSize ? `border-top-width: ${tabletArrowHalfSize}${comparisonArrowSizeUnits?.Tablet || 'px'};` : ''}
                 ${tabletArrowHalfSize ? `border-bottom-width: ${tabletArrowHalfSize}${comparisonArrowSizeUnits?.Tablet || 'px'};` : ''}
                 ${comparisonArrowSize?.Tablet ? `border-right-width: ${comparisonArrowSize.Tablet}${comparisonArrowSizeUnits?.Tablet || 'px'};` : ''}
            }

            .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider .fb-arrow-right {
                 ${tabletArrowHalfSize ? `border-top-width: ${tabletArrowHalfSize}${comparisonArrowSizeUnits?.Tablet || 'px'};` : ''}
                 ${tabletArrowHalfSize ? `border-bottom-width: ${tabletArrowHalfSize}${comparisonArrowSizeUnits?.Tablet || 'px'};` : ''}
                 ${comparisonArrowSize?.Tablet ? `border-left-width: ${comparisonArrowSize.Tablet}${comparisonArrowSizeUnits?.Tablet || 'px'};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockID} .fb-image-comparison-slider-wrapper {
                ${comparisonHeight?.Mobile ? `height: ${comparisonHeight.Mobile}${comparisonHeightUnits?.Mobile || 'px'};` : ''}
            }

            .fb-image-comparison-main-wrapper.${blockID} {
                ${comparisonMarginMobileWidth && comparisonMarginMobile?.top ? `margin: ${comparisonMarginMobileWidth};` : ''} 
                ${comparisonPaddingMobileWidth && comparisonPaddingMobile?.top ? `padding: ${comparisonPaddingMobileWidth};` : ''} 
                ${comparisonBorderMobileWidth && comparisonBorderTablet?.top ? `border-width: ${comparisonBorderMobileWidth};` : ''}
                ${comparisonBorderRadiusMobileWidth && comparisonBorderRadiusTablet?.top ? `border-radius: ${comparisonBorderRadiusMobileWidth};` : ''}
            }

            .${blockID} .fb-image-comparison-label {
                ${comparisonLabelsPaddingMobileWidth && comparisonLabelsPaddingMobile?.top ? `padding: ${comparisonLabelsPaddingMobileWidth};` : ''}
                ${comparisonLabelsBorderRadiusMobileWidth && comparisonLabelsBorderRadiusMobile?.top ? `border-radius: ${comparisonLabelsBorderRadiusMobileWidth};` : ''}
            }

            .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider {
                ${comparisonHandlerBorderRadiusMobileWidth && comparisonHandlerBorderRadiusMobile?.top ? `border-radius: ${comparisonHandlerBorderRadiusMobileWidth};` : ''}    
                ${comparisonHandlerSize?.Mobile ? `width: ${comparisonHandlerSize.Mobile}${comparisonHandlerSizeUnits?.Mobile || 'px'};` : ''}
                ${comparisonHandlerSize?.Mobile ? `height: ${comparisonHandlerSize.Mobile}${comparisonHandlerSizeUnits?.Mobile || 'px'};` : ''}
            }

            .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider::before {
                 ${comparisonDragDirection === 'vertical'
            ? (comparisonDividerWidth?.Mobile ? `height: ${comparisonDividerWidth.Mobile}${comparisonDividerWidthUnits?.Mobile || 'px'};` : '')
            : (comparisonDividerWidth?.Mobile ? `width: ${comparisonDividerWidth.Mobile}${comparisonDividerWidthUnits?.Mobile || 'px'};` : '')
        }
            }

            .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider .fb-arrow-left {
                 ${mobileArrowHalfSize ? `border-top-width: ${mobileArrowHalfSize}${comparisonArrowSizeUnits?.Mobile || 'px'};` : ''}
                 ${mobileArrowHalfSize ? `border-bottom-width: ${mobileArrowHalfSize}${comparisonArrowSizeUnits?.Mobile || 'px'};` : ''}
                 ${comparisonArrowSize?.Mobile ? `border-right-width: ${comparisonArrowSize.Mobile}${comparisonArrowSizeUnits?.Mobile || 'px'};` : ''}
            }

            .${blockID} .fb-image-comparison-slider-wrapper .fb-image-comparison-slider .fb-arrow-right {
                 ${mobileArrowHalfSize ? `border-top-width: ${mobileArrowHalfSize}${comparisonArrowSizeUnits?.Mobile || 'px'};` : ''}
                 ${mobileArrowHalfSize ? `border-bottom-width: ${mobileArrowHalfSize}${comparisonArrowSizeUnits?.Mobile || 'px'};` : ''}
                 ${comparisonArrowSize?.Mobile ? `border-left-width: ${comparisonArrowSize.Mobile}${comparisonArrowSizeUnits?.Mobile || 'px'};` : ''}
            }
        }
    `;

    const customCss = getCustomCss(comparisonCustomCSS, `.${blockID}`);
    return `${imageComparisonBlockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}

export default imageComparisonStyle;
