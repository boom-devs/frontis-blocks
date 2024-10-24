import { __ } from "@wordpress/i18n";
import {
    EditorOptions,
    AssetsGeneration,
    VersionControl,
    EditorEnhancements,
    Performance,
    SiteVisibility
} from "./SettingsComponents";
import { EditorOption, AssetsGeneration, VersionControl, EditorEnhancements, Performance, SiteVisibility, ThemeFont } from "../icons";


const SettingsTabs = [
	{
		id: "editor",
		label: __("Editor Options", "frontis-blocks"),
		icon: EditorOption,
		component: EditorOptions,
	},
	{
		id: "assets",
		label: __("Assets Generation", "frontis-blocks"),
		icon: AssetsGeneration,
		component: AssetsGeneration,
	},
	{
		id: "version",
		label: __("Version Control", "frontis-blocks"),
		icon: VersionControl,
		component: VersionControl,
	},
	{
		id: "editor-enhancements",
		label: __("Editor Enhancements", "frontis-blocks"),
		icon: EditorEnhancements,
		component: EditorEnhancements,
	},
	{
		id: "performance",
		label: __("Performance", "frontis-blocks"),
		icon: Performance,
		component: Performance,
    },
    {
        id: "site-visibility",
        label: __("Site Visibility", "frontis-blocks"),
        icon: SiteVisibility,
        component: SiteVisibility,
    }
];

export default SettingsTabs;
