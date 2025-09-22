const attributes = {
    blockID: {
        type: 'string',
        default: ''
    },
    arrowsUniqueId: {
        type: 'string',
        default: ''
    },
    deviceType: {
        type: 'string',
        default: 'Desktop'
    },
    blockStyle: {
        type: 'string',
        default: ''
    },
    newsTickerPresetStyle: {
        type: "string",
        default: "preset-1",
    },
    highlightColor: {
        type: 'string',
        default: '',
    },
    hoverHighlightColor: {
        type: 'string',
        default: '',
    },
    contentType: {
        type: 'string',
        default: '',
    },
    tickerLabel: {
        type: 'string',
        default: 'Breaking News',
    },
    tickerLabelIcon: {
        type: 'string',
        default: 'bolt',
    },
    isNewsTicker: {
        "type": "boolean",
        "default": true
    },
    tickerHeadingTag: {
        "type": "string",
        "default": "p"
    },
    timerPosition: {
        type: 'string',
        default: 'top-right',
    },
    navigationPosition: {
        type: 'string',
        default: 'right',
    },
    labelPosition: {
        type: 'string',
        default: 'left',
    },
    labelIconSwitcher: {
        type: "boolean",
        default: false,
    },
    iconSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    iconSize: {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '',
            Mobile: ''
        }
    },
    newsTickerIconAlignment: {
        type: 'string',
        default: 'left',
    },
    showArrows: {
        type: "boolean",
        default: false,
    },
    showTime: {
        type: "boolean",
        default: false,
    },
    showAutoplayButton: {
        type: "boolean",
        default: false,
    },
    
    /** Start Global Setting */
    newsTickerGlobalZIndex: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: '',
        }
    },
    newsTickerOverflow: {
        type: 'string',
        default: 'default',
    },
    /** Start Padding */
    newsTickerGlobalPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    newsTickerGlobalPaddingDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    newsTickerGlobalPaddingTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    newsTickerGlobalPaddingMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    newsTickerGlobalPaddingLink: {
        type: 'boolean',
        default: true
    },
    /** End Padding */

    /** Start Margin */
    newsTickerGlobalMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    newsTickerGlobalMarginDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    newsTickerGlobalMarginTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    newsTickerGlobalMarginMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    newsTickerGlobalMarginLink: {
        type: 'boolean',
        default: true
    },
    /** End Margin */



    /** Start Background Color */
    newsTickerGlobalBgColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    newsTickerGlobalNormalBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    newsTickerGlobalNormalClassicColor: {
        type: 'string',
        default: '',
    },
    newsTickerGlobalNormalGradientColor: {
        type: 'string',
        default: null,
    },
    newsTickerGlobalNormalCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    newsTickerGlobalNormalCustomGradientInputValue: {
        type: 'string',
        default: '',
    },


    newsTickerGlobalNormalBackgroundImageUrl: {
        type: 'string',
        default: ''
    },

    newsTickerGlobalNormalBackgroundImageAlt: {
        type: 'string',
        default: ''
    },

    newsTickerGlobalNormalBackgroundImageID: {
        type: 'string',
        default: ''
    },

    newsTickerGlobalNormalBackgroundImagePosition: {
        type: 'string',
        default: ''
    },

    newsTickerGlobalNormalBackgroundImageAttachment: {
        type: 'string',
        default: ''
    },

    newsTickerGlobalNormalBackgroundImageRepeat: {
        type: 'string',
        default: ''
    },

    newsTickerGlobalNormalBackgroundImageSize: {
        type: 'string',
        default: ''
    },


    newsTickerGlobalHoverBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    newsTickerGlobalHoverClassicColor: {
        type: 'string',
        default: '',
    },
    newsTickerGlobalHoverGradientColor: {
        type: 'string',
        default: null,
    },
    newsTickerGlobalHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    newsTickerGlobalHoverCustomGradientInputValue: {
        type: 'string',
        default: '',
    },

    newsTickerGlobalHoverBackgroundImageUrl: {
        type: 'string',
        default: ''
    },

    newsTickerGlobalHoverBackgroundImageAlt: {
        type: 'string',
        default: ''
    },

    newsTickerGlobalHoverBackgroundImageID: {
        type: 'string',
        default: ''
    },

    newsTickerGlobalHoverBackgroundImagePosition: {
        type: 'string',
        default: ''
    },

    newsTickerGlobalHoverBackgroundImageAttachment: {
        type: 'string',
        default: ''
    },

    newsTickerGlobalHoverBackgroundImageRepeat: {
        type: 'string',
        default: ''
    },

    newsTickerGlobalHoverBackgroundImageSize: {
        type: 'string',
        default: ''
    },
    /** End Background Color */

    /** Start Border */
    newsTickerGlobalBorder: {
        type: 'string',
        default: '',
    },
    newsTickerGlobalBorderColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    newsTickerGlobalBorderColor: {
        type: 'string',
        default: ''
    },
    newsTickerGlobalBorderHoverColor: {
        type: 'string',
    },
    newsTickerGlobalBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    newsTickerGlobalBorderDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    newsTickerGlobalBorderTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    newsTickerGlobalBorderMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    newsTickerGlobalBorderLink: {
        type: 'boolean',
        default: true
    },
    /** End Border */

    /** Start Border Radius */
    newsTickerGlobalBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    newsTickerGlobalBorderRadiusDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    newsTickerGlobalBorderRadiusTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    newsTickerGlobalBorderRadiusMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    newsTickerGlobalBorderRadiusLink: {
        type: 'boolean',
        default: true
    },
    /** End Border Radius */

    /** Start Box Shadow */
    newsTickerGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    newsTickerGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    newsTickerGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    newsTickerGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    newsTickerGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */

    newsTickerDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    newsTickerTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    newsTickerMobileSwitcher: {
        type: 'boolean',
        default: false,
    },

    /** End Responsive Control */

    /** Start Global Setting */
    newsTickerGlobalWraperCustomCSS: {
        type: 'string',
        default: '',
    },
    newsTickerGlobalWraperID: {
        type: 'string',
        default: ''
    },
    newsTickerGlobalWraperClass: {
        type: 'string',
        default: ''
    },
    /** End Global Setting */

    newsTickerPositionType: {
        type: 'string',
        default: 'default'
    },
    newsTickerHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    newsTickerVROrientationType: {
        type: 'string',
        default: 'top'
    },
    newsTickerHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    newsTickerHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    newsTickerHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    newsTickerHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    newsTickerVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    newsTickerVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    newsTickerVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    newsTickerVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    /** Start Label Container Styling */
    // Label typography
    tickerLabelTypographyData: {
        type: "object",
        default: {}
    },
    tickerLabelTypoSwitcher: {
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
    tickerLabelTypoType: {
        type: "string",
        default: 'default',
    },
    tickerLabelTypoOption: {
        type: "object",
        default: { label: 'Default', value: 'default' },
    },
    tickerLabelFontFamily: {
        type: "string",
        default: "Default",
    },
    tickerLabelFontSize: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '16',
            Mobile: '16'
        }
    },
    tickerLabelFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    tickerLabelFontWeight: {
        type: "string",
        default: "600"
    },
    tickerLabelFontStyle: {
        type: "string",
        default: ""
    },
    tickerLabelTextTransform: {
        type: "string",
        default: ""
    },
    tickerLabelTextDecoration: {
        type: "string",
        default: ""
    },
    tickerLabelLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    tickerLabelLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    tickerLabelLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    tickerLabelLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    // Label color
    labelTextColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    labelTextColor: {
        type: 'string',
        default: ''
    },
    labelTextHoverColor: {
        type: 'string',
        default: ''
    },
    // Label Container Padding
    labelContainerPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    labelContainerPaddingDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelContainerPaddingTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelContainerPaddingMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelContainerPaddingLink: {
        type: 'boolean',
        default: true
    },

    // Label Container Margin
    labelContainerMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    labelContainerMarginDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelContainerMarginTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelContainerMarginMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelContainerMarginLink: {
        type: 'boolean',
        default: true
    },

    // Label Container Border
    labelContainerBorder: {
        type: 'string',
        default: 'none',
    },
    labelContainerBorderColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    labelContainerBorderColor: {
        type: 'string',
        default: ''
    },
    labelContainerBorderHoverColor: {
        type: 'string',
        default: ''
    },
    labelContainerBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    labelContainerBorderDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelContainerBorderTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelContainerBorderMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelContainerBorderLink: {
        type: 'boolean',
        default: true
    },

    // Label Container Border Radius
    labelContainerBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    labelContainerBorderRadiusDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelContainerBorderRadiusTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelContainerBorderRadiusMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelContainerBorderRadiusLink: {
        type: 'boolean',
        default: true
    },

    // Label Container Background Color
    labelContainerBgColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    labelContainerNormalBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    labelContainerNormalClassicColor: {
        type: 'string',
        default: '',
    },
    labelContainerNormalGradientColor: {
        type: 'string',
        default: null,
    },
    labelContainerNormalCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    labelContainerNormalCustomGradientInputValue: {
        type: 'string',
        default: '',
    },

    labelContainerNormalBackgroundImageUrl: {
        type: 'string',
        default: ''
    },
    labelContainerNormalBackgroundImageAlt: {
        type: 'string',
        default: ''
    },
    labelContainerNormalBackgroundImageID: {
        type: 'string',
        default: ''
    },
    labelContainerNormalBackgroundImagePosition: {
        type: 'string',
        default: ''
    },
    labelContainerNormalBackgroundImageAttachment: {
        type: 'string',
        default: ''
    },
    labelContainerNormalBackgroundImageRepeat: {
        type: 'string',
        default: ''
    },
    labelContainerNormalBackgroundImageSize: {
        type: 'string',
        default: ''
    },

    labelContainerHoverBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    labelContainerHoverClassicColor: {
        type: 'string',
        default: '',
    },
    labelContainerHoverGradientColor: {
        type: 'string',
        default: null,
    },
    labelContainerHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    labelContainerHoverCustomGradientInputValue: {
        type: 'string',
        default: '',
    },

    labelContainerHoverBackgroundImageUrl: {
        type: 'string',
        default: ''
    },
    labelContainerHoverBackgroundImageAlt: {
        type: 'string',
        default: ''
    },
    labelContainerHoverBackgroundImageID: {
        type: 'string',
        default: ''
    },
    labelContainerHoverBackgroundImagePosition: {
        type: 'string',
        default: ''
    },
    labelContainerHoverBackgroundImageAttachment: {
        type: 'string',
        default: ''
    },
    labelContainerHoverBackgroundImageRepeat: {
        type: 'string',
        default: ''
    },
    labelContainerHoverBackgroundImageSize: {
        type: 'string',
        default: ''
    },
    /** End Label Container Styling */

    /** Start Label Icon Styling */

    // Label Icon color
    labelIconColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    labelIconColor: {
        type: 'string',
        default: ''
    },
    labelIconHoverColor: {
        type: 'string',
        default: ''
    },
    //Navigation Icon color
    navigationIconColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    navigationIconColor: {
        type: 'string',
        default: ''
    },
    navigationIconHoverColor: {
        type: 'string',
        default: ''
    },
    // Label Icon Padding
    labelIconPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    labelIconPaddingDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelIconPaddingTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelIconPaddingMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelIconPaddingLink: {
        type: 'boolean',
        default: true
    },

    // Label Icon Margin
    labelIconMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    labelIconMarginDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelIconMarginTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelIconMarginMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelIconMarginLink: {
        type: 'boolean',
        default: true
    },

    // Label Icon Border
    labelIconBorder: {
        type: 'string',
        default: 'none',
    },
    labelIconBorderColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    labelIconBorderColor: {
        type: 'string',
        default: ''
    },
    labelIconBorderHoverColor: {
        type: 'string',
        default: ''
    },
    labelIconBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    labelIconBorderDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelIconBorderTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelIconBorderMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelIconBorderLink: {
        type: 'boolean',
        default: true
    },

    // Label Icon Border Radius
    labelIconBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    labelIconBorderRadiusDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelIconBorderRadiusTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelIconBorderRadiusMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    labelIconBorderRadiusLink: {
        type: 'boolean',
        default: true
    },

    // Label Icon Background Color
    labelIconBgColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    labelIconNormalBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    labelIconNormalClassicColor: {
        type: 'string',
        default: '',
    },
    labelIconNormalGradientColor: {
        type: 'string',
        default: null,
    },
    labelIconNormalCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    labelIconNormalCustomGradientInputValue: {
        type: 'string',
        default: '',
    },

    labelIconNormalBackgroundImageUrl: {
        type: 'string',
        default: ''
    },
    labelIconNormalBackgroundImageAlt: {
        type: 'string',
        default: ''
    },
    labelIconNormalBackgroundImageID: {
        type: 'string',
        default: ''
    },
    labelIconNormalBackgroundImagePosition: {
        type: 'string',
        default: ''
    },
    labelIconNormalBackgroundImageAttachment: {
        type: 'string',
        default: ''
    },
    labelIconNormalBackgroundImageRepeat: {
        type: 'string',
        default: ''
    },
    labelIconNormalBackgroundImageSize: {
        type: 'string',
        default: ''
    },

    labelIconHoverBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    labelIconHoverClassicColor: {
        type: 'string',
        default: '',
    },
    labelIconHoverGradientColor: {
        type: 'string',
        default: null,
    },
    labelIconHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    labelIconHoverCustomGradientInputValue: {
        type: 'string',
        default: '',
    },

    labelIconHoverBackgroundImageUrl: {
        type: 'string',
        default: ''
    },
    labelIconHoverBackgroundImageAlt: {
        type: 'string',
        default: ''
    },
    labelIconHoverBackgroundImageID: {
        type: 'string',
        default: ''
    },
    labelIconHoverBackgroundImagePosition: {
        type: 'string',
        default: ''
    },
    labelIconHoverBackgroundImageAttachment: {
        type: 'string',
        default: ''
    },
    labelIconHoverBackgroundImageRepeat: {
        type: 'string',
        default: ''
    },
    labelIconHoverBackgroundImageSize: {
        type: 'string',
        default: ''
    },
    //Ticker Timer
    // Label typography
    tickerTimerTypographyData: {
        type: "object",
        default: {}
    },
    tickerTimerTypoSwitcher: {
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
    tickerTimerTypoType: {
        type: "string",
        default: 'default',
    },
    tickerTimerTypoOption: {
        type: "object",
        default: { label: 'Default', value: 'default' },
    },
    tickerTimerFontFamily: {
        type: "string",
        default: "Default",
    },
    tickerTimerFontSize: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '16',
            Mobile: '16'
        }
    },
    tickerTimerFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    tickerTimerFontWeight: {
        type: "string",
        default: "600"
    },
    tickerTimerFontStyle: {
        type: "string",
        default: ""
    },
    tickerTimerTextTransform: {
        type: "string",
        default: ""
    },
    tickerTimerTextDecoration: {
        type: "string",
        default: ""
    },
    tickerTimerLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    tickerTimerLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    tickerTimerLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    tickerTimerLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    //Ticker timer color
    tickerTimerColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    tickerTimerColor: {
        type: 'string',
        default: ''
    },
    tickerTimerHoverColor: {
        type: 'string',
        default: ''
    },
    // Ticker Timer Padding
    tickerTimerPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tickerTimerPaddingDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tickerTimerPaddingTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tickerTimerPaddingMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tickerTimerPaddingLink: {
        type: 'boolean',
        default: true
    },

    // Ticker Timer Margin
    tickerTimerMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tickerTimerMarginDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tickerTimerMarginTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tickerTimerMarginMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tickerTimerMarginLink: {
        type: 'boolean',
        default: true
    },

    // Ticker Timer Border
    tickerTimerBorder: {
        type: 'string',
        default: '',
    },
    tickerTimerBorderColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    tickerTimerBorderColor: {
        type: 'string',
        default: ''
    },
    tickerTimerBorderHoverColor: {
        type: 'string',
        default: ''
    },
    tickerTimerBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tickerTimerBorderDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tickerTimerBorderTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tickerTimerBorderMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tickerTimerBorderLink: {
        type: 'boolean',
        default: true
    },

    // Ticker Timer Border Radius
    tickerTimerBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tickerTimerBorderRadiusDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tickerTimerBorderRadiusTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tickerTimerBorderRadiusMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tickerTimerBorderRadiusLink: {
        type: 'boolean',
        default: true
    },

    // Ticker Timer Background Color
    tickerTimerBgColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    tickerTimerNormalBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    tickerTimerNormalClassicColor: {
        type: 'string',
        default: '',
    },
    tickerTimerNormalGradientColor: {
        type: 'string',
        default: null,
    },
    tickerTimerNormalCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    tickerTimerNormalCustomGradientInputValue: {
        type: 'string',
        default: '',
    },

    tickerTimerNormalBackgroundImageUrl: {
        type: 'string',
        default: ''
    },
    tickerTimerNormalBackgroundImageAlt: {
        type: 'string',
        default: ''
    },
    tickerTimerNormalBackgroundImageID: {
        type: 'string',
        default: ''
    },
    tickerTimerNormalBackgroundImagePosition: {
        type: 'string',
        default: ''
    },
    tickerTimerNormalBackgroundImageAttachment: {
        type: 'string',
        default: ''
    },
    tickerTimerNormalBackgroundImageRepeat: {
        type: 'string',
        default: ''
    },
    tickerTimerNormalBackgroundImageSize: {
        type: 'string',
        default: ''
    },

    tickerTimerHoverBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    tickerTimerHoverClassicColor: {
        type: 'string',
        default: '',
    },
    tickerTimerHoverGradientColor: {
        type: 'string',
        default: null,
    },
    tickerTimerHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    tickerTimerHoverCustomGradientInputValue: {
        type: 'string',
        default: '',
    },

    tickerTimerHoverBackgroundImageUrl: {
        type: 'string',
        default: ''
    },
    tickerTimerHoverBackgroundImageAlt: {
        type: 'string',
        default: ''
    },
    tickerTimerHoverBackgroundImageID: {
        type: 'string',
        default: ''
    },
    tickerTimerHoverBackgroundImagePosition: {
        type: 'string',
        default: ''
    },
    tickerTimerHoverBackgroundImageAttachment: {
        type: 'string',
        default: ''
    },
    tickerTimerHoverBackgroundImageRepeat: {
        type: 'string',
        default: ''
    },
    tickerTimerHoverBackgroundImageSize: {
        type: 'string',
        default: ''
    },
    /** End Ticker Timer Styling */
};

export default attributes;
