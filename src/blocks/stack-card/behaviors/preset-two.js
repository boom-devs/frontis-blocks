/**
 * Preset Two: Stack Left Behavior
 * 
 * This script handles the "Stack Left" animation and interaction logic for the Stack Card block.
 * It manages card positioning, scaling, opacity, auto-play, and user interactions (click, wheel, touch).
 */

import {
	getDeviceTypeFromWidth,
	getResponsiveValue,
	parsePresetRootConfig,
	toNumber,
} from '../preset-runtime-utils';

/**
 * Unique identifier for the Stack Left style.
 */
export const STACK_CARD_STYLE_LEFT = 'stack-left';

/**
 * Default configuration for the Stack Left preset.
 * Values are defined for Desktop, Tablet, and Mobile devices.
 */
const STACK_CARD_DEFAULT_CONFIG_LEFT = {
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

/**
 * Checks if the given preset style matches the Stack Left style.
 * 
 * @param {string} presetStyle The preset style to check.
 * @returns {boolean} True if it matches.
 */
export const isStackCardPresetLeft = (presetStyle) =>
	presetStyle === STACK_CARD_STYLE_LEFT;

/**
 * Resolves the configuration for the current device width.
 * 
 * @param {Object} config The full configuration object.
 * @param {number} windowWidth Current window width.
 * @returns {Object} Device-specific configuration.
 */
function resolveStackCardRuntimeConfig(config, windowWidth) {
	const deviceType = getDeviceTypeFromWidth(windowWidth);

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

/**
 * Extracts configuration from block attributes or defaults.
 * 
 * @param {Object} attributes Block attributes.
 * @returns {Object} The configuration object.
 */
export function getStackCardPresetLeftConfig(attributes = {}) {
	return {
		cardWidth: attributes.stackCardsPresetTwoCardWidth || STACK_CARD_DEFAULT_CONFIG_LEFT.cardWidth,
		cardWidthUnits: attributes.stackCardsPresetTwoCardWidthUnits || STACK_CARD_DEFAULT_CONFIG_LEFT.cardWidthUnits,
		leftOffsetStep: attributes.stackCardsPresetTwoLeftOffsetStep || STACK_CARD_DEFAULT_CONFIG_LEFT.leftOffsetStep,
		outDistance: attributes.stackCardsPresetTwoOutDistance || STACK_CARD_DEFAULT_CONFIG_LEFT.outDistance,
		minScale: attributes.stackCardsPresetTwoMinScale || STACK_CARD_DEFAULT_CONFIG_LEFT.minScale,
		scaleStep: attributes.stackCardsPresetTwoScaleStep || STACK_CARD_DEFAULT_CONFIG_LEFT.scaleStep,
		scaleYStep: attributes.stackCardsPresetTwoScaleYStep || STACK_CARD_DEFAULT_CONFIG_LEFT.scaleYStep,
		opacityStep: attributes.stackCardsPresetTwoOpacityStep || STACK_CARD_DEFAULT_CONFIG_LEFT.opacityStep,
		visibleLayers: attributes.stackCardsPresetTwoVisibleLayers || STACK_CARD_DEFAULT_CONFIG_LEFT.visibleLayers,
		autoPlay: attributes.stackCardsPresetTwoAutoPlay ?? STACK_CARD_DEFAULT_CONFIG_LEFT.autoPlay,
		autoPlayDelay: attributes.stackCardsPresetTwoAutoPlayDelay || STACK_CARD_DEFAULT_CONFIG_LEFT.autoPlayDelay,
		animationSpeed: attributes.stackCardsPresetTwoAnimationSpeed || STACK_CARD_DEFAULT_CONFIG_LEFT.animationSpeed,
		keyboardNavigation: attributes.stackCardsPresetTwoKeyboardNavigation ?? STACK_CARD_DEFAULT_CONFIG_LEFT.keyboardNavigation,
		cardClickToActive: attributes.stackCardsPresetTwoCardClickToActive ?? STACK_CARD_DEFAULT_CONFIG_LEFT.cardClickToActive,
		showAllLayers: attributes.stackCardsPresetTwoShowAllLayers ?? STACK_CARD_DEFAULT_CONFIG_LEFT.showAllLayers,
	};
}

/**
 * Serializes the configuration to a JSON string.
 */
export function serializeStackCardPresetLeftConfig(attributes = {}) {
	return JSON.stringify(getStackCardPresetLeftConfig(attributes));
}

/**
 * Binds the Stack Left behavior to a root element.
 * 
 * @param {HTMLElement} root The block root element.
 * @param {Object} options Configuration and environment options.
 * @returns {Function} Cleanup function.
 */
export function bindStackCardPresetLeftBehavior(root, options = {}) {
	// Prevent double initialization
	if (root.__fbStackCardPresetLeftInstance) {
		if (options.config) {
			root.__fbStackCardPresetLeftInstance.updateConfig?.(options.config);
		}
		return root.__fbStackCardPresetLeftInstance.cleanup;
	}

	const cardFrame = root.querySelector('.fb-stack-cards-frame');
	const cardItems = Array.from(root.querySelectorAll('.fb-stack-card-item'));
	const documentRef = root.ownerDocument || document;
	const windowRef = documentRef.defaultView || window;
	const isBlockEditor = !!options.isEditor;

	if (!cardFrame || !cardItems.length) {
		return () => {};
	}

	const totalItems = cardItems.length;
	const baseConfig = {
		...STACK_CARD_DEFAULT_CONFIG_LEFT,
		...(options.config || parsePresetRootConfig(root, 'presetTwoConfig', STACK_CARD_DEFAULT_CONFIG_LEFT)),
	};

	// Local state
	let runtimeConfig = resolveStackCardRuntimeConfig(baseConfig, windowRef.innerWidth || 1440);
	let currentIndex = 0;
	let isAnimating = false;
	let autoPlayTimer = null;
	let isSliderActive = isBlockEditor;
	let touchStartX = 0;
	let touchStartY = 0;
	let isDestroyed = false;
	const eventCleanups = [];

	const isMobileOrTablet = () => runtimeConfig.deviceType !== 'Desktop';

	/**
	 * Helper to add event listeners and track them for cleanup.
	 */
	const addEvent = (target, type, handler, opts) => {
		target.addEventListener(type, handler, opts);
		eventCleanups.push(() => target.removeEventListener(type, handler, opts));
	};

	/**
	 * Safe timeout that respects the destroyed state.
	 */
	const safeWait = (callback, delay) => {
		const id = setTimeout(() => {
			if (!isDestroyed) callback();
		}, delay);
		eventCleanups.push(() => clearTimeout(id));
	};

	// Initialize individual card item styles
	cardItems.forEach((item) => {
		item.style.gridArea = '1 / 1';
		item.style.alignSelf = 'start';
		item.style.justifySelf = isMobileOrTablet() ? 'center' : 'start';
		item.style.transformOrigin = isMobileOrTablet() ? 'center center' : 'left center';
		item.style.width = `min(100%, ${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit})`;
		item.style.maxWidth = `${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit}`;
	});

	/**
	 * Calculates the number of layers currently visible.
	 */
	function getVisibleLayersCount() {
		return runtimeConfig.showAllLayers
			? totalItems
			: Math.min(runtimeConfig.visibleLayers, totalItems);
	}

	/**
	 * Syncs the main frame layout width.
	 */
	function syncFrameLayout() {
		cardFrame.style.width = '100%';
		cardFrame.style.maxWidth = `${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit}`;
	}

	/**
	 * Dynamically adjusts the frame's height and width based on visible cards.
	 */
	function syncFrameBounds(visibleCount = getVisibleLayersCount()) {
		let maxVisibleHeight = 0;
		let maxVisibleWidth = runtimeConfig.cardWidth;

		for (let i = 0; i < visibleCount; i++) {
			const layerStyle = calculateLayerStyle(i, visibleCount);
			const itemWidth = layerStyle.width * layerStyle.scaleX;
			const item = cardItems[(currentIndex + i) % totalItems];
			const innerContent = item?.querySelector('.fb-stack-card-item__content') || item;
			const contentHeight = innerContent?.offsetHeight || item?.offsetHeight || 0;
			const scaledHeight = contentHeight * layerStyle.scaleY;

			if (isMobileOrTablet()) {
				maxVisibleHeight = Math.max(maxVisibleHeight, layerStyle.offsetX + scaledHeight);
				maxVisibleWidth = Math.max(maxVisibleWidth, itemWidth);
			} else {
				maxVisibleHeight = Math.max(maxVisibleHeight, scaledHeight);
				maxVisibleWidth = Math.max(maxVisibleWidth, layerStyle.offsetX + itemWidth);
			}
		}

		if (maxVisibleHeight > 0) {
			cardFrame.style.minHeight = `${maxVisibleHeight}px`;
		}

		if (maxVisibleWidth > 0) {
			cardFrame.style.minWidth = `min(100%, ${maxVisibleWidth}${runtimeConfig.cardWidthUnit})`;
		}
	}

	/**
	 * Calculates the transform and style properties for a specific layer index.
	 */
	function calculateLayerStyle(index, visibleCount = getVisibleLayersCount()) {
		const reverseDepth = Math.max(visibleCount - 1 - index, 0);
		const baseScaleY = Math.max(runtimeConfig.minScale - runtimeConfig.scaleYStep, 0.1);
		
		return {
			width: runtimeConfig.cardWidth,
			widthUnit: runtimeConfig.cardWidthUnit,
			offsetX: reverseDepth * runtimeConfig.leftOffsetStep,
			scaleX: Math.min(Math.max(runtimeConfig.minScale + reverseDepth * runtimeConfig.scaleXStep, 0.1), 1),
			scaleY: Math.max(baseScaleY + reverseDepth * runtimeConfig.scaleYStep, 0.1),
			opacity: Math.max(1 - index * runtimeConfig.opacityStep, 0),
			zIndex: Math.max(visibleCount - index, 1),
		};
	}

	/**
	 * Applies styles to a single card item.
	 */
	function applyCardStyles(item, index, speed = runtimeConfig.animationSpeed, visibleCount = getVisibleLayersCount()) {
		const style = calculateLayerStyle(index, visibleCount);
		const offsetAxis = isMobileOrTablet() ? 'translateY' : 'translateX';
		
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
		item.style.transform = `${offsetAxis}(${style.offsetX}px) scale(${style.scaleX}, ${style.scaleY})`;
	}

	/**
	 * Hides a card item and positions it in the stack background.
	 */
	function hideCardItem(item, fallbackIdx, visibleCount = getVisibleLayersCount()) {
		const style = calculateLayerStyle(Math.max(fallbackIdx, 0), visibleCount);
		const offsetAxis = isMobileOrTablet() ? 'translateY' : 'translateX';
		
		item.classList.remove('active');
		item.style.opacity = '0';
		item.style.visibility = 'hidden';
		item.style.pointerEvents = 'none';
		item.style.zIndex = '0';
		item.style.width = `min(100%, ${style.width}${style.widthUnit})`;
		item.style.maxWidth = `${style.width}${style.widthUnit}`;
		item.style.transform = `${offsetAxis}(${style.offsetX}px) scale(${style.scaleX}, ${style.scaleY})`;
	}

	/**
	 * Calculates the exit transform for the active card.
	 */
	function getExitTransform(direction = 'left') {
		const dist = runtimeConfig.outDistance;
		const isVert = isMobileOrTablet();
		const x = isVert ? 0 : (direction === 'right' ? dist : -dist);
		const y = isVert ? (direction === 'right' ? dist : -dist) : 0;
		
		return `translate(${x}px, ${y}px) scale(
			${Math.max(runtimeConfig.minScale - runtimeConfig.scaleXStep - 0.08, 0.7)},
			${Math.max(runtimeConfig.minScale - runtimeConfig.scaleYStep - 0.08, 0.8)}
		)`;
	}

	/**
	 * Updates the positions of all cards in the stack.
	 */
	function updateStackPositions(speed = runtimeConfig.animationSpeed) {
		const visibleCount = getVisibleLayersCount();
		syncFrameLayout(visibleCount);
		cardItems.forEach((item) => item.classList.remove('active'));

		for (let i = 0; i < totalItems; i++) {
			const targetIdx = (currentIndex + i) % totalItems;
			const item = cardItems[targetIdx];

			if (i >= visibleCount) {
				hideCardItem(item, visibleCount - 1, visibleCount);
				continue;
			}

			if (i === 0) item.classList.add('active');
			applyCardStyles(item, i, speed, visibleCount);
		}

		syncFrameBounds(visibleCount);
	}

	/**
	 * Applies updated configuration at runtime (e.g. on resize).
	 */
	function handleRuntimeUpdate(nextConfig = baseConfig) {
		Object.assign(baseConfig, nextConfig);
		runtimeConfig = resolveStackCardRuntimeConfig(baseConfig, windowRef.innerWidth || 1440);

		cardItems.forEach((item) => {
			item.style.justifySelf = isMobileOrTablet() ? 'center' : 'start';
			item.style.transformOrigin = isMobileOrTablet() ? 'center center' : 'left center';
			item.style.width = `min(100%, ${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit})`;
			item.style.maxWidth = `${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit}`;
		});

		updateStackPositions(0);
		restartAutoCycle();
	}

	/**
	 * Stops the auto-play timer.
	 */
	function stopAutoCycle() {
		if (autoPlayTimer) {
			clearInterval(autoPlayTimer);
			autoPlayTimer = null;
		}
	}

	/**
	 * Starts the auto-play timer.
	 */
	function startAutoCycle() {
		if (!isSliderActive || !runtimeConfig.autoPlay) return;
		stopAutoCycle();
		autoPlayTimer = setInterval(() => handleMoveNext('left', false), runtimeConfig.autoPlayDelay);
	}

	/**
	 * Restarts the auto-play timer.
	 */
	function restartAutoCycle() {
		stopAutoCycle();
		startAutoCycle();
	}

	/**
	 * Moves the stack to the next card.
	 */
	function handleMoveNext(direction = 'left', isQuickTransition = false) {
		if (isDestroyed || !isSliderActive || isAnimating) return;

		isAnimating = true;
		const exitSpeed = isQuickTransition ? Math.max(runtimeConfig.animationSpeed * 0.62, 0.1) : runtimeConfig.animationSpeed;
		const entrySpeed = isQuickTransition ? Math.max(runtimeConfig.animationSpeed * 0.78, 0.15) : runtimeConfig.animationSpeed + 0.15;
		const currentActive = cardItems[currentIndex];

		currentActive.style.transition = `transform ${exitSpeed}s ease, opacity ${exitSpeed}s ease`;
		currentActive.style.transform = getExitTransform(direction);
		currentActive.style.opacity = '0';

		safeWait(() => {
			currentIndex = (currentIndex + 1) % totalItems;
			updateStackPositions(entrySpeed);
			safeWait(() => { isAnimating = false; }, entrySpeed * 1000);
		}, exitSpeed * 1000);
	}

	/**
	 * Moves the stack to the previous card.
	 */
	function handleMovePrev(direction = 'right', isQuickTransition = false) {
		if (isDestroyed || !isSliderActive || isAnimating) return;

		isAnimating = true;
		const exitSpeed = isQuickTransition ? Math.max(runtimeConfig.animationSpeed * 0.62, 0.1) : runtimeConfig.animationSpeed;
		const entrySpeed = isQuickTransition ? Math.max(runtimeConfig.animationSpeed * 0.78, 0.15) : runtimeConfig.animationSpeed + 0.15;
		const currentActive = cardItems[currentIndex];

		currentActive.style.transition = `transform ${exitSpeed}s ease, opacity ${exitSpeed}s ease`;
		currentActive.style.transform = getExitTransform(direction);
		currentActive.style.opacity = '0';

		safeWait(() => {
			currentIndex = (currentIndex - 1 + totalItems) % totalItems;
			updateStackPositions(entrySpeed);
			safeWait(() => { isAnimating = false; }, entrySpeed * 1000);
		}, exitSpeed * 1000);
	}

	// Click to activate card
	cardItems.forEach((card, idx) => {
		addEvent(card, 'click', () => {
			if (!baseConfig.cardClickToActive || !isSliderActive || isAnimating) return;
			if (idx === currentIndex) return;

			isAnimating = true;
			const speed = Math.max(runtimeConfig.animationSpeed * 0.78, 0.15);
			const currentActive = cardItems[currentIndex];

			currentActive.style.transition = `transform ${speed}s ease, opacity ${speed}s ease`;
			currentActive.style.transform = getExitTransform('left');
			currentActive.style.opacity = '0';

			safeWait(() => {
				currentIndex = idx;
				updateStackPositions(Math.max(runtimeConfig.animationSpeed * 0.9, 0.2));
				safeWait(() => { isAnimating = false; }, 400);
			}, speed * 1000);

			restartAutoCycle();
		});
	});

	// Visibility observer for auto-play
	if (!isBlockEditor) {
		const visibilityObserver = new IntersectionObserver((entries) => {
			isSliderActive = entries[0].isIntersecting;
			if (isSliderActive) startAutoCycle();
			else stopAutoCycle();
		}, { threshold: 0.5 });

		visibilityObserver.observe(cardFrame);
		eventCleanups.push(() => visibilityObserver.disconnect());
	}

	// Mouse wheel navigation
	addEvent(cardFrame, 'wheel', (e) => {
		if (!isSliderActive) return;
		e.preventDefault();
		if (e.deltaY > 0) handleMoveNext('left', true);
		else handleMovePrev('right', true);
		restartAutoCycle();
	}, { passive: false });

	// Touch navigation
	addEvent(cardFrame, 'touchstart', (e) => {
		if (!isSliderActive) return;
		touchStartX = e.touches[0].clientX;
		touchStartY = e.touches[0].clientY;
	});

	addEvent(cardFrame, 'touchend', (e) => {
		if (!isSliderActive) return;
		const endX = e.changedTouches[0].clientX;
		const endY = e.changedTouches[0].clientY;
		const dx = endX - touchStartX;
		const dy = endY - touchStartY;

		if (Math.abs(dx) < 40 && Math.abs(dy) < 40) return;

		if (Math.abs(dx) > Math.abs(dy)) {
			if (dx < 0) handleMoveNext('left', true);
			else handleMovePrev('right', true);
		} else {
			if (dy < 0) handleMoveNext('left', true);
			else handleMovePrev('right', true);
		}
		restartAutoCycle();
	});

	// Keyboard navigation
	addEvent(documentRef, 'keydown', (e) => {
		if (!baseConfig.keyboardNavigation || !isSliderActive || isAnimating) return;
		switch (e.key) {
			case 'ArrowRight':
			case 'ArrowDown':
				handleMoveNext('left', true);
				restartAutoCycle();
				break;
			case 'ArrowLeft':
			case 'ArrowUp':
				handleMovePrev('right', true);
				restartAutoCycle();
				break;
		}
	});

	addEvent(windowRef, 'resize', () => handleRuntimeUpdate());

	// Initial render
	updateStackPositions();
	startAutoCycle();

	/**
	 * Cleanup function to remove listeners and reset styles.
	 */
	const cleanup = () => {
		isDestroyed = true;
		stopAutoCycle();
		eventCleanups.forEach((fn) => fn());
		
		if (root.__fbStackCardPresetLeftInstance?.cleanup === cleanup) {
			root.__fbStackCardPresetLeftInstance = null;
		}

		cardItems.forEach((item) => {
			item.classList.remove('active');
			['grid-area', 'align-self', 'justify-self', 'width', 'max-width', 'transform-origin', 'opacity', 'visibility', 'pointer-events', 'z-index', 'transform', 'transition'].forEach(prop => item.style.removeProperty(prop));
		});
		
		['width', 'max-width', 'min-width', 'min-height'].forEach(prop => cardFrame.style.removeProperty(prop));
	};

	root.__fbStackCardPresetLeftInstance = {
		updateConfig: handleRuntimeUpdate,
		cleanup,
	};

	return cleanup;
}

/**
 * Initializes all Stack Card instances with Preset Two (Left) on the page.
 */
export function initStackCardPresetLeftScript(doc = document) {
	if (typeof window === 'undefined' || !doc?.querySelectorAll) return;

	doc.querySelectorAll(`.fb-stack-cards-main-wrapper.fb-stack-cards-preset-${STACK_CARD_STYLE_LEFT}`)
		.forEach((root) => {
			if (!root.__fbStackCardPresetLeftInstance) {
				bindStackCardPresetLeftBehavior(root);
			}
		});
}
