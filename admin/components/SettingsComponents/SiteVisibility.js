import { __ } from '@wordpress/i18n';
import { Select } from '@wordpress/components';
import { store as coreDataStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import Switch from 'rc-switch';
import { useState } from '@wordpress/element';

const SiteVisibility = () => {
  const [comingSoonMode, setComingSoonMode] = useState(false);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [comingSoonPage, setComingSoonPage] = useState('');
  const [maintenancePage, setMaintenancePage] = useState('');

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

  // const handleComingSoonChange = (checked) => {
  //   setComingSoonMode(checked);
  //   if (checked) {
  //     setMaintenanceMode(false);
  //   }
  // };

  // const handleMaintenanceChange = (checked) => {
  //   setMaintenanceMode(checked);
  //   if (checked) {
  //     setComingSoonMode(false);
  //   }
  // };

  return (
    <div className="fb-blocks-settings-options">
      <div className="fb-option">
        <div className="fb-option-label">
          <label>{__('Enable Coming Soon Mode', 'frontis-blocks')}</label>
          <p>{__('Activate coming soon page for visitors', 'frontis-blocks')}</p>
        </div>
        <div className="fb-option-input">
          <Switch
            checked={comingSoonMode}
          onChange={() => {
            setComingSoonMode(!comingSoonMode);
            setMaintenanceMode(false);
          }}
          />
        </div>
      </div>
      {comingSoonMode && (
        <div className="fb-option">
          <div className="fb-option-label">
            <label>{__('Select Coming Soon Page', 'frontis-blocks')}</label>
          </div>
          <div className="fb-option-input">
            <Select
              options={pageOptions}
              value={comingSoonPage}
              onChange={(value) => setComingSoonPage(value)}
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
            checked={maintenanceMode}
            onChange={() => {
            setMaintenanceMode(!maintenanceMode);
            setComingSoonMode(false);
          }}
          />
        </div>
      </div>
      {maintenanceMode && (
        <div className="fb-option">
          <div className="fb-option-label">
            <label>{__('Select Maintenance Page', 'frontis-blocks')}</label>
          </div>
          <div className="fb-option-input">
            <Select
              options={pageOptions}
              value={maintenancePage}
              onChange={(value) => setMaintenancePage(value)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteVisibility;
