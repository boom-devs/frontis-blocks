import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		blockID,
		imageUrl,
		imageAlt,
		linkSwitch,
		linkTargetUrl,
		linkUrl,
		imageCaption,
		displayCaption,
		imageStyle,
		imageSize,
		imageHover,
		imageFit,
		titleText,
		titleTag,
		displayTitle,
		titlePosition,
		advancedImageGlobalWraperID,
		advancedImageGlobalWraperClass,
		advancedImageDesktopSwitcher,
        advancedImageTabletSwitcher,
        advancedImageMobileSwitcher,
		advancedImageLazyLoadSwitcher,
	} = attributes;

	const blockProps = useBlockProps.save({
        className: `fb-advanced-image-main-wrapper ${blockID} ${advancedImageDesktopSwitcher && 'fb-desktop-responsive'} ${advancedImageTabletSwitcher && 'fb-tablet-responsive'} ${advancedImageMobileSwitcher && 'fb-mobile-responsive'}`,
    });


	return (
		<>
			
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-advanced-image-wrapper data-lazy-load-${advancedImageLazyLoadSwitcher ? 'true' : 'false'} ${advancedImageGlobalWraperClass}`} id={advancedImageGlobalWraperID}>
					<div
						className={`fb-advanced-image ${imageStyle} ${imageSize} ${imageHover} ${imageFit} ${titlePosition}`}>
						<div className="fb-advanced-image-inner">
						{imageUrl ? (
							linkSwitch ? (
							<a
								href={linkUrl}
								target={linkTargetUrl ? '_blank' : undefined}
								rel={linkTargetUrl ? 'noopener noreferrer' : undefined}
							>
								{advancedImageLazyLoadSwitcher ? (
								<img data-src={imageUrl} alt={imageAlt} />
								) : (
								<img src={imageUrl} alt={imageAlt} />
								)}
							</a>
							) : (
							// When linkSwitch is false
							advancedImageLazyLoadSwitcher ? (
								<img data-src={imageUrl} alt={imageAlt} />
							) : (
								<img src={imageUrl} alt={imageAlt} />
							)
							)
						) : null}
						</div>
						{displayTitle && titleText && (
							<div className="fb-advanced-image-title">
								<div className="fb-advanced-image-title-inner">
								<RichText.Content
									tagName={titleTag}
									value={titleText}
									className="fb-advanced-title"
								/>
								</div>
							</div>
						)}
						{displayCaption && imageCaption && (
							<div className="fb-advanced-image-caption">
								<RichText.Content
									tagName="figcaption"
									value={imageCaption}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
