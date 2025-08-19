/**
 * Tabs frontend behavior (functional only)
 * - স্কোপড ভাবে প্রতিটি .uagb-tabs__wrap এর ভেতরে কাজ করে
 * - ক্লিকে active ট্যাব বদলায়, aria-selected সেট করে, প্যানেল show/hide করে
 */

( function () {
	function initTabs( root ) {
		if ( !root ) return;

		const tablist = root.querySelector( '.uagb-tabs__panel' );
		if ( !tablist ) return;

		const tabs = [ ...tablist.querySelectorAll( '.uagb-tabs-list' ) ];
		const items = [ ...tablist.querySelectorAll( '.uagb-tab' ) ];

		// find child panels by class 'uagb-tabs__body-container uagb-inner-tab-{i}'
		const panels = [ ...root.querySelectorAll( '.uagb-tabs__body-container' ) ];

		function setActive( index ) {
			const max = Math.max( 0, tabs.length - 1 );
			const i = Math.min( Math.max( index, 0 ), max );

			// update dataset for persistence
			root.dataset.tabActive = String( i );

			// update tab states
			items.forEach( ( li, idx ) => {
				if ( idx === i ) li.classList.add( 'uagb-tabs__active' );
				else li.classList.remove( 'uagb-tabs__active' );
			} );
			tabs.forEach( ( a, idx ) => {
				a.setAttribute( 'aria-selected', String( idx === i ) );
			} );

			// update panels visibility — assumes child has .uagb-inner-tab-{id} where id === index
			panels.forEach( ( panelEl, idx ) => {
				// if panel has class 'uagb-inner-tab-{idx}' show it, else hide
				// fallback: match by id attribute '#uagb-tabs__panel{idx}'
				const matchByClass = panelEl.classList.contains( `uagb-inner-tab-${ i }` );
				const matchById = panelEl.id === `uagb-tabs__panel${ i }`;
				const isActive = matchByClass || matchById || idx === i;

				panelEl.style.display = isActive ? 'block' : 'none';
			} );
		}

		// initial
		const initial = parseInt( root.getAttribute( 'data-tab-active' ) || '0', 10 ) || 0;
		setActive( initial );

		// click handlers
		tabs.forEach( ( a, idx ) => {
			a.addEventListener( 'click', function ( e ) {
				// allow hash but prevent default scroll jump
				e.preventDefault();
				setActive( idx );
			} );
			a.addEventListener( 'keydown', function ( e ) {
				// simple left/right keyboard nav (optional)
				if ( e.key === 'ArrowLeft' ) {
					e.preventDefault();
					setActive( Math.max( 0, idx - 1 ) );
				} else if ( e.key === 'ArrowRight' ) {
					e.preventDefault();
					setActive( Math.min( tabs.length - 1, idx + 1 ) );
				}
			} );
		} );
	}

	function initAll() {
		const roots = document.querySelectorAll( '.uagb-tabs__wrap' );
		roots.forEach( initTabs );
	}

	if ( document.readyState === 'loading' ) {
		document.addEventListener( 'DOMContentLoaded', initAll );
	} else {
		initAll();
	}
} )();
