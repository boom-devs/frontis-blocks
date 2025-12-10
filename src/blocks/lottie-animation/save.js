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
		lottieAnimationSpeed = 1,
		lottieEffectsOnHover = 'none',
		lottieAnimationReverse = false,
		lottieAnimationDesktopSwitcher,
		lottieAnimationTabletSwitcher,
		lottieAnimationMobileSwitcher,
		lottieAnimationGlobalWraperClass,
		lottieAnimationGlobalWraperID
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-lottie-animation-main-wrapper ${blockID} ${lottieAnimationDesktopSwitcher && 'fb-desktop-responsive'} ${lottieAnimationTabletSwitcher && 'fb-tablet-responsive'} ${lottieAnimationMobileSwitcher && 'fb-mobile-responsive'}`,
	});

	// Determine animation path
	const isFile = lottieAnimationJsonTypeSwitcher === 'json-file';
	const sourceUrl = isFile ? lottieAnimationImageUrl : lottieAnimationJsonUrl;

	if (!sourceUrl) {
		return (
			<div {...blockProps}>
				<div className={`fb-parent-wrapper fb-lottie-animation-container ${blockID} ${lottieAnimationGlobalWraperClass}`} id={lottieAnimationGlobalWraperID}>
					<div style={{ padding: '50px', textAlign: 'center', color: '#999' }}>
						{__('No Lottie animation selected.', 'frontis-blocks')}
					</div>
				</div>
			</div>
		);
	}

	// Match logic from edit.js -> shouldAutoplay
	const shouldAutoplay =
		(lottieEffectsOnHover === 'play-pause' || lottieEffectsOnHover === 'play')
			? false
			: lottieAutoplay;

	return (
		<div {...blockProps}>
			<div
				className={`fb-parent-wrapper fb-lottie-animation-container ${blockID} ${lottieAnimationGlobalWraperClass}`} id={lottieAnimationGlobalWraperID}
				data-json-url={sourceUrl}
				data-renderer={lottieRenderer}
				data-loop={lottieLoop}
				data-autoplay={shouldAutoplay}
				data-speed={lottieAnimationSpeed}
				data-hover-effect={lottieEffectsOnHover}
				data-reverse={lottieAnimationReverse}
				data-type={lottieAnimationJsonTypeSwitcher}  
				style={{ width: '100%' }}
			/>
		</div>
	);
}
