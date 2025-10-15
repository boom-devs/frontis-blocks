// Edit.js
import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    RichText,
    BlockControls,
    AlignmentToolbar,
} from '@wordpress/block-editor';
import { useRef, useEffect } from '@wordpress/element';
import { gsap } from 'gsap';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import Inspector from './inspector';
import { useDeviceType } from '@Config/displayType';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockId,
        animationOption,
        animationType,
        startDuration,
        endDuration,
        delayDuration,
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
        animatedHeadingHighlightText,
    } = attributes;

    const blockProps = useBlockProps({
        className: `fb-animated-heading-main-wrapper ${blockId}`,
    });

    const deviceType = useDeviceType();

    const panelRef = useRef(null);
    const typedTextRef = useRef(null);
    const dynamicWrapperRef = useRef(null);
    const highlightRef = useRef(null);

    SwitchToBlockSettings(panelRef);

    // Text Animation
    useEffect(() => {
        if (!animatedHeadingItems || animatedHeadingItems.length === 0) return;
    
        let ctx = gsap.context(() => {});
        let currentTimeline = gsap.timeline();
        let isCancelled = false;
    
        const texts = animatedHeadingItems
            .map(item => item.animatedHeadingTitle)
            .filter(Boolean);
        if (texts.length === 0) return;
    
        // ==================================================
        // Utility: Split Text (words or letters)
        // ==================================================
        const splitText = (el, type = "words") => {
            const text = el.textContent;
            el.textContent = "";
    
            if (type === "words") {
                const words = text.split(" ");
                words.forEach((word, i) => {
                    const span = document.createElement("span");
                    span.className = "word";
                    span.textContent = word;
                    span.style.display = "inline-block";
                    el.appendChild(span);
                    if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
                });
            } else if (type === "letters") {
                text.split("").forEach(char => {
                    if (char === " ") el.appendChild(document.createTextNode(" "));
                    else {
                        const span = document.createElement("span");
                        span.className = "char";
                        span.textContent = char;
                        span.style.display = "inline-block";
                        el.appendChild(span);
                    }
                });
            }
        };
    
        // ==================================================
        // Typing Animation
        // ==================================================
        if (animationType === "typing") {
            const el = typedTextRef.current;
            if (!el) return;
    
            let index = 0;
    
            const typeText = () => {
                if (isCancelled) return;
                const currentText = texts[index];
                const chars = currentText.split("");
    
                const tl = gsap.timeline({
                    onComplete: () => {
                        gsap.delayedCall(1, () => {
                            if (isCancelled) return;
    
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
                                    duration: endDuration,
                                    ease: animationTransition,
                                });
                            }
    
                            currentTimeline.add(deleteTl);
                        });
                    }
                });
    
                chars.forEach((_, i) => {
                    tl.to(el, {
                        textContent: currentText.substring(0, i + 1),
                        duration: startDuration,
                        ease: animationTransition,
                    });
                });
    
                currentTimeline.add(tl);
            };
    
            typeText();
        }
    
        // ==================================================
        // Swirl Animation
        // ==================================================
        else if (animationType === "swirl") {
            const wrapper = dynamicWrapperRef.current;
            if (!wrapper) return;
            wrapper.innerHTML = "";
            let index = 0;
    
            const animateNextText = () => {
                if (isCancelled) return;
    
                const text = texts[index];
                const span = document.createElement("span");
                span.className = "fb-animated-heading-swirl-text";
                span.style.display = "inline-block";
                wrapper.appendChild(span);
    
                const letters = text.split("");
                letters.forEach(char => {
                    if (char === " ") span.appendChild(document.createTextNode(" "));
                    else {
                        const letter = document.createElement("span");
                        letter.textContent = char;
                        letter.style.display = "inline-block";
                        letter.style.opacity = 0;
                        span.appendChild(letter);
                    }
                });
    
                const letterSpans = span.querySelectorAll("span");
    
                // Swirl In
                gsap.fromTo(
                    letterSpans,
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
    
                // Swirl Out
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
                            span.remove();
                            index = (index + 1) % texts.length;
                            animateNextText();
                        },
                    });
                });
            };
    
            animateNextText();
        }
    
        // ==================================================
        // Words / Letters Animations
        // ==================================================
        else {
            const wrapper = dynamicWrapperRef.current;
            if (!wrapper) return;
            wrapper.innerHTML = "";
            let index = 0;
    
            const animateNext = () => {
                if (isCancelled) return;
    
                const text = texts[index];
                const el = document.createElement("span");
                el.className = "fb-animated-heading-text";
                el.textContent = text;
                wrapper.appendChild(el);
    
                const splitType = animationType.includes("letter") ? "letters" : "words";
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
                                },
                            });
                        });
                    },
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
                            opacity: 0,
                            duration: startDuration * 3,
                            ease: animationTransition,
                            stagger: startDuration,
                        });
                        break;
                    case "letters-slide-down":
                        tl.from(chars, {
                            yPercent: -120,
                            opacity: 0,
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
            };
    
            animateNext();
        }
    
        // ==================================================
        // Cleanup
        // ==================================================
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
        animationTransition,
    ]);

    // Highlighted Text Animation
    useEffect(() => {
        if (animationOption !== "highlight-animation") return;
        const highlightEl = highlightRef.current;
        if (!highlightEl || !animatedHeadingHighlightText) return;
    
        highlightEl.textContent = animatedHeadingHighlightText;
    
        let ctx = gsap.context(() => {});
        let tl = gsap.timeline({ repeat: -1, yoyo: true });
        let isCancelled = false;
    
        const highlightType = animationType; // 'underline', 'double', 'curly', 'zigzag'
    
        // ================================
        // Simple underline / double
        // ================================
        if (highlightType === "underline" || highlightType === "double") {
            tl.fromTo(
                highlightEl,
                { backgroundSize: "0% 100%" },
                {
                    backgroundSize: "100% 100%",
                    duration: startDuration,
                    ease: animationTransition,
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: delayDuration,
                }
            );
        } 
    
        // ================================
        // Curly / Zigzag (using CSS variable)
        // ================================
        else if (highlightType === "curly" || highlightType === "zigzag") {
            highlightEl.style.setProperty("--highlight-scale", 0);
    
            tl.fromTo(
                highlightEl,
                { "--highlight-scale": 0 },
                {
                    "--highlight-scale": 1,
                    duration: startDuration,
                    ease: animationTransition,
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: delayDuration,
                    onUpdate() {
                        highlightEl.style.setProperty(
                            "--highlight-scale",
                            this.targets()[0]["--highlight-scale"]
                        );
                    },
                }
            );
        }
    
        // ================================
        // Cleanup
        // ================================
        return () => {
            isCancelled = true;
            tl.kill();
            ctx.revert();
            gsap.killTweensOf(highlightEl);
        };
    }, [
        animationOption,
        animationType,
        animatedHeadingHighlightText,
        startDuration,
        delayDuration,
        animationTransition,
    ]);
    
    
    
    

    const Tag = animatedHeadingMainTag || 'div';

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            <BlockControls>
                <AlignmentToolbar
                    value={animatedHeadingAlignment[deviceType]}
                    onChange={(value) =>
                        setAttributes({
                            animatedHeadingAlignment: {
                                ...animatedHeadingAlignment,
                                [deviceType]: value,
                            },
                        })
                    }
                    controls={['left', 'center', 'right']}
                />
            </BlockControls>

            <div {...blockProps}>
                <div
                    className={`fb-animated-heading-container ${animatedHeadingGlobalWraperClass}`}
                    id={animatedHeadingGlobalWraperID}
                    ref={panelRef}
                >
                    <Tag
                        className={`fb-animated-heading-wrapper animated-type-${animationType}`}
                    >
                        {animatedHeadingPrefix && (
                            <RichText
                                tagName="span"
                                className="fb-animated-heading-prefix"
                                value={animatedHeadingPrefix}
                                onChange={(value) =>
                                    setAttributes({
                                        animatedHeadingPrefix: value,
                                    })
                                }
                            />
                        )}

                        {animationOption === 'text-animation' &&
                            animationType === 'typing' && (
                                <>
                                    <span
                                        className="fb-animated-headings"
                                        ref={typedTextRef}
                                    ></span>
                                    {animatedHeadingCursorSwitch &&
                                        animatedHeadingCursor && (
                                            <span className="fb-animated-heading-cursor">
                                                {animatedHeadingCursor}
                                            </span>
                                        )}
                                </>
                            )}

                        {animationOption === 'text-animation' &&
                            animationType !== 'typing' && (
                                <span
                                    className="fb-animated-headings fb-dynamic-text"
                                    ref={dynamicWrapperRef}
                                ></span>
                            )}

                        {animationOption === 'highlight-animation' && (
                            <span
                                className={`fb-highlight-text fb-highlight-${animationType}`}
                                ref={highlightRef}
                            ></span>
                        )}

                        {animatedHeadingSuffix && (
                            <RichText
                                tagName="span"
                                className="fb-animated-heading-suffix"
                                value={animatedHeadingSuffix}
                                onChange={(value) =>
                                    setAttributes({
                                        animatedHeadingSuffix: value,
                                    })
                                }
                            />
                        )}
                    </Tag>
                </div>
            </div>
        </>
    );
}
