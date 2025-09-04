// background-color.js
import { __ } from '@wordpress/i18n';
import { 
    Button, 
    ButtonGroup, 
    BaseControl, 
    Dropdown,
    SelectControl, 
    
} from '@wordpress/components';
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
        { label: __('Sticky', 'frontis-blocks'), value: 'sticky' },
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
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 4.5L9.5 2M9.5 2L12 4.5M9.5 2V17M9.5 17L12 14.5M9.5 17L7 14.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.5 12L2 9.5M2 9.5L4.5 7M2 9.5L17 9.5M17 9.5L14.5 7M17 9.5L14.5 12" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
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
