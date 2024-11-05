
import { __ } from "@wordpress/i18n";
export const MEDIA_TYPES = [
    { label: __("image", "frontis-blocks"), value: "image" },
    { label: __("icon", "frontis-blocks"), value: "icon" },
    { label: __("none", "frontis-blocks"), value: "none" },
];

export const BORDER_STYLES = [
	{ label: __("None", "frontis-block"), value: "none" },
	{ label: __("Solid", "frontis-block"), value: "solid" },
	{ label: __("Dashed", "frontis-block"), value: "dashed" },
	{ label: __("Dotted", "frontis-block"), value: "dotted" },
	{ label: __("Double", "frontis-block"), value: "double" },
	{ label: __("Groove", "frontis-block"), value: "groove" },
	{ label: __("Outset", "frontis-block"), value: "outset" },
	{ label: __("Ridge", "frontis-block"), value: "ridge" },
];