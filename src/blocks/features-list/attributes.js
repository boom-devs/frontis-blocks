const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    DeviceType: {
        type: "string",
        default: "Desktop"
    },
    FeatureItems: {
        type: "array",
        default: [
            // You can define some default items if needed
            { id: 'item-1', Title: 'Feature Item 1', Description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna', FeatureIcon: 'check', },
            { id: 'item-2', Title: 'Feature Item 2', Description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna', FeatureIcon: 'check', },
            { id: 'item-3', Title: 'Feature Item 3', Description: 'Lorem ipsum dolor sit amet, consectetur adipisi cing elit, sed do eiusmod tempor incididunt ut abore et dolore magna', FeatureIcon: 'check', },
        ],
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    default: ""
                },
                Title: {
                    type: "string",
                    default: ""
                },
                Description: {
                    type: "string",
                    default: ""
                },
                FeatureIcon: {
                    type: 'string',
                    default: 'check',
                },
                FeatureIconAlign: {
                    type: "string",
                    default: "icon",
                },
            }
        }
    },
    FeatureTag: {
        type : "string",
        default: "h3"
    },
    FeatureIconShape: {
        type: "string",
        default: "circle"
    },
    FeatureAlignment: {
        type: "string",
        default: "left",
    },
    FeatureIconAlignment: {
        type: "string",
        default: "left",
    },


    FeatureListGapDesktop: {
        type: "number",
        default: 20
    },
    FeatureListGapTablet: {
        type: "number",
        default: 15
    },
    FeatureListGapMobile: {
        type: "number",
        default: 10
    },
    FeatureListGapUnits: {
        type: "string",
        default: "px"
    },


    FeatureIconColorSwitcher : {
        type: "string",
        default: "normal"
    },
    FeatureIconColor : {
        type: "string"
    },
    FeatureIconHoverColor: {
        type: 'string',
    },


    FeatureIconBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    FeatureIconBgColor : {
        type: "string"
    },
    FeatureIconBgHoverColor: {
        type: 'string',
    },


    FeatureIconSizeDesktop: {
        type: "number",
        default: 20
    },
    FeatureIconSizeTablet: {
        type: "number",
        default: 15
    },
    FeatureIconSizeMobile: {
        type: "number",
        default: 10
    },
    FeatureIconSizeUnits: {
        type: "string",
        default: "px"
    },

    FeatureIconBgSizeDesktop: {
        type: "number",
        default: 20
    },
    FeatureIconBgSizeTablet: {
        type: "number",
        default: 15
    },
    FeatureIconBgSizeMobile: {
        type: "number",
        default: 10
    },
    FeatureIconBgSizeUnits: {
        type: "string",
        default: "px"
    },


    FeatureIconPaddingUnits : {
        type: "string",
        default: "px"
    },
    FeatureIconDesktopPadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    FeatureIconTabPadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    FeatureIconMobilePadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    FeatureIconPaddingLink : {
        type : "boolean",
        default: true
    },


    FeatureIconSpacingDesktop: {
        type: "number",
        default: 20
    },
    FeatureIconSpacingTablet: {
        type: "number",
        default: 20
    },
    FeatureIconSpacingMobile: {
        type: "number",
        default: 20
    },
    FeatureIconSpacingUnits: {
        type: "string",
        default: "px"
    },





    FeatureTitleFontFamily: {
        type: "string",
        default: "inherit",
    },
    FeatureTitleFontSizeDesktop: {
        type: "number",
        default: 18
    },
    FeatureTitleFontSizeTablet: {
        type: "number",
        default: 18
    },
    FeatureTitleFontSizeMobile: {
        type: "number",
        default: 18
    },
    FeatureTitleFontSizeUnits: {
        type: "string",
        default: "px"
    },
    FeatureTitleFontWeight : {
        type: "string",
        default: "600"
    },
    FeatureTitleFontStyle : {
        type: "string",
        default: "normal"
    },
    FeatureTitleTextTransform : {
        type: "string",
        default: "none"
    },
    FeatureTitleTextDecoration : {
        type: "string",
        default: "none"
    },
    FeatureTitleLetterSpacingDesktop: {
        type: "number",
        default: 0
    },
    FeatureTitleLetterSpacingTablet: {
        type: "number",
        default: 0
    },
    FeatureTitleLetterSpacingMobile: {
        type: "number",
        default: 0
    },
    FeatureTitleLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    FeatureTitleLineHeightDesktop: {
        type: "number",
        default: 1.2
    },
    FeatureTitleLineHeightTablet: {
        type: "number",
        default: 1.2
    },
    FeatureTitleLineHeightMobile: {
        type: "number",
        default: 1.2
    },
    FeatureTitleLineHeightUnits : {
        type: "string",
        default: "px"
    },

    FeatureTitleColorSwitcher : {
        type: "string",
        default: "normal"
    },
    FeatureTitleColor : {
        type: "string"
    },
    FeatureTitleHoverColor: {
        type: 'string',
    },


    FeatureDescFontFamily: {
        type: "string",
        default: "inherit",
    },
    FeatureDescFontSizeDesktop: {
        type: "number",
        default: 14
    },
    FeatureDescFontSizeTablet: {
        type: "number",
        default: 14
    },
    FeatureDescFontSizeMobile: {
        type: "number",
        default: 14
    },
    FeatureDescFontSizeUnits: {
        type: "string",
        default: "px"
    },
    FeatureDescFontWeight : {
        type: "string",
        default: "400"
    },
    FeatureDescFontStyle : {
        type: "string",
        default: "normal"
    },
    FeatureDescTextTransform : {
        type: "string",
        default: "none"
    },
    FeatureDescTextDecoration : {
        type: "string",
        default: "none"
    },
    FeatureDescLetterSpacingDesktop : {
        type: "number",
    },
    FeatureDescLetterSpacingTablet : {
        type: "number",
    },
    FeatureDescLetterSpacingMobile : {
        type: "number",
    },
    FeatureDescLetterSpacingUnits : {
        type: "string",
        default: "px"
    },
    FeatureDescLineHeightDesktop : {
        type: "number",
    },
    FeatureDescLineHeightTablet : {
        type: "number",
    },
    FeatureDescLineHeightMobile : {
        type: "number",
    },
    FeatureDescLineHeightUnits : {
        type: "string",
        default: "px"
    },

    FeatureDescColorSwitcher : {
        type: "string",
        default: "normal"
    },
    FeatureDescColor : {
        type: "string"
    },
    FeatureDescHoverColor: {
        type: 'string',
    },



    FeatureZIndex : {
        type: "number",
    },

    FeaturePaddingUnits : {
        type: "string",
        default: "px"
    },
    FeatureDesktopPadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    FeatureTabPadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    FeatureMobilePadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    FeaturePaddingLink : {
        type : "boolean",
        default: true
    },
    FeatureMarginUnits : {
        type: "string",
        default: "px"
    },
    FeatureDesktopMargin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    FeatureTabMargin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    FeatureMobileMargin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    FeatureMarginLink : {
        type : "boolean",
        default: true
    },

    FeatureBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    FeatureBgColor : {
        type: "string"
    },
    FeatureBgHoverColor: {
        type: 'string',
    },



    FeatureBorder: {
        type: 'string',
        default: "none",
    },
    FeatureBorderColor: {
        type: 'string',
    },
    FeatureBorderHoverColor: {
        type: 'string',
    },
    FeatureBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },

    FeatureBorderUnits : {
        type: "string",
        default: "px"
    },
    FeatureDesktopBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    FeatureTabBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    FeatureMobileBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    FeatureBorderLink : {
        type : "boolean",
        default: true
    },

    FeatureBorderRadiusUnits : {
        type: "string",
        default: "px"
    },
    FeatureDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    FeatureTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    FeatureMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    FeatureBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    FeatureDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    FeatureTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    FeatureMobileSwitcher: {
        type: "boolean",
        default: false,
    },
    
};

export default attributes;
