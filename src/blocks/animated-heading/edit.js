import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { useRef, useEffect } from '@wordpress/element';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import Inspector from "./inspector";
import './editor.scss';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import { useDeviceType } from "@Config/displayType";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register the GSAP TextPlugin
gsap.registerPlugin(TextPlugin);

export default function Edit({ attributes, setAttributes, clientId }) {
    const { 
        blockId,
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
        className: `fb-animated-Heading-main-wrapper ${blockId}`,
    });

    const deviceType = useDeviceType();

    // Ref for the dynamic typed text span
    const typedTextRef = useRef(null);

    useEffect(() => {
        if (!animatedHeadingItems || animatedHeadingItems.length === 0) {
            return;
        }

        let currentItem = 0;
        const items = animatedHeadingItems.map(item => item.animatedHeadingTitle); // Get all items to type
        const container = typedTextRef.current;

        // Initialize GSAP typing effect
        const typeEffect = () => {
            const currentText = items[currentItem];
            let charIndex = 0;
            let isDeleting = false;

            // Clear the container initially
            container.textContent = '';

            // Typing and deleting function using GSAP
            const typing = () => {
                const displayText = currentText.substring(0, charIndex);
                gsap.to(container, {
                    text: displayText,
                    duration: 0.1, // Duration based on text length
                    ease: "power1.inOut",
                    onComplete: () => {
                        if (!isDeleting) {
                            if (charIndex < currentText.length) {
                                charIndex++;
                                typing();
                            } else {
                                isDeleting = true;
                                setTimeout(typing, 1000); // Wait before deleting
                            }
                        } else {
                            if (charIndex > 0) {
                                charIndex--;
                                typing();
                            } else {
                                isDeleting = false;
                                currentItem = (currentItem + 1) % items.length;
                                setTimeout(typing, 500); // Wait before typing next item
                            }
                        }
                    }
                });
            };

            typing(); // Start typing
        };

        typeEffect(); // Initiate the typing effect on load

        return () => {
            gsap.killTweensOf(typedTextRef.current); // Cleanup GSAP animations on component unmount
        };
    }, [animatedHeadingItems]);

    const Tag = animatedHeadingMainTag ? animatedHeadingMainTag : "div";

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
                    onChange={(value) => setAttributes({ animatedHeadingAlignment: { ...animatedHeadingAlignment, [deviceType]: value } })}
                    controls={['left', 'center', 'right']}
                />
            </BlockControls>

            <div {...blockProps}>
                <div className={`fb-parent-wrapper ${animatedHeadingGlobalWraperClass}`} id={animatedHeadingGlobalWraperID}>
                    <Tag className="fb-animated-Heading-wrapper">
                        {animatedHeadingPrefix && (
                            <RichText
                                tagName="span"
                                className="fb-animated-Heading-prefix"
                                value={animatedHeadingPrefix}
                                onChange={(value) => setAttributes({ animatedHeadingPrefix: value })}
                            />
                        )}
                        {animatedHeadingItems && animatedHeadingItems.length > 0 && (
                            <span className="fb-animated-Heading-texts" ref={typedTextRef}>
                                {animatedHeadingItems.map(item => (
                                    <span key={item.id} className="fb-animated-Heading-item">
                                        {item.animatedHeadingTitle}
                                    </span>
                                ))}
                            </span>
                        )}
                        {animatedHeadingCursorSwitch && (
                            animatedHeadingCursor && (
                                <span className="fb-animated-Heading-cursor">
                                    {animatedHeadingCursor}
                                </span>
                            )
                        )}
                        {animatedHeadingSuffix && (
                            <RichText
                                tagName="span"
                                className="fb-animated-Heading-suffix"
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
