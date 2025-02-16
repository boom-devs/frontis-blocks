import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

// the consts defined here should be unique from one another
export const WRAPPER_BG = "wrprBg";
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
export const TITLE_MARGIN = "titleMargin";
export const SUBTITLE_MARGIN = "subtitleMargin";
export const separator_MARGIN = "separatorMargin";
export const separator_LINE_SIZE = "separatorLineSize";
export const separator_ICON_SIZE = "separatorIconSize";
export const separator_WIDTH = "separatorWidth";

export const PRESETS = [
	{ label: __("Preset 1", "frontis-blocks"), value: "preset-1" },
	{ label: __("Preset 2", "frontis-blocks"), value: "preset-2" },
	{ label: __("Preset 3", "frontis-blocks"), value: "preset-3" },
];

export const OVERFLOW_OP = [
    { label: __('Default', 'frontis-blocks'), value: 'default' },
    { label: __('Auto', 'frontis-blocks'), value: 'auto' },
    { label: __('Hidden', 'frontis-blocks'), value: 'hidden' },
    { label: __('Scroll', 'frontis-blocks'), value: 'scroll' },
    { label: __('Clip', 'frontis-blocks'), value: 'clip' },
];

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
];

export const separator_UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const NORMAL_HOVER = [
	{ label: "Normal", value: "normal" },
	{ label: "Hover", value: "hover" },
];

export const separator_TYPE = [
	{ label: __("Line", "frontis-block"), value: "line" },
	{ label: __("Icon", "frontis-block"), value: "icon" },
];

export const separator_POSITION = [
	{ label: __("Top", "frontis-block"), value: "top" },
	{ label: __("Bottom", "frontis-block"), value: "bottom" },
];

export const subheading_POSITION = [
	{ label: __("Top", "frontis-block"), value: "top" },
	{ label: __("Bottom", "frontis-block"), value: "bottom" },
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

export const SEPERATOR_STYLES = [
	{ label: __("Solid", "frontis-block"), value: "solid" },
	{ label: __("Dashed", "frontis-block"), value: "dashed" },
	{ label: __("Dotted", "frontis-block"), value: "dotted" },
	{ label: __("Double", "frontis-block"), value: "double" },
	{ label: __("Groove", "frontis-block"), value: "groove" },
	{ label: __("Outset", "frontis-block"), value: "outset" },
	{ label: __("Ridge", "frontis-block"), value: "ridge" },
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

export const BG_TYPE = [
    { label: __("Image", "frontis-block"), value: "image" },
    { label: __("Color", "frontis-block"), value: "color" },
	
];

export const ICON_ALIGN = [
	{ label: __(<Dashicon icon={"remove"} />), value: "none" },
	{ label: __(<Dashicon icon={"admin-generic"} />), value: "icon" },
];
