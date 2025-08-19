import { __ } from '@wordpress/i18n';
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
		TabItems, // Use TabItems instead of tabHeaders
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
		beDispatch.insertBlock( childBlock, TabItems.length, clientId );
		setAttributes( { TabItems: [ ...TabItems, { id: `item-${TabItems.length + 1}`, title: 'New Tab' } ] } );
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

	// Use TabItems instead of tabHeaders
	const getTabsTemplate = useMemo(() => TabItems.map(item => ['frontis-blocks/tabs-item']), [TabItems]);

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: `fb-tabs-body-wrap`,
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
			<div className="fb-tabs-wrap">
				<ul className="fb-tabs-panel" role="tablist">
					{ TabItems.map( ( { title }, i ) => (
						<li
							key={ i }
							className={ `fb-tab ${ tabActive === i ? 'fb-tabs-active' : '' }` }
							id={ `fb-tabs-tab${ i }` }
							role="tab"
						>
							<button
								type="button"
								className="fb-tabs-list"
								onClick={ () => updateActiveTab( i ) }
								aria-selected={ tabActive === i }
								aria-controls={ `fb-tabs-panel${ i }` }
								data-tab={ i }
							>
								<RichText
									tagName="span"
									value={ title }
									onChange={ ( val ) => {
										const next = [ ...TabItems ];
										next[ i ].title = val;
										setAttributes( { TabItems: next } );
									} }
									placeholder={__("Title…", "frontis-blocks")}
									allowedFormats={ [ 'core/bold', 'core/italic' ] }
								/>
							</button>
						</li>
					) ) }

					<li className="fb-tab fb-tabs-add-tab">
						<button type="button" onClick={ addTab }>+ Add Tab</button>
					</li>
				</ul>

                <div {...innerBlocksProps} />

			</div>
		</div>
		</>
	);
};
