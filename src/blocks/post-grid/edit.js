// Edit.js
import { __ } from '@wordpress/i18n';
import { useState, useEffect, useRef } from "@wordpress/element";
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
        filterSelectedTag,
        filterSelectedTagLabel,
    } = attributes;

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

    const postLists = useSelect( ( select ) => {
        const query = {
            orderby: orderBy,
            order: sortOrder,
            per_page: postPerPage,
        };



        // 1. New Filter Priority (only Category/Tag)
        if (showFilterByTaxonomy && filterSelectedTaxonomy) {
            if (filterSelectedTaxonomy === 'category' && Array.isArray(filterSelectedCat) && filterSelectedCat.length > 0) {
                query.categories = filterSelectedCat;
            } else if (filterSelectedTaxonomy === 'tag' && Array.isArray(filterSelectedTag) && filterSelectedTag.length > 0) {
                query.tags = filterSelectedTag;
            }
        }

        if(filterCatId !== 0) {
            query.categories = filterCatId;
        }
        
        if(filterCatId === 0) {
            query.categories = filterSelectedCat;
        }

        if(filterTagId !== 0) {
            query.tags = filterTagId;
        }

        if(filterTagId === 0) {
            query.tags = filterSelectedTag;
        }

        applyOldCategoryTagFilters(query);
        applyAuthorFilters(query);

        return select('core').getEntityRecords('postType', postType, query);
    } );

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

    const handleCategoryClick = (category) => {
        if (category && typeof category.value !== 'undefined') {
            setFilterCatId(category.value);
        }
    };

    const handleTagClick = (tag) => {
        if (tag && typeof tag.value !== 'undefined') {
            setFilterTagId(tag.value);
        }
    };

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
                            {filterSelectedCatLabel.length > 0 && (
                                <div className="fb_post_grid_filter_categories">
                                    {filterSelectedCatLabel.map((category, idx) => (
                                        <div
                                            className={`fb_post_grid_category ${filterCatId === category.value ? 'active' : ''}`}
                                            onClick={() => handleCategoryClick(category)}
                                            key={idx}
                                        >
                                            {category.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                            
                            {filterSelectedTagLabel.length > 0 && (
                                <div className="fb_post_grid_filter_categories">
                                    {filterSelectedTagLabel.map((tag, idx) => (
                                        <div
                                            className={`fb_post_grid_category ${filterTagId === tag.value ? 'active' : ''}`}
                                            onClick={() => handleTagClick(tag)}
                                            key={idx}
                                        >
                                            {tag.label}
                                        </div>
                                    ))}
                                </div>
                            )}
    
                            <div
                                className={`fb-parent-wrapper fb_post_grid_container ${blockId} ${postGridGlobalWraperClass} ${postSwitcher === 'list' ? 'list-layout' : 'grid-layout'}`}
                                id={postGridGlobalWraperID}
                                ref={panelRef}
                            >
                                {postLists.map((item, index) => (
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
