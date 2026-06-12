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
	} = attributes;

	// Destructure responsive attributes that might not be directly in the main list
	const {
		canvasPaddingTablet,
		canvasPaddingMobile,
		canvasMarginTablet,
		canvasMarginMobile,
		canvasBorderRadiusTablet,
		canvasBorderRadiusMobile,
		chartBodyPaddingTablet,
		chartBodyPaddingMobile,
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
	} = attributes; // Destructure for tablet/mobile attributes that might not be directly in the main list

	/** Helper: shorthand spacing */
	// const spacing4 = (obj, unit = "px") =>
	// 	obj
	// 		? `${obj.top ?? 0}${unit} ${obj.right ?? 0}${unit} ${
	// 				obj.bottom ?? 0
	// 		  }${unit} ${obj.left ?? 0}${unit}`
	// 		: "";

	// Canvas Padding
	const canvasPaddingGetDesktop = `${canvasPaddingDesktop?.top}${canvasPaddingUnits?.Desktop} ${canvasPaddingDesktop?.right}${canvasPaddingUnits?.Desktop} ${canvasPaddingDesktop?.bottom}${canvasPaddingUnits?.Desktop} ${canvasPaddingDesktop?.left}${canvasPaddingUnits?.Desktop}`;
	const canvasPaddingGetTablet = canvasPaddingTablet
		? `${canvasPaddingTablet?.top}${canvasPaddingUnits?.Tablet} ${canvasPaddingTablet?.right}${canvasPaddingUnits?.Tablet} ${canvasPaddingTablet?.bottom}${canvasPaddingUnits?.Tablet} ${canvasPaddingTablet?.left}${canvasPaddingUnits?.Tablet}`
		: "";
	const canvasPaddingGetMobile = canvasPaddingMobile
		? `${canvasPaddingMobile?.top}${canvasPaddingUnits?.Mobile} ${canvasPaddingMobile?.right}${canvasPaddingUnits?.Mobile} ${canvasPaddingMobile?.bottom}${canvasPaddingUnits?.Mobile} ${canvasPaddingMobile?.left}${canvasPaddingUnits?.Mobile}`
		: "";

	// Canvas Margin
	const canvasMarginGetDesktop = `${canvasMarginDesktop?.top}${canvasMarginUnits?.Desktop} ${canvasMarginDesktop?.right}${canvasMarginUnits?.Desktop} ${canvasMarginDesktop?.bottom}${canvasMarginUnits?.Desktop} ${canvasMarginDesktop?.left}${canvasMarginUnits?.Desktop}`;
	const canvasMarginGetTablet = canvasMarginTablet
		? `${canvasMarginTablet?.top}${canvasMarginUnits?.Tablet} ${canvasMarginTablet?.right}${canvasMarginUnits?.Tablet} ${canvasMarginTablet?.bottom}${canvasMarginUnits?.Tablet} ${canvasMarginTablet?.left}${canvasMarginUnits?.Tablet}`
		: "";
	const canvasMarginGetMobile = canvasMarginMobile
		? `${canvasMarginMobile?.top}${canvasMarginUnits?.Mobile} ${canvasMarginMobile?.right}${canvasMarginUnits?.Mobile} ${canvasMarginMobile?.bottom}${canvasMarginUnits?.Mobile} ${canvasMarginMobile?.left}${canvasMarginUnits?.Mobile}`
		: "";

	// Canvas Border Radius
	const canvasBorderRadiusGetDesktop = `${canvasBorderRadiusDesktop?.top}${canvasBorderRadiusUnits?.Desktop} ${canvasBorderRadiusDesktop?.right}${canvasBorderRadiusUnits?.Desktop} ${canvasBorderRadiusDesktop?.bottom}${canvasBorderRadiusUnits?.Desktop} ${canvasBorderRadiusDesktop?.left}${canvasBorderRadiusUnits?.Desktop}`;
	const canvasBorderRadiusGetTablet = canvasBorderRadiusTablet
		? `${canvasBorderRadiusTablet?.top}${canvasBorderRadiusUnits?.Tablet} ${canvasBorderRadiusTablet?.right}${canvasBorderRadiusUnits?.Tablet} ${canvasBorderRadiusTablet?.bottom}${canvasBorderRadiusUnits?.Tablet} ${canvasBorderRadiusTablet?.left}${canvasBorderRadiusUnits?.Tablet}`
		: "";
	const canvasBorderRadiusGetMobile = canvasBorderRadiusMobile
		? `${canvasBorderRadiusMobile?.top}${canvasBorderRadiusUnits?.Mobile} ${canvasBorderRadiusMobile?.right}${canvasBorderRadiusUnits?.Mobile} ${canvasBorderRadiusMobile?.bottom}${canvasBorderRadiusUnits?.Mobile} ${canvasBorderRadiusMobile?.left}${canvasBorderRadiusUnits?.Mobile}`
		: "";

	// Chart Body Padding (only Desktop attribute exists)
	const chartBodyPaddingGetDesktop = chartBodyPaddingDesktop
		? `${chartBodyPaddingDesktop?.top}px ${chartBodyPaddingDesktop?.right}px ${chartBodyPaddingDesktop?.bottom}px ${chartBodyPaddingDesktop?.left}px`
		: "";
	const chartBodyPaddingGetTablet = chartBodyPaddingTablet
		? `${chartBodyPaddingTablet?.top}px ${chartBodyPaddingTablet?.right}px ${chartBodyPaddingTablet?.bottom}px ${chartBodyPaddingTablet?.left}px`
		: "";
	const chartBodyPaddingGetMobile = chartBodyPaddingMobile
		? `${chartBodyPaddingMobile?.top}px ${chartBodyPaddingMobile?.right}px ${chartBodyPaddingMobile?.bottom}px ${chartBodyPaddingMobile?.left}px`
		: "";

	// Chart Body Border Radius
	const chartBodyBorderRadiusGetDesktop = `${chartBodyBorderRadiusDesktop?.top}${chartBodyBorderRadiusUnits?.Desktop} ${chartBodyBorderRadiusDesktop?.right}${chartBodyBorderRadiusUnits?.Desktop} ${chartBodyBorderRadiusDesktop?.bottom}${chartBodyBorderRadiusUnits?.Desktop} ${chartBodyBorderRadiusDesktop?.left}${chartBodyBorderRadiusUnits?.Desktop}`;
	const chartBodyBorderRadiusGetTablet = chartBodyBorderRadiusTablet
		? `${chartBodyBorderRadiusTablet?.top}${chartBodyBorderRadiusUnits?.Tablet} ${chartBodyBorderRadiusTablet?.right}${chartBodyBorderRadiusUnits?.Tablet} ${chartBodyBorderRadiusTablet?.bottom}${chartBodyBorderRadiusUnits?.Tablet} ${chartBodyBorderRadiusTablet?.left}${chartBodyBorderRadiusUnits?.Tablet}`
		: "";
	const chartBodyBorderRadiusGetMobile = chartBodyBorderRadiusMobile
		? `${chartBodyBorderRadiusMobile?.top}${chartBodyBorderRadiusUnits?.Mobile} ${chartBodyBorderRadiusMobile?.right}${chartBodyBorderRadiusUnits?.Mobile} ${chartBodyBorderRadiusMobile?.bottom}${chartBodyBorderRadiusUnits?.Mobile} ${chartBodyBorderRadiusMobile?.left}${chartBodyBorderRadiusUnits?.Mobile}`
		: "";

	// Chart Header Padding (only Desktop attribute exists)
	const chartHeaderPaddingGetDesktop = chartHeaderPaddingDesktop
		? `${chartHeaderPaddingDesktop?.top}px ${chartHeaderPaddingDesktop?.right}px ${chartHeaderPaddingDesktop?.bottom}px ${chartHeaderPaddingDesktop?.left}px`
		: "";
	const chartHeaderPaddingGetTablet = chartHeaderPaddingTablet
		? `${chartHeaderPaddingTablet?.top}px ${chartHeaderPaddingTablet?.right}px ${chartHeaderPaddingTablet?.bottom}px ${chartHeaderPaddingTablet?.left}px`
		: "";
	const chartHeaderPaddingGetMobile = chartHeaderPaddingMobile
		? `${chartHeaderPaddingMobile?.top}px ${chartHeaderPaddingMobile?.right}px ${chartHeaderPaddingMobile?.bottom}px ${chartHeaderPaddingMobile?.left}px`
		: "";

	// Footer Padding
	const footerPaddingGetDesktop = `${footerPaddingDesktop?.top}${footerPaddingUnits?.Desktop} ${footerPaddingDesktop?.right}${footerPaddingUnits?.Desktop} ${footerPaddingDesktop?.bottom}${footerPaddingUnits?.Desktop} ${footerPaddingDesktop?.left}${footerPaddingUnits?.Desktop}`;
	const footerPaddingGetTablet = footerPaddingTablet
		? `${footerPaddingTablet?.top}${footerPaddingUnits?.Tablet} ${footerPaddingTablet?.right}${footerPaddingUnits?.Tablet} ${footerPaddingTablet?.bottom}${footerPaddingUnits?.Tablet} ${footerPaddingTablet?.left}${footerPaddingUnits?.Tablet}`
		: "";
	const footerPaddingGetMobile = footerPaddingMobile
		? `${footerPaddingMobile?.top}${footerPaddingUnits?.Mobile} ${footerPaddingMobile?.right}${footerPaddingUnits?.Mobile} ${footerPaddingMobile?.bottom}${footerPaddingUnits?.Mobile} ${footerPaddingMobile?.left}${footerPaddingUnits?.Mobile}`
		: "";

	// Footer Margin
	const footerMarginGetDesktop = `${footerMarginDesktop?.top}${footerMarginUnits?.Desktop} ${footerMarginDesktop?.right}${footerMarginUnits?.Desktop} ${footerMarginDesktop?.bottom}${footerMarginUnits?.Desktop} ${footerMarginDesktop?.left}${footerMarginUnits?.Desktop}`;
	const footerMarginGetTablet = footerMarginTablet
		? `${footerMarginTablet?.top}${footerMarginUnits?.Tablet} ${footerMarginTablet?.right}${footerMarginUnits?.Tablet} ${footerMarginTablet?.bottom}${footerMarginUnits?.Tablet} ${footerMarginTablet?.left}${footerMarginUnits?.Tablet}`
		: "";
	const footerMarginGetMobile = footerMarginMobile
		? `${footerMarginMobile?.top}${footerMarginUnits?.Mobile} ${footerMarginMobile?.right}${footerMarginUnits?.Mobile} ${footerMarginMobile?.bottom}${footerMarginUnits?.Mobile} ${footerMarginMobile?.left}${footerMarginUnits?.Mobile}`
		: "";

	// MultiChart Wrapper Padding
	const multiChartPaddingGetDesktop = `${multiChartPaddingDesktop?.top}${multiChartPaddingUnits?.Desktop} ${multiChartPaddingDesktop?.right}${multiChartPaddingUnits?.Desktop} ${multiChartPaddingDesktop?.bottom}${multiChartPaddingUnits?.Desktop} ${multiChartPaddingDesktop?.left}${multiChartPaddingUnits?.Desktop}`;
	const multiChartPaddingGetTablet = multiChartPaddingTablet
		? `${multiChartPaddingTablet?.top}${multiChartPaddingUnits?.Tablet} ${multiChartPaddingTablet?.right}${multiChartPaddingUnits?.Tablet} ${multiChartPaddingTablet?.bottom}${multiChartPaddingUnits?.Tablet} ${multiChartPaddingTablet?.left}${multiChartPaddingUnits?.Tablet}`
		: "";
	const multiChartPaddingGetMobile = multiChartPaddingMobile
		? `${multiChartPaddingMobile?.top}${multiChartPaddingUnits?.Mobile} ${multiChartPaddingMobile?.right}${multiChartPaddingUnits?.Mobile} ${multiChartPaddingMobile?.bottom}${multiChartPaddingUnits?.Mobile} ${multiChartPaddingMobile?.left}${multiChartPaddingUnits?.Mobile}`
		: "";

	// MultiChart Wrapper Margin
	const multiChartMarginGetDesktop = `${multiChartMarginDesktop?.top}${multiChartMarginUnits?.Desktop} ${multiChartMarginDesktop?.right}${multiChartMarginUnits?.Desktop} ${multiChartMarginDesktop?.bottom}${multiChartMarginUnits?.Desktop} ${multiChartMarginDesktop?.left}${multiChartMarginUnits?.Desktop}`;
	const multiChartMarginGetTablet = multiChartMarginTablet
		? `${multiChartMarginTablet?.top}${multiChartMarginUnits?.Tablet} ${multiChartMarginTablet?.right}${multiChartMarginUnits?.Tablet} ${multiChartMarginTablet?.bottom}${multiChartMarginUnits?.Tablet} ${multiChartMarginTablet?.left}${multiChartMarginUnits?.Tablet}`
		: "";
	const multiChartMarginGetMobile = multiChartMarginMobile
		? `${multiChartMarginMobile?.top}${multiChartMarginUnits?.Mobile} ${multiChartMarginMobile?.right}${multiChartMarginUnits?.Mobile} ${multiChartMarginMobile?.bottom}${multiChartMarginUnits?.Mobile} ${multiChartMarginMobile?.left}${multiChartMarginUnits?.Mobile}`
		: "";

	// MultiChart Wrapper Border Radius
	const multiChartWrapperBorderRadiusGetDesktop = `${multiChartWrapperBorderRadiusDesktop?.top}${multiChartWrapperBorderRadiusUnits?.Desktop} ${multiChartWrapperBorderRadiusDesktop?.right}${multiChartWrapperBorderRadiusUnits?.Desktop} ${multiChartWrapperBorderRadiusDesktop?.bottom}${multiChartWrapperBorderRadiusUnits?.Desktop} ${multiChartWrapperBorderRadiusDesktop?.left}${multiChartWrapperBorderRadiusUnits?.Desktop}`;
	const multiChartWrapperBorderRadiusGetTablet =
		multiChartWrapperBorderRadiusTablet
			? `${multiChartWrapperBorderRadiusTablet?.top}${multiChartWrapperBorderRadiusUnits?.Tablet} ${multiChartWrapperBorderRadiusTablet?.right}${multiChartWrapperBorderRadiusUnits?.Tablet} ${multiChartWrapperBorderRadiusTablet?.bottom}${multiChartWrapperBorderRadiusUnits?.Tablet} ${multiChartWrapperBorderRadiusTablet?.left}${multiChartWrapperBorderRadiusUnits?.Tablet}`
			: "";
	const multiChartWrapperBorderRadiusGetMobile =
		multiChartWrapperBorderRadiusMobile
			? `${multiChartWrapperBorderRadiusMobile?.top}${multiChartWrapperBorderRadiusUnits?.Mobile} ${multiChartWrapperBorderRadiusMobile?.right}${multiChartWrapperBorderRadiusUnits?.Mobile} ${multiChartWrapperBorderRadiusMobile?.bottom}${multiChartWrapperBorderRadiusUnits?.Mobile} ${multiChartWrapperBorderRadiusMobile?.left}${multiChartWrapperBorderRadiusUnits?.Mobile}`
			: "";

	// MultiChart Wrapper Border Type (Width)
	const multiChartWrapperBorderTypeGetDesktop = `${multiChartWrapperBorderTypeDesktop?.top}${multiChartWrapperBorderTypeUnits?.Desktop} ${multiChartWrapperBorderTypeDesktop?.right}${multiChartWrapperBorderTypeUnits?.Desktop} ${multiChartWrapperBorderTypeDesktop?.bottom}${multiChartWrapperBorderTypeUnits?.Desktop} ${multiChartWrapperBorderTypeDesktop?.left}${multiChartWrapperBorderTypeUnits?.Desktop}`;
	const multiChartWrapperBorderTypeGetTablet = multiChartWrapperBorderTypeTablet
		? `${multiChartWrapperBorderTypeTablet?.top}${multiChartWrapperBorderTypeUnits?.Tablet} ${multiChartWrapperBorderTypeTablet?.right}${multiChartWrapperBorderTypeUnits?.Tablet} ${multiChartWrapperBorderTypeTablet?.bottom}${multiChartWrapperBorderTypeUnits?.Tablet} ${multiChartWrapperBorderTypeTablet?.left}${multiChartWrapperBorderTypeUnits?.Tablet}`
		: "";
	const multiChartWrapperBorderTypeGetMobile = multiChartWrapperBorderTypeMobile
		? `${multiChartWrapperBorderTypeMobile?.top}${multiChartWrapperBorderTypeUnits?.Mobile} ${multiChartWrapperBorderTypeMobile?.right}${multiChartWrapperBorderTypeUnits?.Mobile} ${multiChartWrapperBorderTypeMobile?.bottom}${multiChartWrapperBorderTypeUnits?.Mobile} ${multiChartWrapperBorderTypeMobile?.left}${multiChartWrapperBorderTypeUnits?.Mobile}`
		: "";

	// Toggle Button Padding (only Desktop attribute exists)
	const toggleBtnPaddingGetDesktop = toggleBtnPaddingDesktop
		? `${toggleBtnPaddingDesktop?.top}px ${toggleBtnPaddingDesktop?.right}px ${toggleBtnPaddingDesktop?.bottom}px ${toggleBtnPaddingDesktop?.left}px`
		: "";
	const toggleBtnPaddingGetTablet = toggleBtnPaddingTablet
		? `${toggleBtnPaddingTablet?.top}px ${toggleBtnPaddingTablet?.right}px ${toggleBtnPaddingTablet?.bottom}px ${toggleBtnPaddingTablet?.left}px`
		: "";
	const toggleBtnPaddingGetMobile = toggleBtnPaddingMobile
		? `${toggleBtnPaddingMobile?.top}px ${toggleBtnPaddingMobile?.right}px ${toggleBtnPaddingMobile?.bottom}px ${toggleBtnPaddingMobile?.left}px`
		: "";

	// Toggle Button Border Radius
	const toggleBtnBorderRadiusGetDesktop = `${toggleBtnBorderRadiusDesktop?.top}px ${toggleBtnBorderRadiusDesktop?.right}px ${toggleBtnBorderRadiusDesktop?.bottom}px ${toggleBtnBorderRadiusDesktop?.left}px`;
	const toggleBtnBorderRadiusGetTablet = toggleBtnBorderRadiusTablet
		? `${toggleBtnBorderRadiusTablet?.top}px ${toggleBtnBorderRadiusTablet?.right}px ${toggleBtnBorderRadiusTablet?.bottom}px ${toggleBtnBorderRadiusTablet?.left}px`
		: "";
	const toggleBtnBorderRadiusGetMobile = toggleBtnBorderRadiusMobile
		? `${toggleBtnBorderRadiusMobile?.top}px ${toggleBtnBorderRadiusMobile?.right}px ${toggleBtnBorderRadiusMobile?.bottom}px ${toggleBtnBorderRadiusMobile?.left}px`
		: "";

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
				multiChartWrapperBorderColor
					? `border-color: ${multiChartWrapperBorderColor};`
					: ""
			}
			${
				multiChartWrapperBorderTypeGetDesktop &&
				multiChartWrapperBorderTypeDesktop?.top
					? `border-width: ${multiChartWrapperBorderTypeGetDesktop};`
					: ""
			}
			${
				multiChartWrapperBorderRadiusGetDesktop &&
				multiChartWrapperBorderRadiusDesktop?.top
					? `border-radius: ${multiChartWrapperBorderRadiusGetDesktop};`
					: ""
			}
			${
				multiChartPaddingGetDesktop && multiChartPaddingDesktop?.top
					? `padding: ${multiChartPaddingGetDesktop};`
					: ""
			}
			${
				multiChartMarginGetDesktop && multiChartMarginDesktop?.top
					? `margin: ${multiChartMarginGetDesktop};`
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
			transition: all .3s ease-in-out;
		}

		.fb-elegant-chart-block.${blockID}:hover {
			${
				multiChartWrapperBorderHoverColor
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
				canvasBorderRadiusGetDesktop && canvasBorderRadiusDesktop?.top
					? `border-radius: ${canvasBorderRadiusGetDesktop};`
					: ""
			}
			${canvasBgNormal}
			${
				canvasPaddingGetDesktop && canvasPaddingDesktop?.top
					? `padding: ${canvasPaddingGetDesktop};`
					: ""
			}
			${
				canvasMarginGetDesktop && canvasMarginDesktop?.top
					? `margin: ${canvasMarginGetDesktop};`
					: ""
			}
			transition: all 0.3s ease;
		}


		.fb-elegant-chart-block.${blockID} .fb-chart-card:hover {
			${canvasBgHover}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-header {
			${
				chartHeaderPaddingGetDesktop && chartHeaderPaddingDesktop?.top
					? `padding: ${chartHeaderPaddingGetDesktop};`
					: ""
			}
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
				toggleBtnPaddingGetDesktop && toggleBtnPaddingDesktop?.top
					? `padding: ${toggleBtnPaddingGetDesktop};`
					: ""
			}
			${
				toggleBtnBorderRadiusGetDesktop && toggleBtnBorderRadiusDesktop?.top
					? `border-radius: ${toggleBtnBorderRadiusGetDesktop};`
					: ""
			}
			display: flex;
			align-items: center;
			gap: 8px;
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
					: "width: 14px; height: 14px;"
			}
			${filterIconColor ? `fill: ${filterIconColor};` : "fill: currentColor;"}
			transition: all 0.3s ease;
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
				chartBodyBorderRadiusGetDesktop && chartBodyBorderRadiusDesktop?.top
					? `border-radius: ${chartBodyBorderRadiusGetDesktop};`
					: ""
			}
			${
				canvasHeight?.Desktop
					? `height: ${canvasHeight.Desktop}${canvasHeightUnits?.Desktop};`
					: ""
			}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-card-body:hover {
			${bodyBgHover}
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
			margin-top: 20px;
		}
		.fb-elegant-chart-block.${blockID} .fb-legend-item {
			${legendTextColor ? `color: ${legendTextColor};` : ""}
		}
		.fb-elegant-chart-block.${blockID} .fb-legend-dot {
			${
				legendDotSize?.Desktop
					? `width: ${legendDotSize.Desktop}px; height: ${legendDotSize.Desktop}px;`
					: ""
			}
			${legendDotRadius?.Desktop ? `border-radius: ${legendDotRadius.Desktop}%;` : ""}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-footer {
			${
				footerPaddingGetDesktop && footerPaddingDesktop?.top
					? `padding: ${footerPaddingGetDesktop};`
					: ""
			}
			${
				footerMarginGetDesktop && footerMarginDesktop?.top
					? `margin: ${footerMarginGetDesktop};`
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
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-footer:hover .fb-footer-title {
			${footerTitleHoverColor ? `color: ${footerTitleHoverColor};` : ""}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-description {
			${footerDescNormalColor ? `color: ${footerDescNormalColor};` : ""}
		}
		.fb-elegant-chart-block.${blockID} .fb-chart-footer:hover .fb-chart-description {
			${footerDescHoverColor ? `color: ${footerDescHoverColor};` : ""}
		}
		/* Responsive Media Queries */
		@media only screen and (max-width: 1024px) {
			.fb-elegant-chart-block.${blockID} {
				${
					multiChartWrapperBorderTypeGetTablet &&
					multiChartWrapperBorderTypeTablet?.top
						? `border-width: ${multiChartWrapperBorderTypeGetTablet};`
						: ""
				}
				${
					multiChartWrapperBorderRadiusGetTablet &&
					multiChartWrapperBorderRadiusTablet?.top
						? `border-radius: ${multiChartWrapperBorderRadiusGetTablet};`
						: ""
				}
				${
					multiChartPaddingGetTablet && multiChartPaddingTablet?.top
						? `padding: ${multiChartPaddingGetTablet};`
						: ""
				}
				${
					multiChartMarginGetTablet && multiChartMarginTablet?.top
						? `margin: ${multiChartMarginGetTablet};`
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
				canvasBorderRadiusGetTablet && canvasBorderRadiusTablet?.top
					? `border-radius: ${canvasBorderRadiusGetTablet};`
					: ""
			} ${
				canvasPaddingGetTablet && canvasPaddingTablet?.top
					? `padding: ${canvasPaddingGetTablet};`
					: ""
			} ${
				canvasMarginGetTablet && canvasMarginTablet?.top
					? `margin: ${canvasMarginGetTablet};`
					: ""
			} }

			.fb-elegant-chart-block.${blockID} .fb-chart-card-body { ${
				canvasHeight?.Tablet
					? `height: ${canvasHeight.Tablet}${canvasHeightUnits?.Tablet};`
					: ""
			} ${
				chartBodyPaddingGetTablet && chartBodyPaddingTablet?.top
					? `padding: ${chartBodyPaddingGetTablet};`
					: ""
			} }
			.fb-elegant-chart-block.${blockID} .fb-chart-card-body { ${
				chartBodyBorderRadiusGetTablet && chartBodyBorderRadiusTablet?.top
					? `border-radius: ${chartBodyBorderRadiusGetTablet};`
					: ""
			} }
			.fb-elegant-chart-block.${blockID} .fb-chart-footer {
				${
					footerTextAlignment?.Tablet
						? `text-align: ${footerTextAlignment.Tablet};`
						: ""
				}
			}
			.fb-elegant-chart-block.${blockID} .fb-chart-header { ${
				chartHeaderPaddingGetTablet && chartHeaderPaddingTablet?.top
					? `padding: ${chartHeaderPaddingGetTablet};`
					: ""
			} }
			.fb-elegant-chart-block.${blockID} .fb-chart-footer { ${
				footerPaddingGetTablet && footerPaddingTablet?.top
					? `padding: ${footerPaddingGetTablet};`
					: ""
			} ${
				footerMarginGetTablet && footerMarginTablet?.top
					? `margin: ${footerMarginGetTablet};`
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
					: legendTextAlignment?.Tablet === "right"
					? "flex-end"
					: legendTextAlignment?.Tablet === "center"
					? "center"
					: "center"
			}; }

			.fb-elegant-chart-block.${blockID} .fb-legend-dot { ${
				legendDotSize?.Tablet
					? `width: ${legendDotSize.Tablet}px; height: ${legendDotSize.Tablet}px;`
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
					multiChartWrapperBorderTypeGetMobile &&
					multiChartWrapperBorderTypeMobile?.top
						? `border-width: ${multiChartWrapperBorderTypeGetMobile};`
						: ""
				}
				${
					multiChartWrapperBorderRadiusGetMobile &&
					multiChartWrapperBorderRadiusMobile?.top
						? `border-radius: ${multiChartWrapperBorderRadiusGetMobile};`
						: ""
				}
				${
					multiChartPaddingGetMobile && multiChartPaddingMobile?.top
						? `padding: ${multiChartPaddingGetMobile};`
						: ""
				}
				${
					multiChartMarginGetMobile && multiChartMarginMobile?.top
						? `margin: ${multiChartMarginGetMobile};`
						: ""
				}
			}

			.fb-elegant-chart-block.${blockID} .fb-chart-card { ${
				canvasWidth?.Mobile
					? `width: ${canvasWidth.Mobile}${canvasWidthUnits?.Mobile};`
					: ""
			} ${
				canvasBorderRadiusGetMobile && canvasBorderRadiusMobile?.top
					? `border-radius: ${canvasBorderRadiusGetMobile};`
					: ""
			} ${
				canvasPaddingGetMobile && canvasPaddingMobile?.top
					? `padding: ${canvasPaddingGetMobile};`
					: ""
			} ${
				canvasMarginGetMobile && canvasMarginMobile?.top
					? `margin: ${canvasMarginGetMobile};`
					: ""
			} }

			.fb-elegant-chart-block.${blockID} .fb-chart-card-body { ${
				canvasHeight?.Mobile
					? `height: ${canvasHeight.Mobile}${canvasHeightUnits?.Mobile};`
					: ""
			} ${
				chartBodyPaddingGetMobile && chartBodyPaddingMobile?.top
					? `padding: ${chartBodyPaddingGetMobile};`
					: ""
			} }
			.fb-elegant-chart-block.${blockID} .fb-chart-card-body { ${
				chartBodyBorderRadiusGetMobile && chartBodyBorderRadiusMobile?.top
					? `border-radius: ${chartBodyBorderRadiusGetMobile};`
					: ""
			} }
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
					: legendTextAlignment?.Mobile === "right"
					? "flex-end"
					: legendTextAlignment?.Mobile === "center"
					? "center"
					: "center"
			}; }

			.fb-elegant-chart-block.${blockID} .fb-legend-dot { ${
				legendDotSize?.Mobile
					? `width: ${legendDotSize.Mobile}px; height: ${legendDotSize.Mobile}px;`
					: ""
			} }
		}
	`;

	const customCss = getCustomCss(multiChartCustomCSS, `.${blockID}`);
	return `${blockStyle} ${customCss}`.replace(/\s+/g, " ").trim();
};

export default generateMultiChartStyle;
