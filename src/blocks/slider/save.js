import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import classnames from 'classnames';

export default function save( props ) {
	const { attributes } = props;

    const {
        blockId,
        slideContent,
        slideItem,
		transitionSpeed,
        displayArrows,
		displayDots,
        autoplay,
        autoplaySpeed,
        loop,
        allowTouchMove,
        pauseOnHover,
        stopOnLastSlide,
        reverseDirection,
        enableMouseWheel,
        effect,
        paginationType,
		sliderGlobalWraperClass,
        sliderType,
        slideEffect,
        carouselEffect,
        carouselPerColumn,
        carouselPerColumnGap,
		

		sliderDesktopSwitcher,
		sliderTabletSwitcher,
		sliderMobileSwitcher,
    } = attributes;

	const blockProps = useBlockProps.save();

	    // Configure Swiper settings for frontend rendering
		const swiperSettings = JSON.stringify({

			// Set effect based on sliderType
			effect: sliderType === 'carousel' ? carouselEffect : slideEffect,

			// Responsive breakpoints for Desktop, Tablet, and Mobile
			...(sliderType === 'carousel' && {
				breakpoints: {
				// Mobile (e.g., screens < 768px)
				0: {
					slidesPerView: carouselPerColumn?.Mobile || 1,
					spaceBetween: carouselPerColumnGap?.Mobile || 10,
				},
				// Tablet (e.g., screens >= 768px)
				768: {
					slidesPerView: carouselPerColumn?.Tablet || 2,
					spaceBetween: carouselPerColumnGap?.Tablet || 15,
				},
				// Desktop (e.g., screens >= 1025px)
				1025: {
					slidesPerView: carouselPerColumn?.Desktop || 3,
					spaceBetween: carouselPerColumnGap?.Desktop || 20,
				},
				},
			}),

			loop: loop,
			autoplay: autoplay ? {
				delay: autoplaySpeed,
				pauseOnMouseEnter: pauseOnHover,
				disableOnInteraction: false,
				stopOnLastSlide: stopOnLastSlide,
				reverseDirection: reverseDirection,
			} : false,
			speed: transitionSpeed,
			allowTouchMove: allowTouchMove,
			mousewheel: enableMouseWheel,

			// Add navigation if enabled
			...(displayArrows && {
				navigation: {
					nextEl: `.fb-slider-container[data-block-id="${blockId}"] .swiper-button-next`,
					prevEl: `.fb-slider-container[data-block-id="${blockId}"] .swiper-button-prev`,
				},
			}),

			// Add pagination if enabled
			...(displayDots && {
				pagination: {
					el: `.fb-slider-container[data-block-id="${blockId}"] .swiper-pagination`,
					clickable: true,
					type: paginationType || 'bullets',
				},
			}),
			
			// Creative effect settings if needed
			...(slideEffect === 'creative' && {
				creativeEffect: {
					prev: { shadow: true, translate: [0, 0, -400] },
					next: { translate: ['100%', 0, 0] },
				},
			}),
			
		});



	return (
		<div
			key={ blockId }
			className={ classnames( blockProps.className, `${ blockId }`, 'fb-slider-container', sliderGlobalWraperClass, `${sliderDesktopSwitcher && 'fb-desktop-responsive'} ${sliderTabletSwitcher && 'fb-tablet-responsive'} ${sliderMobileSwitcher && 'fb-mobile-responsive'}` ) }
			data-block-id={ blockId }
			data-swiper-settings={ swiperSettings }
		>
			<div className="fb-slides fb-swiper">
				<div className="swiper-wrapper fb-swiper-wrapper">
					<InnerBlocks.Content />
				</div>
			</div>
			{ displayDots && <div className="swiper-pagination"></div> }

			{ displayArrows && (
				<>
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
				</>
			) }
		</div>
	);
	
}
