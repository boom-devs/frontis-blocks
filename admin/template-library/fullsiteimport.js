import { useState, useEffect } from "@wordpress/element";
import TypographyPanel from "./fullSiteTypography";
import { ColorPicker, Dropdown } from '@wordpress/components';

const SiteImportModal = ({ isOpen, onClose, onImport }) => {

  const { nonce, ajaxUrl } = window.frontisBlocksAdmin;

  const [activeTooltip, setActiveTooltip] = useState(null);

  const colors = [
    { hex: '#007bff', name: 'Primary Color' },
    { hex: '#6c757d', name: 'Secondary Color' },
    { hex: '#ffc107', name: 'Warning Color' },
    { hex: '#212529', name: 'Dark Color' },
    { hex: '#ffffff', name: 'Light Color' }
  ];

  const [typography, setTypography] = useState({
    headingFont: 'Inter',
    bodyFont: 'Open Sans',
    baseSize: '16px',
    scale: '1.2'
  });

  const fontOptions = [
    'Inter',
    'Open Sans',
    'Roboto',
    'Lato',
    'Poppins',
    'Montserrat'
  ];

  const handleImport = () => {
    const configData = {
      colors,
      typography,
    };

    window.jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_import_full_site',
        security: nonce,
        config: configData
      },
      success: function (response) {
        if (response.success) {
          window.wp.data.dispatch('core/notices').createSuccessNotice(
            response.data.message || 'Site imported with custom configuration!',
            { type: 'snackbar' }
          );
          const siteUrl = window.location.origin + window.location.pathname.replace(/wp-admin.*/, '') + 'home/';
          window.location.href = siteUrl;
        } else {
          window.wp.data.dispatch('core/notices').createErrorNotice(
            'Failed to import site: ' + response.data,
            { type: 'snackbar' }
          );
        }
      },
      error: function () {
        window.wp.data.dispatch('core/notices').createErrorNotice(
          'Failed to process request. Please try again.',
          { type: 'snackbar' }
        );
      }
    });

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fb-fsi-modal-overlay">
      <div className="fb-fsi-modal">
        <div className="fb-fsi-modal-header">
          <h2>Site Import Configuration</h2>
          <button className="fb-fsi-modal-close" onClick={onClose}>×</button>
        </div>

        <div className="fb-fsi-modal-content-wrapper">
          <div className="fb-fsi-modal-sidebar-content">
            <div className="fb-global-color-section">
              <FullSiteImportColorPicker/>
            </div>
            <TypographyPanel />
          </div>
          <div className="fb-fsi-modal-main-content">
                hello main content
          </div>
        </div>


        <div className="fb-fsi-modal-footer">
          <button className="button button-secondary" onClick={onClose}>Cancel</button>
          <button className="button button-primary" onClick={handleImport}>Import Site</button>
        </div>
      </div>
    </div>
  );
};

export default SiteImportModal;

const FullSiteImportColorPicker = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [colors, setColors] = useState([
    { hex: '#007bff', name: 'Primary Color' },
    { hex: '#6c757d', name: 'Secondary Color' },
    { hex: '#ffc107', name: 'Warning Color' },
    { hex: '#212529', name: 'Dark Color' },
    { hex: '#ffffff', name: 'Light Color' }
  ]);

  const handleColorChange = (color, index) => {
    const updatedColors = [...colors];
    updatedColors[index].hex = color; // Directly use color string
    setColors(updatedColors);
  };

  return (
    <div className="fb-global-color-section">
      <h3>Global Colors</h3>
      <div className="fb-color-grid" style={{ display: 'flex', gap: '20px' }}>
        {colors.map((color, index) => (
          <div
            key={index}
            className="fb-color-item"
            onMouseEnter={() => setActiveTooltip(index)}
            onMouseLeave={() => setActiveTooltip(null)}
            style={{ position: 'relative' }}
          >
            <Dropdown
              renderToggle={({ isOpen, onToggle }) => (
                <div
                  className="fb-color-circle"
                  style={{
                    backgroundColor: color.hex,
                    border: color.hex === '#ffffff' ? '1px solid #ddd' : 'none',
                    transition: 'background-color 0.3s ease'
                  }}
                  onClick={onToggle}
                />
              )}
              renderContent={() => (
                <div className="fb-color-picker-content" style={{ padding: '10px' }}>
                  <h4>{color.name}</h4>
                  <ColorPicker
                    color={color.hex}
                    onChangeComplete={(newColor) => handleColorChange(newColor.hex, index)}
                    disableAlpha
                  />
                </div>
              )}
            />
            {activeTooltip === index && (
              <div className="fb-color-tooltip" style={{ position: 'absolute', top: '-25px', left: 0 }}>
                {color.name}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

