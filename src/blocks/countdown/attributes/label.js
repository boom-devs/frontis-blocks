const labelAttributes = {
	labelFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	labelFontColor: {
		type: "string",
		default: "#FFFFFF"
	},
	labelFontHoverColor: {
		type: 'string',
		default: "#FFFFFF"
	},
	labelFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	labelFontSize: {
		type: 'object',
		default: {
			Desktop: '14',
			Tablet: '',
			Mobile: ''
		}
	},
	labelFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	labelFontWeight: {
		type: 'string',
		default: ''
	},
	labelFontStyle: {
		type: 'string',
		default: ''
	},
	labelTextTransform: {
		type: 'string',
		default: ''
	},
	labelTextDecoration: {
		type: 'string',
		default: ''
	},
	labelLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	labelLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	labelLineHeight: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '',
			Mobile: ''
		}
	},
	labelLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
};

export default labelAttributes;
