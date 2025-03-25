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


    // Enhanced lazy load script with IntersectionObserver for better performance
    const lazyLoadScript = `
    (function() {
        // Modern browsers with IntersectionObserver
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                        }
                        if (img.dataset.srcset) {
                            img.srcset = img.dataset.srcset;
                            img.removeAttribute('data-srcset');
                        }
                        observer.unobserve(img);
                    }
                });
            });
            
            document.querySelectorAll('img[data-src]').forEach(img => {
                observer.observe(img);
            });
        } else {
            // Fallback for older browsers
            window.addEventListener('load', function() {
                document.querySelectorAll('img[data-src]').forEach(img => {
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    if (img.dataset.srcset) {
                        img.srcset = img.dataset.srcset;
                        img.removeAttribute('data-srcset');
                    }
                });
            });
        }
    })();
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

        if (advancedImageLazyLoadSwitcher) {
            imgAttributes.loading = 'lazy';
        }
        
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
                    <div className={`fb-advanced-image ${imageStyle || ''} ${imageSize || ''} ${imageHover || ''} ${imageFit || ''} ${titlePosition || ''}`}>
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
            { smartLazyLoadSwitcher && (
                <script dangerouslySetInnerHTML={{ __html: lazyLoadScript }} />
            )}
        </>
    );
}
