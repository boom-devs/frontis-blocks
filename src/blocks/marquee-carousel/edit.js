import { __ } from "@wordpress/i18n";
import {
	RichText,
	useBlockProps,
	BlockControls,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { useState, useEffect, useRef, useMemo } from "@wordpress/element";
import { useDispatch, useSelect } from "@wordpress/data";
import { createBlock } from "@wordpress/blocks";
import { Swiper } from "swiper/react";
import "./editor.scss";

import Inspector from "./inspector";

const ALLOWED_BLOCKS = ["frontis-blocks/marquee-carousel-item"];

import {
	Navigation,
	Pagination,
	Autoplay,
	Manipulation,
	Mousewheel,
	EffectFade,
	EffectCube,
	EffectCoverflow,
	EffectFlip,
	EffectCreative,
	EffectCards,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-flip";
import "swiper/css/effect-creative";

export default function Edit({ attributes, setAttributes, clientId, context }) {
	const {
		blockId,
		blockStyle,
		speed,
		reverseDirection,
		pauseOnHover,
		sliderGlobalWraperID,
		sliderGlobalWraperClass,
	} = attributes;

	useEffect(() => {
		if (clientId && typeof clientId === "string") {
			setAttributes({
				blockId: "marquee-carousel-" + clientId.slice(0, 8),
			});
		}
	}, [clientId]);

	const arrowsId = context["frontisBlocks:arrowsUniqueId"];
	// console.log("Marque edit ", arrowsId);

	useEffect(() => {
		if (arrowsId && arrowsId !== attributes.arrowsUniqueId) {
			setAttributes({ arrowsUniqueId: arrowsId });
		}
	}, [arrowsId]);

	useEffect(() => {
		if (!arrowsId || !swiperRef.current) return;

		const wrapper = document.querySelector(`.${arrowsId}`);
		if (!wrapper) return;

		const btn = wrapper.querySelector(".fb-news-ticker-pause-btn");
		if (!btn) return;

		const handleClick = () => {
			if (swiperRef.current.autoplay?.running) {
				swiperRef.current.autoplay.stop();
				btn.classList.add("paused");
			} else {
				swiperRef.current.autoplay.start();
				btn.classList.remove("paused");
			}
		};

		btn.addEventListener("click", handleClick);
		return () => btn.removeEventListener("click", handleClick);
	}, [arrowsId]);


	// editor store hooks
	const { insertBlock } = useDispatch("core/block-editor");
	const { getSelectedBlockClientIds } = useSelect("core/block-editor");
	const innerBlocks = useSelect(
		(select) => select("core/block-editor").getBlocks(clientId),
		[clientId],
	);

	//swiper ref
	const swiperRef = useRef(null);

	const blockProps = useBlockProps({
		className: `fb-marquee-slider-container ${blockId}`,
	});

	const getSliderTemplate = useMemo(
		() => [
			["frontis-blocks/marquee-carousel-item"],
			["frontis-blocks/marquee-carousel-item"],
			["frontis-blocks/marquee-carousel-item"],
			["frontis-blocks/marquee-carousel-item"],
		],
		[],
	);

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "swiper-wrapper fb-swiper-wrapper",
			slot: "container-start",
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: getSliderTemplate,
			renderAppender: false,
			orientation: "horizontal",
		},
	);

	// Settings using the arrowsId for navigation
	// const settings = useMemo(
	// 	() => ({
	// 		spaceBetween: 0,
	// 		centeredSlides: false,
	// 		speed: speed,
	// 		autoplay: {
	// 			delay: 1,
	// 			reverseDirection: reverseDirection,
	// 			pauseOnMouseEnter: pauseOnHover,
	// 			disableOnInteraction: false,
	// 			waitForTransition: false,
	// 		},
	// 		loop: true,
	// 		slidesPerView: "auto",
	// 		allowTouchMove: false,
	// 		navigation: arrowsId
	// 			? {
	// 					nextEl: `.${arrowsId} .fb-news-ticker-next`,
	// 					prevEl: `.${arrowsId} .fb-news-ticker-prev`,
	// 					hideOnClick: false, // Keep navigation always visible
	// 			  }
	// 			: false,
	// 	}),
	// 	[speed, reverseDirection, pauseOnHover, arrowsId],
	// );

	const settings = useMemo(
		() => ({
			spaceBetween: 0,
			centeredSlides: false,
			speed: speed || 5000,
			autoplay: {
				delay: 0,
				reverseDirection: reverseDirection,
				pauseOnMouseEnter: pauseOnHover,
				disableOnInteraction: false,
				waitForTransition: true,
			},
			loop: true,
			slidesPerView: "auto",
			allowTouchMove: false,
			freeMode: true,
			freeModeMomentum: false,
			navigation: arrowsId
				? {
					nextEl: `.${arrowsId} .fb-news-ticker-next`,
					prevEl: `.${arrowsId} .fb-news-ticker-prev`,
					hideOnClick: false,
				}
				: false,
		}),
		[speed, reverseDirection, pauseOnHover, arrowsId],
	);


	// Slide actions
	const updateSwiperSoon = () => {
		// Give Gutenberg a tick to commit the inner block change
		requestAnimationFrame(() => {
			if (swiperRef.current?.update) {
				swiperRef.current.update();
			}
		});
	};

	const addNewSlide = () => {
		const newBlock = createBlock("frontis-blocks/marquee-carousel-item");
		insertBlock(newBlock, innerBlocks.length, clientId);
		updateSwiperSoon();
	};

	const duplicateSlide = () => {
		const selectedIds = getSelectedBlockClientIds();
		let target = null;

		if (selectedIds?.length) {
			target = innerBlocks.find((b) => selectedIds.includes(b.clientId));
		}

		// fallback: last slide
		if (!target && innerBlocks.length) {
			target = innerBlocks[innerBlocks.length - 1];
		}

		if (!target) return;

		const duplicated = createBlock(
			target.name,
			{ ...target.attributes },
			(target.innerBlocks || []).map((ib) =>
				createBlock(ib.name, { ...ib.attributes }, ib.innerBlocks || []),
			),
		);

		insertBlock(duplicated, innerBlocks.length, clientId);
		updateSwiperSoon();
	};

	// If blocks count changes (add/remove/duplicate elsewhere), refresh swiper
	useEffect(() => {
		updateSwiperSoon();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [innerBlocks.length]);

	const renderSliderToolbarControls = () => (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon="plus"
					label={__("Add New Slide", "frontis-blocks")}
					onClick={addNewSlide}
				/>
				<ToolbarButton
					icon="admin-page"
					label={__("Duplicate Current Slide", "frontis-blocks")}
					onClick={duplicateSlide}
				/>
			</ToolbarGroup>
		</BlockControls>
	);

	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
			/>
			{renderSliderToolbarControls()}
			<div {...blockProps}>
				<Swiper
					{...settings}
					onSwiper={(instance) => {
						swiperRef.current = instance;
						// ensure first mount is synced
						updateSwiperSoon();
					}}
					className={`fb-marquee-swiper ${sliderGlobalWraperClass}`}
					id={sliderGlobalWraperID}
					modules={[
						Navigation,
						Pagination,
						Autoplay,
						Manipulation,
						Mousewheel,
						EffectFade,
						EffectCube,
						EffectCoverflow,
						EffectFlip,
						EffectCreative,
						EffectCards,
					]}
				>
					<div {...innerBlocksProps} />
				</Swiper>
			</div>
			<style>{blockStyle}</style>
		</>
	);
}