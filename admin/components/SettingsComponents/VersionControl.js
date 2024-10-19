import { __ } from '@wordpress/i18n';
import { Button, SelectControl } from '@wordpress/components';
import Switch from 'rc-switch';
import { useState } from '@wordpress/element';

const VersionControl = () => {
  const [options, setOptions] = useState({
    selectedVersion: '',
    enableBeta: false,
    enableLegacyBlock: false,
  });

  const handleSwitchChange = (option) => {
    setOptions(prevOptions => ({ ...prevOptions, [option]: !prevOptions[option] }));
  };

  const handleVersionChange = (value) => {
    setOptions(prevOptions => ({ ...prevOptions, selectedVersion: value }));
  };

  const handleRollback = () => {
    // I will Add rollback logic here
    console.log('Rollback triggered for version:', options.selectedVersion);
  };

  // Mock versions for the select control, will replace from the API
  const versions = [
    { label: 'Version 1.0.0', value: '1.0.0' },
    { label: 'Version 1.1.0', value: '1.1.0' },
    { label: 'Version 1.2.0', value: '1.2.0' },
  ];

  return (
    <div className="fb-blocks-settings-options">
      <div className="fb-option">
        <div className="fb-option-label">
          <label>{__('Rollback To Previous Version', 'frontis-blocks')}</label>
          <p>{__('Select a version to rollback to', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input fb-option-input-rollback">
          <SelectControl
            value={options.selectedVersion}
            options={versions}
            onChange={handleVersionChange}
          />
          <Button
            isPrimary
            onClick={handleRollback}
            disabled={!options.selectedVersion}
          >
            {__('Rollback', 'frontis-blocks')}
          </Button>
        </div>
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <label>{__('Enable Beta', 'frontis-blocks')}</label>
          <p>{__('Enable beta features', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input">
          <Switch
            checked={options.enableBeta}
            onChange={() => handleSwitchChange('enableBeta')}
          />
        </div>
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <label>{__('Enable Legacy Block', 'frontis-blocks')}</label>
          <p>{__('Enable support for legacy blocks', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input">
          <Switch
            checked={options.enableLegacyBlock}
            onChange={() => handleSwitchChange('enableLegacyBlock')}
          />
        </div>
      </div>
    </div>
  );
};

export default VersionControl;
