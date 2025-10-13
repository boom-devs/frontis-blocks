const attributes = {
    blockId: {
        type: 'string',
        default: ''
    },
    blockStyle: {
        type: 'string',
        default: '',
    },
    animationOption: {
        type: 'string',
        default: 'text-animation'
    },
    animationType: {
        type: 'string',
        default: 'typing'
    },
    startDuration: {
        type: 'number',
        default: 0.05
    },
    endDuration: {
        type: 'number',
        default: 0.05
    },
    delayDuration: {
        type: 'number',
        default: 1
    },
    animationTransition: {
        type: 'string',
        default: 'power1.out',
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
        ]
    },
    animatedHeadingHighlightText: {
        type: 'string',
        default: 'Highlight Text'
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
        default: {label: 'Default', value: 'default'},
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
    animatedHeadingNormalTextFontWeight : {
        type: 'string',
        default: ''
    },
    animatedHeadingNormalTextFontStyle : {
        type: 'string',
        default: ''
    },
    animatedHeadingNormalTextTransform : {
        type: 'string',
        default: ''
    },
    animatedHeadingNormalTextDecoration : {
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

    animatedHeadingNormalTextColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    animatedHeadingNormalTextColor : {
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
        default: {label: 'Default', value: 'default'},
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
   animatedHeadingAnimationTextFontWeight : {
        type: 'string',
        default: ''
    },
   animatedHeadingAnimationTextFontStyle : {
        type: 'string',
        default: ''
    },
   animatedHeadingAnimationTextTransform : {
        type: 'string',
        default: ''
    },
   animatedHeadingAnimationTextDecoration : {
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
    animatedHeadingAnimationTextColorSwitcher : {
        type: 'string',
        default: 'normal'
    },
    animatedHeadingAnimationTextColor : {
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


    /** Start Global Z-Index */
    animatedHeadingGlobalZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    /** End Global Z-Index */

    /** Start Class & ID Setting */
    animatedHeadingGlobalWraperID : {
        type: 'string',
        default: ''
    },
    animatedHeadingGlobalWraperClass : {
        type: 'string',
        default: ''
    },
    /** End Class & ID Setting */
    animatedHeadingCustomCSS : {
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
    animatedHeadingGlobalPaddingLink : {
        type : 'boolean',
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
    animatedHeadingGlobalMarginLink : {
        type : 'boolean',
        default: true
    },
    /** End Global Margin & Padding */

    /** Start Global Border */
    animatedHeadingGlobalBorder: {
        type: 'string',
        default: 'none',
    },
    animatedHeadingGlobalBorderColorSwitcher : {
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
    animatedHeadingGlobalBorderLink : {
        type : 'boolean',
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
    animatedHeadingGlobalBorderRadiusLink : {
        type : 'boolean',
        default: true
    },
    /** End Global Border */
}
export default attributes;