import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { Doc, Link } from '../../icons';
import FBSwitch from '../../components/common/Switch';

const BlockCard = ({ block, onChange }) => {
    const [ isChecked, setIsChecked ] = useState(block.status === '1' ? true : false);

    useEffect(() => {
        setIsChecked(block.status === '1' ? true : false);
    }, [block.status]);

    const handleChange = (checked) => {
        onChange(block.slug, checked);
    };


    if (block.child === 'true') {
        return null;
    }

    return (
        <div className="fb-block-card">
            <div className="fb-block-card-icon">
                <img src={block.icon} alt={`${block.title} icon`} />
            </div>
            <div className="fb-block-card-content">
                <h3 className="fb-block-card-title">
                    {block.title}
                    {block.badge !== 'free' && <span className={`fb-block-card-badge ${block.badge}`}>{block.badge}</span>}
                </h3>
                <div className="fb-block-card-links">
                    <a href={block.doc ? block.doc : 'https://frontis.com'} target="_blank" rel="noopener noreferrer" className="fb-block-card-link fb-block-card-doc">
                        {__('Documentation', 'frontis-blocks')}
                    </a>
                    <span className="fb-block-card-link-separator">|</span>
                    <a href={block.demo ? block.demo : 'https://frontis.com'} target="_blank" rel="noopener noreferrer" className="fb-block-card-link fb-block-card-demo">
                        {__('Demo', 'frontis-blocks')}
                    </a>
                </div>
            </div>
            <div className="fb-block-card-switch">
                <label htmlFor={`switch-${block.slug}`} className="fb-block-card-switch-label">
                    {block.complete === 'true' ? 
                        <FBSwitch
                            onChange={handleChange} 
                            checked={isChecked}
                        />
                    : 
                    <span className={`fb-block-card-upcoming`}>Upcoming</span>}
                </label>
            </div>
        </div>
    );
};

export default BlockCard;
