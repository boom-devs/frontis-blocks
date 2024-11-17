import { blocksAttributes } from '@Config/getBlocksDefaultAttributes';
import { applyFilters } from '@wordpress/hooks';

const getAttributeFallback = ( currentValue, key, blockName ) => {
	const allBlocksAttributes = applyFilters( 'fb.blocksAttributes', blocksAttributes );
	return currentValue ? currentValue : allBlocksAttributes[ blockName ][ key ].default;
}

export const getFallbackNumber = ( currentValue, key, blockName ) => {
	const allBlocksAttributes = applyFilters( 'fb.blocksAttributes', blocksAttributes );
	return isNaN( currentValue ) ? allBlocksAttributes[ blockName ][ key ].default : currentValue;
}

export default getAttributeFallback;
