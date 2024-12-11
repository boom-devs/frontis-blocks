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
        type: "number",
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberTabPadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberMobilePadding: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberTabMargin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberMobileMargin: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberMarginLink : {
        type : "boolean",
        default: true
    },

    teamMemberBGColorSwitcher : {
        type: "string",
        default: "normal"
    },
    teamMemberBGColor : {
        type: "string"
    },
    teamMemberBGHoverColor: {
        type: 'string',
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberTabBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberMobileBorderWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberTabBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        },
    },
    teamMemberMobileBorderRadiusWidth: {
        type: "object", 
        default: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
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
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	BoxTabBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	BoxMobileBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
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
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	BoxTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	BoxMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
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

    teamMemberContentAlignment: {
		type: "string",
		default: "left"
	},
	teamMemberContentBGColorSwitcher : {
		type: "string",
		default: "normal"
	},
	teamMemberContentBGColor : {
		type: "string",
		default: "transparent"
	},
	teamMemberContentBGHoverColor : {
		type: "string",
		default: "transparent"
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
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberContentMarginTab: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberContentMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
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
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberContentBorderTab: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberContentBorderMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
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
	teamMemberDesignationHeadingTag: {
		type : "string",
		default: "h2"
	},
	teamMemberDesignationColor : {
		type: "string",
		default: "#FFFFFF"
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


	// margin
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
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberDesignationMarginTab: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberDesignationMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberDesignationMarginLink : {
		type : "boolean",
		default: true
	},

    teamMemberImageMediaUrl: {
		type: 'string',
		default: ''
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
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageMarginTab: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
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
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageBorderTab: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberImageBorderMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
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

	teamMemberImageMediaID: {
		type : "number",
		default: 0
	},
	teamMemberImageMediaUrl: {
		type : "string",
		default: ""
	},
	teamMemberImageMediaAlt: {
		type : "string",
		default: ""
	},
	teamMemberImageMediaWidth: {
		type : "number",
		default: 0
	},
	teamMemberImageMediaHeight: {
		type : "number",
		default: 0
	},


	teamMemberNameColorSwitcher: {
		type: "string",
		default: "normal"
	},
	teamMemberNameColor : {
		type: "string",
		default: "#FFF"
	},
	teamMemberNameHoverColor : {
		type: "string",
		default: "#FFF"
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
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberNameMarginTab: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberNameMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
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

	teamMemberSocialTag: {
		type : "string",
		default: "h3"
	},
	teamMemberSocialIconShape: {
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

	teamMemberSocialIconSizeDesktop: {
		type: "number",
		default: 25
	},
	teamMemberSocialIconSizeTablet: {
		type: "number",
		default: 25
	},
	teamMemberSocialIconSizeMobile: {
		type: "number",
		default: 25
	},
	teamMemberSocialIconSizeUnits: {
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

	teamMemberSocialIconSpacingDesktop: {
		type: "number",
		default: 20
	},
	teamMemberSocialIconSpacingTablet: {
		type: "number",
		default: 20
	},
	teamMemberSocialIconSpacingMobile: {
		type: "number",
		default: 20
	},
	teamMemberSocialIconSpacingUnits: {
		type: "string",
		default: "px"
	},




	teamMemberSocialTitleFontFamily: {
		type: "string",
		default: "inherit",
	},
	teamMemberSocialTitleFontSizeDesktop: {
		type: "number",
		default: 18
	},
	teamMemberSocialTitleFontSizeTablet: {
		type: "number",
		default: 18
	},
	teamMemberSocialTitleFontSizeMobile: {
		type: "number",
		default: 18
	},
	teamMemberSocialTitleFontSizeUnits: {
		type: "string",
		default: "px"
	},
	teamMemberSocialTitleFontWeight : {
		type: "string",
		default: "600"
	},
	teamMemberSocialTitleFontStyle : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialTitleTextTransform : {
		type: "string",
		default: "none"
	},
	teamMemberSocialTitleTextDecoration : {
		type: "string",
		default: "none"
	},
	teamMemberSocialTitleLetterSpacingDesktop: {
		type: "number",
		default: 0
	},
	teamMemberSocialTitleLetterSpacingTablet: {
		type: "number",
		default: 0
	},
	teamMemberSocialTitleLetterSpacingMobile: {
		type: "number",
		default: 0
	},
	teamMemberSocialTitleLetterSpacingUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialTitleLineHeightDesktop: {
		type: "number",
		default: "inherit",
	},
	teamMemberSocialTitleLineHeightTablet: {
		type: "number",
		default: "inherit",
	},
	teamMemberSocialTitleLineHeightMobile: {
		type: "number",
		default: "inherit",
	},
	teamMemberSocialTitleLineHeightUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialTitleColorSwitcher : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialTitleColor : {
		type: "string",
		default: "#000"
	},
	teamMemberSocialTitleHoverColor: {
		type: 'string',
		default: "#000"
	},

	teamMemberSocialDescFontFamily: {
		type: "string",
		default: "inherit",
	},
	teamMemberSocialDescFontSizeDesktop: {
		type: "number",
		default: 14
	},
	teamMemberSocialDescFontSizeTablet: {
		type: "number",
		default: 14
	},
	teamMemberSocialDescFontSizeMobile: {
		type: "number",
		default: 14
	},
	teamMemberSocialDescFontSizeUnits: {
		type: "string",
		default: "px"
	},
	teamMemberSocialDescFontWeight : {
		type: "string",
		default: "400"
	},
	teamMemberSocialDescFontStyle : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialDescTextTransform : {
		type: "string",
		default: "none"
	},
	teamMemberSocialDescTextDecoration : {
		type: "string",
		default: "none"
	},
	teamMemberSocialDescLetterSpacingDesktop : {
		type: "number",
	},
	teamMemberSocialDescLetterSpacingTablet : {
		type: "number",
	},
	teamMemberSocialDescLetterSpacingMobile : {
		type: "number",
	},
	teamMemberSocialDescLetterSpacingUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialDescLineHeightDesktop : {
		type: "number",
		default: "inherit",
	},
	teamMemberSocialDescLineHeightTablet : {
		type: "number",
		default: "inherit",
	},
	teamMemberSocialDescLineHeightMobile : {
		type: "number",
		default: "inherit",
	},
	teamMemberSocialDescLineHeightUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialDescColorSwitcher : {
		type: "string",
		default: "normal"
	},
	teamMemberSocialDescColor : {
		type: "string",
		default: "#000"
	},
	teamMemberSocialDescHoverColor: {
		type: 'string',
		default: "#000"
	},


	teamMemberSocialZIndex : {
		type: "number",
	},
	teamMemberSocialPaddingUnits : {
		type: "string",
		default: "px"
	},
	teamMemberSocialDesktopPadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialTabPadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialMobilePadding: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
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
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialTabMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialMobileMargin: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
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
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialTabBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialMobileBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
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
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	teamMemberSocialMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
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
