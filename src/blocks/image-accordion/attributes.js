/**
 * attributes.js
 * Defines every block attribute for the Image Accordion block.
 */
const attributes = {
	// ── Preset / trigger ─────────────────────────────────────────
	presetStyle: {
		type: "string",
		default: "preset-1",
	},
	triggerOn: {
		type: "string",
		default: "hover",
	},

	// ── Accordion items ───────────────────────────────────────────
	accordionItems: {
		type: "array",
		default: [
			{
				id: "1",
				title: "Discover unique",
				subTitle: "",
				imageUrl: "",
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
				imageUrl: "",
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
				imageUrl: "",
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
				imageUrl: "",
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
				imageUrl: "",
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

	// ── Layout ────────────────────────────────────────────────────
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

	// ── Overlay ───────────────────────────────────────────────────
	overlayColor: {
		type: "string",
		default: "rgba(0,0,0,0.55)",
	},

	// ── Preset 1 — Icon ───────────────────────────────────────────
	iconColor: {
		type: "string",
		default: "#0875FF",
	},

	// ── Preset 2 — Dots ──────────────────────────────────────────
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

	// ── Preset 2 & 4 — Numbers ────────────────────────────────────
	showNumber: {
		type: "boolean",
		default: true,
	},
	numberColor: {
		type: "string",
		default: "#ffffff",
	},

	// ── Typography ────────────────────────────────────────────────
	titleColor: {
		type: "string",
		default: "#ffffff",
	},
	subtitleColor: {
		type: "string",
		default: "rgba(255,255,255,0.8)",
	},

	// ── Preset 3 — Button ─────────────────────────────────────────
	btnTextColor: {
		type: "string",
		default: "#ffffff",
	},
	btnBgColor: {
		type: "string",
		default: "rgba(255,255,255,0.18)",
	},
};

export default attributes;
