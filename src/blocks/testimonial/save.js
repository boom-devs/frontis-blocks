import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const { 
        blockID,
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

    /** Function to render rating icons for the frontend */
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
        <>
            <div {...blockProps}>
                <div className={`fb-testimonial-section fb-testimonial-section-${TestimonialAlignment}`}>
                    <div className={`fb-testimonial-wrapper ${blockID}`}>
                        <div className="fb-testimonial-inner-wrapper">
                            <div className='fb-testimonial-container'>
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
                                <div className="fb-testimonial-author-container">
                                    <div className='fb-testimonial-author-image-container'>
                                        {TestimonialImageSwitcher && (
                                            <div className="fb-testimonial-image-wrapper">
                                                <div className="fb-testimonial-image-inner-wrapper">
                                                    <div className="fb-testimonial-image">
                                                        {TestimonialImageUrl && (
                                                            <img src={TestimonialImageUrl} alt={TestimonialImageAlt} />
                                                        )}
                                                    </div>
                                                </div>
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
                                {QuoteIconSwitcher && TestimonialQuoteIconAlign === 'icon' && (
                                    <div className="fb-testimonial-quote-icon">
                                        {TestimonialQuoteIcon ? renderSVG(TestimonialQuoteIcon) : ''}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}