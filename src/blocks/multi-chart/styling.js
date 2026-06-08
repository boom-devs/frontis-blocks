/**
 * Multi Chart Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from "@Utils/getCustomCss";

const generateMultiChartStyle = (attributes) => {
	const {
		blockID,
		canvasWidth,
		canvasWidthUnits,
		canvasHeight,
		canvasHeightUnits,
		canvasNormalBackgroundType,
		canvasNormalColor,
		canvasNormalGradientColor,
		canvasNormalCustomGradientSwitcher,
		canvasNormalCustomGradientInputValue,
		canvasHoverBackgroundType,
		canvasHoverColor,
		canvasHoverGradientColor,
		canvasHoverCustomGradientSwitcher,
		canvasHoverCustomGradientInputValue,

		canvasBorderRadiusUnits,
		canvasBorderRadiusDesktop,
		canvasPaddingUnits,
		canvasPaddingDesktop,
		canvasMarginUnits,
		canvasMarginDesktop,

		chartBodyWidth,
		chartBodyWidthUnits,
		chartBodyHeight,
		chartBodyHeightUnits,
		chartBodyNormalBackgroundType,
		chartBodyNormalColor,
		chartBodyNormalGradientColor,
		chartBodyNormalCustomGradientSwitcher,
		chartBodyNormalCustomGradientInputValue,
		chartBodyHoverBackgroundType,
		chartBodyHoverColor,
		chartBodyHoverGradientColor,
		chartBodyHoverCustomGradientSwitcher,
		chartBodyHoverCustomGradientInputValue,
		chartBodyBorderRadiusUnits,
		chartBodyBorderRadiusDesktop,
		chartBodyPaddingDesktop,

		chartTitleColor,
		chartTitleHoverColor,
		chartHeaderPaddingDesktop,

		toggleBtnColor,
		toggleBtnBgColor,
		toggleBtnHoverColor,
		toggleBtnHoverBgColor,
		toggleBtnPaddingDesktop,
		toggleBtnBorderRadiusDesktop,

		filterIconSize,
		filterIconSizeUnits,
		filterIconColor,
		filterIconHoverColor,

		legendTextAlignment,
		legendGap,
		legendDotSize,
		legendDotRadius,
		legendTextColor,

		footerTitleNormalColor,
		footerTitleHoverColor,
		footerDescNormalColor,
		footerDescHoverColor,
		footerPaddingDesktop,
		footerPaddingUnits,
		footerMarginDesktop,
		footerMarginUnits,
		footerTextAlignment,

		multiChartGlobalZIndex,
		multiChartCustomCSS,
	} = attributes;

	/** Helper: shorthand spacing */
	const spacing4 = (obj, unit = "px") =>
		obj
			? `${obj.top ?? 0}${unit} ${obj.right ?? 0}${unit} ${
					obj.bottom ?? 0
			  }${unit} ${obj.left ?? 0}${unit}`
			: "";

	// Shorthand properties
	const canvasPad = spacing4(canvasPaddingDesktop, canvasPaddingUnits?.Desktop);
	const canvasMar = spacing4(canvasMarginDesktop, canvasMarginUnits?.Desktop);
	const canvasBR = spacing4(
		canvasBorderRadiusDesktop,
		canvasBorderRadiusUnits?.Desktop,
	);

	const bodyPad = spacing4(chartBodyPaddingDesktop, "px");
	const bodyBR = spacing4(
		chartBodyBorderRadiusDesktop,
		chartBodyBorderRadiusUnits?.Desktop,
	);

	const headerPad = spacing4(chartHeaderPaddingDesktop, "px");
	const footerPad = spacing4(footerPaddingDesktop, footerPaddingUnits?.Desktop);
	const footerMar = spacing4(footerMarginDesktop, footerMarginUnits?.Desktop);

	const btnPad = spacing4(toggleBtnPaddingDesktop, "px");
	const btnBR = spacing4(toggleBtnBorderRadiusDesktop, "px");

	const canvasBgNormal =
		canvasNormalBackgroundType === "gradient"
			? canvasNormalCustomGradientSwitcher &&
			  canvasNormalCustomGradientInputValue
				? `background: ${canvasNormalCustomGradientInputValue};`
				: canvasNormalGradientColor
				? `background: ${canvasNormalGradientColor};`
				: ""
			: canvasNormalColor
			? `background-color: ${canvasNormalColor};`
			: "";

	const canvasBgHover =
		canvasHoverBackgroundType === "gradient"
			? canvasHoverCustomGradientSwitcher && canvasHoverCustomGradientInputValue
				? `background: ${canvasHoverCustomGradientInputValue};`
				: canvasHoverGradientColor
				? `background: ${canvasHoverGradientColor};`
				: ""
			: canvasHoverColor
			? `background-color: ${canvasHoverColor};`
			: "";

	const bodyBgNormal =
		chartBodyNormalBackgroundType === "gradient"
			? chartBodyNormalCustomGradientSwitcher &&
			  chartBodyNormalCustomGradientInputValue
				? `background: ${chartBodyNormalCustomGradientInputValue};`
				: chartBodyNormalGradientColor
				? `background: ${chartBodyNormalGradientColor};`
				: ""
			: chartBodyNormalColor
			? `background-color: ${chartBodyNormalColor};`
			: "";

	const bodyBgHover =
		chartBodyHoverBackgroundType === "gradient"
			? chartBodyHoverCustomGradientSwitcher &&
			  chartBodyHoverCustomGradientInputValue
				? `background: ${chartBodyHoverCustomGradientInputValue};`
				: chartBodyHoverGradientColor
				? `background: ${chartBodyHoverGradientColor};`
				: ""
			: chartBodyHoverColor
			? `background-color: ${chartBodyHoverColor};`
			: "";

	const blockStyle = `
		.${blockID}.fb-elegant-chart-block {
			${
				multiChartGlobalZIndex?.Desktop
					? `z-index: ${multiChartGlobalZIndex.Desktop};`
					: ""
			}
		}
		.${blockID} .fb-chart-card {
			${
				canvasWidth?.Desktop
					? `width: ${canvasWidth.Desktop}${canvasWidthUnits?.Desktop};`
					: ""
			}
			${canvasBgNormal}
			${canvasPad ? `padding: ${canvasPad};` : ""}
			${canvasMar ? `margin: ${canvasMar};` : ""}
			${canvasBR ? `border-radius: ${canvasBR};` : ""}
			transition: all 0.3s ease;
		}
		.${blockID} .fb-chart-card:hover {
			${canvasBgHover}
		}
		.${blockID} .fb-chart-header {
			${headerPad ? `padding: ${headerPad};` : ""}
		}
		.${blockID} .fb-chart-label {
			${chartTitleColor ? `color: ${chartTitleColor};` : ""}
		}
		.${blockID} .fb-chart-card:hover .fb-chart-label {
			${chartTitleHoverColor ? `color: ${chartTitleHoverColor};` : ""}
		}
		.${blockID} .fb-chart-filter {
			${toggleBtnColor ? `color: ${toggleBtnColor};` : ""}
			${toggleBtnBgColor ? `background-color: ${toggleBtnBgColor};` : ""}
			${btnPad ? `padding: ${btnPad};` : ""}
			${btnBR ? `border-radius: ${btnBR};` : ""}
			display: flex;
			align-items: center;
			gap: 8px;
		}
		.${blockID} .fb-chart-filter:hover {
			${toggleBtnHoverColor ? `color: ${toggleBtnHoverColor};` : ""}
			${toggleBtnHoverBgColor ? `background-color: ${toggleBtnHoverBgColor};` : ""}
		}
		.${blockID} .fb-filter-icon svg {
			${
				filterIconSize?.Desktop
					? `width: ${filterIconSize.Desktop}${
							filterIconSizeUnits?.Desktop || "px"
					  }; height: ${filterIconSize.Desktop}${
							filterIconSizeUnits?.Desktop || "px"
					  };`
					: "width: 14px; height: 14px;"
			}
			${filterIconColor ? `fill: ${filterIconColor};` : "fill: currentColor;"}
			transition: all 0.3s ease;
		}
		.${blockID} .fb-chart-filter:hover .fb-filter-icon svg {
			${filterIconHoverColor ? `fill: ${filterIconHoverColor};` : ""}
		}
		.${blockID} .fb-chart-card-body {
			${bodyBgNormal}
			${bodyPad ? `padding: ${bodyPad};` : ""}
			${bodyBR ? `border-radius: ${bodyBR};` : ""}
			${
				canvasHeight?.Desktop
					? `height: ${canvasHeight.Desktop}${canvasHeightUnits?.Desktop};`
					: ""
			}
		}
		.${blockID} .fb-chart-card-body:hover {
			${bodyBgHover}
		}
		/* Legend Styles */
		.${blockID} .fb-chart-legend {
			display: flex;
			flex-wrap: wrap;
			gap: ${legendGap?.Desktop || "10"}px;
			justify-content: ${
				legendTextAlignment?.Desktop === "left"
					? "flex-start"
					: legendTextAlignment?.Desktop === "right"
					? "flex-end"
					: "center"
			};
			margin-top: 20px;
		}
		.${blockID} .fb-legend-item {
			${legendTextColor ? `color: ${legendTextColor};` : ""}
		}
		.${blockID} .fb-legend-dot {
			${
				legendDotSize?.Desktop
					? `width: ${legendDotSize.Desktop}px; height: ${legendDotSize.Desktop}px;`
					: ""
			}
			${legendDotRadius?.Desktop ? `border-radius: ${legendDotRadius.Desktop}%;` : ""}
		}
		.${blockID} .fb-chart-footer {
			${footerPad ? `padding: ${footerPad};` : ""}
			${footerMar ? `margin: ${footerMar};` : ""}
			${
				footerTextAlignment?.Desktop
					? `text-align: ${footerTextAlignment.Desktop};`
					: ""
			}
		}
		.${blockID} .fb-footer-title {
			${footerTitleNormalColor ? `color: ${footerTitleNormalColor};` : ""}
		}
		.${blockID} .fb-chart-footer:hover .fb-footer-title {
			${footerTitleHoverColor ? `color: ${footerTitleHoverColor};` : ""}
		}
		.${blockID} .fb-chart-description {
			${footerDescNormalColor ? `color: ${footerDescNormalColor};` : ""}
		}
		.${blockID} .fb-chart-footer:hover .fb-chart-description {
			${footerDescHoverColor ? `color: ${footerDescHoverColor};` : ""}
		}
		/* Responsive Media Queries */
		@media only screen and (max-width: 1024px) {
			.${blockID} .fb-chart-card {
				${
					canvasWidth?.Tablet
						? `width: ${canvasWidth.Tablet}${canvasWidthUnits?.Tablet};`
						: ""
				}
			}
			.${blockID} .fb-chart-card-body {
				${
					canvasHeight?.Tablet
						? `height: ${canvasHeight.Tablet}${canvasHeightUnits?.Tablet};`
						: ""
				}
			}
			.${blockID} .fb-chart-footer {
				${
					footerTextAlignment?.Tablet
						? `text-align: ${footerTextAlignment.Tablet};`
						: ""
				}
			}
			.${blockID} .fb-filter-icon svg {
				${
					filterIconSize?.Tablet
						? `width: ${filterIconSize.Tablet}${
								filterIconSizeUnits?.Tablet || "px"
						  }; height: ${filterIconSize.Tablet}${
								filterIconSizeUnits?.Tablet || "px"
						  };`
						: ""
				}
			}
			.${blockID} .fb-chart-legend {
				justify-content: ${
					legendTextAlignment?.Tablet === "left"
						? "flex-start"
						: legendTextAlignment?.Tablet === "right"
						? "flex-end"
						: legendTextAlignment?.Tablet === "center"
						? "center"
						: ""
				};
			}
			.${blockID} .fb-legend-dot {
				${
					legendDotSize?.Tablet
						? `width: ${legendDotSize.Tablet}px; height: ${legendDotSize.Tablet}px;`
						: ""
				}
			}
		}

		@media only screen and (max-width: 767px) {
			.${blockID} .fb-chart-card {
				${
					canvasWidth?.Mobile
						? `width: ${canvasWidth.Mobile}${canvasWidthUnits?.Mobile};`
						: ""
				}
			}
			.${blockID} .fb-chart-card-body {
				${
					canvasHeight?.Mobile
						? `height: ${canvasHeight.Mobile}${canvasHeightUnits?.Mobile};`
						: ""
				}
			}
			.${blockID} .fb-chart-footer {
				${
					footerTextAlignment?.Mobile
						? `text-align: ${footerTextAlignment.Mobile};`
						: ""
				}
			}
			.${blockID} .fb-filter-icon svg {
				${
					filterIconSize?.Mobile
						? `width: ${filterIconSize.Mobile}${
								filterIconSizeUnits?.Mobile || "px"
						  }; height: ${filterIconSize.Mobile}${
								filterIconSizeUnits?.Mobile || "px"
						  };`
						: ""
				}
			}
			.${blockID} .fb-chart-legend {
				justify-content: ${
					legendTextAlignment?.Mobile === "left"
						? "flex-start"
						: legendTextAlignment?.Mobile === "right"
						? "flex-end"
						: legendTextAlignment?.Mobile === "center"
						? "center"
						: ""
				};
			}
			.${blockID} .fb-legend-dot {
				${
					legendDotSize?.Mobile
						? `width: ${legendDotSize.Mobile}px; height: ${legendDotSize.Mobile}px;`
						: ""
				}
			}
		}
	`;

	const customCss = getCustomCss(multiChartCustomCSS, `.${blockID}`);
	return `${blockStyle} ${customCss}`.replace(/\s+/g, " ").trim();
};

export default generateMultiChartStyle;
