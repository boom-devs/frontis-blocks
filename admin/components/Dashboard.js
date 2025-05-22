import { __ } from '@wordpress/i18n';
import { ProBanner, SystemRequirements, VideoBanner, IconCard, CallToAction } from './DashboardComponents';
import { ArrowRightIcon, CommunityIcon, DocumentationIcon, RateIcon } from '../icons';

const Dashboard = () => {
  return (
    <div className="fb-blocks-dashboard-container">
      <div className="fb-blocks-dashboard">
        <div className="fb-blocks-dashboard-left">
          {/* {window.frontisBlocksAdmin.isProActive === 'false' && (<ProBanner />)} */}
          <VideoBanner />
        </div>
        <div className="fb-blocks-dashboard-right">
          <SystemRequirements />
          <div className="fb-blocks-dashboard-right-bottom">
            <IconCard title="Missing Any Feature?" desc="We’re continually working to enhance Frontis Blocks for your benefit. If you have any suggestions for features that could improve your experience or ideas for new blocks, we’d love to hear from you!" btnText="Request Feature" btnLink="#" />
          </div>
        </div>
      </div>
      <div className="fb-blocks-dashboard-bottom">
        <div className="fb-blocks-dashboard-icon-card-area">
          <IconCard icon={<DocumentationIcon />} title="Documentation" desc="Documentation provides a comprehensive guide that explains the structure and functionality." btnText="Read More" btnLink="#" btnIcon={<ArrowRightIcon />} />
          <IconCard icon={<RateIcon />} title="Rate Us" desc="Frontis allows users to provide feedback on their experience with the site or its services." btnText="Read More" btnLink="#" btnIcon={<ArrowRightIcon />} />
          <IconCard icon={<CommunityIcon />} title="Join The Community" desc="Frontis invites users to become part of an engaged and interactive group." btnText="Read More" btnLink="#" btnIcon={<ArrowRightIcon />} />
        </div>
        <div className="fb-blocks-dashboard-cta-area">
          <CallToAction />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;