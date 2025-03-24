// import { useBlockProps, RichText } from '@wordpress/block-editor';

// export default function save({ attributes }) {
// 	const {
// 		blockID,
// 		advancedImageUrl,
// 		advancedImageAlt,
// 		linkSwitch,
// 		linkTargetUrl,
// 		linkUrl,
// 		imageCaption,
// 		displayCaption,
// 		imageStyle,
// 		imageSize,
// 		imageHover,
// 		imageFit,
// 		titleText,
// 		titleTag,
// 		displayTitle,
// 		titlePosition,
// 		advancedImageGlobalWraperID,
// 		advancedImageGlobalWraperClass,
// 		advancedImageDesktopSwitcher,
//         advancedImageTabletSwitcher,
//         advancedImageMobileSwitcher,
// 		advancedImageLazyLoadSwitcher,

// 		smartLazyLoadImageUrl,
// 	} = attributes;

// 	const blockProps = useBlockProps.save({
//         className: `fb-advanced-image-main-wrapper ${blockID} ${advancedImageDesktopSwitcher && 'fb-desktop-responsive'} ${advancedImageTabletSwitcher && 'fb-tablet-responsive'} ${advancedImageMobileSwitcher && 'fb-mobile-responsive'}`,
//     });


// 	return (
// 		<>
			
// 			<div {...blockProps}>
// 				<div className={`fb-parent-wrapper fb-advanced-image-wrapper data-lazy-load-${advancedImageLazyLoadSwitcher ? 'true' : 'false'} ${advancedImageGlobalWraperClass}`} id={advancedImageGlobalWraperID}>
// 					<div className={`fb-advanced-image ${imageStyle} ${imageSize} ${imageHover} ${imageFit} ${titlePosition}`}>
// 						<div className="fb-advanced-image-inner">
// 							{advancedImageUrl ? (
// 								linkSwitch ? (
// 									<a
// 										href={linkUrl}
// 										target={linkTargetUrl ? '_blank' : undefined}
// 										rel={linkTargetUrl ? 'noopener noreferrer' : undefined}
// 									>
// 										<img
// 											data-src={advancedImageUrl}
// 											src={smartLazyLoadImageUrl}
// 											alt={advancedImageAlt}
// 											onLoad={(e) => {
// 												window.addEventListener('load', () => {
// 													e.target.src = e.target.getAttribute('data-src');
// 													e.target.removeAttribute('data-src');
// 												});
// 											}}
// 										/>
// 									</a>
// 								) : (
// 									<img
// 										data-src={advancedImageUrl}
// 										src={smartLazyLoadImageUrl}
// 										alt={advancedImageAlt}
// 										onLoad={(e) => {
// 											window.addEventListener('load', () => {
// 												e.target.src = e.target.getAttribute('data-src');
// 												e.target.removeAttribute('data-src');
// 											});
// 										}}
// 									/>
// 								)
// 							) : null}
// 						</div>

// 						{displayTitle && titleText && (
// 							<div className="fb-advanced-image-title">
// 								<div className="fb-advanced-image-title-inner">
// 								<RichText.Content
// 									tagName={titleTag}
// 									value={titleText}
// 									className="fb-advanced-title"
// 								/>
// 								</div>
// 							</div>
// 						)}
// 						{displayCaption && imageCaption && (
// 							<div className="fb-advanced-image-caption">
// 								<RichText.Content
// 									tagName="figcaption"
// 									value={imageCaption}
// 								/>
// 							</div>
// 						)}
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }


import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockID,
        advancedImageUrl,
        advancedImageAlt,
		advancedImageSrcSet,
		advancedImageDefaultWidth,
		advancedImageDefaultHeight,
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
		smartLazyLoadSwitcher,
        smartLazyLoadImageUrl,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-advanced-image-main-wrapper ${blockID} ${advancedImageDesktopSwitcher && 'fb-desktop-responsive'} ${advancedImageTabletSwitcher && 'fb-tablet-responsive'} ${advancedImageMobileSwitcher && 'fb-mobile-responsive'}`,
    });

	// Updated script to handle both src and srcSet attributes
	const lazyLoadScript = `
        window.addEventListener('load', function() {
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(function(img) {
                img.src = img.getAttribute('data-src');
                
                // Also handle srcSet if available
                if (img.hasAttribute('data-srcset')) {
                    img.srcset = img.getAttribute('data-srcset');
                    img.removeAttribute('data-srcset');
                }
                
                img.removeAttribute('data-src');
            });
        });
    `;

    // Function to render the image with proper attributes
    // Function to render the image with proper attributes
    const AdvancedImageRender = () => {
        const imgAttributes = {
			width: advancedImageDefaultWidth,
            height: advancedImageDefaultHeight,
            'data-src': advancedImageUrl,
            src: (smartLazyLoadSwitcher && smartLazyLoadImageUrl) ? smartLazyLoadImageUrl : advancedImageUrl,
            alt: advancedImageAlt || '',
        };
        
        // Only add srcSet attributes if we have advancedImageSrcSet
        if (advancedImageSrcSet) {
            if (smartLazyLoadSwitcher && smartLazyLoadImageUrl) {
                // For lazy loading, use data-srcset to store the real srcset
                imgAttributes['data-srcset'] = advancedImageSrcSet;
            } else {
                // No lazy loading, use srcset directly
                imgAttributes.srcSet = advancedImageSrcSet;
            }
        }

        if (linkSwitch) {
            return (
                <a
                    href={linkUrl}
                    target={linkTargetUrl ? '_blank' : undefined}
                    rel={linkTargetUrl ? 'noopener noreferrer' : undefined}
                >
                    <img {...imgAttributes} />
                </a>
            );
        }
        return <img {...imgAttributes} />;
    };

    return (
        <>
            <div {...blockProps}>
                <div 
                    className={`fb-parent-wrapper fb-advanced-image-wrapper ${advancedImageGlobalWraperClass}`}
                    id={advancedImageGlobalWraperID}
                >
                    <div className={`fb-advanced-image ${imageStyle} ${imageSize} ${imageHover} ${imageFit} ${titlePosition}`}>
                        <div className="fb-advanced-image-inner">
                            {advancedImageUrl ? AdvancedImageRender() : null}
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
            <script dangerouslySetInnerHTML={{ __html: lazyLoadScript }} />
        </>
    );
}
