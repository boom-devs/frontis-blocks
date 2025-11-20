const attributes = {
	blockID: {
		type: 'string',
		default: '',
	},
	// Separator Settings
	separatorType: {
		type: 'string',
		default: 'text', // 'text' or 'icon'
	},
	separatorText: {
		type: 'string',
		default: '/',
	},
	separatorIcon: {
		type: 'string',
		default: 'fas fa-angle-right',
	},
	separatorGap: {
		type: 'number',
		default: 10,
	},
	// Home Settings
	showHomeIcon: {
		type: 'boolean',
		default: true,
	},
	homeIcon: {
		type: 'string',
		default: 'fas fa-home',
	},
	homeText: {
		type: 'string',
		default: 'Home',
	},
	// Item Settings
	showItemIcon: {
		type: 'boolean',
		default: false,
	},
	itemIcon: {
		type: 'string',
		default: 'far fa-file',
	},
	// Style - Typography
	breadcrumbTypography: {
		type: 'object',
		default: {},
	},
	// Style - Colors
	textColor: {
		type: 'string',
		default: '',
	},
	linkColor: {
		type: 'string',
		default: '',
	},
	linkHoverColor: {
		type: 'string',
		default: '',
	},
	separatorColor: {
		type: 'string',
		default: '',
	},
	iconColor: {
		type: 'string',
		default: '',
	},
	// Alignment
	align: {
		type: 'string',
		default: 'flex-start',
	},
	// Extra
	breadcrumbGlobalZIndex : {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	breadcrumbOverflow: {
        type: 'string',
        default: 'default',
    },
	breadcrumbPositionType: {
        type: 'string',
        default: 'default'
    },
    breadcrumbHZOrientationType: {
        type: 'string',
        default: 'left'
    },
    breadcrumbVROrientationType: {
        type: 'string',
        default: 'top'
    },
    breadcrumbHZLeftOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbHZLeftOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    breadcrumbHZRightOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbHZRightOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    breadcrumbVRTopOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbVRTopOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },
    breadcrumbVRBottomOffset: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbVRBottomOffsetUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px',
        }
    },

	breadcrumbGlobalWraperID : {
        type: 'string',
        default: ''
    },
    breadcrumbGlobalWraperClass : {
        type: 'string',
        default: ''
    },

	/** Start Padding */
	breadcrumbGlobalPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	breadcrumbGlobalPaddingDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalPaddingLink : {
		type : 'boolean',
		default: true
	},
	/** End Padding */

	/** Start Margin */
	breadcrumbGlobalMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	breadcrumbGlobalMarginDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalMarginTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalMarginMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalMarginLink : {
		type : 'boolean',
		default: true
	},
	/** End Margin */

	/** Start Background Normal for fb breadcrumb */
	breadcrumbGlobalBgColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	breadcrumbGlobalBgNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	breadcrumbGlobalBgNormalClassicColor: {
		type: 'string',
		default: '',
	},
	breadcrumbGlobalBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	breadcrumbGlobalBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	breadcrumbGlobalBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Bg Normal Image for fb container */
	breadcrumbGlobalBgNormalBackgroundImageUrl: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	breadcrumbGlobalBgNormalBackgroundImageAlt: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
	breadcrumbGlobalBgNormalBackgroundImageID: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbGlobalBgNormalBackgroundImagePosition: {
        type: 'object',
        default: {
            Desktop: { x: '0.5', y: '0.5' },
            Tablet: { x: '', y: '' },
            Mobile: { x: '', y: '' }
        }
    },
    breadcrumbGlobalBgNormalBackgroundImageAttachment: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbGlobalBgNormalBackgroundImageRepeat: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    breadcrumbGlobalBgNormalBackgroundImageSize: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },


	/**Bg Hover for fb breadcrumb */
	breadcrumbGlobalBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	breadcrumbGlobalBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	breadcrumbGlobalBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	breadcrumbGlobalBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	breadcrumbGlobalBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	/** Hover Image for fb breadcrumb */
	breadcrumbGlobalBgHoverBackgroundImageUrl: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	breadcrumbGlobalBgHoverBackgroundImagePosition: {
		type: 'object',
		default: {
			Desktop: { x: '0.5', y: '0.5' },
			Tablet: { x: '', y: '' },
			Mobile: { x: '', y: '' }
		}
	},
	breadcrumbGlobalBgHoverBackgroundImageAttachment: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	breadcrumbGlobalBgHoverBackgroundImageRepeat: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	breadcrumbGlobalBgHoverBackgroundImageSize: {
		type: 'object',
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	/** End Background for fb breadcrumb */

	/** Start Border */
	breadcrumbGlobalBorder: {
		type: 'string',
		default: 'none',
	},
	breadcrumbGlobalBorderColorSwitcher : {
		type: 'string',
		default: 'normal'
	},
	breadcrumbGlobalBorderColor: {
		type: 'string',
		default: ''
	},
	breadcrumbGlobalBorderHoverColor: {
		type: 'string',
	},
	breadcrumbGlobalBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	breadcrumbGlobalBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalBorderLink : {
		type : 'boolean',
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	breadcrumbGlobalBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	breadcrumbGlobalBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	breadcrumbGlobalBorderRadiusLink : {
		type : 'boolean',
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
    breadcrumbGlobalBoxShadowSwitcher: {
        type: 'string',
        default: 'normal',
    },
	breadcrumbGlobalBoxShadowValues: {
        type: 'array',
        default: [],
    },
    breadcrumbGlobalBoxShadowCssValue: {
        type: 'string',
        default: '',
    },
    breadcrumbGlobalBoxShadowHoverValues: {
        type: 'array',
        default: [],
    },
    breadcrumbGlobalBoxShadowHoverCssValue: {
        type: 'string',
        default: '',
    },
    /** End Global Style */

	breadcrumbDesktopSwitcher: {
        type: 'boolean',
        default: false,
    },
    breadcrumbTabletSwitcher: {
        type: 'boolean',
        default: false,
    },
    breadcrumbMobileSwitcher: {
        type: 'boolean',
        default: false,
    },
    breadcrumbCustomCSS : {
        type: 'string',
        default: '',
    },
	blockStyle: {
        type: 'string',
        default: '',
    },
};
export default attributes;
