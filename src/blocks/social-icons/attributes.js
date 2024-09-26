const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    DeviceType: {
        type: "string",
        default: "Desktop"
    },
    socialIconZIndex : {
        type: "number",
    },
    socialItems: {
        type: "array",
        default: [
            {
                id: 'item-1',
                socialIcon: 'facebook-f',
                socialIconColorSwitcher: 'normal',
                socialIconColor: '#3b5998',
                socialIconHoverColor: '#3b5998',
                socialIconUrl: '#',
                socialIconTargetUrl: false,
            },
            {
                id: 'item-2',
                socialIcon: 'x-twitter',
                socialIconColorSwitcher: 'normal',
                socialIconColor: '#3b5998',
                socialIconHoverColor: '#3b5998',
                socialIconUrl: '#',
                socialIconTargetUrl: false,
            },
            {
                id: 'item-3',
                socialIcon: 'youtube',
                socialIconColorSwitcher: 'normal',
                socialIconColor: '#3b5998',
                socialIconHoverColor: '#3b5998',
                socialIconUrl: '#',
                socialIconTargetUrl: false,
            },
            {
                id: 'item-4',
                socialIcon: 'behance',
                socialIconColorSwitcher: 'normal',
                socialIconColor: '#3b5998',
                socialIconHoverColor: '#3b5998',
                socialIconUrl: '#',
                socialIconTargetUrl: false,
            },
        ],
        items: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    default: ""
                },
                Title: {
                    type: "string",
                    default: ""
                },
                socialIcon: {
                    type: 'string',
                    default: 'check',
                },
                socialIconColorSwitcher: {
                    type: "string",
                    default: "normal"
                },
                socialIconColor: {
                    type: "string"
                },
                socialIconHoverColor: {
                    type: 'string',
                },
                socialIconUrl: {
                    type: "string",
                    default: "",
                },
                socialIconTargetUrl: {
                    type: "boolean",
                },
            }
        }
    },

    socialIconSizeUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    socialIconSizeDesktop: {
        type: "number",
        default: 25
    },
    socialIconSizeTablet: {
        type: "number",
        default: 25
    },
    socialIconSizeMobile: {
        type: "number",
        default: 25
    },

    socialIconPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    socialIconPaddingDesktop: {
        type: "object", 
        default: {
            top: 20,
            bottom: 20,
            left: 20,
            right: 20,
        },
    },
    socialIconPaddingTablet: {
        type: "object", 
        default: {
            top: 15,
            bottom: 15,
            left: 15,
            right: 15,
        },
    },
    socialIconPaddingMobile: {
        type: "object", 
        default: {
            top: 10,
            bottom: 10,
            left: 10,
            right: 10,
        },
    },
    socialIconPaddingLink : {
        type : "boolean",
        default: true
    },

};

export default attributes;
