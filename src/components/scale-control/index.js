// background-color.js
import { __ } from '@wordpress/i18n';
import { 
    Button, 
    BaseControl, 
    Dropdown,
    ToggleControl,
    
} from '@wordpress/components';

import FB_Range from '@Components/range';
import './editor.lazy.scss';

const FB_ScaleControl = ({
    label = __("Scale", "frontis-blocks"),
    proportions,
    setProportions,
    scale,
    setScale,
    scaleX,
    setScaleX,
    scaleY,
    setScaleY,
    deviceType,
    setAttributes,
}) => {


    return (

        <>
            <BaseControl
                className="fb-setting-background-color-setting-wrapper"
                label={label}
            >
                <Dropdown
                    className="fb-setting-background-color-setting-icon-dropdown"
                    contentClassName="fb-setting-background-color-setting-icon-dropdown-content"
                    popoverProps={{ placement: 'bottom-start' }}
                    renderToggle={({ isOpen, onToggle }) => (
                        <Button
                            variant="primary"
                            onClick={onToggle}
                            aria-expanded={isOpen}
                            className="fb-setting-background-color-setting-icon-btn"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M2.66699 14.666H13.3337" stroke="#1C274C"/>
                                <path d="M9.25906 2.4426L9.75339 1.94826C10.5724 1.12922 11.9003 1.12922 12.7194 1.94826C13.5384 2.76731 13.5384 4.09524 12.7194 4.91428L12.2251 5.40862M9.25906 2.4426C9.25906 2.4426 9.32079 3.49306 10.2477 4.41994C11.1746 5.34682 12.2251 5.40862 12.2251 5.40862M9.25906 2.4426L4.71437 6.98725C4.40655 7.29505 4.25263 7.44898 4.12027 7.61872C3.96413 7.81885 3.83027 8.03545 3.72104 8.26465C3.62845 8.45892 3.55962 8.66545 3.42196 9.07845L2.83863 10.8285M12.2251 5.40862L7.68039 9.95325C7.37259 10.2611 7.21866 10.415 7.04893 10.5474C6.84879 10.7035 6.63216 10.8374 6.40298 10.9466C6.2087 11.0392 6.00221 11.1081 5.58922 11.2457L3.83922 11.8291M2.83863 10.8285L2.69603 11.2562C2.62829 11.4595 2.68118 11.6835 2.83266 11.835C2.98415 11.9865 3.20821 12.0394 3.41144 11.9716L3.83922 11.8291M2.83863 10.8285L3.83922 11.8291" stroke="#1C274C"/>
                            </svg>
                        </Button>
                    )}
                    renderContent={() => (
                        <div className="fb-setting-background-color-popup-wrapper">
                            <BaseControl
                                className="fb-setting-background-color-popup-inner-wrapper"
                            >
                                <ToggleControl
                                    label={__("Keep Proportions", "frontis-blocks")}
                                    checked={proportions}
                                    onChange={(value) => setProportions(value)}
                                />

                                {proportions ? (
                                    <FB_Range
                                        min={0}
                                        max={2}
                                        label={__("Scale", "frontis-blocks")}
                                        rangeValue={scale}
                                        onChangeHandler={(value) => setScale(value)}
                                        deviceType={deviceType}
                                        setAttributes={setAttributes}
                                        rangeStep={0.1}
                                        resetFallbackValue={""}
                                        isRangeUnit={false}
                                    />
                                ) : (
                                    <>
                                        <FB_Range
                                            min={0}
                                            max={2}
                                            label={__("ScaleX", "frontis-blocks")}
                                            rangeValue={scaleX}
                                            onChangeHandler={(value) => setScaleX(value)}
                                            deviceType={deviceType}
                                            setAttributes={setAttributes}
                                            rangeStep={0.1}
                                            resetFallbackValue={""}
                                            isRangeUnit={false}
                                        />

                                        <FB_Range
                                            min={0}
                                            max={2}
                                            label={__("ScaleY", "frontis-blocks")} 
                                            rangeValue={scaleY}
                                            onChangeHandler={(value) => setScaleY(value)}
                                            deviceType={deviceType}
                                            setAttributes={setAttributes}
                                            rangeStep={0.1}
                                            resetFallbackValue={""}
                                            isRangeUnit={false}
                                        />
                                    </>
                                )}
                            </BaseControl>
                        </div>
                    )}
                />
            </BaseControl>
        </>
    );
};

export default FB_ScaleControl;