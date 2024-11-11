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
import FB_Block_Icons from "@Config/fb-blocks-icons";

registerBlockType(metadata.name, {
    ...metadata,
    icon: FB_Block_Icons.column,
    attributes,
    edit: Edit,
    save: Save,
});