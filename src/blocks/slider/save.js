import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function Save({ attributes }) {
    const {
        blockId,
        transitionType,
        displayIndicators,
        indicatorColor,
        autoplay,
        autoplaySpeed,
        navigationArrows,
    } = attributes;

    return (
        <div 
            className={`fb-slider-main-wrapper ${blockId}`}
            data-transition={transitionType}
            data-indicators={displayIndicators}
            data-indicator-color={indicatorColor}
            data-autoplay={autoplay}
            data-autoplay-speed={autoplaySpeed}
            data-arrows={navigationArrows}
        >
            <div className="swiper">
                <div className="swiper-wrapper">
                    <InnerBlocks.Content />
                </div>
                {displayIndicators && <div className="swiper-pagination"></div>}
                {navigationArrows && (
                    <>
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </>
                )}
            </div>
        </div>
    );
}