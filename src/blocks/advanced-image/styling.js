/**
 * Advanced Image Block - Style Generation
 * Returns Dynamic Generated CSS
 */
import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateAdvancedImageStyle = (attributes) => {
    const {
		blockID,
		// deviceType,
		imageStyle,
		displayCaption,
		imageBorder,
		imageBorderColorSwitcher,
		imageBorderColor,
		imageBorderHoverColor,
		imageBorderUnits,
		imageBorderDesktop,
		imageBorderTablet,
		imageBorderMobile,
		imageBorderLink,
		imageBorderRadiusUnits,
		imageBorderRadiusDesktop,
		imageBorderRadiusTablet,
		imageBorderRadiusMobile,
		imageBorderRadiusLink,
		imageBoxShadowValues,
		imageBoxShadowCssValue,
		autoHeightSwitch,
		autoFitSwitch,
		linkSwitch,
		captionAlignment,
		mediaHeight,
		mediaSize,
		mediaSizeUnits,
		mediaHeightUnits,
		advancedImageUrl,
		linkUrl,
		linkTargetUrl,
		imageHover,
		imageFit,
		displayTitle,
		titleText,
		titleTag,
		headingGlobalTypoSwitcher,
		headingGlobalTypographyData,
		headingGlobalTypoType,
		headingGlobalTypoOption,
		headingFontFamily,
		headingFontSize,
		headingFontSizeUnits,
		headingFontWeight,
		headingFontStyle,
		headingTextTransform,
		headingTextDecoration,
		headingLetterSpacing,
		headingLetterSpacingUnits,
		headingLineHeight,
		headingLineHeightUnits,
		HeadingColorSwitcher,
		HeadingColor,
		HeadingHoverColor,
		HeadingBackgroundColor,
		HeadingBorder,
		HeadingBorderColor,
		HeadingBorderHoverColor,
		HeadingPaddingUnits,
		HeadingDesktopPadding,
		HeadingTabPadding,
		HeadingMobilePadding,
		HeadingPaddingLink,
		HeadingMarginUnits,
		HeadingDesktopMargin,
		HeadingTabMargin,
		HeadingMobileMargin,
		HeadingMarginLink,
		titlePosition,
		boxGlobalBoxShadowValues,
		boxGlobalBoxShadowCssValue,
		testBgColorSwitcher,
		testBackgroundType,
		testClassicColor,
		testGradientColor,
		testCustomGradientSwitcher,
		testCustomGradientInputValue,
		testBackgroundImageUrl,
		testBackgroundImageAlt,
		testBackgroundImageID,
		testBackgroundImagePosition,
		testBackgroundImageAttachment,
		testBackgroundImageSize,
		testBackgroundImageRepeat,
		hoverBackgroundType,
		hoverClassicColor,
		hoverGradientColor,
		hoverCustomGradientSwitcher,
		hoverCustomGradientInputValue,
		hoverBackgroundImageUrl,
		hoverBackgroundImageAlt,
		hoverBackgroundImageID,
		hoverBackgroundImagePosition,
		hoverBackgroundImageAttachment,
		hoverBackgroundImageSize,
		hoverBackgroundImageRepeat,
		globalPaddingUnits,
		globalPaddingDesktop,
		globalPaddingTablet,
		globalPaddingMobile,
		globalPaddingLink,
		globalMarginUnits,
		globalMarginDesktop,
		globalMarginTablet,
		globalMarginMobile,
		globalMarginLink,
		globalBorder,
		globalBorderColorSwitcher,
		globalBorderColor,
		globalBorderHoverColor,
		globalBorderUnits,
		globalBorderDesktop,
		globalBorderTablet,
		globalBorderMobile,
		globalBorderLink,
		globalBorderRadiusUnits,
		globalBorderRadiusDesktop,
		globalBorderRadiusTablet,
		globalBorderRadiusMobile,
		globalBorderRadiusLink,
		globalZIndex,
		advancedImageOverflow,
		blockStyle,
		showOverlay,

		/** Overlay Backgroud **/
		overlayBgColorSwitcher,
		overlayBackgroundType,
		overlayClassicColor,
		overlayGradientColor,
		overlayCustomGradientSwitcher,
		overlayCustomGradientInputValue,
		overlayBackgroundImageUrl,
		overlayBackgroundImagePosition,
		overlayBackgroundImageAttachment,
		overlayBackgroundImageRepeat,
		overlayBackgroundImageSize,
		overlayHoverBackgroundType,
		overlayHoverClassicColor,
		overlayHoverGradientColor,
		overlayHoverCustomGradientSwitcher,
		overlayHoverCustomGradientInputValue,
		overlayOpacity,

		advancedImageDesktopSwitcher,
		advancedImageTabletSwitcher,
		advancedImageMobileSwitcher,

		advancedImageCustomCSS,
		advancedImageGlobalWraperID,
		advancedImageGlobalWraperClass,

		// Position
		advancedImagePositionType,
		advancedImageHZOrientationType,
		advancedImageVROrientationType,
		advancedImageHZLeftOffset,
		advancedImageHZLeftOffsetUnits,
		advancedImageHZRightOffset,
		advancedImageHZRightOffsetUnits,
		advancedImageVRTopOffset,
		advancedImageVRTopOffsetUnits,
		advancedImageVRBottomOffset,
		advancedImageVRBottomOffsetUnits,

		advancedImageLazyLoadSwitcher,
		smartLazyLoadSwitcher,
		smartLazyLoadImageUrl,
		smartLazyLoadImageId,
		smartLazyLoadImageAlt,
		maskImageUrl,
		maskImageSize,
		maskImagePosition,
		maskImageRepeat,

		dynamicImageEnabled,
		dynamicImageSource,
		dynamicImagePostId,
		dynamicImagePostType,
		dynamicImagePostLabel,
		dynamicImageField,
		dynamicImageSize,
		dynamicImageFallbackUrl,
		dynamicImageFallbackAlt,
		dynamicImageFallbackId,

		dynamicImageEnableLink,
		dynamicImageLinkSource,

	} = attributes;

    /** Default padding for desktop (using desktop_padding) */
	const headingDesktopPaddingValue = `${HeadingDesktopPadding?.top}${HeadingPaddingUnits?.Desktop} ${HeadingDesktopPadding?.right}${HeadingPaddingUnits?.Desktop} ${HeadingDesktopPadding?.bottom}${HeadingPaddingUnits?.Desktop} ${HeadingDesktopPadding?.left}${HeadingPaddingUnits?.Desktop}`;
	const headingTabletPaddingValue = `${HeadingTabPadding?.top}${HeadingPaddingUnits?.Tablet} ${HeadingTabPadding?.right}${HeadingPaddingUnits?.Tablet} ${HeadingTabPadding?.bottom}${HeadingPaddingUnits?.Tablet} ${HeadingTabPadding?.left}${HeadingPaddingUnits?.Tablet}`;
	const headingMobilePaddingValue = `${HeadingMobilePadding?.top}${HeadingPaddingUnits?.Mobile} ${HeadingMobilePadding?.right}${HeadingPaddingUnits?.Mobile} ${HeadingMobilePadding?.bottom}${HeadingPaddingUnits?.Mobile} ${HeadingMobilePadding?.left}${HeadingPaddingUnits?.Mobile}`;

    /** Default padding for desktop (using desktop_padding) */
	const headingDesktopMarginValue = `${HeadingDesktopMargin?.top}${HeadingMarginUnits?.Desktop} ${HeadingDesktopMargin?.right}${HeadingMarginUnits?.Desktop} ${HeadingDesktopMargin?.bottom}${HeadingMarginUnits?.Desktop} ${HeadingDesktopMargin?.left}${HeadingMarginUnits?.Desktop}`;
	const headingTabletMarginValue = `${HeadingTabMargin?.top}${HeadingMarginUnits?.Tablet} ${HeadingTabMargin?.right}${HeadingMarginUnits?.Tablet} ${HeadingTabMargin?.bottom}${HeadingMarginUnits?.Tablet} ${HeadingTabMargin?.left}${HeadingMarginUnits?.Tablet}`;
	const headingMobileMarginValue = `${HeadingMobileMargin?.top}${HeadingMarginUnits?.Mobile} ${HeadingMobileMargin?.right}${HeadingMarginUnits?.Mobile} ${HeadingMobileMargin?.bottom}${HeadingMarginUnits?.Mobile} ${HeadingMobileMargin?.left}${HeadingMarginUnits?.Mobile}`;

    /** Default padding for desktop (using desktop_padding) */
	const imageDesktopBorder = `${imageBorderDesktop?.top}${imageBorderUnits?.Desktop} ${imageBorderDesktop?.right}${imageBorderUnits?.Desktop} ${imageBorderDesktop?.bottom}${imageBorderUnits?.Desktop} ${imageBorderDesktop?.left}${imageBorderUnits?.Desktop}`;
	const imageTabletBorder = `${imageBorderTablet?.top}${imageBorderUnits?.Tablet} ${imageBorderTablet?.right}${imageBorderUnits?.Tablet} ${imageBorderTablet?.bottom}${imageBorderUnits?.Tablet} ${imageBorderTablet?.left}${imageBorderUnits?.Tablet}`;
	const imageMobileBorder = `${imageBorderMobile?.top}${imageBorderUnits?.Mobile} ${imageBorderMobile?.right}${imageBorderUnits?.Mobile} ${imageBorderMobile?.bottom}${imageBorderUnits?.Mobile} ${imageBorderMobile?.left}${imageBorderUnits?.Mobile}`;

    /** Default border radius for desktop (using desktop_border_radius) */
	const imageDesktopBorderRadius = `${imageBorderRadiusDesktop?.top}${imageBorderRadiusUnits?.Desktop} ${imageBorderRadiusDesktop?.right}${imageBorderRadiusUnits?.Desktop} ${imageBorderRadiusDesktop?.bottom}${imageBorderRadiusUnits?.Desktop} ${imageBorderRadiusDesktop?.left}${imageBorderRadiusUnits?.Desktop}`;
	const imageTabletBorderRadius = `${imageBorderRadiusTablet?.top}${imageBorderRadiusUnits?.Tablet} ${imageBorderRadiusTablet?.right}${imageBorderRadiusUnits?.Tablet} ${imageBorderRadiusTablet?.bottom}${imageBorderRadiusUnits?.Tablet} ${imageBorderRadiusTablet?.left}${imageBorderRadiusUnits?.Tablet}`;
	const imageMobileBorderRadius = `${imageBorderRadiusMobile?.top}${imageBorderRadiusUnits?.Mobile} ${imageBorderRadiusMobile?.right}${imageBorderRadiusUnits?.Mobile} ${imageBorderRadiusMobile?.bottom}${imageBorderRadiusUnits?.Mobile} ${imageBorderRadiusMobile?.left}${imageBorderRadiusUnits?.Mobile}`;

    const globalDeskPadding = `${globalPaddingDesktop?.top}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.right}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.bottom}${globalPaddingUnits?.Desktop} ${globalPaddingDesktop?.left}${globalPaddingUnits?.Desktop}`;
	const globalTabPadding = `${globalPaddingTablet?.top}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.right}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.bottom}${globalPaddingUnits?.Tablet} ${globalPaddingTablet?.left}${globalPaddingUnits?.Tablet}`;
	const globalMobPadding = `${globalPaddingMobile?.top}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.right}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.bottom}${globalPaddingUnits?.Mobile} ${globalPaddingMobile?.left}${globalPaddingUnits?.Mobile}`;

    const globalDeskMargin = `${globalMarginDesktop?.top}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.right}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.bottom}${globalMarginUnits?.Desktop} ${globalMarginDesktop?.left}${globalMarginUnits?.Desktop}`;
	const globalTabMargin = `${globalMarginTablet?.top}${globalMarginUnits?.Tablet} ${globalMarginTablet?.right}${globalMarginUnits?.Tablet} ${globalMarginTablet?.bottom}${globalMarginUnits?.Tablet} ${globalMarginTablet?.left}${globalMarginUnits?.Tablet}`;
	const globalMobMargin = `${globalMarginMobile?.top}${globalMarginUnits?.Mobile} ${globalMarginMobile?.right}${globalMarginUnits?.Mobile} ${globalMarginMobile?.bottom}${globalMarginUnits?.Mobile} ${globalMarginMobile?.left}${globalMarginUnits?.Mobile}`;

    const globalDeskBorder = `${globalBorderDesktop?.top}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.right}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.bottom}${globalBorderUnits?.Desktop} ${globalBorderDesktop?.left}${globalBorderUnits?.Desktop}`;
	const globalTabBorder = `${globalBorderTablet?.top}${globalBorderUnits?.Tablet} ${globalBorderTablet?.right}${globalBorderUnits?.Tablet} ${globalBorderTablet?.bottom}${globalBorderUnits?.Tablet} ${globalBorderTablet?.left}${globalBorderUnits?.Tablet}`;
	const globalMobBorder = `${globalBorderMobile?.top}${globalBorderUnits?.Mobile} ${globalBorderMobile?.right}${globalBorderUnits?.Mobile} ${globalBorderMobile?.bottom}${globalBorderUnits?.Mobile} ${globalBorderMobile?.left}${globalBorderUnits?.Mobile}`;

    const globalDeskBorderRadius = `${globalBorderRadiusDesktop?.top}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.right}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.bottom}${globalBorderRadiusUnits?.Desktop} ${globalBorderRadiusDesktop?.left}${globalBorderRadiusUnits?.Desktop}`;
	const globalTabBorderRadius = `${globalBorderRadiusTablet?.top}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.right}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.bottom}${globalBorderRadiusUnits?.Tablet} ${globalBorderRadiusTablet?.left}${globalBorderRadiusUnits?.Tablet}`;
	const globalMobBorderRadius = `${globalBorderRadiusMobile?.top}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.right}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.bottom}${globalBorderRadiusUnits?.Mobile} ${globalBorderRadiusMobile?.left}${globalBorderRadiusUnits?.Mobile}`;

    const advancedImageStyle =`
        .fb-advanced-image-main-wrapper.${blockID} {
            ${advancedImagePositionType === 'default' ? `position: relative !important;` : ''}
            ${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' ? `width: 100%;` : ''}
            ${advancedImagePositionType !== 'default' ? `position: ${advancedImagePositionType} !important;` : ''}
            ${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageHZOrientationType === 'left' && advancedImageHZLeftOffset?.Desktop ? `left: ${advancedImageHZLeftOffset?.Desktop}${advancedImageHZLeftOffsetUnits?.Desktop};` : ''}
            ${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageHZOrientationType === 'right' && advancedImageHZRightOffset?.Desktop ? `right: ${advancedImageHZRightOffset?.Desktop}${advancedImageHZRightOffsetUnits?.Desktop};` : ''}
            ${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageVROrientationType === 'top' && advancedImageVRTopOffset?.Desktop ? `top: ${advancedImageVRTopOffset?.Desktop}${advancedImageVRTopOffsetUnits?.Desktop};` : ''}
            ${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageVROrientationType === 'bottom' && advancedImageVRBottomOffset?.Desktop ? `bottom: ${advancedImageVRBottomOffset?.Desktop}${advancedImageVRBottomOffsetUnits?.Desktop};` : ''}
            ${globalZIndex?.Desktop ? `z-index: ${globalZIndex?.Desktop};` : ''}
            ${advancedImageOverflow !== 'default' ? `overflow: ${advancedImageOverflow};` : ''}
        }
        .${blockID} .fb-advanced-image-wrapper{
            ${autoFitSwitch ? `display: block;` : `display: flex;`}
            flex-direction: column;
            padding: ${globalDeskPadding};	
            margin: ${globalDeskMargin};
            border: ${globalBorder};
            border-width: ${globalDeskBorder};
            border-radius: ${globalDeskBorderRadius} !important;
            ${globalBorderColor !== undefined ? `border-color: ${globalBorderColor};` : ""}
            ${boxGlobalBoxShadowCssValue ? `box-shadow: ${boxGlobalBoxShadowCssValue};` : ""}
            ${testBackgroundType === "gradient" ? ` background: ${testCustomGradientSwitcher && testCustomGradientInputValue ? testCustomGradientInputValue : testGradientColor};
            `
                : testBackgroundImageUrl && testBackgroundImageUrl !== "null"
                    ? `
            background-image: url(${testBackgroundImageUrl});
            background-position: ${testBackgroundImagePosition};
            background-attachment: ${testBackgroundImageAttachment};
            background-repeat: ${testBackgroundImageRepeat};
            background-size: ${testBackgroundImageSize};`
                    : testClassicColor ? `background: ${testClassicColor}` : ''
            }
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-advanced-image-wrapper:hover{
            ${globalBorderHoverColor !== undefined ? `border-color: ${globalBorderHoverColor};` : ""}
            ${hoverBackgroundType === "gradient" ? `background: ${hoverCustomGradientSwitcher && hoverCustomGradientInputValue ? hoverCustomGradientInputValue : hoverGradientColor};` : hoverBackgroundImageUrl && hoverBackgroundImageUrl !== "null" ? `
            ${hoverBackgroundImageUrl ? `background-image: url(${hoverBackgroundImageUrl});` : ""}
            ${hoverBackgroundImagePosition ? `background-position: ${hoverBackgroundImagePosition};` : ""}
            ${hoverBackgroundImageAttachment ? `background-attachment: ${hoverBackgroundImageAttachment};` : ""}
            ${hoverBackgroundImageRepeat ? `background-repeat: ${hoverBackgroundImageRepeat};` : ""}
            ${hoverBackgroundImageSize ? `background-size: ${hoverBackgroundImageSize};` : ""} `
                : hoverClassicColor ? `background: ${hoverClassicColor}` : ''
            }
        }
        .${blockID} .fb-advanced-image .fb-advanced-image-inner{
            ${mediaSize?.Desktop ? `width: ${mediaSize?.Desktop}${mediaSizeUnits?.Desktop};` : ''}
            ${!autoHeightSwitch && mediaHeight?.Desktop ? `height: ${mediaHeight?.Desktop}${mediaHeightUnits?.Desktop};` : `height: auto;`}
            ${imageBorder ? `border: ${imageBorder};` : ''}
            ${imageDesktopBorder && imageBorderDesktop?.top ? `border-width: ${imageDesktopBorder};` : ''}
            ${imageDesktopBorderRadius && imageBorderRadiusDesktop?.top ? `border-radius: ${imageDesktopBorderRadius};` : ''}
            ${imageBorderColor ? `border-color: ${imageBorderColor};` : ''}
            ${imageBoxShadowCssValue ? `box-shadow: ${imageBoxShadowCssValue};` : ''}
            ${maskImageUrl && !['square', 'octagon', 'triangle', 'rhombus', 'hexagon', 'bevel'].includes(imageStyle) && `
                -webkit-mask-image: url(${maskImageUrl});
                mask-image: url(${maskImageUrl});
                mask-size: ${maskImageSize};
                mask-position: ${maskImagePosition};
                mask-repeat: ${maskImageRepeat};
            `}
        }
        .${blockID} .fb-advanced-image .fb-advanced-image-inner:hover{
            ${imageBorderHoverColor ? `border-color: ${imageBorderHoverColor};` : ''}
        }
        .${blockID} .fb-advanced-image.overlay-simple .fb-advanced-image-inner:before{
            ${overlayBackgroundType === "gradient" ? ` background: ${overlayCustomGradientSwitcher && overlayCustomGradientInputValue ? overlayCustomGradientInputValue : overlayGradientColor};
            `
                : overlayBackgroundImageUrl && overlayBackgroundImageUrl !== "null"
                    ? `
            background-image: url(${overlayBackgroundImageUrl});
            background-position: ${overlayBackgroundImagePosition};
            background-attachment: ${overlayBackgroundImageAttachment};
            background-repeat: ${overlayBackgroundImageRepeat};
            background-size: ${overlayBackgroundImageSize};`
                    : overlayClassicColor ? `background: ${overlayClassicColor};` : ''
            }
            opacity: ${overlayOpacity};
            transition: all .3s ease-in-out;
        }
        
        .${blockID} .fb-advanced-image .fb-advanced-image-inner:hover:before{
            ${overlayHoverBackgroundType === 'gradient' ? `  
                background: ${overlayHoverCustomGradientSwitcher && overlayHoverCustomGradientInputValue ? overlayHoverCustomGradientInputValue : overlayHoverGradientColor};
            `: `
                background: ${overlayHoverClassicColor};
            `}
        }
        
        .${blockID} .fb-advanced-image-wrapper .fb-advanced-image-caption figcaption {
            text-align: ${captionAlignment};
        }
        .${blockID} .fb-advanced-image-wrapper .fb-advanced-image .fb-advanced-image-title .fb-advanced-title {
            display: block;
            ${HeadingColor ? `color: ${HeadingColor};` : ''}
            ${HeadingBackgroundColor ? `background-color: ${HeadingBackgroundColor};` : ''}

            ${headingGlobalTypoSwitcher?.fontFamily === true && headingGlobalTypographyData?.fontFamily ? `font-family: ${headingGlobalTypographyData.fontFamily};` : ''}
            ${headingGlobalTypoSwitcher?.fontSize === true && headingGlobalTypographyData?.fontSize ? `font-size: ${headingGlobalTypographyData.fontSize};` : ''}
            ${headingGlobalTypoSwitcher?.fontWeight === true && headingGlobalTypographyData?.fontWeight ? `font-weight: ${headingGlobalTypographyData.fontWeight};` : ''}
            ${headingGlobalTypoSwitcher?.fontStyle === true && headingGlobalTypographyData?.fontStyle ? `font-style: ${headingGlobalTypographyData.fontStyle};` : ''}
            ${headingGlobalTypoSwitcher?.textTransform === true && headingGlobalTypographyData?.textTransform ? `text-transform: ${headingGlobalTypographyData.textTransform};` : ''}
            ${headingGlobalTypoSwitcher?.textDecoration === true && headingGlobalTypographyData?.textDecoration ? `text-decoration: ${headingGlobalTypographyData.textDecoration};` : ''}
            ${headingGlobalTypoSwitcher?.letterSpacing === true && headingGlobalTypographyData?.letterSpacing ? `letter-spacing: ${headingGlobalTypographyData.letterSpacing};` : ''}
            ${headingGlobalTypoSwitcher?.lineHeight === true && headingGlobalTypographyData?.lineHeight ? `line-height: ${headingGlobalTypographyData.lineHeight};` : ''}

            ${headingGlobalTypoSwitcher?.fontFamily === false && headingFontFamily && headingFontFamily !== 'Default' ? `font-family: ${headingFontFamily};` : ''}
            ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Desktop && headingFontSizeUnits?.Desktop ? `font-size: ${headingFontSize?.Desktop}${headingFontSizeUnits?.Desktop};` : ''}
            ${headingGlobalTypoSwitcher?.fontWeight === false && headingFontWeight ? `font-weight: ${headingFontWeight};` : ''}
            ${headingGlobalTypoSwitcher?.fontStyle === false && headingFontStyle ? `font-style: ${headingFontStyle};` : ''}
            ${headingGlobalTypoSwitcher?.textTransform === false && headingTextTransform ? `text-transform: ${headingTextTransform};` : ''}
            ${headingGlobalTypoSwitcher?.textDecoration === false && headingTextDecoration ? `text-decoration: ${headingTextDecoration};` : ''}
            ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Desktop && headingLetterSpacingUnits?.Desktop ? `letter-spacing: ${headingLetterSpacing?.Desktop}${headingLetterSpacingUnits?.Desktop};` : ''}
            ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Desktop && headingLineHeightUnits?.Desktop ? `line-height: ${headingLineHeight?.Desktop}${headingLineHeightUnits?.Desktop};` : ''}
            
            ${headingDesktopPaddingValue && HeadingDesktopPadding?.top ? `padding: ${headingDesktopPaddingValue};` : ""}
            ${headingDesktopMarginValue && HeadingDesktopMargin?.top ? `margin: ${headingDesktopMarginValue};` : ''}
            border: ${HeadingBorder};
            ${HeadingBorderColor ? `border-color: ${HeadingBorderColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .${blockID} .fb-advanced-image-wrapper .fb-advanced-image .fb-advanced-image-title .fb-advanced-title:hover {
            ${HeadingHoverColor ? `color: ${HeadingHoverColor};` : ''}
            ${HeadingBorderHoverColor ? `background-color: ${HeadingBorderHoverColor};` : ''}
            border: ${HeadingBorderHoverColor};
        }
        @media all and (max-width: 1024px) {	
        .fb-advanced-image-main-wrapper.${blockID} {
            ${advancedImagePositionType !== 'default' ? `position: ${advancedImagePositionType};` : ''}
            ${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageHZOrientationType === 'left' && advancedImageHZLeftOffset?.Tablet ? `left: ${advancedImageHZLeftOffset?.Tablet}${advancedImageHZLeftOffsetUnits?.Tablet};` : ''}
            ${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageHZOrientationType === 'right' && advancedImageHZRightOffset?.Tablet ? `right: ${advancedImageHZRightOffset.Tablet}${advancedImageHZRightOffsetUnits.Tablet};` : ''}
            ${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageVROrientationType === 'top' && advancedImageVRTopOffset?.Tablet ? `top: ${advancedImageVRTopOffset?.Tablet}${advancedImageVRTopOffsetUnits?.Tablet};` : ''}
            ${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageVROrientationType === 'bottom' && advancedImageVRBottomOffset?.Tablet ? `bottom: ${advancedImageVRBottomOffset?.Tablet}${advancedImageVRBottomOffsetUnits?.Tablet};` : ''}
            ${globalZIndex?.Tablet ? `z-index: ${globalZIndex?.Tablet};` : ''}
        }
        .${blockID} .fb-advanced-image-wrapper {
            ${globalTabPadding && globalPaddingTablet?.top ? `padding: ${globalTabPadding};` : ''}
            ${globalTabMargin && globalMarginTablet?.top ? `margin: ${globalTabMargin};` : ''}
            ${globalTabBorder && globalBorderTablet?.top ? `border-width: ${globalTabBorder};` : ''}
            ${globalTabBorderRadius && globalBorderRadiusTablet?.top ? `border-radius: ${globalTabBorderRadius} !important;` : ''}
        }
        .${blockID} .fb-advanced-image-wrapper .fb-advanced-image .fb-advanced-image-inner {
            ${imageTabletBorder ? `border-width: ${imageTabletBorder};` : ''}
            ${imageTabletBorderRadius ? `border-radius: ${imageTabletBorderRadius};` : ''}
            ${mediaSize?.Tablet ? `width: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
            ${!autoHeightSwitch && mediaHeight?.Tablet ? `height: ${mediaHeight?.Tablet}${mediaHeightUnits?.Tablet};` : `height: auto;`}
        }
        .${blockID} .fb-advanced-image-wrapper .fb-advanced-image .fb-advanced-image-title .fb-advanced-title {
            ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Tablet && headingFontSizeUnits?.Tablet ? `font-size: ${headingFontSize?.Tablet}${headingFontSizeUnits?.Tablet};` : ''}
            ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Tablet && headingLetterSpacingUnits?.Tablet ? `letter-spacing: ${headingLetterSpacing?.Tablet}${headingLetterSpacingUnits?.Tablet};` : ''}
            ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Tablet && headingLineHeightUnits?.Tablet ? `line-height: ${headingLineHeight.Tablet}${headingLineHeightUnits.Tablet};` : ''}
            ${mediaSize?.Tablet ? `width: ${mediaSize?.Tablet}${mediaSizeUnits?.Tablet};` : ''}
            ${!autoHeightSwitch && mediaHeight?.Tablet ? `height: ${mediaHeight?.Tablet}${mediaHeightUnits?.Tablet};` : `height: auto;`}
            ${headingTabletPaddingValue && HeadingTabPadding?.top ? `padding: ${headingTabletPaddingValue};` : ''}
            ${headingTabletMarginValue && HeadingTabMargin?.top ? `margin: ${headingTabletMarginValue};` : ''}
        }
        }
        @media all and (max-width: 767px) {
        .fb-advanced-image-main-wrapper.${blockID} {
            ${advancedImagePositionType !== 'default' ? `position: ${advancedImagePositionType};` : ''}
            ${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageHZOrientationType === 'left' && advancedImageHZLeftOffset?.Mobile ? `left: ${advancedImageHZLeftOffset?.Mobile}${advancedImageHZLeftOffsetUnits?.Mobile};` : ''}
            ${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageHZOrientationType === 'right' && advancedImageHZRightOffset?.Mobile ? `right: ${advancedImageHZRightOffset?.Mobile}${advancedImageHZRightOffsetUnits?.Mobile};` : ''}
            ${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageVROrientationType === 'top' && advancedImageVRTopOffset?.Mobile ? `top: ${advancedImageVRTopOffset?.Mobile}${advancedImageVRTopOffsetUnits?.Mobile};` : ''}
            ${advancedImagePositionType !== 'default' && advancedImagePositionType !== 'relative' && advancedImageVROrientationType === 'bottom' && advancedImageVRBottomOffset?.Mobile ? `bottom: ${advancedImageVRBottomOffset?.Mobile}${advancedImageVRBottomOffsetUnits?.Mobile};` : ''}
            ${globalZIndex?.Mobile ? `z-index: ${globalZIndex?.Mobile};` : ''}
        }
        .${blockID} .fb-advanced-image-wrapper {
            ${globalZIndex?.Mobile ? `z-index: ${globalZIndex?.Mobile};` : ''}
            ${globalMobPadding && globalPaddingMobile?.top ? `padding: ${globalMobPadding};` : ''}
            ${globalMobMargin && globalMarginMobile?.top ? `margin: ${globalMobMargin};` : ''}
            ${globalMobBorder && globalBorderMobile?.top ? `border-width: ${globalMobBorder};` : ''}
            ${globalMobBorderRadius && globalBorderRadiusMobile?.top ? `border-radius: ${globalMobBorderRadius} !important;` : ''}
        }
        .${blockID} .fb-advanced-image-wrapper .fb-advanced-image .fb-advanced-image-inner {
            ${imageMobileBorder && imageBorderMobile?.top ? `border-width: ${imageMobileBorder};` : ''}
            ${imageMobileBorderRadius && imageBorderRadiusMobile?.top ? `border-radius: ${imageMobileBorderRadius};` : ''}
            ${mediaSize?.Mobile ? `width: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
            ${!autoHeightSwitch && mediaHeight?.Mobile ? `height: ${mediaHeight?.Mobile}${mediaHeightUnits?.Mobile};` : `height: auto;`}
        }
        
        .${blockID} .fb-advanced-image-wrapper .fb-advanced-image .fb-advanced-image-title .fb-advanced-title {
            ${headingGlobalTypoSwitcher?.fontSize === false && headingFontSize?.Mobile && headingFontSizeUnits?.Mobile ? `font-size: ${headingFontSize?.Mobile}${headingFontSizeUnits?.Mobile};` : ''}
            ${headingGlobalTypoSwitcher?.letterSpacing === false && headingLetterSpacing?.Mobile && headingLetterSpacingUnits?.Mobile ? `letter-spacing: ${headingLetterSpacing?.Mobile}${headingLetterSpacingUnits?.Mobile};` : ''}
            ${headingGlobalTypoSwitcher?.lineHeight === false && headingLineHeight?.Mobile && headingLineHeightUnits?.Mobile ? `line-height: ${headingLineHeight?.Mobile}${headingLineHeightUnits?.Mobile};` : ''}
            ${mediaSize?.Mobile ? `width: ${mediaSize?.Mobile}${mediaSizeUnits?.Mobile};` : ''}
            ${!autoHeightSwitch && mediaHeight?.Mobile ? `height: ${mediaHeight?.Mobile}${mediaHeightUnits?.Mobile};` : `height: auto;`}
            ${headingMobilePaddingValue && HeadingMobilePadding?.top ? `padding: ${headingMobilePaddingValue};` : ''}
            ${headingMobileMarginValue && HeadingMobileMargin?.top ? `margin: ${headingMobileMarginValue};` : ''}
        }
        }
    `;

    const customCss = getCustomCss(advancedImageCustomCSS, `.${blockID}`);
    return `${advancedImageStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateAdvancedImageStyle;