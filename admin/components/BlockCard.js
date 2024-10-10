import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import Switch from 'rc-switch';

const BlockCard = ({ block }) => {
    const [isChecked, setIsChecked] = useState(block.status);

    const handleChange = (checked) => {
        setIsChecked(checked);
        // Here you would typically update the block status in your state or database
        // For example:
        // updateBlockStatus(block.slug, checked);
    };
    return (
        <div className="fb-block-card">
            <div className="fb-block-card-title">
                <h3>{block.title}</h3>
            </div>
            <div className="fb-block-card-options">
                <label htmlFor={ block.slug }
                    className="fb-admin-checkbox-label"
                >
                    <Switch
                        checked={ isChecked }
                        onChange={ handleChange }
                        checkedChildren="ON"
                        unCheckedChildren="OFF"
                    />
                </label>
            </div>
        </div>
    );
};

export default BlockCard;