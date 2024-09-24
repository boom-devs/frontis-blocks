const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    DeviceType: {
        type: "string",
        default: "Desktop"
    },
    HeadingAlignment: {
        type: "string",
        default: "left",
    },
    HeadingText: {
        type : "string",
        default: "Advanced Heading"
    },
    HeadingTag: {
        type : "string",
        default: "h2"
    },
    HeadingFontFamily: {
        type: "string",
        default: "inherit",
    },
    HeadingFontSize: {
        type: "number",
        default: 35
    },
    HeadingFontSizeUnits: {
        type: "string",
        default: "px"
    },
    HeadingFontWeight : {
        type: "string",
        default: "700"
    },
    HeadingFontStyle : {
        type: "string",
        default: "normal"
    },
    HeadingTextTransform : {
        type: "string",
        default: "none"
    },
    HeadingTextDecoration : {
        type: "string",
        default: "none"
    },
    HeadingLetterSpacing : {
        type: "number",
    },
    HeadingLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    HeadingLineHeight : {
        type: "number",
    },
    HeadingLineHeightUnits : {
        type: "string",
        default: "px"
    },

    HeadingColorSwitcher : {
        type: "string",
        default: "normal"
    },
    HeadingColor : {
        type: "string"
    },
    HeadingHoverColor: {
        type: 'string',
    },
    HeadingBackgroundColor: {
        type: 'string',
    },

    HeadingBorder: {
        type: 'string',
        default: "none",
    },
    HeadingBorderColor: {
        type: 'string',
    },
    HeadingBorderHoverColor: {
        type: 'string',
    },
    HeadingBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    HeadingBorderUnits : {
        type: "string",
        default: "px"
    },
    HeadingDesktopBorderWidth: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    HeadingTabBorderWidth: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    HeadingMobileBorderWidth: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    HeadingActiveBorderDevice: {
        type: "string",
        default: "Desktop"
    },
    HeadingBorderLink : {
        type : "boolean",
        default: true
    },
    HeadingBorderRadiusUnits : {
        type: "string",
        default: "px"
    },
    HeadingDesktopBorderRadiusWidth: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    HeadingTabBorderRadiusWidth: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    HeadingMobileBorderRadiusWidth: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    HeadingActiveBorderRadiusDevice: {
        type: "string",
        default: "Desktop"
    },
    HeadingBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    HeadingPaddingUnits : {
        type: "string",
        default: "px"
    },
    desktopHeadingPadding: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    HeadingDesktopPadding: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    HeadingTabPadding: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    HeadingMobilePadding: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    HeadingPaddingLink : {
        type : "boolean",
        default: true
    },
    HeadingMarginUnits : {
        type: "string",
        default: "px"
    },
    HeadingDesktopMargin: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    HeadingTabMargin: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    HeadingMobileMargin: {
        type: "object",
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    HeadingMarginLink : {
        type : "boolean",
        default: true
    },
    SubHeadingText: {
        type: "string",
        default: "Advanced Sub Heading"
    },
    SubHeadingTag: {
        type : "string",
        default: "p"
    },
    SubHeadingSwitcher: {
        type: "boolean",
        default: false,
    },
    SubHeadingPosition: {
        type: "string",
        default: "bottom",
    },
    Separator: {
        type: "string",
        default: "solid",
    },
    ShowSeparatorSwitcher: {
        type: "boolean",
        default: false,
    },
    SeperatorPosition: {
        type: "string",
        default: "bottom",
    },
    HeadingZIndex : {
        type: "number",
    },

}
export default attributes;
