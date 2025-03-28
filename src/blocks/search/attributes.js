const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	blockStyle: {
		type: 'string',
		default: ''
	},
	searchActive: {
		type: 'boolean',
		default: false
	},
	searchButtonWidth: {
		type: 'object',
		default: {
			Desktop: '88',
			Tablet: '88',
			Mobile: '88'
		}
	},
	searchButtonWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	searchButtonInputFieldWidth: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '100',
			Mobile: '100'
		}
	},
	searchButtonInputFieldWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	}
};

export default attributes;