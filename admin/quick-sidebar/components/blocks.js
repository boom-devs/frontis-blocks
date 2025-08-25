/**
 * Creates sidebar blocks.
 */
import { useSelect } from '@wordpress/data';
import { createBlock, getBlockTypes } from '@wordpress/blocks';
import DraggableBlock from './dragable-block';
import DragAndDropComponent from './move-up-down';

const Blocks = ( props ) => {
	const { enableRearrange, getDefaultAllowedQuickSidebarBlocks, updateAllowedBlocksQuickSidebar } = props;
	const blocks = getBlockTypes();
	const { blockInsertionPoint, getSelectedBlockClientId, getSelectedBlockAllowedBlocks, getBlockRootClientId } = useSelect( ( select ) => {
		const blockEditor = select( 'core/block-editor' );
		const { index } = blockEditor.getBlockInsertionPoint();
		const clientId = blockEditor.getSelectedBlockClientId();
		const allowedBlocks = blockEditor.getAllowedBlocks( clientId );
		const rootClientId = blockEditor.getBlockRootClientId( clientId );
		return {
			blockInsertionPoint: index,
			getSelectedBlockClientId: clientId,
			getSelectedBlockAllowedBlocks: allowedBlocks || [],
			getBlockRootClientId: rootClientId,
		};
	} );

	const fbUsedBlocks = blocks.filter( ( block ) => {
		return getDefaultAllowedQuickSidebarBlocks?.includes( block.name );
	} );

	const create = ( name ) => { return createBlock( name ); }

	// Loop through each object and add id
	fbUsedBlocks.forEach( ( item, index ) => {
		item.id = `${index + 1}`;
	} );

	const sortedY = getDefaultAllowedQuickSidebarBlocks
		.filter( item => item !== undefined && item !== null )
		.map( item => fbUsedBlocks.find( ( { name } ) => name === item ) )
		.filter( item => item !== undefined ); // Remove undefined objects

	return (
		<>
			{!enableRearrange && sortedY?.map( ( block, index ) => (
				<DraggableBlock
					key={index}
					id={index}
					{...{
						block,
						create,
						blockInsertionPoint,
						getSelectedBlockClientId,
						getSelectedBlockAllowedBlocks,
						getBlockRootClientId,
						getDefaultAllowedQuickSidebarBlocks,
						updateAllowedBlocksQuickSidebar
					}}
				/>
			) )}
			{ enableRearrange &&
				<DragAndDropComponent initialItems={sortedY} updateAllowedBlocksQuickSidebar={updateAllowedBlocksQuickSidebar} />
			}
		</>
	);

};

export default Blocks;
