const attributes = {
	blockID: {
		type: "string",
		default: "",
	},
	blockStyle: {
		type: "string",
		default: "",
	},

	imageHotspot_imageUrl: {
		type: "string",
		default: "",
	},
	imageHotspot_imageId: { 
		type: "number", 
		default: 0 
	},
	imageHotspot_imageAlt: { 
		type: "string", 
		default: "" 
	},
	imageHotspot_imageSize: { 
		type: "string", 
		default: "cover" 
	},
	imageHotspot_imageHeight: {
		type: "object",
		default: {
			Desktop: '500',
			Tablet: '500',
			Mobile: '400'
		}
	},
	imageHotspot_imageHeightUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	imageHotspot_hotspots: {
		type: "array",
		default: []
	},
	imageHotspot_selectedHotspotId: { 
		type: "string", 
		default: "" 
	},

	imageHotspot_deviceType: { 
		type: "string", 
		default: "Desktop" 
	},

	// Hotspot marker styles
	imageHotspot_markerSize: { 
		type: "object", 
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspot_markerSizeUnits: { 
		type: "object", 
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspot_markerHoverSize: {
		type: "object",
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspot_markerHoverSizeUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspot_markerColor: { 
		type: "string", 
		default: "#ff0000" 
	},
	imageHotspot_markerHoverColor: { 
		type: "string", 
		default: "" 
	},
	imageHotspot_markerBorderWidth: { 
		type: "object", 
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspot_markerBorderWidthUnits: { 
		type: "object", 
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspot_markerBorderColor: { 
		type: "string", 
		default: "transparent" 
	},
	imageHotspot_markerBorderRadius: { 
		type: "object", 
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspot_markerBorderRadiusUnits: { 
		type: "object", 
		default: {
			Desktop: '%',
			Tablet: '%',
			Mobile: '%'
		}
	},

	// Popover styles
	imageHotspot_popoverBgColor: { 
		type: "string", 
		default: "#ffffff" 
	},
	imageHotspot_popoverWidth: { 
		type: "object", 
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspot_popoverWidthUnits: { 
		type: "object", 
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspot_popoverPadding: { 
		type: "object", 
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspot_popoverPaddingUnits: { 
		type: "object", 
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspot_popoverBorderRadius: { 
		type: "object", 
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspot_popoverBorderRadiusUnits: { 
		type: "object", 
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspot_popoverShadow: { 
		type: "string", 
		default: "0 4px 12px rgba(0, 0, 0, 0.15)" 
	},

	// Title typography
	imageHotspot_titleFontFamily: { 
		type: "string", 
		default: "" 
	},
	imageHotspot_titleFontSize: { 
		type: "object", 
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspot_titleFontSizeUnits: { 
		type: "object", 
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspot_titleFontWeight: { 
		type: "string", 
		default: "600" 
	},
	imageHotspot_titleFontStyle: { 
		type: "string", 
		default: "normal" 
	},
	imageHotspot_titleColor: { 
		type: "string", 
		default: "#333333" 
	},
	imageHotspot_titleMargin: { 
		type: "object", 
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspot_titleMarginUnits: { 
		type: "object", 
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	// Description typography
	imageHotspot_descFontFamily: { 
		type: "string", 
		default: "" 
	},
	imageHotspot_descFontSize: { 
		type: "object", 
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspot_descFontSizeUnits: { 
		type: "object", 
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspot_descFontWeight: { 
		type: "string", 
		default: "400" 
	},
	imageHotspot_descFontStyle: { 
		type: "string", 
		default: "normal" 
	},
	imageHotspot_descColor: { 
		type: "string", 
		default: "#666666" 
	},
	imageHotspot_descMargin: { 
		type: "object", 
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspot_descMarginUnits: { 
		type: "object", 
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},

	// Icon styles
	imageHotspot_iconSize: { 
		type: "object", 
		default: {
			Desktop: '',
			Tablet: '',
			Mobile: ''
		}
	},
	imageHotspot_iconSizeUnits: { 
		type: "object", 
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspot_iconColor: { 
		type: "string", 
		default: "#ffffff" 
	},

	// Padding
	imageHotspotPaddingUnits: { 
		type: "object", 
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotPaddingDesktop: { 
		type: "object", 
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPaddingTablet: { 
		type: "object", 
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPaddingMobile: { 
		type: "object", 
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotPaddingLink: { 
		type: "boolean", 
		default: true 
	},

	// Margin
	imageHotspotMarginUnits: { 
		type: "object", 
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotMarginDesktop: { 
		type: "object", 
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotMarginTablet: { 
		type: "object", 
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotMarginMobile: { 
		type: "object", 
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotMarginLink: { 
		type: "boolean", 
		default: true 
	},

	// Border
	imageHotspotBorderUnits: { 
		type: "object", 
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotBorderDesktop: { 
		type: "object", 
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotBorderTablet: { 
		type: "object", 
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotBorderMobile: { 
		type: "object", 
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotBorderLink: { 
		type: "boolean", 
		default: true 
	},

	// Border Radius
	imageHotspotBorderRadiusUnits: { 
		type: "object", 
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	imageHotspotBorderRadiusDesktop: { 
		type: "object", 
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotBorderRadiusTablet: { 
		type: "object", 
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotBorderRadiusMobile: { 
		type: "object", 
		default: {
			top: '',
			right: '',
			bottom: '',
			left: ''
		}
	},
	imageHotspotBorderRadiusLink: { 
		type: "boolean", 
		default: true 
	},

	// Custom CSS
	imageHotspot_customCSS: { 
		type: "string", 
		default: "" 
	},
}

export default attributes;