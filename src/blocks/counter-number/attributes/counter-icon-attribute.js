const counterIconAttributes = {

	// Icon Size
	counterIconSize: {
		type: 'object',
		default: {
			Desktop: '60',
			Tablet: '',
			Mobile: ''
		}
	},
	counterIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},

	// Icon Color
	counterIconColorSwitcher: {
		type: "string",
		default: "normal"
	},
	counterIconColor: {
		type: "string",
		default: "#1C274C"
	},
	counterIconHoverColor: {
		type: 'string',
		default: "#1C274C"
	},

	// margin
	counterIconMarginUnits : {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
	},
	counterIconMarginDesktop: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	counterIconMarginTablet: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	counterIconMarginMobile: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	counterIconMarginLink : {
		type : "boolean",
		default: true
	},

};

export default counterIconAttributes;
