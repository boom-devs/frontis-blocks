import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import {
    useBlockProps,
} from '@wordpress/block-editor';

/**
* Internal dependencies
*/
import './editor.scss';

import Inspector from "./inspector";
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import imageComparisonStyle from "./styling";
import { useDeviceType } from '@Config/displayType';

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
    const deviceType = useDeviceType();
    const {
        blockID,
        blockStyle,
        beforeImageUrl,
        beforeImageAlt,
        afterImageUrl,
        afterImageAlt,

        /** Start Before Image Label */
        beforeImgShowLabelSwitcher,
        beforeImageLabel,
        /** End Before Image Label */

        /** Start After Image Label */
        afterImgShowLabelSwitcher,
        afterImageLabel,
        /** End After Image Label */

        /** Start Comparison Drag Direction */
        comparisonDragDirection,
        /** End Comparison Drag Direction */

        /** Start Initial Offset */
        comparisonInitialOffset,
        /** End Initial Offset */

        /** Start Custom CSS */
        comparisonCustomCSS,
        /** End Custom CSS */

        /** Start Wrapper ID */
        comparisonWraperID,
        /** End Wrapper ID */

        disableOverlaySwitcher,
        hoverToSlideSwitcher,
        clickToMoveSwitcher

    } = attributes;

    const activeOffset = comparisonInitialOffset?.[deviceType] !== undefined ? comparisonInitialOffset[deviceType] : 50;
    const isVertical = comparisonDragDirection === 'vertical';

    const overlayStyle = isVertical ? {
        clipPath: `inset(0px 0px ${100 - activeOffset}% 0px)`,
        WebkitClipPath: `inset(0px 0px ${100 - activeOffset}% 0px)`
    } : {
        clipPath: `inset(0px ${100 - activeOffset}% 0px 0px)`,
        WebkitClipPath: `inset(0px ${100 - activeOffset}% 0px 0px)`
    };

    const sliderStyle = isVertical ? {
        top: `${activeOffset}%`,
        left: '50%'
    } : {
        left: `${activeOffset}%`,
        top: '50%'
    };

    // Handle block ID generation (handles duplication and initial ID)
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-image-comparison',
        isSelected,
        attributes,
        setAttributes,
    });

    /** Start Generate Block Style */
    useEffect(() => {
        if (blockID) {
            const css = imageComparisonStyle(attributes);
            setAttributes({ blockStyle: css });
        }
    }, [attributes, blockID]);
    /** End Generate Block Style */

    const updatePosition = (clientX, clientY, wrapper) => {
        if (clientX === undefined || clientY === undefined) return;
        const rect = wrapper.getBoundingClientRect();
        let pct;
        if (isVertical) {
            let y = clientY - rect.top;
            if (y < 0) y = 0;
            if (y > rect.height) y = rect.height;
            pct = (y / rect.height) * 100;
        } else {
            let x = clientX - rect.left;
            if (x < 0) x = 0;
            if (x > rect.width) x = rect.width;
            pct = (x / rect.width) * 100;
        }

        let currentOffsetObj = {};
        if (typeof comparisonInitialOffset === 'object' && comparisonInitialOffset !== null) {
            currentOffsetObj = { ...comparisonInitialOffset };
        } else if (typeof comparisonInitialOffset === 'string' || typeof comparisonInitialOffset === 'number') {
            currentOffsetObj = {
                Desktop: String(comparisonInitialOffset),
                Tablet: String(comparisonInitialOffset),
                Mobile: String(comparisonInitialOffset)
            };
        }

        setAttributes({
            comparisonInitialOffset: {
                ...currentOffsetObj,
                [deviceType]: String(Math.round(pct))
            }
        });
    };

    const handleMouseMoveHover = (e) => {
        if (!hoverToSlideSwitcher) return;
        const wrapper = e.currentTarget;
        updatePosition(e.clientX, e.clientY, wrapper);
    };

    const handleTouchMoveHover = (e) => {
        if (!hoverToSlideSwitcher) return;
        const wrapper = e.currentTarget;
        const touch = e.touches && e.touches.length > 0 ? e.touches[0] : null;
        if (touch) {
            updatePosition(touch.clientX, touch.clientY, wrapper);
        }
    };

    const handleStartDrag = (e) => {
        if (hoverToSlideSwitcher) return;

        if (!clickToMoveSwitcher && !e.target.closest('.fb-image-comparison-slider')) {
            return;
        }

        if (e.target.closest('.fb-image-comparison-label')) {
            return;
        }

        e.preventDefault();
        const wrapper = e.currentTarget.closest('.fb-image-comparison-slider-wrapper');
        if (!wrapper) return;

        const touches = e.touches || (e.nativeEvent && e.nativeEvent.touches);
        const hasTouch = touches && touches.length > 0;

        if (clickToMoveSwitcher) {
            const clientX = hasTouch ? touches[0].clientX : e.clientX;
            const clientY = hasTouch ? touches[0].clientY : e.clientY;
            updatePosition(clientX, clientY, wrapper);
        }

        const onDragMove = (event) => {
            const dragTouches = event.touches || (event.nativeEvent && event.nativeEvent.touches);
            const hasDragTouch = dragTouches && dragTouches.length > 0;
            const clientX = hasDragTouch ? dragTouches[0].clientX : event.clientX;
            const clientY = hasDragTouch ? dragTouches[0].clientY : event.clientY;
            updatePosition(clientX, clientY, wrapper);
        };

        const onDragEnd = () => {
            document.removeEventListener('mousemove', onDragMove, true);
            document.removeEventListener('mouseup', onDragEnd, true);
            document.removeEventListener('touchmove', onDragMove, true);
            document.removeEventListener('touchend', onDragEnd, true);
        };

        document.addEventListener('mousemove', onDragMove, true);
        document.addEventListener('mouseup', onDragEnd, true);
        document.addEventListener('touchmove', onDragMove, true);
        document.addEventListener('touchend', onDragEnd, true);
    };

    const blockProps = useBlockProps({
        className: `fb-image-comparison-main-wrapper ${blockID}`,
    });

    const hasImages = beforeImageUrl && afterImageUrl;

    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes} />
            )}
            <div {...blockProps}>
                <div className={`fb-image-comparison-inner-wrapper ${comparisonCustomCSS} `}id={comparisonWraperID}>
                    {hasImages ? (
                        <div
                            className={`fb-image-comparison-slider-wrapper ${disableOverlaySwitcher ? 'fb-disable-overlay' : ''}`}
                            data-direction={comparisonDragDirection || 'horizontal'}
                            onMouseMove={handleMouseMoveHover}
                            onTouchMove={handleTouchMoveHover}
                            onMouseDown={handleStartDrag}
                            onTouchStart={handleStartDrag}
                        >

                            {beforeImgShowLabelSwitcher && (
                                <div className="fb-image-comparison-label fb-image-comparison-before-label">
                                    {beforeImageLabel || "Before"}
                                </div>
                            )}

                            {afterImgShowLabelSwitcher && (
                                <div className="fb-image-comparison-label fb-image-comparison-after-label">
                                    {afterImageLabel || "After"}
                                </div>
                            )}

                            <div className="fb-image-comparison-before-image fb-img-comp-overlay" style={overlayStyle}>
                                <img src={beforeImageUrl} alt={beforeImageAlt || ""} />
                            </div>
                            <div className="fb-image-comparison-after-image">
                                <img src={afterImageUrl} alt={afterImageAlt || ""} />
                            </div>
                            <div 
                                className="fb-image-comparison-slider" 
                                style={sliderStyle}
                            >
                                <div className="fb-slider-arrows">
                                    <span className="fb-arrow-left"></span>
                                    <span className="fb-arrow-right"></span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="fb-image-comparison-placeholder">
                            <div className="fb-image-comparison-placeholder-inner">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h4>{__("Image Comparison Slider", "frontis-blocks")}</h4>
                                <p>{__("Please select 'Before' and 'After' images in the Block Settings panel on the right.", "frontis-blocks")}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <style>{blockStyle}</style>
        </>
    )
}