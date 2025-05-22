const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
	deviceType: {
		type: "string",
		default: "Desktop"
	},
    flipBoxPresetStyle: {
        type: "string",
        default: "preset-1",
    },
	flipBoxBg: {
		type: 'string',
		default: '#EBF5FF'
	},
	mediaSwitcher : {
		type: "string",
		default: "icon"
	},
    flipMediaUrl: {
        type: 'string',
        default: ''
    },
    flipMediaAlt: {
        type: "string",
    },
    flipMediaID: {
        type: "number",
    },
	mediaSize: {
		type: 'object',
		default: {
			Desktop: '25',
			Tablet: '20',
			Mobile: '15'
		}
	},
	mediaSizeDesktop: {
		type: "number",
		default: 20
	},
	mediaSizeSizeTablet: {
		type: "number",
		default: 20
	},
	mediaSizeSizeMobile: {
		type: "number",
		default: 20
	},
	mediaSizeUnitsSave: {
		type: "string",
		default: "px"
	},
	mediaSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    mediaBgTypeImage: {
		type: "string",
		default: ''
	},
    mediaBgWidth: {
		type: 'object',
		default: {
			Desktop: '76',
			Tablet: '50',
			Mobile: '40'
		}
	},
	mediaBgWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    mediaBgHeight: {
		type: 'object',
		default: {
			Desktop: '76',
			Tablet: '50',
			Mobile: '40'
		}
	},
	mediaBgHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	btnIconSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '16',
			Mobile: '16'
		}
	},
	btnIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    btnIconColorSwitcher: {
		type: 'string',
        default: 'normal'
	},
    btnIconColor: {
		type: 'string',
        default: '#399CFF'
	},
    btnIconHoverColor: {
		type: 'string',
        default: '#ffffff'
	},
    mediaIconColor: {
		type: 'string',
        default: '#ffffff'
	},
    mediaIconHoverColor: {
		type: 'string',
        default: "#399CFF"
	},
	mediaIconColorSwitcher : {
		type: "string",
		default: "normal"
	},
    btnIconPosition: {
		type: 'string',
        default: 'right'
	},
    flipIconPosition: {
		type: 'string',
        default: 'top'
	},
    flipIconVerticalPosition: {
		type: 'string',
        default: 'top'
	},
    flipCardAlignment: {
		type: 'string',
        default: 'start'
	},
    height: {
        type: 'number',
        default: 50
    },
    width: {
        type: 'number',
        default: 50
    },
	icon: {
		type: 'string',
		default: 'swatchbook',
	},
	btnIcon: {
		type: 'string',
		default: 'arrow-up-right-from-square',
	},
    boxBgColor: {
        type: 'string',
        default: '#fff'
    },
	boxBgHoverColor: {
		type: 'string',
	},
	boxBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
    titleColor: {
        type: 'string',
        default: '#15171C'
    },
    borderRadius: {
        type: 'number',
        default: 0,
    },
    titleText: {
        type: 'string',
        default: 'Icon Box title',
    },
    wrapperAlignment: {
        type: "string",
        default: "center",
    },
	contentAlignment: {
        type: "string",
        default: "left",
    },
	descAlignment: {
        type: "string",
        default: "left",
    },
	buttonAlignment: {
        type: "string",
        default: "center",
    },
    Alignment: {
        type: "string",
        default: "center",
    },
    Heading_Text: {
        type : "string",
        default: "Web Design"
    },
    headingTag: {
        type : "string",
        default: "h2"
    },
    /** Start Heading Style **/
    headingGlobalTypographyData: {
        type: "object",
        default: {}
    },
    headingGlobalTypoSwitcher: {
        type: "object",
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
    headingGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    headingGlobalTypoOption: {
		type: "object",
		default: {label: 'Default', value: 'default'},
	},
    headingFontFamily: {
        type: "string",
        default: "Default",
    },
    headingFontSize: {
		type: 'object',
		default: {
			Desktop: '24',
			Tablet: '18',
			Mobile: '16'
		}
	},
	headingFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    headingFontWeight : {
        type: "string",
        default: "600"
    },
    headingFontStyle : {
        type: "string",
        default: ""
    },
    headingTextTransform : {
        type: "string",
        default: ""
    },
    headingTextDecoration : {
        type: "string",
        default: ""
    },
    headingLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	headingLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    headingLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	headingLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    /** Heading Color **/
    Heading_Color_Switcher : {
        type: "string",
        default: "normal"
    },
    Heading_Color : {
        type: "string",
        default: "#15171C"
    },
    Heading_Hover_Color: {
        type: 'string',
        default: "#ffffff"
    },
    Heading_Background_Color: {
        type: 'string',
    },
    Heading_Border: {
        type: 'string',
        default: "none",
    },
    Heading_Border_Color: {
        type: 'string',
    },
    Heading_Border_Hover_Color: {
        type: 'string',
    },
    Heading_Border_Color_Switcher : {
        type: "string",
        default: "normal"
    },
    Heading_Border_units : {
        type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    Heading_Desktop_Border_Width: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    Heading_Tab_Border_Width: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    Heading_Mobile_Border_Width: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    borderLink: {
        type : "boolean",
        default: true
    },

    Heading_Border_radius_units : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    Heading_Desktop_Border_radius_Width: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    Heading_Tab_Border_radius_Width: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    Heading_Mobile_Border_radius_Width: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    borderRadiusLink : {
        type : "boolean",
        default: true
    },

    Heading_padding_units : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    Heading_Desktop_padding: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    Heading_Tab_padding: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    Heading_Mobile_padding: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    paddingLink : {
        type : "boolean",
        default: true
    },
	//Margin
    Heading_Margin_Units : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    Heading_Desktop_Margin: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "16",
			right: "16",
		},
    },
    Heading_Tab_Margin: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "16",
			right: "16",
		},
    },
    Heading_Mobile_Margin: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "16",
			right: "16",
		},
    },
    Heading_Margin_Link : {
        type : "boolean",
        default: true
    },

    /** Start Sub Heading Style */  
    subHeadingGlobalTypographyData: {
        type: "object",
        default: {}
    },
    subHeadingGlobalTypoSwitcher: {
        type: "object",
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
    subHeadingGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    subHeadingGlobalTypoOption: {
		type: "object",
		default: {label: 'Default', value: 'default'},
	},
    subHeadingFontFamily: {
        type: "string",
        default: "Default",
    },
    subHeadingFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    subHeadingFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    subHeadingFontWeight: {
        type: "string",
        default: ""
    },
    subHeadingFontStyle: {
        type: "string",
        default: ""
    },
    subHeadingTextTransform: {
        type: "string",
        default: ""
    },
    subHeadingTextDecoration: {
        type: "string",
        default: ""
    },
    subHeadingLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    subHeadingLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    subHeadingLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    subHeadingLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    SubHeadingColorSwitcher : {
        type: "string",
        default: "normal"
    },
    SubHeadingColor : {
        type: "string",
        default: "#555E72"
    },
    SubHeadingHoverColor : {
        type: "string",
        default: "#ffffff"
    },
    Sub_Heading_Text: {
        type: "string",
        default: "Contrary to popular belief, Lorem Ipsum is not simply random text." +
			" It has roots in a piece of classical Latin"
    },
    Sub_Heading_Tag: {
        type : "string",
        default: "p"
    },
    descSwitcher: {
        type: "boolean",
        default: false,
    },
    Sub_Heading_Position: {
        type: "string",
        default: "bottom",
    },
    SubHeadingPaddingUnits : {
        type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    SubHeadingDesktopPadding: {
        type: "object",
        default: {
            top: '15',
            bottom: '15',
            left: '0',
            right: '0',
        },
    },
    SubHeadingTabPadding: {
        type: "object",
        default: {
            top: '15',
            bottom: '15',
            left: '0',
            right: '0',
        },
    },
    SubHeadingMobilePadding: {
        type: "object",
        default: {
            top: '10',
            bottom: '10',
            left: '0',
            right: '0',
        },
    },
    SubHeadingPaddingLink: {
        type : "boolean",
        default: true
    },

	//Margin
	descMarginUnits : {
		type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	descDesktopMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '16',
			right: '16',
		},
	},
	descTabMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '16',
			right: '16',
		},
	},
	descMobileMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '16',
			right: '16',
		},
	},
	descMarginLink : {
		type : "boolean",
		default: true
	},

    //flip Button
    flip_Button_Text: {
        type: "string",
        default: "Learn More"
    },
    flip_Button_Switcher: {
        type: "boolean",
        default: false,
    },
    buttonIconSwitcher: {
        type: "boolean",
        default: true,
    },
    flipButtonLink: {
        type: "string",
        default: ""
    },
    flipbtnTargetUrl: {
        type: "boolean",
    },
	flipButtonPaddingUnits : {
		type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipButtonDesktopPadding: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	flipButtonTabPadding: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	flipButtonMobilePadding: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
    flipButtonPaddingLink : {
		type : "boolean",
		default: true
	},
    
	//Button Margin
	flipButtonMarginUnits : {
		type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipButtonDesktopMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '16',
			right: '16',
		},
	},
	flipButtonTabMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '16',
			right: '16',
		},
	},
	flipButtonMobileMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '16',
			right: '16',
		},
	},
	flipButtonMarginLink : {
		type : "boolean",
		default: true
	},

	//flip Button Border
	flipButtonBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	flipButtonBorder: {
		type: 'string',
		default: "none",
	},
	flipButtonBorderColor: {
		type: 'string',
	},
	flipButtonHoverBorderColor: {
		type: 'string',
	},
	flipButtonBorderUnits : {
		type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipButtonDesktopBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	flipButtonTabBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	flipButtonMobileBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
    flipButtonBorderLink : {
		type : "boolean",
		default: true
	},

	//Button Border Radius
	flipBtnBorderradiusUnits : {
		type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	flipBtnDesktopBorderradiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	flipBtnTabBorderradiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	flipBtnMobileBorderradiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
    btnBorderRadiusLink : {
        type : "boolean",
        default: true
    },
	//flip box padding
	flipBoxPaddingUnits : {
		type: "string",
		default: "px"
	},
	flipBoxDesktopPadding: {
		type: "object",
		default: {
			top: '40',
			bottom: '40',
			left: '40',
			right: '40',
		},
	},
	flipBoxTabPadding: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	flipBoxMobilePadding: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	// flip box margin
	flipBoxMarginUnits : {
		type: "string",
		default: "px"
	},
	flipBoxDesktopMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	flipBoxTabMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	flipBoxMobileMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	flipBoxActiveMarginDevice: {
		type: "string",
		default: "desktop"
	},
	flipBoxMarginLink : {
		type : "boolean",
		default: true
	},
	// flip Box Border
	flipBoxBorder: {
		type: 'string',
		default: "none",
	},
	flipBoxBorderColor: {
		type: 'string',
	},
	flipBoxBorderHoverColor: {
		type: 'string',
	},
	flipBoxBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	flipBoxBorderUnits : {
		type: "string",
		default: "px"
	},
	flipBoxDesktopBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	flipBoxTabBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	flipBoxMobileBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	// 	flip Box Border Radius
	flipBoxBorderRadiusUnits : {
		type: "string",
		default: "px"
	},
	flipBoxDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	flipBoxTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	flipBoxMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	// Button
    buttonGlobalTypographyData: {
        type: "object",
        default: {}
    },
    buttonGlobalTypoSwitcher: {
        type: "object",
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
    buttonGlobalTypoType: {
        type: "string",
        default: 'default',
    },
    buttonGlobalTypoOption: {
		type: "object",
		default: {label: 'Default', value: 'default'},
	},
	buttonFontFamily: {
		type: "string",
		default: "Default",
	},
	buttonFontSize: {
		type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
	},
	buttonFontSizeUnits: {
        type: 'object',
		default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
	},
	buttonFontWeight : {
		type: "string",
		default: "400"
	},
	buttonFontStyle : {
		type: "string",
		default: "normal"
	},
	buttonTextTransform : {
		type: "string",
		default: "none"
	},
	buttonTextDecoration : {
		type: "string",
		default: "none"
	},
	buttonLetterSpacing : {
		type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
	},
	buttonLetterSpacingUnits : {
		type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
	},
	buttonLineHeight : {
		type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
	},
	buttonLineHeightUnits : {
		type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
	},
	// Button Color
	buttonColorSwitcher : {
		type: "string",
		default: "normal"
	},
	buttonTextColor : {
		type: "string",
		default: '#399CFF'
	},
	buttonTextHoverColor : {
		type: "string",
        default: "#ffffff"
	},
	buttonBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	buttonBgColor : {
		type: "string",
		default: ''
	},
	buttonBgHoverColor : {
		type: "string"
	},
	globalZIndex : {
        type: 'object',
        default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
    },
    flipBoxOverflow: {
        type: 'string',
        default: "default",
    },
	globalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    globalPaddingDesktop: {
        type: "object",
        default: {
            top: '32',
            bottom: '32',
            left: '32',
            right: '32',
        },
    },
    globalPaddingTablet: {
        type: "object",
        default: {
            top: '32',
            bottom: '32',
            left: '16',
            right: '16',
        },
    },
    globalPaddingMobile: {
        type: "object",
        default: {
            top: '32',
            bottom: '32',
            left: '16',
            right: '16',
        },
    },
    globalPaddingLink : {
        type : "boolean",
        default: true
    },
    globalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    globalMarginDesktop: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    globalMarginTablet: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    globalMarginMobile: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    globalMarginLink : {
        type : "boolean",
        default: true
    },
    globalBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    globalBgColor : {
        type: "string",
        default: '#FEEBD5'
    },
    globalBgHoverColor: {
        type: "string",
        default: "#F89B2E"
    },
    globalBorder: {
        type: 'string',
        default: "none",
    },
    globalBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    globalBorderColor: {
        type: 'string',
    },
    globalBorderHoverColor: {
        type: 'string',
    },
    globalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    globalBorderDesktop: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    globalBorderTablet: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    globalBorderMobile: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    globalBorderLink : {
        type : "boolean",
        default: true
    },
    globalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    globalBorderRadiusDesktop: {
        type: "object",
        default: {
            top: '6',
            bottom: '6',
            left: '6',
            right: '6',
        },
    },
    globalBorderRadiusTablet: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    globalBorderRadiusMobile: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    globalBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    mediaPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    mediaPaddingDesktop: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    mediaPaddingTablet: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    mediaPaddingMobile: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    mediaPaddingLink: {
        type: "boolean",
        default: true
    },
    mediaMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    mediaMarginDesktop: {
        type: "object",
        default: {
            top: '0',
            bottom: '10',
            left: '16',
            right: '16',
        },
    },
    mediaMarginTablet: {
        type: "object",
        default: {
            top: '0',
            bottom: '10',
            left: '16',
            right: '16',
        },
    },
    mediaMarginMobile: {
        type: "object",
        default: {
            top: '0',
            bottom: '10',
            left: '16',
            right: '16',
        },
    },
    mediaMarginLink: {
        type: "boolean",
        default: true
    },
    mediaBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    mediaBgColor: {
        type: "string",
        default: "#399CFF"
    },
    bgType: {
        type: "string",
        default: "color",
    },
    mediaBgHoverColor: {
        type: "string",
        default: "#ffffff"
    },
    mediaBorder: {
        type: "string",
        default: "none",
    },
    mediaBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    mediaBorderColor: {
        type: "string",
    },
    mediaBorderHoverColor: {
        type: "string",
    },
    mediaBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    mediaBorderDesktop: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    mediaBorderTablet: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    mediaBorderMobile: {
        type: "object",
        default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
    },
    mediaBorderLink: {
        type: "boolean",
        default: true
    },
    mediaBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    mediaBorderRadiusDesktop: {
        type: "object",
        default: {
            top: '50',
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    mediaBorderRadiusTablet: {
        type: "object",
        default: {
            top: '50',
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    mediaBorderRadiusMobile: {
        type: "object",
        default: {
            top: '50',
            bottom: '50',
            left: '50',
            right: '50',
        },
    },
    mediaBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    flipMediaBackgroundImageUrl: {
        type: "string",
    },
    flipMediaBackgroundImageAlt: {
        type: "string",
    },
    flipMediaBackgroundImageID: {
        type: "number",
    },
    boxGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    boxGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    boxGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    boxGlobalHoverBoxShadowValues: {
        type: 'array',
        default: [],
    },
    boxGlobalHoverBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    mediaBackColorSwitcher: {
        type: "string",
        default: "normal"
    },
    mediaBackgroundType: {
        type: "string",
        default: "classic"
    },
    mediaClassicColor: {
        type: "string",
        default: ""
    },
    mediaGradientColor: {
        type: "string",
    },
    mediaCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    mediaCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    mediaBackgroundColorStyle: {
        type: "string",
        default: ""
    },
    mediaBackgroundImageUrl: {
        type: "string",
        default: ""
    },
    mediaBackgroundImageAlt: {
        type: "string",
        default: ""
    },
    mediaBackgroundImageID: {
        type: "string",
        default: ""
    },
    mediaBackgroundImagePosition: {
        type: "string",
        default: ""
    },
    mediaBackgroundImageAttachment: {
        type: "string",
        default: ""
    },
    mediaBackgroundImageSize: {
        type: "string",
        default: ""
    },
    mediaBackgroundImageRepeat: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundType: {
        type: "string",
        default: "classic"
    },
    mediaHoverClassicColor: {
        type: "string",
        default: ""
    },
    mediaHoverGradientColor: {
        type: "string",
    },
    mediaHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    mediaHoverCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundColorStyle: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundImageUrl: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundImageAlt: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundImageID: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundImagePosition: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundImageAttachment: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundImageSize: {
        type: "string",
        default: ""
    },
    mediaHoverBackgroundImageRepeat: {
        type: "string",
        default: ""
    },    
    blockStyle: {
        type: "string",
        default: "",
    },

    flipBoxDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    flipBoxTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    flipBoxMobileSwitcher: {
        type: "boolean",
        default: false,
    },

    /** Start Class & ID Setting */
    flipBoxGlobalCustomCSS : {
        type: "string",
        default: "",
    },
	flipBoxGlobalWraperID : {
		type: "string",
		default: ""
	},

	flipBoxGlobalWraperClass : {
		type: "string",
		default: ""
	},
	
	/** End Class & ID Setting */

    flipBoxPositionType: {
        type: "string",
        default: "default"
    },
    flipBoxHZOrientationType: {
        type: "string",
        default: "left"
    },
    flipBoxVROrientationType: {
        type: "string",
        default: "top"
    },
    flipBoxHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    flipBoxHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    flipBoxHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    flipBoxHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    flipBoxVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    flipBoxVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    flipBoxVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    flipBoxVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
}
//
export default attributes;
