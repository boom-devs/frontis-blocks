// Edit.js
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from "@wordpress/element";
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import {
	SelectControl,
	PanelBody,
	TabPanel, RangeControl,
} from '@wordpress/components';
import LayoutGrid from './layoutGrid';
import './editor.scss';

export default function Edit({ attributes, setAttributes, clientId }) {
    const {
        blockId,
		postType,
		postPerPage,
		selectedCat
    } = attributes;

    const { useSelect } = wp.data;
    const blockProps = useBlockProps();

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

    const postLists = useSelect( ( select ) => {
		return select('core').getEntityRecords('postType', postType, {
			per_page: postPerPage,
			categories: [selectedCat], // Replace `categoryID` with the actual ID of the category
		});
    } );

    const selectPostType = (postType) => {
		setAttributes({postType: postType});
    }

	useEffect(() => {
		setAttributes({blockId: clientId})
	}, [])

    return (
        <>
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
                                                title={__("General", "frontis-blocks")}
                                                initialOpen={true}
                                            >
                                                <SelectControl
                                                    label={__("Post types", "frontis-blocks")}
                                                    value={postType}
                                                    options={postTypes}
                                                    onChange={(selected) => selectPostType(selected)}
                                                />

												{postType &&
													<SelectControl
														label={__("Category", "frontis-blocks")}
														value={selectedCat}
														options={taxOptions}
														onChange={(selected) => setAttributes({selectedCat: selected})}
													/>
												}

												<NumberControl
													label={__('Post per page', 'frontis-blocks')}
													isShiftStepEnabled={ true }
													onChange={ (newValue) => setAttributes({postPerPage: newValue}) }
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

            {postLists ? (
                <div {...blockProps} id={blockId}>
                    {postLists.length > 0 ? (
                        <div className='fb_post_grid_container'>
                            {postLists.map((item, index) => {
                                return <LayoutGrid data={item} index={index} />
                            })}
                        </div>
                    ) : (
                        <>
                            <p className="fb-post-grid-title">No post found</p>
                        </>
                    ) }

                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}
