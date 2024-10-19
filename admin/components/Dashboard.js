import { __ } from '@wordpress/i18n';
import { ProBanner, SystemRequirements, VideoBanner } from './DashboardComponents';

const Dashboard = () => {
  return (
    <div className="fb-blocks-dashboard">
      <div className="fb-blocks-dashboard-left">
        {window.frontisBlocksAdmin.isProActive === 'false' && (<ProBanner />)}
        <VideoBanner />
      </div>
      <div className="fb-blocks-dashboard-right">
        <SystemRequirements />
      </div>
    </div>
  );
};

export default Dashboard;