import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';
import metadata from './block.json';

registerBlockType(metadata.name, {
	...metadata,
	title: __('Loop Builder', 'frontis-blocks'),
	description: __('Create custom post loops with full design control', 'frontis-blocks'),
	category: 'frontis-blocks',
	icon: 'grid-view',
	keywords: [__('Loop', 'frontis-blocks'), __('Posts', 'frontis-blocks'), __('Query', 'frontis-blocks')],
	edit: Edit,
	save,
});