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

export const CODE_LANGUAGES = [
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'php', label: 'PHP' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'csharp', label: 'C#' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'sql', label: 'SQL' },
    { value: 'bash', label: 'Bash' },
    { value: 'json', label: 'JSON' },
    { value: 'xml', label: 'XML' },
    { value: 'yaml', label: 'YAML' },
    { value: 'plain', label: 'Plain Text' },
];

// Basic regex patterns for syntax highlighting
export const SYNTAX_PATTERNS = {
    html: {
        tag: /<\/?[\w\s="/.':;#-\/\?]+>/g,
        attribute: /(\s+[\w-]+=)/g,
        string: /(["'])((?:\\1|(?:(?!\1)).)*)(\1)/g,
        comment: /<!--[\s\S]*?-->/g
    },
    css: {
        selector: /([.#][\w-]+|[\w-]+)?(?=\s*\{)/g,
        property: /([\w-]+)(?=\s*:)/g,
        value: /(:.*?)(;|$)/g,
        comment: /\/\*[\s\S]*?\*\//g,
        bracket: /[{}]/g
    },
    javascript: {
        keyword: /\b(var|let|const|function|class|extends|return|if|else|for|while|switch|case|break|continue|try|catch|finally|new|this|typeof|instanceof|import|export|from|default|async|await|static|null|undefined|true|false)\b/g,
        string: /(["'`])((?:\\1|(?:(?!\1)).)*)(\1)/g,
        number: /\b(\d+\.?\d*|0x[a-f0-9]+)\b/g,
        function: /(\w+)(?=\s*\()/g,
        comment: /\/\/.*$|\/\*[\s\S]*?\*\//gm,
        bracket: /[{}\[\]()]/g,
        operator: /[+\-*/%=<>!&|^~?:]/g
    },
    php: {
        keyword: /\b(if|else|while|do|for|foreach|as|return|function|class|extends|new|try|catch|throw|finally|switch|case|break|continue|public|private|protected|static|echo|print|include|require|namespace|use)\b/g,
        variable: /\$\w+\b/g,
        string: /(["'])((?:\\1|(?:(?!\1)).)*)(\1)/g,
        comment: /\/\/.*$|\/\*[\s\S]*?\*\//gm,
        phpTag: /<\?php|\?>/g,
        function: /(\w+)(?=\s*\()/g
    },
    python: {
        keyword: /\b(def|class|if|elif|else|for|while|try|except|finally|with|import|from|as|return|pass|break|continue|global|nonlocal|lambda|True|False|None)\b/g,
        string: /(["'])((?:\\1|(?:(?!\1)).)*)(\1)|([fru]?"""[\s\S]*?""")|([fru]?'''[\s\S]*?''')/g,
        number: /\b(\d+\.?\d*)\b/g,
        function: /(\w+)(?=\s*\()/g,
        comment: /#.*$/gm
    },
    plain: {
        // No highlighting for plain text
    }
    // Add patterns for other languages as needed
};

// Theme colors
export const CODE_THEMES = {
    default: {
        background: '#f5f5f5',
        text: '#333333',
        keyword: '#0033b3',
        string: '#067d17',
        number: '#1750eb',
        comment: '#8c8c8c',
        tag: '#0033b3',
        attribute: '#7d5c00',
        function: '#6f42c1',
        property: '#e36209',
        bracket: '#24292e',
        operator: '#d73a49',
        variable: '#e36209',
        selector: '#0033b3',
        value: '#067d17'
    },
    dark: {
        background: '#282c34',
        text: '#abb2bf',
        keyword: '#c678dd',
        string: '#98c379',
        number: '#d19a66',
        comment: '#5c6370',
        tag: '#e06c75',
        attribute: '#d19a66',
        function: '#61afef',
        property: '#e06c75',
        bracket: '#abb2bf',
        operator: '#56b6c2',
        variable: '#e06c75',
        selector: '#c678dd',
        value: '#98c379'
    },
    light: {
        background: '#fafafa',
        text: '#383a42',
        keyword: '#a626a4',
        string: '#50a14f',
        number: '#986801',
        comment: '#a0a1a7',
        tag: '#e45649',
        attribute: '#986801',
        function: '#4078f2',
        property: '#e45649',
        bracket: '#383a42',
        operator: '#0184bc',
        variable: '#e45649',
        selector: '#a626a4',
        value: '#50a14f'
    }
};

export const PRESETS = [
    { label: __("Default", "frontis-blocks"), value: "default" },
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

export const ANIMATION = [
    { value: 'left', label: __('Slide Left', 'frontis-blocks') },
    { value: 'right', label: __('Slide Right', 'frontis-blocks') },
    { value: 'top', label: __('Slide Top', 'frontis-blocks') },
    { value: 'bottom', label: __('Slide Bottom', 'frontis-blocks') },
    { value: 'zoom', label: __('Zoom', 'frontis-blocks') },
    { value: 'flip', label: __('Flip', 'frontis-blocks') },
    { value: 'fade', label: __('Fade', 'frontis-blocks') },
];

export const SELECT_SEPARATOR_TYPE = [
    { label: "Colon", value: "colon" },
    { label: "Line", value: "line" },
    { label: "Slash", value: "slash" },
    { label: "Custom", value: "custom" },
];
export const UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "em", value: "em" },
];

export const LAYOUT_TYPE = [
    { label: "Flex", value: "flex" },
    { label: "Grid", value: "grid" },
];

export const separator_UNIT_TYPES = [
    { label: "px", value: "px" },
    { label: "%", value: "%" },
    { label: "em", value: "em" },
];

export const LAYOUT_ALIGNMENT = [
    { label: __("Left", "frontis-block"), value: "start" },
    { label: __("Center", "frontis-block"), value: "center" },
    { label: __("Right", "frontis-block"), value: "end" },
    { label: __("Between", "frontis-block"), value: "space-between" },
];

export const NORMAL_HOVER = [
    { label: "Normal", value: "normal" },
    { label: "Hover", value: "hover" },
];

export const SELECT_TYPE = [
    { label: "Front", value: "front" },
    { label: "Back", value: "back" },
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
export const iconType = [
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

