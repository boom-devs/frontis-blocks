/**
 * Image Gallery Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateImageGalleryStyle = (attributes) => {
    const { 
        blockID,
        blockStyle,
        // deviceType,

        GalleryPresetStyle,
        GalleryType,
        GalleryItems,

        GalleryItemHeight,
        GalleryItemHeightUnits,

        ImageOverlayStyle,
        ImageOverlayStyleType,
        ImageOverlayColor,

        GalleryColumnNumber,

        GalleryImageGap,
        GalleryImageGapUnits,

        GalleryButtonSwitcher,
        GalleryButtonText,
        GalleryButtonLink,

        ImageAlignment,
        ImageFitCover,

        ImageWidth,
        ImageWidthUnits,

        ImageHeight,
        ImageHeightUnits,

        GalleryButtonAlignment,
        GalleryButtonGlobalTypoSwitcher,
        GalleryButtonGlobalTypographyData,
        GalleryButtonGlobalTypoType,
        GalleryButtonGlobalTypoOption,
        GalleryButtonFontFamily,
        GalleryButtonFontSize,
        GalleryButtonFontSizeUnits,
        GalleryButtonFontWeight,
        GalleryButtonFontStyle,
        GalleryButtonTextTransform,
        GalleryButtonTextDecoration,
        GalleryButtonLetterSpacing,
        GalleryButtonLetterSpacingUnits,
        GalleryButtonLineHeight,
        GalleryButtonLineHeightUnits,
        GalleryButtonColorSwitcher,
        GalleryButtonColor,
        GalleryButtonHoverColor,
        GalleryButtonBGColorSwitcher,
        GalleryButtonBGColor,
        GalleryButtonBGHoverColor,

        ButtonBorder,
        ButtonBorderColor,
        ButtonBorderHoverColor,
        ButtonBorderColorSwitcher,

        ButtonPaddingUnits,
        ButtonDesktopPadding,
        ButtonTabPadding,
        ButtonMobilePadding,
        ButtonPaddingLink,
        ButtonMarginUnits,
        ButtonDesktopMargin,
        ButtonTabMargin,
        ButtonMobileMargin,
        ButtonMarginLink,
        ButtonBorderUnits,
        ButtonDesktopBorderWidth,
        ButtonTabBorderWidth,
        ButtonMobileBorderWidth,
        ButtonBorderLink,
        ButtonBorderRadiusUnits,
        ButtonDesktopBorderRadiusWidth,
        ButtonTabBorderRadiusWidth,
        ButtonMobileBorderRadiusWidth,
        ButtonBorderRadiusLink,
        
        GalleryZIndex,
        GalleryOverflow,
        GalleryPaddingUnits,
        GalleryDesktopPadding,
        GalleryTabPadding,
        GalleryMobilePadding,
        GalleryPaddingLink,
        GalleryMarginUnits,
        GalleryDesktopMargin,
        GalleryTabMargin,
        GalleryMobileMargin,
        GalleryMarginLink,

        // Boxshadow
        GalleryGlobalBoxShadowValues,
        GalleryGlobalBoxShadowCssValue,

		// Backgorund
        GalleryBgColorSwitcher,
        GalleryBgType,
        GalleryBgClassicColor,
        GalleryBgGradientColor,
        GalleryBgCustomGradientSwitcher,
        GalleryBgCustomGradientInputValue,
        GalleryBgImageUrl,
        GalleryBgImageAlt,
        GalleryBgImageID,
        GalleryBgImagePosition,
        GalleryBgImageAttachment,
        GalleryBgImageRepeat,
        GalleryBgImageSize,
        GalleryBgHoverType,
        GalleryBgHoverClassicColor,
        GalleryBgHoverGradientColor,
        GalleryBgHoverCustomGradientSwitcher,
        GalleryBgHoverCustomGradientInputValue,
        GalleryBgHoverImageUrl,
        GalleryBgHoverImageAlt,
        GalleryBgHoverImageID,
        GalleryBgHoverImagePosition,
        GalleryBgHoverImageAttachment,
        GalleryBgHoverImageRepeat,
        GalleryBgHoverImageSize,

        GalleryBorder,
        GalleryBorderColor,
        GalleryBorderHoverColor,
        GalleryBorderColorSwitcher,
        GalleryBorderUnits,
        GalleryDesktopBorderWidth,
        GalleryTabBorderWidth,
        GalleryMobileBorderWidth,
        GalleryBorderLink,
        GalleryBorderRadiusUnits,
        GalleryBorderRadiusDesktop,
        GalleryBorderRadiusTablet,
        GalleryBorderRadiusMobile,
        GalleryBorderRadiusLink,

        GalleryDesktopSwitcher,
        GalleryTabletSwitcher,
        GalleryMobileSwitcher,

        // Image border
        imageBorder,
        imageBorderColor,
        imageBorderHoverColor,
        imageBorderColorSwitcher,
        imageBorderUnits,
        imageDesktopBorderWidth,
        imageTabBorderWidth,
        imageMobileBorderWidth,
        imageBorderLink,
        imageBorderRadiusUnits,
        imageDesktopBorderRadiusWidth,
        imageTabBorderRadiusWidth,
        imageMobileBorderRadiusWidth,
        imageBorderRadiusLink,

        // Lightbox Icon
        lightboxIconSwitcher,
        lightboxIcon,
        lightboxIconSize,
        lightboxIconSizeUnits,
        lightboxColorSwitcher,
        lightboxColor,
        lightboxHoverColor,
        lightboxBGColorSwitcher,
        lightboxBGColor,
        lightboxBGHoverColor,
        lightboxBorder,
        lightboxBorderColor,
        lightboxBorderHoverColor,
        lightboxBorderColorSwitcher,
        lightboxPaddingUnits,
        lightboxDesktopPadding,
        lightboxTabPadding,
        lightboxMobilePadding,
        lightboxPaddingLink,
        lightboxBorderUnits,
        lightboxDesktopBorderWidth,
        lightboxTabBorderWidth,
        lightboxMobileBorderWidth,
        lightboxBorderLink,
        lightboxBorderRadiusUnits,
        lightboxDesktopBorderRadiusWidth,
        lightboxTabBorderRadiusWidth,
        lightboxMobileBorderRadiusWidth,
        lightboxBorderRadiusLink,

        imageGalleryCustomCSS,
        imageGalleryGlobalWraperID,
        imageGalleryGlobalWraperClass,

        // Position
        GalleryPositionType,
        GalleryHZOrientationType,
        GalleryVROrientationType,
        GalleryHZLeftOffset,
        GalleryHZLeftOffsetUnits,
        GalleryHZRightOffset,
        GalleryHZRightOffsetUnits,
        GalleryVRTopOffset,
        GalleryVRTopOffsetUnits,
        GalleryVRBottomOffset,
        GalleryVRBottomOffsetUnits,
    } = attributes;

    const ButtonMarginDesktopWidth = `${ButtonDesktopMargin?.top}${ButtonMarginUnits?.Desktop} ${ButtonDesktopMargin?.right}${ButtonMarginUnits?.Desktop} ${ButtonDesktopMargin?.bottom}${ButtonMarginUnits?.Desktop} ${ButtonDesktopMargin?.left}${ButtonMarginUnits?.Desktop}`;
    const ButtonMarginTabletWidth = `${ButtonTabMargin.top}${ButtonMarginUnits.Tablet} ${ButtonTabMargin?.right}${ButtonMarginUnits?.Tablet} ${ButtonTabMargin?.bottom}${ButtonMarginUnits?.Tablet} ${ButtonTabMargin?.left}${ButtonMarginUnits?.Tablet}`;
    const ButtonMarginMobileWidth = `${ButtonMobileMargin.top}${ButtonMarginUnits.Mobile} ${ButtonMobileMargin?.right}${ButtonMarginUnits?.Mobile} ${ButtonMobileMargin?.bottom}${ButtonMarginUnits?.Mobile} ${ButtonMobileMargin?.left}${ButtonMarginUnits?.Mobile}`;

    const ButtonPaddingDesktopWidth = `${ButtonDesktopPadding?.top}${ButtonPaddingUnits?.Desktop} ${ButtonDesktopPadding?.right}${ButtonPaddingUnits?.Desktop} ${ButtonDesktopPadding?.bottom}${ButtonPaddingUnits?.Desktop} ${ButtonDesktopPadding?.left}${ButtonPaddingUnits?.Desktop}`;
    const ButtonPaddingTabletWidth = `${ButtonTabPadding?.top}${ButtonPaddingUnits?.Tablet} ${ButtonTabPadding?.right}${ButtonPaddingUnits?.Tablet} ${ButtonTabPadding?.bottom}${ButtonPaddingUnits?.Tablet} ${ButtonTabPadding?.left}${ButtonPaddingUnits?.Tablet}`;
    const ButtonPaddingMobileWidth = `${ButtonMobilePadding?.top}${ButtonPaddingUnits?.Mobile} ${ButtonMobilePadding?.right}${ButtonPaddingUnits?.Mobile} ${ButtonMobilePadding?.bottom}${ButtonPaddingUnits?.Mobile} ${ButtonMobilePadding?.left}${ButtonPaddingUnits?.Mobile}`;

    const ButtonBorderDesktopWidth = `${ButtonDesktopBorderWidth?.top}${ButtonBorderUnits?.Desktop} ${ButtonDesktopBorderWidth?.right}${ButtonBorderUnits?.Desktop} ${ButtonDesktopBorderWidth?.bottom}${ButtonBorderUnits?.Desktop} ${ButtonDesktopBorderWidth?.left}${ButtonBorderUnits?.Desktop}`;
    const ButtonBorderTabletWidth = `${ButtonTabBorderWidth?.top}${ButtonBorderUnits?.Tablet} ${ButtonTabBorderWidth?.right}${ButtonBorderUnits?.Tablet} ${ButtonTabBorderWidth?.bottom}${ButtonBorderUnits?.Tablet} ${ButtonTabBorderWidth?.left}${ButtonBorderUnits?.Tablet}`;
    const ButtonBorderMobileWidth = `${ButtonMobileBorderWidth?.top}${ButtonBorderUnits?.Mobile} ${ButtonMobileBorderWidth?.right}${ButtonBorderUnits?.Mobile} ${ButtonMobileBorderWidth?.bottom}${ButtonBorderUnits?.Mobile} ${ButtonMobileBorderWidth?.left}${ButtonBorderUnits?.Mobile}`;

    const ButtonBorderRadiusDesktopWidth = `${ButtonDesktopBorderRadiusWidth?.top}${ButtonBorderRadiusUnits?.Desktop} ${ButtonDesktopBorderRadiusWidth?.right}${ButtonBorderRadiusUnits?.Desktop} ${ButtonDesktopBorderRadiusWidth?.bottom}${ButtonBorderRadiusUnits?.Desktop} ${ButtonDesktopBorderRadiusWidth?.left}${ButtonBorderRadiusUnits?.Desktop}`;
    const ButtonBorderRadiusTabletWidth = `${ButtonTabBorderRadiusWidth?.top}${ButtonBorderRadiusUnits?.Tablet} ${ButtonTabBorderRadiusWidth?.right}${ButtonBorderRadiusUnits?.Tablet} ${ButtonTabBorderRadiusWidth?.bottom}${ButtonBorderRadiusUnits?.Tablet} ${ButtonTabBorderRadiusWidth?.left}${ButtonBorderRadiusUnits?.Tablet}`;
    const ButtonBorderRadiusMobileWidth = `${ButtonMobileBorderRadiusWidth?.top}${ButtonBorderRadiusUnits?.Mobile} ${ButtonMobileBorderRadiusWidth?.right}${ButtonBorderRadiusUnits?.Mobile} ${ButtonMobileBorderRadiusWidth?.bottom}${ButtonBorderRadiusUnits?.Mobile} ${ButtonMobileBorderRadiusWidth?.left}${ButtonBorderRadiusUnits?.Mobile}`;

    const GalleryMarginDesktopWidth = `${GalleryDesktopMargin?.top}${GalleryMarginUnits?.Desktop} ${GalleryDesktopMargin?.right}${GalleryMarginUnits?.Desktop} ${GalleryDesktopMargin?.bottom}${GalleryMarginUnits?.Desktop} ${GalleryDesktopMargin?.left}${GalleryMarginUnits?.Desktop}`;
    const GalleryMarginTabletWidth = `${GalleryTabMargin?.top}${GalleryMarginUnits?.Tablet} ${GalleryTabMargin?.right}${GalleryMarginUnits?.Tablet} ${GalleryTabMargin?.bottom}${GalleryMarginUnits?.Tablet} ${GalleryTabMargin?.left}${GalleryMarginUnits?.Tablet}`;
    const GalleryMarginMobileWidth = `${GalleryMobileMargin?.top}${GalleryMarginUnits?.Mobile} ${GalleryMobileMargin?.right}${GalleryMarginUnits?.Mobile} ${GalleryMobileMargin?.bottom}${GalleryMarginUnits?.Mobile} ${GalleryMobileMargin?.left}${GalleryMarginUnits?.Mobile}`;

    const GalleryPaddingDesktopWidth = `${GalleryDesktopPadding?.top}${GalleryPaddingUnits?.Desktop} ${GalleryDesktopPadding?.right}${GalleryPaddingUnits?.Desktop} ${GalleryDesktopPadding?.bottom}${GalleryPaddingUnits?.Desktop} ${GalleryDesktopPadding?.left}${GalleryPaddingUnits?.Desktop}`;
    const GalleryPaddingTabletWidth = `${GalleryTabPadding?.top}${GalleryPaddingUnits?.Tablet} ${GalleryTabPadding?.right}${GalleryPaddingUnits?.Tablet} ${GalleryTabPadding?.bottom}${GalleryPaddingUnits?.Tablet} ${GalleryTabPadding?.left}${GalleryPaddingUnits?.Tablet}`;
    const GalleryPaddingMobileWidth = `${GalleryMobilePadding?.top}${GalleryPaddingUnits?.Mobile} ${GalleryMobilePadding?.right}${GalleryPaddingUnits?.Mobile} ${GalleryMobilePadding?.bottom}${GalleryPaddingUnits?.Mobile} ${GalleryMobilePadding?.left}${GalleryPaddingUnits?.Mobile}`;

    const GalleryBorderDesktopWidth = `${GalleryDesktopBorderWidth?.top}${GalleryBorderUnits?.Desktop} ${GalleryDesktopBorderWidth?.right}${GalleryBorderUnits?.Desktop} ${GalleryDesktopBorderWidth?.bottom}${GalleryBorderUnits?.Desktop} ${GalleryDesktopBorderWidth?.left}${GalleryBorderUnits?.Desktop}`;
    const GalleryBorderTabletWidth = `${GalleryTabBorderWidth?.top}${GalleryBorderUnits?.Tablet} ${GalleryTabBorderWidth?.right}${GalleryBorderUnits?.Tablet} ${GalleryTabBorderWidth?.bottom}${GalleryBorderUnits?.Tablet} ${GalleryTabBorderWidth?.left}${GalleryBorderUnits?.Tablet}`;
    const GalleryBorderMobileWidth = `${GalleryMobileBorderWidth?.top}${GalleryBorderUnits?.Mobile} ${GalleryMobileBorderWidth?.right}${GalleryBorderUnits?.Mobile} ${GalleryMobileBorderWidth?.bottom}${GalleryBorderUnits?.Mobile} ${GalleryMobileBorderWidth?.left}${GalleryBorderUnits?.Mobile}`;

    const GalleryBorderRadiusDesktopWidth = `${GalleryBorderRadiusDesktop?.top}${GalleryBorderRadiusUnits?.Desktop} ${GalleryBorderRadiusDesktop?.right}${GalleryBorderRadiusUnits?.Desktop} ${GalleryBorderRadiusDesktop?.bottom}${GalleryBorderRadiusUnits?.Desktop} ${GalleryBorderRadiusDesktop?.left}${GalleryBorderRadiusUnits?.Desktop}`;
    const GalleryBorderRadiusTabletWidth = `${GalleryBorderRadiusTablet?.top}${GalleryBorderRadiusUnits?.Tablet} ${GalleryBorderRadiusTablet?.right}${GalleryBorderRadiusUnits?.Tablet} ${GalleryBorderRadiusTablet?.bottom}${GalleryBorderRadiusUnits?.Tablet} ${GalleryBorderRadiusTablet?.left}${GalleryBorderRadiusUnits?.Tablet}`;
    const GalleryBorderRadiusMobileWidth = `${GalleryBorderRadiusMobile?.top}${GalleryBorderRadiusUnits?.Mobile} ${GalleryBorderRadiusMobile?.right}${GalleryBorderRadiusUnits?.Mobile} ${GalleryBorderRadiusMobile?.bottom}${GalleryBorderRadiusUnits?.Mobile} ${GalleryBorderRadiusMobile?.left}${GalleryBorderRadiusUnits?.Mobile}`;

    const imageDesktopBorder = `${imageDesktopBorderWidth?.top}${imageBorderUnits?.Desktop} ${imageDesktopBorderWidth?.right}${imageBorderUnits?.Desktop} ${imageDesktopBorderWidth?.bottom}${imageBorderUnits?.Desktop} ${imageDesktopBorderWidth?.left}${imageBorderUnits?.Desktop}`;
	const imageTabBorder = `${imageTabBorderWidth?.top}${imageBorderUnits?.Tablet} ${imageTabBorderWidth?.right}${imageBorderUnits?.Tablet} ${imageTabBorderWidth?.bottom}${imageBorderUnits?.Tablet} ${imageTabBorderWidth?.left}${imageBorderUnits?.Tablet}`;
	const imageMobileBorder = `${imageMobileBorderWidth?.top}${imageBorderUnits?.Mobile} ${imageMobileBorderWidth?.right}${imageBorderUnits?.Mobile} ${imageMobileBorderWidth?.bottom}${imageBorderUnits?.Mobile} ${imageMobileBorderWidth?.left}${imageBorderUnits?.Mobile}`;

    const imageDesktopBorderRadius = `${imageDesktopBorderRadiusWidth?.top}${imageBorderRadiusUnits?.Desktop} ${imageDesktopBorderRadiusWidth?.right}${imageBorderRadiusUnits?.Desktop} ${imageDesktopBorderRadiusWidth?.bottom}${imageBorderRadiusUnits?.Desktop} ${imageDesktopBorderRadiusWidth?.left}${imageBorderRadiusUnits?.Desktop}`;
	const imageTabBorderRadius = `${imageTabBorderRadiusWidth?.top}${imageBorderRadiusUnits?.Tablet} ${imageTabBorderRadiusWidth?.right}${imageBorderRadiusUnits?.Tablet} ${imageTabBorderRadiusWidth?.bottom}${imageBorderRadiusUnits?.Tablet} ${imageTabBorderRadiusWidth?.left}${imageBorderRadiusUnits?.Tablet}`;
	const imageMobileBorderRadius = `${imageMobileBorderRadiusWidth?.top}${imageBorderRadiusUnits?.Mobile} ${imageMobileBorderRadiusWidth?.right}${imageBorderRadiusUnits?.Mobile} ${imageMobileBorderRadiusWidth?.bottom}${imageBorderRadiusUnits?.Mobile} ${imageMobileBorderRadiusWidth?.left}${imageBorderRadiusUnits?.Mobile}`;

    const lightboxDesktopPaddingWidth = `${lightboxDesktopPadding?.top}${lightboxPaddingUnits?.Desktop} ${lightboxDesktopPadding?.right}${lightboxPaddingUnits?.Desktop} ${lightboxDesktopPadding?.bottom}${lightboxPaddingUnits?.Desktop} ${lightboxDesktopPadding?.left}${lightboxPaddingUnits?.Desktop}`;
    const lightboxTabPaddingWidth = `${lightboxTabPadding?.top}${lightboxPaddingUnits?.Tablet} ${lightboxTabPadding?.right}${lightboxPaddingUnits?.Tablet} ${lightboxTabPadding?.bottom}${lightboxPaddingUnits?.Tablet} ${lightboxTabPadding?.left}${lightboxPaddingUnits?.Tablet}`;
    const lightboxMobilePaddingWidth = `${lightboxMobilePadding?.top}${lightboxPaddingUnits?.Mobile} ${lightboxMobilePadding?.right}${lightboxPaddingUnits?.Mobile} ${lightboxMobilePadding?.bottom}${lightboxPaddingUnits?.Mobile} ${lightboxMobilePadding?.left}${lightboxPaddingUnits?.Mobile}`;

    const lightboxDesktopBorder = `${lightboxDesktopBorderWidth?.top}${lightboxBorderUnits?.Desktop} ${lightboxDesktopBorderWidth?.right}${lightboxBorderUnits?.Desktop} ${lightboxDesktopBorderWidth?.bottom}${lightboxBorderUnits?.Desktop} ${lightboxDesktopBorderWidth?.left}${lightboxBorderUnits?.Desktop}`;
    const lightboxTabBorder = `${lightboxTabBorderWidth?.top}${lightboxBorderUnits?.Tablet} ${lightboxTabBorderWidth?.right}${lightboxBorderUnits?.Tablet} ${lightboxTabBorderWidth?.bottom}${lightboxBorderUnits?.Tablet} ${lightboxTabBorderWidth?.left}${lightboxBorderUnits?.Tablet}`;
    const lightboxMobileBorder = `${lightboxMobileBorderWidth?.top}${lightboxBorderUnits?.Mobile} ${lightboxMobileBorderWidth?.right}${lightboxBorderUnits?.Mobile} ${lightboxMobileBorderWidth?.bottom}${lightboxBorderUnits?.Mobile} ${lightboxMobileBorderWidth?.left}${lightboxBorderUnits?.Mobile}`;

    const lightboxDesktopBorderRadius = `${lightboxDesktopBorderRadiusWidth?.top}${lightboxBorderRadiusUnits?.Desktop} ${lightboxDesktopBorderRadiusWidth?.right}${lightboxBorderRadiusUnits?.Desktop} ${lightboxDesktopBorderRadiusWidth?.bottom}${lightboxBorderRadiusUnits?.Desktop} ${lightboxDesktopBorderRadiusWidth?.left}${lightboxBorderRadiusUnits?.Desktop}`;
    const lightboxTabBorderRadius = `${lightboxTabBorderRadiusWidth?.top}${lightboxBorderRadiusUnits?.Tablet} ${lightboxTabBorderRadiusWidth?.right}${lightboxBorderRadiusUnits?.Tablet} ${lightboxTabBorderRadiusWidth?.bottom}${lightboxBorderRadiusUnits?.Tablet} ${lightboxTabBorderRadiusWidth?.left}${lightboxBorderRadiusUnits?.Tablet}`;
    const lightboxMobileBorderRadius = `${lightboxMobileBorderRadiusWidth?.top}${lightboxBorderRadiusUnits?.Mobile} ${lightboxMobileBorderRadiusWidth?.right}${lightboxBorderRadiusUnits?.Mobile} ${lightboxMobileBorderRadiusWidth?.bottom}${lightboxBorderRadiusUnits?.Mobile} ${lightboxMobileBorderRadiusWidth?.left}${lightboxBorderRadiusUnits?.Mobile}`;

    const fbGalleryStyle = `
        .fb-gallery-main-wrapper.${blockID} {
            ${GalleryPositionType === 'default' ? `position: relative;` : ''}
            ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' ? `width: 100%;` : ''}
            ${GalleryPositionType !== 'default' ? `position: ${GalleryPositionType};` : ''}
            ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryHZOrientationType === 'left' && GalleryHZLeftOffset?.Desktop ? `left: ${GalleryHZLeftOffset?.Desktop}${GalleryHZLeftOffsetUnits?.Desktop};` : ''}
            ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryHZOrientationType === 'right' && GalleryHZRightOffset?.Desktop ? `right: ${GalleryHZRightOffset?.Desktop}${GalleryHZRightOffsetUnits?.Desktop};` : ''}
            ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryVROrientationType === 'top' && GalleryVRTopOffset?.Desktop ? `top: ${GalleryVRTopOffset?.Desktop}${GalleryVRTopOffsetUnits?.Desktop};` : ''}
            ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryVROrientationType === 'bottom' && GalleryVRBottomOffset?.Desktop ? `bottom: ${GalleryVRBottomOffset?.Desktop}${GalleryVRBottomOffsetUnits?.Desktop};` : ''}
            ${GalleryZIndex?.Desktop ? `z-index: ${GalleryZIndex?.Desktop};` : ''}
            ${GalleryOverflow !== 'default' ? `overflow: ${GalleryOverflow};` : ''}
        }
        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper {
            position: relative;
            overflow: hidden;
            ${
                GalleryBgType === "gradient"
                    ? `background: ${
                        GalleryBgCustomGradientSwitcher && GalleryBgCustomGradientInputValue
                        ? GalleryBgCustomGradientInputValue
                        : GalleryBgGradientColor
                    };`
                    : GalleryBgImageUrl !== undefined && GalleryBgImageUrl !== null && GalleryBgImageUrl !== ""
                    ? `
                    ${GalleryBgImageUrl !== undefined ? `background-image: url(${GalleryBgImageUrl});` : ''}
                    ${GalleryBgImagePosition !== undefined ? `background-position: ${GalleryBgImagePosition};` : ''}
                    ${GalleryBgImageAttachment !== undefined ? `background-attachment: ${GalleryBgImageAttachment};` : ''}
                    ${GalleryBgImageRepeat !== undefined ? `background-repeat: ${GalleryBgImageRepeat};` : ''}
                    ${GalleryBgImageSize !== undefined ? `background-size: ${GalleryBgImageSize};` : ''}
                    `
                    : GalleryBgClassicColor ? `background: ${GalleryBgClassicColor};` : ''
            }
            ${GalleryGlobalBoxShadowCssValue ? `box-shadow: ${GalleryGlobalBoxShadowCssValue};` : ''}
            ${GalleryPaddingDesktopWidth && GalleryDesktopPadding?.top ? `padding: ${GalleryPaddingDesktopWidth};` : ''}
            ${GalleryMarginDesktopWidth && GalleryDesktopMargin?.top ? `margin: ${GalleryMarginDesktopWidth};` : ''}
            ${GalleryBorder ? `border-style: ${GalleryBorder};` : ''}
            ${GalleryBorderDesktopWidth && GalleryDesktopBorderWidth?.top ? `border-width: ${GalleryBorderDesktopWidth};` : ''}
            ${GalleryBorderColor ? `border-color: ${GalleryBorderColor};` : ''}
            ${GalleryBorderRadiusDesktopWidth && GalleryBorderRadiusDesktop?.top ? `border-radius: ${GalleryBorderRadiusDesktopWidth};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-gallery-main-wrapper.${blockID}:hover {
            ${
                GalleryBgHoverType === "gradient"
                    ? `background: ${
                        GalleryBgHoverCustomGradientSwitcher && GalleryBgHoverCustomGradientInputValue
                        ? GalleryBgHoverCustomGradientInputValue
                        : GalleryBgHoverGradientColor
                    };`
                    : GalleryBgHoverImageUrl && GalleryBgHoverImageUrl !== null && GalleryBgHoverImageUrl !== ""
                    ? `
                    ${GalleryBgHoverImageUrl ? `background-image: url(${GalleryBgHoverImageUrl});` : ''}
                    ${GalleryBgHoverImagePosition ? `background-position: ${GalleryBgHoverImagePosition};` : ''}
                    ${GalleryBgHoverImageAttachment ? `background-attachment: ${GalleryBgHoverImageAttachment};` : ''}
                    ${GalleryBgHoverImageRepeat ? `background-repeat: ${GalleryBgHoverImageRepeat};` : ''}
                    ${GalleryBgHoverImageSize ? `background-size: ${GalleryBgHoverImageSize};` : ''}
                    `
                    : GalleryBgHoverClassicColor ? `background: ${GalleryBgHoverClassicColor};` : ''
            }
            ${GalleryBorderHoverColor ? `border-color: ${GalleryBorderHoverColor};` : ''}
            transition: all .3s ease-in-out;
        }
        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items {
            display: grid;
            ${GalleryColumnNumber?.Desktop ? `grid-template-columns: repeat(${GalleryColumnNumber.Desktop}, 1fr);` : ''}
            ${GalleryImageGap?.Desktop && GalleryImageGapUnits?.Desktop ? `grid-gap: ${GalleryImageGap?.Desktop}${GalleryImageGapUnits?.Desktop};` : ''}
            ${GalleryItemHeight?.Desktop && GalleryItemHeightUnits?.Desktop ? `grid-auto-rows: ${GalleryItemHeight?.Desktop}${GalleryItemHeightUnits?.Desktop};` : ''}
        }
        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            outline: none;
            ${imageBorder ? `border-style: ${imageBorder};` : ''}
            ${imageDesktopBorder && imageDesktopBorderWidth?.top ? `border-width: ${imageDesktopBorder};` : ''}
            ${imageBorderColor ? `border-color: ${imageBorderColor};` : ''}
            ${imageDesktopBorderRadius && imageDesktopBorderRadiusWidth?.top? `border-radius: ${imageDesktopBorderRadius};` : ''}
        }
        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
            position: absolute;
            top: 0;
            outline: none;
            ${ImageAlignment === 'left' ? 'left: 0;' : ''}
            ${ImageAlignment === 'right' ? 'right: 0; left: unset;' : ''}
            ${ImageAlignment === 'center' && ImageOverlayStyleType !== 'zoominout' ? 'left: 50%; transform: translateX(-50%);' : ''}
            ${ImageWidth?.Desktop ? `width: ${ImageWidth?.Desktop}${ImageWidthUnits?.Desktop};` : ''}
            ${ImageHeight?.Desktop ? `height: ${ImageHeight?.Desktop}${ImageHeightUnits?.Desktop};` : ''}
            ${ImageFitCover === true ? 'object-fit: cover;' : ''}
            ${ImageOverlayStyle === 'black_white' ? 'filter: grayscale(100%);' : ''}
            transition: all 0.3s ease-in-out;
        }

        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-gallery-image {
            ${ImageOverlayStyle && ImageOverlayStyle === 'black_white' ? 'filter: grayscale(0);' : ''}
            transition: all 0.3s ease-in-out;
        }

        .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper {
            ${GalleryButtonSwitcher === true ? 'display: flex;' : ''}
            ${GalleryButtonAlignment ? `justify-content: ${GalleryButtonAlignment};` : ''}
        }

        ${GalleryButtonSwitcher === true ? `
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
                ${ButtonBorder ? `border-style: ${ButtonBorder};` : ''}
                ${ButtonBorderColorSwitcher ? `border-color: ${ButtonBorderColor};` : ''}
                ${ButtonBorderDesktopWidth && ButtonDesktopBorderWidth?.top ? `border-width: ${ButtonBorderDesktopWidth};` : ''}
                ${ButtonBorderRadiusDesktopWidth && ButtonDesktopBorderRadiusWidth?.top ? `border-radius: ${ButtonBorderRadiusDesktopWidth};` : ''}
                ${ButtonMarginDesktopWidth && ButtonDesktopMargin?.top ? `margin: ${ButtonMarginDesktopWidth};` : ''}
                ${ButtonPaddingDesktopWidth && ButtonDesktopPadding?.top ? `padding: ${ButtonPaddingDesktopWidth};` : ''}
    
                ${GalleryButtonGlobalTypoSwitcher?.fontFamily === true && GalleryButtonGlobalTypographyData?.fontFamily ? `font-family: ${GalleryButtonGlobalTypographyData?.fontFamily};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.fontSize === true && GalleryButtonGlobalTypographyData?.fontSize ? `font-size: ${GalleryButtonGlobalTypographyData?.fontSize};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.fontWeight === true && GalleryButtonGlobalTypographyData?.fontWeight ? `font-weight: ${GalleryButtonGlobalTypographyData?.fontWeight};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.fontStyle === true && GalleryButtonGlobalTypographyData?.fontStyle ? `font-style: ${GalleryButtonGlobalTypographyData?.fontStyle};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.textTransform === true && GalleryButtonGlobalTypographyData?.textTransform ? `text-transform: ${GalleryButtonGlobalTypographyData?.textTransform};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.textDecoration === true && GalleryButtonGlobalTypographyData?.textDecoration ? `text-decoration: ${GalleryButtonGlobalTypographyData?.textDecoration};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.letterSpacing === true && GalleryButtonGlobalTypographyData?.letterSpacing ? `letter-spacing: ${GalleryButtonGlobalTypographyData?.letterSpacing};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.lineHeight === true && GalleryButtonGlobalTypographyData?.lineHeight ? `line-height: ${GalleryButtonGlobalTypographyData?.lineHeight};` : ''}
    
                ${GalleryButtonGlobalTypoSwitcher?.fontFamily === false && GalleryButtonFontFamily && GalleryButtonFontFamily !== 'Default' ? `font-family: ${GalleryButtonFontFamily};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.fontSize === false && GalleryButtonFontSize?.Desktop ? `font-size: ${GalleryButtonFontSize?.Desktop}${GalleryButtonFontSizeUnits?.Desktop};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.fontWeight === false && GalleryButtonFontWeight ? `font-weight: ${GalleryButtonFontWeight};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.fontStyle === false && GalleryButtonFontStyle ? `font-style: ${GalleryButtonFontStyle};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.textTransform === false && GalleryButtonTextTransform ? `text-transform: ${GalleryButtonTextTransform};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.textDecoration === false && GalleryButtonTextDecoration ? `text-decoration: ${GalleryButtonTextDecoration};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.letterSpacing === false && GalleryButtonLetterSpacing?.Desktop ? `letter-spacing: ${GalleryButtonLetterSpacing?.Desktop}${GalleryButtonLetterSpacingUnits?.Desktop};` : ''}
                ${GalleryButtonGlobalTypoSwitcher?.lineHeight === false && GalleryButtonLineHeight?.Desktop ? `line-height: ${GalleryButtonLineHeight?.Desktop}${GalleryButtonLineHeightUnits?.Desktop};` : ''}
                ${ButtonBorderColorSwitcher === 'normal' && GalleryButtonColor ? `color: ${GalleryButtonColor};` : ''}
                ${ButtonBorderColorSwitcher === 'normal' && GalleryButtonBGColor ? `background-color: ${GalleryButtonBGColor};` : ''}
                transition: all 0.3s ease-in-out;
                }

                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn:hover {
                    ${ButtonBorderColorSwitcher === 'hover' && GalleryButtonHoverColor ? 
                        `color: ${GalleryButtonHoverColor};` : ''}
                    ${ButtonBorderColorSwitcher === 'hover' && GalleryButtonBGHoverColor ? 
                        `background-color: ${GalleryButtonBGHoverColor};` : ''}
                    transition: all 0.3s ease-in-out;
                }
                
                @media only screen and (max-width: 1024px) {
                    .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
                        ${ButtonBorderRadiusTabletWidth && ButtonTabBorderRadiusWidth?.top ? `border-radius: ${ButtonBorderRadiusTabletWidth};` : ''}
                        ${ButtonMarginTabletWidth && ButtonTabMargin?.top ? `margin: ${ButtonMarginTabletWidth};` : ''}
                        ${ButtonPaddingTabletWidth && ButtonTabPadding?.top ? `padding: ${ButtonPaddingTabletWidth};` : ''}
                        ${GalleryButtonGlobalTypoSwitcher?.fontSize === false && GalleryButtonFontSize?.Tablet ? `font-size: ${GalleryButtonFontSize?.Tablet}${GalleryButtonFontSizeUnits?.Tablet};` : ''}
                        ${GalleryButtonGlobalTypoSwitcher?.letterSpacing === false && GalleryButtonLetterSpacing?.Tablet ? `letter-spacing: ${GalleryButtonLetterSpacing?.Tablet}${GalleryButtonLetterSpacingUnits?.Tablet};` : ''}
                        ${GalleryButtonGlobalTypoSwitcher?.lineHeight === false && GalleryButtonLineHeight?.Tablet ? `line-height: ${GalleryButtonLineHeight?.Tablet}${GalleryButtonLineHeightUnits?.Tablet};` : ''}
                    }
                }
                @media only screen and (max-width: 767px) {
                    .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper .fb-image-gallery-btn-wrapper .fb-image-gallery-btn {
                        ${ButtonBorderRadiusMobileWidth && ButtonMobileBorderRadiusWidth?.top ? `border-radius: ${ButtonBorderRadiusMobileWidth};` : ''}
                        ${ButtonMarginMobileWidth && ButtonMobileMargin?.top ? `margin: ${ButtonMarginMobileWidth};` : ''}
                        ${ButtonPaddingMobileWidth && ButtonMobilePadding?.top ? `padding: ${ButtonPaddingMobileWidth};` : ''}
                        ${GalleryButtonGlobalTypoSwitcher?.fontSize === false && GalleryButtonFontSize?.Mobile ? `font-size: ${GalleryButtonFontSize?.Mobile}${GalleryButtonFontSizeUnits?.Mobile};` : ''}
                        ${GalleryButtonGlobalTypoSwitcher?.letterSpacing === false && GalleryButtonLetterSpacing?.Mobile ? `letter-spacing: ${GalleryButtonLetterSpacing?.Mobile}${GalleryButtonLetterSpacingUnits?.Mobile};` : ''}
                        ${GalleryButtonGlobalTypoSwitcher?.lineHeight === false && GalleryButtonLineHeight?.Mobile ? `line-height: ${GalleryButtonLineHeight?.Mobile}${GalleryButtonLineHeightUnits?.Mobile};` : ''}
                    }
                }
        ` : ''}


        @media only screen and (max-width: 1024px) {
            .fb-gallery-main-wrapper.${blockID} {
                ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryHZOrientationType === 'left' && GalleryHZLeftOffset?.Tablet ? `left: ${GalleryHZLeftOffset?.Tablet}${GalleryHZLeftOffsetUnits?.Tablet};` : ''}
                ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryHZOrientationType === 'right' && GalleryHZRightOffset?.Tablet ? `right: ${GalleryHZRightOffset?.Tablet}${GalleryHZRightOffsetUnits?.Tablet};` : ''}
                ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryVROrientationType === 'top' && GalleryVRTopOffset?.Tablet ? `top: ${GalleryVRTopOffset?.Tablet}${GalleryVRTopOffsetUnits?.Tablet};` : ''}
                ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryVROrientationType === 'bottom' && GalleryVRBottomOffset?.Tablet ? `bottom: ${GalleryVRBottomOffset?.Tablet}${GalleryVRBottomOffsetUnits?.Tablet};` : ''}
                ${GalleryZIndex?.Tablet ? `z-index: ${GalleryZIndex?.Tablet};` : ''}
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper {
                ${GalleryPaddingTabletWidth && GalleryTabPadding?.top ? `padding: ${GalleryPaddingTabletWidth};` : ''}
                ${GalleryMarginTabletWidth && GalleryTabMargin?.top ? `margin: ${GalleryMarginTabletWidth};` : ''}
                ${GalleryBorderRadiusTabletWidth && GalleryBorderRadiusTablet?.top ? `border-radius: ${GalleryBorderRadiusTabletWidth};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items {
                display: grid;
                ${GalleryColumnNumber?.Tablet ? `grid-template-columns: repeat(${GalleryColumnNumber?.Tablet}, 1fr);` : ''}
                ${GalleryImageGap?.Tablet && GalleryImageGapUnits?.Tablet ? `grid-gap: ${GalleryImageGap?.Tablet}${GalleryImageGapUnits?.Tablet};` : ''}
                ${GalleryItemHeight?.Tablet && GalleryItemHeightUnits?.Tablet ? `grid-auto-rows: ${GalleryItemHeight?.Tablet}${GalleryItemHeightUnits?.Tablet};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
                ${ImageWidth?.Tablet ? `width: ${ImageWidth?.Tablet}${ImageWidthUnits?.Tablet};` : ''}
                ${ImageHeight?.Tablet ? `height: ${ImageHeight?.Tablet}${ImageHeightUnits?.Tablet};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item {
                ${imageTabBorder && imageTabBorderWidth?.top ? `border-width: ${imageTabBorder};` : ''}
                ${imageTabBorderRadius && imageTabBorderRadiusWidth?.top ? `border-radius: ${imageTabBorderRadius};` : ''}
            }
        }

        @media only screen and (max-width: 767px) {
            .fb-gallery-main-wrapper.${blockID} {
                ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryHZOrientationType === 'left' && GalleryHZLeftOffset?.Mobile ? `left: ${GalleryHZLeftOffset?.Mobile}${GalleryHZLeftOffsetUnits?.Mobile};` : ''}
                ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryHZOrientationType === 'right' && GalleryHZRightOffset?.Mobile ? `right: ${GalleryHZRightOffset?.Mobile}${GalleryHZRightOffsetUnits?.Mobile};` : ''}
                ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryVROrientationType === 'top' && GalleryVRTopOffset?.Mobile ? `top: ${GalleryVRTopOffset?.Mobile}${GalleryVRTopOffsetUnits?.Mobile};` : ''}
                ${GalleryPositionType !== 'default' && GalleryPositionType !== 'relative' && GalleryVROrientationType === 'bottom' && GalleryVRBottomOffset?.Mobile ? `bottom: ${GalleryVRBottomOffset?.Mobile}${GalleryVRBottomOffsetUnits?.Mobile};` : ''}
                ${GalleryZIndex?.Mobile ? `z-index: ${GalleryZIndex?.Mobile};` : ''}
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-wrapper {
                ${GalleryPaddingMobileWidth && GalleryMobilePadding?.top ? `padding: ${GalleryPaddingMobileWidth};` : ''}
                ${GalleryMarginMobileWidth && GalleryMobileMargin?.top ? `margin: ${GalleryMarginMobileWidth};` : ''}
                ${GalleryBorderRadiusMobileWidth && GalleryBorderRadiusMobile?.top ? `border-radius: ${GalleryBorderRadiusMobileWidth};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items {
                display: grid;
                ${GalleryColumnNumber?.Mobile ? `grid-template-columns: repeat(${GalleryColumnNumber?.Mobile}, 1fr);` : ''}
                ${GalleryImageGap?.Mobile && GalleryImageGapUnits?.Mobile ? `grid-gap: ${GalleryImageGap?.Mobile}${GalleryImageGapUnits?.Mobile};` : ''}
                ${GalleryItemHeight?.Mobile && GalleryItemHeightUnits?.Mobile ? `grid-auto-rows: ${GalleryItemHeight?.Mobile}${GalleryItemHeightUnits?.Mobile};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
                ${ImageWidth?.Mobile ? `width: ${ImageWidth?.Mobile}${ImageWidthUnits?.Mobile};` : ''}
                ${ImageHeight?.Mobile ? `height: ${ImageHeight?.Mobile}${ImageHeightUnits?.Mobile};` : ''}
            }

            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item {
                ${imageMobileBorder && imageMobileBorderWidth?.top ? `border-width: ${imageMobileBorder};` : ''}
                ${imageMobileBorderRadius && imageMobileBorderRadiusWidth?.top ? `border-radius: ${imageMobileBorderRadius};` : ''}
            }
        }

        ${lightboxIconSwitcher === true ? `
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                ${lightboxDesktopPaddingWidth && lightboxDesktopPadding?.top ? `padding: ${lightboxDesktopPaddingWidth};` : ''}
                ${lightboxBGColor ? `background-color: ${lightboxBGColor};` : ''}
                ${lightboxBorder ? `border-style: ${lightboxBorder};` : ''}
                ${lightboxDesktopBorder && lightboxDesktopBorderWidth?.top ? `border-width: ${lightboxDesktopBorder};` : ''}
                ${lightboxBorderColor ? `border-color: ${lightboxBorderColor};` : ''}
                ${lightboxDesktopBorderRadius && lightboxDesktopBorderRadiusWidth?.top ? `border-radius: ${lightboxDesktopBorderRadius};` : ''}
                visibility: hidden;
                opacity: 0;
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item:hover .fb-lightbox-icon-wrapper {
                visibility: visible;
                opacity: 1;
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper:hover {
                ${lightboxBGHoverColor ? `background-color: ${lightboxBGHoverColor};` : ''}
                ${lightboxBorderHoverColor ? `border-color: ${lightboxBorderHoverColor};` : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon {
                ${lightboxColor ? `fill: ${lightboxColor};` : ''}
                ${lightboxIconSize?.Desktop ? `width: ${lightboxIconSize?.Desktop}${lightboxIconSizeUnits?.Desktop};` : ''}
                ${lightboxIconSize?.Desktop ? `height: ${lightboxIconSize?.Desktop}${lightboxIconSizeUnits?.Desktop};` : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper:hover .fb-lightbox-icon {
                ${lightboxHoverColor ? `fill: ${lightboxHoverColor};` : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon svg {
                width: 100%;
                height: 100%;
            }
            
            @media only screen and (max-width: 1024px) {
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper {
                    ${lightboxTabPaddingWidth && lightboxTabPadding?.top ? `padding: ${lightboxTabPaddingWidth};` : ''}
                    ${lightboxTabBorder && lightboxTabBorderWidth?.top ? `border-width: ${lightboxTabBorder};` : ''}
                    ${lightboxTabBorderRadius && lightboxTabBorderRadiusWidth?.top ? `border-radius: ${lightboxTabBorderRadius};` : ''}
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon {
                    ${lightboxIconSize?.Tablet ? `width: ${lightboxIconSize?.Tablet}${lightboxIconSizeUnits?.Tablet};` : ''}
                    ${lightboxIconSize?.Tablet ? `height: ${lightboxIconSize?.Tablet}${lightboxIconSizeUnits?.Tablet};` : ''}
                }
            }
            @media only screen and (max-width: 767px) {
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper {
                    ${lightboxMobilePaddingWidth && lightboxMobilePadding?.top ? `padding: ${lightboxMobilePaddingWidth};` : ''}
                    ${lightboxMobileBorder && lightboxMobileBorderWidth?.top ? `border-width: ${lightboxMobileBorder};` : ''}
                    ${lightboxMobileBorderRadius && lightboxMobileBorderRadiusWidth?.top ? `border-radius: ${lightboxMobileBorderRadius};` : ''}
                }
                .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-lightbox-icon-wrapper .fb-lightbox-icon {
                    ${lightboxIconSize?.Mobile ? `width: ${lightboxIconSize?.Mobile}${lightboxIconSizeUnits?.Mobile};` : ''}
                    ${lightboxIconSize?.Mobile ? `height: ${lightboxIconSize?.Mobile}${lightboxIconSizeUnits?.Mobile};` : ''}
                }
            }
        ` : ''}

        ${ImageOverlayStyle === 'overlay' ? `
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-gallery-image {
                ${ImageOverlayStyleType === 'zoominout' ? 'transform: scale(1.001);' : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-gallery-image {
                ${ImageOverlayStyleType === 'zoominout' ? 'transform: scale(1.05);' : ''}
                transition: all 0.3s ease-in-out;
            }
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item .fb-image-overlay {
                position: absolute;
                content: '';
                ${ImageOverlayStyleType === 'top' ? 'top: -100%; left: 0;' : ''}
                ${ImageOverlayStyleType === 'bottom' ? 'top: 100%; left: 0;' : ''}
                ${ImageOverlayStyleType === 'left' ? 'top: 0; left: -100%;' : ''}
                ${ImageOverlayStyleType === 'right' ? 'top: 0; left: 100%;' : ''}
                width: 100%;
                height: 100%;
                ${ImageOverlayColor !== undefined ? `background-color: ${ImageOverlayColor};` : ''}
                visibility: hidden;
                opacity: 0;
                transition: all 0.3s ease-in-out;
            }  
            .fb-gallery-main-wrapper.${blockID} .fb-image-gallery-items .fb-image-gallery-item:hover .fb-image-overlay {
                ${ImageOverlayStyleType === 'top' ? 'top: 0;' : ''}
                ${ImageOverlayStyleType === 'bottom' ? 'top: 0;' : ''}
                ${ImageOverlayStyleType === 'left' ? 'left: 0;' : ''}
                ${ImageOverlayStyleType === 'right' ? 'left: 0;' : ''}
                visibility: visible;
                opacity: 1;
                transition: all 0.3s ease-in-out;
            }
        ` : ''}
        
    `;

    const customCss = getCustomCss(imageGalleryCustomCSS, `.${blockID}`);
    return `${fbGalleryStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
}
export default generateImageGalleryStyle;