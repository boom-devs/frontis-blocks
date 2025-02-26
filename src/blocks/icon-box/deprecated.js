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
    
            icon_Box_Button_Switcher,
            icon_Box_Button_Text,
            
            icon,
            mediaSwitcher,
            
            Sub_Heading_Tag,
            buttonIconSwitcher,
            btnIcon,
            iconBoxbtnTargetUrl,
            iconBoxButtonLink,
    
            wrapperLink,
            wrapperTargetUrl,
            wrapperUrlSwitcher,
    
            iconBoxGlobalWraperID,
            iconBoxGlobalWraperClass,
    
            iconBoxDesktopSwitcher,
            iconBoxTabletSwitcher,
            iconBoxMobileSwitcher,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-icon-box-main-wrapper ${blockID} ${iconBoxDesktopSwitcher && 'fb-desktop-responsive'} ${iconBoxTabletSwitcher && 'fb-tablet-responsive'} ${iconBoxMobileSwitcher && 'fb-mobile-responsive'}`,
        });

        return (
            <>
                <div {...blockProps}> 
                    {wrapperUrlSwitcher ? (
                        <a
                            href={wrapperLink}
                            target={wrapperTargetUrl ? "_blank" : undefined}
                            rel={wrapperTargetUrl ? "noopener noreferrer" : undefined}
                        >
                            <div className={`fb-parent-wrapper fb-icon-box-wrapper ${iconBoxGlobalWraperClass} ${blockID} `} id={iconBoxGlobalWraperID}>
                                <div className={`fb-icon-box-wrapper-inner ${blockID}`}>
                                    <div className="fb-icon-media-container">
                                        <div className="fb-icon-media-wrapper">
                                            {mediaSwitcher === "image" && (
                                                <img
                                                    src={attributes.iconBoxMediaUrl}
                                                    alt={attributes.iconBoxMediaAlt || ""}
                                                />
                                            )}
                                            {mediaSwitcher === "icon" && (
                                                <div className="fb-icon-wrapper">{renderSVG(icon)}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="fb-icon-box-content-wrapper">
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

                                        {icon_Box_Button_Switcher && (
                                            <div className="fb-icon-button">
                                            <div className="fb-icon-btn-container">
                                                <a
                                                    href={iconBoxButtonLink} 
                                                    target={iconBoxbtnTargetUrl ? '_blank' : undefined}
                                                    rel={iconBoxbtnTargetUrl ? 'noopener noreferrer' : undefined}
                                                    className="fb-icon-btn-wrapper"
                                                >
                                                    <RichText.Content
                                                        value={icon_Box_Button_Text}
                                                        tagName={"span"}
                                                        className="fb-icon-button"
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
                        </a>
                        ) : (
                            <div className={`fb-parent-wrapper fb-icon-box-wrapper ${blockID} ${iconBoxGlobalWraperClass}`} id={iconBoxGlobalWraperID}>
                                <div className={`fb-icon-box-wrapper-inner ${blockID}`}>
                                    <div className="fb-icon-media-container">
                                        <div className="fb-icon-media-wrapper">
                                            {mediaSwitcher === "image" && (
                                                <img
                                                    src={attributes.iconBoxMediaUrl}
                                                    alt={attributes.iconBoxMediaAlt || ""}
                                                />
                                            )}
                                            {mediaSwitcher === "icon" && (
                                                <div className="fb-icon-wrapper">{renderSVG(icon)}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="fb-icon-box-content-wrapper">
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

                                        {icon_Box_Button_Switcher && (
                                            <div className="fb-icon-button">
                                            <div className="fb-icon-btn-container">
                                                <a
                                                    href={iconBoxButtonLink} 
                                                    target={iconBoxbtnTargetUrl ? '_blank' : undefined}
                                                    rel={iconBoxbtnTargetUrl ? 'noopener noreferrer' : undefined}
                                                    className="fb-icon-btn-wrapper"
                                                >
                                                    <RichText.Content
                                                        value={icon_Box_Button_Text}
                                                        tagName={"span"}
                                                        className="fb-icon-button"
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
                    )}
                </div>
            </>
        );
    },
};

export default [v1_0_3];