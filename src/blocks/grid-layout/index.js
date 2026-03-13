import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

// Parent Block
import EditLayout from './edit';
import saveLayout from './save';
import metadataLayout from './block.json';

// Child Block
import EditItem from '../grid-item/edit';
import saveItem from '../grid-item/save';
import metadataItem from '../grid-item/block.json';

registerBlockType(metadataLayout.name, {
	edit: EditLayout,
	save: saveLayout,
});

registerBlockType(metadataItem.name, {
	edit: EditItem,
	save: saveItem,
});
