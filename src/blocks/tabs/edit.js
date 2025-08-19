import { __ } from '@wordpress/i18n';
import { useState, useEffect, useMemo } from '@wordpress/element';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { createBlock, cloneBlock } from '@wordpress/blocks';
import { InnerBlocks, RichText, useBlockProps, useInnerBlocksProps, BlockControls } from '@wordpress/block-editor';
import { select, dispatch, subscribe } from '@wordpress/data';
import { arrayMove } from '@dnd-kit/sortable';
import Inspector from './inspector';
import './editor.scss';

const ALLOWED_BLOCKS = ['frontis-blocks/tabs-item'];

export default function Edit({ attributes, setAttributes, clientId }) {

	const {
		blockId,
		tabItems,
		tabActive,
		tabActiveFrontend,
	} = attributes;


	const beSelect = select( 'core/block-editor' );
	const beDispatch = dispatch( 'core/block-editor' );
	const getChildren = () => beSelect.getBlockOrder( clientId ) || [];

    const [tabsItemList, setTabsItemList] = useState(tabItems);    

    const updateTabItems = (updatedItems) => {
        setTabsItemList(updatedItems);
        setAttributes({ tabItems: updatedItems });
    };

	// Helper: insert a child block at a specific index with matching id
	const insertChildBlock = (index) => {
		const childBlock = createBlock('frontis-blocks/tabs-item', {
			id: index,
			tabActive: index,
		});
		// insert at the same index as the new tab item
		beDispatch.insertBlock(childBlock, index, clientId, false);
	};

	const handleAddItem = () => {
		const newIndex = tabsItemList.length;
	
		// use numeric ids so they always match the block order
		const newItem = {
			id: newIndex,
			title: `Tab ${newIndex + 1}`,
		};
	
		// 1) insert child block at the right position
		insertChildBlock(newIndex);
	
		// 2) update the items state/attributes
		updateTabItems([...tabsItemList, newItem]);
	
		// 3) make the new tab active immediately
		updateActiveTab(newIndex);
	};

	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (!active || !over || active.id === over.id) return;
	  
		// 1) index বের করো
		const oldIndex = tabsItemList.findIndex((item) => item.id === active.id);
		const newIndex = tabsItemList.findIndex((item) => item.id === over.id);
		if (oldIndex === -1 || newIndex === -1) return;
	  
		// 2) parent attributes/state reorder
		const updatedItems = arrayMove(tabsItemList, oldIndex, newIndex);
		updateTabItems(updatedItems);
	  
		// 3) child block সত্যিকারের move করো
		const childIds = getChildren(); // array of child clientIds
		const movingChildId = childIds[oldIndex];
	  
		// একই parent (root = clientId) এর মধ্যে oldIndex → newIndex এ শিফট
		beDispatch.moveBlocksToPosition([movingChildId], clientId, clientId, newIndex);
	  
		// 4) চাইলে আইডি-ইনডেক্স সিঙ্ক (ঐচ্ছিক, কিন্তু তোমার কোডে দরকার)
		// move এর পর নতুন অর্ডার নিয়ে প্রত্যেকটাকে তাদের index অনুযায়ী id সেট করো
		const newChildIds = getChildren();
		newChildIds.forEach((cid, idx) => {
		  beDispatch.updateBlockAttributes(cid, { id: idx });
		});
	};

    const handleChangeItem = (id, key, value) => {
        const updatedItems = tabsItemList.map(item => {
            if (item.id === id) {
                return { ...item, [key]: value };
            }
            return item;
        });
        updateTabItems(updatedItems);
    };

	const handleDeleteItem = (idOrIndex) => {
		const index = typeof idOrIndex === 'number'
		  ? idOrIndex
		  : tabsItemList.findIndex((it) => it.id === idOrIndex);
		if (index < 0) return;
	  
		const childIds = getChildren();
		const targetChildId = childIds[index];
		if (targetChildId) {
		  // 1) child remove করো কিন্তু previous select কোরো না
		  beDispatch.removeBlock(targetChildId, false);
		}
	  
		// 2) parent list reindex
		const nextItems = tabsItemList.filter((_, i) => i !== index);
		const reindexedItems = nextItems.map((it, i) => ({ ...it, id: i }));
		updateTabItems(reindexedItems);
	  
		// 3) child-দের id-ও reindex
		const childIdsAfter = getChildren();
		childIdsAfter.forEach((cid, i) => {
		  beDispatch.updateBlockAttributes(cid, { id: i });
		});
	  
		// 4) active tab ঠিক করো
		if (reindexedItems.length === 0) {
		  updateActiveTab(0);
		} else {
		  let nextActive = tabActive;
		  if (tabActive === index) nextActive = Math.min(index, reindexedItems.length - 1);
		  else if (tabActive > index) nextActive = tabActive - 1;
		  updateActiveTab(nextActive);
		}
	  
		// 5) ফোকাস/সিলেকশন parent-এই রাখো (Inspector parent দেখাবে)
		beDispatch.selectBlock(clientId);
		// এক ফ্রেম পরে আবার enforce করা (কখনো কখনো Gutenberg auto-select করে)
		requestAnimationFrame(() => beDispatch.selectBlock(clientId));
	};

	const handleDuplicateItem = (idOrIndex) => {
		// index বের করা (তুমি numeric id == index রাখছো)
		const index = typeof idOrIndex === 'number'
		  ? idOrIndex
		  : tabsItemList.findIndex((it) => it.id === idOrIndex);
		if (index < 0) return;
	  
		// 1) child block টা নাও
		const childIds = getChildren();              // clientId array
		const targetChildId = childIds[index];
		const targetBlock = beSelect.getBlock(targetChildId);
		if (!targetBlock) return;
	  
		// 2) deep-clone করো (id ক্লিয়ার করে দিচ্ছি যাতে পরে index দিয়ে সেট করা যায়)
		let cloned = cloneBlock(targetBlock);
		cloned = {
		  ...cloned,
		  attributes: {
			...cloned.attributes,
			id: undefined,
		  },
		};
	  
		// 3) ক্লোনটা পাশেই ইনসার্ট করো
		beDispatch.insertBlock(cloned, index + 1, clientId, false);
	  
		// 4) parent list-এও ঠিক একই টাইটেল সহ কপি ঢোকাও (কোনো "(Copy)" নয়)
		const newItems = [
		  ...tabsItemList.slice(0, index + 1),
		  { ...tabsItemList[index] },          // title 그대로
		  ...tabsItemList.slice(index + 1),
		];
	  
		// 5) একবারেই reindex (parent + child)
		const reindexedItems = newItems.map((it, idx) => ({ ...it, id: idx }));
		updateTabItems(reindexedItems);
	  
		const childIdsAfter = getChildren();
		childIdsAfter.forEach((cid, idx) => {
		  beDispatch.updateBlockAttributes(cid, { id: idx });
		});
	  
		// 6) নতুন কপিটাকে active করো
		updateActiveTab(index + 1);
	};	

    // Sync TabsItemList with attributes.tabItems
    useEffect(() => {
        setAttributes({ tabItems: tabsItemList });
    }, [tabsItemList, setAttributes]);



	const updateTabOrder = () => {
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
		updateTabOrder(); 
	};

	useEffect( () => {
		updateTabOrder();
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

	// Use tabItems 
	const getTabsTemplate = useMemo(() => tabItems.map(item => ['frontis-blocks/tabs-item']), [tabItems]);

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


	const renderTabsToolbarControls = () => (
		<BlockControls>
			<ToolbarGroup>
				<ToolbarButton
					icon="plus"
					label={__('Add New Tab', 'frontis-blocks')}
					onClick={() => handleAddItem(tabActive)}
				/>
				<ToolbarButton
					icon="admin-page"
					label={__('Duplicate Current Tab', 'frontis-blocks')}
					onClick={() => handleDuplicateItem(tabActive)}
				/>
			</ToolbarGroup>
		</BlockControls>
	);

	return (
		<>
		<div {...blockProps} >
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
				handleDragEnd={handleDragEnd}
                handleAddItem={handleAddItem}
                handleChangeItem={handleChangeItem}
                handleDeleteItem={handleDeleteItem}
				handleDuplicateItem={handleDuplicateItem}
                tabsItemList={tabsItemList}
			/>
			{renderTabsToolbarControls()}
			<div className="fb-tabs-wrap">
				<ul className="fb-tabs-panel" role="tablist">
					{ tabItems.map( ( { title }, i ) => (
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
										const next = [ ...tabItems ];
										next[ i ].title = val;
										setAttributes( { tabItems: next } );
									} }
									placeholder={__("Title…", "frontis-blocks")}
									allowedFormats={ [ 'core/bold', 'core/italic' ] }
								/>
							</button>
						</li>
					) ) }
				</ul>

                <div {...innerBlocksProps} />

			</div>
		</div>
		</>
	);
};

