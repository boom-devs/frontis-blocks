import { __ } from '@wordpress/i18n';
import { useState, useEffect, useRef, useMemo } from "@wordpress/element";
import { useBlockProps } from '@wordpress/block-editor';
import LayoutGrid from './layoutGrid';
import loadGoogleFont from '@Utils/loadGoogleFont';
import './editor.scss';
import SwitchToBlockSettings from '@Utils/SwitchToBlockSettings';

import Inspector from "./inspector";

import useBlockIdGenerator from '@Utils/useBlockIdGenerator';
import generatePostGridStyle from "./styling";

const loadedFonts = new Set();

export default function Edit({ attributes, setAttributes, clientId, isSelected }) {
    const {
        blockID,
        blockStyle,
        premadeStyle,
        postType,
        postPerPage,
        categoryKey,
        tagKey,
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

        postTitleFontFamily, 
        postDescriptionFontFamily, 
        postCategoryFontFamily, 
        postTagFontFamily, 
        postAuthorFontFamily, 
        postDateFontFamily, 
        buttonFontFamily,
    } = attributes;

    // Handle block ID generation (handles duplication and initial ID)
    useBlockIdGenerator({
        clientId,
        blockID,
        blockPrefix: 'fb-post-grid',
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
        if (postCategoryFontFamily && !loadedFonts.has(postCategoryFontFamily)) {
            loadGoogleFont(postCategoryFontFamily);
            loadedFonts.add(postCategoryFontFamily);
        }
    }, [postCategoryFontFamily]);

    useEffect(() => {
        if (postTagFontFamily && !loadedFonts.has(postTagFontFamily)) {
            loadGoogleFont(postTagFontFamily);
            loadedFonts.add(postTagFontFamily);
        }
    }, [postTagFontFamily]);

    useEffect(() => {
        if (postAuthorFontFamily && !loadedFonts.has(postAuthorFontFamily)) {
            loadGoogleFont(postAuthorFontFamily);
            loadedFonts.add(postAuthorFontFamily);
        }
    }, [postAuthorFontFamily]);

    useEffect(() => {
        if (postDateFontFamily && !loadedFonts.has(postDateFontFamily)) {
            loadGoogleFont(postDateFontFamily);
            loadedFonts.add(postDateFontFamily);
        }
    }, [postDateFontFamily]);

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
            const css = generatePostGridStyle(attributes);
            if (blockStyle !== css) {
                setAttributes({ blockStyle: css });
            }
        }
    }, [attributes, blockID]);
    /** End Generate Block Style */

    const [allPosts, setAllPosts] = useState([]);
    const [filterCatId, setFilterCatId] = useState(0);
    const [filterTagId, setFilterTagId] = useState(0);
    const blockProps = useBlockProps({
        className: `fb-post-grid-area ${blockID} ${postGridDesktopSwitcher && 'fb-desktop-responsive'} ${postGridTabletSwitcher && 'fb-tablet-responsive'} ${postGridMobileSwitcher && 'fb-mobile-responsive'}`,
    });

    let defaultImageUrl = '';
    if (typeof FrontisBlocksData !== 'undefined') {
        defaultImageUrl = FrontisBlocksData.pluginUrl + 'assets/images/preset-bg.jpg';
    }

    /**
     * Get taxonomy data
     */
    const tax = FrontisBlocksData?.all_cats?.[postType] || {};
    const terms = tax?.terms || {};
    const tkeys = Object.keys(terms);
    const meta = tax?.taxonomy || {};

    /**
     * Get category and tag keys
     */
    const category_Key =
        tkeys.find(k => /(^|[-_])category($|[-_])/i.test(k)) ||
        tkeys.find(k => meta?.[k]?.hierarchical === true) ||
        tkeys[0];

    const tag_Key =
        tkeys.find(k => /(^|[-_])(post[-_]?tag|tags?)($|[-_])/i.test(k)) ||
        tkeys.find(k => meta?.[k]?.hierarchical === false) ||
        null;

    /**
     * Get REST base
     */
    const catBase = meta?.[category_Key]?.rest_base || (category_Key === 'category' ? 'categories' : category_Key);
    const tagBase = tag_Key ? (meta?.[tag_Key]?.rest_base || (tag_Key === 'post_tag' ? 'tags' : tag_Key)) : null;

    const { useSelect } = wp.data;

    const postLists = useSelect((select) => {
        const query = {
            orderby: orderBy,
            order: sortOrder,
            per_page: -1,
        };

        if (showFilterByTaxonomy) {
            if (filterSelectedTaxonomy === 'category' && catBase) {
                query[catBase] = filterCatId !== 0 ? filterCatId : filterSelectedCat;
            } else if (filterSelectedTaxonomy === 'tag' && tagBase) {
                query[tagBase] = filterTagId !== 0 ? filterTagId : filterSelectedTag;
            }
        }

        applyCategoryTagFilters(query);
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
    * Category & Tag Filtering
    */
    function applyCategoryTagFilters(query) {
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
     * Set categoryKey and tagKey
     */
    useEffect(() => {
        const isValidCategory = category_Key !== undefined && category_Key !== '';
        const isValidTag = tag_Key !== undefined && tag_Key !== '';

        if (isValidCategory || isValidTag) {
            setAttributes({
                ...(isValidCategory && { categoryKey: category_Key }),
                ...(isValidTag && { tagKey: tag_Key }),
            });
        }
    }, [category_Key, tag_Key]);

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
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />  
            )}

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
                                className={`fb-parent-wrapper fb_post_grid_container ${blockID} ${postGridGlobalWraperClass} ${postSwitcher === 'list' ? 'list-layout' : 'grid-layout'}`}
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
            <style>{blockStyle}</style>
        </>
    );

}