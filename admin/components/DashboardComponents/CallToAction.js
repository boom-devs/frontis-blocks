import { __ } from '@wordpress/i18n';
import { DocLinkIcon, CtaIcon } from '../../icons';


function CallToAction() {
  return (
      <div className="fb-dashboard-cta-card">
          <div className="fb-dashboard-cta-card-left">
                <span>
                    <CtaIcon />
                 </span>
                <div className="fb-cta-card-content">
                    <h3>{ __('Get 24/7 Fastest Support', 'frontis-blocks') }</h3>
                    <p>
                        { __(`The Frontis Block is a modern content creation tool designed for WordPress for a demographic`, 'frontis-blocks') }
                    </p>
                </div>
          </div>
          <div className="fb-dashboard-cta-card-right">
                <a 
                    href=""
                    className="fb-cat-button bg-white"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Knowledge Base <DocLinkIcon />
                </a>
                <a 
                    href=""
                    className="fb-cat-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Get Support <DocLinkIcon />
                </a>
          </div>
    </div>
  )
}

export default CallToAction;