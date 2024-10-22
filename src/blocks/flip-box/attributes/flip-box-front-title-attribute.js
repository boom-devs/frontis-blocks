const flipBoxFrontTitleAttributes = {
	flipBoxFrontTitle: {
		type: "string",
		default: "Front Title Here"
	},
	flipBoxFrontTitleHeadingTag: {
		type : "string",
		default: "h2"
	},

	/** Start Color */
	flipBoxFrontTitleFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxFrontTitleFontColor: {
		type: "string",
		default: "#0d173bb3"
	},
	flipBoxFrontTitleFontHoverColor: {
		type: 'string',
		default: "#0d173bb3"
	},
	/** End Color */

	/** Start Typography */
	flipBoxFrontTitleFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	flipBoxFrontTitleFontSize: {
		type: 'object',
		default: {
			Desktop: '32',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxFrontTitleFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxFrontTitleFontWeight: {
		type: 'string',
		default: '600'
	},
	flipBoxFrontTitleFontStyle: {
		type: 'string',
		default: ''
	},
	flipBoxFrontTitleTextTransform: {
		type: 'string',
		default: ''
	},
	flipBoxFrontTitleTextDecoration: {
		type: 'string',
		default: ''
	},
	flipBoxFrontTitleLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxFrontTitleLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxFrontTitleLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxFrontTitleLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	/** End Typography */

	/** Start Margin */
	flipBoxFrontTitleMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxFrontTitleMarginDesktop: {
		type: "object",
		default: {
			top: 20,
			bottom: 20,
			left: 0,
			right: 0,
		},
	},
	flipBoxFrontTitleMarginTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxFrontTitleMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxFrontTitleMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

};

export default flipBoxFrontTitleAttributes;
