// Edit.js
import { __ } from '@wordpress/i18n';
import { useState, useEffect, useRef, useMemo } from "@wordpress/element";
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import {
	SelectControl,
	PanelBody,
	TabPanel, RangeControl,
} from '@wordpress/components';
import LayoutGrid from './layoutGrid';
import './editor.scss';
import Inspector from "./inspector";
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings';


export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockId,
		premadeStyle,
		postType,
		postPerPage,
		selectedCatSwitcher,
		selectedCat,
		deSelectedCat,
		selectedTagSwitcher,
		selectedTag,
		deSelectedTag,
		selectedAuthorSwitcher,
		selectedAuthor,
		deSelectedAuthor,
		orderBy,
		sortOrder,
		postTitleTag,
		postDescriptionTag,
        postDescriptionExcerptLength,
        showExcerptSwitcher,
        showAuthorSwitcher,
        showCategorySwitcher,
        showTagSwitcher,
        postAuthorAvatarSwitcher,

        postAuthorPrefixSwitcher,
        postAuthorPrefix,
        showDateSwitcher,
        postSwitcher,
        postImageSize,

        postGridGlobalWraperID,
        postGridGlobalWraperClass,

        postGridDesktopSwitcher,
		postGridTabletSwitcher,
		postGridMobileSwitcher,

        showFilterByTaxonomy,
        filterSelectedTaxonomy,
        filterSelectedCat,
        filterSelectedCatLabel,
        filterSelectedCatCount,
        filterSelectedTag,
        filterSelectedTagLabel,
        filterSelectedTagCount,
        filterAllPostsCount,
        filerselectedCountSwitcher,

        readMoreSwitcher,
        readMoreText,
        readMoreIconAlign,
        readMoreIcon,
        readMoreIconImageUrl,
        readMoreIconImageAlt,
        readMoreIconImageID,

        customPermalinkSwitcher,
        customPermalink,

        thumbnailLinkSwitcher,
        categoryLinkSwitcher,
        tagLinkSwitcher,
        authorLinkSwitcher,
        titleLinkSwitcher,
    } = attributes;

    const [allPosts, setAllPosts] = useState([]);
    const [filterCatId, setFilterCatId] = useState(0);
    const [filterTagId, setFilterTagId] = useState(0);
    const blockProps = useBlockProps({
        className: `fb-post-grid-area ${blockId} ${postGridDesktopSwitcher && 'fb-desktop-responsive'} ${postGridTabletSwitcher && 'fb-tablet-responsive'} ${postGridMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    let defaultImageUrl = '';
	if (typeof FrontisBlocksData !== 'undefined') {
		defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/preset-bg.jpg';
	}


    // === Generic taxonomy bases (একবার ডিফাইন করলেই হবে) ===
    const tax    = FrontisBlocksData?.all_cats?.[postType] || {};
    const terms  = tax?.terms || {};
    const tkeys  = Object.keys(terms);
    const meta   = tax?.taxonomy || {};

    // সম্ভাব্য category / tag কী খুঁজে নিন (খুব সিম্পল নিয়ম)
    const categoryKey =
    tkeys.find(k => /(^|[-_])category($|[-_])/i.test(k)) ||
    tkeys.find(k => meta?.[k]?.hierarchical === true) ||
    tkeys[0];

    const tagKey =
    tkeys.find(k => /(^|[-_])(post[-_]?tag|tags?)($|[-_])/i.test(k)) ||
    tkeys.find(k => meta?.[k]?.hierarchical === false) ||
    null;

    // REST base নির্ধারণ (ডিফল্ট post-এর জন্য 'categories' / 'tags')
    const catBase = meta?.[categoryKey]?.rest_base || (categoryKey === 'category' ? 'categories' : categoryKey);
    const tagBase = tagKey ? (meta?.[tagKey]?.rest_base || (tagKey === 'post_tag' ? 'tags' : tagKey)) : null;

    const { useSelect } = wp.data;

	const postLists = useSelect((select) => {
		const query = {
			orderby: orderBy,
			order: sortOrder,
			per_page: -1, // Get all posts
		};

        if (showFilterByTaxonomy) {
            if (filterSelectedTaxonomy === 'category' && catBase) {
              query[catBase] = filterCatId !== 0 ? filterCatId : filterSelectedCat;
            } else if (filterSelectedTaxonomy === 'tag' && tagBase) {
              query[tagBase] = filterTagId !== 0 ? filterTagId : filterSelectedTag;
            }
        }
        
        applyOldCategoryTagFilters(query);
        applyAuthorFilters(query);

		return select('core').getEntityRecords('postType', postType, query);
	}, [
        postType,
        postPerPage,
        orderBy,
        sortOrder,
        showFilterByTaxonomy,
        filterSelectedTaxonomy,
        filterCatId,
        selectedCat,
        filterTagId,
        selectedTag,
        selectedCatSwitcher,
        deSelectedCat,
        selectedTagSwitcher,
        deSelectedTag,
        selectedAuthorSwitcher,
        selectedAuthor,
        deSelectedAuthor,
    ]);
    
    /**
    * Old Category & Tag Filtering
    */
    function applyOldCategoryTagFilters(query) {
        // Category Filtering (generic)
        if (selectedCatSwitcher === 'include' && Array.isArray(selectedCat) && selectedCat.length > 0) {
            if (catBase) query[catBase] = selectedCat;
        } else if (selectedCatSwitcher === 'exclude' && Array.isArray(deSelectedCat) && deSelectedCat.length > 0) {
            if (catBase) query[`${catBase}_exclude`] = deSelectedCat;
        }
        
        // Tag Filtering (generic)
        if (selectedTagSwitcher === 'include' && Array.isArray(selectedTag) && selectedTag.length > 0) {
            if (tagBase) query[tagBase] = selectedTag;
        } else if (selectedTagSwitcher === 'exclude' && Array.isArray(deSelectedTag) && deSelectedTag.length > 0) {
            if (tagBase) query[`${tagBase}_exclude`] = deSelectedTag;
        }
    }

    /**
     * Author Filtering
     */
    function applyAuthorFilters(query) {
        if (selectedAuthorSwitcher === 'include' && Array.isArray(selectedAuthor) && selectedAuthor.length > 0) {
            query.author = selectedAuthor;
        } else if (selectedAuthorSwitcher === 'exclude' && Array.isArray(deSelectedAuthor) && deSelectedAuthor.length > 0) {
            query.author_exclude = deSelectedAuthor;
        }
    }

    /**
    * Manages tab button settings and switches to block settings on click
    */
    const panelRef = useRef(null);
    SwitchToBlockSettings(panelRef);

    /**
     * Handle Category Click
     */
	const handleCategoryClick = (category) => {
		if (category && typeof category.value !== 'undefined') {
			setFilterCatId(category.value);
		}
	};

    /**
     * Handle Tag Click
     */
	const handleTagClick = (tag) => {
		if (tag && typeof tag.value !== 'undefined') {
			setFilterTagId(tag.value);
		}
	};


    /**
     * Get All Posts Count
     */
    useEffect(() => {
        if (postLists && postLists.length > 0 && allPosts.length === 0) {
            setAllPosts(postLists);
        }
    }, [postLists]);

    /**
     * Get Category Counts
     */
    const getCategoryCounts = () => {
        const counts = {};
    
        if (allPosts && Array.isArray(allPosts)) {
            allPosts.forEach((post) => {
                if (post.categories && Array.isArray(post.categories)) {
                    post.categories.forEach((catId) => {
                        counts[catId] = (counts[catId] || 0) + 1;
                    });
                }
            });
        }
    
        return counts;
    };

    /**
     * Get Category Counts
     */
    const getTagCounts = () => {
        const counts = {};
    
        if (allPosts && Array.isArray(allPosts)) {
            allPosts.forEach((post) => {
                if (post.tags && Array.isArray(post.tags)) {
                    post.tags.forEach((tagId) => {
                        counts[tagId] = (counts[tagId] || 0) + 1;
                    });
                }
            });
        }
    
        return counts;
    };

    useEffect(() => {
        setAttributes({
            filterAllPostsCount: allPosts.length,
            filterSelectedCatCount: getCategoryCounts(),
            filterSelectedTagCount: getTagCounts(),
        });
    }, [allPosts]);

    return (
        <>
            <Inspector
                attributes={attributes}
                setAttributes={setAttributes}
                clientId={clientId}
            />
    
            {postLists ? (
                <div {...blockProps}>
                    {postLists.length > 0 ? (
                        <>
                            {showFilterByTaxonomy && filterSelectedTaxonomy === 'category' && filterSelectedCatLabel.length > 0 && (
                                <div className="fb_post_grid_filter_categories">
                                    
                                    {filterSelectedCatLabel.map((category, idx) => (
                                        <div
                                            key={idx}
                                            className={`fb_post_grid_filter_category ${filterCatId === category.value ? 'active' : ''}`}
                                            onClick={() => handleCategoryClick(category)}
                                        >
                                              <span className="fb-post-grid-filter-category-label">{category.label}</span>
                                              {filerselectedCountSwitcher ? <span className="fb-post-grid-filter-category-count">{' '}{category.value === 0 ? filterAllPostsCount : filterSelectedCatCount[category.value] || 0}</span> : ''}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {showFilterByTaxonomy && filterSelectedTaxonomy === 'tag' && filterSelectedTagLabel.length > 0 && (
                                <div className="fb_post_grid_filter_categories">
                                    {filterSelectedTagLabel.map((tag, idx) => (
                                        <div
                                            key={idx}
                                            className={`fb_post_grid_filter_category ${filterTagId === tag.value ? 'active' : ''}`}
                                            onClick={() => handleTagClick(tag)}
                                        >
                                            <span className="fb-post-grid-filter-tag-label">{tag.label}</span>
                                            {filerselectedCountSwitcher ? <span className="fb-post-grid-filter-tag-count">{' '}{tag.value === 0 ? filterAllPostsCount : filterSelectedTagCount[tag.value] || 0}</span> : ''}
                                        </div>
                                    ))}
                                </div>
                            )}
    
                            <div
                                className={`fb-parent-wrapper fb_post_grid_container ${blockId} ${postGridGlobalWraperClass} ${postSwitcher === 'list' ? 'list-layout' : 'grid-layout'}`}
                                id={postGridGlobalWraperID}
                                ref={panelRef}
                            >
                                {postLists.slice(0, postPerPage).map((item, index) => (
                                    <LayoutGrid
                                        key={index}
                                        data={item}
                                        index={index}
                                        postTitleTag={postTitleTag}
                                        postDescriptionTag={postDescriptionTag}
                                        postDescriptionExcerptLength={postDescriptionExcerptLength}
                                        showExcerptSwitcher={showExcerptSwitcher}
                                        showAuthorSwitcher={showAuthorSwitcher}
                                        showCategorySwitcher={showCategorySwitcher}
                                        showTagSwitcher={showTagSwitcher}
                                        postAuthorPrefixSwitcher={postAuthorPrefixSwitcher}
                                        postAuthorPrefix={postAuthorPrefix}
                                        showDateSwitcher={showDateSwitcher}
                                        postAuthorAvatarSwitcher={postAuthorAvatarSwitcher}
                                        postImageSize={postImageSize}
                                        defaultImageUrl={defaultImageUrl}
                                        premadeStyle={premadeStyle}

                                        readMoreSwitcher={readMoreSwitcher}
                                        readMoreText={readMoreText}
                                        readMoreIconAlign={readMoreIconAlign}
                                        readMoreIcon={readMoreIcon}
                                        readMoreIconImageUrl={readMoreIconImageUrl}
                                        readMoreIconImageAlt={readMoreIconImageAlt}
                                        readMoreIconImageID={readMoreIconImageID}

                                        customPermalinkSwitcher={customPermalinkSwitcher}
                                        customPermalink={customPermalink}

                                        thumbnailLinkSwitcher={thumbnailLinkSwitcher}
                                        categoryLinkSwitcher={categoryLinkSwitcher}
                                        tagLinkSwitcher={tagLinkSwitcher}
                                        authorLinkSwitcher={authorLinkSwitcher}
                                        titleLinkSwitcher={titleLinkSwitcher}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <p className="fb-post-grid-title">No post found</p>
                    )}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
    
}
