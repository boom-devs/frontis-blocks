const counterNumberTypographyAttributes = {
	counterNumberFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	counterNumberFontColor: {
		type: "string",
		default: "#0D173B"
	},
	counterNumberFontHoverColor: {
		type: 'string',
		default: "#0D173B"
	},
	counterNumberFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	counterNumberFontSize: {
		type: 'object',
		default: {
			Desktop: '62',
			Tablet: '58',
			Mobile: '52'
		}
	},
	counterNumberFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterNumberFontWeight: {
		type: 'string',
		default: '700'
	},
	counterNumberFontStyle: {
		type: 'string',
		default: ''
	},
	counterNumberTextTransform: {
		type: 'string',
		default: ''
	},
	counterNumberTextDecoration: {
		type: 'string',
		default: ''
	},
	counterNumberLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	counterNumberLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterNumberLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	counterNumberLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
};

export default counterNumberTypographyAttributes;
