import {__} from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import { useSelect, useDispatch } from '@wordpress/data';
import chroma from "chroma-js";
import { ColorPicker as WpColorPicker, RangeControl, ColorIndicator, ColorPalette, Dropdown, __experimentalVStack as Vstack, Button } from '@wordpress/components';

const FbColorPicker = ({ name = "Color", defaultColor = "#f9f9f9", onChange, slug }) => {
  const { setShadeStep } = useDispatch('frontis-blocks/global-styles');
  const savedShadeStep = useSelect(select => 
    select('frontis-blocks/global-styles').getShadeStep(slug),
    [slug]
  );

  const [baseColor, setBaseColor] = useState(defaultColor);
  const [shadeStep, setLocalShadeStep] = useState(savedShadeStep); // Use saved shade step
  const [shadeColor, setShadeColor] = useState(defaultColor);
  const [shades, setShades] = useState([]);

  useEffect(() => {
    // Generate the shade color when baseColor or shadeStep changes
    const newShadeColor = generateShade(baseColor, shadeStep);
    setShadeColor(newShadeColor);
    generateShades(baseColor);
    
    // Call onChange with the new shade color and step
    if (onChange) {
      onChange(newShadeColor, shadeStep);
    }
  }, [baseColor, shadeStep]);

  const generateShades = (color) => {
    const shades = [];
    for (let step = 100; step <= 900; step += 100) {
      const generatedShade = {
        name: `${step}`,
        color: generateShade(color, step)
      };
      shades.push(generatedShade);
    }
    setShades(shades);
  };

  const generateShade = (color, step) => {
    const scale = chroma.scale([chroma(color).brighten(2), color, chroma(color).darken(3)]).domain([100, 900]);
    return scale(step).hex();
  };

  const handleBaseColorChange = (color) => {
    setBaseColor(color);
  };

  const handleRangeChange = (value) => {
    setLocalShadeStep(value);
    setShadeStep(slug, value); // Save to store
  };

  const handleShadeSelect = (shade) => {
    const step = parseInt(shade.name);
    setLocalShadeStep(step);
    setShadeStep(slug, step); // Save to store
    setShadeColor(shade.color);
    // setBaseColor(shade.color);
  };

  return (
    <div className="color-picker-container">
      <Dropdown
        className="fb-color-picker"
        contentClassName="fb-color-picker-dropdown"
        position="middle center left"
        popoverProps={{ placement: 'left-start' }}
        renderToggle={({ isOpen, onToggle }) => (
          <Button onClick={onToggle} aria-expanded={isOpen}>
            <ColorIndicator colorValue={ shadeColor } /> 
            <span>{ name }</span>
          </Button>
        )}
        renderContent={() => (
          <div className="fb-color-picker-content">
            <Vstack spacing={4}>
              <WpColorPicker
                color={baseColor}
                onChange={handleBaseColorChange}
                enableAlpha={true}
              />
              <RangeControl
                label={__("Shade", "frontis-blocks")}
                value={shadeStep}
                onChange={handleRangeChange}
                min={100}
                max={900}
                step={100}
              />
              <div className="fb-color-shades">
                {shades.map((shade, index) => (
                  <Button
                    key={index}
                    className={`fb-color-shade-button ${shadeColor === shade.color ? 'is-selected' : ''}`}
                    onClick={() => handleShadeSelect(shade)}
                    style={{
                      backgroundColor: shade.color,
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      padding: 0,
                      margin: '0 4px',
                      border: shadeColor === shade.color ? '3px solid #007cba' : '1px solid #ddd'
                    }}
                    aria-label={`Shade ${shade.name}`}
                  />
                ))}
              </div>
            </Vstack>
          </div>
        )}
      />
    </div>
  );
};

export default FbColorPicker;
