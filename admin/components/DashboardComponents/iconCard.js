
import { __ } from '@wordpress/i18n';


function IconCard({icon, title, desc, btnText, btnLink, btnIcon}) {
  return (
      <div className="fb-dashboard-icon-card card-v1">
        <a 
                href={btnLink ? btnLink : '#'} 
                className="fb-icon-card-button"
                target="_blank"
                rel="noopener noreferrer"
            >
            <div className="fb-icon-card-title-flex">
                {icon && <span>
                        {icon}
                    </span>}
                <h3 className='heading-4'>{ __(title, 'frontis-blocks') }</h3>
                
                {btnIcon && <span className='fb-arrow-icon'>
                    {btnIcon}
                </span>}
            </div>
            <div className="fb-icon-card-content-flex">
                    <p className='p1'>
                        { __(desc, 'frontis-blocks') }
                    </p>
            </div>
        </a>
    </div>
  )
}

export default IconCard