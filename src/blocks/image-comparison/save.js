import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockID,
        beforeImageUrl,
        beforeImageAlt,
        afterImageUrl,
        afterImageAlt,
        blockStyle,

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
        clickToMoveSwitcher,

    } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-image-comparison-main-wrapper ${blockID}`,
    });

    if (!beforeImageUrl || !afterImageUrl) {
        return null;
    }

    return (
        <div {...blockProps}>
           <div className={`fb-image-comparison-inner-wrapper ${comparisonWraperClass} `}id={comparisonWraperID}>
                <div
                    className={`fb-image-comparison-slider-wrapper ${disableOverlaySwitcher ? 'fb-disable-overlay' : ''}`}
                    data-direction={comparisonDragDirection || 'horizontal'}
                    data-offset={JSON.stringify(comparisonInitialOffset)}
                    data-hover={hoverToSlideSwitcher ? 'true' : 'false'}
                    data-click={clickToMoveSwitcher ? 'true' : 'false'}
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

                    <div className="fb-image-comparison-before-image fb-img-comp-overlay">
                        <img src={beforeImageUrl} alt={beforeImageAlt || ""} />
                    </div>
                    <div className="fb-image-comparison-after-image">
                        <img src={afterImageUrl} alt={afterImageAlt || ""} />
                    </div>
                </div>
            </div>
        </div>
    );
}