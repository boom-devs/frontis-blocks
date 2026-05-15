const attributes = {
	blockId: {
		type: "string",
		default: "",
	},
	blockStyle: {
		type: "string",
		default: "",
	},

	imageUrl: {
		type: "string",
		default: "",
	},
	imageId: { 
		type: "number", 
		default: 0 
	},
	imageAlt: { 
		type: "string", 
		default: "" 
	},
	imageSize: { 
		type: "string", 
		default: "cover" 
	},

	hotspots: {
		type: "array",
		default: []
	},
	selectedHotspotId: { 
		type: "string", 
		default: "" 
	},

	deviceType: { 
		type: "string", 
		default: "Desktop" 
	},

	// Hotspot marker styles
	markerSize: { 
		type: "object", 
		default: {} 
	},
	markerSizeUnits: { 
		type: "object", 
		default: {} 
	},
	markerColor: { 
		type: "string", 
		default: "#ff0000" 
	},
	markerHoverColor: { 
		type: "string", 
		default: "" 
	},
	markerBorderWidth: { 
		type: "object", 
		default: {} 
	},
	markerBorderWidthUnits: { 
		type: "object", 
		default: {} 
	},
	markerBorderColor: { 
		type: "string", 
		default: "#ffffff" 
	},
	markerBorderRadius: { 
		type: "object", 
		default: {} 
	},
	markerBorderRadiusUnits: { 
		type: "object", 
		default: {} 
	},

	// Popover styles
	popoverBgColor: { 
		type: "string", 
		default: "#ffffff" 
	},
	popoverWidth: { 
		type: "object", 
		default: {} 
	},
	popoverWidthUnits: { 
		type: "object", 
		default: {} 
	},
	popoverPadding: { 
		type: "object", 
		default: {} 
	},
	popoverPaddingUnits: { 
		type: "object", 
		default: {} 
	},
	popoverBorderRadius: { 
		type: "object", 
		default: {} 
	},
	popoverBorderRadiusUnits: { 
		type: "object", 
		default: {} 
	},
	popoverShadow: { 
		type: "string", 
		default: "0 4px 12px rgba(0, 0, 0, 0.15)" 
	},

	// Title typography
	titleFontFamily: { 
		type: "string", 
		default: "" 
	},
	titleFontSize: { 
		type: "object", 
		default: {} 
	},
	titleFontSizeUnits: { 
		type: "object", 
		default: {} 
	},
	titleFontWeight: { 
		type: "string", 
		default: "600" 
	},
	titleFontStyle: { 
		type: "string", 
		default: "normal" 
	},
	titleColor: { 
		type: "string", 
		default: "#333333" 
	},
	titleMargin: { 
		type: "object", 
		default: {} 
	},
	titleMarginUnits: { 
		type: "object", 
		default: {} 
	},

	// Description typography
	descFontFamily: { 
		type: "string", 
		default: "" 
	},
	descFontSize: { 
		type: "object", 
		default: {} 
	},
	descFontSizeUnits: { 
		type: "object", 
		default: {} 
	},
	descFontWeight: { 
		type: "string", 
		default: "400" 
	},
	descFontStyle: { 
		type: "string", 
		default: "normal" 
	},
	descColor: { 
		type: "string", 
		default: "#666666" 
	},
	descMargin: { 
		type: "object", 
		default: {} 
	},
	descMarginUnits: { 
		type: "object", 
		default: {} 
	},

	// Icon styles
	iconSize: { 
		type: "object", 
		default: {} 
	},
	iconSizeUnits: { 
		type: "object", 
		default: {} 
	},
	iconColor: { 
		type: "string", 
		default: "#ffffff" 
	},

	// Visibility controls (per hotspot - stored in hotspots array)
	// These are moved to each hotspot object

	// Custom CSS
	customCSS: { 
		type: "string", 
		default: "" 
	},
}

export default attributes;