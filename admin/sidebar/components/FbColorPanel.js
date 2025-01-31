import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../store';
import { __ } from '@wordpress/i18n';
import { __experimentalToolsPanel as ToolsPanel, __experimentalToolsPanelItem as ToolsPanelItem } from '@wordpress/components';
import FbColorPicker from './ColorPicker';

const FbColorPanel = ({ title, colors, setFbGlobalSettingsLoading }) => {
    const { setColors } = useDispatch(STORE_NAME);
    const currentColors = useSelect(select => select(STORE_NAME).getColors(), []);

    const handleColorChange = (slug, newColor) => {
        const cssVar = `--fb-${slug}-color`;
        const updatedColors = currentColors.map(color => {
            if (color.slug === slug) {
                return {
                    ...color,
                    color: newColor,
                    var: cssVar,
                    value: `var(${cssVar})`
                };
            }
            return color;
        });
        
        setColors(updatedColors);
        setFbGlobalSettingsLoading(true);
    };

    return (
        <ToolsPanel 
            label={title}
            resetAll={() => {
                setColors(colors.map(color => ({
                    ...color,
                    var: `--fb-${color.slug}-color`,
                    value: `var(--fb-${color.slug}-color)`
                })));
                setFbGlobalSettingsLoading(true);
            }}
            className="fb-color-panel fb-global-color-panel"
        >
            {colors.map((color) => (
                <ToolsPanelItem
                    key={color.slug}
                    label={color.name}
                    hasValue={() => true}
                >
                    <FbColorPicker
                        name={color.name}
                        defaultColor={color.color}
                        value={color.value}
                        onChange={(newColor) => handleColorChange(color.slug, newColor)}
                    />
                </ToolsPanelItem>
            ))}
        </ToolsPanel>
    );
};

export default FbColorPanel; 