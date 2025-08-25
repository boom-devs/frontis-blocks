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

export default [v1_0_3];