import { __ } from "@wordpress/i18n";

const imageAccordionPresets = [
	{
		value: "style-1",
		label: __("Style 1 (Rounded + Icon)", "frontis-blocks"),
		icon: "", // Add SVG icon here if available
		attributes: [{ label: "accordionPresetStyle", value: "style-1" }],
	},
	{
		value: "style-2",
		label: __("Style 2 (Full Height + Number)", "frontis-blocks"),
		icon: "",
		attributes: [{ label: "accordionPresetStyle", value: "style-2" }],
	},
	{
		value: "style-3",
		label: __("Style 3 (Horizontal Rows)", "frontis-blocks"),
		icon: "",
		attributes: [{ label: "accordionPresetStyle", value: "style-3" }],
	},
	{
		value: "style-4",
		label: __("Style 4 (Diagonal Slant)", "frontis-blocks"),
		icon: "",
		attributes: [{ label: "accordionPresetStyle", value: "style-4" }],
	},
];

export { imageAccordionPresets };