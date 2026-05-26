import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockID,
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

    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-image-comparison-main-wrapper ${blockID}`,
    });

    if (!beforeImageUrl || !afterImageUrl) {
        return null;
    }

    return (
        <div {...blockProps}>
            <div className="fb-image-comparison-inner-wrapper">
                <div
                    className="fb-image-comparison-slider-wrapper"
                    data-direction={comparisonDragDirection || 'horizontal'}
                    data-offset={JSON.stringify(comparisonInitialOffset)}
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

                    <div className="fb-image-comparison-before-image">
                        <img src={beforeImageUrl} alt={beforeImageAlt || ""} />
                    </div>
                    <div className="fb-image-comparison-after-image fb-img-comp-overlay">
                        <img src={afterImageUrl} alt={afterImageAlt || ""} />
                    </div>
                </div>
            </div>
        </div>
    );
}