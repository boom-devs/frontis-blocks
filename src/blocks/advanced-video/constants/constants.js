import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const UNIT_TYPES = [
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

export const ICON_ALIGN = [
	{ label: __("None"), value: "none" },
	{ label: __("Icon"), value: "icon" },
];

export const TEXT_ALIGN = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
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
