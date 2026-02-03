import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

const useIsInsideLoopBuilder = (clientId, skip = false) => {
  return useSelect((select) => {
    // Skip expensive parent traversal if already applied
    if (skip) return false;
    
    const { getBlockParents, getBlock } = select(blockEditorStore);
    return getBlockParents(clientId).some((pid) => {
      const name = getBlock(pid)?.name;
      return (
        name === 'frontis-blocks/loop-builder' ||
        name === 'frontis-blocks/loop-builder-wrapper'
      );
    });
  }, [clientId, skip]);
};

export default useIsInsideLoopBuilder;