// import { __ } from "@wordpress/i18n";
// import {
// 	useBlockProps,
// 	RichText,
// 	BlockControls,
// 	AlignmentToolbar,
// 	MediaReplaceFlow,
// 	MediaPlaceholder,
// 	MediaUpload,
// 	MediaUploadCheck,
// } from "@wordpress/block-editor";
// import { upload } from "@wordpress/icons";
// import { useEffect } from "@wordpress/element";


// import { useSelect } from '@wordpress/data';
// import { store as coreStore } from '@wordpress/core-data';
// import { decodeEntities } from '@wordpress/html-entities';

// //Internal dependencies
// import Inspector from "./inspector";
// import "./editor.scss";
// import { Button, ToolbarButton, ToolbarGroup } from "@wordpress/components";
// import generateSrcSet from "@Utils/generateSrcSet";

// export default function Edit({ attributes, setAttributes, clientId }) {
// 	const {
// 		blockID,
// 		imageLink,
// 		advancedImageUrl,
// 		advancedImageId,
// 		advancedImageAlt,
// 		advancedImageDefaultWidth,
// 		advancedImageDefaultHeight,
// 		advancedImageSrcSet,
// 		imageCaption,
// 		imageWidth,
// 		imgRounded,
// 		imgSquare,
// 		imgCircle,
// 		imageStyle,
// 		displayCaption,
// 		captionAlignment,
// 		imageSize,
// 		linkSwitch,
// 		linkTargetUrl,
// 		linkUrl,
// 		imageHover,
// 		imageFit,
// 		displayTitle,
// 		titleText,
// 		titleTag,
// 		titlePosition,
// 		showOverlay,
// 		autoFitSwitch,

// 		advancedImageGlobalWraperID,
// 		advancedImageGlobalWraperClass,

// 		advancedImageDesktopSwitcher,
//         advancedImageTabletSwitcher,
//         advancedImageMobileSwitcher,


// 		dynamicImageEnabled,
// 		dynamicImageSource,
// 		dynamicImagePostId,
// 		dynamicImagePostType,
// 		dynamicImagePostLabel,
// 		dynamicImageField,
// 		dynamicImageSize,
// 		dynamicImageFallbackUrl,
// 		dynamicImageFallbackAlt,
// 		dynamicImageFallbackId,

// 	} = attributes;

// 	const blockProps = useBlockProps({
//         className: `fb-advanced-image-main-wrapper ${blockID} ${advancedImageDesktopSwitcher && 'fb-desktop-responsive'} ${advancedImageTabletSwitcher && 'fb-tablet-responsive'} ${advancedImageMobileSwitcher && 'fb-mobile-responsive'}`,
//     });

// 	useEffect(() => {
// 		// Parse the srcset string to extract dimensions from the last item
// 		if (advancedImageSrcSet) {
// 		  const srcsetItems = advancedImageSrcSet.split(', ');
// 		  const lastItem = srcsetItems[srcsetItems.length - 1];
		  
// 		  // Extract width and height from the last item
// 		  const widthMatch = lastItem.match(/(\d+)w/);
// 		  const heightMatch = lastItem.match(/(\d+)h/);
		  
// 		  if (widthMatch && heightMatch) {
// 			const width = parseInt(widthMatch[1], 10);
// 			const height = parseInt(heightMatch[1], 10);
			
// 			// Now you can set these as global variables or use them as needed
// 			setAttributes({
// 				advancedImageDefaultWidth: width,
// 				advancedImageDefaultHeight: height,
// 			});
// 		  }
// 		}
// 	}, [advancedImageSrcSet]);

// 		//Callback: Media Upload
// 		const onSelectImage = (media) => {
// 			const newSrcSet = generateSrcSet(media.sizes);
// 			setAttributes({
// 				advancedImageUrl: media.url,
// 				advancedImageId: media.id,
// 				advancedImageAlt: media.alt || '',
// 				advancedImageSrcSet: newSrcSet,
// 			});
// 		};

// 	const handleImageClick = (e) => {
// 		e.preventDefault();
// 	};


// 	return (
// 		<>
// 			<Inspector
// 				attributes={attributes}
// 				setAttributes={setAttributes}
// 				clientId={clientId}
// 				onSelectImage={onSelectImage}
// 			/>
// 			<BlockControls>
// 				{advancedImageUrl && (
// 					<ToolbarGroup>
// 						<ToolbarButton
// 							onClick={() =>
// 								setAttributes({
// 									advancedImageId: "",
// 									advancedImageUrl: "",
// 									advancedImageAlt: "",
// 									advancedImageDefaultWidth: "",
// 									advancedImageDefaultHeight: "",
// 									advancedImageSrcSet: "",
// 								})
// 							}
// 							icon="trash"
// 						/>
// 						<MediaUploadCheck>
// 							<MediaUpload
// 								onSelect={onSelectImage}
// 								allowedTypes={["image"]}
// 								value={advancedImageId}
// 								render={({ open }) => (
// 									<ToolbarButton onClick={open} icon="edit" />
// 								)}
// 							/>
// 						</MediaUploadCheck>
// 					</ToolbarGroup>
// 				)}
// 			</BlockControls>

// 			<div {...blockProps}>
// 				<div className={`fb-parent-wrapper fb-advanced-image-wrapper ${advancedImageGlobalWraperClass}`} id={advancedImageGlobalWraperID}>
// 					<div
// 						className={`fb-advanced-image ${imageStyle || ''} ${imageSize || ''} ${imageHover || ''} ${autoFitSwitch ? imageFit || '' : ''} ${titlePosition || ''} ${
// 							showOverlay ? "overlay-simple" : ""
// 						}`}
// 					>
// 						<div className="fb-advanced-image-inner">
// 							{advancedImageUrl ? (
// 								linkSwitch ? (
// 									<a
// 										href={linkUrl}
// 										target={linkTargetUrl ? "_blank" : undefined}
// 										rel={linkTargetUrl ? "noopener noreferrer" : undefined}
// 										onClick={handleImageClick}
// 										aria-label={advancedImageAlt}
// 									>
// 										<img
// 											width={advancedImageDefaultWidth}
// 											height={advancedImageDefaultHeight}
// 											src={advancedImageUrl}
// 											alt={advancedImageAlt}
// 											srcSet={advancedImageSrcSet || undefined}
// 											aria-hidden="true"
// 										/>
// 									</a>
// 								) : (
// 									<img 
// 										width={advancedImageDefaultWidth} 
// 										height={advancedImageDefaultHeight} 
// 										src={advancedImageUrl} 
// 										alt={advancedImageAlt} 
// 										srcSet={advancedImageSrcSet || undefined}
// 										aria-hidden="true"
// 									/>
// 								)
// 							) : (
// 								<MediaPlaceholder
// 									onSelect={onSelectImage}
// 									allowedTypes={["image"]}
// 									multiple={false}
// 									labels={{ title: "Add Image" }}
// 								/>
// 							)}
// 						</div>
// 						{displayTitle && (
// 							<div className="fb-advanced-image-title">
// 								<div className="fb-advanced-image-title-inner">
// 									<RichText
// 										tagName={titleTag}
// 										value={titleText}
// 										onChange={(value) => setAttributes({ titleText: value })}
// 										placeholder="Add your title here..."
// 										className="fb-advanced-title"
// 									/>
// 								</div>
// 							</div>
// 						)}
						
// 					</div>
// 					{displayCaption && (
// 							<div className="fb-advanced-image-caption">
// 								<RichText
// 									tagName="figcaption"
// 									value={imageCaption}
// 									onChange={(value) => setAttributes({ imageCaption: value })}
// 									placeholder="Add your caption here..."
// 								/>
// 							</div>
// 						)}
// 				</div>
// 			</div>
// 		</>
// 	);
// }

/**
 * Advanced Image – Edit.js (stable view + no shake)
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  RichText,
  BlockControls,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";
import { ToolbarButton, ToolbarGroup } from "@wordpress/components";
import { useEffect, useMemo, useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import { decodeEntities } from "@wordpress/html-entities";

/** Internal */
import Inspector from "./inspector";
import "./editor.scss";
import generateSrcSet from "@Utils/generateSrcSet";

export default function Edit({ attributes, setAttributes, clientId }) {
  const {
    /* Manual image */
    advancedImageUrl,
    advancedImageId,
    advancedImageAlt,
    advancedImageDefaultWidth,
    advancedImageDefaultHeight,
    advancedImageSrcSet,

    /* UI / layout */
    imageCaption,
    imageSize,
    imageStyle,
    imageHover,
    imageFit,
    autoFitSwitch,
    displayCaption,
    displayTitle,
    titleText,
    titleTag,
    titlePosition,
    linkSwitch,
    linkTargetUrl,
    linkUrl,

    /* wrap / responsive */
    blockID,
    advancedImageGlobalWraperID,
    advancedImageGlobalWraperClass,
    advancedImageDesktopSwitcher,
    advancedImageTabletSwitcher,
    advancedImageMobileSwitcher,

    /* Dynamic image attrs */
    dynamicImageEnabled,
    dynamicImageSource,      // current_post | post_type | site_logo_url
    dynamicImagePostId,
    dynamicImagePostType,
    dynamicImageField,       // featured_image | avatar_profile
    dynamicImageSize,        // full | thumbnail | small | medium | large
    dynamicImageFallbackUrl,
    dynamicImageFallbackAlt,
  } = attributes;

  /* Block props */
  const blockProps = useBlockProps({
    className: `fb-advanced-image-main-wrapper ${blockID} ${
      advancedImageDesktopSwitcher && "fb-desktop-responsive"
    } ${advancedImageTabletSwitcher && "fb-tablet-responsive"} ${
      advancedImageMobileSwitcher && "fb-mobile-responsive"
    }`,
  });

  /* Current post context (editor) */
  const currentPostId   = useSelect((s) => s("core/editor")?.getCurrentPostId?.(), []);
  const currentPostType = useSelect((s) => s("core/editor")?.getCurrentPostType?.(), []);

  const targetPostId =
    dynamicImageSource === "post_type" && dynamicImagePostId
      ? dynamicImagePostId
      : currentPostId;

  const targetPostType =
    dynamicImageSource === "post_type"
      ? dynamicImagePostType || "post"
      : currentPostType;

  const isPostBasedImage =
    dynamicImageEnabled &&
    (dynamicImageSource === "current_post" || dynamicImageSource === "post_type");

  /* Records */
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
      return select(coreStore).hasFinishedResolution("getEntityRecord", [
        "postType",
        targetPostType,
        targetPostId,
      ]);
    },
    [isPostBasedImage, targetPostType, targetPostId]
  );

  const featuredAttachment = useSelect(
    (select) =>
      isPostBasedImage &&
      dynamicImageField === "featured_image" &&
      postRecord?.featured_media
        ? select(coreStore).getEntityRecord(
            "postType",
            "attachment",
            postRecord.featured_media
          )
        : null,
    [isPostBasedImage, dynamicImageField, postRecord?.featured_media]
  );

  const authorRecord = useSelect(
    (select) =>
      isPostBasedImage &&
      dynamicImageField === "avatar_profile" &&
      postRecord?.author
        ? select(coreStore).getUser(postRecord.author)
        : null,
    [isPostBasedImage, dynamicImageField, postRecord?.author]
  );

  const siteEntity = useSelect(
    (select) =>
      dynamicImageEnabled && dynamicImageSource === "site_logo_url"
        ? select(coreStore).getEntityRecord("root", "site", undefined)
        : null,
    [dynamicImageEnabled, dynamicImageSource]
  );

  const siteLogoAttachment = useSelect(
    (select) =>
      siteEntity?.site_logo
        ? select(coreStore).getEntityRecord("postType", "attachment", siteEntity.site_logo)
        : null,
    [siteEntity?.site_logo]
  );

  /* Utils */
  const pickSizeFromAttachment = (att, sizeSlug) => {
    if (!att) return null;
    const sizes = att?.media_details?.sizes || {};
    const chosen = sizes?.[sizeSlug] || sizes?.[String(sizeSlug).toLowerCase?.()] || null;
    if (chosen) {
      return { url: chosen.source_url, width: chosen.width, height: chosen.height };
    }
    return {
      url: att?.source_url,
      width: att?.media_details?.width,
      height: att?.media_details?.height,
    };
  };

  const buildSrcSetFromAttachment = (att) => {
    const sizes = att?.media_details?.sizes || {};
    const entries = Object.values(sizes)
      .filter(Boolean)
      .map((s) => `${s.source_url} ${s.width}w${s.height ? ` ${s.height}h` : ""}`);
    return entries.length ? entries.join(", ") : undefined;
  };

  /* Compute NEW dynamic image (may be loading or null) */
  const dynamicImg = useMemo(() => {
    if (!dynamicImageEnabled) return null;

    /* Loading? keep old view */
    if (isPostBasedImage && !isReady) return { loading: true };

    if (dynamicImageSource === "site_logo_url") {
      const pic = pickSizeFromAttachment(siteLogoAttachment, dynamicImageSize || "full");
      if (pic?.url) {
        return {
          url: pic.url,
          width: pic.width,
          height: pic.height,
          alt: decodeEntities(siteLogoAttachment?.alt_text || "") || "Site Logo",
          srcSet: buildSrcSetFromAttachment(siteLogoAttachment),
        };
      }
      return null;
    }

    if (isPostBasedImage) {
      if (!postRecord) return null;

      if (dynamicImageField === "featured_image") {
        if (!featuredAttachment) return null;
        const pic = pickSizeFromAttachment(
          featuredAttachment,
          dynamicImageSize || "full"
        );
        return {
          url: pic?.url,
          width: pic?.width,
          height: pic?.height,
          alt: decodeEntities(featuredAttachment?.alt_text || ""),
          srcSet: buildSrcSetFromAttachment(featuredAttachment),
        };
      }

      if (dynamicImageField === "avatar_profile") {
        const avatar = authorRecord?.avatar_urls || {};
        const sizeMap = { thumbnail: 48, small: 48, medium: 96, large: 96, full: 96 };
        const px = sizeMap[dynamicImageSize || "full"] || 96;
        const url = avatar[String(px)] || avatar["96"] || avatar["48"];
        return url ? { url, alt: authorRecord?.name || "" } : null;
      }
    }

    return dynamicImageFallbackUrl
      ? { url: dynamicImageFallbackUrl, alt: dynamicImageFallbackAlt || "" }
      : null;
  }, [
    dynamicImageEnabled,
    dynamicImageSource,
    dynamicImageField,
    dynamicImageSize,
    dynamicImageFallbackUrl,
    dynamicImageFallbackAlt,
    isPostBasedImage,
    isReady,
    siteLogoAttachment,
    postRecord,
    featuredAttachment,
    authorRecord,
  ]);

  /* ===== Stable view (no shake) =====
     viewSource-ই UI তে দেখানো হবে।
     নতুন সোর্স url না পাওয়া পর্যন্ত আগেরটাই থাকবে।
  */
  const [viewSource, setViewSource] = useState(() => {
    if (dynamicImageEnabled && dynamicImg?.url) return dynamicImg;
    if (!dynamicImageEnabled && advancedImageUrl) {
      return {
        url: advancedImageUrl,
        alt: advancedImageAlt || "",
        width: advancedImageDefaultWidth,
        height: advancedImageDefaultHeight,
        srcSet: advancedImageSrcSet || undefined,
      };
    }
    return null;
  });

  /* manual → viewSource */
  useEffect(() => {
    if (dynamicImageEnabled) return; // dynamic থাকলে এখানে না
    if (advancedImageUrl) {
      setViewSource({
        url: advancedImageUrl,
        alt: advancedImageAlt || "",
        width: advancedImageDefaultWidth,
        height: advancedImageDefaultHeight,
        srcSet: advancedImageSrcSet || undefined,
      });
    } else {
      setViewSource(null);
    }
  }, [
    dynamicImageEnabled,
    advancedImageUrl,
    advancedImageAlt,
    advancedImageDefaultWidth,
    advancedImageDefaultHeight,
    advancedImageSrcSet,
  ]);

  /* dynamic → viewSource (only when ready url arrives) */
  useEffect(() => {
    if (!dynamicImageEnabled) return;
    if (dynamicImg?.url) {
      setViewSource((prev) => {
        // একই url হলে অপ্রয়োজনীয় re-render নয়
        if (prev?.url === dynamicImg.url) return prev;
        return dynamicImg;
      });
    } else if (!viewSource?.url && dynamicImageFallbackUrl) {
      // একদম কিছু না থাকলে fallback দেখাও
      setViewSource({
        url: dynamicImageFallbackUrl,
        alt: dynamicImageFallbackAlt || "",
      });
    }
    // নইলে previous viewSource যেমন ছিল তেমনই থাকবে
  }, [
    dynamicImageEnabled,
    dynamicImg?.url,
    dynamicImg?.alt,
    dynamicImg?.width,
    dynamicImg?.height,
    dynamicImg?.srcSet,
    dynamicImageFallbackUrl,
    dynamicImageFallbackAlt,
  ]);

  /* manual srcset থেকে ডিফল্ট ডিমেনশন detect (একবার) */
  useEffect(() => {
    if (!advancedImageSrcSet) return;
    const items = advancedImageSrcSet.split(", ");
    const last = items[items.length - 1] || "";
    const w = last.match(/(\d+)w/);
    const h = last.match(/(\d+)h/);
    if (w && h) {
      setAttributes({
        advancedImageDefaultWidth: parseInt(w[1], 10),
        advancedImageDefaultHeight: parseInt(h[1], 10),
      });
    }
  }, [advancedImageSrcSet]);

  /* Media select (manual) */
  const onSelectImage = (media) => {
    const newSrcSet = generateSrcSet(media.sizes);
    setAttributes({
      advancedImageUrl: media.url,
      advancedImageId: media.id,
      advancedImageAlt: media.alt || "",
      advancedImageSrcSet: newSrcSet,
    });
  };

  const handleAnchorClick = (e) => e.preventDefault();

  return (
    <>
      <Inspector
        attributes={attributes}
        setAttributes={setAttributes}
        clientId={clientId}
        onSelectImage={onSelectImage}
      />

      <BlockControls>
        <ToolbarGroup>
          {/* Dynamic থাকলে ম্যানুয়াল এডিট/ডিলিট নয় */}
          {viewSource?.url && !dynamicImageEnabled && (
            <>
              <ToolbarButton
                icon="trash"
                onClick={() =>
                  setAttributes({
                    advancedImageId: "",
                    advancedImageUrl: "",
                    advancedImageAlt: "",
                    advancedImageDefaultWidth: "",
                    advancedImageDefaultHeight: "",
                    advancedImageSrcSet: "",
                  })
                }
              />
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectImage}
                  allowedTypes={["image"]}
                  value={advancedImageId}
                  render={({ open }) => <ToolbarButton onClick={open} icon="edit" />}
                />
              </MediaUploadCheck>
            </>
          )}
        </ToolbarGroup>
      </BlockControls>

      <div {...blockProps}>
        <div
          className={`fb-parent-wrapper fb-advanced-image-wrapper ${advancedImageGlobalWraperClass}`}
          id={advancedImageGlobalWraperID}
        >
          <div
            className={`fb-advanced-image ${imageStyle || ""} ${imageSize || ""} ${
              imageHover || ""
            } ${autoFitSwitch ? imageFit || "" : ""} ${titlePosition || ""}`}
          >
            <div className="fb-advanced-image-inner">
              {viewSource?.url ? (
                linkSwitch ? (
                  <a
                    href={linkUrl}
                    target={linkTargetUrl ? "_blank" : undefined}
                    rel={linkTargetUrl ? "noopener noreferrer" : undefined}
                    onClick={handleAnchorClick}
                    aria-label={viewSource.alt || ""}
                  >
                    <img
                      width={viewSource.width}
                      height={viewSource.height}
                      src={viewSource.url}
                      alt={viewSource.alt || ""}
                      srcSet={viewSource.srcSet}
                      aria-hidden="true"
                    />
                  </a>
                ) : (
                  <img
                    width={viewSource.width}
                    height={viewSource.height}
                    src={viewSource.url}
                    alt={viewSource.alt || ""}
                    srcSet={viewSource.srcSet}
                    aria-hidden="true"
                  />
                )
              ) : (
                <MediaPlaceholder
                  onSelect={onSelectImage}
                  allowedTypes={["image"]}
                  multiple={false}
                  labels={{ title: __("Add Image", "frontis-blocks") }}
                />
              )}
            </div>

            {displayTitle && (
              <div className="fb-advanced-image-title">
                <div className="fb-advanced-image-title-inner">
                  <RichText
                    tagName={titleTag}
                    value={titleText}
                    onChange={(value) => setAttributes({ titleText: value })}
                    placeholder={__("Add your title here...", "frontis-blocks")}
                    className="fb-advanced-title"
                  />
                </div>
              </div>
            )}
          </div>

          {displayCaption && (
            <div className="fb-advanced-image-caption">
              <RichText
                tagName="figcaption"
                value={imageCaption}
                onChange={(value) => setAttributes({ imageCaption: value })}
                placeholder={__("Add your caption here...", "frontis-blocks")}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
