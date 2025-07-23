const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: ""
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
			Desktop: "30",
			Tablet: "30",
			Mobile: "30"
		}
	},
	gridColumnGap: {
		type: "object",
		default: {
			Desktop: "30",
			Tablet: "30",
			Mobile: "30"
		}
	},

	listRowGap: {
		type: "object",
		default: {
			Desktop: "30",
			Tablet: "30",
			Mobile: "30"
		}
	},
	listImageSpacing: {
		type: "object",
		default: {
			Desktop: "40",
			Tablet: "30",
			Mobile: "0"
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
