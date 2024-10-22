const flipBoxFrontIconAttributes = {

	flipBoxFrontIconMediaSwitcher : {
		type: "string",
		default: "icon"
	},
	flipBoxFrontIconMediaUrl: {
		type: 'string',
		default: ''
	},
	flipBoxFrontIcon: {
		type: 'string',
		default: 'lightbulb',
	},

	// Icon Size
	flipBoxFrontIconSize: {
		type: 'object',
		default: {
			Desktop: '40',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxFrontIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},


	/** Start Color */
	flipBoxFrontIconFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxFrontIconFontColor: {
		type: "string",
		default: "#ffffff"
	},
	flipBoxFrontIconFontHoverColor: {
		type: 'string',
		default: "#ffffff"
	},
	/** End Color */

	/** Start BG Color */
	flipBoxFrontIconBgFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxFrontIconBgFontColor: {
		type: "string",
		default: "#0d173bb3"
	},
	flipBoxFrontIconBgFontHoverColor: {
		type: 'string',
		default: "#0d173bb3"
	},
	/** End BG Color */

	/** Start Margin */
	flipBoxFrontIconMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxFrontIconMarginDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxFrontIconMarginTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxFrontIconMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxFrontIconMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Padding */
	flipBoxFrontIconPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxFrontIconPaddingDesktop: {
		type: "object",
		default: {
			top: '20',
			bottom: '20',
			left: '20',
			right: '20',
		},
	},
	flipBoxFrontIconPaddingTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxFrontIconPaddingMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxFrontIconPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Border Type */
	flipBoxFrontIconBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxFrontIconBorderColor: {
		type: "string",
		default: ""
	},
	flipBoxFrontIconBorderHoverColor: {
		type: 'string',
	},
	flipBoxFrontIconBorder: {
		type: 'string',
		default: "none",
	},
	flipBoxFrontIconBorderTypeUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxFrontIconBorderTypeDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxFrontIconBorderTypeTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxFrontIconBorderTypeMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxFrontIconBorderTypeLink : {
		type : "boolean",
		default: true
	},
	/** End Border Type */

	/** Start Border Radius */
	flipBoxFrontIconBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxFrontIconBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '500',
			bottom: '500',
			left: '500',
			right: '500',
		},
	},
	flipBoxFrontIconBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxFrontIconBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxFrontIconBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

};

export default flipBoxFrontIconAttributes;
