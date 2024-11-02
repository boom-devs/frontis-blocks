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
        TestimonialRatinIconAlign,
        QuoteIconSwitcher,
        TestimonialQuoteIcon,
        TestimonialQuoteIconAlign,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-testimonial-main-wrapper ${blockID}`,
    });

    /** Helper function to render rating icons based on the number of ratings */
    const renderRatingIcons = () => {
        let icons = [];
        for (let i = 0; i < TestimonialRatingNumber; i++) {
            icons.push(
                <div key={i} className="fb-testimonial-rating-icon">
                    {TestimonialRatingicon ? renderSVG(TestimonialRatingicon) : ''}
                </div>
            );
        }
        return icons;
    };

    return (
        <div {...blockProps}>
            <div className={`fb-testimonial-section fb-testimonial-section-${TestimonialAlignment}`}>
                <div className={`fb-testimonial-wrapper ${blockID}`}>
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
    );
}
