// store/actions.js
export const setColors = (colors) => ({
	type: 'SET_COLORS',
	colors: Array.isArray(colors) ? colors : [],
});

export const setShadeStep = (slug, step) => ({
	type: 'SET_SHADE_STEP',
	slug,
	step,
});

export const setTypographies = (typographies) => ({
	type: 'SET_TYPOGRAPHIES',
	typographies: Array.isArray(typographies) ? typographies : [],
});
