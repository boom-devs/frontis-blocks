const attributes = {
	blockID: {
		type: "string",
		default: ""
	},

	// Show Hide Label Attributes
	showDays: {
		type: 'boolean',
		default: true
	},
	showHours: {
		type: 'boolean',
		default: true
	},
	showMinutes: {
		type: 'boolean',
		default: true
	},
	showSeconds: {
		type: 'boolean',
		default: true
	},

	// Label Name Atrributes
	countDownLabelDay: {
		type: "string",
		default: "Days"
	},
	countDownLabelHour: {
		type: "string",
		default: "Hours"
	},
	countDownLabelMinute: {
		type: "string",
		default: "Minutes"
	},
	countDownLabelSecond: {
		type: "string",
		default: "Seconds"
	},
	targetDate: {
		type: "string",
	}
};

export default attributes;
