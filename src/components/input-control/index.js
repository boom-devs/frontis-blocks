import { __ } from '@wordpress/i18n';
import {
    BaseControl,
    __experimentalInputControl as InputControl

} from '@wordpress/components';


const FB_InputControl = ({ label, value, onChangeValue, placeholder, helpText }) => {

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
                    placeholder={placeholder}
                    help={helpText}
                    className="fb-setting-input-control"
                />
            </BaseControl>
            
        </div>
        </>
    );
};


export default FB_InputControl;