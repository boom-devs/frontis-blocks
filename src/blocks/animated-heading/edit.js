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
        typingTextAlignment,
        typingTextItems,
        typingTextMainTag,
        typingTextPrefix,
        typingTextCursorSwitch,
        typingTextCursor,
        typingTextSuffix,

        typingTextGlobalWraperID,
        typingTextGlobalWraperClass,

    } = attributes;

    const blockProps = useBlockProps({
        className: `fb-typing-text-main-wrapper ${blockId}`,
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
        if (!typingTextItems || typingTextItems.length === 0) {
            return;
        }

        let currentItem = 0;
        let charIndex = 0;
        let isDeleting = false;
        let timeoutId;

        function typeEffect() {
            // Get the current text from typingTextItems
            const currentText = typingTextItems[currentItem].typingTextTitle;
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
                    currentItem = (currentItem + 1) % typingTextItems.length;
                    timeoutId = setTimeout(typeEffect, 500);
                }
            }
        }

        typeEffect();
        return () => clearTimeout(timeoutId);
    }, [typingTextItems]);

    const Tag = typingTextMainTag ? typingTextMainTag : "div";

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />

            <BlockControls>
                <AlignmentToolbar
                    value={typingTextAlignment[deviceType]}
                    onChange={(value) => setAttributes({ typingTextAlignment: { ...typingTextAlignment, [deviceType]: value } })}
                    controls={['left', 'center', 'right']}
                />
            </BlockControls>
            
            <div {...blockProps}>
                <div className={`fb-parent-wrapper ${typingTextGlobalWraperClass}`} id={typingTextGlobalWraperID} ref={panelRef}>
                    <Tag className="fb-typing-text-wrapper">
                        {typingTextPrefix && (
                            <RichText
                                tagName="span"
                                className="fb-typing-text-prefix"
                                value={typingTextPrefix}
                                onChange={(value) => setAttributes({ typingTextPrefix: value })}
                            />
                        )}
                        {typingTextItems && typingTextItems.length > 0 && (
                            <span className="fb-typing-texts" ref={typedTextRef}></span>
                        )}
                        {typingTextCursorSwitch && (
                            typingTextCursor && (
                                <span className="fb-typing-text-cursor">
                                    {typingTextCursor}
                                </span>
                            )
                        )}
                        {typingTextSuffix && (
                            <RichText
                                tagName="span"
                                className="fb-typing-text-suffix"
                                value={typingTextSuffix}
                                onChange={(value) => setAttributes({ typingTextSuffix: value })}
                            />
                        )}
                    </Tag>
                </div>
            </div>
        </>
    );
}
