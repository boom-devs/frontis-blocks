import { useState, useEffect } from "@wordpress/element";

const SiteImportModal = ({ isOpen, onClose, onImport }) => {

    const { nonce, ajaxUrl } = window.frontisBlocksAdmin;
    const [colors, setColors] = useState({
      primary: '#007bff',
      secondary: '#6c757d',
      accent: '#ffc107',
      text: '#212529',
      background: '#ffffff'
    });
  
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
        success: function(response) {
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
        error: function() {
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
      <div className="fb-modal-overlay">
        <div className="fb-modal">
          <div className="fb-modal-header">
            <h2>Site Import Configuration</h2>
            <button className="fb-modal-close" onClick={onClose}>×</button>
          </div>
          
          <div className="fb-modal-content">
            {/* Colors Section */}
            <div className="fb-section">
              <h3>Global Colors</h3>
              <div className="fb-color-grid">
                {Object.entries(colors).map(([key, value]) => (
                  <div key={key} className="fb-color-field">
                    <label className="fb-label">{key.charAt(0).toUpperCase() + key.slice(1)} Color</label>
                    <div className="fb-color-inputs">
                      <input 
                        type="color" 
                        value={value}
                        onChange={(e) => setColors(prev => ({
                          ...prev,
                          [key]: e.target.value
                        }))}
                        className="fb-color-picker"
                      />
                      <input 
                        type="text" 
                        value={value}
                        onChange={(e) => setColors(prev => ({
                          ...prev,
                          [key]: e.target.value
                        }))}
                        className="fb-text-input"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Typography Section */}
            <div className="fb-section">
              <h3>Typography</h3>
              <div className="fb-typography-grid">
                <div className="fb-field">
                  <label className="fb-label">Heading Font</label>
                  <select 
                    value={typography.headingFont}
                    onChange={(e) => setTypography(prev => ({
                      ...prev,
                      headingFont: e.target.value
                    }))}
                    className="fb-select"
                  >
                    {fontOptions.map(font => (
                      <option key={font} value={font}>{font}</option>
                    ))}
                  </select>
                </div>
  
                <div className="fb-field">
                  <label className="fb-label">Body Font</label>
                  <select
                    value={typography.bodyFont}
                    onChange={(e) => setTypography(prev => ({
                      ...prev,
                      bodyFont: e.target.value
                    }))}
                    className="fb-select"
                  >
                    {fontOptions.map(font => (
                      <option key={font} value={font}>{font}</option>
                    ))}
                  </select>
                </div>
  
                <div className="fb-field">
                  <label className="fb-label">Base Font Size</label>
                  <input
                    type="text"
                    value={typography.baseSize}
                    onChange={(e) => setTypography(prev => ({
                      ...prev,
                      baseSize: e.target.value
                    }))}
                    className="fb-text-input"
                  />
                </div>
  
                <div className="fb-field">
                  <label className="fb-label">Type Scale</label>
                  <input
                    type="number"
                    step="0.1"
                    value={typography.scale}
                    onChange={(e) => setTypography(prev => ({
                      ...prev,
                      scale: e.target.value
                    }))}
                    className="fb-text-input"
                  />
                </div>
              </div>
            </div>
          </div>
  
          <div className="fb-modal-footer">
            <button className="button button-secondary" onClick={onClose}>Cancel</button>
            <button className="button button-primary" onClick={handleImport}>Import Site</button>
          </div>
        </div>
  
        <style>{`
          .fb-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 160000;
          }
  
          .fb-modal {
            background: white;
            border-radius: 3px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
          }
  
          .fb-modal-header {
            padding: 15px 20px;
            border-bottom: 1px solid #ddd;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
  
          .fb-modal-close {
            border: none;
            background: none;
            font-size: 24px;
            cursor: pointer;
            padding: 0 5px;
          }
  
          .fb-modal-content {
            padding: 20px;
          }
  
          .fb-section {
            margin-bottom: 24px;
          }
  
          .fb-color-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
  
          .fb-typography-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
  
          .fb-color-field {
            margin-bottom: 12px;
          }
  
          .fb-color-inputs {
            display: flex;
            gap: 8px;
          }
  
          .fb-label {
            display: block;
            margin-bottom: 6px;
          }
  
          .fb-color-picker {
            width: 50px;
            height: 30px;
            padding: 0;
          }
  
          .fb-text-input {
            width: 100%;
            height: 30px;
            padding: 4px 8px;
          }
  
          .fb-select {
            width: 100%;
            height: 30px;
          }
  
          .fb-modal-footer {
            padding: 15px 20px;
            border-top: 1px solid #ddd;
            display: flex;
            justify-content: flex-end;
            gap: 10px;
          }
        `}</style>
      </div>
    );
  };

  export default SiteImportModal;