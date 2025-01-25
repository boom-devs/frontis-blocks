const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	blockStyle: {
        type: "string",
        default: "",
    },

	countDownPresetStyle: {
        type: "string",
        default: "default",
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
		default: "#399CFF"
	},
	countDownItemBgHoverColor: {
		type: 'string',
		default: "#399CFF"
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
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownItemBorderRadiusTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownItemBorderRadiusMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownItemBorderRadiusLink : {
		type : "boolean",
		default: true
	},

	// Border Type
	countDownItemBorderColorSwitcher :{
		type: 'string',
		default: 'normal'
	},
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
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownItemBorderTypeTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownItemBorderTypeMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownItemBorderTypeLink : {
		type : "boolean",
		default: true
	},

	countDownFlexWrap : {
		type : "boolean",
		default: true
	},
	countDownLayoutType: {
		type: "string",
		default: "flex"
	},
	countDownLayoutAlignment: {
		type: "string",
		default: "center"
	},
	countDownGrid: {
		type: 'object',
		default: {
			Desktop: '4',
			Tablet: '4',
			Mobile: '2'
		}
	},

	countDownItemGap: {
		type: 'object',
		default: {
			Desktop: '104',
			Tablet: '104',
			Mobile: '104'
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
		default: ""
	},
	countDownItemBgHoverColor: {
		type: 'string',
		default: ""
	},

	countDownItemSizeHeight: {
		type: "boolean",
		default: true,
	},
	countDownItemSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
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
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownItemWrapperBorderTypeTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownItemWrapperBorderTypeMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
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
			top: '14',
			bottom: '14',
			left: '14',
			right: '14',
		},
	},
	countDownItemWrapperBorderRadiusTablet: {
		type: "object",
		default: {
			top: '14',
			bottom: '14',
			left: '14',
			right: '14',
		},
	},
	countDownItemWrapperBorderRadiusMobile: {
		type: "object",
		default: {
			top: '14',
			bottom: '14',
			left: '14',
			right: '14',
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
			top: '24',
			bottom: '24',
			left: '42',
			right: '42',
		},
	},
	countDownItemWrapperPaddingTablet: {
		type: "object",
		default: {
			top: '24',
			bottom: '24',
			left: '42',
			right: '42',
		},
	},
	countDownItemWrapperPaddingMobile: {
		type: "object",
		default: {
			top: '24',
			bottom: '24',
			left: '42',
			right: '42',
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

	singleDigitFontColorSwitcher: {
		type : "boolean",
		default: false
	},

	daysDigitFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	daysDigitFontColor: {
		type: "string",
		default: ""
	},
	daysDigitFontHoverColor: {
		type: 'string',
		default: ""
	},

	hoursDigitFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	hoursDigitFontColor: {
		type: "string",
		default: ""
	},
	hoursDigitFontHoverColor: {
		type: 'string',
		default: ""
	},

	minutesDigitFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	minutesDigitFontColor: {
		type: "string",
		default: ""
	},
	minutesDigitFontHoverColor: {
		type: 'string',
		default: ""
	},

	secondsDigitFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	secondsDigitFontColor: {
		type: "string",
		default: ""
	},
	secondsDigitFontHoverColor: {
		type: 'string',
		default: ""
	},

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
			Desktop: '62',
			Tablet: '48',
			Mobile: '32'
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
		default: '500'
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
			Desktop: '80',
			Tablet: '60',
			Mobile: '42'
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
	labelBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	labelBgColor: {
		type: "string",
		default: ""
	},
	labelBgHoverColor: {
		type: 'string',
		default: ""
	},
	labelFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	labelFontSize: {
		type: 'object',
		default: {
			Desktop: '18',
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
		default: true,
	},
	countDownSeparatorType: {
		type: 'string',
		default: "colon",
	},
	countDownSeparatorCustom: {
		type: 'string',
		default: "",
	},
	countDownSeparatorFontColorSwitcher: {
		type: "string",
		default: "normal"
	},
	countDownSeparatorFontColor: {
		type: "string",
		default: "#ffffff"
	},
	countDownSeparatorFontHoverColor: {
		type: 'string',
		default: "#ffffff"
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
			Desktop: '60',
			Tablet: '60',
			Mobile: '60'
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
			Desktop: '40',
			Tablet: '40',
			Mobile: '40'
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
	globalBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	globalBackgroundType: {
		type: "string",
		default: "classic"
	},
	globalClassicColor: {
		type: "string",
		default: "#399CFF"
	},
	globalGradientColor: {
		type: "string",
	},
	globalCustomGradientSwitcher: {
		type: "boolean",
		default: false
	},
	globalCustomGradientInputValue: {
		type: "string",
		default: ""
	},
	globalBackgroundColorStyle: {
		type: "string",
		default: ""
	},
	globalBackgroundImageUrl: {
		type: "string",
		default: ""
	},
	globalBackgroundImageAlt: {
		type: "string",
		default: ""
	},
	globalBackgroundImageID: {
		type: "string",
		default: ""
	},
	globalBackgroundImagePosition: {
		type: "string",
		default: ""
	},
	globalBackgroundImageAttachment: {
		type: "string",
		default: ""
	},
	globalBackgroundImageSize: {
		type: "string",
		default: ""
	},
	globalBackgroundImageRepeat: {
		type: "string",
		default: ""
	},
	hoverBackgroundType: {
		type: "string",
		default: "classic"
	},
	hoverClassicColor: {
		type: "string",
	},
	hoverGradientColor: {
		type: "string",
	},
	hoverCustomGradientSwitcher: {
		type: "boolean",
		default: false
	},
	hoverCustomGradientInputValue: {
		type: "string",
		default: ""
	},
	hoverBackgroundImageUrl: {
		type: "string",
		default: ""
	},
	hoverBackgroundImageAlt: {
		type: "string",
		default: ""
	},
	hoverBackgroundImageID: {
		type: "string",
		default: ""
	},
	hoverBackgroundImagePosition: {
		type: "string",
		default: ""
	},
	hoverBackgroundImageAttachment: {
		type: "string",
		default: ""
	},
	hoverBackgroundImageSize: {
		type: "string",
		default: ""
	},
	hoverBackgroundImageRepeat: {
		type: "string",
		default: ""
	},

	/** Label Start Border Type */
	countDownLabelBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	countDownLabelBorderColor: {
		type: "string",
		default: ""
	},
	countDownLabelBorderHoverColor: {
		type: 'string',
	},
	countDownLabelBorder: {
		type: 'string',
		default: "none",
	},
	countDownLabelBorderTypeUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownLabelBorderTypeDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownLabelBorderTypeTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownLabelBorderTypeMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownLabelBorderTypeLink : {
		type : "boolean",
		default: true
	},
	/** Label End Border Type */

	/** Label Start Border Radius */
	countDownLabelBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownLabelBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownLabelBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownLabelBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownLabelBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** Label End Border Radius */

	countDownLabelMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownLabelMarginDesktop: {
		type: "object",
		default: {
			top: '10',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownLabelMarginTablet: {
		type: "object",
		default: {
			top: '10',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownLabelMarginMobile: {
		type: "object",
		default: {
			top: '10',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownLabelMarginLink : {
		type : "boolean",
		default: true
	},

	countDownLabelWidth: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '100',
			Mobile: '100'
		}
	},
	countDownLabelWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},
	countDownLabelHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	countDownLabelHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	countDownLabelAlignmentHz: {
        type: "string",
        default: "center",
    },
	countDownLabelAlignmentVr: {
        type: "string",
        default: "center",
    },
	/** Label End */


	/** Digit Start Border Type */
	countDownDigitBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	countDownDigitBgColor: {
		type: "string",
		default: ""
	},
	countDownDigitBgHoverColor: {
		type: 'string',
		default: ""
	},
	countDownDigitBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	countDownDigitBorderColor: {
		type: "string",
		default: ""
	},
	countDownDigitBorderHoverColor: {
		type: 'string',
	},
	countDownDigitBorder: {
		type: 'string',
		default: "none",
	},
	countDownDigitBorderTypeUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownDigitBorderTypeDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownDigitBorderTypeTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownDigitBorderTypeMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownDigitBorderTypeLink : {
		type : "boolean",
		default: true
	},
	/** Digit End Border Type */

	/** Digit Start Border Radius */
	countDownDigitBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownDigitBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownDigitBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownDigitBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownDigitBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** Digit End Border Radius */

	countDownDigitMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	countDownDigitMarginDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownDigitMarginTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownDigitMarginMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownDigitMarginLink : {
		type : "boolean",
		default: true
	},
	
	countDownDigitWidth: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '100',
			Mobile: '100'
		}
	},
	countDownDigitWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},
	countDownDigitHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	countDownDigitHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	countDownDigitAlignmentHz: {
        type: "string",
        default: "center",
    },
	countDownDigitAlignmentVr: {
        type: "string",
        default: "center",
    },
	/** Digit End */
	
};

export default attributes;
