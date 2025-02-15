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
import { useEffect, useRef } from '@wordpress/element';
import './editor.scss';
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings';

export default function Edit({ attributes, setAttributes, clientId }) {
    const { 
        blockID,
        TestimonialPresetStyle,
        TestimonialImageSwitcher,
        TestimonialImageUrl,
        TestimonialImageAlt,
        TestimonialImageID,
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

    } = attributes;

    const blockProps = useBlockProps({
        className: `fb-testimonial-main-wrapper ${blockID} ${testimonialGlobalWraperClass}`,
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

    /**
    * Manages tab button settings and switches to block settings on click
    */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            <BlockControls>
                {TestimonialImageUrl && TestimonialImageSwitcher && (
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
                <div className={`fb-parent-wrapper fb-testimonial-section fb-testimonial-section-${TestimonialAlignment}`} id={testimonialGlobalWraperID} ref={panelRef}>
                    <div className={`fb-testimonial-wrapper ${blockID}`}>
                        <div className="fb-testimonial-inner-wrapper">
                            <div className='fb-testimonial-container'>

                                {TestimonialPresetStyle === "preset-4" ? (
                                    <>
                                        <div className={`fb-testimonial-author-container ${TestimonialAlignment}`}>
                                            <div className='fb-testimonial-author-inner-container'>
                                                <div className='fb-testimonial-author-image-container'>
                                                    {TestimonialImageSwitcher && (
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
                                                    )}
                                                </div>
                                                <div className="fb-testimonial-userinfo-container">
                                                    {AuthorSwitcher && (
                                                        <RichText
                                                            tagName="div"
                                                            value={TestimonialAuthor}
                                                            onChange={(value) => setAttributes({ TestimonialAuthor: value })}
                                                            placeholder={__('John Doe', 'frontis-blocks')}
                                                            className="fb-user"
                                                        />
                                                    )}
                                                    {DesignationSwitcher && (
                                                        <RichText
                                                            tagName="span"
                                                            value={TestimonialDesignation}
                                                            onChange={(value) => setAttributes({ TestimonialDesignation: value })}
                                                            placeholder={__('CEO, Company Name', 'frontis-blocks')}
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
                                                <RichText
                                                    tagName={TestimonialTitleTag}
                                                    value={TestimonialTitle}
                                                    onChange={(value) => setAttributes({ TestimonialTitle: value })}
                                                    placeholder={__('Testimonial Title', 'frontis-blocks')}
                                                    className="fb-testimonial-title"
                                                />
                                            </div>
                                        )}

                                        {DescSwitcher && (
                                            <div className="fb-testimonial-userdesc-container">
                                                <RichText
                                                    tagName="p"
                                                    value={TestimonialDesc}
                                                    onChange={(value) => setAttributes({ TestimonialDesc: value })}
                                                    placeholder={__('Testimonial Description', 'frontis-blocks')}
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
                                                <RichText
                                                    tagName={TestimonialTitleTag}
                                                    value={TestimonialTitle}
                                                    onChange={(value) => setAttributes({ TestimonialTitle: value })}
                                                    placeholder={__('Testimonial Title', 'frontis-blocks')}
                                                    className="fb-testimonial-title"
                                                />
                                            </div>
                                        )}

                                        {DescSwitcher && (
                                            <div className="fb-testimonial-userdesc-container">
                                                <RichText
                                                    tagName="p"
                                                    value={TestimonialDesc}
                                                    onChange={(value) => setAttributes({ TestimonialDesc: value })}
                                                    placeholder={__('Testimonial Description', 'frontis-blocks')}
                                                    className="fb-user-desc"
                                                />
                                            </div>
                                        )}

                                        <div className={`fb-testimonial-author-container ${TestimonialAlignment}`}>
                                            <div className='fb-testimonial-author-inner-container'>
                                                <div className='fb-testimonial-author-image-container'>
                                                    {TestimonialImageSwitcher && (
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
                                                    )}
                                                </div>
                                                <div className="fb-testimonial-userinfo-container">
                                                    {AuthorSwitcher && (
                                                        <RichText
                                                            tagName="div"
                                                            value={TestimonialAuthor}
                                                            onChange={(value) => setAttributes({ TestimonialAuthor: value })}
                                                            placeholder={__('John Doe', 'frontis-blocks')}
                                                            className="fb-user"
                                                        />
                                                    )}
                                                    {DesignationSwitcher && (
                                                        <RichText
                                                            tagName="span"
                                                            value={TestimonialDesignation}
                                                            onChange={(value) => setAttributes({ TestimonialDesignation: value })}
                                                            placeholder={__('CEO, Company Name', 'frontis-blocks')}
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
                                                <RichText
                                                    tagName={TestimonialTitleTag}
                                                    value={TestimonialTitle}
                                                    onChange={(value) => setAttributes({ TestimonialTitle: value })}
                                                    placeholder={__('Testimonial Title', 'frontis-blocks')}
                                                    className="fb-testimonial-title"
                                                />
                                            </div>
                                        )}

                                        {DescSwitcher && (
                                            <div className="fb-testimonial-userdesc-container">
                                                <RichText
                                                    tagName="p"
                                                    value={TestimonialDesc}
                                                    onChange={(value) => setAttributes({ TestimonialDesc: value })}
                                                    placeholder={__('Testimonial Description', 'frontis-blocks')}
                                                    className="fb-user-desc"
                                                />
                                            </div>
                                        )}

                                        <div className={`fb-testimonial-author-container ${TestimonialAlignment}`}> 
                                            <div className='fb-testimonial-author-inner-container'>
                                                <div className='fb-testimonial-author-image-container'>
                                                    {TestimonialImageSwitcher && (
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
                                                    )}
                                                </div>
                                                <div className="fb-testimonial-userinfo-container">
                                                    {AuthorSwitcher && (
                                                        <RichText
                                                            tagName="div"
                                                            value={TestimonialAuthor}
                                                            onChange={(value) => setAttributes({ TestimonialAuthor: value })}
                                                            placeholder={__('John Doe', 'frontis-blocks')}
                                                            className="fb-user"
                                                        />
                                                    )}
                                                    {DesignationSwitcher && (
                                                        <RichText
                                                            tagName="span"
                                                            value={TestimonialDesignation}
                                                            onChange={(value) => setAttributes({ TestimonialDesignation: value })}
                                                            placeholder={__('CEO, Company Name', 'frontis-blocks')}
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
}