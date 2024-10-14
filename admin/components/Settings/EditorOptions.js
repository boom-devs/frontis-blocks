import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import Switch from 'rc-switch';
import { useState } from '@wordpress/element';

const EditorOptions = () => {
  const [options, setOptions] = useState({
    defaultContentWidth: '',
    buttonInheritFromTheme: false,
    containerPadding: '',
    containerElementsGap: '',
    customCSS: false,
    copyPasteStyle: false,
  });

  const handleNumberChange = (option, value) => {
    setOptions(prevOptions => ({ ...prevOptions, [option]: value }));
  };

  const handleSwitchChange = (option) => {
    setOptions(prevOptions => ({ ...prevOptions, [option]: !prevOptions[option] }));
  };

  const NumberInputWithPx = ({ value, onChange, min, max }) => (
    <div className="fb-option-input-with-px">
      <TextControl
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
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
          value={options.defaultContentWidth}
                  onChange={ (value) => handleNumberChange('defaultContentWidth', value) }
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
            checked={options.buttonInheritFromTheme}
            onChange={() => handleSwitchChange('buttonInheritFromTheme')}
          />
        </div>
      </div>

      <div className="fb-option">
        <div className="fb-option-label">
          <label>{__('Container Padding', 'frontis-blocks')}</label>
          <p>{__('Set the default padding for containers in pixels', 'frontis-blocks')}</p>
        </div>
        <NumberInputWithPx
          value={options.containerPadding}
                  onChange={ (value) => handleNumberChange('containerPadding', value) }
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
          value={options.containerElementsGap}
                  onChange={ (value) => handleNumberChange('containerElementsGap', value) }
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
            checked={options.customCSS}
            onChange={() => handleSwitchChange('customCSS')}
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
            checked={options.copyPasteStyle}
            onChange={() => handleSwitchChange('copyPasteStyle')}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorOptions;
