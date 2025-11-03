import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TabPanel from './TabPanel';
import TabMenus from './TabMenu';
import { Crown, Logo } from '../icons';

const App = () => {
    const getTabFromUrl = () => {
        const queryParams = new URLSearchParams(window.location.search);
        return queryParams.get("tab") || "general";
    };

    const [activeTab, setActiveTab] = useState(getTabFromUrl);

    useEffect(() => {
        const handlePopState = () => {
            setActiveTab(getTabFromUrl());
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

    const handleTabChange = (tabName) => {
        window.history.pushState(
            null,
            null,
            `?page=frontis-blocks&tab=${tabName}`
        );
        setActiveTab(tabName);
    };

    // Get the current tab from URL every render
    const currentTab = getTabFromUrl();

    return (
        <>
            <div className="frontis-blocks-admin">
                <div className='frontis-blocks-admin-top-bar'>
                    <p>Unlock Fontis Block's Full Potential!  <a href='https://wordpress.org/plugins/frontis-blocks/upgrade/'><b>Upgrade Now </b></a> for exclusive features and unbeatable performance.</p>
                </div>
                <TabPanel
                    className="frontis-blocks-tab-panel"
                    activeClass="active-tab"
                    onSelect={handleTabChange}
                    initialTabName={currentTab}
                    tabs={TabMenus.map(tab => ( {
                        name: tab.id,
                        title: tab.label,
                        icon: tab.icon,
                        className: `frontis-${tab.id}-tab`,
                    }))}
                >
                    {(tab) => {
                        // const activeTabData = TabMenus.find(t => t.id === tab.name);
                        return (
                            <div className={`frontis-blocks-tab-content ${tab.id}`}>
                                 {TabMenus.find(tab => tab.id === activeTab)?.comp}
                            </div>
                        );
                    }}
                </TabPanel>
            </div>
            <ToastContainer />
        </>
    );
};

export default App;