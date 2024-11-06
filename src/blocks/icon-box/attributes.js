const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
	DeviceType: {
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
    infoMediaAlt: {
        type: "string",
    },
    infoMediaID: {
        type: "number",
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
			Desktop: 76,
			Tablet: 76,
			Mobile: 76
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
			Desktop: 76,
			Tablet: 76,
			Mobile: 76
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
        default: ''
	},
    btnIconHoverColor: {
		type: 'string',
        default: ''
	},
    mediaIconColor: {
		type: 'string',
        default: '#000000'
	},
    mediaIconHoverColor: {
		type: 'string',
        default: ""
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
        default: "left",
    },
    Alignment: {
        type: "string",
        default: "center",
    },
    Heading_Text: {
        type : "string",
        default: "Icon Box"
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
        default: 24
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
        defalt: ""
    },
    Heading_Hover_Color: {
        type: 'string',
        defalt: ""
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
        default: ""
    },
    SubHeadingHoverColor : {
        type: "string",
        default: ""
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
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
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
			right: 0,
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
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
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
	// Button
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
            top: 32,
            bottom: 32,
            left: 32,
            right: 32,
        },
    },
    globalPaddingTablet: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    globalPaddingMobile: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
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
        default: ''
    },
    globalBgHoverColor: {
        type: "string",
        default: ""
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
            top: 6,
            bottom: 6,
            left: 6,
            right: 6,
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
            top: 50,
            bottom: 50,
            left: 50,
            right: 50,
        },
    },
    mediaBorderRadiusTablet: {
        type: "object",
        default: {
            top: 50,
            bottom: 50,
            left: 50,
            right: 50,
        },
    },
    mediaBorderRadiusMobile: {
        type: "object",
        default: {
            top: 50,
            bottom: 50,
            left: 50,
            right: 50,
        },
    },
    mediaBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    infoMediaBackgroundImageUrl: {
        type: "string",
    },
    infoMediaBackgroundImageAlt: {
        type: "string",
    },
    infoMediaBackgroundImageID: {
        type: "number",
    },
    boxGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    boxGlobalBoxShadowCssValue: {
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

}
//
export default attributes;
