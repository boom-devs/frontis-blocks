import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
    title: __('Loop Builder', 'frontis-blocks'),
    description: __('Create custom post loops with full design control', 'frontis-blocks'),
    category: 'frontis-blocks',
    icon: 'grid-view',
    supports: {
        html: false,
        align: ['wide', 'full'],
    },
    attributes: {
        blockID: {
            type: 'string',
            default: '',
        },
        postType: {
            type: 'string',
            default: 'post',
        },
        postsPerPage: {
            type: 'number',
            default: 3,
        },
        order: {
            type: 'string',
            default: 'desc',
        },
        orderBy: {
            type: 'string',
            default: 'date',
        },
        includedCategories: {
            type: 'array',
            default: [],
        },
        includedTags: {
            type: 'array',
            default: [],
        },
        offset: {
            type: 'number',
            default: 0,
        },
        showFeaturedImage: {
            type: 'boolean',
            default: true,
        },
        showTitle: {
            type: 'boolean',
            default: true,
        },
        showExcerpt: {
            type: 'boolean',
            default: true,
        },
        excerptLength: {
            type: 'number',
            default: 100,
        },
        showReadMore: {
            type: 'boolean',
            default: true,
        },
        readMoreText: {
            type: 'string',
            default: __('Read More', 'frontis-blocks'),
        },
        columns: {
            type: 'number',
            default: 3,
        },
        gap: {
            type: 'number',
            default: 20,
        },
    },
    edit: Edit,
    save: Save,
});