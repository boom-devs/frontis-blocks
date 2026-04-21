(function () {
	const ITEM_SELECTOR =
		'.fb-stack-cards-main-wrapper.fb-stack-cards-preset-stack-top .fb-stack-cards-frame .fb-stack-card-item';
	const STUCK_EPS_PX = 3;

	let rafId = null;

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

	function updateItems() {
		const items = document.querySelectorAll(ITEM_SELECTOR);
		items.forEach((el) => {
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
			const stuck = Math.abs(rect.top - stickyTop) <= STUCK_EPS_PX;

			if (stuck) {
				el.style.removeProperty('--fb-active-scale');
			} else {
				el.style.setProperty('--fb-active-scale', '1');
			}
		});
	}

	function scheduleUpdate() {
		if (rafId !== null) {
			return;
		}
		rafId = requestAnimationFrame(() => {
			rafId = null;
			updateItems();
		});
	}

	function bindGlobalListeners() {
		if (window.__fbStackCardScaleListenersBound) {
			return;
		}
		window.__fbStackCardScaleListenersBound = true;
		window.addEventListener('scroll', scheduleUpdate, { passive: true });
		window.addEventListener('resize', scheduleUpdate);
	}

	function init() {
		bindGlobalListeners();
		scheduleUpdate();

		if (!window.__fbStackCardScaleMutationObserver) {
			window.__fbStackCardScaleMutationObserver = new MutationObserver(() => {
				scheduleUpdate();
			});
			window.__fbStackCardScaleMutationObserver.observe(document.body, {
				childList: true,
				subtree: true,
			});
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
