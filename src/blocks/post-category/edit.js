import { __ } from "@wordpress/i18n";
import { useEffect } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import Inspector from "./inspector";

import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockId,
		premadeStyle,
		taxonomyType,
		showCount,
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

	// useEffect(() => {
	// 	if (clientId && !blockId) {
	// 		setAttributes({ blockId: "fb-post-category-" + clientId.slice(0, 8) });
	// 	}
	// }, [clientId]);

	let defaultImageUrl = '';
	if (typeof FrontisBlocksData !== 'undefined') {
		defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/preset-bg.jpg';
	}

	const { useSelect } = wp.data;

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
					<>
					<li
						key={term.id}
						className="fb-taxonomy-item"
						data-parent-id={term.parent || 0}
					>
						<div className="fb-taxonomy-link-count">
							<a href={term.link} className="fb-taxonomy-link">
								{/* visual indicator for child terms */}
								{/* {term.parent !== 0 && (
									<span className="fb-child-indicator">(Child Category)</span>
								)} */}
								<span className="fb-taxonomy-name">{term.name}</span>
							</a>

							{premadeStyle === "style-1" && showCount ? (
								<span className="fb-taxonomy-count">({term.count})</span>
							) : (
								<span className="fb-taxonomy-count">{term.count}</span>
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
					
					</>
						
				))}
			</ul>
		);
	};

	// Grid layout with hierarchical display support
	const renderGridLayout = () => {
		if (!sortedTaxonomies) return null;

		// const imageSource = taxonomy.fb_taxonomy_image || defaultImageUrl;


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
											<span className="fb-taxonomy-count">{taxonomy.count}</span>
										)}
										<a href={taxonomy.link} className="fb-taxonomy-link">
											{/* visual indicator for child terms in grid */}
											{/* {taxonomy.parent !== 0 && (
												<span className="fb-child-indicator">(Child Category)</span>
											)} */}
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
										<span className="fb-taxonomy-count">{taxonomy.count}</span>
									)}
									<a href={taxonomy.link} className="fb-taxonomy-link">
										{/* visual indicator for child terms in grid */}
										{/* {taxonomy.parent !== 0 && (
											<span className="fb-child-indicator">(Child Category)</span>
										)} */}
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

	// List layout without hierarchy
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
								{/*  visual indicator for child terms */}
								{/* {taxonomy.parent !== 0 && (
									<span className="fb-child-indicator">(child category)</span>
								)} */}
								<span className="fb-taxonomy-name">{taxonomy.name}</span>
							</a>

							{premadeStyle === "style-1" && showCount ? (
								<span className="fb-taxonomy-count">({taxonomy.count})</span>
							) : (
								<span className="fb-taxonomy-count">{taxonomy.count}</span>
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
