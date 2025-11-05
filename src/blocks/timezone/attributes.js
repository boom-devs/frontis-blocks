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
	location: {
		type: 'string',
		default: 'Main Location' 
	},
	timezone: {
		type: 'string',
		default: 'Asia/Dhaka'
	},
	timezones: {
		type: 'array',
		default: []
	},
	timezoneMode: {
		type: 'string',
		default: 'auto'
	},
	startTime: {
		type: 'string',
		default: '10:00 AM'
	},
	endTime: {
		type: 'string',
		default: '6:00 PM'
	},
	officeHours: {
		type: 'string',
		default: '10:00 AM - 6:00 PM'
	},
	officeStatus: {
		type: 'string',
		default: 'Open'
	},
	weekendDays: {
		type: 'array',
		default: []
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
	},
	countdownMessage: {
		type: 'string',
		default: 'Will be finished in {time}'
	},
	entityType: {
		type: 'string',
		default: 'office'
	},
	title: {
		type: 'string',
		default: 'Office Status'
	},
	
	
};

export default attributes;