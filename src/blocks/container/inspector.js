import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TabPanel } from '@wordpress/components';

const Inspector = ({ attributes, setAttributes }) => {
  const { htmlTag } = attributes;

  return (
    <InspectorControls>
      <TabPanel
        className="fb-container-inspector-tabs"
        tabs={[
          { name: 'general', title: __('General', 'frontis-blocks') },
          { name: 'style', title: __('Style', 'frontis-blocks') },
          { name: 'advanced', title: __('Advanced', 'frontis-blocks') },
        ]}
      >
        {(tab) => {
          if (tab.name === 'general') {
            return (
              <PanelBody>
                <SelectControl
                  label={__('HTML Tag', 'frontis-blocks')}
                  value={htmlTag}
                  options={[
                    { label: 'div', value: 'div' },
                    { label: 'section', value: 'section' },
                    { label: 'article', value: 'article' },
                  ]}
                  onChange={(value) => setAttributes({ htmlTag: value })}
                />
                {/* Add more general settings here */}
              </PanelBody>
            );
          }
          if (tab.name === 'style') {
            return (
              <PanelBody>
                {/* Add style settings here */}
              </PanelBody>
            );
          }
          if (tab.name === 'advanced') {
            return (
              <PanelBody>
                {/* Add advanced settings here */}
              </PanelBody>
            );
          }
        }}
      </TabPanel>
    </InspectorControls>
  );
};

export default Inspector;