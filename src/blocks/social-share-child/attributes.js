const attributes = {
	blockID: {
		type: 'string',
		default: '',
	},
	blockStyle: {
		type: "string",
		default: "",
	},
	highlightColor: {
		type: 'string',
		default: '',
	},
	hoverHighlightColor: {
		type: 'string',
		default: '',
	},
	icon: {
		type: 'string',
		default: '',
	},
	shareNetworks: {
		type: 'array',
		default: [
			{ id: 'facebook', enabled: true, label: 'Facebook' },
		]
	},
	socialMediaType: {
		type: "string",
		default: "facebook"
	},
	socialMediaSwitcher: {
		type: "string",
		default: "facebook"
	},
	iconSize: {
		type: 'number',
		default: 20
	},
	displayStyle: {
		type: 'string',
		default: 'icon'
	},
	alignment: {
		type: 'string',
		default: 'left'
	},
	socialIcon: {
		type: 'string',
		default: '',
	},
	socialItemColorSwitcher: {
		type: "string",
		default: "normal"
	},
	socialItemColor: {
		type: "string"
	},
	socialItemHoverColor: {
		type: 'string',
	},
	socialItemBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	socialItemBgColor: {
		type: 'string',
	},
	socialItemBgColorHover: {
		type: 'string',
	},
	socialIconPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialIconPaddingDesktop: {
		type: "object",
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	socialIconPaddingTablet: {
		type: "object",
		default: {
			top: '8',
			bottom: '8',
			left: '8',
			right: '8',
		},
	},
	socialIconPaddingMobile: {
		type: "object",
		default: {
			top: '8',
			bottom: '8',
			left: '8',
			right: '8',
		},
	},
	socialIconPaddingLink: {
		type: "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	socialIconMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialIconMarginDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconMarginTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconMarginMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconMarginLink: {
		type: "boolean",
		default: true
	},
	socialIconBorder: {
		type: 'string',
		default: "none",
	},
	socialIconBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	socialIconBorderColor: {
		type: 'string',
	},
	socialIconBorderHoverColor: {
		type: 'string',
	},
	socialIconBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialIconBorderDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBorderTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBorderMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialIconBorderLink: {
		type: "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	socialIconBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialIconBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	socialIconBorderRadiusTablet: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	socialIconBorderRadiusMobile: {
		type: "object",
		default: {
			top: '0',
			bottom: '0',
			left: '0',
			right: '0',
		},
	},
	socialIconBorderRadiusLink: {
		type: "boolean",
		default: true
	},
	// Label typography
	socialShareGlobalTypographyData: {
		type: 'object',
		default: {}
	},
	socialShareGlobalTypoSwitcher: {
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
	socialShareGlobalTypoType: {
		type: 'string',
		default: 'default',
	},
	socialShareGlobalTypoOption: {
		type: 'object',
		default: { label: 'Default', value: 'default' },
	},
	socialShareFontFamily: {
		type: 'string',
		default: 'Default',
	},
	socialShareFontSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareFontSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	socialShareFontWeight: {
		type: 'string',
		default: ''
	},
	socialShareFontStyle: {
		type: 'string',
		default: ''
	},
	socialShareTextTransform: {
		type: 'string',
		default: ''
	},
	socialShareTextDecoration: {
		type: 'string',
		default: 'none'
	},
	socialShareLetterSpacing: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareLetterSpacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	socialShareLineHeight: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareLineHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	socialShareLabelColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	socialShareLabelColor: {
		type: 'string',
	},
	socialShareLabelHoverColor: {
		type: 'string',
	},
	socialShareLabelBgColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	socialShareLabelBgColor: {
		type: 'string',
	},
	socialShareLabelHoverBgColor: {
		type: 'string',
	},
	socialShareLabelSpacing: {
        type: 'object',
        default: {
            Desktop: '12',
            Tablet: '10',
            Mobile: '10'
        }
    },
    socialShareLabelSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
};

export default attributes;