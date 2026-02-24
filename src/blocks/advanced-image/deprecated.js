import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import attributes from './attributes.js';

const v1_0_3 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const {
            blockID,
            advancedImageUrl,
            advancedImageAlt,
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
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-advanced-image-main-wrapper ${blockID} ${advancedImageDesktopSwitcher ? 'fb-desktop-responsive' : ''} ${advancedImageTabletSwitcher ? 'fb-tablet-responsive' : ''} ${advancedImageMobileSwitcher ? 'fb-mobile-responsive' : ''}`,
        });

        return (
            <div {...blockProps}>
                <div
                    className={`fb-parent-wrapper fb-advanced-image-wrapper ${advancedImageGlobalWraperClass || ''}`}
                    id={advancedImageGlobalWraperID || ''}
                >
                    <div className={`fb-advanced-image ${imageStyle || ''} ${imageSize || ''} ${imageHover || ''} ${imageFit || ''} ${titlePosition || ''}`}>
                        <div className="fb-advanced-image-inner">
                            {advancedImageUrl ? (
                                linkSwitch ? (
                                    <a
                                        href={linkUrl}
                                        target={linkTargetUrl ? '_blank' : undefined}
                                        rel={linkTargetUrl ? 'noopener noreferrer' : undefined}
                                    >
                                        <img src={advancedImageUrl} alt={advancedImageAlt || ''} />
                                    </a>
                                ) : (
                                    <img src={advancedImageUrl} alt={advancedImageAlt || ''} />
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
        );
    },
};

const v1_1_8 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
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
               autoFitSwitch,
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
               showOverlay
        } = attributes;
    
        const blockProps = useBlockProps.save({
            className: `fb-advanced-image-main-wrapper ${blockID} ${advancedImageDesktopSwitcher && 'fb-desktop-responsive'} ${advancedImageTabletSwitcher && 'fb-tablet-responsive'} ${advancedImageMobileSwitcher && 'fb-mobile-responsive'}`,
        });
    
        // Function to render the image with proper attributes
        const AdvancedImageRender = () => {
            const imgAttributes = {
            width: advancedImageDefaultWidth,
                height: advancedImageDefaultHeight,
                'data-src': advancedImageUrl,
                src: (smartLazyLoadSwitcher && smartLazyLoadImageUrl) ? smartLazyLoadImageUrl : advancedImageUrl,
                alt: advancedImageAlt || __("Image", "frontis-blocks"),
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
                        aria-label={advancedImageAlt}
                    >
                        <img {...imgAttributes} aria-hidden="true" />
                    </a>
                );
            }
            return <img {...imgAttributes} aria-hidden="true" />;
        };
    
        return (
            <>
                <div {...blockProps}>
                    <div 
                        className={`fb-parent-wrapper fb-advanced-image-wrapper ${advancedImageGlobalWraperClass}`}
                        id={advancedImageGlobalWraperID}
                        data-smart-lazy-load-switcher={smartLazyLoadSwitcher}
                    >
                        <div className={["fb-advanced-image",
                                            imageStyle,
                                            imageSize,
                                            imageHover,
                                            autoFitSwitch ? imageFit : "",
                                            titlePosition,
                                            showOverlay ? "overlay-simple" : "",
                                        ].filter(Boolean).join(" ")}
                        >
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
            </>
        );
    },
};

export default [v1_0_3, v1_1_8];
