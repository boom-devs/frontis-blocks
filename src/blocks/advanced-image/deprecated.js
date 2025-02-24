import { useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';
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
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-advanced-image-main-wrapper ${blockID} ${advancedImageDesktopSwitcher && 'fb-desktop-responsive'} ${advancedImageTabletSwitcher && 'fb-tablet-responsive'} ${advancedImageMobileSwitcher && 'fb-mobile-responsive'}`,
        });

        return (
            <>
                <div {...blockProps}>
                    <div className={`fb-parent-wrapper fb-advanced-image-wrapper ${advancedImageGlobalWraperClass}`} id={advancedImageGlobalWraperID}>
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
                                            <img src={imageUrl} alt={imageAlt}/>
                                        </a>
                                    ) : (
                                        <img src={imageUrl} alt={imageAlt}/>
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
    },
};

export default [v1_0_3];