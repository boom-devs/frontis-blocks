import { separator } from "@wordpress/icons";

const attributes = {
    blockID: {
        type: "string",
        default: "",
    },
    blockStyle: {
        type: "string",
        default: "",
    },
    backToTopPresetType: {
        type: "string",
        default: "0",
    },
    backToTopPosition: {
        type: "string",
        default: "bottom-right",
    },
    backToTopEntranceAnimation: {
        type: "string",
        default: "fade",
    },
    backToTopContentType: {
        type: "string",
        default: "icon",
    },
    backToTopIcon: {
        type: "string",
        default: "fa fa-angle-up",
    },
    backToTopIconType: {
        type: "string",
        default: "icon",
    },
    backToTopText: {
        type: "string",
        default: "Back To Top",
    },
    backToTopImage: {
        type: "string",
        default: "",
    },
    backToTopImageAlt: {
        type: "string",
        default: "",
    },
    backToTopImageID: {
        type: "number",
    },
};

export default attributes;
