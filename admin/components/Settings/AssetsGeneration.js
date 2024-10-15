import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import Switch from 'rc-switch';
import { useState, useCallback } from '@wordpress/element';
import ConfirmationModal from '../common/ConfirmationModal';

const AssetsGeneration = () => {
  const [options, setOptions] = useState({
    fileGeneration: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSwitchChange = (option) => {
    setOptions(prevOptions => ({ ...prevOptions, [option]: !prevOptions[option] }));
  };

  const handleAssetGeneration = useCallback(() => {
    console.log('handleAssetGeneration called');
    setIsModalOpen(true);
    console.log('isModalOpen set to:', true);
  }, []);

  const confirmAssetGeneration = useCallback(() => {
    console.log('Asset generation confirmed and triggered');
    setIsModalOpen(false);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  console.log('AssetsGeneration rendered, isModalOpen:', isModalOpen);

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
            className="fb-button-primary"
            onClick={handleAssetGeneration}
          >
            {__('Generate Assets', 'frontis-blocks')}
          </Button>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmAssetGeneration}
        title={__('Confirm Asset Generation', 'frontis-blocks')}
        message={__('Are you sure you want to generate assets? This process may take a few moments.', 'frontis-blocks')}
      />
    </div>
  );
};

export default AssetsGeneration;
