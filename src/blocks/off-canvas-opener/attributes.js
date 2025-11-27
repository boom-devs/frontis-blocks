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
	menuPosition: {
		type: "string",
		default: "left"
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