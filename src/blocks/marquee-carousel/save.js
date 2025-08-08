import { RichText, useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function Save({ attributes }) {

	const {
        blockId,
        blockStyle,
        speed,
        infinite,
        slidesToShow,
        autoplay,
        centerMode,
        pauseOnHover,
        variableWidth,
        touchMove,
        draggable,
        swipe,
        swipeToSlide,
        waitForAnimate,
		sliderGlobalWraperID,
        sliderGlobalWraperClass,
    } = attributes;

	const blockProps = useBlockProps.save({
		className: `fb-marquee-slider-container ${blockId}`,
	});

	// Helper function to get responsive value (same as edit.js)
	const getResponsiveValue = (responsiveObj, fallbackValue = 1) => {
		if (typeof responsiveObj === 'object' && responsiveObj !== null) {
			return responsiveObj.Desktop || fallbackValue;
		}
		return responsiveObj || fallbackValue;
	};

	// Generate responsive settings for frontend
	const getResponsiveSettings = () => {
		if (typeof slidesToShow === 'object' && slidesToShow !== null) {
			const settings = [];
			
			// Tablet breakpoint
			if (slidesToShow.Tablet !== '' && slidesToShow.Tablet !== undefined) {
				settings.push({
					breakpoint: 1024,
					settings: {
						slidesToShow: parseInt(slidesToShow.Tablet) || 1,
						slidesToScroll: 1
					}
				});
			}
			
			// Mobile breakpoint
			if (slidesToShow.Mobile !== '' && slidesToShow.Mobile !== undefined) {
				settings.push({
					breakpoint: 768,
					settings: {
						slidesToShow: parseInt(slidesToShow.Mobile) || 1,
						slidesToScroll: 1
					}
				});
			}
			
			return settings;
		}
		
		return [];
	};

	// Prepare slick settings with responsive support
	const slickSettings = JSON.stringify({
		speed: speed,
		infinite: infinite,
		slidesToShow: parseInt(getResponsiveValue(slidesToShow, 1)) || 1,
		slidesToScroll: 1,
		autoplay: autoplay,
		autoplaySpeed: 0,
		centerMode: centerMode,
		cssEase: 'linear',
		pauseOnHover: pauseOnHover,
		pauseOnFocus: false,
		variableWidth: variableWidth,
		touchMove: touchMove,
		draggable: draggable,
		swipe: swipe,
		swipeToSlide: swipeToSlide,
		waitForAnimate: waitForAnimate,
		arrows: false,
		dots: false,
		initialSlide: 0,
        
        // Add responsive settings
        responsive: getResponsiveSettings(),
        
        // Core settings for smooth performance
        useCSS: true,
        useTransform: true,
        accessibility: false,
        focusOnSelect: false,
        fade: false,
        vertical: false,
        rtl: false,
        respondTo: 'window'
	});

	return (
		<div {...blockProps} data-slick-settings={slickSettings}>
			<div className={`fb-marquee-image-gallery ${sliderGlobalWraperClass}`} id={sliderGlobalWraperID}>
				<div className="fb-marquee-carousel-gallery-layout">
					<div className="fb-marquee-carousel-wrapper">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</div>
	);
}
