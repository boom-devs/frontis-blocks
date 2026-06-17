import getCustomCss from '@Utils/getCustomCss';

const imageAccordionStyle = (attributes) => {
    const {
        blockID,
        imageAccordionPreset,
        imageAccordionWidth,
        imageAccordionWidthUnits,
        imageAccordionHeight,
        imageAccordionHeightUnits,
        imageAccordionGap,
        imageAccordionGapUnits,

        imageAccordionItemPaddingUnits,
        imageAccordionItemPaddingDesktop,
        imageAccordionItemPaddingTablet,
        imageAccordionItemPaddingMobile,
        imageAccordionItemBorderRadiusUnits,
        imageAccordionItemBorderRadiusDesktop,
        imageAccordionItemBorderRadiusTablet,
        imageAccordionItemBorderRadiusMobile,

        imageAccordionItemActiveBorderRadiusDesktop,
        imageAccordionItemActiveBorderRadiusTablet,
        imageAccordionItemActiveBorderRadiusMobile,

        imageAccordionOverlayColor,
        imageAccordionOverlayHoverColor,

        imageAccordionShowDots,
        imageAccordionDotColor,
        imageAccordionDotSize,
        imageAccordionDotSizeUnits,

        imageAccordionShowNumber,
        imageAccordionNumberColor,
        imageAccordionNumberHoverColor,
        imageAccordionNumberFontSize,
        imageAccordionNumberFontSizeUnits,
        imageAccordionNumberFontWeight,

        imageAccordionIconColor,
        imageAccordionIconHoverColor,
        imageAccordionIconSize,
        imageAccordionIconSizeUnits,
        imageAccordionIconCircleBgColor,
        imageAccordionIconCircleSize,
        imageAccordionIconCircleSizeUnits,

        imageAccordionTitleColor,
        imageAccordionTitleHoverColor,
        imageAccordionTitleFontSize,
        imageAccordionTitleFontSizeUnits,
        imageAccordionTitleFontWeight,
        imageAccordionTitleFontFamily,
        imageAccordionTitleFontStyle,
        imageAccordionTitleTransform,
        imageAccordionTitleDecoration,
        imageAccordionTitleLetterSpacing,
        imageAccordionTitleLetterSpacingUnits,
        imageAccordionTitleLineHeight,
        imageAccordionTitleLineHeightUnits,

        imageAccordionSubtitleColor,
        imageAccordionSubtitleHoverColor,
        imageAccordionSubtitleFontSize,
        imageAccordionSubtitleFontSizeUnits,
        imageAccordionSubtitleFontWeight,
        imageAccordionSubtitleFontFamily,
        imageAccordionSubtitleFontStyle,
        imageAccordionSubtitleTransform,
        imageAccordionSubtitleDecoration,
        imageAccordionSubtitleLetterSpacing,
        imageAccordionSubtitleLetterSpacingUnits,

        imageAccordionBtnTextColor,
        imageAccordionBtnHoverTextColor,
        imageAccordionBtnBgColor,
        imageAccordionBtnHoverBgColor,
        imageAccordionBtnBorderColor,
        imageAccordionBtnBorder,
        imageAccordionBtnBorderRadiusUnits,
        imageAccordionBtnBorderRadiusDesktop,
        imageAccordionBtnPaddingUnits,
        imageAccordionBtnPaddingDesktop,
        imageAccordionBtnFontSize,
        imageAccordionBtnFontSizeUnits,
        imageAccordionBtnFontWeight,
        imageAccordionBtnFontFamily,
        imageAccordionBtnFontStyle,
        imageAccordionBtnTransform,
        imageAccordionBtnDecoration,
        imageAccordionBtnLetterSpacing,
        imageAccordionBtnLetterSpacingUnits,

        imageAccordionItemMarginUnits,
        imageAccordionItemMarginDesktop,
        imageAccordionItemMarginTablet,
        imageAccordionItemMarginMobile,
        imageAccordionPaddingUnits,
        imageAccordionPaddingDesktop,
        imageAccordionPaddingTablet,
        imageAccordionPaddingMobile,

        imageAccordionMarginUnits,
        imageAccordionMarginDesktop,
        imageAccordionMarginTablet,
        imageAccordionMarginMobile,

        imageAccordionBgColorSwitcher,
        imageAccordionBackgroundType,
        imageAccordionClassicColor,
        imageAccordionGradientColor,
        imageAccordionCustomGradientSwitcher,
        imageAccordionCustomGradientInputValue,
        imageAccordionBackgroundImageUrl,
        imageAccordionBackgroundImageAlt,
        imageAccordionBackgroundImageID,
        imageAccordionBackgroundImagePosition,
        imageAccordionBackgroundImageAttachment,
        imageAccordionBackgroundImageRepeat,
        imageAccordionBackgroundImageSize,
        imageAccordionHoverBackgroundType,
        imageAccordionHoverClassicColor,
        imageAccordionHoverGradientColor,
        imageAccordionHoverCustomGradientSwitcher,
        imageAccordionHoverCustomGradientInputValue,
        imageAccordionHoverBackgroundImageUrl,
        imageAccordionHoverBackgroundImageAlt,
        imageAccordionHoverBackgroundImageID,
        imageAccordionHoverBackgroundImagePosition,
        imageAccordionHoverBackgroundImageAttachment,
        imageAccordionHoverBackgroundImageRepeat,
        imageAccordionHoverBackgroundImageSize,

        imageAccordionWrapperBorder,
        imageAccordionWrapperBorderColorSwitcher,
        imageAccordionWrapperBorderColor,
        imageAccordionWrapperBorderHoverColor,
        imageAccordionWrapperBorderTypeUnits,
        imageAccordionWrapperBorderTypeDesktop,
        imageAccordionWrapperBorderTypeTablet,
        imageAccordionWrapperBorderTypeMobile,
        imageAccordionWrapperBorderTypeLink,
        imageAccordionWrapperBorderRadiusUnits,
        imageAccordionWrapperBorderRadiusDesktop,
        imageAccordionWrapperBorderRadiusTablet,
        imageAccordionWrapperBorderRadiusMobile,
        imageAccordionWrapperBorderRadiusLink,

        imageAccordionGlobalZIndex,
        imageAccordionPositionType,
        imageAccordionHZOrientationType,
        imageAccordionVROrientationType,
        imageAccordionHZLeftOffset,
        imageAccordionHZLeftOffsetUnits,
        imageAccordionHZRightOffset,
        imageAccordionHZRightOffsetUnits,
        imageAccordionVRTopOffset,
        imageAccordionVRTopOffsetUnits,
        imageAccordionVRBottomOffset,
        imageAccordionVRBottomOffsetUnits,
        imageAccordionOverflow,
        imageAccordionCustomCSS,
        imageAccordionItemShadow,
        imageAccordionItemActiveZIndex,
        imageAccordionItemTransitionDuration,
        imageAccordionWrapperShadowPadding,
    } = attributes;

    const imageAccordionItemBorderRadiusDesktopWidth = `${imageAccordionItemBorderRadiusDesktop?.top}${imageAccordionItemBorderRadiusUnits?.Desktop} ${imageAccordionItemBorderRadiusDesktop?.right}${imageAccordionItemBorderRadiusUnits?.Desktop} ${imageAccordionItemBorderRadiusDesktop?.bottom}${imageAccordionItemBorderRadiusUnits?.Desktop} ${imageAccordionItemBorderRadiusDesktop?.left}${imageAccordionItemBorderRadiusUnits?.Desktop}`;
    const imageAccordionItemBorderRadiusTabletWidth = `${imageAccordionItemBorderRadiusTablet?.top}${imageAccordionItemBorderRadiusUnits?.Tablet} ${imageAccordionItemBorderRadiusTablet?.right}${imageAccordionItemBorderRadiusUnits?.Tablet} ${imageAccordionItemBorderRadiusTablet?.bottom}${imageAccordionItemBorderRadiusUnits?.Tablet} ${imageAccordionItemBorderRadiusTablet?.left}${imageAccordionItemBorderRadiusUnits?.Tablet}`;
    const imageAccordionItemBorderRadiusMobileWidth = `${imageAccordionItemBorderRadiusMobile?.top}${imageAccordionItemBorderRadiusUnits?.Mobile} ${imageAccordionItemBorderRadiusMobile?.right}${imageAccordionItemBorderRadiusUnits?.Mobile} ${imageAccordionItemBorderRadiusMobile?.bottom}${imageAccordionItemBorderRadiusUnits?.Mobile} ${imageAccordionItemBorderRadiusMobile?.left}${imageAccordionItemBorderRadiusUnits?.Mobile}`;

    const imageAccordionItemPaddingDesktopWidth = `${imageAccordionItemPaddingDesktop?.top}${imageAccordionItemPaddingUnits?.Desktop} ${imageAccordionItemPaddingDesktop?.right}${imageAccordionItemPaddingUnits?.Desktop} ${imageAccordionItemPaddingDesktop?.bottom}${imageAccordionItemPaddingUnits?.Desktop} ${imageAccordionItemPaddingDesktop?.left}${imageAccordionItemPaddingUnits?.Desktop}`;
    const imageAccordionItemPaddingTabletWidth = `${imageAccordionItemPaddingTablet?.top}${imageAccordionItemPaddingUnits?.Tablet} ${imageAccordionItemPaddingTablet?.right}${imageAccordionItemPaddingUnits?.Tablet} ${imageAccordionItemPaddingTablet?.bottom}${imageAccordionItemPaddingUnits?.Tablet} ${imageAccordionItemPaddingTablet?.left}${imageAccordionItemPaddingUnits?.Tablet}`;
    const imageAccordionItemPaddingMobileWidth = `${imageAccordionItemPaddingMobile?.top}${imageAccordionItemPaddingUnits?.Mobile} ${imageAccordionItemPaddingMobile?.right}${imageAccordionItemPaddingUnits?.Mobile} ${imageAccordionItemPaddingMobile?.bottom}${imageAccordionItemPaddingUnits?.Mobile} ${imageAccordionItemPaddingMobile?.left}${imageAccordionItemPaddingUnits?.Mobile}`;

    const imageAccordionItemMarginDesktopWidth = `${imageAccordionItemMarginDesktop?.top}${imageAccordionItemMarginUnits?.Desktop} ${imageAccordionItemMarginDesktop?.right}${imageAccordionItemMarginUnits?.Desktop} ${imageAccordionItemMarginDesktop?.bottom}${imageAccordionItemMarginUnits?.Desktop} ${imageAccordionItemMarginDesktop?.left}${imageAccordionItemMarginUnits?.Desktop}`;
    const imageAccordionItemMarginTabletWidth = `${imageAccordionItemMarginTablet?.top}${imageAccordionItemMarginUnits?.Tablet} ${imageAccordionItemMarginTablet?.right}${imageAccordionItemMarginUnits?.Tablet} ${imageAccordionItemMarginTablet?.bottom}${imageAccordionItemMarginUnits?.Tablet} ${imageAccordionItemMarginTablet?.left}${imageAccordionItemMarginUnits?.Tablet}`;
    const imageAccordionItemMarginMobileWidth = `${imageAccordionItemMarginMobile?.top}${imageAccordionItemMarginUnits?.Mobile} ${imageAccordionItemMarginMobile?.right}${imageAccordionItemMarginUnits?.Mobile} ${imageAccordionItemMarginMobile?.bottom}${imageAccordionItemMarginUnits?.Mobile} ${imageAccordionItemMarginMobile?.left}${imageAccordionItemMarginUnits?.Mobile}`;

    const imageAccordionItemActiveBorderRadiusDesktopWidth = `${imageAccordionItemActiveBorderRadiusDesktop?.top}${imageAccordionItemBorderRadiusUnits?.Desktop} ${imageAccordionItemActiveBorderRadiusDesktop?.right}${imageAccordionItemBorderRadiusUnits?.Desktop} ${imageAccordionItemActiveBorderRadiusDesktop?.bottom}${imageAccordionItemBorderRadiusUnits?.Desktop} ${imageAccordionItemActiveBorderRadiusDesktop?.left}${imageAccordionItemBorderRadiusUnits?.Desktop}`;
    const imageAccordionItemActiveBorderRadiusTabletWidth = `${imageAccordionItemActiveBorderRadiusTablet?.top}${imageAccordionItemBorderRadiusUnits?.Tablet} ${imageAccordionItemActiveBorderRadiusTablet?.right}${imageAccordionItemBorderRadiusUnits?.Tablet} ${imageAccordionItemActiveBorderRadiusTablet?.bottom}${imageAccordionItemBorderRadiusUnits?.Tablet} ${imageAccordionItemActiveBorderRadiusTablet?.left}${imageAccordionItemBorderRadiusUnits?.Tablet}`;
    const imageAccordionItemActiveBorderRadiusMobileWidth = `${imageAccordionItemActiveBorderRadiusMobile?.top}${imageAccordionItemBorderRadiusUnits?.Mobile} ${imageAccordionItemActiveBorderRadiusMobile?.right}${imageAccordionItemBorderRadiusUnits?.Mobile} ${imageAccordionItemActiveBorderRadiusMobile?.bottom}${imageAccordionItemBorderRadiusUnits?.Mobile} ${imageAccordionItemActiveBorderRadiusMobile?.left}${imageAccordionItemBorderRadiusUnits?.Mobile}`;

    const imageAccordionPaddingDesktopWidth = `${imageAccordionPaddingDesktop?.top}${imageAccordionPaddingUnits?.Desktop} ${imageAccordionPaddingDesktop?.right}${imageAccordionPaddingUnits?.Desktop} ${imageAccordionPaddingDesktop?.bottom}${imageAccordionPaddingUnits?.Desktop} ${imageAccordionPaddingDesktop?.left}${imageAccordionPaddingUnits?.Desktop}`;
    const imageAccordionPaddingTabletWidth = `${imageAccordionPaddingTablet?.top}${imageAccordionPaddingUnits?.Tablet} ${imageAccordionPaddingTablet?.right}${imageAccordionPaddingUnits?.Tablet} ${imageAccordionPaddingTablet?.bottom}${imageAccordionPaddingUnits?.Tablet} ${imageAccordionPaddingTablet?.left}${imageAccordionPaddingUnits?.Tablet}`;
    const imageAccordionPaddingMobileWidth = `${imageAccordionPaddingMobile?.top}${imageAccordionPaddingUnits?.Mobile} ${imageAccordionPaddingMobile?.right}${imageAccordionPaddingUnits?.Mobile} ${imageAccordionPaddingMobile?.bottom}${imageAccordionPaddingUnits?.Mobile} ${imageAccordionPaddingMobile?.left}${imageAccordionPaddingUnits?.Mobile}`;

    const imageAccordionMarginDesktopWidth = `${imageAccordionMarginDesktop?.top}${imageAccordionMarginUnits?.Desktop} ${imageAccordionMarginDesktop?.right}${imageAccordionMarginUnits?.Desktop} ${imageAccordionMarginDesktop?.bottom}${imageAccordionMarginUnits?.Desktop} ${imageAccordionMarginDesktop?.left}${imageAccordionMarginUnits?.Desktop}`;
    const imageAccordionMarginTabletWidth = `${imageAccordionMarginTablet?.top}${imageAccordionMarginUnits?.Tablet} ${imageAccordionMarginTablet?.right}${imageAccordionMarginUnits?.Tablet} ${imageAccordionMarginTablet?.bottom}${imageAccordionMarginUnits?.Tablet} ${imageAccordionMarginTablet?.left}${imageAccordionMarginUnits?.Tablet}`;
    const imageAccordionMarginMobileWidth = `${imageAccordionMarginMobile?.top}${imageAccordionMarginUnits?.Mobile} ${imageAccordionMarginMobile?.right}${imageAccordionMarginUnits?.Mobile} ${imageAccordionMarginMobile?.bottom}${imageAccordionMarginUnits?.Mobile} ${imageAccordionMarginMobile?.left}${imageAccordionMarginUnits?.Mobile}`;

    const imageAccordionWrapperBorderRadiusDesktopWidth = `${imageAccordionWrapperBorderRadiusDesktop?.top}${imageAccordionWrapperBorderRadiusUnits?.Desktop} ${imageAccordionWrapperBorderRadiusDesktop?.right}${imageAccordionWrapperBorderRadiusUnits?.Desktop} ${imageAccordionWrapperBorderRadiusDesktop?.bottom}${imageAccordionWrapperBorderRadiusUnits?.Desktop} ${imageAccordionWrapperBorderRadiusDesktop?.left}${imageAccordionWrapperBorderRadiusUnits?.Desktop}`;
    const imageAccordionWrapperBorderRadiusTabletWidth = `${imageAccordionWrapperBorderRadiusTablet?.top}${imageAccordionWrapperBorderRadiusUnits?.Tablet} ${imageAccordionWrapperBorderRadiusTablet?.right}${imageAccordionWrapperBorderRadiusUnits?.Tablet} ${imageAccordionWrapperBorderRadiusTablet?.bottom}${imageAccordionWrapperBorderRadiusUnits?.Tablet} ${imageAccordionWrapperBorderRadiusTablet?.left}${imageAccordionWrapperBorderRadiusUnits?.Tablet}`;
    const imageAccordionWrapperBorderRadiusMobileWidth = `${imageAccordionWrapperBorderRadiusMobile?.top}${imageAccordionWrapperBorderRadiusUnits?.Mobile} ${imageAccordionWrapperBorderRadiusMobile?.right}${imageAccordionWrapperBorderRadiusUnits?.Mobile} ${imageAccordionWrapperBorderRadiusMobile?.bottom}${imageAccordionWrapperBorderRadiusUnits?.Mobile} ${imageAccordionWrapperBorderRadiusMobile?.left}${imageAccordionWrapperBorderRadiusUnits?.Mobile}`;

    const imageAccordionWrapperBorderDesktopWidth = `${imageAccordionWrapperBorderTypeDesktop?.top}${imageAccordionWrapperBorderTypeUnits?.Desktop} ${imageAccordionWrapperBorderTypeDesktop?.right}${imageAccordionWrapperBorderTypeUnits?.Desktop} ${imageAccordionWrapperBorderTypeDesktop?.bottom}${imageAccordionWrapperBorderTypeUnits?.Desktop} ${imageAccordionWrapperBorderTypeDesktop?.left}${imageAccordionWrapperBorderTypeUnits?.Desktop}`;
    const imageAccordionWrapperBorderTabletWidth = `${imageAccordionWrapperBorderTypeTablet?.top}${imageAccordionWrapperBorderTypeUnits?.Tablet} ${imageAccordionWrapperBorderTypeTablet?.right}${imageAccordionWrapperBorderTypeUnits?.Tablet} ${imageAccordionWrapperBorderTypeTablet?.bottom}${imageAccordionWrapperBorderTypeUnits?.Tablet} ${imageAccordionWrapperBorderTypeTablet?.left}${imageAccordionWrapperBorderTypeUnits?.Tablet}`;
    const imageAccordionWrapperBorderMobileWidth = `${imageAccordionWrapperBorderTypeMobile?.top}${imageAccordionWrapperBorderTypeUnits?.Mobile} ${imageAccordionWrapperBorderTypeMobile?.right}${imageAccordionWrapperBorderTypeUnits?.Mobile} ${imageAccordionWrapperBorderTypeMobile?.bottom}${imageAccordionWrapperBorderTypeUnits?.Mobile} ${imageAccordionWrapperBorderTypeMobile?.left}${imageAccordionWrapperBorderTypeUnits?.Mobile}`;

    const imageAccordionBtnBorderRadiusDesktopWidth = `${imageAccordionBtnBorderRadiusDesktop?.top}${imageAccordionBtnBorderRadiusUnits?.Desktop} ${imageAccordionBtnBorderRadiusDesktop?.right}${imageAccordionBtnBorderRadiusUnits?.Desktop} ${imageAccordionBtnBorderRadiusDesktop?.bottom}${imageAccordionBtnBorderRadiusUnits?.Desktop} ${imageAccordionBtnBorderRadiusDesktop?.left}${imageAccordionBtnBorderRadiusUnits?.Desktop}`;
    const imageAccordionBtnPaddingDesktopWidth = `${imageAccordionBtnPaddingDesktop?.top}${imageAccordionBtnPaddingUnits?.Desktop} ${imageAccordionBtnPaddingDesktop?.right}${imageAccordionBtnPaddingUnits?.Desktop} ${imageAccordionBtnPaddingDesktop?.bottom}${imageAccordionBtnPaddingUnits?.Desktop} ${imageAccordionBtnPaddingDesktop?.left}${imageAccordionBtnPaddingUnits?.Desktop}`;

    const imageAccordionBlockStyle = `
		.fb-image-accordion-main-wrapper.${blockID} {
			${imageAccordionPositionType === 'default' ? `position: relative;` : ''}
			${imageAccordionPositionType !== 'default' && imageAccordionPositionType !== 'relative' ? `width: 100%;` : ''}
			${imageAccordionPositionType !== 'default' ? `position: ${imageAccordionPositionType};` : ''}
			${imageAccordionPositionType !== 'default' && imageAccordionPositionType !== 'relative' && imageAccordionHZOrientationType === 'left' && imageAccordionHZLeftOffset?.Desktop ? `left: ${imageAccordionHZLeftOffset?.Desktop}${imageAccordionHZLeftOffsetUnits?.Desktop};` : ''}
			${imageAccordionPositionType !== 'default' && imageAccordionPositionType !== 'relative' && imageAccordionHZOrientationType === 'right' && imageAccordionHZRightOffset?.Desktop ? `right: ${imageAccordionHZRightOffset?.Desktop}${imageAccordionHZRightOffsetUnits?.Desktop};` : ''}
			${imageAccordionPositionType !== 'default' && imageAccordionPositionType !== 'relative' && imageAccordionVROrientationType === 'top' && imageAccordionVRTopOffset?.Desktop ? `top: ${imageAccordionVRTopOffset?.Desktop}${imageAccordionVRTopOffsetUnits?.Desktop};` : ''}
			${imageAccordionPositionType !== 'default' && imageAccordionPositionType !== 'relative' && imageAccordionVROrientationType === 'bottom' && imageAccordionVRBottomOffset?.Desktop ? `bottom: ${imageAccordionVRBottomOffset?.Desktop}${imageAccordionVRBottomOffsetUnits?.Desktop};` : ''}
			${imageAccordionGlobalZIndex?.Desktop ? `z-index: ${imageAccordionGlobalZIndex?.Desktop};` : ''}
			${imageAccordionOverflow !== 'default' ? `overflow: ${imageAccordionOverflow};` : ''}
		}

		.fb-image-accordion-wrapper.${blockID} {
			${imageAccordionWrapperBorder ? `border-style: ${imageAccordionWrapperBorder};` : 'border-style: none;'}
			${imageAccordionWrapperBorderColor ? `border-color: ${imageAccordionWrapperBorderColor};` : ''}
			${imageAccordionWrapperBorderDesktopWidth && imageAccordionWrapperBorderTypeDesktop?.top ? `border-width: ${imageAccordionWrapperBorderDesktopWidth};` : ''}
			${imageAccordionWrapperBorderRadiusDesktopWidth && imageAccordionWrapperBorderRadiusDesktop?.top ? `border-radius: ${imageAccordionWrapperBorderRadiusDesktopWidth};` : ''}
            ${imageAccordionBackgroundType === 'gradient'
                ? `background: ${imageAccordionCustomGradientSwitcher && imageAccordionCustomGradientInputValue ? imageAccordionCustomGradientInputValue : imageAccordionGradientColor || imageAccordionClassicColor};`
                : `
                    ${imageAccordionClassicColor ? `background: ${imageAccordionClassicColor};` : ''}
                    ${imageAccordionBackgroundImageUrl ? `background-image: url(${imageAccordionBackgroundImageUrl});` : ''}
                    ${imageAccordionBackgroundImagePosition ? `background-position: ${imageAccordionBackgroundImagePosition};` : ''}
                    ${imageAccordionBackgroundImageAttachment ? `background-attachment: ${imageAccordionBackgroundImageAttachment};` : ''}
                    ${imageAccordionBackgroundImageRepeat ? `background-repeat: ${imageAccordionBackgroundImageRepeat};` : ''}
                    ${imageAccordionBackgroundImageSize ? `background-size: ${imageAccordionBackgroundImageSize};` : ''}
                `
            }
			transition: all .3s ease-in-out;
			overflow: visible !important;
			${imageAccordionWrapperShadowPadding?.Desktop ? `padding-bottom: ${imageAccordionWrapperShadowPadding.Desktop}px;` : ''}
			${imageAccordionWrapperShadowPadding?.Desktop ? `margin-bottom: -${imageAccordionWrapperShadowPadding.Desktop}px;` : ''}
		}

		.fb-image-accordion-wrapper.${blockID}:hover {
			${imageAccordionWrapperBorderHoverColor ? `border-color: ${imageAccordionWrapperBorderHoverColor};` : ''}
            ${imageAccordionHoverBackgroundType === 'gradient'
                ? `background: ${imageAccordionHoverCustomGradientSwitcher && imageAccordionHoverCustomGradientInputValue ? imageAccordionHoverCustomGradientInputValue : imageAccordionHoverGradientColor || imageAccordionHoverClassicColor};`
                : `
                    ${imageAccordionHoverClassicColor ? `background: ${imageAccordionHoverClassicColor};` : ''}
                    ${imageAccordionHoverBackgroundImageUrl ? `background-image: url(${imageAccordionHoverBackgroundImageUrl});` : ''}
                    ${imageAccordionHoverBackgroundImagePosition ? `background-position: ${imageAccordionHoverBackgroundImagePosition};` : ''}
                    ${imageAccordionHoverBackgroundImageAttachment ? `background-attachment: ${imageAccordionHoverBackgroundImageAttachment};` : ''}
                    ${imageAccordionHoverBackgroundImageRepeat ? `background-repeat: ${imageAccordionHoverBackgroundImageRepeat};` : ''}
                    ${imageAccordionHoverBackgroundImageSize ? `background-size: ${imageAccordionHoverBackgroundImageSize};` : ''}
                `
            }
		}

		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-container {
			${imageAccordionWidth?.Desktop ? `width: ${imageAccordionWidth.Desktop}${imageAccordionWidthUnits?.Desktop ?? '%'};` : ''}
			${imageAccordionHeight?.Desktop ? `height: ${imageAccordionHeight.Desktop}${imageAccordionHeightUnits?.Desktop ?? 'px'};` : ''}
			${imageAccordionPreset !== 'preset-2' && imageAccordionPreset !== 'preset-4' && imageAccordionGap?.Desktop ? `gap: ${imageAccordionGap.Desktop}${imageAccordionGapUnits?.Desktop ?? 'px'};` : ''}
			${imageAccordionPaddingDesktopWidth && imageAccordionPaddingDesktop?.top ? `padding: ${imageAccordionPaddingDesktopWidth};` : ''}
			${imageAccordionMarginDesktopWidth && imageAccordionMarginDesktop?.top ? `margin: ${imageAccordionMarginDesktopWidth};` : ''}
				overflow: visible !important;
		}

		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item {
			${imageAccordionItemBorderRadiusDesktopWidth && imageAccordionItemBorderRadiusDesktop?.top ? `border-radius: ${imageAccordionItemBorderRadiusDesktopWidth};` : ''}
			${imageAccordionItemPaddingDesktopWidth && imageAccordionItemPaddingDesktop?.top ? `padding: ${imageAccordionItemPaddingDesktopWidth};` : ''}
			${imageAccordionItemMarginDesktopWidth && imageAccordionItemMarginDesktop?.top ? `margin: ${imageAccordionItemMarginDesktopWidth};` : ''}
			transition: all ${imageAccordionItemTransitionDuration?.Desktop || 0.4}s ease;
		}
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item.is-active,
		.fb-image-accordion-wrapper.${blockID}.fb-trigger-hover .fb-image-accordion-item:hover {
			
			${imageAccordionItemShadow ? `box-shadow: ${imageAccordionItemShadow};` : ''}
			z-index: ${imageAccordionItemActiveZIndex?.Desktop || 99};
			${imageAccordionItemActiveBorderRadiusDesktopWidth && imageAccordionItemActiveBorderRadiusDesktop?.top ? `border-radius: ${imageAccordionItemActiveBorderRadiusDesktopWidth};` : ''}
		}

		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-overlay {
			${imageAccordionOverlayColor ? `background: ${imageAccordionOverlayColor};` : ''}
		}
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item:hover .fb-image-accordion-overlay,
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item.is-active .fb-image-accordion-overlay {
			${imageAccordionOverlayHoverColor ? `background: ${imageAccordionOverlayHoverColor};` : ''}
		}

		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-title {
			${imageAccordionTitleColor ? `color: ${imageAccordionTitleColor};` : ''}
			${imageAccordionTitleFontSize?.Desktop ? `font-size: ${imageAccordionTitleFontSize.Desktop}${imageAccordionTitleFontSizeUnits?.Desktop ?? 'px'};` : ''}
			${imageAccordionTitleFontWeight ? `font-weight: ${imageAccordionTitleFontWeight};` : ''}
			${imageAccordionTitleLineHeight?.Desktop ? `line-height: ${imageAccordionTitleLineHeight.Desktop}${imageAccordionTitleLineHeightUnits?.Desktop ?? 'px'};` : ''}
			${imageAccordionTitleFontFamily && imageAccordionTitleFontFamily !== 'Default' && imageAccordionTitleFontFamily !== 'inherit' ? `font-family: ${imageAccordionTitleFontFamily};` : ''}
			${imageAccordionTitleFontStyle ? `font-style: ${imageAccordionTitleFontStyle};` : ''}
			${imageAccordionTitleTransform ? `text-transform: ${imageAccordionTitleTransform};` : ''}
			${imageAccordionTitleDecoration ? `text-decoration: ${imageAccordionTitleDecoration};` : ''}
			${imageAccordionTitleLetterSpacing?.Desktop !== '' ? `letter-spacing: ${imageAccordionTitleLetterSpacing.Desktop}${imageAccordionTitleLetterSpacingUnits?.Desktop || 'px'};` : ''}
		}
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item:hover .fb-image-accordion-title,
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item.is-active .fb-image-accordion-title {
			${imageAccordionTitleHoverColor ? `color: ${imageAccordionTitleHoverColor};` : ''}
		}

		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-desc,
		.fb-image-accordion-wrapper.${blockID} .fb-sub-title {
			${imageAccordionSubtitleColor ? `color: ${imageAccordionSubtitleColor};` : ''}
			${imageAccordionSubtitleFontSize?.Desktop ? `font-size: ${imageAccordionSubtitleFontSize.Desktop}${imageAccordionSubtitleFontSizeUnits?.Desktop ?? 'px'};` : ''}
			${imageAccordionSubtitleFontWeight ? `font-weight: ${imageAccordionSubtitleFontWeight};` : ''}
			${imageAccordionSubtitleFontFamily && imageAccordionSubtitleFontFamily !== 'Default' && imageAccordionSubtitleFontFamily !== 'inherit' ? `font-family: ${imageAccordionSubtitleFontFamily};` : ''}
			${imageAccordionSubtitleFontStyle ? `font-style: ${imageAccordionSubtitleFontStyle};` : ''}
			${imageAccordionSubtitleTransform ? `text-transform: ${imageAccordionSubtitleTransform};` : ''}
			${imageAccordionSubtitleDecoration ? `text-decoration: ${imageAccordionSubtitleDecoration};` : ''}
			${imageAccordionSubtitleLetterSpacing?.Desktop !== '' ? `letter-spacing: ${imageAccordionSubtitleLetterSpacing.Desktop}${imageAccordionSubtitleLetterSpacingUnits?.Desktop || 'px'};` : ''}
		}
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item:hover .fb-image-accordion-desc,
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item:hover .fb-sub-title,
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item.is-active .fb-image-accordion-desc,
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item.is-active .fb-sub-title {
			${imageAccordionSubtitleHoverColor ? `color: ${imageAccordionSubtitleHoverColor};` : ''}
		}

		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-icon-circle {
			${imageAccordionIconCircleBgColor ? `background: ${imageAccordionIconCircleBgColor};` : ''}
			${imageAccordionIconCircleSize?.Desktop ? `width: ${imageAccordionIconCircleSize.Desktop}${imageAccordionIconCircleSizeUnits?.Desktop ?? 'px'}; height: ${imageAccordionIconCircleSize.Desktop}${imageAccordionIconCircleSizeUnits?.Desktop ?? 'px'};` : ''}
		}
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-icon-circle i,
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-icon-circle svg {
			${imageAccordionIconColor ? `color: ${imageAccordionIconColor}; fill: ${imageAccordionIconColor};` : ''}
			${imageAccordionIconSize?.Desktop ? `font-size: ${imageAccordionIconSize.Desktop}${imageAccordionIconSizeUnits?.Desktop ?? 'px'}; width: ${imageAccordionIconSize.Desktop}${imageAccordionIconSizeUnits?.Desktop ?? 'px'}; height: ${imageAccordionIconSize.Desktop}${imageAccordionIconSizeUnits?.Desktop ?? 'px'};` : ''}
		}
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item:hover .fb-image-accordion-icon-circle i,
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item:hover .fb-image-accordion-icon-circle svg,
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item.is-active .fb-image-accordion-icon-circle i,
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item.is-active .fb-image-accordion-icon-circle svg {
			${imageAccordionIconHoverColor ? `color: ${imageAccordionIconHoverColor}; fill: ${imageAccordionIconHoverColor};` : ''}
		}

		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-dot {
			${imageAccordionDotColor ? `background-color: ${imageAccordionDotColor};` : ''}
			${imageAccordionDotSize?.Desktop ? `width: ${imageAccordionDotSize.Desktop}${imageAccordionDotSizeUnits?.Desktop ?? 'px'}; height: ${imageAccordionDotSize.Desktop}${imageAccordionDotSizeUnits?.Desktop ?? 'px'};` : ''}
		}

		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-number {
			${imageAccordionNumberColor ? `color: ${imageAccordionNumberColor};` : ''}
			${imageAccordionNumberFontSize?.Desktop ? `font-size: ${imageAccordionNumberFontSize.Desktop}${imageAccordionNumberFontSizeUnits?.Desktop ?? 'px'};` : ''}
			${imageAccordionNumberFontWeight ? `font-weight: ${imageAccordionNumberFontWeight};` : ''}
		}
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item:hover .fb-image-accordion-number,
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item.is-active .fb-image-accordion-number {
			${imageAccordionNumberHoverColor ? `color: ${imageAccordionNumberHoverColor};` : ''}
		}

		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-btn {
			${imageAccordionBtnTextColor ? `color: ${imageAccordionBtnTextColor};` : ''}
			${imageAccordionBtnBgColor ? `background: ${imageAccordionBtnBgColor};` : ''}
			${imageAccordionBtnBorder && imageAccordionBtnBorder !== 'none' ? `border-style: ${imageAccordionBtnBorder};` : ''}
			${imageAccordionBtnBorderColor ? `border-color: ${imageAccordionBtnBorderColor};` : ''}
			${imageAccordionBtnBorderRadiusDesktopWidth && imageAccordionBtnBorderRadiusDesktop?.top ? `border-radius: ${imageAccordionBtnBorderRadiusDesktopWidth};` : ''}
			${imageAccordionBtnPaddingDesktopWidth && imageAccordionBtnPaddingDesktop?.top ? `padding: ${imageAccordionBtnPaddingDesktopWidth};` : ''}
			${imageAccordionBtnFontSize?.Desktop ? `font-size: ${imageAccordionBtnFontSize.Desktop}${imageAccordionBtnFontSizeUnits?.Desktop ?? 'px'};` : ''}
			${imageAccordionBtnFontWeight ? `font-weight: ${imageAccordionBtnFontWeight};` : ''}
			${imageAccordionBtnFontFamily && imageAccordionBtnFontFamily !== 'Default' && imageAccordionBtnFontFamily !== 'inherit' ? `font-family: ${imageAccordionBtnFontFamily};` : ''}
			${imageAccordionBtnFontStyle ? `font-style: ${imageAccordionBtnFontStyle};` : ''}
			${imageAccordionBtnTransform ? `text-transform: ${imageAccordionBtnTransform};` : ''}
			${imageAccordionBtnDecoration ? `text-decoration: ${imageAccordionBtnDecoration};` : ''}
			${imageAccordionBtnLetterSpacing?.Desktop !== '' ? `letter-spacing: ${imageAccordionBtnLetterSpacing.Desktop}${imageAccordionBtnLetterSpacingUnits?.Desktop || 'px'};` : ''}
		}
		.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-btn:hover {
			${imageAccordionBtnHoverTextColor ? `color: ${imageAccordionBtnHoverTextColor};` : ''}
			${imageAccordionBtnHoverBgColor ? `background: ${imageAccordionBtnHoverBgColor};` : ''}
		}

		@media only screen and (max-width: 1024px) {
			.fb-image-accordion-main-wrapper.${blockID} {
				${imageAccordionPositionType === 'default' ? `position: relative;` : ''}
				${imageAccordionPositionType !== 'default' && imageAccordionPositionType !== 'relative' ? `width: 100%;` : ''}
				${imageAccordionPositionType !== 'default' ? `position: ${imageAccordionPositionType};` : ''}
				${imageAccordionPositionType !== 'default' && imageAccordionPositionType !== 'relative' && imageAccordionHZOrientationType === 'left' && imageAccordionHZLeftOffset?.Tablet ? `left: ${imageAccordionHZLeftOffset?.Tablet}${imageAccordionHZLeftOffsetUnits?.Tablet};` : ''}
				${imageAccordionPositionType !== 'default' && imageAccordionPositionType !== 'relative' && imageAccordionHZOrientationType === 'right' && imageAccordionHZRightOffset?.Tablet ? `right: ${imageAccordionHZRightOffset?.Tablet}${imageAccordionHZRightOffsetUnits?.Tablet};` : ''}
				${imageAccordionPositionType !== 'default' && imageAccordionPositionType !== 'relative' && imageAccordionVROrientationType === 'top' && imageAccordionVRTopOffset?.Tablet ? `top: ${imageAccordionVRTopOffset?.Tablet}${imageAccordionVRTopOffsetUnits?.Tablet};` : ''}
				${imageAccordionPositionType !== 'default' && imageAccordionPositionType !== 'relative' && imageAccordionVROrientationType === 'bottom' && imageAccordionVRBottomOffset?.Tablet ? `bottom: ${imageAccordionVRBottomOffset?.Tablet}${imageAccordionVRBottomOffsetUnits?.Tablet};` : ''}
				${imageAccordionGlobalZIndex?.Tablet ? `z-index: ${imageAccordionGlobalZIndex?.Tablet};` : ''}
				${imageAccordionOverflow !== 'default' ? `overflow: ${imageAccordionOverflow};` : ''}
				${imageAccordionWrapperShadowPadding?.Tablet ? `padding-bottom: ${imageAccordionWrapperShadowPadding.Tablet}px;` : ''}
				${imageAccordionWrapperShadowPadding?.Tablet ? `margin-bottom: -${imageAccordionWrapperShadowPadding.Tablet}px;` : ''}

				${imageAccordionWrapperBorderTabletWidth && imageAccordionWrapperBorderTypeTablet?.top ? `border-width: ${imageAccordionWrapperBorderTabletWidth};` : ''}
				${imageAccordionWrapperBorderRadiusTabletWidth && imageAccordionWrapperBorderRadiusTablet?.top ? `border-radius: ${imageAccordionWrapperBorderRadiusTabletWidth};` : ''}
			}

			.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-container {
				${imageAccordionWidth?.Tablet ? `width: ${imageAccordionWidth.Tablet}${imageAccordionWidthUnits?.Tablet ?? '%'};` : ''}
				${imageAccordionHeight?.Tablet ? `height: ${imageAccordionHeight.Tablet}${imageAccordionHeightUnits?.Tablet ?? 'px'};` : ''}
				${imageAccordionPaddingTabletWidth && imageAccordionPaddingTablet?.top ? `padding: ${imageAccordionPaddingTabletWidth};` : ''}
				${imageAccordionMarginTabletWidth && imageAccordionMarginTablet?.top ? `margin: ${imageAccordionMarginTabletWidth};` : ''}
				${imageAccordionPreset !== 'preset-2' && imageAccordionPreset !== 'preset-4' && imageAccordionGap?.Tablet ? `gap: ${imageAccordionGap.Tablet}${imageAccordionGapUnits?.Tablet ?? 'px'};` : ''}
			}

			.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item {
				transition: all ${imageAccordionItemTransitionDuration?.Tablet || 0.4}s ease;
				${imageAccordionItemBorderRadiusTabletWidth && imageAccordionItemBorderRadiusTablet?.top ? `border-radius: ${imageAccordionItemBorderRadiusTabletWidth};` : ''}
				${imageAccordionItemPaddingTabletWidth && imageAccordionItemPaddingTablet?.top ? `padding: ${imageAccordionItemPaddingTabletWidth};` : ''}
				${imageAccordionItemMarginTabletWidth && imageAccordionItemMarginTablet?.top ? `margin: ${imageAccordionItemMarginTabletWidth};` : ''}
			}
			.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item.is-active,
			.fb-image-accordion-wrapper.${blockID}.fb-trigger-hover .fb-image-accordion-item:hover {
				${imageAccordionItemShadow ? `box-shadow: ${imageAccordionItemShadow};` : ''}
				z-index: ${imageAccordionItemActiveZIndex?.Tablet || 99};
				${imageAccordionItemActiveBorderRadiusTabletWidth && imageAccordionItemActiveBorderRadiusTablet?.top ? `border-radius: ${imageAccordionItemActiveBorderRadiusTabletWidth};` : ''}
			}

			.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-title {
				${imageAccordionTitleFontSize?.Tablet ? `font-size: ${imageAccordionTitleFontSize.Tablet}${imageAccordionTitleFontSizeUnits?.Tablet ?? 'px'};` : ''}
				${imageAccordionTitleLetterSpacing?.Tablet ? `letter-spacing: ${imageAccordionTitleLetterSpacing.Tablet}${imageAccordionTitleLetterSpacingUnits?.Tablet || 'px'};` : ''}
			}
			.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-desc,
			.fb-image-accordion-wrapper.${blockID} .fb-sub-title {
				${imageAccordionSubtitleFontSize?.Tablet ? `font-size: ${imageAccordionSubtitleFontSize.Tablet}${imageAccordionSubtitleFontSizeUnits?.Tablet ?? 'px'};` : ''}
				${imageAccordionSubtitleLetterSpacing?.Tablet ? `letter-spacing: ${imageAccordionSubtitleLetterSpacing.Tablet}${imageAccordionSubtitleLetterSpacingUnits?.Tablet || 'px'};` : ''}
			}
			.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-dot {
				${imageAccordionDotSize?.Tablet ? `width: ${imageAccordionDotSize.Tablet}${imageAccordionDotSizeUnits?.Tablet ?? 'px'}; height: ${imageAccordionDotSize.Tablet}${imageAccordionDotSizeUnits?.Tablet ?? 'px'};` : ''}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-image-accordion-main-wrapper.${blockID} {
				${imageAccordionPositionType === 'default' ? `position: relative;` : ''}
				${imageAccordionPositionType !== 'default' && imageAccordionPositionType !== 'relative' ? `width: 100%;` : ''}
				${imageAccordionPositionType !== 'default' ? `position: ${imageAccordionPositionType};` : ''}
				${imageAccordionPositionType !== 'default' && imageAccordionPositionType !== 'relative' && imageAccordionHZOrientationType === 'left' && imageAccordionHZLeftOffset?.Mobile ? `left: ${imageAccordionHZLeftOffset?.Mobile}${imageAccordionHZLeftOffsetUnits?.Mobile};` : ''}
				${imageAccordionPositionType !== 'default' && imageAccordionPositionType !== 'relative' && imageAccordionHZOrientationType === 'right' && imageAccordionHZRightOffset?.Mobile ? `right: ${imageAccordionHZRightOffset?.Mobile}${imageAccordionHZRightOffsetUnits?.Mobile};` : ''}
				${imageAccordionPositionType !== 'default' && imageAccordionPositionType !== 'relative' && imageAccordionVROrientationType === 'top' && imageAccordionVRTopOffset?.Mobile ? `top: ${imageAccordionVRTopOffset?.Mobile}${imageAccordionVRTopOffsetUnits?.Mobile};` : ''}
				${imageAccordionPositionType !== 'default' && imageAccordionPositionType !== 'relative' && imageAccordionVROrientationType === 'bottom' && imageAccordionVRBottomOffset?.Mobile ? `bottom: ${imageAccordionVRBottomOffset?.Mobile}${imageAccordionVRBottomOffsetUnits?.Mobile};` : ''}
				${imageAccordionGlobalZIndex?.Mobile ? `z-index: ${imageAccordionGlobalZIndex?.Mobile};` : ''}
				${imageAccordionOverflow !== 'default' ? `overflow: ${imageAccordionOverflow};` : ''}
				${imageAccordionWrapperShadowPadding?.Mobile ? `padding-bottom: ${imageAccordionWrapperShadowPadding.Mobile}px;` : ''}
				${imageAccordionWrapperShadowPadding?.Mobile ? `margin-bottom: -${imageAccordionWrapperShadowPadding.Mobile}px;` : ''}

				${imageAccordionWrapperBorderMobileWidth && imageAccordionWrapperBorderTypeMobile?.top ? `border-width: ${imageAccordionWrapperBorderMobileWidth};` : ''}
				${imageAccordionWrapperBorderRadiusMobileWidth && imageAccordionWrapperBorderRadiusMobile?.top ? `border-radius: ${imageAccordionWrapperBorderRadiusMobileWidth};` : ''}
			}

			.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-container {
				${imageAccordionWidth?.Mobile ? `width: ${imageAccordionWidth.Mobile}${imageAccordionWidthUnits?.Mobile ?? '%'};` : ''}
				${imageAccordionHeight?.Mobile ? `height: ${imageAccordionHeight.Mobile}${imageAccordionHeightUnits?.Mobile ?? 'px'};` : ''}
				${imageAccordionPaddingMobileWidth && imageAccordionPaddingMobile?.top ? `padding: ${imageAccordionPaddingMobileWidth};` : ''}
				${imageAccordionMarginMobileWidth && imageAccordionMarginMobile?.top ? `margin: ${imageAccordionMarginMobileWidth};` : ''}
				${imageAccordionPreset !== 'preset-2' && imageAccordionPreset !== 'preset-4' && imageAccordionGap?.Mobile ? `gap: ${imageAccordionGap.Mobile}${imageAccordionGapUnits?.Mobile ?? 'px'};` : ''}
			}

			.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item  {
				transition: all ${imageAccordionItemTransitionDuration?.Mobile || 0.4}s ease;
				${imageAccordionItemBorderRadiusMobileWidth && imageAccordionItemBorderRadiusMobile?.top ? `border-radius: ${imageAccordionItemBorderRadiusMobileWidth};` : ''}
				${imageAccordionItemPaddingMobileWidth && imageAccordionItemPaddingMobile?.top ? `padding: ${imageAccordionItemPaddingMobileWidth};` : ''}
				${imageAccordionItemMarginMobileWidth && imageAccordionItemMarginMobile?.top ? `margin: ${imageAccordionItemMarginMobileWidth};` : ''}
			}
			.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-item.is-active,
			.fb-image-accordion-wrapper.${blockID}.fb-trigger-hover .fb-image-accordion-item:hover {
				${imageAccordionItemShadow ? `box-shadow: ${imageAccordionItemShadow};` : ''}
				z-index: ${imageAccordionItemActiveZIndex?.Mobile || 99};
				${imageAccordionItemActiveBorderRadiusMobileWidth && imageAccordionItemActiveBorderRadiusMobile?.top ? `border-radius: ${imageAccordionItemActiveBorderRadiusMobileWidth};` : ''}
			}

			.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-title {
				${imageAccordionTitleFontSize?.Mobile ? `font-size: ${imageAccordionTitleFontSize.Mobile}${imageAccordionTitleFontSizeUnits?.Mobile ?? 'px'};` : ''}
				${imageAccordionTitleLetterSpacing?.Mobile ? `letter-spacing: ${imageAccordionTitleLetterSpacing.Mobile}${imageAccordionTitleLetterSpacingUnits?.Mobile || 'px'};` : ''}
			}
			.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-desc,
			.fb-image-accordion-wrapper.${blockID} .fb-sub-title {
				${imageAccordionSubtitleFontSize?.Mobile ? `font-size: ${imageAccordionSubtitleFontSize.Mobile}${imageAccordionSubtitleFontSizeUnits?.Mobile ?? 'px'};` : ''}
				${imageAccordionSubtitleLetterSpacing?.Mobile ? `letter-spacing: ${imageAccordionSubtitleLetterSpacing.Mobile}${imageAccordionSubtitleLetterSpacingUnits?.Mobile || 'px'};` : ''}
			}
			.fb-image-accordion-wrapper.${blockID} .fb-image-accordion-dot {
				${imageAccordionDotSize?.Mobile ? `width: ${imageAccordionDotSize.Mobile}${imageAccordionDotSizeUnits?.Mobile ?? 'px'}; height: ${imageAccordionDotSize.Mobile}${imageAccordionDotSizeUnits?.Mobile ?? 'px'};` : ''}
			}
		}
	`;

    const customCss = getCustomCss(imageAccordionCustomCSS, `.${blockID}`);
    return `${blockStyle} ${customCss}`.replace(/\s+/g, ' ').trim();
};

export default generateImageAccordionStyle;
