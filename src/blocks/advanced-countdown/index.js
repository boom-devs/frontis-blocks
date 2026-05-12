import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";
import "./style.scss";
import "./editor.scss";

registerBlockType(metadata.name, {
	...metadata,
	attributes,
	edit: Edit,
	save: Save,
});
