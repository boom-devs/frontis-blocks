import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import teamMemberContentAttributes from './attributes/team-member-content-attributes.js';
import teamMemberImageAttributes from './attributes/team-member-image-attributes.js';
import teamMemberNameAttributes from './attributes/team-member-name-attributes.js';
import teamMemberDesignationAttributes from './attributes/team-member-designation-attributes.js';
import teamMemberSocialProfileAttributes from "./attributes/team-member-social-profile-attributes.js";
import boxBorderAttributes from './attributes/box-border.js';

// Merge attributes
const combinedAttributes = {
	...attributes,
	...teamMemberContentAttributes,
	...teamMemberImageAttributes,
	...teamMemberNameAttributes,
	...teamMemberDesignationAttributes,
	...teamMemberSocialProfileAttributes,
	...boxBorderAttributes,
};
registerBlockType( metadata.name, {
	attributes: combinedAttributes,
	edit: Edit,
	save,
} );
