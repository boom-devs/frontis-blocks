const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: "",
    },
    iconBoxPresetStyle: {
        type: "string",
        default: "preset-1",
    },
	iconBoxBg: {
		type: 'string',
		default: '#EBF5FF'
	},
	mediaSwitcher : {
		type: "string",
		default: "icon"
	},
    iconBoxMediaUrl: {
        type: 'string',
        default: ''
    },
    iconBoxMediaAlt: {
        type: "string",
    },
    iconBoxMediaID: {
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
			Desktop: '68',
			Tablet: '68',
			Mobile: '68'
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
			Desktop: '68',
			Tablet: '68',
			Mobile: '68'
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
        default: ''
	},
    mediaIconColor: {
		type: 'string',
        default: '#399CFF'
	},
    mediaIconHoverColor: {
		type: 'string',
        default: "#FFFFFF"
	},
	mediaIconColorSwitcher : {
		type: "string",
		default: "normal"
	},
    btnIconPosition: {
		type: 'string',
        default: 'right'
	},
    iconBoxIconPosition: {
		type: 'string',
        default: 'top'
	},
    iconBoxIconVerticalPosition: {
		type: 'string',
        default: 'top'
	},
    iconBoxCardAlignment: {
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
		default: 'layer-group',
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
        default: "center",
    },
	descAlignment: {
        type: "string",
        default: "center",
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
        default: "Fast Loading Speed"
    },
    headingTag: {
        type : "string",
        default: "h2"
    },
    /** Start Heading Style */
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
        default: ""
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
        default: ""
    },
    Sub_Heading_Text: {
        type: "string",
        default: "Corrupti maiores atque  possimus ratione"
    },
    Sub_Heading_Tag: {
        type : "string",
        default: "p"
    },
    Sub_Heading_Switcher: {
        type: "boolean",
        default: true,
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
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    SubHeadingTabPadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    SubHeadingMobilePadding: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
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
			top: '14',
			bottom: '32',
			left: '12',
			right: '12',
		},
	},
	descTabMargin: {
		type: "object",
		default: {
			top: '14',
			bottom: '32',
			left: '12',
			right: '12',
		},
	},
	descMobileMargin: {
		type: "object",
		default: {
			top: '14',
			bottom: '32',
			left: '12',
			right: '12',
		},
	},
	descMarginLink : {
		type : "boolean",
		default: true
	},

    //iconBox Button
    icon_Box_Button_Text: {
        type: "string",
        default: "Learn More"
    },
    icon_Box_Button_Switcher: {
        type: "boolean",
        default: true,
    },
    buttonIconSwitcher: {
        type: "boolean",
        default: false,
    },
    iconBoxButtonLink: {
        type: "string",
        default: ""
    },
    iconBoxbtnTargetUrl: {
        type: "boolean",
    },
	iconBoxButtonPaddingUnits : {
		type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	iconBoxButtonDesktopPadding: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	iconBoxButtonTabPadding: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	iconBoxButtonMobilePadding: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
    iconBoxButtonPaddingLink : {
		type : "boolean",
		default: true
	},
    
	//Button Margin
	iconBoxButtonMarginUnits : {
		type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	iconBoxButtonDesktopMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '12',
			right: '12',
		},
	},
	iconBoxButtonTabMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '12',
			right: '12',
		},
	},
	iconBoxButtonMobileMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '12',
			right: '12',
		},
	},
	iconBoxButtonMarginLink : {
		type : "boolean",
		default: true
	},

	//iconBox Button Border
	iconBoxButtonBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	iconBoxButtonBorder: {
		type: 'string',
		default: "none",
	},
	iconBoxButtonBorderColor: {
		type: 'string',
	},
	iconBoxButtonHoverBorderColor: {
		type: 'string',
	},
	iconBoxButtonBorderUnits : {
		type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	iconBoxButtonDesktopBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	iconBoxButtonTabBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	iconBoxButtonMobileBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
    iconBoxButtonBorderLink : {
		type : "boolean",
		default: true
	},

	//Button Border Radius
	iconBoxBtnBorderradiusUnits : {
		type: "object",
        default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	iconBoxBtnDesktopBorderradiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	iconBoxBtnTabBorderradiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	iconBoxBtnMobileBorderradiusWidth: {
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
	//iconBox box padding
	iconBoxPaddingUnits : {
		type: "string",
		default: "px"
	},
	iconBoxDesktopPadding: {
		type: "object",
		default: {
			top: '40',
			bottom: '40',
			left: '40',
			right: '40',
		},
	},
	iconBoxTabPadding: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	iconBoxMobilePadding: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	// iconBox box margin
	iconBoxMarginUnits : {
		type: "string",
		default: "px"
	},
	iconBoxDesktopMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	iconBoxTabMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	iconBoxMobileMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	iconBoxActiveMarginDevice: {
		type: "string",
		default: "desktop"
	},
	iconBoxMarginLink : {
		type : "boolean",
		default: true
	},
	// iconBox Box Border
	iconBoxBorder: {
		type: 'string',
		default: "none",
	},
	iconBoxBorderColor: {
		type: 'string',
	},
	iconBoxBorderHoverColor: {
		type: 'string',
	},
	iconBoxBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	iconBoxBorderUnits : {
		type: "string",
		default: "px"
	},
	iconBoxDesktopBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	iconBoxTabBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	iconBoxMobileBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	// 	iconBox Box Border Radius
	iconBoxBorderRadiusUnits : {
		type: "string",
		default: "px"
	},
	iconBoxDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	iconBoxTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	iconBoxMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	// Button
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
        default: ""
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
            top: '24',
            bottom: '24',
            left: '12',
            right: '12',
        },
    },
    globalPaddingTablet: {
        type: "object",
        default: {
            top: '24',
            bottom: '24',
            left: '12',
            right: '12',
        },
    },
    globalPaddingMobile: {
        type: "object",
        default: {
            top: '24',
            bottom: '24',
            left: '12',
            right: '12',
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
        default: ''
    },
    globalBgHoverColor: {
        type: "string",
        default: "#D7EBFF"
    },
    globalBorder: {
        type: 'string',
        default: "solid",
    },
    globalBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    globalBorderColor: {
        type: 'string',
        default: "#D7EBFF"
    },
    globalBorderHoverColor: {
        type: 'string',
        default: ""
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
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
    },
    globalBorderTablet: {
        type: "object",
        default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
		},
    },
    globalBorderMobile: {
        type: "object",
        default: {
			top: '1',
			bottom: '1',
			left: '1',
			right: '1',
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
            bottom: '32',
            left: '12',
            right: '12',
        },
    },
    mediaMarginTablet: {
        type: "object",
        default: {
            top: '0',
            bottom: '32',
            left: '12',
            right: '12',
        },
    },
    mediaMarginMobile: {
        type: "object",
        default: {
            top: '0',
            bottom: '32',
            left: '12',
            right: '12',
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
        default: "#D7EBFF"
    },
    bgType: {
        type: "string",
        default: "color",
    },
    mediaBgHoverColor: {
        type: "string",
        default: "#399CFF"
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
            top: '24',
            bottom: '24',
            left: '24',
            right: '24',
        },
    },
    mediaBorderRadiusTablet: {
        type: "object",
        default: {
            top: '24',
            bottom: '24',
            left: '24',
            right: '24',
        },
    },
    mediaBorderRadiusMobile: {
        type: "object",
        default: {
            top: '24',
            bottom: '24',
            left: '24',
            right: '24',
        },
    },
    mediaBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    iconBoxMediaBackgroundImageUrl: {
        type: "string",
    },
    iconBoxMediaBackgroundImageAlt: {
        type: "string",
    },
    iconBoxMediaBackgroundImageID: {
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
        default: "#D7EBFF"
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
        default: "#399CFF"
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
    wrapperLink: {
        type: "string",
        default: ""
    },
    wrapperTargetUrl: {
        type: "boolean",
    },
    wrapperUrlSwitcher: {
        type: "boolean",
        default: false
    },
    
    iconBoxDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    iconBoxTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    iconBoxMobileSwitcher: {
        type: "boolean",
        default: false,
    },

    /** Start Class & ID Setting */
    iconBoxCustomCSS : {
        type: "string",
        default: "",
    },
	iconBoxGlobalWraperID : {
		type: "string",
		default: ""
	},

	iconBoxGlobalWraperClass : {
		type: "string",
		default: ""
	},
	/** End Class & ID Setting */

    iconBoxPositionType: {
        type: "string",
        default: "default"
    },
    iconBoxHZOrientationType: {
        type: "string",
        default: "left"
    },
    iconBoxVROrientationType: {
        type: "string",
        default: "top"
    },
    iconBoxHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    iconBoxHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    iconBoxHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    iconBoxHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    iconBoxVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    iconBoxVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    iconBoxVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    iconBoxVRBottomOffsetUnits: {
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
