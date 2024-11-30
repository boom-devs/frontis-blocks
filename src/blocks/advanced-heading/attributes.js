import { separator } from "@wordpress/icons";

const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    deviceType: {
        type: "string",
        default: "Desktop"
    },
    headingAlignment: {
        type: "string",
        default: "left",
    },
    headingText: {
        type : "string",
        default: "Advanced Heading"
    },
    headingTag: {
        type : "string",
        default: "h2" 
    },
    /** Start Heading Style */
    headingFontFamily: {
        type: "string",
        default: "inherit",
    },
    headingFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	headingFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    headingFontWeight : {
        type: "string",
        default: "600"
    },
    headingFontStyle : {
        type: "string",
        default: ""
    },
    headingTextTransform : {
        type: "string",
        default: ""
    },
    headingTextDecoration : {
        type: "string",
        default: ""
    },
    headingLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	headingLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    headingLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	headingLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    headingTextShadowValues: {
        type: 'array',
        default: [],
    },
    headingTextShadowCssValue: {
        type: 'string',
        default: '',
    },
    headingTextStroke: {
        type: 'number',
    },
    headingTextStrokeColorSwitcher: {
        type: 'string',
        default: 'normal',
    },
    headingTextStrokeColor: {
        type: 'string',
        default: '#399CFF',
    },
    headingTextStrokeHoverColor: {
        type: 'string',
        default: '#399CFF',
    },

    headingColorSwitcher : {
        type: "string",
        default: "normal"
    },
    headingColor : {
        type: "string"
    },
    headingHoverColor: {
        type: 'string',
    },
    headingBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    headingBgColor: {
        type: 'string',
    },
    headingBgColorHover: {
        type: 'string',
    },
    headingBorder: {
        type: 'string',
        default: "none",
    },
    headingBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    headingBorderColor: {
        type: 'string',
    },
    headingBorderHoverColor: {
        type: 'string',
    },
    headingBorderUnits : {
        type: "string",
        default: "px"
    },
    headingBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    headingDesktopBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingTabletBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingMobileBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingBorderLink : {
        type : "boolean",
        default: true
    },
    headingBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    headingDesktopBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingTabBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingMobileBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingBorderRadiusLink : {
        type : "boolean",
        default: true
    },

    headingBoxShadowValues: {
        type: 'array',
        default: [],
    },
    headingBoxShadowCssValue: {
        type: 'string',
        default: '',
    },

    headingPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    headingDesktopPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingTabPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingMobilePadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    headingPaddingLink : {
        type : "boolean",
        default: true
    },
    headingMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    headingDesktopMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    headingTabMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    headingMobileMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    headingMarginLink : {
        type : "boolean",
        default: true
    },
    /** End Heading Style */

    /** Start Sub Heading */
    subHeadingText: {
        type: "string",
        default: "Advanced Sub Heading"
    },
    subHeadingTag: {
        type : "string",
        default: "p" 
    },
    subHeadingSwitcher: {
        type: "boolean",
        default: false,
    },
    subHeadingPosition: {
        type: "string",
        default: "bottom",
    },

    /** Start Sub Heading Style */  
    subHeadingFontFamily: {
        type: "string",
        default: "inherit",
    },
    subHeadingFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    subHeadingFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    subHeadingFontWeight: {
        type: "string",
        default: ""
    },
    subHeadingFontStyle: {
        type: "string",
        default: ""
    },
    subHeadingTextTransform: {
        type: "string",
        default: ""
    },
    subHeadingTextDecoration: {
        type: "string",
        default: ""
    },
    subHeadingLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    subHeadingLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    subHeadingLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    subHeadingLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    subHeadingTextShadowValues: {
        type: 'array',
        default: [],
    },
    subHeadingTextShadowCssValue: {
        type: 'string',
        default: '',
    },
    subHeadingTextStroke: {
        type: 'number',
    },
    subHeadingColorSwitcher: {
        type: "string",
        default: "normal"
    },
    subHeadingColor: {
        type: "string"
    },
    subHeadingHoverColor: {
        type: 'string',
    },
    subHeadingBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    subHeadingBgColor: {
        type: 'string',
    },
    subHeadingBgColorHover: {
        type: 'string',
    },


    /** Start Sub Heading Border */
    subHeadingBorder: {
        type: 'string',
        default: "none",
    },
    subHeadingBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },
    subHeadingBorderColor: {
        type: 'string',
    },
    subHeadingBorderHoverColor: {
        type: 'string',
    },
    subHeadingBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    subHeadingDesktopBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    subHeadingTabBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    subHeadingMobileBorder: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    subHeadingBorderLink : {
        type : "boolean",
        default: true
    },
    subHeadingBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    subHeadingDesktopBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    subHeadingTabBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    subHeadingMobileBorderRadius: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    subHeadingBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    /** End Sub Heading Border */

    /** Start Sub Heading Box Shadow */
    subHeadingBoxShadowValues: {
        type: 'array',
        default: [],
    },
    subHeadingBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    /** End Sub Heading Box Shadow */

    /** Start Sub Heading Spacing */
    subHeadingPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    subHeadingDesktopPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    subHeadingTabPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    subHeadingMobilePadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    subHeadingPaddingLink : {
        type : "boolean",
        default: true
    },
    subHeadingMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    subHeadingDesktopMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    subHeadingTabMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    subHeadingMobileMargin: {
        type: "object", 
        default: {
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
        },
    },
    subHeadingMarginLink : {
        type : "boolean",
        default: true
    },
    /** End Sub Heading Spacing */
    /** End Sub Heading Style */  

    separator: {
        type: "string",
        default: "solid",
    },
    showSeparatorSwitcher: {
        type: "boolean",
        default: false,
    },
    separatorPosition: {
        type: "string",
        default: "bottom",
    },
    separatorColorSwitcher: {
        type: "string",
        default: "normal"
    },
    separatorColor: {
        type: "string",
        default: "#399CFF",
    },
    separatorHoverColor: {
        type: "string",
        default: "#399CFF",
    },
    separatorWidth: {
        type: 'object',
        default: {
            Desktop: '100',
            Tablet: '100',
            Mobile: '100'
        }
    },
    separatorWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
    separatorHeight: {
        type: 'object',
        default: {
            Desktop: '2',
            Tablet: '2',
            Mobile: '2'
        }
    },
	separatorHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    separatorSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    separatorSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	}, 


    /** Start Icon */
    headingIconSwitcher: {
        type: "boolean",
        default: false,
    },
    headingIconAlign: {
        type: "string",
        default: "icon",
    },
    headingIcon: {
		type: 'string',
		default: 'check',
	},
    headingIconSize: {
        type: 'object',
        default: {
            Desktop: '30',
            Tablet: '30',
            Mobile: '30'
        }
    },
    headingIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    headingIconBgSize: {
        type: 'object',
        default: {
            Desktop: '50',
            Tablet: '50',
            Mobile: '50'
        }
    },
    headingIconBgSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
    headingIconColorSwitcher : {
        type: "string",
        default: "normal"
    },
    headingIconColor : {
        type: "string",
        default: "#399CFF"
    },
    headingIconHoverColor: {
        type: 'string',
        default: "#399CFF"
    },
    headingIconBgColorSwitcher : {
        type: "string",
        default: "normal"
    },
    headingIconBgColor : {
        type: "string",
        default: ""
    },
    headingIconBgHoverColor: {
        type: "string",
        default: ""
    },

    headingIconBorder: {
		type: 'string',
		default: "none",
	},
	headingIconBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	headingIconBorderColor: {
		type: 'string',
	},
	headingIconBorderHoverColor: {
		type: 'string',
	},
	headingIconBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	headingIconBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingIconBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingIconBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingIconBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	headingIconBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	headingIconBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	headingIconBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	headingIconBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	headingIconBorderRadiusLink : {
		type : "boolean",
		default: true
	},
    /** End Icon */

	/** Start Global Setting */
	headingGlobalZIndex : {
        type: "number",
    },
	/** Start Padding */
	headingGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	headingGlobalPaddingDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalPaddingTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalPaddingMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalPaddingLink : {
		type : "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	headingGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	headingGlobalMarginDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalMarginTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalMarginMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalMarginLink : {
		type : "boolean",
		default: true
	},
	/** End Margin */

	/** Start Background */
	headingGlobalBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	headingGlobalBgColor : {
		type: "string",
	},
	headingGlobalBgHoverColor: {
		type: 'string',
	},
	/** End Background */

	/** Start Border */
	headingGlobalBorder: {
		type: 'string',
		default: "none",
	},
	headingGlobalBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	headingGlobalBorderColor: {
		type: 'string',
		default: ""
	},
	headingGlobalBorderHoverColor: {
		type: 'string',
	},
	headingGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	headingGlobalBorderDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalBorderTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalBorderMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalBorderLink : {
		type : "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	headingGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	headingGlobalBorderRadiusDesktop: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalBorderRadiusTablet: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalBorderRadiusMobile: {
		type: "object", 
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	headingGlobalBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	headingGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    headingGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */


    /** Start Background Image */
    headingBackgroundImageEnabled: {
        type: "boolean",
        default: false,
    },
    headingBackgroundImageUrl: {
        type: "string",
    },
    headingBackgroundImageAlt: {
        type: "string",
    },
    headingBackgroundImageID: {
        type: "number",
    },
    /** End Background Image */

    headingPresetStyle: {
        type: "string",
        default: "preset-0",
    },
    activeLineSwitcher: {
        type: "boolean",
        default: false,
    },
    activeLineAfterWidth: {
        type: 'object',
        default: {
            Desktop: '100',
            Tablet: '100',
            Mobile: '100'
        }
    },
    activeLineAfterWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
	},
    activeLineAfterHeight: {
        type: 'object',
        default: {
            Desktop: '2',
            Tablet: '2',
            Mobile: '2'
        }
    },
    activeLineAfterHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    activeLineAfterColor: {
        type: "string",
        default: "#B0D7FF",
    },

    activeLineBeforeWidth: {
        type: 'object',
        default: {
            Desktop: '30',
            Tablet: '30',
            Mobile: '30'
        }
    },
    activeLineBeforeWidthUnits: {
        type: 'object',
        default: {
            Desktop: '%',
            Tablet: '%',
            Mobile: '%'
        }
    },
    activeLineBeforeHeight: {
        type: 'object',
        default: {
            Desktop: '3',
            Tablet: '3',
            Mobile: '3'
        }
    },
    activeLineBeforeHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    activeLineBeforeColor: {
        type: "string",
        default: "#399CFF",
    },
    blockStyle: {
        type: "string",
        default: "",
    },
}
export default attributes;