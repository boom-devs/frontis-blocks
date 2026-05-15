import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";

const save = ({ attributes }) => {
    const {
        blockID,
        parentBlockID,
        title,

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
                <div className="fb-vertical-timeline-item-inner-wrapper">
                    <div className="fb-vertical-timeline-item-phase-title">
                        <p>
                            2026
                        </p>
                    </div>
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
