
import { __ } from '@wordpress/i18n';



const headingAlignmentDefault = 'left';

const attributes = {
	block_id: {
		type: 'string',
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
	},
	headFontWeight: {
		type: 'string',

		
	},
	headFontStyle: {
		type: 'string',
		default: 'normal',

		
	},
	headTransform: {
		type: 'string',

		
    },
    
	headDecoration: {
		type: 'string',

	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
		
	},
	headFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		
	},
	headFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		
	},
	headLineHeightType: {
		type: 'string',
		default: 'em',
		
	},
	headFontSize: {
		type: 'number',

		
	},
	headFontSizeTablet: {
		type: 'number',

		
	},
	headFontSizeMobile: {
		type: 'number',

		
	},
	headLineHeight: {
		type: 'number',

		
	},
	headLineHeightTablet: {
		type: 'number',

		
	},
	headLineHeightMobile: {
		type: 'number',

		
	},
	headLetterSpacing: {
		type: 'number',

		
	},
	headLetterSpacingTablet: {
		type: 'number',

		
	},
	headLetterSpacingMobile: {
		type: 'number',

		
	},
	headLetterSpacingType: {
		type: 'string',
		default: 'px',
		
	},
	
	
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	
	isPreview: {
		type: 'boolean',
		default: false,
	},
	headSpace: {
		type: 'number',
		default: 15
	},
	headSpaceTablet: {
		type:'number'
	},
	headSpaceMobile: {
		type:'number'
	},
	headSpaceType: {
		type: 'string',
		default: 'px',
	}
};

export default attributes;
