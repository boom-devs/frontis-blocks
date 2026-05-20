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

	const generatePadding = (p, u) => {
		if (!p) return "0px";
		const top = p.top !== "" && p.top !== undefined ? `${p.top}${u}` : "0px";
		const right =
			p.right !== "" && p.right !== undefined ? `${p.right}${u}` : "0px";
		const bottom =
			p.bottom !== "" && p.bottom !== undefined ? `${p.bottom}${u}` : "0px";
		const left =
			p.left !== "" && p.left !== undefined ? `${p.left}${u}` : "0px";
		return `${top} ${right} ${bottom} ${left}`;
	};

	let styles = `
		.${blockID} .fb-image-accordion-container {
			height: ${containerHeight.Desktop}px;
			gap: ${itemsGap.Desktop}px;
		}
		.${blockID} .fb-image-accordion-item {
			border-radius: ${itemBorderRadius.Desktop}px;
			${itemBorderType ? `border-style: ${itemBorderType};` : ""}
			${itemBorderColor ? `border-color: ${itemBorderColor};` : ""}
			padding: ${generatePadding(itemPaddingDesktop, itemPaddingUnits.Desktop)};
			margin: ${generatePadding(itemMarginDesktop, itemMarginUnits.Desktop)};
		}
		.${blockID} .fb-image-accordion-overlay {
			${overlayColor ? `background: ${overlayColor};` : ""}
		}
		.${blockID} .fb-image-accordion-icon-circle {
			width: ${iconCircleSize.Desktop}px;
			height: ${iconCircleSize.Desktop}px;
			${iconBgColor ? `background-color: ${iconBgColor};` : ""}
			${iconColor ? `color: ${iconColor};` : ""}
		}
		.${blockID} .fb-image-accordion-icon-circle i {
			font-size: ${iconSize.Desktop}px;
		}
		.${blockID} .fb-image-accordion-dot {
			width: ${dotSize.Desktop}px;
			height: ${dotSize.Desktop}px;
			background-color: ${dotColor};
		}
		.${blockID} .fb-image-accordion-number {
			${numberColor ? `color: ${numberColor};` : ""}
			font-size: ${numberFontSize.Desktop}px;
		}
		.${blockID} .fb-image-accordion-title {
			${titleColor ? `color: ${titleColor};` : ""}
			font-size: ${titleFontSize.Desktop}px;
			${titleFontWeight ? `font-weight: ${titleFontWeight};` : ""}
		}
		.${blockID} .fb-image-accordion-desc, 
		.${blockID} .fb-sub-title {
			${subtitleColor ? `color: ${subtitleColor};` : ""}
			font-size: ${subtitleFontSize.Desktop}px;
		}
		.${blockID} .fb-image-accordion-btn {
			${btnTextColor ? `color: ${btnTextColor};` : ""}
			${btnBgColor ? `background-color: ${btnBgColor};` : ""}
			${btnBorderColor ? `border-color: ${btnBorderColor};` : ""}
			border-radius: ${btnBorderRadius.Desktop}px;
			font-size: ${btnFontSize.Desktop}px;
			padding: ${btnPaddingY.Desktop}px ${btnPaddingX.Desktop}px;
		}

		@media (max-width: 1024px) {
			.${blockID} .fb-image-accordion-container {
				height: ${containerHeight.Tablet}px;
				gap: ${itemsGap.Tablet}px;
			}
			.${blockID} .fb-image-accordion-item {
				border-radius: ${itemBorderRadius.Tablet}px;
				padding: ${generatePadding(itemPaddingTablet, itemPaddingUnits.Tablet)};
				margin: ${generatePadding(itemMarginTablet, itemMarginUnits.Tablet)};
			}
		}

		@media (max-width: 767px) {
			.${blockID} .fb-image-accordion-container {
				height: ${containerHeight.Mobile}px;
				gap: ${itemsGap.Mobile}px;
			}
			.${blockID} .fb-image-accordion-item {
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
