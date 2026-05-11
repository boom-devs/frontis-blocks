import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import metadata from "./block.json";
import attributes from "./attributes";
import Edit from "./edit";
import Save from "./save";
import deprecated from "./deprecated";

import "./style.scss";
import "./editor.scss";

registerBlockType(metadata.name, {
	...metadata,
	attributes,
	edit: Edit,
	save: Save,
	deprecated,
});
