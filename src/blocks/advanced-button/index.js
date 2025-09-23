import { __, sprintf } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import FB_Block_Icons from '@Config/fb-blocks-icons';
import deprecated from './deprecated';

registerBlockType( metadata.name, {
  attributes,
  icon: FB_Block_Icons.advanced_button,

  __experimentalLabel( attributes ) {
    const {
      dynamicTextEnabled,
      dynamicTextSource,
      dynamicTextField,
      buttonText,
    } = attributes;

    if ( dynamicTextEnabled ) {
      switch ( dynamicTextField ) {
        case 'post_title':        return __( 'Post Title', 'frontis-blocks' );
        case 'post_excerpt':      return __( 'Post Excerpt', 'frontis-blocks' );
        case 'post_thumbnail':    return __( 'Featured Image', 'frontis-blocks' );
        case 'post_date':         return __( 'Post Date', 'frontis-blocks' );
        case 'post_time':         return __( 'Post Time', 'frontis-blocks' );
        case 'post_terms':        return __( 'Post Terms', 'frontis-blocks' );
        case 'post_id':           return __( 'Post ID', 'frontis-blocks' );
        case 'comments_number':   return __( 'Comments Number', 'frontis-blocks' );
        case 'author_name':       return __( 'Author Name', 'frontis-blocks' );
        case 'author_first_name': return __( 'Author First Name', 'frontis-blocks' );
        case 'author_last_name':  return __( 'Author Last Name', 'frontis-blocks' );
        case 'author_nickname':   return __( 'Author Nickname', 'frontis-blocks' );
        case 'author_description':return __( 'Author Bio', 'frontis-blocks' );
        case 'author_email':      return __( 'Author Email', 'frontis-blocks' );
        case 'author_url':        return __( 'Author URL', 'frontis-blocks' );
        case 'author_avatar':     return __( 'Author Avatar', 'frontis-blocks' );
        default: {
          if ( dynamicTextSource === 'site_title' )
            return __( 'Site Title', 'frontis-blocks' );
          if ( dynamicTextSource === 'site_tagline' )
            return __( 'Site Tagline', 'frontis-blocks' );
          if ( dynamicTextSource === 'archive_title' )
            return __( 'Archive Title', 'frontis-blocks' );
          if ( dynamicTextSource === 'archive_description' )
            return __( 'Archive Description', 'frontis-blocks' );
          return sprintf(
            __( 'Dynamic (%s)', 'frontis-blocks' ),
            dynamicTextField || dynamicTextSource || '—'
          );
        }
      }
    }

    const raw = String( buttonText || 'Add Text' );
    const plain = raw.replace( /<[^>]+>/g, '' ).trim();
    return plain ? plain.slice( 0, 40 ) : __( 'Advanced Button', 'frontis-blocks' );
  },

  edit: Edit,
  save,
  deprecated,
} );