const attributes = {
	blockID: {
		type: "string",
		default: "",
	},
	deviceType: {
		type: "string",
		default: "Desktop",
	},
	dualButtonPresetStyle: {
        type: "string",
        default: "preset-1",
    },
	blockStyle: {
		type: "string",
		default: "",
	},
	DeviceType: {
		type: "string",
		default: "Desktop", 
	},
	ButtonAlignment: {
		type: "string",
		default: "start",
	},
	ButtonText: {
		type: "string",
		default: "Button One",
	},
	ButtonUrl: {
		type: "string",
		default: "",
	},
	ButtonTargetUrl: {
		type: "boolean",
	},
	ButtonWidth: {
        type: 'object',
        default: {
            Desktop: '100',
            Tablet: '100',
            Mobile: '100'
        }
    },
    ButtonWidthWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
	},
	ButtonFontFamily: {
		type: "string",
		default: "Default",
	},
	ButtonFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '16',
			Mobile: '16'
		}
	},
	ButtonFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	ButtonFontWeight: {
		type: "string",
		default: "400",
	},
	ButtonFontStyle: {
		type: "string",
		default: "normal",
	},
	ButtonTextTransform: {
		type: "string",
		default: "none",
	},
	ButtonTextDecoration: {
		type: "string",
		default: "none",
	},
	ButtonLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	ButtonLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	ButtonLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	ButtonLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	ButtonColorSwitcher: {
		type: "string",
		default: "normal",
	},
	ButtonColor: {
		type: "string",
	},
	ButtonHoverColor: {
		type: "string",
	},
	ButtonBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	ButtonBgColor: {
		type: "string",
	},
	ButtonBgHoverColor: {
		type: "string",
	},
	ButtonBorder: {
		type: "string",
		default: "none",
	},
	ButtonBorderColor: {
		type: "string",
	},
	ButtonBorderHoverColor: {
		type: "string",
	},
	ButtonBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	ButtonBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	ButtonDesktopBorderWidth: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonTabBorderWidth: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonMobileBorderWidth: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonBorderLink: {
		type: "boolean",
		default: true,
	},
	ButtonBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	ButtonDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	ButtonPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	ButtonDesktopPadding: {
		type: "object",
		default: {
			top: "12",
			bottom: "12",
			left: "30",
			right: "30",
		},
	},
	ButtonTabPadding: {
		type: "object",
		default: {
			top: "12",
			bottom: "12",
			left: "30",
			right: "30",
		},
	},
	ButtonMobilePadding: {
		type: "object",
		default: {
			top: "12",
			bottom: "12",
			left: "30",
			right: "30",
		},
	},
	ButtonPaddingLink: {
		type: "boolean",
		default: true,
	},
	ButtonMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	ButtonDesktopMargin: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonTabMargin: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonMobileMargin: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonMarginLink: {
		type: "boolean",
		default: true,
	},
	ButtonIconAlign: {
		type: "string",
		default: "no-icon",
	},
	ButtonIcon: {
		type: "string",
		default: "angle-right",
	},
	ButtonZIndex: {
		type: "number",
	},
	//Connector
	connectorSwitcher: {
		type: "boolean",
		default: true,
	},
	connectorText: {
		type: "string",
		default: "OR",
	},
	connectorFontFamily: {
		type: "string",
		default: "Default",
	},
	connectorFontSize: {
		type: 'object',
		default: {
			Desktop: '16',
			Tablet: '16',
			Mobile: '16'
		}
	},
	connectorFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	connectorFontWeight: {
		type: "string",
		default: "400",
	},
	connectorFontStyle: {
		type: "string",
		default: "normal",
	},
	connectorTextTransform: {
		type: "string",
		default: "none",
	},
	connectorTextDecoration: {
		type: "string",
		default: "none",
	},
	connectorLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	connectorLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	connectorLineHeight: {
		type: 'object',
		default: {
			Desktop: '35',
			Tablet: '35',
			Mobile: '35'
		}
	},
	connectorLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	connectorColorSwitcher: {
		type: "string",
		default: "normal",
	},
	connectorColor: {
		type: "string",
		default: "#ffffff"
	},
	connectorHoverColor: {
		type: "string",
	},
	connectorBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	connectorBgColor: {
		type: "string",
		default: "#399CFF",
	},
	connectorBgHoverColor: {
		type: "string",
	},
	connectorSize: {
		type: "object",
		default: {
			Desktop: 35,
			Tablet: 25,
			Mobile: 15,
		},
	},
	connectorSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	/** Start Border */
	connectorBorder: {
		type: "string",
		default: "solid",
	},
	connectorBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	connectorBorderColor: {
		type: "string",
		default: "#ffffff",
	},
	connectorBorderHoverColor: {
		type: "string",
	},
	connectorBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	connectorBorderDesktop: {
		type: "object",
		default: {
			top: "2",
			bottom: "2",
			left: "2",
			right: "2",
		},
	},
	connectorBorderTablet: {
		type: "object",
		default: {
			top: "2",
			bottom: "2",
			left: "2",
			right: "2",
		},
	},
	connectorBorderMobile: {
		type: "object",
		default: {
			top: "2",
			bottom: "2",
			left: "2",
			right: "2",
		},
	},
	connectorBorderLink: {
		type: "boolean",
		default: true,
	},
	/** Border Radius **/
	connectorBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	connectorBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	connectorBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	connectorBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	connectorBorderRadiusLink: {
		type: "boolean",
		default: true,
	},

	buttonsGap: {
		type: "object",
		default: {
			Desktop: '0',
			Tablet: '0',
			Mobile: '0',
		},
	},
	buttonsGapUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	//Button Two
	ButtonTwoAlignment: {
		type: "string",
		default: "left",
	},
	ButtonTwoText: {
		type: "string",
		default: "Button Two",
	},
	ButtonTwoUrl: {
		type: "string",
		default: "",
	},
	ButtonTwoTargetUrl: {
		type: "boolean",
	},
	ButtonTwoWidth: {
		type: "number",
	},
	ButtonTwoFontFamily: {
		type: "string",
		default: "Default",
	},
	ButtonTwoFontSize: {
		type: "number",
		default: 16,
	},
	ButtonTwoFontSizeUnits: {
		type: "string",
		default: "px",
	},
	ButtonTwoFontWeight: {
		type: "string",
		default: "400",
	},
	ButtonTwoFontStyle: {
		type: "string",
		default: "normal",
	},
	ButtonTwoTextTransform: {
		type: "string",
		default: "none",
	},
	ButtonTwoTextDecoration: {
		type: "string",
		default: "none",
	},
	ButtonTwoLetterSpacing: {
		type: "number",
	},
	ButtonTwoLetterSpacingUnits: {
		type: "string",
		default: "px",
	},
	ButtonTwoLineHeight: {
		type: "number",
	},
	ButtonTwoLineHeightUnits: {
		type: "string",
		default: "px",
	},
	ButtonTwoColorSwitcher: {
		type: "string",
		default: "normal",
	},
	ButtonTwoColor: {
		type: "string",
	},
	ButtonTwoHoverColor: {
		type: "string",
	},
	ButtonTwoBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	ButtonTwoBgColor: {
		type: "string",
		default: "#15171C"
	},
	ButtonTwoBgHoverColor: {
		type: "string",
	},
	ButtonTwoBorder: {
		type: "string",
		default: "none",
	},
	ButtonTwoBorderColor: {
		type: "string",
	},
	ButtonTwoBorderHoverColor: {
		type: "string",
	},
	ButtonTwoBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	ButtonTwoBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	ButtonTwoDesktopBorderWidth: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonTwoTabBorderWidth: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonTwoMobileBorderWidth: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonTwoActiveBorderDevice: {
		type: "string",
		default: "Desktop",
	},
	ButtonTwoBorderLink: {
		type: "boolean",
		default: true,
	},
	ButtonTwoBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	ButtonTwoDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonTwoTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonTwoMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonTwoActiveBorderRadiusDevice: {
		type: "string",
		default: "Desktop",
	},
	ButtonTwoBorderRadiusLink: {
		type: "boolean",
		default: true,
	},
	// Padding
	ButtonTwoPaddingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	ButtonTwoDesktopPadding: {
		type: "object",
		default: {
			top: 12,
			bottom: 12,
			left: 30,
			right: 30,
		},
	},
	ButtonTwoTabPadding: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonTwoMobilePadding: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonTwoPaddingLink: {
		type: "boolean",
		default: true,
	},
	// Button two margin
	ButtonTwoMarginUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	ButtonTwoDesktopMargin: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonTwoTabMargin: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonTwoMobileMargin: {
		type: "object",
		default: {
			top: "0",
			bottom: "0",
			left: "0",
			right: "0",
		},
	},
	ButtonTwoMarginLink: {
		type: "boolean",
		default: true,
	},
	ButtonTwoIconAlign: {
		type: "string",
		default: "no-icon",
	},
	ButtonTwoIcon: {
		type: "string",
		default: "angle-right",
	},
	ButtonTwoZIndex: {
		type: "number",
	},

	buttonIconAlign: {
		type: "string",
		default: "none",
	},
	buttonTwoIconAlign: {
		type: "string",
		default: "none",
	},
	buttonIconPosition: {
		type: "string",
		default: "right",
	},
	btnIconColorSwitcher: {
		type: "string",
		default: "normal",
	},
	btnIconColor: {
		type: "string",
	},
	btnIconHoverColor: {
		type: "string",
	},

	btnIconBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	btnIconBgColor: {
		type: "string",
	},
	btnIconBgHoverColor: {
		type: "string",
	},
	btnIconTwoBgColorSwitcher: {
		type: "string",
		default: "normal",
	},
	btnTwoIconBgColor: {
		type: "string",
	},
	btnTwoIconBgHoverColor: {
		type: "string",
	},
	btnTwoIconColorSwitcher: {
		type: "string",
		default: "normal",
	},
	btnTwoIconColor: {
		type: "string",
	},
	btnTwoIconHoverColor: {
		type: "string",
	},
	btnIconPosition: {
		type: "string",
		default: "right",
	},
	btnTwoIconPosition: {
		type: "string",
		default: "right",
	},
	btnIconSize: {
		type: "object",
		default: {
			Desktop: "16",
			Tablet: "16",
			Mobile: "16",
		},
	},
	btnIconSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	btnIconSpacing: {
		type: "object",
		default: {
			Desktop: "12",
			Tablet: "12",
			Mobile: "12",
		},
	},
	btnIconSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	btnTwoIconSize: {
		type: "object",
		default: {
			Desktop: "16",
			Tablet: "16",
			Mobile: "16",
		},
	},
	btnTwoIconSizeUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	btnTwoIconSpacing: {
		type: "object",
		default: {
			Desktop: "12",
			Tablet: "12",
			Mobile: "12",
		},
	},
	btnTwoIconSpacingUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	/** Icon Border */
	iconBorder: {
		type: "string",
		default: "none",
	},
	iconBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	iconBorderColor: {
		type: "string",
		default: "",
	},
	iconBorderHoverColor: {
		type: "string",
	},
	iconBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	iconBorderDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	iconBorderTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	iconBorderMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	iconBorderLink: {
		type: "boolean",
		default: true,
	},
	/** Border Radius **/
	iconBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	iconBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	iconBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	iconBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	iconBorderRadiusLink: {
		type: "boolean",
		default: true,
	},

	/** Icon Two **/
	iconTwoBorder: {
		type: "string",
		default: "none",
	},
	iconTwoBorderColorSwitcher: {
		type: "string",
		default: "normal",
	},
	iconTwoBorderColor: {
		type: "string",
		default: "",
	},
	iconTwoBorderHoverColor: {
		type: "string",
	},
	iconTwoBorderUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	iconTwoBorderDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	iconTwoBorderTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	iconTwoBorderMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	iconTwoBorderLink: {
		type: "boolean",
		default: true,
	},
	/** Border Radius **/
	iconTwoBorderRadiusUnits: {
		type: "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px",
		},
	},
	iconTwoBorderRadiusDesktop: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	iconTwoBorderRadiusTablet: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	iconTwoBorderRadiusMobile: {
		type: "object",
		default: {
			top: "",
			bottom: "",
			left: "",
			right: "",
		},
	},
	iconTwoBorderRadiusLink: {
		type: "boolean",
		default: true,
	},	
	
	buttonsDirection: {
		type: "string",
		default: "vertical",
	},
	dualButtonGlobalZIndex: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		},
	},
	/** Start Padding */
	dualButtonGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dualButtonGlobalPaddingDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	dualButtonGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	dualButtonGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	dualButtonGlobalPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	dualButtonGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dualButtonGlobalMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	dualButtonGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	dualButtonGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	dualButtonGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Background */
	dualButtonGlobalBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	dualButtonGlobalBgColor : {
		type: "string",
	},
	dualButtonGlobalBgHoverColor: {
		type: 'string',
	},
	/** End Background */

	/** Start Border */
	dualButtonGlobalBorder: {
		type: 'string',
		default: "none",
	},
	dualButtonGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	dualButtonGlobalBorderColor: {
		type: 'string',
		default: ""
	},
	dualButtonGlobalBorderHoverColor: {
		type: 'string',
	},
	dualButtonGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dualButtonGlobalBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	dualButtonGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	dualButtonGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	dualButtonGlobalBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	dualButtonGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	dualButtonGlobalBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	dualButtonGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	dualButtonGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	dualButtonGlobalBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	dualButtonGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    dualButtonGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
	globalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    globalBoxShadowValues: {
        type: 'array',
        default: [],
    },
	globalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    globalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    globalHoverBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */

	dualBtnDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    dualBtnTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    dualBtnMobileSwitcher: {
        type: "boolean",
        default: false,
    },
};
export default attributes;
