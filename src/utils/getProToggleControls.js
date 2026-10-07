import React from "react";
import { __ } from "@wordpress/i18n";
import { applyFilters } from "@wordpress/hooks";
import { ToggleControl } from "@wordpress/components";
import getProActive from "@Utils/getProActive";

const getProToggleControls = ({
  hook,
  attributes,
  setAttributes,
  dynamicAttr,
  label,
  keyPrefix = "pro-toggle",
  isProActive = true,
}) => {
  const pro = typeof isProActive === "boolean" ? isProActive : getProActive();
  const checked = !!(attributes && attributes[dynamicAttr]);

  // Check if any external filter registered custom controls
  if (hook) {
    const external = applyFilters(hook, [], {
      attributes,
      setAttributes,
      isProActive: pro,
    });
    if (Array.isArray(external) && external.length > 0) {
      return external;
    }
  }

  // Always return active, unlocked ToggleControl
  return [
    {
      key: `${keyPrefix}-${dynamicAttr}`,
      comp: (
        <ToggleControl
          label={label || __("Dynamic Content", "frontis-blocks")}
          checked={checked}
          onChange={(value) => setAttributes({ [dynamicAttr]: value })}
        />
      ),
    },
  ];
};

export default getProToggleControls;