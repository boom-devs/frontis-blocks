import { RichText, useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function Save({ attributes }) {
	const {
		blockId,
		speed,
		reverseDirection,
		pauseOnHover,
		sliderGlobalWraperID,
		sliderGlobalWraperClass,
		arrowsUniqueId,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-marquee-slider-container ${blockId}`,
		"data-block-id": blockId,
	});

	console.log(arrowsUniqueId)
	/**
	 * swiper settings
	 */
	const swiperSettings = JSON.stringify({
		spaceBetween: 0,
		centeredSlides: false,
		speed: speed,
		autoplay: {
			delay: 1,
			reverseDirection: reverseDirection,
			pauseOnMouseEnter: pauseOnHover,
			disableOnInteraction: false,
		},
		loop: true,
		slidesPerView: "auto",
		allowTouchMove: false,
		navigation: arrowsUniqueId
			? {
					nextEl: `.${arrowsUniqueId} .fb-news-ticker-next`,
					prevEl: `.${arrowsUniqueId} .fb-news-ticker-prev`,
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