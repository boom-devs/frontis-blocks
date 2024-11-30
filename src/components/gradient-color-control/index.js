import { __ } from '@wordpress/i18n';
import { BaseControl, ToggleControl, TextareaControl, GradientPicker } from '@wordpress/components';
import './editor.lazy.scss';

const FB_GradientColorControl = ({
    label='',
    globalCustomGradientSwitcher,
    setGlobalCustomGradientSwitcher,
    globalCustomGradientInputValue,
    setGlobalCustomGradientInputValue,
    globalGradientColor = null,
    setGlobalGradientColor,
}) => {

    return (
        <BaseControl 
            label={label}
            className='fb-gradient-color-setting-wrapper'
        >
            <div className='fb-gradient-custom-gradient-wrapper'>
                <ToggleControl
                    label={__("Add Custom Gradient", "frontis-blocks")}
                    checked={globalCustomGradientSwitcher}
                    onChange={setGlobalCustomGradientSwitcher}
                    className='fb-gradient-label'
                />
            </div>
            
            {globalCustomGradientSwitcher ? (
                <div className="fb-gradient-custom-gradient-textarea-wrapper">
                    <TextareaControl
                        value={globalCustomGradientInputValue}
                        onChange={setGlobalCustomGradientInputValue}
                        help={__("Add your gradient color here.", "frontis-blocks")}
                        className='fb-gradient-custom-gradient-textarea'
                    />
                </div>
            ) : (
                <BaseControl className="fb-gradient-picker-wrapper">
                    <GradientPicker
                        value={globalGradientColor} 
                        onChange={setGlobalGradientColor}
                        className='fb-gradient-picker'
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
        </BaseControl>
    );
};

export default FB_GradientColorControl;
