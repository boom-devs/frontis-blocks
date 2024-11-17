import { __ } from "@wordpress/i18n";
import {
    EditorOptions,
    AssetsGeneration,
    VersionControl,
    EditorEnhancements,
    Performance,
    SiteVisibility
} from "./SettingsComponents";
import { EditorOptionIcon, AssetGenerationIcon, VersionControlIcon, EditorEnhancementIcon, PerformanceIcon, SiteVisibilityIcon, ThemeFontIcon } from "../icons";


const SettingsTabs = [
	{
		id: "editor",
		label: __("Editor Options", "frontis-blocks"),
		icon: <EditorOptionIcon />,
		component: EditorOptions,
	},
	{
		id: "assets",
		label: __("Assets Generation", "frontis-blocks"),
		icon: <AssetGenerationIcon />,
		component: AssetsGeneration,
	},
	{
		id: "version",
		label: __("Version Control", "frontis-blocks"),
		icon: <VersionControlIcon />,
		component: VersionControl,
	},
	{
		id: "editor-enhancements",
		label: __("Editor Enhancements", "frontis-blocks"),
		icon: <EditorEnhancementIcon />,
		component: EditorEnhancements,
	},
	{
		id: "performance",
		label: __("Performance", "frontis-blocks"),
		icon: <PerformanceIcon />,
		component: Performance,
    },
    {
        id: "site-visibility",
        label: __("Site Visibility", "frontis-blocks"),
        icon: <SiteVisibilityIcon />,
        component: SiteVisibility,
    }
];

export default SettingsTabs;
