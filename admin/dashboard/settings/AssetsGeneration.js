// AssetsGeneration.js
import { __ } from '@wordpress/i18n';
import { useState, useEffect, useCallback } from '@wordpress/element';
import ConfirmationModal from '../../components/common/ConfirmationModal';
import { toast } from 'react-toastify';
import { Button } from '@wordpress/components';

const AssetsGeneration = () => {
  const [options, setOptions] = useState({
    file_generation: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { nonce, ajaxUrl } = window.frontisBlocksAdmin;

  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = () => {
    const keys = Object.keys(options);
    jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_get_options',
        security: nonce,
        keys: keys,
      },
      success: function (response) {
        if (response.success) {
          setOptions((prev) => ({ ...prev, ...response.data }));
        } else {
          toast.error(__(`Failed to fetch options: ${response.data?.message || 'Unknown error'}`), {
            position: "top-right",
            autoClose: 5000,
          });
        }
      },
      error: function (xhr, status, error) {
        toast.error(__(`Failed to fetch options: ${status} - ${error}`));
      },
    });
  };

  const saveOption = (key, value) => {
    return new Promise((resolve, reject) => {
      window.jQuery.ajax({
        url: ajaxUrl,
        type: 'POST',
        data: {
          action: `fb_${key}`,
          security: nonce,
          value: value,
        },
        success: function (response) {
          if (response.success) {
            setOptions((prev) => ({ ...prev, [key]: value }));
            toast.success(__(response.data.message));
            resolve(true);
          } else {
            toast.error(__(`Failed to save: ${response.data?.message || 'Error'}`));
            reject(new Error(response.data?.message));
          }
        },
        error: function (xhr, status, error) {
          toast.error(__(`Failed to save: ${status} - ${error}`));
          reject(new Error(`${status} - ${error}`));
        },
      });
    });
  };

  const handleSwitchChange = async (option) => {
    const newValue = !options[option];
    try {
      await saveOption(option, newValue ? '1' : '0');
      setOptions((prev) => ({ ...prev, [option]: newValue }));
    } catch {
      setOptions((prev) => ({ ...prev, [option]: !newValue }));
    }
  };

  const handleAssetGeneration = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const confirmAssetGeneration = useCallback(() => {
    setIsLoading(true);
    setIsModalOpen(false);

    window.jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_generate_assets',
        security: nonce,
      },
      success: function (response) {
        setIsLoading(false);
        if (response.success) {
          toast.success(__(response.data.message));
        } else {
          toast.error(__(`Failed: ${response.data?.message || 'Unknown error'}`));
        }
      },
      error: function (xhr, status, error) {
        setIsLoading(false);
        toast.error(__(`Failed: ${status} - ${error}`));
      },
    });
  }, [ajaxUrl, nonce]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className="fb-blocks-settings-options">
		{/* <h3>{__('Assets Generation', 'frontis-blocks')}</h3> */}

		<div className="fb-option">
			<div className="fb-option-label">
				<h3>{__('File Generation', 'frontis-blocks')}</h3>
				<p>{__('Enable automatic file generation', 'frontis-blocks')}</p>
			</div>
			<div className="fb-option-input">
				<p className="fb-button-upcoming">
					{__('Coming Soon', 'frontis-blocks')}
				</p>
			</div>
		</div>

		<div className="fb-option">
			<div className="fb-option-label">
				<h3>{__('Asset Generation', 'frontis-blocks')}</h3>
				<p>{__('Generate assets for your blocks', 'frontis-blocks')}</p>
			</div>
			<div className={`fb-option-input ${isLoading ? 'fb-assets-generation-button-wrapper' : ''}`}>
				<Button
					className={`fb-button-primary ${isLoading ? 'fb-assets-generation-button' : ''}`}
					onClick={handleAssetGeneration}
					disabled={isLoading}
				>
					{__('Regenerate Asset', 'frontis-blocks')}
				</Button>
				{isLoading && (
					<span className="fb-loading-spinner"></span>
				)}
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