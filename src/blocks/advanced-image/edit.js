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
// 		advancedImageUrl,
// 		advancedImageId,
// 		advancedImageAlt,
// 		advancedImageDefaultWidth,
// 		advancedImageDefaultHeight,
// 		advancedImageSrcSet,
// 		imageCaption,
// 		imageStyle,
// 		displayCaption,
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





//Advanced Image – Edit.js (full, updated) (modified)
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
import { useEffect, useMemo } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { store as coreStore } from "@wordpress/core-data";
import { decodeEntities } from "@wordpress/html-entities";

// Internal
import Inspector from "./inspector";
import "./editor.scss";
import generateSrcSet from "@Utils/generateSrcSet";

export default function Edit({ attributes, setAttributes, clientId }) {
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
		dynamicEnableLink,
		dynamicLinkSource,
	} = attributes;

	//normalized defaults (critical fix)
	const normSource = dynamicImageSource || "current_post";
	const normField  = dynamicImageField  || "featured_image";
	const normSize   = dynamicImageSize   || "full";

	// block props
	const blockProps = useBlockProps({
		className: `fb-advanced-image-main-wrapper ${blockID} ${
			advancedImageDesktopSwitcher && "fb-desktop-responsive"
		} ${advancedImageTabletSwitcher && "fb-tablet-responsive"} ${
			advancedImageMobileSwitcher && "fb-mobile-responsive"
		}`,
	});

	// derive current post context (editor)
	const currentPostId = useSelect(
		(select) => select("core/editor")?.getCurrentPostId?.(),
		[]
	);
	const currentPostType = useSelect(
		(select) => select("core/editor")?.getCurrentPostType?.(),
		[]
	);

	// target post (for current_post / post_type)
	const targetPostId =
		normSource === "post_type" && dynamicImagePostId
			? dynamicImagePostId
			: currentPostId;

	const targetPostType =
		normSource === "post_type"
			? dynamicImagePostType || "post"
			: currentPostType;

	const isPostBasedImage =
		dynamicImageEnabled &&
		(normSource === "current_post" || normSource === "post_type");

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
				? select(coreStore).getUser(postRecord.author)
				: null,
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

		// still loading post record
		if (isPostBasedImage && !isReady) return { loading: true };

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
				if (dynamicImageFallbackUrl) {
					return {
						url: dynamicImageFallbackUrl,
						alt: dynamicImageFallbackAlt || "",
					};
				}
				return null;
			}

			if (normField === "featured_image") {
				if (!featuredAttachment) {
					if (dynamicImageFallbackUrl) {
						return {
							url: dynamicImageFallbackUrl,
							alt: dynamicImageFallbackAlt || "",
						};
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
				const sizeMap = {
					thumbnail: 48,
					small: 48,
					medium: 96,
					large: 96,
					full: 96,
				};
				const px = sizeMap[normSize] || 96;
				const url = avatar[String(px)] || avatar["96"] || avatar["48"];
				if (url) return { url, alt: authorRecord?.name || "" };
			}
		}

		// global fallback
		if (dynamicImageFallbackUrl) {
			return {
				url: dynamicImageFallbackUrl,
				alt: dynamicImageFallbackAlt || "",
			};
		}
		return null;
	}, [
		dynamicImageEnabled,
		normSource,
		normField,
		normSize,
		dynamicImageFallbackUrl,
		dynamicImageFallbackAlt,
		isPostBasedImage,
		isReady,
		siteLogoAttachment,
		postRecord,
		featuredAttachment,
		authorRecord,
	]);

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

	// pick what to render (dynamic vs manual)
	const renderSource = dynamicImageEnabled
		? {
				url: dynamicImg?.url,
				alt: dynamicImg?.alt || "",
				width: dynamicImg?.width || advancedImageDefaultWidth,
				height: dynamicImg?.height || advancedImageDefaultHeight,
				srcSet: dynamicImg?.srcSet || undefined,
		  }
		: {
				url: advancedImageUrl,
				alt: advancedImageAlt || "",
				width: advancedImageDefaultWidth,
				height: advancedImageDefaultHeight,
				srcSet: advancedImageSrcSet || undefined,
		  };

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
