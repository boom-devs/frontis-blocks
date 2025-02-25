import { __ } from '@wordpress/i18n';
import { BaseControl, ToggleControl, TextareaControl, GradientPicker } from '@wordpress/components';
import './editor.lazy.scss';
import { useState, useEffect } from '@wordpress/element';

const FB_GradientColorControl = ({
    label='',
    globalCustomGradientSwitcher,
    setGlobalCustomGradientSwitcher,
    globalCustomGradientInputValue,
    setGlobalCustomGradientInputValue,
    globalGradientColor = null,
    setGlobalGradientColor,
}) => {

    const [globalGradientColors, setGlobalGradientColors] = useState([]);

    useEffect(() => {
        // Retrieve colors from local storage
        const storedGradientColors = localStorage.getItem('fb_gradient_colors');
        const storedCustomGradientColors = localStorage.getItem('fb_custom_gradient_colors');
        let combinedColors = [];
        
        if (storedGradientColors) {
            try {
                const parsedGradientColors = JSON.parse(storedGradientColors);
                if (Array.isArray(parsedGradientColors)) {
                    // Transforming the first format to match the second
                    const transformedGradientColors = parsedGradientColors.map(item => ({
                            gradient: `var(--wp--frontis--color--${item.slug})`,
                            name: item.name,
                            slug: item.slug
                    }));
                    combinedColors = [...transformedGradientColors];
                }
            } catch (error) {
                console.error('Error parsing global gradient colors:', error);
            }
        }
    
        if (storedCustomGradientColors && storedCustomGradientColors.trim() !== "") {
            try {
                const parsedCustomGradientColors = JSON.parse(storedCustomGradientColors);
                if (Array.isArray(parsedCustomGradientColors)) {
                    const transformedCustomGradientColors = parsedCustomGradientColors
                        .map(item => {
                            if (item.color !== "") {
                                return {
                                    gradient: `var(--wp--frontis--color--${item.slug})`,
                                    name: item.name,
                                    slug: item.slug
                                };
                            }
                            return undefined;
                        })
                        .filter(item => item !== undefined);
    
                    combinedColors = [...combinedColors, ...transformedCustomGradientColors];
                } else {
                    console.warn('Parsed custom gradient colors is not an array:', parsedCustomGradientColors);
                }
            } catch (error) {
                console.error('Error parsing custom gradient colors:', error);
            }
        }
    
        setGlobalGradientColors(combinedColors);
    }, [])



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
                        gradients={globalGradientColors}                                    
                    />                                         
                </BaseControl>
                )}
        </BaseControl>
    );
};

export default FB_GradientColorControl;