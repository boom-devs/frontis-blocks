import { useState } from '@wordpress/element';

const TabPanel = ({ className, activeClass, onSelect, tabs, children }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.name);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    onSelect(tabName);
  };

  return (
    <div className={`frontis-tab-panel ${className}`}>
      <div className="frontis-tab-list">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`frontis-tab-button ${activeTab === tab.name ? activeClass : ''}`}
            onClick={() => handleTabChange(tab.name)}
          >
            {tab.icon}
            <span>{tab.title}</span>
          </button>
        ))}
      </div>
      <div className="frontis-tab-content">
        {children(tabs.find((tab) => tab.name === activeTab))}
      </div>
    </div>
  );
};

export default TabPanel;