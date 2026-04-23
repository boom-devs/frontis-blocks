const attributes = {
	blockID: {
		type: 'string',
		default: ''
	},
	blockStyle: {
		type: 'string',
		default: ''
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
