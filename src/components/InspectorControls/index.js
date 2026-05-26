import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';

const FB_InspectorControls = ({
  generalControls = null,
  styleControls = null,
  advancedControls = null
}) => {
  // Dynamically build the tabs list based on which controls are passed
  const tabs = [];

  if (generalControls) {
    tabs.push({ name: "general", title: __("Basic", "frontis-blocks"), className: "fb-tab general" });
  }
  if (styleControls) {
    tabs.push({ name: "styles", title: __("Style", "frontis-blocks"), className: "fb-tab styles" });
  }
  if (advancedControls) {
    tabs.push({ name: "advanced", title: __("Extra", "frontis-blocks"), className: "fb-tab advanced" });
  }

  // If no controls are passed, render nothing
  if (tabs.length === 0) {
    return null;
  }

  return (
    <InspectorControls key="controls">
      <div className="fb-inspector-control">
        {tabs.length === 1 ? (
          // If only one tab is present, don't show the tab headers, just render the content directly
          <div className={`fb-tab-controls ${tabs[0].name}`}>
            {tabs[0].name === 'general' && generalControls}
            {tabs[0].name === 'styles' && styleControls}
            {tabs[0].name === 'advanced' && advancedControls}
          </div>
        ) : (
          // Otherwise, render the TabPanel with the active tabs
          <TabPanel
            className="fb-parent-tab-panel"
            activeClass="active-tab"
            tabs={tabs}
          >
            {(tab) => (
              <div className={`fb-tab-controls ${tab.name}`}>
                {tab.name === 'general' && generalControls}
                {tab.name === 'styles' && styleControls}
                {tab.name === 'advanced' && advancedControls}
              </div>
            )}
          </TabPanel>
        )}
      </div>
    </InspectorControls>
  );
};

export default FB_InspectorControls;
