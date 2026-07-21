import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {

    const {
        blockID,
        toggleImageUrl,
        toggleButtonIconPosition,
        toggleButtonUrl,
        toggleButtonTargetUrl,
        toggleButtonIcon,
        toggleButtonIconAlign,
        toggleButtonText,
        modalCloseIcon,

        position,
        toggleType,
        contentType,
        pageLoadDelay,
        pageLoadCookieEnable,
        pageLoadCookieExpiry,
        modalPopupGlobalWraperClass,
        modalPopupGlobalWraperID,
        modalPopupDesktopSwitcher,
        modalPopupTabletSwitcher,
        modalPopupMobileSwitcher,
        modalPopupOverlaySwitcher
    } = attributes;

    const modalPositionClass = `fb-advanced-modal-popup-${position}`;

    const blockProps = useBlockProps.save({
        className: `fb-advanced-modal-popup-block ${blockID} ${modalPopupDesktopSwitcher ? 'fb-desktop-responsive' : ''} ${modalPopupTabletSwitcher ? 'fb-tablet-responsive' : ''} ${modalPopupMobileSwitcher ? 'fb-mobile-responsive' : ''}`.trim()
    });

    const innerBlocksProps = useInnerBlocksProps.save({
        className: 'fb-advanced-modal-popup-inner',
    });

    const renderToggle = () => {
        switch (toggleType) {
            case 'button':
                return (
                    <a className={`fb-modal-toggle-btn fb-button-icon-${toggleButtonIconPosition}`}
                        href={toggleButtonUrl || '#'}
                        target={toggleButtonTargetUrl ? "_blank" : undefined}
                        rel={toggleButtonTargetUrl ? "noopener noreferrer" : undefined}
                    >
                        {toggleButtonIconPosition === 'left' && toggleButtonIconAlign === 'icon' && (
                            <div className="fb-button-icon">
                                {renderSVG(toggleButtonIcon)}
                            </div>
                        )}
                        <RichText.Content 
                            tagName="span" 
                            value={toggleButtonText}
                            className="fb-button-text"
                        />
                        {toggleButtonIconPosition === 'right' && toggleButtonIconAlign === 'icon' && (
                            <div className="fb-button-icon">
                                {renderSVG(toggleButtonIcon)} 
                            </div>
                        )}
                    </a>
                );
            case 'image': 
                return (
                    <div className="fb-modal-toggle-image">
                        <img src={toggleImageUrl} alt={attributes.toggleImageAlt} />
                    </div>
                );
            default:
                return <button className="fb-modal-toggle-btn">{__('Open Modal', 'frontis-blocks')}</button>;
        }
    };

    const renderContent = () => {
        switch (contentType) {
            case 'pattern':
            case 'custom':
                return <div {...innerBlocksProps} />;
            case 'image':
                return (
                    <div className="fb-modal-content-image">
                        <div {...innerBlocksProps} />
                    </div>
                );
            case 'video':
                return (
                    <div className="fb-modal-content-video">
                        <div {...innerBlocksProps} />
                    </div>
                );
            case 'map':
                return (
                    <div className="fb-modal-content-map">
                        <div {...innerBlocksProps} />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div {...blockProps}>
            <div
                className={`fb-advanced-modal-popup-container ${modalPopupGlobalWraperClass || ''}`.trim()}
                id={modalPopupGlobalWraperID}
                data-trigger-type={toggleType}
                data-page-load-delay={toggleType === 'page-load' ? pageLoadDelay : undefined}
                data-cookie-enable={toggleType === 'page-load' && pageLoadCookieEnable ? 'true' : undefined}
                data-cookie-expiry={toggleType === 'page-load' && pageLoadCookieEnable ? pageLoadCookieExpiry : undefined}
            >
                
                {/* Modal Trigger */}
                <div className="fb-advanced-modal-popup-trigger">
                    {renderToggle()}
                </div>

                {/* Modal Container */}
                <div className={`fb-advanced-modal-popup ${modalPositionClass}`}>
                    <div className="fb-modal-close-btn">
                        {renderSVG(modalCloseIcon)}
                    </div>
                    <div className="fb-modal-content-wrapper">
                        {renderContent()}
                    </div>
                </div>

                {/* Overlay */}
                {modalPopupOverlaySwitcher && (
                    <div className="fb-modal-overlay"></div>
                )}
            </div>
        </div>
    );
}