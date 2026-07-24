/**
 * Persist container frontend CSS outside block comments.
 *
 * Deep nesting serializes every ancestor with all descendant attributes. Storing
 * full `blockStyle` CSS in each container comment causes O(n²) memory during
 * Gutenberg's serialize WeakMap cache (OOM around ~400–600+ nests).
 *
 * Strategy
 * --------
 * 1. `blockStyle` is `role: local` (attributes.js) so supported WP builds omit it on save.
 * 2. On parse, strip `blockStyle` (and derived custom CSS value) from in-memory attrs so
 *    opening *legacy* posts that still embed huge CSS in post_content does not keep
 *    multi-MB strings in the block tree / serialize cache. Stash CSS for meta sync.
 * 3. Combined CSS is written to post meta `_frontis_container_block_styles` on save for
 *    AssetsGenerator (see Blocks.php + AssetsGenerator.php).
 *
 * IMPORTANT: Do NOT apiFetch POST the post entity just to save meta. That response
 * rehydrates core-data with stale `content` from the DB and can restore deleted blocks.
 * Meta must ride along with the editor's normal save via editPost / editEntityRecord.
 */
import { select, dispatch, subscribe } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import domReady from '@wordpress/dom-ready';
import frontEndStyle from './frontend-style';

export const CONTAINER_BLOCK_STYLE_META_KEY = '_frontis_container_block_styles';

/** p_block_id / block_id -> CSS captured while stripping attrs on parse */
const parsedStyleStash = new Map();

let syncTimer = null;
let lastSyncedCss = null;
let listenersBound = false;

/**
 * Strip heavy CSS attrs as soon as legacy block comments are parsed into the editor.
 *
 * Must register at module load (not domReady) so it runs before the editor parses
 * post_content. Otherwise 400+ nested containers still materialize multi-MB strings
 * and Chrome pauses on "potential out-of-memory crash".
 */
addFilter(
	'blocks.getBlockAttributes',
	'frontis-blocks/container-strip-heavy-styles-on-parse',
	( attributes, blockType ) => {
		if ( ! blockType || blockType.name !== 'frontis-blocks/container' || ! attributes ) {
			return attributes;
		}

		const blockStyle =
			typeof attributes.blockStyle === 'string' && attributes.blockStyle !== ''
				? attributes.blockStyle
				: '';
		const customCssValue =
			typeof attributes.containerGlobalCustomCSSValue === 'string' &&
			attributes.containerGlobalCustomCSSValue !== ''
				? attributes.containerGlobalCustomCSSValue
				: '';

		if ( ! blockStyle && ! customCssValue ) {
			return attributes;
		}

		const stashKey = attributes.p_block_id || attributes.block_id;
		if ( blockStyle && stashKey ) {
			parsedStyleStash.set( stashKey, blockStyle );
			if ( parsedStyleStash.size > 5000 ) {
				const oldest = parsedStyleStash.keys().next().value;
				parsedStyleStash.delete( oldest );
			}
		}

		const next = { ...attributes };
		if ( blockStyle ) {
			delete next.blockStyle;
		}
		// Derived CSS — regenerated from containerGlobalCustomCSS when needed.
		if ( customCssValue ) {
			delete next.containerGlobalCustomCSSValue;
		}
		return next;
	}
);

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
		const stashKey = attributes.p_block_id || attributes.block_id;
		let style = attributes.blockStyle || ( stashKey ? parsedStyleStash.get( stashKey ) : '' );

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

	// Template switches can re-serialize / re-hydrate the full block tree. Clear any
	// leftover heavy CSS attrs from memory so 500+ nested containers do not OOM.
	let lastTemplate = undefined;
	subscribe( () => {
		const editor = select( 'core/editor' );
		if ( ! editor?.getEditedPostAttribute ) {
			return;
		}
		const template = editor.getEditedPostAttribute( 'template' );
		if ( template === lastTemplate ) {
			return;
		}
		lastTemplate = template;
		stripHeavyStylesFromEditorContainers();
	} );
};

/**
 * Remove in-memory blockStyle / derived CSS from every container currently in the editor.
 * Stashes CSS for meta sync first. Uses not-persistent marking when available to avoid
 * flooding undo history during template changes.
 */
const stripHeavyStylesFromEditorContainers = () => {
	const blockEditorSelect = select( 'core/block-editor' );
	const blockEditorDispatch = dispatch( 'core/block-editor' );
	if ( ! blockEditorSelect?.getClientIdsWithDescendants || ! blockEditorDispatch?.updateBlockAttributes ) {
		return;
	}

	const clientIds = blockEditorSelect.getClientIdsWithDescendants();
	let stripped = 0;

	for ( let i = 0; i < clientIds.length; i++ ) {
		const clientId = clientIds[ i ];
		if ( blockEditorSelect.getBlockName( clientId ) !== 'frontis-blocks/container' ) {
			continue;
		}
		const attributes = blockEditorSelect.getBlockAttributes( clientId ) || {};
		const hasBlockStyle = typeof attributes.blockStyle === 'string' && attributes.blockStyle !== '';
		const hasCustomCss =
			typeof attributes.containerGlobalCustomCSSValue === 'string' &&
			attributes.containerGlobalCustomCSSValue !== '';
		if ( ! hasBlockStyle && ! hasCustomCss ) {
			continue;
		}

		const stashKey = attributes.p_block_id || attributes.block_id;
		if ( hasBlockStyle && stashKey ) {
			parsedStyleStash.set( stashKey, attributes.blockStyle );
		}

		if (
			stripped === 0 &&
			typeof blockEditorDispatch.__unstableMarkNextChangeAsNotPersistent === 'function'
		) {
			blockEditorDispatch.__unstableMarkNextChangeAsNotPersistent();
		}

		const patch = {};
		if ( hasBlockStyle ) {
			patch.blockStyle = undefined;
		}
		if ( hasCustomCss ) {
			patch.containerGlobalCustomCSSValue = undefined;
		}
		blockEditorDispatch.updateBlockAttributes( clientId, patch );
		stripped++;
	}
};

if ( typeof window !== 'undefined' ) {
	domReady( bootstrapBlockStylePersistence );
}
