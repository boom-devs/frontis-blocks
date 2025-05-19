import { __ } from '@wordpress/i18n';
import {
    BaseControl,
    __experimentalInputControl as InputControl

} from '@wordpress/components';
// import './editor.lazy.scss';


const FB_InputControl = ({ label, value, onChangeValue, helpText }) => {

    const handleChange = (newValue) => {
        onChangeValue(newValue);
    };
    
    return (
        <>
        <div className="fb-setting-input-control-wrapper">
            <BaseControl
                label={label}
                className="fb-setting-label-text"
            >
                <InputControl
                    value={value}
                    onChange={handleChange}
                    help={helpText}
                    className="fb-setting-input-control"
                />
            </BaseControl>
            
        </div>
        </>
    );
};


export default FB_InputControl;