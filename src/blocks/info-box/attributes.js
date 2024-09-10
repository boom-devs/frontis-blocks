const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    infoMediaUrl: {
        type: 'string',
        default: ''
    },
    height: {
        type: 'number',
        default: 50
    },
    width: {
        type: 'number',
        default: 50
    },
    boxBgColor: {
        type: 'string',
        default: '#fff'
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
        default: 35
    },
    SubHeadingFontSizeUnits: {
        type: "string",
        default: "px"
    },
    SubHeadingFontWeight : {
        type: "string",
        default: "700"
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
        default: "Info Description"
    },
    Sub_Heading_Tag: {
        type : "string",
        default: "p"
    },
    Sub_Heading_Switcher: {
        type: "boolean",
        default: false,
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
            top: 0,
            bottom: 0,
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
    //Info Button
    info_Button_Text: {
        type: "string",
        default: "Button Text"
    },
    info_Button_Switcher: {
        type: "boolean",
        default: false,
    },
    info_Button_Link: {
        type: "string",
        default: ""
    }

}
export default attributes;