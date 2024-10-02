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
		default: ''
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
    titleColor: {
        type: 'string',
        default: '#000'
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
        default: "left",
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
        default: "left",
    },
    Alignment: {
        type: "string",
        default: "left",
    },
    Heading_Text: {
        type : "string",
        default: "Info Title"
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
        default: 35
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
        type: "string"
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
        type: "string"
    },
    SubHeadingHoverColor : {
        type: "string"
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
        default: "Button Text"
    },
    info_Button_Switcher: {
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
			top: 20,
			bottom: 20,
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
		default: '#ffffff'
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
		default: '#4361EE'
	},
	buttonBgHoverColor : {
		type: "string"
	},
}
//
export default attributes;
