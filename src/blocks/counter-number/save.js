import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {useRef} from "@wordpress/element";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,
		DeviceType,
		counterNumber,
		counterPrefix,
		counterSuffix,
		counterTitle,
		showThousandsSeparator,
		icon,
		mediaSwitcher,
		counterMediaUrl,


		counterNumberFontColorSwitcher,
		counterNumberFontColor,
		counterNumberFontHoverColor,

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

		counterNumberMarginUnits,
		counterNumberMarginDesktop,
		counterNumberMarginTab,
		counterNumberMarginMobile,
		counterNumberMarginLink,


		counterNumberTitleFontColorSwitcher,
		counterNumberTitleFontColor,
		counterNumberTitleFontHoverColor,

		counterNumberTitleFontFamily,
		counterNumberTitleFontSize,
		counterNumberTitleFontSizeUnits,
		counterNumberTitleFontWeight,
		counterNumberTitleFontStyle,
		counterNumberTitleTextTransform,
		counterNumberTitleTextDecoration,
		counterNumberTitleLetterSpacing,
		counterNumberTitleLetterSpacingUnits,
		counterNumberTitleLineHeight,
		counterNumberTitleLineHeightUnits,

		counterNumberTitleMarginUnits,
		counterNumberTitleMarginDesktop,
		counterNumberTitleMarginTab,
		counterNumberTitleMarginMobile,
		counterNumberTitleMarginLink,
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
					<div className={`fb-counter-icon-wrapper`}>
						{/* Conditionally render image or icon */}
						{mediaSwitcher === 'image' && counterMediaUrl && (
							<img src={counterMediaUrl} alt={__('Counter media', 'text-domain')} />
						)}
						{mediaSwitcher === 'icon' && icon && (
							<div className="fb-counter-icon">{renderSVG(icon)}</div>
						)}
					</div>
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
