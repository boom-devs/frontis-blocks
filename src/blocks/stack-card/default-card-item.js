import { createBlock } from '@wordpress/blocks';

const CARD_ITEM_BLOCK = 'frontis-blocks/stack-card-item';
const INFO_BOX_BLOCK = 'frontis-blocks/info-box';

export function createDefaultCardItemBlock(itemNumber = 1) {
	return createBlock(
		CARD_ITEM_BLOCK,
		{ itemNumber },
		[
			createBlock(INFO_BOX_BLOCK),
		]
	);
}
