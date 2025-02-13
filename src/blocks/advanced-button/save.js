import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
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

    } = attributes;

    const blockProps = useBlockProps.save();


    return (
        <>
            <div {...blockProps} id={blockId} className={`fb-advanced-button-area ${blockId} ${buttonGlobalWraperClass}`}>
                <div className={`fb-parent-wrapper fb-advanced-button-wrapper ${blockId}`} id={buttonGlobalWraperID} style={{ textAlign: buttonAlignment }}>
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
}
