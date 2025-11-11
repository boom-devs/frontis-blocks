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

	//Color
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
    }
};

export default attributes;