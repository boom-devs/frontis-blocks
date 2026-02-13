import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockID,
        animationType,
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
        className: `fb-animated-heading-main-wrapper ${blockID}`,
    });

    const Tag = animatedHeadingMainTag || 'div';

    return (
        <div {...blockProps}>
            <div
                className={`fb-animated-heading-container ${animatedHeadingGlobalWraperClass}`}
                id={animatedHeadingGlobalWraperID}
                data-animation-type={animationType}
            >
                <Tag className={`fb-animated-heading-wrapper animated-type-${animationType}`}>
                    {animatedHeadingPrefix && (
                        <RichText.Content
                            tagName="span"
                            className="fb-animated-heading-prefix"
                            value={animatedHeadingPrefix}
                        />
                    )}

                    {animationType === 'typing' && (
                        <>
                            <span className="fb-animated-headings">
                                {animatedHeadingItems &&
                                    animatedHeadingItems.map((item) => (
                                        <span key={item.id} className="fb-animated-heading-item">
                                            {item.animatedHeadingTitle}
                                        </span>
                                    ))}
                            </span>
                            {animatedHeadingCursorSwitch && animatedHeadingCursor && (
                                <span className="fb-animated-heading-cursor">
                                    {animatedHeadingCursor}
                                </span>
                            )}
                        </>
                    )}

                    {animationType === 'swirl' && (
                        <>
                        <span className="fb-animated-heading-swirl-wrapper">
                            <span className="fb-animated-heading-dynamic-wrapper" id="animated-heading-wrapper">
                                {animatedHeadingItems && animatedHeadingItems.length > 0 &&
                                    animatedHeadingItems.map((item, index) => (
                                        <span key={index} className="fb-animated-heading-item">
                                            {' '}{item.animatedHeadingTitle}{' '}
                                        </span>
                                    ))
                                }
                            </span>
                        </span>
                        </>
                    )}

                    {animatedHeadingSuffix && (
                        <RichText.Content
                            tagName="span"
                            className="fb-animated-heading-suffix"
                            value={animatedHeadingSuffix}
                        />
                    )}
                </Tag>
            </div>
        </div>
    );
}