import { useState, useEffect } from '@wordpress/element';
import { Logo, StarIcons, Notifications } from '../icons';
import Button from '../components/common/Button';
import PluginChangelog from '../components/common/PluginChangelog'; // Your modal

const TabPanel = ({ 
    className = '', 
    activeClass = 'active', 
    onSelect, 
    initialTabName, 
    tabs = [], 
    children 
}) => {
    const [activeTab, setActiveTab] = useState(initialTabName || tabs[0]?.name);
    const [isChangelogOpen, setIsChangelogOpen] = useState(false);
    const { version } = window.frontisBlocksAdmin || {};

    // Sync initial tab
    useEffect(() => {
        if (initialTabName && initialTabName !== activeTab) {
            setActiveTab(initialTabName);
        }
    }, [initialTabName]);

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
        onSelect?.(tabName);
    };

    return (
        <>
            <div className={`fb-blocks-tab-panel ${className}`.trim()}>
                {/* Header */}
                <div className="fb-blocks-tab-panel-header">
                    {/* Logo */}
                    <div className="fb-blocks-tab-panel-header-left">
                        <div className="fb-blocks-tab-panel-logo">
                            <Logo />
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="fb-blocks-tab-panel-header-center">
                        <div className="fb-blocks-tab-list">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.name}
                                    className={`
                                        fb-blocks-tab-button 
                                        ${tab.name} 
                                        ${activeTab === tab.name ? `${activeClass} fb-blocks-active-tab` : ''}
                                    `.trim()}
                                    onClick={() => handleTabChange(tab.name)}
                                >
                                    {tab.icon}
                                    <span>{tab.title}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="frontis-blocks-tab-panel-header-right">
                        {/* Upgrade Pro */}
                        <div className="frontis-blocks-upgrade-pro">
                            <Button text="Upgrade to Pro" icon={<StarIcons />} />
                        </div>

                        {/* Version */}
                        <div className="fb-blocks-version">
                            <div>
                                Version: <span className="fb-version">{version || '1.0.0'}</span>
                            </div>
                        </div>

                        {/* Notifications Bell */}
                        <div
                            className="fb-blocks-notifications"
                            onClick={() => setIsChangelogOpen(true)}
                            style={{ cursor: 'pointer' }}
                            title="View Changelog"
                        >
                            <Notifications />
                        </div>
                    </div>
                </div>

                {/* Tab Content */}
                <div className="fb-blocks-tab-content">
                    {children(tabs.find((tab) => tab.name === activeTab) || {})}
                </div>

                {/* Changelog Modal */}
                <PluginChangelog
                    isOpen={isChangelogOpen}
                    onClose={() => setIsChangelogOpen(false)}
                />
            </div>
        </>
    );
};

export default TabPanel;