import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import metadata from './block.json';
import FB_Block_Icons from '@Config/fb-blocks-icons';
import deprecated from './deprecated';

registerBlockType(metadata.name, {
  attributes,
  icon: FB_Block_Icons.advanced_image,

  __experimentalLabel( attributes ) {
    const { dynamicImageEnabled, dynamicImageField } = attributes;

    if ( !dynamicImageEnabled ) {
      return __('Advanced Image', 'frontis-blocks');
    }

    switch (dynamicImageField) {
      case 'featured_image':
		return __('Featured Image', 'frontis-blocks');
		case 'avatar_profile':
		return __('Avatar (Profile Image)', 'frontis-blocks');
		
      default:
        return __('Advanced Image', 'frontis-blocks');
    }
  },

  edit: Edit,
  save,
  deprecated,
});
