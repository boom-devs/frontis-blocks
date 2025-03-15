const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	location: {
		type: 'string',
		default: 'Dhaka'
	},
	officeHours: {
		type: 'number',
		default: 8
	},
	startTime: {
		type: 'string',
		default: '09:00'
	},
	title: {
		type: 'string',
		default: 'Office Status'
	},
	timezones: {
		type: 'array',
		default: []
	}
	
};

export default attributes;