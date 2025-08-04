import domReady from '@wordpress/dom-ready';
import { useSelect } from '@wordpress/data';
import { useEffect, createRoot } from '@wordpress/element';
import Sidebar from "./components/sidebar";

const AddEventCommandForQAB = () => {
	const postId = useSelect( ( select ) => {
		const getPostIdFromStore = select( 'core/editor' )?.getCurrentPostId();
		return getPostIdFromStore;
	}, [] );

	const createCustomEvent = () => {
		const loadQABEditor = new CustomEvent( 'FBQEditor', {
			detail: { toggleStatus: 'enabled' },
		} );

		document?.dispatchEvent( loadQABEditor );
	};

	useEffect( () => {
		// Create the custom event.
		createCustomEvent();
	},[postId] )

	return null;
};

domReady( () => {

	const currentUrl = new URL( window.location.href );
	if ( '/wp-admin/site-editor.php' !== currentUrl.pathname ) {
		const blankDiv = document.createElement( 'div' );
		document.body.appendChild( blankDiv );
		createRoot( blankDiv ).render( <AddEventCommandForQAB /> );
	}

	if( '/wp-admin/site-editor.php' === currentUrl.pathname ) {
		toggleSidebar( window.location.href );

		window.navigation.addEventListener( 'navigate', e => {
			toggleSidebar( e.destination.url );
		} );
	} else {
		attachSidebar();
	}
} );

const toggleSidebar = ( url ) => {
	const currentUrl = new URL( url );
	if( '/wp-admin/site-editor.php' === currentUrl.pathname ) {
		if( 'edit' === currentUrl.searchParams.get( 'canvas' ) ) {
			attachSidebarAfterLoading();
		} else {
			const container = document.querySelector( '.frontis-blocks-quick-access' );
			if ( container ) {
				container.parentElement.remove();
			}
		}
	}
}

const attachSidebar = () => {
	const interval = setInterval( () => {
			const rootElement = document.querySelector( '.interface-interface-skeleton__body' );
			if ( ! rootElement ) {
				return;
			}

			const blockElement = document.querySelector( '.frontis-blocks-access__sidebar--blocks--block' );
			if ( blockElement ) {
				clearInterval( interval );
				return;
			}

			clearInterval( interval );

			let container = rootElement.querySelector( '.frontis-blocks-quick-access-container' );

			if ( ! container ) {
				const parentDiv = rootElement.insertBefore( document.createElement( 'div' ), rootElement.firstChild );
				container = parentDiv.appendChild( document.createElement( 'div' ) );
				container.classList.add( 'frontis-blocks-quick-access-container' );
			}
			const root = createRoot( container );
			root.render( <Sidebar /> );
		}
		, 100 );
}

const attachSidebarAfterLoading = () => {
	const skeletonInterval = setInterval( () => {
			const skeleton = document.querySelector( '.edit-site-editor__interface-skeleton' ) || document.querySelector( '.editor-editor-interface.edit-site-editor__editor-interface' );
			if( skeleton ) {
				if( ! skeleton.classList.contains( 'is-loading' ) ) {
					clearInterval( skeletonInterval );
					attachSidebar();
				}
			}
		}
		, 100 );
}
document.addEventListener( 'FBQEditor', function( event ) {
	if ( 'enabled' === event?.detail?.toggleStatus ){
		attachSidebar();
	}
} );
