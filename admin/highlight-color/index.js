import { addFilter } from '@wordpress/hooks';
import renderFrontisHighlightColor from './render';
import { isAllowed } from './visibility';
// import './format';

// Extend attributes for all blocks
function addHighlightAttributes(settings, name) {

    if (!isAllowed(name)) {
        return settings;
    }

    if (typeof settings.attributes !== 'undefined') {
        settings.attributes = {
            ...settings.attributes,
            highlightColor: {
                type: 'string',
                default: '',
            },
            hoverHighlightColor: {
                type: 'string',
                default: '',
            },
        };
    }
    return settings;
}

addFilter(
    'blocks.registerBlockType',
    'frontis-blocks/highlight-color-attributes',
    addHighlightAttributes,
);

addFilter(
	'editor.BlockEdit',
	'frontis-blocks/highlight-color',
	renderFrontisHighlightColor,
);
