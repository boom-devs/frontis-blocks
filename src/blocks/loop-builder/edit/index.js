/**
 * WordPress dependencies
 */
import { useSelect } from '@wordpress/data';
import { useEffect, useState, memo } from '@wordpress/element';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import QueryContent from './query-content';
import QueryPlaceholder from './query-placeholder';

const QueryEdit = ( props ) => {

	const loopBuilderAvailable = applyFilters('frontisblocks-loop-builder-available', false);

	if(!loopBuilderAvailable) {
		return (
			<p>Please upgrade to the latest version of the plugin to use this block.</p>
		)
	}
	
	const { clientId, attributes } = props;
	const [ isPatternSelectionModalOpen, setIsPatternSelectionModalOpen ] =
		useState( false );
	const hasInnerBlocks = useSelect(
		( select ) =>
			!! select( blockEditorStore ).getBlocks( clientId ).length,
		[ clientId ]
	);

	const Component = hasInnerBlocks ? QueryContent : QueryPlaceholder;
	return (
		<>
			<Component
				{ ...props }
				openPatternSelectionModal={ () =>
					setIsPatternSelectionModalOpen( true )
				}
			/>
		</>
	);
};

export default memo(QueryEdit);
