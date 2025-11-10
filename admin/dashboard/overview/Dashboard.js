import { __ } from '@wordpress/i18n';
import { ArrowRightIcon, CommunityIcon, DocumentationIcon, RateIcon, SupportIcon } from '../../icons';
import ProUpgradeCard from './ProUpgradeCard';
import FAQAccordion from './FAQAccordion';
import SystemRequirements from './SystemRequirements';
import VideoBanner from './VideoBanner';
import IconCard from './IconCard';

const Dashboard = () => {
  return (
    <div className="fb-blocks-dashboard-container">
      <div className="fb-blocks-dashboard">
        <div className="fb-blocks-dashboard-left">
          {/* {window.frontisBlocksAdmin.isProActive === 'false' && (<ProBanner />)} */}
          <VideoBanner />

          <div className="fb-blocks-dashboard-bottom">
            <div className='fb-blocks-acknowledgement'>
              <h2 className='heading-2'>{__('Resources & Knowledge Base', 'frontis-blocks')}</h2>
              <p className='p1'>{__('Discover a wealth of information with our extensive resources and knowledge base. Access detailed articles, guides, FAQs, and troubleshooting tips to help you maximize the potential of plugin.', 'frontis-blocks')}</p>
            </div>
            <div className="fb-blocks-dashboard-icon-card-area">
              <IconCard icon={<DocumentationIcon />} title="Documentation" desc="Documentation provides a comprehensive guide that explains the structure and functionality." btnText="Read More" btnLink="https://docs.wpmessiah.com/" btnIcon={<ArrowRightIcon />} />
              <IconCard icon={<CommunityIcon />} title="Join The Community" desc="Become a part of the community! Connect, share your experiences, ask questions, and get the latest updates." btnText="Read More" btnLink="https://www.facebook.com/groups/wpmessiah" btnIcon={<ArrowRightIcon />} />
              <IconCard icon={<RateIcon />} title="Rate This Plugin" desc="Frontis allows users to provide feedback on their experience with the site or its services." btnText="Read More" btnLink="https://wordpress.org/support/plugin/frontis-blocks/reviews/" btnIcon={<ArrowRightIcon />} />
              <IconCard icon={<SupportIcon />} title="Support 24/7" desc="Frontis invites users to become part of an engaged and interactive group." btnText="Read More" btnLink="https://support.wpmessiah.com/" btnIcon={<ArrowRightIcon />} />
            </div>
            
            {/* Accordion section */}
            <div className='fb-blocks-accordion-area'>
              <h2 className='heading-2'>{__('Frequently Asked Questions', 'frontis-blocks')}</h2>
              <p className='p1'>{__('Find answers to common queries. Our FAQ section covers everything from installation to troubleshooting, ensuring you have the information you need to make the most of our plugin.', 'frontis-blocks')}</p>
            </div>
            <FAQAccordion />
          </div>
        </div>
        <div className="fb-blocks-dashboard-right">
          <SystemRequirements />
          <div className="fb-blocks-dashboard-right-bottom">
              <ProUpgradeCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


// module.exports = {
//   apps: [
//     {
//       name: 'shopify-app',
//       script: 'npm',
//       args: 'start',
//       cwd: '/root/shopify',
//       instances: 1,
//       exec_mode: 'fork',
//       watch: false,
//       autorestart: true,
//       max_restarts: 10,
//       min_uptime: '10s',
//       env: {
//           NODE_ENV: 'production',
//           PORT: 3000,
//           SHOPIFY_APP_URL: 'https://aialt-text.wpmessiah.com',
//           SHOPIFY_API_KEY: 'f679740019f2eb9757fa9e6bc5facaa0',
//           SHOPIFY_API_SECRET: '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',
//               DATABASE_URL: 'mysql://admin:6>"F-75JaC}I@localhost:3306/shopify_alt_text',
//           SCOPES: 'read_files,write_files,write_products',
//           HOST: '0.0.0.0',  // Changed to bind to all IPv4 interfaces
//       },
//     },
//   ],
// };

// DATABASE_URL='mysql://admin:6>"F-75JaC}I@localhost:3306/shopify_alt_text'
// SHOPIFY_APP_URL=https://aialt-text.wpmessiah.com
// SHOPIFY_API_KEY=f679740019f2eb9757fa9e6bc5facaa0
// SHOPIFY_API_SECRET=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
// SCOPES=read_files,write_files,write_products
// PORT=3000
// HOST='0.0.0.0'

// const url = new URL(request.url);

//   if (url.searchParams.get("shop")) {
//     throw redirect(`/app?${url.searchParams.toString()}`);
//   }

//   return { showForm: Boolean(login) };