import React, { useState, useRef, useEffect } from "react";
import "./ColorPicker.css";

const ColorPicker = ({ defaultColor = "#f9f9f9", variationSteps = [100, 200, 300, 400, 500, 600, 700, 800, 900] }) => {
  const [baseColor, setBaseColor] = useState(defaultColor);
  const [selectedColor, setSelectedColor] = useState("");
  const [variations, setVariations] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    if (baseColor) {
      generateVariations(baseColor);
    }
  }, [baseColor]);

  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255,
    };
  };

  const rgbToHex = ({ r, g, b }) => {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  const getColorVariation = (rgb, step) => {
    const factor = step / 1000;
    return `rgb(${Math.floor(rgb.r * (1 - factor))}, ${Math.floor(rgb.g * (1 - factor))}, ${Math.floor(rgb.b * (1 - factor))})`;
  };

  const generateVariations = (color) => {
    const baseRgb = hexToRgb(color);
    const newVariations = variationSteps.map((step) => {
      const variationColor = getColorVariation(baseRgb, step);
      return {
        step,
        color: variationColor,
        hex: rgbToHex(hexToRgb(variationColor)),
      };
    });
    setVariations(newVariations);
  };

  const handleBaseColorChange = (e) => {
    setBaseColor(e.target.value);
    setIsPopupVisible(true);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setIsPopupVisible(false);
  };

  return (
    <div className="color-picker-container">
      <input
        type="color"
        value={baseColor}
        onChange={handleBaseColorChange}
        style={{ marginBottom: "10px" }}
      />
      <div>Base Color: {baseColor}</div>
      {isPopupVisible && (
        <div className="color-picker-popup">
          <h4>Variants</h4>
          <div className="color-variations">
            {variations.map(({ step, color, hex }) => (
              <div
                key={step}
                className="color-variation-box"
                style={{ background: color }}
                onClick={() => handleColorSelect(hex)}
                title={`Step ${step}: ${hex}`}
              />
            ))}
          </div>
        </div>
      )}
      {selectedColor && (
        <div className="color-code-display">
          Selected Color: {selectedColor}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
