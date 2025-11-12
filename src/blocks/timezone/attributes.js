const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	blockStyle: {
		type: 'string',
		default: ''
	},
	highlightColor: {
		type: 'string',
		default: '',
	},
	hoverHighlightColor: {
		type: 'string',
		default: '',
	},
	location: {
		type: 'string',
		default: 'Dhaka, Bangladesh' 
	},
	timezone: {
		type: 'string',
		default: 'Asia/Dhaka'
	},
	timezones: {
		type: 'array',
		default: []
	},
	timezoneMode: {
		type: 'string',
		default: 'auto'
	},
	startTime: {
		type: 'string',
		default: '10:00 AM'
	},
	endTime: {
		type: 'string',
		default: '6:00 PM'
	},
	officeHours: {
		type: 'string',
		default: '10:00 AM - 6:00 PM'
	},
	officeStatus: {
		type: 'string',
		default: 'Open'
	},
	weekendDays: {
		type: 'array',
		default: []
	},
	holidays: {
		type: 'array',
		default: []
	},
	useMonthlySchedule: {
		type: 'boolean',
		default: false
	},
	monthlySchedules: {
		type: 'array',
		default: []
	},
	countdownMessage: {
		type: 'string',
		default: 'Will be finished in {time}'
	},
	entityType: {
		type: 'string',
		default: 'office'
	},
	title: {
		type: 'string',
		default: 'Office Status'
	},
	useMultipleLocations: {
        type: 'boolean',
        default: false
    },
    officeLocations: {
        type: 'array',
        default: []
    },

	//Typography Location
	timezoneLocationTextGlobalTypoSwitcher: {
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
	timezoneLocationTextGlobalTypographyData: {
        type: 'object',
        default: {}
    },
	timezoneLocationTextGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
	timezoneLocationTextGlobalTypoOption: {
        type: 'object',
        default: {label: 'Default', value: 'default'},
    },
	timezoneLocationTextFontFamily: {
        type: 'string',
        default: 'Default',
    },
	timezoneLocationTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	timezoneLocationTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	timezoneLocationTextFontWeight : {
        type: 'string',
        default: ''
    },
	timezoneLocationTextFontStyle : {
        type: 'string',
        default: ''
    },
	timezoneLocationTextTransform : {
        type: 'string',
        default: ''
    },
	timezoneLocationTextDecoration : {
        type: 'string',
        default: 'none'
    },
	timezoneLocationTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	timezoneLocationTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	timezoneLocationTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	timezoneLocationTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	//Typography Timezone Time
	timezoneTimeTextGlobalTypoSwitcher: {
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
	timezoneTimeTextGlobalTypographyData: {
        type: 'object',
        default: {}
    },
	timezoneTimeTextGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
	timezoneTimeTextGlobalTypoOption: {
        type: 'object',
        default: {label: 'Default', value: 'default'},
    },
	timezoneTimeTextFontFamily: {
        type: 'string',
        default: 'Default',
    },
	timezoneTimeTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	timezoneTimeTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	timezoneTimeTextFontWeight : {
        type: 'string',
        default: ''
    },
	timezoneTimeTextFontStyle : {
        type: 'string',
        default: ''
    },
	timezoneTimeTextTransform : {
        type: 'string',
        default: ''
    },
	timezoneTimeTextDecoration : {
        type: 'string',
        default: 'none'
    },
	timezoneTimeTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	timezoneTimeTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	timezoneTimeTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	timezoneTimeTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	//Typography Timezone 
	timezoneTextGlobalTypoSwitcher: {
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
	timezoneTextGlobalTypographyData: {
        type: 'object',
        default: {}
    },
	timezoneTextGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
	timezoneTextGlobalTypoOption: {
        type: 'object',
        default: {label: 'Default', value: 'default'},
    },
	timezoneTextFontFamily: {
        type: 'string',
        default: 'Default',
    },
	timezoneTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	timezoneTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	timezoneTextFontWeight : {
        type: 'string',
        default: ''
    },
	timezoneTextFontStyle : {
        type: 'string',
        default: ''
    },
	timezoneTextTransform : {
        type: 'string',
        default: ''
    },
	timezoneTextDecoration : {
        type: 'string',
        default: 'none'
    },
	timezoneTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	timezoneTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	timezoneTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	timezoneTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	//location name text Color
	locationNameTextColorTypeSwitcher: {
        type: 'string',
        default: 'normal',
    },
    locationNameTextColorType: {
        type: 'string',
        default: 'classic',
    },
    locationNameTextHoverColorType: {
        type: 'string',
        default: 'classic',
    },
	 locationNameTextColor : {
        type: 'string'
    },
    locationNameTextHoverColor: {
        type: 'string',
    },
    locationNameTextGradientColor: {
        type: 'string',
        default: null
    },
    locationNameTextHoverGradientColor: {
        type: 'string',
        default: null
    },
    locationNameTextCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    locationNameTextCustomGradientColor: {
        type: 'string',
        default: ''
    },
    locationNameTextHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    locationNameTextHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },

	timezoneTextAlignment: {
        type: 'object',
        default: {
            Desktop: 'left',
            Tablet: '',
            Mobile: '',
        },
    },

	//Timezone Time text Color
	timezoneTimeTextColorTypeSwitcher: {
        type: 'string',
        default: 'normal',
    },
    timezoneTimeTextColorType: {
        type: 'string',
        default: 'classic',
    },
    timezoneTimeTextHoverColorType: {
        type: 'string',
        default: 'classic',
    },
	 timezoneTimeTextColor : {
        type: 'string'
    },
    timezoneTimeTextHoverColor: {
        type: 'string',
    },
    timezoneTimeTextGradientColor: {
        type: 'string',
        default: null
    },
    timezoneTimeTextHoverGradientColor: {
        type: 'string',
        default: null
    },
    timezoneTimeTextCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    timezoneTimeTextCustomGradientColor: {
        type: 'string',
        default: ''
    },
    timezoneTimeTextHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    timezoneTimeTextHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },

	//Timezone text Color
	timezoneTextColorTypeSwitcher: {
        type: 'string',
        default: 'normal',
    },
    timezoneTextColorType: {
        type: 'string',
        default: 'classic',
    },
    timezoneTextHoverColorType: {
        type: 'string',
        default: 'classic',
    },
	 timezoneTextColor : {
        type: 'string'
    },
    timezoneTextHoverColor: {
        type: 'string',
    },
    timezoneTextGradientColor: {
        type: 'string',
        default: null
    },
    timezoneTextHoverGradientColor: {
        type: 'string',
        default: null
    },
    timezoneTextCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    timezoneTextCustomGradientColor: {
        type: 'string',
        default: ''
    },
    timezoneTextHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    timezoneTextHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },

	//separtor
	showSeparatorSwitcher: {
        type: 'boolean',
        default: true,
    },
	separatorColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
	separatorColor: {
        type: 'string',
        default: '#399CFF',
    },
	separator: { 
        type: 'string', 
        default: ' | ' 
    },
    separatorSize: { 
        type: 'object',
		default: {
			Desktop: '30',
			Tablet: '',
			Mobile: ''
		}
    },
    separatorFontUnits: { 
       	type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
    },

	//Location Timezone BG Color
	locationTimezoneBgColorTypeSwitcher: {
        type: 'string',
        default: 'normal'
    },
    locationTimezoneBgColorType: {
        type: 'string',
        default: 'classic',
    },
    locationTimezoneBgHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    locationTimezoneBgColor: {
        type: 'string',
    },
    locationTimezoneBgHoverColor: {
        type: 'string',
    },
    locationTimezoneBgGradientColor: {
        type: 'string',
        default: null
    },
    locationTimezoneBgHoverGradientColor: {
        type: 'string',
        default: null
    },
    locationTimezoneBgCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    locationTimezoneBgCustomGradientColor: {
        type: 'string',
        default: ''
    },
    locationTimezoneBgHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    locationTimezoneBgHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },

	//location timezone border & box shadow
	locationTimezoneBorder: {
        type: 'string',
        default: 'none',
    },
    locationTimezoneBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    locationTimezoneBorderColor: {
        type: 'string',
    },
    locationTimezoneBorderHoverColor: {
        type: 'string',
    },
    locationTimezoneBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    locationTimezoneDesktopBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    locationTimezoneTabletBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    locationTimezoneMobileBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    locationTimezoneBorderLink : {
        type : 'boolean',
        default: true
    },
    locationTimezoneBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    locationTimezoneDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    locationTimezoneTabBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    locationTimezoneMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    locationTimezoneBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
	locationTimezoneBoxShadowValues: {
        type: 'array',
        default: [],
    },
    locationTimezoneBoxShadowCssValue: {
        type: 'string',
        default: '',
    },

	//location timezone margin & padding
	locationTimezonePaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    locationTimezoneDesktopPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    locationTimezoneTabPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    locationTimezoneMobilePadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    locationTimezonePaddingLink : {
        type : 'boolean',
        default: true
    },
    locationTimezoneMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    locationTimezoneDesktopMargin: {
        type: 'object',
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    locationTimezoneTabMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    locationTimezoneMobileMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    locationTimezoneMarginLink : {
        type : 'boolean',
        default: true
    },

	//timezone location text spacing
    timezoneLocationTextSpacing: { 
        type: 'object',
		default: {
			Desktop: '20',
			Tablet: '',
			Mobile: ''
		}
    },
    timezoneLocationTextSpacingUnits: { 
       	type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
    },

	//Location info box BG Color
	infoBoxBgColorTypeSwitcher: {
        type: 'string',
        default: 'normal'
    },
    infoBoxBgColorType: {
        type: 'string',
        default: 'classic',
    },
    infoBoxBgHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    infoBoxBgColor: {
        type: 'string',
    },
    infoBoxBgHoverColor: {
        type: 'string',
    },
    infoBoxBgGradientColor: {
        type: 'string',
        default: null
    },
    infoBoxBgHoverGradientColor: {
        type: 'string',
        default: null
    },
    infoBoxBgCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    infoBoxBgCustomGradientColor: {
        type: 'string',
        default: ''
    },
    infoBoxBgHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    infoBoxBgHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },

	//location info box margin & padding
	infoBoxPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    infoBoxDesktopPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    infoBoxTabPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    infoBoxMobilePadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    infoBoxPaddingLink : {
        type : 'boolean',
        default: true
    },
    infoBoxMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    infoBoxDesktopMargin: {
        type: 'object',
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    infoBoxTabMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    infoBoxMobileMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    infoBoxMarginLink : {
        type : 'boolean',
        default: true
    },

	//location info box border & box shadow
	infoBoxBorder: {
        type: 'string',
        default: 'none',
    },
    infoBoxBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    infoBoxBorderColor: {
        type: 'string',
    },
    infoBoxBorderHoverColor: {
        type: 'string',
    },
    infoBoxBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    infoBoxDesktopBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    infoBoxTabletBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    infoBoxMobileBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    infoBoxBorderLink : {
        type : 'boolean',
        default: true
    },
    infoBoxBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    infoBoxDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    infoBoxTabBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    infoBoxMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    infoBoxBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
	infoBoxBoxShadowValues: {
        type: 'array',
        default: [],
    },
    infoBoxBoxShadowCssValue: {
        type: 'string',
        default: '',
    },

    //Typography Location
	statusTextGlobalTypoSwitcher: {
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
	statusTextGlobalTypographyData: {
        type: 'object',
        default: {}
    },
	statusTextGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
	statusTextGlobalTypoOption: {
        type: 'object',
        default: {label: 'Default', value: 'default'},
    },
	statusTextFontFamily: {
        type: 'string',
        default: 'Default',
    },
	statusTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	statusTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	statusTextFontWeight : {
        type: 'string',
        default: ''
    },
	statusTextFontStyle : {
        type: 'string',
        default: ''
    },
	statusTextTransform : {
        type: 'string',
        default: ''
    },
	statusTextDecoration : {
        type: 'string',
        default: 'none'
    },
	statusTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	statusTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	statusTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	statusTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
};

export default attributes;