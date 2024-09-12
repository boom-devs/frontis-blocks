import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const {
        blockID,
        counterNumber,
        counterTitle,
        counterColor,
        titleColor,
        counterBgColor,
        showThousandsSeparator,
    } = attributes;

    const blockProps = useBlockProps.save();

    // Prepare the formatted counter number for the frontend
    const formattedCounterNumber = showThousandsSeparator
        ? Number(counterNumber || 0).toLocaleString()
        : counterNumber || 0;

    return (
        <div {...blockProps} id={blockID}>
            <div className="fb-counter-wrapper" style={{ backgroundColor: counterBgColor || 'transparent' }}>
                <div className="fb-counter-item">
                    <span
                        className="fb-counter-number"
                        style={{ color: counterColor}}
                        aria-label={counterNumber} // Store the final number in the aria-label for animation
                    >
                        0 {/* Initial value for animation */}
                    </span>
                    <span
                        className="fb-counter-title"
                        style={{ color: titleColor }}
                    >
                        {counterTitle}
                    </span>
                </div>
            </div>
        </div>
    );
}
