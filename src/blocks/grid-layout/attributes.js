const attributes = {
	blockID: {
		type: 'string',
		default: ''
	},
	blockStyle: {
		type: 'string',
		default: ''
	},

	// Responsive columns
	cols: {
		type: 'object',
		default: {
			Desktop: '12',
			Tablet: '8',
			Mobile: '4'
		}
	},

	// Responsive row height (px)
	rowHeight: {
		type: 'object',
		default: {
			Desktop: '40',
			Tablet: '35',
			Mobile: '30'
		}
	},
	rowHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	// Responsive gutter / gap (px)
	gutter: {
		type: 'object',
		default: {
			Desktop: '10',
			Tablet: '8',
			Mobile: '6'
		}
	},
	gutterUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	// start Responsive container padding for layout/content grid parity
	containerPaddingX: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	containerPaddingXUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	containerPaddingY: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	containerPaddingYUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	/** end Responsive container padding */

	/** Start Default item width */
	defaultItemWidth: {
		type: 'object',
		default: {
			Desktop: '3',
			Tablet: '4',
			Mobile: '4'
		}
	},
	/** End Default item width */

	// Layout behavior
	compactType: {
		type: 'string',
		default: 'vertical'
	},
	allowOverlap: {
		type: 'boolean',
		default: false
	},

	// Master layout store — per-breakpoint positions
	layouts: {
		type: 'object',
		default: {
			Desktop: [],
			Tablet: [],
			Mobile: []
		}
	},
};

export default attributes;
