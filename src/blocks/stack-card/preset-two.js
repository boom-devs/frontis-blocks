import {
	getDeviceTypeFromWidth,
	getResponsiveValue,
	parsePresetRootConfig,
	toNumber,
} from './preset-runtime-utils';

export const PRESET_TWO_STYLE = 'stack-left';

const DEFAULT_PRESET_TWO_CONFIG = {
	cardWidth: { Desktop: '620', Tablet: '520', Mobile: '320' },
	cardWidthUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
	leftOffsetStep: { Desktop: '28', Tablet: '24', Mobile: '18' },
	outDistance: { Desktop: '110', Tablet: '90', Mobile: '70' },
	minScale: { Desktop: '0.7', Tablet: '0.7', Mobile: '0.7' },
	scaleStep: { Desktop: '0.035', Tablet: '0.03', Mobile: '0.025' },
	scaleYStep: { Desktop: '0.02', Tablet: '0.02', Mobile: '0.015' },
	opacityStep: { Desktop: '0.12', Tablet: '0.12', Mobile: '0.1' },
	visibleLayers: { Desktop: '4', Tablet: '4', Mobile: '3' },
	autoPlay: true,
	autoPlayDelay: { Desktop: '2500', Tablet: '2500', Mobile: '2500' },
	animationSpeed: { Desktop: '0.45', Tablet: '0.45', Mobile: '0.45' },
	keyboardNavigation: true,
	cardClickToActive: true,
	showAllLayers: false,
};

export const isPresetTwoStackLeft = (presetStyle) =>
	presetStyle === PRESET_TWO_STYLE;

function resolvePresetTwoRuntimeConfig(config, width) {
	const deviceType = getDeviceTypeFromWidth(width);

	return {
		deviceType,
		cardWidth: toNumber(getResponsiveValue(config.cardWidth, deviceType), 620),
		cardWidthUnit: getResponsiveValue(config.cardWidthUnits, deviceType) || 'px',
		leftOffsetStep: toNumber(getResponsiveValue(config.leftOffsetStep, deviceType), 28),
		outDistance: toNumber(getResponsiveValue(config.outDistance, deviceType), 110),
		minScale: toNumber(getResponsiveValue(config.minScale, deviceType), 0.7),
		scaleXStep: toNumber(getResponsiveValue(config.scaleStep, deviceType), 0.035),
		scaleYStep: toNumber(getResponsiveValue(config.scaleYStep, deviceType), 0.02),
		opacityStep: toNumber(getResponsiveValue(config.opacityStep, deviceType), 0.12),
		visibleLayers: Math.max(1, Math.round(toNumber(getResponsiveValue(config.visibleLayers, deviceType), 4))),
		autoPlay: !!config.autoPlay,
		autoPlayDelay: toNumber(getResponsiveValue(config.autoPlayDelay, deviceType), 2500),
		animationSpeed: toNumber(getResponsiveValue(config.animationSpeed, deviceType), 0.45),
		keyboardNavigation: !!config.keyboardNavigation,
		cardClickToActive: !!config.cardClickToActive,
		showAllLayers: !!config.showAllLayers,
	};
}

export function getPresetTwoConfig(attributes = {}) {
	return {
		cardWidth: attributes.stackCardsPresetTwoCardWidth || DEFAULT_PRESET_TWO_CONFIG.cardWidth,
		cardWidthUnits: attributes.stackCardsPresetTwoCardWidthUnits || DEFAULT_PRESET_TWO_CONFIG.cardWidthUnits,
		leftOffsetStep: attributes.stackCardsPresetTwoLeftOffsetStep || DEFAULT_PRESET_TWO_CONFIG.leftOffsetStep,
		outDistance: attributes.stackCardsPresetTwoOutDistance || DEFAULT_PRESET_TWO_CONFIG.outDistance,
		minScale: attributes.stackCardsPresetTwoMinScale || DEFAULT_PRESET_TWO_CONFIG.minScale,
		scaleStep: attributes.stackCardsPresetTwoScaleStep || DEFAULT_PRESET_TWO_CONFIG.scaleStep,
		scaleYStep: attributes.stackCardsPresetTwoScaleYStep || DEFAULT_PRESET_TWO_CONFIG.scaleYStep,
		opacityStep: attributes.stackCardsPresetTwoOpacityStep || DEFAULT_PRESET_TWO_CONFIG.opacityStep,
		visibleLayers: attributes.stackCardsPresetTwoVisibleLayers || DEFAULT_PRESET_TWO_CONFIG.visibleLayers,
		autoPlay: attributes.stackCardsPresetTwoAutoPlay ?? DEFAULT_PRESET_TWO_CONFIG.autoPlay,
		autoPlayDelay: attributes.stackCardsPresetTwoAutoPlayDelay || DEFAULT_PRESET_TWO_CONFIG.autoPlayDelay,
		animationSpeed: attributes.stackCardsPresetTwoAnimationSpeed || DEFAULT_PRESET_TWO_CONFIG.animationSpeed,
		keyboardNavigation: attributes.stackCardsPresetTwoKeyboardNavigation ?? DEFAULT_PRESET_TWO_CONFIG.keyboardNavigation,
		cardClickToActive: attributes.stackCardsPresetTwoCardClickToActive ?? DEFAULT_PRESET_TWO_CONFIG.cardClickToActive,
		showAllLayers: attributes.stackCardsPresetTwoShowAllLayers ?? DEFAULT_PRESET_TWO_CONFIG.showAllLayers,
	};
}

export function serializePresetTwoConfig(attributes = {}) {
	return JSON.stringify(getPresetTwoConfig(attributes));
}

export function bindPresetTwoBehavior(root, options = {}) {
	if (root.__fbPresetTwoInstance) {
		if (options.config) {
			root.__fbPresetTwoInstance.updateConfig?.(options.config);
		}
		return root.__fbPresetTwoInstance.cleanup;
	}

	const slider = root.querySelector('.fb-stack-cards-frame');
	const items = Array.from(root.querySelectorAll('.fb-stack-card-item'));
	const doc = root.ownerDocument || document;
	const win = doc.defaultView || window;
	const isEditor = !!options.isEditor;

	if (!slider || !items.length) {
		return () => {};
	}

	const totalItems = items.length;
	const config = {
		...DEFAULT_PRESET_TWO_CONFIG,
		...(options.config || parsePresetRootConfig(root, 'presetTwoConfig', DEFAULT_PRESET_TWO_CONFIG)),
	};

	let runtimeConfig = resolvePresetTwoRuntimeConfig(config, win.innerWidth || 1440);
	let currentItem = 0;
	let isAnimating = false;
	let autoTimer = null;
	let sliderActive = isEditor;
	let touchStartX = 0;
	let touchStartY = 0;
	let destroyed = false;
	const cleanupFns = [];

	const isVerticalDevice = () => runtimeConfig.deviceType !== 'Desktop';

	const addListener = (target, eventName, handler, listenerOptions) => {
		target.addEventListener(eventName, handler, listenerOptions);
		cleanupFns.push(() => target.removeEventListener(eventName, handler, listenerOptions));
	};

	const safeTimeout = (callback, delay) => {
		const timeoutId = setTimeout(() => {
			if (!destroyed) {
				callback();
			}
		}, delay);
		cleanupFns.push(() => clearTimeout(timeoutId));
	};

	items.forEach((item) => {
		item.style.gridArea = '1 / 1';
		item.style.alignSelf = 'start';
		item.style.justifySelf = isVerticalDevice() ? 'center' : 'start';
		item.style.transformOrigin = isVerticalDevice() ? 'center center' : 'left center';
		item.style.width = `min(100%, ${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit})`;
		item.style.maxWidth = `${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit}`;
	});

	function getEffectiveVisibleLayers() {
		return runtimeConfig.showAllLayers
			? totalItems
			: Math.min(runtimeConfig.visibleLayers, totalItems);
	}

	function syncSliderLayout() {
		slider.style.width = '100%';
		slider.style.maxWidth = `${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit}`;
	}

	function syncSliderBounds(totalVisibleLayers = getEffectiveVisibleLayers()) {
		let maxHeight = 0;
		let maxWidth = runtimeConfig.cardWidth;

		for (let i = 0; i < totalVisibleLayers; i++) {
			const style = getLayerStyle(i, totalVisibleLayers);
			const itemWidth = style.width * style.scaleX;
			const item = items[(currentItem + i) % totalItems];
			const content = item?.querySelector('.fb-stack-card-item__content') || item;
			const contentHeight = content?.offsetHeight || item?.offsetHeight || 0;
			const scaledHeight = contentHeight * style.scaleY;

			if (isVerticalDevice()) {
				maxHeight = Math.max(maxHeight, style.offsetX + scaledHeight);
				maxWidth = Math.max(maxWidth, itemWidth);
			} else {
				maxHeight = Math.max(maxHeight, scaledHeight);
				maxWidth = Math.max(maxWidth, style.offsetX + itemWidth);
			}
		}

		if (maxHeight > 0) {
			slider.style.minHeight = `${maxHeight}px`;
		}

		if (maxWidth > 0) {
			slider.style.minWidth = `min(100%, ${maxWidth}${runtimeConfig.cardWidthUnit})`;
		}
	}

	function getLayerStyle(index, totalVisibleLayers = getEffectiveVisibleLayers()) {
		const reverseIndex = Math.max(totalVisibleLayers - 1 - index, 0);
		const scaleYBase = Math.max(runtimeConfig.minScale - runtimeConfig.scaleYStep, 0.1);
		return {
			width: runtimeConfig.cardWidth,
			widthUnit: runtimeConfig.cardWidthUnit,
			offsetX: reverseIndex * runtimeConfig.leftOffsetStep,
			scaleX: Math.min(Math.max(runtimeConfig.minScale + reverseIndex * runtimeConfig.scaleXStep, 0.1), 1),
			scaleY: Math.max(scaleYBase + reverseIndex * runtimeConfig.scaleYStep, 0.1),
			opacity: Math.max(1 - index * runtimeConfig.opacityStep, 0),
			zIndex: Math.max(totalVisibleLayers - index, 1),
		};
	}

	function applyStyle(item, index, speed = runtimeConfig.animationSpeed, totalVisibleLayers = getEffectiveVisibleLayers()) {
		const style = getLayerStyle(index, totalVisibleLayers);
		const offsetTransform = isVerticalDevice()
			? `translateY(${style.offsetX}px)`
			: `translateX(${style.offsetX}px)`;
		item.style.transition = `
			transform ${speed}s ease,
			opacity ${speed}s ease,
			width ${speed}s ease,
			max-width ${speed}s ease
		`;
		item.style.width = `min(100%, ${style.width}${style.widthUnit})`;
		item.style.maxWidth = `${style.width}${style.widthUnit}`;
		item.style.opacity = `${style.opacity}`;
		item.style.visibility = 'visible';
		item.style.pointerEvents = 'auto';
		item.style.zIndex = `${style.zIndex}`;
		item.style.transform = `
			${offsetTransform}
			scale(${style.scaleX}, ${style.scaleY})
		`;
	}

	function hideItem(item, fallbackIndex, totalVisibleLayers = getEffectiveVisibleLayers()) {
		const style = getLayerStyle(Math.max(fallbackIndex, 0), totalVisibleLayers);
		const offsetTransform = isVerticalDevice()
			? `translateY(${style.offsetX}px)`
			: `translateX(${style.offsetX}px)`;
		item.classList.remove('active');
		item.style.opacity = '0';
		item.style.visibility = 'hidden';
		item.style.pointerEvents = 'none';
		item.style.zIndex = '0';
		item.style.width = `min(100%, ${style.width}${style.widthUnit})`;
		item.style.maxWidth = `${style.width}${style.widthUnit}`;
		item.style.transform = `
			${offsetTransform}
			scale(${style.scaleX}, ${style.scaleY})
		`;
	}

	function getOutTransform(direction = 'left') {
		const distance = runtimeConfig.outDistance;
		const isVertical = isVerticalDevice();
		const x = isVertical ? 0 : (direction === 'right' ? distance : -distance);
		const y = isVertical ? (direction === 'right' ? distance : -distance) : 0;
		return `
			translate(${x}px, ${y}px)
			scale(
				${Math.max(runtimeConfig.minScale - runtimeConfig.scaleXStep - 0.08, 0.7)},
				${Math.max(runtimeConfig.minScale - runtimeConfig.scaleYStep - 0.08, 0.8)}
			)
		`;
	}

	function updatePositions(speed = runtimeConfig.animationSpeed) {
		const effectiveVisibleLayers = getEffectiveVisibleLayers();
		syncSliderLayout(effectiveVisibleLayers);
		items.forEach((item) => item.classList.remove('active'));

		for (let i = 0; i < totalItems; i++) {
			const itemIndex = (currentItem + i) % totalItems;
			const item = items[itemIndex];

			if (i >= effectiveVisibleLayers) {
				hideItem(item, effectiveVisibleLayers - 1, effectiveVisibleLayers);
				continue;
			}

			if (i === 0) {
				item.classList.add('active');
			}

			applyStyle(item, i, speed, effectiveVisibleLayers);
		}

		syncSliderBounds(effectiveVisibleLayers);
	}

	function applyRuntimeConfig(nextConfig = config) {
		Object.assign(config, nextConfig);
		runtimeConfig = resolvePresetTwoRuntimeConfig(config, win.innerWidth || 1440);

		items.forEach((item) => {
			item.style.justifySelf = isVerticalDevice() ? 'center' : 'start';
			item.style.transformOrigin = isVerticalDevice() ? 'center center' : 'left center';
			item.style.width = `min(100%, ${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit})`;
			item.style.maxWidth = `${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit}`;
		});

		updatePositions(0);
		restartAutoLoop();
	}

	function stopAutoLoop() {
		clearInterval(autoTimer);
		autoTimer = null;
	}

	function startAutoLoop() {
		if (isEditor || !sliderActive || !runtimeConfig.autoPlay) {
			return;
		}

		stopAutoLoop();
		autoTimer = setInterval(() => {
			moveNext('left', false);
		}, runtimeConfig.autoPlayDelay);
	}

	function restartAutoLoop() {
		stopAutoLoop();
		startAutoLoop();
	}

	function moveNext(direction = 'left', fast = false) {
		if (destroyed || !sliderActive || isAnimating) {
			return;
		}

		isAnimating = true;
		const speed = fast ? Math.max(runtimeConfig.animationSpeed * 0.62, 0.1) : runtimeConfig.animationSpeed;
		const updateSpeed = fast ? Math.max(runtimeConfig.animationSpeed * 0.78, 0.15) : runtimeConfig.animationSpeed + 0.15;
		const oldCurrentItem = items[currentItem];

		oldCurrentItem.style.transition = `transform ${speed}s ease, opacity ${speed}s ease`;
		oldCurrentItem.style.transform = getOutTransform(direction);
		oldCurrentItem.style.opacity = '0';

		safeTimeout(() => {
			currentItem = (currentItem + 1) % totalItems;
			updatePositions(updateSpeed);

			safeTimeout(() => {
				isAnimating = false;
			}, updateSpeed * 1000);
		}, speed * 1000);
	}

	function movePrev(direction = 'right', fast = false) {
		if (destroyed || !sliderActive || isAnimating) {
			return;
		}

		isAnimating = true;
		const speed = fast ? Math.max(runtimeConfig.animationSpeed * 0.62, 0.1) : runtimeConfig.animationSpeed;
		const updateSpeed = fast ? Math.max(runtimeConfig.animationSpeed * 0.78, 0.15) : runtimeConfig.animationSpeed + 0.15;
		const oldCurrentItem = items[currentItem];

		oldCurrentItem.style.transition = `transform ${speed}s ease, opacity ${speed}s ease`;
		oldCurrentItem.style.transform = getOutTransform(direction);
		oldCurrentItem.style.opacity = '0';

		safeTimeout(() => {
			currentItem = (currentItem - 1 + totalItems) % totalItems;
			updatePositions(updateSpeed);

			safeTimeout(() => {
				isAnimating = false;
			}, updateSpeed * 1000);
		}, speed * 1000);
	}

	items.forEach((clickedItem, clickedIndex) => {
		addListener(clickedItem, 'click', () => {
			if (!config.cardClickToActive || !sliderActive || isAnimating) {
				return;
			}

			const diff = (clickedIndex - currentItem + totalItems) % totalItems;
			if (diff === 0) {
				return;
			}

			isAnimating = true;
			const speed = Math.max(runtimeConfig.animationSpeed * 0.78, 0.15);
			const oldCurrentItem = items[currentItem];

			oldCurrentItem.style.transition = `transform ${speed}s ease, opacity ${speed}s ease`;
			oldCurrentItem.style.transform = getOutTransform('left');
			oldCurrentItem.style.opacity = '0';

			safeTimeout(() => {
				currentItem = clickedIndex;
				updatePositions(Math.max(runtimeConfig.animationSpeed * 0.9, 0.2));

				safeTimeout(() => {
					isAnimating = false;
				}, 400);
			}, speed * 1000);

			restartAutoLoop();
		});
	});

	if (!isEditor) {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				sliderActive = entry.isIntersecting;

				if (sliderActive) {
					startAutoLoop();
				} else {
					stopAutoLoop();
				}
			},
			{ threshold: 0.5 }
		);

		observer.observe(slider);
		cleanupFns.push(() => observer.disconnect());
	}

	addListener(
		slider,
		'wheel',
		(event) => {
			if (!sliderActive) {
				return;
			}

			event.preventDefault();

			if (event.deltaY > 0) {
				moveNext('left', true);
			} else {
				movePrev('right', true);
			}

			restartAutoLoop();
		},
		{ passive: false }
	);

	addListener(slider, 'touchstart', (event) => {
		if (!sliderActive) {
			return;
		}

		touchStartX = event.touches[0].clientX;
		touchStartY = event.touches[0].clientY;
	});

	addListener(slider, 'touchend', (event) => {
		if (!sliderActive) {
			return;
		}

		const touchEndX = event.changedTouches[0].clientX;
		const touchEndY = event.changedTouches[0].clientY;
		const diffX = touchEndX - touchStartX;
		const diffY = touchEndY - touchStartY;

		if (Math.abs(diffX) < 40 && Math.abs(diffY) < 40) {
			return;
		}

		if (Math.abs(diffX) > Math.abs(diffY)) {
			if (diffX < 0) {
				moveNext('left', true);
			} else {
				movePrev('right', true);
			}
		} else if (diffY < 0) {
			moveNext('left', true);
		} else {
			movePrev('right', true);
		}

		restartAutoLoop();
	});

	addListener(doc, 'keydown', (event) => {
		if (!config.keyboardNavigation || !sliderActive || isAnimating) {
			return;
		}

		switch (event.key) {
			case 'ArrowRight':
			case 'ArrowDown':
				moveNext('left', true);
				restartAutoLoop();
				break;
			case 'ArrowLeft':
			case 'ArrowUp':
				movePrev('right', true);
				restartAutoLoop();
				break;
			default:
				break;
		}
	});

	addListener(win, 'resize', () => {
		applyRuntimeConfig();
	});

	updatePositions();

	const cleanup = () => {
		destroyed = true;
		stopAutoLoop();
		cleanupFns.forEach((cleanupFn) => cleanupFn());
		if (root.__fbPresetTwoInstance?.cleanup === cleanup) {
			root.__fbPresetTwoInstance = null;
		}
		root.__fbPresetTwoInitialized = null;

		items.forEach((item) => {
			item.classList.remove('active');
			item.style.removeProperty('grid-area');
			item.style.removeProperty('align-self');
			item.style.removeProperty('justify-self');
			item.style.removeProperty('width');
			item.style.removeProperty('max-width');
			item.style.removeProperty('transform-origin');
			item.style.removeProperty('opacity');
			item.style.removeProperty('visibility');
			item.style.removeProperty('pointer-events');
			item.style.removeProperty('z-index');
			item.style.removeProperty('transform');
			item.style.removeProperty('transition');
		});
		slider.style.removeProperty('width');
		slider.style.removeProperty('max-width');
		slider.style.removeProperty('min-width');
		slider.style.removeProperty('min-height');
	};

	root.__fbPresetTwoInstance = {
		updateConfig: applyRuntimeConfig,
		cleanup,
	};

	return cleanup;
}

export function initPresetTwoViewScript(doc = document) {
	if (typeof window === 'undefined' || !doc?.querySelectorAll) {
		return;
	}

	doc
		.querySelectorAll(`.fb-stack-cards-main-wrapper.fb-stack-cards-preset-${PRESET_TWO_STYLE}`)
		.forEach((root) => {
			if (root.__fbPresetTwoInstance) {
				return;
			}
			root.__fbPresetTwoInitialized = bindPresetTwoBehavior(root);
		});
}
