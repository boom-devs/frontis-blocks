import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
} from '@wordpress/block-editor';
import { useEffect, useState, useMemo } from '@wordpress/element';
import Inspector from './inspector';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        blockStyle,
        socialMediaType,
        displayStyle,
        alignment,
        icon,
        iconSize,
        iconSpacing,
        socialShareChildDesktopSwitcher,
        socialShareChildTabletSwitcher,
        socialShareChildMobileSwitcher,
        socialShareChildGlobalWraperClass,
        socialShareChildGlobalWraperID
    } = attributes;

    // Function to get SVG string for different networks
    const getIconSvg = (networkId) => {
        switch (networkId) {
            case 'facebook':
                return '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="currentColor"/></svg>';
            case 'twitter':
                return '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" fill="currentColor"/></svg>';
            case 'linkedin':
                return '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/></svg>';
            case 'pinterest':
                return '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" fill="currentColor" /></svg>';
            case 'reddit':
                return '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" fill="currentColor"/></svg>';
            case 'whatsapp':
                return '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32"><path d="M16.004 2.98a13.003 13.003 0 00-11.277 19.5l-1.38 5.04a1 1 0 001.212 1.212l5.04-1.38A13.003 13.003 0 1016.004 2.98zm0 2a11 11 0 110 22 10.96 10.96 0 01-5.56-1.54l-.39-.23-2.97.81.81-2.97-.23-.39A10.96 10.96 0 0116.004 4.98zm-4.32 7.69c-.24-.54-.5-.56-.73-.57h-.62c-.21 0-.55.08-.83.39-.28.31-1.09 1.07-1.09 2.61 0 1.54 1.12 3.03 1.28 3.24.16.21 2.15 3.44 5.28 4.68 2.61 1.03 3.14.82 3.7.77.56-.05 1.83-.75 2.09-1.48.26-.73.26-1.35.18-1.48-.08-.13-.3-.21-.62-.36-.32-.15-1.83-.9-2.12-1-.28-.1-.48-.15-.69.15-.21.3-.8 1-1 1.2-.18.2-.38.22-.7.08-.32-.15-1.36-.5-2.6-1.58-.96-.85-1.61-1.91-1.8-2.23-.19-.32-.02-.5.14-.65.14-.14.32-.37.48-.55.16-.18.21-.3.32-.5.1-.21.05-.39-.02-.54-.07-.16-.69-1.65-.95-2.25z"/></svg>';
            default:
                return null;
        }
    };

    // Get network label based on type
    const getNetworkLabel = (type) => {
        switch (type) {
            case 'facebook': return 'Facebook';
            case 'twitter': return 'Twitter';
            case 'linkedin': return 'LinkedIn';
            case 'pinterest': return 'Pinterest';
            case 'reddit': return 'Reddit';
            case 'whatsapp': return 'WhatsApp';
            default: return '';
        }
    };


    useEffect(() => {
        const updates = {};

        if (!blockID) {
            updates.blockID = "fb-social-share-child" + clientId.slice(0, 8);
        }

        if (!socialMediaType) {
            updates.socialMediaType = 'facebook';
        }

        if (!displayStyle) {
            updates.displayStyle = 'icon';
        }

        if (!alignment) {
            updates.alignment = 'left';
        }

        if (!iconSize) {
            updates.iconSize = 24;
        }

        if (!iconSpacing) {
            updates.iconSpacing = 10;
        }

        // Only update if there are changes
        if (Object.keys(updates).length > 0) {
            setAttributes(updates);
        }
    }, [clientId, blockID, socialMediaType, displayStyle, alignment, iconSize, iconSpacing, setAttributes]);

    const blockProps = useBlockProps({
        className: `fb-social-share-child ${blockID} ${socialShareChildDesktopSwitcher && 'fb-desktop-responsive'} ${socialShareChildTabletSwitcher && 'fb-tablet-responsive'} ${socialShareChildMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    return (
        <div {...blockProps}>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            <div className={`social-share-child-container ${socialShareChildGlobalWraperClass}`} id={socialShareChildGlobalWraperID} style={{ textAlign: alignment }}>
                {socialMediaType && (
                    <a
                        className={`social-share-button ${socialMediaType}`}
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        aria-label={`Share on ${getNetworkLabel(socialMediaType)}`}
                    >
                        {(displayStyle === 'icon' || displayStyle === 'icon-text') &&
                            <span className="social-share-icon">
                                {icon ? (
                                    <span className="custom-icon">{renderSVG(icon)}</span>
                                ) : (
                                    <span
                                        className="custom-icon"
                                        dangerouslySetInnerHTML={{ __html: getIconSvg(socialMediaType) }}
                                    />
                                )}
                            </span>
                        }

                        {(displayStyle === 'text' || displayStyle === 'icon-text') &&
                            <span className="social-share-label">{getNetworkLabel(socialMediaType)}</span>
                        }
                    </a>
                )}
            </div>
            <style>{blockStyle}</style>
        </div>
    );
}