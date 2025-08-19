/**
 * BLOCK: Tabs - Save (functional only)
 */

import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		blockId,
		tabHeaders,
		tabActiveFrontend,
	} = attributes;


	const blockProps = useBlockProps.save({
		className: `fb-tabs-wrapper ${blockId}`,
		'data-tab-active': tabActiveFrontend,
	});

	return (
		<>
			<div {...blockProps}>
				<div className="uagb-tabs__wrap">
					<ul className="uagb-tabs__panel" role="tablist">
						{ tabHeaders.map( ( header, index ) => (
							<li
								key={ index }
								className={ `uagb-tab ${ tabActiveFrontend === index ? 'uagb-tabs__active' : '' }` }
								role="presentation"
								id={ `uagb-tabs__tab${ index }` }
							>
								<a
									href={ `#uagb-tabs__panel${ index }` }
									className="uagb-tabs-list"
									data-tab={ index }
									role="tab"
									aria-selected={ tabActiveFrontend === index }
									aria-controls={ `uagb-tabs__panel${ index }` }
								>
									<RichText.Content tagName="span" value={ header } />
								</a>
							</li>
						)) }
					</ul>

					<div className="uagb-tabs__body-wrap">
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		</>
	);
}
