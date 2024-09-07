import { __ } from '@wordpress/i18n';
import { TabPanel } from '@wordpress/components';
import { FrontisIcon } from '../icons';

const MenuList = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      name: 'dashboard',
      title: __('Dashboard', 'frontis-blocks'),
      icon: FrontisIcon,
    },
    {
      name: 'blocks',
      title: __('Blocks', 'frontis-blocks'),
      icon: FrontisIcon,
    },
    {
      name: 'settings',
      title: __('Settings', 'frontis-blocks'),
      icon: FrontisIcon,
    },
    {
      name: 'integration',
      title: __('Integration', 'frontis-blocks'),
      icon: FrontisIcon,
    },
  ];

  return (
    <div className="frontis-blocks-menu-list">
      <div className="frontis-blocks-logo">
        <FrontisIcon />
        <h1>{__('Frontis Blocks', 'frontis-blocks')}</h1>
      </div>
      <TabPanel
        className="frontis-blocks-menu-tabs"
        activeClass="active-tab"
        onSelect={onTabChange}
        tabs={tabs}
      >
        {(tab) => (
          <button
            className={`frontis-blocks-menu-item ${
              activeTab === tab.name ? 'active' : ''
            }`}
          >
            <tab.icon />
            <span>{tab.title}</span>
          </button>
        )}
      </TabPanel>
    </div>
  );
};

export default MenuList;