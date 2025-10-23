import { __ } from "@wordpress/i18n";
import { BaseControl, ToggleControl } from "@wordpress/components";
import Select2 from "react-select";
import { useSelect } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import { useState, useEffect, useMemo } from "@wordpress/element";

import {
  DYNAMIC_IMAGE_SOURCE_OPTIONS,
  DYNAMIC_IMAGE_FIELD_OPTIONS,
  WP_IMAGE_SIZE_OPTIONS,
  DYNAMIC_LINK_SOURCE_OPTIONS,
} from "@Constants/fbConstants";

export default function DynamicImageSourceControl({
  enabled = false,
  onChangeEnabled,

  source = "current_post",
  onChangeSource,

  postId = 0,
  setPostId,
  postType = "",
  setPostType,
  postLabel = "",
  setPostLabel,

  field = "featured_image",
  onChangeField,

  size = "full",
  onChangeSize,

  fallbackUrl = "",
  setFallbackUrl,
  fallbackAlt = "",
  setFallbackAlt,
  fallbackId = "",
  setFallbackId,

  enableLink = false,
  onChangeEnableLink,
  linkSource = "post_permalink",
  onChangeLinkSource,
}) {

  const noop = () => {};

  /**
   * Exclude Post Types
   */
  const EXCLUDE_POST_TYPES = [
    "attachment",
    "revision",
    "nav_menu_item",
    "custom_css",
    "customize_changeset",
    "oembed_cache",
    "user_request",
    "wp_block",
    "wp_navigation",
    "wp_template",
    "wp_template_part",
    "wp_global_styles",
    "wp_font_family",
    "wp_font_face",
    "wp_font_collection",
  ];

  /**
   * Post Types
   */
  const postTypes = useSelect((select) => {
    const all = select(coreStore).getPostTypes({ per_page: -1 }) || [];
    return all.filter(
      (pt) =>
        pt.viewable &&
        pt.supports?.title &&
        !EXCLUDE_POST_TYPES.includes(pt.slug)
    );
  }, []);

  /**
   * Post Options
   */
  const postOptions = useSelect(
    (select) => {
      const types = (postTypes || []).map((t) => t.slug);
      if (!types.length) return [];

      const items = [];
      types.forEach((t) => {
        const recs =
          select(coreStore).getEntityRecords("postType", t, {
            status: "publish",
            per_page: 20,
            orderby: "date",
            order: "desc",
            _fields: ["id", "title", "type"],
          }) || [];
        recs.forEach((r) => items.push(r));
      });

      return items.map((r) => ({
        value: r.id,
        label: r.title?.rendered
          ? r.title.rendered.replace(/<[^>]+>/g, "")
          : "(no title)",
        meta: r.type,
      }));
    },
    [postTypes]
  );

  const isPostBasedSource =
    enabled && (source === "current_post" || source === "post_type");

  /**
   * Dynamic Image Source (local UI state mirror)
   */
  const [imageSource, setImageSource] = useState(source || "current_post");
  useEffect(() => {
    setImageSource(source || "current_post");
  }, [source]);

  const selectedImageSource = useMemo(() => {
    const v = imageSource || "current_post";
    return (
      DYNAMIC_IMAGE_SOURCE_OPTIONS.find((o) => o.value === v) ||
      DYNAMIC_IMAGE_SOURCE_OPTIONS[0]
    );
  }, [imageSource]);

  const handleImageSourceChange = (opt) => {
    const val =
      opt && typeof opt.value === "string" ? opt.value : "current_post";
    setImageSource(val);
    (onChangeSource || noop)(val);
  };

  /**
   * Dynamic Image Field (local UI state mirror)
   */
  const [imageField, setImageField] = useState(field || "featured_image");
  useEffect(() => {
    setImageField(field || "featured_image");
  }, [field]);

  const selectedImageField = useMemo(() => {
    const v = imageField || "featured_image";
    return DYNAMIC_IMAGE_FIELD_OPTIONS.find((o) => o.value === v) || null;
  }, [imageField]);

  const handleImageFieldChange = (opt) => {
    const val =
      opt && typeof opt.value === "string" ? opt.value : "featured_image";
    setImageField(val);
    (onChangeField || noop)(val);
  };

  /**
   * Dynamic Image Size (local UI state mirror)
   */
  const [imageSize, setImageSize] = useState(size || "full");
  useEffect(() => {
    setImageSize(size || "full");
  }, [size]);

  const selectedImageSize = useMemo(() => {
    const v = imageSize || "full";
    return WP_IMAGE_SIZE_OPTIONS.find((o) => o.value === v) || null;
  }, [imageSize]);

  const handleImageSizeChange = (opt) => {
    const val = opt && typeof opt.value === "string" ? opt.value : "full";
    setImageSize(val);
    (onChangeSize || noop)(val);
  };

  /**
   * Dynamic Link Source (local UI state mirror)
   */
  const [linkSourceState, setLinkSourceState] = useState(
    linkSource || "post_permalink"
  );
  useEffect(() => {
    setLinkSourceState(linkSource || "post_permalink");
  }, [linkSource]);

  const selectedLinkSource = useMemo(() => {
    const v = linkSourceState || "post_permalink";
    return (
      DYNAMIC_LINK_SOURCE_OPTIONS.find((o) => o.value === v) ||
      DYNAMIC_LINK_SOURCE_OPTIONS[0]
    );
  }, [linkSourceState]);

  const handleLinkSourceChange = (opt) => {
    const val =
      opt && typeof opt.value === "string" ? opt.value : "post_permalink";
    setLinkSourceState(val);
    (onChangeLinkSource || noop)(val);
  };

  /**
   * Default Fallback Image (once)
   */
  let defaultFallbackImageUrl = "";
  if (typeof FrontisBlocksData !== "undefined") {
    defaultFallbackImageUrl =
      FrontisBlocksData.pluginUrl + "assets/images/preset-bg.jpg";
  }

  useEffect(() => {
    if (!fallbackUrl) {
      (setFallbackUrl || noop)(defaultFallbackImageUrl);
    }

  }, []);

  /**
   * Ensure defaults when enabled toggled on (without render-time set)
   */
  useEffect(() => {
    if (enabled) {
      if (!source) (onChangeSource || noop)("current_post");
      if (!field) (onChangeField || noop)("featured_image");
      if (!size) (onChangeSize || noop)("full");
    }
  }, [enabled]);

  return (
    <div className="fb-dynamic-image-panel">
      <ToggleControl
        label={__("Dynamic Image", "frontis-blocks")}
        checked={enabled}
        onChange={(value) => {
          (onChangeEnabled || noop)(value);
          if (value) {
            if (!source) (onChangeSource || noop)("current_post");
            if (!field) (onChangeField || noop)("featured_image");
            if (!size) (onChangeSize || noop)("full");
          }
        }}
      />

      <BaseControl label={__("Data Source", "frontis-blocks")}>
        <Select2
          options={DYNAMIC_IMAGE_SOURCE_OPTIONS}
          value={selectedImageSource}
          onChange={handleImageSourceChange}
          className="fb-select2-control"
        />
      </BaseControl>

      {source === "post_type" && (
        <BaseControl label={__("Search Posts", "frontis-blocks")}>
          <Select2
            options={postOptions}
            value={postOptions.find((o) => o.value === postId) || null}
            onChange={(opt) => {
              (setPostId || noop)(opt?.value ?? 0);
              (setPostType || noop)(opt?.meta ?? "");
              (setPostLabel || noop)(opt?.label ?? "");
            }}
            className="fb-select2-control"
          />
        </BaseControl>
      )}

      {isPostBasedSource && (
        <>
          <BaseControl label={__("Source Field", "frontis-blocks")}>
            <Select2
              options={DYNAMIC_IMAGE_FIELD_OPTIONS}
              value={selectedImageField}
              onChange={handleImageFieldChange}
              className="fb-select2-control"
            />
          </BaseControl>
        </>
      )}

      <BaseControl label={__("Image Size", "frontis-blocks")}>
        <Select2
          options={WP_IMAGE_SIZE_OPTIONS}
          value={selectedImageSize}
          onChange={handleImageSizeChange}
          className="fb-select2-control"
        />
      </BaseControl>

      <BaseControl
        label={__("Fallback Image", "frontis-blocks")}
        className="fb-advanced-heading-bg-image"
      >
        {fallbackUrl ? (
          <>
            <div
              className="fb-image-avatar-control"
              style={{ backgroundImage: `url(${fallbackUrl})` }}
            >
              <button
                className="fb-image-avatar-delete"
                onClick={() => {
                  (setFallbackUrl || noop)(null);
                  (setFallbackAlt || noop)(null);
                  (setFallbackId || noop)(null);
                }}
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.9431 22C18.466 22 22.9431 17.5228 22.9431 12C22.9431 6.47715 18.466 2 12.9431 2C7.42027 2 2.94312 6.47715 2.94312 12C2.94312 17.5228 7.42027 22 12.9431 22Z"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M15.4431 9.50002L10.4431 14.5M10.4431 9.5L15.4431 14.5"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <button
                className="fb-image-replace-btn"
                onClick={() => {
                  const mediaUploader = wp.media({
                    title: __("Select or Upload Background Image", "frontis-blocks"),
                    button: { text: __("Use this image", "frontis-blocks") },
                    multiple: false,
                  });

                  mediaUploader.on("select", function () {
                    const attachment = mediaUploader
                      .state()
                      .get("selection")
                      .first()
                      .toJSON();

                    (setFallbackUrl || noop)(attachment.url);
                    (setFallbackAlt || noop)(attachment.alt);
                    (setFallbackId || noop)(attachment.id);
                  });

                  mediaUploader.open();
                }}
              >
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4431 19.75C10.8573 19.75 11.1931 19.4142 11.1931 19C11.1931 18.5858 10.8573 18.25 10.4431 18.25V19.75ZM11.9431 5V5.75C12.2464 5.75 12.5199 5.56727 12.636 5.28701C12.7521 5.00676 12.6879 4.68417 12.4734 4.46967L11.9431 5ZM10.4734 2.46967C10.1806 2.17678 9.70568 2.17678 9.41279 2.46967C9.1199 2.76256 9.1199 3.23744 9.41279 3.53033L10.4734 2.46967ZM10.4431 18.25H9.9434V19.75H10.4431V18.25ZM9.94312 5.75H11.9431V4.25H9.94312V5.75ZM12.4734 4.46967L10.4734 2.46967L9.41279 3.53033L11.4128 5.53033L12.4734 4.46967ZM2.19312 12C2.19312 16.2802 5.66323 19.75 9.9434 19.75V18.25C6.49158 18.25 3.69312 15.4517 3.69312 12H2.19312ZM3.69312 12C3.69312 8.54822 6.49134 5.75 9.94312 5.75V4.25C5.66291 4.25 2.19312 7.71979 2.19312 12H3.69312Z"
                    fill="#1C274C"
                  />
                  <path
                    d="M13.9431 19V18.25C13.6398 18.25 13.3663 18.4327 13.2502 18.713C13.1341 18.9932 13.1983 19.3158 13.4128 19.5303L13.9431 19ZM15.4128 21.5303C15.7057 21.8232 16.1805 21.8232 16.4734 21.5303C16.7663 21.2374 16.7663 20.7626 16.4734 20.4697L15.4128 21.5303ZM15.4431 4.25C15.0289 4.25 14.6931 4.58579 14.6931 5C14.6931 5.41421 15.0289 5.75 15.4431 5.75V4.25ZM15.9431 18.25H13.9431V19.75H15.9431V18.25ZM13.4128 19.5303L15.4128 21.5303L16.4734 20.4697L14.4734 18.4697L13.4128 19.5303ZM15.4431 5.75H15.9431V4.25H15.4431V5.75ZM22.1931 12C22.1931 15.4518 19.3949 18.25 15.9431 18.25V19.75C20.2233 19.75 23.6931 16.2802 23.6931 12H22.1931ZM23.6931 12C23.6931 7.71979 20.2233 4.25 15.9431 4.25V5.75C19.3949 5.75 22.1931 8.54822 22.1931 12H23.6931Z"
                    fill="#1C274C"
                  />
                </svg>
                Replace
              </button>
            </div>
          </>
        ) : (
          <button
            className="fb-image-upload-btn"
            onClick={() => {
              const mediaUploader = wp.media({
                title: __("Select or Upload Image", "frontis-blocks"),
                button: { text: __("Use this image", "frontis-blocks") },
                multiple: false,
              });
              mediaUploader.on("select", () => {
                const a = mediaUploader.state().get("selection").first().toJSON();
                (setFallbackUrl || noop)(a?.url ?? null);
                (setFallbackAlt || noop)(a?.alt ?? null);
                (setFallbackId || noop)(String(a?.id ?? null));
              });
              mediaUploader.open();
            }}
          >
            {__("Choose Image", "frontis-blocks")}
          </button>
        )}
      </BaseControl>

      <ToggleControl
        label={__("Enable Dynamic Link", "frontis-blocks")}
        checked={enableLink}
        onChange={(value) => (onChangeEnableLink || noop)(value)}
      />

      {enableLink && (
        <BaseControl label={__("Link Source", "frontis-blocks")}>
          <Select2
            options={DYNAMIC_LINK_SOURCE_OPTIONS}
            value={selectedLinkSource}
            onChange={handleLinkSourceChange}
            className="fb-select2-control"
          />
        </BaseControl>
      )}
    </div>
  );
}
