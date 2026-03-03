import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';
import { store as coreDataStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import Switch from 'rc-switch';
import { useState, useEffect } from '@wordpress/element';
import { toast } from 'react-toastify';

const SiteVisibility = () => {
  const [options, setOptions] = useState({
    coming_soon_mode: false,
    maintenance_mode: false,
    coming_soon_page_id: '',
    maintenance_page_id: ''
  });

  const { nonce, ajaxUrl } = window.frontisBlocksAdmin;

  const { pages, hasResolved } = useSelect(
    select => ({
      pages: select(coreDataStore).getEntityRecords('postType', 'page', { per_page: -1 }),
      hasResolved: select(coreDataStore).hasFinishedResolution('getEntityRecords', ['postType', 'page', { per_page: -1 }])
    }),
    []
  );

  const pageOptions = hasResolved && pages ? pages.map(page => ({
    value: page.id.toString(),
    label: page.title.rendered
  })) : [];

  useEffect(() => {
    // fetchOptions();
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

  const handleChange = async (key, value) => {
    let updatedOptions = { ...options, [key]: value };

    if (key === 'coming_soon_mode' && value === true) {
      updatedOptions.maintenance_mode = false;
      await saveOption('maintenance_mode', false);

      if (!options.coming_soon_page_id && pageOptions.length > 0) {
        updatedOptions.coming_soon_page_id = pageOptions[0].value;
        await saveOption('coming_soon_page_id', pageOptions[0].value);
      }
    } else if (key === 'maintenance_mode' && value === true) {
      updatedOptions.coming_soon_mode = false;
      await saveOption('coming_soon_mode', false);

      if (!options.maintenance_page_id && pageOptions.length > 0) {
        updatedOptions.maintenance_page_id = pageOptions[0].value;
        await saveOption('maintenance_page_id', pageOptions[0].value);
      }
    }
    
    await saveOption(key, value);
    setOptions(updatedOptions);
  };

  return (
    <div className="fb-blocks-settings-options">
      <div className="fb-option">
        <div className="fb-option-label">
          <h4 className="p1">{__('Enable Coming Soon Mode', 'frontis-blocks')}</h4>
          <p className="p2">{__('Activate coming soon page for visitors', 'frontis-blocks')}</p>
        </div>
        {/* <div className="fb-option-input">
          <Switch
            checked={options.coming_soon_mode}
            onChange={(value) => handleChange('coming_soon_mode', value)}
          />
        </div> */}
        <p className="fb-button-upcoming">
          {__('Coming Soon', 'frontis-blocks')}
        </p>
      </div>
      {options.coming_soon_mode && (
        <div className="fb-option">
          <div className="fb-option-label">
            <h4 className="p1">{__('Select Coming Soon Page', 'frontis-blocks')}</h4>
          </div>
          {/* <div className="fb-option-input">
            <SelectControl
              options={pageOptions}
              value={options.coming_soon_page_id}
              onChange={(value) => handleChange('coming_soon_page_id', value)}
            />
          </div> */}
          <p className="fb-button-upcoming">
            {__('Coming Soon', 'frontis-blocks')}
          </p>
        </div>
      )}
      <div className="fb-option">
        <div className="fb-option-label">
          <h4 className="p1">{__('Enable Maintenance Mode', 'frontis-blocks')}</h4>
          <p className="p2">{__('Activate maintenance mode for visitors', 'frontis-blocks')}</p>
        </div>
        {/* <div className="fb-option-input">
          <Switch
            checked={options.maintenance_mode}
            onChange={(value) => handleChange('maintenance_mode', value)}
          />
        </div> */}
        <p className="fb-button-upcoming">
          {__('Coming Soon', 'frontis-blocks')}
        </p>
      </div>
      {options.maintenance_mode && (
        <div className="fb-option">
          <div className="fb-option-label">
            <h4 className="p1">{__('Select Maintenance Page', 'frontis-blocks')}</h4>
          </div>
          {/* <div className="fb-option-input">
            <SelectControl
              options={pageOptions}
              value={options.maintenance_page_id}
              onChange={(value) => handleChange('maintenance_page_id', value)}
            />
          </div> */}
          <p className="fb-button-upcoming">
            {__('Coming Soon', 'frontis-blocks')}
          </p>
        </div>
      )}
    </div>
  );
};

export default SiteVisibility;
