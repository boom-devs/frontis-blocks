import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import Switch from 'rc-switch';
import { useState } from '@wordpress/element';

const AssetsGeneration = () => {
  const [options, setOptions] = useState({
    fileGeneration: false,
  });

  const handleSwitchChange = (option) => {
    setOptions(prevOptions => ({ ...prevOptions, [option]: !prevOptions[option] }));
  };

  const handleAssetGeneration = () => {
    // Add asset generation logic here
    console.log('Asset generation triggered');
  };

  return (
    <div className="fb-blocks-settings-options">
      <h3>{__('Assets Generation', 'frontis-blocks')}</h3>
      
      <div className="fb-option">
        <div className="fb-option-label">
          <label>{__('File Generation', 'frontis-blocks')}</label>
          <p>{__('Enable automatic file generation', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input">
          <Switch
            checked={options.fileGeneration}
            onChange={() => handleSwitchChange('fileGeneration')}
          />
        </div>
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <label>{__('Asset Generation', 'frontis-blocks')}</label>
          <p>{__('Generate assets for your blocks', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input">
          <Button
            isPrimary
            onClick={handleAssetGeneration}
          >
            {__('Generate Assets', 'frontis-blocks')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssetsGeneration;
