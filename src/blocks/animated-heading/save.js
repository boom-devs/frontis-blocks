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

        //reaval animation
        animatedHeadingAnimationDuration,
        animatedHeadingRevealCharDelay,
        animatedHeadingRevealAppearDuration,
        animatedHeadingRevealHideDuration,
        animatedHeadingRevealVisibleHold,
        animatedHeadingRevealResetDelay,
        animatedHeadingRevealDirection,
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
                data-animation-duration={animatedHeadingAnimationDuration}
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

                    {animationType === 'reveal' && (
                        <span
                            className="fb-animated-heading-reveal-wrapper"
                            id="animated-heading-reveal-wrapper"
                            data-char-delay={animatedHeadingRevealCharDelay}
                            data-appear-duration={animatedHeadingRevealAppearDuration}
                            data-hide-duration={animatedHeadingRevealHideDuration}
                            data-visible-hold={animatedHeadingRevealVisibleHold}
                            data-reset-delay={animatedHeadingRevealResetDelay}
                            data-reveal-direction={animatedHeadingRevealDirection}>
                            {animatedHeadingItems && animatedHeadingItems.length > 0 &&
                                animatedHeadingItems.map((item, index) => (
                                    <span key={index} className="fb-animated-heading-item">
                                        {item.animatedHeadingTitle}
                                    </span>
                                ))
                            }
                        </span>
                    )}

                    {(animationType === 'zoom' || animationType === 'flip') && (
                        <span className="fb-animated-heading-swap-wrapper" id="animated-heading-swap-wrapper">
                            {animatedHeadingItems && animatedHeadingItems.length > 0 &&
                                animatedHeadingItems.map((item, index) => (
                                    <span key={index} className="fb-animated-heading-item">
                                        {item.animatedHeadingTitle}
                                    </span>
                                ))
                            }
                        </span>
                    )}

                    {animationType === 'progress' && (
                        <span className="fb-animated-heading-progress-wrapper" id="animated-heading-progress-wrapper">
                            <span className="fb-animated-heading-progress-word"></span>
                            <span className="fb-animated-heading-progress-track">
                                <span className="fb-animated-heading-progress-fill"></span>
                            </span>
                            <span style={{ display: 'none' }}>
                                {animatedHeadingItems && animatedHeadingItems.length > 0 &&
                                    animatedHeadingItems.map((item, index) => (
                                        <span key={index} className="fb-animated-heading-item">
                                            {item.animatedHeadingTitle}
                                        </span>
                                    ))
                                }
                            </span>
                        </span>
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