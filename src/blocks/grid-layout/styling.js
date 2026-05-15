/**
 * Grid Layout Block - Style Generation
 * Returns Dynamic Generated CSS
 */

import getCustomCss from '@Utils/getCustomCss';

const DEFAULT_GRID_SETTINGS = {
	Desktop: { cols: 12, rowHeight: 40, gutter: 10 },
	Tablet: { cols: 8, rowHeight: 35, gutter: 8 },
	Mobile: { cols: 4, rowHeight: 30, gutter: 6 },
};

const getBreakpointNumber = (values, breakpoint, settingKey) =>
	Number(values?.[breakpoint]) || DEFAULT_GRID_SETTINGS[breakpoint][settingKey];

const getContainerSelectors = (blockID) => ({
	wrapper: `.${blockID}.fb-grid-layout-container`,
	grid: `.${blockID} .grid-content-layer.fb-grid-layout-container`,
});

const getItemSelectors = (blockID, itemId) => [
	`.${blockID} .grid-content-layer.fb-grid-layout-container > [data-grid-id="${itemId}"]`,
];

const getLayoutRowCount = (layoutItems = []) =>
	layoutItems.reduce((maxRow, item) => {
		const y = Math.max(Number(item?.y) || 0, 0);
		const h = Math.max(Number(item?.h) || 1, 1);
		return Math.max(maxRow, y + h);
	}, 0);

const generateLayoutRules = (blockID, layoutItems = []) =>
	layoutItems.reduce((rules, item) => {
		const x = Math.max(Number(item?.x) || 0, 0);
		const y = Math.max(Number(item?.y) || 0, 0);
		const w = Math.max(Number(item?.w) || 1, 1);
		const h = Math.max(Number(item?.h) || 1, 1);

		return rules + `
			${getItemSelectors(blockID, item.i).join(", ")} {
				grid-column: ${x + 1} / span ${w};
				grid-row: ${y + 1} / span ${h};
			}
		`;
	}, "");

const generateGridLayoutStyle = (attributes, resolvedLayouts = null) => {
	const {
		blockID,
		gutter,
		gutterUnits,
		layouts,

		/** Start Global Setting */
		gridLayoutGlobalZIndex,
		gridLayoutGlobalWraperID,
		gridLayoutGlobalWraperClass,

		/** Start Padding */
		gridLayoutGlobalPaddingUnits,
		gridLayoutGlobalPaddingDesktop,
		gridLayoutGlobalPaddingTablet,
		gridLayoutGlobalPaddingMobile,
		gridLayoutGlobalPaddingLink,

		/** Margin */
		gridLayoutGlobalMarginUnits,
		gridLayoutGlobalMarginDesktop,
		gridLayoutGlobalMarginTablet,
		gridLayoutGlobalMarginMobile,
		gridLayoutGlobalMarginLink,

		/** Background */
		gridLayoutGlobalBgColorTypeSwitcher,
		gridLayoutGlobalBgColorType,
		gridLayoutGlobalBgHoverColorType,
		gridLayoutGlobalBgColor,
		gridLayoutGlobalBgHoverColor,
		gridLayoutGlobalBgGradientColor,
		gridLayoutGlobalBgHoverGradientColor,
		gridLayoutGlobalBgCustomGradientColorSwitcher,
		gridLayoutGlobalBgCustomGradientColor,
		gridLayoutGlobalBgHoverCustomGradientColorSwitcher,
		gridLayoutGlobalBgHoverCustomGradientColor,

		/** Border */
		gridLayoutGlobalBorder,
		gridLayoutGlobalBorderColorSwitcher,
		gridLayoutGlobalBorderColor,
		gridLayoutGlobalBorderHoverColor,
		gridLayoutGlobalBorderUnits,
		gridLayoutGlobalBorderDesktop,
		gridLayoutGlobalBorderTablet,
		gridLayoutGlobalBorderMobile,
		gridLayoutGlobalBorderLink,

		/** Border Radius */
		gridLayoutGlobalBorderRadiusUnits,
		gridLayoutGlobalBorderRadiusDesktop,
		gridLayoutGlobalBorderRadiusTablet,
		gridLayoutGlobalBorderRadiusMobile,
		gridLayoutGlobalBorderRadiusLink,

		/** Box Shadow */
		gridLayoutGlobalBoxShadowSwitcher,
		gridLayoutGlobalBoxShadowValues,
		gridLayoutGlobalBoxShadowCssValue,
		gridLayoutGlobalBoxShadowHoverValues,
		gridLayoutGlobalBoxShadowHoverCssValue,

		/** Custom CSS */
		gridLayoutGlobalCustomCSS,
		/** End Global Setting */
	} = attributes;

	const layoutStore = resolvedLayouts ?? layouts;

	if (!blockID) {
		return "";
	}

	const selectors = getContainerSelectors(blockID);
	const colsDesktop = getBreakpointNumber(null, "Desktop", "cols");
	const colsTablet = getBreakpointNumber(null, "Tablet", "cols");
	const colsMobile = getBreakpointNumber(null, "Mobile", "cols");
	const gutterDesktop = getBreakpointNumber(gutter, "Desktop", "gutter");
	const gutterTablet = getBreakpointNumber(gutter, "Tablet", "gutter");
	const gutterMobile = getBreakpointNumber(gutter, "Mobile", "gutter");
	const desktopGapUnit = gutterUnits?.Desktop || "px";
	const tabletGapUnit = gutterUnits?.Tablet || "px";
	const mobileGapUnit = gutterUnits?.Mobile || "px";

	const desktopRows = getLayoutRowCount(layoutStore?.Desktop || []);
	const tabletRows = getLayoutRowCount(layoutStore?.Tablet || []);
	const mobileRows = getLayoutRowCount(layoutStore?.Mobile || []);

	const gridLayoutGlobalPaddingDesktopWidth = `${gridLayoutGlobalPaddingDesktop?.top}${gridLayoutGlobalPaddingUnits?.Desktop} ${gridLayoutGlobalPaddingDesktop?.right}${gridLayoutGlobalPaddingUnits?.Desktop} ${gridLayoutGlobalPaddingDesktop?.bottom}${gridLayoutGlobalPaddingUnits?.Desktop} ${gridLayoutGlobalPaddingDesktop?.left}${gridLayoutGlobalPaddingUnits?.Desktop}`;
	const gridLayoutGlobalPaddingTabletWidth = `${gridLayoutGlobalPaddingTablet?.top}${gridLayoutGlobalPaddingUnits?.Tablet} ${gridLayoutGlobalPaddingTablet?.right}${gridLayoutGlobalPaddingUnits?.Tablet} ${gridLayoutGlobalPaddingTablet?.bottom}${gridLayoutGlobalPaddingUnits?.Tablet} ${gridLayoutGlobalPaddingTablet?.left}${gridLayoutGlobalPaddingUnits?.Tablet}`;
	const gridLayoutGlobalPaddingMobileWidth = `${gridLayoutGlobalPaddingMobile?.top}${gridLayoutGlobalPaddingUnits?.Mobile} ${gridLayoutGlobalPaddingMobile?.right}${gridLayoutGlobalPaddingUnits?.Mobile} ${gridLayoutGlobalPaddingMobile?.bottom}${gridLayoutGlobalPaddingUnits?.Mobile} ${gridLayoutGlobalPaddingMobile?.left}${gridLayoutGlobalPaddingUnits?.Mobile}`;

	const gridLayoutGlobalMarginDesktopWidth = `${gridLayoutGlobalMarginDesktop?.top}${gridLayoutGlobalMarginUnits?.Desktop} ${gridLayoutGlobalMarginDesktop?.right}${gridLayoutGlobalMarginUnits?.Desktop} ${gridLayoutGlobalMarginDesktop?.bottom}${gridLayoutGlobalMarginUnits?.Desktop} ${gridLayoutGlobalMarginDesktop?.left}${gridLayoutGlobalMarginUnits?.Desktop}`;
	const gridLayoutGlobalMarginTabletWidth = `${gridLayoutGlobalMarginTablet?.top}${gridLayoutGlobalMarginUnits?.Tablet} ${gridLayoutGlobalMarginTablet?.right}${gridLayoutGlobalMarginUnits?.Tablet} ${gridLayoutGlobalMarginTablet?.bottom}${gridLayoutGlobalMarginUnits?.Tablet} ${gridLayoutGlobalMarginTablet?.left}${gridLayoutGlobalMarginUnits?.Tablet}`;
	const gridLayoutGlobalMarginMobileWidth = `${gridLayoutGlobalMarginMobile?.top}${gridLayoutGlobalMarginUnits?.Mobile} ${gridLayoutGlobalMarginMobile?.right}${gridLayoutGlobalMarginUnits?.Mobile} ${gridLayoutGlobalMarginMobile?.bottom}${gridLayoutGlobalMarginUnits?.Mobile} ${gridLayoutGlobalMarginMobile?.left}${gridLayoutGlobalMarginUnits?.Mobile}`;

	const gridLayoutGlobalBorderDesktopWidth = `${gridLayoutGlobalBorderDesktop?.top}${gridLayoutGlobalBorderUnits?.Desktop} ${gridLayoutGlobalBorderDesktop?.right}${gridLayoutGlobalBorderUnits?.Desktop} ${gridLayoutGlobalBorderDesktop?.bottom}${gridLayoutGlobalBorderUnits?.Desktop} ${gridLayoutGlobalBorderDesktop?.left}${gridLayoutGlobalBorderUnits?.Desktop}`;
	const gridLayoutGlobalBorderTabletWidth = `${gridLayoutGlobalBorderTablet?.top}${gridLayoutGlobalBorderUnits?.Tablet} ${gridLayoutGlobalBorderTablet?.right}${gridLayoutGlobalBorderUnits?.Tablet} ${gridLayoutGlobalBorderTablet?.bottom}${gridLayoutGlobalBorderUnits?.Tablet} ${gridLayoutGlobalBorderTablet?.left}${gridLayoutGlobalBorderUnits?.Tablet}`;
	const gridLayoutGlobalBorderMobileWidth = `${gridLayoutGlobalBorderMobile?.top}${gridLayoutGlobalBorderUnits?.Mobile} ${gridLayoutGlobalBorderMobile?.right}${gridLayoutGlobalBorderUnits?.Mobile} ${gridLayoutGlobalBorderMobile?.bottom}${gridLayoutGlobalBorderUnits?.Mobile} ${gridLayoutGlobalBorderMobile?.left}${gridLayoutGlobalBorderUnits?.Mobile}`;

	const gridLayoutGlobalBorderRadiusDesktopWidth = `${gridLayoutGlobalBorderRadiusDesktop?.top}${gridLayoutGlobalBorderRadiusUnits?.Desktop} ${gridLayoutGlobalBorderRadiusDesktop?.right}${gridLayoutGlobalBorderRadiusUnits?.Desktop} ${gridLayoutGlobalBorderRadiusDesktop?.bottom}${gridLayoutGlobalBorderRadiusUnits?.Desktop} ${gridLayoutGlobalBorderRadiusDesktop?.left}${gridLayoutGlobalBorderRadiusUnits?.Desktop}`;
	const gridLayoutGlobalBorderRadiusTabletWidth = `${gridLayoutGlobalBorderRadiusTablet?.top}${gridLayoutGlobalBorderRadiusUnits?.Tablet} ${gridLayoutGlobalBorderRadiusTablet?.right}${gridLayoutGlobalBorderRadiusUnits?.Tablet} ${gridLayoutGlobalBorderRadiusTablet?.bottom}${gridLayoutGlobalBorderRadiusUnits?.Tablet} ${gridLayoutGlobalBorderRadiusTablet?.left}${gridLayoutGlobalBorderRadiusUnits?.Tablet}`;
	const gridLayoutGlobalBorderRadiusMobileWidth = `${gridLayoutGlobalBorderRadiusMobile?.top}${gridLayoutGlobalBorderRadiusUnits?.Mobile} ${gridLayoutGlobalBorderRadiusMobile?.right}${gridLayoutGlobalBorderRadiusUnits?.Mobile} ${gridLayoutGlobalBorderRadiusMobile?.bottom}${gridLayoutGlobalBorderRadiusUnits?.Mobile} ${gridLayoutGlobalBorderRadiusMobile?.left}${gridLayoutGlobalBorderRadiusUnits?.Mobile}`;

	const gridLayoutBlockStyle = `
		${selectors.wrapper} {
			position: relative;
			/* Global Styles */
			${gridLayoutGlobalPaddingDesktopWidth && gridLayoutGlobalPaddingDesktop?.top ? `padding: ${gridLayoutGlobalPaddingDesktopWidth};` : ""}
			${gridLayoutGlobalMarginDesktopWidth && gridLayoutGlobalMarginDesktop?.top ? `margin: ${gridLayoutGlobalMarginDesktopWidth};` : ""}
			${gridLayoutGlobalBorder ? `border: ${gridLayoutGlobalBorder};` : ""}
			${gridLayoutGlobalBorderColor ? `border-color: ${gridLayoutGlobalBorderColor};` : ""}
			${gridLayoutGlobalBorderDesktopWidth && gridLayoutGlobalBorderDesktop?.top ? `border-width: ${gridLayoutGlobalBorderDesktopWidth};` : ""}
			${gridLayoutGlobalBorderRadiusDesktopWidth && gridLayoutGlobalBorderRadiusDesktop?.top ? `border-radius: ${gridLayoutGlobalBorderRadiusDesktopWidth};` : ""}
			${gridLayoutGlobalBoxShadowCssValue ? `box-shadow: ${gridLayoutGlobalBoxShadowCssValue};` : ""}
			${gridLayoutGlobalZIndex?.Desktop ? `z-index: ${gridLayoutGlobalZIndex?.Desktop};` : ""}
			${
				gridLayoutGlobalBgColorType === "gradient"
					? `background: ${
							gridLayoutGlobalBgCustomGradientColorSwitcher && gridLayoutGlobalBgCustomGradientColor
								? gridLayoutGlobalBgCustomGradientColor
								: gridLayoutGlobalBgGradientColor
						};`
					: gridLayoutGlobalBgColor
					? `background: ${gridLayoutGlobalBgColor};`
					: ""
			}
			transition: all .3s ease-in-out;
		}

		${selectors.wrapper}:hover {
			${gridLayoutGlobalBorderHoverColor ? `border-color: ${gridLayoutGlobalBorderHoverColor};` : ""}
			${gridLayoutGlobalBoxShadowHoverCssValue ? `box-shadow: ${gridLayoutGlobalBoxShadowHoverCssValue};` : ""}
			${
				gridLayoutGlobalBgHoverColorType === "gradient"
					? `background: ${
							gridLayoutGlobalBgHoverCustomGradientColorSwitcher && gridLayoutGlobalBgHoverCustomGradientColor
								? gridLayoutGlobalBgHoverCustomGradientColor
								: gridLayoutGlobalBgHoverGradientColor
						};`
					: gridLayoutGlobalBgHoverColor
					? `background: ${gridLayoutGlobalBgHoverColor};`
					: ""
			}
		}

		${selectors.grid} {
			display: grid;
			grid-template-columns: repeat(${colsDesktop}, 1fr);
			${desktopRows > 0 ? `grid-template-rows: repeat(${desktopRows}, auto);` : ""}
			gap: ${gutterDesktop}${desktopGapUnit};
			align-items: stretch;
		}

		${generateLayoutRules(blockID, layoutStore?.Desktop || [])}

		@media only screen and (max-width: 1024px) {
			${selectors.wrapper} {
				/* Global Tablet Styles */
				${gridLayoutGlobalPaddingTabletWidth && gridLayoutGlobalPaddingTablet?.top ? `padding: ${gridLayoutGlobalPaddingTabletWidth};` : ""}
				${gridLayoutGlobalMarginTabletWidth && gridLayoutGlobalMarginTablet?.top ? `margin: ${gridLayoutGlobalMarginTabletWidth};` : ""}
				${gridLayoutGlobalBorderTabletWidth && gridLayoutGlobalBorderTablet?.top ? `border-width: ${gridLayoutGlobalBorderTabletWidth};` : ""}
				${gridLayoutGlobalBorderRadiusTabletWidth && gridLayoutGlobalBorderRadiusTablet?.top ? `border-radius: ${gridLayoutGlobalBorderRadiusTabletWidth};` : ""}
				${gridLayoutGlobalZIndex?.Tablet ? `z-index: ${gridLayoutGlobalZIndex?.Tablet};` : ""}
			}

			${selectors.grid} {
				grid-template-columns: repeat(${colsTablet}, 1fr);
				${tabletRows > 0 ? `grid-template-rows: repeat(${tabletRows}, auto);` : ""}
				gap: ${gutterTablet}${tabletGapUnit};
			}

			${generateLayoutRules(blockID, layoutStore?.Tablet || [])}
		}

		@media only screen and (max-width: 767px) {
			${selectors.wrapper} {
				/* Global Mobile Styles */
				${gridLayoutGlobalPaddingMobileWidth && gridLayoutGlobalPaddingMobile?.top ? `padding: ${gridLayoutGlobalPaddingMobileWidth};` : ""}
				${gridLayoutGlobalMarginMobileWidth && gridLayoutGlobalMarginMobile?.top ? `margin: ${gridLayoutGlobalMarginMobileWidth};` : ""}
				${gridLayoutGlobalBorderMobileWidth && gridLayoutGlobalBorderMobile?.top ? `border-width: ${gridLayoutGlobalBorderMobileWidth};` : ""}
				${gridLayoutGlobalBorderRadiusMobileWidth && gridLayoutGlobalBorderRadiusMobile?.top ? `border-radius: ${gridLayoutGlobalBorderRadiusMobileWidth};` : ""}
				${gridLayoutGlobalZIndex?.Mobile ? `z-index: ${gridLayoutGlobalZIndex?.Mobile};` : ""}
			}

			${selectors.grid} {
				grid-template-columns: repeat(${colsMobile}, 1fr);
				${mobileRows > 0 ? `grid-template-rows: repeat(${mobileRows}, auto);` : ""}
				gap: ${gutterMobile}${mobileGapUnit};
			}

			${generateLayoutRules(blockID, layoutStore?.Mobile || [])}
		}
	`;

	const customCss = getCustomCss(gridLayoutGlobalCustomCSS, `.${blockID} `);
	return `${gridLayoutBlockStyle} ${customCss}`.replace(/\s+/g, " ").trim();
};

export default generateGridLayoutStyle;
