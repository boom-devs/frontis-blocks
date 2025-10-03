import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";


export const LINK_TARGET_OPTIONS = [
    { label: __("Same tab", "frontis-blocks"), value: "_self" },
    { label: __("New tab", "frontis-blocks"), value: "_blank" },
];


export const OVERFLOW_OP = [
    { label: __('Default', 'frontis-blocks'), value: 'default' },
    { label: __('Auto', 'frontis-blocks'), value: 'auto' },
    { label: __('Hidden', 'frontis-blocks'), value: 'hidden' },
    { label: __('Scroll', 'frontis-blocks'), value: 'scroll' },
    { label: __('Clip', 'frontis-blocks'), value: 'clip' },
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

export const IMAGE_OBJECT_FIT = [
    { label: "Cover", value: "cover" },
    { label: "Contain", value: "contain" },
    { label: "Fill", value: "fill" },
    { label: "None", value: "none" },
    { label: "Scale Down", value: "scale-down" },
];

export const IMAGE_SIZES = [
    { label: "Thumbnail", value: "thumbnail" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
    { label: "Full", value: "full" },
];