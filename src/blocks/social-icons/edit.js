import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useRef, lazy, Suspense } from '@wordpress/element';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
const Inspector = lazy(() => import('./inspector'));
import './editor.scss';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        blockStyle,
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

    const blockProps = useBlockProps({
        className: `fb-social-main-wrapper ${blockID} ${socialIconsDesktopSwitcher && 'fb-desktop-responsive'} ${socialIconsTabletSwitcher && 'fb-tablet-responsive'} ${socialIconsMobileSwitcher && 'fb-mobile-responsive'}`,
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
            <Suspense fallback={null}>
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                    clientId={clientId}
                />
            </Suspense>

            <div {...blockProps}>
                <div className={`fb-parent-wrapper fb-social-wrapper ${socialGlobalWraperClass}`} id={socialGlobalWraperID} ref={panelRef}>
                    <div className="fb-social-links-wrapper">
                        <ul className="fb-socials" aria-label={__("Social Icons", "frontis-blocks")}>
                            {socialItems.map(item => (
                                <li key={item.id} className={`fb-social-list-item single-item-${item.id}`}>
                                    <a
                                        className="fb-social-icon-link"
                                        href={item.socialIconUrl}
                                        target={item.socialIconTargetUrl ? '_blank' : undefined}
                                        rel={item.socialIconTargetUrl ? 'noopener noreferrer' : undefined}
                                        onClick={handleSocialClick}
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
            <style>{blockStyle}</style>
        </>
    );
}