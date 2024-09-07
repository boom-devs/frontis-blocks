import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { TabPanel } from '@wordpress/components';
import MenuList from './menuList';
import Dashboard from './dashboard';
import Settings from './settings';
import Blocks from './blocks';
import Integration from './integration';

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    {
      name: 'dashboard',
      title: __('Dashboard', 'frontis-blocks'),
      className: 'frontis-dashboard-tab',
      component: Dashboard,
    },
    {
      name: 'blocks',
      title: __('Blocks', 'frontis-blocks'),
      className: 'frontis-blocks-tab',
      component: Blocks,
    },
    {
      name: 'settings',
      title: __('Settings', 'frontis-blocks'),
      className: 'frontis-settings-tab',
      component: Settings,
    },
    {
      name: 'integration',
      title: __('Integration', 'frontis-blocks'),
      className: 'frontis-integration-tab',
      component: Integration,
    },
  ];

  return (
    <div className="frontis-blocks-admin">
      <MenuList activeTab={activeTab} onTabChange={setActiveTab} />
      <TabPanel
        className="frontis-blocks-tab-panel"
        activeClass="active-tab"
        onSelect={(tabName) => setActiveTab(tabName)}
        tabs={tabs}
      >
        {(tab) => <tab.component />}
      </TabPanel>
    </div>
  );
};

export default App;