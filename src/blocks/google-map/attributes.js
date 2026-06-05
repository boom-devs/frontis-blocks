const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	blockStyle: {
		type: 'string',
		default: ''
	},
	deviceType: {
		type: 'string',
		default: 'Desktop'
	},
	googleMapLocation: {
		type: "string",
		default: "BoomDevs"
	},
	googleMapWidth: {
		type: 'object',
		default: {
			Desktop: '100',
			Tablet: '100',
			Mobile: '100'
		}
	},
	googleMapWidthUnits: {
		type: 'object',
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%',
		}
	},
	googleMapHeight: {
		type: 'object',
		default: {
			Desktop: '500',
			Tablet: '400',
			Mobile: '300'
		}
	},
	googleMapHeightUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	googleMapZoomLevel: {
		type: 'number',
		default: 10,
	},
	googleMapMapType: {
		type: 'string',
		default: 'm',
	},


	/** Start Padding */
	googleMapPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	googleMapPaddingDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	googleMapPaddingTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	googleMapPaddingMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	googleMapPaddingLink: {
		type: "boolean",
		default: true
	},
	/** End Padding */

	/** Start Margin */
	googleMapMarginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	googleMapMarginDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	googleMapMarginTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	googleMapMarginMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	googleMapMarginLink: {
		type: "boolean",
		default: true
	},
	/** End Margin */


	/** Start Background */
	googleMapBgColorSwitcher: {
		type: "string",
		default: "normal"
	},
	googleMapNormalBackgroundType: {
		type: "string",
		default: "classic",
	},
	googleMapNormalClassicColor: {
		type: "string",
		default: "",
	},
	googleMapNormalGradientColor: {
		type: "string",
		default: null,
	},
	googleMapNormalCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	googleMapNormalCustomGradientInputValue: {
		type: "string",
		default: "",
	},

	googleMapHoverBackgroundType: {
		type: "string",
		default: "classic",
	},
	googleMapHoverClassicColor: {
		type: "string",
		default: "",
	},
	googleMapHoverGradientColor: {
		type: "string",
		default: null,
	},
	googleMapHoverCustomGradientSwitcher: {
		type: "boolean",
		default: false,
	},
	googleMapHoverCustomGradientInputValue: {
		type: "string",
		default: "",
	},
	/** End Background */

	/** Start Border */
	googleMapBorder: {
		type: 'string',
		default: "none",
	},
	googleMapBorderColorSwitcher: {
		type: "string",
		default: "normal"
	},
	googleMapBorderColor: {
		type: 'string',
		default: ""
	},
	googleMapBorderHoverColor: {
		type: 'string',
	},
	googleMapBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	googleMapBorderDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	googleMapBorderTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	googleMapBorderMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	googleMapBorderLink: {
		type: "boolean",
		default: true
	},
	/** End Border */

	/** Start Border Radius */
	googleMapBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	googleMapBorderRadiusDesktop: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	googleMapBorderRadiusTablet: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	googleMapBorderRadiusMobile: {
		type: "object",
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	googleMapBorderRadiusLink: {
		type: "boolean",
		default: true
	},
	/** End Border Radius */

	/** Start Box Shadow */
	googleMapBoxShadowSwitcher: {
		type: 'string',
		default: 'normal',
	},
	googleMapBoxShadowValues: {
		type: 'array',
		default: [],
	},
	googleMapBoxShadowCssValue: {
		type: 'string',
		default: '',
	},
	googleMapBoxShadowHoverValues: {
		type: 'array',
		default: [],
	},
	googleMapBoxShadowHoverCssValue: {
		type: 'string',
		default: '',
	},
	/** End Box Shadow */



	/** Start Global Setting */
	googleMapGlobalZIndex: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},

	/** Start Class & ID Setting */
	googleMapCustomCSS: {
		type: "string",
		default: "",
	},
	googleMapWraperID: {
		type: "string",
		default: ""
	},

	googleMapWraperClass: {
		type: "string",
		default: ""
	},
	/** End Class & ID Setting */
}
export default attributes;
