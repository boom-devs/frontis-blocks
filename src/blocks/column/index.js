/**
 * WordPress dependencies
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import Save from "./save";
// import { ColumnIcon } from "./icon";
import metadata from "./block.json";
import attributes from "./attributes";


registerBlockType(metadata.name, {
    ...metadata,
    attributes,
    edit: Edit,
    save: Save,
});