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
	{ label: __("Default", "frontis-block"), value: "preset-0" },
	{ label: __("Preset 1", "frontis-block"), value: "preset-1" },
	{ label: __("Preset 2", "frontis-block"), value: "preset-2" },
	{ label: __("Preset 3", "frontis-block"), value: "preset-3" },
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

export const EMAIL_ICON_SWITCHER = [
    { label: __('Icon', 'frontis-blocks'), value: 'icon' },
    { label: __('Image', 'frontis-blocks'), value: 'image' },
];

export const EMAIL_ICON_POSITION = [
    { label: __('Left', 'frontis-blocks'), value: 'left' },
    { label: __('Right', 'frontis-blocks'), value: 'right' },
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

export const SELECT_TYPE = [
	{ label: "Front", value: "front" },
	{ label: "Back", value: "back" },
];

export const separator_TYPE = [
	{ label: __("Line", "frontis-block"), value: "line" },
	{ label: __("Icon", "frontis-block"), value: "icon" },
];

export const CONTENT_POSITION = [
	{ label: __("Top", "frontis-block"), value: "top" },
	{ label: __("Right", "frontis-block"), value: "right" },
	{ label: __("Bottom", "frontis-block"), value: "bottom" },
	{ label: __("Left", "frontis-block"), value: "left" },
    { label: __("In Image", "frontis-block"), value: "image" },
];

export const CARD_WRAP_ALIGNMENT = [
    { label: __("Left", "frontis-block"), value: "start" },
    { label: __("Center", "frontis-block"), value: "center" },
	{ label: __("Right", "frontis-block"), value: "end" },
	{ label: __("Between", "frontis-block"), value: "space-between" },
];

export const SOCIAL_ICON_TYPE = [
	{ label: __("In Content", "frontis-block"), value: "content" },
	{ label: __("In Image", "frontis-block"), value: "image" },
];

export const BADGE_POSITION  = [
	{ label: __("In Content", "frontis-block"), value: "content" },
	{ label: __("In Image", "frontis-block"), value: "image" },
];

export const BADGE_ALIGNMENT = [
	{ label: __("Top Left", "frontis-block"), value: "top_left" },
	{ label: __("Top Center", "frontis-block"), value: "top_center" },
	{ label: __("Top Right", "frontis-block"), value: "top_right" },
	{ label: __("Center Left", "frontis-block"), value: "center_left" },
	{ label: __("Center Center", "frontis-block"), value: "center_center" },
	{ label: __("Center Right", "frontis-block"), value: "center_right" },
	{ label: __("Bottom Left", "frontis-block"), value: "bottom_left" },
	{ label: __("Bottom Center", "frontis-block"), value: "bottom_center" },
	{ label: __("Bottom Right", "frontis-block"), value: "bottom_right" },
];

export const IMAGE_SOCIAL_ICON_POSITION = [
	{ label: __("Top Left", "frontis-block"), value: "top_left" },
	{ label: __("Top Center", "frontis-block"), value: "top_center" },
	{ label: __("Top Right", "frontis-block"), value: "top_right" },
	{ label: __("Center Left", "frontis-block"), value: "center_left" },
	{ label: __("Center Center", "frontis-block"), value: "center_center" },
	{ label: __("Center Right", "frontis-block"), value: "center_right" },
	{ label: __("Bottom Left", "frontis-block"), value: "bottom_left" },
	{ label: __("Bottom Center", "frontis-block"), value: "bottom_center" },
	{ label: __("Bottom Right", "frontis-block"), value: "bottom_right" },
];
export const CONTENT_SOCIAL_ICON_POSITION = [
	{ label: __("Top", "frontis-block"), value: "top" },
	{ label: __("Right", "frontis-block"), value: "right" },
	{ label: __("Bottom", "frontis-block"), value: "bottom" },
	{ label: __("Left", "frontis-block"), value: "left" },
];
export const SEPARATOR_POSITION = [
	{ label: __("Top", "frontis-block"), value: "top" },
	{ label: __("Bottom", "frontis-block"), value: "bottom" },
];

export const SOCIAL_ICON_BUTTON = [
	{ label: __("Default", "frontis-block"), value: "default" },
	{ label: __("Button", "frontis-block"), value: "button" },
];

export const SOCIAL_ICON_ANIMATION = [
	{ label: __("Default", "frontis-block"), value: "default" },
	{ label: __("Top", "frontis-block"), value: "top" },
	{ label: __("Right", "frontis-block"), value: "right" },
	{ label: __("Bottom", "frontis-block"), value: "bottom" },
	{ label: __("Left", "frontis-block"), value: "left" },
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
export const iconType = [
	{ label: __("Icon", "frontis-block"), value: "icon" },
	{ label: __("Image", "frontis-block"), value: "image" },
];

export const CONTENT_ALIGN = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
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