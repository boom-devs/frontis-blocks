const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    DeviceType: {
        type: "string",
        default: "Desktop"
    },
    ButtonAlignment: {
        type: "string",
        default: "left",
    },
    ButtonText: {
        type: "string",
        default: "Add Text",
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
    ButtonPaddingUnits : {
        type: "string",
        default: "px"
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
        type: "string",
        default: "px"
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
    
}
export default attributes;