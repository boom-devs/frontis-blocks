/**
 * Grid Layout Block - Style Generation
 * Returns Dynamic Generated CSS
 */

const DEFAULT_GRID_SETTINGS = {
	Desktop: { cols: 12, rowHeight: 40, gutter: 10 },
	Tablet: { cols: 8, rowHeight: 35, gutter: 8 },
	Mobile: { cols: 4, rowHeight: 30, gutter: 6 },
};

const getBreakpointNumber = (values, breakpoint, settingKey) =>
	Number(values?.[breakpoint]) || DEFAULT_GRID_SETTINGS[breakpoint][settingKey];

const getContainerSelectors = (blockID) => [
	`.${blockID}.fb-grid-layout-container`,
	`.${blockID} .grid-content-layer.fb-grid-layout-container`,
];

const getItemSelectors = (blockID, itemId) => [
	`.${blockID}.fb-grid-layout-container > [data-grid-id="${itemId}"]`,
	`.${blockID} .grid-content-layer.fb-grid-layout-container > [data-grid-id="${itemId}"]`,
];

const appendLayoutRules = (css, blockID, layoutItems = []) =>
	layoutItems.reduce((nextCss, item) => {
		const x = Math.max(Number(item?.x) || 0, 0);
		const y = Math.max(Number(item?.y) || 0, 0);
		const w = Math.max(Number(item?.w) || 1, 1);
		const h = Math.max(Number(item?.h) || 1, 1);

		nextCss += `
			${getItemSelectors(blockID, item.i).join(", ")} {
				grid-column: ${x + 1} / span ${w};
				grid-row: ${y + 1} / span ${h};
			}
		`;

		return nextCss;
	}, css);

const generateGridLayoutStyle = (attributes) => {
	const {
		blockID,
		cols,
		rowHeight,
		rowHeightUnits,
		gutter,
		gutterUnits,
		layouts,
	} = attributes;

	if (!blockID) {
		return "";
	}

	const containerSelectors = getContainerSelectors(blockID);
	const colsDesktop = getBreakpointNumber(cols, "Desktop", "cols");
	const colsTablet = getBreakpointNumber(cols, "Tablet", "cols");
	const colsMobile = getBreakpointNumber(cols, "Mobile", "cols");
	const rowHeightDesktop = getBreakpointNumber(
		rowHeight,
		"Desktop",
		"rowHeight",
	);
	const rowHeightTablet = getBreakpointNumber(rowHeight, "Tablet", "rowHeight");
	const rowHeightMobile = getBreakpointNumber(rowHeight, "Mobile", "rowHeight");
	const gutterDesktop = getBreakpointNumber(gutter, "Desktop", "gutter");
	const gutterTablet = getBreakpointNumber(gutter, "Tablet", "gutter");
	const gutterMobile = getBreakpointNumber(gutter, "Mobile", "gutter");
	const desktopUnit = rowHeightUnits?.Desktop || "px";
	const tabletUnit = rowHeightUnits?.Tablet || "px";
	const mobileUnit = rowHeightUnits?.Mobile || "px";
	const desktopGapUnit = gutterUnits?.Desktop || "px";
	const tabletGapUnit = gutterUnits?.Tablet || "px";
	const mobileGapUnit = gutterUnits?.Mobile || "px";

	let css = `
		${containerSelectors.join(", ")} {
			display: grid;
			grid-template-columns: repeat(${colsDesktop}, 1fr);
			grid-auto-rows: ${rowHeightDesktop}${desktopUnit};
			gap: ${gutterDesktop}${desktopGapUnit};
		}
	`;

	css = appendLayoutRules(css, blockID, layouts?.Desktop || []);

	css += `
		@media (max-width: 1024px) {
			${containerSelectors.join(", ")} {
				grid-template-columns: repeat(${colsTablet}, 1fr);
				grid-auto-rows: ${rowHeightTablet}${tabletUnit};
				gap: ${gutterTablet}${tabletGapUnit};
			}
	`;
	css = appendLayoutRules(css, blockID, layouts?.Tablet || []);
	css += `
		}
		@media (max-width: 767px) {
			${containerSelectors.join(", ")} {
				grid-template-columns: repeat(${colsMobile}, 1fr);
				grid-auto-rows: ${rowHeightMobile}${mobileUnit};
				gap: ${gutterMobile}${mobileGapUnit};
			}
	`;
	css = appendLayoutRules(css, blockID, layouts?.Mobile || []);
	css += `
		}
	`;

	return css.replace(/\s+/g, " ").trim();
};

export default generateGridLayoutStyle;
