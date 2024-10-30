// background-color.js
import { __ } from '@wordpress/i18n';
import { 
    Button, 
    ButtonGroup, 
    BaseControl, 
    Dropdown, 
    ColorPicker, 
    Dashicon, 
    ColorPalette,
    GradientPicker,
    ToggleControl,
    TextareaControl,
    ExternalLink
} from '@wordpress/components';
import './editor.lazy.scss';

const FB_BackgroundColor = ({
    backgroundType,
    setBackgroundType,
    classicColor,
    setClassicColor,
    gradientColor=null,
    setGradientColor,
    customGradientSwitcher,
    setCustomGradientSwitcher,
    customGradientInputValue,
    setCustomGradientInputValue
}) => {
    const BACKGROUND_TYPES = [
        { label: __('Classic', 'frontis-blocks'), value: 'classic' },
        { label: __('Gradient', 'frontis-blocks'), value: 'gradient' },
    ];

    return (
        <div className="fb-setting-background-color-container">
            <BaseControl
                label={__("Background", "frontis-blocks")}
                className="fb-setting-background-color-panel-wrapper"
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
                                label={__('Background Type', "frontis-blocks")}
                                className="fb-setting-background-color-popup-inner-wrapper"
                            >
                                <ButtonGroup className="fb-setting-background-color-panel-btn">
                                    {BACKGROUND_TYPES.map((item) => (
                                        <Button
                                            key={item.value}
                                            onClick={() => setBackgroundType(item.value)}
                                            className={`fb-setting-background-color-panel-btn-switcher ${backgroundType === item.value ? 'active' : ''}`}
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </ButtonGroup>
                            </BaseControl>

                            {backgroundType === 'classic' && (
                                <BaseControl
                                    label={__("Background Color", "frontis-blocks")}
                                    className="fb-setting-background-color-setting-wrapper"
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
                                            <div className="fb-setting-background-color-setting-icon-popup">
                                                <BaseControl className="fb-setting-background-color-setting-icon-popup-inner">
                                                    <div className="fb-setting-normal-color">
                                                        <ColorPicker
                                                            color={classicColor} 
                                                            onChange={setClassicColor}
                                                            enableAlpha
                                                        />
                                                        <div className="fb-setting-color-label">{__("Default Colors", "frontis-blocks")}</div>
                                                        <ColorPalette
                                                            colors={[
                                                                { color: '#F72585' },
                                                                { color: '#7209B7' },
                                                                { color: '#3A0CA3' },
                                                                { color: '#4361EE' },
                                                                { color: '#4CC9F0' },
                                                            ]}
                                                            disableCustomColors
                                                            value={classicColor}
                                                            onChange={setClassicColor}
                                                        />
                                                    </div>
                                                </BaseControl>
                                            </div>
                                        )}
                                    />
                                </BaseControl>
                            )}

                            {backgroundType === 'gradient' && (
                                <>
                                    <ToggleControl
                                        label={__("Add Custom Gradient", "frontis-blocks")}
                                        checked={customGradientSwitcher}
                                        onChange={setCustomGradientSwitcher}
                                    />
                                    
                                    { customGradientSwitcher && (
                                        <>
                                            <TextareaControl
                                                value={customGradientInputValue}
                                                onChange={setCustomGradientInputValue}
                                                help={__(
                                                    "Add your gradient color here."
                                                )}
                                            />
                                            <ExternalLink href="https://csspro.com/css-gradients/" target="_blank">
                                                {__("Explore CSS Gradients", "frontis-blocks")}
                                            </ExternalLink>
                                        </>
                                    )}

                                    {customGradientSwitcher !== true && (
                                        <BaseControl
                                            className="fb-setting-background-color-setting-wrapper"
                                        >
                                            <GradientPicker
                                                value={gradientColor} 
                                                onChange={setGradientColor}
                                                gradients={[
                                                    {
                                                    gradient: 'linear-gradient(135deg, rgba(6,147,227,1) 0%, rgb(155,81,224) 100%)',
                                                    name: 'Vivid cyan blue to vivid purple',
                                                    slug: 'vivid-cyan-blue-to-vivid-purple'
                                                    },
                                                    {
                                                    gradient: 'linear-gradient(135deg, rgb(122,220,180) 0%, rgb(0,208,130) 100%)',
                                                    name: 'Light green cyan to vivid green cyan',
                                                    slug: 'light-green-cyan-to-vivid-green-cyan'
                                                    },
                                                    {
                                                    gradient: 'linear-gradient(135deg, rgba(252,185,0,1) 0%, rgba(255,105,0,1) 100%)',
                                                    name: 'Luminous vivid amber to luminous vivid orange',
                                                    slug: 'luminous-vivid-amber-to-luminous-vivid-orange'
                                                    },
                                                    {
                                                    gradient: 'linear-gradient(135deg, rgba(255,105,0,1) 0%, rgb(207,46,46) 100%)',
                                                    name: 'Luminous vivid orange to vivid red',
                                                    slug: 'luminous-vivid-orange-to-vivid-red'
                                                    },
                                                    {
                                                    gradient: 'linear-gradient(135deg, rgb(238,238,238) 0%, rgb(169,184,195) 100%)',
                                                    name: 'Very light gray to cyan bluish gray',
                                                    slug: 'very-light-gray-to-cyan-bluish-gray'
                                                    },
                                                    {
                                                    gradient: 'linear-gradient(135deg, rgb(74,234,220) 0%, rgb(151,120,209) 20%, rgb(207,42,186) 40%, rgb(238,44,130) 60%, rgb(251,105,98) 80%, rgb(254,248,76) 100%)',
                                                    name: 'Cool to warm spectrum',
                                                    slug: 'cool-to-warm-spectrum'
                                                    },
                                                    {
                                                    gradient: 'linear-gradient(135deg, rgb(255,238,88) 0%, rgb(255,140,0) 100%)',
                                                    name: 'Soft yellow to amber',
                                                    slug: 'soft-yellow-to-amber'
                                                    },
                                                    {
                                                    gradient: 'linear-gradient(135deg, rgb(0,176,255) 0%, rgb(75,0,130) 100%)',
                                                    name: 'Vivid blue to indigo',
                                                    slug: 'vivid-blue-to-indigo'
                                                    },
                                                    {
                                                    gradient: 'linear-gradient(135deg, rgb(255,173,173) 0%, rgb(255,61,61) 100%)',
                                                    name: 'Light pink to red',
                                                    slug: 'light-pink-to-red'
                                                    },
                                                    {
                                                    gradient: 'linear-gradient(135deg, rgb(135,131,120) 0%, rgb(41,44,47) 100%)',
                                                    name: 'Muted gray to dark slate',
                                                    slug: 'muted-gray-to-dark-slate'
                                                    },
                                                    {
                                                    gradient: 'linear-gradient(135deg, rgb(240,86,199) 0%, rgb(255,72,0) 100%)',
                                                    name: 'Hot pink to orange',
                                                    slug: 'hot-pink-to-orange'
                                                    },
                                                    {
                                                    gradient: 'linear-gradient(135deg, rgb(120,191,255) 0%, rgb(0,102,204) 100%)',
                                                    name: 'Sky blue to royal blue',
                                                    slug: 'sky-blue-to-royal-blue'
                                                    }
                                                ]}                                          
                                            />
                                        </BaseControl>
                                    )}
                                </>
                            )}
                        </div>
                    )}
                />
            </BaseControl>
        </div>
    );
};

export default FB_BackgroundColor;
