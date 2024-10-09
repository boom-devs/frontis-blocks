import { __ } from '@wordpress/i18n';
import Switch from 'rc-switch';

const BlockCard = ({ block }) => {
    return (
        <div className="fb-block-card">
            <div className="fb-block-card-title">
                <h3>{block.name}</h3>
            </div>
            <div className="fb-block-card-options">

            </div>
        </div>
    );
};