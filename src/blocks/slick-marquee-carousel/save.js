import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {

	const {
        blockId,
        sliderItems,

        slideWidth,
        slideWidthUnits,
        slideHeight,
        slideHeightUnits,

        autoplay,
        autoplayDirection,
        reverseDirection,
        speed,
        showNavigation,
        showPagination,
    } = attributes;

	const blockProps = useBlockProps.save({
		className: `wp-block-uagb-container client-logo-wrapper ${blockId}`,
	});

	// Prepare slick settings based on slider type
	const slickSettings = JSON.stringify({
		speed: 2000,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		centerMode: true,
		cssEase: 'linear',
		arrows: false,
		dots: false,
		pauseOnHover: false,
		pauseOnFocus: false,
		variableWidth: false,
		touchMove: false,
		draggable: false,
		swipe: false,
		waitForAnimate: false 
	});

	return (
		<div {...blockProps} data-slick-settings={slickSettings}>
			<div className="client-logos-list-before"></div>
				<div className="wp-block-uagb-image-gallery">
					<div className="spectra-image-gallery spectra-image-gallery__layout--carousel">
						<div className="uagb-slick-carousel">
							{sliderItems.map((item, index) => (
								<div key={item.id || index}>
									<div className="spectra-image-gallery__media-wrapper">
										<div className="spectra-image-gallery__media spectra-image-gallery__media--carousel">
											<img
												decoding="async"
												className="spectra-image-gallery__media-thumbnail spectra-image-gallery__media-thumbnail--carousel"
												src={item.marqueeCarouselImageUrl}
												alt={item.marqueeCarouselImageAlt || `Client Logo ${index + 1}`}
											/>
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
