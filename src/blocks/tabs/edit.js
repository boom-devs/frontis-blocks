import { useEffect, useMemo } from '@wordpress/element';
import { InnerBlocks, RichText, useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';
import { createBlock } from '@wordpress/blocks';
import { select, dispatch, subscribe } from '@wordpress/data';
import Inspector from './inspector';
import './editor.scss';

const ALLOWED_BLOCKS = ['frontis-blocks/tabs-item'];

export default function Edit({ attributes, setAttributes, clientId }) {

	const {
		blockId,
		tabHeaders,
		tabActive,
		tabActiveFrontend,

	} = attributes;

	const beSelect = select( 'core/block-editor' );
	const beDispatch = dispatch( 'core/block-editor' );
	const getChildren = () => beSelect.getBlockOrder( clientId ) || [];

	const resetTabOrder = () => {
		const childIds = getChildren();
		childIds.forEach( ( childId, index ) => {
			beDispatch.updateBlockAttributes( childId, { id: index } );
		} );
	};

	const updateActiveTab = ( nextIndex ) => {
		setAttributes( { tabActive: nextIndex, tabActiveFrontend: nextIndex } );
		const childIds = getChildren();
		childIds.forEach( ( childId ) => {
			beDispatch.updateBlockAttributes( childId, { tabActive: nextIndex } );
		} );
		resetTabOrder();
	};
	const addTab = () => {
		const childBlock = createBlock( 'frontis-blocks/tabs-item' );
		beDispatch.insertBlock( childBlock, tabHeaders.length, clientId );
		setAttributes( { tabHeaders: [ ...tabHeaders, 'New Tab' ] } );
		resetTabOrder();
	};

	useEffect( () => {
		resetTabOrder();
		updateActiveTab( tabActive );
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );



	useEffect(() => {
		// ensure unique child ids as soon as children exist once
		const unSub = subscribe(() => {
		  const beSelect = select('core/block-editor');
		  const beDispatch = dispatch('core/block-editor');
		  const block = beSelect.getBlock(clientId);
	  
		  if (!block) return;
	  
		  const kids = block.innerBlocks || [];
		  if (!kids.length) return;
	  
		  // if any child missing id or mis-ordered, normalize then unsubscribe
		  let needsFix = false;
		  kids.forEach((child, i) => {
			const cid = child.clientId;
			const cur = child.attributes?.id;
			if (cur !== i) {
			  beDispatch.updateBlockAttributes(cid, { id: i, tabActive: attributes.tabActive ?? 0 });
			  needsFix = true;
			}
		  });
	  
		  if (needsFix) {
			// also mirror to parent dataset so editor state matches
			setAttributes({ tabActiveFrontend: attributes.tabActive ?? 0 });
		  }
		  // run only once after we’ve normalized
		  if (kids.length) unSub();
		});
	  
		return () => unSub && unSub();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);


	const blockProps = useBlockProps({
		className: `fb-tabs-wrapper ${blockId}`,
	});


	const getTabsTemplate = useMemo(() => [
		['frontis-blocks/tabs-item'],
		['frontis-blocks/tabs-item'],
		['frontis-blocks/tabs-item'],
	], []);

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: `uagb-tabs__body-wrap`,
			slot: 'container-start',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: getTabsTemplate,
			renderAppender: false,
			orientation: 'horizontal',
		}
	);

	return (
		<>
		<div {...blockProps} >
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>
			<div className="uagb-tabs__wrap">
				<ul className="uagb-tabs__panel" role="tablist">
					{ tabHeaders.map( ( title, i ) => (
						<li
							key={ i }
							className={ `uagb-tab ${ tabActive === i ? 'uagb-tabs__active' : '' }` }
							id={ `uagb-tabs__tab${ i }` }
							role="tab"
						>
							<button
								type="button"
								className="uagb-tabs-list"
								onClick={ () => updateActiveTab( i ) }
								aria-selected={ tabActive === i }
								aria-controls={ `uagb-tabs__panel${ i }` }
								data-tab={ i }
							>
								<RichText
									tagName="span"
									value={ title }
									onChange={ ( val ) => {
										const next = [ ...tabHeaders ];
										next[ i ] = val;
										setAttributes( { tabHeaders: next } );
									} }
									placeholder="Title…"
									allowedFormats={ [ 'core/bold', 'core/italic' ] }
								/>
							</button>
						</li>
					) ) }

					<li className="uagb-tab uagb-tabs__add-tab">
						<button type="button" onClick={ addTab }>+ Add Tab</button>
					</li>
				</ul>

                <div {...innerBlocksProps} />

			</div>
		</div>
		</>
	);
};