import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import Edit from "./edit";
import Save from "./save";
import "./style.scss";

registerBlockType("frontis-blocks/off-canvas-menu", {
  title: __("Off-Canvas Menu", "frontis-blocks"),
  description: __("Add an off-canvas menu with your selected pattern content.", "frontis-blocks"),
  category: "layout",
  icon: "menu-alt",
  supports: {
    html: false,
    align: ["wide", "full"],
  },
  example: {},
  edit: Edit,
  save: Save,
});