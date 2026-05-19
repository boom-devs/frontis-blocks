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

    /** Start Content Box Padding */
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
    /** End Content Box Padding */

    /** Start Content Box Margin */
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
    /** End Content Box Margin */

    /** Start Phase Title Padding */
    vertcalTimelinePhaseTitlePaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    vertcalTimelinePhaseTitlePaddingDesktop: {
        type: "object",
        default: {
            top: '6',
            bottom: '6',
            left: '16',
            right: '16',
        },
    },
    vertcalTimelinePhaseTitlePaddingTablet: {
        type: "object",
        default: {
            top: '4',
            bottom: '4',
            left: '12',
            right: '12',
        },
    },
    vertcalTimelinePhaseTitlePaddingMobile: {
        type: "object",
        default: {
            top: '4',
            bottom: '4',
            left: '12',
            right: '12',
        },
    },
    vertcalTimelinePhaseTitlePaddingLink: {
        type: "boolean",
        default: true
    },
    /** End Phase Title Padding */

    /** Start Phase Title Margin */
    vertcalTimelinePhaseTitleMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    vertcalTimelinePhaseTitleMarginDesktop: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    vertcalTimelinePhaseTitleMarginTablet: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    vertcalTimelinePhaseTitleMarginMobile: {
        type: "object",
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    vertcalTimelinePhaseTitleMarginLink: {
        type: "boolean",
        default: true
    },
    /** End Phase Title Margin */

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

    /** Start Phase Title Background */
    vertcalTimelinePhaseTitleNormalBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    vertcalTimelinePhaseTitleNormalBackgroundType: {
        type: "string",
        default: "classic",
    },
    vertcalTimelinePhaseTitleNormalClassicColor: {
        type: "string",
        default: "#15171c",
    },
    vertcalTimelinePhaseTitleNormalGradientColor: {
        type: "string",
        default: null,
    },
    vertcalTimelinePhaseTitleNormalCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    vertcalTimelinePhaseTitleNormalCustomGradientInputValue: {
        type: "string",
        default: "",
    },

    vertcalTimelinePhaseTitleHoverBackgroundType: {
        type: "string",
        default: "classic",
    },
    vertcalTimelinePhaseTitleHoverClassicColor: {
        type: "string",
        default: "",
    },
    vertcalTimelinePhaseTitleHoverGradientColor: {
        type: "string",
        default: null,
    },
    vertcalTimelinePhaseTitleHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    vertcalTimelinePhaseTitleHoverCustomGradientInputValue: {
        type: "string",
        default: "",
    },
    /** End Phase Title Background */

    /** Start Content Box Border */
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
    /** End Content Box Border */

    /** Start Phase Title Border */
    vertcalTimelinePhaseTitleNormalBorder: {
        type: 'string',
        default: "none",
    },
    vertcalTimelinePhaseTitleNormalBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    vertcalTimelinePhaseTitleNormalBorderColor: {
        type: 'string',
        default: ""
    },
    vertcalTimelinePhaseTitleNormalBorderHoverColor: {
        type: 'string',
    },
    vertcalTimelinePhaseTitleNormalBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    vertcalTimelinePhaseTitleNormalBorderDesktop: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    vertcalTimelinePhaseTitleNormalBorderTablet: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    vertcalTimelinePhaseTitleNormalBorderMobile: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    vertcalTimelinePhaseTitleNormalBorderLink: {
        type: "boolean",
        default: true
    },
    /** End Phase Title Border */

    /** Start Content Box Border Radius */
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
    /** End Content Box Border Radius */

    /** Start Phase Title Border Radius */
    vertcalTimelinePhaseTitleNormalBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    vertcalTimelinePhaseTitleNormalBorderRadiusDesktop: {
        type: "object",
        default: {
            top: '72',
            bottom: '72',
            left: '72',
            right: '72',
        },
    },
    vertcalTimelinePhaseTitleNormalBorderRadiusTablet: {
        type: "object",
        default: {
            top: '72',
            bottom: '72',
            left: '72',
            right: '72',
        },
    },
    vertcalTimelinePhaseTitleNormalBorderRadiusMobile: {
        type: "object",
        default: {
            top: '72',
            bottom: '72',
            left: '72',
            right: '72',
        },
    },
    vertcalTimelinePhaseTitleNormalBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    /** End Phase Title Border Radius */

    /** Start Content Box Box Shadow */
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
    /** End Content Box Box Shadow */

    /** Start Phase Title Box Shadow */
    vertcalTimelinePhaseTitleBoxShadowSwitcher: {
        type: "string",
        default: "normal",
    },
    vertcalTimelinePhaseTitleBoxShadowValues: {
        type: "array",
        default: [],
    },
    vertcalTimelinePhaseTitleBoxShadowCssValue: {
        type: "string",
        default: "",
    },
    vertcalTimelinePhaseTitleBoxShadowHoverValues: {
        type: "array",
        default: [],
    },
    vertcalTimelinePhaseTitleBoxShadowHoverCssValue: {
        type: "string",
        default: "",
    },
    /** End Phase Title Box Shadow */

    /** Start Phase Title Alignment */
    vertcalTimelinePhaseTitleAlignment: {
        type: 'object',
        default: {
            Desktop: 'left',
            Tablet: '',
            Mobile: '',
        },
    },
    /** End Phase Title Alignment */

    /** Start Phase Title Typography */
    vertcalTimelinePhaseTitleGlobalTypoSwitcher: {
        type: "object",
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
    vertcalTimelinePhaseTitleGlobalTypographyData: {
        type: "object",
        default: {},
    },
    vertcalTimelinePhaseTitleGlobalTypoType: {
        type: "string",
        default: "default",
    },
    vertcalTimelinePhaseTitleGlobalTypoOption: {
        type: "object",
        default: { label: 'Default', value: 'default' },
    },
    vertcalTimelinePhaseTitleFontFamily: {
        type: "string",
        default: "Default",
    },
    vertcalTimelinePhaseTitleFontSize: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        },
    },
    vertcalTimelinePhaseTitleFontSizeUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    vertcalTimelinePhaseTitleFontWeight: {
        type: "string",
        default: "",
    },
    vertcalTimelinePhaseTitleFontStyle: {
        type: "string",
        default: "",
    },
    vertcalTimelinePhaseTitleTextTransform: {
        type: "string",
        default: "",
    },
    vertcalTimelinePhaseTitleTextDecoration: {
        type: "string",
        default: "none",
    },
    vertcalTimelinePhaseTitleLetterSpacing: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        },
    },
    vertcalTimelinePhaseTitleLineHeight: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        },
    },
    vertcalTimelinePhaseTitleLetterSpacingUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    vertcalTimelinePhaseTitleLineHeightUnits: {
        type: "object",
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Phase Title Typography */

    /** Start Phase Title Color */
    vertcalTimelinePhaseTitleColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    vertcalTimelinePhaseTitleColor: {
        type: 'string',
        default: '#ffffff'
    },
    vertcalTimelinePhaseTitleHoverColor: {
        type: 'string',
        default: ''
    },
    /** End Phase Title Color */

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
