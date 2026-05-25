/**
 * Preset Three: Stack Right Behavior
 * 
 * This script handles the "Stack Right" animation and interaction logic for the Stack Card block.
 * It manages card positioning (right-bottom corner stack), auto-play, and user interactions.
 */

import {
	getDeviceTypeFromWidth,
	getResponsiveValue,
	parsePresetRootConfig,
	toNumber,
} from '../preset-runtime-utils';

/**
 * Unique identifier for the Stack Right style.
 */
export const STACK_CARD_STYLE_RIGHT = 'stack-right';

/**
 * Default configuration for the Stack Right preset.
 */
const STACK_CARD_DEFAULT_CONFIG_RIGHT = {
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

/**
 * Checks if the given preset style matches the Stack Right style.
 */
export const isStackCardPresetRight = (presetStyle) =>
	presetStyle === STACK_CARD_STYLE_RIGHT;

/**
 * Resolves the configuration for the current device width.
 */
function resolveStackCardRuntimeConfig(config, windowWidth) {
	const deviceType = getDeviceTypeFromWidth(windowWidth);

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

/**
 * Extracts configuration from block attributes or defaults.
 */
export function getStackCardPresetRightConfig(attributes = {}) {
	return {
		frameHeight: attributes.stackCardsPresetThreeFrameHeight || STACK_CARD_DEFAULT_CONFIG_RIGHT.frameHeight,
		frameHeightUnits: attributes.stackCardsPresetThreeFrameHeightUnits || STACK_CARD_DEFAULT_CONFIG_RIGHT.frameHeightUnits,
		frameWidth: attributes.stackCardsPresetThreeFrameWidth || STACK_CARD_DEFAULT_CONFIG_RIGHT.frameWidth,
		frameWidthUnits: attributes.stackCardsPresetThreeFrameWidthUnits || STACK_CARD_DEFAULT_CONFIG_RIGHT.frameWidthUnits,
		itemWidth: attributes.stackCardsPresetThreeItemWidth || STACK_CARD_DEFAULT_CONFIG_RIGHT.itemWidth,
		itemWidthUnits: attributes.stackCardsPresetThreeItemWidthUnits || STACK_CARD_DEFAULT_CONFIG_RIGHT.itemWidthUnits,
		offsetStep: attributes.stackCardsPresetThreeOffsetStep || STACK_CARD_DEFAULT_CONFIG_RIGHT.offsetStep,
		visibleLayers: attributes.stackCardsPresetThreeVisibleLayers || STACK_CARD_DEFAULT_CONFIG_RIGHT.visibleLayers,
		autoPlay: attributes.stackCardsPresetThreeAutoPlay ?? STACK_CARD_DEFAULT_CONFIG_RIGHT.autoPlay,
		autoPlayDelay: attributes.stackCardsPresetThreeAutoPlayDelay || STACK_CARD_DEFAULT_CONFIG_RIGHT.autoPlayDelay,
		keyboardNavigation: attributes.stackCardsPresetThreeKeyboardNavigation ?? STACK_CARD_DEFAULT_CONFIG_RIGHT.keyboardNavigation,
		cardClickToActive: attributes.stackCardsPresetThreeCardClickToActive ?? STACK_CARD_DEFAULT_CONFIG_RIGHT.cardClickToActive,
		showAllLayers: attributes.stackCardsPresetThreeShowAllLayers ?? STACK_CARD_DEFAULT_CONFIG_RIGHT.showAllLayers,
		animationSpeed: attributes.stackCardsPresetThreeAnimationSpeed ?? STACK_CARD_DEFAULT_CONFIG_RIGHT.animationSpeed,
	};
}

/**
 * Serializes the configuration to a JSON string.
 */
export function serializeStackCardPresetRightConfig(attributes = {}) {
	return JSON.stringify(getStackCardPresetRightConfig(attributes));
}

/**
 * Binds the Stack Right behavior to a root element.
 * 
 * @param {HTMLElement} root The block root element.
 * @param {Object} options Configuration and environment options.
 * @returns {Function} Cleanup function.
 */
export function bindStackCardPresetRightBehavior(root, options = {}) {
	if (root.__fbStackCardPresetRightInstance) {
		if (options.config) {
			root.__fbStackCardPresetRightInstance.updateConfig?.(options.config);
		}
		return root.__fbStackCardPresetRightInstance.cleanup;
	}

	const cardFrame = root.querySelector('.fb-stack-cards-frame');
	const cardItems = Array.from(root.querySelectorAll('.fb-stack-card-item'));
	const documentRef = root.ownerDocument || document;
	const windowRef = documentRef.defaultView || window;
	const isBlockEditor = !!options.isEditor;

	if (!cardFrame || !cardItems.length) return () => {};

	const totalItems = cardItems.length;
	const baseConfig = {
		...STACK_CARD_DEFAULT_CONFIG_RIGHT,
		...(options.config || parsePresetRootConfig(root, 'presetThreeConfig', STACK_CARD_DEFAULT_CONFIG_RIGHT)),
	};

	let runtimeConfig = resolveStackCardRuntimeConfig(baseConfig, windowRef.innerWidth || 1440);
	let currentIndex = 0;
	let isAnimating = false;
	let isSliderActive = isBlockEditor;
	let autoPlayTimer = null;
	let touchStartX = 0;
	let touchStartY = 0;
	let isDestroyed = false;
	const eventCleanups = [];

	const addEvent = (target, type, handler, opts) => {
		target.addEventListener(type, handler, opts);
		eventCleanups.push(() => target.removeEventListener(type, handler, opts));
	};

	const safeWait = (callback, delay) => {
		const id = setTimeout(() => {
			if (!isDestroyed) callback();
		}, delay);
		eventCleanups.push(() => clearTimeout(id));
	};

	// Initialize individual card item styles
	cardItems.forEach((item) => {
		item.style.position = 'absolute';
		item.style.left = 'auto';
		item.style.top = 'auto';
		item.style.transform = 'none';
		item.style.width = `${runtimeConfig.itemWidth}${runtimeConfig.itemWidthUnit}`;
		item.style.maxWidth = `${runtimeConfig.itemWidth}${runtimeConfig.itemWidthUnit}`;
		item.style.transition = `right ${runtimeConfig.animationSpeed}s ease, bottom ${runtimeConfig.animationSpeed}s ease, opacity ${runtimeConfig.animationSpeed}s ease`;
	});

	function getVisibleLayersCount() {
		return runtimeConfig.showAllLayers ? totalItems : Math.min(runtimeConfig.visibleLayers, totalItems);
	}

	function getLayerOffset(index, visibleCount = getVisibleLayersCount()) {
		const boundedIndex = Math.min(index, Math.max(visibleCount - 1, 0));
		return boundedIndex * runtimeConfig.offsetStep;
	}

	function syncFrameLayout() {
		cardFrame.style.position = 'relative';
		cardFrame.style.width = `${runtimeConfig.frameWidth}${runtimeConfig.frameWidthUnit}`;
		cardFrame.style.maxWidth = `${runtimeConfig.frameWidth}${runtimeConfig.frameWidthUnit}`;
		cardFrame.style.height = `${runtimeConfig.frameHeight}${runtimeConfig.frameHeightUnit}`;
		cardFrame.style.minHeight = `${runtimeConfig.frameHeight}${runtimeConfig.frameHeightUnit}`;
	}

	function applyCardItemStyle(item, index, speed = runtimeConfig.animationSpeed, visibleCount = getVisibleLayersCount()) {
		const offset = getLayerOffset(index, visibleCount);
		item.style.transition = `right ${speed}s ease, bottom ${speed}s ease, opacity ${speed}s ease`;
		item.style.width = `${runtimeConfig.itemWidth}${runtimeConfig.itemWidthUnit}`;
		item.style.maxWidth = `${runtimeConfig.itemWidth}${runtimeConfig.itemWidthUnit}`;
		item.style.right = `${offset}px`;
		item.style.bottom = `${offset}px`;
		item.style.opacity = '1';
		item.style.visibility = 'visible';
		item.style.pointerEvents = 'auto';
		item.style.zIndex = `${Math.max(visibleCount - index, 1)}`;
	}

	function hideCardItem(item, fallbackIdx, visibleCount = getVisibleLayersCount()) {
		const offset = getLayerOffset(fallbackIdx, visibleCount);
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

	function updateStackPositions(speed = runtimeConfig.animationSpeed) {
		const visibleCount = getVisibleLayersCount();
		syncFrameLayout();
		cardItems.forEach((item) => item.classList.remove('active'));

		for (let i = 0; i < totalItems; i++) {
			const targetIdx = (currentIndex + i) % totalItems;
			const item = cardItems[targetIdx];

			if (i >= visibleCount) {
				hideCardItem(item, visibleCount - 1, visibleCount);
				continue;
			}

			if (i === 0) item.classList.add('active');
			applyCardItemStyle(item, i, speed, visibleCount);
		}
	}

	function handleRuntimeUpdate(nextConfig = baseConfig) {
		Object.assign(baseConfig, nextConfig);
		runtimeConfig = resolveStackCardRuntimeConfig(baseConfig, windowRef.innerWidth || 1440);
		cardItems.forEach((item) => {
			item.style.width = `${runtimeConfig.itemWidth}${runtimeConfig.itemWidthUnit}`;
			item.style.maxWidth = `${runtimeConfig.itemWidth}${runtimeConfig.itemWidthUnit}`;
			item.style.transition = `right ${runtimeConfig.animationSpeed}s ease, bottom ${runtimeConfig.animationSpeed}s ease, opacity ${runtimeConfig.animationSpeed}s ease`;
		});
		updateStackPositions(0);
		restartAutoCycle();
	}

	function stopAutoCycle() {
		if (autoPlayTimer) {
			clearInterval(autoPlayTimer);
			autoPlayTimer = null;
		}
	}

	function startAutoCycle() {
		if (!isSliderActive || !runtimeConfig.autoPlay) return;
		stopAutoCycle();
		autoPlayTimer = setInterval(handleMoveNext, runtimeConfig.autoPlayDelay);
	}

	function restartAutoCycle() {
		stopAutoCycle();
		startAutoCycle();
	}

	function handleMoveNext() {
		if (isDestroyed || !isSliderActive || isAnimating) return;

		isAnimating = true;
		cardItems[currentIndex].style.opacity = '0';

		safeWait(() => {
			currentIndex = (currentIndex + 1) % totalItems;
			updateStackPositions(runtimeConfig.animationSpeed);
			safeWait(() => { isAnimating = false; }, runtimeConfig.animationSpeed * 1000);
		}, Math.max(runtimeConfig.animationSpeed * 250, 120));
		restartAutoCycle();
	}

	function handleMovePrev() {
		if (isDestroyed || !isSliderActive || isAnimating) return;

		isAnimating = true;
		cardItems[currentIndex].style.opacity = '0';

		safeWait(() => {
			currentIndex = (currentIndex - 1 + totalItems) % totalItems;
			updateStackPositions(runtimeConfig.animationSpeed);
			safeWait(() => { isAnimating = false; }, runtimeConfig.animationSpeed * 1000);
		}, Math.max(runtimeConfig.animationSpeed * 250, 120));
		restartAutoCycle();
	}

	// Click events
	cardItems.forEach((card, idx) => {
		addEvent(card, 'click', () => {
			if (!baseConfig.cardClickToActive || !isSliderActive || isAnimating) return;
			if (idx === currentIndex) return;

			isAnimating = true;
			cardItems[currentIndex].style.opacity = '0';

			safeWait(() => {
				currentIndex = idx;
				updateStackPositions(runtimeConfig.animationSpeed);
				safeWait(() => { isAnimating = false; }, runtimeConfig.animationSpeed * 1000);
			}, Math.max(runtimeConfig.animationSpeed * 250, 120));
			restartAutoCycle();
		});
	});

	// Visibility observer
	if (!isBlockEditor) {
		const visibilityObserver = new IntersectionObserver((entries) => {
			isSliderActive = entries[0]?.isIntersecting ?? false;
			if (isSliderActive) startAutoCycle();
			else stopAutoCycle();
		}, { threshold: 0.5 });

		visibilityObserver.observe(cardFrame);
		eventCleanups.push(() => visibilityObserver.disconnect());
	}

	// Navigation events
	addEvent(cardFrame, 'wheel', (e) => {
		if (!isSliderActive) return;
		e.preventDefault();
		if (e.deltaY > 0) handleMoveNext();
		else handleMovePrev();
		restartAutoCycle();
	}, { passive: false });

	addEvent(cardFrame, 'touchstart', (e) => {
		if (!isSliderActive) return;
		touchStartX = e.touches[0].clientX;
		touchStartY = e.touches[0].clientY;
	});

	addEvent(cardFrame, 'touchend', (e) => {
		if (!isSliderActive) return;
		const dx = e.changedTouches[0].clientX - touchStartX;
		const dy = e.changedTouches[0].clientY - touchStartY;

		if (Math.abs(dx) < 40 && Math.abs(dy) < 40) return;

		if (Math.abs(dx) > Math.abs(dy)) {
			if (dx < 0) handleMoveNext();
			else handleMovePrev();
		} else {
			if (dy < 0) handleMoveNext();
			else handleMovePrev();
		}
		restartAutoCycle();
	});

	addEvent(documentRef, 'keydown', (e) => {
		if (!baseConfig.keyboardNavigation || !isSliderActive || isAnimating) return;
		switch (e.key) {
			case 'ArrowRight':
			case 'ArrowDown':
				handleMoveNext();
				restartAutoCycle();
				break;
			case 'ArrowLeft':
			case 'ArrowUp':
				handleMovePrev();
				restartAutoCycle();
				break;
		}
	});

	addEvent(windowRef, 'resize', () => handleRuntimeUpdate());

	updateStackPositions();
	startAutoCycle();

	const cleanup = () => {
		isDestroyed = true;
		stopAutoCycle();
		eventCleanups.forEach((fn) => fn());
		
		if (root.__fbStackCardPresetRightInstance?.cleanup === cleanup) {
			root.__fbStackCardPresetRightInstance = null;
		}

		cardItems.forEach((item) => {
			item.classList.remove('active');
			['position', 'left', 'top', 'right', 'bottom', 'width', 'max-width', 'opacity', 'visibility', 'pointer-events', 'z-index', 'transition', 'transform'].forEach(prop => item.style.removeProperty(prop));
		});

		['position', 'width', 'max-width', 'height', 'min-height'].forEach(prop => cardFrame.style.removeProperty(prop));
	};

	root.__fbStackCardPresetRightInstance = {
		updateConfig: handleRuntimeUpdate,
		cleanup,
	};

	return cleanup;
}

/**
 * Initializes all Stack Card instances with Preset Three (Right) on the page.
 */
export function initStackCardPresetRightScript(doc = document) {
	if (typeof window === 'undefined' || !doc?.querySelectorAll) return;

	doc.querySelectorAll(`.fb-stack-cards-main-wrapper.fb-stack-cards-preset-${STACK_CARD_STYLE_RIGHT}`)
		.forEach((root) => {
			if (!root.__fbStackCardPresetRightInstance) {
				bindStackCardPresetRightBehavior(root);
			}
		});
}
