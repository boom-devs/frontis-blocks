import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import attributes from './attributes';
import metadata from './block.json';

registerBlockType(metadata.name, {
    ...metadata,
    attributes,
    edit: Edit,
    save,
});