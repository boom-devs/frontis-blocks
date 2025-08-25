const attributes = {
    blockID: {
        type: 'string',
        default: '',
    },
    blockStyle: {
        type: "string",
        default: "",
    },
    shareNetworks: {
        type: 'array',
        default: [
            { id: 'facebook', enabled: true, label: 'Facebook' },
            { id: 'twitter', enabled: true, label: 'Twitter' },
            { id: 'linkedin', enabled: true, label: 'LinkedIn' },
            { id: 'whatsapp', enabled: true, label: 'Whatsapp' },
            { id: 'pinterest', enabled: false, label: 'Pinterest' },
            { id: 'reddit', enabled: false, label: 'Reddit' },
        ]
    },
    iconSize: {
        type: 'number',
        default: 20
    },
    displayStyle: {
        type: 'string',
        default: 'icon'
    },
    alignment: {
        type: 'string',
        default: 'left'
    },
    socialIcon: {
		type: 'string',
		default: '',
	},
    iconFontSize: {
        type: 'object',
        default: {
            Desktop: '20',
            Tablet: '18',
            Mobile: '16'
        }
    },
    iconFontSizeUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    iconSpacing: {
        type: 'object',
        default: {
            Desktop: '12',
            Tablet: '10',
            Mobile: '10'
        }
    },
    iconSpacingUnits: {
        type: 'object',
        default: {
            Desktop: 'px',
            Tablet: 'px',
            Mobile: 'px'
        }
    },
    iconAlignment: {
        type: "object",
        default: {
            Desktop: "left",
            Tablet: "left",
            Mobile: "left",
        },
    },
};

export default attributes;