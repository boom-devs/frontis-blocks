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
	countDownBgColor: {
		type: "string"
	},
	countDownLabelBgColorDay: {
		type: 'string',
		default: '#6B4EFF',
	},
	countDownLabelBgColorHour: {
		type: 'string',
		default: '#6B4EFF',
	},
	countDownLabelBgColorMinute: {
		type: 'string',
		default: '#6B4EFF',
	},
	countDownLabelBgColorSecond: {
		type: 'string',
		default: '#6B4EFF',
	},
	countDownTitleColor: {
		type: "string"
	},
	countDownTextColor: {
		type: "string"
	},
	countDownTitleFontSize: {
		type: "number"
	},
	countDown_Text_Font_Size: {
		type: "number"
	},
	targetDate: {
		type: "string",
	}
};

export default attributes;
