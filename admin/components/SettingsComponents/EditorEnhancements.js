import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import Switch from 'rc-switch';

const EditorEnhancements = () => {
  const [options, setOptions] = useState({
    enableQuickActionBar: false,
    collapsePanel: false,
    enableTemplatesButton: false,
  });

  const handleSwitchChange = (option) => {
    setOptions((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));
  };

  return (
    <div className="fb-blocks-settings-options">
      <div className="fb-option">
        <div className="fb-option-label">
          <label>{__('Enable Quick Action Bar', 'frontis-blocks')}</label>
          <p>{__('Adds a quick action bar to the editor', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input">
          <Switch
            checked={options.enableQuickActionBar}
            onChange={() => handleSwitchChange('enableQuickActionBar')}
          />
        </div>
      </div>
      
      <div className="fb-option">
        <div className="fb-option-label">
          <label>{__('Collapse Panel', 'frontis-blocks')}</label>
          <p>{__('Allows collapsing of the editor panel', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input">
          <Switch
            checked={options.collapsePanel}
            onChange={() => handleSwitchChange('collapsePanel')}
          />
        </div>
      </div>
      
      <div className="fb-option">
        <div className="fb-option-label">
          <label>{__('Enable Templates Button', 'frontis-blocks')}</label>
          <p>{__('Adds a templates button to the editor', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input">
          <Switch
            checked={options.enableTemplatesButton}
            onChange={() => handleSwitchChange('enableTemplatesButton')}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorEnhancements;
