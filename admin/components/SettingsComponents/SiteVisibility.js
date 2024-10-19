import { __ } from '@wordpress/i18n';
import { Select } from '@wordpress/components';
import { store as coreDataStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import Switch from 'rc-switch';
import { useState } from '@wordpress/element';

const SiteVisibility = () => {
  const [ options, setOptions ] = useState({
    coming_soon_mode: false,
    maintenance_mode: false,
    coming_soon_page_id: '',
    maintenance_page_id: ''
  });


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

  const handleChange = (key, value) => {
    setOptions({
      ...options,
      [key]: value
    });
    if (key === 'coming_soon_mode' && value === false) {
      setOptions({
        ...options,
        maintenance_mode: false
      });
    }
  };

  return (
    <div className="fb-blocks-settings-options">
      <div className="fb-option">
        <div className="fb-option-label">
          <label>{__('Enable Coming Soon Mode', 'frontis-blocks')}</label>
          <p>{__('Activate coming soon page for visitors', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input">
          <Switch
            checked={options.coming_soon_mode}
            onChange={(value) => handleChange('coming_soon_mode', value)}
          />
        </div>
      </div>
      {options.coming_soon_mode && (
        <div className="fb-option">
          <div className="fb-option-label">
            <label>{__('Select Coming Soon Page', 'frontis-blocks')}</label>
          </div>
          <div className="fb-option-input">
            <Select
              options={pageOptions}
              value={options.coming_soon_page_id}
              onChange={(value) => handleChange('coming_soon_page_id', value)}
            />
          </div>
        </div>
      )}
      <div className="fb-option">
        <div className="fb-option-label">
          <label>{__('Enable Maintenance Mode', 'frontis-blocks')}</label>
          <p>{__('Activate maintenance mode for visitors', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input">
          <Switch
            checked={options.maintenance_mode}
            onChange={(value) => handleChange('maintenance_mode', value)}
          />
        </div>
      </div>
      {options.maintenance_mode && (
        <div className="fb-option">
          <div className="fb-option-label">
            <label>{__('Select Maintenance Page', 'frontis-blocks')}</label>
          </div>
          <div className="fb-option-input">
            <Select
              options={pageOptions}
              value={options.maintenance_page_id}
              onChange={(value) => handleChange('maintenance_page_id', value)}
            />
          </div>
        </div>
      )}
    </div>
  );

};

export default SiteVisibility;
