import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function Save({ attributes }) {
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

    /** Helper function to render rating icons based on the number of ratings */
    const renderRatingIcons = () => {
        let icons = [];
        for (let i = 0; i < TestimonialRatingNumber; i++) {
            icons.push(
                <div key={i} className="fb-testimonial-rating-icon">
                    {TestimonialRatinIconAlign === 'icon' && TestimonialRatingicon ? renderSVG(TestimonialRatingicon) : ''}
                    {TestimonialRatinIconAlign === 'image' && TestimonialRatingImageUrl ? <img src={TestimonialRatingImageUrl} alt={TestimonialRatingImageAlt}/> : ''}
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
                                                        <img src={TestimonialImageUrl} alt={TestimonialImageAlt}/>
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
                                            {TestimonialQuoteIconAlign === 'image' && TestimonialQuoteImageUrl ? <img src={TestimonialQuoteImageUrl} alt={TestimonialQuoteImageAlt}/> : ''}
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
                                                        <img src={TestimonialImageUrl} alt={TestimonialImageAlt}/>
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
                                            {TestimonialQuoteIconAlign === 'image' && TestimonialQuoteImageUrl ? <img src={TestimonialQuoteImageUrl} alt={TestimonialQuoteImageAlt}/> : ''}
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
                                                        <img src={TestimonialImageUrl} alt={TestimonialImageAlt}/>
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
                                            {TestimonialQuoteIconAlign === 'image' && TestimonialQuoteImageUrl ? <img src={TestimonialQuoteImageUrl} alt={TestimonialQuoteImageAlt}/> : ''}
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
}
