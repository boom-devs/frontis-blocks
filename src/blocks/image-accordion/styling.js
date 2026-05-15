import getCustomCss from "@Utils/getCustomCss";

const generateImageAccordionStyle = (attributes) => {
	const {
		blockID,
		containerHeight = { Desktop: 500, Tablet: 400, Mobile: 300 },
		itemsGap = { Desktop: 12, Tablet: 10, Mobile: 8 },
		itemBorderRadius = { Desktop: 50, Tablet: 30, Mobile: 20 },
		itemBorderType,
		itemBorderColor,
		itemPaddingUnits = { Desktop: "px", Tablet: "px", Mobile: "px" },
		itemPaddingDesktop = { top: "", right: "", bottom: "", left: "" },
		itemPaddingTablet = { top: "", right: "", bottom: "", left: "" },
		itemPaddingMobile = { top: "", right: "", bottom: "", left: "" },
		itemMarginUnits = { Desktop: "px", Tablet: "px", Mobile: "px" },
		itemMarginDesktop = { top: "", right: "", bottom: "", left: "" },
		itemMarginTablet = { top: "", right: "", bottom: "", left: "" },
		itemMarginMobile = { top: "", right: "", bottom: "", left: "" },
		overlayColor,
		iconColor,
		iconBgColor,
		iconSize = { Desktop: 18, Tablet: 16, Mobile: 14 },
		iconCircleSize = { Desktop: 44, Tablet: 40, Mobile: 36 },
		dotColor = "#ffffff",
		dotSize = { Desktop: 12, Tablet: 10, Mobile: 8 },
		numberColor,
		numberFontSize = { Desktop: 13, Tablet: 12, Mobile: 11 },
		titleColor,
		titleFontSize = { Desktop: 18, Tablet: 16, Mobile: 14 },
		titleFontWeight,
		subtitleColor,
		subtitleFontSize = { Desktop: 13, Tablet: 12, Mobile: 11 },
		btnTextColor,
		btnBgColor,
		btnBorderColor,
		btnBorderRadius = { Desktop: 6, Tablet: 6, Mobile: 6 },
		btnFontSize = { Desktop: 13, Tablet: 12, Mobile: 11 },
		btnPaddingY = { Desktop: 8, Tablet: 7, Mobile: 6 },
		btnPaddingX = { Desktop: 18, Tablet: 16, Mobile: 14 },
		itemCustomCSS,
	} = attributes;

	const generatePadding = (p, u) =>
		`${p.top}${u} ${p.right}${u} ${p.bottom}${u} ${p.left}${u}`;

	let styles = `
		.${blockID} .pea-image-accordion-container {
			height: ${containerHeight.Desktop}px;
			gap: ${itemsGap.Desktop}px;
		}
		.${blockID} .pea-image-accordion-item {
			border-radius: ${itemBorderRadius.Desktop}px;
			border-style: ${itemBorderType};
			border-color: ${itemBorderColor};
			padding: ${generatePadding(itemPaddingDesktop, itemPaddingUnits.Desktop)};
			margin: ${generatePadding(itemMarginDesktop, itemMarginUnits.Desktop)};
		}
		.${blockID} .pea-image-accordion-overlay {
			background: ${overlayColor};
		}
		.${blockID} .pea-image-accordion-icon-circle {
			width: ${iconCircleSize.Desktop}px;
			height: ${iconCircleSize.Desktop}px;
			background-color: ${iconBgColor};
			color: ${iconColor};
		}
		.${blockID} .pea-image-accordion-icon-circle i {
			font-size: ${iconSize.Desktop}px;
		}
		.${blockID} .pea-image-accordion-dot {
			width: ${dotSize.Desktop}px;
			height: ${dotSize.Desktop}px;
			background-color: ${dotColor};
		}
		.${blockID} .pea-image-accordion-number {
			color: ${numberColor};
			font-size: ${numberFontSize.Desktop}px;
		}
		.${blockID} .pea-image-accordion-title {
			color: ${titleColor};
			font-size: ${titleFontSize.Desktop}px;
			font-weight: ${titleFontWeight};
		}
		.${blockID} .pea-image-accordion-desc, 
		.${blockID} .pea-sub-title {
			color: ${subtitleColor};
			font-size: ${subtitleFontSize.Desktop}px;
		}
		.${blockID} .pea-image-accordion-btn {
			color: ${btnTextColor};
			background-color: ${btnBgColor};
			border-color: ${btnBorderColor};
			border-radius: ${btnBorderRadius.Desktop}px;
			font-size: ${btnFontSize.Desktop}px;
			padding: ${btnPaddingY.Desktop}px ${btnPaddingX.Desktop}px;
		}

		@media (max-width: 1024px) {
			.${blockID} .pea-image-accordion-container {
				height: ${containerHeight.Tablet}px;
				gap: ${itemsGap.Tablet}px;
			}
			.${blockID} .pea-image-accordion-item {
				border-radius: ${itemBorderRadius.Tablet}px;
				padding: ${generatePadding(itemPaddingTablet, itemPaddingUnits.Tablet)};
				margin: ${generatePadding(itemMarginTablet, itemMarginUnits.Tablet)};
			}
		}

		@media (max-width: 767px) {
			.${blockID} .pea-image-accordion-container {
				height: ${containerHeight.Mobile}px;
				gap: ${itemsGap.Mobile}px;
			}
			.${blockID} .pea-image-accordion-item {
				border-radius: ${itemBorderRadius.Mobile}px;
				padding: ${generatePadding(itemPaddingMobile, itemPaddingUnits.Mobile)};
				margin: ${generatePadding(itemMarginMobile, itemMarginUnits.Mobile)};
			}
		}
	`;

	const customCss = getCustomCss(itemCustomCSS, `.${blockID}`);
	return `${styles} ${customCss}`.replace(/\s+/g, " ").trim();
};

export default generateImageAccordionStyle;
