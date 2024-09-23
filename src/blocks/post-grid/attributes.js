export const attributes = {
	DeviceType: {
		type: "string",
		default: "Desktop"
	},
	spacingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'em',
			Mobile: 'px'
		}
	},
	// spacingUnits: {
	// 	type: 'object',
	// 	default: {
	// 		top: 50,
	// 		right: 30,
	// 		bottom: 20,
	// 		left: 10
	// 	}
	// },
	TestimonialDesktopPadding: {
		type: "object",
		default: {
			top: 30,
			bottom: 30,
			left: 30,
			right: 30,
		},
	},
	TestimonialTabPadding: {
		type: "object",
		default: {
			top: 20,
			bottom: 20,
			left: 20,
			right: 20,
		},
	},
	TestimonialMobilePadding: {
		type: "object",
		default: {
			top: 20,
			bottom: 10,
			left: 20,
			right: 20,
		},
	},
	FeatureMarginLink: {
		type: "boolean",
		default: true
	}
}
