import domReady from '@wordpress/dom-ready';
import { useSelect } from '@wordpress/data';
import { useEffect, createRoot } from '@wordpress/element';
import Sidebar from "./components/sidebar";

const initializeFrontisBlocks = () => {
	const AddEventCommandForQAB = () => {
		const postId = useSelect((select) => {
			const getPostIdFromStore = select('core/editor')?.getCurrentPostId();
			return getPostIdFromStore;
		}, []);

		const createCustomEvent = () => {
			const loadQABEditor = new CustomEvent('FBQEditor', {
				detail: { toggleStatus: 'enabled' },
			});
			document?.dispatchEvent(loadQABEditor);
		};

		useEffect(() => {
			createCustomEvent();
		}, [postId]);

		return null;
	};

	domReady(() => {
		const currentUrl = new URL(window.location.href);
		if (currentUrl.pathname !== '/wp-admin/site-editor.php') {
			const blankDiv = document.createElement('div');
			document.body.appendChild(blankDiv);
			createRoot(blankDiv).render(<AddEventCommandForQAB />);
			manageSidebar(currentUrl);
		} else {
			manageSidebar(currentUrl);
			window.navigation.addEventListener('navigate', (e) => {
				manageSidebar(new URL(e.destination.url));
			});
		}
	});
};

const manageSidebar = (url) => {
	const attachSidebar = () => {
		const interval = setInterval(() => {
			const rootElement = document.querySelector('.interface-interface-skeleton__body');
			if (!rootElement) return;

			const blockElement = document.querySelector('.frontis-blocks-access__sidebar--blocks--block');
			if (blockElement) {
				clearInterval(interval);
				return;
			}

			clearInterval(interval);

			let container = rootElement.querySelector('.frontis-blocks-quick-access-container');
			if (!container) {
				const parentDiv = rootElement.insertBefore(document.createElement('div'), rootElement.firstChild);
				container = parentDiv.appendChild(document.createElement('div'));
				container.classList.add('frontis-blocks-quick-access-container');
			}
			const root = createRoot(container);
			root.render(<Sidebar />);
		}, 100);
	};

	const attachSidebarAfterLoading = () => {
		const skeletonInterval = setInterval(() => {
			const skeleton = document.querySelector('.edit-site-editor__interface-skeleton') ||
				document.querySelector('.editor-editor-interface.edit-site-editor__editor-interface');
			if (skeleton && !skeleton.classList.contains('is-loading')) {
				clearInterval(skeletonInterval);
				attachSidebar();
			}
		}, 100);
	};

	const currentUrl = url instanceof URL ? url : new URL(url);
	if (currentUrl.pathname === '/wp-admin/site-editor.php') {
		if (currentUrl.searchParams.get('canvas') === 'edit') {
			attachSidebarAfterLoading();
		} else {
			const container = document.querySelector('.frontis-blocks-quick-access');
			if (container) {
				container.parentElement.remove();
			}
		}
	} else {
		attachSidebar();
	}

	document.addEventListener('FBQEditor', (event) => {
		if (event?.detail?.toggleStatus === 'enabled') {
			attachSidebar();
		}
	});
};

initializeFrontisBlocks();
