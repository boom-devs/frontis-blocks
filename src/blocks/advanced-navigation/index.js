
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
	icon: FB_Block_Icons.advanced_navigation,
	edit: Edit,
	save,
} );
	
/**
 * Add custom attributes to core navigation blocks for mega menu functionality
 */
function addMegaMenuAttributes(settings, name) {
    // Target navigation link and submenu blocks
    if (name === 'core/navigation-link' || name === 'core/navigation-submenu') {
        return {
            ...settings,
            attributes: {
                ...settings.attributes,
                enableItemMegaMenu: {
                    type: 'boolean',
                    default: false,
                },
                megaMenuPattern: {
                    type: 'string',
                    default: '',
                },
            },
        };
    }
    return settings;
}

// Register the filter to add custom attributes
addFilter(
    'blocks.registerBlockType',
    'frontis-blocks/add-mega-menu-attributes',
    addMegaMenuAttributes
);