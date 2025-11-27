const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	blockStyle: {
        type: 'string',
        default: '',
    },
	selectedTemplate: {
		type: "string",
		default: ""
	},
	menuType: {
		type: "string",
		default: "icon"
	},
	closeMenuType: {
		type: "string",
		default: "icon"
	},
	menuPosition: {
		type: "string",
		default: "left"
	},
	hamburgerIcon: {
		type: 'string',
		default: 'align-justify',
	},
	hamburgerText: {
		type: 'string',
		default: 'Menu',
	},
	closeMenuIcon: {
		type: 'string',
		default: 'x',
	},
	closeMenuText: {
		type: 'string',
		default: 'Close',
	},
	iconStyle: {
		type: "string",
		default: "hamburger"
	},
	animation: {
		type: "string",
		default: "fade"
	},
	highlightColor: {
		type: 'string',
		default: '',
	},
	hoverHighlightColor: {
		type: 'string',
		default: '',
	},
	offCanvasPanelWidth: {
        type: 'object',
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },
    offCanvasPanelWidthUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	offCanvasCustomCSS : {
        type: 'string',
        default: '',
    },
};

export default attributes;