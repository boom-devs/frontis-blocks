import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import attributes from './attributes.js';
import pricingTableHeaderNameAttributes from './attributes/pricing-table-header-name.js';
import pricingTableHeaderContentAttributes from './attributes/pricing-table-header-content.js';
import pricingTablePricePrefixAttributes from './attributes/pricing-table-price-prefix.js';
import pricingTablePriceAmountAttributes from './attributes/pricing-table-price-amount.js';
import boxBorderAttributes from './attributes/box-border.js';

// Merge attributes
const combinedAttributes = {
	...attributes,
	...pricingTableHeaderNameAttributes,
	...pricingTableHeaderContentAttributes,
	...pricingTablePricePrefixAttributes,
	...pricingTablePriceAmountAttributes,
	...boxBorderAttributes,
};
registerBlockType( metadata.name, {
	attributes: combinedAttributes,
	edit: Edit,
	save,
} );
