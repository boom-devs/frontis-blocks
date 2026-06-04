(function () {
	function initTabs(root, outerRoot) {
		if (!root) return;

		const tablist = root.querySelector('.fb-tabs-panel');
		if (!tablist) return;

		// এখানে li elements নিচ্ছি কারণ save.js এ li তেই role="tab" দেওয়া
		const tabItems = [...tablist.querySelectorAll('.fb-tab')]; // li elements
		
		// find child panels by class 'fb-tabs-body-container fb-inner-tab-{i}'
		const panels = [...root.querySelectorAll('.fb-tabs-body-container')];

		function setActive(index) {
			const max = Math.max(0, tabItems.length - 1);
			const i = Math.min(Math.max(index, 0), max);

			// update dataset for persistence
			root.dataset.tabActive = String(i);

			// update tab states - li elements এর জন্য
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
				}

				panelEl.setAttribute('aria-hidden', String(!isActive));
			});
		}

		// initial setup — data-tab-active is on the outer .fb-tabs-wrapper, not .fb-tabs-wrap
		const dataSource = outerRoot || root.closest('.fb-tabs-wrapper') || root;
		const initial = parseInt(dataSource.getAttribute('data-tab-active') || '0', 10) || 0;
		setActive(initial);

		// click handlers - li element এ
		tabItems.forEach((li, idx) => {
			li.addEventListener('click', function (e) {
				// prevent default scroll jump
				e.preventDefault();
				setActive(idx);
				
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
						setActive(idx);
						return;
					default:
						return; // exit early for other keys
				}
				
				setActive(newIndex);
				tabItems[newIndex].focus();
			});
		});
	}

	function initAll() {
		const roots = document.querySelectorAll('.fb-tabs-wrapper'); // save.js অনুযায়ী wrapper class
		roots.forEach(root => {
			const tabsWrap = root.querySelector('.fb-tabs-wrap');
			if (tabsWrap) {
				initTabs(tabsWrap, root); // pass outer root so data-tab-active can be read correctly
			}
		});
	}

	// Initialize when DOM is ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initAll);
	} else {
		initAll();
	}

	// Re-initialize for dynamic content (if needed)
	window.fbTabsReinit = initAll;
})();