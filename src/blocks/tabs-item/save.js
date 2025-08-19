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
				<div className={`uagb-tabs__body-container uagb-inner-tab-${ id }`}
					id={ `uagb-tabs__panel${ id }` }
					role="tabpanel"
					aria-labelledby={ `uagb-tabs__tab${ id }` }
				>
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}

