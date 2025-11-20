const attributes = {
	blockID: {
		type: 'string',
		default: '',
	},
	// Separator Settings
	separatorType: {
		type: 'string',
		default: 'text', // 'text' or 'icon'
	},
	separatorText: {
		type: 'string',
		default: '/',
	},
	separatorIcon: {
		type: 'string',
		default: 'fas fa-angle-right',
	},
	separatorGap: {
		type: 'number',
		default: 10,
	},
	// Home Settings
	showHomeIcon: {
		type: 'boolean',
		default: true,
	},
	homeIcon: {
		type: 'string',
		default: 'fas fa-home',
	},
	homeText: {
		type: 'string',
		default: 'Home',
	},
	// Item Settings
	showItemIcon: {
		type: 'boolean',
		default: false,
	},
	itemIcon: {
		type: 'string',
		default: 'far fa-file',
	},
	// Style - Typography
	breadcrumbTypography: {
		type: 'object',
		default: {},
	},
	// Style - Colors
	textColor: {
		type: 'string',
		default: '',
	},
	linkColor: {
		type: 'string',
		default: '',
	},
	linkHoverColor: {
		type: 'string',
		default: '',
	},
	separatorColor: {
		type: 'string',
		default: '',
	},
	iconColor: {
		type: 'string',
		default: '',
	},
	// Alignment
	align: {
		type: 'string',
		default: 'flex-start',
	},
};
export default attributes;
