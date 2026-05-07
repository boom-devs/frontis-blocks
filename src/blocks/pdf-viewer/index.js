import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";
import metadata from "./block.json";
import attributes from "./attributes.js";

const pdfIcon = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		width="24"
		height="24"
		aria-hidden="true"
		focusable="false"
	>
		<path d="M14.5 4.5l5 5V19c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h8.5zM15 10h3.5L14.5 6.5V10zM6 19h12V5H6v14z"></path>
	</svg>
);

registerBlockType(metadata.name, {
	attributes,
	icon: pdfIcon,
	edit: Edit,
	save,
});
