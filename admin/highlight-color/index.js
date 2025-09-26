import { addFilter } from '@wordpress/hooks';
import renderFrontisHighlightColor from './render';
// import './format';

// Extend attributes for all blocks
// function addHighlightAttributes(settings, name) {
//     if (typeof settings.attributes !== 'undefined') {
//         settings.attributes = {
//             ...settings.attributes,
//             highlightColor: {
//                 type: 'string',
//                 default: '',
//             },
//             hoverHighlightColor: {
//                 type: 'string',
//                 default: '',
//             },
//         };
//     }
//     return settings;
// }



addFilter(
    'blocks.registerBlockType',
    'frontis-blocks/highlight-color-attributes',
    // addHighlightAttributes,
    () => {
        console.log("Call back function")
    }
);

addFilter(
	'editor.BlockEdit',
	'frontis-blocks/highlight-color',
	renderFrontisHighlightColor,
);
