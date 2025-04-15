import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockId,
        typingTextItems,
        typingTextPrefix,
        typingTextPrefixTag,
        typingTextCursorSwitch,
        typingTextCursor,
        typingTextSuffix,
        typingTextSuffixTag,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-typing-text-main-wrapper ${blockId}`,
    });
    
    return (
        <div {...blockProps}>
            <div className="fb-parent-wrapper">
                <div className="fb-typing-text-wrapper">
                    {typingTextPrefix && (
                        <RichText.Content
                            tagName={typingTextPrefixTag}
                            className="fb-typing-text-prefix"
                            value={typingTextPrefix}
                        />
                    )}
                    <span className="fb-typing-texts">
                        {typingTextItems && typingTextItems.map(item => (
                            <span key={item.id} className="fb-typing-item">
                                {item.typingTextTitle}
                            </span>
                        ))}
                    </span>
                    {typingTextCursorSwitch ? (
                        typingTextCursor && (
                            <span className="fb-typing-text-cursor">
                                {' '}{typingTextCursor}{' '}
                            </span>
                        )
                    ) : (
                        <span>{' '}</span>
                    )}
                    {typingTextSuffix && (
                        <RichText.Content
                            tagName={typingTextSuffixTag}
                            className="fb-typing-text-suffix"
                            value={typingTextSuffix}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
