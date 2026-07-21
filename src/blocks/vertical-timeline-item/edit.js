import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps, RichText } from "@wordpress/block-editor";
import { useEffect } from "@wordpress/element";
import Inspector from './inspector';
import './editor.scss';
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generateVerticalTimelineItemStyle from './styling';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function Edit({ attributes, setAttributes, isSelected, clientId, context }) {

    const {
        parentBlockID,
        blockID,
        blockStyle,
        title,
        content,

        /** Start General Settings */
        inheritedShowSectionLabelSwitcher,
        verticalTimelineItemSectionLabel,
        showPhaseTitleSwitcher,
        verticalTimelineItemPhaseTitle,
        verticalTimelineItemIcon,
        /** End General Settings */

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
            if (blockStyle !== css) {
                setAttributes({ blockStyle: css });
            }
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

    useEffect(() => {
        setAttributes({
            inheritedShowSectionLabelSwitcher: context["fb/showSectionLabelSwitcher"] !== undefined ? context["fb/showSectionLabelSwitcher"] : true,
        });
    }, [context["fb/showSectionLabelSwitcher"]]);


    const blockProps = useBlockProps({
        className: `fb-vertical-timeline-item-main-wrapper ${parentBlockID} ${blockID}`,
    });

    const defaultTemplate = [
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
    ];

    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}
            <div {...blockProps}>
                <div className={`fb-vertical-timeline-item-wrapper ${verticalTimelineItemWraperClass}`} id={verticalTimelineItemWraperID} >

                    {/* Sidebar Content  */}
                    <div className="fb-vertical-timeline-side" >
                        {inheritedShowSectionLabelSwitcher && (
                            <span className="fb-vertical-timeline-label"> {verticalTimelineItemSectionLabel} </span>
                        )}
                        <span className="fb-vertical-timeline-icon">  {renderSVG(verticalTimelineItemIcon)} </span>
                    </div>

                    <div className="fb-vertical-timeline-item-inner-wrapper">
                        {showPhaseTitleSwitcher && (
                            <div className="fb-vertical-timeline-item-phase-title">
                                <p>
                                    {verticalTimelineItemPhaseTitle}
                                </p>
                            </div>
                        )}
                        {/* WYSIWYG Content  */}
                        <div className="fb-vertical-timeline-item-content">
                            <InnerBlocks
                                template={defaultTemplate}
                                templateLock={false}
                            />
                        </div>
                    </div>
                </div>
            </div >
            <style>{blockStyle}</style>
        </>
    );
}