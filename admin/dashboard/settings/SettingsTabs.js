// SettingsTabs.js
import { __ } from "@wordpress/i18n";
import {
  EditorOptionIcon,
  AssetGenerationIcon,
  VersionControlIcon,
  EditorEnhancementIcon,
  PerformanceIcon,
  SiteVisibilityIcon,
} from "../../icons";

import EditorOptions from "./EditorOptions";
import AssetsGeneration from "./AssetsGeneration";
import VersionControl from "./VersionControl";
import EditorEnhancements from "./EditorEnhancements";
import Performance from "./Performance";
import SiteVisibility from "./SiteVisibility";

const SettingsTabs = [
  // General Group
  {
    group: "General",
    id: "assets",
    label: __("Asset Generation", "frontis-blocks"),
    icon: <AssetGenerationIcon />,
    component: AssetsGeneration,
  },
  {
    group: "General",
    id: "performance",
    label: __("Performance", "frontis-blocks"),
    icon: <PerformanceIcon />,
    component: Performance,
  },
  {
    group: "General",
    id: "version",
    label: __("Version Control", "frontis-blocks"),
    icon: <VersionControlIcon />,
    component: VersionControl,
  },

  // Appearance Group
  {
    group: "Appearance",
    id: "editor",
    label: __("Editor Options", "frontis-blocks"),
    icon: <EditorOptionIcon />,
    component: EditorOptions,
  },
  {
    group: "Appearance",
    id: "editor-enhancements",
    label: __("Editor Enhancements", "frontis-blocks"),
    icon: <EditorEnhancementIcon />,
    component: EditorEnhancements,
  },
  {
    group: "Appearance",
    id: "site-visibility",
    label: __("Site Visibility", "frontis-blocks"),
    icon: <SiteVisibilityIcon />,
    component: SiteVisibility,
  },
];

export default SettingsTabs;