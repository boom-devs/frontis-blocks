const attributes = {
	//  Core
	blockID: {
		type: "string",
		default: "",
	},
	blockStyle: {
		type: "string",
		default: "",
	},
	//  Content
	presetStyle: { type: "string", default: "preset-1" },
	dueDateTime: { type: "string", default: "" },
	startDateTime: { type: "string", default: "" },
	footerText: { type: "string", default: "Until Morning Digest" },
	showIcon: { type: "boolean", default: true },
	iconUrl: { type: "string", default: "" },
	iconId: { type: "number", default: 0 },

	//  Container (all presets)
	containerSize: { type: "number", default: 49 },
	progressBarSize: { type: "number", default: 524 },
	containerBgColor: { type: "string", default: "#f2556a" },
	containerBgImage: { type: "string", default: "" },
	containerBgImageId: { type: "number", default: 0 },
	containerBorderType: { type: "string", default: "none" },
	containerBorderWidth: {
		type: "object",
		default: { top: 0, right: 0, bottom: 0, left: 0 },
	},
	containerBorderColor: { type: "string", default: "#cccccc" },
	containerBorderRadius: {
		type: "object",
		default: { top: 12, right: 12, bottom: 12, left: 12 },
	},
	containerAlignment: { type: "string", default: "center" },
	containerMargin: {
		type: "object",
		default: { top: 0, right: 0, bottom: 0, left: 0 },
	},

	// Icon (preset-1)
	iconSize: { type: "number", default: 60 },
	iconColor: { type: "string", default: "#ffffff" },
	iconBgColor: { type: "string", default: "transparent" },

	//  Countdown Text
	countdownFontSize: { type: "number", default: 72 },
	countdownFontWeight: { type: "string", default: "700" },
	countdownColor: { type: "string", default: "#ffffff" },
	countdownLetterSpacing: { type: "number", default: 0 },
	labelFontSize: { type: "number", default: 14 },
	labelFontWeight: { type: "string", default: "400" },
	labelColor: { type: "string", default: "#ffffff" },

	// Separator (preset-1)
	separatorFontSize: { type: "number", default: 48 },
	separatorFontWeight: { type: "string", default: "300" },
	separatorColor: { type: "string", default: "#ffffff" },
	separatorGap: { type: "number", default: 8 },

	//  SVG Progress Bar (preset-1)
	svgActiveColor: { type: "string", default: "#f0a500" },
	svgInactiveColor: { type: "string", default: "rgba(255,255,255,0.2)" },
	svgStrokeWidth: { type: "number", default: 6 },

	// Footer Text
	footerFontSize: { type: "number", default: 16 },
	footerFontWeight: { type: "string", default: "600" },
	footerColor: { type: "string", default: "#ffffff" },
	footerBgColor: { type: "string", default: "transparent" },
	footerBorderRadius: { type: "number", default: 4 },
	footerPaddingY: { type: "number", default: 4 },
	footerPaddingX: { type: "number", default: 12 },

	//  Preset 2  Dashed progress bar
	p2DashActiveColor: { type: "string", default: "#f0a500" },
	p2DashInactiveColor: { type: "string", default: "rgba(255,255,255,0.25)" },
	p2DashStrokeWidth: { type: "number", default: 6 },
	p2DashGap: { type: "number", default: 4 },
	p2CircleSize: { type: "number", default: 200 },

	// Preset 2 SVG progress bar (outer ring)
	p2SvgActiveColor: { type: "string", default: "#f0a500" },
	p2SvgInactiveColor: { type: "string", default: "rgba(255,255,255,0.15)" },
	p2SvgStrokeWidth: { type: "number", default: 4 },

	//  Preset 3  Timeline bar
	p3BarBgColor: { type: "string", default: "#ffffff" },
	p3BarBorderRadius: { type: "number", default: 50 },
	p3IndicatorBgColor: { type: "string", default: "#f0a500" },
	p3IndicatorBorderRadius: { type: "number", default: 50 },
	p3TimeFontSize: { type: "number", default: 14 },
	p3TimeFontWeight: { type: "string", default: "600" },
	p3TimeColor: { type: "string", default: "#333333" },
	p3CountdownFontSize: { type: "number", default: 13 },
	p3CountdownFontWeight: { type: "string", default: "700" },
	p3CountdownColor: { type: "string", default: "#ffffff" },

	//  Preset 4  Flip card tiles
	p4TileBgColor: { type: "string", default: "#ffffff" },
	p4TileBorderRadius: { type: "number", default: 8 },
	p4NumberFontSize: { type: "number", default: 60 },
	p4NumberFontWeight: { type: "string", default: "800" },
	p4NumberColor: { type: "string", default: "#111111" },
	p4LabelFontSize: { type: "number", default: 11 },
	p4LabelFontWeight: { type: "string", default: "600" },
	p4LabelColor: { type: "string", default: "#111111" },
	p4TileGap: { type: "number", default: 12 },
	p4DashPattern: { type: "string", default: "diagonal" },
	p4LabelAlignment: { type: "string", default: "bottom" },

	// Preset 5  Dot ring circles
	p5DotActiveColor: { type: "string", default: "#ffffff" },
	p5DotInactiveColor: { type: "string", default: "rgba(255,255,255,0.25)" },
	p5DotSize: { type: "number", default: 8 },
	p5DotCount: { type: "number", default: 36 },
	p5CircleSize: { type: "number", default: 160 },
	p5NumberFontSize: { type: "number", default: 48 },
	p5NumberFontWeight: { type: "string", default: "300" },
	p5NumberColor: { type: "string", default: "#ffffff" },
	p5LabelFontSize: { type: "number", default: 13 },
	p5LabelColor: { type: "string", default: "#ffffff" },
	p5Gap: { type: "number", default: 32 },

	// Standard Advanced Attributes
	containerZIndex: { type: "number" },
	containerCustomCSS: { type: "string", default: "" },
	containerDesktop: { type: "boolean", default: false },
	containerTablet: { type: "boolean", default: false },
	containerMobile: { type: "boolean", default: false },
	containerPadding: {
		type: "object",
		default: { top: 40, right: 24, bottom: 40, left: 24 },
	},
};

export default attributes;
