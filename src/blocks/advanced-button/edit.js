import { __ } from '@wordpress/i18n';
import { 
    useBlockProps, 
    RichText, 
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import Inspector from "./inspector";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const { 
        blockId,
        deviceType,
        buttonAlignment,
        buttonText,
        buttonUrl,
        buttonTargetUrl,
        buttonWidth,
        buttonIcon,
        buttonZIndex,
        buttonIconAlign,
    } = attributes;

    const blockProps = useBlockProps();
    

    // Prevent link navigation in the editor and focus on text
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
            
            <div {...blockProps} id={blockId}>
                <div className={`fb-advanced-button-wrapper ${blockId}`} style={{ textAlign: buttonAlignment }}>
                    <a 
                        className="fb-advanced-button" 
                        href={buttonUrl} 
                        target={buttonTargetUrl ? '_blank' : undefined}
                        rel={buttonTargetUrl ? 'noopener noreferrer' : undefined}
                        onClick={handleButtonClick}
                    >
                        <RichText
                            tagName="span"
                            value={buttonText}
                            onChange={(value) => setAttributes({ buttonText: value })}
                            placeholder={__('Enter button text...', 'frontis-blocks')}
                            className="fb-advanced-button-text"
                        />
                        {buttonIconAlign === 'icon' && (
                          <div className="fb-advanced-button-icon">{renderSVG(buttonIcon)}</div>
                        )}
                    </a>
                </div>
            </div>
        </>
    );
}
