import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import Inspector from "./inspector";

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockId,
		isLink,
		rel,
		linkTarget,
		useFirstImage,
		imageSize,

		featuredImageDesktopSwitcher,
		featuredImageTabletSwitcher,
		featuredImageMobileSwitcher,

		wrapperId,
		wrapperClass,
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-post-featured-image-block ${blockId} ${
			featuredImageDesktopSwitcher && "fb-desktop-responsive"
		} ${featuredImageTabletSwitcher && "fb-tablet-responsive"} ${
			featuredImageMobileSwitcher && "fb-mobile-responsive"
		}`,
	});

	useEffect(() => {
		if (clientId && !blockId) {
			setAttributes({
				blockId: "fb-post-featured-image-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	let placeholderImageUrl = "";
	if (typeof FrontisBlocksData !== "undefined") {
		placeholderImageUrl =
			FrontisBlocksData.pluginUrl + "assets/images/preset-bg.jpg";
	}

	// Get current post featured image for editor preview
	const { useSelect } = wp.data;
	const featuredImage = useSelect((select) => {
		const postId = select("core/editor")?.getCurrentPostId();
		const featuredImageId =
			select("core/editor")?.getEditedPostAttribute("featured_media");

		if (featuredImageId) {
			const media = select("core").getMedia(featuredImageId);
			return media;
		}
		return null;
	}, []);

	// Get first image from post content if enabled
	const postContent = useSelect((select) => {
		return select("core/editor")?.getEditedPostAttribute("content") || "";
	}, []);

	const getFirstImageFromContent = (content) => {
		const imgRegex = /<img[^>]+src="([^">]+)"/;
		const match = content.match(imgRegex);
		return match ? match[1] : null;
	};

	const firstImageFromContent = useFirstImage
		? getFirstImageFromContent(postContent)
		: null;

	// Determine which image to display
	let imageUrl = "";
	let imageAlt = "";

	if (featuredImage) {
		const size = imageSize || "large";
		imageUrl =
			featuredImage.media_details.sizes[size]?.source_url ||
			featuredImage.source_url;
		imageAlt = featuredImage.alt_text || __("Featured Image", "frontis-blocks");
	} else if (firstImageFromContent) {
		imageUrl = firstImageFromContent;
		imageAlt = __("First image from content", "frontis-blocks");
	} else if (placeholderImageUrl) {
		imageUrl = placeholderImageUrl;
		imageAlt = __("Placeholder Image", "frontis-blocks");
	}

	// Combine classes for image wrapper
	const imageWrapperClasses = `fb-post-featured-image ${wrapperClass}`.trim();

	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>

			<div {...blockProps}>
				<div className={imageWrapperClasses} id={wrapperId || undefined}>
					{imageUrl ? (
						isLink ? (
							<div className="fb-post-featured-image-inner">
								<a
									className="fb-post-featured-image-link"
									href="#"
									rel={rel}
									target={''}
								>
									<img
										src={imageUrl}
										alt={imageAlt}
										className="fb-post-featured-image-img"
									/>
								</a>
							</div>
						) : (
							<div class="fb-post-featured-image-inner">
								<img
									src={imageUrl}
									alt={imageAlt}
									className="fb-post-featured-image-img"
								/>
							</div>
						)
					) : (
						<div className="fb-post-featured-image-placeholder">
							{__("No featured image set", "frontis-blocks")}
						</div>
					)}
				</div>
			</div>
		</>
	);
}
