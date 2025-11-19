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
	/** Start Global Setting */
	socialShareChildCustomCSS: {
		type: 'string',
		default: '',
	},
	socialShareChildDesktopSwitcher: {
		type: 'boolean',
		default: false,
	},
	socialShareChildTabletSwitcher: {
		type: 'boolean',
		default: false,
	},
	socialShareChildMobileSwitcher: {
		type: 'boolean',
		default: false,
	},
	socialShareChildGlobalZIndex: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareChildOverflow: {
		type: 'string',
		default: 'default',
	},
	socialShareChildGlobalWraperID: {
		type: 'string',
		default: ''
	},

	socialShareChildGlobalWraperClass: {
		type: 'string',
		default: ''
	},

	/** Start Padding */
	socialShareChildGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialShareChildGlobalPaddingDesktop: {
		type: 'object',
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	socialShareChildGlobalPaddingTablet: {
		type: 'object',
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	socialShareChildGlobalPaddingMobile: {
		type: 'object',
		default: {
			top: '10',
			bottom: '10',
			left: '10',
			right: '10',
		},
	},
	socialShareChildGlobalPaddingLink: {
		type: 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	socialShareChildGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialShareChildGlobalMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareChildGlobalMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareChildGlobalMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareChildGlobalMarginLink: {
		type: 'boolean',
		default: true
	},
	/** End Margin */

	socialShareChildGlobalBgColor: {
		type: 'string',
	},
	socialShareChildGlobalBgHoverColor: {
		type: 'string',
	},

	/** Start Background Normal for fb socialShareChild */
	socialShareChildGlobalBgColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	socialShareChildGlobalBgNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	socialShareChildGlobalBgNormalClassicColor: {
		type: 'string',
		default: '',
	},
	socialShareChildGlobalBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	socialShareChildGlobalBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	socialShareChildGlobalBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Bg Normal Image for fb container */
	socialShareChildGlobalBgNormalBackgroundImageUrl: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareChildGlobalBgNormalBackgroundImagePosition: {
		type: 'object',
		default: {
			Desktop: { x: '0.5', y: '0.5' },
			Tablet: { x: '', y: '' },
			Mobile: { x: '', y: '' }
		}
	},
	socialShareChildGlobalBgNormalBackgroundImageAttachment: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareChildGlobalBgNormalBackgroundImageRepeat: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareChildGlobalBgNormalBackgroundImageSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},


	/**Bg Hover for fb socialShareChild */
	socialShareChildGlobalBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	socialShareChildGlobalBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	socialShareChildGlobalBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	socialShareChildGlobalBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	socialShareChildGlobalBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Hover Image for fb socialShareChild */
	socialShareChildGlobalBgHoverBackgroundImageUrl: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareChildGlobalBgHoverBackgroundImagePosition: {
		type: 'object',
		default: {
			Desktop: { x: '0.5', y: '0.5' },
			Tablet: { x: '', y: '' },
			Mobile: { x: '', y: '' }
		}
	},
	socialShareChildGlobalBgHoverBackgroundImageAttachment: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareChildGlobalBgHoverBackgroundImageRepeat: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareChildGlobalBgHoverBackgroundImageSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	/** End Background for fb socialShareChild */





	/** End Background */

	/** Start Border */
	socialShareChildGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	socialShareChildGlobalBorderColorSwitcher: {
		type: 'string',
		default: 'normal'
	},
	socialShareChildGlobalBorderColor: {
		type: 'string',
		default: ''
	},
	socialShareChildGlobalBorderHoverColor: {
		type: 'string',
	},
	socialShareChildGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialShareChildGlobalBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareChildGlobalBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareChildGlobalBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareChildGlobalBorderLink: {
		type: 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	socialShareChildGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	socialShareChildGlobalBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareChildGlobalBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareChildGlobalBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	socialShareChildGlobalBorderRadiusLink: {
		type: 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	socialShareChildGlobalBoxShadowSwitcher: {
		type: 'string',
		default: 'normal',
	},
	socialShareChildGlobalBoxShadowValues: {
		type: 'array',
		default: [],
	},
	socialShareChildGlobalBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	socialShareChildGlobalBoxShadowHoverValues: {
		type: 'array',
		default: [],
	},
	socialShareChildGlobalBoxShadowHoverCssValue: {
		type: 'string',
		default: '',
	},
	socialShareChildPositionType: {
		type: 'string',
		default: 'default'
	},
	socialShareChildHZOrientationType: {
		type: 'string',
		default: 'left'
	},
	socialShareChildVROrientationType: {
		type: 'string',
		default: 'top'
	},
	socialShareChildHZLeftOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareChildHZLeftOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	socialShareChildHZRightOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareChildHZRightOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	socialShareChildVRTopOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareChildVRTopOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	socialShareChildVRBottomOffset: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	socialShareChildVRBottomOffsetUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	/** End Global Style */
};

export default attributes;