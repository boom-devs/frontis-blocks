import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

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
		className: `fb-marquee-slider-container ${blockId}`,
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
		swipeToSlide: false,
		waitForAnimate: false 
	});

	return (
		<div {...blockProps} data-slick-settings={slickSettings}>
			<div className="wp-block-uagb-image-gallery">
				<div className="spectra-image-gallery spectra-image-gallery__layout--carousel">
					<div className="uagb-slick-carousel">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
