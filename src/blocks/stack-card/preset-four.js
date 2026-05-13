import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";
import {
	getDeviceTypeFromWidth,
	getResponsiveValue,
	parsePresetRootConfig,
	toNumber,
} from './preset-runtime-utils';

export const PRESET_FOUR_STYLE = 'stack-over';

const DEFAULT_PRESET_FOUR_CONFIG = {
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

export const isPresetFourStackOver = (presetStyle) =>
	presetStyle === PRESET_FOUR_STYLE;

export const hasStackCardScalePreset = (presetStyle) =>
	presetStyle === 'stack-top';

export function getPresetFourConfig(attributes = {}) {
	return {
		cardWidth: attributes.stackCardsPresetFourCardWidth || DEFAULT_PRESET_FOUR_CONFIG.cardWidth,
		cardWidthUnits: attributes.stackCardsPresetFourCardWidthUnits || DEFAULT_PRESET_FOUR_CONFIG.cardWidthUnits,
		outDistance: attributes.stackCardsPresetFourOutDistance || DEFAULT_PRESET_FOUR_CONFIG.outDistance,
		minScale: attributes.stackCardsPresetFourMinScale || DEFAULT_PRESET_FOUR_CONFIG.minScale,
		scaleStep: attributes.stackCardsPresetFourScaleStep || DEFAULT_PRESET_FOUR_CONFIG.scaleStep,
		scaleYStep: attributes.stackCardsPresetFourScaleYStep || DEFAULT_PRESET_FOUR_CONFIG.scaleYStep,
		opacityStep: attributes.stackCardsPresetFourOpacityStep || DEFAULT_PRESET_FOUR_CONFIG.opacityStep,
		visibleLayers: attributes.stackCardsPresetFourVisibleLayers || DEFAULT_PRESET_FOUR_CONFIG.visibleLayers,
		autoPlay: attributes.stackCardsPresetFourAutoPlay ?? DEFAULT_PRESET_FOUR_CONFIG.autoPlay,
		autoPlayDelay: attributes.stackCardsPresetFourAutoPlayDelay || DEFAULT_PRESET_FOUR_CONFIG.autoPlayDelay,
		animationSpeed: attributes.stackCardsPresetFourAnimationSpeed || DEFAULT_PRESET_FOUR_CONFIG.animationSpeed,
		activeBorder: attributes.stackCardsPresetFourActiveBorder ?? DEFAULT_PRESET_FOUR_CONFIG.activeBorder,
		activeBorderWidth: attributes.stackCardsPresetFourActiveBorderWidth || DEFAULT_PRESET_FOUR_CONFIG.activeBorderWidth,
		activeBorderWidthUnits: attributes.stackCardsPresetFourActiveBorderWidthUnits || DEFAULT_PRESET_FOUR_CONFIG.activeBorderWidthUnits,
		activeBorderColor: attributes.stackCardsPresetFourActiveBorderColor || DEFAULT_PRESET_FOUR_CONFIG.activeBorderColor,
		showNavigation: attributes.stackCardsPresetFourShowNavigation ?? DEFAULT_PRESET_FOUR_CONFIG.showNavigation,
		buttonVerticalAlign: attributes.stackCardsPresetFourButtonVerticalAlign || DEFAULT_PRESET_FOUR_CONFIG.buttonVerticalAlign,
		buttonVerticalOffset: attributes.stackCardsPresetFourButtonVerticalOffset || DEFAULT_PRESET_FOUR_CONFIG.buttonVerticalOffset,
		buttonVerticalOffsetUnits: attributes.stackCardsPresetFourButtonVerticalOffsetUnits || DEFAULT_PRESET_FOUR_CONFIG.buttonVerticalOffsetUnits,
		buttonSideOffset: attributes.stackCardsPresetFourButtonSideOffset || DEFAULT_PRESET_FOUR_CONFIG.buttonSideOffset,
		buttonSideOffsetUnits: attributes.stackCardsPresetFourButtonSideOffsetUnits || DEFAULT_PRESET_FOUR_CONFIG.buttonSideOffsetUnits,
		previousButtonText: attributes.previousButtonText ?? DEFAULT_PRESET_FOUR_CONFIG.previousButtonText,
		nextButtonText: attributes.nextButtonText ?? DEFAULT_PRESET_FOUR_CONFIG.nextButtonText,
		previousButtonIconAlign: attributes.previousButtonIconAlign ?? DEFAULT_PRESET_FOUR_CONFIG.previousButtonIconAlign,
		nextButtonIconAlign: attributes.nextButtonIconAlign ?? DEFAULT_PRESET_FOUR_CONFIG.nextButtonIconAlign,
		previousButtonIcon: attributes.previousButtonIcon ?? DEFAULT_PRESET_FOUR_CONFIG.previousButtonIcon,
		nextButtonIcon: attributes.nextButtonIcon ?? DEFAULT_PRESET_FOUR_CONFIG.nextButtonIcon,
		previousButtonIconPosition: attributes.previousButtonIconPosition ?? DEFAULT_PRESET_FOUR_CONFIG.previousButtonIconPosition,
		nextButtonIconPosition: attributes.nextButtonIconPosition ?? DEFAULT_PRESET_FOUR_CONFIG.nextButtonIconPosition,
		keyboardNavigation: attributes.stackCardsPresetFourKeyboardNavigation ?? DEFAULT_PRESET_FOUR_CONFIG.keyboardNavigation,
		cardClickToActive: attributes.stackCardsPresetFourCardClickToActive ?? DEFAULT_PRESET_FOUR_CONFIG.cardClickToActive,
		showAllLayers: attributes.stackCardsPresetFourShowAllLayers ?? DEFAULT_PRESET_FOUR_CONFIG.showAllLayers,
	};
}

export function serializePresetFourConfig(attributes = {}) {
	return JSON.stringify(getPresetFourConfig(attributes));
}

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

export function PresetFourNavigation({ config = DEFAULT_PRESET_FOUR_CONFIG }) {
	return (
		<>
			<button className={`fb-stack-card-prev-btn prev-btn fb-stack-card-nav-btn fb-stack-card-nav-btn--${config.previousButtonIconAlign || 'none'}`}>
				{renderNavButtonContent('prev', config)}
			</button>
			<button className={`fb-stack-card-next-btn next-btn fb-stack-card-nav-btn fb-stack-card-nav-btn--${config.nextButtonIconAlign || 'none'}`}>
				{renderNavButtonContent('next', config)}
			</button>
		</>
	);
}

export function initPresetFourViewScript(doc = document) {
	if (typeof window === 'undefined' || !doc?.querySelectorAll) {
		return;
	}

	doc
		.querySelectorAll(`.fb-stack-cards-main-wrapper.fb-stack-cards-preset-${PRESET_FOUR_STYLE}`)
		.forEach((root) => {
			if (root.__fbPresetFourInitialized) {
				return;
			}
			root.__fbPresetFourInitialized = bindPresetFourBehavior(root);
		});
}

function resolvePresetFourRuntimeConfig(config, width) {
	const deviceType = getDeviceTypeFromWidth(width);

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

export function bindPresetFourBehavior(root, options = {}) {
	if (root.__fbPresetFourInstance) {
		if (options.config) {
			root.__fbPresetFourInstance.updateConfig?.(options.config);
		}
		return root.__fbPresetFourInstance.cleanup;
	}

	const slider = root.querySelector('.fb-stack-cards-frame');
	const items = Array.from(root.querySelectorAll('.fb-stack-card-item'));
	const nextBtn = root.querySelector('.fb-stack-card-next-btn');
	const prevBtn = root.querySelector('.fb-stack-card-prev-btn');
	const doc = root.ownerDocument || document;
	const win = doc.defaultView || window;
	const isEditor = !!options.isEditor;

	if (!slider || !items.length) {
		return () => {};
	}

	const totalItems = items.length;
	const config = {
		...DEFAULT_PRESET_FOUR_CONFIG,
		...(options.config || parsePresetRootConfig(root, 'presetFourConfig', DEFAULT_PRESET_FOUR_CONFIG)),
	};

	let runtimeConfig = resolvePresetFourRuntimeConfig(config, win.innerWidth || 1440);
	let currentItem = 0;
	let isAnimating = false;
	let autoTimer = null;
	let sliderActive = isEditor;
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
		item.style.left = '50%';
		item.style.top = '50%';
		item.style.transformOrigin = 'center';
		item.style.width = `min(100%, ${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit})`;
		item.style.maxWidth = `${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit}`;
	});

	function getStyleByIndex(index, totalVisibleLayers = getEffectiveVisibleLayers()) {
		return {
			width: runtimeConfig.cardWidth,
			widthUnit: runtimeConfig.cardWidthUnit,
			scaleX: Math.max(runtimeConfig.minScale + index * runtimeConfig.scaleXStep, 0.1),
			scaleY: Math.max(runtimeConfig.minScale - index * runtimeConfig.scaleYStep, 0.1),
			opacity: Math.max(1 - index * runtimeConfig.opacityStep, 0),
			zIndex: Math.max(totalVisibleLayers - index, 1),
		};
	}

	function getEffectiveVisibleLayers() {
		return runtimeConfig.showAllLayers
			? totalItems
			: Math.min(runtimeConfig.visibleLayers, totalItems);
	}

	function syncSliderHeight(item, scale = 1) {
		const content = item?.querySelector('.fb-stack-card-item__content') || item;
		const contentHeight = content?.offsetHeight || item?.offsetHeight || 0;
		if (contentHeight > 0) {
			slider.style.height = `${Math.max(contentHeight * scale, contentHeight)}px`;
		}
	}

	function syncSliderWidth(totalVisibleLayers = getEffectiveVisibleLayers()) {
		slider.style.width = '100%';
		slider.style.maxWidth = `${runtimeConfig.cardWidth}${runtimeConfig.cardWidthUnit}`;
	}

	function applyStyle(item, index, speed = 0.6, totalVisibleLayers = getEffectiveVisibleLayers()) {
		const style = getStyleByIndex(index, totalVisibleLayers);

		item.style.transition = `
			transform ${speed}s ease,
			opacity ${speed}s ease,
			width ${speed}s ease,
			max-width ${speed}s ease
		`;
		item.style.width = `min(100%, ${style.width}${style.widthUnit})`;
		item.style.maxWidth = `${style.width}${style.widthUnit}`;
		item.style.opacity = style.opacity;
		item.style.zIndex = style.zIndex;
		item.style.visibility = 'visible';
		item.style.pointerEvents = 'auto';
		item.style.transform = `
			translate(-50%, -50%)
			scale(${style.scaleX}, ${style.scaleY})
		`;
	}

	function hideItem(item, fallbackIndex, totalVisibleLayers = getEffectiveVisibleLayers()) {
		const lastVisibleStyle = getStyleByIndex(Math.max(fallbackIndex, 0), totalVisibleLayers);
		item.classList.remove('active');
		item.style.opacity = '0';
		item.style.visibility = 'hidden';
		item.style.pointerEvents = 'none';
		item.style.zIndex = '0';
		item.style.width = `min(100%, ${lastVisibleStyle.width}${lastVisibleStyle.widthUnit})`;
		item.style.maxWidth = `${lastVisibleStyle.width}${lastVisibleStyle.widthUnit}`;
		item.style.transform = `
			translate(-50%, -50%)
			scale(
				${lastVisibleStyle.scaleX},
				${lastVisibleStyle.scaleY}
			)
		`;
	}

	function getOutTransform(direction) {
		const distance = runtimeConfig.outDistance;
		let x = 0;
		let y = 0;

		if (direction === 'left') x = -distance;
		if (direction === 'right') x = distance;
		if (direction === 'up') y = -distance;
		if (direction === 'down') y = distance;

		return `
			translate(-50%, -50%)
			translate(${x}px, ${y}px)
			scale(
				${Math.max(runtimeConfig.minScale - 0.08, 0.1)},
				${Math.max(runtimeConfig.minScale - runtimeConfig.scaleYStep - 0.08, 0.1)}
			)
		`;
	}

	function updatePositions(speed = runtimeConfig.animationSpeed) {
		const effectiveVisibleLayers = getEffectiveVisibleLayers();
		syncSliderWidth(effectiveVisibleLayers);
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
				syncSliderHeight(item, 1);
			}

			applyStyle(item, i, speed, effectiveVisibleLayers);
		}
	}

	function applyRuntimeConfig(nextConfig = config) {
		Object.assign(config, nextConfig);
		runtimeConfig = resolvePresetFourRuntimeConfig(config, win.innerWidth || 1440);

		items.forEach((item) => {
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
		if (!sliderActive || !runtimeConfig.autoPlay) {
			return;
		}

		stopAutoLoop();
		autoTimer = setInterval(() => {
			moveNext('right', false);
		}, runtimeConfig.autoPlayDelay);
	}

	function restartAutoLoop() {
		stopAutoLoop();
		startAutoLoop();
	}

	function moveNext(direction = 'right', fast = false) {
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

	function movePrev(direction = 'left', fast = false) {
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
			oldCurrentItem.style.transform = getOutTransform('right');
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
	} else {
		startAutoLoop();
	}

	if (nextBtn) {
		addListener(nextBtn, 'click', () => {
			moveNext('right', true);
			restartAutoLoop();
		});
	}

	if (prevBtn) {
		addListener(prevBtn, 'click', () => {
			movePrev('left', true);
			restartAutoLoop();
		});
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
				moveNext('right', true);
			} else {
				movePrev('left', true);
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
			if (diffX > 0) {
				moveNext('right', true);
			} else {
				movePrev('left', true);
			}
		} else if (diffY < 0) {
			moveNext('up', true);
		} else {
			movePrev('down', true);
		}

		restartAutoLoop();
	});

	addListener(doc, 'keydown', (event) => {
		if (!config.keyboardNavigation || !sliderActive) {
			return;
		}

		if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
			event.preventDefault();
		}

		if (isAnimating) {
			return;
		}

		switch (event.key) {
			case 'ArrowRight':
				moveNext('right', true);
				restartAutoLoop();
				break;
			case 'ArrowLeft':
				movePrev('left', true);
				restartAutoLoop();
				break;
			case 'ArrowUp':
				moveNext('up', true);
				restartAutoLoop();
				break;
			case 'ArrowDown':
				movePrev('down', true);
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
		cleanupFns.forEach((cleanup) => cleanup());
		if (root.__fbPresetFourInstance?.cleanup === cleanup) {
			root.__fbPresetFourInstance = null;
		}
		root.__fbPresetFourInitialized = null;
		items.forEach((item) => {
			item.classList.remove('active');
			item.style.removeProperty('width');
			item.style.removeProperty('max-width');
			item.style.removeProperty('height');
			item.style.removeProperty('opacity');
			item.style.removeProperty('z-index');
			item.style.removeProperty('transform');
			item.style.removeProperty('transition');
			item.style.removeProperty('left');
			item.style.removeProperty('top');
			item.style.removeProperty('position');
			item.style.removeProperty('transform-origin');
		});
		slider.style.removeProperty('width');
		slider.style.removeProperty('max-width');
		slider.style.removeProperty('height');
	};

	root.__fbPresetFourInstance = {
		updateConfig: applyRuntimeConfig,
		cleanup,
	};

	return cleanup;
}