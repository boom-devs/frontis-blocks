import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
const save = ({ attributes }) => {
    const {
        blockID,
        parentBlockID,
        title,

        /** Start General Settings */
        showSectionLabelSwitcher,
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

    const blockProps = useBlockProps.save({
        className: `fb-vertical-timeline-item-main-wrapper ${parentBlockID} ${blockID}`,
    });

    return (
        <div {...blockProps}>
            <div className={`fb-vertical-timeline-item-wrapper ${verticalTimelineItemWraperClass}`} id={verticalTimelineItemWraperID} >


                {/* Sidebar Content  */}
                <div className="fb-vertical-timeline-side" >
                    {showSectionLabelSwitcher && (
                        <span className="fb-vertical-timeline-label"> {verticalTimelineItemSectionLabel} </span>
                    )}
                    <span className="fb-vertical-timeline-icon">{renderSVG(verticalTimelineItemIcon)}</span>
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
                        <InnerBlocks.Content />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default save;
