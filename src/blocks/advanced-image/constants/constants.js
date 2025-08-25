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
    { label: __("Preset 1", "frontis-block"), value: "preset-1" },
    { label: __("Preset 2", "frontis-block"), value: "preset-2" },
    { label: __("Preset 3", "frontis-block"), value: "preset-3" },
    { label: __("Preset 4", "frontis-block"), value: "preset-4" },
    { label: __("Preset 5", "frontis-block"), value: "preset-5" },
];

export const OVERFLOW_OP = [
    { label: __('Default', 'frontis-blocks'), value: 'default' },
    { label: __('Auto', 'frontis-blocks'), value: 'auto' },
    { label: __('Hidden', 'frontis-blocks'), value: 'hidden' },
    { label: __('Scroll', 'frontis-blocks'), value: 'scroll' },
    { label: __('Clip', 'frontis-blocks'), value: 'clip' },
];

export const STYLES = [
    { label: __("Square", "frontis-block"), value: "square" },
    { label: __("Octagon", "frontis-block"), value: "octagon" },
    { label: __("Triangle", "frontis-block"), value: "triangle" },
    { label: __("Rhombus", "frontis-block"), value: "rhombus" },
    { label: __("Hexagon", "frontis-block"), value: "hexagon" },
    { label: __("Bevel", "frontis-block"), value: "bevel" },
];

export const TITLE_POSITION = [
    { label: __("Center", "frontis-block"), value: "center" },
    { label: __("Center Left", "frontis-block"), value: "center-left" },
    { label: __("Center Right", "frontis-block"), value: "center-right" },
    { label: __("Top Left", "frontis-block"), value: "top-left" },
    { label: __("Top Center", "frontis-block"), value: "top-center" },
    { label: __("Top Right", "frontis-block"), value: "top-right" },
    { label: __("Bottom Left", "frontis-block"), value: "bottom-left" },
    { label: __("Bottom Center", "frontis-block"), value: "bottom-center" },
    { label: __("Bottom Right", "frontis-block"), value: "bottom-right" },
    { label: __("Vertically Center", "frontis-block"), value: "vertical-center" },
];

export const HOVER_EFFECTS = [
    { label: __("No Effect", "frontis-blocks"), value: "no-effect", },
    { label: __("Zoom In", "frontis-blocks"), value: "zoom-in", },
    { label: __("Zoom Out", "frontis-blocks"), value: "zoom-out", },
    { label: __("Slide", "frontis-blocks"), value: "slide", },
    { label: __("Blur", "frontis-blocks"), value: "blur", },
    { label: __("Overlay", "frontis-blocks"), value: "overlay", },
    { label: __("Tilt", "frontis-blocks"), value: "tilt", },
    { label: __("Skew", "frontis-blocks"), value: "skew", },
];

export const AUTO_FIT = [
    { label: __("Cover", "frontis-blocks"), value: "cover", },
    { label: __("Fill", "frontis-blocks"), value: "fill", },
    { label: __("Contain", "frontis-blocks"), value: "contain", },
];

export const UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "em", value: "em" },
];

export const NORMAL_HOVER = [
    { label: "Normal", value: "normal" },
    { label: "Hover", value: "hover" },
];

export const ICON_ALIGN = [
    { label: __(<Dashicon icon={"remove"} />), value: "no-icon" },
    { label: __(<Dashicon icon={"admin-generic"} />), value: "icon" },
    { label: __(<Dashicon icon={"info"} />), value: "icon-only" },
];

export const TEXT_ALIGN = [
    { label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
    { label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
    { label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
    { label: __(<Dashicon icon={"menu"} />), value: "justify" }
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

export const SEPERATOR_STYLES = [
    { label: __("Solid", "frontis-blocks"), value: "solid" },
    { label: __("Dashed", "frontis-blocks"), value: "dashed" },
    { label: __("Dotted", "frontis-blocks"), value: "dotted" },
    { label: __("Double", "frontis-blocks"), value: "double" },
    { label: __("Groove", "frontis-blocks"), value: "groove" },
    { label: __("Outset", "frontis-blocks"), value: "outset" },
    { label: __("Ridge", "frontis-blocks"), value: "ridge" },
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