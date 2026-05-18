const attributes = {
    blockID: {
        type: 'string',
    },
    blockStyle: {
        type: 'string',
        default: '',
    },
    parentBlockID: {
        type: 'string',
    },
    title: {
        type: 'string',
        default: 'Timeline Item Title',
    },
    content: {
        type: 'string',
    },

    /** Start General Settings */
    showSectionLabelSwitcher: {
        type: 'boolean',
        default: true,
    },
    verticalTimelineItemSectionLabel: {
        type: 'string',
        default: 'Foundation',
    },
    showPhaseTitleSwitcher: {
        type: 'boolean',
        default: true,
    },
    verticalTimelineItemPhaseTitle: {
        type: 'string',
        default: '2026',
    },
    verticalTimelineItemIcon: {
        type: 'string',
        default: 'chart-pie',
    },
    /** End General Settings */

    /** Start Padding */
    vertcalTimelineContentBoxPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    vertcalTimelineContentBoxPaddingDesktop: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    vertcalTimelineContentBoxPaddingTablet: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    vertcalTimelineContentBoxPaddingMobile: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    vertcalTimelineContentBoxPaddingLink: {
        type: "boolean",
        default: true
    },
    /** End Padding */

    /** Start Margin */
    vertcalTimelineContentBoxMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    vertcalTimelineContentBoxMarginDesktop: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    vertcalTimelineContentBoxMarginTablet: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    vertcalTimelineContentBoxMarginMobile: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    vertcalTimelineContentBoxMarginLink: {
        type: "boolean",
        default: true
    },
    /** End Margin */

    /** Start Content Box Background */
    vertcalTimelineContentBoxGlobalBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    vertcalTimelineContentBoxGlobalNormalBackgroundType: {
        type: "string",
        default: "classic",
    },
    vertcalTimelineContentBoxGlobalNormalClassicColor: {
        type: "string",
        default: "",
    },
    vertcalTimelineContentBoxGlobalNormalGradientColor: {
        type: "string",
        default: null,
    },
    vertcalTimelineContentBoxGlobalNormalCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    vertcalTimelineContentBoxGlobalNormalCustomGradientInputValue: {
        type: "string",
        default: "",
    },

    vertcalTimelineContentBoxGlobalHoverBackgroundType: {
        type: "string",
        default: "classic",
    },
    vertcalTimelineContentBoxGlobalHoverClassicColor: {
        type: "string",
        default: "",
    },
    vertcalTimelineContentBoxGlobalHoverGradientColor: {
        type: "string",
        default: null,
    },
    vertcalTimelineContentBoxGlobalHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    vertcalTimelineContentBoxGlobalHoverCustomGradientInputValue: {
        type: "string",
        default: "",
    },
    /** End Content Box Background */

    /** Start Border */
    vertcalTimelineContentBoxGlobalBorder: {
        type: 'string',
        default: "none",
    },
    vertcalTimelineContentBoxGlobalBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    vertcalTimelineContentBoxGlobalBorderColor: {
        type: 'string',
        default: ""
    },
    vertcalTimelineContentBoxGlobalBorderHoverColor: {
        type: 'string',
    },
    vertcalTimelineContentBoxGlobalBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    vertcalTimelineContentBoxGlobalBorderDesktop: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    vertcalTimelineContentBoxGlobalBorderTablet: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    vertcalTimelineContentBoxGlobalBorderMobile: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    vertcalTimelineContentBoxGlobalBorderLink: {
        type: "boolean",
        default: true
    },
    /** End Border */


    /** Start Border Radius */
    vertcalTimelineContentBoxGlobalBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    vertcalTimelineContentBoxGlobalBorderRadiusDesktop: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    vertcalTimelineContentBoxGlobalBorderRadiusTablet: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    vertcalTimelineContentBoxGlobalBorderRadiusMobile: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    vertcalTimelineContentBoxGlobalBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    /** End Border Radius */

    /** Start Box Shadow */
    vertcalTimelineContentBoxBoxShadowSwitcher: {
        type: "string",
        default: "normal",
    },
    vertcalTimelineContentBoxBoxShadowValues: {
        type: "array",
        default: [],
    },
    vertcalTimelineContentBoxBoxShadowCssValue: {
        type: "string",
        default: "",
    },
    vertcalTimelineContentBoxBoxShadowHoverValues: {
        type: "array",
        default: [],
    },
    vertcalTimelineContentBoxBoxShadowHoverCssValue: {
        type: "string",
        default: "",
    },
    /** End Box Shadow */

    /** Start Class & ID Setting */
    verticalTimelineItemGlobalZIndex: {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    verticalTimelineItemCustomCSS: {
        type: "string",
        default: "",
    },
    verticalTimelineItemWraperID: {
        type: "string",
        default: ""
    },
    verticalTimelineItemWraperClass: {
        type: "string",
        default: ""
    },
    /** End Class & ID Setting */
};

export default attributes;
