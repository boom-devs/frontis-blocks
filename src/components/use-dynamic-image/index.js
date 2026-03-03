import { __ } from "@wordpress/i18n";
import { useEffect, useMemo, useRef, useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import { decodeEntities } from "@wordpress/html-entities";

export default function useDynamicImage({
    imageEnabled,
    imageSource,
    imagePostId,
    imagePostType,
    imageField,
    imageSize,
    imageFallbackUrl,
    imageFallbackAlt,
    loopPostType,
    loopPostId,
}) {

    const normSource = imageSource || "current_post";
    const normField  = imageField  || "featured_image";
    const normSize   = imageSize   || "full";

    // get current editor post as fallback
    const currentPostId   = useSelect( (select) => select("core/editor")?.getCurrentPostId?.(), [] );
    const currentPostType = useSelect( (select) => select("core/editor")?.getCurrentPostType?.(), [] );

    // resolve target post/type depending on source
    const targetPostId =
        normSource === "post_type" && imagePostId
        ? imagePostId
        : (loopPostId || currentPostId);

    const targetPostType =
        normSource === "post_type"
        ? (imagePostType || loopPostType || "post")
        : (loopPostType || currentPostType);

    const isPostBasedImage =
        imageEnabled &&
        (normSource === "current_post" || normSource === "post_type");

    const [isSwitching, setIsSwitching] = useState(false);
    const lastGoodRef  = useRef({});
    const lastShownRef = useRef({ key: null, data: null });
    const targetKey    = `${targetPostType || ""}:${targetPostId || ""}:${normField}:${normSize}`;

    useEffect(()=>{ setIsSwitching(true); }, [targetKey]);

    // fetch post
    const postRecord = useSelect(
        (select) =>
        isPostBasedImage && targetPostType && targetPostId
            ? select(coreStore).getEntityRecord("postType", targetPostType, targetPostId)
            : null,
        [isPostBasedImage, targetPostType, targetPostId]
    );

    const isReady = useSelect(
        (select) => {
        if (!isPostBasedImage || !targetPostType || !targetPostId) return true;
        return select(coreStore).hasFinishedResolution("getEntityRecord", ["postType", targetPostType, targetPostId]);
        },
        [isPostBasedImage, targetPostType, targetPostId]
    );

    useEffect(()=>{ if (isReady) setIsSwitching(false); }, [isReady]);

    // featured image attachment
    const featuredAttachment = useSelect(
        (select) =>
        isPostBasedImage && normField === "featured_image" && postRecord?.featured_media
            ? select(coreStore).getEntityRecord("postType", "attachment", postRecord.featured_media)
            : null,
        [isPostBasedImage, normField, postRecord?.featured_media]
    );

    // author (for avatar)
    const authorRecord = useSelect(
        (select) =>
        isPostBasedImage && normField === "avatar_profile" && postRecord?.author
            ? select(coreStore).getEntityRecord("root", "user", postRecord.author)
            : null,
        [isPostBasedImage, normField, postRecord?.author]
    );
    const authorReady = useSelect(
        (select) => {
        if (!(isPostBasedImage && normField === "avatar_profile" && postRecord?.author)) return true;
        return select(coreStore).hasFinishedResolution("getEntityRecord", ["root","user", postRecord.author]);
        },
        [isPostBasedImage, normField, postRecord?.author]
    );

    // site logo
    const siteEntity = useSelect(
        (select) =>
        imageEnabled && normSource === "site_logo_url"
            ? select(coreStore).getEntityRecord("root", "site", undefined)
            : null,
        [imageEnabled, normSource]
    );
    const siteLogoAttachment = useSelect(
        (select) =>
        siteEntity?.site_logo
            ? select(coreStore).getEntityRecord("postType", "attachment", siteEntity.site_logo)
            : null,
        [siteEntity?.site_logo]
    );

    const pickSizeFromAttachment = (att, sizeSlug) => {
        if (!att) return null;
        const sizes = att?.media_details?.sizes || {};
        const chosen = sizes?.[sizeSlug] || sizes?.[String(sizeSlug).toLowerCase?.()];
        if (chosen) return { url: chosen.source_url, width: chosen.width, height: chosen.height };
        return { url: att?.source_url, width: att?.media_details?.width, height: att?.media_details?.height };
    };
    const buildSrcSetFromAttachment = (att) => {
        const sizes = att?.media_details?.sizes || {};
        const entries = Object.values(sizes).filter(Boolean).map(s => `${s.source_url} ${s.width}w${s.height ? ` ${s.height}h` : ""}`);
        return entries.length ? entries.join(", ") : undefined;
    };

    const dynamicImg = useMemo(() => {
        if (!imageEnabled) return null;

        if ((isPostBasedImage && (!isReady || (normField === "avatar_profile" && !authorReady))) || isSwitching) {
        const cached = lastGoodRef.current[targetKey];
        const display = cached || (lastShownRef.current.key && lastShownRef.current.key.split(":")[2] === normField
            ? lastShownRef.current.data
            : null);
        return display ? { ...display, loading: true } : { loading: true };
        }

        // site logo
        if (normSource === "site_logo_url") {
        const pic = pickSizeFromAttachment(siteLogoAttachment, normSize);
        if (pic?.url) {
            return {
            url: pic.url, width: pic.width, height: pic.height,
            alt: decodeEntities(siteLogoAttachment?.alt_text || "") || __("Site Logo", "frontis-blocks"),
            srcSet: buildSrcSetFromAttachment(siteLogoAttachment),
            };
        }
        }

        // post-based
        if (isPostBasedImage) {
        if (!postRecord) {
            return lastGoodRef.current[targetKey] ||
                (lastShownRef.current.key && lastShownRef.current.key.split(":")[2] === normField
                    ? lastShownRef.current.data
                    : null);
        }

        if (normField === "featured_image") {
            if (!featuredAttachment) {
            if (imageFallbackUrl) return { url: imageFallbackUrl, alt: imageFallbackAlt || "" };
            return null;
            }
            const pic = pickSizeFromAttachment(featuredAttachment, normSize);
            return {
            url: pic?.url, width: pic?.width, height: pic?.height,
            alt: decodeEntities(featuredAttachment?.alt_text || __("Featured Image", "frontis-blocks")),
            srcSet: buildSrcSetFromAttachment(featuredAttachment),
            };
        }

        if (normField === "avatar_profile") {
            const avatar = authorRecord?.avatar_urls || {};
            const sizeMap = { thumbnail:48, small:48, medium:96, large:96, full:96 };
            const px = sizeMap[normSize] || 96;
            const url = avatar[String(px)] || avatar["96"] || avatar["48"];
            if (url) return { url, alt: authorRecord?.name || __("Avatar", "frontis-blocks"), width: px, height: px };
        }
        }

        // global fallback
        if (imageFallbackUrl) {
        return { url: imageFallbackUrl, alt: imageFallbackAlt || __("Fallback Image", "frontis-blocks") };
        }
        return null;
    }, [
        imageEnabled, isPostBasedImage, isReady, isSwitching,
        normSource, normField, normSize,
        siteLogoAttachment, postRecord, featuredAttachment, authorRecord,
        imageFallbackUrl, imageFallbackAlt, targetKey, authorReady
    ]);

    // cache last good
    useEffect(() => {
        if (dynamicImg && dynamicImg.url) {
        lastGoodRef.current[targetKey] = {
            url: dynamicImg.url,
            width: dynamicImg.width,
            height: dynamicImg.height,
            alt: dynamicImg.alt || __("Dynamic Image", "frontis-blocks"),
            srcSet: dynamicImg.srcSet || undefined,
        };
        lastShownRef.current = { key: targetKey, data: lastGoodRef.current[targetKey] };
        }
    }, [dynamicImg?.url, targetKey]);

    // public API
    const effective = imageEnabled
        ? (dynamicImg?.url
            ? dynamicImg
            : ( lastGoodRef.current[targetKey]
                || (lastShownRef.current.key && lastShownRef.current.key.split(":")[2] === normField
                    ? lastShownRef.current.data
                    : null)))
        : null;

    return {
        isLoading: Boolean(dynamicImg?.loading),
        isPostBasedImage,
        renderSource: imageEnabled
        ? {
            url: effective?.url,
            alt: effective?.alt || "",
            width: effective?.width,
            height: effective?.height,
            srcSet: effective?.srcSet,
            }
        : null,
    };
}