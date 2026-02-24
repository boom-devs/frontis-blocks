export default {
    blockID: {
        type: "string",
    },
    blockStyle: {
        type: "string",
    },

    megaMenuAlignment: {
        type: 'object',
        default: {
            Desktop: 'start',
            Tablet: '',
            Mobile: '',
        },
    },
    megaMenuIconTypeSwitcher: {
        type: 'string',
        default: 'opener',
    },
    //Mega menu width
    megaMenuWidthSwitcher: {
        type: 'string',
        default: 'full',
    },
    megaMenuContentWidthValue: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuContentWidthValueUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    megaMenuContentTopPositionValue: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuContentTopPositionUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    megaMenuContentLeftPositionValue: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuContentLeftPositionUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    //Start Mega Menu Style
    megaMenuGlobalTypographyData: {
        type: 'object',
        default: {}
    },
    megaMenuGlobalTypoSwitcher: {
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
    megaMenuGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    megaMenuGlobalTypoOption: {
        type: 'object',
        default: { label: 'Default', value: 'default' },
    },
    megaMenuFontFamily: {
        type: 'string',
        default: 'Default',
    },
    megaMenuFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    megaMenuFontWeight: {
        type: 'string',
        default: ''
    },
    megaMenuFontStyle: {
        type: 'string',
        default: ''
    },
    megaMenuTextTransform: {
        type: 'string',
        default: ''
    },
    megaMenuTextDecoration: {
        type: 'string',
        default: 'none'
    },
    megaMenuLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    megaMenuLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    megaMenuTextColorTypeSwitcher: {
        type: 'string',
        default: 'normal',
    },
    megaMenuTextColorType: {
        type: 'string',
        default: 'classic',
    },
    megaMenuTextHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    megaMenuTextShadowValues: {
        type: 'array',
        default: [],
    },
    megaMenuTextShadowCssValue: {
        type: 'string',
        default: '',
    },
    megaMenuTextStroke: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuTextStrokeColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    megaMenuTextStrokeColor: {
        type: 'string',
        default: '#399CFF',
    },
    megaMenuTextStrokeHoverColor: {
        type: 'string',
        default: '',
    },

    megaMenuHighlightColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    megaMenuHighlightColor: {
        type: 'string',
    },
    megaMenuHighlightHoverColor: {
        type: 'string',
    },

    // Icon color
    megaMenuIconColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    megaMenuIconColor: {
        type: 'string'
    },
    megaMenuIconHoverColor: {
        type: 'string',
    },
    megaMenuIconSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuIconSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    megaMenuIconGap: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuIconGapUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    megaMenuIconRotateSwitcher: {
        type: 'string',
        default: 'normal',
    },
    megaMenuIconRotation: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuIconRotateHover: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },
    //Open Icon
    megaMenuOpenIconColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    megaMenuOpenIconColor: {
        type: 'string'
    },
    megaMenuOpenIconHoverColor: {
        type: 'string',
    },
    megaMenuOpenIconSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuOpenIconSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    megaMenuOpenIconGap: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuOpenIconGapUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    megaMenuOpenIconRotateSwitcher: {
        type: 'string',
        default: 'normal',
    },
    megaMenuOpenIconRotation: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuOpenIconRotateHover: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },
    //Close Icon
    megaMenuCloseIconColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    megaMenuCloseIconColor: {
        type: 'string'
    },
    megaMenuCloseIconHoverColor: {
        type: 'string',
    },
    megaMenuCloseIconSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuCloseIconSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    megaMenuCloseIconGap: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuCloseIconGapUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    megaMenuCloseIconRotateSwitcher: {
        type: 'string',
        default: 'normal',
    },
    megaMenuCloseIconRotation: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuCloseIconRotateHover: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },
    //Menu Item Color
    megaMenuColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    megaMenuColor: {
        type: 'string',
        default: '#000000'
    },
    megaMenuHoverColor: {
        type: 'string',
    },
    megaMenuTextGradientColor: {
        type: 'string',
        default: null
    },
    megaMenuTextHoverGradientColor: {
        type: 'string',
        default: null
    },
    megaMenuTextCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    megaMenuTextCustomGradientColor: {
        type: 'string',
        default: ''
    },
    megaMenuTextHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    megaMenuTextHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },

    //Text Background Color
    megaMenuTextBackgroundColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    megaMenuTextBackgroundColor: {
        type: 'string'
    },
    megaMenuTextBackgroundHoverColor: {
        type: 'string',
    },
    megaMenuTextBackgroundGradientColor: {
        type: 'string',
        default: null
    },
    megaMenuTextBackgroundHoverGradientColor: {
        type: 'string',
        default: null
    },
    megaMenuTextBackgroundCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    megaMenuTextBackgroundCustomGradientColor: {
        type: 'string',
        default: ''
    },
    megaMenuTextBackgroundHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    megaMenuTextBackgroundHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },
    megaMenuBgColorTypeSwitcher: {
        type: 'string',
        default: 'normal'
    },
    megaMenuTextBgColorType: {
        type: 'string',
        default: 'classic',
    },
    megaMenuTextBgHoverColorType: {
        type: 'string',
        default: 'classic',
    },

    megaMenuBgColor: {
        type: 'string',
    },
    megaMenuBgHoverColor: {
        type: 'string',
    },
    megaMenuBgGradientColor: {
        type: 'string',
        default: null
    },
    megaMenuBgHoverGradientColor: {
        type: 'string',
        default: null
    },
    megaMenuBgCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    megaMenuBgCustomGradientColor: {
        type: 'string',
        default: ''
    },
    megaMenuBgHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    megaMenuBgHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },

    // End Mega Menu Style
    megaMenuGlobalCustomCSS: {
        type: "string",
        default: "",
    },
    megaMenuDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    megaMenuTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    megaMenuMobileSwitcher: {
        type: "boolean",
        default: false,
    },
    megaMenuGlobalWraperID: {
        type: 'string',
        default: ''
    },

    megaMenuGlobalWraperClass: {
        type: 'string',
        default: ''
    },
    menuLayout: {
        type: "string",
        default: "horizontal",
    },
    menuAlignment: {
        type: "string",
        default: "left",
    },
    menuSpacing: {
        type: "number",
        default: 15,
    },
    menuItemColor: {
        type: "string",
        default: "",
    },
    menuItemHoverColor: {
        type: "string",
        default: "",
    },
    menuItemBackgroundColor: {
        type: "string",
        default: "",
    },
    menuItemHoverBackgroundColor: {
        type: "string",
        default: "",
    },
    menuItemPadding: {
        type: "object",
        default: {
            top: "10px",
            right: "15px",
            bottom: "10px",
            left: "15px",
        },
    },
    submenuWidth: {
        type: "number",
        default: 220,
    },
    submenuBackgroundColor: {
        type: "string",
        default: "#ffffff",
    },
    megaMenuWidth: {
        type: "string",
        default: "container",
    },
    megaMenuBackgroundColor: {
        type: "string",
        default: "#ffffff",
    },
    megaMenuInteraction: {
        type: "string",
        default: "hover"
    },
    menuItems: {
        type: "array",
        default: [
            {
                id: 'item-1',
                megaMenuIcon: 'angle-down',
                label: 'Item 1',
            },
        ],
        items: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    default: ''
                },
                megaMenuIcon: {
                    type: 'string',
                    default: 'angle-down'
                },
                label: {
                    type: 'string',
                    default: 'Item 1'
                },
                pageId: {
                    type: 'string',
                    default: '',
                },
            }
        }
    },
    megaMenuIconFrontend: {
        type: 'string',
    },
    triggerType: {
        type: "string",
        default: "hover"
    },

    // Start Mega Menu Border
    megaMenuBorder: {
        type: 'string',
        default: 'none',
    },
    megaMenuBorderColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    megaMenuBorderColor: {
        type: 'string',
    },
    megaMenuBorderHoverColor: {
        type: 'string',
    },

    megaMenuBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    megaMenuDesktopBorder: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuTabletBorder: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuMobileBorder: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuBorderLink: {
        type: 'boolean',
        default: true,
    },

    // Border Radius
    megaMenuBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    megaMenuDesktopBorderRadius: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuTabletBorderRadius: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuMobileBorderRadius: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuBorderRadiusLink: {
        type: 'boolean',
        default: true,
    },

    // Start Mega Menu Box Shadow
    megaMenuBoxShadowValues: {
        type: 'array',
        default: [],
    },
    megaMenuBoxShadowCssValue: {
        type: 'string',
        default: '',
    },

    // Start Mega Menu Padding
    megaMenuPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    megaMenuDesktopPadding: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuTabletPadding: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuMobilePadding: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuPaddingLink: {
        type: 'boolean',
        default: true,
    },

    // Start Mega Menu Margin
    megaMenuMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        },
    },
    megaMenuDesktopMargin: {
        type: 'object',
        default: {
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
        },
    },
    megaMenuTabletMargin: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuMobileMargin: {
        type: 'object',
        default: {
            top: '',
            right: '',
            bottom: '',
            left: '',
        },
    },
    megaMenuMarginLink: {
        type: 'boolean',
        default: true,
    },
    megaMenuGlobalZIndex: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedMegaMenuOverflow: {
        type: 'string',
        default: 'default',
    },
    megaMenuGlobalWraperID: {
        type: 'string',
        default: ''
    },
    megaMenuGlobalWraperClass: {
        type: 'string',
        default: ''
    },
    advancedMegaMenuPositionType: {
        type: 'string',
        default: 'default'
    },
    advancedMegaMenuHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    advancedMegaMenuVROrientationType: {
        type: 'string',
        default: 'top'
    },
    advancedMegaMenuHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedMegaMenuHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    advancedMegaMenuHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedMegaMenuHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    advancedMegaMenuVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedMegaMenuVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    advancedMegaMenuVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    advancedMegaMenuVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    // Global padding adn margin
    megaMenuGlobalPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    megaMenuGlobalPaddingDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    megaMenuGlobalPaddingTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    megaMenuGlobalPaddingMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    megaMenuGlobalPaddingLink: {
        type: 'boolean',
        default: true
    },
    /** End Padding */

    /** Start Margin */
    megaMenuGlobalMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    megaMenuGlobalMarginDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    megaMenuGlobalMarginTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    megaMenuGlobalMarginMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    megaMenuGlobalMarginLink: {
        type: 'boolean',
        default: true
    },
    /** Start Background Normal for fb megaMenu */
    megaMenuGlobalBgColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    megaMenuGlobalBgNormalBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    megaMenuGlobalBgNormalClassicColor: {
        type: 'string',
        default: '',
    },
    megaMenuGlobalBgNormalGradientColor: {
        type: 'string',
        default: null,
    },
    megaMenuGlobalBgNormalCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    megaMenuGlobalBgNormalCustomGradientInputValue: {
        type: 'string',
        default: '',
    },
    /** Bg Normal Image for fb container */
    megaMenuGlobalBgNormalBackgroundImageUrl: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuGlobalBgNormalBackgroundImagePosition: {
        type: 'object',
        default: {
            Desktop: { x: '0.5', y: '0.5' },
            Tablet: { x: '', y: '' },
            Mobile: { x: '', y: '' }
        }
    },
    megaMenuGlobalBgNormalBackgroundImageAttachment: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuGlobalBgNormalBackgroundImageRepeat: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuGlobalBgNormalBackgroundImageSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },


    /**Bg Hover for fb megaMenu */
    megaMenuGlobalBgHoverBackgroundType: {
        type: 'string',
        default: 'classic',
    },
    megaMenuGlobalBgHoverClassicColor: {
        type: 'string',
        default: '',
    },
    megaMenuGlobalBgHoverGradientColor: {
        type: 'string',
        default: null,
    },
    megaMenuGlobalBgHoverCustomGradientSwitcher: {
        type: 'boolean',
        default: false,
    },
    megaMenuGlobalBgHoverCustomGradientInputValue: {
        type: 'string',
        default: '',
    },
    /** Hover Image for fb megaMenu */
    megaMenuGlobalBgHoverBackgroundImageUrl: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuGlobalBgHoverBackgroundImagePosition: {
        type: 'object',
        default: {
            Desktop: { x: '0.5', y: '0.5' },
            Tablet: { x: '', y: '' },
            Mobile: { x: '', y: '' }
        }
    },
    megaMenuGlobalBgHoverBackgroundImageAttachment: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuGlobalBgHoverBackgroundImageRepeat: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    megaMenuGlobalBgHoverBackgroundImageSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    /** End Background for fb megaMenu */

    /** Start Border */
    megaMenuGlobalBorder: {
        type: 'string',
        default: 'none',
    },
    megaMenuGlobalBorderColorSwitcher: {
        type: 'string',
        default: 'normal'
    },
    megaMenuGlobalBorderColor: {
        type: 'string',
        default: ''
    },
    megaMenuGlobalBorderHoverColor: {
        type: 'string',
    },
    megaMenuGlobalBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    megaMenuGlobalBorderDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    megaMenuGlobalBorderTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    megaMenuGlobalBorderMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    megaMenuGlobalBorderLink: {
        type: 'boolean',
        default: true
    },
    /** End Border */

    /** Start Border Radius */
    megaMenuGlobalBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    megaMenuGlobalBorderRadiusDesktop: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    megaMenuGlobalBorderRadiusTablet: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    megaMenuGlobalBorderRadiusMobile: {
        type: 'object',
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    megaMenuGlobalBorderRadiusLink: {
        type: 'boolean',
        default: true
    },
    /** End Border Radius */

    /** Start Box Shadow */
    megaMenuGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
    megaMenuGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    megaMenuGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    megaMenuGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    megaMenuGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */
};