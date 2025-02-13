import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    RichText, 
    BlockControls,
    AlignmentToolbar,
    MediaUpload,
    MediaUploadCheck,
    MediaPlaceholder,
} from '@wordpress/block-editor';
import { useRef } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings'; 
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const { 
        blockId,
        buttonAlignment,
        buttonText,
        buttonUrl,
        buttonTargetUrl,
        buttonWidth,
        buttonIcon,
        buttonZIndex,
        buttonIconAlign,
        buttonIconPosition,

        buttonIconImageUrl,
		buttonIconImageAlt,
		buttonIconImageID,
		buttonIconImageWidth,
		buttonIconImageWidthUnits,
		buttonIconImageHeight,
		buttonIconImageHeightUnits,
		buttonIconImagedisplay,

        buttonGlobalWraperID,
        buttonGlobalWraperClass,
    } = attributes;

    const blockProps = useBlockProps({
        className: `frontis-block fb-advanced-button-main-wrapper ${blockId}`,
    });


    /**
     * Manages tab button settings and switches to block settings on click
     */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);
    
    /**
     * Prevent link navigation in the editor and focus on text
     */
    const handleButtonClick = (event) => {
        event.preventDefault();
    };


    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            <BlockControls>
                <AlignmentToolbar
                    value={buttonAlignment}
                    onChange={(value) => setAttributes({ buttonAlignment: value })}
                    controls={['left', 'center', 'right', 'justify']}
                />
            </BlockControls>
            
<<<<<<< HEAD
            <div {...blockProps}>
                <div className={`fb-parent-wrapper fb-advanced-button-wrapper ${buttonGlobalWraperClass}` } id={buttonGlobalWraperID} style={{ textAlign: buttonAlignment }} ref={panelRef}>
=======
            <div {...blockProps} id={blockId} className={`fb-advanced-button-area ${blockId}`}>
                <div className={`fb-parent-wrapper fb-advanced-button-wrapper ${blockId} ${buttonGlobalWraperClass}` } id={buttonGlobalWraperID} style={{ textAlign: buttonAlignment }} ref={panelRef}>
>>>>>>> 5f13844a70cc59ab4dec2177fce8ff947217ff5f
                    <a 
                        className="fb-advanced-button" 
                        href={buttonUrl} 
                        target={buttonTargetUrl ? '_blank' : undefined}
                        rel={buttonTargetUrl ? 'noopener noreferrer' : undefined}
                        onClick={handleButtonClick}
                    >
                        {buttonIconPosition === 'left' && buttonIconAlign === 'icon-text' && (
                            <div className={`fb-advanced-button-icon-wrapper ${buttonIconPosition}`}>
                                <div className="fb-advanced-button-icon">{renderSVG(buttonIcon)}</div>
                            </div>
                        )}

                        {buttonIconPosition === 'left' && buttonIconAlign === 'image' && buttonIconImageUrl && (
                            <div className={`fb-advanced-button-icon-wrapper ${buttonIconPosition}`}>
                                <div className="fb-advanced-button-icon-image">
                                    {buttonIconImageUrl ? (
                                        <img src={buttonIconImageUrl} alt={buttonIconImageAlt} />
                                    ) : (
                                        <MediaPlaceholder
                                            onSelect={(media) =>
                                                setAttributes({
                                                    buttonIconImageID: media.id,
                                                    buttonIconImageUrl: media.url,
                                                    buttonIconImageAlt: media.alt,
                                                })
                                            }
                                            allowedTypes={['image']}
                                            multiple={false}
                                            labels={{ title: 'Add Image' }}
                                        />
                                    )}
                                </div>
                            </div>
                        )}

                        {buttonIconAlign !== 'icon-only' && (
                            <RichText
                                tagName="span"
                                value={buttonText}
                                onChange={(value) => setAttributes({ buttonText: value })}
                                placeholder={__('Enter button text...', 'frontis-blocks')}
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
                                    {buttonIconImageUrl ? (
                                        <img src={buttonIconImageUrl} alt={buttonIconImageAlt} />
                                    ) : (
                                        <MediaPlaceholder
                                            onSelect={(media) =>
                                                setAttributes({
                                                    buttonIconImageID: media.id,
                                                    buttonIconImageUrl: media.url,
                                                    buttonIconImageAlt: media.alt,
                                                })
                                            }
                                            allowedTypes={['image']}
                                            multiple={false}
                                            labels={{ title: 'Add Image' }}
                                        />
                                    )}
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
