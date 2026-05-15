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