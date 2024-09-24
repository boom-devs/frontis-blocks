const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    DeviceType: {
        type: "string",
        default: "Desktop"
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
    socialTag: {
        type: "string",
        default: "h3"
    },
    socialIconShape: {
        type: "string",
        default: "circle"
    },
    socialAlignment: {
        type: "string",
        default: "left",
    },
    socialIconAlignment: {
        type: "string",
        default: "left",
    },
};

export default attributes;
