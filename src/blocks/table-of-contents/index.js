import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import FB_Block_Icons from "@Config/fb-blocks-icons";

registerBlockType( metadata.name, {
	attributes,
	edit: Edit,
	save,
	icon: {
        src: (
            <svg viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg">
                <path d="M3 5h18v2H3z"/>
                <path d="M7 9h14v2H7z"/>
                <path d="M7 13h14v2H7z"/>
                <path d="M7 17h14v2H7z"/>
                <circle cx="4" cy="10" r="1"/>
                <circle cx="4" cy="14" r="1"/>
                <circle cx="4" cy="18" r="1"/>
            </svg>
        ),
        foreground: '#2271b1',
    },
} );

