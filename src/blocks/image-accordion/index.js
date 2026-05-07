/**
 * index.js
 * Registers the Image Accordion Gutenberg block.
 */

import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";

import metadata from "./block.json";
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";

registerBlockType(metadata.name, {
	...metadata,
	attributes,
	edit: Edit,
	save: Save,
});
