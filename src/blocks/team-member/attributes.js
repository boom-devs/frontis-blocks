const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	blockStyle: {
        type: "string",
        default: "",
    },
	deviceType: {
		type: "string",
		default: "Desktop"
	},

	teamMemberZIndex : {
        type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: '',
		}
    },

    teamMemberPaddingUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    teamMemberDesktopPadding: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    teamMemberTabPadding: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    teamMemberMobilePadding: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    teamMemberPaddingLink : {
        type : "boolean",
        default: true
    },

    teamMemberMarginUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    teamMemberDesktopMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    teamMemberTabMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    teamMemberMobileMargin: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    teamMemberMarginLink : {
        type : "boolean",
        default: true
    },


	teamMemberBgColorSwitcher: {
        type: "string",
        default: "normal"
    },
    teamMemberBgType: {
        type: "string",
        default: "classic"
    },
    teamMemberBgClassicColor: {
        type: "string",
        default: ""
    },
    teamMemberBgGradientColor: {
        type: "string",
    },
    teamMemberBgCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    teamMemberBgCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    teamMemberBgColorStyle: {
        type: "string",
        default: ""
    },
    teamMemberBgImageUrl: {
        type: "string",
        default: ""
    },
    teamMemberBgImageAlt: {
        type: "string",
        default: ""
    },
    teamMemberBgImageID: {
        type: "string",
        default: ""
    },
    teamMemberBgImagePosition: {
        type: "string",
        default: ""
    },
    teamMemberBgImageAttachment: {
        type: "string",
        default: ""
    },
    teamMemberBgImageSize: {
        type: "string",
        default: ""
    },
    teamMemberBgImageRepeat: {
        type: "string",
        default: ""
    },
    teamMemberBgHoverType: {
        type: "string",
        default: "classic"
    },
    teamMemberBgHoverClassicColor: {
        type: "string",
        default: ""
    },
    teamMemberBgHoverGradientColor: {
        type: "string",
    },
    teamMemberBgHoverCustomGradientSwitcher: {
        type: "boolean",
        default: false
    },
    teamMemberBgHoverCustomGradientInputValue: {
        type: "string",
        default: ""
    },
    teamMemberBgHoverColorStyle: {
        type: "string",
        default: ""
    },
    teamMemberBgHoverImageUrl: {
        type: "string",
        default: ""
    },
    teamMemberBgHoverImageAlt: {
        type: "string",
        default: ""
    },
    teamMemberBgHoverImageID: {
        type: "string",
        default: ""
    },
    teamMemberBgHoverImagePosition: {
        type: "string",
        default: ""
    },
    teamMemberBgHoverImageAttachment: {
        type: "string",
        default: ""
    },
    teamMemberBgHoverImageSize: {
        type: "string",
        default: ""
    },
    teamMemberBgHoverImageRepeat: {
        type: "string",
        default: ""
    },


    teamMemberBorder: {
        type: 'string',
        default: "none",
    },
    teamMemberBorderColor: {
        type: 'string',
    },
    teamMemberBorderHoverColor: {
        type: 'string',
    },
    teamMemberBorderColorSwitcher : {
        type: "string",
        default: "normal"
    },

    teamMemberBorderUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    teamMemberDesktopBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    teamMemberTabBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    teamMemberMobileBorderWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    teamMemberBorderLink : {
        type : "boolean",
        default: true
    },

    teamMemberBorderRadiusUnits : {
        type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    teamMemberDesktopBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    teamMemberTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    teamMemberMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
        },
    },
    teamMemberBorderRadiusLink : {
        type : "boolean",
        default: true
    },
    teamMemberDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    teamMemberTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    teamMemberMobileSwitcher: {
        type: "boolean",
        default: false,
    },

    BoxBorder: {
		type: 'string',
		default: "none",
	},
	BoxBorderColor: {
		type: 'string',
	},
	BoxBorderHoverColor: {
		type: 'string',
	},
	BoxBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	BoxBorderUnits : {
		type: "string",
		default: "px"
	},
	BoxDesktopBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	BoxTabBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	BoxMobileBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	HeadingActiveBorderDevice: {
		type: "string",
		default: "Desktop"
	},
	BoxBorderLink : {
		type : "boolean",
		default: true
	},
	BoxBorderRadiusUnits : {
		type: "string",
		default: "px"
	},
	BoxDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	BoxTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	BoxMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	HeadingActiveBorderRadiusDevice: {
		type: "string",
		default: "Desktop"
	},
	BoxBorderRadiusLink : {
		type : "boolean",
		default: true
	},

    teamMemberContentPosition: {
		type: "string",
		default: "bottom"
	},

    teamMemberContentAlignment: {
		type: "string",
		default: "left"
	},

	teamMemberContentBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	teamMemberContentBgType: {
		type: "string",
		default: "classic"
	},
	teamMemberContentBgClassicColor: {
		type: "string",
		default: ""
	},
	teamMemberContentBgGradientColor: {
		type: "string",
	},
	teamMemberContentBgCustomGradientSwitcher: {
		type: "boolean",
		default: false
	},
	teamMemberContentBgCustomGradientInputValue: {
		type: "string",
		default: ""
	},
	teamMemberContentBgColorStyle: {
		type: "string",
		default: ""
	},
	teamMemberContentBgImageUrl: {
		type: "string",
		default: ""
	},
	teamMemberContentBgImageAlt: {
		type: "string",
		default: ""
	},
	teamMemberContentBgImageID: {
		type: "string",
		default: ""
	},
	teamMemberContentBgImagePosition: {
		type: "string",
		default: ""
	},
	teamMemberContentBgImageAttachment: {
		type: "string",
		default: ""
	},
	teamMemberContentBgImageSize: {
		type: "string",
		default: ""
	},
	teamMemberContentBgImageRepeat: {
		type: "string",
		default: ""
	},
	teamMemberContentBgHoverType: {
		type: "string",
		default: "classic"
	},
	teamMemberContentBgHoverClassicColor: {
		type: "string",
		default: ""
	},
	teamMemberContentBgHoverGradientColor: {
		type: "string",
	},
	teamMemberContentBgHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false
	},
	teamMemberContentBgHoverCustomGradientInputValue: {
		type: "string",
		default: ""
	},
	teamMemberContentBgHoverColorStyle: {
		type: "string",
		default: ""
	},
	teamMemberContentBgHoverImageUrl: {
		type: "string",
		default: ""
	},
	teamMemberContentBgHoverImageAlt: {
		type: "string",
		default: ""
	},
	teamMemberContentBgHoverImageID: {
		type: "string",
		default: ""
	},
	teamMemberContentBgHoverImagePosition: {
		type: "string",
		default: ""
	},
	teamMemberContentBgHoverImageAttachment: {
		type: "string",
		default: ""
	},
	teamMemberContentBgHoverImageSize: {
		type: "string",
		default: ""
	},
	teamMemberContentBgHoverImageRepeat: {
		type: "string",
		default: ""
	},

	// Padding
	teamMemberContentPaddingUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberContentPaddingDesktop: {
		type: "object",
		default: {
			top: 30,
			bottom: 30,
			left: 30,
			right: 30,
		},
	},
	teamMemberContentPaddingTab: {
		type: "object",
		default: {
			top: 30,
			bottom: 30,
			left: 30,
			right: 30,
		},
	},
	teamMemberContentPaddingMobile: {
		type: "object",
		default: {
			top: 30,
			bottom: 30,
			left: 30,
			right: 30,
		},
	},
	teamMemberContentPaddingLink : {
		type : "boolean",
		default: true
	},

	// margin
	teamMemberContentMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberContentMarginDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberContentMarginTab: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberContentMarginMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberContentMarginLink : {
		type : "boolean",
		default: true
	},

	// Border
	teamMemberContentBorder: {
		type: 'string',
		default: "none",
	},
	teamMemberContentBorderColorSwitcher: {
		type: 'string',
        default: 'normal'
	},
	teamMemberContentBorderColor: {
		type: 'string',
        default: '#000'
	},
	teamMemberContentBorderHoverColor: {
		type: 'string',
        default: '#000'
	},

	// Border Type
	teamMemberContentBorderUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberContentBorderDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberContentBorderTab: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberContentBorderMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberContentBorderLink : {
		type : "boolean",
		default: true
	},

	// Border Radius
	teamMemberContentBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'em',
			Mobile: 'px'
		}
	},
	teamMemberContentBorderRadiusDesktop: {
		type: "object",
		default: {
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
	teamMemberContentBorderRadiusTab: {
		type: "object",
		default: {
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
	teamMemberContentBorderRadiusMobile: {
		type: "object",
		default: {
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
	teamMemberContentBorderRadiusLink : {
		type : "boolean",
		default: true
	},

    teamMemberDesignation: {
		type: "string",
		default: "Creative Director"
	},
	teamMemberDesignationColor : {
		type: "string",
		default: "#000"
	},
	// Typography
	teamMemberDesignationFontFamily: {
        type: "string",
        default: "",
    },
    teamMemberDesignationFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    teamMemberDesignationFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    teamMemberDesignationFontWeight: {
        type: "string",
        default: "",
    },
    teamMemberDesignationFontStyle: {
        type: "string",
        default: "",
    },
    teamMemberDesignationTextTransform: {
        type: "string",
        default: "",
    },
    teamMemberDesignationTextDecoration: {
        type: "string",
        default: "",
    },
    teamMemberDesignationLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    teamMemberDesignationLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    teamMemberDesignationLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    teamMemberDesignationLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
	teamMemberDesignationLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},


	// Designation margin
	teamMemberDesignationMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberDesignationMarginDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberDesignationMarginTab: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberDesignationMarginMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberDesignationMarginLink : {
		type : "boolean",
		default: true
	},

	/** team Image */
    teamMemberImageUrl: {
        type: "string",
        default: ""
    },
    teamMemberImageAlt: {
        type: "string",
        default: ""
    },
    teamMemberImageID: {
        type: "string",
        default: ""
    },
    teamMemberImagePosition: {
        type: "string",
        default: ""
    },
    teamMemberImageAttachment: {
        type: "string",
        default: ""
    },
    teamMemberImageRepeat: {
        type: "string",
        default: ""
    },
    teamMemberImageSize: {
        type: "string",
        default: ""
    },


	teamMemberImageOverlaySwitcher: {
		type: "boolean",
		default: true
	},
	teamMemberImageBGColorSwitcher: {
		type: "string",
		default: "normal"
	},
	teamMemberImageBGColor: {
		type: "string",
		default: "#0000005e"
	},
	teamMemberImageBGHoverColor: {
		type: "string",
		default: "#0000005e"
	},

	// Image Width Size
	teamMemberImageWidthUnits : {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
	},
	teamMemberImageWidth: {
		type: 'object',
		default: {
			Desktop: 100,
			Tablet: 100,
			Mobile: 100
		}
	},

	teamMemberImageHeightUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberImageHeight: {
		type: 'object',
		default: {
			Desktop: 410,
			Tablet: 410,
			Mobile: 410
		}
	},
	teamMemberImageSizeWidthDesktop: {
		type: "number",
		default: 100
	},
	teamMemberImageSizeWidthTab: {
		type: "number",
		default: 100
	},
	teamMemberImageSizeWidthMobile: {
		type: "number",
		default: 100
	},

	// Image Height Size
	teamMemberImageSizeHeightUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberImageSizeHeightDesktop: {
		type: "number",
		default: 416
	},
	teamMemberImageSizeHeightTab: {
		type: "number",
		default: 416
	},
	teamMemberImageSizeHeightMobile: {
		type: "number",
		default: 416
	},


	// margin
	teamMemberImageMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberImageMarginDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberImageMarginTab: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberImageMarginMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberImageMarginLink : {
		type : "boolean",
		default: true
	},
	// Border
	teamMemberImageBorder: {
		type: 'string',
		default: "none",
	},
	teamMemberImageBorderSwitcher: {
		type: 'string',
		default: 'normal'
	},
	teamMemberImageBorderColor: {
		type: 'string',
	},
	teamMemberImageBorderHoverColor: {
		type: 'string',
	},

	// Border Type
	teamMemberImageBorderUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberImageBorderDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberImageBorderTab: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberImageBorderMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberImageBorderLink : {
		type : "boolean",
		default: true
	},

	// Border Radius
	teamMemberImageBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberImageBorderRadiusDesktop: {
		type: "object",
		default: {
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
	teamMemberImageBorderRadiusTab: {
		type: "object",
		default: {
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
	teamMemberImageBorderRadiusMobile: {
		type: "object",
		default: {
			top: 8,
			bottom: 8,
			left: 8,
			right: 8,
		},
	},
	teamMemberImageBorderRadiusLink : {
		type : "boolean",
		default: true
	},

    teamMemberName: {
		type: "string",
		default: "Wade Warren"
	},
	teamMemberNameHeadingTag: {
		type : "string",
		default: "h2"
	},


	teamMemberNameColorSwitcher: {
		type: "string",
		default: "normal"
	},
	teamMemberNameColor : {
		type: "string",
		default: "#000"
	},
	teamMemberNameHoverColor : {
		type: "string",
		default: "#000"
	},

	// Typography
	teamMemberNameFontFamily: {
        type: "string",
        default: "",
    },
    teamMemberNameFontSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    teamMemberNameFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    teamMemberNameFontWeight: {
        type: "string",
        default: "",
    },
    teamMemberNameFontStyle: {
        type: "string",
        default: "",
    },
    teamMemberNameTextTransform: {
        type: "string",
        default: "",
    },
    teamMemberNameTextDecoration: {
        type: "string",
        default: "",
    },
    teamMemberNameLetterSpacing: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    teamMemberNameLetterSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    teamMemberNameLineHeight: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    teamMemberNameLineHeightUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
	teamMemberNameLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

	// margin
	teamMemberNameMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberNameMarginDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberNameMarginTab: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberNameMarginMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberNameMarginLink : {
		type : "boolean",
		default: true
	},

	teamMemberSocialItems: {
		type: "array",
		default: [
			{
				id: 'item-1',
				Title: 'Facebook',
				link: '#',
				teamMemberSocialIcon: 'facebook',
			},
			{
				id: 'item-2',
				Title: 'Twitter',
				link: '#',
				teamMemberSocialIcon: 'twitter',
			},
		],
		items: {
			type: "object",
			properties: {
				id: {
					type: "string",
					default: ""
				},
				Title: {
					type: "string",
					default: ""
				},
				Description: {
					type: "string",
					default: ""
				},
				teamMemberSocialIcon: {
					type: 'string',
					default: 'check',
				},
				teamMemberSocialIconAlign: {
					type: "string",
					default: "icon",
				},
			}
		}
	},

	teamMemberIconsAlignment: {
		type : "string",
		default: "left"
	},

	teamMemberIconsSize: {
		type : "object",
		default: {
			Desktop: 16,
			Tablet: 16,
			Mobile: 16
		}
	},
	teamMemberIconsSizeUnits: {
		type : "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},
	teamMemberIconsSpacing: {
		type : "object",
		default: {
			Desktop: 16,
			Tablet: 16,
			Mobile: 16
		}
	},
	teamMemberIconsSpacingUnits: {
		type : "object",
		default: {
			Desktop: "px",
			Tablet: "px",
			Mobile: "px"
		}
	},



	teamMemberIconsColorSwitcher: {
		type : "string",
		default: "normal"
	},
	teamMemberIconsColor: {
		type : "string",
		default: "#000000"
	},
	teamMemberIconsHoverColor: {
		type : "string",
		default: "#000000"
	},


	teamMemberIconStyleSwitcher: {
		type: "boolean",
		default: false
	},

	teamMemberIconsBGColorSwitcher : {
		type: "string",
		default: "normal"
	},
	teamMemberIconsBGColor: {
		type: "string",
		default: "#fff"
	},
	teamMemberIconsBGHoverColor: {
		type: 'string',
		default: "#fff"
	},
	
	teamMemberIconsBorder: {
		type: 'string',
		default: "none",
	},
	teamMemberIconsBorderColor: {
		type: 'string',
		default: "#000"
	},
	teamMemberIconsBorderHoverColor: {
		type: 'string',
		default: "#000"
	},
	teamMemberIconsBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	
	
	teamMemberIconsPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberIconsDesktopPadding: {
		type: "object", 
		default: {
			top: 20,
			bottom: 20,
			left: 20,
			right: 20,
		},
	},
	teamMemberIconsTabPadding: {
		type: "object", 
		default: {
			top: 20,
			bottom: 20,
			left: 20,
			right: 20,
		},
	},
	teamMemberIconsMobilePadding: {
		type: "object", 
		default: {
			top: 20,
			bottom: 20,
			left: 20,
			right: 20,
		},
	},
	teamMemberIconsPaddingLink : {
		type : "boolean",
		default: true
	},

	teamMemberIconsMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberIconsDesktopMargin: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberIconsTabMargin: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberIconsMobileMargin: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberIconsMarginLink : {
		type : "boolean",
		default: true
	},
	
	teamMemberIconsBorderUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberIconsDesktopBorderWidth: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberIconsTabBorderWidth: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberIconsMobileBorderWidth: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberIconsBorderLink : {
		type : "boolean",
		default: true
	},
	
	teamMemberIconsBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
	},
	teamMemberIconsDesktopBorderRadiusWidth: {
		type: "object", 
		default: {
			top: 50,
			bottom: 50,
			left: 50,
			right: 50,
		},
	},
	teamMemberIconsTabBorderRadiusWidth: {
		type: "object", 
		default: {
			top: 50,
			bottom: 50,
			left: 50,
			right: 50,
		},
	},
	teamMemberIconsMobileBorderRadiusWidth: {
		type: "object", 
		default: {
			top: 50,
			bottom: 50,
			left: 50,
			right: 50,
		},
	},
	teamMemberIconsBorderRadiusLink : {
		type : "boolean",
		default: true
	},


	teamMemberSocialType: {
		type : "string",
		default: "content"
	},
	teamMemberSocialPosition: {
		type : "string",
		default: "bottom"
	},
	socialIconBtnSwitcher: {
		type : "boolean",
		default: false
	},
	teamMemberSocialIconAnimationType: {
		type : "string",
		default: "default"
	},

	socialIconBtnIcon: {
		type: "string",
		default: "plus",
	},
	socialIconBtnIconSize: {
		type: "object",
		default: {
			Desktop: 24,
			Tablet: 24,
			Mobile: 24
		},
	},
	socialIconBtnIconSizeUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	
	socialIconBtnColorSwitcher : {
		type: "string",
		default: "normal"
	},
	socialIconBtnColor : {
		type: "string",
		default: "#000"
	},
	socialIconBtnHoverColor: {
		type: 'string',
		default: "#000"
	},
	
	socialIconBtnBGColorSwitcher : {
		type: "string",
		default: "normal"
	},
	socialIconBtnBGColor: {
		type: "string",
		default: "#fff"
	},
	socialIconBtnBGHoverColor: {
		type: 'string',
		default: "#fff"
	},
	
	socialIconBtnBorder: {
		type: 'string',
		default: "none",
	},
	socialIconBtnBorderColor: {
		type: 'string',
		default: "#000"
	},
	socialIconBtnBorderHoverColor: {
		type: 'string',
		default: "#000"
	},
	socialIconBtnBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	
	
	socialIconBtnPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialIconBtnDesktopPadding: {
		type: "object", 
		default: {
			top: 20,
			bottom: 20,
			left: 20,
			right: 20,
		},
	},
	socialIconBtnTabPadding: {
		type: "object", 
		default: {
			top: 20,
			bottom: 20,
			left: 20,
			right: 20,
		},
	},
	socialIconBtnMobilePadding: {
		type: "object", 
		default: {
			top: 20,
			bottom: 20,
			left: 20,
			right: 20,
		},
	},
	socialIconBtnPaddingLink : {
		type : "boolean",
		default: true
	},

	socialIconBtnMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialIconBtnDesktopMargin: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	socialIconBtnTabMargin: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	socialIconBtnMobileMargin: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	socialIconBtnMarginLink : {
		type : "boolean",
		default: true
	},
	
	socialIconBtnBorderUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialIconBtnDesktopBorderWidth: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	socialIconBtnTabBorderWidth: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	socialIconBtnMobileBorderWidth: {
		type: "object", 
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	socialIconBtnBorderLink : {
		type : "boolean",
		default: true
	},
	
	socialIconBtnBorderRadiusUnits : {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
	},
	socialIconBtnDesktopBorderRadiusWidth: {
		type: "object", 
		default: {
			top: 50,
			bottom: 50,
			left: 50,
			right: 50,
		},
	},
	socialIconBtnTabBorderRadiusWidth: {
		type: "object", 
		default: {
			top: 50,
			bottom: 50,
			left: 50,
			right: 50,
		},
	},
	socialIconBtnMobileBorderRadiusWidth: {
		type: "object", 
		default: {
			top: 50,
			bottom: 50,
			left: 50,
			right: 50,
		},
	},
	socialIconBtnBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	

	teamMemberSocialTag: {
		type : "string",
		default: "h3"
	},
	teamMemberteamMemberIconshape: {
		type: "string",
		default: "circle"
	},
	teamMemberSocialAlignment: {
		type: "string",
		default: "left",
	},
	teamMemberSocialIconAlignment: {
		type: "string",
		default: "left",
	},

	teamMemberSocialListGapDesktop: {
		type: "number",
		default: 20
	},
	teamMemberSocialListGapTablet: {
		type: "number",
		default: 15
	},
	teamMemberSocialListGapMobile: {
		type: "number",
		default: 10
	},
	teamMemberSocialListGapUnits: {
		type: "string",
		default: "px"
	},

	teamMemberSocialIconColorSwitcher : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialIconColor : {
		type: "string",
		default: "#fff"
	},
	teamMemberSocialIconHoverColor: {
		type: 'string',
		default: "#fff"
	},

	teamMemberSocialIconBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialIconBgColor : {
		type: "string",
		default: "#000"
	},
	teamMemberSocialIconBgHoverColor: {
		type: 'string',
		default: "#000"
	},

	teamMemberteamMemberIconsizeDesktop: {
		type: "number",
		default: 25
	},
	teamMemberteamMemberIconsizeTablet: {
		type: "number",
		default: 25
	},
	teamMemberteamMemberIconsizeMobile: {
		type: "number",
		default: 25
	},
	teamMemberteamMemberIconsizeUnits: {
		type: "string",
		default: "px"
	},
	teamMemberSocialIconBgSizeDesktop: {
		type: "number",
		default: 60
	},
	teamMemberSocialIconBgSizeTablet: {
		type: "number",
		default: 60
	},
	teamMemberSocialIconBgSizeMobile: {
		type: "number",
		default: 60
	},
	teamMemberSocialIconBgSizeUnits: {
		type: "string",
		default: "px"
	},

	teamMemberteamMemberIconspacingDesktop: {
		type: "number",
		default: 20
	},
	teamMemberteamMemberIconspacingTablet: {
		type: "number",
		default: 20
	},
	teamMemberteamMemberIconspacingMobile: {
		type: "number",
		default: 20
	},
	teamMemberteamMemberIconspacingUnits: {
		type: "string",
		default: "px"
	},


	teamMemberDescSwitcher: {
		type: "boolean",
		default: false,
	},
	teamMemberDesc: {
		type: "string",
		default: "Lorem ipsum dolor sit amet consectetur Aliquam mauris bibendum.",
	},
	teamMemberDescColor : {
		type: "string",
		default: "#000"
	},
	// Typography
	teamMemberDescFontFamily: {
		type: "string",
		default: "",
	},
	teamMemberDescFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	teamMemberDescFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	teamMemberDescFontWeight: {
		type: "string",
		default: "",
	},
	teamMemberDescFontStyle: {
		type: "string",
		default: "",
	},
	teamMemberDescTextTransform: {
		type: "string",
		default: "",
	},
	teamMemberDescTextDecoration: {
		type: "string",
		default: "",
	},
	teamMemberDescLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	teamMemberDescLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	teamMemberDescLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	teamMemberDescLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	teamMemberDescLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	
	
	// Desc margin
	teamMemberDescMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	teamMemberDescMarginDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberDescMarginTab: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberDescMarginMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberDescMarginLink : {
		type : "boolean",
		default: true
	},


	teamMemberSocialPaddingUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialDesktopPadding: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberSocialTabPadding: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberSocialMobilePadding: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberSocialPaddingLink : {
		type : "boolean",
		default: true
	},
	teamMemberSocialMarginUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialDesktopMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberSocialTabMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberSocialMobileMargin: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberSocialMarginLink : {
		type : "boolean",
		default: true
	},
	teamMemberSocialBgColorSwitcher : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialBgColor : {
		type: "string"
	},
	teamMemberSocialBgHoverColor: {
		type: 'string',
	},


	teamMemberSocialBorder: {
		type: 'string',
		default: "none",
	},
	teamMemberSocialBorderColor: {
		type: 'string',
	},
	teamMemberSocialBorderHoverColor: {
		type: 'string',
	},
	teamMemberSocialBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialBorderUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialDesktopBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberSocialTabBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberSocialMobileBorderWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberSocialBorderLink : {
		type : "boolean",
		default: true
	},
	teamMemberSocialBorderRadiusUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberSocialTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberSocialMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	teamMemberSocialBorderRadiusLink : {
		type : "boolean",
		default: true
	},
	teamMemberSocialDesktopSwitcher: {
		type: "boolean",
		default: false,
	},
	teamMemberSocialTabletSwitcher: {
		type: "boolean",
		default: false,
	},
	teamMemberSocialMobileSwitcher: {
		type: "boolean",
		default: false,
	},
};

export default attributes;
