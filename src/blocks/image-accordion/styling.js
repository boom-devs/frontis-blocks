// const generateImageAccordionStyle = (attributes) => {
// 	const {
// 		blockID,
// 		layoutType = "horizontal",
// 		mainImageWidth = "60",
// 		thumbnailAreaWidth = "40",
// 		thumbnailLayout = "vertical",
// 		spacing = "20",
// 		mainImageBorderRadius = "12",
// 		thumbnailBorderRadius = "8",
// 		activeThumbBorderWidth = "3",
// 		activeThumbBorderColor = "#007cba",
// 		titleFontSize = { Desktop: "24" },
// 		titleFontColor = "#000000",
// 		titleFontWeight = "600",
// 		descriptionFontSize = { Desktop: "14" },
// 		descriptionFontColor = "#666666",
// 		mainImageBg = "#f5f5f5",
// 		descriptionBg = "rgba(0, 124, 186, 0.1)",
// 		descriptionBorder = "#007cba",
// 		descriptionBorderWidth = "3",
// 	} = attributes;

// 	let css = "";

// 	if (!blockID) return css;

// 	// Get responsive values or use defaults
// 	const titleDesktopSize = titleFontSize?.Desktop || "24";
// 	const titleTabletSize = titleFontSize?.Tablet || titleDesktopSize;
// 	const titleMobileSize = titleFontSize?.Mobile || titleDesktopSize;

// 	const descDesktopSize = descriptionFontSize?.Desktop || "14";
// 	const descTabletSize = descriptionFontSize?.Tablet || descDesktopSize;
// 	const descMobileSize = descriptionFontSize?.Mobile || descDesktopSize;

// 	// Desktop styles
// 	css += `
// /* Image Accordion Wrapper */
// .${blockID} {
// 	width: 100%;
// }

// /* Layout Container */
// .${blockID} > div {
// 	gap: ${spacing}px;
// }

// /* Main Image Container */
// .${blockID} .fb-image-accordion-main {
// 	border-radius: ${mainImageBorderRadius}px;
// 	background-color: ${mainImageBg};
// 	overflow: hidden;
// }

// .${blockID} .fb-image-accordion-main img {
// 	width: 100%;
// 	height: 100%;
// 	object-fit: cover;
// 	display: block;
// }

// /* Thumbnails Container */
// .${blockID} .fb-image-accordion-thumbnails {
// 	gap: ${spacing}px;
// }

// /* Thumbnail Buttons */
// .${blockID} .fb-image-accordion-thumbnail {
// 	border-radius: ${thumbnailBorderRadius}px;
// 	transition: all 0.3s ease;
// 	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
// }

// .${blockID} .fb-image-accordion-thumbnail:hover {
// 	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
// }

// .${blockID} .fb-image-accordion-thumbnail.active {
// 	border: ${activeThumbBorderWidth}px solid ${activeThumbBorderColor};
// 	box-shadow: 0 0 0 2px ${activeThumbBorderColor}33;
// }

// .${blockID} .fb-image-accordion-thumbnail img {
// 	width: 100%;
// 	height: 100%;
// 	object-fit: cover;
// 	display: block;
// }

// /* Description Section */
// .${blockID} .fb-image-accordion-description {
// 	background-color: ${descriptionBg};
// 	border: ${descriptionBorderWidth}px solid ${descriptionBorder};
// 	border-radius: 4px;
// 	padding: 15px;
// 	animation: fadeIn 0.3s ease;
// }

// .${blockID} .fb-image-accordion-description h3 {
// 	color: ${titleFontColor};
// 	font-weight: ${titleFontWeight};
// 	font-size: ${titleDesktopSize}px;
// 	margin: 0 0 10px 0;
// }

// .${blockID} .fb-image-accordion-description p {
// 	color: ${descriptionFontColor};
// 	font-size: ${descDesktopSize}px;
// 	margin: 0;
// 	line-height: 1.6;
// }

// @keyframes fadeIn {
// 	from {
// 		opacity: 0;
// 	}
// 	to {
// 		opacity: 1;
// 	}
// }
// `;

// 	// Tablet styles
// 	if (
// 		titleTabletSize !== titleDesktopSize ||
// 		descTabletSize !== descDesktopSize
// 	) {
// 		css += `
// @media (max-width: 768px) {
// 	.${blockID} .fb-image-accordion-description h3 {
// 		font-size: ${titleTabletSize}px;
// 	}

// 	.${blockID} .fb-image-accordion-description p {
// 		font-size: ${descTabletSize}px;
// 	}
// }
// `;
// 	}

// 	// Mobile styles
// 	if (
// 		titleMobileSize !== titleDesktopSize ||
// 		descMobileSize !== descDesktopSize
// 	) {
// 		css += `
// @media (max-width: 480px) {
// 	.${blockID} .fb-image-accordion-description h3 {
// 		font-size: ${titleMobileSize}px;
// 	}

// 	.${blockID} .fb-image-accordion-description p {
// 		font-size: ${descMobileSize}px;
// 	}
// }
// `;
// 	}

// 	return css;
// };

// export default generateImageAccordionStyle;

const generateImageAccordionStyle = (attributes) => {
	const { presetStyle } = attributes;
	// Reserved for future dynamic CSS generation
	return "";
};

export default generateImageAccordionStyle;
