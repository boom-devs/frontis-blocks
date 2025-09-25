import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { useEffect, useMemo, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import {
    PanelBody,
    BaseControl,
    TabPanel,
    Button,
    ButtonGroup,
    RangeControl,
    SelectControl,
    ToggleControl,
    TextControl,
} from '@wordpress/components';

import { 
    BORDER_STYLES,
    POST_SWITCHER,
    ICON_ALIGN, 
    OVERFLOW_OP,
    TAXONOMY_OPTIONS,
    PAGINATION_TYPE,
    PAGINATION_PREV_NEXT_TYPE,
    PREMADE_STYLE,
    READ_MORE_ICON_ALIGN,
} from '@Constants/fbConstants';

/**
 * External Dependencies
 */
import Select2 from "react-select";
import FB_IncludeExcludeSwitcherControl from '@Components/switcher-include-exclude-control';
import {useDeviceType} from "@Config/displayType";
import FB_InspectorControls from '@Components/InspectorControls';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
        blockId,
		// deviceType,
		blockStyle,
		postType,
		postPerPage,
		postOffset,
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
		gridColumnsPerSection,
		gridGapUnits,
		gridRowGap,
		gridColumnGap,
		listGapUnits,
		listRowGap,
		listImageSpacing,
		postSwitcher,
	} = attributes;

    const deviceType= useDeviceType();
    
    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-loop-builder-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);


    useEffect(() => {
        setAttributes({ postPerPage: postPerPage === 0 ? undefined : postPerPage });
        setAttributes({ postOffset: postOffset === 0 ? undefined : postOffset });
    }, [postPerPage, postOffset]);


    /** Start post type */
    const postTypes = FrontisBlocksData.post_types;
    const postTypeOptions = postTypes.map(item => ({
        value: item.value,
        label: item.label
    }));

    const [selectedPostType, setSelectedPostType] = useState({ value: 'post', label: 'Posts' }); 

    const handlePostTypeChange = (option) => {
        setSelectedPostType(option);
        setAttributes({ postType: option.value });
    };
    /** End post type */

    /** Start image size */
    const imageSizes = FrontisBlocksData.image_sizes;
    const imageSizeOptions = imageSizes.map(item => ({
        value: item.value,
        label: item.label
    }));
    /** End image size */

    /** Start category */
	const allTaxs = FrontisBlocksData.all_cats;
	const allTaxonomies = allTaxs[postType];
    /** End Taxonomies Options */   

	const taxOptions = allTaxonomies?.terms?.category?.map(item => ({
		value: item.id,
		label: item.name
	})) || [];

    const filterTaxOptions = [
        { value: 0, label: 'All' },
        ...taxOptions
    ];

    const createOptionFromCategory = (categoryIds) => categoryIds.map(catId => ({
        value: catId,
        label: taxOptions.find(option => option.value === catId)?.label || ''
    }));

    const createFilterOptionFromCategory = (categoryIds) => categoryIds.map(catId => ({
        value: catId,
        label: filterTaxOptions.find(option => option.value === catId)?.label || ''
    }));

    const [selectedOption, setSelectedOption] = useState(createOptionFromCategory(selectedCat));
    const [deSelectedOption, setDeSelectedOption] = useState(createOptionFromCategory(deSelectedCat));

    const updateCategorySelection = (optionSetter, attributeKey) => (options) => {
        optionSetter(options);
        setAttributes({ [attributeKey]: options.map(option => option.value) });
    };

    const handleCategoryChange = updateCategorySelection(setSelectedOption, 'selectedCat');
    const handleDeSelectedCategoryChange = updateCategorySelection(setDeSelectedOption, 'deSelectedCat');
    /** End category */

    /** Start tag */
    const tagOptions = allTaxonomies?.terms?.post_tag?.map(item => ({
        value: item.id,
        label: item.name
    })) || [];


    const filterTagOptions = [
        { value: 0, label: 'All' },
        ...tagOptions
    ];

    const createOptionFromTag = (tagIds) => tagIds.map(tagId => ({
        value: tagId,
        label: tagOptions.find(option => option.value === tagId)?.label || ''
    }));

    const createFilterOptionFromTag = (tagIds) => tagIds.map(tagId => ({
        value: tagId,
        label: filterTagOptions.find(option => option.value === tagId)?.label || ''
    }));

    const [selectedTagOption, setSelectedTagOption] = useState(createOptionFromTag(selectedTag));
    const [deSelectedTagOption, setDeSelectedTagOption] = useState(createOptionFromTag(deSelectedTag));

    const updateTagSelection = (optionSetter, attributeKey) => (options) => {
        optionSetter(options);
        setAttributes({ [attributeKey]: options.map(option => option.value) });
    };

    const handleTagChange = updateTagSelection(setSelectedTagOption, 'selectedTag');
    const handleDeSelectedTagChange = updateTagSelection(setDeSelectedTagOption, 'deSelectedTag');

    /** End Tag */

    /** Start author */
    const allAuthors = FrontisBlocksData.all_authors;
    const authorOptions = Object.values(allAuthors).map(author => ({
        value: author.ID,
        label: author.data.display_name,
    }));

    const mapAuthorsToOptions = (authorIDs) => authorIDs.map(authorID => ({
        value: authorID,
        label: authorOptions.find(option => option.value === authorID)?.label || '',
    }));

    const [selectedAuthorOption, setSelectedAuthorOption] = useState(mapAuthorsToOptions(selectedAuthor));
    const [deSelectedAuthorOption, setDeSelectedAuthorOption] = useState(mapAuthorsToOptions(deSelectedAuthor));
    
    const handleAuthorSelectedChange = (selectedAuthorOption) => {
        setSelectedAuthorOption(selectedAuthorOption);
        setAttributes({ selectedAuthor: selectedAuthorOption.map(option => option.value) });
    };
    
    const handleDeSelectedAuthorChange = (deSelectedAuthorOption) => {
        setDeSelectedAuthorOption(deSelectedAuthorOption);
        setAttributes({ deSelectedAuthor: deSelectedAuthorOption.map(option => option.value) });
    };
    /** End author */

    /** Start sort order */
    const [selectedSortOrder, setSelectedSortOrder] = useState(() => {
        return attributes.sortOrder === 'asc' 
            ? { value: 'asc', label: 'ASC' } 
            : { value: 'desc', label: 'DESC' };
    });
    /** End sort order */

    const handleSortOrderChange = (option) => {
        setSelectedSortOrder(option);
        setAttributes({ sortOrder: option.value });
    };

    /** Start order by */
    const [selectedOrderBy, setSelectedOrderBy] = useState(() => {
        switch (attributes.orderBy) {
            case 'author':
                return { value: 'author', label: 'Author' };
            case 'title':
                return { value: 'title', label: 'Title' };
            case 'modified':
                return { value: 'modified', label: 'Last Modified' };
            case 'date':
            default:
                return { value: 'date', label: 'Date' };
        }
    });

    const handleOrderByChange = (option) => {
        setSelectedOrderBy(option);
        setAttributes({ orderBy: option.value });
    };
    /** End order by */

    /**
	 * Inspector General Controls
	 */
	const generalControls = (
        <>
            <div className="fb-setting-general-wrapper">
                <PanelBody
                    title={__("Query", "frontis-blocks")}
                    initialOpen={true}
                >
                    <RangeControl
                        label={__("Post per page", "frontis-blocks")}
                        value={postPerPage}
                        onChange={(value) => setAttributes({ postPerPage: value })}
                        min={1}
                        max={100}
                        step={1}
                        resetFallbackValue={6}
                    />
                    <RangeControl
                        label={__("Posts offset ", "frontis-blocks")}
                        value={postOffset} 
                        onChange={(value) => setAttributes({ postOffset: value })}
                        min={0}
                        max={100}
                        step={1}
                        resetFallbackValue={0}
                    />
                    <BaseControl
                        label={__("Sort Order", "frontis-blocks")}
                        id="fb-setting-sort-order"
                        className="fb-setting-sort-order"
                    >
                        <Select2 
                            options={[
                                { value: "asc", label: "ASC" },
                                { value: "desc", label: "DESC" }
                            ]}
                            value={selectedSortOrder}
                            onChange={handleSortOrderChange}
                            className="fb-select2-control"
                        />
                    </BaseControl>
                    <BaseControl
                        label={__("Order By", "frontis-blocks")}
                        id="fb-setting-order-by"
                        className="fb-setting-order-by"
                    >
                        <Select2 
                            options={[
                                { value: "date", label: "Date" },
                                { value: "author", label: "Author" },
                                { value: "title", label: "Title" },
                                { value: "modified", label: "Last Modified" }
                            ]}
                            value={selectedOrderBy}
                            onChange={handleOrderByChange}
                            className="fb-select2-control"
                        />
                    </BaseControl>

                    <BaseControl
                        label={__("Post type", "frontis-blocks")} 
                        id="fb-setting-post-type"
                        className="fb-setting-post-type"
                    >
                        <Select2 
                            options={postTypeOptions}
                            value={selectedPostType}
                            onChange={handlePostTypeChange}
                            className="fb-select2-control"
                        />
                    </BaseControl>

                    <FB_IncludeExcludeSwitcherControl
                        label={__("Author", "frontis-blocks")}
                        globalSwitcher={selectedAuthorSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({selectedAuthorSwitcher: value})}
                    />

                    {postType && selectedAuthorSwitcher === 'include' &&
                        <BaseControl
                            label={__("Include Authors", "frontis-blocks")}
                            id="fb-setting-author"
                            className="fb-setting-author"
                        >
                            <Select2 
                                options={authorOptions} 
                                value={selectedAuthorOption}
                                onChange={handleAuthorSelectedChange}
                                isMulti
                                className="fb-select2-control"
                            />
                        </BaseControl>
                    }

                    {postType && selectedAuthorSwitcher === 'exclude' &&
                        <BaseControl
                            label={__("Exclude Authors", "frontis-blocks")}
                            id="fb-setting-author"
                            className="fb-setting-author"
                        >
                            <Select2 
                                options={authorOptions} 
                                value={deSelectedAuthorOption}
                                onChange={handleDeSelectedAuthorChange}
                                isMulti
                                className="fb-select2-control"
                            />
                        </BaseControl>
                    }

                    <FB_IncludeExcludeSwitcherControl
                        label={__("Category", "frontis-blocks")}
                        globalSwitcher={selectedCatSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({selectedCatSwitcher: value})}
                    />
        
                    {postType && selectedCatSwitcher === 'include' &&
                        <BaseControl
                            label={__("Include Categories", "frontis-blocks")}
                            id="fb-setting-category"
                            className="fb-setting-category"
                        >
                            <Select2 
                                options={taxOptions} 
                                value={selectedOption}
                                onChange={handleCategoryChange}
                                isMulti
                                className="fb-select2-control"
                            />
                        </BaseControl>
                    }

                    {postType && selectedCatSwitcher === 'exclude' &&
                        <BaseControl
                            label={__("Exclude Categories", "frontis-blocks")}
                            id="fb-setting-category"
                            className="fb-setting-category"
                        >
                            <Select2 
                                options={taxOptions} 
                                value={deSelectedOption}
                                onChange={handleDeSelectedCategoryChange}
                                isMulti
                                className="fb-select2-control"
                            />
                        </BaseControl>
                    }

                    <FB_IncludeExcludeSwitcherControl
                        label={__("Tag", "frontis-blocks")}
                        globalSwitcher={selectedTagSwitcher}
                        setGlobalSwitcher={(value) => setAttributes({selectedTagSwitcher: value})}
                    />

                    {postType && selectedTagSwitcher === 'include' &&
                        <BaseControl
                            label={__("Include Tags", "frontis-blocks")}
                            id="fb-setting-category"
                            className="fb-setting-category"
                        >
                            <Select2 
                                options={tagOptions} 
                                value={selectedTagOption}
                                onChange={handleTagChange}
                                isMulti
                                className="fb-select2-control"
                            />
                        </BaseControl>
                    }

                    {postType && selectedTagSwitcher === 'exclude' &&
                        <BaseControl
                            label={__("Exclude Tags", "frontis-blocks")}
                            id="fb-setting-category"
                            className="fb-setting-category"
                        >
                            <Select2 
                                options={tagOptions} 
                                value={deSelectedTagOption}
                                onChange={handleDeSelectedTagChange}
                                isMulti
                                className="fb-select2-control"
                            />
                        </BaseControl>
                    }
                    
                </PanelBody>
            </div>
        </>
	);

	/**
	 * Inspector Style Controls
	 */
	const styleControls = (
        <>

        </>
	);
		
	/**
	 * Inspector Advanced Controls
	 */
	const advancedControls = (
        <>

        </>
	);

    return (
        <>

            <FB_InspectorControls
                generalControls={generalControls}
                styleControls={styleControls}
                advancedControls={advancedControls}
            />
        </>
    );
}