const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: ""
    },
    paginationArrow: {
        type: "string",
        default: "none"
    },
    showLabel: {
        type: "boolean",
        default: true
    },

    /** Start Pagination Style */
    paginationAlignment: {
        type: 'object',
        default: {
            Desktop: 'left',
            Tablet: '',
            Mobile: '',
        },
    },
    paginationItemGap: {
        type: 'object',
        default: {
            Desktop: '24',
            Tablet: '',
            Mobile: '',
        },
    },
    paginationItemGapUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },

    paginationPrevNextType: {
		type: 'string',
		default: 'icon'
	},

	paginationPrevTxt: {
		type: 'string',
		default: 'Prev'
	},
	paginationPrevIcon: {
		type: 'string',
		default: 'angle-left'
	},
	paginationNextTxt: {
		type: 'string',
		default: 'Next'
	},
	paginationNextIcon: {
		type: 'string',
		default: 'angle-right'
	},


    /** Pagination Arrow */
	paginationArrowSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationArrowSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	paginationArrowBgColorSwitcher : {  
		type: 'string',
		default: 'normal'
	},
	paginationArrowNormalBackgroundType: {   
		type: 'string',
		default: 'classic',
	},
	paginationArrowNormalClassicColor: {
		type: 'string',
		default: '#E6E6E6',
	},
	paginationArrowNormalGradientColor: {
		type: 'string',
		default: null,
	},
	paginationArrowNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	paginationArrowNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	paginationArrowHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	paginationArrowHoverClassicColor: {
		type: 'string',
		default: '',
	},
	paginationArrowHoverGradientColor: {
		type: 'string',
		default: null,
	},
	paginationArrowHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	paginationArrowHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	paginationArrowBorder: {
		type: 'string',
		default: 'none',
	},
	paginationArrowBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	paginationArrowBorderColor: {
		type: 'string',
	},
	paginationArrowBorderHoverColor: {
		type: 'string',
	},
	paginationArrowBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	paginationArrowDesktopBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationArrowTabletBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationArrowMobileBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationArrowBorderLink: {
		type: 'boolean',
		default: true
	},
	paginationArrowBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	paginationArrowDesktopBorderRadius: {
		type: 'object', 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	paginationArrowTabletBorderRadius: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationArrowMobileBorderRadius: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationArrowBorderRadiusLink: {
		type: 'boolean',
		default: true
	},

	paginationArrowTextGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	paginationArrowTextGlobalTypoSwitcher: {
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
	paginationArrowTextGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	paginationArrowTextGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	paginationArrowTextFontFamily: { 
		type: 'string',
		default: 'Default',
	},
	paginationArrowTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationArrowTextFontSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	paginationArrowTextFontWeight: {
		type: 'string',
		default: '400'
	},
	paginationArrowTextFontStyle: {
		type: 'string',
		default: 'normal'
	},
	paginationArrowTextTransform: { 
		type: 'string',
		default: 'none'
	},
	paginationArrowTextDecoration: {
		type: 'string',
		default: 'none'
	},
	paginationArrowTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationArrowTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	paginationArrowTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationArrowTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	paginationArrowTextColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	paginationArrowTextColor : {
		type: 'string',
		default: ''
	},
	paginationArrowTextHoverColor: {
		type: 'string',
		default: ''
	},
	paginationPrevNextWidth: {
        type: 'object',
        default: {
            Desktop: '36',
            Tablet: '',
            Mobile: ''
        }
    },
    paginationPrevNextWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    paginationArrowIconColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    paginationArrowIconColor: {
        type: 'string',
        default: ''
    },
    paginationArrowIconHoverColor: {
        type: 'string',
        default: ''
    },
	// pagination arrow end

	/** Pagination Button Start */
	paginationBtnSize: {
		type: 'object',
		default: {
			Desktop: '36',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationBtnSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	paginationBtnGap: {
		type: 'object',
		default: {
			Desktop: '4',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationBtnGapUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	paginationBtnBgColorSwitcher : {  
		type: 'string',
		default: 'normal'
	},
	paginationBtnNormalBackgroundType: {   
		type: 'string',
		default: 'classic',
	},
	paginationBtnNormalClassicColor: {
		type: 'string',
		default: '',
	},
	paginationBtnNormalGradientColor: {
		type: 'string',
		default: null,
	},
	paginationBtnNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	paginationBtnNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	paginationBtnHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	paginationBtnHoverClassicColor: {
		type: 'string',
		default: '',
	},
	paginationBtnHoverGradientColor: {
		type: 'string',
		default: null,
	},
	paginationBtnHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	paginationBtnHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},


	paginationActiveBtnTextColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	paginationActiveBtnTextColor : {
		type: 'string',
		default: ''
	},
	paginationActiveBtnTextHoverColor: {
		type: 'string',
		default: ''
	},
	paginationActiveBtnBgColorSwitcher : {  
		type: 'string',
		default: 'normal'
	},
	paginationActiveBtnNormalBackgroundType: {   	
		type: 'string',
		default: 'classic',
	},
	paginationActiveBtnNormalClassicColor: {
		type: 'string',
		default: '#E6E6E6',
	},
	paginationActiveBtnNormalGradientColor: {
		type: 'string',
		default: null,
	},
	paginationActiveBtnNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	paginationActiveBtnNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	paginationActiveBtnHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	paginationActiveBtnHoverClassicColor: {
		type: 'string',
		default: '#E6E6E6',
	},
	paginationActiveBtnHoverGradientColor: {
		type: 'string',
		default: null,
	},
	paginationActiveBtnHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	paginationActiveBtnHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},

	paginationBtnBorder: {
		type: 'string',
		default: 'none',
	},
	paginationBtnBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	paginationBtnBorderColor: {
		type: 'string',
	},
	paginationBtnBorderHoverColor: {
		type: 'string',
	},
	paginationBtnBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	paginationBtnDesktopBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationBtnTabletBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationBtnMobileBorder: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationBtnBorderLink: {
		type: 'boolean',
		default: true
	},
	paginationBtnBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	paginationBtnDesktopBorderRadius: {
		type: 'object', 
		default: {
			top: '50',
			bottom: '50',
			left: '50',
			right: '50',
		},
	},
	paginationBtnTabletBorderRadius: {
		type: 'object', 
		default: {	
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationBtnMobileBorderRadius: {
		type: 'object', 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	paginationBtnBorderRadiusLink: {
		type: 'boolean',
		default: true
	},

	paginationBtnTextGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	paginationBtnTextGlobalTypoSwitcher: {
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
	paginationBtnTextGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	paginationBtnTextGlobalTypoOption: {
		type: 'object',
		default: {label: 'Default', value: 'default'},
	},
	paginationBtnTextFontFamily: { 
		type: 'string',
		default: 'Default',
	},
	paginationBtnTextFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationBtnTextFontSizeUnits: { 
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	paginationBtnTextFontWeight: {
		type: 'string',
		default: '400'
	},
	paginationBtnTextFontStyle: {
		type: 'string',
		default: 'normal'
	},
	paginationBtnTextTransform: { 
		type: 'string',
		default: 'none'
	},
	paginationBtnTextDecoration: {
		type: 'string',
		default: 'none'
	},
	paginationBtnTextLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationBtnTextLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	paginationBtnTextLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	paginationBtnTextLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	paginationBtnTextColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	paginationBtnTextColor : {
		type: 'string',
		default: ''
	},
	paginationBtnTextHoverColor: {
		type: 'string',
		default: ''
	},
	// pagination btn end
};

export default attributes;
