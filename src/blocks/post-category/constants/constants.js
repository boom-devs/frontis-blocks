import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";


export const PREMADE_STYLE = [
  { label: 'Style 1', value: 'style-1' },
  { label: 'Style 2', value: 'style-2' },
  // Future: Style-3 placeholder
  // { label: __('Style 3', 'frontis-blocks'), value: 'style-3' }
];


export const SELECTION_TYPE_OPTIONS = [
	{ value: 'none', label: 'Show All' },
	{ value: 'include', label: 'Include Specific' },
	{ value: 'exclude', label: 'Exclude Specific' }
];

export const ORDER_BY_OPTIONS = [
	{ value: 'name', label: 'Name' },
	{ value: 'count', label: 'Count' },
	{ value: 'slug', label: 'Slug' }
];

export const SORT_ORDER_OPTIONS = [
	{ value: 'asc', label: 'Ascending' },
	{ value: 'desc', label: 'Descending' }
];


export const LAYOUT_TYPE_OPTIONS = [
	{ value: 'grid', label: 'Grid' },
	{ value: 'list', label: 'List' }
];


export const LIST_STYLE_OPTIONS = [
	{ value: 'none', label: 'None' },
	{ value: 'bullet', label: 'Bullet' },
	{ value: 'number', label: 'Number' }
];


export const READ_MORE_ICON_ALIGN = [
	{ label: __(<Dashicon icon={"remove"} />), value: "none" },
	{ label: __(<Dashicon icon={"text"} />), value: "icon-text" },
	{ label: __(<Dashicon icon={"format-image"} />), value: "image" },
	{ label: __(<Dashicon icon={"admin-generic"} />), value: "icon-only" },
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