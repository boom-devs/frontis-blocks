const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	blockID: {
		type: 'string',
	},
	code: {
		type: 'string',
		source: 'text',
		selector: 'code',
	},
	language: {
		type: 'string',
		default: 'javascript',
	},
	showLineNumbers: {
		type: 'boolean',
		default: true,
	},
	theme: {
		type: 'string',
		default: 'default',
	},
	fontSize: {
		type: 'number',
		default: 14,
	},
	lineHeight: {
		type: 'number',
		default: 1.5,
	},
	customBackgroundColor: {
		type: 'string',
	},
	customTextColor: {
		type: 'string',
	}
	
};

export default attributes;