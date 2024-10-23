import {SELECT_BG_REPEAT_TYPE} from "@Blocks/flip-box/constants/constants";

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

	/** Start Background Image */
	flipBoxItemFrontBackgroundImageEnabled: {
		type: "boolean",
		default: false,
	},
	flipBoxItemFrontBackgroundImageUrl: {
		type: "string",
	},
	flipBoxItemFrontBackgroundImageAlt: {
		type: "string",
	},
	flipBoxItemFrontBackgroundImageID: {
		type: "number",
	},
	flipBoxItemFrontBgImagePositionType: {
		type: 'string',
		default: "center center",
	},
	flipBoxItemFrontBgImageAttachmentType: {
		type: 'string',
		default: "scroll",
	},
	flipBoxItemFrontBgImageRepeatType: {
		type: 'string',
		default: "no-repeat",
	},
	flipBoxItemFrontBgImageSizeType: {
		type: 'string',
		default: "auto",
	},
	/** End Background Image */

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
			top: '15',
			bottom: '15',
			left: '15',
			right: '15',
		},
	},
	flipBoxItemFrontBorderRadiusTablet: {
		type: "object",
		default: {
			top: '15',
			bottom: '15',
			left: '15',
			right: '15',
		},
	},
	flipBoxItemFrontBorderRadiusMobile: {
		type: "object",
		default: {
			top: '15',
			bottom: '15',
			left: '15',
			right: '15',
		},
	},
	flipBoxItemFrontBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

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

	/** Start Alignment */
	flipBoxItemFrontAlignment: {
		type: "string",
		default: "center",
	},
	/** End Alignment */

};

export default flipBoxItemFrontAttributes;
