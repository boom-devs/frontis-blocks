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

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
        blockId,
		deviceType,
		blockStyle,
		postType,
		postPerPage,
		selectedCat,
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

    const postTypes = FrontisBlocksData.post_types;
	const allTaxs = FrontisBlocksData.all_cats;
	const allTaxonomies = allTaxs[postType];

	let taxOptions = [];
	if(allTaxonomies?.terms?.category){
		taxOptions = allTaxonomies.terms.category.map(item => ({
			value: item.id,
			label: item.name
		}));
	}

    const [selectedOption, setSelectedOption] = useState(selectedCat);

    const handleCategoryChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        setAttributes({ selectedCat: selectedOption.map(option => option.value) });
    };

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
        selectedCat,
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
                                                <SelectControl
                                                    label={__("Post types", "frontis-blocks")}
                                                    value={postType}
                                                    options={postTypes}
                                                    onChange={(value) => setAttributes({postType: value})}
                                                />


                                                {/* {postType &&
													<SelectControl
														label={__("Category", "frontis-blocks")}
														value={selectedCat}
														options={taxOptions}
														onChange={(value) => setAttributes({selectedCat: value})}
													/>
												} */}

                                                {postType &&
                                                    <Select2 
                                                        label={__("Category", "frontis-blocks")}
                                                        options={taxOptions} 
                                                        value={selectedOption}
                                                        onChange={handleCategoryChange}
                                                        isMulti
                                                        className="fb-select2-control"
                                                    />
                                                }

                                                <SelectControl
                                                    label={__("Order By", "frontis-blocks")}
                                                    value={orderBy}
                                                    options={[
                                                        {value: "date", label: "Date"},
                                                        {value: "author", label: "Author"},
                                                        {value: "title", label: "Title"},
                                                        {value: "modified", label: "Last Modified"}
                                                    ]}
                                                    onChange={(value) => setAttributes({orderBy: value})}
                                                />

                                                <SelectControl
                                                    label={__("Sort Order", "frontis-blocks")}
                                                    value={sortOrder}
                                                    options={[
                                                        {value: "asc", label: "ASC"},
                                                        {value: "desc", label: "DESC"}
                                                    ]}
                                                    onChange={(value) => setAttributes({sortOrder: value})}
                                                />

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