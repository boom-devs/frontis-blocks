import { __ } from '@wordpress/i18n';
import { Dashicon } from '@wordpress/components';

export const ICON_ALIGN = [
	{ label: __(<Dashicon icon={"text"} />), value: "icon-text" },
	{ label: __(<Dashicon icon={"format-image"} />), value: "image" },
];

export const BORDER_STYLES = [
	{ label: __("None", "frontis-blocks"), value: "none" },
	{ label: __("Solid", "frontis-blocks"), value: "solid" },
	{ label: __("Dashed", "frontis-blocks"), value: "dashed" },
	{ label: __("Dotted", "frontis-blocks"), value: "dotted" },
	{ label: __("Double", "frontis-blocks"), value: "double" },
	{ label: __("Groove", "frontis-blocks"), value: "groove" },
	{ label: __("Outset", "frontis-blocks"), value: "outset" },
	{ label: __("Ridge", "frontis-blocks"), value: "ridge" },
];