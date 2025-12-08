import { __ } from "@wordpress/i18n";
import { useEffect, useState } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import Inspector from "./inspector";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockId,
		premadeStyle,
		taxonomyType,
		showCount,
		showLabel,
		showDescription,
		showEmpty,
		showChildCategories,
		selectionType,
		includeTaxonomies,
		excludeTaxonomies,
		orderBy,
		sortOrder,
		perPage,
		layoutType,
		readMoreSwitcher,
		readMoreText,
		readMoreIconAlign,
		readMoreIcon,
		readMoreIconImageUrl,
		readMoreIconImageAlt,
		postDescriptionExcerptLength,
		separatorStyle,
		postCategoryGlobalWraperID,
		postCategoryGlobalWraperClass,
		postCategoryDesktopSwitcher,
		postCategoryTabletSwitcher,
		postCategoryMobileSwitcher,
	} = attributes;

	const blockProps = useBlockProps({
		className: `fb-taxonomy-block fb-post-category-area ${blockId} fb-taxonomy-${premadeStyle} ${postCategoryDesktopSwitcher && "fb-desktop-responsive"
			} ${postCategoryTabletSwitcher && "fb-tablet-responsive"} ${postCategoryMobileSwitcher && "fb-mobile-responsive"
			}`,
	});

	// Get all post types and taxonomies
	const { useSelect } = wp.data;
	const allTaxonomies = useSelect((select) => 
		select("core").getTaxonomies({ per_page: -1 }), []);

	const selectedTaxonomy = allTaxonomies?.find(tax => tax.slug === taxonomyType);

	// Load all post types dynamically
	const allPostTypes = useSelect(
		(select) => select("core").getPostTypes({ per_page: -1 }),
		[]
	);

	// State to store post type labels for terms
	const [termPostTypeLabels, setTermPostTypeLabels] = useState({});
	const [isLoadingLabels, setIsLoadingLabels] = useState(false);

	const taxonomies = useSelect(
		(select) => {
			if (!taxonomyType) return null;
			let query = {
				per_page: perPage,
				hide_empty: !showEmpty,
				orderby: orderBy,
				order: sortOrder,
			};
			if (!showChildCategories) {
				query.parent = 0;
			}
			if (selectionType === "include" && includeTaxonomies.length > 0) {
				query.include = includeTaxonomies.join(",");
			} else if (selectionType === "exclude" && excludeTaxonomies.length > 0) {
				query.exclude = excludeTaxonomies.join(",");
			}
			return select("core").getEntityRecords("taxonomy", taxonomyType, query);
		},
		[
			taxonomyType,
			perPage,
			showEmpty,
			showChildCategories,
			selectionType,
			includeTaxonomies,
			excludeTaxonomies,
			orderBy,
			sortOrder,
			postDescriptionExcerptLength,
		],
	);

	// Improved hierarchical sorting function (same as frontend)
	const sortTaxonomyTermsHierarchically = (terms) => {
		if (!terms || !Array.isArray(terms)) return [];

		const sortedTerms = [];

		// First, add all parent terms (parent = 0)
		terms.forEach((term) => {
			if (term.parent === 0) {
				sortedTerms.push(term);
			}
		});

		// Then recursively add child terms immediately after their parent
		terms.forEach((term) => {
			if (term.parent !== 0) {
				// Find the position of the parent term
				const parentPosition = sortedTerms.findIndex(
					(sortedTerm) => sortedTerm.id === term.parent,
				);

				// Insert child term immediately after parent
				if (parentPosition !== -1) {
					sortedTerms.splice(parentPosition + 1, 0, term);
				} else {
					// If parent not found, add at the end
					sortedTerms.push(term);
				}
			}
		});

		return sortedTerms;
	};

	// Apply the same sorting as frontend
	const sortedTaxonomies =
		taxonomies && showChildCategories
			? sortTaxonomyTermsHierarchically(taxonomies)
			: taxonomies;

	// SIMPLIFIED: Get post type labels from taxonomy data (no API calls needed in editor)
	useEffect(() => {
		if (!sortedTaxonomies || !taxonomyType || !allPostTypes || !allTaxonomies) {
			return;
		}

		const labelsMap = {};
		const taxonomy = allTaxonomies.find(tax => tax.slug === taxonomyType);
		
		if (!taxonomy?.types) {
			setTermPostTypeLabels({});
			return;
		}

		// Get post types that this taxonomy belongs to
		sortedTaxonomies.forEach(term => {
			const termLabels = [];
			
			taxonomy.types.forEach(postTypeSlug => {
				const postType = allPostTypes.find(pt => pt.slug === postTypeSlug);
				if (postType?.viewable) {
					// In editor, show all post types that the taxonomy belongs to
					// The actual filtering happens on frontend
					termLabels.push(postType.labels?.singular_name || postType.slug);
				}
			});
			
			labelsMap[term.id] = termLabels;
		});
		
		setTermPostTypeLabels(labelsMap);
	}, [sortedTaxonomies, taxonomyType, allPostTypes, allTaxonomies]);

	// Helper function to format post type label for display
	const formatPostTypeLabel = (postTypeLabels) => {
		if (!postTypeLabels || postTypeLabels.length === 0) return null;
		
		// If only one post type, show singular
		if (postTypeLabels.length === 1) {
			return postTypeLabels[0];
		}
		
		// If multiple post types, show combined label
		return __("Posts", "frontis-blocks");
	};

	// Function to format count with label HTML
	const formatCountWithLabelHTML = (count, termId) => {
		if (!showCount) return null;
		
		if (!showLabel) {
			return (
				<span className="fb-taxonomy-count">
					<span className="fb-taxonomy-count-number">{count}</span>
				</span>
			);
		}
		
		// Get post type labels for this term
		const postTypeLabels = termPostTypeLabels[termId] || [];
		
		// Show loading indicator while labels are being fetched
		if (Object.keys(termPostTypeLabels).length === 0 && sortedTaxonomies?.length > 0) {
			return (
				<span className="fb-taxonomy-count">
					<span className="fb-taxonomy-count-number">{count}</span>
					<span className="fb-taxonomy-count-label"> {__("Loading...", "frontis-blocks")}</span>
				</span>
			);
		}
		
		if (postTypeLabels.length === 0) {
			return (
				<span className="fb-taxonomy-count">
					<span className="fb-taxonomy-count-number">{count}</span>
				</span>
			);
		}
		
		const label = formatPostTypeLabel(postTypeLabels);
		
		return (
			<span className="fb-taxonomy-count">
				<span className="fb-taxonomy-count-number">{count}</span>
				{label && <span className="fb-taxonomy-count-label"> {label}</span>}
			</span>
		);
	};

	// Function to get post type label for style-1 format
	const getPostTypeLabelForStyle1 = (termId) => {
		const postTypeLabels = termPostTypeLabels[termId] || [];
		
		// Show loading indicator while labels are being fetched
		if (Object.keys(termPostTypeLabels).length === 0 && sortedTaxonomies?.length > 0) {
			return __("Loading...", "frontis-blocks");
		}
		
		return formatPostTypeLabel(postTypeLabels);
	};

	let defaultImageUrl = '';
	if (typeof FrontisBlocksData !== 'undefined') {
		defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/preset-bg.jpg';
	}

	// Improved hierarchical list builder with visual indicators
	const buildTermHierarchy = (terms, parentId = 0, level = 0) => {
		const children = terms.filter((term) => term.parent === parentId);
		if (!children.length) return null;

		const ulClass =
			parentId === 0
				? `fb-taxonomy-list fb_post_category_container ${postCategoryGlobalWraperClass}`.trim()
				: "fb-taxonomy-list fb_taxonomy_sublist";

		return (
			<ul
				className={ulClass}
				id={parentId === 0 ? postCategoryGlobalWraperID : undefined}
			>
				{children.map((term) => (
					<React.Fragment key={term.id}>
					<li
						className="fb-taxonomy-item"
						data-parent-id={term.parent || 0}
					>
						<div className="fb-taxonomy-link-count">
							<a href={term.link} className="fb-taxonomy-link">
								<span className="fb-taxonomy-name">{term.name}</span>
							</a>

							{showCount && (
								<>
									{premadeStyle === "style-1" ? (
										<span className="fb-taxonomy-count">
											(<span className="fb-taxonomy-count-number">{term.count}</span>
											{showLabel && getPostTypeLabelForStyle1(term.id) && (
												<span className="fb-taxonomy-count-label"> 
													{getPostTypeLabelForStyle1(term.id)}
												</span>
											)})
										</span>
									) : (
										formatCountWithLabelHTML(term.count, term.id)
									)}
								</>
							)}
		
						</div>

						{showDescription && term.description && (
							<p className="fb-taxonomy-description">
								{trimWords(
									term.description,
									postDescriptionExcerptLength || 10,
								)}
							</p>
						)}

						{ premadeStyle === "style-2" && readMoreSwitcher && (
								<a
									href={term.link}
									className="fb-taxonomy-read-more-button"
								>
									{readMoreIconAlign !== "icon-only" && (
										<span className="fb-taxonomy-read-more-text">
											{readMoreText}
										</span>
									)}

									{readMoreIconAlign === "icon-text" && (
										<div className="fb-taxonomy-read-more-icon-wrapper">
											<div className="fb-taxonomy-read-more-icon">
												{renderSVG(readMoreIcon)}
											</div>
										</div>
									)}

									{readMoreIconAlign === "image" && readMoreIconImageUrl && (
										<div className="fb-taxonomy-read-more-icon-wrapper">
											<div className="fb-taxonomy-read-more-icon-image">
												<img
													src={readMoreIconImageUrl}
													alt={readMoreIconImageAlt}
												/>
											</div>
										</div>
									)}

									{readMoreIconAlign === "icon-only" && (
										<div className="fb-taxonomy-read-more-icon-wrapper">
											<div className="fb-taxonomy-read-more-icon">
												{renderSVG(readMoreIcon)}
											</div>
										</div>
									)}
								</a>
					)}

						{separatorStyle !== "none" && (
							<div className="fb-tax-separator"></div>
						)}

					</li>

					{showChildCategories &&	buildTermHierarchy(terms, term.id, level + 1)}
					</React.Fragment>
				))}
			</ul>
		);
	};

	// Grid layout with hierarchical display support - UPDATED
	const renderGridLayout = () => {
		if (!sortedTaxonomies) return null;

		return (
			<div
				className={`fb_post_category_container fb-taxonomy-grid ${postCategoryGlobalWraperClass ? postCategoryGlobalWraperClass : ""
					}`.trim()}
				id={postCategoryGlobalWraperID || undefined}
			>
				{sortedTaxonomies.map((taxonomy) => (
					<div key={taxonomy.id} className="fb-taxonomy-item">
						{premadeStyle === "style-4" ? (
							<>
							<div className="fb-taxonomy-image-container">
									<div className="fb-taxonomy-image">
										<img src={taxonomy.fb_taxonomy_image || defaultImageUrl} alt={taxonomy.name} />
									</div>
							</div>

							<div className="fb-taxonomy-card-content">
								<div className="fb-taxonomy-meta">

									<div className="fb-taxonomy-link-count">
										{showCount && (
											formatCountWithLabelHTML(taxonomy.count, taxonomy.id)
										)}
										<a href={taxonomy.link} className="fb-taxonomy-link">
											<h4 className="fb-taxonomy-name">{taxonomy.name}</h4>
										</a>
									</div>

									{showDescription && taxonomy.description && (
										<p className="fb-taxonomy-description">
											{trimWords(
												taxonomy.description,
												postDescriptionExcerptLength || 10,
											)}
										</p>
									)}

								</div>

								{readMoreSwitcher && (
											<a
												href={taxonomy.link}
												className="fb-taxonomy-read-more-button"
											>
												{readMoreIconAlign !== "icon-only" && (
													<span className="fb-taxonomy-read-more-text">
														{readMoreText}
													</span>
												)}

												{readMoreIconAlign === "icon-text" && (
													<div className="fb-taxonomy-read-more-icon-wrapper">
														<div className="fb-taxonomy-read-more-icon">
															{renderSVG(readMoreIcon)}
														</div>
													</div>
												)}

												{readMoreIconAlign === "image" && readMoreIconImageUrl && (
													<div className="fb-taxonomy-read-more-icon-wrapper">
														<div className="fb-taxonomy-read-more-icon-image">
															<img
																src={readMoreIconImageUrl}
																alt={readMoreIconImageAlt}
															/>
														</div>
													</div>
												)}

												{readMoreIconAlign === "icon-only" && (
													<div className="fb-taxonomy-read-more-icon-wrapper">
														<div className="fb-taxonomy-read-more-icon">
															{renderSVG(readMoreIcon)}
														</div>
													</div>
												)}
											</a>
								)}
							</div>
							</>
						) : (
						
						<>
							{premadeStyle === "style-3" && taxonomy.fb_taxonomy_image && (
								<div className="fb-taxonomy-image">
									<img src={taxonomy.fb_taxonomy_image} alt={taxonomy.name} />
								</div>
							)}

							<div className="fb-taxonomy-meta">

								<div className="fb-taxonomy-link-count">
									{showCount && (
										formatCountWithLabelHTML(taxonomy.count, taxonomy.id)
									)}
									<a href={taxonomy.link} className="fb-taxonomy-link">
										<h4 className="fb-taxonomy-name">{taxonomy.name}</h4>
									</a>
								</div>

								{showDescription && taxonomy.description && (
									<p className="fb-taxonomy-description">
										{trimWords(
											taxonomy.description,
											postDescriptionExcerptLength || 10,
										)}
									</p>
								)}

							</div>

							{readMoreSwitcher && (
										<a
											href={taxonomy.link}
											className="fb-taxonomy-read-more-button"
										>
											{readMoreIconAlign !== "icon-only" && (
												<span className="fb-taxonomy-read-more-text">
													{readMoreText}
												</span>
											)}

											{readMoreIconAlign === "icon-text" && (
												<div className="fb-taxonomy-read-more-icon-wrapper">
													<div className="fb-taxonomy-read-more-icon">
														{renderSVG(readMoreIcon)}
													</div>
												</div>
											)}

											{readMoreIconAlign === "image" && readMoreIconImageUrl && (
												<div className="fb-taxonomy-read-more-icon-wrapper">
													<div className="fb-taxonomy-read-more-icon-image">
														<img
															src={readMoreIconImageUrl}
															alt={readMoreIconImageAlt}
														/>
													</div>
												</div>
											)}

											{readMoreIconAlign === "icon-only" && (
												<div className="fb-taxonomy-read-more-icon-wrapper">
													<div className="fb-taxonomy-read-more-icon">
														{renderSVG(readMoreIcon)}
													</div>
												</div>
											)}
										</a>
							)}
						</>
						)}
					</div>
				))}
			</div>
		);
	};

	// List layout without hierarchy - UPDATED
	const renderListLayout = () => {
		if (!sortedTaxonomies) return null;

		return (
			<ul
				className={`fb-taxonomy-list fb_post_category_container ${postCategoryGlobalWraperClass}`.trim()}
				id={postCategoryGlobalWraperID || undefined}
			>
				{sortedTaxonomies.map((taxonomy) => (
					<li
						key={taxonomy.id}
						className="fb-taxonomy-item"
						data-parent-id={taxonomy.parent || 0}
					>
						<div className="fb-taxonomy-link-count">
							<a href={taxonomy.link} className="fb-taxonomy-link">
								<span className="fb-taxonomy-name">{taxonomy.name}</span>
							</a>

							{showCount && (
								<>
									{premadeStyle === "style-1" ? (
										<span className="fb-taxonomy-count">
											(<span className="fb-taxonomy-count-number">{taxonomy.count}</span>
											{showLabel && getPostTypeLabelForStyle1(taxonomy.id) && (
												<span className="fb-taxonomy-count-label">
													{getPostTypeLabelForStyle1(taxonomy.id)}
												</span>
											)})
										</span>
									) : (
										formatCountWithLabelHTML(taxonomy.count, taxonomy.id)
									)}
								</>
							)}
						</div>

						{showDescription && taxonomy.description && (
							<p className="fb-taxonomy-description">
								{trimWords(
									taxonomy.description,
									postDescriptionExcerptLength || 10,
								)}
							</p>
						)}

								{ premadeStyle === "style-2" && readMoreSwitcher && (
											<a
												href={taxonomy.link}
												className="fb-taxonomy-read-more-button"
											>
												{readMoreIconAlign !== "icon-only" && (
													<span className="fb-taxonomy-read-more-text">
														{readMoreText}
													</span>
												)}

												{readMoreIconAlign === "icon-text" && (
													<div className="fb-taxonomy-read-more-icon-wrapper">
														<div className="fb-taxonomy-read-more-icon">
															{renderSVG(readMoreIcon)}
														</div>
													</div>
												)}

												{readMoreIconAlign === "image" && readMoreIconImageUrl && (
													<div className="fb-taxonomy-read-more-icon-wrapper">
														<div className="fb-taxonomy-read-more-icon-image">
															<img
																src={readMoreIconImageUrl}
																alt={readMoreIconImageAlt}
															/>
														</div>
													</div>
												)}

												{readMoreIconAlign === "icon-only" && (
													<div className="fb-taxonomy-read-more-icon-wrapper">
														<div className="fb-taxonomy-read-more-icon">
															{renderSVG(readMoreIcon)}
														</div>
													</div>
												)}
											</a>
								)}

						{separatorStyle !== "none" && (
							<div className="fb-tax-separator"></div>
						)}
					</li>
				))}
			</ul>
		);
	};

	return (
		<>
			<Inspector
				attributes={attributes}
				setAttributes={setAttributes}
				clientId={clientId}
			/>

			<div {...blockProps}>
				{!taxonomyType ? (
					<p className="fb-no-taxonomies">
						{__("Taxonomy not available", "frontis-blocks")}
					</p>
				) : sortedTaxonomies === null ? (
					<p className="fb-loading-indicator">
						{__("Loading ...", "frontis-blocks")}
					</p>
				) : sortedTaxonomies.length === 0 ? (
					<p className="fb-no-taxonomies">
						{__("No terms found with current filters.", "frontis-blocks")}
					</p>
				) : layoutType === "grid" ? (
					// Use the new grid layout renderer
					renderGridLayout()
				) : showChildCategories ? (
					// Hierarchical list layout
					buildTermHierarchy(sortedTaxonomies)
				) : (
					// Flat list layout
					renderListLayout()
				)}
			</div>
		</>
	);
}

// Utility function
function trimWords(text, wordLimit) {
	if (!text) return "";
	const words = text.split(" ");
	return words.length > wordLimit
		? words.slice(0, wordLimit).join(" ") + "..."
		: text;
}