import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	MediaReplaceFlow,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import { upload } from "@wordpress/icons";
import { useEffect } from "@wordpress/element";

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import "./editor.scss";
import { Button, ToolbarButton, ToolbarGroup } from "@wordpress/components";
import generateSrcSet from "@Utils/generateSrcSet";

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		imageLink,
		advancedImageUrl,
		advancedImageId,
		advancedImageAlt,
		advancedImageDefaultWidth,
		advancedImageDefaultHeight,
		advancedImageSrcSet,
		imageCaption,
		imageWidth,
		imgRounded,
		imgSquare,
		imgCircle,
		imageStyle,
		displayCaption,
		captionAlignment,
		imageSize,
		linkSwitch,
		linkTargetUrl,
		linkUrl,
		imageHover,
		imageFit,
		displayTitle,
		titleText,
		titleTag,
		titlePosition,
		showOverlay,

		advancedImageGlobalWraperID,
		advancedImageGlobalWraperClass,

		advancedImageDesktopSwitcher,
        advancedImageTabletSwitcher,
        advancedImageMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps({
        className: `fb-advanced-image-main-wrapper ${blockID} ${advancedImageDesktopSwitcher && 'fb-desktop-responsive'} ${advancedImageTabletSwitcher && 'fb-tablet-responsive'} ${advancedImageMobileSwitcher && 'fb-mobile-responsive'}`,
    });

	useEffect(() => {
		// Parse the srcset string to extract dimensions from the last item
		if (advancedImageSrcSet) {
		  const srcsetItems = advancedImageSrcSet.split(', ');
		  const lastItem = srcsetItems[srcsetItems.length - 1];
		  
		  // Extract width and height from the last item
		  const widthMatch = lastItem.match(/(\d+)w/);
		  const heightMatch = lastItem.match(/(\d+)h/);
		  
		  if (widthMatch && heightMatch) {
			const width = parseInt(widthMatch[1], 10);
			const height = parseInt(heightMatch[1], 10);
			
			// Now you can set these as global variables or use them as needed
			setAttributes({
				advancedImageDefaultWidth: width,
				advancedImageDefaultHeight: height,
			});
		  }
		}
	}, [advancedImageSrcSet]);

	/**
	 * Callback: Media Upload
	 */
		const onSelectImage = (media) => {
			const newSrcSet = generateSrcSet(media.sizes);
			setAttributes({
				advancedImageUrl: media.url,
				advancedImageId: media.id,
				advancedImageAlt: media.alt || '',
				advancedImageSrcSet: newSrcSet,
			});
		};

	const handleImageClick = (e) => {
		e.preventDefault();
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
				{advancedImageUrl && (
					<ToolbarGroup>
						<ToolbarButton
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
							icon="trash"
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
					</ToolbarGroup>
				)}
			</BlockControls>

			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-advanced-image-wrapper ${advancedImageGlobalWraperClass}`} id={advancedImageGlobalWraperID}>
					<div
						className={`fb-advanced-image ${imageStyle || ''} ${imageSize || ''} ${imageHover || ''} ${imageFit || ''} ${titlePosition || ''} ${
							showOverlay ? "overlay-simple" : ""
						}`}
					>
						<div className="fb-advanced-image-inner">
							{advancedImageUrl ? (
								linkSwitch ? (
									<a
										href={linkUrl}
										target={linkTargetUrl ? "_blank" : undefined}
										rel={linkTargetUrl ? "noopener noreferrer" : undefined}
										onClick={handleImageClick}
									>
										<img
											width={advancedImageDefaultWidth}
											height={advancedImageDefaultHeight}
											src={advancedImageUrl}
											alt={advancedImageAlt}
											srcSet={advancedImageSrcSet || undefined}
										/>
									</a>
								) : (
									<img 
										width={advancedImageDefaultWidth} 
										height={advancedImageDefaultHeight} 
										src={advancedImageUrl} 
										alt={advancedImageAlt} 
										srcset={advancedImageSrcSet || undefined}
									/>
								)
							) : (
								<MediaPlaceholder
									onSelect={onSelectImage}
									allowedTypes={["image"]}
									multiple={false}
									labels={{ title: "Add Image" }}
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
										placeholder="Add your title here..."
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
									placeholder="Add your caption here..."
								/>
							</div>
						)}
				</div>
			</div>
		</>
	);
}
