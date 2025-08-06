import { useEffect, useRef } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
	const blockProps = useBlockProps({
		className: 'wp-block-uagb-container client-logo-wrapper uagb-block-a2e80f0c',
	});

	const slickRef = useRef(null);

	useEffect(() => {
		if (!window.jQuery || !slickRef.current) return;
		const $ = window.jQuery;
		const $slider = $(slickRef.current);

		if ($slider.hasClass('slick-initialized')) {
			$slider.slick('unslick');
		}

		$slider.slick({
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 0,
			speed: 4000,
			cssEase: 'linear',
			arrows: false,
			dots: false,
			pauseOnHover: false,
			pauseOnFocus: false,
			variableWidth: false,
		});

		return () => {
			if ($slider.hasClass('slick-initialized')) {
				$slider.slick('unslick');
			}
		};
	}, []);

	const logos = [
		'https://wpspectra.com/wp-content/uploads/2025/03/ZipWP-logo.svg',
		'https://wpspectra.com/wp-content/uploads/2025/03/Astra-logo.svg',
		'https://wpspectra.com/wp-content/uploads/2025/03/Crafter-logo.svg',
		'https://wpspectra.com/wp-content/uploads/2025/03/PP-logo.svg',
		'https://wpspectra.com/wp-content/uploads/2025/03/ZipWP-logo.svg',
		'https://wpspectra.com/wp-content/uploads/2025/03/Astra-logo.svg',
		'https://wpspectra.com/wp-content/uploads/2025/03/Crafter-logo.svg',
		'https://wpspectra.com/wp-content/uploads/2025/03/PP-logo.svg',
	];

	return (
		<div {...blockProps}>
			<div className="client-logos-list-before"></div>

			<div className="wp-block-uagb-image-gallery uagb-block-958af304" style={{ visibility: 'visible' }}>
				<div className="spectra-image-gallery spectra-image-gallery__layout--carousel">
					<div className="uagb-slick-carousel uagb-block-958af304" ref={slickRef}>
						{logos.map((url, index) => (
							<div key={index}>
								<div className="spectra-image-gallery__media-wrapper" style={{ width: '100%', display: 'inline-block' }}>
									<div className="spectra-image-gallery__media spectra-image-gallery__media--carousel">
										<picture>
											<source media="(min-width: 1024px)" srcSet={url} loading="lazy" />
											<source media="(min-width: 768px)" srcSet={url} loading="lazy" />
											<img
												decoding="async"
												className="spectra-image-gallery__media-thumbnail spectra-image-gallery__media-thumbnail--carousel"
												src={url}
												alt={`Client Logo ${index + 1}`}
											/>
										</picture>
										<div className="spectra-image-gallery__media-thumbnail-blurrer"></div>
										<div className="spectra-image-gallery__media-thumbnail-caption-wrapper spectra-image-gallery__media-thumbnail-caption-wrapper--overlay"></div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="client-logos-list-after"></div>
		</div>
	);
}
