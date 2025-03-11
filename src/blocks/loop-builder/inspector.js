import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	SelectControl,
	RangeControl,
	ToggleControl,
	TextControl,
	BaseControl,
	CheckboxControl,
} from '@wordpress/components';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import {
	BORDER_STYLES,
	LAYOUT_ALIGNMENT,
	LAYOUT_TYPE,
	OVERFLOW_OP,
	PRESETS,
} from "./constants/constants";
import { useDeviceType } from "@Config/displayType";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		postType,
		postsPerPage,
		order,
		orderBy,
		includedCategories,
		includedTags,
		offset,
		showFeaturedImage,
		showTitle,
		showExcerpt,
		excerptLength,
		showReadMore,
		readMoreText,
		columns,
		gap
	} = attributes;

	// Get all registered post types
	const { postTypes } = useSelect((select) => {
		const { getPostTypes } = select(coreStore);
		return {
			postTypes: getPostTypes({ per_page: -1 }) || [],
		};
	}, []);

	// Get categories for the selected post type
	const { categories, tags } = useSelect((select) => {
		const { getEntityRecords } = select(coreStore);
		
		// Get categories
		const categoryTaxonomy = postType === 'post' ? 'category' : `${postType}_category`;
		const fetchedCategories = getEntityRecords('taxonomy', categoryTaxonomy, { per_page: -1 }) || [];
		
		// Get tags
		const tagTaxonomy = postType === 'post' ? 'post_tag' : `${postType}_tag`;
		const fetchedTags = getEntityRecords('taxonomy', tagTaxonomy, { per_page: -1 }) || [];
		
		return {
			categories: fetchedCategories,
			tags: fetchedTags,
		};
	}, [postType]);

	// Convert post types to options format
	const postTypeOptions = useMemo(() => {
		return (postTypes || [])
			.filter(type => type.viewable)
			.map(type => ({
				label: type.labels.singular_name,
				value: type.slug,
			}));
	}, [postTypes]);

	// Convert categories to options format
	const categoryOptions = useMemo(() => {
		return (categories || []).map(category => ({
			label: category.name,
			value: category.id,
		}));
	}, [categories]);

	// Convert tags to options format
	const tagOptions = useMemo(() => {
		return (tags || []).map(tag => ({
			label: tag.name,
			value: tag.id,
		}));
	}, [tags]);

	// Handle category selection changes
	const onCategoryChange = (categoryId, isChecked) => {
		const newCategories = isChecked 
			? [...(includedCategories || []), categoryId]
			: (includedCategories || []).filter(id => id !== categoryId);
		
		setAttributes({ includedCategories: newCategories });
	};

	// Handle tag selection changes
	const onTagChange = (tagId, isChecked) => {
		const newTags = isChecked 
			? [...(includedTags || []), tagId]
			: (includedTags || []).filter(id => id !== tagId);
		
		setAttributes({ includedTags: newTags });
	};

	return (
		<>
			<style>
			</style>
			<InspectorControls key="controls">
				<div className="fb-inspector-control">
					<TabPanel
						className="fb-parent-tab-panel"
						activeClass="active-tab"
						tabs={[
							{
								name: "general",
								title: "General",
								className: "fb-tab general",
							},
							{
								name: "styles",
								title: "Style",
								className: "fb-tab styles",
							},
							{
								name: "advanced",
								title: "Advanced",
								className: "fb-tab advance",
							},
						]}
					>
						{(tab) => (
							<div className={"fb-tab-controls " + tab.name}>
								{tab.name === 'general' && (
									<>
										<PanelBody title={__("Query Settings", "frontis-blocks")} initialOpen={true}>
											<SelectControl
												label={__("Post Type", "frontis-blocks")}
												value={postType || 'post'}
												options={postTypeOptions}
												onChange={(value) => setAttributes({ postType: value })}
											/>
											
											<RangeControl
												label={__("Posts Per Page", "frontis-blocks")}
												value={postsPerPage || 6}
												onChange={(value) => setAttributes({ postsPerPage: value })}
												min={1}
												max={50}
											/>
											
											<SelectControl
												label={__("Order", "frontis-blocks")}
												value={order || 'desc'}
												options={[
													{ label: __("Descending", "frontis-blocks"), value: 'desc' },
													{ label: __("Ascending", "frontis-blocks"), value: 'asc' },
												]}
												onChange={(value) => setAttributes({ order: value })}
											/>
											
											<SelectControl
												label={__("Order By", "frontis-blocks")}
												value={orderBy || 'date'}
												options={[
													{ label: __("Date", "frontis-blocks"), value: 'date' },
													{ label: __("Title", "frontis-blocks"), value: 'title' },
													{ label: __("Modified", "frontis-blocks"), value: 'modified' },
													{ label: __("Menu Order", "frontis-blocks"), value: 'menu_order' },
													{ label: __("Random", "frontis-blocks"), value: 'rand' },
												]}
												onChange={(value) => setAttributes({ orderBy: value })}
											/>
											
											<RangeControl
												label={__("Offset", "frontis-blocks")}
												value={offset || 0}
												onChange={(value) => setAttributes({ offset: value })}
												min={0}
												max={100}
												help={__("Skip this number of posts", "frontis-blocks")}
											/>
										</PanelBody>
										
										<PanelBody title={__("Taxonomies", "frontis-blocks")} initialOpen={false}>
											{categoryOptions.length > 0 && (
												<BaseControl
													label={__("Categories", "frontis-blocks")}
													className="fb-taxonomy-control"
												>
													{categoryOptions.map((category) => (
														<CheckboxControl
															key={category.value}
															label={category.label}
															checked={includedCategories?.includes(category.value)}
															onChange={(isChecked) => onCategoryChange(category.value, isChecked)}
														/>
													))}
												</BaseControl>
											)}
											
											{tagOptions.length > 0 && (
												<BaseControl
													label={__("Tags", "frontis-blocks")}
													className="fb-taxonomy-control"
												>
													{tagOptions.map((tag) => (
														<CheckboxControl
															key={tag.value}
															label={tag.label}
															checked={includedTags?.includes(tag.value)}
															onChange={(isChecked) => onTagChange(tag.value, isChecked)}
														/>
													))}
												</BaseControl>
											)}
										</PanelBody>
										
										<PanelBody title={__("Display Settings", "frontis-blocks")} initialOpen={false}>
											<ToggleControl
												label={__("Show Featured Image", "frontis-blocks")}
												checked={showFeaturedImage}
												onChange={(value) => setAttributes({ showFeaturedImage: value })}
											/>
											
											<ToggleControl
												label={__("Show Title", "frontis-blocks")}
												checked={showTitle}
												onChange={(value) => setAttributes({ showTitle: value })}
											/>
											
											<ToggleControl
												label={__("Show Excerpt", "frontis-blocks")}
												checked={showExcerpt}
												onChange={(value) => setAttributes({ showExcerpt: value })}
											/>
											
											{showExcerpt && (
												<RangeControl
													label={__("Excerpt Length", "frontis-blocks")}
													value={excerptLength || 25}
													onChange={(value) => setAttributes({ excerptLength: value })}
													min={10}
													max={100}
												/>
											)}
											
											<ToggleControl
												label={__("Show Read More", "frontis-blocks")}
												checked={showReadMore}
												onChange={(value) => setAttributes({ showReadMore: value })}
											/>
											
											{showReadMore && (
												<TextControl
													label={__("Read More Text", "frontis-blocks")}
													value={readMoreText || __("Read More", "frontis-blocks")}
													onChange={(value) => setAttributes({ readMoreText: value })}
												/>
											)}
										</PanelBody>
									</>
								)}
								{tab.name === "styles" && (
									<>
										<PanelBody title={__("Layout Settings", "frontis-blocks")} initialOpen={true}>
											<RangeControl
												label={__("Columns", "frontis-blocks")}
												value={columns || 3}
												onChange={(value) => setAttributes({ columns: value })}
												min={1}
												max={6}
											/>
											
											<RangeControl
												label={__("Gap", "frontis-blocks")}
												value={gap || 20}
												onChange={(value) => setAttributes({ gap: value })}
												min={0}
												max={50}
											/>
										</PanelBody>
									</>
								)}
								{tab.name === "advanced" && (
									<>
										<PanelBody title={__("Advanced Settings", "frontis-blocks")} initialOpen={true}>
											<TextControl
												label={__("Block ID", "frontis-blocks")}
												value={blockID}
												onChange={(value) => setAttributes({ blockID: value })}
												help={__("Add a unique identifier for this block", "frontis-blocks")}
											/>
										</PanelBody>
									</>
								)}
							</div>
						)}
					</TabPanel>
				</div>
			</InspectorControls>
		</>
	);
}