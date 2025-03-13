import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	TabPanel,
	TextControl,
	SelectControl,
	RangeControl,
	ToggleControl,
	Button,
	CheckboxControl,
} from '@wordpress/components';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import {
	BORDER_STYLES,
} from "./constants/constants";
import { useDeviceType } from "@Config/displayType";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
		blockID,
		query = {},
		displayLayout = { type: 'flex', columns: 3 },
	} = attributes;

	// Get available post types
	const { postTypes, taxonomies } = useSelect((select) => {
		const { getPostTypes, getTaxonomies } = select(coreStore);
		const filteredPostTypes = getPostTypes({ per_page: -1 }) || [];
		const filteredTaxonomies = getTaxonomies({ per_page: -1 }) || [];
		
		return {
			postTypes: filteredPostTypes.filter(
				(postType) => postType.viewable
			),
			taxonomies: filteredTaxonomies,
		};
	}, []);

	// Get post type options
	const postTypeOptions = useMemo(() => {
		return (postTypes || []).map((postType) => ({
			label: postType.labels.singular_name || postType.name,
			value: postType.slug,
		}));
	}, [postTypes]);

	// Get taxonomy options based on selected post type
	const taxonomyOptions = useMemo(() => {
		if (!taxonomies) return [];
		
		const options = [];
		taxonomies.forEach((taxonomy) => {
			const postTypes = taxonomy.types || [];
			if (postTypes.includes(query.postType || 'post')) {
				options.push({
					label: taxonomy.labels.singular_name || taxonomy.name,
					value: taxonomy.slug,
				});
			}
		});
		return options;
	}, [taxonomies, query.postType]);

	// Layout options
	const layoutOptions = [
		{ label: __('Grid', 'frontis-blocks'), value: 'flex' },
		{ label: __('List', 'frontis-blocks'), value: 'list' },
	];

	// Order by options
	const orderByOptions = [
		{ label: __('Date', 'frontis-blocks'), value: 'date' },
		{ label: __('Title', 'frontis-blocks'), value: 'title' },
		{ label: __('Menu Order', 'frontis-blocks'), value: 'menu_order' },
		{ label: __('Random', 'frontis-blocks'), value: 'rand' },
	];

	// Order options
	const orderOptions = [
		{ label: __('Descending', 'frontis-blocks'), value: 'desc' },
		{ label: __('Ascending', 'frontis-blocks'), value: 'asc' },
	];

	// Update query settings
	const updateQuery = (newValue) => {
		setAttributes({
			query: {
				...query,
				...newValue,
			},
		});
	};

	// Update display layout
	const updateDisplayLayout = (newValue) => {
		setAttributes({
			displayLayout: {
				...displayLayout,
				...newValue,
			},
		});
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
												value={query.postType || 'post'}
												options={postTypeOptions}
												onChange={(value) => updateQuery({ postType: value })}
											/>
											<RangeControl
												label={__("Posts Per Page", "frontis-blocks")}
												value={query.perPage || 6}
												onChange={(value) => updateQuery({ perPage: value })}
												min={1}
												max={50}
											/>
											<SelectControl
												label={__("Order By", "frontis-blocks")}
												value={query.orderBy || 'date'}
												options={orderByOptions}
												onChange={(value) => updateQuery({ orderBy: value })}
											/>
											<SelectControl
												label={__("Order", "frontis-blocks")}
												value={query.order || 'desc'}
												options={orderOptions}
												onChange={(value) => updateQuery({ order: value })}
											/>
											<ToggleControl
												label={__("Inherit Query From Template", "frontis-blocks")}
												checked={query.inherit || false}
												onChange={(value) => updateQuery({ inherit: value })}
											/>
										</PanelBody>
										
										{taxonomyOptions.length > 0 && (
											<PanelBody title={__("Taxonomy Filters", "frontis-blocks")} initialOpen={false}>
												{taxonomyOptions.map((taxonomy) => (
													<div key={taxonomy.value} className="fb-taxonomy-filter">
														<p>{taxonomy.label}</p>
														{/* You would need to implement term selection for each taxonomy */}
													</div>
												))}
											</PanelBody>
										)}
									</>
								)}
								{tab.name === "styles" && (
									<>
										<PanelBody title={__("Layout Settings", "frontis-blocks")} initialOpen={true}>
											<SelectControl
												label={__("Layout Type", "frontis-blocks")}
												value={displayLayout.type}
												options={layoutOptions}
												onChange={(value) => updateDisplayLayout({ type: value })}
											/>
											
											{displayLayout.type === 'flex' && (
												<RangeControl
													label={__("Columns", "frontis-blocks")}
													value={displayLayout.columns || 3}
													onChange={(value) => updateDisplayLayout({ columns: value })}
													min={1}
													max={6}
												/>
											)}
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
											<RangeControl
												label={__("Offset", "frontis-blocks")}
												value={query.offset || 0}
												onChange={(value) => updateQuery({ offset: value })}
												min={0}
												max={100}
												help={__("Skip this many posts before starting to display", "frontis-blocks")}
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