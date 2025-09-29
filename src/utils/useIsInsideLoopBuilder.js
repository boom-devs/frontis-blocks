import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';

const useIsInsideLoopBuilder = (clientId) => {
  return useSelect((select) => {
    const { getBlockParents, getBlock } = select(blockEditorStore);
    return getBlockParents(clientId).some((pid) => {
      const name = getBlock(pid)?.name;
      return (
        name === 'frontis-blocks/loop-builder' ||
        name === 'frontis-blocks/loop-builder-wrapper'
      );
    });
  }, [clientId]);
};

export default useIsInsideLoopBuilder;