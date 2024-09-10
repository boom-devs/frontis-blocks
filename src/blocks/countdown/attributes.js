const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	HeadingColorSwitcher : {
		type: "string",
		default: "normal"
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

	// Label Background Atrributes
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
	targetDate: {
		type: "string",
	},

	// Device Type
	DeviceType: {
		type: "string",
		default: "Desktop"
	},
	// Border Attributes
	HeadingBorder: {
		type: 'string',
		default: "none",
	},
	HeadingBorderColor: {
		type: 'string',
	},
	HeadingBorderHoverColor: {
		type: 'string',
	},
	HeadingBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	HeadingBorderUnits : {
		type: "string",
		default: "px"
	},
	HeadingDesktopBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	HeadingTabBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	HeadingMobileBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	HeadingActiveBorderDevice: {
		type: "string",
		default: "Desktop"
	},
	HeadingBorderLink : {
		type : "boolean",
		default: true
	},
	HeadingBorderRadiusUnits : {
		type: "string",
		default: "px"
	},
	HeadingDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	HeadingTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	HeadingMobileBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	HeadingActiveBorderRadiusDevice: {
		type: "string",
		default: "Desktop"
	},
	HeadingBorderRadiusLink : {
		type : "boolean",
		default: true
	},
};

export default attributes;
