/**
 * Image Accordion Carousel Block - Style Generation
 * Returns Dynamic Generated CSS
 */

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
const generateImageAccordionStyle = (attributes) => {
	const {
		blockID,
		activeThumbBorderColor,
		activeThumbBorderWidth,
		mainImageBorderRadius,
		thumbnailBorderRadius,
		thumbnailGap,
		mainImageMarginBottom,
	} = attributes;

	if (!blockID) return "";

	const css = `
		.fb-image-accordion-carousel.${blockID} {
			--primary-color: ${activeThumbBorderColor || "#007cba"};
		}

		.fb-image-accordion-carousel.${blockID} .fb-image-accordion-main-image {
			border-radius: ${mainImageBorderRadius}px;
			margin-bottom: ${mainImageMarginBottom}px;
		}

		.fb-image-accordion-carousel.${blockID} .fb-image-accordion-thumbnail-wrapper {
			border-width: ${activeThumbBorderWidth}px;
		}

		.fb-image-accordion-carousel.${blockID} .fb-image-accordion-thumbnail-wrapper .fb-image-accordion-thumbnail {
			border-radius: ${thumbnailBorderRadius}px;
		}

		.fb-image-accordion-carousel.${blockID} .fb-image-accordion-thumbnails-section {
			gap: ${thumbnailGap}px;
		}
	`;

	return css.trim();
};

export default generateImageAccordionStyle;
// accordionItem content margin

const accordionItemMarginDesktopWidth = `${accordionItemDesktopMargin?.top}${accordionItemMarginUnits[deviceType]} ${accordionItemDesktopMargin?.right}${accordionItemMarginUnits[deviceType]} ${accordionItemDesktopMargin?.bottom}${accordionItemMarginUnits[deviceType]} ${accordionItemDesktopMargin?.left}${accordionItemMarginUnits[deviceType]}`;
const accordionItemMarginTabletWidth = `${accordionItemTabMargin?.top}${accordionItemMarginUnits[deviceType]} ${accordionItemTabMargin?.right}${accordionItemMarginUnits[deviceType]} ${accordionItemTabMargin?.bottom}${accordionItemMarginUnits[deviceType]} ${accordionItemTabMargin?.left}${accordionItemMarginUnits[deviceType]}`;
const accordionItemMarginMobileWidth = `${accordionItemMobileMargin?.top}${accordionItemMarginUnits[deviceType]} ${accordionItemMobileMargin?.right}${accordionItemMarginUnits[deviceType]} ${accordionItemMobileMargin?.bottom}${accordionItemMarginUnits[deviceType]} ${accordionItemMobileMargin?.left}${accordionItemMarginUnits[deviceType]}`;

const accordionItemPaddingDesktopWidth = `${accordionItemDesktopPadding?.top}${accordionItemPaddingUnits[deviceType]} ${accordionItemDesktopPadding?.right}${accordionItemPaddingUnits[deviceType]} ${accordionItemDesktopPadding?.bottom}${accordionItemPaddingUnits[deviceType]} ${accordionItemDesktopPadding?.left}${accordionItemPaddingUnits[deviceType]}`;
const accordionItemPaddingTabletWidth = `${accordionItemTabPadding?.top}${accordionItemPaddingUnits[deviceType]} ${accordionItemTabPadding?.right}${accordionItemPaddingUnits[deviceType]} ${accordionItemTabPadding?.bottom}${accordionItemPaddingUnits[deviceType]} ${accordionItemTabPadding?.left}${accordionItemPaddingUnits[deviceType]}`;
const accordionItemPaddingMobileWidth = `${accordionItemMobilePadding?.top}${accordionItemPaddingUnits[deviceType]} ${accordionItemMobilePadding?.right}${accordionItemPaddingUnits[deviceType]} ${accordionItemMobilePadding?.bottom}${accordionItemPaddingUnits[deviceType]} ${accordionItemMobilePadding?.left}${accordionItemPaddingUnits[deviceType]}`;

const fbAccordionItemStyle = `
        .fb-accordion-item-main-wrapper.${blockID} {
            position: relative;
            ${
							accordionItemZIndex?.Desktop
								? `z-index: ${accordionItemZIndex?.Desktop};`
								: ""
						}
            transition: all 0.3s ease-in-out;
        }
        
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
            ${
							accordionItemPaddingDesktopWidth &&
							accordionItemDesktopPadding?.top
								? `padding: ${accordionItemPaddingDesktopWidth};`
								: ""
						}
            ${
							accordionItemMarginDesktopWidth && accordionItemDesktopMargin?.top
								? `margin: ${accordionItemMarginDesktopWidth};`
								: ""
						}
            transition: all 0.3s ease-in-out;
        }
        
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .block-editor-block-list__layout {
            display: block;
        }
        
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .block-editor-block-list__layout p {
            margin: 0;
        }
        
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix {
            ${titlePrefixColor ? `fill: ${titlePrefixColor};` : ""}
            transition: all 0.3s ease-in-out;
        }
        
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix {
            ${titleSuffixColor ? `fill: ${titleSuffixColor};` : ""}
            transition: all 0.3s ease-in-out;
        }
        
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-title-inner .fb-accordion-title-prefix {
            ${titlePrefixHoverColor ? `fill: ${titlePrefixHoverColor};` : ""}
            transition: all 0.3s ease-in-out;
        }
    
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-title-inner .fb-accordion-title-suffix {
            ${titleSuffixHoverColor ? `fill: ${titleSuffixHoverColor};` : ""}
            transition: all 0.3s ease-in-out;
        }
        
        @media only screen and (max-width: 1024px) {
            .fb-accordion-item-main-wrapper.${blockID} {
                ${
									accordionItemZIndex?.Tablet
										? `z-index: ${accordionItemZIndex?.Tablet};`
										: ""
								}
            }
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
                ${
									accordionItemPaddingTabletWidth &&
									accordionItemTabPadding?.top
										? `padding: ${accordionItemPaddingTabletWidth};`
										: ""
								}
                ${
									accordionItemMarginTabletWidth && accordionItemTabMargin?.top
										? `margin: ${accordionItemMarginTabletWidth};`
										: ""
								}
            }
        }
    
        @media only screen and (max-width: 767px) {
            .fb-accordion-item-main-wrapper.${blockID} {
                ${
									accordionItemZIndex?.Mobile
										? `z-index: ${accordionItemZIndex?.Mobile};`
										: ""
								}
            }
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
                ${
									accordionItemPaddingMobileWidth &&
									accordionItemMobilePadding?.top
										? `padding: ${accordionItemPaddingMobileWidth};`
										: ""
								}
                ${
									accordionItemMarginMobileWidth &&
									accordionItemMobileMargin?.top
										? `margin: ${accordionItemMarginMobileWidth};`
										: ""
								}
            }
        }
    `;

const customCss = getCustomCss(accordionItemCustomCSS, `.${blockID}`);
return `${fbAccordionItemStyle} ${customCss}`.replace(/\s+/g, " ").trim();

const fbAccordionItemStyleTwo = `
        .fb-accordion-item-main-wrapper.${blockID} {
            position: relative;
            display: block;
            overflow: hidden;
            ${
							accordionItemZIndex?.Desktop
								? `z-index: ${accordionItemZIndex?.Desktop};`
								: ""
						}
            transition: all 0.3s ease-in-out;
        }

        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper {
            display: none;
            margin: 0;
            padding: 0;
            height: 0;
            position: absolute;
            visibility: hidden;
            transition: all 0.3s ease-in-out;
        }
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper.active {
            display: block;
            height: auto;
            position: static;
            visibility: visible;
            transition: all 0.3s ease-in-out;
        }
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
            ${
							accordionItemPaddingDesktopWidth !== "px px px px"
								? `padding: ${accordionItemPaddingDesktopWidth};`
								: ""
						}
            ${
							accordionItemMarginDesktopWidth !== "px px px px"
								? `margin: ${accordionItemMarginDesktopWidth};`
								: ""
						}
            transition: all 0.3s ease-in-out;
        }
        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content p {
            margin: 0;
            transition: all 0.3s ease-in-out;
        }

        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-prefix {
            ${titlePrefixColor ? `fill: ${titlePrefixColor};` : ""}
            transition: all 0.3s ease-in-out;
        }

        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-title-inner .fb-accordion-title-prefix {
            ${titlePrefixHoverColor ? `fill: ${titlePrefixHoverColor};` : ""}
            transition: all 0.3s ease-in-out;
        }

        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper .fb-accordion-title-inner .fb-accordion-title-suffix {
            ${titleSuffixColor ? `fill: ${titleSuffixColor};` : ""}
            transition: all 0.3s ease-in-out;
        }

        .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-item-title-wrapper:hover .fb-accordion-title-inner .fb-accordion-title-suffix {
            ${titleSuffixHoverColor ? `fill: ${titleSuffixHoverColor};` : ""}
            transition: all 0.3s ease-in-out;
        }

        @media only screen and (max-width: 1024px) {
            .fb-accordion-item-main-wrapper.${blockID} {
                ${
									accordionItemZIndex?.Tablet
										? `z-index: ${accordionItemZIndex?.Tablet};`
										: ""
								}
            }
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
                ${
									accordionItemPaddingTabletWidth !== "px px px px"
										? `padding: ${accordionItemPaddingTabletWidth};`
										: ""
								}
                ${
									accordionItemMarginTabletWidth !== "px px px px"
										? `margin: ${accordionItemMarginTabletWidth};`
										: ""
								}
            }
        }

        @media only screen and (max-width: 767px) {
            .fb-accordion-item-main-wrapper.${blockID} {
                ${
									accordionItemZIndex?.Mobile
										? `z-index: ${accordionItemZIndex?.Mobile};`
										: ""
								}
            }
            .fb-accordion-item-main-wrapper.${blockID} .fb-accordion-content-wrapper .fb-accordion-content {
                ${
									accordionItemPaddingMobileWidth !== "px px px px"
										? `padding: ${accordionItemPaddingMobileWidth};`
										: ""
								}
                ${
									accordionItemMarginMobileWidth !== "px px px px"
										? `margin: ${accordionItemMarginMobileWidth};`
										: ""
								}
            }
        }
    `;

const customCssTwo = getCustomCss(accordionItemCustomCSS, `.${blockID}`);
return `${fbAccordionItemStyleTwo} ${customCssTwo}`.replace(/\s+/g, " ").trim();
