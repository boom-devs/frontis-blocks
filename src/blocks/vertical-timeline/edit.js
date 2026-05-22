import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { select, dispatch } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { times } from 'lodash';

/**
* Internal dependencies
*/
import './editor.scss';

import Inspector from "./inspector";
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generateVerticalTimelineStyle from "./styling";

const ALLOWED_BLOCKS = ["frontis-blocks/vertical-timeline-item"];

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
    const {
        blockID,
        blockStyle,
        timelineChildCount,

        /** Start Class & ID Setting */
        verticalTimelineGlobalZIndex,
        verticalTimelineCustomCSS,
        verticalTimelineWrapperID,
        verticalTimelineWrapperClass,
        /** End Class & ID Setting */
    } = attributes;

    // Handle block ID generation (handles duplication and initial ID)
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-vertical-timeline',
        isSelected,
        attributes,
        setAttributes,
    });

    /** Start Generate Block Style */
    useEffect(() => {
        if (blockID) {
            const css = generateVerticalTimelineStyle(attributes);
            setAttributes({ blockStyle: css });
        }
    }, [attributes, blockID]);
    /** End Generate Block Style */

    /** Start Dynamic Line Positioning in Editor */
    useEffect(() => {
        if (!blockID) return;

        const updateTimelineLine = () => {
            const wrapper = document.querySelector(`.${blockID} .fb-vertical-timeline-inner`);
            if (!wrapper) return;

            const icons = wrapper.querySelectorAll('.fb-vertical-timeline-icon');
            if (icons.length === 0) return;

            const firstIcon = icons[0];
            const lastIcon = icons[icons.length - 1];
            const wrapperRect = wrapper.getBoundingClientRect();
            const firstIconRect = firstIcon.getBoundingClientRect();
            const lastIconRect = lastIcon.getBoundingClientRect();
            const iconLeft = firstIconRect.left - wrapperRect.left + firstIconRect.width / 2;
            const lineTop = firstIconRect.top - wrapperRect.top + firstIconRect.height / 2;
            const lineBottom = wrapperRect.bottom - lastIconRect.bottom + lastIconRect.height / 2;

            wrapper.style.setProperty('--timeline-line-left', `${iconLeft}px`);
            wrapper.style.setProperty('--timeline-line-top', `${lineTop}px`);
            wrapper.style.setProperty('--timeline-line-bottom', `${lineBottom}px`);
        };

        const timer = setTimeout(updateTimelineLine, 200);


        const wrapper = document.querySelector(`.${blockID} .fb-vertical-timeline-inner`);
        let observer;
        if (wrapper) {
            observer = new ResizeObserver(() => {
                updateTimelineLine();
            });
            observer.observe(wrapper);


            const icons = wrapper.querySelectorAll('.fb-vertical-timeline-icon');
            icons.forEach(icon => observer.observe(icon));
        }

        return () => {
            clearTimeout(timer);
            if (observer) {
                observer.disconnect();
            }
        };
    }, [attributes, blockID, timelineChildCount]);
    /** End Dynamic Line Positioning in Editor */

    /** Start Timeline Scroll Progress (Editor & Frontend Safe) */
    useEffect(() => {
        if (!blockID) return;

        const wrapper = document.querySelector(`.${blockID} .fb-vertical-timeline-inner`);
        if (!wrapper) return;

        // Intersection Observer সেটআপ করছি যা স্ক্রিনে আইটেম আসার প্রোগ্রেস ট্র্যাক করবে
        const observerOptions = {
            root: null, // এডিটর আইফ্রেম বা উইন্ডো অটো ডিটেক্ট করবে
            rootMargin: '-20% 0px -40% 0px', // স্ক্রিনের মাঝ বরাবর ট্রিগার করার জন্য মার্জিন
            threshold: Array.from({ length: 101 }, (_, i) => i / 100) // ০ থেকে ১০০% পর্যন্ত স্মুথ প্রোগ্রেস
        };

        const handleIntersect = (entries) => {
            entries.forEach(entry => {
                const rect = entry.boundingClientRect;
                const windowHeight = window.innerHeight;

                // আইটেমটি স্ক্রিনের কতটুকু ভেতরে আছে তার হিসাব
                const totalHeight = rect.height;
                const visibleTop = rect.top;

                let progress = (windowHeight * 0.5 - visibleTop) / totalHeight;
                progress = Math.max(0, Math.min(progress, 1));

                wrapper.style.setProperty('--timeline-progress-scale', progress);
            });
        };

        const progressObserver = new IntersectionObserver(handleIntersect, observerOptions);
        progressObserver.observe(wrapper);

        return () => {
            if (progressObserver) {
                progressObserver.disconnect();
            }
        };
    }, [blockID, timelineChildCount]);
    /** End Timeline Scroll Progress */


    const blockProps = useBlockProps({
        className: `fb-vertical-timeline-main-wrapper ${blockID}`,
    });

    const addTimelineItem = () => {
        const innerBlocks = [
            ...select("core/block-editor").getBlocks(clientId),
        ];
        let count = innerBlocks ? innerBlocks.length : 0;

        const newBlock = createBlock("frontis-blocks/vertical-timeline-item", {
            parentBlockID: blockID,
            title: __(`Timeline title ${count + 1}`, "frontis-blocks"),
        });

        const newInnerBlocks = [...innerBlocks, newBlock];

        dispatch("core/block-editor")
            .replaceInnerBlocks(clientId, newInnerBlocks)
            .then(() => {
                setAttributes({ timelineChildCount: count + 1 });
            });
    };

    const timelineItemTemplate = (verticaltimelineChildCount) => {
        return times(verticaltimelineChildCount, (n) => [
            "frontis-blocks/vertical-timeline-item",
            {
                itemId: n + 1,
                title: __(`Timeline title ${n + 1}`, "frontis-blocks"),
                parentBlockID: blockID,
            },
        ]);
    };

    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}

            <div {...blockProps}>
                <div className={`fb-vertical-timeline-wrapper ${verticalTimelineWrapperClass}`} id={verticalTimelineWrapperID}>
                    <div className="fb-vertical-timeline-inner">
                        <InnerBlocks
                            template={timelineItemTemplate(timelineChildCount)}
                            templateLock={false}
                            allowedBlocks={ALLOWED_BLOCKS}
                        />
                    </div>
                    <div className="fb-timeline-add-button-wrapper">
                        <Button
                            className="fb-timeline-add-button"
                            label={__("Add Item", "frontis-blocks")}
                            icon="plus"
                            onClick={addTimelineItem}
                        >
                            <span className="fb-timeline-add-button-label">
                                {__("Add Item", "frontis-blocks")}
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
            <style>{blockStyle}</style>
        </>
    );
}