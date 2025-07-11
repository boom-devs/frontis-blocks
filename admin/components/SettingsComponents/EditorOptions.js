import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import Switch from 'rc-switch';
import { useState, useEffect } from '@wordpress/element';
import { toast } from 'react-toastify';
import { useDispatch, subscribe, select } from '@wordpress/data';
import { store as editorStore } from '@wordpress/editor';
import { desktop } from '@wordpress/icons';

// Move NumberInputWithPx component outside of EditorOptions
const NumberInputWithPx = ({ value, onChange, onBlur, min, max, device, onDeviceChange }) => {
  // Add local state to maintain focus during typing
  const [localValue, setLocalValue] = useState(value[device]);

  // Update local value when device changes or when options update from outside
  useEffect(() => {
    setLocalValue(value[device]);
  }, [device, value]);

  const handleChange = (newValue) => {
    // Update local state immediately to maintain input value
    setLocalValue(newValue);
    // Also update the parent state
    onChange(newValue);
  };

  const toggleDeviceVisibility = (e) => {
    const wrapper = e.currentTarget;
    wrapper.classList.toggle('fb-device-switchers-open');
  }

  return (
    <div className="fb-option-input-wrapper">
      <div className="fb-option-input-with-px">
        <TextControl
          type="number"
          min={min}
          max={max}
          value={localValue}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <span className="fb-option-input-px">px</span>
      </div>

      <div className="fb-setting-device-label-wrapper">
        <div className="fb-responsive-device-wrapper" onClick={toggleDeviceVisibility}>
          <div className="fb-responsive-device-inner-wrapper">
            <button className={`fb-device-switcher fb-responsive-desktop-device ${device === 'Desktop' ? 'active' : ''}`} onClick={() => onDeviceChange('Desktop')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.5 3.5C1.5 2.39543 2.39543 1.5 3.5 1.5H12.5C13.6046 1.5 14.5 2.39543 14.5 3.5V10C14.5 11.1046 13.6046 12 12.5 12H10.5V12.1716C10.5 12.5694 10.658 12.9509 10.9393 13.2322L11.3536 13.6464C11.4966 13.7894 11.5393 14.0045 11.4619 14.1913C11.3845 14.3782 11.2022 14.5 11 14.5H5C4.79777 14.5 4.61545 14.3782 4.53806 14.1913C4.46067 14.0045 4.50345 13.7894 4.64645 13.6464L5.06066 13.2322C5.34196 12.9509 5.5 12.5694 5.5 12.1716V12H3.5C2.39543 12 1.5 11.1046 1.5 10V3.5ZM2.5 3.5V8.5C2.5 9.05228 2.94772 9.5 3.5 9.5H12.5C13.0523 9.5 13.5 9.05228 13.5 8.5V3.5C13.5 2.94772 13.0523 2.5 12.5 2.5H3.5C2.94772 2.5 2.5 2.94772 2.5 3.5Z" fill="#555E72" />
              </svg>
            </button>
            <button className={`fb-device-switcher fb-responsive-tablet-device ${device === 'Tablet' ? 'active' : ''}`} onClick={() => onDeviceChange('Tablet')}>
              <svg width="6" height="7" viewBox="0 0 6 7"><path d="M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"></path></svg>
            </button>
            <button className={`fb-device-switcher fb-responsive-mobile-device ${device === 'Mobile' ? 'active' : ''}`} onClick={() => onDeviceChange('Mobile')}>
              <svg width="4" height="7" viewBox="0 0 4 7"><path d="M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const EditorOptions = () => {
  const [options, setOptions] = useState({
    default_content_width: {
      Desktop: '1200',
      Tablet: '1024',
      Mobile: '767',
    },
    button_inherit_from_theme: false,
    container_padding: '',
    container_elements_gap: '',
    custom_css: false,
    copy_paste_style: false,
  });

  const [device, setDevice] = useState('Desktop');

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
					const fetchedOptions = response.data;

					// If default_content_width is undefined or empty in DB, save your default
					if (!fetchedOptions.default_content_width) {
						saveOption('default_content_width', options.default_content_width);
					} else {
						setOptions(prevOptions => ({
							...prevOptions,
							...fetchedOptions,
							default_content_width: JSON.parse(fetchedOptions.default_content_width)
						}));
					}
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
      error: function (xhr, status, error) {
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
        success: function (response) {
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
        error: function (xhr, status, error) {
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

  const handleDevice = (deviceName) => {
    setDevice(deviceName);
  }

  const handleContentWidth = (value) => {
    setOptions(prevOptions => {
      const updatedWidth = {
        ...prevOptions.default_content_width,
        [device]: value
      };
      return {
        ...prevOptions,
        default_content_width: updatedWidth
      };
    });
  };

  return (
    <div className="fb-blocks-settings-options">
      <div className="fb-option">
        <div className="fb-option-label">
          <h3>{__('Default Content Width', 'frontis-blocks')}</h3>
          <p>{__('Set the default width for content in pixels', 'frontis-blocks')}</p>
        </div>
        <NumberInputWithPx
          value={options.default_content_width}
          onChange={handleContentWidth}
          onBlur={() => handleNumberBlur('default_content_width', options.default_content_width)}
          min={0}
          max={2000}
          device={device}
          onDeviceChange={handleDevice}
        />
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <h3>{__('Button - Inherit From Theme', 'frontis-blocks')}</h3>
          <p>{__('Use button styles from the current theme', 'frontis-blocks')}</p>
        </div>
        <p className="fb-button-upcoming">
          {__('Coming Soon', 'frontis-blocks')}
        </p>
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <h3>{__('Container Padding', 'frontis-blocks')}</h3>
          <p>{__('Set the default padding for containers in pixels', 'frontis-blocks')}</p>
        </div>
        <p className="fb-button-upcoming">
          {__('Coming Soon', 'frontis-blocks')}
        </p>
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <h3>{__('Container Elements Gap', 'frontis-blocks')}</h3>
          <p>{__('Set the default gap between container elements in pixels', 'frontis-blocks')}</p>
        </div>
        <p className="fb-button-upcoming">
          {__('Coming Soon', 'frontis-blocks')}
        </p>
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <h3>{__('Custom CSS', 'frontis-blocks')}</h3>
          <p>{__('Enable custom CSS for blocks', 'frontis-blocks')}</p>
        </div>
        <p className="fb-button-upcoming">
          {__('Coming Soon', 'frontis-blocks')}
        </p>
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <h3>{__('Copy Paste Style', 'frontis-blocks')}</h3>
          <p>{__('Enable copy and paste style functionality', 'frontis-blocks')}</p>
        </div>
        <p className="fb-button-upcoming">
          {__('Coming Soon', 'frontis-blocks')}
        </p>
      </div>
    </div>
  );
};

export default EditorOptions;
