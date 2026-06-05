import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {

    const {
        blockID,
        selectedTemplate,
        position,
        toggleType,
        toggleText,
        toggleIcon,
        toggleImage,
        contentType,
        contentImage,
        contentVideoUrl,
        contentYoutubeUrl,
        contentVimeoUrl,
        contentMapUrl,
        modalPopupGlobalWraperClass,
        modalPopupGlobalWraperID,
        modalPopupDesktopSwitcher,
        modalPopupTabletSwitcher,
        modalPopupMobileSwitcher
    } = attributes;

    const modalPositionClass = `fb-advanced-modal-popup-${position}`;

    const blockProps = useBlockProps.save({
        className: `fb-advanced-modal-popup-block ${blockID} 
            ${modalPopupDesktopSwitcher ? 'fb-desktop-responsive' : ''} 
            ${modalPopupTabletSwitcher ? 'fb-tablet-responsive' : ''} 
            ${modalPopupMobileSwitcher ? 'fb-mobile-responsive' : ''}`
    });

    const innerBlocksProps = useInnerBlocksProps.save({
        className: 'fb-advanced-modal-popup-inner-blocks',
    });

    const renderToggle = () => {
        switch (toggleType) {
            case 'button':
                return <button className="fb-modal-toggle-btn">{toggleText}</button>;
            case 'icon':
                return (
                    <div className="fb-modal-toggle-icon">
                        {renderSVG(toggleIcon)}
                    </div>
                );
            case 'button-icon':
                return (
                    <button className="fb-modal-toggle-btn-icon">
                        {renderSVG(toggleIcon)}
                        <span>{toggleText}</span>
                    </button>
                );
            case 'image':
                const imageUrl = toggleImage?.Desktop || toggleImage?.Tablet || toggleImage?.Mobile;
                return (
                    <div className="fb-modal-toggle-image">
                        {imageUrl && <img src={imageUrl} alt="Modal Trigger" />}
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
                const imgUrl = contentImage?.Desktop || contentImage?.Tablet || contentImage?.Mobile;
                return imgUrl ? <img src={imgUrl} alt="Modal Content" className="fb-modal-content-img" /> : null;
            case 'video':
                return contentVideoUrl ? <video src={contentVideoUrl} controls className="fb-modal-content-video"></video> : null;
            case 'youtube':
                return contentYoutubeUrl ? <iframe src={contentYoutubeUrl} allowFullScreen className="fb-modal-content-iframe"></iframe> : null;
            case 'vimeo':
                return contentVimeoUrl ? <iframe src={contentVimeoUrl} allowFullScreen className="fb-modal-content-iframe"></iframe> : null;
            case 'map':
                return contentMapUrl ? (
                    <div className="fb-modal-content-map" dangerouslySetInnerHTML={{ __html: contentMapUrl }}></div>
                ) : null;
            default:
                return null;
        }
    };

    return (
        <div {...blockProps}>
            {/* Main Wrapper */}
            <div
                className={`fb-advanced-modal-popup-container ${modalPopupGlobalWraperClass}`}
                id={modalPopupGlobalWraperID}
            >
                {/* Modal Trigger */}
                <div className="fb-advanced-modal-popup-trigger js-fb-modal-trigger">
                    {renderToggle()}
                </div>

                {/* Off-Canvas Menu */}
                <div className={`fb-advanced-modal-popup js-fb-modal-popup ${modalPositionClass}`}>
                    <div className="fb-modal-close-btn js-fb-modal-close-btn">
                        &times;
                    </div>
                    <div className="fb-modal-content-wrapper">
                        {renderContent()}
                    </div>
                </div>

                {/* Overlay */}
                <div className="fb-modal-overlay js-fb-modal-overlay"></div>

            </div>

        </div>
    );
}