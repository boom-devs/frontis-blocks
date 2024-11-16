import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';
import attributes from './attributes';
import metadata from './block.json';
import './style.scss';

import FB_Block_Icons from "@Config/fb-blocks-icons";

registerBlockType(metadata.name, {
  ...metadata,
  attributes,
  icon: FB_Block_Icons.container,
  edit: Edit,
  save,
});