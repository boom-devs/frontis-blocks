import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import Switch from 'rc-switch';
import { toast } from 'react-toastify';

const EditorEnhancements = () => {
  const [options, setOptions] = useState({
    enable_quick_action_bar: false,
    collapse_panel: false,
    enable_templates_button: false,
  });

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
            const errorDetails = response.data?.old_value !== undefined ? 
              ` (Old value: ${JSON.stringify(response.data.old_value)}, New value: ${JSON.stringify(response.data.new_value)}, Option name: ${response.data.option_name})` : '';
            toast.error(__(`Failed to save option: ${errorMessage}${errorDetails}`, 'frontis-blocks'), {
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

  const handleSwitchChange = async (option) => {
    const newValue = !options[option];
    try {
      await saveOption(option, newValue ? '1' : '0');
      setOptions(prevOptions => ({ ...prevOptions, [option]: newValue }));
    } catch (error) {
      // Revert the switch if saving failed
      setOptions(prevOptions => ({ ...prevOptions, [option]: !newValue }));
    }
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
            checked={options.enable_quick_action_bar}
            onChange={() => handleSwitchChange('enable_quick_action_bar')}
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
            checked={options.collapse_panel}
            onChange={() => handleSwitchChange('collapse_panel')}
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
            checked={options.enable_templates_button}
            onChange={() => handleSwitchChange('enable_templates_button')}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorEnhancements;
