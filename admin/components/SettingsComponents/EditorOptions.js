import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import Switch from 'rc-switch';
import { useState, useEffect } from '@wordpress/element';

const EditorOptions = () => {
  const [options, setOptions] = useState({
    default_content_width: '',
    button_inherit_from_theme: false,
    container_padding: '',
    container_elements_gap: '',
    custom_css: '',
    copy_paste_style: false,
  });

  const { nonce, ajaxUrl } = window.frontisBlocksAdmin;

  // useEffect(() => {
  //   fetchOptions();
  // }, []);

  // const fetchOptions = () => {
  //   const keys = Object.keys(options);
  //   jQuery.ajax({
  //     url: ajaxUrl,
  //     type: 'POST',
  //     data: {
  //       action: 'fb_get_options',
  //       nonce: nonce,
  //       keys: keys,
  //     },
  //     success: function(response) {
  //       if (response.success) {
  //         setOptions(prevOptions => ({ ...prevOptions, ...response.data }));
  //       } else {
  //         console.error('Failed to fetch options');
  //       }
  //     },
  //     error: function(xhr, status, error) {
  //       console.error('AJAX error:', status, error);
  //     }
  //   });
  // };

  const saveOption = (key, value) => {
    console.log('Sending AJAX request:', {
      url: ajaxUrl,
      action: `fb_${key}`,
      security: nonce,
      value: value
    });

    window.jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: `fb_${key}`,
        security: nonce,
        value: value,
      },
      success: function(response) {
        console.log('AJAX success response:', response);
        if (response.success) {
          console.log(`Option ${key} saved successfully`);
          setOptions(prevOptions => ({ ...prevOptions, [key]: value }));
        } else {
          console.error(`Failed to save option ${key}:`, response.data?.message);
        }
      },
      error: function(xhr, status, error) {
        console.error('AJAX error:', status, error);
        console.log('Full error response:', xhr.responseText);
        console.log('Status code:', xhr.status);
        console.log('Status text:', xhr.statusText);
      }
    });
  };

  const handleNumberChange = (option, value) => {
    setOptions(prevOptions => ({ ...prevOptions, [option]: value }));
  };

  const handleNumberBlur = (option, value) => {
    saveOption(option, value);
  };

  const handleSwitchChange = (option) => {
    const newValue = !options[option];
    setOptions(prevOptions => ({ ...prevOptions, [option]: newValue }));
    saveOption(option, newValue);
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
      
      <div className="fb-option">
        <div className="fb-option-label">
          <label>{__('Default Content Width', 'frontis-blocks')}</label>
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
          <label>{__('Button - Inherit From Theme', 'frontis-blocks')}</label>
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
          <label>{__('Container Padding', 'frontis-blocks')}</label>
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
          <label>{__('Container Elements Gap', 'frontis-blocks')}</label>
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
          <label>{__('Custom CSS', 'frontis-blocks')}</label>
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
          <label>{__('Copy Paste Style', 'frontis-blocks')}</label>
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
