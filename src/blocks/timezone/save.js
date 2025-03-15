import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { blockID, location, officeHours, startTime, title, officeStatus } = attributes;

    const blockProps = useBlockProps.save({
        className: `fb-timezone-block ${blockID}`,
    });
    
    // We'll add data attributes to the container that our frontend JS can use
    const dataAttributes = {
        'data-location': location || 'Dhaka, Bangladesh',
        'data-office-hours': officeHours || '8',
        'data-start-time': startTime || '9:00',
        'data-title': title || '',
        'data-office-status': officeStatus ? 'true' : 'false'
    };
    
    return (
        <div {...blockProps}>
            <div className="fb-timezone-container" {...dataAttributes}>
                <div className="fb-timezone-header">
                    <div className="fb-timezone-time">
                        {/* This will be populated by frontend JS */}
                        <span className="fb-timezone-time-display"></span>
                        <span className="fb-timezone-timezone"></span>
                    </div>
                    <div className={`fb-timezone-status ${officeStatus ? 'open' : 'close'}`}>
                        <span className="fb-timezone-status-badge">
                            {officeStatus ? 
                                <span><div className="circle pulse open"></div> Open</span> : 
                                <span><div className="circle pulse close"></div> Close</span>
                            }
                        </span>
                        <span className="fb-timezone-status-icon"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}