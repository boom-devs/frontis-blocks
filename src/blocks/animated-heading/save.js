import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockId,
        animatedHeadingItems,
        animatedHeadingMainTag,
        animatedHeadingPrefix,
        animatedHeadingCursorSwitch,
        animatedHeadingCursor,
        animatedHeadingSuffix,

        animatedHeadingGlobalWraperID,
        animatedHeadingGlobalWraperClass,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-animated-Heading-main-wrapper ${blockId}`,
    });

    const Tag = animatedHeadingMainTag ? animatedHeadingMainTag : "div";
    
    return (
        <div {...blockProps}>
            <div className={`fb-parent-wrapper ${animatedHeadingGlobalWraperClass}`} id={animatedHeadingGlobalWraperID}>
                <Tag className="fb-animated-Heading-wrapper">
                    {animatedHeadingPrefix && (
                        <RichText.Content
                            tagName="span"
                            className="fb-animated-Heading-prefix"
                            value={animatedHeadingPrefix}
                        />
                    )}
                    <span className="fb-animated-Heading-texts">
                        {animatedHeadingItems && animatedHeadingItems.map(item => (
                            <span key={item.id} className="fb-animated-Heading-item">
                                {item.animatedHeadingTitle}
                            </span>
                        ))}
                    </span>
                    {animatedHeadingCursorSwitch && (
                        animatedHeadingCursor && (
                            <span className="fb-animated-Heading-cursor">
                                {animatedHeadingCursor}
                            </span>
                        )
                    )}
                    {animatedHeadingSuffix && (
                        <RichText.Content
                            tagName="span"
                            className="fb-animated-Heading-suffix"
                            value={animatedHeadingSuffix}
                        />
                    )}
                </Tag>
            </div>
        </div>
    );
}
