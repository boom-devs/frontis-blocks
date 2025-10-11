import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { useRef, useEffect } from '@wordpress/element';
import { gsap } from 'gsap';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import Inspector from "./inspector";
import { useDeviceType } from "@Config/displayType";
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockId,
        animationType,
        startDuration,
        endDuration,
        animationTransition,
        animatedHeadingAlignment,
        animatedHeadingItems,
        animatedHeadingMainTag,
        animatedHeadingPrefix,
        animatedHeadingCursorSwitch,
        animatedHeadingCursor,
        animatedHeadingSuffix,
        animatedHeadingGlobalWraperID,
        animatedHeadingGlobalWraperClass,
    } = attributes;

    const blockProps = useBlockProps({
        className: `fb-animated-heading-main-wrapper ${blockId}`,
    });

    const deviceType = useDeviceType();

    const panelRef = useRef(null);
    const typedTextRef = useRef(null);
    const dynamicWrapperRef = useRef(null);

    SwitchToBlockSettings(panelRef);

   // Animation Effect
    useEffect(() => {
        if (!animatedHeadingItems || animatedHeadingItems.length === 0) return;

        // Cleanup / reset before rerun
        let ctx = gsap.context(() => {});
        let currentTimeline = gsap.timeline();
        let isCancelled = false;

        const texts = animatedHeadingItems.map(item => item.animatedHeadingTitle).filter(Boolean);
        if (texts.length === 0) return;

        // Utility: Split text into words or letters
        const splitText = (el, type = "words") => {
            const text = el.textContent;
            el.textContent = "";
            if (type === "words") {
                text.split(" ").forEach(word => {
                    const span = document.createElement("span");
                    span.className = "word";
                    span.textContent = word + " ";
                    span.style.display = "inline-block";
                    el.appendChild(span);
                });
            } else if (type === "letters") {
                text.split("").forEach(char => {
                    const span = document.createElement("span");
                    span.className = "char";
                    span.textContent = char;
                    span.style.display = "inline-block";
                    el.appendChild(span);
                });
            }
        };

        // ============================================
        // Typing Animation
        // ============================================
        if (animationType === "typing") {
            const el = typedTextRef.current;
            if (!el) return;

            let index = 0;

            function typeText() {
                if (isCancelled) return;
                const currentText = texts[index];
                const chars = currentText.split("");
                const tl = gsap.timeline({
                    onComplete: () => {
                        // Wait before deleting
                        gsap.delayedCall(1, () => {
                            if (isCancelled) return;

                            // Delete animation (RIGHT → LEFT)
                            const deleteTl = gsap.timeline({
                                onComplete: () => {
                                    if (isCancelled) return;
                                    index = (index + 1) % texts.length;
                                    typeText();
                                }
                            });

                            for (let i = chars.length; i > 0; i--) {
                                deleteTl.to(el, {
                                    textContent: currentText.substring(0, i - 1),
                                    duration: startDuration,
                                    ease: animationTransition
                                });
                            }

                            currentTimeline.add(deleteTl);
                        });
                    }
                });

                // Typing (LEFT → RIGHT)
                chars.forEach((_, i) => {
                    tl.to(el, {
                        textContent: currentText.substring(0, i + 1),
                        duration: startDuration,
                        ease: animationTransition
                    });
                });

                currentTimeline.add(tl);
            }

            typeText();
        }

        // ============================================
        // Swirl Animation
        // ============================================
        else if (animationType === "swirl") {
            const wrapper = dynamicWrapperRef.current;
            if (!wrapper) return;
            wrapper.innerHTML = "";
            let index = 0;

            function createTextSpan(text) {
                const span = document.createElement("span");
                span.className = "fb-animated-heading-swirl-text";
                span.style.display = "inline-block";
                span.textContent = text;
                return span;
            }

            function animateNextText() {
                if (isCancelled) return;

                const newText = createTextSpan(texts[index]);
                wrapper.appendChild(newText);

                const letters = newText.textContent.split("");
                newText.textContent = "";
                letters.forEach((char) => {
                    const letter = document.createElement("span");
                    letter.textContent = char;
                    letter.style.display = "inline-block";
                    letter.style.opacity = 0;
                    newText.appendChild(letter);
                });

                const letterSpans = newText.querySelectorAll("span");

                // Swirl In Animation
                gsap.fromTo(letterSpans,
                    { opacity: 0, y: 20, rotation: -90 },
                    {
                        opacity: 1,
                        y: 0,
                        rotation: 0,
                        duration: startDuration * 12,
                        stagger: startDuration,
                        ease: animationTransition,
                    }
                );

                // Swirl Out Animation
                gsap.delayedCall(2.5, () => {
                    if (isCancelled) return;
                    gsap.to(letterSpans, {
                        opacity: 0,
                        y: -20,
                        rotation: 90,
                        duration: endDuration * 10,
                        stagger: endDuration,
                        ease: animationTransition,
                        onComplete: () => {
                            newText.remove();
                            index = (index + 1) % texts.length;
                            animateNextText();
                        }
                    });
                });
            }

            animateNextText();
        }

        // ============================================
        // Word / Letter Based Animations
        // ============================================
        else {
            const wrapper = dynamicWrapperRef.current;
            if (!wrapper) return;
            wrapper.innerHTML = "";
            let index = 0;

            function animateNext() {
                if (isCancelled) return;
                const text = texts[index];
                const el = document.createElement("span");
                el.className = "fb-animated-heading-text";
                el.textContent = text;
                wrapper.appendChild(el);

                let splitType = animationType.includes("letter") ? "letters" : "words";
                splitText(el, splitType);

                const words = el.querySelectorAll(".word");
                const chars = el.querySelectorAll(".char");

                const tl = gsap.timeline({
                    onComplete: () => {
                        gsap.delayedCall(1, () => {
                            gsap.to(el, {
                                opacity: 0,
                                y: -30,
                                duration: endDuration * 4,
                                ease: animationTransition,
                                onComplete: () => {
                                    el.remove();
                                    index = (index + 1) % texts.length;
                                    animateNext();
                                }
                            });
                        });
                    }
                });

                switch (animationType) {
                    case "words-slide-up":
                        tl.from(words, {
                            opacity: 0,
                            yPercent: 100,
                            duration: startDuration * 5,
                            ease: animationTransition,
                            stagger: startDuration,
                        });
                        break;

                    case "words-rotate-in":
                        tl.set(words, { transformPerspective: 1000 });
                        tl.from(words, {
                            rotationX: -90,
                            duration: startDuration * 6,
                            ease: animationTransition,
                            stagger: startDuration,
                        });
                        break;

                    case "words-slide-from-right":
                        tl.from(words, {
                            opacity: 0,
                            x: "1em",
                            duration: startDuration * 6,
                            ease: animationTransition,
                            stagger: startDuration,
                        });
                        break;

                    case "letters-slide-up":
                        tl.from(chars, {
                            yPercent: 100,
                            duration: startDuration * 3,
                            ease: animationTransition,
                            stagger: startDuration,
                        });
                        break;

                    case "letters-slide-down":
                        tl.from(chars, {
                            yPercent: -120,
                            duration: startDuration * 3,
                            ease: animationTransition,
                            stagger: startDuration,
                        });
                        break;

                    case "letters-fade-in":
                        tl.from(chars, {
                            opacity: 0,
                            duration: startDuration,
                            ease: animationTransition,
                            stagger: startDuration,
                        });
                        break;

                    case "letters-fade-in-random":
                        tl.from(chars, {
                            opacity: 0,
                            duration: startDuration / 2,
                            ease: animationTransition,
                            stagger: { amount: startDuration * 5, from: "random" },
                        });
                        break;

                    case "scrub-each-word":
                        tl.from(words, {
                            opacity: 0.2,
                            duration: startDuration,
                            ease: animationTransition,
                            stagger: { each: startDuration * 2 },
                        });
                        break;

                    default:
                        break;
                }

                currentTimeline.add(tl);
            }

            animateNext();
        }

        // Cleanup
        return () => {
            isCancelled = true;
            ctx.revert();
            if (currentTimeline) currentTimeline.kill();
            gsap.globalTimeline.clear();
        };
    }, [
        animatedHeadingItems.map(i => i.animatedHeadingTitle).join("|"),
        animationType,
        startDuration,
        endDuration,
        animationTransition
    ]);


    const Tag = animatedHeadingMainTag ? animatedHeadingMainTag : "div";

    return (
        <>
            <Inspector attributes={attributes} setAttributes={setAttributes} clientId={clientId} />

            <BlockControls>
                <AlignmentToolbar
                    value={animatedHeadingAlignment[deviceType]}
                    onChange={(value) =>
                        setAttributes({
                            animatedHeadingAlignment: { ...animatedHeadingAlignment, [deviceType]: value },
                        })
                    }
                    controls={["left", "center", "right"]}
                />
            </BlockControls>

            <div {...blockProps}>
                <div
                    className={`fb-animated-heading-container ${animatedHeadingGlobalWraperClass}`}
                    id={animatedHeadingGlobalWraperID}
                    ref={panelRef}
                >
                    <Tag className={`fb-animated-heading-wrapper animated-type-${animationType}`}>
                        {animatedHeadingPrefix && (
                            <RichText
                                tagName="span"
                                className="fb-animated-heading-prefix"
                                value={animatedHeadingPrefix}
                                onChange={(value) => setAttributes({ animatedHeadingPrefix: value })}
                            />
                        )}

                        {animationType === "typing" && (
                            <>
                                <span className="fb-animated-headings" ref={typedTextRef}></span>
                                {animatedHeadingCursorSwitch && animatedHeadingCursor && (
                                    <span className="fb-animated-heading-cursor">{animatedHeadingCursor}</span>
                                )}
                            </>
                        )}

                        {animationType !== "typing" && (
                            <>
                                {'\u00A0'}
                                <span className="fb-animated-headings">
                                    <span className="fb-animated-heading-dynamic-wrapper" ref={dynamicWrapperRef}></span>
                                </span>
                                {'\u00A0'}
                            </>
                        )}

                        {animatedHeadingSuffix && (
                            <RichText
                                tagName="span"
                                className="fb-animated-heading-suffix"
                                value={animatedHeadingSuffix}
                                onChange={(value) => setAttributes({ animatedHeadingSuffix: value })}
                            />
                        )}
                    </Tag>
                </div>
            </div>
        </>
    );
}
