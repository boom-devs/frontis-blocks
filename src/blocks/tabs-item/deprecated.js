/**
 * BLOCK: Tabs - Deprecated Block
 */

import classnames from 'classnames';
import attributes from './attributes';

import { InnerBlocks } from '@wordpress/block-editor';

const deprecated = [
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;

			const { id, blockId } = attributes;

			return (
				<div className="fb-tabs-body-container">
					<div
						className={ classnames( className, `uagb-blocks__${ blockId }`, 'fb-tabs-body' ) }
						aria-labelledby={ `fb-tabs-tab${ id }` }
					>
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
	{
		attributes,
		save( props ) {
			const { attributes, className } = props;
			const { id, blockId } = attributes;

			return (
				<div className={ `fb-tabs-body-container fb-tabs-inner-tab fb-inner-tab-${ id }` }>
					<div
						className={ classnames( className, `uagb-blocks__${ blockId }`, 'fb-tabs-body' ) }
						aria-labelledby={ `fb-tabs-tab${ id }` }
					>
						<InnerBlocks.Content />
					</div>
				</div>
			);
		},
	},
];

export default deprecated;