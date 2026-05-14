const attributes = {
	itemNumber: {
		type: 'number',
		default: 1,
	},
	stackCardItemBgColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	stackCardItemBgNormalBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	stackCardItemBgNormalClassicColor: {
		type: 'string',
		default: '',
	},
	stackCardItemBgNormalGradientColor: {
		type: 'string',
		default: null,
	},
	stackCardItemBgNormalCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	stackCardItemBgNormalCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	stackCardItemBgHoverBackgroundType: {
		type: 'string',
		default: 'classic',
	},
	stackCardItemBgHoverClassicColor: {
		type: 'string',
		default: '',
	},
	stackCardItemBgHoverGradientColor: {
		type: 'string',
		default: null,
	},
	stackCardItemBgHoverCustomGradientSwitcher: {
		type: 'boolean',
		default: false,
	},
	stackCardItemBgHoverCustomGradientInputValue: {
		type: 'string',
		default: '',
	},
	stackCardItemPaddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	stackCardItemPaddingDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardItemPaddingTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardItemPaddingMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardItemPaddingLink: {
		type: 'boolean',
		default: true,
	},
	stackCardItemBorder: {
		type: 'string',
		default: 'none',
	},
	stackCardItemBorderColorSwitcher: {
		type: 'string',
		default: 'normal',
	},
	stackCardItemBorderColor: {
		type: 'string',
		default: '',
	},
	stackCardItemBorderHoverColor: {
		type: 'string',
		default: '',
	},
	stackCardItemBorderUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	stackCardItemBorderDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardItemBorderTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardItemBorderMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardItemBorderLink: {
		type: 'boolean',
		default: true,
	},
	stackCardItemBorderRadiusUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px',
		},
	},
	stackCardItemBorderRadiusDesktop: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardItemBorderRadiusTablet: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardItemBorderRadiusMobile: {
		type: 'object',
		default: {
			top: '',
			bottom: '',
			left: '',
			right: '',
		},
	},
	stackCardItemBorderRadiusLink: {
		type: 'boolean',
		default: true,
	},
	_fb_init: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
