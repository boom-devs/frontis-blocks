import getCustomCss from "@Utils/getCustomCss";

const generateImageAccordionStyle = (attributes) => {
	const {
		blockID,
		imageAccordionPreset,
		imageAccordionWidth,
		imageAccordionWidthUnits,
		imageAccordionHeight,
		imageAccordionHeightUnits,
		imageAccordionGap,
		imageAccordionGapUnits,

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
	} = attributes;

	/* Spacing Shorthands */
	const itemBrGetDesktop = `${imageAccordionItemBorderRadiusDesktop?.top}${imageAccordionItemBorderRadiusUnits?.Desktop} ${imageAccordionItemBorderRadiusDesktop?.right}${imageAccordionItemBorderRadiusUnits?.Desktop} ${imageAccordionItemBorderRadiusDesktop?.bottom}${imageAccordionItemBorderRadiusUnits?.Desktop} ${imageAccordionItemBorderRadiusDesktop?.left}${imageAccordionItemBorderRadiusUnits?.Desktop}`;
	const itemBrGetTablet = `${imageAccordionItemBorderRadiusTablet?.top}${imageAccordionItemBorderRadiusUnits?.Tablet} ${imageAccordionItemBorderRadiusTablet?.right}${imageAccordionItemBorderRadiusUnits?.Tablet} ${imageAccordionItemBorderRadiusTablet?.bottom}${imageAccordionItemBorderRadiusUnits?.Tablet} ${imageAccordionItemBorderRadiusTablet?.left}${imageAccordionItemBorderRadiusUnits?.Tablet}`;
	const itemBrGetMobile = `${imageAccordionItemBorderRadiusMobile?.top}${imageAccordionItemBorderRadiusUnits?.Mobile} ${imageAccordionItemBorderRadiusMobile?.right}${imageAccordionItemBorderRadiusUnits?.Mobile} ${imageAccordionItemBorderRadiusMobile?.bottom}${imageAccordionItemBorderRadiusUnits?.Mobile} ${imageAccordionItemBorderRadiusMobile?.left}${imageAccordionItemBorderRadiusUnits?.Mobile}`;

	const itemActiveBrGetDesktop = `${imageAccordionItemActiveBorderRadiusDesktop?.top}${imageAccordionItemBorderRadiusUnits?.Desktop} ${imageAccordionItemActiveBorderRadiusDesktop?.right}${imageAccordionItemBorderRadiusUnits?.Desktop} ${imageAccordionItemActiveBorderRadiusDesktop?.bottom}${imageAccordionItemBorderRadiusUnits?.Desktop} ${imageAccordionItemActiveBorderRadiusDesktop?.left}${imageAccordionItemBorderRadiusUnits?.Desktop}`;
	const itemActiveBrGetTablet = `${imageAccordionItemActiveBorderRadiusTablet?.top}${imageAccordionItemBorderRadiusUnits?.Tablet} ${imageAccordionItemActiveBorderRadiusTablet?.right}${imageAccordionItemBorderRadiusUnits?.Tablet} ${imageAccordionItemActiveBorderRadiusTablet?.bottom}${imageAccordionItemBorderRadiusUnits?.Tablet} ${imageAccordionItemActiveBorderRadiusTablet?.left}${imageAccordionItemBorderRadiusUnits?.Tablet}`;
	const itemActiveBrGetMobile = `${imageAccordionItemActiveBorderRadiusMobile?.top}${imageAccordionItemBorderRadiusUnits?.Mobile} ${imageAccordionItemActiveBorderRadiusMobile?.right}${imageAccordionItemBorderRadiusUnits?.Mobile} ${imageAccordionItemActiveBorderRadiusMobile?.bottom}${imageAccordionItemBorderRadiusUnits?.Mobile} ${imageAccordionItemActiveBorderRadiusMobile?.left}${imageAccordionItemBorderRadiusUnits?.Mobile}`;

	const paddingGetDesktop = `${imageAccordionPaddingDesktop?.top}${imageAccordionPaddingUnits?.Desktop} ${imageAccordionPaddingDesktop?.right}${imageAccordionPaddingUnits?.Desktop} ${imageAccordionPaddingDesktop?.bottom}${imageAccordionPaddingUnits?.Desktop} ${imageAccordionPaddingDesktop?.left}${imageAccordionPaddingUnits?.Desktop}`;
	const paddingGetTablet = `${imageAccordionPaddingTablet?.top}${imageAccordionPaddingUnits?.Tablet} ${imageAccordionPaddingTablet?.right}${imageAccordionPaddingUnits?.Tablet} ${imageAccordionPaddingTablet?.bottom}${imageAccordionPaddingUnits?.Tablet} ${imageAccordionPaddingTablet?.left}${imageAccordionPaddingUnits?.Tablet}`;
	const paddingGetMobile = `${imageAccordionPaddingMobile?.top}${imageAccordionPaddingUnits?.Mobile} ${imageAccordionPaddingMobile?.right}${imageAccordionPaddingUnits?.Mobile} ${imageAccordionPaddingMobile?.bottom}${imageAccordionPaddingUnits?.Mobile} ${imageAccordionPaddingMobile?.left}${imageAccordionPaddingUnits?.Mobile}`;

	const marginGetDesktop = `${imageAccordionMarginDesktop?.top}${imageAccordionMarginUnits?.Desktop} ${imageAccordionMarginDesktop?.right}${imageAccordionMarginUnits?.Desktop} ${imageAccordionMarginDesktop?.bottom}${imageAccordionMarginUnits?.Desktop} ${imageAccordionMarginDesktop?.left}${imageAccordionMarginUnits?.Desktop}`;
	const marginGetTablet = `${imageAccordionMarginTablet?.top}${imageAccordionMarginUnits?.Tablet} ${imageAccordionMarginTablet?.right}${imageAccordionMarginUnits?.Tablet} ${imageAccordionMarginTablet?.bottom}${imageAccordionMarginUnits?.Tablet} ${imageAccordionMarginTablet?.left}${imageAccordionMarginUnits?.Tablet}`;
	const marginGetMobile = `${imageAccordionMarginMobile?.top}${imageAccordionMarginUnits?.Mobile} ${imageAccordionMarginMobile?.right}${imageAccordionMarginUnits?.Mobile} ${imageAccordionMarginMobile?.bottom}${imageAccordionMarginUnits?.Mobile} ${imageAccordionMarginMobile?.left}${imageAccordionMarginUnits?.Mobile}`;

	const wrapperBrGetDesktop = `${imageAccordionWrapperBorderRadiusDesktop?.top}${imageAccordionWrapperBorderRadiusUnits?.Desktop} ${imageAccordionWrapperBorderRadiusDesktop?.right}${imageAccordionWrapperBorderRadiusUnits?.Desktop} ${imageAccordionWrapperBorderRadiusDesktop?.bottom}${imageAccordionWrapperBorderRadiusUnits?.Desktop} ${imageAccordionWrapperBorderRadiusDesktop?.left}${imageAccordionWrapperBorderRadiusUnits?.Desktop}`;
	const wrapperBrGetTablet = `${imageAccordionWrapperBorderRadiusTablet?.top}${imageAccordionWrapperBorderRadiusUnits?.Tablet} ${imageAccordionWrapperBorderRadiusTablet?.right}${imageAccordionWrapperBorderRadiusUnits?.Tablet} ${imageAccordionWrapperBorderRadiusTablet?.bottom}${imageAccordionWrapperBorderRadiusUnits?.Tablet} ${imageAccordionWrapperBorderRadiusTablet?.left}${imageAccordionWrapperBorderRadiusUnits?.Tablet}`;
	const wrapperBrGetMobile = `${imageAccordionWrapperBorderRadiusMobile?.top}${imageAccordionWrapperBorderRadiusUnits?.Mobile} ${imageAccordionWrapperBorderRadiusMobile?.right}${imageAccordionWrapperBorderRadiusUnits?.Mobile} ${imageAccordionWrapperBorderRadiusMobile?.bottom}${imageAccordionWrapperBorderRadiusUnits?.Mobile} ${imageAccordionWrapperBorderRadiusMobile?.left}${imageAccordionWrapperBorderRadiusUnits?.Mobile}`;

	const wrapperBorderGetDesktop = `${imageAccordionWrapperBorderTypeDesktop?.top}${imageAccordionWrapperBorderTypeUnits?.Desktop} ${imageAccordionWrapperBorderTypeDesktop?.right}${imageAccordionWrapperBorderTypeUnits?.Desktop} ${imageAccordionWrapperBorderTypeDesktop?.bottom}${imageAccordionWrapperBorderTypeUnits?.Desktop} ${imageAccordionWrapperBorderTypeDesktop?.left}${imageAccordionWrapperBorderTypeUnits?.Desktop}`;
	const wrapperBorderGetTablet = `${imageAccordionWrapperBorderTypeTablet?.top}${imageAccordionWrapperBorderTypeUnits?.Tablet} ${imageAccordionWrapperBorderTypeTablet?.right}${imageAccordionWrapperBorderTypeUnits?.Tablet} ${imageAccordionWrapperBorderTypeTablet?.bottom}${imageAccordionWrapperBorderTypeUnits?.Tablet} ${imageAccordionWrapperBorderTypeTablet?.left}${imageAccordionWrapperBorderTypeUnits?.Tablet}`;
	const wrapperBorderGetMobile = `${imageAccordionWrapperBorderTypeMobile?.top}${imageAccordionWrapperBorderTypeUnits?.Mobile} ${imageAccordionWrapperBorderTypeMobile?.right}${imageAccordionWrapperBorderTypeUnits?.Mobile} ${imageAccordionWrapperBorderTypeMobile?.bottom}${imageAccordionWrapperBorderTypeUnits?.Mobile} ${imageAccordionWrapperBorderTypeMobile?.left}${imageAccordionWrapperBorderTypeUnits?.Mobile}`;

	const btnBrGetDesktop = `${imageAccordionBtnBorderRadiusDesktop?.top}${imageAccordionBtnBorderRadiusUnits?.Desktop} ${imageAccordionBtnBorderRadiusDesktop?.right}${imageAccordionBtnBorderRadiusUnits?.Desktop} ${imageAccordionBtnBorderRadiusDesktop?.bottom}${imageAccordionBtnBorderRadiusUnits?.Desktop} ${imageAccordionBtnBorderRadiusDesktop?.left}${imageAccordionBtnBorderRadiusUnits?.Desktop}`;
	const btnPadGetDesktop = `${imageAccordionBtnPaddingDesktop?.top}${imageAccordionBtnPaddingUnits?.Desktop} ${imageAccordionBtnPaddingDesktop?.right}${imageAccordionBtnPaddingUnits?.Desktop} ${imageAccordionBtnPaddingDesktop?.bottom}${imageAccordionBtnPaddingUnits?.Desktop} ${imageAccordionBtnPaddingDesktop?.left}${imageAccordionBtnPaddingUnits?.Desktop}`;

	const blockStyle = `
		.fb-image-accordion-main-wrapper.${blockID} {
			${imageAccordionPositionType === "default" ? `position: relative;` : ""}
			${
				imageAccordionPositionType !== "default" &&
				imageAccordionPositionType !== "relative"
					? `width: 100%;`
					: ""
			}
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
				imageAccordionGlobalZIndex?.Desktop
					? `z-index: ${imageAccordionGlobalZIndex?.Desktop};`
					: ""
			}
			${
				imageAccordionOverflow !== "default"
					? `overflow: ${imageAccordionOverflow};`
					: ""
			}

			${
				imageAccordionWrapperBorder
					? `border-style: ${imageAccordionWrapperBorder};`
					: "border-style: none;"
			}
			${
				imageAccordionWrapperBorderColor
					? `border-color: ${imageAccordionWrapperBorderColor};`
					: ""
			}
			${
				wrapperBorderGetDesktop && imageAccordionWrapperBorderTypeDesktop?.top
					? `border-width: ${wrapperBorderGetDesktop};`
					: ""
			}
			${
				wrapperBrGetDesktop && imageAccordionWrapperBorderRadiusDesktop?.top
					? `border-radius: ${wrapperBrGetDesktop};`
					: ""
			}
			${
				imageAccordionBackgroundType === "gradient"
					? imageAccordionCustomGradientSwitcher &&
					  imageAccordionCustomGradientInputValue
						? `background: ${imageAccordionCustomGradientInputValue};`
						: imageAccordionGradientColor
						? `background: ${imageAccordionGradientColor};`
						: `background: ${imageAccordionClassicColor};`
					: imageAccordionBackgroundImageUrl
					? `
                        background-image: url(${imageAccordionBackgroundImageUrl});
                        background-position: ${imageAccordionBackgroundImagePosition};
                        background-attachment: ${imageAccordionBackgroundImageAttachment};
                        background-repeat: ${imageAccordionBackgroundImageRepeat};
                        background-size: ${imageAccordionBackgroundImageSize};
                    `
					: imageAccordionClassicColor
					? `background-color: ${imageAccordionClassicColor};`
					: ""
			}
			transition: all .3s ease-in-out;
		}

		.${blockID}.fb-image-accordion-main-wrapper:hover {
			${
				imageAccordionWrapperBorderHoverColor
					? `border-color: ${imageAccordionWrapperBorderHoverColor};`
					: ""
			}
			${
				imageAccordionHoverBackgroundType === "gradient"
					? imageAccordionHoverCustomGradientSwitcher &&
					  imageAccordionHoverCustomGradientInputValue
						? `background: ${imageAccordionHoverCustomGradientInputValue};`
						: imageAccordionHoverGradientColor
						? `background: ${imageAccordionHoverGradientColor};`
						: `background: ${imageAccordionHoverClassicColor};`
					: imageAccordionHoverBackgroundImageUrl
					? `background-image: url(${imageAccordionHoverBackgroundImageUrl});`
					: imageAccordionHoverClassicColor
					? `background-color: ${imageAccordionHoverClassicColor};`
					: ""
			}
		}

		.${blockID} .fb-image-accordion-container {
			${
				imageAccordionWidth?.Desktop
					? `width: ${imageAccordionWidth.Desktop}${
							imageAccordionWidthUnits?.Desktop ?? "%"
					  };`
					: ""
			}
			${
				imageAccordionHeight?.Desktop
					? `height: ${imageAccordionHeight.Desktop}${
							imageAccordionHeightUnits?.Desktop ?? "px"
					  };`
					: ""
			}
			${
				imageAccordionPreset !== "preset-2" &&
				imageAccordionPreset !== "preset-4" &&
				imageAccordionGap?.Desktop
					? `gap: ${imageAccordionGap.Desktop}${
							imageAccordionGapUnits?.Desktop ?? "px"
					  };`
					: ""
			}
			${
				paddingGetDesktop && imageAccordionPaddingDesktop?.top
					? `padding: ${paddingGetDesktop};`
					: ""
			}
			${
				marginGetDesktop && imageAccordionMarginDesktop?.top
					? `margin: ${marginGetDesktop};`
					: ""
			}
		}

		.${blockID} .fb-image-accordion-item {
			${
				itemBrGetDesktop && imageAccordionItemBorderRadiusDesktop?.top
					? `border-radius: ${itemBrGetDesktop};`
					: ""
			}
		}
		.${blockID} .fb-image-accordion-item.is-active,
		.${blockID} .fb-trigger-hover .fb-image-accordion-item:hover {
			${
				itemActiveBrGetDesktop &&
				imageAccordionItemActiveBorderRadiusDesktop?.top
					? `border-radius: ${itemActiveBrGetDesktop};`
					: ""
			}
		}

		.${blockID} .fb-image-accordion-overlay {
			${
				imageAccordionOverlayColor
					? `background: ${imageAccordionOverlayColor};`
					: ""
			}
		}
		.${blockID} .fb-image-accordion-item:hover .fb-image-accordion-overlay,
		.${blockID} .fb-image-accordion-item.is-active .fb-image-accordion-overlay {
			${
				imageAccordionOverlayHoverColor
					? `background: ${imageAccordionOverlayHoverColor};`
					: ""
			}
		}

		.${blockID} .fb-image-accordion-title {
			${imageAccordionTitleColor ? `color: ${imageAccordionTitleColor};` : ""}
			${
				imageAccordionTitleFontSize?.Desktop
					? `font-size: ${imageAccordionTitleFontSize.Desktop}${
							imageAccordionTitleFontSizeUnits?.Desktop ?? "px"
					  };`
					: ""
			}
			${
				imageAccordionTitleFontWeight
					? `font-weight: ${imageAccordionTitleFontWeight};`
					: ""
			}
			${
				imageAccordionTitleLineHeight?.Desktop
					? `line-height: ${imageAccordionTitleLineHeight.Desktop}${
							imageAccordionTitleLineHeightUnits?.Desktop ?? "px"
					  };`
					: ""
			}
			${
				imageAccordionTitleFontFamily &&
				imageAccordionTitleFontFamily !== "Default" &&
				imageAccordionTitleFontFamily !== "inherit"
					? `font-family: ${imageAccordionTitleFontFamily};`
					: ""
			}
			${
				imageAccordionTitleFontStyle
					? `font-style: ${imageAccordionTitleFontStyle};`
					: ""
			}
			${
				imageAccordionTitleTransform
					? `text-transform: ${imageAccordionTitleTransform};`
					: ""
			}
			${
				imageAccordionTitleDecoration
					? `text-decoration: ${imageAccordionTitleDecoration};`
					: ""
			}
			${
				imageAccordionTitleLetterSpacing?.Desktop !== ""
					? `letter-spacing: ${imageAccordionTitleLetterSpacing.Desktop}${
							imageAccordionTitleLetterSpacingUnits?.Desktop || "px"
					  };`
					: ""
			}
		}
		.${blockID} .fb-image-accordion-item:hover .fb-image-accordion-title,
		.${blockID} .fb-image-accordion-item.is-active .fb-image-accordion-title {
			${
				imageAccordionTitleHoverColor
					? `color: ${imageAccordionTitleHoverColor};`
					: ""
			}
		}

		.${blockID} .fb-image-accordion-desc,
		.${blockID} .fb-sub-title {
			${imageAccordionSubtitleColor ? `color: ${imageAccordionSubtitleColor};` : ""}
			${
				imageAccordionSubtitleFontSize?.Desktop
					? `font-size: ${imageAccordionSubtitleFontSize.Desktop}${
							imageAccordionSubtitleFontSizeUnits?.Desktop ?? "px"
					  };`
					: ""
			}
			${
				imageAccordionSubtitleFontWeight
					? `font-weight: ${imageAccordionSubtitleFontWeight};`
					: ""
			}
			${
				imageAccordionSubtitleFontFamily &&
				imageAccordionSubtitleFontFamily !== "Default" &&
				imageAccordionSubtitleFontFamily !== "inherit"
					? `font-family: ${imageAccordionSubtitleFontFamily};`
					: ""
			}
			${
				imageAccordionSubtitleFontStyle
					? `font-style: ${imageAccordionSubtitleFontStyle};`
					: ""
			}
			${
				imageAccordionSubtitleTransform
					? `text-transform: ${imageAccordionSubtitleTransform};`
					: ""
			}
			${
				imageAccordionSubtitleDecoration
					? `text-decoration: ${imageAccordionSubtitleDecoration};`
					: ""
			}
			${
				imageAccordionSubtitleLetterSpacing?.Desktop !== ""
					? `letter-spacing: ${imageAccordionSubtitleLetterSpacing.Desktop}${
							imageAccordionSubtitleLetterSpacingUnits?.Desktop || "px"
					  };`
					: ""
			}
		}
		.${blockID} .fb-image-accordion-item:hover .fb-image-accordion-desc,
		.${blockID} .fb-image-accordion-item:hover .fb-sub-title,
		.${blockID} .fb-image-accordion-item.is-active .fb-image-accordion-desc,
		.${blockID} .fb-image-accordion-item.is-active .fb-sub-title {
			${
				imageAccordionSubtitleHoverColor
					? `color: ${imageAccordionSubtitleHoverColor};`
					: ""
			}
		}

		.${blockID} .fb-image-accordion-icon-circle {
			${
				imageAccordionIconCircleBgColor
					? `background: ${imageAccordionIconCircleBgColor};`
					: ""
			}
			${
				imageAccordionIconCircleSize?.Desktop
					? `width: ${imageAccordionIconCircleSize.Desktop}${
							imageAccordionIconCircleSizeUnits?.Desktop ?? "px"
					  }; height: ${imageAccordionIconCircleSize.Desktop}${
							imageAccordionIconCircleSizeUnits?.Desktop ?? "px"
					  };`
					: ""
			}
		}
		.${blockID} .fb-image-accordion-icon-circle i,
		.${blockID} .fb-image-accordion-icon-circle svg {
			${
				imageAccordionIconColor
					? `color: ${imageAccordionIconColor}; fill: ${imageAccordionIconColor};`
					: ""
			}
			${
				imageAccordionIconSize?.Desktop
					? `font-size: ${imageAccordionIconSize.Desktop}${
							imageAccordionIconSizeUnits?.Desktop ?? "px"
					  }; width: ${imageAccordionIconSize.Desktop}${
							imageAccordionIconSizeUnits?.Desktop ?? "px"
					  }; height: ${imageAccordionIconSize.Desktop}${
							imageAccordionIconSizeUnits?.Desktop ?? "px"
					  };`
					: ""
			}
		}
		.${blockID} .fb-image-accordion-item:hover .fb-image-accordion-icon-circle i,
		.${blockID} .fb-image-accordion-item:hover .fb-image-accordion-icon-circle svg,
		.${blockID} .fb-image-accordion-item.is-active .fb-image-accordion-icon-circle i,
		.${blockID} .fb-image-accordion-item.is-active .fb-image-accordion-icon-circle svg {
			${
				imageAccordionIconHoverColor
					? `color: ${imageAccordionIconHoverColor}; fill: ${imageAccordionIconHoverColor};`
					: ""
			}
		}

		.${blockID} .fb-image-accordion-dot {
			${imageAccordionDotColor ? `background-color: ${imageAccordionDotColor};` : ""}
			${
				imageAccordionDotSize?.Desktop
					? `width: ${imageAccordionDotSize.Desktop}${
							imageAccordionDotSizeUnits?.Desktop ?? "px"
					  }; height: ${imageAccordionDotSize.Desktop}${
							imageAccordionDotSizeUnits?.Desktop ?? "px"
					  };`
					: ""
			}
		}

		.${blockID} .fb-image-accordion-number {
			${imageAccordionNumberColor ? `color: ${imageAccordionNumberColor};` : ""}
			${
				imageAccordionNumberFontSize?.Desktop
					? `font-size: ${imageAccordionNumberFontSize.Desktop}${
							imageAccordionNumberFontSizeUnits?.Desktop ?? "px"
					  };`
					: ""
			}
			${
				imageAccordionNumberFontWeight
					? `font-weight: ${imageAccordionNumberFontWeight};`
					: ""
			}
		}
		.${blockID} .fb-image-accordion-item:hover .fb-image-accordion-number,
		.${blockID} .fb-image-accordion-item.is-active .fb-image-accordion-number {
			${
				imageAccordionNumberHoverColor
					? `color: ${imageAccordionNumberHoverColor};`
					: ""
			}
		}

		.${blockID} .fb-image-accordion-btn {
			${imageAccordionBtnTextColor ? `color: ${imageAccordionBtnTextColor};` : ""}
			${imageAccordionBtnBgColor ? `background: ${imageAccordionBtnBgColor};` : ""}
			${
				imageAccordionBtnBorder && imageAccordionBtnBorder !== "none"
					? `border-style: ${imageAccordionBtnBorder};`
					: ""
			}
			${
				imageAccordionBtnBorderColor
					? `border-color: ${imageAccordionBtnBorderColor};`
					: ""
			}
			${
				btnBrGetDesktop && imageAccordionBtnBorderRadiusDesktop?.top
					? `border-radius: ${btnBrGetDesktop};`
					: ""
			}
			${
				btnPadGetDesktop && imageAccordionBtnPaddingDesktop?.top
					? `padding: ${btnPadGetDesktop};`
					: ""
			}
			${
				imageAccordionBtnFontSize?.Desktop
					? `font-size: ${imageAccordionBtnFontSize.Desktop}${
							imageAccordionBtnFontSizeUnits?.Desktop ?? "px"
					  };`
					: ""
			}
			${
				imageAccordionBtnFontWeight
					? `font-weight: ${imageAccordionBtnFontWeight};`
					: ""
			}
			${
				imageAccordionBtnFontFamily &&
				imageAccordionBtnFontFamily !== "Default" &&
				imageAccordionBtnFontFamily !== "inherit"
					? `font-family: ${imageAccordionBtnFontFamily};`
					: ""
			}
			${
				imageAccordionBtnFontStyle
					? `font-style: ${imageAccordionBtnFontStyle};`
					: ""
			}
			${
				imageAccordionBtnTransform
					? `text-transform: ${imageAccordionBtnTransform};`
					: ""
			}
			${
				imageAccordionBtnDecoration
					? `text-decoration: ${imageAccordionBtnDecoration};`
					: ""
			}
			${
				imageAccordionBtnLetterSpacing?.Desktop !== ""
					? `letter-spacing: ${imageAccordionBtnLetterSpacing.Desktop}${
							imageAccordionBtnLetterSpacingUnits?.Desktop || "px"
					  };`
					: ""
			}
		}
		.${blockID} .fb-image-accordion-btn:hover {
			${
				imageAccordionBtnHoverTextColor
					? `color: ${imageAccordionBtnHoverTextColor};`
					: ""
			}
			${
				imageAccordionBtnHoverBgColor
					? `background: ${imageAccordionBtnHoverBgColor};`
					: ""
			}
		}

		@media only screen and (max-width: 1024px) {
			.fb-image-accordion-main-wrapper.${blockID} {
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
					imageAccordionGlobalZIndex?.Tablet
						? `z-index: ${imageAccordionGlobalZIndex?.Tablet};`
						: ""
				}

				${
					wrapperBorderGetTablet && imageAccordionWrapperBorderTypeTablet?.top
						? `border-width: ${wrapperBorderGetTablet};`
						: ""
				}
				${
					wrapperBrGetTablet && imageAccordionWrapperBorderRadiusTablet?.top
						? `border-radius: ${wrapperBrGetTablet};`
						: ""
				}
			}

			.${blockID} .fb-image-accordion-container {
				${
					imageAccordionWidth?.Tablet
						? `width: ${imageAccordionWidth.Tablet}${
								imageAccordionWidthUnits?.Tablet ?? "%"
						  };`
						: ""
				}
				${
					imageAccordionHeight?.Tablet
						? `height: ${imageAccordionHeight.Tablet}${
								imageAccordionHeightUnits?.Tablet ?? "px"
						  };`
						: ""
				}
				${
					paddingGetTablet && imageAccordionPaddingTablet?.top
						? `padding: ${paddingGetTablet};`
						: ""
				}
				${
					marginGetTablet && imageAccordionMarginTablet?.top
						? `margin: ${marginGetTablet};`
						: ""
				}
				${
					imageAccordionPreset !== "preset-2" &&
					imageAccordionPreset !== "preset-4" &&
					imageAccordionGap?.Tablet
						? `gap: ${imageAccordionGap.Tablet}${
								imageAccordionGapUnits?.Tablet ?? "px"
						  };`
						: ""
				}
			}

			.${blockID} .fb-image-accordion-item {
				${
					itemBrGetTablet && imageAccordionItemBorderRadiusTablet?.top
						? `border-radius: ${itemBrGetTablet};`
						: ""
				}
			}
			.${blockID} .fb-image-accordion-item.is-active,
			.${blockID} .fb-trigger-hover .fb-image-accordion-item:hover {
				${
					itemActiveBrGetTablet &&
					imageAccordionItemActiveBorderRadiusTablet?.top
						? `border-radius: ${itemActiveBrGetTablet};`
						: ""
				}
			}

			.${blockID} .fb-image-accordion-title {
				${
					imageAccordionTitleFontSize?.Tablet
						? `font-size: ${imageAccordionTitleFontSize.Tablet}${
								imageAccordionTitleFontSizeUnits?.Tablet ?? "px"
						  };`
						: ""
				}
				${
					imageAccordionTitleLetterSpacing?.Tablet
						? `letter-spacing: ${imageAccordionTitleLetterSpacing.Tablet}${
								imageAccordionTitleLetterSpacingUnits?.Tablet || "px"
						  };`
						: ""
				}
			}
			.${blockID} .fb-image-accordion-desc,
			.${blockID} .fb-sub-title {
				${
					imageAccordionSubtitleFontSize?.Tablet
						? `font-size: ${imageAccordionSubtitleFontSize.Tablet}${
								imageAccordionSubtitleFontSizeUnits?.Tablet ?? "px"
						  };`
						: ""
				}
				${
					imageAccordionSubtitleLetterSpacing?.Tablet
						? `letter-spacing: ${imageAccordionSubtitleLetterSpacing.Tablet}${
								imageAccordionSubtitleLetterSpacingUnits?.Tablet || "px"
						  };`
						: ""
				}
			}
			.${blockID} .fb-image-accordion-dot {
				${
					imageAccordionDotSize?.Tablet
						? `width: ${imageAccordionDotSize.Tablet}${
								imageAccordionDotSizeUnits?.Tablet ?? "px"
						  }; height: ${imageAccordionDotSize.Tablet}${
								imageAccordionDotSizeUnits?.Tablet ?? "px"
						  };`
						: ""
				}
			}
		}

		@media only screen and (max-width: 767px) {
			.fb-image-accordion-main-wrapper.${blockID} {
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
					imageAccordionGlobalZIndex?.Mobile
						? `z-index: ${imageAccordionGlobalZIndex?.Mobile};`
						: ""
				}

				${
					wrapperBorderGetMobile && imageAccordionWrapperBorderTypeMobile?.top
						? `border-width: ${wrapperBorderGetMobile};`
						: ""
				}
				${
					wrapperBrGetMobile && imageAccordionWrapperBorderRadiusMobile?.top
						? `border-radius: ${wrapperBrGetMobile};`
						: ""
				}
			}

			.${blockID} .fb-image-accordion-container {
				${
					imageAccordionWidth?.Mobile
						? `width: ${imageAccordionWidth.Mobile}${
								imageAccordionWidthUnits?.Mobile ?? "%"
						  };`
						: ""
				}
				${
					imageAccordionHeight?.Mobile
						? `height: ${imageAccordionHeight.Mobile}${
								imageAccordionHeightUnits?.Mobile ?? "px"
						  };`
						: ""
				}
				${
					paddingGetMobile && imageAccordionPaddingMobile?.top
						? `padding: ${paddingGetMobile};`
						: ""
				}
				${
					marginGetMobile && imageAccordionMarginMobile?.top
						? `margin: ${marginGetMobile};`
						: ""
				}
				${
					imageAccordionPreset !== "preset-2" &&
					imageAccordionPreset !== "preset-4" &&
					imageAccordionGap?.Mobile
						? `gap: ${imageAccordionGap.Mobile}${
								imageAccordionGapUnits?.Mobile ?? "px"
						  };`
						: ""
				}
			}

			.${blockID} .fb-image-accordion-item {
				${
					itemBrGetMobile && imageAccordionItemBorderRadiusMobile?.top
						? `border-radius: ${itemBrGetMobile};`
						: ""
				}
			}
			.${blockID} .fb-image-accordion-item.is-active,
			.${blockID} .fb-trigger-hover .fb-image-accordion-item:hover {
				${
					itemActiveBrGetMobile &&
					imageAccordionItemActiveBorderRadiusMobile?.top
						? `border-radius: ${itemActiveBrGetMobile};`
						: ""
				}
			}

			.${blockID} .fb-image-accordion-title {
				${
					imageAccordionTitleFontSize?.Mobile
						? `font-size: ${imageAccordionTitleFontSize.Mobile}${
								imageAccordionTitleFontSizeUnits?.Mobile ?? "px"
						  };`
						: ""
				}
				${
					imageAccordionTitleLetterSpacing?.Mobile
						? `letter-spacing: ${imageAccordionTitleLetterSpacing.Mobile}${
								imageAccordionTitleLetterSpacingUnits?.Mobile || "px"
						  };`
						: ""
				}
			}
			.${blockID} .fb-image-accordion-desc,
			.${blockID} .fb-sub-title {
				${
					imageAccordionSubtitleFontSize?.Mobile
						? `font-size: ${imageAccordionSubtitleFontSize.Mobile}${
								imageAccordionSubtitleFontSizeUnits?.Mobile ?? "px"
						  };`
						: ""
				}
				${
					imageAccordionSubtitleLetterSpacing?.Mobile
						? `letter-spacing: ${imageAccordionSubtitleLetterSpacing.Mobile}${
								imageAccordionSubtitleLetterSpacingUnits?.Mobile || "px"
						  };`
						: ""
				}
			}
			.${blockID} .fb-image-accordion-dot {
				${
					imageAccordionDotSize?.Mobile
						? `width: ${imageAccordionDotSize.Mobile}${
								imageAccordionDotSizeUnits?.Mobile ?? "px"
						  }; height: ${imageAccordionDotSize.Mobile}${
								imageAccordionDotSizeUnits?.Mobile ?? "px"
						  };`
						: ""
				}
			}
		}
	`;

	const customCss = getCustomCss(imageAccordionCustomCSS, `.${blockID}`);
	return `${blockStyle} ${customCss}`.replace(/\s+/g, " ").trim();
};

export default generateImageAccordionStyle;
