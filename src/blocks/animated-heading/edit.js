import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { useRef, useEffect, useState } from '@wordpress/element';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import loadGoogleFont from '@Utils/loadGoogleFont';
import './editor.scss';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import { useDeviceType } from "@Config/displayType";

import Inspector from "./inspector";

const loadedFonts = new Set();

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockId,
        blockStyle,
        animationType,
        animatedHeadingAlignment,
        animatedHeadingItems,
        animatedHeadingMainTag,
        animatedHeadingPrefix,
        animatedHeadingCursorSwitch,
        animatedHeadingCursor,
        animatedHeadingSuffix,

        animatedHeadingGlobalWraperID,
        animatedHeadingGlobalWraperClass,

        animatedHeadingNormalTextFontFamily,
        animatedHeadingAnimationTextFontFamily,

    } = attributes;

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-animated-heading-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);

    /** Start Load Google Font */
    useEffect(() => {
        if (animatedHeadingNormalTextFontFamily && !loadedFonts.has(animatedHeadingNormalTextFontFamily)) {
            loadGoogleFont(animatedHeadingNormalTextFontFamily);
            loadedFonts.add(animatedHeadingNormalTextFontFamily);
        }
    }, [animatedHeadingNormalTextFontFamily]);

    useEffect(() => {
        if (animatedHeadingAnimationTextFontFamily && !loadedFonts.has(animatedHeadingAnimationTextFontFamily)) {
            loadGoogleFont(animatedHeadingAnimationTextFontFamily);
            loadedFonts.add(animatedHeadingAnimationTextFontFamily);
        }
    }, [animatedHeadingAnimationTextFontFamily]);
    /** End Load Google Font */
    

    const blockProps = useBlockProps({
        className: `fb-animated-heading-main-wrapper ${blockId}`,
    });

    const deviceType = useDeviceType();

    /**
     * Manages tab button settings and switches to block settings on click
     */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);


    const dynamicWrapperRef = useRef(null);

    // Ref for the dynamic typed text span
    const typedTextRef = useRef(null);
    const swirlWrapperRef = useRef(null);

    useEffect(() => {
        if (!animatedHeadingItems || animatedHeadingItems.length === 0) {
            return;
        }

        if (animationType === "typing") {

            let currentItem = 0;
            let charIndex = 0;
            let isDeleting = false;
            let timeoutId;

            function typeEffect() {
                // Get the current text fromanimatedHeadingItems
                const currentText = animatedHeadingItems[currentItem].animatedHeadingTitle;
                // Determine the substring to display
                const displayText = currentText.substring(0, charIndex);
                if (typedTextRef.current) {
                    typedTextRef.current.textContent = displayText;
                }
                // Typing phase
                if (!isDeleting) {
                    if (charIndex < currentText.length) {
                        charIndex++;
                        timeoutId = setTimeout(typeEffect, 100);
                    } else {
                        isDeleting = true;
                        timeoutId = setTimeout(typeEffect, 1000);
                    }
                } else {
                    if (charIndex > 0) {
                        charIndex--;
                        timeoutId = setTimeout(typeEffect, 50);
                    } else {
                        isDeleting = false;
                        currentItem = (currentItem + 1) % animatedHeadingItems.length;
                        timeoutId = setTimeout(typeEffect, 500);
                    }
                }
            }

            typeEffect();
            return () => clearTimeout(timeoutId);

        } else if (animationType === "swirl") {
            const texts = animatedHeadingItems?.map(item => item.animatedHeadingTitle).filter(Boolean) || [];
            if (texts.length === 0) return;

            let currentIndex = 0;
            const container = dynamicWrapperRef.current;
            const swirlWrapper = swirlWrapperRef.current;

            // 🧹 Clean up previous children if any
            if (container) {
                container.innerHTML = "";
            }

            function createWordSpan(text, isActive = false) {
                const wrapper = document.createElement('span');
                wrapper.className = 'fb-animated-heading-dynamic-text';
                if (isActive) wrapper.classList.add('fb-animated-heading-text-active');

                text.split('').forEach((char) => {
                    const letter = document.createElement('span');
                    letter.className = 'fb-animated-heading-dynamic-letter';

                    if (char === ' ') {
                        letter.innerHTML = '&nbsp;';
                        letter.style.display = 'inline-block';
                        letter.style.width = '0.4em';
                    } else {
                        letter.textContent = char;
                    }

                    wrapper.appendChild(letter);
                });

                return wrapper;
            }

            function showNextWord() {
                if (!container) return;

                const oldWord = container.querySelector('.fb-animated-heading-text-active');
                const newWord = createWordSpan(texts[currentIndex], true);
                container.appendChild(newWord);

                const newLetters = newWord.querySelectorAll('.fb-animated-heading-dynamic-letter');


                const totalWidthSubPixel = Array.from(newLetters)
                    .reduce((sum, letter) => sum + letter.getBoundingClientRect().width, 0);

                if (swirlWrapper) {
                    swirlWrapper.style.width = `${totalWidthSubPixel}px`;
                }

                newLetters.forEach((l, i) => {
                    setTimeout(() => {
                        l.classList.add('fb-animated-heading-animation-in');
                    }, i * 30);
                });

                if (oldWord) {
                    oldWord.classList.remove('fb-animated-heading-text-active');
                    const oldLetters = oldWord.querySelectorAll('.fb-animated-heading-dynamic-letter');
                    oldLetters.forEach((l, i) => {
                        setTimeout(() => {
                            l.classList.add('fb-animated-heading-animation-out');
                        }, i * 30);
                    });

                    setTimeout(() => {
                        oldWord.remove();
                    }, oldLetters.length * 30 + 500);
                }

                currentIndex = (currentIndex + 1) % texts.length;
            }

            const firstWord = createWordSpan(texts[currentIndex], true);
            console.log(firstWord);
            if (container) {
                container.appendChild(firstWord);
                const firstLetters = firstWord.querySelectorAll('.fb-animated-heading-dynamic-letter');

                // Calculate initial width immediately
                const totalWidthSubPixel = Array.from(firstLetters)
                    .reduce((sum, letter) => sum + letter.getBoundingClientRect().width, 0);

                if (swirlWrapper) {
                    swirlWrapper.style.width = `${totalWidthSubPixel}px`;
                }

                firstLetters.forEach((l, i) => {
                    setTimeout(() => {
                        l.classList.add('fb-animated-heading-animation-in');
                    }, i * 30);
                });

                currentIndex = (currentIndex + 1) % texts.length;
                const intervalId = setInterval(showNextWord, 3000);

                // ✅ Return Cleanup
                return () => {
                    clearInterval(intervalId);
                    if (container) {
                        container.innerHTML = '';
                    }
                };
            }
        }
    }, [animatedHeadingItems, animationType, animatedHeadingMainTag]);

    const Tag = animatedHeadingMainTag ? animatedHeadingMainTag : "div";

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
            />

            <BlockControls>
                <AlignmentToolbar
                    value={animatedHeadingAlignment[deviceType]}
                    onChange={(value) => setAttributes({ animatedHeadingAlignment: { ...animatedHeadingAlignment, [deviceType]: value } })}
                    controls={['left', 'center', 'right']}
                />
            </BlockControls>

            <div {...blockProps}>
                <div className={`fb-animated-heading-container ${animatedHeadingGlobalWraperClass}`} id={animatedHeadingGlobalWraperID} ref={panelRef}>
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
                                {animatedHeadingItems && animatedHeadingItems.length > 0 && (
                                    <span className="fb-animated-headings" ref={typedTextRef}></span>
                                )}
                                {animatedHeadingCursorSwitch && animatedHeadingCursor && (
                                    <span className="fb-animated-heading-cursor">
                                        {animatedHeadingCursor}
                                    </span>
                                )}
                            </>
                        )}
                        {animationType === "swirl" && (
                            <>
                                {'\u00A0'}
                                <span className="fb-animated-heading-swirl-wrapper" ref={swirlWrapperRef}>
                                    <span
                                        className="fb-animated-heading-dynamic-wrapper"
                                        id="animated-heading-wrapper"
                                        ref={dynamicWrapperRef}
                                    ></span>
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
            <style>{blockStyle}</style>
        </>
    );
}