import { __ } from "@wordpress/i18n";
import EditorOptions from "./settings/EditorOptions";
import AssetsGeneration from "./Settings/AssetsGeneration";
import VersionControl from "./Settings/VersionControl";
import EditorEnhancements from "./Settings/EditorEnhancements";
import Performance from "./Settings/Performance";

const settingsTabs = [
	{
		id: "editor",
		label: __("Editor Options", "frontis-blocks"),
		component: EditorOptions,
	},
	{
		id: "assets",
		label: __("Assets Generation", "frontis-blocks"),
		component: AssetsGeneration,
	},
	{
		id: "version",
		label: __("Version Control", "frontis-blocks"),
		component: VersionControl,
	},
	{
		id: "editor-enhancements",
		label: __("Editor Enhancements", "frontis-blocks"),
		component: EditorEnhancements,
	},
	{
		id: "performance",
		label: __("Performance", "frontis-blocks"),
		component: Performance,
	},
];

export default settingsTabs;
