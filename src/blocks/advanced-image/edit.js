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
import { useEffect, useMemo, useRef, useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import { decodeEntities } from "@wordpress/html-entities";
import { store as blockEditorStore } from '@wordpress/block-editor'; 

// Internal
import Inspector from "./inspector";
import "./editor.scss";
import generateSrcSet from "@Utils/generateSrcSet";

export default function Edit({ attributes, setAttributes, clientId, context }) {
	const {
		// base
		blockID,

		// manual image
		advancedImageUrl,
		advancedImageId,
		advancedImageAlt,
		advancedImageDefaultWidth,
		advancedImageDefaultHeight,
		advancedImageSrcSet,

		// display options
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
		showOverlay,

		// linking
		linkSwitch,
		linkTargetUrl,
		linkUrl,

		// wrappers / responsive flags
		advancedImageGlobalWraperID,
		advancedImageGlobalWraperClass,
		advancedImageDesktopSwitcher,
		advancedImageTabletSwitcher,
		advancedImageMobileSwitcher,

		// dynamic image attrs
		dynamicImageEnabled,
		dynamicImageSource,
		dynamicImagePostId,
		dynamicImagePostType,
		dynamicImagePostLabel,
		dynamicImageField,
		dynamicImageSize,
		dynamicImageFallbackUrl,
		dynamicImageFallbackAlt,
		dynamicImageFallbackId,
		dynamicImageEnableLink,
		dynamicImageLinkSource,
	} = attributes;

	// block props
	const blockProps = useBlockProps({
		className: `fb-advanced-image-main-wrapper ${blockID} ${
			advancedImageDesktopSwitcher && "fb-desktop-responsive"
		} ${advancedImageTabletSwitcher && "fb-tablet-responsive"} ${
			advancedImageMobileSwitcher && "fb-mobile-responsive"
		}`,
	});

	// loop context (from block.json usesContext)
	const loopPostId   = context?.postId;
	const loopPostType = context?.postType;

	// fallback: editor "current" (single editor page/post)
	const currentPostId   = useSelect( (select) => select("core/editor")?.getCurrentPostId?.(), [] );
	const currentPostType = useSelect( (select) => select("core/editor")?.getCurrentPostType?.(), [] );

	// normalized options
	const normSource = dynamicImageSource || "current_post";
	const normField  = dynamicImageField  || "featured_image";
	const normSize   = dynamicImageSize   || "full";

	// choose the *target* post/type (Loop-aware)
	const targetPostId =
	normSource === "post_type" && dynamicImagePostId
		? dynamicImagePostId
		: (loopPostId ?? currentPostId);

	const targetPostType =
	normSource === "post_type"
		? (dynamicImagePostType || loopPostType || "post")
		: (loopPostType ?? currentPostType);

	const isPostBasedImage =
		dynamicImageEnabled &&
		(normSource === "current_post" || normSource === "post_type");

	// detect switching & remember last-good image
	const [isSwitching, setIsSwitching] = useState(false);
	const lastGoodRef = useRef({});
	const lastShownRef = useRef({ key: null, data: null });

	// target key
	const targetKey = `${targetPostType || ""}:${targetPostId || ""}:${normField}:${normSize}`;
	useEffect(() => { setIsSwitching(true); }, [targetKey]);

	// fetch post/author/attachment/site records
	const postRecord = useSelect(
		(select) =>
			isPostBasedImage && targetPostType && targetPostId
				? select(coreStore).getEntityRecord(
						"postType",
						targetPostType,
						targetPostId
				  )
				: null,
		[isPostBasedImage, targetPostType, targetPostId]
	);

	// ready
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

	// ready
	useEffect(() => {
		if (isReady) setIsSwitching(false);
	}, [isReady]);

	const featuredAttachment = useSelect(
		(select) =>
			isPostBasedImage &&
			normField === "featured_image" &&
			postRecord?.featured_media
				? select(coreStore).getEntityRecord(
						"postType",
						"attachment",
						postRecord.featured_media
				  )
				: null,
		[isPostBasedImage, normField, postRecord?.featured_media]
	);

	const authorRecord = useSelect(
		(select) =>
			isPostBasedImage &&
			normField === "avatar_profile" &&
			postRecord?.author
			? select(coreStore).getEntityRecord('root','user', postRecord.author)
			: null,
		[isPostBasedImage, normField, postRecord?.author]
	);
	
	const authorReady = useSelect(
	(select) => {
		if (!(isPostBasedImage && normField === 'avatar_profile' && postRecord?.author)) return true;
		return select(coreStore).hasFinishedResolution('getEntityRecord', ['root','user', postRecord.author]);
	},
	[isPostBasedImage, normField, postRecord?.author]
	);

	const siteEntity = useSelect(
		(select) =>
			dynamicImageEnabled && normSource === "site_logo_url"
				? select(coreStore).getEntityRecord("root", "site", undefined)
				: null,
		[dynamicImageEnabled, normSource]
	);

	const siteLogoAttachment = useSelect(
		(select) =>
			siteEntity?.site_logo
				? select(coreStore).getEntityRecord(
						"postType",
						"attachment",
						siteEntity.site_logo
				  )
				: null,
		[siteEntity?.site_logo]
	);

	// helpers
	const pickSizeFromAttachment = (att, sizeSlug) => {
		if (!att) return null;
		const sizes = att?.media_details?.sizes || {};
		const chosen =
			sizes?.[sizeSlug] || sizes?.[String(sizeSlug).toLowerCase?.()] || null;
		if (chosen) {
			return {
				url: chosen.source_url,
				width: chosen.width,
				height: chosen.height,
			};
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
			.map(
				(s) =>
					`${s.source_url} ${s.width}w${s.height ? ` ${s.height}h` : ""}`
			);
		return entries.length ? entries.join(", ") : undefined;
	};

	// compute dynamic image
	const dynamicImg = useMemo(() => {
		if (!dynamicImageEnabled) return null;

		if ((isPostBasedImage && (!isReady || (normField === 'avatar_profile' && !authorReady))) || isSwitching) {
			const cached = lastGoodRef.current[targetKey];
			const display =
			  cached ||
			  (lastShownRef.current.key &&
			   lastShownRef.current.key.split(':')[2] === normField
				 ? lastShownRef.current.data
				 : null);
			return display ? { ...display, loading: true } : { loading: true };
		}

		// site logo
		if (normSource === "site_logo_url") {
			const pic = pickSizeFromAttachment(siteLogoAttachment, normSize);
			if (pic?.url) {
				return {
					url: pic.url,
					width: pic.width,
					height: pic.height,
					alt: decodeEntities(siteLogoAttachment?.alt_text || "") || "Site Logo",
					srcSet: buildSrcSetFromAttachment(siteLogoAttachment),
				};
			}
		}

		// current_post / post_type
		if (isPostBasedImage) {
			if (!postRecord) {
				return lastGoodRef.current[targetKey] ||
					   (lastShownRef.current.key &&
						lastShownRef.current.key.split(':')[2] === normField
						  ? lastShownRef.current.data
						  : null);
			}

			if (normField === "featured_image") {
				if (!featuredAttachment) {
					if (dynamicImageFallbackUrl) {
					  return { url: dynamicImageFallbackUrl, alt: dynamicImageFallbackAlt || "" };
					}
					return null;
				}
				const pic = pickSizeFromAttachment(
					featuredAttachment,
					normSize
				);
				return {
					url: pic?.url,
					width: pic?.width,
					height: pic?.height,
					alt: decodeEntities(featuredAttachment?.alt_text || ""),
					srcSet: buildSrcSetFromAttachment(featuredAttachment),
				};
			}

			if (normField === "avatar_profile") {
				const avatar = authorRecord?.avatar_urls || {};
				const sizeMap = { thumbnail: 48, small: 48, medium: 96, large: 96, full: 96 };
				const px = sizeMap[normSize] || 96;
				const url = avatar[String(px)] || avatar["96"] || avatar["48"];
				if (url) {
				  return { url, alt: authorRecord?.name || "", width: px, height: px };
				}
			}
		}

		// global fallback (only when really nothing found)
		if (dynamicImageFallbackUrl) {
			return { url: dynamicImageFallbackUrl, alt: dynamicImageFallbackAlt || "" };
		}

		return null;
	}, [
		targetKey,
		dynamicImageEnabled,
		isPostBasedImage,
		isReady,
		isSwitching,
		normSource,
		normField,
		normSize,
		siteLogoAttachment,
		postRecord,
		featuredAttachment,
		authorRecord,
		dynamicImageFallbackUrl,
		dynamicImageFallbackAlt,
	]);

	// update lastGoodRef when dynamicImg changes
	useEffect(() => {
		if (dynamicImg && dynamicImg.url) {
		  lastGoodRef.current[targetKey] = {
			url: dynamicImg.url,
			width: dynamicImg.width,
			height: dynamicImg.height,
			alt: dynamicImg.alt || "",
			srcSet: dynamicImg.srcSet || undefined,
		  };
		  
		  lastShownRef.current = { key: targetKey, data: lastGoodRef.current[targetKey] };
		}
	  }, [dynamicImg?.url, targetKey]);

	// read manual image size from srcset (once)
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

	// media select
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

	// renderSource: loading will show lastGoodRef
	const effective = dynamicImageEnabled
		? (dynamicImg?.url
			? dynamicImg
			: ( lastGoodRef.current[targetKey]
				|| (lastShownRef.current.key &&
					lastShownRef.current.key.split(':')[2] === normField
					? lastShownRef.current.data
					: null)
			))
		: null;
  
  const renderSource = dynamicImageEnabled
		? {
			url: effective?.url,
			alt: effective?.alt || "",
			width: effective?.width || advancedImageDefaultWidth,
			height: effective?.height || advancedImageDefaultHeight,
			srcSet: effective?.srcSet || undefined,
		}
		: {
			url: advancedImageUrl,
			alt: advancedImageAlt || "",
			width: advancedImageDefaultWidth,
			height: advancedImageDefaultHeight,
			srcSet: advancedImageSrcSet || undefined,
		};


			// Loop Builder Check
	const parentIds = useSelect(
		(select) => select(blockEditorStore).getBlockParents(clientId),
		[clientId]
	);

	// Loop Builder Check
	const isInsideLoopBuilder = useSelect((select) => {
		const editor = select(blockEditorStore);
		return parentIds.some((pid) => {
		  const p = editor.getBlock(pid);
		  return [
			'frontis-blocks/loop-builder',
			'frontis-blocks/loop-builder-wrapper',
			'frontis-blocks/container',
		  ].includes(p?.name);
		});
	}, [parentIds]);
	useEffect(() => {
		if (isInsideLoopBuilder && !dynamicImageEnabled) {  
			setAttributes({ dynamicImageEnabled: true });
			setAttributes({ mediaHeight: { Desktop: "200", Tablet: "200", Mobile: "200" } });
			setAttributes({ mediaHeightUnits: { Desktop: "px", Tablet: "px", Mobile: "px" } });
			setAttributes({autoFitSwitch: true});
		}
	}, [isInsideLoopBuilder]);

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
					{!dynamicImageEnabled && renderSource.url && (
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
									render={({ open }) => (
										<ToolbarButton onClick={open} icon="edit" />
									)}
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
						} ${autoFitSwitch ? imageFit || "" : ""} ${titlePosition || ""} ${
							showOverlay ? "overlay-simple" : ""
						}`}
					>
						<div className="fb-advanced-image-inner">
							{renderSource.url ? (
								linkSwitch ? (
									<a
										href={linkUrl}
										target={linkTargetUrl ? "_blank" : undefined}
										rel={linkTargetUrl ? "noopener noreferrer" : undefined}
										onClick={handleAnchorClick}
										aria-label={renderSource.alt}
									>
										<img
											width={renderSource.width}
											height={renderSource.height}
											src={renderSource.url}
											alt={renderSource.alt}
											srcSet={renderSource.srcSet}
											aria-hidden="true"
										/>
									</a>
								) : (
									<img
										width={renderSource.width}
										height={renderSource.height}
										src={renderSource.url}
										alt={renderSource.alt}
										srcSet={renderSource.srcSet}
										aria-hidden="true"
									/>
								)
							) : (
								<>
									{dynamicImageEnabled ? (
										<div className="fb-advanced-image-dynamic-empty" style={{ opacity: 0.75 }}>
											{dynamicImg?.loading
												? __("Loading dynamic image…", "frontis-blocks")
												: __("No image available from the selected dynamic source.", "frontis-blocks")}
										</div>
									) : (
										<MediaPlaceholder
											onSelect={onSelectImage}
											allowedTypes={["image"]}
											multiple={false}
											labels={{ title: __("Add Image", "frontis-blocks") }}
										/>
									)}
								</>
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
