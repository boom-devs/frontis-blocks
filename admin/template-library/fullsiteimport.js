import { useState, useEffect } from "@wordpress/element";
import TypographyPanel from "./fullSiteTypography";
import { ColorPicker, Dropdown } from '@wordpress/components';
import SitePreview from "./sitePreview";

const SiteImportModal = ({ isOpen, onClose, onImport }) => {
  const { nonce, ajaxUrl } = window.frontisBlocksAdmin;

  const initialColors = [
    { hex: '#007bff', name: 'Primary Color', slug: 'fb-global-primary-color' },
    { hex: '#6c757d', name: 'Secondary Color', slug: 'fb-global-secondary-color' },
    { hex: '#ffc107', name: 'Warning Color', slug: 'fb-global-warning-color' },
    { hex: '#212529', name: 'Dark Color', slug: 'fb-global-dark-color' },
    { hex: '#ffffff', name: 'Light Color', slug: 'fb-global-light-color' }
  ];

  const [colors, setColors] = useState(initialColors);
  const [typography, setTypography] = useState();

  const handleImport = () => {
    const selectedBlock = window.wp.data
      .select('core/block-editor')
      .getSelectedBlock();

    const postId = window.wp.data.select('core/editor').getCurrentPostId();

    if (!postId) {
      window.wp.data.dispatch('core/notices').createErrorNotice(
        'Error: Unable to fetch current post ID.',
        { type: 'snackbar' }
      );
      return;
    }

    // Combine color and typography data
    const configData = {
      colors,
      typography,
    };

    // Send everything in one request
    window.jQuery.ajax({
      url: ajaxUrl,
      type: 'POST',
      data: {
        action: 'fb_import_full_site',
        security: nonce,
        config: configData,
        post_id: postId,
        block_id: selectedBlock ? selectedBlock.clientId : '',
      },
      success: function (response) {
        if (response.success) {
          window.wp.data.dispatch('core/notices').createSuccessNotice(
            response.data.message || 'Site imported with demo content and global settings!',
            { type: 'snackbar' }
          );

          // Redirect after import
          const siteUrl = `${window.location.origin}${window.location.pathname.replace(/wp-admin.*/, '')}home/`;
          window.location.href = siteUrl;
        } else {
          window.wp.data.dispatch('core/notices').createErrorNotice(
            `Failed to import site: ${response.data || 'Unknown error occurred.'}`,
            { type: 'snackbar' }
          );
        }
      },
      error: function () {
        window.wp.data.dispatch('core/notices').createErrorNotice(
          'Error: AJAX request failed. Please try again.',
          { type: 'snackbar' }
        );
      },
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
            <FullSiteImportColorPicker colors={colors} setColors={setColors} />
            <TypographyPanel typography={typography} setTypography={setTypography} />
          </div>
          <div className="fb-fsi-modal-main-content">
            <SitePreview />
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


const FullSiteImportColorPicker = ({ colors, setColors }) => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  // Update iframe and main document styles dynamically
  const updateGlobalStyles = (updatedColors) => {
    const iframe = document.querySelector('iframe.fb-preview-frame');

    const injectStyles = (targetDocument) => {
      if (targetDocument) {
        let colorStyleTag = targetDocument.getElementById('fb-global-color-styles');

        if (!colorStyleTag) {
          colorStyleTag = targetDocument.createElement('style');
          colorStyleTag.id = 'fb-global-color-styles';
          targetDocument.head.appendChild(colorStyleTag);
        }

        const css = `
          :root {
            ${updatedColors.map(color => `--${color.slug}: ${color.hex};`).join('\n')}
          }
          body p, body span, body h1, body h2, body h3, body h4, body h5, body h6 {
            color: var(--fb-global-primary-color);
          }
          body a {
            color: var(--fb-global-secondary-color);
          }
        `;

        colorStyleTag.textContent = css; // Use textContent instead of innerHTML to avoid HTML parsing issues
      }
    };

    if (iframe && iframe.contentDocument) {
      injectStyles(iframe.contentDocument);
    }
  };

  // Apply styles on mount
  useEffect(() => {
    updateGlobalStyles(colors);
  }, [colors]);

  // Handle color change
  const handleColorChange = (newColor, index) => {
    const updatedColors = [...colors];
    updatedColors[index].hex = newColor;
    setColors(updatedColors);

    // Update styles live
    updateGlobalStyles(updatedColors);
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
              renderToggle={({ onToggle }) => (
                <div
                  className="fb-color-circle"
                  style={{
                    backgroundColor: color.hex,
                    border: color.hex === '#ffffff' ? '1px solid #ddd' : 'none',
                    transition: 'background-color 0.3s ease',
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
            {activeTooltip === index && <div className="fb-color-tooltip">{color.name}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};