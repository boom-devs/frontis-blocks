const countDownItemWrapperAttributes = {

	/** Start BG Color */
	countDownItemWrapperBgFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	countDownItemWrapperBgFontColor: {
		type: "string",
		default: "#F97255"
	},
	countDownItemWrapperBgFontHoverColor: {
		type: 'string',
		default: "#F97255"
	},
	/** End BG Color */

	/** Start Background Image */
	countDownItemWrapperBackgroundImageEnabled: {
		type: "boolean",
		default: false,
	},
	countDownItemWrapperBackgroundImageUrl: {
		type: "string",
	},
	countDownItemWrapperBackgroundImageAlt: {
		type: "string",
	},
	countDownItemWrapperBackgroundImageID: {
		type: "number",
	},
	countDownItemWrapperBgImagePositionType: {
		type: 'string',
		default: "center center",
	},
	countDownItemWrapperBgImageAttachmentType: {
		type: 'string',
		default: "scroll",
	},
	countDownItemWrapperBgImageRepeatType: {
		type: 'string',
		default: "no-repeat",
	},
	countDownItemWrapperBgImageSizeType: {
		type: 'string',
		default: "auto",
	},
	/** End Background Image */

	/** Start Border Type */
	countDownItemWrapperBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	countDownItemWrapperBorderColor: {
		type: "string",
		default: ""
	},
	countDownItemWrapperBorderHoverColor: {
		type: 'string',
	},
	countDownItemWrapperBorder: {
		type: 'string',
		default: "none",
	},
	countDownItemWrapperBorderTypeUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownItemWrapperBorderTypeDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	countDownItemWrapperBorderTypeTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	countDownItemWrapperBorderTypeMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	countDownItemWrapperBorderTypeLink : {
		type : "boolean",
		default: true
	},
	/** End Border Type */

	/** Start Border Radius */
	countDownItemWrapperBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownItemWrapperBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '15',
			bottom: '15',
			left: '15',
			right: '15',
		},
	},
	countDownItemWrapperBorderRadiusTablet: {
		type: "object",
		default: {
			top: '15',
			bottom: '15',
			left: '15',
			right: '15',
		},
	},
	countDownItemWrapperBorderRadiusMobile: {
		type: "object",
		default: {
			top: '15',
			bottom: '15',
			left: '15',
			right: '15',
		},
	},
	countDownItemWrapperBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	countDownItemWrapperBoxShadowValues: {
		type: 'array',
		default: [],
	},
	countDownItemWrapperBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	/** End Box Shadow */

	/** Start Padding */
	countDownItemWrapperPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownItemWrapperPaddingDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperPaddingTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperPaddingMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	countDownItemWrapperMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownItemWrapperMarginDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperMarginTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperMarginMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

};

export default countDownItemWrapperAttributes;
