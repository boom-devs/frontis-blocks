import { __ } from '@wordpress/i18n';
import { useState, useEffect, useMemo } from '@wordpress/element';
import { ToolbarGroup, ToolbarButton } from '@wordpress/components';
import { createBlock, cloneBlock } from '@wordpress/blocks';
import { InnerBlocks, RichText, useBlockProps, useInnerBlocksProps, BlockControls } from '@wordpress/block-editor';
import { select, dispatch, subscribe } from '@wordpress/data';
import { arrayMove } from '@dnd-kit/sortable';
import renderSVG from "@Components/icon-picker/components/icon-picker/controls/renderIcon";
import Inspector from './inspector';
import './editor.scss';

import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generateTabsStyle from './styling';

const ALLOWED_BLOCKS = ['frontis-blocks/tabs-item'];

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {

	const {
		blockID,
		blockStyle,
		tabItems,
		tabActive,
		tabActiveFrontend,
		tabTitleTag,
		tabDescriptionTag,
		tabIconPosition,
		showIcon,
		showTitle,
		showDescription,
		tabLayoutSwitcher,
		tabGlobalWraperID,
		tabGlobalWraperClass,
		tabSwitchMode,
		tabAutoSwitchInterval,
		tabAutoSwitchPauseOnHover,
	} = attributes;

	const [isHovered, setIsHovered] = useState(false);


  	// Handle block ID generation (handles duplication and initial ID)
	useBlockIdGenerator({
		clientId,
		blockID,
		blockPrefix: 'fb-tabs',
		isSelected,
		attributes,
		setAttributes,
	});

	/** Start Generate Block Style */
	useEffect(() => {
		if (blockID) {
			const css = generateTabsStyle(attributes);
			setAttributes({ blockStyle: css });
		}
	}, [attributes, blockID]);
	/** End Generate Block Style */

	const beSelect = select('core/block-editor');
	const beDispatch = dispatch('core/block-editor');
	const getChildren = () => beSelect.getBlockOrder(clientId) || [];

	const updateTabItems = (updatedItems) => {
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
		const newIndex = tabItems.length;

		// use numeric ids so they always match the block order
		const newItem = {
			id: newIndex,
			title: `Tab ${newIndex + 1}`,
			description: 'Tab description',
			tabIcon: 'house',
			tabIconAlign: 'icon',
			tabIconImageUrl: '',
			tabIconImageAlt: '',
			tabIconImageID: '',
		};

		// 1) insert child block at the right position
		insertChildBlock(newIndex);

		// 2) update the items state/attributes
		updateTabItems([...tabItems, newItem]);

		// 3) make the new tab active immediately
		updateActiveTab(newIndex);
	};

	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (!active || !over || active.id === over.id) return;

		// 1) get the old and new indexes
		const oldIndex = tabItems.findIndex((item) => item.id === active.id);
		const newIndex = tabItems.findIndex((item) => item.id === over.id);
		if (oldIndex === -1 || newIndex === -1) return;

		// 2) parent attributes/state reorder
		const updatedItems = arrayMove(tabItems, oldIndex, newIndex);
		updateTabItems(updatedItems);

		const childIds = getChildren(); // array of child clientIds
		const movingChildId = childIds[oldIndex];

		beDispatch.moveBlocksToPosition([movingChildId], clientId, clientId, newIndex);

		const newChildIds = getChildren();
		newChildIds.forEach((cid, idx) => {
			beDispatch.updateBlockAttributes(cid, { id: idx });
		});
	};

	const handleChangeItem = (id, key, value) => {
		const updatedItems = tabItems.map(item => {
			if (item.id === id) {
				if (key === 'tabIconImageID') {
					// Get the full image data from WordPress media library
					const image = wp.media.attachment(value).toJSON();
					return {
						...item,
						[key]: value,
						'tabIconImageUrl': image.url,
						'tabIconImageAlt': image.alt || ''
					};
				}
				return { ...item, [key]: value };
			}
			return item;
		});
		updateTabItems(updatedItems);
	};

	const handleDeleteItem = (idOrIndex) => {
		const index = typeof idOrIndex === 'number'
			? idOrIndex
			: tabItems.findIndex((it) => it.id === idOrIndex);
		if (index < 0) return;

		const childIds = getChildren();
		const targetChildId = childIds[index];
		if (targetChildId) {
			beDispatch.removeBlock(targetChildId, false);
		}

		// 2) parent list reindex
		const nextItems = tabItems.filter((_, i) => i !== index);
		const reindexedItems = nextItems.map((it, i) => ({ ...it, id: i }));
		updateTabItems(reindexedItems);

		// update child block ids
		const childIdsAfter = getChildren();
		childIdsAfter.forEach((cid, i) => {
			beDispatch.updateBlockAttributes(cid, { id: i });
		});

		// update active tab
		if (reindexedItems.length === 0) {
			updateActiveTab(0);
		} else {
			let nextActive = tabActive;
			if (tabActive === index) nextActive = Math.min(index, reindexedItems.length - 1);
			else if (tabActive > index) nextActive = tabActive - 1;
			updateActiveTab(nextActive);
		}

		beDispatch.selectBlock(clientId);
		requestAnimationFrame(() => beDispatch.selectBlock(clientId));
	};

	const handleDuplicateItem = (idOrIndex) => {
		const index = typeof idOrIndex === 'number'
			? idOrIndex
			: tabItems.findIndex((it) => it.id === idOrIndex);
		if (index < 0) return;

		const childIds = getChildren();
		const targetChildId = childIds[index];
		const targetBlock = beSelect.getBlock(targetChildId);
		if (!targetBlock) return;

		let cloned = cloneBlock(targetBlock);
		cloned = {
			...cloned,
			attributes: {
				...cloned.attributes,
				id: undefined,
			},
		};

		beDispatch.insertBlock(cloned, index + 1, clientId, false);

		const newItems = [
			...tabItems.slice(0, index + 1),
			{ ...tabItems[index] },
			...tabItems.slice(index + 1),
		];

		const reindexedItems = newItems.map((it, idx) => ({ ...it, id: idx }));
		updateTabItems(reindexedItems);

		const childIdsAfter = getChildren();
		childIdsAfter.forEach((cid, idx) => {
			beDispatch.updateBlockAttributes(cid, { id: idx });
		});

		updateActiveTab(index + 1);
	};





	const updateTabOrder = () => {
		const childIds = getChildren();
		childIds.forEach((childId, index) => {
			beDispatch.updateBlockAttributes(childId, { id: index });
		});
	};

	const updateActiveTab = (nextIndex) => {
		setAttributes({ tabActive: nextIndex });
		const childIds = getChildren();
		childIds.forEach((childId) => {
			beDispatch.updateBlockAttributes(childId, { tabActive: nextIndex });
		});
		updateTabOrder();
	};

	// Auto switch in the editor backend
	useEffect(() => {
		if (tabSwitchMode !== 'auto' || !tabItems || tabItems.length <= 1) return;

		// If hover pausing is enabled and mouse is over the block, do not transition
		if (tabAutoSwitchPauseOnHover && isHovered) return;

		let timer = null;

		const getIntervalValue = () => {
			const desktopVal = parseInt(tabAutoSwitchInterval?.Desktop || '3000', 10);
			return isNaN(desktopVal) ? 3000 : desktopVal;
		};

		const tick = () => {
			const nextIndex = (tabActive + 1) % tabItems.length;
			updateActiveTab(nextIndex);
		};

		const interval = getIntervalValue();
		timer = setTimeout(tick, interval);

		return () => {
			if (timer) clearTimeout(timer);
		};
	}, [tabSwitchMode, tabActive, tabAutoSwitchInterval, tabItems, isHovered, tabAutoSwitchPauseOnHover]);

	useEffect(() => {
		updateTabOrder();
		updateActiveTab(0);
	}, []);




	useEffect(() => {
		const unSub = subscribe(() => {
			const beSelect = select('core/block-editor');
			const beDispatch = dispatch('core/block-editor');
			const block = beSelect.getBlock(clientId);

			if (!block) return;

			const kids = block.innerBlocks || [];
			if (!kids.length) return;

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
				setAttributes({ tabActiveFrontend: 0 });
			}
			if (kids.length) unSub();
		});

		return () => unSub && unSub();
	}, []);

	const blockProps = useBlockProps({
		className: `fb-tabs-wrapper ${blockID}`,
	});

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
			<div 
				{...blockProps} 
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>

				{isSelected && (
					<Inspector
						attributes={attributes}
						setAttributes={setAttributes}
						handleDragEnd={handleDragEnd}
						handleAddItem={handleAddItem}
						handleChangeItem={handleChangeItem}
						handleDeleteItem={handleDeleteItem}
						handleDuplicateItem={handleDuplicateItem}
						tabsItemList={tabItems}
					/>
				)}

				{renderTabsToolbarControls()}

				<div className={`fb-tabs-wrap ${tabLayoutSwitcher} ${tabGlobalWraperClass}`} id={tabGlobalWraperID}>
					<ul className="fb-tabs-panel" role="tablist">
						{tabItems.map((item, index) => (
							<li
								key={item.id ?? index}
								className={`fb-tab ${tabActive === index ? 'fb-tabs-active' : ''} ${tabIconPosition}`}
								role="tab"
								aria-selected={tabActive === index}
								aria-controls={`fb-tabs-panel${index}`}
								tabIndex={tabActive === index ? 0 : -1}
								data-tab={index}
								onClick={() => updateActiveTab(index)}
								style={{ cursor: 'pointer' }}
								aria-label={__("Tab", "frontis-blocks")}
							>
								{(tabIconPosition == 'left' || tabIconPosition == 'top') && showIcon && (
									<>
										{item.tabIconAlign !== 'none' && (
											<div className="fb-tab-icon-image-box">
												{item.tabIconAlign === 'icon' || item.tabIconAlign === undefined ? (
													<span className="fb-tab-icon">
														{item.tabIcon ? renderSVG(item.tabIcon) : null}
													</span>
												) : item.tabIconAlign === 'image' && item.tabIconImageUrl ? (
													<div className="fb-tab-icon-image">
														<img
															src={item.tabIconImageUrl}
															alt={item.tabIconImageAlt ?? __("Tab Icon", "frontis-blocks")}
															aria-hidden="true"
														/>
													</div>
												) : null}
											</div>
										)}
									</>
								)}

								{showTitle && (
									<RichText
										tagName={tabTitleTag}
										value={item.title}
										onChange={(val) => {
											const next = [...tabItems];
											next[index] = { ...next[index], title: val };
											setAttributes({ tabItems: next });
										}}
										placeholder={__('title...', 'frontis-blocks')}
										className="fb-tab-title"
										allowedFormats={['core/bold', 'core/italic']}
									/>
								)}
								{showDescription && (
									<RichText
										tagName={tabDescriptionTag}
										value={item.description}
										onChange={(val) => {
											const next = [...tabItems];
											next[index] = { ...next[index], description: val };
											setAttributes({ tabItems: next });
										}}
										placeholder={__('description...', 'frontis-blocks')}
										className="fb-tab-description"
										allowedFormats={['core/bold', 'core/italic']}
									/>
								)}

								{(tabIconPosition == 'right' || tabIconPosition == 'bottom') && showIcon && (
									<>
										{item.tabIconAlign !== 'none' && (
											<div className="fb-tab-icon-image-box">
												{item.tabIconAlign === 'icon' || item.tabIconAlign === undefined ? (
													<span className="fb-tab-icon">
														{item.tabIcon ? renderSVG(item.tabIcon) : null}
													</span>
												) : item.tabIconAlign === 'image' && item.tabIconImageUrl ? (
													<div className="fb-tab-icon-image">
														<img
															src={item.tabIconImageUrl}
															alt={item.tabIconImageAlt ?? __("Tab Icon", "frontis-blocks")}
															aria-hidden="true"
														/>
													</div>
												) : null}
											</div>
										)}
									</>
								)}
							</li>
						))}
					</ul>

					<div {...innerBlocksProps} />
					<style>{blockStyle}</style>
				</div>
			</div>
		</>
	);
};

