/**
 * imageAccordion Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from "@Utils/getCustomCss";

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateimageAccordionStyle = (attributes) => {
	const {
		blockID,
		blockStyle,
		imageAccordionAlignment,
		imageAccordionIconZIndex,
		imageAccordionItems,

		imageAccordionIconSize,
		imageAccordionIconSizeUnits,

		imageAccordionIconColorSwitcher,
		imageAccordionIconColor,
		imageAccordionIconHoverColor,

		imageAccordionIconBorder,
		imageAccordionIconBorderColorSwitcher,
		imageAccordionIconBorderColor,
		imageAccordionIconBorderHoverColor,

		imageAccordionIconBorderUnits,
		imageAccordionIconBorderDesktop,
		imageAccordionIconBorderTablet,
		imageAccordionIconBorderMobile,
		imageAccordionIconBorderLink,

		imageAccordionIconBorderRadiusUnits,
		imageAccordionIconBorderRadiusDesktop,
		imageAccordionIconBorderRadiusTablet,
		imageAccordionIconBorderRadiusMobile,
		imageAccordionIconBorderRadiusLink,

		imageAccordionIconGapSize,
		imageAccordionIconGapUnits,

		imageAccordionIconPaddingUnits,
		imageAccordionIconPaddingDesktop,
		imageAccordionIconPaddingTablet,
		imageAccordionIconPaddingMobile,
		imageAccordionIconPaddingLink,

		titleGlobalTypoSwitcher,
		titleGlobalTypographyData,
		titleGlobalTypoType,
		titleGlobalTypoOption,
		titleFontFamily,
		titleFontSize,
		titleFontSizeUnits,
		titleFontWeight,
		titleFontStyle,
		titleTextTransform,
		titleTextDecoration,
		titleLetterSpacing,
		titleLetterSpacingUnits,
		titleLineHeight,
		titleLineHeightUnits,

		imageAccordionType,
		displayIcon,
		transitionDuration,
		tabIconSwitcher,
		tabIcon,
		tabImageUrl,
		tabImageAlt,
		tabImageID,
		tabImagePosition,
		tabImageAttachment,
		tabImageRepeat,
		tabImageSize,

		expandedIconSwitcher,
		expandedIcon,
		expandedImageUrl,
		expandedImageAlt,
		expandedImageID,
		expandedImagePosition,
		expandedImageAttachment,
		expandedImageRepeat,
		expandedImageSize,
		contentAlign,
		contentColor,
		iconColor,
		iconPosition,
		titleAlignment,
		tagName,
		faqSchema,

		titleColorSwitcher,
		titleColor,
		titleHoverColor,

		imageAccordionItemGap,
		imageAccordionItemGapUnits,

		titleSpacing,
		titleSpacingUnits,

		prefixSuffixSpacing,
		prefixSuffixSpacingUnits,

		titleIconSize,
		titleIconSizeUnits,

		titlePrefixIconSize,
		titlePrefixIconSizeUnits,

		titleSuffixIconSize,
		titleSuffixIconSizeUnits,

		titleBGColorSwitcher,
		titleBGColor,
		titleBGHoverColor,
		titleIconColorSwitcher,
		titleIconColor,
		titleIconHoverColor,

		// imageAccordion Items
		imageAccordionItemsPaddingUnits,
		imageAccordionItemsDesktopPadding,
		imageAccordionItemsTabPadding,
		imageAccordionItemsMobilePadding,
		imageAccordionItemsPaddingLink,

		imageAccordionItemsBorder,
		imageAccordionItemsBorderColor,
		imageAccordionItemsBorderHoverColor,
		imageAccordionItemsBorderColorSwitcher,
		imageAccordionItemsBorderUnits,
		imageAccordionItemsDesktopBorderWidth,
		imageAccordionItemsTabBorderWidth,
		imageAccordionItemsMobileBorderWidth,
		imageAccordionItemsBorderLink,
		imageAccordionItemsBorderRadiusUnits,
		imageAccordionItemsDesktopBorderRadiusWidth,
		imageAccordionItemsTabBorderRadiusWidth,
		imageAccordionItemsMobileBorderRadiusWidth,
		imageAccordionItemsBorderRadiusLink,

		// imageAccordion Advance
		imageAccordionZIndex,
		imageAccordionOverflow,
		imageAccordionPaddingUnits,
		imageAccordionDesktopPadding,
		imageAccordionTabPadding,
		imageAccordionMobilePadding,
		imageAccordionPaddingLink,
		imageAccordionMarginUnits,
		imageAccordionDesktopMargin,
		imageAccordionTabMargin,
		imageAccordionMobileMargin,
		imageAccordionMarginLink,
		imageAccordionBorder,
		imageAccordionBorderColor,
		imageAccordionBorderHoverColor,
		imageAccordionBorderColorSwitcher,
		imageAccordionBorderUnits,
		imageAccordionDesktopBorderWidth,
		imageAccordionTabBorderWidth,
		imageAccordionMobileBorderWidth,
		imageAccordionBorderLink,
		imageAccordionBorderRadiusUnits,
		imageAccordionDesktopBorderRadiusWidth,
		imageAccordionTabBorderRadiusWidth,
		imageAccordionMobileBorderRadiusWidth,
		imageAccordionBorderRadiusLink,
		imageAccordionDesktopSwitcher,
		imageAccordionTabletSwitcher,
		imageAccordionMobileSwitcher,

		// Boxshadow
		imageAccordionGlobalBoxShadowSwitcher,
		imageAccordionGlobalBoxShadowValues,
		imageAccordionGlobalBoxShadowCssValue,
		imageAccordionGlobalHoverBoxShadowValues,
		imageAccordionGlobalHoverBoxShadowCssValue,

		// Backgorund
		imageAccordionBgColorSwitcher,
		imageAccordionBgType,
		imageAccordionBgClassicColor,
		imageAccordionBgGradientColor,
		imageAccordionBgCustomGradientSwitcher,
		imageAccordionBgCustomGradientInputValue,
		imageAccordionBgImageUrl,
		imageAccordionBgImageAlt,
		imageAccordionBgImageID,
		imageAccordionBgImagePosition,
		imageAccordionBgImageAttachment,
		imageAccordionBgImageRepeat,
		imageAccordionBgImageSize,
		imageAccordionBgHoverType,
		imageAccordionBgHoverClassicColor,
		imageAccordionBgHoverGradientColor,
		imageAccordionBgHoverCustomGradientSwitcher,
		imageAccordionBgHoverCustomGradientInputValue,
		imageAccordionBgHoverImageUrl,
		imageAccordionBgHoverImageAlt,
		imageAccordionBgHoverImageID,
		imageAccordionBgHoverImagePosition,
		imageAccordionBgHoverImageAttachment,
		imageAccordionBgHoverImageRepeat,
		imageAccordionBgHoverImageSize,

		// Item Box Shadow
		imageAccordionItemBoxShadowSwitcher,
		imageAccordionItemBoxShadowValues,
		imageAccordionItemBoxShadowCssValue,
		imageAccordionItemHoverBoxShadowValues,
		imageAccordionItemHoverBoxShadowCssValue,

		// Item Backgorund
		titleBgColorSwitcher,
		titleBgType,
		titleBgClassicColor,
		titleBgGradientColor,
		titleBgCustomGradientSwitcher,
		titleBgCustomGradientInputValue,
		titleBgImageUrl,
		titleBgImageAlt,
		titleBgImageID,
		titleBgImagePosition,
		titleBgImageAttachment,
		titleBgImageRepeat,
		titleBgImageSize,
		titleBgHoverType,
		titleBgHoverClassicColor,
		titleBgHoverGradientColor,
		titleBgHoverCustomGradientSwitcher,
		titleBgHoverCustomGradientInputValue,
		titleBgHoverImageUrl,
		titleBgHoverImageAlt,
		titleBgHoverImageID,
		titleBgHoverImagePosition,
		titleBgHoverImageAttachment,
		titleBgHoverImageRepeat,
		titleBgHoverImageSize,

		// imageAccordion Item Content
		contentBorder,
		contentBorderColor,
		contentBorderHoverColor,
		contentBorderColorSwitcher,
		contentBorderUnits,
		contentDesktopBorderWidth,
		contentTabBorderWidth,
		contentMobileBorderWidth,
		contentBorderLink,
		contentBorderRadiusUnits,
		contentDesktopBorderRadiusWidth,
		contentTabBorderRadiusWidth,
		contentMobileBorderRadiusWidth,
		contentBorderRadiusLink,
		contentDesktopSwitcher,
		contentTabletSwitcher,
		contentMobileSwitcher,

		// Item Box Shadow
		contentBoxShadowSwitcher,
		contentBoxShadowValues,
		contentBoxShadowCssValue,
		contentHoverBoxShadowValues,
		contentHoverBoxShadowCssValue,

		// Item Backgorund
		contentBgColorSwitcher,
		contentBgType,
		contentBgClassicColor,
		contentBgGradientColor,
		contentBgCustomGradientSwitcher,
		contentBgCustomGradientInputValue,
		contentBgImageUrl,
		contentBgImageAlt,
		contentBgImageID,
		contentBgImagePosition,
		contentBgImageAttachment,
		contentBgImageRepeat,
		contentBgImageSize,
		contentBgHoverType,
		contentBgHoverClassicColor,
		contentBgHoverGradientColor,
		contentBgHoverCustomGradientSwitcher,
		contentBgHoverCustomGradientInputValue,
		contentBgHoverImageUrl,
		contentBgHoverImageAlt,
		contentBgHoverImageID,
		contentBgHoverImagePosition,
		contentBgHoverImageAttachment,
		contentBgHoverImageRepeat,
		contentBgHoverImageSize,

		imageAccordionCustomCSS,
		imageAccordionGlobalWraperID,
		imageAccordionGlobalWraperClass,

		// Position
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
	} = attributes;

	const imageAccordionItemsPaddingDesktopWidth = `${imageAccordionItemsDesktopPadding?.top}${imageAccordionItemsPaddingUnits?.Desktop} ${imageAccordionItemsDesktopPadding?.right}${imageAccordionItemsPaddingUnits?.Desktop} ${imageAccordionItemsDesktopPadding?.bottom}${imageAccordionItemsPaddingUnits?.Desktop} ${imageAccordionItemsDesktopPadding?.left}${imageAccordionItemsPaddingUnits?.Desktop}`;
	const imageAccordionItemsPaddingTabletWidth = `${imageAccordionItemsTabPadding?.top}${imageAccordionItemsPaddingUnits?.Tablet} ${imageAccordionItemsTabPadding?.right}${imageAccordionItemsPaddingUnits?.Tablet} ${imageAccordionItemsTabPadding?.bottom}${imageAccordionItemsPaddingUnits?.Tablet} ${imageAccordionItemsTabPadding?.left}${imageAccordionItemsPaddingUnits?.Tablet}`;
	const imageAccordionItemsPaddingMobileWidth = `${imageAccordionItemsMobilePadding?.top}${imageAccordionItemsPaddingUnits?.Mobile} ${imageAccordionItemsMobilePadding?.right}${imageAccordionItemsPaddingUnits?.Mobile} ${imageAccordionItemsMobilePadding?.bottom}${imageAccordionItemsPaddingUnits?.Mobile} ${imageAccordionItemsMobilePadding?.left}${imageAccordionItemsPaddingUnits?.Mobile}`;

	const imageAccordionItemsBorderDesktopWidth = `${imageAccordionItemsDesktopBorderWidth?.top}${imageAccordionItemsBorderUnits?.Desktop} ${imageAccordionItemsDesktopBorderWidth?.right}${imageAccordionItemsBorderUnits?.Desktop} ${imageAccordionItemsDesktopBorderWidth?.bottom}${imageAccordionItemsBorderUnits?.Desktop} ${imageAccordionItemsDesktopBorderWidth?.left}${imageAccordionItemsBorderUnits?.Desktop}`;
	const imageAccordionItemsBorderTabletWidth = `${imageAccordionItemsTabBorderWidth?.top}${imageAccordionItemsBorderUnits?.Tablet} ${imageAccordionItemsTabBorderWidth?.right}${imageAccordionItemsBorderUnits?.Tablet} ${imageAccordionItemsTabBorderWidth?.bottom}${imageAccordionItemsBorderUnits?.Tablet} ${imageAccordionItemsTabBorderWidth?.left}${imageAccordionItemsBorderUnits?.Tablet}`;
	const imageAccordionItemsBorderMobileWidth = `${imageAccordionItemsMobileBorderWidth?.top}${imageAccordionItemsBorderUnits?.Mobile} ${imageAccordionItemsMobileBorderWidth?.right}${imageAccordionItemsBorderUnits?.Mobile} ${imageAccordionItemsMobileBorderWidth?.bottom}${imageAccordionItemsBorderUnits?.Mobile} ${imageAccordionItemsMobileBorderWidth?.left}${imageAccordionItemsBorderUnits?.Mobile}`;

	const imageAccordionItemsBorderRadiusDesktopWidth = `${imageAccordionItemsDesktopBorderRadiusWidth?.top}${imageAccordionItemsBorderRadiusUnits?.Desktop} ${imageAccordionItemsDesktopBorderRadiusWidth?.right}${imageAccordionItemsBorderRadiusUnits?.Desktop} ${imageAccordionItemsDesktopBorderRadiusWidth?.bottom}${imageAccordionItemsBorderRadiusUnits?.Desktop} ${imageAccordionItemsDesktopBorderRadiusWidth?.left}${imageAccordionItemsBorderRadiusUnits?.Desktop}`;
	const imageAccordionItemsBorderRadiusTabletWidth = `${imageAccordionItemsTabBorderRadiusWidth?.top}${imageAccordionItemsBorderRadiusUnits?.Tablet} ${imageAccordionItemsTabBorderRadiusWidth?.right}${imageAccordionItemsBorderRadiusUnits?.Tablet} ${imageAccordionItemsTabBorderRadiusWidth?.bottom}${imageAccordionItemsBorderRadiusUnits?.Tablet} ${imageAccordionItemsTabBorderRadiusWidth?.left}${imageAccordionItemsBorderRadiusUnits?.Tablet}`;
	const imageAccordionItemsBorderRadiusMobileWidth = `${imageAccordionItemsMobileBorderRadiusWidth?.top}${imageAccordionItemsBorderRadiusUnits?.Mobile} ${imageAccordionItemsMobileBorderRadiusWidth?.right}${imageAccordionItemsBorderRadiusUnits?.Mobile} ${imageAccordionItemsMobileBorderRadiusWidth?.bottom}${imageAccordionItemsBorderRadiusUnits?.Mobile} ${imageAccordionItemsMobileBorderRadiusWidth?.left}${imageAccordionItemsBorderRadiusUnits?.Mobile}`;

	const imageAccordionMarginDesktopWidth = `${imageAccordionDesktopMargin?.top}${imageAccordionMarginUnits?.Desktop} ${imageAccordionDesktopMargin?.right}${imageAccordionMarginUnits?.Desktop} ${imageAccordionDesktopMargin?.bottom}${imageAccordionMarginUnits?.Desktop} ${imageAccordionDesktopMargin?.left}${imageAccordionMarginUnits?.Desktop}`;
	const imageAccordionMarginTabletWidth = `${imageAccordionTabMargin?.top}${imageAccordionMarginUnits?.Tablet} ${imageAccordionTabMargin?.right}${imageAccordionMarginUnits?.Tablet} ${imageAccordionTabMargin?.bottom}${imageAccordionMarginUnits?.Tablet} ${imageAccordionTabMargin?.left}${imageAccordionMarginUnits?.Tablet}`;
	const imageAccordionMarginMobileWidth = `${imageAccordionMobileMargin?.top}${imageAccordionMarginUnits?.Mobile} ${imageAccordionMobileMargin?.right}${imageAccordionMarginUnits?.Mobile} ${imageAccordionMobileMargin?.bottom}${imageAccordionMarginUnits?.Mobile} ${imageAccordionMobileMargin?.left}${imageAccordionMarginUnits?.Mobile}`;

	const imageAccordionPaddingDesktopWidth = `${imageAccordionDesktopPadding?.top}${imageAccordionPaddingUnits?.Desktop} ${imageAccordionDesktopPadding?.right}${imageAccordionPaddingUnits?.Desktop} ${imageAccordionDesktopPadding?.bottom}${imageAccordionPaddingUnits?.Desktop} ${imageAccordionDesktopPadding?.left}${imageAccordionPaddingUnits?.Desktop}`;
	const imageAccordionPaddingTabletWidth = `${imageAccordionTabPadding?.top}${imageAccordionPaddingUnits?.Tablet} ${imageAccordionTabPadding?.right}${imageAccordionPaddingUnits?.Tablet} ${imageAccordionTabPadding?.bottom}${imageAccordionPaddingUnits?.Tablet} ${imageAccordionTabPadding?.left}${imageAccordionPaddingUnits?.Tablet}`;
	const imageAccordionPaddingMobileWidth = `${imageAccordionMobilePadding?.top}${imageAccordionPaddingUnits?.Mobile} ${imageAccordionMobilePadding?.right}${imageAccordionPaddingUnits?.Mobile} ${imageAccordionMobilePadding?.bottom}${imageAccordionPaddingUnits?.Mobile} ${imageAccordionMobilePadding?.left}${imageAccordionPaddingUnits?.Mobile}`;

	const imageAccordionBorderDesktopWidth = `${imageAccordionDesktopBorderWidth?.top}${imageAccordionBorderUnits?.Desktop} ${imageAccordionDesktopBorderWidth?.right}${imageAccordionBorderUnits?.Desktop} ${imageAccordionDesktopBorderWidth?.bottom}${imageAccordionBorderUnits?.Desktop} ${imageAccordionDesktopBorderWidth?.left}${imageAccordionBorderUnits?.Desktop}`;
	const imageAccordionBorderTabletWidth = `${imageAccordionTabBorderWidth?.top}${imageAccordionBorderUnits?.Tablet} ${imageAccordionTabBorderWidth?.right}${imageAccordionBorderUnits?.Tablet} ${imageAccordionTabBorderWidth?.bottom}${imageAccordionBorderUnits?.Tablet} ${imageAccordionTabBorderWidth?.left}${imageAccordionBorderUnits?.Tablet}`;
	const imageAccordionBorderMobileWidth = `${imageAccordionMobileBorderWidth?.top}${imageAccordionBorderUnits?.Mobile} ${imageAccordionMobileBorderWidth?.right}${imageAccordionBorderUnits?.Mobile} ${imageAccordionMobileBorderWidth?.bottom}${imageAccordionBorderUnits?.Mobile} ${imageAccordionMobileBorderWidth?.left}${imageAccordionBorderUnits?.Mobile}`;

	const imageAccordionBorderRadiusDesktopWidth = `${imageAccordionDesktopBorderRadiusWidth?.top}${imageAccordionBorderRadiusUnits?.Desktop} ${imageAccordionDesktopBorderRadiusWidth?.right}${imageAccordionBorderRadiusUnits?.Desktop} ${imageAccordionDesktopBorderRadiusWidth?.bottom}${imageAccordionBorderRadiusUnits?.Desktop} ${imageAccordionDesktopBorderRadiusWidth?.left}${imageAccordionBorderRadiusUnits?.Desktop}`;
	const imageAccordionBorderRadiusTabletWidth = `${imageAccordionTabBorderRadiusWidth?.top}${imageAccordionBorderRadiusUnits?.Tablet} ${imageAccordionTabBorderRadiusWidth?.right}${imageAccordionBorderRadiusUnits?.Tablet} ${imageAccordionTabBorderRadiusWidth?.bottom}${imageAccordionBorderRadiusUnits?.Tablet} ${imageAccordionTabBorderRadiusWidth?.left}${imageAccordionBorderRadiusUnits?.Tablet}`;
	const imageAccordionBorderRadiusMobileWidth = `${imageAccordionMobileBorderRadiusWidth?.top}${imageAccordionBorderRadiusUnits?.Mobile} ${imageAccordionMobileBorderRadiusWidth?.right}${imageAccordionBorderRadiusUnits?.Mobile} ${imageAccordionMobileBorderRadiusWidth?.bottom}${imageAccordionBorderRadiusUnits?.Mobile} ${imageAccordionMobileBorderRadiusWidth?.left}${imageAccordionBorderRadiusUnits?.Mobile}`;

	const contentBorderDesktopWidth = `${contentDesktopBorderWidth?.top}${contentBorderUnits?.Desktop} ${contentDesktopBorderWidth?.right}${contentBorderUnits?.Desktop} ${contentDesktopBorderWidth?.bottom}${contentBorderUnits?.Desktop} ${contentDesktopBorderWidth?.left}${contentBorderUnits?.Desktop}`;
	const contentBorderTabletWidth = `${contentTabBorderWidth?.top}${contentBorderUnits?.Tablet} ${contentTabBorderWidth?.right}${contentBorderUnits?.Tablet} ${contentTabBorderWidth?.bottom}${contentBorderUnits?.Tablet} ${contentTabBorderWidth?.left}${contentBorderUnits?.Tablet}`;
	const contentBorderMobileWidth = `${contentMobileBorderWidth?.top}${contentBorderUnits?.Mobile} ${contentMobileBorderWidth?.right}${contentBorderUnits?.Mobile} ${contentMobileBorderWidth?.bottom}${contentBorderUnits?.Mobile} ${contentMobileBorderWidth?.left}${contentBorderUnits?.Mobile}`;

	const contentBorderRadiusDesktopWidth = `${contentDesktopBorderRadiusWidth?.top}${contentBorderRadiusUnits?.Desktop} ${contentDesktopBorderRadiusWidth?.right}${contentBorderRadiusUnits?.Desktop} ${contentDesktopBorderRadiusWidth?.bottom}${contentBorderRadiusUnits?.Desktop} ${contentDesktopBorderRadiusWidth?.left}${contentBorderRadiusUnits?.Desktop}`;
	const contentBorderRadiusTabletWidth = `${contentTabBorderRadiusWidth?.top}${contentBorderRadiusUnits?.Tablet} ${contentTabBorderRadiusWidth?.right}${contentBorderRadiusUnits?.Tablet} ${contentTabBorderRadiusWidth?.bottom}${contentBorderRadiusUnits?.Tablet} ${contentTabBorderRadiusWidth?.left}${contentBorderRadiusUnits?.Tablet}`;
	const contentBorderRadiusMobileWidth = `${contentMobileBorderRadiusWidth?.top}${contentBorderRadiusUnits?.Mobile} ${contentMobileBorderRadiusWidth?.right}${contentBorderRadiusUnits?.Mobile} ${contentMobileBorderRadiusWidth?.bottom}${contentBorderRadiusUnits?.Mobile} ${contentMobileBorderRadiusWidth?.left}${contentBorderRadiusUnits?.Mobile}`;

	// FB imageAccordion Style
	const fbimageAccordionItemstyle = `
        .fb-imageAccordion-main-wrapper.${blockID} {
            ${
							imageAccordionPositionType === "default"
								? `position: relative;`
								: ""
						}
            width: 100%;
            ${
							imageAccordionPositionType !== "default"
								? `position: ${imageAccordionPositionType};`
								: ""
						}
            ${
							imageAccordionPositionType !== "default" &&
							imageAccordionPositionType !== "relative" &&
							imageAccordionHZOrientationType === "left" &&
							imageAccordionHZLeftOffset?.Desktop
								? `left: ${imageAccordionHZLeftOffset?.Desktop}${imageAccordionHZLeftOffsetUnits?.Desktop};`
								: ""
						}
            ${
							imageAccordionPositionType !== "default" &&
							imageAccordionPositionType !== "relative" &&
							imageAccordionHZOrientationType === "right" &&
							imageAccordionHZRightOffset?.Desktop
								? `right: ${imageAccordionHZRightOffset?.Desktop}${imageAccordionHZRightOffsetUnits?.Desktop};`
								: ""
						}
            ${
							imageAccordionPositionType !== "default" &&
							imageAccordionPositionType !== "relative" &&
							imageAccordionVROrientationType === "top" &&
							imageAccordionVRTopOffset?.Desktop
								? `top: ${imageAccordionVRTopOffset?.Desktop}${imageAccordionVRTopOffsetUnits?.Desktop};`
								: ""
						}
            ${
							imageAccordionPositionType !== "default" &&
							imageAccordionPositionType !== "relative" &&
							imageAccordionVROrientationType === "bottom" &&
							imageAccordionVRBottomOffset?.Desktop
								? `bottom: ${imageAccordionVRBottomOffset?.Desktop}${imageAccordionVRBottomOffsetUnits?.Desktop};`
								: ""
						}
            ${
							imageAccordionZIndex?.Desktop
								? `z-index: ${imageAccordionZIndex?.Desktop};`
								: ""
						}
            ${
							imageAccordionOverflow !== "default"
								? `overflow: ${imageAccordionOverflow};`
								: ""
						}
        }
        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-wrapper {
            position: relative;
            ${
							imageAccordionPaddingDesktopWidth &&
							imageAccordionDesktopPadding?.top
								? `padding: ${imageAccordionPaddingDesktopWidth};`
								: ""
						}
            ${
							imageAccordionMarginDesktopWidth &&
							imageAccordionDesktopMargin?.top
								? `margin: ${imageAccordionMarginDesktopWidth};`
								: ""
						}
            ${
							imageAccordionBorder !== "none"
								? `border-style: ${imageAccordionBorder};`
								: ""
						}
            ${
							imageAccordionBorderDesktopWidth &&
							imageAccordionDesktopBorderWidth?.top
								? `border-width: ${imageAccordionBorderDesktopWidth};`
								: ""
						}
            ${
							imageAccordionBorderColor
								? `border-color: ${imageAccordionBorderColor};`
								: ""
						}
            ${
							imageAccordionBorderRadiusDesktopWidth &&
							imageAccordionDesktopBorderRadiusWidth?.top
								? `border-radius: ${imageAccordionBorderRadiusDesktopWidth};`
								: ""
						}
            ${
							imageAccordionBgType === "gradient"
								? `background: ${
										imageAccordionBgCustomGradientSwitcher &&
										imageAccordionBgCustomGradientInputValue
											? imageAccordionBgCustomGradientInputValue
											: imageAccordionBgGradientColor
								  };`
								: imageAccordionBgImageUrl !== undefined &&
								  imageAccordionBgImageUrl !== null &&
								  imageAccordionBgImageUrl !== ""
								? `
                    ${
											imageAccordionBgImageUrl !== undefined
												? `background-image: url(${imageAccordionBgImageUrl});`
												: ""
										}
                    ${
											imageAccordionBgImagePosition !== undefined
												? `background-position: ${imageAccordionBgImagePosition};`
												: ""
										}
                    ${
											imageAccordionBgImageAttachment !== undefined
												? `background-attachment: ${imageAccordionBgImageAttachment};`
												: ""
										}
                    ${
											imageAccordionBgImageRepeat !== undefined
												? `background-repeat: ${imageAccordionBgImageRepeat};`
												: ""
										}
                    ${
											imageAccordionBgImageSize !== undefined
												? `background-size: ${imageAccordionBgImageSize};`
												: ""
										}
                    `
								: imageAccordionBgClassicColor
								? `background: ${imageAccordionBgClassicColor};`
								: ""
						}
            ${
							imageAccordionGlobalBoxShadowCssValue
								? `box-shadow: ${imageAccordionGlobalBoxShadowCssValue};`
								: ""
						}
            overflow: hidden;
            transition: all .3s ease-in-out;
        }
        
        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-wrapper:hover {
            ${
							imageAccordionBgHoverType === "gradient"
								? `background: ${
										imageAccordionBgHoverCustomGradientSwitcher &&
										imageAccordionBgHoverCustomGradientInputValue
											? imageAccordionBgHoverCustomGradientInputValue
											: imageAccordionBgHoverGradientColor
								  };`
								: imageAccordionBgHoverImageUrl !== undefined &&
								  imageAccordionBgHoverImageUrl !== null &&
								  imageAccordionBgHoverImageUrl !== ""
								? `
                    ${
											imageAccordionBgHoverImageUrl !== undefined
												? `background-image: url(${imageAccordionBgHoverImageUrl});`
												: ""
										}
                    ${
											imageAccordionBgHoverImagePosition !== undefined
												? `background-position: ${imageAccordionBgHoverImagePosition};`
												: ""
										}
                    ${
											imageAccordionBgHoverImageAttachment !== undefined
												? `background-attachment: ${imageAccordionBgHoverImageAttachment};`
												: ""
										}
                    ${
											imageAccordionBgHoverImageRepeat !== undefined
												? `background-repeat: ${imageAccordionBgHoverImageRepeat};`
												: ""
										}
                    ${
											imageAccordionBgHoverImageSize !== undefined
												? `background-size: ${imageAccordionBgHoverImageSize};`
												: ""
										}
                    `
								: imageAccordionBgHoverClassicColor
								? `background: ${imageAccordionBgHoverClassicColor};`
								: ""
						}
            ${
							imageAccordionBorderHoverColor
								? `border-color: ${imageAccordionBorderHoverColor};`
								: ""
						}
            ${
							imageAccordionGlobalHoverBoxShadowCssValue
								? `box-shadow: ${imageAccordionGlobalHoverBoxShadowCssValue};`
								: ""
						}
            transition: all .3s ease-in-out;
        }

        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper {
            ${
							titleBgType === "gradient"
								? `background: ${
										titleBgCustomGradientSwitcher &&
										titleBgCustomGradientInputValue
											? titleBgCustomGradientInputValue
											: titleBgGradientColor
								  };`
								: titleBgImageUrl !== undefined &&
								  titleBgImageUrl !== null &&
								  titleBgImageUrl !== ""
								? `
                    ${
											titleBgImageUrl !== undefined
												? `background-image: url(${titleBgImageUrl});`
												: ""
										}
                    ${
											titleBgImagePosition !== undefined
												? `background-position: ${titleBgImagePosition};`
												: ""
										}
                    ${
											titleBgImageAttachment !== undefined
												? `background-attachment: ${titleBgImageAttachment};`
												: ""
										}
                    ${
											titleBgImageRepeat !== undefined
												? `background-repeat: ${titleBgImageRepeat};`
												: ""
										}
                    ${
											titleBgImageSize !== undefined
												? `background-size: ${titleBgImageSize};`
												: ""
										}
                    `
								: titleBgClassicColor
								? `background: ${titleBgClassicColor};`
								: ""
						}
            display: flex;
            align-items: center;
            cursor: pointer;
            ${
							titleSpacing?.Desktop
								? `gap: ${titleSpacing?.Desktop}${titleSpacingUnits?.Desktop};`
								: ""
						}
            ${
							imageAccordionItemsPaddingDesktopWidth &&
							imageAccordionItemsDesktopPadding?.top
								? `padding: ${imageAccordionItemsPaddingDesktopWidth};`
								: ""
						}
            ${
							imageAccordionItemsBorder
								? `border-style: ${imageAccordionItemsBorder};`
								: ""
						}
            ${
							imageAccordionItemsBorderColor
								? `border-color: ${imageAccordionItemsBorderColor};`
								: ""
						}
            ${
							imageAccordionItemsBorderDesktopWidth &&
							imageAccordionItemsDesktopBorderWidth?.top
								? `border-width: ${imageAccordionItemsBorderDesktopWidth};`
								: ""
						}
            ${
							imageAccordionItemsBorderRadiusDesktopWidth &&
							imageAccordionItemsDesktopBorderRadiusWidth?.top
								? `border-radius: ${imageAccordionItemsBorderRadiusDesktopWidth};`
								: ""
						}
            ${
							imageAccordionItemBoxShadowCssValue
								? `box-shadow: ${imageAccordionItemBoxShadowCssValue};`
								: ""
						}
            transition: all .3s ease-in-out;
        }
        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper:hover {
            ${
							titleBgHoverType === "gradient"
								? `background: ${
										titleBgHoverCustomGradientSwitcher &&
										titleBgHoverCustomGradientInputValue
											? titleBgHoverCustomGradientInputValue
											: titleBgHoverGradientColor
								  };`
								: titleBgHoverImageUrl !== undefined &&
								  titleBgHoverImageUrl !== null &&
								  titleBgHoverImageUrl !== ""
								? `
                    ${
											titleBgHoverImageUrl !== undefined
												? `background-image: url(${titleBgHoverImageUrl});`
												: ""
										}
                    ${
											titleBgHoverImagePosition !== undefined
												? `background-position: ${titleBgHoverImagePosition};`
												: ""
										}
                    ${
											titleBgHoverImageAttachment !== undefined
												? `background-attachment: ${titleBgHoverImageAttachment};`
												: ""
										}
                    ${
											titleBgHoverImageRepeat !== undefined
												? `background-repeat: ${titleBgHoverImageRepeat};`
												: ""
										}
                    ${
											titleBgHoverImageSize !== undefined
												? `background-size: ${titleBgHoverImageSize};`
												: ""
										}
                    `
								: titleBgHoverClassicColor
								? `background: ${titleBgHoverClassicColor};`
								: ""
						}
            ${
							imageAccordionItemsBorderHoverColor
								? `border-color: ${imageAccordionItemsBorderHoverColor};`
								: ""
						}
            ${
							imageAccordionItemHoverBoxShadowCssValue
								? `box-shadow: ${imageAccordionItemHoverBoxShadowCssValue};`
								: ""
						}
            transition: all .3s ease-in-out;
        }

        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title {
            ${
							titleGlobalTypoSwitcher?.fontFamily === true &&
							titleGlobalTypographyData?.fontFamily
								? `font-family: ${titleGlobalTypographyData?.fontFamily};`
								: ""
						}
            ${
							titleGlobalTypoSwitcher?.fontSize === true &&
							titleGlobalTypographyData?.fontSize
								? `font-size: ${titleGlobalTypographyData?.fontSize};`
								: ""
						}
            ${
							titleGlobalTypoSwitcher?.fontWeight === true &&
							titleGlobalTypographyData?.fontWeight
								? `font-weight: ${titleGlobalTypographyData?.fontWeight};`
								: ""
						}
            ${
							titleGlobalTypoSwitcher?.fontStyle === true &&
							titleGlobalTypographyData?.fontStyle
								? `font-style: ${titleGlobalTypographyData?.fontStyle};`
								: ""
						}
            ${
							titleGlobalTypoSwitcher?.textTransform === true &&
							titleGlobalTypographyData?.textTransform
								? `text-transform: ${titleGlobalTypographyData?.textTransform};`
								: ""
						}
            ${
							titleGlobalTypoSwitcher?.textDecoration === true &&
							titleGlobalTypographyData?.textDecoration
								? `text-decoration: ${titleGlobalTypographyData?.textDecoration};`
								: ""
						}
            ${
							titleGlobalTypoSwitcher?.letterSpacing === true &&
							titleGlobalTypographyData?.letterSpacing
								? `letter-spacing: ${titleGlobalTypographyData?.letterSpacing};`
								: ""
						}
            ${
							titleGlobalTypoSwitcher?.lineHeight === true &&
							titleGlobalTypographyData?.lineHeight
								? `line-height: ${titleGlobalTypographyData?.lineHeight};`
								: ""
						}
            
            ${
							titleGlobalTypoSwitcher?.fontFamily === false &&
							titleFontFamily &&
							titleFontFamily !== "default"
								? `font-family: ${titleFontFamily};`
								: ""
						}
            ${
							titleGlobalTypoSwitcher?.fontSize === false &&
							titleFontSize?.Desktop
								? `font-size: ${titleFontSize?.Desktop}${titleFontSizeUnits?.Desktop};`
								: ""
						}
            ${
							titleGlobalTypoSwitcher?.fontWeight === false && titleFontWeight
								? `font-weight: ${titleFontWeight};`
								: ""
						}
            ${
							titleGlobalTypoSwitcher?.fontStyle === false && titleFontStyle
								? `font-style: ${titleFontStyle};`
								: ""
						}
            ${
							titleGlobalTypoSwitcher?.textTransform === false &&
							titleTextTransform
								? `text-transform: ${titleTextTransform};`
								: ""
						}
            ${
							titleGlobalTypoSwitcher?.textDecoration === false &&
							titleTextDecoration
								? `text-decoration: ${titleTextDecoration};`
								: ""
						}
            ${
							titleGlobalTypoSwitcher?.letterSpacing === false &&
							titleLetterSpacing?.Desktop
								? `letter-spacing: ${titleLetterSpacing?.Desktop}${titleLetterSpacingUnits?.Desktop};`
								: ""
						}
            ${
							titleGlobalTypoSwitcher?.lineHeight === false &&
							titleLineHeight?.Desktop
								? `line-height: ${titleLineHeight?.Desktop}${titleLineHeightUnits?.Desktop};`
								: ""
						}
            ${titleColor ? `color: ${titleColor};` : ""}
        }
        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper:hover .fb-imageAccordion-title {
            ${titleHoverColor ? `color: ${titleHoverColor};` : ""}
        }

        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-tab-icon svg,
        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-tab-icon img,
        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-expanded-icon svg,
        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-expanded-icon img,
        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-icon svg,
        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-icon img {
            width: 100%;
            height: 100%;
        }
        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-tab-icon,
        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-expanded-icon,
        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-icon {
            ${titleIconColor ? `fill: ${titleIconColor};` : ""}
            ${
							titleIconSize?.Desktop
								? `
                width: ${titleIconSize?.Desktop}${titleIconSizeUnits?.Desktop}; 
                min-width: ${titleIconSize?.Desktop}${titleIconSizeUnits?.Desktop}; 
                height: ${titleIconSize?.Desktop}${titleIconSizeUnits?.Desktop};`
								: ""
						}
        }

        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper:hover .fb-imageAccordion-tab-icon,
        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper:hover .fb-imageAccordion-expanded-icon,
        .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper:hover .fb-imageAccordion-icon {
            ${titleIconHoverColor ? `fill: ${titleIconHoverColor};` : ""}
        }

        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-inner,
        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-inner .block-editor-block-list__layout {
            display: flex;
            flex-direction: column;
            ${
							imageAccordionItemGap?.Desktop
								? `gap: ${imageAccordionItemGap?.Desktop}${imageAccordionItemGapUnits?.Desktop};`
								: ""
						}
            padding: 0;
            margin: 0;
        }

        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper {
            ${titleAlignment === "left" ? "justify-content: left;" : ""}
            ${titleAlignment === "center" ? "justify-content: center;" : ""}
            ${titleAlignment === "right" ? "justify-content: right;" : ""}
            ${
							titleAlignment === "between"
								? "justify-content: space-between;"
								: ""
						}
            ${iconPosition === "left" ? "flex-direction: row-reverse;" : ""}
            ${iconPosition === "right" ? "flex-direction: row;" : ""}
        }

        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title-inner {
            display: inline-flex;
            align-items: center;
            ${
							prefixSuffixSpacing?.Desktop
								? `gap: ${prefixSuffixSpacing?.Desktop}${prefixSuffixSpacingUnits?.Desktop};`
								: ""
						}
        }

        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title-inner .fb-imageAccordion-title-prefix {
            ${
							titlePrefixIconSize?.Desktop
								? `width: ${titlePrefixIconSize?.Desktop}${titlePrefixIconSizeUnits?.Desktop}; height: ${titlePrefixIconSize?.Desktop}${titlePrefixIconSizeUnits?.Desktop};`
								: ""
						}
            display: flex;
            flex-shrink: 0;
        }

        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title-inner .fb-imageAccordion-title-suffix {
            ${
							titleSuffixIconSize?.Desktop
								? `width: ${titleSuffixIconSize?.Desktop}${titleSuffixIconSizeUnits?.Desktop}; height: ${titleSuffixIconSize?.Desktop}${titleSuffixIconSizeUnits?.Desktop};`
								: ""
						}
            display: flex;
            flex-shrink: 0;
        }

        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title-inner .fb-imageAccordion-title-prefix img,
        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title-inner .fb-imageAccordion-title-prefix svg,
        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title-inner .fb-imageAccordion-title-suffix img,
        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title-inner .fb-imageAccordion-title-suffix svg {
            margin: 0;
            padding: 0;
            min-width: 100%;
            width: 100%;
            height: 100%;
        }

        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title-inner .fb-imageAccordion-title-prefix img,
        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title-inner .fb-imageAccordion-title-prefix .components-button,
        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title-inner .fb-imageAccordion-title-suffix img,
        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title-inner .fb-imageAccordion-title-suffix .components-button {
            margin: 0 !important;
            padding: 0 !important;
            min-width: 100% !important;
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
        }

        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-wrapper {
            ${
							contentBgType === "gradient"
								? `background: ${
										contentBgCustomGradientSwitcher &&
										contentBgCustomGradientInputValue
											? contentBgCustomGradientInputValue
											: contentBgGradientColor
								  };`
								: contentBgImageUrl !== undefined &&
								  contentBgImageUrl !== null &&
								  contentBgImageUrl !== ""
								? `
                ${
									contentBgImageUrl !== undefined
										? `background-image: url(${contentBgImageUrl});`
										: ""
								}
                ${
									contentBgImagePosition !== undefined
										? `background-position: ${contentBgImagePosition};`
										: ""
								}
                ${
									contentBgImageAttachment !== undefined
										? `background-attachment: ${contentBgImageAttachment};`
										: ""
								}
                ${
									contentBgImageRepeat !== undefined
										? `background-repeat: ${contentBgImageRepeat};`
										: ""
								}
                ${
									contentBgImageSize !== undefined
										? `background-size: ${contentBgImageSize};`
										: ""
								}
                `
								: contentBgClassicColor
								? `background: ${contentBgClassicColor};`
								: ""
						}
            ${
							contentBoxShadowCssValue
								? `box-shadow: ${contentBoxShadowCssValue};`
								: ""
						}
            ${contentBorder ? `border-style: ${contentBorder};` : ""}
            ${
							contentBorderDesktopWidth && contentDesktopBorderWidth?.top
								? `border-width: ${contentBorderDesktopWidth};`
								: ""
						}  
            ${contentBorderColor ? `border-color: ${contentBorderColor};` : ""}
            ${
							contentBorderRadiusDesktopWidth &&
							contentDesktopBorderRadiusWidth?.top
								? `border-radius: ${contentBorderRadiusDesktopWidth};`
								: ""
						}
            overflow: hidden;
            transition: all 0.3s ease-in-out;
        }
        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-wrapper:hover {
            ${
							contentBgHoverType === "gradient"
								? `background: ${
										contentBgHoverCustomGradientSwitcher &&
										contentBgHoverCustomGradientInputValue
											? contentBgHoverCustomGradientInputValue
											: contentBgHoverGradientColor
								  };`
								: contentBgHoverImageUrl !== undefined &&
								  contentBgHoverImageUrl !== null &&
								  contentBgHoverImageUrl !== ""
								? `
                    ${
											contentBgHoverImageUrl !== undefined
												? `background-image: url(${contentBgHoverImageUrl});`
												: ""
										}
                    ${
											contentBgHoverImagePosition !== undefined
												? `background-position: ${contentBgHoverImagePosition};`
												: ""
										}
                    ${
											contentBgHoverImageAttachment !== undefined
												? `background-attachment: ${contentBgHoverImageAttachment};`
												: ""
										}
                    ${
											contentBgHoverImageRepeat !== undefined
												? `background-repeat: ${contentBgHoverImageRepeat};`
												: ""
										}
                    ${
											contentBgHoverImageSize !== undefined
												? `background-size: ${contentBgHoverImageSize};`
												: ""
										}
                `
								: contentBgHoverClassicColor
								? `background: ${contentBgHoverClassicColor};`
								: ""
						}
            ${
							contentHoverBoxShadowCssValue
								? `box-shadow: ${contentHoverBoxShadowCssValue};`
								: ""
						}
            ${
							contentBorderHoverColor
								? `border-color: ${contentBorderHoverColor};`
								: ""
						}
            transition: all 0.3s ease-in-out;
        }


        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper.active .fb-imageAccordion-tab-icon,
        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-expanded-icon {
            display: none;
            position: absolute;
            visibility: hidden;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }

        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-tab-icon,
        .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-title-wrapper.active .fb-imageAccordion-expanded-icon {
            display: block;
            position: static;
            visibility: visible;
            opacity: 1;
            transition: opacity 0.3s ease-in-out;
        }
        
        @media only screen and (max-width: 1024px) {
            .fb-imageAccordion-main-wrapper.${blockID} {
                ${
									imageAccordionPositionType !== "default"
										? `position: ${imageAccordionPositionType};`
										: ""
								}
                ${
									imageAccordionPositionType !== "default" &&
									imageAccordionPositionType !== "relative" &&
									imageAccordionHZOrientationType === "left" &&
									imageAccordionHZLeftOffset?.Tablet
										? `left: ${imageAccordionHZLeftOffset?.Tablet}${imageAccordionHZLeftOffsetUnits?.Tablet};`
										: ""
								}
                ${
									imageAccordionPositionType !== "default" &&
									imageAccordionPositionType !== "relative" &&
									imageAccordionHZOrientationType === "right" &&
									imageAccordionHZRightOffset?.Tablet
										? `right: ${imageAccordionHZRightOffset?.Tablet}${imageAccordionHZRightOffsetUnits?.Tablet};`
										: ""
								}
                ${
									imageAccordionPositionType !== "default" &&
									imageAccordionPositionType !== "relative" &&
									imageAccordionVROrientationType === "top" &&
									imageAccordionVRTopOffset?.Tablet
										? `top: ${imageAccordionVRTopOffset?.Tablet}${imageAccordionVRTopOffsetUnits?.Tablet};`
										: ""
								}
                ${
									imageAccordionPositionType !== "default" &&
									imageAccordionPositionType !== "relative" &&
									imageAccordionVROrientationType === "bottom" &&
									imageAccordionVRBottomOffset?.Tablet
										? `bottom: ${imageAccordionVRBottomOffset?.Tablet}${imageAccordionVRBottomOffsetUnits?.Tablet};`
										: ""
								}
                ${
									imageAccordionZIndex?.Tablet
										? `z-index: ${imageAccordionZIndex?.Tablet};`
										: ""
								}
            }
            .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-wrapper {
                ${
									imageAccordionPaddingTabletWidth &&
									imageAccordionTabPadding?.top
										? `padding: ${imageAccordionPaddingTabletWidth};`
										: ""
								}  
                ${
									imageAccordionMarginTabletWidth &&
									imageAccordionTabMargin?.top
										? `margin: ${imageAccordionMarginTabletWidth};`
										: ""
								}
                ${
									imageAccordionBorderTabletWidth &&
									imageAccordionTabBorderWidth?.top
										? `border-width: ${imageAccordionBorderTabletWidth};`
										: ""
								}
                ${
									imageAccordionBorderRadiusTabletWidth &&
									imageAccordionTabBorderRadiusWidth?.top
										? `border-radius: ${imageAccordionBorderRadiusTabletWidth};`
										: ""
								}
            }

            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-tab-icon,
            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-expanded-icon,
            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-icon {
                ${
									titleIconSize?.Tablet
										? `
                    width: ${titleIconSize?.Tablet}${titleIconSizeUnits?.Tablet}; 
                    min-width: ${titleIconSize?.Tablet}${titleIconSizeUnits?.Tablet}; 
                    height: ${titleIconSize?.Tablet}${titleIconSizeUnits?.Tablet};`
										: ""
								}
            }

            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title {
                ${
									titleGlobalTypoSwitcher?.fontSize === false &&
									titleFontSize?.Tablet
										? `font-size: ${titleFontSize?.Tablet}${titleFontSizeUnits?.Tablet};`
										: ""
								}
                ${
									titleGlobalTypoSwitcher?.letterSpacing === false &&
									titleLetterSpacing?.Tablet
										? `letter-spacing: ${titleLetterSpacing?.Tablet}${titleLetterSpacingUnits?.Tablet};`
										: ""
								}
                ${
									titleGlobalTypoSwitcher?.lineHeight === false &&
									titleLineHeight?.Tablet
										? `line-height: ${titleLineHeight?.Tablet}${titleLineHeightUnits?.Tablet};`
										: ""
								}
            }

            .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-inner .block-editor-block-list__layout {
                ${
									imageAccordionItemGap?.Tablet
										? `gap: ${imageAccordionItemGap?.Tablet}${imageAccordionItemGapUnits?.Tablet};`
										: ""
								}
            }

            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper {
                ${
									titleSpacing?.Tablet
										? `gap: ${titleSpacing?.Tablet}${titleSpacingUnits?.Tablet};`
										: ""
								}
                ${
									imageAccordionItemsPaddingTabletWidth &&
									imageAccordionItemsTabPadding?.top
										? `padding: ${imageAccordionItemsPaddingTabletWidth};`
										: ""
								}
                ${
									imageAccordionItemsBorderTabletWidth &&
									imageAccordionItemsTabBorderWidth?.top
										? `border-width: ${imageAccordionItemsBorderTabletWidth};`
										: ""
								}
                ${
									imageAccordionItemsBorderRadiusTabletWidth &&
									imageAccordionItemsTabBorderRadiusWidth?.top
										? `border-radius: ${imageAccordionItemsBorderRadiusTabletWidth};`
										: ""
								}
            }

            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title-inner {
                ${
									prefixSuffixSpacing?.Tablet
										? `gap: ${prefixSuffixSpacing?.Tablet}${prefixSuffixSpacingUnits?.Tablet};`
										: ""
								}
            }

            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-title-inner .fb-imageAccordion-title-prefix {
                ${
									titlePrefixIconSize?.Tablet
										? `width: ${titlePrefixIconSize?.Tablet}${titlePrefixIconSizeUnits?.Tablet}; height: ${titlePrefixIconSize?.Tablet}${titlePrefixIconSizeUnits?.Tablet};`
										: ""
								}
            }

            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-title-inner .fb-imageAccordion-title-suffix {
                ${
									titleSuffixIconSize?.Tablet
										? `width: ${titleSuffixIconSize?.Tablet}${titleSuffixIconSizeUnits?.Tablet}; height: ${titleSuffixIconSize?.Tablet}${titleSuffixIconSizeUnits?.Tablet};`
										: ""
								}
            }
            
            .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-wrapper {
                ${
									contentBorderTabletWidth && contentTabBorderWidth?.top
										? `border-width: ${contentBorderTabletWidth};`
										: ""
								}
                ${
									contentBorderRadiusTabletWidth &&
									contentTabBorderRadiusWidth?.top
										? `border-radius: ${contentBorderRadiusTabletWidth};`
										: ""
								}
            }
        }
        
        @media only screen and (max-width: 767px) {
            .fb-imageAccordion-main-wrapper.${blockID} {
                ${
									imageAccordionPositionType !== "default"
										? `position: ${imageAccordionPositionType};`
										: ""
								}
                ${
									imageAccordionPositionType !== "default" &&
									imageAccordionPositionType !== "relative" &&
									imageAccordionHZOrientationType === "left" &&
									imageAccordionHZLeftOffset?.Mobile
										? `left: ${imageAccordionHZLeftOffset?.Mobile}${imageAccordionHZLeftOffsetUnits?.Mobile};`
										: ""
								}
                ${
									imageAccordionPositionType !== "default" &&
									imageAccordionPositionType !== "relative" &&
									imageAccordionHZOrientationType === "right" &&
									imageAccordionHZRightOffset?.Mobile
										? `right: ${imageAccordionHZRightOffset?.Mobile}${imageAccordionHZRightOffsetUnits?.Mobile};`
										: ""
								}
                ${
									imageAccordionPositionType !== "default" &&
									imageAccordionPositionType !== "relative" &&
									imageAccordionVROrientationType === "top" &&
									imageAccordionVRTopOffset?.Mobile
										? `top: ${imageAccordionVRTopOffset?.Mobile}${imageAccordionVRTopOffsetUnits?.Mobile};`
										: ""
								}
                ${
									imageAccordionPositionType !== "default" &&
									imageAccordionPositionType !== "relative" &&
									imageAccordionVROrientationType === "bottom" &&
									imageAccordionVRBottomOffset?.Mobile
										? `bottom: ${imageAccordionVRBottomOffset?.Mobile}${imageAccordionVRBottomOffsetUnits?.Mobile};`
										: ""
								}
                ${
									imageAccordionZIndex?.Mobile
										? `z-index: ${imageAccordionZIndex?.Mobile};`
										: ""
								}
            }
            .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-wrapper {
                ${
									imageAccordionPaddingMobileWidth &&
									imageAccordionMobilePadding?.top
										? `padding: ${imageAccordionPaddingMobileWidth};`
										: ""
								}
                ${
									imageAccordionMarginMobileWidth &&
									imageAccordionMobileMargin?.top
										? `margin: ${imageAccordionMarginMobileWidth};`
										: ""
								}
                ${
									imageAccordionBorderMobileWidth &&
									imageAccordionMobileBorderWidth?.top
										? `border-width: ${imageAccordionBorderMobileWidth};`
										: ""
								}
                ${
									imageAccordionBorderRadiusMobileWidth &&
									imageAccordionMobileBorderRadiusWidth?.top
										? `border-radius: ${imageAccordionBorderRadiusMobileWidth};`
										: ""
								}
            }

            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-tab-icon,
            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-expanded-icon,
            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-icon {
                ${
									titleIconSize?.Mobile
										? `
                    width: ${titleIconSize?.Mobile}${titleIconSizeUnits?.Mobile}; 
                    min-width: ${titleIconSize?.Mobile}${titleIconSizeUnits?.Mobile}; 
                    height: ${titleIconSize?.Mobile}${titleIconSizeUnits?.Mobile};`
										: ""
								}
            }

            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title {
                ${
									titleGlobalTypoSwitcher?.fontSize === false &&
									titleFontSize?.Mobile
										? `font-size: ${titleFontSize?.Mobile}${titleFontSizeUnits?.Mobile};`
										: ""
								}
                ${
									titleGlobalTypoSwitcher?.letterSpacing === false &&
									titleLetterSpacing?.Mobile
										? `letter-spacing: ${titleLetterSpacing?.Mobile}${titleLetterSpacingUnits?.Mobile};`
										: ""
								}
                ${
									titleGlobalTypoSwitcher?.lineHeight === false &&
									titleLineHeight?.Mobile
										? `line-height: ${titleLineHeight?.Mobile}${titleLineHeightUnits?.Mobile};`
										: ""
								}
            }

            .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-inner .block-editor-block-list__layout {
                ${
									imageAccordionItemGap?.Mobile
										? `gap: ${imageAccordionItemGap?.Mobile}${imageAccordionItemGapUnits?.Mobile};`
										: ""
								}
            }

            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper {
                ${
									titleSpacing?.Mobile
										? `gap: ${titleSpacing?.Mobile}${titleSpacingUnits?.Mobile};`
										: ""
								}
                ${
									imageAccordionItemsPaddingMobileWidth &&
									imageAccordionItemsMobilePadding?.top
										? `padding: ${imageAccordionItemsPaddingMobileWidth};`
										: ""
								}
                ${
									imageAccordionItemsBorderMobileWidth &&
									imageAccordionItemsMobileBorderWidth?.top
										? `border-width: ${imageAccordionItemsBorderMobileWidth};`
										: ""
								}
                ${
									imageAccordionItemsBorderRadiusMobileWidth &&
									imageAccordionItemsMobileBorderRadiusWidth?.top
										? `border-radius: ${imageAccordionItemsBorderRadiusMobileWidth};`
										: ""
								}
            }

            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-item-title-wrapper .fb-imageAccordion-title-inner {
                ${
									prefixSuffixSpacing?.Mobile
										? `gap: ${prefixSuffixSpacing?.Mobile}${prefixSuffixSpacingUnits?.Mobile};`
										: ""
								}
            }

            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-title-inner .fb-imageAccordion-title-prefix {
                ${
									titlePrefixIconSize?.Mobile
										? `width: ${titlePrefixIconSize?.Mobile}${titlePrefixIconSizeUnits?.Mobile}; height: ${titlePrefixIconSize?.Mobile}${titlePrefixIconSizeUnits?.Mobile};`
										: ""
								}
            }

            .fb-imageAccordion-item-main-wrapper.${blockID} .fb-imageAccordion-title-inner .fb-imageAccordion-title-suffix {
                ${
									titleSuffixIconSize?.Mobile
										? `width: ${titleSuffixIconSize?.Mobile}${titleSuffixIconSizeUnits?.Mobile}; height: ${titleSuffixIconSize?.Mobile}${titleSuffixIconSizeUnits?.Mobile};`
										: ""
								}
            }
            
            .fb-imageAccordion-main-wrapper.${blockID} .fb-imageAccordion-item-main-wrapper .fb-imageAccordion-item-wrapper {
                ${
									contentBorderMobileWidth && contentMobileBorderWidth?.top
										? `border-width: ${contentBorderMobileWidth};`
										: ""
								}
                ${
									contentBorderRadiusMobileWidth &&
									contentMobileBorderRadiusWidth?.top
										? `border-radius: ${contentBorderRadiusMobileWidth};`
										: ""
								}
            }
        }

    `;

	const customCss = getCustomCss(imageAccordionCustomCSS, `.${blockID}`);
	return `${fbimageAccordionItemstyle} ${customCss}`
		.replace(/\s+/g, " ")
		.trim();
};
export default generateimageAccordionStyle;
