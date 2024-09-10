import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockID,
        ButtonAlignment,
        ButtonText,
        ButtonUrl,
        ButtonTargetUrl,
        ButtonWidth,
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
                    target={ButtonTargetUrl ? '_blank' : ''}
                    rel={ButtonTargetUrl ? 'noopener noreferrer' : ''}
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
                </a>
            </div>
        </div>
    );
}
