import {
	RichText,
	useBlockProps,
	InnerBlocks,
	useInnerBlocksProps
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';

import { useEffect, useRef, useState } from '@wordpress/element';
import './editor.scss';
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

import Inspector from "./inspector";
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generatecoverflowCarouselNumberStyle from "./styling";
import { useDeviceType } from "@Config/displayType";
import { applyFilters } from '@wordpress/hooks';
import UpgradeToProPopup from '@Utils/upgradeToProPopup';
import getProActive from '@Utils/getProActive';

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

		transitionSpeed,
		carouselTransitionEasing,

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
		reverseDirection,
		pauseOnHover,

		carouselItemTranslateX,
		carouselItemTranslateXUnits,
		carouselItemTranslateY,
		carouselItemTranslateYUnits,
		carouselItemTranslateZ,
		carouselItemTranslateZUnits,
		carouselItemRotateY,
		carouselItemRotateYUnits,

		carouselItemRotateX,
		carouselItemRotateXUnits,
		carouselItemRotateZ,
		carouselItemRotateZUnits,

		carouselPerspective,
		carouselPerspectiveUnits,
		carouselItemScale,
		carouselItemScaleUnits,
	} = attributes;

	const deviceType = useDeviceType();
	const { selectBlock } = useDispatch('core/block-editor');

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
			if (blockStyle !== css) {
				setAttributes({ blockStyle: css });
			}
		}
	}, [attributes, blockID]);
	/** End Generate Block Style */

	const innerBlocks = useSelect((select) => {
		return select('core/block-editor').getBlocks(clientId);
	}, [clientId]);

	const wrapperRef = useRef(null);
	const [editorIndex, setEditorIndex] = useState(2);
	const [slideCount, setSlideCount] = useState(5);
	const [isHovered, setIsHovered] = useState(false);

	const handleNext = (e) => {
		if (e) {
			e.preventDefault();
			e.stopPropagation();
			// Only select block on manual user interaction, not autoplay
			selectBlock(clientId);
		}
		const totalCards = wrapperRef.current ? wrapperRef.current.querySelectorAll('.fb-coverflow-carousel-slide').length : 0;
		if (totalCards > 0) {
			if (editorIndex >= totalCards - 1) {
				if (!loop) return;
				setEditorIndex(0);
			} else {
				setEditorIndex((prev) => prev + 1);
			}
		}
	};

	const handlePrev = (e) => {
		if (e) {
			e.preventDefault();
			e.stopPropagation();
			// Only select block on manual user interaction, not autoplay
			selectBlock(clientId);
		}
		const totalCards = wrapperRef.current ? wrapperRef.current.querySelectorAll('.fb-coverflow-carousel-slide').length : 0;
		if (totalCards > 0) {
			if (editorIndex <= 0) {
				if (!loop) return;
				setEditorIndex(totalCards - 1);
			} else {
				setEditorIndex((prev) => prev - 1);
			}
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

			// Apply disabled styles to editor arrows if loop is off and limits are reached
			const prevBtn = wrapperRef.current.querySelector('.fb-coverflow-carousel-prev-btn');
			const nextBtn = wrapperRef.current.querySelector('.fb-coverflow-carousel-next-btn');

			if (prevBtn) {
				if (!loop && index === 0) {
					prevBtn.classList.add('disabled');
					prevBtn.style.opacity = '0.5';
					prevBtn.style.pointerEvents = 'none';
				} else {
					prevBtn.classList.remove('disabled');
					prevBtn.style.opacity = '';
					prevBtn.style.pointerEvents = '';
				}
			}
			if (nextBtn) {
				if (!loop && index === cards.length - 1) {
					nextBtn.classList.add('disabled');
					nextBtn.style.opacity = '0.5';
					nextBtn.style.pointerEvents = 'none';
				} else {
					nextBtn.classList.remove('disabled');
					nextBtn.style.opacity = '';
					nextBtn.style.pointerEvents = '';
				}
			}

			const customX = parseFloat(carouselItemTranslateX?.[deviceType] || carouselItemTranslateX?.Desktop || 260);
			const customY = parseFloat(carouselItemTranslateY?.[deviceType] || carouselItemTranslateY?.Desktop || 0);
			const customZ = parseFloat(carouselItemTranslateZ?.[deviceType] || carouselItemTranslateZ?.Desktop || -100);
			const customAngleY = parseFloat(carouselItemRotateY?.[deviceType] || carouselItemRotateY?.Desktop || 55);
			const customAngleX = parseFloat(carouselItemRotateX?.[deviceType] || carouselItemRotateX?.Desktop || 0);
			const customAngleZ = parseFloat(carouselItemRotateZ?.[deviceType] || carouselItemRotateZ?.Desktop || 0);
			const customPerspective = carouselPerspective?.[deviceType] || carouselPerspective?.Desktop || 2000;
			const customScale = parseFloat(carouselItemScale?.[deviceType] || carouselItemScale?.Desktop || 0.85);

			if (wrapperRef.current) {
				const wrapperEl = wrapperRef.current.querySelector('.fb-coverflowCarousel-wrapper');
				if (wrapperEl) {
					wrapperEl.style.perspective = `${customPerspective}px`;
				}
			}

			cards.forEach((card, i) => {
				let offset = i - index;
				if (loop) {
					const half = Math.floor(cards.length / 2);
					offset = ((i - index + half + cards.length * 2) % cards.length) - half;
				}
				const absOffset = Math.abs(offset);

				if (offset === 0) {
					card.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)`;
					card.style.opacity = 1;
					card.style.zIndex = 20;
					card.classList.add('active');
				} else {
					let txValue = customX;
					const stepGap = customX * 0.88;
					for (let step = 2; step <= absOffset; step++) {
						txValue += stepGap + (10 * (step - 1));
					}
					const translateX = offset > 0 ? txValue : -txValue;
					const translateY = customY * absOffset;
					const translateZ = customZ + (absOffset - 1) * -30;

					const angleFactor = customAngleY >= 0 ? 5 : -5;
					const rotateY = (customAngleY + (absOffset - 1) * angleFactor) * (offset > 0 ? -1 : 1);
					const rotateX = customAngleX;
					const rotateZ = customAngleZ * (offset > 0 ? -1 : 1);
					const scaleVal = Math.max(1 - (absOffset * (1 - customScale)), 0.1);
					const opacity = Math.max(1 - (absOffset * 0.2), 0.3);

					card.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scaleVal})`;
					card.style.opacity = opacity;
					card.style.zIndex = 20 - absOffset;
					card.classList.remove('active');
				}
				card.style.transition = `transform ${transitionSpeed / 1000}s ${carouselTransitionEasing}, opacity ${transitionSpeed / 1000}s ${carouselTransitionEasing}, z-index ${transitionSpeed / 1000}s ${carouselTransitionEasing}`;
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
		let immediateCleanup = null;
		let delayedCleanup = null;

		const attachListeners = () => {
			if (!wrapperRef.current) return () => { };
			const cards = wrapperRef.current.querySelectorAll('.fb-coverflow-carousel-slide');
			const listeners = [];

			cards.forEach((card, i) => {
				const selectSlide = (e) => {
					e.stopPropagation();
					setEditorIndex(i);
					selectBlock(clientId);
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

		immediateCleanup = attachListeners();

		// Delayed attachment for initial render mounting
		const timer = setTimeout(() => {
			delayedCleanup = attachListeners();
		}, 200);

		return () => {
			if (immediateCleanup) immediateCleanup();
			if (delayedCleanup) delayedCleanup();
			clearTimeout(timer);
		};
	}, [editorIndex, slideCount, attributes, innerBlocks]);

	// Autoplay inside Gutenberg Editor
	useEffect(() => {
		if (!autoplay) return;
		if (pauseOnHover && isHovered) return;

		const interval = setInterval(() => {
			if (reverseDirection) {
				handlePrev();
			} else {
				handleNext();
			}
		}, autoplaySpeed);

		return () => clearInterval(interval);
	}, [autoplay, autoplaySpeed, reverseDirection, editorIndex, loop, slideCount, pauseOnHover, isHovered]);

	const ALLOWED_BLOCKS = ['frontis-blocks/coverflow-carousel-item'];

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: 'fb-coverflowCarousel-items-container',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: [
				['frontis-blocks/coverflow-carousel-item'],
				['frontis-blocks/coverflow-carousel-item'],
				['frontis-blocks/coverflow-carousel-item'],
				['frontis-blocks/coverflow-carousel-item'],
				['frontis-blocks/coverflow-carousel-item'],
			],
		}
	);

	const blockProps = useBlockProps({
		className: `fb-coverflowCarousel-main-wrapper ${blockID ? blockID : ''} ${coverflowCarouselDesktopSwitcher ? 'fb-desktop-responsive' : ''} ${coverflowCarouselTabletSwitcher ? 'fb-tablet-responsive' : ''} ${coverflowCarouselMobileSwitcher ? 'fb-mobile-responsive' : ''}`.trim(),
	});

	// Conditional rendering
	const isProActive = getProActive();
	const coverflowCarouselAvailable = applyFilters('frontisblocks-coverflow-carousel-available', false);

	if(!coverflowCarouselAvailable || !isProActive) {
		return (
			<UpgradeToProPopup />
		)
	}

	return (
		<>
			{isSelected && (
				<Inspector
					attributes={attributes}
					setAttributes={setAttributes}
				/>
			)}

			<div
				{...blockProps}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className={`fb-parent-wrapper fb-coverflowCarousel-wrapper ${blockID} ${coverflowCarouselGlobalWraperClass}`} id={coverflowCarouselGlobalWraperID} ref={wrapperRef}>
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
											selectBlock(clientId);
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
