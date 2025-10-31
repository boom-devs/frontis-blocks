import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import attributes from './attributes.js';

/**
 * v1_1_0 — your previous Save (now deprecated entry)
 */
const v1_1_0 = {
    attributes,
    supports: { html: false, className: false },

    // no attribute-shape change from this to current, so no migrate needed
    save({ attributes }) {
        const {
            blockID,
            TestimonialPresetStyle,
            TestimonialImageSwitcher,
            TestimonialImageUrl,
            TestimonialImageAlt,
            TestimonialAlignment,
            TitleSwitcher,
            TestimonialTitle,
            TestimonialTitleTag,
            DescSwitcher,
            TestimonialDesc,
            AuthorSwitcher,
            TestimonialAuthor,
            DesignationSwitcher,
            TestimonialDesignation,
            RatingSwitcher,
            TestimonialRatingNumber,
            TestimonialRatingicon,
            TestimonialRatingImageUrl,
            TestimonialRatingImageAlt,
            TestimonialRatinIconAlign,
            QuoteIconSwitcher,
            TestimonialQuoteIcon,
            TestimonialQuoteImageUrl,
            TestimonialQuoteImageAlt,
            TestimonialQuoteIconAlign,

            testimonialGlobalWraperID,
            testimonialGlobalWraperClass,

            testimonialDesktopSwitcher,
            testimonialTabletSwitcher,
            testimonialMobileSwitcher,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-testimonial-main-wrapper ${blockID} ${testimonialDesktopSwitcher && 'fb-desktop-responsive'} ${testimonialTabletSwitcher && 'fb-tablet-responsive'} ${testimonialMobileSwitcher && 'fb-mobile-responsive'}`,
        });

        const renderRatingIcons = () => {
            let icons = [];
            for (let i = 0; i < (Number.parseInt(TestimonialRatingNumber, 10) || 0); i++) {
                icons.push(
                    <div key={i} className="fb-testimonial-rating-icon">
                        {TestimonialRatinIconAlign === 'icon' && TestimonialRatingicon ? renderSVG(TestimonialRatingicon) : ''}
                        {TestimonialRatinIconAlign === 'image' && TestimonialRatingImageUrl ? <img src={TestimonialRatingImageUrl} alt={TestimonialRatingImageAlt} /> : ''}
                    </div>
                );
            }
            return icons;
        };

        return (
            <div {...blockProps}>
                <div className={`fb-parent-wrapper fb-testimonial-section fb-testimonial-section-${TestimonialAlignment} ${testimonialGlobalWraperClass}`} id={testimonialGlobalWraperID}>
                    <div className={`fb-testimonial-wrapper`}>
                        <div className="fb-testimonial-inner-wrapper">
                            <div className="fb-testimonial-container">
                                {TestimonialPresetStyle === "preset-4" ? (
                                    <>
                                        <div className="fb-testimonial-author-container">
                                            <div className="fb-testimonial-author-inner-container">
                                                <div className="fb-testimonial-author-image-container">
                                                    {TestimonialImageSwitcher && TestimonialImageUrl && (
                                                        <div className="fb-testimonial-image">
                                                            <img src={TestimonialImageUrl} alt={TestimonialImageAlt} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="fb-testimonial-userinfo-container">
                                                    {AuthorSwitcher && (
                                                        <RichText.Content
                                                            tagName="div"
                                                            value={TestimonialAuthor}
                                                            className="fb-user"
                                                        />
                                                    )}
                                                    {DesignationSwitcher && (
                                                        <RichText.Content
                                                            tagName="span"
                                                            value={TestimonialDesignation}
                                                            className="fb-user-designation"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {RatingSwitcher && TestimonialRatinIconAlign !== 'none' && (
                                            <div className="fb-testimonial-rating">
                                                {renderRatingIcons()}
                                            </div>
                                        )}
                                        {TitleSwitcher && (
                                            <div className="fb-testimonial-title-container">
                                                <RichText.Content
                                                    tagName={TestimonialTitleTag}
                                                    value={TestimonialTitle}
                                                    className="fb-testimonial-title"
                                                />
                                            </div>
                                        )}
                                        {DescSwitcher && (
                                            <div className="fb-testimonial-userdesc-container">
                                                <RichText.Content
                                                    tagName="p"
                                                    value={TestimonialDesc}
                                                    className="fb-user-desc"
                                                />
                                            </div>
                                        )}
                                        {QuoteIconSwitcher && TestimonialQuoteIconAlign !== 'none' && (
                                            <div className="fb-testimonial-quote-icon">
                                                {TestimonialQuoteIconAlign === 'icon' && TestimonialQuoteIcon ? renderSVG(TestimonialQuoteIcon) : ''}
                                                {TestimonialQuoteIconAlign === 'image' && TestimonialQuoteImageUrl ? <img src={TestimonialQuoteImageUrl} alt={TestimonialQuoteImageAlt} /> : ''}
                                            </div>
                                        )}
                                    </>
                                ) : TestimonialPresetStyle === "preset-5" ? (
                                    <>
                                        {TitleSwitcher && (
                                            <div className="fb-testimonial-title-container">
                                                <RichText.Content
                                                    tagName={TestimonialTitleTag}
                                                    value={TestimonialTitle}
                                                    className="fb-testimonial-title"
                                                />
                                            </div>
                                        )}
                                        {DescSwitcher && (
                                            <div className="fb-testimonial-userdesc-container">
                                                <RichText.Content
                                                    tagName="p"
                                                    value={TestimonialDesc}
                                                    className="fb-user-desc"
                                                />
                                            </div>
                                        )}
                                        <div className={`fb-testimonial-author-container ${TestimonialAlignment}`}>
                                            <div className="fb-testimonial-author-inner-container">
                                                <div className="fb-testimonial-author-image-container">
                                                    {TestimonialImageSwitcher && TestimonialImageUrl && (
                                                        <div className="fb-testimonial-image">
                                                            <img src={TestimonialImageUrl} alt={TestimonialImageAlt} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="fb-testimonial-userinfo-container">
                                                    {AuthorSwitcher && (
                                                        <RichText.Content
                                                            tagName="div"
                                                            value={TestimonialAuthor}
                                                            className="fb-user"
                                                        />
                                                    )}
                                                    {DesignationSwitcher && (
                                                        <RichText.Content
                                                            tagName="span"
                                                            value={TestimonialDesignation}
                                                            className="fb-user-designation"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                            {RatingSwitcher && TestimonialRatinIconAlign !== 'none' && (
                                                <div className="fb-testimonial-rating">
                                                    {renderRatingIcons()}
                                                </div>
                                            )}
                                        </div>
                                        {QuoteIconSwitcher && TestimonialQuoteIconAlign !== 'none' && (
                                            <div className="fb-testimonial-quote-icon">
                                                {TestimonialQuoteIconAlign === 'icon' && TestimonialQuoteIcon ? renderSVG(TestimonialQuoteIcon) : ''}
                                                {TestimonialQuoteIconAlign === 'image' && TestimonialQuoteImageUrl ? <img src={TestimonialQuoteImageUrl} alt={TestimonialQuoteImageAlt} /> : ''}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <>
                                        {RatingSwitcher && TestimonialRatinIconAlign !== 'none' && (
                                            <div className="fb-testimonial-rating">
                                                {renderRatingIcons()}
                                            </div>
                                        )}
                                        {TitleSwitcher && (
                                            <div className="fb-testimonial-title-container">
                                                <RichText.Content
                                                    tagName={TestimonialTitleTag}
                                                    value={TestimonialTitle}
                                                    className="fb-testimonial-title"
                                                />
                                            </div>
                                        )}
                                        {DescSwitcher && (
                                            <div className="fb-testimonial-userdesc-container">
                                                <RichText.Content
                                                    tagName="p"
                                                    value={TestimonialDesc}
                                                    className="fb-user-desc"
                                                />
                                            </div>
                                        )}
                                        <div className={`fb-testimonial-author-container ${TestimonialAlignment}`}>
                                            <div className="fb-testimonial-author-inner-container">
                                                <div className="fb-testimonial-author-image-container">
                                                    {TestimonialImageSwitcher && TestimonialImageUrl && (
                                                        <div className="fb-testimonial-image">
                                                            <img src={TestimonialImageUrl} alt={TestimonialImageAlt} />
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="fb-testimonial-userinfo-container">
                                                    {AuthorSwitcher && (
                                                        <RichText.Content
                                                            tagName="div"
                                                            value={TestimonialAuthor}
                                                            className="fb-user"
                                                        />
                                                    )}
                                                    {DesignationSwitcher && (
                                                        <RichText.Content
                                                            tagName="span"
                                                            value={TestimonialDesignation}
                                                            className="fb-user-designation"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {QuoteIconSwitcher && TestimonialQuoteIconAlign !== 'none' && (
                                            <div className="fb-testimonial-quote-icon">
                                                {TestimonialQuoteIconAlign === 'icon' && TestimonialQuoteIcon ? renderSVG(TestimonialQuoteIcon) : ''}
                                                {TestimonialQuoteIconAlign === 'image' && TestimonialQuoteImageUrl ? <img src={TestimonialQuoteImageUrl} alt={TestimonialQuoteImageAlt} /> : ''}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
};

/**
 * v1_0_3 — your older deprecated (icon-only)
 * Added `migrate` to provide defaults for new image fields and align props.
 */
const v1_0_3 = {
    attributes,
    supports: { html: false, className: false },

    migrate: (attrs) => ({
        ...attrs,
        // ensure new fields exist with safe defaults
        TestimonialRatinIconAlign: attrs?.TestimonialRatinIconAlign || 'icon',
        TestimonialQuoteIconAlign: attrs?.TestimonialQuoteIconAlign || 'icon',
        TestimonialRatingImageUrl: attrs?.TestimonialRatingImageUrl || '',
        TestimonialRatingImageAlt: attrs?.TestimonialRatingImageAlt || '',
        TestimonialQuoteImageUrl: attrs?.TestimonialQuoteImageUrl || '',
        TestimonialQuoteImageAlt: attrs?.TestimonialQuoteImageAlt || '',
    }),

    save({ attributes }) {
        const {
            blockID,
            TestimonialPresetStyle,
            TestimonialImageSwitcher,
            TestimonialImageUrl,
            TestimonialImageAlt,
            TestimonialAlignment,
            TitleSwitcher,
            TestimonialTitle,
            TestimonialTitleTag,
            DescSwitcher,
            TestimonialDesc,
            AuthorSwitcher,
            TestimonialAuthor,
            DesignationSwitcher,
            TestimonialDesignation,
            RatingSwitcher,
            TestimonialRatingNumber,
            TestimonialRatingicon,
            TestimonialRatinIconAlign,
            QuoteIconSwitcher,
            TestimonialQuoteIcon,
            TestimonialQuoteIconAlign,

            testimonialGlobalWraperID,
            testimonialGlobalWraperClass,

            testimonialDesktopSwitcher,
            testimonialTabletSwitcher,
            testimonialMobileSwitcher,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-testimonial-main-wrapper ${blockID} ${testimonialDesktopSwitcher && 'fb-desktop-responsive'} ${testimonialTabletSwitcher && 'fb-tablet-responsive'} ${testimonialMobileSwitcher && 'fb-mobile-responsive'}`,
        });

        const renderRatingIcons = () => {
            let icons = [];
            for (let i = 0; i < (Number.parseInt(TestimonialRatingNumber, 10) || 0); i++) {
                icons.push(
                    <div key={i} className="fb-testimonial-rating-icon">
                        {TestimonialRatingicon ? renderSVG(TestimonialRatingicon) : ''}
                    </div>
                );
            }
            return icons;
        };

        return (
            <>
                <div {...blockProps}>
                    <div className={`fb-parent-wrapper fb-testimonial-section fb-testimonial-section-${TestimonialAlignment} ${testimonialGlobalWraperClass}`} id={testimonialGlobalWraperID}>
                        <div className={`fb-testimonial-wrapper`}>
                            <div className="fb-testimonial-inner-wrapper">
                                <div className="fb-testimonial-container">
                                    {TestimonialPresetStyle === "preset-4" ? (
                                        <>
                                            <div className="fb-testimonial-author-container">
                                                <div className="fb-testimonial-author-inner-container">
                                                    <div className="fb-testimonial-author-image-container">
                                                        {TestimonialImageSwitcher && TestimonialImageUrl && (
                                                            <div className="fb-testimonial-image">
                                                                <img src={TestimonialImageUrl} alt={TestimonialImageAlt} />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="fb-testimonial-userinfo-container">
                                                        {AuthorSwitcher && (
                                                            <RichText.Content
                                                                tagName="div"
                                                                value={TestimonialAuthor}
                                                                className="fb-user"
                                                            />
                                                        )}
                                                        {DesignationSwitcher && (
                                                            <RichText.Content
                                                                tagName="span"
                                                                value={TestimonialDesignation}
                                                                className="fb-user-designation"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            {RatingSwitcher && TestimonialRatinIconAlign === 'icon' && (
                                                <div className="fb-testimonial-rating">
                                                    {renderRatingIcons()}
                                                </div>
                                            )}
                                            {TitleSwitcher && (
                                                <div className="fb-testimonial-title-container">
                                                    <RichText.Content
                                                        tagName={TestimonialTitleTag}
                                                        value={TestimonialTitle}
                                                        className="fb-testimonial-title"
                                                    />
                                                </div>
                                            )}
                                            {DescSwitcher && (
                                                <div className="fb-testimonial-userdesc-container">
                                                    <RichText.Content
                                                        tagName="p"
                                                        value={TestimonialDesc}
                                                        className="fb-user-desc"
                                                    />
                                                </div>
                                            )}
                                            {QuoteIconSwitcher && TestimonialQuoteIconAlign === 'icon' && (
                                                <div className="fb-testimonial-quote-icon">
                                                    {TestimonialQuoteIcon ? renderSVG(TestimonialQuoteIcon) : ''}
                                                </div>
                                            )}
                                        </>
                                    ) : TestimonialPresetStyle === "preset-5" ? (
                                        <>
                                            {TitleSwitcher && (
                                                <div className="fb-testimonial-title-container">
                                                    <RichText.Content
                                                        tagName={TestimonialTitleTag}
                                                        value={TestimonialTitle}
                                                        className="fb-testimonial-title"
                                                    />
                                                </div>
                                            )}
                                            {DescSwitcher && (
                                                <div className="fb-testimonial-userdesc-container">
                                                    <RichText.Content
                                                        tagName="p"
                                                        value={TestimonialDesc}
                                                        className="fb-user-desc"
                                                    />
                                                </div>
                                            )}
                                            <div className={`fb-testimonial-author-container ${TestimonialAlignment}`}>
                                                <div className="fb-testimonial-author-inner-container">
                                                    <div className="fb-testimonial-author-image-container">
                                                        {TestimonialImageSwitcher && TestimonialImageUrl && (
                                                            <div className="fb-testimonial-image">
                                                                <img src={TestimonialImageUrl} alt={TestimonialImageAlt} />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="fb-testimonial-userinfo-container">
                                                        {AuthorSwitcher && (
                                                            <RichText.Content
                                                                tagName="div"
                                                                value={TestimonialAuthor}
                                                                className="fb-user"
                                                            />
                                                        )}
                                                        {DesignationSwitcher && (
                                                            <RichText.Content
                                                                tagName="span"
                                                                value={TestimonialDesignation}
                                                                className="fb-user-designation"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                                {RatingSwitcher && TestimonialRatinIconAlign === 'icon' && (
                                                    <div className="fb-testimonial-rating">
                                                        {renderRatingIcons()}
                                                    </div>
                                                )}
                                            </div>
                                            {QuoteIconSwitcher && TestimonialQuoteIconAlign === 'icon' && (
                                                <div className="fb-testimonial-quote-icon">
                                                    {TestimonialQuoteIcon ? renderSVG(TestimonialQuoteIcon) : ''}
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {RatingSwitcher && TestimonialRatinIconAlign === 'icon' && (
                                                <div className="fb-testimonial-rating">
                                                    {renderRatingIcons()}
                                                </div>
                                            )}
                                            {TitleSwitcher && (
                                                <div className="fb-testimonial-title-container">
                                                    <RichText.Content
                                                        tagName={TestimonialTitleTag}
                                                        value={TestimonialTitle}
                                                        className="fb-testimonial-title"
                                                    />
                                                </div>
                                            )}
                                            {DescSwitcher && (
                                                <div className="fb-testimonial-userdesc-container">
                                                    <RichText.Content
                                                        tagName="p"
                                                        value={TestimonialDesc}
                                                        className="fb-user-desc"
                                                    />
                                                </div>
                                            )}
                                            <div className={`fb-testimonial-author-container ${TestimonialAlignment}`}>
                                                <div className="fb-testimonial-author-inner-container">
                                                    <div className="fb-testimonial-author-image-container">
                                                        {TestimonialImageSwitcher && TestimonialImageUrl && (
                                                            <div className="fb-testimonial-image">
                                                                <img src={TestimonialImageUrl} alt={TestimonialImageAlt} />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="fb-testimonial-userinfo-container">
                                                        {AuthorSwitcher && (
                                                            <RichText.Content
                                                                tagName="div"
                                                                value={TestimonialAuthor}
                                                                className="fb-user"
                                                            />
                                                        )}
                                                        {DesignationSwitcher && (
                                                            <RichText.Content
                                                                tagName="span"
                                                                value={TestimonialDesignation}
                                                                className="fb-user-designation"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            {QuoteIconSwitcher && TestimonialQuoteIconAlign === 'icon' && (
                                                <div className="fb-testimonial-quote-icon">
                                                    {TestimonialQuoteIcon ? renderSVG(TestimonialQuoteIcon) : ''}
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    },
};

export default [v1_1_0, v1_0_3];