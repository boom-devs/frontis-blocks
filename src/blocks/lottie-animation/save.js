// save.js
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
	const {
		blockID,
		lottieAnimationJsonTypeSwitcher,
		lottieAnimationImageUrl,
		lottieAnimationJsonUrl,
		lottieRenderer = 'svg',
		lottieLoop = true,
		lottieAutoplay = true,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-lottie-animation-main-wrapper ${blockID}`,
	});

	// Determine source
	const isFile = lottieAnimationJsonTypeSwitcher === 'json-file';
	const sourceUrl = isFile ? lottieAnimationImageUrl : lottieAnimationJsonUrl;

	if (!sourceUrl) {
		return (
			<div {...blockProps}>
				<div className="fb-parent-wrapper fb-lottie-animation-container">
					<div style={{ padding: '50px', textAlign: 'center', color: '#999' }}>
						{__('No Lottie animation selected.', 'frontis-blocks')}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div {...blockProps}>
			<div
				className={`fb-parent-wrapper fb-lottie-animation-container ${blockID}`}
				data-json-url={sourceUrl}
				data-renderer={lottieRenderer}
				data-loop={lottieLoop}
				data-autoplay={lottieAutoplay}
				style={{ width: '100%' }}
			/>
		</div>
	);
}