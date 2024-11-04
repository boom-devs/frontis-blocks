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
    borderWidth: {
        type: "number",
        default: 1,
    },
    borderColor: {
        type: "string",
    },
    borderRadius: {
        type: "number",
    },
    // Padding
    paddingTop: {
        type: "number",
        default: 0,
    },
    paddingRight: {
        type: "number",
        default: 0,
    },
    paddingBottom: {
        type: "number",
        default: 0,
    },
    paddingLeft: {
        type: "number",
        default: 0,
    },
    // Margin
    marginTop: {
        type: "number",
        default: 0,
    },
    marginRight: {
        type: "number",
        default: 0,
    },
    marginBottom: {
        type: "number",
        default: 0,
    },
    marginLeft: {
        type: "number",
        default: 0,
    },
};

export default attributes;