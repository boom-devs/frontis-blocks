import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import Switch from 'rc-switch';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const EditorOptions = () => {
  const [options, setOptions] = useState({
    fb_default_content_width: '',
    fb_button_inherit_from_theme: false,
    fb_container_padding: '',
    fb_container_elements_gap: '',
    fb_custom_css: false,
    fb_copy_paste_style: false,
  });

    const { nonce } = window.frontisBlocksAdmin;
    

  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = () => {
    const keys = Object.keys(options);
    apiFetch({
      path: '/frontis-blocks/v1/get-options',
      method: 'POST',
      data: {
        nonce: nonce,
        keys: keys,
      },
    }).then((response) => {
      if (response.success) {
        setOptions(prevOptions => ({ ...prevOptions, ...response.data }));
      } else {
        console.error('Failed to fetch options');
      }
    });
  };

  

  const saveOption = (key, value) => {
    apiFetch({
      path: '/frontis-blocks/v1/save-option',
      method: 'POST',
      data: {
        nonce: nonce,
        key: key,
        value: value,
      },
    }).then((response) => {
      if (response.success) {
        console.log(`Option ${key} saved successfully`);
      } else {
        console.error(`Failed to save option ${key}`);
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
      <h3>{__('Editor Options', 'frontis-blocks')}</h3>
      
      <div className="fb-option">
        <div className="fb-option-label">
          <label>{__('Default Content Width', 'frontis-blocks')}</label>
          <p>{__('Set the default width for content in pixels', 'frontis-blocks')}</p>
        </div>
        <NumberInputWithPx
          value={options.fb_default_content_width}
          onChange={(value) => handleNumberChange('fb_default_content_width', value)}
          onBlur={() => handleNumberBlur('fb_default_content_width', options.fb_default_content_width)}
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
            checked={options.fb_button_inherit_from_theme}
            onChange={() => handleSwitchChange('fb_button_inherit_from_theme')}
          />
        </div>
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <label>{__('Container Padding', 'frontis-blocks')}</label>
          <p>{__('Set the default padding for containers in pixels', 'frontis-blocks')}</p>
        </div>
        <NumberInputWithPx
          value={options.fb_container_padding}
          onChange={(value) => handleNumberChange('fb_container_padding', value)}
          onBlur={() => handleNumberBlur('fb_container_padding', options.fb_container_padding)}
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
          value={options.fb_container_elements_gap}
          onChange={(value) => handleNumberChange('fb_container_elements_gap', value)}
          onBlur={() => handleNumberBlur('fb_container_elements_gap', options.fb_container_elements_gap)}
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
            checked={options.fb_custom_css}
            onChange={() => handleSwitchChange('fb_custom_css')}
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
            checked={options.fb_copy_paste_style}
            onChange={() => handleSwitchChange('fb_copy_paste_style')}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorOptions;
