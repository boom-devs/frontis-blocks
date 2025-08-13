import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {

	const {
        blockId,
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
		centeredSlides: false,
		speed: 1000,
		autoplay: {
		delay: 1,
		},
		loop: true,
		slidesPerView:'auto',
		allowTouchMove: false,
		disableOnInteraction: true
	});

	return (
		<div {...blockProps} data-swiper-settings={ swiperSettings }>
			<div className="fb-marquee-swiper swiper">
				<div className="swiper-wrapper">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
