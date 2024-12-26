const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	blockStyle: {
        type: "string",
        default: "",
    },
	// Show Hide Label Attributes
	showDays: {
		type: 'boolean',
		default: true
	},
	showHours: {
		type: 'boolean',
		default: true
	},
	showMinutes: {
		type: 'boolean',
		default: true
	},
	showSeconds: {
		type: 'boolean',
		default: true
	},

	// Label Name Attributes
	countDownLabelDay: {
		type: "string",
		default: "Days"
	},
	countDownLabelHour: {
		type: "string",
		default: "Hours"
	},
	countDownLabelMinute: {
		type: "string",
		default: "Minutes"
	},
	countDownLabelSecond: {
		type: "string",
		default: "Seconds"
	},

	// Label Background Attributes
	countDownLabelBgColorDay: {
		type: 'string',
		default: '#6B4EFF',
	},
	countDownLabelBgColorHour: {
		type: 'string',
		default: '#6B4EFF',
	},
	countDownLabelBgColorMinute: {
		type: 'string',
		default: '#6B4EFF',
	},
	countDownLabelBgColorSecond: {
		type: 'string',
		default: '#6B4EFF',
	},
	targetDate: {
		type: "string",
	},
	// Device Type
	deviceType: {
		type: "string",
		default: "Desktop"
	},

	//Item Bg Color
	countDownItemBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	countDownItemBgColor: {
		type: "string",
		default: "#F97255"
	},
	countDownItemBgHoverColor: {
		type: 'string',
		default: "#F97255"
	},

	/** Start Background Image */
	countDownItemBgImageEnabled: {
		type: "boolean",
		default: false,
	},
	countDownItemBgImageUrl: {
		type: "string",
	},
	countDownItemBgImageAlt: {
		type: "string",
	},
	countDownItemBgImageID: {
		type: "number",
	},
	countDownItemBgImagePositionType: {
		type: 'string',
		default: "center center",
	},
	countDownItemBgImageAttachmentType: {
		type: 'string',
		default: "scroll",
	},
	countDownItemBgImageRepeatType: {
		type: 'string',
		default: "no-repeat",
	},
	countDownItemBgImageSizeType: {
		type: 'string',
		default: "auto",
	},
	// Border Radius
	countDownItemBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownItemBorderRadiusDesktop: {
		type: "object",
		default: {
			top: 500,
			bottom: 500,
			left: 500,
			right: 500,
		},
	},
	countDownItemBorderRadiusTablet: {
		type: "object",
		default: {
			top: 500,
			bottom: 500,
			left: 500,
			right: 500,
		},
	},
	countDownItemBorderRadiusMobile: {
		type: "object",
		default: {
			top: 500,
			bottom: 500,
			left: 500,
			right: 500,
		},
	},
	countDownItemBorderRadiusLink : {
		type : "boolean",
		default: true
	},

	// Border Type
	countDownItemBorder: {
		type: 'string',
		default: "none",
	},
	countDownItemBorderColor: {
		type: 'string',
	},
	countDownItemBorderTypeUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownItemBorderTypeDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	countDownItemBorderTypeTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	countDownItemBorderTypeMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	countDownItemBorderTypeLink : {
		type : "boolean",
		default: true
	},
	countDownItemGap: {
		type: 'object',
		default: {
			Desktop: 25,
			Tablet: 25,
			Mobile: 25
		}
	},
	countDownItemGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	countDownItemBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	countDownItemBgColor: {
		type: "string",
		default: "#0D173B"
	},
	countDownItemBgHoverColor: {
		type: 'string',
		default: "#0D173B"
	},

	countDownItemSize: {
		type: 'object',
		default: {
			Desktop: 144,
			Tablet: 120,
			Mobile: 100
		}
	},
	countDownItemSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** Start BG Color */
	countDownItemWrapperBgFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	countDownItemWrapperBgFontColor: {
		type: "string",
		default: ""
	},
	countDownItemWrapperBgFontHoverColor: {
		type: 'string',
		default: ""
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
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
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

	digitFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	digitFontColor: {
		type: "string",
		default: "#FFFFFF"
	},
	digitFontHoverColor: {
		type: 'string',
		default: "#FFFFFF"
	},
	digitFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	digitFontSize: {
		type: 'object',
		default: {
			Desktop: '48',
			Tablet: '42',
			Mobile: '38'
		}
	},
	digitFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	digitFontWeight: {
		type: 'string',
		default: ''
	},
	digitFontStyle: {
		type: 'string',
		default: ''
	},
	digitTextTransform: {
		type: 'string',
		default: ''
	},
	digitTextDecoration: {
		type: 'string',
		default: ''
	},
	digitLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	digitLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	digitLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	digitLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
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
	countDownSeparatorEnabled: {
		type: "boolean",
		default: false,
	},
	countDownSeparatorType: {
		type: 'string',
		default: ":",
	},
	countDownSeparatorFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	countDownSeparatorFontColor: {
		type: "string",
		default: "#15171C"
	},
	countDownSeparatorFontHoverColor: {
		type: 'string',
		default: "#15171C"
	},
	countDownSeparatorFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	countDownSeparatorFontSize: {
		type: 'object',
		default: {
			Desktop: '48',
			Tablet: '42',
			Mobile: '38'
		}
	},
	countDownSeparatorFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownSeparatorFontWeight: {
		type: 'string',
		default: ''
	},
	countDownSeparatorFontStyle: {
		type: 'string',
		default: ''
	},
	countDownSeparatorTextTransform: {
		type: 'string',
		default: ''
	},
	countDownSeparatorTextDecoration: {
		type: 'string',
		default: ''
	},
	countDownSeparatorLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	countDownSeparatorLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownSeparatorLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	countDownSeparatorLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	/** Start Horizontal Spacing */
	countDownSeparatorHorizontalGap: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	countDownSeparatorHorizontalGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Horizontal Spacing */

	/** Start Vertical Spacing */
	countDownSeparatorVerticalGap: {
		type: 'object',
		default: {
			Desktop: '20',
			Tablet: '',
			Mobile: ''
		}
	},
	countDownSeparatorVerticalGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Vertical Spacing */
	
};

export default attributes;
