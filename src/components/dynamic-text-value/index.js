import { __ } from "@wordpress/i18n";
import { useRef, useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import { decodeEntities } from "@wordpress/html-entities";
import { dateI18n, __experimentalGetSettings as getDateSettings } from "@wordpress/date";
import { useDeviceType } from "@Config/displayType";

export default function DynamicTextValue({
  textEnabled = false,
  textSource = "current_post",
  textField = "post_title",

  textPostId = 0,
  textPostType = "",
  textPostLabel = "",

  textFeaturedImageField = "title",

  textDateType = "published",
  textDateFormat = "default",
  textTimeType = "published",
  textTimeFormat = "default",

  textCommentsZeroText = "No Response",
  textCommentsOneText = "One Response",
  textCommentsManyText = "{num} Response",

  textTermsTaxonomy = "category",
  textTermsSeparator = ", ",

  textLinkEnabled = false,
  textLinkSource = "post_permalink",

  context = {},
}) {
  const { postType: ctxPostType, postId: ctxPostId } = context || {};

  const getPlainText = (html) => {
    const raw = html ?? "";
    const decoded = decodeEntities(raw);
    let text = decoded.replace(/<[^>]+>/g, "");
    text = text.replace(/\r?\n|\r/g, " ");
    text = text.replace(/\u00A0/g, " ");
    text = text.replace(/[\u200B-\u200D\uFEFF]/g, "");
    return text.replace(/\s{2,}/g, " ").trim();
  };

  const getSiteDateFormat = () => (getDateSettings?.()?.formats?.date || "F j, Y");
  const getSiteTimeFormat = () => (getDateSettings?.()?.formats?.time || "g:i a");
  const formatDateByPhp = (phpFmt, jsDate) => dateI18n(phpFmt, jsDate);

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

  const isPostBasedSource =
    !!textEnabled && (textSource === "current_post" || textSource === "post_type");
  const isSiteField = ["site_title", "site_tagline"].includes(textSource);
  const isArchiveField = ["archive_title", "archive_description"].includes(textSource);

  const targetPostId = textSource === "post_type" && textPostId ? textPostId : ctxPostId;
  const targetPostType = textSource === "post_type" ? (textPostType || "post") : ctxPostType;

  const shouldUseDynamic =
    textEnabled &&
    ((isPostBasedSource && CURRENT_POST_FIELDS.includes(textField)) ||
      isSiteField ||
      isArchiveField);

  const useSelectHook = (typeof window !== "undefined" && window.wp?.data?.useSelect) || useSelect;

  const isLoopOrQuery = useSelectHook((select) => {
    const mainPostId = (typeof window !== "undefined" && window.wp?.data?.select("core/editor")?.getCurrentPostId?.()) || select("core/editor")?.getCurrentPostId?.();
    return !!(ctxPostId && mainPostId && ctxPostId !== mainPostId);
  }, [ctxPostId]);

  const deviceType = useDeviceType();

  const loopBuilderSettings = useSelectHook(
    (select) => {
      if (typeof select("core/block-editor")?.getBlocks === "function") {
        const blocks = select("core/block-editor").getBlocks();
        const findLoopBuilder = (blocksList) => {
          for (const b of blocksList) {
            if (b.name === "frontis-blocks/loop-builder") return b;
            if (b.innerBlocks?.length) {
              const found = findLoopBuilder(b.innerBlocks);
              if (found) return found;
            }
          }
          return null;
        };
        const loopBlock = findLoopBuilder(blocks);
        if (loopBlock) {
          const limitAttr = loopBlock.attributes?.excerptWordLimit;
          const moreAttr = loopBlock.attributes?.excerptMoreText;
          let limit = 20;
          if (limitAttr && typeof limitAttr === "object") {
            limit = Number(limitAttr[deviceType] || limitAttr.Desktop || limitAttr.Tablet || limitAttr.Mobile || 20);
          } else if (limitAttr !== undefined) {
            limit = Number(limitAttr || 20);
          }
          return {
            excerptWordLimit: limit,
            excerptMoreText: moreAttr !== undefined ? moreAttr : "...",
          };
        }
      }
      return { excerptWordLimit: 20, excerptMoreText: "..." };
    },
    [deviceType]
  );

  /* ------ BOOLEANS for link dependencies ------ */
  const needsMediaForLink =
    textLinkEnabled && textLinkSource === "featured_image";
  const needsAuthorForLink =
    textLinkEnabled && ["avatar_profile_url", "archive_url"].includes(textLinkSource);

  /* ---------------- data ---------------- */
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

  // fetch attachment
  const mediaRecord = useSelect(
    (select) =>
      isPostBasedSource &&
      postRecord?.featured_media &&
      (textField === "post_thumbnail" || needsMediaForLink)
        ? select(coreStore).getEntityRecord("postType", "attachment", postRecord.featured_media)
        : null,
    [isPostBasedSource, postRecord?.featured_media, textField, textFeaturedImageField, needsMediaForLink]
  );

  const taxonomySupported =
    !!textTermsTaxonomy && !!postTypeObj?.taxonomies?.includes(textTermsTaxonomy);

  const shouldQueryTerms =
    isPostBasedSource && textField === "post_terms" && targetPostId && taxonomySupported;

  const dynamicTermsForPost = useSelect(
    (select) =>
      shouldQueryTerms
        ? select(coreStore).getEntityRecords("taxonomy", textTermsTaxonomy, {
            post: targetPostId,
            per_page: 100,
          })
        : null,
    [shouldQueryTerms, textTermsTaxonomy, targetPostId]
  );

  const commentsList = useSelect(
    (select) =>
      isPostBasedSource && textField === "comments_number" && targetPostId
        ? select(coreStore).getEntityRecords("root", "comment", {
            post: targetPostId,
            status: "approve",
            per_page: 100,
          })
        : null,
    [isPostBasedSource, textField, targetPostId]
  );

  // fetch author
  const authorRecord = useSelect(
    (select) =>
      isPostBasedSource &&
      postRecord?.author &&
      (textField.startsWith("author_") || needsAuthorForLink)
        ? select(coreStore).getUser(postRecord.author)
        : null,
    [isPostBasedSource, textField, postRecord?.author, needsAuthorForLink]
  );

  // fetch site info
  const siteInfo = useSelect(
    (select) =>
      (isSiteField || textLinkEnabled)
        ? select(coreStore).getEntityRecord("root", "site", undefined)
        : null,
    [isSiteField, textLinkEnabled]
  );

  /* ---------------- value ---------------- */
  const value = (() => {
    if (!shouldUseDynamic) return "";

    if (isSiteField) {
      switch (textSource) {
        case "site_title":
          return getPlainText(siteInfo?.title) || __("No Content", "frontis-blocks");
        case "site_tagline":
          return getPlainText(siteInfo?.description) || __("No Content", "frontis-blocks");
        default:
          return "";
      }
    }

    if (isArchiveField) {
      return textSource === "archive_title"
        ? __("Archive Title", "frontis-blocks")
        : __("Archive Description", "frontis-blocks");
    }

    if (!isPostBasedSource) return "";
    if (!isReady) return undefined;
    if (!postRecord) return __("No Content", "frontis-blocks");

    switch (textField) {
      case "post_title":
        return getPlainText(postRecord.title?.rendered);

      case "post_excerpt": {
        const supportsExcerpt = !!postTypeObj?.supports?.excerpt;
        if (!supportsExcerpt) return __("No Content", "frontis-blocks");
        const hasRaw = !!postRecord.excerpt?.raw?.trim();
        const isLoop = !!(context.isLoopBuilder || isLoopOrQuery);
        const rawExcerpt = isLoop
          ? (postRecord.excerpt?.raw?.trim() || postRecord.excerpt?.rendered?.trim() || "")
          : postRecord.excerpt?.raw?.trim();
        let excerptVal = rawExcerpt ? getPlainText(rawExcerpt) : "";
        if (isLoop && !hasRaw && excerptVal) {
          const words = excerptVal.split(/\s+/);
          const limit = loopBuilderSettings.excerptWordLimit;
          const suffix = loopBuilderSettings.excerptMoreText;
          if (words.length > limit) {
            excerptVal = words.slice(0, limit).join(" ") + suffix;
          }
        }
        return excerptVal || __("No Content", "frontis-blocks");
      }

      case "post_thumbnail": {
        if (!postRecord?.featured_media) return __("No Content", "frontis-blocks");
        if (!mediaRecord) return __("(loading...)", "frontis-blocks");
        const sub = textFeaturedImageField || "attachment_url";
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
        const isModified = textDateType === "modified";
        const rawGMT = isModified ? postRecord?.modified_gmt : postRecord?.date_gmt;
        const rawLOC = isModified ? postRecord?.modified : postRecord?.date;
        const d = parseWpDate(rawGMT ?? rawLOC, Boolean(rawGMT));
        if (!d) return __("No Content", "frontis-blocks");
        switch (textDateFormat) {
          case "jS F Y":
          case "Y-m-d":
          case "m/d/Y":
          case "d/m/Y":
            return formatDateByPhp(textDateFormat, d);
          case "human":
            return humanizeDate(d);
          default:
            return formatDateByPhp(getSiteDateFormat(), d);
        }
      }

      case "post_time": {
        const isModified = textTimeType === "modified";
        const rawGMT = isModified ? postRecord?.modified_gmt : postRecord?.date_gmt;
        const rawLOC = isModified ? postRecord?.modified : postRecord?.date;
        const d = parseWpDate(rawGMT ?? rawLOC, Boolean(rawGMT));
        if (!d) return __("No Content", "frontis-blocks");
        switch (textTimeFormat) {
          case "default":
            return dateI18n(getSiteTimeFormat(), d);
          case "g:i A":
          case "g:i":
          case "g:i:s a":
            return dateI18n(textTimeFormat, d);
          default:
            return dateI18n(getSiteTimeFormat(), d);
        }
      }

      case "post_terms": {
        if (!targetPostId || !textTermsTaxonomy) return __("No Content", "frontis-blocks");
        if (!taxonomySupported) return __("No Content", "frontis-blocks");
        if (typeof dynamicTermsForPost === "undefined")
          return __("(loading terms...)", "frontis-blocks");
        if (!dynamicTermsForPost || !dynamicTermsForPost.length)
          return __("No Content", "frontis-blocks");
        return dynamicTermsForPost.map((t) => t.name).join(textTermsSeparator || ", ");
      }

      case "post_id":
        return String(postRecord.id ?? "");

      case "comments_number": {
        let count =
          typeof postRecord?.comment_count !== "undefined"
            ? Number(postRecord.comment_count)
            : null;
        if (count === null) {
          if (typeof commentsList === "undefined")
            return __("(loading comments...)", "frontis-blocks");
          count = Number(commentsList?.length || 0);
        }
        const zeroTxt = (textCommentsZeroText || __("No Responses", "frontis-blocks")).trim();
        const oneTxt = (textCommentsOneText || __("One Response", "frontis-blocks")).trim();
        const manyTxt = (textCommentsManyText || __("Responses {num}", "frontis-blocks")).trim();
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
        switch (textField) {
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

  /* -------- helpers for link building -------- */
  const getFeaturedImageUrl = (media) => {
    if (!media) return "";
    return (
      media?.media_details?.sizes?.full?.source_url ||
      media?.media_details?.sizes?.large?.source_url ||
      media?.source_url ||
      ""
    );
  };

  const buildPostTypeArchiveUrl = () => {
    const base = (siteInfo?.url || siteInfo?.home || "").replace(/\/$/, "");
    if (!base || !postTypeObj) return "";
    const ha = postTypeObj?.has_archive;
    if (typeof ha === "string" && ha.trim()) {
      const slug = ha.replace(/^\/+|\/+$/g, "");
      return `${base}/${slug}/`;
    }
    const slug = (postTypeObj?.slug || postTypeObj?.rest_base || targetPostType || "")
      .replace(/^\/+|\/+$/g, "");
    return slug ? `${base}/${slug}/` : "";
  };

  const buildAuthorArchiveUrl = () => {
    if (authorRecord?.link) return authorRecord.link;
    const base = (siteInfo?.url || siteInfo?.home || "").replace(/\/$/, "");
    const id = postRecord?.author;
    return base && id ? `${base}/?author=${id}` : "";
  };

  /* ---------------- link url ---------------- */
  const linkUrl = (() => {
    if (!textLinkEnabled) return "";
    const permalink = postRecord?.link || "";
    switch (textLinkSource) {
      case "post_permalink":
        return permalink || "";
      case "comments_area":
        return permalink ? `${permalink}#comments` : "";
      case "featured_image":
        return getFeaturedImageUrl(mediaRecord);
      case "avatar_profile_url":
        return authorRecord?.avatar_urls?.["96"] || "";
      case "author_page_url":
        return buildPostTypeArchiveUrl();
      case "archive_url":
        return buildAuthorArchiveUrl();
      default:
        return "";
    }
  })();

  // no-flicker value
  const lastValueRef = useRef("");
  const dynamicDisplayValue = typeof value === "undefined" ? lastValueRef.current : value;
  useEffect(() => {
    if (typeof value !== "undefined") lastValueRef.current = value;
  }, [value]);

  // no-flicker link
  const lastLinkRef = useRef("");
  const dynamicDisplayLink = typeof linkUrl === "undefined" ? lastLinkRef.current : linkUrl;
  useEffect(() => {
    if (typeof linkUrl !== "undefined") lastLinkRef.current = linkUrl || "";
  }, [linkUrl]);

  return {
    value,
    dynamicDisplayValue,
    dynamicDisplayLink,
    loading: typeof value === "undefined",
    ready: isReady,
    targetPostId,
    targetPostType,
  };
}