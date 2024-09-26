import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import teamMemberContentAttribute from './attributes/team-member-content-attribute.js';
import teamMemberImageAttribute from './attributes/team-member-image-attribute.js';
import teamMemberNameTypographyAttribute from './attributes/team-member-name-typography-attribute.js';
import teamMemberDesignationTypographyAttribute from './attributes/team-member-designation-typography-attribute.js';
import teamMemberSocialProfileAttribute from "./attributes/team-member-social-profile-attribute.js";
import boxBorderAttributes from './attributes/box-border.js';

// Merge attributes
const combinedAttributes = {
	...attributes,
	...teamMemberContentAttribute,
	...teamMemberImageAttribute,
	...teamMemberNameTypographyAttribute,
	...teamMemberDesignationTypographyAttribute,
	...teamMemberSocialProfileAttribute,
	...boxBorderAttributes,
};
registerBlockType( metadata.name, {
	attributes: combinedAttributes,
	edit: Edit,
	save,
} );
