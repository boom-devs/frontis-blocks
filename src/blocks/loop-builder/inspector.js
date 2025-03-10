import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
} from '@wordpress/block-editor';
import {
    PanelBody,
    TabPanel,
    SelectControl,
    RangeControl,
    ToggleControl,
    TextControl,
    Placeholder,
    Spinner
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import {
    BORDER_STYLES,
    LAYOUT_ALIGNMENT,
    LAYOUT_TYPE,
    OVERFLOW_OP,
    PRESETS,
} from "./constants/constants";
import { useDeviceType } from "@Config/displayType";
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
    const {
        blockID,
        postType,
        postsPerPage,
        order,
        orderBy,
        includedCategories,
        includedTags,
        offset,
        showFeaturedImage,
        showTitle,
        showExcerpt,
        excerptLength,
        showReadMore,
        readMoreText,
        columns,
        gap
    } = attributes;
    
    // Fetch all available post types
    const { postTypes } = useSelect((select) => {
        const { getPostTypes } = select(coreStore);
        const filteredPostTypes = getPostTypes({ per_page: -1 })?.filter(
            ({ viewable }) => viewable
        ) || [];
        
        return {
            postTypes: filteredPostTypes,
        };
    }, []);
    
    // Get post type options for the select control
    const postTypeOptions = postTypes?.map(({ slug, labels }) => ({
        label: labels.singular_name,
        value: slug,
    })) || [];
    
    // Get categories for the selected post type
    const { categories } = useSelect((select) => {
        if (postType !== 'post') return { categories: [] };
        
        const { getEntityRecords } = select(coreStore);
        return {
            categories: getEntityRecords('taxonomy', 'category', { per_page: -1 }) || [],
        };
    }, [postType]);
    
    // Get tags for the selected post type
    const { tags } = useSelect((select) => {
        if (postType !== 'post') return { tags: [] };
        
        const { getEntityRecords } = select(coreStore);
        return {
            tags: getEntityRecords('taxonomy', 'post_tag', { per_page: -1 }) || [],
        };
    }, [postType]);
    
    // Category options for select
    const categoryOptions = categories?.map(({ id, name }) => ({
        label: name,
        value: id,
    })) || [];
    
    // Tag options for select
    const tagOptions = tags?.map(({ id, name }) => ({
        label: name,
        value: id,
    })) || [];
    
    return (
        <>
            <style>
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
                                name: "query",
                                title: "Query",
                                className: "fb-tab query",
                            },
                            {
                                name: "layout",
                                title: "Layout",
                                className: "fb-tab layout",
                            },
                            {
                                name: "styles",
                                title: "Style",
                                className: "fb-tab styles",
                            },
                            {
                                name: "advanced",
                                title: "Advanced",
                                className: "fb-tab advance",
                            },
                        ]}
                    >
                        {(tab) => (
                            <div className={"fb-tab-controls " + tab.name}>
                                {tab.name === 'general' && (
                                    <>
                                        <PanelBody title={__("Loop Content Settings", "frontis-blocks")} initialOpen={true}>
                                            <SelectControl
                                                label={__("Post Type", "frontis-blocks")}
                                                value={postType}
                                                options={[
                                                    { label: __("Select Post Type", "frontis-blocks"), value: "" },
                                                    ...postTypeOptions
                                                ]}
                                                onChange={(value) => setAttributes({ postType: value })}
                                            />
                                            
                                            <RangeControl
                                                label={__("Posts Per Page", "frontis-blocks")}
                                                value={postsPerPage}
                                                onChange={(value) => setAttributes({ postsPerPage: value })}
                                                min={1}
                                                max={100}
                                            />
                                            
                                            <ToggleControl
                                                label={__("Show Featured Image", "frontis-blocks")}
                                                checked={showFeaturedImage}
                                                onChange={(value) => setAttributes({ showFeaturedImage: value })}
                                            />
                                            
                                            <ToggleControl
                                                label={__("Show Title", "frontis-blocks")}
                                                checked={showTitle}
                                                onChange={(value) => setAttributes({ showTitle: value })}
                                            />
                                            
                                            <ToggleControl
                                                label={__("Show Excerpt", "frontis-blocks")}
                                                checked={showExcerpt}
                                                onChange={(value) => setAttributes({ showExcerpt: value })}
                                            />
                                            
                                            {showExcerpt && (
                                                <RangeControl
                                                    label={__("Excerpt Length", "frontis-blocks")}
                                                    value={excerptLength}
                                                    onChange={(value) => setAttributes({ excerptLength: value })}
                                                    min={10}
                                                    max={300}
                                                />
                                            )}
                                            
                                            <ToggleControl
                                                label={__("Show Read More", "frontis-blocks")}
                                                checked={showReadMore}
                                                onChange={(value) => setAttributes({ showReadMore: value })}
                                            />
                                            
                                            {showReadMore && (
                                                <TextControl
                                                    label={__("Read More Text", "frontis-blocks")}
                                                    value={readMoreText}
                                                    onChange={(value) => setAttributes({ readMoreText: value })}
                                                />
                                            )}
                                        </PanelBody>
                                    </>
                                )}
                                
                                {tab.name === "query" && (
                                    <>
                                        <PanelBody title={__("Query Settings", "frontis-blocks")} initialOpen={true}>
                                            <SelectControl
                                                label={__("Order By", "frontis-blocks")}
                                                value={orderBy}
                                                options={[
                                                    { label: __("Date", "frontis-blocks"), value: "date" },
                                                    { label: __("Title", "frontis-blocks"), value: "title" },
                                                    { label: __("Author", "frontis-blocks"), value: "author" },
                                                    { label: __("ID", "frontis-blocks"), value: "id" },
                                                    { label: __("Comment Count", "frontis-blocks"), value: "comment_count" },
                                                    { label: __("Random", "frontis-blocks"), value: "rand" },
                                                ]}
                                                onChange={(value) => setAttributes({ orderBy: value })}
                                            />
                                            
                                            <SelectControl
                                                label={__("Order", "frontis-blocks")}
                                                value={order}
                                                options={[
                                                    { label: __("Descending", "frontis-blocks"), value: "desc" },
                                                    { label: __("Ascending", "frontis-blocks"), value: "asc" },
                                                ]}
                                                onChange={(value) => setAttributes({ order: value })}
                                            />
                                            
                                            <RangeControl
                                                label={__("Offset", "frontis-blocks")}
                                                value={offset}
                                                onChange={(value) => setAttributes({ offset: value })}
                                                min={0}
                                                max={100}
                                            />
                                            
                                            {postType === 'post' && (
                                                <>
                                                    <SelectControl
                                                        label={__("Categories", "frontis-blocks")}
                                                        value={includedCategories}
                                                        options={[
                                                            { label: __("All Categories", "frontis-blocks"), value: "" },
                                                            ...categoryOptions
                                                        ]}
                                                        onChange={(value) => setAttributes({ includedCategories: value })}
                                                        multiple
                                                    />
                                                    
                                                    <SelectControl
                                                        label={__("Tags", "frontis-blocks")}
                                                        value={includedTags}
                                                        options={[
                                                            { label: __("All Tags", "frontis-blocks"), value: "" },
                                                            ...tagOptions
                                                        ]}
                                                        onChange={(value) => setAttributes({ includedTags: value })}
                                                        multiple
                                                    />
                                                </>
                                            )}
                                        </PanelBody>
                                    </>
                                )}
                                
                                {tab.name === "layout" && (
                                    <>
                                        <PanelBody title={__("Layout Settings", "frontis-blocks")} initialOpen={true}>
                                            <RangeControl
                                                label={__("Columns", "frontis-blocks")}
                                                value={columns}
                                                onChange={(value) => setAttributes({ columns: value })}
                                                min={1}
                                                max={6}
                                            />
                                            
                                            <RangeControl
                                                label={__("Gap", "frontis-blocks")}
                                                value={gap}
                                                onChange={(value) => setAttributes({ gap: value })}
                                                min={0}
                                                max={100}
                                                help={__("Gap between items in pixels", "frontis-blocks")}
                                            />
                                        </PanelBody>
                                    </>
                                )}
                                
                                {tab.name === "styles" && (
                                    <>
                                        <PanelBody title={__("Item Styling", "frontis-blocks")} initialOpen={true}>
                                            {/* Add styling controls here */}
                                        </PanelBody>
                                    </>
                                )}
                                
                                {tab.name === "advanced" && (
                                    <>
                                        <PanelBody title={__("Advanced Settings", "frontis-blocks")} initialOpen={true}>
                                            {/* Add advanced settings here */}
                                        </PanelBody>
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