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
import imageComparisonStyle from "./styling";
import { useDeviceType } from '@Config/displayType';
import { applyFilters } from '@wordpress/hooks';
import UpgradeToProPopup from '@Utils/upgradeToProPopup';
import getProActive from '@Utils/getProActive';

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
        comparisonWraperClass,
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

    // Set default images on mount if not already set
    useEffect(() => {
        if (typeof FrontisBlocksData !== 'undefined') {
            const defaultImg = FrontisBlocksData.pluginUrl + 'assets/images/preset-bg.jpg';
            const newAttrs = {};
            if (!beforeImageUrl) {
                newAttrs.beforeImageUrl = defaultImg;
            }
            if (!afterImageUrl) {
                newAttrs.afterImageUrl = defaultImg;
            }
            if (Object.keys(newAttrs).length > 0) {
                setAttributes(newAttrs);
            }
        }
    }, []);

    /** Start Generate Block Style */
    useEffect(() => {
        if (blockID) {
            const css = imageComparisonStyle(attributes);
            if (blockStyle !== css) {
                setAttributes({ blockStyle: css });
            }
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

        const ownerDoc = wrapper.ownerDocument || document;
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
            ownerDoc.removeEventListener('mousemove', onDragMove, true);
            ownerDoc.removeEventListener('mouseup', onDragEnd, true);
            ownerDoc.removeEventListener('touchmove', onDragMove, true);
            ownerDoc.removeEventListener('touchend', onDragEnd, true);

            if (ownerDoc !== document) {
                document.removeEventListener('mousemove', onDragMove, true);
                document.removeEventListener('mouseup', onDragEnd, true);
                document.removeEventListener('touchmove', onDragMove, true);
                document.removeEventListener('touchend', onDragEnd, true);
            }
        };

        ownerDoc.addEventListener('mousemove', onDragMove, true);
        ownerDoc.addEventListener('mouseup', onDragEnd, true);
        ownerDoc.addEventListener('touchmove', onDragMove, true);
        ownerDoc.addEventListener('touchend', onDragEnd, true);

        if (ownerDoc !== document) {
            document.addEventListener('mousemove', onDragMove, true);
            document.addEventListener('mouseup', onDragEnd, true);
            document.addEventListener('touchmove', onDragMove, true);
            document.addEventListener('touchend', onDragEnd, true);
        }
    };

    const blockProps = useBlockProps({
        className: `fb-image-comparison-main-wrapper ${blockID}`,
    });

    const isProActive = getProActive();
    const imageComparisonAvailable = applyFilters('frontisblocks-image-comparison-available', false);

    if(!imageComparisonAvailable || !isProActive) {
        return (
            <UpgradeToProPopup />
        )
    }

    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes} />
            )}
            <div {...blockProps}>
                <div className={`fb-image-comparison-inner-wrapper ${comparisonWraperClass} `} id={comparisonWraperID}>
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
                                {__(beforeImageLabel || "Before")}
                            </div>
                        )}
                        {afterImgShowLabelSwitcher && (
                            <div className="fb-image-comparison-label fb-image-comparison-after-label">
                                {__(afterImageLabel || "After")}
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
                </div>
            </div>
            <style>{blockStyle}</style>
        </>
    )
}