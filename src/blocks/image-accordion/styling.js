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
		imageAccordionTitleLineHeight,
		imageAccordionTitleLineHeightUnits,

		imageAccordionSubtitleColor,
		imageAccordionSubtitleHoverColor,
		imageAccordionSubtitleFontSize,
		imageAccordionSubtitleFontSizeUnits,
		imageAccordionSubtitleFontWeight,

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

		imageAccordionPaddingUnits,
		imageAccordionPaddingDesktop,
		imageAccordionPaddingTablet,
		imageAccordionPaddingMobile,

		imageAccordionMarginUnits,
		imageAccordionMarginDesktop,
		imageAccordionMarginTablet,
		imageAccordionMarginMobile,

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

	const btnBrDesktop = spacing4(
		imageAccordionBtnBorderRadiusDesktop,
		imageAccordionBtnBorderRadiusUnits?.Desktop ?? "px",
	);
	const btnPadDesktop = spacing4(
		imageAccordionBtnPaddingDesktop,
		imageAccordionBtnPaddingUnits?.Desktop ?? "px",
	);

	const blockStyle = `

        /* ---- Container ---- */
        .${blockID} .pea-image-accordion-container {
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
        .${blockID} .pea-image-accordion-item {
            ${brDesktop ? `border-radius: ${brDesktop};` : ""}
        }
        .${blockID} .pea-image-accordion-item.is-active,
        .${blockID} .pea-trigger-hover .pea-image-accordion-item:hover {
            ${brActiveDesktop ? `border-radius: ${brActiveDesktop};` : ""}
        }

        /* ---- Overlay ---- */
        .${blockID} .pea-image-accordion-overlay {
            ${
							imageAccordionOverlayColor
								? `background: ${imageAccordionOverlayColor};`
								: ""
						}
        }
        .${blockID} .pea-image-accordion-item:hover .pea-image-accordion-overlay,
        .${blockID} .pea-image-accordion-item.is-active .pea-image-accordion-overlay {
            ${
							imageAccordionOverlayHoverColor
								? `background: ${imageAccordionOverlayHoverColor};`
								: ""
						}
        }

        /* ---- Title ---- */
        .${blockID} .pea-image-accordion-title {
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
        }
        .${blockID} .pea-image-accordion-item:hover .pea-image-accordion-title,
        .${blockID} .pea-image-accordion-item.is-active .pea-image-accordion-title {
            ${
							imageAccordionTitleHoverColor
								? `color: ${imageAccordionTitleHoverColor};`
								: ""
						}
        }

        /* ---- Subtitle / Desc ---- */
        .${blockID} .pea-image-accordion-desc,
        .${blockID} .pea-sub-title {
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
        }
        .${blockID} .pea-image-accordion-item:hover .pea-image-accordion-desc,
        .${blockID} .pea-image-accordion-item:hover .pea-sub-title,
        .${blockID} .pea-image-accordion-item.is-active .pea-image-accordion-desc,
        .${blockID} .pea-image-accordion-item.is-active .pea-sub-title {
            ${
							imageAccordionSubtitleHoverColor
								? `color: ${imageAccordionSubtitleHoverColor};`
								: ""
						}
        }

        /* ---- Icon Circle (Preset 1) ---- */
        .${blockID} .pea-image-accordion-icon-circle {
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
        .${blockID} .pea-image-accordion-icon-circle i,
        .${blockID} .pea-image-accordion-icon-circle svg {
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
        .${blockID} .pea-image-accordion-item:hover .pea-image-accordion-icon-circle i,
        .${blockID} .pea-image-accordion-item:hover .pea-image-accordion-icon-circle svg,
        .${blockID} .pea-image-accordion-item.is-active .pea-image-accordion-icon-circle i,
        .${blockID} .pea-image-accordion-item.is-active .pea-image-accordion-icon-circle svg {
            ${
							imageAccordionIconHoverColor
								? `color: ${imageAccordionIconHoverColor}; fill: ${imageAccordionIconHoverColor};`
								: ""
						}
        }

        /* ---- Dots (Preset 2) ---- */
        .${blockID} .pea-image-accordion-dot {
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
        .${blockID} .pea-image-accordion-number {
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
        .${blockID} .pea-image-accordion-item:hover .pea-image-accordion-number,
        .${blockID} .pea-image-accordion-item.is-active .pea-image-accordion-number {
            ${
							imageAccordionNumberHoverColor
								? `color: ${imageAccordionNumberHoverColor};`
								: ""
						}
        }

        /* ---- Button (Preset 3) ---- */
        .${blockID} .pea-image-accordion-btn {
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
        }
        .${blockID} .pea-image-accordion-btn:hover {
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
            .${blockID} .pea-image-accordion-container {
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
								}
            }
            .${blockID} .pea-image-accordion-item {
                ${brTablet ? `border-radius: ${brTablet};` : ""}
            }
            .${blockID} .pea-image-accordion-item.is-active {
                ${brActiveTablet ? `border-radius: ${brActiveTablet};` : ""}
            }
            .${blockID} .pea-image-accordion-title {
                ${
									imageAccordionTitleFontSize?.Tablet
										? `font-size: ${imageAccordionTitleFontSize.Tablet}${
												imageAccordionTitleFontSizeUnits?.Tablet ?? "px"
										  };`
										: ""
								}
            }
            .${blockID} .pea-image-accordion-desc,
            .${blockID} .pea-sub-title {
                ${
									imageAccordionSubtitleFontSize?.Tablet
										? `font-size: ${imageAccordionSubtitleFontSize.Tablet}${
												imageAccordionSubtitleFontSizeUnits?.Tablet ?? "px"
										  };`
										: ""
								}
            }
            .${blockID} .pea-image-accordion-dot {
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
            .${blockID} .pea-image-accordion-container {
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
								}
            }
            .${blockID} .pea-image-accordion-item {
                ${brMobile ? `border-radius: ${brMobile};` : ""}
            }
            .${blockID} .pea-image-accordion-item.is-active {
                ${brActiveMobile ? `border-radius: ${brActiveMobile};` : ""}
            }
            .${blockID} .pea-image-accordion-title {
                ${
									imageAccordionTitleFontSize?.Mobile
										? `font-size: ${imageAccordionTitleFontSize.Mobile}${
												imageAccordionTitleFontSizeUnits?.Mobile ?? "px"
										  };`
										: ""
								}
            }
            .${blockID} .pea-image-accordion-desc,
            .${blockID} .pea-sub-title {
                ${
									imageAccordionSubtitleFontSize?.Mobile
										? `font-size: ${imageAccordionSubtitleFontSize.Mobile}${
												imageAccordionSubtitleFontSizeUnits?.Mobile ?? "px"
										  };`
										: ""
								}
            }
            .${blockID} .pea-image-accordion-dot {
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
