import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import {useRef} from "@wordpress/element";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,
		counterNumber,
		counterTitle,
		counterPrefix,
		counterSuffix,
		showThousandsSeparator,
		icon,
		mediaSwitcher,
		counterMediaUrl,

		counterGlobalWraperID,
		counterGlobalWraperClass,

		counterDesktopSwitcher,
		counterTabletSwitcher,
		counterMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps.save({
        className: `fb-counter-main-wrapper ${blockID} ${counterDesktopSwitcher && 'fb-desktop-responsive'} ${counterTabletSwitcher && 'fb-tablet-responsive'} ${counterMobileSwitcher && 'fb-mobile-responsive'}`,
    });

	// Prepare the formatted counter number for the frontend
	const formattedCounterNumber = showThousandsSeparator
		? Number(counterNumber || 0).toLocaleString()
		: counterNumber || 0;


	return (
		<div {...blockProps}>
			<div className={`fb-parent-wrapper fb-counter-wrapper ${blockID} ${counterGlobalWraperClass}`} id={counterGlobalWraperID}>
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
						<span className={`fb-counter-number-prefix`}>{counterPrefix}</span>
						<span
							className="fb-counter-number"
							aria-label={counterNumber} // Store the final number in the aria-label for animation
						>
                        0 {/* Initial value for animation */}</span>
						<span className={`fb-counter-number-suffix`}>{counterSuffix}</span>
					</div>
					<span className="fb-counter-title">
                            {counterTitle}
                        </span>
				</div>
			</div>
		</div>
	);
}
