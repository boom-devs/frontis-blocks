import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useRef } from '@wordpress/element';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import Inspector from "./inspector";
import './editor.scss';
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings';

export default function Edit({ attributes, setAttributes, clientId }) {
    const { 
        blockID,
        socialItems,
        socialTitleSwitcher,
        socialIconUrl,
        socialIconTargetUrl,

        socialGlobalWraperID,
        socialGlobalWraperClass,

     } = attributes;

    const blockProps = useBlockProps({
        className: `fb-social-main-wrapper ${blockID}`,
    });

    const handleSocialClick = (event) => {
        event.preventDefault();
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
            
            <div {...blockProps}>
                <div className={`fb-parent-wrapper fb-social-wrapper ${socialGlobalWraperClass}`} id={socialGlobalWraperID} ref={panelRef}>
                    <div className="fb-social-links-wrapper">
                        <ul className="fb-socials">
                            {socialItems.map(item => (
                                <li key={item.id} className={`fb-social-list-item single-item-${item.id}`}>
                                    <a
                                        className="fb-social-icon-link" 
                                        href={item.socialIconUrl} 
                                        target={item.socialIconTargetUrl ? '_blank' : undefined}
                                        rel={item.socialIconTargetUrl ? 'noopener noreferrer' : undefined}
                                        onClick={handleSocialClick}
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