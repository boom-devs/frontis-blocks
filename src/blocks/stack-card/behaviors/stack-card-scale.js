/**
 * Stack Card Scale Behavior
 * 
 * Handles the "Stack Top" sticky card behavior where cards scale based on scroll position.
 * Syncs the --fb-active-scale CSS variable with the scroll state.
 */

import { isStackCardPresetOver } from './preset-four'; // Note: update import path if needed

const STICKY_THRESHOLD_EPSILON = 3;

/**
 * Gets the computed sticky top position in pixels.
 */
function getComputedStickyTop(element) {
	const top = getComputedStyle(element).top;
	if (!top || top === 'auto' || !top.endsWith('px')) return null;
	const value = parseFloat(top);
	return Number.isFinite(value) ? value : null;
}

/**
 * Finds the nearest scrollable ancestor of an element.
 */
function findScrollContainer(element, stopAtElement) {
	let parent = element?.parentElement;
	while (parent && parent !== stopAtElement) {
		const { overflowY, overflow } = getComputedStyle(parent);
		const overflowStyle = overflowY || overflow;
		if (/(auto|scroll|overlay)/.test(overflowStyle) && parent.scrollHeight > parent.clientHeight + 1) {
			return parent;
		}
		parent = parent.parentElement;
	}
	return null;
}

/**
 * Calculates the absolute vertical threshold where the element becomes "stuck".
 */
function getStickyThreshold(element, stickyTopPx, rootElement) {
	const scrollContainer = findScrollContainer(element, rootElement?.ownerDocument?.body || null);
	if (!scrollContainer) return stickyTopPx;
	return scrollContainer.getBoundingClientRect().top + stickyTopPx;
}

/**
 * Updates the scale state for all items within a specific stack card block.
 * 
 * @param {HTMLElement} stackRoot The root element of the stack card block.
 */
export function updateStackCardScaleItems(stackRoot) {
	const presetClass = Array.from(stackRoot?.classList || []).find((cls) => cls.startsWith('fb-stack-cards-preset-'));
	const currentPreset = presetClass?.replace('fb-stack-cards-preset-', '');

	// Only apply to 'stack-top' preset
	if (currentPreset !== 'stack-top') return;

	const cardItems = stackRoot.querySelectorAll('.fb-stack-cards-frame .fb-stack-card-item');

	cardItems.forEach((item) => {
		const designScale = getComputedStyle(item).getPropertyValue('--fb-design-scale').trim();
		if (!designScale) {
			item.style.removeProperty('--fb-active-scale');
			return;
		}

		const stickyTop = getComputedStickyTop(item);
		if (stickyTop === null) {
			item.style.removeProperty('--fb-active-scale');
			return;
		}

		const rect = item.getBoundingClientRect();
		const threshold = getStickyThreshold(item, stickyTop, stackRoot);
		const isStuck = Math.abs(rect.top - threshold) <= STICKY_THRESHOLD_EPSILON;
		const isAboveThreshold = rect.top > threshold + STICKY_THRESHOLD_EPSILON;

		if (isStuck || !isAboveThreshold) {
			item.style.removeProperty('--fb-active-scale');
		} else {
			item.style.setProperty('--fb-active-scale', '1');
		}
	});
}

/**
 * Updates the scale state for all stack card blocks on the page.
 */
export function updateAllStackCardScaleItems(doc = document) {
	doc.querySelectorAll('.fb-stack-cards-main-wrapper').forEach((root) => {
		updateStackCardScaleItems(root);
	});
}

/**
 * Helper to collect all relevant scroll targets for listening.
 */
function getScrollTargets(stackRoot) {
	const targets = new Set();
	const doc = stackRoot.ownerDocument;
	const win = doc?.defaultView;
	if (win) targets.add(win);
	if (doc) {
		targets.add(doc);
		if (doc.scrollingElement) targets.add(doc.scrollingElement);
		if (doc.documentElement) targets.add(doc.documentElement);
		if (doc.body) targets.add(doc.body);
	}

	let parent = stackRoot.parentElement;
	while (parent) {
		const { overflowY, overflow } = getComputedStyle(parent);
		const overflowStyle = overflowY || overflow;
		if (/(auto|scroll|overlay)/.test(overflowStyle) && parent.scrollHeight > parent.clientHeight + 1) {
			targets.add(parent);
		}
		parent = parent.parentElement;
	}
	return { targets, win };
}

/**
 * Binds the sticky scale behavior in the block editor.
 * 
 * @param {HTMLElement} stackRoot The root element.
 * @returns {Function} Cleanup function.
 */
export function bindStackCardScaleEditorBehavior(stackRoot) {
	let rafHandle = null;
	let resizeObserver = null;

	const requestUpdate = () => {
		if (rafHandle !== null) return;
		const win = stackRoot.ownerDocument?.defaultView || window;
		rafHandle = win.requestAnimationFrame(() => {
			rafHandle = null;
			if (stackRoot.isConnected) updateStackCardScaleItems(stackRoot);
		});
	};

	const { targets, win } = getScrollTargets(stackRoot);
	targets.forEach((t) => t.addEventListener('scroll', requestUpdate, { passive: true }));
	win?.addEventListener('resize', requestUpdate);

	if (typeof ResizeObserver !== 'undefined') {
		resizeObserver = new ResizeObserver(requestUpdate);
		resizeObserver.observe(stackRoot);
	}

	const mutationObserver = new MutationObserver(requestUpdate);
	mutationObserver.observe(stackRoot, {
		childList: true,
		subtree: true,
		attributes: true,
		attributeFilter: ['style', 'class'],
	});

	requestUpdate();

	return () => {
		const winRef = stackRoot.ownerDocument?.defaultView || window;
		if (rafHandle !== null) winRef.cancelAnimationFrame(rafHandle);
		targets.forEach((t) => t.removeEventListener('scroll', requestUpdate));
		win?.removeEventListener('resize', requestUpdate);
		resizeObserver?.disconnect();
		mutationObserver.disconnect();
		stackRoot.querySelectorAll('.fb-stack-card-item').forEach((el) => el.style.removeProperty('--fb-active-scale'));
	};
}

/**
 * Global scale update logic for frontend.
 */
let globalRafHandle = null;
function requestGlobalUpdate() {
	if (globalRafHandle !== null) return;
	globalRafHandle = window.requestAnimationFrame(() => {
		globalRafHandle = null;
		updateAllStackCardScaleItems(document);
	});
}

/**
 * Initializes the Stack Card scale behavior script for the frontend.
 */
export function initStackCardScaleScript() {
	if (typeof window === 'undefined') return;

	if (!window.__fbStackCardScaleBound) {
		window.__fbStackCardScaleBound = true;
		window.addEventListener('scroll', requestGlobalUpdate, { passive: true });
		window.addEventListener('resize', requestGlobalUpdate);
	}

	requestGlobalUpdate();

	if (!window.__fbStackCardScaleMutationObserver) {
		window.__fbStackCardScaleMutationObserver = new MutationObserver(requestGlobalUpdate);
		window.__fbStackCardScaleMutationObserver.observe(document.body, { childList: true, subtree: true });
	}
}
