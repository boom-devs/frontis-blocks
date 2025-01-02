import { useState, useEffect } from "@wordpress/element";
import chroma from "chroma-js";
import {ColorPicker as WpColorPicker} from '@wordpress/components';
import "./ColorPicker.css";

const ColorPicker = ({ defaultColor = "#f9f9f9" }) => {
  const [baseColor, setBaseColor] = useState(defaultColor);
  const [shadeStep, setShadeStep] = useState(500); // Default shade step
  const [shadeColor, setShadeColor] = useState(defaultColor);

  useEffect(() => {
    // Generate the shade color when baseColor or shadeStep changes
    generateShade(baseColor, shadeStep);
  }, [baseColor, shadeStep]);

  const generateShade = (color, step) => {
    // Create chroma scale: lightest at 100, darkest at 900
    const scale = chroma.scale([chroma(color).brighten(1), color, chroma(color).darken(3)]).domain([100, 900]);
    const generatedShade = scale(step).hex();
    setShadeColor(generatedShade);
  };

  const handleBaseColorChange = (color) => {
    console.log(color);
    setBaseColor(color);
  };

  const handleRangeChange = (e) => {
    setShadeStep(Number(e.target.value));
  };

  return (
    <div className="color-picker-container">
      {/* Base color picker */}
      <WpColorPicker
        defaultValue={ baseColor }
        enableAlpha={true}
        onChange={handleBaseColorChange}
      />
      <div>Base Color: {baseColor}</div>

      {/* Range slider for selecting shade */}
      <div className="range-slider">
        <label htmlFor="shade-range" style={{ display: "block", margin: "10px 0" }}>
          Shade Step ({shadeStep})
        </label>
        <input
          id="shade-range"
          type="range"
          min="100"
          max="900"
          step="100"
          value={shadeStep}
          onChange={handleRangeChange}
        />
      </div>

      {/* Display the selected shade */}
      <div className="shade-display" style={{ marginTop: "20px" }}>
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
      </div>
    </div>
  );
};

export default ColorPicker;
