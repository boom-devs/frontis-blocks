import {select} from "@wordpress/data";

export const getParentBlock = (clientId) => {
	const block = select('core/block-editor').getBlock(clientId);

	if (!block) {
		return null; // Block not found
	}

	// Get the root client ID of the hierarchy
	return select('core/block-editor').getBlockHierarchyRootClientId(clientId);
}
