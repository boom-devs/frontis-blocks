/**
 * Persist container frontend CSS outside block comments.
 *
 * Deep nesting serializes every ancestor with all descendant attributes. Storing
 * full `blockStyle` CSS in each container comment causes O(n²) memory during
 * Gutenberg's serialize WeakMap cache (OOM around ~600+ nests).
 *
 * `blockStyle` is role:local (not saved in post content). Combined CSS is kept in
 * post meta `_frontis_container_block_styles` for AssetsGenerator on the frontend.
 *
 * IMPORTANT: Do NOT apiFetch POST the post entity just to save meta. That response
 * rehydrates core-data with stale `content` from the DB and can restore deleted blocks.
 * Meta must ride along with the editor's normal save via editPost / editEntityRecord.
 */
import { select, dispatch, subscribe } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';
import frontEndStyle from './frontend-style';

export const CONTAINER_BLOCK_STYLE_META_KEY = '_frontis_container_block_styles';

let syncTimer = null;
let lastSyncedCss = null;
let listenersBound = false;

/**
 * Resolve post editor or site editor context for meta writes.
 */
const getEditablePostContext = () => {
	const postEditor = select( 'core/editor' );
	if ( postEditor?.getCurrentPostId?.() ) {
		return {
			source: 'post-editor',
			postId: postEditor.getCurrentPostId(),
			postType: postEditor.getCurrentPostType?.() || 'post',
			isDirty: () => !! postEditor.isEditedPostDirty?.(),
			isSaving: () => !! postEditor.isSavingPost?.() || !! postEditor.isAutosavingPost?.(),
			getMeta: () => postEditor.getEditedPostAttribute?.( 'meta' ) || {},
			editMeta: ( meta ) => {
				dispatch( 'core/editor' ).editPost( { meta } );
			},
		};
	}

	const editSite = select( 'core/edit-site' );
	const postId = editSite?.getEditedPostId?.();
	const postType = editSite?.getEditedPostType?.();
	if ( postId && postType ) {
		const core = select( 'core' );
		const entity = core?.getEditedEntityRecord?.( 'postType', postType, postId );
		return {
			source: 'site-editor',
			postId,
			postType,
			isDirty: () => {
				return !! core?.hasEditsForEntityRecord?.( 'postType', postType, postId );
			},
			isSaving: () => {
				return !! core?.isSavingEntityRecord?.( 'postType', postType, postId );
			},
			getMeta: () => entity?.meta || {},
			editMeta: ( meta ) => {
				dispatch( 'core' ).editEntityRecord( 'postType', postType, postId, { meta } );
			},
		};
	}

	return null;
};

const collectCombinedContainerCss = () => {
	const blockEditor = select( 'core/block-editor' );
	if ( ! blockEditor?.getClientIdsWithDescendants || ! blockEditor.getBlockName ) {
		return '';
	}

	let css = '';
	const clientIds = blockEditor.getClientIdsWithDescendants();

	for ( let i = 0; i < clientIds.length; i++ ) {
		const clientId = clientIds[ i ];
		if ( blockEditor.getBlockName( clientId ) !== 'frontis-blocks/container' ) {
			continue;
		}

		const attributes = blockEditor.getBlockAttributes( clientId ) || {};
		let style = attributes.blockStyle;

		if ( ! style ) {
			try {
				style = `${ frontEndStyle( attributes, clientId, 'frontis-blocks/container', 'Desktop' ) || '' }`
					.replace( /\s+/g, ' ' )
					.trim();
			} catch ( e ) {
				style = '';
			}
		}

		if ( style ) {
			css += style + '\n';
		}
	}

	return css;
};

/**
 * @param {{ force?: boolean }} options force=true on explicit save (Ctrl+S / buttons)
 */
export const syncContainerStylesToMeta = ( options = {} ) => {
	const { force = false } = options;
	const context = getEditablePostContext();
	if ( ! context ) {
		return;
	}

	const css = collectCombinedContainerCss();
	if ( css === lastSyncedCss && ! force ) {
		return;
	}

	const meta = context.getMeta() || {};
	if ( ( meta[ CONTAINER_BLOCK_STYLE_META_KEY ] || '' ) === css ) {
		lastSyncedCss = css;
		return;
	}

	// Avoid marking a clean post dirty just by opening it.
	if ( ! force && ! context.isDirty() ) {
		lastSyncedCss = css;
		return;
	}

	context.editMeta( {
		...meta,
		[ CONTAINER_BLOCK_STYLE_META_KEY ]: css,
	} );
	lastSyncedCss = css;
};

const scheduleSync = ( delay = 800 ) => {
	if ( syncTimer ) {
		clearTimeout( syncTimer );
	}
	syncTimer = setTimeout( () => {
		syncTimer = null;
		const context = getEditablePostContext();
		if ( ! context || context.isSaving() ) {
			return;
		}
		syncContainerStylesToMeta( { force: false } );
	}, delay );
};

const bindSaveIntentListeners = () => {
	if ( listenersBound || typeof document === 'undefined' ) {
		return;
	}
	listenersBound = true;

	const syncNow = () => {
		if ( syncTimer ) {
			clearTimeout( syncTimer );
			syncTimer = null;
		}
		// Only editPost/editEntityRecord — meta rides with the normal editor save.
		syncContainerStylesToMeta( { force: true } );
	};

	document.addEventListener(
		'keydown',
		( event ) => {
			if ( ( event.metaKey || event.ctrlKey ) && ( event.key === 's' || event.key === 'S' ) ) {
				syncNow();
			}
		},
		true
	);

	document.addEventListener(
		'click',
		( event ) => {
			const target = event.target;
			if ( ! target?.closest ) {
				return;
			}
			const saveControl = target.closest(
				[
					'.editor-post-publish-button',
					'.editor-post-publish-button__button',
					'.editor-post-publish-panel__toggle',
					'.editor-post-save-draft',
					'.editor-post-save-draft__button',
					'.edit-site-save-button__button',
					'.edit-site-editor__save-button',
					'.entities-saved-states__panel-toggle',
				].join( ',' )
			);
			if ( saveControl ) {
				syncNow();
			}
		},
		true
	);
};

const bootstrapBlockStylePersistence = () => {
	bindSaveIntentListeners();

	// While dirty (user edits / autosave window), keep meta in the edit buffer.
	subscribe( () => {
		const context = getEditablePostContext();
		if ( ! context?.isDirty() ) {
			return;
		}
		if ( context.isSaving() ) {
			return;
		}
		scheduleSync( 1500 );
	} );
};

if ( typeof window !== 'undefined' ) {
	domReady( bootstrapBlockStylePersistence );
}
