import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import Switch from 'rc-switch';
import { Doc, Link } from '../icons';
const BlockCard = ({ block }) => {
    const [isChecked, setIsChecked] = useState(block.status === 'true');

    const handleChange = (checked) => {
        setIsChecked(checked);
        // Here you would typically update the block status in your backend
        // For example: updateBlockStatus(block.slug, checked);
    };

    return (
        <div className="fb-block-card">
            <div className="fb-block-card-icon">
                <img src={block.icon} alt={`${block.title} icon`} />
            </div>
            <div className="fb-block-card-content">
                <h3 className="fb-block-card-title">{block.title}</h3>
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
                    <Switch
                        checked={isChecked}
                        onChange={handleChange}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={24}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                        className="fb-block-card-switch-input"
                        id={`switch-${block.slug}`}
                    />
                </label>
            </div>
        </div>
    );
};

export default BlockCard;
