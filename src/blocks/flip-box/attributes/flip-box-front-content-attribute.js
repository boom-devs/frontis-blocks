const flipBoxFrontContentAttributes = {
	flipBoxFrontContent: {
		type: "string",
		default: "Corrupti non maiores atque. Repellendus nulla ratione omnis possimus. sit numquam minima ut harum eaque."
	},
	/** Start Color */
	flipBoxFrontContentFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxFrontContentFontColor: {
		type: "string",
		default: "#0d173bb3"
	},
	flipBoxFrontContentFontHoverColor: {
		type: 'string',
		default: "#0d173bb3"
	},
	/** End Color */

	/** Start Typography */
	flipBoxFrontContentFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	flipBoxFrontContentFontSize: {
		type: 'object',
		default: {
			Desktop: '18',
			Tablet: '16',
			Mobile: '16'
		}
	},
	flipBoxFrontContentFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxFrontContentFontWeight: {
		type: 'string',
		default: '400'
	},
	flipBoxFrontContentFontStyle: {
		type: 'string',
		default: ''
	},
	flipBoxFrontContentTextTransform: {
		type: 'string',
		default: ''
	},
	flipBoxFrontContentTextDecoration: {
		type: 'string',
		default: ''
	},
	flipBoxFrontContentLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxFrontContentLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxFrontContentLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxFrontContentLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	/** End Typography */

	/** Start Margin */
	flipBoxFrontContentMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxFrontContentMarginDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxFrontContentMarginTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxFrontContentMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxFrontContentMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

};

export default flipBoxFrontContentAttributes;
