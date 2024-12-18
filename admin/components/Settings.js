import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import SettingsTabs from './SettingsTabs';

const Settings = () => {
  const [activeTab, setActiveTab] = useState(SettingsTabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const ActiveComponent = SettingsTabs.find(tab => tab.id === activeTab).component;

  return (
    <div className="fb-blocks-settings">
      {/* <h2>{__('Settings', 'frontis-blocks')}</h2> */}
      <div className="fb-blocks-settings-container">
        <div className="fb-blocks-settings-tabs">
          {SettingsTabs.map((tab) => (
            <button
              key={tab.id}
              className={`fb-blocks-settings-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              <span className="fb-blocks-settings-tab-icon">{tab.icon}</span>
              <span className="fb-blocks-settings-tab-label">{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="fb-blocks-settings-content">
          <ActiveComponent />
        </div>
      </div>
    </div>
  );
};

export default Settings;
