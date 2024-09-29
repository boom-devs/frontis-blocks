import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const { 
        blockID,
        TestimonialImageWidthDesktop,
        TestimonialImageWidthTablet,
        TestimonialImageWidthMobile,
        TestimonialImageWidthUnits,
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

        TestimonialImageRadiusUnits,
        TestimonialImageDesktopRadiusWidth,
        TestimonialImagelTabRadiusWidth,
        TestimonialImageMobileRadiusWidth,

        TestimonialQuoteIconSizeDesktop,
        TestimonialQuoteIconSizeTablet,
        TestimonialQuoteIconSizeMobile,
        TestimonialQuoteIconSizeUnits,
        TestimonialQuoteIconColor,
        TestimonialQuoteIconHoverColor,

        TestimonialDescFontFamily,
        TestimonialDescFontSizeDesktop,
        TestimonialDescFontSizeTablet,
        TestimonialDescFontSizeMobile,
        TestimonialDescFontSizeUnits,
        TestimonialDescFontWeight,
        TestimonialDescFontStyle,
        TestimonialDescTextTransform,
        TestimonialDescTextDecoration,
        TestimonialDescLetterSpacingDesktop,
        TestimonialDescLetterSpacingTablet,
        TestimonialDescLetterSpacingMobile,
        TestimonialDescLetterSpacingUnits,
        TestimonialDescLineHeightDesktop,
        TestimonialDescLineHeightTablet,
        TestimonialDescLineHeightMobile,
        TestimonialDescLineHeightUnits,
        TestimonialDescColor,
        TestimonialDescHoverColor,

        TestimonialAuthorFontFamily,
        TestimonialAuthorFontSizeDesktop,
        TestimonialAuthorFontSizeTablet,
        TestimonialAuthorFontSizeMobile,
        TestimonialAuthorFontSizeUnits,
        TestimonialAuthorFontWeight,
        TestimonialAuthorFontStyle,
        TestimonialAuthorTextTransform,
        TestimonialAuthorTextDecoration,
        TestimonialAuthorLetterSpacingDesktop,
        TestimonialAuthorLetterSpacingTablet,
        TestimonialAuthorLetterSpacingMobile,
        TestimonialAuthorLetterSpacingUnits,
        TestimonialAuthorLineHeightDesktop,
        TestimonialAuthorLineHeightTablet,
        TestimonialAuthorLineHeightMobile,
        TestimonialAuthorLineHeightUnits,
        TestimonialAuthorColor,
        TestimonialAuthorHoverColor,

        TestimonialDesignationFontFamily,
        TestimonialDesignationFontSizeDesktop,
        TestimonialDesignationFontSizeTablet,
        TestimonialDesignationFontSizeMobile,
        TestimonialDesignationFontSizeUnits,
        TestimonialDesignationFontWeight,
        TestimonialDesignationFontStyle,
        TestimonialDesignationTextTransform,
        TestimonialDesignationTextDecoration,
        TestimonialDesignationLetterSpacingDesktop,
        TestimonialDesignationLetterSpacingTablet,
        TestimonialDesignationLetterSpacingMobile,
        TestimonialDesignationLetterSpacingUnits,
        TestimonialDesignationLineHeightDesktop,
        TestimonialDesignationLineHeightTablet,
        TestimonialDesignationLineHeightMobile,
        TestimonialDesignationLineHeightUnits,
        TestimonialDesignationColor,
        TestimonialDesignationHoverColor,

        TestimonialRatingIconSizeDesktop,
        TestimonialRatingIconSizeTablet,
        TestimonialRatingIconSizeMobile,
        TestimonialRatingIconSizeUnits,
        TestimonialRatingIconColor,
        TestimonialRatingIconHoverColor,

        TestimonialZIndex,
        TestimonialPaddingUnits,
        TestimonialDesktopPadding,
        TestimonialTabPadding,
        TestimonialMobilePadding,
        TestimonialMarginUnits,
        TestimonialDesktopMargin,
        TestimonialTabMargin,
        TestimonialMobileMargin,

        TestimonialBgColor,
        TestimonialBgHoverColor,

        TestimonialBorder,
        TestimonialBorderColor,
        TestimonialBorderHoverColor,
        TestimonialBorderUnits,
        TestimonialDesktopBorderWidth,
        TestimonialTabBorderWidth,
        TestimonialMobileBorderWidth,
        TestimonialBorderRadiusUnits,
        TestimonialDesktopBorderRadiusWidth,
        TestimonialTabBorderRadiusWidth,
        TestimonialMobileBorderRadiusWidth,

        TestimonialDesktopSwitcher,
        TestimonialTabletSwitcher,
        TestimonialMobileSwitcher,

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

    /** Default Border Width for desktop (using HeadingDesktopBorderWidth) */
    const ImageDesktopBorderRadiusWidth = `${TestimonialImageDesktopRadiusWidth.top}${TestimonialImageRadiusUnits} ${TestimonialImageDesktopRadiusWidth.right}${TestimonialImageRadiusUnits} ${TestimonialImageDesktopRadiusWidth.bottom}${TestimonialImageRadiusUnits} ${TestimonialImageDesktopRadiusWidth.left}${TestimonialImageRadiusUnits}`;
    const ImageTabBorderRadiusWidth     = `${TestimonialImagelTabRadiusWidth.top}${TestimonialImageRadiusUnits} ${TestimonialImagelTabRadiusWidth.right}${TestimonialImageRadiusUnits} ${TestimonialImagelTabRadiusWidth.bottom}${TestimonialImageRadiusUnits} ${TestimonialImagelTabRadiusWidth.left}${TestimonialImageRadiusUnits}`;
    const ImageMobileBorderRadiusWidth  = `${TestimonialImageMobileRadiusWidth.top}${TestimonialImageRadiusUnits} ${TestimonialImageMobileRadiusWidth.right}${TestimonialImageRadiusUnits} ${TestimonialImageMobileRadiusWidth.bottom}${TestimonialImageRadiusUnits} ${TestimonialImageMobileRadiusWidth.left}${TestimonialImageRadiusUnits}`;
    /** End Border Radius Width */ 

    /** Default padding for desktop (using desktop_padding) */
    const DesktopPadding = `${TestimonialDesktopPadding.top}${TestimonialPaddingUnits} ${TestimonialDesktopPadding.right}${TestimonialPaddingUnits} ${TestimonialDesktopPadding.bottom}${TestimonialPaddingUnits} ${TestimonialDesktopPadding.left}${TestimonialPaddingUnits}`;
    const TabPadding = `${TestimonialTabPadding.top}${TestimonialPaddingUnits} ${TestimonialTabPadding.right}${TestimonialPaddingUnits} ${TestimonialTabPadding.bottom}${TestimonialPaddingUnits} ${TestimonialTabPadding.left}${TestimonialPaddingUnits}`;
    const MobilePadding = `${TestimonialMobilePadding.top}${TestimonialPaddingUnits} ${TestimonialMobilePadding.right}${TestimonialPaddingUnits} ${TestimonialMobilePadding.bottom}${TestimonialPaddingUnits} ${TestimonialMobilePadding.left}${TestimonialPaddingUnits}`;
    /** End Padding */

    /** Default margin for desktop (using desktop_margin) */
    const DesktopMargin  = `${TestimonialDesktopMargin.top}${TestimonialMarginUnits} ${TestimonialDesktopMargin.right}${TestimonialMarginUnits} ${TestimonialDesktopMargin.bottom}${TestimonialMarginUnits} ${TestimonialDesktopMargin.left}${TestimonialMarginUnits}`;
    const TabMargin      = `${TestimonialTabMargin.top}${TestimonialMarginUnits} ${TestimonialTabMargin.right}${TestimonialMarginUnits} ${TestimonialTabMargin.bottom}${TestimonialMarginUnits} ${TestimonialTabMargin.left}${TestimonialMarginUnits}`;
    const MobileMargin   = `${TestimonialMobileMargin.top}${TestimonialMarginUnits} ${TestimonialMobileMargin.right}${TestimonialMarginUnits} ${TestimonialMobileMargin.bottom}${TestimonialMarginUnits} ${TestimonialMobileMargin.left}${TestimonialMarginUnits}`;
    /** End Margin */

    /** Default Border Width for desktop (using TestimonialDesktopBorderWidth) */
    const DesktopBorderWidth = `${TestimonialDesktopBorderWidth.top}${TestimonialBorderUnits} ${TestimonialDesktopBorderWidth.right}${TestimonialBorderUnits} ${TestimonialDesktopBorderWidth.bottom}${TestimonialBorderUnits} ${TestimonialDesktopBorderWidth.left}${TestimonialBorderUnits}`;
    const TabBorderWidth     = `${TestimonialTabBorderWidth.top}${TestimonialBorderUnits} ${TestimonialTabBorderWidth.right}${TestimonialBorderUnits} ${TestimonialTabBorderWidth.bottom}${TestimonialBorderUnits} ${TestimonialTabBorderWidth.left}${TestimonialBorderUnits}`;
    const MobileBorderWidth  = `${TestimonialMobileBorderWidth.top}${TestimonialBorderUnits} ${TestimonialMobileBorderWidth.right}${TestimonialBorderUnits} ${TestimonialMobileBorderWidth.bottom}${TestimonialBorderUnits} ${TestimonialMobileBorderWidth.left}${TestimonialBorderUnits}`;
    /** End Border Width */

    /** Default Border Width for desktop (using TestimonialDesktopBorderWidth) */
    const DesktopBorderRadiusWidth = `${TestimonialDesktopBorderRadiusWidth.top}${TestimonialBorderRadiusUnits} ${TestimonialDesktopBorderRadiusWidth.right}${TestimonialBorderRadiusUnits} ${TestimonialDesktopBorderRadiusWidth.bottom}${TestimonialBorderRadiusUnits} ${TestimonialDesktopBorderRadiusWidth.left}${TestimonialBorderRadiusUnits}`;
    const TabBorderRadiusWidth = `${TestimonialTabBorderRadiusWidth.top}${TestimonialBorderRadiusUnits} ${TestimonialTabBorderRadiusWidth.right}${TestimonialBorderRadiusUnits} ${TestimonialTabBorderRadiusWidth.bottom}${TestimonialBorderRadiusUnits} ${TestimonialTabBorderRadiusWidth.left}${TestimonialBorderRadiusUnits}`;
    const MobileBorderRadiusWidth = `${TestimonialMobileBorderRadiusWidth.top}${TestimonialBorderRadiusUnits} ${TestimonialMobileBorderRadiusWidth.right}${TestimonialBorderRadiusUnits} ${TestimonialMobileBorderRadiusWidth.bottom}${TestimonialBorderRadiusUnits} ${TestimonialMobileBorderRadiusWidth.left}${TestimonialBorderRadiusUnits}`;
    /** End Border Radius Width */ 

    return (
        <>
            <style>
                {`
                    .fb-testimonial-main-wrapper.${blockID} {
                        z-index: ${TestimonialZIndex !== undefined ? TestimonialZIndex : ''} !important;
                    }
                    .fb-testimonial-main-wrapper.${blockID} .fb-testimonial-section {
                        ${TestimonialBgColor !== undefined ? `background-color: ${TestimonialBgColor};` : ''};
                        padding: ${DesktopPadding};
                        margin: ${DesktopMargin};
                        border: ${TestimonialBorder};
                        border-width: ${DesktopBorderWidth};
                        border-radius: ${DesktopBorderRadiusWidth} !important;
                        ${TestimonialBorderColor !== undefined ? `border-color: ${TestimonialBorderColor};` : ''};
                        transition: all .3s ease-in-out;
                    }
                    .fb-testimonial-main-wrapper.${blockID} .fb-testimonial-section:hover {
                        ${TestimonialBgHoverColor !== undefined ? `background-color: ${TestimonialBgHoverColor};` : ''};
                        ${TestimonialBorderHoverColor !== undefined ? `border-color: ${TestimonialBorderHoverColor};` : ''};
                    }
                    .fb-testimonial-image img {
                        width: ${TestimonialImageWidthDesktop}${TestimonialImageWidthUnits};
                        height: ${TestimonialImageWidthDesktop}${TestimonialImageWidthUnits};
                        border-radius: ${ImageDesktopBorderRadiusWidth};
                    }
                    .fb-testimonial-quote-icon svg {
                        width: ${TestimonialQuoteIconSizeDesktop}${TestimonialQuoteIconSizeUnits};
                        height: ${TestimonialQuoteIconSizeDesktop}${TestimonialQuoteIconSizeUnits};
                        fill: ${TestimonialQuoteIconColor};
                    }
                    .fb-testimonial-quote-icon:hover svg {
                        fill: ${TestimonialQuoteIconHoverColor};
                    }
                    .fb-testimonial-userdesc-container .fb-user-desc {
                        font-family: ${TestimonialDescFontFamily};
                        font-size: ${TestimonialDescFontSizeDesktop}${TestimonialDescFontSizeUnits};
                        font-weight: ${TestimonialDescFontWeight};
                        font-style: ${TestimonialDescFontStyle};
                        text-transform: ${TestimonialDescTextTransform};
                        text-decoration: ${TestimonialDescTextDecoration};
                        letter-spacing: ${TestimonialDescLetterSpacingDesktop}${TestimonialDescLetterSpacingUnits};
                        line-height: ${TestimonialDescLineHeightDesktop}${TestimonialDescLineHeightUnits};
                        color: ${TestimonialDescColor};
                    }
                    .fb-testimonial-userdesc-container .fb-user-desc:hover {
                        color: ${TestimonialDescHoverColor};
                    }

                    .fb-testimonial-userinfo-container .fb-user {
                        font-family: ${TestimonialAuthorFontFamily};
                        font-size: ${TestimonialAuthorFontSizeDesktop}${TestimonialAuthorFontSizeUnits};
                        font-weight: ${TestimonialAuthorFontWeight};
                        font-style: ${TestimonialAuthorFontStyle};
                        text-transform: ${TestimonialAuthorTextTransform};
                        text-decoration: ${TestimonialAuthorTextDecoration};
                        letter-spacing: ${TestimonialAuthorLetterSpacingDesktop}${TestimonialAuthorLetterSpacingUnits};
                        line-height: ${TestimonialAuthorLineHeightDesktop}${TestimonialAuthorLineHeightUnits};
                        color: ${TestimonialAuthorColor};
                    }
                    .fb-testimonial-userinfo-container .fb-user:hover {
                        color: ${TestimonialAuthorHoverColor};
                    }

                    .fb-testimonial-userinfo-container .fb-user-designation {
                        font-family: ${TestimonialDesignationFontFamily};
                        font-size: ${TestimonialDesignationFontSizeDesktop}${TestimonialDesignationFontSizeUnits};
                        font-weight: ${TestimonialDesignationFontWeight};
                        font-style: ${TestimonialDesignationFontStyle};
                        text-transform: ${TestimonialDesignationTextTransform};
                        text-decoration: ${TestimonialDesignationTextDecoration};
                        letter-spacing: ${TestimonialDesignationLetterSpacingDesktop}${TestimonialDesignationLetterSpacingUnits};
                        line-height: ${TestimonialDesignationLineHeightDesktop}${TestimonialDesignationLineHeightUnits};
                        color: ${TestimonialDesignationColor};
                    }
                    .fb-testimonial-userinfo-container .fb-user-designation:hover {
                        color: ${TestimonialDesignationHoverColor};
                    }

                    .fb-testimonial-rating-icon svg {
                        width: ${TestimonialRatingIconSizeDesktop}${TestimonialRatingIconSizeUnits};
                        height: ${TestimonialRatingIconSizeDesktop}${TestimonialRatingIconSizeUnits};
                        fill: ${TestimonialRatingIconColor};
                    }
                    .fb-testimonial-rating-icon:hover svg {
                        fill: ${TestimonialRatingIconHoverColor};
                    }

                    @media only screen and (max-width: 1024px) {
                        .fb-testimonial-main-wrapper.${blockID} .fb-testimonial-section {
                            padding: ${TabPadding};
                            margin: ${TabMargin};
                            border-width: ${TabBorderWidth};
                            border-radius: ${TabBorderRadiusWidth} !important;
                        }
                        .fb-testimonial-image img {
                            width: ${TestimonialImageWidthTablet}${TestimonialImageWidthUnits};
                            height: ${TestimonialImageWidthTablet}${TestimonialImageWidthUnits};
                            border-radius: ${ImageTabBorderRadiusWidth};
                        }
                        .fb-testimonial-quote-icon svg {
                            width: ${TestimonialQuoteIconSizeTablet}${TestimonialQuoteIconSizeUnits};
                            height: ${TestimonialQuoteIconSizeTablet}${TestimonialQuoteIconSizeUnits};
                        }
                        .fb-testimonial-userdesc-container .fb-user-desc {
                            font-size: ${TestimonialDescFontSizeTablet}${TestimonialDescFontSizeUnits};
                            letter-spacing: ${TestimonialDescLetterSpacingTablet}${TestimonialDescLetterSpacingUnits};
                            line-height: ${TestimonialDescLineHeightTablet}${TestimonialDescLineHeightUnits};
                        }
                        .fb-testimonial-userinfo-container .fb-user {
                            font-size: ${TestimonialAuthorFontSizeTablet}${TestimonialDescFontSizeUnits};
                            letter-spacing: ${TestimonialAuthorLetterSpacingTablet}${TestimonialDescLetterSpacingUnits};
                            line-height: ${TestimonialAuthorLineHeightTablet}${TestimonialDescLineHeightUnits};
                        }
                        .fb-testimonial-userinfo-container .fb-user-designation {
                            font-size: ${TestimonialDesignationFontSizeTablet}${TestimonialDescFontSizeUnits};
                            letter-spacing: ${TestimonialDesignationLetterSpacingTablet}${TestimonialDescLetterSpacingUnits};
                            line-height: ${TestimonialDesignationLineHeightTablet}${TestimonialDescLineHeightUnits};
                        }
                        .fb-testimonial-rating-icon svg {
                            width: ${TestimonialRatingIconSizeTablet}${TestimonialRatingIconSizeUnits};
                            height: ${TestimonialRatingIconSizeTablet}${TestimonialRatingIconSizeUnits};
                        }
                    }

                    @media only screen and (max-width: 767px) {
                        .fb-testimonial-main-wrapper.${blockID} .fb-testimonial-section {
                            padding: ${MobilePadding};
                            margin: ${MobileMargin};
                            border-width: ${MobileBorderWidth};
                            border-radius: ${MobileBorderRadiusWidth} !important;
                        }
                        .fb-testimonial-image img {
                            width: ${TestimonialImageWidthMobile}${TestimonialImageWidthUnits};
                            height: ${TestimonialImageWidthMobile}${TestimonialImageWidthUnits};
                            border-radius: ${ImageMobileBorderRadiusWidth};
                        }
                        .fb-testimonial-quote-icon svg {
                            width: ${TestimonialQuoteIconSizeMobile}${TestimonialQuoteIconSizeUnits};
                            height: ${TestimonialQuoteIconSizeMobile}${TestimonialQuoteIconSizeUnits};
                        }
                        .fb-testimonial-userdesc-container .fb-user-desc {
                            font-size: ${TestimonialDescFontSizeMobile}${TestimonialDescFontSizeUnits};
                            letter-spacing: ${TestimonialDescLetterSpacingMobile}${TestimonialDescLetterSpacingUnits};
                            line-height: ${TestimonialDescLineHeightMobile}${TestimonialDescLineHeightUnits};
                        }
                        .fb-testimonial-userinfo-container .fb-user {
                            font-size: ${TestimonialAuthorFontSizeMobile}${TestimonialDescFontSizeUnits};
                            letter-spacing: ${TestimonialAuthorLetterSpacingMobile}${TestimonialDescLetterSpacingUnits};
                            line-height: ${TestimonialAuthorLineHeightMobile}${TestimonialDescLineHeightUnits};
                        }
                        .fb-testimonial-userinfo-container .fb-user-designation {
                            font-size: ${TestimonialDesignationFontSizeMobile}${TestimonialDescFontSizeUnits};
                            letter-spacing: ${TestimonialDesignationLetterSpacingMobile}${TestimonialDescLetterSpacingUnits};
                            line-height: ${TestimonialDesignationLineHeightMobile}${TestimonialDescLineHeightUnits};
                        }
                        .fb-testimonial-rating-icon svg {
                            width: ${TestimonialRatingIconSizeMobile}${TestimonialRatingIconSizeUnits};
                            height: ${TestimonialRatingIconSizeMobile}${TestimonialRatingIconSizeUnits};
                        }
                    }
                `}
            </style>
            <div {...blockProps}>
                <div className={`fb-testimonial-section fb-testimonia-section-${TestimonialAlignment}`}>
                    <div className="fb-testimonial-wrapper">
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
