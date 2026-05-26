import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockID,
        verticalTimelineWrapperID,
        verticalTimelineWrapperClass,
    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-vertical-timeline-main-wrapper ${blockID}`,
    });

    return (
        <div {...blockProps}>
            <div className={`fb-vertical-timeline-wrapper ${verticalTimelineWrapperClass}`} id={verticalTimelineWrapperID}>
                <div className="fb-vertical-timeline-inner">
                    <InnerBlocks.Content />
                </div>
            </div>
        </div>
    );
}