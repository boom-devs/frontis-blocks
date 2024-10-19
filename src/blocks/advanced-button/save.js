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
    } = attributes;

    const blockProps = useBlockProps.save();


    return (
        <>
            <div {...blockProps} id={blockId}>
                <div className={`fb-advanced-button-wrapper ${blockId}`} style={{ textAlign: buttonAlignment }}>
                    <a 
                        className="fb-advanced-button" 
                        href={buttonUrl} 
                        target={buttonTargetUrl ? '_blank' : undefined}
                        rel={buttonTargetUrl ? 'noopener noreferrer' : undefined}
                    >
                        <RichText.Content
                            tagName="span"
                            value={buttonText}
                            className="fb-advanced-button-text"
                        />
                        {buttonIcon && buttonIconAlign === 'icon' && (
                            <div className="fb-advanced-button-icon">{renderSVG(buttonIcon)}</div>
                        )}
                    </a>
                </div>
            </div>
        </>
    );
}
