import { createHotspot } from './constants';

const attributes = {
	blockId: {
		type: 'string',
		default: '',
	},

	// ─── Image
	image: {
		type: 'object',
		default: {
			id: 0,
			url: '',
			alt: '',
		},
	},
	imageAlt: {
		type: 'string',
		default: '',
	},

	// ─── Layout
	markerPreset: {
		type: 'string',
		default: 'preset-1', // preset-1 | preset-2 | preset-3 | preset-4 | custom
	},

	// ─── Hotspots (repeater)
	hotspots: {
		type: 'array',
		default: [
			createHotspot( {
				id: 'hotspot-1',
				title: 'Point One',
				positionX: 30,
				positionY: 35,
			} ),
			createHotspot( {
				id: 'hotspot-2',
				title: 'Point Two',
				positionX: 68,
				positionY: 60,
			} ),
		],
	},

	// ─── Style: Marker
	markerSize: {
		type: 'number',
		default: 34,
	},
	markerSizeTablet: {
		type: 'number',
		default: '',
	},
	markerSizeMobile: {
		type: 'number',
		default: '',
	},
	markerSizeHover: {
		type: 'number',
		default: '',
	},
	markerColor: {
		type: 'string',
		default: '#ffffff',
	},
	markerColorHover: {
		type: 'string',
		default: '',
	},
	markerBackground: {
		type: 'string',
		default: '#4f46e5',
	},
	markerBackgroundHover: {
		type: 'string',
		default: '',
	},
	markerBorderType: {
		type: 'string',
		default: 'none',
	},
	markerBorderWidth: {
		type: 'number',
		default: 2,
	},
	markerBorderColor: {
		type: 'string',
		default: '',
	},
	markerBorderColorHover: {
		type: 'string',
		default: '',
	},
	markerBorderRadius: {
		type: 'number',
		default: 50,
	},
	// Box shadow (normal)
	markerShadow: {
		type: 'object',
		default: {
			enabled: false,
			horizontal: 0,
			vertical: 4,
			blur: 12,
			spread: 0,
			color: 'rgba(0,0,0,0.25)',
		},
	},
	// Box shadow (hover)
	markerShadowHover: {
		type: 'object',
		default: {
			enabled: false,
			horizontal: 0,
			vertical: 4,
			blur: 16,
			spread: 0,
			color: 'rgba(0,0,0,0.35)',
		},
	},

	// ─── Style: Tooltip
	tooltipBackground: {
		type: 'string',
		default: '#ffffff',
	},
	tooltipTitleColor: {
		type: 'string',
		default: '#111827',
	},
	tooltipDescriptionColor: {
		type: 'string',
		default: '#6b7280',
	},
	tooltipWidth: {
		type: 'number',
		default: 220,
	},
	tooltipWidthTablet: {
		type: 'number',
		default: '',
	},
	tooltipWidthMobile: {
		type: 'number',
		default: '',
	},
	tooltipPaddingTop: {
		type: 'number',
		default: 12,
	},
	tooltipPaddingRight: {
		type: 'number',
		default: 14,
	},
	tooltipPaddingBottom: {
		type: 'number',
		default: 12,
	},
	tooltipPaddingLeft: {
		type: 'number',
		default: 14,
	},
	tooltipPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	tooltipBorderType: {
		type: 'string',
		default: 'none',
	},
	tooltipBorderWidth: {
		type: 'number',
		default: 1,
	},
	tooltipBorderColor: {
		type: 'string',
		default: '#e5e7eb',
	},
	tooltipBorderColorHover: {
		type: 'string',
		default: '',
	},
	tooltipBorderRadius: {
		type: 'number',
		default: 8,
	},
	tooltipShadow: {
		type: 'object',
		default: {
			enabled: true,
			horizontal: 0,
			vertical: 8,
			blur: 24,
			spread: 0,
			color: 'rgba(0,0,0,0.12)',
		},
	},

	// ─── Typography
	titleFontSize: {
		type: 'number',
		default: 14,
	},
	titleFontWeight: {
		type: 'string',
		default: '600',
	},
	titleLineHeight: {
		type: 'number',
		default: 1.4,
	},
	descriptionFontSize: {
		type: 'number',
		default: 13,
	},
	descriptionFontWeight: {
		type: 'string',
		default: '400',
	},
	descriptionLineHeight: {
		type: 'number',
		default: 1.5,
	},
};

export default attributes;
