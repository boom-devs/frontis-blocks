const attributes = {
    blockID: {
        type: "string",
        default: "",
    },
    blockStyle: {
        type: "string",
        default: "",
    },
    timelineChildCount: {
        type: "number",
        default: 5,
    },
    showSectionLabelSwitcher: {
        type: "boolean",
        default: true,
    },

    /** Start Progress Line */
    verticalTimelineItemlineColorSwitcher: {
        type: 'string',
        default: 'progress',
    },
    verticalTimelineItemProgressLineColor: {
        type: 'string',
        default: '#054699',
    },
    verticalTimelineItemBaseLineColor: {
        type: 'string',
        default: '#d0dff5',
    },
    /** End Progress Line */

    /** Start Base Line Width */
    verticalTimelineBaseLineWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    verticalTimelineBaseLineWidth: {
        type: 'object',
        default: {
            Desktop: '3',
            Tablet: '3',
            Mobile: '3'
        }
    },
    /** End Base Line Width */

    /** Start Progress Line Width */
    verticalTimelineProgressLineWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    verticalTimelineProgressLineWidth: {
        type: 'object',
        default: {
            Desktop: '3',
            Tablet: '3',
            Mobile: '3'
        }
    },
    /** End Progress Line Width */

    /** Start Global Settings */
    verticalTimelineBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    verticalTimelineBgType: {
        type: 'string',
        default: 'classic'
    },
    verticalTimelineBgClassicColor: {
        type: 'string',
    },
    verticalTimelineBgGradientColor: {
        type: 'string',
    },
    verticalTimelineBgCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    verticalTimelineBgCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgColorStyle: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgImageUrl: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgImageAlt: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgImageID: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgImagePosition: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgImageAttachment: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgImageSize: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgImageRepeat: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgHoverType: {
        type: 'string',
        default: 'classic'
    },
    verticalTimelineBgHoverClassicColor: {
        type: 'string',
    },
    verticalTimelineBgHoverGradientColor: {
        type: 'string',
    },
    verticalTimelineBgHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    verticalTimelineBgHoverCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgHoverColorStyle: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgHoverImageUrl: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgHoverImageAlt: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgHoverImageID: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgHoverImagePosition: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgHoverImageAttachment: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgHoverImageSize: {
        type: 'string',
        default: ''
    },
    verticalTimelineBgHoverImageRepeat: {
        type: 'string',
        default: ''
    },
    /** End Global Settings */

    /** Start Responsive Settings */
    verticalTimelineDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    verticalTimelineTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    verticalTimelineMobileSwitcher: {
        type: 'boolean',
        default: false,
    },
    /** End Responsive Settings */

    /** Start Global Box Shadow */
    verticalTimelineGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    verticalTimelineGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    verticalTimelineGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    verticalTimelineGlobalHoverBoxShadowValues: {
        type: 'array',
        default: [],
    },
    verticalTimelineGlobalHoverBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Box Shadow */

    /** Start Global Border */
    verticalTimelineBorder: {
        type: 'string',
        default: 'none',
    },
    verticalTimelineBorderColor: {
        type: 'string',
    },
    verticalTimelineBorderHoverColor: {
        type: 'string',
    },
    verticalTimelineBorderColorSwitcher: {
        type: 'string',
        default: 'normal'
    },

    verticalTimelineBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    verticalTimelineDesktopBorderWidth: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    verticalTimelineTabBorderWidth: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    verticalTimelineMobileBorderWidth: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    verticalTimelineBorderLink: {
        type: 'boolean',
        default: true
    },

    verticalTimelineBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    verticalTimelineDesktopBorderRadiusWidth: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    verticalTimelineTabBorderRadiusWidth: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    verticalTimelineMobileBorderRadiusWidth: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    verticalTimelineBorderRadiusLink: {
        type: 'boolean',
        default: true
    },
    /** End Global Border */

    /** Start Padding */
    verticalTimelinePaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    verticalTimelineDesktopPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    verticalTimelineTabPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    verticalTimelineMobilePadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    verticalTimelinePaddingLink: {
        type: 'boolean',
        default: true
    },
    /** End Padding */

    /** Start Margin */
    verticalTimelineMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    verticalTimelineDesktopMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    verticalTimelineTabMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    verticalTimelineMobileMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    verticalTimelineMarginLink: {
        type: 'boolean',
        default: true
    },
    /** End Margin */

    /** Start Class & ID Setting */
    verticalTimelineGlobalZIndex: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    verticalTimelineCustomCSS: {
        type: "string",
        default: "",
    },
    verticalTimelineWrapperID: {
        type: "string",
        default: ""
    },
    verticalTimelineWrapperClass: {
        type: "string",
        default: ""
    },
    /** End Class & ID Setting */
}
export default attributes
