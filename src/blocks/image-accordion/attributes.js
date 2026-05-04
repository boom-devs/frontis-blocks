const attributes = {
	// Core block attributes
	deviceType: {
		type: "string",
		default: "Desktop",
	},
	blockID: {
		type: "string",
	},
	blockStyle: {
		type: "string",
		default: "",
	},
	blockRoot: {
		type: "string",
		default: "frontis_block",
	},
	blockMeta: {
		type: "object",
	},

	// Carousel images array
	images: {
		type: "array",
		default: [],
	},

	// Active/main image index
	activeImageIndex: {
		type: "number",
		default: 0,
	},

	// Layout settings
	layoutType: {
		type: "string",
		default: "horizontal", // horizontal or vertical
	},

	// Thumbnail size
	thumbnailSize: {
		type: "object",
		default: {
			width: "80",
			height: "80",
		},
	},

	// Spacing
	spacingUnit: {
		type: "string",
		default: "px",
	},
	mainImageMarginBottom: {
		type: "string",
		default: "20",
	},
	thumbnailGap: {
		type: "string",
		default: "10",
	},

	// Main image dimensions
	mainImageDesktopWidth: {
		type: "string",
		default: "100",
	},
	mainImageDesktopHeight: {
		type: "string",
		default: "auto",
	},

	// Styling
	thumbnailBorderRadius: {
		type: "string",
		default: "4",
	},
	mainImageBorderRadius: {
		type: "string",
		default: "8",
	},
	activeThumbBorderColor: {
		type: "string",
		default: "#007cba",
	},
	activeThumbBorderWidth: {
		type: "string",
		default: "3",
	},

	// Responsive
	showThumbnailsDesktop: {
		type: "boolean",
		default: true,
	},
	showThumbnailsTablet: {
		type: "boolean",
		default: true,
	},
	showThumbnailsMobile: {
		type: "boolean",
		default: false,
	},

	// Global wrapper attributes
	carouselGlobalWraperID: {
		type: "string",
	},
	carouselGlobalWraperClass: {
		type: "string",
	},
};
export default attributes;
