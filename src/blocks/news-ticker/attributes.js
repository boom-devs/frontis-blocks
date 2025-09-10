const attributes = {
    blockID: {
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
    FeatureTag: {
        type: 'string',
        default: 'h3'
    },
    FeatureIconShape: {
        type: 'string',
        default: 'circle'
    },
    FeatureAlignment: {
        type: 'string',
        default: 'center',
    },
    FeatureIconAlignment: {
        type: 'string',
        default: 'left',
    },

    FeatureListDirection: {
        type: 'object',
        default: {
            Desktop: 'column',
            Tablet: 'column',
            Mobile: 'column',
        },
    },
    FeatureListDirectionWrap: {
        type: 'object',
        default: {
            Desktop: 'nowrap',
            Tablet: 'nowrap',
            Mobile: 'nowrap',
        },
    },

    FeatureListGap: {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '',
            Mobile: ''
        }
    },
    FeatureListGapUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    /** Start Icon Color */
    FeatureIconColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    FeatureIconColor: {
        type: 'string',
        default: '#fff'
    },
    FeatureIconHoverColor: {
        type: 'string',
        default: ''
    },
    /** End Icon Color */

    /** Start Icon Background Color */
    FeatureIconBgColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    FeatureIconNormalBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    FeatureIconNormalClassicColor: {
        type: 'string',
        default: '#399CFF',
    },
    FeatureIconNormalGradientColor: {
        type: 'string',
        default: null,
    },
    FeatureIconNormalCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    FeatureIconNormalCustomGradientInputValue: {
        type: 'string',
        default: '',
    },

    FeatureIconHoverBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    FeatureIconHoverClassicColor: {
        type: 'string',
        default: '',
    },
    FeatureIconHoverGradientColor: {
        type: 'string',
        default: null,
    },
    FeatureIconHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    FeatureIconHoverCustomGradientInputValue: {
        type: 'string',
        default: '',
    },
    /** End Icon Background Color */

    /** Start Icon Size */
    FeatureIconSize: {
        type: 'object',
        default: {
            Desktop: '24',
            Tablet: '',
            Mobile: ''
        }
    },
    FeatureIconSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    /** End Icon Size */


    /** Start Padding */
    FeatureIconPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureIconPaddingDesktop: {
        type: 'object',
        default: {
            top: '15',
            bottom: '15',
            left: '15',
            right: '15',
        },
    },
    FeatureIconPaddingTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconPaddingMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconPaddingLink: {
        type: 'boolean',
        default: true
    },
    /** End Padding */

    /** Start Margin */
    FeatureIconMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureIconMarginDesktop: {
        type: 'object',
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '20',
        },
    },
    FeatureIconMarginTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconMarginMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconMarginLink: {
        type: 'boolean',
        default: true
    },
    /** End Margin */


    /** Start Icon Border */
    FeatureIconBorder: {
        type: 'string',
        default: 'none',
    },
    FeatureIconBorderColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    FeatureIconBorderColor: {
        type: 'string',
        default: ''
    },
    FeatureIconBorderHoverColor: {
        type: 'string',
    },
    FeatureIconBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureIconBorderDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconBorderTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconBorderMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconBorderLink: {
        type: 'boolean',
        default: true
    },
    /** End Border */

    /** Start Icon Border Radius */
    FeatureIconBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureIconBorderRadiusDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconBorderRadiusTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconBorderRadiusMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconBorderRadiusLink: {
        type: 'boolean',
        default: true
    },
    /** End Border Radius */

    /** Start Icon Box Shadow */
    FeatureIconBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    FeatureIconBoxShadowValues: {
        type: 'array',
        default: [],
    },
    FeatureIconBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    FeatureIconBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    FeatureIconBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Icon Box Shadow */

    /** Start Title */
    FeatureTitleGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    FeatureTitleGlobalTypoSwitcher: {
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
    FeatureTitleGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    FeatureTitleGlobalTypoOption: {
        type: 'object',
        default: { label: 'Default', value: 'default' },
    },
    FeatureTitleFontFamily: {
        type: 'string',
        default: 'Default',
    },
    FeatureTitleFontSize: {
        type: 'object',
        default: {
            Desktop: '18',
            Tablet: '',
            Mobile: ''
        }
    },
    FeatureTitleFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    FeatureTitleFontWeight: {
        type: 'string',
        default: '600'
    },
    FeatureTitleFontStyle: {
        type: 'string',
        default: 'normal'
    },
    FeatureTitleTextTransform: {
        type: 'string',
        default: 'none'
    },
    FeatureTitleTextDecoration: {
        type: 'string',
        default: 'none'
    },
    FeatureTitleLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    FeatureTitleLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    FeatureTitleLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    FeatureTitleLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    FeatureTitleColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    FeatureTitleColor: {
        type: 'string',
        default: ''
    },
    FeatureTitleHoverColor: {
        type: 'string',
        default: ''
    },

    /** Start Margin */
    FeatureTitleMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureTitleMarginDesktop: {
        type: 'object',
        default: {
            top: '0',
            bottom: '5',
            left: '0',
            right: '0',
        },
    },
    FeatureTitleMarginTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureTitleMarginMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureTitleMarginLink: {
        type: 'boolean',
        default: true
    },
    /** End Margin */

    /** End Title */

    /** Start Description */
    FeatureDescGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    FeatureDescGlobalTypoSwitcher: {
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
    FeatureDescGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    FeatureDescGlobalTypoOption: {
        type: 'object',
        default: { label: 'Default', value: 'default' },
    },
    FeatureDescFontFamily: {
        type: 'string',
        default: 'Default',
    },
    FeatureDescFontSize: {
        type: 'object',
        default: {
            Desktop: '14',
            Tablet: '',
            Mobile: ''
        }
    },
    FeatureDescFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    FeatureDescFontWeight: {
        type: 'string',
        default: '400'
    },
    FeatureDescFontStyle: {
        type: 'string',
        default: 'normal'
    },
    FeatureDescTextTransform: {
        type: 'string',
        default: 'none'
    },
    FeatureDescTextDecoration: {
        type: 'string',
        default: 'none'
    },
    FeatureDescLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    FeatureDescLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    FeatureDescLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    FeatureDescLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    FeatureDescColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    FeatureDescColor: {
        type: 'string',
        default: ''
    },
    FeatureDescHoverColor: {
        type: 'string',
        default: ''
    },

    /** Start Margin */
    FeatureDescMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureDescMarginDesktop: {
        type: 'object',
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    FeatureDescMarginTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureDescMarginMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureDescMarginLink: {
        type: 'boolean',
        default: true
    },
    /** End Margin */
    /** End Description */



    /** Start Single Item Background Color */
    FeatureSingleItemBgColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    FeatureSingleItemNormalBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    FeatureSingleItemNormalClassicColor: {
        type: 'string',
        default: '',
    },
    FeatureSingleItemNormalGradientColor: {
        type: 'string',
        default: null,
    },
    FeatureSingleItemNormalCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    FeatureSingleItemNormalCustomGradientInputValue: {
        type: 'string',
        default: '',
    },

    FeatureSingleItemHoverBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    FeatureSingleItemHoverClassicColor: {
        type: 'string',
        default: '',
    },
    FeatureSingleItemHoverGradientColor: {
        type: 'string',
        default: null,
    },
    FeatureSingleItemHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    FeatureSingleItemHoverCustomGradientInputValue: {
        type: 'string',
        default: '',
    },
    /** End Single Item Background Color */

    /** Start Single Item Padding */
    FeatureSingleItemPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureSingleItemPaddingDesktop: {
        type: 'object',
        default: {
            top: '20',
            bottom: '20',
            left: '20',
            right: '20',
        },
    },
    FeatureSingleItemPaddingTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureSingleItemPaddingMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureSingleItemPaddingLink: {
        type: 'boolean',
        default: true
    },
    /** End Single Item Padding */


    /** Start Single Item Border */
    FeatureSingleItemBorder: {
        type: 'string',
        default: 'none',
    },
    FeatureSingleItemBorderColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    FeatureSingleItemBorderColor: {
        type: 'string',
        default: ''
    },
    FeatureSingleItemBorderHoverColor: {
        type: 'string',
    },
    FeatureSingleItemBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureSingleItemBorderDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureSingleItemBorderTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureSingleItemBorderMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureSingleItemBorderLink: {
        type: 'boolean',
        default: true
    },
    /** End Border */

    /** Start Single Item Border Radius */
    FeatureSingleItemBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureSingleItemBorderRadiusDesktop: {
        type: 'object',
        default: {
            top: '5',
            bottom: '5',
            left: '5',
            right: '5',
        },
    },
    FeatureSingleItemBorderRadiusTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureSingleItemBorderRadiusMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureSingleItemBorderRadiusLink: {
        type: 'boolean',
        default: true
    },
    /** End Border Radius */

    /** Start Single Item Box Shadow */
    FeatureSingleItemBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    FeatureSingleItemBoxShadowValues: {
        type: 'array',
        default: [],
    },
    FeatureSingleItemBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    FeatureSingleItemBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    FeatureSingleItemBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Single Item Box Shadow */




    /** Start Global Setting */
    FeatureGlobalZIndex: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: '',
        }
    },
    featuresListOverflow: {
        type: 'string',
        default: 'default',
    },
    /** Start Padding */
    FeatureGlobalPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureGlobalPaddingDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureGlobalPaddingTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureGlobalPaddingMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureGlobalPaddingLink: {
        type: 'boolean',
        default: true
    },
    /** End Padding */

    /** Start Margin */
    FeatureGlobalMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureGlobalMarginDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureGlobalMarginTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureGlobalMarginMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureGlobalMarginLink: {
        type: 'boolean',
        default: true
    },
    /** End Margin */



    /** Start Background Color */
    FeatureGlobalBgColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    FeatureGlobalNormalBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    FeatureGlobalNormalClassicColor: {
        type: 'string',
        default: '',
    },
    FeatureGlobalNormalGradientColor: {
        type: 'string',
        default: null,
    },
    FeatureGlobalNormalCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    FeatureGlobalNormalCustomGradientInputValue: {
        type: 'string',
        default: '',
    },


    FeatureGlobalNormalBackgroundImageUrl: {
        type: 'string',
        default: ''
    },

    FeatureGlobalNormalBackgroundImageAlt: {
        type: 'string',
        default: ''
    },

    FeatureGlobalNormalBackgroundImageID: {
        type: 'string',
        default: ''
    },

    FeatureGlobalNormalBackgroundImagePosition: {
        type: 'string',
        default: ''
    },

    FeatureGlobalNormalBackgroundImageAttachment: {
        type: 'string',
        default: ''
    },

    FeatureGlobalNormalBackgroundImageRepeat: {
        type: 'string',
        default: ''
    },

    FeatureGlobalNormalBackgroundImageSize: {
        type: 'string',
        default: ''
    },


    FeatureGlobalHoverBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    FeatureGlobalHoverClassicColor: {
        type: 'string',
        default: '',
    },
    FeatureGlobalHoverGradientColor: {
        type: 'string',
        default: null,
    },
    FeatureGlobalHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    FeatureGlobalHoverCustomGradientInputValue: {
        type: 'string',
        default: '',
    },

    FeatureGlobalHoverBackgroundImageUrl: {
        type: 'string',
        default: ''
    },

    FeatureGlobalHoverBackgroundImageAlt: {
        type: 'string',
        default: ''
    },

    FeatureGlobalHoverBackgroundImageID: {
        type: 'string',
        default: ''
    },

    FeatureGlobalHoverBackgroundImagePosition: {
        type: 'string',
        default: ''
    },

    FeatureGlobalHoverBackgroundImageAttachment: {
        type: 'string',
        default: ''
    },

    FeatureGlobalHoverBackgroundImageRepeat: {
        type: 'string',
        default: ''
    },

    FeatureGlobalHoverBackgroundImageSize: {
        type: 'string',
        default: ''
    },
    /** End Background Color */

    /** Start Border */
    FeatureGlobalBorder: {
        type: 'string',
        default: 'none',
    },
    FeatureGlobalBorderColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    FeatureGlobalBorderColor: {
        type: 'string',
        default: ''
    },
    FeatureGlobalBorderHoverColor: {
        type: 'string',
    },
    FeatureGlobalBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureGlobalBorderDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureGlobalBorderTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureGlobalBorderMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureGlobalBorderLink: {
        type: 'boolean',
        default: true
    },
    /** End Border */

    /** Start Border Radius */
    FeatureGlobalBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureGlobalBorderRadiusDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureGlobalBorderRadiusTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureGlobalBorderRadiusMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureGlobalBorderRadiusLink: {
        type: 'boolean',
        default: true
    },
    /** End Border Radius */

    /** Start Box Shadow */
    FeatureGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    FeatureGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    FeatureGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    FeatureGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    FeatureGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */

    /** FeatureIconImage */
    FeatureIconImageUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureIconImageWidth: {
        type: 'object',
        default: {
            Desktop: '24',
            Tablet: '',
            Mobile: ''
        }
    },
    FeatureIconImageHeight: {
        type: 'object',
        default: {
            Desktop: '24',
            Tablet: '',
            Mobile: ''
        }
    },

    /** Start Border */
    FeatureIconImageBorder: {
        type: 'string',
        default: 'none',
    },
    FeatureIconImageBorderColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    FeatureIconImageBorderColor: {
        type: 'string',
        default: ''
    },
    FeatureIconImageBorderHoverColor: {
        type: 'string',
    },
    FeatureIconImageBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureIconImageBorderDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconImageBorderTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconImageBorderMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconImageBorderLink: {
        type: 'boolean',
        default: true
    },
    /** End Border */

    /** Start Border Radius */
    FeatureIconImageBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    FeatureIconImageBorderRadiusDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconImageBorderRadiusTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconImageBorderRadiusMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    FeatureIconImageBorderRadiusLink: {
        type: 'boolean',
        default: true
    },
    /** End Border Radius */

    featuresListDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    featuresListTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    featuresListMobileSwitcher: {
        type: 'boolean',
        default: false,
    },

    /** End Responsive Control */

    /** Start Global Setting */
    featuresListGlobalWraperCustomCSS: {
        type: 'string',
        default: '',
    },
    featuresListGlobalWraperID: {
        type: 'string',
        default: ''
    },
    featuresListGlobalWraperClass: {
        type: 'string',
        default: ''
    },
    /** End Global Setting */

    featuresListPositionType: {
        type: 'string',
        default: 'default'
    },
    featuresListHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    featuresListVROrientationType: {
        type: 'string',
        default: 'top'
    },
    featuresListHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    featuresListHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    featuresListHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    featuresListHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    featuresListVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    featuresListVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    featuresListVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    featuresListVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
};

export default attributes;
