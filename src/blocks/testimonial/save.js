import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const { 
        blockID,
        TestimonialImageUrl,
        TestimonialImageAlt,
        TestimonialAlignment,
        TestimonialDesc,
        TestimonialAuthor,
        TestimonialDesignation,
        TestimonialRatingNumber,
        TestimonialRatingicon,
        TestimonialRatinIconAlign,
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
                <div className={`fb-testimonial-section fb-testimonia-section-${TestimonialAlignment}`}>
                    <div className={`fb-testimonial-wrapper ${blockID}`}>
                        <div className="fb-testimonial-inner-wrapper">
                            <div className='fb-testimonial-container'>
                                <div className="fb-testimonial-image-wrapper">
                                    <div className="fb-testimonial-image-inner-wrapper">
                                        <div className="fb-testimonial-image">
                                            {TestimonialImageUrl && (
                                                <img src={TestimonialImageUrl} alt={TestimonialImageAlt} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="fb-testimonial-description-container">
                                    {TestimonialQuoteIconAlign === 'icon' && (
                                        <div className="fb-testimonial-quote-icon">
                                            {TestimonialQuoteIcon ? renderSVG(TestimonialQuoteIcon) : ''}
                                        </div>
                                    )}
                                    <div className="fb-testimonial-userinfo-container">
                                        <RichText.Content
                                            tagName="p"
                                            value={TestimonialDesc}
                                            className="fb-user-desc"
                                        />
                                    </div>
                                    <div className="fb-testimonial-userinfo-container">
                                        <RichText.Content
                                            tagName="div"
                                            value={TestimonialAuthor}
                                            className="fb-user"
                                        />
                                        <RichText.Content
                                            tagName="span"
                                            value={TestimonialDesignation}
                                            className="fb-user-designation"
                                        />
                                        {TestimonialRatinIconAlign === 'icon' && (
                                            <div className="fb-testimonial-rating">
                                                {renderRatingIcons()}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}