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
    TextControl,
} from '@wordpress/components';

/**
 * External Dependencies
 */
import Select2 from "react-select";

import FB_Spacing from '@Components/spacing';
import FB_Color from '@Components/color';
import FB_TypographyControl from '@Components/typography-control';
import FB_Range from '@Components/range';
import FB_IncludeExcludeSwitcherControl from '@Components/switcher-include-exclude-control';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
        blockId,
		deviceType,
		blockStyle,
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
		columnsPerSection,
		gapUnits,
		rowGap,
		columnGap
	} = attributes;

    useEffect(() => {
        if (clientId && typeof clientId === 'string') {
            setAttributes({
                blockId: "fb-post-grid-" + clientId.slice(0, 8),
            });
        }
    }, [clientId]);


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

    /** Start category */
	const allTaxs = FrontisBlocksData.all_cats;
	const allTaxonomies = allTaxs[postType];

	const taxOptions = allTaxonomies?.terms?.category?.map(item => ({
		value: item.id,
		label: item.name
	})) || [];

    const createOptionFromCategory = (categoryIds) => categoryIds.map(catId => ({
        value: catId,
        label: taxOptions.find(option => option.value === catId)?.label || ''
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

    const createOptionFromTag = (tagIds) => tagIds.map(tagId => ({
        value: tagId,
        label: tagOptions.find(option => option.value === tagId)?.label || ''
    }));

    const [selectedTagOption, setSelectedTagOption] = useState(createOptionFromTag(selectedTag));
    const [deSelectedTagOption, setDeSelectedTagOption] = useState(createOptionFromTag(deSelectedTag));

    const updateTagSelection = (optionSetter, attributeKey) => (options) => {
        optionSetter(options);
        setAttributes({ [attributeKey]: options.map(option => option.value) });
    };

    const handleTagChange = updateTagSelection(setSelectedTagOption, 'selectedTag');
    const handleDeSelectedTagChange = updateTagSelection(setDeSelectedTagOption, 'deSelectedTag');
    /** End tag */

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
    const [selectedSortOrder, setSelectedSortOrder] = useState({ value: 'desc', label: 'DESC' });
    /** End sort order */

    const handleSortOrderChange = (option) => {
        setSelectedSortOrder(option);
        setAttributes({ sortOrder: option.value });
    };

    /** Start order by */
    const [selectedOrderBy, setSelectedOrderBy] = useState({ value: 'date', label: 'Date' });

    const handleOrderByChange = (option) => {
        setSelectedOrderBy(option);
        setAttributes({ orderBy: option.value });
    };
    /** End order by */



    const allBlockStyle = useMemo(() => `
        .${blockId} .fb_post_grid_container { 
            grid-template-columns: repeat(${columnsPerSection.Desktop}, 1fr) !important;
            row-gap: ${rowGap.Desktop}${gapUnits.Desktop}; 
            column-gap: ${columnGap.Desktop}${gapUnits.Desktop}; 
        }

        @media only screen and (max-width: 1024px) {
            .${blockId} .fb_post_grid_container { 
                grid-template-columns: repeat(${columnsPerSection.Tablet}, 1fr) !important;
                row-gap: ${rowGap.Tablet}${gapUnits.Tablet};
                column-gap: ${columnGap.Tablet}${gapUnits.Tablet};
            }
        }

        @media only screen and (max-width: 767px) {
            .${blockId} .fb_post_grid_container { 
                grid-template-columns: repeat(${columnsPerSection.Mobile}, 1fr) !important;
                row-gap: ${rowGap.Mobile}${gapUnits.Mobile};
                column-gap: ${columnGap.Mobile}${gapUnits.Mobile};
            }
        }

    `, [
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
        columnsPerSection,
        gapUnits,
        rowGap,
        columnGap
    ]);

    useEffect(() => {
        setAttributes({blockStyle: `${allBlockStyle}`.replace(/\s+/g, ' ').trim()});
    }, [allBlockStyle]);

    const editorStyle = allBlockStyle.replace(/\s+/g, ' ').trim();

    return (
        <>

            <style>
                {editorStyle}
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
                                className: "fb-tab advanced",
                            },
                        ]}
                    >
                        {(tab) => (
                            <div className={"fb-tab-controls" + tab.name}>
                                {tab.name === 'general' && (
                                    <>
                                        <div className="fb-advanced-wrapper">
                                            <PanelBody
                                                title={__("Query", "frontis-blocks")}
                                                initialOpen={true}
                                            >
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

                                                {/* <SelectControl
                                                    label={__("Post types", "frontis-blocks")}
                                                    value={postType}
                                                    options={postTypes}
                                                    onChange={(value) => setAttributes({postType: value})}
                                                /> */}


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
                                                
                                                <BaseControl
                                                    label={__("Order By", "frontis-blocks")}
                                                    id="fb-setting-order-by"
                                                    className="fb-setting-order-by"
                                                >
                                                    <Select2 
                                                        options={[
                                                           {value: "date", label: "Date"},
                                                            {value: "author", label: "Author"},
                                                            {value: "title", label: "Title"},
                                                            {value: "modified", label: "Last Modified"}
                                                        ]}
                                                        value={selectedOrderBy}
                                                        onChange={handleOrderByChange}
                                                        className="fb-select2-control"
                                                    />
                                                </BaseControl>
                                                
                                                <BaseControl
                                                    label={__("Sort Order", "frontis-blocks")}
                                                    id="fb-setting-sort-order"
                                                    className="fb-setting-sort-order"
                                                >
                                                    <Select2 
                                                        options={[
                                                           {value: "asc", label: "ASC"},
                                                            {value: "desc", label: "DESC"}
                                                        ]}
                                                        value={selectedSortOrder}
                                                        onChange={handleSortOrderChange}
                                                        className="fb-select2-control"
                                                    />
                                                </BaseControl>

												<NumberControl
													label={__('Post per page', 'frontis-blocks')}
													isShiftStepEnabled={ true }
													onChange={ (value) => setAttributes({postPerPage: value}) }
													shiftStep={ 1 }
													value={ postPerPage }
												/>
                                            </PanelBody>

                                            <PanelBody
                                                title={__("Grid", "frontis-blocks")}
                                                initialOpen={false}
                                            >

                                                <FB_Range
                                                    min={1}
                                                    max={6}
                                                    label={__("Columns", "frontis-blocks")}
                                                    rangeValue={columnsPerSection}
                                                    onChangeHandler={(value) => setAttributes({ columnsPerSection: value })}
                                                    deviceType={deviceType}
                                                    setAttributes={setAttributes}
                                                    rangeStep={1}
                                                    resetFallbackValue={"3"}
                                                    isRangeUnit={false}
                                                />

                                                <FB_Range
                                                    min={1}
                                                    max={200}
                                                    label={__("Row Gap", "frontis-blocks")}
                                                    rangeValue={rowGap}
                                                    onChangeHandler={(value) => setAttributes({ rowGap: value })}
                                                    rangeUnitHandler={(value) => setAttributes({ gapUnits: value })}
                                                    deviceType={deviceType}
                                                    units={gapUnits}
                                                    setAttributes={setAttributes}
                                                    rangeStep={1}
                                                    resetFallbackValue={"30"}
                                                />

                                                <FB_Range
                                                    min={1}
                                                    max={200}
                                                    label={__("Column Gap", "frontis-blocks")}
                                                    rangeValue={columnGap}
                                                    onChangeHandler={(value) => setAttributes({ columnGap: value })}
                                                    rangeUnitHandler={(value) => setAttributes({ gapUnits: value })}
                                                    deviceType={deviceType}
                                                    units={gapUnits}
                                                    setAttributes={setAttributes}
                                                    rangeStep={1}
                                                    resetFallbackValue={"30"}
                                                />

                                            </PanelBody>
                                        </div>
                                    </>
                                )}

                                {tab.name === "styles" && (
                                    <>
										<div></div>
                                    </>
                                )}
                            {tab.name === "advanced" && (
                                    <>
										<div className="fb-setting-advanced-tab-wrapper">
											<div className="fb-setting-inner-wrapper">
											</div>
										</div>
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