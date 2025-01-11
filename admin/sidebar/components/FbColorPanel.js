import { __ } from "@wordpress/i18n";
import { 
  __experimentalToolsPanel as ToolsPanel,
  __experimentalToolsPanelItem as ToolsPanelItem,
} from "@wordpress/components";
import { useEffect } from "@wordpress/element";
import { useSelect, useDispatch } from '@wordpress/data';
import FbColorPicker from "./ColorPicker";
import "./FbColorPanel.css";
import { STORE_NAME } from '../store';

const FbColorPanel = ({ colors, setFbGlobalSettingsLoading }) => {
  const { updateColor } = useDispatch(STORE_NAME);
  const savedColors = useSelect(select => 
    select(STORE_NAME).getColors(),
    []
  );

  // Function to update CSS variables
  const updateCSSVariables = (colors) => {
    colors.forEach((colorObj) => {
      if (colorObj.var && colorObj.color) {
        // Set the base color variable
        document.documentElement.style.setProperty(colorObj.var, colorObj.color);
      }
    });
  };

  // Initial setup of CSS variables
  useEffect(() => {
    updateCSSVariables(colors);
  }, [colors]);

  // Handle color change
  const handleColorChange = (slug, newColor, shadeStep) => {
    if (updateColor) {
      updateColor(slug, newColor, shadeStep);
      
      // Find the color object and update its CSS variable
      const colorObj = colors.find(color => color.slug === slug);
      if (colorObj?.var) {
        document.documentElement.style.setProperty(colorObj.var, newColor);
        setFbGlobalSettingsLoading(true);
      }
    }
  };

  return (
    <ToolsPanel
      label={__("Colors", "frontis-blocks")}
      className="fb-color-panel fb-global-color-panel"
      resetAll={() => {
        // Reset all colors to default values
        colors.forEach(colorObj => {
          if (colorObj.var) {
            document.documentElement.style.setProperty(colorObj.var, colorObj.color);
            updateColor && updateColor(colorObj.slug, colorObj.color, 500); // Reset shade step to 500
          }
        });
        setFbGlobalSettingsLoading(true);
      }}
    >
      {colors.map((colorObj) => (
        <ToolsPanelItem
          key={colorObj.slug}
          label={colorObj.name}
          hasValue={() => true}
        >
          <FbColorPicker
            name={colorObj.name}
            defaultColor={colorObj.color}
            onChange={(newColor, shadeStep) => handleColorChange(colorObj.slug, newColor, shadeStep)}
            slug={colorObj.slug}
          />
        </ToolsPanelItem>
      ))}
    </ToolsPanel>
  );
};

export default FbColorPanel; 