import { __ } from "@wordpress/i18n";
import { BaseControl, TextControl } from "@wordpress/components";
import Select2 from "react-select";
import { useMemo, useState, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";

import {
  DYNAMIC_DATA_SOURCE_OPTIONS,
  DYNAMIC_DATA_SOURCE_FIELD_OPTIONS,
  DYNAMIC_FEATURED_IMAGE_OPTIONS,
  DYNAMIC_DATE_TIME_TYPE_OPTIONS,
  DYNAMIC_TAXONOMY_OPTIONS,
  getdynamicTextDateFormatOptions,
  getdynamicTextTimeFormatOptions,
} from "@Constants/fbConstants";

export default function DynamicDataSourceControl({
  enabled = false,
  source = "current_post",
  setSource,

  postId = 0,
  setPostId,
  postType = "",
  setPostType,
  postLabel = "",
  setPostLabel,

  field = "post_title",
  setField,
  featuredImageField = "title",
  setFeaturedImageField,

  dateType = "published",
  setDateType,
  dateFormat = "default",
  setDateFormat,
  timeType = "published",
  setTimeType,
  timeFormat = "default",
  setTimeFormat,

  commentsZeroText = "No Response",
  setCommentsZeroText,
  commentsOneText = "One Response",
  setCommentsOneText,
  commentsManyText = "{num} Response",
  setCommentsManyText,

  termsTaxonomy = "category",
  setTermsTaxonomy,
  termsSeparator = ", ",
  setTermsSeparator,
}) {
  const dateFormatOptions = getdynamicTextDateFormatOptions(new Date());
  const timeFormatOptions = getdynamicTextTimeFormatOptions(new Date());

  const [localDataSource, setLocalDataSource] = useState(source || "current_post");
  useEffect(() => setLocalDataSource(source || "current_post"), [source]);

  const [localFeaturedImageField, setLocalFeaturedImageField] = useState(
    featuredImageField || "title"
  );
  useEffect(
    () => setLocalFeaturedImageField(featuredImageField || "title"),
    [featuredImageField]
  );

  const [localTermsTaxonomy, setLocalTermsTaxonomy] = useState(
    termsTaxonomy || "category"
  );
  useEffect(
    () => setLocalTermsTaxonomy(termsTaxonomy || "category"),
    [termsTaxonomy]
  );

  // UI should react immediately to local selection
  const isPostBasedSource =
    !!enabled &&
    (localDataSource === "current_post" || localDataSource === "post_type");

  // memoized selected option objects
  const selectedDataSource = useMemo(() => {
    const v = localDataSource || "current_post";
    return (
      (DYNAMIC_DATA_SOURCE_OPTIONS || []).find((o) => o.value === v) ||
      (DYNAMIC_DATA_SOURCE_OPTIONS || [])[0] ||
      null
    );
  }, [localDataSource]);

  const selectedFeaturedField = useMemo(() => {
    const v = localFeaturedImageField || "title";
    return (
      (DYNAMIC_FEATURED_IMAGE_OPTIONS || []).find((o) => o.value === v) ||
      (DYNAMIC_FEATURED_IMAGE_OPTIONS || [])[0] ||
      null
    );
  }, [localFeaturedImageField]);

  const selectedTermsTaxonomy = useMemo(() => {
    const v = localTermsTaxonomy || "category";
    return (
      (DYNAMIC_TAXONOMY_OPTIONS || []).find((o) => o.value === v) ||
      (DYNAMIC_TAXONOMY_OPTIONS || [])[0] ||
      null
    );
  }, [localTermsTaxonomy]);

  // exclude post types
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

  const postTypes = useSelect((select) => {
    const all = select(coreStore).getPostTypes({ per_page: -1 }) || [];
    return all.filter(
      (pt) => pt.viewable && pt.supports?.title && !EXCLUDE_POST_TYPES.includes(pt.slug)
    );
  }, []);

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

  const handleDataSourceChange = (opt) => {
    const val = opt && typeof opt.value === "string" ? opt.value : "current_post";
    setLocalDataSource(val);
    typeof setSource === "function" && setSource(val);
  };

  const handleFeaturedFieldChange = (opt) => {
    const val = opt && typeof opt.value === "string" ? opt.value : "title";
    setLocalFeaturedImageField(val);
    typeof setFeaturedImageField === "function" && setFeaturedImageField(val);
  };

  const handleTermsTaxonomyChange = (opt) => {
    const val = opt && typeof opt.value === "string" ? opt.value : "category";
    setLocalTermsTaxonomy(val);
    typeof setTermsTaxonomy === "function" && setTermsTaxonomy(val);
  };

  return (
    <>
      {enabled && (
        <>
          <BaseControl label={__("Data Source", "frontis-blocks")}>
            <Select2
              options={DYNAMIC_DATA_SOURCE_OPTIONS || []}
              value={selectedDataSource}
              onChange={handleDataSourceChange}
              className="fb-select2-control"
            />
          </BaseControl>

          {localDataSource === "post_type" && (
            <BaseControl label={__("Search Posts", "frontis-blocks")}>
              <Select2
                options={postOptions || []}
                value={(postOptions || []).find((o) => o.value === postId) || null}
                onChange={(opt) => {
                  typeof setPostId === "function" && setPostId(opt?.value ?? 0);
                  typeof setPostType === "function" && setPostType(opt?.meta ?? "");
                  typeof setPostLabel === "function" && setPostLabel(opt?.label ?? "");
                }}
                className="fb-select2-control"
              />
            </BaseControl>
          )}

          {isPostBasedSource && (
            <>
              <BaseControl label={__("Source Field", "frontis-blocks")}>
                <Select2
                  options={DYNAMIC_DATA_SOURCE_FIELD_OPTIONS || []}
                  value={
                    (DYNAMIC_DATA_SOURCE_FIELD_OPTIONS || []).find(
                      (o) => o.value === field
                    ) || null
                  }
                  onChange={(opt) =>
                    typeof setField === "function" && setField(opt?.value ?? "")
                  }
                  className="fb-select2-control"
                />
              </BaseControl>

              {field === "post_thumbnail" && (
                <BaseControl label={__("Featured Image", "frontis-blocks")}>
                  <Select2
                    options={DYNAMIC_FEATURED_IMAGE_OPTIONS || []}
                    value={selectedFeaturedField}
                    onChange={handleFeaturedFieldChange}
                    className="fb-select2-control"
                  />
                </BaseControl>
              )}

              {field === "post_date" && (
                <>
                  <BaseControl label={__("Date Type", "frontis-blocks")}>
                    <Select2
                      options={DYNAMIC_DATE_TIME_TYPE_OPTIONS || []}
                      value={
                        (DYNAMIC_DATE_TIME_TYPE_OPTIONS || []).find(
                          (o) => o.value === (dateType || "")
                        ) || null
                      }
                      onChange={(opt) =>
                        typeof setDateType === "function" &&
                        setDateType(opt?.value ?? "")
                      }
                      className="fb-select2-control"
                    />
                  </BaseControl>

                  <BaseControl label={__("Date Format", "frontis-blocks")}>
                    <Select2
                      options={dateFormatOptions || []}
                      value={
                        (dateFormatOptions || []).find(
                          (o) => o.value === (dateFormat || "")
                        ) || null
                      }
                      onChange={(opt) =>
                        typeof setDateFormat === "function" &&
                        setDateFormat(opt?.value ?? "")
                      }
                      className="fb-select2-control"
                    />
                  </BaseControl>
                </>
              )}

              {field === "post_time" && (
                <>
                  <BaseControl label={__("Date Type", "frontis-blocks")}>
                    <Select2
                      options={DYNAMIC_DATE_TIME_TYPE_OPTIONS || []}
                      value={
                        (DYNAMIC_DATE_TIME_TYPE_OPTIONS || []).find(
                          (o) => o.value === (timeType || "")
                        ) || null
                      }
                      onChange={(opt) =>
                        typeof setTimeType === "function" &&
                        setTimeType(opt?.value ?? "")
                      }
                      className="fb-select2-control"
                    />
                  </BaseControl>

                  <BaseControl label={__("Time Format", "frontis-blocks")}>
                    <Select2
                      options={timeFormatOptions || []}
                      value={
                        (timeFormatOptions || []).find(
                          (o) => o.value === (timeFormat || "")
                        ) || null
                      }
                      onChange={(opt) =>
                        typeof setTimeFormat === "function" &&
                        setTimeFormat(opt?.value ?? "")
                      }
                      className="fb-select2-control"
                    />
                  </BaseControl>
                </>
              )}

              {field === "comments_number" && (
                <>
                  <TextControl
                    label={__("No Comments Format", "frontis-blocks")}
                    value={commentsZeroText ?? ""}
                    onChange={(v) =>
                      typeof setCommentsZeroText === "function" &&
                      setCommentsZeroText(v)
                    }
                    help={__("Shown when there are 0 comments", "frontis-blocks")}
                  />
                  <TextControl
                    label={__("One Comment Format", "frontis-blocks")}
                    value={commentsOneText ?? ""}
                    onChange={(v) =>
                      typeof setCommentsOneText === "function" &&
                      setCommentsOneText(v)
                    }
                    help={__("Shown when there is exactly 1 comment", "frontis-blocks")}
                  />
                  <TextControl
                    label={__("Many Comment Format", "frontis-blocks")}
                    value={commentsManyText ?? ""}
                    onChange={(v) =>
                      typeof setCommentsManyText === "function" &&
                      setCommentsManyText(v)
                    }
                    help={__("Use {num} to insert the number", "frontis-blocks")}
                  />
                </>
              )}

              {field === "post_terms" && (
                <>
                  <BaseControl label={__("Taxonomy", "frontis-blocks")}>
                    <Select2
                      options={DYNAMIC_TAXONOMY_OPTIONS || []}
                      value={selectedTermsTaxonomy}
                      onChange={handleTermsTaxonomyChange}
                      className="fb-select2-control"
                    />
                  </BaseControl>

                  <TextControl
                    label={__("Separator", "frontis-blocks")}
                    value={termsSeparator ?? ", "}
                    onChange={(v) =>
                      typeof setTermsSeparator === "function" &&
                      setTermsSeparator(v)
                    }
                  />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}