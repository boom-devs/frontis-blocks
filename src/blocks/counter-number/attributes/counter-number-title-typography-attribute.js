const counterNumberTitleTypographyAttributes = {
	counterNumberTitleFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	counterNumberTitleFontColor: {
		type: "string",
		default: "#0d173bb3"
	},
	counterNumberTitleFontHoverColor: {
		type: 'string',
		default: "#0d173bb3"
	},
	counterNumberTitleFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	counterNumberTitleFontSize: {
		type: 'object',
		default: {
			Desktop: '18',
			Tablet: '16',
			Mobile: '16'
		}
	},
	counterNumberTitleFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterNumberTitleFontWeight: {
		type: 'string',
		default: '400'
	},
	counterNumberTitleFontStyle: {
		type: 'string',
		default: ''
	},
	counterNumberTitleTextTransform: {
		type: 'string',
		default: ''
	},
	counterNumberTitleTextDecoration: {
		type: 'string',
		default: ''
	},
	counterNumberTitleLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	counterNumberTitleLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterNumberTitleLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	counterNumberTitleLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
};

export default counterNumberTitleTypographyAttributes;
