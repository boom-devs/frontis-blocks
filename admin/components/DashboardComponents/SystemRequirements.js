import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { CheckIcon, XIcon } from '../../icons';

const SystemRequirements = () => {
    const [healthInfo, setHealthInfo] = useState(null);

    useEffect(() => {
        fetchHealthInfo();
    }, []);

    const fetchHealthInfo = async () => {
        try {
            const response = await apiFetch({ path: '/wp/v2/frontis-blocks/system-health' });
            setHealthInfo(response);
        } catch (error) {
            console.error('Error fetching system health info:', error);
        }
    };

    if (!healthInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="fb-system-requirements">
            <h2>{__('System Requirements', 'frontis-blocks')}</h2>
            <div className="fb-system-requirements-list">
                {healthInfo.map((item, index) => (
                    <div key={index} className={`fb-system-requirement-item ${item.status}`}>
                        {item.status === 'good' ? <CheckIcon /> : <XIcon />}
                        <span className="fb-requirement-label">{item.label}</span>
                        <span className="fb-requirement-value">{item.value}</span>
                    </div>
                ))}
            </div>
            <div className="fb-system-requirements-note">
                <p>{__('Note: The Frontis Block is a modern content creation tool designed for WordPress, offering a flexible and intuitive way to build web pages.', 'frontis-blocks')}</p>
            </div>
        </div>
    );
};

export default SystemRequirements;
