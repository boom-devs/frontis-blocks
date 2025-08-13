import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {

	const {
        blockId,
		speed,

		sliderGlobalWraperID,
		sliderGlobalWraperClass,
    } = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-marquee-slider-container ${blockId}`,
		'data-block-id': blockId,
	});

	/**
	 * swiper settings
	 */
	const swiperSettings = JSON.stringify({
		spaceBetween: 0,
		centeredSlides: true,
		speed: speed,
		autoplay: {
		delay: 1,
		},
		// autoplay: false,
		loop: true,
		slidesPerView:'auto',
		allowTouchMove: false,
		disableOnInteraction: true
	});

	return (
		<div {...blockProps} data-swiper-settings={ swiperSettings }>
			<div className={`fb-marquee-swiper swiper ${sliderGlobalWraperClass}`} id={sliderGlobalWraperID}>
				<div className="fb-swiper-wrapper swiper-wrapper">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
