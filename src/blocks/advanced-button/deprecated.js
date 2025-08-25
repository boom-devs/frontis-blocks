import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import attributes from './attributes.js';

const v1_0_3 = {
    attributes,

    supports: {
        html: false,
        className: false,
    },

    save({ attributes }) {
        const {
            blockId,
            buttonAlignment,
            buttonText,
            buttonUrl,
            buttonTargetUrl,
            buttonIconAlign,
            buttonIcon,
            buttonIconPosition,
            buttonIconSize,
            buttonIconColor,
    
            buttonIconImageUrl,
            buttonIconImageAlt,
            buttonIconImageID,
            bbuttonIconImageWidth,
            buttonIconImageWidthUnits,
            buttonIconImageHeight,
            buttonIconImageHeightUnits,
            buttonIconImagedisplay,
    
            buttonGlobalWraperID,
            buttonGlobalWraperClass,
    
            advancedBtnDesktopSwitcher,
            advancedBtnTabletSwitcher,
            advancedBtnMobileSwitcher,
        } = attributes;

        const blockProps = useBlockProps.save({
            className: `frontis-block fb-advanced-button-main-wrapper ${blockId} ${advancedBtnDesktopSwitcher && 'fb-desktop-responsive'} ${advancedBtnTabletSwitcher && 'fb-tablet-responsive'} ${advancedBtnMobileSwitcher && 'fb-mobile-responsive'}`,
        });

        return (
            <>
                <div {...blockProps}>
                    <div className={`fb-parent-wrapper fb-advanced-button-wrapper ${buttonGlobalWraperClass}`} id={buttonGlobalWraperID} style={{ textAlign: buttonAlignment }}>
                        <a 
                            className="fb-advanced-button" 
                            href={buttonUrl} 
                            target={buttonTargetUrl ? '_blank' : undefined}
                            rel={buttonTargetUrl ? 'noopener noreferrer' : undefined}
                        >
                            {buttonIconPosition === 'left' && buttonIconAlign === 'icon-text' && (
                                <div className={`fb-advanced-button-icon-wrapper ${buttonIconPosition}`}> 
                                    <div className="fb-advanced-button-icon">{renderSVG(buttonIcon)}</div>
                                </div>
                            )}
    
                            {buttonIconPosition === 'left' && buttonIconAlign === 'image' && buttonIconImageUrl && (
                                <div className={`fb-advanced-button-icon-wrapper ${buttonIconPosition}`}>
                                    <div className="fb-advanced-button-icon-image">
                                        <img 
                                            src={buttonIconImageUrl} 
                                            alt={buttonIconImageAlt || 'Button image'} 
                                            className="button-icon-image"
                                        />
                                    </div>
                                </div>
                            )}
    
                            {buttonIconAlign !== 'icon-only' && (
                                <RichText.Content
                                    tagName="span"
                                    value={buttonText}
                                    className={`fb-advanced-button-text`}
                                />
                            )}
    
                            {buttonIconPosition === 'right' && buttonIconAlign === 'icon-text' && (
                                <div className={`fb-advanced-button-icon-wrapper ${buttonIconPosition}`}>
                                    <div className="fb-advanced-button-icon">{renderSVG(buttonIcon)}</div>
                                </div>
                            )}
    
                            {buttonIconPosition === 'right' && buttonIconAlign === 'image' && buttonIconImageUrl && (
                                <div className={`fb-advanced-button-icon-wrapper ${buttonIconPosition}`}>
                                    <div className="fb-advanced-button-icon-image">
                                        <img 
                                            src={buttonIconImageUrl} 
                                            alt={buttonIconImageAlt || 'Button image'} 
                                            className="button-icon-image"
                                        />
                                    </div>
                                </div>
                            )}
    
                            {buttonIconAlign === 'icon-only' && (
                                <div className={`fb-advanced-button-icon-wrapper`}>
                                    <div className="fb-advanced-button-icon">{renderSVG(buttonIcon)}</div>
                                </div>
                            )}
                        </a>
                    </div>
                </div>
            </>
        );
    },
};

export default [v1_0_3];