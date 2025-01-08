import {__} from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import chroma from "chroma-js";
import {ColorPicker as WpColorPicker, RangeControl, ColorIndicator, ColorPalette, Dropdown, __experimentalVStack as Vstack, Button, CircularOptionPicker} from '@wordpress/components';
import "./ColorPicker.css";

const ColorPicker = ({ defaultColor = "#f9f9f9" }) => {
  const [baseColor, setBaseColor] = useState(defaultColor);
  const [shadeStep, setShadeStep] = useState(500); // Default shade step
  const [ shadeColor, setShadeColor ] = useState(defaultColor);
  const [ shades, setShades ] = useState([]);
  const [ currentColor, setCurrentColor ] = useState();


  useEffect(() => {
    // Generate the shade color when baseColor or shadeStep changes
    generateShade(baseColor, shadeStep);
    generateShades(baseColor);
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
    console.log(shades);
    setShades(shades); // Set the shades state
  };

  const generateShade = (color, step) => {
    const scale = chroma.scale([chroma(color).brighten(2), color, chroma(color).darken(3)]).domain([100, 900]);
    return scale(step).hex();
  };

  const options = (
    <>
      {shades.map(({ color, name }, index) => (
        <Button
          key={`${color}-${index}`}
          icon={
            <span 
              style={{ 
                background: color,
                display: 'block',
                width: '24px',
                height: '24px',
                borderRadius: '50%'
              }} 
            />
          }
          isPressed={index === currentColor}
          onClick={() => {
            setCurrentColor(index);
            setShadeColor(color);
          }}
          aria-label={`Shade ${name}`}
          style={{
            padding: 2,
            margin: '0 4px'
          }}
        />
      ))}
    </>
  );

  const handleBaseColorChange = (color) => {
    console.log(color);
    setBaseColor(color);
  };

  const handleRangeChange = (value) => {
    setShadeStep(value);
  };


  return (
    <div className="color-picker-container">
     
      {/* Base color picker */}
      {/* <WpColorPicker
        defaultValue={ baseColor }
        enableAlpha={true}
        onChange={handleBaseColorChange}
      /> */}
      {/* <ColorPalette
        colors={defaultsColors}
        value={ baseColor }
        enableAlpha={true}
        onChange={handleBaseColorChange}
      /> */}
      <Dropdown
        className="my-container-class-name"
        contentClassName="my-dropdown-content-classname"
        popoverProps={{ placement: 'bottom-start' }}
        renderToggle={({ isOpen, onToggle }) => (
          <Button onClick={onToggle} aria-expanded={isOpen}>
            <ColorIndicator colorValue={shadeColor} /> Primary Color
          </Button>
        )}
        renderContent={ () => (
          <>
          <Vstack>
          <WpColorPicker
            defaultValue={baseColor}
            enableAlpha={true}
            onChange={handleBaseColorChange}
          />
          <RangeControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            help="Please select how transparent you would like this."
            initialPosition={500}
            label="Shade range"
            max={900}
            min={ 100 }
            step={100}
            value={shadeStep}
            onChange={handleRangeChange}
          />
            <CircularOptionPicker
              options={options}
              actions={
                <Button
                  onClick={() => {
                    setCurrentColor(undefined);
                    setShadeColor(defaultColor);
                  }}
                  variant="secondary"
                  className="is-small"
                >
                  Clear
                </Button>
              }
            />
          <div
          className="shade-preview"
          style={{
            background: shadeColor,
            width: "50px",
            height: "50px",
            borderRadius: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
          }}></div>
          <div>Selected Shade ({shadeStep}): {shadeColor}</div>
            </Vstack>
          </>
        )}
      />
      

      {/* Range slider for selecting shade */}
      <div className="range-slider">
        {/* <label htmlFor="shade-range" style={{ display: "block", margin: "10px 0" }}>
          Shade Step ({shadeStep})
        </label> */}
        {/* <RangeControl
          __next40pxDefaultSize
          __nextHasNoMarginBottom
          help="Please select how transparent you would like this."
          initialPosition={500}
          label="Shade range"
          max={900}
          min={ 100 }
          step={100}
          value={shadeStep}
          onChange={handleRangeChange}
        /> */}
        {/* <input
          id="shade-range"
          type="range"
          min="100"
          max="900"
          step="100"
          value={shadeStep}
          onChange={handleRangeChange}
        /> */}
      </div>

      {/* Display the selected shade */}
      {/* <div className="shade-display" style={{ marginTop: "20px" }}>
        <div
          className="shade-preview"
          style={{
            background: shadeColor,
            width: "100px",
            height: "100px",
            borderRadius: "8px",
            marginBottom: "10px",
            border: "1px solid #ccc",
          }}
        ></div>
        <div>Selected Shade ({shadeStep}): {shadeColor}</div>
      </div> */}
    </div>
  );
};

export default ColorPicker;
