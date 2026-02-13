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
import { useEffect, useRef } from '@wordpress/element';
import './editor.scss';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import DynamicTextValue from '@Components/dynamic-text-value';
import loadGoogleFont from '@Utils/loadGoogleFont';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';

import Inspector from './inspector';
import generateTestimonialStyle from './styling';

// Global set to track loaded fonts across all block instances
const loadedFonts = new Set();

export default function Edit({ attributes, setAttributes, clientId, context, isSelected }) {
    const {
        blockID,
        blockStyle,
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

        /** Start Dynamic Title Text */
        dynamicTitleEnabled,
        dynamicTitleSource,
        dynamicTitlePostId,
        dynamicTitlePostType,
        dynamicTitlePostLabel,
        dynamicTitleField,
        dynamicTitleFeaturedImageField,

        dynamicTitleDateType,
        dynamicTitleDateFormat,

        dynamicTitleTimeType,
        dynamicTitleTimeFormat,

        dynamicTitleCommentsZeroText,
        dynamicTitleCommentsOneText,
        dynamicTitleCommentsManyText,

        dynamicTitleTermsTaxonomy,
        dynamicTitleTermsSeparator,
        dynamicTitleEnableLink,
        dynamicTitleLinkSource,
        /** End Dynamic Title Text */

        /** Start Dynamic Description Text */
        dynamicDescriptionEnabled,
        dynamicDescriptionSource,
        dynamicDescriptionPostId,
        dynamicDescriptionPostType,
        dynamicDescriptionPostLabel,
        dynamicDescriptionField,
        dynamicDescriptionFeaturedImageField,

        dynamicDescriptionDateType,
        dynamicDescriptionDateFormat,

        dynamicDescriptionTimeType,
        dynamicDescriptionTimeFormat,

        dynamicDescriptionCommentsZeroText,
        dynamicDescriptionCommentsOneText,
        dynamicDescriptionCommentsManyText,

        dynamicDescriptionTermsTaxonomy,
        dynamicDescriptionTermsSeparator,
        dynamicDescriptionEnableLink,
        dynamicDescriptionLinkSource,
        /** End Dynamic Description Text */

        /** Start Dynamic Author Name Text */
        dynamicAuthorNameEnabled,
        dynamicAuthorNameSource,
        dynamicAuthorNamePostId,
        dynamicAuthorNamePostType,
        dynamicAuthorNamePostLabel,
        dynamicAuthorNameField,
        dynamicAuthorNameFeaturedImageField,

        dynamicAuthorNameDateType,
        dynamicAuthorNameDateFormat,

        dynamicAuthorNameTimeType,
        dynamicAuthorNameTimeFormat,

        dynamicAuthorNameCommentsZeroText,
        dynamicAuthorNameCommentsOneText,
        dynamicAuthorNameCommentsManyText,

        dynamicAuthorNameTermsTaxonomy,
        dynamicAuthorNameTermsSeparator,
        dynamicAuthorNameEnableLink,
        dynamicAuthorNameLinkSource,
        /** End Dynamic Author Name Text */

        /** Start Dynamic Author Designation Text */
        dynamicAuthorDesignationEnabled,
        dynamicAuthorDesignationSource,
        dynamicAuthorDesignationPostId,
        dynamicAuthorDesignationPostType,
        dynamicAuthorDesignationPostLabel,
        dynamicAuthorDesignationField,
        dynamicAuthorDesignationFeaturedImageField,

        dynamicAuthorDesignationDateType,
        dynamicAuthorDesignationDateFormat,

        dynamicAuthorDesignationTimeType,
        dynamicAuthorDesignationTimeFormat,

        dynamicAuthorDesignationCommentsZeroText,
        dynamicAuthorDesignationCommentsOneText,
        dynamicAuthorDesignationCommentsManyText,

        dynamicAuthorDesignationTermsTaxonomy,
        dynamicAuthorDesignationTermsSeparator,
        dynamicAuthorDesignationEnableLink,
        dynamicAuthorDesignationLinkSource,
        /** End Dynamic Author Designation Text */

        // Typography Fonts
        TestimonialTitleFontFamily,
        TestimonialDescFontFamily,
        TestimonialAuthorFontFamily,
        TestimonialDesignationFontFamily,

    } = attributes;

    // Handle block ID generation (handles duplication and initial ID)
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-testimonial',
        isSelected,
        attributes,
        setAttributes,
    });

    /** Start Load Google Font */
    useEffect(() => {
    if (TestimonialTitleFontFamily && !loadedFonts.has(TestimonialTitleFontFamily)) {
        loadGoogleFont(TestimonialTitleFontFamily);
        loadedFonts.add(TestimonialTitleFontFamily);
    }
    }, [TestimonialTitleFontFamily]);

    useEffect(() => {
    if (TestimonialDescFontFamily && !loadedFonts.has(TestimonialDescFontFamily)) {
        loadGoogleFont(TestimonialDescFontFamily);
        loadedFonts.add(TestimonialDescFontFamily);
    }
    }, [TestimonialDescFontFamily]);
    
    useEffect(() => {
    if (TestimonialAuthorFontFamily && !loadedFonts.has(TestimonialAuthorFontFamily)) {
        loadGoogleFont(TestimonialAuthorFontFamily);
        loadedFonts.add(TestimonialAuthorFontFamily);
    }
    }, [TestimonialAuthorFontFamily]);

    useEffect(() => {
    if (TestimonialDesignationFontFamily && !loadedFonts.has(TestimonialDesignationFontFamily)) {
        loadGoogleFont(TestimonialDesignationFontFamily);
        loadedFonts.add(TestimonialDesignationFontFamily);
    }
    }, [TestimonialDesignationFontFamily]);
    /** End Load Google Font */

    /** Start Generate Block Style */
    useEffect(() => {
        if (blockID) {
            const css = generateTestimonialStyle(attributes);
            setAttributes({ blockStyle: css });
        }
    }, [attributes, blockID]);
    /** End Generate Block Style */

    /** Start Default Image Initialization */
    useEffect(() => {
        if (!TestimonialImageUrl) {
            let defaultImageUrl = '';
            if (typeof FrontisBlocksData !== 'undefined') {
                defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/avatar.png';
            }
            if (defaultImageUrl) {
                setAttributes({ TestimonialImageUrl: defaultImageUrl });
            }
        }
    }, [TestimonialImageUrl]);
    /** End Default Image Initialization */

    const blockProps = useBlockProps({
        className: `fb-testimonial-main-wrapper ${blockID} ${testimonialDesktopSwitcher && 'fb-desktop-responsive'} ${testimonialTabletSwitcher && 'fb-tablet-responsive'} ${testimonialMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    /** Helper function to render rating icons based on the number of ratings */
    const renderRatingIcons = () => {
        let icons = [];
        for (let i = 0; i < TestimonialRatingNumber; i++) {
            icons.push(
                <div key={i} className="fb-testimonial-rating-icon">
                    {TestimonialRatinIconAlign === 'icon' && TestimonialRatingicon ? renderSVG(TestimonialRatingicon) : ''}
                    {TestimonialRatinIconAlign === 'image' && TestimonialRatingImageUrl ? <img src={TestimonialRatingImageUrl} alt={TestimonialRatingImageAlt} /> : ''}
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

    /**
 * Dynamic Text Value for Title
 */
    const { dynamicDisplayValue: dynamicTitleValue, dynamicDisplayLink: dynamicTitleLink } = DynamicTextValue({
        textEnabled: dynamicTitleEnabled,
        textSource: dynamicTitleSource,
        textField: dynamicTitleField,

        textPostId: dynamicTitlePostId,
        textPostType: dynamicTitlePostType,
        textPostLabel: dynamicTitlePostLabel,

        textFeaturedImageField: dynamicTitleFeaturedImageField,

        textDateType: dynamicTitleDateType,
        textDateFormat: dynamicTitleDateFormat,
        textTimeType: dynamicTitleTimeType,
        textTimeFormat: dynamicTitleTimeFormat,

        textCommentsZeroText: dynamicTitleCommentsZeroText,
        textCommentsOneText: dynamicTitleCommentsOneText,
        textCommentsManyText: dynamicTitleCommentsManyText,

        textTermsTaxonomy: dynamicTitleTermsTaxonomy,
        textTermsSeparator: dynamicTitleTermsSeparator,

        textLinkEnabled: dynamicTitleEnableLink,
        textLinkSource: dynamicTitleLinkSource,

        context,
    });

    /**
     * Dynamic Text Value for Description
     */
    const { dynamicDisplayValue: dynamicDescriptionValue, dynamicDisplayLink: dynamicDescriptionLink } = DynamicTextValue({
        textEnabled: dynamicDescriptionEnabled,
        textSource: dynamicDescriptionSource,
        textField: dynamicDescriptionField,

        textPostId: dynamicDescriptionPostId,
        textPostType: dynamicDescriptionPostType,
        textPostLabel: dynamicDescriptionPostLabel,

        textFeaturedImageField: dynamicDescriptionFeaturedImageField,

        textDateType: dynamicDescriptionDateType,
        textDateFormat: dynamicDescriptionDateFormat,
        textTimeType: dynamicDescriptionTimeType,
        textTimeFormat: dynamicDescriptionTimeFormat,

        textCommentsZeroText: dynamicDescriptionCommentsZeroText,
        textCommentsOneText: dynamicDescriptionCommentsOneText,
        textCommentsManyText: dynamicDescriptionCommentsManyText,

        textTermsTaxonomy: dynamicDescriptionTermsTaxonomy,
        textTermsSeparator: dynamicDescriptionTermsSeparator,

        textLinkEnabled: dynamicDescriptionEnableLink,
        textLinkSource: dynamicDescriptionLinkSource,

        context,
    });

    /**
     * Dynamic Text Value for Author Name
     */
    const { dynamicDisplayValue: dynamicAuthorNameValue, dynamicDisplayLink: dynamicAuthorNameLink } = DynamicTextValue({
        textEnabled: dynamicAuthorNameEnabled,
        textSource: dynamicAuthorNameSource,
        textField: dynamicAuthorNameField,

        textPostId: dynamicAuthorNamePostId,
        textPostType: dynamicAuthorNamePostType,
        textPostLabel: dynamicAuthorNamePostLabel,

        textFeaturedImageField: dynamicAuthorNameFeaturedImageField,

        textDateType: dynamicAuthorNameDateType,
        textDateFormat: dynamicAuthorNameDateFormat,
        textTimeType: dynamicAuthorNameTimeType,
        textTimeFormat: dynamicAuthorNameTimeFormat,

        textCommentsZeroText: dynamicAuthorNameCommentsZeroText,
        textCommentsOneText: dynamicAuthorNameCommentsOneText,
        textCommentsManyText: dynamicAuthorNameCommentsManyText,

        textTermsTaxonomy: dynamicAuthorNameTermsTaxonomy,
        textTermsSeparator: dynamicAuthorNameTermsSeparator,

        textLinkEnabled: dynamicAuthorNameEnableLink,
        textLinkSource: dynamicAuthorNameLinkSource,

        context,
    });

    /**
     * Dynamic Text Value for Author Designation
     */
    const { dynamicDisplayValue: dynamicAuthorDesignationValue, dynamicDisplayLink: dynamicAuthorDesignationLink } = DynamicTextValue({
        textEnabled: dynamicAuthorDesignationEnabled,
        textSource: dynamicAuthorDesignationSource,
        textField: dynamicAuthorDesignationField,

        textPostId: dynamicAuthorDesignationPostId,
        textPostType: dynamicAuthorDesignationPostType,
        textPostLabel: dynamicAuthorDesignationPostLabel,

        textFeaturedImageField: dynamicAuthorDesignationFeaturedImageField,

        textDateType: dynamicAuthorDesignationDateType,
        textDateFormat: dynamicAuthorDesignationDateFormat,
        textTimeType: dynamicAuthorDesignationTimeType,
        textTimeFormat: dynamicAuthorDesignationTimeFormat,

        textCommentsZeroText: dynamicAuthorDesignationCommentsZeroText,
        textCommentsOneText: dynamicAuthorDesignationCommentsOneText,
        textCommentsManyText: dynamicAuthorDesignationCommentsManyText,

        textTermsTaxonomy: dynamicAuthorDesignationTermsTaxonomy,
        textTermsSeparator: dynamicAuthorDesignationTermsSeparator,

        textLinkEnabled: dynamicAuthorDesignationEnableLink,
        textLinkSource: dynamicAuthorDesignationLinkSource,

        context,
    });

    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}

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
                <div className={`fb-parent-wrapper fb-testimonial-section fb-testimonial-section-${TestimonialAlignment} ${testimonialGlobalWraperClass}`} id={testimonialGlobalWraperID} ref={panelRef}>
                    <div className={`fb-testimonial-wrapper`}>
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
                                                                <img src={TestimonialImageUrl} alt={TestimonialImageAlt} aria-hidden="true" />
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
                                                            value={dynamicAuthorNameEnabled ? dynamicAuthorNameValue : TestimonialAuthor}
                                                            onChange={(value) => {
                                                                if (!dynamicAuthorNameEnabled) setAttributes({ TestimonialAuthor: value });
                                                            }}
                                                            placeholder={__('John Doe', 'frontis-blocks')}
                                                            className="fb-user"
                                                        />
                                                    )}
                                                    {DesignationSwitcher && (
                                                        <RichText
                                                            tagName="span"
                                                            value={dynamicAuthorDesignationEnabled ? dynamicAuthorDesignationValue : TestimonialDesignation}
                                                            onChange={(value) => {
                                                                if (!dynamicAuthorDesignationEnabled) setAttributes({ TestimonialDesignation: value });
                                                            }}
                                                            placeholder={__('CEO, Company Name', 'frontis-blocks')}
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
                                                <RichText
                                                    tagName={TestimonialTitleTag}
                                                    value={dynamicTitleEnabled ? dynamicTitleValue : TestimonialTitle}
                                                    onChange={(value) => {
                                                        if (!dynamicTitleEnabled) setAttributes({ TestimonialTitle: value });
                                                    }}
                                                    placeholder={__('Testimonial Title', 'frontis-blocks')}
                                                    className="fb-testimonial-title"
                                                />
                                            </div>
                                        )}

                                        {DescSwitcher && (
                                            <div className="fb-testimonial-userdesc-container">
                                                <RichText
                                                    tagName="p"
                                                    value={dynamicDescriptionEnabled ? dynamicDescriptionValue : TestimonialDesc}
                                                    onChange={(value) => {
                                                        if (!dynamicDescriptionEnabled) setAttributes({ TestimonialDesc: value });
                                                    }}
                                                    placeholder={__('Testimonial Description', 'frontis-blocks')}
                                                    className="fb-user-desc"
                                                />
                                            </div>
                                        )}
                                        {QuoteIconSwitcher && TestimonialQuoteIconAlign === 'icon' && (
                                            <div className="fb-testimonial-quote-icon">
                                                {TestimonialQuoteIconAlign === 'icon' && TestimonialQuoteIcon ? renderSVG(TestimonialQuoteIcon) : ''}
                                            </div>
                                        )}
                                        {QuoteIconSwitcher && TestimonialQuoteIconAlign === 'image' && (
                                            <div className="fb-testimonial-quote-icon">
                                                {TestimonialQuoteImageUrl ? <img src={TestimonialQuoteImageUrl} alt={TestimonialQuoteImageAlt} aria-hidden="true" /> : ''}
                                            </div>
                                        )}
                                    </>
                                ) : TestimonialPresetStyle === "preset-5" ? (
                                    <>
                                        {TitleSwitcher && (
                                            <div className="fb-testimonial-title-container">
                                                <RichText
                                                    tagName={TestimonialTitleTag}
                                                    value={dynamicTitleEnabled ? dynamicTitleValue : TestimonialTitle}
                                                    onChange={(value) => {
                                                        if (!dynamicTitleEnabled) setAttributes({ TestimonialTitle: value });
                                                    }}
                                                    placeholder={__('Testimonial Title', 'frontis-blocks')}
                                                    className="fb-testimonial-title"
                                                />
                                            </div>
                                        )}

                                        {DescSwitcher && (
                                            <div className="fb-testimonial-userdesc-container">
                                                <RichText
                                                    tagName="p"
                                                    value={dynamicDescriptionEnabled ? dynamicDescriptionValue : TestimonialDesc}
                                                    onChange={(value) => {
                                                        if (!dynamicDescriptionEnabled) setAttributes({ TestimonialDesc: value });
                                                    }}
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
                                                                <img src={TestimonialImageUrl} alt={TestimonialImageAlt} aria-hidden="true" />
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
                                                            value={dynamicAuthorNameEnabled ? dynamicAuthorNameValue : TestimonialAuthor}
                                                            onChange={(value) => {
                                                                if (!dynamicAuthorNameEnabled) setAttributes({ TestimonialAuthor: value });
                                                            }}
                                                            placeholder={__('John Doe', 'frontis-blocks')}
                                                            className="fb-user"
                                                        />
                                                    )}
                                                    {DesignationSwitcher && (
                                                        <RichText
                                                            tagName="span"
                                                            value={dynamicAuthorDesignationEnabled ? dynamicAuthorDesignationValue : TestimonialDesignation}
                                                            onChange={(value) => {
                                                                if (!dynamicAuthorDesignationEnabled) setAttributes({ TestimonialDesignation: value });
                                                            }}
                                                            placeholder={__('CEO, Company Name', 'frontis-blocks')}
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
                                        {QuoteIconSwitcher && TestimonialQuoteIconAlign === 'icon' && (
                                            <div className="fb-testimonial-quote-icon">
                                                {TestimonialQuoteIcon ? renderSVG(TestimonialQuoteIcon) : ''}
                                            </div>
                                        )}
                                        {QuoteIconSwitcher && TestimonialQuoteIconAlign === 'image' && (
                                            <div className="fb-testimonial-quote-icon">
                                                {TestimonialQuoteImageUrl ? <img src={TestimonialQuoteImageUrl} alt={TestimonialQuoteImageAlt} aria-hidden="true" /> : ''}
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
                                                <RichText
                                                    tagName={TestimonialTitleTag}
                                                    value={dynamicTitleEnabled ? dynamicTitleValue : TestimonialTitle}
                                                    onChange={(value) => {
                                                        if (!dynamicTitleEnabled) setAttributes({ TestimonialTitle: value });
                                                    }}
                                                    placeholder={__('Testimonial Title', 'frontis-blocks')}
                                                    className="fb-testimonial-title"
                                                />
                                            </div>
                                        )}

                                        {DescSwitcher && (
                                            <div className="fb-testimonial-userdesc-container">
                                                <RichText
                                                    tagName="p"
                                                    value={dynamicDescriptionEnabled ? dynamicDescriptionValue : TestimonialDesc}
                                                    onChange={(value) => {
                                                        if (!dynamicDescriptionEnabled) setAttributes({ TestimonialDesc: value });
                                                    }}
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
                                                                <img src={TestimonialImageUrl} alt={TestimonialImageAlt} aria-hidden="true" />
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
                                                            value={dynamicAuthorNameEnabled ? dynamicAuthorNameValue : TestimonialAuthor}
                                                            onChange={(value) => {
                                                                if (!dynamicAuthorNameEnabled) setAttributes({ TestimonialAuthor: value });
                                                            }}
                                                            placeholder={__('John Doe', 'frontis-blocks')}
                                                            className="fb-user"
                                                        />
                                                    )}
                                                    {DesignationSwitcher && (
                                                        <RichText
                                                            tagName="span"
                                                            value={dynamicAuthorDesignationEnabled ? dynamicAuthorDesignationValue : TestimonialDesignation}
                                                            onChange={(value) => {
                                                                if (!dynamicAuthorDesignationEnabled) setAttributes({ TestimonialDesignation: value });
                                                            }}
                                                            placeholder={__('CEO, Company Name', 'frontis-blocks')}
                                                            className="fb-user-designation"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        {QuoteIconSwitcher && TestimonialQuoteIconAlign === 'icon' && (
                                            <div className="fb-testimonial-quote-icon">
                                                {TestimonialQuoteIconAlign === 'icon' && TestimonialQuoteIcon ? renderSVG(TestimonialQuoteIcon) : ''}
                                            </div>
                                        )}
                                        {QuoteIconSwitcher && TestimonialQuoteIconAlign === 'image' && (
                                            <div className="fb-testimonial-quote-icon">
                                                {TestimonialQuoteImageUrl ? <img src={TestimonialQuoteImageUrl} alt={TestimonialQuoteImageAlt} aria-hidden="true" /> : ''}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{blockStyle}</style>
        </>
    );
}