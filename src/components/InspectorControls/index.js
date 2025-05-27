import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';

const FB_InspectorControls = ({
  generalControls = null,
  styleControls = null,
  advancedControls = null,
}) => {
  return (
    <InspectorControls key="controls">
      <div className="fb-inspector-control">
        <TabPanel
          className="fb-parent-tab-panel"
          activeClass="active-tab"
          tabs={[
            { name: "general", title: __("General", "frontis-blocks"), className: "fb-tab general" },
            { name: "styles", title: __("Style", "frontis-blocks"), className: "fb-tab styles" },
            { name: "advanced", title: __("Extra", "frontis-blocks"), className: "fb-tab advanced" },
          ]}
        >
          {(tab) => (
            <div className={`fb-tab-controls ${tab.name}`}>
              {tab.name === 'general' && generalControls}
              {tab.name === 'styles' && styleControls}
              {tab.name === 'advanced' && advancedControls}
            </div>
          )}
        </TabPanel>
      </div>
    </InspectorControls>
  );
};

export default FB_InspectorControls;