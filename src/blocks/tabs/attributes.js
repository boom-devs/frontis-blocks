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
                tabIcon: 'bookmark',
                tabIconAlign: 'none',
                tabIconImageUrl: '',
                tabIconImageAlt: '',
                tabIconImageID: '',
            },
			{ id: 'item-2',
                title: 'Tab 2',
                tabIcon: 'bookmark',
                tabIconAlign: 'none',
                tabIconImageUrl: '',
                tabIconImageAlt: '',
                tabIconImageID: '',
            },
			{ id: 'item-3',
                title: 'Tab 3',
                tabIcon: 'bookmark',
                tabIconAlign: 'none',
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
                tabIcon: {
                    type: 'string',
                    default: 'bookmark',
                },
                tabIconAlign: {
                    type: 'string',
                    default: 'none',
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

    /** Tab Icon Styles */
    tabIconPosition: {
        type: "string",
        default: "right",
    },
    tabIconSize: {
        type: 'object',
        default: {
            Desktop: '16',
            Tablet: '16',
            Mobile: '16'
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

    tabIconGapSize: {
        type: 'object',
        default: {
            Desktop: '10',
            Tablet: '10',
            Mobile: '10'
        }
    },
    tabIconGapUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
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
};

export default attributes;
