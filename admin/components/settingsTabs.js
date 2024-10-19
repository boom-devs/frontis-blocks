import { __ } from "@wordpress/i18n";
import {
    EditorOptions,
    AssetsGeneration,
    VersionControl,
    EditorEnhancements,
    Performance,
    SiteVisibility
} from "./SettingsComponents";

const SettingsTabs = [
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
    {
        id: "site-visibility",
        label: __("Site Visibility", "frontis-blocks"),
        component: SiteVisibility,
    }
];

export default SettingsTabs;
