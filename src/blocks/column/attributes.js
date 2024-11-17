import { wrapperWidth, columnOrderPrefix } from "./constants";

const attributes = {
    blockId: {
        type: "string",
    },
    blockMeta: {
        type: "object",
    },
    resOption: {
        type: "string",
        default: "Desktop",
    },
    columns: {
        type: 'number',
        default: 2,
    },
    [`${wrapperWidth}Range`]: {
        type: "number",
    },
    [`TAB${wrapperWidth}Range`]: {
        type: "number",
    },
    [`MOB${wrapperWidth}Range`]: {
        type: "number",
    },
    [`${columnOrderPrefix}Range`]: {
        type: "number",
    },
    [`TAB${columnOrderPrefix}Range`]: {
        type: "number",
    },
    [`MOB${columnOrderPrefix}Range`]: {
        type: "number",
    },
    colAli: {
        type: "string",
        default: "center",
    },
    rowOverFlow: {
        type: "string",
        default: "visible",
    },
    classHook: {
        type: "string",
        default: "",
    },
    // Background
    backgroundType: {
        type: "string",
        default: "fill",
    },
    backgroundColor: {
        type: "string",
    },
    backgroundGradient: {
        type: "string",
        default: "linear-gradient(45deg,#00000000,#00000000)",
    },
    // Border
    borderStyle: {
        type: "string",
        default: "none",
    },
    columnBorderUnits: {
        type: "object",
        default: {
            Desktop: "px",
            Tablet: "px",
            Mobile: "px",
        },
    },
    columnDesktopBorder: {
        type: "object",
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    columnTabBorder: {
        type: "object",
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    columnMobileBorder: {
        type: "object",
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    columnBorderLink: {
        type: "boolean",
        default: true,
    },
    // Padding
    paddingUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    columnDesktopPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    columnTabPadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    columnMobilePadding: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    columnPaddingLink : {
        type : "boolean",
        default: true
    },
    // Margin
    marginUnits: {
		type: 'object',
		default: {
			Desktop: 'px',
			Tablet: 'px',
			Mobile: 'px'
		}
    },
    columnDesktopMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    columnTabMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    columnMobileMargin: {
        type: "object", 
        default: {
            top: "",
            bottom: "",
            left: "",
            right: "",
        },
    },
    columnMarginLink : {
        type : "boolean",
        default: true
    },
};

export default attributes;