import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './style.scss'; // Ensure you have styles for the front end if needed

export default function Save({ attributes }) {
    const { 

        blockID,
        FeatureItems,
        FeatureIconShape,
        FeatureTag,
        FeatureAlignment,
        FeatureIconAlignment,

        FeatureListGapDesktop,
        FeatureListGapTablet,
        FeatureListGapMobile,
        FeatureListGapUnits,

        FeatureIconColor,
        FeatureIconHoverColor,

        FeatureIconBgColor,
        FeatureIconBgHoverColor,

        FeatureIconSizeDesktop,
        FeatureIconSizeTablet,
        FeatureIconSizeMobile,
        FeatureIconSizeUnits,

        FeatureIconBgSizeDesktop,
        FeatureIconBgSizeTablet,
        FeatureIconBgSizeMobile,
        FeatureIconBgSizeUnits,

        FeatureIconSpacingDesktop,
        FeatureIconSpacingTablet,
        FeatureIconSpacingMobile,
        FeatureIconSpacingUnits,

        FeatureTitleFontFamily,
        FeatureTitleFontSizeDesktop,
        FeatureTitleFontSizeTablet,
        FeatureTitleFontSizeMobile,
        FeatureTitleFontSizeUnits,
        FeatureTitleFontWeight,
        FeatureTitleFontStyle,
        FeatureTitleTextTransform,
        FeatureTitleTextDecoration,
        FeatureTitleLetterSpacingDesktop,
        FeatureTitleLetterSpacingTablet,
        FeatureTitleLetterSpacingMobile,
        FeatureTitleLetterSpacingUnits,
        FeatureTitleLineHeightDesktop,
        FeatureTitleLineHeightTablet,
        FeatureTitleLineHeightMobile,
        FeatureTitleLineHeightUnits,

        FeatureTitleColor,
        FeatureTitleHoverColor,

        FeatureDescFontFamily,
        FeatureDescFontSizeDesktop,
        FeatureDescFontSizeTablet,
        FeatureDescFontSizeMobile,
        FeatureDescFontSizeUnits,
        FeatureDescFontWeight,
        FeatureDescFontStyle,
        FeatureDescTextTransform,
        FeatureDescTextDecoration,
        FeatureDescLetterSpacingDesktop,
        FeatureDescLetterSpacingTablet,
        FeatureDescLetterSpacingMobile,
        FeatureDescLetterSpacingUnits,
        FeatureDescLineHeightDesktop,
        FeatureDescLineHeightTablet,
        FeatureDescLineHeightMobile,
        FeatureDescLineHeightUnits,

        FeatureDescColor,
        FeatureDescHoverColor,

        FeatureZIndex,
        FeaturePaddingUnits,
        FeatureDesktopPadding,
        FeatureTabPadding,
        FeatureMobilePadding,
        FeatureMarginUnits,
        FeatureDesktopMargin,
        FeatureTabMargin,
        FeatureMobileMargin,

        FeatureBgColor,
        FeatureBgHoverColor,

        FeatureBorder,
        FeatureBorderColor,
        FeatureBorderHoverColor,
        FeatureBorderUnits,
        FeatureDesktopBorderWidth,
        FeatureTabBorderWidth,
        FeatureMobileBorderWidth,
        FeatureBorderRadiusUnits,
        FeatureDesktopBorderRadiusWidth,
        FeatureTabBorderRadiusWidth,
        FeatureMobileBorderRadiusWidth,
        FeatureboxShadowCssValue,

        FeatureDesktopSwitcher,
        FeatureTabletSwitcher,
        FeatureMobileSwitcher,

    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-feature-main-wrapper ${blockID}`,
    });

    /** Default padding for desktop (using desktop_padding) */
    const DesktopPadding    = `${FeatureDesktopPadding.top}${FeaturePaddingUnits} ${FeatureDesktopPadding.right}${FeaturePaddingUnits} ${FeatureDesktopPadding.bottom}${FeaturePaddingUnits} ${FeatureDesktopPadding.left}${FeaturePaddingUnits}`;
    const TabPadding        = `${FeatureTabPadding.top}${FeaturePaddingUnits} ${FeatureTabPadding.right}${FeaturePaddingUnits} ${FeatureTabPadding.bottom}${FeaturePaddingUnits} ${FeatureTabPadding.left}${FeaturePaddingUnits}`;
    const MobilePadding     = `${FeatureMobilePadding.top}${FeaturePaddingUnits} ${FeatureMobilePadding.right}${FeaturePaddingUnits} ${FeatureMobilePadding.bottom}${FeaturePaddingUnits} ${FeatureMobilePadding.left}${FeaturePaddingUnits}`;
    /** End Padding */

    /** Default margin for desktop (using desktop_margin) */
    const DesktopMargin     = `${FeatureDesktopMargin.top}${FeatureMarginUnits} ${FeatureDesktopMargin.right}${FeatureMarginUnits} ${FeatureDesktopMargin.bottom}${FeatureMarginUnits} ${FeatureDesktopMargin.left}${FeatureMarginUnits}`;
    const TabMargin         = `${FeatureTabMargin.top}${FeatureMarginUnits} ${FeatureTabMargin.right}${FeatureMarginUnits} ${FeatureTabMargin.bottom}${FeatureMarginUnits} ${FeatureTabMargin.left}${FeatureMarginUnits}`;
    const MobileMargin      = `${FeatureMobileMargin.top}${FeatureMarginUnits} ${FeatureMobileMargin.right}${FeatureMarginUnits} ${FeatureMobileMargin.bottom}${FeatureMarginUnits} ${FeatureMobileMargin.left}${FeatureMarginUnits}`;
    /** End Margin */

    /** Default Border Width for desktop (using FeatureDesktopBorderWidth) */
    const DesktopBorderWidth    = `${FeatureDesktopBorderWidth.top}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.right}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.bottom}${FeatureBorderUnits} ${FeatureDesktopBorderWidth.left}${FeatureBorderUnits}`;
    const TabBorderWidth        = `${FeatureTabBorderWidth.top}${FeatureBorderUnits} ${FeatureTabBorderWidth.right}${FeatureBorderUnits} ${FeatureTabBorderWidth.bottom}${FeatureBorderUnits} ${FeatureTabBorderWidth.left}${FeatureBorderUnits}`;
    const MobileBorderWidth     = `${FeatureMobileBorderWidth.top}${FeatureBorderUnits} ${FeatureMobileBorderWidth.right}${FeatureBorderUnits} ${FeatureMobileBorderWidth.bottom}${FeatureBorderUnits} ${FeatureMobileBorderWidth.left}${FeatureBorderUnits}`;
    /** End Border Width */

    /** Default Border Width for desktop (using FeatureDesktopBorderWidth) */
    const DesktopBorderRadiusWidth = `${FeatureDesktopBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureDesktopBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
    const TabBorderRadiusWidth = `${FeatureTabBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureTabBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureTabBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureTabBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
    const MobileBorderRadiusWidth = `${FeatureMobileBorderRadiusWidth.top}${FeatureBorderRadiusUnits} ${FeatureMobileBorderRadiusWidth.right}${FeatureBorderRadiusUnits} ${FeatureMobileBorderRadiusWidth.bottom}${FeatureBorderRadiusUnits} ${FeatureMobileBorderRadiusWidth.left}${FeatureBorderRadiusUnits}`;
    /** End Border Radius Width */ 

    return (
        <>
            <style>
            {`
                .fb-feature-main-wrapper.${blockID} {
                    z-index: ${FeatureZIndex !== undefined ? FeatureZIndex : ''};
                }
                .fb-feature-main-wrapper.${blockID} {
                    ${FeatureBgColor !== undefined ? `background-color: ${FeatureBgColor};` : ''};
                    padding: ${DesktopPadding};
                    margin: ${DesktopMargin};
                    border: ${FeatureBorder};
                    border-width: ${DesktopBorderWidth};
                    border-radius: ${DesktopBorderRadiusWidth} !important;
                    ${FeatureBorderColor !== undefined ? `border-color: ${FeatureBorderColor};` : ''};
                    box-shadow: ${FeatureboxShadowCssValue};
                    transition: all .3s ease-in-out;
                }
                .fb-feature-main-wrapper.${blockID}:hover {
                    ${FeatureBgHoverColor !== undefined ? `background-color: ${FeatureBgHoverColor};` : ''};
                    ${FeatureBorderHoverColor !== undefined ? `border-color: ${FeatureBorderHoverColor};` : ''};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:last-child) {
                    padding-bottom: calc(${FeatureListGapDesktop}${FeatureListGapUnits} / 2);
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:first-child) {
                    padding-top: calc(${FeatureListGapDesktop}${FeatureListGapUnits} / 2);
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon svg {
                    fill: ${FeatureIconColor};
                    height: ${FeatureIconSizeDesktop}${FeatureIconSizeUnits};
                    width: ${FeatureIconSizeDesktop}${FeatureIconSizeUnits};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon:hover svg {
                    fill: ${FeatureIconHoverColor};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box {
                    margin-right: ${FeatureIconSpacingDesktop}${FeatureIconSpacingUnits}!important;
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner {
                    background-color: ${FeatureIconBgColor};
                    border-color: ${FeatureIconBgColor};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-inner:hover {
                    background-color: ${FeatureIconBgHoverColor};
                    border-color: ${FeatureIconBgHoverColor};
                }

                .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon {
                    width: ${FeatureIconBgSizeDesktop}${FeatureIconBgSizeUnits};
                    height: ${FeatureIconBgSizeDesktop}${FeatureIconBgSizeUnits};
                }

                 .fb-feature-main-wrapper.${blockID} .fb-feature-list-content ${FeatureTag} {
                    font-family: ${FeatureTitleFontFamily};
                    font-size: ${FeatureTitleFontSizeDesktop}${FeatureTitleFontSizeUnits};
                    font-weight: ${FeatureTitleFontWeight};
                    font-style: ${FeatureTitleFontStyle};
                    text-transform: ${FeatureTitleTextTransform};
                    text-decoration: ${FeatureTitleTextDecoration};
                    letter-spacing: ${FeatureTitleLetterSpacingDesktop}${FeatureTitleLetterSpacingUnits};
                    line-height: ${FeatureTitleLineHeightDesktop}${FeatureTitleLineHeightUnits};
                    color: ${FeatureTitleColor};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-title:hover {
                    color: ${FeatureTitleHoverColor};
                }

                .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-text {
                    font-family: ${FeatureDescFontFamily};
                    font-size: ${FeatureDescFontSizeDesktop}${FeatureDescFontSizeUnits};
                    font-weight: ${FeatureDescFontWeight};
                    font-style: ${FeatureDescFontStyle};
                    text-transform: ${FeatureDescTextTransform};
                    text-decoration: ${FeatureDescTextDecoration};
                    letter-spacing: ${FeatureDescLetterSpacingDesktop}${FeatureDescLetterSpacingUnits};
                    line-height: ${FeatureDescLineHeightDesktop}${FeatureDescLineHeightUnits};
                    color: ${FeatureDescColor};
                }
                .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-text:hover {
                    color: ${FeatureDescHoverColor};
                }

                @media only screen and (max-width: 1024px) {

                    .fb-feature-main-wrapper.${blockID} {
                        padding: ${TabPadding};
                        margin: ${TabMargin};
                        border-width: ${TabBorderWidth};
                        border-radius: ${TabBorderRadiusWidth} !important;
                    }

                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:last-child) {
                        padding-bottom: calc(${FeatureListGapTablet}${FeatureListGapUnits} / 2);
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:first-child) {
                        padding-top: calc(${FeatureListGapTablet}${FeatureListGapUnits} / 2);
                    }

                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon svg {
                        height: ${FeatureIconSizeTablet}${FeatureIconSizeUnits};
                        width: ${FeatureIconSizeTablet}${FeatureIconSizeUnits};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon {
                        width: ${FeatureIconBgSizeTablet}${FeatureIconBgSizeUnits};
                        height: ${FeatureIconBgSizeTablet}${FeatureIconBgSizeUnits};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box {
                        margin-right: ${FeatureIconSpacingTablet}${FeatureIconSpacingUnits}!important;
                    }

                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-content ${FeatureTag} {
                        font-size: ${FeatureTitleFontSizeTablet}${FeatureTitleFontSizeUnits};
                        letter-spacing: ${FeatureTitleLetterSpacingTablet}${FeatureTitleLetterSpacingUnits};
                        line-height: ${FeatureTitleLineHeightTablet}${FeatureTitleLineHeightUnits};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-text {
                        font-size: ${FeatureDescFontSizeTablet}${FeatureDescFontSizeUnits};
                        letter-spacing: ${FeatureDescLetterSpacingTablet}${FeatureDescLetterSpacingUnits};
                        line-height: ${FeatureDescLineHeightTablet}${FeatureDescLineHeightUnits};
                    }
                }

                @media only screen and (max-width: 767px) {
                    .fb-feature-main-wrapper.${blockID} {
                        padding: ${MobilePadding};
                        margin: ${MobileMargin};
                        border-width: ${MobileBorderWidth};
                        border-radius: ${MobileBorderRadiusWidth} !important;
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:last-child) {
                        padding-bottom: calc(${FeatureListGapMobile}${FeatureListGapUnits} / 2);
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-item:not(:first-child) {
                        padding-top: calc(${FeatureListGapMobile}${FeatureListGapUnits} / 2);
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon svg {
                        height: ${FeatureIconSizeMobile}${FeatureIconSizeUnits};
                        width: ${FeatureIconSizeMobile}${FeatureIconSizeUnits};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon {
                        width: ${FeatureIconBgSizeMobile}${FeatureIconBgSizeUnits};
                        height: ${FeatureIconBgSizeMobile}${FeatureIconBgSizeUnits};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-icon-box {
                        margin-right: ${FeatureIconSpacingMobile}${FeatureIconSpacingUnits}!important;
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-content ${FeatureTag} {
                        font-size: ${FeatureTitleFontSizeMobile}${FeatureTitleFontSizeUnits};
                        letter-spacing: ${FeatureTitleLetterSpacingMobile}${FeatureTitleLetterSpacingUnits};
                        line-height: ${FeatureTitleLineHeightMobile}${FeatureTitleLineHeightUnits};
                    }
                    .fb-feature-main-wrapper.${blockID} .fb-feature-list-content .fb-feature-list-text {
                        font-size: ${FeatureDescFontSizeMobile}${FeatureDescFontSizeUnits};
                        letter-spacing: ${FeatureDescLetterSpacingMobile}${FeatureDescLetterSpacingUnits};
                        line-height: ${FeatureDescLineHeightMobile}${FeatureDescLineHeightUnits};
                    }
                }

            `}
            </style>

            <div {...blockProps}>
                <div className="fb-feature-wrapper">
                    <div className={`fb-feature-list-wrapper fb-feature-list-${FeatureAlignment} fb-icon-position-${FeatureIconAlignment} `}>
                        <ul className="fb-feature-list-items">
                            {FeatureItems.map(item => (
                                  
                                <li key={item.id} className="fb-feature-list-item">

                                    { item.FeatureIconAlign !== 'none' && (
                                        <div className="fb-feature-list-icon-box">
                                            <div className={`fb-feature-list-icon-inner ${FeatureIconShape}`}>
                                                <span className="fb-feature-list-icon">
                                                    {item.FeatureIcon ? renderSVG(item.FeatureIcon) : ''}
                                                </span>
                                            </div>
                                        </div>
                                    ) }
                                    
                                    <div className="fb-feature-list-content">
                                        <RichText.Content
                                            tagName={FeatureTag}
                                            className="fb-feature-list-title"
                                            value={item.Title}
                                        />
                                        <RichText.Content
                                            tagName="p"
                                            className="fb-feature-list-text"
                                            value={item.Description}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
        </>
    );
}

