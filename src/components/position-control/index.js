// background-color.js
import { __ } from '@wordpress/i18n';
import { 
    Button, 
    ButtonGroup, 
    BaseControl, 
    Dropdown,
    SelectControl, 
    
} from '@wordpress/components';
import './editor.lazy.scss';
import FB_Range from '../range';

const FB_PositionControl = ({
    label = __("Position", "frontis-blocks"),
    deviceType,
    positionType,
    setPositionType,

    HZOrientationType ,
    setHZOrientationType ,
    VROrientationType,
    setVROrientationType,
    
    HZLeftOffset,
    setHZLeftOffset,
    HZLeftOffsetUnits,
    setHZLeftOffsetUnits,
    HZRightOffset,
    setHZRightOffset,
    HZRightOffsetUnits,
    setHZRightOffsetUnits,

    VRTopOffset,
    setVRTopOffset,
    VRTopOffsetUnits,
    setVRTopOffsetUnits,
    VRBottomOffset,
    setVRBottomOffset,
    VRBottomOffsetUnits,
    setVRBottomOffsetUnits,

    setAttributes
}) => {

    const POSITION_TYPES = [
        { label: __('Default', 'frontis-blocks'), value: 'default' },
        { label: __('Relative', 'frontis-blocks'), value: 'relative' },
        { label: __('Absolute', 'frontis-blocks'), value: 'absolute' },
        { label: __('Fixed', 'frontis-blocks'), value: 'fixed' },
    ];

    const VR_TYPES = [
        { label: __('Top', 'frontis-blocks'), value: 'top' },
        { label: __('Bottom', 'frontis-blocks'), value: 'bottom' },
    ];
    const HZ_TYPES = [
        { label: __('Left', 'frontis-blocks'), value: 'left' },
        { label: __('Right', 'frontis-blocks'), value: 'right' },
    ];

    const handlePositionType = (value) => {
		setPositionType(value);
	};
    
    const handleHZLeftOffset = (value) => {
		setHZLeftOffset(value);
	};
    const handleHZLeftOffsetUnits = (value) => {
		setHZLeftOffsetUnits(value);
	};

    const handleHZRightOffset = (value) => {
		setHZRightOffset(value);
	};
    const handleHZRightOffsetUnits = (value) => {
		setHZRightOffsetUnits(value);
	};

    const handleVRTopOffset = (value) => {
		setVRTopOffset(value);
	};
    const handleVRTopOffsetUnits = (value) => {
		setVRTopOffsetUnits(value);
	};
    
    const handleVRBottomOffset = (value) => {
		setVRBottomOffset(value);
	};
    const handleVRBottomOffsetUnits = (value) => {
		setVRBottomOffsetUnits(value);
	};


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
                                <SelectControl
                                    label={__("Position Type", "frontis-blocks")}
                                    value={positionType}
                                    options={POSITION_TYPES}
                                    onChange={handlePositionType}
                                />

                                {positionType !== 'default' && positionType !== 'relative' &&  <>
                                <BaseControl
                                    className="fb-setting-background-color-popup-inner-wrapper"
                                    label={__("Horizontal Orientation", "frontis-blocks")}
                                >
                                    <ButtonGroup className="fb-setting-background-color-panel-btn">
                                        {HZ_TYPES.map((item) => (
                                            <Button
                                                key={item.value}
                                                onClick={() => setHZOrientationType(item.value)}
                                                className={`fb-setting-background-color-panel-btn-switcher ${HZOrientationType === item.value ? 'active' : ''}`}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>

                                {HZOrientationType === 'left' && (
                                    <FB_Range
                                        min={-1000}
                                        max={1000}
                                        label={__("Offset", "frontis-blocks")}
                                        rangeValue={HZLeftOffset}
                                        onChangeHandler={handleHZLeftOffset}
                                        rangeUnitHandler={handleHZLeftOffsetUnits}
                                        deviceType={deviceType}
                                        units={HZLeftOffsetUnits}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={''}
                                    />
                                )}

                                {HZOrientationType === 'right' && (
                                    <FB_Range
                                        min={-1000}
                                        max={1000}
                                        label={__("Offset", "frontis-blocks")}
                                        rangeValue={HZRightOffset}
                                        onChangeHandler={handleHZRightOffset}
                                        rangeUnitHandler={handleHZRightOffsetUnits}
                                        deviceType={deviceType}
                                        units={HZRightOffsetUnits}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={''}
                                    />
                                )}

                                <BaseControl
                                    className="fb-setting-background-color-popup-inner-wrapper"
                                    label={__("Vertical Orientation", "frontis-blocks")}
                                >
                                    <ButtonGroup className="fb-setting-background-color-panel-btn">
                                        {VR_TYPES.map((item) => (
                                            <Button
                                                key={item.value}
                                                onClick={() => setVROrientationType(item.value)}
                                                className={`fb-setting-background-color-panel-btn-switcher ${VROrientationType === item.value ? 'active' : ''}`}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>

                                {VROrientationType === 'top' && (
                                    <FB_Range
                                        min={-1000}
                                        max={1000}
                                        label={__("Offset", "frontis-blocks")}
                                        rangeValue={VRTopOffset}
                                        onChangeHandler={handleVRTopOffset}
                                        rangeUnitHandler={handleVRTopOffsetUnits}
                                        deviceType={deviceType}
                                        units={VRTopOffsetUnits}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={''}
                                    />
                                )}

                                {VROrientationType === 'bottom' && (
                                    <FB_Range
                                        min={-1000}
                                        max={1000}
                                        label={__("Offset", "frontis-blocks")}
                                        rangeValue={VRBottomOffset}
                                        onChangeHandler={handleVRBottomOffset}
                                        rangeUnitHandler={handleVRBottomOffsetUnits}
                                        deviceType={deviceType}
                                        units={VRBottomOffsetUnits}
                                        setAttributes={setAttributes}
                                        rangeStep={1}
                                        resetFallbackValue={''}
                                    />
                                )}
                                </>}
                            </div>
                        )}
                    />
                </BaseControl>
        </>
    );
};

export default FB_PositionControl;
