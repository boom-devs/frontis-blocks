import { __ } from '@wordpress/i18n';
import { Crown } from '../../icons';


function ProBanner() {
  return (
      <div className="fb-pro-banner">
          <div className="fb-pro-title-flex">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path
                        stroke="#F89B2E"
                        strokeWidth={4}
                        d="m37.296 22.81.413-4.383c.324-3.442.486-5.164-.103-5.875a1.786 1.786 0 0 0-1.215-.662c-.856-.075-1.932 1.15-4.082 3.598-1.113 1.266-1.669 1.899-2.29 1.997a1.662 1.662 0 0 1-1.01-.162c-.573-.288-.955-1.07-1.72-2.636l-4.026-8.25C21.82 3.479 21.099 2 20 2c-1.098 0-1.82 1.479-3.264 4.437l-4.026 8.25c-.764 1.566-1.146 2.348-1.719 2.636-.317.16-.667.216-1.01.162-.621-.098-1.177-.731-2.29-1.997-2.15-2.449-3.226-3.673-4.082-3.598-.463.041-.896.277-1.215.662-.589.711-.427 2.433-.103 5.875l.413 4.384c.68 7.223 1.02 10.834 3.148 13.011C7.981 38 11.172 38 17.552 38h4.896c6.38 0 9.571 0 11.7-2.178 2.128-2.177 2.468-5.789 3.148-13.011Z"
                        />
                        <path
                        stroke="#F89B2E"
                        strokeLinecap="round"
                        strokeWidth={4}
                        d="M14.604 30.793h10.8"
                        />
                    </svg>
                </span>
              <h2>{ __('Upgrade to Pro for Access Premium Features!', 'frontis-blocks') }</h2>
          </div>
                <p>
                    { __(`Frontis Blocks is your ultimate companion for enhancing the WordPress Gutenberg editor. This plugin empowers users with a diverse set of advanced blocks, designed to elevate the functionality and design of your website. Whether you’re a seasoned developer or a beginner exploring WordPress, Frontis Blocks offers an intuitive and flexible solution for crafting responsive, visually stunning, and performance-optimized websites. With a wide range of customizable blocks, Frontis Blocks enables you to add dynamic elements, create engaging layouts, and deliver a professional-grade user experience, all without writing a single line of code.`, 'frontis-blocks') }
                </p>
                {/* <p>
                    { __(`Built with performance and usability in mind, Frontis Blocks integrates seamlessly into the Gutenberg editor. The plugin boasts blocks tailored for every need—from feature-rich text formats and media integrations to interactive components like sliders, tabs, and accordions. Each block is designed to simplify your workflow while ensuring that your site loads quickly and ranks higher in search engines. Whether you’re building a personal blog, a business site, or an eCommerce platform, Frontis Blocks is the perfect toolkit to bring your vision to life. Dive into the world of limitless creativity with Frontis Blocks and take your WordPress site to the next level!`, 'frontis-blocks') }
                </p> */}
              {window.frontisBlocksAdmin.isProActive === 'false' && (
                        <a 
                            href={window.frontisBlocksAdmin.pro_url} 
                            className="fb-upgrade-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Upgrade to Pro <Crown />
                        </a>
                    )}
    </div>
  )
}

export default ProBanner