import { __ } from "@wordpress/i18n";


export const PROGRESS_TEXT_OPTIONS = [
	{ label: __("Text Outside", "frontis-blocks"), value: "text-outSide" },
	{ label: __("Text Inside", "frontis-blocks"), value: "text-inSide" },
];

export const PROGRESSBAR_TYPE = [
	{ label: __("Horizontal", "frontis-blocks"), value: "horizontal" },
	{ label: __("Vertical", "frontis-blocks"), value: "vertical" },
];

export const PROGRESS_NUMBER_POSITION = [
	{ label: __("Default", "frontis-blocks"), value: "default" },
	{ label: __("With Progress Bar", "frontis-blocks"), value: "with-progressbar" },
];

export const Unit_Types = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const NORMAL_HOVER = [
	{ label: "Normal", value: "normal" },
	{ label: "Hover", value: "hover" },
];

export const OVERFLOW_OP = [
    { label: __('Default', 'frontis-blocks'), value: 'default' },
    { label: __('Auto', 'frontis-blocks'), value: 'auto' },
    { label: __('Hidden', 'frontis-blocks'), value: 'hidden' },
    { label: __('Scroll', 'frontis-blocks'), value: 'scroll' },
    { label: __('Clip', 'frontis-blocks'), value: 'clip' },
];

export const HEADING = [
	{ label: __("H1", "frontis-blocks"), value: "h1" },
	{ label: __("H2", "frontis-blocks"), value: "h2" },
	{ label: __("H3", "frontis-blocks"), value: "h3" },
	{ label: __("H4", "frontis-blocks"), value: "h4" },
	{ label: __("H5", "frontis-blocks"), value: "h5" },
	{ label: __("H6", "frontis-blocks"), value: "h6" },
	{ label: __("P", "frontis-blocks"), value: "p" },
	{ label: __("Div", "frontis-blocks"), value: "span" },
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
