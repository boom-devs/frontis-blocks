import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockId,
        buttonAlignment,
        buttonTextSwitcher,
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

    const handleButtonClick = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div {...blockProps}>
                <div className={`fb-parent-wrapper fb-advanced-button-wrapper ${buttonGlobalWraperClass}`} id={buttonGlobalWraperID} style={{ textAlign: buttonAlignment }}>
                <a
                    className="fb-advanced-button"
                    href={buttonUrl || undefined} 
                    target={buttonTargetUrl ? "_blank" : undefined}
                    rel={buttonUrl ? "noopener noreferrer" : undefined}
                    onClick={(e) => {
                        if (!buttonUrl) {
                        e.preventDefault();
                        }
                        handleButtonClick?.(e);
                    }}
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

                        {buttonTextSwitcher && (
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
                    </a>
                </div>
            </div>
        </>
    );
}
