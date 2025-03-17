import { __ } from '@wordpress/i18n';
import {
  useBlockProps,
  InspectorControls,
} from '@wordpress/block-editor';
import {
  PanelBody,
  TabPanel,
  __experimentalNumberControl as NumberControl,
  ToggleControl,
  Notice
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import './editor.scss';

export default function Inspector({ attributes, setAttributes, clientId }) {
  const {
    blockID,
    loadMoreCount,
    showLoadMoreButton,
  } = attributes;

  // Find parent Query Loop block if exists
  const parentQueryLoop = useSelect((select) => {
    const { getBlockParentsByBlockName, getBlockAttributes } = select('core/block-editor');
    const parentQueryLoopIds = getBlockParentsByBlockName(clientId, 'core/query');
    
    if (parentQueryLoopIds && parentQueryLoopIds.length > 0) {
      const parentId = parentQueryLoopIds[0];
      return getBlockAttributes(parentId);
    }
    return null;
  }, [clientId]);

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
                    <PanelBody title={__("Load More Settings", "frontis-blocks")} initialOpen={true}>
                      {!parentQueryLoop && (
                        <Notice status="warning" isDismissible={false}>
                          {__('This block must be placed inside a Post Loop to work properly.', 'frontis-blocks')}
                        </Notice>
                      )}
                      <ToggleControl
                        label={__("Show Load More Button", "frontis-blocks")}
                        checked={showLoadMoreButton}
                        onChange={() => setAttributes({ showLoadMoreButton: !showLoadMoreButton })}
                      />
                      <NumberControl
                        label={__("Load More Count", "frontis-blocks")}
                        value={loadMoreCount}
                        onChange={(value) => setAttributes({ loadMoreCount: parseInt(value) })}
                        min={1}
                        max={20}
                        help={__("Number of posts to load with each 'Load More' click", "frontis-blocks")}
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