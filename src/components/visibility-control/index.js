import { __ } from '@wordpress/i18n';
import { ToggleControl } from '@wordpress/components';
// import './editor.lazy.scss';


const FB_VisibilityControl = ({ 
    desktopLabel = __("Hide on Desktop", "frontis-blocks"),
    tabletLabel = __("Hide on Tablet", "frontis-blocks"),
    mobileLabel = __("Hide on Mobile", "frontis-blocks"),
    desktopValue,
    setDesktopValue,
    tabletValue,
    setTabletValue,
    mobileValue,
    setMobileValue,

}) => {

    const handleDesktopValue = (value) => {
		setDesktopValue(value);
	};
    const handleTabletValue = (value) => {
		setTabletValue(value);
	};
    const handleMobileValue = (value) => {
		setMobileValue(value);
	};

    return (
        <div className="fb-setting-visibility-container">
            <ToggleControl
                label={desktopLabel}
                className="fb-setting-visibility-control"
                checked={desktopValue}
                onChange={handleDesktopValue}
            />
            <ToggleControl
                label={tabletLabel}
                className="fb-setting-visibility-control"
                checked={tabletValue}
                onChange={handleTabletValue}
            />
            <ToggleControl
                label={mobileLabel}
                className="fb-setting-visibility-control"
                checked={mobileValue}
                onChange={handleMobileValue}
            />
        </div>
    );
};

export default FB_VisibilityControl;
