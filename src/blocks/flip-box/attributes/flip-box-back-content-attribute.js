const flipBoxBackContentAttributes = {
	flipBoxBackContent: {
		type: "string",
		default: "Corrupti non maiores atque. Repellendus nulla ratione omnis possimus. sit numquam minima ut harum eaque."
	},
	/** Start Color */
	flipBoxBackContentFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxBackContentFontColor: {
		type: "string",
		default: "#0d173bb3"
	},
	flipBoxBackContentFontHoverColor: {
		type: 'string',
		default: "#0d173bb3"
	},
	/** End Color */

	/** Start Typography */
	flipBoxBackContentFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	flipBoxBackContentFontSize: {
		type: 'object',
		default: {
			Desktop: '18',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxBackContentFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackContentFontWeight: {
		type: 'string',
		default: '400'
	},
	flipBoxBackContentFontStyle: {
		type: 'string',
		default: ''
	},
	flipBoxBackContentTextTransform: {
		type: 'string',
		default: ''
	},
	flipBoxBackContentTextDecoration: {
		type: 'string',
		default: ''
	},
	flipBoxBackContentLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxBackContentLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackContentLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxBackContentLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	/** End Typography */

	/** Start Margin */
	flipBoxBackContentMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxBackContentMarginDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackContentMarginTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackContentMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxBackContentMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

};

export default flipBoxBackContentAttributes;
