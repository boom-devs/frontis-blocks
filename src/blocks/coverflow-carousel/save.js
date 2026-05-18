import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function save({ attributes }) {
	const {
		blockID,

		coverflowCarouselGlobalWraperID,
		coverflowCarouselGlobalWraperClass,

		coverflowCarouselDesktopSwitcher,
		coverflowCarouselTabletSwitcher,
		coverflowCarouselMobileSwitcher,

		showNavigation,
		showPagination,
		paginationType,

		carouselArrowsIconSwitcher,
		carouselArrowsIconLeftAlign,
		carouselArrowsIconLeft,
		carouselArrowsIconLeftImageUrl,
		carouselArrowsIconLeftImageAlt,

		carouselArrowsIconRightAlign,
		carouselArrowsIconRight,
		carouselArrowsIconRightImageUrl,
		carouselArrowsIconRightImageAlt,

		loop,
		autoplay,
		autoplaySpeed,
		transitionSpeed,
		allowTouchMove,
		pauseOnHover,
		stopOnLastSlide,
		reverseDirection,
		enableMouseWheel,
		enableKeyboardNavigation,

		carouselItemTranslateX,
		carouselItemTranslateY,
		carouselItemTranslateZ,
		carouselItemRotateY,
		carouselItemRotateX,
		carouselItemRotateZ,
		carouselPerspective,
		carouselItemScale,
		carouselReflection,
		carouselReflectionGap,
		carouselReflectionOpacity,
		carouselTransitionEasing,
	} = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-coverflowCarousel-main-wrapper ${blockID ? blockID : ''} ${coverflowCarouselDesktopSwitcher ? 'fb-desktop-responsive' : ''} ${coverflowCarouselTabletSwitcher ? 'fb-tablet-responsive' : ''} ${coverflowCarouselMobileSwitcher ? 'fb-mobile-responsive' : ''}`.trim(),
		'data-loop': loop,
		'data-autoplay': autoplay,
		'data-autoplay-speed': autoplaySpeed,
		'data-transition-speed': transitionSpeed,
		'data-allow-touchmove': allowTouchMove,
		'data-pause-on-hover': pauseOnHover,
		'data-stop-on-last-slide': stopOnLastSlide,
		'data-reverse-direction': reverseDirection,
		'data-enable-mousewheel': enableMouseWheel,
		'data-enable-keyboard': enableKeyboardNavigation,
		'data-translate-x': carouselItemTranslateX ? JSON.stringify(carouselItemTranslateX) : '',
		'data-translate-y': carouselItemTranslateY ? JSON.stringify(carouselItemTranslateY) : '',
		'data-translate-z': carouselItemTranslateZ ? JSON.stringify(carouselItemTranslateZ) : '',
		'data-rotate-y': carouselItemRotateY ? JSON.stringify(carouselItemRotateY) : '',
		'data-rotate-x': carouselItemRotateX ? JSON.stringify(carouselItemRotateX) : '',
		'data-rotate-z': carouselItemRotateZ ? JSON.stringify(carouselItemRotateZ) : '',
		'data-perspective': carouselPerspective ? JSON.stringify(carouselPerspective) : '',
		'data-scale': carouselItemScale ? JSON.stringify(carouselItemScale) : '',
		'data-reflection': carouselReflection,
		'data-reflection-gap': carouselReflectionGap,
		'data-reflection-opacity': carouselReflectionOpacity,
		'data-transition-easing': carouselTransitionEasing,
	});

	return (
		<div {...blockProps}>
			<div className={`fb-parent-wrapper fb-coverflowCarousel-wrapper ${blockID} ${coverflowCarouselGlobalWraperClass}`} id={coverflowCarouselGlobalWraperID}>
				<div className="fb-coverflowCarousel-items-container">
					<InnerBlocks.Content />
				</div>

				{/* Navigation Arrows */}
				{showNavigation && (
					<div className="fb-coverflow-carousel-navigation">
						<button className="fb-coverflow-carousel-prev-btn">
							{carouselArrowsIconSwitcher ? (
								carouselArrowsIconLeftAlign === 'image' && carouselArrowsIconLeftImageUrl ? (
									<img src={carouselArrowsIconLeftImageUrl} alt={carouselArrowsIconLeftImageAlt || __('Prev', 'frontis-blocks')} />
								) : (
									renderSVG(carouselArrowsIconLeft || 'arrow-left')
								)
							) : (
								renderSVG('arrow-left')
							)}
						</button>
						<button className="fb-coverflow-carousel-next-btn">
							{carouselArrowsIconSwitcher ? (
								carouselArrowsIconRightAlign === 'image' && carouselArrowsIconRightImageUrl ? (
									<img src={carouselArrowsIconRightImageUrl} alt={carouselArrowsIconRightImageAlt || __('Next', 'frontis-blocks')} />
								) : (
									renderSVG(carouselArrowsIconRight || 'arrow-right')
								)
							) : (
								renderSVG('arrow-right')
							)}
						</button>
					</div>
				)}

				{/* Pagination */}
				{showPagination && (
					<div className={`fb-coverflow-carousel-pagination pagination-${paginationType}`}>
						{/* Inside contents will be handled by view.js on frontend */}
					</div>
				)}
			</div>
		</div>
	);
}
