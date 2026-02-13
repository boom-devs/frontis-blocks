import { __ } from "@wordpress/i18n";
import { useEffect, useState, useMemo } from "@wordpress/element";
import { useBlockProps } from "@wordpress/block-editor";
import renderSVG from "../../components/icon-picker/components/icon-picker/controls/renderIcon";
import apiFetch from "@wordpress/api-fetch";
import loadGoogleFont from "@Utils/loadGoogleFont";

import Inspector from "./inspector";
import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generatePostCategoryStyle from "./styling";

const loadedFonts = new Set();

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
    const {
        blockID,
        blockStyle,
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

        postTitleFontFamily,
        postDescriptionFontFamily,
        postCountFontFamily,
        buttonFontFamily,
    } = attributes;

    // Handle block ID generation (handles duplication and initial ID)
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-post-category',
        isSelected,
        attributes,
        setAttributes,
    });

    /** Start Load Google Font */
    useEffect(() => {
        if (postTitleFontFamily && !loadedFonts.has(postTitleFontFamily)) {
            loadGoogleFont(postTitleFontFamily);
            loadedFonts.add(postTitleFontFamily);
        }
    }, [postTitleFontFamily]);

    useEffect(() => {
        if (postDescriptionFontFamily && !loadedFonts.has(postDescriptionFontFamily)) {
            loadGoogleFont(postDescriptionFontFamily);
            loadedFonts.add(postDescriptionFontFamily);
        }
    }, [postDescriptionFontFamily]);

    useEffect(() => {
        if (postCountFontFamily && !loadedFonts.has(postCountFontFamily)) {
            loadGoogleFont(postCountFontFamily);
            loadedFonts.add(postCountFontFamily);
        }
    }, [postCountFontFamily]);

    useEffect(() => {
        if (buttonFontFamily && !loadedFonts.has(buttonFontFamily)) {
            loadGoogleFont(buttonFontFamily);
            loadedFonts.add(buttonFontFamily);
        }
    }, [buttonFontFamily]);
    /** End Load Google Font */

    /** Start Generate Block Style */
    useEffect(() => {
        if (blockID) {
            const css = generatePostCategoryStyle(attributes);
            setAttributes({ blockStyle: css });
        }
    }, [attributes, blockID]);
    /** End Generate Block Style */

    const blockProps = useBlockProps({
        className: `fb-taxonomy-block fb-post-category-area ${blockID} fb-taxonomy-${premadeStyle} ${postCategoryDesktopSwitcher && "fb-desktop-responsive"
            } ${postCategoryTabletSwitcher && "fb-tablet-responsive"} ${postCategoryMobileSwitcher && "fb-mobile-responsive"
            }`,
    });

    // Get all post types and taxonomies
    const { useSelect } = wp.data;
    const allTaxonomies = useSelect((select) =>
        select("core").getTaxonomies({ per_page: -1 }), []);

    const allPostTypes = useSelect(
        (select) => select("core").getPostTypes({ per_page: -1 }),
        []
    );

    const filteredPostTypes = useMemo(() => {
        if (!allPostTypes) return [];
        return allPostTypes.filter(
            (pt) =>
                pt?.visibility?.show_ui &&
                pt?.taxonomies?.length > 0 &&
                !["attachment", "wp_block", "nav_menu_item", "revision", "page"].includes(pt.slug)
        );
    }, [allPostTypes]);

    const [categoryCreators, setCategoryCreators] = useState({});

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

    const adminEditorUsers = useMemo(() => {
        if (!allUsers || allUsers.length === 0) return [];
        return allUsers.filter(user => user.roles.includes('administrator') || user.roles.includes('editor'));
    }, [allUsers]);

    const [termPostTypeLabels, setTermPostTypeLabels] = useState({});

    const allTerms = useSelect(
        (select) => {
            if (!taxonomyType) return [];
            return select("core").getEntityRecords("taxonomy", taxonomyType, {
                per_page: -1,
                hide_empty: !showEmpty,
                context: 'edit',
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
                context: 'edit',
            };
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
            selectionType,
            includeTaxonomies,
            excludeTaxonomies,
            orderBy,
            sortOrder,
            postDescriptionExcerptLength,
        ],
    );

    // Local filtering for child categories instead of API refetch
    // const filteredTaxonomies = useMemo(() => {
    //     if (!taxonomies) return [];
    //     if (showChildCategories) return taxonomies;
    //     return taxonomies.filter(term => term.parent === 0);
    // }, [taxonomies, showChildCategories]);

    const filteredTaxonomies = useMemo(() => {
        if (!taxonomies) return [];

        let result = taxonomies;

        if (!showChildCategories) {
            result = result.filter(term => term.parent === 0);
        }

        if (!showEmpty) {
            result = result.filter(term => term.count > 0);
        }

        return result;
    }, [taxonomies, showChildCategories, showEmpty]);

    // Improved hierarchical sorting function
    const sortTaxonomyTermsHierarchically = (terms) => {
        if (!terms || !Array.isArray(terms)) return [];
        const sortedTerms = [];
        terms.forEach((term) => {
            if (term.parent === 0) {
                sortedTerms.push(term);
            }
        });

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

    const sortedTaxonomies = useMemo(() =>
        showChildCategories
            ? sortTaxonomyTermsHierarchically(filteredTaxonomies)
            : filteredTaxonomies
        , [filteredTaxonomies, showChildCategories]);

    //Get post type labels from taxonomy data
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
            const postTypeSlug = taxonomy.types[0];
            const postType = allPostTypes.find(pt => pt.slug === postTypeSlug);
            if (postType?.viewable) {
                const isPlural = term.count !== 1;
                const label = isPlural ? (postType.labels?.name || postType.slug + 's') : (postType.labels?.singular_name || postType.slug);
                labelsMap[term.id] = [label];
            } else {
                labelsMap[term.id] = [];
            }
        });
        setTermPostTypeLabels(labelsMap);
    }, [sortedTaxonomies, taxonomyType, allPostTypes, allTaxonomies]);

    useEffect(() => {
        if (!showAuthor || !allTerms || allTerms.length === 0 || !taxonomyType || !allTaxonomies || !adminEditorUsers || !allPostTypes) {
            setCategoryCreators({});
            return;
        }

        const taxonomy = allTaxonomies.find(tax => tax.slug === taxonomyType);
        if (!taxonomy || !taxonomy.types) {
            setCategoryCreators({});
            return;
        }

        const fetchCreators = async () => {
            const newCreators = {};

            for (const term of allTerms) {
                let oldestPost = null;

                for (const postTypeSlug of taxonomy.types) {
                    const postType = allPostTypes.find(pt => pt.slug === postTypeSlug);
                    if (!postType || !postType.rest_base) continue;

                    const taxonomyRestBase = taxonomy.rest_base || taxonomy.slug + 's';

                    try {
                        const posts = await apiFetch({
                            path: `/wp/v2/${postType.rest_base}?${taxonomyRestBase}=${term.id}&per_page=1&orderby=date&order=asc&status=publish`,
                        });

                        if (posts && posts.length > 0) {
                            const post = posts[0];
                            if (!oldestPost || new Date(post.date) < new Date(oldestPost.date)) {
                                oldestPost = post;
                            }
                        }
                    } catch (error) {
                        console.error(`Error fetching posts for ${postTypeSlug}:`, error);
                    }
                }

                let user = null;

                if (oldestPost) {
                    const authorId = oldestPost.author;
                    try {
                        user = await apiFetch({ path: `/wp/v2/users/${authorId}?context=view` });
                    } catch (error) {
                        console.error(`Error fetching user ${authorId}:`, error);
                    }
                } else {
                    const admins = adminEditorUsers
                        .filter(user => user.roles.includes('administrator'))
                        .sort((a, b) => a.id - b.id);
                    user = admins[0] || adminEditorUsers[0];
                }

                if (user) {
                    newCreators[term.id] = {
                        id: user.id,
                        name: user.name,
                        avatar: user.avatar_urls?.[96] || 'https://secure.gravatar.com/avatar/?d=identicon&s=96',
                    };
                }
            }

            setCategoryCreators(newCreators);
        };

        fetchCreators();
    }, [showAuthor, allTerms, taxonomyType, allTaxonomies, adminEditorUsers, allPostTypes]);

    // Helper function to format post type label for display
    const formatPostTypeLabel = (postTypeLabels) => {
        if (!postTypeLabels || postTypeLabels.length === 0) return null;
        return postTypeLabels[0];
    };

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

    // Function to render author with avatar
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
        return (
            <div className="fb-taxonomy-author-wrapper">
                {creator.avatar && (
                    <img
                        className="fb-taxonomy-author-avatar"
                        src={creator.avatar}
                        alt={creator.name}
                        title={!showName ? creator.name : ""}
                        style={{ width: `${authorAvatarSize}${authorAvatarSizeUnits}` }}
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

                                <div className="fb-taxonomy-more-info">
                                    <div className="fb-taxonomy-author">

                                        {isChildCategory && showAuthor && renderAuthorWithAvatar(term.id, true)}

                                        {isParentCategory && (
                                            <>
                                                {showAuthor && renderAuthorWithAvatar(term.id, true)}
                                            </>
                                        )}

                                    </div>

                                    {premadeStyle === "style-2" && readMoreSwitcher && (
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

                            {buildTermHierarchy(terms, term.id, level + 1)}
                        </React.Fragment>
                    );
                })}
            </ul>
        );
    };

    // Grid layout
    const renderGridLayout = () => {
        if (!sortedTaxonomies) return null;

        const isSingleItem = sortedTaxonomies.length === 1;

        return (
            <div
                className={`fb_post_category_container ${isSingleItem ? "single-item" : "fb-taxonomy-grid"} ${postCategoryGlobalWraperClass ? postCategoryGlobalWraperClass : ""
                    }`.trim()}
                id={postCategoryGlobalWraperID || undefined}
            >
                {sortedTaxonomies.map((taxonomy) => {
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

                                        <div className="fb-taxonomy-more-info">
                                            <div className="fb-taxonomy-author">
                                                {!isParentCategory && showAuthor && renderAuthorWithAvatar(taxonomy.id, true)}

                                                {isParentCategory && (
                                                    <>
                                                        {showAuthor && renderAuthorWithAvatar(taxonomy.id, true)}
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

                                    <div className="fb-taxonomy-more-info">
                                        <div className="fb-taxonomy-author">
                                            {!isParentCategory && showAuthor && renderAuthorWithAvatar(taxonomy.id, true)}

                                            {isParentCategory && (
                                                <>
                                                    {showAuthor && renderAuthorWithAvatar(taxonomy.id, true)}
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

    // List layout
    const renderListLayout = () => {
        if (!sortedTaxonomies) return null;

        return (
            <ul
                className={`fb-taxonomy-list fb_post_category_container ${postCategoryGlobalWraperClass}`.trim()}
                id={postCategoryGlobalWraperID || undefined}
            >
                {sortedTaxonomies.map((taxonomy) => {

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

                            <div className="fb-taxonomy-more-info">
                                <div className="fb-taxonomy-author-wrapper">
                                    {!isParentCategory && showAuthor && renderAuthorWithAvatar(taxonomy.id, true)}

                                    {isParentCategory && (
                                        <>
                                            {showAuthor && renderAuthorWithAvatar(taxonomy.id, true)}
                                        </>
                                    )}

                                </div>

                                {premadeStyle === "style-2" && readMoreSwitcher && (
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
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}

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
                    renderGridLayout()
                ) : (
                    showChildCategories ? buildTermHierarchy(sortedTaxonomies) : renderListLayout()
                )}
            </div>
            <style>{blockStyle}</style>
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