const attributes = {
	blockID: {
		type: "string",
		default: ""
	},
	tocTitle: {
		type: "string",
		default: "Table of Contents"
	},
	collapsible: {
		type: "boolean",
		default: true
	},
	initialCollapsed: {
		type: "boolean",
		default: false
	},
	smoothScroll: {
		type: "boolean",
		default: true
	},
	minHeadingLevel: {
		type: "number",
		default: 2
	},
	maxHeadingLevel: {
		type: "number",
		default: 4
	},
	listStyle: {
		type: "string",
		default: "disc"
	},
	enableDesktopSticky: {
		type: "boolean",
		default: true
	},
	enableMobileCollapsible: {
		type: "boolean",
		default: true
	},
	stickyOffset: {
		type: "number",
		default: 20
	},
	maxHeight: {
		type: "number",
		default: 300
	},
	customClass: {
		type: "string",
		default: ""
	}	

};

export default attributes;