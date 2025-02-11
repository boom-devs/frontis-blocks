import { useBlockProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockID,
        socialItems,
        socialTitleSwitcher,
        socialIconUrl,
        socialIconTargetUrl,

        socialGlobalWraperID,
        socialGlobalWraperClass,

    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-social-main-wrapper ${blockID} ${socialGlobalWraperClass}`,
    });
    
    return (
        <>
            <div {...blockProps}>
                <div className={`fb-parent-wrapper fb-social-wrapper ${blockID}`} id={socialGlobalWraperID}>
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
}