/**
 * Creates sidebar blocks.
 */
import { DndContext } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { restrictToVerticalAxis, restrictToParentElement } from '@dnd-kit/modifiers';
import { CSS } from '@dnd-kit/utilities';
import { Icon } from '@wordpress/components';
import { useState } from "@wordpress/element";

// Component to handle individual sortable items
export const SortableItem = ( { id, item } ) => {
	const { attributes, listeners, setNodeRef, transform, transition } = useSortable( { id } );

	const style = {
		transform: CSS.Transform.toString( transform ),
		transition,
	};

	return (
		<div
			ref={setNodeRef}
			style={style}
			{...attributes}
			{...listeners}
			className='frontis-blocks-ee-quick-access__sidebar--blocks--block'
		>
			<div className={`frontis-blocks-ee-quick-access__sidebar-icon__${item?.name?.split( '/' )[0]} frontis-blocks-ee-quick-access__sidebar-icon__${item?.name?.split( '/' )[0]}--${item?.name?.split( '/' )[1]} frontis-blocks-ee-quick-access__sidebar--blocks--block--icon`}>
				<Icon icon={item.icon.src ? item.icon.src : item.icon} />
			</div>
		</div>
	);
}

// Main drag and drop component
const DragAndDropComponent = ( { initialItems, updateAllowedBlocksQuickSidebar } ) => {
	const [items, setItems] = useState( initialItems );

	// Function to handle the start of a drag event
	const onDragStart = () => {
		const contentDiv = document.querySelector( '.interface-interface-skeleton__content' );
		if ( contentDiv ) {
			contentDiv.classList.add( 'frontis-blocks-ee-quick-access__sidebar--prevent-editor-interactions' );
		}
	};

	// Function to handle the end of a drag event
	const onDragEnd = ( { active, over } ) => {
		const contentDiv = document.querySelector( '.interface-interface-skeleton__content' );
		if ( contentDiv ) {
			contentDiv.classList.remove( 'frontis-blocks-ee-quick-access__sidebar--prevent-editor-interactions' );
		}
		if ( active.id !== over.id ) {
			const oldIndex = items.findIndex( item => item.id === active.id );
			const newIndex = items.findIndex( item => item.id === over.id );
			const reorderedItems = arrayMove( items, oldIndex, newIndex );
			const namesArray = reorderedItems.map( item => item.name );
			saveOptionToDatabase( namesArray );
			setItems( reorderedItems );
		}
	};

	// Function to save the reordered items to the database
	const saveOptionToDatabase = ( allowedBlocks ) => {
		updateAllowedBlocksQuickSidebar( allowedBlocks );
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

	return (
		<DndContext
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
			modifiers={[
				restrictToVerticalAxis,
				restrictToParentElement
			]}
		>

			<SortableContext
				items={items.map( item => item.id )}
				strategy={verticalListSortingStrategy} // Use vertical list sorting strategy
			>
				<div className='frontis-blocks-ee-quick-access__sidebar--blocks-sortable'>
					{items.map( ( item, index ) => (
						<SortableItem key={item.id} id={item.id} item={item} isLast={index === items.length - 1} />
					) )}
				</div>

			</SortableContext>
		</DndContext>
	);
}

// Connect the component with the Redux store to dispatch actions
export default DragAndDropComponent;
