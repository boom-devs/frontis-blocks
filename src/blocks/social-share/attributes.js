const attributes = {
    blockID: {
        type: 'string',
        default: '',
    },
    shareNetworks: {
        type: 'array',
        default: [
            { id: 'facebook', enabled: true, label: 'Facebook' },
            { id: 'twitter', enabled: true, label: 'Twitter' },
            { id: 'linkedin', enabled: true, label: 'LinkedIn' },
            { id: 'pinterest', enabled: false, label: 'Pinterest' },
            { id: 'reddit', enabled: false, label: 'Reddit' },
            { id: 'email', enabled: false, label: 'Email' }
        ]
    },
    iconSize: {
        type: 'number',
        default: 24
    },
    iconSpacing: {
        type: 'number',
        default: 10
    },
    iconColor: {
        type: 'string',
        default: '#333333'
    },
    iconBgColor: {
        type: 'string',
        default: '#ffffff'
    },
    displayStyle: {
        type: 'string',
        default: 'icon'
    },
    alignment: {
        type: 'string',
        default: 'left'
    }
};

export default attributes;