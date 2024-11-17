import { __ } from '@wordpress/i18n';
import { Button, SelectControl } from '@wordpress/components';
import Switch from 'rc-switch';
import { useState, useEffect } from '@wordpress/element';
import { toast } from 'react-toastify';

const VersionControl = () => {
  const [options, setOptions] = useState({
    selected_version: '',
    enable_beta: false,
    enable_legacy_block: false,
  });

  const { ajaxUrl, nonce } = window.frontisBlocksAdmin;
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
      success: function(response) {
        if (response.success) {
          setOptions(prevOptions => ({ ...prevOptions, ...response.data }));
        } else {
          toast.error(__(`Failed to fetch options: ${response.data?.message || 'Unknown error'}`, 'frontis-blocks'), {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      },
      error: function(xhr, status, error) {
        toast.error(__(`Failed to fetch options: ${status} - ${error}`, 'frontis-blocks'), {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
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
        success: function(response) {
          if (response.success) {
            setOptions(prevOptions => ({ ...prevOptions, [key]: value }));
            toast.success(__(response.data.message, 'frontis-blocks'), {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            resolve(true);
          } else {
            const errorMessage = response.data?.message || 'Unknown error';
            toast.error(__(`Failed to save option: ${errorMessage}`, 'frontis-blocks'), {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
            reject(new Error(errorMessage));
          }
        },
        error: function(xhr, status, error) {
          const errorMessage = `${status} - ${error}`;
          toast.error(__(`Failed to save option: ${errorMessage}`, 'frontis-blocks'), {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          reject(new Error(errorMessage));
        }
      });
    });
  };

  const handleSwitchChange = (option) => {
    setOptions(prevOptions => ({ ...prevOptions, [option]: !prevOptions[option] }));
    saveOption(option, !prevOptions[option]);
  };

  const handleVersionChange = (value) => {
    setOptions(prevOptions => ({ ...prevOptions, selected_version: value }));
    saveOption('selected_version', value);
  };

  const handleRollback = () => {
    // I will Add rollback logic here
    console.log('Rollback triggered for version:', options.selected_version);
    saveOption('selected_version', options.selected_version);
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
          <h3>{__('Rollback To Previous Version', 'frontis-blocks')}</h3>
          <p>{__('Select a version to rollback to', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input fb-option-input-rollback">
          <SelectControl
            value={options.selected_version}
            options={versions}
            onChange={handleVersionChange}
          />
          <Button
            isPrimary
            onClick={handleRollback}
            disabled={!options.selected_version}
          >
            {__('Rollback', 'frontis-blocks')}
          </Button>
        </div>
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <h3>{__('Enable Beta', 'frontis-blocks')}</h3>
          <p>{__('Enable beta features', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input">
          <Switch
            checked={options.enable_beta}
            onChange={() => handleSwitchChange('enable_beta')}
          />
        </div>
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <h3>{__('Enable Legacy Block', 'frontis-blocks')}</h3>
          <p>{__('Enable support for legacy blocks', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input">
          <Switch
            checked={options.enable_legacy_block}
            onChange={() => handleSwitchChange('enable_legacy_block')}
          />
        </div>
      </div>
    </div>
  );
};

export default VersionControl;
