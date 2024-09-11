import { useBlockProps, RichText } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
    const {
        blockID,
        ButtonAlignment,
        ButtonText,
        ButtonUrl,
        ButtonTargetUrl,
        ButtonWidth,
        ButtonIcon,
        ButtonZIndex,
    } = attributes;

    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps} id={blockID}>
            <div 
                className={`fb-advanced-button-wrapper ${blockID}`} 
                style={{ textAlign: ButtonAlignment }}
            >
                <a
                    className="fb-advanced-button"
                    href={ButtonUrl}
                    target={ButtonTargetUrl ? '_blank' : undefined}
                    rel={ButtonTargetUrl ? 'noopener noreferrer' : undefined}
                    style={{
                        zIndex: ButtonZIndex,
                        width: ButtonWidth ? `${ButtonWidth}%` : 'auto',
                    }}
                >
                    <RichText.Content
                        tagName="span"
                        value={ButtonText}
                        className="fb-advanced-button-text"
                    />
                    <div className="fb-advanced-button-icon">{renderSVG(ButtonIcon)}</div>
                </a>
            </div>
        </div>
    );
}
