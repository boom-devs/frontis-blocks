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
    backToTopBorder: {
        type: "string",
        default: "solid",
    },
    backToTopBorderColor: {
        type: "string",
        default: "",
    },
    backToTopBorderHoverColor: {
        type: "string",
        default: "",
    },
    backToTopBorderColorSwitcher: {
        type: "string",
        default: "normal",
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
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    },
    backToTopBorderTablet: {
        type: "object",
        default: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    },
    backToTopBorderMobile: {
        type: "object",
        default: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    },
    backToTopBorderLink: {
        type: "boolean",
        default: false,
    },
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
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    },
    backToTopBorderRadiusTablet: {
        type: "object",
        default: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    },
    backToTopBorderRadiusMobile: {
        type: "object",
        default: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        },
    },
    backToTopBorderRadiusLink: {
        type: "boolean",
        default: false,
    },
    backToTopBoxShadowValues: {
        type: "array",
        default: [0, 0, 0, 0, '', '#00000000'],
    },
    backToTopBoxShadowCssValue: {
        type: "string",
        default: "",
    },
    backToTopBoxShadowHoverValues: {
        type: "array",
        default: [0, 0, 0, 0, '', '#00000000'],
    },
    backToTopBoxShadowHoverCssValue: {
        type: "string",
        default: "",
    },
    backToTopBoxShadowSwitcher: {
        type: "string",
        default: "normal",
    },

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
        default: '',
    },
    backToTopFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
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
        default: '',
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

};

export default attributes;
