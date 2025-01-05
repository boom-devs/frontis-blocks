import {__} from "@wordpress/i18n";
import { useState, useEffect } from "@wordpress/element";
import chroma from "chroma-js";
import {ColorPicker as WpColorPicker, RangeControl, ColorIndicator, ColorPalette} from '@wordpress/components';
import "./ColorPicker.css";

const defaultsColors = [
	{
		"name": __("Primary Color", "frontis-blocks"),
		"color": '#399CFF',
		"slug": 'primary-color',
		"var": '--fb-primary-color'
	},
	{
		"name": __("Secondary Color", "frontis-blocks"),
		"color": '#f00000',
		"slug": 'secondary-color',
		"var": '--fb-secondary-color'
	},
	{
		"name": __("Tertiary Color", "frontis-blocks"),
		"color": '#F72585',
		"slug": 'tertiary-color',
		"var": '--fb-tertiary-color'
	},
	{
		"name": __("Accent Color", "frontis-blocks"),
		"color": "#7209B7",
		"slug": 'accent-color',
		"var": '--fb-accent-color'
	},
	{
		"name": __("Text Color", "frontis-blocks"),
		"color": '#3A0CA3',
		"slug": 'text-color',
		"var": '--fb-text-color'
	},
	{
		"name": __("Link Color", "frontis-blocks"),
		"color": '#4361EE',
		"slug": 'link-color',
		"var": '--fb-link-color'
	},
	{
		"name": __("Link Hover Color", "frontis-blocks"),
		"color": '#4CC9F0',
		"slug": 'link-hover-color',
		"var": '--fb-link-hover-color'
	},
	{
		"name": __("White Color", "frontis-blocks"),
		"color": '#FFFFFF',
		"slug": 'white-color',
		"var": '--fb-white-color'
	},
	{
		"name": __("Black Color", "frontis-blocks"),
		"color": '#000000',
		"slug": 'black-color',
		"var": '--fb-black-color'
	},
	{
		"name": __("Gray Color", "frontis-blocks"),
		"color": '#808080',
		"slug": 'gray-color',
		"var": '--fb-gray-color'
	}

];


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
    const scale = chroma.scale([chroma(color).brighten(2), color, chroma(color).darken(3)]).domain([100, 900]);
    const generatedShade = scale(step).hex();
    setShadeColor(generatedShade);
  };

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
      <ColorPalette
        colors={defaultsColors}
        value={ baseColor }
        enableAlpha={true}
        onChange={handleBaseColorChange}
      />
      <div>Base Color: {baseColor}</div>

      {/* Range slider for selecting shade */}
      <div className="range-slider">
        {/* <label htmlFor="shade-range" style={{ display: "block", margin: "10px 0" }}>
          Shade Step ({shadeStep})
        </label> */}
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
