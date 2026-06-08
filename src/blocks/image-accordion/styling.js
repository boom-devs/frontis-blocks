/**
 * Image Accordion Block - Style Generation
 * Returns Dynamic Generated CSS
 */

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
		imageAccordionCustomCSS,
	} = attributes;

	/** Helper: shorthand spacing */
	const spacing4 = (obj, units) =>
		obj
			? `${obj.top ?? ""}${units} ${obj.right ?? ""}${units} ${
					obj.bottom ?? ""
			  }${units} ${obj.left ?? ""}${units}`
			: "";

	const brDesktop = spacing4(
		imageAccordionItemBorderRadiusDesktop,
		imageAccordionItemBorderRadiusUnits?.Desktop ?? "px",
	);
	const brTablet = spacing4(
		imageAccordionItemBorderRadiusTablet,
		imageAccordionItemBorderRadiusUnits?.Tablet ?? "px",
	);
	const brMobile = spacing4(
		imageAccordionItemBorderRadiusMobile,
		imageAccordionItemBorderRadiusUnits?.Mobile ?? "px",
	);

	const brActiveDesktop = spacing4(
		imageAccordionItemActiveBorderRadiusDesktop,
		imageAccordionItemBorderRadiusUnits?.Desktop ?? "px",
	);
	const brActiveTablet = spacing4(
		imageAccordionItemActiveBorderRadiusTablet,
		imageAccordionItemBorderRadiusUnits?.Tablet ?? "px",
	);
	const brActiveMobile = spacing4(
		imageAccordionItemActiveBorderRadiusMobile,
		imageAccordionItemBorderRadiusUnits?.Mobile ?? "px",
	);

	const padDesktop = spacing4(
		imageAccordionPaddingDesktop,
		imageAccordionPaddingUnits?.Desktop ?? "px",
	);
	const padTablet = spacing4(
		imageAccordionPaddingTablet,
		imageAccordionPaddingUnits?.Tablet ?? "px",
	);
	const padMobile = spacing4(
		imageAccordionPaddingMobile,
		imageAccordionPaddingUnits?.Mobile ?? "px",
	);

	const marDesktop = spacing4(
		imageAccordionMarginDesktop,
		imageAccordionMarginUnits?.Desktop ?? "px",
	);
	const marTablet = spacing4(
		imageAccordionMarginTablet,
		imageAccordionMarginUnits?.Tablet ?? "px",
	);
	const marMobile = spacing4(
		imageAccordionMarginMobile,
		imageAccordionMarginUnits?.Mobile ?? "px",
	);

	const wrapperBrDesktop = spacing4(
		imageAccordionWrapperBorderRadiusDesktop,
		imageAccordionWrapperBorderRadiusUnits?.Desktop ?? "px",
	);
	const wrapperBrTablet = spacing4(
		imageAccordionWrapperBorderRadiusTablet,
		imageAccordionWrapperBorderRadiusUnits?.Tablet ?? "px",
	);
	const wrapperBrMobile = spacing4(
		imageAccordionWrapperBorderRadiusMobile,
		imageAccordionWrapperBorderRadiusUnits?.Mobile ?? "px",
	);

	const wrapperBorderDesktop = spacing4(
		imageAccordionWrapperBorderTypeDesktop,
		imageAccordionWrapperBorderTypeUnits?.Desktop ?? "px",
	);
	const wrapperBorderTablet = spacing4(
		imageAccordionWrapperBorderTypeTablet,
		imageAccordionWrapperBorderTypeUnits?.Tablet ?? "px",
	);
	const wrapperBorderMobile = spacing4(
		imageAccordionWrapperBorderTypeMobile,
		imageAccordionWrapperBorderTypeUnits?.Mobile ?? "px",
	);

	const btnBrDesktop = spacing4(
		imageAccordionBtnBorderRadiusDesktop,
		imageAccordionBtnBorderRadiusUnits?.Desktop ?? "px",
	);
	const btnPadDesktop = spacing4(
		imageAccordionBtnPaddingDesktop,
		imageAccordionBtnPaddingUnits?.Desktop ?? "px",
	);

	const blockStyle = `

        /* ---- Wrapper ---- */
        .${blockID}.fb-image-accordion-main-wrapper {
            ${
							imageAccordionWrapperBorder
								? `border-style: ${imageAccordionWrapperBorder};`
								: ""
						}
            ${
							imageAccordionWrapperBorderColor
								? `border-color: ${imageAccordionWrapperBorderColor};`
								: ""
						}
            ${
							wrapperBorderDesktop
								? `border-width: ${wrapperBorderDesktop};`
								: ""
						}
            ${wrapperBrDesktop ? `border-radius: ${wrapperBrDesktop};` : ""}
            
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

        /* ---- Container ---- */
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
							imageAccordionPaddingDesktop?.top ? `padding: ${padDesktop};` : ""
						}
            ${imageAccordionMarginDesktop?.top ? `margin: ${marDesktop};` : ""}
            ${
							imageAccordionGlobalZIndex?.Desktop
								? `z-index: ${imageAccordionGlobalZIndex.Desktop};`
								: ""
						}
        }

        /* ---- Item ---- */
        .${blockID} .fb-image-accordion-item {
            ${brDesktop ? `border-radius: ${brDesktop};` : ""}
        }
        .${blockID} .fb-image-accordion-item.is-active,
        .${blockID} .fb-trigger-hover .fb-image-accordion-item:hover {
            ${brActiveDesktop ? `border-radius: ${brActiveDesktop};` : ""}
        }

        /* ---- Overlay ---- */
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

        /* ---- Title ---- */
        .${blockID} .fb-image-accordion-title {
            ${
							imageAccordionTitleColor
								? `color: ${imageAccordionTitleColor};`
								: ""
						}
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

        /* ---- Subtitle / Desc ---- */
        .${blockID} .fb-image-accordion-desc,
        .${blockID} .fb-sub-title {
            ${
							imageAccordionSubtitleColor
								? `color: ${imageAccordionSubtitleColor};`
								: ""
						}
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
								? `letter-spacing: ${
										imageAccordionSubtitleLetterSpacing.Desktop
								  }${
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

        /* ---- Icon Circle (Preset 1) ---- */
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

        /* ---- Dots (Preset 2) ---- */
        .${blockID} .fb-image-accordion-dot {
            ${
							imageAccordionDotColor
								? `background-color: ${imageAccordionDotColor};`
								: ""
						}
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

        /* ---- Number (Preset 2 & 4) ---- */
        .${blockID} .fb-image-accordion-number {
            ${
							imageAccordionNumberColor
								? `color: ${imageAccordionNumberColor};`
								: ""
						}
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

        /* ---- Button (Preset 3) ---- */
        .${blockID} .fb-image-accordion-btn {
            ${
							imageAccordionBtnTextColor
								? `color: ${imageAccordionBtnTextColor};`
								: ""
						}
            ${
							imageAccordionBtnBgColor
								? `background: ${imageAccordionBtnBgColor};`
								: ""
						}
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
							btnBrDesktop && imageAccordionBtnBorderRadiusDesktop?.top
								? `border-radius: ${btnBrDesktop};`
								: ""
						}
            ${
							btnPadDesktop && imageAccordionBtnPaddingDesktop?.top
								? `padding: ${btnPadDesktop};`
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

        /* ---- Tablet ---- */
        @media only screen and (max-width: 1024px) {
            .${blockID}.fb-image-accordion-main-wrapper {
                ${
									wrapperBorderTablet
										? `border-width: ${wrapperBorderTablet};`
										: ""
								}
                ${wrapperBrTablet ? `border-radius: ${wrapperBrTablet};` : ""}
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
									imageAccordionPaddingTablet?.top
										? `padding: ${padTablet};`
										: ""
								}
                ${
									imageAccordionMarginTablet?.top ? `margin: ${marTablet};` : ""
								}
                ${
									imageAccordionGlobalZIndex?.Tablet
										? `z-index: ${imageAccordionGlobalZIndex.Tablet};`
										: ""
								} ${
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
                ${brTablet ? `border-radius: ${brTablet};` : ""}
            }
            .${blockID} .fb-image-accordion-item.is-active,
            .${blockID} .fb-trigger-hover .fb-image-accordion-item:hover {
                ${brActiveTablet ? `border-radius: ${brActiveTablet};` : ""}
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
										? `letter-spacing: ${
												imageAccordionTitleLetterSpacing.Tablet
										  }${
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
										? `letter-spacing: ${
												imageAccordionSubtitleLetterSpacing.Tablet
										  }${
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

        /* ---- Mobile ---- */
        @media only screen and (max-width: 767px) {
            .${blockID}.fb-image-accordion-main-wrapper {
                ${
									wrapperBorderMobile
										? `border-width: ${wrapperBorderMobile};`
										: ""
								}
                ${wrapperBrMobile ? `border-radius: ${wrapperBrMobile};` : ""}
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
									imageAccordionPaddingMobile?.top
										? `padding: ${padMobile};`
										: ""
								}
                ${
									imageAccordionMarginMobile?.top ? `margin: ${marMobile};` : ""
								}
                ${
									imageAccordionGlobalZIndex?.Mobile
										? `z-index: ${imageAccordionGlobalZIndex.Mobile};`
										: ""
								} ${
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
                ${brMobile ? `border-radius: ${brMobile};` : ""}
            }
            .${blockID} .fb-image-accordion-item.is-active,
            .${blockID} .fb-trigger-hover .fb-image-accordion-item:hover {
                ${brActiveMobile ? `border-radius: ${brActiveMobile};` : ""}
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
										? `letter-spacing: ${
												imageAccordionTitleLetterSpacing.Mobile
										  }${
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
										? `letter-spacing: ${
												imageAccordionSubtitleLetterSpacing.Mobile
										  }${
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
