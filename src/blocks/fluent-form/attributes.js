const attributes = {
    blockID: {
        type: "string",
        default: ""
    },
    DeviceType: {
        type: "string",
        default: "Desktop"
    },
	fluentFormGlobalZIndex : {
        type: "number",
    },
	formId: {
		type: 'string'
	},
	showLabels: {
        type: "boolean",
        default: true,
    },
    showPlaceholder: {
        type: "boolean",
        default: true,
    },
    showErrorMessage: {
        type: "boolean",
        default: true,
    },
}
export default attributes;
