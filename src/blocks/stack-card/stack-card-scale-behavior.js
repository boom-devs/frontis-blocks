/**
 * Stack-top sticky cards: sync --fb-active-scale with scroll (editor + frontend).
 */

import { hasStackCardScalePreset } from './preset-four';

const STUCK_EPS_PX = 3;

function getStickyTopPx(el) {
	const top = getComputedStyle(el).top;
	if (!top || top === 'auto') {
		return null;
	}
	if (!top.endsWith('px')) {
		return null;
	}
	const n = parseFloat(top);
	return Number.isFinite(n) ? n : null;
}

function getNearestScrollContainer(el, stopAt) {
	let node = el?.parentElement;
	while (node && node !== stopAt) {
		const { overflowY, overflow } = getComputedStyle(node);
		const oy = overflowY || overflow;
		if (/(auto|scroll|overlay)/.test(oy) && node.scrollHeight > node.clientHeight + 1) {
			return node;
		}
		node = node.parentElement;
	}

	return null;
}

function getStickyThresholdTop(el, stickyTop, stackRoot) {
	const scrollContainer = getNearestScrollContainer(el, stackRoot?.ownerDocument?.body || null);
	if (!scrollContainer) {
		return stickyTop;
	}

	return scrollContainer.getBoundingClientRect().top + stickyTop;
}

/**
 * @param {HTMLElement} stackRoot Main wrapper with .fb-stack-cards-preset-stack-top
 */
export function updateStackCardScaleItems(stackRoot) {
	const presetClass = Array.from(stackRoot?.classList || []).find((className) =>
		className.startsWith('fb-stack-cards-preset-')
	);
	const presetStyle = presetClass?.replace('fb-stack-cards-preset-', '');

	if (!hasStackCardScalePreset(presetStyle)) {
		return;
	}

	const items = stackRoot.querySelectorAll(
		'.fb-stack-cards-frame .fb-stack-card-item'
	);

	items.forEach((el, index) => {
		const design = getComputedStyle(el).getPropertyValue('--fb-design-scale').trim();
		if (!design) {
			el.style.removeProperty('--fb-active-scale');
			return;
		}

		const stickyTop = getStickyTopPx(el);
		if (stickyTop === null) {
			el.style.removeProperty('--fb-active-scale');
			return;
		}

		const rect = el.getBoundingClientRect();
		const stickyThresholdTop = getStickyThresholdTop(el, stickyTop, stackRoot);
		const stuck = Math.abs(rect.top - stickyThresholdTop) <= STUCK_EPS_PX;
		const beforeStickyPoint = rect.top > stickyThresholdTop + STUCK_EPS_PX;

		if (stuck || !beforeStickyPoint) {
			el.style.removeProperty('--fb-active-scale');
		} else {
			el.style.setProperty('--fb-active-scale', '1');
		}
	});
}

export function updateAllStackCardScaleItems(doc = document) {
	doc.querySelectorAll('.fb-stack-cards-main-wrapper').forEach((root) => {
		updateStackCardScaleItems(root);
	});
}

function collectScrollTargets(stackRoot) {
	const targets = new Set();
	const doc = stackRoot.ownerDocument;
	const win = stackRoot.ownerDocument?.defaultView;
	if (win) {
		targets.add(win);
	}

	if (doc) {
		targets.add(doc);
	}

	if (doc?.scrollingElement) {
		targets.add(doc.scrollingElement);
	}

	if (doc?.documentElement) {
		targets.add(doc.documentElement);
	}

	if (doc?.body) {
		targets.add(doc.body);
	}

	let node = stackRoot.parentElement;
	while (node) {
		const { overflowY, overflow } = getComputedStyle(node);
		const oy = overflowY || overflow;
		if (/(auto|scroll|overlay)/.test(oy) && node.scrollHeight > node.clientHeight + 1) {
			targets.add(node);
		}
		node = node.parentElement;
	}

	return { targets, win };
}

/**
 * Editor: one block instance — listen to iframe window + scrollable ancestors.
 * @param {HTMLElement} stackRoot
 * @returns {() => void} cleanup
 */
export function bindEditorStackCardScale(stackRoot) {
	let rafId = null;
	let resizeObserver = null;

	const scheduleUpdate = () => {
		if (rafId !== null) {
			return;
		}
		const win = stackRoot.ownerDocument?.defaultView;
		rafId = (win || window).requestAnimationFrame(() => {
			rafId = null;
			if (stackRoot.isConnected) {
				updateStackCardScaleItems(stackRoot);
			}
		});
	};

	const { targets, win } = collectScrollTargets(stackRoot);

	targets.forEach((t) => {
		t.addEventListener('scroll', scheduleUpdate, { passive: true });
	});

	win?.addEventListener('resize', scheduleUpdate);

	if (typeof ResizeObserver !== 'undefined') {
		resizeObserver = new ResizeObserver(scheduleUpdate);
		resizeObserver.observe(stackRoot);
	}

	const mo = new MutationObserver(scheduleUpdate);
	mo.observe(stackRoot, {
		childList: true,
		subtree: true,
		attributes: true,
		attributeFilter: ['style', 'class'],
	});

	scheduleUpdate();

	return () => {
		const cancelWin = stackRoot.ownerDocument?.defaultView || window;
		if (rafId !== null) {
			cancelWin.cancelAnimationFrame(rafId);
		}
		rafId = null;

		targets.forEach((t) => {
			t.removeEventListener('scroll', scheduleUpdate);
		});
		win?.removeEventListener('resize', scheduleUpdate);
		resizeObserver?.disconnect();
		mo.disconnect();

		stackRoot.querySelectorAll('.fb-stack-card-item').forEach((el) => {
			el.style.removeProperty('--fb-active-scale');
		});
	};
}

let frontRafId = null;

function scheduleUpdateAllFront() {
	if (frontRafId !== null) {
		return;
	}
	frontRafId = window.requestAnimationFrame(() => {
		frontRafId = null;
		updateAllStackCardScaleItems(document);
	});
}

/** Frontend view script: global listeners + body mutation observer (singleton). */
export function initStackCardScaleViewScript() {
	if (typeof window === 'undefined') {
		return;
	}

	if (!window.__fbStackCardScaleListenersBound) {
		window.__fbStackCardScaleListenersBound = true;
		window.addEventListener('scroll', scheduleUpdateAllFront, { passive: true });
		window.addEventListener('resize', scheduleUpdateAllFront);
	}

	scheduleUpdateAllFront();

	if (!window.__fbStackCardScaleMutationObserver) {
		window.__fbStackCardScaleMutationObserver = new MutationObserver(() => {
			scheduleUpdateAllFront();
		});
		window.__fbStackCardScaleMutationObserver.observe(document.body, {
			childList: true,
			subtree: true,
		});
	}
}