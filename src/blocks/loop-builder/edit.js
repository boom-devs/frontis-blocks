import {useState, useEffect, useRef, useMemo} from "@wordpress/element";
import {useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';
import LayoutGrid from './layoutGrid';
import './editor.scss';
import Inspector from "./inspector";
import SwitchToBlockSettings  from '@Utils/SwitchToBlockSettings';

const ALLOWED_BLOCKS = ['frontis-blocks/loop-builder-wrapper'];

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

    const { useSelect } = wp.data;

	const postLists = useSelect((select) => {
		const query = {
			orderby: orderBy,
			order: sortOrder,
			per_page: -1, // Get all posts
		};

		if (showFilterByTaxonomy) {
			if (filterSelectedTaxonomy === 'category') {
				query.categories = filterCatId !== 0 ? filterCatId : filterSelectedCat;
			} else if (filterSelectedTaxonomy === 'tag') {
				query.tags = filterTagId !== 0 ? filterTagId : filterSelectedTag;
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
        // Category Filtering
        if (selectedCatSwitcher === 'include' && Array.isArray(selectedCat) && selectedCat.length > 0) {
            query.categories = selectedCat;
        } else if (selectedCatSwitcher === 'exclude' && Array.isArray(deSelectedCat) && deSelectedCat.length > 0) {
            query.categories_exclude = deSelectedCat;
        }

        // Tag Filtering
        if (selectedTagSwitcher === 'include' && Array.isArray(selectedTag) && selectedTag.length > 0) {
            query.tags = selectedTag;
        } else if (selectedTagSwitcher === 'exclude' && Array.isArray(deSelectedTag) && deSelectedTag.length > 0) {
            query.tags_exclude = deSelectedTag;
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

	const loopBuilderWrapper = useMemo(() => [
		['frontis-blocks/loop-builder-wrapper']
	], []);

	const innerBlocksProps = useInnerBlocksProps(
		{
			className: `swiper-wrapper fb-swiper-wrapper`,
			slot: 'container-start',
		},
		{
			allowedBlocks: ALLOWED_BLOCKS,
			template: loopBuilderWrapper,
			renderAppender: false,
			orientation: 'horizontal',
		}
	);

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
							{postLists.slice(0, postPerPage).map((item, index) => (
							<div {...innerBlocksProps} />
							))}
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
