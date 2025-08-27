/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useDispatch, useSelect } from '@wordpress/data';
import {
	__experimentalToolsPanel as ToolsPanel,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import Inspector from "./inspector";

/**
 * Internal dependencies
 */
import { QueryPaginationArrowControls } from './query-pagination-arrow-controls';
import { QueryPaginationLabelControl } from './query-pagination-label-control';
import { useToolsPanelDropdownMenuProps } from '../utils/hooks';

const TEMPLATE = [
	[ 'frontis-blocks/query-pagination-previous' ],
	[ 'frontis-blocks/query-pagination-numbers' ],
	[ 'frontis-blocks/query-pagination-next' ],
];

export default function Edit({ attributes, setAttributes, clientId }) {
	
	const {
		blockId,
		blockStyle,
		paginationArrow,
        showLabel,
	} = attributes;


	const hasNextPreviousBlocks = useSelect(
		( select ) => {
			const { getBlocks } = select( blockEditorStore );
			const innerBlocks = getBlocks( clientId );
			/**
			 * Show the `paginationArrow` and `showLabel` controls only if a
			 * `QueryPaginationNext/Previous` block exists.
			 */
			return innerBlocks?.find( ( innerBlock ) => {
				return [
					'frontis-blocks/query-pagination-next',
					'frontis-blocks/query-pagination-previous',
				].includes( innerBlock.name );
			} );
		},
		[ clientId ]
	);
	const { __unstableMarkNextChangeAsNotPersistent } =
		useDispatch( blockEditorStore );
	const dropdownMenuProps = useToolsPanelDropdownMenuProps();

	const blockProps = useBlockProps( {
		className: `fb-query-pagination-wrapper ${blockId}`,
	} );

	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'fb-query-pagination' },
		{ template: TEMPLATE }
	);
	// Always show label text if paginationArrow is set to 'none'.
	useEffect( () => {
		if ( paginationArrow === 'none' && ! showLabel ) {
			__unstableMarkNextChangeAsNotPersistent();
			setAttributes( { showLabel: true } );
		}
	}, [
		paginationArrow,
		setAttributes,
		showLabel,
		__unstableMarkNextChangeAsNotPersistent,
	] );

	return (
		<>
			<Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
			<div { ...blockProps }>
				<nav { ...innerBlocksProps } />
			</div>
		</>
	);
}
