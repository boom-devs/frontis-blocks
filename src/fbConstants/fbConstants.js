import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";
import { dateI18n } from '@wordpress/date';

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

export const ICON_TEXT_ALIGN = [
	{ label: __(<Dashicon icon={"remove"} />), value: "none" },
	{ label: __(<Dashicon icon={"text"} />), value: "icon-text" },
	{ label: __(<Dashicon icon={"format-image"} />), value: "image" },
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

export const TEXT_ALIGN_JUSTIFY = [
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
export const SEPARATOR_STYLE_OPTIONS = [
	{ label: __("Solid", "frontis-blocks"), value: "solid" },
	{ label: __("Dashed", "frontis-blocks"), value: "dashed" },
	{ label: __("Dotted", "frontis-blocks"), value: "dotted" },
	{ label: __("Double", "frontis-blocks"), value: "double" },
	{ label: __("Zigzag", "frontis-blocks"), value: "zigzag" },
];

export const PRESETS = [
	{ label: __("Default", "frontis-blocks"), value: "preset-0" },
	{ label: __("Preset 1", "frontis-blocks"), value: "preset-1" },
	{ label: __("Preset 2", "frontis-blocks"), value: "preset-2" },
];

export const ADVANCED_HEADING_PRESETS = [
	{ label: __("Default", "frontis-blocks"), value: "preset-0" },
	{ label: __("Preset 1", "frontis-blocks"), value: "preset-1" },
	{ label: __("Preset 2", "frontis-blocks"), value: "preset-2" },
	{ label: __("Preset 3", "frontis-blocks"), value: "preset-3" },
	{ label: __("Preset 4", "frontis-blocks"), value: "preset-4" },
	{ label: __("Preset 5", "frontis-blocks"), value: "preset-5" },
	{ label: __("Preset 6", "frontis-blocks"), value: "preset-6" },
	{ label: __("Preset 7", "frontis-blocks"), value: "preset-7" },
	{ label: __("Preset 8", "frontis-blocks"), value: "preset-8" },
	{ label: __("Preset 9", "frontis-blocks"), value: "preset-9" },
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

export const DYNAMIC_DATA_SOURCE_OPTIONS = [
	{ label: __('Current Post', 'frontis-blocks'), value: 'current_post' },
	{ label: __('Post Type', 'frontis-blocks'), value: 'post_type' },
	{ label: __('Archive Description', 'frontis-blocks'), value: 'archive_description' },
	{ label: __('Archive Title', 'frontis-blocks'), value: 'archive_title' },
	{ label: __('Site Tagline', 'frontis-blocks'), value: 'site_tagline' },
	{ label: __('Site Title', 'frontis-blocks'), value: 'site_title' },
];

export const DYNAMIC_DATA_SOURCE_FIELD_OPTIONS = [
    { label: __('Post Title', 'frontis-blocks'), value: 'post_title' },
    { label: __('Post Excerpt', 'frontis-blocks'), value: 'post_excerpt' },
    { label: __('Featured Image', 'frontis-blocks'), value: 'post_thumbnail' },
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
];

export const DYNAMIC_FEATURED_IMAGE_OPTIONS = [
	{ label: __('Title', 'frontis-blocks'), value: 'title' },
	{ label: __('Alt', 'frontis-blocks'), value: 'alt' },
	{ label: __('Caption', 'frontis-blocks'), value: 'caption' },
	{ label: __('Description', 'frontis-blocks'), value: 'description' },
	{ label: __('Attachment URL', 'frontis-blocks'), value: 'attachment_url' },
];

export const DYNAMIC_DATE_TIME_TYPE_OPTIONS = [
	{ label: __('Post Published', 'frontis-blocks'), value: 'published' },
	{ label: __('Post Modified',  'frontis-blocks'), value: 'modified' },
];

export const DYNAMIC_TAXONOMY_OPTIONS = [
	{ label: __('Categories', 'frontis-blocks'), value: 'category' },
	{ label: __('Tags', 'frontis-blocks'), value: 'post_tag' },
];

export const DYNAMIC_LINK_SOURCE_OPTIONS = [
	{ label: __('Post Permalink', 'frontis-blocks'), value: 'post_permalink' },
	{ label: __('Comments Area', 'frontis-blocks'), value: 'comments_area' },
	{ label: __('Featured Image', 'frontis-blocks'), value: 'featured_image' },
	{ label: __('Avatar (Profile URL)', 'frontis-blocks'), value: 'avatar_profile_url' },
	{ label: __('Author Page URL', 'frontis-blocks'), value: 'author_page_url' },
	{ label: __('Author Archive URL', 'frontis-blocks'), value: 'archive_url' },
];

export const DYNAMIC_IMAGE_SOURCE_OPTIONS = [
	{ label: __('Current Post', 'frontis-blocks'), value: 'current_post' },
	{ label: __('Post Type', 'frontis-blocks'), value: 'post_type' },
	{ label: __('Site Logo Url', 'frontis-blocks'), value: 'site_logo_url' },
];

export const DYNAMIC_IMAGE_FIELD_OPTIONS = [
	{ label: __('Featured Image', 'frontis-blocks'), value: 'featured_image' },
	{ label: __('Avatar (Profile Image)', 'frontis-blocks'), value: 'avatar_profile' },
]

export const WP_IMAGE_SIZE_OPTIONS = [
	{ label: __('Full', 'frontis-blocks'), value: 'full' },
	{ label: __('Thumbnail', 'frontis-blocks'), value: 'thumbnail' },
	{ label: __('Small', 'frontis-blocks'), value: 'small' },
	{ label: __('Medium', 'frontis-blocks'), value: 'medium' },
	{ label: __('Large', 'frontis-blocks'), value: 'large' },
];
  
export const getdynamicTextDateFormatOptions = (sampleDate = new Date()) => {

	const fmt = (phpFmt) => dateI18n(phpFmt, sampleDate);
  
	return [
	  { label: `${__('Default','frontis-blocks')}`, value: 'default' },
	  { label: fmt('jS F Y'),   value: 'jS F Y' },
	  { label: fmt('Y-m-d'),  value: 'Y-m-d' },
	  { label: fmt('m/d/Y'),  value: 'm/d/Y' },
	  { label: fmt('d/m/Y'),  value: 'd/m/Y' },
	  
	  { label: __('Human Readable','frontis-blocks'), value: 'human' },
	];
};

export const getdynamicTextTimeFormatOptions = (sampleDate = new Date()) => {

	const d = sampleDate instanceof Date ? sampleDate : new Date(sampleDate);
  
	const fmt = (phpFmt) => dateI18n(phpFmt, d);
  
	return [
	  { label: `${__('Default','frontis-blocks')}`, value: 'default' },
	  { label: fmt('g:i A'),  value: 'g:i A' },
	  { label: fmt('g:i'),    value: 'g:i' },
	  { label: fmt('g:i:s a'),value: 'g:i:s a' },

	];
};

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

export const NAVIGATION_POSITION = [
	{ label: __("Right", "frontis-blocks"), value: "right" },
	{ label: __("Left", "frontis-blocks"), value: "left" },
];

export const LABEL_POSITION = [
	{ label: __("Right", "frontis-blocks"), value: "right" },
	{ label: __("Left", "frontis-blocks"), value: "left" },
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

export const IMAGE_STYLES = [
    { label: __("Square", "frontis-block"), value: "square" },
    { label: __("Octagon", "frontis-block"), value: "octagon" },
    { label: __("Triangle", "frontis-block"), value: "triangle" },
    { label: __("Rhombus", "frontis-block"), value: "rhombus" },
    { label: __("Hexagon", "frontis-block"), value: "hexagon" },
    { label: __("Bevel", "frontis-block"), value: "bevel" },
    { label: __("Collage", "frontis-block"), value: "collage" },
    { label: __("Abstract", "frontis-block"), value: "abstract" },
    { label: __("Irregular Blob", "frontis-block"), value: "irregular" },
    { label: __("Flower", "frontis-block"), value: "flower" },
    { label: __("Organic Blob", "frontis-block"), value: "organic-blob" },
    { label: __("Teardrop", "frontis-block"), value: "teardrop" },
    { label: __("Triangle Blob", "frontis-block"), value: "triangle-blob" },
    { label: __("Wavy Stripes", "frontis-block"), value: "wavy-stripes" },
    { label: __("Token", "frontis-block"), value: "token" },
];

export const IMAGE_HOVER_EFFECTS = [
    { label: __("No Effect", "frontis-blocks"), value: "no-effect", },
    { label: __("Zoom In", "frontis-blocks"), value: "zoom-in", },
    { label: __("Zoom Out", "frontis-blocks"), value: "zoom-out", },
    { label: __("Slide", "frontis-blocks"), value: "slide", },
    { label: __("Blur", "frontis-blocks"), value: "blur", },
    { label: __("Overlay", "frontis-blocks"), value: "overlay", },
    { label: __("Tilt", "frontis-blocks"), value: "tilt", },
    { label: __("Skew", "frontis-blocks"), value: "skew", },
];

export const IMAGE_AUTO_FIT = [
    { label: __("Cover", "frontis-blocks"), value: "cover", },
    { label: __("Fill", "frontis-blocks"), value: "fill", },
    { label: __("Contain", "frontis-blocks"), value: "contain", },
];

export const IMAGE_MASK_SIZE = [
    { label: __("Cover", "frontis-blocks"), value: "cover" },
    { label: __("Contain", "frontis-blocks"), value: "contain" },
    { label: __("Auto", "frontis-blocks"), value: "auto" },
];
export const IMAGE_MASK_POSITION = [ 
    { label: __("Center", "frontis-blocks"), value: "center" },
    { label: __("Top", "frontis-blocks"), value: "top" },
    { label: __("Left", "frontis-blocks"), value: "left" },
    { label: __("Right", "frontis-blocks"), value: "right" },
];
export const IMAGE_MASK_REPEAT = [
    { label: __("No Repeat", "frontis-blocks"), value: "no-repeat" },
    { label: __("Repeat", "frontis-blocks"), value: "repeat" },
];

export const IMAGE_MASK_IMAEGS = {
    'collage': FrontisBlocksData.pluginUrl + '/assets/images/photo-collage.svg',
    'abstract': FrontisBlocksData.pluginUrl + '/assets/images/abstract.svg',
    'irregular': FrontisBlocksData.pluginUrl + '/assets/images/irregular-blob.svg',
    'flower': FrontisBlocksData.pluginUrl + '/assets/images/Flower.svg',
    'organic-blob': FrontisBlocksData.pluginUrl + '/assets/images/organic-blob.svg',
    'teardrop': FrontisBlocksData.pluginUrl + '/assets/images/teardrop.svg',
    'triangle-blob': FrontisBlocksData.pluginUrl + '/assets/images/triangle-blob.svg',
    'wavy-stripes': FrontisBlocksData.pluginUrl + '/assets/images/wavy-stripes.svg',
    'token': FrontisBlocksData.pluginUrl + '/assets/images/token.svg',
}