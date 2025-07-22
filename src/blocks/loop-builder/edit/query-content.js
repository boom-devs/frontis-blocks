/**
 * WordPress dependencies
 */
import { useSelect, useDispatch } from '@wordpress/data';
import { useInstanceId } from '@wordpress/compose';
import { useEffect, useCallback , useState} from '@wordpress/element';
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
	store as blockEditorStore,
	useInnerBlocksProps,
	privateApis as blockEditorPrivateApis,
} from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import EnhancedPaginationControl from './inspector-controls/enhanced-pagination-control';
// import { unlock } from '../../lock-unlock';
import QueryInspectorControls from './inspector-controls';
import EnhancedPaginationModal from './enhanced-pagination-modal';
import { getQueryContextFromTemplate } from '../utils';
import QueryToolbar from './query-toolbar';

/**
 * Internal dependencies
 */
import Inspector from "../inspector";

// const { HTMLElementControl } = unlock( blockEditorPrivateApis );

const DEFAULTS_POSTS_PER_PAGE = 3;

const TEMPLATE =	[
	'frontis-blocks/loop-builder-wrapper',
	{},
	['frontis-blocks/container'],
];
export default function QueryContent( {
	attributes,
	setAttributes,
	clientId,
	context,
	name,
} ) {
	const {
		queryId,
		query,
		enhancedPagination,
		tagName: TagName = 'div',
		query: { inherit } = {},
		postType,
		postPerPage,
		postOffset,
		orderBy,
        sortOrder,
	} = attributes;

	const { __unstableMarkNextChangeAsNotPersistent } = useDispatch( blockEditorStore );
	const instanceId = useInstanceId( QueryContent );

	const blockProps = useBlockProps();

	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: TEMPLATE,
	} );

	console.log("innerBlocksProps innerBlocksProps")
	console.log(innerBlocksProps)
	const { postsPerPage } = useSelect( ( select ) => {
		const { getSettings } = select( blockEditorStore );
		const { getEntityRecord, getEntityRecordEdits, canUser } =
			select( coreStore );
		const settingPerPage = canUser( 'read', {
			kind: 'root',
			name: 'site',
		} )
			? +getEntityRecord( 'root', 'site' )?.posts_per_page
			: +getSettings().postsPerPage;

		// Gets changes made via the template area posts per page setting. These won't be saved
		// until the page is saved, but we should reflect this setting within the query loops
		// that inherit it.
		const editedSettingPerPage = +getEntityRecordEdits( 'root', 'site' )
			?.posts_per_page;

		return {
			postsPerPage:
				editedSettingPerPage ||
				settingPerPage ||
				DEFAULTS_POSTS_PER_PAGE,
		};
	}, [] );

	const updateQuery = useCallback(
		( newQuery ) =>
			setAttributes( ( prevAttributes ) => ( {
				query: { ...prevAttributes.query, ...newQuery },
			} ) ),
		[ setAttributes ]
	);
	useEffect( () => {
		const newQuery = {};
		// When we inherit from global query always need to set the `perPage`
		// based on the reading settings.
		if ( inherit && query.perPage !== postsPerPage ) {
			newQuery.perPage = postsPerPage;
		} else if ( ! query.perPage && postsPerPage ) {
			newQuery.perPage = postsPerPage;
		}

		if ( !! Object.keys( newQuery ).length ) {
			__unstableMarkNextChangeAsNotPersistent();
			updateQuery( newQuery );
		}
	}, [
		query.perPage,
		inherit,
		postsPerPage,
		__unstableMarkNextChangeAsNotPersistent,
		updateQuery,
	] );
	// We need this for multi-query block pagination.
	// Query parameters for each block are scoped to their ID.
	useEffect( () => {
		if ( ! Number.isFinite( queryId ) ) {
			__unstableMarkNextChangeAsNotPersistent();
			setAttributes( { queryId: instanceId } );
		}
	}, [
		queryId,
		instanceId,
		__unstableMarkNextChangeAsNotPersistent,
		setAttributes,
	] );

	useEffect(() => {
		setAttributes({
			query: {
				...query,
				perPage: postPerPage,
				order: sortOrder,
				orderBy: orderBy,
				postType: postType,
				offset: postOffset,
			}
		})

    }, [postType, postPerPage, postOffset, orderBy, sortOrder]);

	return (
		<>
		    <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
			<EnhancedPaginationModal
				attributes={ attributes }
				setAttributes={ setAttributes }
				clientId={ clientId }
			/>
			<TagName { ...innerBlocksProps } />
		</>
	);
}
