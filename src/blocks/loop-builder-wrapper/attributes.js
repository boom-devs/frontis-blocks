const attributes = {
    blockId: {
        type: "string",
        default: ""
    },
    blockStyle: {
        type: "string",
        default: ""
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

    /** Start Class & ID Setting */
	loopBuilderWrapperID : {
		type: "string",
		default: ""
	},

	loopBuilderWrapperClass : {
		type: "string",
		default: ""
	},
	/** End Class & ID Setting */
    loopBuilderWrapperCustomCSS: {
        type: "string",
        default: ""
    }
};

export default attributes;
