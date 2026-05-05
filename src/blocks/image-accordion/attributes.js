import { defaultImageAccordionPreset } from './presets';

const attributes = {
	// Core attributes
	blockID: {
		type: 'string',
		default: '',
	},
	blockStyle: {
		type: 'string',
		default: '',
	},
	blockRoot: {
		type: 'string',
		default: 'frontis_block',
	},
	blockMeta: {
		type: 'object',
	},

	// Preset
	imageAccordionPresetStyle: {
		type: 'string',
		default: 'preset-1',
	},

	// Images array
	images: {
		type: 'array',
		default: defaultImageAccordionPreset.images,
	},

	// Active image index
	activeImageIndex: {
		type: 'number',
		default: 0,
	},

	// Layout Settings
	layoutType: {
		type: 'string',
		default: 'horizontal', // horizontal, vertical, grid, compact
	},

	mainImageWidth: {
		type: 'string',
		default: '60',
	},

	thumbnailAreaWidth: {
		type: 'string',
		default: '40',
	},

	thumbnailLayout: {
		type: 'string',
		default: 'vertical', // vertical, horizontal, grid, horizontal-scroll
	},

	thumbnailSize: {
		type: 'string',
		default: '80',
	},

	// Spacing
	spacing: {
		type: 'string',
		default: '20',
	},

	// Border Radius
	mainImageBorderRadius: {
		type: 'string',
		default: '12',
	},

	thumbnailBorderRadius: {
		type: 'string',
		default: '8',
	},

	// Active Thumbnail Styling
	activeThumbBorderWidth: {
		type: 'string',
		default: '3',
	},

	activeThumbBorderColor: {
		type: 'string',
		default: '#007cba',
	},

	// Content Display
	showTitle: {
		type: 'boolean',
		default: true,
	},

	showDescription: {
		type: 'boolean',
		default: true,
	},

	showIcon: {
		type: 'boolean',
		default: true,
	},

	// Colors
	mainImageBg: {
		type: 'string',
		default: '#f5f5f5',
	},

	descriptionBg: {
		type: 'string',
		default: 'rgba(0, 124, 186, 0.1)',
	},

	descriptionBorder: {
		type: 'string',
		default: '#007cba',
	},

	descriptionBorderWidth: {
		type: 'string',
		default: '3',
	},

	// Typography - Title
	titleFontSize: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '20',
			Mobile: '18',
		},
	},

	titleFontColor: {
		type: 'string',
		default: '#000000',
	},

	titleFontWeight: {
		type: 'string',
		default: '600',
	},

	// Typography - Description
	descriptionFontSize: {
		type: 'object',
		default: {
			Desktop: '14',
			Tablet: '13',
			Mobile: '12',
		},
	},

	descriptionFontColor: {
		type: 'string',
		default: '#666666',
	},

	descriptionFontWeight: {
		type: 'string',
		default: '400',
	},

	// Responsive
	desktopSwitcher: {
		type: 'boolean',
		default: false,
	},

	tabletSwitcher: {
		type: 'boolean',
		default: false,
	},

	mobileSwitcher: {
		type: 'boolean',
		default: false,
	},

	// Global wrapper
	imageAccordionGlobalWraperID: {
		type: 'string',
	},

	imageAccordionGlobalWraperClass: {
		type: 'string',
	},

	// Device type
	deviceType: {
		type: 'string',
		default: 'Desktop',
	},

	// Custom CSS
	customCSS: {
		type: 'string',
		default: '',
	},
};

export default attributes;
