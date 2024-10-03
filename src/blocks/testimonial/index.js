<<<<<<< HEAD

import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';

registerBlockType( metadata.name, {
	attributes,
	edit: Edit,
	save,
} );
=======

import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';

registerBlockType( metadata.name, {
	attributes,
	edit: Edit,
	save,
} );
>>>>>>> 27c59d133d37688901b0b4f70b07538faaff9329
