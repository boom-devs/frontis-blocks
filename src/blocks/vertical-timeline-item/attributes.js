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
    inheritedShowSectionLabelSwitcher: {
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
    phaseTitleTypographyData: {
        type: 'object',
        default: {}
    },
    phaseTitleTypoSwitcher: {
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
    phaseTitleTypoType: {
        type: 'string',
        default: 'default',
    },
    phaseTitleTypoOption: {
        type: 'object',
        default: { label: 'Default', value: 'default' },
    },
    phaseTitleFontFamily: {
        type: 'string',
        default: 'Default',
    },
    phaseTitleFontSize: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '16',
            Mobile: '16'
        }
    },
    phaseTitleFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    phaseTitleFontWeight: {
        type: 'string',
        default: '700',
    },
    phaseTitleFontStyle: {
        type: 'string',
        default: '',
    },
    phaseTitleTextTransform: {
        type: 'string',
        default: '',
    },
    phaseTitleTextDecoration: {
        type: 'string',
        default: '',
    },
    phaseTitleLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    phaseTitleLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    phaseTitleLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    phaseTitleLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Phase Title Typography */

    /** Start Section Lebel Typography */
    sectionLebelTypographyData: {
        type: 'object',
        default: {}
    },
    sectionLebelTypoSwitcher: {
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
    sectionLebelTypoType: {
        type: 'string',
        default: 'default',
    },
    sectionLebelTypoOption: {
        type: 'object',
        default: { label: 'Default', value: 'default' },
    },
    sectionLebelFontFamily: {
        type: 'string',
        default: 'Default',
    },
    sectionLebelFontSize: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '16',
            Mobile: '16'
        }
    },
    sectionLebelFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    sectionLebelFontWeight: {
        type: 'string',
        default: '700',
    },
    sectionLebelFontStyle: {
        type: 'string',
        default: '',
    },
    sectionLebelTextTransform: {
        type: 'string',
        default: '',
    },
    sectionLebelTextDecoration: {
        type: 'string',
        default: '',
    },
    sectionLebelLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    sectionLebelLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    sectionLebelLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    sectionLebelLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Section Lebel Typography */

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

    /** Start Section level Color */
    sectionLebelBtnTextColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    sectionLebelBtnTextColor: {
        type: 'string',
        default: ''
    },
    sectionLebelBtnTextHoverColor: {
        type: 'string',
        default: ''
    },
    /** End Section level Color */

    /** Start Icon Padding */
    verticalTimelineItemIconPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    verticalTimelineItemIconPaddingDesktop: {
        type: "object",
        default: {
            top: '6',
            bottom: '6',
            left: '6',
            right: '6',
        },
    },
    verticalTimelineItemIconPaddingTablet: {
        type: "object",
        default: {
            top: '6',
            bottom: '6',
            left: '6',
            right: '6',
        },
    },
    verticalTimelineItemIconPaddingMobile: {
        type: "object",
        default: {
            top: '6',
            bottom: '6',
            left: '6',
            right: '6',
        },
    },
    verticalTimelineItemIconPaddingLink: {
        type: "boolean",
        default: true
    },
    /** End Icon Padding */

    /** Start Icon Background Color */
    verticalTimelineItemIconBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    verticalTimelineItemIconNormalBackgroundType: {
        type: "string",
        default: "gradient",
    },
    verticalTimelineItemIconNormalClassicColor: {
        type: "string",
        default: "",
    },
    verticalTimelineItemIconNormalGradientColor: {
        type: "string",
        default: "linear-gradient(180deg, #0875ff 0%, #054699 100%)",
    },
    verticalTimelineItemIconNormalCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    verticalTimelineItemIconNormalCustomGradientInputValue: {
        type: "string",
        default: "",
    },

    verticalTimelineItemIconHoverBackgroundType: {
        type: "string",
        default: "classic",
    },
    verticalTimelineItemIconHoverClassicColor: {
        type: "string",
        default: "",
    },
    verticalTimelineItemIconHoverGradientColor: {
        type: "string",
        default: null,
    },
    verticalTimelineItemIconHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    verticalTimelineItemIconHoverCustomGradientInputValue: {
        type: "string",
        default: "",
    },
    /** End Icon Background Color */

    /** Start Icon Color */
    verticalTimelineItemIconColorSwitcher: {
        type: "string",
        default: "normal",
    },
    verticalTimelineItemIconColor: {
        type: "string",
        default: "#FFFFFF",
    },
    verticalTimelineItemIconHoverColor: {
        type: "string",
    },
    /** End Icon Color */

    /** Start Icon Border */
    verticalTimelineItemIconBorder: {
        type: "string",
        default: "none",
    },
    verticalTimelineItemIconBorderColorSwitcher: {
        type: "string",
        default: "normal",
    },
    verticalTimelineItemIconBorderColor: {
        type: "string",
        default: "",
    },
    verticalTimelineItemIconBorderHoverColor: {
        type: "string",
        default: "",
    },
    verticalTimelineItemIconBorderUnits: {
        type: "object",
        default: {
            Desktop: "px",
            Tablet: "px",
            Mobile: "px",
        },
    },
    verticalTimelineItemIconBorderDesktop: {
        type: "object",
        default: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
    },
    verticalTimelineItemIconBorderTablet: {
        type: "object",
        default: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
    },
    verticalTimelineItemIconBorderMobile: {
        type: "object",
        default: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
    },
    verticalTimelineItemIconBorderLink: {
        type: "boolean",
        default: true,
    },
    /** End Icon Border */

    /** Start Icon Border Radius */
    verticalTimelineItemIconBorderRadiusUnits: {
        type: "object",
        default: {
            Desktop: "%",
            Tablet: "%",
            Mobile: "%",
        },
    },
    verticalTimelineItemIconBorderRadiusDesktop: {
        type: "object",
        default: {
            top: '50',
            right: '50',
            bottom: '50',
            left: '50'
        },
    },
    verticalTimelineItemIconBorderRadiusTablet: {
        type: "object",
        default: {
            top: '50',
            right: '50',
            bottom: '50',
            left: '50'
        },
    },
    verticalTimelineItemIconBorderRadiusMobile: {
        type: "object",
        default: {
            top: '50',
            right: '50',
            bottom: '50',
            left: '50'
        },
    },
    verticalTimelineItemIconBorderRadiusLink: {
        type: "boolean",
        default: true,
    },
    /** End Icon Border Radius */

    /** Start Icon Box Shadow */
    verticalTimelineItemIconBoxShadowSwitcher: {
        type: "string",
        default: "normal",
    },
    verticalTimelineItemIconBoxShadowValues: {
        type: "array",
        default: [],
    },
    verticalTimelineItemIconBoxShadowCssValue: {
        type: "string",
        default: "",
    },
    verticalTimelineItemIconBoxShadowHoverValues: {
        type: "array",
        default: [],
    },
    verticalTimelineItemIconBoxShadowHoverCssValue: {
        type: "string",
        default: "",
    },
    /** End Icon Box Shadow */

    /** Start Icon Border */
    verticalTimelineItemIconBorder: {
        type: "string",
        default: "none",
    },
    verticalTimelineItemIconBorderColorSwitcher: {
        type: "string",
        default: "normal",
    },
    verticalTimelineItemIconBorderColor: {
        type: "string",
        default: "",
    },
    verticalTimelineItemIconBorderHoverColor: {
        type: "string",
        default: "",
    },
    verticalTimelineItemIconBorderUnits: {
        type: "object",
        default: {
            Desktop: "px",
            Tablet: "px",
            Mobile: "px",
        },
    },
    verticalTimelineItemIconBorderDesktop: {
        type: "object",
        default: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
    },
    verticalTimelineItemIconBorderTablet: {
        type: "object",
        default: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
    },
    verticalTimelineItemIconBorderMobile: {
        type: "object",
        default: {
            top: '',
            right: '',
            bottom: '',
            left: ''
        },
    },
    verticalTimelineItemIconBorderLink: {
        type: "boolean",
        default: true,
    },
    /** End Icon Border */

    /** Start Icon Size */
    verticalTimelineIconSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    verticalTimelineIconSize: {
        type: 'object',
        default: {
            Desktop: '24',
            Tablet: '24',
            Mobile: '24'
        }
    },
    /** End Icon Size */

    /** Start Responsive Controls */
    verticalTimelineItemDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    verticalTimelineItemTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    verticalTimelineItemMobileSwitcher: {
        type: 'boolean',
        default: false,
    },
    /** End Responsive Controls */

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
