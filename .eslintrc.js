module.exports = {
	root: true,
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	ignorePatterns: [ 'deprecated.js' ],
	rules: {
		'camelcase': 'off',
		'prettier/prettier': 'off',
		'@wordpress/no-global-event-listener': 'off',
		'quotes': [ 'error', 'single', { allowTemplateLiterals: true, avoidEscape: true } ],
		'quote-props': [ 'error', 'consistent-as-needed' ],
		'space-in-parens': ['error', 'always', { exceptions: [ 'empty' ] } ],
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'@wordpress/i18n-text-domain': [ 'error', { allowedTextDomain: 'frontis-blocks' }, ],
	},
	overrides: [
		{
			files: [
				'src/blocks/*/styling.js',
				'src/blocks/*/*/styling.js',
				'src/blocks/*/inline-styles.js',
			],
			rules: {
				// 'quotes': [ 'warn', 'single', { allowTemplateLiterals: true, avoidEscape: true } ],
				'object-shorthand': ['error', 'never'],
				'quote-props': [ 'error', 'always' ],
			},
		},
	],
	globals: {
		fb_blocks_info: true,
		
	},
};
