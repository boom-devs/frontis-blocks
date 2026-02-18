import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
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
            socialItems,
            socialTitleSwitcher,
            socialIconUrl,
            socialIconTargetUrl,
    
            socialGlobalWraperID,
            socialGlobalWraperClass,
    
            socialIconsDesktopSwitcher,
            socialIconsTabletSwitcher,
            socialIconsMobileSwitcher,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `fb-social-main-wrapper ${blockID} ${socialIconsDesktopSwitcher && 'fb-desktop-responsive'} ${socialIconsTabletSwitcher && 'fb-tablet-responsive'} ${socialIconsMobileSwitcher && 'fb-mobile-responsive'}`,
        });    

        return (
            <>
                <div {...blockProps}>
                    <div className={`fb-parent-wrapper fb-social-wrapper ${socialGlobalWraperClass}`} id={socialGlobalWraperID}>
                        <div className="fb-social-links-wrapper">
                            <ul className="fb-socials">
                                {socialItems.map(item => (
                                    <li key={item.id} className={`fb-social-list-item single-item-${item.id}`}>
                                        <a
                                            className="fb-social-icon-link" 
                                            href={item.socialIconUrl} 
                                            target={item.socialIconTargetUrl ? '_blank' : undefined}
                                            rel={item.socialIconTargetUrl ? 'noopener noreferrer' : undefined}
                                        >
                                            <div className="fb-social-icon-wrapper">
                                                <div className="fb-social-icon">
                                                    {item.socialIcon ? renderSVG(item.socialIcon) : ''}
                                                </div>
                                                {socialTitleSwitcher && (
                                                    <span className="fb-social-icon-title">{item.socialIconTitle}</span>
                                                )}
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
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
            socialItems,
            socialTitleSwitcher,
            socialIconUrl,
            socialIconTargetUrl,
    
            socialGlobalWraperID,
            socialGlobalWraperClass,
    
            socialIconsDesktopSwitcher,
            socialIconsTabletSwitcher,
            socialIconsMobileSwitcher,
        } = attributes;
    
        const blockProps = useBlockProps.save({
            className: `fb-social-main-wrapper ${blockID} ${socialIconsDesktopSwitcher && 'fb-desktop-responsive'} ${socialIconsTabletSwitcher && 'fb-tablet-responsive'} ${socialIconsMobileSwitcher && 'fb-mobile-responsive'}`,
        });
        
        return (
            <>
                <div {...blockProps}>
                    <div className={`fb-parent-wrapper fb-social-wrapper ${socialGlobalWraperClass}`} id={socialGlobalWraperID}>
                        <div className="fb-social-links-wrapper">
                            <ul className="fb-socials" aria-label={__("Social Icons", "frontis-blocks")}>
                                {socialItems.map(item => (
                                    <li key={item.id} className={`fb-social-list-item single-item-${item.id}`}>
                                        <a
                                            className="fb-social-icon-link" 
                                            href={item.socialIconUrl} 
                                            target={item.socialIconTargetUrl ? '_blank' : undefined}
                                            rel={item.socialIconTargetUrl ? 'noopener noreferrer' : undefined}
                                            aria-label={__("Social Icon", "frontis-blocks")}
                                        >
                                            <div className="fb-social-icon-wrapper">
                                                <div className="fb-social-icon" aria-hidden="true">
                                                    {item.socialIcon ? renderSVG(item.socialIcon) : ''}
                                                </div>
                                                {socialTitleSwitcher && (
                                                    <span className="fb-social-icon-title" aria-hidden="true">{item.socialIconTitle}</span>
                                                )}
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    },
};

export default [v1_0_3, v1_1_8];