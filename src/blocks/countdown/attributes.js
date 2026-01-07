const attributes = {
	blockID: {
		type: 'string',
		default: ''
	},
	blockStyle: {
        type: 'string',
        default: '',
    },
	highlightColor: {
		type: 'string',
		default: '',
	},
	hoverHighlightColor: {
		type: 'string',
		default: '',
	},

	countDownPresetStyle: {
        type: 'string',
        default: 'default',
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
		type: 'string',
		default: 'Days'
	},
	countDownLabelHour: {
		type: 'string',
		default: 'Hours'
	},
	countDownLabelMinute: {
		type: 'string',
		default: 'Minutes'
	},
	countDownLabelSecond: {
		type: 'string',
		default: 'Seconds'
	},

	// Label Background Attributes
	countDownLabelBgColorDay: {
		type: 'string',
		default: '#6B4EFF',
	},
	countDownLabelBgColorHour: {
		type: 'string',
		default: '',
	},
	countDownLabelBgColorMinute: {
		type: 'string',
		default: '#6B4EFF',
	},
	countDownLabelBgColorSecond: {
		type: 'string',
		default: '',
	},
	targetDate: {
		type: 'string',
	},
	// Device Type
	deviceType: {
		type: 'string',
		default: 'Desktop'
	},

	//Item Bg Color
	countDownItemBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	countDownItemBgColor: {
		type: 'string',
		default: '#399CFF'
	},
	countDownItemBgHoverColor: {
		type: 'string',
		default: ''
	},

	/** Start Background Image */
	countDownItemBgImageEnabled: {
		type: 'boolean',
		default: false,
	},
	countDownItemBgImageUrl: {
		type: 'string',
	},
	countDownItemBgImageAlt: {
		type: 'string',
	},
	countDownItemBgImageID: {
		type: 'number',
	},
	countDownItemBgImagePositionType: {
		type: 'string',
		default: 'center center',
	},
	countDownItemBgImageAttachmentType: {
		type: 'string',
		default: 'scroll',
	},
	countDownItemBgImageRepeatType: {
		type: 'string',
		default: 'no-repeat',
	},
	countDownItemBgImageSizeType: {
		type: 'string',
		default: 'auto',
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
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemBorderRadiusLink : {
		type : 'boolean',
		default: true
	},

	// Border Type
	countDownItemBorderColorSwitcher :{
		type: 'string',
		default: 'normal'
	},
	countDownItemBorder: {
		type: 'string',
		default: 'none',
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
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemBorderTypeTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemBorderTypeMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemBorderTypeLink : {
		type : 'boolean',
		default: true
	},

	countDownFlexWrap : {
		type : 'boolean',
		default: true
	},
	countDownLayoutType: {
		type: 'string',
		default: 'flex'
	},
	countDownLayoutAlignment: {
		type: 'string',
		default: 'center'
	},
	countDownGrid: {
		type: 'object',
		default: {
			Desktop: '4',
			Tablet: '',
			Mobile: ''
		}
	},

	countDownItemGap: {
		type: 'object',
		default: {
			Desktop: '72',
			Tablet: '',
			Mobile: ''
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
		type: 'string',
		default: 'normal'
	},
	countDownItemBgColor: {
		type: 'string',
		default: ''
	},
	countDownItemBgHoverColor: {
		type: 'string',
		default: ''
	},

	countDownItemSizeHeight: {
		type: 'boolean',
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
		type: 'string',
		default: 'normal'
	},
	countDownItemWrapperBgFontColor: {
		type: 'string',
		default: ''
	},
	countDownItemWrapperBgFontHoverColor: {
		type: 'string',
		default: ''
	},
	/** End BG Color */

	/** Start Background Image */
	countDownItemWrapperBackgroundImageEnabled: {
		type: 'boolean',
		default: false,
	},
	countDownItemWrapperBackgroundImageUrl: {
		type: 'string',
	},
	countDownItemWrapperBackgroundImageAlt: {
		type: 'string',
	},
	countDownItemWrapperBackgroundImageID: {
		type: 'number',
	},
	countDownItemWrapperBgImagePositionType: {
		type: 'string',
		default: 'center center',
	},
	countDownItemWrapperBgImageAttachmentType: {
		type: 'string',
		default: 'scroll',
	},
	countDownItemWrapperBgImageRepeatType: {
		type: 'string',
		default: 'no-repeat',
	},
	countDownItemWrapperBgImageSizeType: {
		type: 'string',
		default: 'auto',
	},

	
	/** End Background Image */

	/** Start Border Type */
	countDownItemWrapperBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	countDownItemWrapperBorderColor: {
		type: 'string',
		default: ''
	},
	countDownItemWrapperBorderHoverColor: {
		type: 'string',
	},
	countDownItemWrapperBorder: {
		type: 'string',
		default: 'none',
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
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperBorderTypeTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperBorderTypeMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperBorderTypeLink : {
		type : 'boolean',
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
		type: 'object',
		default: {
			top: '14',
			bottom: '14',
			left: '14',
			right: '14',
		},
	},
	countDownItemWrapperBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperBorderRadiusLink : {
		type : 'boolean',
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
		type: 'object',
		default: {
			top: '24',
			bottom: '24',
			left: '42',
			right: '42',
		},
	},
	countDownItemWrapperPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperPaddingLink : {
		type : 'boolean',
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
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownItemWrapperMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */

	singleDigitFontColorSwitcher: {
		type : 'boolean',
		default: false
	},

	daysDigitFontColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	daysDigitFontColor: {
		type: 'string',
		default: ''
	},
	daysDigitFontHoverColor: {
		type: 'string',
		default: ''
	},

	hoursDigitFontColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	hoursDigitFontColor: {
		type: 'string',
		default: ''
	},
	hoursDigitFontHoverColor: {
		type: 'string',
		default: ''
	},

	minutesDigitFontColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	minutesDigitFontColor: {
		type: 'string',
		default: ''
	},
	minutesDigitFontHoverColor: {
		type: 'string',
		default: ''
	},

	secondsDigitFontColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	secondsDigitFontColor: {
		type: 'string',
		default: ''
	},
	secondsDigitFontHoverColor: {
		type: 'string',
		default: ''
	},

	digitFontColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	digitFontColor: {
		type: 'string',
		default: '#FFFFFF'
	},
	digitFontHoverColor: {
		type: 'string',
		default: ''
	},

	digitGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	digitGlobalTypoSwitcher: {
		type: 'object',
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	digitGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	digitGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	digitFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	digitFontSize: {
		type: 'object',
		default: {
			Desktop: '62',
			Tablet: '',
			Mobile: ''
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
		type: 'string',
		default: 'normal'
	},
	labelFontColor: {
		type: 'string',
		default: '#FFFFFF'
	},
	labelFontHoverColor: {
		type: 'string',
		default: ''
	},
	labelBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	labelBgColor: {
		type: 'string',
		default: ''
	},
	labelBgHoverColor: {
		type: 'string',
		default: ''
	},
	labelGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	labelGlobalTypoSwitcher: {
		type: 'object',
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	labelGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	labelGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
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
		type: 'boolean',
		default: true,
	},
	countDownSeparatorType: {
		type: 'string',
		default: 'colon',
	},
	countDownSeparatorCustom: {
		type: 'string',
		default: '',
	},
	countDownSeparatorFontColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	countDownSeparatorFontColor: {
		type: 'string',
		default: '#ffffff'
	},
	countDownSeparatorFontHoverColor: {
		type: 'string',
		default: ''
	},
	countDownSeparatorGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	countDownSeparatorGlobalTypoSwitcher: {
		type: 'object',
		default: {
			fontFamily: false,
			fontSize: false,
			fontWeight: false,
			fontStyle: false,
			textTransform: false,
			textDecoration: false,
			letterSpacing: false,
			lineHeight: false,
		},
	},
	countDownSeparatorGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	countDownSeparatorGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	countDownSeparatorFontFamily: {
		type: 'string',
		default: 'inherit'
	},
	countDownSeparatorFontSize: {
		type: 'object',
		default: {
			Desktop: '48',
			Tablet: '',
			Mobile: ''
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
			Desktop: '40',
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
			Desktop: '40',
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
	countDownZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	countDownOverflow: {
        type: 'string',
        default: 'default',
    },
	globalBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	globalBackgroundType: {
		type: 'string',
		default: 'classic'
	},
	globalClassicColor: {
		type: 'string',
		default: '#399CFF'
	},
	globalGradientColor: {
		type: 'string',
	},
	globalCustomGradientSwitcher: {
		type: 'boolean',
		default: false
	},
	globalCustomGradientInputValue: {
		type: 'string',
		default: ''
	},
	globalBackgroundColorStyle: {
		type: 'string',
		default: ''
	},
	globalBackgroundImageUrl: {
		type: 'string',
		default: ''
	},
	globalBackgroundImageAlt: {
		type: 'string',
		default: ''
	},
	globalBackgroundImageID: {
		type: 'string',
		default: ''
	},
	globalBackgroundImagePosition: {
		type: 'string',
		default: ''
	},
	globalBackgroundImageAttachment: {
		type: 'string',
		default: ''
	},
	globalBackgroundImageSize: {
		type: 'string',
		default: ''
	},
	globalBackgroundImageRepeat: {
		type: 'string',
		default: ''
	},
	hoverBackgroundType: {
		type: 'string',
		default: 'classic'
	},
	hoverClassicColor: {
		type: 'string',
	},
	hoverGradientColor: {
		type: 'string',
	},
	hoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false
	},
	hoverCustomGradientInputValue: {
		type: 'string',
		default: ''
	},
	hoverBackgroundImageUrl: {
		type: 'string',
		default: ''
	},
	hoverBackgroundImageAlt: {
		type: 'string',
		default: ''
	},
	hoverBackgroundImageID: {
		type: 'string',
		default: ''
	},
	hoverBackgroundImagePosition: {
		type: 'string',
		default: ''
	},
	hoverBackgroundImageAttachment: {
		type: 'string',
		default: ''
	},
	hoverBackgroundImageSize: {
		type: 'string',
		default: ''
	},
	hoverBackgroundImageRepeat: {
		type: 'string',
		default: ''
	},

	/** Label Start Border Type */
	countDownLabelBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	countDownLabelBorderColor: {
		type: 'string',
		default: ''
	},
	countDownLabelBorderHoverColor: {
		type: 'string',
	},
	countDownLabelBorder: {
		type: 'string',
		default: 'none',
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
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownLabelBorderTypeTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownLabelBorderTypeMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownLabelBorderTypeLink : {
		type : 'boolean',
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
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownLabelBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownLabelBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownLabelBorderRadiusLink : {
		type : 'boolean',
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
		type: 'object',
		default: {
			top: '10',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	countDownLabelMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownLabelMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownLabelMarginLink : {
		type : 'boolean',
		default: true
	},

	countDownLabelWidth: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '',
			Mobile: ''
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
        type: 'string',
        default: 'center',
    },
	countDownLabelAlignmentVr: {
        type: 'string',
        default: 'center',
    },
	/** Label End */


	/** Digit Start Border Type */
	countDownDigitBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	countDownDigitBgColor: {
		type: 'string',
		default: ''
	},
	countDownDigitBgHoverColor: {
		type: 'string',
		default: ''
	},
	countDownDigitBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	countDownDigitBorderColor: {
		type: 'string',
		default: ''
	},
	countDownDigitBorderHoverColor: {
		type: 'string',
	},
	countDownDigitBorder: {
		type: 'string',
		default: 'none',
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
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownDigitBorderTypeTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownDigitBorderTypeMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownDigitBorderTypeLink : {
		type : 'boolean',
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
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownDigitBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownDigitBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownDigitBorderRadiusLink : {
		type : 'boolean',
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
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownDigitMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownDigitMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	countDownDigitMarginLink : {
		type : 'boolean',
		default: true
	},
	
	countDownDigitWidth: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '',
			Mobile: ''
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
        type: 'string',
        default: 'center',
    },
	countDownDigitAlignmentVr: {
        type: 'string',
        default: 'center',
    },
	/** Digit End */
	
	countDownDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    countDownTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    countDownMobileSwitcher: {
        type: 'boolean',
        default: false,
    },

	/** Start Class & ID Setting */
	countDownGlobalWraperCustomCSS : {
		type: 'string',
		default: '',
	},
	countDownGlobalWraperID : {
		type: 'string',
		default: ''
	},
	countDownGlobalWraperClass : {
		type: 'string',
		default: ''
	},
	/** End Class & ID Setting */

	countDownPositionType: {
		type: 'string',
		default: 'default'
	},
	countDownHZOrientationType: {
		type: 'string',
		default: 'left'
	},
	countDownVROrientationType: {
		type: 'string',
		default: 'top'
	},
	countDownHZLeftOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	countDownHZLeftOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	countDownHZRightOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	countDownHZRightOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	countDownVRTopOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	countDownVRTopOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	countDownVRBottomOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	countDownVRBottomOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
};

export default attributes;