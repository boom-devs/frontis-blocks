/**
 * Grid Layout Block - Style Generation
 * Returns Dynamic Generated CSS
 */

/**
 * Generate block styles from attributes
 * @param {Object} attributes - Block attributes
 * @returns {string} CSS string
 */
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

	// Parse responsive values
	const colsDesktop = Number(cols?.Desktop) || 12;
	const colsTablet = Number(cols?.Tablet) || 8;
	const colsMobile = Number(cols?.Mobile) || 4;

	const rowHeightDesktop = Number(rowHeight?.Desktop) || 40;
	const rowHeightTablet = Number(rowHeight?.Tablet) || 35;
	const rowHeightMobile = Number(rowHeight?.Mobile) || 30;
	const rhUnitDesktop = rowHeightUnits?.Desktop || 'px';
	const rhUnitTablet = rowHeightUnits?.Tablet || 'px';
	const rhUnitMobile = rowHeightUnits?.Mobile || 'px';

	const gutterDesktop = Number(gutter?.Desktop) || 10;
	const gutterTablet = Number(gutter?.Tablet) || 8;
	const gutterMobile = Number(gutter?.Mobile) || 6;
	const gUnitDesktop = gutterUnits?.Desktop || 'px';
	const gUnitTablet = gutterUnits?.Tablet || 'px';
	const gUnitMobile = gutterUnits?.Mobile || 'px';

	// Generate CSS
	let css = `
		.${blockID}.fb-grid-layout-container,
		.${blockID} .fb-grid-layout-container {
			display: grid;
			grid-template-columns: repeat(${colsDesktop}, 1fr);
			grid-auto-rows: ${rowHeightDesktop}${rhUnitDesktop};
			gap: ${gutterDesktop}${gUnitDesktop};
		}
	`;

	// Desktop item positioning
	if (layouts?.Desktop?.length > 0) {
		layouts.Desktop.forEach(item => {
			css += `
				.${blockID}.fb-grid-layout-container > [data-grid-id="${item.i}"],
				.${blockID} .fb-grid-layout-container > [data-grid-id="${item.i}"] { 
					grid-column: ${item.x + 1} / span ${item.w}; 
					grid-row: ${item.y + 1} / span ${item.h}; 
				}\n`;
		});
	}

	// Tablet responsive override
	if (layouts?.Tablet?.length > 0 || colsTablet || rowHeightTablet || gutterTablet) {
		css += `@media (max-width: 1024px) {
			.${blockID}.fb-grid-layout-container,
			.${blockID} .fb-grid-layout-container {
				grid-template-columns: repeat(${colsTablet}, 1fr);
				grid-auto-rows: ${rowHeightTablet}${rhUnitTablet};
				gap: ${gutterTablet}${gUnitTablet};
			}
		`;
		if (layouts?.Tablet?.length > 0) {
			layouts.Tablet.forEach(item => {
				css += `
					.${blockID}.fb-grid-layout-container > [data-grid-id="${item.i}"],
					.${blockID} .fb-grid-layout-container > [data-grid-id="${item.i}"] { 
						grid-column: ${item.x + 1} / span ${item.w}; 
						grid-row: ${item.y + 1} / span ${item.h}; 
					}\n`;
			});
		}
		css += `}\n`;
	}

	// Mobile responsive override
	if (layouts?.Mobile?.length > 0 || colsMobile || rowHeightMobile || gutterMobile) {
		css += `@media (max-width: 767px) {
			.${blockID}.fb-grid-layout-container,
			.${blockID} .fb-grid-layout-container {
				grid-template-columns: repeat(${colsMobile}, 1fr);
				grid-auto-rows: ${rowHeightMobile}${rhUnitMobile};
				gap: ${gutterMobile}${gUnitMobile};
			}
		`;
		if (layouts?.Mobile?.length > 0) {
			layouts.Mobile.forEach(item => {
				css += `
					.${blockID}.fb-grid-layout-container > [data-grid-id="${item.i}"],
					.${blockID} .fb-grid-layout-container > [data-grid-id="${item.i}"] { 
						grid-column: ${item.x + 1} / span ${item.w}; 
						grid-row: ${item.y + 1} / span ${item.h}; 
					}\n`;
			});
		}
		css += `}\n`;
	}

	return css.replace(/\s+/g, ' ').trim();
}

export default generateGridLayoutStyle;
