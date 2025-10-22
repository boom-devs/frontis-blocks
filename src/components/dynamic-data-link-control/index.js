import { __ } from "@wordpress/i18n";
import { BaseControl, ToggleControl } from "@wordpress/components";
import Select2 from "react-select";
import { useMemo, useState, useEffect } from "@wordpress/element";
import { DYNAMIC_LINK_SOURCE_OPTIONS } from "@Constants/fbConstants";

export default function DynamicDataLinkControl({
  enableLink = false,
  setEnableLink,
  linkSource = "post_permalink",
  setLinkSource,
}) {
  // local mirror to avoid flicker + keep pattern consistent
  const [dynamicLinkSource, setdynamicLinkSource] = useState(linkSource || "post_permalink");
  useEffect(() => setdynamicLinkSource(linkSource || "post_permalink"), [linkSource]);

  const selectedLinkSource = useMemo(() => {
    const v = dynamicLinkSource || "post_permalink";
    return (
      (DYNAMIC_LINK_SOURCE_OPTIONS || []).find((o) => o.value === v) ||
      (DYNAMIC_LINK_SOURCE_OPTIONS || [])[0] ||
      null
    );
  }, [dynamicLinkSource]);

  const handleLinkSourceChange = (opt) => {
    const val = opt && typeof opt.value === "string" ? opt.value : "post_permalink";
    setdynamicLinkSource(val);
    typeof setLinkSource === "function" && setLinkSource(val);
  };

  return (
    <>
      <ToggleControl
        label={__("Enable Link", "frontis-blocks")}
        checked={!!enableLink}
        onChange={(v) => typeof setEnableLink === "function" && setEnableLink(v)}
      />

      {enableLink && (
        <BaseControl label={__("Link Source", "frontis-blocks")}>
          <Select2
            options={DYNAMIC_LINK_SOURCE_OPTIONS || []}
            value={selectedLinkSource}
            onChange={handleLinkSourceChange}
            className="fb-select2-control"
          />
        </BaseControl>
      )}
    </>
  );
}