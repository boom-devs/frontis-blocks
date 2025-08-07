import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {

	const {
        blockId,
        blockStyle,
        speed,
        infinite,
        slidesToShow,
        slidesToScroll,
        autoplay,
        autoplaySpeed,
        centerMode,
        arrows,
        dots,
        pauseOnHover,
        pauseOnFocus,
        variableWidth,
        touchMove,
        draggable,
        swipe,
        swipeToSlide,
        waitForAnimate,
    } = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-marquee-slider-container ${blockId}`,
	});

	// Prepare slick settings based on slider type
	const slickSettings = JSON.stringify({
		speed: speed,
		infinite: infinite,
		slidesToShow: slidesToShow,
		slidesToScroll: slidesToScroll,
		autoplay: autoplay,
		autoplaySpeed: autoplaySpeed,
		centerMode: centerMode,
		cssEase: 'linear',
		arrows: arrows,
		dots: dots,
		pauseOnHover: pauseOnHover,
		pauseOnFocus: pauseOnFocus,
		variableWidth: variableWidth,
		touchMove: touchMove,
		draggable: draggable,
		swipe: swipe,
		swipeToSlide: swipeToSlide,
		waitForAnimate: waitForAnimate 
	});

	return (
		<div {...blockProps} data-slick-settings={slickSettings}>
			<div className="fb-marquee-image-gallery">
				<div className="fb-marquee-carousel-gallery-layout">
					<div className="fb-marquee-carousel-wrapper">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
