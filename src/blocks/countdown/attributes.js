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

	// Label Name Attributes
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

	// Label Background Attributes
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
	// Box Width & Height
	boxWidth: {
		type: 'number',
		default: '100',
	},
	boxHeight: {
		type: 'number',
		default: '100',
	},
	boxSpaceBetween: {
		type: 'number',
		default: '10',
	},
	// Device Type
	DeviceType: {
		type: "string",
		default: "Desktop"
	},
	// Border Attributes
	BoxBorder: {
		type: 'string',
		default: "none",
	},
	BoxBorderColor: {
		type: 'string',
	},
	BoxBorderHoverColor: {
		type: 'string',
	},
	BoxBorderColorSwitcher : {
		type: "string",
		default: "normal"
	},
	BoxBorderUnits : {
		type: "string",
		default: "px"
	},
	BoxDesktopBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	BoxTabBorderWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	BoxMobileBorderWidth: {
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
	BoxBorderLink : {
		type : "boolean",
		default: true
	},
	BoxBorderRadiusUnits : {
		type: "string",
		default: "px"
	},
	BoxDesktopBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	BoxTabBorderRadiusWidth: {
		type: "object",
		default: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	},
	BoxMobileBorderRadiusWidth: {
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
	BoxBorderRadiusLink : {
		type : "boolean",
		default: true
	},

};

export default attributes;
