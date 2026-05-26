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

export const ANIMATION_TYPE = [
	{ label: __("Typing", "frontis-blocks"), value: "typing" },
	{ label: __("Swirl", "frontis-blocks"), value: "swirl" },
];

export const OVERFLOW_OP = [
	{ label: __('Default', 'frontis-blocks'), value: 'default' },
	{ label: __('Auto', 'frontis-blocks'), value: 'auto' },
	{ label: __('Hidden', 'frontis-blocks'), value: 'hidden' },
	{ label: __('Scroll', 'frontis-blocks'), value: 'scroll' },
	{ label: __('Clip', 'frontis-blocks'), value: 'clip' },
];

export const MEDIA_TYPES = [
    { label: __("image", "frontis-blocks"), value: "image" },
    { label: __("icon", "frontis-blocks"), value: "icon" },
    { label: __("none", "frontis-blocks"), value: "none" },
];

export const LINK_TARGET_OPTIONS = [
    { label: __("Same tab", "frontis-blocks"), value: "_self" },
    { label: __("New tab", "frontis-blocks"), value: "_blank" },
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
	{ label: __("Left", "frontis-block"), value: "left" },
	{ label: __("Right", "frontis-block"), value: "right" },
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

export const FEATURE_ICON_ALIGN = [
	{ label: __(<Dashicon icon={"remove"} />), value: "none" },
	{ label: __(<Dashicon icon={"admin-generic"} />), value: "icon" },
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

export const FLEX_ALIGN = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "flex-start" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "flex-end" },
];

export const IMAGE_OBJECT_FIT = [
	{ label: __('Default', 'frontis-blocks'), value: 'default' },
	{ label: __('Cover', 'frontis-blocks'), value: 'cover' },
	{ label: __('Contain', 'frontis-blocks'), value: 'contain' },
	{ label: __('Fill', 'frontis-blocks'), value: 'fill' },
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

export const TITLE_ALIGNMENT = [
    { label: __("Left", "frontis-blocks"), value: "left" },
    { label: __("Center", "frontis-blocks"), value: "center" },
    { label: __("Right", "frontis-blocks"), value: "right" },
    { label: __("Between", "frontis-blocks"), value: "between" },
];

export const ICON_POSITIONS = [
	{ label: __("Left", "frontis-blocks"), value: "left" },
	{ label: __("Right", "frontis-blocks"), value: "right" },
];

export const ICON_SWITCHER = [
	{ label: __('Icon', 'frontis-blocks'), value: 'icon' },
	{ label: __('Image', 'frontis-blocks'), value: 'image' },
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

export const SLIDER_PAGINATION_TYPE = [
	{ value: 'bullets', label: __('Bullets', 'frontis-blocks') },
	{ value: 'fraction', label: __('Fraction', 'frontis-blocks') },
	{ value: 'progressbar', label: __('Progress Bar', 'frontis-blocks') }
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
export const ADVANCED_BUTTON_PRESETS = [
	{ label: __("Preset 1", "frontis-blocks"), value: "preset-1" },
	{ label: __("Preset 2", "frontis-blocks"), value: "preset-2" },
	{ label: __("Preset 3", "frontis-blocks"), value: "preset-3" },
	{ label: __("Preset 4", "frontis-blocks"), value: "preset-4" },
	{ label: __("Preset 5", "frontis-blocks"), value: "preset-5" },
	{ label: __("Preset 6", "frontis-blocks"), value: "preset-6" },
];
export const TIMEZONE = [
    { label: 'Auto', value: 'auto' },
    { label: 'Manual', value: 'manual' }
];
export const WEEKENDDAY = [
    { label: 'Sunday', value: '0' },
    { label: 'Monday', value: '1' },
    { label: 'Tuesday', value: '2' },
    { label: 'Wednesday', value: '3' },
    { label: 'Thursday', value: '4' },
    { label: 'Friday', value: '5' },
    { label: 'Saturday', value: '6' }
];
export const timeFormatOptions = [
    { label: '12-hour (hh:mm AM/PM)', value: 'hh:mm A' },
    { label: '12-hour (hh:mm:ss AM/PM)', value: 'hh:mm:ss A' },
    { label: '24-hour (HH:mm)', value: 'HH:mm' },
    { label: '24-hour (HH:mm:ss)', value: 'HH:mm:ss' }
];
export const monthOptions = [
    { label: 'January', value: '0' },
    { label: 'February', value: '1' },
    { label: 'March', value: '2' },
    { label: 'April', value: '3' },
    { label: 'May', value: '4' },
    { label: 'June', value: '5' },
    { label: 'July', value: '6' },
    { label: 'August', value: '7' },
    { label: 'September', value: '8' },
    { label: 'October', value: '9' },
    { label: 'November', value: '10' },
    { label: 'December', value: '11' }
];
export const MEGA_MENU_TRIGGERS = [
	{ label: __('Hover', 'frontis-blocks'), value: 'hover' },
	{ label: __('Click', 'frontis-blocks'), value: 'click' },
];

/** POST CATEGORY BLOCK */
export const POST_CATEGORY_PREMADE_STYLE  = [
  { label: __('Style 1', 'frontis-blocks'), value: 'style-1' },
  { label: __('Style 2', 'frontis-blocks'), value: 'style-2' },
  { label: __('Style 3', 'frontis-blocks'), value: 'style-3' },
  { label: __('Style 4', 'frontis-blocks'), value: 'style-4' },
];


export const SELECTION_TYPE_OPTIONS = [
	{ value: 'none', label: __('Show All', 'frontis-blocks') },
	{ value: 'include', label: __('Include Specific', 'frontis-blocks') },
	{ value: 'exclude', label: __('Exclude Specific', 'frontis-blocks') }
];

export const ORDER_BY_OPTIONS = [
	{ value: 'name', label: __('Name', 'frontis-blocks') },
	{ value: 'count', label: __('Count', 'frontis-blocks') },
	{ value: 'slug', label: __('Slug', 'frontis-blocks') }
];

export const SORT_ORDER_OPTIONS = [
	{ value: 'asc', label: __('Ascending', 'frontis-blocks') },
	{ value: 'desc', label: __('Descending', 'frontis-blocks') }
];

export const LIST_STYLE_OPTIONS = [
	{ value: 'none', label: __('None', 'frontis-blocks') },
	{ value: 'bullet', label: __('Bullet', 'frontis-blocks') },
	{ value: 'number', label: __('Number', 'frontis-blocks') }
];

/** Post Featured Image */
export const IMAGE_SIZES = [
    { label: "Thumbnail", value: "thumbnail" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
    { label: "Full", value: "full" },
];


/** Post Comment Form */
export const DEFAULT_TEXTS = {
    formTitle: "Leave a Reply",
    cancelReply: "Cancel reply",
    loginText: "Logged in as",
    logoutText: "Log out?",
    buttonText: "Post Comment",
};

export const FORM_LAYOUTS = [
    { label: "Default", value: "default" },
    { label: "Compact", value: "compact" },
    { label: "Modern", value: "modern" },
];

/** Off canvas menu **/
export const ANIMATION = [
    { value: 'left', label: __('Slide Left', 'frontis-blocks') },
    { value: 'right', label: __('Slide Right', 'frontis-blocks') },
    { value: 'top', label: __('Slide Top', 'frontis-blocks') },
    { value: 'bottom', label: __('Slide Bottom', 'frontis-blocks') },
    { value: 'zoom', label: __('Zoom', 'frontis-blocks') },
    { value: 'flip', label: __('Flip', 'frontis-blocks') },
    { value: 'fade', label: __('Fade', 'frontis-blocks') },
];

export const MENU_TYPE = [
    { value: 'icon', label: __('Icon', 'frontis-blocks') },
    { value: 'text', label: __('Text', 'frontis-blocks') },
    { value: 'icon-text', label: __('Both', 'frontis-blocks') },
];

export const LOTTIE_RENDER_TYPE = [
    { value: 'canvas', label: __('Canvas', 'frontis-blocks') },
    { value: 'svg', label: __('SVG', 'frontis-blocks') },
];

export const LOTTIE_HOVER_STATE = [
    { value: 'none', label: __('None', 'frontis-blocks') },
    { value: 'pause', label: __('Pause', 'frontis-blocks') },
    { value: 'play', label: __('Play', 'frontis-blocks') },
    { value: 'reverse', label: __('Reverse', 'frontis-blocks') },
];

/** Start Container Layout Constants */
export const CONTAINER_TYPE = [
	{ label: __('Full Width', 'frontis-blocks'), value: "full-width" },
	{ label: __('Boxed', 'frontis-blocks'), value: "boxed" },
	{ label: __('Custom', 'frontis-blocks'), value: "custom" },
];

export const CONTAINER_TYPE_FULL = [
	{ label: __('Boxed', 'frontis-blocks'), value: "boxed" },
	{ label: __('Full Width', 'frontis-blocks'), value: "full-width" },
];

export const HTML_TAG = [
	{ title: 'div', label: __('div', 'frontis-blocks'), value: "div" },
	{ title: 'section', label: __('section', 'frontis-blocks'), value: "section" },
	{ title: 'article', label: __('article', 'frontis-blocks'), value: "article" },
	{ title: 'header', label: __('header', 'frontis-blocks'), value: "header" },
	{ title: 'footer', label: __('footer', 'frontis-blocks'), value: "footer" },
	{ title: 'main', label: __('main', 'frontis-blocks'), value: "main" },
	{ title: 'nav', label: __('nav', 'frontis-blocks'), value: "nav" },
	{ title: 'a', label: __('a', 'frontis-blocks'), value: "a" },
];

export const LAYOUT_TYPE = [
	{ title: 'Flex', label: __('Flex', 'frontis-blocks'), value: "flex" },
	{ title: 'Grid', label: __('Grid', 'frontis-blocks'), value: "grid" },
];

export const CHILDREN_WIDTH = [
	{ title: 'Default', label: __('Default', 'frontis-blocks'), value: "default" },
	{ title: 'Auto', label: __('Auto', 'frontis-blocks'), value: "auto" },
	{ title: 'Full', label: __('Full', 'frontis-blocks'), value: "full" },
];

export const DIRECTION = [
	{ title: 'Row', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.64246 7.53723H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 7.53729L15.3485 5.28601" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 7.53723L15.3485 9.78851" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.64246 16.4172H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 16.4173L15.3485 14.1774" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 16.4172L15.3485 18.6685" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.85132 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.1487 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "row" },
	{ title: 'Column', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.391 6.72949L16.391 17.1923" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3909 17.1923L18.606 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.391 17.1923L14.176 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.65393 6.72949L7.65393 17.1923" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.65381 17.1923L9.85767 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.65393 17.1923L5.43889 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "column" },
	{ title: 'Row Reverse', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2705 16.391L6.80771 16.391" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 16.3909L8.70593 18.606" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 16.391L8.70593 14.176" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2705 7.65393L6.80771 7.65393" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 7.65381L8.70593 9.85767" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.80767 7.65393L8.70593 5.43889" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "row-reverse" },
	{ title: 'Column Reverse', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.60901 17.2705L7.60901 6.80771" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.60908 6.80767L5.39404 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.60901 6.80767L9.82405 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3461 17.2705L16.3461 6.80771" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3462 6.80767L14.1423 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3461 6.80767L18.5611 8.70593" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "column-reverse" }
];

export const JUSTIFY_CONTENT = [
	{ title: 'Flex Start', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.39385 12.142L16.5189 12.142" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.39385 7.15051L16.5189 7.15051" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "flex-start" },
	{ title: 'Center', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5599 9.46875L7.42934 9.46875" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5599 14.4974L7.42934 14.4974" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "center" },
	{ title: 'Flex End', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.606 11.858L7.48088 11.858" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.606 16.8495L7.48088 16.8495" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "flex-end" },
	{ title: 'Space Between', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.606 7.1615L7.48088 7.1615" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.606 16.8386L7.48088 16.8386" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "space-between" },
	{ title: 'Space Around', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6713 8.21777L7.54619 8.21777" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.606 15.8041L7.48088 15.8041" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "space-around" },
	{ title: 'Space Evenly', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.606 8.73425L7.48088 8.73425" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.606 15.2767L7.48088 15.2767" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "space-evenly" }
];

export const JUSTIFY_ITEMS = [
	{ title: 'Flex Start', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.39385 12.142L16.5189 12.142" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.39385 7.15051L16.5189 7.15051" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "flex-start" },
	{ title: 'Center', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5599 9.46875L7.42934 9.46875" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5599 14.4974L7.42934 14.4974" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "center" },
	{ title: 'Flex End', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.606 11.858L7.48088 11.858" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.606 16.8495L7.48088 16.8495" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "flex-end" },
	{ title: 'Stretch', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00001 15.27L16.39 15.27" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00001 9.27002L16.39 9.27002" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.51 4.03003L3.97001 4.03003" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.51 20.51L3.97001 20.51" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "stretch" }
];

export const ALIGN_ITEMS = [
	{ title: 'Flex Start', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.39385 12.142L16.5189 12.142" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.39385 7.15051L16.5189 7.15051" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "flex-start" },
	{ title: 'Center', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5599 9.46875L7.42934 9.46875" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5599 14.4974L7.42934 14.4974" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "center" },
	{ title: 'Flex End', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.606 11.858L7.48088 11.858" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.606 16.8495L7.48088 16.8495" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "flex-end" },
	{ title: 'Stretch', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00001 15.27L16.39 15.27" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00001 9.27002L16.39 9.27002" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.51 4.03003L3.97001 4.03003" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.51 20.51L3.97001 20.51" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "stretch" }
];

export const WRAP = [
	{ title: 'No Wrap', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.51 12.0109H6.18005" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.8101 8.5719L18.1101 12.0108L14.8101 15.4607" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "nowrap" },
	{ title: 'Wrap', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.37 15.2757H15.27C16.35 15.2757 17.23 14.318 17.23 13.1427V7.451C17.23 6.27567 16.35 5.31799 15.27 5.31799H7.53" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.07 11.8368L6.77002 15.2757L10.07 18.7255" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "wrap" },
	{ title: 'Wrap Reverse', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.35999 8.76794H15.26C16.34 8.76794 17.22 9.72562 17.22 10.901V16.5926C17.22 17.7679 16.34 18.7256 15.26 18.7256H7.51999" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.0699 12.2068L6.7699 8.76783L10.0699 5.30713" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "wrap-reverse" },
];

// Grid column/row sortable item constants
export const GRID_COLUMN_TYPE = [
	{ title: 'Auto', label: __('Auto', 'frontis-blocks'), value: "auto" },
	{ title: 'Min/Max', label: __('Min/Max', 'frontis-blocks'), value: "min-max" },
	{ title: 'Custom', label: __('Custom', 'frontis-blocks'), value: "custom" },
];

export const GRID_UNIT_TYPES = [
	{ title: 'Fr', label: __('Fr', 'frontis-blocks'), value: "fr" },
	{ title: 'Px', label: __('Px', 'frontis-blocks'), value: "px" },
	{ title: '%', label: __('%', 'frontis-blocks'), value: "%" }
];

export const SEARCH_ICON_ALIGN = [
	{ label: __(<Dashicon icon={"remove"} />), value: "none" },
	{ label: __(<Dashicon icon={"text"} />), value: "icon-text" },
	{ label: __(<Dashicon icon={"format-image"} />), value: "image" },
];

export const SEARCH_APPEARANCE = [
	{ title: 'Button and Search', label: __('Button and Search', 'frontis-blocks'), value: "button-and-search" },
	{ title: 'Only Search', label: __('Only Search', 'frontis-blocks'), value: "only-search" },
];
/** End Container Layout Constants */

export const WIDTH_STYLES = [
	{ label: __("Custom", "frontis-blocks"), value: "custom" },
	{ label: __("Full Width", "frontis-blocks"), value: "full-width" },
];

export const LAYOUT_ALIGNMENT = [
    { label: __("Left", "frontis-block"), value: "start" },
    { label: __("Center", "frontis-block"), value: "center" },
	{ label: __("Right", "frontis-block"), value: "end" },
	{ label: __("Between", "frontis-block"), value: "space-between" },
];
export const SELECT_SEPARATOR_TYPE = [
	{ label: "Colon", value: "colon" },
	{ label: "Line", value: "line" },
	{ label: "Slash", value: "slash" },
	{ label: "Custom", value: "custom" },
];

export const mediaType = [
	{ label: __("None", "frontis-block"), value: "none" },
	{ label: __("Icon", "frontis-block"), value: "icon" },
	{ label: __("Image", "frontis-block"), value: "image" },
];

export const mediaTypes = [
	{ label: __("Icon", "frontis-block"), value: "icon" },
	{ label: __("Image", "frontis-block"), value: "image" },
];

export const separatorType = [
	{ label: __("Comma", "frontis-block"), value: "comma" },
	{ label: __("Space", "frontis-block"), value: "space" },
];

export const ITEM_POSITION = [
	{ label: __("Top", "frontis-block"), value: "top" },
	{ label: __("Right", "frontis-block"), value: "right" },
	{ label: __("Bottom", "frontis-block"), value: "bottom" },
	{ label: __("Left", "frontis-block"), value: "left" },
];

export const DUAL_BTN_ICON_ALIGN = [
	{ label: __(<Dashicon icon={"remove"} />), value: "none" },
	{ label: __(<Dashicon icon={"text"} />), value: "icon-text" },
	{ label: __(<Dashicon icon={"admin-generic"} />), value: "icon-only" },
];

export const DUAL_BUTTONS_DIRECTION = [
	{ label: "Vertical", value: "vertical" },
	{ label: "Horizontal", value: "horizontal" },
];

export const FEATURE_LIST_ICON_VERTICAL_ALIGN = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "top" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "bottom" },
];

export const FEATURE_LIST_DIRECTION_ICON = [
	{ title: 'Column', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.391 6.72949L16.391 17.1923" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.3909 17.1923L18.606 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.391 17.1923L14.176 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.65393 6.72949L7.65393 17.1923" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.65381 17.1923L9.85767 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.65393 17.1923L5.43889 15.2941" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "column" },
	{ title: 'Row', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.64246 7.53723H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 7.53729L15.3485 5.28601" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 7.53723L15.3485 9.78851" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.64246 16.4172H17.2781" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 16.4173L15.3485 14.1774" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.2781 16.4172L15.3485 18.6685" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2.85132 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21.1487 21.1473V2.85278" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "row" },
];

export const FEATURE_LIST_WRAP_ICON = [
	{ title: 'No Wrap', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.51 12.0109H6.18005" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.8101 8.5719L18.1101 12.0108L14.8101 15.4607" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "nowrap" },
	{ title: 'Wrap', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3V21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.37 15.2757H15.27C16.35 15.2757 17.23 14.318 17.23 13.1427V7.451C17.23 6.27567 16.35 5.31799 15.27 5.31799H7.53" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.07 11.8368L6.77002 15.2757L10.07 18.7255" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "wrap" },
];

export const FEATURE_LIST_ICON_ALIGN = [
	{ label: __(<Dashicon icon={"remove"} />), value: "none" },
	{ label: __(<Dashicon icon={"admin-generic"} />), value: "icon" },
	{ label: __(<Dashicon icon={"format-image"} />), value: "image" },
];

export const ICON_VERTICAL_POSITION = [
	{ label: __("Top", "frontis-block"), value: "v-top" },
	{ label: __("Middle", "frontis-block"), value: "v-middle" },
	{ label: __("Bottom", "frontis-block"), value: "v-bottom" },
];

export const FLIP_BOX_SELECTED_SIDE = [
	{ label: __("Front", "frontis-blocks"), value: "front" },
	{ label: __("Back", "frontis-blocks"), value: "back" },
];

export const FLIP_ANIMATION = [
	{ label: __("Flip Left", "frontis-blocks"), value: "flip-left" },
	{ label: __("Flip Right", "frontis-blocks"), value: "flip-right" },
	{ label: __("Flip Up", "frontis-blocks"), value: "flip-up" },
	{ label: __("Flip Down", "frontis-blocks"), value: "flip-down" },
	{ label: __("Zoom in", "frontis-blocks"), value: "zoom-in" },
	{ label: __("Zoom out", "frontis-blocks"), value: "zoom-out" },
	{ label: __("Fade", "frontis-blocks"), value: "fade" },
];

export const FORM_FULL_LISTS =
    FrontisBlocksData.fluent_form_lists &&
    JSON.parse(FrontisBlocksData.fluent_form_lists);

export const FORM_LISTS =
	FORM_FULL_LISTS &&
	FORM_FULL_LISTS.map((obj) => {
		return {
			label: obj.label,
			value: obj.value,
		};
	});

export const POST_GRID_ICON_ALIGN = [
	{ label: __(<Dashicon icon={"remove"} />), value: "none" },
	{ label: __(<Dashicon icon={"admin-generic"} />), value: "icon" },
];

export const CURRENCY_POSITION = [
	{ label: __("Left", "frontis-blocks"), value: "left" },
	{ label: __("Right", "frontis-blocks"), value: "right" },
];

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

export const SLIDER_EFFECT_OPTIONS = [
	{ value: 'slide', label: __('Slide', 'frontis-blocks') },
	{ value: 'fade', label: __('Fade', 'frontis-blocks') },
	{ value: 'coverflow', label: __('Coverflow', 'frontis-blocks') },
	{ value: 'flip', label: __('Flip', 'frontis-blocks') },
	{ value: 'creative', label: __('Creative', 'frontis-blocks') },
];

export const CAROUSEL_EFFECT_OPTIONS = [
	{ value: 'slide', label: __('Slide', 'frontis-blocks') },
	{ value: 'coverflow', label: __('Coverflow', 'frontis-blocks') },
];

export const SLIDER_TYPE = [
	{ value: 'slider', label: __('Slider', 'frontis-blocks') },
	{ value: 'carousel', label: __('Carousel', 'frontis-blocks') },
];

export const SLIDER_ARROW_POSITION_TYPE = [
	{ label: __('Inside', 'frontis-blocks'), value: 'inside' },
	{ label: __('Outside', 'frontis-blocks'), value: 'outside' },
];

export const SLIDER_ARROW_POSITION = [
	{ label: __('Center Center', 'frontis-blocks'), value: 'center' },
	{ label: __('Top Left', 'frontis-blocks'), value: 'top-left' },
	{ label: __('Top Center', 'frontis-blocks'), value: 'top-center' },
	{ label: __('Top Right', 'frontis-blocks'), value: 'top-right' },
	{ label: __('Bottom Left', 'frontis-blocks'), value: 'bottom-left' },
	{ label: __('Bottom Center', 'frontis-blocks'), value: 'bottom-center' },
	{ label: __('Bottom Right', 'frontis-blocks'), value: 'bottom-right' },
];

export const SLIDER_ARROW_DIRECTION = [
	{ label: __('Row', 'frontis-blocks'), value: 'row' },
	{ label: __('Column', 'frontis-blocks'), value: 'column' },
	{ label: __('Row Reverse', 'frontis-blocks'), value: 'row-reverse' },
	{ label: __('Column Reverse', 'frontis-blocks'), value: 'column-reverse' },
];

export const ARROW_ICON_ALIGN = [
	{ label: __(<Dashicon icon={"text"} />), value: "icon" },
	{ label: __(<Dashicon icon={"format-image"} />), value: "image" },
];

export const SOCIAL_ICONS_PRESETS = [
	{ label: __("Preset 1", "frontis-blocks"), value: "preset-1" },
	{ label: __("Preset 2", "frontis-blocks"), value: "preset-2" },
	{ label: __("Preset 3", "frontis-blocks"), value: "preset-3" },
	{ label: __("Preset 4", "frontis-blocks"), value: "preset-4" },
	{ label: __("Preset 5", "frontis-blocks"), value: "preset-5" },
	{ label: __("Preset 6", "frontis-blocks"), value: "preset-6" },
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

export const BADGE_POSITION  = [
	{ label: __("In Content", "frontis-block"), value: "content" },
	{ label: __("In Image", "frontis-block"), value: "image" },
];

export const CARD_WRAP_ALIGNMENT = [
    { label: __("Left", "frontis-block"), value: "start" },
    { label: __("Center", "frontis-block"), value: "center" },
	{ label: __("Right", "frontis-block"), value: "end" },
	{ label: __("Between", "frontis-block"), value: "space-between" },
];

export const CONTENT_POSITION = [
	{ label: __("Top", "frontis-block"), value: "top" },
	{ label: __("Right", "frontis-block"), value: "right" },
	{ label: __("Bottom", "frontis-block"), value: "bottom" },
	{ label: __("Left", "frontis-block"), value: "left" },
    { label: __("In Image", "frontis-block"), value: "image" },
];

export const CONTENT_SOCIAL_ICON_POSITION = [
	{ label: __("Top", "frontis-block"), value: "top" },
	{ label: __("Right", "frontis-block"), value: "right" },
	{ label: __("Bottom", "frontis-block"), value: "bottom" },
	{ label: __("Left", "frontis-block"), value: "left" },
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

export const SOCIAL_ICON_ANIMATION = [
	{ label: __("Default", "frontis-block"), value: "default" },
	{ label: __("Top", "frontis-block"), value: "top" },
	{ label: __("Right", "frontis-block"), value: "right" },
	{ label: __("Bottom", "frontis-block"), value: "bottom" },
	{ label: __("Left", "frontis-block"), value: "left" },
];

export const SOCIAL_ICON_TYPE = [
	{ label: __("In Content", "frontis-block"), value: "content" },
	{ label: __("In Image", "frontis-block"), value: "image" },
];

// Form Builder Constants'
export const FORM_ALIGN_ITEMS = [
    { title: 'Flex Start',  label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.39385 12.142L16.5189 12.142" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7.39385 7.15051L16.5189 7.15051" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "left" },
    { title: 'Center', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5599 9.46875L7.42934 9.46875" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.5599 14.4974L7.42934 14.4974" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 3L3 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M21 21L3 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "center" },
    { title: 'Flex End', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.606 11.858L7.48088 11.858" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16.606 16.8495L7.48088 16.8495" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 21L21 21" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3 3L21 3" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "right" },
    { title: 'Stretch', label: __(<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.00001 15.27L16.39 15.27" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.00001 9.27002L16.39 9.27002" stroke="#4D4D4D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.51 4.03003L3.97001 4.03003" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M20.51 20.51L3.97001 20.51" stroke="#4D4D4D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>), value: "stretch" }	
];

export const FORM_SUBMIT_BTN_POSITION = [
	{ label: "Left", value: "left" },
	{ label: "Right", value: "right" },
];

export const FORM_SUCCESS_TYPE = [
	{ label: "Message", value: "message" },
	{ label: "Redirect", value: "redirect" },
];

export const FORM_FIELD_TYPES = [
	{ label: __("Text", "frontis-block"), value: "text" },
	{ label: __("Email", "frontis-block"), value: "email" },
	{ label: __("Number", "frontis-block"), value: "number" },
];

// Rive Animation Constants
export const RIVE_RENDER_TYPE = [
	{ label: __("Canvas", "frontis-blocks"), value: "canvas" },
	{ label: __("WebGL2", "frontis-blocks"), value: "webgl2" },
];

export const PRICING_TABLE_PRESETS = [
	{ label: __("Default", "frontis-blocks"), value: "default" },
	{ label: __("Preset 1", "frontis-blocks"), value: "preset-1" },
	{ label: __("Preset 2", "frontis-blocks"), value: "preset-2" },
	{ label: __("Preset 3", "frontis-blocks"), value: "preset-3" },
	{ label: __("Preset 4", "frontis-blocks"), value: "preset-4" },
];

export const STACKED_CARD_PRESETS = [
	{ label: __("Stack Top", "frontis-blocks"), value: "stack-top" },
	{ label: __("Stack Left", "frontis-blocks"), value: "stack-left" },
	{ label: __("Stack Right", "frontis-blocks"), value: "stack-right" },
	{ label: __("Stack Over", "frontis-blocks"), value: "stack-over" },
];

export const CAROUSEL_ITEM_TRANSLATE = [
	{ label: __("Horizontal", "frontis-blocks"), value: "X" },
	{ label: __("Vertical", "frontis-blocks"), value: "Y" },
	{ label: __("Depth", "frontis-blocks"), value: "Z" },
];
export const CAROUSEL_ITEM_ROTATE = [
	{ label: __("Horizontal", "frontis-blocks"), value: "X" },
	{ label: __("Vertical", "frontis-blocks"), value: "Y" },
	{ label: __("Depth", "frontis-blocks"), value: "Z" },
];

