(function () {
	function initTabs(root, outerRoot) {
		if (!root) return;

		const tablist = root.querySelector('.fb-tabs-panel');
		if (!tablist) return;

		// Prevent multiple initializations
		if (root.hasAttribute('data-tabs-initialized')) return;
		root.setAttribute('data-tabs-initialized', 'true');

		// Select li elements because role="tab" is defined on the li in save.js
		const tabItems = [...tablist.querySelectorAll('.fb-tab')]; // li elements
		
		// find child panels by class 'fb-tabs-body-container fb-inner-tab-{i}'
		const panels = [...root.querySelectorAll('.fb-tabs-body-container')];

		const dataSource = outerRoot || root.closest('.fb-tabs-wrapper') || root;
		const initial = parseInt(dataSource.getAttribute('data-tab-active') || '0', 10) || 0;

		let timerId = null;
		let isPaused = false;
		let currentIndex = initial;

		function getParsedValue(attrName) {
			const val = dataSource.getAttribute(attrName);
			if (!val) return null;
			const parsed = parseInt(val, 10);
			return isNaN(parsed) ? null : parsed;
		}

		function getInterval() {
			const width = window.innerWidth;
			const desktopVal = getParsedValue('data-tab-auto-interval-desktop') || 3000;
			const tabletVal = getParsedValue('data-tab-auto-interval-tablet');
			const mobileVal = getParsedValue('data-tab-auto-interval-mobile');

			if (width <= 767) {
				return mobileVal || tabletVal || desktopVal;
			} else if (width <= 1024) {
				return tabletVal || desktopVal;
			} else {
				return desktopVal;
			}
		}

		function setActive(index) {
			const max = Math.max(0, tabItems.length - 1);
			const i = Math.min(Math.max(index, 0), max);
			currentIndex = i; // update our tracker

			// update dataset for persistence
			root.dataset.tabActive = String(i);

			// update tab states - for li elements
			tabItems.forEach((li, idx) => {
				const isActive = idx === i;
				
				// CSS class update
				if (isActive) {
					li.classList.add('fb-tabs-active');
				} else {
					li.classList.remove('fb-tabs-active');
				}
				
				// ARIA attributes update
				li.setAttribute('aria-selected', String(isActive));
				li.setAttribute('tabIndex', isActive ? '0' : '-1');
			});

			// update panels — stack in same grid cell; toggle visibility via class
			panels.forEach((panelEl, idx) => {
				const matchByClass = panelEl.classList.contains(`fb-inner-tab-${i}`);
				const matchById = panelEl.id === `fb-tabs-panel${i}` || panelEl.id === `fb-tabs-panel-${root.dataset.blockID || 'x'}-${i}`;
				const fallbackMatch = idx === i;

				const isActive = matchByClass || matchById || fallbackMatch;
				const wrapper = panelEl.closest('.fb-tabs-item-wrapper');

				if (wrapper) {
					wrapper.style.display = isActive ? 'block' : 'none';
					wrapper.classList.toggle('fb-tabs-panel-active', isActive);
					wrapper.setAttribute('aria-hidden', String(!isActive));
				} else {
					panelEl.style.display = isActive ? 'block' : 'none';
					panelEl.classList.toggle('fb-tabs-panel-active', isActive);
				}

				panelEl.setAttribute('aria-hidden', String(!isActive));
			});
		}

		function startAutoSwitch() {
			const switchMode = dataSource.getAttribute('data-tab-switch-mode') || 'click';
			if (switchMode !== 'auto') return;

			stopAutoSwitch(); // ensure no duplicates

			function tick() {
				if (isPaused || document.hidden) {
					timerId = setTimeout(tick, 200);
					return;
				}

				// switch to next tab
				const nextIndex = (currentIndex + 1) % tabItems.length;
				setActive(nextIndex);

				const interval = getInterval();
				timerId = setTimeout(tick, interval);
			}

			const interval = getInterval();
			timerId = setTimeout(tick, interval);
		}

		function stopAutoSwitch() {
			if (timerId) {
				clearTimeout(timerId);
				timerId = null;
			}
		}

		function handleManualSelect(idx) {
			setActive(idx);
			const switchMode = dataSource.getAttribute('data-tab-switch-mode') || 'click';
			if (switchMode === 'auto') {
				stopAutoSwitch();
				startAutoSwitch();
			}
		}

		// initial setup — data-tab-active is on the outer .fb-tabs-wrapper, not .fb-tabs-wrap
		setActive(initial);
		startAutoSwitch();

		// Pause on hover
		if (dataSource) {
			dataSource.addEventListener('mouseenter', () => {
				const pauseOnHover = dataSource.getAttribute('data-tab-auto-pause-hover') === 'true';
				if (pauseOnHover) {
					isPaused = true;
				}
			});
			dataSource.addEventListener('mouseleave', () => {
				isPaused = false;
			});
		}

		// click handlers - on li element
		tabItems.forEach((li, idx) => {
			li.addEventListener('click', function (e) {
				// prevent default scroll jump
				e.preventDefault();
				handleManualSelect(idx);
				
				// focus management for accessibility
				li.focus();
			});
			
			// keyboard navigation
			li.addEventListener('keydown', function (e) {
				let newIndex = idx;
				
				switch (e.key) {
					case 'ArrowLeft':
						e.preventDefault();
						newIndex = idx > 0 ? idx - 1 : tabItems.length - 1;
						break;
					case 'ArrowRight':
						e.preventDefault();
						newIndex = idx < tabItems.length - 1 ? idx + 1 : 0;
						break;
					case 'Home':
						e.preventDefault();
						newIndex = 0;
						break;
					case 'End':
						e.preventDefault();
						newIndex = tabItems.length - 1;
						break;
					case 'Enter':
					case ' ': // Space key
						e.preventDefault();
						handleManualSelect(idx);
						return;
					default:
						return; // exit early for other keys
				}
				
				handleManualSelect(newIndex);
				tabItems[newIndex].focus();
			});
		});
	}

	function initAll() {
		const roots = document.querySelectorAll('.fb-tabs-wrapper'); // wrapper class according to save.js
		roots.forEach(root => {
			const tabsWrap = root.querySelector('.fb-tabs-wrap');
			if (tabsWrap) {
				initTabs(tabsWrap, root); // pass outer root so data-tab-active can be read correctly
			}
		});
	}

	function setupTabs() {
		// Initialize when DOM is ready
		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', initAll);
		} else {
			initAll();
		}

		// Handle dynamic content changes (crucial for Next.js / SPA route transitions)
		if (typeof MutationObserver !== 'undefined') {
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.addedNodes.length || mutation.removedNodes.length) {
						initAll();
					}
				});
			});

			observer.observe(document.body, {
				childList: true,
				subtree: true
			});
		}
	}

	// Start setup
	setupTabs();

	// Re-initialize for dynamic content (if needed)
	window.fbTabsReinit = initAll;
})();