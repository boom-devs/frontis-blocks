import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import classnames from 'classnames';

export default function save( props ) {
	const { attributes } = props;

    const {
        blockId,
        slideContent,
        slideItem,
		displayArrows,
		displayDots,
		transitionSpeed,
        autoplay,
        autoplaySpeed,
        slidePerView,
        spaceBetween,
        loop,
        allowTouchMove,
        pauseOnHover,
        stopOnLastSlide,
        reverseDirection,
        enableMouseWheel,
        effect,
    } = attributes;

	const blockProps = useBlockProps.save();

	return (
		<div
			key={ blockId }
			className={ classnames( blockProps.className, `fb-block-${ blockId }`, 'fb-slider-container' ) }
			data-block-id={ blockId }
			data-transition-speed={transitionSpeed}
            data-autoplay={autoplay}
            data-autoplay-speed={autoplaySpeed}
            data-slides-per-view={slidePerView}
            data-space-between={spaceBetween}
            data-loop={loop}
            data-allow-touch-move={allowTouchMove}
            data-pause-on-hover={pauseOnHover}
            data-stop-on-last-slide={stopOnLastSlide}
            data-reverse-direction={reverseDirection}
            data-enable-mouse-wheel={enableMouseWheel}
            data-effect={effect}
		>
			<div className="fb-slides fb-swiper">
				<div className="swiper-wrapper">
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
