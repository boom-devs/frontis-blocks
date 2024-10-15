const digitAttributes = {
	digitFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	digitFontColor: {
		type: "string",
		default: "#FFFFFF"
	},
	digitFontHoverColor: {
		type: 'string',
		default: "#FFFFFF"
	},
	digitFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	digitFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	digitFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	digitFontWeight: {
		type: 'string',
		default: ''
	},
	digitFontStyle: {
		type: 'string',
		default: ''
	},
	digitTextTransform: {
		type: 'string',
		default: ''
	},
	digitTextDecoration: {
		type: 'string',
		default: ''
	},
	digitLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	digitLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	digitLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	digitLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
};

export default digitAttributes;
