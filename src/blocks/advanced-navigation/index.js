import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';
import attributes from './attributes';
import metadata from './block.json';
import AdvancedNavigationIcon from './icon';
import './style.scss';


registerBlockType(metadata.name, {
    ...metadata,
    icon: AdvancedNavigationIcon,
    attributes,
    edit: Edit,
    save,
});