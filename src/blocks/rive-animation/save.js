// save.js
import { useBlockProps } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function save({ attributes }) {
	const {
		blockID,
		riveAnimationJsonTypeSwitcher,
		riveAnimationImageUrl,
		riveAnimationJsonUrl,
		riveRenderer = 'svg',
		riveLoop = true,
		riveAutoplay = true,
		riveAnimationSpeed,
		riveEffectsOnHover,
		riveAnimationReverse
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-rive-animation-main-wrapper ${blockID}`,
	});

	// Determine source
	const isFile = riveAnimationJsonTypeSwitcher === 'json-file';
	const sourceUrl = isFile ? riveAnimationImageUrl : riveAnimationJsonUrl;

	if (!sourceUrl) {
		return (
			<div {...blockProps}>
				<div className="fb-parent-wrapper fb-rive-animation-container">
					<div style={{ padding: '50px', textAlign: 'center', color: '#999' }}>
						{__('No rive animation selected.', 'frontis-blocks')}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div {...blockProps}>
			<div
				className={`fb-parent-wrapper fb-rive-animation-container ${blockID}`}
				data-json-url={sourceUrl}
				data-renderer={riveRenderer}
				data-loop={riveLoop}
				data-autoplay={riveAutoplay}
				data-speed={riveAnimationSpeed}
				data-hover-effect={riveEffectsOnHover}
				data-reverse={riveAnimationReverse}
				style={{ width: '100%' }}
			/>
		</div>
	);
}