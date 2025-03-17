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
  __experimentalNumberControl as NumberControl
} from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
  const {
    blockID,
    postType,
    postsPerPage,
    loadMoreCount,
    orderBy,
    order,
    showLoadMoreButton,
    showFeaturedImage,
    showTitle,
    showContent,
    showCategories,
    alternateLayout
  } = attributes;

  // Get all available post types
  const postTypes = useSelect((select) => {
    const { getPostTypes } = select(coreStore);
    const filteredPostTypes = getPostTypes({ per_page: -1 })?.filter(
      (type) => type.viewable
    );
    return filteredPostTypes;
  }, []);

  // Create options for post type dropdown
  const postTypeOptions = postTypes?.map((type) => ({
    label: type.labels.singular_name,
    value: type.slug,
  })) || [{ label: 'Post', value: 'post' }];

  // Generate a unique ID for the block if not already set
  useEffect(() => {
    if (!blockID) {
      setAttributes({ blockID: 'fb-load-more-' + clientId.slice(0, 8) });
    }
  }, [blockID, clientId]);

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
                className: "fb-tab advance",
              },
            ]}
          >
            {(tab) => (
              <div className={"fb-tab-controls " + tab.name}>
                {tab.name === 'general' && (
                  <>
                    <PanelBody title={__("Post Settings", "frontis-blocks")} initialOpen={true}>
                      <SelectControl
                        label={__("Post Type", "frontis-blocks")}
                        value={postType}
                        options={postTypeOptions}
                        onChange={(value) => setAttributes({ postType: value })}
                      />
                      
                      <NumberControl
                        label={__("Posts Per Page", "frontis-blocks")}
                        value={postsPerPage}
                        onChange={(value) => setAttributes({ postsPerPage: parseInt(value) })}
                        min={1}
                        max={20}
                      />
                      
                      <NumberControl
                        label={__("Load More Count", "frontis-blocks")}
                        value={loadMoreCount}
                        onChange={(value) => setAttributes({ loadMoreCount: parseInt(value) })}
                        min={1}
                        max={20}
                        help={__("Number of posts to load with each 'Load More' click", "frontis-blocks")}
                      />
                      
                      <SelectControl
                        label={__("Order By", "frontis-blocks")}
                        value={orderBy}
                        options={[
                          { label: __("Date", "frontis-blocks"), value: "date" },
                          { label: __("Title", "frontis-blocks"), value: "title" },
                          { label: __("Menu Order", "frontis-blocks"), value: "menu_order" },
                          { label: __("Random", "frontis-blocks"), value: "rand" },
                        ]}
                        onChange={(value) => setAttributes({ orderBy: value })}
                      />
                      
                      <SelectControl
                        label={__("Order", "frontis-blocks")}
                        value={order}
                        options={[
                          { label: __("Ascending", "frontis-blocks"), value: "ASC" },
                          { label: __("Descending", "frontis-blocks"), value: "DESC" },
                        ]}
                        onChange={(value) => setAttributes({ order: value })}
                      />
                      
                      <ToggleControl
                        label={__("Show Load More Button", "frontis-blocks")}
                        checked={showLoadMoreButton}
                        onChange={() => setAttributes({ showLoadMoreButton: !showLoadMoreButton })}
                      />
                    </PanelBody>
                  </>
                )}
                {tab.name === "styles" && (
                  <>
                    <PanelBody title={__("Display Settings", "frontis-blocks")} initialOpen={true}>
                      <ToggleControl
                        label={__("Show Featured Image", "frontis-blocks")}
                        checked={showFeaturedImage}
                        onChange={() => setAttributes({ showFeaturedImage: !showFeaturedImage })}
                      />
                      
                      <ToggleControl
                        label={__("Show Title", "frontis-blocks")}
                        checked={showTitle}
                        onChange={() => setAttributes({ showTitle: !showTitle })}
                      />
                      
                      <ToggleControl
                        label={__("Show Content", "frontis-blocks")}
                        checked={showContent}
                        onChange={() => setAttributes({ showContent: !showContent })}
                      />
                      
                      <ToggleControl
                        label={__("Show Categories", "frontis-blocks")}
                        checked={showCategories}
                        onChange={() => setAttributes({ showCategories: !showCategories })}
                      />
                      
                      <ToggleControl
                        label={__("Alternate Layout (Left/Right)", "frontis-blocks")}
                        checked={alternateLayout}
                        onChange={() => setAttributes({ alternateLayout: !alternateLayout })}
                        help={__("Toggle to alternate item layout between left and right", "frontis-blocks")}
                      />
                    </PanelBody>
                  </>
                )}
                {tab.name === "advanced" && (
                  <>
                    <PanelBody title={__("Advanced Settings", "frontis-blocks")} initialOpen={true}>
                      {/* Add advanced settings here if needed */}
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