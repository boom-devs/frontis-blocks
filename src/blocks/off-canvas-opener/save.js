import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {

    const {
        blockID,
        selectedTemplate,
        menuPosition,
        menuType,
        hamburgerIcon,
        hamburgerText,
        closeMenuType,
        closeMenuIcon,
        closeMenuText,
        offCanvasGlobalWraperClass,
        offCanvasGlobalWraperID,
        offCanvasDesktopSwitcher,
        offCanvasTabletSwitcher,
        offCanvasMobileSwitcher
    } = attributes;

    const menuPositionClass = `fb-off-canvas-menu-${menuPosition}`;

    const getIcon = () => {
        if (!hamburgerIcon) return null;
        return (
            <div className="fb-menu-icon">
                {renderSVG(hamburgerIcon)}
            </div>
        );
    };

    const getText = () => {
        if (!hamburgerText) return null;
        return (
            <span className="fb-menu-text">{hamburgerText}</span>
        );
    };

    const blockProps = useBlockProps.save({
        className: `fb-off-canvas-menu-block ${blockID} 
            ${offCanvasDesktopSwitcher ? 'fb-desktop-responsive' : ''} 
            ${offCanvasTabletSwitcher ? 'fb-tablet-responsive' : ''} 
            ${offCanvasMobileSwitcher ? 'fb-mobile-responsive' : ''}`
    });

    const innerBlocksProps = useInnerBlocksProps.save({
        className: 'fb-off-canvas-content',
    });

    return (
        <div {...blockProps}>

            {/* Main Wrapper (matches edit.js) */}
            <div
                className={`fb-off-canvas-menu-container ${offCanvasGlobalWraperClass}`}
                id={offCanvasGlobalWraperID}
            >

                {/* Toggle Button */}
                <div
                    className="fb-menu-toggle-btn"
                    role="button"
                    tabIndex="0"
                    aria-expanded="false"
                    aria-label={__('Open menu', 'frontis-blocks')}
                >
                    {(menuType === 'icon' || menuType === 'icon-text') && getIcon()}
                    {(menuType === 'text' || menuType === 'icon-text') && getText()}
                </div>

                {/* Off-Canvas Menu */}
                <div className={`fb-off-canvas-menu ${menuPositionClass}`}>

                    {/* Close Button */}
                    <div className="fb-off-canvas-header">

                        {(closeMenuType === 'icon' || closeMenuType === 'icon-text') && (
                            <div
                                className="fb-close-menu"
                                aria-label={__('Close menu', 'frontis-blocks')}
                            >
                                {renderSVG(closeMenuIcon)}
                            </div>
                        )}

                        {(closeMenuType === 'text' || closeMenuType === 'icon-text') && (
                            <div
                                className="fb-close-menu text"
                                aria-label={__('Close menu', 'frontis-blocks')}
                            >
                                {closeMenuText}
                            </div>
                        )}

                    </div>

                    {/* Pattern Content */}
                    <div {...innerBlocksProps} />
                </div>

                {/* Overlay */}
                <div className="fb-menu-overlay"></div>

            </div>

        </div>
    );
}