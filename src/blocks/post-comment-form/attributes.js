const attributes = {
	 blockId: {
        type: "string",
        default: "",
    },
    
    // Element Visibility
    showCommentTitle: {
        type: "boolean",
        default: true,
    },
    showComments: {
        type: "boolean",
        default: true,
    },
    showCommentForm: {
        type: "boolean",
        default: true,
    },
    
    // Style Attributes
    commentFormWidth: {
        type: "object",
        default: {
            Desktop: "",
            Tablet: "",
            Mobile: "",
        },
    },
    commentGap: {
        type: "object",
        default: {
            Desktop: "20px",
            Tablet: "",
            Mobile: "",
        },
    },
    avatarSize: {
        type: "object",
        default: {
            Desktop: "64px",
            Tablet: "",
            Mobile: "",
        },
    },
    
    // Responsive Control
    commentFormDesktopSwitcher: {
        type: "boolean",
        default: false,
    },
    commentFormTabletSwitcher: {
        type: "boolean",
        default: false,
    },
    commentFormMobileSwitcher: {
        type: "boolean",
        default: false,
    },
    
    // Advanced
    wrapperId: {
        type: "string",
        default: "",
    },
    wrapperClass: {
        type: "string",
        default: "",
    },
    commentFormGlobalCustomCSS: {
        type: "string",
        default: "",
    },
    
    // Internal
    blockStyle: {
        type: "string",
        default: "",
    },
    
};

export default attributes;
