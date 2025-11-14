// Settings.js
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import SettingsTabs from './SettingsTabs';

const Settings = () => {
  const [activeTab, setActiveTab] = useState(SettingsTabs[0]?.id || 'assets');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Group by
  const groupedTabs = SettingsTabs.reduce((acc, tab) => {
    if (!acc[tab.group]) {
      acc[tab.group] = [];
    }
    acc[tab.group].push(tab);
    return acc;
  }, {});

  const tabTitle = SettingsTabs.find(tab => tab.id === activeTab)?.label;

  const ActiveComponent = SettingsTabs.find(tab => tab.id === activeTab)?.component;

  return (
    <div className="fb-blocks-settings">
      <div className="fb-video-banner-header">
        <h1 className='heading-1'>{__('Global Control', 'frontis-blocks')}</h1>
        <p className='p1'>
          {__('Global control allows users to easily enable or disable all available blocks together, simplifying block management.', 'frontis-blocks')}
        </p>
      </div>

      <div className="fb-blocks-settings-container">
        <div className="fb-blocks-settings-tabs">
          {Object.entries(groupedTabs).map(([groupName, tabs]) => (
            <div key={groupName} className="fb-settings-tabs-group">
              {/* Group Label */}
              <h3 className="fb-settings-tabs-group-title heading-4">{groupName}</h3>

              {/* Tabs in Group */}
              <div className="fb-settings-tabs-group-items">
                {tabs.map((tab) => (
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
            </div>
          ))}
        </div>

        <div className="fb-blocks-settings-content">
          <div className="fb-blocks-settings-content-header">
            <h3 className="fb-blocks-settings-content-title heading-3">{tabTitle}</h3>
          </div>
          {ActiveComponent ? <ActiveComponent /> : <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};

export default Settings;