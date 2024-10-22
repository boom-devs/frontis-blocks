import { useState } from '@wordpress/element';

const TabPanel = ({ className, activeClass, onSelect, initialTabName, tabs, children }) => {

  const [ activeTab, setActiveTab ] = useState(tabs[ 0 ]?.name);
  const { version } = window.frontisBlocksAdmin;

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    onSelect(tabName);
  };

  return (
    <div className={`fb-blocks-tab-panel ${className}`}>
      <div className="fb-blocks-tab-panel-header">
        <div className="fb-blocks-tab-list">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`fb-blocks-tab-button ${initialTabName === tab.name ? `${activeClass} fb-blocks-active-tab` : ''}`}
              onClick={() => handleTabChange(tab.name)}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </button>
          ))}
        </div>
        <div className="fb-blocks-version">Free version: {version}</div>
      </div>
      <div className="fb-blocks-tab-content">
        {children(tabs.find((tab) => tab.name === activeTab))}
      </div>

    </div>
  );
};

export default TabPanel;
