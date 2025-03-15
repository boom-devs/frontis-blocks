import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockID,
        menuPosition = 'left',
        iconStyle = 'hamburger',
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
    
    const blockProps = useBlockProps.save({
        className: `fb-off-canvas-menu-block ${blockID}`,
    });
    
    const innerBlocksProps = useInnerBlocksProps.save({
        className: 'fb-off-canvas-content',
    });
    
    return (
        <div {...blockProps}>
            {/* Hamburger Icon Button */}
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
            <div className={`fb-off-canvas-menu ${menuPositionClass}`}>
                <div {...innerBlocksProps} />
            </div>
            
            {/* Overlay */}
            <div className="fb-menu-overlay"></div>
        </div>
    );
}