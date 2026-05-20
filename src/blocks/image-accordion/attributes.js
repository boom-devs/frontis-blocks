const attributes = {
	blockID: {
		type: "string",
		default: "",
	},
	blockStyle: {
		type: "string",
		default: "",
	},
	// Preset / trigger
	presetStyle: {
		type: "string",
		default: "preset-1",
	},
	triggerOn: {
		type: "string",
		default: "hover",
	},

	// Accordion items
	accordionItems: {
		type: "array",
		default: [
			{
				id: "1",
				title: "Discover unique",
				subTitle: "",
				imageUrl: "https://placehold.co/1920x1080?text=Default+Image+1",
				imageId: 0,
				iconValue: "fas fa-star",
				iconLibrary: "solid",
				mediaType: "icon",
				iconImageUrl: "",
				buttonText: "Read More",
				buttonUrl: "#",
				buttonExternal: false,
			},
			{
				id: "2",
				title: "Discover unique",
				subTitle: "",
				imageUrl: "https://placehold.co/1920x1080?text=Default+Image+2",
				imageId: 0,
				iconValue: "fas fa-star",
				iconLibrary: "solid",
				mediaType: "icon",
				iconImageUrl: "",
				buttonText: "Read More",
				buttonUrl: "#",
				buttonExternal: false,
			},
			{
				id: "3",
				title: "Discover unique",
				subTitle: "",
				imageUrl: "https://placehold.co/1920x1080?text=Default+Image+3",
				imageId: 0,
				iconValue: "fas fa-star",
				iconLibrary: "solid",
				mediaType: "icon",
				iconImageUrl: "",
				buttonText: "Read More",
				buttonUrl: "#",
				buttonExternal: false,
			},
			{
				id: "4",
				title: "Discover unique",
				subTitle: "",
				imageUrl: "https://placehold.co/1920x1080?text=Default+Image+4",
				imageId: 0,
				iconValue: "fas fa-star",
				iconLibrary: "solid",
				mediaType: "icon",
				iconImageUrl: "",
				buttonText: "Read More",
				buttonUrl: "#",
				buttonExternal: false,
			},
			{
				id: "5",
				title: "Discover unique",
				subTitle: "",
				imageUrl: "https://placehold.co/1920x1080?text=Default+Image+5",
				imageId: 0,
				iconValue: "fas fa-star",
				iconLibrary: "solid",
				mediaType: "icon",
				iconImageUrl: "",
				buttonText: "Read More",
				buttonUrl: "#",
				buttonExternal: false,
			},
		],
	},

	// Layout / General
	containerHeight: {
		type: "object",
		default: { Desktop: 500, Tablet: 400, Mobile: 300 },
	},
	itemsGap: {
		type: "object",
		default: { Desktop: 12, Tablet: 10, Mobile: 8 },
	},
	itemBorderRadius: {
		type: "object",
		default: { Desktop: 50, Tablet: 30, Mobile: 20 },
	},
	itemBorderType: {
		type: "string",
		default: "none",
	},
	itemBorderColor: {
		type: "string",
		default: "#cccccc",
	},
	itemPaddingUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	itemPaddingDesktop: {
		type: "object",
		default: { top: "", right: "", bottom: "", left: "" },
	},
	itemPaddingTablet: {
		type: "object",
		default: { top: "", right: "", bottom: "", left: "" },
	},
	itemPaddingMobile: {
		type: "object",
		default: { top: "", right: "", bottom: "", left: "" },
	},
	itemPaddingLink: {
		type: "boolean",
		default: true,
	},
	itemMarginUnits: {
		type: "object",
		default: { Desktop: "px", Tablet: "px", Mobile: "px" },
	},
	itemMarginDesktop: {
		type: "object",
		default: { top: "", right: "", bottom: "", left: "" },
	},
	itemMarginTablet: {
		type: "object",
		default: { top: "", right: "", bottom: "", left: "" },
	},
	itemMarginMobile: {
		type: "object",
		default: { top: "", right: "", bottom: "", left: "" },
	},
	itemMarginLink: {
		type: "boolean",
		default: true,
	},

	// Overlay
	overlayColor: {
		type: "string",
		default: "rgba(0,0,0,0.55)",
	},
	overlayHoverColor: {
		type: "string",
		default: "rgba(0,0,0,0.25)",
	},

	// Preset 1 — Icon
	iconColor: {
		type: "string",
		default: "#0875FF",
	},
	iconBgColor: {
		type: "string",
		default: "#ffffff",
	},
	iconSize: {
		type: "object",
		default: { Desktop: 18, Tablet: 16, Mobile: 14 },
	},
	iconCircleSize: {
		type: "object",
		default: { Desktop: 44, Tablet: 40, Mobile: 36 },
	},

	// Preset 2 — Dots
	showDots: {
		type: "boolean",
		default: true,
	},
	dotColor: {
		type: "string",
		default: "#ffffff",
	},
	dotSize: {
		type: "object",
		default: { Desktop: 12, Tablet: 10, Mobile: 8 },
	},

	// Preset 2 & 4 — Numbers
	showNumber: {
		type: "boolean",
		default: true,
	},
	numberColor: {
		type: "string",
		default: "rgba(255,255,255,0.65)",
	},
	numberFontSize: {
		type: "object",
		default: { Desktop: 13, Tablet: 12, Mobile: 11 },
	},

	// Typography
	titleColor: {
		type: "string",
		default: "#ffffff",
	},
	titleFontSize: {
		type: "object",
		default: { Desktop: 18, Tablet: 16, Mobile: 14 },
	},
	titleFontWeight: {
		type: "string",
		default: "600",
	},
	subtitleColor: {
		type: "string",
		default: "rgba(255,255,255,0.8)",
	},
	subtitleFontSize: {
		type: "object",
		default: { Desktop: 13, Tablet: 12, Mobile: 11 },
	},

	// Preset 3 — Button
	btnTextColor: {
		type: "string",
		default: "#ffffff",
	},
	btnBgColor: {
		type: "string",
		default: "rgba(255,255,255,0.18)",
	},
	btnBorderColor: {
		type: "string",
		default: "rgba(255,255,255,0.35)",
	},
	btnBorderRadius: {
		type: "object",
		default: { Desktop: 6, Tablet: 6, Mobile: 6 },
	},
	btnFontSize: {
		type: "object",
		default: { Desktop: 13, Tablet: 12, Mobile: 11 },
	},
	btnPaddingY: {
		type: "object",
		default: { Desktop: 8, Tablet: 7, Mobile: 6 },
	},
	btnPaddingX: {
		type: "object",
		default: { Desktop: 18, Tablet: 16, Mobile: 14 },
	},
	itemCustomCSS: {
		type: "string",
		default: "",
	},
};
export default attributes;
