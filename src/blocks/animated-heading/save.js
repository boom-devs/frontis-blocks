import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockId,
        animationType,
        startDuration,
        endDuration,
        animationTransition,
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
        className: `fb-animated-heading-main-wrapper ${blockId}`,
    });

    const Tag = animatedHeadingMainTag || 'div';

    return (
        <div {...blockProps}>
            <div
                className={`fb-animated-heading-container ${animatedHeadingGlobalWraperClass}`}
                id={animatedHeadingGlobalWraperID}
                data-animation-type={animationType}
                data-start-duration={startDuration}
                data-end-duration={endDuration}
                data-animation-transition={animationTransition}
                data-cursor={animatedHeadingCursorSwitch ? animatedHeadingCursor : ''}
            >
                <Tag className={`fb-animated-heading-wrapper animated-type-${animationType}`}>
                    {animatedHeadingPrefix && (
                        <RichText.Content
                            tagName="span"
                            className="fb-animated-heading-prefix"
                            value={animatedHeadingPrefix}
                        />
                    )}

                    {/* Hidden text items for animation */}
                    <div className="fb-animated-heading-items" style={{ display: 'none' }}>
                        {animatedHeadingItems?.map((item, index) => (
                            <span key={index} className="fb-animated-heading-item">
                                {item.animatedHeadingTitle}
                            </span>
                        ))}
                    </div>

                    {/* Typing Animation Structure */}
                    {animationType === "typing" ? (
                        <>
                            <span className="fb-animated-headings"></span>
                            {animatedHeadingCursorSwitch && animatedHeadingCursor && (
                                <span className="fb-animated-heading-cursor">{animatedHeadingCursor}</span>
                            )}
                        </>
                    ) : (
                        <>
                            {'\u00A0'}
                            <span className="fb-animated-headings">
                                <span className="fb-animated-heading-dynamic-wrapper"></span>
                            </span>
                            {'\u00A0'}
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
