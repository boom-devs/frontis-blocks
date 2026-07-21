import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { useRef, useEffect } from '@wordpress/element';
import loadGoogleFont from '@Utils/loadGoogleFont';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import Inspector from './inspector';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generateSocialStyle from './styling';
import './editor.scss';

const loadedFonts = new Set();

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
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

        socialTitleFontFamily,
    } = attributes;

    // Handle block ID generation (handles duplication and initial ID)
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-social-icons',
        isSelected,
        attributes,
        setAttributes,
    });

    /** Start load font */
    useEffect(() => {
        [socialTitleFontFamily].forEach(font => {
            if (font && !loadedFonts.has(font)) {
                loadGoogleFont(font);
                loadedFonts.add(font);
            }
        });
    }, [socialTitleFontFamily]);
    /** End load font */

     /** Start Generate Block Style */
    useEffect(() => {
        if (blockID) {
            const css = generateSocialStyle(attributes);
            if (blockStyle !== css) {
                setAttributes({ blockStyle: css });
            }
        }
    }, [attributes, blockID]);
    /** End Generate Block Style */

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
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}

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