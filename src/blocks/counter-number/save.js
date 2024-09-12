import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {useRef} from "@wordpress/element";

export default function save({ attributes }) {
	const {
		blockID,
		counterNumber,
		counterPrefix,
		counterSuffix,
		counterTitle,
		showThousandsSeparator,
		icon,
		mediaSwitcher,

		counterNumberFontFamily,
		counterNumberFontSize,
		counterNumberFontSizeUnits,
		counterNumberFontWeight,
		counterNumberFontStyle,
		counterNumberTextTransform,
		counterNumberTextDecoration,
		counterNumberLetterSpacing,
		counterNumberLetterSpacingUnits,
		counterNumberLineHeight,
		counterNumberLineHeightUnits,

		counterTitleFontFamily,
		counterTitleFontSize,
		counterTitleFontSizeUnits,
		counterTitleFontWeight,
		counterTitleFontStyle,
		counterTitleTextTransform,
		counterTitleTextDecoration,
		counterTitleLetterSpacing,
		counterTitleLetterSpacingUnits,
		counterTitleLineHeight,
		counterTitleLineHeightUnits,

	} = attributes;

	const blockProps = useBlockProps.save();

	// Prepare the formatted counter number for the frontend
	const formattedCounterNumber = showThousandsSeparator
		? Number(counterNumber || 0).toLocaleString()
		: counterNumber || 0;


	return (
		<div {...blockProps} id={blockID}>
			<div className="fb-counter-wrapper">
				<div className="fb-counter-item">
					<div className={`fb-counter-number-wrapper`}>

						<span
							className="fb-counter-number"
							aria-label={counterNumber} // Store the final number in the aria-label for animation
						>
                        0 {/* Initial value for animation */}
                    </span>
					</div>
					<span className="fb-counter-title">
                            {counterTitle}
                        </span>
				</div>
			</div>
		</div>
	);
}
