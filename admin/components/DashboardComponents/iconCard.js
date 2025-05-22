
import { __ } from '@wordpress/i18n';


function IconCard({icon, title, desc, btnText, btnLink, btnIcon}) {
  return (
      <div className="fb-dashboard-icon-card">
          <div className="fb-icon-card-title-flex">
              {icon && <span>
                    {icon}
                </span>}
              <h4>{ __(title, 'frontis-blocks') }</h4>
          </div>
          <div className="fb-icon-card-content-flex">
                <p>
                    { __(desc, 'frontis-blocks') }
                </p>
              {btnText && (
                        <a 
                            href={btnLink ? btnLink : '#'} 
                            className="fb-icon-card-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {btnText ? btnText : 'Read more'} 
                            {btnIcon && <span>
                                {btnIcon}
                            </span>}
                        </a>
                    )}
          </div>
    </div>
  )
}

export default IconCard