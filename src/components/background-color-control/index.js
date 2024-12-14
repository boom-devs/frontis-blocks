// background-color.js
import { __ } from '@wordpress/i18n';
import { 
    Button, 
    ButtonGroup, 
    BaseControl, 
    Dropdown,
    Dashicon, 
    
} from '@wordpress/components';

import FB_ImageControl from '@Components/image-control';
import FB_GradientColorControl from '@Components/gradient-color-control';
import FB_ColorControl from '@Components/color-control';
import FB_SwitcherControl from '@Components/switcher-control';
import './editor.lazy.scss';

const FB_BackgroundColorControl = ({
    label = __("Background Color", "frontis-blocks"),
    bgColorSwitcher,
    setBgColorSwitcher,

    normalBackgroundType,
    setNormalBackgroundType,
    normalClassicColor,
    setNormalClassicColor,
    normalGradientColor=null,
    setNormalGradientColor,
    normalCustomGradientSwitcher,
    setNormalCustomGradientSwitcher,
    normalCustomGradientInputValue,
    setNormalCustomGradientInputValue,
    normalBackgroundImageUrl,
    setNormalBackgroundImageUrl,
    normalBackgroundImageAlt,
    setNormalBackgroundImageAlt,
    normalBackgroundImageID,
    setNormalBackgroundImageID,
    normalBackgroundImagePosition = '',
    setNormalBackgroundImagePosition,
    normalBackgroundImageAttachment = '',
    setNormalBackgroundImageAttachment,
    normalBackgroundImageRepeat = '',
    setNormalBackgroundImageRepeat,
    normalBackgroundImageSize = '',
    setNormalBackgroundImageSize,

    hoverBackgroundType,
    setHoverBackgroundType,
    hoverClassicColor,
    setHoverClassicColor,
    hoverGradientColor=null,
    setHoverGradientColor,
    hoverCustomGradientSwitcher,
    setHoverCustomGradientSwitcher,
    hoverCustomGradientInputValue,
    setHoverCustomGradientInputValue,
    hoverBackgroundImageUrl,
    setHoverBackgroundImageUrl,
    hoverBackgroundImageAlt,
    setHoverBackgroundImageAlt,
    hoverBackgroundImageID,
    setHoverBackgroundImageID,
    hoverBackgroundImagePosition = '',
    setHoverBackgroundImagePosition,
    hoverBackgroundImageAttachment = '',
    setHoverBackgroundImageAttachment,
    hoverBackgroundImageRepeat = '',
    setHoverBackgroundImageRepeat,
    hoverBackgroundImageSize = '',
    setHoverBackgroundImageSize,

    isBackgroundImage = true,

}) => {

    const BACKGROUND_TYPES = [
        { label: __('Classic', 'frontis-blocks'), value: 'classic' },
        { label: __('Gradient', 'frontis-blocks'), value: 'gradient' },
    ];

    return (

        <>
            <FB_SwitcherControl
                label={label}
                globalSwitcher={bgColorSwitcher}
                setGlobalSwitcher={(value) => setBgColorSwitcher(value)}
            />

            {bgColorSwitcher === 'normal' && (
                <BaseControl
                    className="fb-setting-background-color-setting-wrapper"
                    label={__("Background Type", "frontis-blocks")}
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
                                    <ButtonGroup className="fb-setting-background-color-panel-btn">
                                        {BACKGROUND_TYPES.map((item) => (
                                            <Button
                                                key={item.value}
                                                onClick={() => setNormalBackgroundType(item.value)}
                                                className={`fb-setting-background-color-panel-btn-switcher ${normalBackgroundType === item.value ? 'active' : ''}`}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>

                                {normalBackgroundType === 'classic' && (

                                    <>
                                        <FB_ColorControl
                                            label={__("Color", "frontis-blocks")}
                                            globalColor={normalClassicColor}
                                            setGlobalColor={(value) => setNormalClassicColor(value)}
                                        />

                                        {isBackgroundImage && (
                                            <FB_ImageControl
                                                label={__("Background Image", "frontis-blocks")}
                                                globalBackgroundImageUrl={normalBackgroundImageUrl}
                                                setGlobalBackgroundImageUrl={(value) => setNormalBackgroundImageUrl(value)}
                                                globalBackgroundImageAlt={normalBackgroundImageAlt}
                                                setGlobalBackgroundImageAlt={(value) => setNormalBackgroundImageAlt(value)}
                                                globalBackgroundImageID={normalBackgroundImageID}
                                                setGlobalBackgroundImageID={(value) => setNormalBackgroundImageID(value)}
                                                globalBackgroundImagePosition={normalBackgroundImagePosition}
                                                setGlobalBackgroundImagePosition={(value) => setNormalBackgroundImagePosition(value)}
                                                globalBackgroundImageAttachment={normalBackgroundImageAttachment}
                                                setGlobalBackgroundImageAttachment={(value) => setNormalBackgroundImageAttachment(value)}
                                                globalBackgroundImageRepeat={normalBackgroundImageRepeat}
                                                setGlobalBackgroundImageRepeat={(value) => setNormalBackgroundImageRepeat(value)}
                                                globalBackgroundImageSize={normalBackgroundImageSize}
                                                setGlobalBackgroundImageSize={(value) => setNormalBackgroundImageSize(value)}
                                            />
                                        )}
                                                
                                    </>
                                )}

                                {normalBackgroundType === 'gradient' && (
                                    <FB_GradientColorControl
                                        globalCustomGradientSwitcher={normalCustomGradientSwitcher}
                                        setGlobalCustomGradientSwitcher={(value) => setNormalCustomGradientSwitcher(value)}
                                        globalCustomGradientInputValue={normalCustomGradientInputValue}
                                        setGlobalCustomGradientInputValue={(value) => setNormalCustomGradientInputValue(value)}
                                        globalGradientColor={normalGradientColor}
                                        setGlobalGradientColor={(value) => setNormalGradientColor(value)}
                                    />
                                )}
                            </div>
                        )}
                    />
                </BaseControl>
            )}
            {bgColorSwitcher === 'hover' && (
                <BaseControl
                    className="fb-setting-background-color-setting-wrapper"
                    label={__("Background Type", "frontis-blocks")}
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
                                <Dashicon icon="color-picker" className="fb-setting-background-color-setting-icon" />
                            </Button>
                        )}
                        renderContent={() => (
                            <div className="fb-setting-background-color-popup-wrapper">
                                <BaseControl
                                    className="fb-setting-background-color-popup-inner-wrapper"
                                >
                                    <ButtonGroup className="fb-setting-background-color-panel-btn">
                                        {BACKGROUND_TYPES.map((item) => (
                                            <Button
                                                key={item.value}
                                                onClick={() => setHoverBackgroundType(item.value)}
                                                className={`fb-setting-background-color-panel-btn-switcher ${hoverBackgroundType === item.value ? 'active' : ''}`}
                                            >
                                                {item.label}
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </BaseControl>

                                {hoverBackgroundType === 'classic' && (

                                    <>
                                        <FB_ColorControl
                                            label={__("Color", "frontis-blocks")}
                                            globalColor={hoverClassicColor}
                                            setGlobalColor={(value) => setHoverClassicColor(value)}
                                        />

                                        {isBackgroundImage && (
                                            <FB_ImageControl
                                                label={__("Background Image", "frontis-blocks")}
                                                globalBackgroundImageUrl={hoverBackgroundImageUrl}
                                                setGlobalBackgroundImageUrl={(value) => setHoverBackgroundImageUrl(value)}
                                                globalBackgroundImageAlt={hoverBackgroundImageAlt}
                                                setGlobalBackgroundImageAlt={(value) => setHoverBackgroundImageAlt(value)}
                                                globalBackgroundImageID={hoverBackgroundImageID}
                                                setGlobalBackgroundImageID={(value) => setHoverBackgroundImageID(value)}
                                                globalBackgroundImagePosition={hoverBackgroundImagePosition}
                                                setGlobalBackgroundImagePosition={(value) => setHoverBackgroundImagePosition(value)}
                                                globalBackgroundImageAttachment={hoverBackgroundImageAttachment}
                                                setGlobalBackgroundImageAttachment={(value) => setHoverBackgroundImageAttachment(value)}
                                                globalBackgroundImageRepeat={hoverBackgroundImageRepeat}
                                                setGlobalBackgroundImageRepeat={(value) => setHoverBackgroundImageRepeat(value)}
                                                globalBackgroundImageSize={hoverBackgroundImageSize}
                                                setGlobalBackgroundImageSize={(value) => setHoverBackgroundImageSize(value)}
                                            />
                                        )}
                                    </>
                                )}

                                {hoverBackgroundType === 'gradient' && (
                                    <FB_GradientColorControl
                                        globalCustomGradientSwitcher={hoverCustomGradientSwitcher}
                                        setGlobalCustomGradientSwitcher={(value) => setHoverCustomGradientSwitcher(value)}
                                        globalCustomGradientInputValue={hoverCustomGradientInputValue}
                                        setGlobalCustomGradientInputValue={(value) => setHoverCustomGradientInputValue(value)}
                                        globalGradientColor={hoverGradientColor}
                                        setGlobalGradientColor={(value) => setHoverGradientColor(value)}
                                    />
                                )}
                            </div>
                        )}
                    />
                </BaseControl>
            )}
        </>
    );
};

export default FB_BackgroundColorControl;
