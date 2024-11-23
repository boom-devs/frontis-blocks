import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { useEffect, useMemo } from '@wordpress/element';
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

import FB_Spacing from '@Components/spacing';
import FB_Color from '@Components/color';
import FB_TypographyControl from '@Components/typography-control';

import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
	const {
        blockId,
		blockStyle,
		postType,
		postPerPage,
		selectedCat,
		orderBy,
		sortOrder,
		columnsPerSection
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






    const allBlockStyle = useMemo(() => `
                .${blockId} .fb_post_grid_container { 
                    display: grid;
                    gap: 20px;
                    grid-template-columns: repeat(${columnsPerSection}, 1fr) !important;
                }

    `, [
        blockId,
        postType,
        postPerPage,
        selectedCat,
        orderBy,
        sortOrder,
        columnsPerSection

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

												{postType &&
													<SelectControl
														label={__("Category", "frontis-blocks")}
														value={selectedCat}
														options={taxOptions}
														onChange={(value) => setAttributes({selectedCat: value})}
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

                                                <SelectControl
                                                    label={__("Columns", "frontis-blocks")}
                                                    value={columnsPerSection}
                                                    options={[
                                                        {value: "1", label: "1"},
                                                        {value: "2", label: "2"},
                                                        {value: "3", label: "3"},
                                                        {value: "4", label: "4"},
                                                        {value: "5", label: "5"},
                                                        {value: "6", label: "6"}
                                                    ]}
                                                    onChange={(value) => setAttributes({columnsPerSection: value})}
                                                />

												<NumberControl
													label={__('Post per page', 'frontis-blocks')}
													isShiftStepEnabled={ true }
													onChange={ (value) => setAttributes({postPerPage: value}) }
													shiftStep={ 1 }
													value={ postPerPage }
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