import { useState, useEffect } from "@wordpress/element";
const TemplateSidebar = () => {
  // Define tabs data structure
  const tabs = [
    { id: 'all', name: 'All', count: 30 },
    { id: 'content-blocks', name: 'Content Blocks', count: 14 },
    { id: 'creative', name: 'Creative', count: 5 },
    { id: 'dynamic', name: 'Dynamic', count: 30 },
    { id: 'layout', name: 'Layout', count: 30 },
    { id: 'form', name: 'Form', count: 30 },
    { id: 'social', name: 'Social', count: 30 }
  ];

  // State for active tab
  const [activeTab, setActiveTab] = useState('all');

  // Handler for tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="fb-template-library-store-sidebar">
      <div className="fb-template-library-store-sidebar-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`fb-template-library-store-sidebar-tab ${
              activeTab === tab.id ? 'active' : ''
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            <span className="fb-template-library-store-sidebar-tab-name">
              {tab.name}
            </span>
            <span className="fb-template-library-store-sidebar-tab-count">
              {String(tab.count).padStart(2, '0')}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSidebar;