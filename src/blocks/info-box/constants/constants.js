import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const PRESETS = [
	{ label: __("Preset 1", "frontis-blocks"), value: "preset-1" },
	{ label: __("Preset 2", "frontis-blocks"), value: "preset-2" },
	{ label: __("Preset 3", "frontis-blocks"), value: "preset-3" },
    { label: __("Preset 4", "frontis-blocks"), value: "preset-4" },
    { label: __("Preset 5", "frontis-blocks"), value: "preset-5" },
    // { label: __("Preset 6", "frontis-blocks"), value: "preset-6" },
];

export const mediaType = [
	{ label: __("Icon", "frontis-block"), value: "icon" },
	{ label: __("Image", "frontis-block"), value: "image" },
];

export const TEXT_ALIGN = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
	{ label: __(<Dashicon icon={"menu"} />), value: "justify" }
];

export const HEADING = [
	{ label: __("H1", "frontis-block"), value: "h1" },
	{ label: __("H2", "frontis-block"), value: "h2" },
	{ label: __("H3", "frontis-block"), value: "h3" },
	{ label: __("H4", "frontis-block"), value: "h4" },
	{ label: __("H5", "frontis-block"), value: "h5" },
	{ label: __("H6", "frontis-block"), value: "h6" },
	{ label: __("P", "frontis-block"), value: "p" },
	{ label: __("Div", "frontis-block"), value: "span" },
];

export const OVERFLOW_OP = [
    { label: __('Default', 'frontis-blocks'), value: 'default' },
    { label: __('Auto', 'frontis-blocks'), value: 'auto' },
    { label: __('Hidden', 'frontis-blocks'), value: 'hidden' },
    { label: __('Scroll', 'frontis-blocks'), value: 'scroll' },
    { label: __('Clip', 'frontis-blocks'), value: 'clip' },
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

export const ICON_POSITION = [
	{ label: __("Left", "frontis-block"), value: "left" },
	{ label: __("Right", "frontis-block"), value: "right" },
];

export const INFO_ICON_POSITION = [
    { label: __("Top", "frontis-block"), value: "top" },
    { label: __("Right", "frontis-block"), value: "right" },
	{ label: __("Left", "frontis-block"), value: "left" },
	{ label: __("Bottom", "frontis-block"), value: "bottom" },
];

export const INFO_ICON_VERTICAL_POSITION = [
    { label: __("Top", "frontis-block"), value: "v-top" },
    { label: __("Middle", "frontis-block"), value: "v-middle" },
	{ label: __("Bottom", "frontis-block"), value: "v-bottom" },
];

export const INFO_WRAP_ALIGNMENT = [
    { label: __("Left", "frontis-block"), value: "start" },
    { label: __("Center", "frontis-block"), value: "center" },
	{ label: __("Right", "frontis-block"), value: "end" },
	{ label: __("Between", "frontis-block"), value: "space-between" },
];

export const BG_TYPE = [
    { label: __("Image", "frontis-block"), value: "image" },
    { label: __("Color", "frontis-block"), value: "color" },
	
];

