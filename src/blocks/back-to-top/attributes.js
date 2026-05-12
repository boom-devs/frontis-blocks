import { separator } from "@wordpress/icons";

const attributes = {
    blockID: {
        type: "string",
        default: "",
    },
    blockStyle: {
        type: "string",
        default: "",
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    backToTopPresetType: {
        type: "string",
        default: "0",
    },
    backToTopPosition: {
        type: "string",
        default: "bottom-right",
    },
    backToTopEntranceAnimation: {
        type: "string",
        default: "fade",
    },
    backToTopContentType: {
        type: "string",
        default: "icon",
    },
    backToTopIcon: {
        type: "string",
        default: "fa fa-angle-up",
    },
    backToTopIconType: {
        type: "string",
        default: "icon",
    },
    backToTopText: {
        type: "string",
        default: "Back To Top",
    },
    backToTopImage: {
        type: "string",
        default: "",
    },
    backToTopImageAlt: {
        type: "string",
        default: "",
    },
    backToTopImageID: {
        type: "number",
    },
    backToTopContentDirection: {
        type: "string",
        default: "row",
    },

    /** Start Border */
    backToTopBorder: {
        type: "string",
        default: "none",
    },
    backToTopBorderColorSwitcher: {
        type: "string",
        default: "normal",
    },
    backToTopBorderColor: {
        type: "string",
    },
    backToTopBorderHoverColor: {
        type: "string",
    },
    backToTopBorderUnits: {
        type: "object",
        default: {
            Desktop: "px",
            Tablet: "px",
            Mobile: "px",
        },
    },
    backToTopBorderDesktop: {
        type: "object",
        default: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
    },
    backToTopBorderTablet: {
        type: "object",
        default: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
    },
    backToTopBorderMobile: {
        type: "object",
        default: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
    },
    backToTopBorderLink: {
        type: "boolean",
        default: true,
    },
    /** End Border */

    /** Start Border Radius */
    backToTopBorderRadiusUnits: {
        type: "object",
        default: {
            Desktop: "px",
            Tablet: "px",
            Mobile: "px",
        },
    },
    backToTopBorderRadiusDesktop: {
        type: "object",
        default: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
    },
    backToTopBorderRadiusTablet: {
        type: "object",
        default: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
    },
    backToTopBorderRadiusMobile: {
        type: "object",
        default: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
    },
    backToTopBorderRadiusLink: {
        type: "boolean",
        default: true,
    },
    /** End Border Radius */

    /** Start Box Shadow */
    backToTopBoxShadowSwitcher: {
        type: "string",
        default: "normal",
    },
    backToTopBoxShadowValues: {
        type: "array",
        default: [],
    },
    backToTopBoxShadowCssValue: {
        type: "string",
        default: "",
    },
    backToTopBoxShadowHoverValues: {
        type: "array",
        default: [],
    },
    backToTopBoxShadowHoverCssValue: {
        type: "string",
        default: "",
    },
    /** End Box Shadow */

    /** Start Typography */
    backToTopGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    backToTopGlobalTypoSwitcher: {
        type: 'object',
        default: {
            fontFamily: false,
            fontSize: false,
            fontWeight: false,
            fontStyle: false,
            textTransform: false,
            textDecoration: false,
            letterSpacing: false,
            lineHeight: false,
        },
    },
    backToTopGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    backToTopGlobalTypoOption: {
        type: 'object',
        default: { label: 'Default', value: 'default' },
    },
    backToTopFontFamily: {
        type: 'string',
        default: 'Default',
    },
    backToTopFontSize: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '16',
            Mobile: '16'
        }
    },
    backToTopFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    backToTopFontWeight: {
        type: 'string',
        default: '700',
    },
    backToTopFontStyle: {
        type: 'string',
        default: '',
    },
    backToTopTextTransform: {
        type: 'string',
        default: '',
    },
    backToTopTextDecoration: {
        type: 'string',
        default: '',
    },
    backToTopLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    backToTopLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    backToTopLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    backToTopLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Typography */

    /** Start Background */
    backToTopBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    backToTopNormalBackgroundType: {
        type: "string",
        default: "classic",
    },
    backToTopNormalClassicColor: {
        type: "string",
        default: "",
    },
    backToTopNormalGradientColor: {
        type: "string",
        default: null,
    },
    backToTopNormalCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    backToTopNormalCustomGradientInputValue: {
        type: "string",
        default: "",
    },

    backToTopHoverBackgroundType: {
        type: "string",
        default: "classic",
    },
    backToTopHoverClassicColor: {
        type: "string",
        default: "",
    },
    backToTopHoverGradientColor: {
        type: "string",
        default: null,
    },
    backToTopHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    backToTopHoverCustomGradientInputValue: {
        type: "string",
        default: "",
    },
    /** End Background */

    /** Start Padding */
    backToTopPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    backToTopPaddingDesktop: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    backToTopPaddingTablet: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    backToTopPaddingMobile: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    backToTopPaddingLink: {
        type: "boolean",
        default: true
    },
    /** End Padding */

    /** Start Class & ID Setting */
    backToTopCustomCSS: {
        type: "string",
        default: "",
    },
    backToTopWraperID: {
        type: "string",
        default: ""
    },

    backToTopWraperClass: {
        type: "string",
        default: ""
    },
    /** End Class & ID Setting */
    backToTopGlobalZIndex: {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        },
    },

};

export default attributes;
