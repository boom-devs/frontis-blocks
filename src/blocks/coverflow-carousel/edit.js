import {
	RichText,
	useBlockProps,
	InnerBlocks,
	useInnerBlocksProps
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';

import { useEffect, useRef, useState } from '@wordpress/element';
import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

import Inspector from "./inspector";
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generatecoverflowCarouselNumberStyle from "./styling";

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
	const {
		blockID,
		blockStyle,
		
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
	} = attributes;

	// Handle block ID generation (handles duplication and initial ID)
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: 'fb-coverflow-carousel',
		isSelected,
		attributes,
		setAttributes,
	});

	/** Start Generate Block Style */
	useEffect(() => {
		if (blockID) {
			const css = generatecoverflowCarouselNumberStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);
	/** End Generate Block Style */

	const innerBlocks = useSelect((select) => {
		return select('core/block-editor').getBlocks(clientId);
	}, [clientId]);

	const wrapperRef = useRef(null);
	const [editorIndex, setEditorIndex] = useState(2);
	const [slideCount, setSlideCount] = useState(5);

	const handleNext = (e) => {
		if (e) {
			e.preventDefault();
			e.stopPropagation();
		}
		const totalCards = wrapperRef.current ? wrapperRef.current.querySelectorAll('.fb-coverflow-carousel-slide').length : 0;
		if (totalCards > 0) {
			setEditorIndex((prev) => (prev + 1) % totalCards);
		}
	};

	const handlePrev = (e) => {
		if (e) {
			e.preventDefault();
			e.stopPropagation();
		}
		const totalCards = wrapperRef.current ? wrapperRef.current.querySelectorAll('.fb-coverflow-carousel-slide').length : 0;
		if (totalCards > 0) {
			setEditorIndex((prev) => (prev - 1 + totalCards) % totalCards);
		}
	};

	// 3D Coverflow effect in Gutenberg Editor
	useEffect(() => {
		const applyTransforms = () => {
			if (!wrapperRef.current) return;
			const cards = wrapperRef.current.querySelectorAll('.fb-coverflow-carousel-slide');
			if (!cards.length) return;

			setSlideCount(cards.length);

			let index = editorIndex;
			if (index >= cards.length) {
				index = cards.length - 1;
			}
			if (index < 0) {
				index = 0;
			}

			cards.forEach((card, i) => {
				let offset = i - index;
				if (loop) {
					const half = Math.floor(cards.length / 2);
					offset = ((i - index + half + cards.length * 2) % cards.length) - half;
				}
				const absOffset = Math.abs(offset);

				if (offset === 0) {
					card.style.transform = `translateX(0px) translateZ(0px) rotateY(0deg)`;
					card.style.opacity = 1;
					card.style.zIndex = 20;
					card.classList.add('active');
				} else {
					let txValue = 260;
					for (let step = 2; step <= absOffset; step++) {
						txValue += 230 + (10 * (step - 1));
					}
					const translateX = offset > 0 ? txValue : -txValue;
					const translateZ = -(100 + (absOffset - 1) * 30);
					const rotateY = (55 + (absOffset - 1) * 5) * (offset > 0 ? -1 : 1);
					const opacity = Math.max(1 - (absOffset * 0.2), 0.3);

					card.style.transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`;
					card.style.opacity = opacity;
					card.style.zIndex = 20 - absOffset;
					card.classList.remove('active');
				}
				card.style.transition = 'transform 0.5s ease, opacity 0.5s ease, z-index 0.5s ease';
			});
		};

		// Run immediately
		applyTransforms();

		// Run with multiple small delays to guarantee rendering on first load/inner block mount
		const timers = [
			setTimeout(applyTransforms, 50),
			setTimeout(applyTransforms, 150),
			setTimeout(applyTransforms, 300),
			setTimeout(applyTransforms, 500)
		];

		return () => timers.forEach(clearTimeout);
	}, [editorIndex, attributes, slideCount, innerBlocks]);

	// Attach click listeners to editor slides to bring them to center on click
	useEffect(() => {
		const attachListeners = () => {
			if (!wrapperRef.current) return;
			const cards = wrapperRef.current.querySelectorAll('.fb-coverflow-carousel-slide');
			const listeners = [];

			cards.forEach((card, i) => {
				const selectSlide = (e) => {
					e.stopPropagation();
					setEditorIndex(i);
				};
				card.addEventListener('click', selectSlide);
				listeners.push({ card, selectSlide });
			});

			return () => {
				listeners.forEach(({ card, selectSlide }) => {
					card.removeEventListener('click', selectSlide);
				});
			};
		};

		const cleanup = attachListeners();

		// Delayed attachment for initial render mounting
		const timer = setTimeout(attachListeners, 200);

		return () => {
			if (cleanup) cleanup();
			clearTimeout(timer);
		};
	}, [editorIndex, slideCount, attributes, innerBlocks]);

	const ALLOWED_BLOCKS = [ 'frontis-blocks/coverflow-carousel-item' ];

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'fb-coverflowCarousel-items-container',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: [
				[ 'frontis-blocks/coverflow-carousel-item' ],
				[ 'frontis-blocks/coverflow-carousel-item' ],
				[ 'frontis-blocks/coverflow-carousel-item' ],
				[ 'frontis-blocks/coverflow-carousel-item' ],
				[ 'frontis-blocks/coverflow-carousel-item' ],
			],
		}
	);

	const blockProps = useBlockProps({
		className: `fb-coverflowCarousel-main-wrapper ${blockID ? blockID : ''} ${coverflowCarouselDesktopSwitcher ? 'fb-desktop-responsive' : ''} ${coverflowCarouselTabletSwitcher ? 'fb-tablet-responsive' : ''} ${coverflowCarouselMobileSwitcher ? 'fb-mobile-responsive' : ''}`.trim(),
	});

	return (
		<>	
			{isSelected && (
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			)}
			
			<div {...blockProps} ref={wrapperRef}>
				<div className={`fb-parent-wrapper fb-coverflowCarousel-wrapper ${blockID} ${coverflowCarouselGlobalWraperClass}`} id={coverflowCarouselGlobalWraperID}>
					<div {...innerBlocksProps} />

					{/* Navigation Arrows */}
					{showNavigation && (
						<div className="fb-coverflow-carousel-navigation">
							<button className="fb-coverflow-carousel-prev-btn" onClick={handlePrev}>
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
							<button className="fb-coverflow-carousel-next-btn" onClick={handleNext}>
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
							{paginationType === 'progressbar' && (
								<span 
									className="fb-coverflow-carousel-pagination-progressbar-fill"
									style={{ width: `${((editorIndex + 1) / Math.max(slideCount, 1)) * 100}%` }}
								></span>
							)}
							{paginationType === 'fraction' && <span className="fb-coverflow-carousel-pagination-fraction-current">{editorIndex + 1}</span>}
							{paginationType === 'fraction' && <span className="fb-coverflow-carousel-pagination-fraction-separator"> / </span>}
							{paginationType === 'fraction' && <span className="fb-coverflow-carousel-pagination-fraction-total">{slideCount}</span>}
							{paginationType === 'bullets' && (
								Array.from({ length: slideCount }).map((_, idx) => (
									<span 
										key={idx} 
										className={`fb-coverflow-carousel-bullet ${idx === editorIndex ? 'active' : ''}`}
										onClick={(e) => {
											e.stopPropagation();
											setEditorIndex(idx);
										}}
									></span>
								))
							)}
						</div>
					)}
				</div>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}
