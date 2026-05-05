import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import attributes from "./attributes.js";
import FB_Block_Icons from "@Config/fb-blocks-icons";
import { ImageAccordionPreset } from "./presets";
import { defaultImageAccordionPreset } from "./presets";

const { name, title, description, category, icon, supports } = metadata;

/**
 * Register block
 */

registerBlockType(metadata.name, {
	attributes,
	icon: FB_Block_Icons.imageAccordion,
	// icon: FB_Block_Icons.imageAccordion,
	edit: Edit,
	save: save,
});
