import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import { useRef, useEffect } from '@wordpress/element';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import Inspector from "./inspector";
import './editor.scss';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';
import {useDeviceType} from "@Config/displayType";

export default function Edit({ attributes, setAttributes, clientId }) {
    const { 
        blockId,
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

    } = attributes;

    const blockProps = useBlockProps({
        className: `fb-animated-heading-main-wrapper ${blockId}`,
    });

    const deviceType = useDeviceType();

    /**
     * Manages tab button settings and switches to block settings on click
     */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);

    // Ref for the dynamic typed text span
    const typedTextRef = useRef(null);

    useEffect(() => {
        if (!animatedHeadingItems ||animatedHeadingItems.length === 0) {
            return;
        }

        if (animationType === "typing") {

            let currentItem = 0;
            let charIndex = 0;
            let isDeleting = false;
            let timeoutId;

            function typeEffect() {
                // Get the current text fromanimatedHeadingItems
                const currentText =animatedHeadingItems[currentItem].animatedHeadingTitle;
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
                        currentItem = (currentItem + 1) %animatedHeadingItems.length;
                        timeoutId = setTimeout(typeEffect, 500);
                    }
                }
            }

            typeEffect();
            return () => clearTimeout(timeoutId);
        }
    }, [animatedHeadingItems, animationType]);

    const Tag =animatedHeadingMainTag ?animatedHeadingMainTag : "div";

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
                    onChange={(value) => setAttributes({animatedHeadingAlignment: { ...animatedHeadingAlignment, [deviceType]: value } })}
                    controls={['left', 'center', 'right']}
                />
            </BlockControls>
            
            <div {...blockProps}>
                <div className={`fb-animated-heading-container ${animatedHeadingGlobalWraperClass}`} id={animatedHeadingGlobalWraperID} ref={panelRef}>
                    <Tag className="fb-animated-heading-wrapper">
                        {animatedHeadingPrefix && (
                            <RichText
                                tagName="span"
                                className="fb-animated-heading-prefix"
                                value={animatedHeadingPrefix}
                                onChange={(value) => setAttributes({animatedHeadingPrefix: value })}
                            />
                        )}

                        {animationType === "typing" && (
                            <>
                                {animatedHeadingItems &&animatedHeadingItems.length > 0 && (
                                    <span className="fb-animated-headings" ref={typedTextRef}></span>
                                )}
                                {animatedHeadingCursorSwitch &&animatedHeadingCursor && (
                                    <span className="fb-animated-heading-cursor">
                                        {animatedHeadingCursor}
                                    </span>
                                )}
                            </>
                        )}

                        {animatedHeadingSuffix && (
                            <RichText
                                tagName="span"
                                className="fb-animated-heading-suffix"
                                value={animatedHeadingSuffix}
                                onChange={(value) => setAttributes({animatedHeadingSuffix: value })}
                            />
                        )}
                    </Tag>
                </div>
            </div>
        </>
    );
}
