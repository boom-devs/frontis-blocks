import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export const STORE_NAME = 'frontis';

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "%", value: "%" },
	{ label: "em", value: "em" },
];

export const NORMAL_HOVER = [
	{ label: __("Normal", "frontis-blocks"), value: "normal" },
	{ label: __("Hover", "frontis-blocks"), value: "hover" },
];

export const OVERFLOW_OP = [
    { label: __('Default', 'frontis-blocks'), value: 'default' },
    { label: __('Auto', 'frontis-blocks'), value: 'auto' },
    { label: __('Hidden', 'frontis-blocks'), value: 'hidden' },
    { label: __('Scroll', 'frontis-blocks'), value: 'scroll' },
    { label: __('Clip', 'frontis-blocks'), value: 'clip' },
];

export const NAVIGATION_LAYOUT = [
	{ label: __('Horizontal', 'frontis-blocks'), value: 'is-horizontal' },
	{ label: __('Vertical', 'frontis-blocks'), value: 'is-vertical' },
];

export const TABS_LAYOUT = [
	{ label: __('Horizontal', 'frontis-blocks'), value: 'horizontal' },
	{ label: __('Vertical', 'frontis-blocks'), value: 'vertical' },
];

export const ICON_POSITION = [
	{ label: __("Left"), value: "left" },
	{ label: __("Right"), value: "right" },
];

export const MULTI_ICON_POSITION = [
	{ label: __("Top", "frontis-blocks"), value: "top" },
	{ label: __("Right", "frontis-blocks"), value: "right" },
	{ label: __("Bottom", "frontis-blocks"), value: "bottom" },
	{ label: __("Left", "frontis-blocks"), value: "left" },
];

export const ICON_ALIGN = [
	{ label: __("None"), value: "none" },
	{ label: __("Icon"), value: "icon" },
];
export const ICON_IMAGE_ALIGN = [
	{ label: __(<Dashicon icon={"remove"} />), value: "none" },
	{ label: __(<Dashicon icon={"admin-generic"} />), value: "icon" },
	{ label: __(<Dashicon icon={"format-image"} />), value: "image" },
];

export const HAMBURGER_MENU_ICON_TYPE = [
	{ label: __("Icon", 'frontis-blocks'), value: 'icon' },
	{ label: __("Text", 'frontis-blocks'), value: 'text' },
];
export const HAMBURGER_MENU_SCREEN = [
	{ label: __("Off", 'frontis-blocks'), value: "never" },
	{ label: __("Mobile", 'frontis-blocks'), value: "mobile" },
	{ label: __("Always", 'frontis-blocks'), value: "always" },
];

export const DISPLAY_HAMBURGER_MENU = [
	{ label: __("Hide", 'frontis-blocks'), value: 'hide' },
	{ label: __("Mobile", 'frontis-blocks'), value: 'mobile' },
    { label: __("Always", 'frontis-blocks'), value: 'always' },
];

export const HORIZONTAL_NAVIGATION_ALIGN = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "items-justified-left" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "items-justified-center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "items-justified-right" },
	{ label: __(<Dashicon icon={"editor-justify"} />), value: "items-justified-space-between" },
];

export const VERTICAL_NAVIGATION_ALIGN = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "items-justified-left" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "items-justified-center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "items-justified-right" },
];

export const TEXT_ALIGN = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "right" },
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

export const FONT_STYLE = [
	{ label: __("Default", "frontis-blocks"), value: "inherit" },
	{ label: __("Normal", "frontis-blocks"), value: "normal" },
	{ label: __("Italic", "frontis-blocks"), value: "italic" },
	{ label: __("Oblique", "frontis-blocks"), value: "oblique" },
];

export const TEXT_TRANSFORM = [
    {
        label: __("Default", "frontis-blocks"),
        value: "none",
        icon: (
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M7 11.5h10V13H7z"></path>
            </svg>
        ),
    },
    {
        label: __("Uppercase", "frontis-blocks"),
        value: "uppercase",
        icon: (
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M6.1 6.8L2.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H6.1zm-.8 6.8L7 8.9l1.7 4.7H5.3zm15.1-.7c-.4-.5-.9-.8-1.6-1 .4-.2.7-.5.8-.9.2-.4.3-.9.3-1.4 0-.9-.3-1.6-.8-2-.6-.5-1.3-.7-2.4-.7h-3.5V18h4.2c1.1 0 2-.3 2.6-.8.6-.6 1-1.4 1-2.4-.1-.8-.3-1.4-.6-1.9zm-5.7-4.7h1.8c.6 0 1.1.1 1.4.4.3.2.5.7.5 1.3 0 .6-.2 1.1-.5 1.3-.3.2-.8.4-1.4.4h-1.8V8.2zm4 8c-.4.3-.9.5-1.5.5h-2.6v-3.8h2.6c1.4 0 2 .6 2 1.9.1.6-.1 1-.5 1.4z"></path>
            </svg>
        ),
    },
    {
        label: __("Lowercase", "frontis-blocks"),
        value: "lowercase",
        icon: (
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M11 16.8c-.1-.1-.2-.3-.3-.5v-2.6c0-.9-.1-1.7-.3-2.2-.2-.5-.5-.9-.9-1.2-.4-.2-.9-.3-1.6-.3-.5 0-1 .1-1.5.2s-.9.3-1.2.6l.2 1.2c.4-.3.7-.4 1.1-.5.3-.1.7-.2 1-.2.6 0 1 .1 1.3.4.3.2.4.7.4 1.4-1.2 0-2.3.2-3.3.7s-1.4 1.1-1.4 2.1c0 .7.2 1.2.7 1.6.4.4 1 .6 1.8.6.9 0 1.7-.4 2.4-1.2.1.3.2.5.4.7.1.2.3.3.6.4.3.1.6.1 1.1.1h.1l.2-1.2h-.1c-.4.1-.6 0-.7-.1zM9.2 16c-.2.3-.5.6-.9.8-.3.1-.7.2-1.1.2-.4 0-.7-.1-.9-.3-.2-.2-.3-.5-.3-.9 0-.6.2-1 .7-1.3.5-.3 1.3-.4 2.5-.5v2zm10.6-3.9c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2s-.2 1.4-.6 2z"></path>
            </svg>
        ),
    },
    {
        label: __("Capitalize", "frontis-blocks"),
        value: "capitalize",
        icon: (
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M7.1 6.8L3.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H7.1zm-.8 6.8L8 8.9l1.7 4.7H6.3zm14.5-1.5c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2 .1.8-.2 1.4-.6 2z"></path>
            </svg>
        ),
    },
];

export const TEXT_DECORATION = [
	{ label: __("Default", "frontis-blocks"), value: "inherit" },
	{ label: __("None", "frontis-blocks"), value: "none" },
	{ label: __("Underline", "frontis-blocks"), value: "underline" },
	{ label: __("Overline", "frontis-blocks"), value: "overline" },
	{ label: __("Line Through", "frontis-blocks"), value: "line-through" },
];

export const GOOGLE_FONTS = async () => {
    const res = await fetch(FrontisBlocksData.pluginUrl + 'assets/google-fonts/google-fonts.json');
    const data = await res.json();

    return Object.keys(data).map(family => ({
        label: family,
        value: family,
        weights: data[family]
    }));
};

export const FONT_WEIGHT = [
	{ label: __("Default", "frontis-blocks"), value: 'inherit' },
	{ label: '100', value: '100' },
	{ label: '200', value: '200' },
	{ label: '300', value: '300' },
	{ label: '400', value: '400' },
	{ label: '500', value: '500' },
	{ label: '600', value: '600' },
	{ label: '700', value: '700' },
	{ label: '800', value: '800' },
	{ label: '900', value: '900' }
];

export const separator_TYPE = [
	{ label: __("Line", "frontis-blocks"), value: "line" },
	{ label: __("Icon", "frontis-blocks"), value: "icon" },
];

export const SUBHEADING_POSITION = [
	{ label: __("Top", "frontis-blocks"), value: "top" },
	{ label: __("Bottom", "frontis-blocks"), value: "bottom" },
];

export const SEPARATOR_POSITION = [
	{ label: __("Top", "frontis-blocks"), value: "top" },
	{ label: __("Bottom", "frontis-blocks"), value: "bottom" },
];

export const PRESETS = [
	{ label: __("Default", "frontis-blocks"), value: "preset-0" },
	{ label: __("Preset 1", "frontis-blocks"), value: "preset-1" },
	{ label: __("Preset 2", "frontis-blocks"), value: "preset-2" },
];

export const POST_SWITCHER = [
	{ label: __('Grid', 'frontis-blocks'), value: 'grid' },
	{ label: __('List', 'frontis-blocks'), value: 'list' },
];

export const TAXONOMY_OPTIONS = [
	{ label: __('Category', 'frontis-blocks'), value: 'category' },
	{ label: __('Tag', 'frontis-blocks'), value: 'tag' },
];

export const PAGINATION_TYPE = [
	{ label: __('Button', 'frontis-blocks'), value: 'button' },
	{ label: __('Pagination', 'frontis-blocks'), value: 'pagination' },
];

export const PAGINATION_PREV_NEXT_TYPE = [
	{ label: __('Icon', 'frontis-blocks'), value: 'icon' },
	{ label: __('Text', 'frontis-blocks'), value: 'text' },
];

export const PREMADE_STYLE = [
	{ label: __('Style 1', 'frontis-blocks'), value: 'style-1' },
	{ label: __('Style 2', 'frontis-blocks'), value: 'style-2' },
];

export const READ_MORE_ICON_ALIGN = [
	{ label: __(<Dashicon icon={"remove"} />), value: "none" },
	{ label: __(<Dashicon icon={"text"} />), value: "icon-text" },
	{ label: __(<Dashicon icon={"format-image"} />), value: "image" },
	{ label: __(<Dashicon icon={"admin-generic"} />), value: "icon-only" },
];

export const BACKGROUND_TYPES = [
	{ label: __('Classic', 'frontis-blocks'), value: 'classic' },
	{ label: __('Gradient', 'frontis-blocks'), value: 'gradient' },
];

export const DYNAMIC_CURRENT_POST_OPTIONS = [
    { label: __('Post Title', 'frontis-blocks'), value: 'post_title' },
    { label: __('Post Excerpt', 'frontis-blocks'), value: 'post_excerpt' },
    { label: __('Featured Image URL', 'frontis-blocks'), value: 'post_thumbnail' },
    { label: __('Post Custom Field', 'frontis-blocks'), value: 'post_meta' },
    { label: __('Post Date', 'frontis-blocks'), value: 'post_date' },
    { label: __('Post Time', 'frontis-blocks'), value: 'post_time' },
    { label: __('Post Terms', 'frontis-blocks'), value: 'post_terms' },
    { label: __('Post ID', 'frontis-blocks'), value: 'post_id' },
    { label: __('Comments Number', 'frontis-blocks'), value: 'comments_number' },

    // ==== AUTHOR ====
    { label: __('Author Name', 'frontis-blocks'), value: 'author_name' },
    { label: __('Author First Name', 'frontis-blocks'), value: 'author_first_name' },
    { label: __('Author Last Name', 'frontis-blocks'), value: 'author_last_name' },
    { label: __('Author Nickname', 'frontis-blocks'), value: 'author_nickname' },
    { label: __('Author Bio', 'frontis-blocks'), value: 'author_description' },
    { label: __('Author Email', 'frontis-blocks'), value: 'author_email' },
    { label: __('Author Website', 'frontis-blocks'), value: 'author_url' },
    { label: __('Author Avatar URL', 'frontis-blocks'), value: 'author_avatar' },
    { label: __('Author Custom Field', 'frontis-blocks'), value: 'author_meta' },
];

export const CONTENT_TYPE = [
	{ label: __("Custom", "frontis-blocks"), value: "custom" },
	{ label: __("Dynamic", "frontis-blocks"), value: "dynamic" },
];

export const TIMER_POSITION = [
	{ label: __("Top Right", "frontis-blocks"), value: "top-right" },
	{ label: __("Bottom Right", "frontis-blocks"), value: "bottom-right" },
	{ label: __("Top Left", "frontis-blocks"), value: "top-left" },
	{ label: __("Bottom Left", "frontis-blocks"), value: "bottom-left" },
];

