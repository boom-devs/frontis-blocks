import { __ } from '@wordpress/i18n';

const attributes = {
	blockId: {
		type: 'string',
		default: "",
	},

    blockStyle: {
        type: 'string',
        default: '',
    },

    tabLayoutSwitcher: {
        type: 'string',
        default: 'horizontal',
    },

	tabItems: {
        type: 'array',
        default: [
            // You can define some default items if needed
            { id: 'item-1',
                title: 'Tab 1',
                description: 'Tab description',
                tabIcon: 'house',
                tabIconAlign: 'icon',
                tabIconImageUrl: '',
                tabIconImageAlt: '',
                tabIconImageID: '',
            },
			{ id: 'item-2',
                title: 'Tab 2',
                description: 'Tab description',
                tabIcon: 'house',
                tabIconAlign: 'icon',
                tabIconImageUrl: '',
                tabIconImageAlt: '',
                tabIconImageID: '',
            },
			{ id: 'item-3',
                title: 'Tab 3',
                description: 'Tab description',
                tabIcon: 'house',
                tabIconAlign: 'icon',
                tabIconImageUrl: '',
                tabIconImageAlt: '',
                tabIconImageID: '',
            },
        ],
        items: {
            type: 'object',
            properties: {
                id: {
                    type: 'string',
                    default: ''
                },
                title: {
                    type: 'string',
                    default: ''
                },
                description: {
                    type: 'string',
                    default: ''
                },
                tabIcon: {
                    type: 'string',
                    default: 'house',
                },
                tabIconAlign: {
                    type: 'string',
                    default: '',
                },
                tabIconImageUrl: {
                    type: 'string',
                    default: ''
                },
                tabIconImageAlt: {
                    type: 'string',
                    default: ''
                },
                tabIconImageID: {
                    type: 'number',
                    default: ''
                },
            }
        }
    },

	tabActive: {
		type: 'number',
		default: 0,
	},

	tabActiveFrontend: {
		type: 'number',
		default: 0,
	},

    showIcon: {
        type: 'boolean',
        default: false,
    },

    showTitle: {
        type: 'boolean',
        default: true,
    },

    showDescription: {
        type: 'boolean',
        default: false,
    },

    fillTitlesWrapper: {
        type: 'boolean',
        default: true,
    },

    tabTitleTag: {
        type : 'string',
        default: 'span'
    },
    tabDescriptionTag: {
        type : 'string',
        default: 'p'
    },

    /** Tab List Wrapper */
    tabListMinWidth : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: '',
        }
    },
    tabListMinWidthUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    tabListItemGap : {
        type: 'object',
        default: {
            Desktop: '10',
            Tablet: '10',
            Mobile: '10',
        }
    },
    tabListItemGapUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    tabWrapperGap : {
        type: 'object',
        default: {
            Desktop: '10',
            Tablet: '10',
            Mobile: '10',
        }
    },
    tabWrapperGapUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    /** Tab Wrapper */
    tabWrapperBgColorTypeSwitcher: { 
        type: 'string',
        default: 'normal'
    },
    tabWrapperBgColorType: {  
        type: 'string',
        default: 'classic',
    },
    tabWrapperBgHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    tabWrapperBgColor: {
        type: 'string',
    },
    tabWrapperBgHoverColor: {
        type: 'string',
    },
    tabWrapperBgGradientColor: {
        type: 'string',
        default: null
    },
    tabWrapperBgHoverGradientColor: {
        type: 'string',
        default: null
    },
    tabWrapperBgCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    tabWrapperBgCustomGradientColor: {
        type: 'string',
        default: ''
    },
    tabWrapperBgHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    tabWrapperBgHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },
    tabWrapperPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabWrapperPaddingDesktop: { 
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabWrapperPaddingTablet: { 
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabWrapperPaddingMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabWrapperPaddingLink : { 
        type : "boolean",
        default: true
    },

    tabWrapperMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabWrapperMarginDesktop: { 
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabWrapperMarginTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabWrapperMarginMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabWrapperMarginLink : { 
        type : "boolean",
        default: true
    },

    tabWrapperBorder: {
        type: 'string',
        default: "none",
    },
    tabWrapperBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    tabWrapperBorderColor: {
        type: 'string',
    },
    tabWrapperBorderHoverColor: {
        type: 'string',
    },
    tabWrapperBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabWrapperBorderDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabWrapperBorderTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabWrapperBorderMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabWrapperBorderLink : { 
        type : "boolean",
        default: true
    },
    tabWrapperBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabWrapperBorderRadiusDesktop: {    
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabWrapperBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '', 
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabWrapperBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabWrapperBorderRadiusLink : {  
        type : "boolean",
        default: true
    },

    /** Tab List */
    tabListBgColorTypeSwitcher: { 
        type: 'string',
        default: 'normal'
    },
    tabListBgColorType: { 
        type: 'string',
        default: 'classic',
    },
    tabListBgHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    tabListBgColor: {
        type: 'string',
    },
    tabListBgHoverColor: {
        type: 'string',
    },
    tabListBgGradientColor: {
        type: 'string',
        default: null
    },
    tabListBgHoverGradientColor: {
        type: 'string',
        default: null
    },
    tabListBgCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    tabListBgCustomGradientColor: {
        type: 'string',
        default: ''
    },
    tabListBgHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    tabListBgHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },
    tabListPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabListPaddingDesktop: { 
        type: "object", 
        default: {
            top: '5',
            bottom: '5',
            left: '5',
            right: '5',
        },
    },
    tabListPaddingTablet: {
        type: "object", 
        default: {
            top: '5',
            bottom: '5',
            left: '5',
            right: '5',
        },
    },
    tabListPaddingMobile: {
        type: "object", 
        default: {
            top: '5',
            bottom: '5',
            left: '5',
            right: '5',
        },
    },
    tabListPaddingLink : { 
        type : "boolean",
        default: true
    },

    tabListMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabListMarginDesktop: { 
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabListMarginTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabListMarginMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabListMarginLink : { 
        type : "boolean",
        default: true
    },

    tabListBorder: {
        type: 'string',
        default: "none",
    },
    tabListBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    tabListBorderColor: {
        type: 'string',
    },
    tabListBorderHoverColor: {
        type: 'string',
    },
    tabListBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabListBorderDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabListBorderTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabListBorderMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabListBorderLink : { 
        type : "boolean",
        default: true
    },
    tabListBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabListBorderRadiusDesktop: {    
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabListBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '', 
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabListBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabListBorderRadiusLink : {  
        type : "boolean",
        default: true
    },

    /** Start Title Typography Style */
    tabTitleGlobalTypographyData: { 
        type: 'object',
        default: {}
    },
    tabTitleGlobalTypoSwitcher: {
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
    tabTitleGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    tabTitleGlobalTypoOption: {
        type: 'object',
        default: {label: 'Default', value: 'default'},
    },
    tabTitleFontFamily: {
        type: 'string',
        default: 'Default',
    },
    tabTitleFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    tabTitleFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    tabTitleFontWeight : {
        type: 'string',
        default: ''
    },
    tabTitleFontStyle : {
        type: 'string',
        default: ''
    },
    tabTitleTextTransform : {
        type: 'string',
        default: ''
    },
    tabTitleTextDecoration : {
        type: 'string',
        default: ''
    },
    tabTitleLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    tabTitleLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    tabTitleLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    tabTitleLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    tabTitleColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    tabTitleColor: {
        type: 'string',
    },
    tabTitleHoverColor: {
        type: 'string',
    },

    tabTitlePaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabTitlePaddingDesktop: { 
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabTitlePaddingTablet: { 
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabTitlePaddingMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabTitlePaddingLink : { 
        type : "boolean",
        default: true
    },

    tabTitleMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabTitleMarginDesktop: { 
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabTitleMarginTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabTitleMarginMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabTitleMarginLink : { 
        type : "boolean",
        default: true
    },

    tabTitleBorder: {
        type: 'string',
        default: "none",
    },
    tabTitleBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    tabTitleBorderColor: { 
        type: 'string',
    },
    tabTitleBorderHoverColor: {
        type: 'string',
    },
    tabTitleBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabTitleBorderDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabTitleBorderTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabTitleBorderMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabTitleBorderLink : { 
        type : "boolean",
        default: true
    },
    tabTitleBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabTitleBorderRadiusDesktop: {    
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabTitleBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '', 
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabTitleBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabTitleBorderRadiusLink : {  
        type : "boolean",
        default: true
    },
    /** End Title Style */

    /** Start Description Typography Style */
    tabDescriptionGlobalTypographyData: { 
        type: 'object',
        default: {}
    },
    tabDescriptionGlobalTypoSwitcher: {
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
    tabDescriptionGlobalTypoType: {
        type: 'string',
        default: 'default',
    },
    tabDescriptionGlobalTypoOption: {
        type: 'object',
        default: {label: 'Default', value: 'default'},
    },
    tabDescriptionFontFamily: {
        type: 'string',
        default: 'Default',
    },
    tabDescriptionFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    tabDescriptionFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    tabDescriptionFontWeight : {
        type: 'string',
        default: ''
    },
    tabDescriptionFontStyle : {
        type: 'string',
        default: ''
    },
    tabDescriptionTextTransform : {
        type: 'string',
        default: ''
    },
    tabDescriptionTextDecoration : {
        type: 'string',
        default: ''
    },
    tabDescriptionLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    tabDescriptionLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    tabDescriptionLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    tabDescriptionLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    tabDescriptionColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    tabDescriptionColor: {
        type: 'string',
    },
    tabDescriptionHoverColor: {
        type: 'string',
    },

    tabDescriptionPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabDescriptionPaddingDesktop: { 
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabDescriptionPaddingTablet: { 
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabDescriptionPaddingMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabDescriptionPaddingLink : { 
        type : "boolean",
        default: true
    },

    tabDescriptionMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabDescriptionMarginDesktop: { 
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    tabDescriptionMarginTablet: { 
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    tabDescriptionMarginMobile: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    tabDescriptionMarginLink : { 
        type : "boolean",
        default: true
    },

    tabDescriptionBorder: {
        type: 'string',
        default: "none",
    },
    tabDescriptionBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    tabDescriptionBorderColor: { 
        type: 'string',
    },
    tabDescriptionBorderHoverColor: {
        type: 'string',
    },
    tabDescriptionBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabDescriptionBorderDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabDescriptionBorderTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabDescriptionBorderMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabDescriptionBorderLink : { 
        type : "boolean",
        default: true
    },
    tabDescriptionBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabDescriptionBorderRadiusDesktop: { 
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabDescriptionBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '', 
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabDescriptionBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabDescriptionBorderRadiusLink : {  
        type : "boolean",
        default: true
    },
    /** End Description Style */

    /** Tab Icon Styles */
    tabIconPosition: {
        type: "string",
        default: "right",
    },
    tabIconSize: {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '20',
            Mobile: '20'
        }
    },
    tabIconSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    tabIconColorSwitcher: {
        type: "string",
        default: "normal"
    },
    tabIconColor: {
        type: "string",
        default: "#000"
    },
    tabIconHoverColor: {
        type: 'string',
        default: ""
    },

    /** Start Background */
    tabIconBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    tabIconNormalBackgroundType: {     
        type: "string",
        default: "classic",
    },
    tabIconBgColor: {
        type: "string",
        default: "",
    },
    tabIconNormalGradientColor: {
        type: "string",
        default: null,
    },
    tabIconNormalCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    tabIconNormalCustomGradientInputValue: {
        type: "string",
        default: "",
    },

    tabIconHoverBackgroundType: { 
        type: "string",
        default: "classic",
    },
    tabIconBgHoverColor: {
        type: "string",
        default: "",
    },
    tabIconHoverGradientColor: {
        type: "string",
        default: null,
    },
    tabIconHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false,
    },
    tabIconHoverCustomGradientInputValue: {
        type: "string",
        default: "",
    },
    /** End Background */

    tabIconBorder: {
        type: 'string',
        default: "none",
    },
    tabIconBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    tabIconBorderColor: {
        type: 'string',
    },
    tabIconBorderHoverColor: {
        type: 'string',
    },
    tabIconBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabIconBorderDesktop: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabIconBorderTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabIconBorderMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabIconBorderLink : { 
        type : "boolean",
        default: true
    },
    tabIconBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabIconBorderRadiusDesktop: {    
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabIconBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '', 
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabIconBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabIconBorderRadiusLink : { 
        type : "boolean",
        default: true
    },

    /** Start Icon Padding */
    tabIconPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabIconPaddingDesktop: { 
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabIconPaddingTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabIconPaddingMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabIconPaddingLink : { 
        type : "boolean",
        default: true
    },
    /** End Icon Padding */

    tabIconRotateSwitcher: {
        type: 'string',
        default: 'normal',
    },
    tabIconRotate: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "", 
            Mobile: "",
        }
    },
    tabIconRotateHover: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },

    tabIconImageWidth : {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '20',
            Mobile: '20',
        }
    },
    tabIconImageWidthUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    tabIconImageHeight : {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '20',
            Mobile: '20',
        }
    },
    tabIconImageHeightUnits : {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

    tabIconImageRotateSwitcher: {
        type: 'string',
        default: 'normal',
    },
    tabIconImageRotate: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "", 
            Mobile: "",
        }
    },
    tabIconImageRotateHover: {
        type: 'object',
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        }
    },
    /** End Tab Icon Styles */

    /** Tab Content Styles */
    tabContentBgColorTypeSwitcher: { 
        type: 'string',
        default: 'normal'
    },
    tabContentBgColorType: {  
        type: 'string',
        default: 'classic',
    },
    tabContentBgHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    tabContentBgColor: {
        type: 'string',
    },
    tabContentBgHoverColor: {
        type: 'string',
    },
    tabContentBgGradientColor: {
        type: 'string',
        default: null
    },
    tabContentBgHoverGradientColor: {
        type: 'string',
        default: null
    },
    tabContentBgCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    tabContentBgCustomGradientColor: {
        type: 'string',
        default: ''
    },
    tabContentBgHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    tabContentBgHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },
    tabContentPaddingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabContentPaddingDesktop: { 
        type: "object", 
        default: {
            top: '10',
            bottom: '10',
            left: '10',
            right: '10',
        },
    },
    tabContentPaddingTablet: { 
        type: "object", 
        default: {
            top: '10',
            bottom: '10',
            left: '10',
            right: '10',
        },
    },
    tabContentPaddingMobile: {
        type: "object", 
        default: {
            top: '10',
            bottom: '10',
            left: '10',
            right: '10',
        },
    },
    tabContentPaddingLink : { 
        type : "boolean",
        default: true
    },

    tabContentMarginUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabContentMarginDesktop: { 
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabContentMarginTablet: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabContentMarginMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabContentMarginLink : { 
        type : "boolean",
        default: true
    },

    tabContentBorder: {
        type: 'string',
        default: "solid",
    },
    tabContentBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    tabContentBorderColor: {
        type: 'string',
        default: '#EEEDF0',
    },
    tabContentBorderHoverColor: {
        type: 'string',
        default: '',
    },
    tabContentBorderUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabContentBorderDesktop: {
        type: "object", 
        default: {
            top: '1',
            bottom: '1',
            left: '1',
            right: '1',
        },
    },
    tabContentBorderTablet: {
        type: "object", 
        default: {
            top: '1',
            bottom: '1',
            left: '1',
            right: '1',
        },
    },
    tabContentBorderMobile: {
        type: "object", 
        default: {
            top: '1',
            bottom: '1',
            left: '1',
            right: '1',
        },
    },
    tabContentBorderLink : { 
        type : "boolean",
        default: true
    },
    tabContentBorderRadiusUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    tabContentBorderRadiusDesktop: {    
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabContentBorderRadiusTablet: {
        type: "object", 
        default: {
            top: '', 
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabContentBorderRadiusMobile: {
        type: "object", 
        default: {
            top: '',
            bottom: '',
            left: '',
            right: '',
        },
    },
    tabContentBorderRadiusLink : {  
        type : "boolean",
        default: true
    },

    /** Start Global Setting */
	tabGlobalZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },

    tabGlobalWraperID : {
        type: 'string',
        default: ''
    },

    tabGlobalWraperClass : {
        type: 'string',
        default: ''
    },

	/** Start Padding */
	tabGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	tabGlobalPaddingDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	tabGlobalPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	tabGlobalPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	tabGlobalPaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	tabGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	tabGlobalMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	tabGlobalMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	tabGlobalMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	tabGlobalMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */

    /** Start Global Background */
    tabGlobalBgColorTypeSwitcher: { 
        type: 'string',
        default: 'normal'
    },
    tabGlobalBgColorType: {  
        type: 'string',
        default: 'classic',
    },
    tabGlobalBgHoverColorType: {
        type: 'string',
        default: 'classic',
    },
    tabGlobalBgColor: {
        type: 'string',
    },
    tabGlobalBgHoverColor: {
        type: 'string',
    },
    tabGlobalBgGradientColor: {
        type: 'string',
        default: null
    },
    tabGlobalBgHoverGradientColor: {
        type: 'string',
        default: null
    },
    tabGlobalBgCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    tabGlobalBgCustomGradientColor: {
        type: 'string',
        default: ''
    },
    tabGlobalBgHoverCustomGradientColorSwitcher: {
        type: 'boolean',
        default: false
    },
    tabGlobalBgHoverCustomGradientColor: {
        type: 'string',
        default: ''
    },
	/** End Global Background */

	/** Start Global Border */
	tabGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	tabGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	tabGlobalBorderColor: {  
		type: 'string',
		default: ''
	},
	tabGlobalBorderHoverColor: {
		type: 'string',
	},
	tabGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	tabGlobalBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	tabGlobalBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	tabGlobalBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	tabGlobalBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	tabGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	tabGlobalBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	tabGlobalBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	tabGlobalBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	tabGlobalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    tabGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	tabGlobalBoxShadowValues: { 
        type: 'array',
        default: [],
    },
    tabGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    tabGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    tabGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },

    tabGlobalCustomCSS : { 
        type: 'string',
        default: '',
    },
    /** End Global Box Shadow */
    


};

export default attributes;
