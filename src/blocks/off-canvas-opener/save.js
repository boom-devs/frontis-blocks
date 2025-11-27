import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockID,
        menuPosition,
        iconStyle,
        animation
    } = attributes;
    
    // Get the appropriate icon based on iconStyle
    const getIcon = () => {
        switch (iconStyle) {
            case 'dots':
                return (
                    <div className="fb-menu-icon fb-dots-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                );
            case 'plus':
                return (
                    <div className="fb-menu-icon fb-plus-icon">
                        <span></span>
                        <span></span>
                    </div>
                );
            case 'hamburger':
            default:
                return (
                    <div className="fb-menu-icon fb-hamburger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                );
        }
    };
    
    // Generate the position-specific class
    const menuPositionClass = `fb-off-canvas-menu-${menuPosition}`;
    const menuAnimationClass = animation ? `fb-animation-${animation}` : '';
    
    const blockProps = useBlockProps.save({
        className: `fb-off-canvas-menu-block ${blockID}`,
    });
    
    const innerBlocksProps = useInnerBlocksProps.save({
        className: 'fb-off-canvas-content',
    });
    
    return (
        <div {...blockProps}>
            {/* Toggle Button */}
            <div 
                className="fb-menu-toggle-btn"
                role="button"
                tabIndex="0"
                aria-expanded="false"
                aria-label={__('Toggle menu', 'frontis-blocks')}
            >
                {getIcon()}
            </div>
            
            {/* Off-Canvas Menu Container */}
            <div className={`fb-off-canvas-menu ${menuPositionClass} ${menuAnimationClass}`}>
                {/* Close Button */}
                <div className="fb-off-canvas-header">
                    <button
                        className="fb-close-menu"
                        aria-label={__('Close menu', 'frontis-blocks')}
                    >
                        ×
                    </button>
                </div>
                
                <div {...innerBlocksProps} />
            </div>
            
            {/* Overlay */}
            <div className="fb-menu-overlay"></div>
        </div>
    );
}