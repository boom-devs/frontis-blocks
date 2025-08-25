const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	blockStyle: {
		type: 'string',
		default: ''
	},
	location: {
		type: 'string',
		default: 'Dhaka, Bangladesh'
	},
	officeHours: {
		type: 'number',
		default: 9
	},
	startTime: {
		type: 'string',
		default: '10:00'
	},
	title: {
		type: 'string',
		default: 'Office Status'
	},
	officeStatus: {
		type: 'boolean',
		default: true
	},
	timezones: {
		type: 'array',
		default: []
	}
	
};

export default attributes;