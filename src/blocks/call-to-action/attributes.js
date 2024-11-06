const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
	deviceType: {
		type: "string",
		default: "Desktop"
	},
	infoBoxBg: {
		type: 'string',
		default: '#EBF5FF'
	},
	mediaSwitcher : {
		type: "string",
		default: "icon"
	},
    infoMediaUrl: {
        type: 'string',
        default: ''
    },
	mediaSize: {
		type: 'object',
		default: {
			Desktop: 25,
			Tablet: 25,
			Mobile: 25
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
			Desktop: 50,
			Tablet: 50,
			Mobile: 50
		}
	},
	mediaBgWidthDesktop: {
		type: "number",
		default: 20
	},
	mediaBgWidthTablet: {
		type: "number",
		default: 20
	},
	mediaBgWidthMobile: {
		type: "number",
		default: 20
	},
	mediaBgWidthUnitsSave: {
		type: "string",
		default: "px"
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
			Desktop: 50,
			Tablet: 50,
			Mobile: 50
		}
	},
	mediaBgHeightDesktop: {
		type: "number",
		default: 20
	},
	mediaBgHeightTablet: {
		type: "number",
		default: 20
	},
	mediaBgHeightMobile: {
		type: "number",
		default: 20
	},
	mediaBgHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	btnIcon: {
		type: 'string',
		default: 'arrow-up-right-from-square',
	},
	btnIconSize: {
		type: 'object',
		default: {
			Desktop: 16,
			Tablet: 16,
			Mobile: 16
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
        default: '#15171C'
	},
    btnIconHoverColor: {
		type: 'string',
        default: ''
	},
	//Button two icon
	btnTwoIcon: {
		type: 'string',
		default: 'arrow-up-right-from-square',
	},
	btnTwoIconSize: {
		type: 'object',
		default: {
			Desktop: 16,
			Tablet: 16,
			Mobile: 16
		}
	},
	btnTwoIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	btnTwoIconColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	btnTwoIconColor: {
		type: 'string',
		default: '#ffffff'
	},
	btnTwoIconHoverColor: {
		type: 'string',
		default: ''
	},
    mediaIconColor: {
		type: 'string',
        default: '#ffffff'
	},
    mediaIconHoverColor: {
		type: 'string',
	},
	mediaIconColorSwitcher : {
		type: "string",
		default: "normal"
	},
    btnIconPosition: {
		type: 'string',
        default: 'left'
	},
    infoIconPosition: {
		type: 'string',
        default: 'top'
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
		default: 'face-smile',
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
    mediaBgColor: {
        type: 'string',
        default: '#fff'
    },
	mediaBgHoverColor: {
		type: 'string',
	},
	mediaBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
    titleColor: {
        type: 'string',
        default: '#ffffff'
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
        default: "We are help you to grow up"
    },
    Heading_Tag: {
        type : "string",
        default: "h2"
    },
    Heading_Font_Family: {
        type: "string",
        default: "inherit",
    },
    Heading_Font_Size: {
        type: "number",
        default: 72
    },
    Heading_Font_size_units: {
        type: "string",
        default: "px"
    },
    Heading_Font_Weight : {
        type: "string",
        default: "700"
    },
    Heading_Font_Style : {
        type: "string",
        default: "normal"
    },
    Heading_Text_Transform : {
        type: "string",
        default: "none"
    },
    Heading_Text_Decoration : {
        type: "string",
        default: "none"
    },
    Heading_Letter_Spacing : {
        type: "number",
    },
    Heading_Letter_Spacing_units : {
        type: "string",
        default: "px"
    },
    Heading_Line_Height : {
        type: "number",
    },
    Heading_Line_Height_units : {
        type: "string",
        default: "px"
    },
    Heading_Color_Switcher : {
        type: "string",
        default: "normal"
    },
    Heading_Color : {
        type: "string",
		default: "#ffffff"
    },
    Heading_Hover_Color: {
        type: 'string',
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
        type: "string",
        default: "px"
    },
    Heading_Desktop_Border_Width: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    Heading_Tab_Border_Width: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    Heading_Mobile_Border_Width: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    activeBorderDevice: {
        type: "string",
        default: "desktop"
    },
    borderLink : {
        type : "boolean",
        default: true
    },
    Heading_Border_radius_units : {
        type: "string",
        default: "px"
    },
    Heading_Desktop_Border_radius_Width: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    Heading_Tab_Border_radius_Width: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    Heading_Mobile_Border_radius_Width: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    activeBorderRadiusDevice: {
        type: "string",
        default: "desktop"
    },
    borderRadiusLink : {
        type : "boolean",
        default: true
    },
    Heading_padding_units : {
        type: "string",
        default: "px"
    },
    Heading_Desktop_padding: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    Heading_Tab_padding: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    Heading_Mobile_padding: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    activePaddingDevice: {
        type: "string",
        default: "desktop"
    },
    paddingLink : {
        type : "boolean",
        default: true
    },
	//Margin
    Heading_Margin_Units : {
        type: "string",
        default: "px"
    },
    Heading_Desktop_Margin: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    Heading_Tab_Margin: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    Heading_Mobile_Margin: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    Heading_Active_Margin_Device: {
        type: "string",
        default: "desktop"
    },
    Heading_Margin_Link : {
        type : "boolean",
        default: true
    },
    //Sub Heading
    SubHeadingFontFamily: {
        type: "string",
        default: "inherit",
    },
    SubHeadingFontSize: {
        type: "number",
        default: 16
    },
    SubHeadingFontSizeUnits: {
        type: "string",
        default: "px"
    },
    SubHeadingFontWeight : {
        type: "string",
        default: "400"
    },
    SubHeadingFontStyle : {
        type: "string",
        default: "normal"
    },
    SubHeadingTextTransform : {
        type: "string",
        default: "none"
    },
    SubHeadingTextDecoration : {
        type: "string",
        default: "none"
    },
    SubHeadingLetterSpacing : {
        type: "number",
    },
    SubHeadingLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    SubHeadingLineHeight : {
        type: "number",
    },
    SubHeadingLineHeightUnits : {
        type: "string",
        default: "px"
    },
    SubHeadingColorSwitcher : {
        type: "string",
        default: "normal"
    },
    SubHeadingColor : {
        type: "string",
		default: "#ffffff"
    },
    SubHeadingHoverColor : {
        type: "string"
    },
    Sub_Heading_Text: {
        type: "string",
        default: "Lorem ipsum dolor sit amet consectetur. Ac aliquam mauris nulla non senectus mauris bibendum. Libero risus ultrices feugiat blandit quis justo vitae facilisi."
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
        type: "string",
        default: "px"
    },
    SubHeadingDesktopPadding: {
        type: "object",
        default: {
            top: 15,
            bottom: 15,
            left: 0,
            right: 0,
        },
    },
    SubHeadingTabPadding: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    SubHeadingMobilePadding: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
	//Margin
	descMarginUnits : {
		type: "string",
		default: "px"
	},
	descDesktopMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	descTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	descMobileMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	descActiveMarginDevice: {
		type: "string",
		default: "desktop"
	},
	descMarginLink : {
		type : "boolean",
		default: true
	},
    //Info Button
    info_Button_Text: {
        type: "string",
        default: "Learn More"
    },
    info_Button_Switcher: {
        type: "boolean",
        default: true,
    },
    buttonIconSwitcher: {
        type: "boolean",
        default: true,
    },
    info_Button_Link: {
        type: "string",
        default: ""
    },
	infoButtonPaddingUnits : {
		type: "string",
		default: "px"
	},
	infoButtonDesktopPadding: {
		type: "object",
		default: {
			top: 15,
			bottom: 15,
			left: 20,
			right: 20,
		},
	},
	infoButtonTabPadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	infoButtonMobilePadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	//Button Margin
	infoButtonMarginUnits : {
		type: "string",
		default: "px"
	},
	infoButtonDesktopMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 20,
		},
	},
	infoButtonTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	infoButtonMobileMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	infoButtonActiveMarginDevice: {
		type: "string",
		default: "desktop"
	},
	infoButtonMarginLink : {
		type : "boolean",
		default: true
	},
	//Info Button Border
	infoButtonBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	infoButtonBorder: {
		type: 'string',
		default: "none",
	},
	infoButtonBorderColor: {
		type: 'string',
	},
	infoButtonHoverBorderColor: {
		type: 'string',
	},
	infoButtonBorderUnits : {
		type: "string",
		default: "px"
	},
	infoButtonDesktopBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	infoButtonTabBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	infoButtonMobileBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	//Button Border Radius
	infoBtnBorderradiusUnits : {
		type: "string",
		default: "px"
	},
	infoBtnDesktopBorderradiusWidth: {
		type: "object",
		default: {
			top: 50,
			bottom: 50,
			left: 50,
			right: 50,
		},
	},
	infoBtnTabBorderradiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	infoBtnMobileBorderradiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	//Button Two
	buttonTwoFontFamily: {
		type: "string",
		default: "inherit",
	},
	buttonTwoFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonTwoFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	buttonTwoFontWeight: {
		type: "string",
		default: "400"
	},
	buttonTwoFontStyle: {
		type: "string",
		default: "normal"
	},
	buttonTwoTextTransform: {
		type: "string",
		default: "none"
	},
	buttonTwoTextDecoration: {
		type: "string",
		default: "none"
	},
	buttonTwoLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonTwoLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	buttonTwoLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	buttonTwoLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	// Button Color
	buttonTwoColorSwitcher: {
		type: "string",
		default: "normal"
	},
	buttonTwoTextColor: {
		type: "string",
		default: '#ffffff'
	},
	buttonTwoTextHoverColor: {
		type: "string"
	},
	buttonTwoBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	buttonTwoBgColor: {
		type: "string",
		default: ''
	},
	buttonTwoBgHoverColor: {
		type: "string"
	},	
	btnTwoText: {
		type: "string",
		default: "Learn More"
	},
	btnTwoSwitcher: {
		type: "boolean",
		default: true,
	},
	buttonTwoIconSwitcher: {
		type: "boolean",
		default: true,
	},
	btnTwoLink: {
		type: "string",
		default: ""
	},
	btnTwoPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	btnTwoDesktopPadding: {
		type: "object",
		default: {
			top: 12,
			bottom: 12,
			left: 20,
			right: 20,
		},
	},
	btnTwoTabPadding: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	btnTwoMobilePadding: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	btnTwoPaddingLink : {
        type : "boolean",
        default: true
    },
	//Button Margin
	btnTwoMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	btnTwoDesktopMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	btnTwoTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	btnTwoMobileMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	btnTwoActiveMarginDevice: {
		type: "string",
		default: "desktop"
	},
	btnTwoMarginLink: {
		type: "boolean",
		default: true
	},
	//Button Border
	btnTwoBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	btnTwoBorder: {
		type: 'string',
		default: "solid",
	},
	btnTwoBorderColor: {
		type: 'string',
        default: '#404655'
	},
	btnTwoHoverBorderColor: {
		type: 'string',
	},
	btnTwoBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	btnTwoDesktopBorder: {
		type: "object",
		default: {
			top: "2",
			bottom: "2",
			left: "2",
			right: "2"
		},
	},
	btnTwoTabBorder: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	btnTwoMobileBorder: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	btnTwoBorderLink : {
        type : "boolean",
        default: true
    },
	//Button Border Radius
	btnTwoBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	btnTwoDesktopBorderRadius: {
		type: "object",
		default: {
			top: 50,
			bottom: 50,
			left: 50,
			right: 50,
		},
	},
	btnTwoTabBorderRadius: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	btnTwoMobileBorderRadius: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	btnTwoBorderRadiusLink : {
        type : "boolean",
        default: true
    },
	//Info box padding
	infoBoxPaddingUnits : {
		type: "string",
		default: "px"
	},
	infoBoxDesktopPadding: {
		type: "object",
		default: {
			top: 40,
			bottom: 40,
			left: 40,
			right: 40,
		},
	},
	infoBoxTabPadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	infoBoxMobilePadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	// Info box margin
	infoBoxMarginUnits : {
		type: "string",
		default: "px"
	},
	infoBoxDesktopMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	infoBoxTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	infoBoxMobileMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	infoBoxActiveMarginDevice: {
		type: "string",
		default: "desktop"
	},
	infoBoxMarginLink : {
		type : "boolean",
		default: true
	},
	// Info Box Border
	infoBoxBorder: {
		type: 'string',
		default: "none",
	},
	infoBoxBorderColor: {
		type: 'string',
	},
	infoBoxBorderHoverColor: {
		type: 'string',
	},
	infoBoxBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	infoBoxBorderUnits : {
		type: "string",
		default: "px"
	},
	infoBoxDesktopBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	infoBoxTabBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	infoBoxMobileBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	// 	Info Box Border Radius
	infoBoxBorderRadiusUnits : {
		type: "string",
		default: "px"
	},
	infoBoxDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	infoBoxTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	infoBoxMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	// Button One Typography
	buttonFontFamily: {
		type: "string",
		default: "inherit",
	},
	buttonFontSize: {
		type: "number",
		default: 14
	},
	buttonFontSizeUnits: {
		type: "string",
		default: "px"
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
		type: "number",
	},
	buttonLetterSpacingUnits : {
		type: "string",
		default: "px"
	},
	buttonLineHeight : {
		type: "number",
	},
	buttonLineHeightUnits : {
		type: "string",
		default: "px"
	},
	// Button Color
	buttonColorSwitcher : {
		type: "string",
		default: "normal"
	},
	buttonTextColor : {
		type: "string",
		default: '#15171C'
	},
	buttonTextHoverColor : {
		type: "string"
	},
	buttonBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	buttonBgColor : {
		type: "string",
		default: '#ffffff'
	},
	buttonBgHoverColor : {
		type: "string"
	},
	globalZIndex : {
        type: "number",
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
            top: 120,
            bottom: 120,
            left: 0,
            right: 0,
        },
    },
    globalPaddingTablet: {
        type: "object",
        default: {
            top: 80,
            bottom: 80,
            left: 0,
            right: 0,
        },
    },
    globalPaddingMobile: {
        type: "object",
        default: {
            top: 60,
            bottom: 60,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    globalMarginTablet: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    globalMarginMobile: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
        default: '#15171C'
    },
    globalBgHoverColor: {
        type: 'string',
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    globalBorderTablet: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    globalBorderMobile: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    globalBorderRadiusTablet: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    globalBorderRadiusMobile: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    mediaPaddingTablet: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    mediaPaddingMobile: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    mediaMarginTablet: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    mediaMarginMobile: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    mediaMarginLink: {
        type: "boolean",
        default: true
    },
    bgType: {
        type: "string",
        default: "color",
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    mediaBorderTablet: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    mediaBorderMobile: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    mediaBorderRadiusTablet: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    mediaBorderRadiusMobile: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    mediaBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    boxGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    boxGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
	testBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    testBackgroundType: {
        type: "string",
        default: "classic"
    },
    testClassicColor: {
        type: "string",
        default: "#15171C"
    },
    testGradientColor: {
        type: "string",
    },
    testCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    testCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    testBackgroundColorStyle: {
        type: "string",
        default: ""
    },
    testBackgroundImageUrl: {
        type: "string",
        default: ""
    },
    testBackgroundImageAlt: {
        type: "string",
        default: ""
    },
    testBackgroundImageID: {
        type: "string",
        default: ""
    },
    testBackgroundImagePosition: {
        type: "string",
        default: ""
    },
    testBackgroundImageAttachment: {
        type: "string",
        default: ""
    },
    testBackgroundImageSize: {
        type: "string",
        default: ""
    },
    testBackgroundImageRepeat: {
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
    hoverBackgroundColorStyle: {
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

    globalBackgroundImageRepeat: {
        type: "string",
        default: ""
    },

    globalBackgroundImageSize: {
        type: "string",
        default: ""
    },



    // Attributes added as per file context
    globalCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    globalCustomGradientInputValue: {
        type: "string",
    },
    globalGradientColor: {
        type: "string",
    },
    globalColor: {
        type: "string",
    },
    globalSwitcher: {
        type: "string",
        default: "normal"
    },
    blockStyle: {
        type: "string",
        default: "",
    },
}
export default attributes;
