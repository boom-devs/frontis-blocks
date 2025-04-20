import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockId,
        typingTextItems,
        typingTextMainTag,
        typingTextPrefix,
        typingTextCursorSwitch,
        typingTextCursor,
        typingTextSuffix,

        typingTextGlobalWraperID,
        typingTextGlobalWraperClass,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-typing-text-main-wrapper ${blockId}`,
    });

    const Tag = typingTextMainTag ? typingTextMainTag : "div";
    
    return (
        <div {...blockProps}>
            <div className={`fb-parent-wrapper ${typingTextGlobalWraperClass}`} id={typingTextGlobalWraperID}>
                <Tag className="fb-typing-text-wrapper">
                    {typingTextPrefix && (
                        <RichText.Content
                            tagName="span"
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
                    {typingTextCursorSwitch && (
                        typingTextCursor && (
                            <span className="fb-typing-text-cursor">
                                {typingTextCursor}
                            </span>
                        )
                    )}
                    {typingTextSuffix && (
                        <RichText.Content
                            tagName="span"
                            className="fb-typing-text-suffix"
                            value={typingTextSuffix}
                        />
                    )}
                </Tag>
            </div>
        </div>
    );
}
