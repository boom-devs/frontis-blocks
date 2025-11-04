const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	blockStyle: {
		type: 'string',
		default: ''
	},
	highlightColor: {
		type: 'string',
		default: '',
	},
	hoverHighlightColor: {
		type: 'string',
		default: '',
	},
	timezoneMode: {
		type: 'string',
		default: 'auto'
	},
	location: {
		type: 'string',
		default: 'Dhaka, Bangladesh' 
	},
	timezone: {
		type: 'string',
		default: 'Asia/Dhaka'
	},
	timezones: {
		type: 'array',
		default: []
	},
	officeHours: {
		type: 'number',
		default: '10:00 AM - 6:00 PM'
	},
	startTime: {
		type: 'string',
		default: '10:00 AM'
	},
	endTime: {
		type: 'string',
		default: '6:00 PM'
	},
	title: {
		type: 'string',
		default: 'Office Status'
	},
	officeStatus: {
		type: 'string',
		default: 'Open'
	},
	weekendDays: {
		type: 'array',
		default: [0, 6]
	},
	holidays: {
		type: 'array',
		default: []
	},
	useMonthlySchedule: {
		type: 'boolean',
		default: false
	},
	monthlySchedules: {
		type: 'array',
		default: []
	}
	
	
};

export default attributes;