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
		default: {} 
	},
	imageHotspot_markerSizeUnits: { 
		type: "object", 
		default: {} 
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
		default: {} 
	},
	imageHotspot_markerBorderWidthUnits: { 
		type: "object", 
		default: {} 
	},
	imageHotspot_markerBorderColor: { 
		type: "string", 
		default: "#ffffff" 
	},
	imageHotspot_markerBorderRadius: { 
		type: "object", 
		default: {} 
	},
	imageHotspot_markerBorderRadiusUnits: { 
		type: "object", 
		default: {} 
	},

	// Popover styles
	imageHotspot_popoverBgColor: { 
		type: "string", 
		default: "#ffffff" 
	},
	imageHotspot_popoverWidth: { 
		type: "object", 
		default: {} 
	},
	imageHotspot_popoverWidthUnits: { 
		type: "object", 
		default: {} 
	},
	imageHotspot_popoverPadding: { 
		type: "object", 
		default: {} 
	},
	imageHotspot_popoverPaddingUnits: { 
		type: "object", 
		default: {} 
	},
	imageHotspot_popoverBorderRadius: { 
		type: "object", 
		default: {} 
	},
	imageHotspot_popoverBorderRadiusUnits: { 
		type: "object", 
		default: {} 
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
		default: {} 
	},
	imageHotspot_titleFontSizeUnits: { 
		type: "object", 
		default: {} 
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
		default: {} 
	},
	imageHotspot_titleMarginUnits: { 
		type: "object", 
		default: {} 
	},

	// Description typography
	imageHotspot_descFontFamily: { 
		type: "string", 
		default: "" 
	},
	imageHotspot_descFontSize: { 
		type: "object", 
		default: {} 
	},
	imageHotspot_descFontSizeUnits: { 
		type: "object", 
		default: {} 
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
		default: {} 
	},
	imageHotspot_descMarginUnits: { 
		type: "object", 
		default: {} 
	},

	// Icon styles
	imageHotspot_iconSize: { 
		type: "object", 
		default: {} 
	},
	imageHotspot_iconSizeUnits: { 
		type: "object", 
		default: {} 
	},
	imageHotspot_iconColor: { 
		type: "string", 
		default: "#ffffff" 
	},

	// Padding
	imageHotspotPaddingUnits: { 
		type: "object", 
		default: {} 
	},
	imageHotspotPaddingDesktop: { 
		type: "object", 
		default: {} 
	},
	imageHotspotPaddingTablet: { 
		type: "object", 
		default: {} 
	},
	imageHotspotPaddingMobile: { 
		type: "object", 
		default: {} 
	},
	imageHotspotPaddingLink: { 
		type: "boolean", 
		default: true 
	},

	// Margin
	imageHotspotMarginUnits: { 
		type: "object", 
		default: {} 
	},
	imageHotspotMarginDesktop: { 
		type: "object", 
		default: {} 
	},
	imageHotspotMarginTablet: { 
		type: "object", 
		default: {} 
	},
	imageHotspotMarginMobile: { 
		type: "object", 
		default: {} 
	},
	imageHotspotMarginLink: { 
		type: "boolean", 
		default: true 
	},

	// Border
	imageHotspotBorderUnits: { 
		type: "object", 
		default: {} 
	},
	imageHotspotBorderDesktop: { 
		type: "object", 
		default: {} 
	},
	imageHotspotBorderTablet: { 
		type: "object", 
		default: {} 
	},
	imageHotspotBorderMobile: { 
		type: "object", 
		default: {} 
	},
	imageHotspotBorderLink: { 
		type: "boolean", 
		default: true 
	},

	// Border Radius
	imageHotspotBorderRadiusUnits: { 
		type: "object", 
		default: {} 
	},
	imageHotspotBorderRadiusDesktop: { 
		type: "object", 
		default: {} 
	},
	imageHotspotBorderRadiusTablet: { 
		type: "object", 
		default: {} 
	},
	imageHotspotBorderRadiusMobile: { 
		type: "object", 
		default: {} 
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