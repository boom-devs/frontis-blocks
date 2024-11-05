const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
	DeviceType: {
        type: "string",
        default: "Desktop"
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
        type: "number",
    },
    ButtonFontFamily: {
        type: "string",
        default: "inherit",
    },
    ButtonFontSize: {
        type: "number",
        default: 16
    },
    ButtonFontSizeUnits: {
        type: "string",
        default: "px"
    },
    ButtonFontWeight : {
        type: "string",
        default: "400"
    },
    ButtonFontStyle : {
        type: "string",
        default: "normal"
    },
    ButtonTextTransform : {
        type: "string",
        default: "none"
    },
    ButtonTextDecoration : {
        type: "string",
        default: "none"
    },
    ButtonLetterSpacing : {
        type: "number",
    },
    ButtonLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    ButtonLineHeight : {
        type: "number",
    },
    ButtonLineHeightUnits : {
        type: "string",
        default: "px"
    },
    ButtonColorSwitcher : {
        type: "string",
        default: "normal"
    },
    ButtonColor : {
        type: "string"
    },
    ButtonHoverColor: {
        type: 'string',
    },
    ButtonBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    ButtonBgColor : {
        type: "string"
    },
    ButtonBgHoverColor: {
        type: 'string',
    },
    ButtonBorder: {
        type: 'string',
        default: "none",
    },
    ButtonBorderColor: {
        type: 'string',
    },
    ButtonBorderHoverColor: {
        type: 'string',
    },
    ButtonBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    ButtonBorderUnits : {
        type: "string",
        default: "px"
    },
    ButtonDesktopBorderWidth: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonTabBorderWidth: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonMobileBorderWidth: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonActiveBorderDevice: {
        type: "string",
        default: "Desktop"
    },
    ButtonBorderLink : {
        type : "boolean",
        default: true
    },
    ButtonBorderRadiusUnits : {
        type: "string",
        default: "px"
    },
    ButtonDesktopBorderRadiusWidth: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonTabBorderRadiusWidth: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonMobileBorderRadiusWidth: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonActiveBorderRadiusDevice: {
        type: "string",
        default: "Desktop"
    },
    ButtonBorderRadiusLink : {
        type : "boolean",
        default: true
    },
	ButtonPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
    ButtonDesktopPadding: {
        type: "object",
        default: {
            top: 12,
            bottom: 12,
            left: 30,
            right: 30,
        },
    },
    ButtonTabPadding: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonMobilePadding: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonPaddingLink : {
        type : "boolean",
        default: true
    },
	ButtonMarginUnits : {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
    ButtonDesktopMargin: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonTabMargin: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonMobileMargin: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    ButtonMarginLink : {
        type : "boolean",
        default: true
    },
    ButtonIconAlign: {
        type: "string",
        default: "no-icon",
    },
    ButtonIcon: {
		type: 'string',
		default: 'circle-check',
	},
    ButtonZIndex : {
        type: "number",
    },
	//Connector
	connectorSwitcher: {
		type: "boolean",
		default: true,
	},
	connectorText: {
		type: "string",
		default: "Or",
	},
	connectorFontFamily: {
		type: "string",
		default: "inherit",
	},
	connectorFontSize: {
		type: "number",
		default: 16
	},
	connectorFontSizeUnits: {
		type: "string",
		default: "px"
	},
	connectorFontWeight : {
		type: "string",
		default: "400"
	},
	connectorFontStyle : {
		type: "string",
		default: "normal"
	},
	connectorTextTransform : {
		type: "string",
		default: "none"
	},
	connectorTextDecoration : {
		type: "string",
		default: "none"
	},
	connectorLetterSpacing : {
		type: "number",
	},
	connectorLetterSpacingUnits : {
		type: "string",
		default: "px"
	},
	connectorLineHeight : {
		type: "number",
		default: 35
	},
	connectorLineHeightUnits : {
		type: "string",
		default: "px"
	},
	connectorColorSwitcher : {
		type: "string",
		default: "normal"
	},
	connectorColor : {
		type: "string"
	},
	connectorHoverColor: {
		type: 'string',
	},
	connectorBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	connectorBgColor : {
		type: "string",
		default: "#ffffff"
	},
	connectorBgHoverColor: {
		type: 'string',
	},
	connectorSize: {
		type: 'object',
		default: {
			Desktop: 35,
			Tablet: 25,
			Mobile: 15
		}
	},
	connectorSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	buttonsGap: {
		type: 'object',
		default: {
			Desktop: 0,
			Tablet: 0,
			Mobile: 0
		}
	},
	buttonsGapUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
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
		default: "inherit",
	},
	ButtonTwoFontSize: {
		type: "number",
		default: 16
	},
	ButtonTwoFontSizeUnits: {
		type: "string",
		default: "px"
	},
	ButtonTwoFontWeight : {
		type: "string",
		default: "400"
	},
	ButtonTwoFontStyle : {
		type: "string",
		default: "normal"
	},
	ButtonTwoTextTransform : {
		type: "string",
		default: "none"
	},
	ButtonTwoTextDecoration : {
		type: "string",
		default: "none"
	},
	ButtonTwoLetterSpacing : {
		type: "number",
	},
	ButtonTwoLetterSpacingUnits : {
		type: "string",
		default: "px"
	},
	ButtonTwoLineHeight : {
		type: "number",
	},
	ButtonTwoLineHeightUnits : {
		type: "string",
		default: "px"
	},
	ButtonTwoColorSwitcher : {
		type: "string",
		default: "normal"
	},
	ButtonTwoColor : {
		type: "string"
	},
	ButtonTwoHoverColor: {
		type: 'string',
	},
	ButtonTwoBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	ButtonTwoBgColor : {
		type: "string"
	},
	ButtonTwoBgHoverColor: {
		type: 'string',
	},
	ButtonTwoBorder: {
		type: 'string',
		default: "none",
	},
	ButtonTwoBorderColor: {
		type: 'string',
	},
	ButtonTwoBorderHoverColor: {
		type: 'string',
	},
	ButtonTwoBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	ButtonTwoBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	ButtonTwoDesktopBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	ButtonTwoTabBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	ButtonTwoMobileBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	ButtonTwoActiveBorderDevice: {
		type: "string",
		default: "Desktop"
	},
	ButtonTwoBorderLink : {
		type : "boolean",
		default: true
	},
	ButtonTwoBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	ButtonTwoDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	ButtonTwoTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	ButtonTwoMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	ButtonTwoActiveBorderRadiusDevice: {
		type: "string",
		default: "Desktop"
	},
	ButtonTwoBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	// Padding

	ButtonTwoPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
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
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	ButtonTwoMobilePadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	ButtonTwoPaddingLink : {
		type : "boolean",
		default: true
	},
	// Button two margin
	ButtonTwoMarginUnits : {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	ButtonTwoDesktopMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	ButtonTwoTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	ButtonTwoMobileMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	ButtonTwoMarginLink : {
		type : "boolean",
		default: true
	},
	ButtonTwoIconAlign: {
		type: "string",
		default: "no-icon",
	},
	ButtonTwoIcon: {
		type: 'string',
		default: 'circle-check',
	},
	ButtonTwoZIndex : {
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
        default: "normal"
    },
    btnIconColor: {
        type: "string"
    },
    btnIconHoverColor: {
        type: 'string',
    },
	btnIconPosition: {
        type: 'string',
		default: 'right'
    },
	btnTwoIconPosition: {
        type: 'string',
		default: 'right'
    },
	btnIconSize: {
		type: 'object',
		default: {
			Desktop: 35,
			Tablet: 25,
			Mobile: 15
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
	btnIconSpacing: {
		type: 'object',
		default: {
			Desktop: 10,
			Tablet: 10,
			Mobile: 10
		}
	},
	btnIconSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	buttonsDirection: {
        type: 'string',
		default: 'vertical'
    },
	blockStyle: {
        type: "string",
        default: "",
    },
}
export default attributes;
