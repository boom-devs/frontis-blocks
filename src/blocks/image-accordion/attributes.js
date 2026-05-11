const attributes = {
	// Preset / trigger
	presetStyle: {
		type: "string",
		default: "preset-1",
	},
	triggerOn: {
		type: "string",
		default: "hover",
	},

	// Default background images
	defaultBackgroundImages: {
		type: "array",
		default: [
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%237c3aed;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%233b82f6;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23g1)'/%3E%3C/svg%3E",
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230369a1;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%2306b6d4;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23g2)'/%3E%3C/svg%3E",
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23059669;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%2314b8a6;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23g3)'/%3E%3C/svg%3E",
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='g4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f59e0b;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23ef4444;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23g4)'/%3E%3C/svg%3E",
			"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='g5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ec4899;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%238b5cf6;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23g5)'/%3E%3C/svg%3E",
		],
	},

	// Accordion items
	accordionItems: {
		type: "array",
		default: [
			{
				id: "1",
				title: "Discover unique",
				subTitle: "",
				imageUrl:
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='g1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%237c3aed;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%233b82f6;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23g1)'/%3E%3C/svg%3E",
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
				imageUrl:
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='g2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230369a1;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%2306b6d4;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23g2)'/%3E%3C/svg%3E",
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
				imageUrl:
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='g3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23059669;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%2314b8a6;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23g3)'/%3E%3C/svg%3E",
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
				imageUrl:
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='g4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23f59e0b;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23ef4444;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23g4)'/%3E%3C/svg%3E",
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
				imageUrl:
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Cdefs%3E%3ClinearGradient id='g5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23ec4899;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%238b5cf6;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='600' fill='url(%23g5)'/%3E%3C/svg%3E",
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
		type: "number",
		default: 500,
	},
	itemsGap: {
		type: "number",
		default: 12,
	},
	itemBorderRadius: {
		type: "number",
		default: 50,
	},
	itemBorderType: {
		type: "string",
		default: "none",
	},
	itemBorderWidth: {
		type: "object",
		default: { top: 0, right: 0, bottom: 0, left: 0 },
	},
	itemBorderColor: {
		type: "string",
		default: "#cccccc",
	},
	itemPadding: {
		type: "object",
		default: { top: 0, right: 0, bottom: 0, left: 0 },
	},
	itemMargin: {
		type: "object",
		default: { top: 0, right: 0, bottom: 0, left: 0 },
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

	// Preset 1  Icon
	iconColor: {
		type: "string",
		default: "#0875FF",
	},
	iconBgColor: {
		type: "string",
		default: "#ffffff",
	},
	iconSize: {
		type: "number",
		default: 18,
	},
	iconCircleSize: {
		type: "number",
		default: 44,
	},

	// Preset 2  Dots
	showDots: {
		type: "boolean",
		default: true,
	},
	dotColor: {
		type: "string",
		default: "#ffffff",
	},
	dotSize: {
		type: "number",
		default: 12,
	},

	// Preset 2 & 4  Numbers
	showNumber: {
		type: "boolean",
		default: true,
	},
	numberColor: {
		type: "string",
		default: "rgba(255,255,255,0.65)",
	},
	numberFontSize: {
		type: "number",
		default: 13,
	},

	// Typography
	titleColor: {
		type: "string",
		default: "#ffffff",
	},
	titleFontSize: {
		type: "number",
		default: 18,
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
		type: "number",
		default: 13,
	},

	// Preset 3  Button
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
		type: "number",
		default: 6,
	},
	btnFontSize: {
		type: "number",
		default: 13,
	},
	btnPaddingY: {
		type: "number",
		default: 8,
	},
	btnPaddingX: {
		type: "number",
		default: 18,
	},

	// Advanced Typography
	titleFontFamily: {
		type: "string",
		default: "inherit",
	},
	titleLetterSpacing: {
		type: "number",
		default: 0,
	},
	titleLineHeight: {
		type: "number",
		default: 1.2,
	},
	titleTextAlign: {
		type: "string",
		default: "left",
	},
	subtitleFontFamily: {
		type: "string",
		default: "inherit",
	},
	subtitleLetterSpacing: {
		type: "number",
		default: 0,
	},
	subtitleLineHeight: {
		type: "number",
		default: 1.3,
	},
	subtitleTextAlign: {
		type: "string",
		default: "left",
	},

	// Content Positioning (Preset 1)
	contentPositionX: {
		type: "number",
		default: 18,
	},
	contentPositionY: {
		type: "number",
		default: 22,
	},
	contentGap: {
		type: "number",
		default: 12,
	},

	// Icon/Button styling
	iconHoverScale: {
		type: "number",
		default: 1,
	},
	btnHoverBgColor: {
		type: "string",
		default: "rgba(255,255,255,0.35)",
	},
	btnHoverTextColor: {
		type: "string",
		default: "#ffffff",
	},

	// Animation
	transitionDuration: {
		type: "number",
		default: 0.6,
	},
	transitionTiming: {
		type: "string",
		default: "cubic-bezier(0.25,1,0.5,1)",
	},

	// Shadow & Effects
	itemShadow: {
		type: "string",
		default: "none",
	},
	itemShadowColor: {
		type: "string",
		default: "rgba(0,0,0,0.1)",
	},
	itemShadowBlur: {
		type: "number",
		default: 0,
	},
	itemShadowSpread: {
		type: "number",
		default: 0,
	},

	// Preset 2 specific
	preset2ContentAlign: {
		type: "string",
		default: "center",
	},
	preset2ContentPadding: {
		type: "number",
		default: 22,
	},

	// Preset 3 specific
	preset3ContentPaddingX: {
		type: "number",
		default: 22,
	},
	preset3ContentPaddingY: {
		type: "number",
		default: 18,
	},
	preset3ContentGap: {
		type: "number",
		default: 16,
	},

	// Preset 4 specific
	preset4ContentPadding: {
		type: "number",
		default: 12,
	},
	preset4ContentGap: {
		type: "number",
		default: 4,
	},
	preset4SkewAngle: {
		type: "number",
		default: 12,
	},
};

export default attributes;
