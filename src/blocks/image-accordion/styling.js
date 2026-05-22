/**
 * Image Accordion Block — Style Generation
 * Returns dynamically generated CSS string
 */

import getCustomCss from "@Utils/getCustomCss";

const generateImageAccordionStyle = (attributes) => {
	const {
		blockID,
		accordionPresetStyle,
		accordionHeight,
		accordionHeightUnits,
		accordionActiveWidth,
		accordionActiveWidthUnits,
		accordionGap,
		accordionGapUnits,
		accordionTransitionSpeed,

		accordionItemBorderRadiusUnits,
		accordionItemBorderRadiusDesktop,
		accordionItemBorderRadiusTablet,
		accordionItemBorderRadiusMobile,

		accordionOverlayColor,
		accordionOverlayActiveColor,

		accordionTitleColor,
		accordionTitleFontSize,
		accordionTitleFontSizeUnits,
		accordionTitleFontWeight,

		accordionSubtitleColor,
		accordionSubtitleFontSize,
		accordionSubtitleFontSizeUnits,

		accordionNumberColor,
		accordionNumberFontSize,
		accordionNumberFontSizeUnits,

		accordionIconSize,
		accordionIconSizeUnits,
		accordionIconColor,
		accordionIconBgColor,

		accordionButtonColor,
		accordionButtonBgColor,
		accordionButtonHoverColor,
		accordionButtonHoverBgColor,
		accordionButtonFontSize,
		accordionButtonFontSizeUnits,

		accordionPaddingUnits,
		accordionPaddingDesktop,
		accordionPaddingTablet,
		accordionPaddingMobile,

		accordionMarginUnits,
		accordionMarginDesktop,
		accordionMarginTablet,
		accordionMarginMobile,

		accordionBoxShadowCssValue,
		accordionBoxShadowHoverCssValue,

		accordionGlobalZIndex,
		accordionCustomCSS,
	} = attributes;

	// --- Spacing helpers ---
	const pad = (vals, unit) =>
		vals && vals.top !== undefined
			? `${vals.top}${unit} ${vals.right}${unit} ${vals.bottom}${unit} ${vals.left}${unit}`
			: "";

	const borderRadius = (vals, unit) =>
		vals && vals.top !== undefined
			? `${vals.top}${unit} ${vals.right}${unit} ${vals.bottom}${unit} ${vals.left}${unit}`
			: "";

	const speed = accordionTransitionSpeed
		? `${accordionTransitionSpeed}ms`
		: "500ms";

	// Desktop
	const paddingDesktop = pad(
		accordionPaddingDesktop,
		accordionPaddingUnits?.Desktop,
	);
	const marginDesktop = pad(
		accordionMarginDesktop,
		accordionMarginUnits?.Desktop,
	);
	const radiusDesktop = borderRadius(
		accordionItemBorderRadiusDesktop,
		accordionItemBorderRadiusUnits?.Desktop,
	);

	// Tablet
	const paddingTablet = pad(
		accordionPaddingTablet,
		accordionPaddingUnits?.Tablet,
	);
	const marginTablet = pad(accordionMarginTablet, accordionMarginUnits?.Tablet);
	const radiusTablet = borderRadius(
		accordionItemBorderRadiusTablet,
		accordionItemBorderRadiusUnits?.Tablet,
	);

	// Mobile
	const paddingMobile = pad(
		accordionPaddingMobile,
		accordionPaddingUnits?.Mobile,
	);
	const marginMobile = pad(accordionMarginMobile, accordionMarginUnits?.Mobile);
	const radiusMobile = borderRadius(
		accordionItemBorderRadiusMobile,
		accordionItemBorderRadiusUnits?.Mobile,
	);

	const css = `

        /* ===== WRAPPER ===== */
        .${blockID} .fb-image-accordion-wrapper {
            display: flex;
            flex-direction: row;
            width: 100%;
            overflow: hidden;
            ${
							accordionHeight?.Desktop
								? `height: ${accordionHeight.Desktop}${accordionHeightUnits?.Desktop};`
								: ""
						}
            ${
							accordionGap?.Desktop
								? `gap: ${accordionGap.Desktop}${accordionGapUnits?.Desktop};`
								: ""
						}
            ${
							accordionGlobalZIndex?.Desktop
								? `z-index: ${accordionGlobalZIndex.Desktop};`
								: ""
						}
            ${
							paddingDesktop && accordionPaddingDesktop?.top
								? `padding: ${paddingDesktop};`
								: ""
						}
            ${
							marginDesktop && accordionMarginDesktop?.top
								? `margin: ${marginDesktop};`
								: ""
						}
            ${
							accordionBoxShadowCssValue
								? `box-shadow: ${accordionBoxShadowCssValue};`
								: ""
						}
        }
        .${blockID} .fb-image-accordion-wrapper:hover {
            ${
							accordionBoxShadowHoverCssValue
								? `box-shadow: ${accordionBoxShadowHoverCssValue};`
								: ""
						}
        }

        /* ===== ITEMS ===== */
        .${blockID} .fb-accordion-item {
            flex: 1;
            overflow: hidden;
            position: relative;
            cursor: pointer;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            transition: flex ${speed} ease, border-radius ${speed} ease;
            ${radiusDesktop ? `border-radius: ${radiusDesktop};` : ""}
        }

        /* Active item expands */
        .${blockID} .fb-accordion-item.fb-accordion-active {
            ${
							accordionActiveWidth?.Desktop
								? `flex: 0 0 ${accordionActiveWidth.Desktop}${accordionActiveWidthUnits?.Desktop};`
								: "flex: 0 0 60%;"
						}
        }

        /* ===== OVERLAY ===== */
        .${blockID} .fb-accordion-overlay {
            position: absolute;
            inset: 0;
            background: ${accordionOverlayColor || "rgba(0,0,0,0.45)"};
            transition: background ${speed} ease;
            border-radius: inherit;
        }
        .${blockID} .fb-accordion-item.fb-accordion-active .fb-accordion-overlay {
            background: ${accordionOverlayActiveColor || "rgba(0,0,0,0.2)"};
        }

        /* ===== CONTENT ===== */
        .${blockID} .fb-accordion-content {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 20px;
            z-index: 2;
            opacity: 0;
            transform: translateY(10px);
            transition: opacity ${speed} ease, transform ${speed} ease;
        }
        .${blockID} .fb-accordion-item.fb-accordion-active .fb-accordion-content {
            opacity: 1;
            transform: translateY(0);
        }

        /* ===== NUMBER ===== */
        .${blockID} .fb-accordion-number {
            display: block;
            color: ${accordionNumberColor || "#fff"};
            ${
							accordionNumberFontSize?.Desktop
								? `font-size: ${accordionNumberFontSize.Desktop}${accordionNumberFontSizeUnits?.Desktop};`
								: ""
						}
            margin-bottom: 4px;
        }

        /* ===== TITLE ===== */
        .${blockID} .fb-accordion-title {
            color: ${accordionTitleColor || "#fff"};
            ${
							accordionTitleFontSize?.Desktop
								? `font-size: ${accordionTitleFontSize.Desktop}${accordionTitleFontSizeUnits?.Desktop};`
								: ""
						}
            font-weight: ${accordionTitleFontWeight || "700"};
            margin: 0 0 4px;
            line-height: 1.2;
        }

        /* ===== SUBTITLE ===== */
        .${blockID} .fb-accordion-subtitle {
            color: ${accordionSubtitleColor || "#eee"};
            ${
							accordionSubtitleFontSize?.Desktop
								? `font-size: ${accordionSubtitleFontSize.Desktop}${accordionSubtitleFontSizeUnits?.Desktop};`
								: ""
						}
            margin: 0 0 10px;
        }

        /* ===== ICON ===== */
        .${blockID} .fb-accordion-icon-wrapper {
            position: absolute;
            bottom: 16px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2;
            background: ${accordionIconBgColor || "rgba(255,255,255,0.2)"};
            border-radius: 50%;
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity ${speed} ease;
        }
        .${blockID} .fb-accordion-item.fb-accordion-active .fb-accordion-icon-wrapper {
            opacity: 0;
            pointer-events: none;
        }
        .${blockID} .fb-accordion-icon-wrapper svg {
            width: ${accordionIconSize?.Desktop || "32"}${
							accordionIconSizeUnits?.Desktop || "px"
						};
            height: ${accordionIconSize?.Desktop || "32"}${
							accordionIconSizeUnits?.Desktop || "px"
						};
            fill: ${accordionIconColor || "#fff"};
            color: ${accordionIconColor || "#fff"};
        }

        /* ===== BUTTON ===== */
        .${blockID} .fb-accordion-btn {
            display: inline-block;
            padding: 8px 18px;
            background: ${accordionButtonBgColor || "#fff"};
            color: ${accordionButtonColor || "#333"};
            ${
							accordionButtonFontSize?.Desktop
								? `font-size: ${accordionButtonFontSize.Desktop}${accordionButtonFontSizeUnits?.Desktop};`
								: ""
						}
            border-radius: 6px;
            text-decoration: none;
            transition: background 0.25s, color 0.25s;
        }
        .${blockID} .fb-accordion-btn:hover {
            background: ${accordionButtonHoverBgColor || "#333"};
            color: ${accordionButtonHoverColor || "#fff"};
        }

        /* ===========================
           PRESET STYLE OVERRIDES
        =========================== */

        /* --- Style 1: Rounded collapsed items with icon at bottom --- */
        .${blockID} .fb-image-accordion-wrapper.style-1 .fb-accordion-item {
            border-radius: ${radiusDesktop || "16px"};
        }
        .${blockID} .fb-image-accordion-wrapper.style-1 .fb-accordion-content {
            bottom: 20px;
            left: 20px;
        }

        /* --- Style 2: Tall full-height panels, number at bottom center --- */
        .${blockID} .fb-image-accordion-wrapper.style-2 .fb-accordion-item {
            border-radius: 0;
        }
        .${blockID} .fb-image-accordion-wrapper.style-2 .fb-accordion-content {
            bottom: 24px;
            left: 0;
            right: 0;
            text-align: center;
            padding: 0 12px 12px;
        }
        .${blockID} .fb-image-accordion-wrapper.style-2 .fb-accordion-number {
            display: block;
            text-align: center;
        }
        .${blockID} .fb-image-accordion-wrapper.style-2 .fb-accordion-item:not(.fb-accordion-active) .fb-accordion-content {
            opacity: 1;
            transform: none;
        }
        .${blockID} .fb-image-accordion-wrapper.style-2 .fb-accordion-item:not(.fb-accordion-active) .fb-accordion-title,
        .${blockID} .fb-image-accordion-wrapper.style-2 .fb-accordion-item:not(.fb-accordion-active) .fb-accordion-subtitle {
            display: none;
        }

        /* --- Style 3: Horizontal rows (vertical direction) --- */
        .${blockID} .fb-image-accordion-wrapper.style-3 {
            flex-direction: column;
        }
        .${blockID} .fb-image-accordion-wrapper.style-3 .fb-accordion-item {
            border-radius: 12px;
        }
        .${blockID} .fb-image-accordion-wrapper.style-3 .fb-accordion-item.fb-accordion-active {
            flex: 0 0 ${accordionActiveWidth?.Desktop || "60"}%;
        }
        .${blockID} .fb-image-accordion-wrapper.style-3 .fb-accordion-content {
            bottom: auto;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
        }
        .${blockID} .fb-image-accordion-wrapper.style-3 .fb-accordion-item.fb-accordion-active .fb-accordion-content {
            opacity: 1;
            transform: translateY(-50%);
        }

        /* --- Style 4: Diagonal/slanted panels --- */
        .${blockID} .fb-image-accordion-wrapper.style-4 {
            gap: 0;
        }
        .${blockID} .fb-image-accordion-wrapper.style-4 .fb-accordion-item {
            border-radius: 0;
            clip-path: polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%);
            margin-left: -20px;
        }
        .${blockID} .fb-image-accordion-wrapper.style-4 .fb-accordion-item:first-child {
            margin-left: 0;
            clip-path: polygon(0% 0%, 100% 0%, 92% 100%, 0% 100%);
        }
        .${blockID} .fb-image-accordion-wrapper.style-4 .fb-accordion-item:last-child {
            clip-path: polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%);
        }
        .${blockID} .fb-image-accordion-wrapper.style-4 .fb-accordion-content {
            text-align: center;
            bottom: auto;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
        }
        .${blockID} .fb-image-accordion-wrapper.style-4 .fb-accordion-item.fb-accordion-active .fb-accordion-content {
            opacity: 1;
            transform: translateY(-50%);
        }
        .${blockID} .fb-image-accordion-wrapper.style-4 .fb-accordion-item:not(.fb-accordion-active) .fb-accordion-content {
            opacity: 1;
            transform: translateY(-50%);
        }
        .${blockID} .fb-image-accordion-wrapper.style-4 .fb-accordion-item:not(.fb-accordion-active) .fb-accordion-subtitle {
            display: none;
        }

        /* ===== TABLET ===== */
        @media only screen and (max-width: 1024px) {
            .${blockID} .fb-image-accordion-wrapper {
                ${
									accordionHeight?.Tablet
										? `height: ${accordionHeight.Tablet}${accordionHeightUnits?.Tablet};`
										: ""
								}
                ${
									accordionGap?.Tablet
										? `gap: ${accordionGap.Tablet}${accordionGapUnits?.Tablet};`
										: ""
								}
                ${
									paddingTablet && accordionPaddingTablet?.top
										? `padding: ${paddingTablet};`
										: ""
								}
                ${
									marginTablet && accordionMarginTablet?.top
										? `margin: ${marginTablet};`
										: ""
								}
            }
            .${blockID} .fb-accordion-item {
                ${radiusTablet ? `border-radius: ${radiusTablet};` : ""}
            }
            .${blockID} .fb-accordion-item.fb-accordion-active {
                ${
									accordionActiveWidth?.Tablet
										? `flex: 0 0 ${accordionActiveWidth.Tablet}${accordionActiveWidthUnits?.Tablet};`
										: ""
								}
            }
            .${blockID} .fb-accordion-title {
                ${
									accordionTitleFontSize?.Tablet
										? `font-size: ${accordionTitleFontSize.Tablet}${accordionTitleFontSizeUnits?.Tablet};`
										: ""
								}
            }
            .${blockID} .fb-accordion-subtitle {
                ${
									accordionSubtitleFontSize?.Tablet
										? `font-size: ${accordionSubtitleFontSize.Tablet}${accordionSubtitleFontSizeUnits?.Tablet};`
										: ""
								}
            }
            .${blockID} .fb-accordion-number {
                ${
									accordionNumberFontSize?.Tablet
										? `font-size: ${accordionNumberFontSize.Tablet}${accordionNumberFontSizeUnits?.Tablet};`
										: ""
								}
            }
            .${blockID} .fb-accordion-icon-wrapper svg {
                width: ${accordionIconSize?.Tablet || "28"}${
									accordionIconSizeUnits?.Tablet || "px"
								};
                height: ${accordionIconSize?.Tablet || "28"}${
									accordionIconSizeUnits?.Tablet || "px"
								};
            }
        }

        /* ===== MOBILE ===== */
        @media only screen and (max-width: 767px) {
            .${blockID} .fb-image-accordion-wrapper {
                flex-direction: column;
                ${accordionHeight?.Mobile ? `height: auto;` : ""}
                ${
									accordionGap?.Mobile
										? `gap: ${accordionGap.Mobile}${accordionGapUnits?.Mobile};`
										: ""
								}
                ${
									paddingMobile && accordionPaddingMobile?.top
										? `padding: ${paddingMobile};`
										: ""
								}
                ${
									marginMobile && accordionMarginMobile?.top
										? `margin: ${marginMobile};`
										: ""
								}
            }
            .${blockID} .fb-accordion-item {
                flex: 1 !important;
                min-height: ${accordionHeight?.Mobile || "300"}${
									accordionHeightUnits?.Mobile || "px"
								};
                ${radiusMobile ? `border-radius: ${radiusMobile};` : ""}
            }
            .${blockID} .fb-accordion-item.fb-accordion-active {
                min-height: ${parseInt(accordionHeight?.Mobile || 300) * 2}${
									accordionHeightUnits?.Mobile || "px"
								};
            }
            .${blockID} .fb-accordion-title {
                ${
									accordionTitleFontSize?.Mobile
										? `font-size: ${accordionTitleFontSize.Mobile}${accordionTitleFontSizeUnits?.Mobile};`
										: ""
								}
            }
            .${blockID} .fb-accordion-subtitle {
                ${
									accordionSubtitleFontSize?.Mobile
										? `font-size: ${accordionSubtitleFontSize.Mobile}${accordionSubtitleFontSizeUnits?.Mobile};`
										: ""
								}
            }
            .${blockID} .fb-accordion-number {
                ${
									accordionNumberFontSize?.Mobile
										? `font-size: ${accordionNumberFontSize.Mobile}${accordionNumberFontSizeUnits?.Mobile};`
										: ""
								}
            }
            .${blockID} .fb-accordion-icon-wrapper svg {
                width: ${accordionIconSize?.Mobile || "24"}${
									accordionIconSizeUnits?.Mobile || "px"
								};
                height: ${accordionIconSize?.Mobile || "24"}${
									accordionIconSizeUnits?.Mobile || "px"
								};
            }
            /* Disable diagonal clip on mobile */
            .${blockID} .fb-image-accordion-wrapper.style-4 .fb-accordion-item,
            .${blockID} .fb-image-accordion-wrapper.style-4 .fb-accordion-item:first-child,
            .${blockID} .fb-image-accordion-wrapper.style-4 .fb-accordion-item:last-child {
                clip-path: none;
                margin-left: 0;
            }
        }
    `;

	const customCss = getCustomCss(accordionCustomCSS, `.${blockID}`);
	return `${css} ${customCss}`.replace(/\s+/g, " ").trim();
};

export default generateImageAccordionStyle;
