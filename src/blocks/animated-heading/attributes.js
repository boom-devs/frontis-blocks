const attributes = {
    blockID: {
        type: 'string',
        default: ''
    },
    blockStyle: {
        type: 'string',
        default: '',
    },

    animationType: {
        type: 'string',
        default: 'typing'
    },

    animatedHeadingAlignment: {
        type: 'object',
        default: {
            Desktop: 'left',
            Tablet: '',
            Mobile: '',
        },
    },
    highlightColor: {
        type: 'string',
        default: '',
    },
    hoverHighlightColor: {
        type: 'string',
        default: '',
    },

    animatedHeadingMainTag: {
        type: 'string',
        default: 'span'
    },
    animatedHeadingGap: {
        type: 'object',
        default: {
            Desktop: '8',
            Tablet: '',
            Mobile: ''
        }
    },
    animatedHeadingGapUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },

    //animation heading progress style
    animatedHeadingProgressBarBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    animatedHeadingProgressBarDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingProgressBarTabletBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingProgressBarMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingProgressBarBorderRadiusLink: {
        type: 'boolean',
        default: true
    },

    animatedHeadingProgressBarHeight: {
        type: 'object',
        default: {
            Desktop: '1',
            Tablet: '',
            Mobile: ''
        }
    },
    animatedHeadingProgressBarHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    animatedHeadingProgressBarWidth: {
        type: 'object',
        default: {
            Desktop: '100',
            Tablet: '100',
            Mobile: '100'
        }
    },
    animatedHeadingProgressBarWidthUnits: {
        type: 'object',
        default: {
            Desktop: '%',
            Tablet: '%',
            Mobile: '%'
        }
    },
    animatedHeadingProgressBgColorType: {
        type: 'string',
        default: 'classic',
    },
    animatedHeadingProgressBgHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    animatedHeadingProgressBgColorTypeSwitcher: {
        type: 'string',
        default: 'normal',
    },
    animatedHeadingProgressBgColor: {
        type: 'string'
    },
    animatedHeadingProgressBgHoverColor: {
        type: 'string',
    },
    animatedHeadingProgressBgGradientColor: {
        type: 'string',
        default: null
    },
    animatedHeadingProgressBgHoverGradientColor: {
        type: 'string',
        default: null
    },
    animatedHeadingProgressBgCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    animatedHeadingProgressBgCustomGradientColor: {
        type: 'string',
        default: ''
    },
    animatedHeadingProgressBgHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    animatedHeadingProgressBgHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },

    animatedHeadingProgressBgFillColorType: {
        type: 'string',
        default: 'classic',
    },
    animatedHeadingProgressBgFillHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    animatedHeadingProgressBgFillColorTypeSwitcher: {
        type: 'string',
        default: 'normal',
    },
    animatedHeadingProgressBgFillColor: {
        type: 'string'
    },
    animatedHeadingProgressBgFillHoverColor: {
        type: 'string',
    },
    animatedHeadingProgressBgFillGradientColor: {
        type: 'string',
        default: null
    },
    animatedHeadingProgressBgFillHoverGradientColor: {
        type: 'string',
        default: null
    },
    animatedHeadingProgressBgFillCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    animatedHeadingProgressBgFillCustomGradientColor: {
        type: 'string',
        default: ''
    },
    animatedHeadingProgressBgFillHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    animatedHeadingProgressBgFillHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },

    animatedHeadingPrefix: {
        type: 'string',
        default: 'We create'
    },
    animatedHeadingItems: {
        type: 'array',
        default: [
            {
                id: 'item-1',
                animatedHeadingTitle: 'WordPress Plugins',
            },
            {
                id: 'item-2',
                animatedHeadingTitle: 'WordPress Themes',
            },
            {
                id: 'item-3',
                animatedHeadingTitle: 'WooCommerce Extensions',
            },
            {
                id: 'item-4',
                animatedHeadingTitle: 'Custom Web Solutions',
            },
        ],
        items: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    default: ''
                },
                animatedHeadingTitle: {
                    type: 'string',
                    default: 'WordPress Plugins'
                },
            }
        }
    },

    animatedHeadingCursorSwitch: {
        type: 'boolean',
        default: true
    },

    animatedHeadingCursor: {
        type: 'string',
        default: '|'
    },

    animatedHeadingSuffix: {
        type: 'string',
        default: ''
    },

    /** Start Normal Text Style */
    animatedHeadingNormalTextGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    animatedHeadingNormalTextGlobalTypoSwitcher: {
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
    animatedHeadingNormalTextGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    animatedHeadingNormalTextGlobalTypoOption: {
        type: 'object',
        default: { label: 'Default', value: 'default' },
    },
    animatedHeadingNormalTextFontFamily: {
        type: 'string',
        default: 'Default',
    },
    animatedHeadingNormalTextFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    animatedHeadingNormalTextFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    animatedHeadingNormalTextFontWeight: {
        type: 'string',
        default: ''
    },
    animatedHeadingNormalTextFontStyle: {
        type: 'string',
        default: ''
    },
    animatedHeadingNormalTextTransform: {
        type: 'string',
        default: ''
    },
    animatedHeadingNormalTextDecoration: {
        type: 'string',
        default: ''
    },
    animatedHeadingNormalTextLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    animatedHeadingNormalTextLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    animatedHeadingNormalTextLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    animatedHeadingNormalTextLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    animatedHeadingNormalTextColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    animatedHeadingNormalTextColor: {
        type: 'string',
        default: ''
    },
    animatedHeadingNormalTextHoverColor: {
        type: 'string',
        default: ''
    },
    animatedHeadingNormalTextBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    animatedHeadingNormalTextBgColor: {
        type: 'string',
        default: ''
    },
    animatedHeadingNormalTextBgColorHover: {
        type: 'string',
        default: ''
    },
    /** End Normal Typing Text Style */


    /** Start animated heading Text Style */
    animatedHeadingAnimationTextGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    animatedHeadingAnimationTextGlobalTypoSwitcher: {
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
    animatedHeadingAnimationTextGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    animatedHeadingAnimationTextGlobalTypoOption: {
        type: 'object',
        default: { label: 'Default', value: 'default' },
    },
    animatedHeadingAnimationTextFontFamily: {
        type: 'string',
        default: 'Default',
    },
    animatedHeadingAnimationTextFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    animatedHeadingAnimationTextFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    animatedHeadingAnimationTextFontWeight: {
        type: 'string',
        default: ''
    },
    animatedHeadingAnimationTextFontStyle: {
        type: 'string',
        default: ''
    },
    animatedHeadingAnimationTextTransform: {
        type: 'string',
        default: ''
    },
    animatedHeadingAnimationTextDecoration: {
        type: 'string',
        default: ''
    },
    animatedHeadingAnimationTextLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    animatedHeadingAnimationTextLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    animatedHeadingAnimationTextLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    animatedHeadingAnimationTextLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    animatedHeadingAnimationTextColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    animatedHeadingAnimationTextColor: {
        type: 'string',
        default: '#399CFF'
    },
    animatedHeadingAnimationTextHoverColor: {
        type: 'string',
        default: ''
    },
    animatedHeadingAnimationTextBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    animatedHeadingAnimationTextBgColor: {
        type: 'string',
        default: ''
    },
    animatedHeadingAnimationTextBgColorHover: {
        type: 'string',
        default: ''
    },
    /** End Typing Text Style */

    /** Start animated text Border */
    animatedHeadingAnimatedTextBorder: {
        type: 'string',
        default: 'none',
    },
    animatedHeadingAnimatedTextBorderColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    animatedHeadingAnimatedTextBorderColor: {
        type: 'string',
        default: ''
    },
    animatedHeadingAnimatedTextBorderHoverColor: {
        type: 'string',
        default: ''
    },
    animatedHeadingAnimatedTextBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    animatedHeadingAnimatedTextDesktopBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingAnimatedTextTabletBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingAnimatedTextMobileBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingAnimatedTextBorderLink: {
        type: 'boolean',
        default: true
    },
    animatedHeadingAnimatedTextBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    animatedHeadingAnimatedTextDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingAnimatedTextTabletBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingAnimatedTextMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingAnimatedTextBorderRadiusLink: {
        type: 'boolean',
        default: true
    },
    /** End animated text Border */

    /** Start animated text Margin & Padding */
    animatedHeadingAnimatedTextPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    animatedHeadingAnimatedTextDesktopPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingAnimatedTextTabletPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingAnimatedTextMobilePadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingAnimatedTextPaddingLink: {
        type: 'boolean',
        default: true
    },
    animatedHeadingAnimatedTextMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    animatedHeadingAnimatedTextDesktopMargin: {
        type: 'object',
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    animatedHeadingAnimatedTextTabletMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingAnimatedTextMobileMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingAnimatedTextMarginLink: {
        type: 'boolean',
        default: true
    },
    /** End Animated Text Margin & Padding */

    /** Start reaval animation */
    animatedHeadingAnimationDuration: {
        type: 'number',
        default: 1500
    },
    animatedHeadingRevealCharDelay: {
        type: 'number',
        default: 200
    },
    animatedHeadingRevealAppearDuration: {
        type: 'number',
        default: 800
    },
    animatedHeadingRevealHideDuration: {
        type: 'number',
        default: 700
    },
    animatedHeadingRevealVisibleHold: {
        type: 'number',
        default: 2000
    },
    animatedHeadingRevealResetDelay: {
        type: 'number',
        default: 300
    },
    animatedHeadingRevealDirection: {
        type: 'string',
        default: 'up'
    },
    /** End reaval animation */


    /** Start Global Z-Index */
    animatedHeadingGlobalZIndex: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    /** End Global Z-Index */

    /** Start Class & ID Setting */
    animatedHeadingGlobalWraperID: {
        type: 'string',
        default: ''
    },
    animatedHeadingGlobalWraperClass: {
        type: 'string',
        default: ''
    },
    /** End Class & ID Setting */
    animatedHeadingCustomCSS: {
        type: 'string',
        default: '',
    },

    /** Start Global Background Color */

    animatedHeadingGlobalBgColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    animatedHeadingGlobalBgColor: {
        type: 'string',
        default: ''
    },
    animatedHeadingGlobalBgColorHover: {
        type: 'string',
        default: ''
    },
    /** End Global Background Color */


    /** Start Global Margin & Padding */
    animatedHeadingGlobalPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    animatedHeadingGlobalDesktopPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingGlobalTabletPadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingGlobalMobilePadding: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingGlobalPaddingLink: {
        type: 'boolean',
        default: true
    },
    animatedHeadingGlobalMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    animatedHeadingGlobalDesktopMargin: {
        type: 'object',
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    animatedHeadingGlobalTabletMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingGlobalMobileMargin: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingGlobalMarginLink: {
        type: 'boolean',
        default: true
    },
    /** End Global Margin & Padding */

    /** Start Global Border */
    animatedHeadingGlobalBorder: {
        type: 'string',
        default: 'none',
    },
    animatedHeadingGlobalBorderColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    animatedHeadingGlobalBorderColor: {
        type: 'string',
        default: ''
    },
    animatedHeadingGlobalBorderHoverColor: {
        type: 'string',
        default: ''
    },
    animatedHeadingGlobalBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    animatedHeadingGlobalDesktopBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingGlobalTabletBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingGlobalMobileBorder: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingGlobalBorderLink: {
        type: 'boolean',
        default: true
    },
    animatedHeadingGlobalBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    animatedHeadingGlobalDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingGlobalTabletBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingGlobalMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    animatedHeadingGlobalBorderRadiusLink: {
        type: 'boolean',
        default: true
    },
    /** End Global Border */
}
export default attributes;