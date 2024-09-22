import { __ } from '@wordpress/i18n';
import { 
    useBlockProps,
    RichText,
    BlockControls,
    MediaUpload,
    MediaUploadCheck,
    MediaPlaceholder,
} from '@wordpress/block-editor';
import { 
    Toolbar,
    ToolbarGroup,
    ToolbarButton
} from '@wordpress/components';

import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import Inspector from "./inspector";
import { useEffect } from '@wordpress/element';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const { 
        blockID,
        DeviceType,
        TestimonialImageUrl,
        TestimonialImageAlt,
        TestimonialImageID,
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

    const blockProps = useBlockProps({
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
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            <BlockControls>
                {TestimonialImageUrl && (
                    <ToolbarGroup>
                        <ToolbarButton
                            onClick={() => setAttributes({
                                TestimonialImageID: '',
                                TestimonialImageUrl: '',
                                TestimonialImageAlt: '',
                            })}
                            icon="trash"
                        />
                        <MediaUploadCheck>
                            <MediaUpload 
                                onSelect={(media) => setAttributes({
                                    TestimonialImageID: media.id,
                                    TestimonialImageUrl: media.url,
                                    TestimonialImageAlt: media.alt,
                                })}
                                allowedTypes={['image']}
                                value={TestimonialImageID}
                                render={({ open }) => (
                                    <ToolbarButton
                                        onClick={open}
                                        icon="edit"
                                    />
                                )}
                            />
                        </MediaUploadCheck>
                    </ToolbarGroup>
                )}
            </BlockControls>
            
            <div {...blockProps}>
                <div className="fb-testimonial-section">
                    <div className="fb-testimonial-wrapper">
                        <div className="fb-testimonial-inner-wrapper">
                            <div className='fb-testimonial-container'>
                                <div className="fb-testimonial-image-wrapper">
                                    <div className="fb-testimonial-image-inner-wrapper">
                                        <div className="fb-testimonial-image">
                                            {TestimonialImageUrl ? (
                                                <img src={TestimonialImageUrl} alt={TestimonialImageAlt} />
                                            ) : (
                                                <MediaPlaceholder
                                                    onSelect={(media) => setAttributes({
                                                        TestimonialImageID: media.id,
                                                        TestimonialImageUrl: media.url,
                                                        TestimonialImageAlt: media.alt,
                                                    })}
                                                    allowedTypes={['image']}
                                                    multiple={false}
                                                    labels={{ title: 'Add Author Image' }}
                                                />
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
                                        <RichText
                                            tagName="p"
                                            value={TestimonialDesc}
                                            onChange={(value) => setAttributes({ TestimonialDesc: value })}
                                            placeholder={__('John Doe', 'frontis-blocks')}
                                            className="fb-user-desc"
                                        />
                                    </div>
                                    <div className="fb-testimonial-userinfo-container">
                                        <RichText
                                            tagName="div"
                                            value={TestimonialAuthor}
                                            onChange={(value) => setAttributes({ TestimonialAuthor: value })}
                                            placeholder={__('John Doe', 'frontis-blocks')}
                                            className="fb-user"
                                        />
                                        <RichText
                                            tagName="span"
                                            value={TestimonialDesignation}
                                            onChange={(value) => setAttributes({ TestimonialDesignation: value })}
                                            placeholder={__('CEO, Company Name', 'frontis-blocks')}
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
