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

    FeatureListGap: {
        type: "number",
        default: 20
    },
    FeatureListGapUnits: {
        type: "string",
        default: "px"
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
