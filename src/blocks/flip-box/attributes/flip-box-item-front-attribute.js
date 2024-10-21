const flipBoxItemFrontAttributes = {
	/** Start Size */
	flipBoxItemFrontSize: {
		type: 'object',
		default: {
			Desktop: '364',
			Tablet: '',
			Mobile: ''
		}
	},
	flipBoxItemFrontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Size */

	/** Start BG Color */
	flipBoxItemFrontBgFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxItemFrontBgFontColor: {
		type: "string",
		default: "#efeff1"
	},
	flipBoxItemFrontBgFontHoverColor: {
		type: 'string',
		default: "#efeff1"
	},
	/** End BG Color */

	/** Start Padding */
	flipBoxItemFrontPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxItemFrontPaddingDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxItemFrontPaddingTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxItemFrontPaddingMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxItemFrontPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Border Type */
	flipBoxItemFrontBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	flipBoxItemFrontBorderColor: {
		type: "string",
		default: ""
	},
	flipBoxItemFrontBorderHoverColor: {
		type: 'string',
	},
	flipBoxItemFrontBorder: {
		type: 'string',
		default: "none",
	},
	flipBoxItemFrontBorderTypeUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxItemFrontBorderTypeDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxItemFrontBorderTypeTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxItemFrontBorderTypeMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	flipBoxItemFrontBorderTypeLink : {
		type : "boolean",
		default: true
	},
	/** End Border Type */

	/** Start Border Radius */
	flipBoxItemFrontBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBoxItemFrontBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxItemFrontBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxItemFrontBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	flipBoxItemFrontBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

};

export default flipBoxItemFrontAttributes;
