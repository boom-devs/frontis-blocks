/**
 * BLOCK: Tabs Child - Save
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { id, blockId } = attributes;


	const blockProps = useBlockProps.save( {
		className: `fb-tabs-item-wrapper ${blockId}`,
	} );

	return (

		<>
			<div {...blockProps}>
				<div className={`fb-tabs-body-container fb-inner-tab-${ id }`}
					id={ `fb-tabs-panel${ id }` }
					role="tabpanel"
					aria-labelledby={ `fb-tabs-tab${ id }` }
				>
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}

