import getCustomCss from "@Utils/getCustomCss";

const multiChartStyle = (attributes) => {
	const {
		blockID,
		chartHeight,
		chartHeightUnits,
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
		chartBodyPaddingUnits,
		chartBodyPaddingDesktop,
		chartBodyMarginUnits,
		chartBodyMarginDesktop,

		chartTitleColor,
		chartTitleHoverColor,
		chartHeaderPaddingUnits,
		chartHeaderPaddingDesktop,

		toggleBtnColor,
		toggleBtnBgColor,
		toggleBtnHoverColor,
		toggleBtnHoverBgColor,
		toggleBtnPaddingDesktop,
		toggleBtnPaddingUnits,
		toggleBtnBorderRadiusDesktop,
		toggleBtnBorderRadiusUnits,

		filterIconSize,
		filterIconSizeUnits,
		filterIconColor,
		filterIconHoverColor,

		legendTextAlignment,
		legendGap,
		legendDotSize,
		legendDotRadius,
		legendTextColor,
		showChartLegend,

		footerTitleNormalColor,
		footerTitleFontFamily,
		footerTitleFontSize,
		footerTitleFontSizeUnits,
		footerTitleFontWeight,
		footerTitleFontStyle,
		footerTitleTextTransform,
		footerTitleTextDecoration,
		footerTitleLetterSpacing,
		footerTitleLetterSpacingUnits,
		footerTitleLineHeight,
		footerTitleLineHeightUnits,
		footerTitleHoverColor,
		footerDescNormalColor,
		footerDescFontFamily,
		footerDescFontSize,
		footerDescFontSizeUnits,
		footerDescFontWeight,
		footerDescFontStyle,
		footerDescTextTransform,
		footerDescTextDecoration,
		footerDescLetterSpacing,
		footerDescLetterSpacingUnits,
		footerDescLineHeight,
		footerDescLineHeightUnits,
		footerDescColorSwitcher,
		footerDescHoverColor,
		footerPaddingDesktop,
		footerPaddingUnits,
		footerMarginDesktop,
		footerMarginUnits,
		footerTextAlignment,

		multiChartBgColorSwitcher,
		multiChartBackgroundType,
		multiChartClassicColor,
		multiChartGradientColor,
		multiChartCustomGradientSwitcher,
		multiChartCustomGradientInputValue,
		multiChartBackgroundImageUrl,
		multiChartBackgroundImageAlt,
		multiChartBackgroundImageID,
		multiChartBackgroundImagePosition,
		multiChartBackgroundImageAttachment,
		multiChartBackgroundImageRepeat,
		multiChartBackgroundImageSize,
		multiChartHoverBackgroundType,
		multiChartHoverClassicColor,
		multiChartHoverGradientColor,
		multiChartHoverCustomGradientSwitcher,
		multiChartHoverCustomGradientInputValue,
		multiChartHoverBackgroundImageUrl,
		multiChartHoverBackgroundImageAlt,
		multiChartHoverBackgroundImageID,
		multiChartHoverBackgroundImagePosition,
		multiChartHoverBackgroundImageAttachment,
		multiChartHoverBackgroundImageRepeat,
		multiChartHoverBackgroundImageSize,

		multiChartWrapperBorder,
		multiChartWrapperBorderColorSwitcher,
		multiChartWrapperBorderColor,
		multiChartWrapperBorderHoverColor,
		multiChartWrapperBorderTypeUnits,
		multiChartWrapperBorderTypeDesktop,
		multiChartWrapperBorderTypeTablet,
		multiChartWrapperBorderTypeMobile,
		multiChartWrapperBorderTypeLink,
		multiChartWrapperBorderRadiusUnits,
		multiChartWrapperBorderRadiusDesktop,
		multiChartWrapperBorderRadiusTablet,
		multiChartWrapperBorderRadiusMobile,
		multiChartWrapperBorderRadiusLink,

		multiChartPaddingUnits,
		multiChartPaddingDesktop,
		multiChartPaddingTablet,
		multiChartPaddingMobile,
		multiChartMarginUnits,
		multiChartMarginDesktop,
		multiChartMarginTablet,
		multiChartMarginMobile,

		multiChartGlobalZIndex,
		multiChartPositionType,
		multiChartHZOrientationType,
		multiChartVROrientationType,
		multiChartHZLeftOffset,
		multiChartHZLeftOffsetUnits,
		multiChartHZRightOffset,
		multiChartHZRightOffsetUnits,
		multiChartVRTopOffset,
		multiChartVRTopOffsetUnits,
		multiChartVRBottomOffset,
		multiChartVRBottomOffsetUnits,
		multiChartOverflow,
		multiChartCustomCSS,
		canvasPaddingTablet,
		canvasPaddingMobile,
		canvasMarginTablet,
		canvasMarginMobile,
		canvasBorderRadiusTablet,
		canvasBorderRadiusMobile,
		chartBodyPaddingTablet,
		chartBodyPaddingMobile,
		chartBodyMarginTablet,
		chartBodyMarginMobile,
		chartBodyBorderRadiusTablet,
		chartBodyBorderRadiusMobile,
		chartHeaderPaddingTablet,
		chartHeaderPaddingMobile,
		footerPaddingTablet,
		footerPaddingMobile,
		footerMarginTablet,
		footerMarginMobile,
		toggleBtnPaddingTablet,
		toggleBtnPaddingMobile,
		toggleBtnBorderRadiusTablet,
		toggleBtnBorderRadiusMobile,

		legendDotSizeUnits,
	} = attributes;

	// Canvas Padding
	const canvasPaddingDesktopWidth = `${canvasPaddingDesktop?.top}${canvasPaddingUnits?.Desktop} ${canvasPaddingDesktop?.right}${canvasPaddingUnits?.Desktop} ${canvasPaddingDesktop?.bottom}${canvasPaddingUnits?.Desktop} ${canvasPaddingDesktop?.left}${canvasPaddingUnits?.Desktop}`;
	const canvasPaddingTabletWidth = `${canvasPaddingTablet?.top}${canvasPaddingUnits?.Tablet} ${canvasPaddingTablet?.right}${canvasPaddingUnits?.Tablet} ${canvasPaddingTablet?.bottom}${canvasPaddingUnits?.Tablet} ${canvasPaddingTablet?.left}${canvasPaddingUnits?.Tablet}`;
	const canvasPaddingMobileWidth = `${canvasPaddingMobile?.top}${canvasPaddingUnits?.Mobile} ${canvasPaddingMobile?.right}${canvasPaddingUnits?.Mobile} ${canvasPaddingMobile?.bottom}${canvasPaddingUnits?.Mobile} ${canvasPaddingMobile?.left}${canvasPaddingUnits?.Mobile}`;

	// Canvas Margin
	const canvasMarginDesktopWidth = `${canvasMarginDesktop?.top}${canvasMarginUnits?.Desktop} ${canvasMarginDesktop?.right}${canvasMarginUnits?.Desktop} ${canvasMarginDesktop?.bottom}${canvasMarginUnits?.Desktop} ${canvasMarginDesktop?.left}${canvasMarginUnits?.Desktop}`;
	const canvasMarginTabletWidth = `${canvasMarginTablet?.top}${canvasMarginUnits?.Tablet} ${canvasMarginTablet?.right}${canvasMarginUnits?.Tablet} ${canvasMarginTablet?.bottom}${canvasMarginUnits?.Tablet} ${canvasMarginTablet?.left}${canvasMarginUnits?.Tablet}`;
	const canvasMarginMobileWidth = `${canvasMarginMobile?.top}${canvasMarginUnits?.Mobile} ${canvasMarginMobile?.right}${canvasMarginUnits?.Mobile} ${canvasMarginMobile?.bottom}${canvasMarginUnits?.Mobile} ${canvasMarginMobile?.left}${canvasMarginUnits?.Mobile}`;

	// Canvas Border Radius
	const canvasBorderRadiusDesktopWidth = `${canvasBorderRadiusDesktop?.top}${canvasBorderRadiusUnits?.Desktop} ${canvasBorderRadiusDesktop?.right}${canvasBorderRadiusUnits?.Desktop} ${canvasBorderRadiusDesktop?.bottom}${canvasBorderRadiusUnits?.Desktop} ${canvasBorderRadiusDesktop?.left}${canvasBorderRadiusUnits?.Desktop}`;
	const canvasBorderRadiusTabletWidth = `${canvasBorderRadiusTablet?.top}${canvasBorderRadiusUnits?.Tablet} ${canvasBorderRadiusTablet?.right}${canvasBorderRadiusUnits?.Tablet} ${canvasBorderRadiusTablet?.bottom}${canvasBorderRadiusUnits?.Tablet} ${canvasBorderRadiusTablet?.left}${canvasBorderRadiusUnits?.Tablet}`;
	const canvasBorderRadiusMobileWidth = `${canvasBorderRadiusMobile?.top}${canvasBorderRadiusUnits?.Mobile} ${canvasBorderRadiusMobile?.right}${canvasBorderRadiusUnits?.Mobile} ${canvasBorderRadiusMobile?.bottom}${canvasBorderRadiusUnits?.Mobile} ${canvasBorderRadiusMobile?.left}${canvasBorderRadiusUnits?.Mobile}`;

	// Chart Body Padding
	const chartBodyPaddingDesktopWidth = `${chartBodyPaddingDesktop?.top}${chartBodyPaddingUnits?.Desktop} ${chartBodyPaddingDesktop?.right}${chartBodyPaddingUnits?.Desktop} ${chartBodyPaddingDesktop?.bottom}${chartBodyPaddingUnits?.Desktop} ${chartBodyPaddingDesktop?.left}${chartBodyPaddingUnits?.Desktop}`;
	const chartBodyPaddingTabletWidth = `${chartBodyPaddingTablet?.top}${chartBodyPaddingUnits?.Tablet} ${chartBodyPaddingTablet?.right}${chartBodyPaddingUnits?.Tablet} ${chartBodyPaddingTablet?.bottom}${chartBodyPaddingUnits?.Tablet} ${chartBodyPaddingTablet?.left}${chartBodyPaddingUnits?.Tablet}`;
	const chartBodyPaddingMobileWidth = `${chartBodyPaddingMobile?.top}${chartBodyPaddingUnits?.Mobile} ${chartBodyPaddingMobile?.right}${chartBodyPaddingUnits?.Mobile} ${chartBodyPaddingMobile?.bottom}${chartBodyPaddingUnits?.Mobile} ${chartBodyPaddingMobile?.left}${chartBodyPaddingUnits?.Mobile}`;

	// Chart Body Margin
	const chartBodyMarginDesktopWidth = `${chartBodyMarginDesktop?.top}${chartBodyMarginUnits?.Desktop} ${chartBodyMarginDesktop?.right}${chartBodyMarginUnits?.Desktop} ${chartBodyMarginDesktop?.bottom}${chartBodyMarginUnits?.Desktop} ${chartBodyMarginDesktop?.left}${chartBodyMarginUnits?.Desktop}`;
	const chartBodyMarginTabletWidth = `${chartBodyMarginTablet?.top}${chartBodyMarginUnits?.Tablet} ${chartBodyMarginTablet?.right}${chartBodyMarginUnits?.Tablet} ${chartBodyMarginTablet?.bottom}${chartBodyMarginUnits?.Tablet} ${chartBodyMarginTablet?.left}${chartBodyMarginUnits?.Tablet}`;
	const chartBodyMarginMobileWidth = `${chartBodyMarginMobile?.top}${chartBodyMarginUnits?.Mobile} ${chartBodyMarginMobile?.right}${chartBodyMarginUnits?.Mobile} ${chartBodyMarginMobile?.bottom}${chartBodyMarginUnits?.Mobile} ${chartBodyMarginMobile?.left}${chartBodyMarginUnits?.Mobile}`;

	// Chart Body Border Radius
	const chartBodyBorderRadiusDesktopWidth = `${chartBodyBorderRadiusDesktop?.top}${chartBodyBorderRadiusUnits?.Desktop} ${chartBodyBorderRadiusDesktop?.right}${chartBodyBorderRadiusUnits?.Desktop} ${chartBodyBorderRadiusDesktop?.bottom}${chartBodyBorderRadiusUnits?.Desktop} ${chartBodyBorderRadiusDesktop?.left}${chartBodyBorderRadiusUnits?.Desktop}`;
	const chartBodyBorderRadiusTabletWidth = `${chartBodyBorderRadiusTablet?.top}${chartBodyBorderRadiusUnits?.Tablet} ${chartBodyBorderRadiusTablet?.right}${chartBodyBorderRadiusUnits?.Tablet} ${chartBodyBorderRadiusTablet?.bottom}${chartBodyBorderRadiusUnits?.Tablet} ${chartBodyBorderRadiusTablet?.left}${chartBodyBorderRadiusUnits?.Tablet}`;
	const chartBodyBorderRadiusMobileWidth = `${chartBodyBorderRadiusMobile?.top}${chartBodyBorderRadiusUnits?.Mobile} ${chartBodyBorderRadiusMobile?.right}${chartBodyBorderRadiusUnits?.Mobile} ${chartBodyBorderRadiusMobile?.bottom}${chartBodyBorderRadiusUnits?.Mobile} ${chartBodyBorderRadiusMobile?.left}${chartBodyBorderRadiusUnits?.Mobile}`;

	// Chart Header Padding
	const chartHeaderPaddingDesktopWidth = `${chartHeaderPaddingDesktop?.top}${chartHeaderPaddingUnits?.Desktop} ${chartHeaderPaddingDesktop?.right}${chartHeaderPaddingUnits?.Desktop} ${chartHeaderPaddingDesktop?.bottom}${chartHeaderPaddingUnits?.Desktop} ${chartHeaderPaddingDesktop?.left}${chartHeaderPaddingUnits?.Desktop}`;
	const chartHeaderPaddingTabletWidth = `${chartHeaderPaddingTablet?.top}${chartHeaderPaddingUnits?.Tablet} ${chartHeaderPaddingTablet?.right}${chartHeaderPaddingUnits?.Tablet} ${chartHeaderPaddingTablet?.bottom}${chartHeaderPaddingUnits?.Tablet} ${chartHeaderPaddingTablet?.left}${chartHeaderPaddingUnits?.Tablet}`;
	const chartHeaderPaddingMobileWidth = `${chartHeaderPaddingMobile?.top}${chartHeaderPaddingUnits?.Mobile} ${chartHeaderPaddingMobile?.right}${chartHeaderPaddingUnits?.Mobile} ${chartHeaderPaddingMobile?.bottom}${chartHeaderPaddingUnits?.Mobile} ${chartHeaderPaddingMobile?.left}${chartHeaderPaddingUnits?.Mobile}`;

	// Footer Padding
	const footerPaddingDesktopWidth = `${footerPaddingDesktop?.top}${footerPaddingUnits?.Desktop} ${footerPaddingDesktop?.right}${footerPaddingUnits?.Desktop} ${footerPaddingDesktop?.bottom}${footerPaddingUnits?.Desktop} ${footerPaddingDesktop?.left}${footerPaddingUnits?.Desktop}`;
	const footerPaddingTabletWidth = `${footerPaddingTablet?.top}${footerPaddingUnits?.Tablet} ${footerPaddingTablet?.right}${footerPaddingUnits?.Tablet} ${footerPaddingTablet?.bottom}${footerPaddingUnits?.Tablet} ${footerPaddingTablet?.left}${footerPaddingUnits?.Tablet}`;
	const footerPaddingMobileWidth = `${footerPaddingMobile?.top}${footerPaddingUnits?.Mobile} ${footerPaddingMobile?.right}${footerPaddingUnits?.Mobile} ${footerPaddingMobile?.bottom}${footerPaddingUnits?.Mobile} ${footerPaddingMobile?.left}${footerPaddingUnits?.Mobile}`;

	// Footer Margin
	const footerMarginDesktopWidth = `${footerMarginDesktop?.top}${footerMarginUnits?.Desktop} ${footerMarginDesktop?.right}${footerMarginUnits?.Desktop} ${footerMarginDesktop?.bottom}${footerMarginUnits?.Desktop} ${footerMarginDesktop?.left}${footerMarginUnits?.Desktop}`;
	const footerMarginTabletWidth = `${footerMarginTablet?.top}${footerMarginUnits?.Tablet} ${footerMarginTablet?.right}${footerMarginUnits?.Tablet} ${footerMarginTablet?.bottom}${footerMarginUnits?.Tablet} ${footerMarginTablet?.left}${footerMarginUnits?.Tablet}`;
	const footerMarginMobileWidth = `${footerMarginMobile?.top}${footerMarginUnits?.Mobile} ${footerMarginMobile?.right}${footerMarginUnits?.Mobile} ${footerMarginMobile?.bottom}${footerMarginUnits?.Mobile} ${footerMarginMobile?.left}${footerMarginUnits?.Mobile}`;

	// MultiChart Wrapper Padding
	const multiChartPaddingDesktopWidth = `${multiChartPaddingDesktop?.top}${multiChartPaddingUnits?.Desktop} ${multiChartPaddingDesktop?.right}${multiChartPaddingUnits?.Desktop} ${multiChartPaddingDesktop?.bottom}${multiChartPaddingUnits?.Desktop} ${multiChartPaddingDesktop?.left}${multiChartPaddingUnits?.Desktop}`;
	const multiChartPaddingTabletWidth = `${multiChartPaddingTablet?.top}${multiChartPaddingUnits?.Tablet} ${multiChartPaddingTablet?.right}${multiChartPaddingUnits?.Tablet} ${multiChartPaddingTablet?.bottom}${multiChartPaddingUnits?.Tablet} ${multiChartPaddingTablet?.left}${multiChartPaddingUnits?.Tablet}`;
	const multiChartPaddingMobileWidth = `${multiChartPaddingMobile?.top}${multiChartPaddingUnits?.Mobile} ${multiChartPaddingMobile?.right}${multiChartPaddingUnits?.Mobile} ${multiChartPaddingMobile?.bottom}${multiChartPaddingUnits?.Mobile} ${multiChartPaddingMobile?.left}${multiChartPaddingUnits?.Mobile}`;

	// MultiChart Wrapper Margin
	const multiChartMarginDesktopWidth = `${multiChartMarginDesktop?.top}${multiChartMarginUnits?.Desktop} ${multiChartMarginDesktop?.right}${multiChartMarginUnits?.Desktop} ${multiChartMarginDesktop?.bottom}${multiChartMarginUnits?.Desktop} ${multiChartMarginDesktop?.left}${multiChartMarginUnits?.Desktop}`;
	const multiChartMarginTabletWidth = `${multiChartMarginTablet?.top}${multiChartMarginUnits?.Tablet} ${multiChartMarginTablet?.right}${multiChartMarginUnits?.Tablet} ${multiChartMarginTablet?.bottom}${multiChartMarginUnits?.Tablet} ${multiChartMarginTablet?.left}${multiChartMarginUnits?.Tablet}`;
	const multiChartMarginMobileWidth = `${multiChartMarginMobile?.top}${multiChartMarginUnits?.Mobile} ${multiChartMarginMobile?.right}${multiChartMarginUnits?.Mobile} ${multiChartMarginMobile?.bottom}${multiChartMarginUnits?.Mobile} ${multiChartMarginMobile?.left}${multiChartMarginUnits?.Mobile}`;

	// MultiChart Wrapper Border Radius
	const multiChartWrapperBorderRadiusDesktopWidth = `${multiChartWrapperBorderRadiusDesktop?.top}${multiChartWrapperBorderRadiusUnits?.Desktop} ${multiChartWrapperBorderRadiusDesktop?.right}${multiChartWrapperBorderRadiusUnits?.Desktop} ${multiChartWrapperBorderRadiusDesktop?.bottom}${multiChartWrapperBorderRadiusUnits?.Desktop} ${multiChartWrapperBorderRadiusDesktop?.left}${multiChartWrapperBorderRadiusUnits?.Desktop}`;
	const multiChartWrapperBorderRadiusTabletWidth = `${multiChartWrapperBorderRadiusTablet?.top}${multiChartWrapperBorderRadiusUnits?.Tablet} ${multiChartWrapperBorderRadiusTablet?.right}${multiChartWrapperBorderRadiusUnits?.Tablet} ${multiChartWrapperBorderRadiusTablet?.bottom}${multiChartWrapperBorderRadiusUnits?.Tablet} ${multiChartWrapperBorderRadiusTablet?.left}${multiChartWrapperBorderRadiusUnits?.Tablet}`;
	const multiChartWrapperBorderRadiusMobileWidth = `${multiChartWrapperBorderRadiusMobile?.top}${multiChartWrapperBorderRadiusUnits?.Mobile} ${multiChartWrapperBorderRadiusMobile?.right}${multiChartWrapperBorderRadiusUnits?.Mobile} ${multiChartWrapperBorderRadiusMobile?.bottom}${multiChartWrapperBorderRadiusUnits?.Mobile} ${multiChartWrapperBorderRadiusMobile?.left}${multiChartWrapperBorderRadiusUnits?.Mobile}`;

	// MultiChart Wrapper Border Type
	const multiChartWrapperBorderTypeDesktopWidth = `${multiChartWrapperBorderTypeDesktop?.top}${multiChartWrapperBorderTypeUnits?.Desktop} ${multiChartWrapperBorderTypeDesktop?.right}${multiChartWrapperBorderTypeUnits?.Desktop} ${multiChartWrapperBorderTypeDesktop?.bottom}${multiChartWrapperBorderTypeUnits?.Desktop} ${multiChartWrapperBorderTypeDesktop?.left}${multiChartWrapperBorderTypeUnits?.Desktop}`;
	const multiChartWrapperBorderTypeTabletWidth = `${multiChartWrapperBorderTypeTablet?.top}${multiChartWrapperBorderTypeUnits?.Tablet} ${multiChartWrapperBorderTypeTablet?.right}${multiChartWrapperBorderTypeUnits?.Tablet} ${multiChartWrapperBorderTypeTablet?.bottom}${multiChartWrapperBorderTypeUnits?.Tablet} ${multiChartWrapperBorderTypeTablet?.left}${multiChartWrapperBorderTypeUnits?.Tablet}`;
	const multiChartWrapperBorderTypeMobileWidth = `${multiChartWrapperBorderTypeMobile?.top}${multiChartWrapperBorderTypeUnits?.Mobile} ${multiChartWrapperBorderTypeMobile?.right}${multiChartWrapperBorderTypeUnits?.Mobile} ${multiChartWrapperBorderTypeMobile?.bottom}${multiChartWrapperBorderTypeUnits?.Mobile} ${multiChartWrapperBorderTypeMobile?.left}${multiChartWrapperBorderTypeUnits?.Mobile}`;

	// Toggle Button Padding
	const toggleBtnPaddingDesktopWidth = `${toggleBtnPaddingDesktop?.top}px ${toggleBtnPaddingDesktop?.right}px ${toggleBtnPaddingDesktop?.bottom}px ${toggleBtnPaddingDesktop?.left}px`;
	const toggleBtnPaddingTabletWidth = `${toggleBtnPaddingTablet?.top}px ${toggleBtnPaddingTablet?.right}px ${toggleBtnPaddingTablet?.bottom}px ${toggleBtnPaddingTablet?.left}px`;
	const toggleBtnPaddingMobileWidth = `${toggleBtnPaddingMobile?.top}px ${toggleBtnPaddingMobile?.right}px ${toggleBtnPaddingMobile?.bottom}px ${toggleBtnPaddingMobile?.left}px`;

	// Toggle Button Border Radius
	const toggleBtnBorderRadiusDesktopWidth = `${toggleBtnBorderRadiusDesktop?.top}px ${toggleBtnBorderRadiusDesktop?.right}px ${toggleBtnBorderRadiusDesktop?.bottom}px ${toggleBtnBorderRadiusDesktop?.left}px`;
	const toggleBtnBorderRadiusTabletWidth = `${toggleBtnBorderRadiusTablet?.top}px ${toggleBtnBorderRadiusTablet?.right}px ${toggleBtnBorderRadiusTablet?.bottom}px ${toggleBtnBorderRadiusTablet?.left}px`;
	const toggleBtnBorderRadiusMobileWidth = `${toggleBtnBorderRadiusMobile?.top}px ${toggleBtnBorderRadiusMobile?.right}px ${toggleBtnBorderRadiusMobile?.bottom}px ${toggleBtnBorderRadiusMobile?.left}px`;

	const blockStyle = `
		.fb-elegant-chart-block.${blockID} {
			${multiChartPositionType === "default" ? `position: relative;` : ""}
			${
				multiChartPositionType !== "default" &&
				multiChartPositionType !== "relative"
					? `width: 100%;`
					: ""
			}
			${
				multiChartPositionType !== "default"
					? `position: ${multiChartPositionType};`
					: ""
			}
			${
				multiChartPositionType !== "default" &&
				multiChartPositionType !== "relative" &&
				multiChartHZOrientationType === "left" &&
				multiChartHZLeftOffset?.Desktop
					? `left: ${multiChartHZLeftOffset?.Desktop}${multiChartHZLeftOffsetUnits?.Desktop};`
					: ""
			}
			${
				multiChartPositionType !== "default" &&
				multiChartPositionType !== "relative" &&
				multiChartHZOrientationType === "right" &&
				multiChartHZRightOffset?.Desktop
					? `right: ${multiChartHZRightOffset?.Desktop}${multiChartHZRightOffsetUnits?.Desktop};`
					: ""
			}
			${
				multiChartPositionType !== "default" &&
				multiChartPositionType !== "relative" &&
				multiChartVROrientationType === "top" &&
				multiChartVRTopOffset?.Desktop
					? `top: ${multiChartVRTopOffset?.Desktop}${multiChartVRTopOffsetUnits?.Desktop};`
					: ""
			}
			${
				multiChartPositionType !== "default" &&
				multiChartPositionType !== "relative" &&
				multiChartVROrientationType === "bottom" &&
				multiChartVRBottomOffset?.Desktop
					? `bottom: ${multiChartVRBottomOffset?.Desktop}${multiChartVRBottomOffsetUnits?.Desktop};`
					: ""
			}
			${
				multiChartGlobalZIndex?.Desktop
					? `z-index: ${multiChartGlobalZIndex?.Desktop};`
					: ""
			}
			${multiChartOverflow !== "default" ? `overflow: ${multiChartOverflow};` : ""}

			${multiChartWrapperBorder ? `border-style: ${multiChartWrapperBorder};` : ""}
			${
				multiChartWrapperBorderColorSwitcher === "normal" && multiChartWrapperBorderColor
					? `border-color: ${multiChartWrapperBorderColor};` : ""
			}
			${
				multiChartWrapperBorderTypeDesktopWidth &&
				multiChartWrapperBorderTypeDesktop?.top
					? `border-width: ${multiChartWrapperBorderTypeDesktopWidth};`
					: ""
			}
			${
				multiChartWrapperBorderRadiusDesktopWidth &&
				multiChartWrapperBorderRadiusDesktop?.top
					? `border-radius: ${multiChartWrapperBorderRadiusDesktopWidth};`
					: ""
			}
			${
				multiChartPaddingDesktopWidth && multiChartPaddingDesktop?.top
					? `padding: ${multiChartPaddingDesktopWidth};`
					: ""
			}
			${
				multiChartMarginDesktopWidth && multiChartMarginDesktop?.top
					? `margin: ${multiChartMarginDesktopWidth};`
					: ""
			}

			${
				multiChartBackgroundType === "gradient"
					? multiChartCustomGradientSwitcher &&
					  multiChartCustomGradientInputValue
						? `background: ${multiChartCustomGradientInputValue};`
						: multiChartGradientColor
						? `background: ${multiChartGradientColor};`
						: `background: ${multiChartClassicColor};`
					: multiChartBackgroundImageUrl
					? `
						background-image: url(${multiChartBackgroundImageUrl});
						background-position: ${multiChartBackgroundImagePosition};
						background-attachment: ${multiChartBackgroundImageAttachment};
						background-repeat: ${multiChartBackgroundImageRepeat};
						background-size: ${multiChartBackgroundImageSize};
					`
					: multiChartClassicColor
					? `background-color: ${multiChartClassicColor};`
					: ""
			}
		}

		.fb-elegant-chart-block.${blockID}:hover {
			${
				multiChartWrapperBorderColorSwitcher === "hover" && multiChartWrapperBorderHoverColor
					? `border-color: ${multiChartWrapperBorderHoverColor};`
					: ""
			}
			${
				multiChartHoverBackgroundType === "gradient"
					? multiChartHoverCustomGradientSwitcher &&
					  multiChartHoverCustomGradientInputValue
						? `background: ${multiChartHoverCustomGradientInputValue};`
						: multiChartHoverGradientColor
						? `background: ${multiChartHoverGradientColor};`
						: `background: ${multiChartHoverClassicColor};`
					: multiChartHoverBackgroundImageUrl
					? `background-image: url(${multiChartHoverBackgroundImageUrl});
					   background-position: ${multiChartHoverBackgroundImagePosition};
					   background-attachment: ${multiChartHoverBackgroundImageAttachment};
					   background-repeat: ${multiChartHoverBackgroundImageRepeat};
					   background-size: ${multiChartHoverBackgroundImageSize};`
					: multiChartHoverClassicColor
					? `background-color: ${multiChartHoverClassicColor};`
					: ""
			}
		}

		.fb-elegant-chart-block.${blockID} .fb-chart-card {
			${
				canvasWidth?.Desktop
					? `width: ${canvasWidth.Desktop}${canvasWidthUnits?.Desktop};`
					: ""
			}
			${
				canvasBorderRadiusDesktopWidth && canvasBorderRadiusDesktop?.top
					? `border-radius: ${canvasBorderRadiusDesktopWidth};`
					: ""
			}
            ${canvasNormalBackgroundType === "gradient"
                ? `background: ${canvasNormalCustomGradientSwitcher && canvasNormalCustomGradientInputValue ? canvasNormalCustomGradientInputValue : canvasNormalGradientColor || ""};`
                : `background-color: ${canvasNormalColor || ""};`
            }
			${
				canvasPaddingDesktopWidth && canvasPaddingDesktop?.top
					? `padding: ${canvasPaddingDesktopWidth};`
					: ""
			}
			${
				canvasMarginDesktopWidth && canvasMarginDesktop?.top
					? `margin: ${canvasMarginDesktopWidth};`
					: ""
			}
		}

		.fb-elegant-chart-block.${blockID} .fb-chart-card:hover {
            ${canvasHoverBackgroundType === "gradient"
                ? `background: ${canvasHoverCustomGradientSwitcher && canvasHoverCustomGradientInputValue ? canvasHoverCustomGradientInputValue : canvasHoverGradientColor || ""};`
                : `background-color: ${canvasHoverColor || ""};`
            }
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-header {
			${
				chartHeaderPaddingDesktopWidth && chartHeaderPaddingDesktop?.top
					? `padding: ${chartHeaderPaddingDesktopWidth};`
					: ""
			}
            ${
                footerTitleFontFamily && footerTitleFontFamily !== "Default"
                    ? `font-family: ${footerTitleFontFamily};`
                    : ""
            }
            ${
                footerTitleFontSize?.Desktop && footerTitleFontSizeUnits
                    ? `font-size: ${footerTitleFontSize.Desktop}${footerTitleFontSizeUnits};`
                    : ""
            }
            ${footerTitleFontWeight ? `font-weight: ${footerTitleFontWeight};` : ""}
            ${footerTitleFontStyle ? `font-style: ${footerTitleFontStyle};` : ""}
            ${footerTitleLineHeight?.Desktop ? `line-height: ${footerTitleLineHeight.Desktop}${footerTitleLineHeightUnits || 'px'};` : ""}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-label {
			${
				chartTitleColor ? `color: ${chartTitleColor};` : ""
			} /* Assuming chartTitleColor is a direct attribute */
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-card:hover .fb-chart-label {
			${chartTitleHoverColor ? `color: ${chartTitleHoverColor};` : ""}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-filter {
			${toggleBtnColor ? `color: ${toggleBtnColor};` : ""}
			${toggleBtnBgColor ? `background-color: ${toggleBtnBgColor};` : ""}
			${
				toggleBtnPaddingDesktopWidth && toggleBtnPaddingDesktop?.top
					? `padding: ${toggleBtnPaddingDesktopWidth};`
					: ""
			}
			${
				toggleBtnBorderRadiusDesktopWidth && toggleBtnBorderRadiusDesktop?.top
					? `border-radius: ${toggleBtnBorderRadiusDesktopWidth};`
					: ""
			}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-filter:hover {
			${toggleBtnHoverColor ? `color: ${toggleBtnHoverColor};` : ""}
			${toggleBtnHoverBgColor ? `background-color: ${toggleBtnHoverBgColor};` : ""}
		}
		.fb-elegant-chart-block.${blockID} .fb-filter-icon svg {
			${
				filterIconSize?.Desktop
					? `width: ${filterIconSize.Desktop}${
							filterIconSizeUnits?.Desktop || "px"
					  }; height: ${filterIconSize.Desktop}${
							filterIconSizeUnits?.Desktop || "px"
					  };`
					: ""
			}
			${filterIconColor ? `fill: ${filterIconColor};` : ""}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-filter:hover .fb-filter-icon svg {
			${filterIconHoverColor ? `fill: ${filterIconHoverColor};` : ""}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-card-body {
			${bodyBgNormal}
			${
				chartBodyPaddingGetDesktop && chartBodyPaddingDesktop?.top
					? `padding: ${chartBodyPaddingGetDesktop};`
					: ""
			}
			${
				chartBodyMarginGetDesktop && chartBodyMarginDesktop?.top
					? `margin: ${chartBodyMarginGetDesktop};`
					: ""
			}
			${
				chartBodyBorderRadiusGetDesktop && chartBodyBorderRadiusDesktop?.top
					? `border-radius: ${chartBodyBorderRadiusGetDesktop};`
					: ""
			}
			${
				showChartLegend && canvasHeight?.Desktop
					? `height: ${canvasHeight.Desktop}${canvasHeightUnits?.Desktop};`
					: ""
			}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-card-body:hover {
            ${chartBodyHoverBackgroundType === "gradient"
                ? `background: ${chartBodyHoverCustomGradientSwitcher && chartBodyHoverCustomGradientInputValue ? chartBodyHoverCustomGradientInputValue : chartBodyHoverGradientColor || ""};`
                : `background-color: ${chartBodyHoverColor || ""};`
            }
		}
		.fb-elegant-chart-block.${blockID} .fb-canvas-wrapper {
			${
				chartHeight?.Desktop
					? `height: ${chartHeight.Desktop}${
							chartHeightUnits?.Desktop || "px"
					  };`
					: ""
			}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-legend {
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
		}
		.fb-elegant-chart-block.${blockID} .fb-legend-item {
			${legendTextColor ? `color: ${legendTextColor};` : ""}
		}
		.fb-elegant-chart-block.${blockID} .fb-legend-dot {
			${
				legendDotSize?.Desktop
					? `width: ${legendDotSize.Desktop}${legendDotSizeUnits?.Desktop}; height: ${legendDotSize.Desktop}${legendDotSizeUnits?.Desktop};`
					: ""
			}
			${legendDotRadius?.Desktop ? `border-radius: ${legendDotRadius.Desktop}%;` : ""}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-footer {
			${
				footerPaddingDesktopWidth && footerPaddingDesktop?.top
					? `padding: ${footerPaddingDesktopWidth};`
					: ""
			}
			${
				footerMarginDesktopWidth && footerMarginDesktop?.top
					? `margin: ${footerMarginDesktopWidth};`
					: ""
			}
			${
				footerTextAlignment?.Desktop
					? `text-align: ${footerTextAlignment.Desktop};`
					: ""
			}
		}
		.fb-elegant-chart-block.${blockID} .fb-footer-title {
			${footerTitleNormalColor ? `color: ${footerTitleNormalColor};` : ""}
            ${
                footerTitleFontFamily && footerTitleFontFamily !== "Default"
                    ? `font-family: ${footerTitleFontFamily};`
                    : ""
            }
            ${
                footerTitleFontSize?.Desktop && footerTitleFontSizeUnits
                    ? `font-size: ${footerTitleFontSize.Desktop}${footerTitleFontSizeUnits};`
                    : ""
            }
            ${footerTitleFontWeight ? `font-weight: ${footerTitleFontWeight};` : ""}
            ${footerTitleFontStyle ? `font-style: ${footerTitleFontStyle};` : ""}
            ${footerTitleLineHeight?.Desktop ? `line-height: ${footerTitleLineHeight.Desktop}${footerTitleLineHeightUnits || 'px'};` : ""}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-footer:hover .fb-footer-title {
			${footerTitleHoverColor ? `color: ${footerTitleHoverColor};` : ""}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-description {
			${footerDescNormalColor ? `color: ${footerDescNormalColor};` : ""}
            ${
                footerDescFontFamily && footerDescFontFamily !== "Default"
                    ? `font-family: ${footerDescFontFamily};`
                    : ""
            }
            ${
                footerDescFontSize?.Desktop && footerDescFontSizeUnits
                    ? `font-size: ${footerDescFontSize.Desktop}${footerDescFontSizeUnits};`
                    : ""
            }
            ${footerDescFontWeight ? `font-weight: ${footerDescFontWeight};` : ""}
            ${footerDescFontStyle ? `font-style: ${footerDescFontStyle};` : ""}
            ${footerDescLineHeight?.Desktop ? `line-height: ${footerDescLineHeight.Desktop}${footerDescLineHeightUnits || 'px'};` : ""}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-footer:hover .fb-chart-description {
			${footerDescColorSwitcher === "hover" && footerDescHoverColor ? `color: ${footerDescHoverColor};` : ""}
		}
		/* Responsive Media Queries */
		@media only screen and (max-width: 1024px) {
			.fb-elegant-chart-block.${blockID} {
				${
					multiChartWrapperBorderTypeTabletWidth &&
					multiChartWrapperBorderTypeTablet?.top
						? `border-width: ${multiChartWrapperBorderTypeTabletWidth};`
						: ""
				}
				${
					multiChartWrapperBorderRadiusTabletWidth &&
					multiChartWrapperBorderRadiusTablet?.top
						? `border-radius: ${multiChartWrapperBorderRadiusTabletWidth};`
						: ""
				}
				${
					multiChartPaddingTabletWidth && multiChartPaddingTablet?.top
						? `padding: ${multiChartPaddingTabletWidth};`
						: ""
				}
				${
					multiChartMarginGetTablet && multiChartMarginTablet?.top
						? `margin: ${multiChartMarginTabletWidth};`
						: ""
				}
			}
			.fb-elegant-chart-block.${blockID} .fb-chart-card {
				${
					canvasWidth?.Tablet
						? `width: ${canvasWidth.Tablet}${canvasWidthUnits?.Tablet};`
						: ""
				}
			}
			.fb-elegant-chart-block.${blockID} .fb-chart-card { ${
				canvasBorderRadiusTabletWidth && canvasBorderRadiusTablet?.top
					? `border-radius: ${canvasBorderRadiusTabletWidth};`
					: ""
			} ${
				canvasPaddingTabletWidth && canvasPaddingTablet?.top
					? `padding: ${canvasPaddingTabletWidth};`
					: ""
			} ${
				canvasMarginTabletWidth && canvasMarginTablet?.top
					? `margin: ${canvasMarginTabletWidth};`
					: ""
			} }

			.fb-elegant-chart-block.${blockID} .fb-chart-card-body { ${
				showChartLegend && canvasHeight?.Tablet && canvasHeightUnits?.Tablet
					? `height: ${canvasHeight.Tablet}${canvasHeightUnits?.Tablet};`
					: ""
			} ${
				chartBodyPaddingTabletWidth && chartBodyPaddingTablet?.top
					? `padding: ${chartBodyPaddingTabletWidth};`
					: ""
			} ${
				chartBodyMarginTabletWidth && chartBodyMarginTablet?.top
					? `margin: ${chartBodyMarginTabletWidth};`
					: ""
			}
            ${
                footerTitleFontSize?.Tablet ? `font-size: ${footerTitleFontSize.Tablet}${footerTitleFontSizeUnits};` : ""
			} }
			.fb-elegant-chart-block.${blockID} .fb-chart-card-body { ${
				chartBodyBorderRadiusTabletWidth && chartBodyBorderRadiusTablet?.top
					? `border-radius: ${chartBodyBorderRadiusTabletWidth};`
					: ""
			} }
			.fb-elegant-chart-block.${blockID} .fb-chart-footer {
				${
					footerTextAlignment?.Tablet
						? `text-align: ${footerTextAlignment.Tablet};`
						: ""
				}
			}
			.fb-elegant-chart-block.${blockID} .fb-chart-header { 
                ${
                    chartHeaderPaddingTabletWidth && chartHeaderPaddingTablet?.top
                        ? `padding: ${chartHeaderPaddingTabletWidth};`
                        : ""
                }
                ${footerTitleFontSize?.Tablet ? `font-size: ${footerTitleFontSize.Tablet}${footerTitleFontSizeUnits};` : ""}
                ${footerTitleLineHeight?.Tablet ? `line-height: ${footerTitleLineHeight.Tablet}${footerTitleLineHeightUnits || 'px'};` : ""}
            }
			.fb-elegant-chart-block.${blockID} .fb-chart-footer { ${
				footerPaddingTabletWidth && footerPaddingTablet?.top
					? `padding: ${footerPaddingTabletWidth};`
					: ""
			} ${
				footerMarginTabletWidth && footerMarginTablet?.top
					? `margin: ${footerMarginTabletWidth};`
					: ""
			} }

			.fb-elegant-chart-block.${blockID} .fb-filter-icon svg { ${
				filterIconSize?.Tablet
					? `width: ${filterIconSize.Tablet}${
							filterIconSizeUnits?.Tablet || "px"
					  }; height: ${filterIconSize.Tablet}${
							filterIconSizeUnits?.Tablet || "px"
					  };`
					: ""
			} }

			.fb-elegant-chart-block.${blockID} .fb-chart-legend { justify-content: ${
				legendTextAlignment?.Tablet === "left"
					? "flex-start"
					: legendTextAlignment?.Tablet === "right" ? "flex-end" : "center"
			}; }

			.fb-elegant-chart-block.${blockID} .fb-legend-dot { ${
				legendDotSize?.Tablet
					? `width: ${legendDotSize.Tablet}${legendDotSizeUnits?.Tablet}; height: ${legendDotSize.Tablet}${legendDotSizeUnits?.Tablet};`
					: ""
			} }
		}

		@media only screen and (max-width: 767px) {
			.fb-elegant-chart-block.${blockID} {
				${multiChartPositionType === "default" ? `position: relative;` : ""}
				${
					multiChartPositionType !== "default" &&
					multiChartPositionType !== "relative"
						? `width: 100%;`
						: ""
				}
				${
					multiChartPositionType !== "default"
						? `position: ${multiChartPositionType};`
						: ""
				}
				${
					multiChartPositionType !== "default" &&
					multiChartPositionType !== "relative" &&
					multiChartHZOrientationType === "left" &&
					multiChartHZLeftOffset?.Mobile
						? `left: ${multiChartHZLeftOffset?.Mobile}${multiChartHZLeftOffsetUnits?.Mobile};`
						: ""
				}
				${
					multiChartPositionType !== "default" &&
					multiChartPositionType !== "relative" &&
					multiChartHZOrientationType === "right" &&
					multiChartHZRightOffset?.Mobile
						? `right: ${multiChartHZRightOffset?.Mobile}${multiChartHZRightOffsetUnits?.Mobile};`
						: ""
				}
				${
					multiChartPositionType !== "default" &&
					multiChartPositionType !== "relative" &&
					multiChartVROrientationType === "top" &&
					multiChartVRTopOffset?.Mobile
						? `top: ${multiChartVRTopOffset?.Mobile}${multiChartVRTopOffsetUnits?.Mobile};`
						: ""
				}
				${
					multiChartPositionType !== "default" &&
					multiChartPositionType !== "relative" &&
					multiChartVROrientationType === "bottom" &&
					multiChartVRBottomOffset?.Mobile
						? `bottom: ${multiChartVRBottomOffset?.Mobile}${multiChartVRBottomOffsetUnits?.Mobile};`
						: ""
				}
				${
					multiChartGlobalZIndex?.Mobile
						? `z-index: ${multiChartGlobalZIndex?.Mobile};`
						: ""
				} 
				${multiChartOverflow !== "default" ? `overflow: ${multiChartOverflow};` : ""}

				${
					multiChartWrapperBorderTypeMobileWidth &&
					multiChartWrapperBorderTypeMobile?.top
						? `border-width: ${multiChartWrapperBorderTypeMobileWidth};`
						: ""
				}
				${
					multiChartWrapperBorderRadiusMobileWidth &&
					multiChartWrapperBorderRadiusMobile?.top
						? `border-radius: ${multiChartWrapperBorderRadiusMobileWidth};`
						: ""
				}
				${
					multiChartPaddingMobileWidth && multiChartPaddingMobile?.top
						? `padding: ${multiChartPaddingMobileWidth};`
						: ""
				}
				${
					multiChartMarginMobileWidth && multiChartMarginMobile?.top
						? `margin: ${multiChartMarginMobileWidth};`
						: ""
				}
			}

			.fb-elegant-chart-block.${blockID} .fb-chart-card { ${
				canvasWidth?.Mobile && canvasWidthUnits?.Mobile
					? `width: ${canvasWidth.Mobile}${canvasWidthUnits?.Mobile};`
					: ""
			} ${
				canvasBorderRadiusMobileWidth && canvasBorderRadiusMobile?.top
					? `border-radius: ${canvasBorderRadiusMobileWidth};`
					: ""
			} ${
				canvasPaddingMobileWidth && canvasPaddingMobile?.top
					? `padding: ${canvasPaddingMobileWidth};`
					: ""
			} ${
				canvasPaddingMobileWidth && canvasPaddingMobile?.top
					? `padding: ${canvasPaddingMobileWidth};`
					: ""
			} ${
				canvasMarginMobileWidth && canvasMarginMobile?.top
					? `margin: ${canvasMarginMobileWidth};`
					: ""
			} }

			.fb-elegant-chart-block.${blockID} .fb-chart-card-body { ${
				showChartLegend && canvasHeight?.Mobile && canvasHeightUnits?.Mobile
					? `height: ${canvasHeight.Mobile}${canvasHeightUnits?.Mobile};`
					: ""
			} ${
				chartBodyPaddingMobileWidth && chartBodyPaddingMobile?.top
					? `padding: ${chartBodyPaddingMobileWidth};`
					: ""
			} ${
				chartBodyMarginMobileWidth && chartBodyMarginMobile?.top
					? `margin: ${chartBodyMarginMobileWidth};`
					: ""
			} }
			.fb-elegant-chart-block.${blockID} .fb-chart-card-body { ${
				chartBodyBorderRadiusMobileWidth && chartBodyBorderRadiusMobile?.top
					? `border-radius: ${chartBodyBorderRadiusMobileWidth};`
					: ""
			} }
			.fb-elegant-chart-block.${blockID} .fb-canvas-wrapper {
				${
					chartHeight?.Mobile
						? `height: ${chartHeight.Mobile}${
								chartHeightUnits?.Mobile || "px"
						  };`
						: ""
				}
			}
			.fb-elegant-chart-block.${blockID} .fb-chart-footer {
				${
					footerTextAlignment?.Mobile
						? `text-align: ${footerTextAlignment.Mobile};`
						: ""
				}
			}
			.fb-elegant-chart-block.${blockID} .fb-chart-header { ${
				chartHeaderPaddingGetMobile && chartHeaderPaddingMobile?.top
					? `padding: ${chartHeaderPaddingGetMobile};`
					: ""
			} }
			.fb-elegant-chart-block.${blockID} .fb-chart-footer { ${
				footerPaddingGetMobile && footerPaddingMobile?.top
					? `padding: ${footerPaddingGetMobile};`
					: ""
			} ${
				footerMarginGetMobile && footerMarginMobile?.top
					? `margin: ${footerMarginGetMobile};`
					: ""
			} }

			.fb-elegant-chart-block.${blockID} .fb-filter-icon svg { ${
				filterIconSize?.Mobile
					? `width: ${filterIconSize.Mobile}${
							filterIconSizeUnits?.Mobile || "px"
					  }; height: ${filterIconSize.Mobile}${
							filterIconSizeUnits?.Mobile || "px"
					  };`
					: ""
			} }

			.fb-elegant-chart-block.${blockID} .fb-chart-legend { justify-content: ${
				legendTextAlignment?.Mobile === "left"
					? "flex-start"
					: legendTextAlignment?.Mobile === "right" ? "flex-end" : "center"
			}; }

			.fb-elegant-chart-block.${blockID} .fb-legend-dot { ${
				legendDotSize?.Mobile
					? `width: ${legendDotSize.Mobile}${legendDotSizeUnits?.Mobile}; height: ${legendDotSize.Mobile}${legendDotSizeUnits?.Mobile};`
					: ""
			} }
		}
	`;

	const customCss = getCustomCss(multiChartCustomCSS, `.${blockID}`);
	return `${blockStyle} ${customCss}`.replace(/\s+/g, " ").trim();
};

export default multiChartStyle;
