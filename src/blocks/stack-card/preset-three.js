import {
	getDeviceTypeFromWidth,
	getResponsiveValue,
	parsePresetRootConfig,
	toNumber,
} from './preset-runtime-utils';

export const PRESET_THREE_STYLE = 'stack-right';

const DEFAULT_PRESET_THREE_CONFIG = {
	frameHeight: { Desktop: '400', Tablet: '400', Mobile: '400' },
	frameHeightUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
	frameWidth: { Desktop: '400', Tablet: '400', Mobile: '400' },
	frameWidthUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
	itemWidth: { Desktop: '300', Tablet: '300', Mobile: '300' },
	itemWidthUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
	offsetStep: { Desktop: '24', Tablet: '24', Mobile: '20' },
	visibleLayers: { Desktop: '3', Tablet: '3', Mobile: '3' },
	autoPlay: true,
	autoPlayDelay: { Desktop: '2500', Tablet: '2500', Mobile: '2500' },
	keyboardNavigation: true,
	cardClickToActive: true,
	showAllLayers: false,
	animationSpeed: { Desktop: '0.45', Tablet: '0.45', Mobile: '0.45' },
};

export const isPresetThreeStackRight = (presetStyle) =>
	presetStyle === PRESET_THREE_STYLE;

function resolvePresetThreeRuntimeConfig(config, width) {
	const deviceType = getDeviceTypeFromWidth(width);

	return {
		deviceType,
		frameHeight: toNumber(getResponsiveValue(config.frameHeight, deviceType), 400),
		frameHeightUnit: getResponsiveValue(config.frameHeightUnits, deviceType) || 'px',
		frameWidth: toNumber(getResponsiveValue(config.frameWidth, deviceType), 400),
		frameWidthUnit: getResponsiveValue(config.frameWidthUnits, deviceType) || 'px',
		itemWidth: toNumber(getResponsiveValue(config.itemWidth, deviceType), 300),
		itemWidthUnit: getResponsiveValue(config.itemWidthUnits, deviceType) || 'px',
		offsetStep: toNumber(getResponsiveValue(config.offsetStep, deviceType), 24),
		visibleLayers: Math.max(1, Math.round(toNumber(getResponsiveValue(config.visibleLayers, deviceType), 3))),
		autoPlay: !!config.autoPlay,
		autoPlayDelay: toNumber(getResponsiveValue(config.autoPlayDelay, deviceType), 2500),
		keyboardNavigation: !!config.keyboardNavigation,
		cardClickToActive: !!config.cardClickToActive,
		showAllLayers: !!config.showAllLayers,
		animationSpeed: toNumber(getResponsiveValue(config.animationSpeed, deviceType), 0.45),
	};
}

export function getPresetThreeConfig(attributes = {}) {
	return {
		frameHeight: attributes.stackCardsPresetThreeFrameHeight || DEFAULT_PRESET_THREE_CONFIG.frameHeight,
		frameHeightUnits: attributes.stackCardsPresetThreeFrameHeightUnits || DEFAULT_PRESET_THREE_CONFIG.frameHeightUnits,
		frameWidth: attributes.stackCardsPresetThreeFrameWidth || DEFAULT_PRESET_THREE_CONFIG.frameWidth,
		frameWidthUnits: attributes.stackCardsPresetThreeFrameWidthUnits || DEFAULT_PRESET_THREE_CONFIG.frameWidthUnits,
		itemWidth: attributes.stackCardsPresetThreeItemWidth || DEFAULT_PRESET_THREE_CONFIG.itemWidth,
		itemWidthUnits: attributes.stackCardsPresetThreeItemWidthUnits || DEFAULT_PRESET_THREE_CONFIG.itemWidthUnits,
		offsetStep: attributes.stackCardsPresetThreeOffsetStep || DEFAULT_PRESET_THREE_CONFIG.offsetStep,
		visibleLayers: attributes.stackCardsPresetThreeVisibleLayers || DEFAULT_PRESET_THREE_CONFIG.visibleLayers,
		autoPlay: attributes.stackCardsPresetThreeAutoPlay ?? DEFAULT_PRESET_THREE_CONFIG.autoPlay,
		autoPlayDelay: attributes.stackCardsPresetThreeAutoPlayDelay || DEFAULT_PRESET_THREE_CONFIG.autoPlayDelay,
		keyboardNavigation: attributes.stackCardsPresetThreeKeyboardNavigation ?? DEFAULT_PRESET_THREE_CONFIG.keyboardNavigation,
		cardClickToActive: attributes.stackCardsPresetThreeCardClickToActive ?? DEFAULT_PRESET_THREE_CONFIG.cardClickToActive,
		showAllLayers: attributes.stackCardsPresetThreeShowAllLayers ?? DEFAULT_PRESET_THREE_CONFIG.showAllLayers,
		animationSpeed: attributes.stackCardsPresetThreeAnimationSpeed ?? DEFAULT_PRESET_THREE_CONFIG.animationSpeed,
	};
}

export function serializePresetThreeConfig(attributes = {}) {
	return JSON.stringify(getPresetThreeConfig(attributes));
}

export function bindPresetThreeBehavior(root, options = {}) {
	if (root.__fbPresetThreeInstance) {
		if (options.config) {
			root.__fbPresetThreeInstance.updateConfig?.(options.config);
		}
		return root.__fbPresetThreeInstance.cleanup;
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
		...DEFAULT_PRESET_THREE_CONFIG,
		...(options.config || parsePresetRootConfig(root, 'presetThreeConfig', DEFAULT_PRESET_THREE_CONFIG)),
	};

	let runtimeConfig = resolvePresetThreeRuntimeConfig(config, win.innerWidth || 1440);
	let currentItem = 0;
	let isAnimating = false;
	let sliderActive = isEditor;
	let autoTimer = null;
	let touchStartX = 0;
	let touchStartY = 0;
	let destroyed = false;
	const cleanupFns = [];

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
		item.style.position = 'absolute';
		item.style.left = 'auto';
		item.style.top = 'auto';
		item.style.transform = 'none';
		item.style.width = `${runtimeConfig.itemWidth}${runtimeConfig.itemWidthUnit}`;
		item.style.maxWidth = `${runtimeConfig.itemWidth}${runtimeConfig.itemWidthUnit}`;
		item.style.transition = `
			right ${runtimeConfig.animationSpeed}s ease,
			bottom ${runtimeConfig.animationSpeed}s ease,
			opacity ${runtimeConfig.animationSpeed}s ease
		`;
	});

	function getEffectiveVisibleLayers() {
		return runtimeConfig.showAllLayers
			? totalItems
			: Math.min(runtimeConfig.visibleLayers, totalItems);
	}

	function getLayerOffset(index, totalVisibleLayers = getEffectiveVisibleLayers()) {
		const boundedIndex = Math.min(index, Math.max(totalVisibleLayers - 1, 0));
		return boundedIndex * runtimeConfig.offsetStep;
	}

	function syncSliderLayout() {
		slider.style.position = 'relative';
		slider.style.width = `${runtimeConfig.frameWidth}${runtimeConfig.frameWidthUnit}`;
		slider.style.maxWidth = `${runtimeConfig.frameWidth}${runtimeConfig.frameWidthUnit}`;
		slider.style.height = `${runtimeConfig.frameHeight}${runtimeConfig.frameHeightUnit}`;
		slider.style.minHeight = `${runtimeConfig.frameHeight}${runtimeConfig.frameHeightUnit}`;
	}

	function applyItemPosition(item, index, speed = runtimeConfig.animationSpeed, totalVisibleLayers = getEffectiveVisibleLayers()) {
		const offset = getLayerOffset(index, totalVisibleLayers);
		item.style.transition = `
			right ${speed}s ease,
			bottom ${speed}s ease,
			opacity ${speed}s ease
		`;
		item.style.width = `${runtimeConfig.itemWidth}${runtimeConfig.itemWidthUnit}`;
		item.style.maxWidth = `${runtimeConfig.itemWidth}${runtimeConfig.itemWidthUnit}`;
		item.style.right = `${offset}px`;
		item.style.bottom = `${offset}px`;
		item.style.opacity = '1';
		item.style.visibility = 'visible';
		item.style.pointerEvents = 'auto';
		item.style.zIndex = `${Math.max(totalVisibleLayers - index, 1)}`;
	}

	function hideItem(item, fallbackIndex, totalVisibleLayers = getEffectiveVisibleLayers()) {
		const offset = getLayerOffset(fallbackIndex, totalVisibleLayers);
		item.classList.remove('active');
		item.style.width = `${runtimeConfig.itemWidth}${runtimeConfig.itemWidthUnit}`;
		item.style.maxWidth = `${runtimeConfig.itemWidth}${runtimeConfig.itemWidthUnit}`;
		item.style.right = `${offset}px`;
		item.style.bottom = `${offset}px`;
		item.style.opacity = '0';
		item.style.visibility = 'hidden';
		item.style.pointerEvents = 'none';
		item.style.zIndex = '0';
	}

	function updatePositions(speed = runtimeConfig.animationSpeed) {
		const effectiveVisibleLayers = getEffectiveVisibleLayers();
		syncSliderLayout();
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

			applyItemPosition(item, i, speed, effectiveVisibleLayers);
		}
	}

	function applyRuntimeConfig(nextConfig = config) {
		Object.assign(config, nextConfig);
		runtimeConfig = resolvePresetThreeRuntimeConfig(config, win.innerWidth || 1440);
		items.forEach((item) => {
			item.style.width = `${runtimeConfig.itemWidth}${runtimeConfig.itemWidthUnit}`;
			item.style.maxWidth = `${runtimeConfig.itemWidth}${runtimeConfig.itemWidthUnit}`;
			item.style.transition = `
				right ${runtimeConfig.animationSpeed}s ease,
				bottom ${runtimeConfig.animationSpeed}s ease,
				opacity ${runtimeConfig.animationSpeed}s ease
			`;
		});
		updatePositions(0);
		restartAutoLoop();
	}

	function stopAutoLoop() {
		clearInterval(autoTimer);
		autoTimer = null;
	}

	function startAutoLoop() {
		if (!sliderActive || !runtimeConfig.autoPlay) {
			return;
		}

		stopAutoLoop();
		autoTimer = setInterval(() => {
			moveNext();
		}, runtimeConfig.autoPlayDelay);
	}

	function restartAutoLoop() {
		stopAutoLoop();
		startAutoLoop();
	}

	function moveNext() {
		if (destroyed || !sliderActive || isAnimating) {
			return;
		}

		isAnimating = true;
		items[currentItem].style.opacity = '0';

		safeTimeout(() => {
			currentItem = (currentItem + 1) % totalItems;
			updatePositions(runtimeConfig.animationSpeed);
			safeTimeout(() => {
				isAnimating = false;
			}, runtimeConfig.animationSpeed * 1000);
		}, Math.max(runtimeConfig.animationSpeed * 250, 120));
		restartAutoLoop();
	}

	function movePrev() {
		if (destroyed || !sliderActive || isAnimating) {
			return;
		}

		isAnimating = true;
		items[currentItem].style.opacity = '0';

		safeTimeout(() => {
			currentItem = (currentItem - 1 + totalItems) % totalItems;
			updatePositions(runtimeConfig.animationSpeed);
			safeTimeout(() => {
				isAnimating = false;
			}, runtimeConfig.animationSpeed * 1000);
		}, Math.max(runtimeConfig.animationSpeed * 250, 120));
		restartAutoLoop();
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
			items[currentItem].style.opacity = '0';

			safeTimeout(() => {
				currentItem = clickedIndex;
				updatePositions(runtimeConfig.animationSpeed);
				safeTimeout(() => {
					isAnimating = false;
				}, runtimeConfig.animationSpeed * 1000);
			}, Math.max(runtimeConfig.animationSpeed * 250, 120));
			restartAutoLoop();
		});
	});

	if (!isEditor) {
		const observer = new IntersectionObserver(
			(entries) => {
				sliderActive = entries[0]?.isIntersecting ?? false;
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
				moveNext();
			} else {
				movePrev();
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
				moveNext();
			} else {
				movePrev();
			}
		} else if (diffY < 0) {
			moveNext();
		} else {
			movePrev();
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
				moveNext();
				restartAutoLoop();
				break;
			case 'ArrowLeft':
			case 'ArrowUp':
				movePrev();
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
	startAutoLoop();

	const cleanup = () => {
		destroyed = true;
		stopAutoLoop();
		cleanupFns.forEach((cleanupFn) => cleanupFn());
		if (root.__fbPresetThreeInstance?.cleanup === cleanup) {
			root.__fbPresetThreeInstance = null;
		}
		root.__fbPresetThreeInitialized = null;

		items.forEach((item) => {
			item.classList.remove('active');
			item.style.removeProperty('position');
			item.style.removeProperty('left');
			item.style.removeProperty('top');
			item.style.removeProperty('right');
			item.style.removeProperty('bottom');
			item.style.removeProperty('width');
			item.style.removeProperty('max-width');
			item.style.removeProperty('opacity');
			item.style.removeProperty('visibility');
			item.style.removeProperty('pointer-events');
			item.style.removeProperty('z-index');
			item.style.removeProperty('transition');
			item.style.removeProperty('transform');
		});

		slider.style.removeProperty('position');
		slider.style.removeProperty('width');
		slider.style.removeProperty('max-width');
		slider.style.removeProperty('height');
		slider.style.removeProperty('min-height');
	};

	root.__fbPresetThreeInstance = {
		updateConfig: applyRuntimeConfig,
		cleanup,
	};

	return cleanup;
}

export function initPresetThreeViewScript(doc = document) {
	if (typeof window === 'undefined' || !doc?.querySelectorAll) {
		return;
	}

	doc
		.querySelectorAll(`.fb-stack-cards-main-wrapper.fb-stack-cards-preset-${PRESET_THREE_STYLE}`)
		.forEach((root) => {
			if (root.__fbPresetThreeInstance) {
				return;
			}
			root.__fbPresetThreeInitialized = bindPresetThreeBehavior(root);
		});
}
