/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

const attributes = {
	DeviceType: {
		type: 'string',
		default: 'Desktop'
	},
	rangeValue: {
		type: 'object',
		default: {
			Desktop: 40,
			Tablet: 30,
			Mobile: 20
		}
	},
<<<<<<< HEAD

=======
>>>>>>> 27c59d133d37688901b0b4f70b07538faaff9329
	rangeUnit: {
		type: 'object',
		default: {
			Desktop: 'px',
<<<<<<< HEAD
			Tablet: 'px',
			Mobile: 'px',
		}
	},
=======
			Tablet: 'em',
			Mobile: '%',
		}
	}
>>>>>>> 27c59d133d37688901b0b4f70b07538faaff9329
}

registerBlockType( metadata.name, {
	attributes,
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	save,
} );
