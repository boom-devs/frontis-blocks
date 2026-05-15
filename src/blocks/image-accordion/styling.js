import getCustomCss from "@Utils/getCustomCss";

const generateImageAccordionStyle = (attributes) => {
	const {
		blockID,
		containerHeight,
		itemsGap,
		itemBorderRadius,
		itemBorderType,
		itemBorderColor,
		itemPaddingUnits,
		itemPaddingDesktop,
		itemPaddingTablet,
		itemPaddingMobile,
		itemMarginUnits,
		itemMarginDesktop,
		itemMarginTablet,
		itemMarginMobile,
		overlayColor,
		iconColor,
		iconBgColor,
		iconSize,
		iconCircleSize,
		dotColor,
		dotSize,
		numberColor,
		numberFontSize,
		titleColor,
		titleFontSize,
		titleFontWeight,
		subtitleColor,
		subtitleFontSize,
		btnTextColor,
		btnBgColor,
		btnBorderColor,
		btnBorderRadius,
		btnFontSize,
		btnPaddingY,
		btnPaddingX,
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
