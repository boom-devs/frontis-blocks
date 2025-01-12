import { __ } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import Switch from 'rc-switch';
import { Doc, Link } from '../icons';

const BlockCard = ({ block, onChange }) => {
    const [ isChecked, setIsChecked ] = useState(block.status === '1');
    
    const { isProActive } = window.frontisBlocksAdmin;

    useEffect(() => {
        setIsChecked(block.status === '1');
    }, [block.status]);

    const handleChange = (checked) => {
        onChange(block.slug, checked);
        setIsChecked(checked);
    };

    console.log(block);


    if (block.child === 'true') {
        return null; // You can return null if you don't want to render anything for child blocks
    }

    return (
        <div className="fb-block-card">
            <div className="fb-block-card-icon">
                <img src={block.icon} alt={`${block.title} icon`} />
            </div>
            <div className="fb-block-card-content">
                <div>
                    <h3 className="fb-block-card-title">
                        {block.title}
                        {block.badge !== 'free' && <span className={`fb-block-card-badge ${block.badge}`}>{block.badge}</span>}
                    </h3>
                </div>
                <div className="fb-block-card-links">
                    <a href={block.doc ? block.doc : 'https://frontis.com'} target="_blank" rel="noopener noreferrer" className="fb-block-card-link fb-block-card-doc">
                        <Doc />
                        {__('Documentation', 'frontis-blocks')}
                    </a>
                    <a href={block.demo ? block.demo : 'https://frontis.com'} target="_blank" rel="noopener noreferrer" className="fb-block-card-link fb-block-card-demo">
                        <Link />
                        {__('Demo', 'frontis-blocks')}
                    </a>
                </div>
            </div>
            <div className="fb-block-card-switch">
                <label htmlFor={`switch-${block.slug}`} className="fb-block-card-switch-label">
                    {block.complete === 'true' ? 
                        <Switch
                            checked={isChecked}
                            onChange={handleChange}
                            className="fb-block-card-switch-input"
                            id={`switch-${block.slug}`}
                            disabled={
                                isProActive === 'false' && block.package === 'pro' ? true : false
                            }
                        />
                    : 
                    <span className={`fb-block-card-upcoming`}>Upcoming</span>}
                </label>
            </div>
        </div>
    );
};

export default BlockCard;
