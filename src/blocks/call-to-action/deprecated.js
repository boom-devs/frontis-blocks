import { __ } from "@wordpress/i18n";
import { useBlockProps, RichText } from "@wordpress/block-editor";
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";
import attributes from './attributes.js';

const v1_0_3 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const {
            blockID,
            Heading_Text,
            Alignment,
            Sub_Heading_Text,
            descriptionSwitcher,
            Sub_Heading_Tag,
            descAlignment,
            buttonAlignment,
            info_Button_Link,
            info_Button_Text,
            btnIconPosition,
            buttonIconSwitcher,
            btnIcon,
            btnTwoSwitcher,
            btnTwoLink,
            btnTwoText,
            btnTwoIconPosition,
            buttonTwoIconSwitcher,
            btnTwoIcon,
            btnOneTargetUrl,
            btnTwoTargetUrl,
            ctaBtnOneSwitcher,
    
            ctaGlobalWraperID,
            ctaGlobalWraperClass,
    
            ctaDesktopSwitcher,
            ctaTabletSwitcher,
            ctaMobileSwitcher,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-cta-main-wrapper ${blockID} ${ctaDesktopSwitcher && 'fb-desktop-responsive'} ${ctaTabletSwitcher && 'fb-tablet-responsive'} ${ctaMobileSwitcher && 'fb-mobile-responsive'}`,
        });

        return (
            <>
                <div {...blockProps}>
                    <div className={`fb-parent-wrapper fb-cta-content-wrapper ${blockID} ${ctaGlobalWraperClass}`} id={ctaGlobalWraperID}>
                        <div className={`fb-cta-content-wrapper-inner ${blockID}`}>
                            <div className="fb-cta-content-wrapper">
                                <RichText.Content
                                    tagName="h2"
                                    value={Heading_Text}
                                    placeholder={__("CTA Title", "frontis-block")}
                                    className="fb-heading"
                                    style={{ textAlign: Alignment }}
                                />
                                {descriptionSwitcher && (
                                    <RichText.Content
                                        tagName={Sub_Heading_Tag}
                                        value={Sub_Heading_Text}
                                        placeholder={__("CTA Description", "frontis-block")}
                                        className="fb-description"
                                        style={{ textAlign: descAlignment }}
                                    />
                                )}
                                <div
                                    className="fb-cta-buttons-wrapper"
                                    style={{ justifyContent: buttonAlignment }}
                                >
                                    {ctaBtnOneSwitcher && (
                                        <div className="fb-cta-btn-one-wrapper">
                                            <div
                                                className="fb-cta-btn-wrapper"
                                                style={{
                                                    flexDirection:
                                                        btnIconPosition === "left" ? "row-reverse" : "row",
                                                }}
                                            >
                                                <a
                                                    className="fb-cta-button"
                                                    href={info_Button_Link}
                                                    target={btnOneTargetUrl ? "_blank" : undefined}
                                                    rel={btnOneTargetUrl ? "noopener noreferrer" : undefined}
                                                >
                                                    <RichText.Content
                                                        tagName="span"
                                                        value={info_Button_Text}
                                                        placeholder={__("CTA Button", "frontis-block")}
                                                    />
                                                </a>
                                                {buttonIconSwitcher && (
                                                    <div className="fb-btn-icon-wrapper">
                                                        {renderSVG(btnIcon)}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {btnTwoSwitcher && (
                                        <div className="fb-cta-btn-two-wrapper">
                                            <div
                                                className="fb-cta-btn-wrapper"
                                                style={{
                                                    flexDirection:
                                                        btnTwoIconPosition === "left" ? "row-reverse" : "row",
                                                }}
                                            >
                                                <a
                                                    className="fb-cta-button"
                                                    href={btnTwoLink}
                                                    target={btnTwoTargetUrl ? "_blank" : undefined}
                                                    rel={btnTwoTargetUrl ? "noopener noreferrer" : undefined}
                                                >
                                                    <RichText.Content
                                                        tagName="span"
                                                        value={btnTwoText}
                                                        placeholder={__("CTA Button", "frontis-block")}
                                                    />
                                                </a>
                                                {buttonTwoIconSwitcher && (
                                                    <div className="fb-btn-icon-wrapper">
                                                        {renderSVG(btnTwoIcon)}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
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

const v1_1_8 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
       const {
            blockID,
            Heading_Text,
            headingTag,
            Alignment,
            Sub_Heading_Text,
            descriptionSwitcher,
            Sub_Heading_Tag,
            descAlignment,
            buttonAlignment,
            info_Button_Link,
            info_Button_Text,
            btnIconPosition,
            buttonIconSwitcher,
            btnIcon,
            btnTwoSwitcher,
            btnTwoLink,
            btnTwoText,
            btnTwoIconPosition,
            buttonTwoIconSwitcher,
            btnTwoIcon,
            btnOneTargetUrl,
            btnTwoTargetUrl,
            ctaBtnOneSwitcher,
       
            ctaGlobalWraperID,
            ctaGlobalWraperClass,
       
            ctaDesktopSwitcher,
            ctaTabletSwitcher,
            ctaMobileSwitcher,
        } = attributes;
       
        const blockProps = useBlockProps.save({
            className: `fb-cta-main-wrapper ${blockID} ${ctaDesktopSwitcher && 'fb-desktop-responsive'} ${ctaTabletSwitcher && 'fb-tablet-responsive'} ${ctaMobileSwitcher && 'fb-mobile-responsive'}`,
        });
       
        return (
            <>
                <div {...blockProps}>
                    <div className={`fb-parent-wrapper fb-cta-content-wrapper ${blockID} ${ctaGlobalWraperClass}`} id={ctaGlobalWraperID}>
                        <div className={`fb-cta-content-wrapper-inner ${blockID}`}>
                            <div className="fb-cta-content-wrapper">
                                <RichText.Content
                                    tagName={headingTag}
                                    value={Heading_Text}
                                    placeholder={__("CTA Title", "frontis-block")}
                                    className="fb-heading"
                                    style={{ textAlign: Alignment }}
                                />
                                {descriptionSwitcher && (
                                    <RichText.Content
                                        tagName={Sub_Heading_Tag}
                                        value={Sub_Heading_Text}
                                        placeholder={__("CTA Description", "frontis-block")}
                                        className="fb-description"
                                        style={{ textAlign: descAlignment }}
                                    />
                                )}
                                <div
                                    className="fb-cta-buttons-wrapper"
                                    style={{ justifyContent: buttonAlignment }}
                                >
                                    {ctaBtnOneSwitcher && (
                                        <div className="fb-cta-btn-one-wrapper">
                                            <div className="fb-cta-btn-wrapper">
                                                <a
                                                    className="fb-cta-button"
                                                    href={info_Button_Link}
                                                    target={btnOneTargetUrl ? "_blank" : undefined}
                                                    rel={btnOneTargetUrl ? "noopener noreferrer" : undefined}
                                                    style={{flexDirection: btnIconPosition === "left" ? "row-reverse" : "row",}}
                                                >
                                                    <RichText.Content
                                                        tagName="span"
                                                        value={info_Button_Text}
                                                        placeholder={__("CTA Button", "frontis-block")}
                                                    />
                                                </a>
                                                {buttonIconSwitcher && (
                                                    <div className="fb-btn-icon-wrapper">
                                                        {renderSVG(btnIcon)}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {btnTwoSwitcher && (
                                        <div className="fb-cta-btn-two-wrapper">
                                            <div className="fb-cta-btn-wrapper">
                                                <a
                                                    className="fb-cta-button"
                                                    href={btnTwoLink}
                                                    target={btnTwoTargetUrl ? "_blank" : undefined}
                                                    rel={btnTwoTargetUrl ? "noopener noreferrer" : undefined}
                                                    style={{flexDirection: btnTwoIconPosition === "left" ? "row-reverse" : "row",}}
                                                >
                                                    <RichText.Content
                                                        tagName="span"
                                                        value={btnTwoText}
                                                        placeholder={__("CTA Button", "frontis-block")}
                                                    />
                                                </a>
                                                {buttonTwoIconSwitcher && (
                                                    <div className="fb-btn-icon-wrapper">
                                                        {renderSVG(btnTwoIcon)}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
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

export default [v1_0_3, v1_1_8];