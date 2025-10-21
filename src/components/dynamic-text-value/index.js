// components/dynamic/useDynamicTextValue.js 
import { __ } from "@wordpress/i18n";
import { useRef } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import { decodeEntities } from "@wordpress/html-entities";
import { dateI18n, __experimentalGetSettings as getDateSettings } from "@wordpress/date";

/**
 * Resolve dynamic text for post/site/archive with flicker-less display.
 * Pass generic props (no prefix), so you can reuse across blocks with any attribute names.
 */
export default function DynamicTextValue({
  // toggles & source
  enabled = false,
  source = "current_post", // 'current_post' | 'post_type' | 'site_title' | 'site_tagline' | 'archive_title' | 'archive_description'
  field = "post_title",    // post_* / author_* / comments_number ...
  // post selection
  postId: explicitPostId = 0,
  postType: explicitPostType = "",
  postLabel = "",
  // sub-fields
  featuredImageField = "title",
  // date/time
  dateType = "published",
  dateFormat = "default",
  timeType = "published",
  timeFormat = "default",
  // comments texts
  commentsZeroText = "No Response",
  commentsOneText = "One Response",
  commentsManyText = "{num} Response",
  // terms
  termsTaxonomy = "category",
  termsSeparator = ", ",
  // current post context (e.g. from block context)
  contextPostId,
  contextPostType,
}) {
  // ---------------- helpers ----------------
  const getPlainText = (html) => {
    const raw = html ?? "";
    const decoded = decodeEntities(raw);
    let text = decoded.replace(/<[^>]+>/g, "");
    text = text.replace(/\r?\n|\r/g, " ");
    text = text.replace(/\u00A0/g, " ");
    text = text.replace(/[\u200B-\u200D\uFEFF]/g, "");
    return text.replace(/\s{2,}/g, " ").trim();
  };

  const getSiteDateFormat = () => {
    const settings = getDateSettings?.() || {};
    return settings?.formats?.date || "F j, Y";
  };
  const getSiteTimeFormat = () => {
    const settings = getDateSettings?.() || {};
    return settings?.formats?.time || "g:i a";
  };
  const formatDateByPhp = (phpFmt, jsDate) => dateI18n(phpFmt, jsDate);

  // WP REST *_gmt string → ensure UTC parse
  const parseWpDate = (raw, useGmt = false) => {
    if (!raw) return null;
    const s = String(raw).trim();
    const hasTZ = /([Zz]|[+\-]\d{2}:?\d{2})$/.test(s);
    const iso = useGmt && !hasTZ ? `${s}Z` : s;
    const d = new Date(iso);
    return isNaN(d.getTime()) ? null : d;
  };

  const humanizeDate = (date) => {
    if (!date) return "";
    const now = new Date();
    const diffSec = Math.round((now - date) / 1000);
    const abs = Math.abs(diffSec);
    const units = [
      ["year", 31536000],
      ["month", 2592000],
      ["week", 604800],
      ["day", 86400],
      ["hour", 3600],
      ["minute", 60],
      ["second", 1],
    ];
    for (const [u, s] of units) {
      const v = Math.floor(abs / s);
      if (v >= 1)
        return diffSec >= 0
          ? `${v} ${v === 1 ? u : `${u}s`} ${__("ago", "frontis-blocks")}`
          : `${__("in", "frontis-blocks")} ${v} ${v === 1 ? u : `${u}s`}`;
    }
    return __("just now", "frontis-blocks");
  };

  // ---------------- flags & targets ----------------
  const CURRENT_POST_FIELDS = [
    "post_title",
    "post_excerpt",
    "post_thumbnail",
    "post_date",
    "post_time",
    "post_terms",
    "post_id",
    "comments_number",
    "author_name",
    "author_first_name",
    "author_last_name",
    "author_nickname",
    "author_description",
    "author_email",
    "author_url",
    "author_avatar",
  ];
  const isPostBasedSource = enabled && (source === "current_post" || source === "post_type");
  const isSiteField = source === "site_title" || source === "site_tagline";
  const isArchiveField = source === "archive_title" || source === "archive_description";

  const targetPostId = source === "post_type" && explicitPostId ? explicitPostId : contextPostId;
  const targetPostType = source === "post_type" ? (explicitPostType || "post") : contextPostType;

  const shouldUseDynamic =
    enabled &&
    ((isPostBasedSource && CURRENT_POST_FIELDS.includes(field)) || isSiteField || isArchiveField);

  // ---------------- data fetching ----------------
  const postRecord = useSelect(
    (select) =>
      isPostBasedSource && targetPostType && targetPostId
        ? select(coreStore).getEntityRecord("postType", targetPostType, targetPostId)
        : null,
    [isPostBasedSource, targetPostType, targetPostId]
  );

  const isReady = useSelect(
    (select) => {
      if (!isPostBasedSource || !targetPostType || !targetPostId) return true;
      return select(coreStore).hasFinishedResolution("getEntityRecord", [
        "postType",
        targetPostType,
        targetPostId,
      ]);
    },
    [isPostBasedSource, targetPostType, targetPostId]
  );

  const postTypeObj = useSelect(
    (select) => (targetPostType ? select(coreStore).getPostType(targetPostType) : null),
    [targetPostType]
  );

  const mediaRecord = useSelect(
    (select) =>
      isPostBasedSource &&
      field === "post_thumbnail" &&
      postRecord?.featured_media
        ? select(coreStore).getEntityRecord("postType", "attachment", postRecord.featured_media)
        : null,
    [isPostBasedSource, field, postRecord?.featured_media, featuredImageField]
  );

  const taxonomySupported =
    !!termsTaxonomy && !!postTypeObj?.taxonomies?.includes(termsTaxonomy);

  const shouldQueryTerms =
    isPostBasedSource && field === "post_terms" && targetPostId && taxonomySupported;

  const dynamicTermsForPost = useSelect(
    (select) =>
      shouldQueryTerms
        ? select(coreStore).getEntityRecords("taxonomy", termsTaxonomy, {
            post: targetPostId,
            per_page: 100,
          })
        : null,
    [shouldQueryTerms, termsTaxonomy, targetPostId]
  );

  const commentsList = useSelect(
    (select) =>
      isPostBasedSource && field === "comments_number" && targetPostId
        ? select(coreStore).getEntityRecords("root", "comment", {
            post: targetPostId,
            status: "approve",
            per_page: 100,
          })
        : null,
    [isPostBasedSource, field, targetPostId]
  );

  const authorRecord = useSelect(
    (select) =>
      isPostBasedSource && field.startsWith("author_") && postRecord?.author
        ? select(coreStore).getUser(postRecord.author)
        : null,
    [isPostBasedSource, field, postRecord?.author]
  );

  const siteInfo = useSelect(
    (select) => (isSiteField ? select(coreStore).getEntityRecord("root", "site", undefined) : null),
    [isSiteField]
  );

  // ---------------- value resolution ----------------
  const value = (() => {
    if (!shouldUseDynamic) return "";

    if (isSiteField) {
      switch (source) {
        case "site_title":
          return getPlainText(siteInfo?.title) || __("No Content", "frontis-blocks");
        case "site_tagline":
          return getPlainText(siteInfo?.description) || __("No Content", "frontis-blocks");
        default:
          return "";
      }
    }

    if (isArchiveField) {
      // Editor placeholder only; PHP renders real value on the front
      return source === "archive_title"
        ? __("Archive Title", "frontis-blocks")
        : __("Archive Description", "frontis-blocks");
    }

    if (!isPostBasedSource) return "";
    if (!isReady) return undefined;
    if (!postRecord) return __("No Content", "frontis-blocks");

    switch (field) {
      case "post_title":
        return getPlainText(postRecord.title?.rendered);

      case "post_excerpt": {
        const supportsExcerpt = !!postTypeObj?.supports?.excerpt;
        if (!supportsExcerpt) return __("No Content", "frontis-blocks");
        const rawExcerpt = postRecord.excerpt?.raw?.trim();
        return rawExcerpt ? getPlainText(rawExcerpt) : __("No Content", "frontis-blocks");
      }

      case "post_thumbnail": {
        if (!postRecord?.featured_media) return __("No Content", "frontis-blocks");
        if (!mediaRecord) return __("(loading...)", "frontis-blocks");
        const sub = featuredImageField || "attachment_url";
        switch (sub) {
          case "title":
            return (
              getPlainText(mediaRecord.title?.rendered || mediaRecord.title) ||
              __("No Content", "frontis-blocks")
            );
          case "alt":
            return getPlainText(mediaRecord.alt_text) || __("No Content", "frontis-blocks");
          case "caption":
            return getPlainText(mediaRecord.caption?.rendered) || __("No Content", "frontis-blocks");
          case "description":
            return (
              getPlainText(
                typeof mediaRecord.description === "string"
                  ? mediaRecord.description
                  : mediaRecord.description?.rendered ?? ""
              ) || __("No Content", "frontis-blocks")
            );
          case "attachment_url":
          default:
            return mediaRecord.source_url || __("No Content", "frontis-blocks");
        }
      }

      case "post_date": {
        const isModified = dateType === "modified";
        const rawGMT = isModified ? postRecord?.modified_gmt : postRecord?.date_gmt;
        const rawLOC = isModified ? postRecord?.modified : postRecord?.date;
        const d = parseWpDate(rawGMT ?? rawLOC, Boolean(rawGMT));
        if (!d) return __("No Content", "frontis-blocks");
        switch (dateFormat) {
          case "jS F Y":
          case "Y-m-d":
          case "m/d/Y":
          case "d/m/Y":
            return formatDateByPhp(dateFormat, d);
          case "human":
            return humanizeDate(d);
          case "default":
          default:
            return formatDateByPhp(getSiteDateFormat(), d);
        }
      }

      case "post_time": {
        const isModified = timeType === "modified";
        const rawGMT = isModified ? postRecord?.modified_gmt : postRecord?.date_gmt;
        const rawLOC = isModified ? postRecord?.modified : postRecord?.date;
        const d = parseWpDate(rawGMT ?? rawLOC, Boolean(rawGMT));
        if (!d) return __("No Content", "frontis-blocks");
        switch (timeFormat) {
          case "default":
            return dateI18n(getSiteTimeFormat(), d);
          case "g:i A":
          case "g:i":
          case "g:i:s a":
            return dateI18n(timeFormat, d);
          default:
            return dateI18n(getSiteTimeFormat(), d);
        }
      }

      case "post_terms": {
        if (!targetPostId || !termsTaxonomy) return __("No Content", "frontis-blocks");
        if (!taxonomySupported) return __("No Content", "frontis-blocks");
        if (typeof dynamicTermsForPost === "undefined")
          return __("(loading terms...)", "frontis-blocks");
        if (!dynamicTermsForPost || !dynamicTermsForPost.length)
          return __("No Content", "frontis-blocks");
        return dynamicTermsForPost.map((t) => t.name).join(termsSeparator || ", ");
      }

      case "post_id":
        return String(postRecord.id ?? "");

      case "comments_number": {
        let count =
          typeof postRecord?.comment_count !== "undefined"
            ? Number(postRecord.comment_count)
            : null;

        if (count === null) {
          if (typeof commentsList === "undefined") return __("(loading comments...)", "frontis-blocks");
          count = Number(commentsList?.length || 0);
        }

        const zeroTxt = (commentsZeroText || __("No Responses", "frontis-blocks")).trim();
        const oneTxt = (commentsOneText || __("One Response", "frontis-blocks")).trim();
        const manyTxt = (commentsManyText || __("Responses {num}", "frontis-blocks")).trim();

        if (count === 0) return zeroTxt;
        if (count === 1) return oneTxt;
        return manyTxt.replace("{num}", String(count));
      }

      case "author_name":
      case "author_first_name":
      case "author_last_name":
      case "author_nickname":
      case "author_description":
      case "author_email":
      case "author_url":
      case "author_avatar": {
        if (typeof authorRecord === "undefined") return __("(loading...)", "frontis-blocks");
        if (!authorRecord) return __("No Content", "frontis-blocks");
        switch (field) {
          case "author_name":
            return authorRecord?.name?.trim() || __("No Content", "frontis-blocks");
          case "author_first_name":
            return authorRecord?.first_name?.trim() || __("No Content", "frontis-blocks");
          case "author_last_name":
            return authorRecord?.last_name?.trim() || __("No Content", "frontis-blocks");
          case "author_nickname":
            return authorRecord?.nickname?.trim() || __("No Content", "frontis-blocks");
          case "author_description": {
            const v = authorRecord?.description;
            return typeof v === "string" && v.trim() ? v.trim() : __("No Content", "frontis-blocks");
          }
          case "author_email":
            return authorRecord?.email?.trim() || __("No Content", "frontis-blocks");
          case "author_url":
            return authorRecord?.url?.trim() || __("No Content", "frontis-blocks");
          case "author_avatar":
            return authorRecord?.avatar_urls?.["96"] || __("No Content", "frontis-blocks");
          default:
            return "";
        }
      }

      default:
        return "";
    }
  })();

  // ---------------- no-flicker display ----------------
  const lastValueRef = useRef("");
  const displayValue = typeof value === "undefined" ? lastValueRef.current : value;
  if (typeof value !== "undefined") {
    lastValueRef.current = value;
  }

  return {
    value,           // may be undefined while loading
    displayValue,    // stable for UI (no flicker)
    loading: typeof value === "undefined",
    ready: isReady,
    targetPostId,
    targetPostType,
  };
}