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
    countries: {
		type: 'array',
		default: []
	},
	selectedCountry: {
		type: 'string',
		default: 'BD'
	},
	useCustomLocation: {
		type: 'boolean',
		default: true
	},
	location: {
		type: 'string',
		default: 'Dhaka, Bangladesh' 
	},
	timezone: {
		type: 'string',
		default: 'Asia/Dhaka'
	},
    showTimezoneOffset: {
        type: 'boolean',
        default: true,
    },
    showRemainingTime: {
        type: 'boolean',
        default: true
    },
    remainingTimeLabel: {
        type: 'string',
        default: 'Remaining:'
    },
    remainingTimeFormat: {
        type: 'string',
        default: 'hours-minutes'
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
    useUTCTimezoneFormat: {
        type: 'boolean', 
        default: true
    },
	countdownMessage: {
		type: 'string',
		default: 'Will be finished in {time}'
	},
    openStatusText: {
        type: 'string', 
        default: 'Open'
    },
    closedStatusText: {
        type: 'string', 
        default: 'Closed'
    },
    beforeTimeText: {
        type: 'string', 
        default: 'Will start at'
    },
    afterTimeText: {
        type: 'string', 
        default: 'Will close at'
    },
    weekendMessage: {
        type: 'string', 
        default: 'Weekend'
    },
    holidayMessage: {
        type: 'string', 
        default: 'Holiday'
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
    spacing: { 
        type: 'object',
		default: {
			Desktop: '10',
			Tablet: '',
			Mobile: ''
		}
    },
    spacingUnits: { 
       	type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
    },
    alignment: {
        type: 'object',
        default: {
            Desktop: 'left',
            Tablet: '',
            Mobile: '',
        },
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
			Desktop: '16',
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
			Desktop: '16',
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
			Desktop: '14',
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
        type: 'string',
        default: '#fff'
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
	timezoneCardAlignment: {
        type: 'object',
        default: {
            Desktop: 'center',
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
        type: 'string',
        default: '#fff'
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
        type: 'string',
        default: '#b1ababff'
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
    timeFormat: {
        type: 'string',
        default: 'hh:mm A',
    },

    showStatusSwitcher: {
        type: 'boolean',
        default: false,
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
        default: '#fff',
    },
    separatorHoverColor: {
        type: 'string',
        default: '',
    },
	separator: { 
        type: 'string', 
        default: ' | ' 
    },
    separatorSize: { 
        type: 'object',
		default: {
			Desktop: '16',
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
        default: '#000000',
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
        default: '',
    },
    locationTimezoneBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    locationTimezoneBorderColor: {
        type: 'string',
        default: ''
    },
    locationTimezoneBorderHoverColor: {
        type: 'string',
        default: ''
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
            top: '999',
            bottom: '999',
            left: '999',
            right: '999',
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
            top: '10',
            bottom: '10',
            left: '16',
            right: '16',
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
            top: '',
            bottom: '',
            left: '',
            right: '',
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
			Desktop: '10',
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
    timezoneCardSpacing: { 
        type: 'object',
		default: {
			Desktop: '10',
			Tablet: '',
			Mobile: ''
		}
    },
    timezoneCardSpacingUnits: { 
       	type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
    },

	//Location info box On Status BG Color
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

	//Location info box closed status BG Color
	infoBoxOffStatusBgColorTypeSwitcher: {
        type: 'string',
        default: 'normal'
    },
    infoBoxOffStatusBgColorType: {
        type: 'string',
        default: 'classic',
    },
    infoBoxOffStatusBgHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    infoBoxOffStatusBgColor: {
        type: 'string',
    },
    infoBoxOffStatusBgHoverColor: {
        type: 'string',
    },
    infoBoxOffStatusBgGradientColor: {
        type: 'string',
        default: null
    },
    infoBoxOffStatusBgHoverGradientColor: {
        type: 'string',
        default: null
    },
    infoBoxOffStatusBgCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    infoBoxOffStatusBgCustomGradientColor: {
        type: 'string',
        default: ''
    },
    infoBoxOffStatusBgHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    infoBoxOffStatusBgHoverCustomGradientColor: {
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
            top: '2',
            bottom: '2',
            left: '2',
            right: '12',
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
            left: '10',
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
        default: 'solid',
    },
    infoBoxBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    infoBoxBorderColor: {
        type: 'string',
        default: '#008000',
    },
    infoBoxBorderHoverColor: {
        type: 'string',
        default: '',
    },
    infoBoxOffStatusBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    infoBoxOffStatusBorderColor: {
        type: 'string',
        default: '#FF0000',
    },
    infoBoxOffStatusBorderHoverColor: {
        type: 'string',
        default: '',
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
            top: '1',
            bottom: '1',
            left: '1',
            right: '1',
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
            top: '999',
            bottom: '999',
            left: '999',
            right: '999',
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
			Desktop: '16',
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
        default: '500'
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

    //status close and open color and bg
    statusOpenColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
	statusOpenColor: {
        type: 'string',
        default: '#FFFFFF',
    },
    statusOpenHoverColor: {
        type: 'string',
        default: '',
    },
    statusOpenBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
	statusOpenBgColor: {
        type: 'string',
        default: '#008000',
    },
    statusOpenHoverBgColor: {
        type: 'string',
        default: '',
    },
    statusCloseColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
	statusCloseColor: {
        type: 'string',
        default: '#FFFFFF',
    },
    statusCloseHoverColor: {
        type: 'string',
        default: '',
    },
    statusCloseBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
	statusCloseBgColor: {
        type: 'string',
        default: '#FF0000',
    },
    statusCloseHoverBgColor: {
        type: 'string',
        default: '',
    },
    statusPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    statusDesktopPadding: {
        type: 'object',
        default: {
            top: '8',
            bottom: '8',
            left: '16',
            right: '16',
        },
    },
    statusTabPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    statusMobilePadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    statusPaddingLink : {
        type : 'boolean',
        default: true
    },
    statusOpenBorder: {
        type: 'string',
        default: '',
    },
    statusOpenBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    statusOpenBorderColor: {
        type: 'string',
        default: ''
    },
    statusOpenBorderHoverColor: {
        type: 'string',
        default: ''
    },
    statusOpenBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    statusOpenDesktopBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    statusOpenTabletBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    statusOpenMobileBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    statusOpenBorderLink : {
        type : 'boolean',
        default: true
    },
    statusOpenBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    statusOpenDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '999',
            bottom: '999',
            left: '999',
            right: '999',
        },
    },
    statusOpenTabBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    statusOpenMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    statusOpenBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
    statusCloseBorder: {
        type: 'string',
        default: '',
    },
    statusCloseBorderColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    statusCloseBorderColor: {
        type: 'string',
        default: ''
    },
    statusCloseBorderHoverColor: {
        type: 'string',
        default: ''
    },
    statusCloseBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    statusCloseDesktopBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    statusCloseTabletBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    statusCloseMobileBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    statusCloseBorderLink : {
        type : 'boolean',
        default: true
    },
    statusCloseBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    statusCloseDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '999',
            bottom: '999',
            left: '999',
            right: '999',
        },
    },
    statusCloseTabBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    statusCloseMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    statusCloseBorderRadiusLink : {
        type : 'boolean',
        default: true
    },

    //Typography Timezone 
	noticeTextGlobalTypoSwitcher: {
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
	noticeTextGlobalTypographyData: {
        type: 'object',
        default: {}
    },
	noticeTextGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
	noticeTextGlobalTypoOption: {
        type: 'object',
        default: {label: 'Default', value: 'default'},
    },
	noticeTextFontFamily: {
        type: 'string',
        default: 'Default',
    },
	noticeTextFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '',
			Mobile: ''
		}
	},
	noticeTextFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	noticeTextFontWeight : {
        type: 'string',
        default: ''
    },
	noticeTextFontStyle : {
        type: 'string',
        default: ''
    },
	noticeTextTransform : {
        type: 'string',
        default: ''
    },
	noticeTextDecoration : {
        type: 'string',
        default: 'none'
    },
	noticeTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	noticeTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	noticeTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	noticeTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    //notice text color
    noticeTextColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
	noticeTextColor: {
        type: 'string',
        default: '#008000',
    },
    noticeTextHoverColor: {
        type: 'string',
        default: '',
    },
    statusOffNoticeTextColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
	statusOffNoticeTextColor: {
        type: 'string',
        default: '#FF0000',
    },
    statusOffNoticeTextHoverColor: {
        type: 'string',
        default: '',
    },

    /** Start Global Setting */
	timezoneGlobalZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    timezoneOverflow: {
        type: 'string',
        default: 'default',
    },

    timezonePositionType: {
        type: 'string',
        default: 'default'
    },
    timezoneHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    timezoneVROrientationType: {
        type: 'string',
        default: 'top'
    },
    timezoneHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    timezoneHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    timezoneHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    timezoneHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    timezoneVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    timezoneVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    timezoneVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    timezoneVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    timezoneGlobalWraperID : {
        type: 'string',
        default: ''
    },
    timezoneGlobalWraperClass : {
        type: 'string',
        default: ''
    },

    //padding
    timezonePaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    timezoneDesktopPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    timezoneTabPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    timezoneMobilePadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    timezonePaddingLink : {
        type : 'boolean',
        default: true
    },

    //margin
	timezoneMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    timezoneDesktopMargin: {
        type: 'object',
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    timezoneTabMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    timezoneMobileMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    timezoneMarginLink : {
        type : 'boolean',
        default: true
    },

    /** Start Background Normal for timezone */
	timezoneGlobalBgColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	timezoneGlobalBgNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	timezoneGlobalBgNormalClassicColor: {
		type: 'string',
		default: '',
	},
	timezoneGlobalBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	timezoneGlobalBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	timezoneGlobalBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Bg Normal Image for fb container */
	timezoneGlobalBgNormalBackgroundImageUrl: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    timezoneGlobalBgNormalBackgroundImagePosition: {
        type: 'object',
        default: {
            Desktop: { x: '0.5', y: '0.5' },
            Tablet: { x: '', y: '' },
            Mobile: { x: '', y: '' }
        }
    },
    timezoneGlobalBgNormalBackgroundImageAttachment: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    timezoneGlobalBgNormalBackgroundImageRepeat: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    timezoneGlobalBgNormalBackgroundImageSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },


	/**Bg Hover for fb timezone */
	timezoneGlobalBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	timezoneGlobalBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	timezoneGlobalBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	timezoneGlobalBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	timezoneGlobalBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Hover Image for fb timezone */
	timezoneGlobalBgHoverBackgroundImageUrl: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	timezoneGlobalBgHoverBackgroundImagePosition: {
		type: 'object',
		default: {
			Desktop: { x: '0.5', y: '0.5' },
			Tablet: { x: '', y: '' },
			Mobile: { x: '', y: '' }
		}
	},
	timezoneGlobalBgHoverBackgroundImageAttachment: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	timezoneGlobalBgHoverBackgroundImageRepeat: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	timezoneGlobalBgHoverBackgroundImageSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	/** End Background for fb timezone */
    /** Start Border */
	timezoneGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	timezoneGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	timezoneGlobalBorderColor: {
		type: 'string',
		default: ''
	},
	timezoneGlobalBorderHoverColor: {
		type: 'string',
	},
	timezoneGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	timezoneGlobalBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	timezoneGlobalBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	timezoneGlobalBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	timezoneGlobalBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	timezoneGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	timezoneGlobalBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	timezoneGlobalBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	timezoneGlobalBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	timezoneGlobalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    timezoneGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	timezoneGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    timezoneGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    timezoneGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    timezoneGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    timezoneDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    timezoneTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    timezoneMobileSwitcher: {
        type: 'boolean',
        default: false,
    },
    timezoneCustomCSS : {
        type: 'string',
        default: '',
    },
    blockStyle: {
        type: 'string',
        default: '',
    },
    /** End Global Style */
};

export default attributes;