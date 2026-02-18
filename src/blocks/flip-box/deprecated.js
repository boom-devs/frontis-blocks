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
            headingTag,
            Sub_Heading_Switcher,
            Sub_Heading_Text,
            info_Button_Switcher,
            info_Button_Text,
            icon,
            mediaSwitcher,
            Sub_Heading_Tag,
            buttonIconSwitcher,
            btnIcon,
            infobtnTargetUrl,
            infoButtonLink,
            infoBoxGlobalWraperID,
            infoBoxGlobalWraperClass,
            infoBoxDesktopSwitcher,
            infoBoxTabletSwitcher,
            infoBoxMobileSwitcher,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-info-box-main-wrapper ${blockID} ${infoBoxDesktopSwitcher && 'fb-desktop-responsive'} ${infoBoxTabletSwitcher && 'fb-tablet-responsive'} ${infoBoxMobileSwitcher && 'fb-mobile-responsive'}`,
        });

        return (
            <>
                <div {...blockProps}>
                    <div className={`fb-parent-wrapper fb-info-box-wrapper ${blockID} ${infoBoxGlobalWraperClass}`} id={infoBoxGlobalWraperID}>
                        <div className={`fb-info-box-wrapper-inner ${blockID}`}>
                            <div className="fb-info-media-container">
                                <div className="fb-info-media-wrapper">
                                    {mediaSwitcher === "image" && (
                                        <img
                                            src={attributes.infoMediaUrl}
                                            alt={attributes.infoMediaAlt || ""}
                                        />
                                    )}
                                    {mediaSwitcher === "icon" && (
                                        <div className="fb-icon-wrapper">{renderSVG(icon)}</div>
                                    )}
                                </div>
                            </div>
                            <div className="fb-info-box-content-wrapper">
                                <RichText.Content
                                    tagName={headingTag}
                                    value={Heading_Text}
                                    className="fb-heading"
                                />

                                {Sub_Heading_Switcher && (
                                    <RichText.Content
                                        tagName={Sub_Heading_Tag}
                                        value={Sub_Heading_Text}
                                        className="fb-description"
                                    />
                                )}

                                {info_Button_Switcher && (
                                    <div className="fb-info-button">
                                    <div className="fb-info-btn-container">
                                        <a
                                            href={infoButtonLink} 
                                            target={infobtnTargetUrl ? '_blank' : undefined}
                                            rel={infobtnTargetUrl ? 'noopener noreferrer' : undefined}
                                            className="fb-info-btn-wrapper"
                                        >
                                            <RichText.Content
                                                value={info_Button_Text}
                                                tagName={"span"}
                                                className="fb-info-button"
                                            />
                                            
                                            {buttonIconSwitcher && (
                                                <div className="fb-btn-icon-wrapper">
                                                    {renderSVG(btnIcon)}
                                                </div>
                                            )}
                                        </a>
                                    </div>
                                    </div>
                                )}
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
            flipBoxGlobalWraperClass,
            flipBoxGlobalWraperID,
            flipMediaUrl,
            mediaSwitcher,
            icon,
            Heading_Text,
            headingTag,
            descSwitcher,
            titleSwitcher,
            Sub_Heading_Tag,
            Sub_Heading_Text,
            flip_Button_Switcher,
            flip_Button_Text,
            flipButtonLink,
            flipbtnTargetUrl,
            buttonIconSwitcher,
            btnIcon,
            flipBackMediaUrl,
            mediaSwitcherBack,
            iconBack,
            headingTextBack,
            headingTagBack,
            descSwitcherBack,
            titleSwitcherBack,
            flipBackContent,
            flipBackContentTag,
            flipBack_Button_Switcher,
            flipBack_Button_Text,
            flipBackButtonLink,
            flipBackbtnTargetUrl,
            flipAnimationType,
            flipBoxDesktopSwitcher,
            flipBoxTabletSwitcher,
            flipBoxMobileSwitcher,
            buttonIconSwitcherBack,
            btnIconBack
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-flip-box-main-wrapper ${blockID} ${flipBoxDesktopSwitcher && 'fb-desktop-responsive'} ${flipBoxTabletSwitcher && 'fb-tablet-responsive'} ${flipBoxMobileSwitcher && 'fb-mobile-responsive'}`,
        });

        return (
            <>
                <div {...blockProps}>
                    <div className={`fb-parent-wrapper fb-flip-box-wrapper ${blockID} ${flipBoxGlobalWraperClass}`} id={flipBoxGlobalWraperID}>
                        <div className={`fb-flipper-wrapper ${flipAnimationType}`}>
                            {/* Front Side */}
                            <div className="fb-flipbox-front">
                                <div className="fb-flipbox-content-wrapper">

                                    {(mediaSwitcher === "image" && flipMediaUrl) ||
                                    (mediaSwitcher === "icon" && icon) ? (
                                        <div className="fb-flip-media-container">
                                            <div className="fb-flip-media-wrapper">
                                                {mediaSwitcher === "image" && flipMediaUrl && (
                                                    <img src={flipMediaUrl} alt="Front media" />
                                                )}
                                                {mediaSwitcher === "icon" && icon && (
                                                    <div className="fb-icon-wrapper">{renderSVG(icon)}</div>
                                                )}
                                            </div>
                                        </div>
                                    ): null}
                                    
                                    {(titleSwitcher && Heading_Text) ||
                                    (descSwitcher && Sub_Heading_Text) ||
                                    (flip_Button_Switcher && flip_Button_Text) ? (
                                        <div className="fb-flip-box-content-wrapper">

                                            {titleSwitcher && Heading_Text && (
                                                <RichText.Content tagName={headingTag} value={Heading_Text} className="fb-heading" />
                                            )}

                                            {descSwitcher && Sub_Heading_Text && (
                                                <RichText.Content tagName={Sub_Heading_Tag} value={Sub_Heading_Text} className="fb-description" />
                                            )}

                                            {flip_Button_Switcher && flip_Button_Text && (
                                                <div className="fb-flip-button">
                                                    <div className="fb-flip-btn-container">
                                                        <a
                                                            className="fb-flip-btn-wrapper"
                                                            href={flipButtonLink || '#'}
                                                            target={flipbtnTargetUrl ? '_blank' : undefined}
                                                            rel={flipbtnTargetUrl ? 'noopener noreferrer' : undefined}
                                                        >
                                                            <RichText.Content tagName="span" value={flip_Button_Text} />
                                                            {buttonIconSwitcher && (
                                                                <div className="fb-btn-icon-wrapper">
                                                                    {renderSVG(btnIcon)}
                                                                </div>
                                                            )}
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>								
                                    ): null}
                                    
                                </div>
                            </div>

                            {/* Back Side */}
                            <div className="fb-flipbox-back">
                                <div className="fb-flipbox-content-wrapper">

                                    {(mediaSwitcherBack === "image" && flipBackMediaUrl) ||
                                    (mediaSwitcherBack === "icon" && iconBack) ? (
                                        <div className="fb-flip-back-media-container">
                                            <div className="fb-flip-back-media-wrapper">
                                                {mediaSwitcherBack === "image" && flipBackMediaUrl && (
                                                    <img src={flipBackMediaUrl} alt="Back media" />
                                                )}
                                                {mediaSwitcherBack === "icon" && iconBack && (
                                                    <div className="fb-icon-wrapper">{renderSVG(iconBack)}</div>
                                                )}
                                            </div>
                                        </div>
                                    ) : null}
                                    
                                    {(titleSwitcherBack && Heading_Text) ||
                                    (descSwitcherBack && Sub_Heading_Text) ||
                                    (flipBack_Button_Switcher && flip_Button_Text) ? (
                                        <div className="fb-flip-back-box-content-wrapper">
                                            { titleSwitcherBack && headingTextBack && (
                                                <RichText.Content tagName={headingTagBack} value={headingTextBack} className="fb-heading" />
                                            )}
                                            {descSwitcherBack && flipBackContent && (
                                                <RichText.Content tagName={flipBackContentTag} value={flipBackContent} className="fb-description" />
                                            )}
                                            {flipBack_Button_Switcher && flipBack_Button_Text && (
                                                <div className="fb-flip-back-button">
                                                    <div className="fb-flip-back-btn-container">
                                                        <a
                                                            className="fb-flip-back-btn-wrapper"
                                                            href={flipBackButtonLink || '#'}
                                                            target={flipBackbtnTargetUrl ? '_blank' : undefined}
                                                            rel={flipBackbtnTargetUrl ? 'noopener noreferrer' : undefined}
                                                        >
                                                            <RichText.Content tagName="span" value={flipBack_Button_Text} />
                                                            {buttonIconSwitcherBack && (
                                                                <div className="fb-btn-icon-wrapper">
                                                                    {renderSVG(btnIconBack)}
                                                                </div>
                                                            )}
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ) : null}
                                    
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