import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps, RichText } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import Inspector from './inspector';
import './editor.scss';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generateVerticalTimelineItemStyle from './styling';

export default function Edit(props) {
    const { attributes, setAttributes, isSelected, clientId, context } = props;

    const {
        parentBlockID,
        blockID,
        blockStyle,
        title,
        content,

        /** Start Class & ID Setting */
        verticalTimelineItemGlobalZIndex,
        verticalTimelineItemCustomCSS,
        verticalTimelineItemWraperID,
        verticalTimelineItemWraperClass,
        /** End Class & ID Setting */
    } = attributes;

    // Handle block ID generation
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-vertical-timeline-item',
        isSelected,
        attributes,
        setAttributes,
    });

    /** Start Generate Block Style */
    useEffect(() => {
        if (blockID) {
            const css = generateVerticalTimelineItemStyle(attributes);
            setAttributes({ blockStyle: css });
        }
    }, [attributes, blockID]);

    // Sync context to attributes
    useEffect(() => {
        if (context["fb/timelineparentBlockID"]) {
            setAttributes({
                parentBlockID: context["fb/timelineparentBlockID"],
            });
        }
    }, [context["fb/timelineparentBlockID"]]);

    const blockProps = useBlockProps({
        className: `fb-vertical-timeline-item-main-wrapper ${parentBlockID} ${blockID}`,
    });

    return (
        <>
            <Inspector {...props} />
            <div {...blockProps}>
                <div className={`fb-vertical-timeline-item-wrapper ${verticalTimelineItemWraperClass}`}  id={verticalTimelineItemWraperID} >
                    <div className="fb-vertical-timeline-item-inner-wrapper">
                        <div className="fb-vertical-timeline-item-phase-title">
                            <p>
                                2026
                            </p>
                        </div>
                        {/* WYSIWYG Content  */}
                        <div className="fb-vertical-timeline-item-content">
                            <InnerBlocks
                                template={[
                                    [
                                        'frontis-blocks/advanced-heading',
                                        {
                                            headingText: 'Defining the Blueprint',
                                            headingTag: 'h2',
                                            headingMarginUnits: 'px',
                                            headingDesktopMargin: {
                                                top: '15',
                                                bottom: '10',
                                                left: '0',
                                                right: '0',
                                            },
                                        },
                                    ],
                                    [
                                        'frontis-blocks/advanced-paragraph',
                                        {
                                            paragraphText:
                                                'Every great project starts with a deep dive into data. We analyze user needs and market gaps to build a solid foundation.',
                                        },
                                    ],
                                ]
                                }
                                templateLock={false}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <style>{blockStyle}</style>
        </>
    );
}
