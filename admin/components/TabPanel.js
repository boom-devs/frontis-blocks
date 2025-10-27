import { useState } from '@wordpress/element';
import { Logo, VersionIcon, StarIcons, Notifications } from '../icons';
import Button from './common/Button';

const TabPanel = ({ className, activeClass, onSelect, initialTabName, tabs, children }) => {

  const [ activeTab, setActiveTab ] = useState(tabs[ 0 ]?.name);
  const { version } = window.frontisBlocksAdmin;

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    onSelect(tabName);
  };

  const activePro = () => {

  }

  return (
    	<div className={`fb-blocks-tab-panel ${className}`}>
			<div className="fb-blocks-tab-panel-header">
				<div className="fb-blocks-tab-panel-header-left">
					<div className="fb-blocks-tab-panel-logo">
						<Logo />
					</div>
				</div>
				<div className='fb-blocks-tab-panel-header-center'>
					<div className="fb-blocks-tab-list">
						{tabs.map((tab) => (
							<button
								key={tab.name}
								className={`fb-blocks-tab-button ${tab.name}  ${initialTabName === tab.name ? `${activeClass} fb-blocks-active-tab` : ''}`}
								onClick={() => handleTabChange(tab.name)}
							>
								{tab.icon}
								<span>{tab.title}</span>
							</button>
						))}
					</div>
				</div>
				<div className='frontis-blocks-tab-panel-header-right'>
					<div className='frontis-blocks-upgrade-pro'>
						<Button text='Upgrade to Pro' icon={<StarIcons />} />
					</div>
					<div className="fb-blocks-version"><div>Version: <span className="fb-version">{version}</span></div></div>
					<div className='fb-blocks-notifications'><Notifications /></div>
				</div>
			</div>
			<div className="fb-blocks-tab-content">
				{children(tabs.find((tab) => tab.name === activeTab))}
			</div>
    	</div>
  	);
};

export default TabPanel;
