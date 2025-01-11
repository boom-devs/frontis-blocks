const blocks = deactivated_blocks.blocks;
if ( blocks.length ) {
	if ( typeof wp.blocks.unregisterBlockType !== 'undefined' ) {
		for ( const block_index in blocks ) {
			const blockName = blocks[block_index];

			if ( wp.blocks.getBlockType( blockName ) ) {
				wp.blocks.unregisterBlockType( blockName );
			}
		}
	}
}
