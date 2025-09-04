/**
 * Creates a single draggable block.
 */
import { useState, useRef } from '@wordpress/element';
import { Icon, Draggable, Popover } from '@wordpress/components';
import { dispatch, useDispatch, select } from '@wordpress/data';
import { __, sprintf } from '@wordpress/i18n';

const DraggableBlock = ( props ) => {
	const { block, id, create, blockInsertionPoint, getSelectedBlockClientId, getSelectedBlockAllowedBlocks, getBlockRootClientId,getDefaultAllowedQuickSidebarBlocks, updateAllowedBlocksQuickSidebar } = props;
	const [ hovering, setHovering ] = useState( false );
	const isDragging = useRef( false );
	const { createNotice } = useDispatch( 'core/notices' );
	const [uniqueId, setUniqueId] = useState( 0 );
	const removedNoticeID = `quick-action-sidebar/remove-notices-flow/removed-notice/${uniqueId}`;

	const handleMouseOver = () => setHovering( true );

	const handleMouseOut = () => setHovering( false );

	// Saving the allowed blocks to the database.
	const saveOptionToDatabase = ( allowedBlocks ) => {
		updateAllowedBlocksQuickSidebar( allowedBlocks );

		// Call the getApiData function with the specified parameters.
		const { nonce, ajaxUrl } = window.frontisBlocksAdmin;

		jQuery.ajax({
			url: ajaxUrl,
			type: 'POST',
			data: {
				action: 'fb_update_allowed_blocks',
				security: nonce,
				data: allowedBlocks,
			}
		});
	};

	// Removes the specified element from an array.
	const removeElementFromArray = ( arrayFromWhichElementNeedToRemove, elementToRemove ) => arrayFromWhichElementNeedToRemove.filter( ( element ) => element !== elementToRemove );

	const handleRemoveBlock = ( elementToRemove ) => {
		const updatedArray = removeElementFromArray( getDefaultAllowedQuickSidebarBlocks, elementToRemove.name );
		saveOptionToDatabase( updatedArray );
		// Increment uniqueId when removing a block
		setUniqueId( ( prevUniqueId ) => prevUniqueId + 1 );
		createNotice( 'success', sprintf( /* translators: abbreviation for units */ __( '%s Removed from Quick Action Bar.', 'frontis-blocks' ), elementToRemove.title ), {
			type: 'snackbar',
			id: removedNoticeID,
			isDismissible: true,
		} );
		// Set a timeout to remove the notice after a specific duration (e.g., 600 milliseconds)
		setTimeout( () => {
			// Remove the notice by ID
			dispatch( 'core/notices' ).removeNotice( removedNoticeID );
		}, 1000 );
	};

	const handleOnClick = ( e, selectedBlock ) => {
		let clientId = getBlockRootClientId || '';
		let insertionPoint = blockInsertionPoint;
		if( getSelectedBlockAllowedBlocks && getSelectedBlockAllowedBlocks.includes( selectedBlock ) ) {
			insertionPoint = select( 'core/block-editor' ).getSelectedBlock().innerBlocks.length ;
			clientId = getSelectedBlockClientId;
		}
		if ( e?.target?.classList?.contains( 'block-title-svg' ) ) {
			isDragging.current = false;
			return;
		}
		dispatch( 'core/block-editor' ).insertBlocks( create( selectedBlock.name ), insertionPoint, clientId );
	}

	const hoverPopover = (
		<Popover placement="right" key={id} className='frontis-blocks-ee-quick-access__sidebar--blocks--block--icon--name'>
			<div className='block-title'>
				<div onClick={() => { handleRemoveBlock( block ) }} className='frontis-blocks-ee-quick-access__sidebar--blocks--block--name'>
					<svg className='block-title-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
						<path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path>
					</svg>
				</div>
				{block.title}
			</div>
		</Popover>
	);

	const separatedArray = block.name.split( '/' );
	const slug = separatedArray[0];
	const blockName = separatedArray[1];

	return (
		<div id={`draggable-box__${slug}--${blockName}`}>
			<Draggable elementId={`draggable-box__${slug}--${blockName}`}
					   __experimentalTransferDataType="wp-blocks"
					   transferData={ {
						   type: 'inserter',
						   blocks: [ create( block.name ) ],
					   } }>
				{ ( { onDraggableStart, onDraggableEnd } ) => (
					<div
						className='frontis-blocks-ee-quick-access__sidebar--blocks--block'
						key={id}
						onClick = { ( e ) => {
							handleOnClick( e, block );
						} }
						draggable
						onDragStart={ ( event ) => {
							isDragging.current = true;
							if( onDraggableStart ) {
								onDraggableStart( event );
							}
						} }
						onDragEnd={ ( event ) => {
							isDragging.current = false;
							if ( onDraggableEnd ) {
								onDraggableEnd( event );
							}
						} }
						onMouseOver={ handleMouseOver }
						onMouseOut={ handleMouseOut }
						onFocus={ handleMouseOver }
						onBlur={ handleMouseOut }
					>
						<div className={`frontis-blocks-ee-quick-access__sidebar-icon__${slug} frontis-blocks-ee-quick-access__sidebar-icon__${slug}--${blockName} frontis-blocks-ee-quick-access__sidebar--blocks--block--icon`}>
							<Icon icon={ block.icon?.src ? block.icon.src : block.icon } />
						</div>
						{ hovering && hoverPopover }
					</div>
				) }
			</Draggable>
		</div>
	);
};

export default DraggableBlock;
// export default compose(
// 	withSelect( ( spectraQuickActionSelect ) => {
// 		const getDefaultAllowedQuickSidebarBlocks = spectraQuickActionSelect( spectraStore ).getDefaultAllowedQuickSidebarBlocks();
// 		return {
// 			getDefaultAllowedQuickSidebarBlocks
// 		};
// 	} ),
// 	withDispatch( ( spectraQuickActionDispatch ) => {
// 		return {
// 			updateDefaultAllowedQuickSidebarBlocks: ( value ) => spectraQuickActionDispatch( storeName ).updateDefaultAllowedQuickSidebarBlocks( value ),
// 		};
// 	} ),
// )( DraggableBlock );
