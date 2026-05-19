const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: ""
    },
	postSwitcher: {
		type: "string",
		default: "grid"
	},

    gridColumnsPerSection: {
		type: "object",
		default: {
			Desktop: "3",
			Tablet: "2",
			Mobile: "1"
		}
	},
	gridGapUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	listGapUnits: {
		type: "object",
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		}
	},
	gridRowGap: {
		type: "object",
		default: {
			Desktop: "16",
			Tablet: "16",
			Mobile: "16"
		}
	},
	gridColumnGap: {
		type: "object",
		default: {
			Desktop: "16",
			Tablet: "16",
			Mobile: "16"
		}
	},

	listRowGap: {
		type: "object",
		default: {
			Desktop: "16",
			Tablet: "16",
			Mobile: "16"
		}
	},

     /** Start Global Setting */
	loopBuilderWrapperGlobalZIndex : {
        type: "object",
        default: {
            Desktop: '',
            Tablet: '',
            Mobile: ''
        }
    },

	loopBuilderWrapperClass : {
		type: "string",
		default: ""
	},
    loopBuilderWrapperCustomCSS: {
        type: "string",
        default: ""
    }
};

export default attributes;
