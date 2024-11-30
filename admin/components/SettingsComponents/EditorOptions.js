import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import Switch from 'rc-switch';
import { useState, useEffect } from '@wordpress/element';
import { toast } from 'react-toastify';

const EditorOptions = () => {
  const [options, setOptions] = useState({
    default_content_width: '',
    button_inherit_from_theme: false,
    container_padding: '',
    container_elements_gap: '',
    custom_css: false,
    copy_paste_style: false,
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

  const handleNumberChange = (option, value) => {
    setOptions(prevOptions => ({ ...prevOptions, [option]: value }));
  };

  const handleNumberBlur = (option, value) => {
    saveOption(option, value);
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

  const NumberInputWithPx = ({ value, onChange, onBlur, min, max }) => (
    <div className="fb-option-input-with-px">
      <TextControl
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <span className="fb-option-input-px">px</span>
    </div>
  );

  return (
    <div className="fb-blocks-settings-options">
      {/* Notice component removed */}
      
      <div className="fb-option">
        <div className="fb-option-label">
          <h3>{__('Default Content Width', 'frontis-blocks')}</h3>
          <p>{__('Set the default width for content in pixels', 'frontis-blocks')}</p>
        </div>
        <NumberInputWithPx
          value={options.default_content_width}
          onChange={(value) => handleNumberChange('default_content_width', value)}
          onBlur={() => handleNumberBlur('default_content_width', options.default_content_width)}
          min={0}
          max={2000}
        />
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <h3>{__('Button - Inherit From Theme', 'frontis-blocks')}</h3>
          <p>{__('Use button styles from the current theme', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input">
          <Switch
            checked={options.button_inherit_from_theme}
            onChange={() => handleSwitchChange('button_inherit_from_theme')}
          />
        </div>
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <h3>{__('Container Padding', 'frontis-blocks')}</h3>
          <p>{__('Set the default padding for containers in pixels', 'frontis-blocks')}</p>
        </div>
        <NumberInputWithPx
          value={options.container_padding}
          onChange={(value) => handleNumberChange('container_padding', value)}
          onBlur={() => handleNumberBlur('container_padding', options.container_padding)}
          min={0}
          max={2000}
        />
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <h3>{__('Container Elements Gap', 'frontis-blocks')}</h3>
          <p>{__('Set the default gap between container elements in pixels', 'frontis-blocks')}</p>
        </div>
        <NumberInputWithPx
          value={options.container_elements_gap}
          onChange={(value) => handleNumberChange('container_elements_gap', value)}
          onBlur={() => handleNumberBlur('container_elements_gap', options.container_elements_gap)}
          min={0}
          max={2000}
        />
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <h3>{__('Custom CSS', 'frontis-blocks')}</h3>
          <p>{__('Enable custom CSS for blocks', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input">
          <Switch
            checked={options.custom_css}
            onChange={() => handleSwitchChange('custom_css')}
          />
        </div>
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <h3>{__('Copy Paste Style', 'frontis-blocks')}</h3>
          <p>{__('Enable copy and paste style functionality', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input">
          <Switch
            checked={options.copy_paste_style}
            onChange={() => handleSwitchChange('copy_paste_style')}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorOptions;
