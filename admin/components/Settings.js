import { __ } from '@wordpress/i18n';
import { Card, CardHeader, CardBody, TextControl, SelectControl, Button } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';

const Settings = () => {
//   const settings = useSelect((select) => select('frontis-blocks').getSettings());
//   const { updateSettings } = useDispatch('frontis-blocks');

  const handleSave = () => {
    // Implement save functionality
  };

  return (
    <div className="frontis-blocks-settings">
      <h2>{__('Settings', 'frontis-blocks')}</h2>
      <Card>
        <CardHeader>
          <h3>{__('Global Settings', 'frontis-blocks')}</h3>
        </CardHeader>
        <CardBody>
          {/* <TextControl
            label={__('API Key', 'frontis-blocks')}
            value={settings.apiKey}
            onChange={(value) => updateSettings({ apiKey: value })}
          />
          <SelectControl
            label={__('Default Style', 'frontis-blocks')}
            value={settings.defaultStyle}
            options={[
              { label: __('Modern', 'frontis-blocks'), value: 'modern' },
              { label: __('Classic', 'frontis-blocks'), value: 'classic' },
            ]}
            onChange={(value) => updateSettings({ defaultStyle: value })}
          />
          <Button isPrimary onClick={handleSave}>
            {__('Save Settings', 'frontis-blocks')}
          </Button> */}
        </CardBody>
      </Card>
    </div>
  );
};

export default Settings;