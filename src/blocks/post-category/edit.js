import { __ } from "@wordpress/i18n";
import { useEffect, useState, useMemo } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import Inspector from "./inspector";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		blockId,
		premadeStyle,
		taxonomyType,
		showCount,
		showAuthor,
        authorAvatarSize,
        authorAvatarSizeUnits,
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

	// Load all post types dynamically
	const allPostTypes = useSelect(
		(select) => select("core").getPostTypes({ per_page: -1 }),
		[]
	);

	// Fixed: Handle null/undefined case for filteredPostTypes
	const filteredPostTypes = useMemo(() => {
		if (!allPostTypes) return [];
		
		return allPostTypes.filter(
			(pt) =>
				pt?.visibility?.show_ui &&
				pt?.taxonomies?.length > 0 &&
				!["attachment", "wp_block", "nav_menu_item", "revision", "page"].includes(pt.slug)
		);
	}, [allPostTypes]);

	// State to store category creators
	const [categoryCreators, setCategoryCreators] = useState({});

	// Get ALL users for creator detection
	const allUsers = useSelect(
		(select) => {
			if (!showAuthor) return [];
			
			return select("core").getUsers({
				per_page: -1,
				who: "authors",
			}) || [];
		},
		[showAuthor]
	);

	// Filter users to get only admins and editors
	const adminEditorUsers = useMemo(() => {
		if (!allUsers || allUsers.length === 0) return [];
		
		return allUsers.filter(user => {
			const caps = user.capabilities || {};
			
			// Check for administrator or editor capabilities
			const isAdmin = caps.manage_options === true;
			const isEditor = caps.edit_others_posts === true && !caps.manage_options;
			
			return isAdmin || isEditor;
		});
	}, [allUsers]);

	// State to store post type labels for terms
	const [termPostTypeLabels, setTermPostTypeLabels] = useState({});

	// Get ALL terms (for parent-child relationship)
	const allTerms = useSelect(
		(select) => {
			if (!taxonomyType) return [];
			return select("core").getEntityRecords("taxonomy", taxonomyType, {
				per_page: -1,
				hide_empty: !showEmpty,
			}) || [];
		},
		[taxonomyType, showEmpty]
	);

	// Get taxonomies with filters for display
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

	// Improved hierarchical sorting function
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
				const parentPosition = sortedTerms.findIndex(
					(sortedTerm) => sortedTerm.id === term.parent,
				);

				if (parentPosition !== -1) {
					sortedTerms.splice(parentPosition + 1, 0, term);
				} else {
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

	// Get child categories for a parent
	const getChildCategories = (parentId) => {
		if (!allTerms || !parentId) return [];
		return allTerms.filter(term => term.parent === parentId);
	};

	// SIMPLIFIED: Get post type labels from taxonomy data
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

		sortedTaxonomies.forEach(term => {
			const termLabels = [];
			
			taxonomy.types.forEach(postTypeSlug => {
				const postType = allPostTypes.find(pt => pt.slug === postTypeSlug);
				if (postType?.viewable) {
					termLabels.push(postType.labels?.singular_name || postType.slug);
				}
			});
			
			labelsMap[term.id] = termLabels;
		});
		
		setTermPostTypeLabels(labelsMap);
	}, [sortedTaxonomies, taxonomyType, allPostTypes, allTaxonomies]);

	// Assign creators to categories
	useEffect(() => {
		if (!showAuthor || !allTerms || allTerms.length === 0 || !adminEditorUsers.length) {
			setCategoryCreators({});
			return;
		}

		const creators = {};
		
		allTerms.forEach((term, index) => {
			const termId = term.id;
			let matchedUser = null;
			
			// Try to match by name/slug
			const termName = term.name.toLowerCase();
			const termSlug = term.slug.toLowerCase();
			
			// First, try exact matches
			matchedUser = adminEditorUsers.find(user => {
				const userName = user.name?.toLowerCase();
				const userSlug = user.slug?.toLowerCase();
				const userLogin = user.login?.toLowerCase();
				
				if (userName && userName === termName) return true;
				if (userSlug && userSlug === termSlug) return true;
				if (userLogin && userLogin === termSlug) return true;
				return false;
			});
			
			// If no exact match, try partial matches
			if (!matchedUser) {
				matchedUser = adminEditorUsers.find(user => {
					const userName = user.name?.toLowerCase();
					if (!userName) return false;
					
					const nameWords = userName.split(' ');
					const termWords = termName.split(' ');
					
					for (const nameWord of nameWords) {
						if (nameWord.length > 2 && termName.includes(nameWord)) {
							return true;
						}
					}
					
					for (const termWord of termWords) {
						if (termWord.length > 2 && userName.includes(termWord)) {
							return true;
						}
					}
					
					return false;
				});
			}
			
			// If still no match, use round-robin assignment
			if (!matchedUser) {
				const userIndex = index % adminEditorUsers.length;
				matchedUser = adminEditorUsers[userIndex];
			}
			
			if (matchedUser) {
				const avatarSize = authorAvatarSize || 96;
				const avatarUrl = matchedUser.avatar_urls?.[avatarSize] || 
				                  matchedUser.avatar_urls?.[96] || 
				                  `https://secure.gravatar.com/avatar/?d=identicon&s=${avatarSize}`;
				
				creators[termId] = {
					id: matchedUser.id,
					name: matchedUser.name,
					avatar: avatarUrl,
				};
			}
		});
		
		setCategoryCreators(creators);
		
	}, [showAuthor, allTerms, adminEditorUsers, authorAvatarSize]);

	// Helper function to format post type label for display
	const formatPostTypeLabel = (postTypeLabels) => {
		if (!postTypeLabels || postTypeLabels.length === 0) return null;
		
		if (postTypeLabels.length === 1) {
			return postTypeLabels[0];
		}
		
		return __("Posts", "frontis-blocks");
	};

	// Function to format count with label HTML - FIXED: Show only current category's post count
	const formatCountWithLabelHTML = (count, termId) => {
		if (!showCount) return null;
		
		if (!showLabel) {
			return (
				<span className="fb-taxonomy-count">
					<span className="fb-taxonomy-count-number">{count}</span>
				</span>
			);
		}
		
		const postTypeLabels = termPostTypeLabels[termId] || [];
		
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
		
		if (Object.keys(termPostTypeLabels).length === 0 && sortedTaxonomies?.length > 0) {
			return __("Loading...", "frontis-blocks");
		}
		
		return formatPostTypeLabel(postTypeLabels);
	};

	// Function to render author with avatar (SIMPLIFIED - no link, no role)
	const renderAuthorWithAvatar = (termId, showName = true) => {
		if (!showAuthor) return null;
		
		const creator = categoryCreators[termId];
		if (!creator) {
			if (showName) {
				return (
					<div className="fb-taxonomy-author-wrapper">
						<div className="fb-taxonomy-author-avatar-placeholder"></div>
						<span className="fb-taxonomy-author-name">
							{__("Loading...", "frontis-blocks")}
						</span>
					</div>
				);
			}
			return null;
		}
		
		const avatarSize = authorAvatarSizeUnits === 'px' ? `${authorAvatarSize}px` : `${authorAvatarSize}%`;
		
		return (
			<div className="fb-taxonomy-author-wrapper">
				{creator.avatar && (
					<img 
						className="fb-taxonomy-author-avatar"
						src={creator.avatar}
						alt={creator.name}
						style={{
							width: avatarSize,
							height: avatarSize
						}}
						title={!showName ? creator.name : ""}
					/>
				)}
				{showName && (
					<span className="fb-taxonomy-author-name">
						{creator.name}
					</span>
				)}
			</div>
		);
	};

	// Function to render child categories avatars for parent category
	const renderChildCategoryAvatars = (parentId) => {
		if (!showAuthor || !parentId) return null;
		
		const childCategories = getChildCategories(parentId);
		if (childCategories.length === 0) return null;
		
		const avatarSize = authorAvatarSizeUnits === 'px' ? `${authorAvatarSize}px` : `${authorAvatarSize}%`;
		
		return (
			<div className="fb-child-categories-avatars">
				{childCategories.map(child => {
					const creator = categoryCreators[child.id];
					if (!creator || !creator.avatar) return null;
					
					return (
						<div key={child.id} className="fb-child-category-avatar-item">
							<img 
								className="fb-child-category-avatar"
								src={creator.avatar}
								alt={creator.name}
								style={{
									width: avatarSize,
									height: avatarSize
								}}
								title={child.name}
							/>
						</div>
					);
				})}
			</div>
		);
	};

	let defaultImageUrl = '';
	if (typeof FrontisBlocksData !== 'undefined') {
		defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/preset-bg.jpg';
	}

	// Improved hierarchical list builder with parent-child condition
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
				{children.map((term) => {
					// Check if this term has children
					const hasChildren = terms.some(t => t.parent === term.id);
					const isParentCategory = term.parent === 0;
					const isChildCategory = !isParentCategory;
					
					return (
						<React.Fragment key={term.id}>
							<li
								className="fb-taxonomy-item"
								data-parent-id={term.parent || 0}
								data-has-children={hasChildren}
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

								{/* Your Custom Markup: category-more-info wrapper */}
								<div className="fb-taxonomy-more-info">
									<div className="fb-taxonomy-author">
										{/* Child category: Show avatar only (no name) */}
										{isChildCategory && showAuthor && renderAuthorWithAvatar(term.id, false)}

										{/* Parent category: Show author with name + child avatars */}
										{isParentCategory && (
											<>
												{showAuthor && renderAuthorWithAvatar(term.id, true)}
												{renderChildCategoryAvatars(term.id)}
											</>
										)}
										
									</div>
									
									{/* Read More Button - শুধুমাত্র style-2 */}
									{ premadeStyle === "style-2" && readMoreSwitcher && (
										<div className="fb-taxonomy-read-more-wrapper">
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
										</div>
									)}
								</div>

								{separatorStyle !== "none" && (
									<div className="fb-tax-separator"></div>
								)}

							</li>

							{showChildCategories && buildTermHierarchy(terms, term.id, level + 1)}
						</React.Fragment>
					);
				})}
			</ul>
		);
	};

	// Grid layout - UPDATED
	const renderGridLayout = () => {
		if (!sortedTaxonomies) return null;

		return (
			<div
				className={`fb_post_category_container fb-taxonomy-grid ${postCategoryGlobalWraperClass ? postCategoryGlobalWraperClass : ""
					}`.trim()}
				id={postCategoryGlobalWraperID || undefined}
			>
				{sortedTaxonomies.map((taxonomy) => {
					// Check if this is a parent category
					const isParentCategory = taxonomy.parent === 0;
					
					return (
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

									{/* Your Custom Markup: category-more-info wrapper for Style 4 */}
									<div className="fb-taxonomy-more-info">
										<div className="fb-taxonomy-author">
											{/* Child category: Show avatar only (no name) */}
											{!isParentCategory && showAuthor && renderAuthorWithAvatar(taxonomy.id, false)}

											{/* Parent category: Show author with name + child avatars */}
											{isParentCategory && (
												<>
													{showAuthor && renderAuthorWithAvatar(taxonomy.id, true)}
													{renderChildCategoryAvatars(taxonomy.id)}
												</>
											)}
											
										</div>
										
										{readMoreSwitcher && (
											<div className="fb-taxonomy-read-more-wrapper">
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
											</div>
										)}
									</div>
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

								{/* Your Custom Markup: category-more-info wrapper for Style 3 */}
								<div className="fb-taxonomy-more-info">
									<div className="fb-taxonomy-author">
										{/* Child category: Show avatar only (no name) */}
										{!isParentCategory && showAuthor && renderAuthorWithAvatar(taxonomy.id, false)}

										{/* Parent category: Show author with name + child avatars */}
										{isParentCategory && (
											<>
												{showAuthor && renderAuthorWithAvatar(taxonomy.id, true)}
												{renderChildCategoryAvatars(taxonomy.id)}
											</>
										)}
										
									</div>
									
									{readMoreSwitcher && (
										<div className="fb-taxonomy-read-more-wrapper">
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
										</div>
									)}
								</div>
							</>
							)}
						</div>
					);
				})}
			</div>
		);
	};

	// List layout - UPDATED
	const renderListLayout = () => {
		if (!sortedTaxonomies) return null;

		return (
			<ul
				className={`fb-taxonomy-list fb_post_category_container ${postCategoryGlobalWraperClass}`.trim()}
				id={postCategoryGlobalWraperID || undefined}
			>
				{sortedTaxonomies.map((taxonomy) => {
					// Check if this is a parent category
					const isParentCategory = taxonomy.parent === 0;
					
					return (
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

							{/* Your Custom Markup: category-more-info wrapper for List Layout */}
							<div className="fb-taxonomy-more-info">
								<div className="fb-taxonomy-author">
									{/* Child category: Show avatar only (no name) */}
									{!isParentCategory && showAuthor && renderAuthorWithAvatar(taxonomy.id, false)}

									{/* Parent category: Show author with name + child avatars */}
									{isParentCategory && (
										<>
											{showAuthor && renderAuthorWithAvatar(taxonomy.id, true)}
											{renderChildCategoryAvatars(taxonomy.id)}
										</>
									)}
									
								</div>
								
								{ premadeStyle === "style-2" && readMoreSwitcher && (
									<div className="fb-taxonomy-read-more-wrapper">
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
									</div>
								)}
							</div>

							{separatorStyle !== "none" && (
								<div className="fb-tax-separator"></div>
							)}
						</li>
					);
				})}
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