import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const {
		blockId,
		speed,
		reverseDirection,
		sliderGlobalWraperID,
		sliderGlobalWraperClass,
		arrowsUniqueId,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-marquee-slider-container ${blockId}`,
		"data-block-id": blockId,
	});

	/**
	 * Swiper settings (frontend)
	 */
	const swiperSettings = JSON.stringify({
		spaceBetween: 0,
		centeredSlides: false,
		speed: speed || 5000, // smoother scrolling
		autoplay: {
			delay: 0, // continuous scroll (no pause)
			reverseDirection: reverseDirection,
			disableOnInteraction: false,
			stopOnLastSlide: false, // Ensure loop continues
			waitForTransition: true,
		},
		loop: true,
		slidesPerView: "auto",
		allowTouchMove: false,
		freeMode: {
			enabled: true,
			momentum: false,
		},   // continuous ticker effect
		navigation: arrowsUniqueId
			? {
					nextEl: `.${arrowsUniqueId} .fb-news-ticker-next`,
					prevEl: `.${arrowsUniqueId} .fb-news-ticker-prev`,
					hideOnClick: false,
					disabledClass: "swiper-button-disabled",
					hiddenClass: "swiper-button-hidden",
			  }
			: false,
	});

	return (
		<div {...blockProps} data-swiper-settings={swiperSettings}>
			<div
				className={`fb-marquee-swiper swiper ${sliderGlobalWraperClass}`}
				id={sliderGlobalWraperID}
			>
				<div className="fb-swiper-wrapper swiper-wrapper">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}