const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: ""
    },

    /** Start Class & ID Setting */
    imageComparisonCustomCSS: {
        type: "string",
        default: "",
    },
    imageComparisonWraperID: {
        type: "string",
        default: ""
    },

    imageComparisonWraperClass: {
        type: "string",
        default: ""
    },
    /** End Class & ID Setting */

    /** Start Image Comparison Attributes */
    beforeImageUrl: {
        type: "string",
        default: ""
    },
    beforeImageAlt: {
        type: "string",
        default: ""
    },
    beforeImageId: {
        type: "number",
        default: "0"
    },
    afterImageUrl: {
        type: "string",
        default: ""
    },
    afterImageAlt: {
        type: "string",
        default: ""
    },
    afterImageId: {
        type: "number",
        default: "0"
    },
    /** End Image Comparison Attributes */

    /** Start Comparison Height */
    comparisonHeight: {
        type: 'object',
        default: {
            Desktop: '500',
            Tablet: '400',
            Mobile: '300'
        }
    },
    comparisonHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Comparison Height */

    /** Start Before Image */
    beforeImgShowLabelSwitcher: {
        type: "boolean",
        default: true,
    },
    /** End Before Image */

    /** Start After Image */
    afterImgShowLabelSwitcher: {
        type: "boolean",
        default: true,
    },
    /** End After Image */

    /** Start After Image */
    afterImageLabel: {
        type: "string",
        default: "After"
    },
    /** End After Image */

    /** Start Before Image */
    beforeImageLabel: {
        type: "string",
        default: "Before"
    },
    /** End Before Image */

    /** Start Initial Offset */
    comparisonInitialOffset: {
        type: "object",
        default: {
            Desktop: "50",
            Tablet: "50",
            Mobile: "50"
        }
    },
    /** End Initial Offset */

    /** Start Comparison Settings */
    hoverToSlideSwitcher: {
        type: "boolean",
        default: false,
    },
    clickToMoveSwitcher: {
        type: "boolean",
        default: false,
    },
    disableOverlaySwitcher: {
        type: "boolean",
        default: false,
    },
    /** End Comparison Settings */

    /** Start Comparison Drag Direction */
    comparisonDragDirection: {
        type: 'string',
        default: 'horizontal',
    },
    /** End Comparison Drag Direction */

    /** Start Padding */
    comparisonPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    comparisonPaddingDesktop: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    comparisonPaddingTablet: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    comparisonPaddingMobile: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    comparisonPaddingLink: {
        type: "boolean",
        default: true
    },
    /** End Padding */

    /** Start Comparison Margin */
    comparisonMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    comparisonMarginDesktop: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    comparisonMarginTablet: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    comparisonMarginMobile: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    comparisonMarginLink: {
        type: "boolean",
        default: true
    },
    /** End Comparison Margin */

    /** Start Comparison Border */
    comparisonBorder: {
        type: 'string',
        default: "none",
    },
    comparisonBorderColorSwitcher: {
        type: "string",
        default: "normal"
    },
    comparisonBorderColor: {
        type: 'string',
        default: ""
    },
    comparisonBorderHoverColor: {
        type: 'string',
    },
    comparisonBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    comparisonBorderDesktop: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    comparisonBorderTablet: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    comparisonBorderMobile: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    comparisonBorderLink: {
        type: "boolean",
        default: true
    },
    /** End Comparison Border */

    /** Start Comparison Border Units */
    comparisonBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    comparisonBorderRadiusDesktop: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    comparisonBorderRadiusTablet: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    comparisonBorderRadiusMobile: {
        type: "object",
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    comparisonBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    /** End Comparison Border Units */

    /** Start Comparison Border Radius */
    comparisonBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    comparisonBorderRadiusDesktop: {
        type: 'object',
        default: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        }
    },
    comparisonBorderRadiusTablet: {
        type: 'object',
        default: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        }
    },
    comparisonBorderRadiusMobile: {
        type: 'object',
        default: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0'
        }
    },
    comparisonBorderRadiusLink: {
        type: 'boolean',
        default: true
    },
    /** End Comparison Border Radius */

    /** Start Box Shadow */
    comparisonBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    comparisonBoxShadowValues: {
        type: 'array',
        default: [],
    },
    comparisonBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    comparisonBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    comparisonBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Box Shadow */

    /** Start Comparison Labels Padding */
    comparisonLabelsPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    comparisonLabelsPaddingDesktop: {
        type: "object",
        default: {
            top: '8',
            bottom: '8',
            left: '14',
            right: '14',
        },
    },
    comparisonLabelsPaddingTablet: {
        type: "object",
        default: {
            top: '8',
            bottom: '8',
            left: '14',
            right: '14',
        },
    },
    comparisonLabelsPaddingMobile: {
        type: "object",
        default: {
            top: '6',
            bottom: '6',
            left: '12',
            right: '12',
        },
    },
    comparisonLabelsPaddingLink: {
        type: "boolean",
        default: true
    },
    /** End Comparison Labels Padding */

    /** Start Comparison Labels Border Radius */
    comparisonLabelsBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    comparisonLabelsBorderRadiusDesktop: {
        type: "object",
        default: {
            top: '6',
            bottom: '6',
            left: '6',
            right: '6',
        },
    },
    comparisonLabelsBorderRadiusTablet: {
        type: "object",
        default: {
            top: '6',
            bottom: '6',
            left: '6',
            right: '6',
        },
    },
    comparisonLabelsBorderRadiusMobile: {
        type: "object",
        default: {
            top: '6',
            bottom: '6',
            left: '6',
            right: '6',
        },
    },
    comparisonLabelsBorderRadiusLink: {
        type: "boolean",
        default: true
    },
    /** End Comparison Labels Border Radius */

    /** Start Comparison Labels Background Color */
    comparisonLabelsBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    comparisonLabelsNormalBackgroundType: {
        type: "string",
        default: "classic",
    },
    comparisonLabelsNormalClassicColor: {
        type: "string",
        default: "rgba(0, 0, 0, 0.5)",
    },
    comparisonLabelsNormalGradientColor: {
        type: "string",
        default: null,
    },
    comparisonLabelsNormalCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    comparisonLabelsNormalCustomGradientInputValue: {
        type: "string",
        default: "",
    },

    comparisonLabelsHoverBackgroundType: {
        type: "string",
        default: "classic",
    },
    comparisonLabelsHoverClassicColor: {
        type: "string",
        default: "",
    },
    comparisonLabelsHoverGradientColor: {
        type: "string",
        default: null,
    },
    comparisonLabelsHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    comparisonLabelsHoverCustomGradientInputValue: {
        type: "string",
        default: "",
    },
    /** End Comparison Labels Background Color */

    /** Start Comparison Labels Typography */
    comparisonLabelsGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    comparisonLabelsGlobalTypoSwitcher: {
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
    comparisonLabelsGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    comparisonLabelsGlobalTypoOption: {
        type: 'object',
        default: { label: 'Default', value: 'default' },
    },
    comparisonLabelsFontFamily: {
        type: 'string',
        default: 'Default',
    },
    comparisonLabelsFontSize: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '16',
            Mobile: '16'
        }
    },
    comparisonLabelsFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    comparisonLabelsFontWeight: {
        type: 'string',
        default: '700',
    },
    comparisonLabelsFontStyle: {
        type: 'string',
        default: '',
    },
    comparisonLabelsTextTransform: {
        type: 'string',
        default: '',
    },
    comparisonLabelsTextDecoration: {
        type: 'string',
        default: '',
    },
    comparisonLabelsLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    comparisonLabelsLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    comparisonLabelsLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    comparisonLabelsLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Comparison Labels Typography */

    /** Start Comparison Labels Text Color */
    comparisonLabelsBtnTextColorSwitcher: {
        type: "string",
        default: "normal",
    },
    comparisonLabelsBtnTextColor: {
        type: "string",
        default: "#FFFFFF",
    },
    comparisonLabelsBtnTextHoverColor: {
        type: "string",
    },
    /** End Comparison Labels Text Color */

    /** Start Border Radius */
    comparisonHandlerBorderRadiusUnits: {
        type: "object",
        default: {
            Desktop: "%",
            Tablet: "%",
            Mobile: "%",
        },
    },
    comparisonHandlerBorderRadiusDesktop: {
        type: "object",
        default: {
            top: '50',
            right: '50',
            bottom: '50',
            left: '50'
        },
    },
    comparisonHandlerBorderRadiusTablet: {
        type: "object",
        default: {
            top: '50',
            right: '50',
            bottom: '50',
            left: '50'
        },
    },
    comparisonHandlerBorderRadiusMobile: {
        type: "object",
        default: {
            top: '50',
            right: '50',
            bottom: '50',
            left: '50'
        },
    },
    comparisonHandlerBorderRadiusLink: {
        type: "boolean",
        default: true,
    },
    /** End Border Radius */

    /**Start Handler Size */
    comparisonHandlerSize: {
        type: "object",
        default: {
            Desktop: "40",
            Tablet: "40",
            Mobile: "40"
        },
    },
    comparisonHandlerSizeUnits: {
        type: "object",
        default: {
            Desktop: "px",
            Tablet: "px",
            Mobile: "px",
        }
    },
    /**End Handler Size */

    /** Start Comparison Handler Color */
    comparisonHandlerColorSwitcher: {
        type: "string",
        default: "normal",
    },
    comparisonHandlerColor: {
        type: "string",
        default: "#FFFFFF",
    },
    comparisonHandlerHoverColor: {
        type: "string",
        default: "",
    },
    /** End Comparison Handler Color */

    /**Start Divider Width */
    comparisonDividerWidth: {
        type: "object",
        default: {
            Desktop: "2",
            Tablet: "2",
            Mobile: "2"
        },
    },
    comparisonDividerWidthUnits: {
        type: "object",
        default: {
            Desktop: "px",
            Tablet: "px",
            Mobile: "px",
        },
    },
    /** End Divider Width */

    /** Start Comparison Divider Color */
    comparisonDividerColorSwitcher: {
        type: "string",
        default: "normal",
    },
    comparisonDividerColor: {
        type: "string",
        default: "#ffffff",
    },
    comparisonDividerHoverColor: {
        type: "string",
        default: "",
    },
    /** End Comparison Divider Color */

    /** Start Comparison Arrow Color */
    comparisonArrowColorSwitcher: {
        type: "string",
        default: "normal",
    },
    comparisonArrowColor: {
        type: "string",
        default: "#FFFFFF",
    },
    comparisonArrowHoverColor: {
        type: "string",
        default: "",
    },
    /** End Comparison Arrow Color */

    /** Start Comparison Arrow Size */
    comparisonArrowSize: {
        type: "object",
        default: {
            Desktop: "10",
            Tablet: "10",
            Mobile: "10"
        },
    },
    comparisonArrowSizeUnits: {
        type: "object",
        default: {
            Desktop: "px",
            Tablet: "px",
            Mobile: "px",
        },
    },
    /** End Comparison Arrow Size */

    /** Start Comparison Overlay Background */
    compareOverlayBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    compareOverlayNormalBackgroundType: {
        type: "string",
        default: "classic",
    },
    compareOverlayNormalClassicColor: {
        type: "string",
        default: "",
    },
    compareOverlayNormalGradientColor: {
        type: "string",
        default: null,
    },
    compareOverlayNormalCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    compareOverlayNormalCustomGradientInputValue: {
        type: "string",
        default: "",
    },

    compareOverlayHoverBackgroundType: {
        type: "string",
        default: "classic",
    },
    compareOverlayHoverClassicColor: {
        type: "string",
        default: "rgba(0, 0, 0, 0.4)",
    },
    compareOverlayHoverGradientColor: {
        type: "string",
        default: null,
    },
    compareOverlayHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    compareOverlayHoverCustomGradientInputValue: {
        type: "string",
        default: "",
    },
    /** End Comparison Overlay Background */

    /** Start Z Index */
    comparisonGlobalZIndex: {
        type: "string",
        default: "1",
    },
    /** End Z Index */

    /** Start Comparison Background */
    comparisonBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    comparisonBgType: {
        type: 'string',
        default: 'classic'
    },
    comparisonBgClassicColor: {
        type: 'string',
    },
    comparisonBgGradientColor: {
        type: 'string',
    },
    comparisonBgCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    comparisonBgCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    comparisonBgColorStyle: {
        type: 'string',
        default: ''
    },
    comparisonBgImageUrl: {
        type: 'string',
        default: ''
    },
    comparisonBgImageAlt: {
        type: 'string',
        default: ''
    },
    comparisonBgImageID: {
        type: 'string',
        default: ''
    },
    comparisonBgImagePosition: {
        type: 'string',
        default: ''
    },
    comparisonBgImageAttachment: {
        type: 'string',
        default: ''
    },
    comparisonBgImageSize: {
        type: 'string',
        default: ''
    },
    comparisonBgImageRepeat: {
        type: 'string',
        default: ''
    },
    comparisonBgHoverType: {
        type: 'string',
        default: 'classic'
    },
    comparisonBgHoverClassicColor: {
        type: 'string',
    },
    comparisonBgHoverGradientColor: {
        type: 'string',
    },
    comparisonBgHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false
    },
    comparisonBgHoverCustomGradientInputValue: {
        type: 'string',
        default: ''
    },
    comparisonBgHoverColorStyle: {
        type: 'string',
        default: ''
    },
    comparisonBgHoverImageUrl: {
        type: 'string',
        default: ''
    },
    comparisonBgHoverImageAlt: {
        type: 'string',
        default: ''
    },
    comparisonBgHoverImageID: {
        type: 'string',
        default: ''
    },
    comparisonBgHoverImagePosition: {
        type: 'string',
        default: ''
    },
    comparisonBgHoverImageAttachment: {
        type: 'string',
        default: ''
    },
    comparisonBgHoverImageSize: {
        type: 'string',
        default: ''
    },
    comparisonBgHoverImageRepeat: {
        type: 'string',
        default: ''
    },
    /** End Comparison Background */

    /** Start Class & ID Setting */
    comparisonCustomCSS: {
        type: "string",
        default: "",
    },
    comparisonWraperID: {
        type: "string",
        default: ""
    },

    comparisonWraperClass: {
        type: "string",
        default: ""
    },
    /** End Class & ID Setting */

}

export default attributes;
