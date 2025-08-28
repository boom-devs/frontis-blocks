import { addFilter } from '@wordpress/hooks';

addFilter(
    'blocks.registerBlockType',
    'frontis-blocks/add-highlight-attr',
    ( settings ) => {
        settings.attributes = {
            ...settings.attributes,
            highlightColor: {
                type: 'string',
                default: '',
            },
        };
        return settings;
    }
);
