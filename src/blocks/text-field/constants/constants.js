
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
export const FIELD_TYPES = [
	{ label: __("Text", "frontis-block"), value: "text" },
	{ label: __("Email", "frontis-block"), value: "email" },
	{ label: __("Number", "frontis-block"), value: "number" },
];

export const OVERFLOW_OP = [
    { label: __('Default', 'frontis-blocks'), value: 'default' },
    { label: __('Auto', 'frontis-blocks'), value: 'auto' },
    { label: __('Hidden', 'frontis-blocks'), value: 'hidden' },
    { label: __('Scroll', 'frontis-blocks'), value: 'scroll' },
    { label: __('Clip', 'frontis-blocks'), value: 'clip' },
];