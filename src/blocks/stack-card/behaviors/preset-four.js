/**
 * Preset Four: Stack Over Behavior
 * 
 * This script handles the "Stack Over" (centered overlapping) animation and interaction logic.
 * It manages centered card stacking, border styles, and built-in navigation buttons.
 */

import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";
import {
	getDeviceTypeFromWidth,
	getResponsiveValue,
	parsePresetRootConfig,
	toNumber,
} from '../preset-runtime-utils';

/**
 * Unique identifier for the Stack Over style.
 */
export const STACK_CARD_STYLE_OVER = 'stack-over';

/**
 * Default configuration for the Stack Over preset.
 */
const STACK_CARD_DEFAULT_CONFIG_OVER = {
	cardWidth: { Desktop: '620', Tablet: '520', Mobile: '320' },
	cardWidthUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
	outDistance: { Desktop: '100', Tablet: '80', Mobile: '60' },
	minScale: { Desktop: '0.7', Tablet: '0.7', Mobile: '0.7' },
	scaleStep: { Desktop: '0.02', Tablet: '0.02', Mobile: '0.02' },
	scaleYStep: { Desktop: '0.10', Tablet: '0.10', Mobile: '0.10' },
	opacityStep: { Desktop: '0.02', Tablet: '0.02', Mobile: '0.02' },
	visibleLayers: { Desktop: '3', Tablet: '3', Mobile: '3' },
	autoPlay: true,
	autoPlayDelay: { Desktop: '2500', Tablet: '2500', Mobile: '2500' },
	animationSpeed: { Desktop: '0.45', Tablet: '0.45', Mobile: '0.45' },
	activeBorder: true,
	activeBorderWidth: { Desktop: '3', Tablet: '3', Mobile: '2' },
	activeBorderWidthUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
	activeBorderColor: '#000000',
	showNavigation: true,
	buttonVerticalAlign: 'center',
	buttonVerticalOffset: { Desktop: '50', Tablet: '50', Mobile: '50' },
	buttonVerticalOffsetUnits: { Desktop: '%', Tablet: '%', Mobile: '%' },
	buttonSideOffset: { Desktop: '0', Tablet: '0', Mobile: '0' },
	buttonSideOffsetUnits: { Desktop: 'px', Tablet: 'px', Mobile: 'px' },
	previousButtonText: 'Previous',
	nextButtonText: 'Next',
	previousButtonIconAlign: 'none',
	nextButtonIconAlign: 'none',
	previousButtonIcon: 'angle-left',
	nextButtonIcon: 'angle-right',
	previousButtonIconPosition: 'left',
	nextButtonIconPosition: 'right',
	keyboardNavigation: true,
	cardClickToActive: true,
	showAllLayers: false,
};

/**
 * Checks if the given preset style matches the Stack Over style.
 */
export const isStackCardPresetOver = (presetStyle) =>
	presetStyle === STACK_CARD_STYLE_OVER;

/**
 * Checks if the given preset style uses the scale behavior.
 */
export const hasStackCardScalePreset = (presetStyle) =>
	presetStyle === 'stack-top';

/**
 * Extracts configuration from block attributes or defaults.
 */
export function getStackCardPresetOverConfig(attributes = {}) {
	return {
		cardWidth: attributes.stackCardsPresetFourCardWidth || STACK_CARD_DEFAULT_CONFIG_OVER.cardWidth,
		cardWidthUnits: attributes.stackCardsPresetFourCardWidthUnits || STACK_CARD_DEFAULT_CONFIG_OVER.cardWidthUnits,
		outDistance: attributes.stackCardsPresetFourOutDistance || STACK_CARD_DEFAULT_CONFIG_OVER.outDistance,
		minScale: attributes.stackCardsPresetFourMinScale || STACK_CARD_DEFAULT_CONFIG_OVER.minScale,
		scaleStep: attributes.stackCardsPresetFourScaleStep || STACK_CARD_DEFAULT_CONFIG_OVER.scaleStep,
		scaleYStep: attributes.stackCardsPresetFourScaleYStep || STACK_CARD_DEFAULT_CONFIG_OVER.scaleYStep,
		opacityStep: attributes.stackCardsPresetFourOpacityStep || STACK_CARD_DEFAULT_CONFIG_OVER.opacityStep,
		visibleLayers: attributes.stackCardsPresetFourVisibleLayers || STACK_CARD_DEFAULT_CONFIG_OVER.visibleLayers,
		autoPlay: attributes.stackCardsPresetFourAutoPlay ?? STACK_CARD_DEFAULT_CONFIG_OVER.autoPlay,
		autoPlayDelay: attributes.stackCardsPresetFourAutoPlayDelay || STACK_CARD_DEFAULT_CONFIG_OVER.autoPlayDelay,
		animationSpeed: attributes.stackCardsPresetFourAnimationSpeed || STACK_CARD_DEFAULT_CONFIG_OVER.animationSpeed,
		activeBorder: attributes.stackCardsPresetFourActiveBorder ?? STACK_CARD_DEFAULT_CONFIG_OVER.activeBorder,
		activeBorderWidth: attributes.stackCardsPresetFourActiveBorderWidth || STACK_CARD_DEFAULT_CONFIG_OVER.activeBorderWidth,
		activeBorderWidthUnits: attributes.stackCardsPresetFourActiveBorderWidthUnits || STACK_CARD_DEFAULT_CONFIG_OVER.activeBorderWidthUnits,
		activeBorderColor: attributes.stackCardsPresetFourActiveBorderColor || STACK_CARD_DEFAULT_CONFIG_OVER.activeBorderColor,
		showNavigation: attributes.stackCardsPresetFourShowNavigation ?? STACK_CARD_DEFAULT_CONFIG_OVER.showNavigation,
		buttonVerticalAlign: attributes.stackCardsPresetFourButtonVerticalAlign || STACK_CARD_DEFAULT_CONFIG_OVER.buttonVerticalAlign,
		buttonVerticalOffset: attributes.stackCardsPresetFourButtonVerticalOffset || STACK_CARD_DEFAULT_CONFIG_OVER.buttonVerticalOffset,
		buttonVerticalOffsetUnits: attributes.stackCardsPresetFourButtonVerticalOffsetUnits || STACK_CARD_DEFAULT_CONFIG_OVER.buttonVerticalOffsetUnits,
		buttonSideOffset: attributes.stackCardsPresetFourButtonSideOffset || STACK_CARD_DEFAULT_CONFIG_OVER.buttonSideOffset,
		buttonSideOffsetUnits: attributes.stackCardsPresetFourButtonSideOffsetUnits || STACK_CARD_DEFAULT_CONFIG_OVER.buttonSideOffsetUnits,
		previousButtonText: attributes.previousButtonText ?? STACK_CARD_DEFAULT_CONFIG_OVER.previousButtonText,
		nextButtonText: attributes.nextButtonText ?? STACK_CARD_DEFAULT_CONFIG_OVER.nextButtonText,
		previousButtonIconAlign: attributes.previousButtonIconAlign ?? STACK_CARD_DEFAULT_CONFIG_OVER.previousButtonIconAlign,
		nextButtonIconAlign: attributes.nextButtonIconAlign ?? STACK_CARD_DEFAULT_CONFIG_OVER.nextButtonIconAlign,
		previousButtonIcon: attributes.previousButtonIcon ?? STACK_CARD_DEFAULT_CONFIG_OVER.previousButtonIcon,
		nextButtonIcon: attributes.nextButtonIcon ?? STACK_CARD_DEFAULT_CONFIG_OVER.nextButtonIcon,
		previousButtonIconPosition: attributes.previousButtonIconPosition ?? STACK_CARD_DEFAULT_CONFIG_OVER.previousButtonIconPosition,
		nextButtonIconPosition: attributes.nextButtonIconPosition ?? STACK_CARD_DEFAULT_CONFIG_OVER.nextButtonIconPosition,
		keyboardNavigation: attributes.stackCardsPresetFourKeyboardNavigation ?? STACK_CARD_DEFAULT_CONFIG_OVER.keyboardNavigation,
		cardClickToActive: attributes.stackCardsPresetFourCardClickToActive ?? STACK_CARD_DEFAULT_CONFIG_OVER.cardClickToActive,
		showAllLayers: attributes.stackCardsPresetFourShowAllLayers ?? STACK_CARD_DEFAULT_CONFIG_OVER.showAllLayers,
	};
}

/**
 * Serializes the configuration to a JSON string.
 */
export function serializeStackCardPresetOverConfig(attributes = {}) {
	return JSON.stringify(getStackCardPresetOverConfig(attributes));
}

/**
 * Renders the navigation button content (icon and/or text).
 */
function renderNavButtonContent(type, config) {
	const iconAlign = type === 'prev' ? config.previousButtonIconAlign : config.nextButtonIconAlign;
	const iconName = type === 'prev' ? config.previousButtonIcon : config.nextButtonIcon;
	const iconPosition = type === 'prev' ? config.previousButtonIconPosition : config.nextButtonIconPosition;
	const text = type === 'prev' ? config.previousButtonText : config.nextButtonText;
	const iconMarkup = iconName ? renderSVG(iconName) : null;

	if (iconAlign === 'icon') {
		return <span className="fb-stack-card-nav-icon">{iconMarkup}</span>;
	}

	if (iconAlign === 'icon-text') {
		return (
			<>
				{iconPosition === 'left' && <span className="fb-stack-card-nav-icon">{iconMarkup}</span>}
				{text && <span className="fb-stack-card-nav-text">{text}</span>}
				{iconPosition === 'right' && <span className="fb-stack-card-nav-icon">{iconMarkup}</span>}
			</>
		);
	}

	return <span className="fb-stack-card-nav-text">{text}</span>;
}

/**
 * React Component for the Preset Four Navigation buttons.
 */
export function StackCardPresetOverNavigation({ config = STACK_CARD_DEFAULT_CONFIG_OVER }) {
	return (
		<>
			<div className="fb-stack-card-navigation-wrapper">
				<button className={`fb-stack-card-prev-btn prev-btn fb-stack-card-nav-btn fb-stack-card-nav-btn--${config.previousButtonIconAlign || 'none'}`}>
					{renderNavButtonContent('prev', config)}
				</button>
				<button className={`fb-stack-card-next-btn next-btn fb-stack-card-nav-btn fb-stack-card-nav-btn--${config.nextButtonIconAlign || 'none'}`}>
					{renderNavButtonContent('next', config)}
				</button>
			</div>
			
		</>
	);
}

/**
 * Resolves the configuration for the current device width.
 */
function resolveStackCardRuntimeConfig(config, windowWidth) {
	const deviceType = getDeviceTypeFromWidth(windowWidth);

	return {
		deviceType,
		cardWidth: toNumber(getResponsiveValue(config.cardWidth, deviceType), 620),
		cardWidthUnit: getResponsiveValue(config.cardWidthUnits, deviceType) || 'px',
		outDistance: toNumber(getResponsiveValue(config.outDistance, deviceType), 100),
		minScale: toNumber(getResponsiveValue(config.minScale, deviceType), 0.7),
		scaleXStep: toNumber(getResponsiveValue(config.scaleStep, deviceType), 0.02),
		scaleYStep: toNumber(getResponsiveValue(config.scaleYStep, deviceType), 0.1),
		opacityStep: toNumber(getResponsiveValue(config.opacityStep, deviceType), 0.02),
		visibleLayers: Math.max(1, Math.round(toNumber(getResponsiveValue(config.visibleLayers, deviceType), 3))),
		autoPlay: !!config.autoPlay,
		autoPlayDelay: toNumber(getResponsiveValue(config.autoPlayDelay, deviceType), 2500),
		animationSpeed: toNumber(getResponsiveValue(config.animationSpeed, deviceType), 0.45),
		activeBorder: !!config.activeBorder,
		showNavigation: !!config.showNavigation,
		buttonVerticalAlign: config.buttonVerticalAlign || 'center',
		buttonVerticalOffset: toNumber(getResponsiveValue(config.buttonVerticalOffset, deviceType), 50),
		buttonVerticalOffsetUnit: getResponsiveValue(config.buttonVerticalOffsetUnits, deviceType) || '%',
		buttonSideOffset: toNumber(getResponsiveValue(config.buttonSideOffset, deviceType), 0),
		buttonSideOffsetUnit: getResponsiveValue(config.buttonSideOffsetUnits, deviceType) || 'px',
		keyboardNavigation: !!config.keyboardNavigation,
		cardClickToActive: !!config.cardClickToActive,
		showAllLayers: !!config.showAllLayers,
	};
}

/**
 * Binds the Stack Over behavior to a root element.
 */
export function bindStackCardPresetOverBehavior(root, options = {}) {
	if (root.__fbStackCardPresetOverInstance) {
		if (options.config) {
			root.__fbStackCardPresetOverInstance.updateConfig?.(options.config);
		}
		return root.__fbStackCardPresetOverInstance.cleanup;
	}

	const cardFrame = root.querySelector('.fb-stack-cards-frame');
	const cardItems = Array.from(root.querySelectorAll('.fb-stack-card-item'));
	const nextBtn = root.querySelector('.fb-stack-card-next-btn');
	const prevBtn = root.querySelector('.fb-stack-card-prev-btn');
	const documentRef = root.ownerDocument || document;
	const windowRef = documentRef.defaultView || window;
	const isBlockEditor = !!options.isEditor;

	if (!cardFrame || !cardItems.length) return () => {};

	const totalItems = cardItems.length;
	const baseConfig = {
		...STACK_CARD_DEFAULT_CONFIG_OVER,
		...(options.config || parsePresetRootConfig(root, 'presetFourConfig', STACK_CARD_DEFAULT_CONFIG_OVER)),
	};

	let runtimeConfig = resolveStackCardRuntimeConfig(baseConfig, windowRef.innerWidth || 1440);
	let currentIndex = 0;
	let isAnimating = false;
	let autoPlayTimer = null;
	let isSliderActive = isBlockEditor;
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
		item.style.left = '50%';
		item.style.top = '50%';
		item.style.transformOrigin = 'center';
		item.style.width = `min(100%, ${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit})`;
		item.style.maxWidth = `${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit}`;
	});

	function getStyleByIndex(index, visibleCount = getVisibleLayersCount()) {
		return {
			width: runtimeConfig.cardWidth,
			widthUnit: runtimeConfig.cardWidthUnit,
			scaleX: Math.max(runtimeConfig.minScale + index * runtimeConfig.scaleXStep, 0.1),
			scaleY: Math.max(runtimeConfig.minScale - index * runtimeConfig.scaleYStep, 0.1),
			opacity: Math.max(1 - index * runtimeConfig.opacityStep, 0),
			zIndex: Math.max(visibleCount - index, 1),
		};
	}

	function getVisibleLayersCount() {
		return runtimeConfig.showAllLayers ? totalItems : Math.min(runtimeConfig.visibleLayers, totalItems);
	}

	function syncFrameHeight(item, scale = 1) {
		const content = item?.querySelector('.fb-stack-card-item__content') || item;
		const contentHeight = content?.offsetHeight || item?.offsetHeight || 0;
		if (contentHeight > 0) {
			cardFrame.style.height = `${Math.max(contentHeight * scale, contentHeight)}px`;
		}
	}

	function syncFrameLayout() {
		cardFrame.style.width = '100%';
		cardFrame.style.maxWidth = `${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit}`;
	}

	function applyCardItemStyle(item, index, speed = 0.6, visibleCount = getVisibleLayersCount()) {
		const style = getStyleByIndex(index, visibleCount);
		item.style.transition = `transform ${speed}s ease, opacity ${speed}s ease, width ${speed}s ease, max-width ${speed}s ease`;
		item.style.width = `min(100%, ${style.width}${style.widthUnit})`;
		item.style.maxWidth = `${style.width}${style.widthUnit}`;
		item.style.opacity = style.opacity;
		item.style.zIndex = style.zIndex;
		item.style.visibility = 'visible';
		item.style.pointerEvents = 'auto';
		item.style.transform = `translate(-50%, -50%) scale(${style.scaleX}, ${style.scaleY})`;
	}

	function hideCardItem(item, fallbackIdx, visibleCount = getVisibleLayersCount()) {
		const style = getStyleByIndex(Math.max(fallbackIdx, 0), visibleCount);
		item.classList.remove('active');
		item.style.opacity = '0';
		item.style.visibility = 'hidden';
		item.style.pointerEvents = 'none';
		item.style.zIndex = '0';
		item.style.width = `min(100%, ${style.width}${style.widthUnit})`;
		item.style.maxWidth = `${style.width}${style.widthUnit}`;
		item.style.transform = `translate(-50%, -50%) scale(${style.scaleX}, ${style.scaleY})`;
	}

	function getExitTransform(direction) {
		const dist = runtimeConfig.outDistance;
		let x = 0, y = 0;
		if (direction === 'left') x = -dist;
		else if (direction === 'right') x = dist;
		else if (direction === 'up') y = -dist;
		else if (direction === 'down') y = dist;

		return `translate(-50%, -50%) translate(${x}px, ${y}px) scale(
			${Math.max(runtimeConfig.minScale - 0.08, 0.1)},
			${Math.max(runtimeConfig.minScale - runtimeConfig.scaleYStep - 0.08, 0.1)}
		)`;
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

			if (i === 0) {
				item.classList.add('active');
				syncFrameHeight(item, 1);
			}

			applyCardItemStyle(item, i, speed, visibleCount);
		}
	}

	function handleRuntimeUpdate(nextConfig = baseConfig) {
		Object.assign(baseConfig, nextConfig);
		runtimeConfig = resolveStackCardRuntimeConfig(baseConfig, windowRef.innerWidth || 1440);
		cardItems.forEach((item) => {
			item.style.width = `min(100%, ${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit})`;
			item.style.maxWidth = `${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit}`;
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
		autoPlayTimer = setInterval(() => handleMoveNext('right', false), runtimeConfig.autoPlayDelay);
	}

	function restartAutoCycle() {
		stopAutoCycle();
		startAutoCycle();
	}

	function handleMoveNext(direction = 'right', isQuick = false) {
		if (isDestroyed || !isSliderActive || isAnimating) return;
		isAnimating = true;

		const exitSpeed = isQuick ? Math.max(runtimeConfig.animationSpeed * 0.62, 0.1) : runtimeConfig.animationSpeed;
		const entrySpeed = isQuick ? Math.max(runtimeConfig.animationSpeed * 0.78, 0.15) : runtimeConfig.animationSpeed + 0.15;
		const activeItem = cardItems[currentIndex];

		activeItem.style.transition = `transform ${exitSpeed}s ease, opacity ${exitSpeed}s ease`;
		activeItem.style.transform = getExitTransform(direction);
		activeItem.style.opacity = '0';

		safeWait(() => {
			currentIndex = (currentIndex + 1) % totalItems;
			updateStackPositions(entrySpeed);
			safeWait(() => { isAnimating = false; }, entrySpeed * 1000);
		}, exitSpeed * 1000);
	}

	function handleMovePrev(direction = 'left', isQuick = false) {
		if (isDestroyed || !isSliderActive || isAnimating) return;
		isAnimating = true;

		const exitSpeed = isQuick ? Math.max(runtimeConfig.animationSpeed * 0.62, 0.1) : runtimeConfig.animationSpeed;
		const entrySpeed = isQuick ? Math.max(runtimeConfig.animationSpeed * 0.78, 0.15) : runtimeConfig.animationSpeed + 0.15;
		const activeItem = cardItems[currentIndex];

		activeItem.style.transition = `transform ${exitSpeed}s ease, opacity ${exitSpeed}s ease`;
		activeItem.style.transform = getExitTransform(direction);
		activeItem.style.opacity = '0';

		safeWait(() => {
			currentIndex = (currentIndex - 1 + totalItems) % totalItems;
			updateStackPositions(entrySpeed);
			safeWait(() => { isAnimating = false; }, entrySpeed * 1000);
		}, exitSpeed * 1000);
	}

	// Interaction events
	cardItems.forEach((card, idx) => {
		addEvent(card, 'click', () => {
			if (!baseConfig.cardClickToActive || !isSliderActive || isAnimating) return;
			if (idx === currentIndex) return;

			isAnimating = true;
			const speed = Math.max(runtimeConfig.animationSpeed * 0.78, 0.15);
			const activeItem = cardItems[currentIndex];

			activeItem.style.transition = `transform ${speed}s ease, opacity ${speed}s ease`;
			activeItem.style.transform = getExitTransform('right');
			activeItem.style.opacity = '0';

			safeWait(() => {
				currentIndex = idx;
				updateStackPositions(Math.max(runtimeConfig.animationSpeed * 0.9, 0.2));
				safeWait(() => { isAnimating = false; }, 400);
			}, speed * 1000);
			restartAutoCycle();
		});
	});

	if (!isBlockEditor) {
		const visibilityObserver = new IntersectionObserver((entries) => {
			isSliderActive = entries[0].isIntersecting;
			if (isSliderActive) startAutoCycle();
			else stopAutoCycle();
		}, { threshold: 0.5 });
		visibilityObserver.observe(cardFrame);
		eventCleanups.push(() => visibilityObserver.disconnect());
	} else {
		startAutoCycle();
	}

	if (nextBtn) addEvent(nextBtn, 'click', () => { handleMoveNext('right', true); restartAutoCycle(); });
	if (prevBtn) addEvent(prevBtn, 'click', () => { handleMovePrev('left', true); restartAutoCycle(); });

	addEvent(cardFrame, 'wheel', (e) => {
		if (!isSliderActive) return;
		e.preventDefault();
		if (e.deltaY > 0) handleMoveNext('right', true);
		else handleMovePrev('left', true);
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
			if (dx > 0) handleMoveNext('right', true);
			else handleMovePrev('left', true);
		} else {
			if (dy < 0) handleMoveNext('up', true);
			else handleMovePrev('down', true);
		}
		restartAutoCycle();
	});

	addEvent(documentRef, 'keydown', (e) => {
		if (!baseConfig.keyboardNavigation || !isSliderActive) return;
		if (['ArrowUp', 'ArrowDown'].includes(e.key)) e.preventDefault();
		if (isAnimating) return;
		switch (e.key) {
			case 'ArrowRight': handleMoveNext('right', true); restartAutoCycle(); break;
			case 'ArrowLeft': handleMovePrev('left', true); restartAutoCycle(); break;
			case 'ArrowUp': handleMoveNext('up', true); restartAutoCycle(); break;
			case 'ArrowDown': handleMovePrev('down', true); restartAutoCycle(); break;
		}
	});

	addEvent(windowRef, 'resize', () => handleRuntimeUpdate());

	updateStackPositions();

	const cleanup = () => {
		isDestroyed = true;
		stopAutoCycle();
		eventCleanups.forEach(fn => fn());
		if (root.__fbStackCardPresetOverInstance?.cleanup === cleanup) root.__fbStackCardPresetOverInstance = null;
		root.__fbStackCardPresetOverInitialized = null;
		cardItems.forEach(item => {
			item.classList.remove('active');
			['width', 'max-width', 'height', 'opacity', 'z-index', 'transform', 'transition', 'left', 'top', 'position', 'transform-origin'].forEach(p => item.style.removeProperty(p));
		});
		['width', 'max-width', 'height'].forEach(p => cardFrame.style.removeProperty(p));
	};

	root.__fbStackCardPresetOverInstance = { updateConfig: handleRuntimeUpdate, cleanup };
	return cleanup;
}

/**
 * Initializes all Stack Card instances with Preset Four (Over) on the page.
 */
export function initStackCardPresetOverScript(doc = document) {
	if (typeof window === 'undefined' || !doc?.querySelectorAll) return;

	doc.querySelectorAll(`.fb-stack-cards-main-wrapper.fb-stack-cards-preset-${STACK_CARD_STYLE_OVER}`)
		.forEach((root) => {
			if (!root.__fbStackCardPresetOverInstance) {
				bindStackCardPresetOverBehavior(root);
			}
		});
}
