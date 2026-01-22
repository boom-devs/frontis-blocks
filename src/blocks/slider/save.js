import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

import classnames from 'classnames';

export default function save( props ) {
	const { attributes } = props;

    const {
        blockId,
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
		enableKeyboardNavigation,
        paginationType,
		sliderGlobalWraperClass,
        sliderType,
        slideEffect,
        carouselEffect,
        carouselPerColumn,
        carouselPerColumnGap,
		sliderArrowPositionType,
		sliderArrowPosition,
        sliderArrowsIconSwitcher,
        sliderArrowsIconLeftAlign,
        sliderArrowsIconLeft,
        sliderArrowsIconLeftImageUrl,
        sliderArrowsIconLeftImageAlt,
        sliderArrowsIconRightAlign,
        sliderArrowsIconRight,
        sliderArrowsIconRightImageUrl,
        sliderArrowsIconRightImageAlt,
		sliderDesktopSwitcher,
		sliderTabletSwitcher,
		sliderMobileSwitcher,
    } = attributes;

	const blockProps = useBlockProps.save();

		const swiperSettings = JSON.stringify({
			effect: sliderType === 'carousel' ? carouselEffect : slideEffect,
			...(sliderType === 'carousel' && {
				breakpoints: {
				0: {
					slidesPerView: carouselPerColumn?.Mobile || 1,
					spaceBetween: carouselPerColumnGap?.Mobile || 10,
				},
				768: {
					slidesPerView: carouselPerColumn?.Tablet || 2,
					spaceBetween: carouselPerColumnGap?.Tablet || 15,
				},
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

			keyboard: enableKeyboardNavigation ? {
				enabled: true,
				onlyInViewport: true,
				pageUpDown: false,
			} : false,

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
					renderBullet: (index, className) =>
						`<button class="${className}" aria-label="Go to slide ${index + 1}" ${
						  index === 0 ? 'aria-current="true"' : ''
						}></button>`,
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
			className={ classnames( blockProps.className, `${ blockId }`, 'fb-slider-container', `${displayArrows ? sliderArrowPositionType : ''}`, sliderArrowPosition, sliderGlobalWraperClass, `${sliderDesktopSwitcher && 'fb-desktop-responsive'} ${sliderTabletSwitcher && 'fb-tablet-responsive'} ${sliderMobileSwitcher && 'fb-mobile-responsive'}` ) }
			data-block-id={ blockId }
			data-swiper-settings={ swiperSettings }
		>
			<div className="fb-slides fb-swiper">
				<div className="swiper-wrapper fb-swiper-wrapper">
					<InnerBlocks.Content />
				</div>
				{ displayArrows && !sliderArrowsIconSwitcher && sliderArrowPositionType === 'inside' && (
					<>
						<div className={`fb-slider-default-icon-wrapper ${sliderArrowPositionType} ${sliderArrowPosition}`}>
							<div className="swiper-button-prev" aria-label="Previous slide" title='Previous slide'></div>
							<div className="swiper-button-next" aria-label="Next slide" title='Next slide'></div>
						</div>
					</>
				) }

				{sliderArrowsIconSwitcher && sliderArrowPositionType === 'inside' && (sliderArrowsIconLeftAlign === 'icon' || sliderArrowsIconRightAlign === 'icon') && (
					<div className={`fb-slider-custom-icon-wrapper ${sliderArrowPositionType} ${sliderArrowPosition}`}>
						<div className="swiper-button-prev" aria-label="Previous slide" title='Previous slide'>{renderSVG(sliderArrowsIconLeft)}</div>
						<div className="swiper-button-next" aria-label="Next slide" title='Next slide'>{renderSVG(sliderArrowsIconRight)}</div>
					</div>
				)}

				{sliderArrowsIconSwitcher && sliderArrowPositionType === 'inside' && (sliderArrowsIconLeftAlign === 'image' || sliderArrowsIconRightAlign === 'image') && (sliderArrowsIconLeftImageUrl || sliderArrowsIconRightImageUrl) && (
					<div className={`fb-slider-custom-icon-wrapper ${sliderArrowPositionType} ${sliderArrowPosition}`}>
						<div className="swiper-button-prev" aria-label="Previous slide" title='Previous slide'>
                                <img src={sliderArrowsIconLeftImageUrl} alt={sliderArrowsIconLeftImageAlt} />
                            </div>
						<div className="swiper-button-next" aria-label="Next slide" title='Next slide'>
							<img src={sliderArrowsIconRightImageUrl} alt={sliderArrowsIconRightImageAlt} />
						</div>
                    </div>
                )}
			</div>
			{ displayDots && <div className="swiper-pagination" aria-label="Slider pagination" role="region"></div> }

			{ displayArrows && !sliderArrowsIconSwitcher && sliderArrowPositionType === 'outside' && (
				<>
					<div className={`fb-slider-default-icon-wrapper ${sliderArrowPositionType} ${sliderArrowPosition}`}>
						<div className="swiper-button-prev" aria-label="Previous slide" title='Previous slide'></div>
						<div className="swiper-button-next" aria-label="Next slide" title='Next slide'></div>
					</div>
				</>
			) }

			{sliderArrowsIconSwitcher && sliderArrowPositionType === 'outside' && (sliderArrowsIconLeftAlign === 'icon' || sliderArrowsIconRightAlign === 'icon') && (
				<div className={`fb-slider-custom-icon-wrapper ${sliderArrowPositionType} ${sliderArrowPosition}`}>
					<div className="swiper-button-prev" aria-label="Previous slide" title='Previous slide'>{renderSVG(sliderArrowsIconLeft)}</div>
					<div className="swiper-button-next" aria-label="Next slide" title='Next slide'>{renderSVG(sliderArrowsIconRight)}</div>
				</div>
			)}

			{sliderArrowsIconSwitcher && sliderArrowPositionType === 'outside' && (sliderArrowsIconLeftAlign === 'image' || sliderArrowsIconRightAlign === 'image') && (sliderArrowsIconLeftImageUrl || sliderArrowsIconRightImageUrl) && (
				<div className={`fb-slider-custom-icon-wrapper ${sliderArrowPositionType} ${sliderArrowPosition}`}>
					<div className="swiper-button-prev" aria-label="Previous slide" title='Previous slide'>
							<img src={sliderArrowsIconLeftImageUrl} alt={sliderArrowsIconLeftImageAlt} />
						</div>
					<div className="swiper-button-next" aria-label="Next slide" title='Next slide'>
						<img src={sliderArrowsIconRightImageUrl} alt={sliderArrowsIconRightImageAlt} />
					</div>
				</div>
			)}

		</div>
	);
	
}
