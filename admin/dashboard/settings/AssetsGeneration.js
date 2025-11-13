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
  const [progress, setProgress] = useState(0);

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
    setProgress(0); // Add this state

    let batch = 0;
    let toastId = null; // To update the same toast

    const processBatch = () => {
      window.jQuery.ajax({
        url: ajaxUrl,
        type: 'POST',
        data: {
          action: 'fb_generate_assets',
          security: nonce,
          batch: batch,
        },
        success: function (response) {
          if (response.success) {
            // const totalProcessed = response.data.processed;
            // const totalPosts = response.data.total;
            // const progressPercent = Math.round((totalProcessed / totalPosts) * 100);

            // // Update progress bar
            // setProgress(progressPercent);

            // // Show or update toast only once
            // if (batch === 0) {
            //   toastId = toast.info(__(`Processing: ${totalProcessed}/${totalPosts} posts`), {
            //     autoClose: false,
            //     closeButton: false,
            //   });
            // } else {
            //   toast.update(toastId, {
            //     render: __(`Processing: ${totalProcessed}/${totalPosts} posts`),
            //   });
            // }

            // if (response.data.completed) {
            //   setIsLoading(false);
            //   setProgress(100);
            //   toast.dismiss(toastId);
            //   toast.success(__(response.data.message));
            // } else {
            //   // Process next batch
            //   batch++;
            //   processBatch();
            // }
          } else {
            setIsLoading(false);
            setProgress(0);
            if (toastId) toast.dismiss(toastId);
            toast.error(__(`Failed: ${response.data?.message || 'Unknown error'}`));
          }
        },
        error: function (xhr, status, error) {
          setIsLoading(false);
          setProgress(0);
          if (toastId) toast.dismiss(toastId);
          toast.error(__(`Failed: ${status} - ${error}`));
        },
      });
    };

    // Start processing
    processBatch();
  }, [ajaxUrl, nonce]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className="fb-blocks-settings-options">
		{/* <h3>{__('Assets Generation', 'frontis-blocks')}</h3> */}

		<div className="fb-option">
			<div className="fb-option-label">
				<h4 className="p1">{__('File Generation', 'frontis-blocks')}</h4>
				<p className="p2">{__('Enable automatic file generation', 'frontis-blocks')}</p>
			</div>
			<div className="fb-option-input">
				<p className="fb-button-upcoming">
					{__('Coming Soon', 'frontis-blocks')}
				</p>
			</div>
		</div>

		<div className="fb-option">
			<div className="fb-option-label">
				<h4 className="p1">{__('Asset Generation', 'frontis-blocks')}</h4>
				<p className="p2">{__('Generate assets for your blocks', 'frontis-blocks')}</p>
			</div>
			<div className={`fb-option-input ${isLoading ? 'fb-assets-generation-button-wrapper' : ''}`}>
				<Button
					className={`fb-button-error ${isLoading ? 'fb-assets-generation-button' : ''}`}
					onClick={handleAssetGeneration}
					disabled={isLoading}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
						<path d="M8.0013 2.66602V0.666016L5.33464 3.33268L8.0013 5.99935V3.99935C10.208 3.99935 12.0013 5.79268 12.0013 7.99935C12.0013 8.67268 11.8346 9.31268 11.5346 9.86602L12.508 10.8393C13.028 10.0193 13.3346 9.04602 13.3346 7.99935C13.3346 5.05268 10.948 2.66602 8.0013 2.66602ZM8.0013 11.9993C5.79464 11.9993 4.0013 10.206 4.0013 7.99935C4.0013 7.32602 4.16797 6.68602 4.46797 6.13268L3.49464 5.15935C2.97464 5.97935 2.66797 6.95268 2.66797 7.99935C2.66797 10.946 5.05464 13.3327 8.0013 13.3327V15.3327L10.668 12.666L8.0013 9.99935V11.9993Z" fill="white"/>
					</svg>
					{__('Regenerate Asset', 'frontis-blocks')}
				</Button>
				{isLoading && (
          <div className="asset-generation-progress">
            <div className="progress-bar-container">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="progress-text">{progress}% Complete</p>
          </div>
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