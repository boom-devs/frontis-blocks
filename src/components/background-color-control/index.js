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
