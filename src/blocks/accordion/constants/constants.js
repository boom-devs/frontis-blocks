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

export const ICON_ALIGN = [
	{ label: __("None"), value: "none" },
	{ label: __("Icon"), value: "icon" },
];

export const ICON_SWITCHER = [
    { label: __('Icon', 'frontis-blocks'), value: 'icon' },
    { label: __('Image', 'frontis-blocks'), value: 'image' },
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

// Default colors
const DARK_GRAY = "#4a5059";
const LIGHT_GRAY = "#edf1f7";

export const DEFAULT_TITLE_COLOR = DARK_GRAY;
export const DEFAULT_TITLE_SIZE = "16";
export const DEFAULT_TITLE_BACKGROUND = LIGHT_GRAY;
export const DEFAULT_TITLE_ACTIVE_COLOR = "#ffffff";
export const DEFAULT_CONTENT_COLOR = DARK_GRAY;
export const DEFAULT_CONTENT_BACKGROUND = "transparent";
export const DEFAULT_CONTENT_BORDER_COLOR = DARK_GRAY;
export const DEFAULT_ICON_COLOR = DARK_GRAY;
export const MAX_HEIGHT = 2000;

export const ACCORDION_TYPES = [
    { label: __("Accordion", "frontis-blocks"), value: "accordion" },
    { label: __("Toggle", "frontis-blocks"), value: "toggle" },
];

export const ACCORDION_STYLES = [
    { label: __("Material", "frontis-blocks"), value: "material" },
    { label: __("Gradient", "frontis-blocks"), value: "gradient" },
    { label: __("Dark", "frontis-blocks"), value: "dark" },
    { label: __("Royal", "frontis-blocks"), value: "royal" },
    { label: __("Custom", "frontis-blocks"), value: "custom" },
];

export const BACKGROUND_TYPE = [
    { label: __("Fill", "frontis-blocks"), value: "fill" },
    { label: __("Gradient", "frontis-blocks"), value: "gradient" },
    { label: __("Image", "frontis-blocks"), value: "image" },
];

export const TITLE_BACKGROUND_TYPE = [
    { label: __("Fill", "frontis-blocks"), value: "fill" },
    { label: __("Gradient", "frontis-blocks"), value: "gradient" },
];

export const BACKGROUND_CLIP = [
    { label: __("Border Box", "frontis-blocks"), value: "border-box" },
    { label: __("Padding Box", "frontis-blocks"), value: "padding-box" },
    { label: __("Content Box", "frontis-blocks"), value: "content-box" },
];

export const BUTTON_STYLES = [
    { label: __("Material", "frontis-blocks"), value: "material" },
    { label: __("Ghost", "frontis-blocks"), value: "ghost" },
    { label: __("Rounded", "frontis-blocks"), value: "rounded" },
    { label: __("Custom", "frontis-blocks"), value: "custom" },
];

export const BACKGROUND_SIZE = [
    { label: __("Auto", "frontis-blocks"), value: "auto" },
    { label: __("Cover", "frontis-blocks"), value: "cover" },
    { label: __("Container", "frontis-blocks"), value: "container" },
];

export const BACKGROUND_REPEAT = [
    { label: __("Initial", "frontis-blocks"), value: "initial" },
    { label: __("No Repeat", "frontis-blocks"), value: "no-repeat" },
    { label: __("Repeat", "frontis-blocks"), value: "repeat" },
    { label: __("Repeat X", "frontis-blocks"), value: "repeat-x" },
    { label: __("Repeat Y", "frontis-blocks"), value: "repeat-y" },
    { label: __("Space", "frontis-blocks"), value: "space" },
    { label: __("Round", "frontis-blocks"), value: "round" },
];

export const BACKGROUND_ATTACHMENT = [
    { label: __("Initial", "frontis-blocks"), value: "initial" },
    { label: __("Scroll", "frontis-blocks"), value: "scroll" },
    { label: __("Fixed", "frontis-blocks"), value: "fixed" },
    { label: __("Local", "frontis-blocks"), value: "local" },
];

export const HEADERS = [
    { label: __("H1", "frontis-blocks"), value: "h1" },
    { label: __("H2", "frontis-blocks"), value: "h2" },
    { label: __("H3", "frontis-blocks"), value: "h3" },
    { label: __("H4", "frontis-blocks"), value: "h4" },
    { label: __("H5", "frontis-blocks"), value: "h5" },
    { label: __("H6", "frontis-blocks"), value: "h6" },
];

export const ICON_POSITIONS = [
    { label: __("Left", "frontis-blocks"), value: "left" },
    { label: __("Right", "frontis-blocks"), value: "right" },
];

export const TRANSITION_TYPES = [
    { label: __("Liner", "frontis-blocks"), value: "linear" },
    { label: __("Ease", "frontis-blocks"), value: "ease" },
    { label: __("Ease In", "frontis-blocks"), value: "ease-in" },
    { label: __("Ease Out", "frontis-blocks"), value: "ease-out" },
    { label: __("Ease In Out", "frontis-blocks"), value: "ease-in-out" },
];

export const TITLE_ALIGNMENT = [
    { label: __("Left", "frontis-blocks"), value: "left" },
    { label: __("Center", "frontis-blocks"), value: "center" },
    { label: __("Right", "frontis-blocks"), value: "right" },
    { label: __("Between", "frontis-blocks"), value: "between" },
];

export const CONTENT_ALIGN = [
    { label: __("Left", "frontis-blocks"), value: "left" },
    { label: __("Center", "frontis-blocks"), value: "center" },
    { label: __("Right", "frontis-blocks"), value: "right" },
];

export const COLOR_TYPES = [
    { label: __("Fill", "frontis-blocks"), value: "fill" },
    { label: __("Gradient", "frontis-blocks"), value: "gradient" },
];

export const TEXT_TRANSFORM = [
    { label: __("None", "frontis-blocks"), value: "none" },
    { label: __("Lowercase", "frontis-blocks"), value: "lowercase" },
    { label: __("Capitalize", "frontis-blocks"), value: "capitalize" },
    { label: __("Uppercase", "frontis-blocks"), value: "uppercase" },
];

export const FONT_WEIGHTS = [
    { label: __("Lighter", "frontis-blocks"), value: "lighter" },
    { label: __("Normal", "frontis-blocks"), value: "normal" },
    { label: __("Bold", "frontis-blocks"), value: "bold" },
    { label: __("Bolder", "frontis-blocks"), value: "bolder" },
];

export const TEXT_DECORATION = [
    { label: __("Initial", "frontis-blocks"), value: "initial" },
    { label: __("Overline", "frontis-blocks"), value: "overline" },
    { label: __("Line Through", "frontis-blocks"), value: "line-through" },
    { label: __("Underline", "frontis-blocks"), value: "underline" },
    {
        label: __("Underline Oveline", "frontis-blocks"),
        value: "underline overline",
    },
];

export const HEADING = [
    { label: __("H1", "frontis-blocks"), value: "h1" },
    { label: __("H2", "frontis-blocks"), value: "h2" },
    { label: __("H3", "frontis-blocks"), value: "h3" },
    { label: __("H4", "frontis-blocks"), value: "h4" },
    { label: __("H5", "frontis-blocks"), value: "h5" },
    { label: __("H6", "frontis-blocks"), value: "h6" },
    { label: __("P", "frontis-blocks"), value: "p" },
];

export const sizeUnitTypes = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "em", value: "em" },
];


export const WrpBgConst = "WrpBg_";
export const iconBgConst = "icnBg_";
export const tabBgConst = "tabBg_";
export const conBgConst = "conBg_";

export const WrpBdShadowConst = "wrpBdSd_";
export const iconBdShadowConst = "icnBdSd_";
export const tabBdShadowConst = "tabBdSd_";
export const conBdShadowConst = "conBdSd_";

export const wrapMarginConst = "wrpMrg_";
export const wrapPaddingConst = "wrpPad_";
export const iconMarginConst = "icnMrg_";
export const iconPaddingConst = "icnPad_";
export const tabMarginConst = "tabMrg_";
export const tabPaddingConst = "tabPad_";
export const conMarginConst = "conMrg_";
export const conPaddingConst = "conPad_";

export const wrapperWidth = "wrpW_";
export const rangeIconSize = "icnZ_";
export const accGapRange = "acGp_";
export const titlePrefixIconSize = "titlePrefixIconSize_";
export const titleSuffixIconSize = "titleSuffixIconSize_";
export const titlePrefixGap = "titlePrefixGap_";
export const titlePrefixImgWidth = "titlePrefixImgWidth_";
export const titleSuffixGap = "titleSuffixGap_";
export const titleSuffixImgWidth = "titleSuffixImgWidth_";

export const typoPrefix_title = "typTl_";
export const typoPrefix_content = "typCn_";
export const titlePrefixText = "titlePrefixText_";
export const titleSuffixText = "titleSuffixText_";
