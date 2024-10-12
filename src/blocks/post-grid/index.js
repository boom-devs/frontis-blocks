
import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

const attributes = {
    boxShadowValues: {
        type: 'array',
        default: [],
    },
    boxShadowCSS: {
        type: 'string',
        default: '',
    },
};

registerBlockType( metadata.name, {
	attributes,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
