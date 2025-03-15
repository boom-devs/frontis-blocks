import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks
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
		transitionSpeed,
		autoplay,
		autoplaySpeed,
		loop,
		allowTouchMove,
		pauseOnHover,
		stopOnLastSlide,
		reverseDirection,
		enableKeyboardControl,
		enableMouseWheel,
		effect,
		displayArrows,
		displayDots,
		paginationType
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
		{ label: __('Slider', 'frontis-blocks'), value: 'slider' }
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
		console.log('Updating display layout:', newValue);

		// Find and reset any existing post-template element
		if (newValue.type && newValue.type !== displayLayout.type) {
			const blockElement = document.querySelector(`[data-block="${clientId}"]`);
			if (blockElement) {
				const postTemplateElement = blockElement.querySelector('.wp-block-post-template');
				if (postTemplateElement) {
					// Remove Swiper-specific classes when changing from slider layout
					if (displayLayout.type === 'slider') {
						// Find parent .swiper container if exists
						const swiperContainer = postTemplateElement.closest('.swiper');
						if (swiperContainer) {
							// Move post template out of swiper container
							swiperContainer.parentNode.insertBefore(postTemplateElement, swiperContainer);
							// Remove swiper container
							swiperContainer.remove();
						}

						// Remove swiper classes from post template
						postTemplateElement.classList.remove('swiper-wrapper');

						// Remove swiper-slide class from all children
						const slides = postTemplateElement.children;
						Array.from(slides).forEach(slide => {
							slide.classList.remove('swiper-slide');
						});
					}

					// Update layout classes
					postTemplateElement.classList.remove('fb-grid-layout', 'fb-list-layout', 'fb-slider-layout');

					// Add appropriate class based on new layout type
					if (newValue.type === 'flex') {
						postTemplateElement.classList.add('fb-grid-layout');
					} else if (newValue.type === 'list') {
						postTemplateElement.classList.add('fb-list-layout');
					} else if (newValue.type === 'slider') {
						postTemplateElement.classList.add('fb-slider-layout');
					}
				}
			}
		}

		// Update attributes
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

										<PanelBody title={__("Layout Settings", "frontis-blocks")} initialOpen={false}>
											<SelectControl
												label={__("Layout Type", "frontis-blocks")}
												value={displayLayout.type || 'flex'}
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

										<PanelBody title={__("Slider Options", "frontis-blocks")} initialOpen>
											<ToggleControl
												label={__('Enable Loop', 'frontis-blocks')}
												checked={loop}
												onChange={(value) => setAttributes({ loop: value })}
											/>
											<ToggleControl
												label={__('Enable Allow TouchMove', 'frontis-blocks')}
												checked={allowTouchMove}
												onChange={(value) => setAttributes({ allowTouchMove: value })}
											/>
											<ToggleControl
												label={__("Pause on Hover", "frontis-blocks")}
												checked={pauseOnHover}
												onChange={(value) => setAttributes({ pauseOnHover: value })}
											/>
											<ToggleControl
												label={__("Stop on Last Slide", "frontis-blocks")}
												checked={stopOnLastSlide}
												onChange={(value) => {
													setAttributes({ stopOnLastSlide: value });
													if (value) {
														setAttributes({ loop: false });
													}
												}}
											/>
											<ToggleControl
												label={__("Reverse Direction", "frontis-blocks")}
												checked={reverseDirection}
												onChange={(value) => setAttributes({ reverseDirection: value })}
											/>
											<ToggleControl
												label={__("Enable Mouse Wheel", "frontis-blocks")}
												checked={enableMouseWheel}
												onChange={(value) => setAttributes({ enableMouseWheel: value })}
											/>
											<ToggleControl
												label={__('Enable Autoplay', 'frontis-blocks')}
												checked={autoplay}
												onChange={(value) => setAttributes({ autoplay: value })}
											/>
											{autoplay && (
												<RangeControl
													label={__('Autoplay Speed (ms)', 'frontis-blocks')}
													value={autoplaySpeed}
													onChange={(value) => setAttributes({ autoplaySpeed: value })}
													min={1000}
													max={10000}
													step={500}
													initialPosition={2000}
												/>
											)}
											<RangeControl
												label={__("Transition Speed (ms)", "frontis-blocks")}
												value={transitionSpeed}
												onChange={(value) => setAttributes({ transitionSpeed: value })}
												min={100}
												max={3000}
												step={100}
												initialPosition={500}
											/>
										</PanelBody>
									</>
								)}
								{tab.name === "styles" && (
									<>

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